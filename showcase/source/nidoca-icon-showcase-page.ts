import {NidocaShowcaseTemplate} from "./nidoca-showcase-template";
import { TemplateResult,property,customElement,html,LitElement } from 'lit-element';
import { FlexContainerProperties,FlexItemProperties,FlexDirection,FlexWrap,FlexJustifyContent,FlexAlignItems,FlexAlignContent,NidocaFlexContainer,AppData,NidocaAbstractApp,AccordionType,NidocaAccordion,NidocaAccordionItem,NidocaBox,WizardStep,NidocaWizard,NidocaChip,ProgressType,NidocaProgress,BorderProperties,BorderSize,ShadowType,NidocaBorder,NidocaFloatingContainer,ButtonType,NidocaButton,DividerType,NidocaDivider,GridJustifyItems,GridAlignItems,NidocaGridContainer,NidocaFormOutputData,FormProperties,NidocaForm,NidocaFormCombobox,TextType,NidocaFormText,DateType,NidocaFormDate,NidocaFormInputframe,FormOutputData,NidocaFormAbstractInputElement,IconShadowType,NidocaIcon,RichMediaType,RichMediaProperties,NidocaRichMedia,NidocaCaptcha,TargetType,NidocaLinkInterface,NidocaLink,NidocaList,NidocaListItem,NidocaTopAppBar,NavigationStyle,NidocaNavigation,NidocaSearchBar,NidocaNavigationLink,VisibleType,NidocaVisible,NidocaNavigationSection,NidocaTable,SpacerAlignment,SpacerSize,NidocaSpacer,NidocaTabs,NidocaTab,NidocaTabContent,NidocaTemplate,TypographyType,TypographyAlignment,NidocaTypography,NidocaDialog,NidocaShowcase } from '@domoskanonos/nidoca-core';


@customElement('nidoca-icon-showcase-page')
export class NidocaIconShowcasePage extends NidocaShowcaseTemplate {

  @property()
  icon : string | null | undefined = '';

  @property()
  color : string = '';

  @property()
  backgroundColor : string = '';

  @property()
  iconShadowType : string = '';

  @property()
  size : number = undefined;

  @property()
  sizeUnit : string = '';

  @property()
  iconTitle : string = '';

  @property()
  withIconSpace : boolean = false;

  @property()
  round : boolean = false;

  @property()
  clickable : boolean = false;

  @property()
  deactivated : boolean = false;

  getContent(): TemplateResult {
    return html`
      <nidoca-flex-container
      .flexContainerProperties="${[
      FlexContainerProperties.CONTAINER_WIDTH_50,
      FlexContainerProperties.TABLET_MAX_WIDTH,
      FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
      FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
      FlexContainerProperties.TABLET_HORIZONTAL_PADDING
  ]}"
      .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_HORIZONTAL, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
      flexItemBasisValue="100%"
  >
      <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-icon/>"></nidoca-typography>
      <nidoca-typography .typographyType="${TypographyType.BODY1}">
        <br />description<br /><br />
      </nidoca-typography>
      <nidoca-typography .typographyType="${TypographyType.H4}" text="example"></nidoca-typography>
      <nidoca-tabs>
        <nidoca-tab slot="tab" .selected="${true}" text="demo"></nidoca-tab>
        <nidoca-tab slot="tab" text="source"></nidoca-tab>
        <nidoca-tab-content slot="tabContent" .selected="${true}">
          <nidoca-spacer .spacerAlignment="${SpacerAlignment.VERTICAL}" .spacerSize="${SpacerSize.BIG}">
            <nidoca-icon
             .icon=${ this.icon }
             color=${ this.color }
             backgroundColor=${ this.backgroundColor }
             iconShadowType=${ this.iconShadowType }
             .size=${ this.size }
             sizeUnit=${ this.sizeUnit }
             iconTitle=${ this.iconTitle }
             .withIconSpace=${ this.withIconSpace }
             .round=${ this.round }
             .clickable=${ this.clickable }
             .deactivated=${ this.deactivated }
            ></nidoca-icon>
          </nidoca-spacer>
        </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent">
        </nidoca-tab-content>
      </nidoca-tabs>
  </nidoca-flex-container>
  `;
  }

}




