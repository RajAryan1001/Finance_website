import React, { useState, useEffect } from 'react';
import { Briefcase, FileText, Shield, CreditCard, ClipboardCheck, DollarSign, ChevronDown } from 'lucide-react';
import Layout from '../../Layout/Layout';
import '../../../styles/Servicescss/trade&loan.css';

export default function TradeLicenceLoanService() {
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

  const licenceLoanTopics = [
    {
      id: 'benefits',
      title: 'Benefits of Trade Licence',
      icon: <Briefcase className="topic-icon" />,
      content: 'A trade licence ensures your business complies with regulatory standards, allowing legal operations and building customer trust.'
    },
    {
      id: 'eligibility',
      title: 'Eligibility Criteria',
      icon: <FileText className="topic-icon" />,
      content: 'Eligibility includes fulfilling zoning, structural, and safety requirements to meet municipal or regional trade licensing criteria.'
    },
    {
      id: 'compliance',
      title: 'Compliance and Renewal',
      icon: <Shield className="topic-icon" />,
      content: 'Regular renewals and compliance with trade regulations are essential for retaining your business licence and avoiding penalties.'
    },
    {
      id: 'loan-opportunities',
      title: 'Loan Opportunities for Businesses',
      icon: <CreditCard className="topic-icon" />,
      content: 'Small and medium businesses can access various loan options, providing essential funds for growth, operations, or expansions.'
    },
    {
      id: 'application-process',
      title: 'Application Process',
      icon: <ClipboardCheck className="topic-icon" />,
      content: 'The process involves submitting relevant documentation for both trade licence and loan applications, with adherence to required guidelines.'
    },
    {
      id: 'financial-support',
      title: 'Financial Support and Subsidies',
      icon: <DollarSign className="topic-icon" />,
      content: 'Many financial programs and subsidies are available for businesses to support sustainability and long-term growth.'
    }
  ];

  return (
    <Layout>
      <div className="trade-licence-loan-service">
        <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }}></div>
        <header className="hero">
          <h1 className="hero-title">Trade Licence & Loan Service</h1>
          <p className="hero-subtitle">Empowering Businesses with Legal and Financial Services</p>
        </header>
        <main className="content">
          <section className="intro">
            <h2>Business Empowerment Through Compliance and Financial Support</h2>
            <p>Explore the essential steps for obtaining a trade licence and leveraging loan services to support your business.</p>
          </section>
          <section className="topics">
            {licenceLoanTopics.map((topic) => (
              <div key={topic.id} className={`topic ${activeSection === topic.id ? 'active' : ''}`}>
                <button className="topic-header" onClick={() => toggleSection(topic.id)}>
                  {topic.icon}
                  <h3>{topic.title}</h3>
                  <ChevronDown className={`chevron ${activeSection === topic.id ? 'rotated' : ''}`} />
                </button>
                <div className="topic-content">
                  <p>{topic.content}</p>
                </div>
              </div>
            ))}
          </section>
        </main>
        <footer>
          <p>Reach out to a consultant for detailed assistance in acquiring a trade licence and accessing tailored financial solutions.</p>
        </footer>
      </div>
    </Layout>
  );
}
