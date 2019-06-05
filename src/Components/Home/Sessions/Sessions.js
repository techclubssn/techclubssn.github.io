import './Sessions.css'
import React, {Component} from 'react';
import {Collapse} from 'react-collapse';
import {StickyContainer, Sticky} from 'react-sticky';
import CustomMarkdown from '../../Markdown/Markdown.js';
import {Timeline, TimelineEvent} from 'react-event-timeline';

class Sessions extends Component{

  constructor(props){
    super(props)
    this.state = {
      displayPara: this.props.sticky,
    }
  }

  paraContent(){
    return(
      <div style={{paddingBottom: "5px"}}>
        <p>
          Sessions are weekly activities organized by the TechClub members. They are usually comprised of tutorials and classes on a particular 
          area of concentration. We also organize talks and provide guidance on technical events, projects and opportunities. 
        </p>
        <p>
          Sessions are mostly conducted during TechClub hours, which are usually kept at the last few periods of Thursday or Tuesday. All sessions 
          are open to everyone, however they might happen during class hours of other departments. This section lists out the date and venue of upcoming 
          and past sessions.
        </p>
      </div>
    )
  }

  toggleDisplayPara(){
    let sticky = this.props.sticky;
    let displayPara = this.state.displayPara;
    if(sticky === false && displayPara === true)
      this.setState({displayPara: false});
    else if(sticky === false && displayPara === false)
      this.setState({displayPara: true});
  }

  sessionHeaderSticky(){
    let displayPara = this.state.displayPara;
    return(<div>
    {
      this.props.sticky === true ?
        <Sticky>
          {({ style }) => (
            <div style={{...style, paddingTop:"30px", paddingBottom:"47px"}}>
              <h1>Sessions</h1>
              {this.paraContent()}
            </div>
            )}
        </Sticky> :
        <div>
          <h1>Sessions</h1>
          <Collapse isOpened={displayPara}>
            {this.paraContent()}
          </Collapse>
          <button onClick={() => this.toggleDisplayPara()} className='btn btn-warning'>
            {displayPara === true ? 'Less' : 'More'}
          </button>
        </div>
    }
    </div>)
  }

  renderTimeLine(){
    let paddingLoaderTop = this.props.sticky ? "87px" : "0px";
    if(this.props.data.length === 0){
      return(
        <div align="center" style={{paddingTop: paddingLoaderTop}}>
          <h4>Fetching latest information</h4>
          <div className="loader"></div> 
        </div>
      )
    }
    else{
      return(
        <Timeline orientation='right' lineColor="#333" lineStyle={{width: "4px"}} >
          {
            this.props.data.slice(0).reverse().map((object, i) =>
              (
                <TimelineEvent title={object.sessionName}
                               container="card"
                               subtitle={ <div>
                                            <p style={{margin: "0"}}> {'Date: ' + object.date } </p> 
                                            <p style={{margin: "0"}}>{object.venue === '' ? 'Venue: TBD' : 'Venue: ' + object.venue}</p> 
                                          </div>}
                               cardHeaderStyle={{background: "orange"}}
                               bubbleStyle={{
                                background: 'orange',
                                borderColor: '#333',
                                borderWidth: '4px'
                               }}
                               titleStyle={{
                                fontSize: '18px',
                                color: '#333',
                                fontFamily:'Cabin'
                               }}
                               subtitleStyle={{
                                fontSize: '11px',
                                color: 'white'
                               }}
                               contentStyle={{
                                fontFamily:'Cabin',
                                fontSize:'14px'
                               }}

                >
                  <CustomMarkdown data={object.details} />
                </TimelineEvent>
              )
            )
          }
        </Timeline>
      )
    }
  }

  render() {
    return(
    <div className="container-fluid">
      <StickyContainer>
          <div className="row">
            <div className="col-sm-6 col-sm-push-6 sessionsHeader">
                {this.sessionHeaderSticky()}
             </div>
              <div className="col-sm-6 col-sm-pull-6 sessionsStyle"> 
                {this.renderTimeLine()}
              </div>
          </div>
        </StickyContainer>
      </div>
      )
  }
}

export default Sessions;
