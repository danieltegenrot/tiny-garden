import React from 'react'

import './garden.css'

import Pot from '../pot/pot'
import Accordion from '../accordion/accordion'


class Garden extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            cactusSeeds : 0,
            tomatoSeeds : 0,
            stars : 5
        }
    }

    changeSeedCount(num, plant) {
        if (plant == 'cactus') {
            this.setState({cactusSeeds: num})
        } else if (plant == 'tomato') {
            this.setState({tomatoSeeds: num})
        }  
    }

    changeStarCount(num) {
        this.setState({stars: num})   
    }

    
    render() {

        return (
            <div>
                <div className="pot-row">
                    <div className="pot-col">
                        <Pot 
                            tomatoSeeds={this.state.tomatoSeeds} 
                            cactusSeeds={this.state.cactusSeeds} 
                            changeSeedCount={this.changeSeedCount.bind(this)} 
                            stars = {this.state.stars}
                            changeStarCount={this.changeStarCount.bind(this)}
                            time = {this.props.time}
                        />
                    </div>
                    <div className="pot-col">
                        <Pot 
                            tomatoSeeds={this.state.tomatoSeeds} 
                            cactusSeeds={this.state.cactusSeeds} 
                            changeSeedCount={this.changeSeedCount.bind(this)} 
                            stars = {this.state.stars}
                            changeStarCount={this.changeStarCount.bind(this)}
                            time = {this.props.time} 
                        />
                    </div>
                    <div className="pot-col">
                        <Pot 
                            tomatoSeeds={this.state.tomatoSeeds} 
                            cactusSeeds={this.state.cactusSeeds} 
                            changeSeedCount={this.changeSeedCount.bind(this)} 
                            stars = {this.state.stars}
                            changeStarCount={this.changeStarCount.bind(this)}
                            time = {this.props.time}
                        />
                    </div>
                </div>
                <section className="inventory">
                </section>
                <Accordion 
                    cactusSeeds = {this.state.cactusSeeds}
                    tomatoSeeds = {this.state.tomatoSeeds}
                    stars = {this.state.stars}
                    changeStarCount={this.changeStarCount.bind(this)} 
                    changeSeedCount={this.changeSeedCount.bind(this)} 
                />
            </div>
            
            
        )

    }
    
}

export default Garden