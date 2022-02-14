import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaTargetType} from "../index";

@customElement("nidoca-page-imprint")
export class NidocaPageSettings extends LitElement {
  static styles = css``;
  render(): TemplateResult {
    return html`
      <nidoca-layout-spacer top="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Impressum" summary="Angaben gemäß § 5 TMG">
            <nidoca-text-body>Dominik Bruhn</nidoca-text-body>
            <nidoca-text-body>Holzwickeder Straße 109c</nidoca-text-body>
            <nidoca-text-body>44309 Dortmund</nidoca-text-body>
            <nidoca-layout-spacer></nidoca-layout-spacer>
            <nidoca-text-body
              >Telefonnummer: +49 152 052 488 62</nidoca-text-body
            >
            <nidoca-text-body
              >E-Mail: dominikbruhn [at] googlemail.com</nidoca-text-body
            >
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>
      <nidoca-layout-spacer top="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Streitsschlichtung">
            <nidoca-text-body
              >Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <nidoca-link href="https://ec.europa.eu/consumers/odr" targetType="${NidocaTargetType.BLANK}"
                >https://ec.europa.eu/consumers/odr</nidoca-link
              >. <br />Unsere E-Mail-Adresse und Telefonnummer finden Sie oben auf dieser Seite.</nidoca-text-body
            >
            <nidoca-text-body
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </nidoca-text-body>
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <nidoca-layout-spacer top="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Haftungsinhalt">
            <nidoca-text-body>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
              eine rechtswidrige Tätigkeit hinweisen.<br />
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </nidoca-text-body>
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <nidoca-layout-spacer top="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Haftungslinks">
            <nidoca-text-body>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </nidoca-text-body>
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <nidoca-layout-spacer top="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Copyright">
            <nidoca-text-body>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.<br />
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
              von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </nidoca-text-body>
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <nidoca-layout-spacer top="var(--space-8)" bottom="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Quelle">
            <nidoca-link href="https://www.e-recht24.de/impressum-generator.html" targetType="${NidocaTargetType.BLANK}"
              >https://www.e-recht24.de/impressum-generator.html</nidoca-link
            >
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <div style="padding-top:var(--space-8); padding-bottom:var(--space-8);">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Google Material Icons">
            <nidoca-link href="https://fonts.google.com/icons" targetType="${NidocaTargetType.BLANK}"
              >https://fonts.google.com/icons</nidoca-link
            >
          </nidoca-article>
        </nidoca-section>
        <nidoca-section style="width:50%;">
          <nidoca-article title="Google Fonts">
            <nidoca-link href=" https://fonts.google.com/" targetType="${NidocaTargetType.BLANK}">
              https://fonts.google.com/</nidoca-link
            >
          </nidoca-article>
        </nidoca-section>
      </div>
    `;
  }
}
