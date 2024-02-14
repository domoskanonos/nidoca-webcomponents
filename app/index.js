"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i7 = decorators.length - 1, decorator; i7 >= 0; i7--)
      if (decorator = decorators[i7])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // node_modules/@lit/reactive-element/css-tag.js
  var t = window;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var n = /* @__PURE__ */ new WeakMap();
  var o = class {
    constructor(t5, e9, n7) {
      if (this._$cssResult$ = true, n7 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t5, this.t = e9;
    }
    get styleSheet() {
      let t5 = this.o;
      const s6 = this.t;
      if (e && void 0 === t5) {
        const e9 = void 0 !== s6 && 1 === s6.length;
        e9 && (t5 = n.get(s6)), void 0 === t5 && ((this.o = t5 = new CSSStyleSheet()).replaceSync(this.cssText), e9 && n.set(s6, t5));
      }
      return t5;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t5) => new o("string" == typeof t5 ? t5 : t5 + "", void 0, s);
  var i = (t5, ...e9) => {
    const n7 = 1 === t5.length ? t5[0] : e9.reduce((e10, s6, n8) => e10 + ((t6) => {
      if (true === t6._$cssResult$)
        return t6.cssText;
      if ("number" == typeof t6)
        return t6;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t6 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s6) + t5[n8 + 1], t5[0]);
    return new o(n7, t5, s);
  };
  var S = (s6, n7) => {
    e ? s6.adoptedStyleSheets = n7.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet) : n7.forEach((e9) => {
      const n8 = document.createElement("style"), o6 = t.litNonce;
      void 0 !== o6 && n8.setAttribute("nonce", o6), n8.textContent = e9.cssText, s6.appendChild(n8);
    });
  };
  var c = e ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
    let e9 = "";
    for (const s6 of t6.cssRules)
      e9 += s6.cssText;
    return r(e9);
  })(t5) : t5;

  // node_modules/@lit/reactive-element/reactive-element.js
  var s2;
  var e2 = window;
  var r2 = e2.trustedTypes;
  var h = r2 ? r2.emptyScript : "";
  var o2 = e2.reactiveElementPolyfillSupport;
  var n2 = { toAttribute(t5, i7) {
    switch (i7) {
      case Boolean:
        t5 = t5 ? h : null;
        break;
      case Object:
      case Array:
        t5 = null == t5 ? t5 : JSON.stringify(t5);
    }
    return t5;
  }, fromAttribute(t5, i7) {
    let s6 = t5;
    switch (i7) {
      case Boolean:
        s6 = null !== t5;
        break;
      case Number:
        s6 = null === t5 ? null : Number(t5);
        break;
      case Object:
      case Array:
        try {
          s6 = JSON.parse(t5);
        } catch (t6) {
          s6 = null;
        }
    }
    return s6;
  } };
  var a = (t5, i7) => i7 !== t5 && (i7 == i7 || t5 == t5);
  var l = { attribute: true, type: String, converter: n2, reflect: false, hasChanged: a };
  var d = "finalized";
  var u = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
    }
    static addInitializer(t5) {
      var i7;
      this.finalize(), (null !== (i7 = this.h) && void 0 !== i7 ? i7 : this.h = []).push(t5);
    }
    static get observedAttributes() {
      this.finalize();
      const t5 = [];
      return this.elementProperties.forEach((i7, s6) => {
        const e9 = this._$Ep(s6, i7);
        void 0 !== e9 && (this._$Ev.set(e9, s6), t5.push(e9));
      }), t5;
    }
    static createProperty(t5, i7 = l) {
      if (i7.state && (i7.attribute = false), this.finalize(), this.elementProperties.set(t5, i7), !i7.noAccessor && !this.prototype.hasOwnProperty(t5)) {
        const s6 = "symbol" == typeof t5 ? Symbol() : "__" + t5, e9 = this.getPropertyDescriptor(t5, s6, i7);
        void 0 !== e9 && Object.defineProperty(this.prototype, t5, e9);
      }
    }
    static getPropertyDescriptor(t5, i7, s6) {
      return { get() {
        return this[i7];
      }, set(e9) {
        const r5 = this[t5];
        this[i7] = e9, this.requestUpdate(t5, r5, s6);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t5) {
      return this.elementProperties.get(t5) || l;
    }
    static finalize() {
      if (this.hasOwnProperty(d))
        return false;
      this[d] = true;
      const t5 = Object.getPrototypeOf(this);
      if (t5.finalize(), void 0 !== t5.h && (this.h = [...t5.h]), this.elementProperties = new Map(t5.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t6 = this.properties, i7 = [...Object.getOwnPropertyNames(t6), ...Object.getOwnPropertySymbols(t6)];
        for (const s6 of i7)
          this.createProperty(s6, t6[s6]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i7) {
      const s6 = [];
      if (Array.isArray(i7)) {
        const e9 = new Set(i7.flat(1 / 0).reverse());
        for (const i8 of e9)
          s6.unshift(c(i8));
      } else
        void 0 !== i7 && s6.push(c(i7));
      return s6;
    }
    static _$Ep(t5, i7) {
      const s6 = i7.attribute;
      return false === s6 ? void 0 : "string" == typeof s6 ? s6 : "string" == typeof t5 ? t5.toLowerCase() : void 0;
    }
    _$Eu() {
      var t5;
      this._$E_ = new Promise((t6) => this.enableUpdating = t6), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t5 = this.constructor.h) || void 0 === t5 || t5.forEach((t6) => t6(this));
    }
    addController(t5) {
      var i7, s6;
      (null !== (i7 = this._$ES) && void 0 !== i7 ? i7 : this._$ES = []).push(t5), void 0 !== this.renderRoot && this.isConnected && (null === (s6 = t5.hostConnected) || void 0 === s6 || s6.call(t5));
    }
    removeController(t5) {
      var i7;
      null === (i7 = this._$ES) || void 0 === i7 || i7.splice(this._$ES.indexOf(t5) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t5, i7) => {
        this.hasOwnProperty(i7) && (this._$Ei.set(i7, this[i7]), delete this[i7]);
      });
    }
    createRenderRoot() {
      var t5;
      const s6 = null !== (t5 = this.shadowRoot) && void 0 !== t5 ? t5 : this.attachShadow(this.constructor.shadowRootOptions);
      return S(s6, this.constructor.elementStyles), s6;
    }
    connectedCallback() {
      var t5;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
        var i7;
        return null === (i7 = t6.hostConnected) || void 0 === i7 ? void 0 : i7.call(t6);
      });
    }
    enableUpdating(t5) {
    }
    disconnectedCallback() {
      var t5;
      null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
        var i7;
        return null === (i7 = t6.hostDisconnected) || void 0 === i7 ? void 0 : i7.call(t6);
      });
    }
    attributeChangedCallback(t5, i7, s6) {
      this._$AK(t5, s6);
    }
    _$EO(t5, i7, s6 = l) {
      var e9;
      const r5 = this.constructor._$Ep(t5, s6);
      if (void 0 !== r5 && true === s6.reflect) {
        const h3 = (void 0 !== (null === (e9 = s6.converter) || void 0 === e9 ? void 0 : e9.toAttribute) ? s6.converter : n2).toAttribute(i7, s6.type);
        this._$El = t5, null == h3 ? this.removeAttribute(r5) : this.setAttribute(r5, h3), this._$El = null;
      }
    }
    _$AK(t5, i7) {
      var s6;
      const e9 = this.constructor, r5 = e9._$Ev.get(t5);
      if (void 0 !== r5 && this._$El !== r5) {
        const t6 = e9.getPropertyOptions(r5), h3 = "function" == typeof t6.converter ? { fromAttribute: t6.converter } : void 0 !== (null === (s6 = t6.converter) || void 0 === s6 ? void 0 : s6.fromAttribute) ? t6.converter : n2;
        this._$El = r5, this[r5] = h3.fromAttribute(i7, t6.type), this._$El = null;
      }
    }
    requestUpdate(t5, i7, s6) {
      let e9 = true;
      void 0 !== t5 && (((s6 = s6 || this.constructor.getPropertyOptions(t5)).hasChanged || a)(this[t5], i7) ? (this._$AL.has(t5) || this._$AL.set(t5, i7), true === s6.reflect && this._$El !== t5 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t5, s6))) : e9 = false), !this.isUpdatePending && e9 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = true;
      try {
        await this._$E_;
      } catch (t6) {
        Promise.reject(t6);
      }
      const t5 = this.scheduleUpdate();
      return null != t5 && await t5, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t5;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((t6, i8) => this[i8] = t6), this._$Ei = void 0);
      let i7 = false;
      const s6 = this._$AL;
      try {
        i7 = this.shouldUpdate(s6), i7 ? (this.willUpdate(s6), null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
          var i8;
          return null === (i8 = t6.hostUpdate) || void 0 === i8 ? void 0 : i8.call(t6);
        }), this.update(s6)) : this._$Ek();
      } catch (t6) {
        throw i7 = false, this._$Ek(), t6;
      }
      i7 && this._$AE(s6);
    }
    willUpdate(t5) {
    }
    _$AE(t5) {
      var i7;
      null === (i7 = this._$ES) || void 0 === i7 || i7.forEach((t6) => {
        var i8;
        return null === (i8 = t6.hostUpdated) || void 0 === i8 ? void 0 : i8.call(t6);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
    }
    _$Ek() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(t5) {
      return true;
    }
    update(t5) {
      void 0 !== this._$EC && (this._$EC.forEach((t6, i7) => this._$EO(i7, this[i7], t6)), this._$EC = void 0), this._$Ek();
    }
    updated(t5) {
    }
    firstUpdated(t5) {
    }
  };
  u[d] = true, u.elementProperties = /* @__PURE__ */ new Map(), u.elementStyles = [], u.shadowRootOptions = { mode: "open" }, null == o2 || o2({ ReactiveElement: u }), (null !== (s2 = e2.reactiveElementVersions) && void 0 !== s2 ? s2 : e2.reactiveElementVersions = []).push("1.6.3");

  // node_modules/lit-html/lit-html.js
  var t2;
  var i2 = window;
  var s3 = i2.trustedTypes;
  var e3 = s3 ? s3.createPolicy("lit-html", { createHTML: (t5) => t5 }) : void 0;
  var o3 = "$lit$";
  var n3 = `lit$${(Math.random() + "").slice(9)}$`;
  var l2 = "?" + n3;
  var h2 = `<${l2}>`;
  var r3 = document;
  var u2 = () => r3.createComment("");
  var d2 = (t5) => null === t5 || "object" != typeof t5 && "function" != typeof t5;
  var c2 = Array.isArray;
  var v = (t5) => c2(t5) || "function" == typeof (null == t5 ? void 0 : t5[Symbol.iterator]);
  var a2 = "[ 	\n\f\r]";
  var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var _ = /-->/g;
  var m = />/g;
  var p = RegExp(`>|${a2}(?:([^\\s"'>=/]+)(${a2}*=${a2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var g = /'/g;
  var $ = /"/g;
  var y = /^(?:script|style|textarea|title)$/i;
  var w = (t5) => (i7, ...s6) => ({ _$litType$: t5, strings: i7, values: s6 });
  var x = w(1);
  var b = w(2);
  var T = Symbol.for("lit-noChange");
  var A = Symbol.for("lit-nothing");
  var E = /* @__PURE__ */ new WeakMap();
  var C = r3.createTreeWalker(r3, 129, null, false);
  function P(t5, i7) {
    if (!Array.isArray(t5) || !t5.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== e3 ? e3.createHTML(i7) : i7;
  }
  var V = (t5, i7) => {
    const s6 = t5.length - 1, e9 = [];
    let l7, r5 = 2 === i7 ? "<svg>" : "", u4 = f;
    for (let i8 = 0; i8 < s6; i8++) {
      const s7 = t5[i8];
      let d3, c5, v2 = -1, a4 = 0;
      for (; a4 < s7.length && (u4.lastIndex = a4, c5 = u4.exec(s7), null !== c5); )
        a4 = u4.lastIndex, u4 === f ? "!--" === c5[1] ? u4 = _ : void 0 !== c5[1] ? u4 = m : void 0 !== c5[2] ? (y.test(c5[2]) && (l7 = RegExp("</" + c5[2], "g")), u4 = p) : void 0 !== c5[3] && (u4 = p) : u4 === p ? ">" === c5[0] ? (u4 = null != l7 ? l7 : f, v2 = -1) : void 0 === c5[1] ? v2 = -2 : (v2 = u4.lastIndex - c5[2].length, d3 = c5[1], u4 = void 0 === c5[3] ? p : '"' === c5[3] ? $ : g) : u4 === $ || u4 === g ? u4 = p : u4 === _ || u4 === m ? u4 = f : (u4 = p, l7 = void 0);
      const w2 = u4 === p && t5[i8 + 1].startsWith("/>") ? " " : "";
      r5 += u4 === f ? s7 + h2 : v2 >= 0 ? (e9.push(d3), s7.slice(0, v2) + o3 + s7.slice(v2) + n3 + w2) : s7 + n3 + (-2 === v2 ? (e9.push(void 0), i8) : w2);
    }
    return [P(t5, r5 + (t5[s6] || "<?>") + (2 === i7 ? "</svg>" : "")), e9];
  };
  var N = class _N {
    constructor({ strings: t5, _$litType$: i7 }, e9) {
      let h3;
      this.parts = [];
      let r5 = 0, d3 = 0;
      const c5 = t5.length - 1, v2 = this.parts, [a4, f3] = V(t5, i7);
      if (this.el = _N.createElement(a4, e9), C.currentNode = this.el.content, 2 === i7) {
        const t6 = this.el.content, i8 = t6.firstChild;
        i8.remove(), t6.append(...i8.childNodes);
      }
      for (; null !== (h3 = C.nextNode()) && v2.length < c5; ) {
        if (1 === h3.nodeType) {
          if (h3.hasAttributes()) {
            const t6 = [];
            for (const i8 of h3.getAttributeNames())
              if (i8.endsWith(o3) || i8.startsWith(n3)) {
                const s6 = f3[d3++];
                if (t6.push(i8), void 0 !== s6) {
                  const t7 = h3.getAttribute(s6.toLowerCase() + o3).split(n3), i9 = /([.?@])?(.*)/.exec(s6);
                  v2.push({ type: 1, index: r5, name: i9[2], strings: t7, ctor: "." === i9[1] ? H : "?" === i9[1] ? L : "@" === i9[1] ? z : k });
                } else
                  v2.push({ type: 6, index: r5 });
              }
            for (const i8 of t6)
              h3.removeAttribute(i8);
          }
          if (y.test(h3.tagName)) {
            const t6 = h3.textContent.split(n3), i8 = t6.length - 1;
            if (i8 > 0) {
              h3.textContent = s3 ? s3.emptyScript : "";
              for (let s6 = 0; s6 < i8; s6++)
                h3.append(t6[s6], u2()), C.nextNode(), v2.push({ type: 2, index: ++r5 });
              h3.append(t6[i8], u2());
            }
          }
        } else if (8 === h3.nodeType)
          if (h3.data === l2)
            v2.push({ type: 2, index: r5 });
          else {
            let t6 = -1;
            for (; -1 !== (t6 = h3.data.indexOf(n3, t6 + 1)); )
              v2.push({ type: 7, index: r5 }), t6 += n3.length - 1;
          }
        r5++;
      }
    }
    static createElement(t5, i7) {
      const s6 = r3.createElement("template");
      return s6.innerHTML = t5, s6;
    }
  };
  function S2(t5, i7, s6 = t5, e9) {
    var o6, n7, l7, h3;
    if (i7 === T)
      return i7;
    let r5 = void 0 !== e9 ? null === (o6 = s6._$Co) || void 0 === o6 ? void 0 : o6[e9] : s6._$Cl;
    const u4 = d2(i7) ? void 0 : i7._$litDirective$;
    return (null == r5 ? void 0 : r5.constructor) !== u4 && (null === (n7 = null == r5 ? void 0 : r5._$AO) || void 0 === n7 || n7.call(r5, false), void 0 === u4 ? r5 = void 0 : (r5 = new u4(t5), r5._$AT(t5, s6, e9)), void 0 !== e9 ? (null !== (l7 = (h3 = s6)._$Co) && void 0 !== l7 ? l7 : h3._$Co = [])[e9] = r5 : s6._$Cl = r5), void 0 !== r5 && (i7 = S2(t5, r5._$AS(t5, i7.values), r5, e9)), i7;
  }
  var M = class {
    constructor(t5, i7) {
      this._$AV = [], this._$AN = void 0, this._$AD = t5, this._$AM = i7;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t5) {
      var i7;
      const { el: { content: s6 }, parts: e9 } = this._$AD, o6 = (null !== (i7 = null == t5 ? void 0 : t5.creationScope) && void 0 !== i7 ? i7 : r3).importNode(s6, true);
      C.currentNode = o6;
      let n7 = C.nextNode(), l7 = 0, h3 = 0, u4 = e9[0];
      for (; void 0 !== u4; ) {
        if (l7 === u4.index) {
          let i8;
          2 === u4.type ? i8 = new R(n7, n7.nextSibling, this, t5) : 1 === u4.type ? i8 = new u4.ctor(n7, u4.name, u4.strings, this, t5) : 6 === u4.type && (i8 = new Z(n7, this, t5)), this._$AV.push(i8), u4 = e9[++h3];
        }
        l7 !== (null == u4 ? void 0 : u4.index) && (n7 = C.nextNode(), l7++);
      }
      return C.currentNode = r3, o6;
    }
    v(t5) {
      let i7 = 0;
      for (const s6 of this._$AV)
        void 0 !== s6 && (void 0 !== s6.strings ? (s6._$AI(t5, s6, i7), i7 += s6.strings.length - 2) : s6._$AI(t5[i7])), i7++;
    }
  };
  var R = class _R {
    constructor(t5, i7, s6, e9) {
      var o6;
      this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t5, this._$AB = i7, this._$AM = s6, this.options = e9, this._$Cp = null === (o6 = null == e9 ? void 0 : e9.isConnected) || void 0 === o6 || o6;
    }
    get _$AU() {
      var t5, i7;
      return null !== (i7 = null === (t5 = this._$AM) || void 0 === t5 ? void 0 : t5._$AU) && void 0 !== i7 ? i7 : this._$Cp;
    }
    get parentNode() {
      let t5 = this._$AA.parentNode;
      const i7 = this._$AM;
      return void 0 !== i7 && 11 === (null == t5 ? void 0 : t5.nodeType) && (t5 = i7.parentNode), t5;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t5, i7 = this) {
      t5 = S2(this, t5, i7), d2(t5) ? t5 === A || null == t5 || "" === t5 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t5 !== this._$AH && t5 !== T && this._(t5) : void 0 !== t5._$litType$ ? this.g(t5) : void 0 !== t5.nodeType ? this.$(t5) : v(t5) ? this.T(t5) : this._(t5);
    }
    k(t5) {
      return this._$AA.parentNode.insertBefore(t5, this._$AB);
    }
    $(t5) {
      this._$AH !== t5 && (this._$AR(), this._$AH = this.k(t5));
    }
    _(t5) {
      this._$AH !== A && d2(this._$AH) ? this._$AA.nextSibling.data = t5 : this.$(r3.createTextNode(t5)), this._$AH = t5;
    }
    g(t5) {
      var i7;
      const { values: s6, _$litType$: e9 } = t5, o6 = "number" == typeof e9 ? this._$AC(t5) : (void 0 === e9.el && (e9.el = N.createElement(P(e9.h, e9.h[0]), this.options)), e9);
      if ((null === (i7 = this._$AH) || void 0 === i7 ? void 0 : i7._$AD) === o6)
        this._$AH.v(s6);
      else {
        const t6 = new M(o6, this), i8 = t6.u(this.options);
        t6.v(s6), this.$(i8), this._$AH = t6;
      }
    }
    _$AC(t5) {
      let i7 = E.get(t5.strings);
      return void 0 === i7 && E.set(t5.strings, i7 = new N(t5)), i7;
    }
    T(t5) {
      c2(this._$AH) || (this._$AH = [], this._$AR());
      const i7 = this._$AH;
      let s6, e9 = 0;
      for (const o6 of t5)
        e9 === i7.length ? i7.push(s6 = new _R(this.k(u2()), this.k(u2()), this, this.options)) : s6 = i7[e9], s6._$AI(o6), e9++;
      e9 < i7.length && (this._$AR(s6 && s6._$AB.nextSibling, e9), i7.length = e9);
    }
    _$AR(t5 = this._$AA.nextSibling, i7) {
      var s6;
      for (null === (s6 = this._$AP) || void 0 === s6 || s6.call(this, false, true, i7); t5 && t5 !== this._$AB; ) {
        const i8 = t5.nextSibling;
        t5.remove(), t5 = i8;
      }
    }
    setConnected(t5) {
      var i7;
      void 0 === this._$AM && (this._$Cp = t5, null === (i7 = this._$AP) || void 0 === i7 || i7.call(this, t5));
    }
  };
  var k = class {
    constructor(t5, i7, s6, e9, o6) {
      this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t5, this.name = i7, this._$AM = e9, this.options = o6, s6.length > 2 || "" !== s6[0] || "" !== s6[1] ? (this._$AH = Array(s6.length - 1).fill(new String()), this.strings = s6) : this._$AH = A;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t5, i7 = this, s6, e9) {
      const o6 = this.strings;
      let n7 = false;
      if (void 0 === o6)
        t5 = S2(this, t5, i7, 0), n7 = !d2(t5) || t5 !== this._$AH && t5 !== T, n7 && (this._$AH = t5);
      else {
        const e10 = t5;
        let l7, h3;
        for (t5 = o6[0], l7 = 0; l7 < o6.length - 1; l7++)
          h3 = S2(this, e10[s6 + l7], i7, l7), h3 === T && (h3 = this._$AH[l7]), n7 || (n7 = !d2(h3) || h3 !== this._$AH[l7]), h3 === A ? t5 = A : t5 !== A && (t5 += (null != h3 ? h3 : "") + o6[l7 + 1]), this._$AH[l7] = h3;
      }
      n7 && !e9 && this.j(t5);
    }
    j(t5) {
      t5 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t5 ? t5 : "");
    }
  };
  var H = class extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t5) {
      this.element[this.name] = t5 === A ? void 0 : t5;
    }
  };
  var I = s3 ? s3.emptyScript : "";
  var L = class extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t5) {
      t5 && t5 !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
    }
  };
  var z = class extends k {
    constructor(t5, i7, s6, e9, o6) {
      super(t5, i7, s6, e9, o6), this.type = 5;
    }
    _$AI(t5, i7 = this) {
      var s6;
      if ((t5 = null !== (s6 = S2(this, t5, i7, 0)) && void 0 !== s6 ? s6 : A) === T)
        return;
      const e9 = this._$AH, o6 = t5 === A && e9 !== A || t5.capture !== e9.capture || t5.once !== e9.once || t5.passive !== e9.passive, n7 = t5 !== A && (e9 === A || o6);
      o6 && this.element.removeEventListener(this.name, this, e9), n7 && this.element.addEventListener(this.name, this, t5), this._$AH = t5;
    }
    handleEvent(t5) {
      var i7, s6;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s6 = null === (i7 = this.options) || void 0 === i7 ? void 0 : i7.host) && void 0 !== s6 ? s6 : this.element, t5) : this._$AH.handleEvent(t5);
    }
  };
  var Z = class {
    constructor(t5, i7, s6) {
      this.element = t5, this.type = 6, this._$AN = void 0, this._$AM = i7, this.options = s6;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t5) {
      S2(this, t5);
    }
  };
  var j = { O: o3, P: n3, A: l2, C: 1, M: V, L: M, R: v, D: S2, I: R, V: k, H: L, N: z, U: H, F: Z };
  var B = i2.litHtmlPolyfillSupport;
  null == B || B(N, R), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.8.0");
  var D = (t5, i7, s6) => {
    var e9, o6;
    const n7 = null !== (e9 = null == s6 ? void 0 : s6.renderBefore) && void 0 !== e9 ? e9 : i7;
    let l7 = n7._$litPart$;
    if (void 0 === l7) {
      const t6 = null !== (o6 = null == s6 ? void 0 : s6.renderBefore) && void 0 !== o6 ? o6 : null;
      n7._$litPart$ = l7 = new R(i7.insertBefore(u2(), t6), t6, void 0, null != s6 ? s6 : {});
    }
    return l7._$AI(t5), l7;
  };

  // node_modules/lit-element/lit-element.js
  var l3;
  var o4;
  var s4 = class extends u {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var t5, e9;
      const i7 = super.createRenderRoot();
      return null !== (t5 = (e9 = this.renderOptions).renderBefore) && void 0 !== t5 || (e9.renderBefore = i7.firstChild), i7;
    }
    update(t5) {
      const i7 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t5), this._$Do = D(i7, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t5;
      super.connectedCallback(), null === (t5 = this._$Do) || void 0 === t5 || t5.setConnected(true);
    }
    disconnectedCallback() {
      var t5;
      super.disconnectedCallback(), null === (t5 = this._$Do) || void 0 === t5 || t5.setConnected(false);
    }
    render() {
      return T;
    }
  };
  s4.finalized = true, s4._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, { LitElement: s4 });
  var n4 = globalThis.litElementPolyfillSupport;
  null == n4 || n4({ LitElement: s4 });
  (null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.3.3");

  // src/nidoca-meta.ts
  var NidocaTheme = /* @__PURE__ */ ((NidocaTheme2) => {
    NidocaTheme2["primary"] = "primary";
    NidocaTheme2["secondary"] = "secondary";
    NidocaTheme2["surface"] = "surface";
    NidocaTheme2["plain"] = "plain";
    return NidocaTheme2;
  })(NidocaTheme || {});
  var NidocaThemeHelper = class {
    static getStyle(theme) {
      return theme ? theme == "plain" /* plain */ ? x`` : x` <style>
            :host,
            *,
            ::slotted(*) {
              color: var(--app-color-${theme});
              background-color: var(--app-color-${theme}-background);
              border-color: var(--app-color-${theme}-border);
            }

            ::slotted(.h2),
            .h2 {
              color: #3f6796;
            }
          </style>` : x``;
    }
    static getOposite(theme) {
      return theme == "plain" /* plain */ ? "surface" /* surface */ : theme == "primary" /* primary */ ? "secondary" /* secondary */ : theme == "primary" /* primary */ ? "secondary" /* secondary */ : theme == "secondary" /* secondary */ ? "primary" /* primary */ : "plain" /* plain */;
    }
    getParentTheme(element) {
      let parentComponent = element;
      while (parentComponent != null) {
        if (parentComponent.theme != void 0) {
          return parentComponent.theme;
        }
        parentComponent = parentComponent.parentElement;
      }
      return void 0;
    }
  };

  // src/nidoca-html.ts
  var NidocaHtml = class extends s4 {
  };

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var e4 = (e9) => (n7) => "function" == typeof n7 ? ((e10, n8) => (customElements.define(e10, n8), n8))(e9, n7) : ((e10, n8) => {
    const { kind: t5, elements: s6 } = n8;
    return { kind: t5, elements: s6, finisher(n9) {
      customElements.define(e10, n9);
    } };
  })(e9, n7);

  // node_modules/@lit/reactive-element/decorators/property.js
  var i3 = (i7, e9) => "method" === e9.kind && e9.descriptor && !("value" in e9.descriptor) ? { ...e9, finisher(n7) {
    n7.createProperty(e9.key, i7);
  } } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e9.key, initializer() {
    "function" == typeof e9.initializer && (this[e9.key] = e9.initializer.call(this));
  }, finisher(n7) {
    n7.createProperty(e9.key, i7);
  } };
  var e5 = (i7, e9, n7) => {
    e9.constructor.createProperty(n7, i7);
  };
  function n5(n7) {
    return (t5, o6) => void 0 !== o6 ? e5(n7, t5, o6) : i3(n7, t5);
  }

  // node_modules/@lit/reactive-element/decorators/state.js
  function t3(t5) {
    return n5({ ...t5, state: true });
  }

  // node_modules/@lit/reactive-element/decorators/base.js
  var o5 = ({ finisher: e9, descriptor: t5 }) => (o6, n7) => {
    var r5;
    if (void 0 === n7) {
      const n8 = null !== (r5 = o6.originalKey) && void 0 !== r5 ? r5 : o6.key, i7 = null != t5 ? { kind: "method", placement: "prototype", key: n8, descriptor: t5(o6.key) } : { ...o6, key: n8 };
      return null != e9 && (i7.finisher = function(t6) {
        e9(t6, n8);
      }), i7;
    }
    {
      const r6 = o6.constructor;
      void 0 !== t5 && Object.defineProperty(o6, n7, t5(n7)), null == e9 || e9(r6, n7);
    }
  };

  // node_modules/@lit/reactive-element/decorators/query.js
  function i4(i7, n7) {
    return o5({ descriptor: (o6) => {
      const t5 = { get() {
        var o7, n8;
        return null !== (n8 = null === (o7 = this.renderRoot) || void 0 === o7 ? void 0 : o7.querySelector(i7)) && void 0 !== n8 ? n8 : null;
      }, enumerable: true, configurable: true };
      if (n7) {
        const n8 = "symbol" == typeof o6 ? Symbol() : "__" + o6;
        t5.get = function() {
          var o7, t6;
          return void 0 === this[n8] && (this[n8] = null !== (t6 = null === (o7 = this.renderRoot) || void 0 === o7 ? void 0 : o7.querySelector(i7)) && void 0 !== t6 ? t6 : null), this[n8];
        };
      }
      return t5;
    } });
  }

  // node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
  var n6;
  var e6 = null != (null === (n6 = window.HTMLSlotElement) || void 0 === n6 ? void 0 : n6.prototype.assignedElements) ? (o6, n7) => o6.assignedElements(n7) : (o6, n7) => o6.assignedNodes(n7).filter((o7) => o7.nodeType === Node.ELEMENT_NODE);

  // src/nidoca-accordion-item.ts
  var NidocaAccordionItem = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "surface" /* surface */;
      this.header = "";
      this.opened = false;
    }
    render() {
      return x`
      <div @click="${() => this.toggle()}" class="header">
        <nidoca-text theme="${this.theme}" text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened ? "keyboard_arrow_down" : "keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened ? x` <slot></slot>` : x``}
    `;
    }
    toggle() {
      console.log("accordion clicked, state=" + this.opened);
      this.opened = Boolean(!this.opened);
      console.log("accordion clicked, after state=" + this.opened);
      this.dispatchEvent(
        new CustomEvent("nidoca-event-accordion-item-clicked", {
          detail: this,
          bubbles: true,
          composed: true
        })
      );
    }
  };
  NidocaAccordionItem.styles = i`
    :host {
      border-left-style: solid;
      border-right-style: solid;
      border-bottom-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
    }

    
    .header {
      height: var(--height-medium);
      box-sizing: border-box;
      padding-left: var(--space-2);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      align-content: center;
      cursor: pointer;
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaAccordionItem.prototype, "theme", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaAccordionItem.prototype, "header", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaAccordionItem.prototype, "opened", 2);
  NidocaAccordionItem = __decorateClass([
    e4("nidoca-accordion-item")
  ], NidocaAccordionItem);

  // src/nidoca-article.ts
  var NidocaArticle = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "plain" /* plain */;
      this.overline = "";
      this.title = "";
      this.summary = "";
      this.text = "";
    }
    render() {
      return x`
      <div style="background-color: var(--app-color-${this.theme}-background); display:flex; flex-direction:column;">
        ${this.overline ? x` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.overline}</nidoca-text-body> ` : x``}
        ${this.title ? x` <nidoca-text-h2 theme="${this.theme}" class="paddingBottom">${this.title}</nidoca-text-h2> ` : x``}
        ${this.summary ? x`
              <nidoca-text-caption theme="${this.theme}" class="paddingBottom">${this.summary}</nidoca-text-caption>
            ` : x``}
        ${this.text ? x` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.text}</nidoca-text-body>` : x``}
        <slot></slot>
      </div>
    `;
    }
    static example(slotName = "", theme = "plain") {
      return x`<nidoca-article
      theme="${theme}"
      slot="${slotName}"
      style="padding:25px;"
      overline="Lorem Ipsum Dolorem"
      title="Lorem Ipsum"
      summary="Lorem Ipsum Dolorem ipsum med en to."
      text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
    ></nidoca-article>`;
    }
  };
  NidocaArticle.styles = i`
    :host {
      display: block;
    }
    slot {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;

    }

    .paddingBottom {
      padding-bottom: var(--space);
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaArticle.prototype, "theme", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaArticle.prototype, "overline", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaArticle.prototype, "title", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaArticle.prototype, "summary", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaArticle.prototype, "text", 2);
  NidocaArticle = __decorateClass([
    e4("nidoca-article")
  ], NidocaArticle);

  // src/nidoca-accordion.ts
  var AccordionType = /* @__PURE__ */ ((AccordionType2) => {
    AccordionType2["single"] = "single";
    AccordionType2["multi"] = "multi";
    return AccordionType2;
  })(AccordionType || {});
  var NidocaAccordion = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "plain" /* plain */;
      this.accordionType = "single" /* single */;
    }
    updated(changedProperties) {
      super.updated(changedProperties);
      changedProperties.forEach((_oldValue, propName) => {
        if (propName == "theme") {
          if (this.accordionSlot != null) {
            const slottedElements = this.accordionSlot.assignedElements();
            for (let index = 0; index < slottedElements.length; index++) {
              const element = slottedElements[index];
              if (element instanceof NidocaAccordionItem) {
                element.theme = this.theme;
              }
            }
          }
        }
      });
    }
    render() {
      return x`
      ${NidocaThemeHelper.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${(event) => this.accordionSwitched(event)}"
        id="accordionSlot"
      ></slot>
    `;
    }
    accordionSwitched(event) {
      const accordionItemComponent = event.detail;
      switch (this.accordionType) {
        case "single" /* single */:
          if (this.accordionSlot != null) {
            const assignedElements = this.accordionSlot.assignedElements();
            for (let index = 0; index < assignedElements.length; index++) {
              const element = assignedElements[index];
              if (element instanceof NidocaAccordionItem && element != accordionItemComponent) {
                element.opened = false;
              }
            }
          }
          break;
        case "multi" /* multi */:
          break;
      }
      event.stopPropagation();
    }
    static example(slotName = "") {
      return x`<nidoca-accordion slot="${slotName}" theme="plain">
      <nidoca-accordion-item header="Lorem Ipsum" opened> ${NidocaArticle.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 2"> ${NidocaArticle.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 3"> ${NidocaArticle.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 4"> ${NidocaArticle.example()} </nidoca-accordion-item>
    </nidoca-accordion>`;
    }
  };
  NidocaAccordion.styles = i`
    :host {
      border-top-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaAccordion.prototype, "theme", 2);
  __decorateClass([
    n5({ type: AccordionType, converter: String })
  ], NidocaAccordion.prototype, "accordionType", 2);
  __decorateClass([
    i4("#accordionSlot")
  ], NidocaAccordion.prototype, "accordionSlot", 2);
  NidocaAccordion = __decorateClass([
    e4("nidoca-accordion")
  ], NidocaAccordion);

  // src/nidoca-icon-extended.ts
  var NidocaIconExtended = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "primary" /* primary */;
      this.shadowType = "shadow_1" /* shadow_1 */;
      this.icon = "";
      this.clickable = true;
      this.deactivated = false;
      this.title = "";
    }
    render() {
      return x`
      <style>
        .iconExtended {
          display: inline-block;
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <span class="iconExtended icon ${this.shadowType}">
        <nidoca-icon
          .deactivated="${this.deactivated}"
          .clickable="${this.clickable}"
          icon="${this.icon}"
        ></nidoca-icon>
      </span>
    `;
    }
    async clicked() {
      if (this.clickable && !this.deactivated) {
        const customEventName = "nidoca-event-icon-clicked";
        console.log("dispatch custom event: %s", customEventName);
        this.dispatchEvent(
          new CustomEvent(customEventName, {
            detail: this,
            bubbles: true,
            composed: true
          })
        );
      }
    }
    static example(slotName = "") {
      return x`
      <nidoca-icon-extended
        slot="${slotName}"
        style="padding-left:var(--space)"
        clickable
        icon="home"
        title="Mein Icon"
      ></nidoca-icon-extended>
    `;
    }
  };
  NidocaIconExtended.styles = i`
    .icon {
      padding: var(--space);
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      border-radius: 50%;
    }

    .default {
      -moz-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
      -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
      box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
    }

    .shadow_1 {
      -moz-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
      -webkit-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
      box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
    }

    .shadow_2 {
      -moz-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
      -webkit-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
    }

    .shadow_3 {
      -moz-box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
      -webkit-box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
      box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
    }
  `;
  __decorateClass([
    n5({ type: String })
  ], NidocaIconExtended.prototype, "theme", 2);
  __decorateClass([
    n5({ type: Object })
  ], NidocaIconExtended.prototype, "shadowType", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaIconExtended.prototype, "icon", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaIconExtended.prototype, "clickable", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaIconExtended.prototype, "deactivated", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaIconExtended.prototype, "title", 2);
  NidocaIconExtended = __decorateClass([
    e4("nidoca-icon-extended")
  ], NidocaIconExtended);

  // src/nidoca-wizard-step.ts
  var NidocaWizardStep = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.icon = "";
      this.primaryText = "";
      this.isLast = false;
      this.first = false;
    }
    render() {
      return x`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-evenly;align-content:space-evenly;"
      >
        <div
          style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;align-content:space-evenly;"
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${"none" /* none */}"
            .withIconSpace="${false}"
            .round="${true}"
            .clickable="${true}"
            .deactivated="${false}"
            color="${this.determineColor(this.state)}"
            backgroundColor="${this.determineBackgroundColor(this.state)}"
            size="24"
            @nidoca-event-icon-clicked="${() => this.stepClicked()}"
            sizeUnit="px"
          >
          </nidoca-icon>

          ${this.isLast ? x`` : x`<nidoca-icon color="${this.determineBackgroundColor(this.state)}" icon="label_important">
              </nidoca-icon>`}
        </div>
        <nidoca-text style="width:48px;" text="${this.primaryText}"><slot></slot> </nidoca-text>
      </div>
    `;
    }
    determineBackgroundColor(state2) {
      return state2 == 1 /* completed */ ? "var(--app-color-text-primary)" : state2 == 0 /* current */ ? "var(--app-color-secondary-background)" : "var(--app-color-surface-background)";
    }
    determineColor(state2) {
      return state2 == 3 /* finish */ ? "var(--app-color-success)" : state2 == 1 /* completed */ ? "var(--mdc-theme-on-primary)" : state2 == 0 /* current */ ? "var(--app-color-text-secondary)" : "var(--app-color-text-surface)";
    }
    stepClicked() {
      const customEvent = new CustomEvent("nidoca-event-wizard-step-clicked", {
        detail: this.index,
        bubbles: true,
        composed: true
      });
      console.debug("dispatch custom event type: %s, detail: %s", customEvent.type, JSON.stringify(customEvent.detail));
      this.dispatchEvent(customEvent);
    }
  };
  NidocaWizardStep.styles = i`
    .wizard-step-connector {
      color: var(--app-color-surface);
      background-color: var(--app-color-surface-background);
      padding: var(--space);
    }

    .wizard-step-connector.selected {
      padding: var(--space);
      color: var(--mdc-theme-on-primary);
      background-color: var(--app-text-color-primary);
    }
  `;
  __decorateClass([
    n5({ type: String })
  ], NidocaWizardStep.prototype, "icon", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaWizardStep.prototype, "primaryText", 2);
  __decorateClass([
    n5({ type: Number })
  ], NidocaWizardStep.prototype, "state", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaWizardStep.prototype, "isLast", 2);
  NidocaWizardStep = __decorateClass([
    e4("nidoca-wizard-step")
  ], NidocaWizardStep);

  // src/nidoca-wizard.ts
  var NidocaWizard = class extends NidocaHtml {
    render() {
      return x`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${(event) => this.stepClicked(event)}"
      >
        <slot id="wizardSlot" @slotchange="${(event) => this.slotChanged(event)}"></slot>
      </div>
    `;
    }
    slotChanged(event) {
      const slotElement = event.target;
      if (slotElement == void 0) {
        return;
      }
      const elements = slotElement.assignedElements();
      let selectedStepIndex = 0;
      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        if (element instanceof NidocaWizardStep) {
          element.index = index;
          if (element.state == 0 /* current */) {
            selectedStepIndex = index;
          }
          if (element.index == elements.length - 1) {
            element.isLast = true;
          }
        }
      }
      this.changeState(selectedStepIndex);
    }
    stepClicked(event) {
      const selectedStepIndex = event.detail;
      console.debug("wizard step clicked, selectedStepIndex: %s", selectedStepIndex);
      this.changeState(selectedStepIndex);
    }
    changeState(selectedStepIndex) {
      if (this.wizardSlot) {
        const elements = this.wizardSlot.assignedElements();
        for (let index = 0; index < elements.length; index++) {
          const element = elements[index];
          if (element instanceof NidocaWizardStep) {
            if (element.index !== void 0) {
              if (element.index < selectedStepIndex) {
                element.state = 1 /* completed */;
              } else if (element.index == selectedStepIndex) {
                element.state = 0 /* current */;
              } else {
                element.state = 2 /* open */;
              }
            }
          }
        }
      }
    }
  };
  NidocaWizard.styles = i``;
  __decorateClass([
    i4("#wizardSlot")
  ], NidocaWizard.prototype, "wizardSlot", 2);
  NidocaWizard = __decorateClass([
    e4("nidoca-wizard")
  ], NidocaWizard);

  // src/nidoca-chip.ts
  var NidocaChip = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.clickable = true;
      this.theme = "surface" /* surface */;
      this.text = "";
    }
    render() {
      return x`
      <style>
        .chip:hover {
          background-color: var(--app-color-${this.theme}-background-dark);
        }
        .chip {
          background-color: var(--app-color-${this.theme}-background-light);
        }
      </style>
      <div class="chip ${this.clickable ? "clickable" : ""}">
        <nidoca-text-body theme="${this.theme}">${this.text}</nidoca-text-body>
        <slot></slot>
      </div>
    `;
    }
    static example(slotName = "") {
      return x`<nidoca-chip slot="${slotName}" clickable text="Mein Chip"></nidoca-chip>`;
    }
  };
  NidocaChip.styles = i`
    .chip {
      display: inline-block;
      padding: var(--space-2);
      border-radius: 1rem;
      line-height: var(--height-medium);
    }

    .clickable {
      cursor: pointer;
    }
  `;
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaChip.prototype, "clickable", 2);
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaChip.prototype, "theme", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaChip.prototype, "text", 2);
  NidocaChip = __decorateClass([
    e4("nidoca-chip")
  ], NidocaChip);

  // src/nidoca-code.ts
  var NidocaCode = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.code = "";
      this.theme = "plain" /* plain */;
    }
    render() {
      return x`
      <style>
        code {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border: solid 1px var(--app-color-${this.theme}-border);
        }
      </style>
      <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
    `;
    }
    static example(slotName = "") {
      return x`<nidoca-code slot="${slotName}" theme="surface"> my code </nidoca-code>`;
    }
  };
  NidocaCode.styles = i`
    :host {
      display: block;
    }
    pre {
      margin: 0;
      padding: 0;
      white-space: unset;
    }

    pre code {
      white-space: pre-line;
      display: block;
      line-height: var(--height-min);
      padding: 1em 1.5em;
      overflow-x: auto;
    }

    code {
      border-radius: 0.375em;
      font-family: 'Courier New', monospace;
      font-size: 0.85em;
      position: relative;
    }

    .icon-position {
      position: absolute;
      top: -24px;
      right: 0;
      opacity: 0.2;
    }
  `;
  __decorateClass([
    n5({ type: String })
  ], NidocaCode.prototype, "code", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaCode.prototype, "theme", 2);
  NidocaCode = __decorateClass([
    e4("nidoca-code")
  ], NidocaCode);

  // src/nidoca-elevation.ts
  var NidocaElevation = class extends NidocaHtml {
    constructor() {
      super();
      this.show = false;
      addEventListener("click", (me) => {
        const rect = this.associatedElement?.getBoundingClientRect();
        if (rect) {
          if (rect.top > me.clientY || rect.right < me.clientX || rect.left > me.clientX || rect.bottom < me.clientY) {
            this.dispatchEvent(
              new CustomEvent("nidoca-elevation-event-closeme", {
                detail: this,
                bubbles: true,
                composed: true
              })
            );
          }
        }
      });
    }
    render() {
      return this.show ? x`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        ` : x``;
    }
    calculatePositionStyle(basedOnComponent) {
      let style = "";
      if (basedOnComponent) {
        const rect = basedOnComponent.getBoundingClientRect();
        if (rect.right > window.innerWidth / 2) {
          style += `right:${window.innerWidth - rect.right}px;`;
        } else {
          style += `left:${rect.left}px;`;
        }
        if (rect.top > window.innerHeight / 2) {
          style += `bottom:${rect.height + window.innerHeight - rect.top}px;`;
        } else {
          style += `top:${rect.bottom}px;`;
        }
      }
      return style;
    }
  };
  NidocaElevation.styles = i`
    .container {
      position: fixed;
      z-index: 999;
    }
  `;
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaElevation.prototype, "show", 2);
  __decorateClass([
    n5({ type: Object })
  ], NidocaElevation.prototype, "associatedElement", 2);
  NidocaElevation = __decorateClass([
    e4("nidoca-elevation")
  ], NidocaElevation);

  // src/nidoca-progress.ts
  var ProgressType = class {
    static {
      this.PROGRESS = "PROGRESS";
    }
    static {
      this.PROGRESS_CIRCULAR = "PROGRESS_CIRCULAR";
    }
  };
  var NidocaProgress = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.progressType = ProgressType.PROGRESS;
    }
    render() {
      return x` <style>
        :host {
          width: 100%;
          display: block;
        }

        .PROGRESS {
          color: var(--app-color-${this.theme}-background);
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border: none;
          height: 0.25em;
          background-color: #dddddd;
          font-size: 16px;
          width: 100%;
        }

        .PROGRESS::-webkit-progress-bar {
          background-color: transparent;
        }

        /* Determinate */
        .PROGRESS::-webkit-progress-value {
          background-color: currentColor;
          transition: all 0.2s;
        }

        .PROGRESS::-moz-progress-bar {
          background-color: currentColor;
          transition: all 0.2s;
        }

        .PROGRESS::-ms-fill {
          border: none;
          background-color: currentColor;
          transition: all 0.2s;
        }

        /* Indeterminate */
        .PROGRESS:indeterminate {
          background-size: 200% 100%;
          background-image: linear-gradient(
            to right,
            transparent 50%,
            currentColor 50%,
            currentColor 60%,
            transparent 60%,
            transparent 71.5%,
            currentColor 71.5%,
            currentColor 84%,
            transparent 84%
          );
          animation: progresslinear 2s infinite linear;
        }

        .PROGRESS:indeterminate::-moz-progress-bar {
          background-color: transparent;
        }

        .PROGRESS:indeterminate::-ms-fill {
          animation-name: none;
        }

        @keyframes progresslinear {
          0% {
            background-size: 200% 100%;
            background-position: left -31.25% top 0%;
          }
          50% {
            background-size: 800% 100%;
            background-position: left -49% top 0%;
          }
          100% {
            background-size: 400% 100%;
            background-position: left -102% top 0%;
          }
        }

        .PROGRESS_CIRCULAR {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          box-sizing: border-box;
          border: none;
          border-radius: 50%;
          padding: 0.25em;
          width: 3em;
          height: 3em;
          color: var(--app-color-${this.theme}-background);
          background-color: transparent;
          font-size: 16px;
          overflow: hidden;
          margin-top: 30px;
        }

        .PROGRESS_CIRCULAR::-webkit-progress-bar {
          background-color: transparent;
        }

        /* Indeterminate */
        .PROGRESS_CIRCULAR:indeterminate {
          mask-image: linear-gradient(transparent 50%, black 50%), linear-gradient(to right, transparent 50%, black 50%);
          animation: progress-circular 6s infinite cubic-bezier(0.3, 0.6, 1, 1);
        }

        :-ms-lang(x),
        .PROGRESS_CIRCULAR:indeterminate {
          animation: none;
        }

        .PROGRESS_CIRCULAR:indeterminate::before,
        .PROGRESS_CIRCULAR:indeterminate::-webkit-progress-value {
          content: '';
          display: block;
          box-sizing: border-box;
          margin-bottom: 0.25em;
          border: solid 0.25em transparent;
          border-top-color: currentColor;
          border-radius: 50%;
          width: 100% !important;
          height: 100%;
          background-color: transparent;
          animation: progress-circular-pseudo 0.75s infinite linear alternate;
        }

        .PROGRESS_CIRCULAR:indeterminate::-moz-progress-bar {
          box-sizing: border-box;
          border: solid 0.25em transparent;
          border-top-color: currentColor;
          border-radius: 50%;
          width: 100%;
          height: 100%;
          background-color: transparent;
          animation: progress-circular-pseudo 0.75s infinite linear alternate;
        }

        .PROGRESS_CIRCULAR:indeterminate::-ms-fill {
          animation-name: -ms-ring;
        }

        @keyframes progress-circular {
          0% {
            transform: rotate(0deg);
          }
          12.5% {
            transform: rotate(180deg);
            animation-timing-function: linear;
          }
          25% {
            transform: rotate(630deg);
          }
          37.5% {
            transform: rotate(810deg);
            animation-timing-function: linear;
          }
          50% {
            transform: rotate(1260deg);
          }
          62.5% {
            transform: rotate(1440deg);
            animation-timing-function: linear;
          }
          75% {
            transform: rotate(1890deg);
          }
          87.5% {
            transform: rotate(2070deg);
            animation-timing-function: linear;
          }
          100% {
            transform: rotate(2520deg);
          }
        }

        @keyframes progress-circular-pseudo {
          0% {
            transform: rotate(-30deg);
          }
          29.4% {
            border-left-color: transparent;
          }
          29.41% {
            border-left-color: currentColor;
          }
          64.7% {
            border-bottom-color: transparent;
          }
          64.71% {
            border-bottom-color: currentColor;
          }
          100% {
            border-left-color: currentColor;
            border-bottom-color: currentColor;
            transform: rotate(225deg);
          }
        }
      </style>

      <progress class="${this.progressType}"></progress>`;
    }
  };
  NidocaProgress.styles = i``;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaProgress.prototype, "theme", 2);
  __decorateClass([
    n5({ type: ProgressType, converter: String })
  ], NidocaProgress.prototype, "progressType", 2);
  NidocaProgress = __decorateClass([
    e4("nidoca-progress")
  ], NidocaProgress);

  // src/nidoca-button.ts
  var NidocaButtonType = /* @__PURE__ */ ((NidocaButtonType2) => {
    NidocaButtonType2["contained"] = "contained";
    NidocaButtonType2["outlined"] = "outlined";
    NidocaButtonType2["text"] = "text";
    return NidocaButtonType2;
  })(NidocaButtonType || {});
  var NidocaButton = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "primary" /* primary */;
      this.buttonType = "contained" /* contained */;
      this.icon = "";
      this.text = "";
    }
    render() {
      return x`
      <style>
        .outlined {
          color: var(--app-color-${this.theme}-background);
          background-color: var(--app-color-text-${this.theme});
          border-color: var(--app-color-${this.theme}-background);
        }

        .contained {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-background);
        }

        .text {
          color: var(--app-color-${this.theme}-background);
        }

        :hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div
        class="container ${this.buttonType}"
        @click="${() => {
        this.clicked();
      }}"
      >
        ${this.icon ? x`<nidoca-icon
              .clickable="${false}"
              .icon="${this.icon}"
              style="padding-right:var(--space);"
            ></nidoca-icon>` : x``}

        <nidoca-text-button theme="${this.theme}"
          >${this.text}
          <slot></slot>
        </nidoca-text-button>
      </div>
    `;
    }
    clicked() {
      this.dispatchEvent(
        new CustomEvent("nidoca-event-button-clicked", {
          detail: this,
          bubbles: true,
          composed: true
        })
      );
    }
    static example(slotName = "") {
      return x`<nidoca-button slot="${slotName}" text="Start" icon="home"></nidoca-button>`;
    }
  };
  NidocaButton.styles = i`
    :host,
    .fullWidth {
      display: block;
      width: 100%;
    }

    .container {
      cursor: pointer;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      font-family: inherit;
      text-align: center;
      vertical-align: center;
      border-style: solid;
      border-width: var(--border-width-min);
      padding: var(--space);
      height: var(--height-medium);
      box-sizing: border-box;
    }

    @media only screen and (orientation: portrait) {
      button,
      .btn {
        width: 100%;
      }
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaButton.prototype, "theme", 2);
  __decorateClass([
    n5({ type: NidocaButtonType, converter: String })
  ], NidocaButton.prototype, "buttonType", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaButton.prototype, "icon", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaButton.prototype, "text", 2);
  NidocaButton = __decorateClass([
    e4("nidoca-button")
  ], NidocaButton);

  // src/nidoca-form-abstract-input-element.ts
  var NidocaFormAbstractInputElement = class extends NidocaHtml {
  };

  // src/nidoca-form.ts
  var NidocaForm = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.autocomplete = true;
    }
    render() {
      return x`
      <form autocomplete="${this.autocomplete ? "on" : "off"}">
        <slot id="slotElement"></slot>
      </form>
    `;
    }
    getOutputData() {
      const formData = new FormData();
      const json = {};
      for (const element of this.getInputElements(this.slotElement)) {
        const elementOutputData = element.getOutputData();
        json[elementOutputData.key] = elementOutputData.value;
        formData.append(elementOutputData.key, elementOutputData.value);
      }
      const outputData = {};
      outputData.jsonObject = json;
      outputData.formData = formData;
      return outputData;
    }
    validate() {
      let valid = true;
      for (const element of this.getInputElements(this.slotElement)) {
        if (!element.validate()) {
          if (valid) {
          }
          valid = false;
        }
      }
      if (!valid) {
        this.dispatchEvent(
          new CustomEvent("nidoca-form-validation-failed", {
            detail: this.getOutputData(),
            bubbles: true,
            composed: true
          })
        );
      }
      return valid;
    }
    getInputElements(slotElement) {
      if (slotElement == null) {
        return [];
      }
      const inputElements = [];
      const elements = slotElement.assignedElements({ flatten: true });
      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        this.recursiveInputElementSearch(element, inputElements);
      }
      return inputElements;
    }
    recursiveInputElementSearch(element, inputElements) {
      if (element instanceof NidocaFormAbstractInputElement) {
        inputElements.push(element);
      } else if (element.hasChildNodes()) {
        const childrens = element.children;
        for (const childElement of [].slice.call(childrens)) {
          this.recursiveInputElementSearch(childElement, inputElements);
        }
      }
    }
  };
  NidocaForm.styles = i`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `;
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaForm.prototype, "autocomplete", 2);
  __decorateClass([
    i4("#slotElement")
  ], NidocaForm.prototype, "slotElement", 2);
  NidocaForm = __decorateClass([
    e4("nidoca-form")
  ], NidocaForm);

  // node_modules/lit-html/directive.js
  var t4 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e7 = (t5) => (...e9) => ({ _$litDirective$: t5, values: e9 });
  var i5 = class {
    constructor(t5) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t5, e9, i7) {
      this._$Ct = t5, this._$AM = e9, this._$Ci = i7;
    }
    _$AS(t5, e9) {
      return this.update(t5, e9);
    }
    update(t5, e9) {
      return this.render(...e9);
    }
  };

  // node_modules/lit-html/directive-helpers.js
  var { I: l5 } = j;
  var r4 = () => document.createComment("");
  var c3 = (o6, i7, n7) => {
    var t5;
    const v2 = o6._$AA.parentNode, d3 = void 0 === i7 ? o6._$AB : i7._$AA;
    if (void 0 === n7) {
      const i8 = v2.insertBefore(r4(), d3), t6 = v2.insertBefore(r4(), d3);
      n7 = new l5(i8, t6, o6, o6.options);
    } else {
      const l7 = n7._$AB.nextSibling, i8 = n7._$AM, u4 = i8 !== o6;
      if (u4) {
        let l8;
        null === (t5 = n7._$AQ) || void 0 === t5 || t5.call(n7, o6), n7._$AM = o6, void 0 !== n7._$AP && (l8 = o6._$AU) !== i8._$AU && n7._$AP(l8);
      }
      if (l7 !== d3 || u4) {
        let o7 = n7._$AA;
        for (; o7 !== l7; ) {
          const l8 = o7.nextSibling;
          v2.insertBefore(o7, d3), o7 = l8;
        }
      }
    }
    return n7;
  };
  var f2 = (o6, l7, i7 = o6) => (o6._$AI(l7, i7), o6);
  var s5 = {};
  var a3 = (o6, l7 = s5) => o6._$AH = l7;
  var m2 = (o6) => o6._$AH;
  var p2 = (o6) => {
    var l7;
    null === (l7 = o6._$AP) || void 0 === l7 || l7.call(o6, false, true);
    let i7 = o6._$AA;
    const n7 = o6._$AB.nextSibling;
    for (; i7 !== n7; ) {
      const o7 = i7.nextSibling;
      i7.remove(), i7 = o7;
    }
  };

  // node_modules/lit-html/directives/repeat.js
  var u3 = (e9, s6, t5) => {
    const r5 = /* @__PURE__ */ new Map();
    for (let l7 = s6; l7 <= t5; l7++)
      r5.set(e9[l7], l7);
    return r5;
  };
  var c4 = e7(class extends i5 {
    constructor(e9) {
      if (super(e9), e9.type !== t4.CHILD)
        throw Error("repeat() can only be used in text expressions");
    }
    ct(e9, s6, t5) {
      let r5;
      void 0 === t5 ? t5 = s6 : void 0 !== s6 && (r5 = s6);
      const l7 = [], o6 = [];
      let i7 = 0;
      for (const s7 of e9)
        l7[i7] = r5 ? r5(s7, i7) : i7, o6[i7] = t5(s7, i7), i7++;
      return { values: o6, keys: l7 };
    }
    render(e9, s6, t5) {
      return this.ct(e9, s6, t5).values;
    }
    update(s6, [t5, r5, c5]) {
      var d3;
      const a4 = m2(s6), { values: p3, keys: v2 } = this.ct(t5, r5, c5);
      if (!Array.isArray(a4))
        return this.ut = v2, p3;
      const h3 = null !== (d3 = this.ut) && void 0 !== d3 ? d3 : this.ut = [], m3 = [];
      let y2, x2, j2 = 0, k2 = a4.length - 1, w2 = 0, A2 = p3.length - 1;
      for (; j2 <= k2 && w2 <= A2; )
        if (null === a4[j2])
          j2++;
        else if (null === a4[k2])
          k2--;
        else if (h3[j2] === v2[w2])
          m3[w2] = f2(a4[j2], p3[w2]), j2++, w2++;
        else if (h3[k2] === v2[A2])
          m3[A2] = f2(a4[k2], p3[A2]), k2--, A2--;
        else if (h3[j2] === v2[A2])
          m3[A2] = f2(a4[j2], p3[A2]), c3(s6, m3[A2 + 1], a4[j2]), j2++, A2--;
        else if (h3[k2] === v2[w2])
          m3[w2] = f2(a4[k2], p3[w2]), c3(s6, a4[j2], a4[k2]), k2--, w2++;
        else if (void 0 === y2 && (y2 = u3(v2, w2, A2), x2 = u3(h3, j2, k2)), y2.has(h3[j2]))
          if (y2.has(h3[k2])) {
            const e9 = x2.get(v2[w2]), t6 = void 0 !== e9 ? a4[e9] : null;
            if (null === t6) {
              const e10 = c3(s6, a4[j2]);
              f2(e10, p3[w2]), m3[w2] = e10;
            } else
              m3[w2] = f2(t6, p3[w2]), c3(s6, a4[j2], t6), a4[e9] = null;
            w2++;
          } else
            p2(a4[k2]), k2--;
        else
          p2(a4[j2]), j2++;
      for (; w2 <= A2; ) {
        const e9 = c3(s6, m3[A2 + 1]);
        f2(e9, p3[w2]), m3[w2++] = e9;
      }
      for (; j2 <= k2; ) {
        const e9 = a4[j2++];
        null !== e9 && p2(e9);
      }
      return this.ut = v2, a3(s6, m3), T;
    }
  });

  // node_modules/lit-html/directives/guard.js
  var e8 = {};
  var i6 = e7(class extends i5 {
    constructor() {
      super(...arguments), this.st = e8;
    }
    render(r5, t5) {
      return t5();
    }
    update(t5, [s6, e9]) {
      if (Array.isArray(s6)) {
        if (Array.isArray(this.st) && this.st.length === s6.length && s6.every((r5, t6) => r5 === this.st[t6]))
          return T;
      } else if (this.st === s6)
        return T;
      return this.st = Array.isArray(s6) ? Array.from(s6) : s6, this.render(s6, e9);
    }
  });

  // src/nidoca-form-combobox.ts
  var NidocaFormCombobox = class extends NidocaFormAbstractInputElement {
    constructor() {
      super(...arguments);
      this.theme = "surface" /* surface */;
      this.trailingIcon = "";
      this.label = "";
      this.errorText = "";
      this.infoText = "";
      this.warningText = "";
      this.value = "";
      this.options = [];
      this.name = "";
      this.required = true;
      this.multiple = false;
      this.size = 1;
    }
    render() {
      return x` <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }

        .parentContainer:focus-within,
        ::slotted(.parentContainer:focus-within) {
          border-color: var(--app-color-${this.theme}-selected);
          filter: brightness(var(--app-darken-1));
        }

        option {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <div class="parentContainer">
        ${this.trailingIcon ? x` <nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>` : x``}
        <div class="container">
          <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
          <select
            id="selectElement"
            name="${this.name}"
            size="${this.size}"
            ?required="${this.required}"
            ?multiple="${this.multiple}"
          >
            ${i6(
        [this.value, this.options],
        () => x`
                ${c4(
          this.options,
          (option) => option == void 0 ? x` <option></option>` : this.isSelectedOption(option) ? x` <option value="${option.key}" selected>${option.value}</option> ` : x` <option value="${option.key}">${option.value}</option> `
        )}
              `
      )}
          </select>
        </div>
      </div>
      ${this.infoText || this.warningText || this.errorText ? x`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText ? x` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>` : x``}
              ${this.warningText ? x` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>` : x``}
              ${this.errorText ? x` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>` : x``}
            </div>
          ` : x``}`;
    }
    getOutputData() {
      let outputValue = this.value;
      if (this.selectElement != null && this.multiple) {
        outputValue = [];
        for (let i7 = 0, len = this.selectElement.options.length; i7 < len; i7++) {
          const opt = this.selectElement.options[i7];
          if (opt.selected) {
            outputValue.push(this.options[i7].key);
          }
        }
      } else if (this.selectElement != null) {
        if (this.selectElement.value.length == 0) {
          outputValue = null;
        } else {
          outputValue = this.selectElement.value;
        }
      }
      return {
        key: this.name,
        value: outputValue
      };
    }
    validate() {
      this.errorText = "";
      if (this.selectElement != null && !this.selectElement.validity.valid && this.selectElement.validationMessage != this.errorText) {
        this.errorText = this.selectElement.validationMessage;
      }
      return this.errorText.length == 0;
    }
    isSelectedOption(option) {
      if (this.multiple) {
        let isSelected = false;
        for (const val of this.value) {
          isSelected = option.key === val;
          if (isSelected) {
            return true;
          }
        }
      }
      return this.value === option.key;
    }
    static enumToOptions(enumeration, emptyElement = true) {
      const options = [];
      if (emptyElement) {
        options.push({ key: "", value: "" });
      }
      Object.keys(enumeration).forEach((key) => {
        options.push({ key, value: enumeration[key] });
      });
      return options;
    }
    static stringArrayToOptions(stringArray, emptyElement = true) {
      const options = [];
      if (emptyElement) {
        options.push({ key: "", value: "" });
      }
      stringArray.forEach((key) => {
        options.push({ key, value: key });
      });
      return options;
    }
    static toComboboxOptions(type = null, typeName = null) {
      if (type == null) {
        return [];
      }
      const retval = [];
      Object.values(type).forEach((item) => {
        let value = String(Object.keys(type)[Object.values(type).indexOf(item)]);
        if (typeName) {
          value = value.concat(typeName);
        }
        retval.push({
          key: item,
          value
        });
      });
      return retval;
    }
  };
  NidocaFormCombobox.styles = i`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    .parentContainer {
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      padding: var(--space);
      height: var(--height-max);
      box-sizing: border-box;
    }

    .container {
      width: 100%;
      display: flex;
      align-content: center;
      flex-direction: column;
    }

    option {
      padding: 0;
    }

    select {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      height: var(--height-min);
      line-height: var(--height-min);
    }

    select[multiple] {
      line-height: unset;
      height: auto;
    }

    select:focus {
      outline: none;
      box-shadow: none;
    }

    select:valid {
      outline: none;
      box-shadow: none;
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaFormCombobox.prototype, "theme", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormCombobox.prototype, "trailingIcon", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormCombobox.prototype, "label", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormCombobox.prototype, "errorText", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormCombobox.prototype, "infoText", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormCombobox.prototype, "warningText", 2);
  __decorateClass([
    n5()
  ], NidocaFormCombobox.prototype, "value", 2);
  __decorateClass([
    n5({ type: Array })
  ], NidocaFormCombobox.prototype, "options", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormCombobox.prototype, "name", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaFormCombobox.prototype, "required", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaFormCombobox.prototype, "multiple", 2);
  __decorateClass([
    n5({ type: Number })
  ], NidocaFormCombobox.prototype, "size", 2);
  __decorateClass([
    i4("#selectElement")
  ], NidocaFormCombobox.prototype, "selectElement", 2);
  NidocaFormCombobox = __decorateClass([
    e4("nidoca-form-combobox")
  ], NidocaFormCombobox);

  // node_modules/lit-html/directives/if-defined.js
  var l6 = (l7) => null != l7 ? l7 : A;

  // src/nidoca-form-text.ts
  var NidocaFormTextType = /* @__PURE__ */ ((NidocaFormTextType2) => {
    NidocaFormTextType2["color"] = "color";
    NidocaFormTextType2["email"] = "email";
    NidocaFormTextType2["hidden"] = "hidden";
    NidocaFormTextType2["number"] = "number";
    NidocaFormTextType2["password"] = "password";
    NidocaFormTextType2["tel"] = "tel";
    NidocaFormTextType2["text"] = "text";
    NidocaFormTextType2["search"] = "search";
    NidocaFormTextType2["url"] = "url";
    NidocaFormTextType2["date"] = "date";
    NidocaFormTextType2["month"] = "month";
    NidocaFormTextType2["time"] = "time";
    NidocaFormTextType2["week"] = "week";
    return NidocaFormTextType2;
  })(NidocaFormTextType || {});
  var NidocaFormText = class extends NidocaFormAbstractInputElement {
    constructor() {
      super(...arguments);
      this.type = "text" /* text */;
      this.label = "";
      this.placeholder = "";
      this.trailingIcon = "";
      this.errorText = "";
      this.infoText = "";
      this.warningText = "";
      this.name = "";
      this.value = "";
      this.required = false;
      this.disabled = false;
      this.checked = false;
      this.theme = "surface" /* surface */;
    }
    render() {
      return this.type == "hidden" /* hidden */ ? x`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />` : x` <style>
            .parentContainer,
            ::slotted(.parentContainer) {
              color: var(--app-color-text-${this.theme});
              background-color: var(--app-color-${this.theme}-background);
            }

            .parentContainer,
            ::slotted(.parentContainer) {
              border-color: var(--app-color-${this.theme}-border);
            }

            .parentContainer:focus-within,
            ::slotted(.parentContainer:focus-within) {
              border-color: var(--app-color-${this.theme}-border);
              background-color: var(--app-color-${this.theme}-selected);
            }
          </style>
          <div class="parentContainer border">
            ${this.trailingIcon ? x` <nidoca-icon
                  style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
                  icon="${this.trailingIcon}"
                ></nidoca-icon>` : x``}
            <div class="container">
              <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
              <input
                id="inputElement"
                name="${this.name}"
                .type="${this.type}"
                value="${this.value}"
                placeholder="${this.placeholder}"
                size="${l6(this.size)}"
                minlength="${l6(this.minlength)}"
                maxlength="${l6(this.maxlength)}"
                pattern="${l6(this.pattern)}"
                min="${l6(this.min)}"
                max="${l6(this.max)}"
                step="${l6(this.step)}"
                ?required="${this.required}"
                ?disabled="${this.disabled}"
                ?checked="${this.checked}"
              />
            </div>
          </div>

          ${this.infoText || this.warningText || this.errorText ? x`
                <div style="display:flex;flex-direction:column;">
                  ${this.infoText ? x` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>` : x``}
                  ${this.warningText ? x` <nidoca-text-warning
                        style="color:var(--app-color-warning-background)"
                        text="${this.warningText}"
                      ></nidoca-text-warning>` : x``}
                  ${this.errorText ? x` <nidoca-text-error
                        style="color:var(--app-color-error-background)"
                        text="${this.errorText}"
                      ></nidoca-text-error>` : x``}
                </div>
              ` : x``}`;
    }
    getOutputData() {
      const outputValue = this.inputElement?.value;
      return {
        key: this.name,
        value: outputValue?.trim()
      };
    }
    validate() {
      this.errorText = "";
      if (this.inputElement != null && !this.inputElement.validity.valid && this.inputElement.validationMessage != this.errorText) {
        this.errorText = this.inputElement.validationMessage;
        if (this.inputElement.validity.patternMismatch && this.pattern) {
          this.errorText = this.errorText.concat(" Format: ").concat(this.pattern);
        }
      }
      return this.errorText == "";
    }
  };
  NidocaFormText.styles = i`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    .parentContainer {
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;
      padding: var(--space);
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      height: var(--height-max);
      box-sizing: border-box;
    }

    .container {
      width: 100%;
      display: flex;
      align-content: center;
      flex-direction: column;
    }

    input {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      background: inherit;
      color: inherit;
      line-height: var(--height-min);
    }

    input:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }

    input:focus::placeholder {
      color: transparent;
    }
  `;
  __decorateClass([
    n5({ type: NidocaFormTextType, converter: String })
  ], NidocaFormText.prototype, "type", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormText.prototype, "label", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormText.prototype, "placeholder", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormText.prototype, "trailingIcon", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormText.prototype, "errorText", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormText.prototype, "infoText", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormText.prototype, "warningText", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormText.prototype, "name", 2);
  __decorateClass([
    n5()
  ], NidocaFormText.prototype, "value", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaFormText.prototype, "required", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaFormText.prototype, "disabled", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaFormText.prototype, "checked", 2);
  __decorateClass([
    n5({ type: Number })
  ], NidocaFormText.prototype, "maxlength", 2);
  __decorateClass([
    n5({ type: Number })
  ], NidocaFormText.prototype, "minlength", 2);
  __decorateClass([
    n5({ type: Number })
  ], NidocaFormText.prototype, "min", 2);
  __decorateClass([
    n5({ type: Number })
  ], NidocaFormText.prototype, "max", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormText.prototype, "step", 2);
  __decorateClass([
    n5({ type: Number })
  ], NidocaFormText.prototype, "size", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormText.prototype, "pattern", 2);
  __decorateClass([
    i4("#inputElement")
  ], NidocaFormText.prototype, "inputElement", 2);
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaFormText.prototype, "theme", 2);
  NidocaFormText = __decorateClass([
    e4("nidoca-form-text")
  ], NidocaFormText);

  // src/nidoca-form-date.ts
  var NidocaFormDate = class extends NidocaFormText {
    constructor() {
      super();
      this.type = "date" /* date */;
    }
  };
  NidocaFormDate = __decorateClass([
    e4("nidoca-form-date")
  ], NidocaFormDate);

  // src/nidoca-form-textarea.ts
  var NidocaFormTextarea = class extends NidocaFormAbstractInputElement {
    constructor() {
      super(...arguments);
      this.theme = "surface" /* surface */;
      this.infoText = "";
      this.warningText = "";
      this.errorText = "";
      this.name = "";
      this.value = "";
      this.label = "";
      this.required = false;
      this.placeholder = "";
      this.disabled = false;
      this.rows = 5;
    }
    render() {
      return x` <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        .parentContainer,
        ::slotted(.parentContainer) {
          border-color: var(--app-color-${this.theme}-border);
        }

        .parentContainer:focus-within,
        ::slotted(.parentContainer:focus-within) {
          background-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div class="parentContainer">
        <div class="container">
          <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>

          <textarea
            id="inputElement"
            name="${this.name}"
            placeholder="${this.placeholder}"
            rows="${this.rows}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
          >
${this.value}</textarea
          >
        </div>
      </div>

      ${this.infoText || this.warningText || this.errorText ? x`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText ? x` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>` : x``}
              ${this.warningText ? x` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>` : x``}
              ${this.errorText ? x` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>` : x``}
            </div>
          ` : x``}`;
    }
    getOutputData() {
      const outputValue = this.inputElement?.value;
      return {
        key: this.name,
        value: outputValue
      };
    }
    validate() {
      this.errorText = "";
      if (this.inputElement != null && !this.inputElement.validity.valid && this.inputElement.validationMessage != this.errorText) {
        this.errorText = this.inputElement.validationMessage;
      }
      return this.errorText == "";
    }
  };
  NidocaFormTextarea.styles = i`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    .parentContainer {
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      padding: var(--space);
    }

    .container {
      width: 100%;
      display: flex;
      align-content: center;
      flex-direction: column;
    }

    textarea {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      line-height: var(--height-min);
    }
    textarea:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
    textarea:focus::placeholder {
      color: transparent;
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaFormTextarea.prototype, "theme", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormTextarea.prototype, "infoText", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormTextarea.prototype, "warningText", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormTextarea.prototype, "errorText", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormTextarea.prototype, "name", 2);
  __decorateClass([
    n5()
  ], NidocaFormTextarea.prototype, "value", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormTextarea.prototype, "label", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaFormTextarea.prototype, "required", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormTextarea.prototype, "placeholder", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaFormTextarea.prototype, "disabled", 2);
  __decorateClass([
    n5({ type: Number })
  ], NidocaFormTextarea.prototype, "rows", 2);
  __decorateClass([
    i4("#inputElement")
  ], NidocaFormTextarea.prototype, "inputElement", 2);
  NidocaFormTextarea = __decorateClass([
    e4("nidoca-form-textarea")
  ], NidocaFormTextarea);

  // src/nidoca-form-upload.ts
  var NidocaFormUpload = class extends NidocaFormAbstractInputElement {
    constructor() {
      super(...arguments);
      this.theme = "primary" /* primary */;
    }
    validate() {
      throw new Error("Method not implemented.");
    }
    getOutputData() {
      throw new Error("Method not implemented.");
    }
    render() {
      return x`
      <nidoca-box theme="${l6(this.theme)}">
        <div class="container">
          <nidoca-icon
            clickable
            class="icon"
            @nidoca-event-icon-clicked="${() => this.upload()}"
            icon="cloud_upload"
          ></nidoca-icon>

          Upload your Files
          <input style="display:none;" id="inputElement" name="file" type="file" />
        </div>
      </nidoca-box>
    `;
    }
    upload() {
      this.inputElement?.click();
    }
  };
  NidocaFormUpload.styles = i`
    :host,
    slot {
      display: block;
      width: 100%;
    }

    .container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: center;
    }

    .icon {
      font-size: 96px;
      align-self: center;
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaFormUpload.prototype, "theme", 2);
  __decorateClass([
    i4("#inputElement")
  ], NidocaFormUpload.prototype, "inputElement", 2);
  NidocaFormUpload = __decorateClass([
    e4("nidoca-form-upload")
  ], NidocaFormUpload);

  // src/nidoca-form-switch.ts
  var NidocaFormSwitch = class extends NidocaFormAbstractInputElement {
    constructor() {
      super();
      this.name = "";
      this.label = "";
      this.infoText = "";
      this.errorText = "";
      this.warningText = "";
      this.required = false;
      this.disabled = false;
      this.checked = false;
      this.theme = "primary" /* primary */;
      this.theme = NidocaThemeHelper.prototype.getParentTheme(this) || "plain" /* plain */;
    }
    render() {
      return x`
      <style>
        .slider {
          background-color: var(--app-color-${this.theme}-border);
        }

        .slider:before {
          background-color: var(--app-color-${this.theme}-background);
        }

        input:checked + .slider:before {
          background-color: var(--app-color-text-${this.theme});
        }

        input:checked + .slider {
          background-color: var(--app-color-${this.theme}-selected);
        }

        input:focus + .slider {
          box-shadow: 0 0 20px var(--app-color-${this.theme}-border);
        }
      </style>

      <nidoca-list-item>
        <nidoca-text-subtitle>
          ${this.label}
          <slot></slot>
        </nidoca-text-subtitle>

        ${this.infoText.length > 0 ? x` <nidoca-text-caption text="${this.infoText}"></nidoca-text-caption>` : x``}

        <label class="switch" slot="meta">
          <input
            id="inputElement"
            name="${this.name}"
            type="checkbox"
            ?checked="${this.checked}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
            @input="${(eventArg) => {
        this.checked = eventArg.target.checked;
        console.log(this.checked);
      }}"
          />
          <span class="slider round"></span>
        </label>
      </nidoca-list-item>

      ${this.warningText ? x` <nidoca-text-error text="${this.warningText}"></nidoca-text-error>` : x``}
      ${this.errorText ? x` <nidoca-text-error text="${this.errorText}"></nidoca-text-error>` : x``}
    `;
    }
    getOutputData() {
      return {
        key: this.name,
        value: this.checked
      };
    }
    validate() {
      this.errorText = "";
      if (this.inputElement != null && !this.inputElement.validity.valid && this.inputElement.validationMessage != this.errorText) {
        this.errorText = this.inputElement.validationMessage;
      }
      return this.errorText == "";
    }
  };
  NidocaFormSwitch.styles = i`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: var(--height-max);
    }

    .switch {
      position: relative;
      display: inline-block;
      height: 18px;
      width: 48px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      width: 40px;
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: '';
      height: 24px;
      width: 24px;
      left: 0px;
      bottom: -3px;

      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(16px);
      -ms-transform: translateX(16px);
      transform: translateX(16px);
    }

    .slider.round {
      border-radius: 12px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  `;
  __decorateClass([
    n5({ type: String })
  ], NidocaFormSwitch.prototype, "name", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormSwitch.prototype, "label", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormSwitch.prototype, "infoText", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormSwitch.prototype, "errorText", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormSwitch.prototype, "warningText", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaFormSwitch.prototype, "required", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaFormSwitch.prototype, "disabled", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaFormSwitch.prototype, "checked", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormSwitch.prototype, "theme", 2);
  __decorateClass([
    i4("#inputElement")
  ], NidocaFormSwitch.prototype, "inputElement", 2);
  NidocaFormSwitch = __decorateClass([
    e4("nidoca-form-switch")
  ], NidocaFormSwitch);

  // src/nidoca-form-newsletter.ts
  var NidocaFormNewsletter = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "primary" /* primary */;
      this.label = "Newsletter";
      this.emailLabel = "Deine Emailadresse";
      this.buttonLabel = "Registrieren";
    }
    render() {
      return x`
      <nidoca-box theme="${l6(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"email" /* email */}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${() => this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `;
    }
    register() {
      if (this.formComponent && this.formComponent.validate()) {
        this.dispatchEvent(
          new CustomEvent("nidoca-form-newsletter-submit", {
            detail: this.formComponent.getOutputData(),
            bubbles: true,
            composed: true
          })
        );
      }
    }
  };
  NidocaFormNewsletter.styles = i`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaFormNewsletter.prototype, "theme", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormNewsletter.prototype, "label", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormNewsletter.prototype, "emailLabel", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormNewsletter.prototype, "buttonLabel", 2);
  __decorateClass([
    i4("#form")
  ], NidocaFormNewsletter.prototype, "formComponent", 2);
  NidocaFormNewsletter = __decorateClass([
    e4("nidoca-form-newsletter")
  ], NidocaFormNewsletter);

  // src/nidoca-form-reset-password.ts
  var NidocaFormResetPassword = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "primary" /* primary */;
      this.label = "Passwort zur\xFCcksetzen";
      this.emailLabel = "Deine Emailadresse";
      this.buttonLabel = "Zur\xFCcksetzen";
    }
    render() {
      return x`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"email" /* email */}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${() => this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `;
    }
    register() {
      if (this.formComponent && this.formComponent.validate()) {
        this.dispatchEvent(
          new CustomEvent("nidoca-form-reset-password-submit", {
            detail: this.formComponent.getOutputData(),
            bubbles: true,
            composed: true
          })
        );
      }
    }
  };
  NidocaFormResetPassword.styles = i`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaFormResetPassword.prototype, "theme", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormResetPassword.prototype, "label", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormResetPassword.prototype, "emailLabel", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormResetPassword.prototype, "buttonLabel", 2);
  __decorateClass([
    i4("#form")
  ], NidocaFormResetPassword.prototype, "formComponent", 2);
  NidocaFormResetPassword = __decorateClass([
    e4("nidoca-form-reset-password")
  ], NidocaFormResetPassword);

  // src/nidoca-form-change-password.ts
  var NidocaFormChangePassword = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "surface" /* surface */;
      this.label = "Passwort \xE4ndern";
      this.oldPasswordLabel = "Altes Passwort";
      this.newPasswordLabel = "Neues Passwort";
      this.repeatNewPasswordLabel = "Wiederholen";
      this.buttonLabel = "\xC4ndern";
      this.showErrorMessageSamePassword = false;
      this.errorMessageSamePasswordLabel = "Altes und neues Passwort d\xFCrfen nicht \xFCbereinstimmen.";
      this.showErrorMessagePasswordDiff = false;
      this.errorMessagePasswordDiffLabel = "Die Passw\xF6rter stimmen nicht \xFCberein";
    }
    render() {
      return x`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            id="oldPassword"
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password" /* password */}"
            label="${this.oldPasswordLabel}"
            name="oldPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="newPassword"
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password" /* password */}"
            label="${this.newPasswordLabel}"
            name="newPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="repeatNewPassword"
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password" /* password */}"
            label="${this.repeatNewPasswordLabel}"
            name="repeatNewPassword"
            required
          ></nidoca-form-text>

          <nidoca-button
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${() => this.changePassword()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
        ${this.showErrorMessageSamePassword ? x` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessageSamePasswordLabel}"
            ></nidoca-text>` : x``}
        ${this.showErrorMessagePasswordDiff ? x` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessagePasswordDiffLabel}"
            ></nidoca-text>` : x``}
      </nidoca-box>
    `;
    }
    changePassword() {
      if (!this.formComponent?.validate()) {
        return;
      }
      this.showErrorMessagePasswordDiff = false;
      if (this.newPasswordInputField?.getOutputData().value != this.repeatNewPasswordInputField?.getOutputData().value) {
        this.showErrorMessagePasswordDiff = true;
      }
      this.showErrorMessageSamePassword = false;
      if (this.oldPasswordInputField?.getOutputData().value == this.newPasswordInputField?.getOutputData().value) {
        this.showErrorMessageSamePassword = true;
      }
      if (!this.showErrorMessagePasswordDiff && !this.showErrorMessageSamePassword) {
        this.dispatchEvent(
          new CustomEvent("nidoca-form-change-password-submit", {
            detail: this.formComponent.getOutputData(),
            bubbles: true,
            composed: true
          })
        );
      } else {
        this.requestUpdate();
      }
    }
  };
  NidocaFormChangePassword.styles = i`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaFormChangePassword.prototype, "theme", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormChangePassword.prototype, "label", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormChangePassword.prototype, "oldPasswordLabel", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormChangePassword.prototype, "newPasswordLabel", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormChangePassword.prototype, "repeatNewPasswordLabel", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormChangePassword.prototype, "buttonLabel", 2);
  __decorateClass([
    i4("#form")
  ], NidocaFormChangePassword.prototype, "formComponent", 2);
  __decorateClass([
    i4("#oldPassword")
  ], NidocaFormChangePassword.prototype, "oldPasswordInputField", 2);
  __decorateClass([
    i4("#newPassword")
  ], NidocaFormChangePassword.prototype, "newPasswordInputField", 2);
  __decorateClass([
    i4("#repeatNewPassword")
  ], NidocaFormChangePassword.prototype, "repeatNewPasswordInputField", 2);
  __decorateClass([
    n5()
  ], NidocaFormChangePassword.prototype, "errorMessageSamePasswordLabel", 2);
  __decorateClass([
    n5()
  ], NidocaFormChangePassword.prototype, "errorMessagePasswordDiffLabel", 2);
  NidocaFormChangePassword = __decorateClass([
    e4("nidoca-form-change-password")
  ], NidocaFormChangePassword);

  // src/nidoca-form-register.ts
  var NidocaFormRegister = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "primary" /* primary */;
      this.label = "Registrieren";
      this.emailLabel = "Email";
      this.passwordLabel = "Passwort";
      this.buttonLabel = "Registrieren";
    }
    render() {
      return x`
      <nidoca-box theme="${l6(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"email" /* email */}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="account_circle"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-form-text
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password" /* password */}"
            label="${this.passwordLabel}"
            name="password"
            trailingIcon="vpn_key"
            required
            minLength="8"
          ></nidoca-form-text>

          <nidoca-button
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${() => this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `;
    }
    register() {
      if (this.formComponent && this.formComponent.validate()) {
        this.dispatchEvent(
          new CustomEvent("nidoca-form-register-submit", {
            detail: this.formComponent.getOutputData(),
            bubbles: true,
            composed: true
          })
        );
      }
    }
  };
  NidocaFormRegister.styles = i`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaFormRegister.prototype, "theme", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormRegister.prototype, "label", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormRegister.prototype, "emailLabel", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormRegister.prototype, "passwordLabel", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormRegister.prototype, "buttonLabel", 2);
  __decorateClass([
    i4("#form")
  ], NidocaFormRegister.prototype, "formComponent", 2);
  NidocaFormRegister = __decorateClass([
    e4("nidoca-form-register")
  ], NidocaFormRegister);

  // src/nidoca-upload.ts
  var NidocaUpload = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.code = "";
    }
    render() {
      return x``;
    }
  };
  NidocaUpload.styles = i``;
  __decorateClass([
    n5({ type: String })
  ], NidocaUpload.prototype, "code", 2);
  NidocaUpload = __decorateClass([
    e4("nidoca-upload")
  ], NidocaUpload);

  // src/nidoca-hr.ts
  var NidocaHr = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "plain" /* plain */;
      this.text = "";
    }
    render() {
      return x`
      <style>
        .hr {
          border-color: var(--app-color-${this.theme}-border);
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-text-body>${this.text}</nidoca-text-body>

      <div class="hr"></div>
    `;
    }
  };
  NidocaHr.styles = i`
    :host,
    ::slotted(:host) {
      display: block;
      width: 100%;
      padding-right: var(--space-2);
      padding-left: var(--space-2);
      padding-top: var(--space-4);
      padding-bottom: var(--space-4);
      text-align: center;
    }
    ::slotted(slot),
    div {
      display: block;
    }
    .hr {
      border-bottom-style: solid;
      border-width: thin;
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaHr.prototype, "theme", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaHr.prototype, "text", 2);
  NidocaHr = __decorateClass([
    e4("nidoca-hr")
  ], NidocaHr);

  // src/nidoca-menu-area.ts
  var NidocaMenuArea = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.text = "";
      this.icon = "";
    }
    render() {
      return x`
      <div class="container">
        ${this.icon ? x` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>` : x``}
        ${this.text ? x` <nidoca-text-button>${this.text}</nidoca-text-button>` : x``}
        <slot></slot>
      </div>
    `;
    }
    static example(slotName = "") {
      return x`<nidoca-menu-area slot="${slotName}" icon="gavel" text="Rechtliches"></nidoca-menu-area>`;
    }
  };
  NidocaMenuArea.styles = i`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `;
  __decorateClass([
    n5({ type: String })
  ], NidocaMenuArea.prototype, "text", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaMenuArea.prototype, "icon", 2);
  NidocaMenuArea = __decorateClass([
    e4("nidoca-menu-area")
  ], NidocaMenuArea);

  // src/nidoca-menu-item.ts
  var NidocaMenuItem = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.text = "";
      this.icon = "";
      this.selected = false;
      this.theme = "surface" /* surface */;
    }
    render() {
      return x`
      <style>
        .container:hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div class="container ${this.selected ? "selected" : ""}" @click="${() => this.clicked()}">
        ${this.icon ? x` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>` : x``}
        ${this.text ? x` <nidoca-text-body theme="${this.theme}">${this.text}</nidoca-text-body>` : x``}
      </div>
    `;
    }
    clicked() {
      this.dispatchEvent(
        new CustomEvent("nidoca-event-menu-item-clicked", {
          detail: this,
          bubbles: true,
          composed: true
        })
      );
    }
    static example(slotName = "") {
      return x`<nidoca-menu-item slot="${slotName}" text="Start" icon="home"></nidoca-menu-item>`;
    }
  };
  NidocaMenuItem.styles = i`
    .container {
      display: flex;
      cursor: pointer;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }

    .selected {
      backdrop-filter: contrast(var(--app-color-percent-selected));
    }
  `;
  __decorateClass([
    n5({ type: String })
  ], NidocaMenuItem.prototype, "text", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaMenuItem.prototype, "icon", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaMenuItem.prototype, "selected", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaMenuItem.prototype, "theme", 2);
  NidocaMenuItem = __decorateClass([
    e4("nidoca-menu-item")
  ], NidocaMenuItem);

  // src/nidoca-menu.ts
  var NidocaMenu = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "surface" /* surface */;
    }
    render() {
      return x` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`;
    }
    updated(changedProperties) {
      super.updated(changedProperties);
      changedProperties.forEach((_oldValue, propName) => {
        if (propName == "theme") {
          if (this.slotElement != null) {
            const slottedElements = this.slotElement.assignedElements();
            for (let index = 0; index < slottedElements.length; index++) {
              const element = slottedElements[index];
              if (element instanceof NidocaMenuItem) {
                element.theme = this.theme;
              }
            }
          }
        }
      });
    }
    firstUpdated() {
      this.addEventListener("click", (event) => {
        if (this.slotElement != null) {
          const slottedElements = this.slotElement.assignedElements();
          for (let index = 0; index < slottedElements.length; index++) {
            const element = slottedElements[index];
            if (element instanceof NidocaMenuItem) {
              const rect = element.getBoundingClientRect();
              if (rect.left < event.x && rect.right > event.x) {
                if (rect.top < event.y && rect.bottom > event.y) {
                  element.selected = true;
                } else {
                  element.selected = false;
                }
              }
            }
          }
        }
      });
    }
    static example(slotName = "") {
      return x`
      <nidoca-menu slot="${slotName}" theme="primary">
        <nidoca-menu-item text="Start"></nidoca-menu-item>
        <nidoca-menu-area text="Framework"></nidoca-menu-area>
        <nidoca-menu-item text="Komponenten"></nidoca-menu-item>
        <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
        <nidoca-menu-item text="Impressum"></nidoca-menu-item>
        <nidoca-menu-item text="Datenschutz"></nidoca-menu-item>
        <nidoca-menu-item text="Nutzungsbedingungen"></nidoca-menu-item>
        <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
        <nidoca-menu-item icon="home" text="Einstellungen"></nidoca-menu-item>
      </nidoca-menu>
    `;
    }
  };
  NidocaMenu.styles = i`
    :host,
    slot {
      display: block;
    }
  `;
  __decorateClass([
    n5({ type: String })
  ], NidocaMenu.prototype, "theme", 2);
  __decorateClass([
    i4("#slotElement")
  ], NidocaMenu.prototype, "slotElement", 2);
  NidocaMenu = __decorateClass([
    e4("nidoca-menu")
  ], NidocaMenu);

  // src/nidoca-layout-floating.ts
  var NidocaLayoutFloatingContainer = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.height = "auto";
      this.width = "auto";
      this.left = "auto";
      this.top = "auto";
      this.right = "auto";
      this.bottom = "auto";
    }
    render() {
      return x`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height, this.width, this.left, this.right, this.top, this.bottom)}"
      ></slot>
    `;
    }
    toStyle(height, width, left, right, top, bottom) {
      return "height:".concat(height).concat(";").concat("width:").concat(width).concat(";").concat("left:").concat(left).concat(";").concat("right:").concat(right).concat(";").concat("top:").concat(top).concat(";").concat("bottom:").concat(bottom).concat(";");
    }
  };
  NidocaLayoutFloatingContainer.styles = i`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `;
  __decorateClass([
    n5({ type: String })
  ], NidocaLayoutFloatingContainer.prototype, "height", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaLayoutFloatingContainer.prototype, "width", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaLayoutFloatingContainer.prototype, "left", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaLayoutFloatingContainer.prototype, "top", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaLayoutFloatingContainer.prototype, "right", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaLayoutFloatingContainer.prototype, "bottom", 2);
  NidocaLayoutFloatingContainer = __decorateClass([
    e4("nidoca-layout-floating")
  ], NidocaLayoutFloatingContainer);

  // src/nidoca-container.ts
  var NidocaContainer = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "plain" /* plain */;
    }
    render() {
      return x`
      ${NidocaThemeHelper.getStyle(this.theme)}
      <slot></slot>
    `;
    }
  };
  NidocaContainer.styles = i`
    :host {
      display: block;
    }

    slot {
      display: block;
      margin: auto;
      width: auto;
      max-width: var(--max-width);
    }
  `;
  __decorateClass([
    n5({ type: String })
  ], NidocaContainer.prototype, "theme", 2);
  NidocaContainer = __decorateClass([
    e4("nidoca-container")
  ], NidocaContainer);

  // src/nidoca-split-screen.ts
  var NidocaSplitScreen = class extends NidocaHtml {
    constructor() {
      super();
      this.hideSidebox = true;
      this.theme = NidocaThemeHelper.prototype.getParentTheme(this) || "plain" /* plain */;
    }
    render() {
      return x` <style>
        .listbox,
        .sidebox {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        .sidebox {
          border-color: var(--app-color-${this.theme}-border);
          border-left-style: solid;
          border-width: thin;
        }
      </style>
      <slot class="listbox" name="left"></slot>
      ${this.hideSidebox ? x`` : x` <slot class="sidebox" name="sidebox"></slot>`}`;
    }
  };
  NidocaSplitScreen.styles = i`
    :host {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    .listbox {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
    }

    .sidebox {
      display: block;
      z-index: 1;
      position: fixed;
      right: 0;
      width: 33vw;
      min-height: 100%;
      transition: all 0.35s linear;
      overflow-y: scroll;
      max-height: 100%;
    }

    @media only screen and (min-width: 641px) and (max-width: 1007px) {
      .sidebox {
        width: 50vw;
      }
    }

    @media only screen and (max-width: 640px) {
      .sidebox {
        width: 100%;
      }
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaSplitScreen.prototype, "theme", 2);
  __decorateClass([
    n5({ type: Boolean, converter: String })
  ], NidocaSplitScreen.prototype, "hideSidebox", 2);
  NidocaSplitScreen = __decorateClass([
    e4("nidoca-split-screen")
  ], NidocaSplitScreen);

  // src/nidoca-icon.ts
  var NidocaIcon = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.icon = "";
      this.clickable = true;
      this.deactivated = false;
      this.title = "";
    }
    render() {
      return x`
      <i
        class="material-icons ${this.deactivated ? "deactivated" : ""} ${this.clickable ? "clickable" : ""}"
        title="${this.title}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `;
    }
    async clicked() {
      if (this.clickable && !this.deactivated) {
        const customEventName = "nidoca-event-icon-clicked";
        console.log("dispatch custom event: %s", customEventName);
        this.dispatchEvent(
          new CustomEvent(customEventName, {
            detail: this,
            bubbles: true,
            composed: true
          })
        );
      }
    }
    static example(slotName = "") {
      return x`
      <nidoca-icon
        slot="${slotName}"
        style="padding-left:var(--space)"
        clickable
        icon="menu"
        title="Mein Icon"
      ></nidoca-icon>
    `;
    }
  };
  NidocaIcon.styles = i`
    :host {
      display: inline-block;
      font-size: var(--icon-size);
    }
    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;

      /* Support for all WebKit browsers. */
      -webkit-font-smoothing: antialiased;
      /* Support for Safari and Chrome. */
      text-rendering: optimizeLegibility;

      /* Support for Firefox. */
      -moz-osx-font-smoothing: grayscale;

      /* Support for IE. */
      font-feature-settings: 'liga';
    }

    .clickable {
      cursor: pointer;
    }

    .deactivated {
      filter: brightness(var(--app-lighten-2));
    }

    .clickable:hover {
      filter: brightness(var(--app-darken-2));
    }
  `;
  __decorateClass([
    n5({ type: String })
  ], NidocaIcon.prototype, "icon", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaIcon.prototype, "clickable", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaIcon.prototype, "deactivated", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaIcon.prototype, "title", 2);
  NidocaIcon = __decorateClass([
    e4("nidoca-icon")
  ], NidocaIcon);

  // src/nidoca-ripple.ts
  var NidocaRipple = class extends NidocaHtml {
    render() {
      return x`
      <div id="rippleContainer" anim="ripple" @click="${(event) => this.clicked(event)}">
        <slot></slot>
      </div>
    `;
    }
    clicked(event) {
      if (this.rippleContainerElement != void 0) {
        if (event instanceof TouchEvent) {
          event = event.touches ? event.touches[0] : event;
        }
        const r5 = this.rippleContainerElement.getBoundingClientRect(), d3 = Math.sqrt(Math.pow(r5.width, 2) + Math.pow(r5.height, 2)) * 2;
        this.rippleContainerElement.style.cssText = "--s: 0; --o: 1;";
        this.rippleContainerElement.offsetTop;
        if (event instanceof MouseEvent || event instanceof Touch) {
          this.rippleContainerElement.style.cssText = `--t: 1; --o: 0; --d: ${d3}; --x:${event.clientX - r5.left}; --y:${event.clientY - r5.top};`;
        }
      }
    }
  };
  NidocaRipple.styles = i`
    :host {
      display: inline-block;
    }

    :root {
      --ripple-background: var(--app-color-surface-background-dark);
      --ripple-opacity: 0.8;
      --ripple-duration: 600ms;
      --ripple-easing: linear;

      --y: 0;
      --x: 0;
      --d: 0;
      --t: 0;
      --s: 0;
      --o: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    [anim='ripple'] {
      position: relative;
      overflow: hidden;
    }

    [anim='ripple']:before {
      content: '';
      position: absolute;
      display: block;
      background: var(--ripple-background, white);
      border-radius: 50%;
      pointer-events: none;
      top: calc(var(--y) * 1px);
      left: calc(var(--x) * 1px);
      width: calc(var(--d) * 1px);
      height: calc(var(--d) * 1px);
      opacity: calc(var(--o, 1) * var(--ripple-opacity, 0.3));
      -webkit-transition: calc(var(--t, 0) * var(--ripple-duration, 600ms)) var(--ripple-easing, linear);
      transition: calc(var(--t, 0) * var(--ripple-duration, 600ms)) var(--ripple-easing, linear);
      -webkit-transform: translate(-50%, -50%) scale(var(--s, 1));
      transform: translate(-50%, -50%) scale(var(--s, 1));
      -webkit-transform-origin: center;
      transform-origin: center;
    }
  `;
  __decorateClass([
    i4("#rippleContainer")
  ], NidocaRipple.prototype, "rippleContainerElement", 2);
  NidocaRipple = __decorateClass([
    e4("nidoca-ripple")
  ], NidocaRipple);

  // src/nidoca-img.ts
  var NidocaImg = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.src = "";
      this.width = "auto";
      this.height = "auto";
      this.zoom = false;
    }
    render() {
      return this.src ? x`<img class="${this.zoom ? "zoom" : ""}" width="${this.width}" height="${this.height}" src="${this.src}" />` : x``;
    }
    static example(slotName = "") {
      return x`<nidoca-img width="64px" width="64px" slot="${slotName}" src="face.jpg"></nidoca-img>`;
    }
  };
  NidocaImg.styles = i`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }

    :host .zoom:hover {
      transform: scale(1.1, 1.1);
      transition: transform 0.5s;
    }
  `;
  __decorateClass([
    n5({ type: String })
  ], NidocaImg.prototype, "src", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaImg.prototype, "width", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaImg.prototype, "height", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaImg.prototype, "zoom", 2);
  NidocaImg = __decorateClass([
    e4("nidoca-img")
  ], NidocaImg);

  // src/nidoca-img-round.ts
  var NidocaImgRound = class extends NidocaImg {
    static example(slotName = "") {
      return x`<nidoca-img-round width="64px" width="64px" slot="${slotName}" src="face.jpg"></nidoca-img-round>`;
    }
  };
  NidocaImgRound.styles = i`
    :host {
      font-size: 0;
      display: inline-block;
      box-sizing: border-box;
    }
    :host img {
      object-position: center;
      object-fit: cover;
      padding: 0.25em;
      border-radius: 50%;
    }

    :host .zoom:hover {
      transform: scale(1.1, 1.1);
      transition: transform 0.5s;
    }
  `;
  NidocaImgRound = __decorateClass([
    e4("nidoca-img-round")
  ], NidocaImgRound);

  // src/nidoca-img-slider.ts
  var NidocaImgSlider = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "plain" /* plain */;
    }
    render() {
      return x`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <div class="container">${this.selected ? this.selected : x``}</div>

      <slot @slotchange="${(event) => this.slotChanged(event)}"></slot>
    `;
    }
    slotChanged(event) {
      const slotElement = event.target;
      if (slotElement == void 0) {
        return;
      }
      const elements = slotElement.assignedElements();
      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        if (element instanceof NidocaImg) {
          if (this.selected == void 0 && index == 0) {
            this.selected = element.cloneNode(true);
          }
          element.addEventListener("click", (event2) => {
            if (event2.target) {
              this.selected = event2.target.cloneNode(true);
            }
          });
          element.width = "148px";
          const classList = element.classList;
          if (!classList.contains("img")) {
            classList.add("img");
          }
        }
      }
    }
  };
  NidocaImgSlider.styles = i`
    :host,
    ::slotted(:host) {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      align-self: center;
    }

    slot,
    ::slotted(slot) {
      display: flex;
      flex-direction: row;
      overflow-x: scroll;
      width: 100%;
    }

    ::slotted(.img) {
      cursor: pointer;
    }

    .container {
      text-align: center;
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaImgSlider.prototype, "theme", 2);
  __decorateClass([
    t3()
  ], NidocaImgSlider.prototype, "selected", 2);
  NidocaImgSlider = __decorateClass([
    e4("nidoca-img-slider")
  ], NidocaImgSlider);

  // src/nidoca-movie.ts
  var NidocaMovie = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.src = "";
    }
    render() {
      return x`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `;
    }
  };
  NidocaMovie.styles = i``;
  __decorateClass([
    n5({ type: String })
  ], NidocaMovie.prototype, "src", 2);
  NidocaMovie = __decorateClass([
    e4("nidoca-movie")
  ], NidocaMovie);

  // src/nidoca-form-captcha.ts
  var NidocaFormCaptcha = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.label = "";
      this.placeholder = "";
      this.name = "";
      this.min = 1;
      this.max = 10;
      this.errorText = "";
      this.numberOne = 1;
      this.numberTwo = 1;
    }
    render() {
      return x`
      <nidoca-form-text
        theme="${l6(this.theme)}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${() => this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${"number" /* number */}"
        value=""
      ></nidoca-form-text>
    `;
    }
    updated(_changedProperties) {
      if (_changedProperties.has("min") || _changedProperties.has("max")) {
        this.generateNewNumber();
      }
      super.updated(_changedProperties);
    }
    generateNewNumber() {
      this.numberOne = Math.round(this.getRandomNumber(this.min, this.max));
      this.numberTwo = Math.round(this.getRandomNumber(this.min, this.max));
      this.requestUpdate();
    }
    getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }
    isValid() {
      if (this.inputfield != void 0) {
        return this.numberOne + this.numberTwo == Number(this.inputfield.getOutputData().value);
      } else {
        return false;
      }
    }
    validate() {
      const isValid = this.isValid();
      if (isValid && this.inputfield != void 0) {
        this.inputfield.errorText = "";
      } else if (this.inputfield != void 0) {
        this.inputfield.errorText = this.errorText;
      }
      return isValid;
    }
  };
  NidocaFormCaptcha.styles = i`
    :host {
      display: block;
      width: 100%;
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaFormCaptcha.prototype, "theme", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormCaptcha.prototype, "label", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormCaptcha.prototype, "placeholder", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormCaptcha.prototype, "name", 2);
  __decorateClass([
    n5({ type: Number })
  ], NidocaFormCaptcha.prototype, "min", 2);
  __decorateClass([
    n5({ type: Number })
  ], NidocaFormCaptcha.prototype, "max", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaFormCaptcha.prototype, "errorText", 2);
  __decorateClass([
    i4("#inputfield")
  ], NidocaFormCaptcha.prototype, "inputfield", 2);
  NidocaFormCaptcha = __decorateClass([
    e4("nidoca-form-captcha")
  ], NidocaFormCaptcha);

  // src/nidoca-link.ts
  var NidocaLink = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.text = "";
      this.href = "";
      this.targetType = "_self";
    }
    render() {
      return x`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `;
    }
  };
  NidocaLink.styles = i`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `;
  __decorateClass([
    n5({ type: String })
  ], NidocaLink.prototype, "text", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaLink.prototype, "href", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaLink.prototype, "targetType", 2);
  NidocaLink = __decorateClass([
    e4("nidoca-link")
  ], NidocaLink);

  // src/nidoca-list-item.ts
  var NidocaListItem = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "surface" /* surface */;
      this.primaryText = "";
      this.secondaryText = "";
      this.selected = false;
    }
    render() {
      return x`
      <style>
        .container {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
        .container:hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
        .container.selected {
          background-color: var(--app-color-${this.theme}-selected);
        }
      </style>
      <div @click="${() => this.switchSelected()}" class="container ${this.selected ? "selected" : ""}">
        <slot name="left" class="item left"></slot>
        <div class="containerTypography">
          ${this.primaryText ? x` <nidoca-text-body theme="${this.theme}" class="item">${this.primaryText} </nidoca-text-body>` : x``}
          <slot></slot>
          ${this.secondaryText ? x` <nidoca-text-caption theme="${this.theme}" class="item"
                >${this.secondaryText}
              </nidoca-text-caption>` : x``}
          <slot name="secondary"></slot>
        </div>
        <slot name="right" class="item right"></slot>
      </div>
    `;
    }
    switchSelected() {
      this.selected = Boolean(!this.selected);
      this.dispatchEvent(
        new CustomEvent("nidoca-event-list-item-clicked", {
          detail: this.selected,
          bubbles: true,
          composed: true
        })
      );
    }
    static example(slotName = "") {
      return x`<nidoca-list-item
      theme="primary"
      slot="${slotName}"
      primaryText="List Item"
      secondaryText="List Item Secondary Text"
    >
      ${NidocaImgRound.example("left")}
      <nidoca-icon slot="right" icon="menu"></nidoca-icon>
    </nidoca-list-item>`;
    }
  };
  NidocaListItem.styles = i`
    .container {
      display: grid;
      cursor: pointer;
      grid-template-columns: min-content 1fr min-content;
      padding: var(--space-2);
    }

    .item {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr;
      flex-basis: 100%;
    }

    .left {
      padding-right: var(--space-2);
    }

    .right {
      padding-left: var(--space-2);
    }

    .containerTypography {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-self: center;
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaListItem.prototype, "theme", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaListItem.prototype, "primaryText", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaListItem.prototype, "secondaryText", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaListItem.prototype, "selected", 2);
  NidocaListItem = __decorateClass([
    e4("nidoca-list-item")
  ], NidocaListItem);

  // src/nidoca-list-section.ts
  var NidocaListSection = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "surface" /* surface */;
      this.text = "";
    }
    render() {
      return x`
      <style>
        :host {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background-dark);
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }

        :host {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
      </style>
      <nidoca-text-body theme="${this.theme}" style="flex-basis:100%;" text="${this.text}">
        <slot></slot>
      </nidoca-text-body>
    `;
    }
    static example() {
      return x`<nidoca-list-section theme="primary">Section A</nidoca-list-section>`;
    }
  };
  NidocaListSection.styles = i`
  :host {
     display:block;
     padding-left: var(--space-2);  
     width:100%;
     box-sizing:border-box;
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaListSection.prototype, "theme", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaListSection.prototype, "text", 2);
  NidocaListSection = __decorateClass([
    e4("nidoca-list-section")
  ], NidocaListSection);

  // src/nidoca-list.ts
  var NidocaList = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "surface" /* surface */;
      this.multiselect = false;
    }
    updated(changedProperties) {
      super.updated(changedProperties);
      changedProperties.forEach((_oldValue, propName) => {
        if (propName == "theme") {
          this.getItems().forEach((listItemComponent) => {
            listItemComponent.theme = this.theme;
          });
        }
      });
    }
    render() {
      return x`
      <slot
        @nidoca-event-list-item-clicked="${(event) => {
        if (!this.multiselect) {
          this.unselectAll();
          const nidocaListItem = event.target;
          nidocaListItem.selected = true;
        }
      }}"
        id="slotElement"
      ></slot>
    `;
    }
    getItems() {
      const all = [];
      if (this.slotElement != null) {
        const slottedElements = this.slotElement.assignedElements();
        for (let index = 0; index < slottedElements.length; index++) {
          const element = slottedElements[index];
          if (element instanceof NidocaListItem) {
            all.push(element);
          }
        }
      }
      return all;
    }
    getSelectedItems() {
      const selection = [];
      if (this.slotElement != null) {
        const slottedElements = this.slotElement.assignedElements();
        for (let index = 0; index < slottedElements.length; index++) {
          const element = slottedElements[index];
          if (element instanceof NidocaListItem) {
            if (element.selected) {
              selection.push(element);
            }
          }
        }
      }
      return selection;
    }
    getSelectedIndexes() {
      const selection = [];
      if (this.slotElement != null) {
        const slottedElements = this.slotElement.assignedElements();
        let nliIndex = 0;
        for (let i7 = 0; i7 < slottedElements.length; i7++) {
          const element = slottedElements[i7];
          if (element instanceof NidocaListItem) {
            if (element.selected) {
              selection.push(nliIndex);
            }
            nliIndex++;
          }
        }
      }
      return selection;
    }
    selectAll() {
      this.getItems().forEach((item) => {
        item.selected = true;
      });
    }
    unselectAll() {
      this.getItems().forEach((item) => {
        item.selected = false;
      });
    }
    static example() {
      return x`<nidoca-list theme="primary">
      ${NidocaListSection.example()} ${NidocaListItem.example()} ${NidocaListItem.example()} ${NidocaListItem.example()}
    </nidoca-list>`;
    }
  };
  NidocaList.styles = i`
    :host {
      width: 100%;
    }
    #slotElement {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaList.prototype, "theme", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaList.prototype, "multiselect", 2);
  __decorateClass([
    i4("#slotElement")
  ], NidocaList.prototype, "slotElement", 2);
  NidocaList = __decorateClass([
    e4("nidoca-list")
  ], NidocaList);

  // src/nidoca-top-app-bar.ts
  var NidocaTopAppBar = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "primary" /* primary */;
      this.prominent = false;
    }
    render() {
      return x`
      <style>
        * {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>

      <div class="bar">
        <slot name="left" style="justify-content:flex-start;"></slot>
        <slot name="center" style="justify-content:center;"></slot>
        <slot name="right" style="justify-content:flex-end;"></slot>
      </div>
      ${this.prominent ? x` <slot class="prominent" name="prominent"></slot>` : x``}
    `;
    }
    static example(slotName = "") {
      return x`
      <nidoca-top-app-bar slot="${slotName}" style="min-height: 48px;" theme="primary" prominent>
        <nidoca-text-body slot="center">Toolbar</nidoca-text-body>
        <nidoca-icon slot="left" style="padding-left:var(--space)" clickable icon="menu"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="search"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="more_vert" clickable></nidoca-icon>
        <nidoca-search-bar theme="primary" slot="prominent" placeholder="Suche..."></nidoca-search-bar>
      </nidoca-top-app-bar>
    `;
    }
  };
  NidocaTopAppBar.styles = i`
    :host {
      display: block;
      top: 0;
      width: 100%;
      position: sticky;
    }

    .bar {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      align-content: space-around;
      width: 100%;
      height: var(--height-medium);
      box-sizing: border-box;
    }

    slot {
      display: flex;
      align-items: center;
      flex-basis: auto;
    }

    .prominent {
      display: block;
    }
  `;
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaTopAppBar.prototype, "theme", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaTopAppBar.prototype, "prominent", 2);
  NidocaTopAppBar = __decorateClass([
    e4("nidoca-top-app-bar")
  ], NidocaTopAppBar);

  // src/nidoca-table.ts
  var NidocaTable = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.headers = ["column 1", "column 2"];
      this.rows = [
        ["row 1", new NidocaIcon()],
        ["row 2", new NidocaIcon()]
      ];
      this.theme = "plain" /* plain */;
    }
    render() {
      return x`
      <style>
        td,
        th {
          border-bottom: var(--border-width-min) solid var(--app-color-${this.theme}-border);
          border-left: var(--border-width-min) solid var(--app-color-${this.theme}-border);
        }

        tr > td:last-of-type,
        th:last-of-type {
          border-right: var(--border-width-min) solid var(--app-color-${this.theme}-border);
        }

        th {
          border-top: var(--border-width-min) solid var(--app-color-${this.theme}-border);
          background-color: var(--app-color-${this.theme}-background);
          color: var(--app-color-text-${this.theme});
        }
      </style>
      <div>
        <table>
          <thead>
            ${i6(
        [this.headers],
        () => x` ${c4(this.headers, (header) => x` <th colspan="1" rowspan="1">${header}</th> `)} `
      )}
          </thead>
          <tbody>
            ${i6(
        [this.rows],
        () => x`
                  ${c4(
          this.rows,
          (row) => x`
                        <tr>
                          ${c4(row, (column) => x` <td colspan="1" rowspan="1">${column}</td> `)}
                        </tr>
                      `
        )}
                `
      )}
          </tbody>
        </table>
      </div>
    `;
    }
  };
  NidocaTable.styles = i`
    :host {
      display: block;
      width: 100%;
    }

    table,
    ::slotted(table) {
      border-spacing: 0;
      width: 100%;
    }

    td,
    th {
      vertical-align: center;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      height: var(--height-medium);
      box-sizing: border-box;
      text-align: left;
    }
  `;
  __decorateClass([
    n5({ type: Array })
  ], NidocaTable.prototype, "headers", 2);
  __decorateClass([
    n5({ type: Array })
  ], NidocaTable.prototype, "rows", 2);
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaTable.prototype, "theme", 2);
  NidocaTable = __decorateClass([
    e4("nidoca-table")
  ], NidocaTable);

  // src/nidoca-tab-content.ts
  var NidocaTabContent = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.selected = false;
    }
    render() {
      return this.selected ? x` <slot></slot>` : x``;
    }
  };
  NidocaTabContent.styles = i`
    :host,
    slot {
      display: block;
    }
  `;
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaTabContent.prototype, "selected", 2);
  NidocaTabContent = __decorateClass([
    e4("nidoca-tab-content")
  ], NidocaTabContent);

  // src/nidoca-tab.ts
  var NidocaTab = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.selected = false;
      this.text = "";
      this.theme = "surface" /* surface */;
    }
    render() {
      return x`
      <style>
        .container {
          color: var(--app-color-text-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-background-light);
        }
        .selected {
          border-color: var(--app-color-${this.theme}-selected);
        }
        :hover {
          border-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div class="container ${this.selected ? "selected" : ""}" @click="${() => this.tabClicked()}">
        ${this.text ? x` <nidoca-text text="${this.text}"></nidoca-text> ` : x``}
        <slot></slot>
      </div>
    `;
    }
    tabClicked() {
      console.log("tab clicked.");
      this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked", { detail: this, bubbles: true, composed: true }));
    }
  };
  NidocaTab.styles = i`
    :host {
      display: block;
      margin-right: var(--space);
      overflow: hidden;
    }

    .container {
      box-sizing: border-box;
      cursor: pointer;
      border-width: var(--border-width-max);
      border-bottom-style: solid;
    }

    slot {
      display: block;
    }
  `;
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaTab.prototype, "selected", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaTab.prototype, "text", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaTab.prototype, "theme", 2);
  NidocaTab = __decorateClass([
    e4("nidoca-tab")
  ], NidocaTab);

  // src/nidoca-tabs.ts
  var NidocaTabs = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "surface" /* surface */;
      this.tabIndex = 0;
    }
    render() {
      return x`
      <div class="container" @nidoca-event-tab-clicked="${(event) => this.tabClicked(event)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `;
    }
    firstUpdated(_changedProperties) {
      super.firstUpdated(_changedProperties);
      this.tabIndexChanged();
    }
    update(changedProperties) {
      super.update(changedProperties);
      if (changedProperties.get("tabIndex") != void 0) {
        this.tabIndexChanged();
      }
    }
    tabIndexChanged() {
      this.updateNidocaTabElements();
      this.updateNidocaTabContentElemnts();
    }
    updateNidocaTabElements() {
      if (this.tabSlot != null) {
        const assignedElements = this.tabSlot.assignedElements();
        const length = assignedElements.length;
        const widthPerTab = 100 / length;
        const selectedElement = assignedElements[this.tabIndex];
        for (let index = 0; index < assignedElements.length; index++) {
          const element = assignedElements[index];
          if (element instanceof NidocaTab) {
            element.theme = this.theme;
            element.style.width = String(widthPerTab).concat("%");
            if (element == selectedElement) {
              element.selected = true;
              element.classList.add("SELECTED");
            } else {
              element.selected = false;
              element.classList.remove("SELECTED");
            }
          }
        }
      }
    }
    updateNidocaTabContentElemnts() {
      let tabContentIndex = 0;
      if (this.tabContentSlot != null) {
        const assignedElements = this.tabContentSlot.assignedElements();
        for (let index = 0; index < assignedElements.length; index++) {
          const tabContentElement = assignedElements[index];
          if (tabContentElement instanceof NidocaTabContent) {
            if (this.tabIndex == tabContentIndex) {
              tabContentElement.selected = true;
            } else {
              tabContentElement.selected = false;
            }
            tabContentIndex++;
          }
        }
      }
    }
    tabClicked(event) {
      const clickedTab = event.detail;
      this.changeTabIndex(clickedTab);
    }
    changeTabIndex(newTab) {
      if (newTab.selected) {
        return;
      }
      if (this.tabSlot != null) {
        const assignedElements = this.tabSlot.assignedElements();
        for (let index = 0; index < assignedElements.length; index++) {
          const element = assignedElements[index];
          if (element instanceof NidocaTab) {
            if (element == newTab) {
              this.tabIndex = index;
              break;
            }
          }
        }
      }
    }
    static example(slotName = "") {
      return x`
      <nidoca-tabs theme="surface" slot="${slotName}" tabIndex="0">
        <nidoca-tab slot="tab"><nidoca-text>Tab 1</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 2</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 3</nidoca-text></nidoca-tab>
        <nidoca-tab-content slot="tabContent"> ${NidocaArticle.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${NidocaArticle.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${NidocaArticle.example()} </nidoca-tab-content>
      </nidoca-tabs>
    `;
    }
  };
  NidocaTabs.styles = i`
    :host {
      display: block;
      width: 100%;
    }
    slot {
      display: block;
    }

    .container {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: 100%;
    }

    #tabSlot {
      display: flex;
      margin: 0px auto;
      text-align: center;
      width: 100% !important;
      align-items: end;
      justify-content: center;
    }
  `;
  __decorateClass([
    i4("#tabSlot")
  ], NidocaTabs.prototype, "tabSlot", 2);
  __decorateClass([
    i4("#tabContentSlot")
  ], NidocaTabs.prototype, "tabContentSlot", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaTabs.prototype, "theme", 2);
  __decorateClass([
    n5({ type: Number })
  ], NidocaTabs.prototype, "tabIndex", 2);
  NidocaTabs = __decorateClass([
    e4("nidoca-tabs")
  ], NidocaTabs);

  // src/nidoca-template.ts
  var NidocaTemplate = class extends NidocaHtml {
    constructor() {
      super();
      this.hideLeft = true;
      this.prominent = false;
      document.getElementsByTagName("html")[0].setAttribute("oncontextmenu", "return false");
      this.addEventListener("click", (event) => {
        if (!this.hideLeft && this.leftElement) {
          console.log("close");
          const rect = this.leftElement.getBoundingClientRect();
          this.hideLeft = 641 > window.innerWidth && 0 <= event.x - rect.width;
        }
      });
    }
    updated(_changedProperties) {
      super.updated(_changedProperties);
    }
    render() {
      return x`
      <slot
        id="left"
        @nidoca-event-menu-item-clicked="${() => {
        if (641 > window.innerWidth) {
          this.hideLeft = true;
        }
      }}"
        class="${this.hideLeft ? "hideLeft" : ""}"
        name="left"
      >
      </slot>

      <div class="right">
        <nidoca-top-app-bar theme="primary" id="header" .prominent="${this.prominent}">
          <nidoca-icon
            slot="left"
            style="padding-left:var(--space-2);"
            icon="menu"
            .clickable="${true}"
            @nidoca-event-icon-clicked="${() => {
        this.hideLeft = !this.hideLeft;
      }}"
          ></nidoca-icon>

          <span slot="left">
            <slot class="slotHeader" name="topLeft"></slot>
          </span>
          <span slot="center">
            <slot class="slotHeader" name="topCenter"></slot>
          </span>
          <span slot="right">
            <slot class="slotHeader" name="topRight"></slot>
          </span>
          <span style="width: 100%;" slot="prominent">
            <slot class="slotHeader" name="prominent"></slot>
          </span>
        </nidoca-top-app-bar>
        <slot id="content" name="content"></slot>
      </div>
    `;
    }
  };
  NidocaTemplate.styles = i`
    :host {
      display: flex;
      flex-direction: row;
      width: 100vw;
      height: 100vh;
    }

    #left {
      display: block;
      color: var(--app-color-text-primary);
      background-color: var(--app-color-primary-background);
      min-width: 280px;
      min-height: 100%;
      max-height: 100%;
    }

    #left.hideLeft {
      transition: all 0.35s ease;
      display: none;
    }

    @media screen and (max-width: 640px) {
      #left {
        position: fixed;
        z-index: 1;
      }
    }

    .right {
      width: 100%;
      height: 100vh;
      overflow: scroll;
    }
  `;
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaTemplate.prototype, "hideLeft", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaTemplate.prototype, "prominent", 2);
  __decorateClass([
    i4("#header")
  ], NidocaTemplate.prototype, "headerElement", 2);
  __decorateClass([
    i4("#left")
  ], NidocaTemplate.prototype, "leftElement", 2);
  __decorateClass([
    i4("#content")
  ], NidocaTemplate.prototype, "contentElement", 2);
  NidocaTemplate = __decorateClass([
    e4("nidoca-template")
  ], NidocaTemplate);

  // src/nidoca-video.ts
  var NidocaVideo = class extends NidocaHtml {
    firstUpdated(_changedProperties) {
      super.firstUpdated(_changedProperties);
      navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then((stream) => {
        if (this.videoElement) {
          this.videoElement.srcObject = stream;
        }
      });
    }
    render() {
      return x`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${() => this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `;
    }
    makeFoto() {
      if (this.canvasElement && this.videoElement) {
        const context = this.canvasElement.getContext("2d");
        if (context) {
          context.drawImage(this.videoElement, 0, 0, this.canvasElement.width, this.canvasElement.height);
          const image_data_url = this.canvasElement.toDataURL("image/jpeg");
          console.log(image_data_url);
        }
      }
    }
  };
  NidocaVideo.styles = i``;
  __decorateClass([
    i4("#video")
  ], NidocaVideo.prototype, "videoElement", 2);
  __decorateClass([
    i4("#canvas")
  ], NidocaVideo.prototype, "canvasElement", 2);
  __decorateClass([
    i4("#click-photo")
  ], NidocaVideo.prototype, "buttonElement", 2);
  NidocaVideo = __decorateClass([
    e4("nidoca-video")
  ], NidocaVideo);

  // src/nidoca-svg-2-webp.ts
  var NidocaSvg2Webp = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      //src: string = 'https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg';
      this.src = "";
      this.canvasElements = [];
      this.storeCanvasElements = [];
    }
    render() {
      return x`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map((canvas) => {
        return x`${canvas}`;
      })}
    `;
    }
    updated(changedProperties) {
      super.updated(changedProperties);
      changedProperties.forEach((oldValue, propName) => {
        console.debug(`${this.tagName} : property ${String(propName)} changed. oldValue: ${oldValue}`);
        if (propName == "src") {
          this.convert();
          const playstoreImages = [
            ["App-Symbol", 512, 512],
            ["Vorstellungsgrafik", 1024, 500],
            ["screenshoot_dummy", 1920, 1080]
          ];
        }
      });
    }
    convert() {
      if (this.img) {
        console.log("GO");
        this.img.onload = () => {
          [
            [12, 12],
            [16, 16],
            [22, 22],
            [24, 24],
            [32, 32],
            [36, 36],
            [48, 48],
            [64, 64],
            [72, 72],
            [96, 96],
            [128, 128],
            [144, 144],
            [192, 192]
          ].forEach((size) => {
            const canvas = document.createElement("canvas");
            canvas.width = size[0];
            canvas.height = size[1];
            const context = canvas.getContext("2d");
            if (context) {
              if (this.img) {
                this.img.crossOrigin = "anonymous";
                context.drawImage(this.img, 0, 0, size[0], size[1]);
                canvas.toBlob((blob) => {
                  if (blob) {
                  }
                }, "image/webp");
              }
            }
            this.canvasElements.push(canvas);
          });
          this.requestUpdate();
        };
      }
    }
  };
  NidocaSvg2Webp.styles = i``;
  __decorateClass([
    n5({ type: String })
  ], NidocaSvg2Webp.prototype, "src", 2);
  __decorateClass([
    i4("#img")
  ], NidocaSvg2Webp.prototype, "img", 2);
  NidocaSvg2Webp = __decorateClass([
    e4("nidoca-svg-2-webp")
  ], NidocaSvg2Webp);

  // src/nidoca-text.ts
  var NidocaText = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "surface" /* surface */;
      this.text = "";
    }
    render() {
      return x`<style>
        slot {
          color: var(--app-color-text-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`;
    }
    static example(slotName = "") {
      return x`
      <div slot="${slotName}">
        <nidoca-text-h1>nidoca-text-h1</nidoca-text-h1>
        <nidoca-text-h2>nidoca-text-h2</nidoca-text-h2>
        <nidoca-text-h3>nidoca-text-h3</nidoca-text-h3>
        <nidoca-text-h4>nidoca-text-h4</nidoca-text-h4>
        <nidoca-text-h5>nidoca-text-h5</nidoca-text-h5>
        <nidoca-text-h6>nidoca-text-h6</nidoca-text-h6>
        <nidoca-text>nidoca-text</nidoca-text>
        <nidoca-text-body>nidoca-text-body</nidoca-text-body>
        <nidoca-text-overline>nidoca-text-overline</nidoca-text-overline>
        <nidoca-text-subtitle>nidoca-text-subtitle</nidoca-text-subtitle>
        <nidoca-text-caption>nidoca-text-caption</nidoca-text-caption>
        <nidoca-text-button>nidoca-text-button</nidoca-text-button>
        <nidoca-text-error>nidoca-text-error</nidoca-text-error>
        <nidoca-text-warning>nidoca-text-warning</nidoca-text-warning>
        <nidoca-text-info>nidoca-text-info</nidoca-text-info>
        <nidoca-text-success>nidoca-text-success</nidoca-text-success>
      </div>
    `;
    }
  };
  NidocaText.styles = i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 400;
      font-size: 100%;
    }

    slot {
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaText.prototype, "theme", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaText.prototype, "text", 2);
  NidocaText = __decorateClass([
    e4("nidoca-text")
  ], NidocaText);

  // src/nidoca-text-body.ts
  var NidocaTextBody = class extends NidocaText {
    render() {
      return x` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`;
    }
  };
  NidocaTextBody.styles = i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 400;
      font-size: 105%;
    }
  `;
  NidocaTextBody = __decorateClass([
    e4("nidoca-text-body")
  ], NidocaTextBody);

  // src/nidoca-text-button.ts
  var NidocaTextButton = class extends NidocaText {
    render() {
      return x`${super.render()}`;
    }
  };
  NidocaTextButton.styles = i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      text-transform: uppercase;
      line-height: 1.5em;
      filter: brightness(var(--app-lighten-3));
    }
  `;
  NidocaTextButton = __decorateClass([
    e4("nidoca-text-button")
  ], NidocaTextButton);

  // src/nidoca-text-overline.ts
  var NidocaTextOverline = class extends NidocaText {
  };
  NidocaTextOverline.styles = i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1em;
      font-weight: 400;
      text-transform: uppercase;
    }
  `;
  NidocaTextOverline = __decorateClass([
    e4("nidoca-text-overline")
  ], NidocaTextOverline);

  // src/nidoca-text-subtitle.ts
  var NidocaTextSubtitle = class extends NidocaText {
    render() {
      return x` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`;
    }
  };
  NidocaTextSubtitle.styles = i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 600;
      font-size: 105%;
    }
  `;
  NidocaTextSubtitle = __decorateClass([
    e4("nidoca-text-subtitle")
  ], NidocaTextSubtitle);

  // src/nidoca-text-caption.ts
  var NidocaTextCaption = class extends NidocaText {
    render() {
      return x`<style>
        slot {
          color: var(--app-color-subtext-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`;
    }
  };
  NidocaTextCaption.styles = i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.25em;
    }
  `;
  NidocaTextCaption = __decorateClass([
    e4("nidoca-text-caption")
  ], NidocaTextCaption);

  // src/nidoca-text-error.ts
  var NidocaTextError = class extends NidocaTextCaption {
    render() {
      return x`<style>
        slot {
          color: var(--app-color-error-background);
        }
      </style>
      <slot>${this.text}</slot>`;
    }
  };
  NidocaTextError = __decorateClass([
    e4("nidoca-text-error")
  ], NidocaTextError);

  // src/nidoca-text-success.ts
  var NidocaTextSuccess = class extends NidocaTextCaption {
    render() {
      return x`<style>
        slot {
          color: var(--app-color-success-background);
        }
      </style>
      <slot>${this.text}</slot>`;
    }
  };
  NidocaTextSuccess = __decorateClass([
    e4("nidoca-text-success")
  ], NidocaTextSuccess);

  // src/nidoca-text-warning.ts
  var NidocaTextWarning = class extends NidocaTextCaption {
    render() {
      return x`<style>
        slot {
          color: var(--app-color-warning-background);
        }
      </style>
      <slot>${this.text}</slot>`;
    }
  };
  NidocaTextWarning = __decorateClass([
    e4("nidoca-text-warning")
  ], NidocaTextWarning);

  // src/nidoca-text-info.ts
  var NidocaTextInfo = class extends NidocaTextCaption {
    render() {
      return x`<style>
        slot {
          color: var(--app-color-info-background);
        }
      </style>
      <slot>${this.text}</slot>`;
    }
  };
  NidocaTextInfo = __decorateClass([
    e4("nidoca-text-info")
  ], NidocaTextInfo);

  // src/nidoca-text-h1.ts
  var NidocaTextH1 = class extends NidocaText {
  };
  NidocaTextH1.styles = i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1.1em;
    }
  `;
  NidocaTextH1 = __decorateClass([
    e4("nidoca-text-h1")
  ], NidocaTextH1);

  // src/nidoca-text-h2.ts
  var NidocaTextH2 = class extends NidocaText {
  };
  NidocaTextH2.styles = i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.2em;
    }
  `;
  NidocaTextH2 = __decorateClass([
    e4("nidoca-text-h2")
  ], NidocaTextH2);

  // src/nidoca-text-h3.ts
  var NidocaTextH3 = class extends NidocaText {
  };
  NidocaTextH3.styles = i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `;
  NidocaTextH3 = __decorateClass([
    e4("nidoca-text-h3")
  ], NidocaTextH3);

  // src/nidoca-text-h4.ts
  var NidocaTextH4 = class extends NidocaText {
  };
  NidocaTextH4.styles = i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 130%;
      line-height: 1.5em;
    }
  `;
  NidocaTextH4 = __decorateClass([
    e4("nidoca-text-h4")
  ], NidocaTextH4);

  // src/nidoca-text-h5.ts
  var NidocaTextH5 = class extends NidocaText {
  };
  NidocaTextH5.styles = i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 120%;
      line-height: 1.5em;
    }
  `;
  NidocaTextH5 = __decorateClass([
    e4("nidoca-text-h5")
  ], NidocaTextH5);

  // src/nidoca-text-h6.ts
  var NidocaTextH6 = class extends NidocaText {
  };
  NidocaTextH6.styles = i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 110%;
      line-height: 1.5em;
    }
  `;
  NidocaTextH6 = __decorateClass([
    e4("nidoca-text-h6")
  ], NidocaTextH6);

  // src/nidoca-search-bar.ts
  var NidocaSearchBar = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.value = "";
      this.placeholder = "";
      this.disabled = false;
      this.theme = "surface" /* surface */;
    }
    render() {
      return x`
      <style>
        .container,
        input {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }

        .container:focus-within,
        input:focus-within {
          border-color: var(--app-color-${this.theme}-selected);
          background-color: var(--app-color-${this.theme}-selected);
        }
      </style>
      <div class="container border">
        <nidoca-icon style="padding-right:var(--space);padding-left:var(--space);" icon="search"></nidoca-icon>
        <input
          id="inputElement"
          type="text"
          value="${this.value}"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          @input="${() => this.valueChanged()}"
        />
        <nidoca-icon
          style="padding-right:var(--space);padding-left:var(--space);"
          icon="close"
          @click="${() => this.clearValue()}"
        ></nidoca-icon>
      </div>
    `;
    }
    clearValue() {
      this.value = "";
    }
    async valueChanged() {
      const eventName = "nidoca-search-bar-event-value-changed";
      const customEvent = new CustomEvent(eventName, {
        detail: this.inputElement?.value,
        bubbles: true,
        composed: true
      });
      console.debug("dispatch custom event type: %s, detail: %s", customEvent.type, JSON.stringify(customEvent.detail));
      this.dispatchEvent(customEvent);
    }
    static example(slotName = "") {
      return x`<nidoca-search-bar slot="${slotName}" theme="primary" placeholder="Suche..."></nidoca-search-bar>`;
    }
  };
  NidocaSearchBar.styles = i`
    :host {
      width: 100%;
      display: block;
    }

    .container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      padding: var(--space);
      height: var(--height-medium);
      box-sizing: border-box;
    }

    input {
      font: inherit;
      width: 100%;
      border: none;
      padding: 0;
      line-height: var(--height-min);
    }

    input:focus {
      outline: none;
      box-shadow: none;
    }
  `;
  __decorateClass([
    n5({ type: String })
  ], NidocaSearchBar.prototype, "value", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaSearchBar.prototype, "placeholder", 2);
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaSearchBar.prototype, "disabled", 2);
  __decorateClass([
    i4("#inputElement")
  ], NidocaSearchBar.prototype, "inputElement", 2);
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaSearchBar.prototype, "theme", 2);
  NidocaSearchBar = __decorateClass([
    e4("nidoca-search-bar")
  ], NidocaSearchBar);

  // src/nidoca-transition.ts
  var NidocaTransitionType = class {
    static {
      this.CENTER = "CENTER";
    }
    static {
      this.LEFT = "LEFT";
    }
    static {
      this.RIGHT = "RIGHT";
    }
    static {
      this.TOP = "TOP";
    }
    static {
      this.BOTTOM = "BOTTOM";
    }
    static {
      this.SLIDE_CENTER = "SLIDE_CENTER";
    }
    static {
      this.SLIDE_LEFT = "SLIDE_LEFT";
    }
    static {
      this.SLIDE_RIGHT = "SLIDE_RIGHT";
    }
    static {
      this.SLIDE_TOP = "SLIDE_TOP";
    }
    static {
      this.SLIDE_BOTTOM = "SLIDE_BOTTOM";
    }
  };
  var NidocaTransition = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.transitionType = NidocaTransitionType.CENTER;
      this.duration = 0.5;
    }
    render() {
      return x` <div class="${l6(this.transitionType)}"><slot></slot></div> `;
    }
  };
  // seconds
  NidocaTransition.styles = i`
    /* Declaration of keyframes */

    @-webkit-keyframes fadeInLeft {
      from {
        opacity: 0;
        -webkit-transform: translatex(-10px);
        -moz-transform: translatex(-10px);
        -o-transform: translatex(-10px);
        transform: translatex(-10px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }
    @-moz-keyframes fadeInLeft {
      from {
        opacity: 0;
        -webkit-transform: translatex(-10px);
        -moz-transform: translatex(-10px);
        -o-transform: translatex(-10px);
        transform: translatex(-10px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }
    @keyframes fadeInLeft {
      from {
        opacity: 0;
        -webkit-transform: translatex(-100px);
        -moz-transform: translatex(-100px);
        -o-transform: translatex(-100px);
        transform: translatex(-100px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-moz-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-o-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-ms-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeInRight {
      from {
        opacity: 0;
        -webkit-transform: translatex(20px);
        -moz-transform: translatex(20px);
        -o-transform: translatex(20px);
        transform: translatex(20px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }
    @-moz-keyframes fadeInRight {
      from {
        opacity: 0;
        -webkit-transform: translatex(20px);
        -moz-transform: translatex(20px);
        -o-transform: translatex(20px);
        transform: translatex(20px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }
    @keyframes fadeInRight {
      from {
        opacity: 0;
        -webkit-transform: translatex(200px);
        -moz-transform: translatex(200px);
        -o-transform: translatex(200px);
        transform: translatex(200px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }

    @keyframes fadeInUp {
      from {
        transform: translate3d(0, 40px, 0);
      }

      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeInUp {
      from {
        transform: translate3d(0, 40px, 0);
      }

      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @keyframes fadeInBottom {
      from {
        transform: translate3d(0, -40px, 0);
      }

      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeInBottom {
      from {
        transform: translate3d(0, -40px, 0);
      }

      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @-webkit-keyframes slideInLeft {
      0% {
        opacity: 0;

        -webkit-transform: translateX(-400px);
      }
      60% {
        -webkit-transform: translateX(30px);
      }
      80% {
        -webkit-transform: translateX(-10px);
      }
      100% {
        opacity: 1;

        -webkit-transform: translateX(0);
      }
    }

    @keyframes slideInLeft {
      0% {
        opacity: 0;

        transform: translateX(-400px);
      }
      60% {
        transform: translateX(30px);
      }
      80% {
        transform: translateX(-10px);
      }
      100% {
        opacity: 1;

        transform: translateX(0);
      }
    }

    @-webkit-keyframes slideInRight {
      0% {
        opacity: 0;

        -webkit-transform: translateX(400px);
      }
      60% {
        -webkit-transform: translateX(-30px);
      }
      80% {
        -webkit-transform: translateX(10px);
      }
      100% {
        opacity: 1;

        -webkit-transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      0% {
        opacity: 0;

        transform: translateX(400px);
      }
      60% {
        transform: translateX(-30px);
      }
      80% {
        transform: translateX(10px);
      }
      100% {
        opacity: 1;

        transform: translateX(0);
      }
    }

    @-webkit-keyframes slideInCenter {
      0% {
        opacity: 0;
        -webkit-transform: scale(0.3);
      }

      50% {
        opacity: 1;
        -webkit-transform: scale(1.05);
      }

      70% {
        -webkit-transform: scale(0.9);
      }

      100% {
        -webkit-transform: scale(1);
      }
    }

    @keyframes slideInCenter {
      0% {
        opacity: 0;
        transform: scale(0.3);
      }

      50% {
        opacity: 1;
        transform: scale(1.05);
      }

      70% {
        transform: scale(0.9);
      }

      100% {
        transform: scale(1);
      }
    }

    @-webkit-keyframes slideInTop {
      0% {
        opacity: 0;

        -webkit-transform: translateY(400px);
      }
      60% {
        -webkit-transform: translateY(-30px);
      }
      80% {
        -webkit-transform: translateY(10px);
      }
      100% {
        opacity: 1;

        -webkit-transform: translateY(0);
      }
    }

    @keyframes slideInTop {
      0% {
        opacity: 0;

        transform: translateY(400px);
      }
      60% {
        transform: translateY(-30px);
      }
      80% {
        transform: translateY(10px);
      }
      100% {
        opacity: 1;

        transform: translateY(0);
      }
    }

    @-webkit-keyframes slideInBottom {
      0% {
        opacity: 0;

        -webkit-transform: translateY(-400px);
      }
      60% {
        -webkit-transform: translateY(30px);
      }
      80% {
        -webkit-transform: translateY(-10px);
      }
      100% {
        opacity: 1;

        -webkit-transform: translateY(0);
      }
    }

    @keyframes slideInBottom {
      0% {
        opacity: 0;

        transform: translateY(-400px);
      }
      60% {
        transform: translateY(30px);
      }
      80% {
        transform: translateY(-10px);
      }
      100% {
        opacity: 1;

        transform: translateY(0);
      }
    }

    /*  */
    .CENTER {
      animation: fadeIn ease 2s;
      -webkit-animation: fadeIn ease 2s;
      -moz-animation: fadeIn ease 2s;
      -o-animation: fadeIn ease 2s;
      -ms-animation: fadeIn ease 2s;
    }

    .LEFT {
      -webkit-animation-name: fadeInLeft;
      -moz-animation-name: fadeInLeft;
      -o-animation-name: fadeInLeft;
      animation-name: fadeInLeft;
      -webkit-animation-fill-mode: both;
      -moz-animation-fill-mode: both;
      -o-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -moz-animation-duration: 1s;
      -o-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-delay: 1s;
      -moz-animation-delay: 1s;
      -o-animation-duration: 1s;
      animation-delay: 1s;
    }
    .RIGHT {
      -webkit-animation-name: fadeInRight;
      -moz-animation-name: fadeInRight;
      -o-animation-name: fadeInRight;
      animation-name: fadeInRight;
      -webkit-animation-fill-mode: both;
      -moz-animation-fill-mode: both;
      -o-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -moz-animation-duration: 1s;
      -o-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-delay: 1s;
      -moz-animation-delay: 1s;
      -o-animation-duration: 1s;
      animation-delay: 1s;
    }

    .TOP {
      opacity: 0;
      animation-name: fadeInUp;
      -webkit-animation-name: fadeInUp;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }
    .BOTTOM {
      opacity: 0;
      animation-name: fadeInBottom;
      -webkit-animation-name: fadeInBottom;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_LEFT {
      -webkit-animation-name: slideInLeft;
      animation-name: slideInLeft;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_RIGHT {
      -webkit-animation-name: slideInRight;
      animation-name: slideInRight;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_CENTER {
      -webkit-animation-name: slideInCenter;
      animation-name: slideInCenter;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_TOP {
      -webkit-animation-name: slideInTop;
      animation-name: slideInTop;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_BOTTOM {
      -webkit-animation-name: slideInBottom;
      animation-name: slideInBottom;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }
  `;
  __decorateClass([
    n5({ type: String })
  ], NidocaTransition.prototype, "transitionType", 2);
  __decorateClass([
    n5({ type: Number })
  ], NidocaTransition.prototype, "duration", 2);
  NidocaTransition = __decorateClass([
    e4("nidoca-transition")
  ], NidocaTransition);

  // src/nidoca-dialog.ts
  var NidocaDialog = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.show = false;
    }
    render() {
      return this.show ? x`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${NidocaTransitionType.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        ` : x``;
    }
  };
  NidocaDialog.styles = i`
    .fullScreen {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .opacScreen {
      z-index: 20;
      opacity: 0.85;
      background-color: var(--app-color-surface-background);
    }

    .wrapperOutside {
      display: table;
      z-index: 30;
    }

    .wrapperInside {
      display: table-cell;
      vertical-align: middle;
    }

    .dialogContainer {
      width: max-content;
      height: auto;

      padding: 0;
      margin: 0 auto;
    }
  `;
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaDialog.prototype, "show", 2);
  NidocaDialog = __decorateClass([
    e4("nidoca-dialog")
  ], NidocaDialog);

  // src/nidoca-dialog-decision.ts
  var NidocaDialogDecision = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.show = false;
      this.title = "Ja oder Nein ?";
      this.description = "Entscheide dich";
      this.labelButtonYes = "Ja";
      this.labelButtonNo = "Nein";
    }
    render() {
      return x`<nidoca-dialog .show="${this.show}">
      <nidoca-box style="width:300px;">
        <nidoca-text-h2 style="padding-bottom:var(--space-2);">${this.title}</nidoca-text-h2>
        <nidoca-text style="padding-bottom:var(--space-2);">${this.description} </nidoca-text>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${"text" /* text */}"
          @click="${() => {
        this.dispatchEvent(
          new CustomEvent("nidoca-dialog-decision-yes", {
            detail: this,
            bubbles: true,
            composed: true
          })
        );
      }}"
          >${this.labelButtonYes}
        </nidoca-button>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${"text" /* text */}"
          @click="${() => {
        this.dispatchEvent(
          new CustomEvent("nidoca-dialog-decision-no", {
            detail: this,
            bubbles: true,
            composed: true
          })
        );
      }}"
          >${this.labelButtonNo}
        </nidoca-button>
      </nidoca-box>
    </nidoca-dialog>`;
    }
  };
  NidocaDialogDecision.styles = i``;
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaDialogDecision.prototype, "show", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaDialogDecision.prototype, "title", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaDialogDecision.prototype, "description", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaDialogDecision.prototype, "labelButtonYes", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaDialogDecision.prototype, "labelButtonNo", 2);
  NidocaDialogDecision = __decorateClass([
    e4("nidoca-dialog-decision")
  ], NidocaDialogDecision);

  // src/nidoca-infobox.ts
  var NidocaInfobox = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.icon = "";
    }
    render() {
      return x`
      <nidoca-icon-extended class="icon" icon="${this.icon}"></nidoca-icon-extended>
      <nidoca-card class="card">
        <slot></slot>
      </nidoca-card>
    `;
    }
    static example(slotName = "", theme = "surface") {
      return x`
      <nidoca-infobox slot="${slotName}" icon="handshake" style="width:250px; height:250px;">
        <nidoca-text-h5 theme="${theme}">Community</nidoca-text-h5>
        <nidoca-text-body theme="${theme}"
          >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere Community
          stärken.</nidoca-text-body
        >
      </nidoca-infobox>
    `;
    }
  };
  NidocaInfobox.styles = i`
    :host {
      display: block;
      text-align: center;
    }
    slot {
      display: block;
      padding-top: var(--icon-size);
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-bottom: var(--space-2);
    }

    .card {
      display: block;
      margin-top: calc(((var(--icon-size) / 2) +var(--space)) * -1);
    }
  `;
  __decorateClass([
    n5({ type: String })
  ], NidocaInfobox.prototype, "icon", 2);
  NidocaInfobox = __decorateClass([
    e4("nidoca-infobox")
  ], NidocaInfobox);

  // src/nidoca-avatar.ts
  var NidocaAvatar = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "surface" /* surface */;
      this.src = "";
      this.title = "";
      this.subtitle = "";
    }
    render() {
      return x`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.src}"></nidoca-img-round>
                <div style="padding: var(--space);">
                <nidoca-text-body style="text-align:center;" theme="${this.theme}">${this.title}</nidoca-text-body>
                <nidoca-text-caption style="text-align:center;" theme="${this.theme}">${this.subtitle}</nidoca-text-caption>

  </div>
            </div>
            </div>`;
    }
    static example(slotName = "") {
      return x`<nidoca-avatar
      width="64px"
      width="64px"
      slot="${slotName}"
      title="Dominik Bruhn"
      subtitle="Softwareentwickler"
      src="face.jpg"
      >Dominik Bruhn</nidoca-avatar
    >`;
    }
  };
  NidocaAvatar.styles = i`
    :host {
      display: block;
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaAvatar.prototype, "theme", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaAvatar.prototype, "src", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaAvatar.prototype, "title", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaAvatar.prototype, "subtitle", 2);
  NidocaAvatar = __decorateClass([
    e4("nidoca-avatar")
  ], NidocaAvatar);

  // src/nidoca-card.ts
  var NidocaCard = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "surface" /* surface */;
    }
    render() {
      return x`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background-light);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot></slot>
    `;
    }
  };
  NidocaCard.styles = i`
    :host {
      box-sizing: border-box;
      display: block;
      border-radius: 1rem;
      border-style: solid;
      border-width: var(--border-width-min);
      box-shadow: 0 var(--space) var(--space) rgba(0, 0, 0, 0.08), 0 var(--space) var(--space) rgba(0, 0, 0, 0.16);
      height: 100%;
    }
    slot {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaCard.prototype, "theme", 2);
  NidocaCard = __decorateClass([
    e4("nidoca-card")
  ], NidocaCard);

  // src/nidoca-gallery.ts
  var NidocaGallery = class extends NidocaHtml {
    render() {
      return x`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${(event) => this.slotChanged(event)}"></slot>
      </nidoca-layout-spacer>
    `;
    }
    slotChanged(event) {
      const slotElement = event.target;
      if (slotElement == void 0) {
        return;
      }
      const elements = slotElement.assignedElements();
      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        const classList = element.classList;
        if (!classList.contains("flexItem")) {
          classList.add("flexItem");
        }
        if (!classList.contains("flexItemDevice")) {
          classList.add("flexItemDevice");
        }
      }
    }
  };
  NidocaGallery.styles = i`
    slot,
    ::slotted(slot) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    .flexItem,
    ::slotted(.flexItem) {
      flex-basis: 24%;
      padding-top: var(--space-3);
    }
  `;
  NidocaGallery = __decorateClass([
    e4("nidoca-gallery")
  ], NidocaGallery);

  // src/nidoca-print.ts
  var NidocaPrint = class extends NidocaHtml {
    render() {
      return x`<slot></slot>`;
    }
    print() {
      const printWindow = window.open("");
      if (printWindow) {
        printWindow.document.write(this.innerHTML);
        printWindow.print();
        printWindow.close();
      }
    }
  };
  NidocaPrint.styles = i`
    :host {
      display: none;
    }
  `;
  NidocaPrint = __decorateClass([
    e4("nidoca-print")
  ], NidocaPrint);

  // src/nidoca-section.ts
  var NidocaSection = class extends NidocaHtml {
    render() {
      return x`
      <slot id="container" class="container" @slotchange="${(event) => this.slotChanged(event)}"></slot>
    `;
    }
    slotChanged(event) {
      const slotElement = event.target;
      const elements = slotElement.assignedElements();
      const elementSize = elements.length;
      for (let index = 0; index < elementSize; index++) {
        const element = elements[index];
        const classList = element.classList;
        const itemClazz = "item_count_" + elementSize;
        if (!classList.contains(itemClazz)) {
          classList.add(itemClazz);
        }
      }
    }
  };
  NidocaSection.styles = i`
    :host {
      display: block;
      margin: auto;
      width: 100%;
    }

    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
    }

    ::slotted(.item_count_1) {
      flex-basis: 100%;
      width: 100%;
    }
    ::slotted(.item_count_2) {
      flex-basis: 50%;
      width: 50%;
    }
    ::slotted(.item_count_3) {
      flex-basis: 33.3%;
      width: 33.3%;
    }
    ::slotted(.item_count_4) {
      flex-basis: 25%;
      width: 25%;
    }

    @media only screen and (max-width: 1007px) {
      .container {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }
      ::slotted(.item_count_1),
      ::slotted(.item_count_2),
      ::slotted(.item_count_3),
      ::slotted(.item_count_4) {
        flex-basis: 100%;
        width: 100%;
      }
    }
  `;
  NidocaSection = __decorateClass([
    e4("nidoca-section")
  ], NidocaSection);

  // src/nidoca-dashboard.ts
  var NidocaDashboard = class extends NidocaHtml {
    render() {
      return x` <slot></slot>`;
    }
  };
  NidocaDashboard.styles = i`
    :host {
      display: block;
    }

    slot {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: stretch;
      align-items: stretch;
      width: 50%;
      margin: auto;
    }

    @media only screen and (max-width: 1007px) {
      slot {
        width: 100%;
      }
    }
  `;
  NidocaDashboard = __decorateClass([
    e4("nidoca-dashboard")
  ], NidocaDashboard);
  var NidocaDashboardBox25 = class extends NidocaHtml {
    render() {
      return x` <slot></slot>`;
    }
  };
  NidocaDashboardBox25.styles = i`
    :host {
      display: block;
      width: 25%;
    }

    @media only screen and (max-width: 1919px) {
      :host {
        width: 50%;
      }
    }
  `;
  NidocaDashboardBox25 = __decorateClass([
    e4("nidoca-dashboard-box-25")
  ], NidocaDashboardBox25);
  var NidocaDashboardBox50 = class extends NidocaHtml {
    render() {
      return x` <slot></slot>`;
    }
  };
  NidocaDashboardBox50.styles = i`
    :host {
      width: 50%;
      display: block;
    }
    @media only screen and (max-width: 1919px) {
      :host {
        width: 100%;
      }
    }
  `;
  NidocaDashboardBox50 = __decorateClass([
    e4("nidoca-dashboard-box-50")
  ], NidocaDashboardBox50);
  var NidocaDashboardBox100 = class extends NidocaHtml {
    render() {
      return x` <slot></slot>`;
    }
  };
  NidocaDashboardBox100.styles = i`
    :host {
      width: 100%;
      display: block;
    }
  `;
  NidocaDashboardBox100 = __decorateClass([
    e4("nidoca-dashboard-box-100")
  ], NidocaDashboardBox100);
  var NidocaDashboardCard = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.clickable = true;
      this.title = "";
    }
    render() {
      return x`
      <nidoca-card @click="${() => this.clicked()}" class="${this.clickable ? "clickable" : ""}">
        <nidoca-box>
          <nidoca-text-h6 style="padding-bottom: var(--space-2);">${this.title}</nidoca-text-h6>
          <slot></slot>
        </nidoca-box>
      </nidoca-card>
    `;
    }
    clicked() {
      if (this.clickable) {
        this.dispatchEvent(
          new CustomEvent("nidoca-event-dashboard-card-clicked", {
            detail: this,
            bubbles: true,
            composed: true
          })
        );
      }
    }
  };
  NidocaDashboardCard.styles = i`
    :host {
      padding: var(--space-2);
      box-sizing: border-box;
    }

    :host,
    nidoca-card {
      display: block;
      height: 100%;
      width: 100%;
    }

    .clickable {
      cursor: pointer;
    }
  `;
  __decorateClass([
    n5({ type: Boolean })
  ], NidocaDashboardCard.prototype, "clickable", 2);
  __decorateClass([
    n5({ type: String })
  ], NidocaDashboardCard.prototype, "title", 2);
  NidocaDashboardCard = __decorateClass([
    e4("nidoca-dashboard-card")
  ], NidocaDashboardCard);

  // src/nidoca-box.ts
  var NidocaBox = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "plain" /* plain */;
    }
    render() {
      return x`
      ${NidocaThemeHelper.getStyle(this.theme)}
      <slot></slot>
    `;
    }
  };
  NidocaBox.styles = i`
    :host {
      display: block;
      padding: var(--space-6);
      box-sizing: border-box;
    }
    slot {
      display: block;
      margin: auto;
    }

    @media only screen and (min-width: 641px) and (max-width: 1007px) {
      :host {
        padding: var(--space-4);
      }
    }

    @media only screen and (max-width: 640px) {
      :host {
        padding: var(--space-2);
      }
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaBox.prototype, "theme", 2);
  NidocaBox = __decorateClass([
    e4("nidoca-box")
  ], NidocaBox);

  // src/nidoca-form-contact.ts
  var NidocaFormContact = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.theme = "primary" /* primary */;
      this.label = "Deine Nachricht";
      this.nameLabel = "Dein Name";
      this.emailLabel = "Deine Email";
      this.titleLabel = "Betreff";
      this.messageLabel = "Deine Nachricht";
      this.buttonLabel = "Senden";
    }
    render() {
      return x`
      <nidoca-box theme="${l6(this.theme)}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>
          <nidoca-form-text
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            name="name"
            textType="${"text" /* text */}"
            value=""
            label="${this.nameLabel}"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"email" /* email */}"
            label="${this.emailLabel}"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            label="${this.titleLabel}"
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"text" /* text */}"
            value=""
            label="title"
            required
          ></nidoca-form-text>
          <nidoca-form-textarea
            label="${this.messageLabel}"
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            name="message"
            trailingIcon="vpn_key"
            required
          ></nidoca-form-textarea>
          <nidoca-button
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${() => this.sendMessage()}"
            .buttonType="${"contained" /* contained */}"
            >${this.buttonLabel}
          </nidoca-button>
        </nidoca-form>
      </nidoca-box>
    `;
    }
    sendMessage() {
      if (this.formComponent && this.formComponent.validate()) {
        this.dispatchEvent(
          new CustomEvent("nidoca-form-contact-submit", {
            detail: this.formComponent.getOutputData(),
            bubbles: true,
            composed: true
          })
        );
      }
    }
  };
  NidocaFormContact.styles = i`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `;
  __decorateClass([
    n5({ type: NidocaTheme, converter: String })
  ], NidocaFormContact.prototype, "theme", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormContact.prototype, "label", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormContact.prototype, "nameLabel", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormContact.prototype, "emailLabel", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormContact.prototype, "titleLabel", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormContact.prototype, "messageLabel", 2);
  __decorateClass([
    n5({ type: String, converter: String })
  ], NidocaFormContact.prototype, "buttonLabel", 2);
  __decorateClass([
    i4("#authenitcate-form")
  ], NidocaFormContact.prototype, "formComponent", 2);
  NidocaFormContact = __decorateClass([
    e4("nidoca-form-contact")
  ], NidocaFormContact);

  // src/app/nidoca-page-main.ts
  var NidocaPageMain = class extends NidocaHtml {
    render() {
      return x`
      <nidoca-container style="">
        <div style="display:flex;align-items:center;justify-content:center;align-content:flex-start;">
          <nidoca-img src="logo.svg" width="128px"></nidoca-img>
          <nidoca-text-h2 style="padding-left:var(--space-2);">nidoca-webcomponents</nidoca-text-h2>
        </div>
      </nidoca-container>
      <!--
      <nidoca-container theme="primary">
        <nidoca-text-h1 style="text-align:center;">HTML Einbindung</nidoca-text-h1>

        <nidoca-code
          >&lt;script
          src=&quot;https://domoskanonos.github.io/nidoca-webcomponents/webcomponents/nidoca-webcomponents.js&quot;&gt;&lt;/script&gt;
          &lt;style&gt;@import
          url(&#39;https://domoskanonos.github.io/nidoca-webcomponents/webcomponents/nidoca.css&#39;);&lt;/style&gt;
          &lt;nidoca-button&gt;Mein Button&lt;/nidoca-button&gt;
        </nidoca-code>
      </nidoca-container>
  -->
      <nidoca-container>
        <nidoca-text-h1 style="text-align:center;">Komponenten</nidoca-text-h1>
      </nidoca-container>

      ${this.getComponentHtml(NidocaInfobox, new NidocaInfobox(), "Infobox Komponente.")}
      ${this.getComponentHtml(NidocaIconExtended, new NidocaIconExtended(), "Standard Icon Komponente.")}
      ${this.getComponentHtml(NidocaIcon, new NidocaIcon(), "Standard Icon Komponente.")}
      ${this.getComponentHtml(NidocaIcon, new NidocaIcon(), "Standard Icon Komponente.")}
      ${this.getComponentHtml(NidocaCode, new NidocaCode(), "Komponente um Quellcode darzustellen.")}
      ${this.getComponentHtml(NidocaTabs, new NidocaTabs(), "Top App Bar Komponente")}
      ${this.getComponentHtml(NidocaText, new NidocaText(), "Typography Komponenten")}
      ${this.getComponentHtml(NidocaTopAppBar, new NidocaTopAppBar(), "Top App Bar Komponente")}
      ${this.getComponentHtml(NidocaChip, new NidocaChip(), "Chip Komponente")}
      ${this.getComponentHtml(NidocaArticle, new NidocaArticle(), "Artikel Komponente")}
      ${this.getComponentHtml(NidocaAccordion, new NidocaAccordion(), "Accordion Komponente")}
      ${this.getComponentHtml(NidocaButton, new NidocaButton(), "Button")}
      ${this.getComponentHtml(NidocaMenu, new NidocaMenu(), "Men\xFC")}
      ${this.getComponentHtml(NidocaMenuItem, new NidocaMenuItem(), "Men\xFCelement")}
      ${this.getComponentHtml(NidocaMenuArea, new NidocaMenuArea(), "Men\xFCbereich")}
      ${this.getComponentHtml(NidocaSearchBar, new NidocaSearchBar(), "Suchfeld")}
      ${this.getComponentHtml(NidocaImg, new NidocaImg(), "Einfaches Bild")}
      ${this.getComponentHtml(NidocaImgRound, new NidocaImgRound(), "Rundes Bild")}
      ${this.getComponentHtml(NidocaAvatar, new NidocaAvatar(), "Avatar Komponente, Bild mit Text")}
      ${this.getComponentHtml(
        NidocaListSection,
        new NidocaListSection(),
        "Unterkomponente f\xFCr die Komponente <nidoca-list/>"
      )}
      ${this.getComponentHtml(
        NidocaListItem,
        new NidocaListItem(),
        "Unterkomponente f\xFCr die Komponente <nidoca-list/>"
      )}
      ${this.getComponentHtml(
        NidocaList,
        new NidocaList(),
        "Listenkomponente f\xFCr mobile und Desktop Anwendungen. Unterkomponenten dieser Komponente sind nidoca-list-section und nidoca-list-item"
      )}
    `;
    }
    getComponentHtml(clazz, instance, text) {
      return x` <nidoca-container>
      <nidoca-section style="padding:var(--space-4);">
        <nidoca-card style="padding:var(--space-4); heigth:500px;"> ${clazz.example()} </nidoca-card>
        <nidoca-article
          style="padding:var(--space-4);"
          theme="plain"
          overline="<${instance.tagName}></${instance.tagName}>"
          title="${instance.tagName}"
          text="${text}"
        >
          <nidoca-button
            style="width:250px;"
            @nidoca-event-button-clicked="${() => window.open("https://domoskanonos.github.io/nidoca-lit-viewer/", "_blank")}"
            >Ausprobieren</nidoca-button
          >
        </nidoca-article>
      </nidoca-section>
    </nidoca-container>`;
    }
  };
  NidocaPageMain.styles = i``;
  NidocaPageMain = __decorateClass([
    e4("nidoca-page-main")
  ], NidocaPageMain);

  // src/app/nidoca-page-product-template.ts
  var NidocaPageProductTemplate = class extends NidocaHtml {
    render() {
      return x`
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
                @click="${() => window.open("https://www.ebay.de/contact/sendmsg?&recipient=dortmund.digital", "_blanck")}"
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
                @click="${() => window.open("https://www.ebay.de/usr/dortmund.digital", "_blanck")}"
                >Verkäuferprofil</nidoca-button
              >
              <nidoca-button
                @click="${() => window.open("https://feedback.ebay.de/fdbk/feedback_profile/dortmund.digital", "_blanck")}"
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
  };
  NidocaPageProductTemplate.styles = i`
    .infobox {
      padding: var(--space-2);
    }
  `;
  NidocaPageProductTemplate = __decorateClass([
    e4("nidoca-page-product-template")
  ], NidocaPageProductTemplate);

  // src/app/nidoca-page-imprint.ts
  var NidocaPageSettings = class extends NidocaHtml {
    render() {
      return x`
      <nidoca-container>
        <nidoca-article title="Impressum" summary="Angaben gemäß § 5 TMG">
          <nidoca-text>Dominik Bruhn</nidoca-text>
          <nidoca-text>Holzwickeder Straße 109c</nidoca-text>
          <nidoca-text>44309 Dortmund</nidoca-text>
          <nidoca-layout-spacer></nidoca-layout-spacer>
          <nidoca-text>Telefonnummer: +49 152 052 488 62</nidoca-text>
          <nidoca-text>E-Mail: dominikbruhn [at] googlemail.com</nidoca-text>
        </nidoca-article>
        <nidoca-article title="Streitsschlichtung">
          <nidoca-text
            >Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <nidoca-link href="https://ec.europa.eu/consumers/odr" targetType="_blanck"
              >https://ec.europa.eu/consumers/odr
            </nidoca-link>
            . <br />Unsere E-Mail-Adresse und Telefonnummer finden Sie oben auf dieser Seite.
          </nidoca-text>
          <nidoca-text>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </nidoca-text>
        </nidoca-article>
        <nidoca-article title="Haftungsinhalt">
          <nidoca-text>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen.<br />
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
            bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
            konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </nidoca-text>
        </nidoca-article>
        <nidoca-article title="Haftungslinks">
          <nidoca-text>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
            wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
            Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </nidoca-text>
        </nidoca-article>
        <nidoca-article title="Copyright">
          <nidoca-text>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.<br />
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </nidoca-text>
        </nidoca-article>
        <nidoca-article title="Quelle">
          <nidoca-link href="https://www.e-recht24.de/impressum-generator.html" targetType="_blanck"
            >https://www.e-recht24.de/impressum-generator.html
          </nidoca-link>
        </nidoca-article>
        <nidoca-article title="Google Material Icons">
          <nidoca-text> Unser Framework und diese Seite verwenden die Google Material Icons Bibliothek: </nidoca-text>
          <nidoca-link href="https://fonts.google.com/icons" targetType="_blanck"
            >https://fonts.google.com/icons
          </nidoca-link>
        </nidoca-article>
        <nidoca-article title="Google Fonts">
          <nidoca-text> Unser Framework und diese Seite verwenden Google Fonts: </nidoca-text>
          <nidoca-link href="https://fonts.google.com/" targetType="_blanck"> https://fonts.google.com/ </nidoca-link>
        </nidoca-article>
        <nidoca-article title="Bilder von Pixabay">
          <nidoca-text> Diese Seite verwendet Bilder von Pixabay </nidoca-text>
          <nidoca-link href="https://pixabay.com" targetType="_blanck">pixabay.com</nidoca-link>
        </nidoca-article>
      </nidoca-container>
    `;
    }
  };
  NidocaPageSettings.styles = i`
    nidoca-article {
      padding-bottom: var(--space-2);
    }
  `;
  NidocaPageSettings = __decorateClass([
    e4("nidoca-page-imprint")
  ], NidocaPageSettings);

  // src/app/nidoca-page-settings.ts
  var NidocaPageSettings2 = class extends NidocaHtml {
    constructor() {
      super(...arguments);
      this.cssVars = [];
    }
    firstUpdated() {
      const getAllCSSVariableNames = (styleSheets = document.styleSheets) => {
        const cssVars = [];
        Array.from(styleSheets).forEach((styleSheet) => {
          Array.from(styleSheet.cssRules).forEach((rule) => {
            if (!rule || !rule["style"]) {
              return;
            }
            const styleArray = rule["style"];
            Array.from(styleArray).forEach((style) => {
              if (style.startsWith("--") && cssVars.indexOf(style) == -1) {
                cssVars.push(style);
              }
            });
          });
        });
        return cssVars;
      };
      this.cssVars = getAllCSSVariableNames();
      console.log(this.cssVars);
    }
    render() {
      return x`
      <nidoca-container>
        <nidoca-article title="CSS Variablen">
          ${i6(
        [this.cssVars],
        () => x`
                ${c4(
          this.cssVars,
          (cssVar) => x`
                    <nidoca-form-text
                      style="width:100%;padding-bottom: var(--space-3);"
                      @input="${(event) => {
            document.documentElement.style.setProperty(
              cssVar,
              event.target ? event.target.getOutputData().value : ""
            );
          }}"
                      type="${cssVar.indexOf("color") > -1 ? "color" /* color */ : "text" /* text */}"
                      name="${cssVar}"
                      value="${getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim()}"
                      label="${cssVar}"
                    ></nidoca-form-text>
                  `
        )}
              `
      )}
        </nidoca-article>
      </nidoca-container>
    `;
    }
  };
  NidocaPageSettings2.styles = i``;
  __decorateClass([
    n5({ type: Array })
  ], NidocaPageSettings2.prototype, "cssVars", 2);
  NidocaPageSettings2 = __decorateClass([
    e4("nidoca-page-settings")
  ], NidocaPageSettings2);

  // src/app/nidoca-page-privacy.ts
  var NidocaPagePrivacy = class extends NidocaHtml {
    render() {
      return x``;
    }
  };
  NidocaPagePrivacy.styles = i``;
  NidocaPagePrivacy = __decorateClass([
    e4("nidoca-page-privacy")
  ], NidocaPagePrivacy);

  // src/app/nidoca-page-terms-of-use.ts
  var NidocaPageTermsOfUse = class extends NidocaHtml {
    render() {
      return x``;
    }
  };
  NidocaPageTermsOfUse.styles = i``;
  NidocaPageTermsOfUse = __decorateClass([
    e4("nidoca-page-terms-of-use")
  ], NidocaPageTermsOfUse);

  // node_modules/@domoskanonos/nidoca-router/lib/nidoca-router.js
  var NidocaRouter = class _NidocaRouter {
    constructor() {
      this.listeners = [];
      window.onpopstate = (event) => {
        console.trace("onpopstate event: location: " + document.location + ", state: " + JSON.stringify(event.state));
        this.notifyListeners();
      };
      document.addEventListener("click", (event) => {
        if (!this.shouldIgnoreEvent(event)) {
          const anchor = this.getAnchor(event);
          if (anchor && !this.shouldIgnoreAnchor(anchor)) {
            event.preventDefault();
            if (anchor.hash.length > 0) {
              this.navigate(anchor.hash);
            }
          }
        }
      });
    }
    static getUniqueInstance() {
      if (!_NidocaRouter.uniqueInstance) {
        _NidocaRouter.uniqueInstance = new _NidocaRouter();
      }
      return _NidocaRouter.uniqueInstance;
    }
    subscribe(listener) {
      console.trace("subscribe router listener");
      this.listeners.push(listener);
    }
    back() {
      history.back();
    }
    forward() {
      history.forward();
    }
    navigate(url, state2 = null) {
      if (url.indexOf("#") == -1) {
        url = "#".concat(url);
      }
      console.trace("navigate to: %s", url);
      if (state2 != null) {
        console.trace("state: %s", JSON.stringify(state2));
      }
      if (document.location.hash === url) {
        console.trace("you are already on page: " + url);
        return;
      }
      history.pushState(state2, "", url);
      this.notifyListeners();
    }
    getCurrentState() {
      return history.state;
    }
    getStateProperty(key) {
      const state2 = this.getCurrentState();
      return state2 != null ? state2[key] : null;
    }
    getCurrentPage() {
      const currentPage = document.location.hash.replace("#", "");
      return currentPage;
    }
    getHash() {
      return document.location.hash;
    }
    notifyListeners() {
      const path = this.getCurrentPage();
      this.listeners.forEach((listener) => listener.routeChanged(path));
    }
    shouldIgnoreEvent(event) {
      return event.defaultPrevented || event.button !== 0 || event.shiftKey || event.ctrlKey || event.altKey || event.metaKey;
    }
    getAnchor(event) {
      for (const target of event.composedPath ? event.composedPath() : []) {
        if (this.isAnchor(target)) {
          return target;
        }
      }
      let elem = event.target;
      while (elem && !this.isAnchor(elem)) {
        elem = elem.parentNode;
      }
      return elem && this.isAnchor(elem) ? elem : null;
    }
    isAnchor(elem) {
      return elem.nodeName && elem.nodeName.toLowerCase() === "a";
    }
    shouldIgnoreAnchor(anchor) {
      if (anchor.target && anchor.target.toLowerCase() !== "_self") {
        return true;
      }
      if (anchor.hasAttribute("download")) {
        return true;
      }
      const origin = anchor.origin || this.getAnchorOrigin(anchor);
      if (origin !== window.location.origin) {
        return true;
      }
      return false;
    }
    getAnchorOrigin(anchor) {
      const port = anchor.port;
      const protocol = anchor.protocol;
      const defaultHttp = protocol === "http:" && port === "80";
      const defaultHttps = protocol === "https:" && port === "443";
      const host = defaultHttp || defaultHttps ? anchor.hostname : anchor.host;
      return `${protocol}//${host}`;
    }
  };

  // src/app/nidoca-my-app.ts
  var NidocaMyApp = class extends NidocaHtml {
    constructor() {
      super();
      this.content = x``;
      NidocaRouter.getUniqueInstance().subscribe(this);
      this.routeChanged(NidocaRouter.getUniqueInstance().getCurrentPage());
    }
    routeChanged(relUrl) {
      switch (relUrl) {
        case "privacy":
          this.content = x`<nidoca-page-privacy></nidoca-page-privacy>`;
          break;
        case "imprint":
          this.content = x`<nidoca-page-imprint></nidoca-page-imprint>`;
          break;
        case "settings":
          this.content = x`<nidoca-page-settings></nidoca-page-settings>`;
          break;
        case "terms-of-use":
          this.content = x`<nidoca-page-terms-of-use></nidoca-page-terms-of-use>`;
          break;
        case "product-template":
          this.content = x`<nidoca-page-product-template></nidoca-page-product-template>`;
          break;
        case "main":
          this.content = x`<nidoca-page-main></nidoca-page-main>`;
          break;
        default:
          this.content = x`<nidoca-page-main></nidoca-page-main>`;
      }
    }
    render() {
      return x`
      <nidoca-template>
        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_self"
          href="https://domoskanonos.github.io/nidoca-webcomponents/"
          >Homepage</nidoca-link
        >

        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_blank"
          href="https://domoskanonos.github.io/nidoca-webcomponents/docs/index.html"
          >Typedoc</nidoca-link
        >

        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_blank"
          href="https://github.com/domoskanonos/nidoca-webcomponents"
          >Github</nidoca-link
        >

        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_blank"
          href="https://domoskanonos.github.io/nidoca-lit-viewer/"
          >Spielwiese</nidoca-link
        >

        <div slot="content">${this.content}</div>

        <div slot="left" style="height:var(--height-medium);"></div>
        <nidoca-menu slot="left" theme="primary">
          <nidoca-menu-item
            @nidoca-event-menu-item-clicked="${() => {
        NidocaRouter.getUniqueInstance().navigate("#main");
      }}"
            icon="home"
            text="Start"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text="Produkt-Template"
            @nidoca-event-menu-item-clicked="${() => {
        NidocaRouter.getUniqueInstance().navigate("#product-template");
      }}"
          ></nidoca-menu-item>

          <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
          <nidoca-menu-item
            text="Impressum"
            @nidoca-event-menu-item-clicked="${() => {
        NidocaRouter.getUniqueInstance().navigate("#imprint");
      }}"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text="Datenschutz"
            @nidoca-event-menu-item-clicked="${() => {
        NidocaRouter.getUniqueInstance().navigate("#privacy");
      }}"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text="Nutzungsbedingungen"
            @nidoca-event-menu-item-clicked="${() => {
        NidocaRouter.getUniqueInstance().navigate("#terms-of-use");
      }}"
          ></nidoca-menu-item>
          <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
          <nidoca-menu-item
            text="Einstellungen"
            @nidoca-event-menu-item-clicked="${() => {
        NidocaRouter.getUniqueInstance().navigate("#settings");
      }}"
          ></nidoca-menu-item>
        </nidoca-menu>
      </nidoca-template>
    `;
    }
  };
  __decorateClass([
    n5({ type: Object })
  ], NidocaMyApp.prototype, "content", 2);
  NidocaMyApp = __decorateClass([
    e4("nidoca-my-app")
  ], NidocaMyApp);
})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/guard.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
