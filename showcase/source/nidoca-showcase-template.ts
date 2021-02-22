import {NavigationType, NidocaTemplate, TypographyType} from "@domoskanonos/nidoca-core";
import {html, TemplateResult} from "lit-element";

export abstract class NidocaShowcaseTemplate extends NidocaTemplate {

constructor() {
super();
this.navType = NavigationType.PERMANENT;
}

getTopContent(): TemplateResult {
return html`
<nidoca-top-app-bar>
    ${this.getTopLeftComponent()} ${this.getTopMainComponent()} ${this.getTopRightComponent()}
</nidoca-top-app-bar>
`;
}

getTopLeftComponent(): TemplateResult {
return html`
<nidoca-icon
        title="Menü"
        slot="leftComponents"
        icon="menu"
        .clickable="${true}"
></nidoca-icon>
<nidoca-typography slot="leftComponents" .typographyType="${TypographyType.BODY1}"
>nidoca showcase
</nidoca-typography
>
`;
}

getTopMainComponent(): TemplateResult {
return html``;
}

getTopRightComponent(): TemplateResult {
return html``;
}

getLeftNavigationContent(): TemplateResult {
return html`



<nidoca-navigation-link
        slot="links"
        icon="arrow_forward_ios"
        text="Hallo"
        href="introduction"
></nidoca-navigation-link>



`;
}
}
