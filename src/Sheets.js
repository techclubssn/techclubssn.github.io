import ReactGoogleSheets from 'react-google-sheets';
import React from 'react';
 
class DataComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sheetLoaded: false,
    }
  }
  render() {
    return (
      <ReactGoogleSheets 
        clientId={
"379281619235-7d1pgr4dtoelu3sq6dbre8iqkd9q1acv.apps.googleusercontent.com"
}
        apiKey={"AIzaSyAxraoUu5WwmvXHJ9byukMLu3SI5pVkbZQ"}
        spreadsheetId={"1nWsyn1isF7gl2A1dMLiIpp0mAR6QVvIuNfg2nEn54rc"}
        afterLoading={() => this.setState({sheetLoaded: true})}
      >
        {this.state.sheetLoaded ? 
          <div>
            {/* Access Data */}
            {console.log('Your sheet data : ', 
              this.props.getSheetsData("Sheet1") )
          }
            {/* Update Data */}
          </div>
          :
          'loading...'
        }
      </ReactGoogleSheets>
    )
  }
}
 
export default ReactGoogleSheets.connect(DataComponent);