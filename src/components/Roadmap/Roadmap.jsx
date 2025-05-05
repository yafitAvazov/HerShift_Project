// Roadmap.jsx
import React from 'react';
import './Roadmap.css';
import impact from '../../assets/Images/impact2.png';
import connections from '../../assets/Images/connections2.png';
import how from '../../assets/Images/how.png';
import happen from '../../assets/Images/happen.png';
import feedback from '../../assets/Images/feedback.png';
import done from '../../assets/Images/done.png';

import { useNavigate } from 'react-router-dom';

const steps = [
  { img: impact, color: '#fee8ac', path: '/intro' },
  { img:connections, color: '#c1f1db', path: '/tools' },
  { img: how, color: '#f5ecff', path: '/practice' },
  { img: happen, color: '#fdcfed', path: '/project' },
  { img: feedback, color: '#bae6fd', path: '/final' },
  { img: done, color: '#bae6fd', path: '/final' },
];


const Roadmap = () => {
  const navigate = useNavigate();

  return (
    <div className="roadmap-container">
    <div className='roadmap-title'>
        <h1>My Roadmap</h1>
    </div>
      <svg className="roadmap-svg" viewBox="0 0 100 600" preserveAspectRatio="xMidYMid meet">
        <path d="
        M35 50 
        L65 50 
        Q95 50 95 70 
        Q95 90 65 90 
        L35 90 
        Q5 90 5 110 
        Q5 130 35 130 
        L65 130 
        Q95 130 95 150 
        Q95 170 65 170 
        L35 170 
        Q5 170 5 190 
        Q5 210 35 210
        L65 210
        Q95 210 95 230 
        Q95 250 65 250
        " stroke="#c084fc" strokeWidth="5" fill="none" />
          <foreignObject x="15" y="33" width="36" height="36">
              <div className="step-box" style={{ backgroundColor: '#fee8ac' }} xmlns="http://www.w3.org/1999/xhtml">
                <img src={impact} alt="impact" />
              </div>
          </foreignObject>

          <foreignObject x="55" y="70" width="36" height="36">
            <div className="step-box" style={{ backgroundColor: '#c1f1db' }} xmlns="http://www.w3.org/1999/xhtml">
              <img src={connections} alt="connections" />
            </div>
          </foreignObject>

          <foreignObject x="15" y="110" width="36" height="36">
            <div className="step-box" style={{ backgroundColor: '#f5ecff' }} xmlns="http://www.w3.org/1999/xhtml">
              <img src={how} alt="connections" />
            </div>
          </foreignObject>

          <foreignObject x="55" y="150" width="36" height="36">
            <div className="step-box"  style={{ backgroundColor: '#fdcfed' }} xmlns="http://www.w3.org/1999/xhtml">
              <img src={happen} alt="connections" />
            </div>
          </foreignObject>

          <foreignObject x="15" y="190" width="36" height="36">
            <div className="step-box"  style={{ backgroundColor: '#bae6fd' }} xmlns="http://www.w3.org/1999/xhtml">
              <img src={feedback} alt="connections" />
            </div>
          </foreignObject>

          <foreignObject x="55" y="230" width="36" height="36">
            <div className="step-box" style={{ backgroundColor: '#f9ccac' }} xmlns="http://www.w3.org/1999/xhtml">
              <img src={done} alt="connections" />
            </div>
          </foreignObject>
      </svg>
     
    </div>
  );
};

export default Roadmap;