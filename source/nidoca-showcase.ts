import {customElement, html, property, query, TemplateResult} from 'lit-element';
import {
  DateType,
  FlexAlignContent,
  FlexAlignItems,
  FlexDirection,
  FlexJustifyContent,
  FlexWrap,
  TextType,
  TypographyType,
} from '.';
import {NidocaForm} from './nidoca-form';
import {InputframeMode} from './nidoca-form-inputframe';
import {NidocaTemplate} from './nidoca-template';
import { WizardStepState } from './nidoca-wizard-step';

@customElement('nidoca-showcase')
export class NidocaShowcase extends NidocaTemplate {
  
  @query('#form')
  private form: NidocaForm | undefined;

  @property({type:Boolean})
  prominent: boolean = true;

  getContent(): TemplateResult {
    return html`

      <div>
        <nidoca-progress></nidoca-progress>
      </div>

      <nidoca-list>
        <nidoca-list-item .selectionMode="${true}">Hallo</nidoca-list-item>
      </nidoca-list>

      <nidoca-form id="form">
        <nidoca-flex-container
          .devices="${[]}"
          .flexDirection="${FlexDirection.ROW}"
          .flexWrap="${FlexWrap.WRAP}"
          .flexJustifyContent="${FlexJustifyContent.SPACE_EVENLY}"
          .flexAlignItems="${FlexAlignItems.CENTER}"
          .flexAlignContent="${FlexAlignContent.SPACE_EVENLY}"
          containerStyle="height:35vh; width:80vw; background-color:var(--mdc-theme-primary)"
          itemStyle=""
        >
          <nidoca-form-text .textType="${TextType.TEXT}" name="text" value="" label="Text"></nidoca-form-text>
          <nidoca-form-text .textType="${TextType.EMAIL}" name="email" value="" label="Email"></nidoca-form-text>
          <nidoca-form-text .textType="${TextType.NUMBER}" name="number" value="" label="Number"></nidoca-form-text>
          <nidoca-form-text
            .textType="${TextType.PASSWORD}"
            name="password"
            value=""
            label="Password"
          ></nidoca-form-text>
          <nidoca-form-text .textType="${TextType.TEL}" name="tel" value="" label="Telephone"></nidoca-form-text>
          <nidoca-form-text .textType="${TextType.URL}" name="url" value="" label="Url"></nidoca-form-text>
          <nidoca-form-date .dateType="${DateType.DATE}" name="date" value="" label="Date"></nidoca-form-date>
          <nidoca-form-date
            .dateType="${DateType.DATETIME_LOCAL}"
            name="datetime"
            value=""
            label="Datetime"
          ></nidoca-form-date>
          <nidoca-form-date .dateType="${DateType.MONTH}" name="month" value="" label="Month"></nidoca-form-date>
          <nidoca-form-date .dateType="${DateType.TIME}" name="time" value="" label="Time"></nidoca-form-date>
          <nidoca-form-date .dateType="${DateType.WEEK}" name="week" value="" label="Week"></nidoca-form-date>
        </nidoca-flex-container>
      </nidoca-form>

      <nidoca-button @click="${() => alert(JSON.stringify(this.form?.getOutputData()))}">HUhu</nidoca-button>
    `;
  }

  getSidebarContent(): TemplateResult {
    return html`
      <nidoca-navigation
        @nidoca-event-link-clicked="${(event: CustomEvent) => this.navigationLinkClicked(event)}"
        .closed="${this.navigationClosed}"
      >
      </nidoca-navigation>
    `;
  }

  navigationLinkClicked(event: CustomEvent<any>): void {
    console.warn('Method not implemented. event detail: %s' + event.detail);
  }
}
