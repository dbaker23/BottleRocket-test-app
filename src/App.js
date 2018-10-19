import React, { Component } from 'react';

import Footer from './components/footer';
import Header from './components/header';
import MainBody from './components/main-body';

const API_KEY = 'AIzaSyCULvJi6r6sjvF9hEHcISPlrdV5PMzkNDE';

class App extends Component {    
  constructor(props) {
    super(props)    

    this.state = {
      restaurants: []
    };
  }

  componentDidMount() {
    this.getRestaurants();
  }
  
  getRestaurants() {  
    fetch('https://s3.amazonaws.com/br-codingexams/restaurants.json', { 
      method: "GET"
    })
    .then( response => response.json() )
    .then( response => this.setState( {
      restaurants: response.restaurants
    }))
    .catch( error => {
      console.error( error );
    });
  }

  render() {       
    if( this.state.restaurants[0] !== undefined ) {
      console.log( this.state.restaurants[0].name ); 
    }
    return (
      <div className="App">        
        <Header page={this.state.page} />    
        <MainBody restaurants={this.state.restaurants} />        
      </div>
    );
  }
}

export default App;

