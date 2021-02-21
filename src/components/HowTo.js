import React from "react"
import initScreenshot from "./how-to/init-screenshot.jpg"
import rootDirectoryScreenshot from "./how-to/root-directory.jpg"

export default function HowTo() {
  return (
    <section className='uk-container-large'>
      <div className='uk-card uk-card-default uk-width-expand uk-margin-top uk-margin-bottom'>
        <div className='uk-card-header'>
          <div className='uk-width-expand'>
            <h3 className='uk-card-title uk-margin-remove-bottom'>How To</h3>
          </div>
        </div>
        <div className='uk-card-body'>
          <div>
            <h4>Step 1</h4>
            <hr />
            <p>
              Select a name for your project. This name is trivial as it is only
              used to create the name of the <code>.sqf</code> file.
              <br />
              <br />
              Strings are not escaped ( ͡° ͜ʖ ͡°).
            </p>
          </div>
          <br />
          <div>
            <h4>Step 2</h4>
            <hr />
            <p>
              Select the faction of your loadout. If a faction is selected, then
              the loadout code will include a snippet to change the faction of
              the player who uses this script. If no faction is selected, then
              player faction will remain untouched when using the script.
            </p>
          </div>
          <br />
          <div>
            <h4>Step 3</h4>
            <hr />
            <p>Click "Add Loadout" button to add a loadout entry.</p>
            <p>
              First, set a name for your loadout. This field has an
              auto-complete for the most common loadouts. Note that you will
              have to press <code>Enter</code> to fill in the auto-complete
              value as <code>Tab</code> doesn't work and I couldn't be bothered
              to add that in ¯\_(ツ)_/¯.
            </p>
            <p>
              Second, go to ArmA 3 BI virtual arsenal
              <div
                style={{
                  display: "inline",
                  width: "auto",
                  margin: "0 5px",
                  color: "#39f",
                  cursor: "help",
                }}
                uk-tooltip='Workaround - You can open your ACE arsenal loadouts in BI arsenal loadouts and export it'
              >
                (Note ACE arsenal will not work)
              </div>
              and click <code>Export</code>. Now come back to this tool and
              under Code, click on "Edit" and paste in (<code>Ctrl+V</code>) the
              loadout and close the dialog box.
            </p>
            <p>
              Third, select a color or leave it default. This color will be used
              for the context-menu items. Example, in the screenshot in the
              "About" section, each entry has a color code of{" "}
              <code>#A60000</code>. Note that this color will remain the same
              for all subsequent loadouts you add via "Add Loadout" button.
            </p>
          </div>
          <br />
          <div>
            <h4>Step 4</h4>
            <hr />
            <p>
              Copy the code from "Init Code" section and paste it in the init
              field of the object you want your loadout to be accessed from.
            </p>
            <img
              src={initScreenshot}
              alt='in-game screenshot of where to paste init code'
              className='uk-margin-auto'
            />
            <p>
              Download the <code>.sqf</code> file from the "Sqf Code" section
              and paste it in the root folder of you mission directory located
              at -
              <pre>
                <code>
                  This PC\Documents\Arma 3 - Other Profiles\{"{profile name}"}
                  \mpmissions\{"{mission name}"}.{"{map name}"}
                </code>
              </pre>
            </p>
            <div className='uk-flex uk-flex-center'>
              <img
                src={rootDirectoryScreenshot}
                alt='screenshot of where to save init code file'
                className='uk-margin-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
