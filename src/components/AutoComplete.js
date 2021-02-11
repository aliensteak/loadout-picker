import React, { Component } from 'react'

import Autocomplete from "react-autocomplete"

class AutoComplete extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loadoutName: "",
      loadoutTitles: [
        { label: "Squad Leader" },
        { label: "Team Leader" },
        { label: "Auto Rifleman" },
        { label: "Assistant Auto Rifleman" },
        { label: "Medic" },
        { label: "Rifleman AT" },
        { label: "Rifleman Light AT" },
        { label: "Anti Tank" },
        { label: "Anti Tank Assistant" },
        { label: "Crew Chief" },
        { label: "Crewman" },
      ]
    }

    this.updateParentState = this.updateParentState.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onSelectClick = this.onSelectClick.bind(this)
  }

  renderItemCallback(item, isHighlighted) {
    return (
      <div
        key={Math.random()}
        style={{
          background: isHighlighted ? "lightgray" : "white",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        {item.label}
      </div>
    )
  }

  shouldItemRenderCallback(item, value) {
    const suggestions = item.label
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0
      ? false
      : suggestions.toLowerCase().indexOf(inputValue) !== -1
  }

  updateParentState() {
    this.props.setParentState('loadoutName', this.state.loadoutName)
  }

  onSelectClick(value) {
    this.setState({ loadoutName: value }, this.updateParentState)
  }

  handleChange(event) {
    this.setState({ loadoutName: event.target.value }, this.updateParentState)
  }

  render() {
    return (
      <Autocomplete
        inputProps={{
          className: "uk-input",
          placeholder: "Loadout Name",
          name: "loadoutName",
          type: "text",
        }}
        getItemValue={(item) => item.label}
        items={this.state.loadoutTitles}
        renderItem={this.renderItemCallback}
        shouldItemRender={this.shouldItemRenderCallback}
        value={this.state.loadoutName}
        onChange={this.handleChange}
        onSelect={this.onSelectClick}
      />
    )
  }
}

export default AutoComplete