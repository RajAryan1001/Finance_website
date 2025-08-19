import React, { useState, useEffect } from 'react';
import { Award, FileText, Shield, TrendingUp, ClipboardCheck, DollarSign, ChevronDown } from 'lucide-react';
import Layout from '../../Layout/Layout';
import '../../../styles/Servicescss/ms&me.css';

export default function MSMEUdhyamCertificate() {
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

  const msmeTopics = [
    {
      id: 'benefits',
      title: 'Benefits of MSME/Udhyam Registration',
      icon: <Award className="topic-icon" />,
      content: 'Registering for an MSME/Udhyam Certificate provides access to government schemes, loans, and tax benefits, supporting small and medium enterprises.'
    },
    {
      id: 'eligibility',
      title: 'Eligibility Criteria',
      icon: <FileText className="topic-icon" />,
      content: 'Eligibility includes being a small, medium, or micro enterprise as defined by annual turnover and investment thresholds set by the government.'
    },
    {
      id: 'compliance',
      title: 'Compliance Requirements',
      icon: <Shield className="topic-icon" />,
      content: 'MSMEs must adhere to specified compliance standards, ensuring legal recognition and continued benefits of the MSME/Udhyam Certificate.'
    },
    {
      id: 'advantages',
      title: 'Advantages of Being MSME Registered',
      icon: <TrendingUp className="topic-icon" />,
      content: 'Certified MSMEs enjoy various benefits such as easier access to finance, government contracts, and protection against delayed payments.'
    },
    {
      id: 'process',
      title: 'Registration Process',
      icon: <ClipboardCheck className="topic-icon" />,
      content: 'The registration process is straightforward, involving online submission of business details and verification for Udhyam Certification.'
    },
    {
      id: 'financial-support',
      title: 'Financial Support for MSMEs',
      icon: <DollarSign className="topic-icon" />,
      content: 'Registered MSMEs can access loans, subsidies, and funding options to support growth and operational efficiency.'
    }
  ];

  return (
    <Layout>
      <div className="msme-udhyam-certificate">
        <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }}></div>
        <header className="hero">
          <h1 className="hero-title">MSME/Udhyam Certificate</h1>
          <p className="hero-subtitle">Unlocking Opportunities for Small and Medium Enterprises</p>
        </header>
        <main className="content">
          <section className="intro">
            <h2>Empowering Small Businesses</h2>
            <p>Discover the benefits and process of obtaining an MSME/Udhyam Certificate to support your business’s growth.</p>
          </section>
          <section className="topics">
            {msmeTopics.map((topic) => (
              <div key={topic.id} className={`topic ${activeSection === topic.id ? 'active' : ''}`}>
                <button
                  className="topic-header"
                  onClick={() => toggleSection(topic.id)}
                  aria-expanded={activeSection === topic.id}
                  aria-controls={`content-${topic.id}`}
                >
                  {topic.icon}
                  <h3>{topic.title}</h3>
                  <ChevronDown className="chevron" />
                </button>
                <div
                  id={`content-${topic.id}`}
                  className="topic-content"
                  style={{
                    maxHeight: activeSection === topic.id ? '500px' : '0',
                    transition: 'max-height 0.3s ease',
                  }}
                >
                  <p>{topic.content}</p>
                </div>
              </div>
            ))}
          </section>
        </main>
        <footer>
          <p>Consult a professional to ensure smooth registration and compliance with MSME guidelines.</p>
        </footer>
      </div>
    </Layout>
  );
}
