import React from 'react'
import { useState } from 'react'
import './Opportunities.css'


const Opportunities = () => {

    const [mousePos, changeMousePos] = useState({x: 0, y: 0})

    const mouseMoved = (e) => {
        changeMousePos({x: e.screenX, y: e.screenY})
    }

    return(
        <>
            <div className='opportunities-page'  onMouseMove={mouseMoved} >
                <div className='opportunities-title-div' >
                    <h1 className='opportunities-title' >Coming Soon!</h1>
                </div>
                <div className='mouse-bubble' style={{left: mousePos.x - 50, top: mousePos.y - 150}} />
            </div>
        </>
    )
}

export default Opportunities;