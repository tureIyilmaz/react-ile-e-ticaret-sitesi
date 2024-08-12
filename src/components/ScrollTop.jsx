import React from 'react';
import '../assets/css/ScrollTop.css';
import { FaArrowUp } from 'react-icons/fa';

function ScrollTop() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="scroll-to-top">
      <button className="fixed-button" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </div>
  );
}

export default ScrollTop;
