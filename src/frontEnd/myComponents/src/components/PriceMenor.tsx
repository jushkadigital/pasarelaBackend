import React, { useState,Component } from 'react';
import "./Price.css"

// interface Props {
// name: string,
// initialValue: string
// }



class PriceMenor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sharedState2: window.useGlobalStoreSus.getState().sharedState2,
        };
    }

    componentDidMount() {
        // Suscribirse a cambios en el estado global
        this.unsubscribe = window.useGlobalStoreSus.subscribe((newState) => {
            this.setState({ sharedState2: newState.sharedState2});
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
        window.useGlobalStoreSus.setState({ sharedState2: Number(newValue) });
    };

    render() {
        const { name} = this.props;
        const { sharedState2 } = this.state;

        return (
            <div className="myComponent">
                <input
                    type="number"
                    value={sharedState2}
                    onChange={this.handleChange}
                    name={name}
                />
            </div>
        );
    }
}

export default PriceMenor;
