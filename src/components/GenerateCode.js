import React, { Component } from "react"
import SqfCode from "./SqfCode"

class GenerateCode extends Component {
  constructor(props) {
    super(props)

    this.state = {
      codeGenerated: false,
      sqfCode: "No Data Found",
      initCode: "No Data Found",
      fileName: "",
    }

    this.generateCodeClickHandler = this.generateCodeClickHandler.bind(this)
  }

  /**
   * Takes in a block of code and adds two tabs in front of
   * all the lines except for the first one.
   *
   * @param {String} string
   */
  addTabs(string) {
    if (string.indexOf("\r") === -1)
      string = string.replaceAll(";\n", ";\n\t\t")
    else string = string.replaceAll(";\r\n", ";\n\t\t")

    return string
  }

  /**
   * Takes BI Arsenal code as input and picks out essential snippets
   * and makes it useable in a loadout picker
   *
   * @param {String} loadoutCode
   * @param {String} roleName
   */
  getProcessedCode(loadoutCode, roleName) {
    // split code based on blocks of code
    let loadout = loadoutCode.split("\n\n")

    // if code is copied from google docs/ words then do this
    if (loadout.length === 1) loadout = loadoutCode.split("\r\n\r\n")

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
      '\t\tcomment "Loadout for ' +
      roleName +
      " created by " +
      loadoutAuthor +
      '";\n' +
      '\t\tcomment "Note: This is a machine generated loadout file";\n\n'
    loadoutContainer += "\t\t" + block1 + "\n\n"
    loadoutContainer += "\t\t" + block2 + "\n\n"
    loadoutContainer += "\t\t" + block3 + "\n\n"
    loadoutContainer += "\t\t" + block4 + "\n\n"
    loadoutContainer += "\t\t" + block5 + "\n\n"

    loadoutContainer += '\t\thintSilent "Loadout Selected - Squad/Teamlead";\n'

    return loadoutContainer
  }

  /**
   * Generates code for loadoutSqf file
   *
   * @param {String} data
   */
  generateSqfCode(data) {
    let loadoutSqfCode = ""

    // if no loadouts are present, then skip function
    if (Object.keys(data.loadouts).length === 0) return "No Loadouts Added"

    // if side is selected, then add code to switch sides
    if (data.side) {
      let faction
      if (data.side === "West") faction = "west"
      else if (data.side === "East") faction = "east"
      else if (data.side === "Independent") faction = "resistance"

      loadoutSqfCode += 'comment "Change player side to ' + data.side + '";\n'
      loadoutSqfCode += "private _player = player;\n"
      loadoutSqfCode += "[player] join createGroup " + faction + ";\n"
      loadoutSqfCode += "selectNoPlayer;\n"
      loadoutSqfCode += "selectPlayer _player;\n\n"
    }

    // add code for switch cases
    loadoutSqfCode += 'comment "Select loadout";\n'
    loadoutSqfCode += "_loadout = (_this select 3) select 0;\n"
    loadoutSqfCode += "switch (_loadout) do {\n"

    // add case for each loadout
    let caseIndex = 0
    for (const loadoutId in data.loadouts) {
      const loadout = data.loadouts[loadoutId].code
      const roleName = data.loadouts[loadoutId].name

      loadoutSqfCode += "\tcase " + caseIndex + ": {\n"
      loadoutSqfCode += this.getProcessedCode(loadout, roleName)
      loadoutSqfCode += "\t};\n\n"

      caseIndex++
    }

    // close switch case
    loadoutSqfCode += "};"

    return loadoutSqfCode
  }

  /**
   * Generates code for in-game init property
   *
   * @param {String} data
   */
  generateInitCode(data) {
    let initCode = ""

    // if no loadouts are present, then skip function
    if (Object.keys(data.loadouts).length === 0) return "No Loadouts Added"

    const fileName = this.state.fileName

    // add action for each loadout
    let caseIndex = 0
    for (const loadoutId in data.loadouts) {
      const roleColor = data.loadouts[loadoutId].color
      const roleName = data.loadouts[loadoutId].name

      initCode += `this addAction ["<t color='${roleColor}'>${roleName}</t>", "${fileName}", [${caseIndex}], 6, false, true, "", ""];\n`

      caseIndex++
    }

    return initCode
  }

  generateCodeClickHandler() {
    const data = this.props.projectData

    // generate file name and save it
    let fileName = this.props.projectData.projectName
    fileName =
      fileName === ""
        ? ""
        : fileName
            .split(" ")
            .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
            .join(" ")
    fileName = "loadout" + fileName.replaceAll(" ", "") + ".sqf"

    this.setState({ fileName }, () => {
      this.setState({
        codeGenerated: true,
        sqfCode: this.generateSqfCode(data),
        initCode: this.generateInitCode(data)
      })
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

          {this.state.codeGenerated ? (
            <div className='uk-margin-bottom uk-animation-slide-top-medium'>
              <div>
                <h5>Init Code</h5>
                <pre>{this.state.initCode}</pre>
              </div>

              <SqfCode sqfCode={this.state.sqfCode} fileName={this.state.fileName} />
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default GenerateCode
