import './Team.css';
import React, {Component} from 'react';

class Team extends Component{

  componentDidMount(){
    window.scrollTo(0,0);
  }

  noUrlHandler(url, name) {
    if(url === '')
      return <h4><b>{name}</b></h4>
    else
      return <h4><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></h4>
  }

  noImgHandler(name, src) {
    if(src === '')
      return <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt={name} className='teamImg' />
    else
      return <img src={src} alt={name} className='teamImg' />
  }

  rowBuilder(data) {
    let len = data.length;
    let rows = Math.ceil(len / 3);
    let imgRows = [];

    for(let i = 0; i < rows; i++){  
      let imageCols = [];
      for(let j = 0; j < 3; j++){
        let idx = i * 3 + j;
        if(idx < len){
          imageCols.push(
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div key={idx}>
                {this.noImgHandler(data[idx].name, data[idx].dp)}
                {this.noUrlHandler(data[idx].web, data[idx].name)}
                <h5 style={{marginTop: "-5px"}}>{data[idx].role}</h5>
              </div>
            </div>
          );
        }
      }
      imgRows.push(
        <div className="row" style={{paddingTop: "20px"}}>
          {imageCols}
        </div>
      );
    }

    return(
      <div className="container">
        {imgRows}
      </div>
    );
  }

  renderTeam(){
    if(this.props.teamData.length === 0){
      return(
        <div align="center" style={{paddingBottom: "15px"}}>
          <h4>Fetching team information</h4>
          <div className="loader"></div> 
        </div>
      )
    }
    else{
      return(
        <div> 
          {this.rowBuilder(this.props.teamData)} 
        </div>
      )
    }
  }

  renderAlumni(){
    if(this.props.alumniData.length === 0){
      return(
        <div align="center" style={{paddingBottom: "15px"}}>
          <h4>Fetching alumni information</h4>
          <div className="loader"></div> 
        </div>
      )
    }
    else{
      return(
        <div> 
          {this.rowBuilder(this.props.alumniData)} 
        </div>
      )
    }
  }

  render() {
    return(
      <div className="teamStyle">
        <h1 style={{fontFamily:'Cabin'}}>Meet the Team</h1>
        {this.renderTeam()}
        <h1 style={{fontFamily:'Cabin'}}>Alumni</h1>
        {this.renderAlumni()}
      </div>
      )
  }

}

export default Team;