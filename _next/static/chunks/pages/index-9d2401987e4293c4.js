(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5075)}])},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,l=(a=t(7294))&&a.__esModule?a:{default:a},i=t(6273),c=t(387),u=t(7190);var s={};function f(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=c.useRouter(),a=l.default.useMemo((function(){var r=o(i.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?i.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),d=a.href,p=a.as,m=e.children,h=e.replace,v=e.shallow,g=e.scroll,y=e.locale;"string"===typeof m&&(m=l.default.createElement("a",null,m));var b=(r=l.default.Children.only(m))&&"object"===typeof r&&r.ref,x=o(u.useIntersection({rootMargin:"200px"}),2),w=x[0],j=x[1],_=l.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);l.default.useEffect((function(){var e=j&&t&&i.isLocalURL(d),r="undefined"!==typeof y?y:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(n,d,p,{locale:r})}),[p,d,j,y,t,n]);var N={ref:_,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,l,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:a,locale:c,scroll:l}))}(e,n,d,p,h,v,g,y)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var E="undefined"!==typeof y?y:n&&n.locale,S=n&&n.isLocaleDomain&&i.getDomainLocale(p,E,n&&n.locales,n&&n.domainLocales);N.href=S||i.addBasePath(i.addLocale(p,E,n&&n.defaultLocale))}return l.default.cloneElement(r,N)};r.default=d},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!i,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],m=o(a.useState(r?r.current:null),2),h=m[0],v=m[1],g=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=c.get(n):(r=c.get(t),u.push(t));if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return c.set(t,r={id:t,observer:a,elements:o}),r}(t),o=n.id,a=n.observer,l=n.elements;return l.set(e,r),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),c.delete(o);var r=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&u.splice(r,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:t}))}),[n,h,t,d]);return a.useEffect((function(){if(!i&&!d){var e=l.requestIdleCallback((function(){return p(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){r&&v(r.current)}),[r]),[g,d]};var a=t(7294),l=t(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map,u=[]},5075:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return a}});var n=t(5893),o=t(1664),a=!0;r.default=function(e){var r=e.feed;return(0,n.jsx)("div",{className:"mx-5 mt-5 lg:mt-24 max-w-content lg:mx-64",children:(0,n.jsxs)("div",{className:"grid overflow-hidden shadow bg-gray-50 sm:rounded-lg",children:[(0,n.jsxs)("div",{className:"px-4 py-5 sm:px-6",children:[(0,n.jsx)("h3",{className:"text-2xl font-extrabold tracking-tight text-gray-900",children:"Strawhat Pirates"}),(0,n.jsx)("p",{className:"max-w-2xl mt-1 text-sm text-gray-500",children:"List of Strawhat pirate members"})]}),(0,n.jsx)("div",{className:"grid grid-cols-1 m-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4",children:r.map((function(e){return(0,n.jsxs)("div",{className:"relative p-2 group",children:[(0,n.jsx)("div",{className:"w-full overflow-hidden bg-gray-300 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none",children:(0,n.jsx)(o.default,{href:"/members/".concat(e.name.replace(/\s/g,"_")),children:(0,n.jsx)("a",{children:(0,n.jsx)("img",{src:"images/".concat(e.image),alt:e.name,className:"object-cover object-center w-full h-full cursor-pointer lg:w-full lg:h-full"})})})}),(0,n.jsx)("div",{className:"flex p-2",children:(0,n.jsxs)("p",{className:"font-bold tracking-tight text-gray-700 text-md",children:[e.name,"\xa0(",e.position,")"]})})]},e.name)}))})]})})}},1664:function(e,r,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);