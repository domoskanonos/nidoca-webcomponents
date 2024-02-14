import {css, html, LitElement, TemplateResult} from 'lit';
import {NidocaHtml} from '../nidoca-html';

import {customElement} from 'lit/decorators.js';
import {NidocaAccordion} from '../nidoca-accordion';
import {NidocaArticle} from '../nidoca-article';
import {NidocaAvatar} from '../nidoca-avatar';
import {NidocaButton} from '../nidoca-button';
import {NidocaChip} from '../nidoca-chip';
import {NidocaCode} from '../nidoca-code';
import {NidocaIcon} from '../nidoca-icon';
import {NidocaIconExtended} from '../nidoca-icon-extended';
import {NidocaImg} from '../nidoca-img';
import {NidocaImgRound} from '../nidoca-img-round';
import {NidocaInfobox} from '../nidoca-infobox';
import {NidocaList} from '../nidoca-list';
import {NidocaListItem} from '../nidoca-list-item';
import {NidocaListSection} from '../nidoca-list-section';
import {NidocaMenu} from '../nidoca-menu';
import {NidocaMenuArea} from '../nidoca-menu-area';
import {NidocaMenuItem} from '../nidoca-menu-item';
import {NidocaSearchBar} from '../nidoca-search-bar';
import {NidocaTab} from '../nidoca-tab';
import {NidocaTabs} from '../nidoca-tabs';
import {NidocaText} from '../nidoca-text';
import {NidocaTopAppBar} from '../nidoca-top-app-bar';

@customElement('nidoca-page-main')
export class NidocaPageMain extends NidocaHtml {
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

      ${this.getComponentHtml(NidocaInfobox, new NidocaInfobox(), 'Infobox Komponente.')}
      ${this.getComponentHtml(NidocaIconExtended, new NidocaIconExtended(), 'Standard Icon Komponente.')}
      ${this.getComponentHtml(NidocaIcon, new NidocaIcon(), 'Standard Icon Komponente.')}
      ${this.getComponentHtml(NidocaIcon, new NidocaIcon(), 'Standard Icon Komponente.')}
      ${this.getComponentHtml(NidocaCode, new NidocaCode(), 'Komponente um Quellcode darzustellen.')}
      ${this.getComponentHtml(NidocaTabs, new NidocaTabs(), 'Top App Bar Komponente')}
      ${this.getComponentHtml(NidocaText, new NidocaText(), 'Typography Komponenten')}
      ${this.getComponentHtml(NidocaTopAppBar, new NidocaTopAppBar(), 'Top App Bar Komponente')}
      ${this.getComponentHtml(NidocaChip, new NidocaChip(), 'Chip Komponente')}
      ${this.getComponentHtml(NidocaArticle, new NidocaArticle(), 'Artikel Komponente')}
      ${this.getComponentHtml(NidocaAccordion, new NidocaAccordion(), 'Accordion Komponente')}
      ${this.getComponentHtml(NidocaButton, new NidocaButton(), 'Button')}
      ${this.getComponentHtml(NidocaMenu, new NidocaMenu(), 'Menü')}
      ${this.getComponentHtml(NidocaMenuItem, new NidocaMenuItem(), 'Menüelement')}
      ${this.getComponentHtml(NidocaMenuArea, new NidocaMenuArea(), 'Menübereich')}
      ${this.getComponentHtml(NidocaSearchBar, new NidocaSearchBar(), 'Suchfeld')}
      ${this.getComponentHtml(NidocaImg, new NidocaImg(), 'Einfaches Bild')}
      ${this.getComponentHtml(NidocaImgRound, new NidocaImgRound(), 'Rundes Bild')}
      ${this.getComponentHtml(NidocaAvatar, new NidocaAvatar(), 'Avatar Komponente, Bild mit Text')}
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
        <nidoca-card style="padding:var(--space-4); heigth:500px;"> ${clazz.example()} </nidoca-card>
        <nidoca-article
          style="padding:var(--space-4);"
          theme="plain"
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
