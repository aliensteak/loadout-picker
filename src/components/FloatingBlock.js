import React from "react"

class FloatingBlock extends React.Component {
  constructor(props) {
    super(props)

    this.closeClickHandler = this.closeClickHandler.bind(this)
  }

  closeClickHandler() {
    this.props.closeEditorSelectorClickHandler()
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "rgb(0,0,0,0.8)",
          display: this.props.visible ? "flex" : "none",
          position: "fixed",
          height: "100vh",
          width: "100vw",
          top: 0,
          left: 0,
          zIndex: "9999999",
        }}
        className='uk-flex uk-flex-center uk-flex-middle uk-flex-column'
        onClick={this.closeClickHandler}
      >
        {this.props.isCode === true ? (
        <div style={{ width: "70%", height: "80%", backgroundColor: "#222", overflow: 'scroll' }}>
          {this.props.component}
        </div>
        ) : (<div>{this.props.component}</div>)}

        <div className="uk-margin uk-text-center">
          <button className="uk-button" onClick={this.closeClickHandler}>Close</button>
        </div>
      </div>
    )
  }
}

export default FloatingBlock
