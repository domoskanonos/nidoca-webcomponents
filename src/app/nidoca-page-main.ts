import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaTheme, NidocaTypographyType} from "..";

@customElement("nidoca-page-main")
export class NidocaPageMain extends LitElement {
  static styles = css``;

  render(): TemplateResult {
    return html`
      <nidoca-section style="width:50%;">
        <nidoca-layout-spacer top="250px" bottom="250px">
          <div style="display:flex;align-items:center;justify-content:center;align-content:flex-start;">
            <nidoca-img
              width="100px"
              src="https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg"
            >
            </nidoca-img>
            <nidoca-typography .typographyType="${NidocaTypographyType.H1}"
              >&nbsp;nidoca-webcomponents</nidoca-typography
            >
          </div>
        </nidoca-layout-spacer>
      </nidoca-section>

      <nidoca-layout-container .theme="${NidocaTheme.PRIMARY}">
        <nidoca-section>
          <nidoca-icon-with-description title="Responsive" icon="launch">
            The components looks good on all devices, because they are designed responsive. Responsive web design is a
            creative and technical paradigm for creating websites, so that they can react to the properties of the end
            device used, especially smartphones and tablet computers.
          </nidoca-icon-with-description>
          <nidoca-icon-with-description title="Leichtgewichtig" icon="code">
            It is a very small, leightweight component framework which is just 32KB small. It contains more than 30
            components and various additional functions such as routing / internationalization and storage. Components
            can be easy customized and is extendable very easy. create.
          </nidoca-icon-with-description>
          <nidoca-icon-with-description title="Open Source" icon="code">
            It is an open source project which you can find on Github. You can of course do the project gladly support
            financially if you like it.
          </nidoca-icon-with-description>
        </nidoca-section>
      </nidoca-layout-container>

      <nidoca-section>
        <nidoca-img src="https://picsum.photos/600"></nidoca-img>
        <nidoca-img src="https://picsum.photos/600"></nidoca-img>
        <nidoca-img src="https://picsum.photos/600"></nidoca-img>
        <nidoca-img src="https://picsum.photos/600"></nidoca-img>
        <nidoca-img src="https://picsum.photos/600"></nidoca-img>
        <nidoca-img src="https://picsum.photos/600"></nidoca-img>

        <nidoca-article
          style="width:500px;"
          title="Lorem Ipsum"
          summary="Lorem Ipsum Dolorem ipsum med en to."
          text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
        ></nidoca-article>
      </nidoca-section>

      <nidoca-section style="width:50%; padding:50px;">
        <nidoca-img src="https://picsum.photos/id/1/800/600/"></nidoca-img>
        <nidoca-article
          style="padding-left:25px;"
          title="Lorem Ipsum"
          summary="Lorem Ipsum Dolorem ipsum med en to."
          text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
        ></nidoca-article>
      </nidoca-section>

      <nidoca-layout-container .theme="${NidocaTheme.SECONDARY}">
        <nidoca-section style="width:50%;">
          <nidoca-article
            title="Lorem Ipsum"
            summary="Lorem Ipsum Dolorem ipsum med en to."
            text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
          ></nidoca-article>
        </nidoca-section>
      </nidoca-layout-container>

      <nidoca-form-contact></nidoca-form-contact>
    `;
  }
}
