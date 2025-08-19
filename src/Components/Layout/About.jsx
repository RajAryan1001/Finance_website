import React, { useState } from 'react';
import Finance from '../../images/newbussinesss2.jpg'; // Ensure this path is correct
import '../../styles/WhatWeDo.css';

const WhatWeDo = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the accordion item by index
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="what-we-do-section" aria-labelledby="what-we-do-label">
      <div className="what-we-do-container">
        
        <figure className="what-we-do-banner">
          <img 
            src={Finance} // Using the imported image
            width="800" 
            height="580" 
            loading="lazy" 
            alt="About banner" 
            className="what-we-do-image"
          />
        </figure>
        
        <div className="what-we-do-content">
          <p className="section-subtitle" id="what-we-do-label">Why Choose Us?</p>
          <h2 className="h2 section-title">We bring solutions to make life easier for our clients.</h2>
          <ul>
            {[
              { title: "Professional Design", content: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus." },
              { title: "Top-Notch Support", content: "Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel fermentum." },
              { title: "Exclusive Assets", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation." }
            ].map((item, index) => (
              <li key={index} className="what-we-do-item">
                <div className={`accordion-card ${openIndex === index ? 'expanded' : ''}`}>
                  <h3 className="card-title">
                    <button className="accordion-btn" onClick={() => toggleAccordion(index)}>
                      {item.title}
                    </button>
                  </h3>
                  <div
                    className={`accordion-content ${openIndex === index ? 'open' : ''}`}
                    style={{ maxHeight: openIndex === index ? '1000px' : '0px' }}
                  >
                    <p>{item.content}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;
