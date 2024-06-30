import React, { Component } from "react"
import SqfCode from "./generate-code/SqfCode"

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
    if (! string) return ""

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

    const blacklist = ["[!] UNIT MUST BE LOCAL [!]", "Set identity"]

    loadout = loadout.map((item) => {
      let loc = item.split("\n")

      // if code is copied from google docs/ words then do this
      if (loc.length === 1) loc = item.split("\r\n")

      // clean comment
      let blockDescriptor = loc[0].replace("comment \"", '')
      blockDescriptor = blockDescriptor.replace("\";", "")

      if (blacklist.includes(blockDescriptor)) {
        return undefined
      }

      return item
    }).filter(item => item)

    const authorComment = loadout.shift() // index 0; loadout author comment
    const newAuthorComment = encodeURI(
      authorComment
        .replace(/(comment "Exported from Arsenal by )/g, "")
        .replace(/(";)/g, "")
    )

    let loadoutContainer =
      '\t\tcomment "Loadout for ' +
      roleName +
      " created by " +
      newAuthorComment +
      '";\n' +
      '\t\tcomment "Note: This is a machine generated loadout file";\n\n'

    loadout.forEach((block) => {
      loadoutContainer += "\t\t" + this.addTabs(block).replaceAll("this", "player") + "\n\n"
    })

    loadoutContainer += '\t\thintSilent "Loadout Selected - ' + roleName + '";\n'

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
      loadoutSqfCode += "if (side _player != " + faction + ") then {\n"
      loadoutSqfCode += "\t[player] join createGroup " + faction + ";\n"
      loadoutSqfCode += "\tselectNoPlayer;\n"
      loadoutSqfCode += "\tselectPlayer _player;\n\n"
      loadoutSqfCode += "};\n"
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

      initCode += `this addAction ["<t color='${roleColor}'>${roleName}</t>", "${fileName}", [${caseIndex}], 6, false, true, "", "_this distance _target < 5"];\n`

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
