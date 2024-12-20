import React from 'react';
import NotFound from '../../assets/images/NotFound.png';
import './NotFoundPage.css';
import Button from '../../components/elements/Button';


const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-image-wrapper">
        <img src={NotFound} alt="Not Found" className="not-found-image" />
      </div>
      <h1 className="not-found-text">
        You weren't supposed to find this place...
      </h1>
      <div className="not-found-button-wrapper">
        <Button
          href="/"
          type="link"
          className="not-found-button"
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;