import React, {useState} from "react";
import { OnGoingEventsData } from "./EventData";
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import './Events.css'
const EventSlider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    
    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current+1)
    }
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current-1)
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
                    <div className={index === current ? 'slide active': 'slide'} key={index}>
                        {index === current && (
                            <div className="event">
                                <div className="left-content">
                                    <div className="event-img">
                                        <img src={slide.image} alt="content image"/>
                                    </div>
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
                        )}
                        
                    </div>
                )
            })} 
        </div>
    );
}

export default EventSlider