import React, { useState, useEffect } from 'react';
import { ChevronDown, Shield, Book, Target, Home, Heart } from 'lucide-react';
import Layout from '../../Layout/Layout';
import '../../../styles/Servicescss/PFAndESI.css';

export default function PFAndESI() {
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

  const pfAndEsiTopics = [
    {
      id: 'pf-registration',
      title: 'PF Registration Process',
      icon: <Shield className="topic-icon" />,
      content: 'Understand the steps to register for the Provident Fund (PF) scheme and the necessary documents required for the process.'
    },
    {
      id: 'esi-registration',
      title: 'ESI Registration Process',
      icon: <Book className="topic-icon" />,
      content: 'Learn how to register under the Employee State Insurance (ESI) scheme, including eligibility criteria and documentation needed.'
    },
    {
      id: 'contributions',
      title: 'PF and ESI Contributions',
      icon: <Target className="topic-icon" />,
      content: 'Explore the contribution structure for both PF and ESI, including employer and employee contributions and the benefits derived from them.'
    },
    {
      id: 'withdrawal',
      title: 'Withdrawal Process for PF',
      icon: <Home className="topic-icon" />,
      content: 'Find out how to withdraw your PF balance, the eligibility criteria, and the documentation required for a smooth process.'
    },
    {
      id: 'esi-benefits',
      title: 'Benefits of ESI',
      icon: <Heart className="topic-icon" />,
      content: 'Discover the various benefits provided under the ESI scheme, including medical benefits, maternity benefits, and more.'
    }
  ];

  return (
    <Layout>
      <div className="pf-and-esi">
        <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }}></div>
        <header className="hero">
          <h1 className="hero-title">PF and ESI</h1>
          <p className="hero-subtitle">Your guide to Provident Fund and Employee State Insurance</p>
        </header>
        <main className="content">
          <section className="intro">
            <h2>Understanding PF and ESI</h2>
            <p>Explore our comprehensive guide on Provident Fund (PF) and Employee State Insurance (ESI) to ensure you maximize your benefits.</p>
          </section>
          <section className="topics">
            {pfAndEsiTopics.map((topic) => (
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
          <p>For more personalized advice, consider consulting with a financial professional.</p>
        </footer>
      </div>
    </Layout>
  );
}
