import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Tabs, TabList, TabPanel } from 'react-tabs';
import PortfolioTabs from './PortfolioTabs';
import PortfolioItem from './PortfolioItem';
import './AllPortfolio.css';

export default function AllPortfolio({ data }) {
  const mobile = data.filter((item) => item.type === 'Mobile Apps');
  const website = data.filter((item) => item.type === 'Website');

  return (
    <Fade bottom>
      <section className="portfolio-container">
        <Tabs className="portfolio-tabs">
          <TabList>
            <div className="tab-list">
              <PortfolioTabs />
            </div>
          </TabList>

          <TabPanel>
            <div className="portfolio-grid">
              {mobile.map((item, index) => (
                <PortfolioItem 
                  key={index} 
                  item={item} 
                  index={index} 
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="portfolio-grid">
              {website.map((item, index) => (
                <PortfolioItem 
                  key={index} 
                  item={item} 
                  index={index} 
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="portfolio-grid">
              {data.map((item, index) => (
                <PortfolioItem 
                  key={index} 
                  item={item} 
                  index={index} 
                />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </Fade>
  );
}