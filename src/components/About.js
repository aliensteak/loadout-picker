import React from "react"
import loadoutPickerScreenshot from "./about/loadout-selector.jpg"

function About() {
  return (
    <section className='uk-container-large'>
      <div className='uk-flex uk-flex-center uk-margin-top'>
        <div className='uk-inline'>
          <img
            src={loadoutPickerScreenshot}
            alt='context menu in-game screenshot'
            className='uk-margin-auto'
          />
          <div class='uk-overlay uk-position-bottom' style={{ color: "white", backgroundColor: "rgba(0,0,0,0.5)" }}>
            Loadouts appear on objects and can be selected via the context-menu
          </div>
        </div>
      </div>

      <div className="uk-card uk-card-default uk-width-expand uk-margin-top uk-margin-bottom" >
        <div className="uk-card-body">
          <div>
            <h4>About</h4>
            <hr/>
            <p>
              Loadout Picker is a tool allows you to compile your exported BI Arsenal loadout into an auto-generated sqf code for a <code>.sqf</code> file and <code>init</code> to let a player use ArmA's context-menu/scroll-wheel on any object and pick a pre-made loadout.
            </p>
          </div>
          <br/>
          <div>
            <h4>Quirks</h4>
            <hr/>
            <p>
              This tool lets you pick a faction when creating a script. It is useful when you have pre-made kits from multiple factions and want to play against opposing factions. The quirk is that it creates a new squad for each player who uses this script. So keep in mind that whenever a script generated from this tool is used, players will need to rejoin the squad or group.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
