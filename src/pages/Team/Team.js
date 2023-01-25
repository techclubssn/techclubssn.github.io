import React from "react";
import { useState, useEffect, useRef } from "react";
import './Team.css';
import TeamCard from '../../components/TeamCard/TeamCard'


function useOnScreen(ref, rootMargin = "0px") {

  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);
  return isIntersecting;
}


const Team = (data) => {
  const teamRef = useRef();
  const alumniRef = useRef();
  const teamOnScreen = useOnScreen(teamRef, "-50%");

  return(
    <div className='teams-page'>
      {/*<img className='dm1' src={Dm3} alt='DM' />*/}
      <div className='team-section' ref={teamRef} >
        <div className='section-title-div'>
          <div className={teamOnScreen? 'bubble-bg bubble-left-in': 'hide-content'}></div>
          <div className={teamOnScreen? 'title-text-div': 'title-text-div hide-content'} >
            <h1 className='section-title-text gray' >Meet</h1>
            <h1 className='section-title-text gray' >The</h1>
            <h1 className='section-title-text' >Team</h1>
          </div>
        </div>
        <div className={teamOnScreen? 'team-contents': 'team-contents hide-content'} >
          <div className='team-leaders-div'>
            {data.teamData.slice(0,2).map((item, idx) => {
              return(
                <TeamCard data={item} idx={idx}/>
              )
            })}
          </div>
            {data.teamData.slice(2).map((item, idx) => {
              return(
                <TeamCard data={item} idx={idx}/>
              )
            })} 
        </div>
      </div>
      <div className='team-section' ref={alumniRef} >
        <div className='section-title-div-right'>
          <div className={teamOnScreen? 'hide-content': 'bubble-bg bubble-right-in'}></div>
          <div className={teamOnScreen? 'title-text-div-right hide-content': 'title-text-div-right'} >
            <h1 className='section-title-text gray' >Meet</h1>
            <h1 className='section-title-text gray' >Our</h1>
            <h1 className='section-title-text' >Alumni</h1>
          </div>
        </div>
        <div className={teamOnScreen? 'alumni-contents hide-content': 'alumni-contents'}>
          {data.alumniData.map((item, idx) => {
            return(
              <TeamCard data={item} idx={idx}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Team;
