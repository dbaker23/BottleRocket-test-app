import React, { Component } from 'react';

import gradient from '../webassets/Cuts/cellGradientBackground@2x.png';

const RestaurantListItem =( {name, category, background} ) => {            
    return(
        <li className='restaurant-list' style={{backgroundImage:`url(${background})` }}>                        
            <div className='restaurant-list-text'>                                        
                <div id='restaurant-list-name'>
                    {name}
                </div>
                <div id='restaurant-list-category'>
                    {category}
                </div>                
                <img id='gradient-image' src={gradient} alt=''/>
            </div>                        
        </li>
    );
};

export default RestaurantListItem;