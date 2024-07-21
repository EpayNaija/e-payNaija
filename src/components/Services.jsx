import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service">
        <h3>Money Transfer</h3>
        <p>Send money globally with ease.</p>
      </div>
      <div className="service">
        <h3>Virtual Cards</h3>
        <p>Secure and instant virtual cards.</p>
      </div>
      <div className="service">
        <h3>Currency Exchange</h3>
        <p>Real-time exchange rates and conversion.</p>
      </div>
    </section>
  );
};

export default Services;
