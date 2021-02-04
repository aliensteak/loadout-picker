import React from "react"

import LoadoutInput from "./LoadoutInput"

class AddLoadout extends React.Component {
  constructor() {
    super()

    const id = new Date().getTime()
    this.deleteLoadout = this.deleteLoadout.bind(this)

    this.state = {
      id: 0,
      loadouts: [
        <LoadoutInput key={id} id={id} deleteLoadout={this.deleteLoadout} />,
      ],
    }

    this.handleChange = this.handleChange.bind(this)
    this.addLoadoutClickHandler = this.addLoadoutClickHandler.bind(this)
  }

  handleChange(event) {
    this.props.setParentState(event.target.name, event.target.value)
  }

  deleteLoadout(id) {
    this.setState((prevState) => {
      const loadouts = prevState.loadouts
        .filter((loadout) => parseInt(loadout.key) !== id)
        .map((loadout) => loadout)

      return { loadouts: loadouts }
    })
  }

  addLoadoutClickHandler() {
    this.setState((prevState) => {
      const id = new Date().getTime()
      return {
        loadouts: [
          ...prevState.loadouts,
          <LoadoutInput key={id} id={id} deleteLoadout={this.deleteLoadout} />,
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
          <div>{this.state.loadouts}</div>

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
