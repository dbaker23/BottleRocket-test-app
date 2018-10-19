import React, { Component } from 'react';

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const API_KEY = 'AIzaSyCULvJi6r6sjvF9hEHcISPlrdV5PMzkNDE';

class GoogleMap extends Component {                

    render() {    
        const mapStyles = {
            width: '100%',
            height: '180px'                    
        };

        if( !this.props.restaurant.location.lat || !this.props.restaurant.location.lng ) {
            return <div>Loading...</div>;
        }

        return ( 
            <div className='map-container'>
            <Map
                style={mapStyles}
                google={this.props.google} 
                zoom={14}
                initialenter={{
                    lat: this.props.restaurant.location.lat,
                    lng: this.props.restaurant.location.lng
                }}
                center={{
                    lat: this.props.restaurant.location.lat,
                    lng: this.props.restaurant.location.lng
                }}
                onClick={this.onMapClicked}>
                <Marker 
                    onClick={this.onMarkerClick} 
                    name={this.props.restaurant.name} 
                    position={{
                        lat: this.props.restaurant.location.lat,
                        lng: this.props.restaurant.location.lng
                    }}/>
            </Map>                                
            </div>
        );           
    }
};

export default GoogleApiWrapper({     
    apiKey: API_KEY    
}) ( GoogleMap )