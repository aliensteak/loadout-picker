import React from "react"

class FloatingBlock extends React.Component {
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
        className='uk-flex uk-flex-center uk-flex-middle'
      >
        {this.props.isCode === true ? (
        <div style={{ width: "70%", height: "80%", backgroundColor: "#222", overflow: 'scroll' }}>
          {this.props.component}
        </div>
        ) : (<div>{this.props.component}</div>)}
      </div>
    )
  }
}

export default FloatingBlock
