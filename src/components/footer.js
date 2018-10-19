//
//
//      Deprecated 10/19, not in use
//
//


import React from 'react';

import hotdog from '../webassets/Cuts/tab_lunch@2x.png';
import hand from '../webassets/Cuts/tab_internets@2x.png';

const footerLeftText = 'lunch';
const footerRightText = 'internets';

const Footer = ({page}) => {
    let grayLeft = 'footer-left';
    let grayRight = 'footer-right';

    // gray hand
    if( page !== 3 ) {
        grayRight = 'gray-footer';

    // gray hotdog
    } else {
        grayLeft = 'gray-footer';
    }
    return (

        <footer className='frame'>            
            <div className='footer-container' id={grayLeft}>                  
                <img className='icon-images' id='lunches-icon' src={ hotdog } alt='lunches' />                
                <div  className='footer-text'>{footerLeftText}</div>
            </div>
            <div className='footer-container' id={grayRight}>
                <img className='icon-images' id='internets-icon' src={ hand } alt='about us' />                
                <div className='footer-text'>{footerRightText}</div>
            </div>
        </footer>
    );
};

export default Footer;