import React, { Component } from 'react';
import { Spring, config } from'react-spring';

import Body from '../Body';
import '../../App.css';

class App extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, y: 1000 }}
        to={{ opacity: 1, y: 0 }}
        config = { config.stiff }
      >
        { interpolatedStyle => (
          <div className="App" style={{
            WebkitTransform: `translate3d(0, ${interpolatedStyle.y}px, 0)`,
            transform: `translate3d(0, ${interpolatedStyle.y}px, 0)`,
          }}>
            <Body />
          </div>
        )}
      </Spring>
    );
  }
}

export default App;
