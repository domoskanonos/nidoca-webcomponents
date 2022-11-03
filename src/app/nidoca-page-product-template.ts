import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement} from 'lit/decorators.js';
import {NidocaArticle} from '../nidoca-article';

@customElement('nidoca-page-product-template')
export class NidocaPageProductTemplate extends LitElement {
  static styles = css`
    .infobox {
      padding: var(--space-2);
    }
  `;
  render(): TemplateResult {
    return html`
      <nidoca-section>
        <nidoca-img-slider>
          <nidoca-img src="https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113__340.jpg"></nidoca-img>
          <nidoca-img src="https://cdn.pixabay.com/photo/2014/10/23/20/51/iphone-500291__340.jpg"></nidoca-img>
          <nidoca-img src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876__340.jpg"></nidoca-img>
        </nidoca-img-slider>

        <nidoca-article
          title="Homepage als Android App"
          overline="Native App Rahmenanwendung"
          summary="Ihre Internetpräsenz als native Android Anwendung"
        >
          <nidoca-text-body>
            Mobile Applikationen, kurz Apps, gehören heutzutage ins Pflichtenheft der Marketingstrategien eines
            Unternehmens. Mit unserem günstigen Angebot haben Sie die Möglichkeit, ihren responsiven Internetauftritt
            innerhalb einer native Android Anwendung zu integrieren und somit einen sehr großen weiteren Vertriebskanal
            für ihr Unternehmen zu nutzen. Der Anteil an Smartphones mit dem Betriebssystem Android erreichte im Jahr
            2022 einen Marktanteil von über 70 Prozent. Dies wären alleine für Deutschland umgerechnet 70 Millionen
            Smartphones. Ihr Nutzen: Mehr Performance und hochwertiger Eindruck Besseres Ranking Hohe
            Bedienungsfreundlichkeit Passgenau für das Betriebssystem Erweiterung des Vertriebskanals
          </nidoca-text-body>

          <nidoca-button style="width:175px;">Sofort-Kaufen</nidoca-button>
          <nidoca-button
            
            @click="${() => window.open('https://www.ebay.de/usr/dortmund.digital', '_blanck')}"
            >Verkäuferprofil</nidoca-button
          >


          <nidoca-button
            
            @click="${() => window.open('https://feedback.ebay.de/fdbk/feedback_profile/dortmund.digital', '_blanck')}"
            >Unsere Bewertungen</nidoca-button
          >

          <nidoca-button
            
            @click="${() => window.open('https://www.ebay.de/contact/sendmsg?&recipient=dortmund.digital', '_blanck')}"
            >Kontakt</nidoca-button
          >
          
          
          
        </nidoca-article>
      </nidoca-section>

      <nidoca-section>
        <nidoca-infobox icon="handshake" class="infobox">
          <nidoca-text-h5 theme="surface">Weiterer Vertriebskanal</nidoca-text-h5>
          <nidoca-text-body theme="surface"
            >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere Community
            stärken.</nidoca-text-body
          >
        </nidoca-infobox>

        <nidoca-infobox icon="handshake" class="infobox">
          <nidoca-text-h5 theme="surface">Zeit sparen</nidoca-text-h5>
          <nidoca-text-body theme="surface"
            >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere Community
            stärken.</nidoca-text-body
          >
        </nidoca-infobox>

        <nidoca-infobox icon="handshake" class="infobox">
          <nidoca-text-h5 theme="surface">Community</nidoca-text-h5>
          <nidoca-text-body theme="surface"
            >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere Community
            stärken.</nidoca-text-body
          >
        </nidoca-infobox>

        <nidoca-infobox icon="handshake" class="infobox">
          <nidoca-text-h5 theme="surface">Community</nidoca-text-h5>
          <nidoca-text-body theme="surface"
            >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere Community
            stärken.</nidoca-text-body
          >
        </nidoca-infobox>
      </nidoca-section>
    `;
  }
}
