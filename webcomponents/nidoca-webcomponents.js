/*! For license information please see nidoca-webcomponents.js.LICENSE.txt */
(()=>{"use strict";var t={762:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaApp=e.PageReferenceType=void 0;const n=o(9392),a=o(5595),s=o(5595);var c;(c=e.PageReferenceType||(e.PageReferenceType={})).anchor="anchor",c.page="page";let l=class extends n.LitElement{constructor(){super(...arguments),this.loggedIn=!1}updated(t){if(super.updated(t),t.has("root")&&this.root&&this.root.childs&&this.routeTo(this.root.childs[0]),t.has("route")&&this.root){for(let t=0;t<this.root.childs.length;t++){const e=this.root.childs[t];if(e.route==this.route){this.contentComponent=document.createElement(e.rootComponent);break}}this.requestUpdate()}}render(){var t;return this.loggedIn?n.html`
            <nidoca-template>
                <nidoca-text-body slot="topCenter"
                "></nidoca-text-body>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        @nidoca-event-icon-clicked="${()=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-logout",{detail:this,bubbles:!0,composed:!0}))}}" icon="logout"></nidoca-icon>

                <span slot="content">${this.contentComponent?n.html`${this.contentComponent}`:n.html``}</span>

                <nidoca-menu slot="left" theme="primary">
                    ${null===(t=this.root)||void 0===t?void 0:t.childs.map((t=>n.html` <nidoca-menu-item
                        text="${t.name}"
                        @click="${()=>{this.routeTo(t)}}"
                      ></nidoca-menu-item>`))}
                </nidoca-menu>
            </nidoca-template>
        `:n.html` <nidoca-page-login
          @nidoca-form-login-submit="${t=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-login",{detail:t.detail,bubbles:!0,composed:!0}))}}"
        ></nidoca-page-login>`}routeTo(t){this.dispatchEvent(new CustomEvent("nidoca-event-app-route",{detail:t.route,bubbles:!0,composed:!0}))}};i([(0,s.property)({type:Array}),r("design:type",Object)],l.prototype,"root",void 0),i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"loggedIn",void 0),i([(0,s.property)({type:String,converter:String}),r("design:type",Object)],l.prototype,"route",void 0),l=i([(0,a.customElement)("nidoca-app")],l),e.NidocaApp=l},4432:function(t,e,o){var i=this&&this.__createBinding||(Object.create?function(t,e,o,i){void 0===i&&(i=o);var r=Object.getOwnPropertyDescriptor(e,o);r&&!("get"in r?!e.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return e[o]}}),Object.defineProperty(t,i,r)}:function(t,e,o,i){void 0===i&&(i=o),t[i]=e[o]}),r=this&&this.__exportStar||function(t,e){for(var o in t)"default"===o||Object.prototype.hasOwnProperty.call(e,o)||i(e,t,o)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaDevice=void 0;var n=o(5614);Object.defineProperty(e,"NidocaDevice",{enumerable:!0,get:function(){return n.NidocaDevice}}),r(o(5098),e),r(o(3666),e),r(o(8591),e),r(o(2757),e),r(o(9046),e),r(o(8350),e),r(o(9656),e),r(o(1617),e),r(o(2474),e),r(o(7443),e),r(o(3515),e),r(o(9261),e),r(o(8353),e),r(o(6692),e),r(o(8976),e),r(o(4697),e),r(o(9754),e),r(o(9287),e),r(o(9637),e),r(o(4404),e),r(o(7546),e),r(o(1289),e),r(o(2666),e),r(o(7457),e),r(o(7603),e),r(o(2350),e),r(o(942),e),r(o(5614),e),r(o(2077),e),r(o(996),e),r(o(7203),e),r(o(1465),e),r(o(3155),e),r(o(6355),e),r(o(3008),e),r(o(8716),e),r(o(6257),e),r(o(8865),e),r(o(2353),e),r(o(882),e),r(o(836),e),r(o(5467),e),r(o(1280),e),r(o(5467),e),r(o(1508),e),r(o(2633),e),r(o(7825),e),r(o(2835),e),r(o(1822),e),r(o(8589),e),r(o(786),e),r(o(3487),e),r(o(7821),e),r(o(4375),e),r(o(5777),e),r(o(8712),e),r(o(1268),e),r(o(5728),e),r(o(8026),e),r(o(7984),e),r(o(6374),e),r(o(2251),e),r(o(5412),e),r(o(1322),e),r(o(2604),e),r(o(4257),e),r(o(8454),e),r(o(1442),e),r(o(3038),e),r(o(1052),e),r(o(3049),e),r(o(6987),e),r(o(8083),e),r(o(7906),e),r(o(7717),e),r(o(2756),e),r(o(5202),e),r(o(8969),e),r(o(6698),e),r(o(9649),e),r(o(762),e)},8591:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaAccordionItem=void 0;const n=o(9392),a=o(5595),s=o(5595);let c=class extends n.LitElement{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return n.html`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?n.html` <slot></slot>`:n.html``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};c.styles=n.css`
    :host {
      border-left-style: solid;
      border-right-style: solid;
      border-bottom-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
    }

    .header {
      height: var(--height-medium);
      box-sizing: border-box;
      padding-left: var(--space-2);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      align-content: center;
      cursor: pointer;
    }
  `,i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"header",void 0),i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],c.prototype,"opened",void 0),c=i([(0,a.customElement)("nidoca-accordion-item")],c),e.NidocaAccordionItem=c},3666:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaAccordion=e.AccordionType=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(5595),l=o(4432),d=o(8591);var p;!function(t){t.SINGLE="SINGLE",t.MULTI="MULTI"}(p=e.AccordionType||(e.AccordionType={}));let h=class extends n.LitElement{constructor(){super(...arguments),this.theme=l.NidocaTheme.surface,this.accordionType=p.SINGLE}render(){return n.html`
      ${l.NidocaThemeHelper.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){const e=t.detail;switch(this.accordionType){case p.SINGLE:if(null!=this.accordionSlot){const t=this.accordionSlot.assignedElements();for(let o=0;o<t.length;o++){const i=t[o];i instanceof d.NidocaAccordionItem&&i!=e&&(i.opened=!1)}}case p.MULTI:}t.stopPropagation()}};h.styles=n.css`
    :host {
      border-top-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }

    slot {
      font-size: 0;
    }
  `,i([(0,s.property)({type:l.NidocaTheme,converter:String}),r("design:type",String)],h.prototype,"theme",void 0),i([(0,s.property)({type:p,converter:String}),r("design:type",String)],h.prototype,"accordionType",void 0),i([(0,c.query)("#accordionSlot"),r("design:type",Object)],h.prototype,"accordionSlot",void 0),h=i([(0,a.customElement)("nidoca-accordion")],h),e.NidocaAccordion=h},5202:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaArticle=void 0;const n=o(9392),a=o(5595),s=o(5595);let c=class extends n.LitElement{constructor(){super(...arguments),this.overline="",this.title="",this.summary="",this.text=""}render(){return n.html`
      <div style="display:flex; flex-direction:column;">
        ${this.overline?n.html` <nidoca-text class="paddingBottom">${this.overline}</nidoca-text> `:n.html``}
        ${this.title?n.html` <nidoca-text-h2 class="paddingBottom">${this.title}</nidoca-text-h2> `:n.html``}
        ${this.summary?n.html` <nidoca-text-caption class="paddingBottom">${this.summary}</nidoca-text-caption> `:n.html``}
        ${this.text?n.html` <nidoca-text class="paddingBottom">${this.text}</nidoca-text>`:n.html``}
        <slot></slot>
      </div>
    `}};c.styles=n.css`
    :host {
      display: block;
    }
    slot {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
    }

    .paddingBottom {
      padding-bottom: var(--space-2);
    }
  `,i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"overline",void 0),i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"title",void 0),i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"summary",void 0),i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"text",void 0),c=i([(0,a.customElement)("nidoca-article")],c),e.NidocaArticle=c},1052:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaAvatar=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(6386);let l=class extends n.LitElement{constructor(){super(...arguments),this.imgSrc=""}render(){return n.html`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.imgSrc}" .richMediaProperties="${[c.NidocaImgProperties.ROUND]}"></nidoca-img-round>
                <nidoca-layout-spacer
                        left="var(--space)"
                        right="var(--space)"
                        top="var(--space)"
                        bottom="var(--space)"
                >
                    <slot></slot>
                </nidoca-layout-spacer>
            </div>
            </div>`}};l.styles=n.css`
    :host {
      display: block;
    }
  `,i([(0,s.property)({type:String}),r("design:type",String)],l.prototype,"imgSrc",void 0),l=i([(0,a.customElement)("nidoca-avatar")],l),e.NidocaAvatar=l},2756:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaBox=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(4432);let l=class extends n.LitElement{constructor(){super(...arguments),this.theme=c.NidocaTheme.transparent}render(){return n.html`
      ${c.NidocaThemeHelper.getStyle(this.theme)}
      <slot></slot>
    `}};l.styles=n.css`
    :host {
      display: block;
      padding: var(--space-6);
      box-sizing: border-box;
    }
    slot {
      display: block;
      margin: auto;
    }

    @media only screen and (min-width: 641px) and (max-width: 1007px) {
      :host {
        padding: var(--space-4);
      }
    }

    @media only screen and (max-width: 640px) {
      :host {
        padding: var(--space-2);
      }
    }
  `,i([(0,s.property)({type:c.NidocaTheme,converter:String}),r("design:type",Object)],l.prototype,"theme",void 0),l=i([(0,a.customElement)("nidoca-box")],l),e.NidocaBox=l},7443:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaButton=e.NidocaButtonType=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(5098);var l;!function(t){t.CONTAINED="CONTAINED",t.OUTLINED="OUTLINED",t.TEXT="TEXT"}(l=e.NidocaButtonType||(e.NidocaButtonType={}));let d=class extends n.LitElement{constructor(){super(...arguments),this.theme=c.NidocaTheme.primary,this.buttonType=l.CONTAINED,this.leadingIcon="",this.text=""}render(){return n.html`
      <style>
        .OUTLINED {
          color: var(--app-color-${this.theme}-background);
          background-color: var(--app-color-${this.theme});
          border-color: var(--app-color-${this.theme}-background);
        }

        .CONTAINED {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-background);
        }

        .TEXT {
          color: var(--app-color-${this.theme}-background);
        }

        :hover {
          filter: contrast(var(--app-color-percent-hover));
        }
      </style>
      <div
        class="container ${this.buttonType}"
        @click="${()=>{this.clicked()}}"
      >
        ${this.leadingIcon?n.html` <nidoca-icon .clickable="${!1}" .icon="${this.leadingIcon}"></nidoca-icon>`:n.html``}

        <nidoca-text-button text="${this.text}">
          <slot></slot>
        </nidoca-text-button>
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}};d.styles=n.css`
    :host,
    .fullWidth {
      display: block;
      width: 100%;
    }

    .container {
      cursor: pointer;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      font-family: inherit;
      text-align: center;
      vertical-align: center;
      border-style: solid;
      border-width: var(--border-width-min);
      padding: var(--space);
      height: var(--height-medium);
      box-sizing: border-box;
    }

    @media only screen and (orientation: portrait) {
      button,
      .btn {
        width: 100%;
      }
    }
  `,i([(0,s.property)({type:c.NidocaTheme,converter:String}),r("design:type",Object)],d.prototype,"theme",void 0),i([(0,s.property)({type:l,converter:String}),r("design:type",String)],d.prototype,"buttonType",void 0),i([(0,s.property)({type:String}),r("design:type",String)],d.prototype,"leadingIcon",void 0),i([(0,s.property)({type:String}),r("design:type",String)],d.prototype,"text",void 0),d=i([(0,a.customElement)("nidoca-button")],d),e.NidocaButton=d},3049:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaCard=void 0;const n=o(9392),a=o(5595),s=o(5098);let c=class extends n.LitElement{constructor(){super(...arguments),this.theme=s.NidocaTheme.surface}render(){return n.html`
      <style>
        :host {
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot></slot>
    `}};c.styles=n.css`
    :host {
      box-sizing: border-box;
      display: block;
      border-radius: 1rem;
      border-style: solid;
      border-width: var(--border-width-min);
      box-shadow: 0 var(--space) var(--space) rgba(0, 0, 0, 0.08), 0 var(--space) var(--space) rgba(0, 0, 0, 0.16);
    }
    slot {
      display: block;
    }
  `,i([(0,a.property)({type:s.NidocaTheme,converter:String}),r("design:type",String)],c.prototype,"theme",void 0),c=i([(0,a.customElement)("nidoca-card")],c),e.NidocaCard=c},8350:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaChip=void 0;const n=o(9392),a=o(5595),s=o(5595);let c=class extends n.LitElement{constructor(){super(...arguments),this.clickable=!0}render(){return n.html`
      <div class="chip ${this.clickable?"clickable":""}">
        <slot></slot>
      </div>
    `}};c.styles=n.css`
    .chip {
      display: inline-block;
      background: var(--app-color-surface-background-light);
      padding: 0 var(--space-4);
      border-radius: var(--line-height-3);
      line-height: var(--line-height-3);
    }

    .chip:hover {
      background: var(--app-color-surface-background-dark);
    }

    .clickable {
      cursor: pointer;
    }
  `,i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],c.prototype,"clickable",void 0),c=i([(0,a.customElement)("nidoca-chip")],c),e.NidocaChip=c},9656:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaCode=void 0;const n=o(9392),a=o(5595),s=o(5595);let c=class extends n.LitElement{constructor(){super(...arguments),this.code=""}render(){return n.html`
      <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
    `}};c.styles=n.css`
    :host {
      display: block;
    }
    pre {
      margin: 0;
      padding: 0;
      white-space: unset;
    }

    pre code {
      white-space: pre-line;
      display: block;
      line-height: var(--height-min);
      padding: 1em 1.5em;
      overflow-x: auto;
    }

    code {
      background: var(--app-color-surface-background);
      border-radius: 0.375em;
      border: solid 1px var(--app-color-surface-background-dark);
      font-family: 'Courier New', monospace;
      font-size: 0.85em;
      position: relative;
    }

    .icon-position {
      position: absolute;
      top: -24px;
      right: 0;
      opacity: 0.2;
    }
  `,i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"code",void 0),c=i([(0,a.customElement)("nidoca-code")],c),e.NidocaCode=c},996:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaContainer=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(4432);let l=class extends n.LitElement{constructor(){super(...arguments),this.theme=c.NidocaTheme.background}render(){return n.html`
      ${c.NidocaThemeHelper.getStyle(this.theme)}
      <slot></slot>
    `}};l.styles=n.css`
    :host {
      display: block;
    }

    slot {
      display: block;
      margin: auto;
      width: min-content;
    }

    @media only screen and (min-width: 641px) and (max-width: 1918px) {
      slot {
        width: 50%;
      }
    }

    @media only screen and (max-width: 640px) {
      slot {
        width: 90%;
      }
    }

    @media only screen and (min-width: 1919px) {
      slot {
        width: 75%;
      }
    }
  `,i([(0,s.property)({type:c.NidocaTheme,converter:String}),r("design:type",String)],l.prototype,"theme",void 0),l=i([(0,a.customElement)("nidoca-container")],l),e.NidocaContainer=l},7717:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaDashboardCard=e.NidocaDashboardBox100=e.NidocaDashboardBox50=e.NidocaDashboardBox25=e.NidocaDashboard=void 0;const n=o(9392),a=o(5595),s=o(5595);let c=class extends n.LitElement{render(){return n.html` <slot></slot>`}};c.styles=n.css`
    :host {
      display: block;
    }

    slot {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: stretch;
      align-items: stretch;
      width: 50%;
      margin: auto;
    }

    @media only screen and (max-width: 1007px) {
      slot {
        width: 100%;
      }
    }
  `,c=i([(0,a.customElement)("nidoca-dashboard")],c),e.NidocaDashboard=c;let l=class extends n.LitElement{render(){return n.html` <slot></slot>`}};l.styles=n.css`
    :host {
      display: block;
      width: 25%;
    }

    @media only screen and (max-width: 1919px) {
      :host {
        width: 50%;
      }
    }
  `,l=i([(0,a.customElement)("nidoca-dashboard-box-25")],l),e.NidocaDashboardBox25=l;let d=class extends n.LitElement{render(){return n.html` <slot></slot>`}};d.styles=n.css`
    :host {
      width: 50%;
      display: block;
    }
    @media only screen and (max-width: 1919px) {
      :host {
        width: 100%;
      }
    }
  `,d=i([(0,a.customElement)("nidoca-dashboard-box-50")],d),e.NidocaDashboardBox50=d;let p=class extends n.LitElement{render(){return n.html` <slot></slot>`}};p.styles=n.css`
    :host {
      width: 100%;
      display: block;
    }
  `,p=i([(0,a.customElement)("nidoca-dashboard-box-100")],p),e.NidocaDashboardBox100=p;let h=class extends n.LitElement{constructor(){super(...arguments),this.clickable=!0,this.title=""}render(){return n.html`
      <nidoca-card @click="${()=>this.clicked()}" class="${this.clickable?"clickable":""}">
        <nidoca-box>
          <nidoca-text-h6 style="padding-bottom: var(--space-2);">${this.title}</nidoca-text-h6>
          <slot></slot>
        </nidoca-box>
      </nidoca-card>
    `}clicked(){this.clickable&&this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:this,bubbles:!0,composed:!0}))}};h.styles=n.css`
    :host {
      padding: var(--space-2);
      box-sizing: border-box;
    }

    :host,
    nidoca-card {
      display: block;
      height: 100%;
      width: 100%;
    }

    .clickable {
      cursor: pointer;
    }
  `,i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],h.prototype,"clickable",void 0),i([(0,s.property)({type:String}),r("design:type",String)],h.prototype,"title",void 0),h=i([(0,a.customElement)("nidoca-dashboard-card")],h),e.NidocaDashboardCard=h},3038:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaDialogDecision=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(4432);let l=class extends n.LitElement{constructor(){super(...arguments),this.show=!1,this.title="Ja oder Nein ?",this.description="Entscheide dich",this.labelButtonYes="Ja",this.labelButtonNo="Nein"}render(){return n.html`<nidoca-dialog .show="${this.show}">
      <nidoca-box style="width:300px;">
        <nidoca-text-h2 style="padding-bottom:var(--space-2);">${this.title}</nidoca-text-h2>
        <nidoca-text style="padding-bottom:var(--space-2);">${this.description} </nidoca-text>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${c.NidocaButtonType.TEXT}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-yes",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonYes}
        </nidoca-button>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${c.NidocaButtonType.TEXT}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-no",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonNo}
        </nidoca-button>
      </nidoca-box>
    </nidoca-dialog>`}};l.styles=n.css``,i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"show",void 0),i([(0,s.property)({type:String}),r("design:type",String)],l.prototype,"title",void 0),i([(0,s.property)({type:String}),r("design:type",String)],l.prototype,"description",void 0),i([(0,s.property)({type:String}),r("design:type",String)],l.prototype,"labelButtonYes",void 0),i([(0,s.property)({type:String}),r("design:type",String)],l.prototype,"labelButtonNo",void 0),l=i([(0,a.customElement)("nidoca-dialog-decision")],l),e.NidocaDialogDecision=l},1442:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaDialog=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(1686);let l=class extends n.LitElement{constructor(){super(...arguments),this.show=!1}render(){return this.show?n.html`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${c.NidocaTransitionType.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:n.html``}};l.styles=n.css`
    .fullScreen {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .opacScreen {
      z-index: 20;
      opacity: 0.85;
      background-color: var(--app-color-surface-background);
    }

    .wrapperOutside {
      display: table;
      z-index: 30;
    }

    .wrapperInside {
      display: table-cell;
      vertical-align: middle;
    }

    .dialogContainer {
      width: max-content;
      height: auto;

      padding: 0;
      margin: 0 auto;
    }
  `,i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"show",void 0),l=i([(0,a.customElement)("nidoca-dialog")],l),e.NidocaDialog=l},1617:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaElevation=void 0;const n=o(9392),a=o(5595),s=o(5595);let c=class extends n.LitElement{constructor(){super(),this.show=!1,addEventListener("click",(t=>{var e;const o=null===(e=this.associatedElement)||void 0===e?void 0:e.getBoundingClientRect();o&&(o.top>t.clientY||o.right<t.clientX||o.left>t.clientX||o.bottom<t.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return this.show?n.html`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:n.html``}calculatePositionStyle(t){let e="";if(t){const o=t.getBoundingClientRect();o.right>window.innerWidth/2?e+=`right:${window.innerWidth-o.right}px;`:e+=`left:${o.left}px;`,o.top>window.innerHeight/2?e+=`bottom:${o.height+window.innerHeight-o.top}px;`:e+=`top:${o.bottom}px;`}return e}};c.styles=n.css`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],c.prototype,"show",void 0),i([(0,s.property)({type:Object}),r("design:type",Object)],c.prototype,"associatedElement",void 0),c=i([(0,a.customElement)("nidoca-elevation"),r("design:paramtypes",[])],c),e.NidocaElevation=c},2666:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaFormAbstractInputElement=e.FormOutputData=void 0;const i=o(9392);e.FormOutputData=class{constructor(){this.key=""}};class r extends i.LitElement{}e.NidocaFormAbstractInputElement=r},8865:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaFormCaptcha=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(5595),l=o(796),d=o(4432),p=o(8353);let h=class extends n.LitElement{constructor(){super(...arguments),this.label="",this.placeholder="",this.name="",this.min=1,this.max=10,this.errorText="",this.numberOne=1,this.numberTwo=1}render(){return n.html`
      <nidoca-form-text
        theme="${(0,l.ifDefined)(this.theme)}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${p.NidocaFormTextType.NUMBER}"
        value=""
      ></nidoca-form-text>
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,e){return Math.random()*(e-t)+t}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const t=this.isValid();return t&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),t}};h.styles=n.css`
    :host {
      display: block;
      width: 100%;
    }
  `,i([(0,s.property)({type:d.NidocaTheme,converter:String}),r("design:type",Object)],h.prototype,"theme",void 0),i([(0,s.property)({type:String}),r("design:type",String)],h.prototype,"label",void 0),i([(0,s.property)({type:String}),r("design:type",String)],h.prototype,"placeholder",void 0),i([(0,s.property)({type:String}),r("design:type",String)],h.prototype,"name",void 0),i([(0,s.property)({type:Number}),r("design:type",Number)],h.prototype,"min",void 0),i([(0,s.property)({type:Number}),r("design:type",Number)],h.prototype,"max",void 0),i([(0,s.property)({type:String}),r("design:type",String)],h.prototype,"errorText",void 0),i([(0,c.query)("#inputfield"),r("design:type",Object)],h.prototype,"inputfield",void 0),h=i([(0,a.customElement)("nidoca-form-captcha")],h),e.NidocaFormCaptcha=h},4404:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaFormChangePassword=void 0;const n=o(9392),a=o(5595),s=o(4432);let c=class extends n.LitElement{constructor(){super(...arguments),this.theme=s.NidocaTheme.surface,this.label="Passwort ändern",this.oldPasswordLabel="Altes Passwort",this.newPasswordLabel="Neues Passwort",this.repeatNewPasswordLabel="Wiederholen",this.buttonLabel="Ändern",this.showErrorMessageSamePassword=!1,this.errorMessageSamePasswordLabel="Altes und neues Passwort dürfen nicht übereinstimmen.",this.showErrorMessagePasswordDiff=!1,this.errorMessagePasswordDiffLabel="Die Passwörter stimmen nicht überein"}render(){return n.html`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            id="oldPassword"
            theme="${s.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${s.NidocaFormTextType.PASSWORD}"
            label="${this.oldPasswordLabel}"
            name="oldPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="newPassword"
            theme="${s.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${s.NidocaFormTextType.PASSWORD}"
            label="${this.newPasswordLabel}"
            name="newPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="repeatNewPassword"
            theme="${s.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${s.NidocaFormTextType.PASSWORD}"
            label="${this.repeatNewPasswordLabel}"
            name="repeatNewPassword"
            required
          ></nidoca-form-text>

          <nidoca-button
            theme="${s.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.changePassword()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
        ${this.showErrorMessageSamePassword?n.html` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessageSamePasswordLabel}"
            ></nidoca-text>`:n.html``}
        ${this.showErrorMessagePasswordDiff?n.html` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessagePasswordDiffLabel}"
            ></nidoca-text>`:n.html``}
      </nidoca-box>
    `}changePassword(){var t,e,o,i,r;(null===(t=this.formComponent)||void 0===t?void 0:t.validate())&&(this.showErrorMessagePasswordDiff=!1,(null===(e=this.newPasswordInputField)||void 0===e?void 0:e.getOutputData().value)!=(null===(o=this.repeatNewPasswordInputField)||void 0===o?void 0:o.getOutputData().value)&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,(null===(i=this.oldPasswordInputField)||void 0===i?void 0:i.getOutputData().value)==(null===(r=this.newPasswordInputField)||void 0===r?void 0:r.getOutputData().value)&&(this.showErrorMessageSamePassword=!0),this.showErrorMessagePasswordDiff||this.showErrorMessageSamePassword?this.requestUpdate():this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})))}};c.styles=n.css`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,i([(0,a.property)({type:s.NidocaTheme,converter:String}),r("design:type",String)],c.prototype,"theme",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],c.prototype,"label",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],c.prototype,"oldPasswordLabel",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],c.prototype,"newPasswordLabel",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],c.prototype,"repeatNewPasswordLabel",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],c.prototype,"buttonLabel",void 0),i([(0,a.query)("#form"),r("design:type",Object)],c.prototype,"formComponent",void 0),i([(0,a.query)("#oldPassword"),r("design:type",Object)],c.prototype,"oldPasswordInputField",void 0),i([(0,a.query)("#newPassword"),r("design:type",Object)],c.prototype,"newPasswordInputField",void 0),i([(0,a.query)("#repeatNewPassword"),r("design:type",Object)],c.prototype,"repeatNewPasswordInputField",void 0),i([(0,a.property)(),r("design:type",String)],c.prototype,"errorMessageSamePasswordLabel",void 0),i([(0,a.property)(),r("design:type",String)],c.prototype,"errorMessagePasswordDiffLabel",void 0),c=i([(0,a.customElement)("nidoca-form-change-password")],c),e.NidocaFormChangePassword=c},9261:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaFormCombobox=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(5595),l=o(2386),d=o(3012),p=o(2666),h=o(5098);let f=class extends p.NidocaFormAbstractInputElement{constructor(){super(...arguments),this.theme=h.NidocaTheme.surface,this.trailingIcon="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.value="",this.options=[],this.name="",this.required=!0,this.multiple=!1,this.size=1}render(){return n.html` <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }

        .parentContainer:focus-within,
        ::slotted(.parentContainer:focus-within) {
          border-color: var(--app-color-${this.theme}-selected);
          filter: brightness(var(--app-darken-1));
        }

        option {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <div class="parentContainer">
        ${this.trailingIcon?n.html` <nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:n.html``}
        <div class="container">
          <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
          <select
            id="selectElement"
            name="${this.name}"
            size="${this.size}"
            ?required="${this.required}"
            ?multiple="${this.multiple}"
          >
            ${(0,d.guard)([this.value,this.options],(()=>n.html`
                ${(0,l.repeat)(this.options,(t=>null==t?n.html` <option></option>`:this.isSelectedOption(t)?n.html` <option value="${t.key}" selected>${t.value}</option> `:n.html` <option value="${t.key}">${t.value}</option> `))}
              `))}
          </select>
        </div>
      </div>
      ${this.infoText||this.warningText||this.errorText?n.html`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?n.html` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:n.html``}
              ${this.warningText?n.html` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:n.html``}
              ${this.errorText?n.html` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:n.html``}
            </div>
          `:n.html``}`}getOutputData(){let t=this.value;if(null!=this.selectElement&&this.multiple){t=[];for(let e=0,o=this.selectElement.options.length;e<o;e++)this.selectElement.options[e].selected&&t.push(this.options[e].key)}else null!=this.selectElement&&(t=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(t){if(this.multiple){let e=!1;for(const o of this.value)if(e=t.key===o,e)return!0}return this.value===t.key}static enumToOptions(t,e=!0){const o=[];return e&&o.push({key:"",value:""}),Object.keys(t).forEach((e=>{o.push({key:e,value:t[e]})})),o}static stringArrayToOptions(t,e=!0){const o=[];return e&&o.push({key:"",value:""}),t.forEach((t=>{o.push({key:t,value:t})})),o}static toComboboxOptions(t=null,e=null){if(null==t)return[];const o=[];return Object.values(t).forEach((i=>{let r=String(Object.keys(t)[Object.values(t).indexOf(i)]);e&&(r=r.concat(e)),o.push({key:i,value:r})})),o}};f.styles=n.css`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    .parentContainer {
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      padding: var(--space);
      height: var(--height-max);
      box-sizing: border-box;
    }

    .container {
      width: 100%;
      display: flex;
      align-content: center;
      flex-direction: column;
    }

    option {
      padding: 0;
    }

    select {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      height: var(--height-min);
      line-height: var(--height-min);
    }

    select[multiple] {
      line-height: unset;
      height: auto;
    }

    select:focus {
      outline: none;
      box-shadow: none;
    }

    select:valid {
      outline: none;
      box-shadow: none;
    }
  `,i([(0,s.property)({type:h.NidocaTheme,converter:String}),r("design:type",String)],f.prototype,"theme",void 0),i([(0,s.property)({type:String}),r("design:type",String)],f.prototype,"trailingIcon",void 0),i([(0,s.property)({type:String}),r("design:type",String)],f.prototype,"label",void 0),i([(0,s.property)({type:String}),r("design:type",String)],f.prototype,"errorText",void 0),i([(0,s.property)({type:String}),r("design:type",String)],f.prototype,"infoText",void 0),i([(0,s.property)({type:String}),r("design:type",String)],f.prototype,"warningText",void 0),i([(0,s.property)(),r("design:type",Object)],f.prototype,"value",void 0),i([(0,s.property)({type:Array}),r("design:type",Array)],f.prototype,"options",void 0),i([(0,s.property)({type:String}),r("design:type",String)],f.prototype,"name",void 0),i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],f.prototype,"required",void 0),i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],f.prototype,"multiple",void 0),i([(0,s.property)({type:Number}),r("design:type",Number)],f.prototype,"size",void 0),i([(0,c.query)("#selectElement"),r("design:type",Object)],f.prototype,"selectElement",void 0),f=i([(0,a.customElement)("nidoca-form-combobox")],f),e.NidocaFormCombobox=f},6698:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaFormContact=void 0;const n=o(9392),a=o(5595),s=o(796),c=o(4432);let l=class extends n.LitElement{constructor(){super(...arguments),this.theme=c.NidocaTheme.primary,this.label="Deine Nachricht",this.nameLabel="Dein Name",this.emailLabel="Deine Email",this.titleLabel="Betreff",this.messageLabel="Deine Nachricht",this.buttonLabel="Senden"}render(){return n.html`
      <nidoca-box theme="${(0,s.ifDefined)(this.theme)}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>
          <nidoca-form-text
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            name="name"
            textType="${c.NidocaFormTextType.TEXT}"
            value=""
            label="${this.nameLabel}"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${c.NidocaFormTextType.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            label="${this.titleLabel}"
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${c.NidocaFormTextType.TEXT}"
            value=""
            label="title"
            required
          ></nidoca-form-text>
          <nidoca-form-textarea
            label="${this.messageLabel}"
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            name="message"
            trailingIcon="vpn_key"
            required
          ></nidoca-form-textarea>
          <nidoca-button
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.sendMessage()}"
            .buttonType="${c.NidocaButtonType.CONTAINED}"
            >${this.buttonLabel}
          </nidoca-button>
        </nidoca-form>
      </nidoca-box>
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};l.styles=n.css`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,i([(0,a.property)({type:c.NidocaTheme,converter:String}),r("design:type",Object)],l.prototype,"theme",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],l.prototype,"label",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],l.prototype,"nameLabel",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],l.prototype,"emailLabel",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],l.prototype,"titleLabel",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],l.prototype,"messageLabel",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],l.prototype,"buttonLabel",void 0),i([(0,a.query)("#authenitcate-form"),r("design:type",Object)],l.prototype,"formComponent",void 0),l=i([(0,a.customElement)("nidoca-form-contact")],l),e.NidocaFormContact=l},6692:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaFormDate=void 0;const n=o(5595),a=o(4432);let s=class extends a.NidocaFormText{constructor(){super(),this.type=a.NidocaFormTextType.DATE}};s=i([(0,n.customElement)("nidoca-form-date"),r("design:paramtypes",[])],s),e.NidocaFormDate=s},9287:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaFormNewsletter=void 0;const n=o(9392),a=o(5595),s=o(796),c=o(4432);let l=class extends n.LitElement{constructor(){super(...arguments),this.theme=c.NidocaTheme.primary,this.label="Newsletter",this.emailLabel="Deine Emailadresse",this.buttonLabel="Registrieren"}render(){return n.html`
      <nidoca-box theme="${(0,s.ifDefined)(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${c.NidocaFormTextType.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};l.styles=n.css`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,i([(0,a.property)({type:c.NidocaTheme,converter:String}),r("design:type",Object)],l.prototype,"theme",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],l.prototype,"label",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],l.prototype,"emailLabel",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],l.prototype,"buttonLabel",void 0),i([(0,a.query)("#form"),r("design:type",Object)],l.prototype,"formComponent",void 0),l=i([(0,a.customElement)("nidoca-form-newsletter")],l),e.NidocaFormNewsletter=l},7546:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaFormRegister=void 0;const n=o(9392),a=o(5595),s=o(796),c=o(4432);let l=class extends n.LitElement{constructor(){super(...arguments),this.theme=c.NidocaTheme.primary,this.label="Registrieren",this.emailLabel="Email",this.passwordLabel="Passwort",this.buttonLabel="Registrieren"}render(){return n.html`
      <nidoca-box theme="${(0,s.ifDefined)(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${c.NidocaFormTextType.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="account_circle"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-form-text
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${c.NidocaFormTextType.PASSWORD}"
            label="${this.passwordLabel}"
            name="password"
            trailingIcon="vpn_key"
            required
            minLength="8"
          ></nidoca-form-text>

          <nidoca-button
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};l.styles=n.css`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,i([(0,a.property)({type:c.NidocaTheme,converter:String}),r("design:type",Object)],l.prototype,"theme",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],l.prototype,"label",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],l.prototype,"emailLabel",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],l.prototype,"passwordLabel",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],l.prototype,"buttonLabel",void 0),i([(0,a.query)("#form"),r("design:type",Object)],l.prototype,"formComponent",void 0),l=i([(0,a.customElement)("nidoca-form-register")],l),e.NidocaFormRegister=l},9637:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaFormResetPassword=void 0;const n=o(9392),a=o(5595),s=o(4432);let c=class extends n.LitElement{constructor(){super(...arguments),this.theme=s.NidocaTheme.primary,this.label="Passwort zurücksetzen",this.emailLabel="Deine Emailadresse",this.buttonLabel="Zurücksetzen"}render(){return n.html`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${s.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${s.NidocaFormTextType.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${s.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};c.styles=n.css`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,i([(0,a.property)({type:s.NidocaTheme,converter:String}),r("design:type",String)],c.prototype,"theme",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],c.prototype,"label",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],c.prototype,"emailLabel",void 0),i([(0,a.property)({type:String,converter:String}),r("design:type",String)],c.prototype,"buttonLabel",void 0),i([(0,a.query)("#form"),r("design:type",Object)],c.prototype,"formComponent",void 0),c=i([(0,a.customElement)("nidoca-form-reset-password")],c),e.NidocaFormResetPassword=c},9754:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaFormSwitch=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(5595),l=o(4432),d=o(2666);let p=class extends d.NidocaFormAbstractInputElement{constructor(){super(),this.name="",this.label="",this.infoText="",this.errorText="",this.warningText="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=l.NidocaTheme.primary,this.theme=l.NidocaThemeHelper.prototype.getParentTheme(this)||l.NidocaTheme.background}render(){return n.html`
      <style>
        .slider {
          background-color: var(--app-color-${this.theme}-border);
        }

        .slider:before {
          background-color: var(--app-color-${this.theme}-background);
        }

        input:checked + .slider:before {
          background-color: var(--app-color-${this.theme});
        }

        input:checked + .slider {
          background-color: var(--app-color-${this.theme}-selected);
        }

        input:focus + .slider {
          box-shadow: 0 0 20px var(--app-color-${this.theme}-border);
        }
      </style>

      <nidoca-list-item>
        <nidoca-text-subtitle>
          ${this.label}
          <slot></slot>
        </nidoca-text-subtitle>

        ${this.infoText.length>0?n.html` <nidoca-text-caption text="${this.infoText}"></nidoca-text-caption>`:n.html``}

        <label class="switch" slot="meta">
          <input
            id="inputElement"
            name="${this.name}"
            type="checkbox"
            ?checked="${this.checked}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
            @input="${t=>{this.checked=t.target.checked,console.log(this.checked)}}"
          />
          <span class="slider round"></span>
        </label>
      </nidoca-list-item>

      ${this.warningText?n.html` <nidoca-text-error text="${this.warningText}"></nidoca-text-error>`:n.html``}
      ${this.errorText?n.html` <nidoca-text-error text="${this.errorText}"></nidoca-text-error>`:n.html``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};p.styles=n.css`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: var(--height-max);
    }

    .switch {
      position: relative;
      display: inline-block;
      height: 18px;
      width: 48px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      width: 40px;
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: '';
      height: 24px;
      width: 24px;
      left: 0px;
      bottom: -3px;

      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(16px);
      -ms-transform: translateX(16px);
      transform: translateX(16px);
    }

    .slider.round {
      border-radius: 12px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  `,i([(0,s.property)({type:String}),r("design:type",String)],p.prototype,"name",void 0),i([(0,s.property)({type:String}),r("design:type",String)],p.prototype,"label",void 0),i([(0,s.property)({type:String}),r("design:type",String)],p.prototype,"infoText",void 0),i([(0,s.property)({type:String}),r("design:type",String)],p.prototype,"errorText",void 0),i([(0,s.property)({type:String}),r("design:type",String)],p.prototype,"warningText",void 0),i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],p.prototype,"required",void 0),i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],p.prototype,"disabled",void 0),i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],p.prototype,"checked",void 0),i([(0,s.property)({type:String}),r("design:type",String)],p.prototype,"theme",void 0),i([(0,c.query)("#inputElement"),r("design:type",Object)],p.prototype,"inputElement",void 0),p=i([(0,a.customElement)("nidoca-form-switch"),r("design:paramtypes",[])],p),e.NidocaFormSwitch=p},8353:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaFormText=e.NidocaFormTextType=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(5595),l=o(796),d=o(5098),p=o(2666);var h;!function(t){t.COLOR="color",t.EMAIL="email",t.HIDDEN="hidden",t.NUMBER="number",t.PASSWORD="password",t.TEL="tel",t.TEXT="text",t.SEARCH="search",t.URL="url",t.DATE="date",t.DATETIME_LOCAL="datetime-local",t.MONTH="month",t.TIME="time",t.WEEK="week"}(h=e.NidocaFormTextType||(e.NidocaFormTextType={}));let f=class extends p.NidocaFormAbstractInputElement{constructor(){super(...arguments),this.type=h.TEXT,this.label="",this.placeholder="",this.trailingIcon="",this.errorText="",this.infoText="",this.warningText="",this.name="",this.value="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=d.NidocaTheme.surface}render(){return this.type==h.HIDDEN?n.html`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:n.html` <style>
            .parentContainer,
            ::slotted(.parentContainer) {
              color: var(--app-color-${this.theme});
              background-color: var(--app-color-${this.theme}-background);
            }

            .parentContainer,
            ::slotted(.parentContainer) {
              border-color: var(--app-color-${this.theme}-border);
            }

            .parentContainer:focus-within,
            ::slotted(.parentContainer:focus-within) {
              border-color: var(--app-color-${this.theme}-border);
              filter: contrast(var(--app-color-percent-selected));
            }
          </style>
          <div class="parentContainer border">
            ${this.trailingIcon?n.html` <nidoca-icon
                  style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
                  icon="${this.trailingIcon}"
                ></nidoca-icon>`:n.html``}
            <div class="container">
              <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
              <input
                id="inputElement"
                name="${this.name}"
                .type="${this.type}"
                value="${this.value}"
                placeholder="${this.placeholder}"
                size="${(0,l.ifDefined)(this.size)}"
                minlength="${(0,l.ifDefined)(this.minlength)}"
                maxlength="${(0,l.ifDefined)(this.maxlength)}"
                pattern="${(0,l.ifDefined)(this.pattern)}"
                min="${(0,l.ifDefined)(this.min)}"
                max="${(0,l.ifDefined)(this.max)}"
                step="${(0,l.ifDefined)(this.step)}"
                ?required="${this.required}"
                ?disabled="${this.disabled}"
                ?checked="${this.checked}"
              />
            </div>
          </div>

          ${this.infoText||this.warningText||this.errorText?n.html`
                <div style="display:flex;flex-direction:column;">
                  ${this.infoText?n.html` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:n.html``}
                  ${this.warningText?n.html` <nidoca-text-warning
                        style="color:var(--app-color-warning-background)"
                        text="${this.warningText}"
                      ></nidoca-text-warning>`:n.html``}
                  ${this.errorText?n.html` <nidoca-text-error
                        style="color:var(--app-color-error-background)"
                        text="${this.errorText}"
                      ></nidoca-text-error>`:n.html``}
                </div>
              `:n.html``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:null==e?void 0:e.trim()}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),""==this.errorText}};f.styles=n.css`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    .parentContainer {
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;
      padding: var(--space);
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      height: var(--height-max);
      box-sizing: border-box;
    }

    .container {
      width: 100%;
      display: flex;
      align-content: center;
      flex-direction: column;
    }

    input {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      background: inherit;
      color: inherit;
      line-height: var(--height-min);
    }

    input:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }

    input:focus::placeholder {
      color: transparent;
    }
  `,i([(0,s.property)({type:h,converter:String}),r("design:type",String)],f.prototype,"type",void 0),i([(0,s.property)({type:String}),r("design:type",String)],f.prototype,"label",void 0),i([(0,s.property)({type:String}),r("design:type",String)],f.prototype,"placeholder",void 0),i([(0,s.property)({type:String}),r("design:type",String)],f.prototype,"trailingIcon",void 0),i([(0,s.property)({type:String}),r("design:type",String)],f.prototype,"errorText",void 0),i([(0,s.property)({type:String}),r("design:type",String)],f.prototype,"infoText",void 0),i([(0,s.property)({type:String}),r("design:type",String)],f.prototype,"warningText",void 0),i([(0,s.property)({type:String}),r("design:type",String)],f.prototype,"name",void 0),i([(0,s.property)(),r("design:type",String)],f.prototype,"value",void 0),i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],f.prototype,"required",void 0),i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],f.prototype,"disabled",void 0),i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],f.prototype,"checked",void 0),i([(0,s.property)({type:Number}),r("design:type",Object)],f.prototype,"maxlength",void 0),i([(0,s.property)({type:Number}),r("design:type",Object)],f.prototype,"minlength",void 0),i([(0,s.property)({type:Number}),r("design:type",Object)],f.prototype,"min",void 0),i([(0,s.property)({type:Number}),r("design:type",Object)],f.prototype,"max",void 0),i([(0,s.property)({type:String}),r("design:type",Object)],f.prototype,"step",void 0),i([(0,s.property)({type:Number}),r("design:type",Object)],f.prototype,"size",void 0),i([(0,s.property)({type:String}),r("design:type",Object)],f.prototype,"pattern",void 0),i([(0,c.query)("#inputElement"),r("design:type",Object)],f.prototype,"inputElement",void 0),i([(0,s.property)({type:d.NidocaTheme,converter:String}),r("design:type",String)],f.prototype,"theme",void 0),f=i([(0,a.customElement)("nidoca-form-text")],f),e.NidocaFormText=f},8976:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaFormTextarea=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(5595),l=o(4432),d=o(2666);let p=class extends d.NidocaFormAbstractInputElement{constructor(){super(...arguments),this.theme=l.NidocaTheme.surface,this.infoText="",this.warningText="",this.errorText="",this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.rows=5}render(){return n.html` <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        .parentContainer,
        ::slotted(.parentContainer) {
          border-color: var(--app-color-${this.theme}-border);
        }

        .parentContainer:focus-within,
        ::slotted(.parentContainer:focus-within) {
          filter: contrast(var(--app-color-percent-hover));
        }
      </style>
      <div class="parentContainer">
        <div class="container">
          <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>

          <textarea
            id="inputElement"
            name="${this.name}"
            placeholder="${this.placeholder}"
            rows="${this.rows}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
          >
${this.value}</textarea
          >
        </div>
      </div>

      ${this.infoText||this.warningText||this.errorText?n.html`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?n.html` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:n.html``}
              ${this.warningText?n.html` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:n.html``}
              ${this.errorText?n.html` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:n.html``}
            </div>
          `:n.html``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};p.styles=n.css`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    .parentContainer {
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      padding: var(--space);
    }

    .container {
      width: 100%;
      display: flex;
      align-content: center;
      flex-direction: column;
    }

    textarea {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      line-height: var(--height-min);
    }
    textarea:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
    textarea:focus::placeholder {
      color: transparent;
    }
  `,i([(0,s.property)({type:l.NidocaTheme,converter:String}),r("design:type",String)],p.prototype,"theme",void 0),i([(0,s.property)({type:String}),r("design:type",String)],p.prototype,"infoText",void 0),i([(0,s.property)({type:String}),r("design:type",String)],p.prototype,"warningText",void 0),i([(0,s.property)({type:String}),r("design:type",String)],p.prototype,"errorText",void 0),i([(0,s.property)({type:String}),r("design:type",String)],p.prototype,"name",void 0),i([(0,s.property)(),r("design:type",String)],p.prototype,"value",void 0),i([(0,s.property)({type:String}),r("design:type",String)],p.prototype,"label",void 0),i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],p.prototype,"required",void 0),i([(0,s.property)({type:String}),r("design:type",String)],p.prototype,"placeholder",void 0),i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],p.prototype,"disabled",void 0),i([(0,s.property)({type:Number}),r("design:type",Number)],p.prototype,"rows",void 0),i([(0,c.query)("#inputElement"),r("design:type",Object)],p.prototype,"inputElement",void 0),p=i([(0,a.customElement)("nidoca-form-textarea")],p),e.NidocaFormTextarea=p},4697:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaFormUpload=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(5595),l=o(796),d=o(4432),p=o(2666);let h=class extends p.NidocaFormAbstractInputElement{constructor(){super(...arguments),this.theme=d.NidocaTheme.primary}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return n.html`
      <nidoca-box theme="${(0,l.ifDefined)(this.theme)}">
        <div class="container">
          <nidoca-icon
            clickable
            class="icon"
            @nidoca-event-icon-clicked="${()=>this.upload()}"
            icon="cloud_upload"
          ></nidoca-icon>

          Upload your Files
          <input style="display:none;" id="inputElement" name="file" type="file" />
        </div>
      </nidoca-box>
    `}upload(){var t;null===(t=this.inputElement)||void 0===t||t.click()}};h.styles=n.css`
    :host,
    slot {
      display: block;
      width: 100%;
    }

    .container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: center;
    }

    .icon {
      font-size: 96px;
      align-self: center;
    }
  `,i([(0,s.property)({type:d.NidocaTheme,converter:String}),r("design:type",Object)],h.prototype,"theme",void 0),i([(0,c.query)("#inputElement"),r("design:type",Object)],h.prototype,"inputElement",void 0),h=i([(0,a.customElement)("nidoca-form-upload")],h),e.NidocaFormUpload=h},3515:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaForm=e.NidocaFormOutputData=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(5595),l=o(2666);e.NidocaFormOutputData=class{constructor(){this.formData=FormData.prototype}};let d=class extends n.LitElement{constructor(){super(...arguments),this.autocomplete=!0}render(){return n.html`
      <form autocomplete="${this.autocomplete?"on":"off"}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){const t=new FormData,e={};for(const o of this.getInputElements(this.slotElement)){const i=o.getOutputData();e[i.key]=i.value,t.append(i.key,i.value)}const o={};return o.jsonObject=e,o.formData=t,o}validate(){let t=!0;for(const e of this.getInputElements(this.slotElement))e.validate()||(t=!1);return t||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),t}getInputElements(t){if(null==t)return[];const e=[],o=t.assignedElements({flatten:!0});for(let t=0;t<o.length;t++){const i=o[t];this.recursiveInputElementSearch(i,e)}return e}recursiveInputElementSearch(t,e){if(t instanceof l.NidocaFormAbstractInputElement)e.push(t);else if(t.hasChildNodes()){const o=t.children;for(const t of[].slice.call(o))this.recursiveInputElementSearch(t,e)}}};d.styles=n.css`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `,i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],d.prototype,"autocomplete",void 0),i([(0,c.query)("#slotElement"),r("design:type",Object)],d.prototype,"slotElement",void 0),d=i([(0,a.customElement)("nidoca-form")],d),e.NidocaForm=d},6987:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaGallery=void 0;const r=o(9392),n=o(5595);let a=class extends r.LitElement{render(){return r.html`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements();for(let t=0;t<o.length;t++){const e=o[t].classList;e.contains("flexItem")||e.add("flexItem"),e.contains("flexItemDevice")||e.add("flexItemDevice")}}};a.styles=r.css`
    slot,
    ::slotted(slot) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    .flexItem,
    ::slotted(.flexItem) {
      flex-basis: 24%;
      padding-top: var(--space-3);
    }
  `,a=i([(0,n.customElement)("nidoca-gallery")],a),e.NidocaGallery=a},7457:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaHr=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(5098);let l=class extends n.LitElement{constructor(){super(),this.theme=c.NidocaThemeHelper.prototype.getParentTheme(this)||c.NidocaTheme.background}render(){return n.html`
      <style>
        hr {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
      </style>
      <hr />
    `}};l.styles=n.css`
    :host,
    ::slotted(:host) {
      display: block;
      padding-top: var(--space-4);
      padding-bottom: var(--space-4);
    }
  `,i([(0,s.property)({type:c.NidocaTheme,converter:String}),r("design:type",String)],l.prototype,"theme",void 0),l=i([(0,a.customElement)("nidoca-hr"),r("design:paramtypes",[])],l),e.NidocaHr=l},3155:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},n=this&&this.__awaiter||function(t,e,o,i){return new(o||(o=Promise))((function(r,n){function a(t){try{c(i.next(t))}catch(t){n(t)}}function s(t){try{c(i.throw(t))}catch(t){n(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}c((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaIconExtended=e.NidocaIconShadowType=void 0;const a=o(9392),s=o(5595),c=o(5595),l=o(4432);class d{}e.NidocaIconShadowType=d,d.NONE="NONE",d.DEFAULT_SHADOW="DEFAULT_SHADOW",d.SHADOW_1="SHADOW_1",d.SHADOW_2="SHADOW_2",d.SHADOW_3="SHADOW_3";let p=class extends a.LitElement{constructor(){super(...arguments),this.theme=l.NidocaTheme.primary,this.shadowType=d.DEFAULT_SHADOW,this.icon="",this.clickable=!0,this.deactivated=!1}render(){return a.html`
      <style>
        .iconExtended {
          display: inline-block;
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <span class="iconExtended round ${this.shadowType}">
        <nidoca-icon
          .deactivated="${this.deactivated}"
          .clickable="${this.clickable}"
          icon="${this.icon}"
          style="font-size: inherit;"
        ></nidoca-icon>
      </span>
    `}clicked(){return n(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};p.styles=a.css`
    .round {
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      border-radius: 50%;
    }

    .DEFAULT_SHADOW {
      -moz-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
      -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
      box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
    }

    .SHADOW_1 {
      -moz-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
      -webkit-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
      box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
    }

    .SHADOW_2 {
      -moz-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
      -webkit-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
    }

    .SHADOW_3 {
      -moz-box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
      -webkit-box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
      box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
    }
  `,i([(0,c.property)({type:String}),r("design:type",String)],p.prototype,"theme",void 0),i([(0,c.property)({type:Object}),r("design:type",d)],p.prototype,"shadowType",void 0),i([(0,c.property)({type:String}),r("design:type",String)],p.prototype,"icon",void 0),i([(0,c.property)({type:Boolean}),r("design:type",Boolean)],p.prototype,"clickable",void 0),i([(0,c.property)({type:Boolean}),r("design:type",Boolean)],p.prototype,"deactivated",void 0),p=i([(0,s.customElement)("nidoca-icon-extended")],p),e.NidocaIconExtended=p},8969:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaIconWithDescription=void 0;const n=o(9392),a=o(5595),s=o(5595);let c=class extends n.LitElement{constructor(){super(...arguments),this.primaryText="",this.text="",this.icon=""}render(){return n.html`
      <nidoca-icon icon="${this.icon}" style="font-size: 8vw; padding:var(--space-4);"></nidoca-icon>
      <nidoca-text
        style="padding-left:var(--space-4);padding-right:var(--space-4);padding-bottom:var(--space-4);text-align:center;"
      >
        ${this.text}
        <slot></slot>
      </nidoca-text>
    `}};c.styles=n.css`
    :host {
      display: block;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"primaryText",void 0),i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"text",void 0),i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"icon",void 0),c=i([(0,a.customElement)("nidoca-icon-with-description")],c),e.NidocaIconWithDescription=c},1465:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},n=this&&this.__awaiter||function(t,e,o,i){return new(o||(o=Promise))((function(r,n){function a(t){try{c(i.next(t))}catch(t){n(t)}}function s(t){try{c(i.throw(t))}catch(t){n(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}c((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaIcon=void 0;const a=o(9392),s=o(5595),c=o(5595);let l=class extends a.LitElement{constructor(){super(...arguments),this.icon="",this.clickable=!0,this.deactivated=!1,this.primaryText=""}render(){return a.html`
      <i
        class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
        title="${this.primaryText}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `}clicked(){return n(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};l.styles=a.css`
    :host {
      display: inline-block;
      font-size: var(--icon-size);
    }
    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;

      /* Support for all WebKit browsers. */
      -webkit-font-smoothing: antialiased;
      /* Support for Safari and Chrome. */
      text-rendering: optimizeLegibility;

      /* Support for Firefox. */
      -moz-osx-font-smoothing: grayscale;

      /* Support for IE. */
      font-feature-settings: 'liga';
    }

    .clickable {
      cursor: pointer;
    }

    .deactivated {
      filter: brightness(var(--app-lighten-2));
    }

    .clickable:hover {
      filter: brightness(var(--app-darken-2));
    }
  `,i([(0,c.property)({type:String}),r("design:type",String)],l.prototype,"icon",void 0),i([(0,c.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"clickable",void 0),i([(0,c.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"deactivated",void 0),i([(0,c.property)({type:String}),r("design:type",String)],l.prototype,"primaryText",void 0),l=i([(0,s.customElement)("nidoca-icon")],l),e.NidocaIcon=l},6386:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaImgRoundXX=e.NidocaImgProperties=void 0;const n=o(9392),a=o(5595);class s{}e.NidocaImgProperties=s,s.ROUND="ROUND",s.CLICKABLE="CLICKABLE",s.ZOOM_WRAPPED="ZOOM_WRAPPED",s.FULL_WIDTH="FULL_WIDTH";class c extends n.LitElement{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%",this.richMediaProperties=[s.CLICKABLE,s.FULL_WIDTH]}render(){return n.html`
      <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"
        ><img width="${this.width}" height="${this.height}" src="${this.src}"
      /></span>
    `}toRichMediaPropertiesString(t){let e="";return t.forEach((t=>{e=e.concat(" ").concat("")})),e}}c.styles=n.css`
    :host,
    span {
      margin: 0;
      padding: 0;
      font-size: 0;
      letter-spacing: 0;
      line-height: 0;
    }

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      box-sizing: border-box;
    }

    .CLICKABLE {
      cursor: pointer;
    }

    .ZOOM_WRAPPED {
      overflow: hidden;
    }

    .ZOOM_WRAPPED img:hover {
      transform: scale(1.1, 1.1);
      transition: transform 0.5s;
    }

    .FULL_WIDTH {
      box-sizing: border-box;
    }
    .FULL_WIDTH img {
      width: 100%;
    }

    .ROUND {
      display: block;
      margin-left: auto;
      margin-right: auto;
      box-sizing: border-box;
    }
    .ROUND img {
      padding: 0.25em;
      border-radius: 50%;
      width: 100%;
    }

    @media only screen and (max-width: 768px), only screen and (orientation: portrait) {
    }
  `,i([(0,a.property)({type:String}),r("design:type",String)],c.prototype,"src",void 0),i([(0,a.property)({type:String}),r("design:type",String)],c.prototype,"width",void 0),i([(0,a.property)({type:String}),r("design:type",String)],c.prototype,"height",void 0),i([(0,a.property)({type:s,converter:Array}),r("design:type",Array)],c.prototype,"richMediaProperties",void 0),e.NidocaImgRoundXX=c},8716:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaImgRound=void 0;const r=o(9392),n=o(5595),a=o(3008);let s=class extends a.NidocaImg{render(){return r.html`<img width="${this.width}" height="${this.height}" src="${this.src}" />`}};s.styles=r.css`
    :host {
      font-size: 0;
      display: block;
      box-sizing: border-box;
    }
    :host img {
      object-position: center;
      object-fit: cover;
      padding: 0.25em;
      border-radius: 50%;
    }
  `,s=i([(0,n.customElement)("nidoca-img-round")],s),e.NidocaImgRound=s},3008:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaImg=void 0;const n=o(9392),a=o(5595),s=o(5595);let c=class extends n.LitElement{constructor(){super(...arguments),this.src="",this.width="100%",this.height="100%"}render(){return this.src?n.html`<img width="${this.width}" height="${this.height}" src="${this.src}" />`:n.html``}};c.styles=n.css`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }
  `,i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"src",void 0),i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"width",void 0),i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"height",void 0),c=i([(0,a.customElement)("nidoca-img")],c),e.NidocaImg=c},2077:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaLayoutFloatingContainer=void 0;const n=o(9392),a=o(5595),s=o(5595);let c=class extends n.LitElement{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return n.html`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,e,o,i,r,n){return"height:".concat(t).concat(";").concat("width:").concat(e).concat(";").concat("left:").concat(o).concat(";").concat("right:").concat(i).concat(";").concat("top:").concat(r).concat(";").concat("bottom:").concat(n).concat(";")}};c.styles=n.css`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"height",void 0),i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"width",void 0),i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"left",void 0),i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"top",void 0),i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"right",void 0),i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"bottom",void 0),c=i([(0,a.customElement)("nidoca-layout-floating")],c),e.NidocaLayoutFloatingContainer=c},5614:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaDevice=void 0,e.NidocaDevice=class{constructor(t,e,o=10240){this.key=t,this.minWidth=e,this.maxWidth=o}asMediaStyle(t){let e="@media ";return this.minWidth&&(e=e.concat("(min-width: ").concat(String(this.minWidth)).concat("px)"),this.maxWidth&&(e=e.concat(" and "))),this.maxWidth&&(e=e.concat("(max-width: ").concat(String(this.maxWidth)).concat("px)")),e=e.concat("{"),e=e.concat(t),e=e.concat("} "),e}}},2353:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaLink=void 0;const n=o(9392),a=o(5595),s=o(5595);let c=class extends n.LitElement{constructor(){super(...arguments),this.text="",this.href="",this.targetType="_self"}render(){return n.html`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `}};c.styles=n.css`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"text",void 0),i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"href",void 0),i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"targetType",void 0),c=i([(0,a.customElement)("nidoca-link")],c),e.NidocaLink=c},836:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaListItem=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(4432);let l=class extends n.LitElement{constructor(){super(),this.multiSelect=!1,this.selected=!1,this.primaryText="",this.secondaryText="",this.clickStart=null,this.theme=c.NidocaThemeHelper.prototype.getParentTheme(this)||c.NidocaTheme.background}update(t){super.update(t),null!=t.get("selectionMode")&&(this.multiSelect||(this.selected=!1))}render(){return n.html`
      <style>
        .selected {
          backdrop-filter: contrast(var(--app-color-percent-selected));
        }
      </style>
      <div
        class="container ${this.selected?"selected":""}"
        @mousedown="${()=>this.downAction()}"
        @mouseup="${()=>this.upAction()}"
        @pointerup="${()=>this.upAction()}"
        @pointerdown="${()=>this.downAction()}"
      >
        ${this.multiSelect?n.html` <nidoca-icon
              style="padding-right: var(--space-2);"
              class="item"
              @click="${()=>this.switchSelected()}"
              icon="${this.selected?"check_box":"check_box_outline_blank"}"
            ></nidoca-icon>`:n.html`<span></span>`}
        <slot name="graphic" class="item"></slot>
        <div class="containerTypography">
          ${this.primaryText?n.html` <nidoca-text class="item">${this.primaryText} </nidoca-text>`:n.html``}
          <slot></slot>
          ${this.secondaryText?n.html` <nidoca-text-caption class="item">${this.secondaryText} </nidoca-text-caption>`:n.html``}
          <slot name="secondary"></slot>
        </div>
        <slot name="meta" class="item"></slot>
      </div>
    `}downAction(){this.clickStart=Date.now()}upAction(){if(this.clickStart){let t="";t=Date.now()-this.clickStart+1>500?"nidoca-event-list-item-long-click":"nidoca-event-list-item-click",console.log(t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}switchSelected(){this.selected=Boolean(!this.selected),this.selected?this.dispatchEvent(new CustomEvent("nidoca-event-list-item-select",{detail:this,bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("nidoca-event-list-item-unselect",{detail:this,bubbles:!0,composed:!0}))}};l.styles=n.css`
    .container {
      display: grid;
      cursor: pointer;
      grid-template-columns: 1fr 1fr minmax(auto, 100%) 1fr;
      padding: var(--space-2);
    }

    .item {
      align-self: center;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr;
      flex-basis: 100%;
    }

    .containerTypography {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-self: center;
    }
  `,i([(0,s.property)({type:c.NidocaTheme,converter:String}),r("design:type",Object)],l.prototype,"theme",void 0),i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"multiSelect",void 0),i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"selected",void 0),i([(0,s.property)({type:String}),r("design:type",String)],l.prototype,"primaryText",void 0),i([(0,s.property)({type:String}),r("design:type",String)],l.prototype,"secondaryText",void 0),l=i([(0,a.customElement)("nidoca-list-item"),r("design:paramtypes",[])],l),e.NidocaListItem=l},5467:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaListSection=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(5098);let l=class extends n.LitElement{constructor(){super(),this.text="",this.theme=c.NidocaThemeHelper.prototype.getParentTheme(this)||c.NidocaTheme.background}render(){return n.html`
      <nidoca-text-caption style="flex-basis:100%;" text="${this.text}">
        <slot></slot>
      </nidoca-text-caption>
    `}};l.styles=n.css`
  :host {
     display:block;
     padding-left: var(--space-2);  
  `,i([(0,s.property)({type:c.NidocaTheme,converter:String}),r("design:type",Object)],l.prototype,"theme",void 0),i([(0,s.property)({type:String}),r("design:type",String)],l.prototype,"text",void 0),l=i([(0,a.customElement)("nidoca-list-section"),r("design:paramtypes",[])],l),e.NidocaListSection=l},882:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaList=void 0;const n=o(9392),a=o(5595),s=o(4432),c=o(836);let l=class extends n.LitElement{constructor(){super(),this.multiSelect=!1,this.theme=s.NidocaThemeHelper.prototype.getParentTheme(this)||s.NidocaTheme.background}updated(t){super.updated(t),t.forEach(((t,e)=>{console.debug(`${this.tagName} : property ${String(e)} changed. oldValue: ${t}`),"selectionMode"==e&&this.getItems().forEach((t=>{t.multiSelect=this.multiSelect}))}))}render(){return n.html`
      <style>
        slot {
          border-color: var(--app-color-${this.theme}-border);
          border-top-style: solid;
          border-width: thin;
        }

        ::slotted(nidoca-list-section) {
          color: var(--app-color-${this.theme});
          backdrop-filter: contrast(var(--app-color-percent-optional));
        }

        ::slotted(nidoca-list-item) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        ::slotted(nidoca-list-item),
        ::slotted(nidoca-list-section) {
          border-bottom-style: solid;
          border-width: var(--border-width-min);
        }

        ::slotted(nidoca-list-item:hover) {
          filter: contrast(var(--app-color-percent-hover));
        }
      </style>
      <slot
        @nidoca-event-list-item-click="${t=>{this.multiSelect||this.unselectAll(),t.detail.selected=!0}}"
        @nidoca-event-list-item-unselect="${()=>{this.multiSelect=0===this.getSelectedItems().length}}"
        class="slotList"
        id="slotElement"
      ></slot>
    `}getItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof c.NidocaListItem&&t.push(i)}}return t}getSelectedItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof c.NidocaListItem&&i.selected&&t.push(i)}}return t}getSelectedIndexes(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();let o=0;for(let i=0;i<e.length;i++){const r=e[i];r instanceof c.NidocaListItem&&(r.selected&&t.push(o),o++)}}return t}selectAll(){this.getItems().forEach((t=>{t.selected=!0}))}unselectAll(){console.log("sdojsdoijsoidjsdioj "+this.getItems().length),this.getItems().forEach((t=>{t.selected=!1}))}};l.styles=n.css`
    :host {
      width: 100%;
    }
    .slotList {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,i([(0,a.property)({type:s.NidocaTheme,converter:String}),r("design:type",Object)],l.prototype,"theme",void 0),i([(0,a.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"multiSelect",void 0),i([(0,a.query)("#slotElement"),r("design:type",Object)],l.prototype,"slotElement",void 0),l=i([(0,a.customElement)("nidoca-list"),r("design:paramtypes",[])],l),e.NidocaList=l},7603:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaMenuArea=void 0;const n=o(9392),a=o(5595),s=o(5595);let c=class extends n.LitElement{constructor(){super(...arguments),this.text="",this.icon=""}render(){return n.html`
      <div class="container">
        ${this.icon?n.html` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:n.html``}
        ${this.text?n.html` <nidoca-text-button>${this.text}</nidoca-text-button>`:n.html``}
        <slot></slot>
      </div>
    `}};c.styles=n.css`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `,i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"text",void 0),i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"icon",void 0),c=i([(0,a.customElement)("nidoca-menu-area")],c),e.NidocaMenuArea=c},2350:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaMenuItem=void 0;const n=o(9392),a=o(5595),s=o(5595);let c=class extends n.LitElement{constructor(){super(...arguments),this.text="",this.icon="",this.selected=!1}render(){return n.html`
      <div class="container ${this.selected?"selected":""}" @click="${()=>this.clicked()}">
        ${this.icon?n.html` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:n.html``}
        ${this.text?n.html` <nidoca-text>${this.text}</nidoca-text>`:n.html``}
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};c.styles=n.css`
    .container {
      display: flex;
      cursor: pointer;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }

    .container:hover {
      backdrop-filter: contrast(var(--app-color-percent-hover));
    }

    .selected {
      backdrop-filter: contrast(var(--app-color-percent-selected));
    }
  `,i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"text",void 0),i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"icon",void 0),i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],c.prototype,"selected",void 0),c=i([(0,a.customElement)("nidoca-menu-item")],c),e.NidocaMenuItem=c},942:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaMenu=void 0;const n=o(9392),a=o(5595),s=o(4432);let c=class extends n.LitElement{constructor(){super(...arguments),this.theme=s.NidocaTheme.secondary}render(){return n.html` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`}firstUpdated(){this.addEventListener("click",(t=>{if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];if(i instanceof s.NidocaMenuItem){const e=i.getBoundingClientRect();e.left<t.x&&e.right>t.x&&(e.top<t.y&&e.bottom>t.y?i.selected=!0:i.selected=!1)}}}}))}};c.styles=n.css`
    :host,
    slot {
      display: block;
    }
  `,i([(0,a.property)({type:s.NidocaTheme,converter:String}),r("design:type",Object)],c.prototype,"theme",void 0),i([(0,a.query)("#slotElement"),r("design:type",Object)],c.prototype,"slotElement",void 0),c=i([(0,a.customElement)("nidoca-menu")],c),e.NidocaMenu=c},5098:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaThemeHelper=e.NidocaTheme=void 0;const i=o(9392);var r;!function(t){t.primary="primary",t.secondary="secondary",t.surface="surface",t.background="background",t.transparent="transparent"}(r=e.NidocaTheme||(e.NidocaTheme={})),e.NidocaThemeHelper=class{static getStyle(t){return t?t==r.transparent?i.html``:i.html` <style>
            :host,
            *,
            ::slotted(*) {
              color: var(--app-color-${t});
              background-color: var(--app-color-${t}-background);
              border-color: var(--app-color-${t}-border);
            }

            ::slotted(.h2),
            .h2 {
              color: #3f6796;
            }
          </style>`:i.html``}static getOposite(t){return t==r.background?r.surface:t==r.primary||t==r.primary?r.secondary:t==r.secondary?r.primary:r.background}getParentTheme(t){let e=t;for(;null!=e;){if(null!=e.theme)return e.theme;e=e.parentElement}}}},6257:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaMovie=void 0;const n=o(9392),a=o(5595),s=o(5595);let c=class extends n.LitElement{constructor(){super(...arguments),this.src=""}render(){return n.html`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};c.styles=n.css``,i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"src",void 0),c=i([(0,a.customElement)("nidoca-movie")],c),e.NidocaMovie=c},8083:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaPrint=void 0;const r=o(9392),n=o(5595);let a=class extends r.LitElement{render(){return r.html`<slot></slot>`}print(){const t=window.open("");t&&(t.document.write(this.innerHTML),t.print(),t.close())}};a.styles=r.css`
    :host {
      display: none;
    }
  `,a=i([(0,n.customElement)("nidoca-print")],a),e.NidocaPrint=a},2474:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaProgress=e.ProgressType=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(5098);class l{}e.ProgressType=l,l.PROGRESS="PROGRESS",l.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR";let d=class extends n.LitElement{constructor(){super(...arguments),this.progressType=l.PROGRESS}render(){return n.html` <style>
        :host {
          width: 100%;
          display: block;
        }

        .PROGRESS {
          color: var(--app-color-${this.theme}-background);
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border: none;
          height: 0.25em;
          background-color: #dddddd;
          font-size: 16px;
          width: 100%;
        }

        .PROGRESS::-webkit-progress-bar {
          background-color: transparent;
        }

        /* Determinate */
        .PROGRESS::-webkit-progress-value {
          background-color: currentColor;
          transition: all 0.2s;
        }

        .PROGRESS::-moz-progress-bar {
          background-color: currentColor;
          transition: all 0.2s;
        }

        .PROGRESS::-ms-fill {
          border: none;
          background-color: currentColor;
          transition: all 0.2s;
        }

        /* Indeterminate */
        .PROGRESS:indeterminate {
          background-size: 200% 100%;
          background-image: linear-gradient(
            to right,
            transparent 50%,
            currentColor 50%,
            currentColor 60%,
            transparent 60%,
            transparent 71.5%,
            currentColor 71.5%,
            currentColor 84%,
            transparent 84%
          );
          animation: progresslinear 2s infinite linear;
        }

        .PROGRESS:indeterminate::-moz-progress-bar {
          background-color: transparent;
        }

        .PROGRESS:indeterminate::-ms-fill {
          animation-name: none;
        }

        @keyframes progresslinear {
          0% {
            background-size: 200% 100%;
            background-position: left -31.25% top 0%;
          }
          50% {
            background-size: 800% 100%;
            background-position: left -49% top 0%;
          }
          100% {
            background-size: 400% 100%;
            background-position: left -102% top 0%;
          }
        }

        .PROGRESS_CIRCULAR {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          box-sizing: border-box;
          border: none;
          border-radius: 50%;
          padding: 0.25em;
          width: 3em;
          height: 3em;
          color: var(--app-color-${this.theme}-background);
          background-color: transparent;
          font-size: 16px;
          overflow: hidden;
          margin-top: 30px;
        }

        .PROGRESS_CIRCULAR::-webkit-progress-bar {
          background-color: transparent;
        }

        /* Indeterminate */
        .PROGRESS_CIRCULAR:indeterminate {
          mask-image: linear-gradient(transparent 50%, black 50%), linear-gradient(to right, transparent 50%, black 50%);
          animation: progress-circular 6s infinite cubic-bezier(0.3, 0.6, 1, 1);
        }

        :-ms-lang(x),
        .PROGRESS_CIRCULAR:indeterminate {
          animation: none;
        }

        .PROGRESS_CIRCULAR:indeterminate::before,
        .PROGRESS_CIRCULAR:indeterminate::-webkit-progress-value {
          content: '';
          display: block;
          box-sizing: border-box;
          margin-bottom: 0.25em;
          border: solid 0.25em transparent;
          border-top-color: currentColor;
          border-radius: 50%;
          width: 100% !important;
          height: 100%;
          background-color: transparent;
          animation: progress-circular-pseudo 0.75s infinite linear alternate;
        }

        .PROGRESS_CIRCULAR:indeterminate::-moz-progress-bar {
          box-sizing: border-box;
          border: solid 0.25em transparent;
          border-top-color: currentColor;
          border-radius: 50%;
          width: 100%;
          height: 100%;
          background-color: transparent;
          animation: progress-circular-pseudo 0.75s infinite linear alternate;
        }

        .PROGRESS_CIRCULAR:indeterminate::-ms-fill {
          animation-name: -ms-ring;
        }

        @keyframes progress-circular {
          0% {
            transform: rotate(0deg);
          }
          12.5% {
            transform: rotate(180deg);
            animation-timing-function: linear;
          }
          25% {
            transform: rotate(630deg);
          }
          37.5% {
            transform: rotate(810deg);
            animation-timing-function: linear;
          }
          50% {
            transform: rotate(1260deg);
          }
          62.5% {
            transform: rotate(1440deg);
            animation-timing-function: linear;
          }
          75% {
            transform: rotate(1890deg);
          }
          87.5% {
            transform: rotate(2070deg);
            animation-timing-function: linear;
          }
          100% {
            transform: rotate(2520deg);
          }
        }

        @keyframes progress-circular-pseudo {
          0% {
            transform: rotate(-30deg);
          }
          29.4% {
            border-left-color: transparent;
          }
          29.41% {
            border-left-color: currentColor;
          }
          64.7% {
            border-bottom-color: transparent;
          }
          64.71% {
            border-bottom-color: currentColor;
          }
          100% {
            border-left-color: currentColor;
            border-bottom-color: currentColor;
            transform: rotate(225deg);
          }
        }
      </style>

      <progress class="${this.progressType}"></progress>`}};d.styles=n.css``,i([(0,s.property)({type:c.NidocaTheme,converter:String}),r("design:type",Object)],d.prototype,"theme",void 0),i([(0,s.property)({type:l,converter:String}),r("design:type",String)],d.prototype,"progressType",void 0),d=i([(0,a.customElement)("nidoca-progress")],d),e.NidocaProgress=d},6355:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaRipple=void 0;const n=o(9392),a=o(5595),s=o(5595);let c=class extends n.LitElement{render(){return n.html`
      <div id="rippleContainer" anim="ripple" @click="${t=>this.clicked(t)}">
        <slot></slot>
      </div>
    `}clicked(t){if(null!=this.rippleContainerElement){t instanceof TouchEvent&&(t=t.touches?t.touches[0]:t);const e=this.rippleContainerElement.getBoundingClientRect(),o=2*Math.sqrt(Math.pow(e.width,2)+Math.pow(e.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(t instanceof MouseEvent||t instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${o}; --x:${t.clientX-e.left}; --y:${t.clientY-e.top};`)}}};c.styles=n.css`
    :host {
      display: inline-block;
    }

    :root {
      --ripple-background: var(--app-color-surface-background-dark);
      --ripple-opacity: 0.8;
      --ripple-duration: 600ms;
      --ripple-easing: linear;

      --y: 0;
      --x: 0;
      --d: 0;
      --t: 0;
      --s: 0;
      --o: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    [anim='ripple'] {
      position: relative;
      overflow: hidden;
    }

    [anim='ripple']:before {
      content: '';
      position: absolute;
      display: block;
      background: var(--ripple-background, white);
      border-radius: 50%;
      pointer-events: none;
      top: calc(var(--y) * 1px);
      left: calc(var(--x) * 1px);
      width: calc(var(--d) * 1px);
      height: calc(var(--d) * 1px);
      opacity: calc(var(--o, 1) * var(--ripple-opacity, 0.3));
      -webkit-transition: calc(var(--t, 0) * var(--ripple-duration, 600ms)) var(--ripple-easing, linear);
      transition: calc(var(--t, 0) * var(--ripple-duration, 600ms)) var(--ripple-easing, linear);
      -webkit-transform: translate(-50%, -50%) scale(var(--s, 1));
      transform: translate(-50%, -50%) scale(var(--s, 1));
      -webkit-transform-origin: center;
      transform-origin: center;
    }
  `,i([(0,s.query)("#rippleContainer"),r("design:type",Object)],c.prototype,"rippleContainerElement",void 0),c=i([(0,a.customElement)("nidoca-ripple")],c),e.NidocaRipple=c},8454:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},n=this&&this.__awaiter||function(t,e,o,i){return new(o||(o=Promise))((function(r,n){function a(t){try{c(i.next(t))}catch(t){n(t)}}function s(t){try{c(i.throw(t))}catch(t){n(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}c((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaSearchBar=void 0;const a=o(9392),s=o(5595),c=o(5595),l=o(5595),d=o(4432);let p=class extends a.LitElement{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1,this.theme=d.NidocaTheme.surface}render(){return a.html`
      <style>
        .container,
        input {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }

        .container:focus-within,
        ::slotted(.container:focus-within) {
          border-color: var(--app-color-${this.theme}-selected);
          filter: contrast(var(--app-color-percent-selected));
        }
      </style>
      <div class="container border">
        <nidoca-icon style="padding-right:var(--space);padding-left:var(--space);" icon="search"></nidoca-icon>
        <input
          id="inputElement"
          type="text"
          value="${this.value}"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          @input="${()=>this.valueChanged()}"
        />
        <nidoca-icon
          style="padding-right:var(--space);padding-left:var(--space);"
          icon="close"
          @click="${()=>this.clearValue()}"
        ></nidoca-icon>
      </div>
    `}clearValue(){this.value=""}valueChanged(){var t;return n(this,void 0,void 0,(function*(){const e=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(t=this.inputElement)||void 0===t?void 0:t.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}))}};p.styles=a.css`
    :host {
      width: 100%;
      display: block;
    }

    .container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      padding: var(--space);
      height: var(--height-medium);
      box-sizing: border-box;
    }

    input {
      font: inherit;
      width: 100%;
      border: none;
      padding: 0;
      line-height: var(--height-min);
    }

    input:focus {
      outline: none;
      box-shadow: none;
    }
  `,i([(0,c.property)({type:String}),r("design:type",String)],p.prototype,"value",void 0),i([(0,c.property)({type:String}),r("design:type",String)],p.prototype,"placeholder",void 0),i([(0,c.property)({type:Boolean}),r("design:type",Boolean)],p.prototype,"disabled",void 0),i([(0,l.query)("#inputElement"),r("design:type",Object)],p.prototype,"inputElement",void 0),i([(0,c.property)({type:d.NidocaTheme,converter:String}),r("design:type",String)],p.prototype,"theme",void 0),p=i([(0,s.customElement)("nidoca-search-bar")],p),e.NidocaSearchBar=p},7906:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaSection=void 0;const r=o(9392),n=o(5595);let a=class extends r.LitElement{constructor(){super(...arguments),this.flexBasis="auto"}render(){return r.html`
      <style>
        .item,
        ::slotted(.item) {
          flex-basis: ${this.flexBasis};
        }
      </style>
      <slot id="container" class="container" @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){const e=t.target,o=e.offsetWidth,i=e.assignedElements(),r=i.length,n=[];let a=0;for(let t=0;t<r;t++){const e=i[t];if(e.setAttribute("class","item"),e instanceof HTMLElement){const t=e.style.width;if(0==t.length)n.push(e);else{const e=t.toUpperCase();a+=e.indexOf("PX")>-1?Number(e.replace("PX","")):Number(e.replace("%",""))/100*o}}}let s=100;a>0&&(s=100-a/o*100),0==s&&(s=100/r),this.flexBasis=String(s/n.length)+"%",this.requestUpdate()}};a.styles=r.css`
    :host {
      display: block;
      margin: auto;
    }

    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
    }

    @media only screen and (min-width: 641px) and (max-width: 1007px) {
      .item {
        flex-basis: 100%;
      }
    }

    @media only screen and (max-width: 10240px) {
      .container {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .item {
        flex-basis: 100%;
      }
    }
  `,a=i([(0,n.customElement)("nidoca-section")],a),e.NidocaSection=a},7203:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaSplitScreen=void 0;const n=o(9392),a=o(5595),s=o(4432);let c=class extends n.LitElement{constructor(){super(),this.hideSidebox=!0,this.theme=s.NidocaThemeHelper.prototype.getParentTheme(this)||s.NidocaTheme.background}render(){return n.html` <style>
        .listbox,
        .sidebox {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        .sidebox {
          border-color: var(--app-color-${this.theme}-border);
          border-left-style: solid;
          border-width: thin;
        }
      </style>
      <slot class="listbox" name="left"></slot>
      ${this.hideSidebox?n.html``:n.html` <slot class="sidebox" name="sidebox"></slot>`}`}};c.styles=n.css`
    :host {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    .listbox {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
    }

    .sidebox {
      display: block;
      z-index: 1;
      position: fixed;
      right: 0;
      width: 33vw;
      min-height: 100%;
      transition: all 0.35s linear;
      overflow-y: scroll;
      max-height: 100%;
    }

    @media only screen and (min-width: 641px) and (max-width: 1007px) {
      .sidebox {
        width: 50vw;
      }
    }

    @media only screen and (max-width: 640px) {
      .sidebox {
        width: 100%;
      }
    }
  `,i([(0,a.property)({type:s.NidocaTheme,converter:String}),r("design:type",String)],c.prototype,"theme",void 0),i([(0,a.property)({type:Boolean,converter:String}),r("design:type",Boolean)],c.prototype,"hideSidebox",void 0),c=i([(0,a.customElement)("nidoca-split-screen"),r("design:paramtypes",[])],c),e.NidocaSplitScreen=c},786:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaSvg2Webp=void 0;const n=o(9392),a=o(5595),s=o(5595);let c=class extends n.LitElement{constructor(){super(...arguments),this.src="https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg",this.canvasElements=[],this.storeCanvasElements=[]}render(){return n.html`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map((t=>n.html`${t}`))}
    `}updated(t){super.updated(t),t.forEach(((t,e)=>{console.debug(`${this.tagName} : property ${String(e)} changed. oldValue: ${t}`),"src"==e&&this.convert()}))}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach((t=>{const e=document.createElement("canvas");e.width=t[0],e.height=t[1];const o=e.getContext("2d");o&&this.img&&(this.img.crossOrigin="anonymous",o.drawImage(this.img,0,0,t[0],t[1]),e.toBlob((t=>{}),"image/webp")),this.canvasElements.push(e)})),this.requestUpdate()})}};c.styles=n.css``,i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"src",void 0),i([(0,a.query)("#img"),r("design:type",Object)],c.prototype,"img",void 0),c=i([(0,a.customElement)("nidoca-svg-2-webp")],c),e.NidocaSvg2Webp=c},2835:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTabContent=void 0;const n=o(9392),a=o(5595),s=o(5595);let c=class extends n.LitElement{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?n.html` <slot></slot>`:n.html``}};c.styles=n.css`
    :host,
    slot {
      display: block;
    }
  `,i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],c.prototype,"selected",void 0),c=i([(0,a.customElement)("nidoca-tab-content")],c),e.NidocaTabContent=c},7825:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTab=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(4432);let l=class extends n.LitElement{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=c.NidocaTheme.surface}render(){return n.html`
      <style>
        .container {
          border-color: var(--app-color-${this.theme}-background);
        }
        .selected {
          border-color: var(--app-color-${this.theme}-selected);
        }
      </style>
      <div class="container ${this.selected?"selected":""}" @click="${()=>this.tabClicked()}">
        ${this.text?n.html` <nidoca-text text="${this.text}"></nidoca-text> `:n.html``}
        <slot></slot>
      </div>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};l.styles=n.css`
    :host {
      display: block;
      padding-right: var(--space);
    }

    .container {
      line-height: var(--height-min);
      height: var(--height-min);
      box-sizing: border-box;
      cursor: pointer;
      border-width: var(--border-width-max);
      border-bottom-style: solid;
    }

    slot {
      display: block;
    }
  `,i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"selected",void 0),i([(0,s.property)({type:String}),r("design:type",String)],l.prototype,"text",void 0),i([(0,s.property)({type:String}),r("design:type",String)],l.prototype,"theme",void 0),l=i([(0,a.customElement)("nidoca-tab")],l),e.NidocaTab=l},1508:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTable=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(3012),l=o(2386),d=o(4432),p=o(1465);let h=class extends n.LitElement{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new p.NidocaIcon],["row 2",new p.NidocaIcon]],this.theme=d.NidocaTheme.background}render(){return n.html`
      <style>
        td,
        th {
          border-bottom: var(--border-width-min) solid var(--app-color-${this.theme}-border);
          border-left: var(--border-width-min) solid var(--app-color-${this.theme}-border);
        }

        tr > td:last-of-type,
        th:last-of-type {
          border-right: var(--border-width-min) solid var(--app-color-${this.theme}-border);
        }

        th {
          border-top: var(--border-width-min) solid var(--app-color-${this.theme}-border);
          background-color: var(--app-color-${this.theme}-background);
          color: var(--app-color-${this.theme});
        }
      </style>
      <div>
        <table>
          <thead>
            ${(0,c.guard)([this.headers],(()=>n.html` ${(0,l.repeat)(this.headers,(t=>n.html` <th colspan="1" rowspan="1">${t}</th> `))} `))}
          </thead>
          <tbody>
            ${(0,c.guard)([this.rows],(()=>n.html`
                  ${(0,l.repeat)(this.rows,(t=>n.html`
                        <tr>
                          ${(0,l.repeat)(t,(t=>n.html` <td colspan="1" rowspan="1">${t}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};h.styles=n.css`
    :host {
      display: block;
      width: 100%;
    }

    table,
    ::slotted(table) {
      border-spacing: 0;
      width: 100%;
    }

    td,
    th {
      vertical-align: center;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      height: var(--height-medium);
      box-sizing: border-box;
      text-align: left;
    }
  `,i([(0,s.property)({type:Array}),r("design:type",Array)],h.prototype,"headers",void 0),i([(0,s.property)({type:Array}),r("design:type",Array)],h.prototype,"rows",void 0),i([(0,s.property)({type:d.NidocaTheme,converter:String}),r("design:type",String)],h.prototype,"theme",void 0),h=i([(0,a.customElement)("nidoca-table")],h),e.NidocaTable=h},2633:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTabs=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(2835),l=o(7825),d=o(4432);let p=class extends n.LitElement{constructor(){super(...arguments),this.theme=d.NidocaTheme.surface,this.tabIndex=0}render(){return n.html`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),null!=t.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const t=this.tabSlot.assignedElements(),e=100/t.length,o=t[this.tabIndex];for(let i=0;i<t.length;i++){const r=t[i];r instanceof l.NidocaTab&&(r.theme=this.theme,r.style.width=String(e).concat("%"),r==o?(r.selected=!0,r.classList.add("SELECTED")):(r.selected=!1,r.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(null!=this.tabContentSlot){const e=this.tabContentSlot.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof c.NidocaTabContent&&(this.tabIndex==t?i.selected=!0:i.selected=!1,t++)}}}tabClicked(t){const e=t.detail;this.changeTabIndex(e)}changeTabIndex(t){if(!t.selected&&null!=this.tabSlot){const e=this.tabSlot.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];if(i instanceof l.NidocaTab&&i==t){this.tabIndex=o;break}}}}};p.styles=n.css`
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
      margin: 0px auto;
      text-align: center;
      width: 100% !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,i([(0,s.query)("#tabSlot"),r("design:type",Object)],p.prototype,"tabSlot",void 0),i([(0,s.query)("#tabContentSlot"),r("design:type",Object)],p.prototype,"tabContentSlot",void 0),i([(0,a.property)({type:String}),r("design:type",String)],p.prototype,"theme",void 0),i([(0,a.property)({type:Number}),r("design:type",Number)],p.prototype,"tabIndex",void 0),p=i([(0,a.customElement)("nidoca-tabs")],p),e.NidocaTabs=p},1822:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTemplate=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(5595);let l=class extends n.LitElement{constructor(){super(),this.hideLeft=!0,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",(t=>{if(!this.hideLeft&&this.leftElement){console.log("close");const e=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=t.x-e.width}}))}updated(t){super.updated(t)}render(){return n.html`
      <slot
        id="left"
        @nidoca-event-menu-item-clicked="${()=>{641>window.innerWidth&&(this.hideLeft=!0)}}"
        class="${this.hideLeft?"hideLeft":""}"
        name="left"
      >
      </slot>

      <div class="right">
        <nidoca-top-app-bar theme="primary" id="header" .prominent="${this.prominent}">
          <nidoca-icon
            slot="left"
            style="padding-left:var(--space-2);"
            icon="menu"
            .clickable="${!0}"
            @nidoca-event-icon-clicked="${()=>{this.hideLeft=!this.hideLeft}}"
          ></nidoca-icon>

          <span slot="left">
            <slot class="slotHeader" name="topLeft"></slot>
          </span>
          <span slot="center">
            <slot class="slotHeader" name="topCenter"></slot>
          </span>
          <span slot="right">
            <slot class="slotHeader" name="topRight"></slot>
          </span>
          <span style="width: 100%;" slot="prominent">
            <slot class="slotHeader" name="prominent"></slot>
          </span>
        </nidoca-top-app-bar>
        <slot id="content" name="content"></slot>
      </div>
    `}};l.styles=n.css`
    :host {
      display: flex;
      flex-direction: row;
      width: 100vw;
      height: 100vh;
    }

    #left {
      display: block;
      color: var(--app-color-primary);
      background-color: var(--app-color-primary-background);
      min-width: 280px;
      min-height: 100%;
      max-height: 100%;
    }

    #left.hideLeft {
      transition: all 0.35s ease;
      display: none;
    }

    @media screen and (max-width: 640px) {
      #left {
        position: fixed;
        z-index: 1;
      }
    }

    .right {
      width: 100%;
      height: 100vh;
      overflow: scroll;
    }
  `,i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"hideLeft",void 0),i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"prominent",void 0),i([(0,c.query)("#header"),r("design:type",Object)],l.prototype,"headerElement",void 0),i([(0,c.query)("#left"),r("design:type",Object)],l.prototype,"leftElement",void 0),i([(0,c.query)("#content"),r("design:type",Object)],l.prototype,"contentElement",void 0),l=i([(0,a.customElement)("nidoca-template"),r("design:paramtypes",[])],l),e.NidocaTemplate=l},5777:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTextBody=void 0;const r=o(9392),n=o(5595),a=o(4432);let s=class extends a.NidocaText{render(){return r.html` ${super.render()}`}};s.styles=r.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.5em;
      font-weight: 400;
    }
  `,s=i([(0,n.customElement)("nidoca-text-body")],s),e.NidocaTextBody=s},7821:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTextButton=void 0;const r=o(9392),n=o(5595),a=o(4432);let s=class extends a.NidocaText{render(){return r.html` ${super.render()}`}};s.styles=r.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      text-transform: uppercase;
      line-height: 1.5em;
      filter: brightness(var(--app-lighten-3));
    }
  `,s=i([(0,n.customElement)("nidoca-text-button")],s),e.NidocaTextButton=s},8712:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTextCaption=void 0;const r=o(9392),n=o(5595),a=o(4432);let s=class extends a.NidocaText{};s.styles=r.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.5em;
      filter: brightness(var(--app-lighten-3));
    }
  `,s=i([(0,n.customElement)("nidoca-text-caption")],s),e.NidocaTextCaption=s},1268:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTextError=void 0;const n=o(5595),a=o(4432);let s=class extends a.NidocaTextCaption{constructor(){super(),this.style.color="red"}};s=i([(0,n.customElement)("nidoca-text-error"),r("design:paramtypes",[])],s),e.NidocaTextError=s},6374:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTextH1=void 0;const r=o(9392),n=o(5595),a=o(4432);let s=class extends a.NidocaText{};s.styles=r.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1em;
    }
  `,s=i([(0,n.customElement)("nidoca-text-h1")],s),e.NidocaTextH1=s},2251:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTextH2=void 0;const r=o(9392),n=o(5595),a=o(4432);let s=class extends a.NidocaText{};s.styles=r.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.5em;
    }
  `,s=i([(0,n.customElement)("nidoca-text-h2")],s),e.NidocaTextH2=s},5412:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTextH3=void 0;const r=o(9392),n=o(5595),a=o(4432);let s=class extends a.NidocaText{};s.styles=r.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `,s=i([(0,n.customElement)("nidoca-text-h3")],s),e.NidocaTextH3=s},1322:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTextH4=void 0;const r=o(9392),n=o(5595),a=o(4432);let s=class extends a.NidocaText{};s.styles=r.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 115%;
      line-height: 1.5em;
    }
  `,s=i([(0,n.customElement)("nidoca-text-h4")],s),e.NidocaTextH4=s},2604:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTextH5=void 0;const r=o(9392),n=o(5595),a=o(4432);let s=class extends a.NidocaText{};s.styles=r.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,s=i([(0,n.customElement)("nidoca-text-h5")],s),e.NidocaTextH5=s},4257:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTextH6=void 0;const r=o(9392),n=o(5595),a=o(4432);let s=class extends a.NidocaText{};s.styles=r.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 105%;
      line-height: 1.5em;
    }
  `,s=i([(0,n.customElement)("nidoca-text-h6")],s),e.NidocaTextH6=s},7984:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTextInfo=void 0;const n=o(5595),a=o(4432);let s=class extends a.NidocaTextCaption{constructor(){super(),this.style.color="blue"}};s=i([(0,n.customElement)("nidoca-text-info"),r("design:paramtypes",[])],s),e.NidocaTextInfo=s},4375:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTextOverline=void 0;const r=o(9392),n=o(5595),a=o(4432);let s=class extends a.NidocaText{};s.styles=r.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,s=i([(0,n.customElement)("nidoca-text-overline")],s),e.NidocaTextOverline=s},5728:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTextSuccess=void 0;const n=o(5595),a=o(4432);let s=class extends a.NidocaTextCaption{constructor(){super(),this.style.color="green"}};s=i([(0,n.customElement)("nidoca-text-success"),r("design:paramtypes",[])],s),e.NidocaTextSuccess=s},8026:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTextWarning=void 0;const n=o(5595),a=o(4432);let s=class extends a.NidocaTextCaption{constructor(){super(),this.style.color="yellow"}};s=i([(0,n.customElement)("nidoca-text-warning"),r("design:paramtypes",[])],s),e.NidocaTextWarning=s},3487:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaText=void 0;const n=o(9392),a=o(5595),s=o(5595);let c=class extends n.LitElement{constructor(){super(...arguments),this.text=""}render(){return n.html` <slot id="slotElement">${this.text}</slot>`}};c.styles=n.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.5em;
    }
  `,i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"text",void 0),c=i([(0,a.customElement)("nidoca-text")],c),e.NidocaText=c},1280:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTopAppBar=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(4432);let l=class extends n.LitElement{constructor(){super(...arguments),this.theme=c.NidocaTheme.primary,this.prominent=!1}render(){return n.html`
      ${c.NidocaThemeHelper.getStyle(this.theme)}
      <div class="bar">
        <slot name="left" style="justify-content:flex-start;"></slot>
        <slot name="center" style="justify-content:center;"></slot>
        <slot name="right" style="justify-content:flex-end;"></slot>
      </div>
      ${this.prominent?n.html` <slot class="prominent" name="prominent"></slot>`:n.html``}
    `}};l.styles=n.css`
    :host {
      display: block;
      top: 0;
      width: 100%;
      position: sticky;
    }

    .bar {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      align-content: space-around;
      width: 100%;
      height: var(--height-medium);
      box-sizing: border-box;
    }

    slot {
      display: flex;
      align-items: center;
      flex-basis: auto;
    }

    .prominent {
      display: block;
    }
  `,i([(0,s.property)({type:c.NidocaTheme,converter:String}),r("design:type",Object)],l.prototype,"theme",void 0),i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"prominent",void 0),l=i([(0,a.customElement)("nidoca-top-app-bar")],l),e.NidocaTopAppBar=l},1686:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaTransition=e.NidocaTransitionType=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(796);class l{}e.NidocaTransitionType=l,l.CENTER="CENTER",l.LEFT="LEFT",l.RIGHT="RIGHT",l.TOP="TOP",l.BOTTOM="BOTTOM",l.SLIDE_CENTER="SLIDE_CENTER",l.SLIDE_LEFT="SLIDE_LEFT",l.SLIDE_RIGHT="SLIDE_RIGHT",l.SLIDE_TOP="SLIDE_TOP",l.SLIDE_BOTTOM="SLIDE_BOTTOM";let d=class extends n.LitElement{constructor(){super(...arguments),this.transitionType=l.CENTER,this.duration=.5}render(){return n.html` <div class="${(0,c.ifDefined)(this.transitionType)}"><slot></slot></div> `}};d.styles=n.css`
    /* Declaration of keyframes */

    @-webkit-keyframes fadeInLeft {
      from {
        opacity: 0;
        -webkit-transform: translatex(-10px);
        -moz-transform: translatex(-10px);
        -o-transform: translatex(-10px);
        transform: translatex(-10px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }
    @-moz-keyframes fadeInLeft {
      from {
        opacity: 0;
        -webkit-transform: translatex(-10px);
        -moz-transform: translatex(-10px);
        -o-transform: translatex(-10px);
        transform: translatex(-10px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }
    @keyframes fadeInLeft {
      from {
        opacity: 0;
        -webkit-transform: translatex(-100px);
        -moz-transform: translatex(-100px);
        -o-transform: translatex(-100px);
        transform: translatex(-100px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-moz-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-o-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-ms-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeInRight {
      from {
        opacity: 0;
        -webkit-transform: translatex(20px);
        -moz-transform: translatex(20px);
        -o-transform: translatex(20px);
        transform: translatex(20px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }
    @-moz-keyframes fadeInRight {
      from {
        opacity: 0;
        -webkit-transform: translatex(20px);
        -moz-transform: translatex(20px);
        -o-transform: translatex(20px);
        transform: translatex(20px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }
    @keyframes fadeInRight {
      from {
        opacity: 0;
        -webkit-transform: translatex(200px);
        -moz-transform: translatex(200px);
        -o-transform: translatex(200px);
        transform: translatex(200px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }

    @keyframes fadeInUp {
      from {
        transform: translate3d(0, 40px, 0);
      }

      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeInUp {
      from {
        transform: translate3d(0, 40px, 0);
      }

      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @keyframes fadeInBottom {
      from {
        transform: translate3d(0, -40px, 0);
      }

      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeInBottom {
      from {
        transform: translate3d(0, -40px, 0);
      }

      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @-webkit-keyframes slideInLeft {
      0% {
        opacity: 0;

        -webkit-transform: translateX(-400px);
      }
      60% {
        -webkit-transform: translateX(30px);
      }
      80% {
        -webkit-transform: translateX(-10px);
      }
      100% {
        opacity: 1;

        -webkit-transform: translateX(0);
      }
    }

    @keyframes slideInLeft {
      0% {
        opacity: 0;

        transform: translateX(-400px);
      }
      60% {
        transform: translateX(30px);
      }
      80% {
        transform: translateX(-10px);
      }
      100% {
        opacity: 1;

        transform: translateX(0);
      }
    }

    @-webkit-keyframes slideInRight {
      0% {
        opacity: 0;

        -webkit-transform: translateX(400px);
      }
      60% {
        -webkit-transform: translateX(-30px);
      }
      80% {
        -webkit-transform: translateX(10px);
      }
      100% {
        opacity: 1;

        -webkit-transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      0% {
        opacity: 0;

        transform: translateX(400px);
      }
      60% {
        transform: translateX(-30px);
      }
      80% {
        transform: translateX(10px);
      }
      100% {
        opacity: 1;

        transform: translateX(0);
      }
    }

    @-webkit-keyframes slideInCenter {
      0% {
        opacity: 0;
        -webkit-transform: scale(0.3);
      }

      50% {
        opacity: 1;
        -webkit-transform: scale(1.05);
      }

      70% {
        -webkit-transform: scale(0.9);
      }

      100% {
        -webkit-transform: scale(1);
      }
    }

    @keyframes slideInCenter {
      0% {
        opacity: 0;
        transform: scale(0.3);
      }

      50% {
        opacity: 1;
        transform: scale(1.05);
      }

      70% {
        transform: scale(0.9);
      }

      100% {
        transform: scale(1);
      }
    }

    @-webkit-keyframes slideInTop {
      0% {
        opacity: 0;

        -webkit-transform: translateY(400px);
      }
      60% {
        -webkit-transform: translateY(-30px);
      }
      80% {
        -webkit-transform: translateY(10px);
      }
      100% {
        opacity: 1;

        -webkit-transform: translateY(0);
      }
    }

    @keyframes slideInTop {
      0% {
        opacity: 0;

        transform: translateY(400px);
      }
      60% {
        transform: translateY(-30px);
      }
      80% {
        transform: translateY(10px);
      }
      100% {
        opacity: 1;

        transform: translateY(0);
      }
    }

    @-webkit-keyframes slideInBottom {
      0% {
        opacity: 0;

        -webkit-transform: translateY(-400px);
      }
      60% {
        -webkit-transform: translateY(30px);
      }
      80% {
        -webkit-transform: translateY(-10px);
      }
      100% {
        opacity: 1;

        -webkit-transform: translateY(0);
      }
    }

    @keyframes slideInBottom {
      0% {
        opacity: 0;

        transform: translateY(-400px);
      }
      60% {
        transform: translateY(30px);
      }
      80% {
        transform: translateY(-10px);
      }
      100% {
        opacity: 1;

        transform: translateY(0);
      }
    }

    /*  */
    .CENTER {
      animation: fadeIn ease 2s;
      -webkit-animation: fadeIn ease 2s;
      -moz-animation: fadeIn ease 2s;
      -o-animation: fadeIn ease 2s;
      -ms-animation: fadeIn ease 2s;
    }

    .LEFT {
      -webkit-animation-name: fadeInLeft;
      -moz-animation-name: fadeInLeft;
      -o-animation-name: fadeInLeft;
      animation-name: fadeInLeft;
      -webkit-animation-fill-mode: both;
      -moz-animation-fill-mode: both;
      -o-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -moz-animation-duration: 1s;
      -o-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-delay: 1s;
      -moz-animation-delay: 1s;
      -o-animation-duration: 1s;
      animation-delay: 1s;
    }
    .RIGHT {
      -webkit-animation-name: fadeInRight;
      -moz-animation-name: fadeInRight;
      -o-animation-name: fadeInRight;
      animation-name: fadeInRight;
      -webkit-animation-fill-mode: both;
      -moz-animation-fill-mode: both;
      -o-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -moz-animation-duration: 1s;
      -o-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-delay: 1s;
      -moz-animation-delay: 1s;
      -o-animation-duration: 1s;
      animation-delay: 1s;
    }

    .TOP {
      opacity: 0;
      animation-name: fadeInUp;
      -webkit-animation-name: fadeInUp;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }
    .BOTTOM {
      opacity: 0;
      animation-name: fadeInBottom;
      -webkit-animation-name: fadeInBottom;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_LEFT {
      -webkit-animation-name: slideInLeft;
      animation-name: slideInLeft;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_RIGHT {
      -webkit-animation-name: slideInRight;
      animation-name: slideInRight;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_CENTER {
      -webkit-animation-name: slideInCenter;
      animation-name: slideInCenter;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_TOP {
      -webkit-animation-name: slideInTop;
      animation-name: slideInTop;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_BOTTOM {
      -webkit-animation-name: slideInBottom;
      animation-name: slideInBottom;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }
  `,i([(0,s.property)({type:String}),r("design:type",String)],d.prototype,"transitionType",void 0),i([(0,s.property)({type:Number}),r("design:type",Number)],d.prototype,"duration",void 0),d=i([(0,a.customElement)("nidoca-transition")],d),e.NidocaTransition=d},1289:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaUpload=void 0;const n=o(9392),a=o(5595),s=o(5595);let c=class extends n.LitElement{constructor(){super(...arguments),this.code=""}render(){return n.html``}};c.styles=n.css``,i([(0,s.property)({type:String}),r("design:type",String)],c.prototype,"code",void 0),c=i([(0,a.customElement)("nidoca-upload")],c),e.NidocaUpload=c},8589:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaVideo=void 0;const n=o(9392),a=o(5595);let s=class extends n.LitElement{firstUpdated(t){super.firstUpdated(t),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((t=>{this.videoElement&&(this.videoElement.srcObject=t)}))}render(){return n.html`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `}makeFoto(){if(this.canvasElement&&this.videoElement){const t=this.canvasElement.getContext("2d");if(t){t.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);const e=this.canvasElement.toDataURL("image/jpeg");console.log(e)}}}};s.styles=n.css``,i([(0,a.query)("#video"),r("design:type",Object)],s.prototype,"videoElement",void 0),i([(0,a.query)("#canvas"),r("design:type",Object)],s.prototype,"canvasElement",void 0),i([(0,a.query)("#click-photo"),r("design:type",Object)],s.prototype,"buttonElement",void 0),s=i([(0,a.customElement)("nidoca-video")],s),e.NidocaVideo=s},2757:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaWizardStep=e.WizardStepState=void 0;const n=o(9392),a=o(5595),s=o(5595),c=o(4432);var l;!function(t){t[t.CURRENT=0]="CURRENT",t[t.COMPLETED=1]="COMPLETED",t[t.OPEN=2]="OPEN",t[t.FINISH=3]="FINISH"}(l=e.WizardStepState||(e.WizardStepState={}));let d=class extends n.LitElement{constructor(){super(...arguments),this.icon="",this.primaryText="",this.isLast=!1,this.first=!1}render(){return n.html`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-evenly;align-content:space-evenly;"
      >
        <div
          style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;align-content:space-evenly;"
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${c.NidocaIconShadowType.NONE}"
            .withIconSpace="${!1}"
            .round="${!0}"
            .clickable="${!0}"
            .deactivated="${!1}"
            color="${this.determineColor(this.state)}"
            backgroundColor="${this.determineBackgroundColor(this.state)}"
            size="24"
            @nidoca-event-icon-clicked="${()=>this.stepClicked()}"
            sizeUnit="px"
          >
          </nidoca-icon>

          ${this.isLast?n.html``:n.html`<nidoca-icon color="${this.determineBackgroundColor(this.state)}" icon="label_important">
              </nidoca-icon>`}
        </div>
        <nidoca-text style="width:48px;" text="${this.primaryText}"><slot></slot> </nidoca-text>
      </div>
    `}determineBackgroundColor(t){return t==l.COMPLETED?"var(--app-color-primary)":t==l.CURRENT?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==l.FINISH?"var(--app-color-success)":t==l.COMPLETED?"var(--mdc-theme-on-primary)":t==l.CURRENT?"var(--app-color-secondary)":"var(--app-color-surface)"}stepClicked(){const t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};d.styles=n.css`
    .wizard-step-connector {
      color: var(--app-color-surface);
      background-color: var(--app-color-surface-background);
      padding: var(--space);
    }

    .wizard-step-connector.selected {
      padding: var(--space);
      color: var(--mdc-theme-on-primary);
      background-color: var(--app-color-primary);
    }
  `,i([(0,s.property)({type:String}),r("design:type",String)],d.prototype,"icon",void 0),i([(0,s.property)({type:String}),r("design:type",String)],d.prototype,"primaryText",void 0),i([(0,s.property)({type:Number}),r("design:type",Object)],d.prototype,"state",void 0),i([(0,s.property)({type:Boolean}),r("design:type",Boolean)],d.prototype,"isLast",void 0),d=i([(0,a.customElement)("nidoca-wizard-step")],d),e.NidocaWizardStep=d},9046:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaWizard=void 0;const n=o(9392),a=o(5595),s=o(2757);let c=class extends n.LitElement{render(){return n.html`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${t=>this.stepClicked(t)}"
      >
        <slot id="wizardSlot" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </div>
    `}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements();let i=0;for(let t=0;t<o.length;t++){const e=o[t];e instanceof s.NidocaWizardStep&&(e.index=t,e.state==s.WizardStepState.CURRENT&&(i=t),e.index==o.length-1&&(e.isLast=!0))}this.changeState(i)}stepClicked(t){const e=t.detail;console.debug("wizard step clicked, selectedStepIndex: %s",e),this.changeState(e)}changeState(t){if(this.wizardSlot){const e=this.wizardSlot.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof s.NidocaWizardStep&&void 0!==i.index&&(i.index<t?i.state=s.WizardStepState.COMPLETED:i.index==t?i.state=s.WizardStepState.CURRENT:i.state=s.WizardStepState.OPEN)}}}};c.styles=n.css``,i([(0,a.query)("#wizardSlot"),r("design:type",Object)],c.prototype,"wizardSlot",void 0),c=i([(0,a.customElement)("nidoca-wizard")],c),e.NidocaWizard=c},9649:function(t,e,o){var i=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(e,"__esModule",{value:!0}),e.NidocaPageLogin=void 0;const r=o(9392),n=o(5595);let a=class extends r.LitElement{render(){return r.html`
      <nidoca-form-login class="left"></nidoca-form-login>
      <nidoca-img class="right" src="http://nidoca.eu/img/IMG_0524.jpg"></nidoca-img>
    `}};a.styles=r.css`
    :host {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 100vh;
      width: 100vw;
    }

    .right {
      background-color: var(--app-color-primary-background);
    }

    .left {
      margin: auto;
      width: min-content;
      height: min-content;
    }

    @media only screen and (max-width: 640px) {
      :host {
        grid-template-columns: 1fr;
      }
      .right {
        display: block;
        overflow: hidden;
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: 0.1;
        z-index: -1;
      }
    }
  `,a=i([(0,n.customElement)("nidoca-page-login")],a),e.NidocaPageLogin=a},875:(t,e,o)=>{o.d(e,{XM:()=>r,Xe:()=>n,pX:()=>i});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=t=>(...e)=>({_$litDirective$:t,values:e});class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},3692:(t,e,o)=>{var i;o.d(e,{Al:()=>z,Jb:()=>R,Ld:()=>E,YP:()=>S,dy:()=>_,sY:()=>O});const r=globalThis.trustedTypes,n=r?r.createPolicy("lit-html",{createHTML:t=>t}):void 0,a=`lit$${(Math.random()+"").slice(9)}$`,s="?"+a,c=`<${s}>`,l=document,d=(t="")=>l.createComment(t),p=t=>null===t||"object"!=typeof t&&"function"!=typeof t,h=Array.isArray,f=t=>{var e;return h(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},u=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,y=/>/g,g=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,b=/'/g,v=/"/g,x=/^(?:script|style|textarea|title)$/i,w=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),_=w(1),S=w(2),R=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),$=new WeakMap,O=(t,e,o)=>{var i,r;const n=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:e;let a=n._$litPart$;if(void 0===a){const t=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:null;n._$litPart$=a=new C(e.insertBefore(d(),t),t,void 0,null!=o?o:{})}return a._$AI(t),a},T=l.createTreeWalker(l,129,null,!1),k=(t,e)=>{const o=t.length-1,i=[];let r,s=2===e?"<svg>":"",l=u;for(let e=0;e<o;e++){const o=t[e];let n,d,p=-1,h=0;for(;h<o.length&&(l.lastIndex=h,d=l.exec(o),null!==d);)h=l.lastIndex,l===u?"!--"===d[1]?l=m:void 0!==d[1]?l=y:void 0!==d[2]?(x.test(d[2])&&(r=RegExp("</"+d[2],"g")),l=g):void 0!==d[3]&&(l=g):l===g?">"===d[0]?(l=null!=r?r:u,p=-1):void 0===d[1]?p=-2:(p=l.lastIndex-d[2].length,n=d[1],l=void 0===d[3]?g:'"'===d[3]?v:b):l===v||l===b?l=g:l===m||l===y?l=u:(l=g,r=void 0);const f=l===g&&t[e+1].startsWith("/>")?" ":"";s+=l===u?o+c:p>=0?(i.push(n),o.slice(0,p)+"$lit$"+o.slice(p)+a+f):o+a+(-2===p?(i.push(void 0),e):f)}const d=s+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==n?n.createHTML(d):d,i]};class j{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let n=0,c=0;const l=t.length-1,p=this.parts,[h,f]=k(t,e);if(this.el=j.createElement(h,o),T.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=T.nextNode())&&p.length<l;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(a)){const o=f[c++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+"$lit$").split(a),e=/([.?@])?(.*)/.exec(o);p.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?L:"?"===e[1]?I:"@"===e[1]?M:A})}else p.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(x.test(i.tagName)){const t=i.textContent.split(a),e=t.length-1;if(e>0){i.textContent=r?r.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],d()),T.nextNode(),p.push({type:2,index:++n});i.append(t[e],d())}}}else if(8===i.nodeType)if(i.data===s)p.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(a,t+1));)p.push({type:7,index:n}),t+=a.length-1}n++}}static createElement(t,e){const o=l.createElement("template");return o.innerHTML=t,o}}function N(t,e,o=t,i){var r,n,a,s;if(e===R)return e;let c=void 0!==i?null===(r=o._$Cl)||void 0===r?void 0:r[i]:o._$Cu;const l=p(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(n=null==c?void 0:c._$AO)||void 0===n||n.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,o,i)),void 0!==i?(null!==(a=(s=o)._$Cl)&&void 0!==a?a:s._$Cl=[])[i]=c:o._$Cu=c),void 0!==c&&(e=N(t,c._$AS(t,e.values),c,i)),e}class P{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:l).importNode(o,!0);T.currentNode=r;let n=T.nextNode(),a=0,s=0,c=i[0];for(;void 0!==c;){if(a===c.index){let e;2===c.type?e=new C(n,n.nextSibling,this,t):1===c.type?e=new c.ctor(n,c.name,c.strings,this,t):6===c.type&&(e=new B(n,this,t)),this.v.push(e),c=i[++s]}a!==(null==c?void 0:c.index)&&(n=T.nextNode(),a++)}return r}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class C{constructor(t,e,o,i){var r;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cg=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),p(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==R&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):f(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==E&&p(this._$AH)?this._$AA.nextSibling.data=t:this.k(l.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=j.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(o);else{const t=new P(r,this),e=t.p(this.options);t.m(o),this.k(e),this._$AH=t}}_$AC(t){let e=$.get(t.strings);return void 0===e&&$.set(t.strings,e=new j(t)),e}S(t){h(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const r of t)i===e.length?e.push(o=new C(this.M(d()),this.M(d()),this,this.options)):o=e[i],o._$AI(r),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class A{constructor(t,e,o,i,r){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const r=this.strings;let n=!1;if(void 0===r)t=N(this,t,e,0),n=!p(t)||t!==this._$AH&&t!==R,n&&(this._$AH=t);else{const i=t;let a,s;for(t=r[0],a=0;a<r.length-1;a++)s=N(this,i[o+a],e,a),s===R&&(s=this._$AH[a]),n||(n=!p(s)||s!==this._$AH[a]),s===E?t=E:t!==E&&(t+=(null!=s?s:"")+r[a+1]),this._$AH[a]=s}n&&!i&&this.C(t)}C(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class L extends A{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===E?void 0:t}}const D=r?r.emptyScript:"";class I extends A{constructor(){super(...arguments),this.type=4}C(t){t&&t!==E?this.element.setAttribute(this.name,D):this.element.removeAttribute(this.name)}}class M extends A{constructor(t,e,o,i,r){super(t,e,o,i,r),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=N(this,t,e,0))&&void 0!==o?o:E)===R)return;const i=this._$AH,r=t===E&&i!==E||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==E&&(i===E||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class B{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const z={L:"$lit$",P:a,V:s,I:1,N:k,R:P,j:f,D:N,H:C,F:A,O:I,W:M,B:L,Z:B},H=window.litHtmlPolyfillSupport;null==H||H(j,C),(null!==(i=globalThis.litHtmlVersions)&&void 0!==i?i:globalThis.litHtmlVersions=[]).push("2.2.6")},5595:(t,e,o)=>{o.r(e),o.d(e,{customElement:()=>i,eventOptions:()=>c,property:()=>n,query:()=>l,queryAll:()=>d,queryAssignedElements:()=>u,queryAssignedNodes:()=>m,queryAsync:()=>p,state:()=>a});const i=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:i}=e;return{kind:o,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),r=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function n(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):r(t,e)}function a(t){return n({...t,state:!0})}const s=({finisher:t,descriptor:e})=>(o,i)=>{var r;if(void 0===i){const i=null!==(r=o.originalKey)&&void 0!==r?r:o.key,n=null!=e?{kind:"method",placement:"prototype",key:i,descriptor:e(o.key)}:{...o,key:i};return null!=t&&(n.finisher=function(e){t(e,i)}),n}{const r=o.constructor;void 0!==e&&Object.defineProperty(o,i,e(i)),null==t||t(r,i)}};function c(t){return s({finisher:(e,o)=>{Object.assign(e.prototype[o],t)}})}function l(t,e){return s({descriptor:o=>{const i={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;i.get=function(){var o,i;return void 0===this[e]&&(this[e]=null!==(i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t))&&void 0!==i?i:null),this[e]}}return i}})}function d(t){return s({descriptor:e=>({get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t))&&void 0!==o?o:[]},enumerable:!0,configurable:!0})})}function p(t){return s({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}var h;const f=null!=(null===(h=window.HTMLSlotElement)||void 0===h?void 0:h.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function u(t){const{slot:e,selector:o}=null!=t?t:{};return s({descriptor:i=>({get(){var i;const r="slot"+(e?`[name=${e}]`:":not([name])"),n=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(r),a=null!=n?f(n,t):[];return o?a.filter((t=>t.matches(o))):a},enumerable:!0,configurable:!0})})}function m(t,e,o){let i,r=t;return"object"==typeof t?(r=t.slot,i=t):i={flatten:e},o?u({slot:r,flatten:e,selector:o}):s({descriptor:t=>({get(){var t,e;const o="slot"+(r?`[name=${r}]`:":not([name])"),n=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(o);return null!==(e=null==n?void 0:n.assignedNodes(i))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}},3012:(t,e,o)=>{o.r(e),o.d(e,{guard:()=>a});var i=o(3692),r=o(875);const n={},a=(0,r.XM)(class extends r.Xe{constructor(){super(...arguments),this.nt=n}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.nt)&&this.nt.length===e.length&&e.every(((t,e)=>t===this.nt[e])))return i.Jb}else if(this.nt===e)return i.Jb;return this.nt=Array.isArray(e)?Array.from(e):e,this.render(e,o)}})},796:(t,e,o)=>{o.r(e),o.d(e,{ifDefined:()=>r});var i=o(3692);const r=t=>null!=t?t:i.Ld},2386:(t,e,o)=>{o.r(e),o.d(e,{repeat:()=>h});var i=o(3692),r=o(875);const{H:n}=i.Al,a=()=>document.createComment(""),s=(t,e,o)=>{var i;const r=t._$AA.parentNode,s=void 0===e?t._$AB:e._$AA;if(void 0===o){const e=r.insertBefore(a(),s),i=r.insertBefore(a(),s);o=new n(e,i,t,t.options)}else{const e=o._$AB.nextSibling,n=o._$AM,a=n!==t;if(a){let e;null===(i=o._$AQ)||void 0===i||i.call(o,t),o._$AM=t,void 0!==o._$AP&&(e=t._$AU)!==n._$AU&&o._$AP(e)}if(e!==s||a){let t=o._$AA;for(;t!==e;){const e=t.nextSibling;r.insertBefore(t,s),t=e}}}return o},c=(t,e,o=t)=>(t._$AI(e,o),t),l={},d=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let o=t._$AA;const i=t._$AB.nextSibling;for(;o!==i;){const t=o.nextSibling;o.remove(),o=t}},p=(t,e,o)=>{const i=new Map;for(let r=e;r<=o;r++)i.set(t[r],r);return i},h=(0,r.XM)(class extends r.Xe{constructor(t){if(super(t),t.type!==r.pX.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,o){let i;void 0===o?o=e:void 0!==e&&(i=e);const r=[],n=[];let a=0;for(const e of t)r[a]=i?i(e,a):a,n[a]=o(e,a),a++;return{values:n,keys:r}}render(t,e,o){return this.dt(t,e,o).values}update(t,[e,o,r]){var n;const a=t._$AH,{values:h,keys:f}=this.dt(e,o,r);if(!Array.isArray(a))return this.ut=f,h;const u=null!==(n=this.ut)&&void 0!==n?n:this.ut=[],m=[];let y,g,b=0,v=a.length-1,x=0,w=h.length-1;for(;b<=v&&x<=w;)if(null===a[b])b++;else if(null===a[v])v--;else if(u[b]===f[x])m[x]=c(a[b],h[x]),b++,x++;else if(u[v]===f[w])m[w]=c(a[v],h[w]),v--,w--;else if(u[b]===f[w])m[w]=c(a[b],h[w]),s(t,m[w+1],a[b]),b++,w--;else if(u[v]===f[x])m[x]=c(a[v],h[x]),s(t,a[b],a[v]),v--,x++;else if(void 0===y&&(y=p(f,x,w),g=p(u,b,v)),y.has(u[b]))if(y.has(u[v])){const e=g.get(f[x]),o=void 0!==e?a[e]:null;if(null===o){const e=s(t,a[b]);c(e,h[x]),m[x]=e}else m[x]=c(o,h[x]),s(t,a[b],o),a[e]=null;x++}else d(a[v]),v--;else d(a[b]),b++;for(;x<=w;){const e=s(t,m[w+1]);c(e,h[x]),m[x++]=e}for(;b<=v;){const t=a[b++];null!==t&&d(t)}return this.ut=f,((t,e=l)=>{t._$AH=e})(t,m),i.Jb}})},9392:(t,e,o)=>{o.r(e),o.d(e,{CSSResult:()=>a,LitElement:()=>S,ReactiveElement:()=>b,UpdatingElement:()=>_,_$LE:()=>E,_$LH:()=>w.Al,adoptStyles:()=>l,css:()=>c,defaultConverter:()=>m,getCompatibleStyle:()=>d,html:()=>w.dy,noChange:()=>w.Jb,notEqual:()=>y,nothing:()=>w.Ld,render:()=>w.sY,supportsAdoptingStyleSheets:()=>i,svg:()=>w.YP,unsafeCSS:()=>s});const i=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;class a{constructor(t,e,o){if(this._$cssResult$=!0,o!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&n.set(e,t))}return t}toString(){return this.cssText}}const s=t=>new a("string"==typeof t?t:t+"",void 0,r),c=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new a(o,t,r)},l=(t,e)=>{i?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style"),i=window.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=e.cssText,t.appendChild(o)}))},d=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return s(e)})(t):t;var p;const h=window.trustedTypes,f=h?h.emptyScript:"",u=window.reactiveElementPolyfillSupport,m={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},y=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:y};class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const i=this._$Ep(o,e);void 0!==i&&(this._$Ev.set(i,o),t.push(i))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=g){var i,r;const n=this.constructor._$Ep(t,o);if(void 0!==n&&!0===o.reflect){const a=(null!==(r=null===(i=o.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==r?r:m.toAttribute)(e,o.type);this._$El=t,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$El=null}}_$AK(t,e){var o,i;const r=this.constructor,n=r._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=r.getPropertyOptions(n),a=t.converter,s=null!==(i=null!==(o=null==a?void 0:a.fromAttribute)&&void 0!==o?o:"function"==typeof a?a:null)&&void 0!==i?i:m.fromAttribute;this._$El=n,this[n]=s(e,t.type),this._$El=null}}requestUpdate(t,e,o){let i=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||y)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:b}),(null!==(p=globalThis.reactiveElementVersions)&&void 0!==p?p:globalThis.reactiveElementVersions=[]).push("1.3.3");var v,x,w=o(3692);const _=b;class S extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,w.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return w.Jb}}S.finalized=!0,S._$litElement$=!0,null===(v=globalThis.litElementHydrateSupport)||void 0===v||v.call(globalThis,{LitElement:S});const R=globalThis.litElementPolyfillSupport;null==R||R({LitElement:S});const E={_$AK:(t,e,o)=>{t._$AK(e,o)},_$AL:t=>t._$AL};(null!==(x=globalThis.litElementVersions)&&void 0!==x?x:globalThis.litElementVersions=[]).push("3.2.1")}},e={};function o(i){var r=e[i];if(void 0!==r)return r.exports;var n=e[i]={exports:{}};return t[i].call(n.exports,n,n.exports,o),n.exports}o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o(4432)})();