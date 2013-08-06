minispade.register('CustomElements', "(function() {// Copyright (c) 2012 The Polymer Authors. All rights reserved.\n//\n// Redistribution and use in source and binary forms, with or without\n// modification, are permitted provided that the following conditions are\n// met:\n//\n//    * Redistributions of source code must retain the above copyright\n// notice, this list of conditions and the following disclaimer.\n//    * Redistributions in binary form must reproduce the above\n// copyright notice, this list of conditions and the following disclaimer\n// in the documentation and/or other materials provided with the\n// distribution.\n//    * Neither the name of Google Inc. nor the names of its\n// contributors may be used to endorse or promote products derived from\n// this software without specific prior written permission.\n//\n// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n// \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\nwindow.CustomElements={flags:{}};var SideTable;if(\"undefined\"!=typeof WeakMap&&navigator.userAgent.indexOf(\"Firefox/\")<0?SideTable=WeakMap:function(){var a=Object.defineProperty,b=Object.hasOwnProperty,c=(new Date).getTime()%1e9;SideTable=function(){this.name=\"__st\"+(1e9*Math.random()>>>0)+(c++ +\"__\")},SideTable.prototype={set:function(b,c){a(b,this.name,{value:c,writable:!0})},get:function(a){return b.call(a,this.name)?a[this.name]:void 0},\"delete\":function(a){this.set(a,void 0)}}}(),!window.MutationObserver&&(window.MutationObserver=window.WebKitMutationObserver||window.JsMutationObserver,!MutationObserver))throw new Error(\"no mutation observer support\");!function(a){function b(a,c,d){var e=a.firstElementChild;if(!e)for(e=a.firstChild;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.nextSibling;for(;e;)c(e,d)!==!0&&b(e,c,d),e=e.nextElementSibling;return null}function c(a,b){for(var c=a.webkitShadowRoot;c;)d(c,b),c=c.olderShadowRoot}function d(a,d){b(a,function(a){return d(a)?!0:(c(a,d),void 0)}),c(a,d)}function e(a){return h(a)?(i(a),!0):(j(a),void 0)}function f(a){d(a,function(a){return e(a)?!0:void 0})}function g(a){return e(a)||f(a)}function h(b){if(!b.__upgraded__&&b.nodeType===Node.ELEMENT_NODE){var c=b.getAttribute(\"is\")||b.localName,d=a.registry[c];if(d)return logFlags.dom&&console.group(\"upgrade:\",b.localName),a.upgrade(b),logFlags.dom&&console.groupEnd(),!0}}function i(a){j(a),m(a)&&d(a,function(a){j(a)})}function j(a){(a.insertedCallback||a.__upgraded__&&logFlags.dom)&&(logFlags.dom&&console.group(\"inserted:\",a.localName),m(a)&&(a.__inserted=(a.__inserted||0)+1,a.__inserted<1&&(a.__inserted=1),a.__inserted>1?logFlags.dom&&console.warn(\"inserted:\",a.localName,\"insert/remove count:\",a.__inserted):a.insertedCallback&&(logFlags.dom&&console.log(\"inserted:\",a.localName),a.insertedCallback())),logFlags.dom&&console.groupEnd())}function k(a){l(a),d(a,function(a){l(a)})}function l(a){(a.removedCallback||a.__upgraded__&&logFlags.dom)&&(logFlags.dom&&console.log(\"removed:\",a.localName),m(a)||(a.__inserted=(a.__inserted||0)-1,a.__inserted>0&&(a.__inserted=0),a.__inserted<0?logFlags.dom&&console.warn(\"removed:\",a.localName,\"insert/remove count:\",a.__inserted):a.removedCallback&&a.removedCallback()))}function m(a){for(var b=a;b;){if(b==a.ownerDocument)return!0;b=b.parentNode||b.host}}function n(a){if(a.webkitShadowRoot&&!a.webkitShadowRoot.__watched){logFlags.dom&&console.log(\"watching shadow-root for: \",a.localName);for(var b=a.webkitShadowRoot;b;)o(b),b=b.olderShadowRoot}}function o(a){a.__watched||(t(a),a.__watched=!0)}function p(a){n(a),d(a,function(){n(a)})}function q(a){switch(a.localName){case\"style\":case\"script\":case\"template\":case void 0:return!0}}function r(a){if(logFlags.dom){var b=a[0];if(b&&\"childList\"===b.type&&b.addedNodes&&b.addedNodes){for(var c=b.addedNodes[0];c&&c!==document&&!c.host;)c=c.parentNode;var d=c&&(c.URL||c._URL||c.host&&c.host.localName)||\"\";d=d.split(\"/?\").shift().split(\"/\").pop()}console.group(\"mutations (%d) [%s]\",a.length,d||\"\")}a.forEach(function(a){\"childList\"===a.type&&(x(a.addedNodes,function(a){q(a)||g(a)}),x(a.removedNodes,function(a){q(a)||k(a)}))}),logFlags.dom&&console.groupEnd()}function s(){r(w.takeRecords())}function t(a){w.observe(a,{childList:!0,subtree:!0})}function u(a){t(a)}function v(a){logFlags.dom&&console.group(\"upgradeDocument: \",(a.URL||a._URL||\"\").split(\"/\").pop()),g(a),logFlags.dom&&console.groupEnd()}var w=new MutationObserver(r),x=Array.prototype.forEach.call.bind(Array.prototype.forEach);a.watchShadow=n,a.watchAllShadows=p,a.upgradeAll=g,a.upgradeSubtree=f,a.observeDocument=u,a.upgradeDocument=v,a.takeRecords=s}(window.CustomElements),function(a){function b(b,f){var g=f||{};if(!b)throw new Error(\"Name argument must not be empty\");if(g.name=b,!g.prototype)throw new Error(\"Options missing required prototype property\");return g.lifecycle=g.lifecycle||{},g.ancestry=c(g.extends),d(g),e(g),k(g.prototype),m(b,g),g.ctor=n(g),g.ctor.prototype=g.prototype,g.prototype.constructor=g.ctor,a.ready&&a.upgradeAll(document),g.ctor}function c(a){var b=s[a];return b?c(b.extends).concat([b]):[]}function d(a){for(var b,c=a.extends,d=0;b=a.ancestry[d];d++)c=b.is&&b.tag;a.tag=c||a.name,c&&(a.is=a.name)}function e(a){if(!Object.__proto__){var b=HTMLElement.prototype;if(a.is){var c=document.createElement(a.tag);b=Object.getPrototypeOf(c)}for(var d,e=a.prototype;e&&e!==b;){var d=Object.getPrototypeOf(e);e.__proto__=d,e=d}}a.native=b}function f(a){return g(t(a.tag),a)}function g(b,c){return c.is&&b.setAttribute(\"is\",c.is),h(b,c),b.__upgraded__=!0,a.upgradeSubtree(b),j(b),b}function h(a,b){Object.__proto__?a.__proto__=b.prototype:(i(a,b.prototype,b.native),a.__proto__=b.prototype)}function i(a,b,c){for(var d={},e=b;e!==c&&e!==HTMLUnknownElement.prototype;){for(var f,g=Object.getOwnPropertyNames(e),h=0;f=g[h];h++)d[f]||(Object.defineProperty(a,f,Object.getOwnPropertyDescriptor(e,f)),d[f]=1);e=Object.getPrototypeOf(e)}}function j(a){a.readyCallback&&a.readyCallback()}function k(a){var b=a.setAttribute;a.setAttribute=function(a,c){l.call(this,a,c,b)};var c=a.removeAttribute;a.removeAttribute=function(a,b){l.call(this,a,b,c)}}function l(a,b,c){var d=this.getAttribute(a);c.apply(this,arguments),this.attributeChangedCallback&&this.getAttribute(a)!==d&&this.attributeChangedCallback(a,d)}function m(a,b){s[a]=b}function n(a){return function(){return f(a)}}function o(a){var b=s[a];return b?new b.ctor:t(a)}function p(a){if(!a.__upgraded__&&a.nodeType===Node.ELEMENT_NODE){var b=a.getAttribute(\"is\")||a.localName,c=s[b];return c&&g(a,c)}}function q(b){var c=u.call(this,b);return a.upgradeAll(c),c}if(a||(a=window.CustomElements={flags:{}}),a.hasNative=a.flags.register&&(document.webkitRegister||document.register),a.hasNative){document.register=document.register||document.webkitRegister;var r=function(){};a.registry={},a.upgradeElement=r,a.watchShadow=r,a.watchAllShadows=r,a.upgradeAll=r,a.upgradeSubtree=r,a.observeDocument=r,a.upgradeDocument=r,a.takeRecords=r}else{var s={},t=document.createElement.bind(document),u=Node.prototype.cloneNode;document.register=b,document.createElement=o,Node.prototype.cloneNode=q,a.registry=s,a.upgrade=p}}(window.CustomElements),function(){function parseElementElement(a){var b={name:\"\",\"extends\":null};takeAttributes(a,b);var c=HTMLElement.prototype;if(b.extends){var d=document.createElement(b.extends);c=d.__proto__||Object.getPrototypeOf(d)}b.prototype=Object.create(c),a.options=b;var e=a.querySelector('script:not([type]),script[type=\"text/javascript\"],scripts');e&&executeComponentScript(e.textContent,a,b.name);var f=document.register(b.name,b);a.ctor=f;var g=a.getAttribute(\"constructor\");g&&(window[g]=f)}function takeAttributes(a,b){for(var c in b){var d=a.attributes[c];d&&(b[c]=d.value)}}function executeComponentScript(inScript,inContext,inName){context=inContext;var owner=context.ownerDocument,url=owner._URL||owner.URL||owner.impl&&(owner.impl._URL||owner.impl.URL),match=url.match(/.*\\/([^.]*)[.]?.*$/);if(match){var name=match[1];url+=name!=inName?\":\"+inName:\"\"}var code=\"__componentScript('\"+inName+\"', function(){\"+inScript+\"});\"+\"\\n//# sourceURL=\"+url+\"\\n\";eval(code)}function mixin(a,b){a=a||{};try{Object.getOwnPropertyNames(b).forEach(function(c){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)})}catch(c){}return a}var HTMLElementElement=function(a){return a.register=HTMLElementElement.prototype.register,parseElementElement(a),a};HTMLElementElement.prototype={register:function(a){a&&(this.options.lifecycle=a.lifecycle,a.prototype&&mixin(this.options.prototype,a.prototype))}};var context;window.__componentScript=function(a,b){b.call(context)},window.HTMLElementElement=HTMLElementElement}(),function(){function a(a){return\"link\"===a.localName&&a.getAttribute(\"rel\")===b}var b=window.HTMLImports?HTMLImports.IMPORT_LINK_TYPE:\"none\",c={selectors:[\"link[rel=\"+b+\"]\",\"element\"],map:{link:\"parseLink\",element:\"parseElement\"},parse:function(a){if(!a.__parsed){a.__parsed=!0;var b=a.querySelectorAll(c.selectors);d(b,function(a){c[c.map[a.localName]](a)}),CustomElements.upgradeDocument(a),CustomElements.observeDocument(a)}},parseLink:function(b){a(b)&&this.parseImport(b)},parseImport:function(a){a.content&&c.parse(a.content)},parseElement:function(a){new HTMLElementElement(a)}},d=Array.prototype.forEach.call.bind(Array.prototype.forEach);CustomElements.parser=c}(),function(){function a(){setTimeout(function(){CustomElements.parser.parse(document),CustomElements.upgradeDocument(document),CustomElements.ready=!0,CustomElements.readyTime=Date.now(),window.HTMLImports&&(CustomElements.elapsed=CustomElements.readyTime-HTMLImports.readyTime),document.body.dispatchEvent(new CustomEvent(\"WebComponentsReady\",{bubbles:!0}))},0)}if(\"function\"!=typeof window.CustomEvent&&(window.CustomEvent=function(a){var b=document.createEvent(\"HTMLEvents\");return b.initEvent(a,!0,!0),b}),\"complete\"===document.readyState)a();else{var b=window.HTMLImports?\"HTMLImportsLoaded\":\"DOMContentLoaded\";window.addEventListener(b,a)}}();\n})();\n//@ sourceURL=CustomElements");