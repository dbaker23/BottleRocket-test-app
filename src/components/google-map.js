import React from 'react';
import RestaurantDetails from './restaurant-details';
import '../styles/map.css';

const API_KEY = 'AIzaSyCULvJi6r6sjvF9hEHcISPlrdV5PMzkNDE';

const HIDE_DRAWER = 'hide';
const SHOW_DRAWER = 'show';

const GoogleMap =({restaurant, page}) => {    
    let visibility = page === 0 ? HIDE_DRAWER : SHOW_DRAWER;
    let restaurantDetails = '';
    let twitterInformation = '';

    if( !restaurant ) {
        return  <div id='flyout-drawer' className={visibility}>No restaurant selected!</div>;

    } else {
        restaurantDetails = <RestaurantDetails name={restaurant.name} category={restaurant.category} />        
        if( restaurant.contact.twitter ) {
            twitterInformation = <a href={`https://twitter.com/${restaurant.contact.twitter}`} >@{restaurant.contact.twitter}</a>
        }    
            
        return (
            <div id='flyout-drawer' className={visibility}>
                <div className='restaurant-list-item'>                    
                    `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`
                </div>
                <div className='restaurant-details'>
                    {restaurantDetails}
                </div>
                <div className='location-details'>                    
                    <div>{restaurant.location.formattedAddress[0]}</div>
                    <div>{restaurant.location.formattedAddress[1]}</div>                    
                    <div className='info-spacing'>
                        <a href={`tel:+1${restaurant.contact.phone}`} >{restaurant.contact.formattedPhone}</a>
                    </div>
                    <div className='info-spacing'>
                        {twitterInformation}                    
                    </div>
                </div>
            </div>
        );   
    } 
};

export default GoogleMap;