import React from "react"

import AddLoadout from "./loadout-picker/AddLoadout"
import GenerateCode from "./loadout-picker/GenerateCode"
import ProjectName from "./loadout-picker/ProjectName"

class LoadoutPicker extends React.Component {
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
      loadouts: this.state.loadouts,
    }

    return (
      <div className='uk-container-large uk-padding-large uk-padding-remove-top' style={{ overflow: "scroll", height: '100%' }}>
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

export default LoadoutPicker
