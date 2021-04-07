import {css, customElement, html, LitElement, TemplateResult, property} from 'lit-element';
import {FlexAlignContent, FlexAlignItems, FlexDirection, FlexJustifyContent, FlexWrap} from '.';

@customElement('nidoca-top-app-bar')
export class NidocaTopAppBar extends LitElement {
  static styles = css`

    slot {
      display: block;  
    }

    .left {
      flex-basis:33.33%;
      background-color:green;
    }
    .center {
      flex-basis:33.33%;
      background-color:blue;
    }

    .right {
      flex-basis:33.33%;
      background-color:yellow;
    }

    .prominent {
      flex-basis:100%;
      background-color:black;
      flex-grow:3;
    }
  `;

  @property({type: Boolean})
  prominent: boolean = false;

  render(): TemplateResult {
    return html`
      <nidoca-flex-container
        .devices="${[]}"
        .flexDirection="${FlexDirection.ROW}"
        .flexWrap="${FlexWrap.WRAP}"
        .flexJustifyContent="${FlexJustifyContent.SPACE_EVENLY}"
        .flexAlignItems="${FlexAlignItems.CENTER}"
        .flexAlignContent="${FlexAlignContent.SPACE_EVENLY}"
        containerStyle=""
        itemStyle=""
      >
        <slot class="left" name="leftComponents"></slot>
        <slot class="center" name="mainComponents"></slot>
        <slot class="right" name="rightComponents"></slot>
        <slot class="prominent" name="prominentComponents"></slot>

      </nidoca-flex-container>
    `;
  }
}
