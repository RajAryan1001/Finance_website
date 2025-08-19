// CompanyRegistration.jsx

import React, { useState } from 'react';
import '../../../styles/Servicescss/company_regitration.css';
import Layout from '../../Layout/Layout';

const CompanyRegistration = () => {
  const [activeTopic, setActiveTopic] = useState(null);

  const toggleTopic = (index) => {
    setActiveTopic(activeTopic === index ? null : index);
  };

  const topics = [
    {
      title: "What is Company Registration?",
      content: "Company registration is the process of legally establishing a business entity in compliance with the law, providing it with a separate legal identity from its owners. This process grants the company rights, responsibilities, and a legal framework within which it can operate."
    },
    {
      title: "Types of Companies for Registration",
      content: "There are various types of companies you can register, such as Private Limited Company, Public Limited Company, Limited Liability Partnership (LLP), One Person Company, and more, each with its specific regulations and benefits."
    },
    {
      title: "Steps for Company Registration",
      content: "The company registration process typically involves name approval, submission of incorporation documents, obtaining a Certificate of Incorporation, and other formalities depending on the company type and jurisdiction."
    },
    {
      title: "Benefits of Company Registration",
      content: "Registering a company provides benefits like legal protection, limited liability, access to funding, and credibility. It also enables the company to own property, sue, and be sued in its own name."
    }
  ];

  return (
    <Layout>
    <div className="company-registration">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" />

      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero-title">Company Registration</h1>
        <p className="hero-subtitle">Everything you need to know to start your business legally and securely.</p>
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="intro">
          <h2>Introduction to Company Registration</h2>
          <p>Registering a company is a crucial first step in creating a legal structure for your business, protecting your assets, and giving your venture credibility.</p>
        </div>

        {/* Topics Section */}
        <div className="topics">
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`topic ${activeTopic === index ? 'active' : ''}`}
            >
              <button
                className="topic-header"
                onClick={() => toggleTopic(index)}
              >
                <span className="topic-icon">🏢</span>
                <h3>{topic.title}</h3>
                <span className="chevron">{activeTopic === index ? '▲' : '▼'}</span>
              </button>
              <div className="topic-content">
                <p>{topic.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Financial Insights. All rights reserved.</p>
      </footer>
    </div>
    </Layout>
  );
};

export default CompanyRegistration;
