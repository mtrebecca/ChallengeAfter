import React from 'react';

export default class Porta extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            style: {
                ...{backgroundColor: 'white',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridGap: 1
                },
                ...props.style
            },
            stylePorta: {
                backgroundColor: 'PaleVioletRed'
            }
        };
    }


    render() {
        return (
            <div style={this.state.style}>
                <div style={this.state.stylePorta}></div>
                <div style={this.state.stylePorta}></div>
            </div>
        );
    }
}