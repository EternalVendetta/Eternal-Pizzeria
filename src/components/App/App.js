import React, { Component } from 'react';
import './App.css';

// My Components...
import { BusinessList } from '../BusinessList/BusinessList';
import { SearchBar } from '../SearchBar/SearchBar';

//My API request
import Yelp from '../../util/Yelp';

class App extends Component {
constructor(props) {
  super(props);

  this.state = {
    businesses: []
  };

// Bind THIS to Methods
  this.searchYelp = this.searchYelp.bind(this);
}

// API Feedback to User
searchYelp(term, location, sortBy) {
  Yelp.search(term, location, sortBy).then(businesses => {
    this.setState({ businesses: businesses });
  });
}

  render() {
    return (
      <div className='App'>
        <h1>Eternal Pizzeria</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    )
  }
}

export default App;
