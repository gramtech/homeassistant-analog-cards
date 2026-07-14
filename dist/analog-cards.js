function t(t,e,i,s){var r,n=arguments.length,a=n<3?e:s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(i,t,s)},o=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:d,getPrototypeOf:f}=Object,g=globalThis,p=g.trustedTypes,b=p?p.emptyScript:"",$=g.reactiveElementPolyfillSupport,m=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!l(t,e),k={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=k){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??k}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...u(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??y)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[m("elementProperties")]=new Map,v[m("finalized")]=new Map,$?.({ReactiveElement:v}),(g.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,w=t=>t,x=A.trustedTypes,E=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,z=`<${P}>`,U=document,M=()=>U.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,T="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,N=/>/g,R=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,F=/"/g,I=/^(?:script|style|textarea|title)$/i,V=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),q=V(1),B=V(2),W=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),G=new WeakMap,J=U.createTreeWalker(U,129);function Z(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}let Y=class t{constructor({strings:e,_$litType$:i},s){let r;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[c,h]=((t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",a=H;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===H?"!--"===l[1]?a=j:void 0!==l[1]?a=N:void 0!==l[2]?(I.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=R):void 0!==l[3]&&(a=R):a===R?">"===l[0]?(a=r??H,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?R:'"'===l[3]?F:L):a===F||a===L?a=R:a===j||a===N?a=H:(a=R,r=void 0);const u=a===R&&t[e+1].startsWith("/>")?" ":"";n+=a===H?i+z:c>=0?(s.push(o),i.slice(0,c)+S+i.slice(c)+C+u):i+C+(-2===c?e:u)}return[Z(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(e,i);if(this.el=t.createElement(c,s),J.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=J.nextNode())&&l.length<o;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(S)){const e=h[a++],i=r.getAttribute(t).split(C),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?it:"?"===s[1]?st:"@"===s[1]?rt:et}),r.removeAttribute(t)}else t.startsWith(C)&&(l.push({type:6,index:n}),r.removeAttribute(t));if(I.test(r.tagName)){const t=r.textContent.split(C),e=t.length-1;if(e>0){r.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],M()),J.nextNode(),l.push({type:2,index:++n});r.append(t[e],M())}}}else if(8===r.nodeType)if(r.data===P)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(C,t+1));)l.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}};function Q(t,e,i=t,s){if(e===W)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=O(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Q(t,r._$AS(t,e.values),r,s)),e}let X=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??U).importNode(e,!0);J.currentNode=s;let r=J.nextNode(),n=0,a=0,o=i[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new tt(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new nt(r,this,t)),this._$AV.push(e),o=i[++a]}n!==o?.index&&(r=J.nextNode(),n++)}return J.currentNode=U,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},tt=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),O(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Y(t)),e}k(e){D(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,r=0;for(const n of e)r===i.length?i.push(s=new t(this.O(M()),this.O(M()),this,this.options)):s=i[r],s._$AI(n),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},et=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Q(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const s=t;let a,o;for(t=r[0],a=0;a<r.length-1;a++)o=Q(this,s[i+a],e,a),o===W&&(o=this._$AH[a]),n||=!O(o)||o!==this._$AH[a],o===K?t=K:t!==K&&(t+=(o??"")+r[a+1]),this._$AH[a]=o}n&&!s&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},it=class extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}},st=class extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}},rt=class extends et{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??K)===W)return;const i=this._$AH,s=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==K&&(i===K||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},nt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}};const at=A.litHtmlPolyfillSupport;at?.(Y,tt),(A.litHtmlVersions??=[]).push("3.3.3");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lt=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new tt(e.insertBefore(M(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};lt._$litElement$=!0,lt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:lt});const ct=ot.litElementPolyfillSupport;ct?.({LitElement:lt}),(ot.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ut={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:y},dt=(t=ut,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(t){return ft({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends pt{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return W}});function $t(t,e,i,s){const r=(s-90)*Math.PI/180;return{x:t+i*Math.cos(r),y:e+i*Math.sin(r)}}function mt(t,e,i,s,r){const n=$t(t,e,i,s),a=$t(t,e,i,r),o=r-s<=180?0:1;return`M ${n.x} ${n.y} A ${i} ${i} 0 ${o} 1 ${a.x} ${a.y}`}function _t(t,e,i,s){if(i<=e)return s.startAngle;let r;if(s.wrap){const s=i-e;r=((t-e)%s+s)%s/s}else r=(Math.min(i,Math.max(e,t))-e)/(i-e);return s.startAngle+r*s.sweepAngle}const yt={small:.8,medium:.9,large:1.05,"x-large":1.2};function kt(t){return{name:t,selector:{text:{}}}}function vt(t,e){return{name:t,selector:{number:{...e,mode:"box"}}}}function At(t,e){return{name:t,selector:{select:{mode:"dropdown",options:e}}}}function wt(t,e,i){const s=t-e;return Math.abs(s)<i?"steady":s>0?"rising":"falling"}let xt=class{constructor(t,e,i=3e5){this.storageKeyPrefix=t,this.convert=e,this.throttleMs=i,this.cache=null,this.cachedEntityId=null,this.inFlight=null}storageKey(t){return`${this.storageKeyPrefix}${t}`}getCached(t){return this.cachedEntityId!==t&&(this.cachedEntityId=t,this.cache=function(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):null}catch{return null}}(this.storageKey(t))),this.cache}shouldFetch(t){const e=this.getCached(t);return!e||Date.now()-e.fetchedAt>this.throttleMs}update(t,e,i,s,r,n,a,o){const l=this.getCached(e);return this.inFlight||!this.shouldFetch(e)||(this.inFlight=async function(t,e,i){const s=`history/period/${new Date(Date.now()-36e5*i).toISOString()}?filter_entity_id=${encodeURIComponent(e)}&minimal_response&no_attributes`,r=await t.callApi("GET",s),n=r?.[0];if(!n?.length)return null;const a=n[0],o=a.state??a.s;if(void 0===o)return null;const l=parseFloat(o);return Number.isFinite(l)?l:null}(t,e,n).then(t=>{if(null===t)return{direction:"unknown",pastValueDisplay:null,fetchedAt:Date.now()};const e=this.convert(t,s,r);return{direction:wt(i,e,a),pastValueDisplay:e,fetchedAt:Date.now()}}).catch(()=>({direction:l?.direction??"unknown",pastValueDisplay:l?.pastValueDisplay??null,fetchedAt:Date.now()})).then(t=>(this.cache=t,function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}(this.storageKey(e),t),this.inFlight=null,o?.(t),t))),l}};const Et=a`
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
`;const St="analog-barometer-card",Ct="analog-barometer-card-editor",Pt={classic:"#333333",silver:"#222222",dark:"#e8e8e8",light:"#333333","led-backlit":"#ff4d4d",fluorescent:"#baff29",futuristic:"#ff2fd0"},zt={startAngle:-135,sweepAngle:270},Ut=[{key:"stormy",label:"Stormy",from:950,to:980,color:"#8b1a1a"},{key:"rain",label:"Rain",from:980,to:1e3,color:"#b5651d"},{key:"change",label:"Change",from:1e3,to:1015,color:"#c9a227"},{key:"fair",label:"Fair",from:1015,to:1030,color:"#4a7a3c"},{key:"v-dry",label:"Very Dry",from:1030,to:1050,color:"#2f5f4f"}],Mt={hPa:{major:10,minor:2},inHg:{major:.5,minor:.1}},Ot=33.8639,Dt=new Set(["inhg","inHg","in"]),Tt=new Set(["hpa","mbar","mb"]);function Ht(t){return t/Ot}function jt(t,e){return"inHg"===e?Ht(t):t}function Nt(t,e,i){return e===i?t:jt(function(t,e){return"inHg"===e?t*Ot:t}(t,e),i)}function Rt(t,e){const i=t.states[e]?.attributes?.unit_of_measurement;if(!i)return"hPa";const s=i.toLowerCase();return Dt.has(s)||s.includes("inhg")?"inHg":(Tt.has(s),"hPa")}const Lt=100;function Ft(t){const{min:e,max:i,unit:s,value:r,pastValue:n,needleColor:a}=t;return B`
    <svg viewBox="0 0 200 200" class="dial" role="img" aria-label="Barometer dial">
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
      <circle cx=${Lt} cy=${Lt} r="97" class="bezel" />
      <circle cx=${Lt} cy=${Lt} r="90" class="face" />
      ${function(t,e,i){return Ut.map(s=>{const r=jt(s.from,i),n=jt(s.to,i);if(n<=t||r>=e)return B``;const a=_t(r,t,e,zt),o=_t(n,t,e,zt);if(o<=a)return B``;const l=mt(Lt,Lt,86,a,o);return B`<path
      d=${l}
      stroke=${s.color}
      stroke-width=${9}
      fill="none"
    />`})}(e,i,s)}
      ${function(t,e,i){const{major:s,minor:r}=Mt[i];return function(t,e,i,s,r){return function(t,e,i,s){if(i<=0||s<=0||e<=t)return[];const r=[],n=s/1e3;for(let a=t;a<=e+n;a+=s){const t=Math.round(a/s)*s,e=Math.abs(t/i-Math.round(t/i))<n;r.push({value:t,major:e})}return r}(t,e,i,s).map(i=>({...i,angle:_t(i.value,t,e,r)}))}(t,e,s,r,zt).map(t=>{const e=t.major?8:4,i=$t(Lt,Lt,72-e,t.angle),s=$t(Lt,Lt,72,t.angle),r=B`<line
      x1=${i.x} y1=${i.y} x2=${s.x} y2=${s.y}
      class=${t.major?"tick tick-major":"tick tick-minor"}
    />`;if(!t.major)return r;const n=$t(Lt,Lt,50,t.angle),a=B`<text x=${n.x} y=${n.y} class="tick-label" text-anchor="middle" dominant-baseline="middle">${Math.round(10*t.value)/10}</text>`;return B`${r}${a}`})}(e,i,s)}
      ${function(t,e,i){return Ut.map(s=>{const r=Math.max(jt(s.from,i),t),n=Math.min(jt(s.to,i),e);if(n<=r)return B``;const a=_t(r,t,e,zt),o=_t(n,t,e,zt),l=`zone-label-path-${s.key}`,c=mt(Lt,Lt,77,a,o);return B`
      <path id=${l} d=${c} fill="none" stroke="none" />
      <text class="zone-label" dominant-baseline="middle">
        <textPath href=${"#"+l} startOffset="50%" text-anchor="middle">${s.label}</textPath>
      </text>
    `})}(e,i,s)}
      ${function(t,e,i){if(null===t)return B``;const s=_t(t,e,i,zt),r=$t(Lt,Lt,88,s),n=$t(Lt,Lt,95,s);return B`<line
    x1=${r.x} y1=${r.y} x2=${n.x} y2=${n.y}
    class="trend-marker"
  />`}(n,e,i)}
      ${function(t,e,i,s){if(null===t)return B``;const r=_t(t,e,i,zt);return B`<g class="needle" transform="rotate(${r} ${Lt} ${Lt})">
    <polygon
      points="${Lt},${38} ${97},${114} ${103},${114}"
      fill=${s}
    />
  </g>`}(r,e,i,a)}
      <circle cx=${Lt} cy=${Lt} r="6" class="hub" />
    </svg>
  `}const It=[{name:"entity",selector:{entity:{domain:"sensor"}}},kt("name"),At("unit",[{value:"auto",label:"Auto-detect"},{value:"hPa",label:"hPa"},{value:"inHg",label:"inHg"}]),vt("trend_hours",{min:1,max:12,step:1}),vt("trend_threshold",{min:0,step:.1}),At("trend_text_size",[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"},{value:"x-large",label:"Extra large"}]),At("face_style",[{value:"classic",label:"Classic"},{value:"silver",label:"Silver"},{value:"dark",label:"Dark"},{value:"light",label:"Light"},{value:"led-backlit",label:"LED Backlit"},{value:"fluorescent",label:"Fluorescent"},{value:"futuristic",label:"Futuristic"}]),kt("needle_color")];const Vt=(qt={entity:"Pressure sensor entity",name:"Name (optional)",unit:"Display unit",trend_hours:"Trend lookback (hours)",trend_threshold:"Trend threshold",trend_text_size:"Trend text size",face_style:"Face style",needle_color:"Needle color (optional, overrides face style default)"},t=>qt[t.name]??t.name);var qt;let Bt=class extends lt{setConfig(t){this._config=t}render(){return this.hass&&this._config?q`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${It}
        .computeLabel=${Vt}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:q``}_valueChanged(t){!function(t,e,i={},s={}){const r=new CustomEvent(e,{bubbles:s.bubbles??!0,cancelable:s.cancelable??!1,composed:s.composed??!0,detail:i});t.dispatchEvent(r)}(this,"config-changed",{config:t.detail.value})}};t([ft({attribute:!1})],Bt.prototype,"hass",void 0),t([gt()],Bt.prototype,"_config",void 0),Bt=t([ht(Ct)],Bt);const Wt={rising:"↑",falling:"↓",steady:"→",unknown:""},Kt={rising:"Rising",falling:"Falling",steady:"Steady",unknown:""};let Gt=class extends lt{constructor(){super(...arguments),this._trendDirection="unknown",this._pastValueDisplay=null,this._tracker=new xt("analog-barometer-card-trend-",Nt,3e5),this._lastEntityUpdate=null}setConfig(t){if(!t.entity)throw new Error("You must specify a pressure sensor entity.");this._config=t}getCardSize(){return 4}static getConfigElement(){return document.createElement(Ct)}static getStubConfig(t){const e=Object.values(t?.states??{}).find(t=>t.entity_id.startsWith("sensor.")&&"atmospheric_pressure"===t.attributes.device_class);return{type:"custom:analog-barometer-card",entity:e?.entity_id??""}}willUpdate(t){t.has("hass")&&this._maybeUpdateTrend()}_maybeUpdateTrend(){if(!this.hass||!this._config?.entity)return;const t=this.hass.states[this._config.entity];if(!t)return;const e=parseFloat(t.state);if(!Number.isFinite(e))return;const i=Rt(this.hass,this._config.entity),s=this._config.unit??i,r=Nt(e,i,s),n=this._config.trend_hours??3,a=this._config.trend_threshold??("inHg"===s?Ht(1.5):1.5);if(this._lastEntityUpdate===t.last_updated)return;this._lastEntityUpdate=t.last_updated;const o=this._tracker.update(this.hass,this._config.entity,r,i,s,n,a,t=>{this._trendDirection=t.direction,this._pastValueDisplay=t.pastValueDisplay});this._trendDirection=o?.direction??"unknown",this._pastValueDisplay=o?.pastValueDisplay??null}render(){if(!this._config||!this.hass)return q``;const t=this.hass.states[this._config.entity];if(!t)return q`<ha-card>
        <div class="warning">Entity not found: ${this._config.entity}</div>
      </ha-card>`;const e=Rt(this.hass,this._config.entity),i=this._config.unit??e,s=parseFloat(t.state),r=Number.isFinite(s),n=r?Nt(s,e,i):null,a="inHg"===i?{min:Ht(950),max:Ht(1050)}:{min:950,max:1050},o=this._config.min??a.min,l=this._config.max??a.max,c=this._config.face_style??"classic",h=this._config.needle_color||Pt[c],u=this._config.name??t.attributes.friendly_name??this._config.entity,d=yt[this._config.trend_text_size??"large"];return q`
      <ha-card>
        <div class=${bt({"card-content":!0,[`style-${c}`]:!0})}>
          <div class="title">${u}</div>
          ${Ft({min:o,max:l,unit:i,value:n,pastValue:this._pastValueDisplay,needleColor:h})}
          <div class="readout">
            <span class="value">${r?n.toFixed(1):"--"}</span>
            <span class="unit">${i}</span>
          </div>
          <div class="trend trend-${this._trendDirection}" style="font-size: ${d}rem">
            <span class="arrow">${Wt[this._trendDirection]}</span>
            <span class="label">${Kt[this._trendDirection]}</span>
          </div>
        </div>
      </ha-card>
    `}};var Jt;function Zt(t,e,i,s){var r,n=arguments.length,a=n<3?e:s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}Gt.styles=[Et,a`
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
        font-size: 1.2em;
        line-height: 1;
      }
    `],t([ft({attribute:!1})],Gt.prototype,"hass",void 0),t([gt()],Gt.prototype,"_config",void 0),t([gt()],Gt.prototype,"_trendDirection",void 0),t([gt()],Gt.prototype,"_pastValueDisplay",void 0),Gt=t([ht(St)],Gt),Jt={type:St,name:"Analog Barometer",preview:!1,description:"A classic analog-style barometer with pressure trend tracking."},window.customCards=window.customCards||[],window.customCards.push(Jt),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Yt=globalThis,Qt=Yt.ShadowRoot&&(void 0===Yt.ShadyCSS||Yt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xt=Symbol(),te=new WeakMap;let ee=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Xt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Qt&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=te.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&te.set(e,t))}return t}toString(){return this.cssText}};const ie=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new ee(i,t,Xt)},se=Qt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new ee("string"==typeof t?t:t+"",void 0,Xt))(e)})(t):t,{is:re,defineProperty:ne,getOwnPropertyDescriptor:ae,getOwnPropertyNames:oe,getOwnPropertySymbols:le,getPrototypeOf:ce}=Object,he=globalThis,ue=he.trustedTypes,de=ue?ue.emptyScript:"",fe=he.reactiveElementPolyfillSupport,ge=(t,e)=>t,pe={toAttribute(t,e){switch(e){case Boolean:t=t?de:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},be=(t,e)=>!re(t,e),$e={attribute:!0,type:String,converter:pe,reflect:!1,useDefault:!1,hasChanged:be};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),he.litPropertyMetadata??=new WeakMap;let me=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$e){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&ne(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=ae(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$e}static _$Ei(){if(this.hasOwnProperty(ge("elementProperties")))return;const t=ce(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ge("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ge("properties"))){const t=this.properties,e=[...oe(t),...le(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(se(t))}else void 0!==t&&e.push(se(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(Qt)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=Yt.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:pe).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:pe;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??be)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};me.elementStyles=[],me.shadowRootOptions={mode:"open"},me[ge("elementProperties")]=new Map,me[ge("finalized")]=new Map,fe?.({ReactiveElement:me}),(he.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _e=globalThis,ye=t=>t,ke=_e.trustedTypes,ve=ke?ke.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ae="$lit$",we=`lit$${Math.random().toFixed(9).slice(2)}$`,xe="?"+we,Ee=`<${xe}>`,Se=document,Ce=()=>Se.createComment(""),Pe=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ze=Array.isArray,Ue="[ \t\n\f\r]",Me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oe=/-->/g,De=/>/g,Te=RegExp(`>|${Ue}(?:([^\\s"'>=/]+)(${Ue}*=${Ue}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),He=/'/g,je=/"/g,Ne=/^(?:script|style|textarea|title)$/i,Re=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Le=Re(1),Fe=Re(2),Ie=Symbol.for("lit-noChange"),Ve=Symbol.for("lit-nothing"),qe=new WeakMap,Be=Se.createTreeWalker(Se,129);function We(t,e){if(!ze(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ve?ve.createHTML(e):e}let Ke=class t{constructor({strings:e,_$litType$:i},s){let r;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[c,h]=((t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",a=Me;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===Me?"!--"===l[1]?a=Oe:void 0!==l[1]?a=De:void 0!==l[2]?(Ne.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=Te):void 0!==l[3]&&(a=Te):a===Te?">"===l[0]?(a=r??Me,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?Te:'"'===l[3]?je:He):a===je||a===He?a=Te:a===Oe||a===De?a=Me:(a=Te,r=void 0);const u=a===Te&&t[e+1].startsWith("/>")?" ":"";n+=a===Me?i+Ee:c>=0?(s.push(o),i.slice(0,c)+Ae+i.slice(c)+we+u):i+we+(-2===c?e:u)}return[We(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(e,i);if(this.el=t.createElement(c,s),Be.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=Be.nextNode())&&l.length<o;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(Ae)){const e=h[a++],i=r.getAttribute(t).split(we),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?Qe:"?"===s[1]?Xe:"@"===s[1]?ti:Ye}),r.removeAttribute(t)}else t.startsWith(we)&&(l.push({type:6,index:n}),r.removeAttribute(t));if(Ne.test(r.tagName)){const t=r.textContent.split(we),e=t.length-1;if(e>0){r.textContent=ke?ke.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],Ce()),Be.nextNode(),l.push({type:2,index:++n});r.append(t[e],Ce())}}}else if(8===r.nodeType)if(r.data===xe)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(we,t+1));)l.push({type:7,index:n}),t+=we.length-1}n++}}static createElement(t,e){const i=Se.createElement("template");return i.innerHTML=t,i}};function Ge(t,e,i=t,s){if(e===Ie)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=Pe(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Ge(t,r._$AS(t,e.values),r,s)),e}let Je=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??Se).importNode(e,!0);Be.currentNode=s;let r=Be.nextNode(),n=0,a=0,o=i[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new Ze(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new ei(r,this,t)),this._$AV.push(e),o=i[++a]}n!==o?.index&&(r=Be.nextNode(),n++)}return Be.currentNode=Se,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Ze=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Ve,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ge(this,t,e),Pe(t)?t===Ve||null==t||""===t?(this._$AH!==Ve&&this._$AR(),this._$AH=Ve):t!==this._$AH&&t!==Ie&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>ze(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Ve&&Pe(this._$AH)?this._$AA.nextSibling.data=t:this.T(Se.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Ke.createElement(We(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Je(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=qe.get(t.strings);return void 0===e&&qe.set(t.strings,e=new Ke(t)),e}k(e){ze(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,r=0;for(const n of e)r===i.length?i.push(s=new t(this.O(Ce()),this.O(Ce()),this,this.options)):s=i[r],s._$AI(n),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=ye(t).nextSibling;ye(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},Ye=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=Ve,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ve}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Ge(this,t,e,0),n=!Pe(t)||t!==this._$AH&&t!==Ie,n&&(this._$AH=t);else{const s=t;let a,o;for(t=r[0],a=0;a<r.length-1;a++)o=Ge(this,s[i+a],e,a),o===Ie&&(o=this._$AH[a]),n||=!Pe(o)||o!==this._$AH[a],o===Ve?t=Ve:t!==Ve&&(t+=(o??"")+r[a+1]),this._$AH[a]=o}n&&!s&&this.j(t)}j(t){t===Ve?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Qe=class extends Ye{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ve?void 0:t}},Xe=class extends Ye{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Ve)}},ti=class extends Ye{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Ge(this,t,e,0)??Ve)===Ie)return;const i=this._$AH,s=t===Ve&&i!==Ve||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==Ve&&(i===Ve||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ei=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ge(this,t)}};const ii=_e.litHtmlPolyfillSupport;ii?.(Ke,Ze),(_e.litHtmlVersions??=[]).push("3.3.3");const si=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ri=class extends me{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Ze(e.insertBefore(Ce(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ie}};ri._$litElement$=!0,ri.finalized=!0,si.litElementHydrateSupport?.({LitElement:ri});const ni=si.litElementPolyfillSupport;ni?.({LitElement:ri}),(si.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ai=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},oi={attribute:!0,type:String,converter:pe,reflect:!1,hasChanged:be},li=(t=oi,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ci(t){return(e,i)=>"object"==typeof i?li(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function hi(t){return ci({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ui=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const di=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends ui{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return Ie}});function fi(t,e,i,s){const r=(s-90)*Math.PI/180;return{x:t+i*Math.cos(r),y:e+i*Math.sin(r)}}function gi(t,e,i,s,r){const n=fi(t,e,i,s),a=fi(t,e,i,r),o=r-s<=180?0:1;return`M ${n.x} ${n.y} A ${i} ${i} 0 ${o} 1 ${a.x} ${a.y}`}function pi(t,e,i,s){if(i<=e)return s.startAngle;let r;if(s.wrap){const s=i-e;r=((t-e)%s+s)%s/s}else r=(Math.min(i,Math.max(e,t))-e)/(i-e);return s.startAngle+r*s.sweepAngle}const bi={small:.8,medium:.9,large:1.05,"x-large":1.2};function $i(t){return{name:t,selector:{text:{}}}}function mi(t,e){return{name:t,selector:{number:{...e,mode:"box"}}}}function _i(t,e){return{name:t,selector:{select:{mode:"dropdown",options:e}}}}function yi(t,e,i){const s=t-e;return Math.abs(s)<i?"steady":s>0?"rising":"falling"}let ki=class{constructor(t,e,i=3e5){this.storageKeyPrefix=t,this.convert=e,this.throttleMs=i,this.cache=null,this.cachedEntityId=null,this.inFlight=null}storageKey(t){return`${this.storageKeyPrefix}${t}`}getCached(t){return this.cachedEntityId!==t&&(this.cachedEntityId=t,this.cache=function(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):null}catch{return null}}(this.storageKey(t))),this.cache}shouldFetch(t){const e=this.getCached(t);return!e||Date.now()-e.fetchedAt>this.throttleMs}update(t,e,i,s,r,n,a,o){const l=this.getCached(e);return this.inFlight||!this.shouldFetch(e)||(this.inFlight=async function(t,e,i){const s=`history/period/${new Date(Date.now()-36e5*i).toISOString()}?filter_entity_id=${encodeURIComponent(e)}&minimal_response&no_attributes`,r=await t.callApi("GET",s),n=r?.[0];if(!n?.length)return null;const a=n[0],o=a.state??a.s;if(void 0===o)return null;const l=parseFloat(o);return Number.isFinite(l)?l:null}(t,e,n).then(t=>{if(null===t)return{direction:"unknown",pastValueDisplay:null,fetchedAt:Date.now()};const e=this.convert(t,s,r);return{direction:yi(i,e,a),pastValueDisplay:e,fetchedAt:Date.now()}}).catch(()=>({direction:l?.direction??"unknown",pastValueDisplay:l?.pastValueDisplay??null,fetchedAt:Date.now()})).then(t=>(this.cache=t,function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}(this.storageKey(e),t),this.inFlight=null,o?.(t),t))),l}};const vi=ie`
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
`;ie`
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
`;const Ai="analog-thermometer-radial-card",wi="analog-thermometer-radial-card-editor",xi={classic:"#333333",silver:"#222222",dark:"#e8e8e8",light:"#333333","led-backlit":"#ff4d4d",fluorescent:"#baff29",futuristic:"#ff2fd0"},Ei={startAngle:-135,sweepAngle:270},Si=[{key:"freezing",label:"Freezing",from:-20,to:0,color:"#2471a3"},{key:"cold",label:"Cold",from:0,to:15,color:"#5dade2"},{key:"comfortable",label:"Comfortable",from:15,to:25,color:"#4a7a3c"},{key:"warm",label:"Warm",from:25,to:32,color:"#c9a227"},{key:"hot",label:"Hot",from:32,to:45,color:"#b5651d"}],Ci={"°C":{major:10,minor:2},"°F":{major:20,minor:5}};function Pi(t){return 9*t/5+32}function zi(t,e){return"°F"===e?Pi(t):t}function Ui(t,e,i){return e===i?t:zi(function(t,e){return"°F"===e?function(t){return 5*(t-32)/9}(t):t}(t,e),i)}function Mi(t,e){const i=t.states[e]?.attributes?.unit_of_measurement;return i&&i.toLowerCase().includes("f")?"°F":"°C"}const Oi=100;function Di(t){const{min:e,max:i,unit:s,value:r,pastValue:n,needleColor:a}=t;return Fe`
    <svg viewBox="0 0 200 200" class="dial" role="img" aria-label="Thermometer dial">
      <defs>${Fe`
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
      <circle cx=${Oi} cy=${Oi} r="97" class="bezel" />
      <circle cx=${Oi} cy=${Oi} r="90" class="face" />
      ${function(t,e,i){return Si.map(s=>{const r=zi(s.from,i),n=zi(s.to,i);if(n<=t||r>=e)return Fe``;const a=pi(r,t,e,Ei),o=pi(n,t,e,Ei);if(o<=a)return Fe``;const l=gi(Oi,Oi,86,a,o);return Fe`<path
      d=${l}
      stroke=${s.color}
      stroke-width=${9}
      fill="none"
    />`})}(e,i,s)}
      ${function(t,e,i){const{major:s,minor:r}=Ci[i];return function(t,e,i,s,r){return function(t,e,i,s){if(i<=0||s<=0||e<=t)return[];const r=[],n=s/1e3;for(let a=t;a<=e+n;a+=s){const t=Math.round(a/s)*s,e=Math.abs(t/i-Math.round(t/i))<n;r.push({value:t,major:e})}return r}(t,e,i,s).map(i=>({...i,angle:pi(i.value,t,e,r)}))}(t,e,s,r,Ei).map(t=>{const e=t.major?8:4,i=fi(Oi,Oi,72-e,t.angle),s=fi(Oi,Oi,72,t.angle),r=Fe`<line
      x1=${i.x} y1=${i.y} x2=${s.x} y2=${s.y}
      class=${t.major?"tick tick-major":"tick tick-minor"}
    />`;if(!t.major)return r;const n=fi(Oi,Oi,50,t.angle),a=Fe`<text x=${n.x} y=${n.y} class="tick-label" text-anchor="middle" dominant-baseline="middle">${Math.round(10*t.value)/10}</text>`;return Fe`${r}${a}`})}(e,i,s)}
      ${function(t,e,i){return Si.map(s=>{const r=Math.max(zi(s.from,i),t),n=Math.min(zi(s.to,i),e);if(n<=r)return Fe``;const a=pi(r,t,e,Ei),o=pi(n,t,e,Ei),l=`zone-label-path-${s.key}`,c=gi(Oi,Oi,77,a,o);return Fe`
      <path id=${l} d=${c} fill="none" stroke="none" />
      <text class="zone-label" dominant-baseline="middle">
        <textPath href=${"#"+l} startOffset="50%" text-anchor="middle">${s.label}</textPath>
      </text>
    `})}(e,i,s)}
      ${function(t,e,i){if(null===t)return Fe``;const s=pi(t,e,i,Ei),r=fi(Oi,Oi,88,s),n=fi(Oi,Oi,95,s);return Fe`<line
    x1=${r.x} y1=${r.y} x2=${n.x} y2=${n.y}
    class="trend-marker"
  />`}(n,e,i)}
      ${function(t,e,i,s){if(null===t)return Fe``;const r=pi(t,e,i,Ei);return Fe`<g class="needle" transform="rotate(${r} ${Oi} ${Oi})">
    <polygon
      points="${Oi},${38} ${97},${114} ${103},${114}"
      fill=${s}
    />
  </g>`}(r,e,i,a)}
      <circle cx=${Oi} cy=${Oi} r="6" class="hub" />
    </svg>
  `}const Ti=[{name:"entity",selector:{entity:{domain:"sensor"}}},$i("name"),_i("unit",[{value:"auto",label:"Auto-detect"},{value:"°C",label:"°C"},{value:"°F",label:"°F"}]),mi("trend_hours",{min:1,max:12,step:1}),mi("trend_threshold",{min:0,step:.1}),_i("trend_text_size",[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"},{value:"x-large",label:"Extra large"}]),_i("face_style",[{value:"classic",label:"Classic"},{value:"silver",label:"Silver"},{value:"dark",label:"Dark"},{value:"light",label:"Light"},{value:"led-backlit",label:"LED Backlit"},{value:"fluorescent",label:"Fluorescent"},{value:"futuristic",label:"Futuristic"}]),$i("needle_color")];const Hi=(ji={entity:"Temperature sensor entity",name:"Name (optional)",unit:"Display unit",trend_hours:"Trend lookback (hours)",trend_threshold:"Trend threshold",trend_text_size:"Trend text size",face_style:"Face style",needle_color:"Needle color (optional, overrides face style default)"},t=>ji[t.name]??t.name);var ji;let Ni=class extends ri{setConfig(t){this._config=t}render(){return this.hass&&this._config?Le`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Ti}
        .computeLabel=${Hi}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:Le``}_valueChanged(t){!function(t,e,i={},s={}){const r=new CustomEvent(e,{bubbles:s.bubbles??!0,cancelable:s.cancelable??!1,composed:s.composed??!0,detail:i});t.dispatchEvent(r)}(this,"config-changed",{config:t.detail.value})}};Zt([ci({attribute:!1})],Ni.prototype,"hass",void 0),Zt([hi()],Ni.prototype,"_config",void 0),Ni=Zt([ai(wi)],Ni);const Ri={rising:"↑",falling:"↓",steady:"→",unknown:""},Li={rising:"Rising",falling:"Falling",steady:"Steady",unknown:""};let Fi=class extends ri{constructor(){super(...arguments),this._trendDirection="unknown",this._pastValueDisplay=null,this._tracker=new ki("analog-thermometer-radial-card-trend-",Ui,3e5),this._lastEntityUpdate=null}setConfig(t){if(!t.entity)throw new Error("You must specify a temperature sensor entity.");this._config=t}getCardSize(){return 4}static getConfigElement(){return document.createElement(wi)}static getStubConfig(t){const e=Object.values(t?.states??{}).find(t=>t.entity_id.startsWith("sensor.")&&"temperature"===t.attributes.device_class);return{type:"custom:analog-thermometer-radial-card",entity:e?.entity_id??""}}willUpdate(t){t.has("hass")&&this._maybeUpdateTrend()}_maybeUpdateTrend(){if(!this.hass||!this._config?.entity)return;const t=this.hass.states[this._config.entity];if(!t)return;const e=parseFloat(t.state);if(!Number.isFinite(e))return;const i=Mi(this.hass,this._config.entity),s=this._config.unit??i,r=Ui(e,i,s),n=this._config.trend_hours??3,a=this._config.trend_threshold??("°F"===s?1.8:1);if(this._lastEntityUpdate===t.last_updated)return;this._lastEntityUpdate=t.last_updated;const o=this._tracker.update(this.hass,this._config.entity,r,i,s,n,a,t=>{this._trendDirection=t.direction,this._pastValueDisplay=t.pastValueDisplay});this._trendDirection=o?.direction??"unknown",this._pastValueDisplay=o?.pastValueDisplay??null}render(){if(!this._config||!this.hass)return Le``;const t=this.hass.states[this._config.entity];if(!t)return Le`<ha-card>
        <div class="warning">Entity not found: ${this._config.entity}</div>
      </ha-card>`;const e=Mi(this.hass,this._config.entity),i=this._config.unit??e,s=parseFloat(t.state),r=Number.isFinite(s),n=r?Ui(s,e,i):null,a="°F"===i?{min:Pi(-20),max:Pi(45)}:{min:-20,max:45},o=this._config.min??a.min,l=this._config.max??a.max,c=this._config.face_style??"classic",h=this._config.needle_color||xi[c],u=this._config.name??t.attributes.friendly_name??this._config.entity,d=bi[this._config.trend_text_size??"large"];return Le`
      <ha-card>
        <div class=${di({"card-content":!0,[`style-${c}`]:!0})}>
          <div class="title">${u}</div>
          ${Di({min:o,max:l,unit:i,value:n,pastValue:this._pastValueDisplay,needleColor:h})}
          <div class="readout">
            <span class="value">${r?n.toFixed(1):"--"}</span>
            <span class="unit">${i}</span>
          </div>
          <div class="trend trend-${this._trendDirection}" style="font-size: ${d}rem">
            <span class="arrow">${Ri[this._trendDirection]}</span>
            <span class="label">${Li[this._trendDirection]}</span>
          </div>
        </div>
      </ha-card>
    `}};var Ii;function Vi(t,e,i,s){var r,n=arguments.length,a=n<3?e:s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}Fi.styles=[vi,ie`
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
        font-size: 1.2em;
        line-height: 1;
      }
    `],Zt([ci({attribute:!1})],Fi.prototype,"hass",void 0),Zt([hi()],Fi.prototype,"_config",void 0),Zt([hi()],Fi.prototype,"_trendDirection",void 0),Zt([hi()],Fi.prototype,"_pastValueDisplay",void 0),Fi=Zt([ai(Ai)],Fi),Ii={type:Ai,name:"Analog Thermometer (Radial)",preview:!1,description:"A classic analog-style radial thermometer dial with temperature trend tracking."},window.customCards=window.customCards||[],window.customCards.push(Ii),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const qi=globalThis,Bi=qi.ShadowRoot&&(void 0===qi.ShadyCSS||qi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Wi=Symbol(),Ki=new WeakMap;let Gi=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Wi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Bi&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=Ki.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ki.set(e,t))}return t}toString(){return this.cssText}};const Ji=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new Gi(i,t,Wi)},Zi=Bi?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new Gi("string"==typeof t?t:t+"",void 0,Wi))(e)})(t):t,{is:Yi,defineProperty:Qi,getOwnPropertyDescriptor:Xi,getOwnPropertyNames:ts,getOwnPropertySymbols:es,getPrototypeOf:is}=Object,ss=globalThis,rs=ss.trustedTypes,ns=rs?rs.emptyScript:"",as=ss.reactiveElementPolyfillSupport,os=(t,e)=>t,ls={toAttribute(t,e){switch(e){case Boolean:t=t?ns:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},cs=(t,e)=>!Yi(t,e),hs={attribute:!0,type:String,converter:ls,reflect:!1,useDefault:!1,hasChanged:cs};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),ss.litPropertyMetadata??=new WeakMap;let us=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=hs){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Qi(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=Xi(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??hs}static _$Ei(){if(this.hasOwnProperty(os("elementProperties")))return;const t=is(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(os("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(os("properties"))){const t=this.properties,e=[...ts(t),...es(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(Zi(t))}else void 0!==t&&e.push(Zi(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(Bi)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=qi.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:ls).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:ls;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??cs)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};us.elementStyles=[],us.shadowRootOptions={mode:"open"},us[os("elementProperties")]=new Map,us[os("finalized")]=new Map,as?.({ReactiveElement:us}),(ss.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ds=globalThis,fs=t=>t,gs=ds.trustedTypes,ps=gs?gs.createPolicy("lit-html",{createHTML:t=>t}):void 0,bs="$lit$",$s=`lit$${Math.random().toFixed(9).slice(2)}$`,ms="?"+$s,_s=`<${ms}>`,ys=document,ks=()=>ys.createComment(""),vs=t=>null===t||"object"!=typeof t&&"function"!=typeof t,As=Array.isArray,ws="[ \t\n\f\r]",xs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Es=/-->/g,Ss=/>/g,Cs=RegExp(`>|${ws}(?:([^\\s"'>=/]+)(${ws}*=${ws}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Ps=/'/g,zs=/"/g,Us=/^(?:script|style|textarea|title)$/i,Ms=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Os=Ms(1),Ds=Ms(2),Ts=Symbol.for("lit-noChange"),Hs=Symbol.for("lit-nothing"),js=new WeakMap,Ns=ys.createTreeWalker(ys,129);function Rs(t,e){if(!As(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ps?ps.createHTML(e):e}let Ls=class t{constructor({strings:e,_$litType$:i},s){let r;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[c,h]=((t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",a=xs;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===xs?"!--"===l[1]?a=Es:void 0!==l[1]?a=Ss:void 0!==l[2]?(Us.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=Cs):void 0!==l[3]&&(a=Cs):a===Cs?">"===l[0]?(a=r??xs,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?Cs:'"'===l[3]?zs:Ps):a===zs||a===Ps?a=Cs:a===Es||a===Ss?a=xs:(a=Cs,r=void 0);const u=a===Cs&&t[e+1].startsWith("/>")?" ":"";n+=a===xs?i+_s:c>=0?(s.push(o),i.slice(0,c)+bs+i.slice(c)+$s+u):i+$s+(-2===c?e:u)}return[Rs(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(e,i);if(this.el=t.createElement(c,s),Ns.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=Ns.nextNode())&&l.length<o;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(bs)){const e=h[a++],i=r.getAttribute(t).split($s),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?Bs:"?"===s[1]?Ws:"@"===s[1]?Ks:qs}),r.removeAttribute(t)}else t.startsWith($s)&&(l.push({type:6,index:n}),r.removeAttribute(t));if(Us.test(r.tagName)){const t=r.textContent.split($s),e=t.length-1;if(e>0){r.textContent=gs?gs.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],ks()),Ns.nextNode(),l.push({type:2,index:++n});r.append(t[e],ks())}}}else if(8===r.nodeType)if(r.data===ms)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf($s,t+1));)l.push({type:7,index:n}),t+=$s.length-1}n++}}static createElement(t,e){const i=ys.createElement("template");return i.innerHTML=t,i}};function Fs(t,e,i=t,s){if(e===Ts)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=vs(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Fs(t,r._$AS(t,e.values),r,s)),e}let Is=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??ys).importNode(e,!0);Ns.currentNode=s;let r=Ns.nextNode(),n=0,a=0,o=i[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new Vs(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new Gs(r,this,t)),this._$AV.push(e),o=i[++a]}n!==o?.index&&(r=Ns.nextNode(),n++)}return Ns.currentNode=ys,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Vs=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Hs,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Fs(this,t,e),vs(t)?t===Hs||null==t||""===t?(this._$AH!==Hs&&this._$AR(),this._$AH=Hs):t!==this._$AH&&t!==Ts&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>As(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Hs&&vs(this._$AH)?this._$AA.nextSibling.data=t:this.T(ys.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Ls.createElement(Rs(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Is(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=js.get(t.strings);return void 0===e&&js.set(t.strings,e=new Ls(t)),e}k(e){As(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,r=0;for(const n of e)r===i.length?i.push(s=new t(this.O(ks()),this.O(ks()),this,this.options)):s=i[r],s._$AI(n),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=fs(t).nextSibling;fs(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},qs=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=Hs,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Hs}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Fs(this,t,e,0),n=!vs(t)||t!==this._$AH&&t!==Ts,n&&(this._$AH=t);else{const s=t;let a,o;for(t=r[0],a=0;a<r.length-1;a++)o=Fs(this,s[i+a],e,a),o===Ts&&(o=this._$AH[a]),n||=!vs(o)||o!==this._$AH[a],o===Hs?t=Hs:t!==Hs&&(t+=(o??"")+r[a+1]),this._$AH[a]=o}n&&!s&&this.j(t)}j(t){t===Hs?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Bs=class extends qs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Hs?void 0:t}},Ws=class extends qs{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Hs)}},Ks=class extends qs{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Fs(this,t,e,0)??Hs)===Ts)return;const i=this._$AH,s=t===Hs&&i!==Hs||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==Hs&&(i===Hs||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Gs=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Fs(this,t)}};const Js=ds.litHtmlPolyfillSupport;Js?.(Ls,Vs),(ds.litHtmlVersions??=[]).push("3.3.3");const Zs=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ys=class extends us{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Vs(e.insertBefore(ks(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ts}};Ys._$litElement$=!0,Ys.finalized=!0,Zs.litElementHydrateSupport?.({LitElement:Ys});const Qs=Zs.litElementPolyfillSupport;Qs?.({LitElement:Ys}),(Zs.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xs=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},tr={attribute:!0,type:String,converter:ls,reflect:!1,hasChanged:cs},er=(t=tr,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ir(t){return(e,i)=>"object"==typeof i?er(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function sr(t){return ir({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nr=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends rr{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return Ts}});function ar(t,e,i,s,r){return i<=e?s:s+(Math.min(i,Math.max(e,t))-e)/(i-e)*(r-s)}const or={small:.8,medium:.9,large:1.05,"x-large":1.2};function lr(t){return{name:t,selector:{text:{}}}}function cr(t,e){return{name:t,selector:{number:{...e,mode:"box"}}}}function hr(t,e){return{name:t,selector:{select:{mode:"dropdown",options:e}}}}function ur(t,e,i){const s=t-e;return Math.abs(s)<i?"steady":s>0?"rising":"falling"}let dr=class{constructor(t,e,i=3e5){this.storageKeyPrefix=t,this.convert=e,this.throttleMs=i,this.cache=null,this.cachedEntityId=null,this.inFlight=null}storageKey(t){return`${this.storageKeyPrefix}${t}`}getCached(t){return this.cachedEntityId!==t&&(this.cachedEntityId=t,this.cache=function(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):null}catch{return null}}(this.storageKey(t))),this.cache}shouldFetch(t){const e=this.getCached(t);return!e||Date.now()-e.fetchedAt>this.throttleMs}update(t,e,i,s,r,n,a,o){const l=this.getCached(e);return this.inFlight||!this.shouldFetch(e)||(this.inFlight=async function(t,e,i){const s=`history/period/${new Date(Date.now()-36e5*i).toISOString()}?filter_entity_id=${encodeURIComponent(e)}&minimal_response&no_attributes`,r=await t.callApi("GET",s),n=r?.[0];if(!n?.length)return null;const a=n[0],o=a.state??a.s;if(void 0===o)return null;const l=parseFloat(o);return Number.isFinite(l)?l:null}(t,e,n).then(t=>{if(null===t)return{direction:"unknown",pastValueDisplay:null,fetchedAt:Date.now()};const e=this.convert(t,s,r);return{direction:ur(i,e,a),pastValueDisplay:e,fetchedAt:Date.now()}}).catch(()=>({direction:l?.direction??"unknown",pastValueDisplay:l?.pastValueDisplay??null,fetchedAt:Date.now()})).then(t=>(this.cache=t,function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}(this.storageKey(e),t),this.inFlight=null,o?.(t),t))),l}};Ji`
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
`;const fr=Ji`
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
`,gr="analog-thermometer-mercury-card",pr="analog-thermometer-mercury-card-editor",br={classic:"#c0392b",silver:"#c9cdd1",dark:"#e05c4d",light:"#c0392b","led-backlit":"#ff4d4d",fluorescent:"#baff29",futuristic:"#ff2fd0"},$r={"°C":{major:10,minor:2},"°F":{major:20,minor:5}},mr=168-Math.sqrt(300),_r="mercury-liquid-clip";function yr(t,e){const i=60-t,s=60+t,r=168-Math.sqrt(e*e-t*t);return[`M ${i} 20`,`L ${i} ${r}`,`A ${e} ${e} 0 1 0 ${s} ${r}`,`L ${s} 20`,`A ${t} ${t} 0 1 0 ${i} 20`,"Z"].join(" ")}function kr(t){const{min:e,max:i,unit:s,value:r,pastValue:n,liquidColor:a}=t;return Ds`
    <svg viewBox="0 0 140 200" class="tube-dial" role="img" aria-label="Mercury thermometer">
      <defs>${Ds`
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
      <rect x="14" y="4" width="112" height="188" rx="10" class="backing" />
      ${function(t,e,i){const{major:s,minor:r}=$r[i];return function(t,e,i,s,r,n){return function(t,e,i,s){if(i<=0||s<=0||e<=t)return[];const r=[],n=s/1e3;for(let a=t;a<=e+n;a+=s){const t=Math.round(a/s)*s,e=Math.abs(t/i-Math.round(t/i))<n;r.push({value:t,major:e})}return r}(t,e,i,s).map(i=>({...i,position:ar(i.value,t,e,r,n)}))}(t,e,s,r,mr,20).map(t=>{const e=t.major?8:4,i=Ds`<line
      x1=${72} y1=${t.position} x2=${72+e} y2=${t.position}
      class=${t.major?"tick tick-major":"tick tick-minor"}
    />`;if(!t.major)return i;const s=Ds`<text x=${84} y=${t.position} class="tick-label" dominant-baseline="middle">${Math.round(10*t.value)/10}</text>`;return Ds`${i}${s}`})}(e,i,s)}
      ${function(t,e,i){if(null===t)return Ds``;const s=ar(t,e,i,mr,20);return Ds`<line
    x1=${42} y1=${s} x2=${48} y2=${s}
    class="trend-marker"
  />`}(n,e,i)}
      ${function(t,e,i,s){if(null===t)return Ds``;const r=ar(t,e,i,mr,20);return Ds`
    <defs>
      <clipPath id=${_r}>
        <rect x="0" y=${r} width="140" height=${192-r} />
      </clipPath>
    </defs>
    <path d=${yr(6,16)} class="liquid" fill=${s} clip-path=${`url(#${_r})`} />
  `}(r,e,i,a)}
      <path d=${yr(10,20)} class="glass" />
      <line
        x1=${53} y1=${26}
        x2=${53} y2=${mr-6}
        class="glass-highlight"
      />
      <ellipse cx=${54} cy=${162} rx="4" ry="6" class="bulb-highlight" />
    </svg>
  `}function vr(t){return 9*t/5+32}function Ar(t,e,i){return e===i?t:(s=function(t,e){return"°F"===e?function(t){return 5*(t-32)/9}(t):t}(t,e),"°F"===i?vr(s):s);var s}function wr(t,e){const i=t.states[e]?.attributes?.unit_of_measurement;return i&&i.toLowerCase().includes("f")?"°F":"°C"}const xr=[{name:"entity",selector:{entity:{domain:"sensor"}}},lr("name"),hr("unit",[{value:"auto",label:"Auto-detect"},{value:"°C",label:"°C"},{value:"°F",label:"°F"}]),cr("trend_hours",{min:1,max:12,step:1}),cr("trend_threshold",{min:0,step:.1}),hr("trend_text_size",[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"},{value:"x-large",label:"Extra large"}]),hr("face_style",[{value:"classic",label:"Classic"},{value:"silver",label:"Silver"},{value:"dark",label:"Dark"},{value:"light",label:"Light"},{value:"led-backlit",label:"LED Backlit"},{value:"fluorescent",label:"Fluorescent"},{value:"futuristic",label:"Futuristic"}]),lr("liquid_color")];const Er=(Sr={entity:"Temperature sensor entity",name:"Name (optional)",unit:"Display unit",trend_hours:"Trend lookback (hours)",trend_threshold:"Trend threshold",trend_text_size:"Trend text size",face_style:"Face style",liquid_color:"Liquid color (optional, overrides face style default)"},t=>Sr[t.name]??t.name);var Sr;let Cr=class extends Ys{setConfig(t){this._config=t}render(){return this.hass&&this._config?Os`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${xr}
        .computeLabel=${Er}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:Os``}_valueChanged(t){!function(t,e,i={},s={}){const r=new CustomEvent(e,{bubbles:s.bubbles??!0,cancelable:s.cancelable??!1,composed:s.composed??!0,detail:i});t.dispatchEvent(r)}(this,"config-changed",{config:t.detail.value})}};Vi([ir({attribute:!1})],Cr.prototype,"hass",void 0),Vi([sr()],Cr.prototype,"_config",void 0),Cr=Vi([Xs(pr)],Cr);const Pr={rising:"↑",falling:"↓",steady:"→",unknown:""},zr={rising:"Rising",falling:"Falling",steady:"Steady",unknown:""};let Ur=class extends Ys{constructor(){super(...arguments),this._trendDirection="unknown",this._pastValueDisplay=null,this._tracker=new dr("analog-thermometer-mercury-card-trend-",Ar,3e5),this._lastEntityUpdate=null}setConfig(t){if(!t.entity)throw new Error("You must specify a temperature sensor entity.");this._config=t}getCardSize(){return 4}static getConfigElement(){return document.createElement(pr)}static getStubConfig(t){const e=Object.values(t?.states??{}).find(t=>t.entity_id.startsWith("sensor.")&&"temperature"===t.attributes.device_class);return{type:"custom:analog-thermometer-mercury-card",entity:e?.entity_id??""}}willUpdate(t){t.has("hass")&&this._maybeUpdateTrend()}_maybeUpdateTrend(){if(!this.hass||!this._config?.entity)return;const t=this.hass.states[this._config.entity];if(!t)return;const e=parseFloat(t.state);if(!Number.isFinite(e))return;const i=wr(this.hass,this._config.entity),s=this._config.unit??i,r=Ar(e,i,s),n=this._config.trend_hours??3,a=this._config.trend_threshold??("°F"===s?1.8:1);if(this._lastEntityUpdate===t.last_updated)return;this._lastEntityUpdate=t.last_updated;const o=this._tracker.update(this.hass,this._config.entity,r,i,s,n,a,t=>{this._trendDirection=t.direction,this._pastValueDisplay=t.pastValueDisplay});this._trendDirection=o?.direction??"unknown",this._pastValueDisplay=o?.pastValueDisplay??null}render(){if(!this._config||!this.hass)return Os``;const t=this.hass.states[this._config.entity];if(!t)return Os`<ha-card>
        <div class="warning">Entity not found: ${this._config.entity}</div>
      </ha-card>`;const e=wr(this.hass,this._config.entity),i=this._config.unit??e,s=parseFloat(t.state),r=Number.isFinite(s),n=r?Ar(s,e,i):null,a="°F"===i?{min:vr(-20),max:vr(45)}:{min:-20,max:45},o=this._config.min??a.min,l=this._config.max??a.max,c=this._config.face_style??"classic",h=this._config.liquid_color||br[c],u=this._config.name??t.attributes.friendly_name??this._config.entity,d=or[this._config.trend_text_size??"large"];return Os`
      <ha-card>
        <div class=${nr({"card-content":!0,[`style-${c}`]:!0})}>
          <div class="title">${u}</div>
          ${kr({min:o,max:l,unit:i,value:n,pastValue:this._pastValueDisplay,liquidColor:h})}
          <div class="readout">
            <span class="value">${r?n.toFixed(1):"--"}</span>
            <span class="unit">${i}</span>
          </div>
          <div class="trend trend-${this._trendDirection}" style="font-size: ${d}rem">
            <span class="arrow">${Pr[this._trendDirection]}</span>
            <span class="label">${zr[this._trendDirection]}</span>
          </div>
        </div>
      </ha-card>
    `}};var Mr;function Or(t,e,i,s){var r,n=arguments.length,a=n<3?e:s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}Ur.styles=[fr,Ji`
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
      .tube-dial {
        width: 100%;
        max-width: 140px;
        height: auto;
      }
      .backing {
        fill: var(--tube-backing-fill);
        stroke: var(--tube-backing-stroke);
        stroke-width: 1;
      }
      .glass {
        fill: var(--tube-glass-fill);
        stroke: var(--tube-glass-stroke);
        stroke-width: 1.5;
      }
      .glass-highlight {
        stroke: rgba(255, 255, 255, 0.45);
        stroke-width: 1.5;
        stroke-linecap: round;
      }
      .bulb-highlight {
        fill: rgba(255, 255, 255, 0.5);
      }
      .tick {
        stroke: var(--tube-tick-stroke);
        filter: var(--tube-tick-filter);
      }
      .tick-major {
        stroke-width: 1.6;
      }
      .tick-minor {
        stroke-width: 0.8;
        opacity: 0.7;
      }
      .tick-label {
        font-size: 9px;
        fill: var(--tube-tick-label-fill);
      }
      .trend-marker {
        stroke: var(--tube-tick-stroke);
        stroke-width: 1.5;
        opacity: 0.55;
      }
      .liquid {
        filter: var(--tube-liquid-filter);
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
        font-size: 1.2em;
        line-height: 1;
      }
    `],Vi([ir({attribute:!1})],Ur.prototype,"hass",void 0),Vi([sr()],Ur.prototype,"_config",void 0),Vi([sr()],Ur.prototype,"_trendDirection",void 0),Vi([sr()],Ur.prototype,"_pastValueDisplay",void 0),Ur=Vi([Xs(gr)],Ur),Mr={type:gr,name:"Analog Thermometer (Mercury)",preview:!1,description:"A classic mercury-tube style thermometer with temperature trend tracking."},window.customCards=window.customCards||[],window.customCards.push(Mr),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Dr=globalThis,Tr=Dr.ShadowRoot&&(void 0===Dr.ShadyCSS||Dr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hr=Symbol(),jr=new WeakMap;let Nr=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Hr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Tr&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=jr.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&jr.set(e,t))}return t}toString(){return this.cssText}};const Rr=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new Nr(i,t,Hr)},Lr=Tr?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new Nr("string"==typeof t?t:t+"",void 0,Hr))(e)})(t):t,{is:Fr,defineProperty:Ir,getOwnPropertyDescriptor:Vr,getOwnPropertyNames:qr,getOwnPropertySymbols:Br,getPrototypeOf:Wr}=Object,Kr=globalThis,Gr=Kr.trustedTypes,Jr=Gr?Gr.emptyScript:"",Zr=Kr.reactiveElementPolyfillSupport,Yr=(t,e)=>t,Qr={toAttribute(t,e){switch(e){case Boolean:t=t?Jr:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},Xr=(t,e)=>!Fr(t,e),tn={attribute:!0,type:String,converter:Qr,reflect:!1,useDefault:!1,hasChanged:Xr};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),Kr.litPropertyMetadata??=new WeakMap;let en=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=tn){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Ir(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=Vr(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??tn}static _$Ei(){if(this.hasOwnProperty(Yr("elementProperties")))return;const t=Wr(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Yr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Yr("properties"))){const t=this.properties,e=[...qr(t),...Br(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(Lr(t))}else void 0!==t&&e.push(Lr(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(Tr)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=Dr.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:Qr).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:Qr;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??Xr)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};en.elementStyles=[],en.shadowRootOptions={mode:"open"},en[Yr("elementProperties")]=new Map,en[Yr("finalized")]=new Map,Zr?.({ReactiveElement:en}),(Kr.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const sn=globalThis,rn=t=>t,nn=sn.trustedTypes,an=nn?nn.createPolicy("lit-html",{createHTML:t=>t}):void 0,on="$lit$",ln=`lit$${Math.random().toFixed(9).slice(2)}$`,cn="?"+ln,hn=`<${cn}>`,un=document,dn=()=>un.createComment(""),fn=t=>null===t||"object"!=typeof t&&"function"!=typeof t,gn=Array.isArray,pn="[ \t\n\f\r]",bn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$n=/-->/g,mn=/>/g,_n=RegExp(`>|${pn}(?:([^\\s"'>=/]+)(${pn}*=${pn}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),yn=/'/g,kn=/"/g,vn=/^(?:script|style|textarea|title)$/i,An=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),wn=An(1),xn=An(2),En=Symbol.for("lit-noChange"),Sn=Symbol.for("lit-nothing"),Cn=new WeakMap,Pn=un.createTreeWalker(un,129);function zn(t,e){if(!gn(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==an?an.createHTML(e):e}let Un=class t{constructor({strings:e,_$litType$:i},s){let r;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[c,h]=((t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",a=bn;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===bn?"!--"===l[1]?a=$n:void 0!==l[1]?a=mn:void 0!==l[2]?(vn.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=_n):void 0!==l[3]&&(a=_n):a===_n?">"===l[0]?(a=r??bn,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?_n:'"'===l[3]?kn:yn):a===kn||a===yn?a=_n:a===$n||a===mn?a=bn:(a=_n,r=void 0);const u=a===_n&&t[e+1].startsWith("/>")?" ":"";n+=a===bn?i+hn:c>=0?(s.push(o),i.slice(0,c)+on+i.slice(c)+ln+u):i+ln+(-2===c?e:u)}return[zn(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(e,i);if(this.el=t.createElement(c,s),Pn.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=Pn.nextNode())&&l.length<o;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(on)){const e=h[a++],i=r.getAttribute(t).split(ln),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?Hn:"?"===s[1]?jn:"@"===s[1]?Nn:Tn}),r.removeAttribute(t)}else t.startsWith(ln)&&(l.push({type:6,index:n}),r.removeAttribute(t));if(vn.test(r.tagName)){const t=r.textContent.split(ln),e=t.length-1;if(e>0){r.textContent=nn?nn.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],dn()),Pn.nextNode(),l.push({type:2,index:++n});r.append(t[e],dn())}}}else if(8===r.nodeType)if(r.data===cn)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(ln,t+1));)l.push({type:7,index:n}),t+=ln.length-1}n++}}static createElement(t,e){const i=un.createElement("template");return i.innerHTML=t,i}};function Mn(t,e,i=t,s){if(e===En)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=fn(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Mn(t,r._$AS(t,e.values),r,s)),e}class On{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??un).importNode(e,!0);Pn.currentNode=s;let r=Pn.nextNode(),n=0,a=0,o=i[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new Dn(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new Rn(r,this,t)),this._$AV.push(e),o=i[++a]}n!==o?.index&&(r=Pn.nextNode(),n++)}return Pn.currentNode=un,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Dn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Sn,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Mn(this,t,e),fn(t)?t===Sn||null==t||""===t?(this._$AH!==Sn&&this._$AR(),this._$AH=Sn):t!==this._$AH&&t!==En&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>gn(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Sn&&fn(this._$AH)?this._$AA.nextSibling.data=t:this.T(un.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Un.createElement(zn(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new On(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Cn.get(t.strings);return void 0===e&&Cn.set(t.strings,e=new Un(t)),e}k(t){gn(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Dn(this.O(dn()),this.O(dn()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=rn(t).nextSibling;rn(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Tn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=Sn,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Sn}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Mn(this,t,e,0),n=!fn(t)||t!==this._$AH&&t!==En,n&&(this._$AH=t);else{const s=t;let a,o;for(t=r[0],a=0;a<r.length-1;a++)o=Mn(this,s[i+a],e,a),o===En&&(o=this._$AH[a]),n||=!fn(o)||o!==this._$AH[a],o===Sn?t=Sn:t!==Sn&&(t+=(o??"")+r[a+1]),this._$AH[a]=o}n&&!s&&this.j(t)}j(t){t===Sn?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Hn extends Tn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Sn?void 0:t}}class jn extends Tn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Sn)}}class Nn extends Tn{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Mn(this,t,e,0)??Sn)===En)return;const i=this._$AH,s=t===Sn&&i!==Sn||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==Sn&&(i===Sn||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Rn{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Mn(this,t)}}const Ln=sn.litHtmlPolyfillSupport;Ln?.(Un,Dn),(sn.litHtmlVersions??=[]).push("3.3.3");const Fn=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let In=class extends en{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Dn(e.insertBefore(dn(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return En}};In._$litElement$=!0,In.finalized=!0,Fn.litElementHydrateSupport?.({LitElement:In});const Vn=Fn.litElementPolyfillSupport;Vn?.({LitElement:In}),(Fn.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const qn=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},Bn={attribute:!0,type:String,converter:Qr,reflect:!1,hasChanged:Xr},Wn=(t=Bn,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kn(t){return(e,i)=>"object"==typeof i?Wn(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Gn(t){return Kn({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Jn{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zn=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Jn{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return En}});function Yn(t,e,i,s){const r=(s-90)*Math.PI/180;return{x:t+i*Math.cos(r),y:e+i*Math.sin(r)}}function Qn(t,e,i,s,r){const n=Yn(t,e,i,s),a=Yn(t,e,i,r),o=r-s<=180?0:1;return`M ${n.x} ${n.y} A ${i} ${i} 0 ${o} 1 ${a.x} ${a.y}`}function Xn(t,e,i,s){if(i<=e)return s.startAngle;let r;if(s.wrap){const s=i-e;r=((t-e)%s+s)%s/s}else r=(Math.min(i,Math.max(e,t))-e)/(i-e);return s.startAngle+r*s.sweepAngle}const ta={small:.8,medium:.9,large:1.05,"x-large":1.2};function ea(t){return{name:t,selector:{text:{}}}}function ia(t,e){return{name:t,selector:{number:{...e,mode:"box"}}}}function sa(t,e){return{name:t,selector:{select:{mode:"dropdown",options:e}}}}function ra(t,e,i){const s=t-e;return Math.abs(s)<i?"steady":s>0?"rising":"falling"}class na{constructor(t,e,i=3e5){this.storageKeyPrefix=t,this.convert=e,this.throttleMs=i,this.cache=null,this.cachedEntityId=null,this.inFlight=null}storageKey(t){return`${this.storageKeyPrefix}${t}`}getCached(t){return this.cachedEntityId!==t&&(this.cachedEntityId=t,this.cache=function(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):null}catch{return null}}(this.storageKey(t))),this.cache}shouldFetch(t){const e=this.getCached(t);return!e||Date.now()-e.fetchedAt>this.throttleMs}update(t,e,i,s,r,n,a,o){const l=this.getCached(e);return this.inFlight||!this.shouldFetch(e)||(this.inFlight=async function(t,e,i){const s=`history/period/${new Date(Date.now()-36e5*i).toISOString()}?filter_entity_id=${encodeURIComponent(e)}&minimal_response&no_attributes`,r=await t.callApi("GET",s),n=r?.[0];if(!n?.length)return null;const a=n[0],o=a.state??a.s;if(void 0===o)return null;const l=parseFloat(o);return Number.isFinite(l)?l:null}(t,e,n).then(t=>{if(null===t)return{direction:"unknown",pastValueDisplay:null,fetchedAt:Date.now()};const e=this.convert(t,s,r);return{direction:ra(i,e,a),pastValueDisplay:e,fetchedAt:Date.now()}}).catch(()=>({direction:l?.direction??"unknown",pastValueDisplay:l?.pastValueDisplay??null,fetchedAt:Date.now()})).then(t=>(this.cache=t,function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}(this.storageKey(e),t),this.inFlight=null,o?.(t),t))),l}}const aa=Rr`
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
`;Rr`
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
`;const oa="analog-humidity-radial-card",la="analog-humidity-radial-card-editor",ca={classic:"#333333",silver:"#222222",dark:"#e8e8e8",light:"#333333","led-backlit":"#ff4d4d",fluorescent:"#baff29",futuristic:"#ff2fd0"},ha={startAngle:-135,sweepAngle:270},ua=[{key:"dry",label:"Dry",from:0,to:30,color:"#b5651d"},{key:"comfortable",label:"Comfortable",from:30,to:50,color:"#4a7a3c"},{key:"humid",label:"Humid",from:50,to:70,color:"#c9a227"},{key:"very-humid",label:"Very Humid",from:70,to:100,color:"#2471a3"}],da={major:10,minor:2},fa=100;function ga(t){const{min:e,max:i,value:s,pastValue:r,needleColor:n}=t;return xn`
    <svg viewBox="0 0 200 200" class="dial" role="img" aria-label="Hygrometer dial">
      <defs>${xn`
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
      <circle cx=${fa} cy=${fa} r="97" class="bezel" />
      <circle cx=${fa} cy=${fa} r="90" class="face" />
      ${function(t,e){return ua.map(i=>{if(i.to<=t||i.from>=e)return xn``;const s=Xn(i.from,t,e,ha),r=Xn(i.to,t,e,ha);if(r<=s)return xn``;const n=Qn(fa,fa,86,s,r);return xn`<path
      d=${n}
      stroke=${i.color}
      stroke-width=${9}
      fill="none"
    />`})}(e,i)}
      ${function(t,e){const{major:i,minor:s}=da;return function(t,e,i,s,r){return function(t,e,i,s){if(e<=t)return[];const r=[],n=s/1e3;for(let a=t;a<=e+n;a+=s){const t=Math.round(a/s)*s,e=Math.abs(t/i-Math.round(t/i))<n;r.push({value:t,major:e})}return r}(t,e,i,s).map(i=>({...i,angle:Xn(i.value,t,e,r)}))}(t,e,i,s,ha).map(t=>{const e=t.major?8:4,i=Yn(fa,fa,72-e,t.angle),s=Yn(fa,fa,72,t.angle),r=xn`<line
      x1=${i.x} y1=${i.y} x2=${s.x} y2=${s.y}
      class=${t.major?"tick tick-major":"tick tick-minor"}
    />`;if(!t.major)return r;const n=Yn(fa,fa,50,t.angle),a=xn`<text x=${n.x} y=${n.y} class="tick-label" text-anchor="middle" dominant-baseline="middle">${Math.round(10*t.value)/10}</text>`;return xn`${r}${a}`})}(e,i)}
      ${function(t,e){return ua.map(i=>{const s=Math.max(i.from,t),r=Math.min(i.to,e);if(r<=s)return xn``;const n=Xn(s,t,e,ha),a=Xn(r,t,e,ha),o=`zone-label-path-${i.key}`,l=Qn(fa,fa,77,n,a);return xn`
      <path id=${o} d=${l} fill="none" stroke="none" />
      <text class="zone-label" dominant-baseline="middle">
        <textPath href=${"#"+o} startOffset="50%" text-anchor="middle">${i.label}</textPath>
      </text>
    `})}(e,i)}
      ${function(t,e,i){if(null===t)return xn``;const s=Xn(t,e,i,ha),r=Yn(fa,fa,88,s),n=Yn(fa,fa,95,s);return xn`<line
    x1=${r.x} y1=${r.y} x2=${n.x} y2=${n.y}
    class="trend-marker"
  />`}(r,e,i)}
      ${function(t,e,i,s){if(null===t)return xn``;const r=Xn(t,e,i,ha);return xn`<g class="needle" transform="rotate(${r} ${fa} ${fa})">
    <polygon
      points="${fa},${38} ${97},${114} ${103},${114}"
      fill=${s}
    />
  </g>`}(s,e,i,n)}
      <circle cx=${fa} cy=${fa} r="6" class="hub" />
    </svg>
  `}function pa(t,e,i){return t}const ba=[{name:"entity",selector:{entity:{domain:"sensor"}}},ea("name"),ia("trend_hours",{min:1,max:12,step:1}),ia("trend_threshold",{min:0,step:.5}),sa("trend_text_size",[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"},{value:"x-large",label:"Extra large"}]),sa("face_style",[{value:"classic",label:"Classic"},{value:"silver",label:"Silver"},{value:"dark",label:"Dark"},{value:"light",label:"Light"},{value:"led-backlit",label:"LED Backlit"},{value:"fluorescent",label:"Fluorescent"},{value:"futuristic",label:"Futuristic"}]),ea("needle_color")];const $a=(ma={entity:"Humidity sensor entity",name:"Name (optional)",trend_hours:"Trend lookback (hours)",trend_threshold:"Trend threshold",trend_text_size:"Trend text size",face_style:"Face style",needle_color:"Needle color (optional, overrides face style default)"},t=>ma[t.name]??t.name);var ma;let _a=class extends In{setConfig(t){this._config=t}render(){return this.hass&&this._config?wn`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${ba}
        .computeLabel=${$a}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:wn``}_valueChanged(t){!function(t,e,i={},s={}){const r=new CustomEvent(e,{bubbles:s.bubbles??!0,cancelable:s.cancelable??!1,composed:s.composed??!0,detail:i});t.dispatchEvent(r)}(this,"config-changed",{config:t.detail.value})}};Or([Kn({attribute:!1})],_a.prototype,"hass",void 0),Or([Gn()],_a.prototype,"_config",void 0),_a=Or([qn(la)],_a);const ya={rising:"↑",falling:"↓",steady:"→",unknown:""},ka={rising:"Rising",falling:"Falling",steady:"Steady",unknown:""};let va=class extends In{constructor(){super(...arguments),this._trendDirection="unknown",this._pastValueDisplay=null,this._tracker=new na("analog-humidity-radial-card-trend-",pa,3e5),this._lastEntityUpdate=null}setConfig(t){if(!t.entity)throw new Error("You must specify a humidity sensor entity.");this._config=t}getCardSize(){return 4}static getConfigElement(){return document.createElement(la)}static getStubConfig(t){const e=Object.values(t?.states??{}).find(t=>t.entity_id.startsWith("sensor.")&&"humidity"===t.attributes.device_class);return{type:"custom:analog-humidity-radial-card",entity:e?.entity_id??""}}willUpdate(t){t.has("hass")&&this._maybeUpdateTrend()}_maybeUpdateTrend(){if(!this.hass||!this._config?.entity)return;const t=this.hass.states[this._config.entity];if(!t)return;const e=parseFloat(t.state);if(!Number.isFinite(e))return;const i=(this.hass,this._config.entity,"%"),s=pa(e),r=this._config.trend_hours??3,n=this._config.trend_threshold??3;if(this._lastEntityUpdate===t.last_updated)return;this._lastEntityUpdate=t.last_updated;const a=this._tracker.update(this.hass,this._config.entity,s,i,i,r,n,t=>{this._trendDirection=t.direction,this._pastValueDisplay=t.pastValueDisplay});this._trendDirection=a?.direction??"unknown",this._pastValueDisplay=a?.pastValueDisplay??null}render(){if(!this._config||!this.hass)return wn``;const t=this.hass.states[this._config.entity];if(!t)return wn`<ha-card>
        <div class="warning">Entity not found: ${this._config.entity}</div>
      </ha-card>`;const e=(this.hass,this._config.entity,"%"),i=parseFloat(t.state),s=Number.isFinite(i),r=s?pa(i):null,n=0,a=100,o=this._config.min??n,l=this._config.max??a,c=this._config.face_style??"classic",h=this._config.needle_color||ca[c],u=this._config.name??t.attributes.friendly_name??this._config.entity,d=ta[this._config.trend_text_size??"large"];return wn`
      <ha-card>
        <div class=${Zn({"card-content":!0,[`style-${c}`]:!0})}>
          <div class="title">${u}</div>
          ${ga({min:o,max:l,value:r,pastValue:this._pastValueDisplay,needleColor:h})}
          <div class="readout">
            <span class="value">${s?r.toFixed(0):"--"}</span>
            <span class="unit">${e}</span>
          </div>
          <div class="trend trend-${this._trendDirection}" style="font-size: ${d}rem">
            <span class="arrow">${ya[this._trendDirection]}</span>
            <span class="label">${ka[this._trendDirection]}</span>
          </div>
        </div>
      </ha-card>
    `}};var Aa;function wa(t,e,i,s){var r,n=arguments.length,a=n<3?e:s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}va.styles=[aa,Rr`
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
        margin-top: 2px;
      }
      .trend-rising {
        color: #2471a3;
      }
      .trend-falling {
        color: #b5651d;
      }
      .trend-steady {
        color: #27633f;
      }
      .trend .arrow {
        font-size: 1.2em;
        line-height: 1;
      }
    `],Or([Kn({attribute:!1})],va.prototype,"hass",void 0),Or([Gn()],va.prototype,"_config",void 0),Or([Gn()],va.prototype,"_trendDirection",void 0),Or([Gn()],va.prototype,"_pastValueDisplay",void 0),va=Or([qn(oa)],va),Aa={type:oa,name:"Analog Humidity (Radial)",preview:!1,description:"A classic analog-style radial hygrometer dial with humidity trend tracking."},window.customCards=window.customCards||[],window.customCards.push(Aa),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const xa=globalThis,Ea=xa.ShadowRoot&&(void 0===xa.ShadyCSS||xa.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Sa=Symbol(),Ca=new WeakMap;let Pa=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Sa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ea&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=Ca.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ca.set(e,t))}return t}toString(){return this.cssText}};const za=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new Pa(i,t,Sa)},Ua=Ea?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new Pa("string"==typeof t?t:t+"",void 0,Sa))(e)})(t):t,{is:Ma,defineProperty:Oa,getOwnPropertyDescriptor:Da,getOwnPropertyNames:Ta,getOwnPropertySymbols:Ha,getPrototypeOf:ja}=Object,Na=globalThis,Ra=Na.trustedTypes,La=Ra?Ra.emptyScript:"",Fa=Na.reactiveElementPolyfillSupport,Ia=(t,e)=>t,Va={toAttribute(t,e){switch(e){case Boolean:t=t?La:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},qa=(t,e)=>!Ma(t,e),Ba={attribute:!0,type:String,converter:Va,reflect:!1,useDefault:!1,hasChanged:qa};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),Na.litPropertyMetadata??=new WeakMap;let Wa=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ba){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Oa(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=Da(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ba}static _$Ei(){if(this.hasOwnProperty(Ia("elementProperties")))return;const t=ja(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ia("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ia("properties"))){const t=this.properties,e=[...Ta(t),...Ha(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(Ua(t))}else void 0!==t&&e.push(Ua(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(Ea)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=xa.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:Va).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:Va;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??qa)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};Wa.elementStyles=[],Wa.shadowRootOptions={mode:"open"},Wa[Ia("elementProperties")]=new Map,Wa[Ia("finalized")]=new Map,Fa?.({ReactiveElement:Wa}),(Na.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ka=globalThis,Ga=t=>t,Ja=Ka.trustedTypes,Za=Ja?Ja.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ya="$lit$",Qa=`lit$${Math.random().toFixed(9).slice(2)}$`,Xa="?"+Qa,to=`<${Xa}>`,eo=document,io=()=>eo.createComment(""),so=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ro=Array.isArray,no="[ \t\n\f\r]",ao=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oo=/-->/g,lo=/>/g,co=RegExp(`>|${no}(?:([^\\s"'>=/]+)(${no}*=${no}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ho=/'/g,uo=/"/g,fo=/^(?:script|style|textarea|title)$/i,go=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),po=go(1),bo=go(2),$o=Symbol.for("lit-noChange"),mo=Symbol.for("lit-nothing"),_o=new WeakMap,yo=eo.createTreeWalker(eo,129);function ko(t,e){if(!ro(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Za?Za.createHTML(e):e}class vo{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const a=t.length-1,o=this.parts,[l,c]=((t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",a=ao;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===ao?"!--"===l[1]?a=oo:void 0!==l[1]?a=lo:void 0!==l[2]?(fo.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=co):void 0!==l[3]&&(a=co):a===co?">"===l[0]?(a=r??ao,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?co:'"'===l[3]?uo:ho):a===uo||a===ho?a=co:a===oo||a===lo?a=ao:(a=co,r=void 0);const u=a===co&&t[e+1].startsWith("/>")?" ":"";n+=a===ao?i+to:c>=0?(s.push(o),i.slice(0,c)+Ya+i.slice(c)+Qa+u):i+Qa+(-2===c?e:u)}return[ko(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=vo.createElement(l,i),yo.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=yo.nextNode())&&o.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(Ya)){const e=c[n++],i=s.getAttribute(t).split(Qa),a=/([.?@])?(.*)/.exec(e);o.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?So:"?"===a[1]?Co:"@"===a[1]?Po:Eo}),s.removeAttribute(t)}else t.startsWith(Qa)&&(o.push({type:6,index:r}),s.removeAttribute(t));if(fo.test(s.tagName)){const t=s.textContent.split(Qa),e=t.length-1;if(e>0){s.textContent=Ja?Ja.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],io()),yo.nextNode(),o.push({type:2,index:++r});s.append(t[e],io())}}}else if(8===s.nodeType)if(s.data===Xa)o.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(Qa,t+1));)o.push({type:7,index:r}),t+=Qa.length-1}r++}}static createElement(t,e){const i=eo.createElement("template");return i.innerHTML=t,i}}function Ao(t,e,i=t,s){if(e===$o)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=so(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Ao(t,r._$AS(t,e.values),r,s)),e}class wo{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??eo).importNode(e,!0);yo.currentNode=s;let r=yo.nextNode(),n=0,a=0,o=i[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new xo(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new zo(r,this,t)),this._$AV.push(e),o=i[++a]}n!==o?.index&&(r=yo.nextNode(),n++)}return yo.currentNode=eo,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class xo{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=mo,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ao(this,t,e),so(t)?t===mo||null==t||""===t?(this._$AH!==mo&&this._$AR(),this._$AH=mo):t!==this._$AH&&t!==$o&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>ro(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==mo&&so(this._$AH)?this._$AA.nextSibling.data=t:this.T(eo.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=vo.createElement(ko(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new wo(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=_o.get(t.strings);return void 0===e&&_o.set(t.strings,e=new vo(t)),e}k(t){ro(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new xo(this.O(io()),this.O(io()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=Ga(t).nextSibling;Ga(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Eo{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=mo,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=mo}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Ao(this,t,e,0),n=!so(t)||t!==this._$AH&&t!==$o,n&&(this._$AH=t);else{const s=t;let a,o;for(t=r[0],a=0;a<r.length-1;a++)o=Ao(this,s[i+a],e,a),o===$o&&(o=this._$AH[a]),n||=!so(o)||o!==this._$AH[a],o===mo?t=mo:t!==mo&&(t+=(o??"")+r[a+1]),this._$AH[a]=o}n&&!s&&this.j(t)}j(t){t===mo?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class So extends Eo{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===mo?void 0:t}}class Co extends Eo{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==mo)}}class Po extends Eo{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Ao(this,t,e,0)??mo)===$o)return;const i=this._$AH,s=t===mo&&i!==mo||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==mo&&(i===mo||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class zo{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ao(this,t)}}const Uo=Ka.litHtmlPolyfillSupport;Uo?.(vo,xo),(Ka.litHtmlVersions??=[]).push("3.3.3");const Mo=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Oo=class extends Wa{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new xo(e.insertBefore(io(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $o}};Oo._$litElement$=!0,Oo.finalized=!0,Mo.litElementHydrateSupport?.({LitElement:Oo});const Do=Mo.litElementPolyfillSupport;Do?.({LitElement:Oo}),(Mo.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const To=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},Ho={attribute:!0,type:String,converter:Va,reflect:!1,hasChanged:qa},jo=(t=Ho,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function No(t){return(e,i)=>"object"==typeof i?jo(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ro{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lo=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Ro{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return $o}});function Fo(t,e,i,s){const r=(s-90)*Math.PI/180;return{x:t+i*Math.cos(r),y:e+i*Math.sin(r)}}function Io(t){return{name:t,selector:{text:{}}}}function Vo(t,e){return{name:t,selector:{select:{mode:"dropdown",options:e}}}}const qo=za`
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
`;za`
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
`;const Bo="analog-clock-card",Wo="analog-clock-card-editor",Ko={classic:"#333333",silver:"#222222",dark:"#e8e8e8",light:"#333333","led-backlit":"#a8ecff",fluorescent:"#d4ff7a",futuristic:"#7df9ff"},Go={classic:"#c0392b",silver:"#c0392b",dark:"#ff4d4d",light:"#c0392b","led-backlit":"#ff4d4d",fluorescent:"#baff29",futuristic:"#ff2fd0"},Jo=100;function Zo(t,e,i,s,r,n){return bo`<g class=${n} transform="rotate(${t} ${Jo} ${Jo})">
    <polygon
      points="${Jo},${Jo-e} ${Jo-s},${Jo+i} ${Jo+s},${Jo+i}"
      fill=${r}
    />
  </g>`}const Yo=[Io("name"),Vo("face_style",[{value:"classic",label:"Classic"},{value:"silver",label:"Silver"},{value:"dark",label:"Dark"},{value:"light",label:"Light"},{value:"led-backlit",label:"LED Backlit"},{value:"fluorescent",label:"Fluorescent"},{value:"futuristic",label:"Futuristic"}]),Io("time_zone"),{name:"show_seconds",selector:{boolean:{}}},Vo("second_hand_motion",[{value:"tick",label:"Tick (once per second)"},{value:"sweep",label:"Sweep (smooth)"}])],Qo=(Xo={name:"Name (optional)",face_style:"Face style",time_zone:"Time zone (optional, e.g. America/New_York — defaults to local time)",show_seconds:"Show second hand",second_hand_motion:"Second hand motion"},t=>Xo[t.name]??t.name);var Xo;let tl=class extends Oo{setConfig(t){this._config=t}render(){return this.hass&&this._config?po`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Yo}
        .computeLabel=${Qo}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:po``}_valueChanged(t){!function(t,e,i={},s={}){const r=new CustomEvent(e,{bubbles:s.bubbles??!0,cancelable:s.cancelable??!1,composed:s.composed??!0,detail:i});t.dispatchEvent(r)}(this,"config-changed",{config:t.detail.value})}};wa([No({attribute:!1})],tl.prototype,"hass",void 0),wa([No({state:!0,attribute:!1})],tl.prototype,"_config",void 0),tl=wa([To(Wo)],tl);const el=function(t,e=1e3){return class extends t{constructor(){super(...arguments),this.now=new Date}connectedCallback(){super.connectedCallback(),this._tick(),this._intervalId=setInterval(()=>this._tick(),e)}disconnectedCallback(){super.disconnectedCallback(),void 0!==this._intervalId&&(clearInterval(this._intervalId),this._intervalId=void 0)}_tick(){this.now=new Date,this.requestUpdate()}}}(Oo,200);let il=class extends el{setConfig(t){this._config=t}getCardSize(){return 4}static getConfigElement(){return document.createElement(Wo)}static getStubConfig(){return{type:"custom:analog-clock-card"}}render(){if(!this._config)return po``;const t=this._config.face_style??"classic",e=this._config.show_seconds??!0,i=this._config.second_hand_motion??"tick",s=Ko[t],r=Go[t],n=function(t,e){if(!e)return t;try{return new Date(t.toLocaleString("en-US",{timeZone:e}))}catch{return t}}(this.now,this._config.time_zone);return po`
      <ha-card>
        <div class=${Lo({"card-content":!0,[`style-${t}`]:!0})}>
          ${this._config.name?po`<div class="title">${this._config.name}</div>`:""}
          ${function(t){const{now:e,showSeconds:i,smoothSeconds:s,handColor:r,secondHandColor:n}=t;return bo`
    <svg viewBox="0 0 200 200" class="clock-dial" role="img" aria-label="Analog clock">
      <defs>${bo`
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
      <circle cx=${Jo} cy=${Jo} r="97" class="bezel" />
      <circle cx=${Jo} cy=${Jo} r="90" class="face" />
      ${function(){const t=[];for(let e=0;e<60;e++){const i=6*e,s=e%5==0,r=Fo(Jo,Jo,90-(s?8:4),i),n=Fo(Jo,Jo,90,i);t.push(bo`<line
      x1=${r.x} y1=${r.y} x2=${n.x} y2=${n.y}
      class=${s?"tick tick-major":"tick tick-minor"}
    />`)}return t}()}
      ${function(){const t=[];for(let e=1;e<=12;e++){const i=Fo(Jo,Jo,74,30*e);t.push(bo`<text x=${i.x} y=${i.y} class="numeral" text-anchor="middle" dominant-baseline="middle">${e}</text>`)}return t}()}
      ${Zo((l=e,(l.getHours()%12+l.getMinutes()/60+l.getSeconds()/3600)/12*360),45,10,4,r,"hand hour-hand")}
      ${Zo(function(t,e=!0){const i=e?t.getSeconds():0;return(t.getMinutes()+i/60)/60*360}(e),68,12,3,r,"hand minute-hand")}
      ${i?(a=function(t,e=!0){const i=e?t.getMilliseconds():0;return(t.getSeconds()+i/1e3)/60*360}(e,s),o=n,bo`<g class="hand second-hand" transform="rotate(${a} ${Jo} ${Jo})">
    <line x1=${Jo} y1=${118} x2=${Jo} y2=${22} stroke=${o} />
  </g>`):bo``}
      <circle cx=${Jo} cy=${Jo} r="6" class="hub" />
    </svg>
  `;var a,o,l}({now:n,showSeconds:e,smoothSeconds:"sweep"===i,handColor:s,secondHandColor:r})}
        </div>
      </ha-card>
    `}};var sl;il.styles=[qo,za`
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
      .clock-dial {
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
        stroke-width: 2;
        filter: var(--gauge-tick-major-filter);
      }
      .tick-minor {
        stroke-width: 1;
        opacity: 0.6;
      }
      .numeral {
        font-size: 13px;
        font-weight: 600;
        fill: var(--gauge-tick-label-fill);
      }
      .hand {
        filter: var(--gauge-needle-filter);
      }
      .second-hand line {
        stroke-width: 1.2;
      }
      .hub {
        fill: var(--gauge-hub-fill);
        stroke: var(--gauge-hub-stroke);
        stroke-width: 1;
      }
    `],wa([No({attribute:!1})],il.prototype,"hass",void 0),il=wa([To(Bo)],il),sl={type:Bo,name:"Analog Clock",preview:!1,description:"A classic analog clock face with hour, minute, and second hands."},window.customCards=window.customCards||[],window.customCards.push(sl);
