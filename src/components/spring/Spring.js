import React, { Component } from 'react';
import { Spring, config } from'react-spring';

import Body from '../Body';
import '../../App.css';

class SpringExample extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, y: 500 }}
        to={{ opacity: 1, y: 0 }}
        config = { config.stiff }
      >
        { interpolatedStyle => (
          <div>
            {/* <div style={{ paddingLeft: '100px', fontSize: '150%', color: 'white'}}>{interpolatedStyle.y}</div> */}
            <div className="App" style={{
              WebkitTransform: `translate3d(0, ${interpolatedStyle.y}px, 0)`,
              transform: `translate3d(0, ${interpolatedStyle.y}px, 0)`,
              opacity: interpolatedStyle.opacity,
            }}>
              <Body />
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default SpringExample;
