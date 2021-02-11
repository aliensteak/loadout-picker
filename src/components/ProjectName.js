import React from 'react'

class ProjectName extends React.Component {
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
            <h3 className="uk-card-title uk-margin-remove-bottom">Project Name</h3>
          </div>
        </div>
        <div className="uk-card-body uk-width-1-1 uk-flex-inline">
          <div className="uk-margin-right uk-width-1-1">
            <input className="uk-input" type="text" placeholder="Project Name" name="projectName" onChange={this.handleChange} />
            <small>This name will be used to create the name of the sqf file</small>
          </div>
          <div className="uk-width-1-6">
            <select className="uk-select" name="side" onChange={this.handleChange} defaultValue="Faction">
              <option disabled={true}>Faction</option>
              <option>West</option>
              <option>East</option>
              <option>Independent</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectName