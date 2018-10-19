import React, { Component } from 'react';

import gradient from '../webassets/Cuts/cellGradientBackground@2x.png';

const TILE_HEIGHT_DEFAULT = '180px';

const RestaurantListItem =( {name, category, background} ) => {            
    const styles = {
        backgroundImage: `url(${gradient}), url(${background})`,        
    }
    return(
        <li className='restaurant-list-item' style={styles}>
            <div>                                
                <div id='restaurant-list-name' >
                    {name}
                </div>
                <div id='restaurant-list-category'>
                    {category}
                </div>                    
            </div>
        </li>
    );
};

/* 

                
                */
export default RestaurantListItem;