import React from "react"

class ColorPicker extends React.Component {
  constructor() {
    super()

    this.state = {
      loadoutCode: "",
      color: ""
    }
  }

  render() {
    return (
      <div className="uk-background-muted uk-margin-small uk-padding-small">
        <label className="uk-text-bold">Code</label>
      </div>
    )
  }
}

export default ColorPicker
