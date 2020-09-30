import React from 'react'

import './flower.css'

import SmallCactus from '../../assets/flowers/small-cactus_sheet.png'


var imageStyle = {
    backgroundImage: `url(${SmallCactus})`
  };

const Flower = () => {

    return (

        <div id="plant" style={ imageStyle }></div>
           
    )
}

export default Flower