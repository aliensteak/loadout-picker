import React from "react"

class LoadoutInput extends React.Component {
  constructor() {
    super()

    this.state = {
      loadoutCode: "",
      color: ""
    }
  }

  render() {
    return (
      <div className="uk-alert">
        <div className="uk-flex-inline uk-width-expand">
          <div className="uk-width-2-3">
            <div className="uk-background-default uk-margin-small-right uk-padding-small uk-flex">
              <label className="uk-text-bold">Code</label>
            </div>
          </div>

          <div className="uk-width-1-3">
            <div className="uk-background-default uk-margin-small-right uk-padding-small uk-flex">
              <label className="uk-text-bold">Color</label>
            </div>
          </div>

          <div className="uk-width-auto uk-margin-auto-left uk-flex uk-flex-center uk-flex-middle">
            <span uk-icon="icon: close; ratio: 1"></span>
          </div>
        </div>
      </div>
    )
  }
}

export default LoadoutInput
