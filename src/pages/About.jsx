import React from 'react';
import './About.css';
import give from '../assets/Images/give.png';
import techLearning from '../assets/Images/TechLearning.png'; // ודאי שיש לך תמונה בתקייה assets
import ImageCard from '../components/ImageCard/ImageCard';
import Profile from '../components/Profile/Profile';
import profile1 from '../assets/Images/yafit.jpg'; // ודאי שיש לך תמונה בתקייה assets

import tech from '../assets/Images/tech.png'; // ודאי שיש לך תמונה בתקייה assets
import reword from '../assets/Images/reword.png';
import support from '../assets/Images/support.png';
const About = () => {

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-content">
          
          <div className="about-section">
          <h2>About HerShift</h2>

            <p>
            HerShift_ is an <strong>innovative digital platform</strong> that enables high school girls to complete their personal commitment hours — in a completely new way.
            <br></br>
            Instead of choosing traditional volunteering that doesn’t inspire them, girls are given the opportunity to<strong> grow, explore</strong>, and<strong> get closer to the tech world</strong> through simple, accessible, and engaging tech tasks.
            <br></br>
            <br></br>
            Each task is connected to a social or community goal — so<strong> they’re not just learning and creating</strong>, they’re also<strong> making a difference.</strong>
            
            </p>
           <img src={give} alt='give image'/>
           <h4> The platform includes</h4>
          
           <div className="imgCard" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            
                <ImageCard 
                    image={techLearning} 
                    title="Learning journey" 
                    description="" 
                />
                <ImageCard 
                    image={tech} 
                    title="Tech skill options" 
                    description="" 
                />
                <ImageCard 
                    image={reword} 
                    title="Reward & motivation" 
                    description="" 
                />
                <ImageCard 
                    image={support} 
                    title="Community & support" 
                    description="" 
                />
            </div>
            <h4>Our Mission</h4>
            <p>HerShift was born from the understanding that many girls <strong>miss out</strong> on the tech world — simply because it’s not accessible or relatable to them.
            <br></br>
            We’re here to change that —<br></br> to turn a mandatory task into an opportunity, and volunteering into a <strong>meaningful experience</strong> of <strong>growth, expression, and empowerment.</strong></p>
            
            
            <div className="developers-section" style={{ padding: '60px 10%' }}>
                <h2 style={{ textAlign: 'center', color: '#2f2266' }}>Meet the Team Behind HerShift</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginTop: '40px' }}>
                    <Profile
                    image={profile1}
                    name="Yafit Avazov"
                    description="UX designer & front-end developer passionate about accessible technology for girls."
                    />
                    <Profile
                    image={reword}
                    name="Hadas Levi"
                    description="Full-stack developer and educator, helping bridge the gender gap in tech."
                    />
                    <Profile
                    image={reword}
                    name="Liat Azulay"
                    description="Product thinker with a mission to make social impact through code."
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
