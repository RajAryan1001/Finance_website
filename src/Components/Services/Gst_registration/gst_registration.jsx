import React, { useState, useEffect } from 'react';
import { ChevronDown, FileText, Clipboard, Calculator, Clock, Shield, HelpCircle } from 'lucide-react';
import Layout from '../../Layout/Layout'; // Ensure this path is correct
import '../../../styles/Servicescss/gst_registration.css';

const GSTRegistration = () => {
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    const debouncedHandleScroll = () => {
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', debouncedHandleScroll);
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, []);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? '' : section);
  };

  const gstTopics = [
    {
      id: 'overview',
      title: 'GST Registration Overview',
      icon: <FileText className="gst-topic-icon" />,
      content: 'GST (Goods and Services Tax) registration is mandatory for businesses with an annual turnover exceeding ₹40 lakhs (₹20 lakhs for North Eastern and hill states). It\'s a crucial step for businesses to legally operate and comply with Indian tax regulations.'
    },
    {
      id: 'documents',
      title: 'Required Documents',
      icon: <Clipboard className="gst-topic-icon" />,
      content: 'To register for GST, you\'ll need: PAN of the business, Aadhaar card, business registration documents, bank account statement/cancelled cheque, digital signature, and proof of business premises ownership/rent agreement.'
    },
    {
      id: 'process',
      title: 'Registration Process',
      icon: <Calculator className="gst-topic-icon" />,
      content: 'The GST registration process involves: filling the online application form, uploading necessary documents, verification through OTP/e-sign, and receiving the GST Identification Number (GSTIN) upon successful application.'
    },
    {
      id: 'timeline',
      title: 'Timeline and Validity',
      icon: <Clock className="gst-topic-icon" />,
      content: 'GST registration is usually processed within 3-7 working days. Once approved, the registration is valid indefinitely, unless surrendered, cancelled, or revoked as per GST laws.'
    },
    {
      id: 'benefits',
      title: 'Benefits of GST Registration',
      icon: <Shield className="gst-topic-icon" />,
      content: 'GST registration offers several benefits including legal recognition, ability to collect GST from customers, input tax credit claims, seamless inter-state business operations, and increased credibility with customers and suppliers.'
    },
    {
      id: 'support',
      title: 'Our Support Services',
      icon: <HelpCircle className="gst-topic-icon" />,
      content: 'Our team of expert consultants provides end-to-end support for GST registration. We assist with document preparation, application filing, follow-ups with tax authorities, and post-registration compliance guidance.'
    }
  ];

  return (
    <Layout>
      <div className="gst-registration-container">
        <div className="gst-scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }}></div>
        <header className="gst-hero">
          <h1 className="gst-hero-title">GST Registration Services</h1>
          <p className="gst-hero-subtitle">Simplifying your business tax compliance journey</p>
        </header>
        <main className="gst-content">
          <section className="gst-intro">
            <h2>Understanding GST Registration</h2>
            <p>Navigate the complexities of GST registration with our comprehensive guide and expert services. Whether you're a startup or an established business, we're here to ensure your GST compliance is smooth and hassle-free.</p>
          </section>
          <section className="gst-topics">
            {gstTopics.map((topic) => (
              <div key={topic.id} className={`gst-topic ${activeSection === topic.id ? 'gst-active' : ''}`}>
                <button className="gst-topic-header" onClick={() => toggleSection(topic.id)}>
                  {topic.icon}
                  <h3>{topic.title}</h3>
                  <ChevronDown className="gst-chevron" />
                </button>
                {activeSection === topic.id && (
                  <div className="gst-topic-content">
                    <p>{topic.content}</p>
                  </div>
                )}
              </div>
            ))}
          </section>
        </main>
        <footer className="gst-footer">
          <p>Ready to register for GST? Contact our experts today for personalized assistance and guidance.</p>
        </footer>
      </div>
    </Layout>
  );
};

export default GSTRegistration;