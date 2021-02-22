import {NidocaShowcaseTemplate} from "./nidoca-showcase-template";
import { TemplateResult,property,customElement,html,LitElement } from 'lit-element';
import { FlexContainerProperties,FlexItemProperties,FlexDirection,FlexWrap,FlexJustifyContent,FlexAlignItems,FlexAlignContent,NidocaFlex,AppData,NidocaAbstractApp,AccordionType,NidocaAccordion,NidocaAccordionItem,NidocaBox,WizardStep,NidocaWizard,NidocaChip,ProgressType,NidocaProgress,BorderProperties,BorderSize,ShadowType,NidocaBorder,NidocaFloatingContainer,ButtonType,NidocaButton,DividerType,NidocaDivider,GridJustifyItems,GridAlignItems,NidocaGrid,NidocaFormOutputData,FormProperties,NidocaForm,NidocaFormCombobox,TextType,NidocaFormText,DateType,NidocaFormDate,NidocaFormInputframe,FormOutputData,NidocaFormAbstractInputElement,IconShadowType,NidocaIcon,RichMediaType,RichMediaProperties,NidocaRichMedia,NidocaCaptcha,TargetType,NidocaLinkInterface,NidocaLink,NidocaList,NidocaListItem,NidocaTopAppBar,NavigationType,NavigationStyle,NidocaNavigation,NidocaSearchBar,NidocaNavigationLink,VisibleType,NidocaVisible,NidocaNavigationSection,NidocaTable,SpacerAlignment,SpacerSize,NidocaSpacer,NidocaTabs,NidocaTab,NidocaTabContent,NidocaTemplate,NidocaTopBottomTemplate,TypographyType,TypographyAlignment,NidocaTypography,NidocaDialog,NidocaShowcase } from '@domoskanonos/nidoca-core';


@customElement('nidoca-form-combobox-showcase-page')
export class NidocaFormComboboxShowcasePage extends NidocaShowcaseTemplate {

  @property()
  name : string|undefined|null = '';

  @property()
  value : any|undefined|null = undefined;

  @property()
  label : string|undefined|null = '';

  @property()
  options : FormOutputData[]|undefined|null = [];

  @property()
  required : boolean|undefined|null = false;

  @property()
  errorText : string | undefined|null = '';

  @property()
  infoText : string | undefined|null = '';

  @property()
  warningText : string | undefined|null = '';

  @property()
  size : number|undefined|null = undefined;

  @property()
  multiple : boolean|undefined|null = false;

  @property()
  selectElement : HTMLSelectElement | undefined|null = undefined;

  getMainComponent(): TemplateResult {
    return html``;
  }

}
