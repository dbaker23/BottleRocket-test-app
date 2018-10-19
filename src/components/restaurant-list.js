import React, { Component } from 'react';
import RestaurantListItem from './restaurant-list-item';

const RestaurantList = ( props ) => {
    const restaurantItem = props.restaurants.map( restaurant => {              
        const keyName = restaurant.name + restaurant.category;
        return (
            <RestaurantListItem 
                name={restaurant.name}
                category={restaurant.category}
                background={restaurant.backgroundImageURL}
                key={keyName}
                />
        );
    });

    return ( 
        <div className='scroll-div'>
            <ul className="restaurant-ul">
                {restaurantItem}
            </ul>
        </div>
    );
};

export default RestaurantList;
