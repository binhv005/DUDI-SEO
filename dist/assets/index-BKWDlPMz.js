(function(){const S=document.createElement("link").relList;if(S&&S.supports&&S.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))s(T);new MutationObserver(T=>{for(const C of T)if(C.type==="childList")for(const k of C.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&s(k)}).observe(document,{childList:!0,subtree:!0});function y(T){const C={};return T.integrity&&(C.integrity=T.integrity),T.referrerPolicy&&(C.referrerPolicy=T.referrerPolicy),T.crossOrigin==="use-credentials"?C.credentials="include":T.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function s(T){if(T.ep)return;T.ep=!0;const C=y(T);fetch(T.href,C)}})();function ph(v){return v&&v.__esModule&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v}var No={exports:{}},ci={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ih;function cg(){if(ih)return ci;ih=1;var v=Symbol.for("react.transitional.element"),S=Symbol.for("react.fragment");function y(s,T,C){var k=null;if(C!==void 0&&(k=""+C),T.key!==void 0&&(k=""+T.key),"key"in T){C={};for(var K in T)K!=="key"&&(C[K]=T[K])}else C=T;return T=C.ref,{$$typeof:v,type:s,key:k,ref:T!==void 0?T:null,props:C}}return ci.Fragment=S,ci.jsx=y,ci.jsxs=y,ci}var ch;function ug(){return ch||(ch=1,No.exports=cg()),No.exports}var c=ug(),So={exports:{}},Z={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh;function rg(){if(uh)return Z;uh=1;var v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),k=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),ut=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),D=Symbol.for("react.view_transition"),Q=Symbol.iterator;function w(d){return d===null||typeof d!="object"?null:(d=Q&&d[Q]||d["@@iterator"],typeof d=="function"?d:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tt=Object.assign,Ut={};function J(d,E,U){this.props=d,this.context=E,this.refs=Ut,this.updater=U||Y}J.prototype.isReactComponent={},J.prototype.setState=function(d,E){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,E,"setState")},J.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function wt(){}wt.prototype=J.prototype;function Bt(d,E,U){this.props=d,this.context=E,this.refs=Ut,this.updater=U||Y}var At=Bt.prototype=new wt;At.constructor=Bt,tt(At,J.prototype),At.isPureReactComponent=!0;var kt=Array.isArray;function $(){}var ct={H:null,A:null,T:null,S:null},Ge=Object.prototype.hasOwnProperty;function je(d,E,U){var B=U.ref;return{$$typeof:v,type:d,key:E,ref:B!==void 0?B:null,props:U}}function ze(d,E){return je(d.type,E,d.props)}function fe(d){return typeof d=="object"&&d!==null&&d.$$typeof===v}function ba(d){var E={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(U){return E[U]})}var Ka=/\/+/g;function Gt(d,E){return typeof d=="object"&&d!==null&&d.key!=null?ba(""+d.key):E.toString(36)}function _(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then($,$):(d.status="pending",d.then(function(E){d.status==="pending"&&(d.status="fulfilled",d.value=E)},function(E){d.status==="pending"&&(d.status="rejected",d.reason=E)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function V(d,E,U,B,st){var ft=typeof d;(ft==="undefined"||ft==="boolean")&&(d=null);var ht=!1;if(d===null)ht=!0;else switch(ft){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(d.$$typeof){case v:case S:ht=!0;break;case O:return ht=d._init,V(ht(d._payload),E,U,B,st)}}if(ht)return st=st(d),ht=B===""?"."+Gt(d,0):B,kt(st)?(U="",ht!=null&&(U=ht.replace(Ka,"$&/")+"/"),V(st,E,U,"",function(aa){return aa})):st!=null&&(fe(st)&&(st=ze(st,U+(st.key==null||d&&d.key===st.key?"":(""+st.key).replace(Ka,"$&/")+"/")+ht)),E.push(st)),1;ht=0;var H=B===""?".":B+":";if(kt(d))for(var L=0;L<d.length;L++)B=d[L],ft=H+Gt(B,L),ht+=V(B,E,U,ft,st);else if(L=w(d),typeof L=="function")for(d=L.call(d),L=0;!(B=d.next()).done;)B=B.value,ft=H+Gt(B,L++),ht+=V(B,E,U,ft,st);else if(ft==="object"){if(typeof d.then=="function")return V(_(d),E,U,B,st);throw E=String(d),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return ht}function X(d,E,U){if(d==null)return d;var B=[],st=0;return V(d,B,"","",function(ft){return E.call(U,ft,st++)}),B}function Nt(d){if(d._status===-1){var E=d._result,U=E();U.then(function(B){(d._status===0||d._status===-1)&&(d._status=1,d._result=B,U.status===void 0&&(U.status="fulfilled",U.value=B))},function(B){(d._status===0||d._status===-1)&&(d._status=2,d._result=B,U.status===void 0&&(U.status="rejected",U.reason=B))}),d._status===-1&&(d._status=0,d._result=U)}if(d._status===1)return d._result.default;throw d._result}var pt=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)};function Fe(d){var E=ct.T,U={};U.types=E!==null?E.types:null,ct.T=U;try{var B=d(),st=ct.S;st!==null&&st(U,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then($,pt)}catch(ft){pt(ft)}finally{E!==null&&U.types!==null&&(E.types=U.types),ct.T=E}}function ea(d){var E=ct.T;if(E!==null){var U=E.types;U===null?E.types=[d]:U.indexOf(d)===-1&&U.push(d)}else Fe(ea.bind(null,d))}var Ja={map:X,forEach:function(d,E,U){X(d,function(){E.apply(this,arguments)},U)},count:function(d){var E=0;return X(d,function(){E++}),E},toArray:function(d){return X(d,function(E){return E})||[]},only:function(d){if(!fe(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return Z.Activity=N,Z.Children=Ja,Z.Component=J,Z.Fragment=y,Z.Profiler=T,Z.PureComponent=Bt,Z.StrictMode=s,Z.Suspense=G,Z.ViewTransition=D,Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ct,Z.__COMPILER_RUNTIME={__proto__:null,c:function(d){return ct.H.useMemoCache(d)}},Z.addTransitionType=ea,Z.cache=function(d){return function(){return d.apply(null,arguments)}},Z.cacheSignal=function(){return null},Z.cloneElement=function(d,E,U){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var B=tt({},d.props),st=d.key;if(E!=null)for(ft in E.key!==void 0&&(st=""+E.key),E)!Ge.call(E,ft)||ft==="key"||ft==="__self"||ft==="__source"||ft==="ref"&&E.ref===void 0||(B[ft]=E[ft]);var ft=arguments.length-2;if(ft===1)B.children=U;else if(1<ft){for(var ht=Array(ft),H=0;H<ft;H++)ht[H]=arguments[H+2];B.children=ht}return je(d.type,st,B)},Z.createContext=function(d){return d={$$typeof:k,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:C,_context:d},d},Z.createElement=function(d,E,U){var B,st={},ft=null;if(E!=null)for(B in E.key!==void 0&&(ft=""+E.key),E)Ge.call(E,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(st[B]=E[B]);var ht=arguments.length-2;if(ht===1)st.children=U;else if(1<ht){for(var H=Array(ht),L=0;L<ht;L++)H[L]=arguments[L+2];st.children=H}if(d&&d.defaultProps)for(B in ht=d.defaultProps,ht)st[B]===void 0&&(st[B]=ht[B]);return je(d,ft,st)},Z.createRef=function(){return{current:null}},Z.forwardRef=function(d){return{$$typeof:K,render:d}},Z.isValidElement=fe,Z.lazy=function(d){return{$$typeof:O,_payload:{_status:-1,_result:d},_init:Nt}},Z.memo=function(d,E){return{$$typeof:ut,type:d,compare:E===void 0?null:E}},Z.startTransition=Fe,Z.unstable_useCacheRefresh=function(){return ct.H.useCacheRefresh()},Z.use=function(d){return ct.H.use(d)},Z.useActionState=function(d,E,U){return ct.H.useActionState(d,E,U)},Z.useCallback=function(d,E){return ct.H.useCallback(d,E)},Z.useContext=function(d){return ct.H.useContext(d)},Z.useDebugValue=function(){},Z.useDeferredValue=function(d,E){return ct.H.useDeferredValue(d,E)},Z.useEffect=function(d,E){return ct.H.useEffect(d,E)},Z.useEffectEvent=function(d){return ct.H.useEffectEvent(d)},Z.useId=function(){return ct.H.useId()},Z.useImperativeHandle=function(d,E,U){return ct.H.useImperativeHandle(d,E,U)},Z.useInsertionEffect=function(d,E){return ct.H.useInsertionEffect(d,E)},Z.useLayoutEffect=function(d,E){return ct.H.useLayoutEffect(d,E)},Z.useMemo=function(d,E){return ct.H.useMemo(d,E)},Z.useOptimistic=function(d,E){return ct.H.useOptimistic(d,E)},Z.useReducer=function(d,E,U){return ct.H.useReducer(d,E,U)},Z.useRef=function(d){return ct.H.useRef(d)},Z.useState=function(d){return ct.H.useState(d)},Z.useSyncExternalStore=function(d,E,U){return ct.H.useSyncExternalStore(d,E,U)},Z.useTransition=function(){return ct.H.useTransition()},Z.version="19.3.0",Z}var rh;function Ao(){return rh||(rh=1,So.exports=rg()),So.exports}var ot=Ao();const gh=ph(ot);var jo={exports:{}},ui={},zo={exports:{}},To={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function og(){return oh||(oh=1,(function(v){function S(_,V){var X=_.length;_.push(V);t:for(;0<X;){var Nt=X-1>>>1,pt=_[Nt];if(0<T(pt,V))_[Nt]=V,_[X]=pt,X=Nt;else break t}}function y(_){return _.length===0?null:_[0]}function s(_){if(_.length===0)return null;var V=_[0],X=_.pop();if(X!==V){_[0]=X;t:for(var Nt=0,pt=_.length,Fe=pt>>>1;Nt<Fe;){var ea=2*(Nt+1)-1,Ja=_[ea],d=ea+1,E=_[d];if(0>T(Ja,X))d<pt&&0>T(E,Ja)?(_[Nt]=E,_[d]=X,Nt=d):(_[Nt]=Ja,_[ea]=X,Nt=ea);else if(d<pt&&0>T(E,X))_[Nt]=E,_[d]=X,Nt=d;else break t}}return V}function T(_,V){var X=_.sortIndex-V.sortIndex;return X!==0?X:_.id-V.id}if(v.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var C=performance;v.unstable_now=function(){return C.now()}}else{var k=Date,K=k.now();v.unstable_now=function(){return k.now()-K}}var G=[],ut=[],O=1,N=null,D=3,Q=!1,w=!1,Y=!1,tt=!1,Ut=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,wt=typeof setImmediate<"u"?setImmediate:null;function Bt(_){for(var V=y(ut);V!==null;){if(V.callback===null)s(ut);else if(V.startTime<=_)s(ut),V.sortIndex=V.expirationTime,S(G,V);else break;V=y(ut)}}function At(_){if(Y=!1,Bt(_),!w)if(y(G)!==null)w=!0,kt||(kt=!0,fe());else{var V=y(ut);V!==null&&Gt(At,V.startTime-_)}}var kt=!1,$=-1,ct=5,Ge=-1;function je(){return tt?!0:!(v.unstable_now()-Ge<ct)}function ze(){if(tt=!1,kt){var _=v.unstable_now();Ge=_;var V=!0;try{t:{w=!1,Y&&(Y=!1,J($),$=-1),Q=!0;var X=D;try{e:{for(Bt(_),N=y(G);N!==null&&!(N.expirationTime>_&&je());){var Nt=N.callback;if(typeof Nt=="function"){N.callback=null,D=N.priorityLevel;var pt=Nt(N.expirationTime<=_);if(_=v.unstable_now(),typeof pt=="function"){N.callback=pt,Bt(_),V=!0;break e}N===y(G)&&s(G),Bt(_)}else s(G);N=y(G)}if(N!==null)V=!0;else{var Fe=y(ut);Fe!==null&&Gt(At,Fe.startTime-_),V=!1}}break t}finally{N=null,D=X,Q=!1}V=void 0}}finally{V?fe():kt=!1}}}var fe;if(typeof wt=="function")fe=function(){wt(ze)};else if(typeof MessageChannel<"u"){var ba=new MessageChannel,Ka=ba.port2;ba.port1.onmessage=ze,fe=function(){Ka.postMessage(null)}}else fe=function(){Ut(ze,0)};function Gt(_,V){$=Ut(function(){_(v.unstable_now())},V)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(_){_.callback=null},v.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ct=0<_?Math.floor(1e3/_):5},v.unstable_getCurrentPriorityLevel=function(){return D},v.unstable_next=function(_){switch(D){case 1:case 2:case 3:var V=3;break;default:V=D}var X=D;D=V;try{return _()}finally{D=X}},v.unstable_requestPaint=function(){tt=!0},v.unstable_runWithPriority=function(_,V){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var X=D;D=_;try{return V()}finally{D=X}},v.unstable_scheduleCallback=function(_,V,X){var Nt=v.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Nt+X:Nt):X=Nt,_){case 1:var pt=-1;break;case 2:pt=250;break;case 5:pt=1073741823;break;case 4:pt=1e4;break;default:pt=5e3}return pt=X+pt,_={id:O++,callback:V,priorityLevel:_,startTime:X,expirationTime:pt,sortIndex:-1},X>Nt?(_.sortIndex=X,S(ut,_),y(G)===null&&_===y(ut)&&(Y?(J($),$=-1):Y=!0,Gt(At,X-Nt))):(_.sortIndex=pt,S(G,_),w||Q||(w=!0,kt||(kt=!0,fe()))),_},v.unstable_shouldYield=je,v.unstable_wrapCallback=function(_){var V=D;return function(){var X=D;D=V;try{return _.apply(this,arguments)}finally{D=X}}}})(To)),To}var sh;function sg(){return sh||(sh=1,zo.exports=og()),zo.exports}var Eo={exports:{}},Pt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function fg(){if(fh)return Pt;fh=1;var v=Ao();function S(O){var N="https://react.dev/errors/"+O;if(1<arguments.length){N+="?args[]="+encodeURIComponent(arguments[1]);for(var D=2;D<arguments.length;D++)N+="&args[]="+encodeURIComponent(arguments[D])}return"Minified React error #"+O+"; visit "+N+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(){}var s={d:{f:y,r:function(){throw Error(S(522))},D:y,C:y,L:y,m:y,X:y,S:y,M:y},p:0,findDOMNode:null},T=Symbol.for("react.portal"),C=Symbol.for("react.recoverable"),k=Symbol.for("react.optimistic_key");function K(O,N,D){var Q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:Q==null?null:Q===k?k:""+Q,children:O,containerInfo:N,implementation:D}}var G=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ut(O,N){if(O==="font")return"";if(typeof N=="string")return N==="use-credentials"?N:""}return Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pt.browser=function(O){return{$$typeof:C,_reason:O}},Pt.createPortal=function(O,N){var D=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!N||N.nodeType!==1&&N.nodeType!==9&&N.nodeType!==11)throw Error(S(299));return K(O,N,null,D)},Pt.flushSync=function(O){var N=G.T,D=s.p;try{if(G.T=null,s.p=2,O)return O()}finally{G.T=N,s.p=D,s.d.f()}},Pt.preconnect=function(O,N){typeof O=="string"&&(N?(N=N.crossOrigin,N=typeof N=="string"?N==="use-credentials"?N:"":void 0):N=null,s.d.C(O,N))},Pt.prefetchDNS=function(O){typeof O=="string"&&s.d.D(O)},Pt.preinit=function(O,N){if(typeof O=="string"&&N&&typeof N.as=="string"){var D=N.as,Q=ut(D,N.crossOrigin),w=typeof N.integrity=="string"?N.integrity:void 0,Y=typeof N.fetchPriority=="string"?N.fetchPriority:void 0;D==="style"?s.d.S(O,typeof N.precedence=="string"?N.precedence:void 0,{crossOrigin:Q,integrity:w,fetchPriority:Y}):D==="script"&&s.d.X(O,{crossOrigin:Q,integrity:w,fetchPriority:Y,nonce:typeof N.nonce=="string"?N.nonce:void 0})}},Pt.preinitModule=function(O,N){if(typeof O=="string")if(typeof N=="object"&&N!==null){if(N.as==null||N.as==="script"){var D=ut(N.as,N.crossOrigin);s.d.M(O,{crossOrigin:D,integrity:typeof N.integrity=="string"?N.integrity:void 0,nonce:typeof N.nonce=="string"?N.nonce:void 0,fetchPriority:typeof N.fetchPriority=="string"?N.fetchPriority:void 0})}}else N==null&&s.d.M(O)},Pt.preload=function(O,N){if(typeof O=="string"&&typeof N=="object"&&N!==null&&typeof N.as=="string"){var D=N.as,Q=ut(D,N.crossOrigin);s.d.L(O,D,{crossOrigin:Q,integrity:typeof N.integrity=="string"?N.integrity:void 0,nonce:typeof N.nonce=="string"?N.nonce:void 0,type:typeof N.type=="string"?N.type:void 0,fetchPriority:typeof N.fetchPriority=="string"?N.fetchPriority:void 0,referrerPolicy:typeof N.referrerPolicy=="string"?N.referrerPolicy:void 0,imageSrcSet:typeof N.imageSrcSet=="string"?N.imageSrcSet:void 0,imageSizes:typeof N.imageSizes=="string"?N.imageSizes:void 0,media:typeof N.media=="string"?N.media:void 0})}},Pt.preloadModule=function(O,N){if(typeof O=="string")if(N){var D=ut(N.as,N.crossOrigin);s.d.m(O,{as:typeof N.as=="string"&&N.as!=="script"?N.as:void 0,crossOrigin:D,integrity:typeof N.integrity=="string"?N.integrity:void 0,nonce:typeof N.nonce=="string"?N.nonce:void 0,fetchPriority:typeof N.fetchPriority=="string"?N.fetchPriority:void 0})}else s.d.m(O)},Pt.requestFormReset=function(O){s.d.r(O)},Pt.unstable_batchedUpdates=function(O,N){return O(N)},Pt.useFormState=function(O,N,D){return G.H.useFormState(O,N,D)},Pt.useFormStatus=function(){return G.H.useHostTransitionStatus()},Pt.version="19.3.0",Pt}var dh;function dg(){if(dh)return Eo.exports;dh=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(S){console.error(S)}}return v(),Eo.exports=fg(),Eo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh;function hg(){if(hh)return ui;hh=1;var v=sg(),S=Ao(),y=dg();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function C(t){for(var e=t,a=e;a&&!a.alternate;)e=a,(e.flags&4098)!==0&&(t=e.return),a=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function k(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function K(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function G(t){if(C(t)!==t)throw Error(s(188))}function ut(t){var e=t.alternate;if(!e){if(e=C(t),e===null)throw Error(s(188));return e!==t?null:t}for(var a=t,l=e;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return G(n),t;if(i===l)return G(n),e;i=i.sibling}throw Error(s(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,r=n.child;r;){if(r===a){u=!0,a=n,l=i;break}if(r===l){u=!0,l=n,a=i;break}r=r.sibling}if(!u){for(r=i.child;r;){if(r===a){u=!0,a=i,l=n;break}if(r===l){u=!0,l=i,a=n;break}r=r.sibling}if(!u)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:e}function O(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=O(t),e!==null)return e;t=t.sibling}return null}function N(t,e,a,l,n,i){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,l,n,i)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&N(t.child,e,a,l,n,i))return!0;t=t.sibling}return!1}function D(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function Q(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function w(t){var e=[null,null],a=D(t);return a===null||Y(e,t,a.child,{foundSelf:!1}),e}function Y(t,e,a,l){for(;a!==null;){if(a===e)l.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(l.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&Y(t,e,a.child,l))return!0;a=a.sibling}return!1}function tt(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var Ut=null,J=null;function wt(t,e,a){return t===a?!0:t===e?(Ut=t,!0):!1}function Bt(t,e,a){return t===a?(J=t,!1):t===e?(J!==null&&(Ut=t),!0):!1}function At(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function kt(t,e,a){for(var l=0,n=t;n;n=a(n))l++;n=0;for(var i=e;i;i=a(i))n++;for(;0<l-n;)t=a(t),l--;for(;0<n-l;)e=a(e),n--;for(;l--;){if(t===e||e!==null&&t===e.alternate)return t;t=a(t),e=a(e)}return null}var $=Object.assign,ct=Symbol.for("react.element"),Ge=Symbol.for("react.transitional.element"),je=Symbol.for("react.portal"),ze=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),ba=Symbol.for("react.profiler"),Ka=Symbol.for("react.consumer"),Gt=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),Nt=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),Fe=Symbol.for("react.activity"),ea=Symbol.for("react.legacy_hidden"),Ja=Symbol.for("react.memo_cache_sentinel"),d=Symbol.for("react.view_transition"),E=Symbol.for("react.recoverable"),U=Symbol.iterator;function B(t){return t===null||typeof t!="object"?null:(t=U&&t[U]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function ft(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ze:return"Fragment";case ba:return"Profiler";case fe:return"StrictMode";case V:return"Suspense";case X:return"SuspenseList";case Fe:return"Activity";case d:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case je:return"Portal";case Gt:return t.displayName||"Context";case Ka:return(t._context.displayName||"Context")+".Consumer";case _:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nt:return e=t.displayName||null,e!==null?e:ft(t.type)||"Memo";case pt:e=t._payload,t=t._init;try{return ft(t(e))}catch{}}return null}var ht=Array.isArray,H=S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,aa={pending:!1,data:null,method:null,action:null},kc=[],yl=-1;function Ve(t){return{current:t}}function Lt(t){0>yl||(t.current=kc[yl],kc[yl]=null,yl--)}function jt(t,e){yl++,kc[yl]=t.current,t.current=e}var Ye=Ve(null),dn=Ve(null),va=Ve(null),ri=Ve(null);function oi(t,e){switch(jt(va,e),jt(dn,t),jt(Ye,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?m0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=m0(e),t=p0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Lt(Ye),jt(Ye,t)}function Nl(){Lt(Ye),Lt(dn),Lt(va)}function qc(t){var e=t.memoizedState;e!==null&&(on._currentValue=e.memoizedState,jt(ri,t)),e=Ye.current;var a=p0(e,t.type);e!==a&&(jt(dn,t),jt(Ye,a))}function si(t){dn.current===t&&(Lt(Ye),Lt(dn)),ri.current===t&&(Lt(ri),on._currentValue=aa)}var Gc,Fo;function ya(t){if(Gc===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Gc=e&&e[1]||"",Fo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gc+t+Fo}var Vc=!1;function Yc(t,e){if(!t||Vc)return"";Vc=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(A){var h=A}Reflect.construct(t,[],z)}else{try{z.call()}catch(A){h=A}z=!1;try{var x=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),z=!0,new t}finally{z&&(x!==void 0?Object.defineProperty(t.prototype,"props",x):delete t.prototype.props)}}}else{try{throw Error()}catch(A){h=A}(z=t())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(A){if(A&&h&&typeof A.stack=="string")return[A.stack,h.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],r=i[1];if(u&&r){var o=u.split(`
`),p=r.split(`
`);for(n=l=0;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(l===o.length||n===p.length)for(l=o.length-1,n=p.length-1;1<=l&&0<=n&&o[l]!==p[n];)n--;for(;1<=l&&0<=n;l--,n--)if(o[l]!==p[n]){if(l!==1||n!==1)do if(l--,n--,0>n||o[l]!==p[n]){var b=`
`+o[l].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=l&&0<=n);break}}}finally{Vc=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ya(a):""}function sm(t,e){switch(t.tag){case 26:case 27:case 5:return ya(t.type);case 16:return ya("Lazy");case 13:return t.child!==e&&e!==null?ya("Suspense Fallback"):ya("Suspense");case 19:return ya("SuspenseList");case 0:case 15:return Yc(t.type,!1);case 11:return Yc(t.type.render,!1);case 1:return Yc(t.type,!0);case 31:return ya("Activity");case 30:return ya("ViewTransition");default:return""}}function Ho(t){try{var e="",a=null;do e+=sm(t,a),a=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Xc=Object.prototype.hasOwnProperty,Qc=v.unstable_scheduleCallback,Lc=v.unstable_cancelCallback,fm=v.unstable_shouldYield,dm=v.unstable_requestPaint,de=v.unstable_now,hm=v.unstable_getCurrentPriorityLevel,Ro=v.unstable_ImmediatePriority,Uo=v.unstable_UserBlockingPriority,fi=v.unstable_NormalPriority,mm=v.unstable_LowPriority,Bo=v.unstable_IdlePriority,pm=v.log,gm=v.unstable_setDisableYieldValue,hn=null,he=null;function Na(t){if(typeof pm=="function"&&gm(t),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(hn,t)}catch{}}var me=Math.clz32?Math.clz32:vm,xm=Math.log,bm=Math.LN2;function vm(t){return t>>>=0,t===0?32:31-(xm(t)/bm|0)|0}var di=256,hi=262144,mi=4194304;function $a(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pi(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var r=l&134217727;return r!==0?(l=r&~i,l!==0?n=$a(l):(u&=r,u!==0?n=$a(u):a||(a=r&~t,a!==0&&(n=$a(a))))):(r=l&~i,r!==0?n=$a(r):u!==0?n=$a(u):a||(a=l&~t,a!==0&&(n=$a(a)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:n}function mn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ko(t,e){(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var l=31-me(a),n=1<<l;e|=t[l],a&=~n}return e}function ym(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qo(){var t=mi;return mi<<=1,(mi&62914560)===0&&(mi=4194304),t}function Zc(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function pn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Nm(t,e,a,l,n,i){var u=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var r=t.entanglements,o=t.expirationTimes,p=t.hiddenUpdates;for(a=u&~a;0<a;){var b=31-me(a),z=1<<b;r[b]=0,o[b]=-1;var h=p[b];if(h!==null)for(p[b]=null,b=0;b<h.length;b++){var x=h[b];x!==null&&(x.lane&=-536870913)}a&=~z}l!==0&&Go(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function Go(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-me(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function Vo(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-me(a),n=1<<l;n&e|t[l]&e&&(t[l]|=e),a&=~n}}function Yo(t,e){var a=e&-e;return a=(a&42)!==0?1:Kc(a),(a&(t.suspendedLanes|e))!==0?0:a}function Kc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Jc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Xo(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:I0(t.type))}function Qo(t,e){var a=L.p;try{return L.p=t,e()}finally{L.p=a}}var la=Math.random().toString(36).slice(2),Zt="__reactFiber$"+la,ie="__reactProps$"+la,Sl="__reactContainer$"+la,Lo="__reactEvents$"+la,Sm="__reactListeners$"+la,jm="__reactHandles$"+la,Zo="__reactResources$"+la,gn="__reactMarker$"+la,gi="__reactLoad$"+la;function xi(t){delete t[Zt],delete t[ie],delete t[Sm],delete t[jm]}function Wa(t){var e;if(e=t[Zt])return e;for(var a=t.parentNode;a;){if(e=a[Sl]||a[Zt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=O0(t);t!==null;){if(a=t[Zt])return a;t=O0(t)}return e}t=a,a=t.parentNode}return null}function jl(t){if(t=t[Zt]||t[Sl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function xn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function zl(t){var e=t[Zo];return e||(e=t[Zo]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Vt(t){t[gn]=!0}function Ko(t){t[gi]=void 0}var Jo=new Set,$o={};function Ia(t,e){Tl(t,e),Tl(t+"Capture",e)}function Tl(t,e){for($o[t]=e,t=0;t<e.length;t++)Jo.add(e[t])}var zm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wo={},Io={};function Tm(t){return Xc.call(Io,t)?!0:Xc.call(Wo,t)?!1:zm.test(t)?Io[t]=!0:(Wo[t]=!0,!1)}var dt=!1;function Po(){var t=dt;return dt=!1,t}function bi(t,e,a){if(Tm(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,a)}}function vi(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,a)}}function na(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,l)}}function pe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ts(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Em(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $c(t){if(!t._valueTracker){var e=ts(t)?"checked":"value";t._valueTracker=Em(t,e,""+t[e])}}function es(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=ts(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}var wm=/[\n"\\]/g;function Te(t){return t.replace(wm,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Wc(t,e,a,l,n,i,u,r){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+pe(e)):t.value!==""+pe(e)&&(t.value=""+pe(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?u==="number"&&t.value==e?Ic(t,pe(t.value)):Ic(t,pe(e)):a!=null?Ic(t,pe(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.name=""+pe(r):t.removeAttribute("name")}function as(t,e,a,l,n,i,u,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){$c(t);return}a=a!=null?""+pe(a):"",e=e!=null?""+pe(e):a,r||e===t.value||(t.value=e),t.defaultValue=e}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=r?t.checked:!!l,t.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),$c(t)}function Ic(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function El(t,e,a,l){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}else{for(a=""+pe(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function ls(t,e,a){if(e!=null&&(e=""+pe(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+pe(a):""}function ns(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(s(92));if(ht(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=pe(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),$c(t)}function wl(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Cm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function is(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||Cm.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function cs(t,e,a){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="",dt=!0);for(var n in e)l=e[n],e.hasOwnProperty(n)&&a[n]!==l&&(is(t,n,l),dt=!0)}else for(var i in e)e.hasOwnProperty(i)&&is(t,i,e[i])}function Pc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Am=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_m=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yi(t){return _m.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xe(){}var tu=null;function eu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cl=null,Al=null;function us(t){var e=jl(t);if(e&&(t=e.stateNode)){var a=t[ie]||null;t:switch(t=e.stateNode,e.type){case"input":if(Wc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Te(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var n=l[ie]||null;if(!n)throw Error(s(90));Wc(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&es(l)}break t;case"textarea":ls(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&El(t,!!a.multiple,e,!1)}}}var au=!1;function rs(t,e,a){if(au)return t(e,a);au=!0;try{var l=t(e);return l}finally{if(au=!1,(Cl!==null||Al!==null)&&(yc(),Cl&&(e=Cl,t=Al,Al=Cl=null,us(e),t)))for(e=0;e<t.length;e++)us(t[e])}}function bn(t,e){var a=t.stateNode;if(a===null)return null;var l=a[ie]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,e,typeof a));return a}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if(ia)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){lu=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{lu=!1}var Sa=null,nu=null,Ni=null;function os(){if(Ni)return Ni;var t,e=nu,a=e.length,l,n="value"in Sa?Sa.value:Sa.textContent,i=n.length;for(t=0;t<a&&e[t]===n[t];t++);var u=a-t;for(l=1;l<=u&&e[a-l]===n[i-l];l++);return Ni=n.slice(t,1<l?1-l:void 0)}function Si(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ji(){return!0}function ss(){return!1}function ee(t){function e(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var r in t)t.hasOwnProperty(r)&&(a=t[r],this[r]=a?a(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ji:ss,this.isPropagationStopped=ss,this}return $(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),e}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zi=ee(ja),yn=$({},ja,{view:0,detail:0}),Mm=ee(yn),iu,cu,Nn,Ti=$({},yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Nn&&(Nn&&t.type==="mousemove"?(iu=t.screenX-Nn.screenX,cu=t.screenY-Nn.screenY):cu=iu=0,Nn=t),iu)},movementY:function(t){return"movementY"in t?t.movementY:cu}}),fs=ee(Ti),Om=$({},Ti,{dataTransfer:0}),Dm=ee(Om),Fm=$({},yn,{relatedTarget:0}),uu=ee(Fm),Hm=$({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Rm=ee(Hm),Um=$({},ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bm=ee(Um),km=$({},ja,{data:0}),ds=ee(km),qm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ym(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Vm[t])?!!e[t]:!1}function ru(){return Ym}var Xm=$({},yn,{key:function(t){if(t.key){var e=qm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Si(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(t){return t.type==="keypress"?Si(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Si(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qm=ee(Xm),Lm=$({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hs=ee(Lm),Zm=$({},ja,{submitter:0}),Km=ee(Zm),Jm=$({},yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),$m=ee(Jm),Wm=$({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Im=ee(Wm),Pm=$({},Ti,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tp=ee(Pm),ep=$({},ja,{newState:0,oldState:0,source:0}),ap=ee(ep),lp=[9,13,27,32],ou=ia&&"CompositionEvent"in window,Sn=null;ia&&"documentMode"in document&&(Sn=document.documentMode);var np=ia&&"TextEvent"in window&&!Sn,ms=ia&&(!ou||Sn&&8<Sn&&11>=Sn),ps=" ",gs=!1;function xs(t,e){switch(t){case"keyup":return lp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _l=!1;function ip(t,e){switch(t){case"compositionend":return bs(e);case"keypress":return e.which!==32?null:(gs=!0,ps);case"textInput":return t=e.data,t===ps&&gs?null:t;default:return null}}function cp(t,e){if(_l)return t==="compositionend"||!ou&&xs(t,e)?(t=os(),Ni=nu=Sa=null,_l=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ms&&e.locale!=="ko"?null:e.data;default:return null}}var up={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!up[t.type]:e==="textarea"}function ys(t,e,a,l){Cl?Al?Al.push(l):Al=[l]:Cl=l,e=Ec(e,"onChange"),0<e.length&&(a=new zi("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var jn=null,zn=null;function rp(t){r0(t,0)}function Ei(t){var e=xn(t);if(es(e))return t}function Ns(t,e){if(t==="change")return e}var Ss=!1;if(ia){var su;if(ia){var fu="oninput"in document;if(!fu){var js=document.createElement("div");js.setAttribute("oninput","return;"),fu=typeof js.oninput=="function"}su=fu}else su=!1;Ss=su&&(!document.documentMode||9<document.documentMode)}function zs(){jn&&(jn.detachEvent("onpropertychange",Ts),zn=jn=null)}function Ts(t){if(t.propertyName==="value"&&Ei(zn)){var e=[];ys(e,zn,t,eu(t)),rs(rp,e)}}function op(t,e,a){t==="focusin"?(zs(),jn=e,zn=a,jn.attachEvent("onpropertychange",Ts)):t==="focusout"&&zs()}function sp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ei(zn)}function fp(t,e){if(t==="click")return Ei(e)}function dp(t,e){if(t==="input"||t==="change")return Ei(e)}function hp(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ge=typeof Object.is=="function"?Object.is:hp;function Tn(t,e){if(ge(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Xc.call(e,n)||!ge(t[n],e[n]))return!1}return!0}function du(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Es(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ws(t,e){var a=Es(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Es(a)}}function Cs(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cs(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function As(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=du(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=du(t.document)}return e}function hu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var mp=ia&&"documentMode"in document&&11>=document.documentMode,Ml=null,mu=null,En=null,pu=!1;function _s(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pu||Ml==null||Ml!==du(l)||(l=Ml,"selectionStart"in l&&hu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),En&&Tn(En,l)||(En=l,l=Ec(mu,"onSelect"),0<l.length&&(e=new zi("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=Ml)))}function Pa(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Ol={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionrun:Pa("Transition","TransitionRun"),transitionstart:Pa("Transition","TransitionStart"),transitioncancel:Pa("Transition","TransitionCancel"),transitionend:Pa("Transition","TransitionEnd")},gu={},Ms={};ia&&(Ms=document.createElement("div").style,"AnimationEvent"in window||(delete Ol.animationend.animation,delete Ol.animationiteration.animation,delete Ol.animationstart.animation),"TransitionEvent"in window||delete Ol.transitionend.transition);function tl(t){if(gu[t])return gu[t];if(!Ol[t])return t;var e=Ol[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Ms)return gu[t]=e[a];return t}var Os=tl("animationend"),Ds=tl("animationiteration"),Fs=tl("animationstart"),pp=tl("transitionrun"),gp=tl("transitionstart"),xp=tl("transitioncancel"),Hs=tl("transitionend"),Rs=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function He(t,e){Rs.set(t,e),Ia(e,[t])}var bp=0;function ca(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=ke.identifierPrefix;var a=bp++;return t="_"+t+"t_"+a.toString(32)+"_",e.autoName=t}function Us(t){if(t==null||typeof t=="string")return t;var e=null,a=Il;if(a!==null)for(var l=0;l<a.length;l++){var n=t[a[l]];if(n!=null){if(n==="none")return"none";e=e==null?n:e+(" "+n)}}return e??t.default}function ua(t,e){return t=Us(t),e=Us(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var wi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ee=[],Dl=0,bu=0;function Ci(){for(var t=Dl,e=bu=Dl=0;e<t;){var a=Ee[e];Ee[e++]=null;var l=Ee[e];Ee[e++]=null;var n=Ee[e];Ee[e++]=null;var i=Ee[e];if(Ee[e++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Bs(a,n,i)}}function Ai(t,e,a,l){Ee[Dl++]=t,Ee[Dl++]=e,Ee[Dl++]=a,Ee[Dl++]=l,bu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function vu(t,e,a,l){return Ai(t,e,a,l),_i(t)}function el(t,e){return Ai(t,null,null,e),_i(t)}function Bs(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-me(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[e]:l.push(e),e.lane=a|536870912),i):null}function _i(t){if(50<Kn)throw Kn=0,vc=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Fl={};function vp(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ce(t,e,a,l){return new vp(t,e,a,l)}function yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ra(t,e){var a=t.alternate;return a===null?(a=ce(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ks(t,e){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Mi(t,e,a,l,n,i){var u=0;if(l=t,typeof l=="function")yu(l)&&(u=1);else if(typeof l=="string")u=Z1(t,a,Ye.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(l){case Fe:return t=ce(31,a,e,n),t.elementType=Fe,t.lanes=i,t;case ze:return al(a.children,n,i,e);case fe:u=8,n|=24;break;case ba:return t=ce(12,a,e,n|2),t.elementType=ba,t.lanes=i,t;case V:return t=ce(13,a,e,n),t.elementType=V,t.lanes=i,t;case X:return t=ce(19,a,e,n),t.elementType=X,t.lanes=i,t;case ea:case d:return t=n|32,t=ce(30,a,e,t),t.elementType=d,t.lanes=i,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Gt:u=10;break t;case Ka:u=9;break t;case _:u=11;break t;case Nt:u=14;break t;case pt:u=16,l=null;break t}u=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return e=ce(u,a,e,n),e.elementType=t,e.type=l,e.lanes=i,e}function al(t,e,a,l){return t=ce(7,t,l,e),t.lanes=a,t}function Nu(t,e,a){return t=ce(6,t,null,e),t.lanes=a,t}function qs(t){var e=ce(18,null,null,0);return e.stateNode=t,e}function Su(t,e,a){return e=ce(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Gs=new WeakMap;function we(t,e){if(typeof t=="object"&&t!==null){var a=Gs.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Ho(e)},Gs.set(t,e),e)}return{value:t,source:e,stack:Ho(e)}}var Hl=[],Rl=0,Oi=null,wn=0,Ce=[],Ae=0,za=null,Qe=1,Le="";function oa(t,e){Hl[Rl++]=wn,Hl[Rl++]=Oi,Oi=t,wn=e}function Vs(t,e,a){Ce[Ae++]=Qe,Ce[Ae++]=Le,Ce[Ae++]=za,za=t;var l=Qe;t=Le;var n=32-me(l)-1;l&=~(1<<n),a+=1;var i=32-me(e)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Qe=1<<32-me(e)+n|a<<n|l,Le=i+t}else Qe=1<<i|a<<n|l,Le=t}function Di(t){t.return!==null&&(oa(t,1),Vs(t,1,0))}function ju(t){for(;t===Oi;)Oi=Hl[--Rl],Hl[Rl]=null,wn=Hl[--Rl],Hl[Rl]=null;for(;t===za;)za=Ce[--Ae],Ce[Ae]=null,Le=Ce[--Ae],Ce[Ae]=null,Qe=Ce[--Ae],Ce[Ae]=null}function Ys(t,e){Ce[Ae++]=Qe,Ce[Ae++]=Le,Ce[Ae++]=za,Qe=e.id,Le=e.overflow,za=t}var Yt=null,zt=null,et=!1,Ta=null,_e=!1,zu=Error(s(519));function Ea(t){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Cn(we(e,t)),zu}function Xs(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[Zt]=t,e[ie]=l,a){case"dialog":lt("cancel",e),lt("close",e);break;case"iframe":case"object":case"embed":lt("load",e);break;case"video":case"audio":for(a=0;a<$n.length;a++)lt($n[a],e);break;case"source":lt("error",e);break;case"img":case"image":case"link":lt("error",e),lt("load",e);break;case"details":lt("toggle",e);break;case"input":lt("invalid",e),as(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":lt("invalid",e);break;case"textarea":lt("invalid",e),ns(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||d0(e.textContent,a)?(l.popover!=null&&(lt("beforetoggle",e),lt("toggle",e)),l.onScroll!=null&&lt("scroll",e),l.onScrollEnd!=null&&lt("scrollend",e),l.onClick!=null&&(e.onclick=Xe),e=!0):e=!1,e||Ea(t,!0)}function Fi(t){for(Yt=t.return;Yt;)switch(Yt.tag){case 5:case 31:case 13:_e=!1;return;case 27:case 3:_e=!0;return;default:Yt=Yt.return}}function Ul(t){if(t!==Yt)return!1;if(!et)return Fi(t),et=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||to(t.type,t.memoizedProps)),a=!a),a&&zt&&Ea(t),Fi(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));zt=M0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));zt=M0(t)}else e===27?(e=zt,Va(t.type)?(t=oo,oo=null,zt=t):zt=e):zt=Yt?Oe(t.stateNode.nextSibling):null;return!0}function ll(){zt=Yt=null,et=!1}function Tu(){var t=Ta;return t!==null&&(oe===null?oe=t:oe.push.apply(oe,t),Ta=null),t}function Cn(t){Ta===null?Ta=[t]:Ta.push(t)}var Eu=Ve(null),nl=null,sa=null;function wa(t,e,a){jt(Eu,e._currentValue),e._currentValue=a}function fa(t){t._currentValue=Eu.current,Lt(Eu)}function Hi(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function wu(t,e,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var r=i;i=n;for(var o=0;o<e.length;o++)if(r.context===e[o]){i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),Hi(i.return,a,t),l||(u=null);break t}i=r.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(s(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Hi(u,a,t),u=null}else n.tag===13&&n.memoizedState!==null&&n.memoizedState.dehydrated===null?(n.lanes|=a,u=n.alternate,u!==null&&(u.lanes|=a),Hi(n.return,a,t),u=n.child,u=u!==null?u.sibling:null):u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function il(t,e,a,l){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(s(387));if(u=u.memoizedProps,u!==null){var r=n.type;ge(n.pendingProps.value,u.value)||(t!==null?t.push(r):t=[r])}}else if(n===ri.current){if(u=n.alternate,u===null)throw Error(s(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(on):t=[on])}n=n.return}return t!==null&&wu(e,t,a,l),e.flags|=262144,t!==null}function Ri(t){for(t=t.firstContext;t!==null;){if(!ge(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function cl(t){nl=t,sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Kt(t){return Qs(nl,t)}function Ui(t,e){return nl===null&&cl(t),Qs(t,e)}function Qs(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},sa===null){if(t===null)throw Error(s(308));sa=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else sa=sa.next=e;return a}var yp=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Np=v.unstable_scheduleCallback,Sp=v.unstable_NormalPriority,Dt={$$typeof:Gt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cu(){return{controller:new yp,data:new Map,refCount:0}}function An(t){t.refCount--,t.refCount===0&&Np(Sp,function(){t.controller.abort()})}function Ls(t,e){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<e.length;t++){var l=e[t];a.indexOf(l)===-1&&a.push(l)}}}var _n=null;function jp(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Mn=null,Au=0,ul=0,Bl=null;function zp(t,e){if(Mn===null){var a=Mn=[];Au=0,ul=Qr(),Bl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Au++,e.then(Zs,Zs),e}function Zs(){if(--Au===0&&(_n=null,Mn!==null)){Bl!==null&&(Bl.status="fulfilled");var t=Mn;Mn=null,ul=0,Bl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Tp(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Ks=H.S;H.S=function(t,e){if(Gd=de(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&zp(t,e),_n!==null)for(var a=an;a!==null;)Ls(a,_n),a=a.next;if(a=t.types,a!==null){for(var l=an;l!==null;)Ls(l,a),l=l.next;if(ul!==0){l=_n,l===null&&(l=_n=[]);for(var n=0;n<a.length;n++){var i=a[n];l.indexOf(i)===-1&&l.push(i)}}}Ks!==null&&Ks(t,e)};var rl=Ve(null);function _u(){var t=rl.current;return t!==null?t:St.pooledCache}function Bi(t,e){e===null?jt(rl,rl.current):jt(rl,e.pool)}function Js(){var t=_u();return t===null?null:{parent:Dt._currentValue,pool:t}}var kl=Error(s(460)),Mu=Error(s(474)),ki=Error(s(542)),qi={then:function(){}};function $s(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ws(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Xe,Xe),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ps(t),t===void 0&&!("reason"in e)?Error(s(600)):t;default:if(typeof e.status=="string")e.then(Xe,Xe);else{if(t=St,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=l}},function(l){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ps(t),t}throw sl=e,kl}}function ol(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(sl=a,kl):a}}var sl=null;function Is(){if(sl===null)throw Error(s(459));var t=sl;return sl=null,t}function Ps(t){if(t===kl||t===ki)throw Error(s(483))}var ql=null,On=0;function Gi(t){var e=On;return On+=1,ql===null&&(ql=[]),Ws(ql,t,e)}function Ca(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Vi(t,e){throw e.$$typeof===ct?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function tf(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function a(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function l(m){for(var f=new Map;m!==null;)m.key===null?f.set(m.index,m):f.set(m.key,m),m=m.sibling;return f}function n(m,f){return m=ra(m,f),m.index=0,m.sibling=null,m}function i(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=134217730,f)):(m.flags|=1048576,f)}function u(m){return t&&m.alternate===null&&(m.flags|=134217730),m}function r(m,f,g,j){return f===null||f.tag!==6?(f=Nu(g,m.mode,j),f.return=m,f):(f=n(f,g),f.return=m,f)}function o(m,f,g,j){var M=g.type;return M===ze?(m=b(m,f,g.props.children,j,g.key),Ca(m,g),m):f!==null&&(f.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===pt&&ol(M)===f.type)?(f=n(f,g.props),Ca(f,g),f.return=m,f):(f=Mi(g.type,g.key,g.props,null,m.mode,j),Ca(f,g),f.return=m,f)}function p(m,f,g,j){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Su(g,m.mode,j),f.return=m,f):(f=n(f,g.children||[]),f.return=m,f)}function b(m,f,g,j,M){return f===null||f.tag!==7?(f=al(g,m.mode,j,M),f.return=m,f):(f=n(f,g),f.return=m,f)}function z(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Nu(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ge:return g=Mi(f.type,f.key,f.props,null,m.mode,g),Ca(g,f),g.return=m,g;case je:return f=Su(f,m.mode,g),f.return=m,f;case pt:return f=ol(f),z(m,f,g)}if(ht(f)||B(f))return f=al(f,m.mode,g,null),f.return=m,f;if(typeof f.then=="function")return z(m,Gi(f),g);if(f.$$typeof===Gt)return z(m,Ui(m,f),g);Vi(m,f)}return null}function h(m,f,g,j){var M=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return M!==null?null:r(m,f,""+g,j);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ge:return g.key===M?o(m,f,g,j):null;case je:return g.key===M?p(m,f,g,j):null;case pt:return g=ol(g),h(m,f,g,j)}if(ht(g)||B(g))return M!==null?null:b(m,f,g,j,null);if(typeof g.then=="function")return h(m,f,Gi(g),j);if(g.$$typeof===Gt)return h(m,f,Ui(m,g),j);Vi(m,g)}return null}function x(m,f,g,j,M){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return m=m.get(g)||null,r(f,m,""+j,M);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ge:return m=m.get(j.key===null?g:j.key)||null,o(f,m,j,M);case je:return m=m.get(j.key===null?g:j.key)||null,p(f,m,j,M);case pt:return j=ol(j),x(m,f,g,j,M)}if(ht(j)||B(j))return m=m.get(g)||null,b(f,m,j,M,null);if(typeof j.then=="function")return x(m,f,g,Gi(j),M);if(j.$$typeof===Gt)return x(m,f,g,Ui(f,j),M);Vi(f,j)}return null}function A(m,f,g,j){for(var M=null,it=null,R=f,q=f=0,Rt=null;R!==null&&q<g.length;q++){R.index>q?(Rt=R,R=null):Rt=R.sibling;var rt=h(m,R,g[q],j);if(rt===null){R===null&&(R=Rt);break}t&&R&&rt.alternate===null&&e(m,R),f=i(rt,f,q),it===null?M=rt:it.sibling=rt,it=rt,R=Rt}if(q===g.length)return a(m,R),et&&oa(m,q),M;if(R===null){for(;q<g.length;q++)R=z(m,g[q],j),R!==null&&(f=i(R,f,q),it===null?M=R:it.sibling=R,it=R);return et&&oa(m,q),M}for(R=l(R);q<g.length;q++)Rt=x(R,m,q,g[q],j),Rt!==null&&(t&&(rt=Rt.alternate,rt!==null&&R.delete(rt.key===null?q:rt.key)),f=i(Rt,f,q),it===null?M=Rt:it.sibling=Rt,it=Rt);return t&&R.forEach(function(Za){return e(m,Za)}),et&&oa(m,q),M}function F(m,f,g,j){if(g==null)throw Error(s(151));for(var M=null,it=null,R=f,q=f=0,Rt=null,rt=g.next();R!==null&&!rt.done;q++,rt=g.next()){R.index>q?(Rt=R,R=null):Rt=R.sibling;var Za=h(m,R,rt.value,j);if(Za===null){R===null&&(R=Rt);break}t&&R&&Za.alternate===null&&e(m,R),f=i(Za,f,q),it===null?M=Za:it.sibling=Za,it=Za,R=Rt}if(rt.done)return a(m,R),et&&oa(m,q),M;if(R===null){for(;!rt.done;q++,rt=g.next())rt=z(m,rt.value,j),rt!==null&&(f=i(rt,f,q),it===null?M=rt:it.sibling=rt,it=rt);return et&&oa(m,q),M}for(R=l(R);!rt.done;q++,rt=g.next())rt=x(R,m,q,rt.value,j),rt!==null&&(t&&(Rt=rt.alternate,Rt!==null&&R.delete(Rt.key===null?q:Rt.key)),f=i(rt,f,q),it===null?M=rt:it.sibling=rt,it=rt);return t&&R.forEach(function(ig){return e(m,ig)}),et&&oa(m,q),M}function I(m,f,g,j){if(typeof g=="object"&&g!==null&&g.type===ze&&g.key===null&&g.props.ref===void 0&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ge:t:{for(var M=g.key;f!==null;){if(f.key===M){if(M=g.type,M===ze){if(f.tag===7){a(m,f.sibling),j=n(f,g.props.children),Ca(j,g),j.return=m,m=j;break t}}else if(f.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===pt&&ol(M)===f.type){a(m,f.sibling),j=n(f,g.props),Ca(j,g),j.return=m,m=j;break t}a(m,f);break}else e(m,f);f=f.sibling}g.type===ze?(j=al(g.props.children,m.mode,j,g.key),Ca(j,g),j.return=m,m=j):(j=Mi(g.type,g.key,g.props,null,m.mode,j),Ca(j,g),j.return=m,m=j)}return u(m);case je:t:{for(M=g.key;f!==null;){if(f.key===M)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){a(m,f.sibling),j=n(f,g.children||[]),j.return=m,m=j;break t}else{a(m,f);break}else e(m,f);f=f.sibling}j=Su(g,m.mode,j),j.return=m,m=j}return u(m);case pt:return g=ol(g),I(m,f,g,j)}if(ht(g))return A(m,f,g,j);if(B(g)){if(M=B(g),typeof M!="function")throw Error(s(150));return g=M.call(g),F(m,f,g,j)}if(typeof g.then=="function")return I(m,f,Gi(g),j);if(g.$$typeof===Gt)return I(m,f,Ui(m,g),j);Vi(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,f!==null&&f.tag===6?(a(m,f.sibling),j=n(f,g),j.return=m,m=j):(a(m,f),j=Nu(g,m.mode,j),j.return=m,m=j),u(m)):a(m,f)}return function(m,f,g,j){try{On=0;var M=I(m,f,g,j);return ql=null,M}catch(R){if(R===kl||R===ki)throw R;var it=ce(29,R,null,m.mode);return it.lanes=j,it.return=m,it}finally{}}}var fl=tf(!0),ef=tf(!1),Aa=!1;function Ou(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Du(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ma(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(mt&2)!==0){var n=l.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=_i(t),Bs(t,null,a),e}return Ai(t,l,e,a),_i(t)}function Dn(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Vo(t,a)}}function Fu(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=e:i=i.next=e}else n=i=e;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Hu=!1;function Fn(){if(Hu){var t=Bl;if(t!==null)throw t}}function Hn(t,e,a,l){Hu=!1;var n=t.updateQueue;Aa=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,r=n.shared.pending;if(r!==null){n.shared.pending=null;var o=r,p=o.next;o.next=null,u===null?i=p:u.next=p,u=o;var b=t.alternate;b!==null&&(b=b.updateQueue,r=b.lastBaseUpdate,r!==u&&(r===null?b.firstBaseUpdate=p:r.next=p,b.lastBaseUpdate=o))}if(i!==null){var z=n.baseState;u=0,b=p=o=null,r=i;do{var h=r.lane&-536870913,x=h!==r.lane;if(x?(nt&h)===h:(l&h)===h){h!==0&&h===ul&&(Hu=!0),b!==null&&(b=b.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});t:{var A=t,F=r;h=e;var I=a;switch(F.tag){case 1:if(A=F.payload,typeof A=="function"){z=A.call(I,z,h);break t}z=A;break t;case 3:A.flags=A.flags&-65537|128;case 0:if(A=F.payload,h=typeof A=="function"?A.call(I,z,h):A,h==null)break t;z=$({},z,h);break t;case 2:Aa=!0}}h=r.callback,h!==null&&(t.flags|=64,x&&(t.flags|=8192),x=n.callbacks,x===null?n.callbacks=[h]:x.push(h))}else x={lane:h,tag:r.tag,payload:r.payload,callback:r.callback,next:null},b===null?(p=b=x,o=z):b=b.next=x,u|=h;if(r=r.next,r===null){if(r=n.shared.pending,r===null)break;x=r,r=x.next,x.next=null,n.lastBaseUpdate=x,n.shared.pending=null}}while(!0);b===null&&(o=z),n.baseState=o,n.firstBaseUpdate=p,n.lastBaseUpdate=b,i===null&&(n.shared.lanes=0),Ba|=u,t.lanes=u,t.memoizedState=z}}function af(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function lf(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)af(a[t],e)}var Oa=Ve(null),Yi=Ve(0);function nf(t,e){t=ga,jt(Yi,t),jt(Oa,e),ga=t|e.baseLanes}function Ru(){jt(Yi,ga),jt(Oa,Oa.current)}function Uu(){ga=Yi.current,Lt(Oa),Lt(Yi)}var Jt=Ve(null),te=null;function Da(t){var e=t.alternate;jt($t,$t.current&1),jt(Jt,t),te===null&&(e===null||Oa.current!==null||e.memoizedState!==null)&&(te=t)}function Bu(t){jt($t,$t.current),jt(Jt,t),te===null&&(te=t)}function cf(t){t.tag===22?(jt($t,$t.current),jt(Jt,t),te===null&&(te=t)):Fa()}function Fa(){jt($t,$t.current),jt(Jt,Jt.current)}function xe(t){Lt(Jt),te===t&&(te=null),Lt($t)}var $t=Ve(0);function Rn(t,e){jt(Jt,Jt.current),jt($t,e)}function ku(t){Lt($t),Lt(Jt),te===t&&(te=null)}function Xi(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||uo(a)||ro(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var da=0,W=null,yt=null,Ft=null,Qi=!1,Gl=!1,dl=!1,Li=0,Un=0,Vl=null,Ep=0;function _t(){throw Error(s(321))}function qu(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!ge(t[a],e[a]))return!1;return!0}function Gu(t,e,a,l,n,i){return da=i,W=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,H.H=t===null||t.memoizedState===null?Yf:Xf,dl=!1,i=a(l,n),dl=!1,Gl&&(i=rf(e,a,l,n)),uf(t),i}function uf(t){H.H=Pi;var e=yt!==null&&yt.next!==null;if(da=0,Ft=yt=W=null,Qi=!1,Un=0,Vl=null,e)throw Error(s(300));t===null||Ht||(t=t.dependencies,t!==null&&Ri(t)&&(Ht=!0))}function rf(t,e,a,l){W=t;var n=0;do{if(Gl&&(Vl=null),Un=0,Gl=!1,25<=n)throw Error(s(301));if(n+=1,Ft=yt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}H.H=Fp,i=e(a,l)}while(Gl);return i}function wp(){var t=H.H,e=t.useState()[0];return e=typeof e.then=="function"?Bn(e):e,t=t.useState()[0],(yt!==null?yt.memoizedState:null)!==t&&(W.flags|=1024),e}function Vu(){var t=Li!==0;return Li=0,t}function Yu(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Xu(t){if(Qi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Qi=!1}da=0,Ft=yt=W=null,Gl=!1,Un=Li=0,Vl=null}function ae(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?W.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Ot(){if(yt===null){var t=W.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=Ft===null?W.memoizedState:Ft.next;if(e!==null)Ft=e,yt=t;else{if(t===null)throw W.alternate===null?Error(s(467)):Error(s(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Ft===null?W.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Zi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bn(t){var e=Un;return Un+=1,Vl===null&&(Vl=[]),t=Ws(Vl,t,e),e=W,(Ft===null?e.memoizedState:Ft.next)===null&&(e=e.alternate,H.H=e===null||e.memoizedState===null?Yf:Xf),t}function Ki(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Bn(t);if(t.$$typeof===E)return;if(t.$$typeof===Gt)return Kt(t)}throw Error(s(438,String(t)))}function Qu(t){var e=null,a=W.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=W.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Zi(),W.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=Ja;return e.index++,a}function ha(t,e){return typeof e=="function"?e(t):e}function Ji(t){var e=Ot();return Lu(e,yt,t)}function Lu(t,e,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var r=u=null,o=null,p=e,b=!1;do{var z=p.lane&-536870913;if(z!==p.lane?(nt&z)===z:(da&z)===z){var h=p.revertLane;if(h===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),z===ul&&(b=!0);else if((da&h)===h){p=p.next,h===ul&&(b=!0);continue}else z={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},o===null?(r=o=z,u=i):o=o.next=z,W.lanes|=h,Ba|=h;z=p.action,dl&&a(i,z),i=p.hasEagerState?p.eagerState:a(i,z)}else h={lane:z,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},o===null?(r=o=h,u=i):o=o.next=h,W.lanes|=z,Ba|=z;p=p.next}while(p!==null&&p!==e);if(o===null?u=i:o.next=r,!ge(i,t.memoizedState)&&(Ht=!0,b&&(a=Bl,a!==null)))throw a;t.memoizedState=i,t.baseState=u,t.baseQueue=o,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Zu(t){var e=Ot(),a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,n=a.pending,i=e.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);ge(i,e.memoizedState)||(Ht=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,l]}function of(t,e,a){var l=W,n=Ot(),i=et;if(i){if(a===void 0)throw Error(s(407));a=a()}else a=e();var u=!ge((yt||n).memoizedState,a);if(u&&(n.memoizedState=a,Ht=!0),n=n.queue,$u(df.bind(null,l,n,t),[t]),t=n.getSnapshot!==e||u||Ft!==null&&(Ft.memoizedState.tag&1)!==0,Yl(t?9:8,{destroy:void 0},ff.bind(null,l,n,a,e),null),t){if(l.flags|=2048,St===null)throw Error(s(349));i||(da&127)!==0||sf(l,e,a)}return a}function sf(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=W.updateQueue,e===null?(e=Zi(),W.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function ff(t,e,a,l){e.value=a,e.getSnapshot=l,hf(e)&&mf(t)}function df(t,e,a){return a(function(){hf(e)&&mf(t)})}function hf(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!ge(t,a)}catch{return!0}}function mf(t){var e=el(t,2);e!==null&&se(e,t,2)}function Ku(t){var e=ae();if(typeof t=="function"){var a=t;if(t=a(),dl){Na(!0);try{a()}finally{Na(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},e}function pf(t,e,a,l){return t.baseState=a,Lu(t,yt,typeof l=="function"?l:ha)}function Cp(t,e,a,l,n){if(Ii(t))throw Error(s(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};H.T!==null?a(!0):i.isTransition=!1,l(i),a=e.pending,a===null?(i.next=e.pending=i,gf(e,i)):(i.next=a.next,e.pending=a.next=i)}}function gf(t,e){var a=e.action,l=e.payload,n=t.state;if(e.isTransition){var i=H.T,u={};u.types=i!==null?i.types:null,H.T=u;try{var r=a(n,l),o=H.S;o!==null&&o(u,r),xf(t,e,r)}catch(p){Ju(t,e,p)}finally{i!==null&&u.types!==null&&(i.types=u.types),H.T=i}}else try{i=a(n,l),xf(t,e,i)}catch(p){Ju(t,e,p)}}function xf(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){bf(t,e,l)},function(l){return Ju(t,e,l)}):bf(t,e,a)}function bf(t,e,a){e.status="fulfilled",e.value=a,vf(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,gf(t,a)))}function Ju(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,vf(e),e=e.next;while(e!==l)}t.action=null}function vf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function yf(t,e){return e}function Nf(t,e){if(et){var a=St.formState;if(a!==null){t:{var l=W;if(et){if(zt){e:{for(var n=zt,i=_e;n.nodeType!==8;){if(!i){n=null;break e}if(n=Oe(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){zt=Oe(n.nextSibling),l=n.data==="F!";break t}}Ea(l)}l=!1}l&&(e=a[0])}}return a=ae(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yf,lastRenderedState:e},a.queue=l,a=qf.bind(null,W,l),l.dispatch=a,l=Ku(!1),i=er.bind(null,W,!1,l.queue),l=ae(),n={state:e,dispatch:null,action:t,pending:null},l.queue=n,a=Cp.bind(null,W,n,i,a),n.dispatch=a,l.memoizedState=t,[e,a,!1]}function Sf(t){var e=Ot();return jf(e,yt,t)}function jf(t,e,a){if(e=Lu(t,e,yf)[0],t=Ji(ha)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Bn(e)}catch(u){throw u===kl?ki:u}else l=e;e=Ot();var n=e.queue,i=n.dispatch;return a!==e.memoizedState&&(W.flags|=2048,Yl(9,{destroy:void 0},Ap.bind(null,n,a),null)),[l,i,t]}function Ap(t,e){t.action=e}function zf(t){var e=Ot(),a=yt;if(a!==null)return jf(e,a,t);Ot(),e=e.memoizedState,a=Ot();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function Yl(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=W.updateQueue,e===null&&(e=Zi(),W.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function Tf(){return Ot().memoizedState}function $i(t,e,a,l){var n=ae();W.flags|=t,n.memoizedState=Yl(1|e,{destroy:void 0},a,l===void 0?null:l)}function Wi(t,e,a,l){var n=Ot();l=l===void 0?null:l;var i=n.memoizedState.inst;yt!==null&&l!==null&&qu(l,yt.memoizedState.deps)?n.memoizedState=Yl(e,i,a,l):(W.flags|=t,n.memoizedState=Yl(1|e,i,a,l))}function Ef(t,e){$i(8390656,8,t,e)}function $u(t,e){Wi(2048,8,t,e)}function _p(t){W.flags|=4;var e=W.updateQueue;if(e===null)e=Zi(),W.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function wf(t){var e=Ot().memoizedState;return _p({ref:e,nextImpl:t}),function(){if((mt&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function Cf(t,e){return Wi(4,2,t,e)}function Af(t,e){return Wi(4,4,t,e)}function _f(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mf(t,e,a){a=a!=null?a.concat([t]):null,Wi(4,4,_f.bind(null,e,t),a)}function Wu(){}function Of(t,e){var a=Ot();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&qu(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function Df(t,e){var a=Ot();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&qu(e,l[1]))return l[0];if(l=t(),dl){Na(!0);try{t()}finally{Na(!1)}}return a.memoizedState=[l,e],l}function Iu(t,e,a){return a===void 0||(da&1073741824)!==0&&(nt&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=Yd(),W.lanes|=t,Ba|=t,a)}function Ff(t,e,a,l){return ge(a,e)?a:Oa.current!==null?(t=Iu(t,a,l),ge(t,e)||(Ht=!0),t):(da&106)===0||(da&1073741824)!==0&&(nt&261930)===0?(Ht=!0,t.memoizedState=a):(t=Yd(),W.lanes|=t,Ba|=t,e)}function Hf(t,e,a,l,n){var i=L.p;L.p=i!==0&&8>i?i:8;var u=H.T,r={};r.types=u!==null?u.types:null,H.T=r,er(t,!1,e,a);try{var o=n(),p=H.S;if(p!==null&&p(r,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var b=Tp(o,l);kn(t,e,b,Ne(t))}else kn(t,e,l,Ne(t))}catch(z){kn(t,e,{then:function(){},status:"rejected",reason:z},Ne())}finally{L.p=i,u!==null&&r.types!==null&&(u.types=r.types),H.T=u}}function Mp(){}function Pu(t,e,a,l){if(t.tag!==5)throw Error(s(476));var n=Rf(t).queue;Hf(t,n,e,aa,a===null?Mp:function(){return Uf(t),a(l)})}function Rf(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:aa,baseState:aa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:aa},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Uf(t){var e=Rf(t);e.next===null&&(e=t.alternate.memoizedState),kn(t,e.next.queue,{},Ne())}function tr(){return Kt(on)}function Bf(){return Ot().memoizedState}function kf(){return Ot().memoizedState}function Op(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Ne();t=_a(a);var l=Ma(e,t,a);l!==null&&(se(l,e,a),Dn(l,e,a)),e={cache:Cu()},t.payload=e;return}e=e.return}}function Dp(t,e,a){var l=Ne();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ii(t)?Gf(e,a):(a=vu(t,e,a,l),a!==null&&(se(a,t,l),Vf(a,e,l)))}function qf(t,e,a){var l=Ne();kn(t,e,a,l)}function kn(t,e,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ii(t))Gf(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,r=i(u,a);if(n.hasEagerState=!0,n.eagerState=r,ge(r,u))return Ai(t,e,n,0),St===null&&Ci(),!1}catch{}finally{}if(a=vu(t,e,n,l),a!==null)return se(a,t,l),Vf(a,e,l),!0}return!1}function er(t,e,a,l){if(l={lane:2,revertLane:Qr(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ii(t)){if(e)throw Error(s(479))}else e=vu(t,a,l,2),e!==null&&se(e,t,2)}function Ii(t){var e=t.alternate;return t===W||e!==null&&e===W}function Gf(t,e){Gl=Qi=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Vf(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Vo(t,a)}}var Pi={readContext:Kt,use:Ki,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t,useEffectEvent:_t},Yf={readContext:Kt,use:Ki,useCallback:function(t,e){return ae().memoizedState=[t,e===void 0?null:e],t},useContext:Kt,useEffect:Ef,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,$i(4194308,4,_f.bind(null,e,t),a)},useLayoutEffect:function(t,e){return $i(4194308,4,t,e)},useInsertionEffect:function(t,e){$i(4,2,t,e)},useMemo:function(t,e){var a=ae();e=e===void 0?null:e;var l=t();if(dl){Na(!0);try{t()}finally{Na(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=ae();if(a!==void 0){var n=a(e);if(dl){Na(!0);try{a(e)}finally{Na(!1)}}}else n=e;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=Dp.bind(null,W,t),[l.memoizedState,t]},useRef:function(t){var e=ae();return t={current:t},e.memoizedState=t},useState:function(t){t=Ku(t);var e=t.queue,a=qf.bind(null,W,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Wu,useDeferredValue:function(t,e){var a=ae();return Iu(a,t,e)},useTransition:function(){var t=Ku(!1);return t=Hf.bind(null,W,t.queue,!0,!1),ae().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=W,n=ae();if(et){if(a===void 0)throw Error(s(407));a=a()}else{if(a=e(),St===null)throw Error(s(349));(nt&127)!==0||sf(l,e,a)}n.memoizedState=a;var i={value:a,getSnapshot:e};return n.queue=i,Ef(df.bind(null,l,i,t),[t]),l.flags|=2048,Yl(9,{destroy:void 0},ff.bind(null,l,i,a,e),null),a},useId:function(){var t=ae(),e=St.identifierPrefix;if(et){var a=Le,l=Qe;a=(l&~(1<<32-me(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=Li++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=Ep++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:tr,useFormState:Nf,useActionState:Nf,useOptimistic:function(t){var e=ae();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=er.bind(null,W,!0,a),a.dispatch=e,[t,e]},useMemoCache:Qu,useCacheRefresh:function(){return ae().memoizedState=Op.bind(null,W)},useEffectEvent:function(t){var e=ae(),a={impl:t};return e.memoizedState=a,function(){if((mt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Xf={readContext:Kt,use:Ki,useCallback:Of,useContext:Kt,useEffect:$u,useImperativeHandle:Mf,useInsertionEffect:Cf,useLayoutEffect:Af,useMemo:Df,useReducer:Ji,useRef:Tf,useState:function(){return Ji(ha)},useDebugValue:Wu,useDeferredValue:function(t,e){var a=Ot();return Ff(a,yt.memoizedState,t,e)},useTransition:function(){var t=Ji(ha)[0],e=Ot().memoizedState;return[typeof t=="boolean"?t:Bn(t),e]},useSyncExternalStore:of,useId:Bf,useHostTransitionStatus:tr,useFormState:Sf,useActionState:Sf,useOptimistic:function(t,e){var a=Ot();return pf(a,yt,t,e)},useMemoCache:Qu,useCacheRefresh:kf,useEffectEvent:wf},Fp={readContext:Kt,use:Ki,useCallback:Of,useContext:Kt,useEffect:$u,useImperativeHandle:Mf,useInsertionEffect:Cf,useLayoutEffect:Af,useMemo:Df,useReducer:Zu,useRef:Tf,useState:function(){return Zu(ha)},useDebugValue:Wu,useDeferredValue:function(t,e){var a=Ot();return yt===null?Iu(a,t,e):Ff(a,yt.memoizedState,t,e)},useTransition:function(){var t=Zu(ha)[0],e=Ot().memoizedState;return[typeof t=="boolean"?t:Bn(t),e]},useSyncExternalStore:of,useId:Bf,useHostTransitionStatus:tr,useFormState:zf,useActionState:zf,useOptimistic:function(t,e){var a=Ot();return yt!==null?pf(a,yt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Qu,useCacheRefresh:kf,useEffectEvent:wf};function ar(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:$({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var lr={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=Ne(),n=_a(l);n.payload=e,a!=null&&(n.callback=a),e=Ma(t,n,l),e!==null&&(se(e,t,l),Dn(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=Ne(),n=_a(l);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=Ma(t,n,l),e!==null&&(se(e,t,l),Dn(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Ne(),l=_a(a);l.tag=2,e!=null&&(l.callback=e),e=Ma(t,l,a),e!==null&&(se(e,t,a),Dn(e,t,a))}};function Qf(t,e,a,l,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,u):e.prototype&&e.prototype.isPureReactComponent?!Tn(a,l)||!Tn(n,i):!0}function Lf(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&lr.enqueueReplaceState(e,e.state,null)}function hl(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=$({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function Zf(t){wi(t)}function Kf(t){console.error(t)}function Jf(t){wi(t)}function tc(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function $f(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function nr(t,e,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){tc(t,e)},a}function Wf(t){return t=_a(t),t.tag=3,t}function If(t,e,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){$f(e,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){$f(e,a,l),typeof n!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function Hp(t,e,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&il(e,a,n,!0),a=Jt.current,a!==null){switch(a.tag){case 31:case 13:case 19:return te===null?Nc():a.alternate===null&&Mt===0&&(Mt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===qi?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),Vr(t,l,n)),!1;case 22:return a.flags|=65536,l===qi?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),Vr(t,l,n)),!1}throw Error(s(435,a.tag))}return Vr(t,l,n),Nc(),!1}if(et)return e=Jt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==zu&&(t=Error(s(422),{cause:l}),Cn(we(t,a)))):(l!==zu&&(e=Error(s(423),{cause:l}),Cn(we(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=we(l,a),n=nr(t.stateNode,l,n),Fu(t,n),Mt!==4&&(Mt=2)),!1;var i=Error(s(520),{cause:l});if(i=we(i,a),Zn===null?Zn=[i]:Zn.push(i),Mt!==4&&(Mt=2),e===null)return!0;l=we(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=nr(a.stateNode,l,t),Fu(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ka===null||!ka.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Wf(n),If(n,t,a,l),Fu(a,n),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var ir=Error(s(461)),Ht=!1;function qt(t,e,a,l){e.child=t===null?ef(e,null,a,l):fl(e,t.child,a,l)}function Pf(t,e,a,l,n){a=a.render;var i=e.ref;if("ref"in l){var u={};for(var r in l)r!=="ref"&&(u[r]=l[r])}else u=l;return cl(e),l=Gu(t,e,a,u,i,n),r=Vu(),t!==null&&!Ht?(Yu(t,e,n),ma(t,e,n)):(et&&r&&Di(e),e.flags|=1,qt(t,e,l,n),e.child)}function td(t,e,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!yu(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,ed(t,e,i,l,n)):(t=Mi(a.type,null,l,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!hr(t,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Tn,a(u,l)&&t.ref===e.ref)return ma(t,e,n)}return e.flags|=1,t=ra(i,l),t.ref=e.ref,t.return=e,e.child=t}function ed(t,e,a,l,n){if(t!==null){var i=t.memoizedProps;if(Tn(i,l)&&t.ref===e.ref)if(Ht=!1,e.pendingProps=l=i,hr(t,n))(t.flags&131072)!==0&&(Ht=!0);else return e.lanes=t.lanes,ma(t,e,n)}return cr(t,e,a,l,n)}function ad(t,e,a,l){var n=l.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,t!==null){for(l=e.child=t.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,e.child=null;return ld(t,e,i,a,l)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Bi(e,i!==null?i.cachePool:null),i!==null?nf(e,i):Ru(),cf(e);else return l=e.lanes=536870912,ld(t,e,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Bi(e,i.cachePool),nf(e,i),Fa(),e.memoizedState=null):(t!==null&&Bi(e,null),Ru(),Fa());return qt(t,e,n,a),e.child}function qn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function ld(t,e,a,l,n){var i=_u();return i=i===null?null:{parent:Dt._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&Bi(e,null),Ru(),cf(e),t!==null&&il(t,e,l,!0),e.childLanes=n,null}function ec(t,e){return e=ac({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function nd(t,e,a){return fl(e,t.child,null,a),t=ec(e,e.pendingProps),t.flags|=2,xe(e),e.memoizedState=null,t}function Rp(t,e,a){var l=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(et){if(l.mode==="hidden")return t=ec(e,l),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},qn(null,t);if(Bu(e),(t=zt)?(t=_0(t,_e),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:za!==null?{id:Qe,overflow:Le}:null,retryLane:536870912,hydrationErrors:null},a=qs(t),a.return=e,e.child=a,Yt=e,zt=null)):t=null,t===null)throw Ea(e);return e.lanes=536870912,null}return ec(e,l)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(Bu(e),n)if(e.flags&256)e.flags&=-257,e=nd(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(s(558));else if(Ht||il(t,e,a,!1),n=(a&t.childLanes)!==0,Ht||n){if(Oa.current===null){if(l=St,l!==null&&(u=Yo(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,el(t,u),se(l,t,u),ir;Nc()}e=nd(t,e,a)}else t=i.treeContext,zt=Oe(u.nextSibling),Yt=e,et=!0,Ta=null,_e=!1,t!==null&&Ys(e,t),e=ec(e,l),e.flags|=134221824;return e}return t=ra(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Xl(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function cr(t,e,a,l,n){return cl(e),a=Gu(t,e,a,l,void 0,n),l=Vu(),t!==null&&!Ht?(Yu(t,e,n),ma(t,e,n)):(et&&l&&Di(e),e.flags|=1,qt(t,e,a,n),e.child)}function id(t,e,a,l,n,i){return cl(e),e.updateQueue=null,a=rf(e,l,a,n),uf(t),l=Vu(),t!==null&&!Ht?(Yu(t,e,i),ma(t,e,i)):(et&&l&&Di(e),e.flags|=1,qt(t,e,a,i),e.child)}function cd(t,e,a,l,n){if(cl(e),e.stateNode===null){var i=Fl,u=a.contextType;typeof u=="object"&&u!==null&&(i=Kt(u)),i=new a(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=lr,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},Ou(e),u=a.contextType,i.context=typeof u=="object"&&u!==null?Kt(u):Fl,i.state=e.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(ar(e,a,u,l),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&lr.enqueueReplaceState(i,i.state,null),Hn(e,l,i,n),Fn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var r=e.memoizedProps,o=hl(a,r);i.props=o;var p=i.context,b=a.contextType;u=Fl,typeof b=="object"&&b!==null&&(u=Kt(b));var z=a.getDerivedStateFromProps;b=typeof z=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=e.pendingProps!==r,b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||p!==u)&&Lf(e,i,l,u),Aa=!1;var h=e.memoizedState;i.state=h,Hn(e,l,i,n),Fn(),p=e.memoizedState,r||h!==p||Aa?(typeof z=="function"&&(ar(e,a,z,l),p=e.memoizedState),(o=Aa||Qf(e,a,o,l,h,p,u))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=p),i.props=l,i.state=p,i.context=u,l=o):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,Du(t,e),u=e.memoizedProps,b=hl(a,u),i.props=b,z=e.pendingProps,h=i.context,p=a.contextType,o=Fl,typeof p=="object"&&p!==null&&(o=Kt(p)),r=a.getDerivedStateFromProps,(p=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==z||h!==o)&&Lf(e,i,l,o),Aa=!1,h=e.memoizedState,i.state=h,Hn(e,l,i,n),Fn();var x=e.memoizedState;u!==z||h!==x||Aa||t!==null&&t.dependencies!==null&&Ri(t.dependencies)?(typeof r=="function"&&(ar(e,a,r,l),x=e.memoizedState),(b=Aa||Qf(e,a,b,l,h,x,o)||t!==null&&t.dependencies!==null&&Ri(t.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,x,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,x,o)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=x),i.props=l,i.state=x,i.context=o,l=b):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,Xl(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=fl(e,t.child,null,n),e.child=fl(e,null,a,n)):qt(t,e,a,n),e.memoizedState=i.state,t=e.child):t=ma(t,e,n),t}function ud(t,e,a,l){return ll(),e.flags|=256,qt(t,e,a,l),e.child}var ur={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rr(t){return{baseLanes:t,cachePool:Js()}}function or(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=ye),t}function rd(t,e,a){var l=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:($t.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(et){if(n?Da(e):Fa(),(t=zt)?(t=_0(t,_e),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:za!==null?{id:Qe,overflow:Le}:null,retryLane:536870912,hydrationErrors:null},a=qs(t),a.return=e,e.child=a,Yt=e,zt=null)):t=null,t===null)throw Ea(e);return ro(t)?e.lanes=32:e.lanes=536870912,null}return i=l.children,l=l.fallback,n?(Fa(),n=e.mode,i=ac({mode:"hidden",children:i},n),l=al(l,n,a,null),i.return=e,l.return=e,i.sibling=l,e.child=i,l=e.child,l.memoizedState=rr(a),l.childLanes=or(t,u,a),e.memoizedState=ur,qn(null,l)):(Da(e),sr(e,i))}var r=t.memoizedState;if(r!==null){var o=r.dehydrated;if(o!==null)return Up(t,e,i,u,l,o,r,a)}return n?(Fa(),n=l.fallback,i=e.mode,r=t.child,o=r.sibling,l=ra(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&1206910976,o!==null?n=ra(o,n):(n=al(n,i,a,null),n.flags|=2),n.return=e,l.return=e,l.sibling=n,e.child=l,qn(null,l),l=e.child,n=t.child.memoizedState,n===null?n=rr(a):(i=n.cachePool,i!==null?(r=Dt._currentValue,i=i.parent!==r?{parent:r,pool:r}:i):i=Js(),n={baseLanes:n.baseLanes|a,cachePool:i}),l.memoizedState=n,l.childLanes=or(t,u,a),e.memoizedState=ur,qn(t.child,l)):(Da(e),a=t.child,t=a.sibling,a=ra(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=a,e.memoizedState=null,a)}function sr(t,e){return e=ac({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function ac(t,e){return t=ce(22,t,null,e),t.lanes=0,t}function lc(t,e,a){return fl(e,t.child,null,a),t=sr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Up(t,e,a,l,n,i,u,r){if(a)return e.flags&256?(Da(e),e.flags&=-257,lc(t,e,r)):e.memoizedState!==null?(Fa(),e.child=t.child,e.flags|=128,null):(Fa(),i=n.fallback,u=e.mode,n=ac({mode:"visible",children:n.children},u),i=al(i,u,r,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,fl(e,t.child,null,r),n=e.child,n.memoizedState=rr(r),n.childLanes=or(t,l,r),e.memoizedState=ur,qn(null,n));if(Da(e),ro(i)){if(l=i.nextSibling&&i.nextSibling.dataset,l)var o=l.dgst;return l=o,l!==""&&(n=Error(s(419)),n.stack="",n.digest=l,Cn({value:n,source:null,stack:null})),lc(t,e,r)}if(Ht||il(t,e,r,!1),l=(r&t.childLanes)!==0,Ht||l){if(Oa.current!==null)return lc(t,e,r);if(l=St,l!==null&&(n=Yo(l,r),n!==0&&n!==u.retryLane))throw u.retryLane=n,el(t,n),se(l,t,n),ir;return uo(i)||Nc(),lc(t,e,r)}return uo(i)?(e.flags|=192,e.child=t.child,null):(t=u.treeContext,zt=Oe(i.nextSibling),Yt=e,et=!0,Ta=null,_e=!1,t!==null&&Ys(e,t),e=sr(e,n.children),e.flags|=134221824,e)}function od(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Hi(t.return,e,a)}function sd(t){for(var e=null;t!==null;){var a=t.alternate;a!==null&&Xi(a)===null&&(e=t),t=t.sibling}return e}function nc(t,e,a,l,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function fr(t){var e=t.child;for(t.child=null;e!==null;){var a=e.sibling;e.sibling=t.child,t.child=e,e=a}}function dr(t,e,a){var l=e.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=$t.current;if(e.flags&128)return Rn(e,u),null;var r=(u&2)!==0;if(r?(u=u&1|2,e.flags|=128):u&=1,Rn(e,u),n==="backwards"&&t!==null?(fr(t),qt(t,e,l,a),fr(t)):qt(t,e,l,a),l=et?wn:0,!r&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&od(t,a,e);else if(t.tag===19)od(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"backwards":a=sd(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null,fr(e)),nc(e,!0,n,null,i,l);break;case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&Xi(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}nc(e,!0,a,null,i,l);break;case"together":nc(e,!1,null,null,void 0,l);break;case"independent":e.memoizedState=null;break;default:a=sd(e.child),a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),nc(e,!1,n,a,i,l)}return e.child}function fd(t,e,a){var l=e.pendingProps;return wa(e,e.type,l.value),qt(t,e,l.children,a),e.child}function ma(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Ba|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(il(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,a=ra(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=ra(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function hr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Ri(t)))}function Bp(t,e,a){switch(e.tag){case 3:oi(e,e.stateNode.containerInfo),wa(e,Dt,t.memoizedState.cache),ll();break;case 27:case 5:qc(e);break;case 4:oi(e,e.stateNode.containerInfo);break;case 10:wa(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Bu(e),null;break;case 13:var l=e.memoizedState;if(l!==null){if(l.dehydrated!==null)return Da(e),e.flags|=128,null;l=il(t,e,a,!1);var n=e.child.childLanes;return l||(a&n)!==0?rd(t,e,a):(Da(e),t=ma(t,e,a),t!==null?t.sibling:null)}Da(e);break;case 19:if(e.flags&128)return dr(t,e,a);if(n=(t.flags&128)!==0,l=(a&e.childLanes)!==0,l||(il(t,e,a,!1),l=(a&e.childLanes)!==0),n){if(l)return dr(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Rn(e,$t.current),l)break;return null;case 22:return e.lanes=0,ad(t,e,a,e.pendingProps);case 24:wa(e,Dt,t.memoizedState.cache)}return ma(t,e,a)}function dd(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Ht=!0;else{if(!hr(t,a)&&(e.flags&128)===0)return Ht=!1,Bp(t,e,a);Ht=(t.flags&131072)!==0}else Ht=!1,et&&(e.flags&1048576)!==0&&Vs(e,wn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=ol(e.elementType),e.type=t,typeof t=="function")yu(t)?(l=hl(t,l),e.tag=1,e=cd(null,e,t,l,a)):(e.tag=0,e=cr(null,e,t,l,a));else{if(t!=null){var n=t.$$typeof;if(n===_){e.tag=11,e=Pf(null,e,t,l,a);break t}else if(n===Nt){e.tag=14,e=td(null,e,t,l,a);break t}else if(n===Gt){e.tag=10,e.type=t,e=fd(null,e,a);break t}}throw e=ft(t)||t,Error(s(306,e,""))}}return e;case 0:return cr(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,n=hl(l,e.pendingProps),cd(t,e,l,n,a);case 3:t:{if(oi(e,e.stateNode.containerInfo),t===null)throw Error(s(387));l=e.pendingProps;var i=e.memoizedState;n=i.element,Du(t,e),Hn(e,l,null,a);var u=e.memoizedState;if(l=u.cache,wa(e,Dt,l),l!==i.cache&&wu(e,[Dt],a,!0),Fn(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=ud(t,e,l,a);break t}else if(l!==n){n=we(Error(s(424)),e),Cn(n),e=ud(t,e,l,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(zt=Oe(t.firstChild),Yt=e,et=!0,Ta=null,_e=!0,a=ef(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(ll(),l===n){e=ma(t,e,a);break t}qt(t,e,l,a)}e=e.child}return e;case 26:return Xl(t,e),t===null?(a=U0(e.type,null,e.pendingProps,null))?e.memoizedState=a:et||(e.stateNode=g0(e.type,e.pendingProps,va.current,e)):e.memoizedState=U0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return qc(e),t===null&&et&&(l=e.stateNode=D0(e.type,e.pendingProps,va.current),Yt=e,_e=!0,n=zt,Va(e.type)?(oo=n,zt=Oe(l.firstChild)):zt=n),qt(t,e,e.pendingProps.children,a),Xl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&et&&((n=l=zt)&&(l=O1(l,e.type,e.pendingProps,_e),l!==null?(e.stateNode=l,Yt=e,zt=Oe(l.firstChild),_e=!1,n=!0):n=!1),n||Ea(e)),qc(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,l=i.children,to(n,i)?l=null:u!==null&&to(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=Gu(t,e,wp,null,null,a),on._currentValue=n),Xl(t,e),qt(t,e,l,a),e.child;case 6:return t===null&&et&&((t=a=zt)&&(a=D1(a,e.pendingProps,_e),a!==null?(e.stateNode=a,Yt=e,zt=null,t=!0):t=!1),t||Ea(e)),null;case 13:return rd(t,e,a);case 4:return oi(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=fl(e,null,l,a):qt(t,e,l,a),e.child;case 11:return Pf(t,e,e.type,e.pendingProps,a);case 7:return l=e.pendingProps,Xl(t,e),qt(t,e,l,a),e.child;case 8:return qt(t,e,e.pendingProps.children,a),e.child;case 12:return qt(t,e,e.pendingProps.children,a),e.child;case 10:return fd(t,e,a);case 9:return n=e.type._context,l=e.pendingProps.children,cl(e),n=Kt(n),l=l(n),e.flags|=1,qt(t,e,l,a),e.child;case 14:return td(t,e,e.type,e.pendingProps,a);case 15:return ed(t,e,e.type,e.pendingProps,a);case 19:return dr(t,e,a);case 31:return Rp(t,e,a);case 22:return ad(t,e,a,e.pendingProps);case 24:return cl(e),l=Kt(Dt),t===null?(n=_u(),n===null&&(n=St,i=Cu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),e.memoizedState={parent:l,cache:n},Ou(e),wa(e,Dt,n)):((t.lanes&a)!==0&&(Du(t,e),Hn(e,null,null,a),Fn()),n=t.memoizedState,i=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),wa(e,Dt,l)):(l=i.cache,wa(e,Dt,l),l!==n.cache&&wu(e,[Dt],a,!0))),qt(t,e,e.pendingProps.children,a),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),l=e.pendingProps,l.name!=null&&l.name!=="auto"?e.flags|=t===null?18882560:18874368:et&&Di(e),t!==null&&t.memoizedProps.name!==l.name?e.flags|=4194816:Xl(t,e),qt(t,e,l.children,a),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function pa(t){t.flags|=4}function mr(t,e,a,l,n){var i;if((i=(t.mode&32)!==0)&&(i=a===null?G0(e,l):G0(e,l)&&(l.src!==a.src||l.srcSet!==a.srcSet)),i){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(Zd())t.flags|=8192;else throw sl=qi,Mu}else t.flags&=-16777217}function hd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!V0(e))if(Zd())t.flags|=8192;else throw sl=qi,Mu}function ic(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?qo():536870912,t.lanes|=e,Jl|=e)}function Gn(t,e){if(!et)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null;break;default:for(e=t.tail,a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null}}function Tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&1206910976,l|=n.flags&1206910976,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function kp(t,e,a){var l=e.pendingProps;switch(ju(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(e),null;case 1:return Tt(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),fa(Dt),Nl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ul(e)?pa(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Tu())),Tt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(pa(e),i!==null?(Tt(e),hd(e,i)):(Tt(e),mr(e,n,null,l,a))):i?i!==t.memoizedState?(pa(e),Tt(e),hd(e,i)):(Tt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&pa(e),Tt(e),mr(e,n,t,l,a)),null;case 27:if(si(e),a=va.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&pa(e);else{if(!l){if(e.stateNode===null)throw Error(s(166));return Tt(e),e.subtreeFlags&=-33554433,null}t=Ye.current,Ul(e)?Xs(e):(t=D0(n,l,a),e.stateNode=t,pa(e))}return Tt(e),e.subtreeFlags&=-33554433,null;case 5:if(si(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&pa(e);else{if(!l){if(e.stateNode===null)throw Error(s(166));return Tt(e),e.subtreeFlags&=-33554433,null}if(i=Ye.current,Ul(e))Xs(e);else{var u=In(va.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[Zt]=e,i[ie]=l;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(It(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&pa(e)}}return Tt(e),e.subtreeFlags&=-33554433,mr(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&pa(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(s(166));if(t=va.current,Ul(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,n=Yt,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[Zt]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||d0(t.nodeValue,a)),t||Ea(e,!0)}else t=In(t).createTextNode(l),t[Zt]=e,e.stateNode=t}return Tt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=Ul(e),a!==null){if(t===null){if(!l)throw Error(s(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Zt]=e}else ll(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Tt(e),t=!1}else a=Tu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(xe(e),e):(xe(e),null);if((e.flags&128)!==0)throw Error(s(558))}return Tt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Ul(e),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(s(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[Zt]=e}else ll(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Tt(e),n=!1}else n=Tu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(xe(e),e):(xe(e),null)}return xe(e),(e.flags&128)!==0?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),ic(e,e.updateQueue),Tt(e),null);case 4:return Nl(),t===null&&Jr(e.stateNode.containerInfo),e.flags|=67108864,Tt(e),null;case 10:return fa(e.type),Tt(e),null;case 19:if(ku(e),l=e.memoizedState,l===null)return Tt(e),null;if(n=(e.flags&128)!==0,i=l.rendering,i===null)if(n)Gn(l,!1);else{if(Mt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=Xi(t),i!==null){for(e.flags|=128,Gn(l,!1),t=i.updateQueue,e.updateQueue=t,ic(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)ks(a,t),a=a.sibling;return Rn(e,$t.current&1|2),et&&oa(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&de()>xc&&(e.flags|=128,n=!0,Gn(l,!1),e.lanes=4194304)}else{if(!n)if(t=Xi(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,ic(e,t),Gn(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!i.alternate&&!et)return Tt(e),null}else 2*de()-l.renderingStartTime>xc&&a!==536870912&&(e.flags|=128,n=!0,Gn(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}if(l.tail!==null){t=l.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return l.rendering=t,l.tail=t.sibling,l.renderingStartTime=de(),t.sibling=null,i=$t.current,i=n?i&1|2:i&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!a||et?Rn(e,i):(a=i,jt(Jt,e),jt($t,a),te===null&&(te=e)),et&&oa(e,l.treeForkCount),t}return Tt(e),null;case 22:case 23:return xe(e),Uu(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(Tt(e),e.subtreeFlags&6&&(e.flags|=8192)):Tt(e),a=e.updateQueue,a!==null&&ic(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&Lt(rl),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),fa(Dt),Tt(e),null;case 25:return null;case 30:return e.flags|=33554432,Tt(e),null}throw Error(s(156,e.tag))}function qp(t,e){switch(ju(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fa(Dt),Nl(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return si(e),null;case 31:if(e.memoizedState!==null){if(xe(e),e.alternate===null)throw Error(s(340));ll()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(xe(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));ll()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ku(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return Nl(),null;case 10:return fa(e.type),null;case 22:case 23:return xe(e),Uu(),t!==null&&Lt(rl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return fa(Dt),null;case 25:return null;default:return null}}function md(t,e){switch(ju(e),e.tag){case 3:fa(Dt),Nl();break;case 26:case 27:case 5:si(e);break;case 4:Nl();break;case 31:e.memoizedState!==null&&xe(e);break;case 13:xe(e);break;case 19:ku(e);break;case 10:fa(e.type);break;case 22:case 23:xe(e),Uu(),t!==null&&Lt(rl);break;case 24:fa(Dt)}}function Vn(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(r){bt(e,e.return,r)}}function Ha(t,e,a){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var u=l.inst,r=u.destroy;if(r!==void 0){u.destroy=void 0,n=e;var o=a,p=r;try{p()}catch(b){bt(n,o,b)}}}l=l.next}while(l!==i)}}catch(b){bt(e,e.return,b)}}function pd(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{lf(e,a)}catch(l){bt(t,t.return,l)}}}function gd(t,e,a){a.props=hl(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){bt(t,e,l)}}function Ze(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:var n=t.stateNode,i=ca(t.memoizedProps,n);(n.ref===null||n.ref.name!==i)&&(n.ref=j0(i)),l=n.ref;break;case 7:if(t.stateNode===null){var u=new Se(t);N(t.child,!1,_1,u,void 0,void 0),t.stateNode=u}l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(r){bt(t,e,r)}}function Wt(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){bt(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){bt(t,e,n)}else a.current=null}function cc(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var a=0;a<e.length;a++)A0(t.stateNode,e[a])}function xd(t){for(var e=t.return;e!==null&&(gr(e)&&A0(t.stateNode,e.stateNode),!pr(e));)e=e.return}function Yn(t){for(var e=t.return;e!==null&&(gr(e)&&M1(t.stateNode,e.stateNode),!pr(e));)e=e.return}function pr(t){return t.tag===5||t.tag===3||t.tag===27}function gr(t){return t&&t.tag===7&&t.stateNode!==null}function xr(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){bt(t,t.return,n)}}function br(t,e,a){try{var l=t.stateNode;d1(l,t.type,a,e),l[ie]=e}catch(n){bt(t,t.return,n)}}function bd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Va(t.type)||t.tag===4}function vr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||bd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Va(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yr(t,e,a,l){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(n),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Xe)),cc(t,l),dt=!0;else if(n!==4&&(n===27&&(cc(t,l),l=null,Va(t.type)&&(a=t.stateNode,e=null)),t=t.child,t!==null))for(yr(t,e,a,l),t=t.sibling;t!==null;)yr(t,e,a,l),t=t.sibling}function uc(t,e,a,l){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?a.insertBefore(n,e):a.appendChild(n),cc(t,l),dt=!0;else if(n!==4&&(n===27&&(cc(t,l),l=null,Va(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(uc(t,e,a,l),t=t.sibling;t!==null;)uc(t,e,a,l),t=t.sibling}function vd(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);It(e,l,a),e[Zt]=t,e[ie]=a}catch(i){bt(t,t.return,i)}}var rc=!1,be=null;function yd(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(rc=!0)}var Ke=null;function Nd(){var t=Ke;return Ke=null,t}var ue=0;function Ql(t,e,a,l,n){return ue=0,Sd(t.child,e,a,l,n)}function Sd(t,e,a,l,n){for(var i=!1;t!==null;){if(t.tag===5){var u=t.stateNode;if(l!==null){var r=lo(u);l.push(r),r.view&&(i=!0)}else i||lo(u).view&&(i=!0);rc=!0,N0(u,ue===0?e:e+"_"+ue,a),ue++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Sd(t.child,e,a,l,n)&&(i=!0));t=t.sibling}return i}function Je(t,e){for(;t!==null;)t.tag===5?S0(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Je(t.child,e)),t=t.sibling}function oc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(oc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(s(544));var a=e.name;e=ua(e.default,e.share),e!=="none"&&(Ql(t,a,e,null,!1)||Je(t.child,!1))}t=t.sibling}}function Nr(t,e){if(t.tag===30){var a=t.stateNode,l=t.memoizedProps,n=ca(l,a),i=ua(l.default,a.paired?l.share:l.enter);i!=="none"?Ql(t,n,i,null,!1)?(oc(t),a.paired||e||Pl(t,l.onEnter)):Je(t.child,!1):oc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Nr(t,e),t=t.sibling;else oc(t)}function Sr(t){if(be!==null&&be.size!==0){var e=be;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,l=a.name;if(l!=null&&l!=="auto"){var n=e.get(l);if(n!==void 0){var i=ua(a.default,a.share);if(i!=="none"&&(Ql(t,l,i,null,!1)?(i=t.stateNode,n.paired=i,i.paired=n,Pl(t,a.onShare)):Je(t.child,!1)),e.delete(l),e.size===0)break}}}Sr(t)}t=t.sibling}}}function jr(t){if(t.tag===30){var e=t.memoizedProps,a=ca(e,t.stateNode),l=be!==null?be.get(a):void 0,n=ua(e.default,l!==void 0?e.share:e.exit);n!=="none"&&(Ql(t,a,n,null,!1)?l!==void 0?(n=t.stateNode,l.paired=n,n.paired=l,be.delete(a),Pl(t,e.onShare)):Pl(t,e.onExit):Je(t.child,!1)),be!==null&&Sr(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)jr(t),t=t.sibling;else be!==null&&Sr(t)}function jd(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,a=ca(e,t.stateNode);e=ua(e.default,e.update),t.flags&=-5,e!=="none"&&Ql(t,a,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&jd(t);t=t.sibling}}function zr(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,Je(t.child,!1))}zr(t)}t=t.sibling}}function sc(t){if(t.tag===30)t.stateNode.paired=null,Je(t.child,!1),zr(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)sc(t),t=t.sibling;else zr(t)}function zd(t){for(t=t.child;t!==null;)t.tag===30?Je(t.child,!1):(t.subtreeFlags&33554432)!==0&&zd(t),t=t.sibling}function Tr(t,e,a,l,n,i,u){for(var r=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(i!==null&&ue<i.length){var p=i[ue],b=lo(o);(p.view||b.view)&&(r=!0);var z;if(z=(t.flags&4)===0)if(b.clip)z=!0;else{z=p.rect;var h=b.rect;z=z.y!==h.y||z.x!==h.x||z.height!==h.height||z.width!==h.width}z&&(t.flags|=4),b.abs?b=!p.abs:(p=p.rect,b=b.rect,b=p.height!==b.height||p.width!==b.width),b&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&N0(o,ue===0?a:a+"_"+ue,n),r&&(t.flags&4)!==0||(Ke===null&&(Ke=[]),Ke.push(o,ue===0?l:l+"_"+ue,e.memoizedProps)),ue++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&u?t.flags|=e.flags&32:Tr(t,e.child,a,l,n,i,u)&&(r=!0));e=e.sibling}return r}function Td(t,e){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,l=t.stateNode,n=ca(a,l),i=ua(a.default,a.update),u;u=t.memoizedState,t.memoizedState=null,l=t;var r=t.child;ue=0,n=Tr(l,r,n,n,i,u,!1),(t.flags&4)!==0&&n&&Pl(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Td(t);t=t.sibling}}var Xt=!1,gt=!1,$e=!1,Er=!1,Ed=typeof WeakSet=="function"?WeakSet:Set,Qt=null,We=!1,Xn=!1,fc=!1,wr=!1;function Gp(t,e,a){if(t=t.containerInfo,Ir=sn,t=As(t),hu(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var i=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var r=0,o=-1,p=-1,b=0,z=0,h=t,x=null;e:for(;;){for(var A;h!==l||i!==0&&h.nodeType!==3||(o=r+i),h!==u||n!==0&&h.nodeType!==3||(p=r+n),h.nodeType===3&&(r+=h.nodeValue.length),(A=h.firstChild)!==null;)x=h,h=A;for(;;){if(h===t)break e;if(x===l&&++b===i&&(o=r),x===u&&++z===n&&(p=r),(A=h.nextSibling)!==null)break;h=x,x=h.parentNode}h=A}l=o===-1||p===-1?null:{start:o,end:p}}else l=null}l=l||{start:0,end:0}}else l=null;for(Pr={focusedElem:t,selectionRange:l},sn=!1,a=(a&335544064)===a,Qt=e,e=a?9270:1024;Qt!==null;){if(t=Qt,a&&(l=t.deletions,l!==null))for(i=0;i<l.length;i++)a&&jr(l[i]);if(t.alternate===null&&(t.flags&2)!==0)a&&yd(t),dc(a);else{if(t.tag===22){if(l=t.alternate,t.memoizedState!==null){l!==null&&l.memoizedState===null&&a&&jr(l),dc(a);continue}else if(l!==null&&l.memoizedState!==null){a&&yd(t),dc(a);continue}}l=t.child,(t.subtreeFlags&e)!==0&&l!==null?(l.return=t,Qt=l):(a&&jd(t),dc(a))}}be=null}function dc(t){for(;Qt!==null;){var e=Qt,a=t,l=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((n&1024)!==0&&l!==null){a=void 0,n=l.memoizedProps,l=l.memoizedState;var i=e.stateNode;try{var u=hl(e.type,n);a=i.getSnapshotBeforeUpdate(u,l),i.__reactInternalSnapshotBeforeUpdate=a}catch(r){bt(e,e.return,r)}}break;case 3:if((n&1024)!==0){if(l=e.stateNode.containerInfo,a=l.nodeType,a===9)co(l);else if(a===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":co(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&l!==null&&(a=ca(l.memoizedProps,l.stateNode),n=e.memoizedProps,n=ua(n.default,n.update),n!=="none"&&Ql(l,a,n,l.memoizedState=[],!0));break;default:if((n&1024)!==0)throw Error(s(163))}if(l=e.sibling,l!==null){l.return=e.return,Qt=l;break}Qt=e.return}}function wd(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ie(t,a),l&4&&Vn(5,a);break;case 1:if(Ie(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(u){bt(a,a.return,u)}else{var n=hl(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){bt(a,a.return,u)}}l&64&&pd(a),l&512&&Ze(a,a.return);break;case 3:if(Ie(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{lf(t,e)}catch(u){bt(a,a.return,u)}}break;case 27:e===null&&l&4&&vd(a);case 26:case 5:Ie(t,a),e===null&&l&4&&xr(a),l&512&&Ze(a,a.return);break;case 12:Ie(t,a);break;case 31:Ie(t,a),l&4&&Md(t,a);break;case 13:Ie(t,a),l&4&&Od(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Pp.bind(null,a),F1(t,a))));break;case 22:if(l=a.memoizedState!==null||Xt,!l){var i=e!==null&&e.memoizedState!==null||gt;e=Xt,n=gt,Xt=l,(gt=i)&&!n?(l=2,(a.subtreeFlags&8772)!==0&&(l|=1),Be(t,a,l)):Ie(t,a),Xt=e,gt=n}break;case 30:Ie(t,a),l&512&&Ze(a,a.return);break;case 7:l&512&&Ze(a,a.return);default:Ie(t,a)}}function Cr(t,e){for(t=t.child;t!==null;)Cd(t,e),t=t.sibling}function Cd(t,e){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(e){var l=a.style;typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"}else{var n=t.stateNode,i=t.memoizedProps.style,u=i!=null&&i.hasOwnProperty("display")?i.display:null;n.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(o){bt(t,t.return,o)}Ar(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,dt=!0}catch(o){bt(t,t.return,o)}break;case 18:try{var r=t.stateNode;e?y0(r,!0):y0(t.stateNode,!1)}catch(o){bt(t,t.return,o)}break;case 22:case 23:t.memoizedState===null&&Cr(t,e);break;default:Cr(t,e)}}function Ar(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,l=e;switch(a.tag){case 4:Cd(a,l);break t;case 22:a.memoizedState===null&&Ar(a,l);break t;default:Ar(a,l)}}t=t.sibling}}function Ad(t){var e=t.alternate;e!==null&&(t.alternate=null,Ad(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&xi(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Et=null,re=!1;function Re(t,e,a){for(a=a.child;a!==null;)_d(t,e,a),a=a.sibling}function _d(t,e,a){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(hn,a)}catch{}switch(a.tag){case 26:gt||Wt(a,e),Re(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!gt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gt||Wt(a,e),Yn(a);var l=Et,n=re;Va(a.type)&&(Et=a.stateNode,re=!1),Re(t,e,a),F0(a.stateNode,a.type,a.memoizedProps),Et=l,re=n;break;case 5:gt||Wt(a,e),Yn(a);case 6:if(a.tag===6&&Yn(a),l=Et,n=re,Et=null,Re(t,e,a),Et=l,re=n,Et!==null)if(re)try{(Et.nodeType===9?Et.body:Et.nodeName==="HTML"?Et.ownerDocument.body:Et).removeChild(a.stateNode),dt=!0}catch(i){bt(a,e,i)}else try{Et.removeChild(a.stateNode),dt=!0}catch(i){bt(a,e,i)}break;case 18:Et!==null&&(re?(t=Et,v0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),fn(t)):v0(Et,a.stateNode));break;case 4:l=Et,n=re,Et=a.stateNode.containerInfo,re=!0,Re(t,e,a),Et=l,re=n;break;case 0:case 11:case 14:case 15:Ha(2,a,e),gt||Ha(4,a,e),Re(t,e,a);break;case 1:gt||(Wt(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&gd(a,e,l)),Re(t,e,a);break;case 21:Re(t,e,a);break;case 22:gt=(l=gt)||a.memoizedState!==null,Re(t,e,a),gt=l;break;case 30:Wt(a,e),Re(t,e,a);break;case 7:gt||Wt(a,e),Re(t,e,a);break;default:Re(t,e,a)}}function Md(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{fn(t)}catch(a){bt(e,e.return,a)}}}function Od(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fn(t)}catch(a){bt(e,e.return,a)}}function Vp(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Ed),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Ed),e;default:throw Error(s(435,t.tag))}}function hc(t,e){var a=Vp(t);e.forEach(function(l){if(!a.has(l)){a.add(l);var n=t1.bind(null,t,l);l.then(n,n)}})}function le(t,e,a){var l=e.deletions;if(l!==null)for(var n=0;n<l.length;n++){var i=l[n],u=t,r=e,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Va(o.type)){Et=o.stateNode,re=!1;break t}break;case 5:Et=o.stateNode,re=!1;break t;case 3:case 4:Et=o.stateNode.containerInfo,re=!0;break t}o=o.return}if(Et===null)throw Error(s(160));_d(u,r,i),Et=null,re=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Dd(e,t,a),e=e.sibling}var Ue=null;function Dd(t,e,a){var l=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(n&4&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(var i=0;i<l.length;i++){var u=l[i];u.ref.impl=u.nextImpl}le(e,t,a),ne(t),n&4&&(Ha(3,t,t.return),Vn(3,t),Ha(5,t,t.return));break;case 1:le(e,t,a),ne(t),n&512&&(gt||l===null||Wt(l,l.return)),n&64&&Xt&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:if(i=Ue,le(e,t,a),ne(t),n&512&&(gt||l===null||Wt(l,l.return)),n&4)if(n=l!==null?l.memoizedState:null,a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null)if(Xt)t.stateNode=g0(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,a=t.memoizedProps,n=i.ownerDocument||i;e:switch(e){case"title":l=n.getElementsByTagName("title")[0],(!l||l[gn]||l[Zt]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(e),n.head.insertBefore(l,n.querySelector("head > title"))),It(l,e,a),l[Zt]=t,Vt(l),e=l;break t;case"link":if(i=q0("link","href",n).get(e+(a.href||""))){for(u=0;u<i.length;u++)if(l=i[u],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(u,1);break e}}l=n.createElement(e),It(l,e,a),n.head.appendChild(l);break;case"meta":if(i=q0("meta","content",n).get(e+(a.content||""))){for(u=0;u<i.length;u++)if(l=i[u],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(u,1);break e}}l=n.createElement(e),It(l,e,a),n.head.appendChild(l);break;default:throw Error(s(468,e))}l[Zt]=t,Vt(l),e=l}t.stateNode=e}else Xt||mo(i,t.type,t.stateNode);else t.stateNode=k0(i,a,t.memoizedProps);else n!==a?(n===null?(e=l.stateNode,e===null||gt||e.parentNode.removeChild(e)):n.count--,a===null?Xt||mo(i,t.type,t.stateNode):k0(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&br(t,t.memoizedProps,l.memoizedProps);break;case 27:le(e,t,a),ne(t),n&512&&(gt||l===null||Wt(l,l.return)),l!==null&&n&4&&br(t,t.memoizedProps,l.memoizedProps);break;case 5:if(i=$e,$e=!1,le(e,t,a),$e=i,ne(t),n&512&&(gt||l===null||Wt(l,l.return)),t.flags&32){e=t.stateNode;try{wl(e,""),dt=!0}catch(b){bt(t,t.return,b)}}n&4&&t.stateNode!=null&&(e=t.memoizedProps,br(t,e,l!==null?l.memoizedProps:e)),n&1024&&(Er=!0);break;case 6:if(le(e,t,a),ne(t),n&4){if(t.stateNode===null)throw Error(s(162));e=t.memoizedProps,a=t.stateNode;try{a.nodeValue=e,dt=!0}catch(b){bt(t,t.return,b)}}break;case 3:if(dt=!1,Cc=null,i=Ue,Ue=Pn(e.containerInfo),le(e,t,a),Ue=i,ne(t),n&4&&l!==null&&l.memoizedState.isDehydrated)try{fn(e.containerInfo)}catch(b){bt(t,t.return,b)}Er&&(Er=!1,Fd(t)),dt=!1;break;case 4:n=$e,$e=Xt,l=Po(),i=Ue,Ue=Pn(t.stateNode.containerInfo),le(e,t,a),ne(t),Ue=i,dt&&Xn&&(fc=!0),dt=l,$e=n;break;case 12:le(e,t,a),ne(t);break;case 31:le(e,t,a),ne(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,hc(t,e)));break;case 13:le(e,t,a),ne(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(gc=de()),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,hc(t,e)));break;case 22:i=t.memoizedState!==null,u=l!==null&&l.memoizedState!==null;var r=Xt,o=gt,p=$e;Xt=r||i,$e=p||i,gt=o||u,le(e,t,a),gt=o,$e=p,Xt=r,ne(t),n&8192&&(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,!i||l===null||u||Xt||gt||(e=u||gt,a=Xt,l=gt,Xt=i||Xt,gt=e,Ra(t,2),Xt=a,gt=l),!i&&$e||Cr(t,i)),n&4&&(e=t.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,hc(t,a))));break;case 19:le(e,t,a),ne(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,hc(t,e)));break;case 30:n&512&&(gt||l===null||Wt(l,l.return)),n=Po(),i=Xn,u=(a&335544064)===a,r=t.memoizedProps,Xn=u&&ua(r.default,r.update)!=="none",le(e,t,a),ne(t),u&&l!==null&&dt&&(t.flags|=4),Xn=i,dt=n;break;case 21:break;case 7:n&512&&(gt||l===null||Wt(l,l.return)),l&&l.stateNode!==null&&(l.stateNode._fragmentFiber=t);default:le(e,t,a),ne(t)}}function ne(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(bd(l)){a=l;break}l=l.return}l=null;for(var n=t.return;n!==null;){if(gr(n)){var i=n.stateNode;l===null?l=[i]:l.push(i)}if(pr(n))break;n=n.return}var u=l;if(a==null)throw Error(s(160));switch(a.tag){case 27:var r=a.stateNode,o=vr(t);uc(t,o,r,u);break;case 5:var p=a.stateNode;a.flags&32&&(wl(p,""),a.flags&=-33);var b=vr(t);uc(t,b,p,u);break;case 3:case 4:var z=a.stateNode.containerInfo,h=vr(t);yr(t,h,z,u);break;default:throw Error(s(161))}}catch(x){bt(t,t.return,x)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Fd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Fd(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,sn=!0,e.reset(),sn=!1),t=t.sibling}}function Ll(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)Hd(e,t),e=e.sibling;else Td(e)}function Hd(t,e){var a=t.alternate;if(a===null)Nr(t,!1);else switch(t.tag){case 3:if(wr=We=!1,Nd(),Ll(e,t),!We&&!fc){if(t=Ke,t!==null)for(var l=0;l<t.length;l+=3){a=t[l];var n=t[l+1];S0(a,t[l+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+n+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),wr=!0}Ke=null;break;case 5:Ll(e,t);break;case 4:l=We,We=!1,Ll(e,t),We&&(fc=!0),We=l;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Nr(t,!1):Ll(e,t));break;case 30:l=We,n=Nd(),We=!1,Ll(e,t),We&&(t.flags|=4);var i=t.memoizedProps,u=t.stateNode;e=ca(i,u),u=ca(a.memoizedProps,u);var r=ua(i.default,i.update);r==="none"?e=!1:(i=a.memoizedState,a.memoizedState=null,a=t.child,ue=0,e=Tr(t,a,e,u,r,i,!0),ue!==(i===null?0:i.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(Pl(t,t.memoizedProps.onUpdate),Ke=n):n!==null&&(n.push.apply(n,Ke),Ke=n),We=(t.flags&32)!==0?!0:l;break;default:Ll(e,t)}}function Ie(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)wd(t,e.alternate,e),e=e.sibling}function Ra(t,e){for(t=t.child;t!==null;){var a=t,l=e;switch(a.tag){case 0:case 11:case 14:case 15:Ha(4,a,a.return),Ra(a,l);break;case 1:Wt(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&gd(a,a.return,n),Ra(a,l);break;case 27:(l&2)!==0&&F0(a.stateNode,a.type,a.memoizedProps);case 5:Wt(a,a.return),a.tag!==5&&a.tag!==27||Yn(a),Ra(a,l);break;case 6:Yn(a);break;case 26:Wt(a,a.return),n=a.stateNode,a.memoizedState!==null||n===null||gt||n.parentNode.removeChild(n),Ra(a,l);break;case 22:a.memoizedState===null&&Ra(a,l);break;case 30:Wt(a,a.return),Ra(a,l);break;case 7:Wt(a,a.return);default:Ra(a,l)}t=t.sibling}}function Be(t,e,a){for(a=(e.subtreeFlags&8772)!==0?a:a&-2,e=e.child;e!==null;){var l=e.alternate,n=t,i=e,u=i.flags,r=(a&1)!==0;switch(i.tag){case 0:case 11:case 15:Be(n,i,a),Vn(4,i);break;case 1:if(Be(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(b){bt(l,l.return,b)}if(l=i,n=l.updateQueue,n!==null){var o=l.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)af(p[n],o)}catch(b){bt(l,l.return,b)}}r&&u&64&&pd(i),Ze(i,i.return);break;case 27:(a&2)!==0&&vd(i);case 5:i.tag!==5&&i.tag!==27||xd(i),Be(n,i,a),r&&l===null&&u&4&&xr(i),Ze(i,i.return);break;case 6:xd(i);break;case 26:o=i.stateNode,i.memoizedState!==null||o===null||Xt||mo(Pn(o.ownerDocument),i.type,o),Be(n,i,a),r&&l===null&&u&4&&xr(i),Ze(i,i.return);break;case 12:Be(n,i,a);break;case 31:Be(n,i,a),r&&u&4&&Md(n,i);break;case 13:Be(n,i,a),r&&u&4&&Od(n,i);break;case 22:i.memoizedState===null&&Be(n,i,a),Ze(i,i.return);break;case 30:Be(n,i,a),Ze(i,i.return);break;case 7:Ze(i,i.return);default:Be(n,i,a)}e=e.sibling}}function _r(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&An(a))}function Mr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&An(t))}function Me(t,e,a,l){var n=(a&335544064)===a;if(e.subtreeFlags&(n?10262:10256))for(e=e.child;e!==null;)Rd(t,e,a,l),e=e.sibling;else n&&zd(e)}function Rd(t,e,a,l){var n=(a&335544064)===a;n&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&sc(e);var i=e.flags;switch(e.tag){case 0:case 11:case 15:Me(t,e,a,l),i&2048&&Vn(9,e);break;case 1:Me(t,e,a,l);break;case 3:Me(t,e,a,l),n&&wr&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),i&2048&&(i=null,e.alternate!==null&&(i=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==i&&(e.refCount++,i!=null&&An(i)));break;case 12:if(i&2048){Me(t,e,a,l),i=e.stateNode;try{var u=e.memoizedProps,r=u.id,o=u.onPostCommit;typeof o=="function"&&o(r,e.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(p){bt(e,e.return,p)}}else Me(t,e,a,l);break;case 31:Me(t,e,a,l);break;case 13:Me(t,e,a,l);break;case 23:break;case 22:u=e.stateNode,r=e.alternate,e.memoizedState!==null?(n&&r!==null&&r.memoizedState===null&&sc(r),u._visibility&2?Me(t,e,a,l):Qn(t,e)):(n&&r!==null&&r.memoizedState!==null&&sc(e),u._visibility&2?Me(t,e,a,l):(u._visibility|=2,Zl(t,e,a,l,(e.subtreeFlags&10256)!==0||!1))),i&2048&&_r(r,e);break;case 24:Me(t,e,a,l),i&2048&&Mr(e.alternate,e);break;case 30:n&&(i=e.alternate,i!==null&&(Je(i.child,!0),Je(e.child,!0))),Me(t,e,a,l);break;default:Me(t,e,a,l)}}function Zl(t,e,a,l,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,r=a,o=l,p=u.flags;switch(u.tag){case 0:case 11:case 15:Zl(i,u,r,o,n),Vn(8,u);break;case 23:break;case 22:var b=u.stateNode;u.memoizedState!==null?b._visibility&2?Zl(i,u,r,o,n):Qn(i,u):(b._visibility|=2,Zl(i,u,r,o,n)),n&&p&2048&&_r(u.alternate,u);break;case 24:Zl(i,u,r,o,n),n&&p&2048&&Mr(u.alternate,u);break;default:Zl(i,u,r,o,n)}e=e.sibling}}function Qn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,n=l.flags;switch(l.tag){case 22:Qn(a,l),n&2048&&_r(l.alternate,l);break;case 24:Qn(a,l),n&2048&&Mr(l.alternate,l);break;default:Qn(a,l)}e=e.sibling}}var ml=8192;function pl(t,e,a){if(t.subtreeFlags&ml)for(t=t.child;t!==null;)Ud(t,e,a),t=t.sibling}function Ud(t,e,a){switch(t.tag){case 26:pl(t,e,a),t.flags&ml&&(t.memoizedState!==null?K1(a,Ue,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&X0(a,t)));break;case 5:pl(t,e,a),t.flags&ml&&(t=t.stateNode,(e&335544128)===e&&X0(a,t));break;case 3:case 4:var l=Ue;Ue=Pn(t.stateNode.containerInfo),pl(t,e,a),Ue=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=ml,ml=16777216,pl(t,e,a),ml=l):pl(t,e,a));break;case 30:if((t.flags&ml)!==0&&(l=t.memoizedProps.name,l!=null&&l!=="auto")){var n=t.stateNode;n.paired=null,be===null&&(be=new Map),be.set(l,n)}pl(t,e,a);break;default:pl(t,e,a)}}function Bd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ln(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Qt=l,qd(l,t)}Bd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kd(t),t=t.sibling}function kd(t){switch(t.tag){case 0:case 11:case 15:Ln(t),t.flags&2048&&Ha(9,t,t.return);break;case 3:Ln(t);break;case 12:Ln(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,mc(t)):Ln(t);break;default:Ln(t)}}function mc(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Qt=l,qd(l,t)}Bd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ha(8,e,e.return),mc(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,mc(e));break;default:mc(e)}t=t.sibling}}function qd(t,e){for(;Qt!==null;){var a=Qt;switch(a.tag){case 0:case 11:case 15:Ha(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:An(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Qt=l;else t:for(a=t;Qt!==null;){l=Qt;var n=l.sibling,i=l.return;if(Ad(l),l===a){Qt=null;break t}if(n!==null){n.return=i,Qt=n;break t}Qt=i}}}var Yp={getCacheForType:function(t){var e=Kt(Dt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Kt(Dt).controller.signal}},Xp=typeof WeakMap=="function"?WeakMap:Map,mt=0,St=null,at=null,nt=0,xt=0,ve=null,Ua=!1,Kl=!1,Or=!1,ga=0,Mt=0,Ba=0,gl=0,pc=0,ye=0,Jl=0,Zn=null,oe=null,Dr=!1,gc=0,Gd=0,xc=1/0,bc=null,ka=null,Ct=0,ke=null,xl=null,Pe=0,Fr=0,Hr=null,Vd=null,$l=null,Wl=null,Il=null,Kn=0,vc=null;function Ne(){return(mt&2)!==0&&nt!==0?nt&-nt:H.T!==null?Qr():Xo()}function Yd(){if(ye===0)if((nt&536870912)===0||et){var t=hi;hi<<=1,(hi&3932160)===0&&(hi=262144),ye=t}else ye=536870912;return t=Jt.current,t!==null&&(t.flags|=32),ye}function Pl(t,e){if(e!=null){var a=t.stateNode,l=a.ref;l===null&&(l=a.ref=j0(ca(t.memoizedProps,a))),Wl===null&&(Wl=[]),Wl.push(e.bind(null,l))}}function se(t,e,a){(t===St&&(xt===2||xt===9)||t.cancelPendingCommit!==null)&&(tn(t,0),qa(t,nt,ye,!1)),pn(t,a),((mt&2)===0||t!==St)&&(t===St&&((mt&2)===0&&(gl|=a),Mt===4&&qa(t,nt,ye,!1)),ta(t))}function Xd(t,e,a){if((mt&6)!==0)throw Error(s(327));var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||mn(t,e),n=l?Zp(t,e):Ur(t,e,!0),i=l;do{if(n===0){Kl&&!l&&qa(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!Qp(a)){n=Ur(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var r=t;n=Zn;var o=r.current.memoizedState.isDehydrated;if(o&&(tn(r,u).flags|=256),u=Ur(r,u,!1),u!==2&&u!==6){if(Or&&!o){r.errorRecoveryDisabledLanes|=i,gl|=i,n=4;break t}i=oe,oe=n,i!==null&&(oe===null?oe=i:oe.push.apply(oe,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){tn(t,0),qa(t,e,0,!0);break}t:{switch(l=t,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:qa(l,e,ye,!Ua);break t;case 2:oe=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(n=gc+300-de(),10<n)){if(qa(l,e,ye,!Ua),pi(l,0,!0)!==0)break t;Pe=e,l.timeoutHandle=ao(Qd.bind(null,l,a,oe,bc,Dr,e,ye,gl,Jl,Ua,i,"Throttled",-0,0),n);break t}Qd(l,a,oe,bc,Dr,e,ye,gl,Jl,Ua,i,null,-0,0)}}break}while(!0);ta(t)}function Qd(t,e,a,l,n,i,u,r,o,p,b,z,h,x){t.timeoutHandle=-1;var A=e.subtreeFlags,F=(i&335544064)===i;if(z=null,(F||A&8192||(A&16785408)===16785408)&&(z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xe},be=null,Ud(e,i,z),F&&(A=z,F=t.containerInfo,F=(F.nodeType===9?F:F.ownerDocument).__reactViewTransition,F!=null&&(A.count++,A.waitingForViewTransition=!0,A=ai.bind(A),F.finished.then(A,A))),A=(i&62914560)===i?gc-de():(i&4194048)===i?Gd-de():0,A=J1(z,A),A!==null)){Pe=i,t.cancelPendingCommit=A(Pd.bind(null,t,e,i,a,l,n,u,r,o,p,b,z,null,h,x)),qa(t,i,u,!p);return}Pd(t,e,i,a,l,n,u,r,o,p,b,z)}function Qp(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ge(i(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qa(t,e,a,l){e=ko(t,e),e&=~pc,e&=~gl,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var n=e;0<n;){var i=31-me(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Go(t,a,e)}function yc(){return(mt&6)===0?(Jn(0),!1):!0}function Rr(){if(at!==null){if(xt===0)var t=at.return;else t=at,sa=nl=null,Xu(t),ql=null,On=0,t=at;for(;t!==null;)md(t.alternate,t),t=t.return;at=null}}function tn(t,e){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,p1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Pe=0,Rr(),St=t,at=a=ra(t.current,null),nt=e,xt=0,ve=null,Ua=!1,Kl=mn(t,e),Or=!1,Jl=ye=pc=gl=Ba=Mt=0,oe=Zn=null,Dr=!1,ga=ko(t,e),Ci(),a}function Ld(t,e){W=null,H.H=Pi,e===kl||e===ki?(e=Is(),xt=3):e===Mu?(e=Is(),xt=4):xt=e===ir?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ve=e,at===null&&(Mt=1,tc(t,we(e,t.current)))}function Zd(){var t=Jt.current;return t===null?!0:(nt&4194048)===nt?te===null:(nt&62914560)===nt||(nt&536870912)!==0?t===te:!1}function Kd(){var t=H.H;return H.H=Pi,t===null?Pi:t}function Jd(){var t=H.A;return H.A=Yp,t}function Nc(){Mt=4,Ua||(nt&4194048)!==nt&&Jt.current!==null||(Kl=!0),(Ba&134217727)===0&&(gl&134217727)===0||St===null||qa(St,nt,ye,!1)}function Ur(t,e,a){var l=mt;mt|=2;var n=Kd(),i=Jd();(St!==t||nt!==e)&&(bc=null,tn(t,e)),e=!1;var u=Mt;t:do try{if(xt!==0&&at!==null){var r=at,o=ve;switch(xt){case 8:Rr(),u=6;break t;case 3:case 2:case 9:case 6:Jt.current===null&&(e=!0);var p=xt;if(xt=0,ve=null,en(t,r,o,p),a&&Kl){u=0;break t}break;default:p=xt,xt=0,ve=null,en(t,r,o,p)}}Lp(),u=Mt;break}catch(b){Ld(t,b)}while(!0);return e&&t.shellSuspendCounter++,sa=nl=null,mt=l,H.H=n,H.A=i,at===null&&(St=null,nt=0,Ci()),u}function Lp(){for(;at!==null;)$d(at)}function Zp(t,e){var a=mt;mt|=2;var l=Kd(),n=Jd();St!==t||nt!==e?(bc=null,xc=de()+500,tn(t,e)):Kl=mn(t,e);t:do try{if(xt!==0&&at!==null){e=at;var i=ve;e:switch(xt){case 1:xt=0,ve=null,en(t,e,i,1);break;case 2:case 9:if($s(i)){xt=0,ve=null,Wd(e);break}e=function(){xt!==2&&xt!==9||St!==t||(xt=7),ta(t)},i.then(e,e);break t;case 3:xt=7;break t;case 4:xt=5;break t;case 7:$s(i)?(xt=0,ve=null,Wd(e)):(xt=0,ve=null,en(t,e,i,7));break;case 5:var u=null;switch(at.tag){case 26:u=at.memoizedState;case 5:case 27:var r=at;if(u?V0(u):r.stateNode.complete){xt=0,ve=null;var o=r.sibling;if(o!==null)at=o;else{var p=r.return;p!==null?(at=p,Sc(p)):at=null}break e}}xt=0,ve=null,en(t,e,i,5);break;case 6:xt=0,ve=null,en(t,e,i,6);break;case 8:Rr(),Mt=6;break t;default:throw Error(s(462))}}Kp();break}catch(b){Ld(t,b)}while(!0);return sa=nl=null,H.H=l,H.A=n,mt=a,at!==null?0:(St=null,nt=0,Ci(),Mt)}function Kp(){for(;at!==null&&!fm();)$d(at)}function $d(t){var e=dd(t.alternate,t,ga);t.memoizedProps=t.pendingProps,e===null?Sc(t):at=e}function Wd(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=id(a,e,e.pendingProps,e.type,void 0,nt);break;case 11:e=id(a,e,e.pendingProps,e.type.render,e.ref,nt);break;case 5:Xu(e);var l=e;l===Yt&&(et?(Fi(l),l.tag===5&&l.stateNode!=null&&(zt=l.stateNode)):(Fi(l),et=!0));default:md(a,e),e=at=ks(e,ga),e=dd(a,e,ga)}t.memoizedProps=t.pendingProps,e===null?Sc(t):at=e}function en(t,e,a,l){sa=nl=null,Xu(e),ql=null,On=0;var n=e.return;try{if(Hp(t,n,e,a,nt)){Mt=1,tc(t,we(a,t.current)),at=null;return}}catch(i){if(n!==null)throw at=n,i;Mt=1,tc(t,we(a,t.current)),at=null;return}e.flags&32768?(et||l===1?t=!0:Kl||(nt&536870912)!==0?t=!1:(Ua=t=!0,(l===2||l===9||l===3||l===6)&&(l=Jt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Id(e,t)):Sc(e)}function Sc(t){var e=t;do{if((e.flags&32768)!==0){Id(e,Ua);return}t=e.return;var a=kp(e.alternate,e,ga);if(a!==null){at=a;return}if(e=e.sibling,e!==null){at=e;return}at=e=t}while(e!==null);Mt===0&&(Mt=5)}function Id(t,e){do{var a=qp(t.alternate,t);if(a!==null){a.flags&=32767,at=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){at=t;return}at=t=a}while(t!==null);Mt=6,at=null}function Pd(t,e,a,l,n,i,u,r,o,p,b,z){t.cancelPendingCommit=null;do jc();while(Ct!==0);if((mt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));t===St&&(at=St=null,nt=0),xl=e,ke=t,Pe=a,Hr=n,Vd=l,Jp(t,e,a,u,r,o,z)}}function Jp(t,e,a,l,n,i,u){var r=e.lanes|e.childLanes;if(Fr=r,r|=bu,Nm(t,a,r,l,n,i),Wl=null,(a&335544064)===a?(Il=jp(t),l=10262):(Il=null,l=10256),(e.subtreeFlags&l)!==0||(e.flags&l)!==0?(t.callbackNode=null,t.callbackPriority=0,e1(fi,function(){return Gr(),null})):(t.callbackNode=null,t.callbackPriority=0),rc=!1,l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,n=L.p,L.p=2,i=mt,mt|=4;try{Gp(t,e,a)}finally{mt=i,L.p=n,H.T=l}}Ct=1,rc?$l=N1(u,t.containerInfo,Il,Br,kr,Wp,qr,Gr,$p):(Br(),kr(),qr())}function $p(t){if(Ct!==0){var e=ke.onRecoverableError;e(t,{componentStack:null})}}function Wp(){Ct===3&&(Ct=0,Hd(xl,ke),Ct=4)}function Br(){if(Ct===1){Ct=0;var t=ke,e=xl,a=Pe,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=H.T,H.T=null;var n=L.p;L.p=2;var i=mt;mt|=4;try{Xn=fc=!1,Dd(e,t,a),a=Pr;var u=As(t.containerInfo),r=a.focusedElem,o=a.selectionRange;if(u!==r&&r&&r.ownerDocument&&Cs(r.ownerDocument.documentElement,r)){if(o!==null&&hu(r)){var p=o.start,b=o.end;if(b===void 0&&(b=p),"selectionStart"in r)r.selectionStart=p,r.selectionEnd=Math.min(b,r.value.length);else{var z=r.ownerDocument||document,h=z&&z.defaultView||window;if(h.getSelection){var x=h.getSelection(),A=r.textContent.length,F=Math.min(o.start,A),I=o.end===void 0?F:Math.min(o.end,A);!x.extend&&F>I&&(u=I,I=F,F=u);var m=ws(r,F),f=ws(r,I);if(m&&f&&(x.rangeCount!==1||x.anchorNode!==m.node||x.anchorOffset!==m.offset||x.focusNode!==f.node||x.focusOffset!==f.offset)){var g=z.createRange();g.setStart(m.node,m.offset),x.removeAllRanges(),F>I?(x.addRange(g),x.extend(f.node,f.offset)):(g.setEnd(f.node,f.offset),x.addRange(g))}}}}for(z=[],x=r;x=x.parentNode;)x.nodeType===1&&z.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<z.length;r++){var j=z[r];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}sn=!!Ir,Pr=Ir=null}finally{mt=i,L.p=n,H.T=l}}t.current=e,Ct=2}}function kr(){if(Ct===2){Ct=0;var t=ke,e=xl,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var l=L.p;L.p=2;var n=mt;mt|=4;try{wd(t,e.alternate,e)}finally{mt=n,L.p=l,H.T=a}}Ct=3}}function qr(){if(Ct===4||Ct===3){Ct=0;var t=$l;$l=null,dm();var e=ke,a=xl,l=Pe,n=Vd,i=(l&335544064)===l?10262:10256;if((a.subtreeFlags&i)!==0||(a.flags&i)!==0?Ct=5:(Ct=0,xl=ke=null,t0(e,e.pendingLanes)),i=e.pendingLanes,i===0&&(ka=null),Jc(l),a=a.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(hn,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=H.T,i=L.p,L.p=2,H.T=null;try{for(var u=e.onRecoverableError,r=0;r<n.length;r++){var o=n[r];u(o.value,{componentStack:o.stack})}}finally{H.T=a,L.p=i}}if(n=Wl,u=Il,Il=null,n!==null&&(Wl=null,u===null&&(u=[]),t!==null))for(o=0;o<n.length;o++)a=(0,n[o])(u),a!==void 0&&t.finished.finally(a);(Pe&3)!==0&&jc(),ta(e),i=e.pendingLanes,(l&261930)!==0&&(i&42)!==0?e===vc?Kn++:(Kn=0,vc=e):(Kn=0,vc=null),Jn(0)}}function t0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,An(e)))}function jc(){return $l!==null&&($l.skipTransition(),$l=null),Br(),kr(),qr(),Gr()}function Gr(){if(Ct!==5)return!1;var t=ke,e=Fr;Fr=0;var a=Jc(Pe),l=H.T,n=L.p;try{L.p=32>a?32:a,H.T=null,a=Hr,Hr=null;var i=ke,u=Pe;if(Ct=0,xl=ke=null,Pe=0,(mt&6)!==0)throw Error(s(331));var r=mt;if(mt|=4,kd(i.current),Rd(i,i.current,u,a),mt=r,Jn(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(hn,i)}catch{}return!0}finally{L.p=n,H.T=l,t0(t,e)}}function e0(t,e,a){e=we(a,e),e=nr(t.stateNode,e,2),t=Ma(t,e,2),t!==null&&(pn(t,2),ta(t))}function bt(t,e,a){if(t.tag===3)e0(t,t,a);else for(;e!==null;){if(e.tag===3){e0(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ka===null||!ka.has(l))){t=we(a,t),a=Wf(2),l=Ma(e,a,2),l!==null&&(If(a,l,e,t),pn(l,2),ta(l));break}}e=e.return}}function Vr(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Xp;var n=new Set;l.set(e,n)}else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(a)||(Or=!0,n.add(a),t=Ip.bind(null,t,e,a),e.then(t,t))}function Ip(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,St===t&&(nt&a)===a&&((Mt===4||Mt===3&&(nt&62914560)===nt&&300>de()-gc)&&(mt&2)===0?tn(t,0):pc|=a,Jl===nt&&(Jl=0)),ta(t)}function a0(t,e){e===0&&(e=qo()),t=el(t,e),t!==null&&(pn(t,e),ta(t))}function Pp(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),a0(t,a)}function t1(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(e),a0(t,a)}function e1(t,e){return Qc(t,e)}var an=null,ln=null,Yr=!1,zc=!1,Xr=!1,Ga=0;function ta(t){t!==ln&&t.next===null&&(ln===null?an=ln=t:ln=ln.next=t),zc=!0,Yr||(Yr=!0,l1())}function Jn(t,e){if(!Xr&&zc){Xr=!0;do for(var a=!1,l=an;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,r=l.pingedLanes;i=(1<<31-me(42|t)+1)-1,i&=n&~(u&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,c0(l,i))}else i=nt,i=pi(l,l===St?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||mn(l,i)||(a=!0,c0(l,i));l=l.next}while(a);Xr=!1}}function a1(){l0()}function l0(){zc=Yr=!1;var t=0;Ga!==0&&m1()&&(t=Ga);for(var e=de(),a=null,l=an;l!==null;){var n=l.next,i=n0(l,e);i===0?(l.next=null,a===null?an=n:a.next=n,n===null&&(ln=a)):(a=l,(t!==0||(i&3)!==0)&&(zc=!0)),l=n}Ct!==0&&Ct!==5||Jn(t),Ga!==0&&(Ga=0)}function n0(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-me(i),r=1<<u,o=n[u];o===-1?((r&a)===0||(r&l)!==0)&&(n[u]=ym(r,e)):o<=e&&(t.expiredLanes|=r),i&=~r}if(e=St,a=nt,a=pi(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(xt===2||xt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Lc(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||mn(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&Lc(l),Jc(a)){case 2:case 8:a=Uo;break;case 32:a=fi;break;case 268435456:a=Bo;break;default:a=fi}return l=i0.bind(null,t),a=Qc(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&Lc(l),t.callbackPriority=2,t.callbackNode=null,2}function i0(t,e){if(Ct!==0&&Ct!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(jc()&&t.callbackNode!==a)return null;var l=nt;return l=pi(t,t===St?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Xd(t,l,e),n0(t,de()),t.callbackNode!=null&&t.callbackNode===a?i0.bind(null,t):null)}function c0(t,e){if(jc())return null;Xd(t,e,!0)}function l1(){g1(function(){(mt&6)!==0?Qc(Ro,a1):l0()})}function Qr(){if(Ga===0){var t=ul;t===0&&(t=di,di<<=1,(di&261888)===0&&(di=256)),Ga=t}return Ga}function u0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:yi(t)}function n1(t,e,a,l,n){if(e==="submit"&&a&&a.stateNode===n){var i=u0((n[ie]||null).action),u=l.submitter;u&&(e=(e=u[ie]||null)?u0(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var r=new zi("action","action",null,l,n);t.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ga!==0){var o=new FormData(n,u);Pu(a,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(r.preventDefault(),o=new FormData(n,u),Pu(a,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var Lr=0;Lr<xu.length;Lr++){var Zr=xu[Lr],i1=Zr.toLowerCase(),c1=Zr[0].toUpperCase()+Zr.slice(1);He(i1,"on"+c1)}He(Os,"onAnimationEnd"),He(Ds,"onAnimationIteration"),He(Fs,"onAnimationStart"),He("dblclick","onDoubleClick"),He("focusin","onFocus"),He("focusout","onBlur"),He(pp,"onTransitionRun"),He(gp,"onTransitionStart"),He(xp,"onTransitionCancel"),He(Hs,"onTransitionEnd"),Tl("onMouseEnter",["mouseout","mouseover"]),Tl("onMouseLeave",["mouseout","mouseover"]),Tl("onPointerEnter",["pointerout","pointerover"]),Tl("onPointerLeave",["pointerout","pointerover"]),Ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ia("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($n));function r0(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var u=l.length-1;0<=u;u--){var r=l[u],o=r.instance,p=r.currentTarget;if(r=r.listener,o!==i&&n.isPropagationStopped())break t;i=r,n.currentTarget=p;try{i(n)}catch(b){wi(b)}n.currentTarget=null,i=o}else for(u=0;u<l.length;u++){if(r=l[u],o=r.instance,p=r.currentTarget,r=r.listener,o!==i&&n.isPropagationStopped())break t;i=r,n.currentTarget=p;try{i(n)}catch(b){wi(b)}n.currentTarget=null,i=o}}}}function lt(t,e){var a=e[Lo];a===void 0&&(a=e[Lo]=new Set);var l=t+"__bubble";a.has(l)||(o0(e,t,2,!1),a.add(l))}function Kr(t,e,a){var l=0;e&&(l|=4),o0(a,t,l,e)}var Tc="_reactListening"+Math.random().toString(36).slice(2);function Jr(t){if(!t[Tc]){t[Tc]=!0,Jo.forEach(function(a){a!=="selectionchange"&&(u1.has(a)||Kr(a,!1,t),Kr(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Tc]||(e[Tc]=!0,Kr("selectionchange",!1,e))}}function o0(t,e,a,l){switch(I0(e)){case 2:var n=P1;break;case 8:n=tg;break;default:n=go}a=n.bind(null,e,a,t),n=void 0,!lu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function $r(t,e,a,l,n){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var r=l.stateNode.containerInfo;if(r===n)break;if(u===4)for(u=l.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;r!==null;){if(u=Wa(r),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){l=i=u;continue t}r=r.parentNode}}l=l.return}rs(function(){var p=i,b=eu(a),z=[];t:{var h=Rs.get(t);if(h!==void 0){var x=zi,A=t;switch(t){case"keypress":if(Si(a)===0)break t;case"keydown":case"keyup":x=Qm;break;case"focusin":A="focus",x=uu;break;case"focusout":A="blur",x=uu;break;case"beforeblur":case"afterblur":x=uu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=fs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Dm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=$m;break;case Os:case Ds:case Fs:x=Rm;break;case Hs:x=Im;break;case"scroll":case"scrollend":x=Mm;break;case"wheel":x=tp;break;case"copy":case"cut":case"paste":x=Bm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=hs;break;case"submit":x=Km;break;case"toggle":case"beforetoggle":x=ap}var F=(e&4)!==0,I=!F&&(t==="scroll"||t==="scrollend"),m=F?h!==null?h+"Capture":null:h;F=[];for(var f=p,g;f!==null;){var j=f;if(g=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||g===null||m===null||(j=bn(f,m),j!=null&&F.push(Wn(f,j,g))),I)break;f=f.return}0<F.length&&(h=new x(h,A,null,a,b),z.push({event:h,listeners:F}))}}if((e&7)===0){t:{if(x=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",x&&a!==tu&&(A=a.relatedTarget||a.fromElement)&&(Wa(A)||A[Sl]))break t;(h||x)&&(A=b.window===b?b:(x=b.ownerDocument)?x.defaultView||x.parentWindow:window,h?(x=a.relatedTarget||a.toElement,h=p,x=x?Wa(x):null,x!==null&&(I=C(x),F=x.tag,x!==I||F!==5&&F!==27&&F!==6)&&(x=null)):(h=null,x=p),h!==x&&(F=fs,j="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(F=hs,j="onPointerLeave",m="onPointerEnter",f="pointer"),I=h==null?A:xn(h),g=x==null?A:xn(x),A=new F(j,f+"leave",h,a,b),A.target=I,A.relatedTarget=g,j=null,Wa(b)===p&&(F=new F(m,f+"enter",x,a,b),F.target=g,F.relatedTarget=I,j=F),I=j,F=h&&x?kt(h,x,r1):null,h!==null&&s0(z,A,h,F,!1),x!==null&&I!==null&&s0(z,I,x,F,!0)))}t:{if(h=p?xn(p):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var M=Ns;else if(vs(h))if(Ss)M=dp;else{M=sp;var it=op}else x=h.nodeName,!x||x.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?p&&Pc(p.elementType)&&(M=Ns):M=fp;if(M&&(M=M(t,p))){ys(z,M,a,b);break t}it&&it(t,h,p)}switch(it=p?xn(p):window,t){case"focusin":(vs(it)||it.contentEditable==="true")&&(Ml=it,mu=p,En=null);break;case"focusout":En=mu=Ml=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,_s(z,a,b);break;case"selectionchange":if(mp)break;case"keydown":case"keyup":_s(z,a,b)}var R;if(ou)t:{switch(t){case"compositionstart":var q="onCompositionStart";break t;case"compositionend":q="onCompositionEnd";break t;case"compositionupdate":q="onCompositionUpdate";break t}q=void 0}else _l?xs(t,a)&&(q="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(q="onCompositionStart");q&&(ms&&a.locale!=="ko"&&(_l||q!=="onCompositionStart"?q==="onCompositionEnd"&&_l&&(R=os()):(Sa=b,nu="value"in Sa?Sa.value:Sa.textContent,_l=!0)),it=Ec(p,q),0<it.length&&(q=new ds(q,t,null,a,b),z.push({event:q,listeners:it}),R?q.data=R:(R=bs(a),R!==null&&(q.data=R)))),(R=np?ip(t,a):cp(t,a))&&(q=Ec(p,"onBeforeInput"),0<q.length&&(it=new ds("onBeforeInput","beforeinput",null,a,b),z.push({event:it,listeners:q}),it.data=R)),n1(z,t,p,a,b)}r0(z,e)})}function Wn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Ec(t,e){for(var a=e+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=bn(t,a),n!=null&&l.unshift(Wn(t,n,i)),n=bn(t,e),n!=null&&l.push(Wn(t,n,i))),t.tag===3)return l;t=t.return}return[]}function r1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function s0(t,e,a,l,n){for(var i=e._reactName,u=[];a!==null&&a!==l;){var r=a,o=r.alternate,p=r.stateNode;if(r=r.tag,o!==null&&o===l)break;r!==5&&r!==26&&r!==27||p===null||(o=p,n?(p=bn(a,i),p!=null&&u.unshift(Wn(a,p,o))):n||(p=bn(a,i),p!=null&&u.push(Wn(a,p,o)))),a=a.return}u.length!==0&&t.push({event:e,listeners:u})}var o1=/\r\n?/g,s1=/\u0000|\uFFFD/g;function f0(t){return(typeof t=="string"?t:""+t).replace(o1,`
`).replace(s1,"")}function d0(t,e){return e=f0(e),f0(t)===e}function vt(t,e,a,l,n,i){switch(a){case"children":if(typeof l=="string")e==="body"||e==="textarea"&&l===""||wl(t,l);else if(typeof l=="number"||typeof l=="bigint")e!=="body"&&wl(t,""+l);else return;break;case"className":vi(t,"class",l);break;case"tabIndex":vi(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":vi(t,a,l);break;case"style":cs(t,l,i);return;case"data":if(e!=="object"){vi(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=yi(l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&vt(t,e,"name",n.name,n,null),vt(t,e,"formEncType",n.formEncType,n,null),vt(t,e,"formMethod",n.formMethod,n,null),vt(t,e,"formTarget",n.formTarget,n,null)):(vt(t,e,"encType",n.encType,n,null),vt(t,e,"method",n.method,n,null),vt(t,e,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=yi(l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Xe);return;case"onScroll":l!=null&&lt("scroll",t);return;case"onScrollEnd":l!=null&&lt("scrollend",t);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));(i!=null?i.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=yi(l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":lt("beforetoggle",t),lt("toggle",t),bi(t,"popover",l);break;case"xlinkActuate":na(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":na(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":na(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":na(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":na(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":na(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":na(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":na(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":na(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":bi(t,"is",l);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Am.get(a)||a,bi(t,a,l);else return}dt=!0}function Wr(t,e,a,l,n,i){switch(a){case"style":cs(t,l,i);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));(i!=null?i.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof l=="string")wl(t,l);else if(typeof l=="number"||typeof l=="bigint")wl(t,""+l);else return;break;case"onScroll":l!=null&&lt("scroll",t);return;case"onScrollEnd":l!=null&&lt("scrollend",t);return;case"onClick":l!=null&&(t.onclick=Xe);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!$o.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),i=a.slice(2,n?a.length-7:void 0),e=t[ie]||null,e=e!=null?e[a]:null,typeof e=="function"&&t.removeEventListener(i,e,n),typeof l=="function")){typeof e!="function"&&e!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,n);break t}dt=!0,a in t?t[a]=l:l===!0?t.setAttribute(a,""):bi(t,a,l)}return}dt=!0}function It(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":lt("error",t),lt("load",t);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:vt(t,e,i,u,a,null)}}n&&vt(t,e,"srcSet",a.srcSet,a,null),l&&vt(t,e,"src",a.src,a,null);return;case"input":lt("invalid",t);var r=i=u=n=null,o=null,p=null;for(l in a)if(a.hasOwnProperty(l)){var b=a[l];if(b!=null)switch(l){case"name":n=b;break;case"type":u=b;break;case"checked":o=b;break;case"defaultChecked":p=b;break;case"value":i=b;break;case"defaultValue":r=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(137,e));break;default:vt(t,e,l,b,a,null)}}as(t,i,r,o,p,u,n,!1);return;case"select":lt("invalid",t),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(r=a[n],r!=null))switch(n){case"value":i=r;break;case"defaultValue":u=r;break;case"multiple":l=r;default:vt(t,e,n,r,a,null)}e=i,a=u,t.multiple=!!l,e!=null?El(t,!!l,e,!1):a!=null&&El(t,!!l,a,!0);return;case"textarea":lt("invalid",t),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(r=a[u],r!=null))switch(u){case"value":l=r;break;case"defaultValue":n=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:vt(t,e,u,r,a,null)}ns(t,l,n,i);return;case"option":for(o in a)if(a.hasOwnProperty(o)&&(l=a[o],l!=null))switch(o){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:vt(t,e,o,l,a,null)}return;case"dialog":lt("beforetoggle",t),lt("toggle",t),lt("cancel",t),lt("close",t);break;case"iframe":case"object":lt("load",t);break;case"video":case"audio":for(l=0;l<$n.length;l++)lt($n[l],t);break;case"image":lt("error",t),lt("load",t);break;case"details":lt("toggle",t);break;case"embed":case"source":case"link":lt("error",t),lt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:vt(t,e,p,l,a,null)}return;default:if(Pc(e)){for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!==void 0&&Wr(t,e,b,l,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null&&vt(t,e,r,l,a,null))}var f1={};function d1(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,r=null,o=null,p=null,b=null;for(x in a){var z=a[x];if(a.hasOwnProperty(x)&&z!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":o=z;default:l.hasOwnProperty(x)||vt(t,e,x,null,l,z)}}for(var h in l){var x=l[h];if(z=a[h],l.hasOwnProperty(h)&&(x!=null||z!=null))switch(h){case"type":x!==z&&(dt=!0),i=x;break;case"name":x!==z&&(dt=!0),n=x;break;case"checked":x!==z&&(dt=!0),p=x;break;case"defaultChecked":x!==z&&(dt=!0),b=x;break;case"value":x!==z&&(dt=!0),u=x;break;case"defaultValue":x!==z&&(dt=!0),r=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(s(137,e));break;default:x!==z&&vt(t,e,h,x,l,z)}}Wc(t,u,r,o,p,b,i,n);return;case"select":x=u=r=h=null;for(i in a)if(o=a[i],a.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":x=o;default:l.hasOwnProperty(i)||vt(t,e,i,null,l,o)}for(n in l)if(i=l[n],o=a[n],l.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":i!==o&&(dt=!0),h=i;break;case"defaultValue":i!==o&&(dt=!0),r=i;break;case"multiple":i!==o&&(dt=!0),u=i;default:i!==o&&vt(t,e,n,i,l,o)}e=r,a=u,l=x,h!=null?El(t,!!a,h,!1):!!l!=!!a&&(e!=null?El(t,!!a,e,!0):El(t,!!a,a?[]:"",!1));return;case"textarea":x=h=null;for(r in a)if(n=a[r],a.hasOwnProperty(r)&&n!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:vt(t,e,r,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":n!==i&&(dt=!0),h=n;break;case"defaultValue":n!==i&&(dt=!0),x=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&vt(t,e,u,n,l,i)}ls(t,h,x);return;case"option":for(var A in a)if(h=a[A],a.hasOwnProperty(A)&&h!=null&&!l.hasOwnProperty(A))switch(A){case"selected":t.selected=!1;break;default:vt(t,e,A,null,l,h)}for(o in l)if(h=l[o],x=a[o],l.hasOwnProperty(o)&&h!==x&&(h!=null||x!=null))switch(o){case"selected":h!==x&&(dt=!0),t.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:vt(t,e,o,h,l,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in a)h=a[F],a.hasOwnProperty(F)&&h!=null&&!l.hasOwnProperty(F)&&vt(t,e,F,null,l,h);for(p in l)if(h=l[p],x=a[p],l.hasOwnProperty(p)&&h!==x&&(h!=null||x!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(137,e));break;default:vt(t,e,p,h,l,x)}return;default:if(Pc(e)){for(var I in a)h=a[I],a.hasOwnProperty(I)&&h!==void 0&&!l.hasOwnProperty(I)&&Wr(t,e,I,void 0,l,h);for(b in l)h=l[b],x=a[b],!l.hasOwnProperty(b)||h===x||h===void 0&&x===void 0||Wr(t,e,b,h,l,x);return}}for(var m in a)h=a[m],a.hasOwnProperty(m)&&h!=null&&!l.hasOwnProperty(m)&&vt(t,e,m,null,l,h);for(z in l)h=l[z],x=a[z],!l.hasOwnProperty(z)||h===x||h==null&&x==null||vt(t,e,z,h,l,x)}function h0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function h1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,r=n.duration;if(i&&r&&h0(u)){for(u=0,r=n.responseEnd,l+=1;l<a.length;l++){var o=a[l],p=o.startTime;if(p>r)break;var b=o.transferSize,z=o.initiatorType;b&&h0(z)&&(o=o.responseEnd,u+=b*(o<r?1:(r-p)/(o-p)))}if(--l,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ir=null,Pr=null;function In(t){return t.nodeType===9?t:t.ownerDocument}function m0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function p0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function g0(t,e,a,l){return a=In(a).createElement(t),a[Zt]=l,a[ie]=e,It(a,t,e),Vt(a),a}function to(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var eo=null;function m1(){var t=window.event;return t&&t.type==="popstate"?t===eo?!1:(eo=t,!0):(eo=null,!1)}var ao=typeof setTimeout=="function"?setTimeout:void 0,p1=typeof clearTimeout=="function"?clearTimeout:void 0,x0=typeof Promise=="function"?Promise:void 0,b0=typeof requestAnimationFrame=="function"?requestAnimationFrame:ao,g1=typeof queueMicrotask=="function"?queueMicrotask:typeof x0<"u"?function(t){return x0.resolve(null).then(t).catch(x1)}:ao;function x1(t){setTimeout(function(){throw t})}function Va(t){return t==="head"}function v0(t,e){var a=e,l=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(n),fn(e);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")so(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,so(a);for(var i=a.firstChild;i;){var u=i.nextSibling,r=i.nodeName;i[gn]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&so(t.ownerDocument.body);a=n}while(a);fn(e)}function y0(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function N0(t,e,a){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(e=t.getClientRects(),e.length===1)var l=1;else for(var n=l=0;n<e.length;n++){var i=e[n];0<i.width&&0<i.height&&l++}l===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function S0(t,e){t=t.style,e=e.style;var a=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(a=e.display,t.display=a==null||typeof a=="boolean"?"":a,a=e.margin,a!=null?t.margin=a:(a=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function b1(t,e,a){return a=a.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function lo(t){var e=t.getBoundingClientRect(),a=getComputedStyle(t);return b1(e,a,t)}function v1(t){return t.documentElement.clientHeight}function y1(t){this.addEventListener("load",t),this.addEventListener("error",t)}function N1(t,e,a,l,n,i,u,r,o){var p=e.nodeType===9?e:e.ownerDocument;try{var b=p.startViewTransition({update:function(){var h=p.defaultView,x=h.navigation&&h.navigation.transition,A=p.fonts.status;l();var F=[];if(A==="loaded"&&(v1(p),p.fonts.status==="loading"&&F.push(p.fonts.ready)),A=F.length,t!==null)for(var I=t.suspenseyImages,m=0,f=0;f<I.length;f++){var g=I[f];if(!g.complete){var j=g.getBoundingClientRect();if(0<j.bottom&&0<j.right&&j.top<h.innerHeight&&j.left<h.innerWidth){if(m+=Y0(g),m>Ac){F.length=A;break}g=new Promise(y1.bind(g)),F.push(g)}}}if(0<F.length)return h=Promise.race([Promise.all(F),new Promise(function(M){return setTimeout(M,500)})]).then(n,n),(x?Promise.allSettled([x.finished,h]):h).then(i,i);if(n(),x)return x.finished.then(i,i);i()},types:a});p.__reactViewTransition=b;var z=[];return b.ready.then(function(){for(var h=p.documentElement.getAnimations({subtree:!0}),x=0;x<h.length;x++){var A=h[x],F=A.effect,I=F.pseudoElement;if(I!=null&&I.startsWith("::view-transition")){z.push(A),A=F.getKeyframes();for(var m=I=void 0,f=!0,g=0;g<A.length;g++){var j=A[g],M=j.width;if(I===void 0)I=M;else if(I!==M){f=!1;break}if(M=j.height,m===void 0)m=M;else if(m!==M){f=!1;break}delete j.width,delete j.height,j.transform==="none"&&delete j.transform}f&&I!==void 0&&m!==void 0&&(F.setKeyframes(A),f=getComputedStyle(F.target,F.pseudoElement),f.width!==I||f.height!==m)&&(f=A[0],f.width=I,f.height=m,f=A[A.length-1],f.width=I,f.height=m,F.setKeyframes(A))}}u()},function(h){p.__reactViewTransition===b&&(p.__reactViewTransition=null);try{if(typeof h=="object"&&h!==null)switch(h.name){case"InvalidStateError":(h.message==="View transition was skipped because document visibility state is hidden."||h.message==="Skipping view transition because document visibility state has become hidden."||h.message==="Skipping view transition because viewport size changed."||h.message==="Transition was aborted because of invalid state")&&(h=null)}h!==null&&o(h)}finally{l(),n(),u()}}),b.finished.finally(function(){for(var h=0;h<z.length;h++)z[h].cancel();p.__reactViewTransition===b&&(p.__reactViewTransition=null),r()}),b}catch{return l(),n(),u(),null}}function bl(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}bl.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:$({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},bl.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,a=t.getAnimations({subtree:!0}),l=[],n=0;n<a.length;n++){var i=a[n].effect;i!==null&&i.target===t&&i.pseudoElement===e&&l.push(a[n])}return l},bl.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function j0(t){return{name:t,group:new bl("group",t),imagePair:new bl("image-pair",t),old:new bl("old",t),new:new bl("new",t)}}function Se(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}Se.prototype.addEventListener=function(t,e,a){var l=null,n=null;if(!(a!=null&&typeof a!="boolean"&&(l=a.signal||null,l!==null&&l.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(T0(i,t,e,a)===-1){var u=this,r=e;a!=null&&typeof a!="boolean"&&a.once===!0&&(r=function(o){u.removeEventListener(t,e,a),typeof e=="function"?e.call(this,o):e.handleEvent(o)}),l!==null&&(n=u.removeEventListener.bind(u,t,e,a),l.addEventListener("abort",n,{once:!0}),n=l.removeEventListener.bind(l,"abort",n)),l=nn(a),i.push({type:t,listener:e,optionsOrUseCapture:a,attachedListener:r,cleanup:n}),N(this._fragmentFiber.child,!1,S1,t,r,l)}this._eventListeners=i}};function S1(t,e,a,l){return tt(t).addEventListener(e,a,l),!1}Se.prototype.removeEventListener=function(t,e,a){var l=this._eventListeners;if(l!==null&&(e=T0(l,t,e,a),e!==-1)){var n=l[e];a=n.attachedListener;var i=n.cleanup;n=nn(n.optionsOrUseCapture),N(this._fragmentFiber.child,!1,j1,t,a,n),l.splice(e,1),i!==null&&i()}};function j1(t,e,a,l){return tt(t).removeEventListener(e,a,l),!1}function nn(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function z0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function T0(t,e,a,l){if(t.length===0)return-1;l=z0(l);for(var n=0;n<t.length;n++){var i=t[n];if(i.type===e&&i.listener===a&&z0(i.optionsOrUseCapture)===l)return n}return-1}Se.prototype.dispatchEvent=function(t){var e=D(this._fragmentFiber);if(e===null)return!0;e=tt(e);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var l=e.nodeType===9?e.createComment(""):document.createTextNode("");if(a)for(var n=0;n<a.length;n++){var i=a[n];l.addEventListener(i.type,i.attachedListener,nn(i.optionsOrUseCapture))}if(e.appendChild(l),t=l.dispatchEvent(t),a)for(n=0;n<a.length;n++)i=a[n],l.removeEventListener(i.type,i.attachedListener,nn(i.optionsOrUseCapture));return e.removeChild(l),t}return e.dispatchEvent(t)},Se.prototype.focus=function(t){N(this._fragmentFiber.child,!0,E0,t,void 0,void 0)};function E0(t,e){return t.tag===6?!1:(t=tt(t),H1(t,e))}Se.prototype.focusLast=function(t){var e=[];N(this._fragmentFiber.child,!0,no,e,void 0,void 0);for(var a=e.length-1;0<=a&&!E0(e[a],t);a--);};function no(t,e){return e.push(t),!1}Se.prototype.blur=function(){var t=D(this._fragmentFiber);t!==null&&(t=tt(t),t=In(t).activeElement,t!==null&&N(this._fragmentFiber.child,!1,z1,t,void 0,void 0))};function z1(t,e){return t.tag===6?!1:(t=tt(t),t===e||t.contains(e)?(e.blur(),!0):!1)}Se.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),N(this._fragmentFiber.child,!1,T1,t,void 0,void 0)};function T1(t,e){return t.tag===6||(t=tt(t),e.observe(t)),!1}Se.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),N(this._fragmentFiber.child,!1,E1,t,void 0,void 0);for(var a=e=0;a<qe.length;a++){var l=qe[a];l.fragmentInstance===this&&l.observer===t?t.unobserve(l.instance):qe[e++]=l}qe.length=e}};function E1(t,e){return t.tag===6||(t=tt(t),e.unobserve(t)),!1}var qe=[],io=!1;function w1(t,e,a){qe.push({fragmentInstance:t,observer:e,instance:a}),io||(io=!0,R1(function(){io=!1;var l=qe;qe=[];for(var n=0;n<l.length;n++){var i=l[n];i.observer.unobserve(i.instance)}}))}Se.prototype.getClientRects=function(){var t=[];return N(this._fragmentFiber.child,!1,C1,t,void 0,void 0),t};function C1(t,e){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),e.push.apply(e,a.getClientRects())}else t=tt(t),e.push.apply(e,t.getClientRects());return!1}Se.prototype.getRootNode=function(t){var e=D(this._fragmentFiber);return e===null?this:tt(e).getRootNode(t)},Se.prototype.compareDocumentPosition=function(t){var e=D(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];N(this._fragmentFiber.child,!1,no,a,void 0,void 0);var l=tt(e);if(a.length===0){if(a=l,Q(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(a=e)}e=this._fragmentFiber;var n=l=a.compareDocumentPosition(t);return a===t?n=Node.DOCUMENT_POSITION_CONTAINS:l&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=w(e)[1],a===null?n=Node.DOCUMENT_POSITION_PRECEDING:(t=tt(a).compareDocumentPosition(t),n=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),n|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=tt(a[0]),n=tt(a[a.length-1]);var i=Q(this._fragmentFiber)?e.parentElement:l;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;l=i.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY;var u=e.compareDocumentPosition(t),r=n.compareDocumentPosition(t),o=u&Node.DOCUMENT_POSITION_CONTAINED_BY||r&Node.DOCUMENT_POSITION_CONTAINED_BY;return r=l&&i&&u&Node.DOCUMENT_POSITION_FOLLOWING&&r&Node.DOCUMENT_POSITION_PRECEDING,e=l&&e===t||i&&n===t||o||r?Node.DOCUMENT_POSITION_CONTAINED_BY:!l&&e===t||!i&&n===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:u,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||A1(e,this._fragmentFiber,a[0],a[a.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function A1(t,e,a,l,n){var i=Wa(n);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!i)t:{for(;i!==null;){if(i.tag===7&&(i===e||i.alternate===e)){a=!0;break t}i=i.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=n.ownerDocument,n===i||n===i.documentElement||n===i.body;t:{for(i=e,e=D(e);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==e&&i.alternate!==e)){i=!0;break t}i=i.return}i=!1}return i}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!i)&&!(e=i===a)&&(e=kt(a,i,At),e===null?e=!1:(N(e,!0,wt,i,a),i=Ut,Ut=null,e=i!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!i)&&!(e=i===l)&&(e=kt(l,i,At),e===null?e=!1:(N(e,!0,Bt,i,l),i=Ut,J=Ut=null,e=i!==null)),e):!1}function w0(t,e){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}Se.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var e=[];N(this._fragmentFiber.child,!1,no,e,void 0,void 0);var a=t!==!1;if(e.length===0){var l=w(this._fragmentFiber);if(l=a?l[1]||l[0]||D(this._fragmentFiber):l[0]||l[1],l===null)return;if(l.tag===6){t=tt(l),w0(t,a);return}if(l=tt(l),l.nodeType!==9){if(l.nodeType===11){a="host"in l?l.host:null,a!==null&&a.scrollIntoView(t);return}l.scrollIntoView(t)}}for(l=a?e.length-1:0;l!==(a?-1:e.length);){var n=e[l];n.tag===6?(n=tt(n),w0(n,a)):tt(n).scrollIntoView(t),l+=a?-1:1}};function _1(t,e){return t=tt(t),C0(t,e),!1}function C0(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function A0(t,e){var a=e._eventListeners;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l];t.addEventListener(n.type,n.attachedListener,nn(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(i){for(var u=0,r=0;r<qe.length;r++){var o=qe[r];(o.fragmentInstance!==e||o.observer!==i||o.instance!==t)&&(qe[u++]=o)}qe.length=u,i.observe(t)}),C0(t,e))}function M1(t,e){var a=e._eventListeners;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l];t.removeEventListener(n.type,n.attachedListener,nn(n.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(i){typeof i.rootMargin=="string"?w1(e,i,t):i.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function co(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":co(a),xi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function O1(t,e,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[gn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Oe(t.nextSibling),t===null)break}return null}function D1(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Oe(t.nextSibling),t===null))return null;return t}function _0(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Oe(t.nextSibling),t===null))return null;return t}function uo(t){return t.data==="$?"||t.data==="$~"}function ro(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function F1(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Oe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var oo=null;function M0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Oe(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function O0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function H1(t,e){function a(){l=!0}if(t.ownerDocument.activeElement===t)return!0;var l=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return l}function R1(t){b0(function(){b0(function(e){return t(e)})})}function D0(t,e,a){switch(e=In(a),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function F0(t,e,a){for(var l in a){var n=a[l];a.hasOwnProperty(l)&&n!=null&&vt(t,e,l,null,f1,n)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Xe&&(t.onclick=null),xi(t)}function so(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);xi(t)}var De=new Map,H0=new Set;function Pn(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var xa=L.d;L.d={f:U1,r:B1,D:k1,C:q1,L:G1,m:V1,X:X1,S:Y1,M:Q1};function U1(){var t=xa.f(),e=yc();return t||e}function B1(t){var e=jl(t);e!==null&&e.tag===5&&e.type==="form"?Uf(e):xa.r(t)}var cn=typeof document>"u"?null:document;function R0(t,e,a){var l=cn;if(l&&typeof e=="string"&&e){var n=Te(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),H0.has(n)||(H0.add(n),t={rel:t,crossOrigin:a,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),It(e,"link",t),Vt(e),l.head.appendChild(e)))}}function k1(t){xa.D(t),R0("dns-prefetch",t,null)}function q1(t,e){xa.C(t,e),R0("preconnect",t,e)}function G1(t,e,a){xa.L(t,e,a);var l=cn;if(l&&t&&e){var n='link[rel="preload"][as="'+Te(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Te(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Te(a.imageSizes)+'"]')):n+='[href="'+Te(t)+'"]';var i=n;switch(e){case"style":i=un(t);break;case"script":i=rn(t)}if(!(De.has(i)||(t=$({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),De.set(i,t),l.querySelector(n)!==null||e==="style"&&l.querySelector(ti(i))||e==="script"&&l.querySelector(ei(i))))){var u=l.createElement("link");It(u,"link",t),e==="style"&&(u[gi]=!0,u.onload=u.onerror=function(){Ko(u)}),Vt(u),l.head.appendChild(u)}}}function V1(t,e){xa.m(t,e);var a=cn;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+Te(l)+'"][href="'+Te(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=rn(t)}if(!De.has(i)&&(t=$({rel:"modulepreload",href:t},e),De.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ei(i)))return}l=a.createElement("link"),It(l,"link",t),Vt(l),a.head.appendChild(l)}}}function Y1(t,e,a){xa.S(t,e,a);var l=cn;if(l&&t){var n=zl(l).hoistableStyles,i=un(t);e=e||"default";var u=n.get(i);if(!u){var r={loading:0,preload:null};if(u=l.querySelector(ti(i)))r.loading=5;else{t=$({rel:"stylesheet",href:t,"data-precedence":e},a),(a=De.get(i))&&fo(t,a);var o=u=l.createElement("link");Vt(o),It(o,"link",t),o._p=new Promise(function(p,b){o.onload=p,o.onerror=b}),o.addEventListener("load",function(){r.loading|=1}),o.addEventListener("error",function(){r.loading|=2}),r.loading|=4,wc(u,e,l)}u={type:"stylesheet",instance:u,count:1,state:r},n.set(i,u)}}}function X1(t,e){xa.X(t,e);var a=cn;if(a&&t){var l=zl(a).hoistableScripts,n=rn(t),i=l.get(n);i||(i=a.querySelector(ei(n)),i||(t=$({src:t,async:!0},e),(e=De.get(n))&&ho(t,e),i=a.createElement("script"),Vt(i),It(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Q1(t,e){xa.M(t,e);var a=cn;if(a&&t){var l=zl(a).hoistableScripts,n=rn(t),i=l.get(n);i||(i=a.querySelector(ei(n)),i||(t=$({src:t,async:!0,type:"module"},e),(e=De.get(n))&&ho(t,e),i=a.createElement("script"),Vt(i),It(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function U0(t,e,a,l){var n=(n=va.current)?Pn(n):null;if(!n)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=un(a.href),e=zl(n).hoistableStyles,l=e.get(a),l||(l={type:"style",instance:null,count:0,state:null},e.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=un(a.href);var i=zl(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(ti(t)))?i._p||(u.instance=i,u.state.loading=5):(i=De.get(t),i||(i={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},De.set(t,i)),L1(n,t,i,u.state))),e&&l===null)throw Error(s(528,""));return u}if(e&&l!==null)throw Error(s(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(a=rn(a),e=zl(n).hoistableScripts,l=e.get(a),l||(l={type:"script",instance:null,count:0,state:null},e.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function un(t){return'href="'+Te(t)+'"'}function ti(t){return'link[rel="stylesheet"]['+t+"]"}function B0(t){return $({},t,{"data-precedence":t.precedence,precedence:null})}function L1(t,e,a,l){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[gi]!==!0){l.loading=1;return}}else e=t.createElement("link"),e[gi]=!0,e.onload=e.onerror=Ko.bind(null,e),It(e,"link",a),Vt(e),t.head.appendChild(e);l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2})}function rn(t){return'[src="'+Te(t)+'"]'}function ei(t){return"script[async]"+t}function k0(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+Te(a.href)+'"]');if(l)return e.instance=l,Vt(l),l;var n=$({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Vt(l),It(l,"style",n),wc(l,a.precedence,t),e.instance=l;case"stylesheet":n=un(a.href);var i=t.querySelector(ti(n));if(i)return e.state.loading|=4,e.instance=i,Vt(i),i;l=B0(a),(n=De.get(n))&&fo(l,n),i=(t.ownerDocument||t).createElement("link"),Vt(i);var u=i;return u._p=new Promise(function(r,o){u.onload=r,u.onerror=o}),It(i,"link",l),e.state.loading|=4,wc(i,a.precedence,t),e.instance=i;case"script":return i=rn(a.src),(n=t.querySelector(ei(i)))?(e.instance=n,Vt(n),n):(l=a,(n=De.get(i))&&(l=$({},a),ho(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),Vt(n),It(n,"link",l),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,wc(l,a.precedence,t));return e.instance}function wc(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var r=l[u];if(r.dataset.precedence===e)i=r;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function fo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ho(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Cc=null;function q0(t,e,a){if(Cc===null){var l=new Map,n=Cc=new Map;n.set(a,l)}else n=Cc,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[gn]||i[Zt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var r=l.get(u);r?r.push(i):l.set(u,[i])}}return l}function mo(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Z1(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function G0(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function V0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Y0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function X0(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=Y0(e),t.suspenseyImages.push(e)),t=$1.bind(t),e.decode().then(t,t))}function K1(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=un(l.href),i=e.querySelector(ti(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=ai.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=i,Vt(i);return}i=e.ownerDocument||e,l=B0(l),(n=De.get(n))&&fo(l,n),i=i.createElement("link"),Vt(i);var u=i;u._p=new Promise(function(r,o){u.onload=r,u.onerror=o}),It(i,"link",l),a.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ai.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Ac=0;function J1(t,e){return t.stylesheets&&t.count===0&&Mc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&Mc(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&Ac===0&&(Ac=62500*h1());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Mc(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Ac?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Q0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Mc(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function ai(){this.count--,Q0(this)}function $1(){this.imgCount--,Q0(this)}var _c=null;function Mc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,_c=new Map,e.forEach(W1,t),_c=null,ai.call(t))}function W1(t,e){if(!(e.state.loading&4)){var a=_c.get(t);if(a)var l=a.get(null);else{a=new Map,_c.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=e.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=ai.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var on={$$typeof:Gt,Provider:null,Consumer:null,_currentValue:aa,_currentValue2:aa,_threadCount:0};function I1(t,e,a,l,n,i,u,r,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zc(0),this.hiddenUpdates=Zc(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.transitionTypes=null,this.incompleteTransitions=new Map}function L0(t,e,a,l,n,i,u,r,o,p,b,z){return t=new I1(t,e,a,u,o,p,b,z,r),e=1,i===!0&&(e|=24),i=ce(3,null,null,e),t.current=i,i.stateNode=t,e=Cu(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:e},Ou(i),t}function Z0(t){return t?(t=Fl,t):Fl}function K0(t,e,a,l,n,i){n=Z0(n),l.context===null?l.context=n:l.pendingContext=n,l=_a(e),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=Ma(t,l,e),a!==null&&(se(a,t,e),Dn(a,t,e))}function J0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function po(t,e){J0(t,e),(t=t.alternate)&&J0(t,e)}function $0(t){if(t.tag===13||t.tag===31){var e=el(t,67108864);e!==null&&se(e,t,67108864),po(t,67108864)}}function W0(t){if(t.tag===13||t.tag===31){var e=Ne();e=Kc(e);var a=el(t,e);a!==null&&se(a,t,e),po(t,e)}}var sn=!0;function P1(t,e,a,l){var n=H.T;H.T=null;var i=L.p;try{L.p=2,go(t,e,a,l)}finally{L.p=i,H.T=n}}function tg(t,e,a,l){var n=H.T;H.T=null;var i=L.p;try{L.p=8,go(t,e,a,l)}finally{L.p=i,H.T=n}}function go(t,e,a,l){if(sn){var n=xo(l);if(n===null)$r(t,e,l,Oc,a),P0(t,l);else if(ag(n,t,e,a,l))l.stopPropagation();else if(P0(t,l),e&4&&-1<eg.indexOf(t)){for(;n!==null;){var i=jl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=$a(i.pendingLanes);if(u!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;u;){var o=1<<31-me(u);r.entanglements[1]|=o,u&=~o}ta(i),(mt&6)===0&&(xc=de()+500,Jn(0))}}break;case 31:case 13:r=el(i,2),r!==null&&se(r,i,2),yc(),po(i,2)}if(i=xo(l),i===null&&$r(t,e,l,Oc,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else $r(t,e,l,null,a)}}function xo(t){return t=eu(t),bo(t)}var Oc=null;function bo(t){if(Oc=null,t=Wa(t),t!==null){var e=C(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=k(e),t!==null)return t;t=null}else if(a===31){if(t=K(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Oc=t,null}function I0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(hm()){case Ro:return 2;case Uo:return 8;case fi:case mm:return 32;case Bo:return 268435456;default:return 32}default:return 32}}var vo=!1,Ya=null,Xa=null,Qa=null,li=new Map,ni=new Map,La=[],eg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function P0(t,e){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":li.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ni.delete(e.pointerId)}}function ii(t,e,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},e!==null&&(e=jl(e),e!==null&&$0(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function ag(t,e,a,l,n){switch(e){case"focusin":return Ya=ii(Ya,t,e,a,l,n),!0;case"dragenter":return Xa=ii(Xa,t,e,a,l,n),!0;case"mouseover":return Qa=ii(Qa,t,e,a,l,n),!0;case"pointerover":var i=n.pointerId;return li.set(i,ii(li.get(i)||null,t,e,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,ni.set(i,ii(ni.get(i)||null,t,e,a,l,n)),!0}return!1}function th(t){var e=Wa(t.target);if(e!==null){var a=C(e);if(a!==null){if(e=a.tag,e===13){if(e=k(a),e!==null){t.blockedOn=e,Qo(t.priority,function(){W0(a)});return}}else if(e===31){if(e=K(a),e!==null){t.blockedOn=e,Qo(t.priority,function(){W0(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=xo(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);tu=l,a.target.dispatchEvent(l),tu=null}else return e=jl(a),e!==null&&$0(e),t.blockedOn=a,!1;e.shift()}return!0}function eh(t,e,a){Dc(t)&&a.delete(e)}function lg(){vo=!1,Ya!==null&&Dc(Ya)&&(Ya=null),Xa!==null&&Dc(Xa)&&(Xa=null),Qa!==null&&Dc(Qa)&&(Qa=null),li.forEach(eh),ni.forEach(eh)}function Fc(t,e){t.blockedOn===e&&(t.blockedOn=null,vo||(vo=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,lg)))}var Hc=null;function ah(t){Hc!==t&&(Hc=t,v.unstable_scheduleCallback(v.unstable_NormalPriority,function(){Hc===t&&(Hc=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],n=t[e+2];if(typeof l!="function"){if(bo(l||a)===null)continue;break}var i=jl(a);i!==null&&(t.splice(e,3),e-=3,Pu(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function fn(t){function e(o){return Fc(o,t)}Ya!==null&&Fc(Ya,t),Xa!==null&&Fc(Xa,t),Qa!==null&&Fc(Qa,t),li.forEach(e),ni.forEach(e);for(var a=0;a<La.length;a++){var l=La[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)th(a),a.blockedOn===null&&La.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[ie]||null;if(typeof i=="function")u||ah(a);else if(u){var r=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[ie]||null)r=u.formAction;else if(bo(n)!==null)continue}else r=u.action;typeof r=="function"?a[l+1]=r:(a.splice(l,3),l-=3),ah(a)}}}function lh(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function yo(t){this._internalRoot=t}Rc.prototype.render=yo.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var a=e.current,l=Ne();K0(a,l,t,e,null,null)},Rc.prototype.unmount=yo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;K0(t.current,2,null,t,null,null),yc(),e[Sl]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xo();t={blockedOn:null,target:t,priority:e};for(var a=0;a<La.length&&e!==0&&e<La[a].priority;a++);La.splice(a,0,t),a===0&&th(t)}};var nh=S.version;if(nh!=="19.3.0")throw Error(s(527,nh,"19.3.0"));L.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=ut(e),t=t!==null?O(t):null,t=t===null?null:t.stateNode,t};var ng={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uc.isDisabled&&Uc.supportsFiber)try{hn=Uc.inject(ng),he=Uc}catch{}}return ui.createRoot=function(t,e){if(!T(t))throw Error(s(299));var a=!1,l="",n=Zf,i=Kf,u=Jf;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=L0(t,1,!1,null,null,a,l,null,n,i,u,lh),t[Sl]=e.current,Jr(t),new yo(e)},ui.hydrateRoot=function(t,e,a){if(!T(t))throw Error(s(299));var l=!1,n="",i=Zf,u=Kf,r=Jf,o=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.formState!==void 0&&(o=a.formState)),e=L0(t,1,!0,e,a??null,l,n,o,i,u,r,lh),e.context=Z0(null),a=e.current,l=Ne(),l=Kc(l),n=_a(l),n.callback=null,Ma(a,n,l),a=l,e.current.lanes=a,pn(e,a),ta(e),t[Sl]=e.current,Jr(t),new Rc(e)},ui.version="19.3.0",ui}var mh;function mg(){if(mh)return jo.exports;mh=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(S){console.error(S)}}return v(),jo.exports=hg(),jo.exports}var pg=mg();const gg=ph(pg);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=v=>v==null?void 0:v.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function bg(v,S,y=[]){if(S==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:xg(v),size:24,node:S,...y.length>0?{aliases:y}:{}}}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=v=>{let S="",y=!1;for(const s of v){if(s==="-"||s==="_"||s<=" "){y=S.length>0;continue}S.length===0?S+=s.toLowerCase():S+=y?s.toUpperCase():s,y=!1}return S};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=v=>{const S=vg(v);return S.charAt(0).toUpperCase()+S.slice(1)};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=(...v)=>v.filter((S,y,s)=>!!S&&S.trim()!==""&&s.indexOf(S)===y).join(" ").trim();/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function wo(v){return v!=null}function Ng(v,S={}){var D,Q;const y=S.attributeNames??{},s=w=>y[w]??w,T=v.size??v.width??vl.width,C=v.size??v.height??vl.height,k=((D=v.aliases)==null?void 0:D.filter(w=>typeof w=="string"&&w.trim()!=="").map(w=>`lucide-${w}`))??[],K=[...v.name?[`lucide-${v.name}`]:[],...k],G=((Q=S.className)==null?void 0:Q.split(" ").filter(Boolean))??[],ut=S.includeDefaultClasses===!1?Co(...G):Co("lucide",...K,...G),O=S.absoluteStrokeWidth?Number(S.strokeWidth??vl["stroke-width"])*Number(v.size??v.width??vl.width)/Number(S.size??S.width??vl.width):S.strokeWidth??vl["stroke-width"];return["svg",{...Object.entries(vl).reduce((w,[Y,tt])=>(w[s(Y)]=tt,w),{}),..."color"in S&&S.color&&{[s("stroke")]:S.color},..."size"in S&&wo(S.size)&&{[s("width")]:S.size,[s("height")]:S.size},..."width"in S&&wo(S.width)&&{[s("width")]:S.width},..."height"in S&&wo(S.height)&&{[s("height")]:S.height},[s("stroke-width")]:O,...ut&&{[s("class")]:ut},[s("viewBox")]:`0 0 ${T} ${C}`,...S.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in S&&S.attributes},v.node.map(w=>{const[Y,tt,Ut]=w,J=S.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...tt}:tt;return Ut?[Y,J,Ut]:[Y,J]})]}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Sg(v,S={}){return Ng(v,{...S,attributeNames:{...S.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=v=>{for(const S in v)if(S.startsWith("aria-")||S==="role"||S==="title")return!0;return!1},zg=ot.createContext({}),Tg=()=>ot.useContext(zg),Eg=ot.forwardRef(({color:v,size:S,width:y,height:s,strokeWidth:T,absoluteStrokeWidth:C,nonScalingStroke:k,className:K="",children:G,iconNode:ut=[],icon:O={node:ut,aliases:[],size:24},...N},D)=>{const{size:Q=24,strokeWidth:w=2,absoluteStrokeWidth:Y=!1,nonScalingStroke:tt=!1,color:Ut="currentColor",className:J=""}=Tg()??{},wt=!!G||jg(N),[Bt,At,kt=[]]=Sg(O,{color:v??Ut,width:y??S??Q,height:s??S??Q,strokeWidth:T??w,absoluteStrokeWidth:C??Y,nonScalingStroke:k??tt,className:Co(J,K),hasA11yProp:wt,attributes:N});return ot.createElement(Bt,{ref:D,...At},[...kt.map(([$,ct])=>ot.createElement($,ct)),...Array.isArray(G)?G:[G]])});/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function P(v,S=[],y=[]){const s=typeof v=="string"?bg(v,S,y):v,T=ot.forwardRef(({className:C,...k},K)=>ot.createElement(Eg,{ref:K,icon:s,className:C,...k}));return s.name&&(T.displayName=yg(s.name)),T}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};xh.node;const Bc=P(xh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh={name:"arrow-up",size:24,node:[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]};bh.node;const vh=P(bh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};yh.node;const wg=P(yh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh={name:"chart-column",size:24,node:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],aliases:["bar-chart-3"]};Nh.node;const _o=P(Nh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};Sh.node;const Cg=P(Sh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};jh.node;const Ag=P(jh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};zh.node;const _g=P(zh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Th.node;const Mo=P(Th);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};Eh.node;const wh=P(Eh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch={name:"circle-x",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-circle"]};Ch.node;const Mg=P(Ch);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};Ah.node;const Og=P(Ah);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};_h.node;const Dg=P(_h);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh={name:"coins",size:24,node:[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48",key:"bq4yh3"}],["path",{d:"M15 6h1v4",key:"11y1tn"}],["path",{d:"m6.134 14.768.866-.5 2 3.464",key:"17snzx"}],["circle",{cx:"16",cy:"8",r:"6",key:"14bfc9"}]]};Mh.node;const Fg=P(Mh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};Oh.node;const Hg=P(Oh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};Dh.node;const Rg=P(Dh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};Fh.node;const Oo=P(Fh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};Hh.node;const Ug=P(Hh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh={name:"link-2",size:24,node:[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]};Rh.node;const Bg=P(Rh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};Uh.node;const kg=P(Uh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};Bh.node;const qg=P(Bh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh={name:"megaphone",size:24,node:[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]]};kh.node;const Gg=P(kh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};qh.node;const Vg=P(qh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};Gh.node;const Yg=P(Gh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};Vh.node;const Xg=P(Vh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};Yh.node;const Do=P(Yh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh={name:"rocket",size:24,node:[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]]};Xh.node;const Qh=P(Xh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};Lh.node;const Zh=P(Lh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};Kh.node;const Qg=P(Kh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh={name:"shield-alert",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]};Jh.node;const Lg=P(Jh);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};$h.node;const Wh=P($h);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};Ih.node;const Zg=P(Ih);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Ph.node;const Kg=P(Ph);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm={name:"table-2",size:24,node:[["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]};tm.node;const Jg=P(tm);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};em.node;const $g=P(em);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am={name:"trending-up",size:24,node:[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]};am.node;const Wg=P(am);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm={name:"trophy",size:24,node:[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]]};lm.node;const Ig=P(lm);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};nm.node;const Pg=P(nm);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};im.node;const t2=P(im);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm={name:"wrench",size:24,node:[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]]};cm.node;const um=P(cm);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};rm.node;const e2=P(rm);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};om.node;const a2=P(om);function l2(){const[v,S]=ot.useState(!1),y=[{name:"Đối tượng",href:"#s03-doi-tuong"},{name:"Vấn đề",href:"#s04-van-de"},{name:"Đầu ra",href:"#s05-dau-ra"},{name:"Bảng giá",href:"#s06-bang-gia"},{name:"Quy trình",href:"#s07-quy-trinh"},{name:"Báo cáo mẫu",href:"#s08-case"},{name:"Giới hạn",href:"#s09-gioi-han"},{name:"FAQ",href:"#s10-faq"}];return c.jsxs("header",{className:"header-root",children:[c.jsxs("div",{className:"container header-container",children:[c.jsxs("a",{href:"#s02-hero",className:"brand-logo-link",children:[c.jsx("img",{src:"/logo.webp",alt:"DUDI SOFTWARE Logo",className:"brand-logo"}),c.jsxs("span",{className:"brand-text",children:["DUDI ",c.jsx("span",{className:"brand-highlight",children:"SOFTWARE"})]})]}),c.jsx("nav",{className:"desktop-nav","aria-label":"Menu chính",children:y.map((s,T)=>c.jsx("a",{href:s.href,className:"nav-link",children:s.name},T))}),c.jsxs("div",{className:"header-actions",children:[c.jsxs("a",{href:"#s11-form",className:"btn btn-primary btn-sm header-cta",children:[c.jsx("span",{children:"Gửi website để nhận đánh giá SEO"}),c.jsx(Bc,{size:14})]}),c.jsx("button",{className:"mobile-menu-toggle",onClick:()=>S(!v),"aria-label":"Đóng/Mở menu điều hướng",children:v?c.jsx(e2,{size:24}):c.jsx(Vg,{size:24})})]})]}),v&&c.jsx("div",{className:"mobile-nav-menu",children:c.jsxs("div",{className:"mobile-nav-inner",children:[y.map((s,T)=>c.jsx("a",{href:s.href,className:"mobile-nav-item",onClick:()=>S(!1),children:s.name},T)),c.jsx("div",{className:"mobile-nav-footer",children:c.jsx("a",{href:"#s11-form",className:"btn btn-primary btn-full",onClick:()=>S(!1),children:"Gửi website để nhận đánh giá SEO"})})]})}),c.jsx("style",{children:`
        .header-root {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-subtle);
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 24px;
          height: 68px;
        }

        .brand-logo-link {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--secondary);
          font-weight: 800;
          font-size: 1.15rem;
          letter-spacing: -0.5px;
          flex-shrink: 0;
        }

        .brand-logo {
          height: 38px;
          width: auto;
          object-fit: contain;
        }

        .brand-highlight {
          color: var(--primary);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 1;
        }

        @media (max-width: 1200px) {
          .desktop-nav {
            gap: 8px;
          }
        }

        @media (max-width: 1040px) {
          .desktop-nav {
            display: none;
          }
        }

        .nav-link {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s ease;
          padding: 6px 6px;
          white-space: nowrap;
          display: inline-block;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .header-cta {
          font-size: 0.88rem;
          padding: 8px 16px;
          white-space: nowrap;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--secondary);
          cursor: pointer;
          padding: 4px;
        }

        @media (max-width: 1040px) {
          .mobile-menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-cta {
            display: none;
          }
        }

        .mobile-nav-menu {
          position: absolute;
          top: 68px;
          left: 0;
          right: 0;
          background: #FFFFFF;
          border-bottom: 2px solid var(--border-subtle);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          padding: 16px 24px;
          z-index: 99;
          animation: slideDown 0.25s ease forwards;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-nav-inner {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mobile-nav-item {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--secondary);
          text-decoration: none;
          padding: 6px 0;
          border-bottom: 1px dashed var(--border-subtle);
        }

        .mobile-nav-item:hover {
          color: var(--primary);
        }

        .mobile-nav-footer {
          margin-top: 12px;
        }

        .btn-full {
          width: 100%;
        }
      `})]})}function n2(){return c.jsxs("section",{id:"s02-hero",className:"hero-banner-section",children:[c.jsx("div",{className:"container hero-inner-container",children:c.jsxs("div",{className:"hero-left-content",children:[c.jsxs("div",{className:"pandora-header-box",children:[c.jsxs("div",{className:"pandora-brand-title",children:["DUDI ",c.jsx("span",{className:"pandora-red-text",children:"SOFTWARE"})]}),c.jsxs("div",{className:"pandora-seo-line",children:[c.jsx("span",{className:"pandora-glow-badge",children:"SEO"}),c.jsx("span",{className:"pandora-sub-text",children:"WEBSITE"})]})]}),c.jsx("h1",{className:"hero-main-desc",children:"Dịch vụ SEO website theo tháng chuẩn kỹ thuật"}),c.jsx("p",{className:"hero-packages-sub",children:"Gói Cơ bản • Tiêu chuẩn • Cao cấp (Từ 4.000.000 đ/tháng)"}),c.jsxs("div",{className:"hero-cta-group",children:[c.jsxs("a",{href:"#s11-form",className:"btn btn-primary btn-hero-main",children:[c.jsx("span",{children:"Gửi website để nhận đánh giá SEO"}),c.jsx(Bc,{size:18})]}),c.jsx("a",{href:"#s06-bang-gia",className:"btn btn-hero-secondary",children:c.jsx("span",{children:"Xem 3 gói dịch vụ"})})]})]})}),c.jsx("style",{children:`
        .hero-banner-section {
          position: relative;
          min-height: calc(100vh - 68px);
          display: flex;
          align-items: center;
          background-image: url('/hero-bg.webp');
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
          overflow: hidden;
          padding: 32px 24px;
          box-sizing: border-box;
        }

        .hero-inner-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
        }

        .hero-left-content {
          position: relative;
          max-width: 650px;
          padding: 16px 12px;
          background: transparent;
          border: none;
          box-shadow: none;
        }

        /* Hiệu ứng loang ánh sáng mờ tự nhiên phía sau chữ */
        .hero-left-content::before {
          content: '';
          position: absolute;
          top: -25%;
          left: -25%;
          width: 150%;
          height: 150%;
          background: radial-gradient(ellipse at 40% 50%, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.65) 42%, rgba(255, 255, 255, 0.15) 72%, transparent 100%);
          filter: blur(28px);
          z-index: -1;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .hero-left-content {
            padding: 16px 0;
            max-width: 100%;
          }
          .hero-left-content::before {
            width: 160%;
            height: 160%;
            background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, 0.2) 80%, transparent 100%);
            filter: blur(20px);
          }
        }

        /* Pandora Style Sci-Fi Typography */
        .pandora-header-box {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        .pandora-brand-title {
          font-family: 'Orbitron', 'Audiowide', 'Michroma', 'Syncopate', sans-serif;
          font-size: clamp(1.5rem, 2.5vw, 2.2rem);
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #0F172A;
          line-height: 1.2;
          white-space: nowrap;
          text-shadow: 0 0 16px rgba(255, 255, 255, 0.9), 0 2px 4px rgba(0, 0, 0, 0.12);
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          gap: 10px;
        }

        .pandora-red-text {
          color: #D32F2F;
          text-shadow: 0 0 16px rgba(239, 68, 68, 0.35), 0 0 8px rgba(255, 255, 255, 0.8);
        }

        .pandora-seo-line {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .pandora-glow-badge {
          font-family: 'Orbitron', 'Audiowide', sans-serif;
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          background: linear-gradient(135deg, #EF4444 0%, #B91C1C 100%);
          color: #FFFFFF;
          padding: 3px 12px;
          border-radius: 6px;
          box-shadow: 0 4px 14px rgba(239, 68, 68, 0.4);
        }

        .pandora-sub-text {
          font-family: 'Orbitron', 'Audiowide', sans-serif;
          font-size: clamp(1.1rem, 1.8vw, 1.45rem);
          font-weight: 800;
          letter-spacing: 0.22em;
          color: #1E293B;
          text-shadow: 0 0 14px rgba(255, 255, 255, 0.9);
        }

        .hero-main-desc {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.1rem, 1.5vw, 1.3rem);
          font-weight: 700;
          color: #0F172A;
          line-height: 1.35;
          margin-bottom: 6px;
          text-shadow: 0 0 14px rgba(255, 255, 255, 0.95), 0 1px 2px rgba(0, 0, 0, 0.08);
        }

        .hero-packages-sub {
          font-size: 0.92rem;
          font-weight: 600;
          color: #334155;
          margin-bottom: 18px;
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.9);
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .btn-hero-main {
          padding: 13px 26px;
          font-size: clamp(0.82rem, 1.2vw, 0.95rem);
          font-weight: 700;
          border-radius: 10px;
          box-shadow: 0 6px 18px rgba(211, 47, 47, 0.35);
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .btn-hero-main span {
          white-space: nowrap;
        }

        .btn-hero-secondary {
          padding: 13px 22px;
          font-size: 0.92rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          color: #0F172A;
          border: 1.5px solid rgba(203, 213, 225, 0.8);
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          transition: all 0.2s ease;
        }

        .btn-hero-secondary:hover {
          border-color: #D32F2F;
          color: #D32F2F;
          transform: translateY(-1px);
        }

        @media (max-width: 640px) {
          .hero-banner-section {
            padding: 40px 16px;
            min-height: auto;
          }
          .pandora-brand-title {
            font-size: 1.25rem;
            letter-spacing: 0.1em;
            gap: 6px;
          }
          .pandora-sub-text {
            font-size: 1rem;
            letter-spacing: 0.12em;
          }
          .hero-cta-group {
            flex-direction: column;
            align-items: stretch;
          }
          .btn-hero-main, .btn-hero-secondary {
            text-align: center;
            justify-content: center;
          }
        }
      `})]})}function i2({onSelectPackage:v}){const S=[{badge:"Gói Cơ bản",target:"Website mới hoặc chưa có nền SEO",needs:"Cần kiểm tra lỗi index chính, tối ưu On-page cơ bản (title, meta, heading) và xây dựng 2 - 4 bài viết chuẩn SEO mỗi tháng.",keywords:"5 đến 10 từ khóa ưu tiên",suggestedPackage:"Cơ bản",price:"4.000.000 đ/tháng",anchor:"#s06-bang-gia"},{badge:"Gói Tiêu chuẩn",target:"Doanh nghiệp cần tăng traffic đều",needs:"Cần nghiên cứu ý định tìm kiếm và đối thủ, audit kỹ thuật cơ bản, sản xuất 6 - 10 bài viết chuyên sâu và thiết lập theo dõi GSC/GA4.",keywords:"10 đến 30 từ khóa ưu tiên",suggestedPackage:"Tiêu chuẩn",price:"12.000.000 đ/tháng",anchor:"#s06-bang-gia",featured:!0},{badge:"Gói Cao cấp",target:"Thị trường cạnh tranh và nhiều nhóm dịch vụ",needs:"Cần nghiên cứu cụm chủ đề chuyên sâu, audit theo cụm trang & chuyển đổi, 10 - 20 bài viết/tháng, phân tích funnel và họp chiến lược 60 phút.",keywords:"30 đến 60 từ khóa ưu tiên",suggestedPackage:"Cao cấp",price:"25.000.000 đ/tháng",anchor:"#s06-bang-gia"}];return c.jsxs("section",{id:"s03-doi-tuong",className:"section-wrapper bg-alt",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-center",children:[c.jsx("div",{className:"section-badge",children:"ĐỐI TƯỢNG KHÁCH HÀNG"}),c.jsx("h2",{className:"section-title",children:"Đối tượng phù hợp"}),c.jsx("p",{className:"section-desc",children:"Giúp doanh nghiệp tự nhận diện đúng nhu cầu hiện tại và lựa chọn gói dịch vụ tối ưu nhất."})]}),c.jsx("div",{className:"audience-grid",children:S.map((y,s)=>c.jsxs("div",{className:`custom-card audience-card reveal-flip stagger-${s+1} ${y.featured?"featured-card":""}`,children:[c.jsxs("div",{className:"card-badge-row",children:[c.jsx("span",{className:"group-badge",children:y.badge}),c.jsx("span",{className:"group-price",children:y.price})]}),c.jsx("h3",{className:"group-target-title",children:y.target}),c.jsx("p",{className:"group-needs-desc",children:y.needs}),c.jsxs("div",{className:"group-kw-box",children:[c.jsx(Mo,{size:16,color:"#D32F2F"}),c.jsx("span",{children:y.keywords})]}),c.jsx("div",{className:"card-bottom-action",children:c.jsxs("a",{href:"#s06-bang-gia",onClick:()=>v&&v(y.suggestedPackage),className:`btn ${y.featured?"btn-primary":"btn-outline"} btn-full`,children:[c.jsxs("span",{children:["Xem chi tiết gói ",y.suggestedPackage]}),c.jsx(Bc,{size:14})]})})]},s))})]}),c.jsx("style",{children:`
        .audience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 12px;
        }

        @media (max-width: 992px) {
          .audience-grid {
            grid-template-columns: 1fr;
          }
        }

        .audience-card {
          display: flex;
          flex-direction: column;
          background: #FFFFFF;
          border-radius: 14px;
          padding: 20px 22px;
        }

        .featured-card {
          border: 2px solid var(--primary);
          box-shadow: 0 8px 20px rgba(211, 47, 47, 0.1);
        }

        .card-badge-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .group-badge {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--primary);
          background: var(--primary-light);
          padding: 3px 8px;
          border-radius: 999px;
        }

        .group-price {
          font-size: 0.88rem;
          font-weight: 800;
          color: var(--secondary);
        }

        .group-target-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--secondary);
          line-height: 1.3;
          margin-bottom: 8px;
          min-height: 42px;
        }

        .group-needs-desc {
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.45;
          margin-bottom: 14px;
          flex-grow: 1;
        }

        .group-kw-box {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #FFF8F8;
          border: 1px dashed #FECDD3;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #991B1B;
          margin-bottom: 14px;
        }

        .card-bottom-action {
          margin-top: auto;
        }
        
        .btn-full {
          width: 100%;
          padding: 9px 12px;
          font-size: 0.84rem;
        }
      `})]})}function c2(){const v=[{image:"/problem-1.webp",title:"Website không index hoặc lỗi kỹ thuật",bullets:["Google thu thập dữ liệu bị gián đoạn, lỗi crawl","Thiếu sitemap, lỗi thẻ canonical hoặc redirect","Tốc độ tải chậm, trùng lặp nội dung trang"]},{image:"/problem-2.webp",title:"Nội dung rời rạc, thiếu định hướng",bullets:["Sản xuất bài viết không theo cụm chủ đề","Chưa bám sát ý định tìm kiếm của khách","Bài viết thiếu chiều sâu, không giữ chân người đọc"]},{image:"/problem-3.webp",title:"Traffic không đúng tệp khách hàng",bullets:["Nhắm sai nhóm từ khóa mục tiêu kinh doanh","Lượng truy cập tăng nhưng không tạo ra lead","Thiếu các trang đích (Landing Pages) chuyển đổi"]},{image:"/problem-4.webp",title:"Chưa đo lường và tối ưu chuyển đổi",bullets:["Chưa thiết lập theo dõi sự kiện trên GSC & GA4","Thiếu dữ liệu đo lường hành vi người dùng","Không có số liệu chính xác để cải tiến định kỳ"]}];return c.jsxs("section",{id:"s04-van-de",className:"section-wrapper bg-alt",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-center",children:[c.jsx("div",{className:"section-badge",children:"VẤN ĐỀ THỰC TẾ"}),c.jsx("h2",{className:"section-title",children:"Các tình trạng thực tế doanh nghiệp thường gặp"}),c.jsx("p",{className:"section-desc",children:"Nhận diện chính xác các rào cản kỹ thuật và nội dung đang ảnh hưởng trực tiếp đến hiệu quả hiển thị của website."})]}),c.jsx("div",{className:"problems-arched-grid",children:v.map((S,y)=>c.jsxs("div",{className:`arched-problem-card reveal-up stagger-${y+1}`,children:[c.jsxs("div",{className:"arched-card-header",children:[c.jsx("div",{className:"arched-top-pill"}),c.jsx("div",{className:"arched-img-wrap",children:c.jsx("img",{src:S.image,alt:S.title,className:"arched-robot-img"})}),c.jsx("h3",{className:"arched-card-title",children:S.title}),c.jsx("div",{className:"arched-bottom-curve"})]}),c.jsx("div",{className:"arched-card-body",children:c.jsx("ul",{className:"arched-bullets-list",children:S.bullets.map((s,T)=>c.jsxs("li",{className:"arched-bullet-item",children:[c.jsx("span",{className:"arched-bullet-dot"}),c.jsx("span",{className:"arched-bullet-text",children:s})]},T))})})]},y))})]}),c.jsx("style",{children:`
        .problems-arched-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-top: 10px;
        }

        @media (max-width: 1024px) {
          .problems-arched-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 600px) {
          .problems-arched-grid {
            grid-template-columns: 1fr;
          }
        }

        .arched-problem-card {
          background: #FBFBFB;
          border-radius: 20px;
          border: 1px solid #E2E8F0;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          transition: all 0.25s ease;
        }

        .arched-problem-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(211, 47, 47, 0.12);
          border-color: #FECDD3;
        }

        /* Top Header - Exact #FBFBFB Background to match images */
        .arched-card-header {
          position: relative;
          background: #FBFBFB;
          padding: 6px 6px 18px 6px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .arched-top-pill {
          width: 44px;
          height: 5px;
          background: linear-gradient(90deg, #F97316 0%, #EF4444 100%);
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          margin-bottom: 4px;
        }

        .arched-img-wrap {
          width: 100%;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
          overflow: hidden;
        }

        .arched-robot-img {
          width: 100%;
          height: 100%;
          max-height: 140px;
          object-fit: contain;
          border-radius: 0;
          transition: transform 0.25s ease;
        }

        .arched-problem-card:hover .arched-robot-img {
          transform: scale(1.05);
        }

        .arched-card-title {
          font-size: clamp(0.76rem, 1.05vw, 0.82rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.25;
          min-height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 2px;
          white-space: nowrap;
          letter-spacing: -0.015em;
        }

        @media (max-width: 600px) {
          .arched-card-title {
            white-space: normal;
          }
        }

        /* Bottom Curved Arc Divider */
        .arched-bottom-curve {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 10px;
          background: #1D2735;
          border-top-left-radius: 50% 10px;
          border-top-right-radius: 50% 10px;
          border-top: 2px solid #F97316;
        }

        /* Bottom Body - Slate Navy #1D2735 */
        .arched-card-body {
          padding: 16px 14px 18px 14px;
          background: #1D2735;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .arched-bullets-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .arched-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.4;
        }

        .arched-bullet-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, #F97316 0%, #EF4444 100%);
          flex-shrink: 0;
          margin-top: 4px;
          box-shadow: 0 2px 4px rgba(239, 68, 68, 0.35);
        }

        .arched-bullet-text {
          flex-grow: 1;
        }
      `})]})}function u2(){const v=[{step:"01",title:"Kế hoạch từ khóa ưu tiên",desc:"Danh sách truy vấn theo dõi (từ 5 đến 60 từ khóa tùy gói) bám sát ý định tìm kiếm và sản phẩm/dịch vụ cốt lõi.",icon:c.jsx(Qh,{size:28,className:"cyber-icon"})},{step:"02",title:"Bài viết SEO theo brief",desc:"Sản xuất từ 2 đến 20 bài/tháng (800 - 1500+ từ), có cấu trúc heading, nguồn uy tín và 1 vòng sửa đổi.",icon:c.jsx(Oo,{size:28,className:"cyber-icon"})},{step:"03",title:"Tối ưu On-page & Content",desc:"Chuẩn hóa Title, Meta description, cấu trúc H1-H3, liên kết nội bộ và tối ưu trang đích theo chuyển đổi.",icon:c.jsx(Kg,{size:28,className:"cyber-icon"})},{step:"04",title:"Audit & Sửa lỗi kỹ thuật",desc:"Kiểm tra và xử lý lỗi index, crawl, file sitemap, canonical, chuyển hướng redirect và tốc độ tải trang.",icon:c.jsx(Rg,{size:28,className:"cyber-icon"})},{step:"05",title:"Báo cáo minh bạch tháng",desc:"Tách bạch rõ ràng giữa khối lượng hoàn thành, dữ liệu thực tế từ GSC/GA4 và các đề xuất tối ưu tháng tới.",icon:c.jsx(_o,{size:28,className:"cyber-icon"})},{step:"06",title:"Họp đánh giá định kỳ",desc:"Tổ chức họp báo cáo 30 - 60 phút mỗi tháng cùng chuyên gia để đối soát kết quả và thống nhất kế hoạch.",icon:c.jsx(t2,{size:28,className:"cyber-icon"})}],S=[...v,...v,...v,...v],y=ot.useRef(null),s=ot.useRef(0),T=ot.useRef(!1),C=ot.useRef(0),k=ot.useRef(0),K=ot.useRef(0),G=ot.useRef(!1),[ut,O]=ot.useState(!1);ot.useEffect(()=>{let J;const wt=()=>{if(y.current){const At=y.current.scrollWidth/4;if(!T.current){K.current*=.94;const kt=Math.abs(K.current)<.05,$=G.current?0:.95,ct=kt?$:K.current+(G.current?0:$*.3);if(s.current+=ct,At>0){for(;s.current>=At;)s.current-=At;for(;s.current<0;)s.current+=At}}y.current.style.transform=`translate3d(${-s.current}px, 0, 0)`}J=requestAnimationFrame(wt)};return J=requestAnimationFrame(wt),()=>cancelAnimationFrame(J)},[]);const N=J=>{T.current=!0,O(!0),C.current=J.clientX,k.current=performance.now(),K.current=0},D=J=>{if(!T.current)return;const wt=performance.now(),Bt=J.clientX-C.current,At=Math.max(1,wt-k.current);s.current-=Bt,K.current=-(Bt/At)*18,C.current=J.clientX,k.current=wt},Q=()=>{T.current=!1,O(!1)},w=J=>{J.touches.length===1&&(T.current=!0,O(!0),C.current=J.touches[0].clientX,k.current=performance.now(),K.current=0)},Y=J=>{if(!T.current||J.touches.length!==1)return;const wt=performance.now(),Bt=J.touches[0].clientX,At=Bt-C.current,kt=Math.max(1,wt-k.current);s.current-=At,K.current=-(At/kt)*18,C.current=Bt,k.current=wt},tt=()=>{T.current=!1,O(!1)},Ut=J=>{const wt=Math.abs(J.deltaX)>Math.abs(J.deltaY)?J.deltaX:J.deltaY;Math.abs(wt)>1&&(K.current+=wt*.12,K.current=Math.max(-28,Math.min(28,K.current)))};return c.jsxs("section",{id:"s05-dau-ra",className:"section-wrapper cyber-deliverables-section overflow-hidden",children:[c.jsx("div",{className:"container",children:c.jsxs("div",{className:"cyber-sec-header",children:[c.jsx("div",{className:"cyber-badge",children:"HẠNG MỤC & ĐẦU RA BÀN GIAO"}),c.jsx("h2",{className:"cyber-section-title",children:"Đầu ra dịch vụ & Hạng mục doanh nghiệp nhận được"}),c.jsx("p",{className:"cyber-section-desc",children:"Mọi hạng mục công việc đều được định lượng rõ ràng về số lượng, tiêu chuẩn chất lượng và mốc bàn giao hàng tháng."})]})}),c.jsx("div",{className:`cyber-marquee-wrapper ${ut?"is-grabbing":""}`,onMouseEnter:()=>{G.current=!0},onMouseLeave:()=>{G.current=!1,T.current&&Q()},onMouseDown:N,onMouseMove:D,onMouseUp:Q,onTouchStart:w,onTouchMove:Y,onTouchEnd:tt,onWheel:Ut,children:c.jsx("div",{ref:y,className:"cyber-marquee-track",children:S.map((J,wt)=>c.jsxs(gh.Fragment,{children:[c.jsxs("div",{className:"cyber-card",children:[c.jsx("div",{className:"card-glow-left"}),c.jsx("div",{className:"card-glow-right"}),c.jsx("div",{className:"cyber-notch",children:c.jsx("div",{className:"notch-outer-ring",children:c.jsx("div",{className:"notch-inner-ring",children:c.jsx("span",{className:"notch-number",children:J.step.replace(/^0/,"")})})})}),c.jsxs("div",{className:"cyber-card-body",children:[c.jsx("div",{className:"cyber-icon-wrap",children:J.icon}),c.jsx("h3",{className:"cyber-card-title",children:J.title}),c.jsx("p",{className:"cyber-card-desc",children:J.desc})]})]}),c.jsxs("div",{className:"cyber-connector",children:[c.jsx("div",{className:"connector-line"}),c.jsx("div",{className:"connector-dot",children:c.jsx("div",{className:"dot-inner"})}),c.jsx("div",{className:"connector-line"})]})]},wt))})}),c.jsx("style",{children:`
        .cyber-deliverables-section {
          position: relative;
          background-color: #070D18;
          background-image: 
            radial-gradient(circle at 50% 15%, rgba(56, 189, 248, 0.14) 0%, transparent 55%),
            radial-gradient(circle at 85% 75%, rgba(239, 68, 68, 0.08) 0%, transparent 45%),
            radial-gradient(circle at 15% 85%, rgba(56, 189, 248, 0.07) 0%, transparent 45%),
            linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 100% 100%, 36px 36px, 36px 36px;
          padding: 60px 0 50px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          user-select: none;
        }

        .cyber-sec-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 12px auto;
        }

        .cyber-badge {
          display: inline-block;
          font-family: 'Chakra Petch', sans-serif;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: #38BDF8;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.3);
          padding: 4px 14px;
          border-radius: 9999px;
          margin-bottom: 10px;
          box-shadow: 0 0 14px rgba(56, 189, 248, 0.2);
        }

        .cyber-section-title {
          font-family: 'Chakra Petch', 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.4rem, 2.4vw, 1.95rem);
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.6);
        }

        .cyber-section-desc {
          font-size: 0.88rem;
          color: #94A3B8;
          line-height: 1.55;
          margin: 0 auto;
        }

        .cyber-marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 40px 0 26px 0;
          margin-top: 6px;
          margin-bottom: 6px;
          cursor: grab;
          mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
          touch-action: pan-y;
        }

        .cyber-marquee-wrapper.is-grabbing {
          cursor: grabbing;
        }

        .cyber-marquee-track {
          display: flex;
          align-items: center;
          gap: 0;
          width: max-content;
          will-change: transform;
        }

        /* Futuristic Cyber Card Structure */
        .cyber-card {
          position: relative;
          flex: 0 0 280px;
          width: 280px;
          background: linear-gradient(180deg, #132034 0%, #0B1322 100%);
          border: 1px solid rgba(56, 189, 248, 0.25);
          border-radius: 24px;
          padding: 46px 20px 24px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.55), inset 0 0 20px rgba(56, 189, 248, 0.05);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          pointer-events: auto;
        }

        .cyber-card:hover {
          transform: translateY(-6px);
          border-color: rgba(56, 189, 248, 0.75);
          box-shadow: 0 22px 50px rgba(56, 189, 248, 0.22), 0 0 35px rgba(56, 189, 248, 0.3), inset 0 0 24px rgba(56, 189, 248, 0.1);
        }

        /* Lateral Neon Glow Stripes */
        .card-glow-left, .card-glow-right {
          position: absolute;
          top: 25%;
          height: 50%;
          width: 2px;
          border-radius: 2px;
          pointer-events: none;
        }

        .card-glow-left {
          left: -1px;
          background: linear-gradient(180deg, transparent, #38BDF8 50%, transparent);
          box-shadow: -2px 0 14px #38BDF8;
        }

        .card-glow-right {
          right: -1px;
          background: linear-gradient(180deg, transparent, #38BDF8 50%, transparent);
          box-shadow: 2px 0 14px #38BDF8;
        }

        /* Top Notch with Concentric Rings */
        .cyber-notch {
          position: absolute;
          top: -24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
        }

        .notch-outer-ring {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(180deg, #38BDF8 0%, #1E3A5F 100%);
          padding: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 18px rgba(56, 189, 248, 0.5);
        }

        .notch-inner-ring {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #0B1321;
          border: 2px solid rgba(56, 189, 248, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .notch-number {
          font-family: 'Chakra Petch', sans-serif;
          font-size: 1.15rem;
          font-weight: 800;
          color: #FFFFFF;
          text-shadow: 0 0 10px rgba(56, 189, 248, 0.85);
        }

        /* Body Elements */
        .cyber-card-body {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cyber-icon-wrap {
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 12px rgba(56, 189, 248, 0.6));
          transition: transform 0.3s ease;
        }

        .cyber-card:hover .cyber-icon-wrap {
          transform: scale(1.12);
        }

        .cyber-icon {
          color: #38BDF8;
        }

        .cyber-card-title {
          font-family: 'Chakra Petch', 'Plus Jakarta Sans', sans-serif;
          font-size: 0.96rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 8px;
          line-height: 1.35;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        .cyber-card-desc {
          font-size: 0.78rem;
          color: #94A3B8;
          line-height: 1.5;
          margin: 0;
        }

        /* Cyber Connecting Node */
        .cyber-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 12px;
          opacity: 0.85;
          flex-shrink: 0;
        }

        .connector-line {
          width: 16px;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, #38BDF8, transparent);
        }

        .connector-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 1.5px solid #38BDF8;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.7);
        }

        .dot-inner {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #FFFFFF;
          box-shadow: 0 0 6px #38BDF8;
        }

        @media (max-width: 640px) {
          .cyber-card {
            flex: 0 0 250px;
            width: 250px;
            padding: 40px 16px 20px 16px;
          }
          .cyber-connector {
            padding: 0 6px;
          }
        }
      `})]})}function r2({onSelectPackage:v}){const[S,y]=ot.useState("cards"),s=[{id:"co-ban",name:"Cơ bản",suitable:"Website mới hoặc chưa có nền SEO",price:"4.000.000",unit:"đ/tháng",oldPrice:"5.500.000 đ",icon:c.jsx(Pg,{size:22,className:"pkg-top-icon"}),featured:!1,ctaText:"Chọn gói Cơ bản",keywordsSpec:"5 đến 10 từ khóa ưu tiên",features:["2 đến 4 bài viết chuẩn SEO/tháng (800-1200 từ)","Tối ưu Title, meta, heading & sửa lỗi index chính","Cài đặt Google Search Console & kết nối Analytics","Báo cáo hiệu suất tóm tắt hàng tháng","Thời hạn đề xuất: Tối thiểu 3 tháng"]},{id:"tieu-chuan",name:"Tiêu chuẩn",suitable:"Doanh nghiệp cần tăng traffic đều",price:"12.000.000",unit:"đ/tháng",oldPrice:"15.000.000 đ",icon:c.jsx(a2,{size:22,className:"pkg-top-icon"}),featured:!0,badge:"PHỔ BIẾN NHẤT",ctaText:"Chọn gói Tiêu chuẩn",keywordsSpec:"10 đến 30 từ khóa ưu tiên",features:["6 đến 10 bài viết chuẩn SEO/tháng (1000-1500 từ)","Tối ưu trang đích, audit kỹ thuật & sửa theo hạn mức","Phân tích đo lường chuyên sâu GSC & GA4","Báo cáo chi tiết & họp chuyên môn định kỳ 30 phút","Thời hạn đề xuất: Tối thiểu 6 tháng"]},{id:"cao-cap",name:"Cao cấp",suitable:"Thị trường cạnh tranh & nhiều dịch vụ",price:"25.000.000",unit:"đ/tháng",oldPrice:"30.000.000 đ",icon:c.jsx(Ig,{size:22,className:"pkg-top-icon"}),featured:!1,ctaText:"Chọn gói Cao cấp",keywordsSpec:"30 đến 60 từ khóa ưu tiên",features:["10 đến 20 bài viết/tháng theo Content Brief sâu","Audit cụm trang, tối ưu chuyển đổi & backlog kỹ thuật","Theo dõi funnel chuyển đổi sự kiện GA4 & GSC sâu","Báo cáo phân tích chuyên sâu & họp tư vấn 60 phút","Thời hạn đề xuất: Tối thiểu 6 tháng"]}],T=C=>{v&&v(C)};return c.jsxs("section",{id:"s06-bang-gia",className:"section-wrapper bg-white",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-center",children:[c.jsx("div",{className:"section-badge",children:"BẢNG GIÁ MINH BẠCH"}),c.jsx("h2",{className:"section-title",children:"3 Gói dịch vụ & Bảng so sánh phạm vi"}),c.jsx("p",{className:"section-desc",children:"Từ khóa là nhóm theo dõi ưu tiên. Số bài thực tế được chốt theo kế hoạch tháng."}),c.jsxs("div",{className:"tab-switcher",style:{margin:"14px auto 0 auto",width:"fit-content"},children:[c.jsxs("button",{className:`tab-btn ${S==="cards"?"active":""}`,onClick:()=>y("cards"),children:[c.jsx(Ug,{size:16}),c.jsx("span",{children:"3 Thẻ gói"})]}),c.jsxs("button",{className:`tab-btn ${S==="table"?"active":""}`,onClick:()=>y("table"),children:[c.jsx(Jg,{size:16}),c.jsx("span",{children:"Bảng so sánh chi tiết"})]})]})]}),S==="cards"&&c.jsx("div",{className:"ref-pricing-grid tab-fade-in",children:s.map(C=>c.jsxs("div",{className:`ref-price-card ${C.featured?"is-featured":"is-standard"}`,children:[C.featured&&C.badge&&c.jsx("div",{className:"ref-featured-badge",children:C.badge}),c.jsx("div",{className:"ref-icon-wrap",children:C.icon}),c.jsx("h3",{className:"ref-pkg-name",children:C.name}),c.jsx("p",{className:"ref-pkg-sub",children:C.suitable}),c.jsxs("div",{className:"ref-price-row",children:[c.jsx("span",{className:"ref-price-num",children:C.price}),c.jsx("span",{className:"ref-price-unit",children:C.unit})]}),c.jsx("a",{href:"#s11-form",onClick:()=>T(C.name),className:`btn ref-cta-btn ${C.featured?"btn-featured-orange":"btn-outline-red"}`,children:c.jsx("span",{children:C.ctaText})}),c.jsxs("div",{className:"ref-spec-row",children:[c.jsx($g,{size:16,className:"spec-icon"}),c.jsx("span",{className:"spec-text",children:C.keywordsSpec})]}),c.jsx("div",{className:"ref-dotted-divider"}),c.jsx("ul",{className:"ref-feature-list",children:C.features.map((k,K)=>c.jsxs("li",{className:"ref-feature-item",children:[c.jsx(Mo,{size:16,className:"check-icon"}),c.jsx("span",{className:"feat-text",children:k})]},K))})]},C.id))}),S==="table"&&c.jsx("div",{className:"table-container tab-fade-in",children:c.jsxs("table",{className:"custom-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{style:{width:"22%"},children:"Hạng mục"}),c.jsx("th",{style:{width:"26%"},children:"Cơ bản (4.000.000 đ/tháng)"}),c.jsx("th",{style:{width:"26%",background:"#FEE2E2",color:"#991B1B"},children:"Tiêu chuẩn (12.000.000 đ/tháng)"}),c.jsx("th",{style:{width:"26%"},children:"Cao cấp (25.000.000 đ/tháng)"})]})}),c.jsxs("tbody",{children:[c.jsxs("tr",{children:[c.jsx("td",{className:"highlight-cell",children:"Phù hợp"}),c.jsx("td",{children:"Website mới hoặc chưa có nền SEO"}),c.jsx("td",{style:{background:"#FFFDFD"},children:"Doanh nghiệp cần tăng traffic đều"}),c.jsx("td",{children:"Thị trường cạnh tranh & nhiều dịch vụ"})]}),c.jsxs("tr",{children:[c.jsx("td",{className:"highlight-cell",children:"Từ khóa ưu tiên"}),c.jsx("td",{children:"5 đến 10 từ khóa"}),c.jsx("td",{style:{background:"#FFFDFD"},children:"10 đến 30 từ khóa"}),c.jsx("td",{children:"30 đến 60 từ khóa"})]}),c.jsxs("tr",{children:[c.jsx("td",{className:"highlight-cell",children:"Nghiên cứu"}),c.jsx("td",{children:"Nhóm chủ đề cơ bản"}),c.jsx("td",{style:{background:"#FFFDFD"},children:"Ý định tìm kiếm & đối thủ"}),c.jsx("td",{children:"Chuyên sâu theo cụm chủ đề"})]}),c.jsxs("tr",{children:[c.jsx("td",{className:"highlight-cell",children:"Bài viết / tháng"}),c.jsx("td",{children:"2 đến 4 bài/tháng"}),c.jsx("td",{style:{background:"#FFFDFD"},children:"6 đến 10 bài/tháng"}),c.jsx("td",{children:"10 đến 20 bài/tháng"})]}),c.jsxs("tr",{children:[c.jsx("td",{className:"highlight-cell",children:"Độ dài tham khảo"}),c.jsx("td",{children:"800 đến 1200 từ"}),c.jsx("td",{style:{background:"#FFFDFD"},children:"1000 đến 1500 từ"}),c.jsx("td",{children:"Theo brief & mục đích tìm kiếm"})]}),c.jsxs("tr",{children:[c.jsx("td",{className:"highlight-cell",children:"On-page"}),c.jsx("td",{children:"Title, meta, heading & liên kết"}),c.jsx("td",{style:{background:"#FFFDFD"},children:"Tối ưu trang đích & nội dung"}),c.jsx("td",{children:"Audit cụm trang & chuyển đổi"})]}),c.jsxs("tr",{children:[c.jsx("td",{className:"highlight-cell",children:"SEO kỹ thuật"}),c.jsx("td",{children:"Kiểm tra lỗi index chính"}),c.jsx("td",{style:{background:"#FFFDFD"},children:"Audit cơ bản & sửa trong hạn mức"}),c.jsx("td",{children:"Audit nâng cao & backlog kỹ thuật"})]}),c.jsxs("tr",{children:[c.jsx("td",{className:"highlight-cell",children:"Backlink"}),c.jsx("td",{children:"Không"}),c.jsx("td",{style:{background:"#FFFDFD"},children:"Đề xuất & duyệt từng nguồn"}),c.jsx("td",{children:"Kế hoạch off-page riêng, duyệt nguồn"})]}),c.jsxs("tr",{children:[c.jsx("td",{className:"highlight-cell",children:"Search Console & GA4"}),c.jsx("td",{children:"Thiết lập GSC & gắn GA"}),c.jsx("td",{style:{background:"#FFFDFD"},children:"Thiết lập, theo dõi & báo cáo"}),c.jsx("td",{children:"Theo dõi, phân tích sâu, funnel sự kiện"})]}),c.jsxs("tr",{children:[c.jsx("td",{className:"highlight-cell",children:"Báo cáo & Họp"}),c.jsx("td",{children:"Tóm tắt tháng"}),c.jsx("td",{style:{background:"#FFFDFD"},children:"Báo cáo & họp 30 phút"}),c.jsx("td",{children:"Báo cáo, phân tích & họp 60 phút"})]}),c.jsxs("tr",{children:[c.jsx("td",{className:"highlight-cell",children:"Thời hạn đề xuất"}),c.jsx("td",{children:"Tối thiểu 3 tháng"}),c.jsx("td",{style:{background:"#FFFDFD"},children:"Tối thiểu 6 tháng"}),c.jsx("td",{children:"Tối thiểu 6 tháng"})]})]})]})}),c.jsxs("div",{className:"doc-notes-strip",children:[c.jsx("span",{className:"doc-notes-tag",children:"Ngoài phạm vi:"}),c.jsx("span",{children:"Ngân sách quảng cáo, phí backlink/báo chí ngoài, dịch thuật, chụp ảnh, tính năng mới web, hosting & cam kết thứ hạng/doanh thu."})]})]}),c.jsx("style",{children:`
        .pkg-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .mb-0 {
          margin-bottom: 0 !important;
        }

        .tab-switcher {
          display: flex;
          background: #F1F5F9;
          padding: 4px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
          gap: 4px;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border: none;
          background: transparent;
          color: var(--text-muted);
          font-weight: 700;
          font-size: 0.82rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .tab-btn.active {
          background: #FFFFFF;
          color: var(--primary);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        }

        .tab-fade-in {
          animation: tabFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes tabFadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* 3-Card Reference Grid */
        .ref-pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-bottom: 20px;
          align-items: stretch;
        }

        @media (max-width: 992px) {
          .ref-pricing-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Individual Card Container */
        .ref-price-card {
          position: relative;
          border-radius: 20px;
          padding: 24px 22px;
          display: flex;
          flex-direction: column;
          transition: all 0.25s ease;
        }

        /* Standard Red Accent Cards (Cơ bản & Cao cấp) */
        .ref-price-card.is-standard {
          background: #FFFFFF;
          border: 1px solid #FECDD3;
          box-shadow: 0 4px 20px rgba(211, 47, 47, 0.06);
        }

        .ref-price-card.is-standard:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(211, 47, 47, 0.14);
          border-color: #EF4444;
        }

        .ref-price-card.is-standard .ref-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #FEE2E2;
          color: #DC2626;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.18);
        }

        .ref-price-card.is-standard .ref-pkg-name {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 4px;
          line-height: 1.25;
        }

        .ref-price-card.is-standard .ref-pkg-sub {
          font-size: 0.82rem;
          color: #64748B;
          margin-bottom: 14px;
          line-height: 1.4;
        }

        .ref-price-card.is-standard .ref-price-num {
          font-size: 1.85rem;
          font-weight: 900;
          color: #D32F2F;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .ref-price-card.is-standard .ref-price-unit {
          font-size: 0.85rem;
          color: #DC2626;
          font-weight: 600;
          margin-left: 5px;
        }

        .ref-price-card.is-standard .spec-icon {
          color: #DC2626;
        }

        .ref-price-card.is-standard .spec-text {
          color: #1E293B;
          font-weight: 700;
        }

        .ref-price-card.is-standard .ref-dotted-divider {
          border-top: 1px dashed #FECDD3;
        }

        .ref-price-card.is-standard .check-icon {
          color: #DC2626;
        }

        .ref-price-card.is-standard .feat-text {
          color: #334155;
        }

        /* Middle Featured Dark Navy Card */
        .ref-price-card.is-featured {
          background: linear-gradient(180deg, #182335 0%, #0E1724 100%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.4);
          color: #FFFFFF;
        }

        .ref-price-card.is-featured:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(15, 23, 42, 0.5);
        }

        .ref-featured-badge {
          position: absolute;
          top: 0;
          right: 18px;
          background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
          color: #FFFFFF;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.03em;
          padding: 4px 10px;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          box-shadow: 0 3px 10px rgba(249, 115, 22, 0.4);
        }

        .ref-price-card.is-featured .ref-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, #F97316 0%, #EF4444 100%);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          box-shadow: 0 3px 10px rgba(249, 115, 22, 0.4);
        }

        .ref-price-card.is-featured .ref-pkg-name {
          font-size: 1.3rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 4px;
          line-height: 1.25;
        }

        .ref-price-card.is-featured .ref-pkg-sub {
          font-size: 0.82rem;
          color: #94A3B8;
          margin-bottom: 14px;
          line-height: 1.4;
        }

        .ref-price-card.is-featured .ref-price-num {
          font-size: 1.85rem;
          font-weight: 900;
          color: #FFFFFF;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .ref-price-card.is-featured .ref-price-unit {
          font-size: 0.85rem;
          color: #94A3B8;
          font-weight: 600;
          margin-left: 5px;
        }

        .ref-price-card.is-featured .spec-icon {
          color: #F97316;
        }

        .ref-price-card.is-featured .spec-text {
          color: #FFFFFF;
          font-weight: 700;
        }

        .ref-price-card.is-featured .ref-dotted-divider {
          border-top: 1px dashed rgba(255, 255, 255, 0.15);
        }

        .ref-price-card.is-featured .check-icon {
          color: #F97316;
        }

        .ref-price-card.is-featured .feat-text {
          color: #E2E8F0;
        }

        /* Common Price and Button Layout */
        .ref-price-row {
          display: flex;
          align-items: baseline;
          margin-bottom: 14px;
        }

        .ref-cta-btn {
          width: 100%;
          padding: 10px 14px;
          font-size: 0.88rem;
          border-radius: 10px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          margin-bottom: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        /* Outline Red CTA for Standard Cards */
        .btn-outline-red {
          border: 1.5px solid #D32F2F;
          background: #FFFFFF;
          color: #D32F2F;
          font-weight: 700;
        }

        .btn-outline-red:hover {
          background: #D32F2F;
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 5px 16px rgba(211, 47, 47, 0.3);
        }

        /* Featured Orange/Red CTA */
        .btn-featured-orange {
          border: none;
          background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
          color: #FFFFFF;
          font-weight: 800;
          box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);
        }

        .btn-featured-orange:hover {
          background: linear-gradient(135deg, #FB923C 0%, #F97316 100%);
          box-shadow: 0 6px 18px rgba(249, 115, 22, 0.5);
          transform: translateY(-2px);
          color: #FFFFFF;
        }

        .ref-spec-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.84rem;
          margin-bottom: 14px;
        }

        .ref-dotted-divider {
          width: 100%;
          margin-bottom: 14px;
        }

        /* Feature List */
        .ref-feature-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-grow: 1;
        }

        .ref-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.82rem;
          line-height: 1.45;
        }

        .ref-feature-item .check-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Comparison Table View */
        .table-container {
          width: 100%;
          overflow-x: auto;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
          background-color: #FFFFFF;
          box-shadow: var(--shadow-sm);
          margin-bottom: 16px;
        }

        .custom-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.84rem;
        }

        .custom-table th {
          background-color: #F8FAFC;
          color: var(--secondary);
          font-weight: 800;
          padding: 10px 14px;
          border-bottom: 2px solid var(--border-subtle);
          white-space: nowrap;
          font-size: 0.86rem;
        }

        .custom-table td {
          padding: 9px 14px;
          border-bottom: 1px solid var(--border-subtle);
          color: var(--text-muted);
          vertical-align: middle;
        }

        .custom-table tr:hover td {
          background-color: #F8FAFC;
        }

        .doc-notes-strip {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #F8FAFC;
          padding: 10px 16px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.45;
          margin-top: 14px;
        }

        .doc-notes-tag {
          font-weight: 700;
          color: #DC2626;
          white-space: nowrap;
        }
      `})]})}function o2(){const v=[{num:"01",badge:"01. Tiếp nhận",title:"Tiếp nhận & Audit",desc:"Kiểm tra lỗi index, crawl, on-page, kỹ thuật và đối thủ cạnh tranh.",icon:Zh},{num:"02",badge:"02. Kế hoạch",title:"Xác nhận & Kế hoạch",desc:"Nghiên cứu ý định tìm kiếm, lập bộ từ khóa ưu tiên và brief bài viết.",icon:um},{num:"03",badge:"03. Sản xuất",title:"Triển khai & Sản xuất",desc:"Viết bài chuẩn SEO, sửa lỗi on-page/technical và hoàn tất đúng hạn.",icon:Wh,isPeak:!0},{num:"04",badge:"04. Đo lường",title:"Kiểm tra & Đo lường",desc:"Theo dõi chỉ số hiển thị, click, trang index và chuyển đổi thực tế.",icon:Qh},{num:"05",badge:"05. Bàn giao",title:"Báo cáo & Bàn giao",desc:"Tổng hợp báo cáo định kỳ, họp tối ưu và kế hoạch chu kỳ tới.",icon:Wg}];return c.jsxs("section",{id:"s07-quy-trinh",className:"section-wrapper process-section overflow-hidden",children:[c.jsx("div",{className:"circuit-bg-container","aria-hidden":"true",children:c.jsxs("svg",{className:"circuit-svg",viewBox:"0 0 1000 600",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",children:[c.jsxs("defs",{children:[c.jsxs("filter",{id:"procCircuitGlow",x:"-30%",y:"-30%",width:"160%",height:"160%",children:[c.jsx("feGaussianBlur",{stdDeviation:"3.5",result:"blur"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"blur"}),c.jsx("feMergeNode",{in:"blur"}),c.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),c.jsxs("linearGradient",{id:"procLineGradRed1",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[c.jsx("stop",{offset:"0%",stopColor:"#EF4444",stopOpacity:"0.85"}),c.jsx("stop",{offset:"50%",stopColor:"#F87171",stopOpacity:"0.6"}),c.jsx("stop",{offset:"100%",stopColor:"#DC2626",stopOpacity:"0.25"})]}),c.jsxs("linearGradient",{id:"procLineGradRed2",x1:"100%",y1:"0%",x2:"0%",y2:"100%",children:[c.jsx("stop",{offset:"0%",stopColor:"#F43F5E",stopOpacity:"0.75"}),c.jsx("stop",{offset:"60%",stopColor:"#EF4444",stopOpacity:"0.45"}),c.jsx("stop",{offset:"100%",stopColor:"#991B1B",stopOpacity:"0.15"})]})]}),c.jsx("path",{d:"M 40 0 V 130 H 170 V 270 H 70 V 430 H 210 V 600",stroke:"rgba(239, 68, 68, 0.16)",strokeWidth:"1.2"}),c.jsx("path",{d:"M 210 0 V 90 H 330 V 230 H 250 V 390 H 410 V 600",stroke:"rgba(239, 68, 68, 0.16)",strokeWidth:"1.2"}),c.jsx("path",{d:"M 0 170 H 130 V 310 H 270 V 130 H 440 V 290 H 590",stroke:"rgba(239, 68, 68, 0.16)",strokeWidth:"1.2"}),c.jsx("path",{d:"M 590 0 V 140 H 740 V 70 H 870 V 270 H 970",stroke:"rgba(239, 68, 68, 0.18)",strokeWidth:"1.2"}),c.jsx("path",{d:"M 740 600 V 440 H 610 V 350 H 770 V 210 H 910 V 470 H 1000",stroke:"rgba(239, 68, 68, 0.16)",strokeWidth:"1.2"}),c.jsx("path",{d:"M 390 600 V 470 H 510 V 330 H 690 V 490 H 850 V 600",stroke:"rgba(239, 68, 68, 0.16)",strokeWidth:"1.2"}),c.jsx("path",{d:"M 80 0 V 100 H 170 V 250 H 50 V 370 H 160 V 510 H 270",stroke:"url(#procLineGradRed1)",strokeWidth:"2.2",filter:"url(#procCircuitGlow)",className:"circuit-trace-pulse-1"}),c.jsx("path",{d:"M 170 250 H 300 V 140 H 430 V 280 H 360 V 450 H 510",stroke:"url(#procLineGradRed1)",strokeWidth:"1.8",filter:"url(#procCircuitGlow)"}),c.jsx("path",{d:"M 0 330 H 120 V 470 H 240 V 550 H 390 V 600",stroke:"url(#procLineGradRed2)",strokeWidth:"2",filter:"url(#procCircuitGlow)",className:"circuit-trace-pulse-2"}),c.jsx("path",{d:"M 530 0 V 120 H 690 V 50 H 830 V 190 H 750 V 330 H 900 V 220 H 1000",stroke:"url(#procLineGradRed1)",strokeWidth:"2.2",filter:"url(#procCircuitGlow)",className:"circuit-trace-pulse-3"}),c.jsx("path",{d:"M 690 120 V 270 H 570 V 430 H 730 V 530 H 620 V 600",stroke:"url(#procLineGradRed2)",strokeWidth:"1.8",filter:"url(#procCircuitGlow)"}),c.jsx("path",{d:"M 830 190 V 370 H 950 V 520 H 790 V 600",stroke:"url(#procLineGradRed1)",strokeWidth:"2",filter:"url(#procCircuitGlow)",className:"circuit-trace-pulse-1"}),c.jsx("path",{d:"M 460 190 H 600 V 100 H 730",stroke:"url(#procLineGradRed1)",strokeWidth:"1.8"}),c.jsx("path",{d:"M 330 390 H 490 V 490 H 650 V 390 H 800",stroke:"url(#procLineGradRed2)",strokeWidth:"1.6"}),c.jsx("circle",{cx:"80",cy:"100",r:"4",fill:"#EF4444",filter:"url(#procCircuitGlow)"}),c.jsx("circle",{cx:"170",cy:"250",r:"4",fill:"#FFFFFF",filter:"url(#procCircuitGlow)"}),c.jsx("circle",{cx:"300",cy:"140",r:"3.5",fill:"#EF4444"}),c.jsx("circle",{cx:"430",cy:"280",r:"4",fill:"#F87171",filter:"url(#procCircuitGlow)"}),c.jsx("circle",{cx:"120",cy:"470",r:"3.5",fill:"#EF4444"}),c.jsx("circle",{cx:"240",cy:"550",r:"4",fill:"#FFFFFF",filter:"url(#procCircuitGlow)"}),c.jsx("circle",{cx:"530",cy:"120",r:"3.5",fill:"#EF4444"}),c.jsx("circle",{cx:"690",cy:"120",r:"4",fill:"#F87171",filter:"url(#procCircuitGlow)"}),c.jsx("circle",{cx:"830",cy:"190",r:"4.5",fill:"#FFFFFF",filter:"url(#procCircuitGlow)"}),c.jsx("circle",{cx:"750",cy:"330",r:"3.5",fill:"#EF4444"}),c.jsx("circle",{cx:"900",cy:"220",r:"4",fill:"#F87171",filter:"url(#procCircuitGlow)"}),c.jsx("circle",{cx:"570",cy:"430",r:"4",fill:"#FFFFFF",filter:"url(#procCircuitGlow)"}),c.jsx("circle",{cx:"730",cy:"530",r:"3.5",fill:"#EF4444"}),c.jsx("circle",{cx:"950",cy:"520",r:"4",fill:"#EF4444",filter:"url(#procCircuitGlow)"}),c.jsx("circle",{cx:"150",cy:"130",r:"2",fill:"#EF4444",opacity:"0.85"}),c.jsx("circle",{cx:"230",cy:"350",r:"2",fill:"#FFFFFF",opacity:"0.95"}),c.jsx("circle",{cx:"370",cy:"210",r:"2",fill:"#F87171",opacity:"0.85"}),c.jsx("circle",{cx:"490",cy:"430",r:"2",fill:"#EF4444",opacity:"0.8"}),c.jsx("circle",{cx:"650",cy:"230",r:"2",fill:"#FFFFFF",opacity:"0.95"}),c.jsx("circle",{cx:"790",cy:"130",r:"2",fill:"#EF4444",opacity:"0.85"}),c.jsx("circle",{cx:"870",cy:"450",r:"2",fill:"#F87171",opacity:"0.85"})]})}),c.jsxs("div",{className:"container relative-z",children:[c.jsxs("div",{className:"section-header-center header-compact",children:[c.jsx("div",{className:"section-badge",children:"QUY TRÌNH TRIỂN KHAI"}),c.jsxs("div",{className:"heading-row-center",children:[c.jsxs("span",{className:"dash-accent left","aria-hidden":"true",children:[c.jsx("span",{className:"dash-bar"}),c.jsx("span",{className:"dash-dot"})]}),c.jsx("h2",{className:"section-title",children:"Quy trình triển khai dịch vụ SEO chuẩn hóa"}),c.jsxs("span",{className:"dash-accent right","aria-hidden":"true",children:[c.jsx("span",{className:"dash-dot"}),c.jsx("span",{className:"dash-bar"})]})]}),c.jsx("p",{className:"section-desc",children:"Minh bạch 5 bước thực thi từ tiếp nhận, lập kế hoạch đến kiểm tra và bàn giao báo cáo định kỳ."})]}),c.jsxs("div",{className:"process-stage reveal-scale",children:[c.jsxs("div",{className:"timeline-track-wrapper","aria-hidden":"true",children:[c.jsx("div",{className:"timeline-track-glow"}),c.jsx("div",{className:"timeline-track-line"}),c.jsx("div",{className:"timeline-laser-pulse"})]}),c.jsx("div",{className:"timeline-nodes-row",children:v.map((S,y)=>{const s=S.icon;return c.jsxs("div",{className:`timeline-step-node ${S.isPeak?"is-peak-step":""}`,children:[c.jsxs("div",{className:"node-icon-wrapper",children:[c.jsx("div",{className:"hover-robot-peek","aria-hidden":"true",children:c.jsx("img",{src:"/robot-head.webp",alt:"Robot Mascot Peeking",className:"hover-robot-img"})}),S.isPeak&&c.jsx("div",{className:"peak-badge-scallop","aria-hidden":"true"}),c.jsx("div",{className:"node-icon-circle",children:c.jsx(s,{size:24,color:"#FFFFFF",strokeWidth:2.3})}),y<v.length-1&&c.jsx("div",{className:"mobile-connector-line","aria-hidden":"true"})]}),c.jsxs("div",{className:"node-content-wrap",children:[c.jsx("div",{className:"node-badge-pill",children:S.badge}),c.jsx("h3",{className:"node-title",children:S.title}),c.jsx("div",{className:"node-hover-desc",children:c.jsx("p",{className:"desc-text",children:S.desc})})]})]},y)})})]})]}),c.jsx("style",{children:`
        .process-section {
          background-color: #120306 !important;
          background-image: 
            radial-gradient(circle at 75% 20%, rgba(239, 68, 68, 0.3) 0%, transparent 55%),
            radial-gradient(circle at 20% 70%, rgba(220, 38, 38, 0.24) 0%, transparent 50%),
            radial-gradient(circle at 50% 90%, rgba(185, 28, 28, 0.18) 0%, transparent 60%),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 100% 100%, 36px 36px, 36px 36px;
          padding-top: 54px !important;
          padding-bottom: 54px !important;
          position: relative;
          border-top: 1px solid rgba(239, 68, 68, 0.2);
          border-bottom: 1px solid rgba(239, 68, 68, 0.2);
        }

        .relative-z {
          position: relative;
          z-index: 2;
        }

        .process-section .section-badge {
          background: rgba(239, 68, 68, 0.15) !important;
          border: 1px solid rgba(239, 68, 68, 0.35) !important;
          color: #EF4444 !important;
          margin-bottom: 8px;
        }

        .process-section .section-title {
          font-family: 'Chakra Petch', 'Plus Jakarta Sans', sans-serif;
          color: #FFFFFF !important;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.6);
          margin-bottom: 6px !important;
        }

        .process-section .section-desc {
          color: #94A3B8 !important;
          max-width: 680px;
          margin: 0 auto;
        }

        /* Header Accent Pins */
        .heading-row-center {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .dash-accent {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .dash-accent .dash-bar {
          width: 30px;
          height: 2px;
          background: #EF4444;
          border-radius: 2px;
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.6);
        }

        .dash-accent .dash-dot {
          width: 6px;
          height: 6px;
          background: #EF4444;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.8);
        }

        @media (max-width: 768px) {
          .dash-accent {
            display: none;
          }
        }

        /* Cyber Circuit Background Layer */
        .circuit-bg-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
          opacity: 0.95;
        }

        .circuit-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* Pulse Animations on Traces */
        .circuit-trace-pulse-1 {
          stroke-dasharray: 100 240;
          animation: circuitFlow1 6.5s linear infinite;
        }

        .circuit-trace-pulse-2 {
          stroke-dasharray: 80 200;
          animation: circuitFlow2 8s linear infinite;
        }

        .circuit-trace-pulse-3 {
          stroke-dasharray: 120 280;
          animation: circuitFlow1 7.5s linear infinite reverse;
        }

        @keyframes circuitFlow1 {
          0% { stroke-dashoffset: 600; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes circuitFlow2 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 550; }
        }

        /* Process Stage Layout */
        .process-stage {
          position: relative;
          max-width: 1050px;
          margin: 36px auto 10px auto;
          padding: 0 10px;
        }

        /* Horizontal Connecting Red Dashed Line (Desktop) */
        .timeline-track-wrapper {
          position: absolute;
          top: 31px;
          left: 9%;
          right: 9%;
          height: 2px;
          z-index: 1;
        }

        .timeline-track-glow {
          position: absolute;
          inset: -3px 0;
          background: rgba(239, 68, 68, 0.35);
          filter: blur(4px);
        }

        .timeline-track-line {
          position: absolute;
          inset: 0;
          border-top: 2px dashed rgba(239, 68, 68, 0.8);
        }

        .timeline-laser-pulse {
          position: absolute;
          top: -2px;
          left: 0;
          width: 80px;
          height: 6px;
          background: linear-gradient(90deg, transparent, #EF4444, #FFFFFF, #EF4444, transparent);
          border-radius: 4px;
          filter: blur(1px);
          animation: laserTravel 5s ease-in-out infinite;
        }

        @keyframes laserTravel {
          0% { left: 0%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { left: calc(100% - 80px); opacity: 0; }
        }

        .timeline-nodes-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          position: relative;
          z-index: 2;
          gap: 12px;
        }

        /* Individual Step Node (Desktop Layout) */
        .timeline-step-node {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          cursor: pointer;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .timeline-step-node:hover {
          transform: translateY(-4px);
        }

        .node-content-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        /* Icon Wrapper */
        .node-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          z-index: 3;
          background: #120306;
          border-radius: 50%;
          padding: 4px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5);
        }

        .node-icon-circle {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: linear-gradient(145deg, #DC2626 0%, #EF4444 55%, #B91C1C 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 24px rgba(239, 68, 68, 0.5), inset 0 0 12px rgba(255, 255, 255, 0.25);
          transition: all 0.28s ease;
          position: relative;
          z-index: 2;
        }

        .timeline-step-node:hover .node-icon-circle {
          box-shadow: 0 0 32px rgba(239, 68, 68, 0.8), inset 0 0 16px rgba(255, 255, 255, 0.45);
          transform: scale(1.08);
        }

        /* Peak Step 3 Scalloped Orbital Ring */
        .peak-badge-scallop {
          position: absolute;
          width: 78px;
          height: 78px;
          border-radius: 50%;
          border: 1.8px dashed #EF4444;
          animation: peakRingSpin 24s linear infinite;
        }

        @keyframes peakRingSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Mobile connector line hidden by default on desktop */
        .mobile-connector-line {
          display: none;
        }

        /* Hover Peeking Robot Head on Top */
        .hover-robot-peek {
          position: absolute;
          top: -38px;
          left: 50%;
          transform: translateX(-50%) translateY(16px) scale(0.5);
          opacity: 0;
          pointer-events: none;
          z-index: 10;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: drop-shadow(0 6px 14px rgba(239, 68, 68, 0.5));
        }

        .hover-robot-img {
          width: 44px;
          height: 44px;
          object-fit: contain;
          display: block;
        }

        .timeline-step-node:hover .hover-robot-peek {
          opacity: 1;
          transform: translateX(-50%) translateY(0) scale(1);
        }

        /* Badge Pill */
        .node-badge-pill {
          background: linear-gradient(135deg, #DC2626 0%, #EF4444 100%);
          color: #FFFFFF;
          font-weight: 800;
          font-size: 0.78rem;
          padding: 3px 12px;
          border-radius: 9999px;
          box-shadow: 0 0 14px rgba(239, 68, 68, 0.4);
          margin-bottom: 6px;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }

        /* Title */
        .node-title {
          font-size: 0.88rem;
          font-weight: 800;
          color: #FFFFFF;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
          margin-bottom: 4px;
          line-height: 1.25;
        }

        /* Detailed Description - Futuristic Frosted Glass Tooltip on Desktop Hover */
        .node-hover-desc {
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transform: translateY(8px);
          transition: opacity 0.28s ease, transform 0.28s ease, max-height 0.28s ease;
          pointer-events: none;
          background: rgba(24, 7, 10, 0.95);
          border: 1px solid rgba(239, 68, 68, 0.4);
          border-radius: 12px;
          padding: 0 12px;
          margin-top: 6px;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.5), 0 0 16px rgba(239, 68, 68, 0.25);
          backdrop-filter: blur(14px);
        }

        .desc-text {
          font-size: 0.76rem;
          color: #F1F5F9;
          line-height: 1.45;
          margin: 0;
          padding: 10px 0;
        }

        .timeline-step-node:hover .node-hover-desc {
          opacity: 1;
          max-height: 120px;
          transform: translateY(0);
          pointer-events: auto;
        }

        /* ========================================================= */
        /* RESPONSIVE ON TABLET & MOBILE (< 860px)                   */
        /* ========================================================= */
        @media (max-width: 860px) {
          .process-section {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }

          .process-stage {
            margin-top: 24px;
            padding: 0 6px;
          }

          .timeline-track-wrapper {
            display: none !important;
          }

          .hover-robot-peek {
            display: none !important;
          }

          .timeline-nodes-row {
            flex-direction: column;
            gap: 16px;
          }

          /* Mobile Vertical Timeline Step */
          .timeline-step-node {
            flex-direction: row;
            align-items: flex-start;
            text-align: left;
            width: 100%;
            gap: 16px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(239, 68, 68, 0.2);
            border-radius: 16px;
            padding: 16px;
            backdrop-filter: blur(8px);
          }

          .timeline-step-node:hover {
            transform: none;
          }

          .node-icon-wrapper {
            margin-bottom: 0;
            flex-shrink: 0;
            padding: 2px;
          }

          .node-icon-circle {
            width: 50px;
            height: 50px;
          }

          .peak-badge-scallop {
            width: 62px;
            height: 62px;
          }

          .node-content-wrap {
            align-items: flex-start;
            text-align: left;
            flex-grow: 1;
          }

          .node-badge-pill {
            font-size: 0.74rem;
            padding: 2px 10px;
            margin-bottom: 4px;
          }

          .node-title {
            font-size: 0.95rem;
            margin-bottom: 6px;
          }

          /* Full Always-Visible Description on Mobile */
          .node-hover-desc {
            opacity: 1 !important;
            max-height: none !important;
            transform: none !important;
            pointer-events: auto !important;
            background: transparent !important;
            border: none !important;
            padding: 0 !important;
            margin-top: 0 !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
          }

          .desc-text {
            font-size: 0.8rem;
            color: #CBD5E1;
            padding: 0;
            line-height: 1.45;
          }
        }
      `})]})}function s2({target:v,duration:S=1600,prefix:y="",suffix:s="",formatValue:T}){const[C,k]=ot.useState(0),[K,G]=ot.useState(!1),ut=ot.useRef(null);ot.useEffect(()=>{const N=new IntersectionObserver(([D])=>{D.isIntersecting&&(G(!0),N.disconnect())},{threshold:.15});return ut.current&&N.observe(ut.current),()=>N.disconnect()},[]),ot.useEffect(()=>{if(!K)return;let N=null,D;const Q=w=>{N||(N=w);const Y=Math.min((w-N)/S,1),tt=1-Math.pow(1-Y,4);k(Math.floor(tt*v)),Y<1?D=requestAnimationFrame(Q):k(v)};return D=requestAnimationFrame(Q),()=>cancelAnimationFrame(D)},[K,v,S]);const O=T?T(C):`${y}${C}${s}`;return c.jsx("span",{ref:ut,className:"counter-number",children:O})}function f2(){const v=[{label:"Tổng lượt hiển thị (Impressions)",target:142,prefix:"+",suffix:"%",period:"So với chu kỳ trước"},{label:"Tổng lượt nhấp chuột (Clicks)",target:86,prefix:"+",suffix:"%",period:"Đo lường từ Google Search"},{label:"Từ khóa ưu tiên vào Top",target:18,formatValue:y=>`${y} / 25`,period:"Theo kế hoạch tháng chốt"},{label:"Số bài viết & SLA hoàn tất",target:100,suffix:"%",period:"Đã nghiệm thu đúng hạn"}],S=[{title:"1. Khối lượng công việc đã làm",desc:"Danh sách chi tiết các bài viết chuẩn SEO đã đăng tải, link bài, các lỗi kỹ thuật on-page / schema đã sửa chữa trong tháng."},{title:"2. Dữ liệu quan sát thực tế (GSC & GA4)",desc:"Trích xuất biểu đồ xu hướng hiển thị, click chuột, số trang được index và luồng chuyển đổi từ tài khoản đo lường chính thức."},{title:"3. Phân tích & Backlog kỹ thuật",desc:"Nhận định chuyên môn, phân tích các biến động thuật toán và danh sách công việc cần tối ưu hóa cho chu kỳ tiếp theo."}];return c.jsxs("section",{id:"s08-case",className:"section-wrapper bg-white reporting-case-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"reporting-sec-header",children:[c.jsx("div",{className:"section-badge",children:"BÁO CÁO & ĐO LƯỜNG"}),c.jsx("h2",{className:"section-title",children:"Báo cáo mẫu & Dữ liệu đo lường định kỳ"}),c.jsx("p",{className:"section-desc",children:"Minh bạch giữa số liệu đo lường khách quan từ Google Search Console, Google Analytics 4 và các đề xuất chuyên môn."})]}),c.jsx("div",{className:"clean-stats-grid",children:v.map((y,s)=>c.jsxs("div",{className:`clean-stat-card reveal-scale stagger-${s+1}`,children:[c.jsx("div",{className:"clean-stat-num",children:c.jsx(s2,{target:y.target,prefix:y.prefix,suffix:y.suffix,formatValue:y.formatValue,duration:1400+s*150})}),c.jsx("div",{className:"clean-stat-label",children:y.label}),c.jsx("div",{className:"clean-stat-period",children:y.period})]},s))}),c.jsxs("div",{className:"report-struct-red-card reveal-up",children:[c.jsxs("div",{className:"report-card-header",children:[c.jsx("div",{className:"report-icon-badge",children:c.jsx(_o,{size:18,color:"#FFFFFF"})}),c.jsx("h3",{className:"report-card-title",children:"Cấu trúc báo cáo SEO chuẩn hóa 3 phần"})]}),c.jsx("div",{className:"struct-grid",children:S.map((y,s)=>c.jsxs("div",{className:"struct-item",children:[c.jsx("h4",{className:"struct-title",children:y.title}),c.jsx("p",{className:"struct-desc",children:y.desc})]},s))})]})]}),c.jsx("style",{children:`
        .reporting-case-section {
          padding-top: 50px !important;
          padding-bottom: 50px !important;
        }

        .reporting-sec-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 28px auto;
        }

        /* 4 Minimal Soft Pastel Cards Matching Sample */
        .clean-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 24px;
        }

        @media (max-width: 992px) {
          .clean-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 540px) {
          .clean-stats-grid {
            grid-template-columns: 1fr;
          }
        }

        .clean-stat-card {
          background: #F1F4FD;
          border-radius: 20px;
          padding: 34px 20px 28px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: all 0.25s ease;
          border: 1px solid rgba(67, 97, 238, 0.06);
          box-shadow: 0 4px 16px rgba(67, 97, 238, 0.04);
        }

        .clean-stat-card:hover {
          transform: translateY(-5px);
          background: #EEF2FC;
          box-shadow: 0 12px 28px rgba(67, 97, 238, 0.12);
          border-color: rgba(67, 97, 238, 0.18);
        }

        .clean-stat-num {
          font-family: 'Chakra Petch', 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(2rem, 2.5vw, 2.45rem);
          font-weight: 800;
          color: #4361EE;
          line-height: 1.1;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .clean-stat-label {
          font-size: 0.86rem;
          font-weight: 600;
          color: #475569;
          line-height: 1.38;
          margin-bottom: 4px;
        }

        .clean-stat-period {
          font-size: 0.74rem;
          color: #94A3B8;
          font-weight: 500;
        }

        /* 3-Part Report Structure Red Card */
        .report-struct-red-card {
          padding: 24px 26px;
          background: linear-gradient(135deg, #C62828 0%, #B71C1C 45%, #8E0000 100%);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 20px;
          box-shadow: 0 14px 36px rgba(183, 28, 28, 0.28), 0 2px 10px rgba(0, 0, 0, 0.06);
          color: #FFFFFF;
        }

        .report-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .report-icon-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          flex-shrink: 0;
        }

        .report-card-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0;
          font-family: 'Chakra Petch', 'Plus Jakarta Sans', sans-serif;
          letter-spacing: 0.01em;
        }

        .struct-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        @media (max-width: 768px) {
          .struct-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .report-struct-red-card {
            padding: 20px 18px;
          }
        }

        .struct-item {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 12px;
          padding: 16px 18px;
          backdrop-filter: blur(6px);
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .struct-item:hover {
          background: rgba(255, 255, 255, 0.16);
          transform: translateY(-2px);
        }

        .struct-title {
          font-size: 0.9rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 6px;
          line-height: 1.35;
        }

        .struct-desc {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
          margin: 0;
        }
      `})]})}function d2(){const v=[{icon:Zh,title:"Nghiên cứu từ khóa",tag:"5 – 60 từ khóa",desc:"Phân tích search intent & độ cạnh tranh"},{icon:Oo,title:"Sản xuất bài viết",tag:"2 – 20 bài/tháng",desc:"Viết chuẩn SEO theo brief đã duyệt"},{icon:Zg,title:"Tối ưu On-page",tag:"Toàn diện",desc:"Title, Meta, Heading & Internal link"},{icon:um,title:"Xử lý Technical",tag:"Chuẩn kỹ thuật",desc:"Index, crawl, sitemap, canonical, redirect"},{icon:_o,title:"Đo lường & Báo cáo",tag:"Hàng tháng",desc:"GA4, GSC & Họp chiến lược định kỳ"}],S=[{icon:Gg,title:"Ngân sách Ads",tag:"Tách riêng",desc:"Chi phí chạy Google Ads, Facebook Ads"},{icon:Bg,title:"Backlink ngoài gói",tag:"Theo duyệt",desc:"Mua bài PR báo chí & Guest post ngoài"},{icon:Xg,title:"Media & Đồ họa lớn",tag:"Báo giá riêng",desc:"Quay dựng video, chụp ảnh sản phẩm"},{icon:Dg,title:"Lập trình website",tag:"Ngoài phạm vi",desc:"Phát triển tính năng mới, hosting, tên miền"},{icon:Lg,title:"Xử lý web bị phạt / Cam kết",tag:"Ngoài phạm vi",desc:"Khắc phục web bị hack, cam kết vị trí cố định"}],y=[{icon:wg,title:"Chu kỳ thanh toán:",value:"Đầu mỗi tháng, duyệt kế hoạch trước khi làm"},{icon:Og,title:"Thời hạn hợp đồng:",value:"Tối thiểu 3 – 6 tháng để đạt hiệu quả SEO"},{icon:Fg,title:"Chi phí phát sinh:",value:"0đ ẩn, chỉ phát sinh khi khách hàng duyệt"}];return c.jsxs("section",{id:"s09-gioi-han",className:"section-wrapper scope-limits-tech-section overflow-hidden",children:[c.jsxs("div",{className:"container scope-main-container",children:[c.jsxs("div",{className:"section-header-center header-compact",children:[c.jsx("div",{className:"section-badge tech-badge",children:"MINH BẠCH PHẠM VI"}),c.jsx("h2",{className:"section-title tech-title",children:"Giới hạn phạm vi & Điều khoản dịch vụ"}),c.jsx("p",{className:"section-desc tech-desc",children:"Minh bạch tuyệt đối giữa các hạng mục đã bao gồm trong gói và các dịch vụ báo giá riêng biệt."})]}),c.jsxs("div",{className:"scope-comparison-grid",children:[c.jsxs("div",{className:"scope-card-tech in-scope-card reveal-left",children:[c.jsxs("div",{className:"card-top-header",children:[c.jsxs("div",{className:"header-left",children:[c.jsxs("div",{className:"scope-icon-pill green-pill",children:[c.jsx(Mo,{size:17,className:"status-icon"}),c.jsx("span",{className:"scope-headline",children:"Bao gồm trong gói SEO"})]}),c.jsx("span",{className:"tech-system-tag green-tag",children:"SYS // IN_SCOPE"})]}),c.jsx("div",{className:"robot-badge-peek",children:c.jsx("img",{src:"/robot-head.webp",alt:"DUDI Robot Mascot In Scope",className:"robot-mini-img"})})]}),c.jsx("div",{className:"scope-items-grid",children:v.map((s,T)=>{const C=s.icon;return c.jsxs("div",{className:"tech-item-row in-item",children:[c.jsx("div",{className:"item-icon-box green-box",children:c.jsx(C,{size:15})}),c.jsxs("div",{className:"item-info",children:[c.jsxs("div",{className:"item-title-row",children:[c.jsx("h4",{className:"item-title",children:s.title}),c.jsx("span",{className:"item-tag-badge green-badge",children:s.tag})]}),c.jsx("p",{className:"item-sub-desc",children:s.desc})]})]},T)})})]}),c.jsxs("div",{className:"scope-card-tech out-scope-card reveal-right",children:[c.jsxs("div",{className:"card-top-header",children:[c.jsxs("div",{className:"header-left",children:[c.jsxs("div",{className:"scope-icon-pill red-pill",children:[c.jsx(Mg,{size:17,className:"status-icon"}),c.jsx("span",{className:"scope-headline",children:"Ngoài phạm vi gói SEO"})]}),c.jsx("span",{className:"tech-system-tag red-tag",children:"SYS // EXCLUDED"})]}),c.jsx("div",{className:"robot-badge-peek",children:c.jsx("img",{src:"/robot-head.webp",alt:"DUDI Robot Mascot Out Scope",className:"robot-mini-img filter-grayscale"})})]}),c.jsx("div",{className:"scope-items-grid",children:S.map((s,T)=>{const C=s.icon;return c.jsxs("div",{className:"tech-item-row out-item",children:[c.jsx("div",{className:"item-icon-box red-box",children:c.jsx(C,{size:15})}),c.jsxs("div",{className:"item-info",children:[c.jsxs("div",{className:"item-title-row",children:[c.jsx("h4",{className:"item-title",children:s.title}),c.jsx("span",{className:"item-tag-badge red-badge",children:s.tag})]}),c.jsx("p",{className:"item-sub-desc",children:s.desc})]})]},T)})})]})]}),c.jsx("div",{className:"policies-compact-strip reveal-scale",children:y.map((s,T)=>{const C=s.icon;return c.jsxs("div",{className:"policy-strip-item",children:[c.jsx(C,{size:16,className:"policy-strip-icon"}),c.jsx("span",{className:"policy-strip-title",children:s.title}),c.jsx("span",{className:"policy-strip-val",children:s.value})]},T)})})]}),c.jsx("style",{children:`
        .scope-limits-tech-section {
          background-color: #0A0E17 !important;
          background-image: 
            radial-gradient(circle at 15% 30%, rgba(16, 185, 129, 0.08) 0%, transparent 45%),
            radial-gradient(circle at 85% 30%, rgba(239, 68, 68, 0.1) 0%, transparent 45%),
            radial-gradient(circle at 50% 90%, rgba(239, 68, 68, 0.06) 0%, transparent 55%),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 100% 100%, 32px 32px, 32px 32px;
          padding-top: 24px !important;
          padding-bottom: 24px !important;
          min-height: auto !important;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          position: relative;
        }

        .scope-main-container {
          max-width: 1180px;
        }

        .header-compact {
          margin-bottom: 12px !important;
        }

        .tech-badge {
          background: rgba(239, 68, 68, 0.15) !important;
          border: 1px solid rgba(239, 68, 68, 0.35) !important;
          color: #EF4444 !important;
          font-size: 0.74rem !important;
          padding: 2px 10px !important;
          margin-bottom: 4px !important;
        }

        .tech-title {
          font-family: 'Chakra Petch', 'Plus Jakarta Sans', sans-serif;
          color: #FFFFFF !important;
          font-size: 1.45rem !important;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.6);
          margin-bottom: 3px !important;
          line-height: 1.2;
        }

        .tech-desc {
          color: #94A3B8 !important;
          font-size: 0.84rem !important;
          margin-bottom: 0 !important;
        }

        /* 2-Column Symmetrical Grid */
        .scope-comparison-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 10px;
        }

        @media (max-width: 900px) {
          .scope-comparison-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }

        /* Tech Container Cards */
        .scope-card-tech {
          background: #0E1626;
          border-radius: 16px;
          padding: 12px 16px 10px 16px;
          position: relative;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .scope-card-tech:hover {
          transform: translateY(-2px);
        }

        /* In-Scope Green Accent */
        .in-scope-card {
          border: 1px solid rgba(16, 185, 129, 0.28);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45), 0 0 16px rgba(16, 185, 129, 0.06);
        }

        .in-scope-card:hover {
          border-color: rgba(16, 185, 129, 0.5);
        }

        /* Out-Scope Red Accent */
        .out-scope-card {
          border: 1px solid rgba(239, 68, 68, 0.28);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45), 0 0 16px rgba(239, 68, 68, 0.06);
        }

        .out-scope-card:hover {
          border-color: rgba(239, 68, 68, 0.5);
        }

        /* Card Top Header */
        .card-top-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 8px;
          margin-bottom: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .scope-icon-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 10px;
          border-radius: 9999px;
          font-weight: 800;
          font-size: 0.82rem;
          letter-spacing: 0.01em;
        }

        .green-pill {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #34D399;
        }

        .red-pill {
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #F87171;
        }

        .tech-system-tag {
          font-family: 'Chakra Petch', monospace;
          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .green-tag {
          color: rgba(52, 211, 153, 0.7);
        }

        .red-tag {
          color: rgba(248, 113, 113, 0.7);
        }

        /* Robot Head Mini Badge */
        .robot-badge-peek {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .robot-mini-img {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }

        .filter-grayscale {
          filter: grayscale(40%) contrast(110%);
        }

        /* Items List */
        .scope-items-grid {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .tech-item-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px 10px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.04);
          transition: all 0.2s ease;
        }

        .tech-item-row:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(2px);
        }

        .item-icon-box {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .green-box {
          background: rgba(16, 185, 129, 0.12);
          color: #34D399;
          border: 1px solid rgba(16, 185, 129, 0.25);
        }

        .red-box {
          background: rgba(239, 68, 68, 0.12);
          color: #F87171;
          border: 1px solid rgba(239, 68, 68, 0.25);
        }

        .item-info {
          flex-grow: 1;
        }

        .item-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
        }

        .item-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.2;
        }

        .item-tag-badge {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 1px 6px;
          border-radius: 4px;
          white-space: nowrap;
        }

        .green-badge {
          background: rgba(16, 185, 129, 0.18);
          color: #6EE7B7;
          border: 1px solid rgba(16, 185, 129, 0.25);
        }

        .red-badge {
          background: rgba(239, 68, 68, 0.18);
          color: #FCA5A5;
          border: 1px solid rgba(239, 68, 68, 0.25);
        }

        .item-sub-desc {
          font-size: 0.68rem;
          color: #94A3B8;
          margin: 0;
          line-height: 1.25;
        }

        /* Compact Policies Bottom Strip */
        .policies-compact-strip {
          display: grid;
          grid-template-columns: 1.15fr 1fr 1fr;
          gap: 12px;
          background: #0E1626;
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 12px;
          padding: 8px 14px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
          width: 100%;
          box-sizing: border-box;
        }

        @media (max-width: 992px) {
          .policies-compact-strip {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 10px 12px;
          }
        }

        .policy-strip-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.73rem;
          min-width: 0;
          white-space: nowrap;
        }

        .policy-strip-icon {
          color: #EF4444;
          flex-shrink: 0;
        }

        .policy-strip-title {
          font-weight: 700;
          color: #FFFFFF;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .policy-strip-val {
          color: #94A3B8;
          min-width: 0;
          white-space: nowrap;
        }

        @media (max-width: 992px) {
          .policy-strip-item {
            flex-wrap: wrap;
            gap: 4px 6px;
            white-space: normal;
          }
          .policy-strip-title {
            white-space: normal;
          }
          .policy-strip-val {
            white-space: normal;
          }
          .tech-title {
            font-size: 1.25rem !important;
          }
          .scope-card-tech {
            padding: 12px 12px 10px 12px;
          }
          .item-title-row {
            flex-wrap: wrap;
          }
        }
      `})]})}function h2(){const[v,S]=ot.useState(0),y=[{q:"Bao lâu thì SEO có kết quả?",a:"Không có mốc cố định. DUDI báo cáo công việc và dữ liệu đo lường minh bạch định kỳ theo từng tháng."},{q:"Có cam kết top không?",a:"Không. Thứ hạng do thuật toán tìm kiếm và nhiều yếu tố khách quan chi phối, chúng tôi cam kết đúng khối lượng và chuẩn SEO tốt nhất."},{q:"Phí backlink đã gồm chưa?",a:"Chưa, trừ khi báo giá ghi rõ. Mọi nguồn trả phí ngoài đều được đối soát và khách hàng duyệt trước khi triển khai."},{q:"Ai duyệt bài viết?",a:"Khách hàng sẽ cử đại diện chuyên môn để duyệt và xác nhận thông tin nội dung, kỹ thuật trước khi xuất bản."},{q:"Có cần sửa website không?",a:"Có thể. Các lỗi kỹ thuật on-page, cấu trúc sitemap hoặc tối ưu trang đích mới sẽ được thực hiện theo đúng hạn mức gói."}],s=T=>{S(v===T?-1:T)};return c.jsxs("section",{id:"s10-faq",className:"section-wrapper faq-section overflow-hidden",children:[c.jsx("div",{className:"circuit-bg-container","aria-hidden":"true",children:c.jsxs("svg",{className:"circuit-svg",viewBox:"0 0 1000 600",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",children:[c.jsxs("defs",{children:[c.jsxs("filter",{id:"circuitGlow",x:"-30%",y:"-30%",width:"160%",height:"160%",children:[c.jsx("feGaussianBlur",{stdDeviation:"3.5",result:"blur"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"blur"}),c.jsx("feMergeNode",{in:"blur"}),c.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),c.jsxs("linearGradient",{id:"lineGradRed1",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[c.jsx("stop",{offset:"0%",stopColor:"#EF4444",stopOpacity:"0.85"}),c.jsx("stop",{offset:"50%",stopColor:"#F87171",stopOpacity:"0.6"}),c.jsx("stop",{offset:"100%",stopColor:"#DC2626",stopOpacity:"0.25"})]}),c.jsxs("linearGradient",{id:"lineGradRed2",x1:"100%",y1:"0%",x2:"0%",y2:"100%",children:[c.jsx("stop",{offset:"0%",stopColor:"#F43F5E",stopOpacity:"0.75"}),c.jsx("stop",{offset:"60%",stopColor:"#EF4444",stopOpacity:"0.45"}),c.jsx("stop",{offset:"100%",stopColor:"#991B1B",stopOpacity:"0.15"})]})]}),c.jsx("path",{d:"M 40 0 V 130 H 170 V 270 H 70 V 430 H 210 V 600",stroke:"rgba(239, 68, 68, 0.16)",strokeWidth:"1.2"}),c.jsx("path",{d:"M 210 0 V 90 H 330 V 230 H 250 V 390 H 410 V 600",stroke:"rgba(239, 68, 68, 0.16)",strokeWidth:"1.2"}),c.jsx("path",{d:"M 0 170 H 130 V 310 H 270 V 130 H 440 V 290 H 590",stroke:"rgba(239, 68, 68, 0.16)",strokeWidth:"1.2"}),c.jsx("path",{d:"M 590 0 V 140 H 740 V 70 H 870 V 270 H 970",stroke:"rgba(239, 68, 68, 0.18)",strokeWidth:"1.2"}),c.jsx("path",{d:"M 740 600 V 440 H 610 V 350 H 770 V 210 H 910 V 470 H 1000",stroke:"rgba(239, 68, 68, 0.16)",strokeWidth:"1.2"}),c.jsx("path",{d:"M 390 600 V 470 H 510 V 330 H 690 V 490 H 850 V 600",stroke:"rgba(239, 68, 68, 0.16)",strokeWidth:"1.2"}),c.jsx("path",{d:"M 80 0 V 100 H 170 V 250 H 50 V 370 H 160 V 510 H 270",stroke:"url(#lineGradRed1)",strokeWidth:"2.2",filter:"url(#circuitGlow)",className:"circuit-trace-pulse-1"}),c.jsx("path",{d:"M 170 250 H 300 V 140 H 430 V 280 H 360 V 450 H 510",stroke:"url(#lineGradRed1)",strokeWidth:"1.8",filter:"url(#circuitGlow)"}),c.jsx("path",{d:"M 0 330 H 120 V 470 H 240 V 550 H 390 V 600",stroke:"url(#lineGradRed2)",strokeWidth:"2",filter:"url(#circuitGlow)",className:"circuit-trace-pulse-2"}),c.jsx("path",{d:"M 530 0 V 120 H 690 V 50 H 830 V 190 H 750 V 330 H 900 V 220 H 1000",stroke:"url(#lineGradRed1)",strokeWidth:"2.2",filter:"url(#circuitGlow)",className:"circuit-trace-pulse-3"}),c.jsx("path",{d:"M 690 120 V 270 H 570 V 430 H 730 V 530 H 620 V 600",stroke:"url(#lineGradRed2)",strokeWidth:"1.8",filter:"url(#circuitGlow)"}),c.jsx("path",{d:"M 830 190 V 370 H 950 V 520 H 790 V 600",stroke:"url(#lineGradRed1)",strokeWidth:"2",filter:"url(#circuitGlow)",className:"circuit-trace-pulse-1"}),c.jsx("path",{d:"M 460 190 H 600 V 100 H 730",stroke:"url(#lineGradRed1)",strokeWidth:"1.8"}),c.jsx("path",{d:"M 330 390 H 490 V 490 H 650 V 390 H 800",stroke:"url(#lineGradRed2)",strokeWidth:"1.6"}),c.jsx("circle",{cx:"80",cy:"100",r:"4",fill:"#EF4444",filter:"url(#circuitGlow)"}),c.jsx("circle",{cx:"170",cy:"250",r:"4",fill:"#FFFFFF",filter:"url(#circuitGlow)"}),c.jsx("circle",{cx:"300",cy:"140",r:"3.5",fill:"#EF4444"}),c.jsx("circle",{cx:"430",cy:"280",r:"4",fill:"#F87171",filter:"url(#circuitGlow)"}),c.jsx("circle",{cx:"120",cy:"470",r:"3.5",fill:"#EF4444"}),c.jsx("circle",{cx:"240",cy:"550",r:"4",fill:"#FFFFFF",filter:"url(#circuitGlow)"}),c.jsx("circle",{cx:"530",cy:"120",r:"3.5",fill:"#EF4444"}),c.jsx("circle",{cx:"690",cy:"120",r:"4",fill:"#F87171",filter:"url(#circuitGlow)"}),c.jsx("circle",{cx:"830",cy:"190",r:"4.5",fill:"#FFFFFF",filter:"url(#circuitGlow)"}),c.jsx("circle",{cx:"750",cy:"330",r:"3.5",fill:"#EF4444"}),c.jsx("circle",{cx:"900",cy:"220",r:"4",fill:"#F87171",filter:"url(#circuitGlow)"}),c.jsx("circle",{cx:"570",cy:"430",r:"4",fill:"#FFFFFF",filter:"url(#circuitGlow)"}),c.jsx("circle",{cx:"730",cy:"530",r:"3.5",fill:"#EF4444"}),c.jsx("circle",{cx:"950",cy:"520",r:"4",fill:"#EF4444",filter:"url(#circuitGlow)"}),c.jsx("circle",{cx:"150",cy:"130",r:"2",fill:"#EF4444",opacity:"0.85"}),c.jsx("circle",{cx:"230",cy:"350",r:"2",fill:"#FFFFFF",opacity:"0.95"}),c.jsx("circle",{cx:"370",cy:"210",r:"2",fill:"#F87171",opacity:"0.85"}),c.jsx("circle",{cx:"490",cy:"430",r:"2",fill:"#EF4444",opacity:"0.8"}),c.jsx("circle",{cx:"650",cy:"230",r:"2",fill:"#FFFFFF",opacity:"0.95"}),c.jsx("circle",{cx:"790",cy:"130",r:"2",fill:"#EF4444",opacity:"0.85"}),c.jsx("circle",{cx:"870",cy:"450",r:"2",fill:"#F87171",opacity:"0.85"})]})}),c.jsxs("div",{className:"container relative-z",children:[c.jsxs("div",{className:"section-header-center",children:[c.jsx("div",{className:"section-badge",children:"HỖ TRỢ & TƯ VẤN"}),c.jsx("h2",{className:"section-title",children:"Câu hỏi thường gặp (FAQ)"}),c.jsx("p",{className:"section-desc",children:"Giải đáp minh bạch mọi thắc mắc về thời gian, thứ hạng, nội dung và chi phí trước khi bắt đầu."})]}),c.jsxs("div",{className:"faq-main-layout reveal-scale",children:[c.jsxs("div",{className:"faq-mascot-wrapper",children:[c.jsx("div",{className:"mascot-ambient-aura-red"}),c.jsx("img",{src:"/mascot-faq.webp",alt:"DUDI Robot Mascot FAQ",className:"faq-mascot-img"})]}),c.jsx("div",{className:"faq-content-wrapper",children:c.jsx("div",{className:"faq-white-box",children:c.jsx("div",{className:"faq-accordion-list",children:y.map((T,C)=>{const k=v===C;return c.jsxs("div",{className:`faq-item-clean ${k?"active":""}`,children:[c.jsxs("button",{className:"faq-question-btn",onClick:()=>s(C),"aria-expanded":k,children:[c.jsx("span",{className:"faq-question-text",children:T.q}),c.jsx("span",{className:"faq-icon-arrow",children:k?c.jsx(Ag,{size:20}):c.jsx(Cg,{size:20})})]}),k&&c.jsx("div",{className:"faq-answer-box",children:c.jsx("p",{className:"faq-answer-text",children:T.a})})]},C)})})})})]})]}),c.jsx("style",{children:`
        .faq-section {
          background-color: #120306 !important;
          background-image: 
            radial-gradient(circle at 75% 20%, rgba(239, 68, 68, 0.3) 0%, transparent 55%),
            radial-gradient(circle at 20% 70%, rgba(220, 38, 38, 0.24) 0%, transparent 50%),
            radial-gradient(circle at 50% 90%, rgba(185, 28, 28, 0.18) 0%, transparent 60%),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 100% 100%, 36px 36px, 36px 36px;
          padding-top: 54px !important;
          padding-bottom: 54px !important;
          position: relative;
          border-bottom: 1px solid rgba(239, 68, 68, 0.2);
        }

        .relative-z {
          position: relative;
          z-index: 2;
        }

        .faq-section .section-badge {
          background: rgba(239, 68, 68, 0.15) !important;
          border-color: rgba(239, 68, 68, 0.35) !important;
          color: #EF4444 !important;
        }

        .faq-section .section-title {
          color: #FFFFFF !important;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.6);
        }

        .faq-section .section-desc {
          color: #94A3B8 !important;
        }

        /* Cyber Circuit Background Layer */
        .circuit-bg-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
          opacity: 0.95;
        }

        .circuit-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* Pulse Animations on Traces */
        .circuit-trace-pulse-1 {
          stroke-dasharray: 100 240;
          animation: circuitFlow1 6.5s linear infinite;
        }

        .circuit-trace-pulse-2 {
          stroke-dasharray: 80 200;
          animation: circuitFlow2 8s linear infinite;
        }

        .circuit-trace-pulse-3 {
          stroke-dasharray: 120 280;
          animation: circuitFlow1 7.5s linear infinite reverse;
        }

        @keyframes circuitFlow1 {
          0% {
            stroke-dashoffset: 600;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes circuitFlow2 {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 550;
          }
        }

        .faq-main-layout {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
        }

        /* Mascot Column Holding White Card */
        .faq-mascot-wrapper {
          flex: 0 0 280px;
          position: relative;
          z-index: 3;
          margin-right: -24px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .mascot-ambient-aura-red {
          position: absolute;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(239, 68, 68, 0.35) 0%, rgba(220, 38, 38, 0.18) 50%, transparent 70%);
          filter: blur(28px);
          pointer-events: none;
        }

        .faq-mascot-img {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 280px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 14px 28px rgba(0, 0, 0, 0.45));
          animation: mascotHoldFloat 4.5s ease-in-out infinite;
          transition: transform 0.3s ease;
        }

        .faq-mascot-img:hover {
          transform: scale(1.02);
        }

        @keyframes mascotHoldFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        /* White Card Enclosing Questions */
        .faq-content-wrapper {
          flex: 1;
          min-width: 0;
          position: relative;
          z-index: 2;
        }

        .faq-white-box {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.75) 0%, rgba(240, 244, 248, 0.65) 100%);
          border-radius: 24px;
          padding: 22px 24px 22px 34px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(14px);
          position: relative;
          z-index: 2;
        }

        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .faq-item-clean {
          background: linear-gradient(180deg, #1C070A 0%, #120306 100%);
          border: 1.5px solid rgba(239, 68, 68, 0.28);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .faq-item-clean:hover {
          border-color: rgba(239, 68, 68, 0.6);
          background: linear-gradient(180deg, #2A0A0F 0%, #1A0508 100%);
          box-shadow: 0 4px 16px rgba(239, 68, 68, 0.2);
          transform: translateY(-1px);
        }

        .faq-item-clean.active {
          background: linear-gradient(180deg, #320C12 0%, #20080C 100%);
          border-color: #EF4444;
          box-shadow: 0 6px 20px rgba(239, 68, 68, 0.28), inset 0 0 14px rgba(239, 68, 68, 0.1);
        }

        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
        }

        .faq-question-text {
          font-size: 0.94rem;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.35;
        }

        .faq-item-clean.active .faq-question-text {
          color: #FFFFFF;
        }

        .faq-icon-arrow {
          color: #EF4444;
          display: flex;
          align-items: center;
          margin-left: 12px;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .faq-item-clean.active .faq-icon-arrow {
          color: #F87171;
        }

        .faq-answer-box {
          padding: 0 18px 14px 18px;
          border-top: 1px dashed rgba(239, 68, 68, 0.3);
          background: transparent;
        }

        .faq-answer-text {
          padding-top: 10px;
          font-size: 0.86rem;
          color: #E2E8F0;
          line-height: 1.55;
        }

        @media (max-width: 860px) {
          .faq-section {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          .faq-main-layout {
            flex-direction: column;
            gap: 0;
          }
          .faq-mascot-wrapper {
            display: none !important;
          }
          .faq-content-wrapper {
            width: 100%;
          }
          .faq-white-box {
            padding: 16px;
            border-radius: 18px;
          }
        }
      `})]})}function m2({selectedPackage:v,onNotify:S}){const[y,s]=ot.useState({website:"",fullName:"",phone:"",industry:"",location:"",goals:["Hiển thị","Traffic"],primaryGoal:"Traffic",budget:"",description:"",packageInterest:v||""}),[T,C]=ot.useState({}),[k,K]=ot.useState(!1),G=["Hiển thị","Traffic","Lead","Bán hàng"],ut=[{value:"",label:"-- Chọn ngân sách (Không bắt buộc) --"},{value:"Dưới 5",label:"Dưới 5"},{value:"5 đến 15",label:"5 đến 15"},{value:"trên 15 triệu",label:"trên 15 triệu"}],O=w=>{let Y;if(y.goals.includes(w)){if(Y=y.goals.filter(tt=>tt!==w),y.primaryGoal===w){s({...y,goals:Y,primaryGoal:Y[0]||""});return}}else if(Y=[...y.goals,w],!y.primaryGoal){s({...y,goals:Y,primaryGoal:w});return}s({...y,goals:Y})},N=()=>{const w={};y.website.trim()?/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i.test(y.website.trim())||(w.website="URL không hợp lệ"):w.website="Vui lòng nhập URL website",y.fullName.trim()?(y.fullName.trim().length<2||y.fullName.trim().length>80)&&(w.fullName="2 đến 80 ký tự"):w.fullName="Vui lòng nhập họ và tên";const Y=y.phone.replace(/[\s.-]/g,"");return Y?/^\d{9,12}$/.test(Y)||(w.phone="9 đến 12 chữ số"):w.phone="Vui lòng nhập số điện thoại hoặc Zalo",y.industry.trim()?(y.industry.trim().length<2||y.industry.trim().length>120)&&(w.industry="2 đến 120 ký tự"):w.industry="Vui lòng nhập ngành nghề",y.location&&y.location.length>100&&(w.location="Tối đa 100 ký tự"),y.goals.length===0?w.goals="Hiển thị, traffic, lead hoặc bán hàng":y.primaryGoal||(w.primaryGoal="Vui lòng chọn 1 mục tiêu ưu tiên"),y.description.trim()?(y.description.trim().length<10||y.description.trim().length>1e3)&&(w.description="10 đến 1000 ký tự"):w.description="Vui lòng nhập mô tả",C(w),Object.keys(w).length===0},D=w=>{w.preventDefault(),N()&&(K(!0),S&&S("DUDI đã nhận website và sẽ liên hệ để xác nhận mục tiêu trước khi audit.","success"))},Q=()=>{K(!1),s({website:"",fullName:"",phone:"",industry:"",location:"",goals:["Hiển thị","Traffic"],primaryGoal:"Traffic",budget:"",description:"",packageInterest:""}),C({})};return c.jsxs("section",{id:"s11-form",className:"section-wrapper bg-white form-section-wrapper",children:[c.jsx("div",{className:"container",children:c.jsx("div",{className:"form-banner-card reveal-scale",children:c.jsx("div",{className:"form-left-wrapper",children:c.jsxs("div",{className:"red-form-card",children:[c.jsxs("h2",{className:"form-card-title",children:["Gửi website để nhận đánh giá ",c.jsx("span",{className:"title-accent-badge",children:"SEO"})]}),c.jsx("p",{className:"form-card-sub",children:"DUDI sẽ liên hệ trực tiếp để xác nhận mục tiêu và gửi bản phân tích kỹ thuật chi tiết."}),k?c.jsxs("div",{className:"success-state",children:[c.jsx("div",{className:"success-icon-wrap",children:c.jsx(wh,{size:44,color:"#FFFFFF"})}),c.jsx("h3",{className:"success-title",children:"Đã gửi yêu cầu thành công!"}),c.jsx("p",{className:"success-message",children:"DUDI đã nhận website và sẽ liên hệ với quý khách trong thời gian sớm nhất."}),c.jsx("button",{onClick:Q,className:"btn btn-form-reset",children:"Gửi lại yêu cầu khác"})]}):c.jsxs("form",{onSubmit:D,noValidate:!0,children:[c.jsxs("div",{className:"form-grid",children:[c.jsxs("div",{className:"form-group col-span-2",children:[c.jsx("label",{htmlFor:"input-website",className:"form-label",children:"Website (Bắt buộc)"}),c.jsx("input",{id:"input-website",type:"url",placeholder:"https://example.com",value:y.website,onChange:w=>s({...y,website:w.target.value}),className:`form-input ${T.website?"is-invalid":""}`}),T.website&&c.jsx("span",{className:"error-text",children:T.website})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"input-name",className:"form-label",children:"Họ và tên (Bắt buộc)"}),c.jsx("input",{id:"input-name",type:"text",placeholder:"2 đến 80 ký tự",value:y.fullName,onChange:w=>s({...y,fullName:w.target.value}),className:`form-input ${T.fullName?"is-invalid":""}`}),T.fullName&&c.jsx("span",{className:"error-text",children:T.fullName})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"input-phone",className:"form-label",children:"Điện thoại / Zalo (Bắt buộc)"}),c.jsx("input",{id:"input-phone",type:"tel",placeholder:"9 đến 12 chữ số",value:y.phone,onChange:w=>s({...y,phone:w.target.value}),className:`form-input ${T.phone?"is-invalid":""}`}),T.phone&&c.jsx("span",{className:"error-text",children:T.phone})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"input-industry",className:"form-label",children:"Ngành nghề (Bắt buộc)"}),c.jsx("input",{id:"input-industry",type:"text",placeholder:"2 đến 120 ký tự",value:y.industry,onChange:w=>s({...y,industry:w.target.value}),className:`form-input ${T.industry?"is-invalid":""}`}),T.industry&&c.jsx("span",{className:"error-text",children:T.industry})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"input-location",className:"form-label",children:"Khu vực (Không bắt buộc)"}),c.jsx("input",{id:"input-location",type:"text",placeholder:"Tối đa 100 ký tự",value:y.location,onChange:w=>s({...y,location:w.target.value}),className:"form-input"}),T.location&&c.jsx("span",{className:"error-text",children:T.location})]}),c.jsxs("div",{className:"form-group col-span-2",children:[c.jsx("label",{className:"form-label",children:"Mục tiêu (Hiển thị, Traffic, Lead, Bán hàng)"}),c.jsx("div",{className:"goals-options-grid",children:G.map(w=>{const Y=y.goals.includes(w);return c.jsxs("label",{className:`goal-checkbox-label ${Y?"active":""}`,children:[c.jsx("input",{type:"checkbox",checked:Y,onChange:()=>O(w)}),c.jsx("span",{children:w})]},w)})}),T.goals&&c.jsx("span",{className:"error-text",children:T.goals}),y.goals.length>0&&c.jsxs("div",{className:"primary-goal-selector",children:[c.jsx("span",{className:"selector-title",children:"Ưu tiên:"}),c.jsx("div",{className:"radio-group",children:y.goals.map(w=>c.jsxs("label",{className:"radio-label",children:[c.jsx("input",{type:"radio",name:"primaryGoal",value:w,checked:y.primaryGoal===w,onChange:Y=>s({...y,primaryGoal:Y.target.value})}),c.jsx("span",{children:w})]},w))})]}),T.primaryGoal&&c.jsx("span",{className:"error-text",children:T.primaryGoal})]}),c.jsxs("div",{className:"form-group col-span-2",children:[c.jsx("label",{htmlFor:"select-budget",className:"form-label",children:"Ngân sách (Không bắt buộc)"}),c.jsx("select",{id:"select-budget",value:y.budget,onChange:w=>s({...y,budget:w.target.value}),className:"form-input form-select",children:ut.map((w,Y)=>c.jsx("option",{value:w.value,children:w.label},Y))})]}),c.jsxs("div",{className:"form-group col-span-2",children:[c.jsx("label",{htmlFor:"input-desc",className:"form-label",children:"Mô tả (Bắt buộc: 10 đến 1000 ký tự)"}),c.jsx("textarea",{id:"input-desc",rows:2,placeholder:"Mô tả chi tiết nhu cầu...",value:y.description,onChange:w=>s({...y,description:w.target.value}),className:`form-input ${T.description?"is-invalid":""}`}),T.description&&c.jsx("span",{className:"error-text",children:T.description})]})]}),c.jsx("div",{className:"form-actions",children:c.jsxs("button",{type:"submit",className:"btn btn-submit-white",children:[c.jsx("span",{children:"Gửi website để nhận đánh giá SEO"}),c.jsx(Qg,{size:15})]})})]})]})})})}),c.jsx("style",{children:`
        .form-section-wrapper {
          background-color: #FFFFFF !important;
          padding-top: 50px !important;
          padding-bottom: 50px !important;
          position: relative;
        }

        .form-banner-card {
          position: relative;
          background-image: url('/form-bg.webp');
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
          border-radius: 28px;
          padding: 0 !important;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.06);
          overflow: hidden;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: stretch;
        }

        .form-left-wrapper {
          max-width: 580px;
          width: 100%;
          position: relative;
          z-index: 2;
          display: flex;
        }

        /* Red Theme Form Card */
        .red-form-card {
          width: 100%;
          background: linear-gradient(145deg, #C62828 0%, #B71C1C 45%, #8E0000 100%);
          border-radius: 0;
          padding: 28px 32px;
          box-shadow: 4px 0 24px rgba(0, 0, 0, 0.12);
          color: #FFFFFF;
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .form-card-title {
          font-family: 'Chakra Petch', 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.2rem, 1.8vw, 1.45rem);
          font-weight: 800;
          letter-spacing: 0.02em;
          color: #FFFFFF;
          margin-bottom: 3px;
          line-height: 1.25;
        }

        .title-accent-badge {
          background: #FFFFFF;
          color: #B71C1C;
          padding: 2px 8px;
          border-radius: 6px;
          font-weight: 900;
          font-size: 0.9em;
          margin-left: 4px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .form-card-sub {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.35;
          margin-bottom: 12px;
          white-space: nowrap;
        }

        @media (max-width: 600px) {
          .form-card-sub {
            white-space: normal;
          }
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px 12px;
        }

        @media (max-width: 560px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .form-group.col-span-2 {
            grid-column: span 1;
          }
        }

        .col-span-2 {
          grid-column: span 2;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .form-label {
          font-size: 0.76rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.95);
        }

        .form-input {
          width: 100%;
          padding: 7px 11px;
          font-size: 0.84rem;
          font-family: inherit;
          color: #0F172A;
          background: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: var(--radius-md);
          outline: none;
          transition: all 0.2s ease;
          box-sizing: border-box;
        }

        .form-input:focus {
          background: #FFFFFF;
          border-color: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.35);
        }

        .form-input.is-invalid {
          border-color: #FCA5A5;
          background: #FFF5F5;
        }

        .form-select {
          cursor: pointer;
        }

        .error-text {
          font-size: 0.72rem;
          color: #FEE2E2;
          font-weight: 600;
          margin-top: 1px;
        }

        .goals-options-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
          margin-top: 2px;
        }

        @media (max-width: 560px) {
          .goals-options-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .goal-checkbox-label {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 5px 8px;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: var(--radius-md);
          cursor: pointer;
          font-size: 0.76rem;
          font-weight: 600;
          color: #FFFFFF;
          transition: all 0.2s ease;
        }

        .goal-checkbox-label:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        .goal-checkbox-label.active {
          background: #FFFFFF;
          border-color: #FFFFFF;
          color: #B71C1C;
          font-weight: 700;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }

        .primary-goal-selector {
          margin-top: 5px;
          padding: 5px 10px;
          background: rgba(0, 0, 0, 0.15);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .selector-title {
          font-size: 0.74rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
        }

        .radio-group {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .radio-label {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.76rem;
          font-weight: 600;
          color: #FFFFFF;
          cursor: pointer;
        }

        .form-actions {
          margin-top: 12px;
          display: flex;
          justify-content: center;
        }

        .btn-submit-white {
          background: #FFFFFF;
          color: #B71C1C;
          font-weight: 800;
          font-size: 0.88rem;
          padding: 9px 24px;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
        }

        .btn-submit-white:hover {
          background: #FFF5F5;
          color: #9A0007;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
        }

        .success-state {
          text-align: center;
          padding: 24px 16px;
        }

        .success-icon-wrap {
          margin-bottom: 8px;
        }

        .success-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 6px;
        }

        .success-message {
          font-size: 0.86rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 440px;
          margin: 0 auto 16px auto;
          line-height: 1.5;
        }

        .btn-form-reset {
          background: #FFFFFF;
          color: #B71C1C;
          font-weight: 700;
          padding: 8px 18px;
          border-radius: var(--radius-md);
        }

        @media (max-width: 900px) {
          .form-banner-card {
            background-position: right 30%;
            padding: 0 !important;
            border-radius: 20px;
            flex-direction: column;
          }
          .form-left-wrapper {
            max-width: 100%;
          }
          .red-form-card {
            padding: 22px 18px;
          }
        }
      `})]})}function p2({onNotify:v}){const S="0909 163 821",y="0909163821",s=T=>{/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768?window.location.href=`tel:${y}`:(T.preventDefault(),navigator.clipboard&&navigator.clipboard.writeText(S).then(()=>{v&&v(`Đã sao chép số điện thoại ${S} vào bộ nhớ tạm!`,"copy")}))};return c.jsxs("section",{id:"s12-cta",className:"section-wrapper bg-alt cta-section-container",children:[c.jsx("div",{className:"container",children:c.jsxs("div",{className:"payrot-cta-card reveal-scale",children:[c.jsx("div",{className:"notch-wrapper",children:c.jsxs("div",{className:"notch-circle-cutout",children:[c.jsx("div",{className:"mascot-glow-aura"}),c.jsx("img",{src:"/robot-head.webp",alt:"DUDI Software Robot Mascot",className:"notch-robot-mascot"})]})}),c.jsxs("div",{className:"payrot-cta-body",children:[c.jsxs("h2",{className:"payrot-cta-heading",children:["GỬI WEBSITE ĐỂ NHẬN ĐÁNH GIÁ ",c.jsx("span",{className:"payrot-red-text",children:"SEO"})]}),c.jsx("p",{className:"payrot-cta-desc",children:"DUDI sẽ liên hệ trực tiếp để xác nhận mục tiêu kinh doanh và gửi bản phân tích kỹ thuật chi tiết trước khi triển khai."}),c.jsxs("div",{className:"payrot-cta-actions",children:[c.jsxs("a",{href:"#s11-form",className:"btn btn-primary payrot-btn-main",children:[c.jsx("span",{children:"Gửi website để nhận đánh giá SEO"}),c.jsx(Bc,{size:16})]}),c.jsxs("button",{onClick:s,className:"btn payrot-btn-phone",title:"Gọi Hotline hoặc Sao chép số",children:[c.jsx(Do,{size:16,className:"phone-icon-accent"}),c.jsx("span",{children:S})]})]})]})]})}),c.jsx("style",{children:`
        .cta-section-container {
          padding-top: 60px !important;
          padding-bottom: 44px !important;
        }

        .payrot-cta-card {
          position: relative;
          background: linear-gradient(180deg, #10243B 0%, #081320 100%);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 32px;
          margin-top: 80px;
          padding: 85px 44px 44px 44px;
          text-align: center;
          box-shadow: 0 24px 50px -10px rgba(8, 19, 32, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
          overflow: visible;
          max-width: 1040px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Top Notch Component with Deep U-Scoop Cutout */
        .notch-wrapper {
          position: absolute;
          top: -85px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .notch-circle-cutout {
          position: relative;
          width: 210px;
          height: 145px;
          background: #F8FAFC;
          border-bottom-left-radius: 105px;
          border-bottom-right-radius: 105px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 0;
        }

        /* Mascot Robot Head & Glowing Aura */
        .mascot-glow-aura {
          position: absolute;
          width: 170px;
          height: 170px;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(239, 68, 68, 0.35) 0%, rgba(56, 189, 248, 0.25) 50%, transparent 70%);
          filter: blur(18px);
          z-index: 1;
          pointer-events: none;
        }

        .notch-robot-mascot {
          position: relative;
          z-index: 2;
          width: 175px;
          height: 175px;
          object-fit: contain;
          margin-top: -45px;
          filter: drop-shadow(0 14px 26px rgba(0, 0, 0, 0.55));
          animation: mascot-float 3.5s ease-in-out infinite;
          transition: transform 0.3s ease;
        }

        .notch-robot-mascot:hover {
          transform: scale(1.06) rotate(2deg);
        }

        @keyframes mascot-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        /* Body Content */
        .payrot-cta-body {
          max-width: 840px;
          margin: 0 auto;
        }

        .payrot-cta-heading {
          font-family: 'Chakra Petch', 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.35rem, 2.3vw, 1.85rem);
          font-weight: 800;
          letter-spacing: 0.03em;
          color: #FFFFFF;
          margin-bottom: 12px;
          line-height: 1.28;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
        }

        .payrot-red-text {
          color: #EF4444;
          text-shadow: 0 0 18px rgba(239, 68, 68, 0.5);
        }

        .payrot-cta-desc {
          font-size: 0.88rem;
          color: #94A3B8;
          line-height: 1.55;
          margin-bottom: 24px;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }

        .payrot-cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .payrot-btn-main {
          padding: 11px 26px;
          font-size: clamp(0.78rem, 1.2vw, 0.9rem);
          font-weight: 700;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 18px rgba(239, 68, 68, 0.45);
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .payrot-btn-main span {
          white-space: nowrap;
        }

        .payrot-btn-phone {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 24px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(8px);
          border-radius: var(--radius-full);
          color: #F8FAFC;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .payrot-btn-phone:hover {
          background: rgba(255, 255, 255, 0.14);
          border-color: rgba(239, 68, 68, 0.6);
          color: #FFFFFF;
          transform: translateY(-1px);
        }

        .phone-icon-accent {
          color: #EF4444;
        }

        @media (max-width: 640px) {
          .payrot-cta-card {
            padding: 60px 18px 28px 18px;
            margin-top: 50px;
          }
          .notch-circle-cutout {
            width: 160px;
            height: 110px;
            border-bottom-left-radius: 80px;
            border-bottom-right-radius: 80px;
          }
          .notch-wrapper {
            top: -65px;
          }
          .notch-robot-mascot {
            width: 130px;
            height: 130px;
            margin-top: -30px;
          }
          .payrot-cta-actions {
            flex-direction: column;
            width: 100%;
          }
          .payrot-btn-main, .payrot-btn-phone {
            width: 100%;
          }
        }
      `})]})}function g2({onNotify:v}){const S="0909 163 821",y="0909163821",s=C=>{/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768?window.location.href=`tel:${y}`:(C.preventDefault(),navigator.clipboard&&navigator.clipboard.writeText(S).then(()=>{v&&v(`Đã sao chép số điện thoại ${S} vào bộ nhớ tạm!`,"copy")}))},T=()=>{window.scrollTo({top:0,behavior:"smooth"})};return c.jsxs("footer",{id:"s13-footer",className:"sample-footer-root",children:[c.jsxs("div",{className:"container footer-content-container",children:[c.jsxs("div",{className:"sample-footer-grid",children:[c.jsxs("div",{className:"sample-footer-col col-info",children:[c.jsxs("div",{className:"sample-brand-row",children:[c.jsx("img",{src:"/logo.webp",alt:"DUDI Software",className:"sample-footer-logo"}),c.jsxs("span",{className:"sample-brand-name",children:["DUDI ",c.jsx("span",{className:"sample-brand-red",children:"Software"})]})]}),c.jsx("h4",{className:"sample-company-name",children:"Công ty TNHH Giải Pháp Phần Mềm DUDI"}),c.jsx("p",{className:"sample-company-desc",children:"Đơn vị cung cấp giải pháp thiết kế website giới thiệu doanh nghiệp chuẩn mực, tối ưu trải nghiệm người dùng và chuyển giao công nghệ toàn diện."}),c.jsxs("div",{className:"sample-meta-list",children:[c.jsxs("div",{className:"sample-meta-row",children:[c.jsx(Oo,{size:16,className:"sample-meta-icon"}),c.jsxs("span",{children:["Mã số thuế: ",c.jsx("strong",{children:"0319641544"})]})]}),c.jsxs("div",{className:"sample-meta-row",children:[c.jsx(qg,{size:16,className:"sample-meta-icon"}),c.jsx("span",{children:"Địa chỉ: 49/2 Đường 14, Phường Thủ Đức, Thành phố Hồ Chí Minh"})]})]})]}),c.jsxs("div",{className:"sample-footer-col col-contact",children:[c.jsx("h3",{className:"sample-col-heading",children:"LIÊN HỆ TRỰC TIẾP"}),c.jsxs("div",{className:"sample-contact-cards",children:[c.jsxs("button",{onClick:s,className:"sample-contact-card",title:"Hotline 0909 163 821",children:[c.jsx("div",{className:"sample-icon-box",children:c.jsx(Do,{size:18})}),c.jsx("div",{className:"sample-contact-text",children:c.jsxs("span",{children:["Hotline: ",c.jsx("strong",{children:S})]})})]}),c.jsxs("a",{href:"mailto:contact@dudisoftware.com",className:"sample-contact-card",title:"Email contact@dudisoftware.com",children:[c.jsx("div",{className:"sample-icon-box",children:c.jsx(kg,{size:18})}),c.jsx("div",{className:"sample-contact-text",children:c.jsx("span",{children:"contact@dudisoftware.com"})})]}),c.jsxs("a",{href:`https://zalo.me/${y}`,target:"_blank",rel:"noopener noreferrer",className:"sample-contact-card",title:"Zalo OA 0909 163 821",children:[c.jsx("div",{className:"sample-icon-box",children:c.jsx(Yg,{size:18})}),c.jsx("div",{className:"sample-contact-text",children:c.jsxs("span",{children:["Zalo OA: ",c.jsx("strong",{children:S})]})})]})]})]}),c.jsxs("div",{className:"sample-footer-col col-terms",children:[c.jsx("h3",{className:"sample-col-heading",children:"ĐIỀU KHOẢN & MINH BẠCH"}),c.jsxs("ul",{className:"sample-terms-ul",children:[c.jsxs("li",{children:[c.jsx("span",{className:"sample-bullet",children:"•"}),c.jsx("span",{children:"Minh bạch phạm vi theo hợp đồng"})]}),c.jsxs("li",{children:[c.jsx("span",{className:"sample-bullet",children:"•"}),c.jsx("span",{children:"Nghiệm thu theo từng mốc kỹ thuật"})]}),c.jsxs("li",{children:[c.jsx("span",{className:"sample-bullet",children:"•"}),c.jsx("span",{children:"Hỗ trợ xử lý lỗi phát sinh sau bàn giao"})]}),c.jsxs("li",{children:[c.jsx("span",{className:"sample-bullet",children:"•"}),c.jsx("span",{children:"Bảo mật thông tin khách hàng"})]})]}),c.jsxs("button",{onClick:T,className:"sample-backtotop-btn",children:[c.jsx(vh,{size:16}),c.jsx("span",{children:"Về đầu trang"})]})]})]}),c.jsxs("div",{className:"sample-footer-bottom",children:[c.jsx("div",{className:"sample-copyright",children:"Copyright © 2026 DUDI Software. All rights reserved."}),c.jsxs("div",{className:"sample-verified",children:[c.jsx(Wh,{size:18,color:"#10B981"}),c.jsx("span",{children:"Thông tin đăng ký kinh doanh chính thức"})]})]})]}),c.jsx("style",{children:`
        .sample-footer-root {
          background-color: #0B0E14;
          color: #E2E8F0;
          padding: 36px 24px 18px 24px;
          border-top: 1px solid #1E293B;
          font-family: var(--font-main);
        }

        .footer-content-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .sample-footer-grid {
          display: grid;
          grid-template-columns: 1.35fr 1.05fr 1fr;
          gap: 32px;
          margin-bottom: 24px;
        }

        @media (max-width: 992px) {
          .sample-footer-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        .sample-brand-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .sample-footer-logo {
          height: 32px;
          width: auto;
          object-fit: contain;
          border-radius: 6px;
        }

        .sample-brand-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: -0.5px;
        }

        .sample-brand-red {
          color: #EF4444;
        }

        .sample-company-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 8px;
        }

        .sample-company-desc {
          font-size: 0.84rem;
          color: #94A3B8;
          line-height: 1.45;
          margin-bottom: 14px;
          max-width: 440px;
        }

        .sample-meta-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.82rem;
          color: #CBD5E1;
        }

        .sample-meta-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.4;
        }

        .sample-meta-icon {
          color: #EF4444;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .sample-col-heading {
          font-size: 0.9rem;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: 0.5px;
          margin-bottom: 14px;
        }

        .sample-contact-cards {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sample-contact-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-md);
          color: #F1F5F9;
          text-decoration: none;
          cursor: pointer;
          font-size: 0.85rem;
          font-family: inherit;
          transition: all 0.2s ease;
          width: 100%;
          text-align: left;
        }

        .sample-contact-card:hover {
          background: rgba(239, 68, 68, 0.08);
          border-color: rgba(239, 68, 68, 0.3);
          transform: translateX(3px);
        }

        .sample-icon-box {
          width: 32px;
          height: 32px;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.25);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #EF4444;
          flex-shrink: 0;
        }

        .sample-contact-text strong {
          color: #FFFFFF;
          font-weight: 700;
        }

        .sample-terms-ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.84rem;
          color: #CBD5E1;
          margin-bottom: 16px;
        }

        .sample-terms-ul li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.4;
        }

        .sample-bullet {
          color: #94A3B8;
          font-size: 1rem;
          line-height: 1;
        }

        .sample-backtotop-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #1E2530;
          color: #FFFFFF;
          border: 1px solid #334155;
          padding: 8px 14px;
          border-radius: var(--radius-md);
          font-size: 0.84rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          outline: none;
        }

        .sample-backtotop-btn:hover {
          background: #2A3444;
          border-color: #475569;
          transform: translateY(-2px);
        }

        .sample-footer-bottom {
          padding-top: 16px;
          border-top: 1px solid #1E293B;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 0.82rem;
          color: #94A3B8;
        }

        .sample-verified {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #CBD5E1;
          font-weight: 500;
        }
      `})]})}function x2({onNotify:v}){const[S,y]=ot.useState(!1),s="0909 163 821",T="0909163821";ot.useEffect(()=>{const K=()=>{window.scrollY>350?y(!0):y(!1)};return window.addEventListener("scroll",K,{passive:!0}),()=>window.removeEventListener("scroll",K)},[]);const C=K=>{/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768?window.location.href=`tel:${T}`:(K.preventDefault(),navigator.clipboard?navigator.clipboard.writeText(s).then(()=>{v(`Đã sao chép số điện thoại ${s} vào bộ nhớ tạm!`,"copy")}).catch(()=>{v(`Số điện thoại: ${s}`,"info")}):v(`Số điện thoại: ${s}`,"info"))},k=()=>{window.scrollTo({top:0,behavior:"smooth"})};return c.jsxs("div",{className:"floating-actions","aria-label":"Kênh liên hệ và điều hướng",children:[c.jsx("button",{onClick:C,className:"float-btn float-btn-call",title:"Gọi điện hoặc sao chép Hotline 0909 163 821","aria-label":"Gọi điện Hotline 0909 163 821",children:c.jsx(Do,{size:24})}),c.jsx("a",{href:`https://zalo.me/${T}`,target:"_blank",rel:"noopener noreferrer",className:"float-btn float-btn-zalo",title:"Chat Zalo 0909 163 821","aria-label":"Chat Zalo 0909 163 821",children:c.jsx("span",{style:{fontWeight:800,fontSize:"0.95rem",letterSpacing:"-0.2px"},children:"Zalo"})}),c.jsx("button",{onClick:k,className:`float-btn float-btn-top ${S?"visible":""}`,title:"Lên lại đầu trang","aria-label":"Lên lại đầu trang",children:c.jsx(vh,{size:22})})]})}function b2({message:v,type:S="info",isVisible:y,onClose:s}){return y?c.jsxs("div",{className:`toast-notification ${y?"active":""}`,children:[S==="success"&&c.jsx(wh,{size:18,color:"#10B981"}),S==="copy"&&c.jsx(Hg,{size:18,color:"#38BDF8"}),S==="error"&&c.jsx(_g,{size:18,color:"#EF4444"}),c.jsx("span",{children:v})]}):null}function v2(){const[v,S]=ot.useState({isVisible:!1,message:"",type:"info"}),[y,s]=ot.useState(""),[T,C]=ot.useState(0);ot.useEffect(()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),window.scrollTo(0,0);const G=()=>{const Q=document.documentElement.scrollHeight-window.innerHeight;if(Q>0){const w=window.scrollY/Q*100;C(w)}};window.addEventListener("scroll",G,{passive:!0});const ut=(Q,w)=>{Q.forEach(Y=>{Y.isIntersecting&&(Y.target.classList.add("is-revealed"),w.unobserve(Y.target))})},O={root:null,rootMargin:"0px 0px -40px 0px",threshold:.05},N=new IntersectionObserver(ut,O);return document.querySelectorAll(".reveal-item, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-flip, .reveal-pop, .section-wrapper, .custom-card, .price-card, .step-card-modern, .problem-item-box, .deliverable-box, .target-card, .faq-item, .final-cta-card").forEach(Q=>{!Q.classList.contains("reveal-left")&&!Q.classList.contains("reveal-right")&&!Q.classList.contains("reveal-scale")&&!Q.classList.contains("reveal-flip")&&!Q.classList.contains("reveal-pop")&&!Q.classList.contains("reveal-up")&&Q.classList.add("reveal-up"),N.observe(Q)}),()=>{window.removeEventListener("scroll",G),N.disconnect()}},[]);const k=(G,ut="info")=>{S({isVisible:!0,message:G,type:ut}),setTimeout(()=>{S(O=>({...O,isVisible:!1}))},3500)},K=G=>{s(G),k(`Đã chọn gói dịch vụ: ${G}`,"info")};return c.jsxs("div",{className:"app-root page-fade-in",children:[c.jsx("div",{className:"scroll-progress-bar",style:{width:`${T}%`},"aria-hidden":"true"}),c.jsx(b2,{isVisible:v.isVisible,message:v.message,type:v.type,onClose:()=>S(G=>({...G,isVisible:!1}))}),c.jsx(l2,{}),c.jsxs("main",{children:[c.jsx(n2,{}),c.jsx(i2,{onSelectPackage:K}),c.jsx(c2,{}),c.jsx(u2,{}),c.jsx(r2,{onSelectPackage:K}),c.jsx(o2,{}),c.jsx(f2,{}),c.jsx(d2,{}),c.jsx(h2,{}),c.jsx(m2,{selectedPackage:y,onNotify:k}),c.jsx(p2,{onNotify:k})]}),c.jsx(g2,{onNotify:k}),c.jsx(x2,{onNotify:k})]})}gg.createRoot(document.getElementById("root")).render(c.jsx(gh.StrictMode,{children:c.jsx(v2,{})}));
