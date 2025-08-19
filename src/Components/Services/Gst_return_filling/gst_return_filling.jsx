import React, { useState, useEffect } from 'react';
import { ChevronDown, FileText, Calendar, AlertCircle, CheckCircle, HelpCircle, TrendingUp } from 'lucide-react';
import Layout from '../../Layout/Layout'; // Ensure this path is correct
import '../../../styles/Servicescss/gst_return_filling.css';

const GSTReturnFiling = () => {
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

  const gstTopics = [
    {
      id: 'overview',
      title: 'GST Return Filing Overview',
      icon: <FileText className="gst-topic-icon" />,
      content: 'GST return filing is a crucial process for businesses to report their GST liabilities and input tax credits. Regular and accurate filing ensures compliance with tax laws and helps maintain a healthy cash flow for your business.'
    },
    {
      id: 'types',
      title: 'Types of GST Returns',
      icon: <TrendingUp className="gst-topic-icon" />,
      content: 'There are several types of GST returns, including GSTR-1 (for outward supplies), GSTR-3B (monthly summary return), GSTR-9 (annual return), and more. The type of return you need to file depends on your business category and turnover.'
    },
    {
      id: 'deadlines',
      title: 'Filing Deadlines',
      icon: <Calendar className="gst-topic-icon" />,
      content: 'GST returns have specific filing deadlines. For instance, GSTR-1 is typically due by the 11th of the following month, while GSTR-3B is due by the 20th. Late filing can result in penalties, so it\'s crucial to adhere to these deadlines.'
    },
    {
      id: 'process',
      title: 'Filing Process',
      icon: <CheckCircle className="gst-topic-icon" />,
      content: 'The GST return filing process involves collecting all relevant data, reconciling your books, preparing the return, and submitting it through the GST portal. Our expert team can guide you through each step to ensure accuracy and compliance.'
    },
    {
      id: 'commonErrors',
      title: 'Common Errors to Avoid',
      icon: <AlertCircle className="gst-topic-icon" />,
      content: 'Common errors in GST return filing include mismatched input tax credits, incorrect HSN codes, and discrepancies between GSTR-1 and GSTR-3B. Our services help you identify and rectify these errors before submission.'
    },
    {
      id: 'ourServices',
      title: 'Our GST Return Filing Services',
      icon: <HelpCircle className="gst-topic-icon" />,
      content: 'We offer comprehensive GST return filing services, including data compilation, return preparation, error reconciliation, and timely submission. Our experts stay updated with the latest GST regulations to ensure your returns are always compliant.'
    }
  ];

  return (
    <Layout>
    <div className="gst-return-filing-container">
      <div className="gst-scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }}></div>
      <header className="gst-hero">
        <h1 className="gst-hero-title">GST Return Filing Services</h1>
        <p className="gst-hero-subtitle">Simplifying your tax compliance journey</p>
      </header>
      <main className="gst-content">
        <section className="gst-intro">
          <h2>Expert GST Return Filing</h2>
          <p>Navigate the complexities of GST return filing with our comprehensive services. Whether you're a small business or a large corporation, we ensure accurate and timely filing to keep your business compliant and stress-free.</p>
        </section>
        <section className="gst-topics">
          {gstTopics.map((topic) => (
            <div key={topic.id} className={`gst-topic ${activeSection === topic.id ? 'gst-active' : ''}`}>
              <button className="gst-topic-header" onClick={() => toggleSection(topic.id)}>
                {topic.icon}
                <h3>{topic.title}</h3>
                <ChevronDown className="gst-chevron" />
              </button>
              <div className="gst-topic-content">
                <p>{topic.content}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="gst-cta-section">
          <h2>Ready to simplify your GST return filing?</h2>
          <p>Our team of experts is here to help you navigate the GST return filing process with ease and accuracy.</p>
          <button className="gst-cta-button">Contact Us Today</button>
        </section>
      </main>
      <footer className="gst-footer">
        <p>Stay compliant, stay ahead. Let us handle your GST return filing while you focus on growing your business.</p>
      </footer>
    </div>
    </Layout>
  );
};

export default GSTReturnFiling;
