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
      <div class="uk-card uk-card-default uk-width-expand">
        <div class="uk-card-header">
          <div class="uk-width-expand">
            <h3 class="uk-card-title uk-margin-remove-bottom">Project Name</h3>
          </div>
        </div>
        <div class="uk-card-body">
          <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Project Name" name="projectName" onChange={this.handleChange} />
            <small>This name will be used to create the name of the sqf file</small>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectName