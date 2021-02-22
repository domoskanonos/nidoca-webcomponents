import {NidocaShowcaseTemplate} from "./nidoca-showcase-template";
import { TemplateResult,property,customElement,html,LitElement } from 'lit-element';
import { FlexContainerProperties,FlexItemProperties,FlexDirection,FlexWrap,FlexJustifyContent,FlexAlignItems,FlexAlignContent,NidocaFlex,AppData,NidocaAbstractApp,AccordionType,NidocaAccordion,NidocaAccordionItem,NidocaBox,WizardStep,NidocaWizard,NidocaChip,ProgressType,NidocaProgress,BorderProperties,BorderSize,ShadowType,NidocaBorder,NidocaFloatingContainer,ButtonType,NidocaButton,DividerType,NidocaDivider,GridJustifyItems,GridAlignItems,NidocaGrid,NidocaFormOutputData,FormProperties,NidocaForm,NidocaFormCombobox,TextType,NidocaFormText,DateType,NidocaFormDate,NidocaFormInputframe,FormOutputData,NidocaFormAbstractInputElement,IconShadowType,NidocaIcon,RichMediaType,RichMediaProperties,NidocaRichMedia,NidocaCaptcha,TargetType,NidocaLinkInterface,NidocaLink,NidocaList,NidocaListItem,NidocaTopAppBar,NavigationType,NavigationStyle,NidocaNavigation,NidocaSearchBar,NidocaNavigationLink,VisibleType,NidocaVisible,NidocaNavigationSection,NidocaTable,SpacerAlignment,SpacerSize,NidocaSpacer,NidocaTabs,NidocaTab,NidocaTabContent,NidocaTemplate,NidocaTopBottomTemplate,TypographyType,TypographyAlignment,NidocaTypography,NidocaDialog,NidocaShowcase } from '@domoskanonos/nidoca-core';


@customElement('nidoca-icon-showcase-page')
export class NidocaIconShowcasePage extends NidocaShowcaseTemplate {

  @property()
  icon : string | null | undefined = '';

  @property()
  color : string|undefined|null = '';

  @property()
  backgroundColor : string|undefined|null = '';

  @property()
  iconShadowType : string|undefined|null = '';

  @property()
  size : number|undefined|null = undefined;

  @property()
  sizeUnit : string|undefined|null = '';

  @property()
  iconTitle : string|undefined|null = '';

  @property()
  withIconSpace : boolean|undefined|null = false;

  @property()
  round : boolean|undefined|null = false;

  @property()
  clickable : boolean|undefined|null = false;

  @property()
  deactivated : boolean|undefined|null = false;

  getMainComponent(): TemplateResult {
    return html``;
  }

}
