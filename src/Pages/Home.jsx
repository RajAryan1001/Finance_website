import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, PieChart, Shield, TrendingUp } from 'lucide-react';
import Layout from '../Components/Layout/Layout';
import Footer from '../Components/Layout/Footer';
import WhyChooseUsAndSolutions from '../Components/Layout/WeChoose';
import '../styles/Home.css';

export default function HomePage() {
  const features = [
    { icon: <DollarSign className="feature-icon" />, title: "Investment Planning", description: "Tailored strategies to maximize your returns." },
    { icon: <PieChart className="feature-icon" />, title: "Wealth Management", description: "Comprehensive services to grow and protect your assets." },
    { icon: <Shield className="feature-icon" />, title: "Risk Assessment", description: "Thorough analysis to safeguard your investments." },
    { icon: <TrendingUp className="feature-icon" />, title: "Retirement Strategies", description: "Expert guidance on retirement planning." },
  ];

  return (
    <Layout>
      <div className="home-page">
        <div className="hero">
          <div className="hero-content">
            <h1>Your Path to Financial Success</h1>
            <p>Secure, Smart, and Customized Solutions for Your Financial Future</p>
            <Link to="/services" className="cta-button">
              Get Started
              <ArrowRight className="arrow-icon" />
            </Link>
          </div>
        </div>

        <div className="main-content">
          <section className="services">
            <h2>Our Services</h2>
            <p>Comprehensive financial solutions tailored to your needs.</p>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="icon-wrapper">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
          <WhyChooseUsAndSolutions />

          <section className="cta-section">
            <h2>Ready to Secure Your Financial Future?</h2>
            <p>Take the first step towards financial success. Our team of experts is ready to guide you.</p>
            <Link to="/contact" className="cta-button">
              Contact Us Today
              <ArrowRight className="arrow-icon"/>
            </Link>
          </section>
        </div>

        <style jsx>{`
          /* Resetting margin, padding, and box-sizing */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          /* Ensure responsive layout */
          html {
            font-size: 100%; /* 1rem = 16px */
            scroll-behavior: smooth; /* Smooth scrolling behavior */
            overflow-x: hidden;
          }

          body {
            font-family: Arial, Helvetica, sans-serif;
            line-height: 1.6;
            color: #333; /* Default text color */
            background-color: #f4f4f4; /* Default background color */
            margin: 0;
            padding: 0;
            overflow-x: hidden !important;
          
          }

          .home-page {
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.6;
            width: 100vw;
          }

          .hero {
            background-color: #2563eb;
            color: white;
            padding: 4rem 2rem;
            text-align: center;

          }

          .hero h1 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            animation: fadeInDown 1s ease-out;
          }

          .hero p {
            font-size: 1.25rem;
            margin-bottom: 2rem;
            animation: fadeInDown 1s ease-out;
          }

          .cta-button {
            display: inline-flex;
            align-items: center;
            background-color: white;
            color: #2563eb;
            padding: 0.75rem 1.5rem;
            border-radius: 0.375rem;
            text-decoration: none;
            font-weight: bold;
            transition: background-color 0.3s;
            animation: fadeInDown 1s ease-out;
          }

          .cta-button:hover {
            background-color: #f0f0f0;
          }

          .arrow-icon {
            margin-left: 0.5rem;
          }

          .main-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem;
          }

          .services h2, .cta-section h2 {
            font-size: 2.5rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 1rem;
            animation: fadeInDown 1s ease-out;
          }

          .services > p, .cta-section > p {
            text-align: center;
            font-size: 1.125rem;
            margin-bottom: 3rem;
            animation: fadeInDown 1s ease-out;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }

          .feature-card {
            background-color: #f8fafc;
            border-radius: 0.5rem;
            padding: 2rem;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .icon-wrapper {
            background-color: #2563eb;
            color: white;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            
          }

          .feature-card h3 {
            font-size: 1.25rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            animation: fadeInDown 1s ease-out;
          }
          
          .feature-card p{
           animation: fadeInDown 1s ease-out;
          }
          .cta-section {
            text-align: center;
            margin-top: 4rem;
          }

          @media (max-width: 768px) {
            .hero h1 {
              font-size: 2rem;
            }

            .hero p {
              font-size: 1rem;
            }

            .main-content {
              padding: 2rem 1rem;
            }

            .features-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
        <Footer />
      </div>
    </Layout>
  );
}
