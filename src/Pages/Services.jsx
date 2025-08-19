'use client'

import React from 'react';
import Layout from '../Components/Layout/Layout';
import Footer from '../Components/Layout/Footer';
import '../styles/Services.css'
import { Laptop, TrendingUp, Palette, Database, Smartphone, FileText, CreditCard, Network } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: Laptop, title: "Web Design", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, dolor vitae corporis neque nostrum voluptates eum commodi. Enim aspernatur reiciendis expedita ut consequatur, facilis nihil dignissimos rerum cumque est a." },
    { icon: TrendingUp, title: "Marketing", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { icon: Palette, title: "Graphics", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { icon: Database, title: "Data Analysis", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id aliquam ipsam hic nesciunt voluptatem totam eligendi sapiente voluptas repudiandae sed consequatur porro soluta illo, assumenda a rem corporis voluptatum minus!" },
    { icon: Smartphone, title: "App Development", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { icon: FileText, title: "Accounting", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { icon: CreditCard, title: "Payroll", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { icon: Network, title: "Networking", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cum quam tenetur, officiis saepe illo corporis maiores libero assumenda natus, soluta veritatis rerum accusantium, accusamus adipisci cupiditate. Magnam, a. Quam." },
  ];

  return (
    <Layout>
      <div className="services-page">
        <div className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Our Services</h1>
            <h3 className="hero-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque modi animi non illo quis consectetur provident saepe distinctio,</h3>
          </div>
          <div className="hero-overlay" />
        </div>
        <div className="services-container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <service.icon className="icon" />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Services;