import {RouterService} from '@domoskanonos/frontend-basis';
import {
  ButtonType,
  FlexAlignContent,
  FlexAlignItems,
  FlexDirection,
  FlexJustifyContent,
  FlexWrap,
  NidocaDevice,
  SpacerSize,
  TargetType,
  TypographyAlignment,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-showcase-dashboard-page')
export class NidocaShowcaseDashboardPage extends NidocaShowcaseTemplate {
  getContent(): TemplateResult {
    return html`
      <nidoca-flex-container
        .flexDirection="${FlexDirection.COLUMN}"
        .flexWrap="${FlexWrap.NO_WRAP}"
        .flexJustifyContent="${FlexJustifyContent.CENTER}"
        .flexAlignItems="${FlexAlignItems.CENTER}"
        .flexAlignContent="${FlexAlignContent.CENTER}"
        containerStyle="width:100%; height:40vh; color: var(--app-color-primary); background-color:var(--app-color-primary-background-dark);"
      >
        <nidoca-typography .typographyType="${TypographyType.H1}">#nidoca</nidoca-typography>

        <nidoca-spacer>
          <nidoca-typography .typographyAlignment="${TypographyAlignment.CENTER}">
            nidoca is a lightweight open source ui framework, based on
            <nidoca-link href="https://www.webcomponents.org/" targetType="${TargetType.BLANK}"
              >WebComponents</nidoca-link
            >,
            <nidoca-link href="https://www.typescriptlang.org/" targetType="${TargetType.BLANK}"
              >Typescript</nidoca-link
            >
            and
            <nidoca-link href="https://lit-element.polymer-project.org/" targetType="${TargetType.BLANK}"
              >LitElement</nidoca-link
            >
            aufbaut.
          </nidoca-typography>
        </nidoca-spacer>

        <nidoca-spacer spacerSize="${SpacerSize.MAX}">
          <nidoca-flex-container
            flexItemBasisValue="auto"
            .flexDirection="${FlexDirection.ROW}"
            .flexWrap="${FlexWrap.WRAP}"
            .flexJustifyContent="${FlexJustifyContent.CENTER}"
            .flexAlignItems="${FlexAlignItems.START}"
            .flexAlignContent="${FlexAlignContent.FLEX_START}"
          >
            <nidoca-spacer>
              <nidoca-button
                .buttonType="${ButtonType.SECONDARY}"
                text="Installation"
                @nidoca-event-button-clicked="${() => {
                  RouterService.getUniqueInstance().navigate('nidoca-showcase-get-started-page');
                }}"
              ></nidoca-button>
            </nidoca-spacer>
            <nidoca-spacer>
              <nidoca-button .buttonType="${ButtonType.SECONDARY}" text="Dokumentation"></nidoca-button>
            </nidoca-spacer>
          </nidoca-flex-container>
        </nidoca-spacer>
      </nidoca-flex-container>

      <nidoca-flex-container
        .flexDirection="${FlexDirection.ROW}"
        .flexWrap="${FlexWrap.WRAP}"
        .flexJustifyContent="${FlexJustifyContent.FLEX_START}"
        .flexAlignItems="${FlexAlignItems.FLEX_START}"
        .flexAlignContent="${FlexAlignContent.FLEX_START}"
        .devices="${[NidocaDevice.DESKTOP, NidocaDevice.TABLET]}"
        itemStyle="flex-basis: 33.3%"
      >
        <nidoca-spacer spacerSize="${SpacerSize.NORMAL}">
          <nidoca-flex-container .flexDirection="${FlexDirection.COLUMN}" .flexAlignItems="${FlexAlignItems.CENTER}">
            <nidoca-icon
              icon="launch"
              size="96"
              round="true"
              backgroundColor="var(--app-color-surface-background)"
            ></nidoca-icon>
            <nidoca-typography .typographyType="${TypographyType.H4}">Responsive</nidoca-typography>

            <nidoca-spacer>
              <nidoca-typography
                .typographyType="${TypographyType.BODY1}"
                .typographyAlignment="${TypographyAlignment.CENTER}"
              >
                The components looks good on all devices, because they are designed responsive. Responsive web design is
                a creative and technical paradigm for creating websites, so that they can react to the properties of the
                end device used, especially smartphones and tablet computers.
              </nidoca-typography>
            </nidoca-spacer>
          </nidoca-flex-container>
        </nidoca-spacer>
        <nidoca-spacer spacerSize="${SpacerSize.NORMAL}">
          <nidoca-flex-container .flexDirection="${FlexDirection.COLUMN}" .flexAlignItems="${FlexAlignItems.CENTER}">
            <nidoca-icon
              icon="grade"
              size="96"
              round="true"
              backgroundColor="var(--app-color-surface-background)"
            ></nidoca-icon>
            <nidoca-typography .typographyType="${TypographyType.H4}">Leichtgewichtig</nidoca-typography>
            <nidoca-spacer>
              <nidoca-typography
                .typographyType="${TypographyType.BODY1}"
                .typographyAlignment="${TypographyAlignment.CENTER}"
              >
                It is a very small, leightweight component framework which is just 32KB small. It contains more than 30
                components and various additional functions such as routing / internationalization and storage.
                Components can be easy customized and is extendable very easy. create.</nidoca-typography
              >
            </nidoca-spacer>
          </nidoca-flex-container>
        </nidoca-spacer>
        <nidoca-spacer spacerSize="${SpacerSize.NORMAL}">
          <nidoca-flex-container .flexDirection="${FlexDirection.COLUMN}" .flexAlignItems="${FlexAlignItems.CENTER}">
            <nidoca-icon
              icon="code"
              size="96"
              round="true"
              backgroundColor="var(--app-color-surface-background)"
            ></nidoca-icon>
            <nidoca-typography .typographyType="${TypographyType.H4}">Open Source</nidoca-typography>
            <nidoca-spacer>
              <nidoca-typography
                .typographyType="${TypographyType.BODY1}"
                .typographyAlignment="${TypographyAlignment.CENTER}"
              >
                It is an open source project which you can find on Github. You can of course do the project gladly
                support financially if you like it.
              </nidoca-typography>
            </nidoca-spacer>
          </nidoca-flex-container>
        </nidoca-spacer>
      </nidoca-flex-container>
    `;
  }
}
