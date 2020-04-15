import {css, customElement, html, property, unsafeCSS, LitElement} from 'lit-element';
import {BasicService, I18nService} from '@domoskanonos/frontend-basis';
import {BorderType, TypographyType} from '../..';

const componentCSS = require('./component.css');

@customElement('component-tab')
export class TabComponent extends LitElement {
    static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

    static EVENT_CLICK: string = 'component-tab-click';

    @property()
    selected: boolean = false;

    @property()
    text: string = '';

    render() {
        return html`
         <div class="tabStyles">
            <span class="tab" @click="${() => this.tabClicked()}">
               <component-border borderType="${this.selected ? BorderType.BOTTOM_SELECTED : BorderType.BOTTOM}">
                  ${BasicService.getUniqueInstance().isNotBlank(this.text)
            ? html`
                          <component-typography
                             .typographyType="${TypographyType.OVERLINE}"
                             text="${this.text}"
                          ></component-typography>
                       `
            : html``}

                  <slot></slot>
               </component-border>
            </span>
         </div>
      `;
    }

    getOutputData(): TabComponent {
        return this;
    }

    private tabClicked(): void {
        console.log('tab clicked.');
        BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, TabComponent.EVENT_CLICK, this.getOutputData());
    }
}
