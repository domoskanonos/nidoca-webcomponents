import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';
import { css, customElement, html, property, query, unsafeCSS, LitElement } from 'lit-element';
import { TypographyType } from '../typography/component';
import { BasicService } from '@domoskanonos/frontend-basis/lib';
import {
   FlexAlignContent,
   FlexAlignItems,
   BorderProperties,
   FlexJustifyContent,
   SpacerAlignment,
   SpacerSize,
   VisibleType
} from '..';
import { FlexContainerProperties } from '../flex-container/component';
import { GridAlignItems, GridJustifyItems } from '../grid-container/component';
import { KeyValueData } from '../meta';

const componentCSS = require('./component.css');

export enum InputfieldType {
   TEXTAREA = 'textarea',
   SWITCH = 'SWITCH',
   CHECKBOX = 'checkbox',
   COLOR = 'color',
   DATE = 'date',
   DATETIME_LOCAL = 'datetime-local',
   EMAIL = 'email',
   FILE = 'file',
   HIDDEN = 'hidden',
   MONTH = 'month',
   NUMBER = 'number',
   PASSWORD = 'password',
   RANGE = 'range',
   SEARCH = 'search',
   TEL = 'tel',
   TEXT = 'text',
   TIME = 'time',
   URL = 'url',
   WEEK = 'week',
   COMBOBOX = 'combobox'
}

export enum InputfieldMode {
   CLEAN = 'CLEAN',
   FILLED = 'FILLED'
}

export class InputfieldDataChangeEvent {
   type?: string;
   outputData?: KeyValueData;
   element?: HTMLInputElement;
}

@customElement('nidoca-inputfield')
export class NidocaInputfield extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   name: string = '';

   @property()
   value: any;

   @property()
   oldValue: any;

   @property()
   inputfieldType: string = InputfieldType.TEXT;

   @property()
   inputfieldMode: string = InputfieldMode.FILLED;

   @property()
   placeholder: string = '';

   @property()
   required: boolean = false;

   @property()
   disabled: boolean = false;

   @property()
   checked: boolean = false;

   @property()
   multiple: boolean = false;

   @property()
   maxlength: number | undefined;

   @property()
   minlength: number | undefined;

   @property()
   min: number | undefined;

   @property()
   max: number | undefined;

   @property()
   step: number | undefined;

   @property()
   size: number | undefined;

   @property()
   label: string = '';

   @property()
   assistiveText: string = '';

   @property()
   infoText: string = '';

   @property()
   errorText: string = '';

   @property()
   leadingIcon: string = '';

   @property()
   trailingIcon: string = '';

   @property()
   leadingIconClickable: boolean = false;

   @property()
   trailingIconClickable: boolean = false;

   @property()
   selected: boolean = false;

   @property()
   options: KeyValueData[] = [];

   @query('#inputElement')
   inputElemet: HTMLInputElement | undefined;

   @query('#selectElement')
   selectElemet: HTMLSelectElement | undefined;

   @query('#textareaElement')
   textareaElement: HTMLTextAreaElement | undefined;

   render() {
      return this.inputfieldType != InputfieldType.HIDDEN
         ? html`
              <nidoca-border
                 .borderProperties="${[
                    BorderProperties.FULL_WIDTH,
                    this.showSelectedBorder()
                       ? BorderProperties.BOTTOM_SELECTED
                       : this.showBorder()
                       ? BorderProperties.BOTTOM
                       : BorderProperties.NONE
                 ]}"
              >
              
              <nidoca-grid-container
                    class="${this.inputfieldMode}"
                    minHeight="56px"
                    .gridJustifyItems="${GridJustifyItems.STRETCH}"
                    .gridAlignItems="${GridAlignItems.CENTER}" 
                    .gridTemplateRows="${['1fr']}"
                    .gridTemplateColumns="${['1fr']}"
                 >
              <nidoca-spacer size="4px;" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-spacer spacerSize="${SpacerSize.BIG}" spacerAlignment="${SpacerAlignment.HORIZONTAL}">
                 <nidoca-grid-container
                    .gridJustifyItems="${GridJustifyItems.STRETCH}"
                    .gridAlignItems="${GridAlignItems.CENTER}" 
                    .gridTemplateRows="${['auto']}"
                    .gridTemplateColumns="${['auto', '1fr', 'auto', 'auto']}"
                 >
                    <nidoca-visible
                                  visibleType="${
                                     BasicService.getUniqueInstance().isNotBlank(this.leadingIcon)
                                        ? VisibleType.NORMAL
                                        : VisibleType.HIDE
                                  }"
                    >
                       <nidoca-icon icon="${this.leadingIcon}" .clickable="${this.leadingIconClickable}"></nidoca-icon>
                    </nidoca-visible>
                    <nidoca-flex-container
                       .flexContainerProperties="${[
                          FlexContainerProperties.CONTAINER_WIDTH_100,
                          FlexContainerProperties.CONTAINER_HEIGHT_100
                       ]}"
                       .flexAlignContent="${FlexAlignContent.CENTER}"
                       flexItemBasisValue="100%"
                    >
                       <nidoca-visible visibleType="${this.showLabelText() ? VisibleType.NORMAL : VisibleType.HIDE}">
                          <nidoca-typography
                             .typographyType="${TypographyType.OVERLINE}"
                             text="${this.label}"
                          ></nidoca-typography>
                       </nidoca-visible>
                       ${
                          this.inputfieldType == InputfieldType.FILE
                             ? html`
                                  <nidoca-grid-container
                                     .gridTemplateRows="${['auto']}"
                                     .gridTemplateColumns="${['1fr', 'auto']}"
                                  >
                                     <nidoca-flex-container
                                        .flexContainerProperties="${[FlexContainerProperties.CONTAINER_WIDTH_100]}"
                                        flexItemBasisValue="100%"
                                     >
                                        <nidoca-typography
                                           .typographyType="${TypographyType.SUBTITLE1}"
                                           text="${this.assistiveText}"
                                        ></nidoca-typography>
                                        <nidoca-typography
                                           .typographyType="${TypographyType.SUBTITLE2}"
                                           text="${this.infoText}"
                                        ></nidoca-typography
                                     ></nidoca-flex-container>
                                     <nidoca-container>
                                        <nidoca-visible visibleType="${!this.checked ? VisibleType.NORMAL : VisibleType.HIDE}">
                                           <nidoca-icon
                                              icon="attachment"
                                              .clickable="${true}"
                                              @nidoca-event-icon-clicked="
                                          ${() => this.inputElemet?.click()}
                                          "
                                           ></nidoca-icon>
                                        </nidoca-visible>
                                     </nidoca-container>
                                  </nidoca-grid-container>
                                  <nidoca-visible visibleType="${VisibleType.HIDE}">
                                     <input
                                        id="inputElement"
                                        class="slider"
                                        name="${this.name}"
                                        type="${this.inputfieldType}"
                                        value="${this.prepareValue(this.value)}"
                                  /></nidoca-visible>
                               `
                             : this.inputfieldType == InputfieldType.COMBOBOX
                             ? html`
                                  <select
                                     id="selectElement"
                                     ?required="${this.required}"
                                     ?multiple="${this.multiple}"
                                     name="${this.name}"
                                     size="${this.size}"
                                     @change="${(event: Event) => this.change(event)}"
                                     @focus="${(event: Event) => this.focused(event)}"
                                     @focusout="${(event: Event) => this.focusout(event)}"
                                  >
                                     ${guard(
                                        [this.options],
                                        () => html`
                                           ${repeat(
                                              this.options,
                                              (option) => option.value,
                                              (option) =>
                                                 (option.key.length > 0 &&
                                                    this.multiple &&
                                                    this.value.indexOf(option.key) > -1) ||
                                                 BasicService.getUniqueInstance().isEqual(this.value, option.key)
                                                    ? html`
                                                         <option value="${option.key}" selected>${option.value}</option>
                                                      `
                                                    : html`
                                                         <option value="${option.key}">${option.value}</option>
                                                      `
                                           )}
                                        `
                                     )}
                                  </select>
                               `
                             : this.inputfieldType == InputfieldType.TEXTAREA
                             ? html`
                                  <textarea id="textareaElement" name="${this.name}" @keyup="${this.keyup}" rows="${this.size}">
${this.value}</textarea
                                  >
                               `
                             : this.inputfieldType == InputfieldType.SWITCH
                             ? html`
                                  <nidoca-grid-container
                                     .gridTemplateRows="${['auto']}"
                                     .gridTemplateColumns="${['1fr', 'auto']}"
                                  >
                                     <nidoca-flex-container
                                        .flexContainerProperties="${[FlexContainerProperties.CONTAINER_WIDTH_100]}"
                                        flexItemBasisValue="100%"
                                     >
                                        <nidoca-typography
                                           .typographyType="${TypographyType.SUBTITLE1}"
                                           text="${this.assistiveText}"
                                        ></nidoca-typography>
                                        <nidoca-typography
                                           .typographyType="${TypographyType.SUBTITLE2}"
                                           text="${this.infoText}"
                                        ></nidoca-typography
                                     ></nidoca-flex-container>
                                     <componetn-container>
                                        <nidoca-visible visibleType="${this.checked ? VisibleType.HIDE : VisibleType.NORMAL}">
                                           <nidoca-icon
                                              @nidoca-event-icon-clicked="${() => {
                                                 this.switchChecked();
                                              }}"
                                              icon="toggle_off"
                                              .clickable="${true}"
                                           ></nidoca-icon>
                                        </nidoca-visible>
                                        <nidoca-visible visibleType="${this.checked ? VisibleType.NORMAL : VisibleType.HIDE}">
                                           <nidoca-icon
                                              color="var(--app-color-primary-background)"
                                              @nidoca-event-icon-clicked="${() => {
                                                 this.switchChecked();
                                              }}"
                                              icon="toggle_on"
                                              .clickable="${true}"
                                           ></nidoca-icon>
                                        </nidoca-visible>
                                     </componetn-container>
                                  </nidoca-grid-container>
                               `
                             : html`
                                  <input
                                     id="inputElement"
                                     name="${this.name}"
                                     type="${this.inputfieldType}"
                                     value="${this.prepareValue(this.value)}"
                                     placeholder="${BasicService.getUniqueInstance().isBlank(this.placeholder) &&
                                     !this.showLabelText()
                                        ? this.label
                                        : this.placeholder}"
                                     size="${this.size}"
                                     minlength="${this.minlength}"
                                     maxlength="${this.maxlength}"
                                     min="${this.min}"
                                     max="${this.max}"
                                     step="${this.step}"
                                     ?required="${this.required}"
                                     ?disabled="${this.disabled}"
                                     ?checked="${this.checked}"
                                     ?multiple="${this.multiple}"
                                     @keyup="${this.keyup}"
                                     @change="${(event: Event) => this.change(event)}"
                                     @focus="${(event: Event) => this.focused(event)}"
                                     @focusout="${(event: Event) => this.focusout(event)}"
                                  />
                               `
                       }</nidoca-flex-container
                    >
                    <nidoca-visible
                       visibleType="${
                          BasicService.getUniqueInstance().isNotBlank(this.trailingIcon) ? VisibleType.NORMAL : VisibleType.HIDE
                       }"
                    >
                       <nidoca-icon icon="${this.trailingIcon}" .clickable="${this.trailingIconClickable}"></nidoca-icon>
                    </nidoca-visible>
                 </nidoca-grid-container>
                 </nidoca-spacer>                 </nidoca-spacer>
                 </nidoca-grid-container>
              </nidoca-border>
              <nidoca-visible visibleType="${this.showAdditionalTextContainer() ? VisibleType.NORMAL : VisibleType.HIDE}">
                 <nidoca-spacer spacerSize="${SpacerSize.LITTLE}" spacerAlignment="${SpacerAlignment.VERTICAL}">
                 <nidoca-flex-container
                    .flexContainerProperties="${[FlexContainerProperties.CONTAINER_WIDTH_100]}"
                    flexItemBasisValue="auto"
                    flexJustifyContent="${FlexJustifyContent.SPACE_BETWEEN}"
                 >
                    <nidoca-typography
                       .typographyType="${TypographyType.OVERLINE}"
                       text="${this.assistiveText}"
                    ></nidoca-typography>
                    <nidoca-typography
                       .typographyType="${TypographyType.OVERLINE}"
                       text="${this.infoText}"
                    ></nidoca-typography>
                 </nidoca-flex-container>
              </nidoca-visible>
              </nidoca-spacer>
              <nidoca-visible visibleType="${
                 BasicService.getUniqueInstance().isNotBlank(this.errorText)
                    ? VisibleType.NORMAL
                    : this.inputfieldMode == InputfieldMode.CLEAN
                    ? VisibleType.HIDE
                    : VisibleType.INVISIBLE
              }">
              <nidoca-typography
                 style="color:var(--app-color-error)"
                 .typographyType="${TypographyType.OVERLINE}"
                 text="${this.errorText}"
              ></nidoca-typography>
              </nidoca-visible>
           `
         : html`
              <input
                 id="inputElement"
                 name="${this.name}"
                 type="${this.inputfieldType}"
                 value="${this.prepareValue(this.value)}"
              />
           `;
   }

   private switchChecked() {
      this.checked = !Boolean(this.checked);
      let inputDataChangedEvent: InputfieldDataChangeEvent = <InputfieldDataChangeEvent>{};
      inputDataChangedEvent.type = this.inputfieldType;
      inputDataChangedEvent.element = this.inputElemet;
      inputDataChangedEvent.outputData = this.getOutputData();
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, 'nidoca-event-inputfield-change', inputDataChangedEvent);
   }

   async keyup() {
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, 'nidoca-event-inputfield-keyup', this.getOutputData());
   }

   async focused(event: Event) {
      console.log('event: '.concat(JSON.stringify(event)));
      this.oldValue = this.value;
      this.selected = true;
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, 'nidoca-event-inputfield-focus', this.getOutputData());
   }

   async focusout(event: Event) {
      console.log('event: '.concat(JSON.stringify(event)));
      this.selected = false;
      this.validate();
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, 'nidoca-event-inputfield-focus-out', this.getOutputData());
   }

   async change(event: Event) {
      let inputDataChangedEvent: InputfieldDataChangeEvent = <InputfieldDataChangeEvent>{};
      inputDataChangedEvent.type = this.inputfieldType;
      inputDataChangedEvent.element = <HTMLInputElement>event.target;
      inputDataChangedEvent.outputData = this.getOutputData();
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, 'nidoca-event-inputfield-change', inputDataChangedEvent);
   }

   public isValid(): boolean {
      switch (this.inputfieldType) {
         case InputfieldType.COMBOBOX:
            return this.selectElemet != null ? this.selectElemet.validity.valid : false;
         default:
            return this.inputElemet != null ? this.inputElemet.validity.valid : false;
      }
   }

   public validate(): void {
      if (this.inputElemet != null) {
         if (this.inputElemet.validity.valid) {
            this.value = this.inputElemet.value;
            this.oldValue = this.inputElemet.value;
         }
         if (this.inputElemet.validationMessage != this.errorText) {
            this.errorText = this.inputElemet.validationMessage;
         }
      }
   }

   getOutputData(): KeyValueData {
      let outputValue: any = this.oldValue;

      switch (this.inputfieldType) {
         case InputfieldType.COMBOBOX:
            if (this.selectElemet != null && this.multiple) {
               outputValue = [];
               for (let i = 0, len = this.selectElemet.options.length; i < len; i++) {
                  let opt: HTMLOptionElement = this.selectElemet.options[i];
                  if (opt.selected) {
                     outputValue.push(opt.value);
                  }
               }
            } else if (this.selectElemet != null) {
               outputValue = this.selectElemet.value;
            }
            break;
         case InputfieldType.SWITCH:
            outputValue = this.checked;
            break;
         case InputfieldType.DATETIME_LOCAL:
         case InputfieldType.DATE:
            outputValue = this.inputElemet?.valueAsDate;
            break;
         case InputfieldType.TEXTAREA:
            outputValue = this.textareaElement?.value;
            break;
         default:
            outputValue = this.inputElemet?.value;
            break;
      }

      return <KeyValueData>{
         key: this.name,
         value: outputValue
      };
   }

   private prepareValue(value: any): any {
      if (value == null) {
         return '';
      }

      if (typeof value == 'string') {
         return value;
      }

      switch (this.inputfieldType) {
         case InputfieldType.DATE:
            value = value.toISOString().substr(0, 10);
            break;
         default:
            value = BasicService.getUniqueInstance().beautifyText(value);
            break;
      }
      return value;
   }

   public updateInfoText(): void {
      if (!this.showBorder()) {
         this.infoText = '';
         return;
      }
      switch (this.inputfieldType) {
         case InputfieldType.SWITCH:
         case InputfieldType.COLOR:
         case InputfieldType.DATE:
         case InputfieldType.DATETIME_LOCAL:
         case InputfieldType.EMAIL:
         case InputfieldType.FILE:
         case InputfieldType.HIDDEN:
         case InputfieldType.MONTH:
         case InputfieldType.RANGE:
         case InputfieldType.SEARCH:
         case InputfieldType.TEL:
         case InputfieldType.TIME:
         case InputfieldType.URL:
         case InputfieldType.WEEK:
            break;
         case InputfieldType.NUMBER:
            this.infoText = BasicService.getUniqueInstance()
               .getValue(this.min, '')
               .toString()
               .concat('-')
               .concat(
                  BasicService.getUniqueInstance()
                     .getValue(this.max, '')
                     .toString()
               );
            break;
         case InputfieldType.TEXT:
         case InputfieldType.PASSWORD:
            this.infoText = this.value.length
               .toString()
               .concat('/')
               .concat(
                  BasicService.getUniqueInstance()
                     .getValue(this.maxlength, '0')
                     .toString()
               );
            break;
      }
   }

   private showBorder(): boolean {
      return BasicService.getUniqueInstance().isNotBlank(this.label);
   }

   private showSelectedBorder(): boolean {
      return (
         this.showBorder() &&
         this.selected &&
         this.inputfieldType !== InputfieldType.RANGE &&
         this.inputfieldType !== InputfieldType.COLOR
      );
   }

   private showLabelText(): boolean {
      return (
         ((this.selected ||
            this.inputfieldType === InputfieldType.COLOR ||
            this.inputfieldType === InputfieldType.COMBOBOX ||
            this.inputfieldType === InputfieldType.TEXTAREA ||
            this.inputfieldType === InputfieldType.RANGE ||
            this.inputfieldType === InputfieldType.SWITCH ||
            this.inputfieldType === InputfieldType.MONTH ||
            this.inputfieldType === InputfieldType.TIME ||
            this.inputfieldType === InputfieldType.WEEK ||
            this.inputfieldType === InputfieldType.DATE ||
            this.inputfieldType === InputfieldType.DATETIME_LOCAL) &&
            BasicService.getUniqueInstance().isNotBlank(this.label)) ||
         (BasicService.getUniqueInstance().isNotBlank(this.value) && BasicService.getUniqueInstance().isNotBlank(this.label))
      );
   }

   private showAdditionalTextContainer() {
      return this.inputfieldType != InputfieldType.SWITCH && (this.assistiveText.length > 0 || this.infoText.length > 0);
   }

   static enumToComboboxItems(enumeration: any): KeyValueData[] {
      let options: KeyValueData[] = [];
      Object.keys(enumeration).forEach((key) => {
         options.push(<KeyValueData>{ key: key, value: enumeration[key] });
      });
      return options;
   }

   static clazzToComboboxItems(clazz: any): KeyValueData[] {
      let options: KeyValueData[] = [];
      Object.keys(clazz).forEach((key) => {
         options.push(<KeyValueData>{ key: clazz[key], value: key });
      });
      return options;
   }

   static object2KeyValueDataArray(
      object: any,
      keyFieldName: string,
      valueFieldName: string,
      withEmptyItem: boolean = false
   ): KeyValueData[] {
      let options: KeyValueData[] = [];
      if (withEmptyItem) {
         options.push(new KeyValueData());
      }
      Object.values(object).forEach((value: any) => {
         options.push(<KeyValueData>{ key: value[keyFieldName], value: value[valueFieldName] });
      });
      return options;
   }
}
