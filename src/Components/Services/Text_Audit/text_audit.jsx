import React, { useState, useEffect } from 'react';
import { FileText, Search, Eye, Shield, ClipboardList, BarChart2, ChevronDown } from 'lucide-react';
import Layout from '../../Layout/Layout';
import '../../../styles/Servicescss/text_audit.css';

export default function TextAudit() {
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? '' : section);
  };

  const auditTopics = [
    {
      id: 'overview',
      title: 'Overview of Text Audit',
      icon: <FileText className="topic-icon" />,
      content: 'A text audit involves analyzing and reviewing documentation for accuracy, consistency, and compliance with regulatory standards.'
    },
    {
      id: 'importance',
      title: 'Importance of Text Audits',
      icon: <Search className="topic-icon" />,
      content: 'Text audits ensure that all written materials are clear, accurate, and adhere to industry regulations, which helps maintain trust and clarity.'
    },
    {
      id: 'process',
      title: 'Text Audit Process',
      icon: <Eye className="topic-icon" />,
      content: 'The audit process includes content review, checking for factual accuracy, consistency, and adherence to company or regulatory standards.'
    },
    {
      id: 'compliance',
      title: 'Ensuring Compliance',
      icon: <Shield className="topic-icon" />,
      content: 'Text audits help ensure that all content complies with relevant guidelines and standards, avoiding legal and operational risks.'
    },
    {
      id: 'best-practices',
      title: 'Best Practices in Text Audits',
      icon: <ClipboardList className="topic-icon" />,
      content: 'Following structured guidelines, maintaining consistency, and ensuring regular audits are key to effective text auditing practices.'
    },
    {
      id: 'reporting',
      title: 'Text Audit Reporting',
      icon: <BarChart2 className="topic-icon" />,
      content: 'Audit results should be documented clearly, with actionable feedback and recommendations for content improvements where necessary.'
    }
  ];

  return (
    <Layout>
      <div className="text-audit">
        <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }}></div>
        <header className="hero">
          <h1 className="hero-title">Text Audit</h1>
          <p className="hero-subtitle">Ensuring quality and compliance in your documentation</p>
        </header>
        <main className="content">
          <section className="intro">
            <h2>Comprehensive Text Analysis</h2>
            <p>Learn about the importance of text audits in maintaining document integrity and compliance.</p>
          </section>
          <section className="topics">
            {auditTopics.map((topic) => (
              <div key={topic.id} className={`topic ${activeSection === topic.id ? 'active' : ''}`}>
                <button className="topic-header" onClick={() => toggleSection(topic.id)}>
                  {topic.icon}
                  <h3>{topic.title}</h3>
                  <ChevronDown className="chevron" />
                </button>
                <div className="topic-content">
                  <p>{topic.content}</p>
                </div>
              </div>
            ))}
          </section>
        </main>
        <footer>
          <p>Consult with a professional to ensure your text audit process is thorough and compliant with industry standards.</p>
        </footer>
      </div>
    </Layout>
  );
}
