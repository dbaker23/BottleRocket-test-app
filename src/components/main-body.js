import React, { Component } from 'react';
import RestaurantList from './restaurant-list';

class MainBody extends Component {
    render() {
        return (
            <div className='main-body-frame'>
                <RestaurantList />
            </div>
        );
    }
}

export default MainBody;