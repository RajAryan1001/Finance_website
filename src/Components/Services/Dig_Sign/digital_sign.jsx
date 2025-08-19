import React, { useState, useEffect } from 'react';
import { ChevronDown, Shield, Key, Lock, FileText, UserCheck } from 'lucide-react';
import Layout from '../../Layout/Layout';
import '../../../styles/Servicescss/digital_sign.css';

export default function DigitalSignature() {
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

  const digitalSignatureTopics = [
    {
      id: 'whatIs',
      title: 'What is a Digital Signature?',
      icon: <Shield className="topic-icon" />,
      content: 'A digital signature is a mathematical scheme for verifying the authenticity and integrity of digital messages or documents. It provides a way to ensure that a message was created by a known sender and was not altered in transit.'
    },
    {
      id: 'howItWorks',
      title: 'How Digital Signatures Work',
      icon: <Key className="topic-icon" />,
      content: 'Digital signatures use public key cryptography to create a secure and unique signature. The sender signs the document with their private key, and the recipient can verify it using the sender’s public key.'
    },
    {
      id: 'legalStatus',
      title: 'Legal Status of Digital Signatures',
      icon: <Lock className="topic-icon" />,
      content: 'Digital signatures are legally recognized in many jurisdictions, including the U.S. and EU, as valid and binding as handwritten signatures. Various laws, like the ESIGN Act and eIDAS regulation, provide the legal framework for their use.'
    },
    {
      id: 'applications',
      title: 'Applications of Digital Signatures',
      icon: <FileText className="topic-icon" />,
      content: 'Digital signatures are widely used for securing emails, software distribution, financial transactions, and legal contracts. They enhance security and efficiency in online communications.'
    },
    {
      id: 'benefits',
      title: 'Benefits of Using Digital Signatures',
      icon: <UserCheck className="topic-icon" />,
      content: 'Digital signatures provide authenticity, integrity, non-repudiation, and increased efficiency. They streamline workflows by eliminating the need for physical signatures.'
    }
  ];

  return (
    <Layout>
      <div className="digital-signature">
        <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }}></div>
        <header className="hero">
          <h1 className="hero-title">Digital Signature</h1>
          <p className="hero-subtitle">Secure your digital communications with confidence</p>
        </header>
        <main className="content">
          <section className="intro">
            <h2>Understanding Digital Signatures</h2>
            <p>Learn about digital signatures, how they work, and their significance in the digital world. Click on each topic to dive deeper into the subject.</p>
          </section>
          <section className="topics">
            {digitalSignatureTopics.map((topic) => (
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
          <p>Explore the world of digital signatures and enhance your security in digital transactions.</p>
        </footer>
      </div>
    </Layout>
  );
}
