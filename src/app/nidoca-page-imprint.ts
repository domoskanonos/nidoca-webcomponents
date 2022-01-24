import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaContainerSize, NidocaTargetType, NidocaTypographyType} from "../index";
import {
  NidocaLayoutFlexAlignContent,
  NidocaLayoutFlexAlignItems,
  NidocaLayoutFlexDirection,
  NidocaLayoutFlexJustifyContent,
  NidocaLayoutFlexWrap,
} from "../nidoca-layout-flex";
import {NidocaDevice} from "../nidoca-layout-meta";

@customElement("nidoca-page-imprint")
export class NidocaPageSettings extends LitElement {
  static styles = css``;
  render(): TemplateResult {
    return html`
      <nidoca-layout-spacer
        .devices="${[NidocaDevice.MOBILE, NidocaDevice.TABLET]}"
      >
        <nidoca-layout-container .containerSize="${NidocaContainerSize._50}" .devices="${[NidocaDevice.DESKTOP]}">
          <nidoca-layout-flex
            .flexDirection="${NidocaLayoutFlexDirection.COLUMN}"
            .flexWrap="${NidocaLayoutFlexWrap.NO_WRAP}"
            .flexJustifyContent="${NidocaLayoutFlexJustifyContent.CENTER}"
            .flexAlignItems="${NidocaLayoutFlexAlignItems.FLEX_START}"
            .flexAlignContent="${NidocaLayoutFlexAlignContent.CENTER}"
          >
            <nidoca-layout-spacer
            >
              <nidoca-typography .typographyType="${NidocaTypographyType.H2}">Impressum</nidoca-typography>
            </nidoca-layout-spacer>
            <nidoca-layout-spacer
            ></nidoca-layout-spacer>
            <nidoca-typography .typographyType="${NidocaTypographyType.H4}">Angaben gemäß § 5 TMG</nidoca-typography>
            <nidoca-layout-spacer
            ></nidoca-layout-spacer>
            <nidoca-typography .typographyType="${NidocaTypographyType.BODY1}">Dominik Bruhn</nidoca-typography>
            <nidoca-typography .typographyType="${NidocaTypographyType.BODY1}"
              >Holzwickeder Straße 109c</nidoca-typography
            >
            <nidoca-typography .typographyType="${NidocaTypographyType.BODY1}">44309 Dortmund</nidoca-typography>
            <nidoca-layout-spacer
            ></nidoca-layout-spacer>
            <nidoca-typography .typographyType="${NidocaTypographyType.BODY1}"
              >Telefonnummer: +49 152 052 488 62</nidoca-typography
            >
            <nidoca-typography .typographyType="${NidocaTypographyType.BODY1}"
              >E-Mail: dominikbruhn [at] googlemail.com</nidoca-typography
            >
            <nidoca-layout-spacer
            ></nidoca-layout-spacer>
            <nidoca-typography .typographyType="${NidocaTypographyType.H4}">Streitsschlichtung</nidoca-typography>
            <nidoca-layout-spacer
            ></nidoca-layout-spacer>
            <nidoca-typography .typographyType="${NidocaTypographyType.BODY1}"
              >Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <nidoca-link href="https://ec.europa.eu/consumers/odr" targetType="${NidocaTargetType.BLANK}"
                >https://ec.europa.eu/consumers/odr</nidoca-link
              >. <br />Unsere E-Mail-Adresse und Telefonnummer finden Sie oben auf dieser Seite.</nidoca-typography
            >
            <nidoca-layout-spacer
            ></nidoca-layout-spacer>
            <nidoca-typography .typographyType="${NidocaTypographyType.H4}">Streitschlichtung</nidoca-typography>
            <nidoca-layout-spacer
            ></nidoca-layout-spacer>
            <nidoca-typography .typographyType="${NidocaTypographyType.BODY1}">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </nidoca-typography>
            <nidoca-layout-spacer
            ></nidoca-layout-spacer>
            <nidoca-typography .typographyType="${NidocaTypographyType.H4}">Haftungsinhalt</nidoca-typography>
            <nidoca-layout-spacer
            ></nidoca-layout-spacer>
            <nidoca-typography .typographyType="${NidocaTypographyType.BODY1}">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
              eine rechtswidrige Tätigkeit hinweisen.<br />
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </nidoca-typography>
            <nidoca-layout-spacer
            ></nidoca-layout-spacer>
            <nidoca-typography .typographyType="${NidocaTypographyType.H4}">Haftungslinks</nidoca-typography>
            <nidoca-layout-spacer
            ></nidoca-layout-spacer>
            <nidoca-typography .typographyType="${NidocaTypographyType.BODY1}">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </nidoca-typography>
            <nidoca-layout-spacer
            ></nidoca-layout-spacer>

            <nidoca-typography .typographyType="${NidocaTypographyType.H4}">Copyright</nidoca-typography>
            <nidoca-layout-spacer
            ></nidoca-layout-spacer>
            <nidoca-typography .typographyType="${NidocaTypographyType.BODY1}">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.<br />
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
              von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </nidoca-typography>
            <nidoca-layout-spacer
            ></nidoca-layout-spacer>
            <nidoca-typography .typographyType="${NidocaTypographyType.BODY1}"
              >Quelle:
              <nidoca-link
                href="https://www.e-recht24.de/impressum-generator.html"
                targetType="${NidocaTargetType.BLANK}"
                >https://www.e-recht24.de/impressum-generator.html</nidoca-link
              >
            </nidoca-typography>
          </nidoca-layout-flex>
        </nidoca-layout-container>
      </nidoca-layout-spacer>
    `;
  }
}
