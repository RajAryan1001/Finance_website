
import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Footer.css"

const FinanceFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Financial Services",
      links: [
        { name: "GST Registration", url: "/services/gst_registration" },
        { name: "Income Tax Filing", url: "/services/income_tax_filing" },
        { name: "TDS Return Filing", url: "/services/tds_return_filing" },
        { name: "Company Registration", url: "/services/company_registration" },
      ]
    },
    {
      title: "Business Services",
      links: [
        { name: "Accounting", url: "/services/accounting" },
        { name: "Digital Signature", url: "/services/digital_signature" },
        { name: "ROC Filing", url: "/services/roc_filing" },
        { name: "MSME Registration", url: "/services/ms&me" },
      ]
    },
    {
      title: "Quick Links",
      links: [
        { name: "About Us", url: "/about" },
        { name: "Contact", url: "/contact" },
        { name: "FAQs", url: "/faqs" },
        { name: "Blog", url: "/blog" },
      ]
    },
  ];

  return (
    <footer className="finance-footer">
      <div className="finance-footer-content">
        <div className="finance-footer-main">
          <div className="finance-footer-logo-section">
            <Link to="/" className="finance-footer-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="finance-footer-logo-icon"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="finance-footer-logo-text">ShreeRam&Company</span>
            </Link>
            <p className="finance-footer-description">
              Your trusted partner for comprehensive financial and business solutions. We simplify your financial journey with expert services and personalized guidance.
            </p>
          </div>
          {footerSections.map((section, index) => (
            <div key={index} className="finance-footer-section">
              <h3 className="finance-footer-title">{section.title}</h3>
              <ul className="finance-footer-list">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.url} className="finance-footer-link">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="finance-footer-bottom">
          <p className="finance-footer-copyright">
            © {currentYear} FinanceHub. All rights reserved.
          </p>
          <div className="finance-footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="finance-footer-social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="finance-footer-social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="finance-footer-social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
       
      `}</style>
    </footer>
  );
};

export default FinanceFooter;