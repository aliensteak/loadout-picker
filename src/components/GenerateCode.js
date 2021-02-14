import React, { Component } from "react"

import sampleLoadoutUrl from "./sampleSqf.sqf"
class GenerateCode extends Component {
  constructor(props) {
    super(props)

    this.state = {
      code: "No Data Found",
    }

    this.generateCodeClickHandler = this.generateCodeClickHandler.bind(this)
  }

  addTabs(string) {
    if (string.indexOf("\r") === -1)
      string = string.replaceAll(";\n", ";\n\t\t")
    else string = string.replaceAll(";\r\n", ";\n\t\t")

    return string
  }

  generateCodeClickHandler() {
    const data = this.props.projectData
    console.log("data: ", data)

    fetch(sampleLoadoutUrl)
      .then((sampleLoadout) => sampleLoadout.text())
      .then((text) => {
        // split code based on blocks of code
        let loadout = text.split("\n\n")

        // if code is copied from google docs/ words then do this
        if (loadout.length === 1) loadout = text.split("\r\n\r\n")

        // index 0; loadout author comment
        const block0 = loadout[0]
        const loadoutAuthor = encodeURI(
          block0
            .replace(/(comment "Exported from Arsenal by )/g, "")
            .replace(/(";)/g, "")
        )

        // index 1; unit local; ignore this block

        // index 2; remove all gear
        const block1 = this.addTabs(loadout[2]).replaceAll("this", "player")

        // index 3; add weapons
        const block2 = this.addTabs(loadout[3]).replaceAll("this", "player")

        // index 4; add containers
        const block3 = this.addTabs(loadout[4]).replaceAll("this", "player")

        // index 5; add items in containers
        const block4 = this.addTabs(loadout[5]).replaceAll("this", "player")

        // index 6; add items
        const block5 = this.addTabs(loadout[6]).replaceAll("this", "player")

        // index 7; set identity; ignore this block

        // add all blocks to a loadout string
        let loadoutContainer =
          '\t\tcomment "Loadout for {RoleName} created by ' +
          loadoutAuthor +
          '";\n' +
          '\t\tcomment "Note: This is a machine generated loadout file";\n\n'
        loadoutContainer += "\t\t" + block1 + "\n\n"
        loadoutContainer += "\t\t" + block2 + "\n\n"
        loadoutContainer += "\t\t" + block3 + "\n\n"
        loadoutContainer += "\t\t" + block4 + "\n\n"
        loadoutContainer += "\t\t" + block5 + "\n\n"

        loadoutContainer +=
          '\t\thintSilent "Loadout Selected - Squad/Teamlead";'

        this.setState({ code: JSON.stringify(loadout, undefined, 2) })
        this.setState({ code: loadoutContainer })
      })
  }

  render() {
    return (
      <div className='uk-card uk-card-default uk-width-expand uk-margin-bottom'>
        <div className='uk-card-header'>
          <div className='uk-width-expand'>
            <h3 className='uk-card-title uk-margin-remove-bottom'>
              Generate Loadouts
            </h3>
          </div>
        </div>
        <div className='uk-card-body'>
          <div className='uk-margin-bottom uk-text-center'>
            <button
              className='uk-button uk-button-danger'
              onClick={this.generateCodeClickHandler}
            >
              Generate Code
            </button>
          </div>

          <div className='uk-margin-bottom'>
            <pre
            // style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
            >
              {this.state.code}
            </pre>
          </div>
        </div>
      </div>
    )
  }
}

export default GenerateCode
