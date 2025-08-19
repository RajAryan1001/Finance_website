import React, { useState, useEffect } from 'react';
import { ChevronDown, FileText, Calendar, AlertCircle, CheckCircle, HelpCircle, TrendingUp } from 'lucide-react';
import Layout from '../../Layout/Layout'; // Ensure this path is correct
import '../../../styles/Servicescss/income_tax_return_filling.css';

const IncomeTaxReturnFiling = () => {
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

  const taxTopics = [
    {
      id: 'overview',
      title: 'Income Tax Return Filing Overview',
      icon: <FileText className="tax-topic-icon" />,
      content: 'Income tax return filing is essential for every taxpayer to report income and tax liabilities. Timely and accurate filing ensures compliance with tax regulations and smooth processing of refunds or tax payments.'
    },
    {
      id: 'types',
      title: 'Types of Income Tax Returns',
      icon: <TrendingUp className="tax-topic-icon" />,
      content: 'There are several forms for income tax returns (ITR-1, ITR-2, etc.), each suited for different types of income and taxpayers. Choosing the right form based on your income source ensures correct filing and compliance.'
    },
    {
      id: 'deadlines',
      title: 'Filing Deadlines',
      icon: <Calendar className="tax-topic-icon" />,
      content: 'Income tax return deadlines vary based on the taxpayer type. Typically, individuals file by July 31, while companies have a deadline of September 30. Late filing may lead to penalties, so adherence to deadlines is critical.'
    },
    {
      id: 'process',
      title: 'Filing Process',
      icon: <CheckCircle className="tax-topic-icon" />,
      content: 'Filing an income tax return involves gathering income details, calculating tax liability, preparing the ITR form, and submitting it online. Our experts guide you through each step to ensure accurate and compliant filing.'
    },
    {
      id: 'commonErrors',
      title: 'Common Errors to Avoid',
      icon: <AlertCircle className="tax-topic-icon" />,
      content: 'Errors like incorrect bank details, TDS mismatch, and deductions can delay processing or trigger notices. We help identify and avoid common mistakes for a smooth filing experience.'
    },
    {
      id: 'ourServices',
      title: 'Our Income Tax Filing Services',
      icon: <HelpCircle className="tax-topic-icon" />,
      content: 'Our services include income tax return preparation, tax planning, error checking, and timely submission. Stay compliant with assistance from our experts who stay updated with tax laws and ensure your returns are filed accurately.'
    }
  ];

  return (
    <Layout>
      <div className="tax-return-filing-container">
        <div className="tax-scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }}></div>
        <header className="tax-hero">
          <h1 className="tax-hero-title">Income Tax Return Filing Services</h1>
          <p className="tax-hero-subtitle">Your trusted partner in tax compliance</p>
        </header>
        <main className="tax-content">
          <section className="tax-intro">
            <h2>Expert Income Tax Return Filing</h2>
            <p>Experience hassle-free income tax return filing with our expert services. From individuals to businesses, we help ensure compliance and maximize your tax benefits.</p>
          </section>
          <section className="tax-topics">
            {taxTopics.map((topic) => (
              <div key={topic.id} className={`tax-topic ${activeSection === topic.id ? 'tax-active' : ''}`}>
                <button className="tax-topic-header" onClick={() => toggleSection(topic.id)}>
                  {topic.icon}
                  <h3>{topic.title}</h3>
                  <ChevronDown className="tax-chevron" />
                </button>
                <div className="tax-topic-content">
                  <p>{topic.content}</p>
                </div>
              </div>
            ))}
          </section>
          <section className="tax-cta-section">
            <h2>Ready to simplify your income tax filing?</h2>
            <p>Our team is here to guide you through each step, ensuring accurate and stress-free filing.</p>
            <button className="tax-cta-button">Contact Us Today</button>
          </section>
        </main>
        <footer className="tax-footer">
          <p>Stay compliant, maximize savings. Let us handle your income tax return filing while you focus on your goals.</p>
        </footer>
      </div>
    </Layout>
  );
};

export default IncomeTaxReturnFiling;
