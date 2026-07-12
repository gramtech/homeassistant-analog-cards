function t(t,e,i,s){var r,n=arguments.length,o=n<3?e:s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:d,getPrototypeOf:f}=Object,g=globalThis,p=g.trustedTypes,b=p?p.emptyScript:"",$=g.reactiveElementPolyfillSupport,m=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!l(t,e),k={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=k){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??k}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...u(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??y)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[m("elementProperties")]=new Map,v[m("finalized")]=new Map,$?.({ReactiveElement:v}),(g.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,w=t=>t,x=A.trustedTypes,E=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,U=`<${P}>`,M=document,z=()=>M.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,T="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,N=/>/g,R=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,F=/"/g,I=/^(?:script|style|textarea|title)$/i,V=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),q=V(1),B=V(2),W=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),G=new WeakMap,J=M.createTreeWalker(M,129);function Z(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}let Y=class t{constructor({strings:e,_$litType$:i},s){let r;this.parts=[];let n=0,o=0;const a=e.length-1,l=this.parts,[c,h]=((t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=H;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,l=o.exec(i),null!==l);)h=o.lastIndex,o===H?"!--"===l[1]?o=j:void 0!==l[1]?o=N:void 0!==l[2]?(I.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=R):void 0!==l[3]&&(o=R):o===R?">"===l[0]?(o=r??H,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?R:'"'===l[3]?F:L):o===F||o===L?o=R:o===j||o===N?o=H:(o=R,r=void 0);const u=o===R&&t[e+1].startsWith("/>")?" ":"";n+=o===H?i+U:c>=0?(s.push(a),i.slice(0,c)+S+i.slice(c)+C+u):i+C+(-2===c?e:u)}return[Z(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(e,i);if(this.el=t.createElement(c,s),J.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=J.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(S)){const e=h[o++],i=r.getAttribute(t).split(C),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?it:"?"===s[1]?st:"@"===s[1]?rt:et}),r.removeAttribute(t)}else t.startsWith(C)&&(l.push({type:6,index:n}),r.removeAttribute(t));if(I.test(r.tagName)){const t=r.textContent.split(C),e=t.length-1;if(e>0){r.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],z()),J.nextNode(),l.push({type:2,index:++n});r.append(t[e],z())}}}else if(8===r.nodeType)if(r.data===P)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(C,t+1));)l.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}};function Q(t,e,i=t,s){if(e===W)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=O(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Q(t,r._$AS(t,e.values),r,s)),e}let X=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??M).importNode(e,!0);J.currentNode=s;let r=J.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new tt(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new nt(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=J.nextNode(),n++)}return J.currentNode=M,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},tt=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),O(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Y(t)),e}k(e){D(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,r=0;for(const n of e)r===i.length?i.push(s=new t(this.O(z()),this.O(z()),this,this.options)):s=i[r],s._$AI(n),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},et=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Q(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=Q(this,s[i+o],e,o),a===W&&(a=this._$AH[o]),n||=!O(a)||a!==this._$AH[o],a===K?t=K:t!==K&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},it=class extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}},st=class extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}},rt=class extends et{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??K)===W)return;const i=this._$AH,s=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==K&&(i===K||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},nt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}};const ot=A.litHtmlPolyfillSupport;ot?.(Y,tt),(A.litHtmlVersions??=[]).push("3.3.3");const at=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lt=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new tt(e.insertBefore(z(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};lt._$litElement$=!0,lt.finalized=!0,at.litElementHydrateSupport?.({LitElement:lt});const ct=at.litElementPolyfillSupport;ct?.({LitElement:lt}),(at.litElementVersions??=[]).push("4.2.2");
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
 */const bt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends pt{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return W}});function $t(t,e,i,s){const r=(s-90)*Math.PI/180;return{x:t+i*Math.cos(r),y:e+i*Math.sin(r)}}function mt(t,e,i,s,r){const n=$t(t,e,i,s),o=$t(t,e,i,r),a=r-s<=180?0:1;return`M ${n.x} ${n.y} A ${i} ${i} 0 ${a} 1 ${o.x} ${o.y}`}function _t(t,e,i,s){if(i<=e)return s.startAngle;let r;if(s.wrap){const s=i-e;r=((t-e)%s+s)%s/s}else r=(Math.min(i,Math.max(e,t))-e)/(i-e);return s.startAngle+r*s.sweepAngle}function yt(t){return{name:t,selector:{text:{}}}}function kt(t,e){return{name:t,selector:{number:{...e,mode:"box"}}}}function vt(t,e){return{name:t,selector:{select:{mode:"dropdown",options:e}}}}function At(t,e,i){const s=t-e;return Math.abs(s)<i?"steady":s>0?"rising":"falling"}let wt=class{constructor(t,e,i=3e5){this.storageKeyPrefix=t,this.convert=e,this.throttleMs=i,this.cache=null,this.cachedEntityId=null,this.inFlight=null}storageKey(t){return`${this.storageKeyPrefix}${t}`}getCached(t){return this.cachedEntityId!==t&&(this.cachedEntityId=t,this.cache=function(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):null}catch{return null}}(this.storageKey(t))),this.cache}shouldFetch(t){const e=this.getCached(t);return!e||Date.now()-e.fetchedAt>this.throttleMs}update(t,e,i,s,r,n,o,a){const l=this.getCached(e);return this.inFlight||!this.shouldFetch(e)||(this.inFlight=async function(t,e,i){const s=`history/period/${new Date(Date.now()-36e5*i).toISOString()}?filter_entity_id=${encodeURIComponent(e)}&minimal_response&no_attributes`,r=await t.callApi("GET",s),n=r?.[0];if(!n?.length)return null;const o=n[0],a=o.state??o.s;if(void 0===a)return null;const l=parseFloat(a);return Number.isFinite(l)?l:null}(t,e,n).then(t=>{if(null===t)return{direction:"unknown",pastValueDisplay:null,fetchedAt:Date.now()};const e=this.convert(t,s,r);return{direction:At(i,e,o),pastValueDisplay:e,fetchedAt:Date.now()}}).catch(()=>({direction:l?.direction??"unknown",pastValueDisplay:l?.pastValueDisplay??null,fetchedAt:Date.now()})).then(t=>(this.cache=t,function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}(this.storageKey(e),t),this.inFlight=null,a?.(t),t))),l}};const xt=o`
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
`;o`
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
`;const Et="analog-barometer-card",St="analog-barometer-card-editor",Ct={classic:"#333333",silver:"#222222",dark:"#e8e8e8",light:"#333333","led-backlit":"#ff4d4d",fluorescent:"#baff29",futuristic:"#ff2fd0"},Pt={startAngle:-135,sweepAngle:270},Ut=[{key:"stormy",label:"Stormy",from:950,to:980,color:"#8b1a1a"},{key:"rain",label:"Rain",from:980,to:1e3,color:"#b5651d"},{key:"change",label:"Change",from:1e3,to:1015,color:"#c9a227"},{key:"fair",label:"Fair",from:1015,to:1030,color:"#4a7a3c"},{key:"v-dry",label:"Very Dry",from:1030,to:1050,color:"#2f5f4f"}],Mt={hPa:{major:10,minor:2},inHg:{major:.5,minor:.1}},zt=33.8639,Ot=new Set(["inhg","inHg","in"]),Dt=new Set(["hpa","mbar","mb"]);function Tt(t){return t/zt}function Ht(t,e){return"inHg"===e?Tt(t):t}function jt(t,e,i){return e===i?t:Ht(function(t,e){return"inHg"===e?t*zt:t}(t,e),i)}function Nt(t,e){const i=t.states[e]?.attributes?.unit_of_measurement;if(!i)return"hPa";const s=i.toLowerCase();return Ot.has(s)||s.includes("inhg")?"inHg":(Dt.has(s),"hPa")}const Rt=100;function Lt(t){const{min:e,max:i,unit:s,value:r,pastValue:n,needleColor:o}=t;return B`
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
      <circle cx=${Rt} cy=${Rt} r="97" class="bezel" />
      <circle cx=${Rt} cy=${Rt} r="90" class="face" />
      ${function(t,e,i){return Ut.map(s=>{const r=Ht(s.from,i),n=Ht(s.to,i);if(n<=t||r>=e)return B``;const o=_t(r,t,e,Pt),a=_t(n,t,e,Pt);if(a<=o)return B``;const l=mt(Rt,Rt,86,o,a);return B`<path
      d=${l}
      stroke=${s.color}
      stroke-width=${9}
      fill="none"
    />`})}(e,i,s)}
      ${function(t,e,i){const{major:s,minor:r}=Mt[i];return function(t,e,i,s,r){return function(t,e,i,s){if(i<=0||s<=0||e<=t)return[];const r=[],n=s/1e3;for(let o=t;o<=e+n;o+=s){const t=Math.round(o/s)*s,e=Math.abs(t/i-Math.round(t/i))<n;r.push({value:t,major:e})}return r}(t,e,i,s).map(i=>({...i,angle:_t(i.value,t,e,r)}))}(t,e,s,r,Pt).map(t=>{const e=t.major?8:4,i=$t(Rt,Rt,72-e,t.angle),s=$t(Rt,Rt,72,t.angle),r=B`<line
      x1=${i.x} y1=${i.y} x2=${s.x} y2=${s.y}
      class=${t.major?"tick tick-major":"tick tick-minor"}
    />`;if(!t.major)return r;const n=$t(Rt,Rt,50,t.angle),o=B`<text x=${n.x} y=${n.y} class="tick-label" text-anchor="middle" dominant-baseline="middle">${Math.round(10*t.value)/10}</text>`;return B`${r}${o}`})}(e,i,s)}
      ${function(t,e,i){return Ut.map(s=>{const r=Math.max(Ht(s.from,i),t),n=Math.min(Ht(s.to,i),e);if(n<=r)return B``;const o=_t(r,t,e,Pt),a=_t(n,t,e,Pt),l=`zone-label-path-${s.key}`,c=mt(Rt,Rt,77,o,a);return B`
      <path id=${l} d=${c} fill="none" stroke="none" />
      <text class="zone-label" dominant-baseline="middle">
        <textPath href=${"#"+l} startOffset="50%" text-anchor="middle">${s.label}</textPath>
      </text>
    `})}(e,i,s)}
      ${function(t,e,i){if(null===t)return B``;const s=_t(t,e,i,Pt),r=$t(Rt,Rt,88,s),n=$t(Rt,Rt,95,s);return B`<line
    x1=${r.x} y1=${r.y} x2=${n.x} y2=${n.y}
    class="trend-marker"
  />`}(n,e,i)}
      ${function(t,e,i,s){if(null===t)return B``;const r=_t(t,e,i,Pt);return B`<g class="needle" transform="rotate(${r} ${Rt} ${Rt})">
    <polygon
      points="${Rt},${38} ${97},${114} ${103},${114}"
      fill=${s}
    />
  </g>`}(r,e,i,o)}
      <circle cx=${Rt} cy=${Rt} r="6" class="hub" />
    </svg>
  `}const Ft=[{name:"entity",selector:{entity:{domain:"sensor"}}},yt("name"),vt("unit",[{value:"auto",label:"Auto-detect"},{value:"hPa",label:"hPa"},{value:"inHg",label:"inHg"}]),kt("trend_hours",{min:1,max:12,step:1}),kt("trend_threshold",{min:0,step:.1}),vt("face_style",[{value:"classic",label:"Classic"},{value:"silver",label:"Silver"},{value:"dark",label:"Dark"},{value:"light",label:"Light"},{value:"led-backlit",label:"LED Backlit"},{value:"fluorescent",label:"Fluorescent"},{value:"futuristic",label:"Futuristic"}]),yt("needle_color")];const It=(Vt={entity:"Pressure sensor entity",name:"Name (optional)",unit:"Display unit",trend_hours:"Trend lookback (hours)",trend_threshold:"Trend threshold",face_style:"Face style",needle_color:"Needle color (optional, overrides face style default)"},t=>Vt[t.name]??t.name);var Vt;let qt=class extends lt{setConfig(t){this._config=t}render(){return this.hass&&this._config?q`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Ft}
        .computeLabel=${It}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:q``}_valueChanged(t){!function(t,e,i={},s={}){const r=new CustomEvent(e,{bubbles:s.bubbles??!0,cancelable:s.cancelable??!1,composed:s.composed??!0,detail:i});t.dispatchEvent(r)}(this,"config-changed",{config:t.detail.value})}};t([ft({attribute:!1})],qt.prototype,"hass",void 0),t([gt()],qt.prototype,"_config",void 0),qt=t([ht(St)],qt);const Bt={rising:"↑",falling:"↓",steady:"→",unknown:""},Wt={rising:"Rising",falling:"Falling",steady:"Steady",unknown:""};let Kt=class extends lt{constructor(){super(...arguments),this._trendDirection="unknown",this._pastValueDisplay=null,this._tracker=new wt("analog-barometer-card-trend-",jt,3e5),this._lastEntityUpdate=null}setConfig(t){if(!t.entity)throw new Error("You must specify a pressure sensor entity.");this._config=t}getCardSize(){return 4}static getConfigElement(){return document.createElement(St)}static getStubConfig(t){const e=Object.values(t?.states??{}).find(t=>t.entity_id.startsWith("sensor.")&&"atmospheric_pressure"===t.attributes.device_class);return{type:"custom:analog-barometer-card",entity:e?.entity_id??""}}willUpdate(t){t.has("hass")&&this._maybeUpdateTrend()}_maybeUpdateTrend(){if(!this.hass||!this._config?.entity)return;const t=this.hass.states[this._config.entity];if(!t)return;const e=parseFloat(t.state);if(!Number.isFinite(e))return;const i=Nt(this.hass,this._config.entity),s=this._config.unit??i,r=jt(e,i,s),n=this._config.trend_hours??3,o=this._config.trend_threshold??("inHg"===s?Tt(1.5):1.5);if(this._lastEntityUpdate===t.last_updated)return;this._lastEntityUpdate=t.last_updated;const a=this._tracker.update(this.hass,this._config.entity,r,i,s,n,o,t=>{this._trendDirection=t.direction,this._pastValueDisplay=t.pastValueDisplay});this._trendDirection=a?.direction??"unknown",this._pastValueDisplay=a?.pastValueDisplay??null}render(){if(!this._config||!this.hass)return q``;const t=this.hass.states[this._config.entity];if(!t)return q`<ha-card>
        <div class="warning">Entity not found: ${this._config.entity}</div>
      </ha-card>`;const e=Nt(this.hass,this._config.entity),i=this._config.unit??e,s=parseFloat(t.state),r=Number.isFinite(s),n=r?jt(s,e,i):null,o="inHg"===i?{min:Tt(950),max:Tt(1050)}:{min:950,max:1050},a=this._config.min??o.min,l=this._config.max??o.max,c=this._config.face_style??"classic",h=this._config.needle_color||Ct[c],u=this._config.name??t.attributes.friendly_name??this._config.entity;return q`
      <ha-card>
        <div class=${bt({"card-content":!0,[`style-${c}`]:!0})}>
          <div class="title">${u}</div>
          ${Lt({min:a,max:l,unit:i,value:n,pastValue:this._pastValueDisplay,needleColor:h})}
          <div class="readout">
            <span class="value">${r?n.toFixed(1):"--"}</span>
            <span class="unit">${i}</span>
          </div>
          <div class="trend trend-${this._trendDirection}">
            <span class="arrow">${Bt[this._trendDirection]}</span>
            <span class="label">${Wt[this._trendDirection]}</span>
          </div>
        </div>
      </ha-card>
    `}};var Gt;function Jt(t,e,i,s){var r,n=arguments.length,o=n<3?e:s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}Kt.styles=[xt,o`
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
    `],t([ft({attribute:!1})],Kt.prototype,"hass",void 0),t([gt()],Kt.prototype,"_config",void 0),t([gt()],Kt.prototype,"_trendDirection",void 0),t([gt()],Kt.prototype,"_pastValueDisplay",void 0),Kt=t([ht(Et)],Kt),Gt={type:Et,name:"Analog Barometer",preview:!1,description:"A classic analog-style barometer with pressure trend tracking."},window.customCards=window.customCards||[],window.customCards.push(Gt),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Zt=globalThis,Yt=Zt.ShadowRoot&&(void 0===Zt.ShadyCSS||Zt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qt=Symbol(),Xt=new WeakMap;let te=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Qt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Yt&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=Xt.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Xt.set(e,t))}return t}toString(){return this.cssText}};const ee=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new te(i,t,Qt)},ie=Yt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new te("string"==typeof t?t:t+"",void 0,Qt))(e)})(t):t,{is:se,defineProperty:re,getOwnPropertyDescriptor:ne,getOwnPropertyNames:oe,getOwnPropertySymbols:ae,getPrototypeOf:le}=Object,ce=globalThis,he=ce.trustedTypes,ue=he?he.emptyScript:"",de=ce.reactiveElementPolyfillSupport,fe=(t,e)=>t,ge={toAttribute(t,e){switch(e){case Boolean:t=t?ue:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},pe=(t,e)=>!se(t,e),be={attribute:!0,type:String,converter:ge,reflect:!1,useDefault:!1,hasChanged:pe};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),ce.litPropertyMetadata??=new WeakMap;let $e=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=be){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&re(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=ne(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??be}static _$Ei(){if(this.hasOwnProperty(fe("elementProperties")))return;const t=le(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(fe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(fe("properties"))){const t=this.properties,e=[...oe(t),...ae(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(ie(t))}else void 0!==t&&e.push(ie(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(Yt)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=Zt.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:ge).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:ge;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??pe)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$e.elementStyles=[],$e.shadowRootOptions={mode:"open"},$e[fe("elementProperties")]=new Map,$e[fe("finalized")]=new Map,de?.({ReactiveElement:$e}),(ce.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const me=globalThis,_e=t=>t,ye=me.trustedTypes,ke=ye?ye.createPolicy("lit-html",{createHTML:t=>t}):void 0,ve="$lit$",Ae=`lit$${Math.random().toFixed(9).slice(2)}$`,we="?"+Ae,xe=`<${we}>`,Ee=document,Se=()=>Ee.createComment(""),Ce=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Pe=Array.isArray,Ue="[ \t\n\f\r]",Me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ze=/-->/g,Oe=/>/g,De=RegExp(`>|${Ue}(?:([^\\s"'>=/]+)(${Ue}*=${Ue}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Te=/'/g,He=/"/g,je=/^(?:script|style|textarea|title)$/i,Ne=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Re=Ne(1),Le=Ne(2),Fe=Symbol.for("lit-noChange"),Ie=Symbol.for("lit-nothing"),Ve=new WeakMap,qe=Ee.createTreeWalker(Ee,129);function Be(t,e){if(!Pe(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ke?ke.createHTML(e):e}let We=class t{constructor({strings:e,_$litType$:i},s){let r;this.parts=[];let n=0,o=0;const a=e.length-1,l=this.parts,[c,h]=((t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=Me;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,l=o.exec(i),null!==l);)h=o.lastIndex,o===Me?"!--"===l[1]?o=ze:void 0!==l[1]?o=Oe:void 0!==l[2]?(je.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=De):void 0!==l[3]&&(o=De):o===De?">"===l[0]?(o=r??Me,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?De:'"'===l[3]?He:Te):o===He||o===Te?o=De:o===ze||o===Oe?o=Me:(o=De,r=void 0);const u=o===De&&t[e+1].startsWith("/>")?" ":"";n+=o===Me?i+xe:c>=0?(s.push(a),i.slice(0,c)+ve+i.slice(c)+Ae+u):i+Ae+(-2===c?e:u)}return[Be(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(e,i);if(this.el=t.createElement(c,s),qe.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=qe.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(ve)){const e=h[o++],i=r.getAttribute(t).split(Ae),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?Ye:"?"===s[1]?Qe:"@"===s[1]?Xe:Ze}),r.removeAttribute(t)}else t.startsWith(Ae)&&(l.push({type:6,index:n}),r.removeAttribute(t));if(je.test(r.tagName)){const t=r.textContent.split(Ae),e=t.length-1;if(e>0){r.textContent=ye?ye.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],Se()),qe.nextNode(),l.push({type:2,index:++n});r.append(t[e],Se())}}}else if(8===r.nodeType)if(r.data===we)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(Ae,t+1));)l.push({type:7,index:n}),t+=Ae.length-1}n++}}static createElement(t,e){const i=Ee.createElement("template");return i.innerHTML=t,i}};function Ke(t,e,i=t,s){if(e===Fe)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=Ce(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Ke(t,r._$AS(t,e.values),r,s)),e}let Ge=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??Ee).importNode(e,!0);qe.currentNode=s;let r=qe.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Je(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new ti(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=qe.nextNode(),n++)}return qe.currentNode=Ee,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Je=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Ie,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ke(this,t,e),Ce(t)?t===Ie||null==t||""===t?(this._$AH!==Ie&&this._$AR(),this._$AH=Ie):t!==this._$AH&&t!==Fe&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>Pe(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Ie&&Ce(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ee.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=We.createElement(Be(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Ge(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Ve.get(t.strings);return void 0===e&&Ve.set(t.strings,e=new We(t)),e}k(e){Pe(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,r=0;for(const n of e)r===i.length?i.push(s=new t(this.O(Se()),this.O(Se()),this,this.options)):s=i[r],s._$AI(n),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=_e(t).nextSibling;_e(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},Ze=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=Ie,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ie}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Ke(this,t,e,0),n=!Ce(t)||t!==this._$AH&&t!==Fe,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=Ke(this,s[i+o],e,o),a===Fe&&(a=this._$AH[o]),n||=!Ce(a)||a!==this._$AH[o],a===Ie?t=Ie:t!==Ie&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===Ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ye=class extends Ze{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ie?void 0:t}},Qe=class extends Ze{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Ie)}},Xe=class extends Ze{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Ke(this,t,e,0)??Ie)===Fe)return;const i=this._$AH,s=t===Ie&&i!==Ie||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==Ie&&(i===Ie||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ti=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ke(this,t)}};const ei=me.litHtmlPolyfillSupport;ei?.(We,Je),(me.litHtmlVersions??=[]).push("3.3.3");const ii=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let si=class extends $e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Je(e.insertBefore(Se(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Fe}};si._$litElement$=!0,si.finalized=!0,ii.litElementHydrateSupport?.({LitElement:si});const ri=ii.litElementPolyfillSupport;ri?.({LitElement:si}),(ii.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ni=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},oi={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:pe},ai=(t=oi,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function li(t){return(e,i)=>"object"==typeof i?ai(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ci(t){return li({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let hi=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ui=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends hi{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return Fe}});function di(t,e,i,s){const r=(s-90)*Math.PI/180;return{x:t+i*Math.cos(r),y:e+i*Math.sin(r)}}function fi(t,e,i,s,r){const n=di(t,e,i,s),o=di(t,e,i,r),a=r-s<=180?0:1;return`M ${n.x} ${n.y} A ${i} ${i} 0 ${a} 1 ${o.x} ${o.y}`}function gi(t,e,i,s){if(i<=e)return s.startAngle;let r;if(s.wrap){const s=i-e;r=((t-e)%s+s)%s/s}else r=(Math.min(i,Math.max(e,t))-e)/(i-e);return s.startAngle+r*s.sweepAngle}function pi(t){return{name:t,selector:{text:{}}}}function bi(t,e){return{name:t,selector:{number:{...e,mode:"box"}}}}function $i(t,e){return{name:t,selector:{select:{mode:"dropdown",options:e}}}}function mi(t,e,i){const s=t-e;return Math.abs(s)<i?"steady":s>0?"rising":"falling"}let _i=class{constructor(t,e,i=3e5){this.storageKeyPrefix=t,this.convert=e,this.throttleMs=i,this.cache=null,this.cachedEntityId=null,this.inFlight=null}storageKey(t){return`${this.storageKeyPrefix}${t}`}getCached(t){return this.cachedEntityId!==t&&(this.cachedEntityId=t,this.cache=function(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):null}catch{return null}}(this.storageKey(t))),this.cache}shouldFetch(t){const e=this.getCached(t);return!e||Date.now()-e.fetchedAt>this.throttleMs}update(t,e,i,s,r,n,o,a){const l=this.getCached(e);return this.inFlight||!this.shouldFetch(e)||(this.inFlight=async function(t,e,i){const s=`history/period/${new Date(Date.now()-36e5*i).toISOString()}?filter_entity_id=${encodeURIComponent(e)}&minimal_response&no_attributes`,r=await t.callApi("GET",s),n=r?.[0];if(!n?.length)return null;const o=n[0],a=o.state??o.s;if(void 0===a)return null;const l=parseFloat(a);return Number.isFinite(l)?l:null}(t,e,n).then(t=>{if(null===t)return{direction:"unknown",pastValueDisplay:null,fetchedAt:Date.now()};const e=this.convert(t,s,r);return{direction:mi(i,e,o),pastValueDisplay:e,fetchedAt:Date.now()}}).catch(()=>({direction:l?.direction??"unknown",pastValueDisplay:l?.pastValueDisplay??null,fetchedAt:Date.now()})).then(t=>(this.cache=t,function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}(this.storageKey(e),t),this.inFlight=null,a?.(t),t))),l}};const yi=ee`
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
`;ee`
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
`;const ki="analog-thermometer-radial-card",vi="analog-thermometer-radial-card-editor",Ai={classic:"#333333",silver:"#222222",dark:"#e8e8e8",light:"#333333","led-backlit":"#ff4d4d",fluorescent:"#baff29",futuristic:"#ff2fd0"},wi={startAngle:-135,sweepAngle:270},xi=[{key:"freezing",label:"Freezing",from:-20,to:0,color:"#2471a3"},{key:"cold",label:"Cold",from:0,to:15,color:"#5dade2"},{key:"comfortable",label:"Comfortable",from:15,to:25,color:"#4a7a3c"},{key:"warm",label:"Warm",from:25,to:32,color:"#c9a227"},{key:"hot",label:"Hot",from:32,to:45,color:"#b5651d"}],Ei={"°C":{major:10,minor:2},"°F":{major:20,minor:5}};function Si(t){return 9*t/5+32}function Ci(t,e){return"°F"===e?Si(t):t}function Pi(t,e,i){return e===i?t:Ci(function(t,e){return"°F"===e?function(t){return 5*(t-32)/9}(t):t}(t,e),i)}function Ui(t,e){const i=t.states[e]?.attributes?.unit_of_measurement;return i&&i.toLowerCase().includes("f")?"°F":"°C"}const Mi=100;function zi(t){const{min:e,max:i,unit:s,value:r,pastValue:n,needleColor:o}=t;return Le`
    <svg viewBox="0 0 200 200" class="dial" role="img" aria-label="Thermometer dial">
      <defs>${Le`
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
      <circle cx=${Mi} cy=${Mi} r="97" class="bezel" />
      <circle cx=${Mi} cy=${Mi} r="90" class="face" />
      ${function(t,e,i){return xi.map(s=>{const r=Ci(s.from,i),n=Ci(s.to,i);if(n<=t||r>=e)return Le``;const o=gi(r,t,e,wi),a=gi(n,t,e,wi);if(a<=o)return Le``;const l=fi(Mi,Mi,86,o,a);return Le`<path
      d=${l}
      stroke=${s.color}
      stroke-width=${9}
      fill="none"
    />`})}(e,i,s)}
      ${function(t,e,i){const{major:s,minor:r}=Ei[i];return function(t,e,i,s,r){return function(t,e,i,s){if(i<=0||s<=0||e<=t)return[];const r=[],n=s/1e3;for(let o=t;o<=e+n;o+=s){const t=Math.round(o/s)*s,e=Math.abs(t/i-Math.round(t/i))<n;r.push({value:t,major:e})}return r}(t,e,i,s).map(i=>({...i,angle:gi(i.value,t,e,r)}))}(t,e,s,r,wi).map(t=>{const e=t.major?8:4,i=di(Mi,Mi,72-e,t.angle),s=di(Mi,Mi,72,t.angle),r=Le`<line
      x1=${i.x} y1=${i.y} x2=${s.x} y2=${s.y}
      class=${t.major?"tick tick-major":"tick tick-minor"}
    />`;if(!t.major)return r;const n=di(Mi,Mi,50,t.angle),o=Le`<text x=${n.x} y=${n.y} class="tick-label" text-anchor="middle" dominant-baseline="middle">${Math.round(10*t.value)/10}</text>`;return Le`${r}${o}`})}(e,i,s)}
      ${function(t,e,i){return xi.map(s=>{const r=Math.max(Ci(s.from,i),t),n=Math.min(Ci(s.to,i),e);if(n<=r)return Le``;const o=gi(r,t,e,wi),a=gi(n,t,e,wi),l=`zone-label-path-${s.key}`,c=fi(Mi,Mi,77,o,a);return Le`
      <path id=${l} d=${c} fill="none" stroke="none" />
      <text class="zone-label" dominant-baseline="middle">
        <textPath href=${"#"+l} startOffset="50%" text-anchor="middle">${s.label}</textPath>
      </text>
    `})}(e,i,s)}
      ${function(t,e,i){if(null===t)return Le``;const s=gi(t,e,i,wi),r=di(Mi,Mi,88,s),n=di(Mi,Mi,95,s);return Le`<line
    x1=${r.x} y1=${r.y} x2=${n.x} y2=${n.y}
    class="trend-marker"
  />`}(n,e,i)}
      ${function(t,e,i,s){if(null===t)return Le``;const r=gi(t,e,i,wi);return Le`<g class="needle" transform="rotate(${r} ${Mi} ${Mi})">
    <polygon
      points="${Mi},${38} ${97},${114} ${103},${114}"
      fill=${s}
    />
  </g>`}(r,e,i,o)}
      <circle cx=${Mi} cy=${Mi} r="6" class="hub" />
    </svg>
  `}const Oi=[{name:"entity",selector:{entity:{domain:"sensor"}}},pi("name"),$i("unit",[{value:"auto",label:"Auto-detect"},{value:"°C",label:"°C"},{value:"°F",label:"°F"}]),bi("trend_hours",{min:1,max:12,step:1}),bi("trend_threshold",{min:0,step:.1}),$i("face_style",[{value:"classic",label:"Classic"},{value:"silver",label:"Silver"},{value:"dark",label:"Dark"},{value:"light",label:"Light"},{value:"led-backlit",label:"LED Backlit"},{value:"fluorescent",label:"Fluorescent"},{value:"futuristic",label:"Futuristic"}]),pi("needle_color")];const Di=(Ti={entity:"Temperature sensor entity",name:"Name (optional)",unit:"Display unit",trend_hours:"Trend lookback (hours)",trend_threshold:"Trend threshold",face_style:"Face style",needle_color:"Needle color (optional, overrides face style default)"},t=>Ti[t.name]??t.name);var Ti;let Hi=class extends si{setConfig(t){this._config=t}render(){return this.hass&&this._config?Re`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Oi}
        .computeLabel=${Di}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:Re``}_valueChanged(t){!function(t,e,i={},s={}){const r=new CustomEvent(e,{bubbles:s.bubbles??!0,cancelable:s.cancelable??!1,composed:s.composed??!0,detail:i});t.dispatchEvent(r)}(this,"config-changed",{config:t.detail.value})}};Jt([li({attribute:!1})],Hi.prototype,"hass",void 0),Jt([ci()],Hi.prototype,"_config",void 0),Hi=Jt([ni(vi)],Hi);const ji={rising:"↑",falling:"↓",steady:"→",unknown:""},Ni={rising:"Rising",falling:"Falling",steady:"Steady",unknown:""};let Ri=class extends si{constructor(){super(...arguments),this._trendDirection="unknown",this._pastValueDisplay=null,this._tracker=new _i("analog-thermometer-radial-card-trend-",Pi,3e5),this._lastEntityUpdate=null}setConfig(t){if(!t.entity)throw new Error("You must specify a temperature sensor entity.");this._config=t}getCardSize(){return 4}static getConfigElement(){return document.createElement(vi)}static getStubConfig(t){const e=Object.values(t?.states??{}).find(t=>t.entity_id.startsWith("sensor.")&&"temperature"===t.attributes.device_class);return{type:"custom:analog-thermometer-radial-card",entity:e?.entity_id??""}}willUpdate(t){t.has("hass")&&this._maybeUpdateTrend()}_maybeUpdateTrend(){if(!this.hass||!this._config?.entity)return;const t=this.hass.states[this._config.entity];if(!t)return;const e=parseFloat(t.state);if(!Number.isFinite(e))return;const i=Ui(this.hass,this._config.entity),s=this._config.unit??i,r=Pi(e,i,s),n=this._config.trend_hours??3,o=this._config.trend_threshold??("°F"===s?1.8:1);if(this._lastEntityUpdate===t.last_updated)return;this._lastEntityUpdate=t.last_updated;const a=this._tracker.update(this.hass,this._config.entity,r,i,s,n,o,t=>{this._trendDirection=t.direction,this._pastValueDisplay=t.pastValueDisplay});this._trendDirection=a?.direction??"unknown",this._pastValueDisplay=a?.pastValueDisplay??null}render(){if(!this._config||!this.hass)return Re``;const t=this.hass.states[this._config.entity];if(!t)return Re`<ha-card>
        <div class="warning">Entity not found: ${this._config.entity}</div>
      </ha-card>`;const e=Ui(this.hass,this._config.entity),i=this._config.unit??e,s=parseFloat(t.state),r=Number.isFinite(s),n=r?Pi(s,e,i):null,o="°F"===i?{min:Si(-20),max:Si(45)}:{min:-20,max:45},a=this._config.min??o.min,l=this._config.max??o.max,c=this._config.face_style??"classic",h=this._config.needle_color||Ai[c],u=this._config.name??t.attributes.friendly_name??this._config.entity;return Re`
      <ha-card>
        <div class=${ui({"card-content":!0,[`style-${c}`]:!0})}>
          <div class="title">${u}</div>
          ${zi({min:a,max:l,unit:i,value:n,pastValue:this._pastValueDisplay,needleColor:h})}
          <div class="readout">
            <span class="value">${r?n.toFixed(1):"--"}</span>
            <span class="unit">${i}</span>
          </div>
          <div class="trend trend-${this._trendDirection}">
            <span class="arrow">${ji[this._trendDirection]}</span>
            <span class="label">${Ni[this._trendDirection]}</span>
          </div>
        </div>
      </ha-card>
    `}};var Li;function Fi(t,e,i,s){var r,n=arguments.length,o=n<3?e:s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}Ri.styles=[yi,ee`
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
    `],Jt([li({attribute:!1})],Ri.prototype,"hass",void 0),Jt([ci()],Ri.prototype,"_config",void 0),Jt([ci()],Ri.prototype,"_trendDirection",void 0),Jt([ci()],Ri.prototype,"_pastValueDisplay",void 0),Ri=Jt([ni(ki)],Ri),Li={type:ki,name:"Analog Thermometer (Radial)",preview:!1,description:"A classic analog-style radial thermometer dial with temperature trend tracking."},window.customCards=window.customCards||[],window.customCards.push(Li),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ii=globalThis,Vi=Ii.ShadowRoot&&(void 0===Ii.ShadyCSS||Ii.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qi=Symbol(),Bi=new WeakMap;let Wi=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==qi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Vi&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=Bi.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Bi.set(e,t))}return t}toString(){return this.cssText}};const Ki=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new Wi(i,t,qi)},Gi=Vi?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new Wi("string"==typeof t?t:t+"",void 0,qi))(e)})(t):t,{is:Ji,defineProperty:Zi,getOwnPropertyDescriptor:Yi,getOwnPropertyNames:Qi,getOwnPropertySymbols:Xi,getPrototypeOf:ts}=Object,es=globalThis,is=es.trustedTypes,ss=is?is.emptyScript:"",rs=es.reactiveElementPolyfillSupport,ns=(t,e)=>t,os={toAttribute(t,e){switch(e){case Boolean:t=t?ss:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},as=(t,e)=>!Ji(t,e),ls={attribute:!0,type:String,converter:os,reflect:!1,useDefault:!1,hasChanged:as};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),es.litPropertyMetadata??=new WeakMap;let cs=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ls){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Zi(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=Yi(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ls}static _$Ei(){if(this.hasOwnProperty(ns("elementProperties")))return;const t=ts(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ns("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ns("properties"))){const t=this.properties,e=[...Qi(t),...Xi(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(Gi(t))}else void 0!==t&&e.push(Gi(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(Vi)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=Ii.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:os).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:os;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??as)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};cs.elementStyles=[],cs.shadowRootOptions={mode:"open"},cs[ns("elementProperties")]=new Map,cs[ns("finalized")]=new Map,rs?.({ReactiveElement:cs}),(es.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hs=globalThis,us=t=>t,ds=hs.trustedTypes,fs=ds?ds.createPolicy("lit-html",{createHTML:t=>t}):void 0,gs="$lit$",ps=`lit$${Math.random().toFixed(9).slice(2)}$`,bs="?"+ps,$s=`<${bs}>`,ms=document,_s=()=>ms.createComment(""),ys=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ks=Array.isArray,vs="[ \t\n\f\r]",As=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ws=/-->/g,xs=/>/g,Es=RegExp(`>|${vs}(?:([^\\s"'>=/]+)(${vs}*=${vs}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Ss=/'/g,Cs=/"/g,Ps=/^(?:script|style|textarea|title)$/i,Us=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Ms=Us(1),zs=Us(2),Os=Symbol.for("lit-noChange"),Ds=Symbol.for("lit-nothing"),Ts=new WeakMap,Hs=ms.createTreeWalker(ms,129);function js(t,e){if(!ks(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==fs?fs.createHTML(e):e}let Ns=class t{constructor({strings:e,_$litType$:i},s){let r;this.parts=[];let n=0,o=0;const a=e.length-1,l=this.parts,[c,h]=((t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=As;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,l=o.exec(i),null!==l);)h=o.lastIndex,o===As?"!--"===l[1]?o=ws:void 0!==l[1]?o=xs:void 0!==l[2]?(Ps.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=Es):void 0!==l[3]&&(o=Es):o===Es?">"===l[0]?(o=r??As,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?Es:'"'===l[3]?Cs:Ss):o===Cs||o===Ss?o=Es:o===ws||o===xs?o=As:(o=Es,r=void 0);const u=o===Es&&t[e+1].startsWith("/>")?" ":"";n+=o===As?i+$s:c>=0?(s.push(a),i.slice(0,c)+gs+i.slice(c)+ps+u):i+ps+(-2===c?e:u)}return[js(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(e,i);if(this.el=t.createElement(c,s),Hs.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=Hs.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(gs)){const e=h[o++],i=r.getAttribute(t).split(ps),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?Vs:"?"===s[1]?qs:"@"===s[1]?Bs:Is}),r.removeAttribute(t)}else t.startsWith(ps)&&(l.push({type:6,index:n}),r.removeAttribute(t));if(Ps.test(r.tagName)){const t=r.textContent.split(ps),e=t.length-1;if(e>0){r.textContent=ds?ds.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],_s()),Hs.nextNode(),l.push({type:2,index:++n});r.append(t[e],_s())}}}else if(8===r.nodeType)if(r.data===bs)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(ps,t+1));)l.push({type:7,index:n}),t+=ps.length-1}n++}}static createElement(t,e){const i=ms.createElement("template");return i.innerHTML=t,i}};function Rs(t,e,i=t,s){if(e===Os)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=ys(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Rs(t,r._$AS(t,e.values),r,s)),e}let Ls=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??ms).importNode(e,!0);Hs.currentNode=s;let r=Hs.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Fs(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new Ws(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=Hs.nextNode(),n++)}return Hs.currentNode=ms,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Fs=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Ds,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Rs(this,t,e),ys(t)?t===Ds||null==t||""===t?(this._$AH!==Ds&&this._$AR(),this._$AH=Ds):t!==this._$AH&&t!==Os&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>ks(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Ds&&ys(this._$AH)?this._$AA.nextSibling.data=t:this.T(ms.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Ns.createElement(js(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Ls(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Ts.get(t.strings);return void 0===e&&Ts.set(t.strings,e=new Ns(t)),e}k(e){ks(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,r=0;for(const n of e)r===i.length?i.push(s=new t(this.O(_s()),this.O(_s()),this,this.options)):s=i[r],s._$AI(n),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=us(t).nextSibling;us(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},Is=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=Ds,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ds}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Rs(this,t,e,0),n=!ys(t)||t!==this._$AH&&t!==Os,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=Rs(this,s[i+o],e,o),a===Os&&(a=this._$AH[o]),n||=!ys(a)||a!==this._$AH[o],a===Ds?t=Ds:t!==Ds&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===Ds?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Vs=class extends Is{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ds?void 0:t}},qs=class extends Is{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Ds)}},Bs=class extends Is{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Rs(this,t,e,0)??Ds)===Os)return;const i=this._$AH,s=t===Ds&&i!==Ds||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==Ds&&(i===Ds||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ws=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Rs(this,t)}};const Ks=hs.litHtmlPolyfillSupport;Ks?.(Ns,Fs),(hs.litHtmlVersions??=[]).push("3.3.3");const Gs=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Js=class extends cs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Fs(e.insertBefore(_s(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Os}};Js._$litElement$=!0,Js.finalized=!0,Gs.litElementHydrateSupport?.({LitElement:Js});const Zs=Gs.litElementPolyfillSupport;Zs?.({LitElement:Js}),(Gs.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ys=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},Qs={attribute:!0,type:String,converter:os,reflect:!1,hasChanged:as},Xs=(t=Qs,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tr(t){return(e,i)=>"object"==typeof i?Xs(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function er(t){return tr({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ir=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sr=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends ir{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return Os}});function rr(t,e,i,s,r){return i<=e?s:s+(Math.min(i,Math.max(e,t))-e)/(i-e)*(r-s)}function nr(t){return{name:t,selector:{text:{}}}}function or(t,e){return{name:t,selector:{number:{...e,mode:"box"}}}}function ar(t,e){return{name:t,selector:{select:{mode:"dropdown",options:e}}}}function lr(t,e,i){const s=t-e;return Math.abs(s)<i?"steady":s>0?"rising":"falling"}let cr=class{constructor(t,e,i=3e5){this.storageKeyPrefix=t,this.convert=e,this.throttleMs=i,this.cache=null,this.cachedEntityId=null,this.inFlight=null}storageKey(t){return`${this.storageKeyPrefix}${t}`}getCached(t){return this.cachedEntityId!==t&&(this.cachedEntityId=t,this.cache=function(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):null}catch{return null}}(this.storageKey(t))),this.cache}shouldFetch(t){const e=this.getCached(t);return!e||Date.now()-e.fetchedAt>this.throttleMs}update(t,e,i,s,r,n,o,a){const l=this.getCached(e);return this.inFlight||!this.shouldFetch(e)||(this.inFlight=async function(t,e,i){const s=`history/period/${new Date(Date.now()-36e5*i).toISOString()}?filter_entity_id=${encodeURIComponent(e)}&minimal_response&no_attributes`,r=await t.callApi("GET",s),n=r?.[0];if(!n?.length)return null;const o=n[0],a=o.state??o.s;if(void 0===a)return null;const l=parseFloat(a);return Number.isFinite(l)?l:null}(t,e,n).then(t=>{if(null===t)return{direction:"unknown",pastValueDisplay:null,fetchedAt:Date.now()};const e=this.convert(t,s,r);return{direction:lr(i,e,o),pastValueDisplay:e,fetchedAt:Date.now()}}).catch(()=>({direction:l?.direction??"unknown",pastValueDisplay:l?.pastValueDisplay??null,fetchedAt:Date.now()})).then(t=>(this.cache=t,function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}(this.storageKey(e),t),this.inFlight=null,a?.(t),t))),l}};Ki`
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
`;const hr=Ki`
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
`,ur="analog-thermometer-mercury-card",dr="analog-thermometer-mercury-card-editor",fr={classic:"#c0392b",silver:"#c9cdd1",dark:"#e05c4d",light:"#c0392b","led-backlit":"#ff4d4d",fluorescent:"#baff29",futuristic:"#ff2fd0"},gr={"°C":{major:10,minor:2},"°F":{major:20,minor:5}},pr=168-Math.sqrt(300),br="mercury-liquid-clip";function $r(t,e){const i=60-t,s=60+t,r=168-Math.sqrt(e*e-t*t);return[`M ${i} 20`,`L ${i} ${r}`,`A ${e} ${e} 0 1 0 ${s} ${r}`,`L ${s} 20`,`A ${t} ${t} 0 1 0 ${i} 20`,"Z"].join(" ")}function mr(t){const{min:e,max:i,unit:s,value:r,pastValue:n,liquidColor:o}=t;return zs`
    <svg viewBox="0 0 140 200" class="tube-dial" role="img" aria-label="Mercury thermometer">
      <defs>${zs`
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
      ${function(t,e,i){const{major:s,minor:r}=gr[i];return function(t,e,i,s,r,n){return function(t,e,i,s){if(i<=0||s<=0||e<=t)return[];const r=[],n=s/1e3;for(let o=t;o<=e+n;o+=s){const t=Math.round(o/s)*s,e=Math.abs(t/i-Math.round(t/i))<n;r.push({value:t,major:e})}return r}(t,e,i,s).map(i=>({...i,position:rr(i.value,t,e,r,n)}))}(t,e,s,r,pr,20).map(t=>{const e=t.major?8:4,i=zs`<line
      x1=${72} y1=${t.position} x2=${72+e} y2=${t.position}
      class=${t.major?"tick tick-major":"tick tick-minor"}
    />`;if(!t.major)return i;const s=zs`<text x=${84} y=${t.position} class="tick-label" dominant-baseline="middle">${Math.round(10*t.value)/10}</text>`;return zs`${i}${s}`})}(e,i,s)}
      ${function(t,e,i){if(null===t)return zs``;const s=rr(t,e,i,pr,20);return zs`<line
    x1=${42} y1=${s} x2=${48} y2=${s}
    class="trend-marker"
  />`}(n,e,i)}
      ${function(t,e,i,s){if(null===t)return zs``;const r=rr(t,e,i,pr,20);return zs`
    <defs>
      <clipPath id=${br}>
        <rect x="0" y=${r} width="140" height=${192-r} />
      </clipPath>
    </defs>
    <path d=${$r(6,16)} class="liquid" fill=${s} clip-path=${`url(#${br})`} />
  `}(r,e,i,o)}
      <path d=${$r(10,20)} class="glass" />
      <line
        x1=${53} y1=${26}
        x2=${53} y2=${pr-6}
        class="glass-highlight"
      />
      <ellipse cx=${54} cy=${162} rx="4" ry="6" class="bulb-highlight" />
    </svg>
  `}function _r(t){return 9*t/5+32}function yr(t,e,i){return e===i?t:(s=function(t,e){return"°F"===e?function(t){return 5*(t-32)/9}(t):t}(t,e),"°F"===i?_r(s):s);var s}function kr(t,e){const i=t.states[e]?.attributes?.unit_of_measurement;return i&&i.toLowerCase().includes("f")?"°F":"°C"}const vr=[{name:"entity",selector:{entity:{domain:"sensor"}}},nr("name"),ar("unit",[{value:"auto",label:"Auto-detect"},{value:"°C",label:"°C"},{value:"°F",label:"°F"}]),or("trend_hours",{min:1,max:12,step:1}),or("trend_threshold",{min:0,step:.1}),ar("face_style",[{value:"classic",label:"Classic"},{value:"silver",label:"Silver"},{value:"dark",label:"Dark"},{value:"light",label:"Light"},{value:"led-backlit",label:"LED Backlit"},{value:"fluorescent",label:"Fluorescent"},{value:"futuristic",label:"Futuristic"}]),nr("liquid_color")];const Ar=(wr={entity:"Temperature sensor entity",name:"Name (optional)",unit:"Display unit",trend_hours:"Trend lookback (hours)",trend_threshold:"Trend threshold",face_style:"Face style",liquid_color:"Liquid color (optional, overrides face style default)"},t=>wr[t.name]??t.name);var wr;let xr=class extends Js{setConfig(t){this._config=t}render(){return this.hass&&this._config?Ms`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${vr}
        .computeLabel=${Ar}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:Ms``}_valueChanged(t){!function(t,e,i={},s={}){const r=new CustomEvent(e,{bubbles:s.bubbles??!0,cancelable:s.cancelable??!1,composed:s.composed??!0,detail:i});t.dispatchEvent(r)}(this,"config-changed",{config:t.detail.value})}};Fi([tr({attribute:!1})],xr.prototype,"hass",void 0),Fi([er()],xr.prototype,"_config",void 0),xr=Fi([Ys(dr)],xr);const Er={rising:"↑",falling:"↓",steady:"→",unknown:""},Sr={rising:"Rising",falling:"Falling",steady:"Steady",unknown:""};let Cr=class extends Js{constructor(){super(...arguments),this._trendDirection="unknown",this._pastValueDisplay=null,this._tracker=new cr("analog-thermometer-mercury-card-trend-",yr,3e5),this._lastEntityUpdate=null}setConfig(t){if(!t.entity)throw new Error("You must specify a temperature sensor entity.");this._config=t}getCardSize(){return 4}static getConfigElement(){return document.createElement(dr)}static getStubConfig(t){const e=Object.values(t?.states??{}).find(t=>t.entity_id.startsWith("sensor.")&&"temperature"===t.attributes.device_class);return{type:"custom:analog-thermometer-mercury-card",entity:e?.entity_id??""}}willUpdate(t){t.has("hass")&&this._maybeUpdateTrend()}_maybeUpdateTrend(){if(!this.hass||!this._config?.entity)return;const t=this.hass.states[this._config.entity];if(!t)return;const e=parseFloat(t.state);if(!Number.isFinite(e))return;const i=kr(this.hass,this._config.entity),s=this._config.unit??i,r=yr(e,i,s),n=this._config.trend_hours??3,o=this._config.trend_threshold??("°F"===s?1.8:1);if(this._lastEntityUpdate===t.last_updated)return;this._lastEntityUpdate=t.last_updated;const a=this._tracker.update(this.hass,this._config.entity,r,i,s,n,o,t=>{this._trendDirection=t.direction,this._pastValueDisplay=t.pastValueDisplay});this._trendDirection=a?.direction??"unknown",this._pastValueDisplay=a?.pastValueDisplay??null}render(){if(!this._config||!this.hass)return Ms``;const t=this.hass.states[this._config.entity];if(!t)return Ms`<ha-card>
        <div class="warning">Entity not found: ${this._config.entity}</div>
      </ha-card>`;const e=kr(this.hass,this._config.entity),i=this._config.unit??e,s=parseFloat(t.state),r=Number.isFinite(s),n=r?yr(s,e,i):null,o="°F"===i?{min:_r(-20),max:_r(45)}:{min:-20,max:45},a=this._config.min??o.min,l=this._config.max??o.max,c=this._config.face_style??"classic",h=this._config.liquid_color||fr[c],u=this._config.name??t.attributes.friendly_name??this._config.entity;return Ms`
      <ha-card>
        <div class=${sr({"card-content":!0,[`style-${c}`]:!0})}>
          <div class="title">${u}</div>
          ${mr({min:a,max:l,unit:i,value:n,pastValue:this._pastValueDisplay,liquidColor:h})}
          <div class="readout">
            <span class="value">${r?n.toFixed(1):"--"}</span>
            <span class="unit">${i}</span>
          </div>
          <div class="trend trend-${this._trendDirection}">
            <span class="arrow">${Er[this._trendDirection]}</span>
            <span class="label">${Sr[this._trendDirection]}</span>
          </div>
        </div>
      </ha-card>
    `}};var Pr;function Ur(t,e,i,s){var r,n=arguments.length,o=n<3?e:s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}Cr.styles=[hr,Ki`
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
    `],Fi([tr({attribute:!1})],Cr.prototype,"hass",void 0),Fi([er()],Cr.prototype,"_config",void 0),Fi([er()],Cr.prototype,"_trendDirection",void 0),Fi([er()],Cr.prototype,"_pastValueDisplay",void 0),Cr=Fi([Ys(ur)],Cr),Pr={type:ur,name:"Analog Thermometer (Mercury)",preview:!1,description:"A classic mercury-tube style thermometer with temperature trend tracking."},window.customCards=window.customCards||[],window.customCards.push(Pr),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Mr=globalThis,zr=Mr.ShadowRoot&&(void 0===Mr.ShadyCSS||Mr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Or=Symbol(),Dr=new WeakMap;let Tr=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Or)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(zr&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=Dr.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Dr.set(e,t))}return t}toString(){return this.cssText}};const Hr=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new Tr(i,t,Or)},jr=zr?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new Tr("string"==typeof t?t:t+"",void 0,Or))(e)})(t):t,{is:Nr,defineProperty:Rr,getOwnPropertyDescriptor:Lr,getOwnPropertyNames:Fr,getOwnPropertySymbols:Ir,getPrototypeOf:Vr}=Object,qr=globalThis,Br=qr.trustedTypes,Wr=Br?Br.emptyScript:"",Kr=qr.reactiveElementPolyfillSupport,Gr=(t,e)=>t,Jr={toAttribute(t,e){switch(e){case Boolean:t=t?Wr:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},Zr=(t,e)=>!Nr(t,e),Yr={attribute:!0,type:String,converter:Jr,reflect:!1,useDefault:!1,hasChanged:Zr};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),qr.litPropertyMetadata??=new WeakMap;let Qr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Yr){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Rr(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=Lr(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Yr}static _$Ei(){if(this.hasOwnProperty(Gr("elementProperties")))return;const t=Vr(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Gr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Gr("properties"))){const t=this.properties,e=[...Fr(t),...Ir(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(jr(t))}else void 0!==t&&e.push(jr(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(zr)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=Mr.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:Jr).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:Jr;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??Zr)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};Qr.elementStyles=[],Qr.shadowRootOptions={mode:"open"},Qr[Gr("elementProperties")]=new Map,Qr[Gr("finalized")]=new Map,Kr?.({ReactiveElement:Qr}),(qr.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xr=globalThis,tn=t=>t,en=Xr.trustedTypes,sn=en?en.createPolicy("lit-html",{createHTML:t=>t}):void 0,rn="$lit$",nn=`lit$${Math.random().toFixed(9).slice(2)}$`,on="?"+nn,an=`<${on}>`,ln=document,cn=()=>ln.createComment(""),hn=t=>null===t||"object"!=typeof t&&"function"!=typeof t,un=Array.isArray,dn="[ \t\n\f\r]",fn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gn=/-->/g,pn=/>/g,bn=RegExp(`>|${dn}(?:([^\\s"'>=/]+)(${dn}*=${dn}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),$n=/'/g,mn=/"/g,_n=/^(?:script|style|textarea|title)$/i,yn=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),kn=yn(1),vn=yn(2),An=Symbol.for("lit-noChange"),wn=Symbol.for("lit-nothing"),xn=new WeakMap,En=ln.createTreeWalker(ln,129);function Sn(t,e){if(!un(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==sn?sn.createHTML(e):e}let Cn=class t{constructor({strings:e,_$litType$:i},s){let r;this.parts=[];let n=0,o=0;const a=e.length-1,l=this.parts,[c,h]=((t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=fn;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,l=o.exec(i),null!==l);)h=o.lastIndex,o===fn?"!--"===l[1]?o=gn:void 0!==l[1]?o=pn:void 0!==l[2]?(_n.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=bn):void 0!==l[3]&&(o=bn):o===bn?">"===l[0]?(o=r??fn,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?bn:'"'===l[3]?mn:$n):o===mn||o===$n?o=bn:o===gn||o===pn?o=fn:(o=bn,r=void 0);const u=o===bn&&t[e+1].startsWith("/>")?" ":"";n+=o===fn?i+an:c>=0?(s.push(a),i.slice(0,c)+rn+i.slice(c)+nn+u):i+nn+(-2===c?e:u)}return[Sn(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(e,i);if(this.el=t.createElement(c,s),En.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=En.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(rn)){const e=h[o++],i=r.getAttribute(t).split(nn),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?On:"?"===s[1]?Dn:"@"===s[1]?Tn:zn}),r.removeAttribute(t)}else t.startsWith(nn)&&(l.push({type:6,index:n}),r.removeAttribute(t));if(_n.test(r.tagName)){const t=r.textContent.split(nn),e=t.length-1;if(e>0){r.textContent=en?en.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],cn()),En.nextNode(),l.push({type:2,index:++n});r.append(t[e],cn())}}}else if(8===r.nodeType)if(r.data===on)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(nn,t+1));)l.push({type:7,index:n}),t+=nn.length-1}n++}}static createElement(t,e){const i=ln.createElement("template");return i.innerHTML=t,i}};function Pn(t,e,i=t,s){if(e===An)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=hn(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Pn(t,r._$AS(t,e.values),r,s)),e}class Un{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??ln).importNode(e,!0);En.currentNode=s;let r=En.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Mn(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new Hn(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=En.nextNode(),n++)}return En.currentNode=ln,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Mn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=wn,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Pn(this,t,e),hn(t)?t===wn||null==t||""===t?(this._$AH!==wn&&this._$AR(),this._$AH=wn):t!==this._$AH&&t!==An&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>un(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==wn&&hn(this._$AH)?this._$AA.nextSibling.data=t:this.T(ln.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Cn.createElement(Sn(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Un(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=xn.get(t.strings);return void 0===e&&xn.set(t.strings,e=new Cn(t)),e}k(t){un(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Mn(this.O(cn()),this.O(cn()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=tn(t).nextSibling;tn(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class zn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=wn,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=wn}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Pn(this,t,e,0),n=!hn(t)||t!==this._$AH&&t!==An,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=Pn(this,s[i+o],e,o),a===An&&(a=this._$AH[o]),n||=!hn(a)||a!==this._$AH[o],a===wn?t=wn:t!==wn&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===wn?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class On extends zn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===wn?void 0:t}}class Dn extends zn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==wn)}}class Tn extends zn{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Pn(this,t,e,0)??wn)===An)return;const i=this._$AH,s=t===wn&&i!==wn||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==wn&&(i===wn||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Hn{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Pn(this,t)}}const jn=Xr.litHtmlPolyfillSupport;jn?.(Cn,Mn),(Xr.litHtmlVersions??=[]).push("3.3.3");const Nn=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Rn=class extends Qr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Mn(e.insertBefore(cn(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return An}};Rn._$litElement$=!0,Rn.finalized=!0,Nn.litElementHydrateSupport?.({LitElement:Rn});const Ln=Nn.litElementPolyfillSupport;Ln?.({LitElement:Rn}),(Nn.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Fn=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},In={attribute:!0,type:String,converter:Jr,reflect:!1,hasChanged:Zr},Vn=(t=In,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qn(t){return(e,i)=>"object"==typeof i?Vn(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bn(t){return qn({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Wn{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kn=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Wn{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return An}});function Gn(t,e,i,s){const r=(s-90)*Math.PI/180;return{x:t+i*Math.cos(r),y:e+i*Math.sin(r)}}function Jn(t,e,i,s,r){const n=Gn(t,e,i,s),o=Gn(t,e,i,r),a=r-s<=180?0:1;return`M ${n.x} ${n.y} A ${i} ${i} 0 ${a} 1 ${o.x} ${o.y}`}function Zn(t,e,i,s){if(i<=e)return s.startAngle;let r;if(s.wrap){const s=i-e;r=((t-e)%s+s)%s/s}else r=(Math.min(i,Math.max(e,t))-e)/(i-e);return s.startAngle+r*s.sweepAngle}function Yn(t){return{name:t,selector:{text:{}}}}function Qn(t,e){return{name:t,selector:{number:{...e,mode:"box"}}}}function Xn(t,e,i){const s=t-e;return Math.abs(s)<i?"steady":s>0?"rising":"falling"}class to{constructor(t,e,i=3e5){this.storageKeyPrefix=t,this.convert=e,this.throttleMs=i,this.cache=null,this.cachedEntityId=null,this.inFlight=null}storageKey(t){return`${this.storageKeyPrefix}${t}`}getCached(t){return this.cachedEntityId!==t&&(this.cachedEntityId=t,this.cache=function(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):null}catch{return null}}(this.storageKey(t))),this.cache}shouldFetch(t){const e=this.getCached(t);return!e||Date.now()-e.fetchedAt>this.throttleMs}update(t,e,i,s,r,n,o,a){const l=this.getCached(e);return this.inFlight||!this.shouldFetch(e)||(this.inFlight=async function(t,e,i){const s=`history/period/${new Date(Date.now()-36e5*i).toISOString()}?filter_entity_id=${encodeURIComponent(e)}&minimal_response&no_attributes`,r=await t.callApi("GET",s),n=r?.[0];if(!n?.length)return null;const o=n[0],a=o.state??o.s;if(void 0===a)return null;const l=parseFloat(a);return Number.isFinite(l)?l:null}(t,e,n).then(t=>{if(null===t)return{direction:"unknown",pastValueDisplay:null,fetchedAt:Date.now()};const e=this.convert(t,s,r);return{direction:Xn(i,e,o),pastValueDisplay:e,fetchedAt:Date.now()}}).catch(()=>({direction:l?.direction??"unknown",pastValueDisplay:l?.pastValueDisplay??null,fetchedAt:Date.now()})).then(t=>(this.cache=t,function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}(this.storageKey(e),t),this.inFlight=null,a?.(t),t))),l}}const eo=Hr`
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
`;Hr`
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
`;const io="analog-humidity-radial-card",so="analog-humidity-radial-card-editor",ro={classic:"#333333",silver:"#222222",dark:"#e8e8e8",light:"#333333","led-backlit":"#ff4d4d",fluorescent:"#baff29",futuristic:"#ff2fd0"},no={startAngle:-135,sweepAngle:270},oo=[{key:"dry",label:"Dry",from:0,to:30,color:"#b5651d"},{key:"comfortable",label:"Comfortable",from:30,to:50,color:"#4a7a3c"},{key:"humid",label:"Humid",from:50,to:70,color:"#c9a227"},{key:"very-humid",label:"Very Humid",from:70,to:100,color:"#2471a3"}],ao={major:10,minor:2},lo=100;function co(t){const{min:e,max:i,value:s,pastValue:r,needleColor:n}=t;return vn`
    <svg viewBox="0 0 200 200" class="dial" role="img" aria-label="Hygrometer dial">
      <defs>${vn`
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
      <circle cx=${lo} cy=${lo} r="97" class="bezel" />
      <circle cx=${lo} cy=${lo} r="90" class="face" />
      ${function(t,e){return oo.map(i=>{if(i.to<=t||i.from>=e)return vn``;const s=Zn(i.from,t,e,no),r=Zn(i.to,t,e,no);if(r<=s)return vn``;const n=Jn(lo,lo,86,s,r);return vn`<path
      d=${n}
      stroke=${i.color}
      stroke-width=${9}
      fill="none"
    />`})}(e,i)}
      ${function(t,e){const{major:i,minor:s}=ao;return function(t,e,i,s,r){return function(t,e,i,s){if(e<=t)return[];const r=[],n=s/1e3;for(let o=t;o<=e+n;o+=s){const t=Math.round(o/s)*s,e=Math.abs(t/i-Math.round(t/i))<n;r.push({value:t,major:e})}return r}(t,e,i,s).map(i=>({...i,angle:Zn(i.value,t,e,r)}))}(t,e,i,s,no).map(t=>{const e=t.major?8:4,i=Gn(lo,lo,72-e,t.angle),s=Gn(lo,lo,72,t.angle),r=vn`<line
      x1=${i.x} y1=${i.y} x2=${s.x} y2=${s.y}
      class=${t.major?"tick tick-major":"tick tick-minor"}
    />`;if(!t.major)return r;const n=Gn(lo,lo,50,t.angle),o=vn`<text x=${n.x} y=${n.y} class="tick-label" text-anchor="middle" dominant-baseline="middle">${Math.round(10*t.value)/10}</text>`;return vn`${r}${o}`})}(e,i)}
      ${function(t,e){return oo.map(i=>{const s=Math.max(i.from,t),r=Math.min(i.to,e);if(r<=s)return vn``;const n=Zn(s,t,e,no),o=Zn(r,t,e,no),a=`zone-label-path-${i.key}`,l=Jn(lo,lo,77,n,o);return vn`
      <path id=${a} d=${l} fill="none" stroke="none" />
      <text class="zone-label" dominant-baseline="middle">
        <textPath href=${"#"+a} startOffset="50%" text-anchor="middle">${i.label}</textPath>
      </text>
    `})}(e,i)}
      ${function(t,e,i){if(null===t)return vn``;const s=Zn(t,e,i,no),r=Gn(lo,lo,88,s),n=Gn(lo,lo,95,s);return vn`<line
    x1=${r.x} y1=${r.y} x2=${n.x} y2=${n.y}
    class="trend-marker"
  />`}(r,e,i)}
      ${function(t,e,i,s){if(null===t)return vn``;const r=Zn(t,e,i,no);return vn`<g class="needle" transform="rotate(${r} ${lo} ${lo})">
    <polygon
      points="${lo},${38} ${97},${114} ${103},${114}"
      fill=${s}
    />
  </g>`}(s,e,i,n)}
      <circle cx=${lo} cy=${lo} r="6" class="hub" />
    </svg>
  `}function ho(t,e,i){return t}const uo=[{name:"entity",selector:{entity:{domain:"sensor"}}},Yn("name"),Qn("trend_hours",{min:1,max:12,step:1}),Qn("trend_threshold",{min:0,step:.5}),{name:"face_style",selector:{select:{mode:"dropdown",options:[{value:"classic",label:"Classic"},{value:"silver",label:"Silver"},{value:"dark",label:"Dark"},{value:"light",label:"Light"},{value:"led-backlit",label:"LED Backlit"},{value:"fluorescent",label:"Fluorescent"},{value:"futuristic",label:"Futuristic"}]}}},Yn("needle_color")];const fo=(go={entity:"Humidity sensor entity",name:"Name (optional)",trend_hours:"Trend lookback (hours)",trend_threshold:"Trend threshold",face_style:"Face style",needle_color:"Needle color (optional, overrides face style default)"},t=>go[t.name]??t.name);var go;let po=class extends Rn{setConfig(t){this._config=t}render(){return this.hass&&this._config?kn`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${uo}
        .computeLabel=${fo}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:kn``}_valueChanged(t){!function(t,e,i={},s={}){const r=new CustomEvent(e,{bubbles:s.bubbles??!0,cancelable:s.cancelable??!1,composed:s.composed??!0,detail:i});t.dispatchEvent(r)}(this,"config-changed",{config:t.detail.value})}};Ur([qn({attribute:!1})],po.prototype,"hass",void 0),Ur([Bn()],po.prototype,"_config",void 0),po=Ur([Fn(so)],po);const bo={rising:"↑",falling:"↓",steady:"→",unknown:""},$o={rising:"Rising",falling:"Falling",steady:"Steady",unknown:""};let mo=class extends Rn{constructor(){super(...arguments),this._trendDirection="unknown",this._pastValueDisplay=null,this._tracker=new to("analog-humidity-radial-card-trend-",ho,3e5),this._lastEntityUpdate=null}setConfig(t){if(!t.entity)throw new Error("You must specify a humidity sensor entity.");this._config=t}getCardSize(){return 4}static getConfigElement(){return document.createElement(so)}static getStubConfig(t){const e=Object.values(t?.states??{}).find(t=>t.entity_id.startsWith("sensor.")&&"humidity"===t.attributes.device_class);return{type:"custom:analog-humidity-radial-card",entity:e?.entity_id??""}}willUpdate(t){t.has("hass")&&this._maybeUpdateTrend()}_maybeUpdateTrend(){if(!this.hass||!this._config?.entity)return;const t=this.hass.states[this._config.entity];if(!t)return;const e=parseFloat(t.state);if(!Number.isFinite(e))return;const i=(this.hass,this._config.entity,"%"),s=ho(e),r=this._config.trend_hours??3,n=this._config.trend_threshold??3;if(this._lastEntityUpdate===t.last_updated)return;this._lastEntityUpdate=t.last_updated;const o=this._tracker.update(this.hass,this._config.entity,s,i,i,r,n,t=>{this._trendDirection=t.direction,this._pastValueDisplay=t.pastValueDisplay});this._trendDirection=o?.direction??"unknown",this._pastValueDisplay=o?.pastValueDisplay??null}render(){if(!this._config||!this.hass)return kn``;const t=this.hass.states[this._config.entity];if(!t)return kn`<ha-card>
        <div class="warning">Entity not found: ${this._config.entity}</div>
      </ha-card>`;const e=(this.hass,this._config.entity,"%"),i=parseFloat(t.state),s=Number.isFinite(i),r=s?ho(i):null,n=0,o=100,a=this._config.min??n,l=this._config.max??o,c=this._config.face_style??"classic",h=this._config.needle_color||ro[c],u=this._config.name??t.attributes.friendly_name??this._config.entity;return kn`
      <ha-card>
        <div class=${Kn({"card-content":!0,[`style-${c}`]:!0})}>
          <div class="title">${u}</div>
          ${co({min:a,max:l,value:r,pastValue:this._pastValueDisplay,needleColor:h})}
          <div class="readout">
            <span class="value">${s?r.toFixed(0):"--"}</span>
            <span class="unit">${e}</span>
          </div>
          <div class="trend trend-${this._trendDirection}">
            <span class="arrow">${bo[this._trendDirection]}</span>
            <span class="label">${$o[this._trendDirection]}</span>
          </div>
        </div>
      </ha-card>
    `}};var _o;function yo(t,e,i,s){var r,n=arguments.length,o=n<3?e:s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}mo.styles=[eo,Hr`
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
        color: #2471a3;
      }
      .trend-falling {
        color: #b5651d;
      }
      .trend-steady {
        color: #27633f;
      }
      .trend .arrow {
        font-size: 1.1rem;
        line-height: 1;
      }
    `],Ur([qn({attribute:!1})],mo.prototype,"hass",void 0),Ur([Bn()],mo.prototype,"_config",void 0),Ur([Bn()],mo.prototype,"_trendDirection",void 0),Ur([Bn()],mo.prototype,"_pastValueDisplay",void 0),mo=Ur([Fn(io)],mo),_o={type:io,name:"Analog Humidity (Radial)",preview:!1,description:"A classic analog-style radial hygrometer dial with humidity trend tracking."},window.customCards=window.customCards||[],window.customCards.push(_o),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ko=globalThis,vo=ko.ShadowRoot&&(void 0===ko.ShadyCSS||ko.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ao=Symbol(),wo=new WeakMap;let xo=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ao)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(vo&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=wo.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&wo.set(e,t))}return t}toString(){return this.cssText}};const Eo=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new xo(i,t,Ao)},So=vo?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new xo("string"==typeof t?t:t+"",void 0,Ao))(e)})(t):t,{is:Co,defineProperty:Po,getOwnPropertyDescriptor:Uo,getOwnPropertyNames:Mo,getOwnPropertySymbols:zo,getPrototypeOf:Oo}=Object,Do=globalThis,To=Do.trustedTypes,Ho=To?To.emptyScript:"",jo=Do.reactiveElementPolyfillSupport,No=(t,e)=>t,Ro={toAttribute(t,e){switch(e){case Boolean:t=t?Ho:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},Lo=(t,e)=>!Co(t,e),Fo={attribute:!0,type:String,converter:Ro,reflect:!1,useDefault:!1,hasChanged:Lo};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),Do.litPropertyMetadata??=new WeakMap;let Io=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Fo){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Po(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=Uo(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Fo}static _$Ei(){if(this.hasOwnProperty(No("elementProperties")))return;const t=Oo(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(No("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(No("properties"))){const t=this.properties,e=[...Mo(t),...zo(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(So(t))}else void 0!==t&&e.push(So(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(vo)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=ko.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:Ro).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:Ro;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??Lo)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};Io.elementStyles=[],Io.shadowRootOptions={mode:"open"},Io[No("elementProperties")]=new Map,Io[No("finalized")]=new Map,jo?.({ReactiveElement:Io}),(Do.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Vo=globalThis,qo=t=>t,Bo=Vo.trustedTypes,Wo=Bo?Bo.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ko="$lit$",Go=`lit$${Math.random().toFixed(9).slice(2)}$`,Jo="?"+Go,Zo=`<${Jo}>`,Yo=document,Qo=()=>Yo.createComment(""),Xo=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ta=Array.isArray,ea="[ \t\n\f\r]",ia=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sa=/-->/g,ra=/>/g,na=RegExp(`>|${ea}(?:([^\\s"'>=/]+)(${ea}*=${ea}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),oa=/'/g,aa=/"/g,la=/^(?:script|style|textarea|title)$/i,ca=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),ha=ca(1),ua=ca(2),da=Symbol.for("lit-noChange"),fa=Symbol.for("lit-nothing"),ga=new WeakMap,pa=Yo.createTreeWalker(Yo,129);function ba(t,e){if(!ta(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Wo?Wo.createHTML(e):e}class $a{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,c]=((t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=ia;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,l=o.exec(i),null!==l);)h=o.lastIndex,o===ia?"!--"===l[1]?o=sa:void 0!==l[1]?o=ra:void 0!==l[2]?(la.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=na):void 0!==l[3]&&(o=na):o===na?">"===l[0]?(o=r??ia,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?na:'"'===l[3]?aa:oa):o===aa||o===oa?o=na:o===sa||o===ra?o=ia:(o=na,r=void 0);const u=o===na&&t[e+1].startsWith("/>")?" ":"";n+=o===ia?i+Zo:c>=0?(s.push(a),i.slice(0,c)+Ko+i.slice(c)+Go+u):i+Go+(-2===c?e:u)}return[ba(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=$a.createElement(l,i),pa.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=pa.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(Ko)){const e=c[n++],i=s.getAttribute(t).split(Go),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?va:"?"===o[1]?Aa:"@"===o[1]?wa:ka}),s.removeAttribute(t)}else t.startsWith(Go)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(la.test(s.tagName)){const t=s.textContent.split(Go),e=t.length-1;if(e>0){s.textContent=Bo?Bo.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],Qo()),pa.nextNode(),a.push({type:2,index:++r});s.append(t[e],Qo())}}}else if(8===s.nodeType)if(s.data===Jo)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(Go,t+1));)a.push({type:7,index:r}),t+=Go.length-1}r++}}static createElement(t,e){const i=Yo.createElement("template");return i.innerHTML=t,i}}function ma(t,e,i=t,s){if(e===da)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=Xo(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=ma(t,r._$AS(t,e.values),r,s)),e}class _a{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??Yo).importNode(e,!0);pa.currentNode=s;let r=pa.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new ya(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new xa(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=pa.nextNode(),n++)}return pa.currentNode=Yo,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class ya{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=fa,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ma(this,t,e),Xo(t)?t===fa||null==t||""===t?(this._$AH!==fa&&this._$AR(),this._$AH=fa):t!==this._$AH&&t!==da&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>ta(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==fa&&Xo(this._$AH)?this._$AA.nextSibling.data=t:this.T(Yo.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=$a.createElement(ba(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new _a(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=ga.get(t.strings);return void 0===e&&ga.set(t.strings,e=new $a(t)),e}k(t){ta(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new ya(this.O(Qo()),this.O(Qo()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=qo(t).nextSibling;qo(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ka{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=fa,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=fa}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=ma(this,t,e,0),n=!Xo(t)||t!==this._$AH&&t!==da,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=ma(this,s[i+o],e,o),a===da&&(a=this._$AH[o]),n||=!Xo(a)||a!==this._$AH[o],a===fa?t=fa:t!==fa&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===fa?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class va extends ka{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===fa?void 0:t}}class Aa extends ka{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==fa)}}class wa extends ka{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=ma(this,t,e,0)??fa)===da)return;const i=this._$AH,s=t===fa&&i!==fa||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==fa&&(i===fa||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class xa{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ma(this,t)}}const Ea=Vo.litHtmlPolyfillSupport;Ea?.($a,ya),(Vo.litHtmlVersions??=[]).push("3.3.3");const Sa=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ca=class extends Io{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new ya(e.insertBefore(Qo(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return da}};Ca._$litElement$=!0,Ca.finalized=!0,Sa.litElementHydrateSupport?.({LitElement:Ca});const Pa=Sa.litElementPolyfillSupport;Pa?.({LitElement:Ca}),(Sa.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ua=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},Ma={attribute:!0,type:String,converter:Ro,reflect:!1,hasChanged:Lo},za=(t=Ma,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Oa(t){return(e,i)=>"object"==typeof i?za(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Da{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ta=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Da{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return da}});function Ha(t,e,i,s){const r=(s-90)*Math.PI/180;return{x:t+i*Math.cos(r),y:e+i*Math.sin(r)}}function ja(t){return{name:t,selector:{text:{}}}}function Na(t,e){return{name:t,selector:{select:{mode:"dropdown",options:e}}}}const Ra=Eo`
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
`;Eo`
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
`;const La="analog-clock-card",Fa="analog-clock-card-editor",Ia={classic:"#333333",silver:"#222222",dark:"#e8e8e8",light:"#333333","led-backlit":"#a8ecff",fluorescent:"#d4ff7a",futuristic:"#7df9ff"},Va={classic:"#c0392b",silver:"#c0392b",dark:"#ff4d4d",light:"#c0392b","led-backlit":"#ff4d4d",fluorescent:"#baff29",futuristic:"#ff2fd0"},qa=100;function Ba(t,e,i,s,r,n){return ua`<g class=${n} transform="rotate(${t} ${qa} ${qa})">
    <polygon
      points="${qa},${qa-e} ${qa-s},${qa+i} ${qa+s},${qa+i}"
      fill=${r}
    />
  </g>`}const Wa=[ja("name"),Na("face_style",[{value:"classic",label:"Classic"},{value:"silver",label:"Silver"},{value:"dark",label:"Dark"},{value:"light",label:"Light"},{value:"led-backlit",label:"LED Backlit"},{value:"fluorescent",label:"Fluorescent"},{value:"futuristic",label:"Futuristic"}]),ja("time_zone"),{name:"show_seconds",selector:{boolean:{}}},Na("second_hand_motion",[{value:"tick",label:"Tick (once per second)"},{value:"sweep",label:"Sweep (smooth)"}])],Ka=(Ga={name:"Name (optional)",face_style:"Face style",time_zone:"Time zone (optional, e.g. America/New_York — defaults to local time)",show_seconds:"Show second hand",second_hand_motion:"Second hand motion"},t=>Ga[t.name]??t.name);var Ga;let Ja=class extends Ca{setConfig(t){this._config=t}render(){return this.hass&&this._config?ha`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Wa}
        .computeLabel=${Ka}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:ha``}_valueChanged(t){!function(t,e,i={},s={}){const r=new CustomEvent(e,{bubbles:s.bubbles??!0,cancelable:s.cancelable??!1,composed:s.composed??!0,detail:i});t.dispatchEvent(r)}(this,"config-changed",{config:t.detail.value})}};yo([Oa({attribute:!1})],Ja.prototype,"hass",void 0),yo([Oa({state:!0,attribute:!1})],Ja.prototype,"_config",void 0),Ja=yo([Ua(Fa)],Ja);const Za=function(t,e=1e3){return class extends t{constructor(){super(...arguments),this.now=new Date}connectedCallback(){super.connectedCallback(),this._tick(),this._intervalId=setInterval(()=>this._tick(),e)}disconnectedCallback(){super.disconnectedCallback(),void 0!==this._intervalId&&(clearInterval(this._intervalId),this._intervalId=void 0)}_tick(){this.now=new Date,this.requestUpdate()}}}(Ca,200);let Ya=class extends Za{setConfig(t){this._config=t}getCardSize(){return 4}static getConfigElement(){return document.createElement(Fa)}static getStubConfig(){return{type:"custom:analog-clock-card"}}render(){if(!this._config)return ha``;const t=this._config.face_style??"classic",e=this._config.show_seconds??!0,i=this._config.second_hand_motion??"tick",s=Ia[t],r=Va[t],n=function(t,e){if(!e)return t;try{return new Date(t.toLocaleString("en-US",{timeZone:e}))}catch{return t}}(this.now,this._config.time_zone);return ha`
      <ha-card>
        <div class=${Ta({"card-content":!0,[`style-${t}`]:!0})}>
          ${this._config.name?ha`<div class="title">${this._config.name}</div>`:""}
          ${function(t){const{now:e,showSeconds:i,smoothSeconds:s,handColor:r,secondHandColor:n}=t;return ua`
    <svg viewBox="0 0 200 200" class="clock-dial" role="img" aria-label="Analog clock">
      <defs>${ua`
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
      <circle cx=${qa} cy=${qa} r="97" class="bezel" />
      <circle cx=${qa} cy=${qa} r="90" class="face" />
      ${function(){const t=[];for(let e=0;e<60;e++){const i=6*e,s=e%5==0,r=Ha(qa,qa,90-(s?8:4),i),n=Ha(qa,qa,90,i);t.push(ua`<line
      x1=${r.x} y1=${r.y} x2=${n.x} y2=${n.y}
      class=${s?"tick tick-major":"tick tick-minor"}
    />`)}return t}()}
      ${function(){const t=[];for(let e=1;e<=12;e++){const i=Ha(qa,qa,74,30*e);t.push(ua`<text x=${i.x} y=${i.y} class="numeral" text-anchor="middle" dominant-baseline="middle">${e}</text>`)}return t}()}
      ${Ba((l=e,(l.getHours()%12+l.getMinutes()/60+l.getSeconds()/3600)/12*360),45,10,4,r,"hand hour-hand")}
      ${Ba(function(t,e=!0){const i=e?t.getSeconds():0;return(t.getMinutes()+i/60)/60*360}(e),68,12,3,r,"hand minute-hand")}
      ${i?(o=function(t,e=!0){const i=e?t.getMilliseconds():0;return(t.getSeconds()+i/1e3)/60*360}(e,s),a=n,ua`<g class="hand second-hand" transform="rotate(${o} ${qa} ${qa})">
    <line x1=${qa} y1=${118} x2=${qa} y2=${22} stroke=${a} />
  </g>`):ua``}
      <circle cx=${qa} cy=${qa} r="6" class="hub" />
    </svg>
  `;var o,a,l}({now:n,showSeconds:e,smoothSeconds:"sweep"===i,handColor:s,secondHandColor:r})}
        </div>
      </ha-card>
    `}};var Qa;Ya.styles=[Ra,Eo`
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
    `],yo([Oa({attribute:!1})],Ya.prototype,"hass",void 0),Ya=yo([Ua(La)],Ya),Qa={type:La,name:"Analog Clock",preview:!1,description:"A classic analog clock face with hour, minute, and second hands."},window.customCards=window.customCards||[],window.customCards.push(Qa);
