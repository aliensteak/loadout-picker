import React, { Component } from "react"

class SqfCode extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isCodePresent: this.props.sqfCode === "No Loadouts Added" ? false : true,
    }
  }

  render() {
    return (
      <div>
        <h5>Sqf Code</h5>
        {this.state.isCodePresent ? <pre>{this.props.sqfCode}</pre> : (
          <React.Fragment>
            <div className="uk-flex uk-flex-between">
              <button
                className='uk-button uk-button-primary'
                onClick={() => console.log("Button Clicked")}
              >
                Download Sqf File
              </button>

              <button className="uk-button" uk-toggle="target: #sqfCode; animation: uk-animation-slide-bottom"><span uk-icon="chevron-down"></span></button>
            </div>
            <div className="uk-margin-top" id="sqfCode" hidden>
              <pre>{this.props.sqfCode}</pre>
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default SqfCode
