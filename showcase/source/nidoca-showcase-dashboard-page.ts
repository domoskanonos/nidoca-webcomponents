import { customElement, html, TemplateResult } from 'lit-element';
import { NidocaShowcaseTemplate } from './nidoca-showcase-template';

@customElement('nidoca-showcase-dashboard-page')
export class NidocaShowcaseDashboardPage extends NidocaShowcaseTemplate {
   getMainComponent(): TemplateResult {
      return html`Dashboard`;
   }

}
