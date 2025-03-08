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
          multiplier:   window.useGlobalStoreSus.getState().passengerShared,
          sharedState2: window.useGlobalStoreSus.getState().sharedState2,
          multiplier2:   window.useGlobalStoreSus.getState().passengerShared2,
          sharedState3: window.useGlobalStoreSus.getState().sharedState3,
          multiplier3:   window.useGlobalStoreSus.getState().passengerShared3,
        };
    }

    componentDidMount() {
        // Suscribirse a cambios en el estado global
        this.unsubscribe = window.useGlobalStoreSus.subscribe((newState) => {
            this.setState({ sharedState: newState.sharedState,multiplier:newState.passengerShared, sharedState2: newState.sharedState2,multiplier2: newState.passengerShared2 , sharedState3: newState.sharedState3,multiplier3: newState.passengerShared3 });
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
        const { sharedState, multiplier, sharedState2, multiplier2,sharedState3, multiplier3} = this.state;

        return (
            <div className="myComponent">
                <input
                    type="number"
                    value={sharedState * multiplier + sharedState2 * multiplier2 + sharedState3 * multiplier3}
                    name={name}
                />
            </div>
        );
    }
}

export default PriceMultiplier;
