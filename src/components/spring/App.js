import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SpringExample from './Spring';
import TransitionExample from './Transition';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav style={{ textAlign: 'left' }}>
            <ul>
              <li><Link to="/spring">Spring</Link></li>
              <li><Link to="/spring/transition">Transition</Link></li>
            </ul>
          </nav>
    
          <Route path="/spring" exact component={SpringExample} />
          <Route path="/spring/transition" exact component={TransitionExample} />
        </div>
      </Router>
    );
  }
}

export default App;
