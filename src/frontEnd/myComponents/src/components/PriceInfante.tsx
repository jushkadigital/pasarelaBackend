import React, { useState,Component } from 'react';
import "./Price.css"

// interface Props {
// name: string,
// initialValue: string
// }



class PriceInfante extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sharedState3: window.useGlobalStoreSus.getState().sharedState3,
        };
    }

    componentDidMount() {
        // Suscribirse a cambios en el estado global
        this.unsubscribe = window.useGlobalStoreSus.subscribe((newState) => {
            this.setState({ sharedState3: newState.sharedState3});
        });
    }

    componentWillUnmount() {
        // Limpiar la suscripción cuando el componente se desmonte
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    handleChange = (e) => {
        const newValue = e.target.value;
        window.useGlobalStoreSus.setState({ sharedState3: Number(newValue) });
    };

    render() {
        const { name} = this.props;
        const { sharedState } = this.state;

        return (
            <div className="myComponent">
                <input
                    type="number"
                    value={sharedState}
                    onChange={this.handleChange}
                    name={name}
                />
            </div>
        );
    }
}

export default PriceInfante;
