import React, { Component } from "react"

export default class Navbar extends Component {
  linkClickHandler() {}

  render() {
    return (
      <div className='uk-navbar-container' uk-navbar>
        <div className='navbar-center'>
          <div className='navbar-center-left'>
            <span
              onClick={() => this.linkClickHandler(-1)}
              className='uk-navbar-item navbar-item'
            >
              About
            </span>
          </div>
          <span
            onClick={() => this.linkClickHandler(0)}
            className='uk-navbar-item uk-logo navbar-item'
          >
            <b>Loadout Picker</b>
          </span>
          <div className='navbar-center-right'>
            <span
              onClick={() => this.linkClickHandler(1)}
              className='uk-navbar-item navbar-item'
            >
              How-To
            </span>
          </div>
        </div>
      </div>
    )
  }
}
