import React, { Component } from 'react';

import Footer from './components/footer';
import Header from './components/header';
import MainBody from './components/main-body';

class App extends Component {    
  constructor(props) {
    super(props)    

    this.state = {
      page: 1,
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
        <Footer page={this.state.page} />
      </div>
    );
  }
}

export default App;

