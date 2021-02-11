import {css, customElement, html} from 'lit-element';
import {LitElement} from 'lit-element';
import {InputfieldType, NidocaInputfield} from './nidoca-inputfield';
import {NidocaFormCombobox} from './nidoca-form-combobox';
import {SpacerSize} from './nidoca-spacer';
import {KeyValuePair} from '@domoskanonos/frontend-basis';

@customElement('nidoca-showcase')
export class NidocaShowcase extends LitElement {
  static styles = css``;

  render() {
    return html`
      <nidoca-spacer spacerSize="${SpacerSize.NORMAL}">
        <nidoca-form>
          <nidoca-form-combobox
            name="kleidung"
            label="Kleidungsstücke"
            value="${InputfieldType.TEXTAREA}"
            .options="${[
              <KeyValuePair>{key: 'hose', value: 'Eine tolle Hose'},
              <KeyValuePair>{key: 'pulli', value: 'Eine toller Pullover'},
            ]}"
            required="true"
            infoText="Welches Kleidungsstück solltest du wohl anziehen, bevor du zur Arbeit gehst ?"
            warningText="Bitte denke daran dir eine Hose anzuziehen, bevor du zur Arbeit gehst"
          >
          </nidoca-form-combobox>
        </nidoca-form>
      </nidoca-spacer>
    `;
  }
}
