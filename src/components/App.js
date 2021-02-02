import React from 'react'
import ProjectName from './ProjectName'
class App extends React.Component {
  constructor() {
    super()

    this.state = {
      projectName: ""
    }

    this.setParentState = this.setParentState.bind(this)
  }

  setParentState(property, value) {
    this.setState({ [property]: value })
  }

  render() {
    return (
      <div className="uk-container-large uk-padding-large">
        <ProjectName setParentState={this.setParentState} />
        {this.state.projectName}
      </div>
    )
  }
}

export default App