import React from "react"
import Editor from "react-simple-code-editor"
import Prism from "prismjs"
import FloatingBlock from "./FloatingBlock"
import sqfGrammar from './AddSqf'

import "./prism.css"

class CodeEditor extends React.Component {
  constructor() {
    super()

    this.state = {
      code: "#ffffff",
      codeEditorVisible: true,
    }

    this.colorPicked = this.colorPicked.bind(this)
  }


  colorPicked(color, event) {
    this.setState({ selectedColor: color.hex })
  }

  render() {
    return (
      <React.Fragment>
        <div
          className='uk-margin-small-right uk-margin-small-left uk-width-1-1 uk-flex-inline'
          style={{ cursor: "pointer" }}
          onClick={() => this.setState({ codeEditorVisible: true })}
        >
          <div
            style={{
              backgroundColor: this.state.selectedColor,
              height: "22px",
              width: "22px",
              border: "1px solid #191919",
              borderRadius: "5px",
              margin: "1px 3px",
            }}
            className='uk-flex-bottom'
          ></div>
          <div>{this.state.selectedColor}</div>
        </div>

        <FloatingBlock
          visible={this.state.codeEditorVisible}
          isCode={true}
          component={
            <Editor
              value={this.state.code}
              onValueChange={(code) => this.setState({ code })}
              highlight={(code) => Prism.highlight(code, sqfGrammar)}
              padding={10}
              insertSpaces={true}
              style={{
                fontFamily:
                  "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
                fontSize: 16,
              }}
            />
          }
        />
      </React.Fragment>
    )
  }
}

export default CodeEditor
