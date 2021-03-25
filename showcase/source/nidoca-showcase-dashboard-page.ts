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
        <nidoca-typography>
          Nidoca ist ein leichtgewichtiges Open Source UI-Framework, das auf
          <nidoca-link href="https://www.webcomponents.org/" targetType="${TargetType.BLANK}">Webcomponents</nidoca-link
          >,
          <nidoca-link href="https://www.typescriptlang.org/" targetType="${TargetType.BLANK}">Typescript</nidoca-link>
          und
          <nidoca-link href="https://lit-element.polymer-project.org/" targetType="${TargetType.BLANK}"
            >LitElement</nidoca-link
          >
          aufbaut.
        </nidoca-typography>
        <nidoca-spacer spacerSize="${SpacerSize.MAX}">
          <nidoca-flex-container
            flexItemBasisValue="auto"
            .flexDirection="${FlexDirection.ROW}"
            .flexWrap="${FlexWrap.WRAP}"
            .flexJustifyContent="${FlexJustifyContent.CENTER}"
            .flexAlignItems="${FlexAlignItems.START}"
            .flexAlignContent="${FlexAlignContent.FLEX_START}"
          >
            <nidoca-button
              .buttonType="${ButtonType.SECONDARY}"
              text="Installation"
              @nidoca-event-button-clicked="${() => {
                RouterService.getUniqueInstance().navigate('nidoca-showcase-get-started-page');
              }}"
            ></nidoca-button>
            <nidoca-button .buttonType="${ButtonType.SECONDARY}" text="Dokumentation"></nidoca-button>
          </nidoca-flex-container>
        </nidoca-spacer>
      </nidoca-flex-container>

      <nidoca-flex-container
        .flexDirection="${FlexDirection.ROW}"
        .flexWrap="${FlexWrap.WRAP}"
        .flexJustifyContent="${FlexJustifyContent.FLEX_START}"
        .flexAlignItems="${FlexAlignItems.FLEX_START}"
        .flexAlignContent="${FlexAlignContent.FLEX_START}"
        .devices="${[NidocaDevice.DESKTOP,NidocaDevice.TABLET]}"
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
            <nidoca-typography .typographyType="${TypographyType.BODY1}">
              Die Komponenten sind so aufgebaut, das Sie auf jedem Endgerät gut aussehen. Der Vorteil des Responsiven
              Paradigma ist, das man das Frontend nicht für jedes Entgerät neu programmieren muss.</nidoca-typography
            >
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
            <nidoca-typography .typographyType="${TypographyType.BODY1}">
              Es handelt sich um ein sehr kleines, nützliches Komponentenframework welches gerade mal 32KB groß ist. Es
              enthält mehr als 30 Komponenten und verschiedene zusätzliche Funktion wie Routing und. Aus den
              Basiskomponenten lassen sich sehr einfach und schnell weitere Komponenten individuell
              erstellen.</nidoca-typography
            >
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
            <nidoca-typography .typographyType="${TypographyType.BODY1}">
              Es handelt sich um ein Open Source Projekt welches sie in Github finden. Sie können das Projekt natürlich
              gerne finanziell unterstützen wenn es Ihnen gefällt.
            </nidoca-typography>
          </nidoca-flex-container>
        </nidoca-spacer>
      </nidoca-flex-container>
    `;
  }
}
