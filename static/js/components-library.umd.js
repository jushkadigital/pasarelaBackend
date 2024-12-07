(function(r,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],n):(r=typeof globalThis<"u"?globalThis:r||self,n(r.componentsLibrary={},r.React))})(this,function(r,n){"use strict";var P=Object.defineProperty;var N=(r,n,u)=>n in r?P(r,n,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[n]=u;var d=(r,n,u)=>N(r,typeof n!="symbol"?n+"":n,u);var u=document.createElement("style");u.textContent=`.wrapperPassenger{display:flex;justify-content:start;flex-direction:row;padding:3px;column-gap:3px}.passengerButton{width:30px;height:30px;border-radius:80%;background-color:#2e1f5e;display:flex;justify-content:center;align-items:center;color:#fff;font-size:20px;border:none;cursor:pointer;padding:0}
/*$vite$:1*/`,document.head.appendChild(u);var p={exports:{}},l={};/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=n,h=60103;if(l.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var S=Symbol.for;h=S("react.element"),l.Fragment=S("react.fragment")}var w=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function b(i,e,t){var s,o={},c=null,m=null;t!==void 0&&(c=""+t),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(m=e.ref);for(s in e)f.call(e,s)&&!v.hasOwnProperty(s)&&(o[s]=e[s]);if(i&&i.defaultProps)for(s in e=i.defaultProps,e)o[s]===void 0&&(o[s]=e[s]);return{$$typeof:h,type:i,key:c,ref:m,props:o,_owner:w.current}}l.jsx=b,l.jsxs=b,p.exports=l;var a=p.exports;class x extends n.Component{constructor(e){super(e),this.state={sharedState:window.useGlobalStoreSus.getState().sharedState,multiplier:window.useGlobalStoreSus.getState().passengerShared}}componentDidMount(){this.unsubscribe=window.useGlobalStoreSus.subscribe(e=>{this.setState({sharedState:e.sharedState,multiplier:e.passengerShared})})}componentWillUnmount(){this.unsubscribe&&this.unsubscribe()}render(){const{name:e}=this.props,{sharedState:t,multiplier:s}=this.state;return a.jsx("div",{className:"myComponent",children:a.jsx("input",{type:"number",value:t*s,name:e})})}}class y extends n.Component{constructor(t){super(t);d(this,"handleChange",t=>{const s=t.target.value;window.useGlobalStoreSus.setState({sharedState:Number(s)})});this.state={sharedState:window.useGlobalStoreSus.getState().sharedState}}componentDidMount(){this.unsubscribe=window.useGlobalStoreSus.subscribe(t=>{this.setState({sharedState:t.sharedState})})}componentWillUnmount(){this.unsubscribe&&this.unsubscribe()}render(){const{name:t}=this.props,{sharedState:s}=this.state;return a.jsx("div",{className:"myComponent",children:a.jsx("input",{type:"number",value:s,onChange:this.handleChange,name:t})})}}class C extends n.Component{constructor(t){super(t);d(this,"handleChange",t=>{const s=Number(t.target.value);this.setState({value:s}),window.useGlobalStoreSus.setState({percentageShared:s})});this.state={value:window.useGlobalStoreSus.getState().percentageShared}}componentDidMount(){this.unsubscribe=window.useGlobalStoreSus.subscribe(t=>{this.setState({value:t.percentageShared})})}componentWillUnmount(){this.unsubscribe&&this.unsubscribe()}render(){const t={min:0,max:100,step:5},{name:s}=this.props,{value:o}=this.state;return a.jsxs("div",{className:"range-slider",children:[a.jsx("input",{name:s,type:"range",min:t.min,max:t.max,step:t.step,value:o,onChange:this.handleChange,className:"range-slider-input"}),a.jsxs("div",{className:"range-slider-value",children:[o," %"]})]})}}class j extends n.Component{constructor(t){super(t);d(this,"handleChangeAdd",()=>{window.useGlobalStoreSus.setState({passengerShared:this.state.value+1})});d(this,"handleChangeMinus",()=>{window.useGlobalStoreSus.setState({passengerShared:this.state.value>1?this.state.value-1:this.state.value})});this.state={value:window.useGlobalStoreSus.getState().passengerShared}}componentDidMount(){this.unsubscribe=window.useGlobalStoreSus.subscribe(t=>{this.setState({value:t.passengerShared})})}componentWillUnmount(){this.unsubscribe&&this.unsubscribe()}render(){const{name:t}=this.props,{value:s}=this.state;return a.jsxs("div",{className:"",children:[a.jsx("input",{type:"number",value:s,name:t}),a.jsxs("div",{className:"wrapperPassenger",children:[a.jsx("button",{className:"passengerButton",type:"button",onClick:this.handleChangeAdd,children:"+"}),a.jsx("button",{className:"passengerButton",type:"button",onClick:this.handleChangeMinus,children:"-"})]})]})}}class _ extends n.Component{constructor(e){super(e),this.state={sharedState:window.useGlobalStoreSus.getState().sharedState,multiplier:window.useGlobalStoreSus.getState().passengerShared,percentage:window.useGlobalStoreSus.getState().percentageShared}}componentDidMount(){this.unsubscribe=window.useGlobalStoreSus.subscribe(e=>{this.setState({sharedState:e.sharedState,multiplier:e.passengerShared,percentage:e.percentageShared})})}componentWillUnmount(){this.unsubscribe&&this.unsubscribe()}roundToTwo(e){return+(Math.round(e+"e+2")+"e-2")}render(){const{name:e}=this.props,{sharedState:t,multiplier:s,percentage:o}=this.state;return a.jsx("div",{className:"myComponent",children:a.jsx("input",{type:"number",value:this.roundToTwo(t*s*(o/100)),name:e})})}}class G extends n.Component{constructor(e){super(e),this.state={sharedState:window.useGlobalStoreSus.getState().sharedState,multiplier:window.useGlobalStoreSus.getState().passengerShared,percentage:100-window.useGlobalStoreSus.getState().percentageShared}}componentDidMount(){this.unsubscribe=window.useGlobalStoreSus.subscribe(e=>{this.setState({sharedState:e.sharedState,multiplier:e.passengerShared,percentage:100-e.percentageShared})})}componentWillUnmount(){this.unsubscribe&&this.unsubscribe()}roundToTwo(e){return+(Math.round(e+"e+2")+"e-2")}render(){const{name:e}=this.props,{sharedState:t,multiplier:s,percentage:o}=this.state;return a.jsx("div",{className:"myComponent",children:a.jsx("input",{type:"number",value:this.roundToTwo(t*s*(o/100)),name:e})})}}r.Passenger=j,r.Price=y,r.PriceMultiplier=x,r.SubFieldPrice=_,r.SubFieldSubPrice=G,r.WrapperComponentRange=C,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
