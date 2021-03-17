import {css, customElement, html, property, query, TemplateResult} from 'lit-element';
import {FormOutputData, NidocaFormAbstractInputElement} from './nidoca-form-abstract-input-element';
import {TypographyType} from './nidoca-typography';
import {FlexContainerProperties} from './nidoca-flex-container';
import {VisibleType} from './nidoca-visible';

@customElement('nidoca-form-switch')
export class NidocaFormSwitch extends NidocaFormAbstractInputElement {
  static styles = css`
    
  `;

  @property()
  name: string = 'name';

  @property()
  assistiveText: string = 'assistiveText';

  @property()
  infoText: string = 'infoText';

  @property()
  errorText: string = 'errorText';

  @property()
  selected: boolean = false;

  render(): TemplateResult {
    return html`
        <nidoca-grid-container
                .gridTemplateRows='${['auto']}'
                .gridTemplateColumns='${['1fr', 'auto']}'
        >
            <nidoca-flex-container
                    .flexContainerProperties='${[FlexContainerProperties.CONTAINER_WIDTH_100]}'
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
                            color='var(--app-color-primary-background)'
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
