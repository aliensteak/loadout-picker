import React, { Component } from "react"

class SqfCode extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isCodePresent: this.props.sqfCode === "No Loadouts Added" ? false : true,
      chevronStyle: {}
    }

    this.downloadClickHandler = this.downloadClickHandler.bind(this)
    this.expandButtonClickHandler = this.expandButtonClickHandler.bind(this)
  }

  downloadClickHandler() {
    const element = document.createElement("a");
    const file = new Blob([this.props.sqfCode],
                {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = this.props.fileName;
    console.log('this.props.fileName: ', this.props.fileName);
    document.body.appendChild(element);
    element.click();
  }

  expandButtonClickHandler() {
    this.setState((prevState) => {
      let style = { transition: 'rotate 0.5s', transitionTimingFunction: 'ease-in-out' }

      style["rotate"] = prevState.chevronStyle.rotate === '180deg' ? '0deg' : '180deg'

      return { chevronStyle: style }
    })
  }

  render() {
    return (
      <div>
        <h5>Sqf Code</h5>
        {!this.state.isCodePresent ? (
          <pre>{this.props.sqfCode}</pre>
        ) : (
          <React.Fragment>
            <div className='uk-flex uk-flex-between'>
              <button
                className='uk-button uk-button-primary'
                onClick={this.downloadClickHandler}
              >
                Download Sqf File
              </button>

              <button
                className='uk-button'
                uk-toggle='target: #sqfCode; animation: uk-animation-slide-bottom'
                onClick={this.expandButtonClickHandler}
              >
                <span style={this.state.chevronStyle} uk-icon='chevron-down'></span>
              </button>
            </div>
            <div className='uk-margin-top' id='sqfCode' hidden>
              <pre>{this.props.sqfCode}</pre>
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default SqfCode
