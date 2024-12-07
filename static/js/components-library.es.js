var b = Object.defineProperty;
var m = (r, e, t) => e in r ? b(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var o = (r, e, t) => m(r, typeof e != "symbol" ? e + "" : e, t);
import g, { Component as i } from "react";
var c = { exports: {} }, u = {};
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var w = g, p = 60103;
u.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var h = Symbol.for;
  p = h("react.element"), u.Fragment = h("react.fragment");
}
var v = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = Object.prototype.hasOwnProperty, f = { key: !0, ref: !0, __self: !0, __source: !0 };
function S(r, e, t) {
  var s, a = {}, l = null, d = null;
  t !== void 0 && (l = "" + t), e.key !== void 0 && (l = "" + e.key), e.ref !== void 0 && (d = e.ref);
  for (s in e) x.call(e, s) && !f.hasOwnProperty(s) && (a[s] = e[s]);
  if (r && r.defaultProps) for (s in e = r.defaultProps, e) a[s] === void 0 && (a[s] = e[s]);
  return { $$typeof: p, type: r, key: l, ref: d, props: a, _owner: v.current };
}
u.jsx = S;
u.jsxs = S;
c.exports = u;
var n = c.exports;
class G extends i {
  constructor(e) {
    super(e), this.state = {
      sharedState: window.useGlobalStoreSus.getState().sharedState,
      multiplier: window.useGlobalStoreSus.getState().passengerShared
    };
  }
  componentDidMount() {
    this.unsubscribe = window.useGlobalStoreSus.subscribe((e) => {
      this.setState({ sharedState: e.sharedState, multiplier: e.passengerShared });
    });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  render() {
    const { name: e } = this.props, { sharedState: t, multiplier: s } = this.state;
    return /* @__PURE__ */ n.jsx("div", { className: "myComponent", children: /* @__PURE__ */ n.jsx(
      "input",
      {
        type: "number",
        value: t * s,
        name: e
      }
    ) });
  }
}
class C extends i {
  constructor(t) {
    super(t);
    o(this, "handleChange", (t) => {
      const s = t.target.value;
      window.useGlobalStoreSus.setState({ sharedState: Number(s) });
    });
    this.state = {
      sharedState: window.useGlobalStoreSus.getState().sharedState
    };
  }
  componentDidMount() {
    this.unsubscribe = window.useGlobalStoreSus.subscribe((t) => {
      this.setState({ sharedState: t.sharedState });
    });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  render() {
    const { name: t } = this.props, { sharedState: s } = this.state;
    return /* @__PURE__ */ n.jsx("div", { className: "myComponent", children: /* @__PURE__ */ n.jsx(
      "input",
      {
        type: "number",
        value: s,
        onChange: this.handleChange,
        name: t
      }
    ) });
  }
}
class _ extends i {
  constructor(t) {
    super(t);
    o(this, "handleChange", (t) => {
      const s = Number(t.target.value);
      this.setState({ value: s }), window.useGlobalStoreSus.setState({ percentageShared: s });
    });
    this.state = {
      value: window.useGlobalStoreSus.getState().percentageShared
    };
  }
  componentDidMount() {
    this.unsubscribe = window.useGlobalStoreSus.subscribe((t) => {
      this.setState({ value: t.percentageShared });
    });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  render() {
    const t = { min: 0, max: 100, step: 5 }, { name: s } = this.props, { value: a } = this.state;
    return /* @__PURE__ */ n.jsxs("div", { className: "range-slider", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          name: s,
          type: "range",
          min: t.min,
          max: t.max,
          step: t.step,
          value: a,
          onChange: this.handleChange,
          className: "range-slider-input"
        }
      ),
      /* @__PURE__ */ n.jsxs("div", { className: "range-slider-value", children: [
        a,
        " %"
      ] })
    ] });
  }
}
class N extends i {
  constructor(t) {
    super(t);
    o(this, "handleChangeAdd", () => {
      window.useGlobalStoreSus.setState({ passengerShared: this.state.value + 1 });
    });
    o(this, "handleChangeMinus", () => {
      window.useGlobalStoreSus.setState({ passengerShared: this.state.value > 1 ? this.state.value - 1 : this.state.value });
    });
    this.state = {
      value: window.useGlobalStoreSus.getState().passengerShared
    };
  }
  componentDidMount() {
    this.unsubscribe = window.useGlobalStoreSus.subscribe((t) => {
      this.setState({ value: t.passengerShared });
    });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  render() {
    const { name: t } = this.props, { value: s } = this.state;
    return /* @__PURE__ */ n.jsxs("div", { className: "", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          type: "number",
          value: s,
          name: t
        }
      ),
      /* @__PURE__ */ n.jsxs("div", { className: "wrapperPassenger", children: [
        /* @__PURE__ */ n.jsx("button", { className: "passengerButton", type: "button", onClick: this.handleChangeAdd, children: "+" }),
        /* @__PURE__ */ n.jsx("button", { className: "passengerButton", type: "button", onClick: this.handleChangeMinus, children: "-" })
      ] })
    ] });
  }
}
class M extends i {
  constructor(e) {
    super(e), this.state = {
      sharedState: window.useGlobalStoreSus.getState().sharedState,
      multiplier: window.useGlobalStoreSus.getState().passengerShared,
      percentage: window.useGlobalStoreSus.getState().percentageShared
    };
  }
  componentDidMount() {
    this.unsubscribe = window.useGlobalStoreSus.subscribe((e) => {
      this.setState({ sharedState: e.sharedState, multiplier: e.passengerShared, percentage: e.percentageShared });
    });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  render() {
    const { name: e } = this.props, { sharedState: t, multiplier: s, percentage: a } = this.state;
    return /* @__PURE__ */ n.jsx("div", { className: "myComponent", children: /* @__PURE__ */ n.jsx(
      "input",
      {
        type: "number",
        value: Math.round(t * s * (a / 100)),
        name: e
      }
    ) });
  }
}
class P extends i {
  constructor(e) {
    super(e), this.state = {
      sharedState: window.useGlobalStoreSus.getState().sharedState,
      multiplier: window.useGlobalStoreSus.getState().passengerShared,
      percentage: 100 - window.useGlobalStoreSus.getState().percentageShared
    };
  }
  componentDidMount() {
    this.unsubscribe = window.useGlobalStoreSus.subscribe((e) => {
      this.setState({ sharedState: e.sharedState, multiplier: e.passengerShared, percentage: 100 - e.percentageShared });
    });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  render() {
    const { name: e } = this.props, { sharedState: t, multiplier: s, percentage: a } = this.state;
    return /* @__PURE__ */ n.jsx("div", { className: "myComponent", children: /* @__PURE__ */ n.jsx(
      "input",
      {
        type: "number",
        value: Math.round(t * s * (a / 100)),
        name: e
      }
    ) });
  }
}
export {
  N as Passenger,
  C as Price,
  G as PriceMultiplier,
  M as SubFieldPrice,
  P as SubFieldSubPrice,
  _ as WrapperComponentRange
};
