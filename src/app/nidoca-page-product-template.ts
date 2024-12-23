import {css, html, LitElement, TemplateResult} from 'lit';
import {NidocaHtml} from '../nidoca-html';

import {customElement} from 'lit/decorators.js';
import {NidocaArticle} from '../nidoca-article';

@customElement('nidoca-page-product-template')
export class NidocaPageProductTemplate extends NidocaHtml {
  static styles = css`
    .infobox {
      padding: var(--space-2);
    }
  `;
  render(): TemplateResult {
    return html`
      <nidoca-container>
        <nidoca-section>
          <nidoca-img-slider>
            <nidoca-img src="https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2014/10/23/20/51/iphone-500291__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2014/10/23/20/51/iphone-500291__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2014/10/23/20/51/iphone-500291__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2014/10/23/20/51/iphone-500291__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2014/10/23/20/51/iphone-500291__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876__340.jpg"></nidoca-img>
          </nidoca-img-slider>

          <nidoca-article
            style="padding:var(--space-8);"
            title="Auktionsvorlage"
            overline="Responsive moderne Auktionsvorlage für Ihre Produkte"
            summary="Digitales Produkt, direkter Download, kostenloser Versand"
          >
            <nidoca-text-body>
              Mit dieser Auktionsvorlage verbessern Sie Ihre Verkaufschancen und erhöhen Ihren Umsatz. Durch das moderne
              Design und responsive Layout heben Sie sich deutlich von der Konkurrenz ab und überzeugen durch ein
              seriösen, ausdrucksstarken Auftritt.
            </nidoca-text-body>

            <nidoca-section style="padding-top:var(--space-2);">
              <nidoca-button style="padding-right:var(--space-2);" icon="shopping_cart">Sofort-Kaufen</nidoca-button>
              <nidoca-button
                style=""
                icon="contact_support"
                @click="${() =>
                  window.open('https://www.ebay.de/contact/sendmsg?&recipient=dortmund.digital', '_blanck')}"
                >Frage stellen</nidoca-button
              >
            </nidoca-section>
          </nidoca-article>
        </nidoca-section>

        <nidoca-hr text="Unser Angebot"></nidoca-hr>

        <nidoca-section style="padding-bottom:var(--space-3);">
          <nidoca-infobox icon="handshake" class="infobox">
            <nidoca-text-h5 theme="surface">Weiterer Vertriebskanal</nidoca-text-h5>
            <nidoca-text-body theme="surface"
              >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere
              Community stärken.</nidoca-text-body
            >
          </nidoca-infobox>
          <nidoca-infobox icon="handshake" class="infobox">
            <nidoca-text-h5 theme="surface">Zeit sparen</nidoca-text-h5>
            <nidoca-text-body theme="surface"
              >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere
              Community stärken.</nidoca-text-body
            >
          </nidoca-infobox>

          <nidoca-infobox icon="handshake" class="infobox">
            <nidoca-text-h5 theme="surface">Community</nidoca-text-h5>
            <nidoca-text-body theme="surface"
              >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere
              Community stärken.</nidoca-text-body
            >
          </nidoca-infobox>

          <nidoca-infobox icon="handshake" class="infobox">
            <nidoca-text-h5 theme="surface">Community</nidoca-text-h5>
            <nidoca-text-body theme="surface"
              >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere
              Community stärken.</nidoca-text-body
            >
          </nidoca-infobox>
        </nidoca-section>

        <nidoca-hr text="Ihre Vorteile"></nidoca-hr>

        <nidoca-section style="padding-bottom:var(--space-3);">
          <nidoca-infobox icon="handshake" class="infobox">
            <nidoca-text-h5 theme="surface">Weiterer Vertriebskanal</nidoca-text-h5>
            <nidoca-text-body theme="surface"
              >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere
              Community stärken.</nidoca-text-body
            >
          </nidoca-infobox>
          <nidoca-infobox icon="handshake" class="infobox">
            <nidoca-text-h5 theme="surface">Zeit sparen</nidoca-text-h5>
            <nidoca-text-body theme="surface"
              >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere
              Community stärken.</nidoca-text-body
            >
          </nidoca-infobox>

          <nidoca-infobox icon="handshake" class="infobox">
            <nidoca-text-h5 theme="surface">Community</nidoca-text-h5>
            <nidoca-text-body theme="surface"
              >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere
              Community stärken.</nidoca-text-body
            >
          </nidoca-infobox>

          <nidoca-infobox icon="handshake" class="infobox">
            <nidoca-text-h5 theme="surface">Community</nidoca-text-h5>
            <nidoca-text-body theme="surface"
              >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere
              Community stärken.</nidoca-text-body
            >
          </nidoca-infobox>
        </nidoca-section>

        <nidoca-section style="padding-top:var(--space-8);">
          <nidoca-article title="Digital-U GmbH">
            <nidoca-text-body
              >Die Digital-U GmbH wurde im Jahr 2016 gegründet. Der Firmensitz befindet sich in der Bier- und
              Fußballhauptstadt Dortmund. Wir sind ein junges Team, das es sich zur Aufgabe gemacht hat, echten Mehrwert
              für Unternehmen zu schaffen.</nidoca-text-body
            >
            <nidoca-text-body
              >Für unsere Kunden entwickeln wir digitale Lösungen und individuelle Benutzeroberflächen. Dabei setzen wir
              auf aktuelle Technologien und einer agilen Softwareentwicklung. Egal ob moderne progressive
              Webanwendungen, native Apps oder klassische Desktopoberflächen. Unser Team besteht aus Mitarbeitern aus
              den Bereichen Betriebswirtschaft, Marketing und Vertrieb und IT mit insgesamt über einem halben
              Jahrhundert Berufserfahrung.</nidoca-text-body
            >
            <nidoca-section style="padding-top:var(--space-2);">
              <nidoca-button
                style="padding-right:var(--space-2);"
                @click="${() => window.open('https://www.ebay.de/usr/dortmund.digital', '_blanck')}"
                >Verkäuferprofil</nidoca-button
              >
              <nidoca-button
                @click="${() =>
                  window.open('https://feedback.ebay.de/fdbk/feedback_profile/dortmund.digital', '_blanck')}"
                >Unsere Bewertungen</nidoca-button
              >
            </nidoca-section>
          </nidoca-article>
          <nidoca-img
            width="320px"
            style="text-align:center;"
            src="https://github.com/DortmundDigital/android-webview/raw/main/taxlancer/logo.png"
          ></nidoca-img>
        </nidoca-section>
      </nidoca-container>
    `;
  }
}
