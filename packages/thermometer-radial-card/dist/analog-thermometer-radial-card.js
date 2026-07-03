function t(t,e,i,s){var r,n=arguments.length,a=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(i,t,s)},o=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:d,getPrototypeOf:f}=Object,g=globalThis,p=g.trustedTypes,b=p?p.emptyScript:"",m=g.reactiveElementPolyfillSupport,$=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!l(t,e),k={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=k){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??k}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...u(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??y)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[$("elementProperties")]=new Map,v[$("finalized")]=new Map,m?.({ReactiveElement:v}),(g.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,w=t=>t,x=A.trustedTypes,E=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,z=`<${P}>`,M=document,U=()=>M.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,T="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,H=/>/g,R=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,L=/"/g,I=/^(?:script|style|textarea|title)$/i,V=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),q=V(1),B=V(2),W=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),G=new WeakMap,J=M.createTreeWalker(M,129);function Z(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",a=j;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===j?"!--"===l[1]?a=N:void 0!==l[1]?a=H:void 0!==l[2]?(I.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=R):void 0!==l[3]&&(a=R):a===R?">"===l[0]?(a=r??j,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?R:'"'===l[3]?L:F):a===L||a===F?a=R:a===N||a===H?a=j:(a=R,r=void 0);const u=a===R&&t[e+1].startsWith("/>")?" ":"";n+=a===j?i+z:c>=0?(s.push(o),i.slice(0,c)+S+i.slice(c)+C+u):i+C+(-2===c?e:u)}return[Z(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const a=t.length-1,o=this.parts,[l,c]=Y(t,e);if(this.el=Q.createElement(l,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=J.nextNode())&&o.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=c[n++],i=s.getAttribute(t).split(C),a=/([.?@])?(.*)/.exec(e);o.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?st:"?"===a[1]?rt:"@"===a[1]?nt:it}),s.removeAttribute(t)}else t.startsWith(C)&&(o.push({type:6,index:r}),s.removeAttribute(t));if(I.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],U()),J.nextNode(),o.push({type:2,index:++r});s.append(t[e],U())}}}else if(8===s.nodeType)if(s.data===P)o.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)o.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,s){if(e===W)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=O(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,s)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??M).importNode(e,!0);J.currentNode=s;let r=J.nextNode(),n=0,a=0,o=i[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new et(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new at(r,this,t)),this._$AV.push(e),o=i[++a]}n!==o?.index&&(r=J.nextNode(),n++)}return J.currentNode=M,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),O(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Q.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new tt(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Q(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new et(this.O(U()),this.O(U()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=X(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const s=t;let a,o;for(t=r[0],a=0;a<r.length-1;a++)o=X(this,s[i+a],e,a),o===W&&(o=this._$AH[a]),n||=!O(o)||o!==this._$AH[a],o===K?t=K:t!==K&&(t+=(o??"")+r[a+1]),this._$AH[a]=o}n&&!s&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class rt extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class nt extends it{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??K)===W)return;const i=this._$AH,s=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==K&&(i===K||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const ot=A.litHtmlPolyfillSupport;ot?.(Q,et),(A.litHtmlVersions??=[]).push("3.3.3");const lt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ct=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new et(e.insertBefore(U(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};ct._$litElement$=!0,ct.finalized=!0,lt.litElementHydrateSupport?.({LitElement:ct});const ht=lt.litElementPolyfillSupport;ht?.({LitElement:ct}),(lt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:y},ft=(t=dt,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(t){return(e,i)=>"object"==typeof i?ft(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return gt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=1;class mt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends mt{constructor(t){if(super(t),t.type!==bt||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return W}});function _t(t,e,i,s){const r=(s-90)*Math.PI/180;return{x:t+i*Math.cos(r),y:e+i*Math.sin(r)}}function yt(t,e,i,s,r){const n=_t(t,e,i,s),a=_t(t,e,i,r),o=r-s<=180?0:1;return`M ${n.x} ${n.y} A ${i} ${i} 0 ${o} 1 ${a.x} ${a.y}`}function kt(t,e,i,s){if(i<=e)return s.startAngle;let r;if(s.wrap){const s=i-e;r=((t-e)%s+s)%s/s}else{r=(Math.min(i,Math.max(e,t))-e)/(i-e)}return s.startAngle+r*s.sweepAngle}function vt(t,e,i,s,r){return function(t,e,i,s){if(i<=0||s<=0||e<=t)return[];const r=[],n=s/1e3;for(let a=t;a<=e+n;a+=s){const t=Math.round(a/s)*s,e=Math.abs(t/i-Math.round(t/i))<n;r.push({value:t,major:e})}return r}(t,e,i,s).map(i=>({...i,angle:kt(i.value,t,e,r)}))}const At=[{value:"classic",label:"Classic"},{value:"silver",label:"Silver"},{value:"dark",label:"Dark"},{value:"light",label:"Light"},{value:"led-backlit",label:"LED Backlit"},{value:"fluorescent",label:"Fluorescent"},{value:"futuristic",label:"Futuristic"}];function wt(t){return{name:t,selector:{text:{}}}}function xt(t,e){return{name:t,selector:{number:{...e,mode:"box"}}}}function Et(t,e){return{name:t,selector:{select:{mode:"dropdown",options:e}}}}function St(t,e,i){const s=t-e;return Math.abs(s)<i?"steady":s>0?"rising":"falling"}class Ct{constructor(t,e,i=3e5){this.storageKeyPrefix=t,this.convert=e,this.throttleMs=i,this.cache=null,this.cachedEntityId=null,this.inFlight=null}storageKey(t){return`${this.storageKeyPrefix}${t}`}getCached(t){return this.cachedEntityId!==t&&(this.cachedEntityId=t,this.cache=function(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):null}catch{return null}}(this.storageKey(t))),this.cache}shouldFetch(t){const e=this.getCached(t);return!e||Date.now()-e.fetchedAt>this.throttleMs}update(t,e,i,s,r,n,a,o){const l=this.getCached(e);return this.inFlight||!this.shouldFetch(e)||(this.inFlight=async function(t,e,i){const s=`history/period/${new Date(Date.now()-36e5*i).toISOString()}?filter_entity_id=${encodeURIComponent(e)}&minimal_response&no_attributes`,r=await t.callApi("GET",s),n=r?.[0];if(!n?.length)return null;const a=n[0],o=a.state??a.s;if(void 0===o)return null;const l=parseFloat(o);return Number.isFinite(l)?l:null}(t,e,n).then(t=>{if(null===t)return{direction:"unknown",pastValueDisplay:null,fetchedAt:Date.now()};const e=this.convert(t,s,r);return{direction:St(i,e,a),pastValueDisplay:e,fetchedAt:Date.now()}}).catch(()=>({direction:l?.direction??"unknown",pastValueDisplay:l?.pastValueDisplay??null,fetchedAt:Date.now()})).then(t=>(this.cache=t,function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}(this.storageKey(e),t),this.inFlight=null,o?.(t),t))),l}}const Pt=a`
  .style-classic {
    --gauge-bezel-fill: #cfc3a5;
    --gauge-bezel-stroke: #7a6a45;
    --gauge-face-fill: #f2e9d0;
    --gauge-face-stroke: #b8aa80;
    --gauge-tick-stroke: #4a4232;
    --gauge-tick-filter: none;
    --gauge-tick-major-filter: none;
    --gauge-tick-label-fill: #3a3426;
    --gauge-tick-label-filter: none;
    --gauge-zone-label-fill: #2b2b2b;
    --gauge-hub-fill: #333;
    --gauge-hub-stroke: #111;
    --gauge-trend-marker-stroke: #555;
    --gauge-needle-filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.4));
  }

  /* Silver: brushed-metal gradients standing in for a real chrome case. */
  .style-silver {
    --gauge-bezel-fill: url(#gauge-silver-bezel);
    --gauge-bezel-stroke: #7a7a7a;
    --gauge-face-fill: url(#gauge-silver-face);
    --gauge-face-stroke: #9a9a9a;
    --gauge-tick-stroke: #2b2b2b;
    --gauge-tick-filter: none;
    --gauge-tick-major-filter: none;
    --gauge-tick-label-fill: #202020;
    --gauge-tick-label-filter: none;
    --gauge-zone-label-fill: #1a1a1a;
    --gauge-hub-fill: #3a3a3a;
    --gauge-hub-stroke: #111;
    --gauge-trend-marker-stroke: #444;
    --gauge-needle-filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.4));
  }

  /* Dark: charcoal face for dark dashboards, no glow. */
  .style-dark {
    --gauge-bezel-fill: #2b2b2e;
    --gauge-bezel-stroke: #111113;
    --gauge-face-fill: #1c1c1f;
    --gauge-face-stroke: #000;
    --gauge-tick-stroke: #d8d8d8;
    --gauge-tick-filter: none;
    --gauge-tick-major-filter: none;
    --gauge-tick-label-fill: #e8e8e8;
    --gauge-tick-label-filter: none;
    --gauge-zone-label-fill: #f0f0f0;
    --gauge-hub-fill: #111;
    --gauge-hub-stroke: #555;
    --gauge-trend-marker-stroke: #bbb;
    --gauge-needle-filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.4));
  }

  /* Light: clean, minimal, high-key face. */
  .style-light {
    --gauge-bezel-fill: #f5f5f5;
    --gauge-bezel-stroke: #cfcfcf;
    --gauge-face-fill: #ffffff;
    --gauge-face-stroke: #e0e0e0;
    --gauge-tick-stroke: #666;
    --gauge-tick-filter: none;
    --gauge-tick-major-filter: none;
    --gauge-tick-label-fill: #444;
    --gauge-tick-label-filter: none;
    --gauge-zone-label-fill: #333;
    --gauge-hub-fill: #555;
    --gauge-hub-stroke: #333;
    --gauge-trend-marker-stroke: #999;
    --gauge-needle-filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.4));
  }

  /* LED backlit: black face, glowing cyan ticks like a backlit gauge. */
  .style-led-backlit {
    --gauge-bezel-fill: #0a0a0c;
    --gauge-bezel-stroke: #000;
    --gauge-face-fill: #05070a;
    --gauge-face-stroke: #000;
    --gauge-tick-stroke: #35d0ff;
    --gauge-tick-filter: drop-shadow(0 0 2px #35d0ff);
    --gauge-tick-major-filter: none;
    --gauge-tick-label-fill: #a8ecff;
    --gauge-tick-label-filter: drop-shadow(0 0 1px #35d0ff);
    --gauge-zone-label-fill: #cdf5ff;
    --gauge-hub-fill: #111;
    --gauge-hub-stroke: #35d0ff;
    --gauge-trend-marker-stroke: #35d0ff;
    --gauge-needle-filter: drop-shadow(0 0 3px #ff4d4d) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.6));
  }

  /* Fluorescent: old radium-dial glow-in-the-dark look. */
  .style-fluorescent {
    --gauge-bezel-fill: #2e2b1a;
    --gauge-bezel-stroke: #1a1810;
    --gauge-face-fill: #1c1f14;
    --gauge-face-stroke: #0e0f0a;
    --gauge-tick-stroke: #baff29;
    --gauge-tick-filter: drop-shadow(0 0 2px #baff29);
    --gauge-tick-major-filter: none;
    --gauge-tick-label-fill: #d4ff7a;
    --gauge-tick-label-filter: drop-shadow(0 0 1px #baff29);
    --gauge-zone-label-fill: #e8ffb0;
    --gauge-hub-fill: #232316;
    --gauge-hub-stroke: #baff29;
    --gauge-trend-marker-stroke: #baff29;
    --gauge-needle-filter: drop-shadow(0 0 3px #baff29) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.6));
  }

  /* Futuristic: dark face with neon cyan/magenta accents. */
  .style-futuristic {
    --gauge-bezel-fill: #10141c;
    --gauge-bezel-stroke: #00e5ff;
    --gauge-face-fill: #0b0e14;
    --gauge-face-stroke: #131a24;
    --gauge-tick-stroke: #00e5ff;
    --gauge-tick-filter: none;
    --gauge-tick-major-filter: drop-shadow(0 0 2px #00e5ff);
    --gauge-tick-label-fill: #7df9ff;
    --gauge-tick-label-filter: none;
    --gauge-zone-label-fill: #c7fbff;
    --gauge-hub-fill: #0b0e14;
    --gauge-hub-stroke: #ff2fd0;
    --gauge-trend-marker-stroke: #ff2fd0;
    --gauge-needle-filter: drop-shadow(0 0 3px #ff2fd0) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.6));
  }
`;a`
  .style-classic {
    --tube-backing-fill: #f2e9d0;
    --tube-backing-stroke: #b8aa80;
    --tube-glass-fill: rgba(255, 255, 255, 0.25);
    --tube-glass-stroke: #7a6a45;
    --tube-tick-stroke: #4a4232;
    --tube-tick-filter: none;
    --tube-tick-label-fill: #3a3426;
    --tube-liquid-filter: none;
  }

  .style-silver {
    --tube-backing-fill: url(#gauge-silver-face);
    --tube-backing-stroke: #9a9a9a;
    --tube-glass-fill: rgba(255, 255, 255, 0.35);
    --tube-glass-stroke: #7a7a7a;
    --tube-tick-stroke: #2b2b2b;
    --tube-tick-filter: none;
    --tube-tick-label-fill: #202020;
    --tube-liquid-filter: none;
  }

  .style-dark {
    --tube-backing-fill: #1c1c1f;
    --tube-backing-stroke: #000;
    --tube-glass-fill: rgba(255, 255, 255, 0.08);
    --tube-glass-stroke: #111113;
    --tube-tick-stroke: #d8d8d8;
    --tube-tick-filter: none;
    --tube-tick-label-fill: #e8e8e8;
    --tube-liquid-filter: none;
  }

  .style-light {
    --tube-backing-fill: #ffffff;
    --tube-backing-stroke: #e0e0e0;
    --tube-glass-fill: rgba(255, 255, 255, 0.4);
    --tube-glass-stroke: #cfcfcf;
    --tube-tick-stroke: #666;
    --tube-tick-filter: none;
    --tube-tick-label-fill: #444;
    --tube-liquid-filter: none;
  }

  .style-led-backlit {
    --tube-backing-fill: #05070a;
    --tube-backing-stroke: #000;
    --tube-glass-fill: rgba(53, 208, 255, 0.08);
    --tube-glass-stroke: #000;
    --tube-tick-stroke: #35d0ff;
    --tube-tick-filter: drop-shadow(0 0 2px #35d0ff);
    --tube-tick-label-fill: #a8ecff;
    --tube-liquid-filter: drop-shadow(0 0 3px #ff4d4d);
  }

  .style-fluorescent {
    --tube-backing-fill: #1c1f14;
    --tube-backing-stroke: #0e0f0a;
    --tube-glass-fill: rgba(186, 255, 41, 0.08);
    --tube-glass-stroke: #1a1810;
    --tube-tick-stroke: #baff29;
    --tube-tick-filter: drop-shadow(0 0 2px #baff29);
    --tube-tick-label-fill: #d4ff7a;
    --tube-liquid-filter: drop-shadow(0 0 3px #baff29);
  }

  .style-futuristic {
    --tube-backing-fill: #0b0e14;
    --tube-backing-stroke: #131a24;
    --tube-glass-fill: rgba(0, 229, 255, 0.08);
    --tube-glass-stroke: #00e5ff;
    --tube-tick-stroke: #00e5ff;
    --tube-tick-filter: none;
    --tube-tick-label-fill: #7df9ff;
    --tube-liquid-filter: drop-shadow(0 0 3px #ff2fd0);
  }
`;const zt="analog-thermometer-radial-card",Mt="analog-thermometer-radial-card-editor",Ut={classic:"#333333",silver:"#222222",dark:"#e8e8e8",light:"#333333","led-backlit":"#ff4d4d",fluorescent:"#baff29",futuristic:"#ff2fd0"},Ot={startAngle:-135,sweepAngle:270},Dt=[{key:"freezing",label:"Freezing",from:-20,to:0,color:"#2471a3"},{key:"cold",label:"Cold",from:0,to:15,color:"#5dade2"},{key:"comfortable",label:"Comfortable",from:15,to:25,color:"#4a7a3c"},{key:"warm",label:"Warm",from:25,to:32,color:"#c9a227"},{key:"hot",label:"Hot",from:32,to:45,color:"#b5651d"}],Tt={"°C":{major:10,minor:2},"°F":{major:20,minor:5}};function jt(t){return 9*t/5+32}function Nt(t,e){return"°F"===e?jt(t):t}function Ht(t,e,i){return e===i?t:Nt(function(t,e){return"°F"===e?function(t){return 5*(t-32)/9}(t):t}(t,e),i)}function Rt(t,e){const i=t.states[e]?.attributes?.unit_of_measurement;return i&&i.toLowerCase().includes("f")?"°F":"°C"}const Ft=100;function Lt(t){const{min:e,max:i,unit:s,value:r,pastValue:n,needleColor:a}=t;return B`
    <svg viewBox="0 0 200 200" class="dial" role="img" aria-label="Thermometer dial">
      <defs>${B`
    <radialGradient id="gauge-silver-face" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#fdfdfd" />
      <stop offset="55%" stop-color="#d8d8d8" />
      <stop offset="100%" stop-color="#a8a8a8" />
    </radialGradient>
    <linearGradient id="gauge-silver-bezel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f2f2f2" />
      <stop offset="25%" stop-color="#bdbdbd" />
      <stop offset="50%" stop-color="#e8e8e8" />
      <stop offset="75%" stop-color="#9c9c9c" />
      <stop offset="100%" stop-color="#e0e0e0" />
    </linearGradient>
  `}</defs>
      <circle cx=${Ft} cy=${Ft} r="97" class="bezel" />
      <circle cx=${Ft} cy=${Ft} r="90" class="face" />
      ${function(t,e,i){return Dt.map(s=>{const r=Nt(s.from,i),n=Nt(s.to,i);if(n<=t||r>=e)return B``;const a=kt(r,t,e,Ot),o=kt(n,t,e,Ot);if(o<=a)return B``;const l=yt(Ft,Ft,86,a,o);return B`<path
      d=${l}
      stroke=${s.color}
      stroke-width=${9}
      fill="none"
    />`})}(e,i,s)}
      ${function(t,e,i){const{major:s,minor:r}=Tt[i];return vt(t,e,s,r,Ot).map(t=>{const e=t.major?8:4,i=_t(Ft,Ft,72-e,t.angle),s=_t(Ft,Ft,72,t.angle),r=B`<line
      x1=${i.x} y1=${i.y} x2=${s.x} y2=${s.y}
      class=${t.major?"tick tick-major":"tick tick-minor"}
    />`;if(!t.major)return r;const n=_t(Ft,Ft,50,t.angle),a=B`<text x=${n.x} y=${n.y} class="tick-label" text-anchor="middle" dominant-baseline="middle">${Math.round(10*t.value)/10}</text>`;return B`${r}${a}`})}(e,i,s)}
      ${function(t,e,i){return Dt.map(s=>{const r=Math.max(Nt(s.from,i),t),n=Math.min(Nt(s.to,i),e);if(n<=r)return B``;const a=kt(r,t,e,Ot),o=kt(n,t,e,Ot),l=`zone-label-path-${s.key}`,c=yt(Ft,Ft,77,a,o);return B`
      <path id=${l} d=${c} fill="none" stroke="none" />
      <text class="zone-label" dominant-baseline="middle">
        <textPath href=${"#"+l} startOffset="50%" text-anchor="middle">${s.label}</textPath>
      </text>
    `})}(e,i,s)}
      ${function(t,e,i){if(null===t)return B``;const s=kt(t,e,i,Ot),r=_t(Ft,Ft,88,s),n=_t(Ft,Ft,95,s);return B`<line
    x1=${r.x} y1=${r.y} x2=${n.x} y2=${n.y}
    class="trend-marker"
  />`}(n,e,i)}
      ${function(t,e,i,s){if(null===t)return B``;const r=kt(t,e,i,Ot);return B`<g class="needle" transform="rotate(${r} ${Ft} ${Ft})">
    <polygon
      points="${Ft},${38} ${97},${114} ${103},${114}"
      fill=${s}
    />
  </g>`}(r,e,i,a)}
      <circle cx=${Ft} cy=${Ft} r="6" class="hub" />
    </svg>
  `}const It=[(Vt="sensor",{name:"entity",selector:{entity:{domain:Vt}}}),wt("name"),Et("unit",[{value:"auto",label:"Auto-detect"},{value:"°C",label:"°C"},{value:"°F",label:"°F"}]),xt("trend_hours",{min:1,max:12,step:1}),xt("trend_threshold",{min:0,step:.1}),Et("face_style",At),wt("needle_color")];var Vt;const qt=(Bt={entity:"Temperature sensor entity",name:"Name (optional)",unit:"Display unit",trend_hours:"Trend lookback (hours)",trend_threshold:"Trend threshold",face_style:"Face style",needle_color:"Needle color (optional, overrides face style default)"},t=>Bt[t.name]??t.name);var Bt;let Wt=class extends ct{setConfig(t){this._config=t}render(){return this.hass&&this._config?q`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${It}
        .computeLabel=${qt}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:q``}_valueChanged(t){!function(t,e,i={},s={}){const r=new CustomEvent(e,{bubbles:s.bubbles??!0,cancelable:s.cancelable??!1,composed:s.composed??!0,detail:i});t.dispatchEvent(r)}(this,"config-changed",{config:t.detail.value})}};t([gt({attribute:!1})],Wt.prototype,"hass",void 0),t([pt()],Wt.prototype,"_config",void 0),Wt=t([ut(Mt)],Wt);const Kt={rising:"↑",falling:"↓",steady:"→",unknown:""},Gt={rising:"Rising",falling:"Falling",steady:"Steady",unknown:""};let Jt=class extends ct{constructor(){super(...arguments),this._trendDirection="unknown",this._pastValueDisplay=null,this._tracker=new Ct("analog-thermometer-radial-card-trend-",Ht,3e5),this._lastEntityUpdate=null}setConfig(t){if(!t.entity)throw new Error("You must specify a temperature sensor entity.");this._config=t}getCardSize(){return 4}static getConfigElement(){return document.createElement(Mt)}static getStubConfig(t){const e=Object.values(t?.states??{}).find(t=>t.entity_id.startsWith("sensor.")&&"temperature"===t.attributes.device_class);return{type:"custom:analog-thermometer-radial-card",entity:e?.entity_id??""}}willUpdate(t){t.has("hass")&&this._maybeUpdateTrend()}_maybeUpdateTrend(){if(!this.hass||!this._config?.entity)return;const t=this.hass.states[this._config.entity];if(!t)return;const e=parseFloat(t.state);if(!Number.isFinite(e))return;const i=Rt(this.hass,this._config.entity),s=this._config.unit??i,r=Ht(e,i,s),n=this._config.trend_hours??3,a=this._config.trend_threshold??("°F"===s?1.8:1);if(this._lastEntityUpdate===t.last_updated)return;this._lastEntityUpdate=t.last_updated;const o=this._tracker.update(this.hass,this._config.entity,r,i,s,n,a,t=>{this._trendDirection=t.direction,this._pastValueDisplay=t.pastValueDisplay});this._trendDirection=o?.direction??"unknown",this._pastValueDisplay=o?.pastValueDisplay??null}render(){if(!this._config||!this.hass)return q``;const t=this.hass.states[this._config.entity];if(!t)return q`<ha-card>
        <div class="warning">Entity not found: ${this._config.entity}</div>
      </ha-card>`;const e=Rt(this.hass,this._config.entity),i=this._config.unit??e,s=parseFloat(t.state),r=Number.isFinite(s),n=r?Ht(s,e,i):null,a="°F"===i?{min:jt(-20),max:jt(45)}:{min:-20,max:45};const o=this._config.min??a.min,l=this._config.max??a.max,c=this._config.face_style??"classic",h=this._config.needle_color||Ut[c],u=this._config.name??t.attributes.friendly_name??this._config.entity;return q`
      <ha-card>
        <div class=${$t({"card-content":!0,[`style-${c}`]:!0})}>
          <div class="title">${u}</div>
          ${Lt({min:o,max:l,unit:i,value:n,pastValue:this._pastValueDisplay,needleColor:h})}
          <div class="readout">
            <span class="value">${r?n.toFixed(1):"--"}</span>
            <span class="unit">${i}</span>
          </div>
          <div class="trend trend-${this._trendDirection}">
            <span class="arrow">${Kt[this._trendDirection]}</span>
            <span class="label">${Gt[this._trendDirection]}</span>
          </div>
        </div>
      </ha-card>
    `}};var Zt;Jt.styles=[Pt,a`
      :host {
        display: block;
      }
      .card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
      }
      .title {
        font-size: 1rem;
        font-weight: 500;
        color: var(--primary-text-color, #212121);
        margin-bottom: 4px;
        text-align: center;
      }
      .warning {
        padding: 16px;
        color: var(--error-color, #db4437);
      }
      .dial {
        width: 100%;
        max-width: 260px;
        height: auto;
      }
      .bezel {
        fill: var(--gauge-bezel-fill);
        stroke: var(--gauge-bezel-stroke);
        stroke-width: 2;
      }
      .face {
        fill: var(--gauge-face-fill);
        stroke: var(--gauge-face-stroke);
        stroke-width: 1;
      }
      .tick {
        stroke: var(--gauge-tick-stroke);
        filter: var(--gauge-tick-filter);
      }
      .tick-major {
        stroke-width: 1.6;
        filter: var(--gauge-tick-major-filter);
      }
      .tick-minor {
        stroke-width: 0.8;
        opacity: 0.7;
      }
      .tick-label {
        font-size: 7px;
        fill: var(--gauge-tick-label-fill);
        filter: var(--gauge-tick-label-filter);
      }
      .zone-label {
        font-size: 6px;
        fill: var(--gauge-zone-label-fill);
        font-weight: 600;
        letter-spacing: 0.3px;
      }
      .needle {
        filter: var(--gauge-needle-filter);
      }
      .hub {
        fill: var(--gauge-hub-fill);
        stroke: var(--gauge-hub-stroke);
        stroke-width: 1;
      }
      .trend-marker {
        stroke: var(--gauge-trend-marker-stroke);
        stroke-width: 1.5;
        opacity: 0.55;
      }
      .readout {
        margin-top: 4px;
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--primary-text-color, #212121);
      }
      .readout .unit {
        font-size: 0.9rem;
        font-weight: 400;
        margin-left: 4px;
        color: var(--secondary-text-color, #727272);
      }
      .trend {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 0.9rem;
        margin-top: 2px;
      }
      .trend-rising {
        color: #c0392b;
      }
      .trend-falling {
        color: #2471a3;
      }
      .trend-steady {
        color: #27633f;
      }
      .trend .arrow {
        font-size: 1.1rem;
        line-height: 1;
      }
    `],t([gt({attribute:!1})],Jt.prototype,"hass",void 0),t([pt()],Jt.prototype,"_config",void 0),t([pt()],Jt.prototype,"_trendDirection",void 0),t([pt()],Jt.prototype,"_pastValueDisplay",void 0),Jt=t([ut(zt)],Jt),Zt={type:zt,name:"Analog Thermometer (Radial)",description:"A classic analog-style radial thermometer dial with temperature trend tracking."},window.customCards=window.customCards||[],window.customCards.push(Zt);export{Jt as AnalogThermometerRadialCard};
