import React from "react"
import { PhotoshopPicker } from "react-color"
import FloatingBlock from "./FloatingBlock"

class ColorPicker extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedColor: "#ffffff",
      colorPickerVisible: false,
    }

    this.colorPicked = this.colorPicked.bind(this)
  }

  colorPicked(color, event) {
    this.setState({ selectedColor: color.hex })
  }

  render() {
    return (
      <React.Fragment>
        <div
          className='uk-margin-small-right uk-margin-small-left uk-width-1-1 uk-flex-inline'
          style={{ cursor: "pointer" }}
          onClick={() => this.setState({ colorPickerVisible: true })}
        >
          <div
            style={{
              backgroundColor: this.state.selectedColor,
              height: "22px",
              width: "22px",
              border: "1px solid #191919",
              borderRadius: '5px',
              margin: "1px 3px",
            }}
            className='uk-flex-bottom'
          ></div>
          <div>{this.state.selectedColor}</div>
        </div>

        <FloatingBlock
          visible={this.state.colorPickerVisible}
          component={
            <PhotoshopPicker
              color={this.state.selectedColor}
              onAccept={() => this.setState({ colorPickerVisible: false })}
              onCancel={() => this.setState({ colorPickerVisible: false })}
              onChange={this.colorPicked}
            />
          }
        />
      </React.Fragment>
    )
  }
}

export default ColorPicker
