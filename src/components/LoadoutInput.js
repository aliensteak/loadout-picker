import React from "react"
import CodeEditor from "./CodeEditor"
import ColorPicker from "./ColorPicker"

class LoadoutInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.id,
      loadoutCode: "",
      color: ""
    }

    this.loadoutDeleteClickHandler = this.loadoutDeleteClickHandler.bind(this)
  }

  loadoutDeleteClickHandler() {
    // this.props.deleteLoadout(this.state.id)
  }

  render() {
    return (
      <div className="uk-alert">
        <div className="uk-flex-inline uk-width-expand uk-flex-middle" style={{ alignItems: 'stretch' }}>
          <div className="uk-width-2-3">
            <div className="uk-background-default uk-margin-small-right uk-padding-small uk-flex">
              <input className="uk-input" type="text" placeholder="Loadout Name" name="loadoutName" onChange={this.handleChange} />
            </div>
          </div>

          <div className="uk-width-1-3">
            <div className="uk-background-default uk-margin-small-right uk-padding-small uk-flex uk-height-1-1 uk-flex-middle">
              <label className="uk-text-bold">Code</label>

              <CodeEditor />
            </div>
          </div>

          <div className="uk-width-1-3">
            <div className="uk-background-default uk-margin-small-right uk-padding-small uk-flex uk-height-1-1 uk-flex-middle">
              <label className="uk-text-bold">Color</label>

              <ColorPicker />
            </div>
          </div>

          <div className="uk-width-auto uk-margin-auto-left uk-flex uk-flex-center uk-flex-middle">
            <span uk-icon="icon: close; ratio: 1" onClick={this.loadoutDeleteClickHandler} className="close-icon" />
          </div>
        </div>
      </div>
    )
  }
}

export default LoadoutInput
