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
  constructor(props) {
    super(props)

    this.state = {
      selectedTab: 1,
      containerStyles: {
        height: 0,
        position: "relative",
        left: -window.innerWidth
      }
    }

    this.updateScreenSize = this.updateScreenSize.bind(this)
    this.selectTab = this.selectTab.bind(this)
    window.addEventListener('resize', this.updateScreenSize)
  }

  componentDidMount() {
    this.updateScreenSize();
  }

  updateScreenSize() {
    this.setState((prevState) => {
      return { containerStyles: { ...prevState.containerStyles, height: (window.innerHeight - 80) + "px" }}
    })
  }

  selectTab(selectedTab) {
    this.setState((prevState) => {
      return {
        selectedTab: selectedTab,
        containerStyles: { ...prevState.containerStyles, left: (-100*selectedTab) + "vw" }
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar selectTab={this.selectTab}/>

        <div className="sub-page-container" style={this.state.containerStyles}>
          <div className="sub-page">
            <About />
          </div>
          <div className="sub-page">
            <LoadoutPicker />
          </div>
          <div className="sub-page">
            <HowTo />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
