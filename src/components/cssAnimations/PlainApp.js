import React, { Component } from 'react';

import Body from '../Body';
import '../../App.css';
import './Plain.css';

class App extends Component {
  render() {
    return (
      <div className="plain">
        <div className="box">Box</div>
        <Body />
      </div>
    );
  }
}

export default App;
