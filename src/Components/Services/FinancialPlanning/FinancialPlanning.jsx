import React, { useState, useEffect } from 'react';
import { ChevronDown, DollarSign, PieChart, TrendingUp, Shield, Book, Target, Briefcase, GraduationCap, Home, Heart } from 'lucide-react';
import Layout from '../../Layout/Layout';
import '../../../styles/Servicescss/FinancialPlanning.css';


export default function FinancialPlanningAZ() {
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

  // Removed TypeScript type annotation
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? '' : section);
  };

  const financialTopics = [
    {
      id: 'budgeting',
      title: 'Budgeting and Cash Flow Management',
      icon: <DollarSign className="topic-icon" />,
      content: 'Create a comprehensive budget to track income and expenses. Implement the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings and debt repayment. Use digital tools to automate expense tracking and categorization.'
    },
    {
      id: 'saving',
      title: 'Saving and Emergency Fund',
      icon: <PieChart className="topic-icon" />,
      content: 'Build an emergency fund covering 3-6 months of living expenses. Automate savings with direct deposits to high-yield savings accounts. Consider laddered CDs for higher returns on short-term savings.'
    },
    {
      id: 'investing',
      title: 'Investment Strategies',
      icon: <TrendingUp className="topic-icon" />,
      content: 'Diversify your portfolio across stocks, bonds, real estate, and alternative investments. Consider low-cost index funds for long-term growth. Rebalance annually and adjust your asset allocation as you age or your goals change.'
    },
    {
      id: 'protection',
      title: 'Risk Management and Insurance',
      icon: <Shield className="topic-icon" />,
      content: 'Secure adequate coverage for health, life, disability, and property insurance. Regularly review and update policies. Consider umbrella insurance for additional liability protection.'
    },
    {
      id: 'taxPlanning',
      title: 'Tax Planning and Optimization',
      icon: <Book className="topic-icon" />,
      content: 'Maximize tax-advantaged accounts like 401(k)s, IRAs, and HSAs. Stay informed about tax law changes and deductions. Consider tax-loss harvesting for investment accounts. Consult with a tax professional for complex situations.'
    },
    {
      id: 'retirement',
      title: 'Retirement Planning',
      icon: <Target className="topic-icon" />,
      content: 'Start early and maximize contributions to retirement accounts. Understand your pension options and Social Security benefits. Consider a Roth conversion ladder for tax diversification. Plan for healthcare costs in retirement, including long-term care insurance.'
    },
    {
      id: 'estatePlanning',
      title: 'Estate Planning',
      icon: <Briefcase className="topic-icon" />,
      content: 'Create a will and consider setting up trusts. Designate beneficiaries for all accounts. Establish power of attorney and healthcare directives. Regularly review and update your estate plan as life circumstances change.'
    },
    {
      id: 'education',
      title: 'Education Planning',
      icon: <GraduationCap className="topic-icon" />,
      content: 'Start saving early with 529 plans or Coverdell ESAs. Understand the benefits and limitations of different education savings vehicles. Consider the impact of savings on financial aid eligibility.'
    },
    {
      id: 'realEstate',
      title: 'Real Estate and Mortgages',
      icon: <Home className="topic-icon" />,
      content: 'Understand the pros and cons of renting vs. buying. Learn about different mortgage types and how to qualify. Consider the total cost of homeownership, including taxes, insurance, and maintenance.'
    },
    {
      id: 'charitable',
      title: 'Charitable Giving and Philanthropy',
      icon: <Heart className="topic-icon" />,
      content: 'Develop a strategic giving plan aligned with your values. Understand the tax implications of different giving methods. Consider donor-advised funds or setting up a family foundation for larger-scale philanthropy.'
    }
  ];

  return (
    <Layout>
      <div className="financial-planning-az">
        <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }}></div>
        <header className="hero">
          <h1 className="hero-title">Financial Planning A-Z</h1>
          <p className="hero-subtitle">Your comprehensive guide to financial success</p>
        </header>
        <main className="content">
          <section className="intro">
            <h2>Master Your Finances</h2>
            <p>Explore our comprehensive guide to financial planning, covering everything from budgeting to estate planning. Click on each topic to learn more and start your journey to financial freedom.</p>
          </section>
          <section className="topics">
            {financialTopics.map((topic) => (
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
          <p>Start your financial journey today. Consult with a professional for personalized advice.</p>
        </footer>
      </div>
    </Layout>
  );
}
