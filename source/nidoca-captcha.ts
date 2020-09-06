import {css, customElement, html, LitElement, property, query} from 'lit-element';
import {BasicService, I18nService} from '@domoskanonos/frontend-basis/lib';
import {InputfieldMode, InputfieldType, NidocaInputfield} from "./nidoca-inputfield";

@customElement('nidoca-captcha-component')
export class NidocaCaptchaComponents extends LitElement {
    static styles = css``;

    @property()
    numberOne: number = BasicService.getUniqueInstance().getRandomNumber(1, 20);

    @property()
    numberTwo: number = BasicService.getUniqueInstance().getRandomNumber(1, 20);

    @property()
    errorText: string = '';

    @query('#inputfield')
    inputfield: NidocaInputfield | undefined;

    @property()
    render() {
        return html`
      <nidoca-inputfield
        id="inputfield"
        .inputfieldMode="${InputfieldMode.FILLED}"
        .inputfieldType="${InputfieldType.NUMBER}"
        required="true"
        errorText="${this.errorText}"
        @nidoca-event-inputfield-focus-out="${() => this.validate()}"
        label="${I18nService.getUniqueInstance()
            .getValue('nidoca-captcha-label')
            .concat(String(this.numberOne))
            .concat(' + ')
            .concat(String(this.numberTwo))
            .concat(' = ?')}"
        name="captcha"
        leadingIcon="verified"
        value=""
      ></nidoca-inputfield>
    `;
    }

    public isValid(): boolean {
        return this.numberOne + this.numberTwo == this.inputfield?.getOutputData().value;
    }

    private validate() {
        if (this.isValid()) this.errorText = '';
        else this.errorText = I18nService.getUniqueInstance().getValue('nidoca-captcha-wrong-value');
    }
}
