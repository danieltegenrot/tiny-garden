import React from 'react'

import './window.css'

import Water from '../../assets/backgrounds/water-gif.gif'


const Window = () => {

    return (
        <div className="window">
            <img src={Water} className="bg"/>
        </div>
        
    )
}

export default Window