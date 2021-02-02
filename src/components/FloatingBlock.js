import React from "react"

class FloatingBlock extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "rgb(0,0,0,0.5)",
          display: this.props.visible ? "flex" : "none",
          position: 'fixed',
          height: '100vh',
          width: '100vw',
          top: 0,
          left: 0,
        }}
        className="uk-flex uk-flex-center uk-flex-middle"
      >
        <div>{this.props.component}</div>
      </div>
    )
  }
}

export default FloatingBlock
