import React, { Component } from "react";

class WrapperComponentRange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: window.useGlobalStoreSus.getState().percentageShared
    };
  }

  componentDidMount() {
        // Suscribirse a cambios en el estado global
        this.unsubscribe = window.useGlobalStoreSus.subscribe((newState) => {
            this.setState({ value: newState.percentageShared });
        });
    }

  componentWillUnmount() {
        // Limpiar la suscripción cuando el componente se desmonte
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

  handleChange = (event) => {
    const newValue = Number(event.target.value);
    this.setState({ value: newValue });
    window.useGlobalStoreSus.setState({ percentageShared: (newValue) });
  };

  render() {
    const initObj = {min:0,max:100,step:5}
    const { name } = this.props; // Valores por defecto
    const { value } = this.state; // Estado actual del slider
    
    return (
      <div className="range-slider">
        <input
          name={name}
          type="range"
          min={initObj.min}
          max={initObj.max}
          step={initObj.step}
          value={value}
          onChange={this.handleChange}
          className="range-slider-input"
        />
        <div className="range-slider-value">{value} %</div>
      </div>
    );
  }
}

export default WrapperComponentRange;

