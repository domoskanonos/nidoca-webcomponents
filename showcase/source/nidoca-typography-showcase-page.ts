import {NidocaShowcaseTemplate} from "./nidoca-showcase-template";
import { TemplateResult,property,customElement,html,LitElement } from 'lit-element';
import { FlexContainerProperties,FlexItemProperties,FlexDirection,FlexWrap,FlexJustifyContent,FlexAlignItems,FlexAlignContent,NidocaFlex,AppData,NidocaAbstractApp,AccordionType,NidocaAccordion,NidocaAccordionItem,NidocaBox,WizardStep,NidocaWizard,NidocaChip,ProgressType,NidocaProgress,BorderProperties,BorderSize,ShadowType,NidocaBorder,NidocaFloatingContainer,ButtonType,NidocaButton,DividerType,NidocaDivider,GridJustifyItems,GridAlignItems,NidocaGrid,NidocaFormOutputData,FormProperties,NidocaForm,NidocaFormCombobox,TextType,NidocaFormText,DateType,NidocaFormDate,NidocaFormInputframe,FormOutputData,NidocaFormAbstractInputElement,IconShadowType,NidocaIcon,RichMediaType,RichMediaProperties,NidocaRichMedia,NidocaCaptcha,TargetType,NidocaLinkInterface,NidocaLink,NidocaList,NidocaListItem,NidocaTopAppBar,NavigationType,NavigationStyle,NidocaNavigation,NidocaSearchBar,NidocaNavigationLink,VisibleType,NidocaVisible,NidocaNavigationSection,NidocaTable,SpacerAlignment,SpacerSize,NidocaSpacer,NidocaTabs,NidocaTab,NidocaTabContent,NidocaTemplate,NidocaTopBottomTemplate,TypographyType,TypographyAlignment,NidocaTypography,NidocaDialog,NidocaShowcase } from '@domoskanonos/nidoca-core';


@customElement('nidoca-typography-showcase-page')
export class NidocaTypographyShowcasePage extends NidocaShowcaseTemplate {

  @property()
  typographyType : TypographyType|undefined|null = undefined;

  @property()
  typographyAlignment : TypographyAlignment|undefined|null = undefined;

  @property()
  text : string|undefined|null = '';

  getMainComponent(): TemplateResult {
    return html``;
  }

}
