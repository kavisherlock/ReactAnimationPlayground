import React, { Component } from 'react';
import { Motion, spring, presets } from 'react-motion';

import Body from '../Body';
import '../../App.css';

class App extends Component {
  render() {
    return (
      <Motion
        defaultStyle={{ opacity: 0, y: 500 }}
        style={{ opacity: spring(1, presets.gentle ), y: spring(0, presets.gentle ) }}
      >
        { interpolatedStyle => (
          <div className="App" style={{
            WebkitTransform: `translate3d(0, ${interpolatedStyle.y}px, 0)`,
            transform: `translate3d(0, ${interpolatedStyle.y}px, 0)`,
          }}>
            <Body />
          </div>
        )}
      </Motion>
    );
  }
}

export default App;
