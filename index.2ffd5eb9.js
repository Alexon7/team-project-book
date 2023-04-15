function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var i={},r={},s=t.parcelRequired7c6;function o(e,t){return function(){return e.apply(t,arguments)}}null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequired7c6=s),s.register("kyEFX",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},r=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.2ffd5eb9.js","1dOrv":"action-against@1x.039ecfd4.png","6S0ag":"action-against@2x.5bea7280.png","5xnxV":"international-medical@1x.e530dbdc.png","c6pyQ":"international-medical@2x.5ad86d69.png","hmBXq":"medicins-sans@1x.84980a7b.png","a7Dxc":"medicins-sans@2x.847f6de1.png","fQ0JQ":"project-hope@1x.963f4a96.png","9Nww8":"project-hope@2x.62aa14d5.png","9QusC":"razom@1x.6dea4c98.png","9LcgG":"razom@2x.1bbc079c.png","fRdSt":"save-the-children@1x.71f41469.png","bblaK":"save-the-children@2x.7ce45758.png","ajSwI":"sergiy-prytula@1x.df69e20a.png","90MaA":"sergiy-prytula@2x.c2636b9d.png","3wbfv":"united24@1x.e2dff383.png","c4rxq":"united24@2x.231c6276.png","49ZoZ":"world-vision@1x.850ac73c.png","kvPik":"world-vision@2x.5681ba10.png","lk5QZ":"index.b4908166.css"}'));const{toString:a}=Object.prototype,{getPrototypeOf:l}=Object,c=(h=Object.create(null),e=>{const t=a.call(e);return h[t]||(h[t]=t.slice(8,-1).toLowerCase())});var h;const u=e=>(e=e.toLowerCase(),t=>c(t)===e),d=e=>t=>typeof t===e,{isArray:p}=Array,f=d("undefined");const g=u("ArrayBuffer");const m=d("string"),_=d("function"),v=d("number"),y=e=>null!==e&&"object"==typeof e,w=e=>{if("object"!==c(e))return!1;const t=l(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=u("Date"),E=u("File"),T=u("Blob"),S=u("FileList"),I=u("URLSearchParams");function C(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,r;if("object"!=typeof e&&(e=[e]),p(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),s=r.length;let o;for(i=0;i<s;i++)o=r[i],t.call(null,e[o],o,e)}}function k(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,r=n.length;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,A=e=>!f(e)&&e!==R;const N=(O="undefined"!=typeof Uint8Array&&l(Uint8Array),e=>O&&e instanceof O);var O;const P=u("HTMLFormElement"),L=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),x=u("RegExp"),D=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};C(n,((n,r)=>{!1!==t(n,r,e)&&(i[r]=n)})),Object.defineProperties(e,i)},M="abcdefghijklmnopqrstuvwxyz",U="0123456789",F={DIGIT:U,ALPHA:M,ALPHA_DIGIT:M+M.toUpperCase()+U};var j={isArray:p,isArrayBuffer:g,isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&_(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||a.call(e)===t||_(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&g(e.buffer),t},isString:m,isNumber:v,isBoolean:e=>!0===e||!1===e,isObject:y,isPlainObject:w,isUndefined:f,isDate:b,isFile:E,isBlob:T,isRegExp:x,isFunction:_,isStream:e=>y(e)&&_(e.pipe),isURLSearchParams:I,isTypedArray:N,isFileList:S,forEach:C,merge:function e(){const{caseless:t}=A(this)&&this||{},n={},i=(i,r)=>{const s=t&&k(n,r)||r;w(n[s])&&w(i)?n[s]=e(n[s],i):w(i)?n[s]=e({},i):p(i)?n[s]=i.slice():n[s]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&C(arguments[e],i);return n},extend:(e,t,n,{allOwnKeys:i}={})=>(C(t,((t,i)=>{n&&_(t)?e[i]=o(t,n):e[i]=t}),{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let r,s,o;const a={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),s=r.length;s-- >0;)o=r[s],i&&!i(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&l(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:c,kindOfTest:u,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if(p(e))return e;let t=e.length;if(!v(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:P,hasOwnProperty:L,hasOwnProp:L,reduceDescriptors:D,freezeMethods:e=>{D(e,((t,n)=>{if(_(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];_(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return p(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:k,global:R,isContextDefined:A,ALPHABET:F,generateString:(e=16,t=F.ALPHA_DIGIT)=>{let n="";const{length:i}=t;for(;e--;)n+=t[Math.random()*i|0];return n},isSpecCompliantForm:function(e){return!!(e&&_(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,i)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const r=p(e)?[]:{};return C(e,((e,t)=>{const s=n(e,i+1);!f(s)&&(r[t]=s)})),t[i]=void 0,r}}return e};return n(e,0)}};function B(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}j.inherits(B,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const H=B.prototype,z={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{z[e]={value:e}})),Object.defineProperties(B,z),Object.defineProperty(H,"isAxiosError",{value:!0}),B.from=(e,t,n,i,r,s)=>{const o=Object.create(H);return j.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),B.call(o,e.message,t,n,i,r),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var q,V,W,G=B,$=null;V=function(e){var t,n,i=ne(e),r=i[0],s=i[1],o=new Q(function(e,t,n){return 3*(t+n)/4-n}(0,r,s)),a=0,l=s>0?r-4:r;for(n=0;n<l;n+=4)t=J[e.charCodeAt(n)]<<18|J[e.charCodeAt(n+1)]<<12|J[e.charCodeAt(n+2)]<<6|J[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=J[e.charCodeAt(n)]<<2|J[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=J[e.charCodeAt(n)]<<10|J[e.charCodeAt(n+1)]<<4|J[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},W=function(e){for(var t,n=e.length,i=n%3,r=[],s=16383,o=0,a=n-i;o<a;o+=s)r.push(ie(e,o,o+s>a?a:o+s));1===i?(t=e[n-1],r.push(X[t>>2]+X[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(X[t>>10]+X[t>>4&63]+X[t<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var K,Y,X=[],J=[],Q="undefined"!=typeof Uint8Array?Uint8Array:Array,Z="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ee=0,te=Z.length;ee<te;++ee)X[ee]=Z[ee],J[Z.charCodeAt(ee)]=ee;function ne(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function ie(e,t,n){for(var i,r,s=[],o=t;o<n;o+=3)i=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(X[(r=i)>>18&63]+X[r>>12&63]+X[r>>6&63]+X[63&r]);return s.join("")}J["-".charCodeAt(0)]=62,J["_".charCodeAt(0)]=63,K=function(e,t,n,i,r){var s,o,a=8*r-i-1,l=(1<<a)-1,c=l>>1,h=-7,u=n?r-1:0,d=n?-1:1,p=e[t+u];for(u+=d,s=p&(1<<-h)-1,p>>=-h,h+=a;h>0;s=256*s+e[t+u],u+=d,h-=8);for(o=s&(1<<-h)-1,s>>=-h,h+=i;h>0;o=256*o+e[t+u],u+=d,h-=8);if(0===s)s=1-c;else{if(s===l)return o?NaN:1/0*(p?-1:1);o+=Math.pow(2,i),s-=c}return(p?-1:1)*o*Math.pow(2,s-i)},Y=function(e,t,n,i,r,s){var o,a,l,c=8*s-r-1,h=(1<<c)-1,u=h>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,p=i?0:s-1,f=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=h):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),(t+=o+u>=1?d/l:d*Math.pow(2,1-u))*l>=2&&(o++,l/=2),o+u>=h?(a=0,o=h):o+u>=1?(a=(t*l-1)*Math.pow(2,r),o+=u):(a=t*Math.pow(2,u-1)*Math.pow(2,r),o=0));r>=8;e[n+p]=255&a,p+=f,a/=256,r-=8);for(o=o<<r|a,c+=r;c>0;e[n+p]=255&o,p+=f,o/=256,c-=8);e[n+p-f]|=128*g};var re="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;q=ae;var se=2147483647;function oe(e){if(e>se)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,ae.prototype),t}function ae(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return he(e)}return le(e,t,n)}function le(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!ae.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var n=0|fe(e,t),i=oe(n),r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Be(e,Uint8Array)){var t=new Uint8Array(e);return de(t.buffer,t.byteOffset,t.byteLength)}return ue(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Be(e,ArrayBuffer)||e&&Be(e.buffer,ArrayBuffer))return de(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Be(e,SharedArrayBuffer)||e&&Be(e.buffer,SharedArrayBuffer)))return de(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return ae.from(i,t,n);var r=function(e){if(ae.isBuffer(e)){var t=0|pe(e.length),n=oe(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||He(e.length)?oe(0):ue(e);if("Buffer"===e.type&&Array.isArray(e.data))return ue(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return ae.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function ce(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function he(e){return ce(e),oe(e<0?0:0|pe(e))}function ue(e){for(var t=e.length<0?0:0|pe(e.length),n=oe(t),i=0;i<t;i+=1)n[i]=255&e[i];return n}function de(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');var i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,ae.prototype),i}function pe(e){if(e>=se)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+se.toString(16)+" bytes");return 0|e}function fe(e,t){if(ae.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Be(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;for(var r=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Ue(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Fe(e).length;default:if(r)return i?-1:Ue(e).length;t=(""+t).toLowerCase(),r=!0}}function ge(e,t,n){var i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ae(this,t,n);case"utf8":case"utf-8":return Ie(this,t,n);case"ascii":return ke(this,t,n);case"latin1":case"binary":return Re(this,t,n);case"base64":return Se(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ne(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function me(e,t,n){var i=e[t];e[t]=e[n],e[n]=i}function _e(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),He(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=ae.from(t,i)),ae.isBuffer(t))return 0===t.length?-1:ve(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):ve(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function ve(e,t,n,i,r){var s,o=1,a=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;o=2,a/=2,l/=2,n/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(r){var h=-1;for(s=n;s<a;s++)if(c(e,s)===c(t,-1===h?0:s-h)){if(-1===h&&(h=s),s-h+1===l)return h*o}else-1!==h&&(s-=s-h),h=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){for(var u=!0,d=0;d<l;d++)if(c(e,s+d)!==c(t,d)){u=!1;break}if(u)return s}return-1}function ye(e,t,n,i){n=Number(n)||0;var r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;var s=t.length;i>s/2&&(i=s/2);for(var o=0;o<i;++o){var a=parseInt(t.substr(2*o,2),16);if(He(a))return o;e[n+o]=a}return o}function we(e,t,n,i){return je(Ue(t,e.length-n),e,n,i)}function be(e,t,n,i){return je(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function Ee(e,t,n,i){return je(Fe(t),e,n,i)}function Te(e,t,n,i){return je(function(e,t){for(var n,i,r,s=[],o=0;o<e.length&&!((t-=2)<0);++o)i=(n=e.charCodeAt(o))>>8,r=n%256,s.push(r),s.push(i);return s}(t,e.length-n),e,n,i)}function Se(e,t,n){return 0===t&&n===e.length?W(e):W(e.slice(t,n))}function Ie(e,t,n){n=Math.min(e.length,n);for(var i=[],r=t;r<n;){var s,o,a,l,c=e[r],h=null,u=c>239?4:c>223?3:c>191?2:1;if(r+u<=n)switch(u){case 1:c<128&&(h=c);break;case 2:128==(192&(s=e[r+1]))&&(l=(31&c)<<6|63&s)>127&&(h=l);break;case 3:s=e[r+1],o=e[r+2],128==(192&s)&&128==(192&o)&&(l=(15&c)<<12|(63&s)<<6|63&o)>2047&&(l<55296||l>57343)&&(h=l);break;case 4:s=e[r+1],o=e[r+2],a=e[r+3],128==(192&s)&&128==(192&o)&&128==(192&a)&&(l=(15&c)<<18|(63&s)<<12|(63&o)<<6|63&a)>65535&&l<1114112&&(h=l)}null===h?(h=65533,u=1):h>65535&&(h-=65536,i.push(h>>>10&1023|55296),h=56320|1023&h),i.push(h),r+=u}return function(e){var t=e.length;if(t<=Ce)return String.fromCharCode.apply(String,e);var n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=Ce));return n}(i)}ae.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),ae.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ae.prototype,"parent",{enumerable:!0,get:function(){if(ae.isBuffer(this))return this.buffer}}),Object.defineProperty(ae.prototype,"offset",{enumerable:!0,get:function(){if(ae.isBuffer(this))return this.byteOffset}}),ae.poolSize=8192,ae.from=function(e,t,n){return le(e,t,n)},Object.setPrototypeOf(ae.prototype,Uint8Array.prototype),Object.setPrototypeOf(ae,Uint8Array),ae.alloc=function(e,t,n){return function(e,t,n){return ce(e),e<=0?oe(e):void 0!==t?"string"==typeof n?oe(e).fill(t,n):oe(e).fill(t):oe(e)}(e,t,n)},ae.allocUnsafe=function(e){return he(e)},ae.allocUnsafeSlow=function(e){return he(e)},ae.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==ae.prototype},ae.compare=function(e,t){if(Be(e,Uint8Array)&&(e=ae.from(e,e.offset,e.byteLength)),Be(t,Uint8Array)&&(t=ae.from(t,t.offset,t.byteLength)),!ae.isBuffer(e)||!ae.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var n=e.length,i=t.length,r=0,s=Math.min(n,i);r<s;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},ae.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ae.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return ae.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var i=ae.allocUnsafe(t),r=0;for(n=0;n<e.length;++n){var s=e[n];if(Be(s,Uint8Array))r+s.length>i.length?ae.from(s).copy(i,r):Uint8Array.prototype.set.call(i,s,r);else{if(!ae.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(i,r)}r+=s.length}return i},ae.byteLength=fe,ae.prototype._isBuffer=!0,ae.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)me(this,t,t+1);return this},ae.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)me(this,t,t+3),me(this,t+1,t+2);return this},ae.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)me(this,t,t+7),me(this,t+1,t+6),me(this,t+2,t+5),me(this,t+3,t+4);return this},ae.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?Ie(this,0,e):ge.apply(this,arguments)},ae.prototype.toLocaleString=ae.prototype.toString,ae.prototype.equals=function(e){if(!ae.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===ae.compare(this,e)},ae.prototype.inspect=function(){var e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},re&&(ae.prototype[re]=ae.prototype.inspect),ae.prototype.compare=function(e,t,n,i,r){if(Be(e,Uint8Array)&&(e=ae.from(e,e.offset,e.byteLength)),!ae.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;for(var s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(t>>>=0),a=Math.min(s,o),l=this.slice(i,r),c=e.slice(t,n),h=0;h<a;++h)if(l[h]!==c[h]){s=l[h],o=c[h];break}return s<o?-1:o<s?1:0},ae.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},ae.prototype.indexOf=function(e,t,n){return _e(this,e,t,n,!0)},ae.prototype.lastIndexOf=function(e,t,n){return _e(this,e,t,n,!1)},ae.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}var r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var s=!1;;)switch(i){case"hex":return ye(this,e,t,n);case"utf8":case"utf-8":return we(this,e,t,n);case"ascii":case"latin1":case"binary":return be(this,e,t,n);case"base64":return Ee(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Te(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},ae.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Ce=4096;function ke(e,t,n){var i="";n=Math.min(e.length,n);for(var r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function Re(e,t,n){var i="";n=Math.min(e.length,n);for(var r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function Ae(e,t,n){var i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);for(var r="",s=t;s<n;++s)r+=ze[e[s]];return r}function Ne(e,t,n){for(var i=e.slice(t,n),r="",s=0;s<i.length-1;s+=2)r+=String.fromCharCode(i[s]+256*i[s+1]);return r}function Oe(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function Pe(e,t,n,i,r,s){if(!ae.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<s)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function Le(e,t,n,i,r,s){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function xe(e,t,n,i,r){return t=+t,n>>>=0,r||Le(e,0,n,4),Y(e,t,n,i,23,4),n+4}function De(e,t,n,i,r){return t=+t,n>>>=0,r||Le(e,0,n,8),Y(e,t,n,i,52,8),n+8}ae.prototype.slice=function(e,t){var n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);var i=this.subarray(e,t);return Object.setPrototypeOf(i,ae.prototype),i},ae.prototype.readUintLE=ae.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Oe(e,t,this.length);for(var i=this[e],r=1,s=0;++s<t&&(r*=256);)i+=this[e+s]*r;return i},ae.prototype.readUintBE=ae.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Oe(e,t,this.length);for(var i=this[e+--t],r=1;t>0&&(r*=256);)i+=this[e+--t]*r;return i},ae.prototype.readUint8=ae.prototype.readUInt8=function(e,t){return e>>>=0,t||Oe(e,1,this.length),this[e]},ae.prototype.readUint16LE=ae.prototype.readUInt16LE=function(e,t){return e>>>=0,t||Oe(e,2,this.length),this[e]|this[e+1]<<8},ae.prototype.readUint16BE=ae.prototype.readUInt16BE=function(e,t){return e>>>=0,t||Oe(e,2,this.length),this[e]<<8|this[e+1]},ae.prototype.readUint32LE=ae.prototype.readUInt32LE=function(e,t){return e>>>=0,t||Oe(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},ae.prototype.readUint32BE=ae.prototype.readUInt32BE=function(e,t){return e>>>=0,t||Oe(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},ae.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Oe(e,t,this.length);for(var i=this[e],r=1,s=0;++s<t&&(r*=256);)i+=this[e+s]*r;return i>=(r*=128)&&(i-=Math.pow(2,8*t)),i},ae.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Oe(e,t,this.length);for(var i=t,r=1,s=this[e+--i];i>0&&(r*=256);)s+=this[e+--i]*r;return s>=(r*=128)&&(s-=Math.pow(2,8*t)),s},ae.prototype.readInt8=function(e,t){return e>>>=0,t||Oe(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},ae.prototype.readInt16LE=function(e,t){e>>>=0,t||Oe(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},ae.prototype.readInt16BE=function(e,t){e>>>=0,t||Oe(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},ae.prototype.readInt32LE=function(e,t){return e>>>=0,t||Oe(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},ae.prototype.readInt32BE=function(e,t){return e>>>=0,t||Oe(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},ae.prototype.readFloatLE=function(e,t){return e>>>=0,t||Oe(e,4,this.length),K(this,e,!0,23,4)},ae.prototype.readFloatBE=function(e,t){return e>>>=0,t||Oe(e,4,this.length),K(this,e,!1,23,4)},ae.prototype.readDoubleLE=function(e,t){return e>>>=0,t||Oe(e,8,this.length),K(this,e,!0,52,8)},ae.prototype.readDoubleBE=function(e,t){return e>>>=0,t||Oe(e,8,this.length),K(this,e,!1,52,8)},ae.prototype.writeUintLE=ae.prototype.writeUIntLE=function(e,t,n,i){(e=+e,t>>>=0,n>>>=0,i)||Pe(this,e,t,n,Math.pow(2,8*n)-1,0);var r=1,s=0;for(this[t]=255&e;++s<n&&(r*=256);)this[t+s]=e/r&255;return t+n},ae.prototype.writeUintBE=ae.prototype.writeUIntBE=function(e,t,n,i){(e=+e,t>>>=0,n>>>=0,i)||Pe(this,e,t,n,Math.pow(2,8*n)-1,0);var r=n-1,s=1;for(this[t+r]=255&e;--r>=0&&(s*=256);)this[t+r]=e/s&255;return t+n},ae.prototype.writeUint8=ae.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,1,255,0),this[t]=255&e,t+1},ae.prototype.writeUint16LE=ae.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},ae.prototype.writeUint16BE=ae.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},ae.prototype.writeUint32LE=ae.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},ae.prototype.writeUint32BE=ae.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ae.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){var r=Math.pow(2,8*n-1);Pe(this,e,t,n,r-1,-r)}var s=0,o=1,a=0;for(this[t]=255&e;++s<n&&(o*=256);)e<0&&0===a&&0!==this[t+s-1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+n},ae.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){var r=Math.pow(2,8*n-1);Pe(this,e,t,n,r-1,-r)}var s=n-1,o=1,a=0;for(this[t+s]=255&e;--s>=0&&(o*=256);)e<0&&0===a&&0!==this[t+s+1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+n},ae.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},ae.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},ae.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},ae.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},ae.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ae.prototype.writeFloatLE=function(e,t,n){return xe(this,e,t,!0,n)},ae.prototype.writeFloatBE=function(e,t,n){return xe(this,e,t,!1,n)},ae.prototype.writeDoubleLE=function(e,t,n){return De(this,e,t,!0,n)},ae.prototype.writeDoubleBE=function(e,t,n){return De(this,e,t,!1,n)},ae.prototype.copy=function(e,t,n,i){if(!ae.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);var r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},ae.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!ae.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){var r=e.charCodeAt(0);("utf8"===i&&r<128||"latin1"===i)&&(e=r)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var s;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(s=t;s<n;++s)this[s]=e;else{var o=ae.isBuffer(e)?e:ae.from(e,i),a=o.length;if(0===a)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<n-t;++s)this[s+t]=o[s%a]}return this};var Me=/[^+/0-9A-Za-z-_]/g;function Ue(e,t){var n;t=t||1/0;for(var i=e.length,r=null,s=[],o=0;o<i;++o){if((n=e.charCodeAt(o))>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(t-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function Fe(e){return V(function(e){if((e=(e=e.split("=")[0]).trim().replace(Me,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function je(e,t,n,i){for(var r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function Be(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function He(e){return e!=e}var ze=function(){for(var e="0123456789abcdef",t=new Array(256),n=0;n<16;++n)for(var i=16*n,r=0;r<16;++r)t[i+r]=e[n]+e[r];return t}(),qe=q;function Ve(e){return j.isPlainObject(e)||j.isArray(e)}function We(e){return j.endsWith(e,"[]")?e.slice(0,-2):e}function Ge(e,t,n){return e?e.concat(t).map((function(e,t){return e=We(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const $e=j.toFlatObject(j,{},null,(function(e){return/^is[A-Z]/.test(e)}));var Ke=function(e,t,n){if(!j.isObject(e))throw new TypeError("target must be an object");t=t||new($||FormData);const i=(n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!j.isUndefined(t[e])}))).metaTokens,r=n.visitor||c,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&j.isSpecCompliantForm(t);if(!j.isFunction(r))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(j.isDate(e))return e.toISOString();if(!a&&j.isBlob(e))throw new G("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(e)||j.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):qe.from(e):e}function c(e,n,r){let a=e;if(e&&!r&&"object"==typeof e)if(j.endsWith(n,"{}"))n=i?n:n.slice(0,-2),e=JSON.stringify(e);else if(j.isArray(e)&&function(e){return j.isArray(e)&&!e.some(Ve)}(e)||(j.isFileList(e)||j.endsWith(n,"[]"))&&(a=j.toArray(e)))return n=We(n),a.forEach((function(e,i){!j.isUndefined(e)&&null!==e&&t.append(!0===o?Ge([n],i,s):null===o?n:n+"[]",l(e))})),!1;return!!Ve(e)||(t.append(Ge(r,n,s),l(e)),!1)}const h=[],u=Object.assign($e,{defaultVisitor:c,convertValue:l,isVisitable:Ve});if(!j.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!j.isUndefined(n)){if(-1!==h.indexOf(n))throw Error("Circular reference detected in "+i.join("."));h.push(n),j.forEach(n,(function(n,s){!0===(!(j.isUndefined(n)||null===n)&&r.call(t,n,j.isString(s)?s.trim():s,i,u))&&e(n,i?i.concat(s):[s])})),h.pop()}}(e),t};function Ye(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Xe(e,t){this._pairs=[],e&&Ke(e,this,t)}const Je=Xe.prototype;Je.append=function(e,t){this._pairs.push([e,t])},Je.toString=function(e){const t=e?function(t){return e.call(this,t,Ye)}:Ye;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Qe=Xe;function Ze(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function et(e,t,n){if(!t)return e;const i=n&&n.encode||Ze,r=n&&n.serialize;let s;if(s=r?r(t,n):j.isURLSearchParams(t)?t.toString():new Qe(t,n).toString(i),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var tt=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){j.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},nt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var it={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Qe,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function rt(e,t){return Ke(e,new it.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return it.isNode&&j.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}var st=function(e){function t(e,n,i,r){let s=e[r++];const o=Number.isFinite(+s),a=r>=e.length;if(s=!s&&j.isArray(i)?i.length:s,a)return j.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&j.isObject(i[s])||(i[s]=[]);return t(e,n,i[s],r)&&j.isArray(i[s])&&(i[s]=function(e){const t={},n=Object.keys(e);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],t[s]=e[s];return t}(i[s])),!o}if(j.isFormData(e)&&j.isFunction(e.entries)){const n={};return j.forEachEntry(e,((e,i)=>{t(function(e){return j.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null};const ot={"Content-Type":void 0};const at={transitional:nt,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,r=j.isObject(e);r&&j.isHTMLForm(e)&&(e=new FormData(e));if(j.isFormData(e))return i&&i?JSON.stringify(st(e)):e;if(j.isArrayBuffer(e)||j.isBuffer(e)||j.isStream(e)||j.isFile(e)||j.isBlob(e))return e;if(j.isArrayBufferView(e))return e.buffer;if(j.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return rt(e,this.formSerializer).toString();if((s=j.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Ke(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return r||i?(t.setContentType("application/json",!1),function(e,t,n){if(j.isString(e))try{return(t||JSON.parse)(e),j.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||at.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&j.isString(e)&&(n&&!this.responseType||i)){const n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw G.from(e,G.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:it.classes.FormData,Blob:it.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};j.forEach(["delete","get","head"],(function(e){at.headers[e]={}})),j.forEach(["post","put","patch"],(function(e){at.headers[e]=j.merge(ot)}));var lt=at;const ct=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var ht=e=>{const t={};let n,i,r;return e&&e.split("\n").forEach((function(e){r=e.indexOf(":"),n=e.substring(0,r).trim().toLowerCase(),i=e.substring(r+1).trim(),!n||t[n]&&ct[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t};const ut=Symbol("internals");function dt(e){return e&&String(e).trim().toLowerCase()}function pt(e){return!1===e||null==e?e:j.isArray(e)?e.map(pt):String(e)}function ft(e,t,n,i,r){return j.isFunction(i)?i.call(this,t,n):(r&&(t=n),j.isString(t)?j.isString(i)?-1!==t.indexOf(i):j.isRegExp(i)?i.test(t):void 0:void 0)}class gt{constructor(e){e&&this.set(e)}set(e,t,n){const i=this;function r(e,t,n){const r=dt(t);if(!r)throw new Error("header name must be a non-empty string");const s=j.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||t]=pt(e))}const s=(e,t)=>j.forEach(e,((e,n)=>r(e,n,t)));return j.isPlainObject(e)||e instanceof this.constructor?s(e,t):j.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s(ht(e),t):null!=e&&r(t,e,n),this}get(e,t){if(e=dt(e)){const n=j.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if(j.isFunction(t))return t.call(this,e,n);if(j.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=dt(e)){const n=j.findKey(this,e);return!(!n||void 0===this[n]||t&&!ft(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function r(e){if(e=dt(e)){const r=j.findKey(n,e);!r||t&&!ft(0,n[r],r,t)||(delete n[r],i=!0)}}return j.isArray(e)?e.forEach(r):r(e),i}clear(e){const t=Object.keys(this);let n=t.length,i=!1;for(;n--;){const r=t[n];e&&!ft(0,this[r],r,e,!0)||(delete this[r],i=!0)}return i}normalize(e){const t=this,n={};return j.forEach(this,((i,r)=>{const s=j.findKey(n,r);if(s)return t[s]=pt(i),void delete t[r];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete t[r],t[o]=pt(i),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return j.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&j.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[ut]=this[ut]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=dt(e);t[i]||(!function(e,t){const n=j.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[i]=!0)}return j.isArray(e)?e.forEach(i):i(e),this}}gt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),j.freezeMethods(gt.prototype),j.freezeMethods(gt);var mt=gt;function _t(e,t){const n=this||lt,i=t||n,r=mt.from(i.headers);let s=i.data;return j.forEach(e,(function(e){s=e.call(n,s,r.normalize(),t?t.status:void 0)})),r.normalize(),s}function vt(e){return!(!e||!e.__CANCEL__)}function yt(e,t,n){G.call(this,null==e?"canceled":e,G.ERR_CANCELED,t,n),this.name="CanceledError"}j.inherits(yt,G,{__CANCEL__:!0});var wt=yt;function bt(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new G("Request failed with status code "+n.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var Et=it.isStandardBrowserEnv?{write:function(e,t,n,i,r,s){const o=[];o.push(e+"="+encodeURIComponent(t)),j.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),j.isString(i)&&o.push("path="+i),j.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Tt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function St(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?Tt(e,t):t}var It=it.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=j.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Ct(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var kt=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=i[o];r||(r=l),n[s]=a,i[s]=l;let h=o,u=0;for(;h!==s;)u+=n[h++],h%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-r<t)return;const d=c&&l-c;return d?Math.round(1e3*u/d):void 0}};function Rt(e,t){let n=0;const i=kt(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,l=i(a);n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:r};c[t?"download":"upload"]=!0,e(c)}}var At="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let i=e.data;const r=mt.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}j.isFormData(i)&&(it.isStandardBrowserEnv||it.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";r.set("Authorization","Basic "+btoa(t+":"+n))}const c=St(e.baseURL,e.url);function h(){if(!l)return;const i=mt.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());bt((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:i,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),et(c,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(h)},l.onabort=function(){l&&(n(new G("Request aborted",G.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new G("Network Error",G.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||nt;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new G(t,i.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,e,l)),l=null},it.isStandardBrowserEnv){const t=(e.withCredentials||It(c))&&e.xsrfCookieName&&Et.read(e.xsrfCookieName);t&&r.set(e.xsrfHeaderName,t)}void 0===i&&r.setContentType(null),"setRequestHeader"in l&&j.forEach(r.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),j.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),s&&"json"!==s&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",Rt(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",Rt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{l&&(n(!t||t.type?new wt(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const u=Ct(c);u&&-1===it.protocols.indexOf(u)?n(new G("Unsupported protocol "+u+":",G.ERR_BAD_REQUEST,e)):l.send(i||null)}))};const Nt={http:$,xhr:At};j.forEach(Nt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var Ot={getAdapter:e=>{e=j.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let r=0;r<t&&(n=e[r],!(i=j.isString(n)?Nt[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new G(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(j.hasOwnProp(Nt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!j.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:Nt};function Pt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new wt(null,e)}function Lt(e){Pt(e),e.headers=mt.from(e.headers),e.data=_t.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Ot.getAdapter(e.adapter||lt.adapter)(e).then((function(t){return Pt(e),t.data=_t.call(e,e.transformResponse,t),t.headers=mt.from(t.headers),t}),(function(t){return vt(t)||(Pt(e),t&&t.response&&(t.response.data=_t.call(e,e.transformResponse,t.response),t.response.headers=mt.from(t.response.headers))),Promise.reject(t)}))}const xt=e=>e instanceof mt?e.toJSON():e;function Dt(e,t){t=t||{};const n={};function i(e,t,n){return j.isPlainObject(e)&&j.isPlainObject(t)?j.merge.call({caseless:n},e,t):j.isPlainObject(t)?j.merge({},t):j.isArray(t)?t.slice():t}function r(e,t,n){return j.isUndefined(t)?j.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function s(e,t){if(!j.isUndefined(t))return i(void 0,t)}function o(e,t){return j.isUndefined(t)?j.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function a(n,r,s){return s in t?i(n,r):s in e?i(void 0,n):void 0}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>r(xt(e),xt(t),!0)};return j.forEach(Object.keys(e).concat(Object.keys(t)),(function(i){const s=l[i]||r,o=s(e[i],t[i],i);j.isUndefined(o)&&s!==a||(n[i]=o)})),n}const Mt="1.3.5",Ut={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Ut[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Ft={};Ut.transitional=function(e,t,n){function i(e,t){return"[Axios v1.3.5] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,s)=>{if(!1===e)throw new G(i(r," has been removed"+(t?" in "+t:"")),G.ERR_DEPRECATED);return t&&!Ft[r]&&(Ft[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}};var jt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let r=i.length;for(;r-- >0;){const s=i[r],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new G("option "+s+" must be "+n,G.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new G("Unknown option "+s,G.ERR_BAD_OPTION)}},validators:Ut};const Bt=jt.validators;class Ht{constructor(e){this.defaults=e,this.interceptors={request:new tt,response:new tt}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Dt(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:r}=t;let s;void 0!==n&&jt.assertOptions(n,{silentJSONParsing:Bt.transitional(Bt.boolean),forcedJSONParsing:Bt.transitional(Bt.boolean),clarifyTimeoutError:Bt.transitional(Bt.boolean)},!1),null!=i&&(j.isFunction(i)?t.paramsSerializer={serialize:i}:jt.assertOptions(i,{encode:Bt.function,serialize:Bt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=r&&j.merge(r.common,r[t.method]),s&&j.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete r[e]})),t.headers=mt.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let h,u=0;if(!a){const e=[Lt.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,l),h=e.length,c=Promise.resolve(t);u<h;)c=c.then(e[u++],e[u++]);return c}h=o.length;let d=t;for(u=0;u<h;){const e=o[u++],t=o[u++];try{d=e(d)}catch(e){t.call(this,e);break}}try{c=Lt.call(this,d)}catch(e){return Promise.reject(e)}for(u=0,h=l.length;u<h;)c=c.then(l[u++],l[u++]);return c}getUri(e){return et(St((e=Dt(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}j.forEach(["delete","get","head","options"],(function(e){Ht.prototype[e]=function(t,n){return this.request(Dt(n||{},{method:e,url:t,data:(n||{}).data}))}})),j.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(Dt(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}Ht.prototype[e]=t(),Ht.prototype[e+"Form"]=t(!0)}));var zt=Ht;class qt{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,i,r){n.reason||(n.reason=new wt(e,i,r),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new qt((function(t){e=t})),cancel:e}}}var Vt=qt;const Wt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Wt).forEach((([e,t])=>{Wt[t]=e}));var Gt=Wt;const $t=function e(t){const n=new zt(t),i=o(zt.prototype.request,n);return j.extend(i,zt.prototype,n,{allOwnKeys:!0}),j.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return e(Dt(t,n))},i}(lt);$t.Axios=zt,$t.CanceledError=wt,$t.CancelToken=Vt,$t.isCancel=vt,$t.VERSION=Mt,$t.toFormData=Ke,$t.AxiosError=G,$t.Cancel=$t.CanceledError,$t.all=function(e){return Promise.all(e)},$t.spread=function(e){return function(t){return e.apply(null,t)}},$t.isAxiosError=function(e){return j.isObject(e)&&!0===e.isAxiosError},$t.mergeConfig=Dt,$t.AxiosHeaders=mt,$t.formToJSON=e=>st(j.isHTMLForm(e)?new FormData(e):e),$t.HttpStatusCode=Gt,$t.default=$t;var Kt=$t;const{Axios:Yt,AxiosError:Xt,CanceledError:Jt,isCancel:Qt,CancelToken:Zt,VERSION:en,all:tn,Cancel:nn,isAxiosError:rn,spread:sn,toFormData:on,AxiosHeaders:an,HttpStatusCode:ln,formToJSON:cn,mergeConfig:hn}=Kt,un=Kt.create({baseURL:"https://books-backend.p.goit.global/books/"});
//! ========= З використанням async - await ===========
class dn{async getCategories(){try{return(await un.get("category-list")).data}catch(e){console.error(e)}}async getBooksByCategories(e){try{return(await un.get("category",{params:{category:e}})).data}catch(e){console.error(e)}}async getBooksTop(){try{return(await un.get("top-books")).data}catch(e){console.error(e)}}async getBooksById(e){try{return(await un.get(`${e}`)).data}catch(e){console.error(e)}}}(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),i=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open");bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",i),n.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),document.querySelectorAll(".mobile-nav__link, .desktop-nav__link").forEach((e=>{e.getAttribute("href")==window.location.pathname?e.classList.add("current"):e.classList.remove("current")}));const pn=document.querySelector(".auth"),fn=document.querySelector(".auth__backdrop");pn.addEventListener("click",(()=>{fn.classList.remove("is-hidden")}));var gn={};gn=function e(t,n,i){function r(o,a){if(!n[o]){if(!t[o]){var l=void 0;if(!a&&l)return l(o,!0);if(s)return s(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var h=n[o]={exports:{}};t[o][0].call(h.exports,(function(e){return r(t[o][1][e]||e)}),h,h.exports,e,t,n,i)}return n[o].exports}for(var s=void 0,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},s=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=s,n.create=function(e,t){var n=function(e,t){var n=i('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),s=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return s.appendChild(e)}));var o=r(s,"IMG"),a=r(s,"VIDEO"),l=r(s,"IFRAME");return!0===o&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(i(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),o=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===s(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&o()}));var a={element:function(){return n},visible:function(){return s(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:o};return a}},{}]},{},[1])(1);const mn=async e=>{const t=gn.create(e,{onShow:e=>{e.element().querySelector(".close-icon").onclick=e.close,window.addEventListener("keydown",n)},onClose:()=>{localStorage.removeItem("openInfoBook"),window.removeEventListener("keydown",n)}});function n(e){"Escape"===e.code&&t.close()}t.show()},_n=new dn,vn=async e=>{const t=await _n.getBooksById(e);console.log(t),localStorage.setItem("openInfoBook",JSON.stringify(t));const n=`\n  <div class="book-modal">\n     <svg class="close-icon" width="24" height="24">\n             <use href="../images/sprite.svg#close-btn"></use>\n      </svg>\n    <div class="book-modal__content">\n     <div class="book-modal__book">\n      <img\n      src = ${(i=t).book_image}\n        class="book-modal__img"\n        alt="о книге"\n        loading="lazy"\n       \n       />\n      <div>\n      <div class="book-modal__text">\n\n        <h4 class="book-modal__title">${i.title}</h4>\n        <h4 class="book-modal__author">${i.author}</h4>\n        <p class="book-modal__description">${i.description}</p>\n\n      </div>\n      <div class="book-modal__links">\n        <a class="modal-book__link" href="">\n              <img\n              class="book-modal__link amazon"\n              src="../images/Amazon.png"\n              alt="Shop logo"\n  \n            />\n        </a>\n        <a class="modal-book__link" href="">\n              <img\n              class="book-modal__link bookshop"\n              src="../images/Bookshop.png"\n              alt="Shop logo"\n            />\n        </a>\n        <a class="modal-book__link" href="">\n              <img\n              class="book-modal__link applebooks"\n              src="../images/Apple Books.png"\n              alt="Shop logo"\n            />\n        </a>\n      </div>\n      </div>\n     </div>\n     <button class="modal-book__button btnAdd active" type="button">Add to shopping list</button>\n     <div class="btnRemove-wrapper btnRemove">\n         <button class="modal-book__button" type="button">Remove from shopping list</button>\n         <p class="button-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>\n     </div>\n\n    </div>\n  </div>\n    `;var i;mn(n);const r=()=>{btnRemoveBookFromShoppingList.classList.remove("active"),btnAddBookToShoppingList.classList.add("active")},s=()=>{btnAddBookToShoppingList.classList.remove("active"),btnRemoveBookFromShoppingList.classList.add("active")};shoppingBooks.find((e=>e._id===openBook._id))?s():r(),btnAddBookToShoppingList.addEventListener("click",(e=>{const t=JSON.parse(localStorage.getItem("openInfoBook")),n=JSON.parse(localStorage.getItem("shoppingList")),i=n?[...n,t]:[t];localStorage.setItem("shoppingList",JSON.stringify(i)),s()})),btnRemoveBookFromShoppingList.addEventListener("click",(e=>{const t=JSON.parse(localStorage.getItem("openInfoBook")),n=JSON.parse(localStorage.getItem("shoppingList")).filter((e=>e._id!==t._id));localStorage.setItem("shoppingList",JSON.stringify(n)),r(),renderDescBooks()}))},yn={book_card__title:document.querySelector(".book-card__title"),list_name:document.querySelector(".book-card__category-subtitle"),galleryContainer:document.querySelector(".book-card__list"),book:document.querySelector(".book-card"),bookName:document.querySelector(".book-card__name"),body:document.querySelector("body"),booksList:document.querySelector(".booksList"),categoriesEl:document.querySelector(".book-categories__list")},wn=new dn;En();let bn=window.innerWidth;async function En(){let e=window.innerWidth,t=1;t=e<768?1:e>767&&e<1440?3:5;let n=await wn.getBooksTop();console.log("bestsellersBooks",n),n=n.map((e=>({...e,books:e.books.slice(0,t)}))),console.log("booksList",yn.galleryContainer),yn.galleryContainer.innerHTML=await function(e){console.log("renderBestsellersBooksList(data)",e);const t=e.map((e=>`\n          <li class="bestsellers-typeBooks">\n          <h3 class="title">${e.list_name}</h3>\n      \n            <ul class="booksList"> \n            ${e.books.map((t=>function(e,t){return`\n     <li class="book-card__item" >\n      <a class="book-card__link" href="#">\n          <div class="book-card__wrapper" data-type="${t.list_name}">\n              <img\n              class="book-card__image"\n              src="${e.book_image?e.book_image:""}"\n              alt="${e.title}"\n              loading="lazy"\n              data-id="${e._id}"\n              />\n              <div class="book-card__overlay">\n              <p class="book-card__quick-view-text">quick view</p>\n          </div>\n          </div>\n      </a>\n           <div class="book-card__wrap">\n            <h3 class="book-card__name">${e.title.length>14?e.title.slice(0,14)+"...":e.title}</h3>\n            <p class="book-card__author">${e.author.length>28?e.author.slice(0,28)+"...":e.author} </p>\n          </div>\n   \n     </li>`}(t,e))).join("")}\n            </ul>\n            \n          <div class="btnBox">\n          <button class="book-card__btn" type="button" data-category="${e.list_name}">see more</button>\n            </li>`)).join("");return console.log("refs.galleryContainer в букс",yn.galleryContainer),t}(n);const i=document.querySelectorAll(".book-card__btn");console.log("seeMoreBtn",i),i.forEach((e=>{e.addEventListener("click",(function(e){Sn(e.target.dataset.category.trim())}))}))}addEventListener("resize",(e=>{(window.innerWidth>767&&bn<768||window.innerWidth>1439&&bn<1440||window.innerWidth<1440&&bn>1439||window.innerWidth<768&&bn>767)&&location.reload()})),yn.galleryContainer.addEventListener("click",In);const Tn=new dn;async function Sn(e){const t=await Tn.getBooksByCategories(e);console.log(t),yn.book_card__title.textContent=`${e}`,t.length>0?yn.galleryContainer.innerHTML=`\n      ${t.map((e=>`\n     <li class="book-card__item" >\n      <a class="book-card__link" href="#">\n          <div class="book-card__wrapper"   data-type="${e.list_name}">\n              <img\n              class="book-card__image"\n              src="${e.book_image?e.book_image:""}"\n              alt="${e.title}"\n              loading="lazy"\n              data-id="${e._id}"\n              />\n              <div class="book-card__overlay">\n              <p class="book-card__quick-view-text">quick view</p>\n          </div>\n          </div>\n      </a>\n           <div class="book-card__wrap">\n            <h3 class="book-card__name">${e.title.length>14?e.title.slice(0,14)+"...":e.title}</h3>\n            <p class="book-card__author">${e.author.length>28?e.author.slice(0,28)+"...":e.author} </p>\n          </div>\n\n     </li>`)).join("")}\n      `:yn.galleryContainer.innerHTML="<p>Not found</p>"}function In(e){if(e.preventDefault(),"IMG"!==e.target.nodeName)return;const t=e.target.dataset.id;vn(t)}
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
 */console.log("galleryContainer",yn.galleryContainer),yn.galleryContainer.addEventListener("click",In);var Cn,kn,Rn={},An=Rn={};function Nn(){throw new Error("setTimeout has not been defined")}function On(){throw new Error("clearTimeout has not been defined")}function Pn(e){if(Cn===setTimeout)return setTimeout(e,0);if((Cn===Nn||!Cn)&&setTimeout)return Cn=setTimeout,setTimeout(e,0);try{return Cn(e,0)}catch(t){try{return Cn.call(null,e,0)}catch(t){return Cn.call(this,e,0)}}}!function(){try{Cn="function"==typeof setTimeout?setTimeout:Nn}catch(e){Cn=Nn}try{kn="function"==typeof clearTimeout?clearTimeout:On}catch(e){kn=On}}();var Ln,xn=[],Dn=!1,Mn=-1;function Un(){Dn&&Ln&&(Dn=!1,Ln.length?xn=Ln.concat(xn):Mn=-1,xn.length&&Fn())}function Fn(){if(!Dn){var e=Pn(Un);Dn=!0;for(var t=xn.length;t;){for(Ln=xn,xn=[];++Mn<t;)Ln&&Ln[Mn].run();Mn=-1,t=xn.length}Ln=null,Dn=!1,function(e){if(kn===clearTimeout)return clearTimeout(e);if((kn===On||!kn)&&clearTimeout)return kn=clearTimeout,clearTimeout(e);try{return kn(e)}catch(t){try{return kn.call(null,e)}catch(t){return kn.call(this,e)}}}(e)}}function jn(e,t){this.fun=e,this.array=t}function Bn(){}An.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];xn.push(new jn(e,t)),1!==xn.length||Dn||Pn(Fn)},jn.prototype.run=function(){this.fun.apply(null,this.array)},An.title="browser",An.browser=!0,An.env={},An.argv=[],An.version="",An.versions={},An.on=Bn,An.addListener=Bn,An.once=Bn,An.off=Bn,An.removeListener=Bn,An.removeAllListeners=Bn,An.emit=Bn,An.prependListener=Bn,An.prependOnceListener=Bn,An.listeners=function(e){return[]},An.binding=function(e){throw new Error("process.binding is not supported")},An.cwd=function(){return"/"},An.chdir=function(e){throw new Error("process.chdir is not supported")},An.umask=function(){return 0};const Hn=!1,zn=!1,qn="${JSCORE_VERSION}",Vn=function(e,t){if(!e)throw Wn(t)},Wn=function(e){return new Error("Firebase Database ("+qn+") INTERNAL ASSERT FAILED: "+e)},Gn=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},$n={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,h=(3&r)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Gn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new Kn;const l=r<<2|s>>4;if(i.push(l),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class Kn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yn=function(e){const t=Gn(e);return $n.encodeByteArray(t,!0)},Xn=function(e){return Yn(e).replace(/\./g,"")},Jn=function(e){try{return $n.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
 */
function Qn(e){return Zn(void 0,e)}function Zn(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Zn(e[n],t[n]));return e}
/**
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
 */
const ei=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ti=()=>{try{return ei()||(()=>{if(void 0===Rn||void 0===Rn.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Jn(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},ni=e=>{var t,n;return null===(n=null===(t=ti())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ii=()=>{var e;return null===(e=ti())||void 0===e?void 0:e.config},ri=e=>{var t;return null===(t=ti())||void 0===t?void 0:t[`_${e}`]};
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
 */
class si{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */
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
 */
function oi(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ai(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(oi())}function li(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function ci(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function hi(){const e=oi();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ui(){return!0===Hn||!0===zn}function di(){try{return"object"==typeof indexedDB}catch(e){return!1}}class pi extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,pi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fi.prototype.create)}}class fi{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(gi,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new pi(i,o,n)}}const gi=/\{\$([^}]+)}/g;
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
 */function mi(e){return JSON.parse(e)}function _i(e){return JSON.stringify(e)}
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
 */const vi=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=mi(Jn(s[0])||""),n=mi(Jn(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},yi=function(e){const t=vi(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},wi=function(e){const t=vi(e).claims;return"object"==typeof t&&!0===t.admin};
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
 */
function bi(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ei(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Ti(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Si(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function Ii(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(Ci(n)&&Ci(s)){if(!Ii(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function Ci(e){return null!==e&&"object"==typeof e}
/**
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
 */
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
 */
function ki(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Ri(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function Ai(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class Ni{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),r=1518500249):(i=o^a^l,r=1859775393):e<60?(i=o&a|l&(o|a),r=2400959708):(i=o^a^l,r=3395469782);const t=(s<<5|s>>>27)+i+c+r+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function Oi(e,t){const n=new Pi(e,t);return n.subscribe.bind(n)}class Pi{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=Li),void 0===i.error&&(i.error=Li),void 0===i.complete&&(i.complete=Li);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Li(){}
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
 */function xi(e,t){return`${e} failed: ${t} argument `}
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
 */
const Di=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,Vn(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},Mi=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
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
 */
function Ui(e){return e&&e._delegate?e._delegate:e}class Fi{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const ji="[DEFAULT]";
/**
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
 */class Bi{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new si;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:ji})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=ji){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=ji){return this.instances.has(e)}getOptions(e=ji){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===ji?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e=ji){return this.component?this.component.multipleInstances?e:ji:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Hi{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Bi(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */const zi=[];var qi,Vi;(Vi=qi||(qi={}))[Vi.DEBUG=0]="DEBUG",Vi[Vi.VERBOSE=1]="VERBOSE",Vi[Vi.INFO=2]="INFO",Vi[Vi.WARN=3]="WARN",Vi[Vi.ERROR=4]="ERROR",Vi[Vi.SILENT=5]="SILENT";const Wi={debug:qi.DEBUG,verbose:qi.VERBOSE,info:qi.INFO,warn:qi.WARN,error:qi.ERROR,silent:qi.SILENT},Gi=qi.INFO,$i={[qi.DEBUG]:"log",[qi.VERBOSE]:"log",[qi.INFO]:"info",[qi.WARN]:"warn",[qi.ERROR]:"error"},Ki=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=$i[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Yi{constructor(e){this.name=e,this._logLevel=Gi,this._logHandler=Ki,this._userLogHandler=null,zi.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in qi))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Wi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,qi.DEBUG,...e),this._logHandler(this,qi.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,qi.VERBOSE,...e),this._logHandler(this,qi.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,qi.INFO,...e),this._logHandler(this,qi.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,qi.WARN,...e),this._logHandler(this,qi.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,qi.ERROR,...e),this._logHandler(this,qi.ERROR,...e)}}const Xi=(e,t)=>t.some((t=>e instanceof t));let Ji,Qi;const Zi=new WeakMap,er=new WeakMap,tr=new WeakMap,nr=new WeakMap,ir=new WeakMap;let rr={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return er.get(e);if("objectStoreNames"===t)return e.objectStoreNames||tr.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ar(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function sr(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Qi||(Qi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(lr(this),t),ar(Zi.get(this))}:function(...t){return ar(e.apply(lr(this),t))}:function(t,...n){const i=e.call(lr(this),t,...n);return tr.set(i,t.sort?t.sort():[t]),ar(i)}}function or(e){return"function"==typeof e?sr(e):(e instanceof IDBTransaction&&function(e){if(er.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));er.set(e,t)}(e),Xi(e,Ji||(Ji=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,rr):e)}function ar(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(ar(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Zi.set(t,e)})).catch((()=>{})),ir.set(t,e),t}(e);if(nr.has(e))return nr.get(e);const t=or(e);return t!==e&&(nr.set(e,t),ir.set(t,e)),t}const lr=e=>ir.get(e);function cr(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=ar(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(ar(o.result),e.oldVersion,e.newVersion,ar(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const hr=["get","getKey","getAll","getAllKeys","count"],ur=["put","add","delete","clear"],dr=new Map;function pr(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(dr.get(t))return dr.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=ur.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!hr.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return dr.set(t,s),s}rr=(e=>({...e,get:(t,n,i)=>pr(t,n)||e.get(t,n,i),has:(t,n)=>!!pr(t,n)||e.has(t,n)}))(rr);
/**
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
 */
class fr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const gr="@firebase/app",mr="0.9.7",_r=new Yi("@firebase/app"),vr="[DEFAULT]",yr={[gr]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},wr=new Map,br=new Map;function Er(e,t){try{e.container.addComponent(t)}catch(n){_r.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Tr(e){const t=e.name;if(br.has(t))return _r.debug(`There were multiple attempts to register component ${t}.`),!1;br.set(t,e);for(const t of wr.values())Er(t,e);return!0}function Sr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
const Ir=new fi("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
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
 */
class Cr{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Fi("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}
/**
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
 */const kr="9.19.1";function Rr(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:vr,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw Ir.create("bad-app-name",{appName:String(r)});if(n||(n=ii()),!n)throw Ir.create("no-options");const s=wr.get(r);if(s){if(Ii(n,s.options)&&Ii(i,s.config))return s;throw Ir.create("duplicate-app",{appName:r})}const o=new Hi(r);for(const e of br.values())o.addComponent(e);const a=new Cr(n,i,o);return wr.set(r,a),a}function Ar(e=vr){const t=wr.get(e);if(!t&&e===vr)return Rr();if(!t)throw Ir.create("no-app",{appName:e});return t}function Nr(e,t,n){var i;let r=null!==(i=yr[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void _r.warn(e.join(" "))}Tr(new Fi(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
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
 */
const Or="firebase-heartbeat-database",Pr=1,Lr="firebase-heartbeat-store";let xr=null;function Dr(){return xr||(xr=cr(Or,Pr,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Lr)}}).catch((e=>{throw Ir.create("idb-open",{originalErrorMessage:e.message})}))),xr}async function Mr(e,t){try{const n=(await Dr()).transaction(Lr,"readwrite"),i=n.objectStore(Lr);return await i.put(t,Ur(e)),n.done}catch(e){if(e instanceof pi)_r.warn(e.message);else{const t=Ir.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});_r.warn(t.message)}}}function Ur(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class Fr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Br(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=jr();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=jr(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Hr(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Hr(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=Xn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function jr(){return(new Date).toISOString().substring(0,10)}class Br{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!di()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await Dr()).transaction(Lr).objectStore(Lr).get(Ur(e))}catch(e){if(e instanceof pi)_r.warn(e.message);else{const t=Ir.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});_r.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Mr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Mr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Hr(e){return Xn(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */var zr;zr="",Tr(new Fi("platform-logger",(e=>new fr(e)),"PRIVATE")),Tr(new Fi("heartbeat",(e=>new Fr(e)),"PRIVATE")),Nr(gr,mr,zr),Nr(gr,mr,"esm2017"),Nr("fire-js","");
/**
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
 */
Nr("firebase","9.19.1","app");function qr(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function Vr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wr=Vr,Gr=new fi("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),$r={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},Kr=new Yi("@firebase/auth");function Yr(e,...t){Kr.logLevel<=qi.ERROR&&Kr.error(`Auth (${kr}): ${e}`,...t)}
/**
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
 */function Xr(e,...t){throw Zr(e,...t)}function Jr(e,...t){return Zr(e,...t)}function Qr(e,t,n){const i=Object.assign(Object.assign({},Wr()),{[t]:n});return new fi("auth","Firebase",i).create(t,{appName:e.name})}function Zr(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Gr.create(e,...t)}function es(e,t,...n){if(!e)throw Zr(t,...n)}function ts(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Yr(t),new Error(t)}function ns(e,t){e||ts(t)}
/**
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
 */const is=new Map;function rs(e){ns(e instanceof Function,"Expected a class definition");let t=is.get(e);return t?(ns(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,is.set(e,t),t)}
/**
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
 */
/**
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
 */
function ss(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function os(){return"http:"===as()||"https:"===as()}function as(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function ls(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(os()||li()||"connection"in navigator))||navigator.onLine}
/**
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
 */
class cs{constructor(e,t){this.shortDelay=e,this.longDelay=t,ns(t>e,"Short delay should be less than long delay!"),this.isMobile=ai()||ci()}get(){return ls()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function hs(e,t){ns(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class us{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ts("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ts("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ts("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const ds={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},ps=new cs(3e4,6e4);
/**
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
 */function fs(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function gs(e,t,n,i,r={}){return ms(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=ki(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),us.fetch()(vs(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function ms(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},ds),t);try{const t=new ys(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw ws(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ws(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw ws(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw ws(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Qr(e,a,o);Xr(e,a)}}catch(t){if(t instanceof pi)throw t;Xr(e,"network-request-failed",{message:String(t)})}}async function _s(e,t,n,i,r={}){const s=await gs(e,t,n,i,r);return"mfaPendingCredential"in s&&Xr(e,"multi-factor-auth-required",{_serverResponse:s}),s}function vs(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?hs(e.config,r):`${e.config.apiScheme}://${r}`}class ys{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Jr(this.auth,"network-request-failed"))),ps.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function ws(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Jr(e,t,i);return r.customData._tokenResponse=n,r}
/**
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
 */
/**
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
 */
function bs(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
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
 */function Es(e){return 1e3*Number(e)}function Ts(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return Yr("JWT malformed, contained fewer than 3 sections"),null;try{const e=Jn(n);return e?JSON.parse(e):(Yr("Failed to decode base64 JWT payload"),null)}catch(e){return Yr("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
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
 */
async function Ss(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof pi&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Is{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class Cs{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=bs(this.lastLoginAt),this.creationTime=bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function ks(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Ss(e,async function(e,t){return gs(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));es(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=qr(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const h=e.isAnonymous,u=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!h&&u,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Cs(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
/**
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
 */
class Rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){es(e.idToken,"internal-error"),es(void 0!==e.idToken,"internal-error"),es(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Ts(e);return es(t,"internal-error"),es(void 0!==t.exp,"internal-error"),es(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return es(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
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
 */
async function(e,t){const n=await ms(e,{},(async()=>{const n=ki({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=vs(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",us.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new Rs;return n&&(es("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(es("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(es("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rs,this.toJSON())}_performRefresh(){return ts("not implemented")}}
/**
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
 */function As(e,t){es("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Ns{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=qr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Is(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Cs(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Ss(this,this.stsTokenManager.getToken(this.auth,e));return es(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ui(e),i=await n.getIdToken(t),r=Ts(i);es(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:bs(Es(r.auth_time)),issuedAtTime:bs(Es(r.iat)),expirationTime:bs(Es(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ui(e);await ks(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(es(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ns(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){es(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ks(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ss(this,async function(e,t){return gs(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,l,c;const h=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,_=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:y,isAnonymous:w,providerData:b,stsTokenManager:E}=t;es(v&&E,e,"internal-error");const T=Rs.fromJSON(this.name,E);es("string"==typeof v,e,"internal-error"),As(h,e.name),As(u,e.name),es("boolean"==typeof y,e,"internal-error"),es("boolean"==typeof w,e,"internal-error"),As(d,e.name),As(p,e.name),As(f,e.name),As(g,e.name),As(m,e.name),As(_,e.name);const S=new Ns({uid:v,auth:e,email:u,emailVerified:y,displayName:h,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:T,createdAt:m,lastLoginAt:_});return b&&Array.isArray(b)&&(S.providerData=b.map((e=>Object.assign({},e)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,n=!1){const i=new Rs;i.updateFromServerResponse(t);const r=new Ns({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ks(r),r}}
/**
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
 */class Os{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Os.type="NONE";const Ps=Os;
/**
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
 */function Ls(e,t,n){return`firebase:${e}:${t}:${n}`}class xs{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Ls(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ls("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ns._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new xs(rs(Ps),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||rs(Ps);const s=Ls(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=Ns._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new xs(r,e,n)):new xs(r,e,n)}}
/**
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
 */function Ds(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(js(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ms(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Hs(t))return"Blackberry";if(zs(t))return"Webos";if(Us(t))return"Safari";if((t.includes("chrome/")||Fs(t))&&!t.includes("edge/"))return"Chrome";if(Bs(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ms(e=oi()){return/firefox\//i.test(e)}function Us(e=oi()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Fs(e=oi()){return/crios\//i.test(e)}function js(e=oi()){return/iemobile/i.test(e)}function Bs(e=oi()){return/android/i.test(e)}function Hs(e=oi()){return/blackberry/i.test(e)}function zs(e=oi()){return/webos/i.test(e)}function qs(e=oi()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Vs(){return hi()&&10===document.documentMode}function Ws(e=oi()){return qs(e)||Bs(e)||zs(e)||Hs(e)||/windows phone/i.test(e)||js(e)}
/**
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
 */
function Gs(e,t=[]){let n;switch(e){case"Browser":n=Ds(oi());break;case"Worker":n=`${Ds(oi())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${kr}/${i}`}
/**
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
 */class $s{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
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
 */class Ks{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xs(this),this.idTokenSubscription=new Xs(this),this.beforeStateQueue=new $s(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gr,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rs(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return es(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ks(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ui(e):null;return t&&es(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&es(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(rs(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rs(e)||this._popupRedirectResolver;es(t,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[rs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return es(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return es(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Ys(e){return Ui(e)}class Xs{constructor(e){this.auth=e,this.observer=null,this.addObserver=Oi((e=>this.observer=e))}get next(){return es(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Js(e,t,n){const i=Ys(e);es(i._canInitEmulator,i,"emulator-config-failed"),es(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=Qs(t),{host:o,port:a}=function(e){const t=Qs(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Zs(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Zs(t)}}}(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */()}function Qs(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Zs(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class eo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ts("not implemented")}_getIdTokenResponse(e){return ts("not implemented")}_linkToIdToken(e,t){return ts("not implemented")}_getReauthenticationResolver(e){return ts("not implemented")}}
/**
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
 */async function to(e,t){return gs(e,"POST","/v1/accounts:update",t)}
/**
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
 */
class no extends eo{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new no(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new no(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
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
 */
return async function(e,t){return _s(e,"POST","/v1/accounts:signInWithPassword",fs(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
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
 */
return async function(e,t){return _s(e,"POST","/v1/accounts:signInWithEmailLink",fs(e,t))}(e,{email:this._email,oobCode:this._password});default:Xr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return to(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return _s(e,"POST","/v1/accounts:signInWithEmailLink",fs(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Xr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function io(e,t){return _s(e,"POST","/v1/accounts:signInWithIdp",fs(e,t))}
/**
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
 */class ro extends eo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ro(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=qr(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new ro(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return io(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,io(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,io(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ki(t)}return e}}
/**
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
 */const so={USER_NOT_FOUND:"user-not-found"};
/**
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
 */
class oo extends eo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new oo({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new oo({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return _s(e,"POST","/v1/accounts:signInWithPhoneNumber",fs(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await _s(e,"POST","/v1/accounts:signInWithPhoneNumber",fs(e,t));if(n.temporaryProof)throw ws(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return _s(e,"POST","/v1/accounts:signInWithPhoneNumber",fs(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),so)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new oo({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
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
 */class ao{constructor(e){var t,n,i,r,s,o;const a=Ri(Ai(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);es(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=Ri(Ai(e)).link,n=t?Ri(Ai(t)).deep_link_id:null,i=Ri(Ai(e)).deep_link_id;return(i?Ri(Ai(i)).link:null)||i||n||t||e}(e);try{return new ao(t)}catch(e){return null}}}
/**
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
 */
class lo{constructor(){this.providerId=lo.PROVIDER_ID}static credential(e,t){return no._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ao.parseLink(t);return es(n,"argument-error"),no._fromEmailAndCode(e,n.code,n.tenantId)}}lo.PROVIDER_ID="password",lo.EMAIL_PASSWORD_SIGN_IN_METHOD="password",lo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class co{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class ho extends co{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class uo extends ho{constructor(){super("facebook.com")}static credential(e){return ro._fromParams({providerId:uo.PROVIDER_ID,signInMethod:uo.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return uo.credentialFromTaggedObject(e)}static credentialFromError(e){return uo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return uo.credential(e.oauthAccessToken)}catch(e){return null}}}uo.FACEBOOK_SIGN_IN_METHOD="facebook.com",uo.PROVIDER_ID="facebook.com";
/**
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
 */
class po extends ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ro._fromParams({providerId:po.PROVIDER_ID,signInMethod:po.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return po.credentialFromTaggedObject(e)}static credentialFromError(e){return po.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return po.credential(t,n)}catch(e){return null}}}po.GOOGLE_SIGN_IN_METHOD="google.com",po.PROVIDER_ID="google.com";
/**
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
 */
class fo extends ho{constructor(){super("github.com")}static credential(e){return ro._fromParams({providerId:fo.PROVIDER_ID,signInMethod:fo.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fo.credentialFromTaggedObject(e)}static credentialFromError(e){return fo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return fo.credential(e.oauthAccessToken)}catch(e){return null}}}fo.GITHUB_SIGN_IN_METHOD="github.com",fo.PROVIDER_ID="github.com";
/**
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
 */
class go extends ho{constructor(){super("twitter.com")}static credential(e,t){return ro._fromParams({providerId:go.PROVIDER_ID,signInMethod:go.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return go.credentialFromTaggedObject(e)}static credentialFromError(e){return go.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return go.credential(t,n)}catch(e){return null}}}
/**
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
 */
async function mo(e,t){return _s(e,"POST","/v1/accounts:signUp",fs(e,t))}
/**
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
 */go.TWITTER_SIGN_IN_METHOD="twitter.com",go.PROVIDER_ID="twitter.com";class _o{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Ns._fromIdTokenResponse(e,n,i),s=vo(n);return new _o({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=vo(n);return new _o({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function vo(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class yo extends pi{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,yo.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new yo(e,t,n,i)}}function wo(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw yo._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
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
 */async function bo(e,t,n=!1){const i=await Ss(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return _o._forOperation(e,"link",i)}
/**
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
 */
async function Eo(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await Ss(e,wo(i,r,t,e),n);es(s.idToken,i,"internal-error");const o=Ts(s.idToken);es(o,i,"internal-error");const{sub:a}=o;return es(e.uid===a,i,"user-mismatch"),_o._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Xr(i,"user-mismatch"),e}}
/**
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
 */async function To(e,t,n=!1){const i="signIn",r=await wo(e,i,t),s=await _o._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function So(e,t){return To(Ys(e),t)}async function Io(e,t,n){const i=Ys(e),r=await mo(i,{returnSecureToken:!0,email:t,password:n}),s=await _o._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}
/**
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
 */
async function Co(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Ui(e),r={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await Ss(i,
/**
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
 */
async function(e,t){return gs(e,"POST","/v1/accounts:update",t)}(i.auth,r));i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null;const o=i.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=i.displayName,o.photoURL=i.photoURL),await i._updateTokensIfNecessary(s)}new WeakMap;const ko="__sak";
/**
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
 */class Ro{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ko,"1"),this.storage.removeItem(ko),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */class Ao extends Ro{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=oi();return Us(e)||qs(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Ws(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Vs()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ao.type="LOCAL";const No=Ao;
/**
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
 */class Oo extends Ro{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Oo.type="SESSION";const Po=Oo;
/**
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
 */
/**
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
 */
class Lo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Lo(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function xo(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Lo.receivers=[];class Do{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const l=xo("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
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
 */function Mo(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */
function Uo(){return void 0!==Mo().WorkerGlobalScope&&"function"==typeof Mo().importScripts}
/**
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
 */
const Fo="firebaseLocalStorageDb",jo="firebaseLocalStorage",Bo="fbase_key";class Ho{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function zo(e,t){return e.transaction([jo],t?"readwrite":"readonly").objectStore(jo)}function qo(){const e=indexedDB.open(Fo,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(jo,{keyPath:Bo})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(jo)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Fo);return new Ho(e).toPromise()}(),t(await qo()))}))}))}async function Vo(e,t,n){const i=zo(e,!0).put({[Bo]:t,value:n});return new Ho(i).toPromise()}function Wo(e,t){const n=zo(e,!0).delete(t);return new Ho(n).toPromise()}class Go{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await qo()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lo._getInstance(Uo()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Do(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qo();return await Vo(e,ko,"1"),await Wo(e,ko),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Vo(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=zo(e,!1).get(t),i=await new Ho(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Wo(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=zo(e,!1).getAll();return new Ho(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Go.type="LOCAL";const $o=Go;
/**
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
 */function Ko(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
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
 */
var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=Jr("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function Yo(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
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
 */
/**
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
 */
Yo("rcb"),new cs(3e4,6e4);
/**
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
 */
const Xo="recaptcha";async function Jo(e,t,n){var i;const r=await n.verify();try{let s;if(es("string"==typeof r,e,"argument-error"),es(n.type===Xo,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){es("enroll"===t.type,e,"internal-error");const n=await
/**
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
 */
function(e,t){return gs(e,"POST","/v2/accounts/mfaEnrollment:start",fs(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{es("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;es(n,e,"missing-multi-factor-info");const o=await function(e,t){return gs(e,"POST","/v2/accounts/mfaSignIn:start",fs(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return gs(e,"POST","/v1/accounts:sendVerificationCode",fs(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
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
 */
class Qo{constructor(e){this.providerId=Qo.PROVIDER_ID,this.auth=Ys(e)}verifyPhoneNumber(e,t){return Jo(this.auth,e,Ui(t))}static credential(e,t){return oo._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Qo.credentialFromTaggedObject(t)}static credentialFromError(e){return Qo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?oo._fromTokenResponse(t,n):null}}
/**
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
 */
function Zo(e,t){return t?rs(t):(es(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */Qo.PROVIDER_ID="phone",Qo.PHONE_SIGN_IN_METHOD="phone";class ea extends eo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return io(e,this._buildIdpRequest())}_linkToIdToken(e,t){return io(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return io(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ta(e){return To(e.auth,new ea(e),e.bypassAuthState)}function na(e){const{auth:t,user:n}=e;return es(n,t,"internal-error"),Eo(n,new ea(e),e.bypassAuthState)}async function ia(e){const{auth:t,user:n}=e;return es(n,t,"internal-error"),bo(n,new ea(e),e.bypassAuthState)}
/**
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
 */class ra{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ta;case"linkViaPopup":case"linkViaRedirect":return ia;case"reauthViaPopup":case"reauthViaRedirect":return na;default:Xr(this.auth,"internal-error")}}resolve(e){ns(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ns(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const sa=new cs(2e3,1e4);class oa extends ra{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,oa.currentPopupAction&&oa.currentPopupAction.cancel(),oa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return es(e,this.auth,"internal-error"),e}async onExecution(){ns(1===this.filter.length,"Popup operations only handle one event");const e=xo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Jr(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Jr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Jr(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,sa.get())};e()}}oa.currentPopupAction=null;
/**
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
 */
const aa="pendingRedirect",la=new Map;class ca extends ra{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=la.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=da(t),i=ua(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}la.set(this.auth._key(),e)}return this.bypassAuthState||la.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function ha(e,t){la.set(e._key(),t)}function ua(e){return rs(e._redirectPersistence)}function da(e){return Ls(aa,e.config.apiKey,e.name)}
/**
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
 */async function pa(e,t,n=!1){const i=Ys(e),r=Zo(i,t),s=new ca(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class fa{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ma(e);default:return!1}}
/**
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ma(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Jr(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ga(e))}saveEventToCache(e){this.cachedEventUids.add(ga(e)),this.lastProcessedEventTime=Date.now()}}function ga(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ma({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
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
 */
const _a=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,va=/^https?/;async function ya(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return gs(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(wa(e))return}catch(e){}Xr(e,"unauthorized-domain")}function wa(e){const t=ss(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!va.test(n))return!1;if(_a.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ba=new cs(3e4,6e4);function Ea(){const e=Mo().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Ta=null;function Sa(e){return Ta=Ta||function(e){return new Promise(((t,n)=>{var i,r,s;function o(){Ea(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ea(),n(Jr(e,"network-request-failed"))},timeout:ba.get()})}if(null===(r=null===(i=Mo().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Mo().gapi)||void 0===s?void 0:s.load)){const t=Yo("iframefcb");return Mo()[t]=()=>{gapi.load?o():n(Jr(e,"network-request-failed"))},Ko(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Ta=null,e}))}(e),Ta}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Ia=new cs(5e3,15e3),Ca="__/auth/iframe",ka="emulator/auth/iframe",Ra={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Aa=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Na(e){const t=e.config;es(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?hs(t,ka):`https://${e.config.authDomain}/${Ca}`,i={apiKey:t.apiKey,appName:e.name,v:kr},r=Aa.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${ki(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */
const Oa={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Pa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function La(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Oa),{width:i.toString(),height:r.toString(),top:s,left:o}),c=oi().toLowerCase();n&&(a=Fs(c)?"_blank":n),Ms(c)&&(t=t||"http://localhost",l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=oi()){var t;return qs(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
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
 */(t||"",a),new Pa(null);const u=window.open(t||"",a,h);es(u,e,"popup-blocked");try{u.focus()}catch(e){}return new Pa(u)}const xa="__/auth/handler",Da="emulator/auth/handler";function Ma(e,t,n,i,r,s){es(e.config.authDomain,e,"auth-domain-config-required"),es(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:kr,eventId:r};if(t instanceof co){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Ti(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof ho){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?hs(e,Da):`https://${e.authDomain}/${xa}`}
/**
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
 */(e)}?${ki(a).slice(1)}`}const Ua="webStorageSupport";const Fa=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Po,this._completeRedirectFn=pa,this._overrideRedirectResult=ha}async _openPopup(e,t,n,i){var r;ns(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return La(e,Ma(e,t,n,ss(),i),xo())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=Ma(e,t,n,ss(),i),Mo().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(ns(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Sa(e),n=Mo().gapi;return es(n,e,"internal-error"),t.open({where:document.body,url:Na(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ra,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=Jr(e,"network-request-failed"),s=Mo().setTimeout((()=>{i(r)}),Ia.get());function o(){Mo().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}(e),n=new fa(e);return t.register("authEvent",(t=>{es(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ua,{type:Ua},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[Ua];void 0!==r&&t(!!r),Xr(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ya(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ws()||Us()||qs()}};var ja="@firebase/auth",Ba="0.22.0";
/**
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
 */
class Ha{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){es(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */
/**
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
 */
const za=ri("authIdTokenMaxAge")||300;let qa=null;var Va;Va="Browser",Tr(new Fi("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((e,n)=>{es(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),es(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:s,clientPlatform:Va,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gs(Va)},o=new Ks(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(rs);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Tr(new Fi("auth-internal",(e=>(e=>new Ha(e))(Ys(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Nr(ja,Ba,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Va)),Nr(ja,Ba,"esm2017");var Wa,Ga="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},$a={},Ka=Ka||{},Ya=Ga||self;function Xa(){}function Ja(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Qa(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Za="closure_uid_"+(1e9*Math.random()>>>0),el=0;function tl(e,t,n){return e.call.apply(e.bind,arguments)}function nl(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function il(e,t,n){return(il=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?tl:nl).apply(null,arguments)}function rl(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function sl(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function ol(){this.s=this.s,this.o=this.o}ol.prototype.s=!1,ol.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,Za)&&e[Za]||(e[Za]=++el))},ol.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const al=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ll(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function cl(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(Ja(n)){const t=e.length||0,i=n.length||0;e.length=t+i;for(let r=0;r<i;r++)e[t+r]=n[r]}else e.push(n)}}function hl(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}hl.prototype.h=function(){this.defaultPrevented=!0};var ul=function(){if(!Ya.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Ya.addEventListener("test",Xa,t),Ya.removeEventListener("test",Xa,t)}catch(e){}return e}();function dl(e){return/^[\s\xa0]*$/.test(e)}var pl=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function fl(e,t){return e<t?-1:e>t?1:0}function gl(){var e=Ya.navigator;return e&&(e=e.userAgent)?e:""}function ml(e){return-1!=gl().indexOf(e)}function _l(e){return _l[" "](e),e}_l[" "]=Xa;var vl,yl,wl=ml("Opera"),bl=ml("Trident")||ml("MSIE"),El=ml("Edge"),Tl=El||bl,Sl=ml("Gecko")&&!(-1!=gl().toLowerCase().indexOf("webkit")&&!ml("Edge"))&&!(ml("Trident")||ml("MSIE"))&&!ml("Edge"),Il=-1!=gl().toLowerCase().indexOf("webkit")&&!ml("Edge");function Cl(){var e=Ya.document;return e?e.documentMode:void 0}e:{var kl="",Rl=(yl=gl(),Sl?/rv:([^\);]+)(\)|;)/.exec(yl):El?/Edge\/([\d\.]+)/.exec(yl):bl?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(yl):Il?/WebKit\/(\S+)/.exec(yl):wl?/(?:Version)[ \/]?(\S+)/.exec(yl):void 0);if(Rl&&(kl=Rl?Rl[1]:""),bl){var Al=Cl();if(null!=Al&&Al>parseFloat(kl)){vl=String(Al);break e}}vl=kl}var Nl,Ol={};function Pl(){return function(e){var t=Ol;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=pl(String(vl)).split("."),n=pl("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var r=t[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;e=fl(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||fl(0==r[2].length,0==s[2].length)||fl(r[2],s[2]),r=r[3],s=s[3]}while(0==e)}return 0<=e}))}if(Ya.document&&bl){var Ll=Cl();Nl=Ll||(parseInt(vl,10)||void 0)}else Nl=void 0;var xl=Nl;function Dl(e,t){if(hl.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Sl){e:{try{_l(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Ml[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Dl.X.h.call(this)}}sl(Dl,hl);var Ml={2:"touch",3:"pen",4:"mouse"};Dl.prototype.h=function(){Dl.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ul="closure_listenable_"+(1e6*Math.random()|0),Fl=0;function jl(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=r,this.key=++Fl,this.ba=this.ea=!1}function Bl(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Hl(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function zl(e){const t={};for(const n in e)t[n]=e[n];return t}const ql="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vl(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<ql.length;t++)n=ql[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function Wl(e){this.src=e,this.g={},this.h=0}function Gl(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=al(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Bl(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function $l(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==i)return r}return-1}Wl.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=$l(e,t,i,r);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new jl(t,this.src,s,!!i,r)).ea=n,e.push(t)),t};var Kl="closure_lm_"+(1e6*Math.random()|0),Yl={};function Xl(e,t,n,i,r){if(i&&i.once)return Ql(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Xl(e,t[s],n,i,r);return null}return n=sc(n),e&&e[Ul]?e.N(t,n,Qa(i)?!!i.capture:!!i,r):Jl(e,t,n,!1,i,r)}function Jl(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=Qa(r)?!!r.capture:!!r,a=ic(e);if(a||(e[Kl]=a=new Wl(e)),(n=a.add(t,n,i,o,s)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}const t=nc;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)ul||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(tc(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function Ql(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ql(e,t[s],n,i,r);return null}return n=sc(n),e&&e[Ul]?e.O(t,n,Qa(i)?!!i.capture:!!i,r):Jl(e,t,n,!0,i,r)}function Zl(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)Zl(e,t[s],n,i,r);else i=Qa(i)?!!i.capture:!!i,n=sc(n),e&&e[Ul]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=$l(s=e.g[t],n,i,r))&&(Bl(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ic(e))&&(t=e.g[t.toString()],e=-1,t&&(e=$l(t,n,i,r)),(n=-1<e?t[e]:null)&&ec(n))}function ec(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[Ul])Gl(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(tc(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=ic(t))?(Gl(n,e),0==n.h&&(n.src=null,t[Kl]=null)):Bl(e)}}}function tc(e){return e in Yl?Yl[e]:Yl[e]="on"+e}function nc(e,t){if(e.ba)e=!0;else{t=new Dl(t,this);var n=e.listener,i=e.ha||e.src;e.ea&&ec(e),e=n.call(i,t)}return e}function ic(e){return(e=e[Kl])instanceof Wl?e:null}var rc="__closure_events_fn_"+(1e9*Math.random()>>>0);function sc(e){return"function"==typeof e?e:(e[rc]||(e[rc]=function(t){return e.handleEvent(t)}),e[rc])}function oc(){ol.call(this),this.i=new Wl(this),this.P=this,this.I=null}function ac(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"==typeof t)t=new hl(t,e);else if(t instanceof hl)t.target=t.target||e;else{var r=t;Vl(t=new hl(i,e),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=lc(o,i,!0,t)&&r}if(r=lc(o=t.g=e,i,!0,t)&&r,r=lc(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)r=lc(o=t.g=n[s],i,!1,t)&&r}function lc(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Gl(e.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}sl(oc,ol),oc.prototype[Ul]=!0,oc.prototype.removeEventListener=function(e,t,n,i){Zl(this,e,t,n,i)},oc.prototype.M=function(){if(oc.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Bl(n[i]);delete t.g[e],t.h--}}this.I=null},oc.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},oc.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var cc=Ya.JSON.stringify;function hc(){var e=_c;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var uc,dc=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new pc),(e=>e.reset()));class pc{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function fc(e){Ya.setTimeout((()=>{throw e}),0)}function gc(e,t){uc||function(){var e=Ya.Promise.resolve(void 0);uc=function(){e.then(vc)}}(),mc||(uc(),mc=!0),_c.add(e,t)}var mc=!1,_c=new class{constructor(){this.h=this.g=null}add(e,t){const n=dc.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function vc(){for(var e;e=hc();){try{e.h.call(e.g)}catch(e){fc(e)}var t=dc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}mc=!1}function yc(e,t){oc.call(this),this.h=e||1,this.g=t||Ya,this.j=il(this.lb,this),this.l=Date.now()}function wc(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function bc(e,t,n){if("function"==typeof e)n&&(e=il(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=il(e.handleEvent,e)}return 2147483647<Number(t)?-1:Ya.setTimeout(e,t||0)}function Ec(e){e.g=bc((()=>{e.g=null,e.i&&(e.i=!1,Ec(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}sl(yc,oc),(Wa=yc.prototype).ca=!1,Wa.R=null,Wa.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ac(this,"tick"),this.ca&&(wc(this),this.start()))}},Wa.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Wa.M=function(){yc.X.M.call(this),wc(this),delete this.g};class Tc extends ol{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ec(this)}M(){super.M(),this.g&&(Ya.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sc(e){ol.call(this),this.h=e,this.g={}}sl(Sc,ol);var Ic=[];function Cc(e,t,n,i){Array.isArray(n)||(n&&(Ic[0]=n.toString()),n=Ic);for(var r=0;r<n.length;r++){var s=Xl(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function kc(e){Hl(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ec(e)}),e),e.g={}}function Rc(){this.g=!0}function Ac(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return cc(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}Sc.prototype.M=function(){Sc.X.M.call(this),kc(this)},Sc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Rc.prototype.Aa=function(){this.g=!1},Rc.prototype.info=function(){};var Nc={},Oc=null;function Pc(){return Oc=Oc||new oc}function Lc(e){hl.call(this,Nc.Pa,e)}function xc(e){const t=Pc();ac(t,new Lc(t))}function Dc(e,t){hl.call(this,Nc.STAT_EVENT,e),this.stat=t}function Mc(e){const t=Pc();ac(t,new Dc(t,e))}function Uc(e,t){hl.call(this,Nc.Qa,e),this.size=t}function Fc(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Ya.setTimeout((function(){e()}),t)}Nc.Pa="serverreachability",sl(Lc,hl),Nc.STAT_EVENT="statevent",sl(Dc,hl),Nc.Qa="timingevent",sl(Uc,hl);var jc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Bc={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Hc(){}function zc(e){return e.h||(e.h=e.i())}function qc(){}Hc.prototype.h=null;var Vc,Wc={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Gc(){hl.call(this,"d")}function $c(){hl.call(this,"c")}function Kc(){}function Yc(e,t,n,i){this.l=e,this.j=t,this.m=n,this.U=i||1,this.S=new Sc(this),this.O=Jc,e=Tl?125:void 0,this.T=new yc(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Xc}function Xc(){this.i=null,this.g="",this.h=!1}sl(Gc,hl),sl($c,hl),sl(Kc,Hc),Kc.prototype.g=function(){return new XMLHttpRequest},Kc.prototype.i=function(){return{}},Vc=new Kc;var Jc=45e3,Qc={},Zc={};function eh(e,t,n){e.K=1,e.v=yh(fh(t)),e.s=n,e.P=!0,th(e,null)}function th(e,t){e.F=Date.now(),sh(e),e.A=fh(e.v);var n=e.A,i=e.U;Array.isArray(i)||(i=[String(i)]),Ph(n.i,"t",i),e.C=0,n=e.l.H,e.h=new Xc,e.g=Ou(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Tc(il(e.La,e,e.g),e.N)),Cc(e.S,e.g,"readystatechange",e.ib),t=e.H?zl(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),xc(),function(e,t,n,i,r,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&"type"==u[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function nh(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function ih(e,t,n){let i,r=!0;for(;!e.I&&e.C<n.length;){if(i=rh(e,n),i==Zc){4==t&&(e.o=4,Mc(14),r=!1),Ac(e.j,e.m,null,"[Incomplete Response]");break}if(i==Qc){e.o=4,Mc(15),Ac(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}Ac(e.j,e.m,i,null),hh(e,i)}nh(e)&&i!=Zc&&i!=Qc&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Mc(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Tu(t),t.K=!0,Mc(11))):(Ac(e.j,e.m,n,"[Invalid Chunked Response]"),ch(e),lh(e))}function rh(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?Zc:(n=Number(t.substring(n,i)),isNaN(n)?Qc:(i+=1)+n>t.length?Zc:(t=t.substr(i,n),e.C=i+n,t))}function sh(e){e.V=Date.now()+e.O,oh(e,e.O)}function oh(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Fc(il(e.gb,e),t)}function ah(e){e.B&&(Ya.clearTimeout(e.B),e.B=null)}function lh(e){0==e.l.G||e.I||Cu(e.l,e)}function ch(e){ah(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,wc(e.T),kc(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function hh(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Fh(n.h,e)))if(!e.J&&Fh(n.h,e)&&3==n.G){try{var i=n.Fa.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Iu(n),gu(n)}Eu(n),Mc(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=Fc(il(n.cb,n),6e3));if(1>=Uh(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else Ru(n,11)}else if((e.J||n.g==e)&&Iu(n),!dl(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const t=c[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const r=c[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const h=c[5];null!=h&&"number"==typeof h&&0<h&&(i=1.5*h,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=e.g;if(u){const e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(jh(s,s.h),s.h=null))}if(i.D){const e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.za=e,vh(i.F,i.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=e;if((i=n).sa=Nu(i,i.H?i.ka:null,i.V),o.J){Bh(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(ah(a),sh(a)),i.g=o}else bu(i);0<n.i.length&&_u(n)}else"stop"!=c[0]&&"close"!=c[0]||Ru(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Ru(n,7):fu(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}xc()}catch(e){}}function uh(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Ja(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(Ja(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}(e),i=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(Ja(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}(Wa=Yc.prototype).setTimeout=function(e){this.O=e},Wa.ib=function(e){e=e.target;const t=this.L;t&&3==lu(e)?t.l():this.La(e)},Wa.La=function(e){try{if(e==this.g)e:{const h=lu(this.g);var t=this.g.Ea();this.g.aa();if(!(3>h)&&(3!=h||Tl||this.g&&(this.h.h||this.g.fa()||cu(this.g)))){this.I||4!=h||7==t||xc(),ah(this);var n=this.g.aa();this.Y=n;t:if(nh(this)){var i=cu(this.g);e="";var r=i.length,s=4==lu(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ch(this),lh(this);var o="";break t}this.h.i=new Ya.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(e,t,n,i,r,s,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!dl(a)){var c=a;break t}}c=null}if(!(n=c)){this.i=!1,this.o=3,Mc(12),ch(this),lh(this);break e}Ac(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,hh(this,n)}this.P?(ih(this,h,o),Tl&&this.i&&3==h&&(Cc(this.S,this.T,"tick",this.hb),this.T.start())):(Ac(this.j,this.m,o,null),hh(this,o)),4==h&&ch(this),this.i&&!this.I&&(4==h?Cu(this.l,this):(this.i=!1,sh(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Mc(12)):(this.o=0,Mc(13)),ch(this),lh(this)}}}catch(e){}},Wa.hb=function(){if(this.g){var e=lu(this.g),t=this.g.fa();this.C<t.length&&(ah(this),ih(this,e,t),this.i&&4!=e&&sh(this))}},Wa.cancel=function(){this.I=!0,ch(this)},Wa.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(xc(),Mc(17)),ch(this),this.o=2,lh(this)):oh(this,this.V-e)};var dh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ph(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ph){this.h=void 0!==t?t:e.h,gh(this,e.j),this.s=e.s,this.g=e.g,mh(this,e.m),this.l=e.l,t=e.i;var n=new Rh;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),_h(this,n),this.o=e.o}else e&&(n=String(e).match(dh))?(this.h=!!t,gh(this,n[1]||"",!0),this.s=wh(n[2]||""),this.g=wh(n[3]||"",!0),mh(this,n[4]),this.l=wh(n[5]||"",!0),_h(this,n[6]||"",!0),this.o=wh(n[7]||"")):(this.h=!!t,this.i=new Rh(null,this.h))}function fh(e){return new ph(e)}function gh(e,t,n){e.j=n?wh(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function mh(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function _h(e,t,n){t instanceof Rh?(e.i=t,function(e,t){t&&!e.j&&(Ah(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Nh(this,t),Ph(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=bh(t,Ch)),e.i=new Rh(t,e.h))}function vh(e,t,n){e.i.set(t,n)}function yh(e){return vh(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function wh(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function bh(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Eh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Eh(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}ph.prototype.toString=function(){var e=[],t=this.j;t&&e.push(bh(t,Th,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(bh(t,Th,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(bh(n,"/"==n.charAt(0)?Ih:Sh,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",bh(n,kh)),e.join("")};var Th=/[#\/\?@]/g,Sh=/[#\?:]/g,Ih=/[#\?]/g,Ch=/[#\?@]/g,kh=/#/g;function Rh(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ah(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Nh(e,t){Ah(e),t=Lh(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Oh(e,t){return Ah(e),t=Lh(e,t),e.g.has(t)}function Ph(e,t,n){Nh(e,t),0<n.length&&(e.i=null,e.g.set(Lh(e,t),ll(n)),e.h+=n.length)}function Lh(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Wa=Rh.prototype).add=function(e,t){Ah(this),this.i=null,e=Lh(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Wa.forEach=function(e,t){Ah(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},Wa.oa=function(){Ah(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const r=e[i];for(let e=0;e<r.length;e++)n.push(t[i])}return n},Wa.W=function(e){Ah(this);let t=[];if("string"==typeof e)Oh(this,e)&&(t=t.concat(this.g.get(Lh(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},Wa.set=function(e,t){return Ah(this),this.i=null,Oh(this,e=Lh(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Wa.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},Wa.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),e.push(r)}}return this.i=e.join("&")};function xh(e){this.l=e||Dh,Ya.PerformanceNavigationTiming?e=0<(e=Ya.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Ya.g&&Ya.g.Ga&&Ya.g.Ga()&&Ya.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Dh=10;function Mh(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Uh(e){return e.h?1:e.g?e.g.size:0}function Fh(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function jh(e,t){e.g?e.g.add(t):e.h=t}function Bh(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Hh(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ll(e.i)}function zh(){}function qh(){this.g=new zh}function Vh(e,t,n){const i=n||"";try{uh(e,(function(e,n){let r=e;Qa(e)&&(r=cc(e)),t.push(i+n+"="+encodeURIComponent(r))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function Wh(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(e){}}function Gh(e){this.l=e.ac||null,this.j=e.jb||!1}function $h(e,t){oc.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Kh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xh.prototype.cancel=function(){if(this.i=Hh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},zh.prototype.stringify=function(e){return Ya.JSON.stringify(e,void 0)},zh.prototype.parse=function(e){return Ya.JSON.parse(e,void 0)},sl(Gh,Hc),Gh.prototype.g=function(){return new $h(this.l,this.j)},Gh.prototype.i=function(e){return function(){return e}}({}),sl($h,oc);var Kh=0;function Yh(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function Xh(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Jh(e)}function Jh(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Wa=$h.prototype).open=function(e,t){if(this.readyState!=Kh)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Jh(this)},Wa.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Ya).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},Wa.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Xh(this)),this.readyState=Kh},Wa.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Jh(this)),this.g&&(this.readyState=3,Jh(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==Ya.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yh(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},Wa.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Xh(this):Jh(this),3==this.readyState&&Yh(this)}},Wa.Va=function(e){this.g&&(this.response=this.responseText=e,Xh(this))},Wa.Ua=function(e){this.g&&(this.response=e,Xh(this))},Wa.ga=function(){this.g&&Xh(this)},Wa.setRequestHeader=function(e,t){this.v.append(e,t)},Wa.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Wa.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty($h.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Qh=Ya.JSON.parse;function Zh(e){oc.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=eu,this.K=this.L=!1}sl(Zh,oc);var eu="",tu=/^https?$/i,nu=["POST","PUT"];function iu(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ru(e),ou(e)}function ru(e){e.D||(e.D=!0,ac(e,"complete"),ac(e,"error"))}function su(e){if(e.h&&void 0!==Ka&&(!e.C[1]||4!=lu(e)||2!=e.aa()))if(e.v&&4==lu(e))bc(e.Ha,0,e);else if(ac(e,"readystatechange"),4==lu(e)){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var r=String(e.H).match(dh)[1]||null;if(!r&&Ya.self&&Ya.self.location){var s=Ya.self.location.protocol;r=s.substr(0,s.length-1)}i=!tu.test(r?r.toLowerCase():"")}n=i}if(n)ac(e,"complete"),ac(e,"success");else{e.m=6;try{var o=2<lu(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.aa()+"]",ru(e)}}finally{ou(e)}}}function ou(e,t){if(e.g){au(e);const n=e.g,i=e.C[0]?Xa:null;e.g=null,e.C=null,t||ac(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function au(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Ya.clearTimeout(e.A),e.A=null)}function lu(e){return e.g?e.g.readyState:0}function cu(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case eu:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function hu(e){let t="";return Hl(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function uu(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=hu(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):vh(e,t,n))}function du(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function pu(e){this.Ca=0,this.i=[],this.j=new Rc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=du("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=du("baseRetryDelayMs",5e3,e),this.bb=du("retryDelaySeedMs",1e4,e),this.$a=du("forwardChannelMaxRetries",2,e),this.ta=du("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new xh(e&&e.concurrentRequestLimit),this.Fa=new qh,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function fu(e){if(mu(e),3==e.G){var t=e.U++,n=fh(e.F);vh(n,"SID",e.I),vh(n,"RID",t),vh(n,"TYPE","terminate"),yu(e,n),(t=new Yc(e,e.j,t,void 0)).K=2,t.v=yh(fh(n)),n=!1,Ya.navigator&&Ya.navigator.sendBeacon&&(n=Ya.navigator.sendBeacon(t.v.toString(),"")),!n&&Ya.Image&&((new Image).src=t.v,n=!0),n||(t.g=Ou(t.l,null),t.g.da(t.v)),t.F=Date.now(),sh(t)}Au(e)}function gu(e){e.g&&(Tu(e),e.g.cancel(),e.g=null)}function mu(e){gu(e),e.u&&(Ya.clearTimeout(e.u),e.u=null),Iu(e),e.h.cancel(),e.m&&("number"==typeof e.m&&Ya.clearTimeout(e.m),e.m=null)}function _u(e){Mh(e.h)||e.m||(e.m=!0,gc(e.Ja,e),e.C=0)}function vu(e,t){var n;n=t?t.m:e.U++;const i=fh(e.F);vh(i,"SID",e.I),vh(i,"RID",n),vh(i,"AID",e.T),yu(e,i),e.o&&e.s&&uu(i,e.o,e.s),n=new Yc(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=wu(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),jh(e.h,n),eh(n,i,t)}function yu(e,t){e.ia&&Hl(e.ia,(function(e,n){vh(t,n,e)})),e.l&&uh({},(function(e,n){vh(t,n,e)}))}function wu(e,t,n){n=Math.min(e.i.length,n);var i=e.l?il(e.l.Ra,e.l,e):null;e:{var r=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=t,0>n)t=Math.max(0,r[o].h-100),s=!1;else try{Vh(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(s){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,i}function bu(e){e.g||e.u||(e.Z=1,gc(e.Ia,e),e.A=0)}function Eu(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=Fc(il(e.Ia,e),ku(e,e.A)),e.A++,!0)}function Tu(e){null!=e.B&&(Ya.clearTimeout(e.B),e.B=null)}function Su(e){e.g=new Yc(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=fh(e.sa);vh(t,"RID","rpc"),vh(t,"SID",e.I),vh(t,"CI",e.L?"0":"1"),vh(t,"AID",e.T),vh(t,"TYPE","xmlhttp"),yu(e,t),e.o&&e.s&&uu(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=yh(fh(t)),n.s=null,n.P=!0,th(n,e)}function Iu(e){null!=e.v&&(Ya.clearTimeout(e.v),e.v=null)}function Cu(e,t){var n=null;if(e.g==t){Iu(e),Tu(e),e.g=null;var i=2}else{if(!Fh(e.h,t))return;n=t.D,Bh(e.h,t),i=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;ac(i=Pc(),new Uc(i,n)),_u(e)}else bu(e);else if(3==(r=t.o)||0==r&&0<e.pa||!(1==i&&function(e,t){return!(Uh(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=Fc(il(e.Ja,e,t),ku(e,e.C)),e.C++,0)))}(e,t)||2==i&&Eu(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:Ru(e,5);break;case 4:Ru(e,10);break;case 3:Ru(e,6);break;default:Ru(e,2)}}function ku(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Ru(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var i=il(e.kb,e);n||(n=new ph("//www.google.com/images/cleardot.gif"),Ya.location&&"http"==Ya.location.protocol||gh(n,"https"),yh(n)),function(e,t){const n=new Rc;if(Ya.Image){const i=new Image;i.onload=rl(Wh,n,i,"TestLoadImage: loaded",!0,t),i.onerror=rl(Wh,n,i,"TestLoadImage: error",!1,t),i.onabort=rl(Wh,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=rl(Wh,n,i,"TestLoadImage: timeout",!1,t),Ya.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else Mc(2);e.G=0,e.l&&e.l.va(t),Au(e),mu(e)}function Au(e){if(e.G=0,e.la=[],e.l){const t=Hh(e.h);0==t.length&&0==e.i.length||(cl(e.la,t),cl(e.la,e.i),e.h.i.length=0,ll(e.i),e.i.length=0),e.l.ua()}}function Nu(e,t,n){var i=n instanceof ph?fh(n):new ph(n,void 0);if(""!=i.g)t&&(i.g=t+"."+i.g),mh(i,i.m);else{var r=Ya.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new ph(null,void 0);i&&gh(s,i),t&&(s.g=t),r&&mh(s,r),n&&(s.l=n),i=s}return n=e.D,t=e.za,n&&t&&vh(i,n,t),vh(i,"VER",e.ma),yu(e,i),i}function Ou(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new Zh(new Gh({jb:!0})):new Zh(e.ra)).Ka(e.H),t}function Pu(){}function Lu(){if(bl&&!(10<=Number(xl)))throw Error("Environmental error: no available transport.")}function xu(e,t){oc.call(this),this.g=new pu(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!dl(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!dl(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Uu(this)}function Du(e){Gc.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Mu(){$c.call(this),this.status=1}function Uu(e){this.g=e}(Wa=Zh.prototype).Ka=function(e){this.L=e},Wa.da=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Vc.g(),this.C=this.u?zc(this.u):zc(Vc),this.g.onreadystatechange=il(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void iu(this,e)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),r=Ya.FormData&&e instanceof Ya.FormData,!(0<=al(nu,t))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{au(this),0<this.B&&((this.K=function(e){return bl&&Pl()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=il(this.qa,this)):this.A=bc(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){iu(this,e)}},Wa.qa=function(){void 0!==Ka&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ac(this,"timeout"),this.abort(8))},Wa.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ac(this,"complete"),ac(this,"abort"),ou(this))},Wa.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ou(this,!0)),Zh.X.M.call(this)},Wa.Ha=function(){this.s||(this.F||this.v||this.l?su(this):this.fb())},Wa.fb=function(){su(this)},Wa.aa=function(){try{return 2<lu(this)?this.g.status:-1}catch(e){return-1}},Wa.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Wa.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Qh(t)}},Wa.Ea=function(){return this.m},Wa.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Wa=pu.prototype).ma=8,Wa.G=1,Wa.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new Yc(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=zl(s),Vl(s,this.S)):s=this.S),null!==this.o||this.N||(r.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=wu(this,r,t),vh(n=fh(this.F),"RID",e),vh(n,"CVER",22),this.D&&vh(n,"X-HTTP-Session-Id",this.D),yu(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(hu(s)))+"&"+t:this.o&&uu(n,this.o,s)),jh(this.h,r),this.Ya&&vh(n,"TYPE","init"),this.O?(vh(n,"$req",t),vh(n,"SID","null"),r.Z=!0,eh(r,n,null)):eh(r,n,t),this.G=2}}else 3==this.G&&(e?vu(this,e):0==this.i.length||Mh(this.h)||vu(this))},Wa.Ia=function(){if(this.u=null,Su(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Fc(il(this.eb,this),e)}},Wa.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Mc(10),gu(this),Su(this))},Wa.cb=function(){null!=this.v&&(this.v=null,gu(this),Eu(this),Mc(19))},Wa.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Mc(2)):(this.j.info("Failed to ping google.com"),Mc(1))},(Wa=Pu.prototype).xa=function(){},Wa.wa=function(){},Wa.va=function(){},Wa.ua=function(){},Wa.Ra=function(){},Lu.prototype.g=function(e,t){return new xu(e,t)},sl(xu,oc),xu.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Mc(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Nu(e,null,e.V),_u(e)},xu.prototype.close=function(){fu(this.g)},xu.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=cc(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&_u(t)},xu.prototype.M=function(){this.g.l=null,delete this.j,fu(this.g),delete this.g,xu.X.M.call(this)},sl(Du,Gc),sl(Mu,$c),sl(Uu,Pu),Uu.prototype.xa=function(){ac(this.g,"a")},Uu.prototype.wa=function(e){ac(this.g,new Du(e))},Uu.prototype.va=function(e){ac(this.g,new Mu)},Uu.prototype.ua=function(){ac(this.g,"b")},Lu.prototype.createWebChannel=Lu.prototype.g,xu.prototype.send=xu.prototype.u,xu.prototype.open=xu.prototype.m,xu.prototype.close=xu.prototype.close,jc.NO_ERROR=0,jc.TIMEOUT=8,jc.HTTP_ERROR=6,Bc.COMPLETE="complete",qc.EventType=Wc,Wc.OPEN="a",Wc.CLOSE="b",Wc.ERROR="c",Wc.MESSAGE="d",oc.prototype.listen=oc.prototype.N,Zh.prototype.listenOnce=Zh.prototype.O,Zh.prototype.getLastError=Zh.prototype.Oa,Zh.prototype.getLastErrorCode=Zh.prototype.Ea,Zh.prototype.getStatus=Zh.prototype.aa,Zh.prototype.getResponseJson=Zh.prototype.Sa,Zh.prototype.getResponseText=Zh.prototype.fa,Zh.prototype.send=Zh.prototype.da,Zh.prototype.setWithCredentials=Zh.prototype.Ka;$a.createWebChannelTransport=function(){return new Lu},$a.getStatEventTarget=function(){return Pc()},$a.ErrorCode=jc,$a.EventType=Bc,$a.Event=Nc,$a.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},$a.FetchXmlHttpFactory=Gh,$a.WebChannel=qc,$a.XhrIo=Zh;const Fu="@firebase/firestore";
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
 */class ju{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ju.UNAUTHENTICATED=new ju(null),ju.GOOGLE_CREDENTIALS=new ju("google-credentials-uid"),ju.FIRST_PARTY=new ju("first-party-uid"),ju.MOCK_USER=new ju("mock-user");
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
 */
let Bu="9.19.0";
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
 */const Hu=new Yi("@firebase/firestore");function zu(e,...t){if(Hu.logLevel<=qi.DEBUG){const n=t.map(Vu);Hu.debug(`Firestore (${Bu}): ${e}`,...n)}}function qu(e,...t){if(Hu.logLevel<=qi.ERROR){const n=t.map(Vu);Hu.error(`Firestore (${Bu}): ${e}`,...n)}}function Vu(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
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
 */var t}
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
 */function Wu(e="Unexpected state"){const t=`FIRESTORE (${Bu}) INTERNAL ASSERTION FAILED: `+e;throw qu(t),new Error(t)}function Gu(e,t){e||Wu()}
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
 */
const $u={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ku extends pi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Yu{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class Xu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ju{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ju.UNAUTHENTICATED)))}shutdown(){}}class Qu{constructor(e){this.t=e,this.currentUser=ju.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new Yu;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Yu,e.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{zu("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(zu("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Yu)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(zu("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Gu("string"==typeof t.accessToken),new Xu(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Gu(null===e||"string"==typeof e),new ju(e)}}class Zu{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=ju.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class ed{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Zu(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(ju.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class td{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nd{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&zu("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,zu("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{zu("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?i(e):zu("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Gu("string"==typeof e.token),this.T=e.token,new td(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function id(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */class rd{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=id(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function sd(e,t){return e<t?-1:e>t?1:0}
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
 */
class od{constructor(e,t,n){void 0===t?t=0:t>e.length&&Wu(),void 0===n?n=e.length-t:n>e.length-t&&Wu(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===od.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof od?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ad extends od{construct(e,t,n){return new ad(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Ku($u.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ad(t)}static emptyPath(){return new ad([])}}
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
 */
class ld{constructor(e){this.path=e}static fromPath(e){return new ld(ad.fromString(e))}static fromName(e){return new ld(ad.fromString(e).popFirst(5))}static empty(){return new ld(ad.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ad.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ad.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ld(new ad(e.slice()))}}
/**
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
 */class cd{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}cd.UNKNOWN_ID=-1;function hd(e){return"IndexedDbTransactionError"===e.name}
/**
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
 */
class ud{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function dd(e){return 0===e&&1/e==-1/0}ud.ct=-1;const pd=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],fd=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],gd=fd;
/**
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
 */
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
 */
class md{constructor(e,t){this.comparator=e,this.root=t||vd.EMPTY}insert(e,t){return new md(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,vd.BLACK,null,null))}remove(e){return new md(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vd.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _d(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _d(this.root,e,this.comparator,!1)}getReverseIterator(){return new _d(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _d(this.root,e,this.comparator,!0)}}class _d{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class vd{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:vd.RED,this.left=null!=i?i:vd.EMPTY,this.right=null!=r?r:vd.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new vd(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return vd.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return vd.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vd.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vd.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Wu();if(this.right.isRed())throw Wu();const e=this.left.check();if(e!==this.right.check())throw Wu();return e+(this.isRed()?0:1)}}vd.EMPTY=null,vd.RED=!0,vd.BLACK=!1,vd.EMPTY=new class{constructor(){this.size=0}get key(){throw Wu()}get value(){throw Wu()}get color(){throw Wu()}get left(){throw Wu()}get right(){throw Wu()}copy(e,t,n,i,r){return this}insert(e,t,n){return new vd(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
 */
class yd{constructor(e){this.comparator=e,this.data=new md(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wd(this.data.getIterator())}getIteratorFrom(e){return new wd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof yd))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yd(this.comparator);return t.data=e,t}}class wd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class bd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */
/**
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
 */
class Ed{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new bd("Invalid base64 string: "+e):e}}(e);return new Ed(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ed(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return sd(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ed.EMPTY_BYTE_STRING=new Ed("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Td(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Sd(e){return"string"==typeof e?Ed.fromBase64String(e):Ed.fromUint8Array(e)}
/**
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
 */
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
 */
class Id{constructor(e,t,n,i,r,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Cd{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Cd("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Cd&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */function kd(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
 */
new md(ld.comparator);new md(ld.comparator);new md(ld.comparator),new yd(ld.comparator);new yd(sd);
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
 */
var Rd,Ad;(Ad=Rd||(Rd={}))[Ad.OK=0]="OK",Ad[Ad.CANCELLED=1]="CANCELLED",Ad[Ad.UNKNOWN=2]="UNKNOWN",Ad[Ad.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ad[Ad.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ad[Ad.NOT_FOUND=5]="NOT_FOUND",Ad[Ad.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ad[Ad.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ad[Ad.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ad[Ad.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ad[Ad.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ad[Ad.ABORTED=10]="ABORTED",Ad[Ad.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ad[Ad.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ad[Ad.INTERNAL=13]="INTERNAL",Ad[Ad.UNAVAILABLE=14]="UNAVAILABLE",Ad[Ad.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */class Nd{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(Td(e.integerValue));else if("doubleValue"in e){const n=Td(e.doubleValue);isNaN(n)?this.ae(t,13):(this.ae(t,15),dd(n)?t.he(0):t.he(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ae(t,20),"string"==typeof n?t.le(n):(t.le(`${n.seconds||""}`),t.he(n.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(Sd(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ae(t,45),t.he(n.latitude||0),t.he(n.longitude||0)}else"mapValue"in e?kd(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):Wu()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const n=e.fields||{};this.ae(t,55);for(const e of Object.keys(n))this.fe(e,t),this.ue(n[e],t)}ge(e,t){const n=e.values||[];this.ae(t,50);for(const e of n)this.ue(e,t)}_e(e,t){this.ae(t,37),ld.fromName(e).path.forEach((e=>{this.ae(t,60),this.ye(e,t)}))}ae(e,t){e.he(t)}de(e){e.he(2)}}Nd.pe=new Nd;
/**
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
 */
new Uint8Array(0);class Od{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Od(e,Od.DEFAULT_COLLECTION_PERCENTILE,Od.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
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
 */Od.DEFAULT_COLLECTION_PERCENTILE=10,Od.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Od.DEFAULT=new Od(41943040,Od.DEFAULT_COLLECTION_PERCENTILE,Od.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Od.DISABLED=new Od(-1,0,0);function Pd(){return"undefined"!=typeof document?document:null}
/**
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
 */
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
 */
class Ld{constructor(e,t,n=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=t,this._o=n,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),i=Math.max(0,t-n);i>0&&zu("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,(()=>(this.To=Date.now(),e()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
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
 */
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
 */
class xd{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new Yu,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new xd(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ku($u.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dd(e,t){if(qu("AsyncQueue",`${t}: ${e}`),hd(e))return new Ku($u.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */
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
 */
class Md{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=ju.UNAUTHENTICATED,this.clientId=rd.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{zu("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(zu("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ku($u.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yu;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Dd(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}
/**
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
 */
const Ud=new Map;
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
 */
/**
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
 */
class Fd{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Ku($u.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Ku($u.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new Ku($u.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
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
 */class jd{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ku($u.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Ku($u.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fd(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Ju;switch(e.type){case"firstParty":return new ed(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Ku($u.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ud.get(e);t&&(zu("ComponentProvider","Removing Datastore"),Ud.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
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
 */
class Bd{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Ld(this,"async_queue_retry"),this.qc=()=>{const e=Pd();e&&zu("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Co.vo()};const e=Pd();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=Pd();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise((()=>{}));const t=new Yu;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.kc.push(e),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!hd(e))throw e;zu("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(e){const t=this.Nc.then((()=>(this.Fc=!0,e().catch((e=>{this.Mc=e,this.Fc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e);throw qu("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Fc=!1,e))))));return this.Nc=t,t}enqueueAfterDelay(e,t,n){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const i=xd.createAndSchedule(this,e,t,n,(e=>this.Qc(e)));return this.$c.push(i),i}Uc(){this.Mc&&Wu()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Nc,await e}while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}class Hd extends jd{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Bd,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zd(this),this._firestoreClient.terminate()}}function zd(e){var t,n,i;const r=e._freezeSettings(),s=function(e,t,n,i){return new Id(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new Md(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=r.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}new RegExp("[~\\*/\\[\\]]");!function(e,t=!0){Bu=kr,Tr(new Fi("firestore",((e,{instanceIdentifier:n,options:i})=>{const r=e.getProvider("app").getImmediate(),s=new Hd(new Qu(e.getProvider("auth-internal")),new nd(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Ku($u.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cd(e.options.projectId,t)}(r,n),r);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),Nr(Fu,"3.10.0",e),Nr(Fu,"3.10.0","esm2017")}();const qd="@firebase/database",Vd="0.14.4";
/**
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
 */let Wd="";
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
 */
class Gd{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_i(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:mi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
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
 */class $d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return bi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
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
 */const Kd=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Gd(t)}}catch(e){}return new $d},Yd=Kd("localStorage"),Xd=Kd("sessionStorage"),Jd=new Yi("@firebase/database"),Qd=function(){let e=1;return function(){return e++}}(),Zd=function(e){const t=Di(e),n=new Ni;n.update(t);const i=n.digest();return $n.encodeByteArray(i)},ep=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=ep.apply(null,i):t+="object"==typeof i?_i(i):i,t+=" "}return t};let tp=null,np=!0;const ip=function(e,t){Vn(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Jd.logLevel=qi.VERBOSE,tp=Jd.log.bind(Jd),t&&Xd.set("logging_enabled",!0)):"function"==typeof e?tp=e:(tp=null,Xd.remove("logging_enabled"))},rp=function(...e){if(!0===np&&(np=!1,null===tp&&!0===Xd.get("logging_enabled")&&ip(!0)),tp){const t=ep.apply(null,e);tp(t)}},sp=function(e){return function(...t){rp(e,...t)}},op=function(...e){const t="FIREBASE INTERNAL ERROR: "+ep(...e);Jd.error(t)},ap=function(...e){const t=`FIREBASE FATAL ERROR: ${ep(...e)}`;throw Jd.error(t),new Error(t)},lp=function(...e){const t="FIREBASE WARNING: "+ep(...e);Jd.warn(t)},cp=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},hp="[MIN_NAME]",up="[MAX_NAME]",dp=function(e,t){if(e===t)return 0;if(e===hp||t===up)return-1;if(t===hp||e===up)return 1;{const n=wp(e),i=wp(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},pp=function(e,t){return e===t?0:e<t?-1:1},fp=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+_i(t))},gp=function(e){if("object"!=typeof e||null===e)return _i(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=_i(t[i]),n+=":",n+=gp(e[t[i]]);return n+="}",n},mp=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function _p(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const vp=function(e){Vn(!cp(e),"Invalid JSON number");const t=1023;let n,i,r,s,o;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const yp=new RegExp("^-?(0*)\\d{1,10}$"),wp=function(e){if(yp.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},bp=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw lp("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Ep=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
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
 */
class Tp{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){lp(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
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
 */class Sp{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(rp("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',lp(e)}}class Ip{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ip.OWNER="owner";
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
 */
const Cp="5",kp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Rp="ac",Ap="websocket",Np="long_polling";
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
 */
class Op{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yd.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yd.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Pp(e,t,n){let i;if(Vn("string"==typeof t,"typeof type must == string"),Vn("object"==typeof n,"typeof params must == object"),t===Ap)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Np)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return _p(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
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
 */class Lp{constructor(){this.counters_={}}incrementCounter(e,t=1){bi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Qn(this.counters_)}}
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
 */const xp={},Dp={};function Mp(e){const t=e.toString();return xp[t]||(xp[t]=new Lp),xp[t]}
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
 */
class Up{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&bp((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
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
 */const Fp="start";class jp{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=sp(e),this.stats_=Mp(t),this.urlFn=e=>(this.appCheckToken&&(e[Rp]=this.appCheckToken),Pp(t,Np,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Up(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(ui()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bp(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===Fp)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[Fp]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=Cp,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[Rp]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&kp.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){jp.forceAllow_=!0}static forceDisallow(){jp.forceDisallow_=!0}static isAvailable(){return!ui()&&(!!jp.forceAllow_||!(jp.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=_i(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Yn(t),i=mp(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(ui())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=_i(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Bp{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,ui())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=Qd(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Bp.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){rp("frame writing exception"),e.stack&&rp(e.stack),rp(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||rp("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){ui()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{rp("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
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
 */let Hp=null;"undefined"!=typeof MozWebSocket?Hp=MozWebSocket:"undefined"!=typeof WebSocket&&(Hp=WebSocket);class zp{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=sp(this.connId),this.stats_=Mp(t),this.connURL=zp.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const s={};return s.v=Cp,!ui()&&"undefined"!=typeof location&&location.hostname&&kp.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s[Rp]=i),r&&(s.p=r),Pp(e,Ap,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yd.set("previous_websocket_failure",!0);try{let e;if(ui()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${Cp}/${Wd}/${Rn.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new Hp(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){zp.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Hp&&!zp.forceDisallow_}static previouslyFailed(){return Yd.isInMemoryStorage||!0===Yd.get("previous_websocket_failure")}markConnectionHealthy(){Yd.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=mi(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Vn(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=_i(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=mp(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}zp.responsesRequiredToBeHealthy=2,zp.healthyTimeout=3e4;
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
 */
class qp{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[jp,zp]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=zp&&zp.isAvailable();let n=t&&!zp.previouslyFailed();if(e.webSocketOnly&&(t||lp("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[zp];else{const e=this.transports_=[];for(const t of qp.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);qp.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qp.globalTransportInitialized_=!1;class Vp{constructor(e,t,n,i,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=sp("c:"+this.id+":"),this.transportManager_=new qp(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ep((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=fp("t",e),n=fp("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=fp("t",e),n=fp("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=fp("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?op("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):op("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Cp!==n&&lp("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Ep((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ep((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yd.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
 */class Wp{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class Gp{constructor(e){this.allowedEvents_=e,this.listeners_={},Vn(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){Vn(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
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
 */class $p extends Gp{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||ai()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new $p}getInitialEvent(e){return Vn("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
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
 */const Kp=32,Yp=768;class Xp{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Jp(){return new Xp("")}function Qp(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Zp(e){return e.pieces_.length-e.pieceNum_}function ef(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Xp(e.pieces_,t)}function tf(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function nf(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function rf(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Xp(t,0)}function sf(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Xp)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Xp(n,0)}function of(e){return e.pieceNum_>=e.pieces_.length}function af(e,t){const n=Qp(e),i=Qp(t);if(null===n)return t;if(n===i)return af(ef(e),ef(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function lf(e,t){if(Zp(e)!==Zp(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function cf(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Zp(e)>Zp(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class hf{constructor(e,t){this.errorPrefix_=t,this.parts_=nf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Mi(this.parts_[e]);uf(this)}}function uf(e){if(e.byteLength_>Yp)throw new Error(e.errorPrefix_+"has a key path longer than "+Yp+" bytes ("+e.byteLength_+").");if(e.parts_.length>Kp)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Kp+") or object contains a cycle "+df(e))}function df(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class pf extends Gp{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new pf}getInitialEvent(e){return Vn("visible"===e,"Unknown event type: "+e),[this.visible_]}}
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
 */const ff=1e3;class gf extends Wp{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=gf.nextPersistentConnectionId_++,this.log_=sp("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ff,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ui())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");pf.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&$p.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(_i(r)),Vn(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new si,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),Vn(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Vn(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;gf.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&bi(e,"w")){const n=Ei(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();lp(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||wi(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=yi(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Vn(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_i(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):op("Unrecognized action received from server: "+_i(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Vn(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ff,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ff,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=ff),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+gf.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(e){Vn(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?rp("getToken() completed but was canceled"):(rp("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new Vp(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{lp(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&lp(e),a())}}}interrupt(e){rp("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rp("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ti(this.interruptReasons_)&&(this.reconnectDelay_=ff,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>gp(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Xp(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){rp("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){rp("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";ui()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Wd.replace(/\./g,"-")]=1,ai()?e["framework.cordova"]=1:ci()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$p.getInstance().currentlyOnline();return Ti(this.interruptReasons_)&&e}}gf.nextPersistentConnectionId_=0,gf.nextConnectionId_=0;
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
 */
class mf{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new mf(e,t)}}
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
 */class _f{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new mf(hp,e),i=new mf(hp,t);return 0!==this.compare(n,i)}minPost(){return mf.MIN}}
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
 */let vf;class yf extends _f{static get __EMPTY_NODE(){return vf}static set __EMPTY_NODE(e){vf=e}compare(e,t){return dp(e.name,t.name)}isDefinedOn(e){throw Wn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return mf.MIN}maxPost(){return new mf(up,vf)}makePost(e,t){return Vn("string"==typeof e,"KeyIndex indexValue must always be a string."),new mf(e,vf)}toString(){return".key"}}const wf=new yf;
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
 */class bf{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ef{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Ef.RED,this.left=null!=i?i:Tf.EMPTY_NODE,this.right=null!=r?r:Tf.EMPTY_NODE}copy(e,t,n,i,r){return new Ef(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Tf.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Tf.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ef.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ef.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ef.RED=!0,Ef.BLACK=!1;class Tf{constructor(e,t=Tf.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Tf(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ef.BLACK,null,null))}remove(e){return new Tf(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ef.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bf(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new bf(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new bf(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new bf(this.root_,null,this.comparator_,!0,e)}}
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
 */
function Sf(e,t){return dp(e.name,t.name)}function If(e,t){return dp(e,t)}
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
 */let Cf;Tf.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new Ef(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const kf=function(e){return"number"==typeof e?"number:"+vp(e):"string:"+e},Rf=function(e){if(e.isLeafNode()){const t=e.val();Vn("string"==typeof t||"number"==typeof t||"object"==typeof t&&bi(t,".sv"),"Priority must be a string or number.")}else Vn(e===Cf||e.isEmpty(),"priority of unexpected type.");Vn(e===Cf||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
 */
let Af,Nf,Of;class Pf{constructor(e,t=Pf.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Vn(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Rf(this.priorityNode_)}static set __childrenNodeConstructor(e){Af=e}static get __childrenNodeConstructor(){return Af}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Pf(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Pf.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return of(e)?this:".priority"===Qp(e)?this.priorityNode_:Pf.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Pf.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Qp(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Vn(".priority"!==n||1===Zp(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Pf.__childrenNodeConstructor.EMPTY_NODE.updateChild(ef(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+kf(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?vp(this.value_):this.value_,this.lazyHash_=Zd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Pf.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Pf.__childrenNodeConstructor?-1:(Vn(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Pf.VALUE_TYPE_ORDER.indexOf(t),r=Pf.VALUE_TYPE_ORDER.indexOf(n);return Vn(i>=0,"Unknown leaf type: "+t),Vn(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Pf.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Lf=new class extends _f{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?dp(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return mf.MIN}maxPost(){return new mf(up,new Pf("[PRIORITY-POST]",Of))}makePost(e,t){const n=Nf(e);return new mf(t,new Pf("[PRIORITY-POST]",n))}toString(){return".priority"}},xf=Math.log(2);
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
 */class Df{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/xf,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Mf=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Ef(a,o.node,Ef.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=r(t,l),h=r(l+1,i);return o=e[l],a=n?n(o):o,new Ef(a,o.node,Ef.BLACK,c,h)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const c=r(s+1,a),h=e[s],u=n?n(h):h;l(new Ef(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Ef.BLACK):(a(i,Ef.BLACK),a(i,Ef.RED))}return s}(new Df(e.length));return new Tf(i||t,s)};
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
 */let Uf;const Ff={};class jf{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Vn(Ff&&Lf,"ChildrenNode.ts has not been loaded"),Uf=Uf||new jf({".priority":Ff},{".priority":Lf}),Uf}get(e){const t=Ei(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Tf?t:null}hasIndex(e){return bi(this.indexSet_,e.toString())}addIndex(e,t){Vn(e!==wf,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(mf.Wrap);let s,o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?Mf(n,e.getCompare()):Ff;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new jf(c,l)}addToIndexes(e,t){const n=Si(this.indexes_,((n,i)=>{const r=Ei(this.indexSet_,i);if(Vn(r,"Missing index implementation for "+i),n===Ff){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(mf.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),Mf(n,r.getCompare())}return Ff}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new mf(e.name,i))),r.insert(e,e.node)}}));return new jf(n,this.indexSet_)}removeFromIndexes(e,t){const n=Si(this.indexes_,(n=>{if(n===Ff)return n;{const i=t.get(e.name);return i?n.remove(new mf(e.name,i)):n}}));return new jf(n,this.indexSet_)}}
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
 */let Bf;class Hf{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Rf(this.priorityNode_),this.children_.isEmpty()&&Vn(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bf||(Bf=new Hf(new Tf(If),null,jf.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bf}updatePriority(e){return this.children_.isEmpty()?this:new Hf(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Bf:t}}getChild(e){const t=Qp(e);return null===t?this:this.getImmediateChild(t).getChild(ef(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Vn(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new mf(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?Bf:this.priorityNode_;return new Hf(i,s,r)}}updateChild(e,t){const n=Qp(e);if(null===n)return t;{Vn(".priority"!==Qp(e)||1===Zp(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(ef(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(Lf,((s,o)=>{t[s]=o.val(e),n++,r&&Hf.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+kf(this.getPriority().val())+":"),this.forEachChild(Lf,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Zd(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new mf(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new mf(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new mf(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,mf.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,mf.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zf?-1:0}withIndex(e){if(e===wf||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Hf(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===wf||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Lf),n=t.getIterator(Lf);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===wf?null:this.indexMap_.get(e.toString())}}Hf.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const zf=new class extends Hf{constructor(){super(new Tf(If),Hf.EMPTY_NODE,jf.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Hf.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(mf,{MIN:{value:new mf(hp,Hf.EMPTY_NODE)},MAX:{value:new mf(up,zf)}}),yf.__EMPTY_NODE=Hf.EMPTY_NODE,Pf.__childrenNodeConstructor=Hf,Cf=zf,function(e){Of=e}(zf);
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
 */
const qf=!0;function Vf(e,t=null){if(null===e)return Hf.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Vn(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Pf(e,Vf(t))}if(e instanceof Array||!qf){let n=Hf.EMPTY_NODE;return _p(e,((t,i)=>{if(bi(e,t)&&"."!==t.substring(0,1)){const e=Vf(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Vf(t))}{const n=[];let i=!1;if(_p(e,((e,t)=>{if("."!==e.substring(0,1)){const r=Vf(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new mf(e,r)))}})),0===n.length)return Hf.EMPTY_NODE;const r=Mf(n,Sf,(e=>e.name),If);if(i){const e=Mf(n,Lf.getCompare());return new Hf(r,Vf(t),new jf({".priority":e},{".priority":Lf}))}return new Hf(r,Vf(t),jf.Default)}}!function(e){Nf=e}(Vf);
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
 */
class Wf extends _f{constructor(e){super(),this.indexPath_=e,Vn(!of(e)&&".priority"!==Qp(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?dp(e.name,t.name):r}makePost(e,t){const n=Vf(e),i=Hf.EMPTY_NODE.updateChild(this.indexPath_,n);return new mf(t,i)}maxPost(){const e=Hf.EMPTY_NODE.updateChild(this.indexPath_,zf);return new mf(up,e)}toString(){return nf(this.indexPath_,0).join("/")}}
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
 */const Gf=new class extends _f{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?dp(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return mf.MIN}maxPost(){return mf.MAX}makePost(e,t){const n=Vf(e);return new mf(t,n)}toString(){return".value"}};
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
 */function $f(e){return{type:"value",snapshotNode:e}}function Kf(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Yf(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Xf(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
 */
class Jf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Lf}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Vn(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Vn(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hp}hasEnd(){return this.endSet_}getIndexEndValue(){return Vn(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Vn(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:up}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Vn(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Lf}copy(){const e=new Jf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Qf(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Lf?n="$priority":e.index_===Gf?n="$value":e.index_===wf?n="$key":(Vn(e.index_ instanceof Wf,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=_i(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=_i(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+_i(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=_i(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+_i(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Zf(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Lf&&(t.i=e.index_.toString()),t}
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
 */class eg extends Wp{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=sp("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Vn(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=eg.getListenId_(e,n),o={};this.listens_[s]=o;const a=Qf(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),Ei(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=eg.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Qf(e._queryParams),n=e._path.toString(),i=new si;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ki(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=mi(o.responseText)}catch(e){lp("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&lp("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
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
 */class tg{constructor(){this.rootNode_=Hf.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
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
 */function ng(){return{value:null,children:new Map}}function ig(e,t,n){if(of(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Qp(t);e.children.has(i)||e.children.set(i,ng());ig(e.children.get(i),t=ef(t),n)}}function rg(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,i)=>{rg(i,new Xp(t.toString()+"/"+e),n)}))}class sg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&_p(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
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
 */class og{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new sg(e);const n=1e4+2e4*Math.random();Ep(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;_p(e,((e,i)=>{i>0&&bi(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Ep(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
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
 */var ag,lg;function cg(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(lg=ag||(ag={}))[lg.OVERWRITE=0]="OVERWRITE",lg[lg.MERGE=1]="MERGE",lg[lg.ACK_USER_WRITE=2]="ACK_USER_WRITE",lg[lg.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class hg{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=ag.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(of(this.path)){if(null!=this.affectedTree.value)return Vn(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Xp(e));return new hg(Jp(),t,this.revert)}}return Vn(Qp(this.path)===e,"operationForChild called for unrelated child."),new hg(ef(this.path),this.affectedTree,this.revert)}}
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
 */
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
 */
class ug{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=ag.OVERWRITE}operationForChild(e){return of(this.path)?new ug(this.source,Jp(),this.snap.getImmediateChild(e)):new ug(this.source,ef(this.path),this.snap)}}
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
 */class dg{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=ag.MERGE}operationForChild(e){if(of(this.path)){const t=this.children.subtree(new Xp(e));return t.isEmpty()?null:t.value?new ug(this.source,Jp(),t.value):new dg(this.source,Jp(),t)}return Vn(Qp(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new dg(this.source,ef(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
 */class pg{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(of(e))return this.isFullyInitialized()&&!this.filtered_;const t=Qp(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
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
 */function fg(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Wn("Should only compare child_ events.");const i=new mf(t.childName,t.snapshotNode),r=new mf(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
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
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function gg(e,t){return{eventCache:e,serverCache:t}}function mg(e,t,n,i){return gg(new pg(t,n,i),e.serverCache)}function _g(e,t,n,i){return gg(e.eventCache,new pg(t,n,i))}function vg(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function yg(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let wg;class bg{constructor(e,t=(()=>(wg||(wg=new Tf(pp)),wg))()){this.value=e,this.children=t}static fromObject(e){let t=new bg(null);return _p(e,((e,n)=>{t=t.set(new Xp(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Jp(),value:this.value};if(of(e))return null;{const n=Qp(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(ef(e),t);if(null!=r){return{path:sf(new Xp(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(of(e))return this;{const t=Qp(e),n=this.children.get(t);return null!==n?n.subtree(ef(e)):new bg(null)}}set(e,t){if(of(e))return new bg(t,this.children);{const n=Qp(e),i=(this.children.get(n)||new bg(null)).set(ef(e),t),r=this.children.insert(n,i);return new bg(this.value,r)}}remove(e){if(of(e))return this.children.isEmpty()?new bg(null):new bg(null,this.children);{const t=Qp(e),n=this.children.get(t);if(n){const i=n.remove(ef(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new bg(null):new bg(this.value,r)}return this}}get(e){if(of(e))return this.value;{const t=Qp(e),n=this.children.get(t);return n?n.get(ef(e)):null}}setTree(e,t){if(of(e))return t;{const n=Qp(e),i=(this.children.get(n)||new bg(null)).setTree(ef(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new bg(this.value,r)}}fold(e){return this.fold_(Jp(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(sf(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Jp(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(of(e))return null;{const i=Qp(e),r=this.children.get(i);return r?r.findOnPath_(ef(e),sf(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Jp(),t)}foreachOnPath_(e,t,n){if(of(e))return this;{this.value&&n(t,this.value);const i=Qp(e),r=this.children.get(i);return r?r.foreachOnPath_(ef(e),sf(t,i),n):new bg(null)}}foreach(e){this.foreach_(Jp(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(sf(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
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
 */class Eg{constructor(e){this.writeTree_=e}static empty(){return new Eg(new bg(null))}}function Tg(e,t,n){if(of(t))return new Eg(new bg(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=af(r,t);return s=s.updateChild(o,n),new Eg(e.writeTree_.set(r,s))}{const i=new bg(n),r=e.writeTree_.setTree(t,i);return new Eg(r)}}}function Sg(e,t,n){let i=e;return _p(n,((e,n)=>{i=Tg(i,sf(t,e),n)})),i}function Ig(e,t){if(of(t))return Eg.empty();{const n=e.writeTree_.setTree(t,new bg(null));return new Eg(n)}}function Cg(e,t){return null!=kg(e,t)}function kg(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(af(n.path,t)):null}function Rg(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Lf,((e,n)=>{t.push(new mf(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new mf(e,n.value))})),t}function Ag(e,t){if(of(t))return e;{const n=kg(e,t);return new Eg(null!=n?new bg(n):e.writeTree_.subtree(t))}}function Ng(e){return e.writeTree_.isEmpty()}function Og(e,t){return Pg(Jp(),e.writeTree_,t)}function Pg(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(Vn(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Pg(sf(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(sf(e,".priority"),i)),n}}
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
 */function Lg(e,t){return Gg(t,e)}function xg(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));Vn(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Dg(t,i.path)?r=!1:cf(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=Ug(e.allWrites,Mg,Jp()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Ig(e.visibleWrites,i.path);else{_p(i.children,(t=>{e.visibleWrites=Ig(e.visibleWrites,sf(i.path,t))}))}return!0}return!1}function Dg(e,t){if(e.snap)return cf(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&cf(sf(e.path,n),t))return!0;return!1}function Mg(e){return e.visible}function Ug(e,t,n){let i=Eg.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)cf(n,e)?(t=af(n,e),i=Tg(i,t,s.snap)):cf(e,n)&&(t=af(e,n),i=Tg(i,Jp(),s.snap.getChild(t)));else{if(!s.children)throw Wn("WriteRecord should have .snap or .children");if(cf(n,e))t=af(n,e),i=Sg(i,t,s.children);else if(cf(e,n))if(t=af(e,n),of(t))i=Sg(i,Jp(),s.children);else{const e=Ei(s.children,Qp(t));if(e){const n=e.getChild(ef(t));i=Tg(i,Jp(),n)}}}}}return i}function Fg(e,t,n,i,r){if(i||r){const s=Ag(e.visibleWrites,t);if(!r&&Ng(s))return n;if(r||null!=n||Cg(s,Jp())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(cf(e.path,t)||cf(t,e.path))};return Og(Ug(e.allWrites,s,t),n||Hf.EMPTY_NODE)}return null}{const i=kg(e.visibleWrites,t);if(null!=i)return i;{const i=Ag(e.visibleWrites,t);if(Ng(i))return n;if(null!=n||Cg(i,Jp())){return Og(i,n||Hf.EMPTY_NODE)}return null}}}function jg(e,t,n,i){return Fg(e.writeTree,e.treePath,t,n,i)}function Bg(e,t){return function(e,t,n){let i=Hf.EMPTY_NODE;const r=kg(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Lf,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=Ag(e.visibleWrites,t);return n.forEachChild(Lf,((e,t)=>{const n=Og(Ag(r,new Xp(e)),t);i=i.updateImmediateChild(e,n)})),Rg(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Rg(Ag(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Hg(e,t,n,i){return function(e,t,n,i,r){Vn(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=sf(t,n);if(Cg(e.visibleWrites,s))return null;{const t=Ag(e.visibleWrites,s);return Ng(t)?r.getChild(n):Og(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function zg(e,t){return function(e,t){return kg(e.visibleWrites,t)}(e.writeTree,sf(e.treePath,t))}function qg(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const l=Ag(e.visibleWrites,t),c=kg(l,Jp());if(null!=c)a=c;else{if(null==n)return[];a=Og(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<r;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function Vg(e,t,n){return function(e,t,n,i){const r=sf(t,n),s=kg(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return Og(Ag(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Wg(e,t){return Gg(sf(e.treePath,t),e.writeTree)}function Gg(e,t){return{treePath:e,writeTree:t}}
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
 */class $g{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Vn("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Vn(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Xf(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Yf(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Kf(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw Wn("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Xf(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
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
 */const Kg=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Yg{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new pg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vg(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:yg(this.viewCache_),r=qg(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
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
 */function Xg(e,t,n,i,r){const s=new $g;let o,a;if(n.type===ag.OVERWRITE){const l=n;l.source.fromUser?o=Zg(e,t,l.path,l.snap,i,r,s):(Vn(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!of(l.path),o=Qg(e,t,l.path,l.snap,i,r,a,s))}else if(n.type===ag.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,l)=>{const c=sf(n,i);em(t,Qp(c))&&(a=Zg(e,a,c,l,r,s,o))})),i.foreach(((i,l)=>{const c=sf(n,i);em(t,Qp(c))||(a=Zg(e,a,c,l,r,s,o))})),a}(e,t,l.path,l.children,i,r,s):(Vn(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=nm(e,t,l.path,l.children,i,r,a,s))}else if(n.type===ag.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,r,s){let o;if(null!=zg(i,n))return t;{const a=new Yg(i,t,r),l=t.eventCache.getNode();let c;if(of(n)||".priority"===Qp(n)){let n;if(t.serverCache.isFullyInitialized())n=jg(i,yg(t));else{const e=t.serverCache.getNode();Vn(e instanceof Hf,"serverChildren would be complete if leaf node"),n=Bg(i,e)}c=e.filter.updateFullNode(l,n,s)}else{const r=Qp(n);let h=Vg(i,r,t.serverCache);null==h&&t.serverCache.isCompleteForChild(r)&&(h=l.getImmediateChild(r)),c=null!=h?e.filter.updateChild(l,r,h,ef(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,Hf.EMPTY_NODE,ef(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=jg(i,yg(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=zg(i,Jp()),mg(t,c,o,e.filter.filtersNodes())}}
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
 */(e,t,a.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=zg(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(of(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Qg(e,t,n,l.getNode().getChild(n),r,s,a,o);if(of(n)){let i=new bg(null);return l.getNode().forEachChild(wf,((e,t)=>{i=i.set(new Xp(e),t)})),nm(e,t,n,i,r,s,a,o)}return t}{let c=new bg(null);return i.foreach(((e,t)=>{const i=sf(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),nm(e,t,n,c,r,s,a,o)}}(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==ag.LISTEN_COMPLETE)throw Wn("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=_g(t,s.getNode(),s.isFullyInitialized()||of(n),s.isFiltered());return Jg(e,o,n,i,Kg,r)}(e,t,n.path,i,s)}const l=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=vg(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push($f(vg(t)))}}(t,o,l),{viewCache:o,changes:l}}function Jg(e,t,n,i,r,s){const o=t.eventCache;if(null!=zg(i,n))return t;{let a,l;if(of(n))if(Vn(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=yg(t),r=Bg(i,n instanceof Hf?n:Hf.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=jg(i,yg(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=Qp(n);if(".priority"===c){Vn(1===Zp(n),"Can't have a priority with additional path components");const r=o.getNode();l=t.serverCache.getNode();const s=Hg(i,n,r,l);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const h=ef(n);let u;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=Hg(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(c).updateChild(h,e):o.getNode().getImmediateChild(c)}else u=Vg(i,c,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),c,u,h,r,s):o.getNode()}}return mg(t,a,o.isFullyInitialized()||of(n),e.filter.filtersNodes())}}function Qg(e,t,n,i,r,s,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(of(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=Qp(n);if(!l.isCompleteForPath(n)&&Zp(n)>1)return t;const r=ef(n),s=l.getNode().getImmediateChild(e).updateChild(r,i);c=".priority"===e?h.updatePriority(l.getNode(),s):h.updateChild(l.getNode(),e,s,r,Kg,null)}const u=_g(t,c,l.isFullyInitialized()||of(n),h.filtersNodes());return Jg(e,u,n,r,new Yg(r,u,s),a)}function Zg(e,t,n,i,r,s,o){const a=t.eventCache;let l,c;const h=new Yg(r,t,s);if(of(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=mg(t,c,!0,e.filter.filtersNodes());else{const r=Qp(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=mg(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=ef(n),c=a.getNode().getImmediateChild(r);let u;if(of(s))u=i;else{const e=h.getCompleteChild(r);u=null!=e?".priority"===tf(s)&&e.getChild(rf(s)).isEmpty()?e:e.updateChild(s,i):Hf.EMPTY_NODE}if(c.equals(u))l=t;else{l=mg(t,e.filter.updateChild(a.getNode(),r,u,s,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function em(e,t){return e.eventCache.isCompleteForChild(t)}function tm(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function nm(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=of(n)?i:new bg(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=tm(0,t.serverCache.getNode().getImmediateChild(n),i);c=Qg(e,c,new Xp(n),l,r,s,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!l){const l=tm(0,t.serverCache.getNode().getImmediateChild(n),i);c=Qg(e,c,new Xp(n),l,r,s,o,a)}})),c}function im(e,t){const n=yg(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!of(t)&&!n.getImmediateChild(Qp(t)).isEmpty())?n.getChild(t):null}function rm(e,t,n,i){t.type===ag.MERGE&&null!==t.source.queryId&&(Vn(yg(e.viewCache_),"We should always have a full cache before handling merges"),Vn(vg(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=Xg(e.processor_,r,t,n,i);var o,a;return o=e.processor_,a=s.viewCache,Vn(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),Vn(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),Vn(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,sm(e,s.changes,s.viewCache.eventCache.getNode(),null)}function sm(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;
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
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),fg(e,r,"child_removed",t,i,n),fg(e,r,"child_added",t,i,n),fg(e,r,"child_moved",s,i,n),fg(e,r,"child_changed",t,i,n),fg(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
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
 */let om,am;function lm(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return Vn(null!=s,"SyncTree gave us an op for an invalid query."),rm(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(rm(s,t,n,i));return r}}function cm(e,t){let n=null;for(const i of e.views.values())n=n||im(i,t);return n}class hm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new bg(null),this.pendingWriteTree_={visibleWrites:Eg.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function um(e,t,n,i,r){return function(e,t,n,i,r){Vn(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=Tg(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?mm(e,new ug({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function dm(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(xg(e.pendingWriteTree_,t)){let t=new bg(null);return null!=i.snap?t=t.set(Jp(),!0):_p(i.children,(e=>{t=t.set(new Xp(e),!0)})),mm(e,new hg(i.path,t,n))}return[]}function pm(e,t,n){return mm(e,new ug({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function fm(e,t,n,i){const r=ym(e,i);if(null!=r){const i=wm(r),s=i.path,o=i.queryId,a=af(s,t);return bm(e,s,new ug(cg(o),a,n))}return[]}function gm(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=cm(n,af(e,t));if(i)return i}));return Fg(i,t,r,n,!0)}function mm(e,t){return _m(t,e.syncPointTree_,null,Lg(e.pendingWriteTree_,Jp()))}function _m(e,t,n,i){if(of(e.path))return vm(e,t,n,i);{const r=t.get(Jp());null==n&&null!=r&&(n=cm(r,Jp()));let s=[];const o=Qp(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Wg(i,o);s=s.concat(_m(a,l,e,t))}return r&&(s=s.concat(lm(r,e,i,n))),s}}function vm(e,t,n,i){const r=t.get(Jp());null==n&&null!=r&&(n=cm(r,Jp()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=Wg(i,t),l=e.operationForChild(t);l&&(s=s.concat(vm(l,r,o,a)))})),r&&(s=s.concat(lm(r,e,i,n))),s}function ym(e,t){return e.tagToQueryMap.get(t)}function wm(e){const t=e.indexOf("$");return Vn(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Xp(e.substr(0,t))}}function bm(e,t,n){const i=e.syncPointTree_.get(t);Vn(i,"Missing sync point for query tag that we're tracking");return lm(i,n,Lg(e.pendingWriteTree_,t),null)}
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
 */
class Em{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Em(t)}node(){return this.node_}}class Tm{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=sf(this.path_,e);return new Tm(this.syncTree_,t)}node(){return gm(this.syncTree_,this.path_)}}const Sm=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},Im=function(e,t,n){return e&&"object"==typeof e?(Vn(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Cm(e[".sv"],t,n):"object"==typeof e[".sv"]?km(e[".sv"],t):void Vn(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Cm=function(e,t,n){if("timestamp"===e)return n.timestamp;Vn(!1,"Unexpected server value: "+e)},km=function(e,t,n){e.hasOwnProperty("increment")||Vn(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&Vn(!1,"Unexpected increment value: "+i);const r=t.node();if(Vn(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},Rm=function(e,t,n,i){return Nm(t,new Tm(n,e),i)},Am=function(e,t,n){return Nm(e,new Em(t),n)};function Nm(e,t,n){const i=e.getPriority().val(),r=Im(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=Im(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new Pf(s,Vf(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new Pf(r))),i.forEachChild(Lf,((e,i)=>{const r=Nm(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
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
 */class Om{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Pm(e,t){let n=t instanceof Xp?t:new Xp(t),i=e,r=Qp(n);for(;null!==r;){const e=Ei(i.node.children,r)||{children:{},childCount:0};i=new Om(r,i,e),n=ef(n),r=Qp(n)}return i}function Lm(e){return e.node.value}function xm(e,t){e.node.value=t,jm(e)}function Dm(e){return e.node.childCount>0}function Mm(e,t){_p(e.node.children,((n,i)=>{t(new Om(n,e,i))}))}function Um(e,t,n,i){n&&!i&&t(e),Mm(e,(e=>{Um(e,t,!0,i)})),n&&i&&t(e)}function Fm(e){return new Xp(null===e.parent?e.name:Fm(e.parent)+"/"+e.name)}function jm(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Lm(e)&&!Dm(e)}(n),r=bi(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,jm(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,jm(e))}
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
 */(e.parent,e.name,e)}const Bm=/[\[\].#$\/\u0000-\u001F\u007F]/,Hm=/[\[\].#$\u0000-\u001F\u007F]/,zm=10485760,qm=function(e){return"string"==typeof e&&0!==e.length&&!Bm.test(e)},Vm=function(e){return"string"==typeof e&&0!==e.length&&!Hm.test(e)},Wm=function(e,t,n){const i=n instanceof Xp?new hf(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+df(i));if("function"==typeof t)throw new Error(e+"contains a function "+df(i)+" with contents = "+t.toString());if(cp(t))throw new Error(e+"contains "+t.toString()+" "+df(i));if("string"==typeof t&&t.length>3495253.3333333335&&Mi(t)>zm)throw new Error(e+"contains a string greater than "+zm+" utf8 bytes "+df(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(_p(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!qm(t)))throw new Error(e+" contains an invalid key ("+t+") "+df(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=Mi(a),uf(o),Wm(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=Mi(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+df(i)+" in addition to actual children.")}},Gm=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!qm(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Vm(e)}(n))throw new Error(xi(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
 */
class $m{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Km(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||lf(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Ym(e,t,n){Km(e,n),Xm(e,(e=>cf(e,t)||cf(t,e)))}function Xm(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(Jm(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Jm(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();tp&&rp("event: "+n.toString()),bp(i)}}}
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
 */const Qm="repo_interrupt",Zm=25;class e_{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $m,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ng(),this.transactionQueueTree_=new Om,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function t_(e,t,n){if(e.stats_=Mp(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new eg(e.repoInfo_,((t,n,i,r)=>{r_(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>s_(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_i(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new gf(e.repoInfo_,t,((t,n,i,r)=>{r_(e,t,n,i,r)}),(t=>{s_(e,t)}),(t=>{!function(e,t){_p(t,((t,n)=>{o_(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Dp[n]||(Dp[n]=t()),Dp[n]}(e.repoInfo_,(()=>new og(e.stats_,e.server_))),e.infoData_=new tg,e.infoSyncTree_=new hm({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=pm(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),o_(e,"connected",!1),e.serverSyncTree_=new hm({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);Ym(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function n_(e){const t=e.infoData_.getNode(new Xp(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function i_(e){return Sm({timestamp:n_(e)})}function r_(e,t,n,i,r){e.dataUpdateCount++;const s=new Xp(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=Si(n,(e=>Vf(e)));o=function(e,t,n,i){const r=ym(e,i);if(r){const i=wm(r),s=i.path,o=i.queryId,a=af(s,t),l=bg.fromObject(n);return bm(e,s,new dg(cg(o),a,l))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=Vf(n);o=fm(e.serverSyncTree_,s,t,r)}else if(i){const t=Si(n,(e=>Vf(e)));o=function(e,t,n){const i=bg.fromObject(n);return mm(e,new dg({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=Vf(n);o=pm(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=d_(e,s)),Ym(e.eventQueue_,a,o)}function s_(e,t){o_(e,"connected",t),!1===t&&function(e){c_(e,"onDisconnectEvents");const t=i_(e),n=ng();rg(e.onDisconnect_,Jp(),((i,r)=>{const s=Rm(i,r,e.serverSyncTree_,t);ig(n,i,s)}));let i=[];rg(n,Jp(),((t,n)=>{i=i.concat(pm(e.serverSyncTree_,t,n));const r=__(e,t);d_(e,r)})),e.onDisconnect_=ng(),Ym(e.eventQueue_,Jp(),i)}(e)}function o_(e,t,n){const i=new Xp("/.info/"+t),r=Vf(n);e.infoData_.updateSnapshot(i,r);const s=pm(e.infoSyncTree_,i,r);Ym(e.eventQueue_,i,s)}function a_(e){return e.nextWriteId_++}function l_(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Qm)}function c_(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),rp(n,...t)}function h_(e,t,n){return gm(e.serverSyncTree_,t,n)||Hf.EMPTY_NODE}function u_(e,t=e.transactionQueueTree_){if(t||m_(e,t),Lm(t)){const n=f_(e,t);Vn(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=h_(e,t,i);let s=r;const o=r.hash();for(let e=0;e<n.length;e++){const i=n[e];Vn(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=af(t,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{c_(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(dm(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();m_(e,Pm(e.transactionQueueTree_,t)),u_(e,e.transactionQueueTree_),Ym(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)bp(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{lp("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}d_(e,t)}}),o)}(e,Fm(t),n)}else Dm(t)&&Mm(t,(t=>{u_(e,t)}))}function d_(e,t){const n=p_(e,t),i=Fm(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)),o=s.map((e=>e.currentWriteId));for(let s=0;s<t.length;s++){const l=t[s],c=af(n,l.path);let h,u=!1;if(Vn(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,h=l.abortReason,r=r.concat(dm(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=Zm)u=!0,h="maxretry",r=r.concat(dm(e.serverSyncTree_,l.currentWriteId,!0));else{const n=h_(e,l.path,o);l.currentInputSnapshot=n;const i=t[s].update(n.val());if(void 0!==i){Wm("transaction failed: Data returned ",i,l.path);let t=Vf(i);"object"==typeof i&&null!=i&&bi(i,".priority")||(t=t.updatePriority(n.getPriority()));const s=l.currentWriteId,a=i_(e),c=Am(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=a_(e),o.splice(o.indexOf(s),1),r=r.concat(um(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),r=r.concat(dm(e.serverSyncTree_,s,!0))}else u=!0,h="nodata",r=r.concat(dm(e.serverSyncTree_,l.currentWriteId,!0))}Ym(e.eventQueue_,n,r),r=[],u&&(t[s].status=2,a=t[s].unwatcher,setTimeout(a,Math.floor(0)),t[s].onComplete&&("nodata"===h?i.push((()=>t[s].onComplete(null,!1,t[s].currentInputSnapshot))):i.push((()=>t[s].onComplete(new Error(h),!1,null)))))}var a;m_(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)bp(i[e]);u_(e,e.transactionQueueTree_)}(e,f_(e,n),i),i}function p_(e,t){let n,i=e.transactionQueueTree_;for(n=Qp(t);null!==n&&void 0===Lm(i);)i=Pm(i,n),n=Qp(t=ef(t));return i}function f_(e,t){const n=[];return g_(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function g_(e,t,n){const i=Lm(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Mm(t,(t=>{g_(e,t,n)}))}function m_(e,t){const n=Lm(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,xm(t,n.length>0?n:void 0)}Mm(t,(t=>{m_(e,t)}))}function __(e,t){const n=Fm(p_(e,t)),i=Pm(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{v_(e,t)})),v_(e,i),Um(i,(t=>{v_(e,t)})),n}function v_(e,t){const n=Lm(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Vn(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Vn(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(dm(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?xm(t,void 0):n.length=s+1,Ym(e.eventQueue_,Fm(t),r);for(let e=0;e<i.length;e++)bp(i[e])}}
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
 */const y_=function(e,t){const n=w_(e),i=n.namespace;"firebase.com"===n.domain&&ap(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||ap("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&lp("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Op(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new Xp(n.pathString)}},w_=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):lp(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}},b_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let e=0;const t=[]}();
/**
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
 */
class E_{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return of(this._path)?null:tf(this._path)}get ref(){return new T_(this._repo,this._path)}get _queryIdentifier(){const e=Zf(this._queryParams),t=gp(e);return"{}"===t?"default":t}get _queryObject(){return Zf(this._queryParams)}isEqual(e){if(!((e=Ui(e))instanceof E_))return!1;const t=this._repo===e._repo,n=lf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class T_ extends E_{constructor(e,t){super(e,t,new Jf,!1)}get parent(){const e=rf(this._path);return null===e?null:new T_(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}!function(e){Vn(!om,"__referenceConstructor has already been defined"),om=e}(T_),function(e){Vn(!am,"__referenceConstructor has already been defined"),am=e}(T_);
/**
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
 */
const S_="FIREBASE_DATABASE_EMULATOR_HOST",I_={};let C_=!1;function k_(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||ap("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rp("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=y_(s,r),c=l.repoInfo;void 0!==Rn&&Rn.env&&(a=Rn.env[S_]),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=y_(s,r),c=l.repoInfo):o=!l.repoInfo.secure;const h=r&&o?new Ip(Ip.OWNER):new Sp(e.name,e.options,t);Gm("Invalid Firebase Database URL",l),of(l.path)||ap("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,i){let r=I_[t.name];r||(r={},I_[t.name]=r);let s=r[e.toURLString()];s&&ap("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new e_(e,C_,n,i),r[e.toURLString()]=s,s}(c,e,h,new Tp(e.name,n));return new R_(u,e)}class R_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(t_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new T_(this._repo,Jp())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=I_[t];n&&n[e.key]===e||ap(`Database ${t}(${e.repoInfo_}) has already been deleted.`),l_(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&ap("Cannot call "+e+" on a deleted database.")}}gf.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},gf.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
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
 */
function(e){Wd=kr,Tr(new Fi("database",((e,{instanceIdentifier:t})=>k_(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Nr(qd,Vd,e),Nr(qd,Vd,"esm2017")}
/**
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
 */();const A_=document.querySelector(".auth__backdrop"),N_=document.querySelector(".auth__form"),O_=(document.querySelector(".auth__unputs"),document.querySelector(".auth__button__close")),P_=document.querySelector("#user_name"),L_=document.querySelector("#user_email"),x_=document.querySelector("#user_password"),D_=document.querySelector("#btnLogin"),M_=document.querySelector("#btnSignup"),U_=document.querySelector("#btnLogout"),F_=document.querySelector(".link__signup"),j_=document.querySelector(".link__signin"),B_=document.querySelector(".message__login"),H_=document.querySelector(".users-login"),z_=document.querySelector(".users-data--tablet").lastElementChild;console.log(H_.textContent);const q_=function(e=Ar()){const t=Sr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Sr(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Ii(n.getOptions(),null!=t?t:{}))return e;Xr(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Fa,persistence:[$o,No,Po]}),i=ri("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>za)return;const i=null==t?void 0:t.token;qa!==i&&(qa=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){Ui(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){Ui(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const s=ni("auth");return s&&Js(n,`http://${s}`),n}(Rr({appName:"BookProject",apiKey:"AIzaSyCeohKwpW6233js3UPE5dhzJtQnOMgZfaI",authDomain:"itsharks-books-project.firebaseapp.com",databaseURL:"https://itsharks-books-project-default-rtdb.firebaseio.com",projectId:"itsharks-books-project",storageBucket:"itsharks-books-project.appspot.com",messagingSenderId:"560994919300",appId:"1:560994919300:web:10cdf4110616a9d01f33d1"}));const V_=e=>{e.code==$r.INVALID_PASSWORD?alert("Wrong password. Try again."):alert(`Error: ${e.message}`)},W_=e=>{B_.insertAdjacentHTML("beforeend",`<p class="auth__true__notify">You're logged in as <span>${e.email}<span></p>`),N_.style.display="none",U_.style.display="block"};j_.addEventListener("click",(()=>{D_.style.display="",M_.style.display="none",F_.style.display="",j_.style.display="none",P_.style.display="none",B_.innerHTML="",B_.insertAdjacentHTML("beforeend",'<p class="auth__false__notify">You\'re not logged in</p>')})),F_.addEventListener("click",(()=>{D_.remove(),M_.style.display="block",F_.style.display="none",j_.style.display="block",P_.style.display="block",B_.innerHTML="",B_.insertAdjacentHTML("beforeend",'<p class="auth__notify">You can SIGN UP on this website</p>')}));M_.addEventListener("click",(async e=>{e.preventDefault();const t=P_.value.trim(),n=L_.value.trim(),i=x_.value.trim();P_.style.display="block";try{await Io(q_,n,i).then((()=>{Co(q_.currentUser,{displayName:t})})),location.reload()}catch{}}));const G_=()=>{N_.style.display="block",U_.style.display="none",P_.style.display="none",L_.value="",x_.value=""};D_.addEventListener("click",(async e=>{e.preventDefault();const t=L_.value.trim(),n=x_.value.trim();console.log(t);try{await(i=q_,r=t,s=n,So(Ui(i),lo.credential(r,s)))}catch(e){console.log(`There was an error: ${e}`),V_(e)}var i,r,s;
/**
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
 */})),U_.addEventListener("click",(async()=>{var e;await(e=q_,Ui(e).signOut()),location.reload()})),O_.addEventListener("click",(()=>{A_.classList.add("is-hidden")})),(async()=>{var e,t,n;e=e=>{e?(B_.innerHTML="",z_.style.display="flex",W_(e),setTimeout((()=>{A_.classList.add("is-hidden")}),5e3),null!==e.displayName?H_.textContent=`${e.displayName}`:(H_.textContent=`${e.email}`.slice(0,2).toUpperCase(),H_.style.color="grey")):(B_.innerHTML="",B_.insertAdjacentHTML("beforeend",'<p class="auth__false__notify">You\'re not logged in</p>'),G_(),z_.style.display="none")},Ui(q_).onAuthStateChanged(e,t,n)})();const $_=document.querySelector("body"),K_=document.querySelector(".theme-switch .theme-switch__toggle"),Y_="light-theme",X_="dark-theme",J_=localStorage.getItem("theme");$_.classList.add(Y_),J_===X_&&($_.classList.replace(Y_,X_),K_.setAttribute("checked","checked")),K_.addEventListener("click",(function(){$_.classList.contains(Y_)?($_.classList.replace(Y_,X_),localStorage.setItem("theme",$_.getAttribute("class"))):($_.classList.replace(X_,Y_),localStorage.setItem("theme",$_.getAttribute("class")))}));const Q_=new dn;(async()=>{const e=[...await Q_.getCategories()].sort(((e,t)=>e.list_name.localeCompare(t.list_name)));yn.categoriesEl.innerHTML=`<li class="category is-active" data-id="all-categories">\n  All categories\n </li>\n    ${e.map((e=>`<li class="category" data-id= "${e.list_name}" >\n  ${e.list_name}\n </li>`)).join("")}\n    `;document.querySelectorAll(".category").forEach((e=>{e.addEventListener("click",(e=>{const t=document.querySelector(".category.is-active");t&&t.classList.remove("is-active"),e.target.classList.add("is-active");const n=e.target.dataset.id.trim();"all-categories"===e.target.dataset.id?(console.log("рендерим по всем категориям ",e.target.dataset.id),yn.book_card__title.innerHTML='<h1 class="book-card__title">\n          Best Sellers <span class="book-card__filter">Books</span>\n        </h1>',En()):(Sn(n),console.log("рендерим только категорию ",n))}))}))})();var Z_;Z_=new URL(s("kyEFX").resolve("1dOrv"),import.meta.url).toString();new URL(s("kyEFX").resolve("6S0ag"),import.meta.url).toString();var ev;ev=new URL(s("kyEFX").resolve("5xnxV"),import.meta.url).toString();new URL(s("kyEFX").resolve("c6pyQ"),import.meta.url).toString();var tv;tv=new URL(s("kyEFX").resolve("hmBXq"),import.meta.url).toString();new URL(s("kyEFX").resolve("a7Dxc"),import.meta.url).toString();var nv;nv=new URL(s("kyEFX").resolve("fQ0JQ"),import.meta.url).toString();new URL(s("kyEFX").resolve("9Nww8"),import.meta.url).toString();var iv;iv=new URL(s("kyEFX").resolve("9QusC"),import.meta.url).toString();new URL(s("kyEFX").resolve("9LcgG"),import.meta.url).toString();var rv;rv=new URL(s("kyEFX").resolve("fRdSt"),import.meta.url).toString();new URL(s("kyEFX").resolve("bblaK"),import.meta.url).toString();var sv;sv=new URL(s("kyEFX").resolve("ajSwI"),import.meta.url).toString();new URL(s("kyEFX").resolve("90MaA"),import.meta.url).toString();var ov;ov=new URL(s("kyEFX").resolve("3wbfv"),import.meta.url).toString();new URL(s("kyEFX").resolve("c4rxq"),import.meta.url).toString();var av;av=new URL(s("kyEFX").resolve("49ZoZ"),import.meta.url).toString();new URL(s("kyEFX").resolve("kvPik"),import.meta.url).toString();const lv=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:n(rv)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:n(nv)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:n(ov)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:n(ev)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:n(tv)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:n(iv)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:n(Z_)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:n(av)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:n(sv)}],cv=document.querySelector(".js_support_list"),hv=document.querySelector(".js_support_btn"),uv=lv.map((({img:e,title:t,url:n},i)=>`<li class="support__item"><a href="${n}" class="support__link" aria-label="${t}" target="_blank" rel="noopener norefferer nofollow">\n    <p class="support__number">${(i+1).toString().padStart(2,"0")}</p><img class="support__img" src= ${e} alt="${t}"/></a></li>`));console.log(uv);let dv=0;function pv(e){return window.innerWidth<768?e+4:e+6}function fv(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function gv(e={},t={}){Object.keys(t).forEach((n=>{void 0===e[n]?e[n]=t[n]:fv(t[n])&&fv(e[n])&&Object.keys(t[n]).length>0&&gv(e[n],t[n])}))}!function(e,t,n){const i=e.slice(t,n).join("");if(dv=pv(dv),cv.insertAdjacentHTML("beforeend",i),uv.length<=n)hv.style.display="none"}(uv,dv,pv(dv));const mv={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function _v(){const e="undefined"!=typeof document?document:{};return gv(e,mv),e}const vv={document:mv,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function yv(){const e="undefined"!=typeof window?window:{};return gv(e,vv),e}function wv(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}function bv(e,t=0){return setTimeout(e,t)}function Ev(){return Date.now()}function Tv(e,t="x"){const n=yv();let i,r,s;const o=function(e){const t=yv();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}(e);return n.WebKitCSSMatrix?(r=o.transform||o.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map((e=>e.replace(",","."))).join(", ")),s=new n.WebKitCSSMatrix("none"===r?"":r)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=s.toString().split(",")),"x"===t&&(r=n.WebKitCSSMatrix?s.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===t&&(r=n.WebKitCSSMatrix?s.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),r||0}function Sv(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function Iv(...e){const t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let r=1;r<e.length;r+=1){const s=e[r];if(null!=s&&(i=s,!("undefined"!=typeof window&&void 0!==window.HTMLElement?i instanceof HTMLElement:i&&(1===i.nodeType||11===i.nodeType)))){const e=Object.keys(Object(s)).filter((e=>n.indexOf(e)<0));for(let n=0,i=e.length;n<i;n+=1){const i=e[n],r=Object.getOwnPropertyDescriptor(s,i);void 0!==r&&r.enumerable&&(Sv(t[i])&&Sv(s[i])?s[i].__swiper__?t[i]=s[i]:Iv(t[i],s[i]):!Sv(t[i])&&Sv(s[i])?(t[i]={},s[i].__swiper__?t[i]=s[i]:Iv(t[i],s[i])):t[i]=s[i])}}}var i;return t}function Cv(e,t,n){e.style.setProperty(t,n)}function kv({swiper:e,targetPosition:t,side:n}){const i=yv(),r=-e.translate;let s,o=null;const a=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const l=t>r?"next":"prev",c=(e,t)=>"next"===l&&e>=t||"prev"===l&&e<=t,h=()=>{s=(new Date).getTime(),null===o&&(o=s);const l=Math.max(Math.min((s-o)/a,1),0),u=.5-Math.cos(l*Math.PI)/2;let d=r+u*(t-r);if(c(d,t)&&(d=t),e.wrapperEl.scrollTo({[n]:d}),c(d,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:d})})),void i.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=i.requestAnimationFrame(h)};h()}function Rv(e,t=""){return[...e.children].filter((e=>e.matches(t)))}function Av(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:[t]),n}function Nv(e,t){const n=[];for(;e.previousElementSibling;){const i=e.previousElementSibling;t?i.matches(t)&&n.push(i):n.push(i),e=i}return n}function Ov(e,t){const n=[];for(;e.nextElementSibling;){const i=e.nextElementSibling;t?i.matches(t)&&n.push(i):n.push(i),e=i}return n}function Pv(e,t){return yv().getComputedStyle(e,null).getPropertyValue(t)}function Lv(e){let t,n=e;if(n){for(t=0;null!==(n=n.previousSibling);)1===n.nodeType&&(t+=1);return t}}function xv(e,t){const n=[];let i=e.parentElement;for(;i;)t?i.matches(t)&&n.push(i):n.push(i),i=i.parentElement;return n}function Dv(e,t,n){const i=yv();return n?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}let Mv,Uv,Fv;function jv(){return Mv||(Mv=function(){const e=yv(),t=_v();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),Mv}function Bv(e={}){return Uv||(Uv=function({userAgent:e}={}){const t=jv(),n=yv(),i=n.navigator.platform,r=e||n.navigator.userAgent,s={ios:!1,android:!1},o=n.screen.width,a=n.screen.height,l=r.match(/(Android);?[\s\/]+([\d.]+)?/);let c=r.match(/(iPad).*OS\s([\d_]+)/);const h=r.match(/(iPod)(.*OS\s([\d_]+))?/),u=!c&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),d="Win32"===i;let p="MacIntel"===i;return!c&&p&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${a}`)>=0&&(c=r.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),p=!1),l&&!d&&(s.os="android",s.android=!0),(c||u||h)&&(s.os="ios",s.ios=!0),s}(e)),Uv}function Hv(){return Fv||(Fv=function(){const e=yv();let t=!1;function n(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(n()){const n=String(e.navigator.userAgent);if(n.includes("Version/")){const[e,i]=n.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));t=e<16||16===e&&i<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),Fv}const zv=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(n){const t=n.querySelector(`.${e.params.lazyPreloaderClass}`);t&&t.remove()}},qv=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Vv=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const i="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),r=e.activeIndex,s=r+i-1;if(e.params.rewind)for(let i=r-t;i<=s+t;i+=1){const t=(i%n+n)%n;t!==r&&t>s&&qv(e,t)}else for(let i=Math.max(s-t,0);i<=Math.min(s+t,n-1);i+=1)i!==r&&i>s&&qv(e,i)};function Wv({swiper:e,runCallbacks:t,direction:n,step:i}){const{activeIndex:r,previousIndex:s}=e;let o=n;if(o||(o=r>s?"next":r<s?"prev":"reset"),e.emit(`transition${i}`),t&&r!==s){if("reset"===o)return void e.emit(`slideResetTransition${i}`);e.emit(`slideChangeTransition${i}`),"next"===o?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}var Gv={slideTo:function(e=0,t=this.params.speed,n=!0,i,r){"string"==typeof e&&(e=parseInt(e,10));const s=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:h,activeIndex:u,rtlTranslate:d,wrapperEl:p,enabled:f}=s;if(s.animating&&a.preventInteractionOnTransition||!f&&!i&&!r)return!1;const g=Math.min(s.params.slidesPerGroupSkip,o);let m=g+Math.floor((o-g)/s.params.slidesPerGroup);m>=l.length&&(m=l.length-1);const _=-l[m];if(a.normalizeSlideIndex)for(let e=0;e<c.length;e+=1){const t=-Math.floor(100*_),n=Math.floor(100*c[e]),i=Math.floor(100*c[e+1]);void 0!==c[e+1]?t>=n&&t<i-(i-n)/2?o=e:t>=n&&t<i&&(o=e+1):t>=n&&(o=e)}if(s.initialized&&o!==u){if(!s.allowSlideNext&&_<s.translate&&_<s.minTranslate())return!1;if(!s.allowSlidePrev&&_>s.translate&&_>s.maxTranslate()&&(u||0)!==o)return!1}let v;if(o!==(h||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(_),v=o>u?"next":o<u?"prev":"reset",d&&-_===s.translate||!d&&_===s.translate)return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==a.effect&&s.setTranslate(_),"reset"!==v&&(s.transitionStart(n,v),s.transitionEnd(n,v)),!1;if(a.cssMode){const e=s.isHorizontal(),n=d?_:-_;if(0===t){const t=s.virtual&&s.params.virtual.enabled;t&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),t&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{p[e?"scrollLeft":"scrollTop"]=n}))):p[e?"scrollLeft":"scrollTop"]=n,t&&requestAnimationFrame((()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1}))}else{if(!s.support.smoothScroll)return kv({swiper:s,targetPosition:n,side:e?"left":"top"}),!0;p.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(_),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(n,v),0===t?s.transitionEnd(n,v):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,v))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e=0,t=this.params.speed,n=!0,i){if("string"==typeof e){e=parseInt(e,10)}const r=this;let s=e;return r.params.loop&&(r.virtual&&r.params.virtual.enabled?s+=r.virtual.slidesBefore:s=r.getSlideIndexByData(s)),r.slideTo(s,t,n,i)},slideNext:function(e=this.params.speed,t=!0,n){const i=this,{enabled:r,params:s,animating:o}=i;if(!r)return i;let a=s.slidesPerGroup;"auto"===s.slidesPerView&&1===s.slidesPerGroup&&s.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<s.slidesPerGroupSkip?1:a,c=i.virtual&&s.virtual.enabled;if(s.loop){if(o&&!c&&s.loopPreventsSliding)return!1;i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft}return s.rewind&&i.isEnd?i.slideTo(0,e,t,n):i.slideTo(i.activeIndex+l,e,t,n)},slidePrev:function(e=this.params.speed,t=!0,n){const i=this,{params:r,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=i;if(!l)return i;const h=i.virtual&&r.virtual.enabled;if(r.loop){if(c&&!h&&r.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}function u(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const d=u(a?i.translate:-i.translate),p=s.map((e=>u(e)));let f=s[p.indexOf(d)-1];if(void 0===f&&r.cssMode){let e;s.forEach(((t,n)=>{d>=t&&(e=n)})),void 0!==e&&(f=s[e>0?e-1:e])}let g=0;if(void 0!==f&&(g=o.indexOf(f),g<0&&(g=i.activeIndex-1),"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(g=g-i.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),r.rewind&&i.isBeginning){const r=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(r,e,t,n)}return i.slideTo(g,e,t,n)},slideReset:function(e=this.params.speed,t=!0,n){return this.slideTo(this.activeIndex,e,t,n)},slideToClosest:function(e=this.params.speed,t=!0,n,i=.5){const r=this;let s=r.activeIndex;const o=Math.min(r.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[a]){const e=r.snapGrid[a];l-e>(r.snapGrid[a+1]-e)*i&&(s+=r.params.slidesPerGroup)}else{const e=r.snapGrid[a-1];l-e<=(r.snapGrid[a]-e)*i&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,e,t,n)},slideToClickedSlide:function(){const e=this,{params:t,slidesEl:n}=e,i="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let r,s=e.clickedIndex;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;r=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?s<e.loopedSlides-i/2||s>e.slides.length-e.loopedSlides+i/2?(e.loopFix(),s=e.getSlideIndex(Rv(n,`${o}[data-swiper-slide-index="${r}"]`)[0]),bv((()=>{e.slideTo(s)}))):e.slideTo(s):s>e.slides.length-i?(e.loopFix(),s=e.getSlideIndex(Rv(n,`${o}[data-swiper-slide-index="${r}"]`)[0]),bv((()=>{e.slideTo(s)}))):e.slideTo(s)}else e.slideTo(s)}};function $v(e){const t=this,n=_v(),i=yv(),r=t.touchEventsData;r.evCache.push(e);const{params:s,touches:o,enabled:a}=t;if(!a)return;if(!s.simulateTouch&&"mouse"===e.pointerType)return;if(t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let l=e;l.originalEvent&&(l=l.originalEvent);let c=l.target;if("wrapper"===s.touchEventsTarget&&!t.wrapperEl.contains(c))return;if("which"in l&&3===l.which)return;if("button"in l&&l.button>0)return;if(r.isTouched&&r.isMoved)return;const h=!!s.noSwipingClass&&""!==s.noSwipingClass,u=e.composedPath?e.composedPath():e.path;h&&l.target&&l.target.shadowRoot&&u&&(c=u[0]);const d=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,p=!(!l.target||!l.target.shadowRoot);if(s.noSwiping&&(p?function(e,t=this){return function t(n){if(!n||n===_v()||n===yv())return null;n.assignedSlot&&(n=n.assignedSlot);const i=n.closest(e);return i||n.getRootNode?i||t(n.getRootNode().host):null}(t)}(d,c):c.closest(d)))return void(t.allowClick=!0);if(s.swipeHandler&&!c.closest(s.swipeHandler))return;o.currentX=l.pageX,o.currentY=l.pageY;const f=o.currentX,g=o.currentY,m=s.edgeSwipeDetection||s.iOSEdgeSwipeDetection,_=s.edgeSwipeThreshold||s.iOSEdgeSwipeThreshold;if(m&&(f<=_||f>=i.innerWidth-_)){if("prevent"!==m)return;e.preventDefault()}Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=f,o.startY=g,r.touchStartTime=Ev(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1);let v=!0;c.matches(r.focusableElements)&&(v=!1,"SELECT"===c.nodeName&&(r.isTouched=!1)),n.activeElement&&n.activeElement.matches(r.focusableElements)&&n.activeElement!==c&&n.activeElement.blur();const y=v&&t.allowTouchMove&&s.touchStartPreventDefault;!s.touchStartForcePreventDefault&&!y||c.isContentEditable||l.preventDefault(),t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",l)}function Kv(e){const t=_v(),n=this,i=n.touchEventsData,{params:r,touches:s,rtlTranslate:o,enabled:a}=n;if(!a)return;if(!r.simulateTouch&&"mouse"===e.pointerType)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&n.emit("touchMoveOpposite",l));const c=i.evCache.findIndex((e=>e.pointerId===l.pointerId));c>=0&&(i.evCache[c]=l);const h=i.evCache.length>1?i.evCache[0]:l,u=h.pageX,d=h.pageY;if(l.preventedByNestedSwiper)return s.startX=u,void(s.startY=d);if(!n.allowTouchMove)return l.target.matches(i.focusableElements)||(n.allowClick=!1),void(i.isTouched&&(Object.assign(s,{startX:u,startY:d,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:u,currentY:d}),i.touchStartTime=Ev()));if(r.touchReleaseOnEdges&&!r.loop)if(n.isVertical()){if(d<s.startY&&n.translate<=n.maxTranslate()||d>s.startY&&n.translate>=n.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(u<s.startX&&n.translate<=n.maxTranslate()||u>s.startX&&n.translate>=n.minTranslate())return;if(t.activeElement&&l.target===t.activeElement&&l.target.matches(i.focusableElements))return i.isMoved=!0,void(n.allowClick=!1);if(i.allowTouchCallbacks&&n.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;s.currentX=u,s.currentY=d;const p=s.currentX-s.startX,f=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(p**2+f**2)<n.params.threshold)return;if(void 0===i.isScrolling){let e;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?i.isScrolling=!1:p*p+f*f>=25&&(e=180*Math.atan2(Math.abs(f),Math.abs(p))/Math.PI,i.isScrolling=n.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&n.emit("touchMoveOpposite",l),void 0===i.startMoving&&(s.currentX===s.startX&&s.currentY===s.startY||(i.startMoving=!0)),i.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&i.evCache.length>1)return void(i.isTouched=!1);if(!i.startMoving)return;n.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let g=n.isHorizontal()?p:f,m=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;r.oneWayMovement&&(g=Math.abs(g)*(o?1:-1),m=Math.abs(m)*(o?1:-1)),s.diff=g,g*=r.touchRatio,o&&(g=-g,m=-m);const _=n.touchesDirection;n.swipeDirection=g>0?"prev":"next",n.touchesDirection=m>0?"prev":"next";const v=n.params.loop&&!r.cssMode;if(!i.isMoved){if(v&&n.loopFix({direction:n.swipeDirection}),i.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(e)}i.allowMomentumBounce=!1,!r.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let y;i.isMoved&&_!==n.touchesDirection&&v&&Math.abs(g)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),y=!0),n.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=g+i.startTranslate;let w=!0,b=r.resistanceRatio;if(r.touchReleaseOnEdges&&(b=0),g>0?(v&&!y&&i.currentTranslate>(r.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>n.minTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+i.startTranslate+g)**b))):g<0&&(v&&!y&&i.currentTranslate<(r.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-("auto"===r.slidesPerView?n.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<n.maxTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-i.startTranslate-g)**b))),w&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),n.allowSlidePrev||n.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(g)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,i.currentTranslate=i.startTranslate,void(s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&n.freeMode||r.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&r.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(i.currentTranslate),n.setTranslate(i.currentTranslate))}function Yv(e){const t=this,n=t.touchEventsData,i=n.evCache.findIndex((t=>t.pointerId===e.pointerId));if(i>=0&&n.evCache.splice(i,1),["pointercancel","pointerout","pointerleave"].includes(e.type)){if(!("pointercancel"===e.type&&(t.browser.isSafari||t.browser.isWebView)))return}const{params:r,touches:s,rtlTranslate:o,slidesGrid:a,enabled:l}=t;if(!l)return;if(!r.simulateTouch&&"mouse"===e.pointerType)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",c),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&r.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);r.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const h=Ev(),u=h-n.touchStartTime;if(t.allowClick){const e=c.path||c.composedPath&&c.composedPath();t.updateClickedSlide(e&&e[0]||c.target),t.emit("tap click",c),u<300&&h-n.lastClickTime<300&&t.emit("doubleTap doubleClick",c)}if(n.lastClickTime=Ev(),bv((()=>{t.destroyed||(t.allowClick=!0)})),!n.isTouched||!n.isMoved||!t.swipeDirection||0===s.diff||n.currentTranslate===n.startTranslate)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);let d;if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,d=r.followFinger?o?t.translate:-t.translate:-n.currentTranslate,r.cssMode)return;if(t.params.freeMode&&r.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:d});let p=0,f=t.slidesSizesGrid[0];for(let e=0;e<a.length;e+=e<r.slidesPerGroupSkip?1:r.slidesPerGroup){const t=e<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;void 0!==a[e+t]?d>=a[e]&&d<a[e+t]&&(p=e,f=a[e+t]-a[e]):d>=a[e]&&(p=e,f=a[a.length-1]-a[a.length-2])}let g=null,m=null;r.rewind&&(t.isBeginning?m=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const _=(d-a[p])/f,v=p<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(u>r.longSwipesMs){if(!r.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(_>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?g:p+v):t.slideTo(p)),"prev"===t.swipeDirection&&(_>1-r.longSwipesRatio?t.slideTo(p+v):null!==m&&_<0&&Math.abs(_)>r.longSwipesRatio?t.slideTo(m):t.slideTo(p))}else{if(!r.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(c.target===t.navigation.nextEl||c.target===t.navigation.prevEl)?c.target===t.navigation.nextEl?t.slideTo(p+v):t.slideTo(p):("next"===t.swipeDirection&&t.slideTo(null!==g?g:p+v),"prev"===t.swipeDirection&&t.slideTo(null!==m?m:p))}}let Xv;function Jv(){const e=this,{params:t,el:n}=e;if(n&&0===n.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:r,snapGrid:s}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||a?e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(Xv),Xv=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=r,e.allowSlideNext=i,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function Qv(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Zv(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:i}=e;if(!i)return;let r;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const s=e.maxTranslate()-e.minTranslate();r=0===s?0:(e.translate-e.minTranslate())/s,r!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function ey(e){zv(this,e.target),this.update()}let ty=!1;function ny(){}const iy=(e,t)=>{const n=_v(),{params:i,el:r,wrapperEl:s,device:o}=e,a=!!i.nested,l="on"===t?"addEventListener":"removeEventListener",c=t;r[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:a}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[l]("click",e.onClick,!0),i.cssMode&&s[l]("scroll",e.onScroll),i.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Jv,!0):e[c]("observerUpdate",Jv,!0),r[l]("load",e.onLoad,{capture:!0})};const ry=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var sy={setBreakpoint:function(){const e=this,{realIndex:t,initialized:n,params:i,el:r}=e,s=i.breakpoints;if(!s||s&&0===Object.keys(s).length)return;const o=e.getBreakpoint(s,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const a=(o in s?s[o]:void 0)||e.originalParams,l=ry(e,i),c=ry(e,a),h=i.enabled;l&&!c?(r.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!l&&c&&(r.classList.add(`${i.containerModifierClass}grid`),(a.grid.fill&&"column"===a.grid.fill||!a.grid.fill&&"column"===i.grid.fill)&&r.classList.add(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const n=i[t]&&i[t].enabled,r=a[t]&&a[t].enabled;n&&!r&&e[t].disable(),!n&&r&&e[t].enable()}));const u=a.direction&&a.direction!==i.direction,d=i.loop&&(a.slidesPerView!==i.slidesPerView||u);u&&n&&e.changeDirection(),Iv(e.params,a);const p=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),h&&!p?e.disable():!h&&p&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",a),d&&n&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",a)},getBreakpoint:function(e,t="window",n){if(!e||"container"===t&&!n)return;let i=!1;const r=yv(),s="window"===t?r.innerHeight:n.clientHeight,o=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:s*t,point:e}}return{value:e,point:e}}));o.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<o.length;e+=1){const{point:s,value:a}=o[e];"window"===t?r.matchMedia(`(min-width: ${a}px)`).matches&&(i=s):a<=n.clientWidth&&(i=s)}return i||"max"}};var oy={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function ay(e,t){return function(n={}){const i=Object.keys(n)[0],r=n[i];"object"==typeof r&&null!==r?(["navigation","pagination","scrollbar"].indexOf(i)>=0&&!0===e[i]&&(e[i]={auto:!0}),i in e&&"enabled"in r?(!0===e[i]&&(e[i]={enabled:!0}),"object"!=typeof e[i]||"enabled"in e[i]||(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Iv(t,n)):Iv(t,n)):Iv(t,n)}}const ly={eventsEmitter:{on(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;const r=n?"unshift":"push";return e.split(" ").forEach((e=>{i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][r](t)})),i},once(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;function r(...n){i.off(e,r),r.__emitterProxy&&delete r.__emitterProxy,t.apply(i,n)}return r.__emitterProxy=t,i.on(e,r,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof e)return n;const i=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[i](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed?n:n.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach(((i,r)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[e].splice(r,1)}))})),n):n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsListeners)return t;let n,i,r;"string"==typeof e[0]||Array.isArray(e[0])?(n=e[0],i=e.slice(1,e.length),r=t):(n=e[0].events,i=e[0].data,r=e[0].context||t),i.unshift(r);return(Array.isArray(n)?n:n.split(" ")).forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(r,[e,...i])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(r,i)}))})),t}},update:{updateSize:function(){const e=this;let t,n;const i=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:i.clientWidth,n=void 0!==e.params.height&&null!==e.params.height?e.params.height:i.clientHeight,0===t&&e.isHorizontal()||0===n&&e.isVertical()||(t=t-parseInt(Pv(i,"padding-left")||0,10)-parseInt(Pv(i,"padding-right")||0,10),n=n-parseInt(Pv(i,"padding-top")||0,10)-parseInt(Pv(i,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function n(e,n){return parseFloat(e.getPropertyValue(t(n))||0)}const i=e.params,{wrapperEl:r,slidesEl:s,size:o,rtlTranslate:a,wrongRTL:l}=e,c=e.virtual&&i.virtual.enabled,h=c?e.virtual.slides.length:e.slides.length,u=Rv(s,`.${e.params.slideClass}, swiper-slide`),d=c?e.virtual.slides.length:u.length;let p=[];const f=[],g=[];let m=i.slidesOffsetBefore;"function"==typeof m&&(m=i.slidesOffsetBefore.call(e));let _=i.slidesOffsetAfter;"function"==typeof _&&(_=i.slidesOffsetAfter.call(e));const v=e.snapGrid.length,y=e.slidesGrid.length;let w=i.spaceBetween,b=-m,E=0,T=0;if(void 0===o)return;"string"==typeof w&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*o),e.virtualSize=-w,u.forEach((e=>{a?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),i.centeredSlides&&i.cssMode&&(Cv(r,"--swiper-centered-offset-before",""),Cv(r,"--swiper-centered-offset-after",""));const S=i.grid&&i.grid.rows>1&&e.grid;let I;S&&e.grid.initSlides(d);const C="auto"===i.slidesPerView&&i.breakpoints&&Object.keys(i.breakpoints).filter((e=>void 0!==i.breakpoints[e].slidesPerView)).length>0;for(let r=0;r<d;r+=1){let s;if(I=0,u[r]&&(s=u[r]),S&&e.grid.updateSlide(r,s,d,t),!u[r]||"none"!==Pv(s,"display")){if("auto"===i.slidesPerView){C&&(u[r].style[t("width")]="");const o=getComputedStyle(s),a=s.style.transform,l=s.style.webkitTransform;if(a&&(s.style.transform="none"),l&&(s.style.webkitTransform="none"),i.roundLengths)I=e.isHorizontal()?Dv(s,"width",!0):Dv(s,"height",!0);else{const e=n(o,"width"),t=n(o,"padding-left"),i=n(o,"padding-right"),r=n(o,"margin-left"),a=n(o,"margin-right"),l=o.getPropertyValue("box-sizing");if(l&&"border-box"===l)I=e+r+a;else{const{clientWidth:n,offsetWidth:o}=s;I=e+t+i+r+a+(o-n)}}a&&(s.style.transform=a),l&&(s.style.webkitTransform=l),i.roundLengths&&(I=Math.floor(I))}else I=(o-(i.slidesPerView-1)*w)/i.slidesPerView,i.roundLengths&&(I=Math.floor(I)),u[r]&&(u[r].style[t("width")]=`${I}px`);u[r]&&(u[r].swiperSlideSize=I),g.push(I),i.centeredSlides?(b=b+I/2+E/2+w,0===E&&0!==r&&(b=b-o/2-w),0===r&&(b=b-o/2-w),Math.abs(b)<.001&&(b=0),i.roundLengths&&(b=Math.floor(b)),T%i.slidesPerGroup==0&&p.push(b),f.push(b)):(i.roundLengths&&(b=Math.floor(b)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup==0&&p.push(b),f.push(b),b=b+I+w),e.virtualSize+=I+w,E=I,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+_,a&&l&&("slide"===i.effect||"coverflow"===i.effect)&&(r.style.width=`${e.virtualSize+i.spaceBetween}px`),i.setWrapperSize&&(r.style[t("width")]=`${e.virtualSize+i.spaceBetween}px`),S&&e.grid.updateWrapperSize(I,p,t),!i.centeredSlides){const t=[];for(let n=0;n<p.length;n+=1){let r=p[n];i.roundLengths&&(r=Math.floor(r)),p[n]<=e.virtualSize-o&&t.push(r)}p=t,Math.floor(e.virtualSize-o)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-o)}if(c&&i.loop){const t=g[0]+w;if(i.slidesPerGroup>1){const n=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/i.slidesPerGroup),r=t*i.slidesPerGroup;for(let e=0;e<n;e+=1)p.push(p[p.length-1]+r)}for(let n=0;n<e.virtual.slidesBefore+e.virtual.slidesAfter;n+=1)1===i.slidesPerGroup&&p.push(p[p.length-1]+t),f.push(f[f.length-1]+t),e.virtualSize+=t}if(0===p.length&&(p=[0]),0!==i.spaceBetween){const n=e.isHorizontal()&&a?"marginLeft":t("marginRight");u.filter(((e,t)=>!(i.cssMode&&!i.loop)||t!==u.length-1)).forEach((e=>{e.style[n]=`${w}px`}))}if(i.centeredSlides&&i.centeredSlidesBounds){let e=0;g.forEach((t=>{e+=t+(i.spaceBetween?i.spaceBetween:0)})),e-=i.spaceBetween;const t=e-o;p=p.map((e=>e<0?-m:e>t?t+_:e))}if(i.centerInsufficientSlides){let e=0;if(g.forEach((t=>{e+=t+(i.spaceBetween?i.spaceBetween:0)})),e-=i.spaceBetween,e<o){const t=(o-e)/2;p.forEach(((e,n)=>{p[n]=e-t})),f.forEach(((e,n)=>{f[n]=e+t}))}}if(Object.assign(e,{slides:u,snapGrid:p,slidesGrid:f,slidesSizesGrid:g}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){Cv(r,"--swiper-centered-offset-before",-p[0]+"px"),Cv(r,"--swiper-centered-offset-after",e.size/2-g[g.length-1]/2+"px");const t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+n))}if(d!==h&&e.emit("slidesLengthChange"),p.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),f.length!==y&&e.emit("slidesGridLengthChange"),i.watchSlidesProgress&&e.updateSlidesOffset(),!(c||i.cssMode||"slide"!==i.effect&&"fade"!==i.effect)){const t=`${i.containerModifierClass}backface-hidden`,n=e.el.classList.contains(t);d<=i.maxBackfaceHiddenSlides?n||e.el.classList.add(t):n&&e.el.classList.remove(t)}},updateAutoHeight:function(e){const t=this,n=[],i=t.virtual&&t.params.virtual.enabled;let r,s=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const o=e=>i?t.getSlideIndexByData(e):t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{n.push(e)}));else for(r=0;r<Math.ceil(t.params.slidesPerView);r+=1){const e=t.activeIndex+r;if(e>t.slides.length&&!i)break;n.push(o(e))}else n.push(o(t.activeIndex));for(r=0;r<n.length;r+=1)if(void 0!==n[r]){const e=n[r].offsetHeight;s=e>s?e:s}(s||0===s)&&(t.wrapperEl.style.height=`${s}px`)},updateSlidesOffset:function(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let i=0;i<t.length;i+=1)t[i].swiperSlideOffset=(e.isHorizontal()?t[i].offsetLeft:t[i].offsetTop)-n-e.cssOverflowAdjustment()},updateSlidesProgress:function(e=this&&this.translate||0){const t=this,n=t.params,{slides:i,rtlTranslate:r,snapGrid:s}=t;if(0===i.length)return;void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();let o=-e;r&&(o=e),i.forEach((e=>{e.classList.remove(n.slideVisibleClass)})),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<i.length;e+=1){const a=i[e];let l=a.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(l-=i[0].swiperSlideOffset);const c=(o+(n.centeredSlides?t.minTranslate():0)-l)/(a.swiperSlideSize+n.spaceBetween),h=(o-s[0]+(n.centeredSlides?t.minTranslate():0)-l)/(a.swiperSlideSize+n.spaceBetween),u=-(o-l),d=u+t.slidesSizesGrid[e];(u>=0&&u<t.size-1||d>1&&d<=t.size||u<=0&&d>=t.size)&&(t.visibleSlides.push(a),t.visibleSlidesIndexes.push(e),i[e].classList.add(n.slideVisibleClass)),a.progress=r?-c:c,a.originalProgress=r?-h:h}},updateProgress:function(e){const t=this;if(void 0===e){const n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}const n=t.params,i=t.maxTranslate()-t.minTranslate();let{progress:r,isBeginning:s,isEnd:o,progressLoop:a}=t;const l=s,c=o;if(0===i)r=0,s=!0,o=!0;else{r=(e-t.minTranslate())/i;const n=Math.abs(e-t.minTranslate())<1,a=Math.abs(e-t.maxTranslate())<1;s=n||r<=0,o=a||r>=1,n&&(r=0),a&&(r=1)}if(n.loop){const n=t.getSlideIndexByData(0),i=t.getSlideIndexByData(t.slides.length-1),r=t.slidesGrid[n],s=t.slidesGrid[i],o=t.slidesGrid[t.slidesGrid.length-1],l=Math.abs(e);a=l>=r?(l-r)/o:(l+o-s)/o,a>1&&(a-=1)}Object.assign(t,{progress:r,progressLoop:a,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!s||c&&!o)&&t.emit("fromEdge"),t.emit("progress",r)},updateSlidesClasses:function(){const e=this,{slides:t,params:n,slidesEl:i,activeIndex:r}=e,s=e.virtual&&n.virtual.enabled,o=e=>Rv(i,`.${n.slideClass}${e}, swiper-slide${e}`)[0];let a;if(t.forEach((e=>{e.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)})),s)if(n.loop){let t=r-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),a=o(`[data-swiper-slide-index="${t}"]`)}else a=o(`[data-swiper-slide-index="${r}"]`);else a=t[r];if(a){a.classList.add(n.slideActiveClass);let e=Ov(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!e&&(e=t[0]),e&&e.classList.add(n.slideNextClass);let i=Nv(a,`.${n.slideClass}, swiper-slide`)[0];n.loop,i&&i.classList.add(n.slidePrevClass)}e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:i,params:r,activeIndex:s,realIndex:o,snapIndex:a}=t;let l,c=e;const h=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(void 0===c&&(c=function(e){const{slidesGrid:t,params:n}=e,i=e.rtlTranslate?e.translate:-e.translate;let r;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?i>=t[e]&&i<t[e+1]-(t[e+1]-t[e])/2?r=e:i>=t[e]&&i<t[e+1]&&(r=e+1):i>=t[e]&&(r=e);return n.normalizeSlideIndex&&(r<0||void 0===r)&&(r=0),r}(t)),i.indexOf(n)>=0)l=i.indexOf(n);else{const e=Math.min(r.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/r.slidesPerGroup)}if(l>=i.length&&(l=i.length-1),c===s)return l!==a&&(t.snapIndex=l,t.emit("snapIndexChange")),void(t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=h(c)));let u;u=t.virtual&&r.virtual.enabled&&r.loop?h(c):t.slides[c]?parseInt(t.slides[c].getAttribute("data-swiper-slide-index")||c,10):c,Object.assign(t,{snapIndex:l,realIndex:u,previousIndex:s,activeIndex:c}),t.initialized&&Vv(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),o!==u&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,n=t.params,i=e.closest(`.${n.slideClass}, swiper-slide`);let r,s=!1;if(i)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===i){s=!0,r=e;break}if(!i||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=r,n.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}},translate:{getTranslate:function(e=(this.isHorizontal()?"x":"y")){const{params:t,rtlTranslate:n,translate:i,wrapperEl:r}=this;if(t.virtualTranslate)return n?-i:i;if(t.cssMode)return i;let s=Tv(r,e);return s+=this.cssOverflowAdjustment(),n&&(s=-s),s||0},setTranslate:function(e,t){const n=this,{rtlTranslate:i,params:r,wrapperEl:s,progress:o}=n;let a,l=0,c=0;n.isHorizontal()?l=i?-e:e:c=e,r.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:c,r.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-c:r.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${l}px, ${c}px, 0px)`);const h=n.maxTranslate()-n.minTranslate();a=0===h?0:(e-n.minTranslate())/h,a!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e=0,t=this.params.speed,n=!0,i=!0,r){const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let h;if(h=i&&e>l?l:i&&e<c?c:e,s.updateProgress(h),o.cssMode){const e=s.isHorizontal();if(0===t)a[e?"scrollLeft":"scrollTop"]=-h;else{if(!s.support.smoothScroll)return kv({swiper:s,targetPosition:-h,side:e?"left":"top"}),!0;a.scrollTo({[e?"left":"top"]:-h,behavior:"smooth"})}return!0}return 0===t?(s.setTransition(0),s.setTranslate(h),n&&(s.emit("beforeTransitionStart",t,r),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(h),n&&(s.emit("beforeTransitionStart",t,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`),n.emit("setTransition",e,t)},transitionStart:function(e=!0,t){const n=this,{params:i}=n;i.cssMode||(i.autoHeight&&n.updateAutoHeight(),Wv({swiper:n,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e=!0,t){const n=this,{params:i}=n;n.animating=!1,i.cssMode||(n.setTransition(0),Wv({swiper:n,runCallbacks:e,direction:t,step:"End"}))}},slide:Gv,loop:{loopCreate:function(e){const t=this,{params:n,slidesEl:i}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;Rv(i,`.${n.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})),t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})},loopFix:function({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:i,activeSlideIndex:r,byController:s,byMousewheel:o}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:l,allowSlidePrev:c,allowSlideNext:h,slidesEl:u,params:d}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&d.virtual.enabled)return t&&(d.centeredSlides||0!==a.snapIndex?d.centeredSlides&&a.snapIndex<d.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0):a.slideTo(a.virtual.slides.length,0,!1,!0)),a.allowSlidePrev=c,a.allowSlideNext=h,void a.emit("loopFix");const p="auto"===d.slidesPerView?a.slidesPerViewDynamic():Math.ceil(parseFloat(d.slidesPerView,10));let f=d.loopedSlides||p;f%d.slidesPerGroup!=0&&(f+=d.slidesPerGroup-f%d.slidesPerGroup),a.loopedSlides=f;const g=[],m=[];let _=a.activeIndex;void 0===r?r=a.getSlideIndex(a.slides.filter((e=>e.classList.contains(d.slideActiveClass)))[0]):_=r;const v="next"===n||!n,y="prev"===n||!n;let w=0,b=0;if(r<f){w=Math.max(f-r,d.slidesPerGroup);for(let e=0;e<f-r;e+=1){const t=e-Math.floor(e/l.length)*l.length;g.push(l.length-t-1)}}else if(r>a.slides.length-2*f){b=Math.max(r-(a.slides.length-2*f),d.slidesPerGroup);for(let e=0;e<b;e+=1){const t=e-Math.floor(e/l.length)*l.length;m.push(t)}}if(y&&g.forEach((e=>{u.prepend(a.slides[e])})),v&&m.forEach((e=>{u.append(a.slides[e])})),a.recalcSlides(),d.watchSlidesProgress&&a.updateSlidesOffset(),t)if(g.length>0&&y)if(void 0===e){const e=a.slidesGrid[_],t=a.slidesGrid[_+w]-e;o?a.setTranslate(a.translate-t):(a.slideTo(_+w,0,!1,!0),i&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else i&&a.slideToLoop(e,0,!1,!0);else if(m.length>0&&v)if(void 0===e){const e=a.slidesGrid[_],t=a.slidesGrid[_-b]-e;o?a.setTranslate(a.translate-t):(a.slideTo(_-b,0,!1,!0),i&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else a.slideToLoop(e,0,!1,!0);if(a.allowSlidePrev=c,a.allowSlideNext=h,a.controller&&a.controller.control&&!s){const t={slideRealIndex:e,slideTo:!1,direction:n,setTranslate:i,activeSlideIndex:r,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach((e=>{!e.destroyed&&e.params.loop&&e.loopFix(t)})):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix(t)}a.emit("loopFix")},loopDestroy:function(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const i=[];e.slides.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;i[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),i.forEach((e=>{n.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}},grabCursor:{setGrabCursor:function(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))},unsetGrabCursor:function(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}},events:{attachEvents:function(){const e=this,t=_v(),{params:n}=e;e.onTouchStart=$v.bind(e),e.onTouchMove=Kv.bind(e),e.onTouchEnd=Yv.bind(e),n.cssMode&&(e.onScroll=Zv.bind(e)),e.onClick=Qv.bind(e),e.onLoad=ey.bind(e),ty||(t.addEventListener("touchstart",ny),ty=!0),iy(e,"on")},detachEvents:function(){iy(this,"off")}},breakpoints:sy,checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:i}=n;if(i){const t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*i;e.isLocked=e.size>n}else e.isLocked=1===e.snapGrid.length;!0===n.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===n.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:n,rtl:i,el:r,device:s}=e,o=function(e,t){const n=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((i=>{e[i]&&n.push(t+i)})):"string"==typeof e&&n.push(t+e)})),n}(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:i},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&"column"===n.grid.fill},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),r.classList.add(...t),e.emitContainerClasses()},removeClasses:function(){const{el:e,classNames:t}=this;e.classList.remove(...t),this.emitContainerClasses()}}},cy={};class hy{constructor(...e){let t,n;1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?n=e[0]:[t,n]=e,n||(n={}),n=Iv({},n),t&&!n.el&&(n.el=t);const i=_v();if(n.el&&"string"==typeof n.el&&i.querySelectorAll(n.el).length>1){const e=[];return i.querySelectorAll(n.el).forEach((t=>{const i=Iv({},n,{el:t});e.push(new hy(i))})),e}const r=this;r.__swiper__=!0,r.support=jv(),r.device=Bv({userAgent:n.userAgent}),r.browser=Hv(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],n.modules&&Array.isArray(n.modules)&&r.modules.push(...n.modules);const s={};r.modules.forEach((e=>{e({params:n,swiper:r,extendParams:ay(n,s),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})}));const o=Iv({},oy,s);return r.params=Iv({},o,cy,n),r.originalParams=Iv({},r.params),r.passedParams=Iv({},n),r.params&&r.params.on&&Object.keys(r.params.on).forEach((e=>{r.on(e,r.params.on[e])})),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===r.params.direction,isVertical:()=>"vertical"===r.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}getSlideIndex(e){const{slidesEl:t,params:n}=this,i=Lv(Rv(t,`.${n.slideClass}, swiper-slide`)[0]);return Lv(e)-i}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=Rv(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const i=n.minTranslate(),r=(n.maxTranslate()-i)*e+i;n.translateTo(r,void 0===t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((n=>{const i=e.getSlideClasses(n);t.push({slideEl:n,classNames:i}),e.emit("_slideClass",n,i)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const{params:n,slides:i,slidesGrid:r,slidesSizesGrid:s,size:o,activeIndex:a}=this;let l=1;if(n.centeredSlides){let e,t=i[a].swiperSlideSize;for(let n=a+1;n<i.length;n+=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,l+=1,t>o&&(e=!0));for(let n=a-1;n>=0;n-=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,l+=1,t>o&&(e=!0))}else if("current"===e)for(let e=a+1;e<i.length;e+=1){(t?r[e]+s[e]-r[a]<o:r[e]-r[a]<o)&&(l+=1)}else for(let e=a-1;e>=0;e-=1){r[a]-r[e]<o&&(l+=1)}return l}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;function i(){const t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let r;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&zv(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(i(),e.params.autoHeight&&e.updateAutoHeight()):(r=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),r||i()),n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const n=this,i=n.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(n.el.classList.remove(`${n.params.containerModifierClass}${i}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if("string"==typeof n&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.shadowEl&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(n&&n.shadowRoot&&n.shadowRoot.querySelector){return n.shadowRoot.querySelector(i())}return Rv(n,i())[0]})();return!r&&t.params.createElements&&(r=Av("div",t.params.wrapperClass),n.append(r),Rv(n,`.${t.params.slideClass}`).forEach((e=>{r.append(e)}))),Object.assign(t,{el:n,wrapperEl:r,slidesEl:t.isElement?n:r,mounted:!0,rtl:"rtl"===n.dir.toLowerCase()||"rtl"===Pv(n,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===Pv(n,"direction")),wrongRTL:"-webkit-box"===Pv(r,"display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach((e=>{e.complete?zv(t,e):e.addEventListener("load",(e=>{zv(t,e.target)}))})),Vv(t),t.initialized=!0,Vv(t),t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const n=this,{params:i,el:r,wrapperEl:s,slides:o}=n;return void 0===n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),t&&(n.removeClasses(),r.removeAttribute("style"),s.removeAttribute("style"),o&&o.length&&o.forEach((e=>{e.classList.remove(i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),n.emit("destroy"),Object.keys(n.eventsListeners).forEach((e=>{n.off(e)})),!1!==e&&(n.el.swiper=null,wv(n)),n.destroyed=!0),null}static extendDefaults(e){Iv(cy,e)}static get extendedDefaults(){return cy}static get defaults(){return oy}static installModule(e){hy.prototype.__modules__||(hy.prototype.__modules__=[]);const t=hy.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>hy.installModule(e))),hy):(hy.installModule(e),hy)}}Object.keys(ly).forEach((e=>{Object.keys(ly[e]).forEach((t=>{hy.prototype[t]=ly[e][t]}))})),hy.use([function({swiper:e,on:t,emit:n}){const i=yv();let r=null,s=null;const o=()=>{e&&!e.destroyed&&e.initialized&&(n("beforeResize"),n("resize"))},a=()=>{e&&!e.destroyed&&e.initialized&&n("orientationchange")};t("init",(()=>{e.params.resizeObserver&&void 0!==i.ResizeObserver?e&&!e.destroyed&&e.initialized&&(r=new ResizeObserver((t=>{s=i.requestAnimationFrame((()=>{const{width:n,height:i}=e;let r=n,s=i;t.forEach((({contentBoxSize:t,contentRect:n,target:i})=>{i&&i!==e.el||(r=n?n.width:(t[0]||t).inlineSize,s=n?n.height:(t[0]||t).blockSize)})),r===n&&s===i||o()}))})),r.observe(e.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",a))})),t("destroy",(()=>{s&&i.cancelAnimationFrame(s),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",a)}))},function({swiper:e,extendParams:t,on:n,emit:i}){const r=[],s=yv(),o=(t,n={})=>{const o=new(s.MutationObserver||s.WebkitMutationObserver)((t=>{if(e.__preventObserver__)return;if(1===t.length)return void i("observerUpdate",t[0]);const n=function(){i("observerUpdate",t[0])};s.requestAnimationFrame?s.requestAnimationFrame(n):s.setTimeout(n,0)}));o.observe(t,{attributes:void 0===n.attributes||n.attributes,childList:void 0===n.childList||n.childList,characterData:void 0===n.characterData||n.characterData}),r.push(o)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",(()=>{if(e.params.observer){if(e.params.observeParents){const t=xv(e.el);for(let e=0;e<t.length;e+=1)o(t[e])}o(e.el,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}})),n("destroy",(()=>{r.forEach((e=>{e.disconnect()})),r.splice(0,r.length)}))}]);var uy=hy;(e=>{const t=e.dataset.id;new uy(`[data-id="${t}"]`,{slidesPerView:"auto",spaceBetween:20,direction:"vertical",loop:!0,navigation:{nextEl:`.swiper-button-next-${t}`,prevEl:`.swiper-button-prev-${t}`}})})();const dy=document.querySelector(".back_to_top");window.addEventListener("scroll",(function(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&dy.classList.add("back_to_top-show");e<t&&dy.classList.remove("back_to_top-show")})),dy.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));
//# sourceMappingURL=index.2ffd5eb9.js.map
