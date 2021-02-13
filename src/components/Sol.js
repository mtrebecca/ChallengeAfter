import React from 'react';

export default class Sol extends React.Component {

    render() {
        
        const style = {...{
            background: 'Khaki',
            borderRadius: '10vw',
            width: '8vw',
            height: '8vw'
        }, ...this.props.style};

        return (
            <div style={style}></div>
        )
    }
}