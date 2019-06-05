import './Hackerspace.css';
import React, {Component} from 'react';
import {Collapse} from 'react-collapse';

class HackerSpace extends Component{

  constructor(props){
    super(props);
    this.state = {
      'formOpen': false
    };
    this.revealForm = this.revealForm.bind(this)
  }

  componentDidMount(){
    window.scrollTo(0,0);
  }

  revealForm(){
    let currentState = this.state.formOpen;
    this.setState({'formOpen': !currentState});
  }

  renderTitle(){
    let largeScreen = this.props.largeScreen;
    if(largeScreen){
      return(<h1>H A C K E R S P A C E</h1>)
    }
    else{
      return(<p style={{fontSize: "24px",
                        fontWeight: "bold", 
                        paddingTop: "30px", 
                        marginLeft: "-100px", 
                        marginRight: "-100px"}}>H A C K E R S P A C E</p>)
    }
  }

  render() {
    return(
      <div className='aboutUsStyle'>
        <div className='aboutContainer'>
          <img className='aboutImg' 
               src={this.props.largeScreen ? "/imgs/cover_large.jpg" : "/imgs/cover_small.jpg"} 
               alt="Hackathon" />
          <div className='aboutHeading'>{this.renderTitle()}</div>
        </div>
        <div className='aboutContent'>
          <h4>
             HackerSpace is a 24 hour intracollege hackathon hosted by TechClubSSN and SSN Lakshya.
          </h4>
          <hr />
          <h1>HackerSpace</h1>
          <div>
            <p style={{fontSize: "15px"}}> 
               HackerSpace is a 24 hour overnight Hackathon that aims to test the technical and entrepreneurial skills of students in SSN. Participants 
               are invited to send in an abstract of a product that they can build in 24 hours and then pitch it to investors. Participants are  
               encouraged to use technologies such as AI, IoT, AR/VR and Blockchain to build products that can solve problems in the domains of Security, 
               Development, Logistics and Agriculture. Exciting prizes worth Rs.30000 await! <i style={{fontSize: "13px"}}>(inclusive of vouchers and swag)</i>
            </p> 
          </div>
          <hr />
          <h1>Themes</h1>
          <div style={{paddingTop:"25px"}} className="container">
            <div className="row">
              <div style={{padding:"10px 10px 10px 10px"}} className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <i style={{fontSize: "70px"}} class="fas fa-shield-alt"></i>
                <h3>Security</h3>
                <i>Safeguarding a community through feasible, reliable and scalable technology.</i>
              </div>
              <div style={{padding:"10px 10px 10px 10px"}} className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <i style={{fontSize: "70px"}} class="fas fa-cogs"></i>
                <h3>Development</h3>
                <i>Enhancing the facilities of a community through intelligent innovations.</i>
              </div>
              <div style={{padding:"10px 10px 10px 10px"}} className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <i style={{fontSize: "70px"}} class="fas fa-map-marked-alt"></i>
                <h3>Logistics</h3>
                <i>Solving critical problems in transport, delivery and related services.</i>
              </div>
              <div style={{padding:"10px 10px 10px 10px"}} className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <i style={{fontSize: "70px"}} class="fab fa-pagelines"></i>
                <h3>Agriculture</h3>
                <i>Providing realistic and feasible solutions to enhance agricultural productivity.</i>
              </div>
            </div>
          </div>
          <hr />
          <h1>Details</h1>
          <div style={{textAlign: "left"}}>
            <ul style={{fontSize: "16px"}}>
              <li>The teams with the best abstracts will be shortlisted for the Hackathon.</li>
              <li>Dinner on Day 1 and Breakfast on Day 2 will be provided.</li>
              <li>Refreshments will be provided during the course of the event.</li>
              <li>Teams of a minimum of 2 and a maximum of 3 people are allowed.</li>
              <li>Extension boxes, if needed, must be brought by the participants</li>
              <li>Participants are required to bring the components that they require.</li>
              <li>Mentorship for both technical and entrepreneurial skills will be given</li>
              <li>Product will be judged based on Innovation, Impact, Feasibility and Marketability.</li>
              <li>Participants are requested to register their team and send in their abstract before the deadline using the form below.</li>
              <li>Finalists are required to pay Rs.500 (per team) as registration fee once they get a confirmation mail. Payment can be made using cash or Google Pay.</li>
              <li>Participants are supposed to build their product during the Hackathon.</li>
              <li>Product can be a mix of hardware and software technologies, but can be purely software or hardware based as well.</li>
              <li>Participants are allowed to use existing libraries or components, however only the work done during the 24hrs will be considered for evaluation.</li>
            </ul>
          </div>
          <hr />
          <h1>Agenda</h1>
          <div style={{textAlign: "left"}}>
            <ul style={{fontSize: "16px"}}>
              <li>Venue: Mini Auditorium</li>
              <li>Day 1 - 20th February 2019:
                <ul>
                  <li>10:30AM - Registration</li>
                  <li>11:30AM - Introduction</li>
                  <li>12:00PM - Hackathon Starts</li>
                  <li>5:00PM - Refreshments</li>
                  <li>8:30PM - Dinner</li>
                </ul>
              </li>
              <li>Day 2 - 21st February 2019:
                <ul>
                  <li>12:00AM - Refreshments</li>
                  <li>8:00AM - Breakfast</li>
                  <li>12:00PM - Hackathon Stops</li>
                  <li>12:30PM - Product Pitching</li>
                  <li>3:00PM - Valedictory</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr />
          <h1>Register Now</h1>
          <p style={{color:"red", "textAlign": "center"}}>Registrations close at 12 noon on 19th February 2019</p>
          <div style={{paddingTop: "10px", paddingLeft: "7px"}}>
            <button className="btn btn-warning" onClick={this.revealForm}>
              {this.state.formOpen ? "Collapse Form" : "Click Here"}
            </button>
          </div>
          <Collapse isOpened={this.state.formOpen}>
            <div className='formsStyle' style={{paddingTop: '50px'}}>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdfujJHB_sgH2GbQXgosWB6pkJo-gO9AbkN_FMKSyO5B91GAQ/viewform?embedded=true" 
                  width="75%" 
                  height="650"
                  title="Hackathon Forms" 
                  frameborder="0" 
                  marginheight="100px" 
                  marginwidth="0">Loading...
              </iframe>
            </div>
          </Collapse>
          <hr />
          <h1>Sponsors</h1>
          <div style={{paddingTop:"25px"}} className="container">
            <div className="row">
              <div style={{paddingBottom:"25px"}} className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <i style={{fontSize: "15px"}}>Associate Sponsor</i>
                <img src="http://www.altsense.co.in/wp-content/uploads/2017/06/altsense.jpg" 
                     alt="AltSense" 
                     className="img-responsive" 
                     style = {{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "70%"
                     }}
                      />
              </div>
              <div style={{paddingBottom:"25px"}} className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <i style={{fontSize: "15px"}}>Official Coding Partner</i>
                <img src = "/imgs/coding_ninjas_logo.png" 
                     alt = "Coding Ninjas" 
                     className = "img-responsive"
                     style = {{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "70%"
                     }} />
              </div> 
              <div style={{paddingBottom:"25px"}} className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <i style={{fontSize: "15px"}}>Official Food Partner</i>
                <img src = "/imgs/something_fishy_logo.jpg" 
                     alt = "Something Fishy" 
                     className = "img-responsive" 
                     style = {{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "70%"
                     }}
                      />
              </div>
              <div style={{paddingBottom:"20px"}} className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <i style={{fontSize: "15px"}}>Official Beverage Partner</i>
                <img src = "http://assets.limetray.com/assets/user_images/logos/original/1486040953_Logod.png" 
                     alt = "Fruit Shop" 
                     className = "img-responsive" 
                     style = {{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "70%"
                     }}
                      />
              </div>
            </div>
          </div>
          <hr />
          <h1>Contact</h1>
          <div style={{textAlign: "left"}}>
            <ul style={{fontSize: "16px"}}>
              <li>Rakesh: +919884706702</li>
              <li>Swati: +919884682869</li>
              <li>Bharath Raj: +919841069732</li>
              <li>Pratheessh Kumar: +919677519902</li>
            </ul>
          </div>
        </div>
      </div>
      );
  }
}

export default HackerSpace