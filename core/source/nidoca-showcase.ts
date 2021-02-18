import {css, customElement, html, TemplateResult} from 'lit-element';
import {LitElement} from 'lit-element';
import {SpacerSize} from './nidoca-spacer';
import {TextType} from './nidoca-form-text';
import {FormOutputData} from "./nidoca-form-abstract-input-element";

@customElement('nidoca-showcase')
export class NidocaShowcase extends LitElement {
  static styles = css``;

  render(): TemplateResult {
    return html`
      <nidoca-spacer spacerSize="${SpacerSize.NORMAL}">
        <nidoca-form>
          <nidoca-form-combobox
            name="opinionLikeSite"
            label="Wie findest du diese Seite ?"
            value="ok"
            .options="${[
              <FormOutputData>{key: '', value: 'Bitte wählen'},
              <FormOutputData>{key: 'verryGood', value: 'Sehr gut'},
              <FormOutputData>{key: 'ok', value: 'Ein  bisschen gut'},
              <FormOutputData>{key: 'bad', value: 'Schlecht'},
            ]}"
            required="true"
            infoText="Wie findest du den diese tolle Seite"
            warningText="Du weißt ja was du auswählen musst oder ? :-)"
          >
          </nidoca-form-combobox>

          <nidoca-form-combobox
            name="languages"
            label="Welche Sprachen sprichst du ?"
            value="france"
            multiple="true"
            size="5"
            .options="${[
              <FormOutputData>{key: 'german', value: 'Deutsch'},
              <FormOutputData>{key: 'english', value: 'Englisch'},
              <FormOutputData>{key: 'spanish', value: 'Spanisch'},
              <FormOutputData>{key: 'france', value: 'Französisch'},
              <FormOutputData>{key: 'japanese', value: 'Japanisch'},
            ]}"
            required="true"
            infoText="Gib hier die Sprachen ein die du sprichst"
            warningText="Bitte gib nur die ein, die du fließend sprichst"
          >
          </nidoca-form-combobox>

          <nidoca-form-text
            .textType="${TextType.TEXT}"
            name="name"
            label="Wie heißt du ?"
            value=""
            placeholder="Max Mustermann"
            required="true"
            min="1"
            max="100"
            minlength="2"
            minlength="100"
            infoText="Gib hier die Sprachen ein die du sprichst"
            warningText="Bitte gib nur die ein, die du fließend sprichst"
          >
          </nidoca-form-text>
        </nidoca-form>
      </nidoca-spacer>
    `;
  }
}
