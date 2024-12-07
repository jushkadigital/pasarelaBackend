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
            multiplier: window.useGlobalStoreSus.getState().passengerShared,
            percentage : window.useGlobalStoreSus.getState().percentageShared,
        };
    }

    componentDidMount() {
        // Suscribirse a cambios en el estado global
        this.unsubscribe = window.useGlobalStoreSus.subscribe((newState) => {
            this.setState({ sharedState: newState.sharedState,multiplier:newState.passengerShared,percentage: newState.percentageShared });
        });
    }

    componentWillUnmount() {
        // Limpiar la suscripción cuando el componente se desmonte
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    render() {
        const { name} = this.props;
        const { sharedState,multiplier,percentage} = this.state;

        return (
            <div className="myComponent">
                <input
                    type="number"
                    value={Math.round(sharedState*multiplier*(percentage/100))}
                    name={name}
                />
            </div>
        );
    }
}

export default SubFieldPrice;
