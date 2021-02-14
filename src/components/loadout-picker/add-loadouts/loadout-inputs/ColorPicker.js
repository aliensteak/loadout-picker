import React from "react"
import { PhotoshopPicker } from "react-color"
import FloatingBlock from "./color-picker/FloatingBlock"

class ColorPicker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      prevColor: this.props.defaultColor,
      selectedColor: this.props.defaultColor,
      colorPickerVisible: false,
    }

    this.colorPicked = this.colorPicked.bind(this)
    this.cancelClickHandler = this.cancelClickHandler.bind(this)
    this.closeEditorSelectorClickHandler = this.closeEditorSelectorClickHandler.bind(this)
  }

  closeEditorSelectorClickHandler() {
    this.setState({ colorPickerVisible: false })
  }

  colorPicked(color, event) {
    this.setState({ selectedColor: color.hex })

    this.props.setParentState('color', color.hex)
  }

  cancelClickHandler() {
    this.setState((prevState) => {
      return {
        colorPickerVisible: false,
        selectedColor: prevState.prevColor
      }
    })
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
          closeEditorSelectorClickHandler={this.closeEditorSelectorClickHandler}
          component={
            <PhotoshopPicker
              color={this.state.selectedColor}
              onAccept={() => this.setState({ colorPickerVisible: false, prevColor: this.state.selectedColor })}
              onCancel={this.cancelClickHandler}
              onChange={this.colorPicked}
            />
          }
        />
      </React.Fragment>
    )
  }
}

export default ColorPicker
