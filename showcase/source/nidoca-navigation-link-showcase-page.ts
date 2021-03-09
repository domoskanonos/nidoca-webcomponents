import {
  FlexContainerProperties,
  FlexItemProperties,
  NidocaNavigationLink,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-navigation-link-showcase-page')
export class NidocaNavigationLinkShowcasePage extends NidocaShowcaseTemplate {
  @property()
  icon: string = '';

  @property()
  text: string = '';

  @property()
  href: string = '';

  @property()
  rendered: boolean = false;

  constructor() {
    super();
    let initComponent: NidocaNavigationLink = new NidocaNavigationLink();

    this.icon = initComponent.icon;

    this.text = initComponent.text;

    this.href = initComponent.href;

    this.rendered = initComponent.rendered;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-flex-container
        .flexContainerProperties="${[
          FlexContainerProperties.CONTAINER_WIDTH_100,
          FlexContainerProperties.TABLET_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
          FlexContainerProperties.TABLET_HORIZONTAL_PADDING,
        ]}"
        .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_BOTH, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
        flexItemBasisValue="100%"
      >
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-navigation-link/>"></nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.BODY1}"> <br />description<br /><br /> </nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.H4}" text="example"></nidoca-typography>

        <nidoca-flex-container
          .flexContainerProperties="${[
            FlexContainerProperties.CONTAINER_WIDTH_100,
            FlexContainerProperties.TABLET_MAX_WIDTH,
            FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
            FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
            FlexContainerProperties.TABLET_HORIZONTAL_PADDING,
          ]}"
          .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_BOTH, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
          flexItemBasisValue="33.3%"
        >
          <nidoca-container>
            <nidoca-form-text
              label="icon"
              .value="${this.icon}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.icon = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="text"
              .value="${this.text}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.text = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="href"
              .value="${this.href}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.href = event.detail.value)}"
            ></nidoca-form-text>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-navigation-link
              icon="${this.icon}"
              text="${this.text}"
              href="${this.href}"
              .rendered="${this.rendered}"
              >nidoca-navigation-link</nidoca-navigation-link
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-navigation-link \n    icon="' +
            this.toValue(this.icon) +
            '" \n    text="' +
            this.toValue(this.text) +
            '" \n    href="' +
            this.toValue(this.href) +
            '" .\n    rendered="' +
            this.toValue(this.rendered) +
            '" >\n     nidoca-navigation-link\n</nidoca-navigation-link>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        Slot: [object Object]

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['icon', 'string'],
            ['text', 'string'],
            ['href', 'string'],
            ['rendered', 'boolean'],
          ]}"
        ></nidoca-table>

        <nidoca-table .headers="${['property', 'type']}" .rows="${[['render', 'render']]}"></nidoca-table>
      </nidoca-flex-container>
    `;
  }

  toValue(item: any): string {
    return String(item);
  }
}
