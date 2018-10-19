import React, { Component } from 'react';

import backButton from '../webassets/Cuts/ic_webBack@2x.png';
import map from '../webassets/Cuts/icon_map@2x.png';

const middleText = 'Lunch Tyme';

class Header extends Component {
    constructor( props ) {
        super( props );        
    }

    render() {
        return (
            <header className='frame'>
                <div className='header-container' id='header-left'>
                    <img className='icon-images' id='header-back-icon' src={backButton} alt="back" />                    
                </div>
                <div className='header-container' id='header-middle'>
                    <div id='header-middle-text'>{middleText}</div>
                </div>
                <div className='header-container' id='header-right'>
                    <img className='icon-images' id='header-map-icon' src={map} alt="map" />
                </div>
            </header>
        );
    }
}

export default Header;

