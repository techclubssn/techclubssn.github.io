// import './Team.css';
// import React, {Component} from 'react';

// class Team extends Component{

//   componentDidMount(){
//     window.scrollTo(0,0);
//   }

//   noUrlHandler(url, name) {
//     if(url === '')
//       return <h4><b>{name}</b></h4>
//     else
//       return <h4><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></h4>
//   }

//   noImgHandler(name, src) {
//     if(src === '')
//       return <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt={name} className='teamImg' />
//     else
//       return <img src={src} alt={name} className='teamImg' />
//   }

//   rowBuilder(data) {
//     let len = data.length;
//     let rows = Math.ceil(len / 3);
//     let imgRows = [];

//     for(let i = 0; i < rows; i++){  
//       let imageCols = [];
//       for(let j = 0; j < 3; j++){
//         let idx = i * 3 + j;
//         if(idx < len){
//           imageCols.push(
//             <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
//               <div key={idx}>
//                 {this.noImgHandler(data[idx].name, data[idx].dp)}
//                 {this.noUrlHandler(data[idx].web, data[idx].name)}
//                 <h5 style={{marginTop: "-5px"}}>{data[idx].role}</h5>
//               </div>
//             </div>
//           );
//         }
//       }
//       imgRows.push(
//         <div className="row" style={{paddingTop: "20px"}}>
//           {imageCols}
//         </div>
//       );
//     }

//     return(
//       <div className="container">
//         {imgRows}
//       </div>
//     );
//   }

//   renderTeam(){
//     if(this.props.teamData.length === 0){
//       return(
//         <div align="center" style={{paddingBottom: "15px"}}>
//           <h4>Fetching team information</h4>
//           <div className="loader"></div> 
//         </div>
//       )
//     }
//     else{
//       return(
//         <div> 
//           {this.rowBuilder(this.props.teamData)} 
//         </div>
//       )
//     }
//   }

//   renderAlumni(){
//     if(this.props.alumniData.length === 0){
//       return(
//         <div align="center" style={{paddingBottom: "15px"}}>
//           <h4>Fetching alumni information</h4>
//           <div className="loader"></div> 
//         </div>
//       )
//     }
//     else{
//       return(
//         <div> 
//           {this.rowBuilder(this.props.alumniData)} 
//         </div>
//       )
//     }
//   }

//   render() {
//     return(
//       <div className="teamStyle">
//         <h1 style={{fontFamily:'Cabin'}}>Meet the Team</h1>
//         {this.renderTeam()}
//         <h1 style={{fontFamily:'Cabin'}}>Alumni</h1>
//         {this.renderAlumni()}
//       </div>
//       )
//   }

// }

// export default Team;


import React from "react";
import { useState, useEffect, useRef } from "react";
import './Team.css';

import TeamCard from '../../Containers/TeamCard'



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

  const members = ['Shankrith S', 'Shankrith S', 'Shankrith S', 'Shankrith S', 'Shankrith S']
  const alumni = ['Shankrith S', 'Shankrith S', 'Shankrith S', 'Shankrith S', 'Shankrith S', 'Shankrith S', 'Shankrith S', 'Shankrith S']
  const teamRef = useRef();
  const alumniRef = useRef();
  const teamOnScreen = useOnScreen(teamRef, "-50%");
  const alumniOnScreen = useOnScreen(alumniRef, "-60px");

  return(
    <div className='teams-page'>
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