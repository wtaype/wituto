(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function Wf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var So={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var Gf=So.exports,ku;function Kf(){return ku||(ku=1,(function(n){(function(e,t){n.exports=e.document?t(e,!0):function(r){if(!r.document)throw new Error("jQuery requires a window with a document");return t(r)}})(typeof window<"u"?window:Gf,function(e,t){var r=[],i=Object.getPrototypeOf,a=r.slice,u=r.flat?function(s){return r.flat.call(s)}:function(s){return r.concat.apply([],s)},p=r.push,_=r.indexOf,v={},w=v.toString,P=v.hasOwnProperty,k=P.toString,B=k.call(Object),$={},G=function(c){return typeof c=="function"&&typeof c.nodeType!="number"&&typeof c.item!="function"},J=function(c){return c!=null&&c===c.window},Z=e.document,ye={type:!0,src:!0,nonce:!0,noModule:!0};function _e(s,c,h){h=h||Z;var f,m,y=h.createElement("script");if(y.text=s,c)for(f in ye)m=c[f]||c.getAttribute&&c.getAttribute(f),m&&y.setAttribute(f,m);h.head.appendChild(y).parentNode.removeChild(y)}function Ne(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?v[w.call(s)]||"object":typeof s}var wt="3.7.1",We=/HTML$/i,l=function(s,c){return new l.fn.init(s,c)};l.fn=l.prototype={jquery:wt,constructor:l,length:0,toArray:function(){return a.call(this)},get:function(s){return s==null?a.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var c=l.merge(this.constructor(),s);return c.prevObject=this,c},each:function(s){return l.each(this,s)},map:function(s){return this.pushStack(l.map(this,function(c,h){return s.call(c,h,c)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(s,c){return(c+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(s,c){return c%2}))},eq:function(s){var c=this.length,h=+s+(s<0?c:0);return this.pushStack(h>=0&&h<c?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:p,sort:r.sort,splice:r.splice},l.extend=l.fn.extend=function(){var s,c,h,f,m,y,E=arguments[0]||{},R=1,b=arguments.length,D=!1;for(typeof E=="boolean"&&(D=E,E=arguments[R]||{},R++),typeof E!="object"&&!G(E)&&(E={}),R===b&&(E=this,R--);R<b;R++)if((s=arguments[R])!=null)for(c in s)f=s[c],!(c==="__proto__"||E===f)&&(D&&f&&(l.isPlainObject(f)||(m=Array.isArray(f)))?(h=E[c],m&&!Array.isArray(h)?y=[]:!m&&!l.isPlainObject(h)?y={}:y=h,m=!1,E[c]=l.extend(D,y,f)):f!==void 0&&(E[c]=f));return E},l.extend({expando:"jQuery"+(wt+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var c,h;return!s||w.call(s)!=="[object Object]"?!1:(c=i(s),c?(h=P.call(c,"constructor")&&c.constructor,typeof h=="function"&&k.call(h)===B):!0)},isEmptyObject:function(s){var c;for(c in s)return!1;return!0},globalEval:function(s,c,h){_e(s,{nonce:c&&c.nonce},h)},each:function(s,c){var h,f=0;if(C(s))for(h=s.length;f<h&&c.call(s[f],f,s[f])!==!1;f++);else for(f in s)if(c.call(s[f],f,s[f])===!1)break;return s},text:function(s){var c,h="",f=0,m=s.nodeType;if(!m)for(;c=s[f++];)h+=l.text(c);return m===1||m===11?s.textContent:m===9?s.documentElement.textContent:m===3||m===4?s.nodeValue:h},makeArray:function(s,c){var h=c||[];return s!=null&&(C(Object(s))?l.merge(h,typeof s=="string"?[s]:s):p.call(h,s)),h},inArray:function(s,c,h){return c==null?-1:_.call(c,s,h)},isXMLDoc:function(s){var c=s&&s.namespaceURI,h=s&&(s.ownerDocument||s).documentElement;return!We.test(c||h&&h.nodeName||"HTML")},merge:function(s,c){for(var h=+c.length,f=0,m=s.length;f<h;f++)s[m++]=c[f];return s.length=m,s},grep:function(s,c,h){for(var f,m=[],y=0,E=s.length,R=!h;y<E;y++)f=!c(s[y],y),f!==R&&m.push(s[y]);return m},map:function(s,c,h){var f,m,y=0,E=[];if(C(s))for(f=s.length;y<f;y++)m=c(s[y],y,h),m!=null&&E.push(m);else for(y in s)m=c(s[y],y,h),m!=null&&E.push(m);return u(E)},guid:1,support:$}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=r[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,c){v["[object "+c+"]"]=c.toLowerCase()});function C(s){var c=!!s&&"length"in s&&s.length,h=Ne(s);return G(s)||J(s)?!1:h==="array"||c===0||typeof c=="number"&&c>0&&c-1 in s}function S(s,c){return s.nodeName&&s.nodeName.toLowerCase()===c.toLowerCase()}var N=r.pop,V=r.sort,M=r.splice,A="[\\x20\\t\\r\\n\\f]",gt=new RegExp("^"+A+"+|((?:^|[^\\\\])(?:\\\\.)*)"+A+"+$","g");l.contains=function(s,c){var h=c&&c.parentNode;return s===h||!!(h&&h.nodeType===1&&(s.contains?s.contains(h):s.compareDocumentPosition&&s.compareDocumentPosition(h)&16))};var yr=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Ca(s,c){return c?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}l.escapeSelector=function(s){return(s+"").replace(yr,Ca)};var mt=Z,_n=p;(function(){var s,c,h,f,m,y=_n,E,R,b,D,q,H=l.expando,F=0,Q=0,ue=Pn(),we=Pn(),de=Pn(),Ke=Pn(),$e=function(I,x){return I===x&&(m=!0),0},Pt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",kt="(?:\\\\[\\da-fA-F]{1,6}"+A+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Ee="\\["+A+"*("+kt+")(?:"+A+"*([*^$|!~]?=)"+A+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+kt+"))|)"+A+"*\\]",Be=":("+kt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Ee+")*)|.*)\\)|)",Ae=new RegExp(A+"+","g"),Ue=new RegExp("^"+A+"*,"+A+"*"),Ft=new RegExp("^"+A+"*([>+~]|"+A+")"+A+"*"),o=new RegExp(A+"|>"),d=new RegExp(Be),g=new RegExp("^"+kt+"$"),T={ID:new RegExp("^#("+kt+")"),CLASS:new RegExp("^\\.("+kt+")"),TAG:new RegExp("^("+kt+"|[*])"),ATTR:new RegExp("^"+Ee),PSEUDO:new RegExp("^"+Be),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+A+"*(even|odd|(([+-]|)(\\d*)n|)"+A+"*(?:([+-]|)"+A+"*(\\d+)|))"+A+"*\\)|)","i"),bool:new RegExp("^(?:"+Pt+")$","i"),needsContext:new RegExp("^"+A+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+A+"*((?:-\\d)?\\d*)"+A+"*\\)|)(?=[^-]|$)","i")},O=/^(?:input|select|textarea|button)$/i,U=/^h\d$/i,X=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,xe=/[+~]/,Oe=new RegExp("\\\\[\\da-fA-F]{1,6}"+A+"?|\\\\([^\\r\\n\\f])","g"),ve=function(I,x){var L="0x"+I.slice(1)-65536;return x||(L<0?String.fromCharCode(L+65536):String.fromCharCode(L>>10|55296,L&1023|56320))},nt=function(){Qn()},rt=_o(function(I){return I.disabled===!0&&S(I,"fieldset")},{dir:"parentNode",next:"legend"});function Kn(){try{return E.activeElement}catch{}}try{y.apply(r=a.call(mt.childNodes),mt.childNodes),r[mt.childNodes.length].nodeType}catch{y={apply:function(x,L){_n.apply(x,a.call(L))},call:function(x){_n.apply(x,a.call(arguments,1))}}}function Te(I,x,L,j){var z,ee,ne,oe,re,Ie,fe,pe=x&&x.ownerDocument,be=x?x.nodeType:9;if(L=L||[],typeof I!="string"||!I||be!==1&&be!==9&&be!==11)return L;if(!j&&(Qn(x),x=x||E,b)){if(be!==11&&(re=X.exec(I)))if(z=re[1]){if(be===9)if(ne=x.getElementById(z)){if(ne.id===z)return y.call(L,ne),L}else return L;else if(pe&&(ne=pe.getElementById(z))&&Te.contains(x,ne)&&ne.id===z)return y.call(L,ne),L}else{if(re[2])return y.apply(L,x.getElementsByTagName(I)),L;if((z=re[3])&&x.getElementsByClassName)return y.apply(L,x.getElementsByClassName(z)),L}if(!Ke[I+" "]&&(!D||!D.test(I))){if(fe=I,pe=x,be===1&&(o.test(I)||Ft.test(I))){for(pe=xe.test(I)&&qa(x.parentNode)||x,(pe!=x||!$.scope)&&((oe=x.getAttribute("id"))?oe=l.escapeSelector(oe):x.setAttribute("id",oe=H)),Ie=os(I),ee=Ie.length;ee--;)Ie[ee]=(oe?"#"+oe:":scope")+" "+yo(Ie[ee]);fe=Ie.join(",")}try{return y.apply(L,pe.querySelectorAll(fe)),L}catch{Ke(I,!0)}finally{oe===H&&x.removeAttribute("id")}}}return Pu(I.replace(gt,"$1"),x,L,j)}function Pn(){var I=[];function x(L,j){return I.push(L+" ")>c.cacheLength&&delete x[I.shift()],x[L+" "]=j}return x}function Et(I){return I[H]=!0,I}function di(I){var x=E.createElement("fieldset");try{return!!I(x)}catch{return!1}finally{x.parentNode&&x.parentNode.removeChild(x),x=null}}function $f(I){return function(x){return S(x,"input")&&x.type===I}}function Bf(I){return function(x){return(S(x,"input")||S(x,"button"))&&x.type===I}}function Cu(I){return function(x){return"form"in x?x.parentNode&&x.disabled===!1?"label"in x?"label"in x.parentNode?x.parentNode.disabled===I:x.disabled===I:x.isDisabled===I||x.isDisabled!==!I&&rt(x)===I:x.disabled===I:"label"in x?x.disabled===I:!1}}function kr(I){return Et(function(x){return x=+x,Et(function(L,j){for(var z,ee=I([],L.length,x),ne=ee.length;ne--;)L[z=ee[ne]]&&(L[z]=!(j[z]=L[z]))})})}function qa(I){return I&&typeof I.getElementsByTagName<"u"&&I}function Qn(I){var x,L=I?I.ownerDocument||I:mt;return L==E||L.nodeType!==9||!L.documentElement||(E=L,R=E.documentElement,b=!l.isXMLDoc(E),q=R.matches||R.webkitMatchesSelector||R.msMatchesSelector,R.msMatchesSelector&&mt!=E&&(x=E.defaultView)&&x.top!==x&&x.addEventListener("unload",nt),$.getById=di(function(j){return R.appendChild(j).id=l.expando,!E.getElementsByName||!E.getElementsByName(l.expando).length}),$.disconnectedMatch=di(function(j){return q.call(j,"*")}),$.scope=di(function(){return E.querySelectorAll(":scope")}),$.cssHas=di(function(){try{return E.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),$.getById?(c.filter.ID=function(j){var z=j.replace(Oe,ve);return function(ee){return ee.getAttribute("id")===z}},c.find.ID=function(j,z){if(typeof z.getElementById<"u"&&b){var ee=z.getElementById(j);return ee?[ee]:[]}}):(c.filter.ID=function(j){var z=j.replace(Oe,ve);return function(ee){var ne=typeof ee.getAttributeNode<"u"&&ee.getAttributeNode("id");return ne&&ne.value===z}},c.find.ID=function(j,z){if(typeof z.getElementById<"u"&&b){var ee,ne,oe,re=z.getElementById(j);if(re){if(ee=re.getAttributeNode("id"),ee&&ee.value===j)return[re];for(oe=z.getElementsByName(j),ne=0;re=oe[ne++];)if(ee=re.getAttributeNode("id"),ee&&ee.value===j)return[re]}return[]}}),c.find.TAG=function(j,z){return typeof z.getElementsByTagName<"u"?z.getElementsByTagName(j):z.querySelectorAll(j)},c.find.CLASS=function(j,z){if(typeof z.getElementsByClassName<"u"&&b)return z.getElementsByClassName(j)},D=[],di(function(j){var z;R.appendChild(j).innerHTML="<a id='"+H+"' href='' disabled='disabled'></a><select id='"+H+"-\r\\' disabled='disabled'><option selected=''></option></select>",j.querySelectorAll("[selected]").length||D.push("\\["+A+"*(?:value|"+Pt+")"),j.querySelectorAll("[id~="+H+"-]").length||D.push("~="),j.querySelectorAll("a#"+H+"+*").length||D.push(".#.+[+~]"),j.querySelectorAll(":checked").length||D.push(":checked"),z=E.createElement("input"),z.setAttribute("type","hidden"),j.appendChild(z).setAttribute("name","D"),R.appendChild(j).disabled=!0,j.querySelectorAll(":disabled").length!==2&&D.push(":enabled",":disabled"),z=E.createElement("input"),z.setAttribute("name",""),j.appendChild(z),j.querySelectorAll("[name='']").length||D.push("\\["+A+"*name"+A+"*="+A+`*(?:''|"")`)}),$.cssHas||D.push(":has"),D=D.length&&new RegExp(D.join("|")),$e=function(j,z){if(j===z)return m=!0,0;var ee=!j.compareDocumentPosition-!z.compareDocumentPosition;return ee||(ee=(j.ownerDocument||j)==(z.ownerDocument||z)?j.compareDocumentPosition(z):1,ee&1||!$.sortDetached&&z.compareDocumentPosition(j)===ee?j===E||j.ownerDocument==mt&&Te.contains(mt,j)?-1:z===E||z.ownerDocument==mt&&Te.contains(mt,z)?1:f?_.call(f,j)-_.call(f,z):0:ee&4?-1:1)}),E}Te.matches=function(I,x){return Te(I,null,null,x)},Te.matchesSelector=function(I,x){if(Qn(I),b&&!Ke[x+" "]&&(!D||!D.test(x)))try{var L=q.call(I,x);if(L||$.disconnectedMatch||I.document&&I.document.nodeType!==11)return L}catch{Ke(x,!0)}return Te(x,E,null,[I]).length>0},Te.contains=function(I,x){return(I.ownerDocument||I)!=E&&Qn(I),l.contains(I,x)},Te.attr=function(I,x){(I.ownerDocument||I)!=E&&Qn(I);var L=c.attrHandle[x.toLowerCase()],j=L&&P.call(c.attrHandle,x.toLowerCase())?L(I,x,!b):void 0;return j!==void 0?j:I.getAttribute(x)},Te.error=function(I){throw new Error("Syntax error, unrecognized expression: "+I)},l.uniqueSort=function(I){var x,L=[],j=0,z=0;if(m=!$.sortStable,f=!$.sortStable&&a.call(I,0),V.call(I,$e),m){for(;x=I[z++];)x===I[z]&&(j=L.push(z));for(;j--;)M.call(I,L[j],1)}return f=null,I},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(a.apply(this)))},c=l.expr={cacheLength:50,createPseudo:Et,match:T,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(I){return I[1]=I[1].replace(Oe,ve),I[3]=(I[3]||I[4]||I[5]||"").replace(Oe,ve),I[2]==="~="&&(I[3]=" "+I[3]+" "),I.slice(0,4)},CHILD:function(I){return I[1]=I[1].toLowerCase(),I[1].slice(0,3)==="nth"?(I[3]||Te.error(I[0]),I[4]=+(I[4]?I[5]+(I[6]||1):2*(I[3]==="even"||I[3]==="odd")),I[5]=+(I[7]+I[8]||I[3]==="odd")):I[3]&&Te.error(I[0]),I},PSEUDO:function(I){var x,L=!I[6]&&I[2];return T.CHILD.test(I[0])?null:(I[3]?I[2]=I[4]||I[5]||"":L&&d.test(L)&&(x=os(L,!0))&&(x=L.indexOf(")",L.length-x)-L.length)&&(I[0]=I[0].slice(0,x),I[2]=L.slice(0,x)),I.slice(0,3))}},filter:{TAG:function(I){var x=I.replace(Oe,ve).toLowerCase();return I==="*"?function(){return!0}:function(L){return S(L,x)}},CLASS:function(I){var x=ue[I+" "];return x||(x=new RegExp("(^|"+A+")"+I+"("+A+"|$)"))&&ue(I,function(L){return x.test(typeof L.className=="string"&&L.className||typeof L.getAttribute<"u"&&L.getAttribute("class")||"")})},ATTR:function(I,x,L){return function(j){var z=Te.attr(j,I);return z==null?x==="!=":x?(z+="",x==="="?z===L:x==="!="?z!==L:x==="^="?L&&z.indexOf(L)===0:x==="*="?L&&z.indexOf(L)>-1:x==="$="?L&&z.slice(-L.length)===L:x==="~="?(" "+z.replace(Ae," ")+" ").indexOf(L)>-1:x==="|="?z===L||z.slice(0,L.length+1)===L+"-":!1):!0}},CHILD:function(I,x,L,j,z){var ee=I.slice(0,3)!=="nth",ne=I.slice(-4)!=="last",oe=x==="of-type";return j===1&&z===0?function(re){return!!re.parentNode}:function(re,Ie,fe){var pe,be,ce,Me,bt,lt=ee!==ne?"nextSibling":"previousSibling",Ut=re.parentNode,an=oe&&re.nodeName.toLowerCase(),fi=!fe&&!oe,Tt=!1;if(Ut){if(ee){for(;lt;){for(ce=re;ce=ce[lt];)if(oe?S(ce,an):ce.nodeType===1)return!1;bt=lt=I==="only"&&!bt&&"nextSibling"}return!0}if(bt=[ne?Ut.firstChild:Ut.lastChild],ne&&fi){for(be=Ut[H]||(Ut[H]={}),pe=be[I]||[],Me=pe[0]===F&&pe[1],Tt=Me&&pe[2],ce=Me&&Ut.childNodes[Me];ce=++Me&&ce&&ce[lt]||(Tt=Me=0)||bt.pop();)if(ce.nodeType===1&&++Tt&&ce===re){be[I]=[F,Me,Tt];break}}else if(fi&&(be=re[H]||(re[H]={}),pe=be[I]||[],Me=pe[0]===F&&pe[1],Tt=Me),Tt===!1)for(;(ce=++Me&&ce&&ce[lt]||(Tt=Me=0)||bt.pop())&&!((oe?S(ce,an):ce.nodeType===1)&&++Tt&&(fi&&(be=ce[H]||(ce[H]={}),be[I]=[F,Tt]),ce===re)););return Tt-=z,Tt===j||Tt%j===0&&Tt/j>=0}}},PSEUDO:function(I,x){var L,j=c.pseudos[I]||c.setFilters[I.toLowerCase()]||Te.error("unsupported pseudo: "+I);return j[H]?j(x):j.length>1?(L=[I,I,"",x],c.setFilters.hasOwnProperty(I.toLowerCase())?Et(function(z,ee){for(var ne,oe=j(z,x),re=oe.length;re--;)ne=_.call(z,oe[re]),z[ne]=!(ee[ne]=oe[re])}):function(z){return j(z,0,L)}):j}},pseudos:{not:Et(function(I){var x=[],L=[],j=za(I.replace(gt,"$1"));return j[H]?Et(function(z,ee,ne,oe){for(var re,Ie=j(z,null,oe,[]),fe=z.length;fe--;)(re=Ie[fe])&&(z[fe]=!(ee[fe]=re))}):function(z,ee,ne){return x[0]=z,j(x,null,ne,L),x[0]=null,!L.pop()}}),has:Et(function(I){return function(x){return Te(I,x).length>0}}),contains:Et(function(I){return I=I.replace(Oe,ve),function(x){return(x.textContent||l.text(x)).indexOf(I)>-1}}),lang:Et(function(I){return g.test(I||"")||Te.error("unsupported lang: "+I),I=I.replace(Oe,ve).toLowerCase(),function(x){var L;do if(L=b?x.lang:x.getAttribute("xml:lang")||x.getAttribute("lang"))return L=L.toLowerCase(),L===I||L.indexOf(I+"-")===0;while((x=x.parentNode)&&x.nodeType===1);return!1}}),target:function(I){var x=e.location&&e.location.hash;return x&&x.slice(1)===I.id},root:function(I){return I===R},focus:function(I){return I===Kn()&&E.hasFocus()&&!!(I.type||I.href||~I.tabIndex)},enabled:Cu(!1),disabled:Cu(!0),checked:function(I){return S(I,"input")&&!!I.checked||S(I,"option")&&!!I.selected},selected:function(I){return I.parentNode&&I.parentNode.selectedIndex,I.selected===!0},empty:function(I){for(I=I.firstChild;I;I=I.nextSibling)if(I.nodeType<6)return!1;return!0},parent:function(I){return!c.pseudos.empty(I)},header:function(I){return U.test(I.nodeName)},input:function(I){return O.test(I.nodeName)},button:function(I){return S(I,"input")&&I.type==="button"||S(I,"button")},text:function(I){var x;return S(I,"input")&&I.type==="text"&&((x=I.getAttribute("type"))==null||x.toLowerCase()==="text")},first:kr(function(){return[0]}),last:kr(function(I,x){return[x-1]}),eq:kr(function(I,x,L){return[L<0?L+x:L]}),even:kr(function(I,x){for(var L=0;L<x;L+=2)I.push(L);return I}),odd:kr(function(I,x){for(var L=1;L<x;L+=2)I.push(L);return I}),lt:kr(function(I,x,L){var j;for(L<0?j=L+x:L>x?j=x:j=L;--j>=0;)I.push(j);return I}),gt:kr(function(I,x,L){for(var j=L<0?L+x:L;++j<x;)I.push(j);return I})}},c.pseudos.nth=c.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})c.pseudos[s]=$f(s);for(s in{submit:!0,reset:!0})c.pseudos[s]=Bf(s);function Ru(){}Ru.prototype=c.filters=c.pseudos,c.setFilters=new Ru;function os(I,x){var L,j,z,ee,ne,oe,re,Ie=we[I+" "];if(Ie)return x?0:Ie.slice(0);for(ne=I,oe=[],re=c.preFilter;ne;){(!L||(j=Ue.exec(ne)))&&(j&&(ne=ne.slice(j[0].length)||ne),oe.push(z=[])),L=!1,(j=Ft.exec(ne))&&(L=j.shift(),z.push({value:L,type:j[0].replace(gt," ")}),ne=ne.slice(L.length));for(ee in c.filter)(j=T[ee].exec(ne))&&(!re[ee]||(j=re[ee](j)))&&(L=j.shift(),z.push({value:L,type:ee,matches:j}),ne=ne.slice(L.length));if(!L)break}return x?ne.length:ne?Te.error(I):we(I,oe).slice(0)}function yo(I){for(var x=0,L=I.length,j="";x<L;x++)j+=I[x].value;return j}function _o(I,x,L){var j=x.dir,z=x.next,ee=z||j,ne=L&&ee==="parentNode",oe=Q++;return x.first?function(re,Ie,fe){for(;re=re[j];)if(re.nodeType===1||ne)return I(re,Ie,fe);return!1}:function(re,Ie,fe){var pe,be,ce=[F,oe];if(fe){for(;re=re[j];)if((re.nodeType===1||ne)&&I(re,Ie,fe))return!0}else for(;re=re[j];)if(re.nodeType===1||ne)if(be=re[H]||(re[H]={}),z&&S(re,z))re=re[j]||re;else{if((pe=be[ee])&&pe[0]===F&&pe[1]===oe)return ce[2]=pe[2];if(be[ee]=ce,ce[2]=I(re,Ie,fe))return!0}return!1}}function $a(I){return I.length>1?function(x,L,j){for(var z=I.length;z--;)if(!I[z](x,L,j))return!1;return!0}:I[0]}function Hf(I,x,L){for(var j=0,z=x.length;j<z;j++)Te(I,x[j],L);return L}function vo(I,x,L,j,z){for(var ee,ne=[],oe=0,re=I.length,Ie=x!=null;oe<re;oe++)(ee=I[oe])&&(!L||L(ee,j,z))&&(ne.push(ee),Ie&&x.push(oe));return ne}function Ba(I,x,L,j,z,ee){return j&&!j[H]&&(j=Ba(j)),z&&!z[H]&&(z=Ba(z,ee)),Et(function(ne,oe,re,Ie){var fe,pe,be,ce,Me=[],bt=[],lt=oe.length,Ut=ne||Hf(x||"*",re.nodeType?[re]:re,[]),an=I&&(ne||!x)?vo(Ut,Me,I,re,Ie):Ut;if(L?(ce=z||(ne?I:lt||j)?[]:oe,L(an,ce,re,Ie)):ce=an,j)for(fe=vo(ce,bt),j(fe,[],re,Ie),pe=fe.length;pe--;)(be=fe[pe])&&(ce[bt[pe]]=!(an[bt[pe]]=be));if(ne){if(z||I){if(z){for(fe=[],pe=ce.length;pe--;)(be=ce[pe])&&fe.push(an[pe]=be);z(null,ce=[],fe,Ie)}for(pe=ce.length;pe--;)(be=ce[pe])&&(fe=z?_.call(ne,be):Me[pe])>-1&&(ne[fe]=!(oe[fe]=be))}}else ce=vo(ce===oe?ce.splice(lt,ce.length):ce),z?z(null,oe,ce,Ie):y.apply(oe,ce)})}function Ha(I){for(var x,L,j,z=I.length,ee=c.relative[I[0].type],ne=ee||c.relative[" "],oe=ee?1:0,re=_o(function(pe){return pe===x},ne,!0),Ie=_o(function(pe){return _.call(x,pe)>-1},ne,!0),fe=[function(pe,be,ce){var Me=!ee&&(ce||be!=h)||((x=be).nodeType?re(pe,be,ce):Ie(pe,be,ce));return x=null,Me}];oe<z;oe++)if(L=c.relative[I[oe].type])fe=[_o($a(fe),L)];else{if(L=c.filter[I[oe].type].apply(null,I[oe].matches),L[H]){for(j=++oe;j<z&&!c.relative[I[j].type];j++);return Ba(oe>1&&$a(fe),oe>1&&yo(I.slice(0,oe-1).concat({value:I[oe-2].type===" "?"*":""})).replace(gt,"$1"),L,oe<j&&Ha(I.slice(oe,j)),j<z&&Ha(I=I.slice(j)),j<z&&yo(I))}fe.push(L)}return $a(fe)}function zf(I,x){var L=x.length>0,j=I.length>0,z=function(ee,ne,oe,re,Ie){var fe,pe,be,ce=0,Me="0",bt=ee&&[],lt=[],Ut=h,an=ee||j&&c.find.TAG("*",Ie),fi=F+=Ut==null?1:Math.random()||.1,Tt=an.length;for(Ie&&(h=ne==E||ne||Ie);Me!==Tt&&(fe=an[Me])!=null;Me++){if(j&&fe){for(pe=0,!ne&&fe.ownerDocument!=E&&(Qn(fe),oe=!b);be=I[pe++];)if(be(fe,ne||E,oe)){y.call(re,fe);break}Ie&&(F=fi)}L&&((fe=!be&&fe)&&ce--,ee&&bt.push(fe))}if(ce+=Me,L&&Me!==ce){for(pe=0;be=x[pe++];)be(bt,lt,ne,oe);if(ee){if(ce>0)for(;Me--;)bt[Me]||lt[Me]||(lt[Me]=N.call(re));lt=vo(lt)}y.apply(re,lt),Ie&&!ee&&lt.length>0&&ce+x.length>1&&l.uniqueSort(re)}return Ie&&(F=fi,h=Ut),bt};return L?Et(z):z}function za(I,x){var L,j=[],z=[],ee=de[I+" "];if(!ee){for(x||(x=os(I)),L=x.length;L--;)ee=Ha(x[L]),ee[H]?j.push(ee):z.push(ee);ee=de(I,zf(z,j)),ee.selector=I}return ee}function Pu(I,x,L,j){var z,ee,ne,oe,re,Ie=typeof I=="function"&&I,fe=!j&&os(I=Ie.selector||I);if(L=L||[],fe.length===1){if(ee=fe[0]=fe[0].slice(0),ee.length>2&&(ne=ee[0]).type==="ID"&&x.nodeType===9&&b&&c.relative[ee[1].type]){if(x=(c.find.ID(ne.matches[0].replace(Oe,ve),x)||[])[0],x)Ie&&(x=x.parentNode);else return L;I=I.slice(ee.shift().value.length)}for(z=T.needsContext.test(I)?0:ee.length;z--&&(ne=ee[z],!c.relative[oe=ne.type]);)if((re=c.find[oe])&&(j=re(ne.matches[0].replace(Oe,ve),xe.test(ee[0].type)&&qa(x.parentNode)||x))){if(ee.splice(z,1),I=j.length&&yo(ee),!I)return y.apply(L,j),L;break}}return(Ie||za(I,fe))(j,x,!b,L,!x||xe.test(I)&&qa(x.parentNode)||x),L}$.sortStable=H.split("").sort($e).join("")===H,Qn(),$.sortDetached=di(function(I){return I.compareDocumentPosition(E.createElement("fieldset"))&1}),l.find=Te,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,Te.compile=za,Te.select=Pu,Te.setDocument=Qn,Te.tokenize=os,Te.escape=l.escapeSelector,Te.getText=l.text,Te.isXML=l.isXMLDoc,Te.selectors=l.expr,Te.support=l.support,Te.uniqueSort=l.uniqueSort})();var Xt=function(s,c,h){for(var f=[],m=h!==void 0;(s=s[c])&&s.nodeType!==9;)if(s.nodeType===1){if(m&&l(s).is(h))break;f.push(s)}return f},$i=function(s,c){for(var h=[];s;s=s.nextSibling)s.nodeType===1&&s!==c&&h.push(s);return h},Ks=l.expr.match.needsContext,Bt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Ge(s,c,h){return G(c)?l.grep(s,function(f,m){return!!c.call(f,m,f)!==h}):c.nodeType?l.grep(s,function(f){return f===c!==h}):typeof c!="string"?l.grep(s,function(f){return _.call(c,f)>-1!==h}):l.filter(c,s,h)}l.filter=function(s,c,h){var f=c[0];return h&&(s=":not("+s+")"),c.length===1&&f.nodeType===1?l.find.matchesSelector(f,s)?[f]:[]:l.find.matches(s,l.grep(c,function(m){return m.nodeType===1}))},l.fn.extend({find:function(s){var c,h,f=this.length,m=this;if(typeof s!="string")return this.pushStack(l(s).filter(function(){for(c=0;c<f;c++)if(l.contains(m[c],this))return!0}));for(h=this.pushStack([]),c=0;c<f;c++)l.find(s,m[c],h);return f>1?l.uniqueSort(h):h},filter:function(s){return this.pushStack(Ge(this,s||[],!1))},not:function(s){return this.pushStack(Ge(this,s||[],!0))},is:function(s){return!!Ge(this,typeof s=="string"&&Ks.test(s)?l(s):s||[],!1).length}});var Qs,_r=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ra=l.fn.init=function(s,c,h){var f,m;if(!s)return this;if(h=h||Qs,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?f=[null,s,null]:f=_r.exec(s),f&&(f[1]||!c))if(f[1]){if(c=c instanceof l?c[0]:c,l.merge(this,l.parseHTML(f[1],c&&c.nodeType?c.ownerDocument||c:Z,!0)),Bt.test(f[1])&&l.isPlainObject(c))for(f in c)G(this[f])?this[f](c[f]):this.attr(f,c[f]);return this}else return m=Z.getElementById(f[2]),m&&(this[0]=m,this.length=1),this;else return!c||c.jquery?(c||h).find(s):this.constructor(c).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(G(s))return h.ready!==void 0?h.ready(s):s(l)}return l.makeArray(s,this)};Ra.prototype=l.fn,Qs=l(Z);var Br=/^(?:parents|prev(?:Until|All))/,Pa={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(s){var c=l(s,this),h=c.length;return this.filter(function(){for(var f=0;f<h;f++)if(l.contains(this,c[f]))return!0})},closest:function(s,c){var h,f=0,m=this.length,y=[],E=typeof s!="string"&&l(s);if(!Ks.test(s)){for(;f<m;f++)for(h=this[f];h&&h!==c;h=h.parentNode)if(h.nodeType<11&&(E?E.index(h)>-1:h.nodeType===1&&l.find.matchesSelector(h,s))){y.push(h);break}}return this.pushStack(y.length>1?l.uniqueSort(y):y)},index:function(s){return s?typeof s=="string"?_.call(l(s),this[0]):_.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,c){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(s,c))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function Ys(s,c){for(;(s=s[c])&&s.nodeType!==1;);return s}l.each({parent:function(s){var c=s.parentNode;return c&&c.nodeType!==11?c:null},parents:function(s){return Xt(s,"parentNode")},parentsUntil:function(s,c,h){return Xt(s,"parentNode",h)},next:function(s){return Ys(s,"nextSibling")},prev:function(s){return Ys(s,"previousSibling")},nextAll:function(s){return Xt(s,"nextSibling")},prevAll:function(s){return Xt(s,"previousSibling")},nextUntil:function(s,c,h){return Xt(s,"nextSibling",h)},prevUntil:function(s,c,h){return Xt(s,"previousSibling",h)},siblings:function(s){return $i((s.parentNode||{}).firstChild,s)},children:function(s){return $i(s.firstChild)},contents:function(s){return s.contentDocument!=null&&i(s.contentDocument)?s.contentDocument:(S(s,"template")&&(s=s.content||s),l.merge([],s.childNodes))}},function(s,c){l.fn[s]=function(h,f){var m=l.map(this,c,h);return s.slice(-5)!=="Until"&&(f=h),f&&typeof f=="string"&&(m=l.filter(f,m)),this.length>1&&(Pa[s]||l.uniqueSort(m),Br.test(s)&&m.reverse()),this.pushStack(m)}});var yt=/[^\x20\t\r\n\f]+/g;function Hr(s){var c={};return l.each(s.match(yt)||[],function(h,f){c[f]=!0}),c}l.Callbacks=function(s){s=typeof s=="string"?Hr(s):l.extend({},s);var c,h,f,m,y=[],E=[],R=-1,b=function(){for(m=m||s.once,f=c=!0;E.length;R=-1)for(h=E.shift();++R<y.length;)y[R].apply(h[0],h[1])===!1&&s.stopOnFalse&&(R=y.length,h=!1);s.memory||(h=!1),c=!1,m&&(h?y=[]:y="")},D={add:function(){return y&&(h&&!c&&(R=y.length-1,E.push(h)),(function q(H){l.each(H,function(F,Q){G(Q)?(!s.unique||!D.has(Q))&&y.push(Q):Q&&Q.length&&Ne(Q)!=="string"&&q(Q)})})(arguments),h&&!c&&b()),this},remove:function(){return l.each(arguments,function(q,H){for(var F;(F=l.inArray(H,y,F))>-1;)y.splice(F,1),F<=R&&R--}),this},has:function(q){return q?l.inArray(q,y)>-1:y.length>0},empty:function(){return y&&(y=[]),this},disable:function(){return m=E=[],y=h="",this},disabled:function(){return!y},lock:function(){return m=E=[],!h&&!c&&(y=h=""),this},locked:function(){return!!m},fireWith:function(q,H){return m||(H=H||[],H=[q,H.slice?H.slice():H],E.push(H),c||b()),this},fire:function(){return D.fireWith(this,arguments),this},fired:function(){return!!f}};return D};function Jt(s){return s}function $n(s){throw s}function zr(s,c,h,f){var m;try{s&&G(m=s.promise)?m.call(s).done(c).fail(h):s&&G(m=s.then)?m.call(s,c,h):c.apply(void 0,[s].slice(f))}catch(y){h.apply(void 0,[y])}}l.extend({Deferred:function(s){var c=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],h="pending",f={state:function(){return h},always:function(){return m.done(arguments).fail(arguments),this},catch:function(y){return f.then(null,y)},pipe:function(){var y=arguments;return l.Deferred(function(E){l.each(c,function(R,b){var D=G(y[b[4]])&&y[b[4]];m[b[1]](function(){var q=D&&D.apply(this,arguments);q&&G(q.promise)?q.promise().progress(E.notify).done(E.resolve).fail(E.reject):E[b[0]+"With"](this,D?[q]:arguments)})}),y=null}).promise()},then:function(y,E,R){var b=0;function D(q,H,F,Q){return function(){var ue=this,we=arguments,de=function(){var $e,Pt;if(!(q<b)){if($e=F.apply(ue,we),$e===H.promise())throw new TypeError("Thenable self-resolution");Pt=$e&&(typeof $e=="object"||typeof $e=="function")&&$e.then,G(Pt)?Q?Pt.call($e,D(b,H,Jt,Q),D(b,H,$n,Q)):(b++,Pt.call($e,D(b,H,Jt,Q),D(b,H,$n,Q),D(b,H,Jt,H.notifyWith))):(F!==Jt&&(ue=void 0,we=[$e]),(Q||H.resolveWith)(ue,we))}},Ke=Q?de:function(){try{de()}catch($e){l.Deferred.exceptionHook&&l.Deferred.exceptionHook($e,Ke.error),q+1>=b&&(F!==$n&&(ue=void 0,we=[$e]),H.rejectWith(ue,we))}};q?Ke():(l.Deferred.getErrorHook?Ke.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(Ke.error=l.Deferred.getStackHook()),e.setTimeout(Ke))}}return l.Deferred(function(q){c[0][3].add(D(0,q,G(R)?R:Jt,q.notifyWith)),c[1][3].add(D(0,q,G(y)?y:Jt)),c[2][3].add(D(0,q,G(E)?E:$n))}).promise()},promise:function(y){return y!=null?l.extend(y,f):f}},m={};return l.each(c,function(y,E){var R=E[2],b=E[5];f[E[1]]=R.add,b&&R.add(function(){h=b},c[3-y][2].disable,c[3-y][3].disable,c[0][2].lock,c[0][3].lock),R.add(E[3].fire),m[E[0]]=function(){return m[E[0]+"With"](this===m?void 0:this,arguments),this},m[E[0]+"With"]=R.fireWith}),f.promise(m),s&&s.call(m,m),m},when:function(s){var c=arguments.length,h=c,f=Array(h),m=a.call(arguments),y=l.Deferred(),E=function(R){return function(b){f[R]=this,m[R]=arguments.length>1?a.call(arguments):b,--c||y.resolveWith(f,m)}};if(c<=1&&(zr(s,y.done(E(h)).resolve,y.reject,!c),y.state()==="pending"||G(m[h]&&m[h].then)))return y.then();for(;h--;)zr(m[h],E(h),y.reject);return y.promise()}});var Bi=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(s,c){e.console&&e.console.warn&&s&&Bi.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,c)},l.readyException=function(s){e.setTimeout(function(){throw s})};var Wr=l.Deferred();l.fn.ready=function(s){return Wr.then(s).catch(function(c){l.readyException(c)}),this},l.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(s!==!0&&--l.readyWait>0)&&Wr.resolveWith(Z,[l]))}}),l.ready.then=Wr.then;function Gr(){Z.removeEventListener("DOMContentLoaded",Gr),e.removeEventListener("load",Gr),l.ready()}Z.readyState==="complete"||Z.readyState!=="loading"&&!Z.documentElement.doScroll?e.setTimeout(l.ready):(Z.addEventListener("DOMContentLoaded",Gr),e.addEventListener("load",Gr));var Ht=function(s,c,h,f,m,y,E){var R=0,b=s.length,D=h==null;if(Ne(h)==="object"){m=!0;for(R in h)Ht(s,c,R,h[R],!0,y,E)}else if(f!==void 0&&(m=!0,G(f)||(E=!0),D&&(E?(c.call(s,f),c=null):(D=c,c=function(q,H,F){return D.call(l(q),F)})),c))for(;R<b;R++)c(s[R],h,E?f:f.call(s[R],R,c(s[R],h)));return m?s:D?c.call(s):b?c(s[0],h):y},Xs=/^-ms-/,Hi=/-([a-z])/g;function Js(s,c){return c.toUpperCase()}function Dt(s){return s.replace(Xs,"ms-").replace(Hi,Js)}var vn=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function En(){this.expando=l.expando+En.uid++}En.uid=1,En.prototype={cache:function(s){var c=s[this.expando];return c||(c={},vn(s)&&(s.nodeType?s[this.expando]=c:Object.defineProperty(s,this.expando,{value:c,configurable:!0}))),c},set:function(s,c,h){var f,m=this.cache(s);if(typeof c=="string")m[Dt(c)]=h;else for(f in c)m[Dt(f)]=c[f];return m},get:function(s,c){return c===void 0?this.cache(s):s[this.expando]&&s[this.expando][Dt(c)]},access:function(s,c,h){return c===void 0||c&&typeof c=="string"&&h===void 0?this.get(s,c):(this.set(s,c,h),h!==void 0?h:c)},remove:function(s,c){var h,f=s[this.expando];if(f!==void 0){if(c!==void 0)for(Array.isArray(c)?c=c.map(Dt):(c=Dt(c),c=c in f?[c]:c.match(yt)||[]),h=c.length;h--;)delete f[c[h]];(c===void 0||l.isEmptyObject(f))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var c=s[this.expando];return c!==void 0&&!l.isEmptyObject(c)}};var se=new En,ke=new En,st=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Kr=/[A-Z]/g;function Zs(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:st.test(s)?JSON.parse(s):s}function zi(s,c,h){var f;if(h===void 0&&s.nodeType===1)if(f="data-"+c.replace(Kr,"-$&").toLowerCase(),h=s.getAttribute(f),typeof h=="string"){try{h=Zs(h)}catch{}ke.set(s,c,h)}else h=void 0;return h}l.extend({hasData:function(s){return ke.hasData(s)||se.hasData(s)},data:function(s,c,h){return ke.access(s,c,h)},removeData:function(s,c){ke.remove(s,c)},_data:function(s,c,h){return se.access(s,c,h)},_removeData:function(s,c){se.remove(s,c)}}),l.fn.extend({data:function(s,c){var h,f,m,y=this[0],E=y&&y.attributes;if(s===void 0){if(this.length&&(m=ke.get(y),y.nodeType===1&&!se.get(y,"hasDataAttrs"))){for(h=E.length;h--;)E[h]&&(f=E[h].name,f.indexOf("data-")===0&&(f=Dt(f.slice(5)),zi(y,f,m[f])));se.set(y,"hasDataAttrs",!0)}return m}return typeof s=="object"?this.each(function(){ke.set(this,s)}):Ht(this,function(R){var b;if(y&&R===void 0)return b=ke.get(y,s),b!==void 0||(b=zi(y,s),b!==void 0)?b:void 0;this.each(function(){ke.set(this,s,R)})},null,c,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){ke.remove(this,s)})}}),l.extend({queue:function(s,c,h){var f;if(s)return c=(c||"fx")+"queue",f=se.get(s,c),h&&(!f||Array.isArray(h)?f=se.access(s,c,l.makeArray(h)):f.push(h)),f||[]},dequeue:function(s,c){c=c||"fx";var h=l.queue(s,c),f=h.length,m=h.shift(),y=l._queueHooks(s,c),E=function(){l.dequeue(s,c)};m==="inprogress"&&(m=h.shift(),f--),m&&(c==="fx"&&h.unshift("inprogress"),delete y.stop,m.call(s,E,y)),!f&&y&&y.empty.fire()},_queueHooks:function(s,c){var h=c+"queueHooks";return se.get(s,h)||se.access(s,h,{empty:l.Callbacks("once memory").add(function(){se.remove(s,[c+"queue",h])})})}}),l.fn.extend({queue:function(s,c){var h=2;return typeof s!="string"&&(c=s,s="fx",h--),arguments.length<h?l.queue(this[0],s):c===void 0?this:this.each(function(){var f=l.queue(this,s,c);l._queueHooks(this,s),s==="fx"&&f[0]!=="inprogress"&&l.dequeue(this,s)})},dequeue:function(s){return this.each(function(){l.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,c){var h,f=1,m=l.Deferred(),y=this,E=this.length,R=function(){--f||m.resolveWith(y,[y])};for(typeof s!="string"&&(c=s,s=void 0),s=s||"fx";E--;)h=se.get(y[E],s+"queueHooks"),h&&h.empty&&(f++,h.empty.add(R));return R(),m.promise(c)}});var eo=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,zt=new RegExp("^(?:([+-])=|)("+eo+")([a-z%]*)$","i"),Nt=["Top","Right","Bottom","Left"],Zt=Z.documentElement,en=function(s){return l.contains(s.ownerDocument,s)},ka={composed:!0};Zt.getRootNode&&(en=function(s){return l.contains(s.ownerDocument,s)||s.getRootNode(ka)===s.ownerDocument});var Qr=function(s,c){return s=c||s,s.style.display==="none"||s.style.display===""&&en(s)&&l.css(s,"display")==="none"};function Yr(s,c,h,f){var m,y,E=20,R=f?function(){return f.cur()}:function(){return l.css(s,c,"")},b=R(),D=h&&h[3]||(l.cssNumber[c]?"":"px"),q=s.nodeType&&(l.cssNumber[c]||D!=="px"&&+b)&&zt.exec(l.css(s,c));if(q&&q[3]!==D){for(b=b/2,D=D||q[3],q=+b||1;E--;)l.style(s,c,q+D),(1-y)*(1-(y=R()/b||.5))<=0&&(E=0),q=q/y;q=q*2,l.style(s,c,q+D),h=h||[]}return h&&(q=+q||+b||0,m=h[1]?q+(h[1]+1)*h[2]:+h[2],f&&(f.unit=D,f.start=q,f.end=m)),m}var Wi={};function to(s){var c,h=s.ownerDocument,f=s.nodeName,m=Wi[f];return m||(c=h.body.appendChild(h.createElement(f)),m=l.css(c,"display"),c.parentNode.removeChild(c),m==="none"&&(m="block"),Wi[f]=m,m)}function Vt(s,c){for(var h,f,m=[],y=0,E=s.length;y<E;y++)f=s[y],f.style&&(h=f.style.display,c?(h==="none"&&(m[y]=se.get(f,"display")||null,m[y]||(f.style.display="")),f.style.display===""&&Qr(f)&&(m[y]=to(f))):h!=="none"&&(m[y]="none",se.set(f,"display",h)));for(y=0;y<E;y++)m[y]!=null&&(s[y].style.display=m[y]);return s}l.fn.extend({show:function(){return Vt(this,!0)},hide:function(){return Vt(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){Qr(this)?l(this).show():l(this).hide()})}});var Tn=/^(?:checkbox|radio)$/i,Xr=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,tn=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=Z.createDocumentFragment(),c=s.appendChild(Z.createElement("div")),h=Z.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),c.appendChild(h),$.checkClone=c.cloneNode(!0).cloneNode(!0).lastChild.checked,c.innerHTML="<textarea>x</textarea>",$.noCloneChecked=!!c.cloneNode(!0).lastChild.defaultValue,c.innerHTML="<option></option>",$.option=!!c.lastChild})();var _t={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};_t.tbody=_t.tfoot=_t.colgroup=_t.caption=_t.thead,_t.th=_t.td,$.option||(_t.optgroup=_t.option=[1,"<select multiple='multiple'>","</select>"]);function Ze(s,c){var h;return typeof s.getElementsByTagName<"u"?h=s.getElementsByTagName(c||"*"):typeof s.querySelectorAll<"u"?h=s.querySelectorAll(c||"*"):h=[],c===void 0||c&&S(s,c)?l.merge([s],h):h}function Jr(s,c){for(var h=0,f=s.length;h<f;h++)se.set(s[h],"globalEval",!c||se.get(c[h],"globalEval"))}var vr=/<|&#?\w+;/;function Gi(s,c,h,f,m){for(var y,E,R,b,D,q,H=c.createDocumentFragment(),F=[],Q=0,ue=s.length;Q<ue;Q++)if(y=s[Q],y||y===0)if(Ne(y)==="object")l.merge(F,y.nodeType?[y]:y);else if(!vr.test(y))F.push(c.createTextNode(y));else{for(E=E||H.appendChild(c.createElement("div")),R=(Xr.exec(y)||["",""])[1].toLowerCase(),b=_t[R]||_t._default,E.innerHTML=b[1]+l.htmlPrefilter(y)+b[2],q=b[0];q--;)E=E.lastChild;l.merge(F,E.childNodes),E=H.firstChild,E.textContent=""}for(H.textContent="",Q=0;y=F[Q++];){if(f&&l.inArray(y,f)>-1){m&&m.push(y);continue}if(D=en(y),E=Ze(H.appendChild(y),"script"),D&&Jr(E),h)for(q=0;y=E[q++];)tn.test(y.type||"")&&h.push(y)}return H}var tt=/^([^.]*)(?:\.(.+)|)/;function wn(){return!0}function Ot(){return!1}function In(s,c,h,f,m,y){var E,R;if(typeof c=="object"){typeof h!="string"&&(f=f||h,h=void 0);for(R in c)In(s,R,h,f,c[R],y);return s}if(f==null&&m==null?(m=h,f=h=void 0):m==null&&(typeof h=="string"?(m=f,f=void 0):(m=f,f=h,h=void 0)),m===!1)m=Ot;else if(!m)return s;return y===1&&(E=m,m=function(b){return l().off(b),E.apply(this,arguments)},m.guid=E.guid||(E.guid=l.guid++)),s.each(function(){l.event.add(this,c,m,f,h)})}l.event={global:{},add:function(s,c,h,f,m){var y,E,R,b,D,q,H,F,Q,ue,we,de=se.get(s);if(vn(s))for(h.handler&&(y=h,h=y.handler,m=y.selector),m&&l.find.matchesSelector(Zt,m),h.guid||(h.guid=l.guid++),(b=de.events)||(b=de.events=Object.create(null)),(E=de.handle)||(E=de.handle=function(Ke){return typeof l<"u"&&l.event.triggered!==Ke.type?l.event.dispatch.apply(s,arguments):void 0}),c=(c||"").match(yt)||[""],D=c.length;D--;)R=tt.exec(c[D])||[],Q=we=R[1],ue=(R[2]||"").split(".").sort(),Q&&(H=l.event.special[Q]||{},Q=(m?H.delegateType:H.bindType)||Q,H=l.event.special[Q]||{},q=l.extend({type:Q,origType:we,data:f,handler:h,guid:h.guid,selector:m,needsContext:m&&l.expr.match.needsContext.test(m),namespace:ue.join(".")},y),(F=b[Q])||(F=b[Q]=[],F.delegateCount=0,(!H.setup||H.setup.call(s,f,ue,E)===!1)&&s.addEventListener&&s.addEventListener(Q,E)),H.add&&(H.add.call(s,q),q.handler.guid||(q.handler.guid=h.guid)),m?F.splice(F.delegateCount++,0,q):F.push(q),l.event.global[Q]=!0)},remove:function(s,c,h,f,m){var y,E,R,b,D,q,H,F,Q,ue,we,de=se.hasData(s)&&se.get(s);if(!(!de||!(b=de.events))){for(c=(c||"").match(yt)||[""],D=c.length;D--;){if(R=tt.exec(c[D])||[],Q=we=R[1],ue=(R[2]||"").split(".").sort(),!Q){for(Q in b)l.event.remove(s,Q+c[D],h,f,!0);continue}for(H=l.event.special[Q]||{},Q=(f?H.delegateType:H.bindType)||Q,F=b[Q]||[],R=R[2]&&new RegExp("(^|\\.)"+ue.join("\\.(?:.*\\.|)")+"(\\.|$)"),E=y=F.length;y--;)q=F[y],(m||we===q.origType)&&(!h||h.guid===q.guid)&&(!R||R.test(q.namespace))&&(!f||f===q.selector||f==="**"&&q.selector)&&(F.splice(y,1),q.selector&&F.delegateCount--,H.remove&&H.remove.call(s,q));E&&!F.length&&((!H.teardown||H.teardown.call(s,ue,de.handle)===!1)&&l.removeEvent(s,Q,de.handle),delete b[Q])}l.isEmptyObject(b)&&se.remove(s,"handle events")}},dispatch:function(s){var c,h,f,m,y,E,R=new Array(arguments.length),b=l.event.fix(s),D=(se.get(this,"events")||Object.create(null))[b.type]||[],q=l.event.special[b.type]||{};for(R[0]=b,c=1;c<arguments.length;c++)R[c]=arguments[c];if(b.delegateTarget=this,!(q.preDispatch&&q.preDispatch.call(this,b)===!1)){for(E=l.event.handlers.call(this,b,D),c=0;(m=E[c++])&&!b.isPropagationStopped();)for(b.currentTarget=m.elem,h=0;(y=m.handlers[h++])&&!b.isImmediatePropagationStopped();)(!b.rnamespace||y.namespace===!1||b.rnamespace.test(y.namespace))&&(b.handleObj=y,b.data=y.data,f=((l.event.special[y.origType]||{}).handle||y.handler).apply(m.elem,R),f!==void 0&&(b.result=f)===!1&&(b.preventDefault(),b.stopPropagation()));return q.postDispatch&&q.postDispatch.call(this,b),b.result}},handlers:function(s,c){var h,f,m,y,E,R=[],b=c.delegateCount,D=s.target;if(b&&D.nodeType&&!(s.type==="click"&&s.button>=1)){for(;D!==this;D=D.parentNode||this)if(D.nodeType===1&&!(s.type==="click"&&D.disabled===!0)){for(y=[],E={},h=0;h<b;h++)f=c[h],m=f.selector+" ",E[m]===void 0&&(E[m]=f.needsContext?l(m,this).index(D)>-1:l.find(m,this,null,[D]).length),E[m]&&y.push(f);y.length&&R.push({elem:D,handlers:y})}}return D=this,b<c.length&&R.push({elem:D,handlers:c.slice(b)}),R},addProp:function(s,c){Object.defineProperty(l.Event.prototype,s,{enumerable:!0,configurable:!0,get:G(c)?function(){if(this.originalEvent)return c(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(h){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(s){return s[l.expando]?s:new l.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var c=this||s;return Tn.test(c.type)&&c.click&&S(c,"input")&&Zr(c,"click",!0),!1},trigger:function(s){var c=this||s;return Tn.test(c.type)&&c.click&&S(c,"input")&&Zr(c,"click"),!0},_default:function(s){var c=s.target;return Tn.test(c.type)&&c.click&&S(c,"input")&&se.get(c,"click")||S(c,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function Zr(s,c,h){if(!h){se.get(s,c)===void 0&&l.event.add(s,c,wn);return}se.set(s,c,!1),l.event.add(s,c,{namespace:!1,handler:function(f){var m,y=se.get(this,c);if(f.isTrigger&1&&this[c]){if(y)(l.event.special[c]||{}).delegateType&&f.stopPropagation();else if(y=a.call(arguments),se.set(this,c,y),this[c](),m=se.get(this,c),se.set(this,c,!1),y!==m)return f.stopImmediatePropagation(),f.preventDefault(),m}else y&&(se.set(this,c,l.event.trigger(y[0],y.slice(1),this)),f.stopPropagation(),f.isImmediatePropagationStopped=wn)}})}l.removeEvent=function(s,c,h){s.removeEventListener&&s.removeEventListener(c,h)},l.Event=function(s,c){if(!(this instanceof l.Event))return new l.Event(s,c);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?wn:Ot,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,c&&l.extend(this,c),this.timeStamp=s&&s.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:Ot,isPropagationStopped:Ot,isImmediatePropagationStopped:Ot,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=wn,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=wn,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=wn,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(s,c){function h(f){if(Z.documentMode){var m=se.get(this,"handle"),y=l.event.fix(f);y.type=f.type==="focusin"?"focus":"blur",y.isSimulated=!0,m(f),y.target===y.currentTarget&&m(y)}else l.event.simulate(c,f.target,l.event.fix(f))}l.event.special[s]={setup:function(){var f;if(Zr(this,s,!0),Z.documentMode)f=se.get(this,c),f||this.addEventListener(c,h),se.set(this,c,(f||0)+1);else return!1},trigger:function(){return Zr(this,s),!0},teardown:function(){var f;if(Z.documentMode)f=se.get(this,c)-1,f?se.set(this,c,f):(this.removeEventListener(c,h),se.remove(this,c));else return!1},_default:function(f){return se.get(f.target,s)},delegateType:c},l.event.special[c]={setup:function(){var f=this.ownerDocument||this.document||this,m=Z.documentMode?this:f,y=se.get(m,c);y||(Z.documentMode?this.addEventListener(c,h):f.addEventListener(s,h,!0)),se.set(m,c,(y||0)+1)},teardown:function(){var f=this.ownerDocument||this.document||this,m=Z.documentMode?this:f,y=se.get(m,c)-1;y?se.set(m,c,y):(Z.documentMode?this.removeEventListener(c,h):f.removeEventListener(s,h,!0),se.remove(m,c))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,c){l.event.special[s]={delegateType:c,bindType:c,handle:function(h){var f,m=this,y=h.relatedTarget,E=h.handleObj;return(!y||y!==m&&!l.contains(m,y))&&(h.type=E.origType,f=E.handler.apply(this,arguments),h.type=c),f}}}),l.fn.extend({on:function(s,c,h,f){return In(this,s,c,h,f)},one:function(s,c,h,f){return In(this,s,c,h,f,1)},off:function(s,c,h){var f,m;if(s&&s.preventDefault&&s.handleObj)return f=s.handleObj,l(s.delegateTarget).off(f.namespace?f.origType+"."+f.namespace:f.origType,f.selector,f.handler),this;if(typeof s=="object"){for(m in s)this.off(m,c,s[m]);return this}return(c===!1||typeof c=="function")&&(h=c,c=void 0),h===!1&&(h=Ot),this.each(function(){l.event.remove(this,s,h,c)})}});var xa=/<script|<style|<link/i,Bn=/checked\s*(?:[^=]|=\s*.checked.)/i,Da=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function no(s,c){return S(s,"table")&&S(c.nodeType!==11?c:c.firstChild,"tr")&&l(s).children("tbody")[0]||s}function ei(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function ro(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function ti(s,c){var h,f,m,y,E,R,b;if(c.nodeType===1){if(se.hasData(s)&&(y=se.get(s),b=y.events,b)){se.remove(c,"handle events");for(m in b)for(h=0,f=b[m].length;h<f;h++)l.event.add(c,m,b[m][h])}ke.hasData(s)&&(E=ke.access(s),R=l.extend({},E),ke.set(c,R))}}function ni(s,c){var h=c.nodeName.toLowerCase();h==="input"&&Tn.test(s.type)?c.checked=s.checked:(h==="input"||h==="textarea")&&(c.defaultValue=s.defaultValue)}function vt(s,c,h,f){c=u(c);var m,y,E,R,b,D,q=0,H=s.length,F=H-1,Q=c[0],ue=G(Q);if(ue||H>1&&typeof Q=="string"&&!$.checkClone&&Bn.test(Q))return s.each(function(we){var de=s.eq(we);ue&&(c[0]=Q.call(this,we,de.html())),vt(de,c,h,f)});if(H&&(m=Gi(c,s[0].ownerDocument,!1,s,f),y=m.firstChild,m.childNodes.length===1&&(m=y),y||f)){for(E=l.map(Ze(m,"script"),ei),R=E.length;q<H;q++)b=m,q!==F&&(b=l.clone(b,!0,!0),R&&l.merge(E,Ze(b,"script"))),h.call(s[q],b,q);if(R)for(D=E[E.length-1].ownerDocument,l.map(E,ro),q=0;q<R;q++)b=E[q],tn.test(b.type||"")&&!se.access(b,"globalEval")&&l.contains(D,b)&&(b.src&&(b.type||"").toLowerCase()!=="module"?l._evalUrl&&!b.noModule&&l._evalUrl(b.src,{nonce:b.nonce||b.getAttribute("nonce")},D):_e(b.textContent.replace(Da,""),b,D))}return s}function Ki(s,c,h){for(var f,m=c?l.filter(c,s):s,y=0;(f=m[y])!=null;y++)!h&&f.nodeType===1&&l.cleanData(Ze(f)),f.parentNode&&(h&&en(f)&&Jr(Ze(f,"script")),f.parentNode.removeChild(f));return s}l.extend({htmlPrefilter:function(s){return s},clone:function(s,c,h){var f,m,y,E,R=s.cloneNode(!0),b=en(s);if(!$.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!l.isXMLDoc(s))for(E=Ze(R),y=Ze(s),f=0,m=y.length;f<m;f++)ni(y[f],E[f]);if(c)if(h)for(y=y||Ze(s),E=E||Ze(R),f=0,m=y.length;f<m;f++)ti(y[f],E[f]);else ti(s,R);return E=Ze(R,"script"),E.length>0&&Jr(E,!b&&Ze(s,"script")),R},cleanData:function(s){for(var c,h,f,m=l.event.special,y=0;(h=s[y])!==void 0;y++)if(vn(h)){if(c=h[se.expando]){if(c.events)for(f in c.events)m[f]?l.event.remove(h,f):l.removeEvent(h,f,c.handle);h[se.expando]=void 0}h[ke.expando]&&(h[ke.expando]=void 0)}}}),l.fn.extend({detach:function(s){return Ki(this,s,!0)},remove:function(s){return Ki(this,s)},text:function(s){return Ht(this,function(c){return c===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=c)})},null,s,arguments.length)},append:function(){return vt(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=no(this,s);c.appendChild(s)}})},prepend:function(){return vt(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=no(this,s);c.insertBefore(s,c.firstChild)}})},before:function(){return vt(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return vt(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,c=0;(s=this[c])!=null;c++)s.nodeType===1&&(l.cleanData(Ze(s,!1)),s.textContent="");return this},clone:function(s,c){return s=s??!1,c=c??s,this.map(function(){return l.clone(this,s,c)})},html:function(s){return Ht(this,function(c){var h=this[0]||{},f=0,m=this.length;if(c===void 0&&h.nodeType===1)return h.innerHTML;if(typeof c=="string"&&!xa.test(c)&&!_t[(Xr.exec(c)||["",""])[1].toLowerCase()]){c=l.htmlPrefilter(c);try{for(;f<m;f++)h=this[f]||{},h.nodeType===1&&(l.cleanData(Ze(h,!1)),h.innerHTML=c);h=0}catch{}}h&&this.empty().append(c)},null,s,arguments.length)},replaceWith:function(){var s=[];return vt(this,arguments,function(c){var h=this.parentNode;l.inArray(this,s)<0&&(l.cleanData(Ze(this)),h&&h.replaceChild(c,this))},s)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,c){l.fn[s]=function(h){for(var f,m=[],y=l(h),E=y.length-1,R=0;R<=E;R++)f=R===E?this:this.clone(!0),l(y[R])[c](f),p.apply(m,f.get());return this.pushStack(m)}});var ri=new RegExp("^("+eo+")(?!px)[a-z%]+$","i"),Er=/^--/,Hn=function(s){var c=s.ownerDocument.defaultView;return(!c||!c.opener)&&(c=e),c.getComputedStyle(s)},Qi=function(s,c,h){var f,m,y={};for(m in c)y[m]=s.style[m],s.style[m]=c[m];f=h.call(s);for(m in c)s.style[m]=y[m];return f},io=new RegExp(Nt.join("|"),"i");(function(){function s(){if(D){b.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",D.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Zt.appendChild(b).appendChild(D);var q=e.getComputedStyle(D);h=q.top!=="1%",R=c(q.marginLeft)===12,D.style.right="60%",y=c(q.right)===36,f=c(q.width)===36,D.style.position="absolute",m=c(D.offsetWidth/3)===12,Zt.removeChild(b),D=null}}function c(q){return Math.round(parseFloat(q))}var h,f,m,y,E,R,b=Z.createElement("div"),D=Z.createElement("div");D.style&&(D.style.backgroundClip="content-box",D.cloneNode(!0).style.backgroundClip="",$.clearCloneStyle=D.style.backgroundClip==="content-box",l.extend($,{boxSizingReliable:function(){return s(),f},pixelBoxStyles:function(){return s(),y},pixelPosition:function(){return s(),h},reliableMarginLeft:function(){return s(),R},scrollboxSize:function(){return s(),m},reliableTrDimensions:function(){var q,H,F,Q;return E==null&&(q=Z.createElement("table"),H=Z.createElement("tr"),F=Z.createElement("div"),q.style.cssText="position:absolute;left:-11111px;border-collapse:separate",H.style.cssText="box-sizing:content-box;border:1px solid",H.style.height="1px",F.style.height="9px",F.style.display="block",Zt.appendChild(q).appendChild(H).appendChild(F),Q=e.getComputedStyle(H),E=parseInt(Q.height,10)+parseInt(Q.borderTopWidth,10)+parseInt(Q.borderBottomWidth,10)===H.offsetHeight,Zt.removeChild(q)),E}}))})();function Tr(s,c,h){var f,m,y,E,R=Er.test(c),b=s.style;return h=h||Hn(s),h&&(E=h.getPropertyValue(c)||h[c],R&&E&&(E=E.replace(gt,"$1")||void 0),E===""&&!en(s)&&(E=l.style(s,c)),!$.pixelBoxStyles()&&ri.test(E)&&io.test(c)&&(f=b.width,m=b.minWidth,y=b.maxWidth,b.minWidth=b.maxWidth=b.width=E,E=h.width,b.width=f,b.minWidth=m,b.maxWidth=y)),E!==void 0?E+"":E}function wr(s,c){return{get:function(){if(s()){delete this.get;return}return(this.get=c).apply(this,arguments)}}}var Yi=["Webkit","Moz","ms"],ii=Z.createElement("div").style,zn={};function bn(s){for(var c=s[0].toUpperCase()+s.slice(1),h=Yi.length;h--;)if(s=Yi[h]+c,s in ii)return s}function Ir(s){var c=l.cssProps[s]||zn[s];return c||(s in ii?s:zn[s]=bn(s)||s)}var Na=/^(none|table(?!-c[ea]).+)/,so={position:"absolute",visibility:"hidden",display:"block"},Xi={letterSpacing:"0",fontWeight:"400"};function Ji(s,c,h){var f=zt.exec(c);return f?Math.max(0,f[2]-(h||0))+(f[3]||"px"):c}function br(s,c,h,f,m,y){var E=c==="width"?1:0,R=0,b=0,D=0;if(h===(f?"border":"content"))return 0;for(;E<4;E+=2)h==="margin"&&(D+=l.css(s,h+Nt[E],!0,m)),f?(h==="content"&&(b-=l.css(s,"padding"+Nt[E],!0,m)),h!=="margin"&&(b-=l.css(s,"border"+Nt[E]+"Width",!0,m))):(b+=l.css(s,"padding"+Nt[E],!0,m),h!=="padding"?b+=l.css(s,"border"+Nt[E]+"Width",!0,m):R+=l.css(s,"border"+Nt[E]+"Width",!0,m));return!f&&y>=0&&(b+=Math.max(0,Math.ceil(s["offset"+c[0].toUpperCase()+c.slice(1)]-y-b-R-.5))||0),b+D}function si(s,c,h){var f=Hn(s),m=!$.boxSizingReliable()||h,y=m&&l.css(s,"boxSizing",!1,f)==="border-box",E=y,R=Tr(s,c,f),b="offset"+c[0].toUpperCase()+c.slice(1);if(ri.test(R)){if(!h)return R;R="auto"}return(!$.boxSizingReliable()&&y||!$.reliableTrDimensions()&&S(s,"tr")||R==="auto"||!parseFloat(R)&&l.css(s,"display",!1,f)==="inline")&&s.getClientRects().length&&(y=l.css(s,"boxSizing",!1,f)==="border-box",E=b in s,E&&(R=s[b])),R=parseFloat(R)||0,R+br(s,c,h||(y?"border":"content"),E,f,R)+"px"}l.extend({cssHooks:{opacity:{get:function(s,c){if(c){var h=Tr(s,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,c,h,f){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var m,y,E,R=Dt(c),b=Er.test(c),D=s.style;if(b||(c=Ir(R)),E=l.cssHooks[c]||l.cssHooks[R],h!==void 0){if(y=typeof h,y==="string"&&(m=zt.exec(h))&&m[1]&&(h=Yr(s,c,m),y="number"),h==null||h!==h)return;y==="number"&&!b&&(h+=m&&m[3]||(l.cssNumber[R]?"":"px")),!$.clearCloneStyle&&h===""&&c.indexOf("background")===0&&(D[c]="inherit"),(!E||!("set"in E)||(h=E.set(s,h,f))!==void 0)&&(b?D.setProperty(c,h):D[c]=h)}else return E&&"get"in E&&(m=E.get(s,!1,f))!==void 0?m:D[c]}},css:function(s,c,h,f){var m,y,E,R=Dt(c),b=Er.test(c);return b||(c=Ir(R)),E=l.cssHooks[c]||l.cssHooks[R],E&&"get"in E&&(m=E.get(s,!0,h)),m===void 0&&(m=Tr(s,c,f)),m==="normal"&&c in Xi&&(m=Xi[c]),h===""||h?(y=parseFloat(m),h===!0||isFinite(y)?y||0:m):m}}),l.each(["height","width"],function(s,c){l.cssHooks[c]={get:function(h,f,m){if(f)return Na.test(l.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?Qi(h,so,function(){return si(h,c,m)}):si(h,c,m)},set:function(h,f,m){var y,E=Hn(h),R=!$.scrollboxSize()&&E.position==="absolute",b=R||m,D=b&&l.css(h,"boxSizing",!1,E)==="border-box",q=m?br(h,c,m,D,E):0;return D&&R&&(q-=Math.ceil(h["offset"+c[0].toUpperCase()+c.slice(1)]-parseFloat(E[c])-br(h,c,"border",!1,E)-.5)),q&&(y=zt.exec(f))&&(y[3]||"px")!=="px"&&(h.style[c]=f,f=l.css(h,c)),Ji(h,f,q)}}}),l.cssHooks.marginLeft=wr($.reliableMarginLeft,function(s,c){if(c)return(parseFloat(Tr(s,"marginLeft"))||s.getBoundingClientRect().left-Qi(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(s,c){l.cssHooks[s+c]={expand:function(h){for(var f=0,m={},y=typeof h=="string"?h.split(" "):[h];f<4;f++)m[s+Nt[f]+c]=y[f]||y[f-2]||y[0];return m}},s!=="margin"&&(l.cssHooks[s+c].set=Ji)}),l.fn.extend({css:function(s,c){return Ht(this,function(h,f,m){var y,E,R={},b=0;if(Array.isArray(f)){for(y=Hn(h),E=f.length;b<E;b++)R[f[b]]=l.css(h,f[b],!1,y);return R}return m!==void 0?l.style(h,f,m):l.css(h,f)},s,c,arguments.length>1)}});function ot(s,c,h,f,m){return new ot.prototype.init(s,c,h,f,m)}l.Tween=ot,ot.prototype={constructor:ot,init:function(s,c,h,f,m,y){this.elem=s,this.prop=h,this.easing=m||l.easing._default,this.options=c,this.start=this.now=this.cur(),this.end=f,this.unit=y||(l.cssNumber[h]?"":"px")},cur:function(){var s=ot.propHooks[this.prop];return s&&s.get?s.get(this):ot.propHooks._default.get(this)},run:function(s){var c,h=ot.propHooks[this.prop];return this.options.duration?this.pos=c=l.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=c=s,this.now=(this.end-this.start)*c+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):ot.propHooks._default.set(this),this}},ot.prototype.init.prototype=ot.prototype,ot.propHooks={_default:{get:function(s){var c;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(c=l.css(s.elem,s.prop,""),!c||c==="auto"?0:c)},set:function(s){l.fx.step[s.prop]?l.fx.step[s.prop](s):s.elem.nodeType===1&&(l.cssHooks[s.prop]||s.elem.style[Ir(s.prop)]!=null)?l.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},ot.propHooks.scrollTop=ot.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},l.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},l.fx=ot.prototype.init,l.fx.step={};var An,oi,Va=/^(?:toggle|show|hide)$/,oo=/queueHooks$/;function ai(){oi&&(Z.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(ai):e.setTimeout(ai,l.fx.interval),l.fx.tick())}function ao(){return e.setTimeout(function(){An=void 0}),An=Date.now()}function Mt(s,c){var h,f=0,m={height:s};for(c=c?1:0;f<4;f+=2-c)h=Nt[f],m["margin"+h]=m["padding"+h]=s;return c&&(m.opacity=m.width=s),m}function Lt(s,c,h){for(var f,m=(It.tweeners[c]||[]).concat(It.tweeners["*"]),y=0,E=m.length;y<E;y++)if(f=m[y].call(h,c,s))return f}function ci(s,c,h){var f,m,y,E,R,b,D,q,H="width"in c||"height"in c,F=this,Q={},ue=s.style,we=s.nodeType&&Qr(s),de=se.get(s,"fxshow");h.queue||(E=l._queueHooks(s,"fx"),E.unqueued==null&&(E.unqueued=0,R=E.empty.fire,E.empty.fire=function(){E.unqueued||R()}),E.unqueued++,F.always(function(){F.always(function(){E.unqueued--,l.queue(s,"fx").length||E.empty.fire()})}));for(f in c)if(m=c[f],Va.test(m)){if(delete c[f],y=y||m==="toggle",m===(we?"hide":"show"))if(m==="show"&&de&&de[f]!==void 0)we=!0;else continue;Q[f]=de&&de[f]||l.style(s,f)}if(b=!l.isEmptyObject(c),!(!b&&l.isEmptyObject(Q))){H&&s.nodeType===1&&(h.overflow=[ue.overflow,ue.overflowX,ue.overflowY],D=de&&de.display,D==null&&(D=se.get(s,"display")),q=l.css(s,"display"),q==="none"&&(D?q=D:(Vt([s],!0),D=s.style.display||D,q=l.css(s,"display"),Vt([s]))),(q==="inline"||q==="inline-block"&&D!=null)&&l.css(s,"float")==="none"&&(b||(F.done(function(){ue.display=D}),D==null&&(q=ue.display,D=q==="none"?"":q)),ue.display="inline-block")),h.overflow&&(ue.overflow="hidden",F.always(function(){ue.overflow=h.overflow[0],ue.overflowX=h.overflow[1],ue.overflowY=h.overflow[2]})),b=!1;for(f in Q)b||(de?"hidden"in de&&(we=de.hidden):de=se.access(s,"fxshow",{display:D}),y&&(de.hidden=!we),we&&Vt([s],!0),F.done(function(){we||Vt([s]),se.remove(s,"fxshow");for(f in Q)l.style(s,f,Q[f])})),b=Lt(we?de[f]:0,f,F),f in de||(de[f]=b.start,we&&(b.end=b.start,b.start=0))}}function ui(s,c){var h,f,m,y,E;for(h in s)if(f=Dt(h),m=c[f],y=s[h],Array.isArray(y)&&(m=y[1],y=s[h]=y[0]),h!==f&&(s[f]=y,delete s[h]),E=l.cssHooks[f],E&&"expand"in E){y=E.expand(y),delete s[f];for(h in y)h in s||(s[h]=y[h],c[h]=m)}else c[f]=m}function It(s,c,h){var f,m,y=0,E=It.prefilters.length,R=l.Deferred().always(function(){delete b.elem}),b=function(){if(m)return!1;for(var H=An||ao(),F=Math.max(0,D.startTime+D.duration-H),Q=F/D.duration||0,ue=1-Q,we=0,de=D.tweens.length;we<de;we++)D.tweens[we].run(ue);return R.notifyWith(s,[D,ue,F]),ue<1&&de?F:(de||R.notifyWith(s,[D,1,0]),R.resolveWith(s,[D]),!1)},D=R.promise({elem:s,props:l.extend({},c),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},h),originalProperties:c,originalOptions:h,startTime:An||ao(),duration:h.duration,tweens:[],createTween:function(H,F){var Q=l.Tween(s,D.opts,H,F,D.opts.specialEasing[H]||D.opts.easing);return D.tweens.push(Q),Q},stop:function(H){var F=0,Q=H?D.tweens.length:0;if(m)return this;for(m=!0;F<Q;F++)D.tweens[F].run(1);return H?(R.notifyWith(s,[D,1,0]),R.resolveWith(s,[D,H])):R.rejectWith(s,[D,H]),this}}),q=D.props;for(ui(q,D.opts.specialEasing);y<E;y++)if(f=It.prefilters[y].call(D,s,q,D.opts),f)return G(f.stop)&&(l._queueHooks(D.elem,D.opts.queue).stop=f.stop.bind(f)),f;return l.map(q,Lt,D),G(D.opts.start)&&D.opts.start.call(s,D),D.progress(D.opts.progress).done(D.opts.done,D.opts.complete).fail(D.opts.fail).always(D.opts.always),l.fx.timer(l.extend(b,{elem:s,anim:D,queue:D.opts.queue})),D}l.Animation=l.extend(It,{tweeners:{"*":[function(s,c){var h=this.createTween(s,c);return Yr(h.elem,s,zt.exec(c),h),h}]},tweener:function(s,c){G(s)?(c=s,s=["*"]):s=s.match(yt);for(var h,f=0,m=s.length;f<m;f++)h=s[f],It.tweeners[h]=It.tweeners[h]||[],It.tweeners[h].unshift(c)},prefilters:[ci],prefilter:function(s,c){c?It.prefilters.unshift(s):It.prefilters.push(s)}}),l.speed=function(s,c,h){var f=s&&typeof s=="object"?l.extend({},s):{complete:h||!h&&c||G(s)&&s,duration:s,easing:h&&c||c&&!G(c)&&c};return l.fx.off?f.duration=0:typeof f.duration!="number"&&(f.duration in l.fx.speeds?f.duration=l.fx.speeds[f.duration]:f.duration=l.fx.speeds._default),(f.queue==null||f.queue===!0)&&(f.queue="fx"),f.old=f.complete,f.complete=function(){G(f.old)&&f.old.call(this),f.queue&&l.dequeue(this,f.queue)},f},l.fn.extend({fadeTo:function(s,c,h,f){return this.filter(Qr).css("opacity",0).show().end().animate({opacity:c},s,h,f)},animate:function(s,c,h,f){var m=l.isEmptyObject(s),y=l.speed(c,h,f),E=function(){var R=It(this,l.extend({},s),y);(m||se.get(this,"finish"))&&R.stop(!0)};return E.finish=E,m||y.queue===!1?this.each(E):this.queue(y.queue,E)},stop:function(s,c,h){var f=function(m){var y=m.stop;delete m.stop,y(h)};return typeof s!="string"&&(h=c,c=s,s=void 0),c&&this.queue(s||"fx",[]),this.each(function(){var m=!0,y=s!=null&&s+"queueHooks",E=l.timers,R=se.get(this);if(y)R[y]&&R[y].stop&&f(R[y]);else for(y in R)R[y]&&R[y].stop&&oo.test(y)&&f(R[y]);for(y=E.length;y--;)E[y].elem===this&&(s==null||E[y].queue===s)&&(E[y].anim.stop(h),m=!1,E.splice(y,1));(m||!h)&&l.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var c,h=se.get(this),f=h[s+"queue"],m=h[s+"queueHooks"],y=l.timers,E=f?f.length:0;for(h.finish=!0,l.queue(this,s,[]),m&&m.stop&&m.stop.call(this,!0),c=y.length;c--;)y[c].elem===this&&y[c].queue===s&&(y[c].anim.stop(!0),y.splice(c,1));for(c=0;c<E;c++)f[c]&&f[c].finish&&f[c].finish.call(this);delete h.finish})}}),l.each(["toggle","show","hide"],function(s,c){var h=l.fn[c];l.fn[c]=function(f,m,y){return f==null||typeof f=="boolean"?h.apply(this,arguments):this.animate(Mt(c,!0),f,m,y)}}),l.each({slideDown:Mt("show"),slideUp:Mt("hide"),slideToggle:Mt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,c){l.fn[s]=function(h,f,m){return this.animate(c,h,f,m)}}),l.timers=[],l.fx.tick=function(){var s,c=0,h=l.timers;for(An=Date.now();c<h.length;c++)s=h[c],!s()&&h[c]===s&&h.splice(c--,1);h.length||l.fx.stop(),An=void 0},l.fx.timer=function(s){l.timers.push(s),l.fx.start()},l.fx.interval=13,l.fx.start=function(){oi||(oi=!0,ai())},l.fx.stop=function(){oi=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(s,c){return s=l.fx&&l.fx.speeds[s]||s,c=c||"fx",this.queue(c,function(h,f){var m=e.setTimeout(h,s);f.stop=function(){e.clearTimeout(m)}})},(function(){var s=Z.createElement("input"),c=Z.createElement("select"),h=c.appendChild(Z.createElement("option"));s.type="checkbox",$.checkOn=s.value!=="",$.optSelected=h.selected,s=Z.createElement("input"),s.value="t",s.type="radio",$.radioValue=s.value==="t"})();var Ve,nn=l.expr.attrHandle;l.fn.extend({attr:function(s,c){return Ht(this,l.attr,s,c,arguments.length>1)},removeAttr:function(s){return this.each(function(){l.removeAttr(this,s)})}}),l.extend({attr:function(s,c,h){var f,m,y=s.nodeType;if(!(y===3||y===8||y===2)){if(typeof s.getAttribute>"u")return l.prop(s,c,h);if((y!==1||!l.isXMLDoc(s))&&(m=l.attrHooks[c.toLowerCase()]||(l.expr.match.bool.test(c)?Ve:void 0)),h!==void 0){if(h===null){l.removeAttr(s,c);return}return m&&"set"in m&&(f=m.set(s,h,c))!==void 0?f:(s.setAttribute(c,h+""),h)}return m&&"get"in m&&(f=m.get(s,c))!==null?f:(f=l.find.attr(s,c),f??void 0)}},attrHooks:{type:{set:function(s,c){if(!$.radioValue&&c==="radio"&&S(s,"input")){var h=s.value;return s.setAttribute("type",c),h&&(s.value=h),c}}}},removeAttr:function(s,c){var h,f=0,m=c&&c.match(yt);if(m&&s.nodeType===1)for(;h=m[f++];)s.removeAttribute(h)}}),Ve={set:function(s,c,h){return c===!1?l.removeAttr(s,h):s.setAttribute(h,h),h}},l.each(l.expr.match.bool.source.match(/\w+/g),function(s,c){var h=nn[c]||l.find.attr;nn[c]=function(f,m,y){var E,R,b=m.toLowerCase();return y||(R=nn[b],nn[b]=E,E=h(f,m,y)!=null?b:null,nn[b]=R),E}});var Ar=/^(?:input|select|textarea|button)$/i,Sr=/^(?:a|area)$/i;l.fn.extend({prop:function(s,c){return Ht(this,l.prop,s,c,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[l.propFix[s]||s]})}}),l.extend({prop:function(s,c,h){var f,m,y=s.nodeType;if(!(y===3||y===8||y===2))return(y!==1||!l.isXMLDoc(s))&&(c=l.propFix[c]||c,m=l.propHooks[c]),h!==void 0?m&&"set"in m&&(f=m.set(s,h,c))!==void 0?f:s[c]=h:m&&"get"in m&&(f=m.get(s,c))!==null?f:s[c]},propHooks:{tabIndex:{get:function(s){var c=l.find.attr(s,"tabindex");return c?parseInt(c,10):Ar.test(s.nodeName)||Sr.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),$.optSelected||(l.propHooks.selected={get:function(s){var c=s.parentNode;return c&&c.parentNode&&c.parentNode.selectedIndex,null},set:function(s){var c=s.parentNode;c&&(c.selectedIndex,c.parentNode&&c.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function Sn(s){var c=s.match(yt)||[];return c.join(" ")}function rn(s){return s.getAttribute&&s.getAttribute("class")||""}function Zi(s){return Array.isArray(s)?s:typeof s=="string"?s.match(yt)||[]:[]}l.fn.extend({addClass:function(s){var c,h,f,m,y,E;return G(s)?this.each(function(R){l(this).addClass(s.call(this,R,rn(this)))}):(c=Zi(s),c.length?this.each(function(){if(f=rn(this),h=this.nodeType===1&&" "+Sn(f)+" ",h){for(y=0;y<c.length;y++)m=c[y],h.indexOf(" "+m+" ")<0&&(h+=m+" ");E=Sn(h),f!==E&&this.setAttribute("class",E)}}):this)},removeClass:function(s){var c,h,f,m,y,E;return G(s)?this.each(function(R){l(this).removeClass(s.call(this,R,rn(this)))}):arguments.length?(c=Zi(s),c.length?this.each(function(){if(f=rn(this),h=this.nodeType===1&&" "+Sn(f)+" ",h){for(y=0;y<c.length;y++)for(m=c[y];h.indexOf(" "+m+" ")>-1;)h=h.replace(" "+m+" "," ");E=Sn(h),f!==E&&this.setAttribute("class",E)}}):this):this.attr("class","")},toggleClass:function(s,c){var h,f,m,y,E=typeof s,R=E==="string"||Array.isArray(s);return G(s)?this.each(function(b){l(this).toggleClass(s.call(this,b,rn(this),c),c)}):typeof c=="boolean"&&R?c?this.addClass(s):this.removeClass(s):(h=Zi(s),this.each(function(){if(R)for(y=l(this),m=0;m<h.length;m++)f=h[m],y.hasClass(f)?y.removeClass(f):y.addClass(f);else(s===void 0||E==="boolean")&&(f=rn(this),f&&se.set(this,"__className__",f),this.setAttribute&&this.setAttribute("class",f||s===!1?"":se.get(this,"__className__")||""))}))},hasClass:function(s){var c,h,f=0;for(c=" "+s+" ";h=this[f++];)if(h.nodeType===1&&(" "+Sn(rn(h))+" ").indexOf(c)>-1)return!0;return!1}});var Oa=/\r/g;l.fn.extend({val:function(s){var c,h,f,m=this[0];return arguments.length?(f=G(s),this.each(function(y){var E;this.nodeType===1&&(f?E=s.call(this,y,l(this).val()):E=s,E==null?E="":typeof E=="number"?E+="":Array.isArray(E)&&(E=l.map(E,function(R){return R==null?"":R+""})),c=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!c||!("set"in c)||c.set(this,E,"value")===void 0)&&(this.value=E))})):m?(c=l.valHooks[m.type]||l.valHooks[m.nodeName.toLowerCase()],c&&"get"in c&&(h=c.get(m,"value"))!==void 0?h:(h=m.value,typeof h=="string"?h.replace(Oa,""):h??"")):void 0}}),l.extend({valHooks:{option:{get:function(s){var c=l.find.attr(s,"value");return c??Sn(l.text(s))}},select:{get:function(s){var c,h,f,m=s.options,y=s.selectedIndex,E=s.type==="select-one",R=E?null:[],b=E?y+1:m.length;for(y<0?f=b:f=E?y:0;f<b;f++)if(h=m[f],(h.selected||f===y)&&!h.disabled&&(!h.parentNode.disabled||!S(h.parentNode,"optgroup"))){if(c=l(h).val(),E)return c;R.push(c)}return R},set:function(s,c){for(var h,f,m=s.options,y=l.makeArray(c),E=m.length;E--;)f=m[E],(f.selected=l.inArray(l.valHooks.option.get(f),y)>-1)&&(h=!0);return h||(s.selectedIndex=-1),y}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(s,c){if(Array.isArray(c))return s.checked=l.inArray(l(s).val(),c)>-1}},$.checkOn||(l.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var Cr=e.location,co={guid:Date.now()},Cn=/\?/;l.parseXML=function(s){var c,h;if(!s||typeof s!="string")return null;try{c=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return h=c&&c.getElementsByTagName("parsererror")[0],(!c||h)&&l.error("Invalid XML: "+(h?l.map(h.childNodes,function(f){return f.textContent}).join(`
`):s)),c};var Wt=/^(?:focusinfocus|focusoutblur)$/,es=function(s){s.stopPropagation()};l.extend(l.event,{trigger:function(s,c,h,f){var m,y,E,R,b,D,q,H,F=[h||Z],Q=P.call(s,"type")?s.type:s,ue=P.call(s,"namespace")?s.namespace.split("."):[];if(y=H=E=h=h||Z,!(h.nodeType===3||h.nodeType===8)&&!Wt.test(Q+l.event.triggered)&&(Q.indexOf(".")>-1&&(ue=Q.split("."),Q=ue.shift(),ue.sort()),b=Q.indexOf(":")<0&&"on"+Q,s=s[l.expando]?s:new l.Event(Q,typeof s=="object"&&s),s.isTrigger=f?2:3,s.namespace=ue.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+ue.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=h),c=c==null?[s]:l.makeArray(c,[s]),q=l.event.special[Q]||{},!(!f&&q.trigger&&q.trigger.apply(h,c)===!1))){if(!f&&!q.noBubble&&!J(h)){for(R=q.delegateType||Q,Wt.test(R+Q)||(y=y.parentNode);y;y=y.parentNode)F.push(y),E=y;E===(h.ownerDocument||Z)&&F.push(E.defaultView||E.parentWindow||e)}for(m=0;(y=F[m++])&&!s.isPropagationStopped();)H=y,s.type=m>1?R:q.bindType||Q,D=(se.get(y,"events")||Object.create(null))[s.type]&&se.get(y,"handle"),D&&D.apply(y,c),D=b&&y[b],D&&D.apply&&vn(y)&&(s.result=D.apply(y,c),s.result===!1&&s.preventDefault());return s.type=Q,!f&&!s.isDefaultPrevented()&&(!q._default||q._default.apply(F.pop(),c)===!1)&&vn(h)&&b&&G(h[Q])&&!J(h)&&(E=h[b],E&&(h[b]=null),l.event.triggered=Q,s.isPropagationStopped()&&H.addEventListener(Q,es),h[Q](),s.isPropagationStopped()&&H.removeEventListener(Q,es),l.event.triggered=void 0,E&&(h[b]=E)),s.result}},simulate:function(s,c,h){var f=l.extend(new l.Event,h,{type:s,isSimulated:!0});l.event.trigger(f,null,c)}}),l.fn.extend({trigger:function(s,c){return this.each(function(){l.event.trigger(s,c,this)})},triggerHandler:function(s,c){var h=this[0];if(h)return l.event.trigger(s,c,h,!0)}});var uo=/\[\]$/,ts=/\r?\n/g,Wn=/^(?:submit|button|image|reset|file)$/i,Ma=/^(?:input|select|textarea|keygen)/i;function ns(s,c,h,f){var m;if(Array.isArray(c))l.each(c,function(y,E){h||uo.test(s)?f(s,E):ns(s+"["+(typeof E=="object"&&E!=null?y:"")+"]",E,h,f)});else if(!h&&Ne(c)==="object")for(m in c)ns(s+"["+m+"]",c[m],h,f);else f(s,c)}l.param=function(s,c){var h,f=[],m=function(y,E){var R=G(E)?E():E;f[f.length]=encodeURIComponent(y)+"="+encodeURIComponent(R??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!l.isPlainObject(s))l.each(s,function(){m(this.name,this.value)});else for(h in s)ns(h,s[h],c,m);return f.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=l.prop(this,"elements");return s?l.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!l(this).is(":disabled")&&Ma.test(this.nodeName)&&!Wn.test(s)&&(this.checked||!Tn.test(s))}).map(function(s,c){var h=l(this).val();return h==null?null:Array.isArray(h)?l.map(h,function(f){return{name:c.name,value:f.replace(ts,`\r
`)}}):{name:c.name,value:h.replace(ts,`\r
`)}}).get()}});var La=/%20/g,sn=/#.*$/,Fa=/([?&])_=[^&]*/,Ua=/^(.*?):[ \t]*([^\r\n]*)$/mg,li=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,hi=/^(?:GET|HEAD)$/,lo=/^\/\//,Gn={},Rn={},rs="*/".concat("*"),Rr=Z.createElement("a");Rr.href=Cr.href;function Fe(s){return function(c,h){typeof c!="string"&&(h=c,c="*");var f,m=0,y=c.toLowerCase().match(yt)||[];if(G(h))for(;f=y[m++];)f[0]==="+"?(f=f.slice(1)||"*",(s[f]=s[f]||[]).unshift(h)):(s[f]=s[f]||[]).push(h)}}function ho(s,c,h,f){var m={},y=s===Rn;function E(R){var b;return m[R]=!0,l.each(s[R]||[],function(D,q){var H=q(c,h,f);if(typeof H=="string"&&!y&&!m[H])return c.dataTypes.unshift(H),E(H),!1;if(y)return!(b=H)}),b}return E(c.dataTypes[0])||!m["*"]&&E("*")}function is(s,c){var h,f,m=l.ajaxSettings.flatOptions||{};for(h in c)c[h]!==void 0&&((m[h]?s:f||(f={}))[h]=c[h]);return f&&l.extend(!0,s,f),s}function fo(s,c,h){for(var f,m,y,E,R=s.contents,b=s.dataTypes;b[0]==="*";)b.shift(),f===void 0&&(f=s.mimeType||c.getResponseHeader("Content-Type"));if(f){for(m in R)if(R[m]&&R[m].test(f)){b.unshift(m);break}}if(b[0]in h)y=b[0];else{for(m in h){if(!b[0]||s.converters[m+" "+b[0]]){y=m;break}E||(E=m)}y=y||E}if(y)return y!==b[0]&&b.unshift(y),h[y]}function po(s,c,h,f){var m,y,E,R,b,D={},q=s.dataTypes.slice();if(q[1])for(E in s.converters)D[E.toLowerCase()]=s.converters[E];for(y=q.shift();y;)if(s.responseFields[y]&&(h[s.responseFields[y]]=c),!b&&f&&s.dataFilter&&(c=s.dataFilter(c,s.dataType)),b=y,y=q.shift(),y){if(y==="*")y=b;else if(b!=="*"&&b!==y){if(E=D[b+" "+y]||D["* "+y],!E){for(m in D)if(R=m.split(" "),R[1]===y&&(E=D[b+" "+R[0]]||D["* "+R[0]],E)){E===!0?E=D[m]:D[m]!==!0&&(y=R[0],q.unshift(R[1]));break}}if(E!==!0)if(E&&s.throws)c=E(c);else try{c=E(c)}catch(H){return{state:"parsererror",error:E?H:"No conversion from "+b+" to "+y}}}}return{state:"success",data:c}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Cr.href,type:"GET",isLocal:li.test(Cr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":rs,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,c){return c?is(is(s,l.ajaxSettings),c):is(l.ajaxSettings,s)},ajaxPrefilter:Fe(Gn),ajaxTransport:Fe(Rn),ajax:function(s,c){typeof s=="object"&&(c=s,s=void 0),c=c||{};var h,f,m,y,E,R,b,D,q,H,F=l.ajaxSetup({},c),Q=F.context||F,ue=F.context&&(Q.nodeType||Q.jquery)?l(Q):l.event,we=l.Deferred(),de=l.Callbacks("once memory"),Ke=F.statusCode||{},$e={},Pt={},kt="canceled",Ee={readyState:0,getResponseHeader:function(Ae){var Ue;if(b){if(!y)for(y={};Ue=Ua.exec(m);)y[Ue[1].toLowerCase()+" "]=(y[Ue[1].toLowerCase()+" "]||[]).concat(Ue[2]);Ue=y[Ae.toLowerCase()+" "]}return Ue==null?null:Ue.join(", ")},getAllResponseHeaders:function(){return b?m:null},setRequestHeader:function(Ae,Ue){return b==null&&(Ae=Pt[Ae.toLowerCase()]=Pt[Ae.toLowerCase()]||Ae,$e[Ae]=Ue),this},overrideMimeType:function(Ae){return b==null&&(F.mimeType=Ae),this},statusCode:function(Ae){var Ue;if(Ae)if(b)Ee.always(Ae[Ee.status]);else for(Ue in Ae)Ke[Ue]=[Ke[Ue],Ae[Ue]];return this},abort:function(Ae){var Ue=Ae||kt;return h&&h.abort(Ue),Be(0,Ue),this}};if(we.promise(Ee),F.url=((s||F.url||Cr.href)+"").replace(lo,Cr.protocol+"//"),F.type=c.method||c.type||F.method||F.type,F.dataTypes=(F.dataType||"*").toLowerCase().match(yt)||[""],F.crossDomain==null){R=Z.createElement("a");try{R.href=F.url,R.href=R.href,F.crossDomain=Rr.protocol+"//"+Rr.host!=R.protocol+"//"+R.host}catch{F.crossDomain=!0}}if(F.data&&F.processData&&typeof F.data!="string"&&(F.data=l.param(F.data,F.traditional)),ho(Gn,F,c,Ee),b)return Ee;D=l.event&&F.global,D&&l.active++===0&&l.event.trigger("ajaxStart"),F.type=F.type.toUpperCase(),F.hasContent=!hi.test(F.type),f=F.url.replace(sn,""),F.hasContent?F.data&&F.processData&&(F.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(F.data=F.data.replace(La,"+")):(H=F.url.slice(f.length),F.data&&(F.processData||typeof F.data=="string")&&(f+=(Cn.test(f)?"&":"?")+F.data,delete F.data),F.cache===!1&&(f=f.replace(Fa,"$1"),H=(Cn.test(f)?"&":"?")+"_="+co.guid+++H),F.url=f+H),F.ifModified&&(l.lastModified[f]&&Ee.setRequestHeader("If-Modified-Since",l.lastModified[f]),l.etag[f]&&Ee.setRequestHeader("If-None-Match",l.etag[f])),(F.data&&F.hasContent&&F.contentType!==!1||c.contentType)&&Ee.setRequestHeader("Content-Type",F.contentType),Ee.setRequestHeader("Accept",F.dataTypes[0]&&F.accepts[F.dataTypes[0]]?F.accepts[F.dataTypes[0]]+(F.dataTypes[0]!=="*"?", "+rs+"; q=0.01":""):F.accepts["*"]);for(q in F.headers)Ee.setRequestHeader(q,F.headers[q]);if(F.beforeSend&&(F.beforeSend.call(Q,Ee,F)===!1||b))return Ee.abort();if(kt="abort",de.add(F.complete),Ee.done(F.success),Ee.fail(F.error),h=ho(Rn,F,c,Ee),!h)Be(-1,"No Transport");else{if(Ee.readyState=1,D&&ue.trigger("ajaxSend",[Ee,F]),b)return Ee;F.async&&F.timeout>0&&(E=e.setTimeout(function(){Ee.abort("timeout")},F.timeout));try{b=!1,h.send($e,Be)}catch(Ae){if(b)throw Ae;Be(-1,Ae)}}function Be(Ae,Ue,Ft,o){var d,g,T,O,U,X=Ue;b||(b=!0,E&&e.clearTimeout(E),h=void 0,m=o||"",Ee.readyState=Ae>0?4:0,d=Ae>=200&&Ae<300||Ae===304,Ft&&(O=fo(F,Ee,Ft)),!d&&l.inArray("script",F.dataTypes)>-1&&l.inArray("json",F.dataTypes)<0&&(F.converters["text script"]=function(){}),O=po(F,O,Ee,d),d?(F.ifModified&&(U=Ee.getResponseHeader("Last-Modified"),U&&(l.lastModified[f]=U),U=Ee.getResponseHeader("etag"),U&&(l.etag[f]=U)),Ae===204||F.type==="HEAD"?X="nocontent":Ae===304?X="notmodified":(X=O.state,g=O.data,T=O.error,d=!T)):(T=X,(Ae||!X)&&(X="error",Ae<0&&(Ae=0))),Ee.status=Ae,Ee.statusText=(Ue||X)+"",d?we.resolveWith(Q,[g,X,Ee]):we.rejectWith(Q,[Ee,X,T]),Ee.statusCode(Ke),Ke=void 0,D&&ue.trigger(d?"ajaxSuccess":"ajaxError",[Ee,F,d?g:T]),de.fireWith(Q,[Ee,X]),D&&(ue.trigger("ajaxComplete",[Ee,F]),--l.active||l.event.trigger("ajaxStop")))}return Ee},getJSON:function(s,c,h){return l.get(s,c,h,"json")},getScript:function(s,c){return l.get(s,void 0,c,"script")}}),l.each(["get","post"],function(s,c){l[c]=function(h,f,m,y){return G(f)&&(y=y||m,m=f,f=void 0),l.ajax(l.extend({url:h,type:c,dataType:y,data:f,success:m},l.isPlainObject(h)&&h))}}),l.ajaxPrefilter(function(s){var c;for(c in s.headers)c.toLowerCase()==="content-type"&&(s.contentType=s.headers[c]||"")}),l._evalUrl=function(s,c,h){return l.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(f){l.globalEval(f,c,h)}})},l.fn.extend({wrapAll:function(s){var c;return this[0]&&(G(s)&&(s=s.call(this[0])),c=l(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&c.insertBefore(this[0]),c.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(s){return G(s)?this.each(function(c){l(this).wrapInner(s.call(this,c))}):this.each(function(){var c=l(this),h=c.contents();h.length?h.wrapAll(s):c.append(s)})},wrap:function(s){var c=G(s);return this.each(function(h){l(this).wrapAll(c?s.call(this,h):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(s){return!l.expr.pseudos.visible(s)},l.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var go={0:200,1223:204},on=l.ajaxSettings.xhr();$.cors=!!on&&"withCredentials"in on,$.ajax=on=!!on,l.ajaxTransport(function(s){var c,h;if($.cors||on&&!s.crossDomain)return{send:function(f,m){var y,E=s.xhr();if(E.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(y in s.xhrFields)E[y]=s.xhrFields[y];s.mimeType&&E.overrideMimeType&&E.overrideMimeType(s.mimeType),!s.crossDomain&&!f["X-Requested-With"]&&(f["X-Requested-With"]="XMLHttpRequest");for(y in f)E.setRequestHeader(y,f[y]);c=function(R){return function(){c&&(c=h=E.onload=E.onerror=E.onabort=E.ontimeout=E.onreadystatechange=null,R==="abort"?E.abort():R==="error"?typeof E.status!="number"?m(0,"error"):m(E.status,E.statusText):m(go[E.status]||E.status,E.statusText,(E.responseType||"text")!=="text"||typeof E.responseText!="string"?{binary:E.response}:{text:E.responseText},E.getAllResponseHeaders()))}},E.onload=c(),h=E.onerror=E.ontimeout=c("error"),E.onabort!==void 0?E.onabort=h:E.onreadystatechange=function(){E.readyState===4&&e.setTimeout(function(){c&&h()})},c=c("abort");try{E.send(s.hasContent&&s.data||null)}catch(R){if(c)throw R}},abort:function(){c&&c()}}}),l.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return l.globalEval(s),s}}}),l.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),l.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var c,h;return{send:function(f,m){c=l("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",h=function(y){c.remove(),h=null,y&&m(y.type==="error"?404:200,y.type)}),Z.head.appendChild(c[0])},abort:function(){h&&h()}}}});var ss=[],Rt=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=ss.pop()||l.expando+"_"+co.guid++;return this[s]=!0,s}}),l.ajaxPrefilter("json jsonp",function(s,c,h){var f,m,y,E=s.jsonp!==!1&&(Rt.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Rt.test(s.data)&&"data");if(E||s.dataTypes[0]==="jsonp")return f=s.jsonpCallback=G(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,E?s[E]=s[E].replace(Rt,"$1"+f):s.jsonp!==!1&&(s.url+=(Cn.test(s.url)?"&":"?")+s.jsonp+"="+f),s.converters["script json"]=function(){return y||l.error(f+" was not called"),y[0]},s.dataTypes[0]="json",m=e[f],e[f]=function(){y=arguments},h.always(function(){m===void 0?l(e).removeProp(f):e[f]=m,s[f]&&(s.jsonpCallback=c.jsonpCallback,ss.push(f)),y&&G(m)&&m(y[0]),y=m=void 0}),"script"}),$.createHTMLDocument=(function(){var s=Z.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2})(),l.parseHTML=function(s,c,h){if(typeof s!="string")return[];typeof c=="boolean"&&(h=c,c=!1);var f,m,y;return c||($.createHTMLDocument?(c=Z.implementation.createHTMLDocument(""),f=c.createElement("base"),f.href=Z.location.href,c.head.appendChild(f)):c=Z),m=Bt.exec(s),y=!h&&[],m?[c.createElement(m[1])]:(m=Gi([s],c,y),y&&y.length&&l(y).remove(),l.merge([],m.childNodes))},l.fn.load=function(s,c,h){var f,m,y,E=this,R=s.indexOf(" ");return R>-1&&(f=Sn(s.slice(R)),s=s.slice(0,R)),G(c)?(h=c,c=void 0):c&&typeof c=="object"&&(m="POST"),E.length>0&&l.ajax({url:s,type:m||"GET",dataType:"html",data:c}).done(function(b){y=arguments,E.html(f?l("<div>").append(l.parseHTML(b)).find(f):b)}).always(h&&function(b,D){E.each(function(){h.apply(this,y||[b.responseText,D,b])})}),this},l.expr.pseudos.animated=function(s){return l.grep(l.timers,function(c){return s===c.elem}).length},l.offset={setOffset:function(s,c,h){var f,m,y,E,R,b,D,q=l.css(s,"position"),H=l(s),F={};q==="static"&&(s.style.position="relative"),R=H.offset(),y=l.css(s,"top"),b=l.css(s,"left"),D=(q==="absolute"||q==="fixed")&&(y+b).indexOf("auto")>-1,D?(f=H.position(),E=f.top,m=f.left):(E=parseFloat(y)||0,m=parseFloat(b)||0),G(c)&&(c=c.call(s,h,l.extend({},R))),c.top!=null&&(F.top=c.top-R.top+E),c.left!=null&&(F.left=c.left-R.left+m),"using"in c?c.using.call(s,F):H.css(F)}},l.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(m){l.offset.setOffset(this,s,m)});var c,h,f=this[0];if(f)return f.getClientRects().length?(c=f.getBoundingClientRect(),h=f.ownerDocument.defaultView,{top:c.top+h.pageYOffset,left:c.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,c,h,f=this[0],m={top:0,left:0};if(l.css(f,"position")==="fixed")c=f.getBoundingClientRect();else{for(c=this.offset(),h=f.ownerDocument,s=f.offsetParent||h.documentElement;s&&(s===h.body||s===h.documentElement)&&l.css(s,"position")==="static";)s=s.parentNode;s&&s!==f&&s.nodeType===1&&(m=l(s).offset(),m.top+=l.css(s,"borderTopWidth",!0),m.left+=l.css(s,"borderLeftWidth",!0))}return{top:c.top-m.top-l.css(f,"marginTop",!0),left:c.left-m.left-l.css(f,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&l.css(s,"position")==="static";)s=s.offsetParent;return s||Zt})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,c){var h=c==="pageYOffset";l.fn[s]=function(f){return Ht(this,function(m,y,E){var R;if(J(m)?R=m:m.nodeType===9&&(R=m.defaultView),E===void 0)return R?R[c]:m[y];R?R.scrollTo(h?R.pageXOffset:E,h?E:R.pageYOffset):m[y]=E},s,f,arguments.length)}}),l.each(["top","left"],function(s,c){l.cssHooks[c]=wr($.pixelPosition,function(h,f){if(f)return f=Tr(h,c),ri.test(f)?l(h).position()[c]+"px":f})}),l.each({Height:"height",Width:"width"},function(s,c){l.each({padding:"inner"+s,content:c,"":"outer"+s},function(h,f){l.fn[f]=function(m,y){var E=arguments.length&&(h||typeof m!="boolean"),R=h||(m===!0||y===!0?"margin":"border");return Ht(this,function(b,D,q){var H;return J(b)?f.indexOf("outer")===0?b["inner"+s]:b.document.documentElement["client"+s]:b.nodeType===9?(H=b.documentElement,Math.max(b.body["scroll"+s],H["scroll"+s],b.body["offset"+s],H["offset"+s],H["client"+s])):q===void 0?l.css(b,D,R):l.style(b,D,q,R)},c,E?m:void 0,E)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,c){l.fn[c]=function(h){return this.on(c,h)}}),l.fn.extend({bind:function(s,c,h){return this.on(s,null,c,h)},unbind:function(s,c){return this.off(s,null,c)},delegate:function(s,c,h,f){return this.on(c,s,h,f)},undelegate:function(s,c,h){return arguments.length===1?this.off(s,"**"):this.off(c,s||"**",h)},hover:function(s,c){return this.on("mouseenter",s).on("mouseleave",c||s)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,c){l.fn[c]=function(h,f){return arguments.length>0?this.on(c,null,h,f):this.trigger(c)}});var mo=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(s,c){var h,f,m;if(typeof c=="string"&&(h=s[c],c=s,s=h),!!G(s))return f=a.call(arguments,2),m=function(){return s.apply(c||this,f.concat(a.call(arguments)))},m.guid=s.guid=s.guid||l.guid++,m},l.holdReady=function(s){s?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=S,l.isFunction=G,l.isWindow=J,l.camelCase=Dt,l.type=Ne,l.now=Date.now,l.isNumeric=function(s){var c=l.type(s);return(c==="number"||c==="string")&&!isNaN(s-parseFloat(s))},l.trim=function(s){return s==null?"":(s+"").replace(mo,"$1")};var ja=e.jQuery,Pr=e.$;return l.noConflict=function(s){return e.$===l&&(e.$=Pr),s&&e.jQuery===l&&(e.jQuery=ja),l},typeof t>"u"&&(e.jQuery=e.$=l),l})})(So)),So.exports}var Qf=Kf();const Y=Wf(Qf),Yf=()=>{};var xu={};/**
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
 */const ah=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Xf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=n[t++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=n[t++],u=n[t++],p=n[t++],_=((i&7)<<18|(a&63)<<12|(u&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(_>>10)),e[r++]=String.fromCharCode(56320+(_&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|u&63)}}return e.join("")},ch={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const a=n[i],u=i+1<n.length,p=u?n[i+1]:0,_=i+2<n.length,v=_?n[i+2]:0,w=a>>2,P=(a&3)<<4|p>>4;let k=(p&15)<<2|v>>6,B=v&63;_||(B=64,u||(k=64)),r.push(t[w],t[P],t[k],t[B])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ah(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Xf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const a=t[n.charAt(i++)],p=i<n.length?t[n.charAt(i)]:0;++i;const v=i<n.length?t[n.charAt(i)]:64;++i;const P=i<n.length?t[n.charAt(i)]:64;if(++i,a==null||p==null||v==null||P==null)throw new Jf;const k=a<<2|p>>4;if(r.push(k),v!==64){const B=p<<4&240|v>>2;if(r.push(B),P!==64){const $=v<<6&192|P;r.push($)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Jf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zf=function(n){const e=ah(n);return ch.encodeByteArray(e,!0)},Fo=function(n){return Zf(n).replace(/\./g,"")},uh=function(n){try{return ch.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ep(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tp=()=>ep().__FIREBASE_DEFAULTS__,np=()=>{if(typeof process>"u"||typeof xu>"u")return;const n=xu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},rp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&uh(n[1]);return e&&JSON.parse(e)},oa=()=>{try{return Yf()||tp()||np()||rp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},lh=n=>oa()?.emulatorHosts?.[n],ip=n=>{const e=lh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},hh=()=>oa()?.config,dh=n=>oa()?.[`_${n}`];/**
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
 */class sp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function fh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function op(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Fo(JSON.stringify(t)),Fo(JSON.stringify(u)),""].join(".")}const fs={};function ap(){const n={prod:[],emulator:[]};for(const e of Object.keys(fs))fs[e]?n.emulator.push(e):n.prod.push(e);return n}function cp(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Du=!1;function ph(n,e){if(typeof window>"u"||typeof document>"u"||!Ni(window.location.host)||fs[n]===e||fs[n]||Du)return;fs[n]=e;function t(k){return`__firebase__banner__${k}`}const r="__firebase__banner",a=ap().prod.length>0;function u(){const k=document.getElementById(r);k&&k.remove()}function p(k){k.style.display="flex",k.style.background="#7faaf0",k.style.position="fixed",k.style.bottom="5px",k.style.left="5px",k.style.padding=".5em",k.style.borderRadius="5px",k.style.alignItems="center"}function _(k,B){k.setAttribute("width","24"),k.setAttribute("id",B),k.setAttribute("height","24"),k.setAttribute("viewBox","0 0 24 24"),k.setAttribute("fill","none"),k.style.marginLeft="-6px"}function v(){const k=document.createElement("span");return k.style.cursor="pointer",k.style.marginLeft="16px",k.style.fontSize="24px",k.innerHTML=" &times;",k.onclick=()=>{Du=!0,u()},k}function w(k,B){k.setAttribute("id",B),k.innerText="Learn more",k.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",k.setAttribute("target","__blank"),k.style.paddingLeft="5px",k.style.textDecoration="underline"}function P(){const k=cp(r),B=t("text"),$=document.getElementById(B)||document.createElement("span"),G=t("learnmore"),J=document.getElementById(G)||document.createElement("a"),Z=t("preprendIcon"),ye=document.getElementById(Z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(k.created){const _e=k.element;p(_e),w(J,G);const Ne=v();_(ye,Z),_e.append(ye,$,J,Ne),document.body.appendChild(_e)}a?($.innerText="Preview backend disconnected.",ye.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ye.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",P):P()}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function up(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function lp(){const n=oa()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function fp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pp(){const n=pt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gp(){return!lp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mp(){try{return typeof indexedDB=="object"}catch{return!1}}function yp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const _p="FirebaseError";class jn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=_p,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vs.prototype.create)}}class Vs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],u=a?vp(a,r):"Error",p=`${this.serviceName}: ${u} (${i}).`;return new jn(i,p,r)}}function vp(n,e){return n.replace(Ep,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ep=/\{\$([^}]+)}/g;function Tp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Vr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const a=n[i],u=e[i];if(Nu(a)&&Nu(u)){if(!Vr(a,u))return!1}else if(a!==u)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Nu(n){return n!==null&&typeof n=="object"}/**
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
 */function Os(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function as(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function cs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function wp(n,e){const t=new Ip(n,e);return t.subscribe.bind(t)}class Ip{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");bp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Wa),i.error===void 0&&(i.error=Wa),i.complete===void 0&&(i.complete=Wa);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Wa(){}/**
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
 */function Je(n){return n&&n._delegate?n._delegate:n}class Or{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xr="[DEFAULT]";/**
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
 */class Ap{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new sp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cp(e))try{this.getOrInitializeService({instanceIdentifier:xr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xr){return this.instances.has(e)}getOptions(e=xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(a);r===p&&u.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xr){return this.component?this.component.multipleInstances?e:xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sp(n){return n===xr?void 0:n}function Cp(n){return n.instantiationMode==="EAGER"}/**
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
 */class Rp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ap(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Se;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Se||(Se={}));const Pp={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},kp=Se.INFO,xp={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},Dp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=xp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kc{constructor(e){this.name=e,this._logLevel=kp,this._logHandler=Dp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const Np=(n,e)=>e.some(t=>n instanceof t);let Vu,Ou;function Vp(){return Vu||(Vu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Op(){return Ou||(Ou=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gh=new WeakMap,ic=new WeakMap,mh=new WeakMap,Ga=new WeakMap,xc=new WeakMap;function Mp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(rr(n.result)),i()},u=()=>{r(n.error),i()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&gh.set(t,n)}).catch(()=>{}),xc.set(e,n),e}function Lp(n){if(ic.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),i()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});ic.set(n,e)}let sc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ic.get(n);if(e==="objectStoreNames")return n.objectStoreNames||mh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return rr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Fp(n){sc=n(sc)}function Up(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ka(this),e,...t);return mh.set(r,e.sort?e.sort():[e]),rr(r)}:Op().includes(n)?function(...e){return n.apply(Ka(this),e),rr(gh.get(this))}:function(...e){return rr(n.apply(Ka(this),e))}}function jp(n){return typeof n=="function"?Up(n):(n instanceof IDBTransaction&&Lp(n),Np(n,Vp())?new Proxy(n,sc):n)}function rr(n){if(n instanceof IDBRequest)return Mp(n);if(Ga.has(n))return Ga.get(n);const e=jp(n);return e!==n&&(Ga.set(n,e),xc.set(e,n)),e}const Ka=n=>xc.get(n);function qp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:a}={}){const u=indexedDB.open(n,e),p=rr(u);return r&&u.addEventListener("upgradeneeded",_=>{r(rr(u.result),_.oldVersion,_.newVersion,rr(u.transaction),_)}),t&&u.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),p.then(_=>{a&&_.addEventListener("close",()=>a()),i&&_.addEventListener("versionchange",v=>i(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}const $p=["get","getKey","getAll","getAllKeys","count"],Bp=["put","add","delete","clear"],Qa=new Map;function Mu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qa.get(e))return Qa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Bp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$p.includes(t)))return;const a=async function(u,...p){const _=this.transaction(u,i?"readwrite":"readonly");let v=_.store;return r&&(v=v.index(p.shift())),(await Promise.all([v[t](...p),i&&_.done]))[0]};return Qa.set(e,a),a}Fp(n=>({...n,get:(e,t,r)=>Mu(e,t)||n.get(e,t,r),has:(e,t)=>!!Mu(e,t)||n.has(e,t)}));/**
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
 */class Hp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function zp(n){return n.getComponent()?.type==="VERSION"}const oc="@firebase/app",Lu="0.14.1";/**
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
 */const Mn=new kc("@firebase/app"),Wp="@firebase/app-compat",Gp="@firebase/analytics-compat",Kp="@firebase/analytics",Qp="@firebase/app-check-compat",Yp="@firebase/app-check",Xp="@firebase/auth",Jp="@firebase/auth-compat",Zp="@firebase/database",eg="@firebase/data-connect",tg="@firebase/database-compat",ng="@firebase/functions",rg="@firebase/functions-compat",ig="@firebase/installations",sg="@firebase/installations-compat",og="@firebase/messaging",ag="@firebase/messaging-compat",cg="@firebase/performance",ug="@firebase/performance-compat",lg="@firebase/remote-config",hg="@firebase/remote-config-compat",dg="@firebase/storage",fg="@firebase/storage-compat",pg="@firebase/firestore",gg="@firebase/ai",mg="@firebase/firestore-compat",yg="firebase",_g="12.1.0";/**
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
 */const ac="[DEFAULT]",vg={[oc]:"fire-core",[Wp]:"fire-core-compat",[Kp]:"fire-analytics",[Gp]:"fire-analytics-compat",[Yp]:"fire-app-check",[Qp]:"fire-app-check-compat",[Xp]:"fire-auth",[Jp]:"fire-auth-compat",[Zp]:"fire-rtdb",[eg]:"fire-data-connect",[tg]:"fire-rtdb-compat",[ng]:"fire-fn",[rg]:"fire-fn-compat",[ig]:"fire-iid",[sg]:"fire-iid-compat",[og]:"fire-fcm",[ag]:"fire-fcm-compat",[cg]:"fire-perf",[ug]:"fire-perf-compat",[lg]:"fire-rc",[hg]:"fire-rc-compat",[dg]:"fire-gcs",[fg]:"fire-gcs-compat",[pg]:"fire-fst",[mg]:"fire-fst-compat",[gg]:"fire-vertex","fire-js":"fire-js",[yg]:"fire-js-all"};/**
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
 */const Uo=new Map,Eg=new Map,cc=new Map;function Fu(n,e){try{n.container.addComponent(e)}catch(t){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ai(n){const e=n.name;if(cc.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;cc.set(e,n);for(const t of Uo.values())Fu(t,n);for(const t of Eg.values())Fu(t,n);return!0}function Dc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function qt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Tg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ir=new Vs("app","Firebase",Tg);/**
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
 */class wg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
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
 */const Vi=_g;function yh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:ac,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ir.create("bad-app-name",{appName:String(i)});if(t||(t=hh()),!t)throw ir.create("no-options");const a=Uo.get(i);if(a){if(Vr(t,a.options)&&Vr(r,a.config))return a;throw ir.create("duplicate-app",{appName:i})}const u=new Rp(i);for(const _ of cc.values())u.addComponent(_);const p=new wg(t,r,u);return Uo.set(i,p),p}function _h(n=ac){const e=Uo.get(n);if(!e&&n===ac&&hh())return yh();if(!e)throw ir.create("no-app",{appName:n});return e}function sr(n,e,t){let r=vg[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const u=[`Unable to register library "${r}" with version "${e}":`];i&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(u.join(" "));return}Ai(new Or(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ig="firebase-heartbeat-database",bg=1,Ts="firebase-heartbeat-store";let Ya=null;function vh(){return Ya||(Ya=qp(Ig,bg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ts)}catch(t){console.warn(t)}}}}).catch(n=>{throw ir.create("idb-open",{originalErrorMessage:n.message})})),Ya}async function Ag(n){try{const t=(await vh()).transaction(Ts),r=await t.objectStore(Ts).get(Eh(n));return await t.done,r}catch(e){if(e instanceof jn)Mn.warn(e.message);else{const t=ir.create("idb-get",{originalErrorMessage:e?.message});Mn.warn(t.message)}}}async function Uu(n,e){try{const r=(await vh()).transaction(Ts,"readwrite");await r.objectStore(Ts).put(e,Eh(n)),await r.done}catch(t){if(t instanceof jn)Mn.warn(t.message);else{const r=ir.create("idb-set",{originalErrorMessage:t?.message});Mn.warn(r.message)}}}function Eh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Sg=1024,Cg=30;class Rg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new kg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ju();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>Cg){const i=xg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Mn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ju(),{heartbeatsToSend:t,unsentEntries:r}=Pg(this._heartbeatsCache.heartbeats),i=Fo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Mn.warn(e),""}}}function ju(){return new Date().toISOString().substring(0,10)}function Pg(n,e=Sg){const t=[];let r=n.slice();for(const i of n){const a=t.find(u=>u.agent===i.agent);if(a){if(a.dates.push(i.date),qu(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),qu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class kg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mp()?yp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ag(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Uu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Uu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function qu(n){return Fo(JSON.stringify({version:2,heartbeats:n})).length}function xg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Dg(n){Ai(new Or("platform-logger",e=>new Hp(e),"PRIVATE")),Ai(new Or("heartbeat",e=>new Rg(e),"PRIVATE")),sr(oc,Lu,n),sr(oc,Lu,"esm2020"),sr("fire-js","")}Dg("");var Ng="firebase",Vg="12.1.0";/**
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
 */sr(Ng,Vg,"app");function Th(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Og=Th,wh=new Vs("auth","Firebase",Th());/**
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
 */const jo=new kc("@firebase/auth");function Mg(n,...e){jo.logLevel<=Se.WARN&&jo.warn(`Auth (${Vi}): ${n}`,...e)}function Co(n,...e){jo.logLevel<=Se.ERROR&&jo.error(`Auth (${Vi}): ${n}`,...e)}/**
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
 */function Qt(n,...e){throw Nc(n,...e)}function un(n,...e){return Nc(n,...e)}function Ih(n,e,t){const r={...Og(),[e]:t};return new Vs("auth","Firebase",r).create(e,{appName:n.name})}function Vn(n){return Ih(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return wh.create(n,...e)}function le(n,e,...t){if(!n)throw Nc(e,...t)}function xn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Co(e),new Error(e)}function Ln(n,e){n||xn(e)}/**
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
 */function uc(){return typeof self<"u"&&self.location?.href||""}function Lg(){return $u()==="http:"||$u()==="https:"}function $u(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function Fg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lg()||dp()||"connection"in navigator)?navigator.onLine:!0}function Ug(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ms{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ln(t>e,"Short delay should be less than long delay!"),this.isMobile=up()||fp()}get(){return Fg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vc(n,e){Ln(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class bh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$g=new Ms(3e4,6e4);function qn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function yn(n,e,t,r,i={}){return Ah(n,i,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const p=Os({key:n.config.apiKey,...u}).slice(1),_=await n._getAdditionalHeaders();_["Content-Type"]="application/json",n.languageCode&&(_["X-Firebase-Locale"]=n.languageCode);const v={method:e,headers:_,...a};return hp()||(v.referrerPolicy="no-referrer"),n.emulatorConfig&&Ni(n.emulatorConfig.host)&&(v.credentials="include"),bh.fetch()(await Sh(n,n.config.apiHost,t,p),v)})}async function Ah(n,e,t){n._canInitEmulator=!1;const r={...jg,...e};try{const i=new Hg(n),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Eo(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const p=a.ok?u.errorMessage:u.error.message,[_,v]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(n,"credential-already-in-use",u);if(_==="EMAIL_EXISTS")throw Eo(n,"email-already-in-use",u);if(_==="USER_DISABLED")throw Eo(n,"user-disabled",u);const w=r[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Ih(n,w,v);Qt(n,w)}}catch(i){if(i instanceof jn)throw i;Qt(n,"network-request-failed",{message:String(i)})}}async function Ls(n,e,t,r,i={}){const a=await yn(n,e,t,r,i);return"mfaPendingCredential"in a&&Qt(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function Sh(n,e,t,r){const i=`${e}${t}?${r}`,a=n,u=a.config.emulator?Vc(n.config,i):`${n.config.apiScheme}://${i}`;return qg.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function Bg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),$g.get())})}}function Eo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=un(n,e,r);return i.customData._tokenResponse=t,i}function Bu(n){return n!==void 0&&n.enterprise!==void 0}class zg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Bg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Wg(n,e){return yn(n,"GET","/v2/recaptchaConfig",qn(n,e))}/**
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
 */async function Gg(n,e){return yn(n,"POST","/v1/accounts:delete",e)}async function qo(n,e){return yn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ps(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kg(n,e=!1){const t=Je(n),r=await t.getIdToken(e),i=Oc(r);le(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,u=a?.sign_in_provider;return{claims:i,token:r,authTime:ps(Xa(i.auth_time)),issuedAtTime:ps(Xa(i.iat)),expirationTime:ps(Xa(i.exp)),signInProvider:u||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Xa(n){return Number(n)*1e3}function Oc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Co("JWT malformed, contained fewer than 3 sections"),null;try{const i=uh(t);return i?JSON.parse(i):(Co("Failed to decode base64 JWT payload"),null)}catch(i){return Co("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Hu(n){const e=Oc(n);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Si(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof jn&&Qg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Qg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Yg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ps(this.lastLoginAt),this.creationTime=ps(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $o(n){const e=n.auth,t=await n.getIdToken(),r=await Si(n,qo(e,{idToken:t}));le(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const a=i.providerUserInfo?.length?Ch(i.providerUserInfo):[],u=Jg(n.providerData,a),p=n.isAnonymous,_=!(n.email&&i.passwordHash)&&!u?.length,v=p?_:!1,w={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:u,metadata:new lc(i.createdAt,i.lastLoginAt),isAnonymous:v};Object.assign(n,w)}async function Xg(n){const e=Je(n);await $o(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jg(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ch(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Zg(n,e){const t=await Ah(n,{},async()=>{const r=Os({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=n.config,u=await Sh(n,i,"/v1/token",`key=${a}`),p=await n._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:p,body:r};return n.emulatorConfig&&Ni(n.emulatorConfig.host)&&(_.credentials="include"),bh.fetch()(u,_)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function em(n,e){return yn(n,"POST","/v2/accounts:revokeToken",qn(n,e))}/**
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
 */class Ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){le(e.length!==0,"internal-error");const t=Hu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:a}=await Zg(e,t);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:a}=t,u=new Ei;return r&&(le(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),i&&(le(typeof i=="string","internal-error",{appName:e}),u.accessToken=i),a&&(le(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ei,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
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
 */function Yn(n,e){le(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Gt{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Yg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new lc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Si(this,this.stsTokenManager.getToken(this.auth,e));return le(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Kg(this,e)}reload(){return Xg(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await $o(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qt(this.auth.app))return Promise.reject(Vn(this.auth));const e=await this.getIdToken();return await Si(this,Gg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,a=t.phoneNumber??void 0,u=t.photoURL??void 0,p=t.tenantId??void 0,_=t._redirectEventId??void 0,v=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:P,emailVerified:k,isAnonymous:B,providerData:$,stsTokenManager:G}=t;le(P&&G,e,"internal-error");const J=Ei.fromJSON(this.name,G);le(typeof P=="string",e,"internal-error"),Yn(r,e.name),Yn(i,e.name),le(typeof k=="boolean",e,"internal-error"),le(typeof B=="boolean",e,"internal-error"),Yn(a,e.name),Yn(u,e.name),Yn(p,e.name),Yn(_,e.name),Yn(v,e.name),Yn(w,e.name);const Z=new Gt({uid:P,auth:e,email:i,emailVerified:k,displayName:r,isAnonymous:B,photoURL:u,phoneNumber:a,tenantId:p,stsTokenManager:J,createdAt:v,lastLoginAt:w});return $&&Array.isArray($)&&(Z.providerData=$.map(ye=>({...ye}))),_&&(Z._redirectEventId=_),Z}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ei;i.updateFromServerResponse(t);const a=new Gt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $o(a),a}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];le(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?Ch(i.providerUserInfo):[],u=!(i.email&&i.passwordHash)&&!a?.length,p=new Ei;p.updateFromIdToken(r);const _=new Gt({uid:i.localId,auth:e,stsTokenManager:p,isAnonymous:u}),v={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new lc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(_,v),_}}/**
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
 */const zu=new Map;function Dn(n){Ln(n instanceof Function,"Expected a class definition");let e=zu.get(n);return e?(Ln(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zu.set(n,e),e)}/**
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
 */class Rh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Rh.type="NONE";const Wu=Rh;/**
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
 */function Ro(n,e,t){return`firebase:${n}:${e}:${t}`}class Ti{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Ro(this.userKey,i.apiKey,a),this.fullPersistenceKey=Ro("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await qo(this.auth,{idToken:e}).catch(()=>{});return t?Gt._fromGetAccountInfoResponse(this.auth,t,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ti(Dn(Wu),e,r);const i=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let a=i[0]||Dn(Wu);const u=Ro(r,e.config.apiKey,e.name);let p=null;for(const v of t)try{const w=await v._get(u);if(w){let P;if(typeof w=="string"){const k=await qo(e,{idToken:w}).catch(()=>{});if(!k)break;P=await Gt._fromGetAccountInfoResponse(e,k,w)}else P=Gt._fromJSON(e,w);v!==a&&(p=P),a=v;break}}catch{}const _=i.filter(v=>v._shouldAllowMigration);return!a._shouldAllowMigration||!_.length?new Ti(a,e,r):(a=_[0],p&&await a._set(u,p.toJSON()),await Promise.all(t.map(async v=>{if(v!==a)try{await v._remove(u)}catch{}})),new Ti(a,e,r))}}/**
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
 */function Gu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ph(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vh(e))return"Blackberry";if(Oh(e))return"Webos";if(kh(e))return"Safari";if((e.includes("chrome/")||xh(e))&&!e.includes("edge/"))return"Chrome";if(Nh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Ph(n=pt()){return/firefox\//i.test(n)}function kh(n=pt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xh(n=pt()){return/crios\//i.test(n)}function Dh(n=pt()){return/iemobile/i.test(n)}function Nh(n=pt()){return/android/i.test(n)}function Vh(n=pt()){return/blackberry/i.test(n)}function Oh(n=pt()){return/webos/i.test(n)}function Mc(n=pt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function tm(n=pt()){return Mc(n)&&!!window.navigator?.standalone}function nm(){return pp()&&document.documentMode===10}function Mh(n=pt()){return Mc(n)||Nh(n)||Oh(n)||Vh(n)||/windows phone/i.test(n)||Dh(n)}/**
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
 */function Lh(n,e=[]){let t;switch(n){case"Browser":t=Gu(pt());break;case"Worker":t=`${Gu(pt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vi}/${r}`}/**
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
 */class rm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,p)=>{try{const _=e(a);u(_)}catch(_){p(_)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function im(n,e={}){return yn(n,"GET","/v2/passwordPolicy",qn(n,e))}/**
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
 */const sm=6;class om{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??sm,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class am{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ku(this),this.idTokenSubscription=new Ku(this),this.beforeStateQueue=new rm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ti.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qo(this,{idToken:e}),r=await Gt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(qt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,u=r?._redirectEventId,p=await this.tryRedirectSignIn(e);(!a||a===u)&&p?.user&&(r=p.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $o(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ug()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qt(this.app))return Promise.reject(Vn(this));const t=e?Je(e):null;return t&&le(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qt(this.app)?Promise.reject(Vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qt(this.app)?Promise.reject(Vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await im(this),t=new om(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await em(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dn(e)||this._popupRedirectResolver;le(t,this,"argument-error"),this.redirectPersistenceManager=await Ti.create(this,[Dn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(p,this,"internal-error"),p.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,r,i);return()=>{u=!0,_()}}else{const _=e.addObserver(t);return()=>{u=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Mg(`Error while retrieving App Check token: ${e.error}`),e?.token}}function pr(n){return Je(n)}class Ku{constructor(e){this.auth=e,this.observer=null,this.addObserver=wp(t=>this.observer=t)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let aa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cm(n){aa=n}function Fh(n){return aa.loadJS(n)}function um(){return aa.recaptchaEnterpriseScript}function lm(){return aa.gapiScript}function hm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class dm{constructor(){this.enterprise=new fm}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class fm{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const pm="recaptcha-enterprise",Uh="NO_RECAPTCHA";class gm{constructor(e){this.type=pm,this.auth=pr(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,p)=>{Wg(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const v=new zg(_);return a.tenantId==null?a._agentRecaptchaConfig=v:a._tenantRecaptchaConfigs[a.tenantId]=v,u(v.siteKey)}}).catch(_=>{p(_)})})}function i(a,u,p){const _=window.grecaptcha;Bu(_)?_.enterprise.ready(()=>{_.enterprise.execute(a,{action:e}).then(v=>{u(v)}).catch(()=>{u(Uh)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new dm().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(p=>{if(!t&&Bu(window.grecaptcha))i(p,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let _=um();_.length!==0&&(_+=p),Fh(_).then(()=>{i(p,a,u)}).catch(v=>{u(v)})}}).catch(p=>{u(p)})})}}async function Qu(n,e,t,r=!1,i=!1){const a=new gm(n);let u;if(i)u=Uh;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const p={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const _=p.phoneEnrollmentInfo.phoneNumber,v=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:v,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const _=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return r?Object.assign(p,{captchaResp:u}):Object.assign(p,{captchaResponse:u}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Bo(n,e,t,r,i){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Qu(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Qu(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(a)})}/**
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
 */function mm(n,e){const t=Dc(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(Vr(a,e??{}))return i;Qt(i,"already-initialized")}return t.initialize({options:e})}function ym(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Dn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function _m(n,e,t){const r=pr(n);le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=jh(e),{host:u,port:p}=vm(e),_=p===null?"":`:${p}`,v={url:`${a}//${u}${_}/`},w=Object.freeze({host:u,port:p,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){le(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),le(Vr(v,r.config.emulator)&&Vr(w,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=v,r.emulatorConfig=w,r.settings.appVerificationDisabledForTesting=!0,Ni(u)?(fh(`${a}//${u}${_}`),ph("Auth",!0)):Em()}function jh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function vm(n){const e=jh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:Yu(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:Yu(u)}}}function Yu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Em(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Lc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,t){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}async function Tm(n,e){return yn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function wm(n,e){return Ls(n,"POST","/v1/accounts:signInWithPassword",qn(n,e))}async function qh(n,e){return yn(n,"POST","/v1/accounts:sendOobCode",qn(n,e))}async function Im(n,e){return qh(n,e)}async function bm(n,e){return qh(n,e)}/**
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
 */async function Am(n,e){return Ls(n,"POST","/v1/accounts:signInWithEmailLink",qn(n,e))}async function Sm(n,e){return Ls(n,"POST","/v1/accounts:signInWithEmailLink",qn(n,e))}/**
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
 */class ws extends Lc{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ws(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ws(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bo(e,t,"signInWithPassword",wm);case"emailLink":return Am(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bo(e,r,"signUpPassword",Tm);case"emailLink":return Sm(e,{idToken:t,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function wi(n,e){return Ls(n,"POST","/v1/accounts:signInWithIdp",qn(n,e))}/**
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
 */const Cm="http://localhost";class Mr extends Lc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...a}=t;if(!r||!i)return null;const u=new Mr(r,i);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return wi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,wi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wi(e,t)}buildRequest(){const e={requestUri:Cm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Os(t)}return e}}/**
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
 */function Rm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Pm(n){const e=as(cs(n)).link,t=e?as(cs(e)).deep_link_id:null,r=as(cs(n)).deep_link_id;return(r?as(cs(r)).link:null)||r||t||e||n}class Fc{constructor(e){const t=as(cs(e)),r=t.apiKey??null,i=t.oobCode??null,a=Rm(t.mode??null);le(r&&i&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Pm(e);try{return new Fc(t)}catch{return null}}}/**
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
 */class Oi{constructor(){this.providerId=Oi.PROVIDER_ID}static credential(e,t){return ws._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Fc.parseLink(t);return le(r,"argument-error"),ws._fromEmailAndCode(e,r.code,r.tenantId)}}Oi.PROVIDER_ID="password";Oi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $h{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fs extends $h{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Xn extends Fs{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
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
 */class Jn extends Fs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Mr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Jn.credential(t,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
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
 */class Zn extends Fs{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
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
 */class er extends Fs{constructor(){super("twitter.com")}static credential(e,t){return Mr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return er.credential(t,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
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
 */async function km(n,e){return Ls(n,"POST","/v1/accounts:signUp",qn(n,e))}/**
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
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const a=await Gt._fromIdTokenResponse(e,r,i),u=Xu(r);return new Lr({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Xu(r);return new Lr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Xu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ho extends jn{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ho.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ho(e,t,r,i)}}function Bh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Ho._fromErrorAndOperation(n,a,e,r):a})}async function xm(n,e,t=!1){const r=await Si(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Lr._forOperation(n,"link",r)}/**
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
 */async function Dm(n,e,t=!1){const{auth:r}=n;if(qt(r.app))return Promise.reject(Vn(r));const i="reauthenticate";try{const a=await Si(n,Bh(r,i,e,n),t);le(a.idToken,r,"internal-error");const u=Oc(a.idToken);le(u,r,"internal-error");const{sub:p}=u;return le(n.uid===p,r,"user-mismatch"),Lr._forOperation(n,i,a)}catch(a){throw a?.code==="auth/user-not-found"&&Qt(r,"user-mismatch"),a}}/**
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
 */async function Hh(n,e,t=!1){if(qt(n.app))return Promise.reject(Vn(n));const r="signIn",i=await Bh(n,r,e),a=await Lr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(a.user),a}async function Nm(n,e){return Hh(pr(n),e)}/**
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
 */async function zh(n){const e=pr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Vm(n,e,t){const r=pr(n);await Bo(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",bm)}async function Om(n,e,t){if(qt(n.app))return Promise.reject(Vn(n));const r=pr(n),u=await Bo(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",km).catch(_=>{throw _.code==="auth/password-does-not-meet-requirements"&&zh(n),_}),p=await Lr._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(p.user),p}function Mm(n,e,t){return qt(n.app)?Promise.reject(Vn(n)):Nm(Je(n),Oi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zh(n),r})}async function Lm(n,e){const t=Je(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:a}=await Im(t.auth,i);a!==n.email&&await n.reload()}/**
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
 */async function Fm(n,e){return yn(n,"POST","/v1/accounts:update",e)}/**
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
 */async function Um(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Je(n),a={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await Si(r,Fm(r.auth,a));r.displayName=u.displayName||null,r.photoURL=u.photoUrl||null;const p=r.providerData.find(({providerId:_})=>_==="password");p&&(p.displayName=r.displayName,p.photoURL=r.photoURL),await r._updateTokensIfNecessary(u)}function jm(n,e,t,r){return Je(n).onIdTokenChanged(e,t,r)}function qm(n,e,t){return Je(n).beforeAuthStateChanged(e,t)}function $m(n,e,t,r){return Je(n).onAuthStateChanged(e,t,r)}function Bm(n){return Je(n).signOut()}const zo="__sak";/**
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
 */class Wh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zo,"1"),this.storage.removeItem(zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Hm=1e3,zm=10;class Gh extends Wh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,p,_)=>{this.notifyListeners(u,_)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);nm()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zm):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Hm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gh.type="LOCAL";const Wm=Gh;/**
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
 */class Kh extends Wh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Kh.type="SESSION";const Qh=Kh;/**
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
 */function Gm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ca{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ca(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:a}=t.data,u=this.handlersMap[i];if(!u?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const p=Array.from(u).map(async v=>v(t.origin,a)),_=await Gm(p);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ca.receivers=[];/**
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
 */function Uc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Km{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,u;return new Promise((p,_)=>{const v=Uc("",20);i.port1.start();const w=setTimeout(()=>{_(new Error("unsupported_event"))},r);u={messageChannel:i,onMessage(P){const k=P;if(k.data.eventId===v)switch(k.data.status){case"ack":clearTimeout(w),a=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),p(k.data.response);break;default:clearTimeout(w),clearTimeout(a),_(new Error("invalid_response"));break}}},this.handlers.add(u),i.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[i.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function ln(){return window}function Qm(n){ln().location.href=n}/**
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
 */function Yh(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function Ym(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xm(){return navigator?.serviceWorker?.controller||null}function Jm(){return Yh()?self:null}/**
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
 */const Xh="firebaseLocalStorageDb",Zm=1,Wo="firebaseLocalStorage",Jh="fbase_key";class Us{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ua(n,e){return n.transaction([Wo],e?"readwrite":"readonly").objectStore(Wo)}function ey(){const n=indexedDB.deleteDatabase(Xh);return new Us(n).toPromise()}function hc(){const n=indexedDB.open(Xh,Zm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Wo,{keyPath:Jh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Wo)?e(r):(r.close(),await ey(),e(await hc()))})})}async function Ju(n,e,t){const r=ua(n,!0).put({[Jh]:e,value:t});return new Us(r).toPromise()}async function ty(n,e){const t=ua(n,!1).get(e),r=await new Us(t).toPromise();return r===void 0?null:r.value}function Zu(n,e){const t=ua(n,!0).delete(e);return new Us(t).toPromise()}const ny=800,ry=3;class Zh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>ry)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ca._getInstance(Jm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Ym(),!this.activeServiceWorker)return;this.sender=new Km(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hc();return await Ju(e,zo,"1"),await Zu(e,zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ju(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ty(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=ua(i,!1).getAll();return new Us(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ny)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zh.type="LOCAL";const iy=Zh;new Ms(3e4,6e4);/**
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
 */function sy(n,e){return e?Dn(e):(le(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class jc extends Lc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oy(n){return Hh(n.auth,new jc(n),n.bypassAuthState)}function ay(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),Dm(t,new jc(n),n.bypassAuthState)}async function cy(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),xm(t,new jc(n),n.bypassAuthState)}/**
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
 */class ed{constructor(e,t,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:a,error:u,type:p}=e;if(u){this.reject(u);return}const _={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oy;case"linkViaPopup":case"linkViaRedirect":return cy;case"reauthViaPopup":case"reauthViaRedirect":return ay;default:Qt(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uy=new Ms(2e3,1e4);class vi extends ed{constructor(e,t,r,i,a){super(e,t,i,a),this.provider=r,this.authWindow=null,this.pollId=null,vi.currentPopupAction&&vi.currentPopupAction.cancel(),vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=Uc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uy.get())};e()}}vi.currentPopupAction=null;/**
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
 */const ly="pendingRedirect",Po=new Map;class hy extends ed{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Po.get(this.auth._key());if(!e){try{const r=await dy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Po.set(this.auth._key(),e)}return this.bypassAuthState||Po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dy(n,e){const t=gy(e),r=py(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function fy(n,e){Po.set(n._key(),e)}function py(n){return Dn(n._redirectPersistence)}function gy(n){return Ro(ly,n.config.apiKey,n.name)}async function my(n,e,t=!1){if(qt(n.app))return Promise.reject(Vn(n));const r=pr(n),i=sy(r,e),u=await new hy(r,i,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const yy=600*1e3;class _y{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!td(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(un(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yy&&this.cachedEventUids.clear(),this.cachedEventUids.has(el(e))}saveEventToCache(e){this.cachedEventUids.add(el(e)),this.lastProcessedEventTime=Date.now()}}function el(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function td({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function vy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return td(n);default:return!1}}/**
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
 */async function Ey(n,e={}){return yn(n,"GET","/v1/projects",e)}/**
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
 */const Ty=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wy=/^https?/;async function Iy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ey(n);for(const t of e)try{if(by(t))return}catch{}Qt(n,"unauthorized-domain")}function by(n){const e=uc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!wy.test(t))return!1;if(Ty.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Ay=new Ms(3e4,6e4);function tl(){const n=ln().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Sy(n){return new Promise((e,t)=>{function r(){tl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tl(),t(un(n,"network-request-failed"))},timeout:Ay.get()})}if(ln().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ln().gapi?.load)r();else{const i=hm("iframefcb");return ln()[i]=()=>{gapi.load?r():t(un(n,"network-request-failed"))},Fh(`${lm()}?onload=${i}`).catch(a=>t(a))}}).catch(e=>{throw ko=null,e})}let ko=null;function Cy(n){return ko=ko||Sy(n),ko}/**
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
 */const Ry=new Ms(5e3,15e3),Py="__/auth/iframe",ky="emulator/auth/iframe",xy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ny(n){const e=n.config;le(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Vc(e,ky):`https://${n.config.authDomain}/${Py}`,r={apiKey:e.apiKey,appName:n.name,v:Vi},i=Dy.get(n.config.apiHost);i&&(r.eid=i);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Os(r).slice(1)}`}async function Vy(n){const e=await Cy(n),t=ln().gapi;return le(t,n,"internal-error"),e.open({where:document.body,url:Ny(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xy,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const u=un(n,"network-request-failed"),p=ln().setTimeout(()=>{a(u)},Ry.get());function _(){ln().clearTimeout(p),i(r)}r.ping(_).then(_,()=>{a(u)})}))}/**
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
 */const Oy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},My=500,Ly=600,Fy="_blank",Uy="http://localhost";class nl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jy(n,e,t,r=My,i=Ly){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const _={...Oy,width:r.toString(),height:i.toString(),top:a,left:u},v=pt().toLowerCase();t&&(p=xh(v)?Fy:t),Ph(v)&&(e=e||Uy,_.scrollbars="yes");const w=Object.entries(_).reduce((k,[B,$])=>`${k}${B}=${$},`,"");if(tm(v)&&p!=="_self")return qy(e||"",p),new nl(null);const P=window.open(e||"",p,w);le(P,n,"popup-blocked");try{P.focus()}catch{}return new nl(P)}function qy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const $y="__/auth/handler",By="emulator/auth/handler",Hy=encodeURIComponent("fac");async function rl(n,e,t,r,i,a){le(n.config.authDomain,n,"auth-domain-config-required"),le(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Vi,eventId:i};if(e instanceof $h){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Tp(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,P]of Object.entries({}))u[w]=P}if(e instanceof Fs){const w=e.getScopes().filter(P=>P!=="");w.length>0&&(u.scopes=w.join(","))}n.tenantId&&(u.tid=n.tenantId);const p=u;for(const w of Object.keys(p))p[w]===void 0&&delete p[w];const _=await n._getAppCheckToken(),v=_?`#${Hy}=${encodeURIComponent(_)}`:"";return`${zy(n)}?${Os(p).slice(1)}${v}`}function zy({config:n}){return n.emulator?Vc(n,By):`https://${n.authDomain}/${$y}`}/**
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
 */const Ja="webStorageSupport";class Wy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qh,this._completeRedirectFn=my,this._overrideRedirectResult=fy}async _openPopup(e,t,r,i){Ln(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await rl(e,t,r,uc(),i);return jy(e,a,Uc())}async _openRedirect(e,t,r,i){await this._originValidation(e);const a=await rl(e,t,r,uc(),i);return Qm(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(Ln(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Vy(e),r=new _y(e);return t.register("authEvent",i=>(le(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ja,{type:Ja},i=>{const a=i?.[0]?.[Ja];a!==void 0&&t(!!a),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Iy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Mh()||kh()||Mc()}}const Gy=Wy;var il="@firebase/auth",sl="1.11.0";/**
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
 */class Ky{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Qy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yy(n){Ai(new Or("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:p}=r.options;le(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const _={apiKey:u,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lh(n)},v=new am(r,i,a,_);return ym(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ai(new Or("auth-internal",e=>{const t=pr(e.getProvider("auth").getImmediate());return(r=>new Ky(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(il,sl,Qy(n)),sr(il,sl,"esm2020")}/**
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
 */const Xy=300,Jy=dh("authIdTokenMaxAge")||Xy;let ol=null;const Zy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Jy)return;const i=t?.token;ol!==i&&(ol=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function e_(n=_h()){const e=Dc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=mm(n,{popupRedirectResolver:Gy,persistence:[iy,Wm,Qh]}),r=dh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=Zy(a.toString());qm(t,u,()=>u(t.currentUser)),jm(t,p=>u(p))}}const i=lh("auth");return i&&_m(t,`http://${i}`),t}function t_(){return document.getElementsByTagName("head")?.[0]??document}cm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const a=un("internal-error");a.customData=i,t(a)},r.type="text/javascript",r.charset="UTF-8",t_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Yy("Browser");var al=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var or,nd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(l,C){function S(){}S.prototype=C.prototype,l.D=C.prototype,l.prototype=new S,l.prototype.constructor=l,l.C=function(N,V,M){for(var A=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)A[gt-2]=arguments[gt];return C.prototype[V].apply(N,A)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(l,C,S){S||(S=0);var N=Array(16);if(typeof C=="string")for(var V=0;16>V;++V)N[V]=C.charCodeAt(S++)|C.charCodeAt(S++)<<8|C.charCodeAt(S++)<<16|C.charCodeAt(S++)<<24;else for(V=0;16>V;++V)N[V]=C[S++]|C[S++]<<8|C[S++]<<16|C[S++]<<24;C=l.g[0],S=l.g[1],V=l.g[2];var M=l.g[3],A=C+(M^S&(V^M))+N[0]+3614090360&4294967295;C=S+(A<<7&4294967295|A>>>25),A=M+(V^C&(S^V))+N[1]+3905402710&4294967295,M=C+(A<<12&4294967295|A>>>20),A=V+(S^M&(C^S))+N[2]+606105819&4294967295,V=M+(A<<17&4294967295|A>>>15),A=S+(C^V&(M^C))+N[3]+3250441966&4294967295,S=V+(A<<22&4294967295|A>>>10),A=C+(M^S&(V^M))+N[4]+4118548399&4294967295,C=S+(A<<7&4294967295|A>>>25),A=M+(V^C&(S^V))+N[5]+1200080426&4294967295,M=C+(A<<12&4294967295|A>>>20),A=V+(S^M&(C^S))+N[6]+2821735955&4294967295,V=M+(A<<17&4294967295|A>>>15),A=S+(C^V&(M^C))+N[7]+4249261313&4294967295,S=V+(A<<22&4294967295|A>>>10),A=C+(M^S&(V^M))+N[8]+1770035416&4294967295,C=S+(A<<7&4294967295|A>>>25),A=M+(V^C&(S^V))+N[9]+2336552879&4294967295,M=C+(A<<12&4294967295|A>>>20),A=V+(S^M&(C^S))+N[10]+4294925233&4294967295,V=M+(A<<17&4294967295|A>>>15),A=S+(C^V&(M^C))+N[11]+2304563134&4294967295,S=V+(A<<22&4294967295|A>>>10),A=C+(M^S&(V^M))+N[12]+1804603682&4294967295,C=S+(A<<7&4294967295|A>>>25),A=M+(V^C&(S^V))+N[13]+4254626195&4294967295,M=C+(A<<12&4294967295|A>>>20),A=V+(S^M&(C^S))+N[14]+2792965006&4294967295,V=M+(A<<17&4294967295|A>>>15),A=S+(C^V&(M^C))+N[15]+1236535329&4294967295,S=V+(A<<22&4294967295|A>>>10),A=C+(V^M&(S^V))+N[1]+4129170786&4294967295,C=S+(A<<5&4294967295|A>>>27),A=M+(S^V&(C^S))+N[6]+3225465664&4294967295,M=C+(A<<9&4294967295|A>>>23),A=V+(C^S&(M^C))+N[11]+643717713&4294967295,V=M+(A<<14&4294967295|A>>>18),A=S+(M^C&(V^M))+N[0]+3921069994&4294967295,S=V+(A<<20&4294967295|A>>>12),A=C+(V^M&(S^V))+N[5]+3593408605&4294967295,C=S+(A<<5&4294967295|A>>>27),A=M+(S^V&(C^S))+N[10]+38016083&4294967295,M=C+(A<<9&4294967295|A>>>23),A=V+(C^S&(M^C))+N[15]+3634488961&4294967295,V=M+(A<<14&4294967295|A>>>18),A=S+(M^C&(V^M))+N[4]+3889429448&4294967295,S=V+(A<<20&4294967295|A>>>12),A=C+(V^M&(S^V))+N[9]+568446438&4294967295,C=S+(A<<5&4294967295|A>>>27),A=M+(S^V&(C^S))+N[14]+3275163606&4294967295,M=C+(A<<9&4294967295|A>>>23),A=V+(C^S&(M^C))+N[3]+4107603335&4294967295,V=M+(A<<14&4294967295|A>>>18),A=S+(M^C&(V^M))+N[8]+1163531501&4294967295,S=V+(A<<20&4294967295|A>>>12),A=C+(V^M&(S^V))+N[13]+2850285829&4294967295,C=S+(A<<5&4294967295|A>>>27),A=M+(S^V&(C^S))+N[2]+4243563512&4294967295,M=C+(A<<9&4294967295|A>>>23),A=V+(C^S&(M^C))+N[7]+1735328473&4294967295,V=M+(A<<14&4294967295|A>>>18),A=S+(M^C&(V^M))+N[12]+2368359562&4294967295,S=V+(A<<20&4294967295|A>>>12),A=C+(S^V^M)+N[5]+4294588738&4294967295,C=S+(A<<4&4294967295|A>>>28),A=M+(C^S^V)+N[8]+2272392833&4294967295,M=C+(A<<11&4294967295|A>>>21),A=V+(M^C^S)+N[11]+1839030562&4294967295,V=M+(A<<16&4294967295|A>>>16),A=S+(V^M^C)+N[14]+4259657740&4294967295,S=V+(A<<23&4294967295|A>>>9),A=C+(S^V^M)+N[1]+2763975236&4294967295,C=S+(A<<4&4294967295|A>>>28),A=M+(C^S^V)+N[4]+1272893353&4294967295,M=C+(A<<11&4294967295|A>>>21),A=V+(M^C^S)+N[7]+4139469664&4294967295,V=M+(A<<16&4294967295|A>>>16),A=S+(V^M^C)+N[10]+3200236656&4294967295,S=V+(A<<23&4294967295|A>>>9),A=C+(S^V^M)+N[13]+681279174&4294967295,C=S+(A<<4&4294967295|A>>>28),A=M+(C^S^V)+N[0]+3936430074&4294967295,M=C+(A<<11&4294967295|A>>>21),A=V+(M^C^S)+N[3]+3572445317&4294967295,V=M+(A<<16&4294967295|A>>>16),A=S+(V^M^C)+N[6]+76029189&4294967295,S=V+(A<<23&4294967295|A>>>9),A=C+(S^V^M)+N[9]+3654602809&4294967295,C=S+(A<<4&4294967295|A>>>28),A=M+(C^S^V)+N[12]+3873151461&4294967295,M=C+(A<<11&4294967295|A>>>21),A=V+(M^C^S)+N[15]+530742520&4294967295,V=M+(A<<16&4294967295|A>>>16),A=S+(V^M^C)+N[2]+3299628645&4294967295,S=V+(A<<23&4294967295|A>>>9),A=C+(V^(S|~M))+N[0]+4096336452&4294967295,C=S+(A<<6&4294967295|A>>>26),A=M+(S^(C|~V))+N[7]+1126891415&4294967295,M=C+(A<<10&4294967295|A>>>22),A=V+(C^(M|~S))+N[14]+2878612391&4294967295,V=M+(A<<15&4294967295|A>>>17),A=S+(M^(V|~C))+N[5]+4237533241&4294967295,S=V+(A<<21&4294967295|A>>>11),A=C+(V^(S|~M))+N[12]+1700485571&4294967295,C=S+(A<<6&4294967295|A>>>26),A=M+(S^(C|~V))+N[3]+2399980690&4294967295,M=C+(A<<10&4294967295|A>>>22),A=V+(C^(M|~S))+N[10]+4293915773&4294967295,V=M+(A<<15&4294967295|A>>>17),A=S+(M^(V|~C))+N[1]+2240044497&4294967295,S=V+(A<<21&4294967295|A>>>11),A=C+(V^(S|~M))+N[8]+1873313359&4294967295,C=S+(A<<6&4294967295|A>>>26),A=M+(S^(C|~V))+N[15]+4264355552&4294967295,M=C+(A<<10&4294967295|A>>>22),A=V+(C^(M|~S))+N[6]+2734768916&4294967295,V=M+(A<<15&4294967295|A>>>17),A=S+(M^(V|~C))+N[13]+1309151649&4294967295,S=V+(A<<21&4294967295|A>>>11),A=C+(V^(S|~M))+N[4]+4149444226&4294967295,C=S+(A<<6&4294967295|A>>>26),A=M+(S^(C|~V))+N[11]+3174756917&4294967295,M=C+(A<<10&4294967295|A>>>22),A=V+(C^(M|~S))+N[2]+718787259&4294967295,V=M+(A<<15&4294967295|A>>>17),A=S+(M^(V|~C))+N[9]+3951481745&4294967295,l.g[0]=l.g[0]+C&4294967295,l.g[1]=l.g[1]+(V+(A<<21&4294967295|A>>>11))&4294967295,l.g[2]=l.g[2]+V&4294967295,l.g[3]=l.g[3]+M&4294967295}r.prototype.u=function(l,C){C===void 0&&(C=l.length);for(var S=C-this.blockSize,N=this.B,V=this.h,M=0;M<C;){if(V==0)for(;M<=S;)i(this,l,M),M+=this.blockSize;if(typeof l=="string"){for(;M<C;)if(N[V++]=l.charCodeAt(M++),V==this.blockSize){i(this,N),V=0;break}}else for(;M<C;)if(N[V++]=l[M++],V==this.blockSize){i(this,N),V=0;break}}this.h=V,this.o+=C},r.prototype.v=function(){var l=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);l[0]=128;for(var C=1;C<l.length-8;++C)l[C]=0;var S=8*this.o;for(C=l.length-8;C<l.length;++C)l[C]=S&255,S/=256;for(this.u(l),l=Array(16),C=S=0;4>C;++C)for(var N=0;32>N;N+=8)l[S++]=this.g[C]>>>N&255;return l};function a(l,C){var S=p;return Object.prototype.hasOwnProperty.call(S,l)?S[l]:S[l]=C(l)}function u(l,C){this.h=C;for(var S=[],N=!0,V=l.length-1;0<=V;V--){var M=l[V]|0;N&&M==C||(S[V]=M,N=!1)}this.g=S}var p={};function _(l){return-128<=l&&128>l?a(l,function(C){return new u([C|0],0>C?-1:0)}):new u([l|0],0>l?-1:0)}function v(l){if(isNaN(l)||!isFinite(l))return P;if(0>l)return J(v(-l));for(var C=[],S=1,N=0;l>=S;N++)C[N]=l/S|0,S*=4294967296;return new u(C,0)}function w(l,C){if(l.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(l.charAt(0)=="-")return J(w(l.substring(1),C));if(0<=l.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=v(Math.pow(C,8)),N=P,V=0;V<l.length;V+=8){var M=Math.min(8,l.length-V),A=parseInt(l.substring(V,V+M),C);8>M?(M=v(Math.pow(C,M)),N=N.j(M).add(v(A))):(N=N.j(S),N=N.add(v(A)))}return N}var P=_(0),k=_(1),B=_(16777216);n=u.prototype,n.m=function(){if(G(this))return-J(this).m();for(var l=0,C=1,S=0;S<this.g.length;S++){var N=this.i(S);l+=(0<=N?N:4294967296+N)*C,C*=4294967296}return l},n.toString=function(l){if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if($(this))return"0";if(G(this))return"-"+J(this).toString(l);for(var C=v(Math.pow(l,6)),S=this,N="";;){var V=Ne(S,C).g;S=Z(S,V.j(C));var M=((0<S.g.length?S.g[0]:S.h)>>>0).toString(l);if(S=V,$(S))return M+N;for(;6>M.length;)M="0"+M;N=M+N}},n.i=function(l){return 0>l?0:l<this.g.length?this.g[l]:this.h};function $(l){if(l.h!=0)return!1;for(var C=0;C<l.g.length;C++)if(l.g[C]!=0)return!1;return!0}function G(l){return l.h==-1}n.l=function(l){return l=Z(this,l),G(l)?-1:$(l)?0:1};function J(l){for(var C=l.g.length,S=[],N=0;N<C;N++)S[N]=~l.g[N];return new u(S,~l.h).add(k)}n.abs=function(){return G(this)?J(this):this},n.add=function(l){for(var C=Math.max(this.g.length,l.g.length),S=[],N=0,V=0;V<=C;V++){var M=N+(this.i(V)&65535)+(l.i(V)&65535),A=(M>>>16)+(this.i(V)>>>16)+(l.i(V)>>>16);N=A>>>16,M&=65535,A&=65535,S[V]=A<<16|M}return new u(S,S[S.length-1]&-2147483648?-1:0)};function Z(l,C){return l.add(J(C))}n.j=function(l){if($(this)||$(l))return P;if(G(this))return G(l)?J(this).j(J(l)):J(J(this).j(l));if(G(l))return J(this.j(J(l)));if(0>this.l(B)&&0>l.l(B))return v(this.m()*l.m());for(var C=this.g.length+l.g.length,S=[],N=0;N<2*C;N++)S[N]=0;for(N=0;N<this.g.length;N++)for(var V=0;V<l.g.length;V++){var M=this.i(N)>>>16,A=this.i(N)&65535,gt=l.i(V)>>>16,yr=l.i(V)&65535;S[2*N+2*V]+=A*yr,ye(S,2*N+2*V),S[2*N+2*V+1]+=M*yr,ye(S,2*N+2*V+1),S[2*N+2*V+1]+=A*gt,ye(S,2*N+2*V+1),S[2*N+2*V+2]+=M*gt,ye(S,2*N+2*V+2)}for(N=0;N<C;N++)S[N]=S[2*N+1]<<16|S[2*N];for(N=C;N<2*C;N++)S[N]=0;return new u(S,0)};function ye(l,C){for(;(l[C]&65535)!=l[C];)l[C+1]+=l[C]>>>16,l[C]&=65535,C++}function _e(l,C){this.g=l,this.h=C}function Ne(l,C){if($(C))throw Error("division by zero");if($(l))return new _e(P,P);if(G(l))return C=Ne(J(l),C),new _e(J(C.g),J(C.h));if(G(C))return C=Ne(l,J(C)),new _e(J(C.g),C.h);if(30<l.g.length){if(G(l)||G(C))throw Error("slowDivide_ only works with positive integers.");for(var S=k,N=C;0>=N.l(l);)S=wt(S),N=wt(N);var V=We(S,1),M=We(N,1);for(N=We(N,2),S=We(S,2);!$(N);){var A=M.add(N);0>=A.l(l)&&(V=V.add(S),M=A),N=We(N,1),S=We(S,1)}return C=Z(l,V.j(C)),new _e(V,C)}for(V=P;0<=l.l(C);){for(S=Math.max(1,Math.floor(l.m()/C.m())),N=Math.ceil(Math.log(S)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),M=v(S),A=M.j(C);G(A)||0<A.l(l);)S-=N,M=v(S),A=M.j(C);$(M)&&(M=k),V=V.add(M),l=Z(l,A)}return new _e(V,l)}n.A=function(l){return Ne(this,l).h},n.and=function(l){for(var C=Math.max(this.g.length,l.g.length),S=[],N=0;N<C;N++)S[N]=this.i(N)&l.i(N);return new u(S,this.h&l.h)},n.or=function(l){for(var C=Math.max(this.g.length,l.g.length),S=[],N=0;N<C;N++)S[N]=this.i(N)|l.i(N);return new u(S,this.h|l.h)},n.xor=function(l){for(var C=Math.max(this.g.length,l.g.length),S=[],N=0;N<C;N++)S[N]=this.i(N)^l.i(N);return new u(S,this.h^l.h)};function wt(l){for(var C=l.g.length+1,S=[],N=0;N<C;N++)S[N]=l.i(N)<<1|l.i(N-1)>>>31;return new u(S,l.h)}function We(l,C){var S=C>>5;C%=32;for(var N=l.g.length-S,V=[],M=0;M<N;M++)V[M]=0<C?l.i(M+S)>>>C|l.i(M+S+1)<<32-C:l.i(M+S);return new u(V,l.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,nd=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=v,u.fromString=w,or=u}).apply(typeof al<"u"?al:typeof self<"u"?self:typeof window<"u"?window:{});var To=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rd,us,id,xo,dc,sd,od,ad;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,d,g){return o==Array.prototype||o==Object.prototype||(o[d]=g.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof To=="object"&&To];for(var d=0;d<o.length;++d){var g=o[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=t(this);function i(o,d){if(d)e:{var g=r;o=o.split(".");for(var T=0;T<o.length-1;T++){var O=o[T];if(!(O in g))break e;g=g[O]}o=o[o.length-1],T=g[o],d=d(T),d!=T&&d!=null&&e(g,o,{configurable:!0,writable:!0,value:d})}}function a(o,d){o instanceof String&&(o+="");var g=0,T=!1,O={next:function(){if(!T&&g<o.length){var U=g++;return{value:d(U,o[U]),done:!1}}return T=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(o){return o||function(){return a(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},p=this||self;function _(o){var d=typeof o;return d=d!="object"?d:o?Array.isArray(o)?"array":d:"null",d=="array"||d=="object"&&typeof o.length=="number"}function v(o){var d=typeof o;return d=="object"&&o!=null||d=="function"}function w(o,d,g){return o.call.apply(o.bind,arguments)}function P(o,d,g){if(!o)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,T),o.apply(d,O)}}return function(){return o.apply(d,arguments)}}function k(o,d,g){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:P,k.apply(null,arguments)}function B(o,d){var g=Array.prototype.slice.call(arguments,1);return function(){var T=g.slice();return T.push.apply(T,arguments),o.apply(this,T)}}function $(o,d){function g(){}g.prototype=d.prototype,o.aa=d.prototype,o.prototype=new g,o.prototype.constructor=o,o.Qb=function(T,O,U){for(var X=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)X[xe-2]=arguments[xe];return d.prototype[O].apply(T,X)}}function G(o){const d=o.length;if(0<d){const g=Array(d);for(let T=0;T<d;T++)g[T]=o[T];return g}return[]}function J(o,d){for(let g=1;g<arguments.length;g++){const T=arguments[g];if(_(T)){const O=o.length||0,U=T.length||0;o.length=O+U;for(let X=0;X<U;X++)o[O+X]=T[X]}else o.push(T)}}class Z{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function ye(o){return/^[\s\xa0]*$/.test(o)}function _e(){var o=p.navigator;return o&&(o=o.userAgent)?o:""}function Ne(o){return Ne[" "](o),o}Ne[" "]=function(){};var wt=_e().indexOf("Gecko")!=-1&&!(_e().toLowerCase().indexOf("webkit")!=-1&&_e().indexOf("Edge")==-1)&&!(_e().indexOf("Trident")!=-1||_e().indexOf("MSIE")!=-1)&&_e().indexOf("Edge")==-1;function We(o,d,g){for(const T in o)d.call(g,o[T],T,o)}function l(o,d){for(const g in o)d.call(void 0,o[g],g,o)}function C(o){const d={};for(const g in o)d[g]=o[g];return d}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(o,d){let g,T;for(let O=1;O<arguments.length;O++){T=arguments[O];for(g in T)o[g]=T[g];for(let U=0;U<S.length;U++)g=S[U],Object.prototype.hasOwnProperty.call(T,g)&&(o[g]=T[g])}}function V(o){var d=1;o=o.split(":");const g=[];for(;0<d&&o.length;)g.push(o.shift()),d--;return o.length&&g.push(o.join(":")),g}function M(o){p.setTimeout(()=>{throw o},0)}function A(){var o=Xt;let d=null;return o.g&&(d=o.g,o.g=o.g.next,o.g||(o.h=null),d.next=null),d}class gt{constructor(){this.h=this.g=null}add(d,g){const T=yr.get();T.set(d,g),this.h?this.h.next=T:this.g=T,this.h=T}}var yr=new Z(()=>new Ca,o=>o.reset());class Ca{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let mt,_n=!1,Xt=new gt,$i=()=>{const o=p.Promise.resolve(void 0);mt=()=>{o.then(Ks)}};var Ks=()=>{for(var o;o=A();){try{o.h.call(o.g)}catch(g){M(g)}var d=yr;d.j(o),100>d.h&&(d.h++,o.next=d.g,d.g=o)}_n=!1};function Bt(){this.s=this.s,this.C=this.C}Bt.prototype.s=!1,Bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ge(o,d){this.type=o,this.g=this.target=d,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var Qs=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var o=!1,d=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const g=()=>{};p.addEventListener("test",g,d),p.removeEventListener("test",g,d)}catch{}return o})();function _r(o,d){if(Ge.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var g=this.type=o.type,T=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=d,d=o.relatedTarget){if(wt){e:{try{Ne(d.nodeName);var O=!0;break e}catch{}O=!1}O||(d=null)}}else g=="mouseover"?d=o.fromElement:g=="mouseout"&&(d=o.toElement);this.relatedTarget=d,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ra[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&_r.aa.h.call(this)}}$(_r,Ge);var Ra={2:"touch",3:"pen",4:"mouse"};_r.prototype.h=function(){_r.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Br="closure_listenable_"+(1e6*Math.random()|0),Pa=0;function Ys(o,d,g,T,O){this.listener=o,this.proxy=null,this.src=d,this.type=g,this.capture=!!T,this.ha=O,this.key=++Pa,this.da=this.fa=!1}function yt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Hr(o){this.src=o,this.g={},this.h=0}Hr.prototype.add=function(o,d,g,T,O){var U=o.toString();o=this.g[U],o||(o=this.g[U]=[],this.h++);var X=$n(o,d,T,O);return-1<X?(d=o[X],g||(d.fa=!1)):(d=new Ys(d,this.src,U,!!T,O),d.fa=g,o.push(d)),d};function Jt(o,d){var g=d.type;if(g in o.g){var T=o.g[g],O=Array.prototype.indexOf.call(T,d,void 0),U;(U=0<=O)&&Array.prototype.splice.call(T,O,1),U&&(yt(d),o.g[g].length==0&&(delete o.g[g],o.h--))}}function $n(o,d,g,T){for(var O=0;O<o.length;++O){var U=o[O];if(!U.da&&U.listener==d&&U.capture==!!g&&U.ha==T)return O}return-1}var zr="closure_lm_"+(1e6*Math.random()|0),Bi={};function Wr(o,d,g,T,O){if(Array.isArray(d)){for(var U=0;U<d.length;U++)Wr(o,d[U],g,T,O);return null}return g=se(g),o&&o[Br]?o.K(d,g,v(T)?!!T.capture:!1,O):Gr(o,d,g,!1,T,O)}function Gr(o,d,g,T,O,U){if(!d)throw Error("Invalid event type");var X=v(O)?!!O.capture:!!O,xe=vn(o);if(xe||(o[zr]=xe=new Hr(o)),g=xe.add(d,g,T,X,U),g.proxy)return g;if(T=Ht(),g.proxy=T,T.src=o,T.listener=g,o.addEventListener)Qs||(O=X),O===void 0&&(O=!1),o.addEventListener(d.toString(),T,O);else if(o.attachEvent)o.attachEvent(Js(d.toString()),T);else if(o.addListener&&o.removeListener)o.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Ht(){function o(g){return d.call(o.src,o.listener,g)}const d=Dt;return o}function Xs(o,d,g,T,O){if(Array.isArray(d))for(var U=0;U<d.length;U++)Xs(o,d[U],g,T,O);else T=v(T)?!!T.capture:!!T,g=se(g),o&&o[Br]?(o=o.i,d=String(d).toString(),d in o.g&&(U=o.g[d],g=$n(U,g,T,O),-1<g&&(yt(U[g]),Array.prototype.splice.call(U,g,1),U.length==0&&(delete o.g[d],o.h--)))):o&&(o=vn(o))&&(d=o.g[d.toString()],o=-1,d&&(o=$n(d,g,T,O)),(g=-1<o?d[o]:null)&&Hi(g))}function Hi(o){if(typeof o!="number"&&o&&!o.da){var d=o.src;if(d&&d[Br])Jt(d.i,o);else{var g=o.type,T=o.proxy;d.removeEventListener?d.removeEventListener(g,T,o.capture):d.detachEvent?d.detachEvent(Js(g),T):d.addListener&&d.removeListener&&d.removeListener(T),(g=vn(d))?(Jt(g,o),g.h==0&&(g.src=null,d[zr]=null)):yt(o)}}}function Js(o){return o in Bi?Bi[o]:Bi[o]="on"+o}function Dt(o,d){if(o.da)o=!0;else{d=new _r(d,this);var g=o.listener,T=o.ha||o.src;o.fa&&Hi(o),o=g.call(T,d)}return o}function vn(o){return o=o[zr],o instanceof Hr?o:null}var En="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(o){return typeof o=="function"?o:(o[En]||(o[En]=function(d){return o.handleEvent(d)}),o[En])}function ke(){Bt.call(this),this.i=new Hr(this),this.M=this,this.F=null}$(ke,Bt),ke.prototype[Br]=!0,ke.prototype.removeEventListener=function(o,d,g,T){Xs(this,o,d,g,T)};function st(o,d){var g,T=o.F;if(T)for(g=[];T;T=T.F)g.push(T);if(o=o.M,T=d.type||d,typeof d=="string")d=new Ge(d,o);else if(d instanceof Ge)d.target=d.target||o;else{var O=d;d=new Ge(T,o),N(d,O)}if(O=!0,g)for(var U=g.length-1;0<=U;U--){var X=d.g=g[U];O=Kr(X,T,!0,d)&&O}if(X=d.g=o,O=Kr(X,T,!0,d)&&O,O=Kr(X,T,!1,d)&&O,g)for(U=0;U<g.length;U++)X=d.g=g[U],O=Kr(X,T,!1,d)&&O}ke.prototype.N=function(){if(ke.aa.N.call(this),this.i){var o=this.i,d;for(d in o.g){for(var g=o.g[d],T=0;T<g.length;T++)yt(g[T]);delete o.g[d],o.h--}}this.F=null},ke.prototype.K=function(o,d,g,T){return this.i.add(String(o),d,!1,g,T)},ke.prototype.L=function(o,d,g,T){return this.i.add(String(o),d,!0,g,T)};function Kr(o,d,g,T){if(d=o.i.g[String(d)],!d)return!0;d=d.concat();for(var O=!0,U=0;U<d.length;++U){var X=d[U];if(X&&!X.da&&X.capture==g){var xe=X.listener,Oe=X.ha||X.src;X.fa&&Jt(o.i,X),O=xe.call(Oe,T)!==!1&&O}}return O&&!T.defaultPrevented}function Zs(o,d,g){if(typeof o=="function")g&&(o=k(o,g));else if(o&&typeof o.handleEvent=="function")o=k(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:p.setTimeout(o,d||0)}function zi(o){o.g=Zs(()=>{o.g=null,o.i&&(o.i=!1,zi(o))},o.l);const d=o.h;o.h=null,o.m.apply(null,d)}class eo extends Bt{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:zi(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zt(o){Bt.call(this),this.h=o,this.g={}}$(zt,Bt);var Nt=[];function Zt(o){We(o.g,function(d,g){this.g.hasOwnProperty(g)&&Hi(d)},o),o.g={}}zt.prototype.N=function(){zt.aa.N.call(this),Zt(this)},zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var en=p.JSON.stringify,ka=p.JSON.parse,Qr=class{stringify(o){return p.JSON.stringify(o,void 0)}parse(o){return p.JSON.parse(o,void 0)}};function Yr(){}Yr.prototype.h=null;function Wi(o){return o.h||(o.h=o.i())}function to(){}var Vt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Tn(){Ge.call(this,"d")}$(Tn,Ge);function Xr(){Ge.call(this,"c")}$(Xr,Ge);var tn={},_t=null;function Ze(){return _t=_t||new ke}tn.La="serverreachability";function Jr(o){Ge.call(this,tn.La,o)}$(Jr,Ge);function vr(o){const d=Ze();st(d,new Jr(d))}tn.STAT_EVENT="statevent";function Gi(o,d){Ge.call(this,tn.STAT_EVENT,o),this.stat=d}$(Gi,Ge);function tt(o){const d=Ze();st(d,new Gi(d,o))}tn.Ma="timingevent";function wn(o,d){Ge.call(this,tn.Ma,o),this.size=d}$(wn,Ge);function Ot(o,d){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){o()},d)}function In(){this.g=!0}In.prototype.xa=function(){this.g=!1};function Zr(o,d,g,T,O,U){o.info(function(){if(o.g)if(U)for(var X="",xe=U.split("&"),Oe=0;Oe<xe.length;Oe++){var ve=xe[Oe].split("=");if(1<ve.length){var nt=ve[0];ve=ve[1];var rt=nt.split("_");X=2<=rt.length&&rt[1]=="type"?X+(nt+"="+ve+"&"):X+(nt+"=redacted&")}}else X=null;else X=U;return"XMLHTTP REQ ("+T+") [attempt "+O+"]: "+d+`
`+g+`
`+X})}function xa(o,d,g,T,O,U,X){o.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+O+"]: "+d+`
`+g+`
`+U+" "+X})}function Bn(o,d,g,T){o.info(function(){return"XMLHTTP TEXT ("+d+"): "+no(o,g)+(T?" "+T:"")})}function Da(o,d){o.info(function(){return"TIMEOUT: "+d})}In.prototype.info=function(){};function no(o,d){if(!o.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(o=0;o<g.length;o++)if(Array.isArray(g[o])){var T=g[o];if(!(2>T.length)){var O=T[1];if(Array.isArray(O)&&!(1>O.length)){var U=O[0];if(U!="noop"&&U!="stop"&&U!="close")for(var X=1;X<O.length;X++)O[X]=""}}}}return en(g)}catch{return d}}var ei={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ro={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ti;function ni(){}$(ni,Yr),ni.prototype.g=function(){return new XMLHttpRequest},ni.prototype.i=function(){return{}},ti=new ni;function vt(o,d,g,T){this.j=o,this.i=d,this.l=g,this.R=T||1,this.U=new zt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ki}function Ki(){this.i=null,this.g="",this.h=!1}var ri={},Er={};function Hn(o,d,g){o.L=1,o.v=nn(Lt(d)),o.m=g,o.P=!0,Qi(o,null)}function Qi(o,d){o.F=Date.now(),wr(o),o.A=Lt(o.v);var g=o.A,T=o.R;Array.isArray(T)||(T=[String(T)]),ts(g.i,"t",T),o.C=0,g=o.j.J,o.h=new Ki,o.g=Pt(o.j,g?d:null,!o.m),0<o.O&&(o.M=new eo(k(o.Y,o,o.g),o.O)),d=o.U,g=o.g,T=o.ca;var O="readystatechange";Array.isArray(O)||(O&&(Nt[0]=O.toString()),O=Nt);for(var U=0;U<O.length;U++){var X=Wr(g,O[U],T||d.handleEvent,!1,d.h||d);if(!X)break;d.g[X.key]=X}d=o.H?C(o.H):{},o.m?(o.u||(o.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,d)):(o.u="GET",o.g.ea(o.A,o.u,null,d)),vr(),Zr(o.i,o.u,o.A,o.l,o.R,o.m)}vt.prototype.ca=function(o){o=o.target;const d=this.M;d&&Rt(o)==3?d.j():this.Y(o)},vt.prototype.Y=function(o){try{if(o==this.g)e:{const rt=Rt(this.g);var d=this.g.Ba();const Kn=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||mo(this.g)))){this.J||rt!=4||d==7||(d==8||0>=Kn?vr(3):vr(2)),ii(this);var g=this.g.Z();this.X=g;t:if(io(this)){var T=mo(this.g);o="";var O=T.length,U=Rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bn(this),zn(this);var X="";break t}this.h.i=new p.TextDecoder}for(d=0;d<O;d++)this.h.h=!0,o+=this.h.i.decode(T[d],{stream:!(U&&d==O-1)});T.length=0,this.h.g+=o,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=g==200,xa(this.i,this.u,this.A,this.l,this.R,rt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,Oe=this.g;if((xe=Oe.g?Oe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ye(xe)){var ve=xe;break t}}ve=null}if(g=ve)Bn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ir(this,g);else{this.o=!1,this.s=3,tt(12),bn(this),zn(this);break e}}if(this.P){g=!0;let Te;for(;!this.J&&this.C<X.length;)if(Te=Tr(this,X),Te==Er){rt==4&&(this.s=4,tt(14),g=!1),Bn(this.i,this.l,null,"[Incomplete Response]");break}else if(Te==ri){this.s=4,tt(15),Bn(this.i,this.l,X,"[Invalid Chunk]"),g=!1;break}else Bn(this.i,this.l,Te,null),Ir(this,Te);if(io(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||X.length!=0||this.h.h||(this.s=1,tt(16),g=!1),this.o=this.o&&g,!g)Bn(this.i,this.l,X,"[Invalid Chunked Response]"),bn(this),zn(this);else if(0<X.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),H(nt),nt.M=!0,tt(11))}}else Bn(this.i,this.l,X,null),Ir(this,X);rt==4&&bn(this),this.o&&!this.J&&(rt==4?ue(this.j,this):(this.o=!1,wr(this)))}else ja(this.g),g==400&&0<X.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),bn(this),zn(this)}}}catch{}finally{}};function io(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Tr(o,d){var g=o.C,T=d.indexOf(`
`,g);return T==-1?Er:(g=Number(d.substring(g,T)),isNaN(g)?ri:(T+=1,T+g>d.length?Er:(d=d.slice(T,T+g),o.C=T+g,d)))}vt.prototype.cancel=function(){this.J=!0,bn(this)};function wr(o){o.S=Date.now()+o.I,Yi(o,o.I)}function Yi(o,d){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ot(k(o.ba,o),d)}function ii(o){o.B&&(p.clearTimeout(o.B),o.B=null)}vt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Da(this.i,this.A),this.L!=2&&(vr(),tt(17)),bn(this),this.s=2,zn(this)):Yi(this,this.S-o)};function zn(o){o.j.G==0||o.J||ue(o.j,o)}function bn(o){ii(o);var d=o.M;d&&typeof d.ma=="function"&&d.ma(),o.M=null,Zt(o.U),o.g&&(d=o.g,o.g=null,d.abort(),d.ma())}function Ir(o,d){try{var g=o.j;if(g.G!=0&&(g.g==o||br(g.h,o))){if(!o.K&&br(g.h,o)&&g.G==3){try{var T=g.Da.g.parse(d)}catch{T=null}if(Array.isArray(T)&&T.length==3){var O=T;if(O[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<o.F)Q(g),h(g);else break e;q(g),tt(18)}}else g.za=O[1],0<g.za-g.T&&37500>O[2]&&g.F&&g.v==0&&!g.C&&(g.C=Ot(k(g.Za,g),6e3));if(1>=Ji(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else de(g,11)}else if((o.K||g.g==o)&&Q(g),!ye(d))for(O=g.Da.g.parse(d),d=0;d<O.length;d++){let ve=O[d];if(g.T=ve[0],ve=ve[1],g.G==2)if(ve[0]=="c"){g.K=ve[1],g.ia=ve[2];const nt=ve[3];nt!=null&&(g.la=nt,g.j.info("VER="+g.la));const rt=ve[4];rt!=null&&(g.Aa=rt,g.j.info("SVER="+g.Aa));const Kn=ve[5];Kn!=null&&typeof Kn=="number"&&0<Kn&&(T=1.5*Kn,g.L=T,g.j.info("backChannelRequestTimeoutMs_="+T)),T=g;const Te=o.g;if(Te){const Pn=Te.g?Te.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pn){var U=T.h;U.g||Pn.indexOf("spdy")==-1&&Pn.indexOf("quic")==-1&&Pn.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(si(U,U.h),U.h=null))}if(T.D){const Et=Te.g?Te.g.getResponseHeader("X-HTTP-Session-Id"):null;Et&&(T.ya=Et,Ve(T.I,T.D,Et))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-o.F,g.j.info("Handshake RTT: "+g.R+"ms")),T=g;var X=o;if(T.qa=$e(T,T.J?T.ia:null,T.W),X.K){ot(T.h,X);var xe=X,Oe=T.L;Oe&&(xe.I=Oe),xe.B&&(ii(xe),wr(xe)),T.g=X}else D(T);0<g.i.length&&m(g)}else ve[0]!="stop"&&ve[0]!="close"||de(g,7);else g.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?de(g,7):c(g):ve[0]!="noop"&&g.l&&g.l.ta(ve),g.v=0)}}vr(4)}catch{}}var Na=class{constructor(o,d){this.g=o,this.map=d}};function so(o){this.l=o||10,p.PerformanceNavigationTiming?(o=p.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xi(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ji(o){return o.h?1:o.g?o.g.size:0}function br(o,d){return o.h?o.h==d:o.g?o.g.has(d):!1}function si(o,d){o.g?o.g.add(d):o.h=d}function ot(o,d){o.h&&o.h==d?o.h=null:o.g&&o.g.has(d)&&o.g.delete(d)}so.prototype.cancel=function(){if(this.i=An(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function An(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let d=o.i;for(const g of o.g.values())d=d.concat(g.D);return d}return G(o.i)}function oi(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(_(o)){for(var d=[],g=o.length,T=0;T<g;T++)d.push(o[T]);return d}d=[],g=0;for(T in o)d[g++]=o[T];return d}function Va(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(_(o)||typeof o=="string"){var d=[];o=o.length;for(var g=0;g<o;g++)d.push(g);return d}d=[],g=0;for(const T in o)d[g++]=T;return d}}}function oo(o,d){if(o.forEach&&typeof o.forEach=="function")o.forEach(d,void 0);else if(_(o)||typeof o=="string")Array.prototype.forEach.call(o,d,void 0);else for(var g=Va(o),T=oi(o),O=T.length,U=0;U<O;U++)d.call(void 0,T[U],g&&g[U],o)}var ai=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ao(o,d){if(o){o=o.split("&");for(var g=0;g<o.length;g++){var T=o[g].indexOf("="),O=null;if(0<=T){var U=o[g].substring(0,T);O=o[g].substring(T+1)}else U=o[g];d(U,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Mt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Mt){this.h=o.h,ci(this,o.j),this.o=o.o,this.g=o.g,ui(this,o.s),this.l=o.l;var d=o.i,g=new Cn;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),It(this,g),this.m=o.m}else o&&(d=String(o).match(ai))?(this.h=!1,ci(this,d[1]||"",!0),this.o=Ar(d[2]||""),this.g=Ar(d[3]||"",!0),ui(this,d[4]),this.l=Ar(d[5]||"",!0),It(this,d[6]||"",!0),this.m=Ar(d[7]||"")):(this.h=!1,this.i=new Cn(null,this.h))}Mt.prototype.toString=function(){var o=[],d=this.j;d&&o.push(Sr(d,rn,!0),":");var g=this.g;return(g||d=="file")&&(o.push("//"),(d=this.o)&&o.push(Sr(d,rn,!0),"@"),o.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&o.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&o.push("/"),o.push(Sr(g,g.charAt(0)=="/"?Oa:Zi,!0))),(g=this.i.toString())&&o.push("?",g),(g=this.m)&&o.push("#",Sr(g,co)),o.join("")};function Lt(o){return new Mt(o)}function ci(o,d,g){o.j=g?Ar(d,!0):d,o.j&&(o.j=o.j.replace(/:$/,""))}function ui(o,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);o.s=d}else o.s=null}function It(o,d,g){d instanceof Cn?(o.i=d,Ma(o.i,o.h)):(g||(d=Sr(d,Cr)),o.i=new Cn(d,o.h))}function Ve(o,d,g){o.i.set(d,g)}function nn(o){return Ve(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ar(o,d){return o?d?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Sr(o,d,g){return typeof o=="string"?(o=encodeURI(o).replace(d,Sn),g&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Sn(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var rn=/[#\/\?@]/g,Zi=/[#\?:]/g,Oa=/[#\?]/g,Cr=/[#\?@]/g,co=/#/g;function Cn(o,d){this.h=this.g=null,this.i=o||null,this.j=!!d}function Wt(o){o.g||(o.g=new Map,o.h=0,o.i&&ao(o.i,function(d,g){o.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}n=Cn.prototype,n.add=function(o,d){Wt(this),this.i=null,o=Wn(this,o);var g=this.g.get(o);return g||this.g.set(o,g=[]),g.push(d),this.h+=1,this};function es(o,d){Wt(o),d=Wn(o,d),o.g.has(d)&&(o.i=null,o.h-=o.g.get(d).length,o.g.delete(d))}function uo(o,d){return Wt(o),d=Wn(o,d),o.g.has(d)}n.forEach=function(o,d){Wt(this),this.g.forEach(function(g,T){g.forEach(function(O){o.call(d,O,T,this)},this)},this)},n.na=function(){Wt(this);const o=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let T=0;T<d.length;T++){const O=o[T];for(let U=0;U<O.length;U++)g.push(d[T])}return g},n.V=function(o){Wt(this);let d=[];if(typeof o=="string")uo(this,o)&&(d=d.concat(this.g.get(Wn(this,o))));else{o=Array.from(this.g.values());for(let g=0;g<o.length;g++)d=d.concat(o[g])}return d},n.set=function(o,d){return Wt(this),this.i=null,o=Wn(this,o),uo(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[d]),this.h+=1,this},n.get=function(o,d){return o?(o=this.V(o),0<o.length?String(o[0]):d):d};function ts(o,d,g){es(o,d),0<g.length&&(o.i=null,o.g.set(Wn(o,d),G(g)),o.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var T=d[g];const U=encodeURIComponent(String(T)),X=this.V(T);for(T=0;T<X.length;T++){var O=U;X[T]!==""&&(O+="="+encodeURIComponent(String(X[T]))),o.push(O)}}return this.i=o.join("&")};function Wn(o,d){return d=String(d),o.j&&(d=d.toLowerCase()),d}function Ma(o,d){d&&!o.j&&(Wt(o),o.i=null,o.g.forEach(function(g,T){var O=T.toLowerCase();T!=O&&(es(this,T),ts(this,O,g))},o)),o.j=d}function ns(o,d){const g=new In;if(p.Image){const T=new Image;T.onload=B(sn,g,"TestLoadImage: loaded",!0,d,T),T.onerror=B(sn,g,"TestLoadImage: error",!1,d,T),T.onabort=B(sn,g,"TestLoadImage: abort",!1,d,T),T.ontimeout=B(sn,g,"TestLoadImage: timeout",!1,d,T),p.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=o}else d(!1)}function La(o,d){const g=new In,T=new AbortController,O=setTimeout(()=>{T.abort(),sn(g,"TestPingServer: timeout",!1,d)},1e4);fetch(o,{signal:T.signal}).then(U=>{clearTimeout(O),U.ok?sn(g,"TestPingServer: ok",!0,d):sn(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),sn(g,"TestPingServer: error",!1,d)})}function sn(o,d,g,T,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),T(g)}catch{}}function Fa(){this.g=new Qr}function Ua(o,d,g){const T=g||"";try{oo(o,function(O,U){let X=O;v(O)&&(X=en(O)),d.push(T+U+"="+encodeURIComponent(X))})}catch(O){throw d.push(T+"type="+encodeURIComponent("_badmap")),O}}function li(o){this.l=o.Ub||null,this.j=o.eb||!1}$(li,Yr),li.prototype.g=function(){return new hi(this.l,this.j)},li.prototype.i=(function(o){return function(){return o}})({});function hi(o,d){ke.call(this),this.D=o,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(hi,ke),n=hi.prototype,n.open=function(o,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=d,this.readyState=1,Rn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(d.body=o),(this.D||p).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lo(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function lo(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var d=o.value?o.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!o.done}))&&(this.response=this.responseText+=d)}o.done?Gn(this):Rn(this),this.readyState==3&&lo(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Gn(this))},n.Qa=function(o){this.g&&(this.response=o,Gn(this))},n.ga=function(){this.g&&Gn(this)};function Gn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Rn(o)}n.setRequestHeader=function(o,d){this.u.append(o,d)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,o.push(g[0]+": "+g[1]),g=d.next();return o.join(`\r
`)};function Rn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function rs(o){let d="";return We(o,function(g,T){d+=T,d+=":",d+=g,d+=`\r
`}),d}function Rr(o,d,g){e:{for(T in g){var T=!1;break e}T=!0}T||(g=rs(g),typeof o=="string"?g!=null&&encodeURIComponent(String(g)):Ve(o,d,g))}function Fe(o){ke.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Fe,ke);var ho=/^https?$/i,is=["POST","PUT"];n=Fe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,d,g,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);d=d?d.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ti.g(),this.v=this.o?Wi(this.o):Wi(ti),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(d,String(o),!0),this.B=!1}catch(U){fo(this,U);return}if(o=g||"",g=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var O in T)g.set(O,T[O]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const U of T.keys())g.set(U,T.get(U));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),O=p.FormData&&o instanceof p.FormData,!(0<=Array.prototype.indexOf.call(is,d,void 0))||T||O||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,X]of g)this.g.setRequestHeader(U,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ss(this),this.u=!0,this.g.send(o),this.u=!1}catch(U){fo(this,U)}};function fo(o,d){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=d,o.m=5,po(o),on(o)}function po(o){o.A||(o.A=!0,st(o,"complete"),st(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,st(this,"complete"),st(this,"abort"),on(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Fe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?go(this):this.bb())},n.bb=function(){go(this)};function go(o){if(o.h&&typeof u<"u"&&(!o.v[1]||Rt(o)!=4||o.Z()!=2)){if(o.u&&Rt(o)==4)Zs(o.Ea,0,o);else if(st(o,"readystatechange"),Rt(o)==4){o.h=!1;try{const X=o.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var T;if(T=X===0){var O=String(o.D).match(ai)[1]||null;!O&&p.self&&p.self.location&&(O=p.self.location.protocol.slice(0,-1)),T=!ho.test(O?O.toLowerCase():"")}g=T}if(g)st(o,"complete"),st(o,"success");else{o.m=6;try{var U=2<Rt(o)?o.g.statusText:""}catch{U=""}o.l=U+" ["+o.Z()+"]",po(o)}}finally{on(o)}}}}function on(o,d){if(o.g){ss(o);const g=o.g,T=o.v[0]?()=>{}:null;o.g=null,o.v=null,d||st(o,"ready");try{g.onreadystatechange=T}catch{}}}function ss(o){o.I&&(p.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Rt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Rt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var d=this.g.responseText;return o&&d.indexOf(o)==0&&(d=d.substring(o.length)),ka(d)}};function mo(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function ja(o){const d={};o=(o.g&&2<=Rt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<o.length;T++){if(ye(o[T]))continue;var g=V(o[T]);const O=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=d[O]||[];d[O]=U,U.push(g)}l(d,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pr(o,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[o]||d}function s(o){this.Aa=0,this.i=[],this.j=new In,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Pr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Pr("baseRetryDelayMs",5e3,o),this.cb=Pr("retryDelaySeedMs",1e4,o),this.Wa=Pr("forwardChannelMaxRetries",2,o),this.wa=Pr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new so(o&&o.concurrentRequestLimit),this.Da=new Fa,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=s.prototype,n.la=8,n.G=1,n.connect=function(o,d,g,T){tt(0),this.W=o,this.H=d||{},g&&T!==void 0&&(this.H.OSID=g,this.H.OAID=T),this.F=this.X,this.I=$e(this,null,this.W),m(this)};function c(o){if(f(o),o.G==3){var d=o.U++,g=Lt(o.I);if(Ve(g,"SID",o.K),Ve(g,"RID",d),Ve(g,"TYPE","terminate"),R(o,g),d=new vt(o,o.j,d),d.L=2,d.v=nn(Lt(g)),g=!1,p.navigator&&p.navigator.sendBeacon)try{g=p.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&p.Image&&(new Image().src=d.v,g=!0),g||(d.g=Pt(d.j,null),d.g.ea(d.v)),d.F=Date.now(),wr(d)}Ke(o)}function h(o){o.g&&(H(o),o.g.cancel(),o.g=null)}function f(o){h(o),o.u&&(p.clearTimeout(o.u),o.u=null),Q(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&p.clearTimeout(o.s),o.s=null)}function m(o){if(!Xi(o.h)&&!o.s){o.s=!0;var d=o.Ga;mt||$i(),_n||(mt(),_n=!0),Xt.add(d,o),o.B=0}}function y(o,d){return Ji(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=d.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ot(k(o.Ga,o,d),we(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const O=new vt(this,this.j,o);let U=this.o;if(this.S&&(U?(U=C(U),N(U,this.S)):U=this.S),this.m!==null||this.O||(O.H=U,U=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var T=this.i[g];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(d+=T,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=b(this,O,d),g=Lt(this.I),Ve(g,"RID",o),Ve(g,"CVER",22),this.D&&Ve(g,"X-HTTP-Session-Id",this.D),R(this,g),U&&(this.O?d="headers="+encodeURIComponent(String(rs(U)))+"&"+d:this.m&&Rr(g,this.m,U)),si(this.h,O),this.Ua&&Ve(g,"TYPE","init"),this.P?(Ve(g,"$req",d),Ve(g,"SID","null"),O.T=!0,Hn(O,g,null)):Hn(O,g,d),this.G=2}}else this.G==3&&(o?E(this,o):this.i.length==0||Xi(this.h)||E(this))};function E(o,d){var g;d?g=d.l:g=o.U++;const T=Lt(o.I);Ve(T,"SID",o.K),Ve(T,"RID",g),Ve(T,"AID",o.T),R(o,T),o.m&&o.o&&Rr(T,o.m,o.o),g=new vt(o,o.j,g,o.B+1),o.m===null&&(g.H=o.o),d&&(o.i=d.D.concat(o.i)),d=b(o,g,1e3),g.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),si(o.h,g),Hn(g,T,d)}function R(o,d){o.H&&We(o.H,function(g,T){Ve(d,T,g)}),o.l&&oo({},function(g,T){Ve(d,T,g)})}function b(o,d,g){g=Math.min(o.i.length,g);var T=o.l?k(o.l.Na,o.l,o):null;e:{var O=o.i;let U=-1;for(;;){const X=["count="+g];U==-1?0<g?(U=O[0].g,X.push("ofs="+U)):U=0:X.push("ofs="+U);let xe=!0;for(let Oe=0;Oe<g;Oe++){let ve=O[Oe].g;const nt=O[Oe].map;if(ve-=U,0>ve)U=Math.max(0,O[Oe].g-100),xe=!1;else try{Ua(nt,X,"req"+ve+"_")}catch{T&&T(nt)}}if(xe){T=X.join("&");break e}}}return o=o.i.splice(0,g),d.D=o,T}function D(o){if(!o.g&&!o.u){o.Y=1;var d=o.Fa;mt||$i(),_n||(mt(),_n=!0),Xt.add(d,o),o.v=0}}function q(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ot(k(o.Fa,o),we(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,F(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ot(k(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),h(this),F(this))};function H(o){o.A!=null&&(p.clearTimeout(o.A),o.A=null)}function F(o){o.g=new vt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var d=Lt(o.qa);Ve(d,"RID","rpc"),Ve(d,"SID",o.K),Ve(d,"AID",o.T),Ve(d,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ve(d,"TO",o.ja),Ve(d,"TYPE","xmlhttp"),R(o,d),o.m&&o.o&&Rr(d,o.m,o.o),o.L&&(o.g.I=o.L);var g=o.g;o=o.ia,g.L=1,g.v=nn(Lt(d)),g.m=null,g.P=!0,Qi(g,o)}n.Za=function(){this.C!=null&&(this.C=null,h(this),q(this),tt(19))};function Q(o){o.C!=null&&(p.clearTimeout(o.C),o.C=null)}function ue(o,d){var g=null;if(o.g==d){Q(o),H(o),o.g=null;var T=2}else if(br(o.h,d))g=d.D,ot(o.h,d),T=1;else return;if(o.G!=0){if(d.o)if(T==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var O=o.B;T=Ze(),st(T,new wn(T,g)),m(o)}else D(o);else if(O=d.s,O==3||O==0&&0<d.X||!(T==1&&y(o,d)||T==2&&q(o)))switch(g&&0<g.length&&(d=o.h,d.i=d.i.concat(g)),O){case 1:de(o,5);break;case 4:de(o,10);break;case 3:de(o,6);break;default:de(o,2)}}}function we(o,d){let g=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(g*=2),g*d}function de(o,d){if(o.j.info("Error code "+d),d==2){var g=k(o.fb,o),T=o.Xa;const O=!T;T=new Mt(T||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||ci(T,"https"),nn(T),O?ns(T.toString(),g):La(T.toString(),g)}else tt(2);o.G=0,o.l&&o.l.sa(d),Ke(o),f(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function Ke(o){if(o.G=0,o.ka=[],o.l){const d=An(o.h);(d.length!=0||o.i.length!=0)&&(J(o.ka,d),J(o.ka,o.i),o.h.i.length=0,G(o.i),o.i.length=0),o.l.ra()}}function $e(o,d,g){var T=g instanceof Mt?Lt(g):new Mt(g);if(T.g!="")d&&(T.g=d+"."+T.g),ui(T,T.s);else{var O=p.location;T=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;var U=new Mt(null);T&&ci(U,T),d&&(U.g=d),O&&ui(U,O),g&&(U.l=g),T=U}return g=o.D,d=o.ya,g&&d&&Ve(T,g,d),Ve(T,"VER",o.la),R(o,T),T}function Pt(o,d,g){if(d&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=o.Ca&&!o.pa?new Fe(new li({eb:g})):new Fe(o.pa),d.Ha(o.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function kt(){}n=kt.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ee(){}Ee.prototype.g=function(o,d){return new Be(o,d)};function Be(o,d){ke.call(this),this.g=new s(d),this.l=o,this.h=d&&d.messageUrlParams||null,o=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(o?o["X-WebChannel-Content-Type"]=d.messageContentType:o={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(o?o["X-WebChannel-Client-Profile"]=d.va:o={"X-WebChannel-Client-Profile":d.va}),this.g.S=o,(o=d&&d.Sb)&&!ye(o)&&(this.g.m=o),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!ye(d)&&(this.g.D=d,o=this.h,o!==null&&d in o&&(o=this.h,d in o&&delete o[d])),this.j=new Ft(this)}$(Be,ke),Be.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Be.prototype.close=function(){c(this.g)},Be.prototype.o=function(o){var d=this.g;if(typeof o=="string"){var g={};g.__data__=o,o=g}else this.u&&(g={},g.__data__=en(o),o=g);d.i.push(new Na(d.Ya++,o)),d.G==3&&m(d)},Be.prototype.N=function(){this.g.l=null,delete this.j,c(this.g),delete this.g,Be.aa.N.call(this)};function Ae(o){Tn.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var d=o.__sm__;if(d){e:{for(const g in d){o=g;break e}o=void 0}(this.i=o)&&(o=this.i,d=d!==null&&o in d?d[o]:void 0),this.data=d}else this.data=o}$(Ae,Tn);function Ue(){Xr.call(this),this.status=1}$(Ue,Xr);function Ft(o){this.g=o}$(Ft,kt),Ft.prototype.ua=function(){st(this.g,"a")},Ft.prototype.ta=function(o){st(this.g,new Ae(o))},Ft.prototype.sa=function(o){st(this.g,new Ue)},Ft.prototype.ra=function(){st(this.g,"b")},Ee.prototype.createWebChannel=Ee.prototype.g,Be.prototype.send=Be.prototype.o,Be.prototype.open=Be.prototype.m,Be.prototype.close=Be.prototype.close,ad=function(){return new Ee},od=function(){return Ze()},sd=tn,dc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ei.NO_ERROR=0,ei.TIMEOUT=8,ei.HTTP_ERROR=6,xo=ei,ro.COMPLETE="complete",id=ro,to.EventType=Vt,Vt.OPEN="a",Vt.CLOSE="b",Vt.ERROR="c",Vt.MESSAGE="d",ke.prototype.listen=ke.prototype.K,us=to,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,rd=Fe}).apply(typeof To<"u"?To:typeof self<"u"?self:typeof window<"u"?window:{});const cl="@firebase/firestore",ul="4.9.0";/**
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
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
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
 */let Mi="12.0.0";/**
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
 */const Fr=new kc("@firebase/firestore");function pi(){return Fr.logLevel}function ie(n,...e){if(Fr.logLevel<=Se.DEBUG){const t=e.map(qc);Fr.debug(`Firestore (${Mi}): ${n}`,...t)}}function Fn(n,...e){if(Fr.logLevel<=Se.ERROR){const t=e.map(qc);Fr.error(`Firestore (${Mi}): ${n}`,...t)}}function Ci(n,...e){if(Fr.logLevel<=Se.WARN){const t=e.map(qc);Fr.warn(`Firestore (${Mi}): ${n}`,...t)}}function qc(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function he(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,cd(n,r,t)}function cd(n,e,t){let r=`FIRESTORE (${Mi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Fn(r),new Error(r)}function De(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||cd(e,i,r)}function me(n,e){return n}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends jn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class On{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class ud{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class n_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(dt.UNAUTHENTICATED)))}shutdown(){}}class r_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class i_{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){De(this.o===void 0,42304);let r=this.i;const i=_=>this.i!==r?(r=this.i,t(_)):Promise.resolve();let a=new On;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new On,e.enqueueRetryable((()=>i(this.currentUser)))};const u=()=>{const _=a;e.enqueueRetryable((async()=>{await _.promise,await i(this.currentUser)}))},p=_=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((_=>p(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?p(_):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new On)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string",31837,{l:r}),new ud(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string",2055,{h:e}),new dt(e)}}class s_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class o_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new s_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(dt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ll{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class a_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){De(this.o===void 0,3512);const r=a=>{a.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,ie("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const i=a=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>i(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ll(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(De(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ll(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function c_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class $c{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=c_(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<t&&(r+=e.charAt(i[a]%62))}return r}}function Ce(n,e){return n<e?-1:n>e?1:0}function fc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),a=e.charAt(r);if(i!==a)return Za(i)===Za(a)?Ce(i,a):Za(i)?1:-1}return Ce(n.length,e.length)}const u_=55296,l_=57343;function Za(n){const e=n.charCodeAt(0);return e>=u_&&e<=l_}function Ri(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
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
 */const hl="__name__";class cn{constructor(e,t,r){t===void 0?t=0:t>e.length&&he(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&he(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return cn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof cn?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const a=cn.compareSegments(e.get(i),t.get(i));if(a!==0)return a}return Ce(e.length,t.length)}static compareSegments(e,t){const r=cn.isNumericId(e),i=cn.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?cn.extractNumericId(e).compare(cn.extractNumericId(t)):fc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return or.fromString(e.substring(4,e.length-2))}}class Le extends cn{construct(e,t,r){return new Le(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new Le(t)}static emptyPath(){return new Le([])}}const h_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends cn{construct(e,t,r){return new ct(e,t,r)}static isValidIdentifier(e){return h_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hl}static keyField(){return new ct([hl])}static fromServerFormat(e){const t=[];let r="",i=0;const a=()=>{if(r.length===0)throw new te(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;i<e.length;){const p=e[i];if(p==="\\"){if(i+1===e.length)throw new te(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[i+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new te(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=_,i+=2}else p==="`"?(u=!u,i++):p!=="."||u?(r+=p,i++):(a(),i++)}if(a(),u)throw new te(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(t)}static emptyPath(){return new ct([])}}/**
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
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(Le.fromString(e))}static fromName(e){return new ae(Le.fromString(e).popFirst(5))}static empty(){return new ae(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new Le(e.slice()))}}/**
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
 */function ld(n,e,t){if(!t)throw new te(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function d_(n,e,t,r){if(e===!0&&r===!0)throw new te(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function dl(n){if(!ae.isDocumentKey(n))throw new te(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function fl(n){if(ae.isDocumentKey(n))throw new te(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function hd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function la(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":he(12329,{type:typeof n})}function gn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new te(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=la(n);throw new te(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n,e){const t={typeString:n};return e&&(t.value=e),t}function js(n,e){if(!hd(n))throw new te(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(i&&typeof u!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new te(W.INVALID_ARGUMENT,t);return!0}/**
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
 */const pl=-62135596800,gl=1e6;class je{static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*gl);return new je(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<pl)throw new te(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gl}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(js(e,je._jsonSchema))return new je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-pl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}je._jsonSchemaVersion="firestore/timestamp/1.0",je._jsonSchema={type:Xe("string",je._jsonSchemaVersion),seconds:Xe("number"),nanoseconds:Xe("number")};/**
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
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new je(0,0))}static max(){return new ge(new je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Is=-1;function f_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ge.fromTimestamp(r===1e9?new je(t+1,0):new je(t,r));return new cr(i,ae.empty(),e)}function p_(n){return new cr(n.readTime,n.key,Is)}class cr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new cr(ge.min(),ae.empty(),Is)}static max(){return new cr(ge.max(),ae.empty(),Is)}}function g_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ae.comparator(n.documentKey,e.documentKey),t!==0?t:Ce(n.largestBatchId,e.largestBatchId))}/**
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
 */const m_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class y_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Li(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==m_)throw n;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&he(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K(((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):K.reject(t)}static resolve(e){return new K(((t,r)=>{t(e)}))}static reject(e){return new K(((t,r)=>{r(e)}))}static waitFor(e){return new K(((t,r)=>{let i=0,a=0,u=!1;e.forEach((p=>{++i,p.next((()=>{++a,u&&a===i&&t()}),(_=>r(_)))})),u=!0,a===i&&t()}))}static or(e){let t=K.resolve(!1);for(const r of e)t=t.next((i=>i?K.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,a)=>{r.push(t.call(this,i,a))})),this.waitFor(r)}static mapArray(e,t){return new K(((r,i)=>{const a=e.length,u=new Array(a);let p=0;for(let _=0;_<a;_++){const v=_;t(e[v]).next((w=>{u[v]=w,++p,p===a&&r(u)}),(w=>i(w)))}}))}static doWhile(e,t){return new K(((r,i)=>{const a=()=>{e()===!0?t().next((()=>{a()}),i):r()};a()}))}}function __(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Fi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ha{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ha.ce=-1;/**
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
 */const Bc=-1;function da(n){return n==null}function Go(n){return n===0&&1/n==-1/0}function v_(n){return typeof n=="number"&&Number.isInteger(n)&&!Go(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const dd="";function E_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ml(e)),e=T_(n.get(t),e);return ml(e)}function T_(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const a=n.charAt(i);switch(a){case"\0":t+="";break;case dd:t+="";break;default:t+=a}}return t}function ml(n){return n+dd+""}/**
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
 */function yl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function gr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function fd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class qe{constructor(e,t){this.comparator=e,this.root=t||at.EMPTY}insert(e,t){return new qe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wo(this.root,e,this.comparator,!0)}}class wo{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=a??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,a){return new at(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw he(43730,{key:this.key,value:this.value});if(this.right.isRed())throw he(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw he(27949);return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw he(57766)}get value(){throw he(16141)}get color(){throw he(16727)}get left(){throw he(29726)}get right(){throw he(36894)}copy(e,t,r,i,a){return this}insert(e,t,r){return new at(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class et{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _l(this.data.getIterator())}getIteratorFrom(e){return new _l(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new et(this.comparator);return t.data=e,t}}class _l{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new xt([])}unionWith(e){let t=new et(ct.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new xt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ri(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class pd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new pd("Invalid base64 string: "+a):a}})(e);return new ut(t)}static fromUint8Array(e){const t=(function(i){let a="";for(let u=0;u<i.length;++u)a+=String.fromCharCode(i[u]);return a})(e);return new ut(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const w_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(n){if(De(!!n,39018),typeof n=="string"){let e=0;const t=w_.exec(n);if(De(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(n.seconds),nanos:He(n.nanos)}}function He(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function lr(n){return typeof n=="string"?ut.fromBase64String(n):ut.fromUint8Array(n)}/**
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
 */const gd="server_timestamp",md="__type__",yd="__previous_value__",_d="__local_write_time__";function Hc(n){return(n?.mapValue?.fields||{})[md]?.stringValue===gd}function fa(n){const e=n.mapValue.fields[yd];return Hc(e)?fa(e):e}function bs(n){const e=ur(n.mapValue.fields[_d].timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class I_{constructor(e,t,r,i,a,u,p,_,v,w){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=p,this.longPollingOptions=_,this.useFetchStreams=v,this.isUsingEmulator=w}}const Ko="(default)";class As{constructor(e,t){this.projectId=e,this.database=t||Ko}static empty(){return new As("","")}get isDefaultDatabase(){return this.database===Ko}isEqual(e){return e instanceof As&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vd="__type__",b_="__max__",Io={mapValue:{}},Ed="__vector__",Qo="value";function hr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Hc(n)?4:S_(n)?9007199254740991:A_(n)?10:11:he(28295,{value:n})}function mn(n,e){if(n===e)return!0;const t=hr(n);if(t!==hr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return bs(n).isEqual(bs(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const u=ur(i.timestampValue),p=ur(a.timestampValue);return u.seconds===p.seconds&&u.nanos===p.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,a){return lr(i.bytesValue).isEqual(lr(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,a){return He(i.geoPointValue.latitude)===He(a.geoPointValue.latitude)&&He(i.geoPointValue.longitude)===He(a.geoPointValue.longitude)})(n,e);case 2:return(function(i,a){if("integerValue"in i&&"integerValue"in a)return He(i.integerValue)===He(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const u=He(i.doubleValue),p=He(a.doubleValue);return u===p?Go(u)===Go(p):isNaN(u)&&isNaN(p)}return!1})(n,e);case 9:return Ri(n.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:case 11:return(function(i,a){const u=i.mapValue.fields||{},p=a.mapValue.fields||{};if(yl(u)!==yl(p))return!1;for(const _ in u)if(u.hasOwnProperty(_)&&(p[_]===void 0||!mn(u[_],p[_])))return!1;return!0})(n,e);default:return he(52216,{left:n})}}function Ss(n,e){return(n.values||[]).find((t=>mn(t,e)))!==void 0}function Pi(n,e){if(n===e)return 0;const t=hr(n),r=hr(e);if(t!==r)return Ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const p=He(a.integerValue||a.doubleValue),_=He(u.integerValue||u.doubleValue);return p<_?-1:p>_?1:p===_?0:isNaN(p)?isNaN(_)?0:-1:1})(n,e);case 3:return vl(n.timestampValue,e.timestampValue);case 4:return vl(bs(n),bs(e));case 5:return fc(n.stringValue,e.stringValue);case 6:return(function(a,u){const p=lr(a),_=lr(u);return p.compareTo(_)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const p=a.split("/"),_=u.split("/");for(let v=0;v<p.length&&v<_.length;v++){const w=Ce(p[v],_[v]);if(w!==0)return w}return Ce(p.length,_.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const p=Ce(He(a.latitude),He(u.latitude));return p!==0?p:Ce(He(a.longitude),He(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return El(n.arrayValue,e.arrayValue);case 10:return(function(a,u){const p=a.fields||{},_=u.fields||{},v=p[Qo]?.arrayValue,w=_[Qo]?.arrayValue,P=Ce(v?.values?.length||0,w?.values?.length||0);return P!==0?P:El(v,w)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Io.mapValue&&u===Io.mapValue)return 0;if(a===Io.mapValue)return 1;if(u===Io.mapValue)return-1;const p=a.fields||{},_=Object.keys(p),v=u.fields||{},w=Object.keys(v);_.sort(),w.sort();for(let P=0;P<_.length&&P<w.length;++P){const k=fc(_[P],w[P]);if(k!==0)return k;const B=Pi(p[_[P]],v[w[P]]);if(B!==0)return B}return Ce(_.length,w.length)})(n.mapValue,e.mapValue);default:throw he(23264,{he:t})}}function vl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ce(n,e);const t=ur(n),r=ur(e),i=Ce(t.seconds,r.seconds);return i!==0?i:Ce(t.nanos,r.nanos)}function El(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const a=Pi(t[i],r[i]);if(a)return a}return Ce(t.length,r.length)}function ki(n){return pc(n)}function pc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=ur(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return lr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ae.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const a of t.values||[])i?i=!1:r+=",",r+=pc(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",a=!0;for(const u of r)a?a=!1:i+=",",i+=`${u}:${pc(t.fields[u])}`;return i+"}"})(n.mapValue):he(61005,{value:n})}function Do(n){switch(hr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fa(n);return e?16+Do(e):16;case 5:return 2*n.stringValue.length;case 6:return lr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,a)=>i+Do(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return gr(r.fields,((a,u)=>{i+=a.length+Do(u)})),i})(n.mapValue);default:throw he(13486,{value:n})}}function Tl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function gc(n){return!!n&&"integerValue"in n}function zc(n){return!!n&&"arrayValue"in n}function wl(n){return!!n&&"nullValue"in n}function Il(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function No(n){return!!n&&"mapValue"in n}function A_(n){return(n?.mapValue?.fields||{})[vd]?.stringValue===Ed}function gs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return gr(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=gs(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=gs(n.arrayValue.values[t]);return e}return{...n}}function S_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===b_}/**
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
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!No(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gs(t)}setAll(e){let t=ct.emptyPath(),r={},i=[];e.forEach(((u,p)=>{if(!t.isImmediateParentOf(p)){const _=this.getFieldsMap(t);this.applyChanges(_,r,i),r={},i=[],t=p.popLast()}u?r[p.lastSegment()]=gs(u):i.push(p.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,i)}delete(e){const t=this.field(e.popLast());No(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];No(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){gr(t,((i,a)=>e[i]=a));for(const i of r)delete e[i]}clone(){return new Ct(gs(this.value))}}function Td(n){const e=[];return gr(n.fields,((t,r)=>{const i=new ct([t]);if(No(r)){const a=Td(r.mapValue).fields;if(a.length===0)e.push(i);else for(const u of a)e.push(i.child(u))}else e.push(i)})),new xt(e)}/**
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
 */class ft{constructor(e,t,r,i,a,u,p){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=a,this.data=u,this.documentState=p}static newInvalidDocument(e){return new ft(e,0,ge.min(),ge.min(),ge.min(),Ct.empty(),0)}static newFoundDocument(e,t,r,i){return new ft(e,1,t,ge.min(),r,i,0)}static newNoDocument(e,t){return new ft(e,2,t,ge.min(),ge.min(),Ct.empty(),0)}static newUnknownDocument(e,t){return new ft(e,3,t,ge.min(),ge.min(),Ct.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yo{constructor(e,t){this.position=e,this.inclusive=t}}function bl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const a=e[i],u=n.position[i];if(a.field.isKeyField()?r=ae.comparator(ae.fromName(u.referenceValue),t.key):r=Pi(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function Al(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!mn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Cs{constructor(e,t="asc"){this.field=e,this.dir=t}}function C_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class wd{}class Ye extends wd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new P_(e,t,r):t==="array-contains"?new D_(e,r):t==="in"?new N_(e,r):t==="not-in"?new V_(e,r):t==="array-contains-any"?new O_(e,r):new Ye(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new k_(e,r):new x_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Pi(t,this.value)):t!==null&&hr(this.value)===hr(t)&&this.matchesComparison(Pi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends wd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Yt(e,t)}matches(e){return Id(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Id(n){return n.op==="and"}function bd(n){return R_(n)&&Id(n)}function R_(n){for(const e of n.filters)if(e instanceof Yt)return!1;return!0}function mc(n){if(n instanceof Ye)return n.field.canonicalString()+n.op.toString()+ki(n.value);if(bd(n))return n.filters.map((e=>mc(e))).join(",");{const e=n.filters.map((t=>mc(t))).join(",");return`${n.op}(${e})`}}function Ad(n,e){return n instanceof Ye?(function(r,i){return i instanceof Ye&&r.op===i.op&&r.field.isEqual(i.field)&&mn(r.value,i.value)})(n,e):n instanceof Yt?(function(r,i){return i instanceof Yt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((a,u,p)=>a&&Ad(u,i.filters[p])),!0):!1})(n,e):void he(19439)}function Sd(n){return n instanceof Ye?(function(t){return`${t.field.canonicalString()} ${t.op} ${ki(t.value)}`})(n):n instanceof Yt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Sd).join(" ,")+"}"})(n):"Filter"}class P_ extends Ye{constructor(e,t,r){super(e,t,r),this.key=ae.fromName(r.referenceValue)}matches(e){const t=ae.comparator(e.key,this.key);return this.matchesComparison(t)}}class k_ extends Ye{constructor(e,t){super(e,"in",t),this.keys=Cd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class x_ extends Ye{constructor(e,t){super(e,"not-in",t),this.keys=Cd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Cd(n,e){return(e.arrayValue?.values||[]).map((t=>ae.fromName(t.referenceValue)))}class D_ extends Ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return zc(t)&&Ss(t.arrayValue,this.value)}}class N_ extends Ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ss(this.value.arrayValue,t)}}class V_ extends Ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ss(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ss(this.value.arrayValue,t)}}class O_ extends Ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!zc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Ss(this.value.arrayValue,r)))}}/**
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
 */class M_{constructor(e,t=null,r=[],i=[],a=null,u=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=u,this.endAt=p,this.Te=null}}function Sl(n,e=null,t=[],r=[],i=null,a=null,u=null){return new M_(n,e,t,r,i,a,u)}function Wc(n){const e=me(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>mc(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),da(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>ki(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>ki(r))).join(",")),e.Te=t}return e.Te}function Gc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!C_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ad(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Al(n.startAt,e.startAt)&&Al(n.endAt,e.endAt)}function yc(n){return ae.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ui{constructor(e,t=null,r=[],i=[],a=null,u="F",p=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=u,this.startAt=p,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function L_(n,e,t,r,i,a,u,p){return new Ui(n,e,t,r,i,a,u,p)}function Kc(n){return new Ui(n)}function Cl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Rd(n){return n.collectionGroup!==null}function ms(n){const e=me(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let p=new et(ct.comparator);return u.filters.forEach((_=>{_.getFlattenedFilters().forEach((v=>{v.isInequality()&&(p=p.add(v.field))}))})),p})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new Cs(a,r))})),t.has(ct.keyField().canonicalString())||e.Ie.push(new Cs(ct.keyField(),r))}return e.Ie}function hn(n){const e=me(n);return e.Ee||(e.Ee=F_(e,ms(n))),e.Ee}function F_(n,e){if(n.limitType==="F")return Sl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const a=i.dir==="desc"?"asc":"desc";return new Cs(i.field,a)}));const t=n.endAt?new Yo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Yo(n.startAt.position,n.startAt.inclusive):null;return Sl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function _c(n,e){const t=n.filters.concat([e]);return new Ui(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function vc(n,e,t){return new Ui(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function pa(n,e){return Gc(hn(n),hn(e))&&n.limitType===e.limitType}function Pd(n){return`${Wc(hn(n))}|lt:${n.limitType}`}function gi(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>Sd(i))).join(", ")}]`),da(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>ki(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>ki(i))).join(",")),`Target(${r})`})(hn(n))}; limitType=${n.limitType})`}function ga(n,e){return e.isFoundDocument()&&(function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ae.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,i){for(const a of ms(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(u,p,_){const v=bl(u,p,_);return u.inclusive?v<=0:v<0})(r.startAt,ms(r),i)||r.endAt&&!(function(u,p,_){const v=bl(u,p,_);return u.inclusive?v>=0:v>0})(r.endAt,ms(r),i))})(n,e)}function U_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function kd(n){return(e,t)=>{let r=!1;for(const i of ms(n)){const a=j_(i,e,t);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function j_(n,e,t){const r=n.field.isKeyField()?ae.comparator(e.key,t.key):(function(a,u,p){const _=u.data.field(a),v=p.data.field(a);return _!==null&&v!==null?Pi(_,v):he(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return he(19790,{direction:n.dir})}}/**
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
 */class jr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){gr(this.inner,((t,r)=>{for(const[i,a]of r)e(i,a)}))}isEmpty(){return fd(this.inner)}size(){return this.innerSize}}/**
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
 */const q_=new qe(ae.comparator);function Un(){return q_}const xd=new qe(ae.comparator);function ls(...n){let e=xd;for(const t of n)e=e.insert(t.key,t);return e}function Dd(n){let e=xd;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Dr(){return ys()}function Nd(){return ys()}function ys(){return new jr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const $_=new qe(ae.comparator),B_=new et(ae.comparator);function Re(...n){let e=B_;for(const t of n)e=e.add(t);return e}const H_=new et(Ce);function z_(){return H_}/**
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
 */function Qc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Go(e)?"-0":e}}function Vd(n){return{integerValue:""+n}}function Od(n,e){return v_(e)?Vd(e):Qc(n,e)}/**
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
 */class ma{constructor(){this._=void 0}}function W_(n,e,t){return n instanceof Rs?(function(i,a){const u={fields:{[md]:{stringValue:gd},[_d]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&Hc(a)&&(a=fa(a)),a&&(u.fields[yd]=a),{mapValue:u}})(t,e):n instanceof Ps?Ld(n,e):n instanceof ks?Fd(n,e):(function(i,a){const u=Md(i,a),p=Rl(u)+Rl(i.Ae);return gc(u)&&gc(i.Ae)?Vd(p):Qc(i.serializer,p)})(n,e)}function G_(n,e,t){return n instanceof Ps?Ld(n,e):n instanceof ks?Fd(n,e):t}function Md(n,e){return n instanceof xs?(function(r){return gc(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Rs extends ma{}class Ps extends ma{constructor(e){super(),this.elements=e}}function Ld(n,e){const t=Ud(e);for(const r of n.elements)t.some((i=>mn(i,r)))||t.push(r);return{arrayValue:{values:t}}}class ks extends ma{constructor(e){super(),this.elements=e}}function Fd(n,e){let t=Ud(e);for(const r of n.elements)t=t.filter((i=>!mn(i,r)));return{arrayValue:{values:t}}}class xs extends ma{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Rl(n){return He(n.integerValue||n.doubleValue)}function Ud(n){return zc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class jd{constructor(e,t){this.field=e,this.transform=t}}function K_(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof Ps&&i instanceof Ps||r instanceof ks&&i instanceof ks?Ri(r.elements,i.elements,mn):r instanceof xs&&i instanceof xs?mn(r.Ae,i.Ae):r instanceof Rs&&i instanceof Rs})(n.transform,e.transform)}class Q_{constructor(e,t){this.version=e,this.transformResults=t}}class Kt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ya{}function qd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Yc(n.key,Kt.none()):new qs(n.key,n.data,Kt.none());{const t=n.data,r=Ct.empty();let i=new et(ct.comparator);for(let a of e.fields)if(!i.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),i=i.add(a)}return new mr(n.key,r,new xt(i.toArray()),Kt.none())}}function Y_(n,e,t){n instanceof qs?(function(i,a,u){const p=i.value.clone(),_=kl(i.fieldTransforms,a,u.transformResults);p.setAll(_),a.convertToFoundDocument(u.version,p).setHasCommittedMutations()})(n,e,t):n instanceof mr?(function(i,a,u){if(!Vo(i.precondition,a))return void a.convertToUnknownDocument(u.version);const p=kl(i.fieldTransforms,a,u.transformResults),_=a.data;_.setAll($d(i)),_.setAll(p),a.convertToFoundDocument(u.version,_).setHasCommittedMutations()})(n,e,t):(function(i,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function _s(n,e,t,r){return n instanceof qs?(function(a,u,p,_){if(!Vo(a.precondition,u))return p;const v=a.value.clone(),w=xl(a.fieldTransforms,_,u);return v.setAll(w),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),null})(n,e,t,r):n instanceof mr?(function(a,u,p,_){if(!Vo(a.precondition,u))return p;const v=xl(a.fieldTransforms,_,u),w=u.data;return w.setAll($d(a)),w.setAll(v),u.convertToFoundDocument(u.version,w).setHasLocalMutations(),p===null?null:p.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((P=>P.field)))})(n,e,t,r):(function(a,u,p){return Vo(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):p})(n,e,t)}function X_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),a=Md(r.transform,i||null);a!=null&&(t===null&&(t=Ct.empty()),t.set(r.field,a))}return t||null}function Pl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ri(r,i,((a,u)=>K_(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class qs extends ya{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mr extends ya{constructor(e,t,r,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function $d(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function kl(n,e,t){const r=new Map;De(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const a=n[i],u=a.transform,p=e.data.field(a.field);r.set(a.field,G_(u,p,t[i]))}return r}function xl(n,e,t){const r=new Map;for(const i of n){const a=i.transform,u=t.data.field(i.field);r.set(i.field,W_(a,u,e))}return r}class Yc extends ya{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class J_ extends ya{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Z_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&Y_(a,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=_s(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=_s(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Nd();return this.mutations.forEach((i=>{const a=e.get(i.key),u=a.overlayedDocument;let p=this.applyToLocalView(u,a.mutatedFields);p=t.has(i.key)?null:p;const _=qd(u,p);_!==null&&r.set(i.key,_),u.isValidDocument()||u.convertToNoDocument(ge.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Re())}isEqual(e){return this.batchId===e.batchId&&Ri(this.mutations,e.mutations,((t,r)=>Pl(t,r)))&&Ri(this.baseMutations,e.baseMutations,((t,r)=>Pl(t,r)))}}class Xc{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){De(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=(function(){return $_})();const a=e.mutations;for(let u=0;u<a.length;u++)i=i.insert(a[u].key,r[u].version);return new Xc(e,t,r,i)}}/**
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
 */class ev{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class tv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Qe,Pe;function nv(n){switch(n){case W.OK:return he(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return he(15467,{code:n})}}function Bd(n){if(n===void 0)return Fn("GRPC error has no .code"),W.UNKNOWN;switch(n){case Qe.OK:return W.OK;case Qe.CANCELLED:return W.CANCELLED;case Qe.UNKNOWN:return W.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return W.INTERNAL;case Qe.UNAVAILABLE:return W.UNAVAILABLE;case Qe.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Qe.NOT_FOUND:return W.NOT_FOUND;case Qe.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Qe.ABORTED:return W.ABORTED;case Qe.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Qe.DATA_LOSS:return W.DATA_LOSS;default:return he(39323,{code:n})}}(Pe=Qe||(Qe={}))[Pe.OK=0]="OK",Pe[Pe.CANCELLED=1]="CANCELLED",Pe[Pe.UNKNOWN=2]="UNKNOWN",Pe[Pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pe[Pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pe[Pe.NOT_FOUND=5]="NOT_FOUND",Pe[Pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pe[Pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pe[Pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pe[Pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pe[Pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pe[Pe.ABORTED=10]="ABORTED",Pe[Pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pe[Pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pe[Pe.INTERNAL=13]="INTERNAL",Pe[Pe.UNAVAILABLE=14]="UNAVAILABLE",Pe[Pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rv(){return new TextEncoder}/**
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
 */const iv=new or([4294967295,4294967295],0);function Dl(n){const e=rv().encode(n),t=new nd;return t.update(e),new Uint8Array(t.digest())}function Nl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new or([t,r],0),new or([i,a],0)]}class Jc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new hs(`Invalid padding: ${t}`);if(r<0)throw new hs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new hs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=or.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(or.fromNumber(r)));return i.compare(iv)===1&&(i=new or([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Dl(e),[r,i]=Nl(t);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,i,a);if(!this.we(u))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Jc(a,i,t);return r.forEach((p=>u.insert(p))),u}insert(e){if(this.ge===0)return;const t=Dl(e),[r,i]=Nl(t);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,i,a);this.Se(u)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class _a{constructor(e,t,r,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,$s.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new _a(ge.min(),i,new qe(Ce),Un(),Re())}}class $s{constructor(e,t,r,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new $s(r,t,Re(),Re(),Re())}}/**
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
 */class Oo{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class Hd{constructor(e,t){this.targetId=e,this.Ce=t}}class zd{constructor(e,t,r=ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Vl{constructor(){this.ve=0,this.Fe=Ol(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Re(),t=Re(),r=Re();return this.Fe.forEach(((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:he(38017,{changeType:a})}})),new $s(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Ol()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,De(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class sv{constructor(e){this.Ge=e,this.ze=new Map,this.je=Un(),this.Je=bo(),this.He=bo(),this.Ye=new qe(Ce)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:he(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const a=i.target;if(yc(a))if(r===0){const u=new ae(a.path);this.et(t,u,ft.newNoDocument(u,ge.min()))}else De(r===1,20013,{expectedCount:r});else{const u=this._t(t);if(u!==r){const p=this.ut(e),_=p?this.ct(p,e,u):1;if(_!==0){this.it(t);const v=_===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=t;let u,p;try{u=lr(r).toUint8Array()}catch(_){if(_ instanceof pd)return Ci("Decoding the base64 bloom filter in existence filter failed ("+_.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw _}try{p=new Jc(u,i,a)}catch(_){return Ci(_ instanceof hs?"BloomFilter error: ":"Applying bloom filter failed: ",_),null}return p.ge===0?null:p}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach((a=>{const u=this.Ge.ht(),p=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(p)||(this.et(t,a,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((a,u)=>{const p=this.ot(u);if(p){if(a.current&&yc(p.target)){const _=new ae(p.target.path);this.It(_).has(u)||this.Et(u,_)||this.et(u,_,ft.newNoDocument(_,e))}a.Be&&(t.set(u,a.ke()),a.qe())}}));let r=Re();this.He.forEach(((a,u)=>{let p=!0;u.forEachWhile((_=>{const v=this.ot(_);return!v||v.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(r=r.add(a))})),this.je.forEach(((a,u)=>u.setReadTime(e)));const i=new _a(e,t,this.Ye,this.je,r);return this.je=Un(),this.Je=bo(),this.He=bo(),this.Ye=new qe(Ce),i}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Vl,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new et(Ce),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new et(Ce),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Vl),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function bo(){return new qe(ae.comparator)}function Ol(){return new qe(ae.comparator)}const ov={asc:"ASCENDING",desc:"DESCENDING"},av={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cv={and:"AND",or:"OR"};class uv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ec(n,e){return n.useProto3Json||da(e)?e:{value:e}}function Xo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function lv(n,e){return Xo(n,e.toTimestamp())}function dn(n){return De(!!n,49232),ge.fromTimestamp((function(t){const r=ur(t);return new je(r.seconds,r.nanos)})(n))}function Zc(n,e){return Tc(n,e).canonicalString()}function Tc(n,e){const t=(function(i){return new Le(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Gd(n){const e=Le.fromString(n);return De(Jd(e),10190,{key:e.toString()}),e}function wc(n,e){return Zc(n.databaseId,e.path)}function ec(n,e){const t=Gd(e);if(t.get(1)!==n.databaseId.projectId)throw new te(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new te(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ae(Qd(t))}function Kd(n,e){return Zc(n.databaseId,e)}function hv(n){const e=Gd(n);return e.length===4?Le.emptyPath():Qd(e)}function Ic(n){return new Le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Qd(n){return De(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ml(n,e,t){return{name:wc(n,e),fields:t.value.mapValue.fields}}function dv(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:he(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=(function(v,w){return v.useProto3Json?(De(w===void 0||typeof w=="string",58123),ut.fromBase64String(w||"")):(De(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),ut.fromUint8Array(w||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,p=u&&(function(v){const w=v.code===void 0?W.UNKNOWN:Bd(v.code);return new te(w,v.message||"")})(u);t=new zd(r,i,a,p||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ec(n,r.document.name),a=dn(r.document.updateTime),u=r.document.createTime?dn(r.document.createTime):ge.min(),p=new Ct({mapValue:{fields:r.document.fields}}),_=ft.newFoundDocument(i,a,u,p),v=r.targetIds||[],w=r.removedTargetIds||[];t=new Oo(v,w,_.key,_)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ec(n,r.document),a=r.readTime?dn(r.readTime):ge.min(),u=ft.newNoDocument(i,a),p=r.removedTargetIds||[];t=new Oo([],p,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ec(n,r.document),a=r.removedTargetIds||[];t=new Oo([],a,i,null)}else{if(!("filter"in e))return he(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,u=new tv(i,a),p=r.targetId;t=new Hd(p,u)}}return t}function fv(n,e){let t;if(e instanceof qs)t={update:Ml(n,e.key,e.value)};else if(e instanceof Yc)t={delete:wc(n,e.key)};else if(e instanceof mr)t={update:Ml(n,e.key,e.data),updateMask:wv(e.fieldMask)};else{if(!(e instanceof J_))return he(16599,{Vt:e.type});t={verify:wc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const p=u.transform;if(p instanceof Rs)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Ps)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof ks)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof xs)return{fieldPath:u.field.canonicalString(),increment:p.Ae};throw he(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,a){return a.updateTime!==void 0?{updateTime:lv(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:he(27497)})(n,e.precondition)),t}function pv(n,e){return n&&n.length>0?(De(e!==void 0,14353),n.map((t=>(function(i,a){let u=i.updateTime?dn(i.updateTime):dn(a);return u.isEqual(ge.min())&&(u=dn(a)),new Q_(u,i.transformResults||[])})(t,e)))):[]}function gv(n,e){return{documents:[Kd(n,e.path)]}}function mv(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Kd(n,i);const a=(function(v){if(v.length!==0)return Xd(Yt.create(v,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(v){if(v.length!==0)return v.map((w=>(function(k){return{field:mi(k.field),direction:vv(k.dir)}})(w)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const p=Ec(n,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:i}}function yv(n){let e=hv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){De(r===1,65062);const w=t.from[0];w.allDescendants?i=w.collectionId:e=e.child(w.collectionId)}let a=[];t.where&&(a=(function(P){const k=Yd(P);return k instanceof Yt&&bd(k)?k.getFilters():[k]})(t.where));let u=[];t.orderBy&&(u=(function(P){return P.map((k=>(function($){return new Cs(yi($.field),(function(J){switch(J){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(k)))})(t.orderBy));let p=null;t.limit&&(p=(function(P){let k;return k=typeof P=="object"?P.value:P,da(k)?null:k})(t.limit));let _=null;t.startAt&&(_=(function(P){const k=!!P.before,B=P.values||[];return new Yo(B,k)})(t.startAt));let v=null;return t.endAt&&(v=(function(P){const k=!P.before,B=P.values||[];return new Yo(B,k)})(t.endAt)),L_(e,i,u,a,p,"F",_,v)}function _v(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Yd(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=yi(t.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=yi(t.unaryFilter.field);return Ye.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=yi(t.unaryFilter.field);return Ye.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=yi(t.unaryFilter.field);return Ye.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return he(61313);default:return he(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ye.create(yi(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return he(58110);default:return he(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Yt.create(t.compositeFilter.filters.map((r=>Yd(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return he(1026)}})(t.compositeFilter.op))})(n):he(30097,{filter:n})}function vv(n){return ov[n]}function Ev(n){return av[n]}function Tv(n){return cv[n]}function mi(n){return{fieldPath:n.canonicalString()}}function yi(n){return ct.fromServerFormat(n.fieldPath)}function Xd(n){return n instanceof Ye?(function(t){if(t.op==="=="){if(Il(t.value))return{unaryFilter:{field:mi(t.field),op:"IS_NAN"}};if(wl(t.value))return{unaryFilter:{field:mi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Il(t.value))return{unaryFilter:{field:mi(t.field),op:"IS_NOT_NAN"}};if(wl(t.value))return{unaryFilter:{field:mi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mi(t.field),op:Ev(t.op),value:t.value}}})(n):n instanceof Yt?(function(t){const r=t.getFilters().map((i=>Xd(i)));return r.length===1?r[0]:{compositeFilter:{op:Tv(t.op),filters:r}}})(n):he(54877,{filter:n})}function wv(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Jd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class tr{constructor(e,t,r,i,a=ge.min(),u=ge.min(),p=ut.EMPTY_BYTE_STRING,_=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=p,this.expectedCount=_}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Iv{constructor(e){this.yt=e}}function bv(n){const e=yv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?vc(e,e.limit,"L"):e}/**
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
 */class Av{constructor(){this.Cn=new Sv}addToCollectionParentIndex(e,t){return this.Cn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(cr.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(cr.min())}updateCollectionGroup(e,t,r){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class Sv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new et(Le.comparator),a=!i.has(r);return this.index[t]=i.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new et(Le.comparator)).toArray()}}/**
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
 */const Ll={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Zd=41943040;class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(Zd,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
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
 */class xi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new xi(0)}static cr(){return new xi(-1)}}/**
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
 */const Fl="LruGarbageCollector",Cv=1048576;function Ul([n,e],[t,r]){const i=Ce(n,t);return i===0?Ce(e,r):i}class Rv{constructor(e){this.Ir=e,this.buffer=new et(Ul),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Ul(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Pv{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ie(Fl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Fi(t)?ie(Fl,"Ignoring IndexedDB error during garbage collection: ",t):await Li(t)}await this.Vr(3e5)}))}}class kv{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return K.resolve(ha.ce);const r=new Rv(t);return this.mr.forEachTarget(e,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(Ll)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ll):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,a,u,p,_,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((P=>(P>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${P}`),i=this.params.maximumSequenceNumbersToCollect):i=P,u=Date.now(),this.nthSequenceNumber(e,i)))).next((P=>(r=P,p=Date.now(),this.removeTargets(e,r,t)))).next((P=>(a=P,_=Date.now(),this.removeOrphanedDocuments(e,r)))).next((P=>(v=Date.now(),pi()<=Se.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-w}ms
	Determined least recently used ${i} in `+(p-u)+`ms
	Removed ${a} targets in `+(_-p)+`ms
	Removed ${P} documents in `+(v-_)+`ms
Total Duration: ${v-w}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:P}))))}}function xv(n,e){return new kv(n,e)}/**
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
 */class Dv{constructor(){this.changes=new jr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?K.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Nv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Vv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&_s(r.mutation,i,xt.empty(),je.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Re()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Re()){const i=Dr();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((a=>{let u=ls();return a.forEach(((p,_)=>{u=u.insert(p,_.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=Dr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Re())))}populateOverlays(e,t,r){const i=[];return r.forEach((a=>{t.has(a)||i.push(a)})),this.documentOverlayCache.getOverlays(e,i).next((a=>{a.forEach(((u,p)=>{t.set(u,p)}))}))}computeViews(e,t,r,i){let a=Un();const u=ys(),p=(function(){return ys()})();return t.forEach(((_,v)=>{const w=r.get(v.key);i.has(v.key)&&(w===void 0||w.mutation instanceof mr)?a=a.insert(v.key,v):w!==void 0?(u.set(v.key,w.mutation.getFieldMask()),_s(w.mutation,v,w.mutation.getFieldMask(),je.now())):u.set(v.key,xt.empty())})),this.recalculateAndSaveOverlays(e,a).next((_=>(_.forEach(((v,w)=>u.set(v,w))),t.forEach(((v,w)=>p.set(v,new Nv(w,u.get(v)??null)))),p)))}recalculateAndSaveOverlays(e,t){const r=ys();let i=new qe(((u,p)=>u-p)),a=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const p of u)p.keys().forEach((_=>{const v=t.get(_);if(v===null)return;let w=r.get(_)||xt.empty();w=p.applyToLocalView(v,w),r.set(_,w);const P=(i.get(p.batchId)||Re()).add(_);i=i.insert(p.batchId,P)}))})).next((()=>{const u=[],p=i.getReverseIterator();for(;p.hasNext();){const _=p.getNext(),v=_.key,w=_.value,P=Nd();w.forEach((k=>{if(!a.has(k)){const B=qd(t.get(k),r.get(k));B!==null&&P.set(k,B),a=a.add(k)}})),u.push(this.documentOverlayCache.saveOverlays(e,v,P))}return K.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(u){return ae.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Rd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((a=>{const u=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-a.size):K.resolve(Dr());let p=Is,_=a;return u.next((v=>K.forEach(v,((w,P)=>(p<P.largestBatchId&&(p=P.largestBatchId),a.get(w)?K.resolve():this.remoteDocumentCache.getEntry(e,w).next((k=>{_=_.insert(w,k)}))))).next((()=>this.populateOverlays(e,v,a))).next((()=>this.computeViews(e,_,v,Re()))).next((w=>({batchId:p,changes:Dd(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ae(t)).next((r=>{let i=ls();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const a=t.collectionGroup;let u=ls();return this.indexManager.getCollectionParents(e,a).next((p=>K.forEach(p,(_=>{const v=(function(P,k){return new Ui(k,null,P.explicitOrderBy.slice(),P.filters.slice(),P.limit,P.limitType,P.startAt,P.endAt)})(t,_.child(a));return this.getDocumentsMatchingCollectionQuery(e,v,r,i).next((w=>{w.forEach(((P,k)=>{u=u.insert(P,k)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,i)))).next((u=>{a.forEach(((_,v)=>{const w=v.getKey();u.get(w)===null&&(u=u.insert(w,ft.newInvalidDocument(w)))}));let p=ls();return u.forEach(((_,v)=>{const w=a.get(_);w!==void 0&&_s(w.mutation,v,xt.empty(),je.now()),ga(t,v)&&(p=p.insert(_,v))})),p}))}}/**
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
 */class Ov{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return K.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:dn(i.createTime)}})(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:bv(i.bundledQuery),readTime:dn(i.readTime)}})(t)),K.resolve()}}/**
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
 */class Mv{constructor(){this.overlays=new qe(ae.comparator),this.qr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Dr();return K.forEach(t,(i=>this.getOverlay(e,i).next((a=>{a!==null&&r.set(i,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,a)=>{this.St(e,t,a)})),K.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((a=>this.overlays=this.overlays.remove(a))),this.qr.delete(r)),K.resolve()}getOverlaysForCollection(e,t,r){const i=Dr(),a=t.length+1,u=new ae(t.child("")),p=this.overlays.getIteratorFrom(u);for(;p.hasNext();){const _=p.getNext().value,v=_.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===a&&_.largestBatchId>r&&i.set(_.getKey(),_)}return K.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let a=new qe(((v,w)=>v-w));const u=this.overlays.getIterator();for(;u.hasNext();){const v=u.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>r){let w=a.get(v.largestBatchId);w===null&&(w=Dr(),a=a.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const p=Dr(),_=a.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach(((v,w)=>p.set(v,w))),!(p.size()>=i)););return K.resolve(p)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const u=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new ev(t,r));let a=this.qr.get(t);a===void 0&&(a=Re(),this.qr.set(t,a)),this.qr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
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
 */class eu{constructor(){this.Qr=new et(it.$r),this.Ur=new et(it.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new it(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new it(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new ae(new Le([])),r=new it(t,e),i=new it(t,e+1),a=[];return this.Ur.forEachInRange([r,i],(u=>{this.Gr(u),a.push(u.key)})),a}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ae(new Le([])),r=new it(t,e),i=new it(t,e+1);let a=Re();return this.Ur.forEachInRange([r,i],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new it(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ae.comparator(e.key,t.key)||Ce(e.Yr,t.Yr)}static Kr(e,t){return Ce(e.Yr,t.Yr)||ae.comparator(e.key,t.key)}}/**
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
 */class Fv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new et(it.$r)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Z_(a,t,r,i);this.mutationQueue.push(u);for(const p of i)this.Zr=this.Zr.add(new it(p.key,a)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return K.resolve(u)}lookupMutationBatch(e,t){return K.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),a=i<0?0:i;return K.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?Bc:this.tr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new it(t,0),i=new it(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([r,i],(u=>{const p=this.Xr(u.Yr);a.push(p)})),K.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new et(Ce);return t.forEach((i=>{const a=new it(i,0),u=new it(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,u],(p=>{r=r.add(p.Yr)}))})),K.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let a=r;ae.isDocumentKey(a)||(a=a.child(""));const u=new it(new ae(a),0);let p=new et(Ce);return this.Zr.forEachWhile((_=>{const v=_.key.path;return!!r.isPrefixOf(v)&&(v.length===i&&(p=p.add(_.Yr)),!0)}),u),K.resolve(this.ti(p))}ti(e){const t=[];return e.forEach((r=>{const i=this.Xr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){De(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return K.forEach(t.mutations,(i=>{const a=new it(i.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new it(t,0),i=this.Zr.firstAfterOrEqual(r);return K.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Uv{constructor(e){this.ri=e,this.docs=(function(){return new qe(ae.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),a=i?i.size:0,u=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return K.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(t))}getEntries(e,t){let r=Un();return t.forEach((i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():ft.newInvalidDocument(i))})),K.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let a=Un();const u=t.path,p=new ae(u.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(p);for(;_.hasNext();){const{key:v,value:{document:w}}=_.getNext();if(!u.isPrefixOf(v.path))break;v.path.length>u.length+1||g_(p_(w),r)<=0||(i.has(w.key)||ga(t,w))&&(a=a.insert(w.key,w.mutableCopy()))}return K.resolve(a)}getAllFromCollectionGroup(e,t,r,i){he(9500)}ii(e,t){return K.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new jv(this)}getSize(e){return K.resolve(this.size)}}class jv extends Dv{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)})),K.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class qv{constructor(e){this.persistence=e,this.si=new jr((t=>Wc(t)),Gc),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.oi=0,this._i=new eu,this.targetCount=0,this.ai=xi.ur()}forEachTarget(e,t){return this.si.forEach(((r,i)=>t(i))),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),K.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new xi(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.Pr(t),K.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,r){let i=0;const a=[];return this.si.forEach(((u,p)=>{p.sequenceNumber<=t&&r.get(p.targetId)===null&&(this.si.delete(u),a.push(this.removeMatchingKeysForTargetId(e,p.targetId)),i++)})),K.waitFor(a).next((()=>i))}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return K.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),K.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach((u=>{a.push(i.markPotentiallyOrphaned(e,u))})),K.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return K.resolve(r)}containsKey(e,t){return K.resolve(this._i.containsKey(t))}}/**
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
 */class ef{constructor(e,t){this.ui={},this.overlays={},this.ci=new ha(0),this.li=!1,this.li=!0,this.hi=new Lv,this.referenceDelegate=e(this),this.Pi=new qv(this),this.indexManager=new Av,this.remoteDocumentCache=(function(i){return new Uv(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Iv(t),this.Ii=new Ov(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Mv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new Fv(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){ie("MemoryPersistence","Starting transaction:",e);const i=new $v(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((a=>this.referenceDelegate.di(i).next((()=>a)))).toPromise().then((a=>(i.raiseOnCommittedEvent(),a)))}Ai(e,t){return K.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class $v extends y_{constructor(e){super(),this.currentSequenceNumber=e}}class tu{constructor(e){this.persistence=e,this.Ri=new eu,this.Vi=null}static mi(e){return new tu(e)}get fi(){if(this.Vi)return this.Vi;throw he(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),K.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),K.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((a=>this.fi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.fi,(r=>{const i=ae.fromPath(r);return this.gi(e,i).next((a=>{a||t.removeEntry(i,ge.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return K.or([()=>K.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Jo{constructor(e,t){this.persistence=e,this.pi=new jr((r=>E_(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=xv(this,t)}static mi(e,t){return new Jo(e,t)}Ei(){}di(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return K.forEach(this.pi,((r,i)=>this.br(e,r,i).next((a=>a?K.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.ii(e,(u=>this.br(e,u,t).next((p=>{p||(r++,a.removeEntry(u,ge.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),K.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),K.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Do(e.data.value)),t}br(e,t,r){return K.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return K.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class nu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=Re(),i=Re();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new nu(e,t.fromCache,r,i)}}/**
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
 */class Bv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Hv{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return gp()?8:__(pt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const a={result:null};return this.ys(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ws(e,t,i,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new Bv;return this.Ss(e,t,u).next((p=>{if(a.result=p,this.Vs)return this.bs(e,t,u,p.size)}))})).next((()=>a.result))}bs(e,t,r,i){return r.documentReadCount<this.fs?(pi()<=Se.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",gi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),K.resolve()):(pi()<=Se.DEBUG&&ie("QueryEngine","Query:",gi(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(pi()<=Se.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",gi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hn(t))):K.resolve())}ys(e,t){if(Cl(t))return K.resolve(null);let r=hn(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=vc(t,null,"F"),r=hn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=Re(...a);return this.ps.getDocuments(e,u).next((p=>this.indexManager.getMinOffset(e,r).next((_=>{const v=this.Ds(t,p);return this.Cs(t,v,u,_.readTime)?this.ys(e,vc(t,null,"F")):this.vs(e,v,t,_)}))))})))))}ws(e,t,r,i){return Cl(t)||i.isEqual(ge.min())?K.resolve(null):this.ps.getDocuments(e,r).next((a=>{const u=this.Ds(t,a);return this.Cs(t,u,r,i)?K.resolve(null):(pi()<=Se.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),gi(t)),this.vs(e,u,t,f_(i,Is)).next((p=>p)))}))}Ds(e,t){let r=new et(kd(e));return t.forEach(((i,a)=>{ga(e,a)&&(r=r.add(a))})),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}Ss(e,t,r){return pi()<=Se.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",gi(t)),this.ps.getDocumentsMatchingQuery(e,t,cr.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
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
 */const ru="LocalStore",zv=3e8;class Wv{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new qe(Ce),this.xs=new jr((a=>Wc(a)),Gc),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Vv(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Gv(n,e,t,r){return new Wv(n,e,t,r)}async function tf(n,e){const t=me(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((a=>(i=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],p=[];let _=Re();for(const v of i){u.push(v.batchId);for(const w of v.mutations)_=_.add(w.key)}for(const v of a){p.push(v.batchId);for(const w of v.mutations)_=_.add(w.key)}return t.localDocuments.getDocuments(r,_).next((v=>({Ls:v,removedBatchIds:u,addedBatchIds:p})))}))}))}function Kv(n,e){const t=me(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),a=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,_,v,w){const P=v.batch,k=P.keys();let B=K.resolve();return k.forEach(($=>{B=B.next((()=>w.getEntry(_,$))).next((G=>{const J=v.docVersions.get($);De(J!==null,48541),G.version.compareTo(J)<0&&(P.applyToRemoteDocument(G,v),G.isValidDocument()&&(G.setReadTime(v.commitVersion),w.addEntry(G)))}))})),B.next((()=>p.mutationQueue.removeMutationBatch(_,P)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(p){let _=Re();for(let v=0;v<p.mutationResults.length;++v)p.mutationResults[v].transformResults.length>0&&(_=_.add(p.batch.mutations[v].key));return _})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function nf(n){const e=me(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Qv(n,e){const t=me(n),r=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const p=[];e.targetChanges.forEach(((w,P)=>{const k=i.get(P);if(!k)return;p.push(t.Pi.removeMatchingKeys(a,w.removedDocuments,P).next((()=>t.Pi.addMatchingKeys(a,w.addedDocuments,P))));let B=k.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(P)!==null?B=B.withResumeToken(ut.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):w.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(w.resumeToken,r)),i=i.insert(P,B),(function(G,J,Z){return G.resumeToken.approximateByteSize()===0||J.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=zv?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0})(k,B,w)&&p.push(t.Pi.updateTargetData(a,B))}));let _=Un(),v=Re();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(a,w))})),p.push(Yv(a,u,e.documentUpdates).next((w=>{_=w.ks,v=w.qs}))),!r.isEqual(ge.min())){const w=t.Pi.getLastRemoteSnapshotVersion(a).next((P=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,r)));p.push(w)}return K.waitFor(p).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,_,v))).next((()=>_))})).then((a=>(t.Ms=i,a)))}function Yv(n,e,t){let r=Re(),i=Re();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=Un();return t.forEach(((p,_)=>{const v=a.get(p);_.isFoundDocument()!==v.isFoundDocument()&&(i=i.add(p)),_.isNoDocument()&&_.version.isEqual(ge.min())?(e.removeEntry(p,_.readTime),u=u.insert(p,_)):!v.isValidDocument()||_.version.compareTo(v.version)>0||_.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(_),u=u.insert(p,_)):ie(ru,"Ignoring outdated watch update for ",p,". Current version:",v.version," Watch version:",_.version)})),{ks:u,qs:i}}))}function Xv(n,e){const t=me(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Bc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Jv(n,e){const t=me(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.Pi.getTargetData(r,e).next((a=>a?(i=a,K.resolve(i)):t.Pi.allocateTargetId(r).next((u=>(i=new tr(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function bc(n,e,t){const r=me(n),i=r.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,i)))}catch(u){if(!Fi(u))throw u;ie(ru,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function jl(n,e,t){const r=me(n);let i=ge.min(),a=Re();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(_,v,w){const P=me(_),k=P.xs.get(w);return k!==void 0?K.resolve(P.Ms.get(k)):P.Pi.getTargetData(v,w)})(r,u,hn(e)).next((p=>{if(p)return i=p.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(u,p.targetId).next((_=>{a=_}))})).next((()=>r.Fs.getDocumentsMatchingQuery(u,e,t?i:ge.min(),t?a:Re()))).next((p=>(Zv(r,U_(e),p),{documents:p,Qs:a})))))}function Zv(n,e,t){let r=n.Os.get(e)||ge.min();t.forEach(((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.Os.set(e,r)}class ql{constructor(){this.activeTargetIds=z_()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eE{constructor(){this.Mo=new ql,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ql,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class tE{Oo(e){}shutdown(){}}/**
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
 */const $l="ConnectivityMonitor";class Bl{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ie($l,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ie($l,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ao=null;function Ac(){return Ao===null?Ao=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ao++,"0x"+Ao.toString(16)}/**
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
 */const tc="RestConnection",nE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rE{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Ko?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,a){const u=Ac(),p=this.zo(e,t.toUriEncodedString());ie(tc,`Sending RPC '${e}' ${u}:`,p,r);const _={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(_,i,a);const{host:v}=new URL(p),w=Ni(v);return this.Jo(e,p,_,r,w).then((P=>(ie(tc,`Received RPC '${e}' ${u}: `,P),P)),(P=>{throw Ci(tc,`RPC '${e}' ${u} failed with error: `,P,"url: ",p,"request:",r),P}))}Ho(e,t,r,i,a,u){return this.Go(e,t,r,i,a)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Mi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,a)=>e[a]=i)),r&&r.headers.forEach(((i,a)=>e[a]=i))}zo(e,t){const r=nE[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class iE{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const ht="WebChannelConnection";class sE extends rE{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,a){const u=Ac();return new Promise(((p,_)=>{const v=new rd;v.setWithCredentials(!0),v.listenOnce(id.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case xo.NO_ERROR:const P=v.getResponseJson();ie(ht,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(P)),p(P);break;case xo.TIMEOUT:ie(ht,`RPC '${e}' ${u} timed out`),_(new te(W.DEADLINE_EXCEEDED,"Request time out"));break;case xo.HTTP_ERROR:const k=v.getStatus();if(ie(ht,`RPC '${e}' ${u} failed with status:`,k,"response text:",v.getResponseText()),k>0){let B=v.getResponseJson();Array.isArray(B)&&(B=B[0]);const $=B?.error;if($&&$.status&&$.message){const G=(function(Z){const ye=Z.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(ye)>=0?ye:W.UNKNOWN})($.status);_(new te(G,$.message))}else _(new te(W.UNKNOWN,"Server responded with status "+v.getStatus()))}else _(new te(W.UNAVAILABLE,"Connection failed."));break;default:he(9055,{l_:e,streamId:u,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{ie(ht,`RPC '${e}' ${u} completed.`)}}));const w=JSON.stringify(i);ie(ht,`RPC '${e}' ${u} sending request:`,i),v.send(t,"POST",w,r,15)}))}T_(e,t,r){const i=Ac(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=ad(),p=od(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(_.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(_.useFetchStreams=!0),this.jo(_.initMessageHeaders,t,r),_.encodeInitMessageHeaders=!0;const w=a.join("");ie(ht,`Creating RPC '${e}' stream ${i}: ${w}`,_);const P=u.createWebChannel(w,_);this.I_(P);let k=!1,B=!1;const $=new iE({Yo:J=>{B?ie(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,J):(k||(ie(ht,`Opening RPC '${e}' stream ${i} transport.`),P.open(),k=!0),ie(ht,`RPC '${e}' stream ${i} sending:`,J),P.send(J))},Zo:()=>P.close()}),G=(J,Z,ye)=>{J.listen(Z,(_e=>{try{ye(_e)}catch(Ne){setTimeout((()=>{throw Ne}),0)}}))};return G(P,us.EventType.OPEN,(()=>{B||(ie(ht,`RPC '${e}' stream ${i} transport opened.`),$.o_())})),G(P,us.EventType.CLOSE,(()=>{B||(B=!0,ie(ht,`RPC '${e}' stream ${i} transport closed`),$.a_(),this.E_(P))})),G(P,us.EventType.ERROR,(J=>{B||(B=!0,Ci(ht,`RPC '${e}' stream ${i} transport errored. Name:`,J.name,"Message:",J.message),$.a_(new te(W.UNAVAILABLE,"The operation could not be completed")))})),G(P,us.EventType.MESSAGE,(J=>{if(!B){const Z=J.data[0];De(!!Z,16349);const ye=Z,_e=ye?.error||ye[0]?.error;if(_e){ie(ht,`RPC '${e}' stream ${i} received error:`,_e);const Ne=_e.status;let wt=(function(C){const S=Qe[C];if(S!==void 0)return Bd(S)})(Ne),We=_e.message;wt===void 0&&(wt=W.INTERNAL,We="Unknown error status: "+Ne+" with message "+_e.message),B=!0,$.a_(new te(wt,We)),P.close()}else ie(ht,`RPC '${e}' stream ${i} received:`,Z),$.u_(Z)}})),G(p,sd.STAT_EVENT,(J=>{J.stat===dc.PROXY?ie(ht,`RPC '${e}' stream ${i} detected buffering proxy`):J.stat===dc.NOPROXY&&ie(ht,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{$.__()}),0),$}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function nc(){return typeof document<"u"?document:null}/**
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
 */function va(n){return new uv(n,!0)}/**
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
 */class rf{constructor(e,t,r=1e3,i=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&ie("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Hl="PersistentStream";class sf{constructor(e,t,r,i,a,u,p,_){this.Mi=e,this.S_=r,this.b_=i,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=p,this.listener=_,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new rf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Fn(t.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===t&&this.G_(r,i)}),(r=>{e((()=>{const i=new te(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ie(Hl,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ie(Hl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class oE extends sf{constructor(e,t,r,i,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,u),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=dv(this.serializer,e),r=(function(a){if(!("targetChange"in a))return ge.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?ge.min():u.readTime?dn(u.readTime):ge.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Ic(this.serializer),t.addTarget=(function(a,u){let p;const _=u.target;if(p=yc(_)?{documents:gv(a,_)}:{query:mv(a,_).ft},p.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){p.resumeToken=Wd(a,u.resumeToken);const v=Ec(a,u.expectedCount);v!==null&&(p.expectedCount=v)}else if(u.snapshotVersion.compareTo(ge.min())>0){p.readTime=Xo(a,u.snapshotVersion.toTimestamp());const v=Ec(a,u.expectedCount);v!==null&&(p.expectedCount=v)}return p})(this.serializer,e);const r=_v(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Ic(this.serializer),t.removeTarget=e,this.q_(t)}}class aE extends sf{constructor(e,t,r,i,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,u),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return De(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){De(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=pv(e.writeResults,e.commitTime),r=dn(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Ic(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>fv(this.serializer,r)))};this.q_(t)}}/**
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
 */class cE{}class uE extends cE{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new te(W.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Go(e,Tc(t,r),i,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new te(W.UNKNOWN,a.toString())}))}Ho(e,t,r,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,p])=>this.connection.Ho(e,Tc(t,r),i,u,p,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new te(W.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class lE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Fn(t),this.aa=!1):ie("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ur="RemoteStore";class hE{constructor(e,t,r,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo((u=>{r.enqueueAndForget((async()=>{qr(this)&&(ie(Ur,"Restarting streams for network reachability change."),await(async function(_){const v=me(_);v.Ea.add(4),await Bs(v),v.Ra.set("Unknown"),v.Ea.delete(4),await Ea(v)})(this))}))})),this.Ra=new lE(r,i)}}async function Ea(n){if(qr(n))for(const e of n.da)await e(!0)}async function Bs(n){for(const e of n.da)await e(!1)}function of(n,e){const t=me(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),au(t)?ou(t):ji(t).O_()&&su(t,e))}function iu(n,e){const t=me(n),r=ji(t);t.Ia.delete(e),r.O_()&&af(t,e),t.Ia.size===0&&(r.O_()?r.L_():qr(t)&&t.Ra.set("Unknown"))}function su(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ji(n).Y_(e)}function af(n,e){n.Va.Ue(e),ji(n).Z_(e)}function ou(n){n.Va=new sv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ji(n).start(),n.Ra.ua()}function au(n){return qr(n)&&!ji(n).x_()&&n.Ia.size>0}function qr(n){return me(n).Ea.size===0}function cf(n){n.Va=void 0}async function dE(n){n.Ra.set("Online")}async function fE(n){n.Ia.forEach(((e,t)=>{su(n,e)}))}async function pE(n,e){cf(n),au(n)?(n.Ra.ha(e),ou(n)):n.Ra.set("Unknown")}async function gE(n,e,t){if(n.Ra.set("Online"),e instanceof zd&&e.state===2&&e.cause)try{await(async function(i,a){const u=a.cause;for(const p of a.targetIds)i.Ia.has(p)&&(await i.remoteSyncer.rejectListen(p,u),i.Ia.delete(p),i.Va.removeTarget(p))})(n,e)}catch(r){ie(Ur,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zo(n,r)}else if(e instanceof Oo?n.Va.Ze(e):e instanceof Hd?n.Va.st(e):n.Va.tt(e),!t.isEqual(ge.min()))try{const r=await nf(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const p=a.Va.Tt(u);return p.targetChanges.forEach(((_,v)=>{if(_.resumeToken.approximateByteSize()>0){const w=a.Ia.get(v);w&&a.Ia.set(v,w.withResumeToken(_.resumeToken,u))}})),p.targetMismatches.forEach(((_,v)=>{const w=a.Ia.get(_);if(!w)return;a.Ia.set(_,w.withResumeToken(ut.EMPTY_BYTE_STRING,w.snapshotVersion)),af(a,_);const P=new tr(w.target,_,v,w.sequenceNumber);su(a,P)})),a.remoteSyncer.applyRemoteEvent(p)})(n,t)}catch(r){ie(Ur,"Failed to raise snapshot:",r),await Zo(n,r)}}async function Zo(n,e,t){if(!Fi(e))throw e;n.Ea.add(1),await Bs(n),n.Ra.set("Offline"),t||(t=()=>nf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ie(Ur,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ea(n)}))}function uf(n,e){return e().catch((t=>Zo(n,t,e)))}async function Ta(n){const e=me(n),t=dr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Bc;for(;mE(e);)try{const i=await Xv(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,yE(e,i)}catch(i){await Zo(e,i)}lf(e)&&hf(e)}function mE(n){return qr(n)&&n.Ta.length<10}function yE(n,e){n.Ta.push(e);const t=dr(n);t.O_()&&t.X_&&t.ea(e.mutations)}function lf(n){return qr(n)&&!dr(n).x_()&&n.Ta.length>0}function hf(n){dr(n).start()}async function _E(n){dr(n).ra()}async function vE(n){const e=dr(n);for(const t of n.Ta)e.ea(t.mutations)}async function EE(n,e,t){const r=n.Ta.shift(),i=Xc.from(r,e,t);await uf(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Ta(n)}async function TE(n,e){e&&dr(n).X_&&await(async function(r,i){if((function(u){return nv(u)&&u!==W.ABORTED})(i.code)){const a=r.Ta.shift();dr(r).B_(),await uf(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i))),await Ta(r)}})(n,e),lf(n)&&hf(n)}async function zl(n,e){const t=me(n);t.asyncQueue.verifyOperationInProgress(),ie(Ur,"RemoteStore received new credentials");const r=qr(t);t.Ea.add(3),await Bs(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ea(t)}async function wE(n,e){const t=me(n);e?(t.Ea.delete(2),await Ea(t)):e||(t.Ea.add(2),await Bs(t),t.Ra.set("Unknown"))}function ji(n){return n.ma||(n.ma=(function(t,r,i){const a=me(t);return a.sa(),new oE(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:dE.bind(null,n),t_:fE.bind(null,n),r_:pE.bind(null,n),H_:gE.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),au(n)?ou(n):n.Ra.set("Unknown")):(await n.ma.stop(),cf(n))}))),n.ma}function dr(n){return n.fa||(n.fa=(function(t,r,i){const a=me(t);return a.sa(),new aE(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:_E.bind(null,n),r_:TE.bind(null,n),ta:vE.bind(null,n),na:EE.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Ta(n)):(await n.fa.stop(),n.Ta.length>0&&(ie(Ur,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class cu{constructor(e,t,r,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,a){const u=Date.now()+r,p=new cu(e,t,u,i,a);return p.start(r),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uu(n,e){if(Fn("AsyncQueue",`${e}: ${n}`),Fi(n))return new te(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ii{static emptySet(e){return new Ii(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ae.comparator(t.key,r.key):(t,r)=>ae.comparator(t.key,r.key),this.keyedMap=ls(),this.sortedSet=new qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ii)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ii;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Wl{constructor(){this.ga=new qe(ae.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):he(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Di{constructor(e,t,r,i,a,u,p,_,v){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=p,this.excludesMetadataChanges=_,this.hasCachedResults=v}static fromInitialDocuments(e,t,r,i,a){const u=[];return t.forEach((p=>{u.push({type:0,doc:p})})),new Di(e,t,Ii.emptySet(t),u,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class IE{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class bE{constructor(){this.queries=Gl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=me(t),a=i.queries;i.queries=Gl(),a.forEach(((u,p)=>{for(const _ of p.Sa)_.onError(r)}))})(this,new te(W.ABORTED,"Firestore shutting down"))}}function Gl(){return new jr((n=>Pd(n)),pa)}async function df(n,e){const t=me(n);let r=3;const i=e.query;let a=t.queries.get(i);a?!a.ba()&&e.Da()&&(r=2):(a=new IE,r=e.Da()?0:1);try{switch(r){case 0:a.wa=await t.onListen(i,!0);break;case 1:a.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(u){const p=uu(u,`Initialization of query '${gi(e.query)}' failed`);return void e.onError(p)}t.queries.set(i,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&lu(t)}async function ff(n,e){const t=me(n),r=e.query;let i=3;const a=t.queries.get(r);if(a){const u=a.Sa.indexOf(e);u>=0&&(a.Sa.splice(u,1),a.Sa.length===0?i=e.Da()?0:1:!a.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function AE(n,e){const t=me(n);let r=!1;for(const i of e){const a=i.query,u=t.queries.get(a);if(u){for(const p of u.Sa)p.Fa(i)&&(r=!0);u.wa=i}}r&&lu(t)}function SE(n,e,t){const r=me(n),i=r.queries.get(e);if(i)for(const a of i.Sa)a.onError(t);r.queries.delete(e)}function lu(n){n.Ca.forEach((e=>{e.next()}))}var Sc,Kl;(Kl=Sc||(Sc={})).Ma="default",Kl.Cache="cache";class pf{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Di(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Sc.Cache}}/**
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
 */class gf{constructor(e){this.key=e}}class mf{constructor(e){this.key=e}}class CE{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Re(),this.mutatedKeys=Re(),this.eu=kd(e),this.tu=new Ii(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Wl,i=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,u=i,p=!1;const _=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,v=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((w,P)=>{const k=i.get(w),B=ga(this.query,P)?P:null,$=!!k&&this.mutatedKeys.has(k.key),G=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let J=!1;k&&B?k.data.isEqual(B.data)?$!==G&&(r.track({type:3,doc:B}),J=!0):this.su(k,B)||(r.track({type:2,doc:B}),J=!0,(_&&this.eu(B,_)>0||v&&this.eu(B,v)<0)&&(p=!0)):!k&&B?(r.track({type:0,doc:B}),J=!0):k&&!B&&(r.track({type:1,doc:k}),J=!0,(_||v)&&(p=!0)),J&&(B?(u=u.add(B),a=G?a.add(w):a.delete(w)):(u=u.delete(w),a=a.delete(w)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const w=this.query.limitType==="F"?u.last():u.first();u=u.delete(w.key),a=a.delete(w.key),r.track({type:1,doc:w})}return{tu:u,iu:r,Cs:p,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const u=e.iu.ya();u.sort(((w,P)=>(function(B,$){const G=J=>{switch(J){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he(20277,{Rt:J})}};return G(B)-G($)})(w.type,P.type)||this.eu(w.doc,P.doc))),this.ou(r),i=i??!1;const p=t&&!i?this._u():[],_=this.Xa.size===0&&this.current&&!i?1:0,v=_!==this.Za;return this.Za=_,u.length!==0||v?{snapshot:new Di(this.query,e.tu,a,u,e.mutatedKeys,_===0,v,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Wl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Re(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new mf(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new gf(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=Re();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Di.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const hu="SyncEngine";class RE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class PE{constructor(e){this.key=e,this.hu=!1}}class kE{constructor(e,t,r,i,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new jr((p=>Pd(p)),pa),this.Iu=new Map,this.Eu=new Set,this.du=new qe(ae.comparator),this.Au=new Map,this.Ru=new eu,this.Vu={},this.mu=new Map,this.fu=xi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function xE(n,e,t=!0){const r=wf(n);let i;const a=r.Tu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await yf(r,e,t,!0),i}async function DE(n,e){const t=wf(n);await yf(t,e,!0,!1)}async function yf(n,e,t,r){const i=await Jv(n.localStore,hn(e)),a=i.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let p;return r&&(p=await NE(n,e,a,u==="current",i.resumeToken)),n.isPrimaryClient&&t&&of(n.remoteStore,i),p}async function NE(n,e,t,r,i){n.pu=(P,k,B)=>(async function(G,J,Z,ye){let _e=J.view.ru(Z);_e.Cs&&(_e=await jl(G.localStore,J.query,!1).then((({documents:l})=>J.view.ru(l,_e))));const Ne=ye&&ye.targetChanges.get(J.targetId),wt=ye&&ye.targetMismatches.get(J.targetId)!=null,We=J.view.applyChanges(_e,G.isPrimaryClient,Ne,wt);return Yl(G,J.targetId,We.au),We.snapshot})(n,P,k,B);const a=await jl(n.localStore,e,!0),u=new CE(e,a.Qs),p=u.ru(a.documents),_=$s.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),v=u.applyChanges(p,n.isPrimaryClient,_);Yl(n,t,v.au);const w=new RE(e,t,u);return n.Tu.set(e,w),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),v.snapshot}async function VE(n,e,t){const r=me(n),i=r.Tu.get(e),a=r.Iu.get(i.targetId);if(a.length>1)return r.Iu.set(i.targetId,a.filter((u=>!pa(u,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await bc(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&iu(r.remoteStore,i.targetId),Cc(r,i.targetId)})).catch(Li)):(Cc(r,i.targetId),await bc(r.localStore,i.targetId,!0))}async function OE(n,e){const t=me(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),iu(t.remoteStore,r.targetId))}async function ME(n,e,t){const r=BE(n);try{const i=await(function(u,p){const _=me(u),v=je.now(),w=p.reduce(((B,$)=>B.add($.key)),Re());let P,k;return _.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let $=Un(),G=Re();return _.Ns.getEntries(B,w).next((J=>{$=J,$.forEach(((Z,ye)=>{ye.isValidDocument()||(G=G.add(Z))}))})).next((()=>_.localDocuments.getOverlayedDocuments(B,$))).next((J=>{P=J;const Z=[];for(const ye of p){const _e=X_(ye,P.get(ye.key).overlayedDocument);_e!=null&&Z.push(new mr(ye.key,_e,Td(_e.value.mapValue),Kt.exists(!0)))}return _.mutationQueue.addMutationBatch(B,v,Z,p)})).next((J=>{k=J;const Z=J.applyToLocalDocumentSet(P,G);return _.documentOverlayCache.saveOverlays(B,J.batchId,Z)}))})).then((()=>({batchId:k.batchId,changes:Dd(P)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(u,p,_){let v=u.Vu[u.currentUser.toKey()];v||(v=new qe(Ce)),v=v.insert(p,_),u.Vu[u.currentUser.toKey()]=v})(r,i.batchId,t),await Hs(r,i.changes),await Ta(r.remoteStore)}catch(i){const a=uu(i,"Failed to persist write");t.reject(a)}}async function _f(n,e){const t=me(n);try{const r=await Qv(t.localStore,e);e.targetChanges.forEach(((i,a)=>{const u=t.Au.get(a);u&&(De(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?u.hu=!0:i.modifiedDocuments.size>0?De(u.hu,14607):i.removedDocuments.size>0&&(De(u.hu,42227),u.hu=!1))})),await Hs(t,r,e)}catch(r){await Li(r)}}function Ql(n,e,t){const r=me(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach(((a,u)=>{const p=u.view.va(e);p.snapshot&&i.push(p.snapshot)})),(function(u,p){const _=me(u);_.onlineState=p;let v=!1;_.queries.forEach(((w,P)=>{for(const k of P.Sa)k.va(p)&&(v=!0)})),v&&lu(_)})(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LE(n,e,t){const r=me(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),a=i&&i.key;if(a){let u=new qe(ae.comparator);u=u.insert(a,ft.newNoDocument(a,ge.min()));const p=Re().add(a),_=new _a(ge.min(),new Map,new qe(Ce),u,p);await _f(r,_),r.du=r.du.remove(a),r.Au.delete(e),du(r)}else await bc(r.localStore,e,!1).then((()=>Cc(r,e,t))).catch(Li)}async function FE(n,e){const t=me(n),r=e.batch.batchId;try{const i=await Kv(t.localStore,e);Ef(t,r,null),vf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Hs(t,i)}catch(i){await Li(i)}}async function UE(n,e,t){const r=me(n);try{const i=await(function(u,p){const _=me(u);return _.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let w;return _.mutationQueue.lookupMutationBatch(v,p).next((P=>(De(P!==null,37113),w=P.keys(),_.mutationQueue.removeMutationBatch(v,P)))).next((()=>_.mutationQueue.performConsistencyCheck(v))).next((()=>_.documentOverlayCache.removeOverlaysForBatchId(v,w,p))).next((()=>_.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w))).next((()=>_.localDocuments.getDocuments(v,w)))}))})(r.localStore,e);Ef(r,e,t),vf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Hs(r,i)}catch(i){await Li(i)}}function vf(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Ef(n,e,t){const r=me(n);let i=r.Vu[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(t?a.reject(t):a.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Cc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||Tf(n,r)}))}function Tf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(iu(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),du(n))}function Yl(n,e,t){for(const r of t)r instanceof gf?(n.Ru.addReference(r.key,e),jE(n,r)):r instanceof mf?(ie(hu,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Tf(n,r.key)):he(19791,{wu:r})}function jE(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(ie(hu,"New document in limbo: "+t),n.Eu.add(r),du(n))}function du(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new ae(Le.fromString(e)),r=n.fu.next();n.Au.set(r,new PE(t)),n.du=n.du.insert(t,r),of(n.remoteStore,new tr(hn(Kc(t.path)),r,"TargetPurposeLimboResolution",ha.ce))}}async function Hs(n,e,t){const r=me(n),i=[],a=[],u=[];r.Tu.isEmpty()||(r.Tu.forEach(((p,_)=>{u.push(r.pu(_,e,t).then((v=>{if((v||t)&&r.isPrimaryClient){const w=v?!v.fromCache:t?.targetChanges.get(_.targetId)?.current;r.sharedClientState.updateQueryState(_.targetId,w?"current":"not-current")}if(v){i.push(v);const w=nu.As(_.targetId,v);a.push(w)}})))})),await Promise.all(u),r.Pu.H_(i),await(async function(_,v){const w=me(_);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(P=>K.forEach(v,(k=>K.forEach(k.Es,(B=>w.persistence.referenceDelegate.addReference(P,k.targetId,B))).next((()=>K.forEach(k.ds,(B=>w.persistence.referenceDelegate.removeReference(P,k.targetId,B)))))))))}catch(P){if(!Fi(P))throw P;ie(ru,"Failed to update sequence numbers: "+P)}for(const P of v){const k=P.targetId;if(!P.fromCache){const B=w.Ms.get(k),$=B.snapshotVersion,G=B.withLastLimboFreeSnapshotVersion($);w.Ms=w.Ms.insert(k,G)}}})(r.localStore,a))}async function qE(n,e){const t=me(n);if(!t.currentUser.isEqual(e)){ie(hu,"User change. New user:",e.toKey());const r=await tf(t.localStore,e);t.currentUser=e,(function(a,u){a.mu.forEach((p=>{p.forEach((_=>{_.reject(new te(W.CANCELLED,u))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Hs(t,r.Ls)}}function $E(n,e){const t=me(n),r=t.Au.get(e);if(r&&r.hu)return Re().add(r.key);{let i=Re();const a=t.Iu.get(e);if(!a)return i;for(const u of a){const p=t.Tu.get(u);i=i.unionWith(p.view.nu)}return i}}function wf(n){const e=me(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=_f.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$E.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LE.bind(null,e),e.Pu.H_=AE.bind(null,e.eventManager),e.Pu.yu=SE.bind(null,e.eventManager),e}function BE(n){const e=me(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UE.bind(null,e),e}class ea{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=va(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Gv(this.persistence,new Hv,e.initialUser,this.serializer)}Cu(e){return new ef(tu.mi,this.serializer)}Du(e){return new eE}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ea.provider={build:()=>new ea};class HE extends ea{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){De(this.persistence.referenceDelegate instanceof Jo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Pv(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new ef((r=>Jo.mi(r,t)),this.serializer)}}class Rc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ql(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qE.bind(null,this.syncEngine),await wE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new bE})()}createDatastore(e){const t=va(e.databaseInfo.databaseId),r=(function(a){return new sE(a)})(e.databaseInfo);return(function(a,u,p,_){return new uE(a,u,p,_)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,a,u,p){return new hE(r,i,a,u,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ql(this.syncEngine,t,0)),(function(){return Bl.v()?new Bl:new tE})())}createSyncEngine(e,t){return(function(i,a,u,p,_,v,w){const P=new kE(i,a,u,p,_,v);return w&&(P.gu=!0),P})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=me(t);ie(Ur,"RemoteStore shutting down."),r.Ea.add(5),await Bs(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Rc.provider={build:()=>new Rc};/**
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
 */class If{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const fr="FirestoreClient";class zE{constructor(e,t,r,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=$c.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{ie(fr,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(ie(fr,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=uu(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function rc(n,e){n.asyncQueue.verifyOperationInProgress(),ie(fr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await tf(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Xl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await WE(n);ie(fr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>zl(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>zl(e.remoteStore,i))),n._onlineComponents=e}async function WE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ie(fr,"Using user provided OfflineComponentProvider");try{await rc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Ci("Error using user provided cache. Falling back to memory cache: "+t),await rc(n,new ea)}}else ie(fr,"Using default OfflineComponentProvider"),await rc(n,new HE(void 0));return n._offlineComponents}async function bf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ie(fr,"Using user provided OnlineComponentProvider"),await Xl(n,n._uninitializedComponentsProvider._online)):(ie(fr,"Using default OnlineComponentProvider"),await Xl(n,new Rc))),n._onlineComponents}function GE(n){return bf(n).then((e=>e.syncEngine))}async function Af(n){const e=await bf(n),t=e.eventManager;return t.onListen=xE.bind(null,e.syncEngine),t.onUnlisten=VE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=DE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=OE.bind(null,e.syncEngine),t}function KE(n,e,t={}){const r=new On;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,p,_,v){const w=new If({next:k=>{w.Nu(),u.enqueueAndForget((()=>ff(a,P)));const B=k.docs.has(p);!B&&k.fromCache?v.reject(new te(W.UNAVAILABLE,"Failed to get document because the client is offline.")):B&&k.fromCache&&_&&_.source==="server"?v.reject(new te(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(k)},error:k=>v.reject(k)}),P=new pf(Kc(p.path),w,{includeMetadataChanges:!0,qa:!0});return df(a,P)})(await Af(n),n.asyncQueue,e,t,r))),r.promise}function QE(n,e,t={}){const r=new On;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,p,_,v){const w=new If({next:k=>{w.Nu(),u.enqueueAndForget((()=>ff(a,P))),k.fromCache&&_.source==="server"?v.reject(new te(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(k)},error:k=>v.reject(k)}),P=new pf(p,w,{includeMetadataChanges:!0,qa:!0});return df(a,P)})(await Af(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function Sf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Jl=new Map;/**
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
 */const Cf="firestore.googleapis.com",Zl=!0;class eh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new te(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cf,this.ssl=Zl}else this.host=e.host,this.ssl=e.ssl??Zl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Zd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Cv)throw new te(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}d_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sf(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new te(W.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new te(W.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new te(W.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wa{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new n_;switch(r.type){case"firstParty":return new o_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Jl.get(t);r&&(ie("ComponentProvider","Removing Datastore"),Jl.delete(t),r.terminate())})(this),Promise.resolve()}}function YE(n,e,t,r={}){n=gn(n,wa);const i=Ni(e),a=n._getSettings(),u={...a,emulatorOptions:n._getEmulatorOptions()},p=`${e}:${t}`;i&&(fh(`https://${p}`),ph("Firestore",!0)),a.host!==Cf&&a.host!==p&&Ci("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...a,host:p,ssl:i,emulatorOptions:r};if(!Vr(_,u)&&(n._setSettings(_),r.mockUserToken)){let v,w;if(typeof r.mockUserToken=="string")v=r.mockUserToken,w=dt.MOCK_USER;else{v=op(r.mockUserToken,n._app?.options.projectId);const P=r.mockUserToken.sub||r.mockUserToken.user_id;if(!P)throw new te(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new dt(P)}n._authCredentials=new r_(new ud(v,w))}}/**
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
 */class $r{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $r(this.firestore,e,this._query)}}class ze{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}toJSON(){return{type:ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(js(t,ze._jsonSchema))return new ze(e,r||null,new ae(Le.fromString(t.referencePath)))}}ze._jsonSchemaVersion="firestore/documentReference/1.0",ze._jsonSchema={type:Xe("string",ze._jsonSchemaVersion),referencePath:Xe("string")};class ar extends $r{constructor(e,t,r){super(e,t,Kc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new ae(e))}withConverter(e){return new ar(this.firestore,e,this._path)}}function Ds(n,e,...t){if(n=Je(n),ld("collection","path",e),n instanceof wa){const r=Le.fromString(e,...t);return fl(r),new ar(n,null,r)}{if(!(n instanceof ze||n instanceof ar))throw new te(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Le.fromString(e,...t));return fl(r),new ar(n.firestore,null,r)}}function Nn(n,e,...t){if(n=Je(n),arguments.length===1&&(e=$c.newId()),ld("doc","path",e),n instanceof wa){const r=Le.fromString(e,...t);return dl(r),new ze(n,null,new ae(r))}{if(!(n instanceof ze||n instanceof ar))throw new te(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Le.fromString(e,...t));return dl(r),new ze(n.firestore,n instanceof ar?n.converter:null,new ae(r))}}/**
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
 */const th="AsyncQueue";class nh{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new rf(this,"async_queue_retry"),this._c=()=>{const r=nc();r&&ie(th,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=nc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=nc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new On;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Fi(e))throw e;ie(th,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Fn("INTERNAL UNHANDLED ERROR: ",rh(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=cu.createAndSchedule(this,e,t,r,(a=>this.hc(a)));return this.tc.push(i),i}uc(){this.nc&&he(47125,{Pc:rh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function rh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class qi extends wa{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new nh,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new nh(e),this._firestoreClient=void 0,await e}}}function XE(n,e){const t=typeof n=="object"?n:_h(),r=typeof n=="string"?n:Ko,i=Dc(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=ip("firestore");a&&YE(i,...a)}return i}function fu(n){if(n._terminated)throw new te(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||JE(n),n._firestoreClient}function JE(n){const e=n._freezeSettings(),t=(function(i,a,u,p){return new I_(i,a,u,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Sf(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new zE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(i){const a=i?._online.build();return{_offline:i?._offline.build(a),_online:a}})(n._componentsProvider))}/**
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
 */class $t{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $t(ut.fromBase64String(e))}catch(t){throw new te(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new $t(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:$t._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(js(e,$t._jsonSchema))return $t.fromBase64String(e.bytes)}}$t._jsonSchemaVersion="firestore/bytes/1.0",$t._jsonSchema={type:Xe("string",$t._jsonSchemaVersion),bytes:Xe("string")};/**
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
 */class Ia{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zs{constructor(e){this._methodName=e}}/**
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
 */class fn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:fn._jsonSchemaVersion}}static fromJSON(e){if(js(e,fn._jsonSchema))return new fn(e.latitude,e.longitude)}}fn._jsonSchemaVersion="firestore/geoPoint/1.0",fn._jsonSchema={type:Xe("string",fn._jsonSchemaVersion),latitude:Xe("number"),longitude:Xe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:pn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(js(e,pn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new pn(e.vectorValues);throw new te(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pn._jsonSchemaVersion="firestore/vectorValue/1.0",pn._jsonSchema={type:Xe("string",pn._jsonSchemaVersion),vectorValues:Xe("object")};/**
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
 */const ZE=/^__.*__$/;class eT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new mr(e,this.data,this.fieldMask,t,this.fieldTransforms):new qs(e,this.data,t,this.fieldTransforms)}}class Rf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new mr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Pf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he(40011,{Ac:n})}}class pu{constructor(e,t,r,i,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new pu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ta(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Pf(this.Ac)&&ZE.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class tT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||va(e)}Cc(e,t,r,i=!1){return new pu({Ac:e,methodName:t,Dc:r,path:ct.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gu(n){const e=n._freezeSettings(),t=va(n._databaseId);return new tT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function nT(n,e,t,r,i,a={}){const u=n.Cc(a.merge||a.mergeFields?2:0,e,t,i);_u("Data must be an object, but it was:",u,r);const p=kf(r,u);let _,v;if(a.merge)_=new xt(u.fieldMask),v=u.fieldTransforms;else if(a.mergeFields){const w=[];for(const P of a.mergeFields){const k=Pc(e,P,t);if(!u.contains(k))throw new te(W.INVALID_ARGUMENT,`Field '${k}' is specified in your field mask but missing from your input data.`);Df(w,k)||w.push(k)}_=new xt(w),v=u.fieldTransforms.filter((P=>_.covers(P.field)))}else _=null,v=u.fieldTransforms;return new eT(new Ct(p),_,v)}class ba extends zs{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ba}}class mu extends zs{_toFieldTransform(e){return new jd(e.path,new Rs)}isEqual(e){return e instanceof mu}}class yu extends zs{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new xs(e.serializer,Od(e.serializer,this.Fc));return new jd(e.path,t)}isEqual(e){return e instanceof yu&&this.Fc===e.Fc}}function rT(n,e,t,r){const i=n.Cc(1,e,t);_u("Data must be an object, but it was:",i,r);const a=[],u=Ct.empty();gr(r,((_,v)=>{const w=vu(e,_,t);v=Je(v);const P=i.yc(w);if(v instanceof ba)a.push(w);else{const k=Ws(v,P);k!=null&&(a.push(w),u.set(w,k))}}));const p=new xt(a);return new Rf(u,p,i.fieldTransforms)}function iT(n,e,t,r,i,a){const u=n.Cc(1,e,t),p=[Pc(e,r,t)],_=[i];if(a.length%2!=0)throw new te(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let k=0;k<a.length;k+=2)p.push(Pc(e,a[k])),_.push(a[k+1]);const v=[],w=Ct.empty();for(let k=p.length-1;k>=0;--k)if(!Df(v,p[k])){const B=p[k];let $=_[k];$=Je($);const G=u.yc(B);if($ instanceof ba)v.push(B);else{const J=Ws($,G);J!=null&&(v.push(B),w.set(B,J))}}const P=new xt(v);return new Rf(w,P,u.fieldTransforms)}function sT(n,e,t,r=!1){return Ws(t,n.Cc(r?4:3,e))}function Ws(n,e){if(xf(n=Je(n)))return _u("Unsupported field value:",e,n),kf(n,e);if(n instanceof zs)return(function(r,i){if(!Pf(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,i){const a=[];let u=0;for(const p of r){let _=Ws(p,i.wc(u));_==null&&(_={nullValue:"NULL_VALUE"}),a.push(_),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,i){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Od(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=je.fromDate(r);return{timestampValue:Xo(i.serializer,a)}}if(r instanceof je){const a=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xo(i.serializer,a)}}if(r instanceof fn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $t)return{bytesValue:Wd(i.serializer,r._byteString)};if(r instanceof ze){const a=i.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw i.Sc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Zc(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof pn)return(function(u,p){return{mapValue:{fields:{[vd]:{stringValue:Ed},[Qo]:{arrayValue:{values:u.toArray().map((v=>{if(typeof v!="number")throw p.Sc("VectorValues must only contain numeric values.");return Qc(p.serializer,v)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${la(r)}`)})(n,e)}function kf(n,e){const t={};return fd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gr(n,((r,i)=>{const a=Ws(i,e.mc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function xf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof je||n instanceof fn||n instanceof $t||n instanceof ze||n instanceof zs||n instanceof pn)}function _u(n,e,t){if(!xf(t)||!hd(t)){const r=la(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function Pc(n,e,t){if((e=Je(e))instanceof Ia)return e._internalPath;if(typeof e=="string")return vu(n,e);throw ta("Field path arguments must be of type string or ",n,!1,void 0,t)}const oT=new RegExp("[~\\*/\\[\\]]");function vu(n,e,t){if(e.search(oT)>=0)throw ta(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ia(...e.split("."))._internalPath}catch{throw ta(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ta(n,e,t,r,i){const a=r&&!r.isEmpty(),u=i!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let _="";return(a||u)&&(_+=" (found",a&&(_+=` in field ${r}`),u&&(_+=` in document ${i}`),_+=")"),new te(W.INVALID_ARGUMENT,p+n+_)}function Df(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class Nf{constructor(e,t,r,i,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Aa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class aT extends Nf{data(){return super.data()}}function Aa(n,e){return typeof e=="string"?vu(n,e):e instanceof Ia?e._internalPath:e._delegate._internalPath}/**
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
 */function cT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new te(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Eu{}class Vf extends Eu{}function Ns(n,e,...t){let r=[];e instanceof Eu&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((_=>_ instanceof Tu)).length,p=a.filter((_=>_ instanceof Sa)).length;if(u>1||u>0&&p>0)throw new te(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class Sa extends Vf{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Sa(e,t,r)}_apply(e){const t=this._parse(e);return Of(e._query,t),new $r(e.firestore,e.converter,_c(e._query,t))}_parse(e){const t=gu(e.firestore);return(function(a,u,p,_,v,w,P){let k;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new te(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){oh(P,w);const $=[];for(const G of P)$.push(sh(_,a,G));k={arrayValue:{values:$}}}else k=sh(_,a,P)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||oh(P,w),k=sT(p,u,P,w==="in"||w==="not-in");return Ye.create(v,w,k)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function na(n,e,t){const r=e,i=Aa("where",n);return Sa._create(i,r,t)}class Tu extends Eu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Tu(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Yt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,a){let u=i;const p=a.getFlattenedFilters();for(const _ of p)Of(u,_),u=_c(u,_)})(e._query,t),new $r(e.firestore,e.converter,_c(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wu extends Vf{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new wu(e,t)}_apply(e){const t=(function(i,a,u){if(i.startAt!==null)throw new te(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new te(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Cs(a,u)})(e._query,this._field,this._direction);return new $r(e.firestore,e.converter,(function(i,a){const u=i.explicitOrderBy.concat([a]);return new Ui(i.path,i.collectionGroup,u,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(e._query,t))}}function ih(n,e="asc"){const t=e,r=Aa("orderBy",n);return wu._create(r,t)}function sh(n,e,t){if(typeof(t=Je(t))=="string"){if(t==="")throw new te(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Rd(e)&&t.indexOf("/")!==-1)throw new te(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Le.fromString(t));if(!ae.isDocumentKey(r))throw new te(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Tl(n,new ae(r))}if(t instanceof ze)return Tl(n,t._key);throw new te(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${la(t)}.`)}function oh(n,e){if(!Array.isArray(n)||n.length===0)throw new te(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Of(n,e){const t=(function(i,a){for(const u of i)for(const p of u.getFlattenedFilters())if(a.indexOf(p.op)>=0)return p.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new te(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class uT{convertValue(e,t="none"){switch(hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw he(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return gr(e,((i,a)=>{r[i]=this.convertValue(a,t)})),r}convertVectorValue(e){const t=e.fields?.[Qo].arrayValue?.values?.map((r=>He(r.doubleValue)));return new pn(t)}convertGeoPoint(e){return new fn(He(e.latitude),He(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=fa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(bs(e));default:return null}}convertTimestamp(e){const t=ur(e);return new je(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Le.fromString(e);De(Jd(r),9688,{name:e});const i=new As(r.get(1),r.get(3)),a=new ae(r.popFirst(5));return i.isEqual(t)||Fn(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function lT(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ds{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Nr extends Nf{constructor(e,t,r,i,a,u){super(e,t,r,i,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Aa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Nr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Nr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Nr._jsonSchema={type:Xe("string",Nr._jsonSchemaVersion),bundleSource:Xe("string","DocumentSnapshot"),bundleName:Xe("string"),bundle:Xe("string")};class Mo extends Nr{data(e={}){return super.data(e)}}class bi{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ds(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Mo(this._firestore,this._userDataWriter,r.key,r,new ds(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,a){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map((p=>{const _=new Mo(i._firestore,i._userDataWriter,p.doc.key,p.doc,new ds(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);return p.doc,{type:"added",doc:_,oldIndex:-1,newIndex:u++}}))}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((p=>a||p.type!==3)).map((p=>{const _=new Mo(i._firestore,i._userDataWriter,p.doc.key,p.doc,new ds(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);let v=-1,w=-1;return p.type!==0&&(v=u.indexOf(p.doc.key),u=u.delete(p.doc.key)),p.type!==1&&(u=u.add(p.doc),w=u.indexOf(p.doc.key)),{type:hT(p.type),doc:_,oldIndex:v,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=bi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$c.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function hT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he(61501,{type:n})}}/**
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
 */function vs(n){n=gn(n,ze);const e=gn(n.firestore,qi);return KE(fu(e),n._key).then((t=>pT(e,n,t)))}bi._jsonSchemaVersion="firestore/querySnapshot/1.0",bi._jsonSchema={type:Xe("string",bi._jsonSchemaVersion),bundleSource:Xe("string","QuerySnapshot"),bundleName:Xe("string"),bundle:Xe("string")};class Mf extends uT{constructor(e){super(),this.firestore=e}convertBytes(e){return new $t(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,t)}}function ra(n){n=gn(n,$r);const e=gn(n.firestore,qi),t=fu(e),r=new Mf(e);return cT(n._query),QE(t,n._query).then((i=>new bi(e,r,n,i)))}function Lf(n,e,t){n=gn(n,ze);const r=gn(n.firestore,qi),i=lT(n.converter,e,t);return Iu(r,[nT(gu(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Kt.none())])}function dT(n,e,t,...r){n=gn(n,ze);const i=gn(n.firestore,qi),a=gu(i);let u;return u=typeof(e=Je(e))=="string"||e instanceof Ia?iT(a,"updateDoc",n._key,e,t,r):rT(a,"updateDoc",n._key,e),Iu(i,[u.toMutation(n._key,Kt.exists(!0))])}function fT(n){return Iu(gn(n.firestore,qi),[new Yc(n._key,Kt.none())])}function Iu(n,e){return(function(r,i){const a=new On;return r.asyncQueue.enqueueAndForget((async()=>ME(await GE(r),i,a))),a.promise})(fu(n),e)}function pT(n,e,t){const r=t.docs.get(e._key),i=new Mf(n);return new Nr(n,i,e._key,r,new ds(t.hasPendingWrites,t.fromCache),e.converter)}function Ff(){return new mu("serverTimestamp")}function gT(n){return new yu("increment",n)}(function(e,t=!0){(function(i){Mi=i})(Vi),Ai(new Or("firestore",((r,{instanceIdentifier:i,options:a})=>{const u=r.getProvider("app").getImmediate(),p=new qi(new i_(r.getProvider("auth-internal")),new a_(u,r.getProvider("app-check-internal")),(function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new te(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new As(v.options.projectId,w)})(u,i),u);return a={useFetchStreams:t,...a},p._setSettings(a),p}),"PUBLIC").setMultipleInstances(!0)),sr(cl,ul,e),sr(cl,ul,"esm2020")})();const mT={apiKey:"AIzaSyDtT9zxd8bNzYlriGKUvotz96J0NZ75GuU",authDomain:"wituto.firebaseapp.com",projectId:"wituto",storageBucket:"wituto.firebasestorage.app",messagingSenderId:"164180756800",appId:"1:164180756800:web:a5888f963443ceb8ef92a5"},Uf=yh(mT),Es=e_(Uf),St=XE(Uf),yT=n=>{const e=Y(`#${n}`);if(!e.length)return console.warn(`Modal #${n} no existe`);e.addClass("active"),Y("body").addClass("modal-open"),setTimeout(()=>{e.find("input,select,textarea,button").filter(":visible:first").trigger("focus")},20)},_T=n=>{Y(`#${n}`).removeClass("active"),Y(".modal.active").length||Y("body").removeClass("modal-open")},Lo=()=>{Y(".modal").removeClass("active"),Y("body").removeClass("modal-open")};window.abrirModal=yT;window.cerrarModal=_T;window.cerrarTodos=Lo;(()=>{const n=".modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.modal.active{display:flex}@keyframes mfade{from{opacity:0}to{opacity:1}}.modal{animation:mfade .25s ease}body.modal-open{overflow:hidden}.modal-content{background:var(--F);border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mpop .22s ease}@keyframes mpop{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.authModals .modal-content{max-width:430px;padding:0;border:0;position:relative}.authModals .modal-header{border:0;padding:12px;position:absolute;right:0;z-index:10}.authModals .close-modal,.close-modal{background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15)}.authModals .close-modal:hover,.close-modal:hover{transform:scale(1.08);opacity:.95}.auth-form{padding:0 36px 32px;display:flex;flex-direction:column;align-items:center}.auth-logo{width:76px;height:76px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:34px 0 8px;box-shadow:0 6px 18px var(--bxs)}.auth-logo img{width:100%;height:auto}.auth-title{font:700 1.6rem var(--ff_P);color:var(--mco);margin:4px 0 18px;text-align:center}.auth-title span{color:#ffe800}.auth-text{color:var(--tx);font-size:.92rem;margin:12px 0 4px;align-self:flex-start}#loginForm,#registroForm,#recuperarForm{width:100%;display:flex;flex-direction:column;gap:12px}.form-group{width:100%;position:relative}.input-icon{position:relative;display:flex;align-items:center}.input-icon i{position:absolute;left:14px;color:var(--mco);opacity:.75;transition:.25s}.input-icon .togglePass{left:auto;right:12px;cursor:pointer;color:#a8a8a8}.input-icon input{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.input-icon input::placeholder{color:var(--txe);opacity:.7}.form-check{display:flex;align-items:center;gap:8px;margin:6px 0}.form-check input[type=checkbox]{width:16px;height:16px;accent-color:var(--mco)}.btn-auth{width:100%;padding:13px 14px;background:var(--mco);color:var(--txa);border:0;border-radius:10px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px var(--bxs);transition:transform .15s,box-shadow .15s,background .15s}.btn-auth:hover{background:var(--hva);transform:translateY(-1px)}.btn-auth.loading{opacity:.85;cursor:not-allowed;pointer-events:none}.btn-auth.loading i{margin-right:6px}.inactivo{opacity:.75}.auth-links{width:100%;display:flex;justify-content:space-between;margin-top:12px;flex-wrap:wrap}.auth-links span{color:var(--mco);cursor:pointer;padding:6px 0;font-size:.95rem}.auth-links span:hover{color:var(--hv);text-decoration:underline}#registroModal #registroForm{display:grid;grid-template-columns:1fr 1fr;gap:12px}#registroModal .modal-content{max-width:568px}@media (max-width:576px){.auth-form{padding:0 20px 24px}.auth-title{font-size:1.4rem}.auth-logo{width:70px;height:70px;margin-top:26px}#registroModal #registroForm{display:flex;flex-direction:column}}#recuperarModal *:not(i),#registroModal *:not(i),#loginModal *:not(i){font-family:'Poppins',segoe ui}.btn-auth i{color:var(--F)}",e=Y(".wiModalCss");e.length?e.text(n):Y("head").append(`<style class="wiModalCss">${n}</style>`),Y(document).off(".wimodal").on("click.wimodal",".close-modal",Lo).on("click.wimodal",".modal",t=>{Y(t.target).is(".modal")&&Lo()}).on("keydown.wimodal",t=>{t.key==="Escape"&&Lo()})})();(()=>{const n=[["Cielo","#0EBEFF"],["Dulce","#FF5C69"],["Paz","#29C72E"],["Mora","#7000FF"],["Futuro","#21273B"]],e=r=>{const[i,a]=Y(r).data("tema").split("|");Y("html").attr("data-theme",i),(Y('meta[name="theme-color"]')[0]||Y('<meta name="theme-color">').appendTo("head")[0]).content=a,nr("wiTema",`${i}|${a}`,720),Y(".mtha").removeClass("mtha"),Y(r).addClass("mtha")},t=()=>{Y(".witemas").html(n.map(([a,u])=>`<div class="tema" data-tema="${a}|${u}" style="background:${u}"></div>`).join(""));const r=Gs("wiTema"),i=Y(`[data-tema="${r}"]`)[0]||Y(".tema").first()[0];i&&e(i),Y(document).off("click.witema").on("click.witema",".tema",a=>e(a.currentTarget))};return Y(".witemas").length?t():new MutationObserver(r=>r.some(({addedNodes:i})=>[...i].some(a=>a.querySelector?.(".witemas")))&&(t(),!0)).observe(document.body,{childList:1,subtree:1}),{set:e}})();const kn=(n,e=!0,t="")=>{const r=Y(n);if(e){const i=t||r.text().trim();r.data("txt",i).prop("disabled",!0).html(`${i} <i class="fas fa-spinner fa-spin"></i>`)}else r.prop("disabled",!1).text(r.data("txt")||t||"Continuar")},vT=n=>{const e="smile.html";window.location.href=new URL(e,window.location.href).toString()},jt=(n,e="success")=>{Y(".alert-box").remove();const t={error:{bg:"#FFE8E6",txt:"#D32F2F",border:"#FFCDD2",icon:"fa-circle-exclamation"},success:{bg:"#E8F5E9",txt:"#2E7D32",border:"#C8E6C9",icon:"fa-circle-check"}},{bg:r,txt:i,border:a,icon:u}=t[e]||t.error,p=Y(`
        <div class="alert-box" style="
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 15px 20px;
            border-radius: 8px;
            background: ${r};
            color: ${i};
            border-left: 4px solid ${a};
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 300px;
            max-width: 90%;
            
        ">
            <i class="fas ${u}"></i>
            <span>${n}</span>
        </div>
    `).appendTo("body").hide().fadeIn(300);setTimeout(()=>p.fadeOut(300,()=>p.remove()),3e3)};function nr(n,e,t){try{localStorage.setItem(n,JSON.stringify({value:e,expiry:Date.now()+t*36e5,type:typeof e,isArray:Array.isArray(e)}))}catch(r){console.error("Error savels",r)}}function Gs(n){try{const e=localStorage.getItem(n);if(!e)return null;const t=JSON.parse(e);return!t||Date.now()>t.expiry?(localStorage.removeItem(n),null):t.value}catch(e){return console.error("Error getls:",e),bu(n),null}}function bu(...n){n.forEach(e=>{e&&typeof e=="string"&&localStorage.removeItem(e)})}function _i(n,e,t="top",r=1800){const i={success:"--success",error:"--error",warning:"--warning",info:"--info"},a=i[t]?t:null,u=a?"top":t;if(Y("#witip-styles").length||Y('<style id="witip-styles">.witip{position:fixed;background:var(--mco);color:var(--txa);z-index:10000;padding:8px 12px;border-radius:4px;font-size:.85rem;max-width:250px;box-shadow:0 2px 8px rgba(0,0,0,.2);opacity:0;transition:opacity .2s;pointer-events:none}.witip::after{content:"";position:absolute;border:6px solid transparent}.witip.show{opacity:1}.witip.top::after{top:100%;left:50%;margin-left:-6px;border-top-color:inherit}.witip.bottom::after{bottom:100%;left:50%;margin-left:-6px;border-bottom-color:inherit}.witip.left::after{left:100%;top:50%;margin-top:-6px;border-left-color:inherit}.witip.right::after{right:100%;top:50%;margin-top:-6px;border-right-color:inherit}.witip.success{background:var(--success);color:#fff}.witip.error{background:var(--error);color:#fff}.witip.warning{background:var(--warning);color:#000}.witip.info{background:var(--info);color:#fff}</style>').appendTo("head"),typeof n=="string"&&(n.includes(",")||n.match(/^[.#a-z]/i)))return Y(n).each((wt,We)=>_i(We,e,t,r)),Y(n);const p=Y(n);if(!p.length)return;clearTimeout(p.data("witip-timer")),Y(".witip").remove();const _=p.attr("id")||p.attr("id",`wtip-${Date.now()}-${Math.floor(Math.random()*1e3)}`).attr("id"),v=Y("<div>",{class:`witip ${u} ${a||""}`,"data-for":_,html:e,css:{"border-color":a?`var(${i[a]})`:"var(--mco)"}});a&&v.css("background-color",`var(${i[a]})`),Y("body").append(v);const{left:w,top:P,right:k,bottom:B,width:$,height:G}=p[0].getBoundingClientRect(),J=v.outerWidth(),Z=v.outerHeight(),ye={top:{x:w+$/2-J/2,y:P-Z-8},bottom:{x:w+$/2-J/2,y:B+8},left:{x:w-J-8,y:P+G/2-Z/2},right:{x:k+8,y:P+G/2-Z/2}};let{x:_e,y:Ne}=ye[u];return _e=Math.max(8,Math.min(_e,window.innerWidth-J-8)),Ne=Math.max(8,Math.min(Ne,window.innerHeight-Z-8)),v.css({left:_e,top:Ne}),p.data("witip-timer",setTimeout(()=>{v.addClass("show"),r>0&&setTimeout(()=>{v.removeClass("show"),setTimeout(()=>v.remove(),200)},r)},10)),p}function ET(){const n=`
<div id="loginModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Login</h2>
      
      <form id="loginForm" class="dfd">
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="email" placeholder="Email o usuario" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-lock"></i>
            <input type="password" id="password" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-check">
          <input type="checkbox" id="rememberMe">
          <label for="rememberMe">Recordar mis datos</label>
        </div>
        <button type="button" id="Login" class="inactivo btn-auth">Iniciar Sesión</button>
      </form>
      
      <div class="auth-links">
        <span class="olvidastePass">¿Olvidaste tu contraseña?</span>
        <span class="crearCuenta">Crear cuenta</span>
      </div>
    </div>
  </div>
</div>`,e=`
<div id="registroModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Crear Cuenta</h2>
      
      <form id="registroForm" class="dfd">
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-envelope"></i>
            <input type="email" id="regEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user"></i>
            <input type="text" id="regUsuario" placeholder="Crear usuario" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regNombre" placeholder="Nombre" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regApellidos" placeholder="Apellidos" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword1" placeholder="Confirmar Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <button type="button" id="Registrar" class="inactivo btn-auth">Registrarme</button>
      </form>
      
      <div class="auth-links">
        <span class="conCuenta">Ya tengo cuenta</span>
      </div>
    </div>
  </div>
</div>`,t=`
<div id="recuperarModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Restablecer Contraseña</h2>
      <form id="recuperarForm" class="dfd">
        <p class="auth-text">Ingresa tu Correo o usuario:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="recEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <p class="auth-text">Valida tu fecha de nacimiento:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-cake-candles"></i>
            <input type="date" id="recFechaNacimiento" placeholder="Fecha Nacimiento" class="datepicker" required>
          </div>
        </div>
        <button type="button" id="Recuperar" class="inactivo btn-auth">Restablecer Contraseña</button>
      </form>
      <div class="auth-links">
        <span class="volverLogin"><i class="fas fa-arrow-left"></i> Volver a Inicio</span>
      </div>
    </div>
  </div>
</div>`;Y(function(){let r="smiles",i="wiAuthIn",a="wiAuthRol",u="usuario";Y(document).on("click",".login",()=>abrirModal("loginModal")),Y(document).on("click",".registrar",()=>abrirModal("registroModal")),Y(".crearCuenta").click(()=>{abrirModal("registroModal"),cerrarModal("loginModal")}),Y(".conCuenta").click(()=>{abrirModal("loginModal"),cerrarModal("registroModal")}),Y(".olvidastePass").click(()=>{abrirModal("recuperarModal"),cerrarModal("loginModal")}),Y(".volverLogin").click(()=>{abrirModal("loginModal"),cerrarModal("recuperarModal")}),Y(".togglePass").click(function(){const w=Y(this).siblings("input"),P=w.attr("type")==="password";w.attr("type",P?"text":"password"),Y(this).toggleClass("fa-eye fa-eye-slash")}),Y('.miauth input:not([type="checkbox"])').on("click",function(){_i(this,Y(this).attr("placeholder"))}),Y("#regUsuario, #regEmail, #email, #recEmail").on("input",function(){Y(this).val(Y(this).val().toLowerCase().trim())}),[["#password","#Login"],["#regPassword1","#Registrar"],["#recEmail","#Recuperar"]].forEach(([w,P])=>{Y(w).on("input keyup",k=>{Y(P).removeClass("inactivo"),k.key==="Enter"&&(Y(P).click(),Y(P).addClass("inactivo"))})});const p={regEmail:[w=>w.toLowerCase(),w=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(w)||"Correo inválido"],regUsuario:[w=>w.toLowerCase().replace(/[^a-z0-9_]/g,""),w=>w.length>=4||"Usuario 4-20 caracteres"],regNombre:[w=>w.trim(),w=>w.length>0||"Ingrese nombre"],regApellidos:[w=>w.trim(),w=>w.length>0||"Ingrese apellidos"],regPassword:[w=>w,w=>w.length>=6||"Mínimo 6 caracteres"],regPassword1:[w=>w,w=>w===Y("#regPassword").val()||"Contraseñas no coinciden"]};Y.each(p,function(w,[P,k]){Y(`#${w}`).on("blur",function(){const B=P(Y(this).val());Y(this).val(B);const $=k(B);$!==!0&&_i(this,$,"error")})});let _=!1;Y("#regUsuario").on("blur focus",async function(){const w=Y(this).val();if(w.length>=3)try{const k=(await vs(Nn(St,r,w))).exists();_=!k,_i(this,`Usuario ${k?"no disponible":"disponible ✅"}`,k?"error":"success","top",7e3)}catch(P){console.error(P)}});let v=!1;Y("#regEmail").on("blur focus",async function(){const w=Y(this).val();if(w.length>=3)try{const k=!(await ra(Ns(Ds(St,r),na("email","==",w)))).empty;v=!k,_i(this,`Email ${k?"no disponible":"disponible ✅"}`,k?"error":"success","top",7e3)}catch(P){console.error(P)}}),Y("#Registrar").click(async function(){kn(this,!0,"Registrando");const w=[[_,Y("#regUsuario")[0],"Usuario no disponible"],[v,Y("#regEmail")[0],"Email no disponible"],...Object.entries(p).map(([P,[k,B]])=>{const $=Y(`#${P}`),G=k($.val()),J=B(G);return[J===!0,$[0],J!==!0?J:""]})];for(const[P,k,B]of w)if(!P&&B&&(kn(this,!1),_i(k,B,"error"),k.focus(),!0))return;try{const P=["regEmail","regUsuario","regNombre","regApellidos","regPassword"],[k,B,$,G,J]=P.map(_e=>Y("#"+_e).val().trim()),{user:Z}=await Om(Es,k,J);await Promise.all([Um(Z,{displayName:B}),Lm(Z)]),console.log("Registro completo en Auth ✅"+Date());const ye=Nn(St,r,B);await Lf(ye,{usuario:B,email:k,nombre:$,apellidos:G,rol:u,creacion:Ff(),uid:Z.uid}),console.log("Registro completo en Firestore ✅"+Date()),jt("Registro completado! ✅")}catch(P){jt({"auth/email-already-in-use":"Email ya registrado","auth/weak-password":"Contraseña muy débil"}[P.code]||P.message)||console.error(P)}finally{nr(i,"wIn",24),nr(a,u,24),setTimeout(()=>vT(),3e3),cerrarModal("registroModal"),kn(this,!1)}}),Y("#Login").click(async function(){kn(this,!0,"Iniciando sessión");try{const[w,P]=["#email","#password"].map(G=>Y(G).val()),k=w.includes("@"),B=k?null:await vs(Nn(St,r,w));if(!k&&!B.exists())throw new Error("Usuario no encontrado");const $=k?w:B.data().email;await Mm(Es,$,P),nr(i,"wIn",24),nr(a,B.data().rol,24)}catch(w){jt({"auth/invalid-credential":"Contraseña incorrecta","auth/invalid-email":"Falta registrar Email","auth/missing-email":"Email o usuario no registrado"}[w.code]||w.message,"error"),console.error(w)}finally{cerrarModal("loginModal"),kn(this,!1)}}),Y("#Recuperar").click(async function(){kn(this,!0,"Restablecer Contraseña");try{const[w,P]=["#recEmail","#recFechaNacimiento"].map(G=>Y(G).val()),k=w.includes("@")?w:await(async()=>{const G=await vs(Nn(St,r,w));return G.exists()?G.data().email:null})();if(!k)return jt("Usuario no registrado","error");const B=await ra(Ns(Ds(St,r),na("email","==",k)));if(B.empty)return jt("Email incorrecto o no existe","error");if(B.docs[0].data().fechaNacimiento.toDate().toISOString().split("T")[0]!==P)return jt("Fecha de nacimiento incorrecta","error");await Vm(Es,k),jt("Se envió correo para restablecer su contraseña, revisa en principal o spam ✅","success")}catch(w){console.error(w)}finally{kn(this,!1)}})}),Y("body").append(n+e+t)}ET();window.header=ia;function ia(n=null){const e=!n;return`
<header class="top-header">
  <div class="header-container miwp">
    <div class="header-left">
      <h1><i class="fas fa-${e?"heart":"trophy"}"></i> ${e?"WiiLove":"MI DASHBOARD"}</h1>
    </div>
    <div class="header-right">
      <div class="witemas"></div>
      ${e?`
        <div class="sesion registrar"><span>Registrate</span></div>
        <div class="sesion login"><span>Login</span></div>
      `:`
        <div class="sesion">
          <img src="${n.imagen||"./smile.png"}" alt="${n.nombre}" class="user-avatar">
          <span>${n.nombre}</span>
        </div>
        <button class="bt_salir"><i class="fas fa-sign-out-alt"></i> Salir</button>
      `}
    </div>
  </div>
</header>
  `}Y("style").append(".top-header{background:var(--mco);box-shadow:0 .1vw .1vw 0 var(--bga);}.header-container{display:flex;justify-content:space-between;align-items:center;height:6vh;}.header-container :is(h1,button,span,i){color:var(--txa);}.header-container *:not(h1){font-weight:600;}h1{font-weight:900;word-spacing:.25vh;text-shadow:var(--bs_l);}h1 i{animation:brillar 2s infinite;}@keyframes brillar{0%,100%{color:var(--txa);filter:drop-shadow(0 0 5px var(--txa));}50%{color:var(--bg);filter:drop-shadow(0 0 20px var(--bg));}}.header-left,.header-right{display:flex;gap:1vh;}.sesion{height:4.5vh;display:flex;align-items:center;gap:.8vh;cursor:pointer;padding-inline:1.5vh;background:var(--bg1);border-radius:1.2vh;}.sesion:hover{transform:translateY(-.2vh);transition:var(--tr_s);}.user-avatar{height:80%;box-shadow:var(--bs_m);border-radius:50%;}.witemas{display:flex;align-items:center;padding-inline:1.9vh;gap:.2vh;background:var(--bg1);border-radius:1.2vh;}.witemas:hover{transform:translateY(-.2vh);transition:var(--tr_s);}.witemas>*{width:var(--fz_t1);height:var(--fz_t1);border-radius:50%;cursor:pointer;}.tema:hover,.mtha{box-shadow:var(--bs_m);transition:var(--tr_s);transform:scale(1.05);}.bt_salir{background:var(--bg1);border-radius:1.2vh;border:none;padding-inline:2vh;cursor:pointer;}.bt_salir:hover{transform:translateY(-.2vh);transition:var(--tr_s);}");window.footer=sa;const TT=2024,wT="@wilder.taype",IT="https://wtaype.github.io/",bT="v10";function sa(){const n=new Date;return`
  <footer class="foo wb txc psa">
    <span>Creado con <i class="fas fa-heart"></i> by <a class="ftx lkme" href="${IT}" target="_blank">${wT}</a></span>
    <span>${TT} - <span class="wty">${n.getFullYear()}</span></span>
    <span class="abw"> | Acerca del app ${bT} | actualizado:
    <span class="wtu">${n.toLocaleString()}</span></span>
  </footer>
  `}Y("style").append(".foo{width:100%;text-align:center;padding-block:1.5vh 1vh;background:var(--wb);border-radius:1vh 1vh 0 0;}.foo *{font-size:var(--fz_s2);margin-inline:.3vh;}.foo a{color:var(--bg2);}.foo i{color:var(--mco);}.abwc{background:var(--bg);top:0;width:99%;height:100%;padding:2vh 2vw;overflow:scroll;line-height:1.80;}.abwok{background:var(--mco);color:var(--txa);}");async function AT(){Y(".app").html(`
    ${header()} 
    <main class="miweb miwp">Hola mi hermosa chica, te amooo mucho grrrr</main>
    ${footer()}
  `)}const Au=async n=>{try{const e=Gs(`post_${n}`);if(e)return e;const t=await vs(Nn(St,"posts",n));if(!t.exists())return null;const r={id:t.id,...t.data()};return await dT(Nn(St,"posts",n),{vistas:gT(1)}),nr(`post_${n}`,r,1),r}catch(e){return console.error(e),null}},ST=async(n=!0)=>{try{const e=Gs("posts_lista");if(e)return e;const t=n?Ns(Ds(St,"posts"),na("activo","==",!0),ih("fecha","desc")):Ns(Ds(St,"posts"),ih("fecha","desc")),i=(await ra(t)).docs.map(a=>({id:a.id,...a.data()}));return nr("posts_lista",i,.5),i}catch(e){return console.error(e),[]}},CT=async(n,e)=>{const t=await Au(n);if(!t||!t.activo)return Y(".app").html(`${ia(e)}<main class="miweb"><div class="pst-err"><i class="fas fa-exclamation-circle"></i><h2>Post no encontrado</h2><a href="/">← Volver</a></div></main>${sa()}`);const r=t.fecha?.toDate?new Date(t.fecha.toDate()).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"}):"Sin fecha";Y(".app").html(`${ia(e)}<main class="miweb"><article class="pst"><header class="pst-h"><span class="pst-cat">${t.categoria}</span><h1>${t.titulo}</h1><div class="pst-meta"><span><i class="fas fa-user"></i> ${t.autor}</span><span><i class="fas fa-calendar"></i> ${r}</span><span><i class="fas fa-eye"></i> ${t.vistas||0}</span></div>${t.imagen?`<img src="${t.imagen}" alt="${t.titulo}" class="pst-img">`:""}</header><div class="pst-cnt">${t.contenido}</div><footer class="pst-f">${t.tags?.map(i=>`<span class="tag">#${i}</span>`).join("")||""}</footer></article></main>${sa()}`),estilos()},jf=(n=null)=>{const e=n!==null;Y("#modalPost").remove(),Y("body").append(`<div id="modalPost" class="modal"><div class="modal-content" style="max-width:900px;"><div class="modal-header"><h3>${e?"✏️ Editar":"➕ Nuevo"} Post</h3><button class="close-modal">&times;</button></div><div class="modal-body"><form id="fpost"><div class="form_row"><div class="form_gr"><label class="form_lab"><i class="fas fa-heading"></i> Título</label><input type="text" id="ptit" value="${n?.titulo||""}" required></div><div class="form_gr"><label class="form_lab"><i class="fas fa-tag"></i> Categoría</label><input type="text" id="pcat" value="${n?.categoria||""}" required></div></div><div class="form_gr"><label class="form_lab"><i class="fas fa-user"></i> Autor</label><input type="text" id="paut" value="${n?.autor||""}" required></div><div class="form_gr"><label class="form_lab"><i class="fas fa-image"></i> Imagen URL</label><input type="url" id="pimg" value="${n?.imagen||""}"></div><div class="form_gr"><label class="form_lab"><i class="fas fa-align-left"></i> Contenido HTML</label><textarea id="pcnt" rows="10" required>${n?.contenido||""}</textarea></div><div class="form_gr"><label class="form_lab"><i class="fas fa-tags"></i> Tags (coma)</label><input type="text" id="ptag" value="${n?.tags?.join(", ")||""}"></div><div class="form_row"><div class="form_gr"><label class="form_lab"><i class="fas fa-toggle-on"></i> Estado</label><select id="pact" class="inp_sel"><option value="true" ${n?.activo!==!1?"selected":""}>Activo</option><option value="false" ${n?.activo===!1?"selected":""}>Inactivo</option></select></div>${e?`<div class="form_gr"><label class="form_lab"><i class="fas fa-eye"></i> Vistas</label><input type="number" value="${n?.vistas||0}" readonly style="background:#f0f0f0;"></div>`:""}</div><button type="submit" class="btn_pri" id="bguardar"><i class="fas fa-save"></i> ${e?"Actualizar":"Crear"}</button></form></div></div></div>`),window.abrirModal("modalPost"),Y("#fpost").off("submit").on("submit",async t=>{t.preventDefault();const r=Y("#ptit").val().trim(),i=n?.id||r.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"");if(!e&&(await vs(Nn(St,"posts",i))).exists())return jt("Ya existe ese título, cámbialo un poco","error");kn("#bguardar",!0,e?"Actualizando":"Creando");try{const a={id:i,titulo:r,autor:Y("#paut").val().trim(),categoria:Y("#pcat").val().trim(),imagen:Y("#pimg").val().trim(),contenido:Y("#pcnt").val().trim(),tags:Y("#ptag").val().split(",").map(u=>u.trim()).filter(Boolean),activo:Y("#pact").val()==="true",...e?{}:{fecha:Ff(),vistas:0}};await Lf(Nn(St,"posts",i),a,{merge:!0}),jt(`Post ${e?"actualizado":"creado"} ✅`,"success"),bu("posts_lista"),window.cerrarModal("modalPost"),Y(".tbl-pst").length&&Su()}catch(a){console.error(a),jt("Error al guardar","error")}finally{kn("#bguardar",!1)}})},RT=async(n,e)=>{if(confirm(`¿Eliminar "${e}"?`))try{await fT(Nn(St,"posts",n)),jt("Post eliminado ✅","success"),bu("posts_lista",`post_${n}`),Su()}catch(t){console.error(t),jt("Error al eliminar","error")}},Su=async()=>{const n=await ST(!1),e=n.length?n.map(t=>{const r=t.fecha?.toDate?new Date(t.fecha.toDate()).toLocaleDateString("es-ES"):"Sin fecha";return`<tr><td><strong>${t.titulo}</strong></td><td>${t.categoria}</td><td>${t.autor}</td><td>${r}</td><td><span class="bdg ${t.activo?"bdg-ok":"bdg-no"}">${t.activo?"Activo":"Inactivo"}</span></td><td>${t.vistas||0}</td><td><button class="btn-ver" data-id="${t.id}"><i class="fas fa-eye"></i></button><button class="btn-edit" data-id="${t.id}"><i class="fas fa-edit"></i></button><button class="btn-del" data-id="${t.id}" data-tit="${t.titulo}"><i class="fas fa-trash"></i></button></td></tr>`}).join(""):'<tr><td colspan="7" style="text-align:center;padding:3vh;">No hay posts</td></tr>';Y(".tbl-pst tbody").html(e),Y(".btn-ver").off("click").on("click",function(){window.open(`/${Y(this).data("id")}`,"_blank")}),Y(".btn-edit").off("click").on("click",async function(){const t=await Au(Y(this).data("id"));t&&jf(t)}),Y(".btn-del").off("click").on("click",function(){RT(Y(this).data("id"),Y(this).data("tit"))})};function PT(n){Y(".app").html(`
    ${ia(n)} 
    <main class="miweb miwp">
      <section class="admin-panel">
        <div class="admin-header">
          <h2><i class="fas fa-newspaper"></i> Gestión de Posts</h2>
          <button class="btn_pri" id="btn_nuevo_post">
            <i class="fas fa-plus"></i> Agregar Post
          </button>
        </div>

        <div class="tabla-wrapper">
          <table class="tabla-posts tabla-registros">
            <thead>
              <tr>
                <th>Título</th>
                <th>Categoría</th>
                <th>Autor</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Vistas</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr><td colspan="7" style="text-align:center;padding:3vh;">Cargando...</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
    ${sa()}
  `),Su(),Y("#btn_nuevo_post").off("click").on("click",()=>jf())}const qf=async n=>{const e=window.location.pathname.slice(1);if(!e)return n?PT(n):AT();await Au(e)?CT(e,n):Y(".app").html('<div class="pst-err"><i class="fas fa-exclamation-circle"></i><h2>404</h2><p>Página no encontrada</p><a href="/">← Volver al inicio</a></div>')};$m(Es,async n=>{let e=null;if(n)try{e=Gs("wiSmile"),e||(e=(await ra(Ns(Ds(St,"smiles"),na("usuario","==",n.displayName)))).docs[0]?.data()||{},nr("wiSmile",e,450))}catch(t){console.error(t)}await qf(e)});window.addEventListener("popstate",async()=>await qf(Gs("wiSmile")));Y(document).on("click",".bt_salir",async()=>{await Bm(Es),window.location.href="/";try{localStorage.clear()}catch{Object.keys(localStorage).forEach(e=>localStorage.removeItem(e))}});
