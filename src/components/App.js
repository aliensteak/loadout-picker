import React from "react"
import AddLoadout from "./AddLoadout"
import GenerateCode from "./GenerateCode"
import ProjectName from "./ProjectName"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      projectName: "",
      side: "",
      loadouts: {},
    }

    this.setParentState = this.setParentState.bind(this)
    this.updateAppLoadout = this.updateAppLoadout.bind(this)
  }

  updateAppLoadout(loadouts) {
    this.setState({ loadouts })
  }

  setParentState(property, value) {
    this.setState({ [property]: value })
  }

  render() {
    const projectData = {
      projectName: this.state.projectName,
      side: this.state.side,
      loadouts: this.state.loadouts
    }

    return (
      <div className='uk-container-large uk-padding-large'>
        <div
          className='uk-alert-warning uk-padding-small uk-margin-medium-bottom uk-text-center'
          style={{ border: "1px solid orange" }}
        >
          NOTE: This project is currently WIP
        </div>

        <ProjectName setParentState={this.setParentState} />

        <AddLoadout updateAppLoadout={this.updateAppLoadout} />

        <GenerateCode projectData={projectData} />
      </div>
    )
  }
}

export default App
