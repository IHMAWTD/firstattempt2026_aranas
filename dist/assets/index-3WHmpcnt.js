(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:f,getOwnPropertySymbols:p,getPrototypeOf:ee}=Object,m=globalThis,h=m.trustedTypes,g=h?h.emptyScript:``,_=m.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},b=(e,t)=>!l(e,t),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol(`metadata`),m.litPropertyMetadata??=new WeakMap;var S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(v(`elementProperties`)))return;let e=ee(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v(`properties`))){let e=this.properties,t=[...f(e),...p(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?y:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?y:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??b)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:`open`},S[v(`elementProperties`)]=new Map,S[v(`finalized`)]=new Map,_?.({ReactiveElement:S}),(m.reactiveElementVersions??=[]).push(`2.1.2`);var C=globalThis,w=e=>e,T=C.trustedTypes,E=T?T.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,D=`$lit$`,O=`lit$${Math.random().toFixed(9).slice(2)}$`,k=`?`+O,te=`<${k}>`,A=document,j=()=>A.createComment(``),M=e=>e===null||typeof e!=`object`&&typeof e!=`function`,N=Array.isArray,ne=e=>N(e)||typeof e?.[Symbol.iterator]==`function`,P=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,L=/>/g,R=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),z=/'/g,B=/"/g,V=/^(?:script|style|textarea|title)$/i,H=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),U=Symbol.for(`lit-noChange`),W=Symbol.for(`lit-nothing`),G=new WeakMap,K=A.createTreeWalker(A,129);function q(e,t){if(!N(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return E===void 0?t:E.createHTML(t)}var re=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=F;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===F?c[1]===`!--`?o=I:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=R):(V.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=R):o=L:o===R?c[0]===`>`?(o=i??F,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?R:c[3]===`"`?B:z):o===B||o===z?o=R:o===I||o===L?o=F:(o=R,i=void 0);let d=o===R&&e[t+1].startsWith(`/>`)?` `:``;a+=o===F?n+te:l>=0?(r.push(s),n.slice(0,l)+D+n.slice(l)+O+d):n+O+(l===-2?t:d)}return[q(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},J=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=re(t,n);if(this.el=e.createElement(l,r),K.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=K.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(D)){let t=u[o++],n=i.getAttribute(e).split(O),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?ae:r[1]===`?`?oe:r[1]===`@`?se:Z}),i.removeAttribute(e)}else e.startsWith(O)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(V.test(i.tagName)){let e=i.textContent.split(O),t=e.length-1;if(t>0){i.textContent=T?T.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],j()),K.nextNode(),c.push({type:2,index:++a});i.append(e[t],j())}}}else if(i.nodeType===8)if(i.data===k)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(O,e+1))!==-1;)c.push({type:7,index:a}),e+=O.length-1}a++}}static createElement(e,t){let n=A.createElement(`template`);return n.innerHTML=e,n}};function Y(e,t,n=e,r){if(t===U)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=M(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Y(e,i._$AS(e,t.values),i,r)),t}var ie=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??A).importNode(t,!0);K.currentNode=r;let i=K.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new X(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new ce(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=K.nextNode(),a++)}return K.currentNode=A,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},X=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),M(e)?e===W||e==null||e===``?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==U&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ne(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=J.createElement(q(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ie(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=G.get(e.strings);return t===void 0&&G.set(e.strings,t=new J(e)),t}k(t){N(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(j()),this.O(j()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=w(e).nextSibling;w(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Z=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=W}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Y(this,e,t,0),a=!M(e)||e!==this._$AH&&e!==U,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Y(this,r[n+o],t,o),s===U&&(s=this._$AH[o]),a||=!M(s)||s!==this._$AH[o],s===W?e=W:e!==W&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ae=class extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}},oe=class extends Z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}},se=class extends Z{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??W)===U)return;let n=this._$AH,r=e===W&&n!==W||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==W&&(n===W||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ce=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}},le=C.litHtmlPolyfillSupport;le?.(J,X),(C.litHtmlVersions??=[]).push(`3.3.2`);var ue=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new X(t.insertBefore(j(),e),e,void 0,n??{})}return i._$AI(e),i},Q=globalThis,$=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ue(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return U}};$._$litElement$=!0,$.finalized=!0,Q.litElementHydrateSupport?.({LitElement:$});var de=Q.litElementPolyfillSupport;de?.({LitElement:$}),(Q.litElementVersions??=[]).push(`4.2.2`);var fe=class extends ${static styles=o`
    :host {
      display: block;
      font-family: 'Inter', -apple-system, sans-serif;
      --addu-blue: #081478;
      --addu-gold: #FFD700;
      --bg-light: #f1f5f9;
      --text-main: #1e293b;
      --white: #ffffff;
      background-color: var(--bg-light);
      min-height: 100vh;
      margin: 0;
    }

    /* Layout Containers */
    .app-container { display: flex; min-height: 100vh; }
    
    /* Login Screen Layout */
    .login-overlay {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      background: linear-gradient(135deg, var(--addu-blue) 0%, #040a3d 100%);
    }

    .login-card {
      background: var(--white);
      padding: 3rem;
      border-radius: 16px;
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3);
      width: 100%;
      max-width: 400px;
      text-align: center;
    }

    .brand-logo { width: 100px; margin-bottom: 1rem; }

    /* Sidebar Navigation */
    .sidebar {
      width: 260px;
      background: var(--addu-blue);
      color: white;
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      box-shadow: 4px 0 10px rgba(0,0,0,0.1);
    }

    .sidebar-brand {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 3rem;
      font-weight: 800;
      letter-spacing: 0.5px;
    }

    .nav-item {
      padding: 12px 16px;
      margin-bottom: 8px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 500;
      color: rgba(255,255,255,0.7);
    }

    .nav-item:hover { background: rgba(255,255,255,0.1); color: white; }
    .nav-item.active { background: var(--white); color: var(--addu-blue); }

    /* Main Content Area */
    .main-content { flex: 1; padding: 2rem; overflow-y: auto; }
    
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 1rem;
    }

    /* Professional UI Components */
    .card {
      background: var(--white);
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
      margin-bottom: 1.5rem;
    }

    .status-badge {
      padding: 4px 12px;
      border-radius: 99px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    .status-pending { background: #fef3c7; color: #92400e; }
    .status-ready { background: #dcfce7; color: #166534; }

    button {
      padding: 12px 20px;
      border-radius: 8px;
      border: none;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    .btn-primary { background: var(--addu-blue); color: white; width: 100%; }
    .btn-primary:hover { opacity: 0.9; }

    input, select {
      width: 100%;
      padding: 12px;
      margin: 8px 0 16px 0;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      box-sizing: border-box;
    }

    /* Payment Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
  `;static properties={isLoggedIn:{type:Boolean},currentPage:{type:String},showPaymentModal:{type:Boolean}};constructor(){super(),this.isLoggedIn=!1,this.currentPage=`dashboard`,this.showPaymentModal=!1}render(){return this.isLoggedIn?H`
      <div class="app-container">
        <div class="sidebar">
          <div class="sidebar-brand">
            <img src="/knight.png" width="35" alt="Logo">
            <span>ALUMNI HUB</span>
          </div>
          
          <div class="nav-item ${this.currentPage===`dashboard`?`active`:``}" 
               @click=${()=>this.currentPage=`dashboard`}>🏠 Dashboard</div>
          <div class="nav-item ${this.currentPage===`profile`?`active`:``}" 
               @click=${()=>this.currentPage=`profile`}>👤 My Profile</div>
          <div class="nav-item ${this.currentPage===`request`?`active`:``}" 
               @click=${()=>this.currentPage=`request`}>📄 Request Document</div>
          <div class="nav-item ${this.currentPage===`log`?`active`:``}" 
               @click=${()=>this.currentPage=`log`}>📋 Document Log</div>
          
          <div style="margin-top: auto;" class="nav-item" @click=${()=>this.isLoggedIn=!1}>🚪 Sign Out</div>
        </div>

        <div class="main-content">
          <div class="header">
            <h1 style="font-size: 1.25rem; color: var(--addu-blue);">${this.getPageTitle()}</h1>
            <img src="/seal.png" width="40" alt="ADDU Seal">
          </div>

          ${this.renderCurrentPage()}
        </div>
      </div>

      ${this.showPaymentModal?this.renderPaymentModal():``}
    `:this.renderLogin()}renderLogin(){return H`
      <div class="login-overlay">
        <div class="login-card">
          <img src="/knight.png" class="brand-logo" alt="Blue Knight">
          <h2 style="color: var(--addu-blue);">Blue Knight Portal</h2>
          <p style="color: #64748b; font-size: 0.9rem;">Please sign in to access the Alumni Hub</p>
          
          <input type="text" placeholder="Student ID / Email">
          <input type="password" placeholder="Password">
          
          <button class="btn-primary" @click=${()=>this.isLoggedIn=!0}>Access Portal</button>
          <p style="margin-top: 1.5rem; font-size: 0.8rem; color: #94a3b8;">Ateneo de Davao University Alumni Association</p>
        </div>
      </div>
    `}renderCurrentPage(){switch(this.currentPage){case`dashboard`:return H`
          <div class="card">
            <h3>Welcome back, Knight!</h3>
            <p>Your current graduation status is <b>Verified</b>. You have 1 pending document request.</p>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="card">
              <h4 style="margin:0">Active Requests</h4>
              <p style="font-size: 2rem; font-weight: 800; color: var(--addu-blue);">1</p>
            </div>
            <div class="card">
              <h4 style="margin:0">Cleared Payments</h4>
              <p style="font-size: 2rem; font-weight: 800; color: #166534;">12</p>
            </div>
          </div>
        `;case`profile`:return H`
          <div class="card">
            <h3 style="margin-top:0">Update Profile Information</h3>
            <label>Full Name</label><input type="text" value="Andre Aranas" disabled>
            <label>Current Address</label><input type="text" placeholder="Enter current address">
            <label>Contact Number</label><input type="text" placeholder="+63 9XX XXX XXXX">
            <button class="btn-primary" style="width: auto;">Save Changes</button>
          </div>
        `;case`request`:return H`
          <div class="card">
            <h3 style="margin-top:0">New Document Request</h3>
            <label>Document Type</label>
            <select>
              <option>Official Transcript of Records (TOR)</option>
              <option>Diploma (Duplicate)</option>
              <option>Honorable Dismissal</option>
            </select>
            <label>Purpose</label>
            <input type="text" placeholder="e.g., Employment, Graduate Studies">
            <button class="btn-primary" @click=${()=>this.showPaymentModal=!0}>Proceed to Payment</button>
          </div>
        `;case`log`:return H`
          <div class="card" style="padding: 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="background: #f8fafc; border-bottom: 1px solid #e2e8f0; text-align: left;">
                  <th style="padding: 1rem;">Request ID</th>
                  <th style="padding: 1rem;">Document</th>
                  <th style="padding: 1rem;">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 1rem;">REQ-2026-001</td>
                  <td style="padding: 1rem;">Transcript of Records</td>
                  <td style="padding: 1rem;"><span class="status-badge status-pending">Processing</span></td>
                </tr>
                <tr>
                  <td style="padding: 1rem;">REQ-2025-089</td>
                  <td style="padding: 1rem;">Honorable Dismissal</td>
                  <td style="padding: 1rem;"><span class="status-badge status-ready">Ready for Pickup</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        `}}renderPaymentModal(){return H`
      <div class="modal-overlay">
        <div class="login-card" style="max-width: 350px;">
          <h3 style="color: var(--addu-blue);">Scan to Pay</h3>
          <p style="font-size: 0.8rem;">Amount Due: ₱150.00</p>
          <div style="background: #eee; width: 200px; height: 200px; margin: 1rem auto; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: #666; border: 2px dashed #ccc;">
            [QR CODE PLACEHOLDER]
          </div>
          <button class="btn-primary" @click=${()=>{this.showPaymentModal=!1,this.currentPage=`log`}}>Done / Verify</button>
          <button style="background:none; color: #64748b; margin-top: 10px;" @click=${()=>this.showPaymentModal=!1}>Cancel</button>
        </div>
      </div>
    `}getPageTitle(){return{dashboard:`Dashboard`,profile:`Personal Information`,request:`Document Request Flow`,log:`Document Tracking Log`}[this.currentPage]}};customElements.define(`alumni-hub`,fe);