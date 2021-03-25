import {I18nService} from '@domoskanonos/frontend-basis';
import {TargetType, TypographyType} from '@domoskanonos/nidoca-core';
import {customElement, html, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-showcase-get-started-page')
export class NidocaShowcaseDashboardPage extends NidocaShowcaseTemplate {
  getContent(): TemplateResult {
    return html` <nidoca-flex-container containerStyle="width:75%;" itemStyle="flex-basis: 100%;">
      <nidoca-typography .typographyType="${TypographyType.H1}" text="get started"></nidoca-typography>
      <nidoca-typography .typographyType="${TypographyType.H4}"><br />installation</nidoca-typography>
      <nidoca-typography .typographyType="${TypographyType.BODY1}">
        <br />install via
        <nidoca-link href="https://www.npmjs.com/package/@domoskanonos/nidoca-core" targetType="${TargetType.BLANK}"
          >npm</nidoca-link
        >:

        <br />
        <br />

        <nidoca-code code="npm i @domoskanonos/nidoca-core"></nidoca-code>
        <br />
        or in package.json as dependency: <br /><br />
        <nidoca-code code="${'"dependencies": { "@domoskanonos/nidoca-core": "latest",... }'}"></nidoca-code>
      </nidoca-typography>
      <nidoca-typography .typographyType="${TypographyType.H4}"
        ><br />
        you can also clone a basic template project with nidoca:
      </nidoca-typography>
      <nidoca-typography .typographyType="${TypographyType.BODY1}">
        <br />${I18nService.getUniqueInstance().getValue('pagegetstarted_basic_template_description')}
        <nidoca-link href="https://github.com/domoskanonos/nidoca-template" targetType="${TargetType.BLANK}"
          >nidoca-template</nidoca-link
        >
      </nidoca-typography>
      <nidoca-typography .typographyType="${TypographyType.H4}"><br />test nidoca on stackblitz:</nidoca-typography>
      <nidoca-typography .typographyType="${TypographyType.BODY1}">
        <nidoca-link href="https://stackblitz.com/edit/nidoca-showcase" targetType="${TargetType.BLANK}"
          >https://stackblitz.com/edit/nidoca-showcase</nidoca-link
        ></nidoca-typography
      >
    </nidoca-flex-container>`;
  }
}
