import React, { useState } from 'react';
import './PricingSection.css';
import { packagesData } from '../../../data/dummyData';



const PricingSection = () => {
  const [billingType, setBillingType] = useState('monthly');

  return (
    <section className="pricing-section">
      <div className="pricing-package-section">
        <h2 className="pricing-section-title">LEADING SERVICES</h2>
        <h1 className="pricing-main-title">Service Packages</h1>
        <p className="pricing-description">
          Choose from our tailored packages designed to meet the unique demands of every project. From emergency repairs to full system replacements, our plans are crafted to keep your facilities in top condition.
        </p>

        <div className="pricing-billing-toggle">
          <span className={billingType === 'pricing-monthly' ? 'pricing-active' : ''}>Monthly</span>
          <label className="pricing-toggle-switch">
            <input
              type="checkbox"
              onChange={() => setBillingType(billingType === 'monthly' ? 'yearly' : 'monthly')}
              checked={billingType === 'yearly'}
            />
            <span className="pricing-slider round"></span>
          </label>
          <span className={billingType === 'pricing-yearly' ? 'pricing-active' : ''}>Yearly</span>
        </div>

        <div className="pricing-packages-container">
          {packagesData.map((pkg, index) => (
            <div key={index} className={`pricing-package-card ${pkg.isPopular ? 'construction-popular' : ''}`}>
              {pkg.isPopular && <div className="pricing-popular-tag">Most Popular</div>}
              <h3 className="pricing-package-title">{pkg.title}</h3>
              <div className="pricing-package-price">
                <span className="pricing-currency">₦</span>
                <span className="pricing-amount">{pkg.price}</span>
                <span className="pricing-period">/ Per Month</span>
              </div>
              <ul className="pricing-features-list">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className={feature.included ? 'pricing-included' : 'pricing-not-included'}>
                    <span className="pricing-check-icon">{feature.included ? '✓' : '×'}</span>
                    {feature.text}
                  </li>
                ))}
              </ul>
              <button className="pricing-get-package-btn">Get This Package</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;