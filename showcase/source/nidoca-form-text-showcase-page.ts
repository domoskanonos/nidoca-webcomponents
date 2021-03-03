import {NidocaShowcaseTemplate} from "./nidoca-showcase-template";
import { TemplateResult,property,customElement,html,LitElement } from 'lit-element';
import { FlexContainerProperties,FlexItemProperties,FlexDirection,FlexWrap,FlexJustifyContent,FlexAlignItems,FlexAlignContent,NidocaFlexContainer,AppData,NidocaAbstractApp,AccordionType,NidocaAccordion,NidocaAccordionItem,NidocaBox,WizardStep,NidocaWizard,NidocaChip,ProgressType,NidocaProgress,BorderProperties,BorderSize,ShadowType,NidocaBorder,NidocaFloatingContainer,ButtonType,NidocaButton,DividerType,NidocaDivider,GridJustifyItems,GridAlignItems,NidocaGridContainer,NidocaFormOutputData,FormProperties,NidocaForm,NidocaFormCombobox,TextType,NidocaFormText,DateType,NidocaFormDate,NidocaFormInputframe,FormOutputData,NidocaFormAbstractInputElement,IconShadowType,NidocaIcon,RichMediaType,RichMediaProperties,NidocaRichMedia,NidocaCaptcha,TargetType,NidocaLinkInterface,NidocaLink,NidocaList,NidocaListItem,NidocaTopAppBar,NavigationStyle,NidocaNavigation,NidocaSearchBar,NidocaNavigationLink,VisibleType,NidocaVisible,NidocaNavigationSection,NidocaTable,SpacerAlignment,SpacerSize,NidocaSpacer,NidocaTabs,NidocaTab,NidocaTabContent,NidocaTemplate,TypographyType,TypographyAlignment,NidocaTypography,NidocaDialog,NidocaShowcase } from '@domoskanonos/nidoca-core';


@customElement('nidoca-form-text-showcase-page')
export class NidocaFormTextShowcasePage extends NidocaShowcaseTemplate {

  @property()
  textType : TextType = undefined;

  @property()
  name : string = '';

  @property()
  value : any = undefined;

  @property()
  label : string = '';

  @property()
  required : boolean = false;

  @property()
  placeholder : string = '';

  @property()
  disabled : boolean = false;

  @property()
  checked : boolean = false;

  @property()
  multiple : boolean = false;

  @property()
  maxlength : number | undefined = undefined;

  @property()
  minlength : number | undefined = undefined;

  @property()
  min : number | undefined = undefined;

  @property()
  max : number | undefined = undefined;

  @property()
  step : number | undefined = undefined;

  @property()
  size : number | undefined = undefined;

  @property()
  errorText : string | undefined = '';

  @property()
  infoText : string | undefined = '';

  @property()
  warningText : string | undefined = '';

  @property()
  inputElement : HTMLInputElement | undefined = undefined;

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
      <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-form-text/>"></nidoca-typography>
      <nidoca-typography .typographyType="${TypographyType.BODY1}">
        <br />description<br /><br />
      </nidoca-typography>
      <nidoca-typography .typographyType="${TypographyType.H4}" text="example"></nidoca-typography>
      <nidoca-tabs>
        <nidoca-tab slot="tab" .selected="${true}" text="demo"></nidoca-tab>
        <nidoca-tab slot="tab" text="source"></nidoca-tab>
        <nidoca-tab-content slot="tabContent" .selected="${true}">
          <nidoca-spacer .spacerAlignment="${SpacerAlignment.VERTICAL}" .spacerSize="${SpacerSize.BIG}">
            <nidoca-form-text
             .textType=${ this.textType }
             name=${ this.name }
             .value=${ this.value }
             label=${ this.label }
             .required=${ this.required }
             placeholder=${ this.placeholder }
             .disabled=${ this.disabled }
             .checked=${ this.checked }
             .multiple=${ this.multiple }
             .maxlength=${ this.maxlength }
             .minlength=${ this.minlength }
             .min=${ this.min }
             .max=${ this.max }
             .step=${ this.step }
             .size=${ this.size }
             .errorText=${ this.errorText }
             .infoText=${ this.infoText }
             .warningText=${ this.warningText }
             .inputElement=${ this.inputElement }
            ></nidoca-form-text>
          </nidoca-spacer>
        </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent">
        </nidoca-tab-content>
      </nidoca-tabs>
  </nidoca-flex-container>
  `;
  }

}




