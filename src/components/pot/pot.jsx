import React from 'react'

import './pot.css'

import PotImg from '../../assets/flowers/garden-pot.png'

import PlantedCactus from '../../assets/flowers/cactus-sign-sheet.png'
import SmallCactus from '../../assets/flowers/small-cactus_sheet.png'
import MediumCactus from '../../assets/flowers/mid-cactus_sheet.png'
import BigCactus from '../../assets/flowers/cactus_sheet.png'

import PlantedTomato from '../../assets/flowers/tomato-sign-sheet.png'
import Tomato from '../../assets/flowers/tomato-plant_sheet.png'

class Pot extends React.Component{

    constructor(props) {
        super(props)

        this.state = { 
            cactus: {
                img: [`url(${PlantedCactus})`, `url(${SmallCactus})`, `url(${MediumCactus})`, `url(${BigCactus})`],
                water: [0,1,1,0],
                growth: 2,
                starValue: 1,
                name: 'cactus'
            },
            tomato: {
                img: [`url(${PlantedTomato})`, `url(${Tomato})`, `url(${Tomato})`],
                water: [0,0,2,0],
                growth: 1,
                starValue: 2,
                name: 'tomato'

            },
            
            flower: '',
            planted: false,
            fullyGrown: false,
            plant: '',
            waterCheck: [0,0,0,0],
            stars: 0,
            growth: 0,
            interval: '',
        }
    }

    timer = () => {
        
        if (this.state.growth < this.state.plant.growth) {
            this.setState({flower: this.state.plant.img[this.state.growth + 1]})
            this.setState({growth: this.state.growth + 1})

            //check if the two water lists match and give out star coins
            if (this.state.waterCheck == this.state.plant.water) {
                this.state.starValue += (this.state.plant.starValue * 3)
            } else {
                    var sum = this.state.plant.water.reduce(function(a, b){
                        return a + b;
                    }, 0);
                    var sum2 = this.state.waterCheck.reduce(function(a, b){
                        return a + b;
                    }, 0);
                if (sum == sum2) {
                    this.state.stars += (this.state.plant.starValue * 2)
                } else if (sum2 > 1 && sum2 <= sum){
                    this.state.stars += this.state.plant.starValue
                } else {
                    this.state.stars += 0
                }
            }   
            
        } else {
            clearInterval(this.state.interval)
            this.setState({flower: this.state.plant.img[this.state.plant.img.length - 1]})  
            console.log('plant fully grown')
            this.setState({planted: false})
            this.setState({growth: 0})       
        }

        this.setState({waterCheck: [0,0,0,0]})
    }

    
    handleClick = (plant) => {
        if (plant == 'cactus') { //this.state.plant = cactus
            if (this.props.cactusSeeds > 0 && this.state.planted == false) {  
                this.setState({flower: this.state.cactus.img[0]})
                this.setState({planted: true})
                this.setState({plant: this.state.cactus})
                this.state.interval = setInterval(this.timer, 20000)
                this.props.changeSeedCount(this.props.cactusSeeds - 1, 'cactus')
            }
        } else if (plant == 'tomato' && this.state.planted == false) {
            if (this.props.tomatoSeeds > 0) { 
                this.setState({flower: this.state.tomato.img[0]}) 
                this.setState({planted: true})
                this.setState({plant: this.state.tomato})
                this.state.interval = setInterval(this.timer, 20000)
                this.props.changeSeedCount(this.props.tomatoSeeds - 1, 'tomato')
            }
        }
            
    }

    handlePlantClick = () => {
        if (this.state.planted == true) {
            switch(this.props.time) {
                case 'Morning':
                    this.state.waterCheck[0] += 1
                    break;
                case 'Day':
                    this.state.waterCheck[1] += 1
                    break;
                case 'Evening':
                    this.state.waterCheck[2] += 1
                    break;
                case 'Night':
                    this.state.waterCheck[3] += 1
                    break;
            }
        } else {
            this.setState({flower: undefined})
            this.props.changeStarCount(this.props.stars + this.state.stars)
        }    
    }
 
    render() {
        
        return (
            <div>
                <img 
                    src={PotImg} 
                    className="pot"
                />
                <div 
                    id="plant" 
                    style={{backgroundImage: this.state.flower}}
                    data-toggle="tooltip" 
                    data-placement="left" 
                    title="Click to water"
                    onClick={this.handlePlantClick}
                />
                <div class="dropdown">
                    <button class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Plant
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#" onClick={() => this.handleClick('cactus')}>Cactus</a>
                        <a class="dropdown-item" href="#" onClick={() => this.handleClick('tomato')}>Tomato</a>
                    </div>
                </div>

            </div>      
        )

    }
    
}

export default Pot
