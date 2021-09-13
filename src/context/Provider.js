import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarsContext from './CarsContext';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red',
      },
    }
    this.moveCar = this.moveCar.bind(this);
    this.changeTraffic = this.changeTraffic.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  }

  changeTraffic(signalColor) {
    this.setState({
      signal: {
        ...this.state.signal,
        color: signalColor,
      }
    });
  }

  render() {
    const context = {
      ...this.state,
      changeTraffic: this.changeTraffic,
      moveCar: this.moveCar,
    };

    const { children } = this.props;

    return (
      <CarsContext.Provider
        value={ context }
      >
        { children }
      </CarsContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
