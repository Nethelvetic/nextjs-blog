(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[996],{8199:(e,t)=>{"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_HMR_REFRESH:function(){return c},ACTION_NAVIGATE:function(){return o},ACTION_PREFETCH:function(){return a},ACTION_REFRESH:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_ACTION:function(){return i},ACTION_SERVER_PATCH:function(){return f},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r}});let u="refresh",o="navigate",l="restore",f="server-patch",a="prefetch",c="hmr-refresh",i="server-action";!function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"}(r||(r={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7195:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8337),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8342:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return C}});let n=r(8754),u=r(5893),o=n._(r(7294)),l=r(6075),f=r(3955),a=r(8041),c=r(9903),i=r(5490),s=r(1928),d=r(257),p=r(4229),b=r(7195),y=r(9470),h=r(8199),_=r(2145),v=new Set;function O(e,t,r,n,u,o){if(o||(0,f.isLocalURL)(t)){if(!n.bypassPrefetchedCheck&&!o){let u=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(v.has(u))return;v.add(u)}(async()=>o?e.prefetch(t,u):e.prefetch(t,r,n))().catch(e=>{})}}function g(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let C=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:v,children:C,prefetch:M=null,passHref:j,replace:P,shallow:E,scroll:R,locale:m,onClick:T,onMouseEnter:k,onTouchStart:A,legacyBehavior:x=!1,...I}=e;r=C,x&&("string"==typeof r||"number"==typeof r)&&(r=(0,u.jsx)("a",{children:r}));let L=o.default.useContext(s.RouterContext),S=o.default.useContext(d.AppRouterContext),N=null!=L?L:S,U=!L,w=!1!==M,H=null===M?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:K,as:F}=o.default.useMemo(()=>{if(!L){let e=g(a);return{href:e,as:v?g(v):e}}let[e,t]=(0,l.resolveHref)(L,a,!0);return{href:e,as:v?(0,l.resolveHref)(L,v):t||e}},[L,a,v]),D=o.default.useRef(K),V=o.default.useRef(F);x&&(n=o.default.Children.only(r));let q=x?n&&"object"==typeof n&&n.ref:t,[z,B,G]=(0,p.useIntersection)({rootMargin:"200px"}),Y=o.default.useCallback(e=>{(V.current!==F||D.current!==K)&&(G(),V.current=F,D.current=K),z(e)},[F,K,G,z]),J=(0,_.useMergedRef)(Y,q);o.default.useEffect(()=>{N&&B&&w&&O(N,K,F,{locale:m},{kind:H},U)},[F,K,B,m,w,null==L?void 0:L.locale,N,U,H]);let Q={ref:J,onClick(e){x||"function"!=typeof T||T(e),x&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,r,n,u,l,a,c,i){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i&&!(0,f.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[u?"replace":"push"](r,n,{shallow:l,locale:c,scroll:e}):t[u?"replace":"push"](n||r,{scroll:e})};i?o.default.startTransition(d):d()}(e,N,K,F,P,E,R,m,U)},onMouseEnter(e){x||"function"!=typeof k||k(e),x&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&(w||!U)&&O(N,K,F,{locale:m,priority:!0,bypassPrefetchedCheck:!0},{kind:H},U)},onTouchStart:function(e){x||"function"!=typeof A||A(e),x&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&(w||!U)&&O(N,K,F,{locale:m,priority:!0,bypassPrefetchedCheck:!0},{kind:H},U)}};if((0,c.isAbsoluteUrl)(F))Q.href=F;else if(!x||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==m?m:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&(0,b.getDomainLocale)(F,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);Q.href=t||(0,y.addBasePath)((0,i.addLocale)(F,e,null==L?void 0:L.defaultLocale))}return x?o.default.cloneElement(n,Q):(0,u.jsx)("a",{...I,...Q,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4229:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(7294),u=r(4474),o="function"==typeof IntersectionObserver,l=new Map,f=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,c=a||!o,[i,s]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(c||i)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:u,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=f.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let u=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=u.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:u},f.push(r),l.set(r,t),t}(r);return o.set(e,t),u.observe(e),function(){if(o.delete(e),u.unobserve(e),0===o.size){u.disconnect(),l.delete(n);let e=f.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!i){let e=(0,u.requestIdleCallback)(()=>s(!0));return()=>(0,u.cancelIdleCallback)(e)}},[c,r,t,i,d.current]),[p,i,(0,n.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2145:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return u}});let n=r(7294);function u(e,t){let r=(0,n.useRef)(()=>{}),u=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),u.current()):(r.current=o(e,n),u.current=o(t,n))}:e||t,[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9008:(e,t,r)=>{e.exports=r(3867)},1664:(e,t,r)=>{e.exports=r(8342)}}]);