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
      <div class="uk-card uk-card-default uk-width-expand uk-margin-bottom">
        <div class="uk-card-header">
          <div class="uk-width-expand">
            <h3 class="uk-card-title uk-margin-remove-bottom">Add Loadouts</h3>
          </div>
        </div>
        <div class="uk-card-body">
          <div class="uk-margin uk-text-center">
            <button class="uk-button uk-button-primary">Add Loadout</button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddLoadout