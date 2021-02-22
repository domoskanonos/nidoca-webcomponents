import {NidocaShowcaseTemplate} from "./nidoca-showcase-template";
import { TemplateResult,property,customElement,html,LitElement } from 'lit-element';
import { FlexContainerProperties,FlexItemProperties,FlexDirection,FlexWrap,FlexJustifyContent,FlexAlignItems,FlexAlignContent,NidocaFlex,AppData,NidocaAbstractApp,AccordionType,NidocaAccordion,NidocaAccordionItem,NidocaBox,WizardStep,NidocaWizard,NidocaChip,ProgressType,NidocaProgress,BorderProperties,BorderSize,ShadowType,NidocaBorder,NidocaFloatingContainer,ButtonType,NidocaButton,DividerType,NidocaDivider,GridJustifyItems,GridAlignItems,NidocaGrid,NidocaFormOutputData,FormProperties,NidocaForm,NidocaFormCombobox,TextType,NidocaFormText,DateType,NidocaFormDate,NidocaFormInputframe,FormOutputData,NidocaFormAbstractInputElement,IconShadowType,NidocaIcon,RichMediaType,RichMediaProperties,NidocaRichMedia,NidocaCaptcha,TargetType,NidocaLinkInterface,NidocaLink,NidocaList,NidocaListItem,NidocaTopAppBar,NavigationType,NavigationStyle,NidocaNavigation,NidocaSearchBar,NidocaNavigationLink,VisibleType,NidocaVisible,NidocaNavigationSection,NidocaTable,SpacerAlignment,SpacerSize,NidocaSpacer,NidocaTabs,NidocaTab,NidocaTabContent,NidocaTemplate,NidocaTopBottomTemplate,TypographyType,TypographyAlignment,NidocaTypography,NidocaDialog,NidocaShowcase } from '@domoskanonos/nidoca-core';


@customElement('nidoca-flex-showcase-page')
export class NidocaFlexShowcasePage extends NidocaShowcaseTemplate {

  @property()
  flexDirection : string|undefined|null = '';

  @property()
  flexWrap : string|undefined|null = '';

  @property()
  flexJustifyContent : string|undefined|null = '';

  @property()
  flexAlignItems : string|undefined|null = '';

  @property()
  flexAlignContent : string|undefined|null = '';

  @property()
  flexContainerProperties : string[]|undefined|null = [];

  @property()
  flexItemProperties : string[]|undefined|null = [];

  @property()
  flexItemBasisValue : string|undefined|null = '';

  @property()
  flexItemBasisValues : string[]|undefined|null = [];

  @property()
  slotElement : HTMLSlotElement | undefined|null = undefined;

  getMainComponent(): TemplateResult {
    return html``;
  }

}
