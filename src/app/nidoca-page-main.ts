import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement} from 'lit/decorators.js';
import {NidocaImgRound} from '../nidoca-img-round';
import {NidocaList} from '../nidoca-list';
import {NidocaListItem} from '../nidoca-list-item';
import {NidocaListSection} from '../nidoca-list-section';

@customElement('nidoca-page-main')
export class NidocaPageMain extends LitElement {
  static styles = css``;
  render(): TemplateResult {
    return html`
      <nidoca-container style="">
        <div style="display:flex;align-items:center;justify-content:center;align-content:flex-start;">
          <nidoca-img src="logo.svg" width="128px"></nidoca-img>
          <nidoca-text-h2 style="padding-left:var(--space-2);">nidoca-webcomponents</nidoca-text-h2>
        </div>
      </nidoca-container>
      <!--
      <nidoca-container theme="primary">
        <nidoca-text-h1 style="text-align:center;">HTML Einbindung</nidoca-text-h1>

        <nidoca-code
          >&lt;script
          src=&quot;https://domoskanonos.github.io/nidoca-webcomponents/webcomponents/nidoca-webcomponents.js&quot;&gt;&lt;/script&gt;
          &lt;style&gt;@import
          url(&#39;https://domoskanonos.github.io/nidoca-webcomponents/webcomponents/nidoca.css&#39;);&lt;/style&gt;
          &lt;nidoca-button&gt;Mein Button&lt;/nidoca-button&gt;
        </nidoca-code>
      </nidoca-container>
  -->
      <nidoca-container>
        <nidoca-text-h1 style="text-align:center;">Komponenten</nidoca-text-h1>
      </nidoca-container>

      ${this.getComponentHtml(NidocaImgRound, new NidocaImgRound(), 'Rundes Bild')}
      ${this.getComponentHtml(
        NidocaListSection,
        new NidocaListSection(),
        'Unterkomponente für die Komponente <nidoca-list/>'
      )}
      ${this.getComponentHtml(
        NidocaListItem,
        new NidocaListItem(),
        'Unterkomponente für die Komponente <nidoca-list/>'
      )}
      ${this.getComponentHtml(
        NidocaList,
        new NidocaList(),
        'Listenkomponente für mobile und Desktop Anwendungen. Unterkomponenten dieser Komponente sind nidoca-list-section und nidoca-list-item'
      )}
    `;
  }

  getComponentHtml(clazz: any, instance: any, text: string) {
    return html` <nidoca-container>
      <nidoca-section style="padding:var(--space-4);">
        <nidoca-card theme="primary" style="padding:var(--space-4); heigth:500px;"> ${clazz.example()} </nidoca-card>
        <nidoca-article
          style="padding:var(--space-4);"
          theme="surface"
          overline="<${instance.tagName}></${instance.tagName}>"
          title="${instance.tagName}"
          text="${text}"
        >
          <nidoca-button
            style="width:250px;"
            @nidoca-event-button-clicked="${() =>
              window.open('https://domoskanonos.github.io/nidoca-lit-viewer/', '_blank')}"
            >Ausprobieren</nidoca-button
          >
        </nidoca-article>
      </nidoca-section>
    </nidoca-container>`;
  }
}
