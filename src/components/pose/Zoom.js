import React, { Component } from 'react'
import posed from 'react-pose';

const transition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99]
};

const Image = posed.img({
  init: {
    position: 'static',
    transition,
    flip: true,

    borderRadius: '50%',
    display: 'block',
    margin: 'auto',
    border: '4px solid white',
    width: '100px',
    height: '100px',
  },
  zoom: {
    position: 'fixed',
    width: 'auto',
    height: '90vh',
    top: '170px',
    left: '-130px',
    right: 0,
    bottom: 0,
    transition,
    flip: true,
    borderRadius: 0,
  }
});


export default class App extends Component {
  state = { isZoomed: false };

  zoomIn() {
    this.setState({ isZoomed: true });
  }

  zoomOut = () => {
    this.setState({ isZoomed: false });
  };

  toggleZoom = () => (this.state.isZoomed ? this.zoomOut() : this.zoomIn());

  render() {
    const { isZoomed } = this.state;

    return (
      <section> 
        <div className="card">
          <div className="inner">
            <div className="info">
              <h2>Your Reservation is complete!</h2>
              <p>LINDSEY STIRLING * EVANESCENCE</p>
              <div className="ticketinfo">
                <h3>7:00pm Friday July 6th, 2018</h3>
                <a href="#">Download your tickets here</a>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '-30px' }} onClick={this.toggleZoom}>
            <Image
              pose={isZoomed ? 'zoom' : 'init'}
              alt="lindsey stirling"
              src="https://s3.amazonaws.com/busites_www/woodlandscenter2016com/pages/Lindsey%20Stirling%20&%20Evanescence%20-%20August%2025%20-%20Event%20Square%20-%203.5.18.png"
            />
          </div>
        </div>
        <button>Make another reservation</button>
      </section>
    )
  }
}
