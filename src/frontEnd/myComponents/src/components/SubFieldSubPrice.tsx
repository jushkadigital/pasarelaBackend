import React, { useState,Component } from 'react';

// interface Props {
// name: string,
// initialValue: string
// }



class SubFieldSubPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sharedState: window.useGlobalStoreSus.getState().sharedState,
            multiplier: window.useGlobalStoreSus.getState().passengerShared,
            percentage : 100 - window.useGlobalStoreSus.getState().percentageShared,
        };
    }

    componentDidMount() {
        // Suscribirse a cambios en el estado global
        this.unsubscribe = window.useGlobalStoreSus.subscribe((newState) => {
            this.setState({ sharedState: newState.sharedState,multiplier:newState.passengerShared,percentage: 100 - newState.percentageShared });
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
        const { sharedState,multiplier,percentage} = this.state;

        return (
            <div className="myComponent">
                <input
                    type="number"
                    value={this.roundToTwo(sharedState*multiplier*(percentage/100))}
                    name={name}
                />
            </div>
        );
    }
}

export default SubFieldSubPrice;

