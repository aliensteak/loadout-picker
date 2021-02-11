import React from 'react'
import AddLoadout from './AddLoadout'
import ProjectName from './ProjectName'
class App extends React.Component {
  constructor() {
    super()

    this.state = {
      projectName: "",
      side: ""
    }

    this.setParentState = this.setParentState.bind(this)
  }

  setParentState(property, value) {
    this.setState({ [property]: value })
  }

  render() {
    return (
      <div className="uk-container-large uk-padding-large">
        <div className="uk-alert-warning uk-padding-small uk-margin-medium-bottom uk-text-center" style={{ border: '1px solid orange' }}>
          NOTE: This project is currently WIP
        </div>

        <ProjectName setParentState={this.setParentState} />

        <AddLoadout />
      </div>
    )
  }
}

export default App