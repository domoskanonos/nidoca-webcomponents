import {css, customElement, html, property, query} from 'lit-element';
import {FormOutputData, NidocaFormInputElement} from './nidoca-form-input-element';

@customElement('nidoca-form-text')
export class NidocaFormText extends NidocaFormInputElement {
    static styles = css`
    
  `;

    @property()
    name: string = '';

    @property()
    value: any;

    @property()
    label: string = '';

    @property()
    required: boolean = false;

    @property()
    errorText: string | undefined;

    @property()
    infoText: string | undefined;

    @property()
    warningText: string | undefined;

    @property()
    disabled: boolean = false;

    @query('#selectElement')
    inputElement: HTMLInputElement | undefined;

    render() {
        return html`
            <nidoca-inputframe
                    label="${this.label}"
                    .errorText="${this.errorText}"
                    .infoText="${this.infoText}"
                    .warningText="${this.warningText}"
            >
               
               
            </nidoca-inputframe>
        `;
    }

    getOutputData(): FormOutputData {
        let outputValue: any = this.value;
        return <FormOutputData>{
            key: this.name,
            value: outputValue,
        };
    }

    async focused() {
        this.dispatchOutputDataChangeEvent();
    }

    async focusout() {
        this.dispatchOutputDataChangeEvent();
    }

    async change() {
        this.dispatchOutputDataChangeEvent();
    }

    async dispatchOutputDataChangeEvent() {
        if (this.validate()) {
            let customEvent = new CustomEvent('nidoca-form-text-event-change', {
                detail: this.getOutputData(),
            });
            console.debug('dispatch custom event type: %s, detail: %s', customEvent.type, JSON.stringify(customEvent.detail));
            this.dispatchEvent(customEvent);
        }
    }

    public validate(): boolean {
        this.errorText = undefined;
        if (
            this.inputElement != null &&
            !this.inputElement.validity.valid &&
            this.inputElement.validationMessage != this.errorText
        ) {
            this.errorText = this.inputElement.validationMessage;
        }
        return this.errorText == undefined;
    }


}
