import React from 'react'
import './Hero.css'
import girlImage from '../../assets/Images/girl-laptop.png'; // ודאי שיש לך תמונה בתקייה assets
import roadmap from '../../assets/Images/RoadMap2.png'; // ודאי שיש לך תמונה בתקייה assets
import techLearning from '../../assets/Images/TechLearning.png'; // ודאי שיש לך תמונה בתקייה assets
import tech from '../../assets/Images/tech.png'; // ודאי שיש לך תמונה בתקייה assets
import reword from '../../assets/Images/reword.png';
import support from '../../assets/Images/support.png';


const Hero = () => {
  return (
    <div>
      <div className='hero container' >
          <div className='hero-text'>
          <h1>Empowering Girls in Technology</h1>
              <p>
                  We provide guided learning paths to help girls develop tech skills through meaningful projects
              </p>
              <button className='btn-getStart'>Get Started</button>
          </div>
          <div className='hero-image'>
          <img src={girlImage} alt="Girl with laptop" />
        </div>
      
      </div>
      
    <div className='features-grid'>

      <div className='feature-card'>
        <h3>Roadmap </h3>
        <h4>Volunteering Path</h4>
        <img src={roadmap} alt="Volunteering Roadmap" />
      </div>

      <div className='feature-card'>
        <h3>Roadmap </h3>
        <h4>Tech Learning</h4>
        <img src={tech} alt="Tech Roadmap" />
        <img src={techLearning} alt="Tech Roadmap" />
      

      </div>

      <div className='feature-card'>
        <h3>Community & Support</h3>
        <img src={support} alt="Community & Support" />
      </div>

      <div className='feature-card'>
        <h3>Rewards</h3>
        <img src={reword}  alt="Rewards and Motivation" />
      </div>

    </div>

  </div>
 
  )
}

export default Hero
