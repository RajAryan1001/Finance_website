import React, { useState } from 'react';
import Layout from '../Components/Layout/Layout';
import Footer from '../Components/Layout/Footer'

const FAQAndResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What services does FinanceHub offer?",
      answer: "FinanceHub offers a comprehensive suite of financial services tailored to meet your individual needs. Our services include:\n\n1. Investment Advisory: We provide personalized investment strategies based on your risk tolerance and financial goals.\n2. Retirement Planning: Our experts help you create a robust retirement plan, considering factors like inflation, life expectancy, and desired lifestyle.\n3. Tax Consultation: We offer guidance on tax-efficient investment strategies and help you navigate complex tax laws.\n4. Estate Planning: We assist in creating estate plans to ensure your assets are distributed according to your wishes.\n5. Financial Education: We offer workshops, webinars, and one-on-one sessions to improve your financial literacy.\n6. Debt Management: Our advisors can help you create a plan to manage and reduce your debt effectively.\n7. Insurance Analysis: We review your insurance needs and recommend appropriate coverage for your situation."
    },
    {
      id: 2,
      question: "How can I schedule a consultation?",
      answer: "Scheduling a consultation with FinanceHub is easy and convenient. You have several options:\n\n1. Online Booking: Visit our website and use our online scheduling tool to choose a date and time that works best for you.\n2. Phone: Call our customer service line at 1-800-FINANCE (1-800-346-2623). Our representatives are available Monday through Friday, 9 AM to 5 PM EST.\n3. Email: Send an email to consultations@financehub.com with your preferred dates and times, and we'll get back to you within one business day.\n4. In-person: Visit our main office at 123 Finance Street, Cityville, State 12345 during business hours to schedule your appointment.\n\nDuring the initial consultation, which is free of charge, we'll discuss your financial situation, goals, and how FinanceHub can assist you in achieving them. Please come prepared with any relevant financial documents and a list of questions you may have."
    },
    {
      id: 3,
      question: "What are your fees for financial planning services?",
      answer: "Our fee structure is designed to be transparent and fair, reflecting the complexity of your financial situation and the services required. Here's a general overview:\n\n1. Initial Consultation: Free of charge\n2. Comprehensive Financial Plan: $1,500 - $5,000, depending on complexity\n3. Investment Management: 0.5% - 1.5% of assets under management annually, with a sliding scale for larger portfolios\n4. Hourly Consultation: $200 - $400 per hour, depending on the advisor's experience and the complexity of the issues\n5. Retainer Services: $2,000 - $10,000 annually for ongoing comprehensive financial planning and investment management\n\nPlease note that these are general ranges, and your specific fees may vary. We provide a detailed fee schedule during your initial consultation, ensuring you have a clear understanding of the costs associated with our services. We believe in providing value that exceeds our fees and are committed to helping you achieve your financial goals."
    },
    {
      id: 4,
      question: "Do you offer online services?",
      answer: "Yes, FinanceHub offers a wide range of online services to accommodate our clients' busy schedules and preferences for digital interaction. Our online services include:\n\n1. Virtual Consultations: Meet with your financial advisor via secure video conferencing.\n2. Webinars: Participate in live educational sessions on various financial topics.\n3. Digital Financial Planning Tools: Access our suite of online tools for budgeting, investment analysis, and retirement planning.\n4. Secure Document Sharing: Safely upload and share financial documents through our encrypted portal.\n5. Mobile App: Monitor your investments, track your financial goals, and communicate with your advisor on-the-go.\n6. E-newsletters: Receive regular updates on market trends, financial tips, and FinanceHub news.\n7. Online Account Management: View your account balances, transaction history, and performance reports 24/7.\n8. Chat Support: Get quick answers to your questions through our live chat feature during business hours.\n\nOur online services are designed to complement our in-person offerings, providing you with flexible options to manage your finances and stay connected with your advisor."
    },
    {
      id: 5,
      question: "How often should I review my financial plan?",
      answer: "Regular reviews of your financial plan are crucial to ensure it remains aligned with your goals and current life circumstances. We recommend the following review schedule:\n\n1. Annual Review: At minimum, you should review your financial plan once a year. This allows you to assess your progress, make necessary adjustments, and ensure your plan still aligns with your goals.\n\n2. Life Changes: Review your plan whenever you experience significant life events such as:\n   - Marriage or divorce\n   - Birth or adoption of a child\n   - Career changes (new job, promotion, retirement)\n   - Receiving an inheritance or other large sum of money\n   - Purchasing a home\n   - Changes in health status\n\n3. Economic Changes: Major economic events or market shifts may warrant a review of your plan.\n\n4. Legislative Changes: New laws affecting taxes, retirement accounts, or estate planning may impact your financial strategy.\n\n5. Quarterly Check-ins: While not as comprehensive as an annual review, quarterly check-ins can help you stay on track and make minor adjustments as needed.\n\nRemember, your financial plan is a living document that should evolve with you. Regular reviews help ensure that your financial strategy remains effective and relevant to your current situation and future goals. At FinanceHub, we're committed to working with you to keep your plan up-to-date and on target."
    }
  ];

  const resources = [
    {
      id: 1,
      title: "Beginner's Guide to Investing",
      content: "Our Beginner's Guide to Investing is a comprehensive resource designed to help you start your investment journey with confidence. This guide covers:\n\n1. Understanding different types of investments (stocks, bonds, mutual funds, ETFs)\n2. The power of compound interest and long-term investing\n3. How to assess your risk tolerance\n4. Diversification and asset allocation strategies\n5. How to open an investment account\n6. Common investing mistakes to avoid\n7. The importance of regular investing and dollar-cost averaging\n8. How to read financial statements and evaluate investments\n9. The role of taxes in investing\n10. Sustainable and socially responsible investing options\n\nThis guide is regularly updated to reflect current market conditions and investment strategies, ensuring you have access to the most relevant and useful information as you begin your investing journey."
    },
    {
      id: 2,
      title: "Retirement Planning Calculator",
      content: "Our Retirement Planning Calculator is a powerful tool designed to help you estimate your retirement needs and plan accordingly. Here's what you can do with this calculator:\n\n1. Input your current age, desired retirement age, and life expectancy\n2. Enter your current savings, expected investment returns, and inflation rate\n3. Add details about your income, including salary increases and bonuses\n4. Include information about your current and expected expenses in retirement\n5. Factor in Social Security benefits and other sources of retirement income\n6. Adjust for different scenarios (early retirement, part-time work in retirement)\n7. View detailed projections of your retirement savings over time\n8. See how changes in your savings rate or investment strategy impact your retirement readiness\n9. Receive personalized recommendations based on your results\n\nRemember, while this calculator provides valuable insights, it's best used in conjunction with advice from a financial professional who can help you create a comprehensive retirement strategy."
    },
    {
      id: 3,
      title: "Tax Preparation Checklist",
      content: "Our Tax Preparation Checklist is a comprehensive guide to help you gather all necessary documents for tax season. It includes:\n\n1. Personal Information\n   - Social Security numbers for you, your spouse, and dependents\n   - Birth dates for you, your spouse, and dependents\n\n2. Income Documents\n   - W-2 forms from all employers\n   - 1099 forms for freelance or contract work\n   - Investment income statements (1099-DIV, 1099-INT, 1099-B)\n   - Rental property income\n   - Social Security benefits\n   - Unemployment income\n\n3. Deduction Documents\n   - Mortgage interest statements\n   - Property tax receipts\n   - Charitable donation receipts\n   - Medical expense records\n   - State and local taxes paid\n   - Educational expenses\n\n4. Credit Documents\n   - Child care expenses\n   - Education costs (1098-T)\n   - Retirement account contributions\n   - Energy-saving home improvement receipts\n\n5. Business Documents (if applicable)\n   - Profit and loss statement\n   - Capital equipment information\n   - Home office measurements\n\n6. Health Insurance Documents\n   - Form 1095-A if you enrolled in an insurance plan through the Marketplace\n\nThis checklist ensures you have all the necessary documentation to file your taxes accurately and maximize your deductions and credits."
    },
    {
      id: 4,
      title: "Financial Terms Glossary",
      content: "Our Financial Terms Glossary is a comprehensive guide to common financial terms and concepts. It's designed to help you navigate the complex world of finance with confidence. Here's a sample of terms included:\n\n1. Asset Allocation: The process of dividing investments among different asset categories like stocks, bonds, and cash.\n\n2. Bull Market: A market condition where prices are rising or expected to rise.\n\n3. Diversification: Spreading investments across various financial instruments to minimize risk.\n\n4. Exchange-Traded Fund (ETF): An investment fund traded on stock exchanges, holding assets like stocks, bonds, or commodities.\n\n5. Fiduciary: A person or entity that acts on behalf of another person, putting their clients' interests ahead of their own.\n\n6. Liquidity: The degree to which an asset can be quickly bought or sold without affecting its price.\n\n7. Market Capitalization: The total dollar value of a company's outstanding shares.\n\n8. Yield: The income return on an investment, typically expressed as a percentage.\n\n9. Volatility: A statistical measure of the dispersion of returns for a given security or market index.\n\n10. Compound Interest: Interest calculated on the initial principal and the accumulated interest from previous periods.\n\nOur glossary includes over 200 terms, each with clear, concise definitions and examples to help you understand and apply these concepts in your financial decision-making."
    },
    {
      id: 5,
      title: "Market Update Newsletter",
      content: "Our Market Update Newsletter is a valuable resource designed to keep you informed about market trends, economic indicators, and financial news. When you sign up, you'll receive:\n\n1. Monthly Market Recap: A summary of major market movements and their potential impact on your investments.\n\n2. Economic Indicators: Analysis of key economic data such as GDP growth, unemployment rates, and inflation.\n\n3. Sector Spotlight: In-depth look at specific market sectors, rotating each month to cover various industries.\n\n4. Global Market Trends: Insights into international markets and how global events may affect your portfolio.\n\n5. Legislative Updates: Information on new laws or regulations that could impact your financial strategy.\n\n6. Investment Strategy Tips: Practical advice on how to apply market insights to your investment approach.\n\n7. FinanceHub News: Updates on new services, tools, or resources available to our clients.\n\n8. Financial Planning Reminders: Timely tips related to tax planning, retirement savings, or other financial planning aspects.\n\n9. Market Outlook: Our experts' projections for market performance in the coming months.\n\n10. Educational Content: Links to in-depth articles or videos explaining complex financial concepts.\n\nOur newsletter is designed to provide you with actionable insights to help you make informed financial decisions. It's written in clear, accessible language, making it valuable for both seasoned investors and those new to the world of finance."
    }
  ];

  return (
    <Layout>
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>FAQ & Resources</h1>
        <p style={styles.subtitle}>Comprehensive financial information at your fingertips</p>
      </header>
      <main style={styles.main}>
        <div style={styles.tabContainer}>
          <button
            style={{...styles.tabButton, ...(activeTab === 'faq' ? styles.activeTab : {})}}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
          <button
            style={{...styles.tabButton, ...(activeTab === 'resources' ? styles.activeTab : {})}}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </button>
        </div>
        
        {activeTab === 'faq' && (
          <div style={styles.faqContainer}>
            <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
            {faqs.map((faq) => (
              <div key={faq.id} style={styles.faqItem}>
                <button
                  style={styles.faqQuestion}
                  onClick={() => setActiveQuestion(activeQuestion === faq.id ? null : faq.id)}
                >
                  {faq.question}
                  <span style={{...styles.faqIcon, transform: activeQuestion === faq.id ? 'rotate(180deg)' : 'rotate(0)'}}>▼</span>
                </button>
                {activeQuestion === faq.id && (
                  <div style={styles.faqAnswer}>
                    {faq.answer.split('\n').map((paragraph, index) => (
                      <p key={index} style={styles.paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'resources' && (
          <div style={styles.resourcesContainer}>
            <h2 style={styles.sectionTitle}>Financial Resources</h2>
            {resources.map((resource) => (
              <div key={resource.id} style={styles.resourceItem}>
                <h3 style={styles.resourceTitle}>{resource.title}</h3>
                <div style={styles.resourceContent}>
                  {resource.content.split('\n').map((paragraph, index) => (
                    <p key={index} style={styles.paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
     <Footer/>
    </Layout>
  );
};

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    width:'100vw'
  },
  header: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    fontWeight: 300,
  },
  main: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '0 1rem',
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  tabButton: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#f1f5f9',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  activeTab: {
    backgroundColor: '#3b82f6',
    color: 'white',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    color: '#1e3a8a',
  },
  faqContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  faqItem: {
    borderBottom: '1px solid #e2e8f0',
  },
  faqQuestion: {
    width: '100%',
    textAlign: 'left',
    padding: '1rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqIcon: {
    transition: 'transform 0.3s ease',
  },
  faqAnswer: {
    padding: '0 1rem 1rem 1rem',
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  resourcesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  resourceItem: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  resourceTitle: {
    fontSize: '1.4rem',
    marginBottom: '1rem',
    color: '#1e3a8a',
  },
  resourceContent: {
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  paragraph: {
    marginBottom: '1rem',
  },
};

export default FAQAndResourcesPage;