import {NidocaRouter} from "@domoskanonos/nidoca-router";
import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {
  NidocaDevice,
  NidocaLayoutFlexAlignContent,
  NidocaLayoutFlexAlignItems,
  NidocaLayoutFlexDirection,
  NidocaLayoutFlexJustifyContent,
  NidocaLayoutFlexWrap,
  NidocaTargetType,
  NidocaTheme,
  NidocaTypographyAlignment,
  NidocaTypographyType,
} from "..";
import {NidocaLayoutSpacerSize} from "../nidoca-layout-spacer";

@customElement("nidoca-page-main")
export class NidocaPageMain extends LitElement {
  static styles = css``;

  render(): any {
    return html`
      <nidoca-layout-flex
        .flexDirection="${NidocaLayoutFlexDirection.COLUMN}"
        .flexWrap="${NidocaLayoutFlexWrap.NO_WRAP}"
        .flexJustifyContent="${NidocaLayoutFlexJustifyContent.CENTER}"
        .flexAlignItems="${NidocaLayoutFlexAlignItems.CENTER}"
        .flexAlignContent="${NidocaLayoutFlexAlignContent.CENTER}"
        containerStyle="width:100%; height:40vh; color: var(--app-color-primary); background-color:var(--app-color-primary-background-dark);"
      >
        <nidoca-typography .typographyType="${NidocaTypographyType.H1}">#nidoca</nidoca-typography>
        <nidoca-layout-spacer>
          <nidoca-typography .typographyAlignment="${NidocaTypographyAlignment.CENTER}">
            nidoca is a lightweight open source ui framework, based on
            <nidoca-link href="https://www.webcomponents.org/" targetType="${NidocaTargetType.BLANK}"
              >WebComponents</nidoca-link
            >,
            <nidoca-link href="https://www.typescriptlang.org/" targetType="${NidocaTargetType.BLANK}"
              >Typescript</nidoca-link
            >
            and
            <nidoca-link href="https://lit-element.polymer-project.org/" targetType="${NidocaTargetType.BLANK}"
              >LitElement</nidoca-link
            >
            aufbaut.
          </nidoca-typography>
        </nidoca-layout-spacer>
        <nidoca-layout-spacer spacerSize="${NidocaLayoutSpacerSize.MAX}">
          <nidoca-layout-flex
            flexItemBasisValue="auto"
            .flexDirection="${NidocaLayoutFlexDirection.ROW}"
            .flexWrap="${NidocaLayoutFlexWrap.WRAP}"
            .flexJustifyContent="${NidocaLayoutFlexJustifyContent.CENTER}"
            .flexAlignItems="${NidocaLayoutFlexAlignItems.START}"
            .flexAlignContent="${NidocaLayoutFlexAlignContent.FLEX_START}"
          >
            <nidoca-layout-spacer>
              <nidoca-button
                .theme="${NidocaTheme.SECONDARY}"
                text="Installation"
                @nidoca-event-button-clicked="${() => {
                  NidocaRouter.getUniqueInstance().navigate("components");
                }}"
              ></nidoca-button>
            </nidoca-layout-spacer>
            <nidoca-layout-spacer>
              <nidoca-button .theme="${NidocaTheme.SECONDARY}" text="Dokumentation"></nidoca-button>
            </nidoca-layout-spacer>
          </nidoca-layout-flex>
        </nidoca-layout-spacer>
      </nidoca-layout-flex>
      <nidoca-layout-flex
        .flexDirection="${NidocaLayoutFlexDirection.ROW}"
        .flexWrap="${NidocaLayoutFlexWrap.WRAP}"
        .flexJustifyContent="${NidocaLayoutFlexJustifyContent.FLEX_START}"
        .flexAlignItems="${NidocaLayoutFlexAlignItems.FLEX_START}"
        .flexAlignContent="${NidocaLayoutFlexAlignContent.FLEX_START}"
        .devices="${[NidocaDevice.DESKTOP, NidocaDevice.TABLET]}"
        itemStyle="flex-basis: 33.3%"
      >
        <nidoca-layout-spacer spacerSize="${NidocaLayoutSpacerSize.NORMAL}">
          <nidoca-layout-flex
            .flexDirection="${NidocaLayoutFlexDirection.COLUMN}"
            .flexAlignItems="${NidocaLayoutFlexAlignItems.CENTER}"
          >
            <nidoca-icon
              icon="launch"
              size="96"
              round="true"
              backgroundColor="var(--app-color-surface-background)"
            ></nidoca-icon>
            <nidoca-typography .typographyType="${NidocaTypographyType.H4}">Responsive</nidoca-typography>
            <nidoca-layout-spacer>
              <nidoca-typography
                .typographyType="${NidocaTypographyType.BODY1}"
                .typographyAlignment="${NidocaTypographyAlignment.CENTER}"
              >
                The components looks good on all devices, because they are designed responsive. Responsive web design is
                a creative and technical paradigm for creating websites, so that they can react to the properties of the
                end device used, especially smartphones and tablet computers.
              </nidoca-typography>
            </nidoca-layout-spacer>
          </nidoca-layout-flex>
        </nidoca-layout-spacer>
        <nidoca-layout-spacer spacerSize="${NidocaLayoutSpacerSize.NORMAL}">
          <nidoca-layout-flex
            .flexDirection="${NidocaLayoutFlexDirection.COLUMN}"
            .flexAlignItems="${NidocaLayoutFlexAlignItems.CENTER}"
          >
            <nidoca-icon
              icon="grade"
              size="96"
              round="true"
              backgroundColor="var(--app-color-surface-background)"
            ></nidoca-icon>
            <nidoca-typography .typographyType="${NidocaTypographyType.H4}">Leichtgewichtig</nidoca-typography>
            <nidoca-layout-spacer>
              <nidoca-typography
                .typographyType="${NidocaTypographyType.BODY1}"
                .typographyAlignment="${NidocaTypographyAlignment.CENTER}"
              >
                It is a very small, leightweight component framework which is just 32KB small. It contains more than 30
                components and various additional functions such as routing / internationalization and storage.
                Components can be easy customized and is extendable very easy. create.</nidoca-typography
              >
            </nidoca-layout-spacer>
          </nidoca-layout-flex>
        </nidoca-layout-spacer>
        <nidoca-layout-spacer spacerSize="${NidocaLayoutSpacerSize.NORMAL}">
          <nidoca-layout-flex
            .flexDirection="${NidocaLayoutFlexDirection.COLUMN}"
            .flexAlignItems="${NidocaLayoutFlexAlignItems.CENTER}"
          >
            <nidoca-icon
              icon="code"
              size="96"
              round="true"
              backgroundColor="var(--app-color-surface-background)"
            ></nidoca-icon>
            <nidoca-typography .typographyType="${NidocaTypographyType.H4}">Open Source</nidoca-typography>
            <nidoca-layout-spacer>
              <nidoca-typography
                .typographyType="${NidocaTypographyType.BODY1}"
                .typographyAlignment="${NidocaTypographyAlignment.CENTER}"
              >
                It is an open source project which you can find on Github. You can of course do the project gladly
                support financially if you like it.
              </nidoca-typography>
            </nidoca-layout-spacer>
          </nidoca-layout-flex>
        </nidoca-layout-spacer>
      </nidoca-layout-flex>
    `;
  }
}
