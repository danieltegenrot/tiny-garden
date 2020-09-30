import React from 'react'

import CactusImage from '../../assets/flowers/cactus.png'
import TomatoImage from '../../assets/flowers/tomato.png'

import './accordion.css'

class Accordion extends React.Component {

    constructor(props) {
        super(props)
    }


    handleClick = (plant) => {
        if (plant == 'cactus') {
            if (this.props.stars > 0) {  
                this.props.changeStarCount(this.props.stars - 1)
                this.props.changeSeedCount(this.props.cactusSeeds + 1, 'cactus')
            }
        } else if (plant == 'tomato') {
            if (this.props.stars > 1) {  
                this.props.changeStarCount(this.props.stars - 2)
                this.props.changeSeedCount(this.props.tomatoSeeds + 1, 'tomato')
            }
        }    
    }


    render() {
        return(
            <section className="accordion-section">
                <div id="accordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <i className="fas fa-list icon"></i> Journal
                            </button>
                        </h5>
                        </div>

                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <p>The Cactus (plural cacti, cactuses, or less commonly, cactus) is a member of the plant family Cactaceae.</p>
                                <img src={CactusImage} />
                                <p>Watering preferences: One time in the day, one time in the evening. Water every day. Takes three days to mature.</p>
                                <hr />
                                <p>Solanum lycopersicum, commonly known as a tomato plant.</p>
                                <img src={TomatoImage} className="tomato-image" />
                                <p>Watering preferences: Two times in the evening. Water every day. Takes two days to mature.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <i className="fas fa-tags icon"></i> Shop 
                            </button>
                        </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                <button 
                                    className="btn btn-outline-dark buy-button" 
                                    type="button"
                                    onClick={() => this.handleClick('cactus')}
                                >
                                    Buy Cactus seed
                                </button>
                                <span className='star-cost'> 1 star</span> <br />
                                <button 
                                    className="btn btn-outline-dark buy-button" 
                                    type="button"
                                    onClick={() => this.handleClick('tomato')}
                                >
                                    Buy Tomato seed
                                </button>
                                <span className='star-cost'> 2 stars</span>
                                <hr />
                                <p>Stars: {this.props.stars}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <i className="fas fa-book-open icon"></i> Inventory
                            </button>
                        </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                            <p>Cactus seeds: {this.props.cactusSeeds}</p>
                                <p>Tomato seeds: {this.props.tomatoSeeds}</p>
                                <hr />
                                <p>Stars: {Math.round(this.props.stars)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Accordion