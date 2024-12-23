import {css, html, TemplateResult, LitElement} from 'lit';
import {NidocaHtml} from './nidoca-html';

import {customElement, property} from 'lit/decorators.js';
import {query} from 'lit/decorators.js';
import {NidocaTabContent} from './nidoca-tab-content';
import {NidocaTab} from './nidoca-tab';
import { NidocaTheme } from './nidoca-meta';
import { NidocaArticle } from './nidoca-article';

@customElement('nidoca-tabs')
export class NidocaTabs extends NidocaHtml {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
    slot {
      display: block;
    }

    .container {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: 100%;
    }

    #tabSlot {
      display: flex;
      margin: 0px auto;
      text-align: center;
      width: 100% !important;
      align-items: end;
      justify-content: center;
    }
  `;

  @query('#tabSlot')
  private tabSlot: HTMLSlotElement | undefined;

  @query('#tabContentSlot')
  private tabContentSlot: HTMLSlotElement | undefined;

  @property({type: String})
  theme: string = NidocaTheme.surface;

  @property({type: Number})
  tabIndex: number = 0;

  render(): TemplateResult {
    return html`
      <div class="container" @nidoca-event-tab-clicked="${(event: CustomEvent) => this.tabClicked(event)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `;
  }

  protected firstUpdated(_changedProperties: Map<PropertyKey, unknown>): void {
    super.firstUpdated(_changedProperties);
    this.tabIndexChanged();
  }

  protected update(changedProperties: Map<PropertyKey, unknown>): void {
    super.update(changedProperties);
    if (changedProperties.get('tabIndex') != undefined) {
      this.tabIndexChanged();
    }
  }

  private tabIndexChanged(): void {
    this.updateNidocaTabElements();
    this.updateNidocaTabContentElemnts();
  }

  private updateNidocaTabElements() {
    if (this.tabSlot != null) {
      const assignedElements: Element[] = this.tabSlot.assignedElements();
      const length: number = assignedElements.length;
      const widthPerTab = 100 / length;
      const selectedElement: Element = assignedElements[this.tabIndex];
      for (let index = 0; index < assignedElements.length; index++) {
        const element: Element = assignedElements[index];
        if (element instanceof NidocaTab) {
          element.theme = this.theme;
          element.style.width = String(widthPerTab).concat('%');
          if (element == selectedElement) {
            element.selected = true;
            element.classList.add('SELECTED');
          } else {
            element.selected = false;
            element.classList.remove('SELECTED');
          }
        }
      }
    }
  }

  private updateNidocaTabContentElemnts() {
    let tabContentIndex: number = 0;
    if (this.tabContentSlot != null) {
      const assignedElements: Element[] = this.tabContentSlot.assignedElements();
      for (let index = 0; index < assignedElements.length; index++) {
        const tabContentElement: Element = assignedElements[index];
        if (tabContentElement instanceof NidocaTabContent) {
          if (this.tabIndex == tabContentIndex) {
            tabContentElement.selected = true;
          } else {
            tabContentElement.selected = false;
          }
          tabContentIndex++;
        }
      }
    }
  }

  private tabClicked(event: CustomEvent): void {
    const clickedTab: NidocaTab = event.detail;
    this.changeTabIndex(clickedTab);
  }

  private changeTabIndex(newTab: NidocaTab) {
    if (newTab.selected) {
      return;
    }
    if (this.tabSlot != null) {
      const assignedElements: Element[] = this.tabSlot.assignedElements();
      for (let index = 0; index < assignedElements.length; index++) {
        const element: Element = assignedElements[index];
        if (element instanceof NidocaTab) {
          if (element == newTab) {
            this.tabIndex = index;
            break;
          }
        }
      }
    }
  }

  static example(slotName: string = ''): TemplateResult {
    return html`
      <nidoca-tabs theme="surface" slot="${slotName}" tabIndex="0">
        <nidoca-tab slot="tab"><nidoca-text>Tab 1</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 2</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 3</nidoca-text></nidoca-tab>
        <nidoca-tab-content slot="tabContent"> ${NidocaArticle.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${NidocaArticle.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${NidocaArticle.example()} </nidoca-tab-content>
      </nidoca-tabs>
    `;
  }
}
