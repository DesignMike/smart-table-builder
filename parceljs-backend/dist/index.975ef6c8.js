// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _appVue = require("./App.vue");
var _appVueDefault = parcelHelpers.interopDefault(_appVue);
var _store = require("./store");
var _storeDefault = parcelHelpers.interopDefault(_store);
// import router from './router'
var _vueRouter = require("vue-router");
var _adminMenuFix = require("./utils/admin-menu-fix");
var _adminMenuFixDefault = parcelHelpers.interopDefault(_adminMenuFix);
const Home = {
    template: "<div>Home</div>"
};
const About = {
    template: "<div>About</div>"
};
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    }, 
];
// Vue.use(VueRouter)
const router = new (0, _vueRouter.createRouter)({
    history: (0, _vueRouter.createWebHashHistory)(),
    routes
});
const app = (0, _vue.createApp)({});
app.use(router);
// app.use(store);
app.mount("#app");

},{"vue":"gzxs9","./App.vue":"fYNyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./store":"d8qyu","./utils/admin-menu-fix":"1m0fI","vue-router":"c18b3"}],"gzxs9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compile", ()=>compile);
var _runtimeDom = require("@vue/runtime-dom");
parcelHelpers.exportAll(_runtimeDom, exports);
function initDev() {
    (0, _runtimeDom.initCustomFormatter)();
}
initDev();
const compile = ()=>{
    (0, _runtimeDom.warn)(`Runtime compilation is not supported in this build of Vue.` + ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
};

},{"@vue/runtime-dom":"9wNvI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wNvI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transition", ()=>Transition);
parcelHelpers.export(exports, "TransitionGroup", ()=>TransitionGroup);
parcelHelpers.export(exports, "VueElement", ()=>VueElement);
parcelHelpers.export(exports, "createApp", ()=>createApp);
parcelHelpers.export(exports, "createSSRApp", ()=>createSSRApp);
parcelHelpers.export(exports, "defineCustomElement", ()=>defineCustomElement);
parcelHelpers.export(exports, "defineSSRCustomElement", ()=>defineSSRCustomElement);
parcelHelpers.export(exports, "hydrate", ()=>hydrate);
parcelHelpers.export(exports, "initDirectivesForSSR", ()=>initDirectivesForSSR);
parcelHelpers.export(exports, "render", ()=>render);
parcelHelpers.export(exports, "useCssModule", ()=>useCssModule);
parcelHelpers.export(exports, "useCssVars", ()=>useCssVars);
parcelHelpers.export(exports, "vModelCheckbox", ()=>vModelCheckbox);
parcelHelpers.export(exports, "vModelDynamic", ()=>vModelDynamic);
parcelHelpers.export(exports, "vModelRadio", ()=>vModelRadio);
parcelHelpers.export(exports, "vModelSelect", ()=>vModelSelect);
parcelHelpers.export(exports, "vModelText", ()=>vModelText);
parcelHelpers.export(exports, "vShow", ()=>vShow);
parcelHelpers.export(exports, "withKeys", ()=>withKeys);
parcelHelpers.export(exports, "withModifiers", ()=>withModifiers);
var _runtimeCore = require("@vue/runtime-core");
var _shared = require("@vue/shared");
parcelHelpers.exportAll(_runtimeCore, exports);
const svgNS = "http://www.w3.org/2000/svg";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /*#__PURE__*/ doc.createElement("template");
const nodeOps = {
    insert: (child, parent, anchor)=>{
        parent.insertBefore(child, anchor || null);
    },
    remove: (child)=>{
        const parent = child.parentNode;
        if (parent) parent.removeChild(child);
    },
    createElement: (tag, isSVG, is, props)=>{
        const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {
            is
        } : undefined);
        if (tag === "select" && props && props.multiple != null) el.setAttribute("multiple", props.multiple);
        return el;
    },
    createText: (text)=>doc.createTextNode(text),
    createComment: (text)=>doc.createComment(text),
    setText: (node, text)=>{
        node.nodeValue = text;
    },
    setElementText: (el, text)=>{
        el.textContent = text;
    },
    parentNode: (node)=>node.parentNode,
    nextSibling: (node)=>node.nextSibling,
    querySelector: (selector)=>doc.querySelector(selector),
    setScopeId (el, id) {
        el.setAttribute(id, "");
    },
    cloneNode (el) {
        const cloned = el.cloneNode(true);
        // #3072
        // - in `patchDOMProp`, we store the actual value in the `el._value` property.
        // - normally, elements using `:value` bindings will not be hoisted, but if
        //   the bound value is a constant, e.g. `:value="true"` - they do get
        //   hoisted.
        // - in production, hoisted nodes are cloned when subsequent inserts, but
        //   cloneNode() does not copy the custom property we attached.
        // - This may need to account for other custom DOM properties we attach to
        //   elements in addition to `_value` in the future.
        if (`_value` in el) cloned._value = el._value;
        return cloned;
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent (content, parent, anchor, isSVG, start, end) {
        // <parent> before | first ... last | anchor </parent>
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        // #5308 can only take cached path if:
        // - has a single root node
        // - nextSibling info is still available
        if (start && (start === end || start.nextSibling)) // cached
        while(true){
            parent.insertBefore(start.cloneNode(true), anchor);
            if (start === end || !(start = start.nextSibling)) break;
        }
        else {
            // fresh insert
            templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
            const template = templateContainer.content;
            if (isSVG) {
                // remove outer svg wrapper
                const wrapper = template.firstChild;
                while(wrapper.firstChild)template.appendChild(wrapper.firstChild);
                template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
        }
        return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild
        ];
    }
};
// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el, value, isSVG) {
    // directly setting className should be faster than setAttribute in theory
    // if this is an element during a transition, take the temporary transition
    // classes into account.
    const transitionClasses = el._vtc;
    if (transitionClasses) value = (value ? [
        value,
        ...transitionClasses
    ] : [
        ...transitionClasses
    ]).join(" ");
    if (value == null) el.removeAttribute("class");
    else if (isSVG) el.setAttribute("class", value);
    else el.className = value;
}
function patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = (0, _shared.isString)(next);
    if (next && !isCssString) {
        for(const key in next)setStyle(style, key, next[key]);
        if (prev && !(0, _shared.isString)(prev)) {
            for(const key1 in prev)if (next[key1] == null) setStyle(style, key1, "");
        }
    } else {
        const currentDisplay = style.display;
        if (isCssString) {
            if (prev !== next) style.cssText = next;
        } else if (prev) el.removeAttribute("style");
        // indicates that the `display` of the element is controlled by `v-show`,
        // so we always keep the current `display` value regardless of the `style`
        // value, thus handing over control to `v-show`.
        if ("_vod" in el) style.display = currentDisplay;
    }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if ((0, _shared.isArray)(val)) val.forEach((v)=>setStyle(style, name, v));
    else {
        if (val == null) val = "";
        if (name.startsWith("--")) // custom property definition
        style.setProperty(name, val);
        else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) // !important
            style.setProperty((0, _shared.hyphenate)(prefixed), val.replace(importantRE, ""), "important");
            else style[prefixed] = val;
        }
    }
}
const prefixes = [
    "Webkit",
    "Moz",
    "ms"
];
const prefixCache = {};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) return cached;
    let name = (0, _runtimeCore.camelize)(rawName);
    if (name !== "filter" && name in style) return prefixCache[rawName] = name;
    name = (0, _shared.capitalize)(name);
    for(let i = 0; i < prefixes.length; i++){
        const prefixed = prefixes[i] + name;
        if (prefixed in style) return prefixCache[rawName] = prefixed;
    }
    return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith("xlink:")) {
        if (value == null) el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        else el.setAttributeNS(xlinkNS, key, value);
    } else {
        // note we are only checking boolean attributes that don't have a
        // corresponding dom prop of the same name here.
        const isBoolean = (0, _shared.isSpecialBooleanAttr)(key);
        if (value == null || isBoolean && !(0, _shared.includeBooleanAttr)(value)) el.removeAttribute(key);
        else el.setAttribute(key, isBoolean ? "" : value);
    }
}
// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el, key, value, // the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === "innerHTML" || key === "textContent") {
        if (prevChildren) unmountChildren(prevChildren, parentComponent, parentSuspense);
        el[key] = value == null ? "" : value;
        return;
    }
    if (key === "value" && el.tagName !== "PROGRESS" && // custom elements may use _value internally
    !el.tagName.includes("-")) {
        // store value as _value as well since
        // non-string values will be stringified.
        el._value = value;
        const newValue = value == null ? "" : value;
        if (el.value !== newValue || // #4956: always set for OPTION elements because its value falls back to
        // textContent if no value attribute is present. And setting .value for
        // OPTION has no side effect
        el.tagName === "OPTION") el.value = newValue;
        if (value == null) el.removeAttribute(key);
        return;
    }
    let needRemove = false;
    if (value === "" || value == null) {
        const type = typeof el[key];
        if (type === "boolean") // e.g. <select multiple> compiles to { multiple: '' }
        value = (0, _shared.includeBooleanAttr)(value);
        else if (value == null && type === "string") {
            // e.g. <div :id="null">
            value = "";
            needRemove = true;
        } else if (type === "number") {
            // e.g. <img :width="null">
            // the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
            value = 0;
            needRemove = true;
        }
    }
    // some properties perform value validation and throw,
    // some properties has getter, no setter, will error in 'use strict'
    // eg. <select :type="null"></select> <select :willValidate="null"></select>
    try {
        el[key] = value;
    } catch (e) {
        (0, _runtimeCore.warn)(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: ` + `value ${value} is invalid.`, e);
    }
    needRemove && el.removeAttribute(key);
}
// Async edge case fix requires storing an event listener's attach timestamp.
const [_getNow, skipTimestampCheck] = /*#__PURE__*/ (()=>{
    let _getNow = Date.now;
    let skipTimestampCheck = false;
    if (typeof window !== "undefined") {
        // Determine what event timestamp the browser is using. Annoyingly, the
        // timestamp can either be hi-res (relative to page load) or low-res
        // (relative to UNIX epoch), so in order to compare time we have to use the
        // same timestamp type when saving the flush timestamp.
        if (Date.now() > document.createEvent("Event").timeStamp) // if the low-res timestamp which is bigger than the event timestamp
        // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
        // and we need to use the hi-res version for event listeners as well.
        _getNow = performance.now.bind(performance);
        // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
        // and does not fire microtasks in between event propagation, so safe to exclude.
        const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
        skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
    }
    return [
        _getNow,
        skipTimestampCheck
    ];
})();
// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let cachedNow = 0;
const p = /*#__PURE__*/ Promise.resolve();
const reset = ()=>{
    cachedNow = 0;
};
const getNow = ()=>cachedNow || (p.then(reset), cachedNow = _getNow());
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    // vei = vue event invokers
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) // patch
    existingInvoker.value = nextValue;
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            // add
            const invoker = invokers[rawName] = createInvoker(nextValue, instance);
            addEventListener(el, name, invoker, options);
        } else if (existingInvoker) {
            // remove
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = undefined;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {};
        let m;
        while(m = name.match(optionsModifierRE)){
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    return [
        (0, _shared.hyphenate)(name.slice(2)),
        options
    ];
}
function createInvoker(initialValue, instance) {
    const invoker = (e)=>{
        // async edge case #6566: inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // the solution is simple: we save the timestamp when a handler is attached,
        // and the handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        const timeStamp = e.timeStamp || _getNow();
        if (skipTimestampCheck || timeStamp >= invoker.attached - 1) (0, _runtimeCore.callWithAsyncErrorHandling)(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* NATIVE_EVENT_HANDLER */ , [
            e
        ]);
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function patchStopImmediatePropagation(e, value) {
    if ((0, _shared.isArray)(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = ()=>{
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map((fn)=>(e)=>!e._stopped && fn && fn(e));
    } else return value;
}
const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren)=>{
    if (key === "class") patchClass(el, nextValue, isSVG);
    else if (key === "style") patchStyle(el, prevValue, nextValue);
    else if ((0, _shared.isOn)(key)) // ignore v-model listeners
    {
        if (!(0, _shared.isModelListener)(key)) patchEvent(el, key, prevValue, nextValue, parentComponent);
    } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
    else {
        // special case for <input v-model type="checkbox"> with
        // :true-value & :false-value
        // store value as dom properties since non-string values will be
        // stringified.
        if (key === "true-value") el._trueValue = nextValue;
        else if (key === "false-value") el._falseValue = nextValue;
        patchAttr(el, key, nextValue, isSVG);
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        // most keys must be set as attribute on svg elements to work
        // ...except innerHTML & textContent
        if (key === "innerHTML" || key === "textContent") return true;
        // or native onclick with function values
        if (key in el && nativeOnRE.test(key) && (0, _shared.isFunction)(value)) return true;
        return false;
    }
    // these are enumerated attrs, however their corresponding DOM properties
    // are actually booleans - this leads to setting it with a string "false"
    // value leading it to be coerced to `true`, so we need to always treat
    // them as attributes.
    // Note that `contentEditable` doesn't have this problem: its DOM
    // property is also enumerated string values.
    if (key === "spellcheck" || key === "draggable" || key === "translate") return false;
    // #1787, #2840 form property on form elements is readonly and must be set as
    // attribute.
    if (key === "form") return false;
    // #1526 <input list> must be set as attribute
    if (key === "list" && el.tagName === "INPUT") return false;
    // #2766 <textarea type> must be set as attribute
    if (key === "type" && el.tagName === "TEXTAREA") return false;
    // native onclick with string value, must be set as attribute
    if (nativeOnRE.test(key) && (0, _shared.isString)(value)) return false;
    return key in el;
}
function defineCustomElement(options, hydrate) {
    const Comp = (0, _runtimeCore.defineComponent)(options);
    class VueCustomElement extends VueElement {
        constructor(initialProps){
            super(Comp, initialProps, hydrate);
        }
    }
    VueCustomElement.def = Comp;
    return VueCustomElement;
}
const defineSSRCustomElement = (options)=>{
    // @ts-ignore
    return defineCustomElement(options, hydrate);
};
const BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
};
class VueElement extends BaseClass {
    constructor(_def, _props = {}, hydrate){
        super();
        this._def = _def;
        this._props = _props;
        /**
         * @internal
         */ this._instance = null;
        this._connected = false;
        this._resolved = false;
        this._numberProps = null;
        if (this.shadowRoot && hydrate) hydrate(this._createVNode(), this.shadowRoot);
        else {
            if (this.shadowRoot) (0, _runtimeCore.warn)(`Custom element has pre-rendered declarative shadow root but is not ` + `defined as hydratable. Use \`defineSSRCustomElement\`.`);
            this.attachShadow({
                mode: "open"
            });
        }
    }
    connectedCallback() {
        this._connected = true;
        if (!this._instance) this._resolveDef();
    }
    disconnectedCallback() {
        this._connected = false;
        (0, _runtimeCore.nextTick)(()=>{
            if (!this._connected) {
                render(null, this.shadowRoot);
                this._instance = null;
            }
        });
    }
    /**
     * resolve inner component definition (handle possible async component)
     */ _resolveDef() {
        if (this._resolved) return;
        this._resolved = true;
        // set initial attrs
        for(let i = 0; i < this.attributes.length; i++)this._setAttr(this.attributes[i].name);
        // watch future attr changes
        new MutationObserver((mutations)=>{
            for (const m of mutations)this._setAttr(m.attributeName);
        }).observe(this, {
            attributes: true
        });
        const resolve = (def)=>{
            const { props , styles  } = def;
            const hasOptions = !(0, _shared.isArray)(props);
            const rawKeys = props ? hasOptions ? Object.keys(props) : props : [];
            // cast Number-type props set before resolve
            let numberProps;
            if (hasOptions) for(const key in this._props){
                const opt = props[key];
                if (opt === Number || opt && opt.type === Number) {
                    this._props[key] = (0, _shared.toNumber)(this._props[key]);
                    (numberProps || (numberProps = Object.create(null)))[key] = true;
                }
            }
            this._numberProps = numberProps;
            // check if there are props set pre-upgrade or connect
            for (const key1 of Object.keys(this))if (key1[0] !== "_") this._setProp(key1, this[key1], true, false);
            // defining getter/setters on prototype
            for (const key2 of rawKeys.map((0, _shared.camelize)))Object.defineProperty(this, key2, {
                get () {
                    return this._getProp(key2);
                },
                set (val) {
                    this._setProp(key2, val);
                }
            });
            // apply CSS
            this._applyStyles(styles);
            // initial render
            this._update();
        };
        const asyncDef = this._def.__asyncLoader;
        if (asyncDef) asyncDef().then(resolve);
        else resolve(this._def);
    }
    _setAttr(key) {
        let value = this.getAttribute(key);
        if (this._numberProps && this._numberProps[key]) value = (0, _shared.toNumber)(value);
        this._setProp((0, _shared.camelize)(key), value, false);
    }
    /**
     * @internal
     */ _getProp(key) {
        return this._props[key];
    }
    /**
     * @internal
     */ _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
        if (val !== this._props[key]) {
            this._props[key] = val;
            if (shouldUpdate && this._instance) this._update();
            // reflect
            if (shouldReflect) {
                if (val === true) this.setAttribute((0, _shared.hyphenate)(key), "");
                else if (typeof val === "string" || typeof val === "number") this.setAttribute((0, _shared.hyphenate)(key), val + "");
                else if (!val) this.removeAttribute((0, _shared.hyphenate)(key));
            }
        }
    }
    _update() {
        render(this._createVNode(), this.shadowRoot);
    }
    _createVNode() {
        const vnode = (0, _runtimeCore.createVNode)(this._def, (0, _shared.extend)({}, this._props));
        if (!this._instance) vnode.ce = (instance)=>{
            this._instance = instance;
            instance.isCE = true;
            instance.ceReload = (newStyles)=>{
                // always reset styles
                if (this._styles) {
                    this._styles.forEach((s)=>this.shadowRoot.removeChild(s));
                    this._styles.length = 0;
                }
                this._applyStyles(newStyles);
                // if this is an async component, ceReload is called from the inner
                // component so no need to reload the async wrapper
                if (!this._def.__asyncLoader) {
                    // reload
                    this._instance = null;
                    this._update();
                }
            };
            // intercept emit
            instance.emit = (event, ...args)=>{
                this.dispatchEvent(new CustomEvent(event, {
                    detail: args
                }));
            };
            // locate nearest Vue custom element parent for provide/inject
            let parent = this;
            while(parent = parent && (parent.parentNode || parent.host))if (parent instanceof VueElement) {
                instance.parent = parent._instance;
                break;
            }
        };
        return vnode;
    }
    _applyStyles(styles) {
        if (styles) styles.forEach((css)=>{
            const s = document.createElement("style");
            s.textContent = css;
            this.shadowRoot.appendChild(s);
            (this._styles || (this._styles = [])).push(s);
        });
    }
}
function useCssModule(name = "$style") {
    /* istanbul ignore else */ {
        const instance = (0, _runtimeCore.getCurrentInstance)();
        if (!instance) {
            (0, _runtimeCore.warn)(`useCssModule must be called inside setup()`);
            return 0, _shared.EMPTY_OBJ;
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            (0, _runtimeCore.warn)(`Current instance does not have CSS modules injected.`);
            return 0, _shared.EMPTY_OBJ;
        }
        const mod = modules[name];
        if (!mod) {
            (0, _runtimeCore.warn)(`Current instance does not have CSS module named "${name}".`);
            return 0, _shared.EMPTY_OBJ;
        }
        return mod;
    }
}
/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */ function useCssVars(getter) {
    const instance = (0, _runtimeCore.getCurrentInstance)();
    /* istanbul ignore next */ if (!instance) {
        (0, _runtimeCore.warn)(`useCssVars is called without current active component instance.`);
        return;
    }
    const setVars = ()=>setVarsOnVNode(instance.subTree, getter(instance.proxy));
    (0, _runtimeCore.watchPostEffect)(setVars);
    (0, _runtimeCore.onMounted)(()=>{
        const ob = new MutationObserver(setVars);
        ob.observe(instance.subTree.el.parentNode, {
            childList: true
        });
        (0, _runtimeCore.onUnmounted)(()=>ob.disconnect());
    });
}
function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128 /* SUSPENSE */ ) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) suspense.effects.push(()=>{
            setVarsOnVNode(suspense.activeBranch, vars);
        });
    }
    // drill down HOCs until it's a non-component vnode
    while(vnode.component)vnode = vnode.component.subTree;
    if (vnode.shapeFlag & 1 /* ELEMENT */  && vnode.el) setVarsOnNode(vnode.el, vars);
    else if (vnode.type === (0, _runtimeCore.Fragment)) vnode.children.forEach((c)=>setVarsOnVNode(c, vars));
    else if (vnode.type === (0, _runtimeCore.Static)) {
        let { el , anchor  } = vnode;
        while(el){
            setVarsOnNode(el, vars);
            if (el === anchor) break;
            el = el.nextSibling;
        }
    }
}
function setVarsOnNode(el, vars) {
    if (el.nodeType === 1) {
        const style = el.style;
        for(const key in vars)style.setProperty(`--${key}`, vars[key]);
    }
}
const TRANSITION = "transition";
const ANIMATION = "animation";
// DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.
const Transition = (props, { slots  })=>(0, _runtimeCore.h)((0, _runtimeCore.BaseTransition), resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [
        String,
        Number,
        Object
    ],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const TransitionPropsValidators = Transition.props = /*#__PURE__*/ (0, _shared.extend)({}, (0, _runtimeCore.BaseTransition).props, DOMTransitionPropsValidators);
/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */ const callHook = (hook, args = [])=>{
    if ((0, _shared.isArray)(hook)) hook.forEach((h)=>h(...args));
    else if (hook) hook(...args);
};
/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */ const hasExplicitCallback = (hook)=>{
    return hook ? (0, _shared.isArray)(hook) ? hook.some((h)=>h.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for(const key in rawProps)if (!(key in DOMTransitionPropsValidators)) baseProps[key] = rawProps[key];
    if (rawProps.css === false) return baseProps;
    const { name ="v" , type , duration , enterFromClass =`${name}-enter-from` , enterActiveClass =`${name}-enter-active` , enterToClass =`${name}-enter-to` , appearFromClass =enterFromClass , appearActiveClass =enterActiveClass , appearToClass =enterToClass , leaveFromClass =`${name}-leave-from` , leaveActiveClass =`${name}-leave-active` , leaveToClass =`${name}-leave-to`  } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter , onEnter , onEnterCancelled , onLeave , onLeaveCancelled , onBeforeAppear =onBeforeEnter , onAppear =onEnter , onAppearCancelled =onEnterCancelled  } = baseProps;
    const finishEnter = (el, isAppear, done)=>{
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done)=>{
        el._isLeaving = false;
        removeTransitionClass(el, leaveFromClass);
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear)=>{
        return (el, done)=>{
            const hook = isAppear ? onAppear : onEnter;
            const resolve = ()=>finishEnter(el, isAppear, done);
            callHook(hook, [
                el,
                resolve
            ]);
            nextFrame(()=>{
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!hasExplicitCallback(hook)) whenTransitionEnds(el, type, enterDuration, resolve);
            });
        };
    };
    return (0, _shared.extend)(baseProps, {
        onBeforeEnter (el) {
            callHook(onBeforeEnter, [
                el
            ]);
            addTransitionClass(el, enterFromClass);
            addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear (el) {
            callHook(onBeforeAppear, [
                el
            ]);
            addTransitionClass(el, appearFromClass);
            addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave (el, done) {
            el._isLeaving = true;
            const resolve = ()=>finishLeave(el, done);
            addTransitionClass(el, leaveFromClass);
            // force reflow so *-leave-from classes immediately take effect (#2593)
            forceReflow();
            addTransitionClass(el, leaveActiveClass);
            nextFrame(()=>{
                if (!el._isLeaving) // cancelled
                return;
                removeTransitionClass(el, leaveFromClass);
                addTransitionClass(el, leaveToClass);
                if (!hasExplicitCallback(onLeave)) whenTransitionEnds(el, type, leaveDuration, resolve);
            });
            callHook(onLeave, [
                el,
                resolve
            ]);
        },
        onEnterCancelled (el) {
            finishEnter(el, false);
            callHook(onEnterCancelled, [
                el
            ]);
        },
        onAppearCancelled (el) {
            finishEnter(el, true);
            callHook(onAppearCancelled, [
                el
            ]);
        },
        onLeaveCancelled (el) {
            finishLeave(el);
            callHook(onLeaveCancelled, [
                el
            ]);
        }
    });
}
function normalizeDuration(duration) {
    if (duration == null) return null;
    else if ((0, _shared.isObject)(duration)) return [
        NumberOf(duration.enter),
        NumberOf(duration.leave)
    ];
    else {
        const n = NumberOf(duration);
        return [
            n,
            n
        ];
    }
}
function NumberOf(val) {
    const res = (0, _shared.toNumber)(val);
    validateDuration(res);
    return res;
}
function validateDuration(val) {
    if (typeof val !== "number") (0, _runtimeCore.warn)(`<transition> explicit duration is not a valid number - ` + `got ${JSON.stringify(val)}.`);
    else if (isNaN(val)) (0, _runtimeCore.warn)(`<transition> explicit duration is NaN - ` + "the duration expression might be incorrect.");
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.add(c));
    (el._vtc || (el._vtc = new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.remove(c));
    const { _vtc  } = el;
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) el._vtc = undefined;
    }
}
function nextFrame(cb) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(cb);
    });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = el._endId = ++endId;
    const resolveIfNotStale = ()=>{
        if (id === el._endId) resolve();
    };
    if (explicitTimeout) return setTimeout(resolveIfNotStale, explicitTimeout);
    const { type , timeout , propCount  } = getTransitionInfo(el, expectedType);
    if (!type) return resolve();
    const endEvent = type + "end";
    let ended = 0;
    const end = ()=>{
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
    };
    const onEnd = (e)=>{
        if (e.target === el && ++ended >= propCount) end();
    };
    setTimeout(()=>{
        if (ended < propCount) end();
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    const getStyleProperties = (key)=>(styles[key] || "").split(", ");
    const transitionDelays = getStyleProperties(TRANSITION + "Delay");
    const transitionDurations = getStyleProperties(TRANSITION + "Duration");
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(ANIMATION + "Delay");
    const animationDurations = getStyleProperties(ANIMATION + "Duration");
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    /* istanbul ignore if */ if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
        propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + "Property"]);
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    while(delays.length < durations.length)delays = delays.concat(delays);
    return Math.max(...durations.map((d, i)=>toMs(d) + toMs(delays[i])));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(",", ".")) * 1000;
}
// synchronously force layout to put elements into a certain state
function forceReflow() {
    return document.body.offsetHeight;
}
const positionMap = new WeakMap();
const newPositionMap = new WeakMap();
const TransitionGroupImpl = {
    name: "TransitionGroup",
    props: /*#__PURE__*/ (0, _shared.extend)({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup (props, { slots  }) {
        const instance = (0, _runtimeCore.getCurrentInstance)();
        const state = (0, _runtimeCore.useTransitionState)();
        let prevChildren;
        let children;
        (0, _runtimeCore.onUpdated)(()=>{
            // children is guaranteed to exist after initial render
            if (!prevChildren.length) return;
            const moveClass = props.moveClass || `${props.name || "v"}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) return;
            // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            // force reflow to put everything in position
            forceReflow();
            movedChildren.forEach((c)=>{
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = "";
                const cb = el._moveCb = (e)=>{
                    if (e && e.target !== el) return;
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener("transitionend", cb);
                        el._moveCb = null;
                        removeTransitionClass(el, moveClass);
                    }
                };
                el.addEventListener("transitionend", cb);
            });
        });
        return ()=>{
            const rawProps = (0, _runtimeCore.toRaw)(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || (0, _runtimeCore.Fragment);
            prevChildren = children;
            children = slots.default ? (0, _runtimeCore.getTransitionRawChildren)(slots.default()) : [];
            for(let i = 0; i < children.length; i++){
                const child = children[i];
                if (child.key != null) (0, _runtimeCore.setTransitionHooks)(child, (0, _runtimeCore.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
                else (0, _runtimeCore.warn)(`<TransitionGroup> children must be keyed.`);
            }
            if (prevChildren) for(let i1 = 0; i1 < prevChildren.length; i1++){
                const child1 = prevChildren[i1];
                (0, _runtimeCore.setTransitionHooks)(child1, (0, _runtimeCore.resolveTransitionHooks)(child1, cssTransitionProps, state, instance));
                positionMap.set(child1, child1.el.getBoundingClientRect());
            }
            return (0, _runtimeCore.createVNode)(tag, null, children);
        };
    }
};
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
    const el = c.el;
    if (el._moveCb) el._moveCb();
    if (el._enterCb) el._enterCb();
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = "0s";
        return c;
    }
}
function hasCSSTransform(el, root, moveClass) {
    // Detect whether an element with the move class applied has
    // CSS transitions. Since the element may be inside an entering
    // transition at this very moment, we make a clone of it and remove
    // all other transition classes applied to ensure only the move class
    // is applied.
    const clone = el.cloneNode();
    if (el._vtc) el._vtc.forEach((cls)=>{
        cls.split(/\s+/).forEach((c)=>c && clone.classList.remove(c));
    });
    moveClass.split(/\s+/).forEach((c)=>c && clone.classList.add(c));
    clone.style.display = "none";
    const container = root.nodeType === 1 ? root : root.parentNode;
    container.appendChild(clone);
    const { hasTransform  } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}
const getModelAssigner = (vnode)=>{
    const fn = vnode.props["onUpdate:modelValue"] || false;
    return (0, _shared.isArray)(fn) ? (value)=>(0, _shared.invokeArrayFns)(fn, value) : fn;
};
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        target.dispatchEvent(new Event("input"));
    }
}
// We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.
const vModelText = {
    created (el, { modifiers: { lazy , trim , number  }  }, vnode) {
        el._assign = getModelAssigner(vnode);
        const castToNumber = number || vnode.props && vnode.props.type === "number";
        addEventListener(el, lazy ? "change" : "input", (e)=>{
            if (e.target.composing) return;
            let domValue = el.value;
            if (trim) domValue = domValue.trim();
            if (castToNumber) domValue = (0, _shared.toNumber)(domValue);
            el._assign(domValue);
        });
        if (trim) addEventListener(el, "change", ()=>{
            el.value = el.value.trim();
        });
        if (!lazy) {
            addEventListener(el, "compositionstart", onCompositionStart);
            addEventListener(el, "compositionend", onCompositionEnd);
            // Safari < 10.2 & UIWebView doesn't fire compositionend when
            // switching focus before confirming composition choice
            // this also fixes the issue where some browsers e.g. iOS Chrome
            // fires "change" instead of "input" on autocomplete.
            addEventListener(el, "change", onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted (el, { value  }) {
        el.value = value == null ? "" : value;
    },
    beforeUpdate (el, { value , modifiers: { lazy , trim , number  }  }, vnode) {
        el._assign = getModelAssigner(vnode);
        // avoid clearing unresolved text. #2302
        if (el.composing) return;
        if (document.activeElement === el && el.type !== "range") {
            if (lazy) return;
            if (trim && el.value.trim() === value) return;
            if ((number || el.type === "number") && (0, _shared.toNumber)(el.value) === value) return;
        }
        const newValue = value == null ? "" : value;
        if (el.value !== newValue) el.value = newValue;
    }
};
const vModelCheckbox = {
    // #4096 array checkboxes need to be deep traversed
    deep: true,
    created (el, _, vnode) {
        el._assign = getModelAssigner(vnode);
        addEventListener(el, "change", ()=>{
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el._assign;
            if ((0, _shared.isArray)(modelValue)) {
                const index = (0, _shared.looseIndexOf)(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) assign(modelValue.concat(elementValue));
                else if (!checked && found) {
                    const filtered = [
                        ...modelValue
                    ];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            } else if ((0, _shared.isSet)(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) cloned.add(elementValue);
                else cloned.delete(elementValue);
                assign(cloned);
            } else assign(getCheckboxValue(el, checked));
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate (el, binding, vnode) {
        el._assign = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
    }
};
function setChecked(el, { value , oldValue  }, vnode) {
    el._modelValue = value;
    if ((0, _shared.isArray)(value)) el.checked = (0, _shared.looseIndexOf)(value, vnode.props.value) > -1;
    else if ((0, _shared.isSet)(value)) el.checked = value.has(vnode.props.value);
    else if (value !== oldValue) el.checked = (0, _shared.looseEqual)(value, getCheckboxValue(el, true));
}
const vModelRadio = {
    created (el, { value  }, vnode) {
        el.checked = (0, _shared.looseEqual)(value, vnode.props.value);
        el._assign = getModelAssigner(vnode);
        addEventListener(el, "change", ()=>{
            el._assign(getValue(el));
        });
    },
    beforeUpdate (el, { value , oldValue  }, vnode) {
        el._assign = getModelAssigner(vnode);
        if (value !== oldValue) el.checked = (0, _shared.looseEqual)(value, vnode.props.value);
    }
};
const vModelSelect = {
    // <select multiple> value need to be deep traversed
    deep: true,
    created (el, { value , modifiers: { number  }  }, vnode) {
        const isSetModel = (0, _shared.isSet)(value);
        addEventListener(el, "change", ()=>{
            const selectedVal = Array.prototype.filter.call(el.options, (o)=>o.selected).map((o)=>number ? (0, _shared.toNumber)(getValue(o)) : getValue(o));
            el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
        });
        el._assign = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted (el, { value  }) {
        setSelected(el, value);
    },
    beforeUpdate (el, _binding, vnode) {
        el._assign = getModelAssigner(vnode);
    },
    updated (el, { value  }) {
        setSelected(el, value);
    }
};
function setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !(0, _shared.isArray)(value) && !(0, _shared.isSet)(value)) {
        (0, _runtimeCore.warn)(`<select multiple v-model> expects an Array or Set value for its binding, ` + `but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
        return;
    }
    for(let i = 0, l = el.options.length; i < l; i++){
        const option = el.options[i];
        const optionValue = getValue(option);
        if (isMultiple) {
            if ((0, _shared.isArray)(value)) option.selected = (0, _shared.looseIndexOf)(value, optionValue) > -1;
            else option.selected = value.has(optionValue);
        } else if ((0, _shared.looseEqual)(getValue(option), value)) {
            if (el.selectedIndex !== i) el.selectedIndex = i;
            return;
        }
    }
    if (!isMultiple && el.selectedIndex !== -1) el.selectedIndex = -1;
}
// retrieve raw value set via :value bindings
function getValue(el) {
    return "_value" in el ? el._value : el.value;
}
// retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
function getCheckboxValue(el, checked) {
    const key = checked ? "_trueValue" : "_falseValue";
    return key in el ? el[key] : checked;
}
const vModelDynamic = {
    created (el, binding, vnode) {
        callModelHook(el, binding, vnode, null, "created");
    },
    mounted (el, binding, vnode) {
        callModelHook(el, binding, vnode, null, "mounted");
    },
    beforeUpdate (el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
    },
    updated (el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, "updated");
    }
};
function resolveDynamicModel(tagName, type) {
    switch(tagName){
        case "SELECT":
            return vModelSelect;
        case "TEXTAREA":
            return vModelText;
        default:
            switch(type){
                case "checkbox":
                    return vModelCheckbox;
                case "radio":
                    return vModelRadio;
                default:
                    return vModelText;
            }
    }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
    const modelToUse = resolveDynamicModel(el.tagName, vnode.props && vnode.props.type);
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}
// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
function initVModelForSSR() {
    vModelText.getSSRProps = ({ value  })=>({
            value
        });
    vModelRadio.getSSRProps = ({ value  }, vnode)=>{
        if (vnode.props && (0, _shared.looseEqual)(vnode.props.value, value)) return {
            checked: true
        };
    };
    vModelCheckbox.getSSRProps = ({ value  }, vnode)=>{
        if ((0, _shared.isArray)(value)) {
            if (vnode.props && (0, _shared.looseIndexOf)(value, vnode.props.value) > -1) return {
                checked: true
            };
        } else if ((0, _shared.isSet)(value)) {
            if (vnode.props && value.has(vnode.props.value)) return {
                checked: true
            };
        } else if (value) return {
            checked: true
        };
    };
    vModelDynamic.getSSRProps = (binding, vnode)=>{
        if (typeof vnode.type !== "string") return;
        const modelToUse = resolveDynamicModel(// resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
        vnode.type.toUpperCase(), vnode.props && vnode.props.type);
        if (modelToUse.getSSRProps) return modelToUse.getSSRProps(binding, vnode);
    };
}
const systemModifiers = [
    "ctrl",
    "shift",
    "alt",
    "meta"
];
const modifierGuards = {
    stop: (e)=>e.stopPropagation(),
    prevent: (e)=>e.preventDefault(),
    self: (e)=>e.target !== e.currentTarget,
    ctrl: (e)=>!e.ctrlKey,
    shift: (e)=>!e.shiftKey,
    alt: (e)=>!e.altKey,
    meta: (e)=>!e.metaKey,
    left: (e)=>"button" in e && e.button !== 0,
    middle: (e)=>"button" in e && e.button !== 1,
    right: (e)=>"button" in e && e.button !== 2,
    exact: (e, modifiers)=>systemModifiers.some((m)=>e[`${m}Key`] && !modifiers.includes(m))
};
/**
 * @private
 */ const withModifiers = (fn, modifiers)=>{
    return (event, ...args)=>{
        for(let i = 0; i < modifiers.length; i++){
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers)) return;
        }
        return fn(event, ...args);
    };
};
// Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.
const keyNames = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
};
/**
 * @private
 */ const withKeys = (fn, modifiers)=>{
    return (event)=>{
        if (!("key" in event)) return;
        const eventKey = (0, _shared.hyphenate)(event.key);
        if (modifiers.some((k)=>k === eventKey || keyNames[k] === eventKey)) return fn(event);
    };
};
const vShow = {
    beforeMount (el, { value  }, { transition  }) {
        el._vod = el.style.display === "none" ? "" : el.style.display;
        if (transition && value) transition.beforeEnter(el);
        else setDisplay(el, value);
    },
    mounted (el, { value  }, { transition  }) {
        if (transition && value) transition.enter(el);
    },
    updated (el, { value , oldValue  }, { transition  }) {
        if (!value === !oldValue) return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            } else transition.leave(el, ()=>{
                setDisplay(el, false);
            });
        } else setDisplay(el, value);
    },
    beforeUnmount (el, { value  }) {
        setDisplay(el, value);
    }
};
function setDisplay(el, value) {
    el.style.display = value ? el._vod : "none";
}
// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
function initVShowForSSR() {
    vShow.getSSRProps = ({ value  })=>{
        if (!value) return {
            style: {
                display: "none"
            }
        };
    };
}
const rendererOptions = /*#__PURE__*/ (0, _shared.extend)({
    patchProp
}, nodeOps);
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer;
let enabledHydration = false;
function ensureRenderer() {
    return renderer || (renderer = (0, _runtimeCore.createRenderer)(rendererOptions));
}
function ensureHydrationRenderer() {
    renderer = enabledHydration ? renderer : (0, _runtimeCore.createHydrationRenderer)(rendererOptions);
    enabledHydration = true;
    return renderer;
}
// use explicit type casts here to avoid import() calls in rolled-up d.ts
const render = (...args)=>{
    ensureRenderer().render(...args);
};
const hydrate = (...args)=>{
    ensureHydrationRenderer().hydrate(...args);
};
const createApp = (...args)=>{
    const app = ensureRenderer().createApp(...args);
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
    const { mount  } = app;
    app.mount = (containerOrSelector)=>{
        const container = normalizeContainer(containerOrSelector);
        if (!container) return;
        const component = app._component;
        if (!(0, _shared.isFunction)(component) && !component.render && !component.template) // __UNSAFE__
        // Reason: potential execution of JS expressions in in-DOM template.
        // The user must make sure the in-DOM template is trusted. If it's
        // rendered by the server, the template should not contain any user data.
        component.template = container.innerHTML;
        // clear content before mounting
        container.innerHTML = "";
        const proxy = mount(container, false, container instanceof SVGElement);
        if (container instanceof Element) {
            container.removeAttribute("v-cloak");
            container.setAttribute("data-v-app", "");
        }
        return proxy;
    };
    return app;
};
const createSSRApp = (...args)=>{
    const app = ensureHydrationRenderer().createApp(...args);
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
    const { mount  } = app;
    app.mount = (containerOrSelector)=>{
        const container = normalizeContainer(containerOrSelector);
        if (container) return mount(container, true, container instanceof SVGElement);
    };
    return app;
};
function injectNativeTagCheck(app) {
    // Inject `isNativeTag`
    // this is used for component name validation (dev only)
    Object.defineProperty(app.config, "isNativeTag", {
        value: (tag)=>(0, _shared.isHTMLTag)(tag) || (0, _shared.isSVGTag)(tag),
        writable: false
    });
}
// dev only
function injectCompilerOptionsCheck(app) {
    if ((0, _runtimeCore.isRuntimeOnly)()) {
        const isCustomElement = app.config.isCustomElement;
        Object.defineProperty(app.config, "isCustomElement", {
            get () {
                return isCustomElement;
            },
            set () {
                (0, _runtimeCore.warn)(`The \`isCustomElement\` config option is deprecated. Use ` + `\`compilerOptions.isCustomElement\` instead.`);
            }
        });
        const compilerOptions = app.config.compilerOptions;
        const msg = `The \`compilerOptions\` config option is only respected when using ` + `a build of Vue.js that includes the runtime compiler (aka "full build"). ` + `Since you are using the runtime-only build, \`compilerOptions\` ` + `must be passed to \`@vue/compiler-dom\` in the build setup instead.\n` + `- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.\n` + `- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n` + `- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
        Object.defineProperty(app.config, "compilerOptions", {
            get () {
                (0, _runtimeCore.warn)(msg);
                return compilerOptions;
            },
            set () {
                (0, _runtimeCore.warn)(msg);
            }
        });
    }
}
function normalizeContainer(container) {
    if ((0, _shared.isString)(container)) {
        const res = document.querySelector(container);
        if (!res) (0, _runtimeCore.warn)(`Failed to mount app: mount target selector "${container}" returned null.`);
        return res;
    }
    if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") (0, _runtimeCore.warn)(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
    return container;
}
let ssrDirectiveInitialized = false;
/**
 * @internal
 */ const initDirectivesForSSR = ()=>{
    if (!ssrDirectiveInitialized) {
        ssrDirectiveInitialized = true;
        initVModelForSSR();
        initVShowForSSR();
    }
};

},{"@vue/runtime-core":"lmqBl","@vue/shared":"3SM3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lmqBl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EffectScope", ()=>(0, _reactivity.EffectScope));
parcelHelpers.export(exports, "ReactiveEffect", ()=>(0, _reactivity.ReactiveEffect));
parcelHelpers.export(exports, "customRef", ()=>(0, _reactivity.customRef));
parcelHelpers.export(exports, "effect", ()=>(0, _reactivity.effect));
parcelHelpers.export(exports, "effectScope", ()=>(0, _reactivity.effectScope));
parcelHelpers.export(exports, "getCurrentScope", ()=>(0, _reactivity.getCurrentScope));
parcelHelpers.export(exports, "isProxy", ()=>(0, _reactivity.isProxy));
parcelHelpers.export(exports, "isReactive", ()=>(0, _reactivity.isReactive));
parcelHelpers.export(exports, "isReadonly", ()=>(0, _reactivity.isReadonly));
parcelHelpers.export(exports, "isRef", ()=>(0, _reactivity.isRef));
parcelHelpers.export(exports, "isShallow", ()=>(0, _reactivity.isShallow));
parcelHelpers.export(exports, "markRaw", ()=>(0, _reactivity.markRaw));
parcelHelpers.export(exports, "onScopeDispose", ()=>(0, _reactivity.onScopeDispose));
parcelHelpers.export(exports, "proxyRefs", ()=>(0, _reactivity.proxyRefs));
parcelHelpers.export(exports, "reactive", ()=>(0, _reactivity.reactive));
parcelHelpers.export(exports, "readonly", ()=>(0, _reactivity.readonly));
parcelHelpers.export(exports, "ref", ()=>(0, _reactivity.ref));
parcelHelpers.export(exports, "shallowReactive", ()=>(0, _reactivity.shallowReactive));
parcelHelpers.export(exports, "shallowReadonly", ()=>(0, _reactivity.shallowReadonly));
parcelHelpers.export(exports, "shallowRef", ()=>(0, _reactivity.shallowRef));
parcelHelpers.export(exports, "stop", ()=>(0, _reactivity.stop));
parcelHelpers.export(exports, "toRaw", ()=>(0, _reactivity.toRaw));
parcelHelpers.export(exports, "toRef", ()=>(0, _reactivity.toRef));
parcelHelpers.export(exports, "toRefs", ()=>(0, _reactivity.toRefs));
parcelHelpers.export(exports, "triggerRef", ()=>(0, _reactivity.triggerRef));
parcelHelpers.export(exports, "unref", ()=>(0, _reactivity.unref));
parcelHelpers.export(exports, "camelize", ()=>(0, _shared.camelize));
parcelHelpers.export(exports, "capitalize", ()=>(0, _shared.capitalize));
parcelHelpers.export(exports, "normalizeClass", ()=>(0, _shared.normalizeClass));
parcelHelpers.export(exports, "normalizeProps", ()=>(0, _shared.normalizeProps));
parcelHelpers.export(exports, "normalizeStyle", ()=>(0, _shared.normalizeStyle));
parcelHelpers.export(exports, "toDisplayString", ()=>(0, _shared.toDisplayString));
parcelHelpers.export(exports, "toHandlerKey", ()=>(0, _shared.toHandlerKey));
parcelHelpers.export(exports, "BaseTransition", ()=>BaseTransition);
parcelHelpers.export(exports, "Comment", ()=>Comment);
parcelHelpers.export(exports, "Fragment", ()=>Fragment);
parcelHelpers.export(exports, "KeepAlive", ()=>KeepAlive);
parcelHelpers.export(exports, "Static", ()=>Static);
parcelHelpers.export(exports, "Suspense", ()=>Suspense);
parcelHelpers.export(exports, "Teleport", ()=>Teleport);
parcelHelpers.export(exports, "Text", ()=>Text);
parcelHelpers.export(exports, "callWithAsyncErrorHandling", ()=>callWithAsyncErrorHandling);
parcelHelpers.export(exports, "callWithErrorHandling", ()=>callWithErrorHandling);
parcelHelpers.export(exports, "cloneVNode", ()=>cloneVNode);
parcelHelpers.export(exports, "compatUtils", ()=>compatUtils);
parcelHelpers.export(exports, "computed", ()=>computed);
parcelHelpers.export(exports, "createBlock", ()=>createBlock);
parcelHelpers.export(exports, "createCommentVNode", ()=>createCommentVNode);
parcelHelpers.export(exports, "createElementBlock", ()=>createElementBlock);
parcelHelpers.export(exports, "createElementVNode", ()=>createBaseVNode);
parcelHelpers.export(exports, "createHydrationRenderer", ()=>createHydrationRenderer);
parcelHelpers.export(exports, "createPropsRestProxy", ()=>createPropsRestProxy);
parcelHelpers.export(exports, "createRenderer", ()=>createRenderer);
parcelHelpers.export(exports, "createSlots", ()=>createSlots);
parcelHelpers.export(exports, "createStaticVNode", ()=>createStaticVNode);
parcelHelpers.export(exports, "createTextVNode", ()=>createTextVNode);
parcelHelpers.export(exports, "createVNode", ()=>createVNode);
parcelHelpers.export(exports, "defineAsyncComponent", ()=>defineAsyncComponent);
parcelHelpers.export(exports, "defineComponent", ()=>defineComponent);
parcelHelpers.export(exports, "defineEmits", ()=>defineEmits);
parcelHelpers.export(exports, "defineExpose", ()=>defineExpose);
parcelHelpers.export(exports, "defineProps", ()=>defineProps);
parcelHelpers.export(exports, "devtools", ()=>devtools);
parcelHelpers.export(exports, "getCurrentInstance", ()=>getCurrentInstance);
parcelHelpers.export(exports, "getTransitionRawChildren", ()=>getTransitionRawChildren);
parcelHelpers.export(exports, "guardReactiveProps", ()=>guardReactiveProps);
parcelHelpers.export(exports, "h", ()=>h);
parcelHelpers.export(exports, "handleError", ()=>handleError);
parcelHelpers.export(exports, "initCustomFormatter", ()=>initCustomFormatter);
parcelHelpers.export(exports, "inject", ()=>inject);
parcelHelpers.export(exports, "isMemoSame", ()=>isMemoSame);
parcelHelpers.export(exports, "isRuntimeOnly", ()=>isRuntimeOnly);
parcelHelpers.export(exports, "isVNode", ()=>isVNode);
parcelHelpers.export(exports, "mergeDefaults", ()=>mergeDefaults);
parcelHelpers.export(exports, "mergeProps", ()=>mergeProps);
parcelHelpers.export(exports, "nextTick", ()=>nextTick);
parcelHelpers.export(exports, "onActivated", ()=>onActivated);
parcelHelpers.export(exports, "onBeforeMount", ()=>onBeforeMount);
parcelHelpers.export(exports, "onBeforeUnmount", ()=>onBeforeUnmount);
parcelHelpers.export(exports, "onBeforeUpdate", ()=>onBeforeUpdate);
parcelHelpers.export(exports, "onDeactivated", ()=>onDeactivated);
parcelHelpers.export(exports, "onErrorCaptured", ()=>onErrorCaptured);
parcelHelpers.export(exports, "onMounted", ()=>onMounted);
parcelHelpers.export(exports, "onRenderTracked", ()=>onRenderTracked);
parcelHelpers.export(exports, "onRenderTriggered", ()=>onRenderTriggered);
parcelHelpers.export(exports, "onServerPrefetch", ()=>onServerPrefetch);
parcelHelpers.export(exports, "onUnmounted", ()=>onUnmounted);
parcelHelpers.export(exports, "onUpdated", ()=>onUpdated);
parcelHelpers.export(exports, "openBlock", ()=>openBlock);
parcelHelpers.export(exports, "popScopeId", ()=>popScopeId);
parcelHelpers.export(exports, "provide", ()=>provide);
parcelHelpers.export(exports, "pushScopeId", ()=>pushScopeId);
parcelHelpers.export(exports, "queuePostFlushCb", ()=>queuePostFlushCb);
parcelHelpers.export(exports, "registerRuntimeCompiler", ()=>registerRuntimeCompiler);
parcelHelpers.export(exports, "renderList", ()=>renderList);
parcelHelpers.export(exports, "renderSlot", ()=>renderSlot);
parcelHelpers.export(exports, "resolveComponent", ()=>resolveComponent);
parcelHelpers.export(exports, "resolveDirective", ()=>resolveDirective);
parcelHelpers.export(exports, "resolveDynamicComponent", ()=>resolveDynamicComponent);
parcelHelpers.export(exports, "resolveFilter", ()=>resolveFilter);
parcelHelpers.export(exports, "resolveTransitionHooks", ()=>resolveTransitionHooks);
parcelHelpers.export(exports, "setBlockTracking", ()=>setBlockTracking);
parcelHelpers.export(exports, "setDevtoolsHook", ()=>setDevtoolsHook);
parcelHelpers.export(exports, "setTransitionHooks", ()=>setTransitionHooks);
parcelHelpers.export(exports, "ssrContextKey", ()=>ssrContextKey);
parcelHelpers.export(exports, "ssrUtils", ()=>ssrUtils);
parcelHelpers.export(exports, "toHandlers", ()=>toHandlers);
parcelHelpers.export(exports, "transformVNodeArgs", ()=>transformVNodeArgs);
parcelHelpers.export(exports, "useAttrs", ()=>useAttrs);
parcelHelpers.export(exports, "useSSRContext", ()=>useSSRContext);
parcelHelpers.export(exports, "useSlots", ()=>useSlots);
parcelHelpers.export(exports, "useTransitionState", ()=>useTransitionState);
parcelHelpers.export(exports, "version", ()=>version);
parcelHelpers.export(exports, "warn", ()=>warn);
parcelHelpers.export(exports, "watch", ()=>watch);
parcelHelpers.export(exports, "watchEffect", ()=>watchEffect);
parcelHelpers.export(exports, "watchPostEffect", ()=>watchPostEffect);
parcelHelpers.export(exports, "watchSyncEffect", ()=>watchSyncEffect);
parcelHelpers.export(exports, "withAsyncContext", ()=>withAsyncContext);
parcelHelpers.export(exports, "withCtx", ()=>withCtx);
parcelHelpers.export(exports, "withDefaults", ()=>withDefaults);
parcelHelpers.export(exports, "withDirectives", ()=>withDirectives);
parcelHelpers.export(exports, "withMemo", ()=>withMemo);
parcelHelpers.export(exports, "withScopeId", ()=>withScopeId);
var _reactivity = require("@vue/reactivity");
var _shared = require("@vue/shared");
const stack = [];
function pushWarningContext(vnode) {
    stack.push(vnode);
}
function popWarningContext() {
    stack.pop();
}
function warn(msg, ...args) {
    // avoid props formatting or warn handler tracking deps that might be mutated
    // during patch, leading to infinite recursion.
    (0, _reactivity.pauseTracking)();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) callWithErrorHandling(appWarnHandler, instance, 11 /* APP_WARN_HANDLER */ , [
        msg + args.join(""),
        instance && instance.proxy,
        trace.map(({ vnode  })=>`at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
        trace
    ]);
    else {
        const warnArgs = [
            `[Vue warn]: ${msg}`,
            ...args
        ];
        /* istanbul ignore if */ if (trace.length && // avoid spamming console during tests
        true) warnArgs.push(`\n`, ...formatTrace(trace));
        console.warn(...warnArgs);
    }
    (0, _reactivity.resetTracking)();
}
function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) return [];
    // we can't just use the stack because it will be incomplete during updates
    // that did not start from the root. Re-construct the parent chain using
    // instance parent pointers.
    const normalizedStack = [];
    while(currentVNode){
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) last.recurseCount++;
        else normalizedStack.push({
            vnode: currentVNode,
            recurseCount: 0
        });
        const parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}
/* istanbul ignore next */ function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i)=>{
        logs.push(...i === 0 ? [] : [
            `\n`
        ], ...formatTraceEntry(entry));
    });
    return logs;
}
function formatTraceEntry({ vnode , recurseCount  }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props ? [
        open,
        ...formatProps(vnode.props),
        close
    ] : [
        open + close
    ];
}
/* istanbul ignore next */ function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key)=>{
        res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) res.push(` ...`);
    return res;
}
/* istanbul ignore next */ function formatProp(key, value, raw) {
    if ((0, _shared.isString)(value)) {
        value = JSON.stringify(value);
        return raw ? value : [
            `${key}=${value}`
        ];
    } else if (typeof value === "number" || typeof value === "boolean" || value == null) return raw ? value : [
        `${key}=${value}`
    ];
    else if ((0, _reactivity.isRef)(value)) {
        value = formatProp(key, (0, _reactivity.toRaw)(value.value), true);
        return raw ? value : [
            `${key}=Ref<`,
            value,
            `>`
        ];
    } else if ((0, _shared.isFunction)(value)) return [
        `${key}=fn${value.name ? `<${value.name}>` : ``}`
    ];
    else {
        value = (0, _reactivity.toRaw)(value);
        return raw ? value : [
            `${key}=`,
            value
        ];
    }
}
const ErrorTypeStrings = {
    ["sp" /* SERVER_PREFETCH */ ]: "serverPrefetch hook",
    ["bc" /* BEFORE_CREATE */ ]: "beforeCreate hook",
    ["c" /* CREATED */ ]: "created hook",
    ["bm" /* BEFORE_MOUNT */ ]: "beforeMount hook",
    ["m" /* MOUNTED */ ]: "mounted hook",
    ["bu" /* BEFORE_UPDATE */ ]: "beforeUpdate hook",
    ["u" /* UPDATED */ ]: "updated",
    ["bum" /* BEFORE_UNMOUNT */ ]: "beforeUnmount hook",
    ["um" /* UNMOUNTED */ ]: "unmounted hook",
    ["a" /* ACTIVATED */ ]: "activated hook",
    ["da" /* DEACTIVATED */ ]: "deactivated hook",
    ["ec" /* ERROR_CAPTURED */ ]: "errorCaptured hook",
    ["rtc" /* RENDER_TRACKED */ ]: "renderTracked hook",
    ["rtg" /* RENDER_TRIGGERED */ ]: "renderTriggered hook",
    [0 /* SETUP_FUNCTION */ ]: "setup function",
    [1 /* RENDER_FUNCTION */ ]: "render function",
    [2 /* WATCH_GETTER */ ]: "watcher getter",
    [3 /* WATCH_CALLBACK */ ]: "watcher callback",
    [4 /* WATCH_CLEANUP */ ]: "watcher cleanup function",
    [5 /* NATIVE_EVENT_HANDLER */ ]: "native event handler",
    [6 /* COMPONENT_EVENT_HANDLER */ ]: "component event handler",
    [7 /* VNODE_HOOK */ ]: "vnode hook",
    [8 /* DIRECTIVE_HOOK */ ]: "directive hook",
    [9 /* TRANSITION_HOOK */ ]: "transition hook",
    [10 /* APP_ERROR_HANDLER */ ]: "app errorHandler",
    [11 /* APP_WARN_HANDLER */ ]: "app warnHandler",
    [12 /* FUNCTION_REF */ ]: "ref function",
    [13 /* ASYNC_COMPONENT_LOADER */ ]: "async component loader",
    [14 /* SCHEDULER */ ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
        res = args ? fn(...args) : fn();
    } catch (err) {
        handleError(err, instance, type);
    }
    return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
    if ((0, _shared.isFunction)(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && (0, _shared.isPromise)(res)) res.catch((err)=>{
            handleError(err, instance, type);
        });
        return res;
    }
    const values = [];
    for(let i = 0; i < fn.length; i++)values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    return values;
}
function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        // the exposed instance is the render proxy to keep it consistent with 2.x
        const exposedInstance = instance.proxy;
        // in production the hook receives only the error code
        const errorInfo = ErrorTypeStrings[type];
        while(cur){
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) for(let i = 0; i < errorCapturedHooks.length; i++){
                if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) return;
            }
            cur = cur.parent;
        }
        // app-level handling
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            callWithErrorHandling(appErrorHandler, null, 10 /* APP_ERROR_HANDLER */ , [
                err,
                exposedInstance,
                errorInfo
            ]);
            return;
        }
    }
    logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
    {
        const info = ErrorTypeStrings[type];
        if (contextVNode) pushWarningContext(contextVNode);
        warn(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
        if (contextVNode) popWarningContext();
        // crash in dev by default so it's more noticeable
        if (throwInDev) throw err;
        else console.error(err);
    }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /*#__PURE__*/ Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
// #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.
function findInsertionIndex(id) {
    // the start index should be `flushIndex + 1`
    let start = flushIndex + 1;
    let end = queue.length;
    while(start < end){
        const middle = start + end >>> 1;
        const middleJobId = getId(queue[middle]);
        middleJobId < id ? start = middle + 1 : end = middle;
    }
    return start;
}
function queueJob(job) {
    // the dedupe search uses the startIndex argument of Array.includes()
    // by default the search index includes the current job that is being run
    // so it cannot recursively trigger itself again.
    // if the job is a watch() callback, the search will start with a +1 index to
    // allow it recursively trigger itself - it is the user's responsibility to
    // ensure it doesn't end up in an infinite loop.
    if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
        if (job.id == null) queue.push(job);
        else queue.splice(findInsertionIndex(job.id), 0, job);
        queueFlush();
    }
}
function queueFlush() {
    if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
    }
}
function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > flushIndex) queue.splice(i, 1);
}
function queueCb(cb, activeQueue, pendingQueue, index) {
    if (!(0, _shared.isArray)(cb)) {
        if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) pendingQueue.push(cb);
    } else // if cb is an array, it is a component lifecycle hook which can only be
    // triggered by a job, which is already deduped in the main queue, so
    // we can skip duplicate check here to improve perf
    pendingQueue.push(...cb);
    queueFlush();
}
function queuePreFlushCb(cb) {
    queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
    queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen, parentJob = null) {
    if (pendingPreFlushCbs.length) {
        currentPreFlushParentJob = parentJob;
        activePreFlushCbs = [
            ...new Set(pendingPreFlushCbs)
        ];
        pendingPreFlushCbs.length = 0;
        seen = seen || new Map();
        for(preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++){
            if (checkRecursiveUpdates(seen, activePreFlushCbs[preFlushIndex])) continue;
            activePreFlushCbs[preFlushIndex]();
        }
        activePreFlushCbs = null;
        preFlushIndex = 0;
        currentPreFlushParentJob = null;
        // recursively flush until it drains
        flushPreFlushCbs(seen, parentJob);
    }
}
function flushPostFlushCbs(seen) {
    // flush any pre cbs queued during the flush (e.g. pre watchers)
    flushPreFlushCbs();
    if (pendingPostFlushCbs.length) {
        const deduped = [
            ...new Set(pendingPostFlushCbs)
        ];
        pendingPostFlushCbs.length = 0;
        // #1947 already has active queue, nested flushPostFlushCbs call
        if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
        }
        activePostFlushCbs = deduped;
        seen = seen || new Map();
        activePostFlushCbs.sort((a, b)=>getId(a) - getId(b));
        for(postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++){
            if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) continue;
            activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
    }
}
const getId = (job)=>job.id == null ? Infinity : job.id;
function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    seen = seen || new Map();
    flushPreFlushCbs(seen);
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child so its render effect will have smaller
    //    priority number)
    // 2. If a component is unmounted during a parent component's update,
    //    its update can be skipped.
    queue.sort((a, b)=>getId(a) - getId(b));
    // conditional usage of checkRecursiveUpdate must be determined out of
    // try ... catch block since Rollup by default de-optimizes treeshaking
    // inside try-catch. This can leave all warning code unshaked. Although
    // they would get eventually shaken by a minifier like terser, some minifiers
    // would fail to do that (e.g. https://github.com/evanw/esbuild/issues/1610)
    const check = (job)=>checkRecursiveUpdates(seen, job);
    try {
        for(flushIndex = 0; flushIndex < queue.length; flushIndex++){
            const job = queue[flushIndex];
            if (job && job.active !== false) {
                if (check(job)) continue;
                // console.log(`running:`, job.id)
                callWithErrorHandling(job, null, 14 /* SCHEDULER */ );
            }
        }
    } finally{
        flushIndex = 0;
        queue.length = 0;
        flushPostFlushCbs(seen);
        isFlushing = false;
        currentFlushPromise = null;
        // some postFlushCb queued jobs!
        // keep flushing until it drains.
        if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) flushJobs(seen);
    }
}
function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) seen.set(fn, 1);
    else {
        const count = seen.get(fn);
        if (count > RECURSION_LIMIT) {
            const instance = fn.ownerInstance;
            const componentName = instance && getComponentName(instance.type);
            warn(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. ` + `This means you have a reactive effect that is mutating its own ` + `dependencies and thus recursively triggering itself. Possible sources ` + `include component template, render function, updated hook or ` + `watcher source function.`);
            return true;
        } else seen.set(fn, count + 1);
    }
}
/* eslint-disable no-restricted-globals */ let isHmrUpdating = false;
const hmrDirtyComponents = new Set();
(0, _shared.getGlobalThis)().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
};
const map = new Map();
function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
        createRecord(id, instance.type);
        record = map.get(id);
    }
    record.instances.add(instance);
}
function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
    if (map.has(id)) return false;
    map.set(id, {
        initialDef: normalizeClassComponent(initialDef),
        instances: new Set()
    });
    return true;
}
function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
    const record = map.get(id);
    if (!record) return;
    // update initial record (for not-yet-rendered component)
    record.initialDef.render = newRender;
    [
        ...record.instances
    ].forEach((instance)=>{
        if (newRender) {
            instance.render = newRender;
            normalizeClassComponent(instance.type).render = newRender;
        }
        instance.renderCache = [];
        // this flag forces child components with slot content to update
        isHmrUpdating = true;
        instance.update();
        isHmrUpdating = false;
    });
}
function reload(id, newComp) {
    const record = map.get(id);
    if (!record) return;
    newComp = normalizeClassComponent(newComp);
    // update initial def (for not-yet-rendered components)
    updateComponentDef(record.initialDef, newComp);
    // create a snapshot which avoids the set being mutated during updates
    const instances = [
        ...record.instances
    ];
    for (const instance of instances){
        const oldComp = normalizeClassComponent(instance.type);
        if (!hmrDirtyComponents.has(oldComp)) {
            // 1. Update existing comp definition to match new one
            if (oldComp !== record.initialDef) updateComponentDef(oldComp, newComp);
            // 2. mark definition dirty. This forces the renderer to replace the
            // component on patch.
            hmrDirtyComponents.add(oldComp);
        }
        // 3. invalidate options resolution cache
        instance.appContext.optionsCache.delete(instance.type);
        // 4. actually update
        if (instance.ceReload) {
            // custom element
            hmrDirtyComponents.add(oldComp);
            instance.ceReload(newComp.styles);
            hmrDirtyComponents.delete(oldComp);
        } else if (instance.parent) {
            // 4. Force the parent instance to re-render. This will cause all updated
            // components to be unmounted and re-mounted. Queue the update so that we
            // don't end up forcing the same parent to re-render multiple times.
            queueJob(instance.parent.update);
            // instance is the inner component of an async custom element
            // invoke to reset styles
            if (instance.parent.type.__asyncLoader && instance.parent.ceReload) instance.parent.ceReload(newComp.styles);
        } else if (instance.appContext.reload) // root instance mounted via createApp() has a reload method
        instance.appContext.reload();
        else if (typeof window !== "undefined") // root instance inside tree created via raw render(). Force reload.
        window.location.reload();
        else console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
    }
    // 5. make sure to cleanup dirty hmr components after update
    queuePostFlushCb(()=>{
        for (const instance of instances)hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
    });
}
function updateComponentDef(oldComp, newComp) {
    (0, _shared.extend)(oldComp, newComp);
    for(const key in oldComp)if (key !== "__file" && !(key in newComp)) delete oldComp[key];
}
function tryWrap(fn) {
    return (id, arg)=>{
        try {
            return fn(id, arg);
        } catch (e) {
            console.error(e);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. ` + `Full reload required.`);
        }
    };
}
let devtools;
let buffer = [];
let devtoolsNotInstalled = false;
function emit(event, ...args) {
    if (devtools) devtools.emit(event, ...args);
    else if (!devtoolsNotInstalled) buffer.push({
        event,
        args
    });
}
function setDevtoolsHook(hook, target) {
    var _a, _b;
    devtools = hook;
    if (devtools) {
        devtools.enabled = true;
        buffer.forEach(({ event , args  })=>devtools.emit(event, ...args));
        buffer = [];
    } else if (// handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    !((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.includes("jsdom"))) {
        const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
        replay.push((newHook)=>{
            setDevtoolsHook(newHook, target);
        });
        // clear buffer after 3s - the user probably doesn't have devtools installed
        // at all, and keeping the buffer will cause memory leaks (#4738)
        setTimeout(()=>{
            if (!devtools) {
                target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
                devtoolsNotInstalled = true;
                buffer = [];
            }
        }, 3000);
    } else {
        // non-browser env, assume not installed
        devtoolsNotInstalled = true;
        buffer = [];
    }
}
function devtoolsInitApp(app, version) {
    emit("app:init" /* APP_INIT */ , app, version, {
        Fragment,
        Text,
        Comment,
        Static
    });
}
function devtoolsUnmountApp(app) {
    emit("app:unmount" /* APP_UNMOUNT */ , app);
}
const devtoolsComponentAdded = /*#__PURE__*/ createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */ );
const devtoolsComponentUpdated = /*#__PURE__*/ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */ );
const devtoolsComponentRemoved = /*#__PURE__*/ createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */ );
function createDevtoolsComponentHook(hook) {
    return (component)=>{
        emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
    };
}
const devtoolsPerfStart = /*#__PURE__*/ createDevtoolsPerformanceHook("perf:start" /* PERFORMANCE_START */ );
const devtoolsPerfEnd = /*#__PURE__*/ createDevtoolsPerformanceHook("perf:end" /* PERFORMANCE_END */ );
function createDevtoolsPerformanceHook(hook) {
    return (component, type, time)=>{
        emit(hook, component.appContext.app, component.uid, component, type, time);
    };
}
function devtoolsComponentEmit(component, event, params) {
    emit("component:emit" /* COMPONENT_EMIT */ , component.appContext.app, component, event, params);
}
function emit$1(instance, event, ...rawArgs) {
    if (instance.isUnmounted) return;
    const props = instance.vnode.props || (0, _shared.EMPTY_OBJ);
    {
        const { emitsOptions , propsOptions: [propsOptions]  } = instance;
        if (emitsOptions) {
            if (!(event in emitsOptions) && true) {
                if (!propsOptions || !((0, _shared.toHandlerKey)(event) in propsOptions)) warn(`Component emitted event "${event}" but it is neither declared in ` + `the emits option nor as an "${(0, _shared.toHandlerKey)(event)}" prop.`);
            } else {
                const validator = emitsOptions[event];
                if ((0, _shared.isFunction)(validator)) {
                    const isValid = validator(...rawArgs);
                    if (!isValid) warn(`Invalid event arguments: event validation failed for event "${event}".`);
                }
            }
        }
    }
    let args = rawArgs;
    const isModelListener = event.startsWith("update:");
    // for v-model update:xxx events, apply modifiers on args
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
        const { number , trim  } = props[modifiersKey] || (0, _shared.EMPTY_OBJ);
        if (trim) args = rawArgs.map((a)=>a.trim());
        if (number) args = rawArgs.map((0, _shared.toNumber));
    }
    devtoolsComponentEmit(instance, event, args);
    {
        const lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && props[(0, _shared.toHandlerKey)(lowerCaseEvent)]) warn(`Event "${lowerCaseEvent}" is emitted in component ` + `${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". ` + `Note that HTML attributes are case-insensitive and you cannot use ` + `v-on to listen to camelCase events when using in-DOM templates. ` + `You should probably use "${(0, _shared.hyphenate)(event)}" instead of "${event}".`);
    }
    let handlerName;
    let handler = props[handlerName = (0, _shared.toHandlerKey)(event)] || // also try camelCase event handler (#2249)
    props[handlerName = (0, _shared.toHandlerKey)((0, _shared.camelize)(event))];
    // for v-model update:xxx events, also trigger kebab-case equivalent
    // for props passed via kebab-case
    if (!handler && isModelListener) handler = props[handlerName = (0, _shared.toHandlerKey)((0, _shared.hyphenate)(event))];
    if (handler) callWithAsyncErrorHandling(handler, instance, 6 /* COMPONENT_EVENT_HANDLER */ , args);
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) instance.emitted = {};
        else if (instance.emitted[handlerName]) return;
        instance.emitted[handlerName] = true;
        callWithAsyncErrorHandling(onceHandler, instance, 6 /* COMPONENT_EVENT_HANDLER */ , args);
    }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== undefined) return cached;
    const raw = comp.emits;
    let normalized = {};
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !(0, _shared.isFunction)(comp)) {
        const extendEmits = (raw)=>{
            const normalizedFromExtend = normalizeEmitsOptions(raw, appContext, true);
            if (normalizedFromExtend) {
                hasExtends = true;
                (0, _shared.extend)(normalized, normalizedFromExtend);
            }
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendEmits);
        if (comp.extends) extendEmits(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendEmits);
    }
    if (!raw && !hasExtends) {
        cache.set(comp, null);
        return null;
    }
    if ((0, _shared.isArray)(raw)) raw.forEach((key)=>normalized[key] = null);
    else (0, _shared.extend)(normalized, raw);
    cache.set(comp, normalized);
    return normalized;
}
// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function isEmitListener(options, key) {
    if (!options || !(0, _shared.isOn)(key)) return false;
    key = key.slice(2).replace(/Once$/, "");
    return (0, _shared.hasOwn)(options, key[0].toLowerCase() + key.slice(1)) || (0, _shared.hasOwn)(options, (0, _shared.hyphenate)(key)) || (0, _shared.hasOwn)(options, key);
}
/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */ let currentRenderingInstance = null;
let currentScopeId = null;
/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */ function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
}
/**
 * Set scope id when creating hoisted vnodes.
 * @private compiler helper
 */ function pushScopeId(id) {
    currentScopeId = id;
}
/**
 * Technically we no longer need this after 3.0.8 but we need to keep the same
 * API for backwards compat w/ code generated by compilers.
 * @private
 */ function popScopeId() {
    currentScopeId = null;
}
/**
 * Only for backwards compat
 * @private
 */ const withScopeId = (_id)=>withCtx;
/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */ function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot // false only
) {
    if (!ctx) return fn;
    // already normalized
    if (fn._n) return fn;
    const renderFnWithContext = (...args)=>{
        // If a user calls a compiled slot inside a template expression (#1745), it
        // can mess up block tracking, so by default we disable block tracking and
        // force bail out when invoking a compiled slot (indicated by the ._d flag).
        // This isn't necessary if rendering a compiled `<slot>`, so we flip the
        // ._d flag off when invoking the wrapped fn inside `renderSlot`.
        if (renderFnWithContext._d) setBlockTracking(-1);
        const prevInstance = setCurrentRenderingInstance(ctx);
        const res = fn(...args);
        setCurrentRenderingInstance(prevInstance);
        if (renderFnWithContext._d) setBlockTracking(1);
        devtoolsComponentUpdated(ctx);
        return res;
    };
    // mark normalized to avoid duplicated wrapping
    renderFnWithContext._n = true;
    // mark this as compiled by default
    // this is used in vnode.ts -> normalizeChildren() to set the slot
    // rendering flag.
    renderFnWithContext._c = true;
    // disable block tracking by default
    renderFnWithContext._d = true;
    return renderFnWithContext;
}
/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */ let accessedAttrs = false;
function markAttrsAccessed() {
    accessedAttrs = true;
}
function renderComponentRoot(instance) {
    const { type: Component , vnode , proxy , withProxy , props , propsOptions: [propsOptions] , slots , attrs , emit , render , renderCache , data , setupState , ctx , inheritAttrs  } = instance;
    let result;
    let fallthroughAttrs;
    const prev = setCurrentRenderingInstance(instance);
    accessedAttrs = false;
    try {
        if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */ ) {
            // withProxy is a proxy with a different `has` trap only for
            // runtime-compiled render functions using `with` block.
            const proxyToUse = withProxy || proxy;
            result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
            fallthroughAttrs = attrs;
        } else {
            // functional
            const render1 = Component;
            // in dev, mark attrs accessed if optional props (attrs === props)
            if (attrs === props) markAttrsAccessed();
            result = normalizeVNode(render1.length > 1 ? render1(props, {
                get attrs () {
                    markAttrsAccessed();
                    return attrs;
                },
                slots,
                emit
            }) : render1(props, null));
            fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
        }
    } catch (err) {
        blockStack.length = 0;
        handleError(err, instance, 1 /* RENDER_FUNCTION */ );
        result = createVNode(Comment);
    }
    // attr merging
    // in dev mode, comments are preserved, and it's possible for a template
    // to have comments along side the root element which makes it a fragment
    let root = result;
    let setRoot = undefined;
    if (result.patchFlag > 0 && result.patchFlag & 2048 /* DEV_ROOT_FRAGMENT */ ) [root, setRoot] = getChildRoot(result);
    if (fallthroughAttrs && inheritAttrs !== false) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag  } = root;
        if (keys.length) {
            if (shapeFlag & 7 /* COMPONENT */ ) {
                if (propsOptions && keys.some((0, _shared.isModelListener))) // If a v-model listener (onUpdate:xxx) has a corresponding declared
                // prop, it indicates this component expects to handle v-model and
                // it should not fallthrough.
                // related: #1543, #1643, #1989
                fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                root = cloneVNode(root, fallthroughAttrs);
            } else if (!accessedAttrs && root.type !== Comment) {
                const allAttrs = Object.keys(attrs);
                const eventAttrs = [];
                const extraAttrs = [];
                for(let i = 0, l = allAttrs.length; i < l; i++){
                    const key = allAttrs[i];
                    if ((0, _shared.isOn)(key)) // ignore v-model handlers when they fail to fallthrough
                    {
                        if (!(0, _shared.isModelListener)(key)) // remove `on`, lowercase first letter to reflect event casing
                        // accurately
                        eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                    } else extraAttrs.push(key);
                }
                if (extraAttrs.length) warn(`Extraneous non-props attributes (` + `${extraAttrs.join(", ")}) ` + `were passed to component but could not be automatically inherited ` + `because component renders fragment or text root nodes.`);
                if (eventAttrs.length) warn(`Extraneous non-emits event listeners (` + `${eventAttrs.join(", ")}) ` + `were passed to component but could not be automatically inherited ` + `because component renders fragment or text root nodes. ` + `If the listener is intended to be a component custom event listener only, ` + `declare it using the "emits" option.`);
            }
        }
    }
    // inherit directives
    if (vnode.dirs) {
        if (!isElementRoot(root)) warn(`Runtime directive used on component with non-element root node. ` + `The directives will not function as intended.`);
        // clone before mutating since the root may be a hoisted vnode
        root = cloneVNode(root);
        root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    // inherit transition data
    if (vnode.transition) {
        if (!isElementRoot(root)) warn(`Component inside <Transition> renders non-element root node ` + `that cannot be animated.`);
        root.transition = vnode.transition;
    }
    if (setRoot) setRoot(root);
    else result = root;
    setCurrentRenderingInstance(prev);
    return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */ const getChildRoot = (vnode)=>{
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren);
    if (!childRoot) return [
        vnode,
        undefined
    ];
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot)=>{
        rawChildren[index] = updatedRoot;
        if (dynamicChildren) {
            if (dynamicIndex > -1) dynamicChildren[dynamicIndex] = updatedRoot;
            else if (updatedRoot.patchFlag > 0) vnode.dynamicChildren = [
                ...dynamicChildren,
                updatedRoot
            ];
        }
    };
    return [
        normalizeVNode(childRoot),
        setRoot
    ];
};
function filterSingleRoot(children) {
    let singleRoot;
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        if (isVNode(child)) // ignore user comment
        {
            if (child.type !== Comment || child.children === "v-if") {
                if (singleRoot) // has more than 1 non-comment child, return now
                return;
                else singleRoot = child;
            }
        } else return;
    }
    return singleRoot;
}
const getFunctionalFallthrough = (attrs)=>{
    let res;
    for(const key in attrs)if (key === "class" || key === "style" || (0, _shared.isOn)(key)) (res || (res = {}))[key] = attrs[key];
    return res;
};
const filterModelListeners = (attrs, props)=>{
    const res = {};
    for(const key in attrs)if (!(0, _shared.isModelListener)(key) || !(key.slice(9) in props)) res[key] = attrs[key];
    return res;
};
const isElementRoot = (vnode)=>{
    return vnode.shapeFlag & 7 /* ELEMENT */  || vnode.type === Comment // potential v-if branch switch
    ;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps , children: prevChildren , component  } = prevVNode;
    const { props: nextProps , children: nextChildren , patchFlag  } = nextVNode;
    const emits = component.emitsOptions;
    // Parent component's render function was hot-updated. Since this may have
    // caused the child component's slots content to have changed, we need to
    // force the child to update as well.
    if ((prevChildren || nextChildren) && isHmrUpdating) return true;
    // force child update for runtime directive or transition on component vnode.
    if (nextVNode.dirs || nextVNode.transition) return true;
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024 /* DYNAMIC_SLOTS */ ) // slot content that references values that might have changed,
        // e.g. in a v-for
        return true;
        if (patchFlag & 16 /* FULL_PROPS */ ) {
            if (!prevProps) return !!nextProps;
            // presence of this flag indicates props are always non-null
            return hasPropsChanged(prevProps, nextProps, emits);
        } else if (patchFlag & 8 /* PROPS */ ) {
            const dynamicProps = nextVNode.dynamicProps;
            for(let i = 0; i < dynamicProps.length; i++){
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) return true;
            }
        }
    } else {
        // this path is only taken by manually written render functions
        // so presence of any children leads to a forced update
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) return true;
        }
        if (prevProps === nextProps) return false;
        if (!prevProps) return !!nextProps;
        if (!nextProps) return true;
        return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) return true;
    for(let i = 0; i < nextKeys.length; i++){
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) return true;
    }
    return false;
}
function updateHOCHostEl({ vnode , parent  }, el // HostNode
) {
    while(parent && parent.subTree === vnode){
        (vnode = parent.vnode).el = el;
        parent = parent.parent;
    }
}
const isSuspense = (type)=>type.__isSuspense;
// Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.
const SuspenseImpl = {
    name: "Suspense",
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, // platform-specific impl passed from renderer
    rendererInternals) {
        if (n1 == null) mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
        else patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
    },
    hydrate: hydrateSuspense,
    create: createSuspenseBoundary,
    normalize: normalizeSuspenseChildren
};
// Force-casted public typing for h and TSX props inference
const Suspense = SuspenseImpl;
function triggerEvent(vnode, name) {
    const eventListener = vnode.props && vnode.props[name];
    if ((0, _shared.isFunction)(eventListener)) eventListener();
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
    const { p: patch , o: { createElement  }  } = rendererInternals;
    const hiddenContainer = createElement("div");
    const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals);
    // start mounting the content subtree in an off-dom container
    patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds);
    // now check if we have encountered any async deps
    if (suspense.deps > 0) {
        // has async
        // invoke @fallback event
        triggerEvent(vnode, "onPending");
        triggerEvent(vnode, "onFallback");
        // mount the fallback tree
        patch(null, vnode.ssFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds);
        setActiveBranch(suspense, vnode.ssFallback);
    } else // Suspense has no async deps. Just resolve.
    suspense.resolve();
}
function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, { p: patch , um: unmount , o: { createElement  }  }) {
    const suspense = n2.suspense = n1.suspense;
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch , pendingBranch , isInFallback , isHydrating  } = suspense;
    if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if (isSameVNodeType(newBranch, pendingBranch)) {
            // same root type but content may have changed.
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            if (suspense.deps <= 0) suspense.resolve();
            else if (isInFallback) {
                patch(activeBranch, newFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds, optimized);
                setActiveBranch(suspense, newFallback);
            }
        } else {
            // toggled before pending tree is resolved
            suspense.pendingId++;
            if (isHydrating) {
                // if toggled before hydration is finished, the current DOM tree is
                // no longer valid. set it as the active branch so it will be unmounted
                // when resolved
                suspense.isHydrating = false;
                suspense.activeBranch = pendingBranch;
            } else unmount(pendingBranch, parentComponent, suspense);
            // increment pending ID. this is used to invalidate async callbacks
            // reset suspense state
            suspense.deps = 0;
            // discard effects from pending branch
            suspense.effects.length = 0;
            // discard previous container
            suspense.hiddenContainer = createElement("div");
            if (isInFallback) {
                // already in fallback state
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
                else {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds, optimized);
                    setActiveBranch(suspense, newFallback);
                }
            } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                // toggled "back" to current active branch
                patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                // force resolve
                suspense.resolve(true);
            } else {
                // switched to a 3rd branch
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
            }
        }
    } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        // root did not change, just normal patch
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, newBranch);
    } else {
        // root node toggled
        // invoke @pending event
        triggerEvent(n2, "onPending");
        // mount pending branch in off-dom container
        suspense.pendingBranch = newBranch;
        suspense.pendingId++;
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        if (suspense.deps <= 0) // incoming branch has no async deps, resolve now.
        suspense.resolve();
        else {
            const { timeout , pendingId  } = suspense;
            if (timeout > 0) setTimeout(()=>{
                if (suspense.pendingId === pendingId) suspense.fallback(newFallback);
            }, timeout);
            else if (timeout === 0) suspense.fallback(newFallback);
        }
    }
}
let hasWarned = false;
function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
    /* istanbul ignore if */ if (!hasWarned) {
        hasWarned = true;
        // @ts-ignore `console.info` cannot be null error
        console[console.info ? "info" : "log"](`<Suspense> is an experimental feature and its API will likely change.`);
    }
    const { p: patch , m: move , um: unmount , n: next , o: { parentNode , remove  }  } = rendererInternals;
    const timeout = (0, _shared.toNumber)(vnode.props && vnode.props.timeout);
    const suspense = {
        vnode,
        parent,
        parentComponent,
        isSVG,
        container,
        hiddenContainer,
        anchor,
        deps: 0,
        pendingId: 0,
        timeout: typeof timeout === "number" ? timeout : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: true,
        isHydrating,
        isUnmounted: false,
        effects: [],
        resolve (resume = false) {
            if (!resume && !suspense.pendingBranch) throw new Error(`suspense.resolve() is called without a pending branch.`);
            if (suspense.isUnmounted) throw new Error(`suspense.resolve() is called on an already unmounted suspense boundary.`);
            const { vnode , activeBranch , pendingBranch , pendingId , effects , parentComponent , container  } = suspense;
            if (suspense.isHydrating) suspense.isHydrating = false;
            else if (!resume) {
                const delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
                if (delayEnter) activeBranch.transition.afterLeave = ()=>{
                    if (pendingId === suspense.pendingId) move(pendingBranch, container, anchor, 0 /* ENTER */ );
                };
                // this is initial anchor on mount
                let { anchor  } = suspense;
                // unmount current active tree
                if (activeBranch) {
                    // if the fallback tree was mounted, it may have been moved
                    // as part of a parent suspense. get the latest anchor for insertion
                    anchor = next(activeBranch);
                    unmount(activeBranch, parentComponent, suspense, true);
                }
                if (!delayEnter) // move content from off-dom container to actual container
                move(pendingBranch, container, anchor, 0 /* ENTER */ );
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            // flush buffered effects
            // check if there is a pending parent suspense
            let parent = suspense.parent;
            let hasUnresolvedAncestor = false;
            while(parent){
                if (parent.pendingBranch) {
                    // found a pending parent suspense, merge buffered post jobs
                    // into that parent
                    parent.effects.push(...effects);
                    hasUnresolvedAncestor = true;
                    break;
                }
                parent = parent.parent;
            }
            // no pending parent suspense, flush all jobs
            if (!hasUnresolvedAncestor) queuePostFlushCb(effects);
            suspense.effects = [];
            // invoke @resolve event
            triggerEvent(vnode, "onResolve");
        },
        fallback (fallbackVNode) {
            if (!suspense.pendingBranch) return;
            const { vnode , activeBranch , parentComponent , container , isSVG  } = suspense;
            // invoke @fallback event
            triggerEvent(vnode, "onFallback");
            const anchor = next(activeBranch);
            const mountFallback = ()=>{
                if (!suspense.isInFallback) return;
                // mount the fallback tree
                patch(null, fallbackVNode, container, anchor, parentComponent, null, isSVG, slotScopeIds, optimized);
                setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
            if (delayEnter) activeBranch.transition.afterLeave = mountFallback;
            suspense.isInFallback = true;
            // unmount current active branch
            unmount(activeBranch, parentComponent, null, true // shouldRemove
            );
            if (!delayEnter) mountFallback();
        },
        move (container, anchor, type) {
            suspense.activeBranch && move(suspense.activeBranch, container, anchor, type);
            suspense.container = container;
        },
        next () {
            return suspense.activeBranch && next(suspense.activeBranch);
        },
        registerDep (instance, setupRenderEffect) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) suspense.deps++;
            const hydratedEl = instance.vnode.el;
            instance.asyncDep.catch((err)=>{
                handleError(err, instance, 0 /* SETUP_FUNCTION */ );
            }).then((asyncSetupResult)=>{
                // retry when the setup() promise resolves.
                // component may have been unmounted before resolve.
                if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) return;
                // retry from this component
                instance.asyncResolved = true;
                const { vnode  } = instance;
                pushWarningContext(vnode);
                handleSetupResult(instance, asyncSetupResult, false);
                if (hydratedEl) // vnode may have been replaced if an update happened before the
                // async dep is resolved.
                vnode.el = hydratedEl;
                const placeholder = !hydratedEl && instance.subTree.el;
                setupRenderEffect(instance, vnode, // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el), // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree), suspense, isSVG, optimized);
                if (placeholder) remove(placeholder);
                updateHOCHostEl(instance, vnode.el);
                popWarningContext();
                // only decrease deps count if suspense is not already resolved
                if (isInPendingSuspense && --suspense.deps === 0) suspense.resolve();
            });
        },
        unmount (parentSuspense, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) unmount(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
            if (suspense.pendingBranch) unmount(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
        }
    };
    return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    /* eslint-disable no-restricted-globals */ const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement("div"), null, isSVG, slotScopeIds, optimized, rendererInternals, true);
    // there are two possible scenarios for server-rendered suspense:
    // - success: ssr content should be fully resolved
    // - failure: ssr content should be the fallback branch.
    // however, on the client we don't really know if it has failed or not
    // attempt to hydrate the DOM assuming it has succeeded, but we still
    // need to construct a suspense boundary first
    const result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);
    if (suspense.deps === 0) suspense.resolve();
    return result;
/* eslint-enable no-restricted-globals */ }
function normalizeSuspenseChildren(vnode) {
    const { shapeFlag , children  } = vnode;
    const isSlotChildren = shapeFlag & 32 /* SLOTS_CHILDREN */ ;
    vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
    vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
    let block;
    if ((0, _shared.isFunction)(s)) {
        const trackBlock = isBlockTreeEnabled && s._c;
        if (trackBlock) {
            // disableTracking: false
            // allow block tracking for compiled slots
            // (see ./componentRenderContext.ts)
            s._d = false;
            openBlock();
        }
        s = s();
        if (trackBlock) {
            s._d = true;
            block = currentBlock;
            closeBlock();
        }
    }
    if ((0, _shared.isArray)(s)) {
        const singleChild = filterSingleRoot(s);
        if (!singleChild) warn(`<Suspense> slots expect a single root node.`);
        s = singleChild;
    }
    s = normalizeVNode(s);
    if (block && !s.dynamicChildren) s.dynamicChildren = block.filter((c)=>c !== s);
    return s;
}
function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if ((0, _shared.isArray)(fn)) suspense.effects.push(...fn);
        else suspense.effects.push(fn);
    } else queuePostFlushCb(fn);
}
function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode , parentComponent  } = suspense;
    const el = vnode.el = branch.el;
    // in case suspense is the root node of a component,
    // recursively update the HOC el
    if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        updateHOCHostEl(parentComponent, el);
    }
}
function provide(key, value) {
    if (!currentInstance) warn(`provide() can only be used inside setup().`);
    else {
        let provides = currentInstance.provides;
        // by default an instance inherits its parent's provides object
        // but when it needs to provide values of its own, it creates its
        // own provides object using parent provides object as prototype.
        // this way in `inject` we can simply look up injections from direct
        // parent and let the prototype chain do the work.
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) provides = currentInstance.provides = Object.create(parentProvides);
        // TS doesn't allow symbol as index type
        provides[key] = value;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
        // #2400
        // to support `app.use` plugins,
        // fallback to appContext's `provides` if the instance is at root
        const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
        if (provides && key in provides) // TS doesn't allow symbol as index type
        return provides[key];
        else if (arguments.length > 1) return treatDefaultAsFactory && (0, _shared.isFunction)(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
        else warn(`injection "${String(key)}" not found.`);
    } else warn(`inject() can only be used inside setup() or functional components.`);
}
// Simple effect.
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
    return doWatch(effect, null, Object.assign(Object.assign({}, options), {
        flush: "post"
    }));
}
function watchSyncEffect(effect, options) {
    return doWatch(effect, null, Object.assign(Object.assign({}, options), {
        flush: "sync"
    }));
}
// initial value for watchers to trigger on undefined initial values
const INITIAL_WATCHER_VALUE = {};
// implementation
function watch(source, cb, options) {
    if (!(0, _shared.isFunction)(cb)) warn(`\`watch(fn, options?)\` signature has been moved to a separate API. ` + `Use \`watchEffect(fn, options?)\` instead. \`watch\` now only ` + `supports \`watch(source, cb, options?) signature.`);
    return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate , deep , flush , onTrack , onTrigger  } = (0, _shared.EMPTY_OBJ)) {
    if (!cb) {
        if (immediate !== undefined) warn(`watch() "immediate" option is only respected when using the ` + `watch(source, callback, options?) signature.`);
        if (deep !== undefined) warn(`watch() "deep" option is only respected when using the ` + `watch(source, callback, options?) signature.`);
    }
    const warnInvalidSource = (s)=>{
        warn(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, ` + `a reactive object, or an array of these types.`);
    };
    const instance = currentInstance;
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if ((0, _reactivity.isRef)(source)) {
        getter = ()=>source.value;
        forceTrigger = (0, _reactivity.isShallow)(source);
    } else if ((0, _reactivity.isReactive)(source)) {
        getter = ()=>source;
        deep = true;
    } else if ((0, _shared.isArray)(source)) {
        isMultiSource = true;
        forceTrigger = source.some((s)=>(0, _reactivity.isReactive)(s) || (0, _reactivity.isShallow)(s));
        getter = ()=>source.map((s)=>{
                if ((0, _reactivity.isRef)(s)) return s.value;
                else if ((0, _reactivity.isReactive)(s)) return traverse(s);
                else if ((0, _shared.isFunction)(s)) return callWithErrorHandling(s, instance, 2 /* WATCH_GETTER */ );
                else warnInvalidSource(s);
            });
    } else if ((0, _shared.isFunction)(source)) {
        if (cb) // getter with cb
        getter = ()=>callWithErrorHandling(source, instance, 2 /* WATCH_GETTER */ );
        else // no cb -> simple effect
        getter = ()=>{
            if (instance && instance.isUnmounted) return;
            if (cleanup) cleanup();
            return callWithAsyncErrorHandling(source, instance, 3 /* WATCH_CALLBACK */ , [
                onCleanup
            ]);
        };
    } else {
        getter = (0, _shared.NOOP);
        warnInvalidSource(source);
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = ()=>traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn)=>{
        cleanup = effect.onStop = ()=>{
            callWithErrorHandling(fn, instance, 4 /* WATCH_CLEANUP */ );
        };
    };
    // in SSR there is no need to setup an actual effect, and it should be noop
    // unless it's eager
    if (isInSSRComponentSetup) {
        // we will also not call the invalidate callback (+ runner is not set up)
        onCleanup = (0, _shared.NOOP);
        if (!cb) getter();
        else if (immediate) callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */ , [
            getter(),
            isMultiSource ? [] : undefined,
            onCleanup
        ]);
        return 0, _shared.NOOP;
    }
    let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
    const job = ()=>{
        if (!effect.active) return;
        if (cb) {
            // watch(source, cb)
            const newValue = effect.run();
            if (deep || forceTrigger || (isMultiSource ? newValue.some((v1, i)=>(0, _shared.hasChanged)(v1, oldValue[i])) : (0, _shared.hasChanged)(newValue, oldValue)) || false) {
                // cleanup before running cb again
                if (cleanup) cleanup();
                callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */ , [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                    onCleanup
                ]);
                oldValue = newValue;
            }
        } else // watchEffect
        effect.run();
    };
    // important: mark the job as a watcher callback so that scheduler knows
    // it is allowed to self-trigger (#1727)
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === "sync") scheduler = job; // the scheduler function gets called directly
    else if (flush === "post") scheduler = ()=>queuePostRenderEffect(job, instance && instance.suspense);
    else // default: 'pre'
    scheduler = ()=>queuePreFlushCb(job);
    const effect = new (0, _reactivity.ReactiveEffect)(getter, scheduler);
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
    // initial run
    if (cb) {
        if (immediate) job();
        else oldValue = effect.run();
    } else if (flush === "post") queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
    else effect.run();
    return ()=>{
        effect.stop();
        if (instance && instance.scope) (0, _shared.remove)(instance.scope.effects, effect);
    };
}
// this.$watch
function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = (0, _shared.isString)(source) ? source.includes(".") ? createPathGetter(publicThis, source) : ()=>publicThis[source] : source.bind(publicThis, publicThis);
    let cb;
    if ((0, _shared.isFunction)(value)) cb = value;
    else {
        cb = value.handler;
        options = value;
    }
    const cur = currentInstance;
    setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    if (cur) setCurrentInstance(cur);
    else unsetCurrentInstance();
    return res;
}
function createPathGetter(ctx, path) {
    const segments = path.split(".");
    return ()=>{
        let cur = ctx;
        for(let i = 0; i < segments.length && cur; i++)cur = cur[segments[i]];
        return cur;
    };
}
function traverse(value, seen) {
    if (!(0, _shared.isObject)(value) || value["__v_skip" /* SKIP */ ]) return value;
    seen = seen || new Set();
    if (seen.has(value)) return value;
    seen.add(value);
    if ((0, _reactivity.isRef)(value)) traverse(value.value, seen);
    else if ((0, _shared.isArray)(value)) for(let i = 0; i < value.length; i++)traverse(value[i], seen);
    else if ((0, _shared.isSet)(value) || (0, _shared.isMap)(value)) value.forEach((v1)=>{
        traverse(v1, seen);
    });
    else if ((0, _shared.isPlainObject)(value)) for(const key in value)traverse(value[key], seen);
    return value;
}
function useTransitionState() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: new Map()
    };
    onMounted(()=>{
        state.isMounted = true;
    });
    onBeforeUnmount(()=>{
        state.isUnmounting = true;
    });
    return state;
}
const TransitionHookValidator = [
    Function,
    Array
];
const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        // enter
        onBeforeEnter: TransitionHookValidator,
        onEnter: TransitionHookValidator,
        onAfterEnter: TransitionHookValidator,
        onEnterCancelled: TransitionHookValidator,
        // leave
        onBeforeLeave: TransitionHookValidator,
        onLeave: TransitionHookValidator,
        onAfterLeave: TransitionHookValidator,
        onLeaveCancelled: TransitionHookValidator,
        // appear
        onBeforeAppear: TransitionHookValidator,
        onAppear: TransitionHookValidator,
        onAfterAppear: TransitionHookValidator,
        onAppearCancelled: TransitionHookValidator
    },
    setup (props, { slots  }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevTransitionKey;
        return ()=>{
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) return;
            let child = children[0];
            if (children.length > 1) {
                let hasFound = false;
                // locate first non-comment child
                for (const c of children)if (c.type !== Comment) {
                    if (hasFound) {
                        // warn more than one non-comment child
                        warn("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
                        break;
                    }
                    child = c;
                    hasFound = true;
                }
            }
            // there's no need to track reactivity for these props so use the raw
            // props for a bit better perf
            const rawProps = (0, _reactivity.toRaw)(props);
            const { mode  } = rawProps;
            // check mode
            if (mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") warn(`invalid <transition> mode: ${mode}`);
            if (state.isLeaving) return emptyPlaceholder(child);
            // in the case of <transition><keep-alive/></transition>, we need to
            // compare the type of the kept-alive children.
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) return emptyPlaceholder(child);
            const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey  } = innerChild.type;
            if (getTransitionKey) {
                const key = getTransitionKey();
                if (prevTransitionKey === undefined) prevTransitionKey = key;
                else if (key !== prevTransitionKey) {
                    prevTransitionKey = key;
                    transitionKeyChanged = true;
                }
            }
            // handle mode
            if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                // update old tree's hooks in case of dynamic transition
                setTransitionHooks(oldInnerChild, leavingHooks);
                // switching between different views
                if (mode === "out-in") {
                    state.isLeaving = true;
                    // return placeholder node and queue update when leave finishes
                    leavingHooks.afterLeave = ()=>{
                        state.isLeaving = false;
                        instance.update();
                    };
                    return emptyPlaceholder(child);
                } else if (mode === "in-out" && innerChild.type !== Comment) leavingHooks.delayLeave = (el, earlyRemove, delayedLeave)=>{
                    const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                    leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                    // early removal callback
                    el._leaveCb = ()=>{
                        earlyRemove();
                        el._leaveCb = undefined;
                        delete enterHooks.delayedLeave;
                    };
                    enterHooks.delayedLeave = delayedLeave;
                };
            }
            return child;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes  } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function resolveTransitionHooks(vnode, props, state, instance) {
    const { appear , mode , persisted =false , onBeforeEnter , onEnter , onAfterEnter , onEnterCancelled , onBeforeLeave , onLeave , onAfterLeave , onLeaveCancelled , onBeforeAppear , onAppear , onAfterAppear , onAppearCancelled  } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook = (hook, args)=>{
        hook && callWithAsyncErrorHandling(hook, instance, 9 /* TRANSITION_HOOK */ , args);
    };
    const callAsyncHook = (hook, args)=>{
        const done = args[1];
        callHook(hook, args);
        if ((0, _shared.isArray)(hook)) {
            if (hook.every((hook)=>hook.length <= 1)) done();
        } else if (hook.length <= 1) done();
    };
    const hooks = {
        mode,
        persisted,
        beforeEnter (el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) hook = onBeforeAppear || onBeforeEnter;
                else return;
            }
            // for same element (v-show)
            if (el._leaveCb) el._leaveCb(true);
            // for toggled element with same key (v-if)
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) // force early removal (not cancelled)
            leavingVNode.el._leaveCb();
            callHook(hook, [
                el
            ]);
        },
        enter (el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (appear) {
                    hook = onAppear || onEnter;
                    afterHook = onAfterAppear || onAfterEnter;
                    cancelHook = onAppearCancelled || onEnterCancelled;
                } else return;
            }
            let called = false;
            const done = el._enterCb = (cancelled)=>{
                if (called) return;
                called = true;
                if (cancelled) callHook(cancelHook, [
                    el
                ]);
                else callHook(afterHook, [
                    el
                ]);
                if (hooks.delayedLeave) hooks.delayedLeave();
                el._enterCb = undefined;
            };
            if (hook) callAsyncHook(hook, [
                el,
                done
            ]);
            else done();
        },
        leave (el, remove) {
            const key = String(vnode.key);
            if (el._enterCb) el._enterCb(true);
            if (state.isUnmounting) return remove();
            callHook(onBeforeLeave, [
                el
            ]);
            let called = false;
            const done = el._leaveCb = (cancelled)=>{
                if (called) return;
                called = true;
                remove();
                if (cancelled) callHook(onLeaveCancelled, [
                    el
                ]);
                else callHook(onAfterLeave, [
                    el
                ]);
                el._leaveCb = undefined;
                if (leavingVNodesCache[key] === vnode) delete leavingVNodesCache[key];
            };
            leavingVNodesCache[key] = vnode;
            if (onLeave) callAsyncHook(onLeave, [
                el,
                done
            ]);
            else done();
        },
        clone (vnode) {
            return resolveTransitionHooks(vnode, props, state, instance);
        }
    };
    return hooks;
}
// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
    }
}
function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : undefined : vnode;
}
function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 /* COMPONENT */  && vnode.component) setTransitionHooks(vnode.component.subTree, hooks);
    else if (vnode.shapeFlag & 128 /* SUSPENSE */ ) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else vnode.transition = hooks;
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
    let ret = [];
    let keyedFragmentCount = 0;
    for(let i = 0; i < children.length; i++){
        let child = children[i];
        // #5360 inherit parent key in case of <template v-for>
        const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
        // handle fragment children case, e.g. v-for
        if (child.type === Fragment) {
            if (child.patchFlag & 128 /* KEYED_FRAGMENT */ ) keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
        } else if (keepComment || child.type !== Comment) ret.push(key != null ? cloneVNode(child, {
            key
        }) : child);
    }
    // #1126 if a transition children list contains multiple sub fragments, these
    // fragments will be merged into a flat children array. Since each v-for
    // fragment may contain different static bindings inside, we need to de-op
    // these children to force full diffs to ensure correct behavior.
    if (keyedFragmentCount > 1) for(let i1 = 0; i1 < ret.length; i1++)ret[i1].patchFlag = -2 /* BAIL */ ;
    return ret;
}
// implementation, close to no-op
function defineComponent(options) {
    return (0, _shared.isFunction)(options) ? {
        setup: options,
        name: options.name
    } : options;
}
const isAsyncWrapper = (i)=>!!i.type.__asyncLoader;
function defineAsyncComponent(source) {
    if ((0, _shared.isFunction)(source)) source = {
        loader: source
    };
    const { loader , loadingComponent , errorComponent , delay =200 , timeout , suspensible =true , onError: userOnError  } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = ()=>{
        retries++;
        pendingRequest = null;
        return load();
    };
    const load = ()=>{
        let thisRequest;
        return pendingRequest || (thisRequest = pendingRequest = loader().catch((err)=>{
            err = err instanceof Error ? err : new Error(String(err));
            if (userOnError) return new Promise((resolve, reject)=>{
                const userRetry = ()=>resolve(retry());
                const userFail = ()=>reject(err);
                userOnError(err, userRetry, userFail, retries + 1);
            });
            else throw err;
        }).then((comp)=>{
            if (thisRequest !== pendingRequest && pendingRequest) return pendingRequest;
            if (!comp) warn(`Async component loader resolved to undefined. ` + `If you are using retry(), make sure to return its return value.`);
            // interop module default
            if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) comp = comp.default;
            if (comp && !(0, _shared.isObject)(comp) && !(0, _shared.isFunction)(comp)) throw new Error(`Invalid async component load result: ${comp}`);
            resolvedComp = comp;
            return comp;
        }));
    };
    return defineComponent({
        name: "AsyncComponentWrapper",
        __asyncLoader: load,
        get __asyncResolved () {
            return resolvedComp;
        },
        setup () {
            const instance = currentInstance;
            // already resolved
            if (resolvedComp) return ()=>createInnerComp(resolvedComp, instance);
            const onError = (err)=>{
                pendingRequest = null;
                handleError(err, instance, 13 /* ASYNC_COMPONENT_LOADER */ , !errorComponent /* do not throw in dev if user provided error component */ );
            };
            // suspense-controlled or SSR.
            if (suspensible && instance.suspense || isInSSRComponentSetup) return load().then((comp)=>{
                return ()=>createInnerComp(comp, instance);
            }).catch((err)=>{
                onError(err);
                return ()=>errorComponent ? createVNode(errorComponent, {
                        error: err
                    }) : null;
            });
            const loaded = (0, _reactivity.ref)(false);
            const error = (0, _reactivity.ref)();
            const delayed = (0, _reactivity.ref)(!!delay);
            if (delay) setTimeout(()=>{
                delayed.value = false;
            }, delay);
            if (timeout != null) setTimeout(()=>{
                if (!loaded.value && !error.value) {
                    const err = new Error(`Async component timed out after ${timeout}ms.`);
                    onError(err);
                    error.value = err;
                }
            }, timeout);
            load().then(()=>{
                loaded.value = true;
                if (instance.parent && isKeepAlive(instance.parent.vnode)) // parent is keep-alive, force update so the loaded component's
                // name is taken into account
                queueJob(instance.parent.update);
            }).catch((err)=>{
                onError(err);
                error.value = err;
            });
            return ()=>{
                if (loaded.value && resolvedComp) return createInnerComp(resolvedComp, instance);
                else if (error.value && errorComponent) return createVNode(errorComponent, {
                    error: error.value
                });
                else if (loadingComponent && !delayed.value) return createVNode(loadingComponent);
            };
        }
    });
}
function createInnerComp(comp, { vnode: { ref , props , children , shapeFlag  } , parent  }) {
    const vnode = createVNode(comp, props, children);
    // ensure inner component inherits the async wrapper's ref owner
    vnode.ref = ref;
    return vnode;
}
const isKeepAlive = (vnode)=>vnode.type.__isKeepAlive;
const KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    props: {
        include: [
            String,
            RegExp,
            Array
        ],
        exclude: [
            String,
            RegExp,
            Array
        ],
        max: [
            String,
            Number
        ]
    },
    setup (props, { slots  }) {
        const instance = getCurrentInstance();
        // KeepAlive communicates with the instantiated renderer via the
        // ctx where the renderer passes in its internals,
        // and the KeepAlive instance exposes activate/deactivate implementations.
        // The whole point of this is to avoid importing KeepAlive directly in the
        // renderer to facilitate tree-shaking.
        const sharedContext = instance.ctx;
        // if the internal renderer is not registered, it indicates that this is server-side rendering,
        // for KeepAlive, we just need to render its children
        if (!sharedContext.renderer) return ()=>{
            const children = slots.default && slots.default();
            return children && children.length === 1 ? children[0] : children;
        };
        const cache = new Map();
        const keys = new Set();
        let current = null;
        instance.__v_cache = cache;
        const parentSuspense = instance.suspense;
        const { renderer: { p: patch , m: move , um: _unmount , o: { createElement  }  }  } = sharedContext;
        const storageContainer = createElement("div");
        sharedContext.activate = (vnode, container, anchor, isSVG, optimized)=>{
            const instance = vnode.component;
            move(vnode, container, anchor, 0 /* ENTER */ , parentSuspense);
            // in case props have changed
            patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
            queuePostRenderEffect(()=>{
                instance.isDeactivated = false;
                if (instance.a) (0, _shared.invokeArrayFns)(instance.a);
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) invokeVNodeHook(vnodeHook, instance.parent, vnode);
            }, parentSuspense);
            // Update components tree
            devtoolsComponentAdded(instance);
        };
        sharedContext.deactivate = (vnode)=>{
            const instance = vnode.component;
            move(vnode, storageContainer, null, 1 /* LEAVE */ , parentSuspense);
            queuePostRenderEffect(()=>{
                if (instance.da) (0, _shared.invokeArrayFns)(instance.da);
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) invokeVNodeHook(vnodeHook, instance.parent, vnode);
                instance.isDeactivated = true;
            }, parentSuspense);
            // Update components tree
            devtoolsComponentAdded(instance);
        };
        function unmount(vnode) {
            // reset the shapeFlag so it can be properly unmounted
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense, true);
        }
        function pruneCache(filter) {
            cache.forEach((vnode, key)=>{
                const name = getComponentName(vnode.type);
                if (name && (!filter || !filter(name))) pruneCacheEntry(key);
            });
        }
        function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || cached.type !== current.type) unmount(cached);
            else if (current) // current active instance should no longer be kept-alive.
            // we can't unmount it now but it might be later, so reset its flag now.
            resetShapeFlag(current);
            cache.delete(key);
            keys.delete(key);
        }
        // prune cache on include/exclude prop change
        watch(()=>[
                props.include,
                props.exclude
            ], ([include, exclude])=>{
            include && pruneCache((name)=>matches(include, name));
            exclude && pruneCache((name)=>!matches(exclude, name));
        }, // prune post-render after `current` has been updated
        {
            flush: "post",
            deep: true
        });
        // cache sub tree after render
        let pendingCacheKey = null;
        const cacheSubtree = ()=>{
            // fix #1621, the pendingCacheKey could be 0
            if (pendingCacheKey != null) cache.set(pendingCacheKey, getInnerChild(instance.subTree));
        };
        onMounted(cacheSubtree);
        onUpdated(cacheSubtree);
        onBeforeUnmount(()=>{
            cache.forEach((cached)=>{
                const { subTree , suspense  } = instance;
                const vnode = getInnerChild(subTree);
                if (cached.type === vnode.type) {
                    // current instance will be unmounted as part of keep-alive's unmount
                    resetShapeFlag(vnode);
                    // but invoke its deactivated hook here
                    const da = vnode.component.da;
                    da && queuePostRenderEffect(da, suspense);
                    return;
                }
                unmount(cached);
            });
        });
        return ()=>{
            pendingCacheKey = null;
            if (!slots.default) return null;
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
                warn(`KeepAlive should contain exactly one component child.`);
                current = null;
                return children;
            } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4 /* STATEFUL_COMPONENT */ ) && !(rawVNode.shapeFlag & 128 /* SUSPENSE */ )) {
                current = null;
                return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            // for async components, name check should be based in its loaded
            // inner component if available
            const name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
            const { include , exclude , max  } = props;
            if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
                current = vnode;
                return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            // clone vnode if it's reused because we are going to mutate it
            if (vnode.el) {
                vnode = cloneVNode(vnode);
                if (rawVNode.shapeFlag & 128 /* SUSPENSE */ ) rawVNode.ssContent = vnode;
            }
            // #1513 it's possible for the returned vnode to be cloned due to attr
            // fallthrough or scopeId, so the vnode here may not be the final vnode
            // that is mounted. Instead of caching it directly, we store the pending
            // key and cache `instance.subTree` (the normalized vnode) in
            // beforeMount/beforeUpdate hooks.
            pendingCacheKey = key;
            if (cachedVNode) {
                // copy over mounted state
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) // recursively update transition hooks on subTree
                setTransitionHooks(vnode, vnode.transition);
                // avoid vnode being mounted as fresh
                vnode.shapeFlag |= 512 /* COMPONENT_KEPT_ALIVE */ ;
                // make this key the freshest
                keys.delete(key);
                keys.add(key);
            } else {
                keys.add(key);
                // prune oldest entry
                if (max && keys.size > parseInt(max, 10)) pruneCacheEntry(keys.values().next().value);
            }
            // avoid vnode being unmounted
            vnode.shapeFlag |= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ;
            current = vnode;
            return isSuspense(rawVNode.type) ? rawVNode : vnode;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
    if ((0, _shared.isArray)(pattern)) return pattern.some((p)=>matches(p, name));
    else if ((0, _shared.isString)(pattern)) return pattern.split(",").includes(name);
    else if (pattern.test) return pattern.test(name);
    /* istanbul ignore next */ return false;
}
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a" /* ACTIVATED */ , target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da" /* DEACTIVATED */ , target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
    // cache the deactivate branch check wrapper for injected hooks so the same
    // hook can be properly deduped by the scheduler. "__wdc" stands for "with
    // deactivation check".
    const wrappedHook = hook.__wdc || (hook.__wdc = ()=>{
        // only fire the hook if the target instance is NOT in a deactivated branch.
        let current = target;
        while(current){
            if (current.isDeactivated) return;
            current = current.parent;
        }
        return hook();
    });
    injectHook(type, wrappedHook, target);
    // In addition to registering it on the target instance, we walk up the parent
    // chain and register it on all ancestor instances that are keep-alive roots.
    // This avoids the need to walk the entire component tree when invoking these
    // hooks, and more importantly, avoids the need to track child components in
    // arrays.
    if (target) {
        let current = target.parent;
        while(current && current.parent){
            if (isKeepAlive(current.parent.vnode)) injectToKeepAliveRoot(wrappedHook, type, target, current);
            current = current.parent;
        }
    }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    // injectHook wraps the original for error handling, so make sure to remove
    // the wrapped version.
    const injected = injectHook(type, hook, keepAliveRoot, true);
    onUnmounted(()=>{
        (0, _shared.remove)(keepAliveRoot[type], injected);
    }, target);
}
function resetShapeFlag(vnode) {
    let shapeFlag = vnode.shapeFlag;
    if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ) shapeFlag -= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ;
    if (shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */ ) shapeFlag -= 512 /* COMPONENT_KEPT_ALIVE */ ;
    vnode.shapeFlag = shapeFlag;
}
function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 /* SUSPENSE */  ? vnode.ssContent : vnode;
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        // cache the error handling wrapper for injected hooks so the same hook
        // can be properly deduped by the scheduler. "__weh" stands for "with error
        // handling".
        const wrappedHook = hook.__weh || (hook.__weh = (...args)=>{
            if (target.isUnmounted) return;
            // disable tracking inside all lifecycle hooks
            // since they can potentially be called inside effects.
            (0, _reactivity.pauseTracking)();
            // Set currentInstance during hook invocation.
            // This assumes the hook does not synchronously trigger other hooks, which
            // can only be false when the user does something really funky.
            setCurrentInstance(target);
            const res = callWithAsyncErrorHandling(hook, target, type, args);
            unsetCurrentInstance();
            (0, _reactivity.resetTracking)();
            return res;
        });
        if (prepend) hooks.unshift(wrappedHook);
        else hooks.push(wrappedHook);
        return wrappedHook;
    } else {
        const apiName = (0, _shared.toHandlerKey)(ErrorTypeStrings[type].replace(/ hook$/, ""));
        warn(`${apiName} is called when there is no active component instance to be ` + `associated with. ` + `Lifecycle injection APIs can only be used during execution of setup().` + (` If you are using async setup(), make sure to register lifecycle ` + `hooks before the first await statement.`));
    }
}
const createHook = (lifecycle)=>(hook, target = currentInstance)=>// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
        (!isInSSRComponentSetup || lifecycle === "sp" /* SERVER_PREFETCH */ ) && injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm" /* BEFORE_MOUNT */ );
const onMounted = createHook("m" /* MOUNTED */ );
const onBeforeUpdate = createHook("bu" /* BEFORE_UPDATE */ );
const onUpdated = createHook("u" /* UPDATED */ );
const onBeforeUnmount = createHook("bum" /* BEFORE_UNMOUNT */ );
const onUnmounted = createHook("um" /* UNMOUNTED */ );
const onServerPrefetch = createHook("sp" /* SERVER_PREFETCH */ );
const onRenderTriggered = createHook("rtg" /* RENDER_TRIGGERED */ );
const onRenderTracked = createHook("rtc" /* RENDER_TRACKED */ );
function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec" /* ERROR_CAPTURED */ , hook, target);
}
/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/ function validateDirectiveName(name) {
    if ((0, _shared.isBuiltInDirective)(name)) warn("Do not use built-in directive ids as custom directive id: " + name);
}
/**
 * Adds directives to a VNode.
 */ function withDirectives(vnode, directives) {
    const internalInstance = currentRenderingInstance;
    if (internalInstance === null) {
        warn(`withDirectives can only be used inside render functions.`);
        return vnode;
    }
    const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for(let i = 0; i < directives.length; i++){
        let [dir, value, arg, modifiers = (0, _shared.EMPTY_OBJ)] = directives[i];
        if ((0, _shared.isFunction)(dir)) dir = {
            mounted: dir,
            updated: dir
        };
        if (dir.deep) traverse(value);
        bindings.push({
            dir,
            instance,
            value,
            oldValue: void 0,
            arg,
            modifiers
        });
    }
    return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for(let i = 0; i < bindings.length; i++){
        const binding = bindings[i];
        if (oldBindings) binding.oldValue = oldBindings[i].value;
        let hook = binding.dir[name];
        if (hook) {
            // disable tracking inside all lifecycle hooks
            // since they can potentially be called inside effects.
            (0, _reactivity.pauseTracking)();
            callWithAsyncErrorHandling(hook, instance, 8 /* DIRECTIVE_HOOK */ , [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
            (0, _reactivity.resetTracking)();
        }
    }
}
const COMPONENTS = "components";
const DIRECTIVES = "directives";
/**
 * @private
 */ function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */ function resolveDynamicComponent(component) {
    if ((0, _shared.isString)(component)) return resolveAsset(COMPONENTS, component, false) || component;
    else // invalid types will fallthrough to createVNode and raise warning
    return component || NULL_DYNAMIC_COMPONENT;
}
/**
 * @private
 */ function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
}
// implementation
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
        const Component = instance.type;
        // explicit self name has highest priority
        if (type === COMPONENTS) {
            const selfName = getComponentName(Component, false);
            if (selfName && (selfName === name || selfName === (0, _shared.camelize)(name) || selfName === (0, _shared.capitalize)((0, _shared.camelize)(name)))) return Component;
        }
        const res = // local registration
        // check instance[type] first which is resolved for options API
        resolve(instance[type] || Component[type], name) || // global registration
        resolve(instance.appContext[type], name);
        if (!res && maybeSelfReference) // fallback to implicit self-reference
        return Component;
        if (warnMissing && !res) {
            const extra = type === COMPONENTS ? `\nIf this is a native custom element, make sure to exclude it from ` + `component resolution via compilerOptions.isCustomElement.` : ``;
            warn(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
        }
        return res;
    } else warn(`resolve${(0, _shared.capitalize)(type.slice(0, -1))} ` + `can only be used in render() or setup().`);
}
function resolve(registry, name) {
    return registry && (registry[name] || registry[(0, _shared.camelize)(name)] || registry[(0, _shared.capitalize)((0, _shared.camelize)(name))]);
}
/**
 * Actual implementation
 */ function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = cache && cache[index];
    if ((0, _shared.isArray)(source) || (0, _shared.isString)(source)) {
        ret = new Array(source.length);
        for(let i = 0, l = source.length; i < l; i++)ret[i] = renderItem(source[i], i, undefined, cached && cached[i]);
    } else if (typeof source === "number") {
        if (!Number.isInteger(source)) warn(`The v-for range expect an integer value but got ${source}.`);
        ret = new Array(source);
        for(let i1 = 0; i1 < source; i1++)ret[i1] = renderItem(i1 + 1, i1, undefined, cached && cached[i1]);
    } else if ((0, _shared.isObject)(source)) {
        if (source[Symbol.iterator]) ret = Array.from(source, (item, i)=>renderItem(item, i, undefined, cached && cached[i]));
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for(let i2 = 0, l1 = keys.length; i2 < l1; i2++){
                const key = keys[i2];
                ret[i2] = renderItem(source[key], key, i2, cached && cached[i2]);
            }
        }
    } else ret = [];
    if (cache) cache[index] = ret;
    return ret;
}
/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */ function createSlots(slots, dynamicSlots) {
    for(let i = 0; i < dynamicSlots.length; i++){
        const slot = dynamicSlots[i];
        // array of dynamic slot generated by <template v-for="..." #[...]>
        if ((0, _shared.isArray)(slot)) for(let j = 0; j < slot.length; j++)slots[slot[j].name] = slot[j].fn;
        else if (slot) // conditional single slot generated by <template v-if="..." #foo>
        slots[slot.name] = slot.fn;
    }
    return slots;
}
/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */ function renderSlot(slots, name, props = {}, // this is not a user-facing function, so the fallback is always generated by
// the compiler and guaranteed to be a function returning an array
fallback, noSlotted) {
    if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) return createVNode("slot", name === "default" ? null : {
        name
    }, fallback && fallback());
    let slot = slots[name];
    if (slot && slot.length > 1) {
        warn(`SSR-optimized slot function detected in a non-SSR-optimized render ` + `function. You need to mark this component with $dynamic-slots in the ` + `parent template.`);
        slot = ()=>[];
    }
    // a compiled slot disables block tracking by default to avoid manual
    // invocation interfering with template-based block tracking, but in
    // `renderSlot` we can be sure that it's template-based so we can force
    // enable it.
    if (slot && slot._c) slot._d = false;
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(Fragment, {
        key: props.key || `_${name}`
    }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 /* STABLE */  ? 64 /* STABLE_FRAGMENT */  : -2 /* BAIL */ );
    if (!noSlotted && rendered.scopeId) rendered.slotScopeIds = [
        rendered.scopeId + "-s"
    ];
    if (slot && slot._c) slot._d = true;
    return rendered;
}
function ensureValidVNode(vnodes) {
    return vnodes.some((child)=>{
        if (!isVNode(child)) return true;
        if (child.type === Comment) return false;
        if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
        return true;
    }) ? vnodes : null;
}
/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */ function toHandlers(obj) {
    const ret = {};
    if (!(0, _shared.isObject)(obj)) {
        warn(`v-on with no argument expects an object value.`);
        return ret;
    }
    for(const key in obj)ret[(0, _shared.toHandlerKey)(key)] = obj[key];
    return ret;
}
/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */ const getPublicInstance = (i)=>{
    if (!i) return null;
    if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
    return getPublicInstance(i.parent);
};
const publicPropertiesMap = // Move PURE marker to new line to workaround compiler discarding it
// due to type annotation
/*#__PURE__*/ (0, _shared.extend)(Object.create(null), {
    $: (i)=>i,
    $el: (i)=>i.vnode.el,
    $data: (i)=>i.data,
    $props: (i)=>(0, _reactivity.shallowReadonly)(i.props),
    $attrs: (i)=>(0, _reactivity.shallowReadonly)(i.attrs),
    $slots: (i)=>(0, _reactivity.shallowReadonly)(i.slots),
    $refs: (i)=>(0, _reactivity.shallowReadonly)(i.refs),
    $parent: (i)=>getPublicInstance(i.parent),
    $root: (i)=>getPublicInstance(i.root),
    $emit: (i)=>i.emit,
    $options: (i)=>__VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type,
    $forceUpdate: (i)=>i.f || (i.f = ()=>queueJob(i.update)),
    $nextTick: (i)=>i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i)=>__VUE_OPTIONS_API__ ? instanceWatch.bind(i) : (0, _shared.NOOP)
});
const isReservedPrefix = (key)=>key === "_" || key === "$";
const PublicInstanceProxyHandlers = {
    get ({ _: instance  }, key) {
        const { ctx , setupState , data , props , accessCache , type , appContext  } = instance;
        // for internal formatters to know that this is a Vue instance
        if (key === "__isVue") return true;
        // prioritize <script setup> bindings during dev.
        // this allows even properties that start with _ or $ to be used - so that
        // it aligns with the production behavior where the render fn is inlined and
        // indeed has access to all declared variables.
        if (setupState !== (0, _shared.EMPTY_OBJ) && setupState.__isScriptSetup && (0, _shared.hasOwn)(setupState, key)) return setupState[key];
        // data / props / ctx
        // This getter gets called for every property access on the render context
        // during render and is a major hotspot. The most expensive part of this
        // is the multiple hasOwn() calls. It's much faster to do a simple property
        // access on a plain object, so we use an accessCache object (with null
        // prototype) to memoize what access type a key corresponds to.
        let normalizedProps;
        if (key[0] !== "$") {
            const n = accessCache[key];
            if (n !== undefined) switch(n){
                case 1 /* SETUP */ :
                    return setupState[key];
                case 2 /* DATA */ :
                    return data[key];
                case 4 /* CONTEXT */ :
                    return ctx[key];
                case 3 /* PROPS */ :
                    return props[key];
            }
            else if (setupState !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(setupState, key)) {
                accessCache[key] = 1 /* SETUP */ ;
                return setupState[key];
            } else if (data !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(data, key)) {
                accessCache[key] = 2 /* DATA */ ;
                return data[key];
            } else if (// only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) && (0, _shared.hasOwn)(normalizedProps, key)) {
                accessCache[key] = 3 /* PROPS */ ;
                return props[key];
            } else if (ctx !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(ctx, key)) {
                accessCache[key] = 4 /* CONTEXT */ ;
                return ctx[key];
            } else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) accessCache[key] = 0 /* OTHER */ ;
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        // public $xxx properties
        if (publicGetter) {
            if (key === "$attrs") {
                (0, _reactivity.track)(instance, "get" /* GET */ , key);
                markAttrsAccessed();
            }
            return publicGetter(instance);
        } else if (// css module (injected by vue-loader)
        (cssModule = type.__cssModules) && (cssModule = cssModule[key])) return cssModule;
        else if (ctx !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(ctx, key)) {
            // user may set custom properties to `this` that start with `$`
            accessCache[key] = 4 /* CONTEXT */ ;
            return ctx[key];
        } else if (globalProperties = appContext.config.globalProperties, (0, _shared.hasOwn)(globalProperties, key)) return globalProperties[key];
        else if (currentRenderingInstance && (!(0, _shared.isString)(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
        // to infinite warning loop
        key.indexOf("__v") !== 0)) {
            if (data !== (0, _shared.EMPTY_OBJ) && isReservedPrefix(key[0]) && (0, _shared.hasOwn)(data, key)) warn(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved ` + `character ("$" or "_") and is not proxied on the render context.`);
            else if (instance === currentRenderingInstance) warn(`Property ${JSON.stringify(key)} was accessed during render ` + `but is not defined on instance.`);
        }
    },
    set ({ _: instance  }, key, value) {
        const { data , setupState , ctx  } = instance;
        if (setupState !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(setupState, key)) {
            setupState[key] = value;
            return true;
        } else if (data !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(data, key)) {
            data[key] = value;
            return true;
        } else if ((0, _shared.hasOwn)(instance.props, key)) {
            warn(`Attempting to mutate prop "${key}". Props are readonly.`, instance);
            return false;
        }
        if (key[0] === "$" && key.slice(1) in instance) {
            warn(`Attempting to mutate public property "${key}". ` + `Properties starting with $ are reserved and readonly.`, instance);
            return false;
        } else if (key in instance.appContext.config.globalProperties) Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            value
        });
        else ctx[key] = value;
        return true;
    },
    has ({ _: { data , setupState , accessCache , ctx , appContext , propsOptions  }  }, key) {
        let normalizedProps;
        return !!accessCache[key] || data !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(data, key) || setupState !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(setupState, key) || (normalizedProps = propsOptions[0]) && (0, _shared.hasOwn)(normalizedProps, key) || (0, _shared.hasOwn)(ctx, key) || (0, _shared.hasOwn)(publicPropertiesMap, key) || (0, _shared.hasOwn)(appContext.config.globalProperties, key);
    },
    defineProperty (target, key, descriptor) {
        if (descriptor.get != null) // invalidate key cache of a getter based property #5417
        target._.accessCache[key] = 0;
        else if ((0, _shared.hasOwn)(descriptor, "value")) this.set(target, key, descriptor.value, null);
        return Reflect.defineProperty(target, key, descriptor);
    }
};
PublicInstanceProxyHandlers.ownKeys = (target)=>{
    warn(`Avoid app logic that relies on enumerating keys on a component instance. ` + `The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
};
const RuntimeCompiledPublicInstanceProxyHandlers = /*#__PURE__*/ (0, _shared.extend)({}, PublicInstanceProxyHandlers, {
    get (target, key) {
        // fast path for unscopables when using `with` block
        if (key === Symbol.unscopables) return;
        return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has (_, key) {
        const has = key[0] !== "_" && !(0, _shared.isGloballyWhitelisted)(key);
        if (!has && PublicInstanceProxyHandlers.has(_, key)) warn(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
        return has;
    }
});
// dev only
// In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.
function createDevRenderContext(instance) {
    const target = {};
    // expose internal instance for proxy handlers
    Object.defineProperty(target, `_`, {
        configurable: true,
        enumerable: false,
        get: ()=>instance
    });
    // expose public properties
    Object.keys(publicPropertiesMap).forEach((key)=>{
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: ()=>publicPropertiesMap[key](instance),
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: (0, _shared.NOOP)
        });
    });
    return target;
}
// dev only
function exposePropsOnRenderContext(instance) {
    const { ctx , propsOptions: [propsOptions]  } = instance;
    if (propsOptions) Object.keys(propsOptions).forEach((key)=>{
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>instance.props[key],
            set: (0, _shared.NOOP)
        });
    });
}
// dev only
function exposeSetupStateOnRenderContext(instance) {
    const { ctx , setupState  } = instance;
    Object.keys((0, _reactivity.toRaw)(setupState)).forEach((key)=>{
        if (!setupState.__isScriptSetup) {
            if (isReservedPrefix(key[0])) {
                warn(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" ` + `which are reserved prefixes for Vue internals.`);
                return;
            }
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: ()=>setupState[key],
                set: (0, _shared.NOOP)
            });
        }
    });
}
function createDuplicateChecker() {
    const cache = Object.create(null);
    return (type, key)=>{
        if (cache[key]) warn(`${type} property "${key}" is already defined in ${cache[key]}.`);
        else cache[key] = type;
    };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    // do not cache property access on public proxy during state initialization
    shouldCacheAccess = false;
    // call beforeCreate first before accessing other options since
    // the hook may mutate resolved options (#2791)
    if (options.beforeCreate) callHook(options.beforeCreate, instance, "bc" /* BEFORE_CREATE */ );
    const { // state
    data: dataOptions , computed: computedOptions , methods , watch: watchOptions , provide: provideOptions , inject: injectOptions , // lifecycle
    created , beforeMount , mounted , beforeUpdate , updated , activated , deactivated , beforeDestroy , beforeUnmount , destroyed , unmounted , render , renderTracked , renderTriggered , errorCaptured , serverPrefetch , // public API
    expose , inheritAttrs , // assets
    components , directives , filters  } = options;
    const checkDuplicateProperties = createDuplicateChecker();
    {
        const [propsOptions] = instance.propsOptions;
        if (propsOptions) for(const key in propsOptions)checkDuplicateProperties("Props" /* PROPS */ , key);
    }
    // options initialization order (to be consistent with Vue 2):
    // - props (already done outside of this function)
    // - inject
    // - methods
    // - data (deferred since it relies on `this` access)
    // - computed
    // - watch (deferred since it relies on `this` access)
    if (injectOptions) resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
    if (methods) for(const key1 in methods){
        const methodHandler = methods[key1];
        if ((0, _shared.isFunction)(methodHandler)) {
            Object.defineProperty(ctx, key1, {
                value: methodHandler.bind(publicThis),
                configurable: true,
                enumerable: true,
                writable: true
            });
            checkDuplicateProperties("Methods" /* METHODS */ , key1);
        } else warn(`Method "${key1}" has type "${typeof methodHandler}" in the component definition. ` + `Did you reference the function correctly?`);
    }
    if (dataOptions) {
        if (!(0, _shared.isFunction)(dataOptions)) warn(`The data option must be a function. ` + `Plain object usage is no longer supported.`);
        const data = dataOptions.call(publicThis, publicThis);
        if ((0, _shared.isPromise)(data)) warn(`data() returned a Promise - note data() cannot be async; If you ` + `intend to perform data fetching before component renders, use ` + `async setup() + <Suspense>.`);
        if (!(0, _shared.isObject)(data)) warn(`data() should return an object.`);
        else {
            instance.data = (0, _reactivity.reactive)(data);
            for(const key2 in data){
                checkDuplicateProperties("Data" /* DATA */ , key2);
                // expose data on ctx during dev
                if (!isReservedPrefix(key2[0])) Object.defineProperty(ctx, key2, {
                    configurable: true,
                    enumerable: true,
                    get: ()=>data[key2],
                    set: (0, _shared.NOOP)
                });
            }
        }
    }
    // state initialization complete at this point - start caching access
    shouldCacheAccess = true;
    if (computedOptions) for(const key3 in computedOptions){
        const opt = computedOptions[key3];
        const get = (0, _shared.isFunction)(opt) ? opt.bind(publicThis, publicThis) : (0, _shared.isFunction)(opt.get) ? opt.get.bind(publicThis, publicThis) : (0, _shared.NOOP);
        if (get === (0, _shared.NOOP)) warn(`Computed property "${key3}" has no getter.`);
        const set = !(0, _shared.isFunction)(opt) && (0, _shared.isFunction)(opt.set) ? opt.set.bind(publicThis) : ()=>{
            warn(`Write operation failed: computed property "${key3}" is readonly.`);
        };
        const c = computed({
            get,
            set
        });
        Object.defineProperty(ctx, key3, {
            enumerable: true,
            configurable: true,
            get: ()=>c.value,
            set: (v1)=>c.value = v1
        });
        checkDuplicateProperties("Computed" /* COMPUTED */ , key3);
    }
    if (watchOptions) for(const key4 in watchOptions)createWatcher(watchOptions[key4], ctx, publicThis, key4);
    if (provideOptions) {
        const provides = (0, _shared.isFunction)(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
        Reflect.ownKeys(provides).forEach((key)=>{
            provide(key, provides[key]);
        });
    }
    if (created) callHook(created, instance, "c" /* CREATED */ );
    function registerLifecycleHook(register, hook) {
        if ((0, _shared.isArray)(hook)) hook.forEach((_hook)=>register(_hook.bind(publicThis)));
        else if (hook) register(hook.bind(publicThis));
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if ((0, _shared.isArray)(expose)) {
        if (expose.length) {
            const exposed = instance.exposed || (instance.exposed = {});
            expose.forEach((key)=>{
                Object.defineProperty(exposed, key, {
                    get: ()=>publicThis[key],
                    set: (val)=>publicThis[key] = val
                });
            });
        } else if (!instance.exposed) instance.exposed = {};
    }
    // options that are handled when creating the instance but also need to be
    // applied from mixins
    if (render && instance.render === (0, _shared.NOOP)) instance.render = render;
    if (inheritAttrs != null) instance.inheritAttrs = inheritAttrs;
    // asset options.
    if (components) instance.components = components;
    if (directives) instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = (0, _shared.NOOP), unwrapRef = false) {
    if ((0, _shared.isArray)(injectOptions)) injectOptions = normalizeInject(injectOptions);
    for(const key in injectOptions){
        const opt = injectOptions[key];
        let injected;
        if ((0, _shared.isObject)(opt)) {
            if ("default" in opt) injected = inject(opt.from || key, opt.default, true);
            else injected = inject(opt.from || key);
        } else injected = inject(opt);
        if ((0, _reactivity.isRef)(injected)) {
            // TODO remove the check in 3.3
            if (unwrapRef) Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: ()=>injected.value,
                set: (v1)=>injected.value = v1
            });
            else {
                warn(`injected property "${key}" is a ref and will be auto-unwrapped ` + `and no longer needs \`.value\` in the next minor release. ` + `To opt-in to the new behavior now, ` + `set \`app.config.unwrapInjectedRef = true\` (this config is ` + `temporary and will not be needed in the future.)`);
                ctx[key] = injected;
            }
        } else ctx[key] = injected;
        checkDuplicateProperties("Inject" /* INJECT */ , key);
    }
}
function callHook(hook, instance, type) {
    callWithAsyncErrorHandling((0, _shared.isArray)(hook) ? hook.map((h)=>h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes(".") ? createPathGetter(publicThis, key) : ()=>publicThis[key];
    if ((0, _shared.isString)(raw)) {
        const handler = ctx[raw];
        if ((0, _shared.isFunction)(handler)) watch(getter, handler);
        else warn(`Invalid watch handler specified by key "${raw}"`, handler);
    } else if ((0, _shared.isFunction)(raw)) watch(getter, raw.bind(publicThis));
    else if ((0, _shared.isObject)(raw)) {
        if ((0, _shared.isArray)(raw)) raw.forEach((r)=>createWatcher(r, ctx, publicThis, key));
        else {
            const handler1 = (0, _shared.isFunction)(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
            if ((0, _shared.isFunction)(handler1)) watch(getter, handler1, raw);
            else warn(`Invalid watch handler specified by key "${raw.handler}"`, handler1);
        }
    } else warn(`Invalid watch option: "${key}"`, raw);
}
/**
 * Resolve merged options and cache it on the component.
 * This is done only once per-component since the merging does not involve
 * instances.
 */ function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins , extends: extendsOptions  } = base;
    const { mixins: globalMixins , optionsCache: cache , config: { optionMergeStrategies  }  } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) resolved = cached;
    else if (!globalMixins.length && !mixins && !extendsOptions) resolved = base;
    else {
        resolved = {};
        if (globalMixins.length) globalMixins.forEach((m)=>mergeOptions(resolved, m, optionMergeStrategies, true));
        mergeOptions(resolved, base, optionMergeStrategies);
    }
    cache.set(base, resolved);
    return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
    const { mixins , extends: extendsOptions  } = from;
    if (extendsOptions) mergeOptions(to, extendsOptions, strats, true);
    if (mixins) mixins.forEach((m)=>mergeOptions(to, m, strats, true));
    for(const key in from)if (asMixin && key === "expose") warn(`"expose" option is ignored when declared in mixins or extends. ` + `It should only be declared in the base component itself.`);
    else {
        const strat = internalOptionMergeStrats[key] || strats && strats[key];
        to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
    return to;
}
const internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeObjectOptions,
    emits: mergeObjectOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
};
function mergeDataFn(to, from) {
    if (!from) return to;
    if (!to) return from;
    return function mergedDataFn() {
        return (0, _shared.extend)((0, _shared.isFunction)(to) ? to.call(this, this) : to, (0, _shared.isFunction)(from) ? from.call(this, this) : from);
    };
}
function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
    if ((0, _shared.isArray)(raw)) {
        const res = {};
        for(let i = 0; i < raw.length; i++)res[raw[i]] = raw[i];
        return res;
    }
    return raw;
}
function mergeAsArray(to, from) {
    return to ? [
        ...new Set([].concat(to, from))
    ] : from;
}
function mergeObjectOptions(to, from) {
    return to ? (0, _shared.extend)((0, _shared.extend)(Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
    if (!to) return from;
    if (!from) return to;
    const merged = (0, _shared.extend)(Object.create(null), to);
    for(const key in from)merged[key] = mergeAsArray(to[key], from[key]);
    return merged;
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = {};
    (0, _shared.def)(attrs, InternalObjectKey, 1);
    instance.propsDefaults = Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    // ensure all declared prop keys are present
    for(const key in instance.propsOptions[0])if (!(key in props)) props[key] = undefined;
    validateProps(rawProps || {}, props, instance);
    if (isStateful) // stateful
    instance.props = isSSR ? props : (0, _reactivity.shallowReactive)(props);
    else if (!instance.type.props) // functional w/ optional props, props === attrs
    instance.props = attrs;
    else // functional w/ declared props
    instance.props = props;
    instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props , attrs , vnode: { patchFlag  }  } = instance;
    const rawCurrentProps = (0, _reactivity.toRaw)(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (// always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(instance.type.__hmrId || instance.parent && instance.parent.type.__hmrId) && (optimized || patchFlag > 0) && !(patchFlag & 16 /* FULL_PROPS */ )) {
        if (patchFlag & 8 /* PROPS */ ) {
            // Compiler-generated props & no keys change, just set the updated
            // the props.
            const propsToUpdate = instance.vnode.dynamicProps;
            for(let i = 0; i < propsToUpdate.length; i++){
                let key = propsToUpdate[i];
                // skip if the prop key is a declared emit event listener
                if (isEmitListener(instance.emitsOptions, key)) continue;
                // PROPS flag guarantees rawProps to be non-null
                const value = rawProps[key];
                if (options) {
                    // attr / props separation was done on init and will be consistent
                    // in this code path, so just check if attrs have it.
                    if ((0, _shared.hasOwn)(attrs, key)) {
                        if (value !== attrs[key]) {
                            attrs[key] = value;
                            hasAttrsChanged = true;
                        }
                    } else {
                        const camelizedKey = (0, _shared.camelize)(key);
                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
                    }
                } else if (value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                }
            }
        }
    } else {
        // full props update.
        if (setFullProps(instance, rawProps, props, attrs)) hasAttrsChanged = true;
        // in case of dynamic props, check if we need to delete keys from
        // the props object
        let kebabKey;
        for(const key1 in rawCurrentProps)if (!rawProps || !(0, _shared.hasOwn)(rawProps, key1) && ((kebabKey = (0, _shared.hyphenate)(key1)) === key1 || !(0, _shared.hasOwn)(rawProps, kebabKey))) {
            if (options) {
                if (rawPrevProps && (rawPrevProps[key1] !== undefined || // for kebab-case
                rawPrevProps[kebabKey] !== undefined)) props[key1] = resolvePropValue(options, rawCurrentProps, key1, undefined, instance, true);
            } else delete props[key1];
        }
        // in the case of functional component w/o props declaration, props and
        // attrs point to the same object so it should already have been updated.
        if (attrs !== rawCurrentProps) {
            for(const key2 in attrs)if (!rawProps || !(0, _shared.hasOwn)(rawProps, key2) && true) {
                delete attrs[key2];
                hasAttrsChanged = true;
            }
        }
    }
    // trigger updates for $attrs in case it's used in component slots
    if (hasAttrsChanged) (0, _reactivity.trigger)(instance, "set" /* SET */ , "$attrs");
    validateProps(rawProps || {}, props, instance);
}
function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) for(let key in rawProps){
        // key, ref are reserved and never passed down
        if ((0, _shared.isReservedProp)(key)) continue;
        const value = rawProps[key];
        // prop option names are camelized during normalization, so to support
        // kebab -> camel conversion here we need to camelize the key.
        let camelKey;
        if (options && (0, _shared.hasOwn)(options, camelKey = (0, _shared.camelize)(key))) {
            if (!needCastKeys || !needCastKeys.includes(camelKey)) props[camelKey] = value;
            else (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        } else if (!isEmitListener(instance.emitsOptions, key)) {
            if (!(key in attrs) || value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = (0, _reactivity.toRaw)(props);
        const castValues = rawCastValues || (0, _shared.EMPTY_OBJ);
        for(let i = 0; i < needCastKeys.length; i++){
            const key1 = needCastKeys[i];
            props[key1] = resolvePropValue(options, rawCurrentProps, key1, castValues[key1], instance, !(0, _shared.hasOwn)(castValues, key1));
        }
    }
    return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = (0, _shared.hasOwn)(opt, "default");
        // default values
        if (hasDefault && value === undefined) {
            const defaultValue = opt.default;
            if (opt.type !== Function && (0, _shared.isFunction)(defaultValue)) {
                const { propsDefaults  } = instance;
                if (key in propsDefaults) value = propsDefaults[key];
                else {
                    setCurrentInstance(instance);
                    value = propsDefaults[key] = defaultValue.call(null, props);
                    unsetCurrentInstance();
                }
            } else value = defaultValue;
        }
        // boolean casting
        if (opt[0 /* shouldCast */ ]) {
            if (isAbsent && !hasDefault) value = false;
            else if (opt[1 /* shouldCastTrue */ ] && (value === "" || value === (0, _shared.hyphenate)(key))) value = true;
        }
    }
    return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) return cached;
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !(0, _shared.isFunction)(comp)) {
        const extendProps = (raw)=>{
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw, appContext, true);
            (0, _shared.extend)(normalized, props);
            if (keys) needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendProps);
        if (comp.extends) extendProps(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendProps);
    }
    if (!raw && !hasExtends) {
        cache.set(comp, (0, _shared.EMPTY_ARR));
        return 0, _shared.EMPTY_ARR;
    }
    if ((0, _shared.isArray)(raw)) for(let i = 0; i < raw.length; i++){
        if (!(0, _shared.isString)(raw[i])) warn(`props must be strings when using array syntax.`, raw[i]);
        const normalizedKey = (0, _shared.camelize)(raw[i]);
        if (validatePropName(normalizedKey)) normalized[normalizedKey] = (0, _shared.EMPTY_OBJ);
    }
    else if (raw) {
        if (!(0, _shared.isObject)(raw)) warn(`invalid props options`, raw);
        for(const key in raw){
            const normalizedKey1 = (0, _shared.camelize)(key);
            if (validatePropName(normalizedKey1)) {
                const opt = raw[key];
                const prop = normalized[normalizedKey1] = (0, _shared.isArray)(opt) || (0, _shared.isFunction)(opt) ? {
                    type: opt
                } : opt;
                if (prop) {
                    const booleanIndex = getTypeIndex(Boolean, prop.type);
                    const stringIndex = getTypeIndex(String, prop.type);
                    prop[0 /* shouldCast */ ] = booleanIndex > -1;
                    prop[1 /* shouldCastTrue */ ] = stringIndex < 0 || booleanIndex < stringIndex;
                    // if the prop needs boolean casting or default value
                    if (booleanIndex > -1 || (0, _shared.hasOwn)(prop, "default")) needCastKeys.push(normalizedKey1);
                }
            }
        }
    }
    const res = [
        normalized,
        needCastKeys
    ];
    cache.set(comp, res);
    return res;
}
function validatePropName(key) {
    if (key[0] !== "$") return true;
    else warn(`Invalid prop name: "${key}" is a reserved property.`);
    return false;
}
// use function string name to check type constructors
// so that it works across vms / iframes.
function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if ((0, _shared.isArray)(expectedTypes)) return expectedTypes.findIndex((t)=>isSameType(t, type));
    else if ((0, _shared.isFunction)(expectedTypes)) return isSameType(expectedTypes, type) ? 0 : -1;
    return -1;
}
/**
 * dev only
 */ function validateProps(rawProps, props, instance) {
    const resolvedValues = (0, _reactivity.toRaw)(props);
    const options = instance.propsOptions[0];
    for(const key in options){
        let opt = options[key];
        if (opt == null) continue;
        validateProp(key, resolvedValues[key], opt, !(0, _shared.hasOwn)(rawProps, key) && !(0, _shared.hasOwn)(rawProps, (0, _shared.hyphenate)(key)));
    }
}
/**
 * dev only
 */ function validateProp(name, value, prop, isAbsent) {
    const { type , required , validator  } = prop;
    // required!
    if (required && isAbsent) {
        warn('Missing required prop: "' + name + '"');
        return;
    }
    // missing but optional
    if (value == null && !prop.required) return;
    // type check
    if (type != null && type !== true) {
        let isValid = false;
        const types = (0, _shared.isArray)(type) ? type : [
            type
        ];
        const expectedTypes = [];
        // value is valid as long as one of the specified types match
        for(let i = 0; i < types.length && !isValid; i++){
            const { valid , expectedType  } = assertType(value, types[i]);
            expectedTypes.push(expectedType || "");
            isValid = valid;
        }
        if (!isValid) {
            warn(getInvalidTypeMessage(name, value, expectedTypes));
            return;
        }
    }
    // custom validator
    if (validator && !validator(value)) warn('Invalid prop: custom validator check failed for prop "' + name + '".');
}
const isSimpleType = /*#__PURE__*/ (0, _shared.makeMap)("String,Number,Boolean,Function,Symbol,BigInt");
/**
 * dev only
 */ function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === "object") valid = value instanceof type;
    } else if (expectedType === "Object") valid = (0, _shared.isObject)(value);
    else if (expectedType === "Array") valid = (0, _shared.isArray)(value);
    else if (expectedType === "null") valid = value === null;
    else valid = value instanceof type;
    return {
        valid,
        expectedType
    };
}
/**
 * dev only
 */ function getInvalidTypeMessage(name, value, expectedTypes) {
    let message = `Invalid prop: type check failed for prop "${name}".` + ` Expected ${expectedTypes.map((0, _shared.capitalize)).join(" | ")}`;
    const expectedType = expectedTypes[0];
    const receivedType = (0, _shared.toRawType)(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) message += ` with value ${expectedValue}`;
    message += `, got ${receivedType} `;
    // check if we need to specify received value
    if (isExplicable(receivedType)) message += `with value ${receivedValue}.`;
    return message;
}
/**
 * dev only
 */ function styleValue(value, type) {
    if (type === "String") return `"${value}"`;
    else if (type === "Number") return `${Number(value)}`;
    else return `${value}`;
}
/**
 * dev only
 */ function isExplicable(type) {
    const explicitTypes = [
        "string",
        "number",
        "boolean"
    ];
    return explicitTypes.some((elem)=>type.toLowerCase() === elem);
}
/**
 * dev only
 */ function isBoolean(...args) {
    return args.some((elem)=>elem.toLowerCase() === "boolean");
}
const isInternalKey = (key)=>key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value)=>(0, _shared.isArray)(value) ? value.map(normalizeVNode) : [
        normalizeVNode(value)
    ];
const normalizeSlot = (key, rawSlot, ctx)=>{
    if (rawSlot._n) // already normalized - #5353
    return rawSlot;
    const normalized = withCtx((...args)=>{
        if (currentInstance) warn(`Slot "${key}" invoked outside of the render function: ` + `this will not track dependencies used in the slot. ` + `Invoke the slot function inside the render function instead.`);
        return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance)=>{
    const ctx = rawSlots._ctx;
    for(const key in rawSlots){
        if (isInternalKey(key)) continue;
        const value = rawSlots[key];
        if ((0, _shared.isFunction)(value)) slots[key] = normalizeSlot(key, value, ctx);
        else if (value != null) {
            warn(`Non-function value encountered for slot "${key}". ` + `Prefer function slots for better performance.`);
            const normalized = normalizeSlotValue(value);
            slots[key] = ()=>normalized;
        }
    }
};
const normalizeVNodeSlots = (instance, children)=>{
    if (!isKeepAlive(instance.vnode) && true) warn(`Non-function value encountered for default slot. ` + `Prefer function slots for better performance.`);
    const normalized = normalizeSlotValue(children);
    instance.slots.default = ()=>normalized;
};
const initSlots = (instance, children)=>{
    if (instance.vnode.shapeFlag & 32 /* SLOTS_CHILDREN */ ) {
        const type = children._;
        if (type) {
            // users can get the shallow readonly version of the slots object through `this.$slots`,
            // we should avoid the proxy object polluting the slots of the internal instance
            instance.slots = (0, _reactivity.toRaw)(children);
            // make compiler marker non-enumerable
            (0, _shared.def)(children, "_", type);
        } else normalizeObjectSlots(children, instance.slots = {});
    } else {
        instance.slots = {};
        if (children) normalizeVNodeSlots(instance, children);
    }
    (0, _shared.def)(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized)=>{
    const { vnode , slots  } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = (0, _shared.EMPTY_OBJ);
    if (vnode.shapeFlag & 32 /* SLOTS_CHILDREN */ ) {
        const type = children._;
        if (type) {
            // compiled slots.
            if (isHmrUpdating) // Parent was HMR updated so slot content may have changed.
            // force update slots and mark instance for hmr as well
            (0, _shared.extend)(slots, children);
            else if (optimized && type === 1 /* STABLE */ ) // compiled AND stable.
            // no need to update, and skip stale slots removal.
            needDeletionCheck = false;
            else {
                // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
                // normalization.
                (0, _shared.extend)(slots, children);
                // #2893
                // when rendering the optimized slots by manually written render function,
                // we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
                // i.e. let the `renderSlot` create the bailed Fragment
                if (!optimized && type === 1 /* STABLE */ ) delete slots._;
            }
        } else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    } else if (children) {
        // non slot object children (direct value) passed to a component
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = {
            default: 1
        };
    }
    // delete stale slots
    if (needDeletionCheck) {
        for(const key in slots)if (!isInternalKey(key) && !(key in deletionComparisonTarget)) delete slots[key];
    }
};
function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: (0, _shared.NO),
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: undefined,
            warnHandler: undefined,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap()
    };
}
let uid = 0;
function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (!(0, _shared.isFunction)(rootComponent)) rootComponent = Object.assign({}, rootComponent);
        if (rootProps != null && !(0, _shared.isObject)(rootProps)) {
            warn(`root props passed to app.mount() must be an object.`);
            rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = new Set();
        let isMounted = false;
        const app = context.app = {
            _uid: uid++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version,
            get config () {
                return context.config;
            },
            set config (v){
                warn(`app.config cannot be replaced. Modify individual options instead.`);
            },
            use (plugin, ...options) {
                if (installedPlugins.has(plugin)) warn(`Plugin has already been applied to target app.`);
                else if (plugin && (0, _shared.isFunction)(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                } else if ((0, _shared.isFunction)(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                } else warn(`A plugin must either be a function or an object with an "install" ` + `function.`);
                return app;
            },
            mixin (mixin) {
                if (__VUE_OPTIONS_API__) {
                    if (!context.mixins.includes(mixin)) context.mixins.push(mixin);
                    else warn("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
                } else warn("Mixins are only available in builds supporting Options API");
                return app;
            },
            component (name, component) {
                validateComponentName(name, context.config);
                if (!component) return context.components[name];
                if (context.components[name]) warn(`Component "${name}" has already been registered in target app.`);
                context.components[name] = component;
                return app;
            },
            directive (name, directive) {
                validateDirectiveName(name);
                if (!directive) return context.directives[name];
                if (context.directives[name]) warn(`Directive "${name}" has already been registered in target app.`);
                context.directives[name] = directive;
                return app;
            },
            mount (rootContainer, isHydrate, isSVG) {
                if (!isMounted) {
                    // #5571
                    if (rootContainer.__vue_app__) warn(`There is already an app instance mounted on the host container.\n` + ` If you want to mount another app on the same host container,` + ` you need to unmount the previous app by calling \`app.unmount()\` first.`);
                    const vnode = createVNode(rootComponent, rootProps);
                    // store app context on the root VNode.
                    // this will be set on the root instance on initial mount.
                    vnode.appContext = context;
                    context.reload = ()=>{
                        render(cloneVNode(vnode), rootContainer, isSVG);
                    };
                    if (isHydrate && hydrate) hydrate(vnode, rootContainer);
                    else render(vnode, rootContainer, isSVG);
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    app._instance = vnode.component;
                    devtoolsInitApp(app, version);
                    return getExposeProxy(vnode.component) || vnode.component.proxy;
                } else warn(`App has already been mounted.\n` + `If you want to remount the same app, move your app creation logic ` + `into a factory function and create fresh app instances for each ` + `mount - e.g. \`const createMyApp = () => createApp(App)\``);
            },
            unmount () {
                if (isMounted) {
                    render(null, app._container);
                    app._instance = null;
                    devtoolsUnmountApp(app);
                    delete app._container.__vue_app__;
                } else warn(`Cannot unmount an app that is not mounted.`);
            },
            provide (key, value) {
                if (key in context.provides) warn(`App already provides property with key "${String(key)}". ` + `It will be overwritten with the new value.`);
                context.provides[key] = value;
                return app;
            }
        };
        return app;
    };
}
/**
 * Function for handling a template ref
 */ function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if ((0, _shared.isArray)(rawRef)) {
        rawRef.forEach((r, i)=>setRef(r, oldRawRef && ((0, _shared.isArray)(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
        return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) // when mounting async components, nothing needs to be done,
    // because the template ref is forwarded to inner component
    return;
    const refValue = vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */  ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner , r: ref  } = rawRef;
    if (!owner) {
        warn(`Missing ref owner context. ref cannot be used on hoisted vnodes. ` + `A vnode with ref must be created inside the render function.`);
        return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === (0, _shared.EMPTY_OBJ) ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    // dynamic ref changed. unset old ref
    if (oldRef != null && oldRef !== ref) {
        if ((0, _shared.isString)(oldRef)) {
            refs[oldRef] = null;
            if ((0, _shared.hasOwn)(setupState, oldRef)) setupState[oldRef] = null;
        } else if ((0, _reactivity.isRef)(oldRef)) oldRef.value = null;
    }
    if ((0, _shared.isFunction)(ref)) callWithErrorHandling(ref, owner, 12 /* FUNCTION_REF */ , [
        value,
        refs
    ]);
    else {
        const _isString = (0, _shared.isString)(ref);
        const _isRef = (0, _reactivity.isRef)(ref);
        if (_isString || _isRef) {
            const doSet = ()=>{
                if (rawRef.f) {
                    const existing = _isString ? refs[ref] : ref.value;
                    if (isUnmount) (0, _shared.isArray)(existing) && (0, _shared.remove)(existing, refValue);
                    else {
                        if (!(0, _shared.isArray)(existing)) {
                            if (_isString) {
                                refs[ref] = [
                                    refValue
                                ];
                                if ((0, _shared.hasOwn)(setupState, ref)) setupState[ref] = refs[ref];
                            } else {
                                ref.value = [
                                    refValue
                                ];
                                if (rawRef.k) refs[rawRef.k] = ref.value;
                            }
                        } else if (!existing.includes(refValue)) existing.push(refValue);
                    }
                } else if (_isString) {
                    refs[ref] = value;
                    if ((0, _shared.hasOwn)(setupState, ref)) setupState[ref] = value;
                } else if (_isRef) {
                    ref.value = value;
                    if (rawRef.k) refs[rawRef.k] = value;
                } else warn("Invalid template ref type:", ref, `(${typeof ref})`);
            };
            if (value) {
                doSet.id = -1;
                queuePostRenderEffect(doSet, parentSuspense);
            } else doSet();
        } else warn("Invalid template ref type:", ref, `(${typeof ref})`);
    }
}
let hasMismatch = false;
const isSVGContainer = (container)=>/svg/.test(container.namespaceURI) && container.tagName !== "foreignObject";
const isComment = (node)=>node.nodeType === 8 /* COMMENT */ ;
// Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.
function createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent , p: patch , o: { patchProp , createText , nextSibling , parentNode , remove , insert , createComment  }  } = rendererInternals;
    const hydrate = (vnode, container)=>{
        if (!container.hasChildNodes()) {
            warn(`Attempting to hydrate existing markup but container is empty. ` + `Performing full mount instead.`);
            patch(null, vnode, container);
            flushPostFlushCbs();
            container._vnode = vnode;
            return;
        }
        hasMismatch = false;
        hydrateNode(container.firstChild, vnode, null, null, null);
        flushPostFlushCbs();
        container._vnode = vnode;
        if (hasMismatch && true) // this error should show up in production
        console.error(`Hydration completed but contains mismatches.`);
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false)=>{
        const isFragmentStart = isComment(node) && node.data === "[";
        const onMismatch = ()=>handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
        const { type , ref , shapeFlag , patchFlag  } = vnode;
        const domType = node.nodeType;
        vnode.el = node;
        if (patchFlag === -2 /* BAIL */ ) {
            optimized = false;
            vnode.dynamicChildren = null;
        }
        let nextNode = null;
        switch(type){
            case Text:
                if (domType !== 3 /* TEXT */ ) {
                    // #5728 empty text node inside a slot can cause hydration failure
                    // because the server rendered HTML won't contain a text node
                    if (vnode.children === "") {
                        insert(vnode.el = createText(""), parentNode(node), node);
                        nextNode = node;
                    } else nextNode = onMismatch();
                } else {
                    if (node.data !== vnode.children) {
                        hasMismatch = true;
                        warn(`Hydration text mismatch:` + `\n- Client: ${JSON.stringify(node.data)}` + `\n- Server: ${JSON.stringify(vnode.children)}`);
                        node.data = vnode.children;
                    }
                    nextNode = nextSibling(node);
                }
                break;
            case Comment:
                if (domType !== 8 /* COMMENT */  || isFragmentStart) nextNode = onMismatch();
                else nextNode = nextSibling(node);
                break;
            case Static:
                if (domType !== 1 /* ELEMENT */  && domType !== 3 /* TEXT */ ) nextNode = onMismatch();
                else {
                    // determine anchor, adopt content
                    nextNode = node;
                    // if the static vnode has its content stripped during build,
                    // adopt it from the server-rendered HTML.
                    const needToAdoptContent = !vnode.children.length;
                    for(let i = 0; i < vnode.staticCount; i++){
                        if (needToAdoptContent) vnode.children += nextNode.nodeType === 1 /* ELEMENT */  ? nextNode.outerHTML : nextNode.data;
                        if (i === vnode.staticCount - 1) vnode.anchor = nextNode;
                        nextNode = nextSibling(nextNode);
                    }
                    return nextNode;
                }
                break;
            case Fragment:
                if (!isFragmentStart) nextNode = onMismatch();
                else nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */ ) {
                    if (domType !== 1 /* ELEMENT */  || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) nextNode = onMismatch();
                    else nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                } else if (shapeFlag & 6 /* COMPONENT */ ) {
                    // when setting up the render effect, if the initial vnode already
                    // has .el set, the component will perform hydration instead of mount
                    // on its sub-tree.
                    vnode.slotScopeIds = slotScopeIds;
                    const container = parentNode(node);
                    mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
                    // component may be async, so in the case of fragments we cannot rely
                    // on component's rendered output to determine the end of the fragment
                    // instead, we do a lookahead to find the end anchor node.
                    nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
                    // #4293 teleport as component root
                    if (nextNode && isComment(nextNode) && nextNode.data === "teleport end") nextNode = nextSibling(nextNode);
                    // #3787
                    // if component is async, it may get moved / unmounted before its
                    // inner component is loaded, so we need to give it a placeholder
                    // vnode that matches its adopted DOM.
                    if (isAsyncWrapper(vnode)) {
                        let subTree;
                        if (isFragmentStart) {
                            subTree = createVNode(Fragment);
                            subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
                        } else subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
                        subTree.el = node;
                        vnode.component.subTree = subTree;
                    }
                } else if (shapeFlag & 64 /* TELEPORT */ ) {
                    if (domType !== 8 /* COMMENT */ ) nextNode = onMismatch();
                    else nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
                } else if (shapeFlag & 128 /* SUSPENSE */ ) nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
                else warn("Invalid HostVNode type:", type, `(${typeof type})`);
        }
        if (ref != null) setRef(ref, null, parentSuspense, vnode);
        return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!vnode.dynamicChildren;
        const { type , props , patchFlag , shapeFlag , dirs  } = vnode;
        // #4006 for form elements with non-string v-model value bindings
        // e.g. <option :value="obj">, <input type="checkbox" :true-value="1">
        const forcePatchValue = type === "input" && dirs || type === "option";
        {
            if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
            // props
            if (props) {
                if (forcePatchValue || !optimized || patchFlag & 48 /* HYDRATE_EVENTS */ ) {
                    for(const key in props)if (forcePatchValue && key.endsWith("value") || (0, _shared.isOn)(key) && !(0, _shared.isReservedProp)(key)) patchProp(el, key, null, props[key], false, undefined, parentComponent);
                } else if (props.onClick) // Fast path for click listeners (which is most often) to avoid
                // iterating through props.
                patchProp(el, "onClick", null, props.onClick, false, undefined, parentComponent);
            }
            // vnode / directive hooks
            let vnodeHooks;
            if (vnodeHooks = props && props.onVnodeBeforeMount) invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs) queueEffectWithSuspense(()=>{
                vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
            }, parentSuspense);
            // children
            if (shapeFlag & 16 /* ARRAY_CHILDREN */  && // skip if element has innerHTML / textContent
            !(props && (props.innerHTML || props.textContent))) {
                let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
                let hasWarned = false;
                while(next){
                    hasMismatch = true;
                    if (!hasWarned) {
                        warn(`Hydration children mismatch in <${vnode.type}>: ` + `server rendered element contains more child nodes than client vdom.`);
                        hasWarned = true;
                    }
                    // The SSRed DOM contains more nodes than it should. Remove them.
                    const cur = next;
                    next = next.nextSibling;
                    remove(cur);
                }
            } else if (shapeFlag & 8 /* TEXT_CHILDREN */ ) {
                if (el.textContent !== vnode.children) {
                    hasMismatch = true;
                    warn(`Hydration text content mismatch in <${vnode.type}>:\n` + `- Client: ${el.textContent}\n` + `- Server: ${vnode.children}`);
                    el.textContent = vnode.children;
                }
            }
        }
        return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!parentVNode.dynamicChildren;
        const children = parentVNode.children;
        const l = children.length;
        let hasWarned = false;
        for(let i = 0; i < l; i++){
            const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
            if (node) node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            else if (vnode.type === Text && !vnode.children) continue;
            else {
                hasMismatch = true;
                if (!hasWarned) {
                    warn(`Hydration children mismatch in <${container.tagName.toLowerCase()}>: ` + `server rendered element contains fewer child nodes than client vdom.`);
                    hasWarned = true;
                }
                // the SSRed DOM didn't contain enough nodes. Mount the missing ones.
                patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
            }
        }
        return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        const { slotScopeIds: fragmentSlotScopeIds  } = vnode;
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        const container = parentNode(node);
        const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
        if (next && isComment(next) && next.data === "]") return nextSibling(vnode.anchor = next);
        else {
            // fragment didn't hydrate successfully, since we didn't get a end anchor
            // back. This should have led to node/children mismatch warnings.
            hasMismatch = true;
            // since the anchor is missing, we need to create one and insert it
            insert(vnode.anchor = createComment(`]`), container, next);
            return next;
        }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment)=>{
        hasMismatch = true;
        warn(`Hydration node mismatch:\n- Client vnode:`, vnode.type, `\n- Server rendered DOM:`, node, node.nodeType === 3 /* TEXT */  ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``);
        vnode.el = null;
        if (isFragment) {
            // remove excessive fragment nodes
            const end = locateClosingAsyncAnchor(node);
            while(true){
                const next = nextSibling(node);
                if (next && next !== end) remove(next);
                else break;
            }
        }
        const next1 = nextSibling(node);
        const container = parentNode(node);
        remove(node);
        patch(null, vnode, container, next1, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
        return next1;
    };
    const locateClosingAsyncAnchor = (node)=>{
        let match = 0;
        while(node){
            node = nextSibling(node);
            if (node && isComment(node)) {
                if (node.data === "[") match++;
                if (node.data === "]") {
                    if (match === 0) return nextSibling(node);
                    else match--;
                }
            }
        }
        return node;
    };
    return [
        hydrate,
        hydrateNode
    ];
}
/* eslint-disable no-restricted-globals */ let supported;
let perf;
function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) perf.mark(`vue-${type}-${instance.uid}`);
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
}
function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        const startTag = `vue-${type}-${instance.uid}`;
        const endTag = startTag + `:end`;
        perf.mark(endTag);
        perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
    }
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
}
function isSupported() {
    if (supported !== undefined) return supported;
    if (typeof window !== "undefined" && window.performance) {
        supported = true;
        perf = window.performance;
    } else supported = false;
    return supported;
}
/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */ function initFeatureFlags() {
    const needWarn = [];
    if (typeof __VUE_OPTIONS_API__ !== "boolean") {
        needWarn.push(`__VUE_OPTIONS_API__`);
        (0, _shared.getGlobalThis)().__VUE_OPTIONS_API__ = true;
    }
    if (typeof __VUE_PROD_DEVTOOLS__ !== "boolean") {
        needWarn.push(`__VUE_PROD_DEVTOOLS__`);
        (0, _shared.getGlobalThis)().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (needWarn.length) {
        const multi = needWarn.length > 1;
        console.warn(`Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, ` + `which expects these compile-time feature flags to be globally injected ` + `via the bundler config in order to get better tree-shaking in the ` + `production bundle.\n\n` + `For more details, see https://link.vuejs.org/feature-flags.`);
    }
}
const queuePostRenderEffect = queueEffectWithSuspense;
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */ function createRenderer(options) {
    return baseCreateRenderer(options);
}
// Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.
function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
}
// implementation
function baseCreateRenderer(options, createHydrationFns) {
    initFeatureFlags();
    const target = (0, _shared.getGlobalThis)();
    target.__VUE__ = true;
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    const { insert: hostInsert , remove: hostRemove , patchProp: hostPatchProp , createElement: hostCreateElement , createText: hostCreateText , createComment: hostCreateComment , setText: hostSetText , setElementText: hostSetElementText , parentNode: hostParentNode , nextSibling: hostNextSibling , setScopeId: hostSetScopeId = (0, _shared.NOOP) , cloneNode: hostCloneNode , insertStaticContent: hostInsertStaticContent  } = options;
    // Note: functions inside this closure should use `const xxx = () => {}`
    // style in order to prevent being inlined by minifiers.
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren)=>{
        if (n1 === n2) return;
        // patching & not same type, unmount old tree
        if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2 /* BAIL */ ) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type , ref , shapeFlag  } = n2;
        switch(type){
            case Text:
                processText(n1, n2, container, anchor);
                break;
            case Comment:
                processCommentNode(n1, n2, container, anchor);
                break;
            case Static:
                if (n1 == null) mountStaticNode(n2, container, anchor, isSVG);
                else patchStaticNode(n1, n2, container, isSVG);
                break;
            case Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */ ) processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                else if (shapeFlag & 6 /* COMPONENT */ ) processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                else if (shapeFlag & 64 /* TELEPORT */ ) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                else if (shapeFlag & 128 /* SUSPENSE */ ) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                else warn("Invalid VNode type:", type, `(${typeof type})`);
        }
        // set ref
        if (ref != null && parentComponent) setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    };
    const processText = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
        else {
            const el = n2.el = n1.el;
            if (n2.children !== n1.children) hostSetText(el, n2.children);
        }
    };
    const processCommentNode = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
        else // there's no support for dynamic comments
        n2.el = n1.el;
    };
    const mountStaticNode = (n2, container, anchor, isSVG)=>{
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
    };
    /**
     * Dev / HMR only
     */ const patchStaticNode = (n1, n2, container, isSVG)=>{
        // static nodes are only patched during dev for HMR
        if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            // remove existing
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
        } else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
        }
    };
    const moveStaticNode = ({ el , anchor  }, container, nextSibling)=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
        }
        hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el , anchor  })=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
        }
        hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        isSVG = isSVG || n2.type === "svg";
        if (n1 == null) mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        else patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        let el;
        let vnodeHook;
        const { type , props , shapeFlag , transition , patchFlag , dirs  } = vnode;
        el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
        // mount children first, since some props may rely on child content
        // being already rendered, e.g. `<select value>`
        if (shapeFlag & 8 /* TEXT_CHILDREN */ ) hostSetElementText(el, vnode.children);
        else if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
        // props
        if (props) {
            for(const key in props)if (key !== "value" && !(0, _shared.isReservedProp)(key)) hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            /**
                 * Special case for setting value on DOM elements:
                 * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
                 * - it needs to be forced (#1471)
                 * #2353 proposes adding another renderer option to configure this, but
                 * the properties affects are so finite it is worth special casing it
                 * here to reduce the complexity. (Special casing it also should not
                 * affect non-DOM renderers)
                 */ if ("value" in props) hostPatchProp(el, "value", null, props.value);
            if (vnodeHook = props.onVnodeBeforeMount) invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        // scopeId
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
        Object.defineProperty(el, "__vnode", {
            value: vnode,
            enumerable: false
        });
        Object.defineProperty(el, "__vueParentComponent", {
            value: parentComponent,
            enumerable: false
        });
        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
        // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
        // #1689 For inside suspense + suspense resolved case, just call it
        const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
        if (needCallTransitionHooks) transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            needCallTransitionHooks && transition.enter(el);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent)=>{
        if (scopeId) hostSetScopeId(el, scopeId);
        if (slotScopeIds) for(let i = 0; i < slotScopeIds.length; i++)hostSetScopeId(el, slotScopeIds[i]);
        if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (subTree.patchFlag > 0 && subTree.patchFlag & 2048 /* DEV_ROOT_FRAGMENT */ ) subTree = filterSingleRoot(subTree.children) || subTree;
            if (vnode === subTree) {
                const parentVNode = parentComponent.vnode;
                setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0)=>{
        for(let i = start; i < children.length; i++){
            const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
            patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        const el = n2.el = n1.el;
        let { patchFlag , dynamicChildren , dirs  } = n2;
        // #1426 take the old vnode's patch flag into account since user may clone a
        // compiler-generated vnode, which de-opts to FULL_PROPS
        patchFlag |= n1.patchFlag & 16 /* FULL_PROPS */ ;
        const oldProps = n1.props || (0, _shared.EMPTY_OBJ);
        const newProps = n2.props || (0, _shared.EMPTY_OBJ);
        let vnodeHook;
        // disable recurse in beforeUpdate hooks
        parentComponent && toggleRecurse(parentComponent, false);
        if (vnodeHook = newProps.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        if (dirs) invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
        parentComponent && toggleRecurse(parentComponent, true);
        if (isHmrUpdating) {
            // HMR updated, force full diff
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        const areChildrenSVG = isSVG && n2.type !== "foreignObject";
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
            if (parentComponent && parentComponent.type.__hmrId) traverseStaticChildren(n1, n2);
        } else if (!optimized) // full diff
        patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
        if (patchFlag > 0) {
            // the presence of a patchFlag means this element's render code was
            // generated by the compiler and can take the fast path.
            // in this path old node and new node are guaranteed to have the same shape
            // (i.e. at the exact same position in the source template)
            if (patchFlag & 16 /* FULL_PROPS */ ) // element props contain dynamic keys, full diff needed
            patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
            else {
                // class
                // this flag is matched when the element has dynamic class bindings.
                if (patchFlag & 2 /* CLASS */ ) {
                    if (oldProps.class !== newProps.class) hostPatchProp(el, "class", null, newProps.class, isSVG);
                }
                // style
                // this flag is matched when the element has dynamic style bindings
                if (patchFlag & 4 /* STYLE */ ) hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
                // props
                // This flag is matched when the element has dynamic prop/attr bindings
                // other than class and style. The keys of dynamic prop/attrs are saved for
                // faster iteration.
                // Note dynamic keys like :[foo]="bar" will cause this optimization to
                // bail out and go through a full diff because we need to unset the old key
                if (patchFlag & 8 /* PROPS */ ) {
                    // if the flag is present then dynamicProps must be non-null
                    const propsToUpdate = n2.dynamicProps;
                    for(let i = 0; i < propsToUpdate.length; i++){
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        // #1471 force patch value
                        if (next !== prev || key === "value") hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
            }
            // text
            // This flag is matched when the element has only dynamic text children.
            if (patchFlag & 1 /* TEXT */ ) {
                if (n1.children !== n2.children) hostSetElementText(el, n2.children);
            }
        } else if (!optimized && dynamicChildren == null) // unoptimized, full diff
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
            dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
        }, parentSuspense);
    };
    // The fast path for blocks.
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds)=>{
        for(let i = 0; i < newChildren.length; i++){
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            // Determine the container (parent element) for the patch.
            const container = // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            oldVNode.el && (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
            // which also requires the correct parent container
            !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
            oldVNode.shapeFlag & 70 /* TELEPORT */ ) ? hostParentNode(oldVNode.el) : // just pass the block element here to avoid a DOM parentNode call.
            fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
        }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG)=>{
        if (oldProps !== newProps) {
            for(const key in newProps){
                // empty string is not valid prop
                if ((0, _shared.isReservedProp)(key)) continue;
                const next = newProps[key];
                const prev = oldProps[key];
                // defer patching value
                if (next !== prev && key !== "value") hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
            if (oldProps !== (0, _shared.EMPTY_OBJ)) {
                for(const key1 in oldProps)if (!(0, _shared.isReservedProp)(key1) && !(key1 in newProps)) hostPatchProp(el, key1, oldProps[key1], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
            if ("value" in newProps) hostPatchProp(el, "value", oldProps.value, newProps.value);
        }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
        const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
        let { patchFlag , dynamicChildren , slotScopeIds: fragmentSlotScopeIds  } = n2;
        if (isHmrUpdating || patchFlag & 2048 /* DEV_ROOT_FRAGMENT */ ) {
            // HMR updated / Dev root fragment (w/ comments), force full diff
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        // check if this is a slot fragment with :slotted scope ids
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            // a fragment can only have array children
            // since they are either generated by the compiler, or implicitly created
            // from arrays.
            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (patchFlag > 0 && patchFlag & 64 /* STABLE_FRAGMENT */  && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
        // of renderSlot() with no valid children
        n1.dynamicChildren) {
            // a stable fragment (template root or <template v-for>) doesn't need to
            // patch children order, but it may contain dynamicChildren.
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
            if (parentComponent && parentComponent.type.__hmrId) traverseStaticChildren(n1, n2);
            else if (// #2080 if the stable fragment has a key, it's a <template v-for> that may
            //  get moved around. Make sure all root level vnodes inherit el.
            // #2134 or if it's a component root, it may also get moved around
            // as the component is being moved.
            n2.key != null || parentComponent && n2 === parentComponent.subTree) traverseStaticChildren(n1, n2, true);
        } else // keyed / unkeyed, or manual fragments.
        // for keyed & unkeyed, since they are compiler generated from v-for,
        // each child is guaranteed to be a block so the fragment will never
        // have dynamicChildren.
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        n2.slotScopeIds = slotScopeIds;
        if (n1 == null) {
            if (n2.shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */ ) parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
            else mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        } else updateComponent(n1, n2, optimized);
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized)=>{
        const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
        if (instance.type.__hmrId) registerHMR(instance);
        pushWarningContext(initialVNode);
        startMeasure(instance, `mount`);
        // inject renderer internals for keepAlive
        if (isKeepAlive(initialVNode)) instance.ctx.renderer = internals;
        startMeasure(instance, `init`);
        setupComponent(instance);
        endMeasure(instance, `init`);
        // setup() is async. This component relies on async logic to be resolved
        // before proceeding
        if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            // Give it a placeholder if this is not hydration
            // TODO handle self-defined fallback
            if (!initialVNode.el) {
                const placeholder = instance.subTree = createVNode(Comment);
                processCommentNode(null, placeholder, container, anchor);
            }
            return;
        }
        setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
        popWarningContext();
        endMeasure(instance, `mount`);
    };
    const updateComponent = (n1, n2, optimized)=>{
        const instance = n2.component = n1.component;
        if (shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep && !instance.asyncResolved) {
                pushWarningContext(n2);
                updateComponentPreRender(instance, n2, optimized);
                popWarningContext();
                return;
            } else {
                // normal update
                instance.next = n2;
                // in case the child component is also queued, remove it to avoid
                // double updating the same child component in the same flush.
                invalidateJob(instance.update);
                // instance.update is the reactive effect.
                instance.update();
            }
        } else {
            // no update needed. just copy over properties
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized)=>{
        const componentUpdateFn = ()=>{
            if (!instance.isMounted) {
                let vnodeHook;
                const { el , props  } = initialVNode;
                const { bm , m , parent  } = instance;
                const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
                toggleRecurse(instance, false);
                // beforeMount hook
                if (bm) (0, _shared.invokeArrayFns)(bm);
                // onVnodeBeforeMount
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) invokeVNodeHook(vnodeHook, parent, initialVNode);
                toggleRecurse(instance, true);
                if (el && hydrateNode) {
                    // vnode has adopted host node - perform hydration instead of mount.
                    const hydrateSubTree = ()=>{
                        startMeasure(instance, `render`);
                        instance.subTree = renderComponentRoot(instance);
                        endMeasure(instance, `render`);
                        startMeasure(instance, `hydrate`);
                        hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                        endMeasure(instance, `hydrate`);
                    };
                    if (isAsyncWrapperVNode) initialVNode.type.__asyncLoader().then(// note: we are moving the render call into an async callback,
                    // which means it won't track dependencies - but it's ok because
                    // a server-rendered async wrapper is already in resolved state
                    // and it will never need to change.
                    ()=>!instance.isUnmounted && hydrateSubTree());
                    else hydrateSubTree();
                } else {
                    startMeasure(instance, `render`);
                    const subTree = instance.subTree = renderComponentRoot(instance);
                    endMeasure(instance, `render`);
                    startMeasure(instance, `patch`);
                    patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                    endMeasure(instance, `patch`);
                    initialVNode.el = subTree.el;
                }
                // mounted hook
                if (m) queuePostRenderEffect(m, parentSuspense);
                // onVnodeMounted
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
                    const scopedInitialVNode = initialVNode;
                    queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
                }
                // activated hook for keep-alive roots.
                // #1742 activated hook must be accessed after first render
                // since the hook may be injected by a child keep-alive
                if (initialVNode.shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */  || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ) instance.a && queuePostRenderEffect(instance.a, parentSuspense);
                instance.isMounted = true;
                devtoolsComponentAdded(instance);
                // #2458: deference mount-only object parameters to prevent memleaks
                initialVNode = container = anchor = null;
            } else {
                // updateComponent
                // This is triggered by mutation of component's own state (next: null)
                // OR parent calling processComponent (next: VNode)
                let { next , bu , u , parent: parent1 , vnode  } = instance;
                let originNext = next;
                let vnodeHook1;
                pushWarningContext(next || instance.vnode);
                // Disallow component effect recursion during pre-lifecycle hooks.
                toggleRecurse(instance, false);
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                } else next = vnode;
                // beforeUpdate hook
                if (bu) (0, _shared.invokeArrayFns)(bu);
                // onVnodeBeforeUpdate
                if (vnodeHook1 = next.props && next.props.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook1, parent1, next, vnode);
                toggleRecurse(instance, true);
                startMeasure(instance, `render`);
                const nextTree = renderComponentRoot(instance);
                endMeasure(instance, `render`);
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                startMeasure(instance, `patch`);
                patch(prevTree, nextTree, // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, isSVG);
                endMeasure(instance, `patch`);
                next.el = nextTree.el;
                if (originNext === null) // self-triggered update. In case of HOC, update parent component
                // vnode el. HOC is indicated by parent instance's subTree pointing
                // to child component's vnode
                updateHOCHostEl(instance, nextTree.el);
                // updated hook
                if (u) queuePostRenderEffect(u, parentSuspense);
                // onVnodeUpdated
                if (vnodeHook1 = next.props && next.props.onVnodeUpdated) queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook1, parent1, next, vnode), parentSuspense);
                devtoolsComponentUpdated(instance);
                popWarningContext();
            }
        };
        // create reactive effect for rendering
        const effect = instance.effect = new (0, _reactivity.ReactiveEffect)(componentUpdateFn, ()=>queueJob(update), instance.scope // track it in component's effect scope
        );
        const update = instance.update = ()=>effect.run();
        update.id = instance.uid;
        // allowRecurse
        // #1801, #2043 component render effects should allow recursive updates
        toggleRecurse(instance, true);
        effect.onTrack = instance.rtc ? (e)=>(0, _shared.invokeArrayFns)(instance.rtc, e) : void 0;
        effect.onTrigger = instance.rtg ? (e)=>(0, _shared.invokeArrayFns)(instance.rtg, e) : void 0;
        update.ownerInstance = instance;
        update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized)=>{
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children, optimized);
        (0, _reactivity.pauseTracking)();
        // props update may have triggered pre-flush watchers.
        // flush them before the render update.
        flushPreFlushCbs(undefined, instance.update);
        (0, _reactivity.resetTracking)();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false)=>{
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag , shapeFlag  } = n2;
        // fast path
        if (patchFlag > 0) {
            if (patchFlag & 128 /* KEYED_FRAGMENT */ ) {
                // this could be either fully-keyed or mixed (some keyed some not)
                // presence of patchFlag means children are guaranteed to be arrays
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            } else if (patchFlag & 256 /* UNKEYED_FRAGMENT */ ) {
                // unkeyed
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            }
        }
        // children has 3 possibilities: text, array or no children.
        if (shapeFlag & 8 /* TEXT_CHILDREN */ ) {
            // text children fast path
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */ ) unmountChildren(c1, parentComponent, parentSuspense);
            if (c2 !== c1) hostSetElementText(container, c2);
        } else if (prevShapeFlag & 16 /* ARRAY_CHILDREN */ ) {
            // prev children was array
            if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) // two arrays, cannot assume anything, do full diff
            patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            else // no new children, just unmount old
            unmountChildren(c1, parentComponent, parentSuspense, true);
        } else {
            // prev children was text OR null
            // new children is array OR null
            if (prevShapeFlag & 8 /* TEXT_CHILDREN */ ) hostSetElementText(container, "");
            // mount new if array
            if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        c1 = c1 || (0, _shared.EMPTY_ARR);
        c2 = c2 || (0, _shared.EMPTY_ARR);
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for(i = 0; i < commonLength; i++){
            const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        if (oldLength > newLength) // remove old
        unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        else // mount new
        mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    };
    // can be all-keyed or mixed
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1; // prev ending index
        let e2 = l2 - 1; // next ending index
        // 1. sync from start
        // (a b) c
        // (a b) d e
        while(i <= e1 && i <= e2){
            const n1 = c1[i];
            const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            else break;
            i++;
        }
        // 2. sync from end
        // a (b c)
        // d e (b c)
        while(i <= e1 && i <= e2){
            const n11 = c1[e1];
            const n21 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
            if (isSameVNodeType(n11, n21)) patch(n11, n21, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            else break;
            e1--;
            e2--;
        }
        // 3. common sequence + mount
        // (a b)
        // (a b) c
        // i = 2, e1 = 1, e2 = 2
        // (a b)
        // c (a b)
        // i = 0, e1 = -1, e2 = 0
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while(i <= e2){
                    patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    i++;
                }
            }
        } else if (i > e2) while(i <= e1){
            unmount(c1[i], parentComponent, parentSuspense, true);
            i++;
        }
        else {
            const s1 = i; // prev starting index
            const s2 = i; // next starting index
            // 5.1 build key:index map for newChildren
            const keyToNewIndexMap = new Map();
            for(i = s2; i <= e2; i++){
                const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
                if (nextChild.key != null) {
                    if (keyToNewIndexMap.has(nextChild.key)) warn(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            // 5.2 loop through old children left to be patched and try to patch
            // matching nodes & remove nodes that are no longer present
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            // used to track whether any node has moved
            let maxNewIndexSoFar = 0;
            // works as Map<newIndex, oldIndex>
            // Note that oldIndex is offset by +1
            // and oldIndex = 0 is a special value indicating the new node has
            // no corresponding old node.
            // used for determining longest stable subsequence
            const newIndexToOldIndexMap = new Array(toBePatched);
            for(i = 0; i < toBePatched; i++)newIndexToOldIndexMap[i] = 0;
            for(i = s1; i <= e1; i++){
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    // all new children have been patched so this can only be a removal
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) newIndex = keyToNewIndexMap.get(prevChild.key);
                else {
                    // key-less node, try to locate a key-less node of the same type
                    for(j = s2; j <= e2; j++)if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                        newIndex = j;
                        break;
                    }
                }
                if (newIndex === undefined) unmount(prevChild, parentComponent, parentSuspense, true);
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) maxNewIndexSoFar = newIndex;
                    else moved = true;
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    patched++;
                }
            }
            // 5.3 move and mount
            // generate longest stable subsequence only when nodes have moved
            const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : (0, _shared.EMPTY_ARR);
            j = increasingNewIndexSequence.length - 1;
            // looping backwards so that we can use last patched node as anchor
            for(i = toBePatched - 1; i >= 0; i--){
                const nextIndex = s2 + i;
                const nextChild1 = c2[nextIndex];
                const anchor1 = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) // mount new
                patch(null, nextChild1, container, anchor1, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                else if (moved) {
                    // move if:
                    // There is no stable subsequence (e.g. a reverse)
                    // OR current node is not among the stable sequence
                    if (j < 0 || i !== increasingNewIndexSequence[j]) move(nextChild1, container, anchor1, 2 /* REORDER */ );
                    else j--;
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null)=>{
        const { el , type , transition , children , shapeFlag  } = vnode;
        if (shapeFlag & 6 /* COMPONENT */ ) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if (shapeFlag & 128 /* SUSPENSE */ ) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64 /* TELEPORT */ ) {
            type.move(vnode, container, anchor, internals);
            return;
        }
        if (type === Fragment) {
            hostInsert(el, container, anchor);
            for(let i = 0; i < children.length; i++)move(children[i], container, anchor, moveType);
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        // single nodes
        const needTransition = moveType !== 2 /* REORDER */  && shapeFlag & 1 /* ELEMENT */  && transition;
        if (needTransition) {
            if (moveType === 0 /* ENTER */ ) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(()=>transition.enter(el), parentSuspense);
            } else {
                const { leave , delayLeave , afterLeave  } = transition;
                const remove = ()=>hostInsert(el, container, anchor);
                const performLeave = ()=>{
                    leave(el, ()=>{
                        remove();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) delayLeave(el, remove, performLeave);
                else performLeave();
            }
        } else hostInsert(el, container, anchor);
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false)=>{
        const { type , props , ref , children , dynamicChildren , shapeFlag , patchFlag , dirs  } = vnode;
        // unset ref
        if (ref != null) setRef(ref, null, parentSuspense, vnode, true);
        if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 /* ELEMENT */  && dirs;
        const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
        let vnodeHook;
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) invokeVNodeHook(vnodeHook, parentComponent, vnode);
        if (shapeFlag & 6 /* COMPONENT */ ) unmountComponent(vnode.component, parentSuspense, doRemove);
        else {
            if (shapeFlag & 128 /* SUSPENSE */ ) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
            if (shapeFlag & 64 /* TELEPORT */ ) vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
            else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64 /* STABLE_FRAGMENT */ )) // fast path for block nodes: only need to unmount dynamic children.
            unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            else if (type === Fragment && patchFlag & 384 /* UNKEYED_FRAGMENT */  || !optimized && shapeFlag & 16 /* ARRAY_CHILDREN */ ) unmountChildren(children, parentComponent, parentSuspense);
            if (doRemove) remove(vnode);
        }
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        }, parentSuspense);
    };
    const remove = (vnode)=>{
        const { type , el , anchor , transition  } = vnode;
        if (type === Fragment) {
            if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 /* DEV_ROOT_FRAGMENT */  && transition && !transition.persisted) vnode.children.forEach((child)=>{
                if (child.type === Comment) hostRemove(child.el);
                else remove(child);
            });
            else removeFragment(el, anchor);
            return;
        }
        if (type === Static) {
            removeStaticNode(vnode);
            return;
        }
        const performRemove = ()=>{
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) transition.afterLeave();
        };
        if (vnode.shapeFlag & 1 /* ELEMENT */  && transition && !transition.persisted) {
            const { leave , delayLeave  } = transition;
            const performLeave = ()=>leave(el, performRemove);
            if (delayLeave) delayLeave(vnode.el, performRemove, performLeave);
            else performLeave();
        } else performRemove();
    };
    const removeFragment = (cur, end)=>{
        // For fragments, directly remove all contained DOM nodes.
        // (fragment child nodes cannot have transition)
        let next;
        while(cur !== end){
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove)=>{
        if (instance.type.__hmrId) unregisterHMR(instance);
        const { bum , scope , update , subTree , um  } = instance;
        // beforeUnmount hook
        if (bum) (0, _shared.invokeArrayFns)(bum);
        // stop effects in component scope
        scope.stop();
        // update may be null if a component is unmounted before its async
        // setup has resolved.
        if (update) {
            // so that scheduler will no longer invoke it
            update.active = false;
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        // unmounted hook
        if (um) queuePostRenderEffect(um, parentSuspense);
        queuePostRenderEffect(()=>{
            instance.isUnmounted = true;
        }, parentSuspense);
        // A component with async dep inside a pending suspense is unmounted before
        // its async dep resolves. This should remove the dep from the suspense, and
        // cause the suspense to resolve immediately if that was the last dep.
        if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) parentSuspense.resolve();
        }
        devtoolsComponentRemoved(instance);
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0)=>{
        for(let i = start; i < children.length; i++)unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    };
    const getNextHostNode = (vnode)=>{
        if (vnode.shapeFlag & 6 /* COMPONENT */ ) return getNextHostNode(vnode.component.subTree);
        if (vnode.shapeFlag & 128 /* SUSPENSE */ ) return vnode.suspense.next();
        return hostNextSibling(vnode.anchor || vnode.el);
    };
    const render = (vnode, container, isSVG)=>{
        if (vnode == null) {
            if (container._vnode) unmount(container._vnode, null, null, true);
        } else patch(container._vnode || null, vnode, container, null, null, null, isSVG);
        flushPostFlushCbs();
        container._vnode = vnode;
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) [hydrate, hydrateNode] = createHydrationFns(internals);
    return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
    };
}
function toggleRecurse({ effect , update  }, allowed) {
    effect.allowRecurse = update.allowRecurse = allowed;
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always be moved. Therefore, in order to ensure correct move
 * position, el should be inherited from previous nodes.
 */ function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if ((0, _shared.isArray)(ch1) && (0, _shared.isArray)(ch2)) for(let i = 0; i < ch1.length; i++){
        // this is only called in the optimized path so array children are
        // guaranteed to be vnodes
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 /* ELEMENT */  && !c2.dynamicChildren) {
            if (c2.patchFlag <= 0 || c2.patchFlag === 32 /* HYDRATE_EVENTS */ ) {
                c2 = ch2[i] = cloneIfMounted(ch2[i]);
                c2.el = c1.el;
            }
            if (!shallow) traverseStaticChildren(c1, c2);
        }
        // also inherit for comment nodes, but not placeholders (e.g. v-if which
        // would have received .el during block patch)
        if (c2.type === Comment && !c2.el) c2.el = c1.el;
    }
}
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr) {
    const p = arr.slice();
    const result = [
        0
    ];
    let i, j, u, v1, c;
    const len = arr.length;
    for(i = 0; i < len; i++){
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v1 = result.length - 1;
            while(u < v1){
                c = u + v1 >> 1;
                if (arr[result[c]] < arrI) u = c + 1;
                else v1 = c;
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) p[i] = result[u - 1];
                result[u] = i;
            }
        }
    }
    u = result.length;
    v1 = result[u - 1];
    while(u-- > 0){
        result[u] = v1;
        v1 = p[v1];
    }
    return result;
}
const isTeleport = (type)=>type.__isTeleport;
const isTeleportDisabled = (props)=>props && (props.disabled || props.disabled === "");
const isTargetSVG = (target)=>typeof SVGElement !== "undefined" && target instanceof SVGElement;
const resolveTarget = (props, select)=>{
    const targetSelector = props && props.to;
    if ((0, _shared.isString)(targetSelector)) {
        if (!select) {
            warn(`Current renderer does not support string target for Teleports. ` + `(missing querySelector renderer option)`);
            return null;
        } else {
            const target = select(targetSelector);
            if (!target) warn(`Failed to locate Teleport target with selector "${targetSelector}". ` + `Note the target element must exist before the component is mounted - ` + `i.e. the target cannot be rendered by the component itself, and ` + `ideally should be outside of the entire Vue component tree.`);
            return target;
        }
    } else {
        if (!targetSelector && !isTeleportDisabled(props)) warn(`Invalid Teleport target: ${targetSelector}`);
        return targetSelector;
    }
};
const TeleportImpl = {
    __isTeleport: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
        const { mc: mountChildren , pc: patchChildren , pbc: patchBlockChildren , o: { insert , querySelector , createText , createComment  }  } = internals;
        const disabled = isTeleportDisabled(n2.props);
        let { shapeFlag , children , dynamicChildren  } = n2;
        // #3302
        // HMR updated, force full diff
        if (isHmrUpdating) {
            optimized = false;
            dynamicChildren = null;
        }
        if (n1 == null) {
            // insert anchors in the main view
            const placeholder = n2.el = createComment("teleport start");
            const mainAnchor = n2.anchor = createComment("teleport end");
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = n2.target = resolveTarget(n2.props, querySelector);
            const targetAnchor = n2.targetAnchor = createText("");
            if (target) {
                insert(targetAnchor, target);
                // #2652 we could be teleporting from a non-SVG tree into an SVG tree
                isSVG = isSVG || isTargetSVG(target);
            } else if (!disabled) warn("Invalid Teleport target on mount:", target, `(${typeof target})`);
            const mount = (container, anchor)=>{
                // Teleport *always* has Array children. This is enforced in both the
                // compiler and vnode children normalization.
                if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            };
            if (disabled) mount(container, mainAnchor);
            else if (target) mount(target, targetAnchor);
        } else {
            // update content
            n2.el = n1.el;
            const mainAnchor1 = n2.anchor = n1.anchor;
            const target1 = n2.target = n1.target;
            const targetAnchor1 = n2.targetAnchor = n1.targetAnchor;
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target1;
            const currentAnchor = wasDisabled ? mainAnchor1 : targetAnchor1;
            isSVG = isSVG || isTargetSVG(target1);
            if (dynamicChildren) {
                // fast path when the teleport happens to be a block root
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds);
                // even in block tree mode we need to make sure all root-level nodes
                // in the teleport inherit previous DOM references so that they can
                // be moved in future patches.
                traverseStaticChildren(n1, n2, true);
            } else if (!optimized) patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
            if (disabled) {
                if (!wasDisabled) // enabled -> disabled
                // move into main container
                moveTeleport(n2, container, mainAnchor1, internals, 1 /* TOGGLE */ );
            } else {
                // target changed
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
                    if (nextTarget) moveTeleport(n2, nextTarget, null, internals, 0 /* TARGET_CHANGE */ );
                    else warn("Invalid Teleport target on update:", target1, `(${typeof target1})`);
                } else if (wasDisabled) // disabled -> enabled
                // move into teleport target
                moveTeleport(n2, target1, targetAnchor1, internals, 1 /* TOGGLE */ );
            }
        }
    },
    remove (vnode, parentComponent, parentSuspense, optimized, { um: unmount , o: { remove: hostRemove  }  }, doRemove) {
        const { shapeFlag , children , anchor , targetAnchor , target , props  } = vnode;
        if (target) hostRemove(targetAnchor);
        // an unmounted teleport should always remove its children if not disabled
        if (doRemove || !isTeleportDisabled(props)) {
            hostRemove(anchor);
            if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) for(let i = 0; i < children.length; i++){
                const child = children[i];
                unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
            }
        }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert  } , m: move  }, moveType = 2 /* REORDER */ ) {
    // move target anchor if this is a target change.
    if (moveType === 0 /* TARGET_CHANGE */ ) insert(vnode.targetAnchor, container, parentAnchor);
    const { el , anchor , shapeFlag , children , props  } = vnode;
    const isReorder = moveType === 2 /* REORDER */ ;
    // move main view anchor if this is a re-order.
    if (isReorder) insert(el, container, parentAnchor);
    // if this is a re-order and teleport is enabled (content is in target)
    // do not move children. So the opposite is: only move children if this
    // is not a reorder, or the teleport is disabled
    if (!isReorder || isTeleportDisabled(props)) {
        // Teleport has either Array children or no children.
        if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) for(let i = 0; i < children.length; i++)move(children[i], container, parentAnchor, 2 /* REORDER */ );
    }
    // move main view anchor if this is a re-order.
    if (isReorder) insert(anchor, container, parentAnchor);
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling , parentNode , querySelector  }  }, hydrateChildren) {
    const target = vnode.target = resolveTarget(vnode.props, querySelector);
    if (target) {
        // if multiple teleports rendered to the same target element, we need to
        // pick up from where the last teleport finished instead of the first node
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16 /* ARRAY_CHILDREN */ ) {
            if (isTeleportDisabled(vnode.props)) {
                vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
                vnode.targetAnchor = targetNode;
            } else {
                vnode.anchor = nextSibling(node);
                // lookahead until we find the target anchor
                // we cannot rely on return value of hydrateChildren() because there
                // could be nested teleports
                let targetAnchor = targetNode;
                while(targetAnchor){
                    targetAnchor = nextSibling(targetAnchor);
                    if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
                        vnode.targetAnchor = targetAnchor;
                        target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
                        break;
                    }
                }
                hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
        }
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
// Force-casted public typing for h and TSX props inference
const Teleport = TeleportImpl;
const Fragment = Symbol("Fragment");
const Text = Symbol("Text");
const Comment = Symbol("Comment");
const Static = Symbol("Static");
// Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).
const blockStack = [];
let currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */ function openBlock(disableTracking = false) {
    blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
}
// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
let isBlockTreeEnabled = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */ function setBlockTracking(value) {
    isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
    // save current block children on the block vnode
    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || (0, _shared.EMPTY_ARR) : null;
    // close block
    closeBlock();
    // a block is always going to be patched, so track it as a child of its
    // parent block
    if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(vnode);
    return vnode;
}
/**
 * @private
 */ function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */ function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
    if (n2.shapeFlag & 6 /* COMPONENT */  && hmrDirtyComponents.has(n2.type)) // HMR only: if the component has been hot-updated, force a reload.
    return false;
    return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */ function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args)=>{
    return _createVNode(...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args);
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key  })=>key != null ? key : null;
const normalizeRef = ({ ref , ref_key , ref_for  })=>{
    return ref != null ? (0, _shared.isString)(ref) || (0, _reactivity.isRef)(ref) || (0, _shared.isFunction)(ref) ? {
        i: currentRenderingInstance,
        r: ref,
        k: ref_key,
        f: !!ref_for
    } : ref : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1 /* ELEMENT */ , isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        slotScopeIds: null,
        children,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null
    };
    if (needFullChildrenNormalization) {
        normalizeChildren(vnode, children);
        // normalize suspense children
        if (shapeFlag & 128 /* SUSPENSE */ ) type.normalize(vnode);
    } else if (children) // compiled element vnode - if children is passed, only possible types are
    // string or Array.
    vnode.shapeFlag |= (0, _shared.isString)(children) ? 8 /* TEXT_CHILDREN */  : 16 /* ARRAY_CHILDREN */ ;
    // validate key
    if (vnode.key !== vnode.key) warn(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    // track vnode for block tree
    if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
    !isBlockNode && // has current parent block
    currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6 /* COMPONENT */ ) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !== 32 /* HYDRATE_EVENTS */ ) currentBlock.push(vnode);
    return vnode;
}
const createVNode = createVNodeWithArgsTransform;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        if (!type) warn(`Invalid vnode type when creating vnode: ${type}.`);
        type = Comment;
    }
    if (isVNode(type)) {
        // createVNode receiving an existing vnode. This happens in cases like
        // <component :is="vnode"/>
        // #2078 make sure to merge refs during the clone instead of overwriting it
        const cloned = cloneVNode(type, props, true);
        if (children) normalizeChildren(cloned, children);
        if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
            if (cloned.shapeFlag & 6 /* COMPONENT */ ) currentBlock[currentBlock.indexOf(type)] = cloned;
            else currentBlock.push(cloned);
        }
        cloned.patchFlag |= -2 /* BAIL */ ;
        return cloned;
    }
    // class component normalization.
    if (isClassComponent(type)) type = type.__vccOpts;
    // class & style normalization.
    if (props) {
        // for reactive or proxy objects, we need to clone it to enable mutation.
        props = guardReactiveProps(props);
        let { class: klass , style  } = props;
        if (klass && !(0, _shared.isString)(klass)) props.class = (0, _shared.normalizeClass)(klass);
        if ((0, _shared.isObject)(style)) {
            // reactive state objects need to be cloned since they are likely to be
            // mutated
            if ((0, _reactivity.isProxy)(style) && !(0, _shared.isArray)(style)) style = (0, _shared.extend)({}, style);
            props.style = (0, _shared.normalizeStyle)(style);
        }
    }
    // encode the vnode type information into a bitmap
    const shapeFlag = (0, _shared.isString)(type) ? 1 /* ELEMENT */  : isSuspense(type) ? 128 /* SUSPENSE */  : isTeleport(type) ? 64 /* TELEPORT */  : (0, _shared.isObject)(type) ? 4 /* STATEFUL_COMPONENT */  : (0, _shared.isFunction)(type) ? 2 /* FUNCTIONAL_COMPONENT */  : 0;
    if (shapeFlag & 4 /* STATEFUL_COMPONENT */  && (0, _reactivity.isProxy)(type)) {
        type = (0, _reactivity.toRaw)(type);
        warn(`Vue received a Component which was made a reactive object. This can ` + `lead to unnecessary performance overhead, and should be avoided by ` + `marking the component with \`markRaw\` or using \`shallowRef\` ` + `instead of \`ref\`.`, `\nComponent that was made reactive: `, type);
    }
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
    if (!props) return null;
    return (0, _reactivity.isProxy)(props) || InternalObjectKey in props ? (0, _shared.extend)({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
    // This is intentionally NOT using spread or extend to avoid the runtime
    // key enumeration cost.
    const { props , ref , patchFlag , children  } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref ? // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        mergeRef && ref ? (0, _shared.isArray)(ref) ? ref.concat(normalizeRef(extraProps)) : [
            ref,
            normalizeRef(extraProps)
        ] : normalizeRef(extraProps) : ref,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children: patchFlag === -1 /* HOISTED */  && (0, _shared.isArray)(children) ? children.map(deepCloneVNode) : children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: preserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 // hoisted node
         ? 16 /* FULL_PROPS */  : patchFlag | 16 /* FULL_PROPS */  : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor
    };
    return cloned;
}
/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */ function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if ((0, _shared.isArray)(vnode.children)) cloned.children = vnode.children.map(deepCloneVNode);
    return cloned;
}
/**
 * @private
 */ function createTextVNode(text = " ", flag = 0) {
    return createVNode(Text, null, text, flag);
}
/**
 * @private
 */ function createStaticVNode(content, numberOfNodes) {
    // A static vnode can contain multiple stringified elements, and the number
    // of elements is necessary for hydration.
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
}
/**
 * @private
 */ function createCommentVNode(text = "", // when used as the v-else branch, the comment node must be created as a
// block to ensure correct updates.
asBlock = false) {
    return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
    if (child == null || typeof child === "boolean") // empty placeholder
    return createVNode(Comment);
    else if ((0, _shared.isArray)(child)) // fragment
    return createVNode(Fragment, null, // #3666, avoid reference pollution when reusing vnode
    child.slice());
    else if (typeof child === "object") // already vnode, this should be the most common since compiled templates
    // always produce all-vnode children arrays
    return cloneIfMounted(child);
    else // strings and numbers
    return createVNode(Text, null, String(child));
}
// optimized normalization for template-compiled render fns
function cloneIfMounted(child) {
    return child.el === null || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag  } = vnode;
    if (children == null) children = null;
    else if ((0, _shared.isArray)(children)) type = 16 /* ARRAY_CHILDREN */ ;
    else if (typeof children === "object") {
        if (shapeFlag & 65 /* TELEPORT */ ) {
            // Normalize slot to plain children for plain element and Teleport
            const slot = children.default;
            if (slot) {
                // _c marker is added by withCtx() indicating this is a compiled slot
                slot._c && (slot._d = false);
                normalizeChildren(vnode, slot());
                slot._c && (slot._d = true);
            }
            return;
        } else {
            type = 32 /* SLOTS_CHILDREN */ ;
            const slotFlag = children._;
            if (!slotFlag && !(InternalObjectKey in children)) children._ctx = currentRenderingInstance;
            else if (slotFlag === 3 /* FORWARDED */  && currentRenderingInstance) {
                // a child component receives forwarded slots from the parent.
                // its slot type is determined by its parent's slot type.
                if (currentRenderingInstance.slots._ === 1 /* STABLE */ ) children._ = 1 /* STABLE */ ;
                else {
                    children._ = 2 /* DYNAMIC */ ;
                    vnode.patchFlag |= 1024 /* DYNAMIC_SLOTS */ ;
                }
            }
        }
    } else if ((0, _shared.isFunction)(children)) {
        children = {
            default: children,
            _ctx: currentRenderingInstance
        };
        type = 32 /* SLOTS_CHILDREN */ ;
    } else {
        children = String(children);
        // force teleport children to array so it can be moved around
        if (shapeFlag & 64 /* TELEPORT */ ) {
            type = 16 /* ARRAY_CHILDREN */ ;
            children = [
                createTextVNode(children)
            ];
        } else type = 8 /* TEXT_CHILDREN */ ;
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function mergeProps(...args) {
    const ret = {};
    for(let i = 0; i < args.length; i++){
        const toMerge = args[i];
        for(const key in toMerge){
            if (key === "class") {
                if (ret.class !== toMerge.class) ret.class = (0, _shared.normalizeClass)([
                    ret.class,
                    toMerge.class
                ]);
            } else if (key === "style") ret.style = (0, _shared.normalizeStyle)([
                ret.style,
                toMerge.style
            ]);
            else if ((0, _shared.isOn)(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (incoming && existing !== incoming && !((0, _shared.isArray)(existing) && existing.includes(incoming))) ret[key] = existing ? [].concat(existing, incoming) : incoming;
            } else if (key !== "") ret[key] = toMerge[key];
        }
    }
    return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7 /* VNODE_HOOK */ , [
        vnode,
        prevVNode
    ]);
}
const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    // inherit parent app context - or - if root, adopt from root vnode
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
        uid: uid$1++,
        vnode,
        type,
        parent,
        appContext,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new (0, _reactivity.EffectScope)(true),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resolved assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        emitted: null,
        // props default value
        propsDefaults: (0, _shared.EMPTY_OBJ),
        // inheritAttrs
        inheritAttrs: type.inheritAttrs,
        // state
        ctx: (0, _shared.EMPTY_OBJ),
        data: (0, _shared.EMPTY_OBJ),
        props: (0, _shared.EMPTY_OBJ),
        attrs: (0, _shared.EMPTY_OBJ),
        slots: (0, _shared.EMPTY_OBJ),
        refs: (0, _shared.EMPTY_OBJ),
        setupState: (0, _shared.EMPTY_OBJ),
        setupContext: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    instance.ctx = createDevRenderContext(instance);
    instance.root = parent ? parent.root : instance;
    instance.emit = emit$1.bind(null, instance);
    // apply custom element special handling
    if (vnode.ce) vnode.ce(instance);
    return instance;
}
let currentInstance = null;
const getCurrentInstance = ()=>currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance)=>{
    currentInstance = instance;
    instance.scope.on();
};
const unsetCurrentInstance = ()=>{
    currentInstance && currentInstance.scope.off();
    currentInstance = null;
};
const isBuiltInTag = /*#__PURE__*/ (0, _shared.makeMap)("slot,component");
function validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || (0, _shared.NO);
    if (isBuiltInTag(name) || appIsNativeTag(name)) warn("Do not use built-in or reserved HTML elements as component id: " + name);
}
function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */ ;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props , children  } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : undefined;
    isInSSRComponentSetup = false;
    return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
    var _a;
    const Component = instance.type;
    if (Component.name) validateComponentName(Component.name, instance.appContext.config);
    if (Component.components) {
        const names = Object.keys(Component.components);
        for(let i = 0; i < names.length; i++)validateComponentName(names[i], instance.appContext.config);
    }
    if (Component.directives) {
        const names1 = Object.keys(Component.directives);
        for(let i1 = 0; i1 < names1.length; i1++)validateDirectiveName(names1[i1]);
    }
    if (Component.compilerOptions && isRuntimeOnly()) warn(`"compilerOptions" is only supported when using a build of Vue that ` + `includes the runtime compiler. Since you are using a runtime-only ` + `build, the options should be passed via your build tool config instead.`);
    // 0. create render proxy property access cache
    instance.accessCache = Object.create(null);
    // 1. create public instance / render proxy
    // also mark it raw so it's never observed
    instance.proxy = (0, _reactivity.markRaw)(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
    exposePropsOnRenderContext(instance);
    // 2. call setup()
    const { setup  } = Component;
    if (setup) {
        const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
        setCurrentInstance(instance);
        (0, _reactivity.pauseTracking)();
        const setupResult = callWithErrorHandling(setup, instance, 0 /* SETUP_FUNCTION */ , [
            (0, _reactivity.shallowReadonly)(instance.props),
            setupContext
        ]);
        (0, _reactivity.resetTracking)();
        unsetCurrentInstance();
        if ((0, _shared.isPromise)(setupResult)) {
            setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
            if (isSSR) // return the promise so server-renderer can wait on it
            return setupResult.then((resolvedResult)=>{
                handleSetupResult(instance, resolvedResult, isSSR);
            }).catch((e)=>{
                handleError(e, instance, 0 /* SETUP_FUNCTION */ );
            });
            else {
                // async setup returned Promise.
                // bail here and wait for re-entry.
                instance.asyncDep = setupResult;
                if (!instance.suspense) {
                    const name = (_a = Component.name) !== null && _a !== void 0 ? _a : "Anonymous";
                    warn(`Component <${name}>: setup function returned a promise, but no ` + `<Suspense> boundary was found in the parent component tree. ` + `A component with async setup() must be nested in a <Suspense> ` + `in order to be rendered.`);
                }
            }
        } else handleSetupResult(instance, setupResult, isSSR);
    } else finishComponentSetup(instance, isSSR);
}
function handleSetupResult(instance, setupResult, isSSR) {
    if ((0, _shared.isFunction)(setupResult)) {
        // setup returned an inline render function
        if (instance.type.__ssrInlineRender) // when the function's name is `ssrRender` (compiled by SFC inline mode),
        // set it as ssrRender instead.
        instance.ssrRender = setupResult;
        else instance.render = setupResult;
    } else if ((0, _shared.isObject)(setupResult)) {
        if (isVNode(setupResult)) warn(`setup() should not return VNodes directly - ` + `return a render function instead.`);
        instance.devtoolsRawSetupState = setupResult;
        instance.setupState = (0, _reactivity.proxyRefs)(setupResult);
        exposeSetupStateOnRenderContext(instance);
    } else if (setupResult !== undefined) warn(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
    finishComponentSetup(instance, isSSR);
}
let compile;
let installWithProxy;
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */ function registerRuntimeCompiler(_compile) {
    compile = _compile;
    installWithProxy = (i)=>{
        if (i.render._rc) i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    };
}
// dev only
const isRuntimeOnly = ()=>!compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    // template / render function normalization
    // could be already set when returned from setup()
    if (!instance.render) {
        // only do on-the-fly compile if not in SSR - SSR on-the-fly compilation
        // is done by server-renderer
        if (!isSSR && compile && !Component.render) {
            const template = Component.template;
            if (template) {
                startMeasure(instance, `compile`);
                const { isCustomElement , compilerOptions  } = instance.appContext.config;
                const { delimiters , compilerOptions: componentCompilerOptions  } = Component;
                const finalCompilerOptions = (0, _shared.extend)((0, _shared.extend)({
                    isCustomElement,
                    delimiters
                }, compilerOptions), componentCompilerOptions);
                Component.render = compile(template, finalCompilerOptions);
                endMeasure(instance, `compile`);
            }
        }
        instance.render = Component.render || (0, _shared.NOOP);
        // for runtime-compiled render functions using `with` blocks, the render
        // proxy used needs a different `has` handler which is more performant and
        // also only allows a whitelist of globals to fallthrough.
        if (installWithProxy) installWithProxy(instance);
    }
    // support for 2.x options
    if (__VUE_OPTIONS_API__ && true) {
        setCurrentInstance(instance);
        (0, _reactivity.pauseTracking)();
        applyOptions(instance);
        (0, _reactivity.resetTracking)();
        unsetCurrentInstance();
    }
    // warn missing template/render
    // the runtime compilation of template in SSR is done by server-render
    if (!Component.render && instance.render === (0, _shared.NOOP) && !isSSR) {
        /* istanbul ignore if */ if (!compile && Component.template) warn(`Component provided template option but ` + `runtime compilation is not supported in this build of Vue.` + ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
        else warn(`Component is missing template or render function.`);
    }
}
function createAttrsProxy(instance) {
    return new Proxy(instance.attrs, {
        get (target, key) {
            markAttrsAccessed();
            (0, _reactivity.track)(instance, "get" /* GET */ , "$attrs");
            return target[key];
        },
        set () {
            warn(`setupContext.attrs is readonly.`);
            return false;
        },
        deleteProperty () {
            warn(`setupContext.attrs is readonly.`);
            return false;
        }
    });
}
function createSetupContext(instance) {
    const expose = (exposed)=>{
        if (instance.exposed) warn(`expose() should be called only once per setup().`);
        instance.exposed = exposed || {};
    };
    let attrs;
    // We use getters in dev in case libs like test-utils overwrite instance
    // properties (overwrites should not be done in prod)
    return Object.freeze({
        get attrs () {
            return attrs || (attrs = createAttrsProxy(instance));
        },
        get slots () {
            return (0, _reactivity.shallowReadonly)(instance.slots);
        },
        get emit () {
            return (event, ...args)=>instance.emit(event, ...args);
        },
        expose
    });
}
function getExposeProxy(instance) {
    if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy((0, _reactivity.proxyRefs)((0, _reactivity.markRaw)(instance.exposed)), {
        get (target, key) {
            if (key in target) return target[key];
            else if (key in publicPropertiesMap) return publicPropertiesMap[key](instance);
        }
    }));
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str)=>str.replace(classifyRE, (c)=>c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
    return (0, _shared.isFunction)(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
/* istanbul ignore next */ function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.\w+$/);
        if (match) name = match[1];
    }
    if (!name && instance && instance.parent) {
        // try to infer the name based on reverse resolution
        const inferFromRegistry = (registry)=>{
            for(const key in registry){
                if (registry[key] === Component) return key;
            }
        };
        name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
    return (0, _shared.isFunction)(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions)=>{
    // @ts-ignore
    return (0, _reactivity.computed)(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
// dev only
const warnRuntimeUsage = (method)=>warn(`${method}() is a compiler-hint helper that is only usable inside ` + `<script setup> of a single file component. Its arguments should be ` + `compiled away and passing it at runtime has no effect.`);
// implementation
function defineProps() {
    warnRuntimeUsage(`defineProps`);
    return null;
}
// implementation
function defineEmits() {
    warnRuntimeUsage(`defineEmits`);
    return null;
}
/**
 * Vue `<script setup>` compiler macro for declaring a component's exposed
 * instance properties when it is accessed by a parent component via template
 * refs.
 *
 * `<script setup>` components are closed by default - i.e. variables inside
 * the `<script setup>` scope is not exposed to parent unless explicitly exposed
 * via `defineExpose`.
 *
 * This is only usable inside `<script setup>`, is compiled away in the
 * output and should **not** be actually called at runtime.
 */ function defineExpose(exposed) {
    warnRuntimeUsage(`defineExpose`);
}
/**
 * Vue `<script setup>` compiler macro for providing props default values when
 * using type-based `defineProps` declaration.
 *
 * Example usage:
 * ```ts
 * withDefaults(defineProps<{
 *   size?: number
 *   labels?: string[]
 * }>(), {
 *   size: 3,
 *   labels: () => ['default label']
 * })
 * ```
 *
 * This is only usable inside `<script setup>`, is compiled away in the output
 * and should **not** be actually called at runtime.
 */ function withDefaults(props, defaults) {
    warnRuntimeUsage(`withDefaults`);
    return null;
}
function useSlots() {
    return getContext().slots;
}
function useAttrs() {
    return getContext().attrs;
}
function getContext() {
    const i = getCurrentInstance();
    if (!i) warn(`useContext() called without active instance.`);
    return i.setupContext || (i.setupContext = createSetupContext(i));
}
/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */ function mergeDefaults(raw, defaults) {
    const props = (0, _shared.isArray)(raw) ? raw.reduce((normalized, p)=>(normalized[p] = {}, normalized), {}) : raw;
    for(const key in defaults){
        const opt = props[key];
        if (opt) {
            if ((0, _shared.isArray)(opt) || (0, _shared.isFunction)(opt)) props[key] = {
                type: opt,
                default: defaults[key]
            };
            else opt.default = defaults[key];
        } else if (opt === null) props[key] = {
            default: defaults[key]
        };
        else warn(`props default key "${key}" has no corresponding declaration.`);
    }
    return props;
}
/**
 * Used to create a proxy for the rest element when destructuring props with
 * defineProps().
 * @internal
 */ function createPropsRestProxy(props, excludedKeys) {
    const ret = {};
    for(const key in props)if (!excludedKeys.includes(key)) Object.defineProperty(ret, key, {
        enumerable: true,
        get: ()=>props[key]
    });
    return ret;
}
/**
 * `<script setup>` helper for persisting the current instance context over
 * async/await flows.
 *
 * `@vue/compiler-sfc` converts the following:
 *
 * ```ts
 * const x = await foo()
 * ```
 *
 * into:
 *
 * ```ts
 * let __temp, __restore
 * const x = (([__temp, __restore] = withAsyncContext(() => foo())),__temp=await __temp,__restore(),__temp)
 * ```
 * @internal
 */ function withAsyncContext(getAwaitable) {
    const ctx = getCurrentInstance();
    if (!ctx) warn(`withAsyncContext called without active current instance. ` + `This is likely a bug.`);
    let awaitable = getAwaitable();
    unsetCurrentInstance();
    if ((0, _shared.isPromise)(awaitable)) awaitable = awaitable.catch((e)=>{
        setCurrentInstance(ctx);
        throw e;
    });
    return [
        awaitable,
        ()=>setCurrentInstance(ctx)
    ];
}
// Actual implementation
function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if ((0, _shared.isObject)(propsOrChildren) && !(0, _shared.isArray)(propsOrChildren)) {
            // single vnode without props
            if (isVNode(propsOrChildren)) return createVNode(type, null, [
                propsOrChildren
            ]);
            // props without children
            return createVNode(type, propsOrChildren);
        } else // omit props
        return createVNode(type, null, propsOrChildren);
    } else {
        if (l > 3) children = Array.prototype.slice.call(arguments, 2);
        else if (l === 3 && isVNode(children)) children = [
            children
        ];
        return createVNode(type, propsOrChildren, children);
    }
}
const ssrContextKey = Symbol(`ssrContext`);
const useSSRContext = ()=>{
    {
        const ctx = inject(ssrContextKey);
        if (!ctx) warn(`Server rendering context not provided. Make sure to only call ` + `useSSRContext() conditionally in the server build.`);
        return ctx;
    }
};
function isShallow(value) {
    return !!(value && value["__v_isShallow" /* IS_SHALLOW */ ]);
}
function initCustomFormatter() {
    /* eslint-disable no-restricted-globals */ if (typeof window === "undefined") return;
    const vueStyle = {
        style: "color:#3ba776"
    };
    const numberStyle = {
        style: "color:#0b1bc9"
    };
    const stringStyle = {
        style: "color:#b62e24"
    };
    const keywordStyle = {
        style: "color:#9d288c"
    };
    // custom formatter for Chrome
    // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html
    const formatter = {
        header (obj) {
            // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
            if (!(0, _shared.isObject)(obj)) return null;
            if (obj.__isVue) return [
                "div",
                vueStyle,
                `VueInstance`
            ];
            else if ((0, _reactivity.isRef)(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    genRefFlag(obj)
                ],
                "<",
                formatValue(obj.value),
                `>`
            ];
            else if ((0, _reactivity.isReactive)(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    isShallow(obj) ? "ShallowReactive" : "Reactive"
                ],
                "<",
                formatValue(obj),
                `>${(0, _reactivity.isReadonly)(obj) ? ` (readonly)` : ``}`
            ];
            else if ((0, _reactivity.isReadonly)(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    isShallow(obj) ? "ShallowReadonly" : "Readonly"
                ],
                "<",
                formatValue(obj),
                ">"
            ];
            return null;
        },
        hasBody (obj) {
            return obj && obj.__isVue;
        },
        body (obj) {
            if (obj && obj.__isVue) return [
                "div",
                {},
                ...formatInstance(obj.$)
            ];
        }
    };
    function formatInstance(instance) {
        const blocks = [];
        if (instance.type.props && instance.props) blocks.push(createInstanceBlock("props", (0, _reactivity.toRaw)(instance.props)));
        if (instance.setupState !== (0, _shared.EMPTY_OBJ)) blocks.push(createInstanceBlock("setup", instance.setupState));
        if (instance.data !== (0, _shared.EMPTY_OBJ)) blocks.push(createInstanceBlock("data", (0, _reactivity.toRaw)(instance.data)));
        const computed = extractKeys(instance, "computed");
        if (computed) blocks.push(createInstanceBlock("computed", computed));
        const injected = extractKeys(instance, "inject");
        if (injected) blocks.push(createInstanceBlock("injected", injected));
        blocks.push([
            "div",
            {},
            [
                "span",
                {
                    style: keywordStyle.style + ";opacity:0.66"
                },
                "$ (internal): "
            ],
            [
                "object",
                {
                    object: instance
                }
            ]
        ]);
        return blocks;
    }
    function createInstanceBlock(type, target) {
        target = (0, _shared.extend)({}, target);
        if (!Object.keys(target).length) return [
            "span",
            {}
        ];
        return [
            "div",
            {
                style: "line-height:1.25em;margin-bottom:0.6em"
            },
            [
                "div",
                {
                    style: "color:#476582"
                },
                type
            ],
            [
                "div",
                {
                    style: "padding-left:1.25em"
                },
                ...Object.keys(target).map((key)=>{
                    return [
                        "div",
                        {},
                        [
                            "span",
                            keywordStyle,
                            key + ": "
                        ],
                        formatValue(target[key], false)
                    ];
                })
            ]
        ];
    }
    function formatValue(v1, asRaw = true) {
        if (typeof v1 === "number") return [
            "span",
            numberStyle,
            v1
        ];
        else if (typeof v1 === "string") return [
            "span",
            stringStyle,
            JSON.stringify(v1)
        ];
        else if (typeof v1 === "boolean") return [
            "span",
            keywordStyle,
            v1
        ];
        else if ((0, _shared.isObject)(v1)) return [
            "object",
            {
                object: asRaw ? (0, _reactivity.toRaw)(v1) : v1
            }
        ];
        else return [
            "span",
            stringStyle,
            String(v1)
        ];
    }
    function extractKeys(instance, type) {
        const Comp = instance.type;
        if ((0, _shared.isFunction)(Comp)) return;
        const extracted = {};
        for(const key in instance.ctx)if (isKeyOfType(Comp, key, type)) extracted[key] = instance.ctx[key];
        return extracted;
    }
    function isKeyOfType(Comp, key, type) {
        const opts = Comp[type];
        if ((0, _shared.isArray)(opts) && opts.includes(key) || (0, _shared.isObject)(opts) && key in opts) return true;
        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) return true;
        if (Comp.mixins && Comp.mixins.some((m)=>isKeyOfType(m, key, type))) return true;
    }
    function genRefFlag(v1) {
        if (isShallow(v1)) return `ShallowRef`;
        if (v1.effect) return `ComputedRef`;
        return `Ref`;
    }
    if (window.devtoolsFormatters) window.devtoolsFormatters.push(formatter);
    else window.devtoolsFormatters = [
        formatter
    ];
}
function withMemo(memo, render, cache, index) {
    const cached = cache[index];
    if (cached && isMemoSame(cached, memo)) return cached;
    const ret = render();
    // shallow clone
    ret.memo = memo.slice();
    return cache[index] = ret;
}
function isMemoSame(cached, memo) {
    const prev = cached.memo;
    if (prev.length != memo.length) return false;
    for(let i = 0; i < prev.length; i++){
        if ((0, _shared.hasChanged)(prev[i], memo[i])) return false;
    }
    // make sure to let parent block track it when returning cached
    if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(cached);
    return true;
}
// Core API ------------------------------------------------------------------
const version = "3.2.37";
const _ssrUtils = {
    createComponentInstance,
    setupComponent,
    renderComponentRoot,
    setCurrentRenderingInstance,
    isVNode,
    normalizeVNode
};
/**
 * SSR utils for \@vue/server-renderer. Only exposed in ssr-possible builds.
 * @internal
 */ const ssrUtils = _ssrUtils;
/**
 * @internal only exposed in compat builds
 */ const resolveFilter = null;
/**
 * @internal only exposed in compat builds.
 */ const compatUtils = null;

},{"@vue/reactivity":"d7UXQ","@vue/shared":"3SM3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7UXQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EffectScope", ()=>EffectScope);
parcelHelpers.export(exports, "ITERATE_KEY", ()=>ITERATE_KEY);
parcelHelpers.export(exports, "ReactiveEffect", ()=>ReactiveEffect);
parcelHelpers.export(exports, "computed", ()=>computed);
parcelHelpers.export(exports, "customRef", ()=>customRef);
parcelHelpers.export(exports, "deferredComputed", ()=>deferredComputed);
parcelHelpers.export(exports, "effect", ()=>effect);
parcelHelpers.export(exports, "effectScope", ()=>effectScope);
parcelHelpers.export(exports, "enableTracking", ()=>enableTracking);
parcelHelpers.export(exports, "getCurrentScope", ()=>getCurrentScope);
parcelHelpers.export(exports, "isProxy", ()=>isProxy);
parcelHelpers.export(exports, "isReactive", ()=>isReactive);
parcelHelpers.export(exports, "isReadonly", ()=>isReadonly);
parcelHelpers.export(exports, "isRef", ()=>isRef);
parcelHelpers.export(exports, "isShallow", ()=>isShallow);
parcelHelpers.export(exports, "markRaw", ()=>markRaw);
parcelHelpers.export(exports, "onScopeDispose", ()=>onScopeDispose);
parcelHelpers.export(exports, "pauseTracking", ()=>pauseTracking);
parcelHelpers.export(exports, "proxyRefs", ()=>proxyRefs);
parcelHelpers.export(exports, "reactive", ()=>reactive);
parcelHelpers.export(exports, "readonly", ()=>readonly);
parcelHelpers.export(exports, "ref", ()=>ref);
parcelHelpers.export(exports, "resetTracking", ()=>resetTracking);
parcelHelpers.export(exports, "shallowReactive", ()=>shallowReactive);
parcelHelpers.export(exports, "shallowReadonly", ()=>shallowReadonly);
parcelHelpers.export(exports, "shallowRef", ()=>shallowRef);
parcelHelpers.export(exports, "stop", ()=>stop);
parcelHelpers.export(exports, "toRaw", ()=>toRaw);
parcelHelpers.export(exports, "toRef", ()=>toRef);
parcelHelpers.export(exports, "toRefs", ()=>toRefs);
parcelHelpers.export(exports, "track", ()=>track);
parcelHelpers.export(exports, "trigger", ()=>trigger);
parcelHelpers.export(exports, "triggerRef", ()=>triggerRef);
parcelHelpers.export(exports, "unref", ()=>unref);
var _shared = require("@vue/shared");
function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
    constructor(detached = false){
        /**
         * @internal
         */ this.active = true;
        /**
         * @internal
         */ this.effects = [];
        /**
         * @internal
         */ this.cleanups = [];
        if (!detached && activeEffectScope) {
            this.parent = activeEffectScope;
            this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
        }
    }
    run(fn) {
        if (this.active) {
            const currentEffectScope = activeEffectScope;
            try {
                activeEffectScope = this;
                return fn();
            } finally{
                activeEffectScope = currentEffectScope;
            }
        } else warn(`cannot run an inactive effect scope.`);
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */ on() {
        activeEffectScope = this;
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */ off() {
        activeEffectScope = this.parent;
    }
    stop(fromParent) {
        if (this.active) {
            let i, l;
            for(i = 0, l = this.effects.length; i < l; i++)this.effects[i].stop();
            for(i = 0, l = this.cleanups.length; i < l; i++)this.cleanups[i]();
            if (this.scopes) for(i = 0, l = this.scopes.length; i < l; i++)this.scopes[i].stop(true);
            // nested scope, dereference from parent to avoid memory leaks
            if (this.parent && !fromParent) {
                // optimized O(1) removal
                const last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.active = false;
        }
    }
}
function effectScope(detached) {
    return new EffectScope(detached);
}
function recordEffectScope(effect, scope = activeEffectScope) {
    if (scope && scope.active) scope.effects.push(effect);
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) activeEffectScope.cleanups.push(fn);
    else warn(`onScopeDispose() is called when there is no active effect scope` + ` to be associated with.`);
}
const createDep = (effects)=>{
    const dep = new Set(effects);
    dep.w = 0;
    dep.n = 0;
    return dep;
};
const wasTracked = (dep)=>(dep.w & trackOpBit) > 0;
const newTracked = (dep)=>(dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps  })=>{
    if (deps.length) for(let i = 0; i < deps.length; i++)deps[i].w |= trackOpBit; // set was tracked
};
const finalizeDepMarkers = (effect)=>{
    const { deps  } = effect;
    if (deps.length) {
        let ptr = 0;
        for(let i = 0; i < deps.length; i++){
            const dep = deps[i];
            if (wasTracked(dep) && !newTracked(dep)) dep.delete(effect);
            else deps[ptr++] = dep;
            // clear bits
            dep.w &= ~trackOpBit;
            dep.n &= ~trackOpBit;
        }
        deps.length = ptr;
    }
};
const targetMap = new WeakMap();
// The number of effects currently being tracked recursively.
let effectTrackDepth = 0;
let trackOpBit = 1;
/**
 * The bitwise track markers support at most 30 levels of recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */ const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol("iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
class ReactiveEffect {
    constructor(fn, scheduler = null, scope){
        this.fn = fn;
        this.scheduler = scheduler;
        this.active = true;
        this.deps = [];
        this.parent = undefined;
        recordEffectScope(this, scope);
    }
    run() {
        if (!this.active) return this.fn();
        let parent = activeEffect;
        let lastShouldTrack = shouldTrack;
        while(parent){
            if (parent === this) return;
            parent = parent.parent;
        }
        try {
            this.parent = activeEffect;
            activeEffect = this;
            shouldTrack = true;
            trackOpBit = 1 << ++effectTrackDepth;
            if (effectTrackDepth <= maxMarkerBits) initDepMarkers(this);
            else cleanupEffect(this);
            return this.fn();
        } finally{
            if (effectTrackDepth <= maxMarkerBits) finalizeDepMarkers(this);
            trackOpBit = 1 << --effectTrackDepth;
            activeEffect = this.parent;
            shouldTrack = lastShouldTrack;
            this.parent = undefined;
            if (this.deferStop) this.stop();
        }
    }
    stop() {
        // stopped while running itself - defer the cleanup
        if (activeEffect === this) this.deferStop = true;
        else if (this.active) {
            cleanupEffect(this);
            if (this.onStop) this.onStop();
            this.active = false;
        }
    }
}
function cleanupEffect(effect) {
    const { deps  } = effect;
    if (deps.length) {
        for(let i = 0; i < deps.length; i++)deps[i].delete(effect);
        deps.length = 0;
    }
}
function effect(fn, options) {
    if (fn.effect) fn = fn.effect.fn;
    const _effect = new ReactiveEffect(fn);
    if (options) {
        (0, _shared.extend)(_effect, options);
        if (options.scope) recordEffectScope(_effect, options.scope);
    }
    if (!options || !options.lazy) _effect.run();
    const runner = _effect.run.bind(_effect);
    runner.effect = _effect;
    return runner;
}
function stop(runner) {
    runner.effect.stop();
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === undefined ? true : last;
}
function track(target, type, key) {
    if (shouldTrack && activeEffect) {
        let depsMap = targetMap.get(target);
        if (!depsMap) targetMap.set(target, depsMap = new Map());
        let dep = depsMap.get(key);
        if (!dep) depsMap.set(key, dep = createDep());
        const eventInfo = {
            effect: activeEffect,
            target,
            type,
            key
        };
        trackEffects(dep, eventInfo);
    }
}
function trackEffects(dep, debuggerEventExtraInfo) {
    let shouldTrack = false;
    if (effectTrackDepth <= maxMarkerBits) {
        if (!newTracked(dep)) {
            dep.n |= trackOpBit; // set newly tracked
            shouldTrack = !wasTracked(dep);
        }
    } else // Full cleanup mode.
    shouldTrack = !dep.has(activeEffect);
    if (shouldTrack) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (activeEffect.onTrack) activeEffect.onTrack(Object.assign({
            effect: activeEffect
        }, debuggerEventExtraInfo));
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) // never been tracked
    return;
    let deps = [];
    if (type === "clear" /* CLEAR */ ) // collection being cleared
    // trigger all effects for target
    deps = [
        ...depsMap.values()
    ];
    else if (key === "length" && (0, _shared.isArray)(target)) depsMap.forEach((dep, key)=>{
        if (key === "length" || key >= newValue) deps.push(dep);
    });
    else {
        // schedule runs for SET | ADD | DELETE
        if (key !== void 0) deps.push(depsMap.get(key));
        // also run for iteration key on ADD | DELETE | Map.SET
        switch(type){
            case "add" /* ADD */ :
                if (!(0, _shared.isArray)(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if ((0, _shared.isMap)(target)) deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                } else if ((0, _shared.isIntegerKey)(key)) // new index added to array -> length changes
                deps.push(depsMap.get("length"));
                break;
            case "delete" /* DELETE */ :
                if (!(0, _shared.isArray)(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if ((0, _shared.isMap)(target)) deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
                break;
            case "set" /* SET */ :
                if ((0, _shared.isMap)(target)) deps.push(depsMap.get(ITERATE_KEY));
                break;
        }
    }
    const eventInfo = {
        target,
        type,
        key,
        newValue,
        oldValue,
        oldTarget
    };
    if (deps.length === 1) {
        if (deps[0]) triggerEffects(deps[0], eventInfo);
    } else {
        const effects = [];
        for (const dep of deps)if (dep) effects.push(...dep);
        triggerEffects(createDep(effects), eventInfo);
    }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
    // spread into array for stabilization
    const effects = (0, _shared.isArray)(dep) ? dep : [
        ...dep
    ];
    for (const effect of effects)if (effect.computed) triggerEffect(effect, debuggerEventExtraInfo);
    for (const effect1 of effects)if (!effect1.computed) triggerEffect(effect1, debuggerEventExtraInfo);
}
function triggerEffect(effect, debuggerEventExtraInfo) {
    if (effect !== activeEffect || effect.allowRecurse) {
        if (effect.onTrigger) effect.onTrigger((0, _shared.extend)({
            effect
        }, debuggerEventExtraInfo));
        if (effect.scheduler) effect.scheduler();
        else effect.run();
    }
}
const isNonTrackableKeys = /*#__PURE__*/ (0, _shared.makeMap)(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(/*#__PURE__*/ Object.getOwnPropertyNames(Symbol)// ios10.x Object.getOwnPropertyNames(Symbol) can enumerate 'arguments' and 'caller'
// but accessing them on Symbol leads to TypeError because Symbol is a strict mode
// function
.filter((key)=>key !== "arguments" && key !== "caller").map((key)=>Symbol[key]).filter((0, _shared.isSymbol)));
const get = /*#__PURE__*/ createGetter();
const shallowGet = /*#__PURE__*/ createGetter(false, true);
const readonlyGet = /*#__PURE__*/ createGetter(true);
const shallowReadonlyGet = /*#__PURE__*/ createGetter(true, true);
const arrayInstrumentations = /*#__PURE__*/ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {};
    [
        "includes",
        "indexOf",
        "lastIndexOf"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            const arr = toRaw(this);
            for(let i = 0, l = this.length; i < l; i++)track(arr, "get" /* GET */ , i + "");
            // we run the method using the original args first (which may be reactive)
            const res = arr[key](...args);
            if (res === -1 || res === false) // if that didn't work, run it again using raw values.
            return arr[key](...args.map(toRaw));
            else return res;
        };
    });
    [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            pauseTracking();
            const res = toRaw(this)[key].apply(this, args);
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function createGetter(isReadonly = false, shallow = false) {
    return function get(target, key, receiver) {
        if (key === "__v_isReactive" /* IS_REACTIVE */ ) return !isReadonly;
        else if (key === "__v_isReadonly" /* IS_READONLY */ ) return isReadonly;
        else if (key === "__v_isShallow" /* IS_SHALLOW */ ) return shallow;
        else if (key === "__v_raw" /* RAW */  && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) return target;
        const targetIsArray = (0, _shared.isArray)(target);
        if (!isReadonly && targetIsArray && (0, _shared.hasOwn)(arrayInstrumentations, key)) return Reflect.get(arrayInstrumentations, key, receiver);
        const res = Reflect.get(target, key, receiver);
        if ((0, _shared.isSymbol)(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
        if (!isReadonly) track(target, "get" /* GET */ , key);
        if (shallow) return res;
        if (isRef(res)) // ref unwrapping - skip unwrap for Array + integer key.
        return targetIsArray && (0, _shared.isIntegerKey)(key) ? res : res.value;
        if ((0, _shared.isObject)(res)) // Convert returned value into a proxy as well. we do the isObject check
        // here to avoid invalid value warning. Also need to lazy access readonly
        // and reactive here to avoid circular dependency.
        return isReadonly ? readonly(res) : reactive(res);
        return res;
    };
}
const set = /*#__PURE__*/ createSetter();
const shallowSet = /*#__PURE__*/ createSetter(true);
function createSetter(shallow = false) {
    return function set(target, key, value, receiver) {
        let oldValue = target[key];
        if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) return false;
        if (!shallow && !isReadonly(value)) {
            if (!isShallow(value)) {
                value = toRaw(value);
                oldValue = toRaw(oldValue);
            }
            if (!(0, _shared.isArray)(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = (0, _shared.isArray)(target) && (0, _shared.isIntegerKey)(key) ? Number(key) < target.length : (0, _shared.hasOwn)(target, key);
        const result = Reflect.set(target, key, value, receiver);
        // don't trigger if target is something up in the prototype chain of original
        if (target === toRaw(receiver)) {
            if (!hadKey) trigger(target, "add" /* ADD */ , key, value);
            else if ((0, _shared.hasChanged)(value, oldValue)) trigger(target, "set" /* SET */ , key, value, oldValue);
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = (0, _shared.hasOwn)(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) trigger(target, "delete" /* DELETE */ , key, undefined, oldValue);
    return result;
}
function has(target, key) {
    const result = Reflect.has(target, key);
    if (!(0, _shared.isSymbol)(key) || !builtInSymbols.has(key)) track(target, "has" /* HAS */ , key);
    return result;
}
function ownKeys(target) {
    track(target, "iterate" /* ITERATE */ , (0, _shared.isArray)(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
const mutableHandlers = {
    get,
    set,
    deleteProperty,
    has,
    ownKeys
};
const readonlyHandlers = {
    get: readonlyGet,
    set (target, key) {
        warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    },
    deleteProperty (target, key) {
        warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
};
const shallowReactiveHandlers = /*#__PURE__*/ (0, _shared.extend)({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
});
// Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.
const shallowReadonlyHandlers = /*#__PURE__*/ (0, _shared.extend)({}, readonlyHandlers, {
    get: shallowReadonlyGet
});
const toShallow = (value)=>value;
const getProto = (v)=>Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
    // #1772: readonly(reactive(Map)) should return readonly + reactive version
    // of the value
    target = target["__v_raw" /* RAW */ ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly) {
        if (key !== rawKey) track(rawTarget, "get" /* GET */ , key);
        track(rawTarget, "get" /* GET */ , rawKey);
    }
    const { has  } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has.call(rawTarget, key)) return wrap(target.get(key));
    else if (has.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
    else if (target !== rawTarget) // #3602 readonly(reactive(Map))
    // ensure that the nested reactive `Map` can do tracking for itself
    target.get(key);
}
function has$1(key, isReadonly = false) {
    const target = this["__v_raw" /* RAW */ ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly) {
        if (key !== rawKey) track(rawTarget, "has" /* HAS */ , key);
        track(rawTarget, "has" /* HAS */ , rawKey);
    }
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw" /* RAW */ ];
    !isReadonly && track(toRaw(target), "iterate" /* ITERATE */ , ITERATE_KEY);
    return Reflect.get(target, "size", target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add" /* ADD */ , value, value);
    }
    return this;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has , get  } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    } else checkIdentityKeys(target, has, key);
    const oldValue = get.call(target, key);
    target.set(key, value);
    if (!hadKey) trigger(target, "add" /* ADD */ , key, value);
    else if ((0, _shared.hasChanged)(value, oldValue)) trigger(target, "set" /* SET */ , key, value, oldValue);
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has , get  } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    } else checkIdentityKeys(target, has, key);
    const oldValue = get ? get.call(target, key) : undefined;
    // forward the operation before queueing reactions
    const result = target.delete(key);
    if (hadKey) trigger(target, "delete" /* DELETE */ , key, undefined, oldValue);
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = (0, _shared.isMap)(target) ? new Map(target) : new Set(target);
    // forward the operation before queueing reactions
    const result = target.clear();
    if (hadItems) trigger(target, "clear" /* CLEAR */ , undefined, undefined, oldTarget);
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw" /* RAW */ ];
        const rawTarget = toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate" /* ITERATE */ , ITERATE_KEY);
        return target.forEach((value, key)=>{
            // important: make sure the callback is
            // 1. invoked with the reactive map as `this` and 3rd arg
            // 2. the value received should be a corresponding reactive/readonly.
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
        const target = this["__v_raw" /* RAW */ ];
        const rawTarget = toRaw(target);
        const targetIsMap = (0, _shared.isMap)(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate" /* ITERATE */ , isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        // return a wrapped iterator which returns observed versions of the
        // values emitted from the real iterator
        return {
            // iterator protocol
            next () {
                const { value , done  } = innerIterator.next();
                return done ? {
                    value,
                    done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done
                };
            },
            // iterable protocol
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function(...args) {
        {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${(0, _shared.capitalize)(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" /* DELETE */  ? false : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations = {
        get (key) {
            return get$1(this, key);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations = {
        get (key) {
            return get$1(this, key, false, true);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations = {
        get (key) {
            return get$1(this, key, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* ADD */ ),
        set: createReadonlyMethod("set" /* SET */ ),
        delete: createReadonlyMethod("delete" /* DELETE */ ),
        clear: createReadonlyMethod("clear" /* CLEAR */ ),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations = {
        get (key) {
            return get$1(this, key, true, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* ADD */ ),
        set: createReadonlyMethod("set" /* SET */ ),
        delete: createReadonlyMethod("delete" /* DELETE */ ),
        clear: createReadonlyMethod("clear" /* CLEAR */ ),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = [
        "keys",
        "values",
        "entries",
        Symbol.iterator
    ];
    iteratorMethods.forEach((method)=>{
        mutableInstrumentations[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations[method] = createIterableMethod(method, true, false);
        shallowInstrumentations[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations,
        readonlyInstrumentations,
        shallowInstrumentations,
        shallowReadonlyInstrumentations
    ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* #__PURE__*/ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver)=>{
        if (key === "__v_isReactive" /* IS_REACTIVE */ ) return !isReadonly;
        else if (key === "__v_isReadonly" /* IS_READONLY */ ) return isReadonly;
        else if (key === "__v_raw" /* RAW */ ) return target;
        return Reflect.get((0, _shared.hasOwn)(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has.call(target, rawKey)) {
        const type = (0, _shared.toRawType)(target);
        console.warn(`Reactive ${type} contains both the raw and reactive ` + `versions of the same object${type === `Map` ? ` as keys` : ``}, ` + `which can lead to inconsistencies. ` + `Avoid differentiating between the raw and reactive versions ` + `of an object and only use the reactive version if possible.`);
    }
}
const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
    switch(rawType){
        case "Object":
        case "Array":
            return 1 /* COMMON */ ;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2 /* COLLECTION */ ;
        default:
            return 0 /* INVALID */ ;
    }
}
function getTargetType(value) {
    return value["__v_skip" /* SKIP */ ] || !Object.isExtensible(value) ? 0 /* INVALID */  : targetTypeMap((0, _shared.toRawType)(value));
}
function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (isReadonly(target)) return target;
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */ function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */ function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */ function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!(0, _shared.isObject)(target)) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
        return target;
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (target["__v_raw" /* RAW */ ] && !(isReadonly && target["__v_isReactive" /* IS_REACTIVE */ ])) return target;
    // target already has corresponding Proxy
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    // only specific value types can be observed.
    const targetType = getTargetType(target);
    if (targetType === 0 /* INVALID */ ) return target;
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */  ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (isReadonly(value)) return isReactive(value["__v_raw" /* RAW */ ]);
    return !!(value && value["__v_isReactive" /* IS_REACTIVE */ ]);
}
function isReadonly(value) {
    return !!(value && value["__v_isReadonly" /* IS_READONLY */ ]);
}
function isShallow(value) {
    return !!(value && value["__v_isShallow" /* IS_SHALLOW */ ]);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    const raw = observed && observed["__v_raw" /* RAW */ ];
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    (0, _shared.def)(value, "__v_skip" /* SKIP */ , true);
    return value;
}
const toReactive = (value)=>(0, _shared.isObject)(value) ? reactive(value) : value;
const toReadonly = (value)=>(0, _shared.isObject)(value) ? readonly(value) : value;
function trackRefValue(ref) {
    if (shouldTrack && activeEffect) {
        ref = toRaw(ref);
        trackEffects(ref.dep || (ref.dep = createDep()), {
            target: ref,
            type: "get" /* GET */ ,
            key: "value"
        });
    }
}
function triggerRefValue(ref, newVal) {
    ref = toRaw(ref);
    if (ref.dep) triggerEffects(ref.dep, {
        target: ref,
        type: "set" /* SET */ ,
        key: "value",
        newValue: newVal
    });
}
function isRef(r) {
    return !!(r && r.__v_isRef === true);
}
function ref(value) {
    return createRef(value, false);
}
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow) {
    if (isRef(rawValue)) return rawValue;
    return new RefImpl(rawValue, shallow);
}
class RefImpl {
    constructor(value, __v_isShallow){
        this.__v_isShallow = __v_isShallow;
        this.dep = undefined;
        this.__v_isRef = true;
        this._rawValue = __v_isShallow ? value : toRaw(value);
        this._value = __v_isShallow ? value : toReactive(value);
    }
    get value() {
        trackRefValue(this);
        return this._value;
    }
    set value(newVal) {
        newVal = this.__v_isShallow ? newVal : toRaw(newVal);
        if ((0, _shared.hasChanged)(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = this.__v_isShallow ? newVal : toReactive(newVal);
            triggerRefValue(this, newVal);
        }
    }
}
function triggerRef(ref) {
    triggerRefValue(ref, ref.value);
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver)=>unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver)=>{
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
        } else return Reflect.set(target, key, value, receiver);
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory){
        this.dep = undefined;
        this.__v_isRef = true;
        const { get , set  } = factory(()=>trackRefValue(this), ()=>triggerRefValue(this));
        this._get = get;
        this._set = set;
    }
    get value() {
        return this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
function toRefs(object) {
    if (!isProxy(object)) console.warn(`toRefs() expects a reactive object but received a plain one.`);
    const ret = (0, _shared.isArray)(object) ? new Array(object.length) : {};
    for(const key in object)ret[key] = toRef(object, key);
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key, _defaultValue){
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this.__v_isRef = true;
    }
    get value() {
        const val = this._object[this._key];
        return val === undefined ? this._defaultValue : val;
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
}
function toRef(object, key, defaultValue) {
    const val = object[key];
    return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
}
class ComputedRefImpl {
    constructor(getter, _setter, isReadonly, isSSR){
        this._setter = _setter;
        this.dep = undefined;
        this.__v_isRef = true;
        this._dirty = true;
        this.effect = new ReactiveEffect(getter, ()=>{
            if (!this._dirty) {
                this._dirty = true;
                triggerRefValue(this);
            }
        });
        this.effect.computed = this;
        this.effect.active = this._cacheable = !isSSR;
        this["__v_isReadonly" /* IS_READONLY */ ] = isReadonly;
    }
    get value() {
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        const self = toRaw(this);
        trackRefValue(self);
        if (self._dirty || !self._cacheable) {
            self._dirty = false;
            self._value = self.effect.run();
        }
        return self._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
}
function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = (0, _shared.isFunction)(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter = ()=>{
            console.warn("Write operation failed: computed value is readonly");
        };
    } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    if (debugOptions && !isSSR) {
        cRef.effect.onTrack = debugOptions.onTrack;
        cRef.effect.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
}
var _a;
const tick = /*#__PURE__*/ Promise.resolve();
const queue = [];
let queued = false;
const scheduler = (fn)=>{
    queue.push(fn);
    if (!queued) {
        queued = true;
        tick.then(flush);
    }
};
const flush = ()=>{
    for(let i = 0; i < queue.length; i++)queue[i]();
    queue.length = 0;
    queued = false;
};
class DeferredComputedRefImpl {
    constructor(getter){
        this.dep = undefined;
        this._dirty = true;
        this.__v_isRef = true;
        this[_a] = true;
        let compareTarget;
        let hasCompareTarget = false;
        let scheduled = false;
        this.effect = new ReactiveEffect(getter, (computedTrigger)=>{
            if (this.dep) {
                if (computedTrigger) {
                    compareTarget = this._value;
                    hasCompareTarget = true;
                } else if (!scheduled) {
                    const valueToCompare = hasCompareTarget ? compareTarget : this._value;
                    scheduled = true;
                    hasCompareTarget = false;
                    scheduler(()=>{
                        if (this.effect.active && this._get() !== valueToCompare) triggerRefValue(this);
                        scheduled = false;
                    });
                }
                // chained upstream computeds are notified synchronously to ensure
                // value invalidation in case of sync access; normal effects are
                // deferred to be triggered in scheduler.
                for (const e of this.dep)if (e.computed instanceof DeferredComputedRefImpl) e.scheduler(true);
            }
            this._dirty = true;
        });
        this.effect.computed = this;
    }
    _get() {
        if (this._dirty) {
            this._dirty = false;
            return this._value = this.effect.run();
        }
        return this._value;
    }
    get value() {
        trackRefValue(this);
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        return toRaw(this)._get();
    }
}
_a = "__v_isReadonly" /* IS_READONLY */ ;
function deferredComputed(getter) {
    return new DeferredComputedRefImpl(getter);
}

},{"@vue/shared":"3SM3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3SM3y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EMPTY_ARR", ()=>EMPTY_ARR);
parcelHelpers.export(exports, "EMPTY_OBJ", ()=>EMPTY_OBJ);
parcelHelpers.export(exports, "NO", ()=>NO);
parcelHelpers.export(exports, "NOOP", ()=>NOOP);
parcelHelpers.export(exports, "PatchFlagNames", ()=>PatchFlagNames);
parcelHelpers.export(exports, "camelize", ()=>camelize);
parcelHelpers.export(exports, "capitalize", ()=>capitalize);
parcelHelpers.export(exports, "def", ()=>def);
parcelHelpers.export(exports, "escapeHtml", ()=>escapeHtml);
parcelHelpers.export(exports, "escapeHtmlComment", ()=>escapeHtmlComment);
parcelHelpers.export(exports, "extend", ()=>extend);
parcelHelpers.export(exports, "genPropsAccessExp", ()=>genPropsAccessExp);
parcelHelpers.export(exports, "generateCodeFrame", ()=>generateCodeFrame);
parcelHelpers.export(exports, "getGlobalThis", ()=>getGlobalThis);
parcelHelpers.export(exports, "hasChanged", ()=>hasChanged);
parcelHelpers.export(exports, "hasOwn", ()=>hasOwn);
parcelHelpers.export(exports, "hyphenate", ()=>hyphenate);
parcelHelpers.export(exports, "includeBooleanAttr", ()=>includeBooleanAttr);
parcelHelpers.export(exports, "invokeArrayFns", ()=>invokeArrayFns);
parcelHelpers.export(exports, "isArray", ()=>isArray);
parcelHelpers.export(exports, "isBooleanAttr", ()=>isBooleanAttr);
parcelHelpers.export(exports, "isBuiltInDirective", ()=>isBuiltInDirective);
parcelHelpers.export(exports, "isDate", ()=>isDate);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "isGloballyWhitelisted", ()=>isGloballyWhitelisted);
parcelHelpers.export(exports, "isHTMLTag", ()=>isHTMLTag);
parcelHelpers.export(exports, "isIntegerKey", ()=>isIntegerKey);
parcelHelpers.export(exports, "isKnownHtmlAttr", ()=>isKnownHtmlAttr);
parcelHelpers.export(exports, "isKnownSvgAttr", ()=>isKnownSvgAttr);
parcelHelpers.export(exports, "isMap", ()=>isMap);
parcelHelpers.export(exports, "isModelListener", ()=>isModelListener);
parcelHelpers.export(exports, "isNoUnitNumericStyleProp", ()=>isNoUnitNumericStyleProp);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isOn", ()=>isOn);
parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject);
parcelHelpers.export(exports, "isPromise", ()=>isPromise);
parcelHelpers.export(exports, "isReservedProp", ()=>isReservedProp);
parcelHelpers.export(exports, "isSSRSafeAttrName", ()=>isSSRSafeAttrName);
parcelHelpers.export(exports, "isSVGTag", ()=>isSVGTag);
parcelHelpers.export(exports, "isSet", ()=>isSet);
parcelHelpers.export(exports, "isSpecialBooleanAttr", ()=>isSpecialBooleanAttr);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "isSymbol", ()=>isSymbol);
parcelHelpers.export(exports, "isVoidTag", ()=>isVoidTag);
parcelHelpers.export(exports, "looseEqual", ()=>looseEqual);
parcelHelpers.export(exports, "looseIndexOf", ()=>looseIndexOf);
parcelHelpers.export(exports, "makeMap", ()=>makeMap);
parcelHelpers.export(exports, "normalizeClass", ()=>normalizeClass);
parcelHelpers.export(exports, "normalizeProps", ()=>normalizeProps);
parcelHelpers.export(exports, "normalizeStyle", ()=>normalizeStyle);
parcelHelpers.export(exports, "objectToString", ()=>objectToString);
parcelHelpers.export(exports, "parseStringStyle", ()=>parseStringStyle);
parcelHelpers.export(exports, "propsToAttrMap", ()=>propsToAttrMap);
parcelHelpers.export(exports, "remove", ()=>remove);
parcelHelpers.export(exports, "slotFlagsText", ()=>slotFlagsText);
parcelHelpers.export(exports, "stringifyStyle", ()=>stringifyStyle);
parcelHelpers.export(exports, "toDisplayString", ()=>toDisplayString);
parcelHelpers.export(exports, "toHandlerKey", ()=>toHandlerKey);
parcelHelpers.export(exports, "toNumber", ()=>toNumber);
parcelHelpers.export(exports, "toRawType", ()=>toRawType);
parcelHelpers.export(exports, "toTypeString", ()=>toTypeString);
var global = arguments[3];
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */ function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(",");
    for(let i = 0; i < list.length; i++)map[list[i]] = true;
    return expectsLowerCase ? (val)=>!!map[val.toLowerCase()] : (val)=>!!map[val];
}
/**
 * dev only flag -> name mapping
 */ const PatchFlagNames = {
    [1 /* TEXT */ ]: `TEXT`,
    [2 /* CLASS */ ]: `CLASS`,
    [4 /* STYLE */ ]: `STYLE`,
    [8 /* PROPS */ ]: `PROPS`,
    [16 /* FULL_PROPS */ ]: `FULL_PROPS`,
    [32 /* HYDRATE_EVENTS */ ]: `HYDRATE_EVENTS`,
    [64 /* STABLE_FRAGMENT */ ]: `STABLE_FRAGMENT`,
    [128 /* KEYED_FRAGMENT */ ]: `KEYED_FRAGMENT`,
    [256 /* UNKEYED_FRAGMENT */ ]: `UNKEYED_FRAGMENT`,
    [512 /* NEED_PATCH */ ]: `NEED_PATCH`,
    [1024 /* DYNAMIC_SLOTS */ ]: `DYNAMIC_SLOTS`,
    [2048 /* DEV_ROOT_FRAGMENT */ ]: `DEV_ROOT_FRAGMENT`,
    [-1 /* HOISTED */ ]: `HOISTED`,
    [-2 /* BAIL */ ]: `BAIL`
};
/**
 * Dev only
 */ const slotFlagsText = {
    [1 /* STABLE */ ]: "STABLE",
    [2 /* DYNAMIC */ ]: "DYNAMIC",
    [3 /* FORWARDED */ ]: "FORWARDED"
};
const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    // Split the content into individual lines but capture the newline sequence
    // that separated each line. This is important because the actual sequence is
    // needed to properly take into account the full line length for offset
    // comparison
    let lines = source.split(/(\r?\n)/);
    // Separate the lines and newline sequences into separate arrays for easier referencing
    const newlineSequences = lines.filter((_, idx)=>idx % 2 === 1);
    lines = lines.filter((_, idx)=>idx % 2 === 0);
    let count = 0;
    const res = [];
    for(let i = 0; i < lines.length; i++){
        count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
        if (count >= start) {
            for(let j = i - range; j <= i + range || end > count; j++){
                if (j < 0 || j >= lines.length) continue;
                const line = j + 1;
                res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
                if (j === i) {
                    // push underline
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
                } else if (j > i) {
                    if (end > count) {
                        const length1 = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + "^".repeat(length1));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join("\n");
}
/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */ const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */ const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` + `loop,open,required,reversed,scoped,seamless,` + `checked,muted,multiple,selected`);
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */ function includeBooleanAttr(value) {
    return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) return attrValidationCache[name];
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) console.error(`unsafe attribute name: ${name}`);
    return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
};
/**
 * CSS properties that accept plain numbers
 */ const isNoUnitNumericStyleProp = /*#__PURE__*/ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` + `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` + `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` + `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` + `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` + `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` + // SVG
`fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` + `stroke-miterlimit,stroke-opacity,stroke-width`);
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */ const isKnownHtmlAttr = /*#__PURE__*/ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` + `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` + `border,buffered,capture,challenge,charset,checked,cite,class,code,` + `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` + `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` + `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` + `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` + `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` + `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` + `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` + `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` + `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` + `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` + `start,step,style,summary,tabindex,target,title,translate,type,usemap,` + `value,width,wrap`);
/**
 * Generated from https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */ const isKnownSvgAttr = /*#__PURE__*/ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,` + `arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,` + `baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,` + `clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,` + `color-interpolation-filters,color-profile,color-rendering,` + `contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,` + `descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,` + `dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,` + `fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,` + `font-family,font-size,font-size-adjust,font-stretch,font-style,` + `font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,` + `glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,` + `gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,` + `horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,` + `k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,` + `lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,` + `marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,` + `mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,` + `name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,` + `overflow,overline-position,overline-thickness,panose-1,paint-order,path,` + `pathLength,patternContentUnits,patternTransform,patternUnits,ping,` + `pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,` + `preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,` + `rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,` + `restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,` + `specularConstant,specularExponent,speed,spreadMethod,startOffset,` + `stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,` + `strikethrough-position,strikethrough-thickness,string,stroke,` + `stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,` + `stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,` + `systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,` + `text-decoration,text-rendering,textLength,to,transform,transform-origin,` + `type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,` + `unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,` + `v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,` + `vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,` + `writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,` + `xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,` + `xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for(let i = 0; i < value.length; i++){
            const item = value[i];
            const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
            if (normalized) for(const key in normalized)res[key] = normalized[key];
        }
        return res;
    } else if (isString(value)) return value;
    else if (isObject(value)) return value;
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach((item)=>{
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = "";
    if (!styles || isString(styles)) return ret;
    for(const key in styles){
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) // only render valid values
        ret += `${normalizedKey}:${value};`;
    }
    return ret;
}
function normalizeClass(value) {
    let res = "";
    if (isString(value)) res = value;
    else if (isArray(value)) for(let i = 0; i < value.length; i++){
        const normalized = normalizeClass(value[i]);
        if (normalized) res += normalized + " ";
    }
    else if (isObject(value)) {
        for(const name in value)if (value[name]) res += name + " ";
    }
    return res.trim();
}
function normalizeProps(props) {
    if (!props) return null;
    let { class: klass , style  } = props;
    if (klass && !isString(klass)) props.class = normalizeClass(klass);
    if (style) props.style = normalizeStyle(style);
    return props;
}
// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */ const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */ const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */ const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS);
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = "" + string;
    const match = escapeRE.exec(str);
    if (!match) return str;
    let html = "";
    let escaped;
    let index;
    let lastIndex = 0;
    for(index = match.index; index < str.length; index++){
        switch(str.charCodeAt(index)){
            case 34:
                escaped = "&quot;";
                break;
            case 38:
                escaped = "&amp;";
                break;
            case 39:
                escaped = "&#39;";
                break;
            case 60:
                escaped = "&lt;";
                break;
            case 62:
                escaped = "&gt;";
                break;
            default:
                continue;
        }
        if (lastIndex !== index) html += str.slice(lastIndex, index);
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, "");
}
function looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;
    for(let i = 0; equal && i < a.length; i++)equal = looseEqual(a[i], b[i]);
    return equal;
}
function looseEqual(a, b) {
    if (a === b) return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) return a === b;
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */ if (!aValidType || !bValidType) return false;
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) return false;
        for(const key in a){
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) return false;
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex((item)=>looseEqual(item, val));
}
/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */ const toDisplayString = (val)=>{
    return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val)=>{
    // can't use isRef here since @vue/shared has no deps
    if (val && val.__v_isRef) return replacer(_key, val.value);
    else if (isMap(val)) return {
        [`Map(${val.size})`]: [
            ...val.entries()
        ].reduce((entries, [key, val])=>{
            entries[`${key} =>`] = val;
            return entries;
        }, {})
    };
    else if (isSet(val)) return {
        [`Set(${val.size})`]: [
            ...val.values()
        ]
    };
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) return String(val);
    return val;
};
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = ()=>{};
/**
 * Always return false.
 */ const NO = ()=>false;
const onRE = /^on[^a-z]/;
const isOn = (key)=>onRE.test(key);
const isModelListener = (key)=>key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el)=>{
    const i = arr.indexOf(el);
    if (i > -1) arr.splice(i, 1);
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key)=>hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val)=>toTypeString(val) === "[object Map]";
const isSet = (val)=>toTypeString(val) === "[object Set]";
const isDate = (val)=>toTypeString(val) === "[object Date]";
const isFunction = (val)=>typeof val === "function";
const isString = (val)=>typeof val === "string";
const isSymbol = (val)=>typeof val === "symbol";
const isObject = (val)=>val !== null && typeof val === "object";
const isPromise = (val)=>{
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value)=>objectToString.call(value);
const toRawType = (value)=>{
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val)=>toTypeString(val) === "[object Object]";
const isIntegerKey = (key)=>isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /*#__PURE__*/ makeMap(// the leading comma is intentional so empty string "" is also included
",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /*#__PURE__*/ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn)=>{
    const cache = Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */ const camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */ const hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, "-$1").toLowerCase());
/**
 * @private
 */ const capitalize = cacheStringFunction((str)=>str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */ const toHandlerKey = cacheStringFunction((str)=>str ? `on${capitalize(str)}` : ``);
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue)=>!Object.is(value, oldValue);
const invokeArrayFns = (fns, arg)=>{
    for(let i = 0; i < fns.length; i++)fns[i](arg);
};
const def = (obj, key, value)=>{
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val)=>{
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = ()=>{
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
    return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fYNyc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("script:./App.vue");
    if (script.__esModule) script = script.default;
    script.render = require("template:./App.vue").render;
    require("custom:./App.vue").default(script);
    script.__scopeId = "data-v-154ed5";
    script.__file = "/home/userz/web/myplugindev.test/public_html/wp-content/plugins/wp-utlimate-tables/parceljs-backend/src/App.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = "154ed5-hmr";
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord("154ed5-hmr", script)) __VUE_HMR_RUNTIME__.reload("154ed5-hmr", script);
        }, 0);
    });
}
exports.default = script;

},{"script:./App.vue":"iiJmB","template:./App.vue":"evi43","custom:./App.vue":"h0MjM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iiJmB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vueSearchSelect = require("vue-search-select");
exports.default = {
    data () {
        return {
            name: "Vue"
        };
    },
    components: {
        BasicSelect: (0, _vueSearchSelect.BasicSelect)
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","vue-search-select":"lCVNk"}],"lCVNk":[function(require,module,exports) {
module.exports = /******/ function(modules) {
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/ /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
        /******/ // Create a new module (and put it into the cache)
        /******/ var module1 = installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: false,
            /******/ exports: {}
        };
        /******/ /******/ // Execute the module function
        /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
        /******/ /******/ // Flag the module as loaded
        /******/ module1.l = true;
        /******/ /******/ // Return the exports of the module
        /******/ return module1.exports;
    /******/ }
    /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules;
    /******/ /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules;
    /******/ /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function(exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    /******/ };
    /******/ /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function(exports) {
        /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        /******/ Object.defineProperty(exports, "__esModule", {
            value: true
        });
    /******/ };
    /******/ /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function(value, mode) {
        /******/ if (mode & 1) value = __webpack_require__(value);
        /******/ if (mode & 8) return value;
        /******/ if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        /******/ if (mode & 2 && typeof value != "string") for(var key in value)__webpack_require__.d(ns, key, (function(key) {
            return value[key];
        }).bind(null, key));
        /******/ return ns;
    /******/ };
    /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function(module1) {
        /******/ var getter = module1 && module1.__esModule ? /******/ function getDefault() {
            return module1["default"];
        } : /******/ function getModuleExports() {
            return module1;
        };
        /******/ __webpack_require__.d(getter, "a", getter);
        /******/ return getter;
    /******/ };
    /******/ /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/ /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = "";
    /******/ /******/ /******/ // Load entry module and return exports
    /******/ return __webpack_require__(__webpack_require__.s = "fae3");
/******/ }({
    /***/ "014b": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        // ECMAScript 6 symbols shim
        var global = __webpack_require__("e53d");
        var has = __webpack_require__("07e3");
        var DESCRIPTORS = __webpack_require__("8e60");
        var $export = __webpack_require__("63b6");
        var redefine = __webpack_require__("9138");
        var META = __webpack_require__("ebfd").KEY;
        var $fails = __webpack_require__("294c");
        var shared = __webpack_require__("dbdb");
        var setToStringTag = __webpack_require__("45f2");
        var uid = __webpack_require__("62a0");
        var wks = __webpack_require__("5168");
        var wksExt = __webpack_require__("ccb9");
        var wksDefine = __webpack_require__("6718");
        var enumKeys = __webpack_require__("47ee");
        var isArray = __webpack_require__("9003");
        var anObject = __webpack_require__("e4ae");
        var isObject = __webpack_require__("f772");
        var toObject = __webpack_require__("241e");
        var toIObject = __webpack_require__("36c3");
        var toPrimitive = __webpack_require__("1bc3");
        var createDesc = __webpack_require__("aebd");
        var _create = __webpack_require__("a159");
        var gOPNExt = __webpack_require__("0395");
        var $GOPD = __webpack_require__("bf0b");
        var $GOPS = __webpack_require__("9aa9");
        var $DP = __webpack_require__("d9f6");
        var $keys = __webpack_require__("c3a1");
        var gOPD = $GOPD.f;
        var dP = $DP.f;
        var gOPN = gOPNExt.f;
        var $Symbol = global.Symbol;
        var $JSON = global.JSON;
        var _stringify = $JSON && $JSON.stringify;
        var PROTOTYPE = "prototype";
        var HIDDEN = wks("_hidden");
        var TO_PRIMITIVE = wks("toPrimitive");
        var isEnum = {}.propertyIsEnumerable;
        var SymbolRegistry = shared("symbol-registry");
        var AllSymbols = shared("symbols");
        var OPSymbols = shared("op-symbols");
        var ObjectProto = Object[PROTOTYPE];
        var USE_NATIVE = typeof $Symbol == "function" && !!$GOPS.f;
        var QObject = global.QObject;
        // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
        var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
        // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
        var setSymbolDesc = DESCRIPTORS && $fails(function() {
            return _create(dP({}, "a", {
                get: function() {
                    return dP(this, "a", {
                        value: 7
                    }).a;
                }
            })).a != 7;
        }) ? function(it, key, D) {
            var protoDesc = gOPD(ObjectProto, key);
            if (protoDesc) delete ObjectProto[key];
            dP(it, key, D);
            if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
        } : dP;
        var wrap = function(tag) {
            var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
            sym._k = tag;
            return sym;
        };
        var isSymbol = USE_NATIVE && typeof $Symbol.iterator == "symbol" ? function(it) {
            return typeof it == "symbol";
        } : function(it) {
            return it instanceof $Symbol;
        };
        var $defineProperty = function defineProperty(it, key, D) {
            if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
            anObject(it);
            key = toPrimitive(key, true);
            anObject(D);
            if (has(AllSymbols, key)) {
                if (!D.enumerable) {
                    if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
                    it[HIDDEN][key] = true;
                } else {
                    if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                    D = _create(D, {
                        enumerable: createDesc(0, false)
                    });
                }
                return setSymbolDesc(it, key, D);
            }
            return dP(it, key, D);
        };
        var $defineProperties = function defineProperties(it, P) {
            anObject(it);
            var keys = enumKeys(P = toIObject(P));
            var i = 0;
            var l = keys.length;
            var key;
            while(l > i)$defineProperty(it, key = keys[i++], P[key]);
            return it;
        };
        var $create = function create(it, P) {
            return P === undefined ? _create(it) : $defineProperties(_create(it), P);
        };
        var $propertyIsEnumerable = function propertyIsEnumerable(key) {
            var E = isEnum.call(this, key = toPrimitive(key, true));
            if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
            return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
        };
        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
            it = toIObject(it);
            key = toPrimitive(key, true);
            if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
            var D = gOPD(it, key);
            if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
            return D;
        };
        var $getOwnPropertyNames = function getOwnPropertyNames(it) {
            var names = gOPN(toIObject(it));
            var result = [];
            var i = 0;
            var key;
            while(names.length > i)if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
            return result;
        };
        var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
            var IS_OP = it === ObjectProto;
            var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
            var result = [];
            var i = 0;
            var key;
            while(names.length > i)if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
            return result;
        };
        // 19.4.1.1 Symbol([description])
        if (!USE_NATIVE) {
            $Symbol = function Symbol1() {
                if (this instanceof $Symbol) throw TypeError("Symbol is not a constructor!");
                var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
                var $set = function(value) {
                    if (this === ObjectProto) $set.call(OPSymbols, value);
                    if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                    setSymbolDesc(this, tag, createDesc(1, value));
                };
                if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
                    configurable: true,
                    set: $set
                });
                return wrap(tag);
            };
            redefine($Symbol[PROTOTYPE], "toString", function toString() {
                return this._k;
            });
            $GOPD.f = $getOwnPropertyDescriptor;
            $DP.f = $defineProperty;
            __webpack_require__("6abf").f = gOPNExt.f = $getOwnPropertyNames;
            __webpack_require__("355d").f = $propertyIsEnumerable;
            $GOPS.f = $getOwnPropertySymbols;
            if (DESCRIPTORS && !__webpack_require__("b8e3")) redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true);
            wksExt.f = function(name) {
                return wrap(wks(name));
            };
        }
        $export($export.G + $export.W + $export.F * !USE_NATIVE, {
            Symbol: $Symbol
        });
        for(var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
        "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
        for(var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;)wksDefine(wellKnownSymbols[k++]);
        $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
            // 19.4.2.1 Symbol.for(key)
            "for": function(key) {
                return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
            },
            // 19.4.2.5 Symbol.keyFor(sym)
            keyFor: function keyFor(sym) {
                if (!isSymbol(sym)) throw TypeError(sym + " is not a symbol!");
                for(var key in SymbolRegistry)if (SymbolRegistry[key] === sym) return key;
            },
            useSetter: function() {
                setter = true;
            },
            useSimple: function() {
                setter = false;
            }
        });
        $export($export.S + $export.F * !USE_NATIVE, "Object", {
            // 19.1.2.2 Object.create(O [, Properties])
            create: $create,
            // 19.1.2.4 Object.defineProperty(O, P, Attributes)
            defineProperty: $defineProperty,
            // 19.1.2.3 Object.defineProperties(O, Properties)
            defineProperties: $defineProperties,
            // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
            getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
            // 19.1.2.7 Object.getOwnPropertyNames(O)
            getOwnPropertyNames: $getOwnPropertyNames,
            // 19.1.2.8 Object.getOwnPropertySymbols(O)
            getOwnPropertySymbols: $getOwnPropertySymbols
        });
        // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
        // https://bugs.chromium.org/p/v8/issues/detail?id=3443
        var FAILS_ON_PRIMITIVES = $fails(function() {
            $GOPS.f(1);
        });
        $export($export.S + $export.F * FAILS_ON_PRIMITIVES, "Object", {
            getOwnPropertySymbols: function getOwnPropertySymbols(it) {
                return $GOPS.f(toObject(it));
            }
        });
        // 24.3.2 JSON.stringify(value [, replacer [, space]])
        $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
            var S = $Symbol();
            // MS Edge converts symbol values to JSON as {}
            // WebKit converts symbol values to JSON as null
            // V8 throws on boxed symbols
            return _stringify([
                S
            ]) != "[null]" || _stringify({
                a: S
            }) != "{}" || _stringify(Object(S)) != "{}";
        })), "JSON", {
            stringify: function stringify(it) {
                var args = [
                    it
                ];
                var i = 1;
                var replacer, $replacer;
                while(arguments.length > i)args.push(arguments[i++]);
                $replacer = replacer = args[1];
                if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
                if (!isArray(replacer)) replacer = function(key, value) {
                    if (typeof $replacer == "function") value = $replacer.call(this, key, value);
                    if (!isSymbol(value)) return value;
                };
                args[1] = replacer;
                return _stringify.apply($JSON, args);
            }
        });
        // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
        $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("35e8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
        // 19.4.3.5 Symbol.prototype[@@toStringTag]
        setToStringTag($Symbol, "Symbol");
        // 20.2.1.9 Math[@@toStringTag]
        setToStringTag(Math, "Math", true);
        // 24.3.3 JSON[@@toStringTag]
        setToStringTag(global.JSON, "JSON", true);
    /***/ },
    /***/ "01f9": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        var LIBRARY = __webpack_require__("2d00");
        var $export = __webpack_require__("5ca1");
        var redefine = __webpack_require__("2aba");
        var hide = __webpack_require__("32e9");
        var Iterators = __webpack_require__("84f2");
        var $iterCreate = __webpack_require__("41a0");
        var setToStringTag = __webpack_require__("7f20");
        var getPrototypeOf = __webpack_require__("38fd");
        var ITERATOR = __webpack_require__("2b4c")("iterator");
        var BUGGY = !([].keys && "next" in [].keys()); // Safari has buggy iterators w/o `next`
        var FF_ITERATOR = "@@iterator";
        var KEYS = "keys";
        var VALUES = "values";
        var returnThis = function() {
            return this;
        };
        module1.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
            $iterCreate(Constructor, NAME, next);
            var getMethod = function(kind) {
                if (!BUGGY && kind in proto) return proto[kind];
                switch(kind){
                    case KEYS:
                        return function keys() {
                            return new Constructor(this, kind);
                        };
                    case VALUES:
                        return function values() {
                            return new Constructor(this, kind);
                        };
                }
                return function entries() {
                    return new Constructor(this, kind);
                };
            };
            var TAG = NAME + " Iterator";
            var DEF_VALUES = DEFAULT == VALUES;
            var VALUES_BUG = false;
            var proto = Base.prototype;
            var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
            var $default = $native || getMethod(DEFAULT);
            var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : undefined;
            var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
            var methods, key, IteratorPrototype;
            // Fix native
            if ($anyNative) {
                IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                    // Set @@toStringTag to native iterators
                    setToStringTag(IteratorPrototype, TAG, true);
                    // fix for some old engines
                    if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function") hide(IteratorPrototype, ITERATOR, returnThis);
                }
            }
            // fix Array#{values, @@iterator}.name in V8 / FF
            if (DEF_VALUES && $native && $native.name !== VALUES) {
                VALUES_BUG = true;
                $default = function values() {
                    return $native.call(this);
                };
            }
            // Define iterator
            if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) hide(proto, ITERATOR, $default);
            // Plug for library
            Iterators[NAME] = $default;
            Iterators[TAG] = returnThis;
            if (DEFAULT) {
                methods = {
                    values: DEF_VALUES ? $default : getMethod(VALUES),
                    keys: IS_SET ? $default : getMethod(KEYS),
                    entries: $entries
                };
                if (FORCED) {
                    for(key in methods)if (!(key in proto)) redefine(proto, key, methods[key]);
                } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
            }
            return methods;
        };
    /***/ },
    /***/ "02f4": /***/ function(module1, exports, __webpack_require__) {
        var toInteger = __webpack_require__("4588");
        var defined = __webpack_require__("be13");
        // true  -> String#at
        // false -> String#codePointAt
        module1.exports = function(TO_STRING) {
            return function(that, pos) {
                var s = String(defined(that));
                var i = toInteger(pos);
                var l = s.length;
                var a, b;
                if (i < 0 || i >= l) return TO_STRING ? "" : undefined;
                a = s.charCodeAt(i);
                return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
            };
        };
    /***/ },
    /***/ "0390": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        var at = __webpack_require__("02f4")(true);
        // `AdvanceStringIndex` abstract operation
        // https://tc39.github.io/ecma262/#sec-advancestringindex
        module1.exports = function(S, index, unicode) {
            return index + (unicode ? at(S, index).length : 1);
        };
    /***/ },
    /***/ "0395": /***/ function(module1, exports, __webpack_require__) {
        // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
        var toIObject = __webpack_require__("36c3");
        var gOPN = __webpack_require__("6abf").f;
        var toString = {}.toString;
        var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        var getWindowNames = function(it) {
            try {
                return gOPN(it);
            } catch (e) {
                return windowNames.slice();
            }
        };
        module1.exports.f = function getOwnPropertyNames(it) {
            return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : gOPN(toIObject(it));
        };
    /***/ },
    /***/ "07e3": /***/ function(module1, exports) {
        var hasOwnProperty = {}.hasOwnProperty;
        module1.exports = function(it, key) {
            return hasOwnProperty.call(it, key);
        };
    /***/ },
    /***/ "0a49": /***/ function(module1, exports, __webpack_require__) {
        // 0 -> Array#forEach
        // 1 -> Array#map
        // 2 -> Array#filter
        // 3 -> Array#some
        // 4 -> Array#every
        // 5 -> Array#find
        // 6 -> Array#findIndex
        var ctx = __webpack_require__("9b43");
        var IObject = __webpack_require__("626a");
        var toObject = __webpack_require__("4bf8");
        var toLength = __webpack_require__("9def");
        var asc = __webpack_require__("cd1c");
        module1.exports = function(TYPE, $create) {
            var IS_MAP = TYPE == 1;
            var IS_FILTER = TYPE == 2;
            var IS_SOME = TYPE == 3;
            var IS_EVERY = TYPE == 4;
            var IS_FIND_INDEX = TYPE == 6;
            var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
            var create = $create || asc;
            return function($this, callbackfn, that) {
                var O = toObject($this);
                var self1 = IObject(O);
                var f = ctx(callbackfn, that, 3);
                var length = toLength(self1.length);
                var index = 0;
                var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
                var val, res;
                for(; length > index; index++)if (NO_HOLES || index in self1) {
                    val = self1[index];
                    res = f(val, index, O);
                    if (TYPE) {
                        if (IS_MAP) result[index] = res; // map
                        else if (res) switch(TYPE){
                            case 3:
                                return true; // some
                            case 5:
                                return val; // find
                            case 6:
                                return index; // findIndex
                            case 2:
                                result.push(val); // filter
                        }
                        else if (IS_EVERY) return false; // every
                    }
                }
                return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
            };
        };
    /***/ },
    /***/ "0bfb": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        // 21.2.5.3 get RegExp.prototype.flags
        var anObject = __webpack_require__("cb7c");
        module1.exports = function() {
            var that = anObject(this);
            var result = "";
            if (that.global) result += "g";
            if (that.ignoreCase) result += "i";
            if (that.multiline) result += "m";
            if (that.unicode) result += "u";
            if (that.sticky) result += "y";
            return result;
        };
    /***/ },
    /***/ "0d58": /***/ function(module1, exports, __webpack_require__) {
        // 19.1.2.14 / 15.2.3.14 Object.keys(O)
        var $keys = __webpack_require__("ce10");
        var enumBugKeys = __webpack_require__("e11e");
        module1.exports = Object.keys || function keys(O) {
            return $keys(O, enumBugKeys);
        };
    /***/ },
    /***/ "0fc9": /***/ function(module1, exports, __webpack_require__) {
        var toInteger = __webpack_require__("3a38");
        var max = Math.max;
        var min = Math.min;
        module1.exports = function(index, length) {
            index = toInteger(index);
            return index < 0 ? max(index + length, 0) : min(index, length);
        };
    /***/ },
    /***/ "1169": /***/ function(module1, exports, __webpack_require__) {
        // 7.2.2 IsArray(argument)
        var cof = __webpack_require__("2d95");
        module1.exports = Array.isArray || function isArray(arg) {
            return cof(arg) == "Array";
        };
    /***/ },
    /***/ "11e9": /***/ function(module1, exports, __webpack_require__) {
        var pIE = __webpack_require__("52a7");
        var createDesc = __webpack_require__("4630");
        var toIObject = __webpack_require__("6821");
        var toPrimitive = __webpack_require__("6a99");
        var has = __webpack_require__("69a8");
        var IE8_DOM_DEFINE = __webpack_require__("c69a");
        var gOPD = Object.getOwnPropertyDescriptor;
        exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
            O = toIObject(O);
            P = toPrimitive(P, true);
            if (IE8_DOM_DEFINE) try {
                return gOPD(O, P);
            } catch (e) {}
            if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
        };
    /***/ },
    /***/ "1495": /***/ function(module1, exports, __webpack_require__) {
        var dP = __webpack_require__("86cc");
        var anObject = __webpack_require__("cb7c");
        var getKeys = __webpack_require__("0d58");
        module1.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
            anObject(O);
            var keys = getKeys(Properties);
            var length = keys.length;
            var i = 0;
            var P;
            while(length > i)dP.f(O, P = keys[i++], Properties[P]);
            return O;
        };
    /***/ },
    /***/ "1654": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        var $at = __webpack_require__("71c1")(true);
        // 21.1.3.27 String.prototype[@@iterator]()
        __webpack_require__("30f1")(String, "String", function(iterated) {
            this._t = String(iterated); // target
            this._i = 0; // next index
        // 21.1.5.2.1 %StringIteratorPrototype%.next()
        }, function() {
            var O = this._t;
            var index = this._i;
            var point;
            if (index >= O.length) return {
                value: undefined,
                done: true
            };
            point = $at(O, index);
            this._i += point.length;
            return {
                value: point,
                done: false
            };
        });
    /***/ },
    /***/ "1691": /***/ function(module1, exports) {
        // IE 8- don't enum bug keys
        module1.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    /***/ },
    /***/ "1bc3": /***/ function(module1, exports, __webpack_require__) {
        // 7.1.1 ToPrimitive(input [, PreferredType])
        var isObject = __webpack_require__("f772");
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module1.exports = function(it, S) {
            if (!isObject(it)) return it;
            var fn, val;
            if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
            if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it))) return val;
            if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
            throw TypeError("Can't convert object to primitive value");
        };
    /***/ },
    /***/ "1ec9": /***/ function(module1, exports, __webpack_require__) {
        var isObject = __webpack_require__("f772");
        var document1 = __webpack_require__("e53d").document;
        // typeof document.createElement is 'object' in old IE
        var is = isObject(document1) && isObject(document1.createElement);
        module1.exports = function(it) {
            return is ? document1.createElement(it) : {};
        };
    /***/ },
    /***/ "20d6": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
        var $export = __webpack_require__("5ca1");
        var $find = __webpack_require__("0a49")(6);
        var KEY = "findIndex";
        var forced = true;
        // Shouldn't skip holes
        if (KEY in []) Array(1)[KEY](function() {
            forced = false;
        });
        $export($export.P + $export.F * forced, "Array", {
            findIndex: function findIndex(callbackfn /* , that = undefined */ ) {
                return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            }
        });
        __webpack_require__("9c6c")(KEY);
    /***/ },
    /***/ "214f": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        __webpack_require__("b0c5");
        var redefine = __webpack_require__("2aba");
        var hide = __webpack_require__("32e9");
        var fails = __webpack_require__("79e5");
        var defined = __webpack_require__("be13");
        var wks = __webpack_require__("2b4c");
        var regexpExec = __webpack_require__("520a");
        var SPECIES = wks("species");
        var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
            // #replace needs built-in support for named groups.
            // #match works fine because it just return the exec results, even if it has
            // a "grops" property.
            var re = /./;
            re.exec = function() {
                var result = [];
                result.groups = {
                    a: "7"
                };
                return result;
            };
            return "".replace(re, "$<a>") !== "7";
        });
        var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function() {
            // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
            var re = /(?:)/;
            var originalExec = re.exec;
            re.exec = function() {
                return originalExec.apply(this, arguments);
            };
            var result = "ab".split(re);
            return result.length === 2 && result[0] === "a" && result[1] === "b";
        }();
        module1.exports = function(KEY, length, exec) {
            var SYMBOL = wks(KEY);
            var DELEGATES_TO_SYMBOL = !fails(function() {
                // String methods call symbol-named RegEp methods
                var O = {};
                O[SYMBOL] = function() {
                    return 7;
                };
                return ""[KEY](O) != 7;
            });
            var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function() {
                // Symbol-named RegExp methods call .exec
                var execCalled = false;
                var re = /a/;
                re.exec = function() {
                    execCalled = true;
                    return null;
                };
                if (KEY === "split") {
                    // RegExp[@@split] doesn't call the regex's exec method, but first creates
                    // a new one. We need to return the patched regex when creating the new one.
                    re.constructor = {};
                    re.constructor[SPECIES] = function() {
                        return re;
                    };
                }
                re[SYMBOL]("");
                return !execCalled;
            }) : undefined;
            if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === "replace" && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
                var nativeRegExpMethod = /./[SYMBOL];
                var fns = exec(defined, SYMBOL, ""[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
                    if (regexp.exec === regexpExec) {
                        if (DELEGATES_TO_SYMBOL && !forceStringMethod) // The native String method already delegates to @@method (this
                        // polyfilled function), leasing to infinite recursion.
                        // We avoid it by directly calling the native @@method method.
                        return {
                            done: true,
                            value: nativeRegExpMethod.call(regexp, str, arg2)
                        };
                        return {
                            done: true,
                            value: nativeMethod.call(str, regexp, arg2)
                        };
                    }
                    return {
                        done: false
                    };
                });
                var strfn = fns[0];
                var rxfn = fns[1];
                redefine(String.prototype, KEY, strfn);
                hide(RegExp.prototype, SYMBOL, length == 2 ? function(string, arg) {
                    return rxfn.call(string, this, arg);
                } : function(string) {
                    return rxfn.call(string, this);
                });
            }
        };
    /***/ },
    /***/ "230e": /***/ function(module1, exports, __webpack_require__) {
        var isObject = __webpack_require__("d3f4");
        var document1 = __webpack_require__("7726").document;
        // typeof document.createElement is 'object' in old IE
        var is = isObject(document1) && isObject(document1.createElement);
        module1.exports = function(it) {
            return is ? document1.createElement(it) : {};
        };
    /***/ },
    /***/ "23c6": /***/ function(module1, exports, __webpack_require__) {
        // getting tag from 19.1.3.6 Object.prototype.toString()
        var cof = __webpack_require__("2d95");
        var TAG = __webpack_require__("2b4c")("toStringTag");
        // ES3 wrong here
        var ARG = cof(function() {
            return arguments;
        }()) == "Arguments";
        // fallback for IE11 Script Access Denied error
        var tryGet = function(it, key) {
            try {
                return it[key];
            } catch (e) {}
        };
        module1.exports = function(it) {
            var O, T, B;
            return it === undefined ? "Undefined" : it === null ? "Null" : typeof (T = tryGet(O = Object(it), TAG)) == "string" ? T : ARG ? cof(O) : (B = cof(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B;
        };
    /***/ },
    /***/ "241e": /***/ function(module1, exports, __webpack_require__) {
        // 7.1.13 ToObject(argument)
        var defined = __webpack_require__("25eb");
        module1.exports = function(it) {
            return Object(defined(it));
        };
    /***/ },
    /***/ "25eb": /***/ function(module1, exports) {
        // 7.2.1 RequireObjectCoercible(argument)
        module1.exports = function(it) {
            if (it == undefined) throw TypeError("Can't call method on  " + it);
            return it;
        };
    /***/ },
    /***/ "294c": /***/ function(module1, exports) {
        module1.exports = function(exec) {
            try {
                return !!exec();
            } catch (e) {
                return true;
            }
        };
    /***/ },
    /***/ "2aba": /***/ function(module1, exports, __webpack_require__) {
        var global = __webpack_require__("7726");
        var hide = __webpack_require__("32e9");
        var has = __webpack_require__("69a8");
        var SRC = __webpack_require__("ca5a")("src");
        var $toString = __webpack_require__("fa5b");
        var TO_STRING = "toString";
        var TPL = ("" + $toString).split(TO_STRING);
        __webpack_require__("8378").inspectSource = function(it) {
            return $toString.call(it);
        };
        (module1.exports = function(O, key, val, safe) {
            var isFunction = typeof val == "function";
            if (isFunction) has(val, "name") || hide(val, "name", key);
            if (O[key] === val) return;
            if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key)));
            if (O === global) O[key] = val;
            else if (!safe) {
                delete O[key];
                hide(O, key, val);
            } else if (O[key]) O[key] = val;
            else hide(O, key, val);
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, TO_STRING, function toString() {
            return typeof this == "function" && this[SRC] || $toString.call(this);
        });
    /***/ },
    /***/ "2aeb": /***/ function(module1, exports, __webpack_require__) {
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        var anObject = __webpack_require__("cb7c");
        var dPs = __webpack_require__("1495");
        var enumBugKeys = __webpack_require__("e11e");
        var IE_PROTO = __webpack_require__("613b")("IE_PROTO");
        var Empty = function() {};
        var PROTOTYPE = "prototype";
        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        var createDict = function() {
            // Thrash, waste and sodomy: IE GC bug
            var iframe = __webpack_require__("230e")("iframe");
            var i = enumBugKeys.length;
            var lt = "<";
            var gt = ">";
            var iframeDocument;
            iframe.style.display = "none";
            __webpack_require__("fab2").appendChild(iframe);
            iframe.src = "javascript:"; // eslint-disable-line no-script-url
            // createDict = iframe.contentWindow.Object;
            // html.removeChild(iframe);
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
            iframeDocument.close();
            createDict = iframeDocument.F;
            while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
            return createDict();
        };
        module1.exports = Object.create || function create(O, Properties) {
            var result;
            if (O !== null) {
                Empty[PROTOTYPE] = anObject(O);
                result = new Empty();
                Empty[PROTOTYPE] = null;
                // add "__proto__" for Object.getPrototypeOf polyfill
                result[IE_PROTO] = O;
            } else result = createDict();
            return Properties === undefined ? result : dPs(result, Properties);
        };
    /***/ },
    /***/ "2b4c": /***/ function(module1, exports, __webpack_require__) {
        var store = __webpack_require__("5537")("wks");
        var uid = __webpack_require__("ca5a");
        var Symbol1 = __webpack_require__("7726").Symbol;
        var USE_SYMBOL = typeof Symbol1 == "function";
        var $exports = module1.exports = function(name) {
            return store[name] || (store[name] = USE_SYMBOL && Symbol1[name] || (USE_SYMBOL ? Symbol1 : uid)("Symbol." + name));
        };
        $exports.store = store;
    /***/ },
    /***/ "2d00": /***/ function(module1, exports) {
        module1.exports = false;
    /***/ },
    /***/ "2d95": /***/ function(module1, exports) {
        var toString = {}.toString;
        module1.exports = function(it) {
            return toString.call(it).slice(8, -1);
        };
    /***/ },
    /***/ "30f1": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        var LIBRARY = __webpack_require__("b8e3");
        var $export = __webpack_require__("63b6");
        var redefine = __webpack_require__("9138");
        var hide = __webpack_require__("35e8");
        var Iterators = __webpack_require__("481b");
        var $iterCreate = __webpack_require__("8f60");
        var setToStringTag = __webpack_require__("45f2");
        var getPrototypeOf = __webpack_require__("53e2");
        var ITERATOR = __webpack_require__("5168")("iterator");
        var BUGGY = !([].keys && "next" in [].keys()); // Safari has buggy iterators w/o `next`
        var FF_ITERATOR = "@@iterator";
        var KEYS = "keys";
        var VALUES = "values";
        var returnThis = function() {
            return this;
        };
        module1.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
            $iterCreate(Constructor, NAME, next);
            var getMethod = function(kind) {
                if (!BUGGY && kind in proto) return proto[kind];
                switch(kind){
                    case KEYS:
                        return function keys() {
                            return new Constructor(this, kind);
                        };
                    case VALUES:
                        return function values() {
                            return new Constructor(this, kind);
                        };
                }
                return function entries() {
                    return new Constructor(this, kind);
                };
            };
            var TAG = NAME + " Iterator";
            var DEF_VALUES = DEFAULT == VALUES;
            var VALUES_BUG = false;
            var proto = Base.prototype;
            var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
            var $default = $native || getMethod(DEFAULT);
            var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : undefined;
            var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
            var methods, key, IteratorPrototype;
            // Fix native
            if ($anyNative) {
                IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                    // Set @@toStringTag to native iterators
                    setToStringTag(IteratorPrototype, TAG, true);
                    // fix for some old engines
                    if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function") hide(IteratorPrototype, ITERATOR, returnThis);
                }
            }
            // fix Array#{values, @@iterator}.name in V8 / FF
            if (DEF_VALUES && $native && $native.name !== VALUES) {
                VALUES_BUG = true;
                $default = function values() {
                    return $native.call(this);
                };
            }
            // Define iterator
            if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) hide(proto, ITERATOR, $default);
            // Plug for library
            Iterators[NAME] = $default;
            Iterators[TAG] = returnThis;
            if (DEFAULT) {
                methods = {
                    values: DEF_VALUES ? $default : getMethod(VALUES),
                    keys: IS_SET ? $default : getMethod(KEYS),
                    entries: $entries
                };
                if (FORCED) {
                    for(key in methods)if (!(key in proto)) redefine(proto, key, methods[key]);
                } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
            }
            return methods;
        };
    /***/ },
    /***/ "32e9": /***/ function(module1, exports, __webpack_require__) {
        var dP = __webpack_require__("86cc");
        var createDesc = __webpack_require__("4630");
        module1.exports = __webpack_require__("9e1e") ? function(object, key, value) {
            return dP.f(object, key, createDesc(1, value));
        } : function(object, key, value) {
            object[key] = value;
            return object;
        };
    /***/ },
    /***/ "32fc": /***/ function(module1, exports, __webpack_require__) {
        var document1 = __webpack_require__("e53d").document;
        module1.exports = document1 && document1.documentElement;
    /***/ },
    /***/ "335c": /***/ function(module1, exports, __webpack_require__) {
        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = __webpack_require__("6b4c");
        // eslint-disable-next-line no-prototype-builtins
        module1.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
            return cof(it) == "String" ? it.split("") : Object(it);
        };
    /***/ },
    /***/ "355d": /***/ function(module1, exports) {
        exports.f = ({}).propertyIsEnumerable;
    /***/ },
    /***/ "35e8": /***/ function(module1, exports, __webpack_require__) {
        var dP = __webpack_require__("d9f6");
        var createDesc = __webpack_require__("aebd");
        module1.exports = __webpack_require__("8e60") ? function(object, key, value) {
            return dP.f(object, key, createDesc(1, value));
        } : function(object, key, value) {
            object[key] = value;
            return object;
        };
    /***/ },
    /***/ "36c3": /***/ function(module1, exports, __webpack_require__) {
        // to indexed object, toObject with fallback for non-array-like ES3 strings
        var IObject = __webpack_require__("335c");
        var defined = __webpack_require__("25eb");
        module1.exports = function(it) {
            return IObject(defined(it));
        };
    /***/ },
    /***/ "3846": /***/ function(module1, exports, __webpack_require__) {
        // 21.2.5.3 get RegExp.prototype.flags()
        if (__webpack_require__("9e1e") && /./g.flags != "g") __webpack_require__("86cc").f(RegExp.prototype, "flags", {
            configurable: true,
            get: __webpack_require__("0bfb")
        });
    /***/ },
    /***/ "38fd": /***/ function(module1, exports, __webpack_require__) {
        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        var has = __webpack_require__("69a8");
        var toObject = __webpack_require__("4bf8");
        var IE_PROTO = __webpack_require__("613b")("IE_PROTO");
        var ObjectProto = Object.prototype;
        module1.exports = Object.getPrototypeOf || function(O) {
            O = toObject(O);
            if (has(O, IE_PROTO)) return O[IE_PROTO];
            if (typeof O.constructor == "function" && O instanceof O.constructor) return O.constructor.prototype;
            return O instanceof Object ? ObjectProto : null;
        };
    /***/ },
    /***/ "3a38": /***/ function(module1, exports) {
        // 7.1.4 ToInteger
        var ceil = Math.ceil;
        var floor = Math.floor;
        module1.exports = function(it) {
            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };
    /***/ },
    /***/ "3b2b": /***/ function(module1, exports, __webpack_require__) {
        var global = __webpack_require__("7726");
        var inheritIfRequired = __webpack_require__("5dbc");
        var dP = __webpack_require__("86cc").f;
        var gOPN = __webpack_require__("9093").f;
        var isRegExp = __webpack_require__("aae3");
        var $flags = __webpack_require__("0bfb");
        var $RegExp = global.RegExp;
        var Base = $RegExp;
        var proto = $RegExp.prototype;
        var re1 = /a/g;
        var re2 = /a/g;
        // "new" creates a new object, old webkit buggy here
        var CORRECT_NEW = new $RegExp(re1) !== re1;
        if (__webpack_require__("9e1e") && (!CORRECT_NEW || __webpack_require__("79e5")(function() {
            re2[__webpack_require__("2b4c")("match")] = false;
            // RegExp constructor can alter flags and IsRegExp works correct with @@match
            return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, "i") != "/a/i";
        }))) {
            $RegExp = function RegExp1(p, f) {
                var tiRE = this instanceof $RegExp;
                var piRE = isRegExp(p);
                var fiU = f === undefined;
                return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
            };
            var proxy = function(key) {
                key in $RegExp || dP($RegExp, key, {
                    configurable: true,
                    get: function() {
                        return Base[key];
                    },
                    set: function(it) {
                        Base[key] = it;
                    }
                });
            };
            for(var keys = gOPN(Base), i = 0; keys.length > i;)proxy(keys[i++]);
            proto.constructor = $RegExp;
            $RegExp.prototype = proto;
            __webpack_require__("2aba")(global, "RegExp", $RegExp);
        }
        __webpack_require__("7a56")("RegExp");
    /***/ },
    /***/ "41a0": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        var create = __webpack_require__("2aeb");
        var descriptor = __webpack_require__("4630");
        var setToStringTag = __webpack_require__("7f20");
        var IteratorPrototype = {};
        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        __webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")("iterator"), function() {
            return this;
        });
        module1.exports = function(Constructor, NAME, next) {
            Constructor.prototype = create(IteratorPrototype, {
                next: descriptor(1, next)
            });
            setToStringTag(Constructor, NAME + " Iterator");
        };
    /***/ },
    /***/ "456d": /***/ function(module1, exports, __webpack_require__) {
        // 19.1.2.14 Object.keys(O)
        var toObject = __webpack_require__("4bf8");
        var $keys = __webpack_require__("0d58");
        __webpack_require__("5eda")("keys", function() {
            return function keys(it) {
                return $keys(toObject(it));
            };
        });
    /***/ },
    /***/ "4588": /***/ function(module1, exports) {
        // 7.1.4 ToInteger
        var ceil = Math.ceil;
        var floor = Math.floor;
        module1.exports = function(it) {
            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };
    /***/ },
    /***/ "45f2": /***/ function(module1, exports, __webpack_require__) {
        var def = __webpack_require__("d9f6").f;
        var has = __webpack_require__("07e3");
        var TAG = __webpack_require__("5168")("toStringTag");
        module1.exports = function(it, tag, stat) {
            if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
                configurable: true,
                value: tag
            });
        };
    /***/ },
    /***/ "4630": /***/ function(module1, exports) {
        module1.exports = function(bitmap, value) {
            return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value: value
            };
        };
    /***/ },
    /***/ "47ee": /***/ function(module1, exports, __webpack_require__) {
        // all enumerable object keys, includes symbols
        var getKeys = __webpack_require__("c3a1");
        var gOPS = __webpack_require__("9aa9");
        var pIE = __webpack_require__("355d");
        module1.exports = function(it) {
            var result = getKeys(it);
            var getSymbols = gOPS.f;
            if (getSymbols) {
                var symbols = getSymbols(it);
                var isEnum = pIE.f;
                var i = 0;
                var key;
                while(symbols.length > i)if (isEnum.call(it, key = symbols[i++])) result.push(key);
            }
            return result;
        };
    /***/ },
    /***/ "481b": /***/ function(module1, exports) {
        module1.exports = {};
    /***/ },
    /***/ "4917": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        var anObject = __webpack_require__("cb7c");
        var toLength = __webpack_require__("9def");
        var advanceStringIndex = __webpack_require__("0390");
        var regExpExec = __webpack_require__("5f1b");
        // @@match logic
        __webpack_require__("214f")("match", 1, function(defined, MATCH, $match, maybeCallNative) {
            return [
                // `String.prototype.match` method
                // https://tc39.github.io/ecma262/#sec-string.prototype.match
                function match(regexp) {
                    var O = defined(this);
                    var fn = regexp == undefined ? undefined : regexp[MATCH];
                    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
                },
                // `RegExp.prototype[@@match]` method
                // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
                function(regexp) {
                    var res = maybeCallNative($match, regexp, this);
                    if (res.done) return res.value;
                    var rx = anObject(regexp);
                    var S = String(this);
                    if (!rx.global) return regExpExec(rx, S);
                    var fullUnicode = rx.unicode;
                    rx.lastIndex = 0;
                    var A = [];
                    var n = 0;
                    var result;
                    while((result = regExpExec(rx, S)) !== null){
                        var matchStr = String(result[0]);
                        A[n] = matchStr;
                        if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                        n++;
                    }
                    return n === 0 ? null : A;
                }
            ];
        });
    /***/ },
    /***/ "4bf8": /***/ function(module1, exports, __webpack_require__) {
        // 7.1.13 ToObject(argument)
        var defined = __webpack_require__("be13");
        module1.exports = function(it) {
            return Object(defined(it));
        };
    /***/ },
    /***/ "50ed": /***/ function(module1, exports) {
        module1.exports = function(done, value) {
            return {
                value: value,
                done: !!done
            };
        };
    /***/ },
    /***/ "5168": /***/ function(module1, exports, __webpack_require__) {
        var store = __webpack_require__("dbdb")("wks");
        var uid = __webpack_require__("62a0");
        var Symbol1 = __webpack_require__("e53d").Symbol;
        var USE_SYMBOL = typeof Symbol1 == "function";
        var $exports = module1.exports = function(name) {
            return store[name] || (store[name] = USE_SYMBOL && Symbol1[name] || (USE_SYMBOL ? Symbol1 : uid)("Symbol." + name));
        };
        $exports.store = store;
    /***/ },
    /***/ "520a": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        var regexpFlags = __webpack_require__("0bfb");
        var nativeExec = RegExp.prototype.exec;
        // This always refers to the native implementation, because the
        // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
        // which loads this file before patching the method.
        var nativeReplace = String.prototype.replace;
        var patchedExec = nativeExec;
        var LAST_INDEX = "lastIndex";
        var UPDATES_LAST_INDEX_WRONG = function() {
            var re1 = /a/, re2 = /b*/g;
            nativeExec.call(re1, "a");
            nativeExec.call(re2, "a");
            return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
        }();
        // nonparticipating capturing group, copied from es5-shim's String#split patch.
        var NPCG_INCLUDED = /()??/.exec("")[1] !== undefined;
        var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;
        if (PATCH) patchedExec = function exec(str) {
            var re = this;
            var lastIndex, reCopy, match, i;
            if (NPCG_INCLUDED) reCopy = new RegExp("^" + re.source + "$(?!\\s)", regexpFlags.call(re));
            if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];
            match = nativeExec.call(re, str);
            if (UPDATES_LAST_INDEX_WRONG && match) re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
            if (NPCG_INCLUDED && match && match.length > 1) // Fix browsers whose `exec` methods don't consistently return `undefined`
            // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
            // eslint-disable-next-line no-loop-func
            nativeReplace.call(match[0], reCopy, function() {
                for(i = 1; i < arguments.length - 2; i++)if (arguments[i] === undefined) match[i] = undefined;
            });
            return match;
        };
        module1.exports = patchedExec;
    /***/ },
    /***/ "52a7": /***/ function(module1, exports) {
        exports.f = ({}).propertyIsEnumerable;
    /***/ },
    /***/ "53e2": /***/ function(module1, exports, __webpack_require__) {
        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        var has = __webpack_require__("07e3");
        var toObject = __webpack_require__("241e");
        var IE_PROTO = __webpack_require__("5559")("IE_PROTO");
        var ObjectProto = Object.prototype;
        module1.exports = Object.getPrototypeOf || function(O) {
            O = toObject(O);
            if (has(O, IE_PROTO)) return O[IE_PROTO];
            if (typeof O.constructor == "function" && O instanceof O.constructor) return O.constructor.prototype;
            return O instanceof Object ? ObjectProto : null;
        };
    /***/ },
    /***/ "5537": /***/ function(module1, exports, __webpack_require__) {
        var core = __webpack_require__("8378");
        var global = __webpack_require__("7726");
        var SHARED = "__core-js_shared__";
        var store = global[SHARED] || (global[SHARED] = {});
        (module1.exports = function(key, value) {
            return store[key] || (store[key] = value !== undefined ? value : {});
        })("versions", []).push({
            version: core.version,
            mode: __webpack_require__("2d00") ? "pure" : "global",
            copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
        });
    /***/ },
    /***/ "5559": /***/ function(module1, exports, __webpack_require__) {
        var shared = __webpack_require__("dbdb")("keys");
        var uid = __webpack_require__("62a0");
        module1.exports = function(key) {
            return shared[key] || (shared[key] = uid(key));
        };
    /***/ },
    /***/ "584a": /***/ function(module1, exports) {
        var core = module1.exports = {
            version: "2.6.9"
        };
        if (typeof __e == "number") __e = core; // eslint-disable-line no-undef
    /***/ },
    /***/ "5b4e": /***/ function(module1, exports, __webpack_require__) {
        // false -> Array#indexOf
        // true  -> Array#includes
        var toIObject = __webpack_require__("36c3");
        var toLength = __webpack_require__("b447");
        var toAbsoluteIndex = __webpack_require__("0fc9");
        module1.exports = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
                var O = toIObject($this);
                var length = toLength(O.length);
                var index = toAbsoluteIndex(fromIndex, length);
                var value;
                // Array#includes uses SameValueZero equality algorithm
                // eslint-disable-next-line no-self-compare
                if (IS_INCLUDES && el != el) while(length > index){
                    value = O[index++];
                    // eslint-disable-next-line no-self-compare
                    if (value != value) return true;
                // Array#indexOf ignores holes, Array#includes - not
                }
                else for(; length > index; index++)if (IS_INCLUDES || index in O) {
                    if (O[index] === el) return IS_INCLUDES || index || 0;
                }
                return !IS_INCLUDES && -1;
            };
        };
    /***/ },
    /***/ "5ca1": /***/ function(module1, exports, __webpack_require__) {
        var global = __webpack_require__("7726");
        var core = __webpack_require__("8378");
        var hide = __webpack_require__("32e9");
        var redefine = __webpack_require__("2aba");
        var ctx = __webpack_require__("9b43");
        var PROTOTYPE = "prototype";
        var $export = function(type, name, source) {
            var IS_FORCED = type & $export.F;
            var IS_GLOBAL = type & $export.G;
            var IS_STATIC = type & $export.S;
            var IS_PROTO = type & $export.P;
            var IS_BIND = type & $export.B;
            var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
            var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
            var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
            var key, own, out, exp;
            if (IS_GLOBAL) source = name;
            for(key in source){
                // contains in native
                own = !IS_FORCED && target && target[key] !== undefined;
                // export native or passed
                out = (own ? target : source)[key];
                // bind timers to global for call from export context
                exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
                // extend global
                if (target) redefine(target, key, out, type & $export.U);
                // export
                if (exports[key] != out) hide(exports, key, exp);
                if (IS_PROTO && expProto[key] != out) expProto[key] = out;
            }
        };
        global.core = core;
        // type bitmap
        $export.F = 1; // forced
        $export.G = 2; // global
        $export.S = 4; // static
        $export.P = 8; // proto
        $export.B = 16; // bind
        $export.W = 32; // wrap
        $export.U = 64; // safe
        $export.R = 128; // real proto method for `library`
        module1.exports = $export;
    /***/ },
    /***/ "5d58": /***/ function(module1, exports, __webpack_require__) {
        module1.exports = __webpack_require__("d8d6");
    /***/ },
    /***/ "5dbc": /***/ function(module1, exports, __webpack_require__) {
        var isObject = __webpack_require__("d3f4");
        var setPrototypeOf = __webpack_require__("8b97").set;
        module1.exports = function(that, target, C) {
            var S = target.constructor;
            var P;
            if (S !== C && typeof S == "function" && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) setPrototypeOf(that, P);
            return that;
        };
    /***/ },
    /***/ "5eda": /***/ function(module1, exports, __webpack_require__) {
        // most Object methods by ES6 should accept primitives
        var $export = __webpack_require__("5ca1");
        var core = __webpack_require__("8378");
        var fails = __webpack_require__("79e5");
        module1.exports = function(KEY, exec) {
            var fn = (core.Object || {})[KEY] || Object[KEY];
            var exp = {};
            exp[KEY] = exec(fn);
            $export($export.S + $export.F * fails(function() {
                fn(1);
            }), "Object", exp);
        };
    /***/ },
    /***/ "5f1b": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        var classof = __webpack_require__("23c6");
        var builtinExec = RegExp.prototype.exec;
        // `RegExpExec` abstract operation
        // https://tc39.github.io/ecma262/#sec-regexpexec
        module1.exports = function(R, S) {
            var exec = R.exec;
            if (typeof exec === "function") {
                var result = exec.call(R, S);
                if (typeof result !== "object") throw new TypeError("RegExp exec method returned something other than an Object or null");
                return result;
            }
            if (classof(R) !== "RegExp") throw new TypeError("RegExp#exec called on incompatible receiver");
            return builtinExec.call(R, S);
        };
    /***/ },
    /***/ "613b": /***/ function(module1, exports, __webpack_require__) {
        var shared = __webpack_require__("5537")("keys");
        var uid = __webpack_require__("ca5a");
        module1.exports = function(key) {
            return shared[key] || (shared[key] = uid(key));
        };
    /***/ },
    /***/ "626a": /***/ function(module1, exports, __webpack_require__) {
        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = __webpack_require__("2d95");
        // eslint-disable-next-line no-prototype-builtins
        module1.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
            return cof(it) == "String" ? it.split("") : Object(it);
        };
    /***/ },
    /***/ "62a0": /***/ function(module1, exports) {
        var id = 0;
        var px = Math.random();
        module1.exports = function(key) {
            return "Symbol(".concat(key === undefined ? "" : key, ")_", (++id + px).toString(36));
        };
    /***/ },
    /***/ "63b6": /***/ function(module1, exports, __webpack_require__) {
        var global = __webpack_require__("e53d");
        var core = __webpack_require__("584a");
        var ctx = __webpack_require__("d864");
        var hide = __webpack_require__("35e8");
        var has = __webpack_require__("07e3");
        var PROTOTYPE = "prototype";
        var $export = function(type, name, source) {
            var IS_FORCED = type & $export.F;
            var IS_GLOBAL = type & $export.G;
            var IS_STATIC = type & $export.S;
            var IS_PROTO = type & $export.P;
            var IS_BIND = type & $export.B;
            var IS_WRAP = type & $export.W;
            var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
            var expProto = exports[PROTOTYPE];
            var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
            var key, own, out;
            if (IS_GLOBAL) source = name;
            for(key in source){
                // contains in native
                own = !IS_FORCED && target && target[key] !== undefined;
                if (own && has(exports, key)) continue;
                // export native or passed
                out = own ? target[key] : source[key];
                // prevent global pollution for namespaces
                exports[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
                    var F = function(a, b, c) {
                        if (this instanceof C) {
                            switch(arguments.length){
                                case 0:
                                    return new C();
                                case 1:
                                    return new C(a);
                                case 2:
                                    return new C(a, b);
                            }
                            return new C(a, b, c);
                        }
                        return C.apply(this, arguments);
                    };
                    F[PROTOTYPE] = C[PROTOTYPE];
                    return F;
                // make static versions for prototype methods
                }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
                // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
                if (IS_PROTO) {
                    (exports.virtual || (exports.virtual = {}))[key] = out;
                    // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
                    if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
                }
            }
        };
        // type bitmap
        $export.F = 1; // forced
        $export.G = 2; // global
        $export.S = 4; // static
        $export.P = 8; // proto
        $export.B = 16; // bind
        $export.W = 32; // wrap
        $export.U = 64; // safe
        $export.R = 128; // real proto method for `library`
        module1.exports = $export;
    /***/ },
    /***/ "6718": /***/ function(module1, exports, __webpack_require__) {
        var global = __webpack_require__("e53d");
        var core = __webpack_require__("584a");
        var LIBRARY = __webpack_require__("b8e3");
        var wksExt = __webpack_require__("ccb9");
        var defineProperty = __webpack_require__("d9f6").f;
        module1.exports = function(name) {
            var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
            if (name.charAt(0) != "_" && !(name in $Symbol)) defineProperty($Symbol, name, {
                value: wksExt.f(name)
            });
        };
    /***/ },
    /***/ "67bb": /***/ function(module1, exports, __webpack_require__) {
        module1.exports = __webpack_require__("f921");
    /***/ },
    /***/ "6821": /***/ function(module1, exports, __webpack_require__) {
        // to indexed object, toObject with fallback for non-array-like ES3 strings
        var IObject = __webpack_require__("626a");
        var defined = __webpack_require__("be13");
        module1.exports = function(it) {
            return IObject(defined(it));
        };
    /***/ },
    /***/ "69a8": /***/ function(module1, exports) {
        var hasOwnProperty = {}.hasOwnProperty;
        module1.exports = function(it, key) {
            return hasOwnProperty.call(it, key);
        };
    /***/ },
    /***/ "69d3": /***/ function(module1, exports, __webpack_require__) {
        __webpack_require__("6718")("asyncIterator");
    /***/ },
    /***/ "6a99": /***/ function(module1, exports, __webpack_require__) {
        // 7.1.1 ToPrimitive(input [, PreferredType])
        var isObject = __webpack_require__("d3f4");
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module1.exports = function(it, S) {
            if (!isObject(it)) return it;
            var fn, val;
            if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
            if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it))) return val;
            if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
            throw TypeError("Can't convert object to primitive value");
        };
    /***/ },
    /***/ "6abf": /***/ function(module1, exports, __webpack_require__) {
        // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
        var $keys = __webpack_require__("e6f3");
        var hiddenKeys = __webpack_require__("1691").concat("length", "prototype");
        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
            return $keys(O, hiddenKeys);
        };
    /***/ },
    /***/ "6b4c": /***/ function(module1, exports) {
        var toString = {}.toString;
        module1.exports = function(it) {
            return toString.call(it).slice(8, -1);
        };
    /***/ },
    /***/ "6b54": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        __webpack_require__("3846");
        var anObject = __webpack_require__("cb7c");
        var $flags = __webpack_require__("0bfb");
        var DESCRIPTORS = __webpack_require__("9e1e");
        var TO_STRING = "toString";
        var $toString = /./[TO_STRING];
        var define = function(fn) {
            __webpack_require__("2aba")(RegExp.prototype, TO_STRING, fn, true);
        };
        // 21.2.5.14 RegExp.prototype.toString()
        if (__webpack_require__("79e5")(function() {
            return $toString.call({
                source: "a",
                flags: "b"
            }) != "/a/b";
        })) define(function toString() {
            var R = anObject(this);
            return "/".concat(R.source, "/", "flags" in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
        });
        else if ($toString.name != TO_STRING) define(function toString() {
            return $toString.call(this);
        });
    /***/ },
    /***/ "6c1c": /***/ function(module1, exports, __webpack_require__) {
        __webpack_require__("c367");
        var global = __webpack_require__("e53d");
        var hide = __webpack_require__("35e8");
        var Iterators = __webpack_require__("481b");
        var TO_STRING_TAG = __webpack_require__("5168")("toStringTag");
        var DOMIterables = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(",");
        for(var i = 0; i < DOMIterables.length; i++){
            var NAME = DOMIterables[i];
            var Collection = global[NAME];
            var proto = Collection && Collection.prototype;
            if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
            Iterators[NAME] = Iterators.Array;
        }
    /***/ },
    /***/ "71c1": /***/ function(module1, exports, __webpack_require__) {
        var toInteger = __webpack_require__("3a38");
        var defined = __webpack_require__("25eb");
        // true  -> String#at
        // false -> String#codePointAt
        module1.exports = function(TO_STRING) {
            return function(that, pos) {
                var s = String(defined(that));
                var i = toInteger(pos);
                var l = s.length;
                var a, b;
                if (i < 0 || i >= l) return TO_STRING ? "" : undefined;
                a = s.charCodeAt(i);
                return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
            };
        };
    /***/ },
    /***/ "7514": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
        var $export = __webpack_require__("5ca1");
        var $find = __webpack_require__("0a49")(5);
        var KEY = "find";
        var forced = true;
        // Shouldn't skip holes
        if (KEY in []) Array(1)[KEY](function() {
            forced = false;
        });
        $export($export.P + $export.F * forced, "Array", {
            find: function find(callbackfn /* , that = undefined */ ) {
                return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            }
        });
        __webpack_require__("9c6c")(KEY);
    /***/ },
    /***/ "765d": /***/ function(module1, exports, __webpack_require__) {
        __webpack_require__("6718")("observable");
    /***/ },
    /***/ "7726": /***/ function(module1, exports) {
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = module1.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
        if (typeof __g == "number") __g = global; // eslint-disable-line no-undef
    /***/ },
    /***/ "77f1": /***/ function(module1, exports, __webpack_require__) {
        var toInteger = __webpack_require__("4588");
        var max = Math.max;
        var min = Math.min;
        module1.exports = function(index, length) {
            index = toInteger(index);
            return index < 0 ? max(index + length, 0) : min(index, length);
        };
    /***/ },
    /***/ "794b": /***/ function(module1, exports, __webpack_require__) {
        module1.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function() {
            return Object.defineProperty(__webpack_require__("1ec9")("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a != 7;
        });
    /***/ },
    /***/ "79aa": /***/ function(module1, exports) {
        module1.exports = function(it) {
            if (typeof it != "function") throw TypeError(it + " is not a function!");
            return it;
        };
    /***/ },
    /***/ "79e5": /***/ function(module1, exports) {
        module1.exports = function(exec) {
            try {
                return !!exec();
            } catch (e) {
                return true;
            }
        };
    /***/ },
    /***/ "7a56": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        var global = __webpack_require__("7726");
        var dP = __webpack_require__("86cc");
        var DESCRIPTORS = __webpack_require__("9e1e");
        var SPECIES = __webpack_require__("2b4c")("species");
        module1.exports = function(KEY) {
            var C = global[KEY];
            if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
                configurable: true,
                get: function() {
                    return this;
                }
            });
        };
    /***/ },
    /***/ "7e90": /***/ function(module1, exports, __webpack_require__) {
        var dP = __webpack_require__("d9f6");
        var anObject = __webpack_require__("e4ae");
        var getKeys = __webpack_require__("c3a1");
        module1.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
            anObject(O);
            var keys = getKeys(Properties);
            var length = keys.length;
            var i = 0;
            var P;
            while(length > i)dP.f(O, P = keys[i++], Properties[P]);
            return O;
        };
    /***/ },
    /***/ "7f20": /***/ function(module1, exports, __webpack_require__) {
        var def = __webpack_require__("86cc").f;
        var has = __webpack_require__("69a8");
        var TAG = __webpack_require__("2b4c")("toStringTag");
        module1.exports = function(it, tag, stat) {
            if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
                configurable: true,
                value: tag
            });
        };
    /***/ },
    /***/ "7f7f": /***/ function(module1, exports, __webpack_require__) {
        var dP = __webpack_require__("86cc").f;
        var FProto = Function.prototype;
        var nameRE = /^\s*function ([^ (]*)/;
        var NAME = "name";
        // 19.2.4.2 name
        NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
            configurable: true,
            get: function() {
                try {
                    return ("" + this).match(nameRE)[1];
                } catch (e) {
                    return "";
                }
            }
        });
    /***/ },
    /***/ "8378": /***/ function(module1, exports) {
        var core = module1.exports = {
            version: "2.6.9"
        };
        if (typeof __e == "number") __e = core; // eslint-disable-line no-undef
    /***/ },
    /***/ "8436": /***/ function(module1, exports) {
        module1.exports = function() {};
    /***/ },
    /***/ "84f2": /***/ function(module1, exports) {
        module1.exports = {};
    /***/ },
    /***/ "86cc": /***/ function(module1, exports, __webpack_require__) {
        var anObject = __webpack_require__("cb7c");
        var IE8_DOM_DEFINE = __webpack_require__("c69a");
        var toPrimitive = __webpack_require__("6a99");
        var dP = Object.defineProperty;
        exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE) try {
                return dP(O, P, Attributes);
            } catch (e) {}
            if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
            if ("value" in Attributes) O[P] = Attributes.value;
            return O;
        };
    /***/ },
    /***/ "8b97": /***/ function(module1, exports, __webpack_require__) {
        // Works with __proto__ only. Old v8 can't work with null proto objects.
        /* eslint-disable no-proto */ var isObject = __webpack_require__("d3f4");
        var anObject = __webpack_require__("cb7c");
        var check = function(O, proto) {
            anObject(O);
            if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
        };
        module1.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(test, buggy, set) {
                try {
                    set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, "__proto__").set, 2);
                    set(test, []);
                    buggy = !(test instanceof Array);
                } catch (e) {
                    buggy = true;
                }
                return function setPrototypeOf(O, proto) {
                    check(O, proto);
                    if (buggy) O.__proto__ = proto;
                    else set(O, proto);
                    return O;
                };
            }({}, false) : undefined),
            check: check
        };
    /***/ },
    /***/ "8e60": /***/ function(module1, exports, __webpack_require__) {
        // Thank's IE8 for his funny defineProperty
        module1.exports = !__webpack_require__("294c")(function() {
            return Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a != 7;
        });
    /***/ },
    /***/ "8f60": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        var create = __webpack_require__("a159");
        var descriptor = __webpack_require__("aebd");
        var setToStringTag = __webpack_require__("45f2");
        var IteratorPrototype = {};
        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        __webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")("iterator"), function() {
            return this;
        });
        module1.exports = function(Constructor, NAME, next) {
            Constructor.prototype = create(IteratorPrototype, {
                next: descriptor(1, next)
            });
            setToStringTag(Constructor, NAME + " Iterator");
        };
    /***/ },
    /***/ "9003": /***/ function(module1, exports, __webpack_require__) {
        // 7.2.2 IsArray(argument)
        var cof = __webpack_require__("6b4c");
        module1.exports = Array.isArray || function isArray(arg) {
            return cof(arg) == "Array";
        };
    /***/ },
    /***/ "9093": /***/ function(module1, exports, __webpack_require__) {
        // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
        var $keys = __webpack_require__("ce10");
        var hiddenKeys = __webpack_require__("e11e").concat("length", "prototype");
        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
            return $keys(O, hiddenKeys);
        };
    /***/ },
    /***/ "9138": /***/ function(module1, exports, __webpack_require__) {
        module1.exports = __webpack_require__("35e8");
    /***/ },
    /***/ "9910": /***/ function(module1, exports, __webpack_require__) {
    // extracted by mini-css-extract-plugin
    /***/ },
    /***/ "9aa9": /***/ function(module1, exports) {
        exports.f = Object.getOwnPropertySymbols;
    /***/ },
    /***/ "9b43": /***/ function(module1, exports, __webpack_require__) {
        // optional / simple context binding
        var aFunction = __webpack_require__("d8e8");
        module1.exports = function(fn, that, length) {
            aFunction(fn);
            if (that === undefined) return fn;
            switch(length){
                case 1:
                    return function(a) {
                        return fn.call(that, a);
                    };
                case 2:
                    return function(a, b) {
                        return fn.call(that, a, b);
                    };
                case 3:
                    return function(a, b, c) {
                        return fn.call(that, a, b, c);
                    };
            }
            return function() {
                return fn.apply(that, arguments);
            };
        };
    /***/ },
    /***/ "9c6c": /***/ function(module1, exports, __webpack_require__) {
        // 22.1.3.31 Array.prototype[@@unscopables]
        var UNSCOPABLES = __webpack_require__("2b4c")("unscopables");
        var ArrayProto = Array.prototype;
        if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
        module1.exports = function(key) {
            ArrayProto[UNSCOPABLES][key] = true;
        };
    /***/ },
    /***/ "9def": /***/ function(module1, exports, __webpack_require__) {
        // 7.1.15 ToLength
        var toInteger = __webpack_require__("4588");
        var min = Math.min;
        module1.exports = function(it) {
            return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
        };
    /***/ },
    /***/ "9e1e": /***/ function(module1, exports, __webpack_require__) {
        // Thank's IE8 for his funny defineProperty
        module1.exports = !__webpack_require__("79e5")(function() {
            return Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a != 7;
        });
    /***/ },
    /***/ "a159": /***/ function(module1, exports, __webpack_require__) {
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        var anObject = __webpack_require__("e4ae");
        var dPs = __webpack_require__("7e90");
        var enumBugKeys = __webpack_require__("1691");
        var IE_PROTO = __webpack_require__("5559")("IE_PROTO");
        var Empty = function() {};
        var PROTOTYPE = "prototype";
        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        var createDict = function() {
            // Thrash, waste and sodomy: IE GC bug
            var iframe = __webpack_require__("1ec9")("iframe");
            var i = enumBugKeys.length;
            var lt = "<";
            var gt = ">";
            var iframeDocument;
            iframe.style.display = "none";
            __webpack_require__("32fc").appendChild(iframe);
            iframe.src = "javascript:"; // eslint-disable-line no-script-url
            // createDict = iframe.contentWindow.Object;
            // html.removeChild(iframe);
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
            iframeDocument.close();
            createDict = iframeDocument.F;
            while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
            return createDict();
        };
        module1.exports = Object.create || function create(O, Properties) {
            var result;
            if (O !== null) {
                Empty[PROTOTYPE] = anObject(O);
                result = new Empty();
                Empty[PROTOTYPE] = null;
                // add "__proto__" for Object.getPrototypeOf polyfill
                result[IE_PROTO] = O;
            } else result = createDict();
            return Properties === undefined ? result : dPs(result, Properties);
        };
    /***/ },
    /***/ "a481": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        var anObject = __webpack_require__("cb7c");
        var toObject = __webpack_require__("4bf8");
        var toLength = __webpack_require__("9def");
        var toInteger = __webpack_require__("4588");
        var advanceStringIndex = __webpack_require__("0390");
        var regExpExec = __webpack_require__("5f1b");
        var max = Math.max;
        var min = Math.min;
        var floor = Math.floor;
        var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
        var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;
        var maybeToString = function(it) {
            return it === undefined ? it : String(it);
        };
        // @@replace logic
        __webpack_require__("214f")("replace", 2, function(defined, REPLACE, $replace, maybeCallNative) {
            return [
                // `String.prototype.replace` method
                // https://tc39.github.io/ecma262/#sec-string.prototype.replace
                function replace(searchValue, replaceValue) {
                    var O = defined(this);
                    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
                    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
                },
                // `RegExp.prototype[@@replace]` method
                // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
                function(regexp, replaceValue) {
                    var res = maybeCallNative($replace, regexp, this, replaceValue);
                    if (res.done) return res.value;
                    var rx = anObject(regexp);
                    var S = String(this);
                    var functionalReplace = typeof replaceValue === "function";
                    if (!functionalReplace) replaceValue = String(replaceValue);
                    var global = rx.global;
                    if (global) {
                        var fullUnicode = rx.unicode;
                        rx.lastIndex = 0;
                    }
                    var results = [];
                    while(true){
                        var result = regExpExec(rx, S);
                        if (result === null) break;
                        results.push(result);
                        if (!global) break;
                        var matchStr = String(result[0]);
                        if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                    }
                    var accumulatedResult = "";
                    var nextSourcePosition = 0;
                    for(var i = 0; i < results.length; i++){
                        result = results[i];
                        var matched = String(result[0]);
                        var position = max(min(toInteger(result.index), S.length), 0);
                        var captures = [];
                        // NOTE: This is equivalent to
                        //   captures = result.slice(1).map(maybeToString)
                        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                        for(var j = 1; j < result.length; j++)captures.push(maybeToString(result[j]));
                        var namedCaptures = result.groups;
                        if (functionalReplace) {
                            var replacerArgs = [
                                matched
                            ].concat(captures, position, S);
                            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                            var replacement = String(replaceValue.apply(undefined, replacerArgs));
                        } else replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                        if (position >= nextSourcePosition) {
                            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                            nextSourcePosition = position + matched.length;
                        }
                    }
                    return accumulatedResult + S.slice(nextSourcePosition);
                }
            ];
            // https://tc39.github.io/ecma262/#sec-getsubstitution
            function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
                var tailPos = position + matched.length;
                var m = captures.length;
                var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
                if (namedCaptures !== undefined) {
                    namedCaptures = toObject(namedCaptures);
                    symbols = SUBSTITUTION_SYMBOLS;
                }
                return $replace.call(replacement, symbols, function(match, ch) {
                    var capture;
                    switch(ch.charAt(0)){
                        case "$":
                            return "$";
                        case "&":
                            return matched;
                        case "`":
                            return str.slice(0, position);
                        case "'":
                            return str.slice(tailPos);
                        case "<":
                            capture = namedCaptures[ch.slice(1, -1)];
                            break;
                        default:
                            var n = +ch;
                            if (n === 0) return match;
                            if (n > m) {
                                var f = floor(n / 10);
                                if (f === 0) return match;
                                if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                                return match;
                            }
                            capture = captures[n - 1];
                    }
                    return capture === undefined ? "" : capture;
                });
            }
        });
    /***/ },
    /***/ "aa77": /***/ function(module1, exports, __webpack_require__) {
        var $export = __webpack_require__("5ca1");
        var defined = __webpack_require__("be13");
        var fails = __webpack_require__("79e5");
        var spaces = __webpack_require__("fdef");
        var space = "[" + spaces + "]";
        var non = "​\x85";
        var ltrim = RegExp("^" + space + space + "*");
        var rtrim = RegExp(space + space + "*$");
        var exporter = function(KEY, exec, ALIAS) {
            var exp = {};
            var FORCE = fails(function() {
                return !!spaces[KEY]() || non[KEY]() != non;
            });
            var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
            if (ALIAS) exp[ALIAS] = fn;
            $export($export.P + $export.F * FORCE, "String", exp);
        };
        // 1 -> String#trimLeft
        // 2 -> String#trimRight
        // 3 -> String#trim
        var trim = exporter.trim = function(string, TYPE) {
            string = String(defined(string));
            if (TYPE & 1) string = string.replace(ltrim, "");
            if (TYPE & 2) string = string.replace(rtrim, "");
            return string;
        };
        module1.exports = exporter;
    /***/ },
    /***/ "aae3": /***/ function(module1, exports, __webpack_require__) {
        // 7.2.8 IsRegExp(argument)
        var isObject = __webpack_require__("d3f4");
        var cof = __webpack_require__("2d95");
        var MATCH = __webpack_require__("2b4c")("match");
        module1.exports = function(it) {
            var isRegExp;
            return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == "RegExp");
        };
    /***/ },
    /***/ "ac6a": /***/ function(module1, exports, __webpack_require__) {
        var $iterators = __webpack_require__("cadf");
        var getKeys = __webpack_require__("0d58");
        var redefine = __webpack_require__("2aba");
        var global = __webpack_require__("7726");
        var hide = __webpack_require__("32e9");
        var Iterators = __webpack_require__("84f2");
        var wks = __webpack_require__("2b4c");
        var ITERATOR = wks("iterator");
        var TO_STRING_TAG = wks("toStringTag");
        var ArrayValues = Iterators.Array;
        var DOMIterables = {
            CSSRuleList: true,
            CSSStyleDeclaration: false,
            CSSValueList: false,
            ClientRectList: false,
            DOMRectList: false,
            DOMStringList: false,
            DOMTokenList: true,
            DataTransferItemList: false,
            FileList: false,
            HTMLAllCollection: false,
            HTMLCollection: false,
            HTMLFormElement: false,
            HTMLSelectElement: false,
            MediaList: true,
            MimeTypeArray: false,
            NamedNodeMap: false,
            NodeList: true,
            PaintRequestList: false,
            Plugin: false,
            PluginArray: false,
            SVGLengthList: false,
            SVGNumberList: false,
            SVGPathSegList: false,
            SVGPointList: false,
            SVGStringList: false,
            SVGTransformList: false,
            SourceBufferList: false,
            StyleSheetList: true,
            TextTrackCueList: false,
            TextTrackList: false,
            TouchList: false
        };
        for(var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++){
            var NAME = collections[i];
            var explicit = DOMIterables[NAME];
            var Collection = global[NAME];
            var proto = Collection && Collection.prototype;
            var key;
            if (proto) {
                if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
                if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
                Iterators[NAME] = ArrayValues;
                if (explicit) {
                    for(key in $iterators)if (!proto[key]) redefine(proto, key, $iterators[key], true);
                }
            }
        }
    /***/ },
    /***/ "aebd": /***/ function(module1, exports) {
        module1.exports = function(bitmap, value) {
            return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value: value
            };
        };
    /***/ },
    /***/ "b0c5": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        var regexpExec = __webpack_require__("520a");
        __webpack_require__("5ca1")({
            target: "RegExp",
            proto: true,
            forced: regexpExec !== /./.exec
        }, {
            exec: regexpExec
        });
    /***/ },
    /***/ "b447": /***/ function(module1, exports, __webpack_require__) {
        // 7.1.15 ToLength
        var toInteger = __webpack_require__("3a38");
        var min = Math.min;
        module1.exports = function(it) {
            return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
        };
    /***/ },
    /***/ "b8e3": /***/ function(module1, exports) {
        module1.exports = true;
    /***/ },
    /***/ "be13": /***/ function(module1, exports) {
        // 7.2.1 RequireObjectCoercible(argument)
        module1.exports = function(it) {
            if (it == undefined) throw TypeError("Can't call method on  " + it);
            return it;
        };
    /***/ },
    /***/ "bf0b": /***/ function(module1, exports, __webpack_require__) {
        var pIE = __webpack_require__("355d");
        var createDesc = __webpack_require__("aebd");
        var toIObject = __webpack_require__("36c3");
        var toPrimitive = __webpack_require__("1bc3");
        var has = __webpack_require__("07e3");
        var IE8_DOM_DEFINE = __webpack_require__("794b");
        var gOPD = Object.getOwnPropertyDescriptor;
        exports.f = __webpack_require__("8e60") ? gOPD : function getOwnPropertyDescriptor(O, P) {
            O = toIObject(O);
            P = toPrimitive(P, true);
            if (IE8_DOM_DEFINE) try {
                return gOPD(O, P);
            } catch (e) {}
            if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
        };
    /***/ },
    /***/ "c207": /***/ function(module1, exports) {
    /***/ },
    /***/ "c366": /***/ function(module1, exports, __webpack_require__) {
        // false -> Array#indexOf
        // true  -> Array#includes
        var toIObject = __webpack_require__("6821");
        var toLength = __webpack_require__("9def");
        var toAbsoluteIndex = __webpack_require__("77f1");
        module1.exports = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
                var O = toIObject($this);
                var length = toLength(O.length);
                var index = toAbsoluteIndex(fromIndex, length);
                var value;
                // Array#includes uses SameValueZero equality algorithm
                // eslint-disable-next-line no-self-compare
                if (IS_INCLUDES && el != el) while(length > index){
                    value = O[index++];
                    // eslint-disable-next-line no-self-compare
                    if (value != value) return true;
                // Array#indexOf ignores holes, Array#includes - not
                }
                else for(; length > index; index++)if (IS_INCLUDES || index in O) {
                    if (O[index] === el) return IS_INCLUDES || index || 0;
                }
                return !IS_INCLUDES && -1;
            };
        };
    /***/ },
    /***/ "c367": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        var addToUnscopables = __webpack_require__("8436");
        var step = __webpack_require__("50ed");
        var Iterators = __webpack_require__("481b");
        var toIObject = __webpack_require__("36c3");
        // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()
        module1.exports = __webpack_require__("30f1")(Array, "Array", function(iterated, kind) {
            this._t = toIObject(iterated); // target
            this._i = 0; // next index
            this._k = kind; // kind
        // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
        }, function() {
            var O = this._t;
            var kind = this._k;
            var index = this._i++;
            if (!O || index >= O.length) {
                this._t = undefined;
                return step(1);
            }
            if (kind == "keys") return step(0, index);
            if (kind == "values") return step(0, O[index]);
            return step(0, [
                index,
                O[index]
            ]);
        }, "values");
        // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
        Iterators.Arguments = Iterators.Array;
        addToUnscopables("keys");
        addToUnscopables("values");
        addToUnscopables("entries");
    /***/ },
    /***/ "c3a1": /***/ function(module1, exports, __webpack_require__) {
        // 19.1.2.14 / 15.2.3.14 Object.keys(O)
        var $keys = __webpack_require__("e6f3");
        var enumBugKeys = __webpack_require__("1691");
        module1.exports = Object.keys || function keys(O) {
            return $keys(O, enumBugKeys);
        };
    /***/ },
    /***/ "c5f6": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        var global = __webpack_require__("7726");
        var has = __webpack_require__("69a8");
        var cof = __webpack_require__("2d95");
        var inheritIfRequired = __webpack_require__("5dbc");
        var toPrimitive = __webpack_require__("6a99");
        var fails = __webpack_require__("79e5");
        var gOPN = __webpack_require__("9093").f;
        var gOPD = __webpack_require__("11e9").f;
        var dP = __webpack_require__("86cc").f;
        var $trim = __webpack_require__("aa77").trim;
        var NUMBER = "Number";
        var $Number = global[NUMBER];
        var Base = $Number;
        var proto = $Number.prototype;
        // Opera ~12 has broken Object#toString
        var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
        var TRIM = "trim" in String.prototype;
        // 7.1.3 ToNumber(argument)
        var toNumber = function(argument) {
            var it = toPrimitive(argument, false);
            if (typeof it == "string" && it.length > 2) {
                it = TRIM ? it.trim() : $trim(it, 3);
                var first = it.charCodeAt(0);
                var third, radix, maxCode;
                if (first === 43 || first === 45) {
                    third = it.charCodeAt(2);
                    if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
                } else if (first === 48) {
                    switch(it.charCodeAt(1)){
                        case 66:
                        case 98:
                            radix = 2;
                            maxCode = 49;
                            break; // fast equal /^0b[01]+$/i
                        case 79:
                        case 111:
                            radix = 8;
                            maxCode = 55;
                            break; // fast equal /^0o[0-7]+$/i
                        default:
                            return +it;
                    }
                    for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
                        code = digits.charCodeAt(i);
                        // parseInt parses a string to a first unavailable symbol
                        // but ToNumber should return NaN if a string contains unavailable symbols
                        if (code < 48 || code > maxCode) return NaN;
                    }
                    return parseInt(digits, radix);
                }
            }
            return +it;
        };
        if (!$Number(" 0o1") || !$Number("0b1") || $Number("+0x1")) {
            $Number = function Number1(value) {
                var it = arguments.length < 1 ? 0 : value;
                var that = this;
                return that instanceof $Number && (BROKEN_COF ? fails(function() {
                    proto.valueOf.call(that);
                }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
            };
            for(var keys = __webpack_require__("9e1e") ? gOPN(Base) : // ES3:
            "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), j = 0, key; keys.length > j; j++)if (has(Base, key = keys[j]) && !has($Number, key)) dP($Number, key, gOPD(Base, key));
            $Number.prototype = proto;
            proto.constructor = $Number;
            __webpack_require__("2aba")(global, NUMBER, $Number);
        }
    /***/ },
    /***/ "c69a": /***/ function(module1, exports, __webpack_require__) {
        module1.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function() {
            return Object.defineProperty(__webpack_require__("230e")("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a != 7;
        });
    /***/ },
    /***/ "ca5a": /***/ function(module1, exports) {
        var id = 0;
        var px = Math.random();
        module1.exports = function(key) {
            return "Symbol(".concat(key === undefined ? "" : key, ")_", (++id + px).toString(36));
        };
    /***/ },
    /***/ "cadf": /***/ function(module1, exports, __webpack_require__) {
        "use strict";
        var addToUnscopables = __webpack_require__("9c6c");
        var step = __webpack_require__("d53b");
        var Iterators = __webpack_require__("84f2");
        var toIObject = __webpack_require__("6821");
        // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()
        module1.exports = __webpack_require__("01f9")(Array, "Array", function(iterated, kind) {
            this._t = toIObject(iterated); // target
            this._i = 0; // next index
            this._k = kind; // kind
        // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
        }, function() {
            var O = this._t;
            var kind = this._k;
            var index = this._i++;
            if (!O || index >= O.length) {
                this._t = undefined;
                return step(1);
            }
            if (kind == "keys") return step(0, index);
            if (kind == "values") return step(0, O[index]);
            return step(0, [
                index,
                O[index]
            ]);
        }, "values");
        // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
        Iterators.Arguments = Iterators.Array;
        addToUnscopables("keys");
        addToUnscopables("values");
        addToUnscopables("entries");
    /***/ },
    /***/ "cb7c": /***/ function(module1, exports, __webpack_require__) {
        var isObject = __webpack_require__("d3f4");
        module1.exports = function(it) {
            if (!isObject(it)) throw TypeError(it + " is not an object!");
            return it;
        };
    /***/ },
    /***/ "ccb9": /***/ function(module1, exports, __webpack_require__) {
        exports.f = __webpack_require__("5168");
    /***/ },
    /***/ "cd1c": /***/ function(module1, exports, __webpack_require__) {
        // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
        var speciesConstructor = __webpack_require__("e853");
        module1.exports = function(original, length) {
            return new (speciesConstructor(original))(length);
        };
    /***/ },
    /***/ "ce10": /***/ function(module1, exports, __webpack_require__) {
        var has = __webpack_require__("69a8");
        var toIObject = __webpack_require__("6821");
        var arrayIndexOf = __webpack_require__("c366")(false);
        var IE_PROTO = __webpack_require__("613b")("IE_PROTO");
        module1.exports = function(object, names) {
            var O = toIObject(object);
            var i = 0;
            var result = [];
            var key;
            for(key in O)if (key != IE_PROTO) has(O, key) && result.push(key);
            // Don't enum bug & hidden keys
            while(names.length > i)if (has(O, key = names[i++])) ~arrayIndexOf(result, key) || result.push(key);
            return result;
        };
    /***/ },
    /***/ "d3f4": /***/ function(module1, exports) {
        module1.exports = function(it) {
            return typeof it === "object" ? it !== null : typeof it === "function";
        };
    /***/ },
    /***/ "d53b": /***/ function(module1, exports) {
        module1.exports = function(done, value) {
            return {
                value: value,
                done: !!done
            };
        };
    /***/ },
    /***/ "d864": /***/ function(module1, exports, __webpack_require__) {
        // optional / simple context binding
        var aFunction = __webpack_require__("79aa");
        module1.exports = function(fn, that, length) {
            aFunction(fn);
            if (that === undefined) return fn;
            switch(length){
                case 1:
                    return function(a) {
                        return fn.call(that, a);
                    };
                case 2:
                    return function(a, b) {
                        return fn.call(that, a, b);
                    };
                case 3:
                    return function(a, b, c) {
                        return fn.call(that, a, b, c);
                    };
            }
            return function() {
                return fn.apply(that, arguments);
            };
        };
    /***/ },
    /***/ "d8d6": /***/ function(module1, exports, __webpack_require__) {
        __webpack_require__("1654");
        __webpack_require__("6c1c");
        module1.exports = __webpack_require__("ccb9").f("iterator");
    /***/ },
    /***/ "d8e8": /***/ function(module1, exports) {
        module1.exports = function(it) {
            if (typeof it != "function") throw TypeError(it + " is not a function!");
            return it;
        };
    /***/ },
    /***/ "d9f6": /***/ function(module1, exports, __webpack_require__) {
        var anObject = __webpack_require__("e4ae");
        var IE8_DOM_DEFINE = __webpack_require__("794b");
        var toPrimitive = __webpack_require__("1bc3");
        var dP = Object.defineProperty;
        exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE) try {
                return dP(O, P, Attributes);
            } catch (e) {}
            if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
            if ("value" in Attributes) O[P] = Attributes.value;
            return O;
        };
    /***/ },
    /***/ "dbdb": /***/ function(module1, exports, __webpack_require__) {
        var core = __webpack_require__("584a");
        var global = __webpack_require__("e53d");
        var SHARED = "__core-js_shared__";
        var store = global[SHARED] || (global[SHARED] = {});
        (module1.exports = function(key, value) {
            return store[key] || (store[key] = value !== undefined ? value : {});
        })("versions", []).push({
            version: core.version,
            mode: __webpack_require__("b8e3") ? "pure" : "global",
            copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
        });
    /***/ },
    /***/ "e11e": /***/ function(module1, exports) {
        // IE 8- don't enum bug keys
        module1.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    /***/ },
    /***/ "e4ae": /***/ function(module1, exports, __webpack_require__) {
        var isObject = __webpack_require__("f772");
        module1.exports = function(it) {
            if (!isObject(it)) throw TypeError(it + " is not an object!");
            return it;
        };
    /***/ },
    /***/ "e53d": /***/ function(module1, exports) {
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = module1.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
        if (typeof __g == "number") __g = global; // eslint-disable-line no-undef
    /***/ },
    /***/ "e6f3": /***/ function(module1, exports, __webpack_require__) {
        var has = __webpack_require__("07e3");
        var toIObject = __webpack_require__("36c3");
        var arrayIndexOf = __webpack_require__("5b4e")(false);
        var IE_PROTO = __webpack_require__("5559")("IE_PROTO");
        module1.exports = function(object, names) {
            var O = toIObject(object);
            var i = 0;
            var result = [];
            var key;
            for(key in O)if (key != IE_PROTO) has(O, key) && result.push(key);
            // Don't enum bug & hidden keys
            while(names.length > i)if (has(O, key = names[i++])) ~arrayIndexOf(result, key) || result.push(key);
            return result;
        };
    /***/ },
    /***/ "e853": /***/ function(module1, exports, __webpack_require__) {
        var isObject = __webpack_require__("d3f4");
        var isArray = __webpack_require__("1169");
        var SPECIES = __webpack_require__("2b4c")("species");
        module1.exports = function(original) {
            var C;
            if (isArray(original)) {
                C = original.constructor;
                // cross-realm fallback
                if (typeof C == "function" && (C === Array || isArray(C.prototype))) C = undefined;
                if (isObject(C)) {
                    C = C[SPECIES];
                    if (C === null) C = undefined;
                }
            }
            return C === undefined ? Array : C;
        };
    /***/ },
    /***/ "ebfd": /***/ function(module1, exports, __webpack_require__) {
        var META = __webpack_require__("62a0")("meta");
        var isObject = __webpack_require__("f772");
        var has = __webpack_require__("07e3");
        var setDesc = __webpack_require__("d9f6").f;
        var id = 0;
        var isExtensible = Object.isExtensible || function() {
            return true;
        };
        var FREEZE = !__webpack_require__("294c")(function() {
            return isExtensible(Object.preventExtensions({}));
        });
        var setMeta = function(it) {
            setDesc(it, META, {
                value: {
                    i: "O" + ++id,
                    w: {} // weak collections IDs
                }
            });
        };
        var fastKey = function(it, create) {
            // return primitive with prefix
            if (!isObject(it)) return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
            if (!has(it, META)) {
                // can't set metadata to uncaught frozen object
                if (!isExtensible(it)) return "F";
                // not necessary to add metadata
                if (!create) return "E";
                // add missing metadata
                setMeta(it);
            // return object ID
            }
            return it[META].i;
        };
        var getWeak = function(it, create) {
            if (!has(it, META)) {
                // can't set metadata to uncaught frozen object
                if (!isExtensible(it)) return true;
                // not necessary to add metadata
                if (!create) return false;
                // add missing metadata
                setMeta(it);
            // return hash weak collections IDs
            }
            return it[META].w;
        };
        // add metadata on freeze-family methods calling
        var onFreeze = function(it) {
            if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
            return it;
        };
        var meta = module1.exports = {
            KEY: META,
            NEED: false,
            fastKey: fastKey,
            getWeak: getWeak,
            onFreeze: onFreeze
        };
    /***/ },
    /***/ "f6fd": /***/ function(module1, exports) {
        // document.currentScript polyfill by Adam Miller
        // MIT license
        (function(document1) {
            var currentScript = "currentScript", scripts = document1.getElementsByTagName("script"); // Live NodeList collection
            // If browser needs currentScript polyfill, add get currentScript() to the document object
            if (!(currentScript in document1)) Object.defineProperty(document1, currentScript, {
                get: function() {
                    // IE 6-10 supports script readyState
                    // IE 10+ support stack trace
                    try {
                        throw new Error();
                    } catch (err) {
                        // Find the second match for the "at" string to get file src url from stack.
                        // Specifically works with the format of stack traces in IE.
                        var i, res = (/.*at [^\(]*\((.*):.+:.+\)$/ig.exec(err.stack) || [
                            false
                        ])[1];
                        // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
                        for(i in scripts){
                            if (scripts[i].src == res || scripts[i].readyState == "interactive") return scripts[i];
                        }
                        // If no match, return null
                        return null;
                    }
                }
            });
        })(document);
    /***/ },
    /***/ "f772": /***/ function(module1, exports) {
        module1.exports = function(it) {
            return typeof it === "object" ? it !== null : typeof it === "function";
        };
    /***/ },
    /***/ "f921": /***/ function(module1, exports, __webpack_require__) {
        __webpack_require__("014b");
        __webpack_require__("c207");
        __webpack_require__("69d3");
        __webpack_require__("765d");
        module1.exports = __webpack_require__("584a").Symbol;
    /***/ },
    /***/ "fa5b": /***/ function(module1, exports, __webpack_require__) {
        module1.exports = __webpack_require__("5537")("native-function-to-string", Function.toString);
    /***/ },
    /***/ "fab2": /***/ function(module1, exports, __webpack_require__) {
        var document1 = __webpack_require__("7726").document;
        module1.exports = document1 && document1.documentElement;
    /***/ },
    /***/ "fae3": /***/ function(module1, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
        // This file is imported into lib/wc client bundles.
        if (typeof window !== "undefined") {
            __webpack_require__("f6fd");
            var i;
            if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) __webpack_require__.p = i[1] // eslint-disable-line
            ;
        }
        // Indicate to webpack that this file can be concatenated
        /* harmony default export */ var setPublicPath = null;
        // EXTERNAL MODULE: ./src/assets/lib/lib.scss
        var lib = __webpack_require__("9910");
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1cd3f134-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/BasicSelect.vue?vue&type=template&id=b48f2398&
        var BasicSelectvue_type_template_id_b48f2398_render = function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", {
                staticClass: "ui fluid search selection dropdown",
                class: {
                    "active visible": _vm.showMenu,
                    "error": _vm.isError,
                    "disabled": _vm.isDisabled
                },
                on: {
                    "click": _vm.openOptions,
                    "focus": _vm.openOptions
                }
            }, [
                _c("i", {
                    staticClass: "dropdown icon"
                }),
                _c("input", {
                    ref: "input",
                    staticClass: "search",
                    attrs: {
                        "autocomplete": "off",
                        "tabindex": _vm.isDisabled ? -1 : 0,
                        "id": _vm.id,
                        "name": _vm.name
                    },
                    domProps: {
                        "value": _vm.searchText
                    },
                    on: {
                        "input": function($event) {
                            _vm.searchText = $event.target.value;
                        },
                        "focus": function($event) {
                            $event.preventDefault();
                            return _vm.openOptions($event);
                        },
                        "keyup": [
                            function($event) {
                                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, [
                                    "Esc",
                                    "Escape"
                                ])) return null;
                                return _vm.closeOptions($event);
                            },
                            function($event) {
                                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
                                $event.preventDefault();
                                return _vm.enterItem($event);
                            }
                        ],
                        "blur": _vm.blurInput,
                        "keydown": [
                            function($event) {
                                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "up", 38, $event.key, [
                                    "Up",
                                    "ArrowUp"
                                ])) return null;
                                return _vm.prevItem($event);
                            },
                            function($event) {
                                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "down", 40, $event.key, [
                                    "Down",
                                    "ArrowDown"
                                ])) return null;
                                return _vm.nextItem($event);
                            },
                            function($event) {
                                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
                                $event.preventDefault();
                            },
                            function($event) {
                                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "delete", [
                                    8,
                                    46
                                ], $event.key, [
                                    "Backspace",
                                    "Delete",
                                    "Del"
                                ])) return null;
                                return _vm.deleteTextOrItem($event);
                            }
                        ]
                    }
                }),
                _c("div", {
                    staticClass: "text",
                    class: _vm.textClass,
                    attrs: {
                        "data-vss-custom-attr": _vm.searchTextCustomAttr
                    }
                }, [
                    _vm._v(_vm._s(_vm.inputText) + "\n  ")
                ]),
                _c("div", {
                    ref: "menu",
                    staticClass: "menu",
                    class: _vm.menuClass,
                    style: _vm.menuStyle,
                    attrs: {
                        "tabindex": "-1"
                    },
                    on: {
                        "mousedown": function($event) {
                            $event.preventDefault();
                        }
                    }
                }, _vm._l(_vm.filteredOptions, function(option, idx) {
                    return _c("div", {
                        key: idx,
                        staticClass: "item",
                        class: {
                            "selected": option.selected || _vm.pointer === idx
                        },
                        attrs: {
                            "data-vss-custom-attr": _vm.customAttrs[idx] ? _vm.customAttrs[idx] : ""
                        },
                        on: {
                            "click": function($event) {
                                $event.stopPropagation();
                                return _vm.selectItem(option);
                            },
                            "mousedown": _vm.mousedownItem,
                            "mouseenter": function($event) {
                                return _vm.pointerSet(idx);
                            }
                        }
                    }, [
                        _vm._v("\n      " + _vm._s(option.text) + "\n    ")
                    ]);
                }), 0)
            ]);
        };
        var staticRenderFns = [];
        // CONCATENATED MODULE: ./src/lib/BasicSelect.vue?vue&type=template&id=b48f2398&
        // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find-index.js
        var es6_array_find_index = __webpack_require__("20d6");
        // CONCATENATED MODULE: ./src/lib/common.js
        /* harmony default export */ var common = {
            // cursor on input
            openOptions: function openOptions(self1) {
                self1.$refs.input.focus();
                self1.showMenu = true;
                self1.mousedownState = false;
            },
            blurInput: function blurInput(self1) {
                if (!self1.mousedownState) {
                    self1.searchText = "";
                    self1.closeOptions();
                }
                self1.$emit("blur");
            },
            closeOptions: function closeOptions(self1) {
                self1.showMenu = false;
            },
            /**
   * up arrow key
   * 上の移動するときには新しいscroll位置を毎回セットする
   * Always scroll move, when "up arrow key" entered
   */ prevItem: function prevItem(self1) {
                // set pointer
                var prevIndex = self1.pointer - 1;
                var prevIndexScrollTop = self1.$el.offsetHeight * prevIndex;
                if (prevIndex >= 0) self1.pointer = prevIndex;
                 // move scroll
                self1.$refs.menu.scrollTop = prevIndexScrollTop;
            },
            /**
   *
   * down arrow key
   * ページsizeを計算してずれたらmove
   * calculate page size. If different between itemPage and currentPage move scroll
   */ nextItem: function nextItem(self1) {
                // set pointer
                var nextIndex = self1.pointer + 1;
                var nextIndexScrollTop = self1.$el.offsetHeight * nextIndex;
                if (nextIndex <= self1.filteredOptions.length - 1) self1.pointer = nextIndex;
                 // move scroll
                // const totalHeight = self.filteredOptions.length * self.$el.offsetHeight
                // const totalPage = Math.ceil(totalHeight / pageSizeHeight)
                var currentMenuHeight = self1.$refs.menu.offsetHeight;
                var currentPage = Math.ceil((self1.$refs.menu.scrollTop + self1.$el.offsetHeight) / currentMenuHeight);
                var itemPage = Math.ceil(nextIndexScrollTop / currentMenuHeight);
                if (currentPage !== itemPage) self1.$refs.menu.scrollTop = (itemPage - 1) * self1.$refs.menu.offsetHeight;
            },
            // down enter key
            enterItem: function enterItem(self1) {
                var currentItem = self1.filteredOptions[self1.pointer];
                if (currentItem) self1.selectItem(currentItem);
            },
            // mouse enter event on item
            pointerSet: function pointerSet(self1, index) {
                self1.pointer = index;
            },
            pointerAdjust: function pointerAdjust(self1) {
                if (self1.pointer >= self1.filteredOptions.length - 1) self1.pointer = self1.filteredOptions.length ? self1.filteredOptions.length - 1 : 0;
            },
            mousedownItem: function mousedownItem(self1) {
                self1.mousedownState = true;
            }
        };
        // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
        var es6_regexp_match = __webpack_require__("4917");
        // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
        var es6_regexp_replace = __webpack_require__("a481");
        // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
        var es6_regexp_constructor = __webpack_require__("3b2b");
        // CONCATENATED MODULE: ./src/lib/utils.js
        /**
 * for RegExp escape
 *
 * @param str
 */ function escapedRegExp(str) {
            return new RegExp(str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
        }
        // CONCATENATED MODULE: ./src/lib/mixins/commonMixin.js
        /* mixin for all */ /* harmony default export */ var commonMixin = {
            props: {
                id: {
                    default: null
                },
                name: {
                    type: String,
                    default: ""
                },
                isError: {
                    type: Boolean,
                    default: false
                },
                customAttr: {
                    type: Function,
                    default: function _default() {
                        return "";
                    }
                },
                isDisabled: {
                    type: Boolean,
                    default: false
                },
                placeholder: {
                    type: String,
                    default: ""
                },
                filterPredicate: {
                    type: Function,
                    default: function _default(text, inputText) {
                        return text.match(escapedRegExp(inputText));
                    }
                }
            }
        };
        // CONCATENATED MODULE: ./src/lib/mixins/baseMixin.js
        /* mixin for base component */ /* harmony default export */ var baseMixin = {
            watch: {
                filteredOptions: function filteredOptions() {
                    this.pointerAdjust();
                },
                searchText: function searchText() {
                    this.$emit("searchchange", this.searchText);
                }
            }
        };
        // CONCATENATED MODULE: ./src/lib/mixins/optionAwareMixin.js
        /* harmony default export */ var optionAwareMixin = {
            props: {
                customAttr: {
                    type: Function,
                    default: function _default() {
                        return "";
                    }
                },
                options: {
                    type: Array
                }
            }
        };
        // CONCATENATED MODULE: ./src/lib/mixins/index.js
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/BasicSelect.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        /* harmony default export */ var BasicSelectvue_type_script_lang_js_ = {
            name: "BasicSelect",
            mixins: [
                baseMixin,
                commonMixin,
                optionAwareMixin
            ],
            props: {
                selectedOption: {
                    type: Object,
                    default: function _default() {
                        return {
                            value: "",
                            text: ""
                        };
                    }
                }
            },
            data: function data() {
                return {
                    showMenu: false,
                    searchText: "",
                    mousedownState: false,
                    // mousedown on option menu
                    pointer: -1
                };
            },
            watch: {
                selectedOption: function selectedOption(newValue) {
                    if (newValue && newValue.value) this.pointer = this.filteredOptions.findIndex(function(option) {
                        return option.value === newValue.value;
                    });
                    else this.pointer = -1;
                }
            },
            computed: {
                searchTextCustomAttr: function searchTextCustomAttr() {
                    if (this.selectedOption && this.selectedOption.value) return this.customAttr(this.selectedOption);
                    return "";
                },
                inputText: function inputText() {
                    if (this.searchText) return "";
                    else {
                        var text = this.placeholder;
                        if (this.selectedOption.text) text = this.selectedOption.text;
                        return text;
                    }
                },
                customAttrs: function customAttrs() {
                    var _this = this;
                    try {
                        if (Array.isArray(this.options)) return this.options.map(function(o) {
                            return _this.customAttr(o);
                        });
                    } catch (e) {}
                    return [];
                },
                textClass: function textClass() {
                    if (!this.selectedOption.text && this.placeholder) return "default";
                    else return "";
                },
                menuClass: function menuClass() {
                    return {
                        visible: this.showMenu,
                        hidden: !this.showMenu
                    };
                },
                menuStyle: function menuStyle() {
                    return {
                        display: this.showMenu ? "block" : "none"
                    };
                },
                filteredOptions: function filteredOptions() {
                    var _this2 = this;
                    if (this.searchText) return this.options.filter(function(option) {
                        try {
                            return _this2.filterPredicate(option.text, _this2.searchText);
                        } catch (e) {
                            return true;
                        }
                    });
                    else return this.options;
                }
            },
            methods: {
                deleteTextOrItem: function deleteTextOrItem() {
                    if (!this.searchText && this.selectedOption) {
                        this.selectItem({});
                        this.openOptions();
                    }
                },
                openOptions: function openOptions() {
                    common.openOptions(this);
                },
                blurInput: function blurInput() {
                    common.blurInput(this);
                },
                closeOptions: function closeOptions() {
                    common.closeOptions(this);
                },
                prevItem: function prevItem() {
                    common.prevItem(this);
                },
                nextItem: function nextItem() {
                    common.nextItem(this);
                },
                enterItem: function enterItem() {
                    common.enterItem(this);
                },
                pointerSet: function pointerSet(index) {
                    common.pointerSet(this, index);
                },
                pointerAdjust: function pointerAdjust() {
                    common.pointerAdjust(this);
                },
                mousedownItem: function mousedownItem() {
                    common.mousedownItem(this);
                },
                selectItem: function selectItem(option) {
                    this.searchText = ""; // reset text when select item
                    this.closeOptions();
                    this.$emit("select", option);
                    if (option.value === option.text) this.searchText = option.value;
                }
            }
        };
        // CONCATENATED MODULE: ./src/lib/BasicSelect.vue?vue&type=script&lang=js&
        /* harmony default export */ var lib_BasicSelectvue_type_script_lang_js_ = BasicSelectvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
        /* globals __VUE_SSR_CONTEXT__ */ // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
        // This module is a runtime utility for cleaner component module output and will
        // be included in the final webpack user bundle.
        function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, /* server only */ shadowMode /* vue-cli only */ ) {
            // Vue.extend constructor export interop
            var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
            // render functions
            if (render) {
                options.render = render;
                options.staticRenderFns = staticRenderFns;
                options._compiled = true;
            }
            // functional template
            if (functionalTemplate) options.functional = true;
            // scopedId
            if (scopeId) options._scopeId = "data-v-" + scopeId;
            var hook;
            if (moduleIdentifier) {
                hook = function(context) {
                    // 2.3 injection
                    context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext // functional
                    ;
                    // 2.2 with runInNewContext: true
                    if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") context = __VUE_SSR_CONTEXT__;
                    // inject component styles
                    if (injectStyles) injectStyles.call(this, context);
                    // register component module identifier for async chunk inferrence
                    if (context && context._registeredComponents) context._registeredComponents.add(moduleIdentifier);
                };
                // used by ssr in case component is cached and beforeCreate
                // never gets called
                options._ssrRegister = hook;
            } else if (injectStyles) hook = shadowMode ? function() {
                injectStyles.call(this, this.$root.$options.shadowRoot);
            } : injectStyles;
            if (hook) {
                if (options.functional) {
                    // for template-only hot-reload because in that case the render fn doesn't
                    // go through the normalizer
                    options._injectStyles = hook;
                    // register for functioal component in vue file
                    var originalRender = options.render;
                    options.render = function renderWithStyleInjection(h, context) {
                        hook.call(context);
                        return originalRender(h, context);
                    };
                } else {
                    // inject component registration as beforeCreate hook
                    var existing = options.beforeCreate;
                    options.beforeCreate = existing ? [].concat(existing, hook) : [
                        hook
                    ];
                }
            }
            return {
                exports: scriptExports,
                options: options
            };
        }
        // CONCATENATED MODULE: ./src/lib/BasicSelect.vue
        /* normalize component */ var component = normalizeComponent(lib_BasicSelectvue_type_script_lang_js_, BasicSelectvue_type_template_id_b48f2398_render, staticRenderFns, false, null, null, null);
        /* harmony default export */ var BasicSelect = component.exports;
        // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
        var es6_array_find = __webpack_require__("7514");
        // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
        var web_dom_iterable = __webpack_require__("ac6a");
        // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
        var es6_array_iterator = __webpack_require__("cadf");
        // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
        var es6_object_keys = __webpack_require__("456d");
        // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
        var es6_function_name = __webpack_require__("7f7f");
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/ListSelect.vue?vue&type=script&lang=js&
        /* wrap basic component */ /* harmony default export */ var ListSelectvue_type_script_lang_js_ = {
            name: "ListSelect",
            mixins: [
                commonMixin
            ],
            render: function render(createElement) {
                var _this = this;
                return createElement(BasicSelect, {
                    props: {
                        id: this.id,
                        name: this.name,
                        options: this.options,
                        selectedOption: this.item,
                        isError: this.isError,
                        isDisabled: this.isDisabled,
                        placeholder: this.placeholder,
                        filterPredicate: this.filterPredicate
                    },
                    on: {
                        select: this.onSelect,
                        searchchange: function searchchange(searchText) {
                            return _this.$emit("searchchange", searchText);
                        }
                    }
                });
            },
            props: {
                list: {
                    type: Array
                },
                optionValue: {
                    type: String
                },
                optionText: {
                    type: String
                },
                customText: {
                    type: Function
                },
                selectedItem: {
                    type: Object
                }
            },
            computed: {
                options: function options() {
                    var _this2 = this;
                    return this.list.map(function(e, i) {
                        return {
                            value: e[_this2.optionValue],
                            text: _this2.buildText(e)
                        };
                    });
                },
                item: function item() {
                    if (this.selectedItem) return {
                        value: this.selectedItem[this.optionValue],
                        text: this.buildText(this.selectedItem)
                    };
                    else return {
                        value: "",
                        text: ""
                    };
                }
            },
            methods: {
                buildText: function buildText(e) {
                    if (e[this.optionValue] !== undefined) {
                        if (this.customText) return this.customText(e);
                        else return e[this.optionText];
                    } else return "";
                },
                onSelect: function onSelect(option) {
                    var _this3 = this;
                    if (Object.keys(option).length === 0 && option.constructor === Object) this.$emit("select", option);
                    else {
                        var item = this.list.find(function(e, i) {
                            return e[_this3.optionValue] === option.value;
                        });
                        this.$emit("select", item);
                    }
                }
            },
            components: {
                BasicSelect: BasicSelect
            }
        };
        // CONCATENATED MODULE: ./src/lib/ListSelect.vue?vue&type=script&lang=js&
        /* harmony default export */ var lib_ListSelectvue_type_script_lang_js_ = ListSelectvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/lib/ListSelect.vue
        var ListSelect_render, ListSelect_staticRenderFns;
        /* normalize component */ var ListSelect_component = normalizeComponent(lib_ListSelectvue_type_script_lang_js_, ListSelect_render, ListSelect_staticRenderFns, false, null, null, null);
        /* harmony default export */ var ListSelect = ListSelect_component.exports;
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1cd3f134-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/MultiSelect.vue?vue&type=template&id=10b1b87d&
        var MultiSelectvue_type_template_id_10b1b87d_render = function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", {
                staticClass: "ui fluid search dropdown selection multiple",
                class: {
                    "active visible": _vm.showMenu,
                    "error": _vm.isError,
                    "disabled": _vm.isDisabled
                },
                on: {
                    "click": _vm.openOptions,
                    "focus": _vm.openOptions
                }
            }, [
                _c("i", {
                    staticClass: "dropdown icon"
                }),
                !_vm.hideSelectedOptions ? _vm._l(_vm.selectedOptions, function(option, idx) {
                    return _c("a", {
                        key: idx,
                        staticClass: "ui label transition visible",
                        staticStyle: {
                            "display": "inline-block !important"
                        },
                        attrs: {
                            "data-vss-custom-attr": _vm.customAttr(option)
                        }
                    }, [
                        _vm._v("\n      " + _vm._s(option.text)),
                        _c("i", {
                            staticClass: "delete icon",
                            on: {
                                "click": function($event) {
                                    return _vm.deleteItem(option);
                                }
                            }
                        })
                    ]);
                }) : _vm._e(),
                _c("input", {
                    directives: [
                        {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.searchText,
                            expression: "searchText"
                        }
                    ],
                    ref: "input",
                    staticClass: "search",
                    style: _vm.inputWidth,
                    attrs: {
                        "autocomplete": "off",
                        "tabindex": _vm.isDisabled ? -1 : 0,
                        "id": _vm.id,
                        "name": _vm.name
                    },
                    domProps: {
                        "value": _vm.searchText
                    },
                    on: {
                        "focus": function($event) {
                            $event.preventDefault();
                            return _vm.openOptions($event);
                        },
                        "keyup": [
                            function($event) {
                                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, [
                                    "Esc",
                                    "Escape"
                                ])) return null;
                                return _vm.closeOptions($event);
                            },
                            function($event) {
                                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
                                $event.preventDefault();
                                return _vm.enterItem($event);
                            }
                        ],
                        "blur": _vm.blurInput,
                        "keydown": [
                            function($event) {
                                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "up", 38, $event.key, [
                                    "Up",
                                    "ArrowUp"
                                ])) return null;
                                return _vm.prevItem($event);
                            },
                            function($event) {
                                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "down", 40, $event.key, [
                                    "Down",
                                    "ArrowDown"
                                ])) return null;
                                return _vm.nextItem($event);
                            },
                            function($event) {
                                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
                                $event.preventDefault();
                            },
                            function($event) {
                                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "delete", [
                                    8,
                                    46
                                ], $event.key, [
                                    "Backspace",
                                    "Delete",
                                    "Del"
                                ])) return null;
                                return _vm.deleteTextOrLastItem($event);
                            }
                        ],
                        "input": function($event) {
                            if ($event.target.composing) return;
                            _vm.searchText = $event.target.value;
                        }
                    }
                }),
                _c("div", {
                    staticClass: "text",
                    class: _vm.textClass
                }, [
                    _vm._v(_vm._s(_vm.inputText) + "\n  ")
                ]),
                _c("div", {
                    ref: "menu",
                    staticClass: "menu",
                    class: _vm.menuClass,
                    style: _vm.menuStyle,
                    attrs: {
                        "tabindex": "-1"
                    },
                    on: {
                        "mousedown": function($event) {
                            $event.preventDefault();
                        }
                    }
                }, [
                    _vm._l(_vm.filteredOptions, function(option, idx) {
                        return [
                            _c("div", {
                                key: idx,
                                staticClass: "item",
                                class: {
                                    "selected": option.selected || _vm.pointer === idx
                                },
                                attrs: {
                                    "data-vss-custom-attr": _vm.customAttr(option)
                                },
                                on: {
                                    "click": function($event) {
                                        $event.stopPropagation();
                                        return _vm.selectItem(option);
                                    },
                                    "mousedown": _vm.mousedownItem,
                                    "mouseenter": function($event) {
                                        return _vm.pointerSet(idx);
                                    }
                                }
                            }, [
                                _vm._v("\n        " + _vm._s(option.text) + "\n      ")
                            ])
                        ];
                    })
                ], 2)
            ], 2);
        };
        var MultiSelectvue_type_template_id_10b1b87d_staticRenderFns = [];
        // CONCATENATED MODULE: ./src/lib/MultiSelect.vue?vue&type=template&id=10b1b87d&
        // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
        var es6_regexp_to_string = __webpack_require__("6b54");
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/MultiSelect.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        /* harmony default export */ var MultiSelectvue_type_script_lang_js_ = {
            name: "MultiSelect",
            mixins: [
                baseMixin,
                commonMixin,
                optionAwareMixin
            ],
            props: {
                selectedOptions: {
                    type: Array
                },
                cleanSearch: {
                    type: Boolean,
                    default: true
                },
                hideSelectedOptions: {
                    type: Boolean,
                    default: false
                }
            },
            data: function data() {
                return {
                    showMenu: false,
                    searchText: "",
                    mousedownState: false,
                    // mousedown on option menu
                    pointer: -1
                };
            },
            watch: {
                selectedOptions: function selectedOptions() {
                    this.pointer = -1;
                }
            },
            computed: {
                inputText: function inputText() {
                    if (this.searchText) return "";
                    else return this.placeholder;
                },
                textClass: function textClass() {
                    if (this.placeholder) return "default";
                    else return "";
                },
                inputWidth: function inputWidth() {
                    return {
                        width: (this.searchText.length + 1) * 8 + 20 + "px"
                    };
                },
                menuClass: function menuClass() {
                    return {
                        visible: this.showMenu,
                        hidden: !this.showMenu
                    };
                },
                menuStyle: function menuStyle() {
                    return {
                        display: this.showMenu ? "block" : "none"
                    };
                },
                nonSelectOptions: function nonSelectOptions() {
                    var _this = this;
                    return this.options.filter(function(el) {
                        return _this.selectedOptions.findIndex(function(o) {
                            return o.value === el.value;
                        }) === -1;
                    });
                },
                filteredOptions: function filteredOptions() {
                    var _this2 = this;
                    if (this.searchText) return this.nonSelectOptions.filter(function(option) {
                        try {
                            if (_this2.cleanSearch) return _this2.filterPredicate(_this2.accentsTidy(option.text), _this2.searchText);
                            else return _this2.filterPredicate(option.text, _this2.searchText);
                        } catch (e) {
                            return true;
                        }
                    });
                    else return this.nonSelectOptions;
                }
            },
            methods: {
                deleteTextOrLastItem: function deleteTextOrLastItem() {
                    if (!this.searchText && this.selectedOptions.length > 0) this.deleteItem(this.selectedOptions[this.selectedOptions.length - 1]);
                },
                openOptions: function openOptions() {
                    common.openOptions(this);
                },
                blurInput: function blurInput() {
                    common.blurInput(this);
                },
                closeOptions: function closeOptions() {
                    common.closeOptions(this);
                },
                prevItem: function prevItem() {
                    common.prevItem(this);
                    this.closeOptions();
                    this.openOptions();
                },
                nextItem: function nextItem() {
                    common.nextItem(this);
                    this.closeOptions();
                    this.openOptions();
                },
                enterItem: function enterItem() {
                    common.enterItem(this);
                },
                pointerSet: function pointerSet(index) {
                    common.pointerSet(this, index);
                },
                pointerAdjust: function pointerAdjust() {
                    common.pointerAdjust(this);
                },
                mousedownItem: function mousedownItem() {
                    common.mousedownItem(this);
                },
                selectItem: function selectItem(option) {
                    var tempSelectedOptions = this.selectedOptions.concat(option);
                    var selectedOptions = tempSelectedOptions.filter(function(el, idx) {
                        return tempSelectedOptions.indexOf(el) === idx;
                    });
                    this.closeOptions();
                    this.searchText = "";
                    this.$emit("select", selectedOptions, option, "insert");
                },
                deleteItem: function deleteItem(option) {
                    var selectedOptions = this.selectedOptions.filter(function(o) {
                        return o.value !== option.value;
                    });
                    this.$emit("select", selectedOptions, option, "delete");
                },
                accentsTidy: function accentsTidy(s) {
                    var r = s.toString().toLowerCase();
                    r = r.replace(new RegExp("[\xe0\xe1\xe2\xe3\xe4\xe5]", "g"), "a");
                    r = r.replace(new RegExp("\xe6", "g"), "ae");
                    r = r.replace(new RegExp("\xe7", "g"), "c");
                    r = r.replace(new RegExp("[\xe8\xe9\xea\xeb]", "g"), "e");
                    r = r.replace(new RegExp("[\xec\xed\xee\xef]", "g"), "i");
                    r = r.replace(new RegExp("\xf1", "g"), "n");
                    r = r.replace(new RegExp("[\xf2\xf3\xf4\xf5\xf6]", "g"), "o");
                    r = r.replace(new RegExp("œ", "g"), "oe");
                    r = r.replace(new RegExp("[\xf9\xfa\xfb\xfc]", "g"), "u");
                    r = r.replace(new RegExp("[\xfd\xff]", "g"), "y");
                    return r;
                }
            }
        };
        // CONCATENATED MODULE: ./src/lib/MultiSelect.vue?vue&type=script&lang=js&
        /* harmony default export */ var lib_MultiSelectvue_type_script_lang_js_ = MultiSelectvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/lib/MultiSelect.vue
        /* normalize component */ var MultiSelect_component = normalizeComponent(lib_MultiSelectvue_type_script_lang_js_, MultiSelectvue_type_template_id_10b1b87d_render, MultiSelectvue_type_template_id_10b1b87d_staticRenderFns, false, null, null, null);
        /* harmony default export */ var MultiSelect = MultiSelect_component.exports;
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/MultiListSelect.vue?vue&type=script&lang=js&
        /* harmony default export */ var MultiListSelectvue_type_script_lang_js_ = {
            name: "MultiListSelect",
            mixins: [
                commonMixin
            ],
            render: function render(createElement) {
                var _this = this;
                return createElement(MultiSelect, {
                    props: {
                        id: this.id,
                        name: this.name,
                        options: this.options,
                        selectedOptions: this.items,
                        isError: this.isError,
                        isDisabled: this.isDisabled,
                        placeholder: this.placeholder,
                        filterPredicate: this.filterPredicate
                    },
                    on: {
                        select: this.onSelect,
                        searchchange: function searchchange(searchText) {
                            return _this.$emit("searchchange", searchText);
                        }
                    }
                });
            },
            props: {
                list: {
                    type: Array
                },
                optionValue: {
                    type: String
                },
                optionText: {
                    type: String
                },
                customText: {
                    type: Function
                },
                selectedItems: {
                    type: Array
                }
            },
            computed: {
                options: function options() {
                    var _this2 = this;
                    return this.list.map(function(e) {
                        return {
                            value: e[_this2.optionValue],
                            text: _this2.buildText(e)
                        };
                    });
                },
                items: function items() {
                    var _this3 = this;
                    return this.selectedItems.map(function(e) {
                        return {
                            value: e[_this3.optionValue],
                            text: _this3.buildText(e)
                        };
                    });
                }
            },
            methods: {
                buildText: function buildText(e) {
                    if (e[this.optionValue] !== undefined) {
                        if (this.customText) return this.customText(e);
                        else return e[this.optionText];
                    } else return "";
                },
                onSelect: function onSelect(options, option) {
                    var _this4 = this;
                    if (Object.keys(option).length === 0 && option.constructor === Object) this.$emit("select", options, option);
                    else {
                        var items = this.list.filter(function(e, i) {
                            return options.find(function(o, i) {
                                return e[_this4.optionValue] === o.value;
                            });
                        });
                        var item = this.list.find(function(e) {
                            return e[_this4.optionValue] === option.value;
                        });
                        this.$emit("select", items, item);
                    }
                }
            },
            components: {
                MultiSelect: MultiSelect
            }
        };
        // CONCATENATED MODULE: ./src/lib/MultiListSelect.vue?vue&type=script&lang=js&
        /* harmony default export */ var lib_MultiListSelectvue_type_script_lang_js_ = MultiListSelectvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/lib/MultiListSelect.vue
        var MultiListSelect_render, MultiListSelect_staticRenderFns;
        /* normalize component */ var MultiListSelect_component = normalizeComponent(lib_MultiListSelectvue_type_script_lang_js_, MultiListSelect_render, MultiListSelect_staticRenderFns, false, null, null, null);
        /* harmony default export */ var MultiListSelect = MultiListSelect_component.exports;
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1cd3f134-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/ModelSelect.vue?vue&type=template&id=6d932d12&
        var ModelSelectvue_type_template_id_6d932d12_render = function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", {
                staticClass: "ui fluid search selection dropdown",
                class: {
                    "active visible": _vm.showMenu,
                    "error": _vm.isError,
                    "disabled": _vm.isDisabled
                },
                on: {
                    "click": _vm.openOptions,
                    "focus": _vm.openOptions
                }
            }, [
                _c("i", {
                    staticClass: "dropdown icon"
                }),
                _c("input", {
                    ref: "input",
                    staticClass: "search",
                    attrs: {
                        "autocomplete": "off",
                        "tabindex": _vm.isDisabled ? -1 : 0,
                        "id": _vm.id,
                        "name": _vm.name
                    },
                    domProps: {
                        "value": _vm.searchText
                    },
                    on: {
                        "input": function($event) {
                            _vm.searchText = $event.target.value;
                        },
                        "focus": function($event) {
                            $event.preventDefault();
                            return _vm.openOptions($event);
                        },
                        "keyup": [
                            function($event) {
                                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, [
                                    "Esc",
                                    "Escape"
                                ])) return null;
                                return _vm.closeOptions($event);
                            },
                            function($event) {
                                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
                                $event.preventDefault();
                                return _vm.enterItem($event);
                            }
                        ],
                        "blur": _vm.blurInput,
                        "keydown": [
                            function($event) {
                                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "up", 38, $event.key, [
                                    "Up",
                                    "ArrowUp"
                                ])) return null;
                                return _vm.prevItem($event);
                            },
                            function($event) {
                                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "down", 40, $event.key, [
                                    "Down",
                                    "ArrowDown"
                                ])) return null;
                                return _vm.nextItem($event);
                            },
                            function($event) {
                                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
                                $event.preventDefault();
                            },
                            function($event) {
                                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "delete", [
                                    8,
                                    46
                                ], $event.key, [
                                    "Backspace",
                                    "Delete",
                                    "Del"
                                ])) return null;
                                return _vm.deleteTextOrItem($event);
                            }
                        ]
                    }
                }),
                _c("div", {
                    staticClass: "text",
                    class: _vm.textClass,
                    attrs: {
                        "data-vss-custom-attr": _vm.searchTextCustomAttr
                    }
                }, [
                    _vm._v(_vm._s(_vm.inputText) + "\n  ")
                ]),
                _c("div", {
                    ref: "menu",
                    staticClass: "menu",
                    class: _vm.menuClass,
                    style: _vm.menuStyle,
                    attrs: {
                        "tabindex": "-1"
                    },
                    on: {
                        "mousedown": function($event) {
                            $event.preventDefault();
                        }
                    }
                }, _vm._l(_vm.filteredOptions, function(option, idx) {
                    return _c("div", {
                        key: idx,
                        staticClass: "item",
                        class: {
                            "selected": option.selected || _vm.pointer === idx
                        },
                        attrs: {
                            "data-vss-custom-attr": _vm.customAttrs[idx] ? _vm.customAttrs[idx] : ""
                        },
                        on: {
                            "click": function($event) {
                                $event.stopPropagation();
                                return _vm.selectItem(option);
                            },
                            "mousedown": _vm.mousedownItem,
                            "mouseenter": function($event) {
                                return _vm.pointerSet(idx);
                            }
                        }
                    }, [
                        _vm._v("\n      " + _vm._s(option.text) + "\n    ")
                    ]);
                }), 0)
            ]);
        };
        var ModelSelectvue_type_template_id_6d932d12_staticRenderFns = [];
        // CONCATENATED MODULE: ./src/lib/ModelSelect.vue?vue&type=template&id=6d932d12&
        // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
        var iterator = __webpack_require__("5d58");
        var iterator_default = /*#__PURE__*/ __webpack_require__.n(iterator);
        // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
        var symbol = __webpack_require__("67bb");
        var symbol_default = /*#__PURE__*/ __webpack_require__.n(symbol);
        // CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js
        function typeof_typeof2(obj) {
            if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") typeof_typeof2 = function _typeof2(obj) {
                return typeof obj;
            };
            else typeof_typeof2 = function _typeof2(obj) {
                return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj;
            };
            return typeof_typeof2(obj);
        }
        function typeof_typeof(obj) {
            if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") typeof_typeof = function _typeof(obj) {
                return typeof_typeof2(obj);
            };
            else typeof_typeof = function _typeof(obj) {
                return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
            };
            return typeof_typeof(obj);
        }
        // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
        var es6_number_constructor = __webpack_require__("c5f6");
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/ModelSelect.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        /* harmony default export */ var ModelSelectvue_type_script_lang_js_ = {
            name: "ModelSelect",
            mixins: [
                baseMixin,
                commonMixin,
                optionAwareMixin
            ],
            props: {
                value: {
                    type: [
                        String,
                        Number,
                        Object,
                        Boolean
                    ]
                }
            },
            data: function data() {
                return {
                    showMenu: false,
                    searchText: "",
                    mousedownState: false,
                    // mousedown on option menu
                    pointer: -1
                };
            },
            watch: {
                value: function value(newValue) {
                    var _this = this;
                    this.pointer = this.filteredOptions.findIndex(function(option) {
                        return option.value === _this.optionValue(newValue);
                    });
                }
            },
            computed: {
                searchTextCustomAttr: function searchTextCustomAttr() {
                    if (this.selectedOption && this.selectedOption.value) return this.customAttr(this.selectedOption);
                    return "";
                },
                inputText: function inputText() {
                    if (this.searchText) return "";
                    else {
                        var text = this.placeholder;
                        if (this.selectedOption) text = this.selectedOption.text;
                        return text;
                    }
                },
                customAttrs: function customAttrs() {
                    var _this2 = this;
                    try {
                        if (Array.isArray(this.options)) return this.options.map(function(o) {
                            return _this2.customAttr(o);
                        });
                    } catch (e) {}
                    return [];
                },
                textClass: function textClass() {
                    if (!this.selectedOption && this.placeholder) return "default";
                    else return "";
                },
                menuClass: function menuClass() {
                    return {
                        visible: this.showMenu,
                        hidden: !this.showMenu
                    };
                },
                menuStyle: function menuStyle() {
                    return {
                        display: this.showMenu ? "block" : "none"
                    };
                },
                filteredOptions: function filteredOptions() {
                    var _this3 = this;
                    if (this.searchText) return this.options.filter(function(option) {
                        try {
                            return _this3.filterPredicate(option.text, _this3.searchText);
                        } catch (e) {
                            return true;
                        }
                    });
                    else return this.options;
                },
                selectedOption: function selectedOption() {
                    var _this4 = this;
                    return this.options.find(function(option) {
                        return option.value === _this4.optionValue(_this4.value);
                    });
                }
            },
            methods: {
                deleteTextOrItem: function deleteTextOrItem() {
                    if (!this.searchText && this.value) {
                        this.selectItem({});
                        this.openOptions();
                    }
                },
                openOptions: function openOptions() {
                    common.openOptions(this);
                },
                blurInput: function blurInput() {
                    common.blurInput(this);
                },
                closeOptions: function closeOptions() {
                    common.closeOptions(this);
                },
                prevItem: function prevItem() {
                    common.prevItem(this);
                },
                nextItem: function nextItem() {
                    common.nextItem(this);
                },
                enterItem: function enterItem() {
                    common.enterItem(this);
                },
                pointerSet: function pointerSet(index) {
                    common.pointerSet(this, index);
                },
                pointerAdjust: function pointerAdjust() {
                    common.pointerAdjust(this);
                },
                mousedownItem: function mousedownItem() {
                    common.mousedownItem(this);
                },
                selectItem: function selectItem(option) {
                    this.searchText = "";
                    this.closeOptions();
                    if (typeof_typeof(this.value) === "object" && this.value) this.$emit("input", option);
                    else {
                        this.$emit("input", option.value);
                        if (option.value === option.text) this.searchText = option.value;
                    }
                },
                optionValue: function optionValue(value) {
                    if (typeof_typeof(value) === "object" && value !== null) return value.value;
                    else return value;
                }
            }
        };
        // CONCATENATED MODULE: ./src/lib/ModelSelect.vue?vue&type=script&lang=js&
        /* harmony default export */ var lib_ModelSelectvue_type_script_lang_js_ = ModelSelectvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/lib/ModelSelect.vue
        /* normalize component */ var ModelSelect_component = normalizeComponent(lib_ModelSelectvue_type_script_lang_js_, ModelSelectvue_type_template_id_6d932d12_render, ModelSelectvue_type_template_id_6d932d12_staticRenderFns, false, null, null, null);
        /* harmony default export */ var ModelSelect = ModelSelect_component.exports;
        // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/ModelListSelect.vue?vue&type=script&lang=js&
        /* wrap basic component */ /* harmony default export */ var ModelListSelectvue_type_script_lang_js_ = {
            name: "ModelListSelect",
            mixins: [
                commonMixin
            ],
            render: function render(createElement) {
                var _this = this;
                return createElement(ModelSelect, {
                    props: {
                        id: this.id,
                        name: this.name,
                        options: this.options,
                        value: this.innerValue,
                        isError: this.isError,
                        isDisabled: this.isDisabled,
                        placeholder: this.placeholder,
                        filterPredicate: this.filterPredicate
                    },
                    on: {
                        input: this.onInput,
                        searchchange: function searchchange(searchText) {
                            return _this.$emit("searchchange", searchText);
                        }
                    }
                });
            },
            props: {
                list: {
                    type: Array
                },
                optionValue: {
                    type: String
                },
                optionText: {
                    type: String
                },
                customText: {
                    type: Function
                },
                /* null also object */ value: {
                    type: [
                        String,
                        Number,
                        Object,
                        Boolean
                    ]
                }
            },
            computed: {
                options: function options() {
                    var _this2 = this;
                    return this.list.map(function(e) {
                        return {
                            value: e[_this2.optionValue],
                            text: _this2.buildText(e)
                        };
                    });
                },
                innerValue: function innerValue() {
                    if (!this.value) // If js Falsy, type can not judge type. Send value to child directly
                    return this.value;
                    else if (typeof_typeof(this.value) === "object") {
                        if (this.value) return {
                            value: this.value[this.optionValue],
                            text: this.buildText(this.value)
                        };
                        else return {
                            value: "",
                            text: ""
                        };
                    } else return this.value;
                }
            },
            methods: {
                buildText: function buildText(e) {
                    if (e[this.optionValue] !== undefined) {
                        if (this.customText) return this.customText(e);
                        else return e[this.optionText];
                    } else return "";
                },
                onInput: function onInput(option) {
                    var _this3 = this;
                    if (option === undefined) return this.$emit("input", "");
                    if (Object.keys(option).length === 0 && option.constructor === Object) this.$emit("input", option);
                    else if (typeof_typeof(option) === "object") {
                        var item = this.list.find(function(e) {
                            return e[_this3.optionValue] === option.value;
                        });
                        this.$emit("input", item);
                    } else this.$emit("input", option);
                }
            },
            components: {
                ModelSelect: ModelSelect
            }
        };
        // CONCATENATED MODULE: ./src/lib/ModelListSelect.vue?vue&type=script&lang=js&
        /* harmony default export */ var lib_ModelListSelectvue_type_script_lang_js_ = ModelListSelectvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./src/lib/ModelListSelect.vue
        var ModelListSelect_render, ModelListSelect_staticRenderFns;
        /* normalize component */ var ModelListSelect_component = normalizeComponent(lib_ModelListSelectvue_type_script_lang_js_, ModelListSelect_render, ModelListSelect_staticRenderFns, false, null, null, null);
        /* harmony default export */ var ModelListSelect = ModelListSelect_component.exports;
        // CONCATENATED MODULE: ./src/lib/index.js
        // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
        /* concated harmony reexport BasicSelect */ __webpack_require__.d(__webpack_exports__, "BasicSelect", function() {
            return BasicSelect;
        });
        /* concated harmony reexport MultiSelect */ __webpack_require__.d(__webpack_exports__, "MultiSelect", function() {
            return MultiSelect;
        });
        /* concated harmony reexport ListSelect */ __webpack_require__.d(__webpack_exports__, "ListSelect", function() {
            return ListSelect;
        });
        /* concated harmony reexport MultiListSelect */ __webpack_require__.d(__webpack_exports__, "MultiListSelect", function() {
            return MultiListSelect;
        });
        /* concated harmony reexport ModelSelect */ __webpack_require__.d(__webpack_exports__, "ModelSelect", function() {
            return ModelSelect;
        });
        /* concated harmony reexport ModelListSelect */ __webpack_require__.d(__webpack_exports__, "ModelListSelect", function() {
            return ModelListSelect;
        });
    /***/ },
    /***/ "fdef": /***/ function(module1, exports) {
        module1.exports = "	\n\v\f\r \xa0 ᠎             　\u2028\u2029\uFEFF";
    /***/ }
});

},{}],"evi43":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", null, "Hello " + (0, _vue.toDisplayString)($data.name) + "!", 1 /* TEXT */ );
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender("154ed5-hmr", render);
});

},{"vue":"gzxs9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h0MjM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d8qyu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vuex = require("vuex");
var _vuexDefault = parcelHelpers.interopDefault(_vuex);
var _googleFontsHelperMain = require("../src/google-fonts-helper-main");
// import VuexPersistence from 'vuex-persist'
// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
// });
const store = new (0, _vuexDefault.default).Store({
    state: {
        grid: {
            data: [],
            showSearchBar: true
        },
        editingTableId: null,
        tableTitle: "",
        tableList: [],
        pageTitle: "WP Spreadsheet & Table Builder",
        currentStyle: "Style 1",
        showSettings: false,
        fontSettings: [
            "Montserrat",
            "20px",
            "400"
        ],
        tableBodyFontSettings: [
            "Montserrat",
            "20px",
            "400"
        ],
        settingsItemProps: {
            tableHeaderBg: "#4A5568",
            tableRowsBg: "#EDF2F7",
            tableCellsBorderBg: "#FFFFFF",
            tableHeaderTextColor: "#FFFFFF",
            tableRowsTextColor: "#000000",
            addBorderToTableCells: false
        },
        fontUrls: []
    },
    mutations: {
        updateGrid (state, newData) {
            var maxColumnLength = 0;
            if (!newData.length) return;
            newData.forEach(function(r) {
                if (maxColumnLength < r.length) maxColumnLength = r.length;
            });
            for(var i = newData[0].length; i < maxColumnLength; ++i)newData[0][i] = "";
            state.grid.data = newData;
        },
        setSettingsModalStatus (state, status) {
            state.showSettings = status;
        },
        setTitle (state, title) {
            state.tableTitle = title;
        },
        setEditingTableId (state, tableId) {
            state.editingTableId = tableId;
        },
        availableTables (state, data) {
            state.tableList = data;
        },
        setPageTitle (state, data) {
            state.pageTitle = data;
        },
        updatefontSettings (state, data) {
            state.fontSettings = data;
            console.log((0, _googleFontsHelperMain.constructURL)({
                families: {
                    [data[0]]: {
                        wght: [
                            400
                        ],
                        ital: [
                            100,
                            400
                        ]
                    }
                }
            }));
        },
        updateTableBodyfontSettings (state, data) {
            state.tableBodyFontSettings = data;
            console.log((0, _googleFontsHelperMain.constructURL)({
                families: {
                    [data[0]]: {
                        wght: [
                            400
                        ],
                        ital: [
                            100,
                            400
                        ]
                    }
                }
            }));
        },
        updateFontUrls (state, data) {
            state.fontUrls = data;
        },
        updateSettingsByKey (state, args) {
            // let tmpSettings = state.settingsItemProps;
            let { key , value  } = args;
            // tmpSettings[key] = 
            state.settingsItemProps[key] = value;
        },
        updateSettings (state, data) {
            state.settingsItemProps = data;
        }
    }
});
exports.default = store;

},{"vuex":"hVwIp","../src/google-fonts-helper-main":"eQb85","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hVwIp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Store", ()=>Store);
parcelHelpers.export(exports, "createLogger", ()=>createLogger);
parcelHelpers.export(exports, "createNamespacedHelpers", ()=>createNamespacedHelpers);
parcelHelpers.export(exports, "createStore", ()=>createStore);
parcelHelpers.export(exports, "mapActions", ()=>mapActions);
parcelHelpers.export(exports, "mapGetters", ()=>mapGetters);
parcelHelpers.export(exports, "mapMutations", ()=>mapMutations);
parcelHelpers.export(exports, "mapState", ()=>mapState);
parcelHelpers.export(exports, "storeKey", ()=>storeKey);
parcelHelpers.export(exports, "useStore", ()=>useStore);
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */ var _vue = require("vue");
var _devtoolsApi = require("@vue/devtools-api");
var storeKey = "store";
function useStore(key) {
    if (key === void 0) key = null;
    return (0, _vue.inject)(key !== null ? key : storeKey);
}
/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */ function find(list, f) {
    return list.filter(f)[0];
}
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */ function deepCopy(obj, cache) {
    if (cache === void 0) cache = [];
    // just return if obj is immutable value
    if (obj === null || typeof obj !== "object") return obj;
    // if obj is hit, it is in circular structure
    var hit = find(cache, function(c) {
        return c.original === obj;
    });
    if (hit) return hit.copy;
    var copy = Array.isArray(obj) ? [] : {};
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
        original: obj,
        copy: copy
    });
    Object.keys(obj).forEach(function(key) {
        copy[key] = deepCopy(obj[key], cache);
    });
    return copy;
}
/**
 * forEach for object
 */ function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
        return fn(obj[key], key);
    });
}
function isObject(obj) {
    return obj !== null && typeof obj === "object";
}
function isPromise(val) {
    return val && typeof val.then === "function";
}
function assert(condition, msg) {
    if (!condition) throw new Error("[vuex] " + msg);
}
function partial(fn, arg) {
    return function() {
        return fn(arg);
    };
}
function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    return function() {
        var i = subs.indexOf(fn);
        if (i > -1) subs.splice(i, 1);
    };
}
function resetStore(store, hot) {
    store._actions = Object.create(null);
    store._mutations = Object.create(null);
    store._wrappedGetters = Object.create(null);
    store._modulesNamespaceMap = Object.create(null);
    var state = store.state;
    // init all modules
    installModule(store, state, [], store._modules.root, true);
    // reset state
    resetStoreState(store, state, hot);
}
function resetStoreState(store, state, hot) {
    var oldState = store._state;
    // bind store public getters
    store.getters = {};
    // reset local getters cache
    store._makeLocalGettersCache = Object.create(null);
    var wrappedGetters = store._wrappedGetters;
    var computedObj = {};
    forEachValue(wrappedGetters, function(fn, key) {
        // use computed to leverage its lazy-caching mechanism
        // direct inline function use will lead to closure preserving oldState.
        // using partial to return function with only arguments preserved in closure environment.
        computedObj[key] = partial(fn, store);
        Object.defineProperty(store.getters, key, {
            // TODO: use `computed` when it's possible. at the moment we can't due to
            // https://github.com/vuejs/vuex/pull/1883
            get: function() {
                return computedObj[key]();
            },
            enumerable: true // for local getters
        });
    });
    store._state = (0, _vue.reactive)({
        data: state
    });
    // enable strict mode for new state
    if (store.strict) enableStrictMode(store);
    if (oldState) {
        if (hot) // dispatch changes in all subscribed watchers
        // to force getter re-evaluation for hot reloading.
        store._withCommit(function() {
            oldState.data = null;
        });
    }
}
function installModule(store, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store._modules.getNamespace(path);
    // register in namespace map
    if (module.namespaced) {
        if (store._modulesNamespaceMap[namespace] && true) console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
        store._modulesNamespaceMap[namespace] = module;
    }
    // set state
    if (!isRoot && !hot) {
        var parentState = getNestedState(rootState, path.slice(0, -1));
        var moduleName = path[path.length - 1];
        store._withCommit(function() {
            if (moduleName in parentState) console.warn('[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"');
            parentState[moduleName] = module.state;
        });
    }
    var local = module.context = makeLocalContext(store, namespace, path);
    module.forEachMutation(function(mutation, key) {
        var namespacedType = namespace + key;
        registerMutation(store, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
        var type = action.root ? key : namespace + key;
        var handler = action.handler || action;
        registerAction(store, type, handler, local);
    });
    module.forEachGetter(function(getter, key) {
        var namespacedType = namespace + key;
        registerGetter(store, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
        installModule(store, rootState, path.concat(key), child, hot);
    });
}
/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */ function makeLocalContext(store, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
        dispatch: noNamespace ? store.dispatch : function(_type, _payload, _options) {
            var args = unifyObjectStyle(_type, _payload, _options);
            var payload = args.payload;
            var options = args.options;
            var type = args.type;
            if (!options || !options.root) {
                type = namespace + type;
                if (!store._actions[type]) {
                    console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
                    return;
                }
            }
            return store.dispatch(type, payload);
        },
        commit: noNamespace ? store.commit : function(_type, _payload, _options) {
            var args = unifyObjectStyle(_type, _payload, _options);
            var payload = args.payload;
            var options = args.options;
            var type = args.type;
            if (!options || !options.root) {
                type = namespace + type;
                if (!store._mutations[type]) {
                    console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
                    return;
                }
            }
            store.commit(type, payload, options);
        }
    };
    // getters and state object must be gotten lazily
    // because they will be changed by state update
    Object.defineProperties(local, {
        getters: {
            get: noNamespace ? function() {
                return store.getters;
            } : function() {
                return makeLocalGetters(store, namespace);
            }
        },
        state: {
            get: function() {
                return getNestedState(store.state, path);
            }
        }
    });
    return local;
}
function makeLocalGetters(store, namespace) {
    if (!store._makeLocalGettersCache[namespace]) {
        var gettersProxy = {};
        var splitPos = namespace.length;
        Object.keys(store.getters).forEach(function(type) {
            // skip if the target getter is not match this namespace
            if (type.slice(0, splitPos) !== namespace) return;
            // extract local getter type
            var localType = type.slice(splitPos);
            // Add a port to the getters proxy.
            // Define as getter property because
            // we do not want to evaluate the getters in this time.
            Object.defineProperty(gettersProxy, localType, {
                get: function() {
                    return store.getters[type];
                },
                enumerable: true
            });
        });
        store._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store._makeLocalGettersCache[namespace];
}
function registerMutation(store, type, handler, local) {
    var entry = store._mutations[type] || (store._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
        handler.call(store, local.state, payload);
    });
}
function registerAction(store, type, handler, local) {
    var entry = store._actions[type] || (store._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
        var res = handler.call(store, {
            dispatch: local.dispatch,
            commit: local.commit,
            getters: local.getters,
            state: local.state,
            rootGetters: store.getters,
            rootState: store.state
        }, payload);
        if (!isPromise(res)) res = Promise.resolve(res);
        if (store._devtoolHook) return res.catch(function(err) {
            store._devtoolHook.emit("vuex:error", err);
            throw err;
        });
        else return res;
    });
}
function registerGetter(store, type, rawGetter, local) {
    if (store._wrappedGetters[type]) {
        console.error("[vuex] duplicate getter key: " + type);
        return;
    }
    store._wrappedGetters[type] = function wrappedGetter(store) {
        return rawGetter(local.state, local.getters, store.state, store.getters // root getters
        );
    };
}
function enableStrictMode(store) {
    (0, _vue.watch)(function() {
        return store._state.data;
    }, function() {
        assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }, {
        deep: true,
        flush: "sync"
    });
}
function getNestedState(state, path) {
    return path.reduce(function(state, key) {
        return state[key];
    }, state);
}
function unifyObjectStyle(type, payload, options) {
    if (isObject(type) && type.type) {
        options = payload;
        payload = type;
        type = type.type;
    }
    assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    return {
        type: type,
        payload: payload,
        options: options
    };
}
var LABEL_VUEX_BINDINGS = "vuex bindings";
var MUTATIONS_LAYER_ID = "vuex:mutations";
var ACTIONS_LAYER_ID = "vuex:actions";
var INSPECTOR_ID = "vuex";
var actionId = 0;
function addDevtools(app, store) {
    (0, _devtoolsApi.setupDevtoolsPlugin)({
        id: "org.vuejs.vuex",
        app: app,
        label: "Vuex",
        homepage: "https://next.vuex.vuejs.org/",
        logo: "https://vuejs.org/images/icons/favicon-96x96.png",
        packageName: "vuex",
        componentStateTypes: [
            LABEL_VUEX_BINDINGS
        ]
    }, function(api) {
        api.addTimelineLayer({
            id: MUTATIONS_LAYER_ID,
            label: "Vuex Mutations",
            color: COLOR_LIME_500
        });
        api.addTimelineLayer({
            id: ACTIONS_LAYER_ID,
            label: "Vuex Actions",
            color: COLOR_LIME_500
        });
        api.addInspector({
            id: INSPECTOR_ID,
            label: "Vuex",
            icon: "storage",
            treeFilterPlaceholder: "Filter stores..."
        });
        api.on.getInspectorTree(function(payload) {
            if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
                if (payload.filter) {
                    var nodes = [];
                    flattenStoreForInspectorTree(nodes, store._modules.root, payload.filter, "");
                    payload.rootNodes = nodes;
                } else payload.rootNodes = [
                    formatStoreForInspectorTree(store._modules.root, "")
                ];
            }
        });
        api.on.getInspectorState(function(payload) {
            if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
                var modulePath = payload.nodeId;
                makeLocalGetters(store, modulePath);
                payload.state = formatStoreForInspectorState(getStoreModule(store._modules, modulePath), modulePath === "root" ? store.getters : store._makeLocalGettersCache, modulePath);
            }
        });
        api.on.editInspectorState(function(payload) {
            if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
                var modulePath = payload.nodeId;
                var path = payload.path;
                if (modulePath !== "root") path = modulePath.split("/").filter(Boolean).concat(path);
                store._withCommit(function() {
                    payload.set(store._state.data, path, payload.state.value);
                });
            }
        });
        store.subscribe(function(mutation, state) {
            var data = {};
            if (mutation.payload) data.payload = mutation.payload;
            data.state = state;
            api.notifyComponentUpdate();
            api.sendInspectorTree(INSPECTOR_ID);
            api.sendInspectorState(INSPECTOR_ID);
            api.addTimelineEvent({
                layerId: MUTATIONS_LAYER_ID,
                event: {
                    time: Date.now(),
                    title: mutation.type,
                    data: data
                }
            });
        });
        store.subscribeAction({
            before: function(action, state) {
                var data = {};
                if (action.payload) data.payload = action.payload;
                action._id = actionId++;
                action._time = Date.now();
                data.state = state;
                api.addTimelineEvent({
                    layerId: ACTIONS_LAYER_ID,
                    event: {
                        time: action._time,
                        title: action.type,
                        groupId: action._id,
                        subtitle: "start",
                        data: data
                    }
                });
            },
            after: function(action, state) {
                var data = {};
                var duration = Date.now() - action._time;
                data.duration = {
                    _custom: {
                        type: "duration",
                        display: duration + "ms",
                        tooltip: "Action duration",
                        value: duration
                    }
                };
                if (action.payload) data.payload = action.payload;
                data.state = state;
                api.addTimelineEvent({
                    layerId: ACTIONS_LAYER_ID,
                    event: {
                        time: Date.now(),
                        title: action.type,
                        groupId: action._id,
                        subtitle: "end",
                        data: data
                    }
                });
            }
        });
    });
}
// extracted from tailwind palette
var COLOR_LIME_500 = 0x84cc16;
var COLOR_DARK = 0x666666;
var COLOR_WHITE = 0xffffff;
var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
};
/**
 * @param {string} path
 */ function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
}
/**
 * @param {*} module
 * @return {import('@vue/devtools-api').CustomInspectorNode}
 */ function formatStoreForInspectorTree(module, path) {
    return {
        id: path || "root",
        // all modules end with a `/`, we want the last segment only
        // cart/ -> cart
        // nested/cart/ -> cart
        label: extractNameFromPath(path),
        tags: module.namespaced ? [
            TAG_NAMESPACED
        ] : [],
        children: Object.keys(module._children).map(function(moduleName) {
            return formatStoreForInspectorTree(module._children[moduleName], path + moduleName + "/");
        })
    };
}
/**
 * @param {import('@vue/devtools-api').CustomInspectorNode[]} result
 * @param {*} module
 * @param {string} filter
 * @param {string} path
 */ function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [
            TAG_NAMESPACED
        ] : []
    });
    Object.keys(module._children).forEach(function(moduleName) {
        flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
}
/**
 * @param {*} module
 * @return {import('@vue/devtools-api').CustomInspectorState}
 */ function formatStoreForInspectorState(module, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
        state: Object.keys(module.state).map(function(key) {
            return {
                key: key,
                editable: true,
                value: module.state[key]
            };
        })
    };
    if (gettersKeys.length) {
        var tree = transformPathsToObjectTree(getters);
        storeState.getters = Object.keys(tree).map(function(key) {
            return {
                key: key.endsWith("/") ? extractNameFromPath(key) : key,
                editable: false,
                value: canThrow(function() {
                    return tree[key];
                })
            };
        });
    }
    return storeState;
}
function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
        var path = key.split("/");
        if (path.length > 1) {
            var target = result;
            var leafKey = path.pop();
            path.forEach(function(p) {
                if (!target[p]) target[p] = {
                    _custom: {
                        value: {},
                        display: p,
                        tooltip: "Module",
                        abstract: true
                    }
                };
                target = target[p]._custom.value;
            });
            target[leafKey] = canThrow(function() {
                return getters[key];
            });
        } else result[key] = canThrow(function() {
            return getters[key];
        });
    });
    return result;
}
function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n) {
        return n;
    });
    return names.reduce(function(module, moduleName, i) {
        var child = module[moduleName];
        if (!child) throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
        return i === names.length - 1 ? child : child._children;
    }, path === "root" ? moduleMap : moduleMap.root._children);
}
function canThrow(cb) {
    try {
        return cb();
    } catch (e) {
        return e;
    }
}
// Base data struct for store's module, package with some attribute and method
var Module = function Module(rawModule, runtime) {
    this.runtime = runtime;
    // Store some children item
    this._children = Object.create(null);
    // Store the origin module object which passed by programmer
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    // Store the origin module's state
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
};
var prototypeAccessors$1 = {
    namespaced: {
        configurable: true
    }
};
prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
};
Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
};
Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
};
Module.prototype.getChild = function getChild(key) {
    return this._children[key];
};
Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
};
Module.prototype.update = function update(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) this._rawModule.actions = rawModule.actions;
    if (rawModule.mutations) this._rawModule.mutations = rawModule.mutations;
    if (rawModule.getters) this._rawModule.getters = rawModule.getters;
};
Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
};
Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) forEachValue(this._rawModule.getters, fn);
};
Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) forEachValue(this._rawModule.actions, fn);
};
Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) forEachValue(this._rawModule.mutations, fn);
};
Object.defineProperties(Module.prototype, prototypeAccessors$1);
var ModuleCollection = function ModuleCollection(rawRootModule) {
    // register root module (Vuex.Store options)
    this.register([], rawRootModule, false);
};
ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
        return module.getChild(key);
    }, this.root);
};
ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
        module = module.getChild(key);
        return namespace + (module.namespaced ? key + "/" : "");
    }, "");
};
ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
};
ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0) runtime = true;
    assertRawModule(path, rawModule);
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) this.root = newModule;
    else {
        var parent = this.get(path.slice(0, -1));
        parent.addChild(path[path.length - 1], newModule);
    }
    // register nested modules
    if (rawModule.modules) forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
    });
};
ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
        console.warn("[vuex] trying to unregister module '" + key + "', which is " + "not registered");
        return;
    }
    if (!child.runtime) return;
    parent.removeChild(key);
};
ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) return parent.hasChild(key);
    return false;
};
function update(path, targetModule, newModule) {
    assertRawModule(path, newModule);
    // update target module
    targetModule.update(newModule);
    // update nested modules
    if (newModule.modules) for(var key in newModule.modules){
        if (!targetModule.getChild(key)) {
            console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, " + "manual reload is needed");
            return;
        }
        update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
    }
}
var functionAssert = {
    assert: function(value) {
        return typeof value === "function";
    },
    expected: "function"
};
var objectAssert = {
    assert: function(value) {
        return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
};
var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
};
function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
        if (!rawModule[key]) return;
        var assertOptions = assertTypes[key];
        forEachValue(rawModule[key], function(value, type) {
            assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
        });
    });
}
function makeAssertionMessage(path, key, type, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) buf += ' in module "' + path.join(".") + '"';
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
}
function createStore(options) {
    return new Store(options);
}
var Store = function Store(options) {
    var this$1$1 = this;
    if (options === void 0) options = {};
    assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
    var plugins = options.plugins;
    if (plugins === void 0) plugins = [];
    var strict = options.strict;
    if (strict === void 0) strict = false;
    var devtools = options.devtools;
    // store internal state
    this._committing = false;
    this._actions = Object.create(null);
    this._actionSubscribers = [];
    this._mutations = Object.create(null);
    this._wrappedGetters = Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = Object.create(null);
    this._devtools = devtools;
    // bind commit and dispatch to self
    var store = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
        return dispatch.call(store, type, payload);
    };
    this.commit = function boundCommit(type, payload, options) {
        return commit.call(store, type, payload, options);
    };
    // strict mode
    this.strict = strict;
    var state = this._modules.root.state;
    // init root module.
    // this also recursively registers all sub-modules
    // and collects all module getters inside this._wrappedGetters
    installModule(this, state, [], this._modules.root);
    // initialize the store state, which is responsible for the reactivity
    // (also registers _wrappedGetters as computed properties)
    resetStoreState(this, state);
    // apply plugins
    plugins.forEach(function(plugin) {
        return plugin(this$1$1);
    });
};
var prototypeAccessors = {
    state: {
        configurable: true
    }
};
Store.prototype.install = function install(app, injectKey) {
    app.provide(injectKey || storeKey, this);
    app.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== undefined ? this._devtools : true;
    if (useDevtools) addDevtools(app, this);
};
prototypeAccessors.state.get = function() {
    return this._state.data;
};
prototypeAccessors.state.set = function(v) {
    assert(false, "use store.replaceState() to explicit replace store state.");
};
Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    // check object-style commit
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = {
        type: type,
        payload: payload
    };
    var entry = this._mutations[type];
    if (!entry) {
        console.error("[vuex] unknown mutation type: " + type);
        return;
    }
    this._withCommit(function() {
        entry.forEach(function commitIterator(handler) {
            handler(payload);
        });
    });
    this._subscribers.slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function(sub) {
        return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. " + "Use the filter functionality in the vue-devtools");
};
Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    // check object-style dispatch
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = {
        type: type,
        payload: payload
    };
    var entry = this._actions[type];
    if (!entry) {
        console.error("[vuex] unknown action type: " + type);
        return;
    }
    try {
        this._actionSubscribers.slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
        .filter(function(sub) {
            return sub.before;
        }).forEach(function(sub) {
            return sub.before(action, this$1$1.state);
        });
    } catch (e) {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e);
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
        return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
        result.then(function(res) {
            try {
                this$1$1._actionSubscribers.filter(function(sub) {
                    return sub.after;
                }).forEach(function(sub) {
                    return sub.after(action, this$1$1.state);
                });
            } catch (e) {
                console.warn("[vuex] error in after action subscribers: ");
                console.error(e);
            }
            resolve(res);
        }, function(error) {
            try {
                this$1$1._actionSubscribers.filter(function(sub) {
                    return sub.error;
                }).forEach(function(sub) {
                    return sub.error(action, this$1$1.state, error);
                });
            } catch (e) {
                console.warn("[vuex] error in error action subscribers: ");
                console.error(e);
            }
            reject(error);
        });
    });
};
Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
};
Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? {
        before: fn
    } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
};
Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    assert(typeof getter === "function", "store.watch only accepts a function.");
    return (0, _vue.watch)(function() {
        return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
};
Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
        this$1$1._state.data = state;
    });
};
Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0) options = {};
    if (typeof path === "string") path = [
        path
    ];
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, "cannot register the root module by using registerModule.");
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    // reset store to update getters...
    resetStoreState(this, this.state);
};
Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") path = [
        path
    ];
    assert(Array.isArray(path), "module path must be a string or an Array.");
    this._modules.unregister(path);
    this._withCommit(function() {
        var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
        delete parentState[path[path.length - 1]];
    });
    resetStore(this);
};
Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") path = [
        path
    ];
    assert(Array.isArray(path), "module path must be a string or an Array.");
    return this._modules.isRegistered(path);
};
Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
};
Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
};
Object.defineProperties(Store.prototype, prototypeAccessors);
/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */ var mapState = normalizeNamespace(function(namespace, states) {
    var res = {};
    if (!isValidMap(states)) console.error("[vuex] mapState: mapper parameter must be either an Array or an Object");
    normalizeMap(states).forEach(function(ref) {
        var key = ref.key;
        var val = ref.val;
        res[key] = function mappedState() {
            var state = this.$store.state;
            var getters = this.$store.getters;
            if (namespace) {
                var module = getModuleByNamespace(this.$store, "mapState", namespace);
                if (!module) return;
                state = module.context.state;
                getters = module.context.getters;
            }
            return typeof val === "function" ? val.call(this, state, getters) : state[val];
        };
        // mark vuex getter for devtools
        res[key].vuex = true;
    });
    return res;
});
/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */ var mapMutations = normalizeNamespace(function(namespace, mutations) {
    var res = {};
    if (!isValidMap(mutations)) console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object");
    normalizeMap(mutations).forEach(function(ref) {
        var key = ref.key;
        var val = ref.val;
        res[key] = function mappedMutation() {
            var args = [], len = arguments.length;
            while(len--)args[len] = arguments[len];
            // Get the commit method from store
            var commit = this.$store.commit;
            if (namespace) {
                var module = getModuleByNamespace(this.$store, "mapMutations", namespace);
                if (!module) return;
                commit = module.context.commit;
            }
            return typeof val === "function" ? val.apply(this, [
                commit
            ].concat(args)) : commit.apply(this.$store, [
                val
            ].concat(args));
        };
    });
    return res;
});
/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */ var mapGetters = normalizeNamespace(function(namespace, getters) {
    var res = {};
    if (!isValidMap(getters)) console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object");
    normalizeMap(getters).forEach(function(ref) {
        var key = ref.key;
        var val = ref.val;
        // The namespace has been mutated by normalizeNamespace
        val = namespace + val;
        res[key] = function mappedGetter() {
            if (namespace && !getModuleByNamespace(this.$store, "mapGetters", namespace)) return;
            if (!(val in this.$store.getters)) {
                console.error("[vuex] unknown getter: " + val);
                return;
            }
            return this.$store.getters[val];
        };
        // mark vuex getter for devtools
        res[key].vuex = true;
    });
    return res;
});
/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */ var mapActions = normalizeNamespace(function(namespace, actions) {
    var res = {};
    if (!isValidMap(actions)) console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object");
    normalizeMap(actions).forEach(function(ref) {
        var key = ref.key;
        var val = ref.val;
        res[key] = function mappedAction() {
            var args = [], len = arguments.length;
            while(len--)args[len] = arguments[len];
            // get dispatch function from store
            var dispatch = this.$store.dispatch;
            if (namespace) {
                var module = getModuleByNamespace(this.$store, "mapActions", namespace);
                if (!module) return;
                dispatch = module.context.dispatch;
            }
            return typeof val === "function" ? val.apply(this, [
                dispatch
            ].concat(args)) : dispatch.apply(this.$store, [
                val
            ].concat(args));
        };
    });
    return res;
});
/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */ var createNamespacedHelpers = function(namespace) {
    return {
        mapState: mapState.bind(null, namespace),
        mapGetters: mapGetters.bind(null, namespace),
        mapMutations: mapMutations.bind(null, namespace),
        mapActions: mapActions.bind(null, namespace)
    };
};
/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */ function normalizeMap(map) {
    if (!isValidMap(map)) return [];
    return Array.isArray(map) ? map.map(function(key) {
        return {
            key: key,
            val: key
        };
    }) : Object.keys(map).map(function(key) {
        return {
            key: key,
            val: map[key]
        };
    });
}
/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */ function isValidMap(map) {
    return Array.isArray(map) || isObject(map);
}
/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */ function normalizeNamespace(fn) {
    return function(namespace, map) {
        if (typeof namespace !== "string") {
            map = namespace;
            namespace = "";
        } else if (namespace.charAt(namespace.length - 1) !== "/") namespace += "/";
        return fn(namespace, map);
    };
}
/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */ function getModuleByNamespace(store, helper, namespace) {
    var module = store._modulesNamespaceMap[namespace];
    if (!module) console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
    return module;
}
// Credits: borrowed code from fcomb/redux-logger
function createLogger(ref) {
    if (ref === void 0) ref = {};
    var collapsed = ref.collapsed;
    if (collapsed === void 0) collapsed = true;
    var filter = ref.filter;
    if (filter === void 0) filter = function(mutation, stateBefore, stateAfter) {
        return true;
    };
    var transformer = ref.transformer;
    if (transformer === void 0) transformer = function(state) {
        return state;
    };
    var mutationTransformer = ref.mutationTransformer;
    if (mutationTransformer === void 0) mutationTransformer = function(mut) {
        return mut;
    };
    var actionFilter = ref.actionFilter;
    if (actionFilter === void 0) actionFilter = function(action, state) {
        return true;
    };
    var actionTransformer = ref.actionTransformer;
    if (actionTransformer === void 0) actionTransformer = function(act) {
        return act;
    };
    var logMutations = ref.logMutations;
    if (logMutations === void 0) logMutations = true;
    var logActions = ref.logActions;
    if (logActions === void 0) logActions = true;
    var logger = ref.logger;
    if (logger === void 0) logger = console;
    return function(store) {
        var prevState = deepCopy(store.state);
        if (typeof logger === "undefined") return;
        if (logMutations) store.subscribe(function(mutation, state) {
            var nextState = deepCopy(state);
            if (filter(mutation, prevState, nextState)) {
                var formattedTime = getFormattedTime();
                var formattedMutation = mutationTransformer(mutation);
                var message = "mutation " + mutation.type + formattedTime;
                startMessage(logger, message, collapsed);
                logger.log("%c prev state", "color: #9E9E9E; font-weight: bold", transformer(prevState));
                logger.log("%c mutation", "color: #03A9F4; font-weight: bold", formattedMutation);
                logger.log("%c next state", "color: #4CAF50; font-weight: bold", transformer(nextState));
                endMessage(logger);
            }
            prevState = nextState;
        });
        if (logActions) store.subscribeAction(function(action, state) {
            if (actionFilter(action, state)) {
                var formattedTime = getFormattedTime();
                var formattedAction = actionTransformer(action);
                var message = "action " + action.type + formattedTime;
                startMessage(logger, message, collapsed);
                logger.log("%c action", "color: #03A9F4; font-weight: bold", formattedAction);
                endMessage(logger);
            }
        });
    };
}
function startMessage(logger, message, collapsed) {
    var startMessage = collapsed ? logger.groupCollapsed : logger.group;
    // render
    try {
        startMessage.call(logger, message);
    } catch (e) {
        logger.log(message);
    }
}
function endMessage(logger) {
    try {
        logger.groupEnd();
    } catch (e) {
        logger.log("—— log end ——");
    }
}
function getFormattedTime() {
    var time = new Date();
    return " @ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
}
function repeat(str, times) {
    return new Array(times + 1).join(str);
}
function pad(num, maxLength) {
    return repeat("0", maxLength - num.toString().length) + num;
}
var index = {
    version: "4.0.2",
    Store: Store,
    storeKey: storeKey,
    createStore: createStore,
    useStore: useStore,
    mapState: mapState,
    mapMutations: mapMutations,
    mapGetters: mapGetters,
    mapActions: mapActions,
    createNamespacedHelpers: createNamespacedHelpers,
    createLogger: createLogger
};
exports.default = index;

},{"vue":"gzxs9","@vue/devtools-api":"dc7MH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dc7MH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setupDevtoolsPlugin", ()=>setupDevtoolsPlugin);
var _envJs = require("./env.js");
var _constJs = require("./const.js");
var _proxyJs = require("./proxy.js");
var _indexJs = require("./api/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var _pluginJs = require("./plugin.js");
parcelHelpers.exportAll(_pluginJs, exports);
var _timeJs = require("./time.js");
parcelHelpers.exportAll(_timeJs, exports);
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = (0, _envJs.getTarget)();
    const hook = (0, _envJs.getDevtoolsGlobalHook)();
    const enableProxy = (0, _envJs.isProxyAvailable) && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) hook.emit((0, _constJs.HOOK_SETUP), pluginDescriptor, setupFn);
    else {
        const proxy = enableProxy ? new (0, _proxyJs.ApiProxy)(descriptor, hook) : null;
        const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
        list.push({
            pluginDescriptor: descriptor,
            setupFn,
            proxy
        });
        if (proxy) setupFn(proxy.proxiedTarget);
    }
}

},{"./env.js":"djKoa","./const.js":"ePyfE","./proxy.js":"cGXUQ","./api/index.js":"i4WoE","./plugin.js":"fgpC0","./time.js":"cI6M3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"djKoa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDevtoolsGlobalHook", ()=>getDevtoolsGlobalHook);
parcelHelpers.export(exports, "getTarget", ()=>getTarget);
parcelHelpers.export(exports, "isProxyAvailable", ()=>isProxyAvailable);
var global = arguments[3];
function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
    // @ts-ignore
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
}
const isProxyAvailable = typeof Proxy === "function";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ePyfE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HOOK_SETUP", ()=>HOOK_SETUP);
parcelHelpers.export(exports, "HOOK_PLUGIN_SETTINGS_SET", ()=>HOOK_PLUGIN_SETTINGS_SET);
const HOOK_SETUP = "devtools-plugin:setup";
const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cGXUQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApiProxy", ()=>ApiProxy);
var _constJs = require("./const.js");
var _timeJs = require("./time.js");
class ApiProxy {
    constructor(plugin, hook){
        this.target = null;
        this.targetQueue = [];
        this.onQueue = [];
        this.plugin = plugin;
        this.hook = hook;
        const defaultSettings = {};
        if (plugin.settings) for(const id in plugin.settings){
            const item = plugin.settings[id];
            defaultSettings[id] = item.defaultValue;
        }
        const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
        let currentSettings = Object.assign({}, defaultSettings);
        try {
            const raw = localStorage.getItem(localSettingsSaveId);
            const data = JSON.parse(raw);
            Object.assign(currentSettings, data);
        } catch (e) {
        // noop
        }
        this.fallbacks = {
            getSettings () {
                return currentSettings;
            },
            setSettings (value) {
                try {
                    localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
                } catch (e) {
                // noop
                }
                currentSettings = value;
            },
            now () {
                return (0, _timeJs.now)();
            }
        };
        if (hook) hook.on((0, _constJs.HOOK_PLUGIN_SETTINGS_SET), (pluginId, value)=>{
            if (pluginId === this.plugin.id) this.fallbacks.setSettings(value);
        });
        this.proxiedOn = new Proxy({}, {
            get: (_target, prop)=>{
                if (this.target) return this.target.on[prop];
                else return (...args)=>{
                    this.onQueue.push({
                        method: prop,
                        args
                    });
                };
            }
        });
        this.proxiedTarget = new Proxy({}, {
            get: (_target, prop)=>{
                if (this.target) return this.target[prop];
                else if (prop === "on") return this.proxiedOn;
                else if (Object.keys(this.fallbacks).includes(prop)) return (...args)=>{
                    this.targetQueue.push({
                        method: prop,
                        args,
                        resolve: ()=>{}
                    });
                    return this.fallbacks[prop](...args);
                };
                else return (...args)=>{
                    return new Promise((resolve)=>{
                        this.targetQueue.push({
                            method: prop,
                            args,
                            resolve
                        });
                    });
                };
            }
        });
    }
    async setRealTarget(target) {
        this.target = target;
        for (const item of this.onQueue)this.target.on[item.method](...item.args);
        for (const item1 of this.targetQueue)item1.resolve(await this.target[item1.method](...item1.args));
    }
}

},{"./const.js":"ePyfE","./time.js":"cI6M3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cI6M3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPerformanceSupported", ()=>isPerformanceSupported);
parcelHelpers.export(exports, "now", ()=>now);
var global = arguments[3];
let supported;
let perf;
function isPerformanceSupported() {
    var _a;
    if (supported !== undefined) return supported;
    if (typeof window !== "undefined" && window.performance) {
        supported = true;
        perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
        supported = true;
        perf = global.perf_hooks.performance;
    } else supported = false;
    return supported;
}
function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i4WoE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _apiJs = require("./api.js");
parcelHelpers.exportAll(_apiJs, exports);
var _appJs = require("./app.js");
parcelHelpers.exportAll(_appJs, exports);
var _componentJs = require("./component.js");
parcelHelpers.exportAll(_componentJs, exports);
var _contextJs = require("./context.js");
parcelHelpers.exportAll(_contextJs, exports);
var _hooksJs = require("./hooks.js");
parcelHelpers.exportAll(_hooksJs, exports);
var _utilJs = require("./util.js");
parcelHelpers.exportAll(_utilJs, exports);

},{"./api.js":"3kxWr","./app.js":"6dGgR","./component.js":"4SgjQ","./context.js":"dt6Ap","./hooks.js":"5yNqE","./util.js":"7FzpQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3kxWr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6dGgR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4SgjQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dt6Ap":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5yNqE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7FzpQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fgpC0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eQb85":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _googleFontsHelper = require("./google-fonts-helper");
parcelHelpers.exportAll(_googleFontsHelper, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);

},{"./google-fonts-helper":"enQz6","./types":"jiYon","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"enQz6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "constructURL", ()=>constructURL);
parcelHelpers.export(exports, "merge", ()=>merge);
parcelHelpers.export(exports, "isValidURL", ()=>isValidURL);
parcelHelpers.export(exports, "parse", ()=>parse);
parcelHelpers.export(exports, "download", ()=>download);
parcelHelpers.export(exports, "Downloader", ()=>Downloader);
var _deepmerge = require("deepmerge");
var _deepmergeDefault = parcelHelpers.interopDefault(_deepmerge);
var _ufo = require("ufo");
var _hookable = require("hookable");
var _utils = require("./utils");
const GOOGLE_FONTS_DOMAIN = "fonts.googleapis.com";
function constructURL({ families , display , subsets , text  } = {}) {
    const subset = (Array.isArray(subsets) ? subsets : [
        subsets
    ]).filter(Boolean);
    const prefix = subset.length > 0 ? "css" : "css2";
    const family = (0, _utils.convertFamiliesToArray)(families ?? {}, prefix.endsWith("2"));
    if (family.length < 1) return false;
    const query = {
        family
    };
    if (display && (0, _utils.isValidDisplay)(display)) query.display = display;
    if (subset.length > 0) query.subset = subset.join(",");
    if (text) query.text = text;
    return (0, _ufo.withHttps)((0, _ufo.withQuery)((0, _ufo.resolveURL)(GOOGLE_FONTS_DOMAIN, prefix), query));
}
function merge(...fonts) {
    return (0, _deepmergeDefault.default).all(fonts);
}
function isValidURL(url) {
    return RegExp(GOOGLE_FONTS_DOMAIN).test(url);
}
function parse(url) {
    const result = {};
    if (!isValidURL(url)) return result;
    const { searchParams , pathname  } = (0, _ufo.createURL)(url);
    if (!searchParams.has("family")) return result;
    const families = (0, _utils.convertFamiliesObject)(searchParams.getAll("family"), pathname.endsWith("2"));
    if (Object.keys(families).length < 1) return result;
    result.families = families;
    const display = searchParams.get("display");
    if (display && (0, _utils.isValidDisplay)(display)) result.display = display;
    const subsets = searchParams.get("subset");
    if (subsets) result.subsets = subsets.split(",");
    const text = searchParams.get("text");
    if (text) result.text = text;
    return result;
}
function download(url, options) {
    return new Downloader(url, options);
}
class Downloader extends (0, _hookable.Hookable) {
    constructor(url, options){
        super();
        this.url = url;
        this.config = {
            base64: false,
            overwriting: false,
            outputDir: "./",
            stylePath: "fonts.css",
            fontsDir: "fonts",
            fontsPath: "./fonts",
            headers: [
                [
                    "user-agent",
                    [
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
                        "AppleWebKit/537.36 (KHTML, like Gecko)",
                        "Chrome/98.0.4758.102 Safari/537.36"
                    ].join(" ")
                ]
            ],
            ...options
        };
    }
}

},{"deepmerge":"ck1Q2","ufo":"9kbR0","hookable":"a9c1T","./utils":"k9vd0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ck1Q2":[function(require,module,exports) {
"use strict";
var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
    return !!value && typeof value === "object";
}
function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 0xeac7;
function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
    });
}
function getMergeFunction(key, options) {
    if (!options.customMerge) return deepmerge;
    var customMerge = options.customMerge(key);
    return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return target.propertyIsEnumerable(symbol);
    }) : [];
}
function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
    try {
        return property in object;
    } catch (_) {
        return false;
    }
}
// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
     && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
     && Object.propertyIsEnumerable.call(target, key) // and also unsafe if they're nonenumerable.
    );
}
function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) getKeys(target).forEach(function(key) {
        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
    getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) return;
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        else destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    });
    return destination;
}
function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) return cloneUnlessOtherwiseSpecified(source, options);
    else if (sourceIsArray) return options.arrayMerge(target, source, options);
    else return mergeObject(target, source, options);
}
deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) throw new Error("first argument should be an array");
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
    }, {});
};
var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;

},{}],"9kbR0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$URL", ()=>$URL);
parcelHelpers.export(exports, "cleanDoubleSlashes", ()=>cleanDoubleSlashes);
parcelHelpers.export(exports, "createURL", ()=>createURL);
parcelHelpers.export(exports, "decode", ()=>decode);
parcelHelpers.export(exports, "decodePath", ()=>decodePath);
parcelHelpers.export(exports, "decodeQueryValue", ()=>decodeQueryValue);
parcelHelpers.export(exports, "encode", ()=>encode);
parcelHelpers.export(exports, "encodeHash", ()=>encodeHash);
parcelHelpers.export(exports, "encodeHost", ()=>encodeHost);
parcelHelpers.export(exports, "encodeParam", ()=>encodeParam);
parcelHelpers.export(exports, "encodePath", ()=>encodePath);
parcelHelpers.export(exports, "encodeQueryItem", ()=>encodeQueryItem);
parcelHelpers.export(exports, "encodeQueryKey", ()=>encodeQueryKey);
parcelHelpers.export(exports, "encodeQueryValue", ()=>encodeQueryValue);
parcelHelpers.export(exports, "getQuery", ()=>getQuery);
parcelHelpers.export(exports, "hasLeadingSlash", ()=>hasLeadingSlash);
parcelHelpers.export(exports, "hasProtocol", ()=>hasProtocol);
parcelHelpers.export(exports, "hasTrailingSlash", ()=>hasTrailingSlash);
parcelHelpers.export(exports, "isEmptyURL", ()=>isEmptyURL);
parcelHelpers.export(exports, "isEqual", ()=>isEqual);
parcelHelpers.export(exports, "isNonEmptyURL", ()=>isNonEmptyURL);
parcelHelpers.export(exports, "isRelative", ()=>isRelative);
parcelHelpers.export(exports, "isSamePath", ()=>isSamePath);
parcelHelpers.export(exports, "joinURL", ()=>joinURL);
parcelHelpers.export(exports, "normalizeURL", ()=>normalizeURL);
parcelHelpers.export(exports, "parseAuth", ()=>parseAuth);
parcelHelpers.export(exports, "parseHost", ()=>parseHost);
parcelHelpers.export(exports, "parsePath", ()=>parsePath);
parcelHelpers.export(exports, "parseQuery", ()=>parseQuery);
parcelHelpers.export(exports, "parseURL", ()=>parseURL);
parcelHelpers.export(exports, "resolveURL", ()=>resolveURL);
parcelHelpers.export(exports, "stringifyParsedURL", ()=>stringifyParsedURL);
parcelHelpers.export(exports, "stringifyQuery", ()=>stringifyQuery);
parcelHelpers.export(exports, "withBase", ()=>withBase);
parcelHelpers.export(exports, "withHttp", ()=>withHttp);
parcelHelpers.export(exports, "withHttps", ()=>withHttps);
parcelHelpers.export(exports, "withLeadingSlash", ()=>withLeadingSlash);
parcelHelpers.export(exports, "withProtocol", ()=>withProtocol);
parcelHelpers.export(exports, "withQuery", ()=>withQuery);
parcelHelpers.export(exports, "withTrailingSlash", ()=>withTrailingSlash);
parcelHelpers.export(exports, "withoutBase", ()=>withoutBase);
parcelHelpers.export(exports, "withoutLeadingSlash", ()=>withoutLeadingSlash);
parcelHelpers.export(exports, "withoutProtocol", ()=>withoutProtocol);
parcelHelpers.export(exports, "withoutTrailingSlash", ()=>withoutTrailingSlash);
const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = {
    overflow: "Overflow Error",
    "not-basic": "Illegal Input",
    "invalid-input": "Invalid Input"
};
const e = Math.floor;
const r = String.fromCharCode;
function s(n2) {
    throw new RangeError(o[n2]);
}
const c = function(n2, t2) {
    return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};
const u = function(n2, t2, o2) {
    let r2 = 0;
    for(n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36)n2 = e(n2 / 35);
    return e(r2 + 36 * n2 / (n2 + 38));
};
function toASCII(o2) {
    return function(n2, o3) {
        const e2 = n2.split("@");
        let r2 = "";
        e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);
        const s2 = (function(n3, t2) {
            const o4 = [];
            let e3 = n3.length;
            for(; e3--;)o4[e3] = t2(n3[e3]);
            return o4;
        })((n2 = n2.replace(t, ".")).split("."), o3).join(".");
        return r2 + s2;
    }(o2, function(t2) {
        return n.test(t2) ? "xn--" + function(n2) {
            const t3 = [];
            const o3 = (n2 = function(n3) {
                const t4 = [];
                let o4 = 0;
                const e2 = n3.length;
                for(; o4 < e2;){
                    const r2 = n3.charCodeAt(o4++);
                    if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
                        const e3 = n3.charCodeAt(o4++);
                        (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
                    } else t4.push(r2);
                }
                return t4;
            }(n2)).length;
            let f = 128;
            let i = 0;
            let l = 72;
            for (const o4 of n2)o4 < 128 && t3.push(r(o4));
            const h = t3.length;
            let p = h;
            for(h && t3.push("-"); p < o3;){
                let o41 = 2147483647;
                for (const t4 of n2)t4 >= f && t4 < o41 && (o41 = t4);
                const a = p + 1;
                o41 - f > e((2147483647 - i) / a) && s("overflow"), i += (o41 - f) * a, f = o41;
                for (const o5 of n2)if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
                    let n3 = i;
                    for(let o6 = 36;; o6 += 36){
                        const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;
                        if (n3 < s2) break;
                        const u2 = n3 - s2;
                        const f2 = 36 - s2;
                        t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
                    }
                    t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
                }
                ++i, ++f;
            }
            return t3.join("");
        }(t2) : t2;
    });
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2F/gi;
const ENC_ENC_SLASH_RE = /%252F/gi;
function encode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
    return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
    return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
    return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
    return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text = "") {
    try {
        return decodeURIComponent("" + text);
    } catch (_err) {
        return "" + text;
    }
}
function decodePath(text) {
    return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryValue(text) {
    return decode(text.replace(PLUS_RE, " "));
}
function encodeHost(name = "") {
    return toASCII(name);
}
function parseQuery(paramsStr = "") {
    const obj = {};
    if (paramsStr[0] === "?") paramsStr = paramsStr.substr(1);
    for (const param of paramsStr.split("&")){
        const s = param.match(/([^=]+)=?(.*)/) || [];
        if (s.length < 2) continue;
        const key = decode(s[1]);
        if (key === "__proto__" || key === "constructor") continue;
        const value = decodeQueryValue(s[2] || "");
        if (obj[key]) {
            if (Array.isArray(obj[key])) obj[key].push(value);
            else obj[key] = [
                obj[key],
                value
            ];
        } else obj[key] = value;
    }
    return obj;
}
function encodeQueryItem(key, val) {
    if (typeof val === "number" || typeof val === "boolean") val = String(val);
    if (!val) return encodeQueryKey(key);
    if (Array.isArray(val)) return val.map((_val)=>`${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
    return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}
function stringifyQuery(query) {
    return Object.keys(query).map((k)=>encodeQueryItem(k, query[k])).join("&");
}
class $URL {
    constructor(input = ""){
        this.query = {};
        if (typeof input !== "string") throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
        const parsed = parseURL(input);
        this.protocol = decode(parsed.protocol);
        this.host = decode(parsed.host);
        this.auth = decode(parsed.auth);
        this.pathname = decodePath(parsed.pathname);
        this.query = parseQuery(parsed.search);
        this.hash = decode(parsed.hash);
    }
    get hostname() {
        return parseHost(this.host).hostname;
    }
    get port() {
        return parseHost(this.host).port || "";
    }
    get username() {
        return parseAuth(this.auth).username;
    }
    get password() {
        return parseAuth(this.auth).password || "";
    }
    get hasProtocol() {
        return this.protocol.length;
    }
    get isAbsolute() {
        return this.hasProtocol || this.pathname[0] === "/";
    }
    get search() {
        const q = stringifyQuery(this.query);
        return q.length ? "?" + q : "";
    }
    get searchParams() {
        const p = new URLSearchParams();
        for(const name in this.query){
            const value = this.query[name];
            if (Array.isArray(value)) value.forEach((v)=>p.append(name, v));
            else p.append(name, value || "");
        }
        return p;
    }
    get origin() {
        return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
    }
    get fullpath() {
        return encodePath(this.pathname) + this.search + encodeHash(this.hash);
    }
    get encodedAuth() {
        if (!this.auth) return "";
        const { username , password  } = parseAuth(this.auth);
        return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
    }
    get href() {
        const auth = this.encodedAuth;
        const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
        return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
    }
    append(url) {
        if (url.hasProtocol) throw new Error("Cannot append a URL with protocol");
        Object.assign(this.query, url.query);
        if (url.pathname) this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
        if (url.hash) this.hash = url.hash;
    }
    toJSON() {
        return this.href;
    }
    toString() {
        return this.href;
    }
}
function isRelative(inputStr) {
    return [
        "./",
        "../"
    ].some((str)=>inputStr.startsWith(str));
}
const PROTOCOL_REGEX = /^\w+:(\/\/)?/;
const PROTOCOL_RELATIVE_REGEX = /^\/\/[^/]+/;
function hasProtocol(inputStr, acceptProtocolRelative = false) {
    return PROTOCOL_REGEX.test(inputStr) || acceptProtocolRelative && PROTOCOL_RELATIVE_REGEX.test(inputStr);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParams = false) {
    if (!queryParams) return input.endsWith("/");
    return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParams = false) {
    if (!queryParams) return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
    if (!hasTrailingSlash(input, true)) return input || "/";
    const [s0, ...s] = input.split("?");
    return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParams = false) {
    if (!queryParams) return input.endsWith("/") ? input : input + "/";
    if (hasTrailingSlash(input, true)) return input || "/";
    const [s0, ...s] = input.split("?");
    return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
    return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
    return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}
function withLeadingSlash(input = "") {
    return hasLeadingSlash(input) ? input : "/" + input;
}
function cleanDoubleSlashes(input = "") {
    return input.split("://").map((str)=>str.replace(/\/{2,}/g, "/")).join("://");
}
function withBase(input, base) {
    if (isEmptyURL(base)) return input;
    const _base = withoutTrailingSlash(base);
    if (input.startsWith(_base)) return input;
    return joinURL(_base, input);
}
function withoutBase(input, base) {
    if (isEmptyURL(base)) return input;
    const _base = withoutTrailingSlash(base);
    if (!input.startsWith(_base)) return input;
    const trimmed = input.substring(_base.length);
    return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
    const parsed = parseURL(input);
    const mergedQuery = {
        ...parseQuery(parsed.search),
        ...query
    };
    parsed.search = stringifyQuery(mergedQuery);
    return stringifyParsedURL(parsed);
}
function getQuery(input) {
    return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
    return !url || url === "/";
}
function isNonEmptyURL(url) {
    return url && url !== "/";
}
function joinURL(base, ...input) {
    let url = base || "";
    for (const i of input.filter(isNonEmptyURL))url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
    return url;
}
function withHttp(input) {
    return withProtocol(input, "http://");
}
function withHttps(input) {
    return withProtocol(input, "https://");
}
function withoutProtocol(input) {
    return withProtocol(input, "");
}
function withProtocol(input, protocol) {
    const match = input.match(PROTOCOL_REGEX);
    if (!match) return protocol + input;
    return protocol + input.substring(match[0].length);
}
function createURL(input) {
    return new $URL(input);
}
function normalizeURL(input) {
    return createURL(input).toString();
}
function resolveURL(base, ...input) {
    const url = createURL(base);
    for (const i of input.filter(isNonEmptyURL))url.append(createURL(i));
    return url.toString();
}
function isSamePath(p1, p2) {
    return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}
function isEqual(a, b, opts = {}) {
    if (!opts.trailingSlash) {
        a = withTrailingSlash(a);
        b = withTrailingSlash(b);
    }
    if (!opts.leadingSlash) {
        a = withLeadingSlash(a);
        b = withLeadingSlash(b);
    }
    if (!opts.encoding) {
        a = decode(a);
        b = decode(b);
    }
    return a === b;
}
function parseURL(input = "", defaultProto) {
    if (!hasProtocol(input, true)) return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
    const [protocol = "", auth, hostAndPath = ""] = (input.replace(/\\/g, "/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
    const [host = "", path = ""] = (hostAndPath.match(/([^/?#]*)(.*)?/) || []).splice(1);
    const { pathname , search , hash  } = parsePath(path);
    return {
        protocol,
        auth: auth ? auth.substr(0, auth.length - 1) : "",
        host,
        pathname,
        search,
        hash
    };
}
function parsePath(input = "") {
    const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname,
        search,
        hash
    };
}
function parseAuth(input = "") {
    const [username, password] = input.split(":");
    return {
        username: decode(username),
        password: decode(password)
    };
}
function parseHost(input = "") {
    const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
    return {
        hostname: decode(hostname),
        port
    };
}
function stringifyParsedURL(parsed) {
    const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
    if (!parsed.protocol) return fullpath;
    return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a9c1T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hookable", ()=>Hookable);
parcelHelpers.export(exports, "createHooks", ()=>createHooks);
parcelHelpers.export(exports, "flatHooks", ()=>flatHooks);
parcelHelpers.export(exports, "mergeHooks", ()=>mergeHooks);
parcelHelpers.export(exports, "parallelCaller", ()=>parallelCaller);
parcelHelpers.export(exports, "serial", ()=>serial);
parcelHelpers.export(exports, "serialCaller", ()=>serialCaller);
function flatHooks(configHooks, hooks = {}, parentName) {
    for(const key in configHooks){
        const subHook = configHooks[key];
        const name = parentName ? `${parentName}:${key}` : key;
        if (typeof subHook === "object" && subHook !== null) flatHooks(subHook, hooks, name);
        else if (typeof subHook === "function") hooks[name] = subHook;
    }
    return hooks;
}
function mergeHooks(...hooks) {
    const finalHooks = {};
    for (const hook of hooks){
        const flatenHook = flatHooks(hook);
        for(const key in flatenHook)if (finalHooks[key]) finalHooks[key].push(flatenHook[key]);
        else finalHooks[key] = [
            flatenHook[key]
        ];
    }
    for(const key1 in finalHooks)if (finalHooks[key1].length > 1) {
        const arr = finalHooks[key1];
        finalHooks[key1] = (...args)=>serial(arr, (fn)=>fn(...args));
    } else finalHooks[key1] = finalHooks[key1][0];
    return finalHooks;
}
function serial(tasks, fn) {
    return tasks.reduce((promise, task)=>promise.then(()=>fn(task)), Promise.resolve(null));
}
function serialCaller(hooks, args) {
    return hooks.reduce((promise, hookFn)=>promise.then(()=>hookFn.apply(void 0, args)), Promise.resolve(null));
}
function parallelCaller(hooks, args) {
    return Promise.all(hooks.map((hook)=>hook.apply(void 0, args)));
}
function callEachWith(callbacks, arg0) {
    for (const cb of callbacks)cb(arg0);
}
class Hookable {
    constructor(){
        this._hooks = {};
        this._before = null;
        this._after = null;
        this._deprecatedHooks = {};
        this.hook = this.hook.bind(this);
        this.callHook = this.callHook.bind(this);
        this.callHookWith = this.callHookWith.bind(this);
    }
    hook(name, fn) {
        if (!name || typeof fn !== "function") return ()=>{};
        const originalName = name;
        let deprecatedHookObj;
        while(this._deprecatedHooks[name]){
            const deprecatedHook = this._deprecatedHooks[name];
            if (typeof deprecatedHook === "string") deprecatedHookObj = {
                to: deprecatedHook
            };
            else deprecatedHookObj = deprecatedHook;
            name = deprecatedHookObj.to;
        }
        if (deprecatedHookObj) {
            if (!deprecatedHookObj.message) console.warn(`${originalName} hook has been deprecated` + (deprecatedHookObj.to ? `, please use ${deprecatedHookObj.to}` : ""));
            else console.warn(deprecatedHookObj.message);
        }
        this._hooks[name] = this._hooks[name] || [];
        this._hooks[name].push(fn);
        return ()=>{
            if (fn) {
                this.removeHook(name, fn);
                fn = null;
            }
        };
    }
    hookOnce(name, fn) {
        let _unreg;
        let _fn = (...args)=>{
            _unreg();
            _unreg = null;
            _fn = null;
            return fn(...args);
        };
        _unreg = this.hook(name, _fn);
        return _unreg;
    }
    removeHook(name, fn) {
        if (this._hooks[name]) {
            const idx = this._hooks[name].indexOf(fn);
            if (idx !== -1) this._hooks[name].splice(idx, 1);
            if (this._hooks[name].length === 0) delete this._hooks[name];
        }
    }
    deprecateHook(name, deprecated) {
        this._deprecatedHooks[name] = deprecated;
        const _hooks = this._hooks[name] || [];
        this._hooks[name] = void 0;
        for (const hook of _hooks)this.hook(name, hook);
    }
    deprecateHooks(deprecatedHooks) {
        Object.assign(this._deprecatedHooks, deprecatedHooks);
        for(const name in deprecatedHooks)this.deprecateHook(name, deprecatedHooks[name]);
    }
    addHooks(configHooks) {
        const hooks = flatHooks(configHooks);
        const removeFns = Object.keys(hooks).map((key)=>this.hook(key, hooks[key]));
        return ()=>{
            removeFns.splice(0, removeFns.length).forEach((unreg)=>unreg());
        };
    }
    removeHooks(configHooks) {
        const hooks = flatHooks(configHooks);
        for(const key in hooks)this.removeHook(key, hooks[key]);
    }
    callHook(name, ...args) {
        return this.callHookWith(serialCaller, name, ...args);
    }
    callHookParallel(name, ...args) {
        return this.callHookWith(parallelCaller, name, ...args);
    }
    callHookWith(caller, name, ...args) {
        const event = this._before || this._after ? {
            name,
            args,
            context: {}
        } : void 0;
        if (this._before) callEachWith(this._before, event);
        const result = caller(this._hooks[name] || [], args);
        if (result instanceof Promise) return result.finally(()=>{
            if (this._after) callEachWith(this._after, event);
        });
        if (this._after) callEachWith(this._after, event);
        return result;
    }
    beforeEach(fn) {
        this._before = this._before || [];
        this._before.push(fn);
    }
    afterEach(fn) {
        this._after = this._after || [];
        this._after.push(fn);
    }
}
function createHooks() {
    return new Hookable();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k9vd0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isValidDisplay", ()=>isValidDisplay);
parcelHelpers.export(exports, "convertFamiliesObject", ()=>convertFamiliesObject);
parcelHelpers.export(exports, "convertFamiliesToArray", ()=>convertFamiliesToArray);
parcelHelpers.export(exports, "parseFontsFromCss", ()=>parseFontsFromCss);
var _path = require("path");
function isValidDisplay(display) {
    return [
        "auto",
        "block",
        "swap",
        "fallback",
        "optional"
    ].includes(display);
}
function convertFamiliesObject(families, v2 = true) {
    const result = {};
    families.flatMap((family)=>family.split("|")).forEach((family)=>{
        if (!family) return;
        if (!family.includes(":")) {
            result[family] = true;
            return;
        }
        const parts = family.split(":");
        if (!parts[1]) return;
        const values = {};
        // v1
        if (!v2) // https://developers.google.com/fonts/docs/getting_started#specifying_font_families_and_styles_in_a_stylesheet_url
        parts[1].split(",").forEach((style)=>{
            const styleParsed = parseStyle(style);
            if (styleParsed === "wght") values.wght = true;
            if (styleParsed === "ital") values.ital = true;
            if (styleParsed === "bold" || styleParsed === "b") values.wght = 700;
            if (styleParsed === "bolditalic" || styleParsed === "bi") values.ital = 700;
        });
        // v2
        if (v2) {
            let [styles, weights] = parts[1].split("@");
            if (!weights) {
                weights = String(styles).replace(",", ";");
                styles = "wght";
            }
            styles.split(",").forEach((style)=>{
                const styleParsed = parseStyle(style);
                values[styleParsed] = weights.split(";").map((weight)=>{
                    if (/^\+?\d+$/.test(weight)) return parseInt(weight);
                    const [pos, w] = weight.split(",");
                    const index = styleParsed === "wght" ? 0 : 1;
                    if (parseInt(pos) === index && /^\+?\d+$/.test(w)) return parseInt(w);
                    return 0;
                }).filter((v)=>v > 0);
                values[styleParsed] = Object.entries(values[styleParsed]).length > 0 ? values[styleParsed] : true;
            });
        }
        result[parts[0]] = values;
    });
    return result;
}
function convertFamiliesToArray(families, v2 = true) {
    const result = [];
    // v1
    if (!v2) {
        Object.entries(families).forEach(([name, values])=>{
            if (!name) return;
            if (Array.isArray(values) && values.length > 0 || values === true || values === 400) {
                result.push(name);
                return;
            }
            if (values === 700) {
                result.push(`${name}:bold`);
                return;
            }
            if (Object.keys(values).length > 0) {
                const styles = [];
                Object.entries(values).sort(([styleA], [styleB])=>styleA.localeCompare(styleB)).forEach(([style, weight])=>{
                    const styleParsed = parseStyle(style);
                    if (styleParsed === "ital" && (weight === 700 || Array.isArray(weight) && weight.includes(700))) {
                        styles.push("bolditalic");
                        if (Array.isArray(weight) && weight.includes(400)) styles.push(styleParsed);
                    } else if (styleParsed === "wght" && (weight === 700 || Array.isArray(weight) && weight.includes(700))) {
                        styles.push("bold");
                        if (Array.isArray(weight) && weight.includes(400)) styles.push(styleParsed);
                    } else if (weight !== false) styles.push(styleParsed);
                });
                const stylesSortered = styles.sort(([styleA], [styleB])=>styleA.localeCompare(styleB)).reverse().join(",");
                if (stylesSortered === "wght") {
                    result.push(name);
                    return;
                }
                result.push(`${name}:${stylesSortered}`);
            }
        });
        return result.length ? [
            result.join("|")
        ] : result;
    }
    // v2
    if (v2) Object.entries(families).forEach(([name, values])=>{
        if (!name) return;
        if (Array.isArray(values) && values.length > 0) {
            result.push(`${name}:wght@${values.join(";")}`);
            return;
        }
        if (Object.keys(values).length > 0) {
            const styles = [];
            const weights = [];
            Object.entries(values).sort(([styleA], [styleB])=>styleA.localeCompare(styleB)).forEach(([style, weight])=>{
                const styleParsed = parseStyle(style);
                styles.push(styleParsed);
                (Array.isArray(weight) ? weight : [
                    weight
                ]).forEach((value)=>{
                    if (Object.keys(values).length === 1 && styleParsed === "wght") weights.push(String(value));
                    else {
                        const index = styleParsed === "wght" ? 0 : 1;
                        weights.push(`${index},${value}`);
                    }
                });
            });
            if (!styles.includes("wght")) styles.push("wght");
            const weightsSortered = weights.sort(([weightA], [weightB])=>weightA.localeCompare(weightB)).join(";");
            result.push(`${name}:${styles.join(",")}@${weightsSortered}`);
            return;
        }
        if (values) result.push(name);
    });
    return result;
}
function parseFontsFromCss(content, fontsPath) {
    const fonts = [];
    const re = {
        face: /\s*(?:\/\*\s*(.*?)\s*\*\/)?[^@]*?@font-face\s*{(?:[^}]*?)}\s*/gi,
        family: /font-family\s*:\s*(?:'|")?([^;]*?)(?:'|")?\s*;/i,
        weight: /font-weight\s*:\s*([^;]*?)\s*;/i,
        url: /url\s*\(\s*(?:'|")?\s*([^]*?)\s*(?:'|")?\s*\)\s*?/gi
    };
    let i = 1;
    let match1;
    while((match1 = re.face.exec(content)) !== null){
        const [fontface, comment] = match1;
        const familyRegExpArray = re.family.exec(fontface);
        const family = familyRegExpArray ? familyRegExpArray[1] : "";
        const weightRegExpArray = re.weight.exec(fontface);
        const weight = weightRegExpArray ? weightRegExpArray[1] : "";
        let match2;
        while((match2 = re.url.exec(fontface)) !== null){
            const [forReplace, url] = match2;
            const urlPathname = new URL(url).pathname;
            const ext = (0, _path.extname)(urlPathname);
            if (ext.length < 2) continue;
            const filename = (0, _path.basename)(urlPathname, ext) || "";
            const newFilename = formatFontFileName("{_family}-{weight}-{i}.{ext}", {
                comment: comment || "",
                family,
                weight: weight || "",
                filename,
                _family: family.replace(/\s+/g, "_"),
                ext: ext.replace(/^\./, "") || "",
                i: String(i++)
            }).replace(/\.$/, "");
            fonts.push({
                inputFont: url,
                outputFont: newFilename,
                inputText: forReplace,
                outputText: `url('${(0, _path.posix).join(fontsPath, newFilename)}')`
            });
        }
    }
    return fonts;
}
function formatFontFileName(template, values) {
    return Object.entries(values).filter(([key])=>/^[a-z0-9_-]+$/gi.test(key)).map(([key, value])=>[
            new RegExp(`([^{]|^){${key}}([^}]|$)`, "g"),
            `$1${value}$2`
        ]).reduce((str, [regexp, replacement])=>str.replace(regexp, String(replacement)), template).replace(/({|}){2}/g, "$1");
}
function parseStyle(style) {
    const _style = style.toLowerCase();
    if ([
        "wght",
        "regular",
        "normal"
    ].includes(_style)) return "wght";
    if ([
        "i",
        "italic",
        "ital"
    ].includes(_style)) return "ital";
    return _style;
}

},{"path":"loE3o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loE3o":[function(require,module,exports) {
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var process = require("process");
function assertPath(path) {
    if (typeof path !== "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = "";
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf("/");
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = "";
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = "";
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += "/..";
                    else res = "..";
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += "/" + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = "";
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return "/" + resolvedPath;
            else return "/";
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return ".";
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = ".";
        if (path.length > 0 && trailingSeparator) path += "/";
        if (isAbsolute) return "/" + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return ".";
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += "/" + arg;
            }
        }
        if (joined === undefined) return ".";
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return "";
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return "";
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = "";
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += "..";
            else out += "/..";
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? "/" : ".";
        if (hasRoot && end === 1) return "//";
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== "string") throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return "";
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return "";
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return "";
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format("/", pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = "/";
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = "/";
        return ret;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"process":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"jiYon":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1m0fI":[function(require,module,exports) {

},{}],"c18b3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NavigationFailureType", ()=>NavigationFailureType);
parcelHelpers.export(exports, "RouterLink", ()=>RouterLink);
parcelHelpers.export(exports, "RouterView", ()=>RouterView);
parcelHelpers.export(exports, "START_LOCATION", ()=>START_LOCATION_NORMALIZED);
parcelHelpers.export(exports, "createMemoryHistory", ()=>createMemoryHistory);
parcelHelpers.export(exports, "createRouter", ()=>createRouter);
parcelHelpers.export(exports, "createRouterMatcher", ()=>createRouterMatcher);
parcelHelpers.export(exports, "createWebHashHistory", ()=>createWebHashHistory);
parcelHelpers.export(exports, "createWebHistory", ()=>createWebHistory);
parcelHelpers.export(exports, "isNavigationFailure", ()=>isNavigationFailure);
parcelHelpers.export(exports, "loadRouteLocation", ()=>loadRouteLocation);
parcelHelpers.export(exports, "matchedRouteKey", ()=>matchedRouteKey);
parcelHelpers.export(exports, "onBeforeRouteLeave", ()=>onBeforeRouteLeave);
parcelHelpers.export(exports, "onBeforeRouteUpdate", ()=>onBeforeRouteUpdate);
parcelHelpers.export(exports, "parseQuery", ()=>parseQuery);
parcelHelpers.export(exports, "routeLocationKey", ()=>routeLocationKey);
parcelHelpers.export(exports, "routerKey", ()=>routerKey);
parcelHelpers.export(exports, "routerViewLocationKey", ()=>routerViewLocationKey);
parcelHelpers.export(exports, "stringifyQuery", ()=>stringifyQuery);
parcelHelpers.export(exports, "useLink", ()=>useLink);
parcelHelpers.export(exports, "useRoute", ()=>useRoute);
parcelHelpers.export(exports, "useRouter", ()=>useRouter);
parcelHelpers.export(exports, "viewDepthKey", ()=>viewDepthKey);
/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */ var _vue = require("vue");
var _devtoolsApi = require("@vue/devtools-api");
const isBrowser = typeof window !== "undefined";
function isESModule(obj) {
    return obj.__esModule || obj[Symbol.toStringTag] === "Module";
}
const assign = Object.assign;
function applyToParams(fn, params) {
    const newParams = {};
    for(const key in params){
        const value = params[key];
        newParams[key] = isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
}
const noop = ()=>{};
/**
 * Typesafe alternative to Array.isArray
 * https://github.com/microsoft/TypeScript/pull/48228
 */ const isArray = Array.isArray;
function warn(msg) {
    // avoid using ...args as it breaks in older Edge builds
    const args = Array.from(arguments).slice(1);
    console.warn.apply(console, [
        "[Vue Router warn]: " + msg
    ].concat(args));
}
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path)=>path.replace(TRAILING_SLASH_RE, "");
/**
 * Transforms a URI into a normalized history location
 *
 * @param parseQuery
 * @param location - URI to normalize
 * @param currentLocation - current absolute location. Allows resolving relative
 * paths. Must start with `/`. Defaults to `/`
 * @returns a normalized history location
 */ function parseURL(parseQuery, location1, currentLocation = "/") {
    let path, query = {}, searchString = "", hash = "";
    // Could use URL and URLSearchParams but IE 11 doesn't support it
    // TODO: move to new URL()
    const hashPos = location1.indexOf("#");
    let searchPos = location1.indexOf("?");
    // the hash appears before the search, so it's not part of the search string
    if (hashPos < searchPos && hashPos >= 0) searchPos = -1;
    if (searchPos > -1) {
        path = location1.slice(0, searchPos);
        searchString = location1.slice(searchPos + 1, hashPos > -1 ? hashPos : location1.length);
        query = parseQuery(searchString);
    }
    if (hashPos > -1) {
        path = path || location1.slice(0, hashPos);
        // keep the # character
        hash = location1.slice(hashPos, location1.length);
    }
    // no search and no query
    path = resolveRelativePath(path != null ? path : location1, currentLocation);
    // empty path means a relative query or hash `?foo=f`, `#thing`
    return {
        fullPath: path + (searchString && "?") + searchString + hash,
        path,
        query,
        hash
    };
}
/**
 * Stringifies a URL object
 *
 * @param stringifyQuery
 * @param location
 */ function stringifyURL(stringifyQuery, location1) {
    const query = location1.query ? stringifyQuery(location1.query) : "";
    return location1.path + (query && "?") + query + (location1.hash || "");
}
/**
 * Strips off the base from the beginning of a location.pathname in a non-case-sensitive way.
 *
 * @param pathname - location.pathname
 * @param base - base to strip off
 */ function stripBase(pathname, base) {
    // no base or base is not found at the beginning
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase())) return pathname;
    return pathname.slice(base.length) || "/";
}
/**
 * Checks if two RouteLocation are equal. This means that both locations are
 * pointing towards the same {@link RouteRecord} and that all `params`, `query`
 * parameters and `hash` are the same
 *
 * @param a - first {@link RouteLocation}
 * @param b - second {@link RouteLocation}
 */ function isSameRouteLocation(stringifyQuery, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery(a.query) === stringifyQuery(b.query) && a.hash === b.hash;
}
/**
 * Check if two `RouteRecords` are equal. Takes into account aliases: they are
 * considered equal to the `RouteRecord` they are aliasing.
 *
 * @param a - first {@link RouteRecord}
 * @param b - second {@link RouteRecord}
 */ function isSameRouteRecord(a, b) {
    // since the original record has an undefined value for aliasOf
    // but all aliases point to the original record, this will always compare
    // the original record
    return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) return false;
    for(const key in a){
        if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
    }
    return true;
}
function isSameRouteLocationParamsValue(a, b) {
    return isArray(a) ? isEquivalentArray(a, b) : isArray(b) ? isEquivalentArray(b, a) : a === b;
}
/**
 * Check if two arrays are the same or if an array with one single entry is the
 * same as another primitive value. Used to check query and parameters
 *
 * @param a - array of values
 * @param b - array of values or a single value
 */ function isEquivalentArray(a, b) {
    return isArray(b) ? a.length === b.length && a.every((value, i)=>value === b[i]) : a.length === 1 && a[0] === b;
}
/**
 * Resolves a relative path that starts with `.`.
 *
 * @param to - path location we are resolving
 * @param from - currentLocation.path, should start with `/`
 */ function resolveRelativePath(to, from) {
    if (to.startsWith("/")) return to;
    if (!from.startsWith("/")) {
        warn(`Cannot resolve a relative location without an absolute path. Trying to resolve "${to}" from "${from}". It should look like "/${from}".`);
        return to;
    }
    if (!to) return from;
    const fromSegments = from.split("/");
    const toSegments = to.split("/");
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for(toPosition = 0; toPosition < toSegments.length; toPosition++){
        segment = toSegments[toPosition];
        // we stay on the same position
        if (segment === ".") continue;
        // go up in the from array
        if (segment === "..") // we can't go below zero, but we still need to increment toPosition
        {
            if (position > 1) position--;
        } else break;
    }
    return fromSegments.slice(0, position).join("/") + "/" + toSegments// ensure we use at least the last element in the toSegments
    .slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
}
var NavigationType;
(function(NavigationType) {
    NavigationType["pop"] = "pop";
    NavigationType["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection) {
    NavigationDirection["back"] = "back";
    NavigationDirection["forward"] = "forward";
    NavigationDirection["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
/**
 * Starting location for Histories
 */ const START = "";
// Generic utils
/**
 * Normalizes a base by removing any trailing slash and reading the base tag if
 * present.
 *
 * @param base - base to normalize
 */ function normalizeBase(base) {
    if (!base) {
        if (isBrowser) {
            // respect <base> tag
            const baseEl = document.querySelector("base");
            base = baseEl && baseEl.getAttribute("href") || "/";
            // strip full URL origin
            base = base.replace(/^\w+:\/\/[^\/]+/, "");
        } else base = "/";
    }
    // ensure leading slash when it was removed by the regex above avoid leading
    // slash with hash because the file could be read from the disk like file://
    // and the leading slash would cause problems
    if (base[0] !== "/" && base[0] !== "#") base = "/" + base;
    // remove the trailing slash so all other method can just do `base + fullPath`
    // to build an href
    return removeTrailingSlash(base);
}
// remove any character before the hash
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location1) {
    return base.replace(BEFORE_HASH_RE, "#") + location1;
}
function getElementPosition(el, offset) {
    const docRect = document.documentElement.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
        behavior: offset.behavior,
        left: elRect.left - docRect.left - (offset.left || 0),
        top: elRect.top - docRect.top - (offset.top || 0)
    };
}
const computeScrollPosition = ()=>({
        left: window.pageXOffset,
        top: window.pageYOffset
    });
function scrollToPosition(position) {
    let scrollToOptions;
    if ("el" in position) {
        const positionEl = position.el;
        const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
        /**
         * `id`s can accept pretty much any characters, including CSS combinators
         * like `>` or `~`. It's still possible to retrieve elements using
         * `document.getElementById('~')` but it needs to be escaped when using
         * `document.querySelector('#\\~')` for it to be valid. The only
         * requirements for `id`s are them to be unique on the page and to not be
         * empty (`id=""`). Because of that, when passing an id selector, it should
         * be properly escaped for it to work with `querySelector`. We could check
         * for the id selector to be simple (no CSS combinators `+ >~`) but that
         * would make things inconsistent since they are valid characters for an
         * `id` but would need to be escaped when using `querySelector`, breaking
         * their usage and ending up in no selector returned. Selectors need to be
         * escaped:
         *
         * - `#1-thing` becomes `#\31 -thing`
         * - `#with~symbols` becomes `#with\\~symbols`
         *
         * - More information about  the topic can be found at
         *   https://mathiasbynens.be/notes/html5-id-class.
         * - Practical example: https://mathiasbynens.be/demo/html5-id
         */ if (typeof position.el === "string") {
            if (!isIdSelector || !document.getElementById(position.el.slice(1))) try {
                const foundEl = document.querySelector(position.el);
                if (isIdSelector && foundEl) {
                    warn(`The selector "${position.el}" should be passed as "el: document.querySelector('${position.el}')" because it starts with "#".`);
                    // return to avoid other warnings
                    return;
                }
            } catch (err) {
                warn(`The selector "${position.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
                // return to avoid other warnings
                return;
            }
        }
        const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
        if (!el) {
            warn(`Couldn't find element using selector "${position.el}" returned by scrollBehavior.`);
            return;
        }
        scrollToOptions = getElementPosition(el, position);
    } else scrollToOptions = position;
    if ("scrollBehavior" in document.documentElement.style) window.scrollTo(scrollToOptions);
    else window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
}
function getScrollKey(path, delta) {
    const position = history.state ? history.state.position - delta : -1;
    return position + path;
}
const scrollPositions = new Map();
function saveScrollPosition(key, scrollPosition) {
    scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
    const scroll = scrollPositions.get(key);
    // consume it so it's not used again
    scrollPositions.delete(key);
    return scroll;
}
// TODO: RFC about how to save scroll position
/**
 * ScrollBehavior instance used by the router to compute and restore the scroll
 * position when navigating.
 */ // export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
//   // returns a scroll position that can be saved in history
//   compute(): ScrollPositionEntry
//   // can take an extended ScrollPositionEntry
//   scroll(position: ScrollPosition): void
// }
// export const scrollHandler: ScrollHandler<ScrollPosition> = {
//   compute: computeScroll,
//   scroll: scrollToPosition,
// }
let createBaseLocation = ()=>location.protocol + "//" + location.host;
/**
 * Creates a normalized history location from a window.location object
 * @param location -
 */ function createCurrentLocation(base, location1) {
    const { pathname , search , hash  } = location1;
    // allows hash bases like #, /#, #/, #!, #!/, /#!/, or even /folder#end
    const hashPos = base.indexOf("#");
    if (hashPos > -1) {
        let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
        let pathFromHash = hash.slice(slicePos);
        // prepend the starting slash to hash so the url starts with /#
        if (pathFromHash[0] !== "/") pathFromHash = "/" + pathFromHash;
        return stripBase(pathFromHash, "");
    }
    const path = stripBase(pathname, base);
    return path + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    // TODO: should it be a stack? a Dict. Check if the popstate listener
    // can trigger twice
    let pauseState = null;
    const popStateHandler = ({ state ,  })=>{
        const to = createCurrentLocation(base, location);
        const from = currentLocation.value;
        const fromState = historyState.value;
        let delta = 0;
        if (state) {
            currentLocation.value = to;
            historyState.value = state;
            // ignore the popstate and reset the pauseState
            if (pauseState && pauseState === from) {
                pauseState = null;
                return;
            }
            delta = fromState ? state.position - fromState.position : 0;
        } else replace(to);
        // console.log({ deltaFromCurrent })
        // Here we could also revert the navigation by calling history.go(-delta)
        // this listener will have to be adapted to not trigger again and to wait for the url
        // to be updated before triggering the listeners. Some kind of validation function would also
        // need to be passed to the listeners so the navigation can be accepted
        // call all listeners
        listeners.forEach((listener)=>{
            listener(currentLocation.value, from, {
                delta,
                type: NavigationType.pop,
                direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
            });
        });
    };
    function pauseListeners() {
        pauseState = currentLocation.value;
    }
    function listen(callback) {
        // set up the listener and prepare teardown callbacks
        listeners.push(callback);
        const teardown = ()=>{
            const index = listeners.indexOf(callback);
            if (index > -1) listeners.splice(index, 1);
        };
        teardowns.push(teardown);
        return teardown;
    }
    function beforeUnloadListener() {
        const { history: history1  } = window;
        if (!history1.state) return;
        history1.replaceState(assign({}, history1.state, {
            scroll: computeScrollPosition()
        }), "");
    }
    function destroy() {
        for (const teardown of teardowns)teardown();
        teardowns = [];
        window.removeEventListener("popstate", popStateHandler);
        window.removeEventListener("beforeunload", beforeUnloadListener);
    }
    // set up the listeners and prepare teardown callbacks
    window.addEventListener("popstate", popStateHandler);
    window.addEventListener("beforeunload", beforeUnloadListener);
    return {
        pauseListeners,
        listen,
        destroy
    };
}
/**
 * Creates a state object
 */ function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
        back,
        current,
        forward,
        replaced,
        position: window.history.length,
        scroll: computeScroll ? computeScrollPosition() : null
    };
}
function useHistoryStateNavigation(base) {
    const { history: history1 , location: location1  } = window;
    // private variables
    const currentLocation = {
        value: createCurrentLocation(base, location1)
    };
    const historyState = {
        value: history1.state
    };
    // build current history entry as this is a fresh navigation
    if (!historyState.value) changeLocation(currentLocation.value, {
        back: null,
        current: currentLocation.value,
        forward: null,
        // the length is off by one, we need to decrease it
        position: history1.length - 1,
        replaced: true,
        // don't add a scroll as the user may have an anchor, and we want
        // scrollBehavior to be triggered without a saved position
        scroll: null
    }, true);
    function changeLocation(to, state, replace) {
        /**
         * if a base tag is provided, and we are on a normal domain, we have to
         * respect the provided `base` attribute because pushState() will use it and
         * potentially erase anything before the `#` like at
         * https://github.com/vuejs/router/issues/685 where a base of
         * `/folder/#` but a base of `/` would erase the `/folder/` section. If
         * there is no host, the `<base>` tag makes no sense and if there isn't a
         * base tag we can just use everything after the `#`.
         */ const hashIndex = base.indexOf("#");
        const url = hashIndex > -1 ? (location1.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
        try {
            // BROWSER QUIRK
            // NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
            history1[replace ? "replaceState" : "pushState"](state, "", url);
            historyState.value = state;
        } catch (err) {
            warn("Error with push/replace State", err);
            // Force the navigation, this also resets the call count
            location1[replace ? "replace" : "assign"](url);
        }
    }
    function replace(to, data) {
        const state = assign({}, history1.state, buildState(historyState.value.back, // keep back and forward entries but override current position
        to, historyState.value.forward, true), data, {
            position: historyState.value.position
        });
        changeLocation(to, state, true);
        currentLocation.value = to;
    }
    function push(to, data) {
        // Add to current entry the information of where we are going
        // as well as saving the current position
        const currentState = assign({}, // use current history state to gracefully handle a wrong call to
        // history.replaceState
        // https://github.com/vuejs/router/issues/366
        historyState.value, history1.state, {
            forward: to,
            scroll: computeScrollPosition()
        });
        if (!history1.state) warn(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:\n\n` + `history.replaceState(history.state, '', url)\n\n` + `You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`);
        changeLocation(currentState.current, currentState, true);
        const state = assign({}, buildState(currentLocation.value, to, null), {
            position: currentState.position + 1
        }, data);
        changeLocation(to, state, false);
        currentLocation.value = to;
    }
    return {
        location: currentLocation,
        state: historyState,
        push,
        replace
    };
}
/**
 * Creates an HTML5 history. Most common history for single page applications.
 *
 * @param base -
 */ function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
        if (!triggerListeners) historyListeners.pauseListeners();
        history.go(delta);
    }
    const routerHistory = assign({
        // it's overridden right after
        location: "",
        base,
        go,
        createHref: createHref.bind(null, base)
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, "location", {
        enumerable: true,
        get: ()=>historyNavigation.location.value
    });
    Object.defineProperty(routerHistory, "state", {
        enumerable: true,
        get: ()=>historyNavigation.state.value
    });
    return routerHistory;
}
/**
 * Creates an in-memory based history. The main purpose of this history is to handle SSR. It starts in a special location that is nowhere.
 * It's up to the user to replace that location with the starter location by either calling `router.push` or `router.replace`.
 *
 * @param base - Base applied to all urls, defaults to '/'
 * @returns a history object that can be passed to the router constructor
 */ function createMemoryHistory(base = "") {
    let listeners = [];
    let queue = [
        START
    ];
    let position = 0;
    base = normalizeBase(base);
    function setLocation(location1) {
        position++;
        if (position === queue.length) // we are at the end, we can simply append a new entry
        queue.push(location1);
        else {
            // we are in the middle, we remove everything from here in the queue
            queue.splice(position);
            queue.push(location1);
        }
    }
    function triggerListeners(to, from, { direction , delta  }) {
        const info = {
            direction,
            delta,
            type: NavigationType.pop
        };
        for (const callback of listeners)callback(to, from, info);
    }
    const routerHistory = {
        // rewritten by Object.defineProperty
        location: START,
        // TODO: should be kept in queue
        state: {},
        base,
        createHref: createHref.bind(null, base),
        replace (to) {
            // remove current entry and decrement position
            queue.splice(position--, 1);
            setLocation(to);
        },
        push (to, data) {
            setLocation(to);
        },
        listen (callback) {
            listeners.push(callback);
            return ()=>{
                const index = listeners.indexOf(callback);
                if (index > -1) listeners.splice(index, 1);
            };
        },
        destroy () {
            listeners = [];
            queue = [
                START
            ];
            position = 0;
        },
        go (delta, shouldTrigger = true) {
            const from = this.location;
            const direction = // we are considering delta === 0 going forward, but in abstract mode
            // using 0 for the delta doesn't make sense like it does in html5 where
            // it reloads the page
            delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
            position = Math.max(0, Math.min(position + delta, queue.length - 1));
            if (shouldTrigger) triggerListeners(this.location, from, {
                direction,
                delta
            });
        }
    };
    Object.defineProperty(routerHistory, "location", {
        enumerable: true,
        get: ()=>queue[position]
    });
    return routerHistory;
}
/**
 * Creates a hash history. Useful for web applications with no host (e.g. `file://`) or when configuring a server to
 * handle any URL is not possible.
 *
 * @param base - optional base to provide. Defaults to `location.pathname + location.search` If there is a `<base>` tag
 * in the `head`, its value will be ignored in favor of this parameter **but note it affects all the history.pushState()
 * calls**, meaning that if you use a `<base>` tag, it's `href` value **has to match this parameter** (ignoring anything
 * after the `#`).
 *
 * @example
 * ```js
 * // at https://example.com/folder
 * createWebHashHistory() // gives a url of `https://example.com/folder#`
 * createWebHashHistory('/folder/') // gives a url of `https://example.com/folder/#`
 * // if the `#` is provided in the base, it won't be added by `createWebHashHistory`
 * createWebHashHistory('/folder/#/app/') // gives a url of `https://example.com/folder/#/app/`
 * // you should avoid doing this because it changes the original url and breaks copying urls
 * createWebHashHistory('/other-folder/') // gives a url of `https://example.com/other-folder/#`
 *
 * // at file:///usr/etc/folder/index.html
 * // for locations with no `host`, the base is ignored
 * createWebHashHistory('/iAmIgnored') // gives a url of `file:///usr/etc/folder/index.html#`
 * ```
 */ function createWebHashHistory(base) {
    // Make sure this implementation is fine in terms of encoding, specially for IE11
    // for `file://`, directly use the pathname and ignore the base
    // location.pathname contains an initial `/` even at the root: `https://example.com`
    base = location.host ? base || location.pathname + location.search : "";
    // allow the user to provide a `#` in the middle: `/base/#/app`
    if (!base.includes("#")) base += "#";
    if (!base.endsWith("#/") && !base.endsWith("#")) warn(`A hash base must end with a "#":\n"${base}" should be "${base.replace(/#.*$/, "#")}".`);
    return createWebHistory(base);
}
function isRouteLocation(route) {
    return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
    return typeof name === "string" || typeof name === "symbol";
}
/**
 * Initial route location where the router is. Can be used in navigation guards
 * to differentiate the initial navigation.
 *
 * @example
 * ```js
 * import { START_LOCATION } from 'vue-router'
 *
 * router.beforeEach((to, from) => {
 *   if (from === START_LOCATION) {
 *     // initial navigation
 *   }
 * })
 * ```
 */ const START_LOCATION_NORMALIZED = {
    path: "/",
    name: undefined,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: undefined
};
const NavigationFailureSymbol = Symbol("navigation failure");
/**
 * Enumeration with all possible types for navigation failures. Can be passed to
 * {@link isNavigationFailure} to check for specific failures.
 */ var NavigationFailureType;
(function(NavigationFailureType) {
    /**
     * An aborted navigation is a navigation that failed because a navigation
     * guard returned `false` or called `next(false)`
     */ NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    /**
     * A cancelled navigation is a navigation that failed because a more recent
     * navigation finished started (not necessarily finished).
     */ NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    /**
     * A duplicated navigation is a navigation that failed because it was
     * initiated while already being at the exact same location.
     */ NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
// DEV only debug messages
const ErrorTypeMessages = {
    [1 /* ErrorTypes.MATCHER_NOT_FOUND */ ] ({ location: location1 , currentLocation  }) {
        return `No match for\n ${JSON.stringify(location1)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
    },
    [2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */ ] ({ from , to ,  }) {
        return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [4 /* ErrorTypes.NAVIGATION_ABORTED */ ] ({ from , to  }) {
        return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [8 /* ErrorTypes.NAVIGATION_CANCELLED */ ] ({ from , to  }) {
        return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [16 /* ErrorTypes.NAVIGATION_DUPLICATED */ ] ({ from , to  }) {
        return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    }
};
function createRouterError(type, params) {
    return assign(new Error(ErrorTypeMessages[type](params)), {
        type,
        [NavigationFailureSymbol]: true
    }, params);
}
function isNavigationFailure(error, type) {
    return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const propertiesToLog = [
    "params",
    "query",
    "hash"
];
function stringifyRoute(to) {
    if (typeof to === "string") return to;
    if ("path" in to) return to.path;
    const location1 = {};
    for (const key of propertiesToLog)if (key in to) location1[key] = to[key];
    return JSON.stringify(location1, null, 2);
}
// default pattern for a param: non-greedy everything but /
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
};
// Special Regex characters that must be escaped in static tokens
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
 * Creates a path parser from an array of Segments (a segment is an array of Tokens)
 *
 * @param segments - array of segments returned by tokenizePath
 * @param extraOptions - optional options for the regexp
 * @returns a PathParser
 */ function tokensToParser(segments, extraOptions) {
    const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    // the amount of scores is the same as the length of segments except for the root segment "/"
    const score = [];
    // the regexp as a string
    let pattern = options.start ? "^" : "";
    // extracted keys
    const keys = [];
    for (const segment of segments){
        // the root segment needs special treatment
        const segmentScores = segment.length ? [] : [
            90 /* PathScore.Root */ 
        ];
        // allow trailing slash
        if (options.strict && !segment.length) pattern += "/";
        for(let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++){
            const token = segment[tokenIndex];
            // resets the score if we are inside a sub-segment /:a-other-:b
            let subSegmentScore = 40 /* PathScore.Segment */  + (options.sensitive ? 0.25 /* PathScore.BonusCaseSensitive */  : 0);
            if (token.type === 0 /* TokenType.Static */ ) {
                // prepend the slash if we are starting a new segment
                if (!tokenIndex) pattern += "/";
                pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
                subSegmentScore += 40 /* PathScore.Static */ ;
            } else if (token.type === 1 /* TokenType.Param */ ) {
                const { value , repeatable , optional , regexp  } = token;
                keys.push({
                    name: value,
                    repeatable,
                    optional
                });
                const re = regexp ? regexp : BASE_PARAM_PATTERN;
                // the user provided a custom regexp /:id(\\d+)
                if (re !== BASE_PARAM_PATTERN) {
                    subSegmentScore += 10 /* PathScore.BonusCustomRegExp */ ;
                    // make sure the regexp is valid before using it
                    try {
                        new RegExp(`(${re})`);
                    } catch (err) {
                        throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` + err.message);
                    }
                }
                // when we repeat we must take care of the repeating leading slash
                let subPattern = repeatable ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
                // prepend the slash if we are starting a new segment
                if (!tokenIndex) subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
                // or /:p?-:p2
                optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
                if (optional) subPattern += "?";
                pattern += subPattern;
                subSegmentScore += 20 /* PathScore.Dynamic */ ;
                if (optional) subSegmentScore += -8 /* PathScore.BonusOptional */ ;
                if (repeatable) subSegmentScore += -20 /* PathScore.BonusRepeatable */ ;
                if (re === ".*") subSegmentScore += -50 /* PathScore.BonusWildcard */ ;
            }
            segmentScores.push(subSegmentScore);
        }
        // an empty array like /home/ -> [[{home}], []]
        // if (!segment.length) pattern += '/'
        score.push(segmentScores);
    }
    // only apply the strict bonus to the last score
    if (options.strict && options.end) {
        const i = score.length - 1;
        score[i][score[i].length - 1] += 0.7000000000000001 /* PathScore.BonusStrict */ ;
    }
    // TODO: dev only warn double trailing slash
    if (!options.strict) pattern += "/?";
    if (options.end) pattern += "$";
    else if (options.strict) pattern += "(?:/|$)";
    const re1 = new RegExp(pattern, options.sensitive ? "" : "i");
    function parse(path) {
        const match = path.match(re1);
        const params = {};
        if (!match) return null;
        for(let i = 1; i < match.length; i++){
            const value = match[i] || "";
            const key = keys[i - 1];
            params[key.name] = value && key.repeatable ? value.split("/") : value;
        }
        return params;
    }
    function stringify(params) {
        let path = "";
        // for optional parameters to allow to be empty
        let avoidDuplicatedSlash = false;
        for (const segment of segments){
            if (!avoidDuplicatedSlash || !path.endsWith("/")) path += "/";
            avoidDuplicatedSlash = false;
            for (const token of segment){
                if (token.type === 0 /* TokenType.Static */ ) path += token.value;
                else if (token.type === 1 /* TokenType.Param */ ) {
                    const { value , repeatable , optional  } = token;
                    const param = value in params ? params[value] : "";
                    if (isArray(param) && !repeatable) throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
                    const text = isArray(param) ? param.join("/") : param;
                    if (!text) {
                        if (optional) // if we have more than one optional param like /:a?-static we don't need to care about the optional param
                        {
                            if (segment.length < 2) {
                                // remove the last slash as we could be at the end
                                if (path.endsWith("/")) path = path.slice(0, -1);
                                else avoidDuplicatedSlash = true;
                            }
                        } else throw new Error(`Missing required param "${value}"`);
                    }
                    path += text;
                }
            }
        }
        // avoid empty path when we have multiple optional params
        return path || "/";
    }
    return {
        re: re1,
        score,
        keys,
        parse,
        stringify
    };
}
/**
 * Compares an array of numbers as used in PathParser.score and returns a
 * number. This function can be used to `sort` an array
 *
 * @param a - first array of numbers
 * @param b - second array of numbers
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 * should be sorted first
 */ function compareScoreArray(a, b) {
    let i = 0;
    while(i < a.length && i < b.length){
        const diff = b[i] - a[i];
        // only keep going if diff === 0
        if (diff) return diff;
        i++;
    }
    // if the last subsegment was Static, the shorter segments should be sorted first
    // otherwise sort the longest segment first
    if (a.length < b.length) return a.length === 1 && a[0] === 80 /* PathScore.Segment */  ? -1 : 1;
    else if (a.length > b.length) return b.length === 1 && b[0] === 80 /* PathScore.Segment */  ? 1 : -1;
    return 0;
}
/**
 * Compare function that can be used with `sort` to sort an array of PathParser
 *
 * @param a - first PathParser
 * @param b - second PathParser
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 */ function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while(i < aScore.length && i < bScore.length){
        const comp = compareScoreArray(aScore[i], bScore[i]);
        // do not return if both are equal
        if (comp) return comp;
        i++;
    }
    if (Math.abs(bScore.length - aScore.length) === 1) {
        if (isLastScoreNegative(aScore)) return 1;
        if (isLastScoreNegative(bScore)) return -1;
    }
    // if a and b share the same score entries but b has more, sort b first
    return bScore.length - aScore.length;
// this is the ternary version
// return aScore.length < bScore.length
//   ? 1
//   : aScore.length > bScore.length
//   ? -1
//   : 0
}
/**
 * This allows detecting splats at the end of a path: /home/:id(.*)*
 *
 * @param score - score to check
 * @returns true if the last entry is negative
 */ function isLastScoreNegative(score) {
    const last = score[score.length - 1];
    return score.length > 0 && last[last.length - 1] < 0;
}
const ROOT_TOKEN = {
    type: 0 /* TokenType.Static */ ,
    value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
// After some profiling, the cache seems to be unnecessary because tokenizePath
// (the slowest part of adding a route) is very fast
// const tokenCache = new Map<string, Token[][]>()
function tokenizePath(path) {
    if (!path) return [
        []
    ];
    if (path === "/") return [
        [
            ROOT_TOKEN
        ]
    ];
    if (!path.startsWith("/")) throw new Error(`Route paths should start with a "/": "${path}" should be "/${path}".`);
    // if (tokenCache.has(path)) return tokenCache.get(path)!
    function crash(message) {
        throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0 /* TokenizerState.Static */ ;
    let previousState = state;
    const tokens = [];
    // the segment will always be valid because we get into the initial state
    // with the leading /
    let segment;
    function finalizeSegment() {
        if (segment) tokens.push(segment);
        segment = [];
    }
    // index on the path
    let i = 0;
    // char at index
    let char;
    // buffer of the value read
    let buffer = "";
    // custom regexp for a param
    let customRe = "";
    function consumeBuffer() {
        if (!buffer) return;
        if (state === 0 /* TokenizerState.Static */ ) segment.push({
            type: 0 /* TokenType.Static */ ,
            value: buffer
        });
        else if (state === 1 /* TokenizerState.Param */  || state === 2 /* TokenizerState.ParamRegExp */  || state === 3 /* TokenizerState.ParamRegExpEnd */ ) {
            if (segment.length > 1 && (char === "*" || char === "+")) crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
            segment.push({
                type: 1 /* TokenType.Param */ ,
                value: buffer,
                regexp: customRe,
                repeatable: char === "*" || char === "+",
                optional: char === "*" || char === "?"
            });
        } else crash("Invalid state to consume buffer");
        buffer = "";
    }
    function addCharToBuffer() {
        buffer += char;
    }
    while(i < path.length){
        char = path[i++];
        if (char === "\\" && state !== 2 /* TokenizerState.ParamRegExp */ ) {
            previousState = state;
            state = 4 /* TokenizerState.EscapeNext */ ;
            continue;
        }
        switch(state){
            case 0 /* TokenizerState.Static */ :
                if (char === "/") {
                    if (buffer) consumeBuffer();
                    finalizeSegment();
                } else if (char === ":") {
                    consumeBuffer();
                    state = 1 /* TokenizerState.Param */ ;
                } else addCharToBuffer();
                break;
            case 4 /* TokenizerState.EscapeNext */ :
                addCharToBuffer();
                state = previousState;
                break;
            case 1 /* TokenizerState.Param */ :
                if (char === "(") state = 2 /* TokenizerState.ParamRegExp */ ;
                else if (VALID_PARAM_RE.test(char)) addCharToBuffer();
                else {
                    consumeBuffer();
                    state = 0 /* TokenizerState.Static */ ;
                    // go back one character if we were not modifying
                    if (char !== "*" && char !== "?" && char !== "+") i--;
                }
                break;
            case 2 /* TokenizerState.ParamRegExp */ :
                // TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
                // it already works by escaping the closing )
                // https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
                // is this really something people need since you can also write
                // /prefix_:p()_suffix
                if (char === ")") {
                    // handle the escaped )
                    if (customRe[customRe.length - 1] == "\\") customRe = customRe.slice(0, -1) + char;
                    else state = 3 /* TokenizerState.ParamRegExpEnd */ ;
                } else customRe += char;
                break;
            case 3 /* TokenizerState.ParamRegExpEnd */ :
                // same as finalizing a param
                consumeBuffer();
                state = 0 /* TokenizerState.Static */ ;
                // go back one character if we were not modifying
                if (char !== "*" && char !== "?" && char !== "+") i--;
                customRe = "";
                break;
            default:
                crash("Unknown state");
                break;
        }
    }
    if (state === 2 /* TokenizerState.ParamRegExp */ ) crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    // tokenCache.set(path, tokens)
    return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    {
        const existingKeys = new Set();
        for (const key of parser.keys){
            if (existingKeys.has(key.name)) warn(`Found duplicated params with name "${key.name}" for path "${record.path}". Only the last one will be available on "$route.params".`);
            existingKeys.add(key.name);
        }
    }
    const matcher = assign(parser, {
        record,
        parent,
        // these needs to be populated by the parent
        children: [],
        alias: []
    });
    if (parent) // both are aliases or both are not aliases
    // we don't want to mix them because the order is used when
    // passing originalRecord in Matcher.addRoute
    {
        if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
    }
    return matcher;
}
/**
 * Creates a Router Matcher.
 *
 * @internal
 * @param routes - array of initial routes
 * @param globalOptions - global route options
 */ function createRouterMatcher(routes, globalOptions) {
    // normalized ordered array of matchers
    const matchers = [];
    const matcherMap = new Map();
    globalOptions = mergeOptions({
        strict: false,
        end: true,
        sensitive: false
    }, globalOptions);
    function getRecordMatcher(name) {
        return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
        // used later on to remove by name
        const isRootAdd = !originalRecord;
        const mainNormalizedRecord = normalizeRouteRecord(record);
        checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent);
        // we might be the child of an alias
        mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
        const options = mergeOptions(globalOptions, record);
        // generate an array of records to correctly handle aliases
        const normalizedRecords = [
            mainNormalizedRecord, 
        ];
        if ("alias" in record) {
            const aliases = typeof record.alias === "string" ? [
                record.alias
            ] : record.alias;
            for (const alias of aliases)normalizedRecords.push(assign({}, mainNormalizedRecord, {
                // this allows us to hold a copy of the `components` option
                // so that async components cache is hold on the original record
                components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
                path: alias,
                // we might be the child of an alias
                aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
            }));
        }
        let matcher;
        let originalMatcher;
        for (const normalizedRecord of normalizedRecords){
            const { path  } = normalizedRecord;
            // Build up the path for nested routes if the child isn't an absolute
            // route. Only add the / delimiter if the child path isn't empty and if the
            // parent path doesn't have a trailing slash
            if (parent && path[0] !== "/") {
                const parentPath = parent.record.path;
                const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
                normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
            }
            if (normalizedRecord.path === "*") throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\nSee more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.');
            // create the object beforehand, so it can be passed to children
            matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
            if (parent && path[0] === "/") checkMissingParamsInAbsolutePath(matcher, parent);
            // if we are an alias we must tell the original record that we exist,
            // so we can be removed
            if (originalRecord) {
                originalRecord.alias.push(matcher);
                checkSameParams(originalRecord, matcher);
            } else {
                // otherwise, the first record is the original and others are aliases
                originalMatcher = originalMatcher || matcher;
                if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
                // remove the route if named and only for the top record (avoid in nested calls)
                // this works because the original record is the first one
                if (isRootAdd && record.name && !isAliasRecord(matcher)) removeRoute(record.name);
            }
            if (mainNormalizedRecord.children) {
                const children = mainNormalizedRecord.children;
                for(let i = 0; i < children.length; i++)addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
            }
            // if there was no original record, then the first one was not an alias and all
            // other aliases (if any) need to reference this record when adding children
            originalRecord = originalRecord || matcher;
            // TODO: add normalized records for more flexibility
            // if (parent && isAliasRecord(originalRecord)) {
            //   parent.children.push(originalRecord)
            // }
            insertMatcher(matcher);
        }
        return originalMatcher ? ()=>{
            // since other matchers are aliases, they should be removed by the original matcher
            removeRoute(originalMatcher);
        } : noop;
    }
    function removeRoute(matcherRef) {
        if (isRouteName(matcherRef)) {
            const matcher = matcherMap.get(matcherRef);
            if (matcher) {
                matcherMap.delete(matcherRef);
                matchers.splice(matchers.indexOf(matcher), 1);
                matcher.children.forEach(removeRoute);
                matcher.alias.forEach(removeRoute);
            }
        } else {
            const index = matchers.indexOf(matcherRef);
            if (index > -1) {
                matchers.splice(index, 1);
                if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
                matcherRef.children.forEach(removeRoute);
                matcherRef.alias.forEach(removeRoute);
            }
        }
    }
    function getRoutes() {
        return matchers;
    }
    function insertMatcher(matcher) {
        let i = 0;
        while(i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))i++;
        matchers.splice(i, 0, matcher);
        // only add the original record to the name map
        if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location1, currentLocation) {
        let matcher;
        let params = {};
        let path;
        let name;
        if ("name" in location1 && location1.name) {
            matcher = matcherMap.get(location1.name);
            if (!matcher) throw createRouterError(1 /* ErrorTypes.MATCHER_NOT_FOUND */ , {
                location: location1
            });
            {
                const invalidParams = Object.keys(location1.params || {}).filter((paramName)=>!matcher.keys.find((k)=>k.name === paramName));
                if (invalidParams.length) warn(`Discarded invalid param(s) "${invalidParams.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
            }
            name = matcher.record.name;
            params = assign(// paramsFromLocation is a new object
            paramsFromLocation(currentLocation.params, // only keep params that exist in the resolved location
            // TODO: only keep optional params coming from a parent record
            matcher.keys.filter((k)=>!k.optional).map((k)=>k.name)), // discard any existing params in the current location that do not exist here
            // #1497 this ensures better active/exact matching
            location1.params && paramsFromLocation(location1.params, matcher.keys.map((k)=>k.name)));
            // throws if cannot be stringified
            path = matcher.stringify(params);
        } else if ("path" in location1) {
            // no need to resolve the path with the matcher as it was provided
            // this also allows the user to control the encoding
            path = location1.path;
            if (!path.startsWith("/")) warn(`The Matcher cannot resolve relative paths but received "${path}". Unless you directly called \`matcher.resolve("${path}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`);
            matcher = matchers.find((m)=>m.re.test(path));
            // matcher should have a value after the loop
            if (matcher) {
                // we know the matcher works because we tested the regexp
                params = matcher.parse(path);
                name = matcher.record.name;
            }
        // location is a relative path
        } else {
            // match by name or path of current route
            matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m)=>m.re.test(currentLocation.path));
            if (!matcher) throw createRouterError(1 /* ErrorTypes.MATCHER_NOT_FOUND */ , {
                location: location1,
                currentLocation
            });
            name = matcher.record.name;
            // since we are navigating to the same location, we don't need to pick the
            // params like when `name` is provided
            params = assign({}, currentLocation.params, location1.params);
            path = matcher.stringify(params);
        }
        const matched = [];
        let parentMatcher = matcher;
        while(parentMatcher){
            // reversed order so parents are at the beginning
            matched.unshift(parentMatcher.record);
            parentMatcher = parentMatcher.parent;
        }
        return {
            name,
            path,
            params,
            matched,
            meta: mergeMetaFields(matched)
        };
    }
    // add initial routes
    routes.forEach((route)=>addRoute(route));
    return {
        addRoute,
        resolve,
        removeRoute,
        getRoutes,
        getRecordMatcher
    };
}
function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys)if (key in params) newParams[key] = params[key];
    return newParams;
}
/**
 * Normalizes a RouteRecordRaw. Creates a copy
 *
 * @param record
 * @returns the normalized version
 */ function normalizeRouteRecord(record) {
    return {
        path: record.path,
        redirect: record.redirect,
        name: record.name,
        meta: record.meta || {},
        aliasOf: undefined,
        beforeEnter: record.beforeEnter,
        props: normalizeRecordProps(record),
        children: record.children || [],
        instances: {},
        leaveGuards: new Set(),
        updateGuards: new Set(),
        enterCallbacks: {},
        components: "components" in record ? record.components || null : record.component && {
            default: record.component
        }
    };
}
/**
 * Normalize the optional `props` in a record to always be an object similar to
 * components. Also accept a boolean for components.
 * @param record
 */ function normalizeRecordProps(record) {
    const propsObject = {};
    // props does not exist on redirect records, but we can set false directly
    const props = record.props || false;
    if ("component" in record) propsObject.default = props;
    else // NOTE: we could also allow a function to be applied to every component.
    // Would need user feedback for use cases
    for(const name in record.components)propsObject[name] = typeof props === "boolean" ? props : props[name];
    return propsObject;
}
/**
 * Checks if a record or any of its parent is an alias
 * @param record
 */ function isAliasRecord(record) {
    while(record){
        if (record.record.aliasOf) return true;
        record = record.parent;
    }
    return false;
}
/**
 * Merge meta fields of an array of records
 *
 * @param matched - array of matched records
 */ function mergeMetaFields(matched) {
    return matched.reduce((meta, record)=>assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
    const options = {};
    for(const key in defaults)options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
    return options;
}
function isSameParam(a, b) {
    return a.name === b.name && a.optional === b.optional && a.repeatable === b.repeatable;
}
/**
 * Check if a path and its alias have the same required params
 *
 * @param a - original record
 * @param b - alias record
 */ function checkSameParams(a, b) {
    for (const key of a.keys){
        if (!key.optional && !b.keys.find(isSameParam.bind(null, key))) return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key.name}"`);
    }
    for (const key1 of b.keys){
        if (!key1.optional && !a.keys.find(isSameParam.bind(null, key1))) return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key1.name}"`);
    }
}
/**
 * A route with a name and a child with an empty path without a name should warn when adding the route
 *
 * @param mainNormalizedRecord - RouteRecordNormalized
 * @param parent - RouteRecordMatcher
 */ function checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent) {
    if (parent && parent.record.name && !mainNormalizedRecord.name && !mainNormalizedRecord.path) warn(`The route named "${String(parent.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function checkMissingParamsInAbsolutePath(record, parent) {
    for (const key of parent.keys){
        if (!record.keys.find(isSameParam.bind(null, key))) return warn(`Absolute path "${record.record.path}" must have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
    }
}
function isRecordChildOf(record, parent) {
    return parent.children.some((child)=>child === record || isRecordChildOf(record, child));
}
/**
 * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
 * < > `
 *
 * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
 * defines some extra characters to be encoded. Most browsers do not encode them
 * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
 * also encode `!'()*`. Leaving un-encoded only ASCII alphanumeric(`a-zA-Z0-9`)
 * plus `-._~`. This extra safety should be applied to query by patching the
 * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
 * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
 * into a `/` if directly typed in. The _backtick_ (`````) should also be
 * encoded everywhere because some browsers like FF encode it when directly
 * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
 */ // const EXTRA_RESERVED_RE = /[!'()*]/g
// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)
const HASH_RE = /#/g; // %23
const AMPERSAND_RE = /&/g; // %26
const SLASH_RE = /\//g; // %2F
const EQUAL_RE = /=/g; // %3D
const IM_RE = /\?/g; // %3F
const PLUS_RE = /\+/g; // %2B
/**
 * NOTE: It's not clear to me if we should encode the + symbol in queries, it
 * seems to be less flexible than not doing so and I can't find out the legacy
 * systems requiring this for regular requests like text/html. In the standard,
 * the encoding of the plus character is only mentioned for
 * application/x-www-form-urlencoded
 * (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
 * leave the plus character as is in queries. To be more flexible, we allow the
 * plus character on the query, but it can also be manually encoded by the user.
 *
 * Resources:
 * - https://url.spec.whatwg.org/#urlencoded-parsing
 * - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
 */ const ENC_BRACKET_OPEN_RE = /%5B/g; // [
const ENC_BRACKET_CLOSE_RE = /%5D/g; // ]
const ENC_CARET_RE = /%5E/g; // ^
const ENC_BACKTICK_RE = /%60/g; // `
const ENC_CURLY_OPEN_RE = /%7B/g; // {
const ENC_PIPE_RE = /%7C/g; // |
const ENC_CURLY_CLOSE_RE = /%7D/g; // }
const ENC_SPACE_RE = /%20/g; // }
/**
 * Encode characters that need to be encoded on the path, search and hash
 * sections of the URL.
 *
 * @internal
 * @param text - string to encode
 * @returns encoded string
 */ function commonEncode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
/**
 * Encode characters that need to be encoded on the hash section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */ function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
/**
 * Encode characters that need to be encoded query values on the query
 * section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */ function encodeQueryValue(text) {
    return commonEncode(text)// Encode the space as +, encode the + to differentiate it from the space
    .replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
/**
 * Like `encodeQueryValue` but also encodes the `=` character.
 *
 * @param text - string to encode
 */ function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
/**
 * Encode characters that need to be encoded on the path section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */ function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
/**
 * Encode characters that need to be encoded on the path section of the URL as a
 * param. This function encodes everything {@link encodePath} does plus the
 * slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
 * string instead.
 *
 * @param text - string to encode
 * @returns encoded string
 */ function encodeParam(text) {
    return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
/**
 * Decode text using `decodeURIComponent`. Returns the original text if it
 * fails.
 *
 * @param text - string to decode
 * @returns decoded string
 */ function decode(text) {
    try {
        return decodeURIComponent("" + text);
    } catch (err) {
        warn(`Error decoding "${text}". Using original value`);
    }
    return "" + text;
}
/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams

 * @internal
 *
 * @param search - search string to parse
 * @returns a query object
 */ function parseQuery(search) {
    const query = {};
    // avoid creating an object with an empty key and empty value
    // because of split('&')
    if (search === "" || search === "?") return query;
    const hasLeadingIM = search[0] === "?";
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
    for(let i = 0; i < searchParams.length; ++i){
        // pre decode the + into space
        const searchParam = searchParams[i].replace(PLUS_RE, " ");
        // allow the = character
        const eqPos = searchParam.indexOf("=");
        const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
        const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
        if (key in query) {
            // an extra variable for ts types
            let currentValue = query[key];
            if (!isArray(currentValue)) currentValue = query[key] = [
                currentValue
            ];
            currentValue.push(value);
        } else query[key] = value;
    }
    return query;
}
/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @internal
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */ function stringifyQuery(query) {
    let search = "";
    for(let key in query){
        const value = query[key];
        key = encodeQueryKey(key);
        if (value == null) {
            // only null adds the value
            if (value !== undefined) search += (search.length ? "&" : "") + key;
            continue;
        }
        // keep null values
        const values = isArray(value) ? value.map((v)=>v && encodeQueryValue(v)) : [
            value && encodeQueryValue(value)
        ];
        values.forEach((value)=>{
            // skip undefined values in arrays as if they were not present
            // smaller code than using filter
            if (value !== undefined) {
                // only append & with non-empty search
                search += (search.length ? "&" : "") + key;
                if (value != null) search += "=" + value;
            }
        });
    }
    return search;
}
/**
 * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
 * numbers into strings, removing keys with an undefined value and replacing
 * undefined with null in arrays
 *
 * @param query - query object to normalize
 * @returns a normalized query object
 */ function normalizeQuery(query) {
    const normalizedQuery = {};
    for(const key in query){
        const value = query[key];
        if (value !== undefined) normalizedQuery[key] = isArray(value) ? value.map((v)=>v == null ? null : "" + v) : value == null ? value : "" + value;
    }
    return normalizedQuery;
}
/**
 * RouteRecord being rendered by the closest ancestor Router View. Used for
 * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
 * Location Matched
 *
 * @internal
 */ const matchedRouteKey = Symbol("router view location matched");
/**
 * Allows overriding the router view depth to control which component in
 * `matched` is rendered. rvd stands for Router View Depth
 *
 * @internal
 */ const viewDepthKey = Symbol("router view depth");
/**
 * Allows overriding the router instance returned by `useRouter` in tests. r
 * stands for router
 *
 * @internal
 */ const routerKey = Symbol("router");
/**
 * Allows overriding the current route returned by `useRoute` in tests. rl
 * stands for route location
 *
 * @internal
 */ const routeLocationKey = Symbol("route location");
/**
 * Allows overriding the current route used by router-view. Internally this is
 * used when the `route` prop is passed.
 *
 * @internal
 */ const routerViewLocationKey = Symbol("router view location");
/**
 * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
 */ function useCallbacks() {
    let handlers = [];
    function add(handler) {
        handlers.push(handler);
        return ()=>{
            const i = handlers.indexOf(handler);
            if (i > -1) handlers.splice(i, 1);
        };
    }
    function reset() {
        handlers = [];
    }
    return {
        add,
        list: ()=>handlers,
        reset
    };
}
function registerGuard(record, name, guard) {
    const removeFromList = ()=>{
        record[name].delete(guard);
    };
    (0, _vue.onUnmounted)(removeFromList);
    (0, _vue.onDeactivated)(removeFromList);
    (0, _vue.onActivated)(()=>{
        record[name].add(guard);
    });
    record[name].add(guard);
}
/**
 * Add a navigation guard that triggers whenever the component for the current
 * location is about to be left. Similar to {@link beforeRouteLeave} but can be
 * used in any component. The guard is removed when the component is unmounted.
 *
 * @param leaveGuard - {@link NavigationGuard}
 */ function onBeforeRouteLeave(leaveGuard) {
    if (!(0, _vue.getCurrentInstance)()) {
        warn("getCurrentInstance() returned null. onBeforeRouteLeave() must be called at the top of a setup function");
        return;
    }
    const activeRecord = (0, _vue.inject)(matchedRouteKey, // to avoid warning
    {}).value;
    if (!activeRecord) {
        warn("No active route record was found when calling `onBeforeRouteLeave()`. Make sure you call this function inside a component child of <router-view>. Maybe you called it inside of App.vue?");
        return;
    }
    registerGuard(activeRecord, "leaveGuards", leaveGuard);
}
/**
 * Add a navigation guard that triggers whenever the current location is about
 * to be updated. Similar to {@link beforeRouteUpdate} but can be used in any
 * component. The guard is removed when the component is unmounted.
 *
 * @param updateGuard - {@link NavigationGuard}
 */ function onBeforeRouteUpdate(updateGuard) {
    if (!(0, _vue.getCurrentInstance)()) {
        warn("getCurrentInstance() returned null. onBeforeRouteUpdate() must be called at the top of a setup function");
        return;
    }
    const activeRecord = (0, _vue.inject)(matchedRouteKey, // to avoid warning
    {}).value;
    if (!activeRecord) {
        warn("No active route record was found when calling `onBeforeRouteUpdate()`. Make sure you call this function inside a component child of <router-view>. Maybe you called it inside of App.vue?");
        return;
    }
    registerGuard(activeRecord, "updateGuards", updateGuard);
}
function guardToPromiseFn(guard, to, from, record, name) {
    // keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
    const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return ()=>new Promise((resolve, reject)=>{
            const next = (valid)=>{
                if (valid === false) reject(createRouterError(4 /* ErrorTypes.NAVIGATION_ABORTED */ , {
                    from,
                    to
                }));
                else if (valid instanceof Error) reject(valid);
                else if (isRouteLocation(valid)) reject(createRouterError(2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */ , {
                    from: to,
                    to: valid
                }));
                else {
                    if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
                    record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") enterCallbackArray.push(valid);
                    resolve();
                }
            };
            // wrapping with Promise.resolve allows it to work with both async and sync guards
            const guardReturn = guard.call(record && record.instances[name], to, from, canOnlyBeCalledOnce(next, to, from));
            let guardCall = Promise.resolve(guardReturn);
            if (guard.length < 3) guardCall = guardCall.then(next);
            if (guard.length > 2) {
                const message = `The "next" callback was never called inside of ${guard.name ? '"' + guard.name + '"' : ""}:\n${guard.toString()}\n. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
                if (typeof guardReturn === "object" && "then" in guardReturn) guardCall = guardCall.then((resolvedValue)=>{
                    // @ts-expect-error: _called is added at canOnlyBeCalledOnce
                    if (!next._called) {
                        warn(message);
                        return Promise.reject(new Error("Invalid navigation guard"));
                    }
                    return resolvedValue;
                });
                else if (guardReturn !== undefined) // @ts-expect-error: _called is added at canOnlyBeCalledOnce
                {
                    if (!next._called) {
                        warn(message);
                        reject(new Error("Invalid navigation guard"));
                        return;
                    }
                }
            }
            guardCall.catch((err)=>reject(err));
        });
}
function canOnlyBeCalledOnce(next, to, from) {
    let called = 0;
    return function() {
        if ((called++) === 1) warn(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
        // @ts-expect-error: we put it in the original one because it's easier to check
        next._called = true;
        if (called === 1) next.apply(null, arguments);
    };
}
function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched){
        if (!record.components && !record.children.length) warn(`Record with path "${record.path}" is either missing a "component(s)"` + ` or "children" property.`);
        for(const name in record.components){
            let rawComponent = record.components[name];
            if (!rawComponent || typeof rawComponent !== "object" && typeof rawComponent !== "function") {
                warn(`Component "${name}" in record with path "${record.path}" is not` + ` a valid component. Received "${String(rawComponent)}".`);
                // throw to ensure we stop here but warn to ensure the message isn't
                // missed by the user
                throw new Error("Invalid route component");
            } else if ("then" in rawComponent) {
                // warn if user wrote import('/component.vue') instead of () =>
                // import('./component.vue')
                warn(`Component "${name}" in record with path "${record.path}" is a ` + `Promise instead of a function that returns a Promise. Did you ` + `write "import('./MyPage.vue')" instead of ` + `"() => import('./MyPage.vue')" ? This will break in ` + `production if not fixed.`);
                const promise = rawComponent;
                rawComponent = ()=>promise;
            } else if (rawComponent.__asyncLoader && // warn only once per component
            !rawComponent.__warnedDefineAsync) {
                rawComponent.__warnedDefineAsync = true;
                warn(`Component "${name}" in record with path "${record.path}" is defined ` + `using "defineAsyncComponent()". ` + `Write "() => import('./MyPage.vue')" instead of ` + `"defineAsyncComponent(() => import('./MyPage.vue'))".`);
            }
            // skip update and leave guards if the route component is not mounted
            if (guardType !== "beforeRouteEnter" && !record.instances[name]) continue;
            if (isRouteComponent(rawComponent)) {
                // __vccOpts is added by vue-class-component and contain the regular options
                const options = rawComponent.__vccOpts || rawComponent;
                const guard = options[guardType];
                guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
            } else {
                // start requesting the chunk already
                let componentPromise = rawComponent();
                if (!("catch" in componentPromise)) {
                    warn(`Component "${name}" in record with path "${record.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`);
                    componentPromise = Promise.resolve(componentPromise);
                }
                guards.push(()=>componentPromise.then((resolved)=>{
                        if (!resolved) return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
                        const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
                        // replace the function with the resolved component
                        // cannot be null or undefined because we went into the for loop
                        record.components[name] = resolvedComponent;
                        // __vccOpts is added by vue-class-component and contain the regular options
                        const options = resolvedComponent.__vccOpts || resolvedComponent;
                        const guard = options[guardType];
                        return guard && guardToPromiseFn(guard, to, from, record, name)();
                    }));
            }
        }
    }
    return guards;
}
/**
 * Allows differentiating lazy components from functional components and vue-class-component
 * @internal
 *
 * @param component
 */ function isRouteComponent(component) {
    return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
/**
 * Ensures a route is loaded, so it can be passed as o prop to `<RouterView>`.
 *
 * @param route - resolved route to load
 */ function loadRouteLocation(route) {
    return route.matched.every((record)=>record.redirect) ? Promise.reject(new Error("Cannot load a route that redirects.")) : Promise.all(route.matched.map((record)=>record.components && Promise.all(Object.keys(record.components).reduce((promises, name)=>{
            const rawComponent = record.components[name];
            if (typeof rawComponent === "function" && !("displayName" in rawComponent)) promises.push(rawComponent().then((resolved)=>{
                if (!resolved) return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}". Ensure you passed a function that returns a promise.`));
                const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
                // replace the function with the resolved component
                // cannot be null or undefined because we went into the for loop
                record.components[name] = resolvedComponent;
                return;
            }));
            return promises;
        }, [])))).then(()=>route);
}
// TODO: we could allow currentRoute as a prop to expose `isActive` and
// `isExactActive` behavior should go through an RFC
function useLink(props) {
    const router = (0, _vue.inject)(routerKey);
    const currentRoute = (0, _vue.inject)(routeLocationKey);
    const route = (0, _vue.computed)(()=>router.resolve((0, _vue.unref)(props.to)));
    const activeRecordIndex = (0, _vue.computed)(()=>{
        const { matched  } = route.value;
        const { length  } = matched;
        const routeMatched = matched[length - 1];
        const currentMatched = currentRoute.matched;
        if (!routeMatched || !currentMatched.length) return -1;
        const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
        if (index > -1) return index;
        // possible parent record
        const parentRecordPath = getOriginalPath(matched[length - 2]);
        return(// we are dealing with nested routes
        length > 1 && // if the parent and matched route have the same path, this link is
        // referring to the empty child. Or we currently are on a different
        // child of the same parent
        getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
        currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index);
    });
    const isActive = (0, _vue.computed)(()=>activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
    const isExactActive = (0, _vue.computed)(()=>activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
        if (guardEvent(e)) return router[(0, _vue.unref)(props.replace) ? "replace" : "push"]((0, _vue.unref)(props.to)).catch(noop);
        return Promise.resolve();
    }
    // devtools only
    if (isBrowser) {
        const instance = (0, _vue.getCurrentInstance)();
        if (instance) {
            const linkContextDevtools = {
                route: route.value,
                isActive: isActive.value,
                isExactActive: isExactActive.value
            };
            // @ts-expect-error: this is internal
            instance.__vrl_devtools = instance.__vrl_devtools || [];
            // @ts-expect-error: this is internal
            instance.__vrl_devtools.push(linkContextDevtools);
            (0, _vue.watchEffect)(()=>{
                linkContextDevtools.route = route.value;
                linkContextDevtools.isActive = isActive.value;
                linkContextDevtools.isExactActive = isExactActive.value;
            }, {
                flush: "post"
            });
        }
    }
    return {
        route,
        href: (0, _vue.computed)(()=>route.value.href),
        isActive,
        isExactActive,
        navigate
    };
}
const RouterLinkImpl = /*#__PURE__*/ (0, _vue.defineComponent)({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [
                String,
                Object
            ],
            required: true
        },
        replace: Boolean,
        activeClass: String,
        // inactiveClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink,
    setup (props, { slots  }) {
        const link = (0, _vue.reactive)(useLink(props));
        const { options  } = (0, _vue.inject)(routerKey);
        const elClass = (0, _vue.computed)(()=>({
                [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
                // [getLinkClass(
                //   props.inactiveClass,
                //   options.linkInactiveClass,
                //   'router-link-inactive'
                // )]: !link.isExactActive,
                [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
            }));
        return ()=>{
            const children = slots.default && slots.default(link);
            return props.custom ? children : (0, _vue.h)("a", {
                "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
                href: link.href,
                // this would override user added attrs but Vue will still add
                // the listener, so we end up triggering both
                onClick: link.navigate,
                class: elClass.value
            }, children);
        };
    }
});
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
 * Component to render a link that triggers a navigation on click.
 */ const RouterLink = RouterLinkImpl;
function guardEvent(e) {
    // don't redirect with control keys
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
    // don't redirect when preventDefault called
    if (e.defaultPrevented) return;
    // don't redirect on right click
    if (e.button !== undefined && e.button !== 0) return;
    // don't redirect if `target="_blank"`
    // @ts-expect-error getAttribute does exist
    if (e.currentTarget && e.currentTarget.getAttribute) {
        // @ts-expect-error getAttribute exists
        const target = e.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(target)) return;
    }
    // this may be a Weex event which doesn't have this method
    if (e.preventDefault) e.preventDefault();
    return true;
}
function includesParams(outer, inner) {
    for(const key in inner){
        const innerValue = inner[key];
        const outerValue = outer[key];
        if (typeof innerValue === "string") {
            if (innerValue !== outerValue) return false;
        } else {
            if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i)=>value !== outerValue[i])) return false;
        }
    }
    return true;
}
/**
 * Get the original path value of a record by following its aliasOf
 * @param record
 */ function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
/**
 * Utility class to get the active class based on defaults.
 * @param propClass
 * @param globalClass
 * @param defaultClass
 */ const getLinkClass = (propClass, globalClass, defaultClass)=>propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /*#__PURE__*/ (0, _vue.defineComponent)({
    name: "RouterView",
    // #674 we manually inherit them
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    // Better compat for @vue/compat users
    // https://github.com/vuejs/router/issues/1315
    compatConfig: {
        MODE: 3
    },
    setup (props, { attrs , slots  }) {
        warnDeprecatedUsage();
        const injectedRoute = (0, _vue.inject)(routerViewLocationKey);
        const routeToDisplay = (0, _vue.computed)(()=>props.route || injectedRoute.value);
        const injectedDepth = (0, _vue.inject)(viewDepthKey, 0);
        // The depth changes based on empty components option, which allows passthrough routes e.g. routes with children
        // that are used to reuse the `path` property
        const depth = (0, _vue.computed)(()=>{
            let initialDepth = (0, _vue.unref)(injectedDepth);
            const { matched  } = routeToDisplay.value;
            let matchedRoute;
            while((matchedRoute = matched[initialDepth]) && !matchedRoute.components)initialDepth++;
            return initialDepth;
        });
        const matchedRouteRef = (0, _vue.computed)(()=>routeToDisplay.value.matched[depth.value]);
        (0, _vue.provide)(viewDepthKey, (0, _vue.computed)(()=>depth.value + 1));
        (0, _vue.provide)(matchedRouteKey, matchedRouteRef);
        (0, _vue.provide)(routerViewLocationKey, routeToDisplay);
        const viewRef = (0, _vue.ref)();
        // watch at the same time the component instance, the route record we are
        // rendering, and the name
        (0, _vue.watch)(()=>[
                viewRef.value,
                matchedRouteRef.value,
                props.name
            ], ([instance, to, name], [oldInstance, from, oldName])=>{
            // copy reused instances
            if (to) {
                // this will update the instance for new instances as well as reused
                // instances when navigating to a new route
                to.instances[name] = instance;
                // the component instance is reused for a different route or name, so
                // we copy any saved update or leave guards. With async setup, the
                // mounting component will mount before the matchedRoute changes,
                // making instance === oldInstance, so we check if guards have been
                // added before. This works because we remove guards when
                // unmounting/deactivating components
                if (from && from !== to && instance && instance === oldInstance) {
                    if (!to.leaveGuards.size) to.leaveGuards = from.leaveGuards;
                    if (!to.updateGuards.size) to.updateGuards = from.updateGuards;
                }
            }
            // trigger beforeRouteEnter next callbacks
            if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) (to.enterCallbacks[name] || []).forEach((callback)=>callback(instance));
        }, {
            flush: "post"
        });
        return ()=>{
            const route = routeToDisplay.value;
            // we need the value at the time we render because when we unmount, we
            // navigated to a different location so the value is different
            const currentName = props.name;
            const matchedRoute = matchedRouteRef.value;
            const ViewComponent = matchedRoute && matchedRoute.components[currentName];
            if (!ViewComponent) return normalizeSlot(slots.default, {
                Component: ViewComponent,
                route
            });
            // props from route configuration
            const routePropsOption = matchedRoute.props[currentName];
            const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
            const onVnodeUnmounted = (vnode)=>{
                // remove the instance reference to prevent leak
                if (vnode.component.isUnmounted) matchedRoute.instances[currentName] = null;
            };
            const component = (0, _vue.h)(ViewComponent, assign({}, routeProps, attrs, {
                onVnodeUnmounted,
                ref: viewRef
            }));
            if (isBrowser && component.ref) {
                // TODO: can display if it's an alias, its props
                const info = {
                    depth: depth.value,
                    name: matchedRoute.name,
                    path: matchedRoute.path,
                    meta: matchedRoute.meta
                };
                const internalInstances = isArray(component.ref) ? component.ref.map((r)=>r.i) : [
                    component.ref.i
                ];
                internalInstances.forEach((instance)=>{
                    // @ts-expect-error
                    instance.__vrv_devtools = info;
                });
            }
            return(// pass the vnode to the slot as a prop.
            // h and <component :is="..."> both accept vnodes
            normalizeSlot(slots.default, {
                Component: component,
                route
            }) || component);
        };
    }
});
function normalizeSlot(slot, data) {
    if (!slot) return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
}
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
 * Component to display the current route the user is at.
 */ const RouterView = RouterViewImpl;
// warn against deprecated usage with <transition> & <keep-alive>
// due to functional component being no longer eager in Vue 3
function warnDeprecatedUsage() {
    const instance = (0, _vue.getCurrentInstance)();
    const parentName = instance.parent && instance.parent.type.name;
    if (parentName && (parentName === "KeepAlive" || parentName.includes("Transition"))) {
        const comp = parentName === "KeepAlive" ? "keep-alive" : "transition";
        warn(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.\n` + `Use slot props instead:\n\n` + `<router-view v-slot="{ Component }">\n` + `  <${comp}>\n` + `    <component :is="Component" />\n` + `  </${comp}>\n` + `</router-view>`);
    }
}
/**
 * Copies a route location and removes any problematic properties that cannot be shown in devtools (e.g. Vue instances).
 *
 * @param routeLocation - routeLocation to format
 * @param tooltip - optional tooltip
 * @returns a copy of the routeLocation
 */ function formatRouteLocation(routeLocation, tooltip) {
    const copy = assign({}, routeLocation, {
        // remove variables that can contain vue instances
        matched: routeLocation.matched.map((matched)=>omit(matched, [
                "instances",
                "children",
                "aliasOf"
            ]))
    });
    return {
        _custom: {
            type: null,
            readOnly: true,
            display: routeLocation.fullPath,
            tooltip,
            value: copy
        }
    };
}
function formatDisplay(display) {
    return {
        _custom: {
            display
        }
    };
}
// to support multiple router instances
let routerId = 0;
function addDevtools(app, router, matcher) {
    // Take over router.beforeEach and afterEach
    // make sure we are not registering the devtool twice
    if (router.__hasDevtools) return;
    router.__hasDevtools = true;
    // increment to support multiple router instances
    const id = routerId++;
    (0, _devtoolsApi.setupDevtoolsPlugin)({
        id: "org.vuejs.router" + (id ? "." + id : ""),
        label: "Vue Router",
        packageName: "vue-router",
        homepage: "https://router.vuejs.org",
        logo: "https://router.vuejs.org/logo.png",
        componentStateTypes: [
            "Routing"
        ],
        app
    }, (api)=>{
        if (typeof api.now !== "function") console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
        // display state added by the router
        api.on.inspectComponent((payload, ctx)=>{
            if (payload.instanceData) payload.instanceData.state.push({
                type: "Routing",
                key: "$route",
                editable: false,
                value: formatRouteLocation(router.currentRoute.value, "Current Route")
            });
        });
        // mark router-link as active and display tags on router views
        api.on.visitComponentTree(({ treeNode: node , componentInstance  })=>{
            if (componentInstance.__vrv_devtools) {
                const info = componentInstance.__vrv_devtools;
                node.tags.push({
                    label: (info.name ? `${info.name.toString()}: ` : "") + info.path,
                    textColor: 0,
                    tooltip: "This component is rendered by &lt;router-view&gt;",
                    backgroundColor: PINK_500
                });
            }
            // if multiple useLink are used
            if (isArray(componentInstance.__vrl_devtools)) {
                componentInstance.__devtoolsApi = api;
                componentInstance.__vrl_devtools.forEach((devtoolsData)=>{
                    let backgroundColor = ORANGE_400;
                    let tooltip = "";
                    if (devtoolsData.isExactActive) {
                        backgroundColor = LIME_500;
                        tooltip = "This is exactly active";
                    } else if (devtoolsData.isActive) {
                        backgroundColor = BLUE_600;
                        tooltip = "This link is active";
                    }
                    node.tags.push({
                        label: devtoolsData.route.path,
                        textColor: 0,
                        tooltip,
                        backgroundColor
                    });
                });
            }
        });
        (0, _vue.watch)(router.currentRoute, ()=>{
            // refresh active state
            refreshRoutesView();
            api.notifyComponentUpdate();
            api.sendInspectorTree(routerInspectorId);
            api.sendInspectorState(routerInspectorId);
        });
        const navigationsLayerId = "router:navigations:" + id;
        api.addTimelineLayer({
            id: navigationsLayerId,
            label: `Router${id ? " " + id : ""} Navigations`,
            color: 0x40a8c4
        });
        // const errorsLayerId = 'router:errors'
        // api.addTimelineLayer({
        //   id: errorsLayerId,
        //   label: 'Router Errors',
        //   color: 0xea5455,
        // })
        router.onError((error, to)=>{
            api.addTimelineEvent({
                layerId: navigationsLayerId,
                event: {
                    title: "Error during Navigation",
                    subtitle: to.fullPath,
                    logType: "error",
                    time: api.now(),
                    data: {
                        error
                    },
                    groupId: to.meta.__navigationId
                }
            });
        });
        // attached to `meta` and used to group events
        let navigationId = 0;
        router.beforeEach((to, from)=>{
            const data = {
                guard: formatDisplay("beforeEach"),
                from: formatRouteLocation(from, "Current Location during this navigation"),
                to: formatRouteLocation(to, "Target location")
            };
            // Used to group navigations together, hide from devtools
            Object.defineProperty(to.meta, "__navigationId", {
                value: navigationId++
            });
            api.addTimelineEvent({
                layerId: navigationsLayerId,
                event: {
                    time: api.now(),
                    title: "Start of navigation",
                    subtitle: to.fullPath,
                    data,
                    groupId: to.meta.__navigationId
                }
            });
        });
        router.afterEach((to, from, failure)=>{
            const data = {
                guard: formatDisplay("afterEach")
            };
            if (failure) {
                data.failure = {
                    _custom: {
                        type: Error,
                        readOnly: true,
                        display: failure ? failure.message : "",
                        tooltip: "Navigation Failure",
                        value: failure
                    }
                };
                data.status = formatDisplay("❌");
            } else data.status = formatDisplay("✅");
            // we set here to have the right order
            data.from = formatRouteLocation(from, "Current Location during this navigation");
            data.to = formatRouteLocation(to, "Target location");
            api.addTimelineEvent({
                layerId: navigationsLayerId,
                event: {
                    title: "End of navigation",
                    subtitle: to.fullPath,
                    time: api.now(),
                    data,
                    logType: failure ? "warning" : "default",
                    groupId: to.meta.__navigationId
                }
            });
        });
        /**
         * Inspector of Existing routes
         */ const routerInspectorId = "router-inspector:" + id;
        api.addInspector({
            id: routerInspectorId,
            label: "Routes" + (id ? " " + id : ""),
            icon: "book",
            treeFilterPlaceholder: "Search routes"
        });
        function refreshRoutesView() {
            // the routes view isn't active
            if (!activeRoutesPayload) return;
            const payload = activeRoutesPayload;
            // children routes will appear as nested
            let routes = matcher.getRoutes().filter((route)=>!route.parent);
            // reset match state to false
            routes.forEach(resetMatchStateOnRouteRecord);
            // apply a match state if there is a payload
            if (payload.filter) routes = routes.filter((route)=>// save matches state based on the payload
                isRouteMatching(route, payload.filter.toLowerCase()));
            // mark active routes
            routes.forEach((route)=>markRouteRecordActive(route, router.currentRoute.value));
            payload.rootNodes = routes.map(formatRouteRecordForInspector);
        }
        let activeRoutesPayload;
        api.on.getInspectorTree((payload)=>{
            activeRoutesPayload = payload;
            if (payload.app === app && payload.inspectorId === routerInspectorId) refreshRoutesView();
        });
        /**
         * Display information about the currently selected route record
         */ api.on.getInspectorState((payload)=>{
            if (payload.app === app && payload.inspectorId === routerInspectorId) {
                const routes = matcher.getRoutes();
                const route = routes.find((route)=>route.record.__vd_id === payload.nodeId);
                if (route) payload.state = {
                    options: formatRouteRecordMatcherForStateInspector(route)
                };
            }
        });
        api.sendInspectorTree(routerInspectorId);
        api.sendInspectorState(routerInspectorId);
    });
}
function modifierForKey(key) {
    if (key.optional) return key.repeatable ? "*" : "?";
    else return key.repeatable ? "+" : "";
}
function formatRouteRecordMatcherForStateInspector(route) {
    const { record  } = route;
    const fields = [
        {
            editable: false,
            key: "path",
            value: record.path
        }, 
    ];
    if (record.name != null) fields.push({
        editable: false,
        key: "name",
        value: record.name
    });
    fields.push({
        editable: false,
        key: "regexp",
        value: route.re
    });
    if (route.keys.length) fields.push({
        editable: false,
        key: "keys",
        value: {
            _custom: {
                type: null,
                readOnly: true,
                display: route.keys.map((key)=>`${key.name}${modifierForKey(key)}`).join(" "),
                tooltip: "Param keys",
                value: route.keys
            }
        }
    });
    if (record.redirect != null) fields.push({
        editable: false,
        key: "redirect",
        value: record.redirect
    });
    if (route.alias.length) fields.push({
        editable: false,
        key: "aliases",
        value: route.alias.map((alias)=>alias.record.path)
    });
    if (Object.keys(route.record.meta).length) fields.push({
        editable: false,
        key: "meta",
        value: route.record.meta
    });
    fields.push({
        key: "score",
        editable: false,
        value: {
            _custom: {
                type: null,
                readOnly: true,
                display: route.score.map((score)=>score.join(", ")).join(" | "),
                tooltip: "Score used to sort routes",
                value: route.score
            }
        }
    });
    return fields;
}
/**
 * Extracted from tailwind palette
 */ const PINK_500 = 0xec4899;
const BLUE_600 = 0x2563eb;
const LIME_500 = 0x84cc16;
const CYAN_400 = 0x22d3ee;
const ORANGE_400 = 0xfb923c;
// const GRAY_100 = 0xf4f4f5
const DARK = 0x666666;
function formatRouteRecordForInspector(route) {
    const tags = [];
    const { record  } = route;
    if (record.name != null) tags.push({
        label: String(record.name),
        textColor: 0,
        backgroundColor: CYAN_400
    });
    if (record.aliasOf) tags.push({
        label: "alias",
        textColor: 0,
        backgroundColor: ORANGE_400
    });
    if (route.__vd_match) tags.push({
        label: "matches",
        textColor: 0,
        backgroundColor: PINK_500
    });
    if (route.__vd_exactActive) tags.push({
        label: "exact",
        textColor: 0,
        backgroundColor: LIME_500
    });
    if (route.__vd_active) tags.push({
        label: "active",
        textColor: 0,
        backgroundColor: BLUE_600
    });
    if (record.redirect) tags.push({
        label: typeof record.redirect === "string" ? `redirect: ${record.redirect}` : "redirects",
        textColor: 0xffffff,
        backgroundColor: DARK
    });
    // add an id to be able to select it. Using the `path` is not possible because
    // empty path children would collide with their parents
    let id = record.__vd_id;
    if (id == null) {
        id = String(routeRecordId++);
        record.__vd_id = id;
    }
    return {
        id,
        label: record.path,
        tags,
        children: route.children.map(formatRouteRecordForInspector)
    };
}
//  incremental id for route records and inspector state
let routeRecordId = 0;
const EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
function markRouteRecordActive(route, currentRoute) {
    // no route will be active if matched is empty
    // reset the matching state
    const isExactActive = currentRoute.matched.length && isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
    route.__vd_exactActive = route.__vd_active = isExactActive;
    if (!isExactActive) route.__vd_active = currentRoute.matched.some((match)=>isSameRouteRecord(match, route.record));
    route.children.forEach((childRoute)=>markRouteRecordActive(childRoute, currentRoute));
}
function resetMatchStateOnRouteRecord(route) {
    route.__vd_match = false;
    route.children.forEach(resetMatchStateOnRouteRecord);
}
function isRouteMatching(route, filter) {
    const found = String(route.re).match(EXTRACT_REGEXP_RE);
    route.__vd_match = false;
    if (!found || found.length < 3) return false;
    // use a regexp without $ at the end to match nested routes better
    const nonEndingRE = new RegExp(found[1].replace(/\$$/, ""), found[2]);
    if (nonEndingRE.test(filter)) {
        // mark children as matches
        route.children.forEach((child)=>isRouteMatching(child, filter));
        // exception case: `/`
        if (route.record.path !== "/" || filter === "/") {
            route.__vd_match = route.re.test(filter);
            return true;
        }
        // hide the / route
        return false;
    }
    const path = route.record.path.toLowerCase();
    const decodedPath = decode(path);
    // also allow partial matching on the path
    if (!filter.startsWith("/") && (decodedPath.includes(filter) || path.includes(filter))) return true;
    if (decodedPath.startsWith(filter) || path.startsWith(filter)) return true;
    if (route.record.name && String(route.record.name).includes(filter)) return true;
    return route.children.some((child)=>isRouteMatching(child, filter));
}
function omit(obj, keys) {
    const ret = {};
    for(const key in obj)if (!keys.includes(key)) // @ts-expect-error
    ret[key] = obj[key];
    return ret;
}
/**
 * Creates a Router instance that can be used by a Vue app.
 *
 * @param options - {@link RouterOptions}
 */ function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    const routerHistory = options.history;
    if (!routerHistory) throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = (0, _vue.shallowRef)(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    // leave the scrollRestoration if no scrollBehavior is provided
    if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) history.scrollRestoration = "manual";
    const normalizeParams = applyToParams.bind(null, (paramValue)=>"" + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = // @ts-expect-error: intentionally avoid the type check
    applyToParams.bind(null, decode);
    function addRoute(parentOrRoute, route) {
        let parent;
        let record;
        if (isRouteName(parentOrRoute)) {
            parent = matcher.getRecordMatcher(parentOrRoute);
            record = route;
        } else record = parentOrRoute;
        return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
        const recordMatcher = matcher.getRecordMatcher(name);
        if (recordMatcher) matcher.removeRoute(recordMatcher);
        else warn(`Cannot remove non-existent route "${String(name)}"`);
    }
    function getRoutes() {
        return matcher.getRoutes().map((routeMatcher)=>routeMatcher.record);
    }
    function hasRoute(name) {
        return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
        // const objectLocation = routerLocationAsObject(rawLocation)
        // we create a copy to modify it later
        currentLocation = assign({}, currentLocation || currentRoute.value);
        if (typeof rawLocation === "string") {
            const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
            const matchedRoute = matcher.resolve({
                path: locationNormalized.path
            }, currentLocation);
            const href = routerHistory.createHref(locationNormalized.fullPath);
            if (href.startsWith("//")) warn(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
            else if (!matchedRoute.matched.length) warn(`No match found for location with path "${rawLocation}"`);
            // locationNormalized is always a new object
            return assign(locationNormalized, matchedRoute, {
                params: decodeParams(matchedRoute.params),
                hash: decode(locationNormalized.hash),
                redirectedFrom: undefined,
                href
            });
        }
        let matcherLocation;
        // path could be relative in object as well
        if ("path" in rawLocation) {
            if ("params" in rawLocation && !("name" in rawLocation) && // @ts-expect-error: the type is never
            Object.keys(rawLocation.params).length) warn(`Path "${// @ts-expect-error: the type is never
            rawLocation.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`);
            matcherLocation = assign({}, rawLocation, {
                path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
            });
        } else {
            // remove any nullish param
            const targetParams = assign({}, rawLocation.params);
            for(const key in targetParams)if (targetParams[key] == null) delete targetParams[key];
            // pass encoded values to the matcher, so it can produce encoded path and fullPath
            matcherLocation = assign({}, rawLocation, {
                params: encodeParams(rawLocation.params)
            });
            // current location params are decoded, we need to encode them in case the
            // matcher merges the params
            currentLocation.params = encodeParams(currentLocation.params);
        }
        const matchedRoute1 = matcher.resolve(matcherLocation, currentLocation);
        const hash = rawLocation.hash || "";
        if (hash && !hash.startsWith("#")) warn(`A \`hash\` should always start with the character "#". Replace "${hash}" with "#${hash}".`);
        // the matcher might have merged current location params, so
        // we need to run the decoding again
        matchedRoute1.params = normalizeParams(decodeParams(matchedRoute1.params));
        const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
            hash: encodeHash(hash),
            path: matchedRoute1.path
        }));
        const href1 = routerHistory.createHref(fullPath);
        if (href1.startsWith("//")) warn(`Location "${rawLocation}" resolved to "${href1}". A resolved location cannot start with multiple slashes.`);
        else if (!matchedRoute1.matched.length) warn(`No match found for location with path "${"path" in rawLocation ? rawLocation.path : rawLocation}"`);
        return assign({
            fullPath,
            // keep the hash encoded so fullPath is effectively path + encodedQuery +
            // hash
            hash,
            query: // if the user is using a custom query lib like qs, we might have
            // nested objects, so we keep the query as is, meaning it can contain
            // numbers at `$route.query`, but at the point, the user will have to
            // use their own type anyway.
            // https://github.com/vuejs/router/issues/328#issuecomment-649481567
            stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
        }, matchedRoute1, {
            redirectedFrom: undefined,
            href: href1
        });
    }
    function locationAsObject(to) {
        return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
    }
    function checkCanceledNavigation(to, from) {
        if (pendingLocation !== to) return createRouterError(8 /* ErrorTypes.NAVIGATION_CANCELLED */ , {
            from,
            to
        });
    }
    function push(to) {
        return pushWithRedirect(to);
    }
    function replace(to) {
        return push(assign(locationAsObject(to), {
            replace: true
        }));
    }
    function handleRedirectRecord(to) {
        const lastMatched = to.matched[to.matched.length - 1];
        if (lastMatched && lastMatched.redirect) {
            const { redirect  } = lastMatched;
            let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
            if (typeof newTargetLocation === "string") {
                newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : {
                    path: newTargetLocation
                };
                // @ts-expect-error: force empty params when a string is passed to let
                // the router parse them again
                newTargetLocation.params = {};
            }
            if (!("path" in newTargetLocation) && !("name" in newTargetLocation)) {
                warn(`Invalid redirect found:\n${JSON.stringify(newTargetLocation, null, 2)}\n when navigating to "${to.fullPath}". A redirect must contain a name or path. This will break in production.`);
                throw new Error("Invalid redirect");
            }
            return assign({
                query: to.query,
                hash: to.hash,
                // avoid transferring params if the redirect has a path
                params: "path" in newTargetLocation ? {} : to.params
            }, newTargetLocation);
        }
    }
    function pushWithRedirect(to, redirectedFrom) {
        const targetLocation = pendingLocation = resolve(to);
        const from = currentRoute.value;
        const data = to.state;
        const force = to.force;
        // to could be a string where `replace` is a function
        const replace = to.replace === true;
        const shouldRedirect = handleRedirectRecord(targetLocation);
        if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
            state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
            force,
            replace
        }), // keep original redirectedFrom if it exists
        redirectedFrom || targetLocation);
        // if it was a redirect we already called `pushWithRedirect` above
        const toLocation = targetLocation;
        toLocation.redirectedFrom = redirectedFrom;
        let failure;
        if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
            failure = createRouterError(16 /* ErrorTypes.NAVIGATION_DUPLICATED */ , {
                to: toLocation,
                from
            });
            // trigger scroll to allow scrolling to the same anchor
            handleScroll(from, from, // this is a push, the only way for it to be triggered from a
            // history.listen is with a redirect, which makes it become a push
            true, // This cannot be the first navigation because the initial location
            // cannot be manually navigated to
            false);
        }
        return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error)=>isNavigationFailure(error) ? isNavigationFailure(error, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */ ) ? error : markAsReady(error) // also returns the error
             : triggerError(error, toLocation, from)).then((failure)=>{
            if (failure) {
                if (isNavigationFailure(failure, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */ )) {
                    if (// we are redirecting to the same location we were already at
                    isSameRouteLocation(stringifyQuery$1, resolve(failure.to), toLocation) && // and we have done it a couple of times
                    redirectedFrom && // @ts-expect-error: added only in dev
                    (redirectedFrom._count = redirectedFrom._count ? redirectedFrom._count + 1 : 1) > 10) {
                        warn(`Detected an infinite redirection in a navigation guard when going from "${from.fullPath}" to "${toLocation.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`);
                        return Promise.reject(new Error("Infinite redirect in navigation guard"));
                    }
                    return pushWithRedirect(// keep options
                    assign({
                        // preserve an existing replacement but allow the redirect to override it
                        replace
                    }, locationAsObject(failure.to), {
                        state: typeof failure.to === "object" ? assign({}, data, failure.to.state) : data,
                        force
                    }), // preserve the original redirectedFrom if any
                    redirectedFrom || toLocation);
                }
            } else // if we fail we don't finalize the navigation
            failure = finalizeNavigation(toLocation, from, true, replace, data);
            triggerAfterEach(toLocation, from, failure);
            return failure;
        });
    }
    /**
     * Helper to reject and skip all navigation guards if a new navigation happened
     * @param to
     * @param from
     */ function checkCanceledNavigationAndReject(to, from) {
        const error = checkCanceledNavigation(to, from);
        return error ? Promise.reject(error) : Promise.resolve();
    }
    // TODO: refactor the whole before guards by internally using router.beforeEach
    function navigate(to, from) {
        let guards;
        const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
        // all components here have been resolved once because we are leaving
        guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
        // leavingRecords is already reversed
        for (const record of leavingRecords)record.leaveGuards.forEach((guard)=>{
            guards.push(guardToPromiseFn(guard, to, from));
        });
        const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
        guards.push(canceledNavigationCheck);
        // run the queue of per route beforeRouteLeave guards
        return runGuardQueue(guards).then(()=>{
            // check global guards beforeEach
            guards = [];
            for (const guard of beforeGuards.list())guards.push(guardToPromiseFn(guard, to, from));
            guards.push(canceledNavigationCheck);
            return runGuardQueue(guards);
        }).then(()=>{
            // check in components beforeRouteUpdate
            guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
            for (const record of updatingRecords)record.updateGuards.forEach((guard)=>{
                guards.push(guardToPromiseFn(guard, to, from));
            });
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        }).then(()=>{
            // check the route beforeEnter
            guards = [];
            for (const record of to.matched)// do not trigger beforeEnter on reused views
            if (record.beforeEnter && !from.matched.includes(record)) {
                if (isArray(record.beforeEnter)) for (const beforeEnter of record.beforeEnter)guards.push(guardToPromiseFn(beforeEnter, to, from));
                else guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        }).then(()=>{
            // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
            // clear existing enterCallbacks, these are added by extractComponentsGuards
            to.matched.forEach((record)=>record.enterCallbacks = {});
            // check in-component beforeRouteEnter
            guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        }).then(()=>{
            // check global guards beforeResolve
            guards = [];
            for (const guard of beforeResolveGuards.list())guards.push(guardToPromiseFn(guard, to, from));
            guards.push(canceledNavigationCheck);
            return runGuardQueue(guards);
        })// catch any navigation canceled
        .catch((err)=>isNavigationFailure(err, 8 /* ErrorTypes.NAVIGATION_CANCELLED */ ) ? err : Promise.reject(err));
    }
    function triggerAfterEach(to, from, failure) {
        // navigation is confirmed, call afterGuards
        // TODO: wrap with error handlers
        for (const guard of afterGuards.list())guard(to, from, failure);
    }
    /**
     * - Cleans up any navigation guards
     * - Changes the url if necessary
     * - Calls the scrollBehavior
     */ function finalizeNavigation(toLocation, from, isPush, replace, data) {
        // a more recent navigation took place
        const error = checkCanceledNavigation(toLocation, from);
        if (error) return error;
        // only consider as push if it's not the first navigation
        const isFirstNavigation = from === START_LOCATION_NORMALIZED;
        const state = !isBrowser ? {} : history.state;
        // change URL only if the user did a push/replace and if it's not the initial navigation because
        // it's just reflecting the url
        if (isPush) {
            // on the initial navigation, we want to reuse the scroll position from
            // history state if it exists
            if (replace || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({
                scroll: isFirstNavigation && state && state.scroll
            }, data));
            else routerHistory.push(toLocation.fullPath, data);
        }
        // accept current navigation
        currentRoute.value = toLocation;
        handleScroll(toLocation, from, isPush, isFirstNavigation);
        markAsReady();
    }
    let removeHistoryListener;
    // attach listener to history to trigger navigations
    function setupListeners() {
        // avoid setting up listeners twice due to an invalid first navigation
        if (removeHistoryListener) return;
        removeHistoryListener = routerHistory.listen((to, _from, info)=>{
            if (!router.listening) return;
            // cannot be a redirect route because it was in history
            const toLocation = resolve(to);
            // due to dynamic routing, and to hash history with manual navigation
            // (manually changing the url or calling history.hash = '#/somewhere'),
            // there could be a redirect record in history
            const shouldRedirect = handleRedirectRecord(toLocation);
            if (shouldRedirect) {
                pushWithRedirect(assign(shouldRedirect, {
                    replace: true
                }), toLocation).catch(noop);
                return;
            }
            pendingLocation = toLocation;
            const from = currentRoute.value;
            // TODO: should be moved to web history?
            if (isBrowser) saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
            navigate(toLocation, from).catch((error)=>{
                if (isNavigationFailure(error, 12 /* ErrorTypes.NAVIGATION_CANCELLED */ )) return error;
                if (isNavigationFailure(error, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */ )) {
                    // Here we could call if (info.delta) routerHistory.go(-info.delta,
                    // false) but this is bug prone as we have no way to wait the
                    // navigation to be finished before calling pushWithRedirect. Using
                    // a setTimeout of 16ms seems to work but there is no guarantee for
                    // it to work on every browser. So instead we do not restore the
                    // history entry and trigger a new navigation as requested by the
                    // navigation guard.
                    // the error is already handled by router.push we just want to avoid
                    // logging the error
                    pushWithRedirect(error.to, toLocation).then((failure)=>{
                        // manual change in hash history #916 ending up in the URL not
                        // changing, but it was changed by the manual url change, so we
                        // need to manually change it ourselves
                        if (isNavigationFailure(failure, 20 /* ErrorTypes.NAVIGATION_DUPLICATED */ ) && !info.delta && info.type === NavigationType.pop) routerHistory.go(-1, false);
                    }).catch(noop);
                    // avoid the then branch
                    return Promise.reject();
                }
                // do not restore history on unknown direction
                if (info.delta) routerHistory.go(-info.delta, false);
                // unrecognized error, transfer to the global handler
                return triggerError(error, toLocation, from);
            }).then((failure)=>{
                failure = failure || finalizeNavigation(// after navigation, all matched components are resolved
                toLocation, from, false);
                // revert the navigation
                if (failure) {
                    if (info.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
                    // entry while a different route is displayed
                    !isNavigationFailure(failure, 8 /* ErrorTypes.NAVIGATION_CANCELLED */ )) routerHistory.go(-info.delta, false);
                    else if (info.type === NavigationType.pop && isNavigationFailure(failure, 20 /* ErrorTypes.NAVIGATION_DUPLICATED */ )) // manual change in hash history #916
                    // it's like a push but lacks the information of the direction
                    routerHistory.go(-1, false);
                }
                triggerAfterEach(toLocation, from, failure);
            }).catch(noop);
        });
    }
    // Initialization and Errors
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    /**
     * Trigger errorHandlers added via onError and throws the error as well
     *
     * @param error - error to throw
     * @param to - location we were navigating to when the error happened
     * @param from - location we were navigating from when the error happened
     * @returns the error as a rejected promise
     */ function triggerError(error, to, from) {
        markAsReady(error);
        const list = errorHandlers.list();
        if (list.length) list.forEach((handler)=>handler(error, to, from));
        else {
            warn("uncaught error during route navigation:");
            console.error(error);
        }
        return Promise.reject(error);
    }
    function isReady() {
        if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
        return new Promise((resolve, reject)=>{
            readyHandlers.add([
                resolve,
                reject
            ]);
        });
    }
    function markAsReady(err) {
        if (!ready) {
            // still not ready if an error happened
            ready = !err;
            setupListeners();
            readyHandlers.list().forEach(([resolve, reject])=>err ? reject(err) : resolve());
            readyHandlers.reset();
        }
        return err;
    }
    // Scroll behavior
    function handleScroll(to, from, isPush, isFirstNavigation) {
        const { scrollBehavior  } = options;
        if (!isBrowser || !scrollBehavior) return Promise.resolve();
        const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
        return (0, _vue.nextTick)().then(()=>scrollBehavior(to, from, scrollPosition)).then((position)=>position && scrollToPosition(position)).catch((err)=>triggerError(err, to, from));
    }
    const go = (delta)=>routerHistory.go(delta);
    let started;
    const installedApps = new Set();
    const router = {
        currentRoute,
        listening: true,
        addRoute,
        removeRoute,
        hasRoute,
        getRoutes,
        resolve,
        options,
        push,
        replace,
        go,
        back: ()=>go(-1),
        forward: ()=>go(1),
        beforeEach: beforeGuards.add,
        beforeResolve: beforeResolveGuards.add,
        afterEach: afterGuards.add,
        onError: errorHandlers.add,
        isReady,
        install (app) {
            const router = this;
            app.component("RouterLink", RouterLink);
            app.component("RouterView", RouterView);
            app.config.globalProperties.$router = router;
            Object.defineProperty(app.config.globalProperties, "$route", {
                enumerable: true,
                get: ()=>(0, _vue.unref)(currentRoute)
            });
            // this initial navigation is only necessary on client, on server it doesn't
            // make sense because it will create an extra unnecessary navigation and could
            // lead to problems
            if (isBrowser && // used for the initial navigation client side to avoid pushing
            // multiple times when the router is used in multiple apps
            !started && currentRoute.value === START_LOCATION_NORMALIZED) {
                // see above
                started = true;
                push(routerHistory.location).catch((err)=>{
                    warn("Unexpected error when starting the router:", err);
                });
            }
            const reactiveRoute = {};
            for(const key in START_LOCATION_NORMALIZED)// @ts-expect-error: the key matches
            reactiveRoute[key] = (0, _vue.computed)(()=>currentRoute.value[key]);
            app.provide(routerKey, router);
            app.provide(routeLocationKey, (0, _vue.reactive)(reactiveRoute));
            app.provide(routerViewLocationKey, currentRoute);
            const unmountApp = app.unmount;
            installedApps.add(app);
            app.unmount = function() {
                installedApps.delete(app);
                // the router is not attached to an app anymore
                if (installedApps.size < 1) {
                    // invalidate the current navigation
                    pendingLocation = START_LOCATION_NORMALIZED;
                    removeHistoryListener && removeHistoryListener();
                    removeHistoryListener = null;
                    currentRoute.value = START_LOCATION_NORMALIZED;
                    started = false;
                    ready = false;
                }
                unmountApp();
            };
            // TODO: this probably needs to be updated so it can be used by vue-termui
            if (isBrowser) addDevtools(app, router, matcher);
        }
    };
    return router;
}
function runGuardQueue(guards) {
    return guards.reduce((promise, guard)=>promise.then(()=>guard()), Promise.resolve());
}
function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for(let i = 0; i < len; i++){
        const recordFrom = from.matched[i];
        if (recordFrom) {
            if (to.matched.find((record)=>isSameRouteRecord(record, recordFrom))) updatingRecords.push(recordFrom);
            else leavingRecords.push(recordFrom);
        }
        const recordTo = to.matched[i];
        if (recordTo) // the type doesn't matter because we are comparing per reference
        {
            if (!from.matched.find((record)=>isSameRouteRecord(record, recordTo))) enteringRecords.push(recordTo);
        }
    }
    return [
        leavingRecords,
        updatingRecords,
        enteringRecords
    ];
}
/**
 * Returns the router instance. Equivalent to using `$router` inside
 * templates.
 */ function useRouter() {
    return (0, _vue.inject)(routerKey);
}
/**
 * Returns the current route location. Equivalent to using `$route` inside
 * templates.
 */ function useRoute() {
    return (0, _vue.inject)(routeLocationKey);
}

},{"vue":"gzxs9","@vue/devtools-api":"dc7MH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ShInH","8lqZg"], "8lqZg", "parcelRequire6909")

//# sourceMappingURL=index.975ef6c8.js.map
