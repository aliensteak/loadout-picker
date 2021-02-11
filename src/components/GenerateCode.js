import React, { Component } from 'react'

class GenerateCode extends Component {
  constructor(props) {
    super(props)

    this.state = {
      code: "No Data Found",
    }

    this.generateCodeClickHandler = this.generateCodeClickHandler.bind(this)
  }

  generateCodeClickHandler() {
    const data = this.props.projectData

    let code = "Project Name: " + data.projectName + '\n'
    code    += "Loadout Side: " + data.side + '\n'
    code    += "Loadout File: " + JSON.stringify(data.loadouts, undefined, 2)

    this.setState({ code })
  }

  render() {
    return (
      <div className='uk-card uk-card-default uk-width-expand uk-margin-bottom'>
        <div className='uk-card-header'>
          <div className='uk-width-expand'>
            <h3 className='uk-card-title uk-margin-remove-bottom'>
              Generate Loadouts
            </h3>
          </div>
        </div>
        <div className='uk-card-body'>
          <div className="uk-margin-bottom uk-text-center">
            <button className="uk-button uk-button-danger" onClick={this.generateCodeClickHandler}>Generate Code</button>
          </div>

          <div className="uk-margin-bottom">
            <pre>{this.state.code}</pre>
          </div>
        </div>
      </div>
    )
  }
}

export default GenerateCode