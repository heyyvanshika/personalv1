import React from 'react';
import '../Footer/Footer.css'
import arrowfooter from '../../Assets/arrowfooter.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className='footerTop'>
        <div className='footerTopLeft'>
            <h2>Contact Me</h2>
            <h3 className='subhead'>Let's work together</h3>
            <div className='emailcopy'>
              <p className='email'>EMAIL ME</p>
              <p className='clickCopy'>Click to Copy</p>
              </div>
        </div>
        <div className='footerTopRight'>
            <div className='hopCall'>
                <p className='hopCallText'>Let's Hop on a Call</p>
            </div>
        </div>
      </div>
      <img src={arrowfooter} alt="Arrow" className="arrow-footer" />
      <h2 className='bottomHead'>Know more about me here</h2>
      <div className='footerBottom'>
        <div className='bottomCircle'>DOWNLOAD RESUME</div>
        <div className='bottomTwo'>
          <div className='bottomButton' id='linkedin'>LINKEDIN</div>
          <div className='bottomButton' id='github'>GITHUB</div>
        </div>
        <div className='bottomCircle'>DOWNLOAD RESUME</div>
        <div className='bottomButton'>GITHUB</div>
        <div className='bottomCircle'>DOWNLOAD RESUME</div>

      </div>
    </div>
  );
};

export default Footer;