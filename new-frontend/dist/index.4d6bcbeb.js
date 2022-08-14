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
})({"8TtF2":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
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
        console.log("[parcel] \u2728 Error resolved");
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
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
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

},{}],"gLLPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _indexCss = require("./index.css");
var _lighterhtml = require("lighterhtml");
var _vanilla = require("valtio/vanilla");
var _utils = require("valtio/utils");
var _twind = require("twind");
var _css = require("twind/css");
var _mock = require("./mock");
var _mockDefault = parcelHelpers.interopDefault(_mock);
window["tw"] = (0, _twind.tw);
const bounce = (0, _css.animation)("1s ease infinite", {
    "from, 20%, 53%, 80%, to": {
        transform: "translate3d(0,0,0)"
    },
    "40%, 43%": {
        transform: "translate3d(0, -30px, 0)"
    },
    "70%": {
        transform: "translate3d(0, -15px, 0)"
    },
    "90%": {
        transform: "translate3d(0, -4px, 0)"
    }
});
// let mycss = css`
// color: ${mock.settingsItemProps.tableHeaderTextColor};
// background-color: ${mock.settingsItemProps.tableHeaderBg}};
// `
let mycss = (0, _css.css)`@media (max-width: 600px) {
  margin-bottom: 1rem;
  box-shadow: 0 2px 3px hsl(0deg 0% 4% / 10%), 0 0 0 1px hsl(0deg 0% 4% / 10%);
  max-width: 100%;
  position: relative;
  display: block;
  td {
    display: flex;
    width: auto;
    justify-content: space-between;
    border: 0;
    /* text-align: right; */
    border-bottom: 1px solid #f5f5f5;
    padding: 0.5em 0.75em;
    text-align: right!important;
    vertical-align: top;
    &::before {
      ${(0, _css.apply)`text-purple-700`}
      content: attr(data-label);
      font-weight: 600;
      padding-right: 0.5em;
      text-align: left;
    }
  }
}`;
let mycss2 = (0, _css.css)`@media (max-width: 600px) {
  th {
    display: none;
  }
}`;
window.manipulateStore = (incomingStore)=>{
    store.mock = incomingStore;
    listContainer.innerHTML = "";
    listContainer.appendChild(outputBaseTable(store.mock.data));
    tableBody = listContainer.querySelector("table tbody");
    listContainer.querySelector('[id="table-search"]').addEventListener("keyup", handleSearch);
};
const isDev = true;
let tableBody = null;
if (isDev) console.log((0, _mockDefault.default));
(0, _twind.setup)({
    preflight: true,
    prefix: true,
    hash: !isDev
});
const getId = ()=>new Date().getTime();
let listContainer = document.querySelector(".excel-to-table-app");
const store = (0, _vanilla.proxy)({
    mock: (0, _mockDefault.default),
    searchQuery: ""
});
function handleSearch(evt) {
    console.log(evt.target.value);
    store.searchQuery = evt.target.value.trim();
}
const outputFilteredCells = (cells)=>{
    return (0, _lighterhtml.html).node`${outputTableBody(cells)}`;
};
const headerColor = (0, _css.css)`
    color: ${(0, _mockDefault.default).settingsItemProps.tableHeaderTextColor};
    background-color: ${(0, _mockDefault.default).settingsItemProps.tableHeaderBg}};
  `;
const inputPlaceHolderStyle = (0, _css.css)({
    "&::placeholder": {
        color: (0, _mockDefault.default).settingsItemProps.tableHeaderTextColor,
        opacity: 0.5
    }
});
const searchBar = ()=>{
    return (0, _lighterhtml.html).node`<div class="${(0, _twind.tw)`relative mt-1`}">
    <div class="${(0, _twind.tw)`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none`}">
      ${(0, _lighterhtml.svg).node`<svg class="${(0, _twind.tw)`w-5 h-5 ${headerColor}`}" fill="currentColor" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"></path>
      </svg>`}
    </div>
    <input type="text" id="table-search" class="${(0, _twind.tw)`${headerColor} ${inputPlaceHolderStyle} border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}" placeholder="Search for items">
  </div>`;
};
const outputBaseTable = (cells)=>{
    return (0, _lighterhtml.html).node`
    <div>
    <div class="${(0, _twind.tw)`bg-white pb-4 px-4 rounded-md w-full`}">
    <div class="${(0, _twind.tw)`sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto`}">
      <header class="${(0, _twind.tw)`flex items-center justify-between px-5 py-4 border-gray-200 rounded-t-lg ${headerColor}`}">
        <div class="${(0, _twind.tw)`font-semibold`}">${store.mock.tableTitle}</div>
      </header>
      <div class="${(0, _twind.tw)`inline-block min-w-full shadow rounded-b-lg overflow-hidden`}">
        <table class="${(0, _twind.tw)`min-w-full leading-normal`}">
          <thead>
            <tr class="${(0, _twind.tw)`${mycss2}`}">
              ${cells[0].map((head)=>(0, _lighterhtml.html).node`<th
              class="${(0, _twind.tw)`px-5 py-3 border-b-2 border-gray-200 ${headerColor} text-left text-xs font-semibold text-gray-600 uppercase tracking-wider`}">
                ${head}
              </th>`)}
            </tr>
          </thead>
          <tbody>
            ${outputTableBody(cells.filter((k, i)=>i !== 0), cells.filter((k, i)=>i == 0)[0])}
          </tbody>
        </table>
      </div>
      </div>
      </div>
      </div>`;
};
const outputCell = (cellsData, tableHeadCell)=>{
    return (0, _lighterhtml.html).node`<tr class="${(0, _twind.tw)`hover:bg-gray-100 border-b border-gray-200`} ${(0, _twind.tw)`${mycss}`}">
      ${cellsData.map((cellVal, index)=>(0, _lighterhtml.html).node`<td data-label="${tableHeadCell[index]}" class="${(0, _twind.tw)`px-4 py-4`}">
        <span>${cellVal}</span>
      </td>`)}
    </tr>`;
};
const outputTableBody = (cells, tableHeadCell)=>{
    return cells.map((one)=>outputCell(one, tableHeadCell));
};
if (window.top == window && !isDev) {
    let tableId = listContainer.getAttribute("data-table-id");
    (async ()=>{
        let tableData = await fetch(`${wpUltimateTablesRoute}/get-table-cells/${tableId}`);
        if (tableData) {
            let data_rcv = await tableData.json();
            store.mock.data = data_rcv.grid.data;
            store.mock.tableTitle = data_rcv.title;
            listContainer.appendChild(outputBaseTable(store.mock.data));
        }
    })();
    tableBody = listContainer.querySelector("table tbody");
}
if (window.top == window && isDev) {
    listContainer = document.querySelector("#list-container");
    listContainer.appendChild(outputBaseTable(store.mock.data));
    tableBody = listContainer.querySelector("table tbody");
// listContainer.querySelector('[id="table-search"]').addEventListener('keyup', handleSearch);
}
if (window.top != window) listContainer = document.querySelector("#list-container");
function saveImage(url) {
    const id = getId();
    store.camera.images.push({
        id,
        url
    });
}
const emptySearchResultsNotice = ()=>{
    return (0, _lighterhtml.html).node`<p class="${(0, _twind.tw)`hover:bg-gray-100 w-full border-b border-gray-200 py-3`}">
    No items match the search query
  </p>`;
};
const filterBySearchQuery = (searchString)=>{
    return (0, _vanilla.snapshot)(store.mock.data).filter((k, i)=>{
        return k.map((e)=>e.toUpperCase().startsWith(searchString.toUpperCase())).some((q)=>q);
    });
};
(0, _vanilla.subscribe)(store, ()=>{
    console.log((0, _vanilla.snapshot)(store));
    if (store.searchQuery.length > 2) {
        [
            ...tableBody.children
        ].forEach((node)=>node.remove());
        let filteredCells = filterBySearchQuery(store.searchQuery);
        tableBody.appendChild(filteredCells.length > 0 ? outputFilteredCells(filteredCells) : emptySearchResultsNotice());
    }
});
const unsub = (0, _utils.devtools)(store, {
    name: "ultimatetables"
});

},{"./index.css":"irmnC","lighterhtml":"lhq8K","valtio/vanilla":"gyoEY","valtio/utils":"7IFXN","twind":"aXRum","twind/css":"2835l","./mock":"gXrQx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"irmnC":[function() {},{}],"lhq8K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hole", ()=>Hole);
parcelHelpers.export(exports, "custom", ()=>custom);
parcelHelpers.export(exports, "render", ()=>render);
parcelHelpers.export(exports, "html", ()=>html);
parcelHelpers.export(exports, "svg", ()=>svg);
var _weakmap = require("@ungap/weakmap");
var _weakmapDefault = parcelHelpers.interopDefault(_weakmap);
var _domsanitizer = require("domsanitizer");
var _domsanitizerDefault = parcelHelpers.interopDefault(_domsanitizer);
var _uarray = require("uarray");
var _umap = require("umap");
var _umapDefault = parcelHelpers.interopDefault(_umap);
var _uwire = require("uwire");
var _taggerJs = require("./tagger.js");
const { create , freeze , keys  } = Object;
const tProto = (0, _taggerJs.Tagger).prototype;
const cache = (0, _umapDefault.default)(new (0, _weakmapDefault.default));
const createRender = (Tagger)=>({
        html: outer("html", Tagger),
        svg: outer("svg", Tagger),
        render (where, what) {
            const hole = typeof what === "function" ? what() : what;
            const info = cache.get(where) || cache.set(where, createCache());
            const wire = hole instanceof LighterHole ? unroll(Tagger, info, hole) : hole;
            if (wire !== info.wire) {
                info.wire = wire;
                where.textContent = "";
                where.appendChild(wire.valueOf());
            }
            return where;
        }
    });
const createCache = ()=>({
        stack: [],
        entry: null,
        wire: null
    });
const outer = (type, Tagger)=>{
    const cache1 = (0, _umapDefault.default)(new (0, _weakmapDefault.default));
    const fixed = (info)=>function() {
            return unroll(Tagger, info, hole.apply(null, arguments));
        };
    hole.for = (ref, id)=>{
        const memo = cache1.get(ref) || cache1.set(ref, create(null));
        return memo[id] || (memo[id] = fixed(createCache()));
    };
    hole.node = function() {
        return unroll(Tagger, createCache(), hole.apply(null, arguments)).valueOf();
    };
    return hole;
    function hole() {
        return new LighterHole(type, tta.apply(null, arguments));
    }
};
const unroll = (Tagger, info, { type , template , values  })=>{
    const { length  } = values;
    unrollValues(Tagger, info, values, length);
    let { entry  } = info;
    if (!entry || entry.template !== template || entry.type !== type) {
        const tag = new Tagger(type);
        info.entry = entry = {
            type,
            template,
            tag,
            wire: (0, _uwire.persistent)(tag(template, ...values))
        };
    } else entry.tag(template, ...values);
    return entry.wire;
};
const unrollValues = (Tagger, { stack  }, values, length)=>{
    for(let i = 0; i < length; i++){
        const hole = values[i];
        if (hole instanceof Hole) values[i] = unroll(Tagger, stack[i] || (stack[i] = createCache()), hole);
        else if ((0, _uarray.isArray)(hole)) unrollValues(Tagger, stack[i] || (stack[i] = createCache()), hole, hole.length);
        else stack[i] = null;
    }
    if (length < stack.length) stack.splice(length);
};
freeze(LighterHole);
function LighterHole(type, args) {
    this.type = type;
    this.template = args.shift();
    this.values = args;
}
const Hole = LighterHole;
const custom = (overrides)=>{
    const prototype = create(tProto);
    keys(overrides).forEach((key)=>{
        prototype[key] = overrides[key](prototype[key] || (key === "convert" ? (0, _domsanitizerDefault.default) : String));
    });
    CustomTagger.prototype = prototype;
    return createRender(CustomTagger);
    function CustomTagger() {
        return (0, _taggerJs.Tagger).apply(this, arguments);
    }
};
const { render , html , svg  } = createRender((0, _taggerJs.Tagger));
function tta() {
    let out = [], i = 0, { length  } = arguments;
    while(i < length)out.push(arguments[i++]);
    return out;
}

},{"@ungap/weakmap":"9kXPw","domsanitizer":"8JqGh","uarray":"7ftea","umap":"b3ep2","uwire":"eGHCa","./tagger.js":"fUuvX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9kXPw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*! (c) Andrea Giammarchi - ISC */ var self = {};
try {
    self.WeakMap = WeakMap;
} catch (WeakMap) {
    // this could be better but 90% of the time
    // it's everything developers need as fallback
    self.WeakMap = function(id, Object) {
        "use strict";
        var dP = Object.defineProperty;
        var hOP = Object.hasOwnProperty;
        var proto = WeakMap1.prototype;
        proto.delete = function(key) {
            return this.has(key) && delete key[this._];
        };
        proto.get = function(key) {
            return this.has(key) ? key[this._] : void 0;
        };
        proto.has = function(key) {
            return hOP.call(key, this._);
        };
        proto.set = function(key, value) {
            dP(key, this._, {
                configurable: true,
                value: value
            });
            return this;
        };
        return WeakMap1;
        function WeakMap1(iterable) {
            dP(this, "_", {
                value: "_@ungap/weakmap" + id++
            });
            if (iterable) iterable.forEach(add, this);
        }
        function add(pair) {
            this.set(pair[0], pair[1]);
        }
    }(Math.random(), Object);
}
exports.default = self.WeakMap;

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

},{}],"8JqGh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*! (c) Andrea Giammarchi - ISC */ var _domconstants = require("domconstants");
exports.default = function(template) {
    return template.join((0, _domconstants.UIDC)).replace(selfClosing, fullClosing).replace(attrSeeker, attrReplacer);
};
var spaces = " \\f\\n\\r\\t";
var almostEverything = "[^" + spaces + "\\/>\"'=]+";
var attrName = "[" + spaces + "]+" + almostEverything;
var tagName = "<([A-Za-z]+[A-Za-z0-9:._-]*)((?:";
var attrPartials = "(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|" + almostEverything.replace("\\/", "") + "))?)";
var attrSeeker = new RegExp(tagName + attrName + attrPartials + "+)([" + spaces + "]*/?>)", "g");
var selfClosing = new RegExp(tagName + attrName + attrPartials + "*)([" + spaces + "]*/>)", "g");
var findAttributes = new RegExp("(" + attrName + "\\s*=\\s*)(['\"]?)" + (0, _domconstants.UIDC) + "\\2", "gi");
function attrReplacer($0, $1, $2, $3) {
    return "<" + $1 + $2.replace(findAttributes, replaceAttributes) + $3;
}
function replaceAttributes($0, $1, $2) {
    return $1 + ($2 || '"') + (0, _domconstants.UID) + ($2 || '"');
}
function fullClosing($0, $1, $2) {
    return (0, _domconstants.VOID_ELEMENTS).test($1) ? $0 : "<" + $1 + $2 + "></" + $1 + ">";
}

},{"domconstants":"h3QOm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h3QOm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UID", ()=>UID);
parcelHelpers.export(exports, "UIDC", ()=>UIDC);
parcelHelpers.export(exports, "UID_IE", ()=>UID_IE);
parcelHelpers.export(exports, "COMMENT_NODE", ()=>COMMENT_NODE);
parcelHelpers.export(exports, "DOCUMENT_FRAGMENT_NODE", ()=>DOCUMENT_FRAGMENT_NODE);
parcelHelpers.export(exports, "ELEMENT_NODE", ()=>ELEMENT_NODE);
parcelHelpers.export(exports, "TEXT_NODE", ()=>TEXT_NODE);
parcelHelpers.export(exports, "SHOULD_USE_TEXT_CONTENT", ()=>SHOULD_USE_TEXT_CONTENT);
parcelHelpers.export(exports, "VOID_ELEMENTS", ()=>VOID_ELEMENTS);
/*! (c) Andrea Giammarchi - ISC */ // Custom
var UID = "-" + Math.random().toFixed(6) + "%";
//                           Edge issue!
var UID_IE = false;
try {
    if (!function(template, content, tabindex) {
        return content in template && (template.innerHTML = "<p " + tabindex + '="' + UID + '"></p>', template[content].childNodes[0].getAttribute(tabindex) == UID);
    }(document.createElement("template"), "content", "tabindex")) {
        UID = "_dt: " + UID.slice(1, -1) + ";";
        UID_IE = true;
    }
} catch (meh) {}
var UIDC = "<!--" + UID + "-->";
// DOM
var COMMENT_NODE = 8;
var DOCUMENT_FRAGMENT_NODE = 11;
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var SHOULD_USE_TEXT_CONTENT = /^(?:plaintext|script|style|textarea|title|xmp)$/i;
var VOID_ELEMENTS = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ftea":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArray", ()=>isArray);
parcelHelpers.export(exports, "indexOf", ()=>indexOf);
parcelHelpers.export(exports, "slice", ()=>slice);
const { isArray  } = Array;
const { indexOf , slice  } = [];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b3ep2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (_)=>({
        // About: get: _.get.bind(_)
        // It looks like WebKit/Safari didn't optimize bind at all,
        // so that using bind slows it down by 60%.
        // Firefox and Chrome are just fine in both cases,
        // so let's use the approach that works fast everywhere 👍
        get: (key)=>_.get(key),
        set: (key, value)=>(_.set(key, value), value)
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eGHCa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "diffable", ()=>diffable);
parcelHelpers.export(exports, "persistent", ()=>persistent);
var _uarray = require("uarray");
const ELEMENT_NODE = 1;
const nodeType = 111;
const remove = ({ firstChild , lastChild  })=>{
    const range = document.createRange();
    range.setStartAfter(firstChild);
    range.setEndAfter(lastChild);
    range.deleteContents();
    return firstChild;
};
const diffable = (node, operation)=>node.nodeType === nodeType ? 1 / operation < 0 ? operation ? remove(node) : node.lastChild : operation ? node.valueOf() : node.firstChild : node;
const persistent = (fragment)=>{
    const { childNodes  } = fragment;
    const { length  } = childNodes;
    if (length < 2) return length ? childNodes[0] : fragment;
    const nodes = (0, _uarray.slice).call(childNodes, 0);
    const firstChild = nodes[0];
    const lastChild = nodes[length - 1];
    return {
        ELEMENT_NODE,
        nodeType,
        firstChild,
        lastChild,
        valueOf () {
            if (childNodes.length !== length) {
                let i = 0;
                while(i < length)fragment.appendChild(nodes[i++]);
            }
            return fragment;
        }
    };
};

},{"uarray":"7ftea","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fUuvX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tagger", ()=>Tagger);
var _createContent = require("@ungap/create-content");
var _createContentDefault = parcelHelpers.interopDefault(_createContent);
var _udomdiff = require("udomdiff");
var _udomdiffDefault = parcelHelpers.interopDefault(_udomdiff);
var _domtagger = require("domtagger");
var _domtaggerDefault = parcelHelpers.interopDefault(_domtagger);
var _hyperhtmlStyle = require("hyperhtml-style");
var _hyperhtmlStyleDefault = parcelHelpers.interopDefault(_hyperhtmlStyle);
var _uhandlers = require("uhandlers");
var _uwire = require("uwire");
var _uarray = require("uarray");
// special attributes helpers
const hyperProperty = (node, name)=>{
    let oldValue;
    return (newValue)=>{
        if (oldValue !== newValue) {
            oldValue = newValue;
            if (node[name] !== newValue) {
                if (newValue == null) {
                    // cleanup before dropping the attribute to fix IE/Edge gotcha
                    node[name] = "";
                    node.removeAttribute(name);
                } else node[name] = newValue;
            }
        }
    };
};
// list of attributes that should not be directly assigned
const readOnly = /^(?:form|list)$/i;
// simplifies text node creation
const text = (node, text1)=>node.ownerDocument.createTextNode(text1);
function Tagger(type) {
    this.type = type;
    return (0, _domtaggerDefault.default)(this);
}
Tagger.prototype = {
    // there are four kind of attributes, and related behavior:
    //  * events, with a name starting with `on`, to add/remove event listeners
    //  * special, with a name present in their inherited prototype, accessed directly
    //  * regular, accessed through get/setAttribute standard DOM methods
    //  * style, the only regular attribute that also accepts an object as value
    //    so that you can style=${{width: 120}}. In this case, the behavior has been
    //    fully inspired by Preact library and its simplicity.
    attribute (node, name, original) {
        const isSVG = this.type === "svg";
        switch(name){
            case "class":
                if (isSVG) return (0, _uhandlers.attribute)(node, name, isSVG);
                name = "className";
            case "props":
                return (0, _uhandlers.setter)(node, name);
            case "aria":
                return (0, _uhandlers.aria)(node);
            case "style":
                return (0, _hyperhtmlStyleDefault.default)(node, original, isSVG);
            case "ref":
                return (0, _uhandlers.ref)(node);
            case ".dataset":
                return (0, _uhandlers.data)(node);
            default:
                if (name.slice(0, 1) === ".") return (0, _uhandlers.setter)(node, name.slice(1));
                if (name.slice(0, 1) === "?") return (0, _uhandlers.boolean)(node, name.slice(1));
                if (name.slice(0, 2) === "on") return (0, _uhandlers.event)(node, name);
                if (name in node && !(isSVG || readOnly.test(name))) return hyperProperty(node, name);
                return (0, _uhandlers.attribute)(node, name, isSVG);
        }
    },
    // in a hyper(node)`<div>${content}</div>` case
    // everything could happen:
    //  * it's a JS primitive, stored as text
    //  * it's null or undefined, the node should be cleaned
    //  * it's a promise, update the content once resolved
    //  * it's an explicit intent, perform the desired operation
    //  * it's an Array, resolve all values if Promises and/or
    //    update the node with the resulting list of content
    any (node, childNodes) {
        const { type  } = this;
        let fastPath = false;
        let oldValue;
        const anyContent = (value)=>{
            switch(typeof value){
                case "string":
                case "number":
                case "boolean":
                    if (fastPath) {
                        if (oldValue !== value) {
                            oldValue = value;
                            childNodes[0].textContent = value;
                        }
                    } else {
                        fastPath = true;
                        oldValue = value;
                        childNodes = (0, _udomdiffDefault.default)(node.parentNode, childNodes, [
                            text(node, value)
                        ], (0, _uwire.diffable), node);
                    }
                    break;
                case "function":
                    anyContent(value(node));
                    break;
                case "object":
                case "undefined":
                    if (value == null) {
                        fastPath = false;
                        childNodes = (0, _udomdiffDefault.default)(node.parentNode, childNodes, [], (0, _uwire.diffable), node);
                        break;
                    }
                default:
                    fastPath = false;
                    oldValue = value;
                    if ((0, _uarray.isArray)(value)) {
                        if (value.length === 0) {
                            if (childNodes.length) childNodes = (0, _udomdiffDefault.default)(node.parentNode, childNodes, [], (0, _uwire.diffable), node);
                        } else switch(typeof value[0]){
                            case "string":
                            case "number":
                            case "boolean":
                                anyContent(String(value));
                                break;
                            case "function":
                                anyContent(value.map(invoke, node));
                                break;
                            case "object":
                                if ((0, _uarray.isArray)(value[0])) value = value.concat.apply([], value);
                            default:
                                childNodes = (0, _udomdiffDefault.default)(node.parentNode, childNodes, value, (0, _uwire.diffable), node);
                                break;
                        }
                    } else if ("ELEMENT_NODE" in value) childNodes = (0, _udomdiffDefault.default)(node.parentNode, childNodes, value.nodeType === 11 ? (0, _uarray.slice).call(value.childNodes) : [
                        value
                    ], (0, _uwire.diffable), node);
                    else if ("text" in value) anyContent(String(value.text));
                    else if ("any" in value) anyContent(value.any);
                    else if ("html" in value) childNodes = (0, _udomdiffDefault.default)(node.parentNode, childNodes, (0, _uarray.slice).call((0, _createContentDefault.default)([].concat(value.html).join(""), type).childNodes), (0, _uwire.diffable), node);
                    else if ("length" in value) anyContent((0, _uarray.slice).call(value));
                    break;
            }
        };
        return anyContent;
    },
    // style or textareas don't accept HTML as content
    // it's pointless to transform or analyze anything
    // different from text there but it's worth checking
    // for possible defined intents.
    text (node) {
        let oldValue;
        const textContent = (value)=>{
            if (oldValue !== value) {
                oldValue = value;
                const type = typeof value;
                if (type === "object" && value) {
                    if ("text" in value) textContent(String(value.text));
                    else if ("any" in value) textContent(value.any);
                    else if ("html" in value) textContent([].concat(value.html).join(""));
                    else if ("length" in value) textContent((0, _uarray.slice).call(value).join(""));
                } else if (type === "function") textContent(value(node));
                else node.textContent = value == null ? "" : value;
            }
        };
        return textContent;
    }
};
function invoke(callback) {
    return callback(this);
}

},{"@ungap/create-content":"4xeIY","udomdiff":"9UVlK","domtagger":"jHm5z","hyperhtml-style":"h4eqh","uhandlers":"ceEOD","uwire":"eGHCa","uarray":"7ftea","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4xeIY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*! (c) Andrea Giammarchi - ISC */ var createContent = function(document) {
    "use strict";
    var FRAGMENT = "fragment";
    var TEMPLATE = "template";
    var HAS_CONTENT = "content" in create(TEMPLATE);
    var createHTML = HAS_CONTENT ? function(html) {
        var template = create(TEMPLATE);
        template.innerHTML = html;
        return template.content;
    } : function(html) {
        var content = create(FRAGMENT);
        var template = create(TEMPLATE);
        var childNodes = null;
        if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html)) {
            var selector = RegExp.$1;
            template.innerHTML = "<table>" + html + "</table>";
            childNodes = template.querySelectorAll(selector);
        } else {
            template.innerHTML = html;
            childNodes = template.childNodes;
        }
        append(content, childNodes);
        return content;
    };
    return function createContent(markup, type) {
        return (type === "svg" ? createSVG : createHTML)(markup);
    };
    function append(root, childNodes) {
        var length = childNodes.length;
        while(length--)root.appendChild(childNodes[0]);
    }
    function create(element) {
        return element === FRAGMENT ? document.createDocumentFragment() : document.createElementNS("http://www.w3.org/1999/xhtml", element);
    }
    // it could use createElementNS when hasNode is there
    // but this fallback is equally fast and easier to maintain
    // it is also battle tested already in all IE
    function createSVG(svg) {
        var content = create(FRAGMENT);
        var template = create("div");
        template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + svg + "</svg>";
        append(content, template.firstChild.childNodes);
        return content;
    }
}(document);
exports.default = createContent;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9UVlK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ISC License
 *
 * Copyright (c) 2020, Andrea Giammarchi, @WebReflection
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
 * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */ /**
 * @param {Node} parentNode The container where children live
 * @param {Node[]} a The list of current/live children
 * @param {Node[]} b The list of future children
 * @param {(entry: Node, action: number) => Node} get
 * The callback invoked per each entry related DOM operation.
 * @param {Node} [before] The optional node used as anchor to insert before.
 * @returns {Node[]} The same list of future children.
 */ exports.default = (parentNode, a, b, get, before)=>{
    const bLength = b.length;
    let aEnd = a.length;
    let bEnd = bLength;
    let aStart = 0;
    let bStart = 0;
    let map = null;
    while(aStart < aEnd || bStart < bEnd){
        // append head, tail, or nodes in between: fast path
        if (aEnd === aStart) {
            // we could be in a situation where the rest of nodes that
            // need to be added are not at the end, and in such case
            // the node to `insertBefore`, if the index is more than 0
            // must be retrieved, otherwise it's gonna be the first item.
            const node = bEnd < bLength ? bStart ? get(b[bStart - 1], -0).nextSibling : get(b[bEnd - bStart], 0) : before;
            while(bStart < bEnd)parentNode.insertBefore(get(b[bStart++], 1), node);
        } else if (bEnd === bStart) while(aStart < aEnd){
            // remove the node only if it's unknown or not live
            if (!map || !map.has(a[aStart])) parentNode.removeChild(get(a[aStart], -1));
            aStart++;
        }
        else if (a[aStart] === b[bStart]) {
            aStart++;
            bStart++;
        } else if (a[aEnd - 1] === b[bEnd - 1]) {
            aEnd--;
            bEnd--;
        } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
            // this is a "shrink" operation that could happen in these cases:
            // [1, 2, 3, 4, 5]
            // [1, 4, 3, 2, 5]
            // or asymmetric too
            // [1, 2, 3, 4, 5]
            // [1, 2, 3, 5, 6, 4]
            const node = get(a[--aEnd], -1).nextSibling;
            parentNode.insertBefore(get(b[bStart++], 1), get(a[aStart++], -1).nextSibling);
            parentNode.insertBefore(get(b[--bEnd], 1), node);
            // mark the future index as identical (yeah, it's dirty, but cheap 👍)
            // The main reason to do this, is that when a[aEnd] will be reached,
            // the loop will likely be on the fast path, as identical to b[bEnd].
            // In the best case scenario, the next loop will skip the tail,
            // but in the worst one, this node will be considered as already
            // processed, bailing out pretty quickly from the map index check
            a[aEnd] = b[bEnd];
        } else {
            // the map requires an O(bEnd - bStart) operation once
            // to store all future nodes indexes for later purposes.
            // In the worst case scenario, this is a full O(N) cost,
            // and such scenario happens at least when all nodes are different,
            // but also if both first and last items of the lists are different
            if (!map) {
                map = new Map;
                let i = bStart;
                while(i < bEnd)map.set(b[i], i++);
            }
            // if it's a future node, hence it needs some handling
            if (map.has(a[aStart])) {
                // grab the index of such node, 'cause it might have been processed
                const index = map.get(a[aStart]);
                // if it's not already processed, look on demand for the next LCS
                if (bStart < index && index < bEnd) {
                    let i = aStart;
                    // counts the amount of nodes that are the same in the future
                    let sequence = 1;
                    while(++i < aEnd && i < bEnd && map.get(a[i]) === index + sequence)sequence++;
                    // effort decision here: if the sequence is longer than replaces
                    // needed to reach such sequence, which would brings again this loop
                    // to the fast path, prepend the difference before a sequence,
                    // and move only the future list index forward, so that aStart
                    // and bStart will be aligned again, hence on the fast path.
                    // An example considering aStart and bStart are both 0:
                    // a: [1, 2, 3, 4]
                    // b: [7, 1, 2, 3, 6]
                    // this would place 7 before 1 and, from that time on, 1, 2, and 3
                    // will be processed at zero cost
                    if (sequence > index - bStart) {
                        const node = get(a[aStart], 0);
                        while(bStart < index)parentNode.insertBefore(get(b[bStart++], 1), node);
                    } else parentNode.replaceChild(get(b[bStart++], 1), get(a[aStart++], -1));
                } else aStart++;
            } else parentNode.removeChild(get(a[aStart++], -1));
        }
    }
    return b;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jHm5z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// globals
var _weakmap = require("@ungap/weakmap");
var _weakmapDefault = parcelHelpers.interopDefault(_weakmap);
// utils
var _createContent = require("@ungap/create-content");
var _createContentDefault = parcelHelpers.interopDefault(_createContent);
var _importNode = require("@ungap/import-node");
var _importNodeDefault = parcelHelpers.interopDefault(_importNode);
var _trim = require("@ungap/trim");
var _trimDefault = parcelHelpers.interopDefault(_trim);
var _domsanitizer = require("domsanitizer");
var _domsanitizerDefault = parcelHelpers.interopDefault(_domsanitizer);
var _umap = require("umap");
var _umapDefault = parcelHelpers.interopDefault(_umap);
// local
var _walkerJs = require("./walker.js");
// the domtagger 🎉
exports.default = domtagger;
var parsed = (0, _umapDefault.default)(new (0, _weakmapDefault.default));
function createInfo(options, template) {
    var markup = (options.convert || (0, _domsanitizerDefault.default))(template);
    var transform = options.transform;
    if (transform) markup = transform(markup);
    var content1 = (0, _createContentDefault.default)(markup, options.type);
    cleanContent(content1);
    var holes = [];
    (0, _walkerJs.parse)(content1, holes, template.slice(0), []);
    return {
        content: content1,
        updates: function(content) {
            var updates = [];
            var len = holes.length;
            var i1 = 0;
            var off1 = 0;
            while(i1 < len){
                var info = holes[i1++];
                var node = (0, _walkerJs.find)(content, info.path);
                switch(info.type){
                    case "any":
                        updates.push({
                            fn: options.any(node, []),
                            sparse: false
                        });
                        break;
                    case "attr":
                        var sparse = info.sparse;
                        var fn = options.attribute(node, info.name, info.node);
                        if (sparse === null) updates.push({
                            fn: fn,
                            sparse: false
                        });
                        else {
                            off1 += sparse.length - 2;
                            updates.push({
                                fn: fn,
                                sparse: true,
                                values: sparse
                            });
                        }
                        break;
                    case "text":
                        updates.push({
                            fn: options.text(node),
                            sparse: false
                        });
                        node.textContent = "";
                        break;
                }
            }
            len += off1;
            return function() {
                var length = arguments.length;
                if (len !== length - 1) throw new Error(length - 1 + " values instead of " + len + "\n" + template.join("${value}"));
                var i = 1;
                var off = 1;
                while(i < length){
                    var update = updates[i - off];
                    if (update.sparse) {
                        var values = update.values;
                        var value = values[0];
                        var j = 1;
                        var l = values.length;
                        off += l - 2;
                        while(j < l)value += arguments[i++] + values[j++];
                        update.fn(value);
                    } else update.fn(arguments[i++]);
                }
                return content;
            };
        }
    };
}
function createDetails(options, template) {
    var info = parsed.get(template) || parsed.set(template, createInfo(options, template));
    return info.updates((0, _importNodeDefault.default).call(document, info.content, true));
}
var empty = [];
function domtagger(options) {
    var previous = empty;
    var updates = cleanContent;
    return function(template) {
        if (previous !== template) updates = createDetails(options, previous = template);
        return updates.apply(null, arguments);
    };
}
function cleanContent(fragment) {
    var childNodes = fragment.childNodes;
    var i = childNodes.length;
    while(i--){
        var child = childNodes[i];
        if (child.nodeType !== 1 && (0, _trimDefault.default).call(child.textContent).length === 0) fragment.removeChild(child);
    }
}

},{"@ungap/weakmap":"9kXPw","@ungap/create-content":"4xeIY","@ungap/import-node":"euncT","@ungap/trim":"71CiS","domsanitizer":"8JqGh","umap":"b3ep2","./walker.js":"4CbMf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"euncT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*! (c) Andrea Giammarchi - ISC */ var importNode = function(document, appendChild, cloneNode, createTextNode, importNode1) {
    var native = importNode1 in document;
    // IE 11 has problems with cloning templates:
    // it "forgets" empty childNodes. This feature-detects that.
    var fragment = document.createDocumentFragment();
    fragment[appendChild](document[createTextNode]("g"));
    fragment[appendChild](document[createTextNode](""));
    /* istanbul ignore next */ var content = native ? document[importNode1](fragment, true) : fragment[cloneNode](true);
    return content.childNodes.length < 2 ? function importNode2(node, deep) {
        var clone = node[cloneNode]();
        for(var /* istanbul ignore next */ childNodes = node.childNodes || [], length = childNodes.length, i = 0; deep && i < length; i++)clone[appendChild](importNode2(childNodes[i], deep));
        return clone;
    } : native ? document[importNode1] : function(node, deep) {
        return node[cloneNode](!!deep);
    };
}(document, "appendChild", "cloneNode", "createTextNode", "importNode");
exports.default = importNode;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"71CiS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var trim = "".trim || /* istanbul ignore next */ function() {
    return String(this).replace(/^\s+|\s+/g, "");
};
exports.default = trim;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4CbMf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "find", ()=>find);
parcelHelpers.export(exports, "parse", ()=>parse);
var _trim = require("@ungap/trim");
var _trimDefault = parcelHelpers.interopDefault(_trim);
var _domconstants = require("domconstants");
/* istanbul ignore next */ var normalizeAttributes = (0, _domconstants.UID_IE) ? function(attributes, parts) {
    var html = parts.join(" ");
    return parts.slice.call(attributes, 0).sort(function(left, right) {
        return html.indexOf(left.name) <= html.indexOf(right.name) ? -1 : 1;
    });
} : function(attributes, parts) {
    return parts.slice.call(attributes, 0);
};
function find(node, path) {
    var length = path.length;
    var i = 0;
    while(i < length)node = node.childNodes[path[i++]];
    return node;
}
function parse(node, holes, parts, path) {
    var childNodes = node.childNodes;
    var length = childNodes.length;
    var i = 0;
    while(i < length){
        var child = childNodes[i];
        switch(child.nodeType){
            case 0, _domconstants.ELEMENT_NODE:
                var childPath = path.concat(i);
                parseAttributes(child, holes, parts, childPath);
                parse(child, holes, parts, childPath);
                break;
            case 0, _domconstants.COMMENT_NODE:
                var textContent = child.textContent;
                if (textContent === (0, _domconstants.UID)) {
                    parts.shift();
                    holes.push(// basicHTML or other non standard engines
                    // might end up having comments in nodes
                    // where they shouldn't, hence this check.
                    (0, _domconstants.SHOULD_USE_TEXT_CONTENT).test(node.nodeName) ? Text(node, path) : Any(child, path.concat(i)));
                } else switch(textContent.slice(0, 2)){
                    case "/*":
                        if (textContent.slice(-2) !== "*/") break;
                    case "\uD83D\uDC7B":
                        node.removeChild(child);
                        i--;
                        length--;
                }
                break;
            case 0, _domconstants.TEXT_NODE:
                // the following ignore is actually covered by browsers
                // only basicHTML ends up on previous COMMENT_NODE case
                // instead of TEXT_NODE because it knows nothing about
                // special style or textarea behavior
                /* istanbul ignore if */ if ((0, _domconstants.SHOULD_USE_TEXT_CONTENT).test(node.nodeName) && (0, _trimDefault.default).call(child.textContent) === (0, _domconstants.UIDC)) {
                    parts.shift();
                    holes.push(Text(node, path));
                }
                break;
        }
        i++;
    }
}
function parseAttributes(node, holes, parts, path) {
    var attributes = node.attributes;
    var cache = [];
    var remove = [];
    var array = normalizeAttributes(attributes, parts);
    var length = array.length;
    var i = 0;
    while(i < length){
        var attribute = array[i++];
        var direct = attribute.value === (0, _domconstants.UID);
        var sparse;
        if (direct || 1 < (sparse = attribute.value.split((0, _domconstants.UIDC))).length) {
            var name = attribute.name;
            // the following ignore is covered by IE
            // and the IE9 double viewBox test
            /* istanbul ignore else */ if (cache.indexOf(name) < 0) {
                cache.push(name);
                var realName = parts.shift().replace(direct ? /^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/ : new RegExp("^(?:|[\\S\\s]*?\\s)(" + name + ")\\s*=\\s*('|\")[\\S\\s]*", "i"), "$1");
                var value = attributes[realName] || // the following ignore is covered by browsers
                // while basicHTML is already case-sensitive
                /* istanbul ignore next */ attributes[realName.toLowerCase()];
                if (direct) holes.push(Attr(value, path, realName, null));
                else {
                    var skip = sparse.length - 2;
                    while(skip--)parts.shift();
                    holes.push(Attr(value, path, realName, sparse));
                }
            }
            remove.push(attribute);
        }
    }
    length = remove.length;
    i = 0;
    /* istanbul ignore next */ var cleanValue = 0 < length && (0, _domconstants.UID_IE) && !("ownerSVGElement" in node);
    while(i < length){
        // Edge HTML bug #16878726
        var attr = remove[i++];
        // IE/Edge bug lighterhtml#63 - clean the value or it'll persist
        /* istanbul ignore next */ if (cleanValue) attr.value = "";
        // IE/Edge bug lighterhtml#64 - don't use removeAttributeNode
        node.removeAttribute(attr.name);
    }
    // This is a very specific Firefox/Safari issue
    // but since it should be a not so common pattern,
    // it's probably worth patching regardless.
    // Basically, scripts created through strings are death.
    // You need to create fresh new scripts instead.
    // TODO: is there any other node that needs such nonsense?
    var nodeName = node.nodeName;
    if (/^script$/i.test(nodeName)) {
        // this used to be like that
        // var script = createElement(node, nodeName);
        // then Edge arrived and decided that scripts created
        // through template documents aren't worth executing
        // so it became this ... hopefully it won't hurt in the wild
        var script = document.createElement(nodeName);
        length = attributes.length;
        i = 0;
        while(i < length)script.setAttributeNode(attributes[i++].cloneNode(true));
        script.textContent = node.textContent;
        node.parentNode.replaceChild(script, node);
    }
}
function Any(node, path) {
    return {
        type: "any",
        node: node,
        path: path
    };
}
function Attr(node, path, name, sparse) {
    return {
        type: "attr",
        node: node,
        path: path,
        name: name,
        sparse: sparse
    };
}
function Text(node, path) {
    return {
        type: "text",
        node: node,
        path: path
    };
}

},{"@ungap/trim":"71CiS","domconstants":"h3QOm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h4eqh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*! (c) Andrea Giammarchi - ISC */ var hyperStyle = function() {
    "use strict";
    // from https://github.com/developit/preact/blob/33fc697ac11762a1cb6e71e9847670d047af7ce5/src/varants.js
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var hyphen = /([^A-Z])([A-Z]+)/g;
    return function hyperStyle(node, original) {
        return "ownerSVGElement" in node ? svg(node, original) : update(node.style, false);
    };
    function ized($0, $1, $2) {
        return $1 + "-" + $2.toLowerCase();
    }
    function svg(node, original) {
        var style;
        if (original) style = original.cloneNode(true);
        else {
            node.setAttribute("style", "--hyper:style;");
            style = node.getAttributeNode("style");
        }
        style.value = "";
        node.setAttributeNode(style);
        return update(style, true);
    }
    function toStyle(object) {
        var key, css = [];
        for(key in object)css.push(key.replace(hyphen, ized), ":", object[key], ";");
        return css.join("");
    }
    function update(style, isSVG) {
        var oldType, oldValue;
        return function(newValue) {
            var info, key, styleValue, value;
            switch(typeof newValue){
                case "object":
                    if (newValue) {
                        if (oldType === "object") {
                            if (!isSVG) {
                                if (oldValue !== newValue) {
                                    for(key in oldValue){
                                        if (!(key in newValue)) {
                                            style[key] = "";
                                        }
                                    }
                                }
                            }
                        } else {
                            if (isSVG) style.value = "";
                            else style.cssText = "";
                        }
                        info = isSVG ? {} : style;
                        for(key in newValue){
                            value = newValue[key];
                            styleValue = typeof value === "number" && !IS_NON_DIMENSIONAL.test(key) ? value + "px" : value;
                            if (!isSVG && /^--/.test(key)) info.setProperty(key, styleValue);
                            else info[key] = styleValue;
                        }
                        oldType = "object";
                        if (isSVG) style.value = toStyle(oldValue = info);
                        else oldValue = newValue;
                        break;
                    }
                default:
                    if (oldValue != newValue) {
                        oldType = "string";
                        oldValue = newValue;
                        if (isSVG) style.value = newValue || "";
                        else style.cssText = newValue || "";
                    }
                    break;
            }
        };
    }
}();
exports.default = hyperStyle;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ceEOD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "aria", ()=>aria);
parcelHelpers.export(exports, "attribute", ()=>attribute);
parcelHelpers.export(exports, "boolean", ()=>boolean);
parcelHelpers.export(exports, "data", ()=>data);
parcelHelpers.export(exports, "event", ()=>event);
parcelHelpers.export(exports, "ref", ()=>ref);
parcelHelpers.export(exports, "setter", ()=>setter);
parcelHelpers.export(exports, "text", ()=>text);
var _uarray = require("uarray");
const aria = (node)=>(values)=>{
        for(const key in values){
            const name = key === "role" ? key : `aria-${key}`;
            const value = values[key];
            if (value == null) node.removeAttribute(name);
            else node.setAttribute(name, value);
        }
    };
const attribute = (node, name)=>{
    let oldValue, orphan = true;
    const attributeNode = document.createAttributeNS(null, name);
    return (newValue)=>{
        if (oldValue !== newValue) {
            oldValue = newValue;
            if (oldValue == null) {
                if (!orphan) {
                    node.removeAttributeNode(attributeNode);
                    orphan = true;
                }
            } else {
                attributeNode.value = newValue;
                if (orphan) {
                    node.setAttributeNodeNS(attributeNode);
                    orphan = false;
                }
            }
        }
    };
};
const boolean = (node, key, oldValue)=>(newValue)=>{
        if (oldValue !== !!newValue) {
            // when IE won't be around anymore ...
            // node.toggleAttribute(key, oldValue = !!newValue);
            if (oldValue = !!newValue) node.setAttribute(key, "");
            else node.removeAttribute(key);
        }
    };
const data = ({ dataset  })=>(values)=>{
        for(const key in values){
            const value = values[key];
            if (value == null) delete dataset[key];
            else dataset[key] = value;
        }
    };
const event = (node, name)=>{
    let oldValue, type = name.slice(2);
    if (!(name in node) && name.toLowerCase() in node) type = type.toLowerCase();
    return (newValue)=>{
        const info = (0, _uarray.isArray)(newValue) ? newValue : [
            newValue,
            false
        ];
        if (oldValue !== info[0]) {
            if (oldValue) node.removeEventListener(type, oldValue, info[1]);
            if (oldValue = info[0]) node.addEventListener(type, oldValue, info[1]);
        }
    };
};
const ref = (node)=>(value)=>{
        if (typeof value === "function") value(node);
        else value.current = node;
    };
const setter = (node, key)=>key === "dataset" ? data(node) : (value)=>{
        node[key] = value;
    };
const text = (node)=>{
    let oldValue;
    return (newValue)=>{
        if (oldValue != newValue) {
            oldValue = newValue;
            node.textContent = newValue == null ? "" : newValue;
        }
    };
};

},{"uarray":"7ftea","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gyoEY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var proxyCompare = require("proxy-compare");
var VERSION = Symbol();
var LISTENERS = Symbol();
var SNAPSHOT = Symbol();
var HANDLER = Symbol();
var PROMISE_RESULT = Symbol();
var PROMISE_ERROR = Symbol();
var refSet = new WeakSet();
function ref(o) {
    refSet.add(o);
    return o;
}
var isObject = function isObject(x) {
    return typeof x === "object" && x !== null;
};
var canProxy = function canProxy(x) {
    return isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer);
};
var proxyCache = new WeakMap();
var globalVersion = 1;
var snapshotCache = new WeakMap();
function proxy(initialObject) {
    if (initialObject === void 0) initialObject = {};
    if (!isObject(initialObject)) throw new Error("object required");
    var found = proxyCache.get(initialObject);
    if (found) return found;
    var version = globalVersion;
    var listeners = new Set();
    var notifyUpdate = function notifyUpdate(op, nextVersion) {
        if (!nextVersion) nextVersion = ++globalVersion;
        if (version !== nextVersion) {
            version = nextVersion;
            listeners.forEach(function(listener) {
                return listener(op, nextVersion);
            });
        }
    };
    var propListeners = new Map();
    var getPropListener = function getPropListener(prop) {
        var propListener = propListeners.get(prop);
        if (!propListener) {
            propListener = function propListener(op, nextVersion) {
                var newOp = [].concat(op);
                newOp[1] = [
                    prop
                ].concat(newOp[1]);
                notifyUpdate(newOp, nextVersion);
            };
            propListeners.set(prop, propListener);
        }
        return propListener;
    };
    var popPropListener = function popPropListener(prop) {
        var propListener = propListeners.get(prop);
        propListeners.delete(prop);
        return propListener;
    };
    var createSnapshot = function createSnapshot(target, receiver) {
        var cache = snapshotCache.get(receiver);
        if ((cache == null ? void 0 : cache[0]) === version) return cache[1];
        var snapshot1 = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
        proxyCompare.markToTrack(snapshot1, true);
        snapshotCache.set(receiver, [
            version,
            snapshot1
        ]);
        Reflect.ownKeys(target).forEach(function(key) {
            var value = Reflect.get(target, key, receiver);
            if (refSet.has(value)) {
                proxyCompare.markToTrack(value, false);
                snapshot1[key] = value;
            } else if (value instanceof Promise) {
                if (PROMISE_RESULT in value) snapshot1[key] = value[PROMISE_RESULT];
                else {
                    var errorOrPromise = value[PROMISE_ERROR] || value;
                    Object.defineProperty(snapshot1, key, {
                        get: function get() {
                            if (PROMISE_RESULT in value) return value[PROMISE_RESULT];
                            throw errorOrPromise;
                        }
                    });
                }
            } else if (value != null && value[LISTENERS]) snapshot1[key] = value[SNAPSHOT];
            else snapshot1[key] = value;
        });
        Object.freeze(snapshot1);
        return snapshot1;
    };
    var baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
    var handler = {
        get: function get(target, prop, receiver) {
            if (prop === VERSION) return version;
            if (prop === LISTENERS) return listeners;
            if (prop === SNAPSHOT) return createSnapshot(target, receiver);
            if (prop === HANDLER) return handler;
            return Reflect.get(target, prop, receiver);
        },
        deleteProperty: function deleteProperty(target, prop) {
            var prevValue = Reflect.get(target, prop);
            var childListeners = prevValue == null ? void 0 : prevValue[LISTENERS];
            if (childListeners) childListeners.delete(popPropListener(prop));
            var deleted = Reflect.deleteProperty(target, prop);
            if (deleted) notifyUpdate([
                "delete",
                [
                    prop
                ],
                prevValue
            ]);
            return deleted;
        },
        is: Object.is,
        canProxy: canProxy,
        set: function set(target, prop, value, receiver) {
            var _Object$getOwnPropert, _value;
            var prevValue = Reflect.get(target, prop, receiver);
            if (this.is(prevValue, value)) return true;
            var childListeners = prevValue == null ? void 0 : prevValue[LISTENERS];
            if (childListeners) childListeners.delete(popPropListener(prop));
            if (isObject(value)) value = proxyCompare.getUntracked(value) || value;
            var nextValue;
            if ((_Object$getOwnPropert = Object.getOwnPropertyDescriptor(target, prop)) != null && _Object$getOwnPropert.set) nextValue = value;
            else if (value instanceof Promise) nextValue = value.then(function(v) {
                nextValue[PROMISE_RESULT] = v;
                notifyUpdate([
                    "resolve",
                    [
                        prop
                    ],
                    v
                ]);
                return v;
            }).catch(function(e) {
                nextValue[PROMISE_ERROR] = e;
                notifyUpdate([
                    "reject",
                    [
                        prop
                    ],
                    e
                ]);
            });
            else if ((_value = value) != null && _value[LISTENERS]) {
                nextValue = value;
                nextValue[LISTENERS].add(getPropListener(prop));
            } else if (this.canProxy(value)) {
                nextValue = proxy(value);
                nextValue[LISTENERS].add(getPropListener(prop));
            } else nextValue = value;
            Reflect.set(target, prop, nextValue, receiver);
            notifyUpdate([
                "set",
                [
                    prop
                ],
                value,
                prevValue
            ]);
            return true;
        }
    };
    var proxyObject = new Proxy(baseObject, handler);
    proxyCache.set(initialObject, proxyObject);
    Reflect.ownKeys(initialObject).forEach(function(key) {
        var desc = Object.getOwnPropertyDescriptor(initialObject, key);
        if (desc.get || desc.set) Object.defineProperty(baseObject, key, desc);
        else proxyObject[key] = initialObject[key];
    });
    return proxyObject;
}
function getVersion(proxyObject) {
    return isObject(proxyObject) ? proxyObject[VERSION] : undefined;
}
function subscribe(proxyObject, callback, notifyInSync) {
    if (!(proxyObject != null && proxyObject[LISTENERS])) console.warn("Please use proxy object");
    var promise;
    var ops = [];
    var listener = function listener(op) {
        ops.push(op);
        if (notifyInSync) {
            callback(ops.splice(0));
            return;
        }
        if (!promise) promise = Promise.resolve().then(function() {
            promise = undefined;
            callback(ops.splice(0));
        });
    };
    proxyObject[LISTENERS].add(listener);
    return function() {
        proxyObject[LISTENERS].delete(listener);
    };
}
function snapshot(proxyObject) {
    if (!(proxyObject != null && proxyObject[SNAPSHOT])) console.warn("Please use proxy object");
    return proxyObject[SNAPSHOT];
}
function getHandler(proxyObject) {
    if (!(proxyObject != null && proxyObject[HANDLER])) console.warn("Please use proxy object");
    return proxyObject[HANDLER];
}
exports.getHandler = getHandler;
exports.getVersion = getVersion;
exports.proxy = proxy;
exports.ref = ref;
exports.snapshot = snapshot;
exports.subscribe = subscribe;

},{"proxy-compare":"d0ziJ"}],"d0ziJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "affectedToPathList", ()=>g);
parcelHelpers.export(exports, "createProxy", ()=>i);
parcelHelpers.export(exports, "getUntracked", ()=>y);
parcelHelpers.export(exports, "isChanged", ()=>a);
parcelHelpers.export(exports, "markToTrack", ()=>b);
parcelHelpers.export(exports, "trackMemo", ()=>f);
const e = Symbol(), t = Symbol(), r = Symbol(), n = Object.getPrototypeOf, o = new WeakMap, s = (e1)=>e1 && (o.has(e1) ? o.get(e1) : n(e1) === Object.prototype || n(e1) === Array.prototype), c = (e2)=>"object" == typeof e2 && null !== e2, l = (n1, o1)=>{
    let s1 = !1;
    const c1 = (e3, t1)=>{
        if (!s1) {
            let r1 = e3.a.get(n1);
            r1 || (r1 = new Set, e3.a.set(n1, r1)), r1.add(t1);
        }
    }, l1 = {
        f: o1,
        get (e4, t2) {
            return t2 === r ? n1 : (c1(this, t2), i(e4[t2], this.a, this.c));
        },
        has (e5, r2) {
            return r2 === t ? (s1 = !0, this.a.delete(n1), !0) : (c1(this, r2), r2 in e5);
        },
        ownKeys (t3) {
            return c1(this, e), Reflect.ownKeys(t3);
        }
    };
    return o1 && (l1.set = l1.deleteProperty = ()=>!1), l1;
}, i = (e6, t4, o2)=>{
    if (!s(e6)) return e6;
    const c2 = e6[r] || e6, i1 = ((e7)=>Object.isFrozen(e7) || Object.values(Object.getOwnPropertyDescriptors(e7)).some((e8)=>!e8.writable))(c2);
    let u1 = o2 && o2.get(c2);
    return u1 && u1.f === i1 || (u1 = l(c2, i1), u1.p = new Proxy(i1 ? ((e9)=>{
        if (Array.isArray(e9)) return Array.from(e9);
        const t5 = Object.getOwnPropertyDescriptors(e9);
        return Object.values(t5).forEach((e10)=>{
            e10.configurable = !0;
        }), Object.create(n(e9), t5);
    })(c2) : c2, u1), o2 && o2.set(c2, u1)), u1.a = t4, u1.c = o2, u1.p;
}, u = (e11, t6)=>{
    const r3 = Reflect.ownKeys(e11), n2 = Reflect.ownKeys(t6);
    return r3.length !== n2.length || r3.some((e12, t7)=>e12 !== n2[t7]);
}, a = (t8, r4, n3, o3)=>{
    if (Object.is(t8, r4)) return !1;
    if (!c(t8) || !c(r4)) return !0;
    const s2 = n3.get(t8);
    if (!s2) return !0;
    if (o3) {
        const e13 = o3.get(t8);
        if (e13 && e13.n === r4) return e13.g;
        o3.set(t8, {
            n: r4,
            g: !1
        });
    }
    let l2 = null;
    for (const c3 of s2){
        const s3 = c3 === e ? u(t8, r4) : a(t8[c3], r4[c3], n3, o3);
        if (!0 !== s3 && !1 !== s3 || (l2 = s3), l2) break;
    }
    return null === l2 && (l2 = !0), o3 && o3.set(t8, {
        n: r4,
        g: l2
    }), l2;
}, f = (e14)=>!!s(e14) && t in e14, y = (e15)=>s(e15) && e15[r] || null, b = (e16, t9 = !0)=>{
    o.set(e16, t9);
}, g = (e17, t10)=>{
    const r5 = [], n4 = (e18, o4)=>{
        const s4 = t10.get(e18);
        s4 ? s4.forEach((t11)=>{
            n4(e18[t11], o4 ? [
                ...o4,
                t11
            ] : [
                t11
            ]);
        }) : o4 && r5.push(o4);
    };
    return n4(e17), r5;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7IFXN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var vanilla = require("valtio/vanilla");
var proxyCompare = require("proxy-compare");
function subscribeKey(proxyObject, key, callback, notifyInSync) {
    return vanilla.subscribe(proxyObject, function(ops) {
        if (ops.some(function(op) {
            return op[1][0] === key;
        })) callback(proxyObject[key]);
    }, notifyInSync);
}
var currentCleanups;
function watch(callback, options) {
    var cleanups = new Set();
    var subscriptions = new Set();
    var alive = true;
    var cleanup = function cleanup() {
        cleanups.forEach(function(clean) {
            clean();
        });
        cleanups.clear();
        subscriptions.clear();
    };
    var revalidate1 = function revalidate() {
        if (!alive) return;
        cleanup();
        var parent = currentCleanups;
        currentCleanups = cleanups;
        try {
            var cleanupReturn = callback(function(proxy) {
                subscriptions.add(proxy);
                return proxy;
            });
            if (cleanupReturn) cleanups.add(cleanupReturn);
        } finally{
            currentCleanups = parent;
        }
        subscriptions.forEach(function(proxy) {
            var clean = vanilla.subscribe(proxy, revalidate, options == null ? void 0 : options.sync);
            cleanups.add(clean);
        });
    };
    var wrappedCleanup = function wrappedCleanup() {
        if (alive) {
            cleanup();
            alive = false;
        }
    };
    if (currentCleanups) currentCleanups.add(wrappedCleanup);
    revalidate1();
    return wrappedCleanup;
}
var DEVTOOLS = Symbol();
function devtools(proxyObject, name) {
    var extension;
    try {
        extension = window.__REDUX_DEVTOOLS_EXTENSION__;
    } catch (_unused) {}
    if (!extension) {
        if (typeof window !== "undefined") console.warn("[Warning] Please install/enable Redux devtools extension");
        return;
    }
    var isTimeTraveling = false;
    var devtools1 = extension.connect({
        name: name
    });
    var unsub1 = vanilla.subscribe(proxyObject, function(ops) {
        var action = ops.filter(function(_ref) {
            _ref[0];
            var path = _ref[1];
            return path[0] !== DEVTOOLS;
        }).map(function(_ref2) {
            var op = _ref2[0], path = _ref2[1];
            return op + ":" + path.map(String).join(".");
        }).join(", ");
        if (!action) return;
        if (isTimeTraveling) isTimeTraveling = false;
        else {
            var snapWithoutDevtools = Object.assign({}, vanilla.snapshot(proxyObject));
            delete snapWithoutDevtools[DEVTOOLS];
            devtools1.send({
                type: action,
                updatedAt: new Date().toLocaleString()
            }, snapWithoutDevtools);
        }
    });
    var unsub2 = devtools1.subscribe(function(message) {
        var _message$payload3, _message$payload4;
        if (message.type === "ACTION" && message.payload) try {
            Object.assign(proxyObject, JSON.parse(message.payload));
        } catch (e) {
            console.error("please dispatch a serializable value that JSON.parse() and proxy() support\n", e);
        }
        if (message.type === "DISPATCH" && message.state) {
            var _message$payload, _message$payload2;
            if (((_message$payload = message.payload) == null ? void 0 : _message$payload.type) === "JUMP_TO_ACTION" || ((_message$payload2 = message.payload) == null ? void 0 : _message$payload2.type) === "JUMP_TO_STATE") {
                isTimeTraveling = true;
                var state = JSON.parse(message.state);
                Object.assign(proxyObject, state);
            }
            proxyObject[DEVTOOLS] = message;
        } else if (message.type === "DISPATCH" && ((_message$payload3 = message.payload) == null ? void 0 : _message$payload3.type) === "COMMIT") devtools1.init(vanilla.snapshot(proxyObject));
        else if (message.type === "DISPATCH" && ((_message$payload4 = message.payload) == null ? void 0 : _message$payload4.type) === "IMPORT_STATE") {
            var _message$payload$next, _message$payload$next2;
            var actions = (_message$payload$next = message.payload.nextLiftedState) == null ? void 0 : _message$payload$next.actionsById;
            var computedStates = ((_message$payload$next2 = message.payload.nextLiftedState) == null ? void 0 : _message$payload$next2.computedStates) || [];
            isTimeTraveling = true;
            computedStates.forEach(function(_ref3, index) {
                var state = _ref3.state;
                var action = actions[index] || "No action found";
                Object.assign(proxyObject, state);
                if (index === 0) devtools1.init(vanilla.snapshot(proxyObject));
                else devtools1.send(action, vanilla.snapshot(proxyObject));
            });
        }
    });
    devtools1.init(vanilla.snapshot(proxyObject));
    return function() {
        unsub1();
        unsub2();
    };
}
var sourceObjectMap = new WeakMap();
var derivedObjectMap = new WeakMap();
var markPending = function markPending1(sourceObject) {
    var sourceObjectEntry = sourceObjectMap.get(sourceObject);
    if (sourceObjectEntry) {
        sourceObjectEntry[0].forEach(function(subscription) {
            var derivedObject = subscription.d;
            if (sourceObject !== derivedObject) markPending1(derivedObject);
        });
        ++sourceObjectEntry[2];
    }
};
var checkPending = function checkPending(sourceObject, callback) {
    var sourceObjectEntry = sourceObjectMap.get(sourceObject);
    if (sourceObjectEntry != null && sourceObjectEntry[2]) {
        sourceObjectEntry[3].add(callback);
        return true;
    }
    return false;
};
var unmarkPending = function unmarkPending1(sourceObject) {
    var sourceObjectEntry = sourceObjectMap.get(sourceObject);
    if (sourceObjectEntry) {
        --sourceObjectEntry[2];
        if (!sourceObjectEntry[2]) {
            var _pendingCallbacks = new Set(sourceObjectEntry[3]);
            sourceObjectEntry[3].clear();
            _pendingCallbacks.forEach(function(callback) {
                return callback();
            });
        }
        sourceObjectEntry[0].forEach(function(subscription) {
            var derivedObject = subscription.d;
            if (sourceObject !== derivedObject) unmarkPending1(derivedObject);
        });
    }
};
var addSubscription = function addSubscription(subscription1) {
    var sourceObject = subscription1.s, derivedObject1 = subscription1.d;
    var derivedObjectEntry = derivedObjectMap.get(derivedObject1);
    if (!derivedObjectEntry) {
        derivedObjectEntry = [
            new Set()
        ];
        derivedObjectMap.set(subscription1.d, derivedObjectEntry);
    }
    derivedObjectEntry[0].add(subscription1);
    var sourceObjectEntry = sourceObjectMap.get(sourceObject);
    if (!sourceObjectEntry) {
        var _subscriptions = new Set();
        var _unsubscribe = vanilla.subscribe(sourceObject, function(ops) {
            _subscriptions.forEach(function(subscription) {
                var derivedObject = subscription.d, callback = subscription.c, notifyInSync = subscription.n, ignoreKeys = subscription.i;
                if (sourceObject === derivedObject && ops.every(function(op) {
                    return op[1].length === 1 && ignoreKeys.includes(op[1][0]);
                })) return;
                if (subscription.p) return;
                markPending(sourceObject);
                if (notifyInSync) {
                    callback();
                    unmarkPending(sourceObject);
                } else subscription.p = Promise.resolve().then(function() {
                    delete subscription.p;
                    callback();
                    unmarkPending(sourceObject);
                });
            });
        }, true);
        sourceObjectEntry = [
            _subscriptions,
            _unsubscribe,
            0,
            new Set()
        ];
        sourceObjectMap.set(sourceObject, sourceObjectEntry);
    }
    sourceObjectEntry[0].add(subscription1);
};
var removeSubscription = function removeSubscription(subscription) {
    var sourceObject = subscription.s, derivedObject = subscription.d;
    var derivedObjectEntry = derivedObjectMap.get(derivedObject);
    derivedObjectEntry == null || derivedObjectEntry[0].delete(subscription);
    if ((derivedObjectEntry == null ? void 0 : derivedObjectEntry[0].size) === 0) derivedObjectMap.delete(derivedObject);
    var sourceObjectEntry = sourceObjectMap.get(sourceObject);
    if (sourceObjectEntry) {
        var _subscriptions2 = sourceObjectEntry[0], _unsubscribe2 = sourceObjectEntry[1];
        _subscriptions2.delete(subscription);
        if (!_subscriptions2.size) {
            _unsubscribe2();
            sourceObjectMap.delete(sourceObject);
        }
    }
};
var listSubscriptions = function listSubscriptions(derivedObject) {
    var derivedObjectEntry = derivedObjectMap.get(derivedObject);
    if (derivedObjectEntry) return Array.from(derivedObjectEntry[0]);
    return [];
};
var unstable_deriveSubscriptions = {
    add: addSubscription,
    remove: removeSubscription,
    list: listSubscriptions
};
function derive(derivedFns, options) {
    var proxyObject = (options == null ? void 0 : options.proxy) || vanilla.proxy({});
    var notifyInSync = !!(options != null && options.sync);
    var derivedKeys = Object.keys(derivedFns);
    derivedKeys.forEach(function(key) {
        if (Object.getOwnPropertyDescriptor(proxyObject, key)) throw new Error("object property already defined");
        var fn = derivedFns[key];
        var lastDependencies = null;
        var evaluate1 = function evaluate() {
            if (lastDependencies) {
                if (Array.from(lastDependencies).map(function(_ref) {
                    var p = _ref[0];
                    return checkPending(p, evaluate);
                }).some(function(isPending) {
                    return isPending;
                })) return;
                if (Array.from(lastDependencies).every(function(_ref2) {
                    var p = _ref2[0], entry = _ref2[1];
                    return vanilla.getVersion(p) === entry.v;
                })) return;
            }
            var dependencies = new Map();
            var get = function get(p) {
                dependencies.set(p, {
                    v: vanilla.getVersion(p)
                });
                return p;
            };
            var value = fn(get);
            var subscribeToDependencies = function subscribeToDependencies() {
                var _lastDependencies2;
                dependencies.forEach(function(entry, p) {
                    var _lastDependencies, _lastDependencies$get;
                    var lastSubscription = (_lastDependencies = lastDependencies) == null ? void 0 : (_lastDependencies$get = _lastDependencies.get(p)) == null ? void 0 : _lastDependencies$get.s;
                    if (lastSubscription) entry.s = lastSubscription;
                    else {
                        var subscription = {
                            s: p,
                            d: proxyObject,
                            k: key,
                            c: evaluate,
                            n: notifyInSync,
                            i: derivedKeys
                        };
                        addSubscription(subscription);
                        entry.s = subscription;
                    }
                });
                (_lastDependencies2 = lastDependencies) == null || _lastDependencies2.forEach(function(entry, p) {
                    if (!dependencies.has(p) && entry.s) removeSubscription(entry.s);
                });
                lastDependencies = dependencies;
            };
            if (value instanceof Promise) value.finally(subscribeToDependencies);
            else subscribeToDependencies();
            proxyObject[key] = value;
        };
        evaluate1();
    });
    return proxyObject;
}
function underive(proxyObject, options) {
    var keysToDelete = options != null && options.delete ? new Set() : null;
    listSubscriptions(proxyObject).forEach(function(subscription) {
        var key = subscription.k;
        if (!(options != null && options.keys) || options.keys.includes(key)) {
            removeSubscription(subscription);
            if (keysToDelete) keysToDelete.add(key);
        }
    });
    if (keysToDelete) keysToDelete.forEach(function(key) {
        delete proxyObject[key];
    });
}
function addComputed_DEPRECATED(proxyObject, computedFns_FAKE, targetObject) {
    if (targetObject === void 0) targetObject = proxyObject;
    console.warn("addComputed is deprecated. Please consider using `derive` or `proxyWithComputed` instead. Falling back to emulation with derive.");
    var derivedFns = {};
    Object.keys(computedFns_FAKE).forEach(function(key) {
        derivedFns[key] = function(get) {
            return computedFns_FAKE[key](get(proxyObject));
        };
    });
    return derive(derivedFns, {
        proxy: targetObject
    });
}
function proxyWithComputed(initialObject, computedFns) {
    Object.keys(computedFns).forEach(function(key) {
        if (Object.getOwnPropertyDescriptor(initialObject, key)) throw new Error("object property already defined");
        var computedFn = computedFns[key];
        var _ref = typeof computedFn === "function" ? {
            get: computedFn
        } : computedFn, get = _ref.get, set = _ref.set;
        var computedValue;
        var prevSnapshot;
        var affected = new WeakMap();
        var desc = {};
        desc.get = function() {
            var nextSnapshot = vanilla.snapshot(proxyObject);
            if (!prevSnapshot || proxyCompare.isChanged(prevSnapshot, nextSnapshot, affected)) {
                affected = new WeakMap();
                computedValue = get(proxyCompare.createProxy(nextSnapshot, affected));
                prevSnapshot = nextSnapshot;
            }
            return computedValue;
        };
        if (set) desc.set = function(newValue) {
            return set(proxyObject, newValue);
        };
        Object.defineProperty(initialObject, key, desc);
    });
    var proxyObject = vanilla.proxy(initialObject);
    return proxyObject;
}
function proxyWithHistory(initialValue, skipSubscribe) {
    if (skipSubscribe === void 0) skipSubscribe = false;
    var proxyObject = vanilla.proxy({
        value: initialValue,
        history: vanilla.ref({
            wip: initialValue,
            snapshots: [],
            index: -1
        }),
        canUndo: function canUndo() {
            return proxyObject.history.index > 0;
        },
        undo: function undo() {
            if (proxyObject.canUndo()) {
                proxyObject.value = proxyObject.history.wip = proxyObject.history.snapshots[--proxyObject.history.index];
                proxyObject.history.snapshots[proxyObject.history.index] = vanilla.snapshot(proxyObject).value;
            }
        },
        canRedo: function canRedo() {
            return proxyObject.history.index < proxyObject.history.snapshots.length - 1;
        },
        redo: function redo() {
            if (proxyObject.canRedo()) {
                proxyObject.value = proxyObject.history.wip = proxyObject.history.snapshots[++proxyObject.history.index];
                proxyObject.history.snapshots[proxyObject.history.index] = vanilla.snapshot(proxyObject).value;
            }
        },
        saveHistory: function saveHistory() {
            proxyObject.history.snapshots.splice(proxyObject.history.index + 1);
            proxyObject.history.snapshots.push(vanilla.snapshot(proxyObject).value);
            ++proxyObject.history.index;
        },
        subscribe: function subscribe() {
            return vanilla.subscribe(proxyObject, function(ops) {
                if (ops.every(function(op) {
                    return op[1][0] === "value" && (op[0] !== "set" || op[2] !== proxyObject.history.wip);
                })) proxyObject.saveHistory();
            });
        }
    });
    proxyObject.saveHistory();
    if (!skipSubscribe) proxyObject.subscribe();
    return proxyObject;
}
function _defineEnumerableProperties(obj, descs) {
    for(var key in descs){
        var desc = descs[key];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, key, desc);
    }
    if (Object.getOwnPropertySymbols) {
        var objectSymbols = Object.getOwnPropertySymbols(descs);
        for(var i = 0; i < objectSymbols.length; i++){
            var sym = objectSymbols[i];
            var desc = descs[sym];
            desc.configurable = desc.enumerable = true;
            if ("value" in desc) desc.writable = true;
            Object.defineProperty(obj, sym, desc);
        }
    }
    return obj;
}
function proxySet(initialValues) {
    var _Symbol$toStringTag, _proxy, _mutatorMap;
    var set = vanilla.proxy((_proxy = {
        data: Array.from(new Set(initialValues)),
        has: function has(value) {
            return this.data.indexOf(value) !== -1;
        },
        add: function add(value) {
            var hasProxy = false;
            if (typeof value === "object" && value !== null) hasProxy = this.data.indexOf(vanilla.proxy(value)) !== -1;
            if (this.data.indexOf(value) === -1 && !hasProxy) this.data.push(value);
            return this;
        },
        delete: function _delete(value) {
            var index = this.data.indexOf(value);
            if (index === -1) return false;
            this.data.splice(index, 1);
            return true;
        },
        clear: function clear() {
            this.data.splice(0);
        },
        get size () {
            return this.data.length;
        },
        forEach: function forEach(cb) {
            var _this = this;
            this.data.forEach(function(value) {
                cb(value, value, _this);
            });
        }
    }, _Symbol$toStringTag = Symbol.toStringTag, _mutatorMap = {}, _mutatorMap[_Symbol$toStringTag] = _mutatorMap[_Symbol$toStringTag] || {}, _mutatorMap[_Symbol$toStringTag].get = function() {
        return "Set";
    }, _proxy.toJSON = function toJSON() {
        return {};
    }, _proxy[Symbol.iterator] = function() {
        return this.data[Symbol.iterator]();
    }, _proxy.values = function values() {
        return this.data.values();
    }, _proxy.keys = function keys() {
        return this.data.values();
    }, _proxy.entries = function entries() {
        return new Set(this.data).entries();
    }, _defineEnumerableProperties(_proxy, _mutatorMap), _proxy));
    Object.defineProperties(set, {
        data: {
            enumerable: false
        },
        size: {
            enumerable: false
        },
        toJSON: {
            enumerable: false
        }
    });
    Object.seal(set);
    return set;
}
function proxyMap(entries) {
    var _Symbol$toStringTag, _proxy, _mutatorMap;
    var map = vanilla.proxy((_proxy = {
        data: Array.from(entries || []),
        has: function has(key) {
            return this.data.some(function(p) {
                return p[0] === key;
            });
        },
        set: function set(key, value) {
            var record = this.data.find(function(p) {
                return p[0] === key;
            });
            if (record) record[1] = value;
            else this.data.push([
                key,
                value
            ]);
            return this;
        },
        get: function get(key) {
            var _this$data$find;
            return (_this$data$find = this.data.find(function(p) {
                return p[0] === key;
            })) == null ? void 0 : _this$data$find[1];
        },
        delete: function _delete(key) {
            var index = this.data.findIndex(function(p) {
                return p[0] === key;
            });
            if (index === -1) return false;
            this.data.splice(index, 1);
            return true;
        },
        clear: function clear() {
            this.data.splice(0);
        },
        get size () {
            return this.data.length;
        },
        toJSON: function toJSON() {
            return {};
        },
        forEach: function forEach(cb) {
            var _this = this;
            this.data.forEach(function(p) {
                cb(p[1], p[0], _this);
            });
        },
        keys: function keys() {
            return this.data.map(function(p) {
                return p[0];
            }).values();
        },
        values: function values() {
            return this.data.map(function(p) {
                return p[1];
            }).values();
        },
        entries: function entries() {
            return new Map(this.data).entries();
        }
    }, _Symbol$toStringTag = Symbol.toStringTag, _mutatorMap = {}, _mutatorMap[_Symbol$toStringTag] = _mutatorMap[_Symbol$toStringTag] || {}, _mutatorMap[_Symbol$toStringTag].get = function() {
        return "Map";
    }, _proxy[Symbol.iterator] = function() {
        return this.entries();
    }, _defineEnumerableProperties(_proxy, _mutatorMap), _proxy));
    Object.defineProperties(map, {
        data: {
            enumerable: false
        },
        size: {
            enumerable: false
        },
        toJSON: {
            enumerable: false
        }
    });
    Object.seal(map);
    return map;
}
exports.addComputed = addComputed_DEPRECATED;
exports.derive = derive;
exports.devtools = devtools;
exports.proxyMap = proxyMap;
exports.proxySet = proxySet;
exports.proxyWithComputed = proxyWithComputed;
exports.proxyWithHistory = proxyWithHistory;
exports.subscribeKey = subscribeKey;
exports.underive = underive;
exports.unstable_deriveSubscriptions = unstable_deriveSubscriptions;
exports.watch = watch;

},{"valtio/vanilla":"gyoEY","proxy-compare":"d0ziJ"}],"aXRum":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "apply", ()=>apply);
parcelHelpers.export(exports, "autoprefix", ()=>autoprefix);
parcelHelpers.export(exports, "create", ()=>create);
parcelHelpers.export(exports, "cssomSheet", ()=>cssomSheet);
parcelHelpers.export(exports, "directive", ()=>directive);
parcelHelpers.export(exports, "expandGroups", ()=>expandGroups);
parcelHelpers.export(exports, "hash", ()=>cyrb32);
parcelHelpers.export(exports, "mode", ()=>mode);
parcelHelpers.export(exports, "noprefix", ()=>noprefix);
parcelHelpers.export(exports, "setup", ()=>setup);
parcelHelpers.export(exports, "silent", ()=>silent);
parcelHelpers.export(exports, "strict", ()=>strict);
parcelHelpers.export(exports, "theme", ()=>theme);
parcelHelpers.export(exports, "tw", ()=>tw);
parcelHelpers.export(exports, "voidSheet", ()=>voidSheet);
parcelHelpers.export(exports, "warn", ()=>warn);
// src/twind/prefix.ts
var _styleVendorizer = require("style-vendorizer");
// src/internal/util.ts
var includes = (value, search)=>!!~value.indexOf(search);
var join = (parts, separator = "-")=>parts.join(separator);
var joinTruthy = (parts, separator)=>join(parts.filter(Boolean), separator);
var tail = (array, startIndex = 1)=>array.slice(startIndex);
var identity = (value)=>value;
var noop = ()=>{};
var capitalize = (value)=>value[0].toUpperCase() + tail(value);
var hyphenate = (value)=>value.replace(/[A-Z]/g, "-$&").toLowerCase();
var evalThunk = (value, context)=>{
    while(typeof value == "function")value = value(context);
    return value;
};
var ensureMaxSize = (map, max)=>{
    if (map.size > max) map.delete(map.keys().next().value);
};
var isCSSProperty = (key, value)=>!includes("@:&", key[0]) && (includes("rg", (typeof value)[5]) || Array.isArray(value));
var merge = (target, source, context)=>source ? Object.keys(source).reduce((target2, key)=>{
        const value = evalThunk(source[key], context);
        if (isCSSProperty(key, value)) target2[hyphenate(key)] = value;
        else target2[key] = key[0] == "@" && includes("figa", key[1]) ? (target2[key] || []).concat(value) : merge(target2[key] || {}, value, context);
        return target2;
    }, target) : target;
var escape = typeof CSS !== "undefined" && CSS.escape || ((className)=>className.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
var buildMediaQuery = (screen)=>{
    if (!Array.isArray(screen)) screen = [
        screen
    ];
    return "@media " + join(screen.map((screen2)=>{
        if (typeof screen2 == "string") screen2 = {
            min: screen2
        };
        return screen2.raw || join(Object.keys(screen2).map((feature)=>`(${feature}-width:${screen2[feature]})`), " and ");
    }), ",");
};
var cyrb32 = (value)=>{
    for(var h = 9, index = value.length; index--;)h = Math.imul(h ^ value.charCodeAt(index), 1597334677);
    return "tw-" + ((h ^ h >>> 9) >>> 0).toString(36);
};
var sortedInsertionIndex = (array, element)=>{
    for(var low = 0, high = array.length; low < high;){
        const pivot = high + low >> 1;
        if (array[pivot] <= element) low = pivot + 1;
        else high = pivot;
    }
    return high;
};
// src/twind/parse.ts
var groupings;
var rules;
var startGrouping = (value = "")=>{
    groupings.push(value);
    return "";
};
var endGrouping = (isWhitespace)=>{
    groupings.length = Math.max(groupings.lastIndexOf("") + ~~isWhitespace, 0);
};
var onlyPrefixes = (s)=>s && !includes("!:", s[0]);
var onlyVariants = (s)=>s[0] == ":";
var addRule = (directive2, negate)=>{
    rules.push({
        v: groupings.filter(onlyVariants),
        d: directive2,
        n: negate,
        i: includes(groupings, "!"),
        $: ""
    });
};
var saveRule = (buffer)=>{
    const negate = buffer[0] == "-";
    if (negate) buffer = tail(buffer);
    const prefix = join(groupings.filter(onlyPrefixes));
    addRule(buffer == "&" ? prefix : (prefix && prefix + "-") + buffer, negate);
    return "";
};
var parseString = (token, isVariant)=>{
    let buffer = "";
    for(let char, dynamic = false, position2 = 0; char = token[position2++];){
        if (dynamic || char == "[") {
            buffer += char;
            dynamic = char != "]";
            continue;
        }
        switch(char){
            case ":":
                buffer = buffer && startGrouping(":" + (token[position2] == char ? token[position2++] : "") + buffer);
                break;
            case "(":
                buffer = buffer && startGrouping(buffer);
                startGrouping();
                break;
            case "!":
                startGrouping(char);
                break;
            case ")":
            case " ":
            case "	":
            case "\n":
            case "\r":
                buffer = buffer && saveRule(buffer);
                endGrouping(char !== ")");
                break;
            default:
                buffer += char;
        }
    }
    if (buffer) {
        if (isVariant) startGrouping(":" + buffer);
        else if (buffer.slice(-1) == "-") startGrouping(buffer.slice(0, -1));
        else saveRule(buffer);
    }
};
var parseGroupedToken = (token)=>{
    startGrouping();
    parseToken(token);
    endGrouping();
};
var parseGroup = (key, token)=>{
    if (token) {
        startGrouping();
        const isVariant = includes("tbu", (typeof token)[1]);
        parseString(key, isVariant);
        if (isVariant) parseGroupedToken(token);
        endGrouping();
    }
};
var parseToken = (token)=>{
    switch(typeof token){
        case "string":
            parseString(token);
            break;
        case "function":
            addRule(token);
            break;
        case "object":
            if (Array.isArray(token)) token.forEach(parseGroupedToken);
            else if (token) Object.keys(token).forEach((key)=>{
                parseGroup(key, token[key]);
            });
    }
};
var staticsCaches = new WeakMap();
var buildStatics = (strings)=>{
    let statics = staticsCaches.get(strings);
    if (!statics) {
        let slowModeIndex = NaN;
        let buffer = "";
        statics = strings.map((token, index)=>{
            if (slowModeIndex !== slowModeIndex && (token.slice(-1) == "[" || includes(":-(", (strings[index + 1] || "")[0]))) slowModeIndex = index;
            if (index >= slowModeIndex) return (interpolation)=>{
                if (index == slowModeIndex) buffer = "";
                buffer += token;
                if (includes("rg", (typeof interpolation)[5])) buffer += interpolation;
                else if (interpolation) {
                    parseString(buffer);
                    buffer = "";
                    parseToken(interpolation);
                }
                if (index == strings.length - 1) parseString(buffer);
            };
            const staticRules = rules = [];
            parseString(token);
            const activeGroupings = [
                ...groupings
            ];
            rules = [];
            return (interpolation)=>{
                rules.push(...staticRules);
                groupings = [
                    ...activeGroupings
                ];
                if (interpolation) parseToken(interpolation);
            };
        });
        staticsCaches.set(strings, statics);
    }
    return statics;
};
var parse = (tokens)=>{
    groupings = [];
    rules = [];
    if (Array.isArray(tokens[0]) && Array.isArray(tokens[0].raw)) buildStatics(tokens[0]).forEach((apply2, index)=>apply2(tokens[index + 1]));
    else parseToken(tokens);
    return rules;
};
// src/twind/directive.ts
var isFunctionFree;
var detectFunction = (key, value)=>{
    if (typeof value == "function") isFunctionFree = false;
    return value;
};
var stringify = (data)=>{
    isFunctionFree = true;
    const key = JSON.stringify(data, detectFunction);
    return isFunctionFree && key;
};
var cacheByFactory = new WeakMap();
var directive = (factory, data)=>{
    const key = stringify(data);
    let directive2;
    if (key) {
        var cache = cacheByFactory.get(factory);
        if (!cache) cacheByFactory.set(factory, cache = new Map());
        directive2 = cache.get(key);
    }
    if (!directive2) {
        directive2 = Object.defineProperty((params, context)=>{
            context = Array.isArray(params) ? context : params;
            return evalThunk(factory(data, context), context);
        }, "toJSON", {
            value: ()=>key || data
        });
        if (cache) {
            cache.set(key, directive2);
            ensureMaxSize(cache, 1e4);
        }
    }
    return directive2;
};
// src/twind/apply.ts
var applyFactory = (tokens, { css  })=>css(parse(tokens));
var apply = (...tokens)=>directive(applyFactory, tokens);
// src/twind/helpers.ts
var positions = (resolve)=>(value, position2, prefix, suffix)=>{
        if (value) {
            const properties = position2 && resolve(position2);
            if (properties && properties.length > 0) return properties.reduce((declarations, property2)=>{
                declarations[joinTruthy([
                    prefix,
                    property2,
                    suffix
                ])] = value;
                return declarations;
            }, {});
        }
    };
var corners = /* @__PURE__ */ positions((key)=>({
        t: [
            "top-left",
            "top-right"
        ],
        r: [
            "top-right",
            "bottom-right"
        ],
        b: [
            "bottom-left",
            "bottom-right"
        ],
        l: [
            "bottom-left",
            "top-left"
        ],
        tl: [
            "top-left"
        ],
        tr: [
            "top-right"
        ],
        bl: [
            "bottom-left"
        ],
        br: [
            "bottom-right"
        ]
    })[key]);
var expandEdges = (key)=>{
    const parts = (({
        x: "lr",
        y: "tb"
    })[key] || key || "").split("").sort();
    for(let index = parts.length; index--;){
        if (!(parts[index] = ({
            t: "top",
            r: "right",
            b: "bottom",
            l: "left"
        })[parts[index]])) return;
    }
    if (parts.length) return parts;
};
var edges = /* @__PURE__ */ positions(expandEdges);
var stringifyVariant = (selector, variant)=>selector + (variant[1] == ":" ? tail(variant, 2) + ":" : tail(variant)) + ":";
var stringifyRule = (rule, directive2 = rule.d)=>typeof directive2 == "function" ? "" : rule.v.reduce(stringifyVariant, "") + (rule.i ? "!" : "") + (rule.n ? "-" : "") + directive2;
// src/twind/plugins.ts
var _;
var __;
var $;
var toColumnsOrRows = (x)=>x == "cols" ? "columns" : "rows";
var property = (property2)=>(params, context, id)=>({
            [property2]: id + ((_ = join(params)) && "-" + _)
        });
var propertyValue = (property2, separator)=>(params, context, id)=>(_ = join(params, separator)) && {
            [property2 || id]: _
        };
var themeProperty = (section)=>(params, { theme: theme2  }, id)=>(_ = theme2(section || id, params)) && {
            [section || id]: _
        };
var themePropertyFallback = (section, separator)=>(params, { theme: theme2  }, id)=>(_ = theme2(section || id, params, join(params, separator))) && {
            [section || id]: _
        };
var alias = (handler, name)=>(params, context)=>handler(params, context, name);
var display = property("display");
var position = property("position");
var textTransform = property("textTransform");
var textDecoration = property("textDecoration");
var fontStyle = property("fontStyle");
var fontVariantNumeric = (key)=>(params, context, id)=>({
            ["--tw-" + key]: id,
            fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"
        });
var inset = (params, { theme: theme2  }, id)=>(_ = theme2("inset", params)) && {
        [id]: _
    };
var opacityProperty = (params, theme2, id, section = id)=>(_ = theme2(section + "Opacity", tail(params))) && {
        [`--tw-${id}-opacity`]: _
    };
var parseColorComponent = (chars, factor)=>Math.round(parseInt(chars, 16) * factor);
var asRGBA = (color, opacityProperty2, opacityDefault)=>{
    if (color && color[0] == "#" && (_ = (color.length - 1) / 3) && ($ = [
        17,
        1,
        0.062272
    ][_ - 1])) return `rgba(${parseColorComponent(color.substr(1, _), $)},${parseColorComponent(color.substr(1 + _, _), $)},${parseColorComponent(color.substr(1 + 2 * _, _), $)},${opacityProperty2 ? `var(--tw-${opacityProperty2}${opacityDefault ? "," + opacityDefault : ""})` : opacityDefault || 1})`;
    return color;
};
var withOpacityFallback = (property2, kind, color)=>color && typeof color == "string" ? (_ = asRGBA(color, kind + "-opacity")) && _ !== color ? {
        [`--tw-${kind}-opacity`]: "1",
        [property2]: [
            color,
            _
        ]
    } : {
        [property2]: color
    } : void 0;
var transparentTo = (color)=>($ = asRGBA(color, "", "0")) == _ ? "transparent" : $;
var reversableEdge = (params, { theme: theme2  }, id, section, prefix, suffix)=>(_ = ({
        x: [
            "right",
            "left"
        ],
        y: [
            "bottom",
            "top"
        ]
    })[params[0]]) && ($ = `--tw-${id}-${params[0]}-reverse`) ? params[1] == "reverse" ? {
        [$]: "1"
    } : {
        [$]: "0",
        [joinTruthy([
            prefix,
            _[0],
            suffix
        ])]: (__ = theme2(section, tail(params))) && `calc(${__} * var(${$}))`,
        [joinTruthy([
            prefix,
            _[1],
            suffix
        ])]: __ && [
            __,
            `calc(${__} * calc(1 - var(${$})))`
        ]
    } : void 0;
var placeHelper = (property2, params)=>params[0] && {
        [property2]: (includes("wun", (params[0] || "")[3]) ? "space-" : "") + params[0]
    };
var contentPluginFor = (property2)=>(params)=>includes([
            "start",
            "end"
        ], params[0]) ? {
            [property2]: "flex-" + params[0]
        } : placeHelper(property2, params);
var gridPlugin = (kind)=>(params, { theme: theme2  })=>{
        if (_ = theme2("grid" + capitalize(kind), params, "")) return {
            ["grid-" + kind]: _
        };
        switch(params[0]){
            case "span":
                return params[1] && {
                    ["grid-" + kind]: `span ${params[1]} / span ${params[1]}`
                };
            case "start":
            case "end":
                return (_ = theme2("grid" + capitalize(kind) + capitalize(params[0]), tail(params), join(tail(params)))) && {
                    [`grid-${kind}-${params[0]}`]: _
                };
        }
    };
var border = (params, { theme: theme2  }, id)=>{
    switch(params[0]){
        case "solid":
        case "dashed":
        case "dotted":
        case "double":
        case "none":
            return propertyValue("borderStyle")(params);
        case "collapse":
        case "separate":
            return propertyValue("borderCollapse")(params);
        case "opacity":
            return opacityProperty(params, theme2, id);
    }
    return (_ = theme2(id + "Width", params, "")) ? {
        borderWidth: _
    } : withOpacityFallback("borderColor", id, theme2(id + "Color", params));
};
var transform = (gpu)=>(gpu ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))";
var transformXYFunction = (params, context, id)=>params[0] && (_ = context.theme(id, params[1] || params[0])) && {
        [`--tw-${id}-x`]: params[0] !== "y" && _,
        [`--tw-${id}-y`]: params[0] !== "x" && _,
        transform: [
            `${id}${params[1] ? params[0].toUpperCase() : ""}(${_})`,
            transform()
        ]
    };
var edgesPluginFor = (key)=>(params, context, id)=>id[1] ? edges(context.theme(key, params), id[1], key) : themeProperty(key)(params, context, id);
var padding = edgesPluginFor("padding");
var margin = edgesPluginFor("margin");
var minMax = (params, { theme: theme2  }, id)=>(_ = ({
        w: "width",
        h: "height"
    })[params[0]]) && {
        [_ = `${id}${capitalize(_)}`]: theme2(_, tail(params))
    };
var filter = (params, { theme: theme2  }, id)=>{
    const parts = id.split("-");
    const prefix = parts[0] == "backdrop" ? parts[0] + "-" : "";
    if (!prefix) params.unshift(...parts);
    if (params[0] == "filter") {
        const filters = [
            "blur",
            "brightness",
            "contrast",
            "grayscale",
            "hue-rotate",
            "invert",
            prefix && "opacity",
            "saturate",
            "sepia",
            !prefix && "drop-shadow"
        ].filter(Boolean);
        return params[1] == "none" ? {
            [prefix + "filter"]: "none"
        } : filters.reduce((css, key)=>{
            css["--tw-" + prefix + key] = "var(--tw-empty,/*!*/ /*!*/)";
            return css;
        }, {
            [prefix + "filter"]: filters.map((key)=>`var(--tw-${prefix}${key})`).join(" ")
        });
    }
    $ = params.shift();
    if (includes([
        "hue",
        "drop"
    ], $)) $ += capitalize(params.shift());
    return (_ = theme2(prefix ? "backdrop" + capitalize($) : $, params)) && {
        ["--tw-" + prefix + $]: (Array.isArray(_) ? _ : [
            _
        ]).map((_4)=>`${hyphenate($)}(${_4})`).join(" ")
    };
};
var corePlugins = {
    group: (params, { tag  }, id)=>tag(join([
            id,
            ...params
        ])),
    hidden: alias(display, "none"),
    inline: display,
    block: display,
    contents: display,
    flow: display,
    table: (params, context, id)=>includes([
            "auto",
            "fixed"
        ], params[0]) ? {
            tableLayout: params[0]
        } : display(params, context, id),
    flex (params, context, id) {
        switch(params[0]){
            case "row":
            case "col":
                return {
                    flexDirection: join(params[0] == "col" ? [
                        "column",
                        ...tail(params)
                    ] : params)
                };
            case "nowrap":
            case "wrap":
                return {
                    flexWrap: join(params)
                };
            case "grow":
            case "shrink":
                _ = context.theme("flex" + capitalize(params[0]), tail(params), params[1] || 1);
                return _ != null && {
                    ["flex-" + params[0]]: "" + _
                };
        }
        return (_ = context.theme("flex", params, "")) ? {
            flex: _
        } : display(params, context, id);
    },
    grid (params, context, id) {
        switch(params[0]){
            case "cols":
            case "rows":
                return (_ = context.theme("gridTemplate" + capitalize(toColumnsOrRows(params[0])), tail(params), params.length == 2 && Number(params[1]) ? `repeat(${params[1]},minmax(0,1fr))` : join(tail(params)))) && {
                    ["gridTemplate-" + toColumnsOrRows(params[0])]: _
                };
            case "flow":
                return params.length > 1 && {
                    gridAutoFlow: join(params[1] == "col" ? [
                        "column",
                        ...tail(params, 2)
                    ] : tail(params), " ")
                };
        }
        return display(params, context, id);
    },
    auto: (params, { theme: theme2  })=>includes([
            "cols",
            "rows"
        ], params[0]) && (_ = theme2("gridAuto" + capitalize(toColumnsOrRows(params[0])), tail(params), join(tail(params)))) && {
            ["gridAuto-" + toColumnsOrRows(params[0])]: _
        },
    static: position,
    fixed: position,
    absolute: position,
    relative: position,
    sticky: position,
    visible: {
        visibility: "visible"
    },
    invisible: {
        visibility: "hidden"
    },
    antialiased: {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale"
    },
    "subpixel-antialiased": {
        WebkitFontSmoothing: "auto",
        MozOsxFontSmoothing: "auto"
    },
    truncate: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
    },
    "sr-only": {
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        clip: "rect(0,0,0,0)",
        borderWidth: "0"
    },
    "not-sr-only": {
        position: "static",
        width: "auto",
        height: "auto",
        padding: "0",
        margin: "0",
        overflow: "visible",
        whiteSpace: "normal",
        clip: "auto"
    },
    resize: (params)=>({
            resize: ({
                x: "horizontal",
                y: "vertical"
            })[params[0]] || params[0] || "both"
        }),
    box: (params)=>params[0] && {
            boxSizing: params[0] + "-box"
        },
    appearance: propertyValue(),
    cursor: themePropertyFallback(),
    float: propertyValue(),
    clear: propertyValue(),
    decoration: propertyValue("boxDecorationBreak"),
    isolate: {
        isolation: "isolate"
    },
    isolation: propertyValue(),
    "mix-blend": propertyValue("mixBlendMode"),
    top: inset,
    right: inset,
    bottom: inset,
    left: inset,
    inset: (params, { theme: theme2  })=>(_ = expandEdges(params[0])) ? edges(theme2("inset", tail(params)), params[0]) : (_ = theme2("inset", params)) && {
            top: _,
            right: _,
            bottom: _,
            left: _
        },
    underline: textDecoration,
    "line-through": textDecoration,
    "no-underline": alias(textDecoration, "none"),
    "text-underline": alias(textDecoration, "underline"),
    "text-no-underline": alias(textDecoration, "none"),
    "text-line-through": alias(textDecoration, "line-through"),
    uppercase: textTransform,
    lowercase: textTransform,
    capitalize: textTransform,
    "normal-case": alias(textTransform, "none"),
    "text-normal-case": alias(textTransform, "none"),
    italic: fontStyle,
    "not-italic": alias(fontStyle, "normal"),
    "font-italic": alias(fontStyle, "italic"),
    "font-not-italic": alias(fontStyle, "normal"),
    font: (params, context, id)=>(_ = context.theme("fontFamily", params, "")) ? {
            fontFamily: _
        } : themeProperty("fontWeight")(params, context, id),
    items: (params)=>params[0] && {
            alignItems: includes([
                "start",
                "end"
            ], params[0]) ? "flex-" + params[0] : join(params)
        },
    "justify-self": propertyValue(),
    "justify-items": propertyValue(),
    justify: contentPluginFor("justifyContent"),
    content: contentPluginFor("alignContent"),
    self: contentPluginFor("alignSelf"),
    place: (params)=>params[0] && placeHelper("place-" + params[0], tail(params)),
    overscroll: (params)=>params[0] && {
            ["overscrollBehavior" + (params[1] ? "-" + params[0] : "")]: params[1] || params[0]
        },
    col: gridPlugin("column"),
    row: gridPlugin("row"),
    duration: themeProperty("transitionDuration"),
    delay: themeProperty("transitionDelay"),
    tracking: themeProperty("letterSpacing"),
    leading: themeProperty("lineHeight"),
    z: themeProperty("zIndex"),
    opacity: themeProperty(),
    ease: themeProperty("transitionTimingFunction"),
    p: padding,
    py: padding,
    px: padding,
    pt: padding,
    pr: padding,
    pb: padding,
    pl: padding,
    m: margin,
    my: margin,
    mx: margin,
    mt: margin,
    mr: margin,
    mb: margin,
    ml: margin,
    w: themeProperty("width"),
    h: themeProperty("height"),
    min: minMax,
    max: minMax,
    fill: themeProperty(),
    order: themeProperty(),
    origin: themePropertyFallback("transformOrigin", " "),
    select: propertyValue("userSelect"),
    "pointer-events": propertyValue(),
    align: propertyValue("verticalAlign"),
    whitespace: propertyValue("whiteSpace"),
    "normal-nums": {
        fontVariantNumeric: "normal"
    },
    ordinal: fontVariantNumeric("ordinal"),
    "slashed-zero": fontVariantNumeric("slashed-zero"),
    "lining-nums": fontVariantNumeric("numeric-figure"),
    "oldstyle-nums": fontVariantNumeric("numeric-figure"),
    "proportional-nums": fontVariantNumeric("numeric-spacing"),
    "tabular-nums": fontVariantNumeric("numeric-spacing"),
    "diagonal-fractions": fontVariantNumeric("numeric-fraction"),
    "stacked-fractions": fontVariantNumeric("numeric-fraction"),
    overflow: (params, context, id)=>includes([
            "ellipsis",
            "clip"
        ], params[0]) ? propertyValue("textOverflow")(params) : params[1] ? {
            ["overflow-" + params[0]]: params[1]
        } : propertyValue()(params, context, id),
    transform: (params)=>params[0] == "none" ? {
            transform: "none"
        } : {
            "--tw-translate-x": "0",
            "--tw-translate-y": "0",
            "--tw-rotate": "0",
            "--tw-skew-x": "0",
            "--tw-skew-y": "0",
            "--tw-scale-x": "1",
            "--tw-scale-y": "1",
            transform: transform(params[0] == "gpu")
        },
    rotate: (params, { theme: theme2  })=>(_ = theme2("rotate", params)) && {
            "--tw-rotate": _,
            transform: [
                `rotate(${_})`,
                transform()
            ]
        },
    scale: transformXYFunction,
    translate: transformXYFunction,
    skew: transformXYFunction,
    gap: (params, context, id)=>(_ = ({
            x: "column",
            y: "row"
        })[params[0]]) ? {
            [_ + "Gap"]: context.theme("gap", tail(params))
        } : themeProperty("gap")(params, context, id),
    stroke: (params, context, id)=>(_ = context.theme("stroke", params, "")) ? {
            stroke: _
        } : themeProperty("strokeWidth")(params, context, id),
    outline: (params, { theme: theme2  })=>(_ = theme2("outline", params)) && {
            outline: _[0],
            outlineOffset: _[1]
        },
    "break-normal": {
        wordBreak: "normal",
        overflowWrap: "normal"
    },
    "break-words": {
        overflowWrap: "break-word"
    },
    "break-all": {
        wordBreak: "break-all"
    },
    text (params, { theme: theme2  }, id) {
        switch(params[0]){
            case "left":
            case "center":
            case "right":
            case "justify":
                return {
                    textAlign: params[0]
                };
            case "uppercase":
            case "lowercase":
            case "capitalize":
                return textTransform([], _, params[0]);
            case "opacity":
                return opacityProperty(params, theme2, id);
        }
        const fontSize = theme2("fontSize", params, "");
        if (fontSize) return typeof fontSize == "string" ? {
            fontSize
        } : {
            fontSize: fontSize[0],
            ...typeof fontSize[1] == "string" ? {
                lineHeight: fontSize[1]
            } : fontSize[1]
        };
        return withOpacityFallback("color", "text", theme2("textColor", params));
    },
    bg (params, { theme: theme2  }, id) {
        switch(params[0]){
            case "fixed":
            case "local":
            case "scroll":
                return propertyValue("backgroundAttachment", ",")(params);
            case "bottom":
            case "center":
            case "left":
            case "right":
            case "top":
                return propertyValue("backgroundPosition", " ")(params);
            case "no":
                return params[1] == "repeat" && propertyValue("backgroundRepeat")(params);
            case "repeat":
                return includes("xy", params[1]) ? propertyValue("backgroundRepeat")(params) : {
                    backgroundRepeat: params[1] || params[0]
                };
            case "opacity":
                return opacityProperty(params, theme2, id, "background");
            case "clip":
            case "origin":
                return params[1] && {
                    ["background-" + params[0]]: params[1] + (params[1] == "text" ? "" : "-box")
                };
            case "blend":
                return propertyValue("background-blend-mode")(tail(params));
            case "gradient":
                if (params[1] == "to" && (_ = expandEdges(params[2]))) return {
                    backgroundImage: `linear-gradient(to ${join(_, " ")},var(--tw-gradient-stops))`
                };
        }
        return (_ = theme2("backgroundPosition", params, "")) ? {
            backgroundPosition: _
        } : (_ = theme2("backgroundSize", params, "")) ? {
            backgroundSize: _
        } : (_ = theme2("backgroundImage", params, "")) ? {
            backgroundImage: _
        } : withOpacityFallback("backgroundColor", "bg", theme2("backgroundColor", params));
    },
    from: (params, { theme: theme2  })=>(_ = theme2("gradientColorStops", params)) && {
            "--tw-gradient-from": _,
            "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${transparentTo(_)})`
        },
    via: (params, { theme: theme2  })=>(_ = theme2("gradientColorStops", params)) && {
            "--tw-gradient-stops": `var(--tw-gradient-from),${_},var(--tw-gradient-to,${transparentTo(_)})`
        },
    to: (params, { theme: theme2  })=>(_ = theme2("gradientColorStops", params)) && {
            "--tw-gradient-to": _
        },
    border: (params, context, id)=>expandEdges(params[0]) ? edges(context.theme("borderWidth", tail(params)), params[0], "border", "width") : border(params, context, id),
    divide: (params, context, id)=>(_ = reversableEdge(params, context, id, "divideWidth", "border", "width") || border(params, context, id)) && {
            "&>:not([hidden])~:not([hidden])": _
        },
    space: (params, context, id)=>(_ = reversableEdge(params, context, id, "space", "margin")) && {
            "&>:not([hidden])~:not([hidden])": _
        },
    placeholder: (params, { theme: theme2  }, id)=>(_ = params[0] == "opacity" ? opacityProperty(params, theme2, id) : withOpacityFallback("color", "placeholder", theme2("placeholderColor", params))) && {
            "&::placeholder": _
        },
    shadow: (params, { theme: theme2  })=>(_ = theme2("boxShadow", params)) && {
            ":global": {
                "*": {
                    "--tw-shadow": "0 0 transparent"
                }
            },
            "--tw-shadow": _ == "none" ? "0 0 transparent" : _,
            boxShadow: [
                _,
                `var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)`
            ]
        },
    animate: (params, { theme: theme2 , tag  })=>{
        if ($ = theme2("animation", params)) {
            const parts = $.split(" ");
            if ((_ = theme2("keyframes", parts[0], __ = {})) !== __) return ($ = tag(parts[0])) && {
                animation: $ + " " + join(tail(parts), " "),
                ["@keyframes " + $]: _
            };
            return {
                animation: $
            };
        }
    },
    ring (params, { theme: theme2  }, id) {
        switch(params[0]){
            case "inset":
                return {
                    "--tw-ring-inset": "inset"
                };
            case "opacity":
                return opacityProperty(params, theme2, id);
            case "offset":
                return (_ = theme2("ringOffsetWidth", tail(params), "")) ? {
                    "--tw-ring-offset-width": _
                } : {
                    "--tw-ring-offset-color": theme2("ringOffsetColor", tail(params))
                };
        }
        return (_ = theme2("ringWidth", params, "")) ? {
            "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
            "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${_} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
            boxShadow: `var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)`,
            ":global": {
                "*": {
                    "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
                    "--tw-ring-offset-width": theme2("ringOffsetWidth", "", "0px"),
                    "--tw-ring-offset-color": theme2("ringOffsetColor", "", "#fff"),
                    "--tw-ring-color": asRGBA(theme2("ringColor", "", "#93c5fd"), "ring-opacity", theme2("ringOpacity", "", "0.5")),
                    "--tw-ring-offset-shadow": "0 0 transparent",
                    "--tw-ring-shadow": "0 0 transparent"
                }
            }
        } : {
            "--tw-ring-opacity": "1",
            "--tw-ring-color": asRGBA(theme2("ringColor", params), "ring-opacity")
        };
    },
    object: (params, context, id)=>includes([
            "contain",
            "cover",
            "fill",
            "none",
            "scale-down"
        ], join(params)) ? {
            objectFit: join(params)
        } : themePropertyFallback("objectPosition", " ")(params, context, id),
    list: (params, context, id)=>join(params) == "item" ? display(params, context, id) : includes([
            "inside",
            "outside"
        ], join(params)) ? {
            listStylePosition: params[0]
        } : themePropertyFallback("listStyleType")(params, context, id),
    rounded: (params, context, id)=>corners(context.theme("borderRadius", tail(params), ""), params[0], "border", "radius") || themeProperty("borderRadius")(params, context, id),
    "transition-none": {
        transitionProperty: "none"
    },
    transition: (params, { theme: theme2  })=>({
            transitionProperty: theme2("transitionProperty", params),
            transitionTimingFunction: theme2("transitionTimingFunction", ""),
            transitionDuration: theme2("transitionDuration", "")
        }),
    container: (params, { theme: theme2  })=>{
        const { screens =theme2("screens") , center , padding: padding2  } = theme2("container");
        const paddingFor = (screen)=>(_ = padding2 && (typeof padding2 == "string" ? padding2 : padding2[screen] || padding2.DEFAULT)) ? {
                paddingRight: _,
                paddingLeft: _
            } : {};
        return Object.keys(screens).reduce((rules2, screen)=>{
            if (($ = screens[screen]) && typeof $ == "string") rules2[buildMediaQuery($)] = {
                "&": {
                    "max-width": $,
                    ...paddingFor(screen)
                }
            };
            return rules2;
        }, {
            width: "100%",
            ...center ? {
                marginRight: "auto",
                marginLeft: "auto"
            } : {},
            ...paddingFor("xs")
        });
    },
    filter,
    blur: filter,
    brightness: filter,
    contrast: filter,
    grayscale: filter,
    "hue-rotate": filter,
    invert: filter,
    saturate: filter,
    sepia: filter,
    "drop-shadow": filter,
    backdrop: filter
};
// src/twind/preflight.ts
var createPreflight = (theme2)=>({
        ":root": {
            tabSize: 4
        },
        "body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul": {
            margin: "0"
        },
        button: {
            backgroundColor: "transparent",
            backgroundImage: "none"
        },
        'button,[type="button"],[type="reset"],[type="submit"]': {
            WebkitAppearance: "button"
        },
        "button:focus": {
            outline: [
                "1px dotted",
                "5px auto -webkit-focus-ring-color"
            ]
        },
        "fieldset,ol,ul,legend": {
            padding: "0"
        },
        "ol,ul": {
            listStyle: "none"
        },
        html: {
            lineHeight: "1.5",
            WebkitTextSizeAdjust: "100%",
            fontFamily: theme2("fontFamily.sans", "ui-sans-serif,system-ui,sans-serif")
        },
        body: {
            fontFamily: "inherit",
            lineHeight: "inherit"
        },
        "*,::before,::after": {
            boxSizing: "border-box",
            border: `0 solid ${theme2("borderColor.DEFAULT", "currentColor")}`
        },
        hr: {
            height: "0",
            color: "inherit",
            borderTopWidth: "1px"
        },
        img: {
            borderStyle: "solid"
        },
        textarea: {
            resize: "vertical"
        },
        "input::placeholder,textarea::placeholder": {
            opacity: "1",
            color: theme2("placeholderColor.DEFAULT", theme2("colors.gray.400", "#a1a1aa"))
        },
        'button,[role="button"]': {
            cursor: "pointer"
        },
        table: {
            textIndent: "0",
            borderColor: "inherit",
            borderCollapse: "collapse"
        },
        "h1,h2,h3,h4,h5,h6": {
            fontSize: "inherit",
            fontWeight: "inherit"
        },
        a: {
            color: "inherit",
            textDecoration: "inherit"
        },
        "button,input,optgroup,select,textarea": {
            fontFamily: "inherit",
            fontSize: "100%",
            margin: "0",
            padding: "0",
            lineHeight: "inherit",
            color: "inherit"
        },
        "button,select": {
            textTransform: "none"
        },
        "::-moz-focus-inner": {
            borderStyle: "none",
            padding: "0"
        },
        ":-moz-focusring": {
            outline: "1px dotted ButtonText"
        },
        ":-moz-ui-invalid": {
            boxShadow: "none"
        },
        progress: {
            verticalAlign: "baseline"
        },
        "::-webkit-inner-spin-button,::-webkit-outer-spin-button": {
            height: "auto"
        },
        '[type="search"]': {
            WebkitAppearance: "textfield",
            outlineOffset: "-2px"
        },
        "::-webkit-search-decoration": {
            WebkitAppearance: "none"
        },
        "::-webkit-file-upload-button": {
            WebkitAppearance: "button",
            font: "inherit"
        },
        summary: {
            display: "list-item"
        },
        "abbr[title]": {
            textDecoration: "underline dotted"
        },
        "b,strong": {
            fontWeight: "bolder"
        },
        "pre,code,kbd,samp": {
            fontFamily: theme2("fontFamily", "mono", "ui-monospace,monospace"),
            fontSize: "1em"
        },
        "sub,sup": {
            fontSize: "75%",
            lineHeight: "0",
            position: "relative",
            verticalAlign: "baseline"
        },
        sub: {
            bottom: "-0.25em"
        },
        sup: {
            top: "-0.5em"
        },
        "img,svg,video,canvas,audio,iframe,embed,object": {
            display: "block",
            verticalAlign: "middle"
        },
        "img,video": {
            maxWidth: "100%",
            height: "auto"
        }
    });
// src/twind/variants.ts
var coreVariants = {
    dark: "@media (prefers-color-scheme:dark)",
    sticky: "@supports ((position: -webkit-sticky) or (position:sticky))",
    "motion-reduce": "@media (prefers-reduced-motion:reduce)",
    "motion-safe": "@media (prefers-reduced-motion:no-preference)",
    first: "&:first-child",
    last: "&:last-child",
    even: "&:nth-child(2n)",
    odd: "&:nth-child(odd)",
    children: "&>*",
    siblings: "&~*",
    sibling: "&+*",
    override: "&&"
};
// src/internal/dom.ts
var STYLE_ELEMENT_ID = "__twind";
var getStyleElement = (nonce)=>{
    let element = self[STYLE_ELEMENT_ID];
    if (!element) {
        element = document.head.appendChild(document.createElement("style"));
        element.id = STYLE_ELEMENT_ID;
        nonce && (element.nonce = nonce);
        element.appendChild(document.createTextNode(""));
    }
    return element;
};
// src/twind/sheets.ts
var cssomSheet = ({ nonce , target =getStyleElement(nonce).sheet  } = {})=>{
    const offset = target.cssRules.length;
    return {
        target,
        insert: (rule, index)=>target.insertRule(rule, offset + index)
    };
};
var voidSheet = ()=>({
        target: null,
        insert: noop
    });
// src/twind/modes.ts
var mode = (report)=>({
        unknown (section, key = [], optional, context) {
            if (!optional) this.report({
                id: "UNKNOWN_THEME_VALUE",
                key: section + "." + join(key)
            }, context);
        },
        report ({ id , ...info }) {
            return report(`[${id}] ${JSON.stringify(info)}`);
        }
    });
var warn = /* @__PURE__ */ mode((message)=>console.warn(message));
var strict = /* @__PURE__ */ mode((message)=>{
    throw new Error(message);
});
var silent = /* @__PURE__ */ mode(noop);
var noprefix = (property2, value, important)=>`${property2}:${value}${important ? " !important" : ""}`;
var autoprefix = (property2, value, important)=>{
    let cssText = "";
    const propertyAlias = (0, _styleVendorizer.cssPropertyAlias)(property2);
    if (propertyAlias) cssText += `${noprefix(propertyAlias, value, important)};`;
    let flags = (0, _styleVendorizer.cssPropertyPrefixFlags)(property2);
    if (flags & 1) cssText += `-webkit-${noprefix(property2, value, important)};`;
    if (flags & 2) cssText += `-moz-${noprefix(property2, value, important)};`;
    if (flags & 4) cssText += `-ms-${noprefix(property2, value, important)};`;
    flags = (0, _styleVendorizer.cssValuePrefixFlags)(property2, value);
    if (flags & 1) cssText += `${noprefix(property2, `-webkit-${value}`, important)};`;
    if (flags & 2) cssText += `${noprefix(property2, `-moz-${value}`, important)};`;
    if (flags & 4) cssText += `${noprefix(property2, `-ms-${value}`, important)};`;
    cssText += noprefix(property2, value, important);
    return cssText;
};
// src/twind/theme.ts
var ratios = (start, end)=>{
    const result = {};
    do for(let dividend = 1; dividend < start; dividend++)result[`${dividend}/${start}`] = Number((dividend / start * 100).toFixed(6)) + "%";
    while (++start <= end);
    return result;
};
var exponential = (stop, unit, start = 0)=>{
    const result = {};
    for(; start <= stop; start = start * 2 || 1)result[start] = start + unit;
    return result;
};
var linear = (stop, unit = "", divideBy = 1, start = 0, step = 1, result = {})=>{
    for(; start <= stop; start += step)result[start] = start / divideBy + unit;
    return result;
};
var alias2 = (section)=>(theme2)=>theme2(section);
var themeFactory = (args, { theme: theme2  })=>theme2(...args);
var theme = (...args)=>directive(themeFactory, args);
var defaultTheme = {
    screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
    },
    colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        gray: {
            50: "#f9fafb",
            100: "#f3f4f6",
            200: "#e5e7eb",
            300: "#d1d5db",
            400: "#9ca3af",
            500: "#6b7280",
            600: "#4b5563",
            700: "#374151",
            800: "#1f2937",
            900: "#111827"
        },
        red: {
            50: "#fef2f2",
            100: "#fee2e2",
            200: "#fecaca",
            300: "#fca5a5",
            400: "#f87171",
            500: "#ef4444",
            600: "#dc2626",
            700: "#b91c1c",
            800: "#991b1b",
            900: "#7f1d1d"
        },
        yellow: {
            50: "#fffbeb",
            100: "#fef3c7",
            200: "#fde68a",
            300: "#fcd34d",
            400: "#fbbf24",
            500: "#f59e0b",
            600: "#d97706",
            700: "#b45309",
            800: "#92400e",
            900: "#78350f"
        },
        green: {
            50: "#ecfdf5",
            100: "#d1fae5",
            200: "#a7f3d0",
            300: "#6ee7b7",
            400: "#34d399",
            500: "#10b981",
            600: "#059669",
            700: "#047857",
            800: "#065f46",
            900: "#064e3b"
        },
        blue: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#2563eb",
            700: "#1d4ed8",
            800: "#1e40af",
            900: "#1e3a8a"
        },
        indigo: {
            50: "#eef2ff",
            100: "#e0e7ff",
            200: "#c7d2fe",
            300: "#a5b4fc",
            400: "#818cf8",
            500: "#6366f1",
            600: "#4f46e5",
            700: "#4338ca",
            800: "#3730a3",
            900: "#312e81"
        },
        purple: {
            50: "#f5f3ff",
            100: "#ede9fe",
            200: "#ddd6fe",
            300: "#c4b5fd",
            400: "#a78bfa",
            500: "#8b5cf6",
            600: "#7c3aed",
            700: "#6d28d9",
            800: "#5b21b6",
            900: "#4c1d95"
        },
        pink: {
            50: "#fdf2f8",
            100: "#fce7f3",
            200: "#fbcfe8",
            300: "#f9a8d4",
            400: "#f472b6",
            500: "#ec4899",
            600: "#db2777",
            700: "#be185d",
            800: "#9d174d",
            900: "#831843"
        }
    },
    spacing: {
        px: "1px",
        0: "0px",
        .../* @__PURE__ */ linear(4, "rem", 4, 0.5, 0.5),
        .../* @__PURE__ */ linear(12, "rem", 4, 5),
        14: "3.5rem",
        .../* @__PURE__ */ linear(64, "rem", 4, 16, 4),
        72: "18rem",
        80: "20rem",
        96: "24rem"
    },
    durations: {
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms"
    },
    animation: {
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite"
    },
    backdropBlur: /* @__PURE__ */ alias2("blur"),
    backdropBrightness: /* @__PURE__ */ alias2("brightness"),
    backdropContrast: /* @__PURE__ */ alias2("contrast"),
    backdropGrayscale: /* @__PURE__ */ alias2("grayscale"),
    backdropHueRotate: /* @__PURE__ */ alias2("hueRotate"),
    backdropInvert: /* @__PURE__ */ alias2("invert"),
    backdropOpacity: /* @__PURE__ */ alias2("opacity"),
    backdropSaturate: /* @__PURE__ */ alias2("saturate"),
    backdropSepia: /* @__PURE__ */ alias2("sepia"),
    backgroundColor: /* @__PURE__ */ alias2("colors"),
    backgroundImage: {
        none: "none"
    },
    backgroundOpacity: /* @__PURE__ */ alias2("opacity"),
    backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain"
    },
    blur: {
        0: "0",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px"
    },
    brightness: {
        .../* @__PURE__ */ linear(200, "", 100, 0, 50),
        .../* @__PURE__ */ linear(110, "", 100, 90, 5),
        75: "0.75",
        125: "1.25"
    },
    borderColor: (theme2)=>({
            ...theme2("colors"),
            DEFAULT: theme2("colors.gray.200", "currentColor")
        }),
    borderOpacity: /* @__PURE__ */ alias2("opacity"),
    borderRadius: {
        none: "0px",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "1/2": "50%",
        full: "9999px"
    },
    borderWidth: {
        DEFAULT: "1px",
        .../* @__PURE__ */ exponential(8, "px")
    },
    boxShadow: {
        sm: "0 1px 2px 0 rgba(0,0,0,0.05)",
        DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)",
        md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
        lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
        xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
        "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)",
        inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
        none: "none"
    },
    contrast: {
        .../* @__PURE__ */ linear(200, "", 100, 0, 50),
        75: "0.75",
        125: "1.25"
    },
    divideColor: /* @__PURE__ */ alias2("borderColor"),
    divideOpacity: /* @__PURE__ */ alias2("borderOpacity"),
    divideWidth: /* @__PURE__ */ alias2("borderWidth"),
    dropShadow: {
        sm: "0 1px 1px rgba(0,0,0,0.05)",
        DEFAULT: [
            "0 1px 2px rgba(0,0,0,0.1)",
            "0 1px 1px rgba(0,0,0,0.06)"
        ],
        md: [
            "0 4px 3px rgba(0,0,0,0.07)",
            "0 2px 2px rgba(0,0,0,0.06)"
        ],
        lg: [
            "0 10px 8px rgba(0,0,0,0.04)",
            "0 4px 3px rgba(0,0,0,0.1)"
        ],
        xl: [
            "0 20px 13px rgba(0,0,0,0.03)",
            "0 8px 5px rgba(0,0,0,0.08)"
        ],
        "2xl": "0 25px 25px rgba(0,0,0,0.15)",
        none: "0 0 #0000"
    },
    fill: {
        current: "currentColor"
    },
    grayscale: {
        0: "0",
        DEFAULT: "100%"
    },
    hueRotate: {
        0: "0deg",
        15: "15deg",
        30: "30deg",
        60: "60deg",
        90: "90deg",
        180: "180deg"
    },
    invert: {
        0: "0",
        DEFAULT: "100%"
    },
    flex: {
        1: "1 1 0%",
        auto: "1 1 auto",
        initial: "0 1 auto",
        none: "none"
    },
    fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),
        serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),
        mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")
    },
    fontSize: {
        xs: [
            "0.75rem",
            "1rem"
        ],
        sm: [
            "0.875rem",
            "1.25rem"
        ],
        base: [
            "1rem",
            "1.5rem"
        ],
        lg: [
            "1.125rem",
            "1.75rem"
        ],
        xl: [
            "1.25rem",
            "1.75rem"
        ],
        "2xl": [
            "1.5rem",
            "2rem"
        ],
        "3xl": [
            "1.875rem",
            "2.25rem"
        ],
        "4xl": [
            "2.25rem",
            "2.5rem"
        ],
        "5xl": [
            "3rem",
            "1"
        ],
        "6xl": [
            "3.75rem",
            "1"
        ],
        "7xl": [
            "4.5rem",
            "1"
        ],
        "8xl": [
            "6rem",
            "1"
        ],
        "9xl": [
            "8rem",
            "1"
        ]
    },
    fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900"
    },
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridAutoColumns: {
        min: "min-content",
        max: "max-content",
        fr: "minmax(0,1fr)"
    },
    gridAutoRows: {
        min: "min-content",
        max: "max-content",
        fr: "minmax(0,1fr)"
    },
    gridColumn: {
        auto: "auto",
        "span-full": "1 / -1"
    },
    gridRow: {
        auto: "auto",
        "span-full": "1 / -1"
    },
    gap: /* @__PURE__ */ alias2("spacing"),
    gradientColorStops: /* @__PURE__ */ alias2("colors"),
    height: (theme2)=>({
            auto: "auto",
            ...theme2("spacing"),
            ...ratios(2, 6),
            full: "100%",
            screen: "100vh"
        }),
    inset: (theme2)=>({
            auto: "auto",
            ...theme2("spacing"),
            ...ratios(2, 4),
            full: "100%"
        }),
    keyframes: {
        spin: {
            from: {
                transform: "rotate(0deg)"
            },
            to: {
                transform: "rotate(360deg)"
            }
        },
        ping: {
            "0%": {
                transform: "scale(1)",
                opacity: "1"
            },
            "75%,100%": {
                transform: "scale(2)",
                opacity: "0"
            }
        },
        pulse: {
            "0%,100%": {
                opacity: "1"
            },
            "50%": {
                opacity: ".5"
            }
        },
        bounce: {
            "0%, 100%": {
                transform: "translateY(-25%)",
                animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
            },
            "50%": {
                transform: "none",
                animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
            }
        }
    },
    letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em"
    },
    lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        .../* @__PURE__ */ linear(10, "rem", 4, 3)
    },
    margin: (theme2)=>({
            auto: "auto",
            ...theme2("spacing")
        }),
    maxHeight: (theme2)=>({
            ...theme2("spacing"),
            full: "100%",
            screen: "100vh"
        }),
    maxWidth: (theme2, { breakpoints  })=>({
            none: "none",
            0: "0rem",
            xs: "20rem",
            sm: "24rem",
            md: "28rem",
            lg: "32rem",
            xl: "36rem",
            "2xl": "42rem",
            "3xl": "48rem",
            "4xl": "56rem",
            "5xl": "64rem",
            "6xl": "72rem",
            "7xl": "80rem",
            full: "100%",
            min: "min-content",
            max: "max-content",
            prose: "65ch",
            ...breakpoints(theme2("screens"))
        }),
    minHeight: {
        0: "0px",
        full: "100%",
        screen: "100vh"
    },
    minWidth: {
        0: "0px",
        full: "100%",
        min: "min-content",
        max: "max-content"
    },
    opacity: {
        .../* @__PURE__ */ linear(100, "", 100, 0, 10),
        5: "0.05",
        25: "0.25",
        75: "0.75",
        95: "0.95"
    },
    order: {
        first: "-9999",
        last: "9999",
        none: "0",
        .../* @__PURE__ */ linear(12, "", 1, 1)
    },
    outline: {
        none: [
            "2px solid transparent",
            "2px"
        ],
        white: [
            "2px dotted white",
            "2px"
        ],
        black: [
            "2px dotted black",
            "2px"
        ]
    },
    padding: /* @__PURE__ */ alias2("spacing"),
    placeholderColor: /* @__PURE__ */ alias2("colors"),
    placeholderOpacity: /* @__PURE__ */ alias2("opacity"),
    ringColor: (theme2)=>({
            DEFAULT: theme2("colors.blue.500", "#3b82f6"),
            ...theme2("colors")
        }),
    ringOffsetColor: /* @__PURE__ */ alias2("colors"),
    ringOffsetWidth: /* @__PURE__ */ exponential(8, "px"),
    ringOpacity: (theme2)=>({
            DEFAULT: "0.5",
            ...theme2("opacity")
        }),
    ringWidth: {
        DEFAULT: "3px",
        .../* @__PURE__ */ exponential(8, "px")
    },
    rotate: {
        .../* @__PURE__ */ exponential(2, "deg"),
        .../* @__PURE__ */ exponential(12, "deg", 3),
        .../* @__PURE__ */ exponential(180, "deg", 45)
    },
    saturate: /* @__PURE__ */ linear(200, "", 100, 0, 50),
    scale: {
        .../* @__PURE__ */ linear(150, "", 100, 0, 50),
        .../* @__PURE__ */ linear(110, "", 100, 90, 5),
        75: "0.75",
        125: "1.25"
    },
    sepia: {
        0: "0",
        DEFAULT: "100%"
    },
    skew: {
        .../* @__PURE__ */ exponential(2, "deg"),
        .../* @__PURE__ */ exponential(12, "deg", 3)
    },
    space: /* @__PURE__ */ alias2("spacing"),
    stroke: {
        current: "currentColor"
    },
    strokeWidth: /* @__PURE__ */ linear(2),
    textColor: /* @__PURE__ */ alias2("colors"),
    textOpacity: /* @__PURE__ */ alias2("opacity"),
    transitionDuration: (theme2)=>({
            DEFAULT: "150ms",
            ...theme2("durations")
        }),
    transitionDelay: /* @__PURE__ */ alias2("durations"),
    transitionProperty: {
        none: "none",
        all: "all",
        DEFAULT: "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",
        colors: "background-color,border-color,color,fill,stroke",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform"
    },
    transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4,0,0.2,1)",
        linear: "linear",
        in: "cubic-bezier(0.4,0,1,1)",
        out: "cubic-bezier(0,0,0.2,1)",
        "in-out": "cubic-bezier(0.4,0,0.2,1)"
    },
    translate: (theme2)=>({
            ...theme2("spacing"),
            ...ratios(2, 4),
            full: "100%"
        }),
    width: (theme2)=>({
            auto: "auto",
            ...theme2("spacing"),
            ...ratios(2, 6),
            ...ratios(12, 12),
            screen: "100vw",
            full: "100%",
            min: "min-content",
            max: "max-content"
        }),
    zIndex: {
        auto: "auto",
        .../* @__PURE__ */ linear(50, "", 1, 0, 10)
    }
};
var flattenColorPalette = (colors, target = {}, prefix = [])=>{
    Object.keys(colors).forEach((property2)=>{
        const value = colors[property2];
        if (property2 == "DEFAULT") {
            target[join(prefix)] = value;
            target[join(prefix, ".")] = value;
        }
        const key = [
            ...prefix,
            property2
        ];
        target[join(key)] = value;
        target[join(key, ".")] = value;
        if (value && typeof value == "object") flattenColorPalette(value, target, key);
    }, target);
    return target;
};
var resolveContext = {
    negative: ()=>({}),
    breakpoints: (screens)=>Object.keys(screens).filter((key)=>typeof screens[key] == "string").reduce((target, key)=>{
            target["screen-" + key] = screens[key];
            return target;
        }, {})
};
var handleArbitraryValues = (section, key)=>(key = key[0] == "[" && key.slice(-1) == "]" && key.slice(1, -1)) && includes(section, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(key) && (includes(key, "calc(") ? key.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : key);
var makeThemeResolver = (config)=>{
    const cache = new Map();
    const theme2 = {
        ...defaultTheme,
        ...config
    };
    const deref = (theme3, section)=>{
        const base = theme3 && theme3[section];
        const value = typeof base == "function" ? base(resolve, resolveContext) : base;
        return value && section == "colors" ? flattenColorPalette(value) : value;
    };
    const resolve = (section, key, defaultValue)=>{
        const keypath = section.split(".");
        section = keypath[0];
        if (keypath.length > 1) {
            defaultValue = key;
            key = join(tail(keypath), ".");
        }
        let base = cache.get(section);
        if (!base) {
            cache.set(section, base = {
                ...deref(theme2, section)
            });
            Object.assign(base, deref(theme2.extend, section));
        }
        if (key != null) {
            key = (Array.isArray(key) ? join(key) : key) || "DEFAULT";
            const value = handleArbitraryValues(section, key) || base[key];
            return value == null ? defaultValue : Array.isArray(value) && !includes([
                "fontSize",
                "outline",
                "dropShadow"
            ], section) ? join(value, ",") : value;
        }
        return base;
    };
    return resolve;
};
// src/twind/translate.ts
var translate = (plugins, context)=>(rule, isTranslating)=>{
        if (typeof rule.d == "function") return rule.d(context);
        const parameters = rule.d.split(/-(?![^[]*])/g);
        if (!isTranslating && parameters[0] == "tw" && rule.$ == rule.d) return rule.$;
        for(let index = parameters.length; index; index--){
            const id = join(parameters.slice(0, index));
            if (Object.prototype.hasOwnProperty.call(plugins, id)) {
                const plugin = plugins[id];
                return typeof plugin == "function" ? plugin(tail(parameters, index), context, id) : typeof plugin == "string" ? context[isTranslating ? "css" : "tw"](plugin) : plugin;
            }
        }
    };
// src/twind/decorate.ts
var _2;
var GROUP_RE = /^:(group(?:(?!-focus).+?)*)-(.+)$/;
var NOT_PREFIX_RE = /^(:not)-(.+)/;
var prepareVariantSelector = (variant)=>variant[1] == "[" ? tail(variant) : variant;
var decorate = (darkMode, variants, { theme: theme2 , tag  })=>{
    const applyVariant = (translation, variant)=>{
        if (_2 = theme2("screens", tail(variant), "")) return {
            [buildMediaQuery(_2)]: translation
        };
        if (variant == ":dark" && darkMode == "class") return {
            ".dark &": translation
        };
        if (_2 = GROUP_RE.exec(variant)) return {
            [`.${escape(tag(_2[1]))}:${_2[2]} &`]: translation
        };
        return {
            [variants[tail(variant)] || "&" + variant.replace(NOT_PREFIX_RE, (_4, not, variant2)=>not + "(" + prepareVariantSelector(":" + variant2) + ")")]: translation
        };
    };
    return (translation, rule)=>rule.v.reduceRight(applyVariant, translation);
};
// src/twind/presedence.ts
var _3;
var responsivePrecedence = (css)=>(((_3 = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(css)) ? +_3[1] / (_3[2] ? 15 : 1) / 10 : 0) & 31) << 22;
var seperatorPrecedence = (string)=>{
    _3 = 0;
    for(let index = string.length; index--;)_3 += includes("-:,", string[index]);
    return _3;
};
var atRulePresedence = (css)=>(seperatorPrecedence(css) & 15) << 18;
var PRECEDENCES_BY_PSEUDO_CLASS = [
    "rst",
    "st",
    "en",
    "d",
    "nk",
    "sited",
    "pty",
    "ecked",
    "cus-w",
    "ver",
    "cus",
    "cus-v",
    "tive",
    "sable",
    "ad-on",
    "tiona",
    "quire"
];
var pseudoPrecedence = (pseudoClass)=>1 << (~(_3 = PRECEDENCES_BY_PSEUDO_CLASS.indexOf(pseudoClass.replace(GROUP_RE, ":$2").slice(3, 8))) ? _3 : 17);
var makeVariantPresedenceCalculator = (theme2, variants)=>(presedence, variant)=>presedence | ((_3 = theme2("screens", tail(variant), "")) ? 134217728 | responsivePrecedence(buildMediaQuery(_3)) : variant == ":dark" ? 1073741824 : (_3 = variants[variant] || variant.replace(NOT_PREFIX_RE, ":$2"))[0] == "@" ? atRulePresedence(_3) : pseudoPrecedence(variant));
var declarationPropertyPrecedence = (property2)=>property2[0] == "-" ? 0 : seperatorPrecedence(property2) + ((_3 = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(property2)) ? +!!_3[1] || -!!_3[2] : 0) + 1;
// src/twind/serialize.ts
var stringifyBlock = (body, selector)=>selector + "{" + body + "}";
var serialize = (prefix, variants, context)=>{
    const { theme: theme2 , tag  } = context;
    const tagVar = (_4, property2)=>"--" + tag(property2);
    const tagVars = (value)=>`${value}`.replace(/--(tw-[\w-]+)\b/g, tagVar);
    const stringifyDeclaration = (property2, value, important)=>{
        property2 = tagVars(property2);
        return Array.isArray(value) ? join(value.filter(Boolean).map((value2)=>prefix(property2, tagVars(value2), important)), ";") : prefix(property2, tagVars(value), important);
    };
    let rules2;
    const stringify2 = (atRules, selector, presedence, css, important)=>{
        if (Array.isArray(css)) {
            css.forEach((css2)=>css2 && stringify2(atRules, selector, presedence, css2, important));
            return;
        }
        let declarations = "";
        let maxPropertyPresedence = 0;
        let numberOfDeclarations = 0;
        if (css["@apply"]) css = merge(evalThunk(apply(css["@apply"]), context), {
            ...css,
            "@apply": void 0
        }, context);
        Object.keys(css).forEach((key)=>{
            const value = evalThunk(css[key], context);
            if (isCSSProperty(key, value)) {
                if (value !== "" && key.length > 1) {
                    const property2 = hyphenate(key);
                    numberOfDeclarations += 1;
                    maxPropertyPresedence = Math.max(maxPropertyPresedence, declarationPropertyPrecedence(property2));
                    declarations = (declarations && declarations + ";") + stringifyDeclaration(property2, value, important);
                }
            } else if (value) {
                if (key == ":global") key = "@global";
                if (key[0] == "@") {
                    if (key[1] == "g") stringify2([], "", 0, value, important);
                    else if (key[1] == "f") stringify2([], key, 0, value, important);
                    else if (key[1] == "k") {
                        const currentSize = rules2.length;
                        stringify2([], "", 0, value, important);
                        const waypoints = rules2.splice(currentSize, rules2.length - currentSize);
                        rules2.push({
                            r: stringifyBlock(join(waypoints.map((p)=>p.r), ""), key),
                            p: waypoints.reduce((sum, p)=>sum + p.p, 0)
                        });
                    } else if (key[1] == "i") (Array.isArray(value) ? value : [
                        value
                    ]).forEach((value2)=>value2 && rules2.push({
                            p: 0,
                            r: `${key} ${value2};`
                        }));
                    else {
                        if (key[2] == "c") key = buildMediaQuery(context.theme("screens", tail(key, 8).trim()));
                        stringify2([
                            ...atRules,
                            key
                        ], selector, presedence | responsivePrecedence(key) | atRulePresedence(key), value, important);
                    }
                } else stringify2(atRules, selector ? selector.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (_4, selectorPart, comma)=>key.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (_5, keyPart, comma2)=>(includes(keyPart, "&") ? keyPart.replace(/&/g, selectorPart) : (selectorPart && selectorPart + " ") + keyPart) + comma2) + comma) : key, presedence, value, important);
            }
        });
        if (numberOfDeclarations) rules2.push({
            r: atRules.reduceRight(stringifyBlock, stringifyBlock(declarations, selector)),
            p: presedence * 256 + ((Math.max(0, 15 - numberOfDeclarations) & 15) << 4 | (maxPropertyPresedence || 15) & 15)
        });
    };
    const variantPresedence = makeVariantPresedenceCalculator(theme2, variants);
    return (css, className, rule, layer = 0)=>{
        layer <<= 28;
        rules2 = [];
        stringify2([], className ? "." + escape(className) : "", rule ? rule.v.reduceRight(variantPresedence, layer) : layer, css, rule && rule.i);
        return rules2;
    };
};
// src/twind/inject.ts
var inject = (sheet, mode2, init, context)=>{
    let sortedPrecedences;
    init((value = [])=>sortedPrecedences = value);
    let insertedRules;
    init((value = new Set())=>insertedRules = value);
    return ({ r: css , p: presedence  })=>{
        if (!insertedRules.has(css)) {
            insertedRules.add(css);
            const index = sortedInsertionIndex(sortedPrecedences, presedence);
            try {
                sheet.insert(css, index);
                sortedPrecedences.splice(index, 0, presedence);
            } catch (error) {
                if (!/:-[mwo]/.test(css)) mode2.report({
                    id: "INJECT_CSS_ERROR",
                    css,
                    error
                }, context);
            }
        }
    };
};
// src/twind/configure.ts
var sanitize = (value, defaultValue, disabled, enabled = defaultValue)=>value === false ? disabled : value === true ? enabled : value || defaultValue;
var loadMode = (mode2)=>(typeof mode2 == "string" ? ({
        t: strict,
        a: warn,
        i: silent
    })[mode2[1]] : mode2) || warn;
var COMPONENT_PROPS = {
    _: {
        value: "",
        writable: true
    }
};
var configure = (config = {})=>{
    const theme2 = makeThemeResolver(config.theme);
    const mode2 = loadMode(config.mode);
    const hash = sanitize(config.hash, false, false, cyrb32);
    const important = config.important;
    let activeRule = {
        v: []
    };
    let translateDepth = 0;
    const lastTranslations = [];
    const context = {
        tw: (...tokens)=>process(tokens),
        theme: (section, key, defaultValue)=>{
            var _a;
            const value = (_a = theme2(section, key, defaultValue)) != null ? _a : mode2.unknown(section, key == null || Array.isArray(key) ? key : key.split("."), defaultValue != null, context);
            return activeRule.n && value && includes("rg", (typeof value)[5]) ? `calc(${value} * -1)` : value;
        },
        tag: (value)=>hash ? hash(value) : value,
        css: (rules2)=>{
            translateDepth++;
            const lastTranslationsIndex = lastTranslations.length;
            try {
                (typeof rules2 == "string" ? parse([
                    rules2
                ]) : rules2).forEach(convert);
                const css = Object.create(null, COMPONENT_PROPS);
                for(let index = lastTranslationsIndex; index < lastTranslations.length; index++){
                    const translation = lastTranslations[index];
                    if (translation) switch(typeof translation){
                        case "object":
                            merge(css, translation, context);
                            break;
                        case "string":
                            css._ += (css._ && " ") + translation;
                    }
                }
                return css;
            } finally{
                lastTranslations.length = lastTranslationsIndex;
                translateDepth--;
            }
        }
    };
    const translate2 = translate({
        ...corePlugins,
        ...config.plugins
    }, context);
    const doTranslate = (rule)=>{
        const parentRule = activeRule;
        activeRule = rule;
        try {
            return evalThunk(translate2(rule), context);
        } finally{
            activeRule = parentRule;
        }
    };
    const variants = {
        ...coreVariants,
        ...config.variants
    };
    const decorate2 = decorate(config.darkMode || "media", variants, context);
    const serialize2 = serialize(sanitize(config.prefix, autoprefix, noprefix), variants, context);
    const sheet = config.sheet || (typeof window == "undefined" ? voidSheet() : cssomSheet(config));
    const { init =(callback)=>callback()  } = sheet;
    const inject2 = inject(sheet, mode2, init, context);
    let idToClassName;
    init((value = new Map())=>idToClassName = value);
    const inlineDirectiveName = new WeakMap();
    const evaluateFunctions = (key, value)=>key == "_" ? void 0 : typeof value == "function" ? JSON.stringify(evalThunk(value, context), evaluateFunctions) : value;
    const convert = (rule)=>{
        if (!translateDepth && activeRule.v.length) rule = {
            ...rule,
            v: [
                ...activeRule.v,
                ...rule.v
            ],
            $: ""
        };
        if (!rule.$) rule.$ = stringifyRule(rule, inlineDirectiveName.get(rule.d));
        let className = translateDepth ? null : idToClassName.get(rule.$);
        if (className == null) {
            let translation = doTranslate(rule);
            if (!rule.$) {
                rule.$ = cyrb32(JSON.stringify(translation, evaluateFunctions));
                inlineDirectiveName.set(rule.d, rule.$);
                rule.$ = stringifyRule(rule, rule.$);
            }
            if (translation && typeof translation == "object") {
                rule.v = rule.v.map(prepareVariantSelector);
                if (important) rule.i = important;
                translation = decorate2(translation, rule);
                if (translateDepth) lastTranslations.push(translation);
                else {
                    const layer = typeof rule.d == "function" ? typeof translation._ == "string" ? 1 : 3 : 2;
                    className = hash || typeof rule.d == "function" ? (hash || cyrb32)(layer + rule.$) : rule.$;
                    serialize2(translation, className, rule, layer).forEach(inject2);
                    if (translation._) className += " " + translation._;
                }
            } else {
                if (typeof translation == "string") className = translation;
                else {
                    className = rule.$;
                    mode2.report({
                        id: "UNKNOWN_DIRECTIVE",
                        rule: className
                    }, context);
                }
                if (translateDepth && typeof rule.d !== "function") lastTranslations.push(className);
            }
            if (!translateDepth) {
                idToClassName.set(rule.$, className);
                ensureMaxSize(idToClassName, 3e4);
            }
        }
        return className;
    };
    const process = (tokens)=>join(parse(tokens).map(convert).filter(Boolean), " ");
    const preflight = sanitize(config.preflight, identity, false);
    if (preflight) {
        const css = createPreflight(theme2);
        const styles = serialize2(typeof preflight == "function" ? evalThunk(preflight(css, context), context) || css : {
            ...css,
            ...preflight
        });
        init((injected = (styles.forEach(inject2), true))=>injected);
    }
    return {
        init: ()=>mode2.report({
                id: "LATE_SETUP_CALL"
            }, context),
        process
    };
};
// src/twind/instance.ts
var create = (config)=>{
    let process = (tokens)=>{
        init();
        return process(tokens);
    };
    let init = (config2)=>{
        ({ process , init  } = configure(config2));
    };
    if (config) init(config);
    let context;
    const fromContext = (key)=>()=>{
            if (!context) process([
                (_4)=>{
                    context = _4;
                    return "";
                }
            ]);
            return context[key];
        };
    return {
        tw: Object.defineProperties((...tokens)=>process(tokens), {
            theme: {
                get: fromContext("theme")
            }
        }),
        setup: (config2)=>init(config2)
    };
};
// src/twind/default.ts
var { tw , setup  } = /* @__PURE__ */ create();
// src/twind/expand.ts
var expandGroups = (classNames)=>parse(classNames).map((rule)=>stringifyRule(rule)).join(" ");

},{"style-vendorizer":"iHEsi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iHEsi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cssPropertyAlias", ()=>r);
parcelHelpers.export(exports, "cssPropertyPrefixFlags", ()=>a);
parcelHelpers.export(exports, "cssValuePrefixFlags", ()=>t);
var i = new Map([
    [
        "align-self",
        "-ms-grid-row-align"
    ],
    [
        "color-adjust",
        "-webkit-print-color-adjust"
    ],
    [
        "column-gap",
        "grid-column-gap"
    ],
    [
        "forced-color-adjust",
        "-ms-high-contrast-adjust"
    ],
    [
        "gap",
        "grid-gap"
    ],
    [
        "grid-template-columns",
        "-ms-grid-columns"
    ],
    [
        "grid-template-rows",
        "-ms-grid-rows"
    ],
    [
        "justify-self",
        "-ms-grid-column-align"
    ],
    [
        "margin-inline-end",
        "-webkit-margin-end"
    ],
    [
        "margin-inline-start",
        "-webkit-margin-start"
    ],
    [
        "mask-border",
        "-webkit-mask-box-image"
    ],
    [
        "mask-border-outset",
        "-webkit-mask-box-image-outset"
    ],
    [
        "mask-border-slice",
        "-webkit-mask-box-image-slice"
    ],
    [
        "mask-border-source",
        "-webkit-mask-box-image-source"
    ],
    [
        "mask-border-repeat",
        "-webkit-mask-box-image-repeat"
    ],
    [
        "mask-border-width",
        "-webkit-mask-box-image-width"
    ],
    [
        "overflow-wrap",
        "word-wrap"
    ],
    [
        "padding-inline-end",
        "-webkit-padding-end"
    ],
    [
        "padding-inline-start",
        "-webkit-padding-start"
    ],
    [
        "print-color-adjust",
        "color-adjust"
    ],
    [
        "row-gap",
        "grid-row-gap"
    ],
    [
        "scroll-margin-bottom",
        "scroll-snap-margin-bottom"
    ],
    [
        "scroll-margin-left",
        "scroll-snap-margin-left"
    ],
    [
        "scroll-margin-right",
        "scroll-snap-margin-right"
    ],
    [
        "scroll-margin-top",
        "scroll-snap-margin-top"
    ],
    [
        "scroll-margin",
        "scroll-snap-margin"
    ],
    [
        "text-combine-upright",
        "-ms-text-combine-horizontal"
    ]
]);
function r(r1) {
    return i.get(r1);
}
function a(i1) {
    var r2 = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(i1);
    return r2 ? r2[1] ? 1 : r2[2] ? 2 : r2[3] ? 3 : 5 : 0;
}
function t(i2, r3) {
    var a1 = /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(i2);
    return a1 ? a1[1] ? /^sti/i.test(r3) ? 1 : 0 : a1[2] ? /^pat/i.test(r3) ? 1 : 0 : a1[3] ? /^image-/i.test(r3) ? 1 : 0 : a1[4] ? "-" === r3[3] ? 2 : 0 : /^(?:inline-)?grid$/i.test(r3) ? 4 : 0 : 0;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2835l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animation", ()=>animation);
parcelHelpers.export(exports, "css", ()=>css);
parcelHelpers.export(exports, "keyframes", ()=>keyframes);
parcelHelpers.export(exports, "screen", ()=>screen);
// src/css/index.ts
var _twind = require("twind");
// src/css/index.ts
parcelHelpers.exportAll(_twind, exports);
// src/internal/util.ts
var includes = (value, search)=>!!~value.indexOf(search);
var join = (parts, separator = "-")=>parts.join(separator);
var hyphenate = (value)=>value.replace(/[A-Z]/g, "-$&").toLowerCase();
var evalThunk = (value, context)=>{
    while(typeof value == "function")value = value(context);
    return value;
};
var isCSSProperty = (key, value)=>!includes("@:&", key[0]) && (includes("rg", (typeof value)[5]) || Array.isArray(value));
var merge = (target, source, context)=>source ? Object.keys(source).reduce((target2, key)=>{
        const value = evalThunk(source[key], context);
        if (isCSSProperty(key, value)) target2[hyphenate(key)] = value;
        else target2[key] = key[0] == "@" && includes("figa", key[1]) ? (target2[key] || []).concat(value) : merge(target2[key] || {}, value, context);
        return target2;
    }, target) : target;
var escape = typeof CSS !== "undefined" && CSS.escape || ((className)=>className.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
var buildMediaQuery = (screen2)=>{
    if (!Array.isArray(screen2)) screen2 = [
        screen2
    ];
    return "@media " + join(screen2.map((screen3)=>{
        if (typeof screen3 == "string") screen3 = {
            min: screen3
        };
        return screen3.raw || join(Object.keys(screen3).map((feature)=>`(${feature}-width:${screen3[feature]})`), " and ");
    }), ",");
};
var translate = (tokens, context)=>{
    const collect = (target, token)=>Array.isArray(token) ? token.reduce(collect, target) : merge(target, evalThunk(token, context), context);
    return tokens.reduce(collect, {});
};
var newRule = /\s*(?:([\w-%@]+)\s*:?\s*([^{;]+?)\s*(?:;|$|})|([^;}{]*?)\s*{)|(})/gi;
var ruleClean = /\/\*[\s\S]*?\*\/|\s+|\n/gm;
var decorate = (selectors, currentBlock)=>selectors.reduceRight((rules, selector)=>({
            [selector]: rules
        }), currentBlock);
var saveBlock = (rules, selectors, currentBlock)=>{
    if (currentBlock) rules.push(decorate(selectors, currentBlock));
};
var interleave = (strings, interpolations, context)=>{
    let buffer = strings[0];
    const result = [];
    for(let index = 0; index < interpolations.length;){
        const interpolation = evalThunk(interpolations[index], context);
        if (interpolation && typeof interpolation == "object") {
            result.push(buffer, interpolation);
            buffer = strings[++index];
        } else buffer += (interpolation || "") + strings[++index];
    }
    result.push(buffer);
    return result;
};
var astish = (values, context)=>{
    const selectors = [];
    const rules = [];
    let currentBlock;
    let match;
    for(let index = 0; index < values.length; index++){
        const value = values[index];
        if (typeof value == "string") while(match = newRule.exec(value.replace(ruleClean, " "))){
            if (!match[0]) continue;
            if (match[4]) {
                currentBlock = saveBlock(rules, selectors, currentBlock);
                selectors.pop();
            }
            if (match[3]) {
                currentBlock = saveBlock(rules, selectors, currentBlock);
                selectors.push(match[3]);
            } else if (!match[4]) {
                if (!currentBlock) currentBlock = {};
                const value2 = match[2] && /\S/.test(match[2]) ? match[2] : values[++index];
                if (value2) {
                    if (match[1] == "@apply") merge(currentBlock, evalThunk((0, _twind.apply)(value2), context), context);
                    else currentBlock[match[1]] = value2;
                }
            }
        }
        else {
            currentBlock = saveBlock(rules, selectors, currentBlock);
            rules.push(decorate(selectors, value));
        }
    }
    saveBlock(rules, selectors, currentBlock);
    return rules;
};
var cssFactory = (tokens, context)=>translate(Array.isArray(tokens[0]) && Array.isArray(tokens[0].raw) ? astish(interleave(tokens[0], tokens.slice(1), context), context) : tokens, context);
var css = (...tokens)=>(0, _twind.directive)(cssFactory, tokens);
var keyframesFactory = (tokens, context)=>{
    const waypoints = cssFactory(tokens, context);
    const id = (0, _twind.hash)(JSON.stringify(waypoints));
    context.tw(()=>({
            [`@keyframes ${id}`]: waypoints
        }));
    return id;
};
var keyframes = (...tokens)=>(0, _twind.directive)(keyframesFactory, tokens);
var animation = (value, waypoints)=>waypoints === void 0 ? (...args)=>animation(value, keyframes(...args)) : css({
        ...value && typeof value == "object" ? value : {
            animation: value
        },
        animationName: typeof waypoints == "function" ? waypoints : keyframes(waypoints)
    });
var screenFactory = ({ size , rules  }, context)=>{
    const media = buildMediaQuery(context.theme("screens", size));
    return rules === void 0 ? media : {
        [media]: typeof rules == "function" ? evalThunk(rules, context) : cssFactory([
            rules
        ], context)
    };
};
var screen = (size, rules)=>(0, _twind.directive)(screenFactory, {
        size,
        rules
    });

},{"twind":"aXRum","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gXrQx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "data": [
        [
            "#",
            "Name",
            "Symbol",
            "Marcet Cap",
            "Price",
            "Circulating Supply",
            "Volume (24h)",
            "% 1h",
            "% 24h",
            "% 7d"
        ],
        [
            "1",
            "Bitcoin",
            "BTC",
            "$65,981,154,527",
            "$3.782.68",
            "17,442,950",
            "$6,344,541,359",
            "-0.64%",
            "-9.37%",
            "6.64%"
        ],
        [
            "2",
            "XRP",
            "XRP",
            "$15,116,406,178",
            "$0.370554",
            "40,794,121,066\xc2\xa0*",
            "$1,084,749,047",
            "-1.59%",
            "-13.12%",
            "11.36%"
        ],
        [
            "3",
            "Ethereum",
            "ETH",
            "$13,006,271,179",
            "$125.06",
            "104,003,442",
            "$3,601,693,220",
            "-1.66%",
            "-17.34%",
            "32.12%"
        ],
        [
            "4",
            "Bitcoin Cash",
            "BCH",
            "$2,817,114,877",
            "$160.70",
            "17,530,138",
            "$642,673,291",
            "-1.22%",
            "-19.59%",
            "69.72%"
        ],
        [
            "5",
            "Stellar",
            "XLM",
            "$2,300,466,152",
            "$0.120061",
            "19,160,772,695\xc2\xa0*",
            "$122,095,291",
            "-1.45%",
            "-11.88%",
            "10.23%"
        ],
        [
            "6",
            "EOS",
            "EOS",
            "$2,237,400,763",
            "$2.47",
            "906,245,118\xc2\xa0*",
            "$1,065,544,841",
            "-0.98%",
            "-16.54%",
            "-2.05%"
        ],
        [
            "7",
            "Tether",
            "USDT",
            "$1,900,583,447",
            "$1.02",
            "1,856,421,736\xc2\xa0*",
            "$5,929,918,169",
            "0.24%",
            "0.59%",
            "1.40%"
        ],
        [
            "8",
            "Litecoin",
            "LTC",
            "$1,820,124,644",
            "$30.47",
            "59,726,359",
            "$527,319,088",
            "-1.95%",
            "-14.11%",
            "5.59%"
        ],
        [
            "9",
            "Bitcoin SV",
            "BSV",
            "$1,588,957,085",
            "$90.65",
            "17,529,211",
            "$157,542,307",
            "-1.73%",
            "-16.16%",
            "13.55%"
        ],
        [
            "10",
            "TRON",
            "TRX",
            "$1,272,495,696",
            "$0.019098",
            "66,629,110,381",
            "$147,732,187",
            "-1.63%",
            "-16.24%",
            "33.59%"
        ]
    ],
    "tableTitle": "Table examples - Cryptocurrencies rank table",
    "settingsItemProps": {
        "tableHeaderBg": "#4E1D1D",
        "tableRowsBg": "#EDF2F7",
        "tableCellsBorderBg": "#FFFFFF",
        "tableHeaderTextColor": "#FFFFFF",
        "tableRowsTextColor": "#000000",
        "addBorderToTableCells": false,
        "showSearchBar": true
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8TtF2","gLLPy"], "gLLPy", "parcelRequire87bb")

//# sourceMappingURL=index.4d6bcbeb.js.map
