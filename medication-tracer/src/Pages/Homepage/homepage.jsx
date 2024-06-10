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

  const handleScrollToObjectives = (e) => {
    e.preventDefault();
    if (objectivesRef.current) {
      objectivesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToWorks = (e) => { 
    e.preventDefault();
    const worksSection = document.getElementById('works');
    if (worksSection) {
      const yOffset = worksSection.getBoundingClientRect().top;
      const duration = Math.abs(yOffset) / 2; 
      worksSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration });
    }
  };

  const handleScrollToFAQs = (e) => { // Function to handle smooth scrolling to "FAQs" section
    e.preventDefault();
    const faqsSection = document.getElementById('faqs');
    if (faqsSection) {
      const yOffset = faqsSection.getBoundingClientRect().top;
      const duration = Math.abs(yOffset) / 2; 
      faqsSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration });
    }
  };

  return (
    <div className='body-x'>
      <nav className='navbar-x'>
        <a href='#' className='logo'> Medi<span className='logo-half'>Tracer</span></a>
        <ul>
          <li><a href="#objectives" onClick={handleScrollToObjectives}>About</a></li>
          <li><a href="#works" onClick={handleScrollToWorks}>How it works</a></li> 
          <li><a href="#faqs" onClick={handleScrollToFAQs}>FAQs</a></li> {/* Updated link */}
          <li><Link to="/sign-up"><a href="#account">Don't have an account?</a></Link></li>
          <li><Link to="/log-in"><botton type="submit" className="item-container-1">Log In</botton></Link></li>
        </ul>
      </nav>

      <div className='intro'>
        <h1 className='intro-text'>Get ready to <span className="highlight">supercharge</span>  <br/> your health and planning<br/>like never before.</h1>
        <p className='intro-text-para-1'>
          Be on the top of your game with our cutting edge reminder system.
        </p>
      </div>

      <div className='Vision' id="objectives" ref={objectivesRef}>
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

      <div className="works" id="works"> 
        <div className="work-intro-text">
          <div className="work-header">
            <h1 className='work-header-text'>
            Stay on top of your health <br/> with our cutting-edge features
            </h1>
            <p className='work-header-para'>
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
              Effortlessly manage your medications and other health-related needs.
            </p>
          </div>
          <img src={temp} alt="Medication" className='work-image'/>
        </div>
      </div>

      <div className="faq" id="faqs"> {/* Added id attribute */}
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
            What are you waiting for?
          </h1>
          <p className="download-para-text">
            Revolutionize your task management. Achieve your goal, one task <br/> at a time. Grab your download and get started.
          </p>
          <Link to="/sign-up"><button type="submit" className="item-container-1">Sign Up</button></Link>
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
