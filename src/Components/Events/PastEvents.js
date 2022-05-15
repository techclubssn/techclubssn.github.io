import React, {useState} from "react";
import { OnGoingEventsData } from "./EventData";
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import './Events.css'
const PastEventsSlider = ({slides}) => {
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
        <div>
            <div className="carousel large-window">
                <IoIosArrowBack className="left-arrow" onClick={prevSlide}/>
                <IoIosArrowForward className="right-arrow" onClick={nextSlide}/>
                {OnGoingEventsData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active': 'slide'} key={index}>
                            {index === current && (
                                <div className="event">
                                    <div className="image" style={{marginRight: "50px"}}>
                                        <img src={OnGoingEventsData[index].image} alt="content image"/>
                            
                                    </div>
                                    <div className="image" style={{marginRight: "50px"}}>
                                        <img src={OnGoingEventsData[index+1 >= OnGoingEventsData.length ? (index+1)-OnGoingEventsData.length : index+1].image} alt="content image"/>
                            
                                    </div>
                                    <div className="image" style={{marginRight: "50px"}}>
                                        <img src={OnGoingEventsData[index+2 >= OnGoingEventsData.length ? (index+2)-OnGoingEventsData.length : index+2].image} alt="content image" style={{opacity: 0.2}}/>
                            
                                    </div>
                                </div>
                            )}
                            
                        </div>
                    )
                })} 
            
            </div>
            <div className="carousel small-window">
                <IoIosArrowBack className="left-arrow" onClick={prevSlide}/>
                <IoIosArrowForward className="right-arrow" onClick={nextSlide}/>
                {OnGoingEventsData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active': 'slide'} key={index}>
                            {index === current && (
                                <div className="event">
                                    <div className="event-img">
                                        <img src={slide.image} alt="content image"/>
                                    </div>   
                                </div>
                            )}
                        </div>
                    )
                })} 
            </div>
        </div>
        
    );
}

export default PastEventsSlider