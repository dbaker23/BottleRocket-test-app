import React, { Component } from 'react';

//import Footer from './components/footer';
import Header from './components/header';
import MapContainer from './components/map-container';
import RestaurantList from './components/restaurant-list';

class App extends Component {    
  constructor(props) {
    super(props)    

    this.state = {
      page: 0,
      selected: '',
      restaurants: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
    this.handleMapButton = this.handleMapButton.bind(this);
  }

  componentDidMount() {
    this.getRestaurants();
    this.setState({
      selected: this.state.restaurants[0]
    })
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

  handleBackButton() {
    const pNum = this.state.page === 1? 0 : 1;
    this.setState({
      page: pNum
    });
  }

  handleMapButton() {
    this.setState({ page: 1 });
  }

  handleClick( e ) {
    this.setState({
      page: e.page,
      selected: e.selected
    });
  }

  render() {               
    return (
      <div className="App">        
        <Header 
          onBackClick={this.handleBackButton} 
          onMapClick={this.handleMapButton} 
          page={this.state.page} />

        <MapContainer 
          restaurant={this.state.selected}
          page={this.state.page} />

        <div className='main-body-frame'>                
            <RestaurantList 
              handleClick={selectedRestaurant => this.setState( {page: 1, selected: selectedRestaurant} )}  
              restaurants={this.state.restaurants} />
        </div>            
      </div>
    );
  }
}

export default App;

