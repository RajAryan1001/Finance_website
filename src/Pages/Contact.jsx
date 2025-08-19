'use client'

import React, { useState, useEffect } from 'react'
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Layout from '../Components/Layout/Layout'
import Footer from '../Components/Layout/Footer'
import "../styles/Contact.css";

export default function AdvancedContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState('contact')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = `${totalScroll / windowHeight}`
      setScrollProgress(scroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = () => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <Layout>
    <div className="contact-page">
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Get in Touch</h1>
          <p className="hero-subtitle">We're here to help and answer any question you might have</p>
        </div>
        <div className="hero-overlay" />
      </div>

      <div className="contact-container">
        <div className="tabs-container">
          <div className="contact-tabs">
            <button 
              className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              Contact Us
            </button>
            <button 
              className={`tab ${activeTab === 'visit' ? 'active' : ''}`}
              onClick={() => setActiveTab('visit')}
            >
              Visit Us
            </button>
          </div>
        </div>

        <div className="contact-content">
          <div className={`contact-form ${activeTab === 'contact' ? 'active' : ''}`}>
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" id="name" name="name" required placeholder="Your Name" />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" required placeholder="Your Email" />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="form-group">
                <input type="tel" id="phone" name="phone" placeholder="Your Phone (optional)" />
                <label htmlFor="phone">Your Phone (optional)</label>
              </div>
              <div className="form-group">
                <select id="subject" name="subject" required>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                </select>
                <label htmlFor="subject">Subject</label>
              </div>
              <div className="form-group">
                <textarea id="message" name="message" required placeholder="Your Message"></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              <button type="submit" className="submit-button">
                <span>Send Message</span>
                <div className="button-bg"></div>
              </button>
            </form>
            {isSubmitted && (
              <div className="success-message">
                Thank you for your message. We'll get back to you soon!
              </div>
            )}
          </div>

          <div className={`visit-us ${activeTab === 'visit' ? 'active' : ''}`}>
            <h2>Visit our office</h2>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1845281395714!2d-73.98784368459377!3d40.758895279326984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fecf664df5%3A0x33d224a0d5dacca2!2sRockefeller%20Center!5e0!3m2!1sen!2sus!4v1635188123456!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="contact-info">
          {[
            { icon: MapPin, title: "Address", content: "123 Finance Street<br />New York, NY 10001" },
            { icon: Phone, title: "Phone", content: "+1 (555) 123-4567" },
            { icon: Mail, title: "Email", content: "contact@financeco.com" },
            { icon: Clock, title: "Business Hours", content: "Mon - Fri: 9AM - 5PM<br />Sat - Sun: Closed" }
          ].map((item, index) => (
            <div key={index} className="info-card">
              <item.icon className="icon" />
              <h3>{item.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
            </div>
          ))}
        </div>

        <div className="social-links">
          {[
            { icon: Facebook, label: "Facebook" },
            { icon: Twitter, label: "Twitter" },
            { icon: Linkedin, label: "LinkedIn" },
            { icon: Instagram, label: "Instagram" }
          ].map((item, index) => (
            <a key={index} href="#" aria-label={item.label}>
              <item.icon />
              <span className="sr-only">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </Layout>
  )
}