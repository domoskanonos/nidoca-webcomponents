import {css, customElement, html, property, unsafeCSS, LitElement} from 'lit-element';
import {AbstractInputData} from '../abstract-component/component';
import {ComponentLoader} from '../abstract/component-loader';
import {guard} from 'lit-html/directives/guard';
import {repeat} from 'lit-html/directives/repeat';
import {FlexJustifyContent} from '../flex-container/component';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export class ToolbarAlignment {
    static HORIZONTAL: string = 'horizontalAlignment';
    static VERTICAL: string = 'verticalAlignment';
}

export class ToolbarInputData extends AbstractInputData {
    toolbarInputData: AbstractInputData[] = [];
    flexJustifyContent: string = FlexJustifyContent.FLEX_START;
    toolbarAlignment: string = ToolbarAlignment.HORIZONTAL;
    height: string = 'auto';
    width: string = 'auto';
}

@customElement('component-toolbar')
export class ToolbarComponent extends LitElement {
    static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

    static IDENTIFIER: string = 'ToolbarComponent';

    @property()
    toolbarInputData: AbstractInputData[] = [];

    @property()
    toolbarAlignment: string = ToolbarAlignment.HORIZONTAL;

    @property()
    flexJustifyContent: string = FlexJustifyContent.FLEX_START;

    @property()
    height: string = 'auto';

    @property()
    width: string = 'auto';

    constructor() {
        super();
    }

    render() {
        return html`
         <div
            class="toolbar ${this.toolbarAlignment}"
            style="justify-content:${this.flexJustifyContent};height:${this.height};width:${this.width};"
         >
            <slot></slot>
            ${guard(
            this.toolbarInputData,
            () =>
                html`
                     ${repeat(
                    this.toolbarInputData,
                    (inputData) => html`
                           ${ComponentLoader.getUniqueInstance().createComponentFromInputData(inputData)}
                        `
                )}
                  `
        )}
         </div>
      `;
   }

   getDefaultInputData(): ToolbarInputData {
       return <ToolbarInputData>{};
   }
}
