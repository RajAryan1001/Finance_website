import React, { useState, useEffect } from 'react';
import { ChevronDown, FileText, CheckSquare } from 'lucide-react';
import Layout from '../../Layout/Layout';
import '../../../styles/Servicescss/roc_return_filling.css';

export default function ROCReturnFiling() {
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

  const rocTopics = [
    {
      id: 'filingRequirements',
      title: 'Filing Requirements',
      icon: <FileText className="topic-icon" />,
      content: 'Understand the necessary documents and information required for ROC return filing. Ensure compliance with legal obligations to avoid penalties.'
    },
    {
      id: 'penalties',
      title: 'Penalties for Non-compliance',
      icon: <CheckSquare className="topic-icon" />,
      content: 'Learn about the penalties imposed for failing to file ROC returns on time and the importance of adhering to deadlines.'
    },
    {
      id: 'process',
      title: 'Filing Process',
      icon: <ChevronDown className="topic-icon" />,
      content: 'Step-by-step guide on how to file ROC returns electronically. Get familiar with the online portal and necessary forms.'
    },
    {
      id: 'annualCompliance',
      title: 'Annual Compliance',
      icon: <CheckSquare className="topic-icon" />,
      content: 'Understand the annual compliance requirements for companies and the importance of timely ROC filings.'
    },
    {
      id: 'updates',
      title: 'Updates and Notifications',
      icon: <FileText className="topic-icon" />,
      content: 'Stay informed about the latest updates from ROC regarding filing procedures and compliance requirements.'
    }
  ];

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? '' : section);
  };

  return (
    <Layout>
      <div className="roc-return-filing">
        <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }}></div>
        <header className="hero">
          <h1 className="hero-title">ROC Return Filing</h1>
          <p className="hero-subtitle">Ensure compliance and avoid penalties.</p>
        </header>
        <main className="content">
          <section className="intro">
            <h2>Master Your ROC Returns</h2>
            <p>Explore our comprehensive guide to ROC return filing, covering all necessary requirements and procedures to stay compliant.</p>
          </section>
          <section className="topics">
            {rocTopics.map((topic) => (
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
          <p>Start your compliance journey today. Consult with a professional for personalized advice.</p>
        </footer>
      </div>
    </Layout>
  );
}
