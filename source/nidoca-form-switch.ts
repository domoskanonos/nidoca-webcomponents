import {css, customElement, html, property, query, TemplateResult} from 'lit-element';
import {FormOutputData, NidocaFormAbstractInputElement} from './nidoca-form-abstract-input-element';
import {TypographyType} from './nidoca-typography';
import {VisibleType} from './nidoca-visible';

@customElement('nidoca-form-switch')
export class NidocaFormSwitch extends NidocaFormAbstractInputElement {
  static styles = css`
    
  `;

  @property({type: String})
  name: string = '';

  @property({type: String})
  assistiveText: string = '';

  @property({type: String})
  infoText: string = '';

  @property({type: String})
  errorText: string = '';

  @property({type: Boolean})
  selected: boolean = false;

  render(): TemplateResult {
    return html`
        <nidoca-grid-container
                .gridTemplateRows='${['auto']}'
                .gridTemplateColumns='${['1fr', 'auto']}'
        >
            <nidoca-flex-container
                    flexItemBasisValue='100%'
            >
                <nidoca-typography
                        .typographyType='${TypographyType.SUBTITLE1}'
                        text='${this.infoText}'
                >
                    <slot></slot
                    >
                </nidoca-typography>
                <nidoca-visible
                        visibleType='${this.assistiveText.length > 0
                                ? VisibleType.NORMAL
                                : VisibleType.HIDE}'
                >
                    <nidoca-typography
                            .typographyType='${TypographyType.SUBTITLE2}'
                            text='${this.assistiveText}'
                    ></nidoca-typography>
                </nidoca-visible>
            </nidoca-flex-container>
            <componetn-container>
                <nidoca-visible
                        visibleType='${this.selected ? VisibleType.HIDE : VisibleType.NORMAL}'
                >
                    <nidoca-icon
                            @nidoca-event-icon-clicked='${() => {
                                this.switchSelected();
                            }}'
                            icon='toggle_off'
                            .clickable='${true}'
                    ></nidoca-icon>
                </nidoca-visible>
                <nidoca-visible
                        visibleType='${this.selected ? VisibleType.NORMAL : VisibleType.HIDE}'
                >
                    <nidoca-icon
                            color='var(--mdc-theme-primary)'
                            @nidoca-event-icon-clicked='${() => {
                                this.switchSelected();
                            }}'
                            icon='toggle_on'
                            .clickable='${true}'
                    ></nidoca-icon>
                </nidoca-visible>
            </componetn-container>
        </nidoca-grid-container>

    `;
  }

  getOutputData(): FormOutputData {
    return <FormOutputData>{
      key: this.name,
      value: this.selected,
    };
  }

  validate(): boolean {
    return true;
  }

  private switchSelected() {
    this.selected = !Boolean(this.selected);
    if (this.validate()) {
      let customEvent = new CustomEvent('nidoca-form-switch-event-change', {
        detail: this.getOutputData(),
        bubbles: true,
        composed: true,
      });
      console.debug('dispatch custom event type: %s, detail: %s', customEvent.type, JSON.stringify(customEvent.detail));
      this.dispatchEvent(customEvent);
    }
  }


}
