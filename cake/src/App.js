import React, { Component } from 'react';
import { View as Header } from './components/header/';
import { View as Footer } from './components/footer/';
import { View as Center } from './components/center/';
import ErrorBoundary from './ErrorBoundary.js';

class App extends Component {
  render() {
    return (
    	<ErrorBoundary>
	      <div className="App">
	        <Header />
	        <Center />
	        <Footer />
	      </div>
      </ErrorBoundary>
    );
  }
}

export default App;
