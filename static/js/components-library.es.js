import _, { useState as a } from "react";
var m = { exports: {} }, l = {};
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v = _, f = 60103;
l.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var c = Symbol.for;
  f = c("react.element"), l.Fragment = c("react.fragment");
}
var d = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = Object.prototype.hasOwnProperty, b = { key: !0, ref: !0, __self: !0, __source: !0 };
function y(t, e, p) {
  var r, o = {}, n = null, u = null;
  p !== void 0 && (n = "" + p), e.key !== void 0 && (n = "" + e.key), e.ref !== void 0 && (u = e.ref);
  for (r in e) x.call(e, r) && !b.hasOwnProperty(r) && (o[r] = e[r]);
  if (t && t.defaultProps) for (r in e = t.defaultProps, e) o[r] === void 0 && (o[r] = e[r]);
  return { $$typeof: f, type: t, key: n, ref: u, props: o, _owner: d.current };
}
l.jsx = y;
l.jsxs = y;
m.exports = l;
var s = m.exports;
const g = ({ name: t, initialValue: e }) => {
  const [p, r] = a(parseFloat(e) || 0), [o, n] = a(1), u = () => {
    r((i) => i * o);
  };
  return /* @__PURE__ */ s.jsxs("div", { className: "myComponent", children: [
    /* @__PURE__ */ s.jsx(
      "input",
      {
        type: "number",
        value: p,
        onChange: (i) => r(Number(i.target.value)),
        name: t
      }
    ),
    /* @__PURE__ */ s.jsx(
      "input",
      {
        type: "number",
        placeholder: "Multiplicador",
        onChange: (i) => n(Number(i.target.value))
      }
    ),
    /* @__PURE__ */ s.jsx("button", { type: "button", onClick: u, children: "Multiplicar" })
  ] });
};
export {
  g as PriceMultiplier
};
