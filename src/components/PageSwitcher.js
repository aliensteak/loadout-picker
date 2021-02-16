import React, { Component } from "react"

import Navbar from './Navbar'
import LoadoutPicker from './LoadoutPicker';

const About = () => {
  return (
    <div className="uk-text-center">
      <h3>WIP - About Page</h3>
    </div>
  )
}

const HowTo = () => {
  return (
    <div className="uk-text-center">
      <h3>WIP - How-To Page</h3>
    </div>
  )
}

export default class PageSwitcher extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <LoadoutPicker />
      </React.Fragment>
    )
  }
}
