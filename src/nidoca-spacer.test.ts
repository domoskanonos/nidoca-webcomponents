import {fixture, html} from "@open-wc/testing";
import {NidocaSpacer, NidocaSpacerSize, NidocaSpacerType} from "./nidoca-spacer";

const assert = chai.assert;

suite("webcomponent nidoca-spacer", () => {
  test("is defined", () => {
    const el = document.createElement("nidoca-spacer");
    assert.instanceOf(el, NidocaSpacer);
  });

  test("check initial rendering", async () => {
    const el = await fixture(html`<nidoca-spacer></nidoca-spacer>`);
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
      html`<nidoca-spacer
        .spacerSize="${NidocaSpacerSize.BIG}"
        .spacerTypes="${[NidocaSpacerType.TOP, NidocaSpacerType.LEFT, NidocaSpacerType.RIGHT]}"
      ></nidoca-spacer>`
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
    const el = (await fixture(html`<nidoca-spacer></nidoca-spacer>`)) as NidocaSpacer;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).display, "inline");
  });
});