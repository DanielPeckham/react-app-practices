import React, { Component } from 'react';
import Header from './layout/header/component'
import Navigation from './layout/navigation/component'
import Products from './layout/products/component'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <Products/>
      </div>

    );
  }
}

export default App;
