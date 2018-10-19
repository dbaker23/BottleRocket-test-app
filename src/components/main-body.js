import React, { Component } from 'react';
import RestaurantList from './restaurant-list';

class MainBody extends Component {
    constructor( props ) {
        super( props );        
    }

    render() {
        return (
            <div className='main-body-frame'>
                <RestaurantList restaurants={this.props.restaurants} />
            </div>
        );
    }
}

export default MainBody;