import './News.css'
import React, {Component} from 'react';
import {Collapse} from 'react-collapse';
import CustomMarkdown from '../../Markdown/Markdown.js';
import {StickyContainer, Sticky} from 'react-sticky';
import {Timeline, TimelineEvent} from 'react-event-timeline';


class News extends Component{

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
          Information on the latest news regarding TechClub, Events and Hackathons. 
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

  newsHeaderSticky(){
    let displayPara = this.state.displayPara;
    return(<div>
    {
      this.props.sticky === true ?
        <Sticky>
          {({ style }) => (
            <div style={{...style, paddingTop:"30px", paddingBottom:"30px"}}>
              <h1>Anouncements</h1>
              {this.paraContent()}
            </div>
            )}
        </Sticky> :
        <div>
          <h1>Anouncements</h1>
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
    let paddingLoaderTop = this.props.sticky ? "37px" : "0px";
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
        <Timeline orientation="left" lineColor="#333" lineStyle={{width: "4px"}} >
          {
            this.props.data.slice(0).reverse().map((object, i) =>
              (
                <TimelineEvent title={object.headline} 
                               subtitle={'Date: ' + object.date }
                               container="card"
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
                  <CustomMarkdown data={object.news} />
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
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 sessionsHeader">
                {this.newsHeaderSticky()}
            </div> 
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 sessionsStyle">
                {this.renderTimeLine()}
            </div>
          </div>
        </StickyContainer>
      </div>
      )
  }

}

export default News;
