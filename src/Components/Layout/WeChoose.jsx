// import React from 'react';
// import { Check } from 'lucide-react';
// import Finance1 from '../../images/newbussiness.jpg';
// import Finance2 from '../../images/finance4.png';
// import '../../styles/WeChose.css';

// export default function WhyChooseUsAndSolutions() {
//   const whyChooseUsReasons = [
//     "Personalized strategies tailored to your unique needs",
//     "Comprehensive approach to wealth management",
//     "Cutting-edge technology and market insights"
//   ];

//   const solutionsFeatures = [
//     "Automated investment strategies",
//     "Real-time market analysis",
//     "Personalized financial planning",
//     "Secure transactions and data protection"
//   ];

//   return (
//     <div className="why-choose-and-solutions">
//       <section className="why-us">
//         <div className="container">
//           <h2>Why Choose Us</h2>
//           <div className="why-us-content">
//             <div className="why-us-text">
//               <ul>
//                 {whyChooseUsReasons.map((reason, index) => (
//                   <li key={index}>
//                     <Check className="check-icon" />
//                     {reason}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="why-us-image">
//               <img src={Finance1} alt="Why choose us" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="solutions-section">
//         <div className="container">
//           <h2>Our Solutions</h2> {/* Added heading here */}
//           <div className="solutions-content">
//             <div className="solutions-text">
//               <h3>We make your spending stress-free for you to have the perfect control.</h3>
//               <p>
//                 Our cutting-edge financial technology combines expert insights with powerful algorithms to provide you with personalized, efficient, and secure financial management solutions.
//               </p>
//               <ul className="feature-list">
//                 {solutionsFeatures.map((feature, index) => (
//                   <li key={index}>
//                     <Check className="check-icon" />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="solutions-image">
//               <img src={Finance2} alt="Our solutions" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
       
//       `}</style>
//     </div>
//   );
// }

import React from 'react';
import { Check } from 'lucide-react';
import Finance1 from '../../images/newbussiness.jpg';
import Finance2 from '../../images/finance4.png';
import '../../styles/WeChose.css';

export default function WhyChooseUsAndSolutions() {
  const whyChooseUsReasons = [
    "Expert financial advisors with years of experience",
    "Personalized strategies tailored to your unique needs",
    "Comprehensive approach to wealth management",
    "Cutting-edge technology and market insights"
  ];

  const solutionsFeatures = [
    "Automated investment strategies",
    "Real-time market analysis",
    "Personalized financial planning",
    "Secure transactions and data protection"
  ];

  return (
    <div className="why-choose-and-solutions">
      <section className="why-us">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="why-us-content">
            <div className="why-us-text">
              <h3>We empower your financial decisions for long-term success and peace of mind.</h3>
              <p>
                Our team of expert advisors combines years of experience with cutting-edge technology to provide you with comprehensive financial solutions tailored to your unique needs and goals.
              </p>
              <ul>
                {whyChooseUsReasons.map((reason, index) => (
                  <li key={index} className="reason-item">
                    <Check className="check-icon" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
            <div className="why-us-image">
              <img src={Finance1} alt="Why choose us" />
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-section">
        <div className="container">
          <h2 className="section-title">Our Solutions</h2>
          <div className="solutions-content">
            <div className="solutions-text">
              <h3>We make your spending stress-free for you to have the perfect control.</h3>
              <p>
                Our cutting-edge financial technology combines expert insights with powerful algorithms to provide you with personalized, efficient, and secure financial management solutions.
              </p>
              <ul className="feature-list">
                {solutionsFeatures.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <Check className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="solutions-image">
              <img src={Finance2} alt="Our solutions" />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
       
      `}</style>
    </div>
  );
}