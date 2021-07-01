import {fixture, html} from "@open-wc/testing";
import {NidocaSpacer as NidocaLayoutSpacer, NidocaLayoutSpacerSize, NidocaLayoutSpacerType} from "./nidoca-layout-spacer";

const assert = chai.assert;

suite("webcomponent nidoca-layout-spacer", () => {
  test("is defined", () => {
    const el = document.createElement("nidoca-layout-spacer");
    assert.instanceOf(el, NidocaLayoutSpacer);
  });

  test("check initial rendering", async () => {
    const el = await fixture(html`<nidoca-layout-spacer></nidoca-layout-spacer>`);
    assert.shadowDom.equal(
      el,
      `
      <span class="SPACER" style="">
        <slot class="slotStyle"></slot>
      </span>
    `
    );
  });

  test("check attributes", async () => {
    const el = await fixture(
      html`<nidoca-layout-spacer
        .spacerSize="${NidocaLayoutSpacerSize.BIG}"
        .spacerTypes="${[NidocaLayoutSpacerType.TOP, NidocaLayoutSpacerType.LEFT, NidocaLayoutSpacerType.RIGHT]}"
      ></nidoca-layout-spacer>`
    );
    assert.shadowDom.equal(
      el,
      `
      <span class="SPACER" style="">
        <slot class="slotStyle"></slot>
      </span>
    `
    );
  });

  test("check css", async () => {
    const el = (await fixture(html`<nidoca-layout-spacer></nidoca-layout-spacer>`)) as NidocaLayoutSpacer;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).display, "inline");
  });
});