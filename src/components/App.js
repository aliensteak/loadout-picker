import React from 'react'
import AddLoadout from './AddLoadout'
import ProjectName from './ProjectName'
class App extends React.Component {
  constructor() {
    super()

    this.state = {
      projectName: "",
      loadouts: null
    }

    this.setParentState = this.setParentState.bind(this)
    this.addLoadoutClickHandler = this.addLoadoutClickHandler.bind(this)
  }

  setParentState(property, value) {
    this.setState({ [property]: value })
  }

  addLoadoutClickHandler() {
    const loadout = <AddLoadout />

    this.setState((prevState) => {
      return { loadouts : { ...prevState.loadouts, loadout } }
    })
  }

  render() {
    return (
      <div className="uk-container-large uk-padding-large">
        <ProjectName setParentState={this.setParentState} />

        <div>{this.state.loadouts}</div>
        <AddLoadout addLoadoutClickHandler={this.addLoadoutClickHandler} />
      </div>
    )
  }
}

export default App