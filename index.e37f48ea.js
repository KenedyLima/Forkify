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
})({"fA0o9":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
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

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _helpersJs = require("./helpers.js");
var _modelJs = require("./model.js");
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _bookmarkViewJs = require("./views/bookmarkView.js");
var _bookmarkViewJsDefault = parcelHelpers.interopDefault(_bookmarkViewJs);
var _addRecipeViewJs = require("./views/addRecipeView.js");
var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
// https://forkify-api.herokuapp.com/v2
if (module.hot) module.hot.accept();
///////////////////////////////////////
async function controlRecipes() {
    const recipeId = (0, _helpersJs.getRecipeIdFromHash)();
    let recipe;
    if (!recipeId) return;
    try {
        //1)Render Spinner
        (0, _recipeViewJsDefault.default).renderSpinner();
        //2)Get Recipe Data From Model
        recipe = await _modelJs.queryRecipeById(recipeId);
        //3)Render Recipe Data On Recipe View
        (0, _recipeViewJsDefault.default).render(recipe);
        (0, _recipeViewJsDefault.default).handleBookmarks(controlBookmarks);
    } catch (error) {
        console.log(error);
        (0, _recipeViewJsDefault.default).renderErrorMessage();
    }
}
async function controlQueries() {
    try {
        //1)Get query from search field
        const query = (0, _searchViewJsDefault.default).getquery();
        if (query === "") throw new Error("Search field is empty");
        (0, _resultsViewJsDefault.default).renderSpinner();
        //2)queryRecipes from API
        const data = await _modelJs.queryRecipes(query);
        console.log(data);
        const userData = _modelJs.queryUserGeneratedRecipes(query);
        const recipes = [];
        if (userData) userData.forEach((recipe)=>recipes.push(recipe));
        if (data.recipes) data.recipes.forEach((recipe)=>recipes.push(recipe));
        if (!recipes.length > 0) throw new Error();
        //3)Render recipes in resultsView
        (0, _resultsViewJsDefault.default).render(recipes);
        //4)Handle active recipe
        (0, _helpersJs.handleActiveRecipe)();
    } catch (error) {
        console.log(error);
        (0, _resultsViewJsDefault.default).renderErrorMessage();
    }
}
function controlBookmarks(recipe, bookmarked) {
    let bookmarks;
    if (bookmarked) bookmarks = _modelJs.addBookmark(recipe);
    else bookmarks = _modelJs.removeBookmark(recipe);
    (0, _bookmarkViewJsDefault.default).render(bookmarks);
    (0, _helpersJs.handleActiveRecipe)();
}
function controlRecipeUploads(data) {
    const recipe = _modelJs.submitRecipe(data);
    (0, _recipeViewJsDefault.default).render(recipe);
}
(async function init() {
    console.log(_modelJs.getBookmarks());
    (0, _bookmarkViewJsDefault.default).render(_modelJs.getBookmarks());
    (0, _recipeViewJsDefault.default).addHandlerRender(controlRecipes);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlQueries);
    (0, _addRecipeViewJsDefault.default).handleAddRecipe();
    (0, _addRecipeViewJsDefault.default).handleCloseButton();
    (0, _addRecipeViewJsDefault.default).handleRecipeUpload(controlRecipeUploads);
    (0, _helpersJs.handleActiveRecipe)();
    _modelJs.loadUserGeneratedRecipes();
})();

},{"./helpers.js":"hGI1E","./model.js":"Y4A21","./views/recipeView.js":"l60JC","./views/searchView.js":"9OQAM","./views/resultsView.js":"cSbZE","./views/bookmarkView.js":"7YaI3","./views/addRecipeView.js":"i6DNj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRecipeIdFromHash", ()=>getRecipeIdFromHash);
parcelHelpers.export(exports, "getJson", ()=>getJson);
parcelHelpers.export(exports, "timeout", ()=>timeout);
parcelHelpers.export(exports, "handleActiveRecipe", ()=>handleActiveRecipe);
parcelHelpers.export(exports, "addActiveClassToLastBookmark", ()=>addActiveClassToLastBookmark);
parcelHelpers.export(exports, "updateBookmarkContainerStyles", ()=>updateBookmarkContainerStyles);
parcelHelpers.export(exports, "generateRecipeId", ()=>generateRecipeId) // updateServings(updateTo, recipeServings = 4) {
 //   /*Creates the fraction that each ingredient is going to be multiplied by*/
 //   const multiplyBy = new Fraction(updateTo, recipeServings);
 //   console.log('MultiplyBy: ', multiplyBy);
 //   let result;
 //   const amountsArray = this._getAmounts(this._recipe.ingredients);
 //   /*Loop through  amounts array and peform calculations*/
 //   result = amountsArray.map(array => {
 //     const arrayLength = array.length;
 //     let fraction = null;
 //     let amount = '';
 //     /* */
 //     if (arrayLength === 1) {
 //       fraction = new Fraction(array[0]);
 //       amount = fraction.mul(multiplyBy);
 //       if (this._isWholeInteger(fraction)) {
 //         amount = fraction.n / fraction.d;
 //       }
 //     } else {
 //       array.forEach(element => {});
 //     }
 //     return result;
 //   });
 // }
 /*checks whether a fraction results a whole integer or not */  // _isWholeInteger(fraction) {
 //   const string = String(fraction.n / fraction.d);
 //   if (string.indexOf('.') > -1) {
 //     return false;
 //   }
 //   return true;
 // }
 // _getAmounts(array) {
 //   let temp = null;
 //   /*Split the array of strings*/
 //   array = this._splitArrayOfStrings(array, ' ');
 //   /*Now array variable is an array of arrays */
 //   /* Check for elements in the pool of arrays that has any number  : array*/
 //   temp = array
 //     .map(array => {
 //       return this._checkForNumber(array);
 //     })
 //     /*Check between the elements for '(' and removes it  : array*/
 //     .map(array => {
 //       return array.map(el => {
 //         return el.split('(').join('');
 //       });
 //     });
 //   /* Check for elements in the pool of arrays has hifen and takes only the number : array*/
 //   temp.forEach(array => {
 //     array = this._checkForLetter(array);
 //   });
 //   return temp;
 // }
 // _splitArrayOfStrings(array, regex) {
 //   return array.map(string => {
 //     return string.split(regex);
 //   });
 // }
 // _checkForLetter(array) {
 //   array.forEach(element => {
 //     if (/[a-zA-Z]/.test(element)) {
 //       const wordsArray = this._splitArrayOfStrings([element], '-');
 //       console.log('wordsArray', wordsArray);
 //       element = wordsArray.filter(word => {
 //         return !Number.isNaN(Number(word));
 //       });
 //       console.log('Element', element);
 //     }
 //   });
 // }
 // _checkForNumber(array) {
 //   const result = array.filter(element => {
 //     return /\d/.test(element);
 //   });
 //   return result;
 // }
;
function getRecipeIdFromHash() {
    return window.location.hash.substring(1);
}
async function getJson(response) {
    const result = await response;
    const data = await result.json();
    return data;
}
function timeout(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 10000);
    });
}
function handleActiveRecipe() {
    const previews = document.querySelectorAll(".preview");
    [
        "load",
        "hashchange"
    ].forEach((type)=>{
        window.addEventListener(type, function() {
            previews.forEach((preview)=>{
                preview.classList.remove("preview__link--active");
                if (preview.children[0].getAttribute("href") === window.location.hash) preview.classList.add("preview__link--active");
            });
        });
    });
}
function addActiveClassToLastBookmark() {
    const bookmarkContainer = document.querySelector(".bookmarks");
    const previews = bookmarkContainer.querySelectorAll(".preview");
    const lastElement = previews[previews.length - 1];
    console.log(lastElement);
}
function updateBookmarkContainerStyles(update) {
    height = "46rem";
    overflow = "scroll";
    if (!update) {
        height = "";
        overflow = "";
    }
    const bookmarkContainer = document.querySelector(".bookmarks");
    bookmarkContainer.style.height = height;
    bookmarkContainer.style.overflow = overflow;
}
function generateRecipeId() {
    return Date.now().toString(36);
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

},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryRecipeById", ()=>queryRecipeById);
parcelHelpers.export(exports, "queryRecipes", ()=>queryRecipes);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "removeBookmark", ()=>removeBookmark);
parcelHelpers.export(exports, "getBookmarks", ()=>getBookmarks);
parcelHelpers.export(exports, "submitRecipe", ()=>submitRecipe);
parcelHelpers.export(exports, "loadUserGeneratedRecipes", ()=>loadUserGeneratedRecipes);
parcelHelpers.export(exports, "queryUserGeneratedRecipes", ()=>queryUserGeneratedRecipes);
var _helpersJs = require("./helpers.js");
var _configJs = require("./config.js");
var _recipeJs = require("./recipe.js");
var _recipeJsDefault = parcelHelpers.interopDefault(_recipeJs);
const localStorage = window.localStorage;
let bookmarks = [];
let userGeneratedRecipes = [];
async function queryRecipeById(id) {
    const bookmarked = isBookmarked(id);
    if (bookmarked) return getBookmarkById(id);
    else if (getUserGeneratedRecipeById(id)) return getUserGeneratedRecipeById(id);
    try {
        const response = await Promise.race([
            fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`),
            (0, _helpersJs.timeout)((0, _configJs.TIMEOUT_SEC))
        ]);
        const data = await (0, _helpersJs.getJson)(response);
        const recipe = data.recipe;
        return new (0, _recipeJsDefault.default)(recipe.publisher, recipe.ingredients, recipe.source_url, recipe.recipe_id, recipe.image_url, recipe.title, false, true);
    } catch (error) {
        throw error;
    }
}
async function queryRecipes(query) {
    try {
        const response = await Promise.race([
            fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`),
            (0, _helpersJs.timeout)((0, _configJs.TIMEOUT_SEC))
        ]);
        return (0, _helpersJs.getJson)(response);
    } catch (error) {
        throw error;
    }
}
function addBookmark(recipe) {
    recipe.bookmarked = true;
    console.log(bookmarks);
    bookmarks.push(recipe);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    return bookmarks;
}
function removeBookmark(recipe) {
    let position;
    for(let index in bookmarks)if (bookmarks[index].recipe_id === recipe.recipe_id) position = index;
    bookmarks.splice(position, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    return bookmarks;
}
function getBookmarks() {
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    console.log("after json: ", bookmarks);
    if (!bookmarks || bookmarks.length < 1) {
        bookmarks = [];
        return;
    }
    console.log("Initing bookmarks...", bookmarks);
    return bookmarks;
}
function getBookmarkById(id) {
    let result = null;
    bookmarks.forEach((bookmark)=>{
        if (bookmark.recipe_id === id) result = bookmark;
    });
    return result;
}
function isBookmarked(id) {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    let bookmarked = false;
    if (!bookmarks || !bookmarks.length > 0) return false;
    for(let index in bookmarks)if (bookmarks[index].recipe_id === id) bookmarked = true;
    console.log("IsBookmarked: ", bookmarked);
    return bookmarked;
}
function submitRecipe(data) {
    const ingredients = getIngredientsArray(data);
    const recipe = new (0, _recipeJsDefault.default)(data.publisher, ingredients, data.sourceUrl, (0, _helpersJs.generateRecipeId)(), data.image, data.title, false, true);
    userGeneratedRecipes.push(recipe);
    localStorage.setItem("userGeneratedRecipes", JSON.stringify(userGeneratedRecipes));
    return recipe;
}
// Object { title: "dwdw", sourceUrl: "wdwd", image: "dwwd", publisher: "wdwd", cookingTime: "5", servings: "5", "ingredient-1": "wdwd", "ingredient-2": "", "ingredient-3": "", "ingredient-4": "", … }
function getIngredientsArray(obj) {
    const data = Object.entries(obj);
    const filter = data.filter((array)=>{
        return /ingredient/.test(array[0]);
    });
    const ingredients = filter.map((array)=>{
        return array[1];
    });
    return ingredients;
}
function loadUserGeneratedRecipes() {
    userGeneratedRecipes = JSON.parse(localStorage.getItem("userGeneratedRecipes"));
    if (!userGeneratedRecipes) userGeneratedRecipes = [];
}
function queryUserGeneratedRecipes(query) {
    if (userGeneratedRecipes && userGeneratedRecipes.length > 0) return userGeneratedRecipes.filter((recipe)=>{
        if (recipe.title.toLowerCase().indexOf(query.toLowerCase()) > -1) return true;
    });
}
function getUserGeneratedRecipeById(id) {
    let result;
    if (userGeneratedRecipes && userGeneratedRecipes.length > 0) userGeneratedRecipes.forEach((recipe)=>{
        if (recipe.recipe_id === id) result = recipe;
    });
    return result;
}

},{"./helpers.js":"hGI1E","./config.js":"k5Hzs","./recipe.js":"b0biP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
const TIMEOUT_SEC = 10;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b0biP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Recipe {
    constructor(publisher, ingredients, source_url, recipe_id, image_url, title, bookmarked, userGenerated, cookingTime = 50){
        this.publisher = publisher, this.ingredients = ingredients, this.source_url = source_url, this.recipe_id = recipe_id, this.image_url = image_url, this.title = title, this.bookmarked = bookmarked, this.userGenerated = userGenerated, this.cookingTime = cookingTime;
    }
    setBookmarked(bookmarked) {
        this.bookmarked = bookmarked;
    }
}
exports.default = Recipe;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l60JC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class RecipeView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".recipe");
    _errorMessage = "Could not find a recipe with this id. Please try another one!";
    _recipe;
    _bookmarkButton;
    render(recipe) {
        if (!this._recipe) this._recipe = recipe;
        const bookmarkIcon = recipe.bookmarked ? "icons.21bad73c.svg#icon-bookmark-fill" : "icons.21bad73c.svg#icon-bookmark";
        const userGeneratedHTML = `<svg>
    <use href="icons.21bad73c.svg#icon-user"></use>
  </svg>`;
        const html = `  <figure class="recipe__fig">
    <img src="${recipe.image_url}" alt="Tomato" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${recipe.title}</span>
    </h1>
  </figure>
  
  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="icons.21bad73c.svg#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${50}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="icons.21bad73c.svg#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">4</span>
      <span class="recipe__info-text">servings</span>
  
      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="icons.21bad73c.svg#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg ">
            <use href="icons.21bad73c.svg#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>
  
    <div class="recipe__user-generated" ${recipe.userGenerated ? "" : "style = 'background-color:#f9f5f3;'"}>
    ${recipe.userGenerated ? userGeneratedHTML : ""}
    </div>
    <button class="btn--round">
      <svg class="bookmark--icon ${recipe.bookmarked ? "bookmarked" : ""}">
        <use href="${bookmarkIcon}"></use>
      </svg>
    </button>
  </div>
  
  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
      ${this._generateIngredientsHTML(recipe.ingredients)}
    </ul>
  </div>
  
  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${recipe.source_url}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="icons.21bad73c.svg#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
  `;
        this._clean();
        this._parentElement.insertAdjacentHTML("afterbegin", html);
        this._recipe = recipe;
        this._bookmarkButton = document.querySelector(".btn--round");
    }
    addHandlerRender(handler) {
        [
            "load",
            "hashchange"
        ].forEach((type)=>{
            window.addEventListener(type, function(e) {
                handler(e);
            });
        });
    }
    handleBookmarks(handler) {
        const recipe = this._recipe;
        this._bookmarkButton.addEventListener("click", function(e) {
            const bookmarkButton = e.target.closest(".btn--round");
            if (bookmarkButton) {
                const icon = bookmarkButton.children[0];
                let href;
                let bookmarked = false;
                if (icon.classList.contains("bookmarked")) href = "icons.21bad73c.svg#icon-bookmark";
                else {
                    href = "icons.21bad73c.svg#icon-bookmark-fill";
                    bookmarked = true;
                }
                icon.classList.toggle("bookmarked");
                icon.children[0].setAttribute("href", href);
                handler(recipe, bookmarked);
            }
        });
    }
    _generateIngredientsHTML(ingredients) {
        const html = ingredients.map(function(ingredient) {
            return `<li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="icons.21bad73c.svg#icon-check"></use>
            </svg>
            <div class="recipe__description">
         
              ${ingredient}
            </div>
          </li>`;
        }).join("");
        return html;
    }
}
exports.default = new RecipeView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWlJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _parentElement = "";
    _message = "";
    _errorMessage = "";
    _clean() {
        this._parentElement.innerHTML = "";
    }
    renderSpinner() {
        this._clean();
        const html = `
            <div class="spinner">
              <svg>
                <use href="icons.21bad73c.svg#icon-loader"></use>
              </svg>
            </div>
          `;
        this._parentElement.insertAdjacentHTML("afterbegin", html);
    }
    renderErrorMessage(icon = "icon-alert-triangle", message = this._errorMessage) {
        const html = `<div class="error">
        <div>
          <svg>
            <use href="icons.21bad73c.svg#${icon}"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
        this._clean();
        this._parentElement.insertAdjacentHTML("afterbegin", html);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class SearchView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".search");
    addHandlerSearch(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
    getquery() {
        const query = this._parentElement.querySelector(".search__field").value;
        this._parentElement.querySelector(".search__field").value = "";
        return query;
    }
}
exports.default = new SearchView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSbZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _recipePreviewGeneratorJs = require("./recipePreviewGenerator.js");
class ResultsView extends (0, _viewJsDefault.default) {
    //'Comming' from View
    _parentElement = document.querySelector(".results");
    _errorMessage = "Could not find any recipe for that query. Please try another one ;)";
    _paginationButtons = "";
    _recipes;
    _totalPages;
    _currentPage;
    render(recipes) {
        let html = "";
        this._recipes = recipes;
        this._totalPages = this._calculatePagination();
        //1) Case the recipe array length is lesser than 10
        if (!this._totalPages > 1) html = _recipePreviewGeneratorJs.generateRecipePreviewHTML(recipes);
        else {
            html = this._getCurrentRecipesHTML();
            this._generatePaginationButtons();
            this._handlePagination();
        }
        this._clean();
        this._parentElement.insertAdjacentHTML("afterbegin", html);
    }
    _calculatePagination() {
        const pages = Math.ceil(this._recipes.length / 10);
        return pages;
    }
    _handlePagination() {
        const resultsView = this;
        this._paginationButtons.forEach((button)=>{
            button.addEventListener("click", function(e) {
                if (e.target.closest(".btn--inline").classList.contains("pagination__btn--prev")) resultsView._currentPage--;
                else if (e.target.closest(".btn--inline").classList.contains("pagination__btn--next")) resultsView._currentPage++;
                resultsView.render(resultsView._recipes);
            });
        });
    }
    _generatePaginationButtons() {
        const pagination = document.querySelector(".pagination");
        let html = "";
        const next = `
    <button class="btn--inline pagination__btn--next">
      <span>Page ${this._currentPage + 1}</span>
      <svg class="search__icon">
        <use href="icons.21bad73c.svg#icon-arrow-right"></use>
      </svg>
    </button>`;
        const prev = `<button class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="icons.21bad73c.svg#icon-arrow-left"></use>
    </svg>
    <span>Page ${this._currentPage - 1}</span>
  </button>`;
        if (this._currentPage === 1) html = next;
        else if (this._currentPage === this._totalPages) html = prev;
        else html = `${prev}${next}`;
        pagination.innerHTML = "";
        pagination.insertAdjacentHTML("afterbegin", html);
        this._paginationButtons = document.querySelectorAll(".btn--inline");
    }
    _getCurrentRecipesHTML() {
        if (!this._currentPage) this._currentPage = 1;
        const start = this._currentPage * 10 - 10;
        const end = this._currentPage * 10;
        const html = _recipePreviewGeneratorJs.generateRecipePreviewHTML(this._recipes.slice(start, end));
        return html;
    }
    renderErrorMessage() {
        super.renderErrorMessage();
        document.querySelector(".pagination").innerHTML = "";
    }
}
exports.default = new ResultsView();

},{"./view.js":"bWlJ9","./recipePreviewGenerator.js":"iWr9s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iWr9s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateRecipePreviewHTML", ()=>generateRecipePreviewHTML);
function generateRecipePreviewHTML(recipes) {
    if (!recipes) return "";
    return recipes.map((recipe)=>{
        return `<li class="preview">
          <a class="preview__link " href="#${recipe.recipe_id}">
            <figure class="preview__fig">
              <img src="${recipe.image_url}" alt="Test" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${recipe.title}</h4>
              <p class="preview__publisher">${recipe.publisher}</p>
            </div>
          </a>
        </li>`;
    }).join("");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7YaI3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _recipePreviewGeneratorJs = require("./recipePreviewGenerator.js");
var _helpersJs = require("../helpers.js");
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class BookmarkView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".bookmarks__list");
    _message = "No bookmarks yet. Find a nice recipe and bookmark it :)";
    render(bookmarks) {
        const html = _recipePreviewGeneratorJs.generateRecipePreviewHTML(bookmarks);
        this._clean();
        this._parentElement.insertAdjacentHTML("afterbegin", html);
        //Rendering message if theres no bookmark
        if (!bookmarks || bookmarks.length === 0) this.renderErrorMessage("icon-smile", this._message);
        //Checking bookmark length to implement the scroll bar
        if (bookmarks && bookmarks.length >= 5) (0, _helpersJs.updateBookmarkContainerStyles)(true);
        else (0, _helpersJs.updateBookmarkContainerStyles)(false);
        //adding active class to the last bookmark added
        let count = 0;
        if (count != 0) (0, _helpersJs.addActiveClassToLastBookmark)();
        count = count + 1;
        console.log(count);
    }
}
exports.default = new BookmarkView();

},{"./recipePreviewGenerator.js":"iWr9s","../helpers.js":"hGI1E","./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6DNj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class AddRecipeView {
    _parentElement = document.querySelector(".add-recipe-window");
    handleAddRecipe() {
        const button = document.querySelector(".nav__btn--add-recipe");
        const addRecipeWindow = this._parentElement;
        const overlay = document.querySelector(".overlay");
        button.addEventListener("click", function(e) {
            addRecipeWindow.classList.toggle("hidden");
            overlay.classList.toggle("hidden");
        });
    }
    handleCloseButton() {
        const closeButton = document.querySelector(".btn--close-modal");
        const form = this._parentElement;
        const overlay = document.querySelector(".overlay");
        [
            closeButton,
            overlay
        ].forEach((element)=>{
            element.addEventListener("click", function(e) {
                form.classList.toggle("hidden");
                overlay.classList.toggle("hidden");
            });
        });
    }
    _clearInputs() {
        const inputs = this._parentElement.querySelectorAll("input");
        inputs.forEach((input)=>{
            input.value = "";
        });
    }
    handleRecipeUpload(handler) {
        const addRecipeWindow = this._parentElement;
        const overlay = document.querySelector(".overlay");
        const form = this._parentElement;
        addRecipeWindow.querySelector(".upload").addEventListener("submit", function(e) {
            const data = Object.fromEntries(new FormData(e.target).entries());
            e.preventDefault();
            form.classList.add("hidden");
            overlay.classList.add("hidden");
            handler(data);
        });
    }
}
exports.default = new AddRecipeView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fA0o9","aenu9"], "aenu9", "parcelRequire3a11")

//# sourceMappingURL=index.e37f48ea.js.map
