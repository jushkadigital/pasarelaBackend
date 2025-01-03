import React, { useState,Component } from 'react';
import "./PriceMultiplier.css"

// interface Props {
// name: string,
// initialValue: string
// }



class PriceMultiplier extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sharedState: window.useGlobalStoreSus.getState().sharedState,
          multiplier:   window.useGlobalStoreSus.getState().passengerShared

        };
    }

    componentDidMount() {
        // Suscribirse a cambios en el estado global
        this.unsubscribe = window.useGlobalStoreSus.subscribe((newState) => {
            this.setState({ sharedState: newState.sharedState,multiplier:newState.passengerShared });
        });
    }

    componentWillUnmount() {
        // Limpiar la suscripción cuando el componente se desmonte
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
    render() {
        const { name } = this.props;
        const { sharedState, multiplier } = this.state;

        return (
            <div className="myComponent">
                <input
                    type="number"
                    value={sharedState * multiplier}
                    name={name}
                />
            </div>
        );
    }
}

export default PriceMultiplier;
