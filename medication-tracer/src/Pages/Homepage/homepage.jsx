import React, { useEffect, useRef } from 'react';
import './homepage.css';
import temp from '../../assets/Temp1.png';
import { Link } from "react-router-dom";
import FAQ from '../../Components/Accordion/acc.jsx';

const Homepage = () => {
  const introDescriptionRef = useRef(null);
  const objectivesRef = useRef(null);

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

  const handleScrollToSection = (id) => (e) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='body-x'>
      <nav className='navbar-x'>
        <a href='#' className='logo-1'>Medi<span className='logo-half-1'>Guide</span></a>
        <ul>
          <li><a href="#objectives" className="item-container-2" onClick={handleScrollToSection('objectives')}>About</a></li>
          <li><a href="#works" className="item-container-2" onClick={handleScrollToSection('works')}>How it works</a></li>
          <li><a href="#faqs" className="item-container-2" onClick={handleScrollToSection('faqs')}>FAQs</a></li>
          <li><Link to="/sign-up"><a href="#account" className="item-container-2">Don't have an account?</a></Link></li>
          <li><Link to="/log-in"><botton type="submit" className="item-container-1">Log In</botton></Link></li>
        </ul>
      </nav>

      <div className='intro'>
        <h1 className='intro-text'>Get ready to <span className="highlight">supercharge</span> <br /> your health and planning<br />like never before.</h1>
        <p className='intro-text-para-1'>
          Be on top of your health game with our cutting-edge software.
        </p>
      </div>
      
      <div className='Vision' id="objectives" ref={objectivesRef}>
        <h1 className='intro-description' ref={introDescriptionRef}>MediGuide's Objectives</h1>
        <div className="cards">
          <div className="mission-card">
            <h1 className='card-head'>Mission</h1>
            <p className='card-text'>
              MediGuide aims to transform healthcare through innovative technology, enhancing patient care, and simplifying administrative processes.
            </p>
          </div>
          <div className="mission-card">
            <h1 className='card-head'>Vision</h1>  
            <p className='card-text'>
              MediGuide envisions a future where healthcare is seamless, personalized, and accessible to all, empowering individuals and healthcare professionals alike to achieve better health outcomes.
            </p>          
          </div>
        </div>
      </div>

      <div className="works" id="works"> 
        <div className="work-intro-text">
          <div className="work-header">
            <h1 className='work-header-text'>
              Stay on top of your health <br /> with our cutting-edge <br /> features
            </h1>
            <p className='work-header-para'>
              Empower your health journey with intuitive features, <br /> seamlessly integrated in our software.
            </p>
          </div>
        </div>
        <div className='work-1'>
          <div className="text-content">
            <h1 className='text-content-header'>
              Easily guiding <br /> your Medication, <br /> every day and<br /> every week <br /> with ease
            </h1>
            <p className='text-content-para'>
              Effortlessly manage and get information <br /> on medications and other <br /> health-related needs.
            </p>
          </div>
          <img src={temp} alt="Medication" className='work-image'/>
        </div>
      </div>

      <div className="faq" id="faqs"> 
        <div className="faq-side1">
          <div className="faq-intro-text">
            <div className="faq-header">
              <h1 className='faq-header-text'>
                Still not convinced? <br />Here are your answers
              </h1>
            </div>
          </div>
          <FAQ />
        </div>
      </div>

      <div className="download">
        <div className='download-text'>
          <h1 className="download-header-text">
            What are you waiting for?
          </h1>
          <p className="download-para-text">
            Make accessing health information easier than ever before.<br /> Sign Up now to get started.
          </p>
          <Link to="/sign-up"><button type="submit" className="item-container-1">Sign Up</button></Link>
        </div>
      </div>

      <div className="footer">
        <nav className='footer-nav'> 
          <ul>
            <li className='footer-text'>Design and Development by <a href='https://alex-portfolio-mu.vercel.app/' className='alex'>Alex Udeogu</a> - Copyright 2024</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Homepage;
