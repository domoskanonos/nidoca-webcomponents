import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaImgProperties, NidocaTheme, NidocaTypographyType} from "..";

@customElement("nidoca-page-main")
export class NidocaPageMain extends LitElement {
  static styles = css``;

  render(): TemplateResult {
    return html`
      <nidoca-layout-container width="100%" contentWidth="100%" .theme="${NidocaTheme.BACKGROUND}">
        <nidoca-layout-spacer top="50px" bottom="50px">
          <div style="display:flex;align-items:center;justify-content:center;align-content:flex-start;">
            <nidoca-img
              width="200px"
              src="https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg"
              .richMediaProperties="${[NidocaImgProperties.ROUND]}"
            >
            </nidoca-img>
            <nidoca-typography .typographyType="${NidocaTypographyType.H1}">&nbsp;devbox</nidoca-typography>
          </div>
        </nidoca-layout-spacer>
      </nidoca-layout-container>

      <nidoca-layout-container width="100%" contentWidth="100%" .theme="${NidocaTheme.PRIMARY}">
        <div style="display:flex;justify-content:space-evenly">
          <nidoca-layout-container width="25%" contentWidth="100%" .theme="${NidocaTheme.PRIMARY}">
            <nidoca-icon-with-description title="Responsive" icon="launch">
              The components looks good on all devices, because they are designed responsive. Responsive web design is a
              creative and technical paradigm for creating websites, so that they can react to the properties of the end
              device used, especially smartphones and tablet computers.
            </nidoca-icon-with-description>
          </nidoca-layout-container>
          <nidoca-layout-container width="25%" contentWidth="100%" .theme="${NidocaTheme.PRIMARY}">
            <nidoca-icon-with-description title="Leichtgewichtig" icon="code">
              It is a very small, leightweight component framework which is just 32KB small. It contains more than 30
              components and various additional functions such as routing / internationalization and storage. Components
              can be easy customized and is extendable very easy. create.
            </nidoca-icon-with-description>
          </nidoca-layout-container>
          <nidoca-layout-container width="25%" contentWidth="100%" .theme="${NidocaTheme.PRIMARY}">
            <nidoca-icon-with-description title="Open Source" icon="code">
              It is an open source project which you can find on Github. You can of course do the project gladly support
              financially if you like it.
            </nidoca-icon-with-description>
          </nidoca-layout-container>
        </div>
      </nidoca-layout-container>



      <nidoca-form-contact></nidoca-form-contact>


    `;
  }
}
