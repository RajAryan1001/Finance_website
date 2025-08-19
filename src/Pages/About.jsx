
'use client'

import React from 'react';
import Layout from '../Components/Layout/Layout';
import Footer from '../Components/Layout/Footer';
import "../styles/About-us.css";
import { Users, Award, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const companyStats = [
    { icon: Users, value: '10,000+', label: 'Clients Served' },
    { icon: Award, value: '25+', label: 'Years of Experience' },
    { icon: TrendingUp, value: '$5B+', label: 'Assets Managed' },
    { icon: Shield, value: '99.9%', label: 'Client Satisfaction' },
  ];

  const teamMembers = [
    { name: 'John Doe', position: 'CEO & Founder', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Jane Smith', position: 'Chief Financial Officer', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Mike Johnson', position: 'Head of Investment', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Sarah Brown', position: 'Client Relations Manager', image: '/placeholder.svg?height=300&width=300' },
  ];

  return (
    <Layout>
      <div className="about-page">
        <div className="hero">
          <div className="hero-content">
            <h1 className="hero-title">About FinanceCo</h1>
            <p className="hero-subtitle">Your Trusted Partner in Financial Success</p>
          </div>
          <div className="hero-overlay" />
        </div>

        <div className="about-container">
          <section className="company-intro">
            <h2>Our Story</h2>
            <p>Founded in 1998, FinanceCo has been at the forefront of financial innovation for over two decades. We've grown from a small startup to a leading financial services provider, always putting our clients' needs first.</p>
            <p>Our mission is to empower individuals and businesses to achieve their financial goals through expert guidance, cutting-edge technology, and personalized solutions.</p>
          </section>

          <section className="company-stats">
            {companyStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <stat.icon className="stat-icon" />
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </section>

          <section className="our-approach">
            <h2>Our Approach</h2>
            <div className="approach-content">
              <div className="approach-text">
                <p>At FinanceCo, we believe in a holistic approach to financial management. We combine time-tested strategies with innovative solutions to deliver exceptional results for our clients.</p>
                <ul>
                  <li>Personalized financial planning</li>
                  <li>Data-driven investment strategies</li>
                  <li>Continuous market analysis</li>
                  <li>Transparent communication</li>
                </ul>
              </div>
              <div className="approach-image">
                <img src="/placeholder.svg?height=400&width=600" alt="Our approach to financial management" />
              </div>
            </div>
          </section>

          <section className="team">
            <h2>Meet Our Leadership</h2>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-member">
                  <img src={member.image} alt={member.name} className="member-image" />
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="cta">
            <h2>Ready to Secure Your Financial Future?</h2>
            <p>Let's work together to achieve your financial goals.</p>
            <button className="cta-button">Schedule a Consultation</button>
          </section>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export default About;
