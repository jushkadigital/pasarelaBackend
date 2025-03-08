import React, { useState,Component } from 'react';

// interface Props {
// name: string,
// initialValue: string
// }



class SubFieldPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sharedState: window.useGlobalStoreSus.getState().sharedState,
            sharedState2: window.useGlobalStoreSus.getState().sharedState2,
            sharedState3: window.useGlobalStoreSus.getState().sharedState3,
            multiplier: window.useGlobalStoreSus.getState().passengerShared,
            multiplier2: window.useGlobalStoreSus.getState().passengerShared2,
            multiplier3: window.useGlobalStoreSus.getState().passengerShared3,
            percentage: window.useGlobalStoreSus.getState().percentageShared,
        };
    }

    componentDidMount() {
        // Suscribirse a cambios en el estado global
        this.unsubscribe = window.useGlobalStoreSus.subscribe((newState) => {
            this.setState({ sharedState: newState.sharedState,multiplier:newState.passengerShared, sharedState2: newState.sharedState2,multiplier2:newState.passengerShared2, sharedState3: newState.sharedState3,multiplier3:newState.passengerShared3,percentage: newState.percentageShared });
        });
    }

    componentWillUnmount() {
        // Limpiar la suscripción cuando el componente se desmonte
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
    roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

    render() {
        const { name} = this.props;
        const { sharedState,multiplier,sharedState2,multiplier2,sharedState3,multiplier3,percentage} = this.state;

        return (
            <div className="myComponent">
                <input
                    type="number"
                    value={this.roundToTwo((((sharedState*multiplier)+(sharedState2*multiplier2)+(sharedState3*multiplier3)))*(percentage/100))}
                    name={name}
                />
            </div>
        );
    }
}

export default SubFieldPrice;

