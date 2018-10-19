import React, { Component } from 'react';

import Footer from './components/footer';
import Header from './components/header';
import MainBody from './components/main-body';

let getRestaurants = async() => {  
  const response = await fetch('https://s3.amazonaws.com/br-codingexams/restaurants.json');
  const data = await response.json();  
  const ret = data;
  return ret;
}

class App extends Component {    
  constructor(props) {
    super(props)

    this.state = {
      
    };
  }

  render() {    
    const restaurants = getRestaurants();    
    console.log( {restaurants} );
    return (
      <div className="App">        
        <Header />    
        <MainBody />
        <Footer />
      </div>
    );
  }
}

export default App;

