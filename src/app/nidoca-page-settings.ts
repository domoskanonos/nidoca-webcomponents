import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import {guard} from "lit/directives/guard.js";
import {repeat} from "lit/directives/repeat.js";
import {NidocaFormText, NidocaFormTextType} from "../index";

import Oidc, {WebStorageStateStore} from "oidc-client";


export const mgr = new Oidc.UserManager({
  userStore: new WebStorageStateStore({}),
  authority: "https://89.58.33.189:8443/auth/realms/master/.well-known/openid-configuration",
  client_id: "postgrest",
  redirect_uri: window.location.origin+"#main",
  response_type: "id_token token",
  scope: "openid profile address roles identityserver4api country subscriptionlevel offline_access",
  post_logout_redirect_uri: window.location.origin + "/index.html",
  silent_redirect_uri: window.location.origin + "/static/silent-renew.html",
  accessTokenExpiringNotificationTime: 10,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
});



@customElement("nidoca-page-settings")
export class NidocaPageSettings extends LitElement {
  static styles = css``;

  @property({type: Array})
  cssVars: string[] = [];

  constructor() {
    super();

    mgr.signinRedirect(() => {
      console.log("huhuh");
    });
    

    const getAllCSSVariableNames = (styleSheets: StyleSheetList = document.styleSheets) => {
      const cssVars: string[] = [];

      Array.from(styleSheets).forEach((styleSheet) => {
        Array.from(styleSheet.cssRules).forEach((rule: any) => {
          if (!rule || !rule["style"]) {
            return;
          }

          const styleArray: string[] = rule["style"];
          Array.from(styleArray).forEach((style: string) => {
            if (style.startsWith("--") && cssVars.indexOf(style) == -1) {
              cssVars.push(style);
            }
          });
        });
      });

      return cssVars;
    };

    this.cssVars = getAllCSSVariableNames();
  }

  render(): TemplateResult {
    return html`
      <nidoca-layout-spacer top="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="CSS Variablen">
            ${guard(
              [this.cssVars],
              () =>
                html`
                  ${repeat(
                    this.cssVars,
                    (cssVar) => html`
                      <nidoca-form-text
                        style="width:100%;"
                        @input="${(event: InputEvent) => {
                          document.documentElement.style.setProperty(
                            cssVar,
                            event.target ? (<NidocaFormText>event.target).getOutputData().value : ""
                          );
                        }}"
                        type="${cssVar.indexOf("color") > -1 ? NidocaFormTextType.COLOR : NidocaFormTextType.TEXT}"
                        name="${cssVar}"
                        value="${getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim()}"
                        label="${cssVar}"
                      ></nidoca-form-text>
                      <nidoca-layout-spacer top="var(--space-3)"></nidoca-layout-spacer>
                    `
                  )}
                `
            )}
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>
    `;
  }
}
