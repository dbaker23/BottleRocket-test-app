import React from 'react';
import RestaurantDetails from './restaurant-details';
import gradient from '../webassets/Cuts/cellGradientBackground@2x.png';

const RestaurantListItem =( {handleClick, restaurant} ) => {                
    const styles = {
        backgroundImage: `url(${gradient}), url(${restaurant.backgroundImageURL})`        
    }
    return(
        <li onClick={ () => handleClick(restaurant) }
            className='restaurant-list-item' 
            style={styles}>
            <RestaurantDetails name={restaurant.name} category={restaurant.category} />
        </li>
    );
};

export default RestaurantListItem;