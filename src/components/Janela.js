import React from 'react';

export default class Janela extends React.Component {

    constructor(props) {
        super(props);
        const lightOn = (props.lightOn === undefined) ? true : props.lightOn;
        this.state = {
            lightOn: lightOn,

            style: {...{
                backgroundColor: 'LightPink',
                cursor: 'pointer',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                gridGap: 1
            }, ...this.props.style},

            styleVidro: {
                
            }
        };
        
        this.toggleLight = this.toggleLight.bind(this);
        this.turnLightOff = this.turnLightOff.bind(this);
        this.turnLightOn = this.turnLightOn.bind(this);
    }

    turnLightOff() {
        this.setState((state, props) => {
            return {
                lightOn: false
            }
        })
    }

    turnLightOn() {
        this.setState((state, props) => {
            return {
                lightOn: true
            }
        });
    }

    toggleLight() {
        this.setState((state, props) => {
            return {
                lightOn: !state.lightOn
            }
        })
    }



    render() {
        const styleVidro = {
            backgroundColor : (this.state.lightOn) ? 'yellow' : '#333'
        };

        return (
            <div style={this.state.style} onClick={this.toggleLight}>
                <div style={styleVidro}></div>
                <div style={styleVidro}></div>
                <div style={styleVidro}></div>
                <div style={styleVidro}></div>
            </div>
        )
    }
}