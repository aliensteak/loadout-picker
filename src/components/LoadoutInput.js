import React from "react"
import CodeEditor from "./CodeEditor"
import ColorPicker from "./ColorPicker"

import Autocomplete from "react-autocomplete"

class LoadoutInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.id,
      loadoutName: "",
      loadoutCode: "",
      color: this.props.defaultColor,
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
      ],
    }

    this.setParentState = this.setParentState.bind(this)
    this.loadoutDeleteClickHandler = this.loadoutDeleteClickHandler.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.updateParentInfo = this.updateParentInfo.bind(this)
    this.onSelectClick = this.onSelectClick.bind(this)
  }

  updateParentInfo() {
    // update parent state loadout info
    const object = {
      id: this.state.id,
      name: this.state.loadoutName,
      code: this.state.loadoutCode,
      color: this.state.color,
    }

    this.props.updateLoadout(object)
  }

  setParentState(name, value) {
    this.setState({ [name]: value }, this.updateParentInfo)

    // special case to edit default color value
    if (name === "color") {
      this.props.setParentState("defaultColor", value)
    }
  }

  handleChange(event) {
    this.setState(
      { [event.target.name]: event.target.value },
      this.updateParentInfo
    )
  }

  onSelectClick(value) {
    this.setState({ loadoutName: value }, this.updateParentInfo)
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

  loadoutDeleteClickHandler() {
    this.props.deleteLoadout(this.state.id)
  }

  render() {
    return (
      <div className='uk-card uk-card-default uk-padding-small uk-padding-remove-vertical uk-padding-remove-left uk-margin-medium-bottom'>
        <div
          className='uk-flex-inline uk-width-expand uk-flex-middle'
          style={{ alignItems: "stretch" }}
        >
          <div className='uk-width-2-3'>
            <div className='uk-background-default uk-margin-small-right uk-padding-small uk-flex auto-complete-div-width-fix'>
              {/* <input
                className='uk-input'
                type='text'
                placeholder='Loadout Name'
                name='loadoutName'
                onChange={this.handleChange}
                value={this.state.loadoutName}
              /> */}

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
                value={this.state.loadoutName}
                onChange={this.handleChange}
                onSelect={this.onSelectClick}
              />
            </div>
          </div>

          <div className='uk-width-1-3'>
            <div className='uk-background-default uk-margin-small-right uk-padding-small uk-flex uk-height-1-1 uk-flex-middle'>
              <label className='uk-text-bold'>Code</label>

              <CodeEditor setParentState={this.setParentState} />
            </div>
          </div>

          <div className='uk-width-1-3'>
            <div className='uk-background-default uk-margin-small-right uk-padding-small uk-flex uk-height-1-1 uk-flex-middle'>
              <label className='uk-text-bold'>Color</label>

              <ColorPicker
                defaultColor={this.state.color}
                setParentState={this.setParentState}
              />
            </div>
          </div>

          <div className='uk-width-auto uk-margin-auto-left uk-flex uk-flex-center uk-flex-middle'>
            <span
              uk-icon='icon: close; ratio: 1'
              onClick={this.loadoutDeleteClickHandler}
              className='close-icon'
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LoadoutInput
