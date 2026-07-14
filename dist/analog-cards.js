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
const A=globalThis,w=t=>t,x=A.trustedTypes,E=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,z=`<${P}>`,U=document,M=()=>U.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,T="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,N=/>/g,R=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,F=/"/g,I=/^(?:script|style|textarea|title)$/i,q=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),V=q(1),B=q(2),W=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),G=new WeakMap,J=U.createTreeWalker(U,129);function Z(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}let Y=class t{constructor({strings:e,_$litType$:i},s){let r;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[c,h]=((t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",a=H;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===H?"!--"===l[1]?a=j:void 0!==l[1]?a=N:void 0!==l[2]?(I.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=R):void 0!==l[3]&&(a=R):a===R?">"===l[0]?(a=r??H,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?R:'"'===l[3]?F:L):a===F||a===L?a=R:a===j||a===N?a=H:(a=R,r=void 0);const u=a===R&&t[e+1].startsWith("/>")?" ":"";n+=a===H?i+z:c>=0?(s.push(o),i.slice(0,c)+S+i.slice(c)+C+u):i+C+(-2===c?e:u)}return[Z(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(e,i);if(this.el=t.createElement(c,s),J.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=J.nextNode())&&l.length<o;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(S)){const e=h[a++],i=r.getAttribute(t).split(C),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?it:"?"===s[1]?st:"@"===s[1]?rt:et}),r.removeAttribute(t)}else t.startsWith(C)&&(l.push({type:6,index:n}),r.removeAttribute(t));if(I.test(r.tagName)){const t=r.textContent.split(C),e=t.length-1;if(e>0){r.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],M()),J.nextNode(),l.push({type:2,index:++n});r.append(t[e],M())}}}else if(8===r.nodeType)if(r.data===P)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(C,t+1));)l.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}};function Q(t,e,i=t,s){if(e===W)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=O(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Q(t,r._$AS(t,e.values),r,s)),e}let X=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??U).importNode(e,!0);J.currentNode=s;let r=J.nextNode(),n=0,a=0,o=i[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new tt(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new nt(r,this,t)),this._$AV.push(e),o=i[++a]}n!==o?.index&&(r=J.nextNode(),n++)}return J.currentNode=U,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},tt=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),O(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Y(t)),e}k(e){D(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,r=0;for(const n of e)r===i.length?i.push(s=new t(this.O(M()),this.O(M()),this,this.options)):s=i[r],s._$AI(n),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},et=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Q(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const s=t;let a,o;for(t=r[0],a=0;a<r.length-1;a++)o=Q(this,s[i+a],e,a),o===W&&(o=this._$AH[a]),n||=!O(o)||o!==this._$AH[a],o===K?t=K:t!==K&&(t+=(o??"")+r[a+1]),this._$AH[a]=o}n&&!s&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},it=class extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}},st=class extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}},rt=class extends et{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??K)===W)return;const i=this._$AH,s=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==K&&(i===K||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},nt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}};const at=A.litHtmlPolyfillSupport;at?.(Y,tt),(A.litHtmlVersions??=[]).push("3.3.3");const ot=globalThis;
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
 */const bt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends pt{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return W}});function $t(t,e,i,s){const r=(s-90)*Math.PI/180;return{x:t+i*Math.cos(r),y:e+i*Math.sin(r)}}function mt(t,e,i,s,r){const n=$t(t,e,i,s),a=$t(t,e,i,r),o=r-s<=180?0:1;return`M ${n.x} ${n.y} A ${i} ${i} 0 ${o} 1 ${a.x} ${a.y}`}function _t(t,e,i,s){if(i<=e)return s.startAngle;let r;if(s.wrap){const s=i-e;r=((t-e)%s+s)%s/s}else r=(Math.min(i,Math.max(e,t))-e)/(i-e);return s.startAngle+r*s.sweepAngle}const yt="large",kt={small:.8,medium:.9,large:1.05,"x-large":1.2};function vt(t){return{name:t,selector:{text:{}}}}function At(t,e){return{name:t,selector:{number:{...e,mode:"box"}}}}function wt(t,e){return{name:t,selector:{select:{mode:"dropdown",options:e}}}}function xt(t,e,i){const s=t-e;return Math.abs(s)<i?"steady":s>0?"rising":"falling"}let Et=class{constructor(t,e,i=3e5){this.storageKeyPrefix=t,this.convert=e,this.throttleMs=i,this.cache=null,this.cachedEntityId=null,this.inFlight=null}storageKey(t){return`${this.storageKeyPrefix}${t}`}getCached(t){return this.cachedEntityId!==t&&(this.cachedEntityId=t,this.cache=function(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):null}catch{return null}}(this.storageKey(t))),this.cache}shouldFetch(t){const e=this.getCached(t);return!e||Date.now()-e.fetchedAt>this.throttleMs}update(t,e,i,s,r,n,a,o){const l=this.getCached(e);return this.inFlight||!this.shouldFetch(e)||(this.inFlight=async function(t,e,i){const s=`history/period/${new Date(Date.now()-36e5*i).toISOString()}?filter_entity_id=${encodeURIComponent(e)}&minimal_response&no_attributes`,r=await t.callApi("GET",s),n=r?.[0];if(!n?.length)return null;const a=n[0],o=a.state??a.s;if(void 0===o)return null;const l=parseFloat(o);return Number.isFinite(l)?l:null}(t,e,n).then(t=>{if(null===t)return{direction:"unknown",pastValueDisplay:null,fetchedAt:Date.now()};const e=this.convert(t,s,r);return{direction:xt(i,e,a),pastValueDisplay:e,fetchedAt:Date.now()}}).catch(()=>({direction:l?.direction??"unknown",pastValueDisplay:l?.pastValueDisplay??null,fetchedAt:Date.now()})).then(t=>(this.cache=t,function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}(this.storageKey(e),t),this.inFlight=null,o?.(t),t))),l}};const St=a`
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
`;const Ct="analog-barometer-card",Pt="analog-barometer-card-editor",zt="classic",Ut={classic:"#333333",silver:"#222222",dark:"#e8e8e8",light:"#333333","led-backlit":"#ff4d4d",fluorescent:"#baff29",futuristic:"#ff2fd0"},Mt={startAngle:-135,sweepAngle:270},Ot=[{key:"stormy",label:"Stormy",from:950,to:980,color:"#8b1a1a"},{key:"rain",label:"Rain",from:980,to:1e3,color:"#b5651d"},{key:"change",label:"Change",from:1e3,to:1015,color:"#c9a227"},{key:"fair",label:"Fair",from:1015,to:1030,color:"#4a7a3c"},{key:"v-dry",label:"Very Dry",from:1030,to:1050,color:"#2f5f4f"}],Dt={hPa:{major:10,minor:2},inHg:{major:.5,minor:.1}},Tt=33.8639,Ht=new Set(["inhg","inHg","in"]),jt=new Set(["hpa","mbar","mb"]);function Nt(t){return t/Tt}function Rt(t,e){return"inHg"===e?Nt(t):t}function Lt(t,e,i){return e===i?t:Rt(function(t,e){return"inHg"===e?t*Tt:t}(t,e),i)}function Ft(t,e){return t&&"auto"!==t?t:e}function It(t,e){const i=t.states[e]?.attributes?.unit_of_measurement;if(!i)return"hPa";const s=i.toLowerCase();return Ht.has(s)||s.includes("inhg")?"inHg":(jt.has(s),"hPa")}function qt(t){return"inHg"===t?Nt(1.5):1.5}const Vt=100;function Bt(t){const{min:e,max:i,unit:s,value:r,pastValue:n,needleColor:a}=t;return B`
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
      <circle cx=${Vt} cy=${Vt} r="97" class="bezel" />
      <circle cx=${Vt} cy=${Vt} r="90" class="face" />
      ${function(t,e,i){return Ot.map(s=>{const r=Rt(s.from,i),n=Rt(s.to,i);if(n<=t||r>=e)return B``;const a=_t(r,t,e,Mt),o=_t(n,t,e,Mt);if(o<=a)return B``;const l=mt(Vt,Vt,86,a,o);return B`<path
      d=${l}
      stroke=${s.color}
      stroke-width=${9}
      fill="none"
    />`})}(e,i,s)}
      ${function(t,e,i){const{major:s,minor:r}=Dt[i];return function(t,e,i,s,r){return function(t,e,i,s){if(i<=0||s<=0||e<=t)return[];const r=[],n=s/1e3;for(let a=t;a<=e+n;a+=s){const t=Math.round(a/s)*s,e=Math.abs(t/i-Math.round(t/i))<n;r.push({value:t,major:e})}return r}(t,e,i,s).map(i=>({...i,angle:_t(i.value,t,e,r)}))}(t,e,s,r,Mt).map(t=>{const e=t.major?8:4,i=$t(Vt,Vt,72-e,t.angle),s=$t(Vt,Vt,72,t.angle),r=B`<line
      x1=${i.x} y1=${i.y} x2=${s.x} y2=${s.y}
      class=${t.major?"tick tick-major":"tick tick-minor"}
    />`;if(!t.major)return r;const n=$t(Vt,Vt,50,t.angle),a=B`<text x=${n.x} y=${n.y} class="tick-label" text-anchor="middle" dominant-baseline="middle">${Math.round(10*t.value)/10}</text>`;return B`${r}${a}`})}(e,i,s)}
      ${function(t,e,i){return Ot.map(s=>{const r=Math.max(Rt(s.from,i),t),n=Math.min(Rt(s.to,i),e);if(n<=r)return B``;const a=_t(r,t,e,Mt),o=_t(n,t,e,Mt),l=`zone-label-path-${s.key}`,c=mt(Vt,Vt,77,a,o);return B`
      <path id=${l} d=${c} fill="none" stroke="none" />
      <text class="zone-label" dominant-baseline="middle">
        <textPath href=${"#"+l} startOffset="50%" text-anchor="middle">${s.label}</textPath>
      </text>
    `})}(e,i,s)}
      ${function(t,e,i){if(null===t)return B``;const s=_t(t,e,i,Mt),r=$t(Vt,Vt,88,s),n=$t(Vt,Vt,95,s);return B`<line
    x1=${r.x} y1=${r.y} x2=${n.x} y2=${n.y}
    class="trend-marker"
  />`}(n,e,i)}
      ${function(t,e,i,s){if(null===t)return B``;const r=_t(t,e,i,Mt);return B`<g class="needle" transform="rotate(${r} ${Vt} ${Vt})">
    <polygon
      points="${Vt},${38} ${97},${114} ${103},${114}"
      fill=${s}
    />
  </g>`}(r,e,i,a)}
      <circle cx=${Vt} cy=${Vt} r="6" class="hub" />
    </svg>
  `}const Wt=[{name:"entity",selector:{entity:{domain:"sensor"}}},vt("name"),wt("unit",[{value:"auto",label:"Auto-detect"},{value:"hPa",label:"hPa"},{value:"inHg",label:"inHg"}]),At("trend_hours",{min:1,max:12,step:1}),At("trend_threshold",{min:0,step:.1}),wt("trend_text_size",[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"},{value:"x-large",label:"Extra large"}]),wt("face_style",[{value:"classic",label:"Classic"},{value:"silver",label:"Silver"},{value:"dark",label:"Dark"},{value:"light",label:"Light"},{value:"led-backlit",label:"LED Backlit"},{value:"fluorescent",label:"Fluorescent"},{value:"futuristic",label:"Futuristic"}]),vt("needle_color")];const Kt=(Gt={entity:"Pressure sensor entity",name:"Name (optional)",unit:"Display unit",trend_hours:"Trend lookback (hours)",trend_threshold:"Trend threshold",trend_text_size:"Trend text size",face_style:"Face style",needle_color:"Needle color (optional, overrides face style default)"},t=>Gt[t.name]??t.name);var Gt;let Jt=class extends lt{setConfig(t){this._config=t}render(){return this.hass&&this._config?V`
      <ha-form
        .hass=${this.hass}
        .data=${this._effectiveData(this.hass,this._config)}
        .schema=${Wt}
        .computeLabel=${Kt}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:V``}_effectiveData(t,e){const i=e.entity?It(t,e.entity):"hPa",s=Ft(e.unit,i),r=e.face_style??zt;return{...e,unit:e.unit??"auto",trend_hours:e.trend_hours??3,trend_threshold:e.trend_threshold??qt(s),trend_text_size:e.trend_text_size??yt,face_style:r,needle_color:e.needle_color||Ut[r]}}_valueChanged(t){!function(t,e,i={},s={}){const r=new CustomEvent(e,{bubbles:s.bubbles??!0,cancelable:s.cancelable??!1,composed:s.composed??!0,detail:i});t.dispatchEvent(r)}(this,"config-changed",{config:t.detail.value})}};t([ft({attribute:!1})],Jt.prototype,"hass",void 0),t([gt()],Jt.prototype,"_config",void 0),Jt=t([ht(Pt)],Jt);const Zt={rising:"↑",falling:"↓",steady:"→",unknown:""},Yt={rising:"Rising",falling:"Falling",steady:"Steady",unknown:""};let Qt=class extends lt{constructor(){super(...arguments),this._trendDirection="unknown",this._pastValueDisplay=null,this._tracker=new Et("analog-barometer-card-trend-",Lt,3e5),this._lastEntityUpdate=null}setConfig(t){if(!t.entity)throw new Error("You must specify a pressure sensor entity.");this._config=t}getCardSize(){return 4}static getConfigElement(){return document.createElement(Pt)}static getStubConfig(t){const e=Object.values(t?.states??{}).find(t=>t.entity_id.startsWith("sensor.")&&"atmospheric_pressure"===t.attributes.device_class);return{type:"custom:analog-barometer-card",entity:e?.entity_id??""}}willUpdate(t){t.has("hass")&&this._maybeUpdateTrend()}_maybeUpdateTrend(){if(!this.hass||!this._config?.entity)return;const t=this.hass.states[this._config.entity];if(!t)return;const e=parseFloat(t.state);if(!Number.isFinite(e))return;const i=It(this.hass,this._config.entity),s=Ft(this._config.unit,i),r=Lt(e,i,s),n=this._config.trend_hours??3,a=this._config.trend_threshold??qt(s);if(this._lastEntityUpdate===t.last_updated)return;this._lastEntityUpdate=t.last_updated;const o=this._tracker.update(this.hass,this._config.entity,r,i,s,n,a,t=>{this._trendDirection=t.direction,this._pastValueDisplay=t.pastValueDisplay});this._trendDirection=o?.direction??"unknown",this._pastValueDisplay=o?.pastValueDisplay??null}render(){if(!this._config||!this.hass)return V``;const t=this.hass.states[this._config.entity];if(!t)return V`<ha-card>
        <div class="warning">Entity not found: ${this._config.entity}</div>
      </ha-card>`;const e=It(this.hass,this._config.entity),i=Ft(this._config.unit,e),s=parseFloat(t.state),r=Number.isFinite(s),n=r?Lt(s,e,i):null,a="inHg"===i?{min:Nt(950),max:Nt(1050)}:{min:950,max:1050},o=this._config.min??a.min,l=this._config.max??a.max,c=this._config.face_style??zt,h=this._config.needle_color||Ut[c],u=this._config.name??t.attributes.friendly_name??this._config.entity,d=kt[this._config.trend_text_size??yt];return V`
      <ha-card>
        <div class=${bt({"card-content":!0,[`style-${c}`]:!0})}>
          <div class="title">${u}</div>
          ${Bt({min:o,max:l,unit:i,value:n,pastValue:this._pastValueDisplay,needleColor:h})}
          <div class="readout">
            <span class="value">${r?n.toFixed(1):"--"}</span>
            <span class="unit">${i}</span>
          </div>
          <div class="trend trend-${this._trendDirection}" style="font-size: ${d}rem">
            <span class="arrow">${Zt[this._trendDirection]}</span>
            <span class="label">${Yt[this._trendDirection]}</span>
          </div>
        </div>
      </ha-card>
    `}};var Xt;function te(t,e,i,s){var r,n=arguments.length,a=n<3?e:s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}Qt.styles=[St,a`
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
    `],t([ft({attribute:!1})],Qt.prototype,"hass",void 0),t([gt()],Qt.prototype,"_config",void 0),t([gt()],Qt.prototype,"_trendDirection",void 0),t([gt()],Qt.prototype,"_pastValueDisplay",void 0),Qt=t([ht(Ct)],Qt),Xt={type:Ct,name:"Analog Barometer",preview:!1,description:"A classic analog-style barometer with pressure trend tracking."},window.customCards=window.customCards||[],window.customCards.push(Xt),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee=globalThis,ie=ee.ShadowRoot&&(void 0===ee.ShadyCSS||ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,se=Symbol(),re=new WeakMap;let ne=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ie&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=re.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&re.set(e,t))}return t}toString(){return this.cssText}};const ae=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new ne(i,t,se)},oe=ie?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new ne("string"==typeof t?t:t+"",void 0,se))(e)})(t):t,{is:le,defineProperty:ce,getOwnPropertyDescriptor:he,getOwnPropertyNames:ue,getOwnPropertySymbols:de,getPrototypeOf:fe}=Object,ge=globalThis,pe=ge.trustedTypes,be=pe?pe.emptyScript:"",$e=ge.reactiveElementPolyfillSupport,me=(t,e)=>t,_e={toAttribute(t,e){switch(e){case Boolean:t=t?be:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},ye=(t,e)=>!le(t,e),ke={attribute:!0,type:String,converter:_e,reflect:!1,useDefault:!1,hasChanged:ye};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),ge.litPropertyMetadata??=new WeakMap;let ve=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ke){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&ce(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=he(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ke}static _$Ei(){if(this.hasOwnProperty(me("elementProperties")))return;const t=fe(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(me("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(me("properties"))){const t=this.properties,e=[...ue(t),...de(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(oe(t))}else void 0!==t&&e.push(oe(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(ie)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=ee.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:_e).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_e;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??ye)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};ve.elementStyles=[],ve.shadowRootOptions={mode:"open"},ve[me("elementProperties")]=new Map,ve[me("finalized")]=new Map,$e?.({ReactiveElement:ve}),(ge.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ae=globalThis,we=t=>t,xe=Ae.trustedTypes,Ee=xe?xe.createPolicy("lit-html",{createHTML:t=>t}):void 0,Se="$lit$",Ce=`lit$${Math.random().toFixed(9).slice(2)}$`,Pe="?"+Ce,ze=`<${Pe}>`,Ue=document,Me=()=>Ue.createComment(""),Oe=t=>null===t||"object"!=typeof t&&"function"!=typeof t,De=Array.isArray,Te="[ \t\n\f\r]",He=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,je=/-->/g,Ne=/>/g,Re=RegExp(`>|${Te}(?:([^\\s"'>=/]+)(${Te}*=${Te}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Le=/'/g,Fe=/"/g,Ie=/^(?:script|style|textarea|title)$/i,qe=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Ve=qe(1),Be=qe(2),We=Symbol.for("lit-noChange"),Ke=Symbol.for("lit-nothing"),Ge=new WeakMap,Je=Ue.createTreeWalker(Ue,129);function Ze(t,e){if(!De(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Ee?Ee.createHTML(e):e}let Ye=class t{constructor({strings:e,_$litType$:i},s){let r;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[c,h]=((t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",a=He;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===He?"!--"===l[1]?a=je:void 0!==l[1]?a=Ne:void 0!==l[2]?(Ie.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=Re):void 0!==l[3]&&(a=Re):a===Re?">"===l[0]?(a=r??He,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?Re:'"'===l[3]?Fe:Le):a===Fe||a===Le?a=Re:a===je||a===Ne?a=He:(a=Re,r=void 0);const u=a===Re&&t[e+1].startsWith("/>")?" ":"";n+=a===He?i+ze:c>=0?(s.push(o),i.slice(0,c)+Se+i.slice(c)+Ce+u):i+Ce+(-2===c?e:u)}return[Ze(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(e,i);if(this.el=t.createElement(c,s),Je.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=Je.nextNode())&&l.length<o;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(Se)){const e=h[a++],i=r.getAttribute(t).split(Ce),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?ii:"?"===s[1]?si:"@"===s[1]?ri:ei}),r.removeAttribute(t)}else t.startsWith(Ce)&&(l.push({type:6,index:n}),r.removeAttribute(t));if(Ie.test(r.tagName)){const t=r.textContent.split(Ce),e=t.length-1;if(e>0){r.textContent=xe?xe.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],Me()),Je.nextNode(),l.push({type:2,index:++n});r.append(t[e],Me())}}}else if(8===r.nodeType)if(r.data===Pe)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(Ce,t+1));)l.push({type:7,index:n}),t+=Ce.length-1}n++}}static createElement(t,e){const i=Ue.createElement("template");return i.innerHTML=t,i}};function Qe(t,e,i=t,s){if(e===We)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=Oe(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Qe(t,r._$AS(t,e.values),r,s)),e}let Xe=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??Ue).importNode(e,!0);Je.currentNode=s;let r=Je.nextNode(),n=0,a=0,o=i[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new ti(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new ni(r,this,t)),this._$AV.push(e),o=i[++a]}n!==o?.index&&(r=Je.nextNode(),n++)}return Je.currentNode=Ue,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},ti=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Ke,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Qe(this,t,e),Oe(t)?t===Ke||null==t||""===t?(this._$AH!==Ke&&this._$AR(),this._$AH=Ke):t!==this._$AH&&t!==We&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>De(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Ke&&Oe(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ue.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Ye.createElement(Ze(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Xe(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Ge.get(t.strings);return void 0===e&&Ge.set(t.strings,e=new Ye(t)),e}k(e){De(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,r=0;for(const n of e)r===i.length?i.push(s=new t(this.O(Me()),this.O(Me()),this,this.options)):s=i[r],s._$AI(n),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=we(t).nextSibling;we(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},ei=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=Ke,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ke}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Qe(this,t,e,0),n=!Oe(t)||t!==this._$AH&&t!==We,n&&(this._$AH=t);else{const s=t;let a,o;for(t=r[0],a=0;a<r.length-1;a++)o=Qe(this,s[i+a],e,a),o===We&&(o=this._$AH[a]),n||=!Oe(o)||o!==this._$AH[a],o===Ke?t=Ke:t!==Ke&&(t+=(o??"")+r[a+1]),this._$AH[a]=o}n&&!s&&this.j(t)}j(t){t===Ke?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ii=class extends ei{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ke?void 0:t}},si=class extends ei{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Ke)}},ri=class extends ei{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Qe(this,t,e,0)??Ke)===We)return;const i=this._$AH,s=t===Ke&&i!==Ke||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==Ke&&(i===Ke||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ni=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Qe(this,t)}};const ai=Ae.litHtmlPolyfillSupport;ai?.(Ye,ti),(Ae.litHtmlVersions??=[]).push("3.3.3");const oi=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let li=class extends ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new ti(e.insertBefore(Me(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return We}};li._$litElement$=!0,li.finalized=!0,oi.litElementHydrateSupport?.({LitElement:li});const ci=oi.litElementPolyfillSupport;ci?.({LitElement:li}),(oi.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hi=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ui={attribute:!0,type:String,converter:_e,reflect:!1,hasChanged:ye},di=(t=ui,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fi(t){return(e,i)=>"object"==typeof i?di(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gi(t){return fi({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pi=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends pi{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return We}});function $i(t,e,i,s){const r=(s-90)*Math.PI/180;return{x:t+i*Math.cos(r),y:e+i*Math.sin(r)}}function mi(t,e,i,s,r){const n=$i(t,e,i,s),a=$i(t,e,i,r),o=r-s<=180?0:1;return`M ${n.x} ${n.y} A ${i} ${i} 0 ${o} 1 ${a.x} ${a.y}`}function _i(t,e,i,s){if(i<=e)return s.startAngle;let r;if(s.wrap){const s=i-e;r=((t-e)%s+s)%s/s}else r=(Math.min(i,Math.max(e,t))-e)/(i-e);return s.startAngle+r*s.sweepAngle}const yi="large",ki={small:.8,medium:.9,large:1.05,"x-large":1.2};function vi(t){return{name:t,selector:{text:{}}}}function Ai(t,e){return{name:t,selector:{number:{...e,mode:"box"}}}}function wi(t,e){return{name:t,selector:{select:{mode:"dropdown",options:e}}}}function xi(t,e,i){const s=t-e;return Math.abs(s)<i?"steady":s>0?"rising":"falling"}let Ei=class{constructor(t,e,i=3e5){this.storageKeyPrefix=t,this.convert=e,this.throttleMs=i,this.cache=null,this.cachedEntityId=null,this.inFlight=null}storageKey(t){return`${this.storageKeyPrefix}${t}`}getCached(t){return this.cachedEntityId!==t&&(this.cachedEntityId=t,this.cache=function(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):null}catch{return null}}(this.storageKey(t))),this.cache}shouldFetch(t){const e=this.getCached(t);return!e||Date.now()-e.fetchedAt>this.throttleMs}update(t,e,i,s,r,n,a,o){const l=this.getCached(e);return this.inFlight||!this.shouldFetch(e)||(this.inFlight=async function(t,e,i){const s=`history/period/${new Date(Date.now()-36e5*i).toISOString()}?filter_entity_id=${encodeURIComponent(e)}&minimal_response&no_attributes`,r=await t.callApi("GET",s),n=r?.[0];if(!n?.length)return null;const a=n[0],o=a.state??a.s;if(void 0===o)return null;const l=parseFloat(o);return Number.isFinite(l)?l:null}(t,e,n).then(t=>{if(null===t)return{direction:"unknown",pastValueDisplay:null,fetchedAt:Date.now()};const e=this.convert(t,s,r);return{direction:xi(i,e,a),pastValueDisplay:e,fetchedAt:Date.now()}}).catch(()=>({direction:l?.direction??"unknown",pastValueDisplay:l?.pastValueDisplay??null,fetchedAt:Date.now()})).then(t=>(this.cache=t,function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}(this.storageKey(e),t),this.inFlight=null,o?.(t),t))),l}};const Si=ae`
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
`;ae`
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
`;const Ci="analog-thermometer-radial-card",Pi="analog-thermometer-radial-card-editor",zi="classic",Ui={classic:"#333333",silver:"#222222",dark:"#e8e8e8",light:"#333333","led-backlit":"#ff4d4d",fluorescent:"#baff29",futuristic:"#ff2fd0"},Mi={startAngle:-135,sweepAngle:270},Oi=[{key:"freezing",label:"Freezing",from:-20,to:0,color:"#2471a3"},{key:"cold",label:"Cold",from:0,to:15,color:"#5dade2"},{key:"comfortable",label:"Comfortable",from:15,to:25,color:"#4a7a3c"},{key:"warm",label:"Warm",from:25,to:32,color:"#c9a227"},{key:"hot",label:"Hot",from:32,to:45,color:"#b5651d"}],Di={"°C":{major:10,minor:2},"°F":{major:20,minor:5}};function Ti(t){return 9*t/5+32}function Hi(t,e){return"°F"===e?Ti(t):t}function ji(t,e,i){return e===i?t:Hi(function(t,e){return"°F"===e?function(t){return 5*(t-32)/9}(t):t}(t,e),i)}function Ni(t,e){return t&&"auto"!==t?t:e}function Ri(t,e){const i=t.states[e]?.attributes?.unit_of_measurement;return i&&i.toLowerCase().includes("f")?"°F":"°C"}function Li(t){return"°F"===t?1.8:1}const Fi=100;function Ii(t){const{min:e,max:i,unit:s,value:r,pastValue:n,needleColor:a}=t;return Be`
    <svg viewBox="0 0 200 200" class="dial" role="img" aria-label="Thermometer dial">
      <defs>${Be`
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
      <circle cx=${Fi} cy=${Fi} r="97" class="bezel" />
      <circle cx=${Fi} cy=${Fi} r="90" class="face" />
      ${function(t,e,i){return Oi.map(s=>{const r=Hi(s.from,i),n=Hi(s.to,i);if(n<=t||r>=e)return Be``;const a=_i(r,t,e,Mi),o=_i(n,t,e,Mi);if(o<=a)return Be``;const l=mi(Fi,Fi,86,a,o);return Be`<path
      d=${l}
      stroke=${s.color}
      stroke-width=${9}
      fill="none"
    />`})}(e,i,s)}
      ${function(t,e,i){const{major:s,minor:r}=Di[i];return function(t,e,i,s,r){return function(t,e,i,s){if(i<=0||s<=0||e<=t)return[];const r=[],n=s/1e3;for(let a=t;a<=e+n;a+=s){const t=Math.round(a/s)*s,e=Math.abs(t/i-Math.round(t/i))<n;r.push({value:t,major:e})}return r}(t,e,i,s).map(i=>({...i,angle:_i(i.value,t,e,r)}))}(t,e,s,r,Mi).map(t=>{const e=t.major?8:4,i=$i(Fi,Fi,72-e,t.angle),s=$i(Fi,Fi,72,t.angle),r=Be`<line
      x1=${i.x} y1=${i.y} x2=${s.x} y2=${s.y}
      class=${t.major?"tick tick-major":"tick tick-minor"}
    />`;if(!t.major)return r;const n=$i(Fi,Fi,50,t.angle),a=Be`<text x=${n.x} y=${n.y} class="tick-label" text-anchor="middle" dominant-baseline="middle">${Math.round(10*t.value)/10}</text>`;return Be`${r}${a}`})}(e,i,s)}
      ${function(t,e,i){return Oi.map(s=>{const r=Math.max(Hi(s.from,i),t),n=Math.min(Hi(s.to,i),e);if(n<=r)return Be``;const a=_i(r,t,e,Mi),o=_i(n,t,e,Mi),l=`zone-label-path-${s.key}`,c=mi(Fi,Fi,77,a,o);return Be`
      <path id=${l} d=${c} fill="none" stroke="none" />
      <text class="zone-label" dominant-baseline="middle">
        <textPath href=${"#"+l} startOffset="50%" text-anchor="middle">${s.label}</textPath>
      </text>
    `})}(e,i,s)}
      ${function(t,e,i){if(null===t)return Be``;const s=_i(t,e,i,Mi),r=$i(Fi,Fi,88,s),n=$i(Fi,Fi,95,s);return Be`<line
    x1=${r.x} y1=${r.y} x2=${n.x} y2=${n.y}
    class="trend-marker"
  />`}(n,e,i)}
      ${function(t,e,i,s){if(null===t)return Be``;const r=_i(t,e,i,Mi);return Be`<g class="needle" transform="rotate(${r} ${Fi} ${Fi})">
    <polygon
      points="${Fi},${38} ${97},${114} ${103},${114}"
      fill=${s}
    />
  </g>`}(r,e,i,a)}
      <circle cx=${Fi} cy=${Fi} r="6" class="hub" />
    </svg>
  `}const qi=[{name:"entity",selector:{entity:{domain:"sensor"}}},vi("name"),wi("unit",[{value:"auto",label:"Auto-detect"},{value:"°C",label:"°C"},{value:"°F",label:"°F"}]),Ai("trend_hours",{min:1,max:12,step:1}),Ai("trend_threshold",{min:0,step:.1}),wi("trend_text_size",[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"},{value:"x-large",label:"Extra large"}]),wi("face_style",[{value:"classic",label:"Classic"},{value:"silver",label:"Silver"},{value:"dark",label:"Dark"},{value:"light",label:"Light"},{value:"led-backlit",label:"LED Backlit"},{value:"fluorescent",label:"Fluorescent"},{value:"futuristic",label:"Futuristic"}]),vi("needle_color")];const Vi=(Bi={entity:"Temperature sensor entity",name:"Name (optional)",unit:"Display unit",trend_hours:"Trend lookback (hours)",trend_threshold:"Trend threshold",trend_text_size:"Trend text size",face_style:"Face style",needle_color:"Needle color (optional, overrides face style default)"},t=>Bi[t.name]??t.name);var Bi;let Wi=class extends li{setConfig(t){this._config=t}render(){return this.hass&&this._config?Ve`
      <ha-form
        .hass=${this.hass}
        .data=${this._effectiveData(this.hass,this._config)}
        .schema=${qi}
        .computeLabel=${Vi}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:Ve``}_effectiveData(t,e){const i=e.entity?Ri(t,e.entity):"°C",s=Ni(e.unit,i),r=e.face_style??zi;return{...e,unit:e.unit??"auto",trend_hours:e.trend_hours??3,trend_threshold:e.trend_threshold??Li(s),trend_text_size:e.trend_text_size??yi,face_style:r,needle_color:e.needle_color||Ui[r]}}_valueChanged(t){!function(t,e,i={},s={}){const r=new CustomEvent(e,{bubbles:s.bubbles??!0,cancelable:s.cancelable??!1,composed:s.composed??!0,detail:i});t.dispatchEvent(r)}(this,"config-changed",{config:t.detail.value})}};te([fi({attribute:!1})],Wi.prototype,"hass",void 0),te([gi()],Wi.prototype,"_config",void 0),Wi=te([hi(Pi)],Wi);const Ki={rising:"↑",falling:"↓",steady:"→",unknown:""},Gi={rising:"Rising",falling:"Falling",steady:"Steady",unknown:""};let Ji=class extends li{constructor(){super(...arguments),this._trendDirection="unknown",this._pastValueDisplay=null,this._tracker=new Ei("analog-thermometer-radial-card-trend-",ji,3e5),this._lastEntityUpdate=null}setConfig(t){if(!t.entity)throw new Error("You must specify a temperature sensor entity.");this._config=t}getCardSize(){return 4}static getConfigElement(){return document.createElement(Pi)}static getStubConfig(t){const e=Object.values(t?.states??{}).find(t=>t.entity_id.startsWith("sensor.")&&"temperature"===t.attributes.device_class);return{type:"custom:analog-thermometer-radial-card",entity:e?.entity_id??""}}willUpdate(t){t.has("hass")&&this._maybeUpdateTrend()}_maybeUpdateTrend(){if(!this.hass||!this._config?.entity)return;const t=this.hass.states[this._config.entity];if(!t)return;const e=parseFloat(t.state);if(!Number.isFinite(e))return;const i=Ri(this.hass,this._config.entity),s=Ni(this._config.unit,i),r=ji(e,i,s),n=this._config.trend_hours??3,a=this._config.trend_threshold??Li(s);if(this._lastEntityUpdate===t.last_updated)return;this._lastEntityUpdate=t.last_updated;const o=this._tracker.update(this.hass,this._config.entity,r,i,s,n,a,t=>{this._trendDirection=t.direction,this._pastValueDisplay=t.pastValueDisplay});this._trendDirection=o?.direction??"unknown",this._pastValueDisplay=o?.pastValueDisplay??null}render(){if(!this._config||!this.hass)return Ve``;const t=this.hass.states[this._config.entity];if(!t)return Ve`<ha-card>
        <div class="warning">Entity not found: ${this._config.entity}</div>
      </ha-card>`;const e=Ri(this.hass,this._config.entity),i=Ni(this._config.unit,e),s=parseFloat(t.state),r=Number.isFinite(s),n=r?ji(s,e,i):null,a="°F"===i?{min:Ti(-20),max:Ti(45)}:{min:-20,max:45},o=this._config.min??a.min,l=this._config.max??a.max,c=this._config.face_style??zi,h=this._config.needle_color||Ui[c],u=this._config.name??t.attributes.friendly_name??this._config.entity,d=ki[this._config.trend_text_size??yi];return Ve`
      <ha-card>
        <div class=${bi({"card-content":!0,[`style-${c}`]:!0})}>
          <div class="title">${u}</div>
          ${Ii({min:o,max:l,unit:i,value:n,pastValue:this._pastValueDisplay,needleColor:h})}
          <div class="readout">
            <span class="value">${r?n.toFixed(1):"--"}</span>
            <span class="unit">${i}</span>
          </div>
          <div class="trend trend-${this._trendDirection}" style="font-size: ${d}rem">
            <span class="arrow">${Ki[this._trendDirection]}</span>
            <span class="label">${Gi[this._trendDirection]}</span>
          </div>
        </div>
      </ha-card>
    `}};var Zi;function Yi(t,e,i,s){var r,n=arguments.length,a=n<3?e:s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}Ji.styles=[Si,ae`
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
    `],te([fi({attribute:!1})],Ji.prototype,"hass",void 0),te([gi()],Ji.prototype,"_config",void 0),te([gi()],Ji.prototype,"_trendDirection",void 0),te([gi()],Ji.prototype,"_pastValueDisplay",void 0),Ji=te([hi(Ci)],Ji),Zi={type:Ci,name:"Analog Thermometer (Radial)",preview:!1,description:"A classic analog-style radial thermometer dial with temperature trend tracking."},window.customCards=window.customCards||[],window.customCards.push(Zi),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qi=globalThis,Xi=Qi.ShadowRoot&&(void 0===Qi.ShadyCSS||Qi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ts=Symbol(),es=new WeakMap;let is=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ts)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Xi&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=es.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&es.set(e,t))}return t}toString(){return this.cssText}};const ss=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new is(i,t,ts)},rs=Xi?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new is("string"==typeof t?t:t+"",void 0,ts))(e)})(t):t,{is:ns,defineProperty:as,getOwnPropertyDescriptor:os,getOwnPropertyNames:ls,getOwnPropertySymbols:cs,getPrototypeOf:hs}=Object,us=globalThis,ds=us.trustedTypes,fs=ds?ds.emptyScript:"",gs=us.reactiveElementPolyfillSupport,ps=(t,e)=>t,bs={toAttribute(t,e){switch(e){case Boolean:t=t?fs:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$s=(t,e)=>!ns(t,e),ms={attribute:!0,type:String,converter:bs,reflect:!1,useDefault:!1,hasChanged:$s};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),us.litPropertyMetadata??=new WeakMap;let _s=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ms){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&as(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=os(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ms}static _$Ei(){if(this.hasOwnProperty(ps("elementProperties")))return;const t=hs(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ps("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ps("properties"))){const t=this.properties,e=[...ls(t),...cs(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(rs(t))}else void 0!==t&&e.push(rs(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(Xi)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=Qi.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:bs).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:bs;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??$s)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};_s.elementStyles=[],_s.shadowRootOptions={mode:"open"},_s[ps("elementProperties")]=new Map,_s[ps("finalized")]=new Map,gs?.({ReactiveElement:_s}),(us.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ys=globalThis,ks=t=>t,vs=ys.trustedTypes,As=vs?vs.createPolicy("lit-html",{createHTML:t=>t}):void 0,ws="$lit$",xs=`lit$${Math.random().toFixed(9).slice(2)}$`,Es="?"+xs,Ss=`<${Es}>`,Cs=document,Ps=()=>Cs.createComment(""),zs=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Us=Array.isArray,Ms="[ \t\n\f\r]",Os=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ds=/-->/g,Ts=/>/g,Hs=RegExp(`>|${Ms}(?:([^\\s"'>=/]+)(${Ms}*=${Ms}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),js=/'/g,Ns=/"/g,Rs=/^(?:script|style|textarea|title)$/i,Ls=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Fs=Ls(1),Is=Ls(2),qs=Symbol.for("lit-noChange"),Vs=Symbol.for("lit-nothing"),Bs=new WeakMap,Ws=Cs.createTreeWalker(Cs,129);function Ks(t,e){if(!Us(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==As?As.createHTML(e):e}let Gs=class t{constructor({strings:e,_$litType$:i},s){let r;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[c,h]=((t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",a=Os;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===Os?"!--"===l[1]?a=Ds:void 0!==l[1]?a=Ts:void 0!==l[2]?(Rs.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=Hs):void 0!==l[3]&&(a=Hs):a===Hs?">"===l[0]?(a=r??Os,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?Hs:'"'===l[3]?Ns:js):a===Ns||a===js?a=Hs:a===Ds||a===Ts?a=Os:(a=Hs,r=void 0);const u=a===Hs&&t[e+1].startsWith("/>")?" ":"";n+=a===Os?i+Ss:c>=0?(s.push(o),i.slice(0,c)+ws+i.slice(c)+xs+u):i+xs+(-2===c?e:u)}return[Ks(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(e,i);if(this.el=t.createElement(c,s),Ws.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=Ws.nextNode())&&l.length<o;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(ws)){const e=h[a++],i=r.getAttribute(t).split(xs),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?Xs:"?"===s[1]?tr:"@"===s[1]?er:Qs}),r.removeAttribute(t)}else t.startsWith(xs)&&(l.push({type:6,index:n}),r.removeAttribute(t));if(Rs.test(r.tagName)){const t=r.textContent.split(xs),e=t.length-1;if(e>0){r.textContent=vs?vs.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],Ps()),Ws.nextNode(),l.push({type:2,index:++n});r.append(t[e],Ps())}}}else if(8===r.nodeType)if(r.data===Es)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(xs,t+1));)l.push({type:7,index:n}),t+=xs.length-1}n++}}static createElement(t,e){const i=Cs.createElement("template");return i.innerHTML=t,i}};function Js(t,e,i=t,s){if(e===qs)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=zs(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Js(t,r._$AS(t,e.values),r,s)),e}let Zs=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??Cs).importNode(e,!0);Ws.currentNode=s;let r=Ws.nextNode(),n=0,a=0,o=i[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new Ys(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new ir(r,this,t)),this._$AV.push(e),o=i[++a]}n!==o?.index&&(r=Ws.nextNode(),n++)}return Ws.currentNode=Cs,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Ys=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Vs,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Js(this,t,e),zs(t)?t===Vs||null==t||""===t?(this._$AH!==Vs&&this._$AR(),this._$AH=Vs):t!==this._$AH&&t!==qs&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>Us(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Vs&&zs(this._$AH)?this._$AA.nextSibling.data=t:this.T(Cs.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Gs.createElement(Ks(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Zs(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Bs.get(t.strings);return void 0===e&&Bs.set(t.strings,e=new Gs(t)),e}k(e){Us(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,r=0;for(const n of e)r===i.length?i.push(s=new t(this.O(Ps()),this.O(Ps()),this,this.options)):s=i[r],s._$AI(n),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=ks(t).nextSibling;ks(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},Qs=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=Vs,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Vs}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Js(this,t,e,0),n=!zs(t)||t!==this._$AH&&t!==qs,n&&(this._$AH=t);else{const s=t;let a,o;for(t=r[0],a=0;a<r.length-1;a++)o=Js(this,s[i+a],e,a),o===qs&&(o=this._$AH[a]),n||=!zs(o)||o!==this._$AH[a],o===Vs?t=Vs:t!==Vs&&(t+=(o??"")+r[a+1]),this._$AH[a]=o}n&&!s&&this.j(t)}j(t){t===Vs?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Xs=class extends Qs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Vs?void 0:t}},tr=class extends Qs{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Vs)}},er=class extends Qs{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Js(this,t,e,0)??Vs)===qs)return;const i=this._$AH,s=t===Vs&&i!==Vs||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==Vs&&(i===Vs||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ir=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Js(this,t)}};const sr=ys.litHtmlPolyfillSupport;sr?.(Gs,Ys),(ys.litHtmlVersions??=[]).push("3.3.3");const rr=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let nr=class extends _s{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Ys(e.insertBefore(Ps(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return qs}};nr._$litElement$=!0,nr.finalized=!0,rr.litElementHydrateSupport?.({LitElement:nr});const ar=rr.litElementPolyfillSupport;ar?.({LitElement:nr}),(rr.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const or=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lr={attribute:!0,type:String,converter:bs,reflect:!1,hasChanged:$s},cr=(t=lr,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function hr(t){return(e,i)=>"object"==typeof i?cr(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ur(t){return hr({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let dr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fr=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends dr{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return qs}});function gr(t,e,i,s,r){return i<=e?s:s+(Math.min(i,Math.max(e,t))-e)/(i-e)*(r-s)}const pr="large",br={small:.8,medium:.9,large:1.05,"x-large":1.2};function $r(t){return{name:t,selector:{text:{}}}}function mr(t,e){return{name:t,selector:{number:{...e,mode:"box"}}}}function _r(t,e){return{name:t,selector:{select:{mode:"dropdown",options:e}}}}function yr(t,e,i){const s=t-e;return Math.abs(s)<i?"steady":s>0?"rising":"falling"}let kr=class{constructor(t,e,i=3e5){this.storageKeyPrefix=t,this.convert=e,this.throttleMs=i,this.cache=null,this.cachedEntityId=null,this.inFlight=null}storageKey(t){return`${this.storageKeyPrefix}${t}`}getCached(t){return this.cachedEntityId!==t&&(this.cachedEntityId=t,this.cache=function(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):null}catch{return null}}(this.storageKey(t))),this.cache}shouldFetch(t){const e=this.getCached(t);return!e||Date.now()-e.fetchedAt>this.throttleMs}update(t,e,i,s,r,n,a,o){const l=this.getCached(e);return this.inFlight||!this.shouldFetch(e)||(this.inFlight=async function(t,e,i){const s=`history/period/${new Date(Date.now()-36e5*i).toISOString()}?filter_entity_id=${encodeURIComponent(e)}&minimal_response&no_attributes`,r=await t.callApi("GET",s),n=r?.[0];if(!n?.length)return null;const a=n[0],o=a.state??a.s;if(void 0===o)return null;const l=parseFloat(o);return Number.isFinite(l)?l:null}(t,e,n).then(t=>{if(null===t)return{direction:"unknown",pastValueDisplay:null,fetchedAt:Date.now()};const e=this.convert(t,s,r);return{direction:yr(i,e,a),pastValueDisplay:e,fetchedAt:Date.now()}}).catch(()=>({direction:l?.direction??"unknown",pastValueDisplay:l?.pastValueDisplay??null,fetchedAt:Date.now()})).then(t=>(this.cache=t,function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}(this.storageKey(e),t),this.inFlight=null,o?.(t),t))),l}};ss`
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
`;const vr=ss`
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
`,Ar="analog-thermometer-mercury-card",wr="analog-thermometer-mercury-card-editor",xr="classic",Er={classic:"#c0392b",silver:"#c9cdd1",dark:"#e05c4d",light:"#c0392b","led-backlit":"#ff4d4d",fluorescent:"#baff29",futuristic:"#ff2fd0"},Sr={"°C":{major:10,minor:2},"°F":{major:20,minor:5}},Cr=168-Math.sqrt(300),Pr="mercury-liquid-clip";function zr(t,e){const i=60-t,s=60+t,r=168-Math.sqrt(e*e-t*t);return[`M ${i} 20`,`L ${i} ${r}`,`A ${e} ${e} 0 1 0 ${s} ${r}`,`L ${s} 20`,`A ${t} ${t} 0 1 0 ${i} 20`,"Z"].join(" ")}function Ur(t){const{min:e,max:i,unit:s,value:r,pastValue:n,liquidColor:a}=t;return Is`
    <svg viewBox="0 0 140 200" class="tube-dial" role="img" aria-label="Mercury thermometer">
      <defs>${Is`
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
      ${function(t,e,i){const{major:s,minor:r}=Sr[i];return function(t,e,i,s,r,n){return function(t,e,i,s){if(i<=0||s<=0||e<=t)return[];const r=[],n=s/1e3;for(let a=t;a<=e+n;a+=s){const t=Math.round(a/s)*s,e=Math.abs(t/i-Math.round(t/i))<n;r.push({value:t,major:e})}return r}(t,e,i,s).map(i=>({...i,position:gr(i.value,t,e,r,n)}))}(t,e,s,r,Cr,20).map(t=>{const e=t.major?8:4,i=Is`<line
      x1=${72} y1=${t.position} x2=${72+e} y2=${t.position}
      class=${t.major?"tick tick-major":"tick tick-minor"}
    />`;if(!t.major)return i;const s=Is`<text x=${84} y=${t.position} class="tick-label" dominant-baseline="middle">${Math.round(10*t.value)/10}</text>`;return Is`${i}${s}`})}(e,i,s)}
      ${function(t,e,i){if(null===t)return Is``;const s=gr(t,e,i,Cr,20);return Is`<line
    x1=${42} y1=${s} x2=${48} y2=${s}
    class="trend-marker"
  />`}(n,e,i)}
      ${function(t,e,i,s){if(null===t)return Is``;const r=gr(t,e,i,Cr,20);return Is`
    <defs>
      <clipPath id=${Pr}>
        <rect x="0" y=${r} width="140" height=${192-r} />
      </clipPath>
    </defs>
    <path d=${zr(6,16)} class="liquid" fill=${s} clip-path=${`url(#${Pr})`} />
  `}(r,e,i,a)}
      <path d=${zr(10,20)} class="glass" />
      <line
        x1=${53} y1=${26}
        x2=${53} y2=${Cr-6}
        class="glass-highlight"
      />
      <ellipse cx=${54} cy=${162} rx="4" ry="6" class="bulb-highlight" />
    </svg>
  `}function Mr(t){return 9*t/5+32}function Or(t,e,i){return e===i?t:(s=function(t,e){return"°F"===e?function(t){return 5*(t-32)/9}(t):t}(t,e),"°F"===i?Mr(s):s);var s}function Dr(t,e){return t&&"auto"!==t?t:e}function Tr(t,e){const i=t.states[e]?.attributes?.unit_of_measurement;return i&&i.toLowerCase().includes("f")?"°F":"°C"}function Hr(t){return"°F"===t?1.8:1}const jr=[{name:"entity",selector:{entity:{domain:"sensor"}}},$r("name"),_r("unit",[{value:"auto",label:"Auto-detect"},{value:"°C",label:"°C"},{value:"°F",label:"°F"}]),mr("trend_hours",{min:1,max:12,step:1}),mr("trend_threshold",{min:0,step:.1}),_r("trend_text_size",[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"},{value:"x-large",label:"Extra large"}]),_r("face_style",[{value:"classic",label:"Classic"},{value:"silver",label:"Silver"},{value:"dark",label:"Dark"},{value:"light",label:"Light"},{value:"led-backlit",label:"LED Backlit"},{value:"fluorescent",label:"Fluorescent"},{value:"futuristic",label:"Futuristic"}]),$r("liquid_color")];const Nr=(Rr={entity:"Temperature sensor entity",name:"Name (optional)",unit:"Display unit",trend_hours:"Trend lookback (hours)",trend_threshold:"Trend threshold",trend_text_size:"Trend text size",face_style:"Face style",liquid_color:"Liquid color (optional, overrides face style default)"},t=>Rr[t.name]??t.name);var Rr;let Lr=class extends nr{setConfig(t){this._config=t}render(){return this.hass&&this._config?Fs`
      <ha-form
        .hass=${this.hass}
        .data=${this._effectiveData(this.hass,this._config)}
        .schema=${jr}
        .computeLabel=${Nr}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:Fs``}_effectiveData(t,e){const i=e.entity?Tr(t,e.entity):"°C",s=Dr(e.unit,i),r=e.face_style??xr;return{...e,unit:e.unit??"auto",trend_hours:e.trend_hours??3,trend_threshold:e.trend_threshold??Hr(s),trend_text_size:e.trend_text_size??pr,face_style:r,liquid_color:e.liquid_color||Er[r]}}_valueChanged(t){!function(t,e,i={},s={}){const r=new CustomEvent(e,{bubbles:s.bubbles??!0,cancelable:s.cancelable??!1,composed:s.composed??!0,detail:i});t.dispatchEvent(r)}(this,"config-changed",{config:t.detail.value})}};Yi([hr({attribute:!1})],Lr.prototype,"hass",void 0),Yi([ur()],Lr.prototype,"_config",void 0),Lr=Yi([or(wr)],Lr);const Fr={rising:"↑",falling:"↓",steady:"→",unknown:""},Ir={rising:"Rising",falling:"Falling",steady:"Steady",unknown:""};let qr=class extends nr{constructor(){super(...arguments),this._trendDirection="unknown",this._pastValueDisplay=null,this._tracker=new kr("analog-thermometer-mercury-card-trend-",Or,3e5),this._lastEntityUpdate=null}setConfig(t){if(!t.entity)throw new Error("You must specify a temperature sensor entity.");this._config=t}getCardSize(){return 4}static getConfigElement(){return document.createElement(wr)}static getStubConfig(t){const e=Object.values(t?.states??{}).find(t=>t.entity_id.startsWith("sensor.")&&"temperature"===t.attributes.device_class);return{type:"custom:analog-thermometer-mercury-card",entity:e?.entity_id??""}}willUpdate(t){t.has("hass")&&this._maybeUpdateTrend()}_maybeUpdateTrend(){if(!this.hass||!this._config?.entity)return;const t=this.hass.states[this._config.entity];if(!t)return;const e=parseFloat(t.state);if(!Number.isFinite(e))return;const i=Tr(this.hass,this._config.entity),s=Dr(this._config.unit,i),r=Or(e,i,s),n=this._config.trend_hours??3,a=this._config.trend_threshold??Hr(s);if(this._lastEntityUpdate===t.last_updated)return;this._lastEntityUpdate=t.last_updated;const o=this._tracker.update(this.hass,this._config.entity,r,i,s,n,a,t=>{this._trendDirection=t.direction,this._pastValueDisplay=t.pastValueDisplay});this._trendDirection=o?.direction??"unknown",this._pastValueDisplay=o?.pastValueDisplay??null}render(){if(!this._config||!this.hass)return Fs``;const t=this.hass.states[this._config.entity];if(!t)return Fs`<ha-card>
        <div class="warning">Entity not found: ${this._config.entity}</div>
      </ha-card>`;const e=Tr(this.hass,this._config.entity),i=Dr(this._config.unit,e),s=parseFloat(t.state),r=Number.isFinite(s),n=r?Or(s,e,i):null,a="°F"===i?{min:Mr(-20),max:Mr(45)}:{min:-20,max:45},o=this._config.min??a.min,l=this._config.max??a.max,c=this._config.face_style??xr,h=this._config.liquid_color||Er[c],u=this._config.name??t.attributes.friendly_name??this._config.entity,d=br[this._config.trend_text_size??pr];return Fs`
      <ha-card>
        <div class=${fr({"card-content":!0,[`style-${c}`]:!0})}>
          <div class="title">${u}</div>
          ${Ur({min:o,max:l,unit:i,value:n,pastValue:this._pastValueDisplay,liquidColor:h})}
          <div class="readout">
            <span class="value">${r?n.toFixed(1):"--"}</span>
            <span class="unit">${i}</span>
          </div>
          <div class="trend trend-${this._trendDirection}" style="font-size: ${d}rem">
            <span class="arrow">${Fr[this._trendDirection]}</span>
            <span class="label">${Ir[this._trendDirection]}</span>
          </div>
        </div>
      </ha-card>
    `}};var Vr;function Br(t,e,i,s){var r,n=arguments.length,a=n<3?e:s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}qr.styles=[vr,ss`
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
    `],Yi([hr({attribute:!1})],qr.prototype,"hass",void 0),Yi([ur()],qr.prototype,"_config",void 0),Yi([ur()],qr.prototype,"_trendDirection",void 0),Yi([ur()],qr.prototype,"_pastValueDisplay",void 0),qr=Yi([or(Ar)],qr),Vr={type:Ar,name:"Analog Thermometer (Mercury)",preview:!1,description:"A classic mercury-tube style thermometer with temperature trend tracking."},window.customCards=window.customCards||[],window.customCards.push(Vr),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Wr=globalThis,Kr=Wr.ShadowRoot&&(void 0===Wr.ShadyCSS||Wr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Gr=Symbol(),Jr=new WeakMap;let Zr=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Gr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Kr&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=Jr.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Jr.set(e,t))}return t}toString(){return this.cssText}};const Yr=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new Zr(i,t,Gr)},Qr=Kr?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new Zr("string"==typeof t?t:t+"",void 0,Gr))(e)})(t):t,{is:Xr,defineProperty:tn,getOwnPropertyDescriptor:en,getOwnPropertyNames:sn,getOwnPropertySymbols:rn,getPrototypeOf:nn}=Object,an=globalThis,on=an.trustedTypes,ln=on?on.emptyScript:"",cn=an.reactiveElementPolyfillSupport,hn=(t,e)=>t,un={toAttribute(t,e){switch(e){case Boolean:t=t?ln:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},dn=(t,e)=>!Xr(t,e),fn={attribute:!0,type:String,converter:un,reflect:!1,useDefault:!1,hasChanged:dn};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),an.litPropertyMetadata??=new WeakMap;let gn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=fn){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&tn(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=en(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??fn}static _$Ei(){if(this.hasOwnProperty(hn("elementProperties")))return;const t=nn(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(hn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(hn("properties"))){const t=this.properties,e=[...sn(t),...rn(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(Qr(t))}else void 0!==t&&e.push(Qr(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(Kr)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=Wr.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:un).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:un;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??dn)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};gn.elementStyles=[],gn.shadowRootOptions={mode:"open"},gn[hn("elementProperties")]=new Map,gn[hn("finalized")]=new Map,cn?.({ReactiveElement:gn}),(an.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pn=globalThis,bn=t=>t,$n=pn.trustedTypes,mn=$n?$n.createPolicy("lit-html",{createHTML:t=>t}):void 0,_n="$lit$",yn=`lit$${Math.random().toFixed(9).slice(2)}$`,kn="?"+yn,vn=`<${kn}>`,An=document,wn=()=>An.createComment(""),xn=t=>null===t||"object"!=typeof t&&"function"!=typeof t,En=Array.isArray,Sn="[ \t\n\f\r]",Cn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pn=/-->/g,zn=/>/g,Un=RegExp(`>|${Sn}(?:([^\\s"'>=/]+)(${Sn}*=${Sn}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Mn=/'/g,On=/"/g,Dn=/^(?:script|style|textarea|title)$/i,Tn=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Hn=Tn(1),jn=Tn(2),Nn=Symbol.for("lit-noChange"),Rn=Symbol.for("lit-nothing"),Ln=new WeakMap,Fn=An.createTreeWalker(An,129);function In(t,e){if(!En(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==mn?mn.createHTML(e):e}let qn=class t{constructor({strings:e,_$litType$:i},s){let r;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[c,h]=((t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",a=Cn;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===Cn?"!--"===l[1]?a=Pn:void 0!==l[1]?a=zn:void 0!==l[2]?(Dn.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=Un):void 0!==l[3]&&(a=Un):a===Un?">"===l[0]?(a=r??Cn,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?Un:'"'===l[3]?On:Mn):a===On||a===Mn?a=Un:a===Pn||a===zn?a=Cn:(a=Un,r=void 0);const u=a===Un&&t[e+1].startsWith("/>")?" ":"";n+=a===Cn?i+vn:c>=0?(s.push(o),i.slice(0,c)+_n+i.slice(c)+yn+u):i+yn+(-2===c?e:u)}return[In(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(e,i);if(this.el=t.createElement(c,s),Fn.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=Fn.nextNode())&&l.length<o;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(_n)){const e=h[a++],i=r.getAttribute(t).split(yn),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?Gn:"?"===s[1]?Jn:"@"===s[1]?Zn:Kn}),r.removeAttribute(t)}else t.startsWith(yn)&&(l.push({type:6,index:n}),r.removeAttribute(t));if(Dn.test(r.tagName)){const t=r.textContent.split(yn),e=t.length-1;if(e>0){r.textContent=$n?$n.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],wn()),Fn.nextNode(),l.push({type:2,index:++n});r.append(t[e],wn())}}}else if(8===r.nodeType)if(r.data===kn)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(yn,t+1));)l.push({type:7,index:n}),t+=yn.length-1}n++}}static createElement(t,e){const i=An.createElement("template");return i.innerHTML=t,i}};function Vn(t,e,i=t,s){if(e===Nn)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=xn(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Vn(t,r._$AS(t,e.values),r,s)),e}class Bn{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??An).importNode(e,!0);Fn.currentNode=s;let r=Fn.nextNode(),n=0,a=0,o=i[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new Wn(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new Yn(r,this,t)),this._$AV.push(e),o=i[++a]}n!==o?.index&&(r=Fn.nextNode(),n++)}return Fn.currentNode=An,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Wn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Rn,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Vn(this,t,e),xn(t)?t===Rn||null==t||""===t?(this._$AH!==Rn&&this._$AR(),this._$AH=Rn):t!==this._$AH&&t!==Nn&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>En(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Rn&&xn(this._$AH)?this._$AA.nextSibling.data=t:this.T(An.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=qn.createElement(In(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Bn(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Ln.get(t.strings);return void 0===e&&Ln.set(t.strings,e=new qn(t)),e}k(t){En(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Wn(this.O(wn()),this.O(wn()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=bn(t).nextSibling;bn(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Kn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=Rn,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Rn}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Vn(this,t,e,0),n=!xn(t)||t!==this._$AH&&t!==Nn,n&&(this._$AH=t);else{const s=t;let a,o;for(t=r[0],a=0;a<r.length-1;a++)o=Vn(this,s[i+a],e,a),o===Nn&&(o=this._$AH[a]),n||=!xn(o)||o!==this._$AH[a],o===Rn?t=Rn:t!==Rn&&(t+=(o??"")+r[a+1]),this._$AH[a]=o}n&&!s&&this.j(t)}j(t){t===Rn?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Gn extends Kn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Rn?void 0:t}}class Jn extends Kn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Rn)}}class Zn extends Kn{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Vn(this,t,e,0)??Rn)===Nn)return;const i=this._$AH,s=t===Rn&&i!==Rn||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==Rn&&(i===Rn||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Yn{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Vn(this,t)}}const Qn=pn.litHtmlPolyfillSupport;Qn?.(qn,Wn),(pn.litHtmlVersions??=[]).push("3.3.3");const Xn=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ta=class extends gn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Wn(e.insertBefore(wn(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Nn}};ta._$litElement$=!0,ta.finalized=!0,Xn.litElementHydrateSupport?.({LitElement:ta});const ea=Xn.litElementPolyfillSupport;ea?.({LitElement:ta}),(Xn.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ia=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},sa={attribute:!0,type:String,converter:un,reflect:!1,hasChanged:dn},ra=(t=sa,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function na(t){return(e,i)=>"object"==typeof i?ra(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function aa(t){return na({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class oa{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const la=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends oa{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return Nn}});function ca(t,e,i,s){const r=(s-90)*Math.PI/180;return{x:t+i*Math.cos(r),y:e+i*Math.sin(r)}}function ha(t,e,i,s,r){const n=ca(t,e,i,s),a=ca(t,e,i,r),o=r-s<=180?0:1;return`M ${n.x} ${n.y} A ${i} ${i} 0 ${o} 1 ${a.x} ${a.y}`}function ua(t,e,i,s){if(i<=e)return s.startAngle;let r;if(s.wrap){const s=i-e;r=((t-e)%s+s)%s/s}else r=(Math.min(i,Math.max(e,t))-e)/(i-e);return s.startAngle+r*s.sweepAngle}const da="large",fa={small:.8,medium:.9,large:1.05,"x-large":1.2};function ga(t){return{name:t,selector:{text:{}}}}function pa(t,e){return{name:t,selector:{number:{...e,mode:"box"}}}}function ba(t,e){return{name:t,selector:{select:{mode:"dropdown",options:e}}}}function $a(t,e,i){const s=t-e;return Math.abs(s)<i?"steady":s>0?"rising":"falling"}class ma{constructor(t,e,i=3e5){this.storageKeyPrefix=t,this.convert=e,this.throttleMs=i,this.cache=null,this.cachedEntityId=null,this.inFlight=null}storageKey(t){return`${this.storageKeyPrefix}${t}`}getCached(t){return this.cachedEntityId!==t&&(this.cachedEntityId=t,this.cache=function(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):null}catch{return null}}(this.storageKey(t))),this.cache}shouldFetch(t){const e=this.getCached(t);return!e||Date.now()-e.fetchedAt>this.throttleMs}update(t,e,i,s,r,n,a,o){const l=this.getCached(e);return this.inFlight||!this.shouldFetch(e)||(this.inFlight=async function(t,e,i){const s=`history/period/${new Date(Date.now()-36e5*i).toISOString()}?filter_entity_id=${encodeURIComponent(e)}&minimal_response&no_attributes`,r=await t.callApi("GET",s),n=r?.[0];if(!n?.length)return null;const a=n[0],o=a.state??a.s;if(void 0===o)return null;const l=parseFloat(o);return Number.isFinite(l)?l:null}(t,e,n).then(t=>{if(null===t)return{direction:"unknown",pastValueDisplay:null,fetchedAt:Date.now()};const e=this.convert(t,s,r);return{direction:$a(i,e,a),pastValueDisplay:e,fetchedAt:Date.now()}}).catch(()=>({direction:l?.direction??"unknown",pastValueDisplay:l?.pastValueDisplay??null,fetchedAt:Date.now()})).then(t=>(this.cache=t,function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}(this.storageKey(e),t),this.inFlight=null,o?.(t),t))),l}}const _a=Yr`
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
`;Yr`
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
`;const ya="analog-humidity-radial-card",ka="analog-humidity-radial-card-editor",va="classic",Aa={classic:"#333333",silver:"#222222",dark:"#e8e8e8",light:"#333333","led-backlit":"#ff4d4d",fluorescent:"#baff29",futuristic:"#ff2fd0"},wa={startAngle:-135,sweepAngle:270},xa=[{key:"dry",label:"Dry",from:0,to:30,color:"#b5651d"},{key:"comfortable",label:"Comfortable",from:30,to:50,color:"#4a7a3c"},{key:"humid",label:"Humid",from:50,to:70,color:"#c9a227"},{key:"very-humid",label:"Very Humid",from:70,to:100,color:"#2471a3"}],Ea={major:10,minor:2},Sa=100;function Ca(t){const{min:e,max:i,value:s,pastValue:r,needleColor:n}=t;return jn`
    <svg viewBox="0 0 200 200" class="dial" role="img" aria-label="Hygrometer dial">
      <defs>${jn`
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
      <circle cx=${Sa} cy=${Sa} r="97" class="bezel" />
      <circle cx=${Sa} cy=${Sa} r="90" class="face" />
      ${function(t,e){return xa.map(i=>{if(i.to<=t||i.from>=e)return jn``;const s=ua(i.from,t,e,wa),r=ua(i.to,t,e,wa);if(r<=s)return jn``;const n=ha(Sa,Sa,86,s,r);return jn`<path
      d=${n}
      stroke=${i.color}
      stroke-width=${9}
      fill="none"
    />`})}(e,i)}
      ${function(t,e){const{major:i,minor:s}=Ea;return function(t,e,i,s,r){return function(t,e,i,s){if(e<=t)return[];const r=[],n=s/1e3;for(let a=t;a<=e+n;a+=s){const t=Math.round(a/s)*s,e=Math.abs(t/i-Math.round(t/i))<n;r.push({value:t,major:e})}return r}(t,e,i,s).map(i=>({...i,angle:ua(i.value,t,e,r)}))}(t,e,i,s,wa).map(t=>{const e=t.major?8:4,i=ca(Sa,Sa,72-e,t.angle),s=ca(Sa,Sa,72,t.angle),r=jn`<line
      x1=${i.x} y1=${i.y} x2=${s.x} y2=${s.y}
      class=${t.major?"tick tick-major":"tick tick-minor"}
    />`;if(!t.major)return r;const n=ca(Sa,Sa,50,t.angle),a=jn`<text x=${n.x} y=${n.y} class="tick-label" text-anchor="middle" dominant-baseline="middle">${Math.round(10*t.value)/10}</text>`;return jn`${r}${a}`})}(e,i)}
      ${function(t,e){return xa.map(i=>{const s=Math.max(i.from,t),r=Math.min(i.to,e);if(r<=s)return jn``;const n=ua(s,t,e,wa),a=ua(r,t,e,wa),o=`zone-label-path-${i.key}`,l=ha(Sa,Sa,77,n,a);return jn`
      <path id=${o} d=${l} fill="none" stroke="none" />
      <text class="zone-label" dominant-baseline="middle">
        <textPath href=${"#"+o} startOffset="50%" text-anchor="middle">${i.label}</textPath>
      </text>
    `})}(e,i)}
      ${function(t,e,i){if(null===t)return jn``;const s=ua(t,e,i,wa),r=ca(Sa,Sa,88,s),n=ca(Sa,Sa,95,s);return jn`<line
    x1=${r.x} y1=${r.y} x2=${n.x} y2=${n.y}
    class="trend-marker"
  />`}(r,e,i)}
      ${function(t,e,i,s){if(null===t)return jn``;const r=ua(t,e,i,wa);return jn`<g class="needle" transform="rotate(${r} ${Sa} ${Sa})">
    <polygon
      points="${Sa},${38} ${97},${114} ${103},${114}"
      fill=${s}
    />
  </g>`}(s,e,i,n)}
      <circle cx=${Sa} cy=${Sa} r="6" class="hub" />
    </svg>
  `}function Pa(t,e,i){return t}const za=[{name:"entity",selector:{entity:{domain:"sensor"}}},ga("name"),pa("trend_hours",{min:1,max:12,step:1}),pa("trend_threshold",{min:0,step:.5}),ba("trend_text_size",[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"},{value:"x-large",label:"Extra large"}]),ba("face_style",[{value:"classic",label:"Classic"},{value:"silver",label:"Silver"},{value:"dark",label:"Dark"},{value:"light",label:"Light"},{value:"led-backlit",label:"LED Backlit"},{value:"fluorescent",label:"Fluorescent"},{value:"futuristic",label:"Futuristic"}]),ga("needle_color")];const Ua=(Ma={entity:"Humidity sensor entity",name:"Name (optional)",trend_hours:"Trend lookback (hours)",trend_threshold:"Trend threshold",trend_text_size:"Trend text size",face_style:"Face style",needle_color:"Needle color (optional, overrides face style default)"},t=>Ma[t.name]??t.name);var Ma;let Oa=class extends ta{setConfig(t){this._config=t}render(){return this.hass&&this._config?Hn`
      <ha-form
        .hass=${this.hass}
        .data=${this._effectiveData(this._config)}
        .schema=${za}
        .computeLabel=${Ua}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:Hn``}_effectiveData(t){const e=t.face_style??va;return{...t,trend_hours:t.trend_hours??3,trend_threshold:t.trend_threshold??3,trend_text_size:t.trend_text_size??da,face_style:e,needle_color:t.needle_color||Aa[e]}}_valueChanged(t){!function(t,e,i={},s={}){const r=new CustomEvent(e,{bubbles:s.bubbles??!0,cancelable:s.cancelable??!1,composed:s.composed??!0,detail:i});t.dispatchEvent(r)}(this,"config-changed",{config:t.detail.value})}};Br([na({attribute:!1})],Oa.prototype,"hass",void 0),Br([aa()],Oa.prototype,"_config",void 0),Oa=Br([ia(ka)],Oa);const Da={rising:"↑",falling:"↓",steady:"→",unknown:""},Ta={rising:"Rising",falling:"Falling",steady:"Steady",unknown:""};let Ha=class extends ta{constructor(){super(...arguments),this._trendDirection="unknown",this._pastValueDisplay=null,this._tracker=new ma("analog-humidity-radial-card-trend-",Pa,3e5),this._lastEntityUpdate=null}setConfig(t){if(!t.entity)throw new Error("You must specify a humidity sensor entity.");this._config=t}getCardSize(){return 4}static getConfigElement(){return document.createElement(ka)}static getStubConfig(t){const e=Object.values(t?.states??{}).find(t=>t.entity_id.startsWith("sensor.")&&"humidity"===t.attributes.device_class);return{type:"custom:analog-humidity-radial-card",entity:e?.entity_id??""}}willUpdate(t){t.has("hass")&&this._maybeUpdateTrend()}_maybeUpdateTrend(){if(!this.hass||!this._config?.entity)return;const t=this.hass.states[this._config.entity];if(!t)return;const e=parseFloat(t.state);if(!Number.isFinite(e))return;const i=(this.hass,this._config.entity,"%"),s=Pa(e),r=this._config.trend_hours??3,n=this._config.trend_threshold??3;if(this._lastEntityUpdate===t.last_updated)return;this._lastEntityUpdate=t.last_updated;const a=this._tracker.update(this.hass,this._config.entity,s,i,i,r,n,t=>{this._trendDirection=t.direction,this._pastValueDisplay=t.pastValueDisplay});this._trendDirection=a?.direction??"unknown",this._pastValueDisplay=a?.pastValueDisplay??null}render(){if(!this._config||!this.hass)return Hn``;const t=this.hass.states[this._config.entity];if(!t)return Hn`<ha-card>
        <div class="warning">Entity not found: ${this._config.entity}</div>
      </ha-card>`;const e=(this.hass,this._config.entity,"%"),i=parseFloat(t.state),s=Number.isFinite(i),r=s?Pa(i):null,n=0,a=100,o=this._config.min??n,l=this._config.max??a,c=this._config.face_style??va,h=this._config.needle_color||Aa[c],u=this._config.name??t.attributes.friendly_name??this._config.entity,d=fa[this._config.trend_text_size??da];return Hn`
      <ha-card>
        <div class=${la({"card-content":!0,[`style-${c}`]:!0})}>
          <div class="title">${u}</div>
          ${Ca({min:o,max:l,value:r,pastValue:this._pastValueDisplay,needleColor:h})}
          <div class="readout">
            <span class="value">${s?r.toFixed(0):"--"}</span>
            <span class="unit">${e}</span>
          </div>
          <div class="trend trend-${this._trendDirection}" style="font-size: ${d}rem">
            <span class="arrow">${Da[this._trendDirection]}</span>
            <span class="label">${Ta[this._trendDirection]}</span>
          </div>
        </div>
      </ha-card>
    `}};var ja;function Na(t,e,i,s){var r,n=arguments.length,a=n<3?e:s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}Ha.styles=[_a,Yr`
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
    `],Br([na({attribute:!1})],Ha.prototype,"hass",void 0),Br([aa()],Ha.prototype,"_config",void 0),Br([aa()],Ha.prototype,"_trendDirection",void 0),Br([aa()],Ha.prototype,"_pastValueDisplay",void 0),Ha=Br([ia(ya)],Ha),ja={type:ya,name:"Analog Humidity (Radial)",preview:!1,description:"A classic analog-style radial hygrometer dial with humidity trend tracking."},window.customCards=window.customCards||[],window.customCards.push(ja),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ra=globalThis,La=Ra.ShadowRoot&&(void 0===Ra.ShadyCSS||Ra.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fa=Symbol(),Ia=new WeakMap;let qa=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Fa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(La&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=Ia.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ia.set(e,t))}return t}toString(){return this.cssText}};const Va=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new qa(i,t,Fa)},Ba=La?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new qa("string"==typeof t?t:t+"",void 0,Fa))(e)})(t):t,{is:Wa,defineProperty:Ka,getOwnPropertyDescriptor:Ga,getOwnPropertyNames:Ja,getOwnPropertySymbols:Za,getPrototypeOf:Ya}=Object,Qa=globalThis,Xa=Qa.trustedTypes,to=Xa?Xa.emptyScript:"",eo=Qa.reactiveElementPolyfillSupport,io=(t,e)=>t,so={toAttribute(t,e){switch(e){case Boolean:t=t?to:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},ro=(t,e)=>!Wa(t,e),no={attribute:!0,type:String,converter:so,reflect:!1,useDefault:!1,hasChanged:ro};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),Qa.litPropertyMetadata??=new WeakMap;let ao=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=no){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Ka(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=Ga(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??no}static _$Ei(){if(this.hasOwnProperty(io("elementProperties")))return;const t=Ya(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(io("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(io("properties"))){const t=this.properties,e=[...Ja(t),...Za(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(Ba(t))}else void 0!==t&&e.push(Ba(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(La)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=Ra.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:so).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:so;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??ro)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};ao.elementStyles=[],ao.shadowRootOptions={mode:"open"},ao[io("elementProperties")]=new Map,ao[io("finalized")]=new Map,eo?.({ReactiveElement:ao}),(Qa.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oo=globalThis,lo=t=>t,co=oo.trustedTypes,ho=co?co.createPolicy("lit-html",{createHTML:t=>t}):void 0,uo="$lit$",fo=`lit$${Math.random().toFixed(9).slice(2)}$`,go="?"+fo,po=`<${go}>`,bo=document,$o=()=>bo.createComment(""),mo=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_o=Array.isArray,yo="[ \t\n\f\r]",ko=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vo=/-->/g,Ao=/>/g,wo=RegExp(`>|${yo}(?:([^\\s"'>=/]+)(${yo}*=${yo}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),xo=/'/g,Eo=/"/g,So=/^(?:script|style|textarea|title)$/i,Co=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Po=Co(1),zo=Co(2),Uo=Symbol.for("lit-noChange"),Mo=Symbol.for("lit-nothing"),Oo=new WeakMap,Do=bo.createTreeWalker(bo,129);function To(t,e){if(!_o(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ho?ho.createHTML(e):e}class Ho{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const a=t.length-1,o=this.parts,[l,c]=((t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",a=ko;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===ko?"!--"===l[1]?a=vo:void 0!==l[1]?a=Ao:void 0!==l[2]?(So.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=wo):void 0!==l[3]&&(a=wo):a===wo?">"===l[0]?(a=r??ko,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?wo:'"'===l[3]?Eo:xo):a===Eo||a===xo?a=wo:a===vo||a===Ao?a=ko:(a=wo,r=void 0);const u=a===wo&&t[e+1].startsWith("/>")?" ":"";n+=a===ko?i+po:c>=0?(s.push(o),i.slice(0,c)+uo+i.slice(c)+fo+u):i+fo+(-2===c?e:u)}return[To(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=Ho.createElement(l,i),Do.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Do.nextNode())&&o.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(uo)){const e=c[n++],i=s.getAttribute(t).split(fo),a=/([.?@])?(.*)/.exec(e);o.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?Fo:"?"===a[1]?Io:"@"===a[1]?qo:Lo}),s.removeAttribute(t)}else t.startsWith(fo)&&(o.push({type:6,index:r}),s.removeAttribute(t));if(So.test(s.tagName)){const t=s.textContent.split(fo),e=t.length-1;if(e>0){s.textContent=co?co.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],$o()),Do.nextNode(),o.push({type:2,index:++r});s.append(t[e],$o())}}}else if(8===s.nodeType)if(s.data===go)o.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(fo,t+1));)o.push({type:7,index:r}),t+=fo.length-1}r++}}static createElement(t,e){const i=bo.createElement("template");return i.innerHTML=t,i}}function jo(t,e,i=t,s){if(e===Uo)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=mo(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=jo(t,r._$AS(t,e.values),r,s)),e}class No{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??bo).importNode(e,!0);Do.currentNode=s;let r=Do.nextNode(),n=0,a=0,o=i[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new Ro(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new Vo(r,this,t)),this._$AV.push(e),o=i[++a]}n!==o?.index&&(r=Do.nextNode(),n++)}return Do.currentNode=bo,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Ro{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Mo,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=jo(this,t,e),mo(t)?t===Mo||null==t||""===t?(this._$AH!==Mo&&this._$AR(),this._$AH=Mo):t!==this._$AH&&t!==Uo&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>_o(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Mo&&mo(this._$AH)?this._$AA.nextSibling.data=t:this.T(bo.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Ho.createElement(To(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new No(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Oo.get(t.strings);return void 0===e&&Oo.set(t.strings,e=new Ho(t)),e}k(t){_o(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Ro(this.O($o()),this.O($o()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=lo(t).nextSibling;lo(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Lo{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=Mo,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Mo}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=jo(this,t,e,0),n=!mo(t)||t!==this._$AH&&t!==Uo,n&&(this._$AH=t);else{const s=t;let a,o;for(t=r[0],a=0;a<r.length-1;a++)o=jo(this,s[i+a],e,a),o===Uo&&(o=this._$AH[a]),n||=!mo(o)||o!==this._$AH[a],o===Mo?t=Mo:t!==Mo&&(t+=(o??"")+r[a+1]),this._$AH[a]=o}n&&!s&&this.j(t)}j(t){t===Mo?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Fo extends Lo{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Mo?void 0:t}}class Io extends Lo{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Mo)}}class qo extends Lo{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=jo(this,t,e,0)??Mo)===Uo)return;const i=this._$AH,s=t===Mo&&i!==Mo||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==Mo&&(i===Mo||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Vo{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){jo(this,t)}}const Bo=oo.litHtmlPolyfillSupport;Bo?.(Ho,Ro),(oo.litHtmlVersions??=[]).push("3.3.3");const Wo=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ko=class extends ao{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Ro(e.insertBefore($o(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Uo}};Ko._$litElement$=!0,Ko.finalized=!0,Wo.litElementHydrateSupport?.({LitElement:Ko});const Go=Wo.litElementPolyfillSupport;Go?.({LitElement:Ko}),(Wo.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Jo=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},Zo={attribute:!0,type:String,converter:so,reflect:!1,hasChanged:ro},Yo=(t=Zo,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qo(t){return(e,i)=>"object"==typeof i?Yo(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xo{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tl=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Xo{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return Uo}});function el(t,e,i,s){const r=(s-90)*Math.PI/180;return{x:t+i*Math.cos(r),y:e+i*Math.sin(r)}}function il(t){return{name:t,selector:{text:{}}}}function sl(t,e){return{name:t,selector:{select:{mode:"dropdown",options:e}}}}const rl=Va`
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
`;Va`
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
`;const nl="analog-clock-card",al="analog-clock-card-editor",ol={classic:"#333333",silver:"#222222",dark:"#e8e8e8",light:"#333333","led-backlit":"#a8ecff",fluorescent:"#d4ff7a",futuristic:"#7df9ff"},ll={classic:"#c0392b",silver:"#c0392b",dark:"#ff4d4d",light:"#c0392b","led-backlit":"#ff4d4d",fluorescent:"#baff29",futuristic:"#ff2fd0"},cl=100;function hl(t,e,i,s,r,n){return zo`<g class=${n} transform="rotate(${t} ${cl} ${cl})">
    <polygon
      points="${cl},${cl-e} ${cl-s},${cl+i} ${cl+s},${cl+i}"
      fill=${r}
    />
  </g>`}const ul=[il("name"),sl("face_style",[{value:"classic",label:"Classic"},{value:"silver",label:"Silver"},{value:"dark",label:"Dark"},{value:"light",label:"Light"},{value:"led-backlit",label:"LED Backlit"},{value:"fluorescent",label:"Fluorescent"},{value:"futuristic",label:"Futuristic"}]),il("time_zone"),{name:"show_seconds",selector:{boolean:{}}},sl("second_hand_motion",[{value:"tick",label:"Tick (once per second)"},{value:"sweep",label:"Sweep (smooth)"}])],dl=(fl={name:"Name (optional)",face_style:"Face style",time_zone:"Time zone (optional, e.g. America/New_York — defaults to local time)",show_seconds:"Show second hand",second_hand_motion:"Second hand motion"},t=>fl[t.name]??t.name);var fl;let gl=class extends Ko{setConfig(t){this._config=t}render(){return this.hass&&this._config?Po`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${ul}
        .computeLabel=${dl}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:Po``}_valueChanged(t){!function(t,e,i={},s={}){const r=new CustomEvent(e,{bubbles:s.bubbles??!0,cancelable:s.cancelable??!1,composed:s.composed??!0,detail:i});t.dispatchEvent(r)}(this,"config-changed",{config:t.detail.value})}};Na([Qo({attribute:!1})],gl.prototype,"hass",void 0),Na([Qo({state:!0,attribute:!1})],gl.prototype,"_config",void 0),gl=Na([Jo(al)],gl);const pl=function(t,e=1e3){return class extends t{constructor(){super(...arguments),this.now=new Date}connectedCallback(){super.connectedCallback(),this._tick(),this._intervalId=setInterval(()=>this._tick(),e)}disconnectedCallback(){super.disconnectedCallback(),void 0!==this._intervalId&&(clearInterval(this._intervalId),this._intervalId=void 0)}_tick(){this.now=new Date,this.requestUpdate()}}}(Ko,200);let bl=class extends pl{setConfig(t){this._config=t}getCardSize(){return 4}static getConfigElement(){return document.createElement(al)}static getStubConfig(){return{type:"custom:analog-clock-card"}}render(){if(!this._config)return Po``;const t=this._config.face_style??"classic",e=this._config.show_seconds??!0,i=this._config.second_hand_motion??"tick",s=ol[t],r=ll[t],n=function(t,e){if(!e)return t;try{return new Date(t.toLocaleString("en-US",{timeZone:e}))}catch{return t}}(this.now,this._config.time_zone);return Po`
      <ha-card>
        <div class=${tl({"card-content":!0,[`style-${t}`]:!0})}>
          ${this._config.name?Po`<div class="title">${this._config.name}</div>`:""}
          ${function(t){const{now:e,showSeconds:i,smoothSeconds:s,handColor:r,secondHandColor:n}=t;return zo`
    <svg viewBox="0 0 200 200" class="clock-dial" role="img" aria-label="Analog clock">
      <defs>${zo`
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
      <circle cx=${cl} cy=${cl} r="97" class="bezel" />
      <circle cx=${cl} cy=${cl} r="90" class="face" />
      ${function(){const t=[];for(let e=0;e<60;e++){const i=6*e,s=e%5==0,r=el(cl,cl,90-(s?8:4),i),n=el(cl,cl,90,i);t.push(zo`<line
      x1=${r.x} y1=${r.y} x2=${n.x} y2=${n.y}
      class=${s?"tick tick-major":"tick tick-minor"}
    />`)}return t}()}
      ${function(){const t=[];for(let e=1;e<=12;e++){const i=el(cl,cl,74,30*e);t.push(zo`<text x=${i.x} y=${i.y} class="numeral" text-anchor="middle" dominant-baseline="middle">${e}</text>`)}return t}()}
      ${hl((l=e,(l.getHours()%12+l.getMinutes()/60+l.getSeconds()/3600)/12*360),45,10,4,r,"hand hour-hand")}
      ${hl(function(t,e=!0){const i=e?t.getSeconds():0;return(t.getMinutes()+i/60)/60*360}(e),68,12,3,r,"hand minute-hand")}
      ${i?(a=function(t,e=!0){const i=e?t.getMilliseconds():0;return(t.getSeconds()+i/1e3)/60*360}(e,s),o=n,zo`<g class="hand second-hand" transform="rotate(${a} ${cl} ${cl})">
    <line x1=${cl} y1=${118} x2=${cl} y2=${22} stroke=${o} />
  </g>`):zo``}
      <circle cx=${cl} cy=${cl} r="6" class="hub" />
    </svg>
  `;var a,o,l}({now:n,showSeconds:e,smoothSeconds:"sweep"===i,handColor:s,secondHandColor:r})}
        </div>
      </ha-card>
    `}};var $l;bl.styles=[rl,Va`
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
    `],Na([Qo({attribute:!1})],bl.prototype,"hass",void 0),bl=Na([Jo(nl)],bl),$l={type:nl,name:"Analog Clock",preview:!1,description:"A classic analog clock face with hour, minute, and second hands."},window.customCards=window.customCards||[],window.customCards.push($l);
