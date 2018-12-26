import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SpringApp from './components/spring/App.js';
import MotionApp from './components/motion/App.js';

const Index = () => <h2>Home</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/spring/">React Spring</Link>
              </li>
              <li>
                <Link to="/motion/">React Motion</Link>
              </li>
            </ul>
          </nav>
    
          <Route path="/" exact component={Index} />
          <Route path="/spring/" component={SpringApp} />
          <Route path="/motion/" component={MotionApp} />
        </div>
      </Router>
    );
  }
}

export default App;
