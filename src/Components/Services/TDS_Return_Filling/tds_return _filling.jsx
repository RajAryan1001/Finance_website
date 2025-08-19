import React, { useState, useEffect } from 'react';
import { ChevronDown, FileText, Calculator, Calendar, Shield, Clipboard, HelpCircle } from 'lucide-react';
import Layout from '../../Layout/Layout';
import '../../../styles/Servicescss/tds_return _filling.css';


export default function TDSReturnFiling() {
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

  const tdsTopics = [
    {
      id: 'overview',
      title: 'What is TDS Return Filing?',
      icon: <FileText className="tds-topic-icon" />,
      content: 'TDS (Tax Deducted at Source) Return Filing is a process in which taxpayers report taxes collected or deducted on various payments. This filing ensures compliance and proper tracking of income and expenses for tax purposes.'
    },
    {
      id: 'eligibility',
      title: 'Eligibility for TDS Filing',
      icon: <Clipboard className="tds-topic-icon" />,
      content: 'Certain categories of individuals, businesses, and entities are required to file TDS returns. It includes anyone deducting tax on salaries, interest, professional fees, and other specific payments as per tax regulations.'
    },
    {
      id: 'dueDates',
      title: 'TDS Return Due Dates',
      icon: <Calendar className="tds-topic-icon" />,
      content: 'TDS returns must be filed quarterly, with due dates for each quarter. Missing these deadlines may result in penalties. Ensure timely filing to avoid interest or penalty charges.'
    },
    {
      id: 'calculation',
      title: 'TDS Calculation',
      icon: <Calculator className="tds-topic-icon" />,
      content: 'Calculate TDS based on specific rates applicable to various income types, including salary, interest, and rent. Calculations must be accurate to avoid overpayment or underpayment.'
    },
    {
      id: 'compliance',
      title: 'TDS Compliance and Penalties',
      icon: <Shield className="tds-topic-icon" />,
      content: 'Compliance with TDS rules is essential to avoid penalties. Non-compliance can lead to interest on delayed payments, penalty for late filing, or disallowance of expenses in income tax returns.'
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      icon: <HelpCircle className="tds-topic-icon" />,
      content: 'Find answers to common questions about TDS filing, such as steps for correction, online filing, and handling refunds. Ensure accurate filing by understanding common filing queries.'
    }
  ];

  return (
    <Layout>
      <div className="tds-return-filing">
        <div className="scroll-progress-tds" style={{ transform: `scaleX(${scrollProgress / 100})` }}></div>
        <header className="hero-tds">
          <h1 className="hero-title-tds">TDS Return Filing</h1>
          <p className="hero-subtitle-tds">A complete guide to TDS return filing for individuals and businesses</p>
        </header>
        <main className="content-tds">
          <section className="intro-tds">
            <h2>Understanding TDS Return Filing</h2>
            <p>Explore the essentials of TDS return filing, including eligibility, calculation, and due dates. Click on each topic to learn more and ensure compliance with tax regulations.</p>
          </section>
          <section className="topics-tds">
            {tdsTopics.map((topic) => (
              <div key={topic.id} className={`topic-tds ${activeSection === topic.id ? 'active-tds' : ''}`}>
                <button className="topic-header-tds" onClick={() => toggleSection(topic.id)}>
                  {topic.icon}
                  <h3>{topic.title}</h3>
                  <ChevronDown className="chevron-tds" />
                </button>
                <div className="topic-content-tds">
                  <p>{topic.content}</p>
                </div>
              </div>
            ))}
          </section>
        </main>
        <footer className="footer-tds">
          <p>Consult with a tax professional for personalized TDS filing advice and compliance assistance.</p>
        </footer>
      </div>
    </Layout>
  );
}
