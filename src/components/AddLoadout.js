import React from 'react'

class AddLoadout extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.setParentState(event.target.name, event.target.value)
  }

  render() {
    return (
      <div className="uk-card uk-card-default uk-width-expand uk-margin-bottom">
        <div className="uk-card-header">
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom">Add Loadouts</h3>
          </div>
        </div>
        <div className="uk-card-body">
          <div className="uk-margin uk-text-center">
            <button className="uk-button uk-button-primary">Add Loadout</button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddLoadout