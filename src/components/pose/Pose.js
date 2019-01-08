import React from 'react';
import posed from 'react-pose';
import '../../App.css';
import Body from '../Body';

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

export default class Example extends React.Component {
  state = { isVisible: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div className="poseExample">
        <Box className="box" pose={isVisible ? 'visible' : 'hidden'}>
          <Body />
        </Box>;
      </div>
    );
  }
}
