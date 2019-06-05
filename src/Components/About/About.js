import './About.css'
import React, {Component} from 'react';

class About extends Component{

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {
    return(
      <div className='aboutUsStyle'>
        <div className='aboutContainer'>
          <img className='aboutImg' 
               src={this.props.largeScreen ? "/imgs/cover_large.jpg" : "/imgs/cover_small.jpg"} 
               alt="Hackathon" />
          <div className='aboutHeading'><h1>A B O U T</h1></div>
        </div>
        <div className='aboutContent'>
          <h4>
             Tech Club SSN is a student run organization of the department of ECE in SSN College of Engineering.
          </h4>
          <hr />
          <h1>Our Mission</h1>
          <p> 
             Since its inception in 2014, Tech Club SSN serves to enhance  
             student involvement in fields revolving around Electronics and Computer Science. We do this by conducting tutorials, classes and events on practical 
             concepts in fields such as Computer Vision, IoT, Robotics and Machine Learning. We organize technical events around the year where students can 
             apply their newly acquired skills. Moreover, we guide students to pursue their aspirations in the fields of their interest by preparing them for internships, 
             independant research work, significant technical events and hackathons.  
          </p>
          <hr />
          <h1>Join Us</h1>
          <p>
            Let's build something great together. We conduct weekly sessions and lots of events throughout the year. Sessions are mostly conducted during TechClub hours, 
            which are usually kept at the last few periods of Thursday or Tuesday. Details of upcoming sessions will be updated on the website. Stay tuned to the news 
            section of the website for information on exciting events!
          </p>
          <p>
            Tech Club SSN is a welcoming community that is open for all. No pre-requisite knowledge is required! A desire to learn and build something is more than enough. 
            Even though Tech Club is an organization based in the department of ECE, students of all departments are welcome to join our activities! However,
            since most sessions are conducted on Tech Club hours which are only available on ECE timetables (from 3rd semester and above), we cannot guarantee OD for regular 
            sessions for students belonging to other departments (and first years students). OD will be provided for almost every other acitivity for everyone!
          </p>
          <hr />
          <h1>Study Guides</h1>
          <p>
            We document the materials used in our sessions so that students can refer to it even if they miss out on the sessions. Also, we document information regarding 
            internships, technical opportunities, MS application process and much more. Checkout our GitHub page for all such materials.
          </p>
        </div>
      </div>
      );
  }
}

export default About;
