import React, {useEffect, useState} from "react";
import { OnGoingEventsData } from "./EventData";
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import './Events.css'

const EventSlider = ({slides}) => {
    const length = slides.length
    const [x, setX] = useState(0);
    const nextSlide = () => {
        x === -100*(length-1) ? setX(0) : setX(x-100)
    }
    
    const prevSlide = () => {
        x === 0 ? setX(-100*(length-1)) : setX(x+100)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

 
    return(
        <div className="carousel">
            <IoIosArrowBack className="left-arrow" onClick={prevSlide}/>
            <IoIosArrowForward className="right-arrow" onClick={nextSlide}/>
            {OnGoingEventsData.map((slide, index) => {
                return (
                    <div className="slide" key={index} style={{transform:`translateX(${x}%)`}}>
                            <div className="event">
                                <div className="left-content">
                                    <img src={slide.image} alt="content image" className="event-img"/>
                                </div>
                                <div className="right-content">
                                    <div className="event-title">{slide.title}</div>
                                    <div className="event-info">{slide.details}</div>
                                    <div className="event-button">
                                        <button className="primary-button">
                                            <a href="https://forms.gle/MUK6ozrtosZZsKEM7" rel="noopener noreferrer" target="_blank">
                                                Register Now
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                    </div>
                )
            })} 
        </div>
    );
}

export default EventSlider