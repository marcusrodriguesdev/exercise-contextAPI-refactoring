// src/TrafficSignal.jsx

import React from 'react';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import CarsContext from './context/CarsContext';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

class TrafficSignal extends React.Component {
  render() {
    const { color } = this.context.signal;
    const { changeTraffic } = this.context;
    console.log(this);
    return (
      <div>
        <div className="button-container">
          <button onClick={() => changeTraffic('red')} type="button">
            Red
          </button>
          <button onClick={() => changeTraffic('yellow')} type="button">
            Yellow
          </button>
          <button onClick={() => changeTraffic('green')} type="button">
            Green
          </button>
        </div>
        <img className="signal" src={renderSignal(color)} alt="" />
      </div>
    );

  }
};

TrafficSignal.contextType = CarsContext;

export default TrafficSignal;
