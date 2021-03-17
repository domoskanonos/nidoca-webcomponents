import {RouterService} from '@domoskanonos/frontend-basis';
import {
  ButtonType,
  FlexAlignContent,
  FlexAlignItems,
  FlexContainerProperties,
  FlexDirection,
  FlexItemProperties,
  FlexJustifyContent,
  FlexWrap,
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
    <nidoca-box
            height="min-content"
            width="100vw"
            style="color: var(--app-color-primary);background-color: var(--app-color-primary-background-dark);"
         >
            <nidoca-spacer size="10vmin">
               <nidoca-flex-container
                  .flexContainerProperties="${[
                    FlexContainerProperties.CONTAINER_WIDTH_50,
                    FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
                    FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
                    FlexContainerProperties.CONTAINER_HEIGHT_100,
                  ]}"
                  flexItemBasisValue="auto"
                  .flexJustifyContent="${FlexJustifyContent.CENTER}"
                  .flexAlignContent="${FlexAlignContent.CENTER}"
               >
                  <nidoca-typography .typographyType="${TypographyType.H1}">Nidoca</nidoca-typography>
                  <nidoca-typography>
                     Nidoca ist ein leichtgewichtiges Open Source UI-Framework, das auf
                     <nidoca-link href="https://www.webcomponents.org/" targetType="${TargetType.BLANK}"
                        >Webcomponents</nidoca-link
                     >,
                     <nidoca-link href="https://www.typescriptlang.org/" targetType="${TargetType.BLANK}"
                        >Typescript</nidoca-link
                     >
                     und
                     <nidoca-link href="https://lit-element.polymer-project.org/" targetType="${TargetType.BLANK}"
                        >LitElement</nidoca-link
                     >
                     aufbaut.
                  </nidoca-typography>
                  <nidoca-spacer spacerSize="${SpacerSize.MAX}">
                     <nidoca-flex-container
                        .flexContainerProperties="${[FlexContainerProperties.CONTAINER_WIDTH_AUTO]}"
                        .flexItemProperties="${[FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
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
            </nidoca-spacer>
         </nidoca-box>
         <nidoca-flex-container
            .flexContainerProperties="${[FlexContainerProperties.CONTAINER_WIDTH_100]}"
            .flexItemProperties="${[FlexItemProperties.SMARTPHONE_MAX_WIDTH]}"
            .flexDirection="${FlexDirection.ROW}"
            .flexWrap="${FlexWrap.WRAP}"
            .flexJustifyContent="${FlexJustifyContent.FLEX_START}"
            .flexAlignItems="${FlexAlignItems.FLEX_START}"
            .flexAlignContent="${FlexAlignContent.FLEX_START}"
            flexItemBasisValue="33.3%"
         >
             <nidoca-spacer spacerSize="${SpacerSize.NORMAL}">
             <nidoca-flex-container
               .flexContainerProperties="${[FlexContainerProperties.CONTAINER_WIDTH_100]}"
               flexItemBasisValue="auto"
               .flexDirection="${FlexDirection.COLUMN}"
               .flexAlignItems="${FlexAlignItems.CENTER}"
            >
            <nidoca-icon icon="launch" size="96" round="true" backgroundColor="var(--app-color-surface-background)"></nidoca-icon>
               <nidoca-typography .typographyType="${TypographyType.H4}">Responsive</nidoca-typography>
               <nidoca-typography .typographyType="${TypographyType.BODY1}">
                 Die Komponenten sind so aufgebaut, das Sie auf jedem Endgerät gut aussehen. Der Vorteil des Responsiven Paradigma ist,
                 das man das Frontend nicht für jedes Entgerät neu programmieren muss.
            </nidoca-flex-container>
            
         </nidoca-spacer>
         <nidoca-spacer spacerSize="${SpacerSize.NORMAL}">     
                        <nidoca-flex-container
               .flexContainerProperties="${[FlexContainerProperties.CONTAINER_WIDTH_100]}"
               flexItemBasisValue="auto"
               .flexDirection="${FlexDirection.COLUMN}"
               .flexAlignItems="${FlexAlignItems.CENTER}"
            >
            <nidoca-icon icon="grade" size="96" round="true" backgroundColor="var(--app-color-surface-background)"></nidoca-icon>
               <nidoca-typography .typographyType="${TypographyType.H4}">Leichtgewichtig</nidoca-typography>
               <nidoca-typography .typographyType="${TypographyType.BODY1}">
                 Es handelt sich um ein sehr kleines, nützliches Komponentenframework welches gerade mal 32KB groß ist.
                  Es enthält mehr als 30 Komponenten und verschiedene zusätzliche Funktion wie Routing und. 
                  Aus den Basiskomponenten lassen sich sehr einfach und schnell weitere Komponenten individuell erstellen. 
            </nidoca-flex-container>
            </nidoca-spacer>
              <nidoca-spacer spacerSize="${SpacerSize.NORMAL}">
                                    <nidoca-flex-container
               .flexContainerProperties="${[FlexContainerProperties.CONTAINER_WIDTH_100]}"
               flexItemBasisValue="auto"
               .flexDirection="${FlexDirection.COLUMN}"
               .flexAlignItems="${FlexAlignItems.CENTER}"
            >
            <nidoca-icon icon="code" size="96" round="true" backgroundColor="var(--app-color-surface-background)"></nidoca-icon>
               <nidoca-typography .typographyType="${TypographyType.H4}">Open Source</nidoca-typography>
               <nidoca-typography .typographyType="${TypographyType.BODY1}">
                 Es handelt sich um ein Open Source Projekt welches sie in Github finden. Sie können das Projekt natürlich gerne finanziell unterstützen wenn es Ihnen gefällt. 
            </nidoca-flex-container>
           </nidoca-spacer>
         </nidoca-flex-container>
    `;
  }
}
