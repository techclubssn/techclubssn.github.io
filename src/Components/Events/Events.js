import React from "react";
// import { useState, useEffect, useRef } from "react";
import "./Events.css";
import Dm from '../../Images/dcm3.png';

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
    <div className="upcoming-events">
      <div className="title">
        Upcoming <span className="title-span">Events</span>
      </div>

      <div className="carousel">
        <div className="slide-left">
          {/*<img src="./left-button.svg" alt="" />*/}
        </div>

        <div className="event">
          <div className="left-content">
            <div className="event-img">
              {/* <img src="./Events_Workshop.png" alt="" /> */}
              <img
                src="https://i.imgur.com/Wdv7tQ5.png"
                alt="Interships 101"
              />
            </div>
          </div>
          <div className="right-content">
            <div className="event-title">Tech Club Talks</div>
            <div className="event-info">
              Internships, projects, resumes....too overwhelming? Allow us to
              break it down for you! Look out for this online workshop series
              where various speakers talk about their journey and also tips from
              your seniors on how to go about these. The first talk is on 12th
              November, mark your calendars!
            </div>
            <div className="event-button">
              <button className="primary-button">
                <a href="https://forms.gle/MUK6ozrtosZZsKEM7" rel="noopener noreferrer" target="_blank">
                  Register Now
                </a>
              </button>
              <img className='dm2' src={Dm} alt='dm2' />
            </div>
          </div>
        </div>
        <div className="slide-right">
          {/*<img src="./right-button.svg" alt="" />*/}
        </div>
      </div>
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
