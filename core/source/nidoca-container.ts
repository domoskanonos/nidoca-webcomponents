import {css, customElement, html, property, LitElement, TemplateResult} from 'lit-element';

export enum ContainerProperty {
  WIDTH_MIN_CONTENT = 'WIDTH_MIN_CONTENT',
  WIDTH_AUTO = 'WIDTH_AUTO',
  WIDTH_100 = 'WIDTH_100',
  WIDTH_75 = 'WIDTH_75',
  WIDTH_50 = 'WIDTH_50',
  WIDTH_25 = 'WIDTH_25',
  HEIGHT_100 = 'HEIGHT_100',
  TABLET_MAX_WIDTH = 'TABLET_MAX_WIDTH',
  SMARTPHONE_MAX_WIDTH = 'SMARTPHONE_MAX_WIDTH'
}

@customElement('nidoca-container')
export class NidocaContainer extends LitElement {
  static styles = css`
    :host {
      box-sizing: border-box;
    }

    .CONTAINER,
    ::slotted(.CONTAINER) {
      margin: auto;
      display: flex;
      overflow: auto;
      box-sizing: border-boxed;
    }


    .WIDTH_MIN_CONTENT,
    ::slotted(.WIDTH_MIN_CONTENT) {
      width: min-content;
      height: min-content;
    }

    .HEIGHT_100,
    ::slotted(.HEIGHT_100) {
      height: 100%;
    }

    .WIDTH_AUTO,
    ::slotted(.WIDTH_AUTO) {
      width: auto;
    }

    .WIDTH_100,
    ::slotted(.WIDTH_100) {
      width: 100%;
    }

    .WIDTH_75,
    ::slotted(.WIDTH_75) {
      width: 75%;
    }

    .WIDTH_50,
    ::slotted(.WIDTH_50) {
      width: 50%;
    }

    .WIDTH_25,
    ::slotted(.WIDTH_25) {
      width: 25%;
    }
    
    @media only screen and (max-width: 1280px) and (orientation: portrait) {

      .CONTAINER.TABLET_MAX_WIDTH,
      ::slotted(.CONTAINER.TABLET_MAX_WIDTH) {
        width: 100%;
      }
      
    }

    @media only screen and (max-width: 768px) and (orientation: portrait) {
      .CONTAINER.SMARTPHONE_MAX_WIDTH,
      ::slotted(.CONTAINER.SMARTPHONE_MAX_WIDTH) {
        width: 100%;
      }

    }
  `;

  @property()
  rendered: boolean = true;

  @property()
  cssStyle: string = '';

  @property()
  containerProperties: ContainerProperty[] = [];

  render(): TemplateResult {
    return this.rendered ? html` <slot class="${this.toContainerPropertiesString(this.containerProperties)}" style="${this.cssStyle}"></slot> ` : html``;
  }

  toContainerPropertiesString(flexContainerPropertieses: string[]) {
    let containerClazzString: string = 'CONTAINER ';
    flexContainerPropertieses.forEach((clazz) => {
      containerClazzString = containerClazzString.concat(' ').concat(clazz);
    });
    return containerClazzString;
  }

}
