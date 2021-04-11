import {css, customElement, html, property, TemplateResult} from 'lit-element';
import {LitElement} from 'lit-element';
import {FlexAlignContent, FlexAlignItems, FlexDirection, FlexJustifyContent, FlexWrap} from '.';
import {BorderProperty} from './nidoca-border';
import {SpacerType, SpacerSize} from './nidoca-spacer';
import {VisibleType} from './nidoca-visible';

@customElement('nidoca-accordion-item')
export class NidocaAccordionItem extends LitElement {
  static styles = css`
    .ACCORDION_HEADER {
      cursor: pointer;
    }
  `;

  @property({type: String})
  header: string = '';

  @property({type: Boolean})
  opened: boolean = false;

  render(): TemplateResult {
    return html`
      <div class="ACCORDION_ITEM">
        <nidoca-border
          .borderProperties="${[
            BorderProperty.BOTTOM,
            BorderProperty.LEFT,
            BorderProperty.RIGHT,
            BorderProperty.FULL_WIDTH,
          ]}"
        >
          <nidoca-flex-container
            class="ACCORDION_HEADER"
            @click="${() => this.toggle()}"
            .flexDirection="${FlexDirection.ROW}"
            .flexWrap="${FlexWrap.WRAP}"
            .flexJustifyContent="${FlexJustifyContent.SPACE_BETWEEN}"
            .flexAlignItems="${FlexAlignItems.CENTER}"
            .flexAlignContent="${FlexAlignContent.CENTER}"
          >
            <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.LEFT]}">
              <nidoca-typography text="${this.header}"></nidoca-typography>
            </nidoca-spacer>
            <nidoca-icon icon="${this.opened ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}"></nidoca-icon>
          </nidoca-flex-container>
          <nidoca-visible visibleType="${this.opened ? VisibleType.NORMAL : VisibleType.HIDE}">
            <slot></slot>
          </nidoca-visible>
        </nidoca-border>
      </div>
    `;
  }

  toggle() {
    console.log('accordion clicked, state=' + this.opened);
    this.opened = Boolean(!this.opened);
    console.log('accordion clicked, after state=' + this.opened);
    this.dispatchEvent(
      new CustomEvent('nidoca-event-accordion-item-clicked', {detail: this, bubbles: true, composed: true})
    );
  }
}
