import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  } from 'react-browser-router';
import Navigation from './components/Navigation/Navigation';
import Homepage from './components/Homepage/Homepage';
import Indicators from './components/Indicators/Indicators';
import Footer from './components/Footer/Footer';
import Team from './components/Team/Team';
import Display from './components/Display/Display';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <div style={{position: 'absolute', height: '100%',  width: '100%'}}>
          <Navigation />
          
          <Route path="/home" component={Homepage} />
          <Route exact path="/" component={Indicators} />
          <Route path="/team" component={Team} />
          <Route path="/historicalData" component={Display} />
          <Footer />
        </div>
        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
