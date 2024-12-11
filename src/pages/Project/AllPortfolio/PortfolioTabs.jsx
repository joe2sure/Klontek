import React from 'react';
import { Tab } from 'react-tabs';
import './PortfolioTabs.css';

export default function PortfolioTabs() {
  const tabData = [
    { label: 'Mobile', type: 'mobile' },
    { label: 'Website', type: 'website' },
    { label: 'UI/UX', type: 'uiux' }
  ];

  return (
    <>
      {tabData.map((tab, index) => (
        <Tab key={index}>
          <button className="portfolio-tab-button">{tab.label}</button>
        </Tab>
      ))}
    </>
  );
}