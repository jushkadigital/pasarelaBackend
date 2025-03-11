var g = Object.defineProperty;
var w = (r, t, e) => t in r ? g(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var i = (r, t, e) => w(r, typeof t != "symbol" ? t + "" : t, e);
import v, { Component as u } from "react";
var c = { exports: {} }, h = {};
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x = v, b = 60103;
h.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var p = Symbol.for;
  b = p("react.element"), h.Fragment = p("react.fragment");
}
var G = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = Object.prototype.hasOwnProperty, j = { key: !0, ref: !0, __self: !0, __source: !0 };
function m(r, t, e) {
  var s, n = {}, o = null, l = null;
  e !== void 0 && (o = "" + e), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (s in t) C.call(t, s) && !j.hasOwnProperty(s) && (n[s] = t[s]);
  if (r && r.defaultProps) for (s in t = r.defaultProps, t) n[s] === void 0 && (n[s] = t[s]);
  return { $$typeof: b, type: r, key: o, ref: l, props: n, _owner: G.current };
}
h.jsx = m;
h.jsxs = m;
c.exports = h;
var a = c.exports;
class N extends u {
  constructor(t) {
    super(t), this.state = {
      sharedState: window.useGlobalStoreSus.getState().sharedState,
      multiplier: window.useGlobalStoreSus.getState().passengerShared,
      sharedState2: window.useGlobalStoreSus.getState().sharedState2,
      multiplier2: window.useGlobalStoreSus.getState().passengerShared2,
      sharedState3: window.useGlobalStoreSus.getState().sharedState3,
      multiplier3: window.useGlobalStoreSus.getState().passengerShared3
    };
  }
  componentDidMount() {
    this.unsubscribe = window.useGlobalStoreSus.subscribe((t) => {
      this.setState({ sharedState: t.sharedState, multiplier: t.passengerShared, sharedState2: t.sharedState2, multiplier2: t.passengerShared2, sharedState3: t.sharedState3, multiplier3: t.passengerShared3 });
    });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  render() {
    const { name: t } = this.props, { sharedState: e, multiplier: s, sharedState2: n, multiplier2: o, sharedState3: l, multiplier3: d } = this.state;
    return /* @__PURE__ */ a.jsx("div", { className: "myComponent", children: /* @__PURE__ */ a.jsx(
      "input",
      {
        type: "number",
        value: e * s + n * o + l * d,
        name: t
      }
    ) });
  }
}
class M extends u {
  constructor(e) {
    super(e);
    i(this, "handleChange", (e) => {
      const s = e.target.value;
      window.useGlobalStoreSus.setState({ sharedState: Number(s) });
    });
    this.state = {
      sharedState: window.useGlobalStoreSus.getState().sharedState
    };
  }
  componentDidMount() {
    this.unsubscribe = window.useGlobalStoreSus.subscribe((e) => {
      this.setState({ sharedState: e.sharedState });
    });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  render() {
    const { name: e } = this.props, { sharedState: s } = this.state;
    return /* @__PURE__ */ a.jsx("div", { className: "myComponent", children: /* @__PURE__ */ a.jsx(
      "input",
      {
        type: "number",
        value: s,
        onChange: this.handleChange,
        name: e
      }
    ) });
  }
}
class _ extends u {
  constructor(e) {
    super(e);
    i(this, "handleChange", (e) => {
      const s = e.target.value;
      window.useGlobalStoreSus.setState({ sharedState2: Number(s) });
    });
    this.state = {
      sharedState2: window.useGlobalStoreSus.getState().sharedState2
    };
  }
  componentDidMount() {
    this.unsubscribe = window.useGlobalStoreSus.subscribe((e) => {
      this.setState({ sharedState2: e.sharedState2 });
    });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  render() {
    const { name: e } = this.props, { sharedState2: s } = this.state;
    return /* @__PURE__ */ a.jsx("div", { className: "myComponent", children: /* @__PURE__ */ a.jsx(
      "input",
      {
        type: "number",
        value: s,
        onChange: this.handleChange,
        name: e
      }
    ) });
  }
}
class P extends u {
  constructor(e) {
    super(e);
    i(this, "handleChange", (e) => {
      const s = e.target.value;
      window.useGlobalStoreSus.setState({ sharedState3: Number(s) });
    });
    this.state = {
      sharedState3: window.useGlobalStoreSus.getState().sharedState3
    };
  }
  componentDidMount() {
    this.unsubscribe = window.useGlobalStoreSus.subscribe((e) => {
      this.setState({ sharedState3: e.sharedState3 });
    });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  render() {
    const { name: e } = this.props, { sharedState3: s } = this.state;
    return /* @__PURE__ */ a.jsx("div", { className: "myComponent", children: /* @__PURE__ */ a.jsx(
      "input",
      {
        type: "number",
        value: s,
        onChange: this.handleChange,
        name: e
      }
    ) });
  }
}
class D extends u {
  constructor(e) {
    super(e);
    i(this, "handleChange", (e) => {
      const s = Number(e.target.value);
      this.setState({ value: s }), window.useGlobalStoreSus.setState({ percentageShared: s });
    });
    this.state = {
      value: window.useGlobalStoreSus.getState().percentageShared
    };
  }
  componentDidMount() {
    this.unsubscribe = window.useGlobalStoreSus.subscribe((e) => {
      this.setState({ value: e.percentageShared });
    });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  render() {
    const e = { min: 0, max: 100, step: 5 }, { name: s } = this.props, { value: n } = this.state;
    return /* @__PURE__ */ a.jsxs("div", { className: "range-slider", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          name: s,
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step,
          value: n,
          onChange: this.handleChange,
          className: "range-slider-input"
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "range-slider-value", children: [
        n,
        " %"
      ] })
    ] });
  }
}
class U extends u {
  constructor(e) {
    super(e);
    i(this, "handleChangeAdd", () => {
      window.useGlobalStoreSus.setState({ passengerShared: this.state.value + 1 });
    });
    i(this, "handleChangeMinus", () => {
      window.useGlobalStoreSus.setState({ passengerShared: this.state.value > 1 ? this.state.value - 1 : this.state.value });
    });
    this.state = {
      value: window.useGlobalStoreSus.getState().passengerShared
    };
  }
  componentDidMount() {
    this.unsubscribe = window.useGlobalStoreSus.subscribe((e) => {
      this.setState({ value: e.passengerShared });
    });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  render() {
    const { name: e } = this.props, { value: s } = this.state;
    return /* @__PURE__ */ a.jsxs("div", { className: "", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "number",
          value: s,
          name: e
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "wrapperPassenger", children: [
        /* @__PURE__ */ a.jsx("button", { className: "passengerButton", type: "button", onClick: this.handleChangeAdd, children: "+" }),
        /* @__PURE__ */ a.jsx("button", { className: "passengerButton", type: "button", onClick: this.handleChangeMinus, children: "-" })
      ] })
    ] });
  }
}
class W extends u {
  constructor(e) {
    super(e);
    i(this, "handleChangeAdd", () => {
      window.useGlobalStoreSus.setState({ passengerShared2: this.state.value + 1 });
    });
    i(this, "handleChangeMinus", () => {
      window.useGlobalStoreSus.setState({ passengerShared2: this.state.value > 1 ? this.state.value - 1 : this.state.value });
    });
    this.state = {
      value: window.useGlobalStoreSus.getState().passengerShared2
    };
  }
  componentDidMount() {
    this.unsubscribe = window.useGlobalStoreSus.subscribe((e) => {
      this.setState({ value: e.passengerShared2 });
    });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  render() {
    const { name: e } = this.props, { value: s } = this.state;
    return /* @__PURE__ */ a.jsxs("div", { className: "", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "number",
          value: s,
          name: e
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "wrapperPassenger", children: [
        /* @__PURE__ */ a.jsx("button", { className: "passengerButton", type: "button", onClick: this.handleChangeAdd, children: "+" }),
        /* @__PURE__ */ a.jsx("button", { className: "passengerButton", type: "button", onClick: this.handleChangeMinus, children: "-" })
      ] })
    ] });
  }
}
class T extends u {
  constructor(e) {
    super(e);
    i(this, "handleChangeAdd", () => {
      window.useGlobalStoreSus.setState({ passengerShared3: this.state.value + 1 });
    });
    i(this, "handleChangeMinus", () => {
      window.useGlobalStoreSus.setState({ passengerShared3: this.state.value > 1 ? this.state.value - 1 : this.state.value });
    });
    this.state = {
      value: window.useGlobalStoreSus.getState().passengerShared3
    };
  }
  componentDidMount() {
    this.unsubscribe = window.useGlobalStoreSus.subscribe((e) => {
      this.setState({ value: e.passengerShared3 });
    });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  render() {
    const { name: e } = this.props, { value: s } = this.state;
    return /* @__PURE__ */ a.jsxs("div", { className: "", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "number",
          value: s,
          name: e
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "wrapperPassenger", children: [
        /* @__PURE__ */ a.jsx("button", { className: "passengerButton", type: "button", onClick: this.handleChangeAdd, children: "+" }),
        /* @__PURE__ */ a.jsx("button", { className: "passengerButton", type: "button", onClick: this.handleChangeMinus, children: "-" })
      ] })
    ] });
  }
}
class k extends u {
  constructor(t) {
    super(t), this.state = {
      sharedState: window.useGlobalStoreSus.getState().sharedState,
      sharedState2: window.useGlobalStoreSus.getState().sharedState2,
      sharedState3: window.useGlobalStoreSus.getState().sharedState3,
      multiplier: window.useGlobalStoreSus.getState().passengerShared,
      multiplier2: window.useGlobalStoreSus.getState().passengerShared2,
      multiplier3: window.useGlobalStoreSus.getState().passengerShared3,
      percentage: window.useGlobalStoreSus.getState().percentageShared
    };
  }
  componentDidMount() {
    this.unsubscribe = window.useGlobalStoreSus.subscribe((t) => {
      this.setState({ sharedState: t.sharedState, multiplier: t.passengerShared, sharedState2: t.sharedState2, multiplier2: t.passengerShared2, sharedState3: t.sharedState3, multiplier3: t.passengerShared3, percentage: t.percentageShared });
    });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  roundToTwo(t) {
    return +(Math.round(t + "e+2") + "e-2");
  }
  render() {
    const { name: t } = this.props, { sharedState: e, multiplier: s, sharedState2: n, multiplier2: o, sharedState3: l, multiplier3: d, percentage: S } = this.state;
    return /* @__PURE__ */ a.jsx("div", { className: "myComponent", children: /* @__PURE__ */ a.jsx(
      "input",
      {
        type: "number",
        value: this.roundToTwo((e * s + n * o + l * d) * (S / 100)),
        name: t
      }
    ) });
  }
}
class O extends u {
  constructor(t) {
    super(t), this.state = {
      sharedState: window.useGlobalStoreSus.getState().sharedState,
      sharedState2: window.useGlobalStoreSus.getState().sharedState2,
      sharedState3: window.useGlobalStoreSus.getState().sharedState3,
      multiplier: window.useGlobalStoreSus.getState().passengerShared,
      multiplier2: window.useGlobalStoreSus.getState().passengerShared2,
      multiplier3: window.useGlobalStoreSus.getState().passengerShared3,
      percentage: 100 - window.useGlobalStoreSus.getState().percentageShared
    };
  }
  componentDidMount() {
    this.unsubscribe = window.useGlobalStoreSus.subscribe((t) => {
      this.setState({ sharedState: t.sharedState, multiplier: t.passengerShared, sharedState2: t.sharedState2, multiplier2: t.passengerShared2, sharedState3: t.sharedState3, multiplier3: t.passengerShared3, percentage: 100 - t.percentageShared });
    });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  roundToTwo(t) {
    return +(Math.round(t + "e+2") + "e-2");
  }
  render() {
    const { name: t } = this.props, { sharedState: e, multiplier: s, sharedState2: n, multiplier2: o, sharedState3: l, multiplier3: d, percentage: S } = this.state;
    return /* @__PURE__ */ a.jsx("div", { className: "myComponent", children: /* @__PURE__ */ a.jsx(
      "input",
      {
        type: "number",
        value: this.roundToTwo((e * s + n * o + l * d) * (S / 100)),
        name: t
      }
    ) });
  }
}
export {
  U as Passenger,
  T as PassengerInfante,
  W as PassengerMenor,
  M as Price,
  P as PriceInfante,
  _ as PriceMenor,
  N as PriceMultiplier,
  k as SubFieldPrice,
  O as SubFieldSubPrice,
  D as WrapperComponentRange
};
