/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Lc=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},ro={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,h=i>>2,l=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(p=64)),s.push(n[h],n[l],n[p],n[g])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(so(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Lc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const l=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||l==null)throw new Fc;const p=i<<2|a>>4;if(s.push(p),u!==64){const g=a<<4&240|u>>2;if(s.push(g),l!==64){const I=u<<6&192|l;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Fc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vc=function(e){const t=so(e);return ro.encodeByteArray(t,!0)},Tn=function(e){return Vc(e).replace(/\./g,"")},Pc=function(e){try{return ro.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=()=>Uc().__FIREBASE_DEFAULTS__,$c=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},qc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Pc(e[1]);return t&&JSON.parse(t)},io=()=>{try{return Bc()||$c()||qc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},jc=e=>{var t,n;return(n=(t=io())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Kc=e=>{const t=jc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Gc=()=>{var e;return(e=io())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Tn(JSON.stringify(n)),Tn(JSON.stringify(o)),a].join(".")}function Qc(){try{return typeof indexedDB=="object"}catch{return!1}}function Wc(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="FirebaseError";class ge extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Xc,Object.setPrototypeOf(this,ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oo.prototype.create)}}class oo{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Yc(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ge(r,a,s)}}function Yc(e,t){return e.replace(Jc,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Jc=/\{\$([^}]+)}/g;function _s(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(ni(i)&&ni(o)){if(!_s(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ni(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){return e&&e._delegate?e._delegate:e}class Oe{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Hc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(eu(t))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Mt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Mt){return this.instances.has(t)}getOptions(t=Mt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tu(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Mt){return this.component?this.component.multipleInstances?t:Mt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tu(e){return e===Mt?void 0:e}function eu(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Zc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(_||(_={}));const su={debug:_.DEBUG,verbose:_.VERBOSE,info:_.INFO,warn:_.WARN,error:_.ERROR,silent:_.SILENT},ru=_.INFO,iu={[_.DEBUG]:"log",[_.VERBOSE]:"log",[_.INFO]:"info",[_.WARN]:"warn",[_.ERROR]:"error"},ou=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=iu[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ao{constructor(t){this.name=t,this._logLevel=ru,this._logHandler=ou,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in _))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?su[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,_.DEBUG,...t),this._logHandler(this,_.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,_.VERBOSE,...t),this._logHandler(this,_.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,_.INFO,...t),this._logHandler(this,_.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,_.WARN,...t),this._logHandler(this,_.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,_.ERROR,...t),this._logHandler(this,_.ERROR,...t)}}const au=(e,t)=>t.some(n=>e instanceof n);let si,ri;function cu(){return si||(si=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uu(){return ri||(ri=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const co=new WeakMap,Ns=new WeakMap,uo=new WeakMap,ps=new WeakMap,sr=new WeakMap;function hu(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(St(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&co.set(n,e)}).catch(()=>{}),sr.set(t,e),t}function lu(e){if(Ns.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ns.set(e,t)}let ks={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ns.get(e);if(t==="objectStoreNames")return e.objectStoreNames||uo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function du(e){ks=e(ks)}function fu(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(gs(this),t,...n);return uo.set(s,t.sort?t.sort():[t]),St(s)}:uu().includes(e)?function(...t){return e.apply(gs(this),t),St(co.get(this))}:function(...t){return St(e.apply(gs(this),t))}}function pu(e){return typeof e=="function"?fu(e):(e instanceof IDBTransaction&&lu(e),au(e,cu())?new Proxy(e,ks):e)}function St(e){if(e instanceof IDBRequest)return hu(e);if(ps.has(e))return ps.get(e);const t=pu(e);return t!==e&&(ps.set(e,t),sr.set(t,e)),t}const gs=e=>sr.get(e);function gu(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=St(o);return s&&o.addEventListener("upgradeneeded",c=>{s(St(o.result),c.oldVersion,c.newVersion,St(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const mu=["get","getKey","getAll","getAllKeys","count"],yu=["put","add","delete","clear"],ms=new Map;function ii(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ms.get(t))return ms.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=yu.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||mu.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return ms.set(t,i),i}du(e=>({...e,get:(t,n,s)=>ii(t,n)||e.get(t,n,s),has:(t,n)=>!!ii(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wu(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function wu(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Rs="@firebase/app",oi="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new ao("@firebase/app"),Eu="@firebase/app-compat",Tu="@firebase/analytics-compat",Iu="@firebase/analytics",Su="@firebase/app-check-compat",Cu="@firebase/app-check",Au="@firebase/auth",Du="@firebase/auth-compat",bu="@firebase/database",_u="@firebase/database-compat",Nu="@firebase/functions",ku="@firebase/functions-compat",Ru="@firebase/installations",xu="@firebase/installations-compat",Ou="@firebase/messaging",Mu="@firebase/messaging-compat",Lu="@firebase/performance",Fu="@firebase/performance-compat",Vu="@firebase/remote-config",Pu="@firebase/remote-config-compat",Uu="@firebase/storage",Bu="@firebase/storage-compat",$u="@firebase/firestore",qu="@firebase/firestore-compat",ju="firebase",Ku="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="[DEFAULT]",Gu={[Rs]:"fire-core",[Eu]:"fire-core-compat",[Iu]:"fire-analytics",[Tu]:"fire-analytics-compat",[Cu]:"fire-app-check",[Su]:"fire-app-check-compat",[Au]:"fire-auth",[Du]:"fire-auth-compat",[bu]:"fire-rtdb",[_u]:"fire-rtdb-compat",[Nu]:"fire-fn",[ku]:"fire-fn-compat",[Ru]:"fire-iid",[xu]:"fire-iid-compat",[Ou]:"fire-fcm",[Mu]:"fire-fcm-compat",[Lu]:"fire-perf",[Fu]:"fire-perf-compat",[Vu]:"fire-rc",[Pu]:"fire-rc-compat",[Uu]:"fire-gcs",[Bu]:"fire-gcs-compat",[$u]:"fire-fst",[qu]:"fire-fst-compat","fire-js":"fire-js",[ju]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new Map,Os=new Map;function Hu(e,t){try{e.container.addComponent(t)}catch(n){Ht.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Sn(e){const t=e.name;if(Os.has(t))return Ht.debug(`There were multiple attempts to register component ${t}.`),!1;Os.set(t,e);for(const n of In.values())Hu(n,e);return!0}function zu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ct=new oo("app","Firebase",Qu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Oe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=Ku;function ho(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:xs,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Ct.create("bad-app-name",{appName:String(r)});if(n||(n=Gc()),!n)throw Ct.create("no-options");const i=In.get(r);if(i){if(_s(n,i.options)&&_s(s,i.config))return i;throw Ct.create("duplicate-app",{appName:r})}const o=new nu(r);for(const c of Os.values())o.addComponent(c);const a=new Wu(n,s,o);return In.set(r,a),a}function Yu(e=xs){const t=In.get(e);if(!t&&e===xs)return ho();if(!t)throw Ct.create("no-app",{appName:e});return t}function ne(e,t,n){var s;let r=(s=Gu[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ht.warn(a.join(" "));return}Sn(new Oe(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="firebase-heartbeat-database",Zu=1,Me="firebase-heartbeat-store";let ys=null;function lo(){return ys||(ys=gu(Ju,Zu,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Me)}}}).catch(e=>{throw Ct.create("idb-open",{originalErrorMessage:e.message})})),ys}async function th(e){try{return(await lo()).transaction(Me).objectStore(Me).get(fo(e))}catch(t){if(t instanceof ge)Ht.warn(t.message);else{const n=Ct.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ht.warn(n.message)}}}async function ai(e,t){try{const s=(await lo()).transaction(Me,"readwrite");return await s.objectStore(Me).put(t,fo(e)),s.done}catch(n){if(n instanceof ge)Ht.warn(n.message);else{const s=Ct.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ht.warn(s.message)}}}function fo(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=1024,nh=30*24*60*60*1e3;class sh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ih(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ci();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=nh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ci(),{heartbeatsToSend:n,unsentEntries:s}=rh(this._heartbeatsCache.heartbeats),r=Tn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ci(){return new Date().toISOString().substring(0,10)}function rh(e,t=eh){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ui(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ui(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ih{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qc()?Wc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await th(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ai(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ai(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function ui(e){return Tn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(e){Sn(new Oe("platform-logger",t=>new vu(t),"PRIVATE")),Sn(new Oe("heartbeat",t=>new sh(t),"PRIVATE")),ne(Rs,oi,e),ne(Rs,oi,"esm2017"),ne("fire-js","")}oh("");var ah="firebase",ch="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ne(ah,ch,"app");var uh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,rr=rr||{},T=uh||self;function Cn(){}function $n(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function He(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function hh(e){return Object.prototype.hasOwnProperty.call(e,vs)&&e[vs]||(e[vs]=++lh)}var vs="closure_uid_"+(1e9*Math.random()>>>0),lh=0;function dh(e,t,n){return e.call.apply(e.bind,arguments)}function fh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function X(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?X=dh:X=fh,X.apply(null,arguments)}function hn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function G(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function kt(){this.s=this.s,this.o=this.o}var ph=0;kt.prototype.s=!1;kt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),ph!=0)&&hh(this)};kt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const po=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ir(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function hi(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if($n(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function Y(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var gh=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",Cn,t),T.removeEventListener("test",Cn,t)}catch{}return e}();function An(e){return/^[\s\xa0]*$/.test(e)}var li=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ws(e,t){return e<t?-1:e>t?1:0}function qn(){var e=T.navigator;return e&&(e=e.userAgent)?e:""}function ut(e){return qn().indexOf(e)!=-1}function or(e){return or[" "](e),e}or[" "]=Cn;function mh(e){var t=wh;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var yh=ut("Opera"),ae=ut("Trident")||ut("MSIE"),go=ut("Edge"),Ms=go||ae,mo=ut("Gecko")&&!(qn().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge"))&&!(ut("Trident")||ut("MSIE"))&&!ut("Edge"),vh=qn().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge");function yo(){var e=T.document;return e?e.documentMode:void 0}var Dn;t:{var Es="",Ts=function(){var e=qn();if(mo)return/rv:([^\);]+)(\)|;)/.exec(e);if(go)return/Edge\/([\d\.]+)/.exec(e);if(ae)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(vh)return/WebKit\/(\S+)/.exec(e);if(yh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ts&&(Es=Ts?Ts[1]:""),ae){var Is=yo();if(Is!=null&&Is>parseFloat(Es)){Dn=String(Is);break t}}Dn=Es}var wh={};function Eh(){return mh(function(){let e=0;const t=li(String(Dn)).split("."),n=li("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=ws(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ws(r[2].length==0,i[2].length==0)||ws(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var Ls;if(T.document&&ae){var di=yo();Ls=di||parseInt(Dn,10)||void 0}else Ls=void 0;var Th=Ls;function Le(e,t){if(Y.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(mo){t:{try{or(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Ih[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Le.X.h.call(this)}}G(Le,Y);var Ih={2:"touch",3:"pen",4:"mouse"};Le.prototype.h=function(){Le.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),Sh=0;function Ch(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++Sh,this.ba=this.ea=!1}function jn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ar(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function vo(e){const t={};for(const n in e)t[n]=e[n];return t}const fi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wo(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<fi.length;i++)n=fi[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Kn(e){this.src=e,this.g={},this.h=0}Kn.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Vs(e,t,s,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Ch(t,this.src,i,!!s,r),t.ea=n,e.push(t)),t};function Fs(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=po(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(jn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Vs(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}var cr="closure_lm_"+(1e6*Math.random()|0),Ss={};function Eo(e,t,n,s,r){if(s&&s.once)return Io(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Eo(e,t[i],n,s,r);return null}return n=lr(n),e&&e[ze]?e.N(t,n,He(s)?!!s.capture:!!s,r):To(e,t,n,!1,s,r)}function To(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=He(r)?!!r.capture:!!r,a=hr(e);if(a||(e[cr]=a=new Kn(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=Ah(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)gh||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Co(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ah(){function e(n){return t.call(e.src,e.listener,n)}const t=Dh;return e}function Io(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Io(e,t[i],n,s,r);return null}return n=lr(n),e&&e[ze]?e.O(t,n,He(s)?!!s.capture:!!s,r):To(e,t,n,!0,s,r)}function So(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)So(e,t[i],n,s,r);else s=He(s)?!!s.capture:!!s,n=lr(n),e&&e[ze]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Vs(i,n,s,r),-1<n&&(jn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=hr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Vs(t,n,s,r)),(n=-1<e?t[e]:null)&&ur(n))}function ur(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[ze])Fs(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Co(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=hr(t))?(Fs(n,e),n.h==0&&(n.src=null,t[cr]=null)):jn(e)}}}function Co(e){return e in Ss?Ss[e]:Ss[e]="on"+e}function Dh(e,t){if(e.ba)e=!0;else{t=new Le(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&ur(e),e=n.call(s,t)}return e}function hr(e){return e=e[cr],e instanceof Kn?e:null}var Cs="__closure_events_fn_"+(1e9*Math.random()>>>0);function lr(e){return typeof e=="function"?e:(e[Cs]||(e[Cs]=function(t){return e.handleEvent(t)}),e[Cs])}function q(){kt.call(this),this.i=new Kn(this),this.P=this,this.I=null}G(q,kt);q.prototype[ze]=!0;q.prototype.removeEventListener=function(e,t,n,s){So(this,e,t,n,s)};function K(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Y(t,e);else if(t instanceof Y)t.target=t.target||e;else{var r=t;t=new Y(s,e),wo(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=ln(o,s,!0,t)&&r}if(o=t.g=e,r=ln(o,s,!0,t)&&r,r=ln(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=ln(o,s,!1,t)&&r}q.prototype.M=function(){if(q.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)jn(n[s]);delete e.g[t],e.h--}}this.I=null};q.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};q.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function ln(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Fs(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var dr=T.JSON.stringify;function bh(){var e=bo;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class _h{constructor(){this.h=this.g=null}add(t,n){const s=Ao.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ao=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Nh,e=>e.reset());class Nh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function kh(e){T.setTimeout(()=>{throw e},0)}function Do(e,t){Ps||Rh(),Us||(Ps(),Us=!0),bo.add(e,t)}var Ps;function Rh(){var e=T.Promise.resolve(void 0);Ps=function(){e.then(xh)}}var Us=!1,bo=new _h;function xh(){for(var e;e=bh();){try{e.h.call(e.g)}catch(n){kh(n)}var t=Ao;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Us=!1}function Gn(e,t){q.call(this),this.h=e||1,this.g=t||T,this.j=X(this.lb,this),this.l=Date.now()}G(Gn,q);y=Gn.prototype;y.ca=!1;y.R=null;y.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),K(this,"tick"),this.ca&&(fr(this),this.start()))}};y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fr(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}y.M=function(){Gn.X.M.call(this),fr(this),delete this.g};function pr(e,t,n){if(typeof e=="function")n&&(e=X(e,n));else if(e&&typeof e.handleEvent=="function")e=X(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function _o(e){e.g=pr(()=>{e.g=null,e.i&&(e.i=!1,_o(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Oh extends kt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:_o(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fe(e){kt.call(this),this.h=e,this.g={}}G(Fe,kt);var pi=[];function No(e,t,n,s){Array.isArray(n)||(n&&(pi[0]=n.toString()),n=pi);for(var r=0;r<n.length;r++){var i=Eo(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function ko(e){ar(e.g,function(t,n){this.g.hasOwnProperty(n)&&ur(t)},e),e.g={}}Fe.prototype.M=function(){Fe.X.M.call(this),ko(this)};Fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Hn(){this.g=!0}Hn.prototype.Aa=function(){this.g=!1};function Mh(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function Lh(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function ee(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Vh(e,n)+(s?" "+s:"")})}function Fh(e,t){e.info(function(){return"TIMEOUT: "+t})}Hn.prototype.info=function(){};function Vh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return dr(n)}catch{return t}}var Wt={},gi=null;function zn(){return gi=gi||new q}Wt.Pa="serverreachability";function Ro(e){Y.call(this,Wt.Pa,e)}G(Ro,Y);function Ve(e){const t=zn();K(t,new Ro(t))}Wt.STAT_EVENT="statevent";function xo(e,t){Y.call(this,Wt.STAT_EVENT,e),this.stat=t}G(xo,Y);function Z(e){const t=zn();K(t,new xo(t,e))}Wt.Qa="timingevent";function Oo(e,t){Y.call(this,Wt.Qa,e),this.size=t}G(Oo,Y);function Qe(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var Qn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Mo={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function gr(){}gr.prototype.h=null;function mi(e){return e.h||(e.h=e.i())}function Lo(){}var We={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function mr(){Y.call(this,"d")}G(mr,Y);function yr(){Y.call(this,"c")}G(yr,Y);var Bs;function Wn(){}G(Wn,gr);Wn.prototype.g=function(){return new XMLHttpRequest};Wn.prototype.i=function(){return{}};Bs=new Wn;function Xe(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new Fe(this),this.O=Ph,e=Ms?125:void 0,this.T=new Gn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Fo}function Fo(){this.i=null,this.g="",this.h=!1}var Ph=45e3,$s={},bn={};y=Xe.prototype;y.setTimeout=function(e){this.O=e};function qs(e,t,n){e.K=1,e.v=Yn(pt(t)),e.s=n,e.P=!0,Vo(e,null)}function Vo(e,t){e.F=Date.now(),Ye(e),e.A=pt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Go(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Fo,e.g=da(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Oh(X(e.La,e,e.g),e.N)),No(e.S,e.g,"readystatechange",e.ib),t=e.H?vo(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Ve(),Mh(e.j,e.u,e.A,e.m,e.U,e.s)}y.ib=function(e){e=e.target;const t=this.L;t&&dt(e)==3?t.l():this.La(e)};y.La=function(e){try{if(e==this.g)t:{const h=dt(this.g);var t=this.g.Ea();const l=this.g.aa();if(!(3>h)&&(h!=3||Ms||this.g&&(this.h.h||this.g.fa()||Ei(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?Ve(3):Ve(2)),Xn(this);var n=this.g.aa();this.Y=n;e:if(Po(this)){var s=Ei(this.g);e="";var r=s.length,i=dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lt(this),_e(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Lh(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!An(a)){var u=a;break e}}u=null}if(n=u)ee(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,js(this,n);else{this.i=!1,this.o=3,Z(12),Lt(this),_e(this);break t}}this.P?(Uo(this,h,o),Ms&&this.i&&h==3&&(No(this.S,this.T,"tick",this.hb),this.T.start())):(ee(this.j,this.m,o,null),js(this,o)),h==4&&Lt(this),this.i&&!this.I&&(h==4?ca(this.l,this):(this.i=!1,Ye(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Z(12)):(this.o=0,Z(13)),Lt(this),_e(this)}}}catch{}finally{}};function Po(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Uo(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=Uh(e,n),r==bn){t==4&&(e.o=4,Z(14),s=!1),ee(e.j,e.m,null,"[Incomplete Response]");break}else if(r==$s){e.o=4,Z(15),ee(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else ee(e.j,e.m,r,null),js(e,r);Po(e)&&r!=bn&&r!=$s&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Z(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Cr(t),t.K=!0,Z(11))):(ee(e.j,e.m,n,"[Invalid Chunked Response]"),Lt(e),_e(e))}y.hb=function(){if(this.g){var e=dt(this.g),t=this.g.fa();this.C<t.length&&(Xn(this),Uo(this,e,t),this.i&&e!=4&&Ye(this))}};function Uh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?bn:(n=Number(t.substring(n,s)),isNaN(n)?$s:(s+=1,s+n>t.length?bn:(t=t.substr(s,n),e.C=s+n,t)))}y.cancel=function(){this.I=!0,Lt(this)};function Ye(e){e.V=Date.now()+e.O,Bo(e,e.O)}function Bo(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Qe(X(e.gb,e),t)}function Xn(e){e.B&&(T.clearTimeout(e.B),e.B=null)}y.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Fh(this.j,this.A),this.K!=2&&(Ve(),Z(17)),Lt(this),this.o=2,_e(this)):Bo(this,this.V-e)};function _e(e){e.l.G==0||e.I||ca(e.l,e)}function Lt(e){Xn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,fr(e.T),ko(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function js(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Ks(n.h,e))){if(!e.J&&Ks(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)kn(n),ts(n);else break t;Sr(n),Z(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Qe(X(n.cb,n),6e3));if(1>=Qo(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ft(n,11)}else if((e.J||n.g==e)&&kn(n),!An(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const h=u[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const l=u[4];l!=null&&(n.Ca=l,n.j.info("SVER="+n.Ca));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=e.g;if(g){const I=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var i=s.h;i.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(vr(i,i.h),i.h=null))}if(s.D){const D=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(s.za=D,O(s.F,s.D,D))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=la(s,s.H?s.ka:null,s.V),o.J){Wo(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Xn(a),Ye(a)),s.g=o}else oa(s);0<n.i.length&&es(n)}else u[0]!="stop"&&u[0]!="close"||Ft(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ft(n,7):Ir(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ve(4)}catch{}}function Bh(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if($n(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function $h(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if($n(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function $o(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if($n(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=$h(e),s=Bh(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var qo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Kt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Kt){this.h=t!==void 0?t:e.h,_n(this,e.j),this.s=e.s,this.g=e.g,Nn(this,e.m),this.l=e.l,t=e.i;var n=new Pe;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),yi(this,n),this.o=e.o}else e&&(n=String(e).match(qo))?(this.h=!!t,_n(this,n[1]||"",!0),this.s=Ce(n[2]||""),this.g=Ce(n[3]||"",!0),Nn(this,n[4]),this.l=Ce(n[5]||"",!0),yi(this,n[6]||"",!0),this.o=Ce(n[7]||"")):(this.h=!!t,this.i=new Pe(null,this.h))}Kt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ae(t,vi,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ae(t,vi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ae(n,n.charAt(0)=="/"?Gh:Kh,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ae(n,zh)),e.join("")};function pt(e){return new Kt(e)}function _n(e,t,n){e.j=n?Ce(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Nn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function yi(e,t,n){t instanceof Pe?(e.i=t,Qh(e.i,e.h)):(n||(t=Ae(t,Hh)),e.i=new Pe(t,e.h))}function O(e,t,n){e.i.set(t,n)}function Yn(e){return O(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ce(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ae(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,jh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function jh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var vi=/[#\/\?@]/g,Kh=/[#\?:]/g,Gh=/[#\?]/g,Hh=/[#\?@]/g,zh=/#/g;function Pe(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Rt(e){e.g||(e.g=new Map,e.h=0,e.i&&qh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}y=Pe.prototype;y.add=function(e,t){Rt(this),this.i=null,e=me(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function jo(e,t){Rt(e),t=me(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ko(e,t){return Rt(e),t=me(e,t),e.g.has(t)}y.forEach=function(e,t){Rt(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};y.oa=function(){Rt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};y.W=function(e){Rt(this);let t=[];if(typeof e=="string")Ko(this,e)&&(t=t.concat(this.g.get(me(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};y.set=function(e,t){return Rt(this),this.i=null,e=me(this,e),Ko(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};y.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Go(e,t,n){jo(e,t),0<n.length&&(e.i=null,e.g.set(me(e,t),ir(n)),e.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function me(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Qh(e,t){t&&!e.j&&(Rt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(jo(this,s),Go(this,r,n))},e)),e.j=t}var Wh=class{constructor(t,n){this.h=t,this.g=n}};function Ho(e){this.l=e||Xh,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ga&&T.g.Ga()&&T.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Xh=10;function zo(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Qo(e){return e.h?1:e.g?e.g.size:0}function Ks(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function vr(e,t){e.g?e.g.add(t):e.h=t}function Wo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ho.prototype.cancel=function(){if(this.i=Xo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Xo(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ir(e.i)}function wr(){}wr.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};wr.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function Yh(){this.g=new wr}function Jh(e,t,n){const s=n||"";try{$o(e,function(r,i){let o=r;He(r)&&(o=dr(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function Zh(e,t){const n=new Hn;if(T.Image){const s=new Image;s.onload=hn(dn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=hn(dn,n,s,"TestLoadImage: error",!1,t),s.onabort=hn(dn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=hn(dn,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function dn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function Je(e){this.l=e.ac||null,this.j=e.jb||!1}G(Je,gr);Je.prototype.g=function(){return new Jn(this.l,this.j)};Je.prototype.i=function(e){return function(){return e}}({});function Jn(e,t){q.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Er,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G(Jn,q);var Er=0;y=Jn.prototype;y.open=function(e,t){if(this.readyState!=Er)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ue(this)};y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ze(this)),this.readyState=Er};y.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ue(this)),this.g&&(this.readyState=3,Ue(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof T.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yo(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Yo(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}y.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ze(this):Ue(this),this.readyState==3&&Yo(this)}};y.Va=function(e){this.g&&(this.response=this.responseText=e,Ze(this))};y.Ua=function(e){this.g&&(this.response=e,Ze(this))};y.ga=function(){this.g&&Ze(this)};function Ze(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ue(e)}y.setRequestHeader=function(e,t){this.v.append(e,t)};y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ue(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Jn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var tl=T.JSON.parse;function M(e){q.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Jo,this.K=this.L=!1}G(M,q);var Jo="",el=/^https?$/i,nl=["POST","PUT"];y=M.prototype;y.Ka=function(e){this.L=e};y.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Bs.g(),this.C=this.u?mi(this.u):mi(Bs),this.g.onreadystatechange=X(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){wi(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=T.FormData&&e instanceof T.FormData,!(0<=po(nl,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ea(this),0<this.B&&((this.K=sl(this.g))?(this.g.timeout=this.B,this.g.ontimeout=X(this.qa,this)):this.A=pr(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){wi(this,i)}};function sl(e){return ae&&Eh()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}y.qa=function(){typeof rr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,K(this,"timeout"),this.abort(8))};function wi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Zo(e),Zn(e)}function Zo(e){e.D||(e.D=!0,K(e,"complete"),K(e,"error"))}y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,K(this,"complete"),K(this,"abort"),Zn(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Zn(this,!0)),M.X.M.call(this)};y.Ha=function(){this.s||(this.F||this.v||this.l?ta(this):this.fb())};y.fb=function(){ta(this)};function ta(e){if(e.h&&typeof rr<"u"&&(!e.C[1]||dt(e)!=4||e.aa()!=2)){if(e.v&&dt(e)==4)pr(e.Ha,0,e);else if(K(e,"readystatechange"),dt(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(qo)[1]||null;if(!r&&T.self&&T.self.location){var i=T.self.location.protocol;r=i.substr(0,i.length-1)}s=!el.test(r?r.toLowerCase():"")}n=s}if(n)K(e,"complete"),K(e,"success");else{e.m=6;try{var o=2<dt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Zo(e)}}finally{Zn(e)}}}}function Zn(e,t){if(e.g){ea(e);const n=e.g,s=e.C[0]?Cn:null;e.g=null,e.C=null,t||K(e,"ready");try{n.onreadystatechange=s}catch{}}}function ea(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function dt(e){return e.g?e.g.readyState:0}y.aa=function(){try{return 2<dt(this)?this.g.status:-1}catch{return-1}};y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),tl(t)}};function Ei(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Jo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}y.Ea=function(){return this.m};y.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function na(e){let t="";return ar(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Tr(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=na(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):O(e,t,n))}function Se(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function sa(e){this.Ca=0,this.i=[],this.j=new Hn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Se("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Se("baseRetryDelayMs",5e3,e),this.bb=Se("retryDelaySeedMs",1e4,e),this.$a=Se("forwardChannelMaxRetries",2,e),this.ta=Se("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Ho(e&&e.concurrentRequestLimit),this.Fa=new Yh,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}y=sa.prototype;y.ma=8;y.G=1;function Ir(e){if(ra(e),e.G==3){var t=e.U++,n=pt(e.F);O(n,"SID",e.I),O(n,"RID",t),O(n,"TYPE","terminate"),tn(e,n),t=new Xe(e,e.j,t,void 0),t.K=2,t.v=Yn(pt(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=da(t.l,null),t.g.da(t.v)),t.F=Date.now(),Ye(t)}ha(e)}function ts(e){e.g&&(Cr(e),e.g.cancel(),e.g=null)}function ra(e){ts(e),e.u&&(T.clearTimeout(e.u),e.u=null),kn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function es(e){zo(e.h)||e.m||(e.m=!0,Do(e.Ja,e),e.C=0)}function rl(e,t){return Qo(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Qe(X(e.Ja,e,t),ua(e,e.C)),e.C++,!0)}y.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new Xe(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=vo(i),wo(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=ia(this,r,t),n=pt(this.F),O(n,"RID",e),O(n,"CVER",22),this.D&&O(n,"X-HTTP-Session-Id",this.D),tn(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(na(i)))+"&"+t:this.o&&Tr(n,this.o,i)),vr(this.h,r),this.Ya&&O(n,"TYPE","init"),this.O?(O(n,"$req",t),O(n,"SID","null"),r.Z=!0,qs(r,n,null)):qs(r,n,t),this.G=2}}else this.G==3&&(e?Ti(this,e):this.i.length==0||zo(this.h)||Ti(this))};function Ti(e,t){var n;t?n=t.m:n=e.U++;const s=pt(e.F);O(s,"SID",e.I),O(s,"RID",n),O(s,"AID",e.T),tn(e,s),e.o&&e.s&&Tr(s,e.o,e.s),n=new Xe(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=ia(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),vr(e.h,n),qs(n,s,t)}function tn(e,t){e.ia&&ar(e.ia,function(n,s){O(t,s,n)}),e.l&&$o({},function(n,s){O(t,s,n)})}function ia(e,t,n){n=Math.min(e.i.length,n);var s=e.l?X(e.l.Ra,e.l,e):null;t:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const h=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{Jh(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function oa(e){e.g||e.u||(e.Z=1,Do(e.Ia,e),e.A=0)}function Sr(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Qe(X(e.Ia,e),ua(e,e.A)),e.A++,!0)}y.Ia=function(){if(this.u=null,aa(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Qe(X(this.eb,this),e)}};y.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Z(10),ts(this),aa(this))};function Cr(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function aa(e){e.g=new Xe(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=pt(e.sa);O(t,"RID","rpc"),O(t,"SID",e.I),O(t,"CI",e.L?"0":"1"),O(t,"AID",e.T),O(t,"TYPE","xmlhttp"),tn(e,t),e.o&&e.s&&Tr(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Yn(pt(t)),n.s=null,n.P=!0,Vo(n,e)}y.cb=function(){this.v!=null&&(this.v=null,ts(this),Sr(this),Z(19))};function kn(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function ca(e,t){var n=null;if(e.g==t){kn(e),Cr(e),e.g=null;var s=2}else if(Ks(e.h,t))n=t.D,Wo(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=zn(),K(s,new Oo(s,n)),es(e)}else oa(e);else if(r=t.o,r==3||r==0&&0<e.pa||!(s==1&&rl(e,t)||s==2&&Sr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:Ft(e,5);break;case 4:Ft(e,10);break;case 3:Ft(e,6);break;default:Ft(e,2)}}}function ua(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Ft(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=X(e.kb,e);n||(n=new Kt("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||_n(n,"https"),Yn(n)),Zh(n.toString(),s)}else Z(2);e.G=0,e.l&&e.l.va(t),ha(e),ra(e)}y.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Z(2)):(this.j.info("Failed to ping google.com"),Z(1))};function ha(e){if(e.G=0,e.la=[],e.l){const t=Xo(e.h);(t.length!=0||e.i.length!=0)&&(hi(e.la,t),hi(e.la,e.i),e.h.i.length=0,ir(e.i),e.i.length=0),e.l.ua()}}function la(e,t,n){var s=n instanceof Kt?pt(n):new Kt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),Nn(s,s.m);else{var r=T.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new Kt(null,void 0);s&&_n(i,s),t&&(i.g=t),r&&Nn(i,r),n&&(i.l=n),s=i}return n=e.D,t=e.za,n&&t&&O(s,n,t),O(s,"VER",e.ma),tn(e,s),s}function da(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new M(new Je({jb:!0})):new M(e.ra),t.Ka(e.H),t}function fa(){}y=fa.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Ra=function(){};function Rn(){if(ae&&!(10<=Number(Th)))throw Error("Environmental error: no available transport.")}Rn.prototype.g=function(e,t){return new st(e,t)};function st(e,t){q.call(this),this.g=new sa(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!An(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!An(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ye(this)}G(st,q);st.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Z(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=la(e,null,e.V),es(e)};st.prototype.close=function(){Ir(this.g)};st.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=dr(e),e=n);t.i.push(new Wh(t.ab++,e)),t.G==3&&es(t)};st.prototype.M=function(){this.g.l=null,delete this.j,Ir(this.g),delete this.g,st.X.M.call(this)};function pa(e){mr.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}G(pa,mr);function ga(){yr.call(this),this.status=1}G(ga,yr);function ye(e){this.g=e}G(ye,fa);ye.prototype.xa=function(){K(this.g,"a")};ye.prototype.wa=function(e){K(this.g,new pa(e))};ye.prototype.va=function(e){K(this.g,new ga)};ye.prototype.ua=function(){K(this.g,"b")};Rn.prototype.createWebChannel=Rn.prototype.g;st.prototype.send=st.prototype.u;st.prototype.open=st.prototype.m;st.prototype.close=st.prototype.close;Qn.NO_ERROR=0;Qn.TIMEOUT=8;Qn.HTTP_ERROR=6;Mo.COMPLETE="complete";Lo.EventType=We;We.OPEN="a";We.CLOSE="b";We.ERROR="c";We.MESSAGE="d";q.prototype.listen=q.prototype.N;M.prototype.listenOnce=M.prototype.O;M.prototype.getLastError=M.prototype.Oa;M.prototype.getLastErrorCode=M.prototype.Ea;M.prototype.getStatus=M.prototype.aa;M.prototype.getResponseJson=M.prototype.Sa;M.prototype.getResponseText=M.prototype.fa;M.prototype.send=M.prototype.da;M.prototype.setWithCredentials=M.prototype.Ka;var il=function(){return new Rn},ol=function(){return zn()},As=Qn,al=Mo,cl=Wt,Ii={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ul=Je,fn=Lo,hl=M;const Si="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}z.UNAUTHENTICATED=new z(null),z.GOOGLE_CREDENTIALS=new z("google-credentials-uid"),z.FIRST_PARTY=new z("first-party-uid"),z.MOCK_USER=new z("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ve="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new ao("@firebase/firestore");function Ci(){return zt.logLevel}function v(e,...t){if(zt.logLevel<=_.DEBUG){const n=t.map(Ar);zt.debug(`Firestore (${ve}): ${e}`,...n)}}function gt(e,...t){if(zt.logLevel<=_.ERROR){const n=t.map(Ar);zt.error(`Firestore (${ve}): ${e}`,...n)}}function Gs(e,...t){if(zt.logLevel<=_.WARN){const n=t.map(Ar);zt.warn(`Firestore (${ve}): ${e}`,...n)}}function Ar(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e="Unexpected state"){const t=`FIRESTORE (${ve}) INTERNAL ASSERTION FAILED: `+e;throw gt(t),new Error(t)}function k(e,t){e||E()}function C(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class m extends ge{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ll{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(z.UNAUTHENTICATED))}shutdown(){}}class dl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fl{constructor(t){this.t=t,this.currentUser=z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new At;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new At,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new At)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(k(typeof s.accessToken=="string"),new ma(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return k(t===null||typeof t=="string"),new z(t)}}class pl{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=z.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(k(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class gl{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new pl(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ml{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yl{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=i=>{i.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(k(typeof n.token=="string"),this.A=n.token,new ml(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=vl(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function N(e,t){return e<t?-1:e>t?1:0}function ce(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new m(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new m(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new m(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new m(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new P(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?N(this.nanoseconds,t.nanoseconds):N(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.timestamp=t}static fromTimestamp(t){return new S(t)}static min(){return new S(new P(0,0))}static max(){return new S(new P(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,n,s){n===void 0?n=0:n>t.length&&E(),s===void 0?s=t.length-n:s>t.length-n&&E(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Be.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Be?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class x extends Be{construct(t,n,s){return new x(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new m(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new x(n)}static emptyPath(){return new x([])}}const wl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends Be{construct(t,n,s){return new W(t,n,s)}static isValidIdentifier(t){return wl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new W(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new m(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new m(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new m(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new m(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new W(n)}static emptyPath(){return new W([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(x.fromString(t))}static fromName(t){return new w(x.fromString(t).popFirst(5))}static empty(){return new w(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&x.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return x.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new x(t.slice()))}}function El(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=S.fromTimestamp(s===1e9?new P(n+1,0):new P(n,s));return new bt(r,w.empty(),t)}function Tl(e){return new bt(e.readTime,e.key,-1)}class bt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new bt(S.min(),w.empty(),-1)}static max(){return new bt(S.max(),w.empty(),-1)}}function Il(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:N(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Sl)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,s)=>{n(t)})}static reject(t){return new f((n,s)=>{s(t)})}static waitFor(t){return new f((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=f.resolve(!1);for(const s of t)n=n.next(r=>r?f.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new f((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(t,n){return new f((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function nn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}Dr.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class $e{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new $e("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof $e&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function we(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function va(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(e){return e==null}function xn(e){return e===0&&1/e==-1/0}function Dl(e){return typeof e=="number"&&Number.isInteger(e)&&!xn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new bl("Invalid base64 string: "+r):r}}(t);return new J(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new J(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return N(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}J.EMPTY_BYTE_STRING=new J("");const _l=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _t(e){if(k(!!e),typeof e=="string"){let t=0;const n=_l.exec(e);if(k(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:F(e.seconds),nanos:F(e.nanos)}}function F(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ue(e){return typeof e=="string"?J.fromBase64String(e):J.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ea(e){const t=e.mapValue.fields.__previous_value__;return wa(t)?Ea(t):t}function qe(e){const t=_t(e.mapValue.fields.__local_write_time__.timestampValue);return new P(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?wa(e)?4:Nl(e)?9007199254740991:10:E()}function lt(e,t){if(e===t)return!0;const n=Qt(e);if(n!==Qt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return qe(e).isEqual(qe(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=_t(s.timestampValue),o=_t(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return ue(s.bytesValue).isEqual(ue(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return F(s.geoPointValue.latitude)===F(r.geoPointValue.latitude)&&F(s.geoPointValue.longitude)===F(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return F(s.integerValue)===F(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=F(s.doubleValue),o=F(r.doubleValue);return i===o?xn(i)===xn(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return ce(e.arrayValue.values||[],t.arrayValue.values||[],lt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Ai(i)!==Ai(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!lt(i[a],o[a])))return!1;return!0}(e,t);default:return E()}}function je(e,t){return(e.values||[]).find(n=>lt(n,t))!==void 0}function he(e,t){if(e===t)return 0;const n=Qt(e),s=Qt(t);if(n!==s)return N(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=F(r.integerValue||r.doubleValue),a=F(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Di(e.timestampValue,t.timestampValue);case 4:return Di(qe(e),qe(t));case 5:return N(e.stringValue,t.stringValue);case 6:return function(r,i){const o=ue(r),a=ue(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=N(o[c],a[c]);if(u!==0)return u}return N(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=N(F(r.latitude),F(i.latitude));return o!==0?o:N(F(r.longitude),F(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=he(o[c],a[c]);if(u)return u}return N(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===pn.mapValue&&i===pn.mapValue)return 0;if(r===pn.mapValue)return 1;if(i===pn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=N(a[h],u[h]);if(l!==0)return l;const p=he(o[a[h]],c[u[h]]);if(p!==0)return p}return N(a.length,u.length)}(e.mapValue,t.mapValue);default:throw E()}}function Di(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return N(e,t);const n=_t(e),s=_t(t),r=N(n.seconds,s.seconds);return r!==0?r:N(n.nanos,s.nanos)}function le(e){return Hs(e)}function Hs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=_t(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ue(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Hs(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Hs(s.fields[a])}`;return i+"}"}(e.mapValue):E();var t,n}function bi(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function zs(e){return!!e&&"integerValue"in e}function br(e){return!!e&&"arrayValue"in e}function _i(e){return!!e&&"nullValue"in e}function Ni(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function yn(e){return!!e&&"mapValue"in e}function Ne(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return we(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Ne(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ne(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Nl(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t,n){this.position=t,this.inclusive=n}}function ki(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=he(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ri(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!lt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{}class V extends Ta{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Rl(t,n,s):n==="array-contains"?new Ml(t,s):n==="in"?new Ll(t,s):n==="not-in"?new Fl(t,s):n==="array-contains-any"?new Vl(t,s):new V(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new xl(t,s):new Ol(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(he(n,this.value)):n!==null&&Qt(this.value)===Qt(n)&&this.matchesComparison(he(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return E()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class at extends Ta{constructor(t,n){super(),this.filters=t,this.op=n,this.ft=null}static create(t,n){return new at(t,n)}matches(t){return Ia(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.dt(n=>n.isInequality());return t!==null?t.field:null}dt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Ia(e){return e.op==="and"}function Sa(e){return kl(e)&&Ia(e)}function kl(e){for(const t of e.filters)if(t instanceof at)return!1;return!0}function Qs(e){if(e instanceof V)return e.field.canonicalString()+e.op.toString()+le(e.value);if(Sa(e))return e.filters.map(t=>Qs(t)).join(",");{const t=e.filters.map(n=>Qs(n)).join(",");return`${e.op}(${t})`}}function Ca(e,t){return e instanceof V?function(n,s){return s instanceof V&&n.op===s.op&&n.field.isEqual(s.field)&&lt(n.value,s.value)}(e,t):e instanceof at?function(n,s){return s instanceof at&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Ca(i,s.filters[o]),!0):!1}(e,t):void E()}function Aa(e){return e instanceof V?function(t){return`${t.field.canonicalString()} ${t.op} ${le(t.value)}`}(e):e instanceof at?function(t){return t.op.toString()+" {"+t.getFilters().map(Aa).join(" ,")+"}"}(e):"Filter"}class Rl extends V{constructor(t,n,s){super(t,n,s),this.key=w.fromName(s.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.matchesComparison(n)}}class xl extends V{constructor(t,n){super(t,"in",n),this.keys=Da("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Ol extends V{constructor(t,n){super(t,"not-in",n),this.keys=Da("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Da(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class Ml extends V{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return br(n)&&je(n.arrayValue,this.value)}}class Ll extends V{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&je(this.value.arrayValue,n)}}class Fl extends V{constructor(t,n){super(t,"not-in",n)}matches(t){if(je(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!je(this.value.arrayValue,n)}}class Vl extends V{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!br(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>je(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,n="asc"){this.field=t,this.dir=n}}function Pl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t,n){this.comparator=t,this.root=n||j.EMPTY}insert(t,n){return new B(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,j.BLACK,null,null))}remove(t){return new B(this.comparator,this.root.remove(t,this.comparator).copy(null,null,j.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new gn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new gn(this.root,t,this.comparator,!1)}getReverseIterator(){return new gn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new gn(this.root,t,this.comparator,!0)}}class gn{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class j{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??j.RED,this.left=r??j.EMPTY,this.right=i??j.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new j(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return j.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return j.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,j.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,j.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();const t=this.left.check();if(t!==this.right.check())throw E();return t+(this.isRed()?0:1)}}j.EMPTY=null,j.RED=!0,j.BLACK=!1;j.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(e,t,n,s,r){return this}insert(e,t,n){return new j(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.comparator=t,this.data=new B(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new xi(this.data.getIterator())}getIteratorFrom(t){return new xi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof U)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new U(this.comparator);return n.data=t,n}}class xi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.fields=t,t.sort(W.comparator)}static empty(){return new ot([])}unionWith(t){let n=new U(W.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new ot(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ce(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.value=t}static empty(){return new rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!yn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ne(n)}setAll(t){let n=W.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ne(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());yn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return lt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];yn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){we(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new rt(Ne(this.value))}}function ba(e){const t=[];return we(e.fields,(n,s)=>{const r=new W([n]);if(yn(s)){const i=ba(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new ot(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Q(t,0,S.min(),S.min(),S.min(),rt.empty(),0)}static newFoundDocument(t,n,s,r){return new Q(t,1,n,S.min(),s,r,0)}static newNoDocument(t,n){return new Q(t,2,n,S.min(),S.min(),rt.empty(),0)}static newUnknownDocument(t,n){return new Q(t,3,n,S.min(),S.min(),rt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Q&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Q(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function Oi(e,t=null,n=[],s=[],r=null,i=null,o=null){return new Ul(e,t,n,s,r,i,o)}function _r(e){const t=C(e);if(t._t===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Qs(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ns(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>le(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>le(s)).join(",")),t._t=n}return t._t}function Nr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Pl(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ca(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ri(e.startAt,t.startAt)&&Ri(e.endAt,t.endAt)}function Ws(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Bl(e,t,n,s,r,i,o,a){return new Ee(e,t,n,s,r,i,o,a)}function _a(e){return new Ee(e)}function Mi(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function kr(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ss(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Na(e){return e.collectionGroup!==null}function re(e){const t=C(e);if(t.wt===null){t.wt=[];const n=ss(t),s=kr(t);if(n!==null&&s===null)n.isKeyField()||t.wt.push(new se(n)),t.wt.push(new se(W.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new se(W.keyField(),i))}}}return t.wt}function mt(e){const t=C(e);if(!t.gt)if(t.limitType==="F")t.gt=Oi(t.path,t.collectionGroup,re(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of re(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new se(i.field,o))}const s=t.endAt?new On(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new On(t.startAt.position,t.startAt.inclusive):null;t.gt=Oi(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.gt}function Xs(e,t){t.getFirstInequalityField(),ss(e);const n=e.filters.concat([t]);return new Ee(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Mn(e,t,n){return new Ee(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function rs(e,t){return Nr(mt(e),mt(t))&&e.limitType===t.limitType}function ka(e){return`${_r(mt(e))}|lt:${e.limitType}`}function Ys(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Aa(s)).join(", ")}]`),ns(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>le(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>le(s)).join(",")),`Target(${n})`}(mt(e))}; limitType=${e.limitType})`}function is(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):w.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of re(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=ki(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,re(n),s)||n.endAt&&!function(r,i,o){const a=ki(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,re(n),s))}(e,t)}function $l(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ra(e){return(t,n)=>{let s=!1;for(const r of re(e)){const i=ql(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function ql(e,t,n){const s=e.field.isKeyField()?w.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?he(a,c):E()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return E()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(e,t){if(e.yt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xn(t)?"-0":t}}function Oa(e){return{integerValue:""+e}}function jl(e,t){return Dl(t)?Oa(t):xa(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this._=void 0}}function Kl(e,t,n){return e instanceof Ln?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Ke?La(e,t):e instanceof Ge?Fa(e,t):function(s,r){const i=Ma(s,r),o=Li(i)+Li(s.It);return zs(i)&&zs(s.It)?Oa(o):xa(s.Tt,o)}(e,t)}function Gl(e,t,n){return e instanceof Ke?La(e,t):e instanceof Ge?Fa(e,t):n}function Ma(e,t){return e instanceof Fn?zs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Ln extends os{}class Ke extends os{constructor(t){super(),this.elements=t}}function La(e,t){const n=Va(t);for(const s of e.elements)n.some(r=>lt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ge extends os{constructor(t){super(),this.elements=t}}function Fa(e,t){let n=Va(t);for(const s of e.elements)n=n.filter(r=>!lt(r,s));return{arrayValue:{values:n}}}class Fn extends os{constructor(t,n){super(),this.Tt=t,this.It=n}}function Li(e){return F(e.integerValue||e.doubleValue)}function Va(e){return br(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Hl(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Ke&&s instanceof Ke||n instanceof Ge&&s instanceof Ge?ce(n.elements,s.elements,lt):n instanceof Fn&&s instanceof Fn?lt(n.It,s.It):n instanceof Ln&&s instanceof Ln}(e.transform,t.transform)}class zl{constructor(t,n){this.version=t,this.transformResults=n}}class ft{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ft}static exists(t){return new ft(void 0,t)}static updateTime(t){return new ft(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function vn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class as{}function Pa(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ba(e.key,ft.none()):new sn(e.key,e.data,ft.none());{const n=e.data,s=rt.empty();let r=new U(W.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Xt(e.key,s,new ot(r.toArray()),ft.none())}}function Ql(e,t,n){e instanceof sn?function(s,r,i){const o=s.value.clone(),a=Vi(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Xt?function(s,r,i){if(!vn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Vi(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Ua(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function ke(e,t,n,s){return e instanceof sn?function(r,i,o,a){if(!vn(r.precondition,i))return o;const c=r.value.clone(),u=Pi(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Xt?function(r,i,o,a){if(!vn(r.precondition,i))return o;const c=Pi(r.fieldTransforms,a,i),u=i.data;return u.setAll(Ua(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(r,i,o){return vn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function Wl(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=Ma(s.transform,r||null);i!=null&&(n===null&&(n=rt.empty()),n.set(s.field,i))}return n||null}function Fi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ce(n,s,(r,i)=>Hl(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class sn extends as{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Xt extends as{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ua(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Vi(e,t,n){const s=new Map;k(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Gl(o,a,n[r]))}return s}function Pi(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Kl(i,o,t))}return s}class Ba extends as{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xl extends as{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L,b;function Jl(e){switch(e){default:return E();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function $a(e){if(e===void 0)return gt("GRPC error has no .code"),d.UNKNOWN;switch(e){case L.OK:return d.OK;case L.CANCELLED:return d.CANCELLED;case L.UNKNOWN:return d.UNKNOWN;case L.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case L.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case L.INTERNAL:return d.INTERNAL;case L.UNAVAILABLE:return d.UNAVAILABLE;case L.UNAUTHENTICATED:return d.UNAUTHENTICATED;case L.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case L.NOT_FOUND:return d.NOT_FOUND;case L.ALREADY_EXISTS:return d.ALREADY_EXISTS;case L.PERMISSION_DENIED:return d.PERMISSION_DENIED;case L.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case L.ABORTED:return d.ABORTED;case L.OUT_OF_RANGE:return d.OUT_OF_RANGE;case L.UNIMPLEMENTED:return d.UNIMPLEMENTED;case L.DATA_LOSS:return d.DATA_LOSS;default:return E()}}(b=L||(L={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){we(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return va(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=new B(w.comparator);function yt(){return Zl}const qa=new B(w.comparator);function De(...e){let t=qa;for(const n of e)t=t.insert(n.key,n);return t}function ja(e){let t=qa;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Vt(){return Re()}function Ka(){return Re()}function Re(){return new Te(e=>e.toString(),(e,t)=>e.isEqual(t))}const td=new B(w.comparator),ed=new U(w.comparator);function A(...e){let t=ed;for(const n of e)t=t.add(n);return t}const nd=new U(N);function Ga(){return nd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,rn.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new cs(S.min(),r,Ga(),yt(),A())}}class rn{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new rn(s,n,A(),A(),A())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t,n,s,r){this.Et=t,this.removedTargetIds=n,this.key=s,this.At=r}}class Ha{constructor(t,n){this.targetId=t,this.Rt=n}}class za{constructor(t,n,s=J.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Ui{constructor(){this.bt=0,this.vt=$i(),this.Pt=J.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(t){t.approximateByteSize()>0&&(this.St=!0,this.Pt=t)}Nt(){let t=A(),n=A(),s=A();return this.vt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:E()}}),new rn(this.Pt,this.Vt,t,n,s)}kt(){this.St=!1,this.vt=$i()}Ot(t,n){this.St=!0,this.vt=this.vt.insert(t,n)}Mt(t){this.St=!0,this.vt=this.vt.remove(t)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class sd{constructor(t){this.Lt=t,this.qt=new Map,this.Ut=yt(),this.Kt=Bi(),this.Gt=new U(N)}Qt(t){for(const n of t.Et)t.At&&t.At.isFoundDocument()?this.jt(n,t.At):this.zt(n,t.key,t.At);for(const n of t.removedTargetIds)this.zt(n,t.key,t.At)}Wt(t){this.forEachTarget(t,n=>{const s=this.Ht(n);switch(t.state){case 0:this.Jt(n)&&s.xt(t.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(t.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(t.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(t.resumeToken));break;default:E()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(t){const n=t.targetId,s=t.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(Ws(i))if(s===0){const o=new w(i.path);this.zt(n,o,Q.newNoDocument(o,S.min()))}else k(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(t){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Ws(a.target)){const c=new w(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Q.newNoDocument(c,t))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=A();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(t));const r=new cs(t,n,this.Gt,this.Ut,s);return this.Ut=yt(),this.Kt=Bi(),this.Gt=new U(N),r}jt(t,n){if(!this.Jt(t))return;const s=this.ne(t,n.key)?2:0;this.Ht(t).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(t))}zt(t,n,s){if(!this.Jt(t))return;const r=this.Ht(t);this.ne(t,n)?r.Ot(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(t)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(t){this.qt.delete(t)}te(t){const n=this.Ht(t).Nt();return this.Lt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ft(t){this.Ht(t).Ft()}Ht(t){let n=this.qt.get(t);return n||(n=new Ui,this.qt.set(t,n)),n}se(t){let n=this.Kt.get(t);return n||(n=new U(N),this.Kt=this.Kt.insert(t,n)),n}Jt(t){const n=this.Xt(t)!==null;return n||v("WatchChangeAggregator","Detected inactive target",t),n}Xt(t){const n=this.qt.get(t);return n&&n.Dt?null:this.Lt.ie(t)}Yt(t){this.qt.set(t,new Ui),this.Lt.getRemoteKeysForTarget(t).forEach(n=>{this.zt(t,n,null)})}ne(t,n){return this.Lt.getRemoteKeysForTarget(t).has(n)}}function Bi(){return new B(w.comparator)}function $i(){return new B(w.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),id=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),od=(()=>({and:"AND",or:"OR"}))();class ad{constructor(t,n){this.databaseId=t,this.yt=n}}function Vn(e,t){return e.yt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Qa(e,t){return e.yt?t.toBase64():t.toUint8Array()}function cd(e,t){return Vn(e,t.toTimestamp())}function ht(e){return k(!!e),S.fromTimestamp(function(t){const n=_t(t);return new P(n.seconds,n.nanos)}(e))}function Rr(e,t){return function(n){return new x(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Wa(e){const t=x.fromString(e);return k(Za(t)),t}function Js(e,t){return Rr(e.databaseId,t.path)}function Ds(e,t){const n=Wa(t);if(n.get(1)!==e.databaseId.projectId)throw new m(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new m(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(Xa(n))}function Zs(e,t){return Rr(e.databaseId,t)}function ud(e){const t=Wa(e);return t.length===4?x.emptyPath():Xa(t)}function tr(e){return new x(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Xa(e){return k(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function qi(e,t,n){return{name:Js(e,t),fields:n.value.mapValue.fields}}function hd(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:E()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.yt?(k(u===void 0||typeof u=="string"),J.fromBase64String(u||"")):(k(u===void 0||u instanceof Uint8Array),J.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?d.UNKNOWN:$a(c.code);return new m(u,c.message||"")}(o);n=new za(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ds(e,s.document.name),i=ht(s.document.updateTime),o=s.document.createTime?ht(s.document.createTime):S.min(),a=new rt({mapValue:{fields:s.document.fields}}),c=Q.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new wn(u,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Ds(e,s.document),i=s.readTime?ht(s.readTime):S.min(),o=Q.newNoDocument(r,i),a=s.removedTargetIds||[];n=new wn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Ds(e,s.document),i=s.removedTargetIds||[];n=new wn([],i,r,null)}else{if(!("filter"in t))return E();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new Yl(r),o=s.targetId;n=new Ha(o,i)}}return n}function ld(e,t){let n;if(t instanceof sn)n={update:qi(e,t.key,t.value)};else if(t instanceof Ba)n={delete:Js(e,t.key)};else if(t instanceof Xt)n={update:qi(e,t.key,t.data),updateMask:Ed(t.fieldMask)};else{if(!(t instanceof Xl))return E();n={verify:Js(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Ln)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ke)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ge)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Fn)return{fieldPath:i.field.canonicalString(),increment:o.It};throw E()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:cd(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:E()}(e,t.precondition)),n}function dd(e,t){return e&&e.length>0?(k(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?ht(s.updateTime):ht(r);return i.isEqual(S.min())&&(i=ht(r)),new zl(i,s.transformResults||[])}(n,t))):[]}function fd(e,t){return{documents:[Zs(e,t.path)]}}function pd(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Zs(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Zs(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Ja(at.create(c,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Zt(h.field),direction:yd(h.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.yt||ns(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function gd(e){let t=ud(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){k(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let i=[];n.where&&(i=function(h){const l=Ya(h);return l instanceof at&&Sa(l)?l.getFilters():[l]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new se(te(l.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,ns(l)?null:l}(n.limit));let c=null;n.startAt&&(c=function(h){const l=!!h.before,p=h.values||[];return new On(p,l)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const l=!h.before,p=h.values||[];return new On(p,l)}(n.endAt)),Bl(t,r,o,i,a,"F",c,u)}function md(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return E()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Ya(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=te(t.unaryFilter.field);return V.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=te(t.unaryFilter.field);return V.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=te(t.unaryFilter.field);return V.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=te(t.unaryFilter.field);return V.create(i,"!=",{nullValue:"NULL_VALUE"});default:return E()}}(e):e.fieldFilter!==void 0?function(t){return V.create(te(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return E()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return at.create(t.compositeFilter.filters.map(n=>Ya(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return E()}}(t.compositeFilter.op))}(e):E()}function yd(e){return rd[e]}function vd(e){return id[e]}function wd(e){return od[e]}function Zt(e){return{fieldPath:e.canonicalString()}}function te(e){return W.fromServerFormat(e.fieldPath)}function Ja(e){return e instanceof V?function(t){if(t.op==="=="){if(Ni(t.value))return{unaryFilter:{field:Zt(t.field),op:"IS_NAN"}};if(_i(t.value))return{unaryFilter:{field:Zt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ni(t.value))return{unaryFilter:{field:Zt(t.field),op:"IS_NOT_NAN"}};if(_i(t.value))return{unaryFilter:{field:Zt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zt(t.field),op:vd(t.op),value:t.value}}}(e):e instanceof at?function(t){const n=t.getFilters().map(s=>Ja(s));return n.length===1?n[0]:{compositeFilter:{op:wd(t.op),filters:n}}}(e):E()}function Ed(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Za(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&Ql(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=ke(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=ke(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Ka();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Pa(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(S.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),A())}isEqual(t){return this.batchId===t.batchId&&ce(this.mutations,t.mutations,(n,s)=>Fi(n,s))&&ce(this.baseMutations,t.baseMutations,(n,s)=>Fi(n,s))}}class xr{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){k(t.mutations.length===s.length);let r=td;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new xr(t,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t,n,s,r,i=S.min(),o=S.min(),a=J.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Gt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t){this.oe=t}}function Cd(e){const t=gd({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Mn(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(){this.Ze=new Dd}addToCollectionParentIndex(t,n){return this.Ze.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.Ze.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(bt.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(bt.min())}updateCollectionGroup(t,n,s){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class Dd{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new U(x.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new U(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this.Pn=t}next(){return this.Pn+=2,this.Pn}static Vn(){return new de(0)}static Sn(){return new de(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.changes=new Te(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Q.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&ke(s.mutation,r,ot.empty(),P.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,A()).next(()=>s))}getLocalViewOfDocuments(t,n,s=A()){const r=Vt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=De();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Vt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,A()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=yt();const o=Re(),a=Re();return n.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Xt)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ke(h.mutation,u,h.mutation.getFieldMask(),P.now())):o.set(u.key,ot.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var l;return a.set(u,new _d(h,(l=o.get(u))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Re();let r=new B((o,a)=>o-a),i=A();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||ot.empty();h=a.applyToLocalView(u,h),s.set(c,h);const l=(r.get(a.batchId)||A()).add(c);r=r.insert(a.batchId,l)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,l=Ka();h.forEach(p=>{if(!i.has(p)){const g=Pa(n.get(p),s.get(p));g!==null&&l.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,l))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return w.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Na(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):f.resolve(Vt());let a=-1,c=i;return o.next(u=>f.forEach(u,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(h)?f.resolve():this.remoteDocumentCache.getEntry(t,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,A())).next(h=>({batchId:a,changes:ja(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(s=>{let r=De();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=De();return this.indexManager.getCollectionParents(t,r).next(o=>f.forEach(o,a=>{const c=function(u,h){return new Ee(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,Q.newInvalidDocument(u)))});let o=De();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&ke(u.mutation,c,ot.empty(),P.now()),is(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t){this.Tt=t,this.es=new Map,this.ns=new Map}getBundleMetadata(t,n){return f.resolve(this.es.get(n))}saveBundleMetadata(t,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:ht(s.createTime)}),f.resolve()}getNamedQuery(t,n){return f.resolve(this.ns.get(n))}saveNamedQuery(t,n){return this.ns.set(n.name,function(s){return{name:s.name,query:Cd(s.bundledQuery),readTime:ht(s.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.overlays=new B(w.comparator),this.ss=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Vt();return f.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.ce(t,n,i)}),f.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),f.resolve()}getOverlaysForCollection(t,n,s){const r=Vt(),i=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return f.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new B((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=Vt(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Vt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return f.resolve(a)}ce(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Id(n,s));let i=this.ss.get(n);i===void 0&&(i=A(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.rs=new U($.os),this.us=new U($.cs)}isEmpty(){return this.rs.isEmpty()}addReference(t,n){const s=new $(t,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ls(new $(t,n))}fs(t,n){t.forEach(s=>this.removeReference(s,n))}ds(t){const n=new w(new x([])),s=new $(n,t),r=new $(n,t+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(t=>this.ls(t))}ls(t){this.rs=this.rs.delete(t),this.us=this.us.delete(t)}ws(t){const n=new w(new x([])),s=new $(n,t),r=new $(n,t+1);let i=A();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new $(t,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class ${constructor(t,n){this.key=t,this.gs=n}static os(t,n){return w.comparator(t.key,n.key)||N(t.gs,n.gs)}static cs(t,n){return N(t.gs,n.gs)||w.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new U($.os)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Td(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new $(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new $(n,0),r=new $(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new U(N);return n.forEach(r=>{const i=new $(r,0),o=new $(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),f.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;w.isDocumentKey(i)||(i=i.child(""));const o=new $(new w(i),0);let a=new U(N);return this.ps.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.gs)),!0)},o),f.resolve(this.Es(a))}Es(t){const n=[];return t.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){k(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return f.forEach(n.mutations,r=>{const i=new $(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ps=s})}bn(t){}containsKey(t,n){const s=new $(n,0),r=this.ps.firstAfterOrEqual(s);return f.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}As(t,n){return this.Ts(t)}Ts(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Is(t){const n=this.Ts(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(t){this.Rs=t,this.docs=new B(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():Q.newInvalidDocument(n))}getEntries(t,n){let s=yt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Q.newInvalidDocument(r))}),f.resolve(s)}getDocumentsMatchingQuery(t,n,s,r){let i=yt();const o=n.path,a=new w(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Il(Tl(h),s)<=0||(r.has(h.key)||is(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(t,n,s,r){E()}bs(t,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Md(this)}getSize(t){return f.resolve(this.size)}}class Md extends bd{constructor(t){super(),this.Xn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(t,r)):this.Xn.removeEntry(s)}),f.waitFor(n)}getFromCache(t,n){return this.Xn.getEntry(t,n)}getAllFromCache(t,n){return this.Xn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t){this.persistence=t,this.vs=new Te(n=>_r(n),Nr),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new Or,this.targetCount=0,this.Ss=de.Vn()}forEachTarget(t,n){return this.vs.forEach((s,r)=>n(r)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Ps)}allocateTargetId(t){return this.highestTargetId=this.Ss.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),f.resolve()}xn(t){this.vs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ss=new de(n),this.highestTargetId=n),t.sequenceNumber>this.Ps&&(this.Ps=t.sequenceNumber)}addTargetData(t,n){return this.xn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.xn(n),f.resolve()}removeTargetData(t,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),f.waitFor(i).next(()=>r)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const s=this.vs.get(n)||null;return f.resolve(s)}addMatchingKeys(t,n,s){return this.Vs.hs(n,s),f.resolve()}removeMatchingKeys(t,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Vs.ds(n),f.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Vs.ws(n);return f.resolve(s)}containsKey(t,n){return f.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t,n){this.Ds={},this.overlays={},this.Cs=new Dr(0),this.xs=!1,this.xs=!0,this.referenceDelegate=t(this),this.Ns=new Ld(this),this.indexManager=new Ad,this.remoteDocumentCache=function(s){return new Od(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new Sd(n),this.Os=new kd(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Rd,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Ds[t.toKey()];return s||(s=new xd(n,this.referenceDelegate),this.Ds[t.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(t,n,s){v("MemoryPersistence","Starting transaction:",t);const r=new Vd(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Fs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}$s(t,n){return f.or(Object.values(this.Ds).map(s=>()=>s.containsKey(t,n)))}}class Vd extends Cl{constructor(t){super(),this.currentSequenceNumber=t}}class Mr{constructor(t){this.persistence=t,this.Bs=new Or,this.Ls=null}static qs(t){return new Mr(t)}get Us(){if(this.Ls)return this.Ls;throw E()}addReference(t,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),f.resolve()}removeReference(t,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Us.add(n.toString()),f.resolve()}removeTarget(t,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Ms(){this.Ls=new Set}Fs(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Us,s=>{const r=w.fromPath(s);return this.Ks(t,r).next(i=>{i||n.removeEntry(r,S.min())})}).next(()=>(this.Ls=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ks(t,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(t){return 0}Ks(t,n){return f.or([()=>f.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.$s(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(t,n){let s=A(),r=A();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Lr(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.ki=!1}initialize(t,n){this.Oi=t,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Mi(t,n).next(i=>i||this.Fi(t,n,r,s)).next(i=>i||this.$i(t,n))}Mi(t,n){if(Mi(n))return f.resolve(null);let s=mt(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Mn(n,null,"F"),s=mt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=A(...i);return this.Oi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.Bi(n,a);return this.Li(n,u,o,c.readTime)?this.Mi(t,Mn(n,null,"F")):this.qi(t,u,n,c)}))})))}Fi(t,n,s,r){return Mi(n)||r.isEqual(S.min())?this.$i(t,n):this.Oi.getDocuments(t,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.$i(t,n):(Ci()<=_.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ys(n)),this.qi(t,o,n,El(r,-1)))})}Bi(t,n){let s=new U(Ra(t));return n.forEach((r,i)=>{is(t,i)&&(s=s.add(i))}),s}Li(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}$i(t,n){return Ci()<=_.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Ys(n)),this.Oi.getDocumentsMatchingQuery(t,n,bt.min())}qi(t,n,s,r){return this.Oi.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t,n,s,r){this.persistence=t,this.Ui=n,this.Tt=r,this.Ki=new B(N),this.Gi=new Te(i=>_r(i),Nr),this.Qi=new Map,this.ji=t.getRemoteDocumentCache(),this.Ns=t.getTargetCache(),this.Os=t.getBundleCache(),this.zi(s)}zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Nd(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ki))}}function Bd(e,t,n,s){return new Ud(e,t,n,s)}async function tc(e,t){const n=C(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=A();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function $d(e,t){const n=C(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const h=c.batch,l=h.keys();let p=f.resolve();return l.forEach(g=>{p=p.next(()=>u.getEntry(a,g)).next(I=>{const D=c.docVersions.get(g);k(D!==null),I.version.compareTo(D)<0&&(h.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),u.addEntry(I)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=A();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function ec(e){const t=C(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ns.getLastRemoteSnapshotVersion(n))}function qd(e,t){const n=C(e),s=t.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];t.targetChanges.forEach((h,l)=>{const p=r.get(l);if(!p)return;a.push(n.Ns.removeMatchingKeys(i,h.removedDocuments,l).next(()=>n.Ns.addMatchingKeys(i,h.addedDocuments,l)));let g=p.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(l)?g=g.withResumeToken(J.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),r=r.insert(l,g),function(I,D,R){return I.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(p,g,h)&&a.push(n.Ns.updateTargetData(i,g))});let c=yt(),u=A();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(jd(i,o,t.documentUpdates).next(h=>{c=h.Hi,u=h.Ji})),!s.isEqual(S.min())){const h=n.Ns.getLastRemoteSnapshotVersion(i).next(l=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return f.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ki=r,i))}function jd(e,t,n){let s=A(),r=A();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=yt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(S.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function Kd(e,t){const n=C(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Gd(e,t){const n=C(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,t).next(i=>i?(r=i,f.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new Gt(t,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(t,s.targetId)),s})}async function er(e,t,n){const s=C(e),r=s.Ki.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!nn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ki=s.Ki.remove(t),s.Gi.delete(r.target)}function ji(e,t,n){const s=C(e);let r=S.min(),i=A();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=C(a),l=h.Gi.get(u);return l!==void 0?f.resolve(h.Ki.get(l)):h.Ns.getTargetData(c,u)}(s,o,mt(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,t,n?r:S.min(),n?i:A())).next(a=>(Hd(s,$l(t),a),{documents:a,Yi:i})))}function Hd(e,t,n){let s=e.Qi.get(t)||S.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Qi.set(t,s)}class Ki{constructor(){this.activeTargetIds=Ga()}sr(t){this.activeTargetIds=this.activeTargetIds.add(t)}ir(t){this.activeTargetIds=this.activeTargetIds.delete(t)}nr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zd{constructor(){this.Ur=new Ki,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Ur.sr(t),this.Kr[t]||"not-current"}updateQueryState(t,n,s){this.Kr[t]=n}removeLocalQueryTarget(t){this.Ur.ir(t)}isLocalQueryTarget(t){return this.Ur.activeTargetIds.has(t)}clearQueryState(t){delete this.Kr[t]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(t){return this.Ur.activeTargetIds.has(t)}start(){return this.Ur=new Ki,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{Gr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(t){this.Hr.push(t)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Hr)t(0)}Wr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Hr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t){this.Yr=t.Yr,this.Zr=t.Zr}Xr(t){this.eo=t}no(t){this.so=t}onMessage(t){this.io=t}close(){this.Zr()}send(t){this.Yr(t)}ro(){this.eo()}oo(t){this.so(t)}uo(t){this.io(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.co=n+"://"+t.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(t,n,s,r,i){const o=this.fo(t,n);v("RestConnection","Sending: ",o,s);const a={};return this._o(a,r,i),this.wo(t,o,a,s).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw Gs("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}mo(t,n,s,r,i,o){return this.lo(t,n,s,r,i)}_o(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+ve,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}fo(t,n){const s=Wd[t];return`${this.co}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}wo(t,n,s,r){return new Promise((i,o)=>{const a=new hl;a.setWithCredentials(!0),a.listenOnce(al.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case As.NO_ERROR:const u=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(u)),i(u);break;case As.TIMEOUT:v("Connection",'RPC "'+t+'" timed out'),o(new m(d.DEADLINE_EXCEEDED,"Request time out"));break;case As.HTTP_ERROR:const h=a.getStatus();if(v("Connection",'RPC "'+t+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let l=a.getResponseJson();Array.isArray(l)&&(l=l[0]);const p=l==null?void 0:l.error;if(p&&p.status&&p.message){const g=function(I){const D=I.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(D)>=0?D:d.UNKNOWN}(p.status);o(new m(g,p.message))}else o(new m(d.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new m(d.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{v("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}yo(t,n,s){const r=[this.co,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=il(),o=ol(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ul({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");v("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let h=!1,l=!1;const p=new Xd({Yr:I=>{l?v("Connection","Not sending because WebChannel is closed:",I):(h||(v("Connection","Opening WebChannel transport."),u.open(),h=!0),v("Connection","WebChannel sending:",I),u.send(I))},Zr:()=>u.close()}),g=(I,D,R)=>{I.listen(D,tt=>{try{R(tt)}catch(H){setTimeout(()=>{throw H},0)}})};return g(u,fn.EventType.OPEN,()=>{l||v("Connection","WebChannel transport opened.")}),g(u,fn.EventType.CLOSE,()=>{l||(l=!0,v("Connection","WebChannel transport closed"),p.oo())}),g(u,fn.EventType.ERROR,I=>{l||(l=!0,Gs("Connection","WebChannel transport errored:",I),p.oo(new m(d.UNAVAILABLE,"The operation could not be completed")))}),g(u,fn.EventType.MESSAGE,I=>{var D;if(!l){const R=I.data[0];k(!!R);const tt=R,H=tt.error||((D=tt[0])===null||D===void 0?void 0:D.error);if(H){v("Connection","WebChannel received error:",H);const cn=H.status;let Jt=function(Mc){const ei=L[Mc];if(ei!==void 0)return $a(ei)}(cn),un=H.message;Jt===void 0&&(Jt=d.INTERNAL,un="Unknown error status: "+cn+" with message "+H.message),l=!0,p.oo(new m(Jt,un)),u.close()}else v("Connection","WebChannel received:",R),p.uo(R)}}),g(o,cl.STAT_EVENT,I=>{I.stat===Ii.PROXY?v("Connection","Detected buffering proxy"):I.stat===Ii.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.ro()},0),p}}function bs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(e){return new ad(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Ys=t,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(t){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),t())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t,n,s,r,i,o,a,c){this.Ys=t,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new nc(t,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(t){this.Uo(),this.stream.send(t)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(t,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,t!==4?this.ko.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(gt(n.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=t,await this.listener.no(n)}Go(){}auth(){this.state=1;const t=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{t(()=>{const r=new m(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(t,n){const s=this.Qo(this.Co);this.stream=this.Wo(t,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(t){return v("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Qo(t){return n=>{this.Ys.enqueueAndForget(()=>this.Co===t?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jd extends sc{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(t,n){return this.connection.yo("Listen",t,n)}onMessage(t){this.ko.reset();const n=hd(this.Tt,t),s=function(r){if(!("targetChange"in r))return S.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?S.min():i.readTime?ht(i.readTime):S.min()}(t);return this.listener.Ho(n,s)}Jo(t){const n={};n.database=tr(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=Ws(a)?{documents:fd(r,a)}:{query:pd(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Qa(r,i.resumeToken):i.snapshotVersion.compareTo(S.min())>0&&(o.readTime=Vn(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,t);const s=md(this.Tt,t);s&&(n.labels=s),this.qo(n)}Yo(t){const n={};n.database=tr(this.Tt),n.removeTarget=t,this.qo(n)}}class Zd extends sc{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(t,n){return this.connection.yo("Write",t,n)}onMessage(t){if(k(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Zo){this.ko.reset();const n=dd(t.writeResults,t.commitTime),s=ht(t.commitTime);return this.listener.eu(s,n)}return k(!t.writeResults||t.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const t={};t.database=tr(this.Tt),this.qo(t)}tu(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>ld(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new m(d.FAILED_PRECONDITION,"The client has already been terminated.")}lo(t,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new m(d.UNKNOWN,r.toString())})}mo(t,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new m(d.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class ef{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(t){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.hu("Offline")))}set(t){this.du(),this.ou=0,t==="Online"&&(this.cu=!1),this.hu(t)}hu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}lu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(gt(n),this.cu=!1):v("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{Yt(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=C(a);c.mu.add(4),await on(c),c.pu.set("Unknown"),c.mu.delete(4),await hs(c)}(this))})}),this.pu=new ef(s,r)}}async function hs(e){if(Yt(e))for(const t of e.gu)await t(!0)}async function on(e){for(const t of e.gu)await t(!1)}function rc(e,t){const n=C(e);n.wu.has(t.targetId)||(n.wu.set(t.targetId,t),Pr(n)?Vr(n):Ie(n).Mo()&&Fr(n,t))}function ic(e,t){const n=C(e),s=Ie(n);n.wu.delete(t),s.Mo()&&oc(n,t),n.wu.size===0&&(s.Mo()?s.Bo():Yt(n)&&n.pu.set("Unknown"))}function Fr(e,t){e.Iu.Ft(t.targetId),Ie(e).Jo(t)}function oc(e,t){e.Iu.Ft(t),Ie(e).Yo(t)}function Vr(e){e.Iu=new sd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ie:t=>e.wu.get(t)||null}),Ie(e).start(),e.pu.au()}function Pr(e){return Yt(e)&&!Ie(e).Oo()&&e.wu.size>0}function Yt(e){return C(e).mu.size===0}function ac(e){e.Iu=void 0}async function sf(e){e.wu.forEach((t,n)=>{Fr(e,t)})}async function rf(e,t){ac(e),Pr(e)?(e.pu.fu(t),Vr(e)):e.pu.set("Unknown")}async function of(e,t,n){if(e.pu.set("Online"),t instanceof za&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(e,t)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Pn(e,s)}else if(t instanceof wn?e.Iu.Qt(t):t instanceof Ha?e.Iu.Zt(t):e.Iu.Wt(t),!n.isEqual(S.min()))try{const s=await ec(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.wu.get(c);u&&r.wu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(J.EMPTY_BYTE_STRING,c.snapshotVersion)),oc(r,a);const u=new Gt(c.target,a,1,c.sequenceNumber);Fr(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await Pn(e,s)}}async function Pn(e,t,n){if(!nn(t))throw t;e.mu.add(1),await on(e),e.pu.set("Offline"),n||(n=()=>ec(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),e.mu.delete(1),await hs(e)})}function cc(e,t){return t().catch(n=>Pn(e,n,t))}async function ls(e){const t=C(e),n=Nt(t);let s=t._u.length>0?t._u[t._u.length-1].batchId:-1;for(;af(t);)try{const r=await Kd(t.localStore,s);if(r===null){t._u.length===0&&n.Bo();break}s=r.batchId,cf(t,r)}catch(r){await Pn(t,r)}uc(t)&&hc(t)}function af(e){return Yt(e)&&e._u.length<10}function cf(e,t){e._u.push(t);const n=Nt(e);n.Mo()&&n.Xo&&n.tu(t.mutations)}function uc(e){return Yt(e)&&!Nt(e).Oo()&&e._u.length>0}function hc(e){Nt(e).start()}async function uf(e){Nt(e).su()}async function hf(e){const t=Nt(e);for(const n of e._u)t.tu(n.mutations)}async function lf(e,t,n){const s=e._u.shift(),r=xr.from(s,t,n);await cc(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await ls(e)}async function df(e,t){t&&Nt(e).Xo&&await async function(n,s){if(r=s.code,Jl(r)&&r!==d.ABORTED){const i=n._u.shift();Nt(n).$o(),await cc(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ls(n)}var r}(e,t),uc(e)&&hc(e)}async function Hi(e,t){const n=C(e);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=Yt(n);n.mu.add(3),await on(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.mu.delete(3),await hs(n)}async function ff(e,t){const n=C(e);t?(n.mu.delete(2),await hs(n)):t||(n.mu.add(2),await on(n),n.pu.set("Unknown"))}function Ie(e){return e.Tu||(e.Tu=function(t,n,s){const r=C(t);return r.ru(),new Jd(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(e.datastore,e.asyncQueue,{Xr:sf.bind(null,e),no:rf.bind(null,e),Ho:of.bind(null,e)}),e.gu.push(async t=>{t?(e.Tu.$o(),Pr(e)?Vr(e):e.pu.set("Unknown")):(await e.Tu.stop(),ac(e))})),e.Tu}function Nt(e){return e.Eu||(e.Eu=function(t,n,s){const r=C(t);return r.ru(),new Zd(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(e.datastore,e.asyncQueue,{Xr:uf.bind(null,e),no:df.bind(null,e),nu:hf.bind(null,e),eu:lf.bind(null,e)}),e.gu.push(async t=>{t?(e.Eu.$o(),await ls(e)):(await e.Eu.stop(),e._u.length>0&&(v("RemoteStore",`Stopping write stream with ${e._u.length} pending writes`),e._u=[]))})),e.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new At,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new Ur(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new m(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Br(e,t){if(gt("AsyncQueue",`${t}: ${e}`),nn(e))return new m(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t){this.comparator=t?(n,s)=>t(n,s)||w.comparator(n.key,s.key):(n,s)=>w.comparator(n.key,s.key),this.keyedMap=De(),this.sortedSet=new B(this.comparator)}static emptySet(t){return new ie(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ie)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new ie;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.Au=new B(w.comparator)}track(t){const n=t.doc.key,s=this.Au.get(n);s?t.type!==0&&s.type===3?this.Au=this.Au.insert(n,t):t.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Au=this.Au.remove(n):t.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:t.doc}):E():this.Au=this.Au.insert(n,t)}Ru(){const t=[];return this.Au.inorderTraversal((n,s)=>{t.push(s)}),t}}class fe{constructor(t,n,s,r,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new fe(t,n,ie.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&rs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.bu=void 0,this.listeners=[]}}class gf{constructor(){this.queries=new Te(t=>ka(t),rs),this.onlineState="Unknown",this.vu=new Set}}async function mf(e,t){const n=C(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new pf),r)try{i.bu=await n.onListen(s)}catch(o){const a=Br(o,`Initialization of query '${Ys(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.Pu(n.onlineState),i.bu&&t.Vu(i.bu)&&$r(n)}async function yf(e,t){const n=C(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function vf(e,t){const n=C(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.bu=r}}s&&$r(n)}function wf(e,t,n){const s=C(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function $r(e){e.vu.forEach(t=>{t.next()})}class Ef{constructor(t,n,s){this.query=t,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new fe(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Du?this.xu(t)&&(this.Su.next(t),n=!0):this.Nu(t,this.onlineState)&&(this.ku(t),n=!0),this.Cu=t,n}onError(t){this.Su.error(t)}Pu(t){this.onlineState=t;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,t)&&(this.ku(this.Cu),n=!0),n}Nu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}xu(t){if(t.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(t){t=fe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Du=!0,this.Su.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(t){this.key=t}}class dc{constructor(t){this.key=t}}class Tf{constructor(t,n){this.query=t,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=A(),this.mutatedKeys=A(),this.ju=Ra(t),this.zu=new ie(this.ju)}get Wu(){return this.Ku}Hu(t,n){const s=n?n.Ju:new zi,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,l)=>{const p=r.get(h),g=is(this.query,l)?l:null,I=!!p&&this.mutatedKeys.has(p.key),D=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let R=!1;p&&g?p.data.isEqual(g.data)?I!==D&&(s.track({type:3,doc:g}),R=!0):this.Yu(p,g)||(s.track({type:2,doc:g}),R=!0,(c&&this.ju(g,c)>0||u&&this.ju(g,u)<0)&&(a=!0)):!p&&g?(s.track({type:0,doc:g}),R=!0):p&&!g&&(s.track({type:1,doc:p}),R=!0,(c||u)&&(a=!0)),R&&(g?(o=o.add(g),i=D?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.zu;this.zu=t.zu,this.mutatedKeys=t.mutatedKeys;const i=t.Ju.Ru();i.sort((u,h)=>function(l,p){const g=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E()}};return g(l)-g(p)}(u.type,h.type)||this.ju(u.doc,h.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new fe(this.query,t.zu,r,i,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new zi,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(t){return!this.Ku.has(t)&&!!this.zu.has(t)&&!this.zu.get(t).hasLocalMutations}Zu(t){t&&(t.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=t.current)}Xu(){if(!this.current)return[];const t=this.Qu;this.Qu=A(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return t.forEach(s=>{this.Qu.has(s)||n.push(new dc(s))}),this.Qu.forEach(s=>{t.has(s)||n.push(new lc(s))}),n}nc(t){this.Ku=t.Yi,this.Qu=A();const n=this.Hu(t.documents);return this.applyChanges(n,!0)}sc(){return fe.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class If{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Sf{constructor(t){this.key=t,this.ic=!1}}class Cf{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Te(a=>ka(a),rs),this.uc=new Map,this.cc=new Set,this.ac=new B(w.comparator),this.hc=new Map,this.lc=new Or,this.fc={},this.dc=new Map,this._c=de.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function Af(e,t){const n=Lf(e);let s,r;const i=n.oc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await Gd(n.localStore,mt(t));n.isPrimaryClient&&rc(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Df(n,t,s,a==="current",o.resumeToken)}return r}async function Df(e,t,n,s,r){e.mc=(l,p,g)=>async function(I,D,R,tt){let H=D.view.Hu(R);H.Li&&(H=await ji(I.localStore,D.query,!1).then(({documents:un})=>D.view.Hu(un,H)));const cn=tt&&tt.targetChanges.get(D.targetId),Jt=D.view.applyChanges(H,I.isPrimaryClient,cn);return Wi(I,D.targetId,Jt.tc),Jt.snapshot}(e,l,p,g);const i=await ji(e.localStore,t,!0),o=new Tf(t,i.Yi),a=o.Hu(i.documents),c=rn.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),u=o.applyChanges(a,e.isPrimaryClient,c);Wi(e,n,u.tc);const h=new If(t,n,o);return e.oc.set(t,h),e.uc.has(n)?e.uc.get(n).push(t):e.uc.set(n,[t]),u.snapshot}async function bf(e,t){const n=C(e),s=n.oc.get(t),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!rs(i,t))),void n.oc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await er(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),ic(n.remoteStore,s.targetId),nr(n,s.targetId)}).catch(en)):(nr(n,s.targetId),await er(n.localStore,s.targetId,!0))}async function _f(e,t,n){const s=Ff(e);try{const r=await function(i,o){const a=C(i),c=P.now(),u=o.reduce((p,g)=>p.add(g.key),A());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=yt(),I=A();return a.ji.getEntries(p,u).next(D=>{g=D,g.forEach((R,tt)=>{tt.isValidDocument()||(I=I.add(R))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,g)).next(D=>{h=D;const R=[];for(const tt of o){const H=Wl(tt,h.get(tt.key).overlayedDocument);H!=null&&R.push(new Xt(tt.key,H,ba(H.value.mapValue),ft.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,R,o)}).next(D=>{l=D;const R=D.applyToLocalDocumentSet(h,I);return a.documentOverlayCache.saveOverlays(p,D.batchId,R)})}).then(()=>({batchId:l.batchId,changes:ja(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new B(N)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await an(s,r.changes),await ls(s.remoteStore)}catch(r){const i=Br(r,"Failed to persist write");n.reject(i)}}async function fc(e,t){const n=C(e);try{const s=await qd(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(k(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?k(o.ic):r.removedDocuments.size>0&&(k(o.ic),o.ic=!1))}),await an(n,s,t)}catch(s){await en(s)}}function Qi(e,t,n){const s=C(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.Pu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=C(i);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.Pu(o)&&(c=!0)}),c&&$r(a)}(s.eventManager,t),r.length&&s.rc.Ho(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Nf(e,t,n){const s=C(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.hc.get(t),i=r&&r.key;if(i){let o=new B(w.comparator);o=o.insert(i,Q.newNoDocument(i,S.min()));const a=A().add(i),c=new cs(S.min(),new Map,new U(N),o,a);await fc(s,c),s.ac=s.ac.remove(i),s.hc.delete(t),qr(s)}else await er(s.localStore,t,!1).then(()=>nr(s,t,n)).catch(en)}async function kf(e,t){const n=C(e),s=t.batch.batchId;try{const r=await $d(n.localStore,t);gc(n,s,null),pc(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await an(n,r)}catch(r){await en(r)}}async function Rf(e,t,n){const s=C(e);try{const r=await function(i,o){const a=C(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(h=>(k(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(c,h))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);gc(s,t,n),pc(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await an(s,r)}catch(r){await en(r)}}function pc(e,t){(e.dc.get(t)||[]).forEach(n=>{n.resolve()}),e.dc.delete(t)}function gc(e,t,n){const s=C(e);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.fc[s.currentUser.toKey()]=r}}function nr(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.uc.get(t))e.oc.delete(s),n&&e.rc.gc(s,n);e.uc.delete(t),e.isPrimaryClient&&e.lc.ds(t).forEach(s=>{e.lc.containsKey(s)||mc(e,s)})}function mc(e,t){e.cc.delete(t.path.canonicalString());const n=e.ac.get(t);n!==null&&(ic(e.remoteStore,n),e.ac=e.ac.remove(t),e.hc.delete(n),qr(e))}function Wi(e,t,n){for(const s of n)s instanceof lc?(e.lc.addReference(s.key,t),xf(e,s)):s instanceof dc?(v("SyncEngine","Document no longer in limbo: "+s.key),e.lc.removeReference(s.key,t),e.lc.containsKey(s.key)||mc(e,s.key)):E()}function xf(e,t){const n=t.key,s=n.path.canonicalString();e.ac.get(n)||e.cc.has(s)||(v("SyncEngine","New document in limbo: "+n),e.cc.add(s),qr(e))}function qr(e){for(;e.cc.size>0&&e.ac.size<e.maxConcurrentLimboResolutions;){const t=e.cc.values().next().value;e.cc.delete(t);const n=new w(x.fromString(t)),s=e._c.next();e.hc.set(s,new Sf(n)),e.ac=e.ac.insert(n,s),rc(e.remoteStore,new Gt(mt(_a(n.path)),s,2,Dr.at))}}async function an(e,t,n){const s=C(e),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const h=Lr.Ni(c.targetId,u);i.push(h)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const u=C(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(c,l=>f.forEach(l.Ci,p=>u.persistence.referenceDelegate.addReference(h,l.targetId,p)).next(()=>f.forEach(l.xi,p=>u.persistence.referenceDelegate.removeReference(h,l.targetId,p)))))}catch(h){if(!nn(h))throw h;v("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const p=u.Ki.get(l),g=p.snapshotVersion,I=p.withLastLimboFreeSnapshotVersion(g);u.Ki=u.Ki.insert(l,I)}}}(s.localStore,i))}async function Of(e,t){const n=C(e);if(!n.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());const s=await tc(n.localStore,t);n.currentUser=t,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new m(d.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await an(n,s.Wi)}}function Mf(e,t){const n=C(e),s=n.hc.get(t);if(s&&s.ic)return A().add(s.key);{let r=A();const i=n.uc.get(t);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function Lf(e){const t=C(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=fc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Nf.bind(null,t),t.rc.Ho=vf.bind(null,t.eventManager),t.rc.gc=wf.bind(null,t.eventManager),t}function Ff(e){const t=C(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=kf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Rf.bind(null,t),t}class Vf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.Tt=us(t.databaseInfo.databaseId),this.sharedClientState=this.Ic(t),this.persistence=this.Tc(t),await this.persistence.start(),this.localStore=this.Ec(t),this.gcScheduler=this.Ac(t,this.localStore),this.indexBackfillerScheduler=this.Rc(t,this.localStore)}Ac(t,n){return null}Rc(t,n){return null}Ec(t){return Bd(this.persistence,new Pd,t.initialUser,this.Tt)}Tc(t){return new Fd(Mr.qs,this.Tt)}Ic(t){return new zd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Pf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Qi(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Of.bind(null,this.syncEngine),await ff(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new gf}createDatastore(t){const n=us(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new Yd(r));var r;return function(i,o,a,c){return new tf(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Qi(this.syncEngine,a,0),o=Gi.C()?new Gi:new Qd,new nf(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const h=new Cf(s,r,i,o,a,c);return u&&(h.wc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=C(t);v("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await on(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.vc(this.observer.next,t)}error(t){this.observer.error?this.vc(this.observer.error,t):gt("Uncaught Error in snapshot listener:",t.toString())}Pc(){this.muted=!0}vc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=z.UNAUTHENTICATED,this.clientId=ya.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{v("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(v("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new m(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new At;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Br(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function $f(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await tc(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function qf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await jf(e);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>Hi(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>Hi(t.remoteStore,i)),e.onlineComponents=t}async function jf(e){return e.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await $f(e,new Vf)),e.offlineComponents}async function yc(e){return e.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await qf(e,new Pf)),e.onlineComponents}function Kf(e){return yc(e).then(t=>t.syncEngine)}async function Gf(e){const t=await yc(e),n=t.eventManager;return n.onListen=Af.bind(null,t.syncEngine),n.onUnlisten=bf.bind(null,t.syncEngine),n}function Hf(e,t,n={}){const s=new At;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Uf({next:l=>{i.enqueueAndForget(()=>yf(r,h)),l.fromCache&&a.source==="server"?c.reject(new m(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new Ef(o,u,{includeMetadataChanges:!0,Ou:!0});return mf(r,h)}(await Gf(e),e.asyncQueue,t,n,s)),s.promise}const Xi=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(e,t,n){if(!n)throw new m(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function zf(e,t,n,s){if(t===!0&&s===!0)throw new m(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Yi(e){if(!w.isDocumentKey(e))throw new m(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ji(e){if(w.isDocumentKey(e))throw new m(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ds(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":E()}function Un(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new m(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ds(e);throw new m(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Qf(e,t){if(t<=0)throw new m(d.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new m(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new m(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,zf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zi({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new m(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new m(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zi(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ll;switch(n.type){case"gapi":const s=n.client;return new gl(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new m(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Xi.get(t);n&&(v("ComponentProvider","Removing Datastore"),Xi.delete(t),n.terminate())}(this),Promise.resolve()}}function Wf(e,t,n,s={}){var r;const i=(e=Un(e,fs))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&Gs("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=z.MOCK_USER;else{o=zc(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new m(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new z(c)}e._authCredentials=new dl(new ma(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new it(this.firestore,t,this._key)}}class xt{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new xt(this.firestore,t,this._query)}}class Dt extends xt{constructor(t,n,s){super(t,n,_a(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new it(this.firestore,null,new w(t))}withConverter(t){return new Dt(this.firestore,t,this._path)}}function wc(e,t,...n){if(e=oe(e),vc("collection","path",t),e instanceof fs){const s=x.fromString(t,...n);return Ji(s),new Dt(e,null,s)}{if(!(e instanceof it||e instanceof Dt))throw new m(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(x.fromString(t,...n));return Ji(s),new Dt(e.firestore,null,s)}}function Xf(e,t,...n){if(e=oe(e),arguments.length===1&&(t=ya.R()),vc("doc","path",t),e instanceof fs){const s=x.fromString(t,...n);return Yi(s),new it(e,null,new w(s))}{if(!(e instanceof it||e instanceof Dt))throw new m(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(x.fromString(t,...n));return Yi(s),new it(e.firestore,e instanceof Dt?e.converter:null,new w(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new nc(this,"async_queue_retry"),this.Hc=()=>{const n=bs();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const t=bs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Jc(),this.Yc(t)}enterRestrictedMode(t){if(!this.Kc){this.Kc=!0,this.zc=t||!1;const n=bs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(t){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new At;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Uc.push(t),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(t){if(!nn(t))throw t;v("AsyncQueue","Operation failed with retryable error: "+t)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(t){const n=this.qc.then(()=>(this.jc=!0,t().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw gt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(t,n,s){this.Jc(),this.Wc.indexOf(t)>-1&&(n=0);const r=Ur.createAndSchedule(this,t,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&E()}verifyOperationInProgress(){}async ta(){let t;do t=this.qc,await t;while(t!==this.qc)}ea(t){for(const n of this.Gc)if(n.timerId===t)return!0;return!1}na(t){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ta()})}sa(t){this.Wc.push(t)}Xc(t){const n=this.Gc.indexOf(t);this.Gc.splice(n,1)}}class jr extends fs{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new Yf,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Tc(this),this._firestoreClient.terminate()}}function Jf(e,t){const n=typeof e=="object"?e:Yu(),s=typeof e=="string"?e:t||"(default)",r=zu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Kc("firestore");i&&Wf(r,...i)}return r}function Ec(e){return e._firestoreClient||Tc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Tc(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new Al(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Bf(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new pe(J.fromBase64String(t))}catch(n){throw new m(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new pe(J.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new m(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new m(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new m(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return N(this._lat,t._lat)||N(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=/^__.*__$/;class tp{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Xt(t,this.data,this.fieldMask,n,this.fieldTransforms):new sn(t,this.data,n,this.fieldTransforms)}}function Sc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E()}}class Hr{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(t){return new Hr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.oa({path:s,ca:!1});return r.aa(t),r}ha(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.oa({path:s,ca:!1});return r.ia(),r}la(t){return this.oa({path:void 0,ca:!0})}fa(t){return Bn(t,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let t=0;t<this.path.length;t++)this.aa(this.path.get(t))}aa(t){if(t.length===0)throw this.fa("Document fields must not be empty");if(Sc(this.ra)&&Zf.test(t))throw this.fa('Document fields cannot begin and end with "__"')}}class ep{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.Tt=s||us(t)}wa(t,n,s,r=!1){return new Hr({ra:t,methodName:n,_a:s,path:W.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Cc(e){const t=e._freezeSettings(),n=us(e._databaseId);return new ep(e._databaseId,!!t.ignoreUndefinedProperties,n)}function np(e,t,n,s,r,i={}){const o=e.wa(i.merge||i.mergeFields?2:0,t,n,r);bc("Data must be an object, but it was:",o,s);const a=Ac(s,o);let c,u;if(i.merge)c=new ot(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const l of i.mergeFields){const p=rp(t,l,n);if(!o.contains(p))throw new m(d.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);op(h,p)||h.push(p)}c=new ot(h),u=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,u=o.fieldTransforms;return new tp(new rt(a),c,u)}function sp(e,t,n,s=!1){return zr(n,e.wa(s?4:3,t))}function zr(e,t){if(Dc(e=oe(e)))return bc("Unsupported field value:",t,e),Ac(e,t);if(e instanceof Ic)return function(n,s){if(!Sc(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ca&&t.ra!==4)throw t.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=zr(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=oe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return jl(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=P.fromDate(n);return{timestampValue:Vn(s.Tt,r)}}if(n instanceof P){const r=new P(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Vn(s.Tt,r)}}if(n instanceof Gr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof pe)return{bytesValue:Qa(s.Tt,n._byteString)};if(n instanceof it){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Rr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${ds(n)}`)}(e,t)}function Ac(e,t){const n={};return va(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):we(e,(s,r)=>{const i=zr(r,t.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Dc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof P||e instanceof Gr||e instanceof pe||e instanceof it||e instanceof Ic)}function bc(e,t,n){if(!Dc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ds(n);throw s==="an object"?t.fa(e+" a custom object"):t.fa(e+" "+s)}}function rp(e,t,n){if((t=oe(t))instanceof Kr)return t._internalPath;if(typeof t=="string")return _c(e,t);throw Bn("Field path arguments must be of type string or ",e,!1,void 0,n)}const ip=new RegExp("[~\\*/\\[\\]]");function _c(e,t,n){if(t.search(ip)>=0)throw Bn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Kr(...t.split("."))._internalPath}catch{throw Bn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Bn(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new m(d.INVALID_ARGUMENT,a+e+c)}function op(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ap(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Qr("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ap extends Nc{data(){return super.data()}}function Qr(e,t){return typeof t=="string"?_c(e,t):t instanceof Kr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new m(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wr{}class Xr extends Wr{}function up(e,t,...n){let s=[];t instanceof Wr&&s.push(t),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Jr).length,o=r.filter(a=>a instanceof Yr).length;if(i>1||i>0&&o>0)throw new m(d.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)e=r._apply(e);return e}class Yr extends Xr{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new Yr(t,n,s)}_apply(t){const n=this._parse(t);return kc(t._query,n),new xt(t.firestore,t.converter,Xs(t._query,n))}_parse(t){const n=Cc(t.firestore);return function(r,i,o,a,c,u,h){let l;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new m(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){eo(h,u);const p=[];for(const g of h)p.push(to(a,r,g));l={arrayValue:{values:p}}}else l=to(a,r,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||eo(h,u),l=sp(o,i,h,u==="in"||u==="not-in");return V.create(c,u,l)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Jr extends Wr{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Jr(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:at.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)kc(i,a),i=Xs(i,a)}(t._query,n),new xt(t.firestore,t.converter,Xs(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Zr extends Xr{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Zr(t,n)}_apply(t){const n=function(s,r,i){if(s.startAt!==null)throw new m(d.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new m(d.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new se(r,i);return function(a,c){if(kr(a)===null){const u=ss(a);u!==null&&Rc(a,u,c.field)}}(s,o),o}(t._query,this._field,this._direction);return new xt(t.firestore,t.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Ee(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function hp(e,t="asc"){const n=t,s=Qr("orderBy",e);return Zr._create(s,n)}class ti extends Xr{constructor(t,n,s){super(),this.type=t,this._limit=n,this._limitType=s}static _create(t,n,s){return new ti(t,n,s)}_apply(t){return new xt(t.firestore,t.converter,Mn(t._query,this._limit,this._limitType))}}function lp(e){return Qf("limit",e),ti._create("limit",e,"F")}function to(e,t,n){if(typeof(n=oe(n))=="string"){if(n==="")throw new m(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Na(t)&&n.indexOf("/")!==-1)throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(x.fromString(n));if(!w.isDocumentKey(s))throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return bi(e,new w(s))}if(n instanceof it)return bi(e,n._key);throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ds(n)}.`)}function eo(e,t){if(!Array.isArray(e)||e.length===0)throw new m(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function kc(e,t){if(t.isInequality()){const s=ss(e),r=t.field;if(s!==null&&!s.isEqual(r))throw new m(d.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=kr(e);i!==null&&Rc(e,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new m(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new m(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Rc(e,t,n){if(!n.isEqual(t))throw new m(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class dp{convertValue(t,n="none"){switch(Qt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return F(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ue(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw E()}}convertObject(t,n){const s={};return we(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Gr(F(t.latitude),F(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Ea(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(qe(t));default:return null}}convertTimestamp(t){const n=_t(t);return new P(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=x.fromString(t);k(Za(s));const r=new $e(s.get(1),s.get(3)),i=new w(s.popFirst(5));return r.isEqual(n)||gt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class pp extends Nc{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new En(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Qr("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class En extends pp{data(t={}){return super.data(t)}}class gp{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new mn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new En(this._firestore,this._userDataWriter,s.key,s,new mn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new m(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new En(s._firestore,s._userDataWriter,o.doc.key,o.doc,new mn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new En(s._firestore,s._userDataWriter,o.doc.key,o.doc,new mn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:mp(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function mp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E()}}class yp extends dp{constructor(t){super(),this.firestore=t}convertBytes(t){return new pe(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new it(this.firestore,null,n)}}function vp(e){e=Un(e,xt);const t=Un(e.firestore,jr),n=Ec(t),s=new yp(t);return cp(e._query),Hf(n,e._query).then(r=>new gp(t,s,e,r))}function wp(e,t){const n=Un(e.firestore,jr),s=Xf(e),r=fp(e.converter,t);return Ep(n,[np(Cc(e.firestore),"addDoc",s._key,r,e.converter!==null,{}).toMutation(s._key,ft.exists(!1))]).then(()=>s)}function Ep(e,t){return function(n,s){const r=new At;return n.asyncQueue.enqueueAndForget(async()=>_f(await Kf(n),s,r)),r.promise}(Ec(e),t)}(function(e,t=!0){(function(n){ve=n})(Xu),Sn(new Oe("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new jr(new fl(n.getProvider("auth-internal")),new yl(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new m(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $e(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),ne(Si,"3.8.4",e),ne(Si,"3.8.4","esm2017")})();const Tp={apiKey:"AIzaSyBU5ujNJyakYRgFzXv70sg88mDoaD-Xin4",authDomain:"fruit-game-2d865.firebaseapp.com",projectId:"fruit-game-2d865",storageBucket:"fruit-game-2d865.appspot.com",messagingSenderId:"210965526089",appId:"1:210965526089:web:026923732c7e1e24b77198"},Ip=ho(Tp),xc=Jf(Ip);async function Sp(e){try{const t=await wp(wc(xc,"players"),{username:e,score:nt});console.log("Document written with ID: ",t.id)}catch(t){console.error("Error adding document: ",t)}}let et,Ot,no,vt,Pt,wt,Et,Tt,It,Ut,Bt,$t,qt,jt,be;var nt=0;let Oc;function Cp(e,t){let n=document.createElement("li");return n.innerHTML=e+" : "+t,n}const xe=e=>document.getElementById(e);window.addEventListener("load",()=>{Oc=xe("gameover"),xe("submit").addEventListener("submit",e=>{e.preventDefault();let t=xe("user-name").value;Sp(t)})});window.setup=()=>{createCanvas(1+windowHeight/2,windowHeight),world.gravity.y=10,Ot=new Sprite,Ot.y=height,Ot.w=width,Ot.h=20,Ot.color="rgb(128, 94, 82)",Ot.stroke="none",Ot.collider="static",vt=new Sprite,vt.width=width,vt.y=height/8,vt.height=5,vt.stroke="none",vt.color="rgb(235, 64, 52)",vt.collider="static",Ap(),et=new Group,Pt=new et.Group,Pt.diameter=20,Pt.img="assets/grape.png",Pt.color="purple",wt=new et.Group,wt.diameter=30,wt.img="assets/cherry.png",wt.color="red",Et=new et.Group,Et.diameter=45,Et.img="assets/orange.png",Et.color="orange",Tt=new et.Group,Tt.diameter=55,Tt.img="assets/lemon.png",Tt.color="yellow",It=new et.Group,It.diameter=70,It.img="assets/kiwi.png",It.color="green",Ut=new et.Group,Ut.diameter=85,Ut.img="assets/tomato.png",Ut.color="rgb(219,196,255)",Bt=new et.Group,Bt.diameter=100,Bt.img="assets/peach.png",Bt.color="pink",$t=new et.Group,$t.diameter=150,$t.img="assets/starfruit.png",$t.color="light yellow",qt=new et.Group,qt.diameter=185,qt.img="assets/coconut.png",qt.color="white",jt=new et.Group,jt.diameter=200,jt.img="assets/melon.png",jt.color="green",be=new et.Group,be.diameter=250,be.img="assets/watermelon.png",be.color="red"};function Ap(){no=new Sprite([[0,0],[width,0],[width,height],[0,height],[0,1]],"static"),no.color="purple"}function ct(e,t){e.diameter==20&&(new wt.Sprite(e.x,e.y),e.remove(),t.remove(),nt+=2),e.diameter==30&&(new Et.Sprite(e.x,e.y),e.remove(),t.remove(),nt+=4),e.diameter==45&&(new Tt.Sprite(e.x,e.y),e.remove(),t.remove(),nt+=8),e.diameter==55&&(new It.Sprite(e.x,e.y),e.remove(),t.remove(),nt+=16),e.diameter==70&&(new Ut.Sprite(e.x,e.y),e.remove(),t.remove(),nt+=32),e.diameter==85&&(new Bt.Sprite(e.x,e.y),e.remove(),t.remove(),nt+=64),e.diameter==100&&(new $t.Sprite(e.x,e.y),e.remove(),t.remove(),nt+=128),e.diameter==150&&(new qt.Sprite(e.x,e.y),e.remove(),t.remove(),nt+=256),e.diameter==185&&(new jt.Sprite(e.x,e.y),e.remove(),t.remove(),nt+=1028),e.diameter==200&&(new be.Sprite(e.x,e.y),e.remove(),t.remove(),nt+=2048)}function Dp(){var e=Math.random();return e<.45?Pt:e<.85?wt:e<.95?Et:e<.94?Tt:It}function bp(){noLoop(),Oc.style.display="flex",xe("score").innerHTML="your score: "+nt,_p()}async function _p(){const e=up(wc(xc,"players"),hp("score","desc"),lp(5)),t=await vp(e),n={allScores:[]};t.forEach(r=>{n.allScores.push(r.data())});let s=xe("LB-list");n.allScores.forEach(({username:r,score:i})=>{let o=Cp(r,i);s.appendChild(o)})}function Np(){text("your score = "+nt,width-100,height/25);var e=Dp();mouse.presses()&&new e.Sprite(mouse.x,height/4),et.overlaps(vt,bp)}window.draw=()=>{clear(),Np(),Pt.overlaps(Pt,ct),wt.overlaps(wt,ct),Et.overlaps(Et,ct),Tt.overlaps(Tt,ct),It.overlaps(It,ct),Ut.overlaps(Ut,ct),Bt.overlaps(Bt,ct),$t.overlaps($t,ct),qt.overlaps(qt,ct),jt.overlaps(jt,ct)};
