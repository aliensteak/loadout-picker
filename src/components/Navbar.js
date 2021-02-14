import React, { Component } from "react"

export default class Navbar extends Component {
  render() {
    return (
      <nav className='uk-navbar-container' uk-navbar>
        <div className='uk-navbar-left'>
          <ul className='uk-navbar-nav'>
            <li>
              <a href='/loadout-picker' className="uk-navbar-item uk-active"><b>Loadout Picker</b></a>
            </li>
            <li>
              <a href='/loadout-picker/about' className="uk-navbar-item">About</a>
            </li>
            <li>
              <a href='/loadout-picker/how-to' className="uk-navbar-item">How-To</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
