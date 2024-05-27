import React, { useEffect, useRef } from 'react';
import './homepage.css';
import temp from '../../assets/Temp1.png'
import introimage from '../../assets/intro-img.png'
import { Link } from "react-router-dom";
import FAQ from '../../Components/Accordion/acc.jsx'

const Homepage = () => {
  const introDescriptionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('light-up');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (introDescriptionRef.current) {
      observer.observe(introDescriptionRef.current);
    }

    return () => {
      if (introDescriptionRef.current) {
        observer.unobserve(introDescriptionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <nav className='navbar'>
        <a href='#' className='logo'> Medi<span className='logo-half'>Tracer</span></a>
        <ul>
          <li><a href="#service">How it works</a></li>
          <li><a href="#service">About</a></li>
          <li><a href="#service">Don't have an account?</a></li>
          <li><Link to="/log-in"><botton type="submit" className="item-container-1"> Log In </botton></Link></li>
        </ul>
      </nav>

      <div className='intro'>
        <h1 className='intro-text'>Get ready to <br/><span className="highlight">supercharge</span> <br/> your health<br/>and planning<br/>like never <br/>before.</h1>
        <img src={introimage} alt="Medication" className='intro-image1'/>
      </div>

      <div className='Vision'>
        <h1 className='intro-description' ref={introDescriptionRef}>MediTracer's Objectives</h1>
        <div className="cards">
          <div className="mission-card">
            <h1 className='card-head'>Mission</h1>
            <p className='card-text'>
              Meditracer aims to transform healthcare through innovative technology, enhancing patient care, and simplifying administrative processes.
            </p>
          </div>
          <div className="mission-card">
            <h1 className='card-head'>Vision</h1>  
            <p className='card-text'>
              Meditracer envisions a future where healthcare is seamless, personalized, and accessible to all, empowering individuals and healthcare professionals alike to achieve better health outcomes.
            </p>          
          </div>
          <div className="mission-card-wide">
            <h1 className='card-head'>Purpose</h1>
            <p className='card-text'>
              Meditracer dreams of a tomorrow where healthcare transcends barriers, embracing seamless integration, personalization, and universal accessibility. Our purpose is a catalyst, empowering every individual and healthcare professional to forge pathways toward enhanced well-being and unprecedented health outcomes.
            </p>          
          </div>
        </div>
      </div>

      <div className="works">
        <div className="work-intro-text">
          <div className="work-header">
            <h1 className='work-header-text'>
              Unlock your full potential <br/> with our cutting-edge features
            </h1>
            <p>
              From intuitive task management to advanced data analytics, our software equips <br/> you with the tools you need to thrive in today's competitive business landscape.
            </p>
          </div>
        </div>
        <div className='work-1'>
          <div className="text-content">
            <h1 className='text-content-header'>
              Easily tracing your Medication, <br/> every day, every week, with ease
            </h1>
            <p>
              easily handle your medication, and other health related products
            </p>
          </div>
          <img src={temp} alt="Medication" className='work-image'/>
        </div>
      </div>

      <div className="faq">
        <div className="faq-side1">
          <div className="faq-intro-text">
            <div className="faq-header">
              <h1 className='faq-header-text'>
                Still not convinced? <br/>Here are your answers
              </h1>
            </div>
          </div>
          <FAQ />
        </div>
      </div>

      <div className="download">
        <div>
          <h1 className="download-header-text">
            What are waiting for?
          </h1>
          <p className="download-para-text">
            Revolutionize your task management. Achieve your goal, one task <br/> at a time. Grab your download and get started.
          </p>
          <a href="#"> <button type="submit" className="item-container-1">Sign Up</button></a>
        </div>
      </div>

      <div className="footer">
        <nav>
          <a href='#' className='logo'> Medi<span className='logo-half'>Tracer</span></a>
          <ul>
            <li className='footer-text'>Design and Development by <a href='https://alex-portfolio-mu.vercel.app/' className='alex'>Alex Udeogu</a> - Copyright 2024</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Homepage;
