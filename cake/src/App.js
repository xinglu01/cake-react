import React, { Component } from 'react';
import { View as Header } from './components/header/';
import { View as Footer } from './components/footer/';
import { View as Center } from './components/center/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Center />
        <Footer />
      </div>
    );
  }
}

export default App;
