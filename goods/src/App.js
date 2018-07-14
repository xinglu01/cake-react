import React, { Component } from 'react';
import { View as Footer } from './components/footer/';
import Home from './components/home/Home.js';
import Mine from './components/mine/Mine.js';
import Shopcart from './components/shopcart/Shopcart.js';
import Classify from './components/classify/Classify.js';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
      	<Switch>
      		<Route path="/classify/:classID" component={Classify} />
      		<Route path="/mine" component={Mine} />
      		<Route path="/shopcart" component={Shopcart} />
      		<Route path="/" component={Home} />
      	</Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
