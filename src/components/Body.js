import React, { Component } from 'react';

import '../App.css';

class Body extends Component {
  render() {
    return (
      <section> 
        <div className="card">
          <div className="inner">
            <div className="info">
              <h2>Your tickets are confirmed!!</h2>
              <p>LINDSEY STIRLING * EVANESCENCE</p>
              <div className="ticketinfo">
                <h3>7:00pm Friday July 6th, 2018</h3>
                <a href="#">Download your tickets here</a>
              </div>
            </div>
          </div>
          <div className="icon-space">
            <img
              alt="lindsey stirling"
              src="https://s3.amazonaws.com/busites_www/woodlandscenter2016com/pages/Lindsey%20Stirling%20&%20Evanescence%20-%20August%2025%20-%20Event%20Square%20-%203.5.18.png"
            />
          </div>
        </div>
        <button>Make another reservation</button>
      </section>
    );
  }
}

export default Body;
