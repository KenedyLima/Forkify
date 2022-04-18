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
})({"ddCAb":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
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
    const recipeId = _helpersJs.getRecipeIdFromHash();
    let recipe;
    if (!recipeId) return;
    try {
        //1)Render Spinner
        _recipeViewJsDefault.default.renderSpinner();
        //2)Get Recipe Data From Model
        recipe = await _modelJs.queryRecipeById(recipeId);
        //3)Render Recipe Data On Recipe View
        _recipeViewJsDefault.default.render(recipe);
        _recipeViewJsDefault.default.handleBookmarks(controlBookmarks);
    } catch (error) {
        console.log(error);
        _recipeViewJsDefault.default.renderErrorMessage();
    }
}
async function controlQueries() {
    try {
        //1)Get query from search field
        const query = _searchViewJsDefault.default.getquery();
        if (query === '') throw new Error('Search field is empty');
        _resultsViewJsDefault.default.renderSpinner();
        //2)queryRecipes from API
        const data = await _modelJs.queryRecipes(query);
        const userData = _modelJs.queryUserGeneratedRecipes(query);
        const recipes = [];
        userData.forEach((recipe)=>recipes.push(recipe)
        );
        if (data.recipes) data.recipes.forEach((recipe)=>recipes.push(recipe)
        );
        if (!recipes.length > 0) throw new Error();
        //3)Render recipes in resultsView
        _resultsViewJsDefault.default.render(recipes);
        //4)Handle active recipe
        _helpersJs.handleActiveRecipe();
    } catch (error) {
        console.log(error);
        _resultsViewJsDefault.default.renderErrorMessage();
    }
}
function controlBookmarks(recipe, bookmarked) {
    let bookmarks;
    if (bookmarked) bookmarks = _modelJs.addBookmark(recipe);
    else bookmarks = _modelJs.removeBookmark(recipe);
    _bookmarkViewJsDefault.default.render(bookmarks);
    _helpersJs.handleActiveRecipe();
}
function controlRecipeUploads(data) {
    const recipe = _modelJs.submitRecipe(data);
    _recipeViewJsDefault.default.render(recipe);
}
(async function init() {
    _bookmarkViewJsDefault.default.render(_modelJs.getBookmarks());
    _recipeViewJsDefault.default.addHandlerRender(controlRecipes);
    _searchViewJsDefault.default.addHandlerSearch(controlQueries);
    _addRecipeViewJsDefault.default.handleAddRecipe();
    _addRecipeViewJsDefault.default.handleCloseButton();
    _addRecipeViewJsDefault.default.handleRecipeUpload(controlRecipeUploads);
    _helpersJs.handleActiveRecipe();
    _modelJs.loadUserGeneratedRecipes();
})();

},{"./helpers.js":"hGI1E","./model.js":"Y4A21","./views/recipeView.js":"l60JC","./views/searchView.js":"9OQAM","./views/resultsView.js":"cSbZE","./views/bookmarkView.js":"7YaI3","./views/addRecipeView.js":"i6DNj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRecipeIdFromHash", ()=>getRecipeIdFromHash
);
parcelHelpers.export(exports, "getJson", ()=>getJson
);
parcelHelpers.export(exports, "timeout", ()=>timeout
);
parcelHelpers.export(exports, "handleActiveRecipe", ()=>handleActiveRecipe
);
parcelHelpers.export(exports, "addActiveClassToLastBookmark", ()=>addActiveClassToLastBookmark
);
parcelHelpers.export(exports, "updateBookmarkContainerStyles", ()=>updateBookmarkContainerStyles
);
parcelHelpers.export(exports, "generateRecipeId", ()=>generateRecipeId
) // updateServings(updateTo, recipeServings = 4) {
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
    const previews = document.querySelectorAll('.preview');
    [
        'load',
        'hashchange'
    ].forEach((type)=>{
        window.addEventListener(type, function() {
            previews.forEach((preview)=>{
                preview.classList.remove('preview__link--active');
                if (preview.children[0].getAttribute('href') === window.location.hash) preview.classList.add('preview__link--active');
            });
        });
    });
}
function addActiveClassToLastBookmark() {
    const bookmarkContainer = document.querySelector('.bookmarks');
    const previews = bookmarkContainer.querySelectorAll('.preview');
    const lastElement = previews[previews.length - 1];
    console.log(lastElement);
}
function updateBookmarkContainerStyles(update) {
    height = '46rem';
    overflow = 'scroll';
    if (!update) {
        height = '';
        overflow = '';
    }
    const bookmarkContainer = document.querySelector('.bookmarks');
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
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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
parcelHelpers.export(exports, "queryRecipeById", ()=>queryRecipeById
);
parcelHelpers.export(exports, "queryRecipes", ()=>queryRecipes
);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark
);
parcelHelpers.export(exports, "removeBookmark", ()=>removeBookmark
);
parcelHelpers.export(exports, "getBookmarks", ()=>getBookmarks
);
parcelHelpers.export(exports, "submitRecipe", ()=>submitRecipe
);
parcelHelpers.export(exports, "loadUserGeneratedRecipes", ()=>loadUserGeneratedRecipes
);
parcelHelpers.export(exports, "queryUserGeneratedRecipes", ()=>queryUserGeneratedRecipes
);
var _helpers = require("./helpers");
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
            _helpers.timeout(_configJs.TIMEOUT_SEC), 
        ]);
        const data = await _helpers.getJson(response);
        const recipe = data.recipe;
        return new _recipeJsDefault.default(recipe.publisher, recipe.ingredients, recipe.source_url, recipe.recipe_id, recipe.image_url, recipe.title, false, true);
    } catch (error) {
        throw error;
    }
}
async function queryRecipes(query) {
    try {
        const response = await Promise.race([
            fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`),
            _helpers.timeout(_configJs.TIMEOUT_SEC), 
        ]);
        return _helpers.getJson(response);
    } catch (error) {
        throw error;
    }
}
function addBookmark(recipe) {
    recipe.bookmarked = true;
    bookmarks.push(recipe);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    return bookmarks;
}
function removeBookmark(recipe) {
    let position;
    for(let index in bookmarks)if (bookmarks[index].recipe_id === recipe.recipe_id) position = index;
    bookmarks.splice(position, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    return bookmarks;
}
function getBookmarks() {
    bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    if (!bookmarks || bookmarks.length < 1) return;
    console.log('Initing bookmarks...', bookmarks);
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
    const bookmarks1 = JSON.parse(localStorage.getItem('bookmarks'));
    let bookmarked = false;
    if (!bookmarks1 || !bookmarks1.length > 0) return false;
    for(let index in bookmarks1)if (bookmarks1[index].recipe_id === id) bookmarked = true;
    console.log('IsBookmarked: ', bookmarked);
    return bookmarked;
}
function submitRecipe(data) {
    const ingredients = getIngredientsArray(data);
    const recipe = new _recipeJsDefault.default(data.publisher, ingredients, data.sourceUrl, _helpers.generateRecipeId(), data.image, data.title, false, true);
    userGeneratedRecipes.push(recipe);
    localStorage.setItem('userGeneratedRecipes', JSON.stringify(userGeneratedRecipes));
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
    userGeneratedRecipes = JSON.parse(localStorage.getItem('userGeneratedRecipes'));
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

},{"./helpers":"hGI1E","./config.js":"k5Hzs","./recipe.js":"b0biP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC
);
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
var _fractionJs = require("fraction.js");
var _fractionJsDefault = parcelHelpers.interopDefault(_fractionJs);
class RecipeView extends _viewJsDefault.default {
    _parentElement = document.querySelector('.recipe');
    _errorMessage = 'Could not find a recipe with this id. Please try another one!';
    _recipe;
    _bookmarkButton;
    render(recipe) {
        if (!this._recipe) this._recipe = recipe;
        const bookmarkIcon = recipe.bookmarked ? 'icons.21bad73c.svg#icon-bookmark-fill' : 'icons.21bad73c.svg#icon-bookmark';
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
  
    <div class="recipe__user-generated" ${recipe.userGenerated ? '' : "style = 'background-color:#f9f5f3;'"}>
    ${recipe.userGenerated ? userGeneratedHTML : ''}
    </div>
    <button class="btn--round">
      <svg class="bookmark--icon ${recipe.bookmarked ? 'bookmarked' : ''}">
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
        this._parentElement.insertAdjacentHTML('afterbegin', html);
        this._recipe = recipe;
        this._bookmarkButton = document.querySelector('.btn--round');
    }
    addHandlerRender(handler) {
        [
            'load',
            'hashchange'
        ].forEach((type)=>{
            window.addEventListener(type, function(e) {
                handler(e);
            });
        });
    }
    handleBookmarks(handler) {
        const recipe = this._recipe;
        this._bookmarkButton.addEventListener('click', function(e) {
            const bookmarkButton = e.target.closest('.btn--round');
            if (bookmarkButton) {
                const icon = bookmarkButton.children[0];
                let href;
                let bookmarked = false;
                if (icon.classList.contains('bookmarked')) href = 'icons.21bad73c.svg#icon-bookmark';
                else {
                    href = 'icons.21bad73c.svg#icon-bookmark-fill';
                    bookmarked = true;
                }
                icon.classList.toggle('bookmarked');
                icon.children[0].setAttribute('href', href);
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
        }).join('');
        return html;
    }
}
exports.default = new RecipeView();

},{"./view.js":"bWlJ9","fraction.js":"iDLoJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWlJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _parentElement = '';
    _message = '';
    _errorMessage = '';
    _clean() {
        this._parentElement.innerHTML = '';
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
        this._parentElement.insertAdjacentHTML('afterbegin', html);
    }
    renderErrorMessage(icon = 'icon-alert-triangle', message = this._errorMessage) {
        const html = `<div class="error">
        <div>
          <svg>
            <use href="icons.21bad73c.svg#${icon}"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
        this._clean();
        this._parentElement.insertAdjacentHTML('afterbegin', html);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iDLoJ":[function(require,module,exports) {
/**
 * @license Fraction.js v4.2.0 05/03/2022
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/ /**
 *
 * This class offers the possibility to calculate fractions.
 * You can pass a fraction in different formats. Either as array, as double, as string or as an integer.
 *
 * Array/Object form
 * [ 0 => <nominator>, 1 => <denominator> ]
 * [ n => <nominator>, d => <denominator> ]
 *
 * Integer form
 * - Single integer value
 *
 * Double form
 * - Single double value
 *
 * String form
 * 123.456 - a simple double
 * 123/456 - a string fraction
 * 123.'456' - a double with repeating decimal places
 * 123.(456) - synonym
 * 123.45'6' - a double with repeating last place
 * 123.45(6) - synonym
 *
 * Example:
 *
 * var f = new Fraction("9.4'31'");
 * f.mul([-4, 3]).div(4.9);
 *
 */ (function(root) {
    // Maximum search depth for cyclic rational numbers. 2000 should be more than enough.
    // Example: 1/7 = 0.(142857) has 6 repeating decimal places.
    // If MAX_CYCLE_LEN gets reduced, long cycles will not be detected and toString() only gets the first 10 digits
    var MAX_CYCLE_LEN = 2000;
    // Parsed data to avoid calling "new" all the time
    var P = {
        "s": 1,
        "n": 0,
        "d": 1
    };
    function assign(n, s) {
        if (isNaN(n = parseInt(n, 10))) throw Fraction['InvalidParameter'];
        return n * s;
    }
    // Creates a new Fraction internally without the need of the bulky constructor
    function newFraction(n, d) {
        if (d === 0) throw Fraction['DivisionByZero'];
        var f = Object.create(Fraction.prototype);
        f["s"] = n < 0 ? -1 : 1;
        n = n < 0 ? -n : n;
        var a = gcd(n, d);
        f["n"] = n / a;
        f["d"] = d / a;
        return f;
    }
    function factorize(num) {
        var factors = {};
        var n = num;
        var i = 2;
        var s = 4;
        while(s <= n){
            while(n % i === 0){
                n /= i;
                factors[i] = (factors[i] || 0) + 1;
            }
            s += 1 + 2 * i++;
        }
        if (n !== num) {
            if (n > 1) factors[n] = (factors[n] || 0) + 1;
        } else factors[num] = (factors[num] || 0) + 1;
        return factors;
    }
    var parse = function(p1, p2) {
        var n = 0, d = 1, s = 1;
        var v = 0, w = 0, x = 0, y = 1, z = 1;
        var A = 0, B = 1;
        var C = 1, D = 1;
        var N = 10000000;
        var M;
        if (p1 === undefined || p1 === null) ;
        else if (p2 !== undefined) {
            n = p1;
            d = p2;
            s = n * d;
            if (n % 1 !== 0 || d % 1 !== 0) throw Fraction['NonIntegerParameter'];
        } else switch(typeof p1){
            case "object":
                if ("d" in p1 && "n" in p1) {
                    n = p1["n"];
                    d = p1["d"];
                    if ("s" in p1) n *= p1["s"];
                } else if (0 in p1) {
                    n = p1[0];
                    if (1 in p1) d = p1[1];
                } else throw Fraction['InvalidParameter'];
                s = n * d;
                break;
            case "number":
                if (p1 < 0) {
                    s = p1;
                    p1 = -p1;
                }
                if (p1 % 1 === 0) n = p1;
                else if (p1 > 0) {
                    if (p1 >= 1) {
                        z = Math.pow(10, Math.floor(1 + Math.log(p1) / Math.LN10));
                        p1 /= z;
                    }
                    // Using Farey Sequences
                    // http://www.johndcook.com/blog/2010/10/20/best-rational-approximation/
                    while(B <= N && D <= N){
                        M = (A + C) / (B + D);
                        if (p1 === M) {
                            if (B + D <= N) {
                                n = A + C;
                                d = B + D;
                            } else if (D > B) {
                                n = C;
                                d = D;
                            } else {
                                n = A;
                                d = B;
                            }
                            break;
                        } else {
                            if (p1 > M) {
                                A += C;
                                B += D;
                            } else {
                                C += A;
                                D += B;
                            }
                            if (B > N) {
                                n = C;
                                d = D;
                            } else {
                                n = A;
                                d = B;
                            }
                        }
                    }
                    n *= z;
                } else if (isNaN(p1) || isNaN(p2)) d = n = NaN;
                break;
            case "string":
                B = p1.match(/\d+|./g);
                if (B === null) throw Fraction['InvalidParameter'];
                if (B[A] === '-') {
                    s = -1;
                    A++;
                } else if (B[A] === '+') A++;
                if (B.length === A + 1) w = assign(B[A++], s);
                else if (B[A + 1] === '.' || B[A] === '.') {
                    if (B[A] !== '.') v = assign(B[A++], s);
                    A++;
                    // Check for decimal places
                    if (A + 1 === B.length || B[A + 1] === '(' && B[A + 3] === ')' || B[A + 1] === "'" && B[A + 3] === "'") {
                        w = assign(B[A], s);
                        y = Math.pow(10, B[A].length);
                        A++;
                    }
                    // Check for repeating places
                    if (B[A] === '(' && B[A + 2] === ')' || B[A] === "'" && B[A + 2] === "'") {
                        x = assign(B[A + 1], s);
                        z = Math.pow(10, B[A + 1].length) - 1;
                        A += 3;
                    }
                } else if (B[A + 1] === '/' || B[A + 1] === ':') {
                    w = assign(B[A], s);
                    y = assign(B[A + 2], 1);
                    A += 3;
                } else if (B[A + 3] === '/' && B[A + 1] === ' ') {
                    v = assign(B[A], s);
                    w = assign(B[A + 2], s);
                    y = assign(B[A + 4], 1);
                    A += 5;
                }
                if (B.length <= A) {
                    d = y * z;
                    s = /* void */ n = x + d * v + z * w;
                    break;
                }
            default:
                throw Fraction['InvalidParameter'];
        }
        if (d === 0) throw Fraction['DivisionByZero'];
        P["s"] = s < 0 ? -1 : 1;
        P["n"] = Math.abs(n);
        P["d"] = Math.abs(d);
    };
    function modpow(b, e, m) {
        var r = 1;
        for(; e > 0; b = b * b % m, e >>= 1)if (e & 1) r = r * b % m;
        return r;
    }
    function cycleLen(n, d) {
        for(; d % 2 === 0; d /= 2);
        for(; d % 5 === 0; d /= 5);
        if (d === 1) return 0;
        // If we would like to compute really large numbers quicker, we could make use of Fermat's little theorem:
        // 10^(d-1) % d == 1
        // However, we don't need such large numbers and MAX_CYCLE_LEN should be the capstone,
        // as we want to translate the numbers to strings.
        var rem = 10 % d;
        var t = 1;
        for(; rem !== 1; t++){
            rem = rem * 10 % d;
            if (t > MAX_CYCLE_LEN) return 0; // Returning 0 here means that we don't print it as a cyclic number. It's likely that the answer is `d-1`
        }
        return t;
    }
    function cycleStart(n, d, len) {
        var rem1 = 1;
        var rem2 = modpow(10, len, d);
        for(var t = 0; t < 300; t++){
            // Solve 10^s == 10^(s+t) (mod d)
            if (rem1 === rem2) return t;
            rem1 = rem1 * 10 % d;
            rem2 = rem2 * 10 % d;
        }
        return 0;
    }
    function gcd(a, b) {
        if (!a) return b;
        if (!b) return a;
        while(true){
            a %= b;
            if (!a) return b;
            b %= a;
            if (!b) return a;
        }
    }
    /**
   * Module constructor
   *
   * @constructor
   * @param {number|Fraction=} a
   * @param {number=} b
   */ function Fraction(a, b) {
        parse(a, b);
        if (this instanceof Fraction) {
            a = gcd(P["d"], P["n"]); // Abuse variable a
            this["s"] = P["s"];
            this["n"] = P["n"] / a;
            this["d"] = P["d"] / a;
        } else return newFraction(P['s'] * P['n'], P['d']);
    }
    Fraction['DivisionByZero'] = new Error("Division by Zero");
    Fraction['InvalidParameter'] = new Error("Invalid argument");
    Fraction['NonIntegerParameter'] = new Error("Parameters must be integer");
    Fraction.prototype = {
        "s": 1,
        "n": 0,
        "d": 1,
        /**
     * Calculates the absolute value
     *
     * Ex: new Fraction(-4).abs() => 4
     **/ "abs": function() {
            return newFraction(this["n"], this["d"]);
        },
        /**
     * Inverts the sign of the current fraction
     *
     * Ex: new Fraction(-4).neg() => 4
     **/ "neg": function() {
            return newFraction(-this["s"] * this["n"], this["d"]);
        },
        /**
     * Adds two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
     **/ "add": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * this["n"] * P["d"] + P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
        },
        /**
     * Subtracts two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
     **/ "sub": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * this["n"] * P["d"] - P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
        },
        /**
     * Multiplies two rational numbers
     *
     * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
     **/ "mul": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * P["s"] * this["n"] * P["n"], this["d"] * P["d"]);
        },
        /**
     * Divides two rational numbers
     *
     * Ex: new Fraction("-17.(345)").inverse().div(3)
     **/ "div": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * P["s"] * this["n"] * P["d"], this["d"] * P["n"]);
        },
        /**
     * Clones the actual object
     *
     * Ex: new Fraction("-17.(345)").clone()
     **/ "clone": function() {
            return newFraction(this['s'] * this['n'], this['d']);
        },
        /**
     * Calculates the modulo of two rational numbers - a more precise fmod
     *
     * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
     **/ "mod": function(a, b) {
            if (isNaN(this['n']) || isNaN(this['d'])) return new Fraction(NaN);
            if (a === undefined) return newFraction(this["s"] * this["n"] % this["d"], 1);
            parse(a, b);
            if (0 === P["n"] && 0 === this["d"]) throw Fraction['DivisionByZero'];
            /*
       * First silly attempt, kinda slow
       *
       return that["sub"]({
       "n": num["n"] * Math.floor((this.n / this.d) / (num.n / num.d)),
       "d": num["d"],
       "s": this["s"]
       });*/ /*
       * New attempt: a1 / b1 = a2 / b2 * q + r
       * => b2 * a1 = a2 * b1 * q + b1 * b2 * r
       * => (b2 * a1 % a2 * b1) / (b1 * b2)
       */ return newFraction(this["s"] * (P["d"] * this["n"]) % (P["n"] * this["d"]), P["d"] * this["d"]);
        },
        /**
     * Calculates the fractional gcd of two rational numbers
     *
     * Ex: new Fraction(5,8).gcd(3,7) => 1/56
     */ "gcd": function(a, b) {
            parse(a, b);
            // gcd(a / b, c / d) = gcd(a, c) / lcm(b, d)
            return newFraction(gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]), P["d"] * this["d"]);
        },
        /**
     * Calculates the fractional lcm of two rational numbers
     *
     * Ex: new Fraction(5,8).lcm(3,7) => 15
     */ "lcm": function(a, b) {
            parse(a, b);
            // lcm(a / b, c / d) = lcm(a, c) / gcd(b, d)
            if (P["n"] === 0 && this["n"] === 0) return newFraction(0, 1);
            return newFraction(P["n"] * this["n"], gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]));
        },
        /**
     * Calculates the ceil of a rational number
     *
     * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
     **/ "ceil": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) return new Fraction(NaN);
            return newFraction(Math.ceil(places * this["s"] * this["n"] / this["d"]), places);
        },
        /**
     * Calculates the floor of a rational number
     *
     * Ex: new Fraction('4.(3)').floor() => (4 / 1)
     **/ "floor": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) return new Fraction(NaN);
            return newFraction(Math.floor(places * this["s"] * this["n"] / this["d"]), places);
        },
        /**
     * Rounds a rational numbers
     *
     * Ex: new Fraction('4.(3)').round() => (4 / 1)
     **/ "round": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) return new Fraction(NaN);
            return newFraction(Math.round(places * this["s"] * this["n"] / this["d"]), places);
        },
        /**
     * Gets the inverse of the fraction, means numerator and denominator are exchanged
     *
     * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
     **/ "inverse": function() {
            return newFraction(this["s"] * this["d"], this["n"]);
        },
        /**
     * Calculates the fraction to some rational exponent, if possible
     *
     * Ex: new Fraction(-1,2).pow(-3) => -8
     */ "pow": function(a, b) {
            parse(a, b);
            // Trivial case when exp is an integer
            if (P['d'] === 1) {
                if (P['s'] < 0) return newFraction(Math.pow(this['s'] * this["d"], P['n']), Math.pow(this["n"], P['n']));
                else return newFraction(Math.pow(this['s'] * this["n"], P['n']), Math.pow(this["d"], P['n']));
            }
            // Negative roots become complex
            //     (-a/b)^(c/d) = x
            // <=> (-1)^(c/d) * (a/b)^(c/d) = x
            // <=> (cos(pi) + i*sin(pi))^(c/d) * (a/b)^(c/d) = x         # rotate 1 by 180°
            // <=> (cos(c*pi/d) + i*sin(c*pi/d)) * (a/b)^(c/d) = x       # DeMoivre's formula in Q ( https://proofwiki.org/wiki/De_Moivre%27s_Formula/Rational_Index )
            // From which follows that only for c=0 the root is non-complex. c/d is a reduced fraction, so that sin(c/dpi)=0 occurs for d=1, which is handled by our trivial case.
            if (this['s'] < 0) return null;
            // Now prime factor n and d
            var N = factorize(this['n']);
            var D = factorize(this['d']);
            // Exponentiate and take root for n and d individually
            var n = 1;
            var d = 1;
            for(var k in N){
                if (k === '1') continue;
                if (k === '0') {
                    n = 0;
                    break;
                }
                N[k] *= P['n'];
                if (N[k] % P['d'] === 0) N[k] /= P['d'];
                else return null;
                n *= Math.pow(k, N[k]);
            }
            for(var k in D){
                if (k === '1') continue;
                D[k] *= P['n'];
                if (D[k] % P['d'] === 0) D[k] /= P['d'];
                else return null;
                d *= Math.pow(k, D[k]);
            }
            if (P['s'] < 0) return newFraction(d, n);
            return newFraction(n, d);
        },
        /**
     * Check if two rational numbers are the same
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/ "equals": function(a, b) {
            parse(a, b);
            return this["s"] * this["n"] * P["d"] === P["s"] * P["n"] * this["d"]; // Same as compare() === 0
        },
        /**
     * Check if two rational numbers are the same
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/ "compare": function(a, b) {
            parse(a, b);
            var t = this["s"] * this["n"] * P["d"] - P["s"] * P["n"] * this["d"];
            return (0 < t) - (t < 0);
        },
        "simplify": function(eps) {
            if (isNaN(this['n']) || isNaN(this['d'])) return this;
            eps = eps || 0.001;
            var thisABS = this['abs']();
            var cont = thisABS['toContinued']();
            for(var i = 1; i < cont.length; i++){
                var s = newFraction(cont[i - 1], 1);
                for(var k = i - 2; k >= 0; k--)s = s['inverse']()['add'](cont[k]);
                if (s['sub'](thisABS)['abs']().valueOf() < eps) return s['mul'](this['s']);
            }
            return this;
        },
        /**
     * Check if two rational numbers are divisible
     *
     * Ex: new Fraction(19.6).divisible(1.5);
     */ "divisible": function(a, b) {
            parse(a, b);
            return !(!(P["n"] * this["d"]) || this["n"] * P["d"] % (P["n"] * this["d"]));
        },
        /**
     * Returns a decimal representation of the fraction
     *
     * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
     **/ 'valueOf': function() {
            return this["s"] * this["n"] / this["d"];
        },
        /**
     * Returns a string-fraction representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toFraction(true) => "4 1/3"
     **/ 'toFraction': function(excludeWhole) {
            var whole, str = "";
            var n = this["n"];
            var d = this["d"];
            if (this["s"] < 0) str += '-';
            if (d === 1) str += n;
            else {
                if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
                    str += whole;
                    str += " ";
                    n %= d;
                }
                str += n;
                str += '/';
                str += d;
            }
            return str;
        },
        /**
     * Returns a latex representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
     **/ 'toLatex': function(excludeWhole) {
            var whole, str = "";
            var n = this["n"];
            var d = this["d"];
            if (this["s"] < 0) str += '-';
            if (d === 1) str += n;
            else {
                if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
                    str += whole;
                    n %= d;
                }
                str += "\\frac{";
                str += n;
                str += '}{';
                str += d;
                str += '}';
            }
            return str;
        },
        /**
     * Returns an array of continued fraction elements
     *
     * Ex: new Fraction("7/8").toContinued() => [0,1,7]
     */ 'toContinued': function() {
            var t;
            var a = this['n'];
            var b = this['d'];
            var res = [];
            if (isNaN(a) || isNaN(b)) return res;
            do {
                res.push(Math.floor(a / b));
                t = a % b;
                a = b;
                b = t;
            }while (a !== 1)
            return res;
        },
        /**
     * Creates a string representation of a fraction with all digits
     *
     * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
     **/ 'toString': function(dec) {
            var N = this["n"];
            var D = this["d"];
            if (isNaN(N) || isNaN(D)) return "NaN";
            dec = dec || 15; // 15 = decimal places when no repetation
            var cycLen = cycleLen(N, D); // Cycle length
            var cycOff = cycleStart(N, D, cycLen); // Cycle start
            var str = this['s'] < 0 ? "-" : "";
            str += N / D | 0;
            N %= D;
            N *= 10;
            if (N) str += ".";
            if (cycLen) {
                for(var i = cycOff; i--;){
                    str += N / D | 0;
                    N %= D;
                    N *= 10;
                }
                str += "(";
                for(var i = cycLen; i--;){
                    str += N / D | 0;
                    N %= D;
                    N *= 10;
                }
                str += ")";
            } else for(var i = dec; N && i--;){
                str += N / D | 0;
                N %= D;
                N *= 10;
            }
            return str;
        }
    };
    if (typeof define === "function" && define["amd"]) define([], function() {
        return Fraction;
    });
    else {
        Object.defineProperty(Fraction, "__esModule", {
            'value': true
        });
        Fraction['default'] = Fraction;
        Fraction['Fraction'] = Fraction;
        module['exports'] = Fraction;
    }
})(this);

},{}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class SearchView extends _viewJsDefault.default {
    _parentElement = document.querySelector('.search');
    addHandlerSearch(handler) {
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        });
    }
    getquery() {
        const query = this._parentElement.querySelector('.search__field').value;
        this._parentElement.querySelector('.search__field').value = '';
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
class ResultsView extends _viewJsDefault.default {
    //'Comming' from View
    _parentElement = document.querySelector('.results');
    _errorMessage = 'Could not find any recipe for that query. Please try another one ;)';
    _paginationButtons = '';
    _recipes;
    _totalPages;
    _currentPage;
    render(recipes) {
        let html = '';
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
        this._parentElement.insertAdjacentHTML('afterbegin', html);
    }
    _calculatePagination() {
        const pages = Math.ceil(this._recipes.length / 10);
        return pages;
    }
    _handlePagination() {
        const resultsView = this;
        this._paginationButtons.forEach((button)=>{
            button.addEventListener('click', function(e) {
                if (e.target.closest('.btn--inline').classList.contains('pagination__btn--prev')) resultsView._currentPage--;
                else if (e.target.closest('.btn--inline').classList.contains('pagination__btn--next')) resultsView._currentPage++;
                resultsView.render(resultsView._recipes);
            });
        });
    }
    _generatePaginationButtons() {
        const pagination = document.querySelector('.pagination');
        let html = '';
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
        pagination.innerHTML = '';
        pagination.insertAdjacentHTML('afterbegin', html);
        this._paginationButtons = document.querySelectorAll('.btn--inline');
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
        document.querySelector('.pagination').innerHTML = '';
    }
}
exports.default = new ResultsView();

},{"./view.js":"bWlJ9","./recipePreviewGenerator.js":"iWr9s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iWr9s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateRecipePreviewHTML", ()=>generateRecipePreviewHTML
);
function generateRecipePreviewHTML(recipes) {
    if (!recipes) return '';
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
    }).join('');
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7YaI3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _recipePreviewGeneratorJs = require("./recipePreviewGenerator.js");
var _helpersJs = require("../helpers.js");
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class BookmarkView extends _viewJsDefault.default {
    _parentElement = document.querySelector('.bookmarks__list');
    _message = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
    render(bookmarks) {
        const html = _recipePreviewGeneratorJs.generateRecipePreviewHTML(bookmarks);
        this._clean();
        this._parentElement.insertAdjacentHTML('afterbegin', html);
        //Rendering message if theres no bookmark
        if (!bookmarks || bookmarks.length === 0) this.renderErrorMessage('icon-smile', this._message);
        //Checking bookmark length to implement the scroll bar
        if (bookmarks && bookmarks.length >= 5) _helpersJs.updateBookmarkContainerStyles(true);
        else _helpersJs.updateBookmarkContainerStyles(false);
        //adding active class to the last bookmark added
        let count = 0;
        if (count != 0) _helpersJs.addActiveClassToLastBookmark();
        count = count + 1;
        console.log(count);
    }
}
exports.default = new BookmarkView();

},{"./recipePreviewGenerator.js":"iWr9s","../helpers.js":"hGI1E","./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6DNj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class AddRecipeView {
    _parentElement = document.querySelector('.add-recipe-window');
    handleAddRecipe() {
        const button = document.querySelector('.nav__btn--add-recipe');
        const addRecipeWindow = this._parentElement;
        const overlay = document.querySelector('.overlay');
        button.addEventListener('click', function(e) {
            addRecipeWindow.classList.toggle('hidden');
            overlay.classList.toggle('hidden');
        });
    }
    handleCloseButton() {
        const closeButton = document.querySelector('.btn--close-modal');
        const form = this._parentElement;
        const overlay = document.querySelector('.overlay');
        [
            closeButton,
            overlay
        ].forEach((element)=>{
            element.addEventListener('click', function(e) {
                form.classList.toggle('hidden');
                overlay.classList.toggle('hidden');
            });
        });
    }
    _clearInputs() {
        const inputs = this._parentElement.querySelectorAll('input');
        inputs.forEach((input)=>{
            input.value = '';
        });
    }
    handleRecipeUpload(handler) {
        const addRecipeWindow = this._parentElement;
        const overlay = document.querySelector('.overlay');
        const form = this._parentElement;
        addRecipeWindow.querySelector('.upload').addEventListener('submit', function(e) {
            const data = Object.fromEntries(new FormData(e.target).entries());
            e.preventDefault();
            form.classList.add('hidden');
            overlay.classList.add('hidden');
            handler(data);
        });
    }
}
exports.default = new AddRecipeView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ddCAb","aenu9"], "aenu9", "parcelRequire3a11")

//# sourceMappingURL=index.e37f48ea.js.map
