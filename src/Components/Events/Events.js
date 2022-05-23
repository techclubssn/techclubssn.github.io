import React, {useEffect, useState} from "react";
// import { useState, useEffect, useRef } from "react";
import "./Events.css";
import Dm from '../../Images/dcm2.png';
import { OnGoingEventsData } from "./EventData";
import EventSlider from "./EventSlider";
import PastEventsSlider from "./PastEvents";


// function useOnScreen(ref, rootMargin = "0px") {
//   const [isIntersecting, setIntersecting] = useState(false);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIntersecting(entry.isIntersecting);
//       },
//       {
//         rootMargin,
//       }
//     );
//     if (ref.current) {
//       observer.observe(ref.current);
//     }
//   }, []);
//   return isIntersecting;
// }

const Events = () => {


  return (
    <div className="wrapper">
      <section className="upcoming-events" >
        <div className="title">
          Ongoing <span className="title-span">Events</span>
        </div>
        <EventSlider slides={OnGoingEventsData}/>
      </section>
      <section className="upcoming-events">
        <div className="title">
          Upcoming <span className="title-span">Events</span>
        </div>
        <EventSlider slides={OnGoingEventsData}/>
      </section>
      <section className="upcoming-events">
        <div className="title">
          Past Events & <span className="title-span">Workshops</span>
        </div>
        <PastEventsSlider slides={OnGoingEventsData}/>
      </section>
    </div>

    // <div className="teams-page">
    //   <div className="team-section" ref={teamRef}>
    //     <div className="section-title-div">
    //       <div
    //         className={
    //           teamOnScreen ? "bubble-bg bubble-left-in" : "hide-content"
    //         }
    //       ></div>
    //       <div
    //         className={
    //           teamOnScreen ? "title-text-div" : "title-text-div hide-content"
    //         }
    //       >
    //         <h1 className="section-title-text gray">Meet</h1>
    //         <h1 className="section-title-text gray">The</h1>
    //         <h1 className="section-title-text">Team</h1>
    //       </div>
    //     </div>
    //     <div
    //       className={
    //         teamOnScreen ? "team-contents" : "team-contents hide-content"
    //       }
    //     >
    //       <div className="team-leaders-div">
    //         {data.teamData.slice(0, 2).map((item, idx) => {
    //           return <TeamCard data={item} idx={idx} />;
    //         })}
    //       </div>
    //       {data.teamData.slice(2).map((item, idx) => {
    //         return <TeamCard data={item} idx={idx} />;
    //       })}
    //     </div>
    //   </div>
    //   <div className="team-section" ref={alumniRef}>
    //     <div className="section-title-div-right">
    //       <div
    //         className={
    //           teamOnScreen ? "hide-content" : "bubble-bg bubble-right-in"
    //         }
    //       ></div>
    //       <div
    //         className={
    //           teamOnScreen
    //             ? "title-text-div-right hide-content"
    //             : "title-text-div-right"
    //         }
    //       >
    //         <h1 className="section-title-text gray">Meet</h1>
    //         <h1 className="section-title-text gray">Our</h1>
    //         <h1 className="section-title-text">Alumni</h1>
    //       </div>
    //     </div>
    //     <div
    //       className={
    //         teamOnScreen ? "alumni-contents hide-content" : "alumni-contents"
    //       }
    //     >
    //       {data.alumniData.map((item, idx) => {
    //         return <TeamCard data={item} idx={idx} />;
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Events;
