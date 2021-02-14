import React from "react"
import AutoComplete from "./loadout-inputs/AutoComplete"
import CodeEditor from "./loadout-inputs/CodeEditor"
import ColorPicker from "./loadout-inputs/ColorPicker"

class LoadoutInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.id,
      loadoutName: "",
      loadoutCode: "",
      color: this.props.defaultColor,
    }

    this.setParentState = this.setParentState.bind(this)
    this.loadoutDeleteClickHandler = this.loadoutDeleteClickHandler.bind(this)
    this.updateParentInfo = this.updateParentInfo.bind(this)
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
              <AutoComplete setParentState={this.setParentState} />
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
