import React from 'react'

import './game.css'

import Garden from '../../components/garden/garden'
import Window from '../../components/window/window'

class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            time : 'Morning'
        }
    }

    timer = () => {
        switch (this.state.time) {
            case 'Morning':
                //stars plus one
                this.setState({time: 'Day'})
                break;
            case 'Day':
                this.setState({time: 'Evening'})
                break;
            case 'Evening':
                this.setState({time: 'Night'})
                break;
            case 'Night':
                this.setState({time: 'Morning'})
                break;
        }  
    }

    componentDidMount() {
        setInterval(this.timer, 5000)
    }

    render() {
        return(
            <div className="game">
                <h1 className="clock">Good {this.state.time}</h1>
                <Window />
                <Garden 
                    time = {this.state.time} 
                />
            </div>
            
        )
    }
}

export default Game