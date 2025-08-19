import React, { useState, useEffect } from 'react';
import { ChevronDown, DollarSign, Calculator, FileText, Briefcase, BarChart, PieChart, BookOpen, Folder } from 'lucide-react';
import Layout from '../../Layout/Layout';
import '../../../styles/Servicescss/Accounting.css';

export default function Accounting() {
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

  const accountingTopics = [
    {
      id: 'basics',
      title: 'Accounting Basics',
      icon: <DollarSign className="accounting-icon" />,
      content: 'Understand fundamental accounting principles, including assets, liabilities, and equity. Learn the double-entry bookkeeping system for accurate financial recording.'
    },
    {
      id: 'financialStatements',
      title: 'Financial Statements',
      icon: <FileText className="accounting-icon" />,
      content: 'Explore how to prepare and interpret the three main financial statements: the income statement, balance sheet, and cash flow statement.'
    },
    {
      id: 'costAccounting',
      title: 'Cost Accounting',
      icon: <Calculator className="accounting-icon" />,
      content: 'Analyze the costs of production and operations. Learn methods like job costing, process costing, and activity-based costing for better financial control.'
    },
    {
      id: 'budgetingForecasting',
      title: 'Budgeting and Forecasting',
      icon: <BarChart className="accounting-icon" />,
      content: 'Develop strategies for budgeting and forecasting to predict future revenue and expenses. Use financial data to set realistic goals and manage resources effectively.'
    },
    {
      id: 'auditing',
      title: 'Auditing',
      icon: <Briefcase className="accounting-icon" />,
      content: 'Learn the auditing process to ensure financial accuracy and compliance. Understand different types of audits, including internal and external audits.'
    },
    {
      id: 'taxAccounting',
      title: 'Tax Accounting',
      icon: <BookOpen className="accounting-icon" />,
      content: 'Navigate the complexities of tax accounting for individuals and businesses. Gain knowledge about tax regulations and strategies to minimize tax liabilities.'
    },
    {
      id: 'forensicAccounting',
      title: 'Forensic Accounting',
      icon: <Folder className="accounting-icon" />,
      content: 'Investigate financial data to detect fraud and financial discrepancies. Understand how forensic accounting supports legal cases and compliance.'
    },
    {
      id: 'managerialAccounting',
      title: 'Managerial Accounting',
      icon: <PieChart className="accounting-icon" />,
      content: 'Support decision-making with managerial accounting. Learn about cost behavior, variance analysis, and performance measurement for better business insights.'
    }
  ];

  return (
    <Layout>
      <div className="accounting-page">
        <div className="scroll-progress-accounting" style={{ transform: `scaleX(${scrollProgress / 100})` }}></div>
        <header className="hero-accounting">
          <h1 className="hero-title-accounting">Accounting Essentials</h1>
          <p className="hero-subtitle-accounting">Your complete guide to mastering accounting principles</p>
        </header>
        <main className="content-accounting">
          <section className="intro-accounting">
            <h2>Enhance Your Accounting Knowledge</h2>
            <p>Discover key accounting concepts, from financial statements to forensic accounting. Click on each topic to explore further and build a strong accounting foundation.</p>
          </section>
          <section className="topics-accounting">
            {accountingTopics.map((topic) => (
              <div key={topic.id} className={`topic-accounting ${activeSection === topic.id ? 'active-accounting' : ''}`}>
                <button className="topic-header-accounting" onClick={() => toggleSection(topic.id)}>
                  {topic.icon}
                  <h3>{topic.title}</h3>
                  <ChevronDown className="chevron-accounting" />
                </button>
                <div className="topic-content-accounting">
                  <p>{topic.content}</p>
                </div>
              </div>
            ))}
          </section>
        </main>
        <footer>
          <p>Start your accounting journey today. Consult with a professional for personalized advice.</p>
        </footer>
      </div>
    </Layout>
  );
}
