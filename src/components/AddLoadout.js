import React from "react"

import LoadoutInput from "./LoadoutInput"

class AddLoadout extends React.Component {
  constructor() {
    super()

    this.state = {
      defaultColor: "#ffffff",
      loadoutsJSX: [],
    }

    this.handleChange = this.handleChange.bind(this)
    this.addLoadoutClickHandler = this.addLoadoutClickHandler.bind(this)
    this.setParentState = this.setParentState.bind(this)
    this.deleteLoadout = this.deleteLoadout.bind(this)
  }

  handleChange(event) {
    this.props.setParentState(event.target.name, event.target.value)
  }

  setParentState(name, value) {
    this.setState({ [name]: value })
  }

  deleteLoadout(id) {
    this.setState((prevState) => {
      const loadoutsJSX = prevState.loadoutsJSX
        .filter((loadoutsJSX) => parseInt(loadoutsJSX.key) !== id)
        .map((loadoutsJSX) => loadoutsJSX)

      return { loadoutsJSX: loadoutsJSX }
    })
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
            <div className="uk-text-center">
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
