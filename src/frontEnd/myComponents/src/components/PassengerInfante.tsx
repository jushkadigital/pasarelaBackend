import React, { useState,Component } from 'react';
import "./Passenger.css"

class PassengerInfante extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: window.useGlobalStoreSus.getState().passengerShared3,
        };
    }

    componentDidMount() {
        // Suscribirse a cambios en el estado global
        this.unsubscribe = window.useGlobalStoreSus.subscribe((newState) => {
            this.setState({ value: newState.passengerShared3 });
        });
    }

    componentWillUnmount() {
        // Limpiar la suscripción cuando el componente se desmonte
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    handleChangeAdd = () => {
    
        window.useGlobalStoreSus.setState({ passengerShared3: this.state.value + 1 });
    };

    handleChangeMinus = () => {
        window.useGlobalStoreSus.setState({ passengerShared3: this.state.value > 1 ? this.state.value - 1 : this.state.value });
        // window.useGlobalStoreSus.setState({ sharedState: Number(newValue) });
    };

    render() {
        const { name} = this.props;
        const { value } = this.state;

        return (
            <div className="">
                <input
                    type="number"
                    value={value}
                    name={name}
                />
                <div className="wrapperPassenger">
                <button className="passengerButton" type="button" onClick={this.handleChangeAdd}>+</button>
                <button className="passengerButton" type="button" onClick={this.handleChangeMinus}>-</button>
                </div>
            </div>
        );
    }
}

export default PassengerInfante;
