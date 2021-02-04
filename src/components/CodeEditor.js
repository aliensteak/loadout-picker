import React from "react"
import Editor from "react-simple-code-editor"
import Prism from "prismjs"
import FloatingBlock from "./FloatingBlock"
import sqfGrammar from './AddSqf'

import "./prism.css"

class CodeEditor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      code: "",
      codeEditorVisible: false,
    }

    this.colorPicked = this.colorPicked.bind(this)
    this.closeEditorSelectorClickHandler = this.closeEditorSelectorClickHandler.bind(this)
  }

  closeEditorSelectorClickHandler() {
    this.setState({ codeEditorVisible: false })
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
          <button className="uk-button" onClick={() => this.setState({ codeEditorVisible: true })}>Edit</button>
        </div>

        <FloatingBlock
          visible={this.state.codeEditorVisible}
          isCode={true}
          closeEditorSelectorClickHandler={this.closeEditorSelectorClickHandler}
          component={
            <Editor
              value={this.state.code}
              onValueChange={(code) => this.setState({ code })}
              highlight={(code) => Prism.highlight(code, sqfGrammar)}
              padding={10}
              insertSpaces={true}
              textareaClassName="code-editor-text-area"
              preClassName="code-editor-pre-area"
              style={{
                fontFamily:
                  "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
                fontSize: 16,
                height: '100%'
              }}
            />
          }
        />
      </React.Fragment>
    )
  }
}

export default CodeEditor
