import React from 'react';
import Janela from './Janela';
import Porta from './Porta';
import Interruptor from './Interruptor';

export default class Predio extends React.Component {

   quantidadeJanelas = 9;

    constructor(props) {
        super(props);

        this.state = {
            style: {
                ...{
                    backgroundColor: 'white',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gridTemplateRows: '2fr 2fr 2fr 2fr',
                    padding: 20,
                    paddingBottom: 0,
                    gridGap: '10px 20px'
                }, 
                ...this.props.style
            },
            stylePorta: {
                gridColumn: '1'
            },
            allLightsOn: true,
            janelas: []
        }

        
        for(let i = 0; i < this.quantidadeJanelas; i++) {
            const ref = React.createRef();
            this.state.janelas.push(<Janela ref={ref} lightOn={this.state.allLightsOn} />);
        }
        this.togglAllLights = this.togglAllLights.bind(this);
    }

    togglAllLights() {
        this.state.janelas.forEach(janela => {
            if (this.state.allLightsOn) {
                janela.ref.current.turnLightOff();
                return;
            }
            janela.ref.current.turnLightOn();
        });
        this.setState((state, props) => {
            return {
                allLightsOn: !state.allLightsOn
            }
        });
    }


    render() {

        return(
            <div style={this.state.style}>
                
                {this.state.janelas}

                <Porta style={this.state.stylePorta}/>

                <Interruptor onClick={this.togglAllLights} style={{width: '18%', height: '25%', marginTop: '4vh', marginLeft: '2vw'}} />
            </div>
        );
    }
}