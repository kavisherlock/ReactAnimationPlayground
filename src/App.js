import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Body from './components/Body';
import PlainApp from './components/cssAnimations/PlainApp';
import OomphedApp from './components/cssAnimations/OomphedApp';
import SpringApp from './components/spring/App';
import MotionApp from './components/motion/App';
import PoseApp from './components/pose/App';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/css/plain">Plain CSS</Link></li>
              <li><Link to="/css/oomph">Good CSS</Link></li>
              <li><Link to="/spring">React Spring</Link></li>
              <li><Link to="/motion">React Motion</Link></li>
              <li><Link to="/pose">Pose</Link></li>
            </ul>
          </nav>
    
          <Route path="/" exact component={Body} />
          <Route path="/css/plain" component={PlainApp} />
          <Route path="/css/oomph" component={OomphedApp} />
          <Route path="/spring" component={SpringApp} />
          <Route path="/motion" component={MotionApp} />
          <Route path="/pose" component={PoseApp} />
        </div>
      </Router>
    );
  }
}

export default App;
