import React from "react"

import LoadoutInput from "./LoadoutInput"

class AddLoadout extends React.Component {
  constructor() {
    super()

    this.state = {
      defaultColor: "#ffffff",
      loadoutsJSX: [],
      loadouts: {},
    }

    this.handleChange = this.handleChange.bind(this)
    this.addLoadoutClickHandler = this.addLoadoutClickHandler.bind(this)
    this.setParentState = this.setParentState.bind(this)
    this.deleteLoadout = this.deleteLoadout.bind(this)
    this.updateLoadout = this.updateLoadout.bind(this)
  }

  handleChange(event) {
    this.props.setParentState(event.target.name, event.target.value)
  }

  updateLoadout(loadout) {
    this.setState((prevState) => {
      const prevLoadouts = prevState.loadouts

      prevLoadouts[loadout.id] = {
        id: loadout.id,
        name: loadout.name,
        code: loadout.code,
        color: loadout.color,
      }

      return { loadouts: prevLoadouts }
    }, this.props.updateAppLoadout(this.state.loadouts))
  }

  setParentState(name, value) {
    this.setState({ [name]: value })
  }

  deleteLoadout(id) {
    this.setState((prevState) => {
      // remove loadout from ui
      const loadoutsJSX = prevState.loadoutsJSX
        .filter((loadoutsJSX) => parseInt(loadoutsJSX.key) !== id)
        .map((loadoutsJSX) => loadoutsJSX)

      // remove loadout from data
      const loadouts = prevState.loadouts
      delete loadouts[id]

      return { loadoutsJSX: loadoutsJSX, loadouts: loadouts }
    }, this.props.updateAppLoadout(this.state.loadouts))
  }

  addLoadoutClickHandler() {
    this.setState((prevState) => {
      const id = new Date().getTime()
      return {
        loadoutsJSX: [
          ...prevState.loadoutsJSX,
          <LoadoutInput
            key={id}
            id={id}
            deleteLoadout={this.deleteLoadout}
            setParentState={this.setParentState}
            defaultColor={prevState.defaultColor}
            updateLoadout={this.updateLoadout}
          />,
        ],
      }
    })
  }

  render() {
    return (
      <div className='uk-card uk-card-default uk-width-expand uk-margin-bottom'>
        <div className='uk-card-header'>
          <div className='uk-width-expand'>
            <h3 className='uk-card-title uk-margin-remove-bottom'>
              Add Loadouts
            </h3>
          </div>
        </div>
        <div className='uk-card-body'>
          {this.state.loadoutsJSX.length === 0 ? (
            <div className='uk-text-center'>
              <i>No Loadouts Available</i>
            </div>
          ) : (
            <div>{this.state.loadoutsJSX}</div>
          )}

          <div className='uk-margin uk-text-center'>
            <button
              className='uk-button uk-button-primary'
              onClick={this.addLoadoutClickHandler}
            >
              Add Loadout
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddLoadout
