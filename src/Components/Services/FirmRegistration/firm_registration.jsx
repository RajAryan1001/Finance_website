import React, { useState, useEffect } from 'react';
import { Briefcase, FileText, Shield, TrendingUp, Globe, Layers, ChevronDown } from 'lucide-react';
import Layout from '../../Layout/Layout';
import '../../../styles/Servicescss/firm_registration.css';

export default function FirmRegistration() {
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

  const firmTopics = [
    {
      id: 'benefits',
      title: 'Benefits of Firm Registration',
      icon: <Briefcase className="topic-icon" />,
      content: 'Registering your firm offers legal recognition, enhances credibility, and facilitates ease of doing business. It also opens up various government and financial benefits.'
    },
    {
      id: 'requirements',
      title: 'Registration Requirements',
      icon: <FileText className="topic-icon" />,
      content: 'To register, provide valid identification, address proof, and PAN for partners. Additionally, documents like partnership deeds or LLP agreements are required depending on the firm type.'
    },
    {
      id: 'types',
      title: 'Types of Firm Structures',
      icon: <Layers className="topic-icon" />,
      content: 'Firms can register as sole proprietorships, partnerships, LLPs, or private limited companies. Each type has unique legal and tax implications, suited for different business needs.'
    },
    {
      id: 'compliance',
      title: 'Compliance and Regulations',
      icon: <Shield className="topic-icon" />,
      content: 'Registered firms must adhere to various regulations, including income tax, GST, and labor laws. Regular audits and timely filings ensure compliance and avoid penalties.'
    },
    {
      id: 'expansion',
      title: 'Growth and Expansion Opportunities',
      icon: <TrendingUp className="topic-icon" />,
      content: 'A registered firm can explore funding, partnerships, and government schemes, facilitating expansion and enhancing operational scope across regions.'
    },
    {
      id: 'globalPresence',
      title: 'Establishing a Global Presence',
      icon: <Globe className="topic-icon" />,
      content: 'Firm registration enables businesses to engage in international trade and expand globally. Compliance with export/import regulations becomes easier for registered entities.'
    }
  ];

  return (
    <Layout>
      <div className="firm-registration">
        <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }}></div>
        <header className="hero">
          <h1 className="hero-title">Firm Registration</h1>
          <p className="hero-subtitle">Navigate the essentials for registering your firm</p>
        </header>
        <main className="content">
          <section className="intro">
            <h2>Setting Up for Success</h2>
            <p>Understand the steps and requirements for firm registration, enabling your business to operate with credibility and compliance.</p>
          </section>
          <section className="topics">
            {firmTopics.map((topic) => (
              <div key={topic.id} className={`topic ${activeSection === topic.id ? 'active' : ''}`}>
                <button className="topic-header" onClick={() => toggleSection(topic.id)}>
                  {topic.icon}
                  <h3>{topic.title}</h3>
                  <ChevronDown className="chevron" />
                </button>
                <div className={`topic-content ${activeSection === topic.id ? 'active' : ''}`}>
                  <p>{topic.content}</p>
                </div>
              </div>
            ))}
          </section>
        </main>
        <footer>
          <p>Consult a professional to guide your firm registration journey and stay compliant with legal requirements.</p>
        </footer>
      </div>
    </Layout>
  );
}
