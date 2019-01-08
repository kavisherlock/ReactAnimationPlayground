import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MotionExample from './Motion';
import StaggeredExample from './Staggered';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav style={{ textAlign: 'left' }}>
            <ul>
              <li><Link to="/motion">Motion</Link></li>
              <li><Link to="/motion/staggered">Staggered Motion</Link></li>
            </ul>
          </nav>
    
          <Route path="/motion" exact component={MotionExample} />
          <Route path="/motion/staggered" exact component={StaggeredExample} />
        </div>
      </Router>
    );
  }
}

export default App;
