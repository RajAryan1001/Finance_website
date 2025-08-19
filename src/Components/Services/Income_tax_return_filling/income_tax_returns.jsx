import React, { useState, useEffect } from 'react';
import { ChevronDown, FileText, Calendar, AlertCircle, CheckCircle, HelpCircle, TrendingUp } from 'lucide-react';
import Layout from '../../Layout/Layout'; // Ensure this path is correct

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
      <>
         {/* Internal CSS inside style tag */}
      <style>{`
        body, html {
          overflow-x: hidden;
        }
        
        .gst-return-filing-container {
          --primary-color: #3b82f6;
          --primary-dark: #2563eb;
          --primary-light: #60a5fa;
          --secondary-color: #10b981;
          --accent-color: #f59e0b;
          --background-color: #f3f4f6;
          --text-color: #1f2937;
          --text-light: #6b7280;
          --white: #ffffff;
          --shadow-color: rgba(0, 0, 0, 0.1);
          --transition: all 0.3s ease;

          font-family: 'Inter', sans-serif;
          color: var(--text-color);
          background-color: var(--background-color);
          line-height: 1.5;
          width: 100vw;
        }

        .gst-scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background-color: var(--primary-color);
          transform-origin: left;
          z-index: 1000;
        }

        .gst-hero {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
          color: var(--white);
          padding: 4rem 2rem;
          text-align: center;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .gst-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, var(--primary-light) 0%, transparent 50%);
          opacity: 0.1;
          animation: rotate 60s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .gst-hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          text-align: center;
        }

        .gst-hero-subtitle {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .gst-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .gst-intro {
          text-align: center;
          margin-bottom: 3rem;
        }

        .gst-intro h2 {
          font-size: 2rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .gst-topics {
          display: grid;
          gap: 1.5rem;
        }

        .gst-topic {
          background-color: var(--white);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px var(--shadow-color);
          transition: var(--transition);
        }

        .gst-topic:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px var(--shadow-color);
        }

        .gst-topic-header {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 1.5rem;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .gst-topic-icon {
          width: 2rem;
          height: 2rem;
          color: var(--primary-color);
          margin-right: 1rem;
        }

        .gst-topic h3 {
          flex-grow: 1;
          font-size: 1.25rem;
          margin: 0;
        }

        .gst-chevron {
          width: 1.5rem;
          height: 1.5rem;
          color: var(--primary-color);
          transition: var(--transition);
        }

        .gst-topic.active .gst-chevron {
          transform: rotate(180deg);
        }

        .gst-topic-content {
          max-height: 0;
          overflow: hidden;
          transition: var(--transition);
        }

        .gst-topic.active .gst-topic-content {
          max-height: 500px;
          padding: 0 1.5rem 1.5rem;
        }

        .gst-cta-section {
          text-align: center;
          margin-top: 3rem;
        }

        .gst-cta-section h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .gst-cta-section p {
          margin-bottom: 1.5rem;
        }

        .gst-cta-button {
          padding: 0.75rem 2rem;
          font-size: 1rem;
          color: var(--white);
          background-color: var(--primary-color);
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color var(--transition);
        }

        .gst-cta-button:hover {
          background-color: var(--primary-dark);
        }

        .gst-footer {
          background-color: var(--primary-dark);
          color: var(--white);
          text-align: center;
          padding: 2rem;
          margin-top: 3rem;
        }

        @media (max-width: 768px) {
          .gst-hero-title {
            font-size: 2.5rem;
          }
        
          .gst-hero-subtitle {
            font-size: 1rem;
          }
        
          .gst-content {
            padding: 1rem;
          }
        
          .gst-topic-header {
            padding: 1rem;
          }
        
          .gst-topic.active .gst-topic-content {
            padding: 0 1rem 1rem;
          }
        }

        @media (min-width: 1024px) {
          .gst-topics {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
     
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

           <style>
          {
              
          }
        </style>
        </footer>

       
      </div>
       </>
    </Layout>
  );
};

export default IncomeTaxReturnFiling;
