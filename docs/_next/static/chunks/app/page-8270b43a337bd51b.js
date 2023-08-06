(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4440:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=s.apply(null,r);i&&e.push(i)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0!==(r=(function(){return s}).apply(t,[]))&&(e.exports=r)}()},4725:function(e,t,r){Promise.resolve().then(r.bind(r,5246))},5246:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(7437),s=r(4434),o=r(2824),i=r(8597),c=r(4911);function a(){return(0,n.jsx)("section",{className:"hero py-5 mb-5",children:(0,n.jsx)(o.Z,{className:"my-5 py-5",children:(0,n.jsx)(i.Z,{children:(0,n.jsx)(s.Z,{lg:6,className:"mx-auto",children:(0,n.jsxs)("p",{className:"hero-text me-lg-5 pe-lg-5 mb-5 mb-lg-0",children:["An MBA is predominately a networking or career change exercise. Across the board, the curriculum is weak and outdated, which follows from most of academia (except cutting-edge criticism). The following"," ",(0,n.jsx)("span",{className:"fw-bold h4",children:c.px})," ","curriculum introduces business principles, the economy, finance, political ramifications, and more through books by or about practitioners."]})})})})})}var l=r(5971);function u(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{}),c.aA.map(e=>(0,n.jsxs)("section",{children:[(0,n.jsx)(o.Z,{children:(0,n.jsx)(i.Z,{children:(0,n.jsx)(s.Z,{children:(0,n.jsx)("h3",{children:e.name})})})}),(0,n.jsx)(l.O,{category:e})]},e.slug))]})}},5971:function(e,t,r){"use strict";r.d(t,{O:function(){return d}});var n=r(7437),s=r(4033),o=r(4434),i=r(2824),c=r(8597),a=r(4440),l=r.n(a);function u(e){let{book:t}=e;t.bestInCategory;let r=l()({book:!0,best:t.bestInCategory,"mb-3":!0});return(0,n.jsxs)("div",{className:r,children:[(0,n.jsxs)("div",{className:"book-cover",children:[(0,n.jsx)("img",{src:t.amazonImageURL,alt:t.title,className:"book-top"}),(0,n.jsx)("img",{src:"/images/book-side.svg",className:"book-side",alt:""})]}),(0,n.jsxs)("div",{className:"preface bg-body-tertiary",children:[(0,n.jsx)("h6",{children:t.title}),(0,n.jsx)("p",{children:t.summary}),(0,n.jsx)("a",{href:t.amazonProductURL,className:"btn btn-primary stretched-link",target:"_blank",children:"BUY"})]})]})}var f=r(250);function d(e){let{category:t}=e,r=(0,f.rP)(t);void 0===r&&(0,s.notFound)();let a=r.map(e=>(0,f.v$)(e));return(0,n.jsx)(i.Z,{children:(0,n.jsx)(c.Z,{children:a.map(e=>(0,n.jsx)(o.Z,{lg:3,children:(0,n.jsx)(u,{book:e})},e.id))})})}},250:function(e,t,r){"use strict";r.d(t,{v$:function(){return i},rP:function(){return o},wx:function(){return s}});var n=r(4911);function s(e){return n.xt[e]}function o(e){return n.dp[e.name]}function i(e){return n.ie[e]}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:u,props:o,_owner:c.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},7437:function(e,t,r){"use strict";e.exports=r(622)},4033:function(e,t,r){e.exports=r(8165)},4434:function(e,t,r){"use strict";var n=r(4440),s=r.n(n),o=r(2265),i=r(7127),c=r(7437);let a=o.forwardRef((e,t)=>{let[{className:r,...n},{as:o="div",bsPrefix:a,spans:l}]=function({as:e,bsPrefix:t,className:r,...n}){t=(0,i.vE)(t,"col");let o=(0,i.pi)(),c=(0,i.zG)(),a=[],l=[];return o.forEach(e=>{let r,s,o;let i=n[e];delete n[e],"object"==typeof i&&null!=i?{span:r,offset:s,order:o}=i:r=i;let u=e!==c?`-${e}`:"";r&&a.push(!0===r?`${t}${u}`:`${t}${u}-${r}`),null!=o&&l.push(`order${u}-${o}`),null!=s&&l.push(`offset${u}-${s}`)}),[{...n,className:s()(r,...a,...l)},{as:e,bsPrefix:t,spans:a}]}(e);return(0,c.jsx)(o,{...n,ref:t,className:s()(r,!l.length&&a)})});a.displayName="Col",t.Z=a},2824:function(e,t,r){"use strict";var n=r(4440),s=r.n(n),o=r(2265),i=r(7127),c=r(7437);let a=o.forwardRef(({bsPrefix:e,fluid:t=!1,as:r="div",className:n,...o},a)=>{let l=(0,i.vE)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,c.jsx)(r,{ref:a,...o,className:s()(n,t?`${l}${u}`:l)})});a.displayName="Container",t.Z=a},8597:function(e,t,r){"use strict";var n=r(4440),s=r.n(n),o=r(2265),i=r(7127),c=r(7437);let a=o.forwardRef(({bsPrefix:e,className:t,as:r="div",...n},o)=>{let a=(0,i.vE)(e,"row"),l=(0,i.pi)(),u=(0,i.zG)(),f=`${a}-cols`,d=[];return l.forEach(e=>{let t;let r=n[e];delete n[e],null!=r&&"object"==typeof r?{cols:t}=r:t=r;let s=e!==u?`-${e}`:"";null!=t&&d.push(`${f}${s}-${t}`)}),(0,c.jsx)(r,{ref:o,...n,className:s()(t,a,...d)})});a.displayName="Row",t.Z=a},7127:function(e,t,r){"use strict";r.d(t,{pi:function(){return a},vE:function(){return c},zG:function(){return l}});var n=r(2265);r(7437);let s=n.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:o,Provider:i}=s;function c(e,t){let{prefixes:r}=(0,n.useContext)(s);return e||r[t]||t}function a(){let{breakpoints:e}=(0,n.useContext)(s);return e}function l(){let{minBreakpoint:e}=(0,n.useContext)(s);return e}}},function(e){e.O(0,[911,971,596,744],function(){return e(e.s=4725)}),_N_E=e.O()}]);