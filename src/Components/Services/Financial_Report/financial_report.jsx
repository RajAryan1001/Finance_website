import React, { useState, useEffect } from 'react';
import { FileText, BarChart2, Eye, Shield, ClipboardList, DollarSign, ChevronDown } from 'lucide-react';
import Layout from '../../Layout/Layout';
import '../../../styles/Servicescss/financial_report.css';

export default function FinancialReports() {
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

  const reportTopics = [
    {
      id: 'types',
      title: 'Types of Financial Reports',
      icon: <FileText className="topic-icon" />,
      content: 'Common types of financial reports include income statements, balance sheets, cash flow statements, and equity statements, each serving a specific purpose in financial analysis.'
    },
    {
      id: 'importance',
      title: 'Importance of Financial Reports',
      icon: <BarChart2 className="topic-icon" />,
      content: 'Financial reports provide vital insights into a company’s financial health, enabling stakeholders to make informed decisions regarding investments, operations, and strategy.'
    },
    {
      id: 'regulations',
      title: 'Regulatory Compliance',
      icon: <Shield className="topic-icon" />,
      content: 'Companies must comply with regulations such as GAAP or IFRS when preparing financial reports, ensuring transparency and consistency in financial disclosures.'
    },
    {
      id: 'analysis',
      title: 'Analyzing Financial Reports',
      icon: <Eye className="topic-icon" />,
      content: 'Proper analysis of financial reports involves ratio analysis, trend analysis, and benchmarking against industry standards to assess performance and identify improvement areas.'
    },
    {
      id: 'reporting',
      title: 'Reporting Best Practices',
      icon: <ClipboardList className="topic-icon" />,
      content: 'Adopting best practices in financial reporting, such as accuracy, timeliness, and clarity, enhances the credibility of reports and fosters stakeholder trust.'
    },
    {
      id: 'financial-health',
      title: 'Understanding Financial Health',
      icon: <DollarSign className="topic-icon" />,
      content: 'Interpreting financial reports helps assess a company’s liquidity, profitability, and solvency, providing a comprehensive view of its financial position.'
    }
  ];

  return (
    <Layout>
      <div className="financial-reports">
        <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }}></div>
        <header className="hero">
          <h1 className="hero-title">Financial Reports</h1>
          <p className="hero-subtitle">Your guide to understanding financial reports</p>
        </header>
        <main className="content">
          <section className="intro">
            <h2>Unlocking Financial Insights</h2>
            <p>Learn about various financial reports and their importance in assessing the financial performance of businesses.</p>
          </section>
          <section className="topics">
            {reportTopics.map((topic) => (
              <div key={topic.id} className={`topic ${activeSection === topic.id ? 'active' : ''}`}>
                <button className="topic-header" onClick={() => toggleSection(topic.id)} key={topic.id}>
                  {topic.icon}
                  <h3>{topic.title}</h3>
                  <ChevronDown className="chevron" />
                </button>
                {activeSection === topic.id && (
                  <div className="topic-content">
                    <p>{topic.content}</p>
                  </div>
                )}
              </div>
            ))}
          </section>
        </main>
        <footer>
          <p>For comprehensive financial analysis, consult with a financial advisor to interpret your reports effectively.</p>
        </footer>
      </div>
    </Layout>
  );
}
