import {I18nService} from '@domoskanonos/frontend-basis';
import {FlexContainerProperties, FlexItemProperties, TargetType, TypographyType} from '@domoskanonos/nidoca-core';
import {customElement, html, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-showcase-get-started-page')
export class NidocaShowcaseDashboardPage extends NidocaShowcaseTemplate {
  getContent(): TemplateResult {
    return html` <nidoca-flex-container
      .flexContainerProperties="${[
        FlexContainerProperties.CONTAINER_WIDTH_50,
        FlexContainerProperties.TABLET_MAX_WIDTH,
        FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
        FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
        FlexContainerProperties.TABLET_HORIZONTAL_PADDING,
      ]}"
      .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_HORIZONTAL, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
      flexItemBasisValue="100%"
    >
      <nidoca-typography .typographyType="${TypographyType.H1}" text="get started"></nidoca-typography>
      <nidoca-typography .typographyType="${TypographyType.H4}"><br />installation</nidoca-typography>
      <nidoca-typography .typographyType="${TypographyType.BODY1}">
        <br />install via npm:
        <nidoca-link href="https://www.npmjs.com/package/@domoskanonos/nidoca-core" targetType="${TargetType.BLANK}"
          >npm</nidoca-link
        >.<br /><br />
        <nidoca-code code="npm i @domoskanonos/nidoca-core"></nidoca-code>
        <br />${I18nService.getUniqueInstance().getValue('pagegetstarted_install_package_json')} <br /><br />
        <nidoca-code code="${'"dependencies": { "@domoskanonos/nidoca-core": "latest",... }'}"></nidoca-code>
      </nidoca-typography>
      <nidoca-typography .typographyType="${TypographyType.H4}"
        ><br />${I18nService.getUniqueInstance().getValue('pagegetstarted_basic_template')}</nidoca-typography
      >
      <nidoca-typography .typographyType="${TypographyType.BODY1}">
        <br />${I18nService.getUniqueInstance().getValue('pagegetstarted_basic_template_description')}
        <nidoca-link href="https://github.com/domoskanonos/nidoca-template" targetType="${TargetType.BLANK}"
          >nidoca-template</nidoca-link
        >
      </nidoca-typography>
      <nidoca-typography .typographyType="${TypographyType.H4}"
        ><br />${I18nService.getUniqueInstance().getValue('pagegetstarted_editor_header')}</nidoca-typography
      >
      <nidoca-typography .typographyType="${TypographyType.BODY1}">
        <br />${I18nService.getUniqueInstance().getValue('pagegetstarted_editor_description')}
        <nidoca-link href="https://stackblitz.com/edit/nidoca-showcase" targetType="${TargetType.BLANK}"
          >https://stackblitz.com/edit/nidoca-showcase</nidoca-link
        ></nidoca-typography
      >
    </nidoca-flex-container>`;
  }
}
