import React from 'react';
import { StaggeredMotion, spring, presets } from 'react-motion';
import Body from '../Body'

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {x: 790, y: 190, move: false};
    this.handleMouseClick = this.handleMouseClick.bind(this);
  };

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
  };

  handleMouseMove = ({pageX: x, pageY: y}) => {
    if (this.state.move)
      this.setState({x: x - 50, y: y - 200});
  };

  handleMouseClick() {
    this.setState({x: 790, y: 190, move: !this.state.move});
  }

  getStyles = (prevStyles) => {
    // `prevStyles` is the interpolated value of the last tick
    const endValue = prevStyles.map((_, i) => {
      return i === 0
        ? this.state
        : {
          x: spring(prevStyles[i - 1].x, presets.gentle),
          y: spring(prevStyles[i - 1].y, presets.gentle),
        };
    });
    return endValue;
  };

  render() {
    return (
      <div onClick={this.handleMouseClick}>
        <StaggeredMotion
          defaultStyles={[0, 0, 0, 0, 0, 0].map(() => ({x: 790, y: 190}))}
          styles={this.getStyles}
        >
          {balls =>
            <div className="demo1">
              {balls.map(({x, y}, i) =>
                <div
                  key={i}
                  style={{
                    WebkitTransform: `translate3d(${x}px, ${y}px, 0)`,
                    transform: `translate3d(${x}px, ${y}px, 0)`,
                    zIndex: balls.length - i,
                  }}
                >
                  <div>
                    <img
                      style={{ height: '100px', width: '100px', borderRadius: '50%', position: 'absolute' }}
                      alt="lindsey stirling"
                      src="https://s3.amazonaws.com/busites_www/woodlandscenter2016com/pages/Lindsey%20Stirling%20&%20Evanescence%20-%20August%2025%20-%20Event%20Square%20-%203.5.18.png"
                    />
                  </div>
                </div>
              )}
            </div>
          }
        </StaggeredMotion>
        <Body />
      </div>
    );
  };
}
