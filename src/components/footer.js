import React from 'react';

import hotdog from '../webassets/Cuts/tab_lunch@2x.png';
import hand from '../webassets/Cuts/tab_internets@2x.png';

const footerLeftText = 'lunch';
const footerRightText = 'internets';

const Footer = (props) => {
    return (

        <footer className='frame'>            
            <div className='footer-container' id='footer-left'>                  
                <img className='icon-images' id='lunches-icon' src={ hotdog } alt='lunches' />                
                <div  className='footer-text'>{footerLeftText}</div>
            </div>
            <div className='footer-container' id='footer-right'>
                <img className='icon-images' id='internets-icon' src={ hand } alt='about us' />                
                <div className='footer-text'>{footerRightText}</div>
            </div>
        </footer>
    );
};

export default Footer;