import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PoseExample from './Pose';
import ZoomExample from './Zoom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav style={{ textAlign: 'left' }}>
            <ul>
              <li><Link to="/pose">Pose</Link></li>
              <li><Link to="/pose/zoom">Zoom</Link></li>
            </ul>
          </nav>
    
          <Route path="/pose" exact component={PoseExample} />
          <Route path="/pose/zoom" exact component={ZoomExample} />
        </div>
      </Router>
    );
  }
}

export default App;
