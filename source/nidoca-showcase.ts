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
                    name="opinionLikeSite"
                    label="Wie findest du diese Seite ?"
                    value="${InputfieldType.TEXTAREA}"
                    .options="${[
                        <KeyValuePair>{key: null, value: 'Bitte wählen'},
                        <KeyValuePair>{key: 'verryGood', value: 'Sehr gut'},
                        <KeyValuePair>{key: 'ok', value: 'Ein  bisschen gut'},
                        <KeyValuePair>{key: 'bad', value: 'Schlecht'},
                    ]}"
                    required="true"
                    infoText="Wie findest du den diese tolle Seite"
                    warningText="Du weißt ja was du auswählen musst oder ? :-)"
            >
            </nidoca-form-combobox>


            <nidoca-form-combobox
                    name="languages"
                    label="Welche Sprachen sprichst du ?"
                    value="${InputfieldType.TEXTAREA}"
                    multiple="true"
                    size="5"
                    .options="${[
                        <KeyValuePair>{key: 'german', value: 'Deutsch'},
                        <KeyValuePair>{key: 'english', value: 'Englisch'},
                        <KeyValuePair>{key: 'spanish', value: 'Spanisch'},
                        <KeyValuePair>{key: 'france', value: 'Französisch'},
                        <KeyValuePair>{key: 'japanese', value: 'Japanisch'},
                    ]}"
                    required="true"
                    infoText="Gib hier die Sprachen ein die du sprichst"
                    warningText="Bitte gib nur die ein, die du fließend sprichst"
            >
            </nidoca-form-combobox>

        </nidoca-form>
      </nidoca-spacer>
    `;
  }
}
