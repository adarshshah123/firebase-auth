module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if (Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isNativeFunction; });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _wrapNativeSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !Object(_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return Object(_construct_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Class, arguments, Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/@firebase/app/dist/esm/index.esm2017.js":
/*!**************************************************************!*\
  !*** ./node_modules/@firebase/app/dist/esm/index.esm2017.js ***!
  \**************************************************************/
/*! exports provided: FirebaseError, SDK_VERSION, _DEFAULT_ENTRY_NAME, _addComponent, _addOrOverwriteComponent, _apps, _clearComponents, _components, _getProvider, _registerComponent, _removeServiceInstance, deleteApp, getApp, getApps, initializeApp, onLog, registerVersion, setLogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return SDK_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_DEFAULT_ENTRY_NAME", function() { return DEFAULT_ENTRY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_addComponent", function() { return _addComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_addOrOverwriteComponent", function() { return _addOrOverwriteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_apps", function() { return _apps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_clearComponents", function() { return _clearComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_components", function() { return _components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getProvider", function() { return _getProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_registerComponent", function() { return _registerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_removeServiceInstance", function() { return _removeServiceInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteApp", function() { return deleteApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApp", function() { return getApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApps", function() { return getApps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return initializeApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLog", function() { return onLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerVersion", function() { return registerVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogLevel", function() { return setLogLevel; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirebaseError", function() { return _firebase_util__WEBPACK_IMPORTED_MODULE_5__["FirebaseError"]; });




var _PLATFORM_LOG_STRING, _ERRORS;



function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





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

var PlatformLoggerServiceImpl = /*#__PURE__*/function () {
  function PlatformLoggerServiceImpl(container) {
    this.container = container;
  } // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.


  var _proto = PlatformLoggerServiceImpl.prototype;

  _proto.getPlatformInfoString = function getPlatformInfoString() {
    var providers = this.container.getProviders(); // Loop through providers and get library/version pairs from any that are
    // version components.

    return providers.map(function (provider) {
      if (isVersionServiceProvider(provider)) {
        var service = provider.getImmediate();
        return service.library + "/" + service.version;
      } else {
        return null;
      }
    }).filter(function (logString) {
      return logString;
    }).join(' ');
  };

  return PlatformLoggerServiceImpl;
}();
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */


function isVersionServiceProvider(provider) {
  var component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION"
  /* VERSION */
  ;
}

var name$o = "@firebase/app";
var version$1 = "0.7.16";
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

var logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"]('@firebase/app');
var name$n = "@firebase/app-compat";
var name$m = "@firebase/analytics-compat";
var name$l = "@firebase/analytics";
var name$k = "@firebase/app-check-compat";
var name$j = "@firebase/app-check";
var name$i = "@firebase/auth";
var name$h = "@firebase/auth-compat";
var name$g = "@firebase/database";
var name$f = "@firebase/database-compat";
var name$e = "@firebase/functions";
var name$d = "@firebase/functions-compat";
var name$c = "@firebase/installations";
var name$b = "@firebase/installations-compat";
var name$a = "@firebase/messaging";
var name$9 = "@firebase/messaging-compat";
var name$8 = "@firebase/performance";
var name$7 = "@firebase/performance-compat";
var name$6 = "@firebase/remote-config";
var name$5 = "@firebase/remote-config-compat";
var name$4 = "@firebase/storage";
var name$3 = "@firebase/storage-compat";
var name$2 = "@firebase/firestore";
var name$1 = "@firebase/firestore-compat";
var name = "firebase";
var version = "9.6.6";
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
 * The default app name
 *
 * @internal
 */

var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_PLATFORM_LOG_STRING = {}, _PLATFORM_LOG_STRING[name$o] = 'fire-core', _PLATFORM_LOG_STRING[name$n] = 'fire-core-compat', _PLATFORM_LOG_STRING[name$l] = 'fire-analytics', _PLATFORM_LOG_STRING[name$m] = 'fire-analytics-compat', _PLATFORM_LOG_STRING[name$j] = 'fire-app-check', _PLATFORM_LOG_STRING[name$k] = 'fire-app-check-compat', _PLATFORM_LOG_STRING[name$i] = 'fire-auth', _PLATFORM_LOG_STRING[name$h] = 'fire-auth-compat', _PLATFORM_LOG_STRING[name$g] = 'fire-rtdb', _PLATFORM_LOG_STRING[name$f] = 'fire-rtdb-compat', _PLATFORM_LOG_STRING[name$e] = 'fire-fn', _PLATFORM_LOG_STRING[name$d] = 'fire-fn-compat', _PLATFORM_LOG_STRING[name$c] = 'fire-iid', _PLATFORM_LOG_STRING[name$b] = 'fire-iid-compat', _PLATFORM_LOG_STRING[name$a] = 'fire-fcm', _PLATFORM_LOG_STRING[name$9] = 'fire-fcm-compat', _PLATFORM_LOG_STRING[name$8] = 'fire-perf', _PLATFORM_LOG_STRING[name$7] = 'fire-perf-compat', _PLATFORM_LOG_STRING[name$6] = 'fire-rc', _PLATFORM_LOG_STRING[name$5] = 'fire-rc-compat', _PLATFORM_LOG_STRING[name$4] = 'fire-gcs', _PLATFORM_LOG_STRING[name$3] = 'fire-gcs-compat', _PLATFORM_LOG_STRING[name$2] = 'fire-fst', _PLATFORM_LOG_STRING[name$1] = 'fire-fst-compat', _PLATFORM_LOG_STRING['fire-js'] = 'fire-js', _PLATFORM_LOG_STRING[name] = 'fire-js-all', _PLATFORM_LOG_STRING);
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
 * @internal
 */

var _apps = new Map();
/**
 * Registered components.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any


var _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */


function _addComponent(app, component) {
  try {
    app.container.addComponent(component);
  } catch (e) {
    logger.debug("Component " + component.name + " failed to register with FirebaseApp " + app.name, e);
  }
}
/**
 *
 * @internal
 */


function _addOrOverwriteComponent(app, component) {
  app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */


function _registerComponent(component) {
  var componentName = component.name;

  if (_components.has(componentName)) {
    logger.debug("There were multiple attempts to register component " + componentName + ".");
    return false;
  }

  _components.set(componentName, component); // add the component to existing app instances


  for (var _iterator = _createForOfIteratorHelperLoose(_apps.values()), _step; !(_step = _iterator()).done;) {
    var app = _step.value;

    _addComponent(app, component);
  }

  return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */


function _getProvider(app, name) {
  return app.container.getProvider(name);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */


function _removeServiceInstance(app, name, instanceIdentifier) {
  if (instanceIdentifier === void 0) {
    instanceIdentifier = DEFAULT_ENTRY_NAME;
  }

  _getProvider(app, name).clearInstance(instanceIdentifier);
}
/**
 * Test only
 *
 * @internal
 */


function _clearComponents() {
  _components.clear();
}
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


var ERRORS = (_ERRORS = {}, _ERRORS["no-app"
/* NO_APP */
] = "No Firebase App '{$appName}' has been created - " + 'call Firebase App.initializeApp()', _ERRORS["bad-app-name"
/* BAD_APP_NAME */
] = "Illegal App name: '{$appName}", _ERRORS["duplicate-app"
/* DUPLICATE_APP */
] = "Firebase App named '{$appName}' already exists with different options or config", _ERRORS["app-deleted"
/* APP_DELETED */
] = "Firebase App named '{$appName}' already deleted", _ERRORS["invalid-app-argument"
/* INVALID_APP_ARGUMENT */
] = 'firebase.{$appName}() takes either no argument or a ' + 'Firebase App instance.', _ERRORS["invalid-log-argument"
/* INVALID_LOG_ARGUMENT */
] = 'First argument to `onLog` must be null or a function.', _ERRORS);
var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_5__["ErrorFactory"]('app', 'Firebase', ERRORS);
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

var FirebaseAppImpl = /*#__PURE__*/function () {
  function FirebaseAppImpl(options, config, container) {
    var _this = this;

    this._isDeleted = false;
    this._options = Object.assign({}, options);
    this._config = Object.assign({}, config);
    this._name = config.name;
    this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
    this._container = container;
    this.container.addComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_3__["Component"]('app', function () {
      return _this;
    }, "PUBLIC"
    /* PUBLIC */
    ));
  }

  var _proto2 = FirebaseAppImpl.prototype;

  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */
  _proto2.checkDestroyed = function checkDestroyed() {
    if (this.isDeleted) {
      throw ERROR_FACTORY.create("app-deleted"
      /* APP_DELETED */
      , {
        appName: this._name
      });
    }
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FirebaseAppImpl, [{
    key: "automaticDataCollectionEnabled",
    get: function get() {
      this.checkDestroyed();
      return this._automaticDataCollectionEnabled;
    },
    set: function set(val) {
      this.checkDestroyed();
      this._automaticDataCollectionEnabled = val;
    }
  }, {
    key: "name",
    get: function get() {
      this.checkDestroyed();
      return this._name;
    }
  }, {
    key: "options",
    get: function get() {
      this.checkDestroyed();
      return this._options;
    }
  }, {
    key: "config",
    get: function get() {
      this.checkDestroyed();
      return this._config;
    }
  }, {
    key: "container",
    get: function get() {
      return this._container;
    }
  }, {
    key: "isDeleted",
    get: function get() {
      return this._isDeleted;
    },
    set: function set(val) {
      this._isDeleted = val;
    }
  }]);

  return FirebaseAppImpl;
}();
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
 * The current SDK version.
 *
 * @public
 */


var SDK_VERSION = version;

function initializeApp(options, rawConfig) {
  if (rawConfig === void 0) {
    rawConfig = {};
  }

  if (typeof rawConfig !== 'object') {
    var _name = rawConfig;
    rawConfig = {
      name: _name
    };
  }

  var config = Object.assign({
    name: DEFAULT_ENTRY_NAME,
    automaticDataCollectionEnabled: false
  }, rawConfig);
  var name = config.name;

  if (typeof name !== 'string' || !name) {
    throw ERROR_FACTORY.create("bad-app-name"
    /* BAD_APP_NAME */
    , {
      appName: String(name)
    });
  }

  var existingApp = _apps.get(name);

  if (existingApp) {
    // return the existing app if options and config deep equal the ones in the existing app.
    if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["deepEqual"])(options, existingApp.options) && Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["deepEqual"])(config, existingApp.config)) {
      return existingApp;
    } else {
      throw ERROR_FACTORY.create("duplicate-app"
      /* DUPLICATE_APP */
      , {
        appName: name
      });
    }
  }

  var container = new _firebase_component__WEBPACK_IMPORTED_MODULE_3__["ComponentContainer"](name);

  for (var _iterator2 = _createForOfIteratorHelperLoose(_components.values()), _step2; !(_step2 = _iterator2()).done;) {
    var component = _step2.value;
    container.addComponent(component);
  }

  var newApp = new FirebaseAppImpl(options, config, container);

  _apps.set(name, newApp);

  return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */


function getApp(name) {
  if (name === void 0) {
    name = DEFAULT_ENTRY_NAME;
  }

  var app = _apps.get(name);

  if (!app) {
    throw ERROR_FACTORY.create("no-app"
    /* NO_APP */
    , {
      appName: name
    });
  }

  return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */


function getApps() {
  return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */


function deleteApp(_x) {
  return _deleteApp.apply(this, arguments);
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */


function _deleteApp() {
  _deleteApp = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(app) {
    var name;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            name = app.name;

            if (!_apps.has(name)) {
              _context.next = 6;
              break;
            }

            _apps["delete"](name);

            _context.next = 5;
            return Promise.all(app.container.getProviders().map(function (provider) {
              return provider["delete"]();
            }));

          case 5:
            app.isDeleted = true;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _deleteApp.apply(this, arguments);
}

function registerVersion(libraryKeyOrName, version, variant) {
  var _a; // TODO: We can use this check to whitelist strings when/if we set up
  // a good whitelist system.


  var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;

  if (variant) {
    library += "-" + variant;
  }

  var libraryMismatch = library.match(/\s|\//);
  var versionMismatch = version.match(/\s|\//);

  if (libraryMismatch || versionMismatch) {
    var warning = ["Unable to register library \"" + library + "\" with version \"" + version + "\":"];

    if (libraryMismatch) {
      warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
    }

    if (libraryMismatch && versionMismatch) {
      warning.push('and');
    }

    if (versionMismatch) {
      warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
    }

    logger.warn(warning.join(' '));
    return;
  }

  _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_3__["Component"](library + "-version", function () {
    return {
      library: library,
      version: version
    };
  }, "VERSION"
  /* VERSION */
  ));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */


function onLog(logCallback, options) {
  if (logCallback !== null && typeof logCallback !== 'function') {
    throw ERROR_FACTORY.create("invalid-log-argument"
    /* INVALID_LOG_ARGUMENT */
    );
  }

  Object(_firebase_logger__WEBPACK_IMPORTED_MODULE_4__["setUserLogHandler"])(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */


function setLogLevel(logLevel) {
  Object(_firebase_logger__WEBPACK_IMPORTED_MODULE_4__["setLogLevel"])(logLevel);
}
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


function registerCoreComponents(variant) {
  _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_3__["Component"]('platform-logger', function (container) {
    return new PlatformLoggerServiceImpl(container);
  }, "PRIVATE"
  /* PRIVATE */
  )); // Register `app` package.


  registerVersion(name$o, version$1, variant); // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation

  registerVersion(name$o, version$1, 'esm2017'); // Register platform SDK identifier (no version).

  registerVersion('fire-js', '');
}
/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */


registerCoreComponents('');


/***/ }),

/***/ "./node_modules/@firebase/auth/dist/esm2017/index-342f2197.js":
/*!********************************************************************!*\
  !*** ./node_modules/@firebase/auth/dist/esm2017/index-342f2197.js ***!
  \********************************************************************/
/*! exports provided: $, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, a, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return sendPasswordResetEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return ActionCodeOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return prodErrorMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return initializeAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return connectAuthEmulator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return FactorId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return AuthCredential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return EmailAuthCredential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return OAuthCredential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return PhoneAuthCredential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return inMemoryPersistence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return EmailAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return FacebookAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return GoogleAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return OperationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return PhoneAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return GithubAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return RecaptchaVerifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SignInMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return OAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return SAMLAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return TwitterAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return signInAnonymously; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return signInWithCredential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return linkWithCredential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return reauthenticateWithCredential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return signInWithCustomToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return browserSessionPersistence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a0", function() { return confirmPasswordReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a1", function() { return applyActionCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a2", function() { return checkActionCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a3", function() { return verifyPasswordResetCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a4", function() { return createUserWithEmailAndPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a5", function() { return signInWithEmailAndPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a6", function() { return sendSignInLinkToEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a7", function() { return isSignInWithEmailLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a8", function() { return signInWithEmailLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a9", function() { return fetchSignInMethodsForEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aA", function() { return _getRedirectResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aB", function() { return _clearRedirectOutcomes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aC", function() { return _castAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aD", function() { return UserImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aE", function() { return AuthImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aF", function() { return _getClientVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aG", function() { return _generateEventId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aH", function() { return AuthPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aI", function() { return FetchProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aJ", function() { return SAMLAuthCredential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aa", function() { return sendEmailVerification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return verifyBeforeUpdateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ac", function() { return ActionCodeURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ad", function() { return parseActionCodeURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ae", function() { return updateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "af", function() { return updateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ag", function() { return updatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ah", function() { return getIdToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ai", function() { return _getIdTokenResult2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aj", function() { return unlink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ak", function() { return getAdditionalUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "al", function() { return _reload2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "am", function() { return getMultiFactorResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "an", function() { return multiFactor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ao", function() { return _isIOS7Or8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ap", function() { return debugAssert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aq", function() { return _isIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ar", function() { return _isAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "as", function() { return _fail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "at", function() { return _getRedirectUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "au", function() { return _getProjectConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "av", function() { return _createError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aw", function() { return _assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ax", function() { return _getInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ay", function() { return _persistenceKeyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "az", function() { return AuthEventManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return browserLocalPersistence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return signInWithPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return linkWithPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return reauthenticateWithPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return signInWithRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return linkWithRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return reauthenticateWithRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return indexedDBLocalPersistence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getRedirectResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return browserPopupRedirectResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return linkWithPhoneNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return PhoneMultiFactorGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return ProviderId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return setPersistence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return onIdTokenChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return reauthenticateWithPhoneNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return signInWithPhoneNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return onAuthStateChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return updatePhoneNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return useDeviceLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return updateCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return signOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return debugErrorMap; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/esm/index.esm2017.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/esm/index.esm2017.js");





var _SERVER_ERROR_MAP, _VERIFY_PHONE_NUMBER_;

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







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
 * An enum of factors that may be used for multifactor authentication.
 *
 * @public
 */

var FactorId = {
  /** Phone as second factor */
  PHONE: 'phone'
};
/**
 * Enumeration of supported providers.
 *
 * @public
 */

var ProviderId = {
  /** Facebook provider ID */
  FACEBOOK: 'facebook.com',

  /** GitHub provider ID */
  GITHUB: 'github.com',

  /** Google provider ID */
  GOOGLE: 'google.com',

  /** Password provider */
  PASSWORD: 'password',

  /** Phone provider */
  PHONE: 'phone',

  /** Twitter provider ID */
  TWITTER: 'twitter.com'
};
/**
 * Enumeration of supported sign-in methods.
 *
 * @public
 */

var SignInMethod = {
  /** Email link sign in method */
  EMAIL_LINK: 'emailLink',

  /** Email/password sign in method */
  EMAIL_PASSWORD: 'password',

  /** Facebook sign in method */
  FACEBOOK: 'facebook.com',

  /** GitHub sign in method */
  GITHUB: 'github.com',

  /** Google sign in method */
  GOOGLE: 'google.com',

  /** Phone sign in method */
  PHONE: 'phone',

  /** Twitter sign in method */
  TWITTER: 'twitter.com'
};
/**
 * Enumeration of supported operation types.
 *
 * @public
 */

var OperationType = {
  /** Operation involving linking an additional provider to an already signed-in user. */
  LINK: 'link',

  /** Operation involving using a provider to reauthenticate an already signed-in user. */
  REAUTHENTICATE: 'reauthenticate',

  /** Operation involving signing in a user. */
  SIGN_IN: 'signIn'
};
/**
 * An enumeration of the possible email action types.
 *
 * @public
 */

var ActionCodeOperation = {
  /** The email link sign-in action. */
  EMAIL_SIGNIN: 'EMAIL_SIGNIN',

  /** The password reset action. */
  PASSWORD_RESET: 'PASSWORD_RESET',

  /** The email revocation action. */
  RECOVER_EMAIL: 'RECOVER_EMAIL',

  /** The revert second factor addition email action. */
  REVERT_SECOND_FACTOR_ADDITION: 'REVERT_SECOND_FACTOR_ADDITION',

  /** The revert second factor addition email action. */
  VERIFY_AND_CHANGE_EMAIL: 'VERIFY_AND_CHANGE_EMAIL',

  /** The email verification action. */
  VERIFY_EMAIL: 'VERIFY_EMAIL'
};
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

function _debugErrorMap() {
  var _ref;

  return _ref = {}, _ref["admin-restricted-operation"
  /* ADMIN_ONLY_OPERATION */
  ] = 'This operation is restricted to administrators only.', _ref["argument-error"
  /* ARGUMENT_ERROR */
  ] = '', _ref["app-not-authorized"
  /* APP_NOT_AUTHORIZED */
  ] = "This app, identified by the domain where it's hosted, is not " + 'authorized to use Firebase Authentication with the provided API key. ' + 'Review your key configuration in the Google API console.', _ref["app-not-installed"
  /* APP_NOT_INSTALLED */
  ] = 'The requested mobile application corresponding to the identifier (' + 'Android package name or iOS bundle ID) provided is not installed on ' + 'this device.', _ref["captcha-check-failed"
  /* CAPTCHA_CHECK_FAILED */
  ] = 'The reCAPTCHA response token provided is either invalid, expired, ' + 'already used or the domain associated with it does not match the list ' + 'of whitelisted domains.', _ref["code-expired"
  /* CODE_EXPIRED */
  ] = 'The SMS code has expired. Please re-send the verification code to try ' + 'again.', _ref["cordova-not-ready"
  /* CORDOVA_NOT_READY */
  ] = 'Cordova framework is not ready.', _ref["cors-unsupported"
  /* CORS_UNSUPPORTED */
  ] = 'This browser is not supported.', _ref["credential-already-in-use"
  /* CREDENTIAL_ALREADY_IN_USE */
  ] = 'This credential is already associated with a different user account.', _ref["custom-token-mismatch"
  /* CREDENTIAL_MISMATCH */
  ] = 'The custom token corresponds to a different audience.', _ref["requires-recent-login"
  /* CREDENTIAL_TOO_OLD_LOGIN_AGAIN */
  ] = 'This operation is sensitive and requires recent authentication. Log in ' + 'again before retrying this request.', _ref["dependent-sdk-initialized-before-auth"
  /* DEPENDENT_SDK_INIT_BEFORE_AUTH */
  ] = 'Another Firebase SDK was initialized and is trying to use Auth before Auth is ' + 'initialized. Please be sure to call `initializeAuth` or `getAuth` before ' + 'starting any other Firebase SDK.', _ref["dynamic-link-not-activated"
  /* DYNAMIC_LINK_NOT_ACTIVATED */
  ] = 'Please activate Dynamic Links in the Firebase Console and agree to the terms and ' + 'conditions.', _ref["email-change-needs-verification"
  /* EMAIL_CHANGE_NEEDS_VERIFICATION */
  ] = 'Multi-factor users must always have a verified email.', _ref["email-already-in-use"
  /* EMAIL_EXISTS */
  ] = 'The email address is already in use by another account.', _ref["emulator-config-failed"
  /* EMULATOR_CONFIG_FAILED */
  ] = 'Auth instance has already been used to make a network call. Auth can ' + 'no longer be configured to use the emulator. Try calling ' + '"connectAuthEmulator()" sooner.', _ref["expired-action-code"
  /* EXPIRED_OOB_CODE */
  ] = 'The action code has expired.', _ref["cancelled-popup-request"
  /* EXPIRED_POPUP_REQUEST */
  ] = 'This operation has been cancelled due to another conflicting popup being opened.', _ref["internal-error"
  /* INTERNAL_ERROR */
  ] = 'An internal AuthError has occurred.', _ref["invalid-app-credential"
  /* INVALID_APP_CREDENTIAL */
  ] = 'The phone verification request contains an invalid application verifier.' + ' The reCAPTCHA token response is either invalid or expired.', _ref["invalid-app-id"
  /* INVALID_APP_ID */
  ] = 'The mobile app identifier is not registed for the current project.', _ref["invalid-user-token"
  /* INVALID_AUTH */
  ] = "This user's credential isn't valid for this project. This can happen " + "if the user's token has been tampered with, or if the user isn't for " + 'the project associated with this API key.', _ref["invalid-auth-event"
  /* INVALID_AUTH_EVENT */
  ] = 'An internal AuthError has occurred.', _ref["invalid-verification-code"
  /* INVALID_CODE */
  ] = 'The SMS verification code used to create the phone auth credential is ' + 'invalid. Please resend the verification code sms and be sure to use the ' + 'verification code provided by the user.', _ref["invalid-continue-uri"
  /* INVALID_CONTINUE_URI */
  ] = 'The continue URL provided in the request is invalid.', _ref["invalid-cordova-configuration"
  /* INVALID_CORDOVA_CONFIGURATION */
  ] = 'The following Cordova plugins must be installed to enable OAuth sign-in: ' + 'cordova-plugin-buildinfo, cordova-universal-links-plugin, ' + 'cordova-plugin-browsertab, cordova-plugin-inappbrowser and ' + 'cordova-plugin-customurlscheme.', _ref["invalid-custom-token"
  /* INVALID_CUSTOM_TOKEN */
  ] = 'The custom token format is incorrect. Please check the documentation.', _ref["invalid-dynamic-link-domain"
  /* INVALID_DYNAMIC_LINK_DOMAIN */
  ] = 'The provided dynamic link domain is not configured or authorized for the current project.', _ref["invalid-email"
  /* INVALID_EMAIL */
  ] = 'The email address is badly formatted.', _ref["invalid-emulator-scheme"
  /* INVALID_EMULATOR_SCHEME */
  ] = 'Emulator URL must start with a valid scheme (http:// or https://).', _ref["invalid-api-key"
  /* INVALID_API_KEY */
  ] = 'Your API key is invalid, please check you have copied it correctly.', _ref["invalid-cert-hash"
  /* INVALID_CERT_HASH */
  ] = 'The SHA-1 certificate hash provided is invalid.', _ref["invalid-credential"
  /* INVALID_IDP_RESPONSE */
  ] = 'The supplied auth credential is malformed or has expired.', _ref["invalid-message-payload"
  /* INVALID_MESSAGE_PAYLOAD */
  ] = 'The email template corresponding to this action contains invalid characters in its message. ' + 'Please fix by going to the Auth email templates section in the Firebase Console.', _ref["invalid-multi-factor-session"
  /* INVALID_MFA_SESSION */
  ] = 'The request does not contain a valid proof of first factor successful sign-in.', _ref["invalid-oauth-provider"
  /* INVALID_OAUTH_PROVIDER */
  ] = 'EmailAuthProvider is not supported for this operation. This operation ' + 'only supports OAuth providers.', _ref["invalid-oauth-client-id"
  /* INVALID_OAUTH_CLIENT_ID */
  ] = 'The OAuth client ID provided is either invalid or does not match the ' + 'specified API key.', _ref["unauthorized-domain"
  /* INVALID_ORIGIN */
  ] = 'This domain is not authorized for OAuth operations for your Firebase ' + 'project. Edit the list of authorized domains from the Firebase console.', _ref["invalid-action-code"
  /* INVALID_OOB_CODE */
  ] = 'The action code is invalid. This can happen if the code is malformed, ' + 'expired, or has already been used.', _ref["wrong-password"
  /* INVALID_PASSWORD */
  ] = 'The password is invalid or the user does not have a password.', _ref["invalid-persistence-type"
  /* INVALID_PERSISTENCE */
  ] = 'The specified persistence type is invalid. It can only be local, session or none.', _ref["invalid-phone-number"
  /* INVALID_PHONE_NUMBER */
  ] = 'The format of the phone number provided is incorrect. Please enter the ' + 'phone number in a format that can be parsed into E.164 format. E.164 ' + 'phone numbers are written in the format [+][country code][subscriber ' + 'number including area code].', _ref["invalid-provider-id"
  /* INVALID_PROVIDER_ID */
  ] = 'The specified provider ID is invalid.', _ref["invalid-recipient-email"
  /* INVALID_RECIPIENT_EMAIL */
  ] = 'The email corresponding to this action failed to send as the provided ' + 'recipient email address is invalid.', _ref["invalid-sender"
  /* INVALID_SENDER */
  ] = 'The email template corresponding to this action contains an invalid sender email or name. ' + 'Please fix by going to the Auth email templates section in the Firebase Console.', _ref["invalid-verification-id"
  /* INVALID_SESSION_INFO */
  ] = 'The verification ID used to create the phone auth credential is invalid.', _ref["invalid-tenant-id"
  /* INVALID_TENANT_ID */
  ] = "The Auth instance's tenant ID is invalid.", _ref["missing-android-pkg-name"
  /* MISSING_ANDROID_PACKAGE_NAME */
  ] = 'An Android Package Name must be provided if the Android App is required to be installed.', _ref["auth-domain-config-required"
  /* MISSING_AUTH_DOMAIN */
  ] = 'Be sure to include authDomain when calling firebase.initializeApp(), ' + 'by following the instructions in the Firebase console.', _ref["missing-app-credential"
  /* MISSING_APP_CREDENTIAL */
  ] = 'The phone verification request is missing an application verifier ' + 'assertion. A reCAPTCHA response token needs to be provided.', _ref["missing-verification-code"
  /* MISSING_CODE */
  ] = 'The phone auth credential was created with an empty SMS verification code.', _ref["missing-continue-uri"
  /* MISSING_CONTINUE_URI */
  ] = 'A continue URL must be provided in the request.', _ref["missing-iframe-start"
  /* MISSING_IFRAME_START */
  ] = 'An internal AuthError has occurred.', _ref["missing-ios-bundle-id"
  /* MISSING_IOS_BUNDLE_ID */
  ] = 'An iOS Bundle ID must be provided if an App Store ID is provided.', _ref["missing-or-invalid-nonce"
  /* MISSING_OR_INVALID_NONCE */
  ] = 'The request does not contain a valid nonce. This can occur if the ' + 'SHA-256 hash of the provided raw nonce does not match the hashed nonce ' + 'in the ID token payload.', _ref["missing-multi-factor-info"
  /* MISSING_MFA_INFO */
  ] = 'No second factor identifier is provided.', _ref["missing-multi-factor-session"
  /* MISSING_MFA_SESSION */
  ] = 'The request is missing proof of first factor successful sign-in.', _ref["missing-phone-number"
  /* MISSING_PHONE_NUMBER */
  ] = 'To send verification codes, provide a phone number for the recipient.', _ref["missing-verification-id"
  /* MISSING_SESSION_INFO */
  ] = 'The phone auth credential was created with an empty verification ID.', _ref["app-deleted"
  /* MODULE_DESTROYED */
  ] = 'This instance of FirebaseApp has been deleted.', _ref["multi-factor-info-not-found"
  /* MFA_INFO_NOT_FOUND */
  ] = 'The user does not have a second factor matching the identifier provided.', _ref["multi-factor-auth-required"
  /* MFA_REQUIRED */
  ] = 'Proof of ownership of a second factor is required to complete sign-in.', _ref["account-exists-with-different-credential"
  /* NEED_CONFIRMATION */
  ] = 'An account already exists with the same email address but different ' + 'sign-in credentials. Sign in using a provider associated with this ' + 'email address.', _ref["network-request-failed"
  /* NETWORK_REQUEST_FAILED */
  ] = 'A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.', _ref["no-auth-event"
  /* NO_AUTH_EVENT */
  ] = 'An internal AuthError has occurred.', _ref["no-such-provider"
  /* NO_SUCH_PROVIDER */
  ] = 'User was not linked to an account with the given provider.', _ref["null-user"
  /* NULL_USER */
  ] = 'A null user object was provided as the argument for an operation which ' + 'requires a non-null user object.', _ref["operation-not-allowed"
  /* OPERATION_NOT_ALLOWED */
  ] = 'The given sign-in provider is disabled for this Firebase project. ' + 'Enable it in the Firebase console, under the sign-in method tab of the ' + 'Auth section.', _ref["operation-not-supported-in-this-environment"
  /* OPERATION_NOT_SUPPORTED */
  ] = 'This operation is not supported in the environment this application is ' + 'running on. "location.protocol" must be http, https or chrome-extension' + ' and web storage must be enabled.', _ref["popup-blocked"
  /* POPUP_BLOCKED */
  ] = 'Unable to establish a connection with the popup. It may have been blocked by the browser.', _ref["popup-closed-by-user"
  /* POPUP_CLOSED_BY_USER */
  ] = 'The popup has been closed by the user before finalizing the operation.', _ref["provider-already-linked"
  /* PROVIDER_ALREADY_LINKED */
  ] = 'User can only be linked to one identity for the given provider.', _ref["quota-exceeded"
  /* QUOTA_EXCEEDED */
  ] = "The project's quota for this operation has been exceeded.", _ref["redirect-cancelled-by-user"
  /* REDIRECT_CANCELLED_BY_USER */
  ] = 'The redirect operation has been cancelled by the user before finalizing.', _ref["redirect-operation-pending"
  /* REDIRECT_OPERATION_PENDING */
  ] = 'A redirect sign-in operation is already pending.', _ref["rejected-credential"
  /* REJECTED_CREDENTIAL */
  ] = 'The request contains malformed or mismatching credentials.', _ref["second-factor-already-in-use"
  /* SECOND_FACTOR_ALREADY_ENROLLED */
  ] = 'The second factor is already enrolled on this account.', _ref["maximum-second-factor-count-exceeded"
  /* SECOND_FACTOR_LIMIT_EXCEEDED */
  ] = 'The maximum allowed number of second factors on a user has been exceeded.', _ref["tenant-id-mismatch"
  /* TENANT_ID_MISMATCH */
  ] = "The provided tenant ID does not match the Auth instance's tenant ID", _ref["timeout"
  /* TIMEOUT */
  ] = 'The operation has timed out.', _ref["user-token-expired"
  /* TOKEN_EXPIRED */
  ] = "The user's credential is no longer valid. The user must sign in again.", _ref["too-many-requests"
  /* TOO_MANY_ATTEMPTS_TRY_LATER */
  ] = 'We have blocked all requests from this device due to unusual activity. ' + 'Try again later.', _ref["unauthorized-continue-uri"
  /* UNAUTHORIZED_DOMAIN */
  ] = 'The domain of the continue URL is not whitelisted.  Please whitelist ' + 'the domain in the Firebase console.', _ref["unsupported-first-factor"
  /* UNSUPPORTED_FIRST_FACTOR */
  ] = 'Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.', _ref["unsupported-persistence-type"
  /* UNSUPPORTED_PERSISTENCE */
  ] = 'The current environment does not support the specified persistence type.', _ref["unsupported-tenant-operation"
  /* UNSUPPORTED_TENANT_OPERATION */
  ] = 'This operation is not supported in a multi-tenant context.', _ref["unverified-email"
  /* UNVERIFIED_EMAIL */
  ] = 'The operation requires a verified email.', _ref["user-cancelled"
  /* USER_CANCELLED */
  ] = 'The user did not grant your application the permissions it requested.', _ref["user-not-found"
  /* USER_DELETED */
  ] = 'There is no user record corresponding to this identifier. The user may ' + 'have been deleted.', _ref["user-disabled"
  /* USER_DISABLED */
  ] = 'The user account has been disabled by an administrator.', _ref["user-mismatch"
  /* USER_MISMATCH */
  ] = 'The supplied credentials do not correspond to the previously signed in user.', _ref["user-signed-out"
  /* USER_SIGNED_OUT */
  ] = '', _ref["weak-password"
  /* WEAK_PASSWORD */
  ] = 'The password must be 6 characters long or more.', _ref["web-storage-unsupported"
  /* WEB_STORAGE_UNSUPPORTED */
  ] = 'This browser is not supported or 3rd party cookies and data may be disabled.', _ref["already-initialized"
  /* ALREADY_INITIALIZED */
  ] = 'initializeAuth() has already been called with ' + 'different options. To avoid this error, call initializeAuth() with the ' + 'same options as when it was originally called, or call getAuth() to return the' + ' already initialized instance.', _ref;
}

function _prodErrorMap() {
  var _ref2;

  // We will include this one message in the prod error map since by the very
  // nature of this error, developers will never be able to see the message
  // using the debugErrorMap (which is installed during auth initialization).
  return _ref2 = {}, _ref2["dependent-sdk-initialized-before-auth"
  /* DEPENDENT_SDK_INIT_BEFORE_AUTH */
  ] = 'Another Firebase SDK was initialized and is trying to use Auth before Auth is ' + 'initialized. Please be sure to call `initializeAuth` or `getAuth` before ' + 'starting any other Firebase SDK.', _ref2;
}
/**
 * A verbose error map with detailed descriptions for most error codes.
 *
 * See discussion at {@link AuthErrorMap}
 *
 * @public
 */


var debugErrorMap = _debugErrorMap;
/**
 * A minimal error map with all verbose error messages stripped.
 *
 * See discussion at {@link AuthErrorMap}
 *
 * @public
 */

var prodErrorMap = _prodErrorMap;

var _DEFAULT_AUTH_ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_5__["ErrorFactory"]('auth', 'Firebase', _prodErrorMap());
/**
 * A map of potential `Auth` error codes, for easier comparison with errors
 * thrown by the SDK.
 *
 * @remarks
 * Note that you can't tree-shake individual keys
 * in the map, so by using the map you might substantially increase your
 * bundle size.
 *
 * @public
 */


var AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY = {
  ADMIN_ONLY_OPERATION: 'auth/admin-restricted-operation',
  ARGUMENT_ERROR: 'auth/argument-error',
  APP_NOT_AUTHORIZED: 'auth/app-not-authorized',
  APP_NOT_INSTALLED: 'auth/app-not-installed',
  CAPTCHA_CHECK_FAILED: 'auth/captcha-check-failed',
  CODE_EXPIRED: 'auth/code-expired',
  CORDOVA_NOT_READY: 'auth/cordova-not-ready',
  CORS_UNSUPPORTED: 'auth/cors-unsupported',
  CREDENTIAL_ALREADY_IN_USE: 'auth/credential-already-in-use',
  CREDENTIAL_MISMATCH: 'auth/custom-token-mismatch',
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'auth/requires-recent-login',
  DEPENDENT_SDK_INIT_BEFORE_AUTH: 'auth/dependent-sdk-initialized-before-auth',
  DYNAMIC_LINK_NOT_ACTIVATED: 'auth/dynamic-link-not-activated',
  EMAIL_CHANGE_NEEDS_VERIFICATION: 'auth/email-change-needs-verification',
  EMAIL_EXISTS: 'auth/email-already-in-use',
  EMULATOR_CONFIG_FAILED: 'auth/emulator-config-failed',
  EXPIRED_OOB_CODE: 'auth/expired-action-code',
  EXPIRED_POPUP_REQUEST: 'auth/cancelled-popup-request',
  INTERNAL_ERROR: 'auth/internal-error',
  INVALID_API_KEY: 'auth/invalid-api-key',
  INVALID_APP_CREDENTIAL: 'auth/invalid-app-credential',
  INVALID_APP_ID: 'auth/invalid-app-id',
  INVALID_AUTH: 'auth/invalid-user-token',
  INVALID_AUTH_EVENT: 'auth/invalid-auth-event',
  INVALID_CERT_HASH: 'auth/invalid-cert-hash',
  INVALID_CODE: 'auth/invalid-verification-code',
  INVALID_CONTINUE_URI: 'auth/invalid-continue-uri',
  INVALID_CORDOVA_CONFIGURATION: 'auth/invalid-cordova-configuration',
  INVALID_CUSTOM_TOKEN: 'auth/invalid-custom-token',
  INVALID_DYNAMIC_LINK_DOMAIN: 'auth/invalid-dynamic-link-domain',
  INVALID_EMAIL: 'auth/invalid-email',
  INVALID_EMULATOR_SCHEME: 'auth/invalid-emulator-scheme',
  INVALID_IDP_RESPONSE: 'auth/invalid-credential',
  INVALID_MESSAGE_PAYLOAD: 'auth/invalid-message-payload',
  INVALID_MFA_SESSION: 'auth/invalid-multi-factor-session',
  INVALID_OAUTH_CLIENT_ID: 'auth/invalid-oauth-client-id',
  INVALID_OAUTH_PROVIDER: 'auth/invalid-oauth-provider',
  INVALID_OOB_CODE: 'auth/invalid-action-code',
  INVALID_ORIGIN: 'auth/unauthorized-domain',
  INVALID_PASSWORD: 'auth/wrong-password',
  INVALID_PERSISTENCE: 'auth/invalid-persistence-type',
  INVALID_PHONE_NUMBER: 'auth/invalid-phone-number',
  INVALID_PROVIDER_ID: 'auth/invalid-provider-id',
  INVALID_RECIPIENT_EMAIL: 'auth/invalid-recipient-email',
  INVALID_SENDER: 'auth/invalid-sender',
  INVALID_SESSION_INFO: 'auth/invalid-verification-id',
  INVALID_TENANT_ID: 'auth/invalid-tenant-id',
  MFA_INFO_NOT_FOUND: 'auth/multi-factor-info-not-found',
  MFA_REQUIRED: 'auth/multi-factor-auth-required',
  MISSING_ANDROID_PACKAGE_NAME: 'auth/missing-android-pkg-name',
  MISSING_APP_CREDENTIAL: 'auth/missing-app-credential',
  MISSING_AUTH_DOMAIN: 'auth/auth-domain-config-required',
  MISSING_CODE: 'auth/missing-verification-code',
  MISSING_CONTINUE_URI: 'auth/missing-continue-uri',
  MISSING_IFRAME_START: 'auth/missing-iframe-start',
  MISSING_IOS_BUNDLE_ID: 'auth/missing-ios-bundle-id',
  MISSING_OR_INVALID_NONCE: 'auth/missing-or-invalid-nonce',
  MISSING_MFA_INFO: 'auth/missing-multi-factor-info',
  MISSING_MFA_SESSION: 'auth/missing-multi-factor-session',
  MISSING_PHONE_NUMBER: 'auth/missing-phone-number',
  MISSING_SESSION_INFO: 'auth/missing-verification-id',
  MODULE_DESTROYED: 'auth/app-deleted',
  NEED_CONFIRMATION: 'auth/account-exists-with-different-credential',
  NETWORK_REQUEST_FAILED: 'auth/network-request-failed',
  NULL_USER: 'auth/null-user',
  NO_AUTH_EVENT: 'auth/no-auth-event',
  NO_SUCH_PROVIDER: 'auth/no-such-provider',
  OPERATION_NOT_ALLOWED: 'auth/operation-not-allowed',
  OPERATION_NOT_SUPPORTED: 'auth/operation-not-supported-in-this-environment',
  POPUP_BLOCKED: 'auth/popup-blocked',
  POPUP_CLOSED_BY_USER: 'auth/popup-closed-by-user',
  PROVIDER_ALREADY_LINKED: 'auth/provider-already-linked',
  QUOTA_EXCEEDED: 'auth/quota-exceeded',
  REDIRECT_CANCELLED_BY_USER: 'auth/redirect-cancelled-by-user',
  REDIRECT_OPERATION_PENDING: 'auth/redirect-operation-pending',
  REJECTED_CREDENTIAL: 'auth/rejected-credential',
  SECOND_FACTOR_ALREADY_ENROLLED: 'auth/second-factor-already-in-use',
  SECOND_FACTOR_LIMIT_EXCEEDED: 'auth/maximum-second-factor-count-exceeded',
  TENANT_ID_MISMATCH: 'auth/tenant-id-mismatch',
  TIMEOUT: 'auth/timeout',
  TOKEN_EXPIRED: 'auth/user-token-expired',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'auth/too-many-requests',
  UNAUTHORIZED_DOMAIN: 'auth/unauthorized-continue-uri',
  UNSUPPORTED_FIRST_FACTOR: 'auth/unsupported-first-factor',
  UNSUPPORTED_PERSISTENCE: 'auth/unsupported-persistence-type',
  UNSUPPORTED_TENANT_OPERATION: 'auth/unsupported-tenant-operation',
  UNVERIFIED_EMAIL: 'auth/unverified-email',
  USER_CANCELLED: 'auth/user-cancelled',
  USER_DELETED: 'auth/user-not-found',
  USER_DISABLED: 'auth/user-disabled',
  USER_MISMATCH: 'auth/user-mismatch',
  USER_SIGNED_OUT: 'auth/user-signed-out',
  WEAK_PASSWORD: 'auth/weak-password',
  WEB_STORAGE_UNSUPPORTED: 'auth/web-storage-unsupported',
  ALREADY_INITIALIZED: 'auth/already-initialized'
};
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

var logClient = new _firebase_logger__WEBPACK_IMPORTED_MODULE_8__["Logger"]('@firebase/auth');

function _logError(msg) {
  if (logClient.logLevel <= _firebase_logger__WEBPACK_IMPORTED_MODULE_8__["LogLevel"].ERROR) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    logClient.error.apply(logClient, ["Auth (" + _firebase_app__WEBPACK_IMPORTED_MODULE_6__["SDK_VERSION"] + "): " + msg].concat(args));
  }
}
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


function _fail(authOrCode) {
  for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
    rest[_key3 - 1] = arguments[_key3];
  }

  throw createErrorInternal.apply(void 0, [authOrCode].concat(rest));
}

function _createError(authOrCode) {
  for (var _len3 = arguments.length, rest = new Array(_len3 > 1 ? _len3 - 1 : 0), _key4 = 1; _key4 < _len3; _key4++) {
    rest[_key4 - 1] = arguments[_key4];
  }

  return createErrorInternal.apply(void 0, [authOrCode].concat(rest));
}

function _errorWithCustomMessage(auth, code, message) {
  var _Object$assign;

  var errorMap = Object.assign(Object.assign({}, prodErrorMap()), (_Object$assign = {}, _Object$assign[code] = message, _Object$assign));
  var factory = new _firebase_util__WEBPACK_IMPORTED_MODULE_5__["ErrorFactory"]('auth', 'Firebase', errorMap);
  return factory.create(code, {
    appName: auth.name
  });
}

function _assertInstanceOf(auth, object, instance) {
  var constructorInstance = instance;

  if (!(object instanceof constructorInstance)) {
    if (constructorInstance.name !== object.constructor.name) {
      _fail(auth, "argument-error"
      /* ARGUMENT_ERROR */
      );
    }

    throw _errorWithCustomMessage(auth, "argument-error"
    /* ARGUMENT_ERROR */
    , "Type of " + object.constructor.name + " does not match expected instance." + "Did you pass a reference from a different Auth SDK?");
  }
}

function createErrorInternal(authOrCode) {
  for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key5 = 1; _key5 < _len4; _key5++) {
    rest[_key5 - 1] = arguments[_key5];
  }

  if (typeof authOrCode !== 'string') {
    var _authOrCode$_errorFac;

    var code = rest[0];
    var fullParams = [].concat(rest.slice(1));

    if (fullParams[0]) {
      fullParams[0].appName = authOrCode.name;
    }

    return (_authOrCode$_errorFac = authOrCode._errorFactory).create.apply(_authOrCode$_errorFac, [code].concat(fullParams));
  }

  return _DEFAULT_AUTH_ERROR_FACTORY.create.apply(_DEFAULT_AUTH_ERROR_FACTORY, [authOrCode].concat(rest));
}

function _assert(assertion, authOrCode) {
  if (!assertion) {
    for (var _len5 = arguments.length, rest = new Array(_len5 > 2 ? _len5 - 2 : 0), _key6 = 2; _key6 < _len5; _key6++) {
      rest[_key6 - 2] = arguments[_key6];
    }

    throw createErrorInternal.apply(void 0, [authOrCode].concat(rest));
  }
}
/**
 * Unconditionally fails, throwing an internal error with the given message.
 *
 * @param failure type of failure encountered
 * @throws Error
 */


function debugFail(failure) {
  // Log the failure in addition to throw an exception, just in case the
  // exception is swallowed.
  var message = "INTERNAL ASSERTION FAILED: " + failure;

  _logError(message); // NOTE: We don't use FirebaseError here because these are internal failures
  // that cannot be handled by the user. (Also it would create a circular
  // dependency between the error and assert modules which doesn't work.)


  throw new Error(message);
}
/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * @param assertion
 * @param message
 */


function debugAssert(assertion, message) {
  if (!assertion) {
    debugFail(message);
  }
}
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


var instanceCache = new Map();

function _getInstance(cls) {
  debugAssert(cls instanceof Function, 'Expected a class definition');
  var instance = instanceCache.get(cls);

  if (instance) {
    debugAssert(instance instanceof cls, 'Instance stored in cache mismatched with class');
    return instance;
  }

  instance = new cls();
  instanceCache.set(cls, instance);
  return instance;
}
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
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */


function initializeAuth(app, deps) {
  var provider = Object(_firebase_app__WEBPACK_IMPORTED_MODULE_6__["_getProvider"])(app, 'auth');

  if (provider.isInitialized()) {
    var _auth2 = provider.getImmediate();

    var initialOptions = provider.getOptions();

    if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["deepEqual"])(initialOptions, deps !== null && deps !== void 0 ? deps : {})) {
      return _auth2;
    } else {
      _fail(_auth2, "already-initialized"
      /* ALREADY_INITIALIZED */
      );
    }
  }

  var auth = provider.initialize({
    options: deps
  });
  return auth;
}

function _initializeAuthInstance(auth, deps) {
  var persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
  var hierarchy = (Array.isArray(persistence) ? persistence : [persistence]).map(_getInstance);

  if (deps === null || deps === void 0 ? void 0 : deps.errorMap) {
    auth._updateErrorMap(deps.errorMap);
  } // This promise is intended to float; auth initialization happens in the
  // background, meanwhile the auth object may be used by the app.
  // eslint-disable-next-line @typescript-eslint/no-floating-promises


  auth._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
}
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


function _getCurrentUrl() {
  var _a;

  return typeof self !== 'undefined' && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href) || '';
}

function _isHttpOrHttps() {
  return _getCurrentScheme() === 'http:' || _getCurrentScheme() === 'https:';
}

function _getCurrentScheme() {
  var _a;

  return typeof self !== 'undefined' && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
}
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
 * Determine whether the browser is working online
 */


function _isOnline() {
  if (typeof navigator !== 'undefined' && navigator && 'onLine' in navigator && typeof navigator.onLine === 'boolean' && ( // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  _isHttpOrHttps() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["isBrowserExtension"])() || 'connection' in navigator)) {
    return navigator.onLine;
  } // If we can't determine the state, assume it is online.


  return true;
}

function _getUserLanguage() {
  if (typeof navigator === 'undefined') {
    return null;
  }

  var navigatorLanguage = navigator;
  return (// Most reliable, but only supported in Chrome/Firefox.
    navigatorLanguage.languages && navigatorLanguage.languages[0] || // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    navigatorLanguage.language || // Couldn't determine language.
    null
  );
}
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
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */


var Delay = /*#__PURE__*/function () {
  function Delay(shortDelay, longDelay) {
    this.shortDelay = shortDelay;
    this.longDelay = longDelay; // Internal error when improperly initialized.

    debugAssert(longDelay > shortDelay, 'Short delay should be less than long delay!');
    this.isMobile = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["isMobileCordova"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["isReactNative"])();
  }

  var _proto = Delay.prototype;

  _proto.get = function get() {
    if (!_isOnline()) {
      // Pick the shorter timeout.
      return Math.min(5000
      /* OFFLINE */
      , this.shortDelay);
    } // If running in a mobile environment, return the long delay, otherwise
    // return the short delay.
    // This could be improved in the future to dynamically change based on other
    // variables instead of just reading the current environment.


    return this.isMobile ? this.longDelay : this.shortDelay;
  };

  return Delay;
}();
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


function _emulatorUrl(config, path) {
  debugAssert(config.emulator, 'Emulator should always be set here');
  var url = config.emulator.url;

  if (!path) {
    return url;
  }

  return "" + url + (path.startsWith('/') ? path.slice(1) : path);
}
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


var FetchProvider = /*#__PURE__*/function () {
  function FetchProvider() {}

  FetchProvider.initialize = function initialize(fetchImpl, headersImpl, responseImpl) {
    this.fetchImpl = fetchImpl;

    if (headersImpl) {
      this.headersImpl = headersImpl;
    }

    if (responseImpl) {
      this.responseImpl = responseImpl;
    }
  };

  FetchProvider.fetch = function fetch() {
    if (this.fetchImpl) {
      return this.fetchImpl;
    }

    if (typeof self !== 'undefined' && 'fetch' in self) {
      return self.fetch;
    }

    debugFail('Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill');
  };

  FetchProvider.headers = function headers() {
    if (this.headersImpl) {
      return this.headersImpl;
    }

    if (typeof self !== 'undefined' && 'Headers' in self) {
      return self.Headers;
    }

    debugFail('Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill');
  };

  FetchProvider.response = function response() {
    if (this.responseImpl) {
      return this.responseImpl;
    }

    if (typeof self !== 'undefined' && 'Response' in self) {
      return self.Response;
    }

    debugFail('Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill');
  };

  return FetchProvider;
}();
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
 * Map from errors returned by the server to errors to developer visible errors
 */


var SERVER_ERROR_MAP = (_SERVER_ERROR_MAP = {}, _SERVER_ERROR_MAP["CREDENTIAL_MISMATCH"
/* CREDENTIAL_MISMATCH */
] = "custom-token-mismatch", _SERVER_ERROR_MAP["MISSING_CUSTOM_TOKEN"
/* MISSING_CUSTOM_TOKEN */
] = "internal-error", _SERVER_ERROR_MAP["INVALID_IDENTIFIER"
/* INVALID_IDENTIFIER */
] = "invalid-email", _SERVER_ERROR_MAP["MISSING_CONTINUE_URI"
/* MISSING_CONTINUE_URI */
] = "internal-error", _SERVER_ERROR_MAP["INVALID_PASSWORD"
/* INVALID_PASSWORD */
] = "wrong-password", _SERVER_ERROR_MAP["MISSING_PASSWORD"
/* MISSING_PASSWORD */
] = "internal-error", _SERVER_ERROR_MAP["EMAIL_EXISTS"
/* EMAIL_EXISTS */
] = "email-already-in-use", _SERVER_ERROR_MAP["PASSWORD_LOGIN_DISABLED"
/* PASSWORD_LOGIN_DISABLED */
] = "operation-not-allowed", _SERVER_ERROR_MAP["INVALID_IDP_RESPONSE"
/* INVALID_IDP_RESPONSE */
] = "invalid-credential", _SERVER_ERROR_MAP["INVALID_PENDING_TOKEN"
/* INVALID_PENDING_TOKEN */
] = "invalid-credential", _SERVER_ERROR_MAP["FEDERATED_USER_ID_ALREADY_LINKED"
/* FEDERATED_USER_ID_ALREADY_LINKED */
] = "credential-already-in-use", _SERVER_ERROR_MAP["MISSING_REQ_TYPE"
/* MISSING_REQ_TYPE */
] = "internal-error", _SERVER_ERROR_MAP["EMAIL_NOT_FOUND"
/* EMAIL_NOT_FOUND */
] = "user-not-found", _SERVER_ERROR_MAP["RESET_PASSWORD_EXCEED_LIMIT"
/* RESET_PASSWORD_EXCEED_LIMIT */
] = "too-many-requests", _SERVER_ERROR_MAP["EXPIRED_OOB_CODE"
/* EXPIRED_OOB_CODE */
] = "expired-action-code", _SERVER_ERROR_MAP["INVALID_OOB_CODE"
/* INVALID_OOB_CODE */
] = "invalid-action-code", _SERVER_ERROR_MAP["MISSING_OOB_CODE"
/* MISSING_OOB_CODE */
] = "internal-error", _SERVER_ERROR_MAP["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"
/* CREDENTIAL_TOO_OLD_LOGIN_AGAIN */
] = "requires-recent-login", _SERVER_ERROR_MAP["INVALID_ID_TOKEN"
/* INVALID_ID_TOKEN */
] = "invalid-user-token", _SERVER_ERROR_MAP["TOKEN_EXPIRED"
/* TOKEN_EXPIRED */
] = "user-token-expired", _SERVER_ERROR_MAP["USER_NOT_FOUND"
/* USER_NOT_FOUND */
] = "user-token-expired", _SERVER_ERROR_MAP["TOO_MANY_ATTEMPTS_TRY_LATER"
/* TOO_MANY_ATTEMPTS_TRY_LATER */
] = "too-many-requests", _SERVER_ERROR_MAP["INVALID_CODE"
/* INVALID_CODE */
] = "invalid-verification-code", _SERVER_ERROR_MAP["INVALID_SESSION_INFO"
/* INVALID_SESSION_INFO */
] = "invalid-verification-id", _SERVER_ERROR_MAP["INVALID_TEMPORARY_PROOF"
/* INVALID_TEMPORARY_PROOF */
] = "invalid-credential", _SERVER_ERROR_MAP["MISSING_SESSION_INFO"
/* MISSING_SESSION_INFO */
] = "missing-verification-id", _SERVER_ERROR_MAP["SESSION_EXPIRED"
/* SESSION_EXPIRED */
] = "code-expired", _SERVER_ERROR_MAP["MISSING_ANDROID_PACKAGE_NAME"
/* MISSING_ANDROID_PACKAGE_NAME */
] = "missing-android-pkg-name", _SERVER_ERROR_MAP["UNAUTHORIZED_DOMAIN"
/* UNAUTHORIZED_DOMAIN */
] = "unauthorized-continue-uri", _SERVER_ERROR_MAP["INVALID_OAUTH_CLIENT_ID"
/* INVALID_OAUTH_CLIENT_ID */
] = "invalid-oauth-client-id", _SERVER_ERROR_MAP["ADMIN_ONLY_OPERATION"
/* ADMIN_ONLY_OPERATION */
] = "admin-restricted-operation", _SERVER_ERROR_MAP["INVALID_MFA_PENDING_CREDENTIAL"
/* INVALID_MFA_PENDING_CREDENTIAL */
] = "invalid-multi-factor-session", _SERVER_ERROR_MAP["MFA_ENROLLMENT_NOT_FOUND"
/* MFA_ENROLLMENT_NOT_FOUND */
] = "multi-factor-info-not-found", _SERVER_ERROR_MAP["MISSING_MFA_ENROLLMENT_ID"
/* MISSING_MFA_ENROLLMENT_ID */
] = "missing-multi-factor-info", _SERVER_ERROR_MAP["MISSING_MFA_PENDING_CREDENTIAL"
/* MISSING_MFA_PENDING_CREDENTIAL */
] = "missing-multi-factor-session", _SERVER_ERROR_MAP["SECOND_FACTOR_EXISTS"
/* SECOND_FACTOR_EXISTS */
] = "second-factor-already-in-use", _SERVER_ERROR_MAP["SECOND_FACTOR_LIMIT_EXCEEDED"
/* SECOND_FACTOR_LIMIT_EXCEEDED */
] = "maximum-second-factor-count-exceeded", _SERVER_ERROR_MAP["BLOCKING_FUNCTION_ERROR_RESPONSE"
/* BLOCKING_FUNCTION_ERROR_RESPONSE */
] = "internal-error", _SERVER_ERROR_MAP);
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

var DEFAULT_API_TIMEOUT_MS = new Delay(30000, 60000);

function _addTidIfNecessary(auth, request) {
  if (auth.tenantId && !request.tenantId) {
    return Object.assign(Object.assign({}, request), {
      tenantId: auth.tenantId
    });
  }

  return request;
}

function _performApiRequest(_x, _x2, _x3, _x4, _x5) {
  return _performApiRequest2.apply(this, arguments);
}

function _performApiRequest2() {
  _performApiRequest2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee88(auth, method, path, request, customErrorMap) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee88$(_context88) {
      while (1) {
        switch (_context88.prev = _context88.next) {
          case 0:
            if (customErrorMap === void 0) {
              customErrorMap = {};
            }

            return _context88.abrupt("return", _performFetchWithErrorHandling(auth, customErrorMap, /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee87() {
              var body, params, query, headers;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee87$(_context87) {
                while (1) {
                  switch (_context87.prev = _context87.next) {
                    case 0:
                      body = {};
                      params = {};

                      if (request) {
                        if (method === "GET"
                        /* GET */
                        ) {
                          params = request;
                        } else {
                          body = {
                            body: JSON.stringify(request)
                          };
                        }
                      }

                      query = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["querystring"])(Object.assign({
                        key: auth.config.apiKey
                      }, params)).slice(1);
                      _context87.next = 6;
                      return auth._getAdditionalHeaders();

                    case 6:
                      headers = _context87.sent;
                      headers["Content-Type"
                      /* CONTENT_TYPE */
                      ] = 'application/json';

                      if (auth.languageCode) {
                        headers["X-Firebase-Locale"
                        /* X_FIREBASE_LOCALE */
                        ] = auth.languageCode;
                      }

                      return _context87.abrupt("return", FetchProvider.fetch()(_getFinalTarget(auth, auth.config.apiHost, path, query), Object.assign({
                        method: method,
                        headers: headers,
                        referrerPolicy: 'no-referrer'
                      }, body)));

                    case 10:
                    case "end":
                      return _context87.stop();
                  }
                }
              }, _callee87);
            }))));

          case 2:
          case "end":
            return _context88.stop();
        }
      }
    }, _callee88);
  }));
  return _performApiRequest2.apply(this, arguments);
}

function _performFetchWithErrorHandling(_x6, _x7, _x8) {
  return _performFetchWithErrorHandling2.apply(this, arguments);
}

function _performFetchWithErrorHandling2() {
  _performFetchWithErrorHandling2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee89(auth, customErrorMap, fetchFn) {
    var errorMap, networkTimeout, response, json, errorMessage, _errorMessage$split, serverErrorCode, serverErrorMessage, authError;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee89$(_context89) {
      while (1) {
        switch (_context89.prev = _context89.next) {
          case 0:
            auth._canInitEmulator = false;
            errorMap = Object.assign(Object.assign({}, SERVER_ERROR_MAP), customErrorMap);
            _context89.prev = 2;
            networkTimeout = new NetworkTimeout(auth);
            _context89.next = 6;
            return Promise.race([fetchFn(), networkTimeout.promise]);

          case 6:
            response = _context89.sent;
            // If we've reached this point, the fetch succeeded and the networkTimeout
            // didn't throw; clear the network timeout delay so that Node won't hang
            networkTimeout.clearNetworkTimeout();
            _context89.next = 10;
            return response.json();

          case 10:
            json = _context89.sent;

            if (!('needConfirmation' in json)) {
              _context89.next = 13;
              break;
            }

            throw _makeTaggedError(auth, "account-exists-with-different-credential"
            /* NEED_CONFIRMATION */
            , json);

          case 13:
            if (!(response.ok && !('errorMessage' in json))) {
              _context89.next = 17;
              break;
            }

            return _context89.abrupt("return", json);

          case 17:
            errorMessage = response.ok ? json.errorMessage : json.error.message;
            _errorMessage$split = errorMessage.split(' : '), serverErrorCode = _errorMessage$split[0], serverErrorMessage = _errorMessage$split[1];

            if (!(serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED"
            /* FEDERATED_USER_ID_ALREADY_LINKED */
            )) {
              _context89.next = 23;
              break;
            }

            throw _makeTaggedError(auth, "credential-already-in-use"
            /* CREDENTIAL_ALREADY_IN_USE */
            , json);

          case 23:
            if (!(serverErrorCode === "EMAIL_EXISTS"
            /* EMAIL_EXISTS */
            )) {
              _context89.next = 25;
              break;
            }

            throw _makeTaggedError(auth, "email-already-in-use"
            /* EMAIL_EXISTS */
            , json);

          case 25:
            authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, '-');

            if (!serverErrorMessage) {
              _context89.next = 30;
              break;
            }

            throw _errorWithCustomMessage(auth, authError, serverErrorMessage);

          case 30:
            _fail(auth, authError);

          case 31:
            _context89.next = 38;
            break;

          case 33:
            _context89.prev = 33;
            _context89.t0 = _context89["catch"](2);

            if (!(_context89.t0 instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_5__["FirebaseError"])) {
              _context89.next = 37;
              break;
            }

            throw _context89.t0;

          case 37:
            _fail(auth, "network-request-failed"
            /* NETWORK_REQUEST_FAILED */
            );

          case 38:
          case "end":
            return _context89.stop();
        }
      }
    }, _callee89, null, [[2, 33]]);
  }));
  return _performFetchWithErrorHandling2.apply(this, arguments);
}

function _performSignInRequest(_x9, _x10, _x11, _x12, _x13) {
  return _performSignInRequest2.apply(this, arguments);
}

function _performSignInRequest2() {
  _performSignInRequest2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee90(auth, method, path, request, customErrorMap) {
    var serverResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee90$(_context90) {
      while (1) {
        switch (_context90.prev = _context90.next) {
          case 0:
            if (customErrorMap === void 0) {
              customErrorMap = {};
            }

            _context90.next = 3;
            return _performApiRequest(auth, method, path, request, customErrorMap);

          case 3:
            serverResponse = _context90.sent;

            if ('mfaPendingCredential' in serverResponse) {
              _fail(auth, "multi-factor-auth-required"
              /* MFA_REQUIRED */
              , {
                _serverResponse: serverResponse
              });
            }

            return _context90.abrupt("return", serverResponse);

          case 6:
          case "end":
            return _context90.stop();
        }
      }
    }, _callee90);
  }));
  return _performSignInRequest2.apply(this, arguments);
}

function _getFinalTarget(auth, host, path, query) {
  var base = "" + host + path + "?" + query;

  if (!auth.config.emulator) {
    return auth.config.apiScheme + "://" + base;
  }

  return _emulatorUrl(auth.config, base);
}

var NetworkTimeout = /*#__PURE__*/function () {
  function NetworkTimeout(auth) {
    var _this = this;

    this.auth = auth; // Node timers and browser timers are fundamentally incompatible, but we
    // don't care about the value here
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    this.timer = null;
    this.promise = new Promise(function (_, reject) {
      _this.timer = setTimeout(function () {
        return reject(_createError(_this.auth, "network-request-failed"
        /* NETWORK_REQUEST_FAILED */
        ));
      }, DEFAULT_API_TIMEOUT_MS.get());
    });
  }

  var _proto2 = NetworkTimeout.prototype;

  _proto2.clearNetworkTimeout = function clearNetworkTimeout() {
    clearTimeout(this.timer);
  };

  return NetworkTimeout;
}();

function _makeTaggedError(auth, code, response) {
  var errorParams = {
    appName: auth.name
  };

  if (response.email) {
    errorParams.email = response.email;
  }

  if (response.phoneNumber) {
    errorParams.phoneNumber = response.phoneNumber;
  }

  var error = _createError(auth, code, errorParams); // We know customData is defined on error because errorParams is defined


  error.customData._tokenResponse = response;
  return error;
}
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


function deleteAccount(_x14, _x15) {
  return _deleteAccount.apply(this, arguments);
}

function _deleteAccount() {
  _deleteAccount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee91(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee91$(_context91) {
      while (1) {
        switch (_context91.prev = _context91.next) {
          case 0:
            return _context91.abrupt("return", _performApiRequest(auth, "POST"
            /* POST */
            , "/v1/accounts:delete"
            /* DELETE_ACCOUNT */
            , request));

          case 1:
          case "end":
            return _context91.stop();
        }
      }
    }, _callee91);
  }));
  return _deleteAccount.apply(this, arguments);
}

function deleteLinkedAccounts(_x16, _x17) {
  return _deleteLinkedAccounts.apply(this, arguments);
}

function _deleteLinkedAccounts() {
  _deleteLinkedAccounts = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee92(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee92$(_context92) {
      while (1) {
        switch (_context92.prev = _context92.next) {
          case 0:
            return _context92.abrupt("return", _performApiRequest(auth, "POST"
            /* POST */
            , "/v1/accounts:update"
            /* SET_ACCOUNT_INFO */
            , request));

          case 1:
          case "end":
            return _context92.stop();
        }
      }
    }, _callee92);
  }));
  return _deleteLinkedAccounts.apply(this, arguments);
}

function getAccountInfo(_x18, _x19) {
  return _getAccountInfo.apply(this, arguments);
}
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


function _getAccountInfo() {
  _getAccountInfo = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee93(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee93$(_context93) {
      while (1) {
        switch (_context93.prev = _context93.next) {
          case 0:
            return _context93.abrupt("return", _performApiRequest(auth, "POST"
            /* POST */
            , "/v1/accounts:lookup"
            /* GET_ACCOUNT_INFO */
            , request));

          case 1:
          case "end":
            return _context93.stop();
        }
      }
    }, _callee93);
  }));
  return _getAccountInfo.apply(this, arguments);
}

function utcTimestampToDateString(utcTimestamp) {
  if (!utcTimestamp) {
    return undefined;
  }

  try {
    // Convert to date object.
    var date = new Date(Number(utcTimestamp)); // Test date is valid.

    if (!isNaN(date.getTime())) {
      // Convert to UTC date string.
      return date.toUTCString();
    }
  } catch (e) {// Do nothing. undefined will be returned.
  }

  return undefined;
}
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
 * Returns a JSON Web Token (JWT) used to identify the user to a Firebase service.
 *
 * @remarks
 * Returns the current token if it has not expired or if it will not expire in the next five
 * minutes. Otherwise, this will refresh the token and return a new one.
 *
 * @param user - The user.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */


function getIdToken(user, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  return Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user).getIdToken(forceRefresh);
}
/**
 * Returns a deserialized JSON Web Token (JWT) used to identitfy the user to a Firebase service.
 *
 * @remarks
 * Returns the current token if it has not expired or if it will not expire in the next five
 * minutes. Otherwise, this will refresh the token and return a new one.
 *
 * @param user - The user.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */


function _getIdTokenResult2(_x20, _x21) {
  return _getIdTokenResult.apply(this, arguments);
}

function _getIdTokenResult() {
  _getIdTokenResult = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee94(user, forceRefresh) {
    var userInternal, token, claims, firebase, signInProvider;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee94$(_context94) {
      while (1) {
        switch (_context94.prev = _context94.next) {
          case 0:
            if (forceRefresh === void 0) {
              forceRefresh = false;
            }

            userInternal = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user);
            _context94.next = 4;
            return userInternal.getIdToken(forceRefresh);

          case 4:
            token = _context94.sent;
            claims = _parseToken(token);

            _assert(claims && claims.exp && claims.auth_time && claims.iat, userInternal.auth, "internal-error"
            /* INTERNAL_ERROR */
            );

            firebase = typeof claims.firebase === 'object' ? claims.firebase : undefined;
            signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase['sign_in_provider'];
            return _context94.abrupt("return", {
              claims: claims,
              token: token,
              authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
              issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
              expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
              signInProvider: signInProvider || null,
              signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase['sign_in_second_factor']) || null
            });

          case 10:
          case "end":
            return _context94.stop();
        }
      }
    }, _callee94);
  }));
  return _getIdTokenResult.apply(this, arguments);
}

function secondsStringToMilliseconds(seconds) {
  return Number(seconds) * 1000;
}

function _parseToken(token) {
  var _token$split = token.split('.'),
      algorithm = _token$split[0],
      payload = _token$split[1],
      signature = _token$split[2];

  if (algorithm === undefined || payload === undefined || signature === undefined) {
    _logError('JWT malformed, contained fewer than 3 sections');

    return null;
  }

  try {
    var decoded = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["base64Decode"])(payload);

    if (!decoded) {
      _logError('Failed to decode base64 JWT payload');

      return null;
    }

    return JSON.parse(decoded);
  } catch (e) {
    _logError('Caught error parsing JWT payload as JSON', e);

    return null;
  }
}
/**
 * Extract expiresIn TTL from a token by subtracting the expiration from the issuance.
 */


function _tokenExpiresIn(token) {
  var parsedToken = _parseToken(token);

  _assert(parsedToken, "internal-error"
  /* INTERNAL_ERROR */
  );

  _assert(typeof parsedToken.exp !== 'undefined', "internal-error"
  /* INTERNAL_ERROR */
  );

  _assert(typeof parsedToken.iat !== 'undefined', "internal-error"
  /* INTERNAL_ERROR */
  );

  return Number(parsedToken.exp) - Number(parsedToken.iat);
}
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


function _logoutIfInvalidated(_x22, _x23, _x24) {
  return _logoutIfInvalidated2.apply(this, arguments);
}

function _logoutIfInvalidated2() {
  _logoutIfInvalidated2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee95(user, promise, bypassAuthState) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee95$(_context95) {
      while (1) {
        switch (_context95.prev = _context95.next) {
          case 0:
            if (bypassAuthState === void 0) {
              bypassAuthState = false;
            }

            if (!bypassAuthState) {
              _context95.next = 3;
              break;
            }

            return _context95.abrupt("return", promise);

          case 3:
            _context95.prev = 3;
            _context95.next = 6;
            return promise;

          case 6:
            return _context95.abrupt("return", _context95.sent);

          case 9:
            _context95.prev = 9;
            _context95.t0 = _context95["catch"](3);

            if (!(_context95.t0 instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_5__["FirebaseError"] && isUserInvalidated(_context95.t0))) {
              _context95.next = 15;
              break;
            }

            if (!(user.auth.currentUser === user)) {
              _context95.next = 15;
              break;
            }

            _context95.next = 15;
            return user.auth.signOut();

          case 15:
            throw _context95.t0;

          case 16:
          case "end":
            return _context95.stop();
        }
      }
    }, _callee95, null, [[3, 9]]);
  }));
  return _logoutIfInvalidated2.apply(this, arguments);
}

function isUserInvalidated(_ref3) {
  var code = _ref3.code;
  return code === "auth/" + "user-disabled"
  /* USER_DISABLED */
  || code === "auth/" + "user-token-expired"
  /* TOKEN_EXPIRED */
  ;
}
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


var ProactiveRefresh = /*#__PURE__*/function () {
  function ProactiveRefresh(user) {
    this.user = user;
    this.isRunning = false; // Node timers and browser timers return fundamentally different types.
    // We don't actually care what the value is but TS won't accept unknown and
    // we can't cast properly in both environments.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    this.timerId = null;
    this.errorBackoff = 30000
    /* RETRY_BACKOFF_MIN */
    ;
  }

  var _proto3 = ProactiveRefresh.prototype;

  _proto3._start = function _start() {
    if (this.isRunning) {
      return;
    }

    this.isRunning = true;
    this.schedule();
  };

  _proto3._stop = function _stop() {
    if (!this.isRunning) {
      return;
    }

    this.isRunning = false;

    if (this.timerId !== null) {
      clearTimeout(this.timerId);
    }
  };

  _proto3.getInterval = function getInterval(wasError) {
    var _a;

    if (wasError) {
      var interval = this.errorBackoff;
      this.errorBackoff = Math.min(this.errorBackoff * 2, 960000
      /* RETRY_BACKOFF_MAX */
      );
      return interval;
    } else {
      // Reset the error backoff
      this.errorBackoff = 30000
      /* RETRY_BACKOFF_MIN */
      ;
      var expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;

      var _interval = expTime - Date.now() - 300000
      /* OFFSET */
      ;

      return Math.max(0, _interval);
    }
  };

  _proto3.schedule = function schedule(wasError) {
    var _this2 = this;

    if (wasError === void 0) {
      wasError = false;
    }

    if (!this.isRunning) {
      // Just in case...
      return;
    }

    var interval = this.getInterval(wasError);
    this.timerId = setTimeout( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.iteration();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })), interval);
  };

  _proto3.iteration = /*#__PURE__*/function () {
    var _iteration = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return this.user.getIdToken(true);

            case 3:
              _context2.next = 9;
              break;

            case 5:
              _context2.prev = 5;
              _context2.t0 = _context2["catch"](0);

              // Only retry on network errors
              if (_context2.t0.code === "auth/" + "network-request-failed"
              /* NETWORK_REQUEST_FAILED */
              ) {
                this.schedule(
                /* wasError */
                true);
              }

              return _context2.abrupt("return");

            case 9:
              this.schedule();

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 5]]);
    }));

    function iteration() {
      return _iteration.apply(this, arguments);
    }

    return iteration;
  }();

  return ProactiveRefresh;
}();
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


var UserMetadata = /*#__PURE__*/function () {
  function UserMetadata(createdAt, lastLoginAt) {
    this.createdAt = createdAt;
    this.lastLoginAt = lastLoginAt;

    this._initializeTime();
  }

  var _proto4 = UserMetadata.prototype;

  _proto4._initializeTime = function _initializeTime() {
    this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
    this.creationTime = utcTimestampToDateString(this.createdAt);
  };

  _proto4._copy = function _copy(metadata) {
    this.createdAt = metadata.createdAt;
    this.lastLoginAt = metadata.lastLoginAt;

    this._initializeTime();
  };

  _proto4.toJSON = function toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  };

  return UserMetadata;
}();
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


function _reloadWithoutSaving(_x25) {
  return _reloadWithoutSaving2.apply(this, arguments);
}
/**
 * Reloads user account data, if signed in.
 *
 * @param user - The user.
 *
 * @public
 */


function _reloadWithoutSaving2() {
  _reloadWithoutSaving2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee96(user) {
    var _a, auth, idToken, response, coreAccount, newProviderData, providerData, oldIsAnonymous, newIsAnonymous, isAnonymous, updates;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee96$(_context96) {
      while (1) {
        switch (_context96.prev = _context96.next) {
          case 0:
            auth = user.auth;
            _context96.next = 3;
            return user.getIdToken();

          case 3:
            idToken = _context96.sent;
            _context96.next = 6;
            return _logoutIfInvalidated(user, getAccountInfo(auth, {
              idToken: idToken
            }));

          case 6:
            response = _context96.sent;

            _assert(response === null || response === void 0 ? void 0 : response.users.length, auth, "internal-error"
            /* INTERNAL_ERROR */
            );

            coreAccount = response.users[0];

            user._notifyReloadListener(coreAccount);

            newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length) ? extractProviderData(coreAccount.providerUserInfo) : [];
            providerData = mergeProviderData(user.providerData, newProviderData); // Preserves the non-nonymous status of the stored user, even if no more
            // credentials (federated or email/password) are linked to the user. If
            // the user was previously anonymous, then use provider data to update.
            // On the other hand, if it was not anonymous before, it should never be
            // considered anonymous now.

            oldIsAnonymous = user.isAnonymous;
            newIsAnonymous = !(user.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
            isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
            updates = {
              uid: coreAccount.localId,
              displayName: coreAccount.displayName || null,
              photoURL: coreAccount.photoUrl || null,
              email: coreAccount.email || null,
              emailVerified: coreAccount.emailVerified || false,
              phoneNumber: coreAccount.phoneNumber || null,
              tenantId: coreAccount.tenantId || null,
              providerData: providerData,
              metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
              isAnonymous: isAnonymous
            };
            Object.assign(user, updates);

          case 17:
          case "end":
            return _context96.stop();
        }
      }
    }, _callee96);
  }));
  return _reloadWithoutSaving2.apply(this, arguments);
}

function _reload2(_x26) {
  return _reload.apply(this, arguments);
}

function _reload() {
  _reload = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee97(user) {
    var userInternal;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee97$(_context97) {
      while (1) {
        switch (_context97.prev = _context97.next) {
          case 0:
            userInternal = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user);
            _context97.next = 3;
            return _reloadWithoutSaving(userInternal);

          case 3:
            _context97.next = 5;
            return userInternal.auth._persistUserIfCurrent(userInternal);

          case 5:
            userInternal.auth._notifyListenersIfCurrent(userInternal);

          case 6:
          case "end":
            return _context97.stop();
        }
      }
    }, _callee97);
  }));
  return _reload.apply(this, arguments);
}

function mergeProviderData(original, newData) {
  var deduped = original.filter(function (o) {
    return !newData.some(function (n) {
      return n.providerId === o.providerId;
    });
  });
  return [].concat(deduped, newData);
}

function extractProviderData(providers) {
  return providers.map(function (_a) {
    var providerId = _a.providerId,
        provider = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__rest"])(_a, ["providerId"]);

    return {
      providerId: providerId,
      uid: provider.rawId || '',
      displayName: provider.displayName || null,
      email: provider.email || null,
      phoneNumber: provider.phoneNumber || null,
      photoURL: provider.photoUrl || null
    };
  });
}
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


function requestStsToken(_x27, _x28) {
  return _requestStsToken.apply(this, arguments);
}
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
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */


function _requestStsToken() {
  _requestStsToken = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee99(auth, refreshToken) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee99$(_context99) {
      while (1) {
        switch (_context99.prev = _context99.next) {
          case 0:
            _context99.next = 2;
            return _performFetchWithErrorHandling(auth, {}, /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee98() {
              var body, _auth$config, tokenApiHost, apiKey, url, headers;

              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee98$(_context98) {
                while (1) {
                  switch (_context98.prev = _context98.next) {
                    case 0:
                      body = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["querystring"])({
                        'grant_type': 'refresh_token',
                        'refresh_token': refreshToken
                      }).slice(1);
                      _auth$config = auth.config, tokenApiHost = _auth$config.tokenApiHost, apiKey = _auth$config.apiKey;
                      url = _getFinalTarget(auth, tokenApiHost, "/v1/token"
                      /* TOKEN */
                      , "key=" + apiKey);
                      _context98.next = 5;
                      return auth._getAdditionalHeaders();

                    case 5:
                      headers = _context98.sent;
                      headers["Content-Type"
                      /* CONTENT_TYPE */
                      ] = 'application/x-www-form-urlencoded';
                      return _context98.abrupt("return", FetchProvider.fetch()(url, {
                        method: "POST"
                        /* POST */
                        ,
                        headers: headers,
                        body: body
                      }));

                    case 8:
                    case "end":
                      return _context98.stop();
                  }
                }
              }, _callee98);
            })));

          case 2:
            response = _context99.sent;
            return _context99.abrupt("return", {
              accessToken: response.access_token,
              expiresIn: response.expires_in,
              refreshToken: response.refresh_token
            });

          case 4:
          case "end":
            return _context99.stop();
        }
      }
    }, _callee99);
  }));
  return _requestStsToken.apply(this, arguments);
}

var StsTokenManager = /*#__PURE__*/function () {
  function StsTokenManager() {
    this.refreshToken = null;
    this.accessToken = null;
    this.expirationTime = null;
  }

  var _proto5 = StsTokenManager.prototype;

  _proto5.updateFromServerResponse = function updateFromServerResponse(response) {
    _assert(response.idToken, "internal-error"
    /* INTERNAL_ERROR */
    );

    _assert(typeof response.idToken !== 'undefined', "internal-error"
    /* INTERNAL_ERROR */
    );

    _assert(typeof response.refreshToken !== 'undefined', "internal-error"
    /* INTERNAL_ERROR */
    );

    var expiresIn = 'expiresIn' in response && typeof response.expiresIn !== 'undefined' ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
    this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
  };

  _proto5.getToken = /*#__PURE__*/function () {
    var _getToken = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee3(auth, forceRefresh) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (forceRefresh === void 0) {
                forceRefresh = false;
              }

              _assert(!this.accessToken || this.refreshToken, auth, "user-token-expired"
              /* TOKEN_EXPIRED */
              );

              if (!(!forceRefresh && this.accessToken && !this.isExpired)) {
                _context3.next = 4;
                break;
              }

              return _context3.abrupt("return", this.accessToken);

            case 4:
              if (!this.refreshToken) {
                _context3.next = 8;
                break;
              }

              _context3.next = 7;
              return this.refresh(auth, this.refreshToken);

            case 7:
              return _context3.abrupt("return", this.accessToken);

            case 8:
              return _context3.abrupt("return", null);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getToken(_x29, _x30) {
      return _getToken.apply(this, arguments);
    }

    return getToken;
  }();

  _proto5.clearRefreshToken = function clearRefreshToken() {
    this.refreshToken = null;
  };

  _proto5.refresh = /*#__PURE__*/function () {
    var _refresh = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee4(auth, oldToken) {
      var _yield$requestStsToke, accessToken, refreshToken, expiresIn;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return requestStsToken(auth, oldToken);

            case 2:
              _yield$requestStsToke = _context4.sent;
              accessToken = _yield$requestStsToke.accessToken;
              refreshToken = _yield$requestStsToke.refreshToken;
              expiresIn = _yield$requestStsToke.expiresIn;
              this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function refresh(_x31, _x32) {
      return _refresh.apply(this, arguments);
    }

    return refresh;
  }();

  _proto5.updateTokensAndExpiration = function updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
    this.refreshToken = refreshToken || null;
    this.accessToken = accessToken || null;
    this.expirationTime = Date.now() + expiresInSec * 1000;
  };

  StsTokenManager.fromJSON = function fromJSON(appName, object) {
    var refreshToken = object.refreshToken,
        accessToken = object.accessToken,
        expirationTime = object.expirationTime;
    var manager = new StsTokenManager();

    if (refreshToken) {
      _assert(typeof refreshToken === 'string', "internal-error"
      /* INTERNAL_ERROR */
      , {
        appName: appName
      });

      manager.refreshToken = refreshToken;
    }

    if (accessToken) {
      _assert(typeof accessToken === 'string', "internal-error"
      /* INTERNAL_ERROR */
      , {
        appName: appName
      });

      manager.accessToken = accessToken;
    }

    if (expirationTime) {
      _assert(typeof expirationTime === 'number', "internal-error"
      /* INTERNAL_ERROR */
      , {
        appName: appName
      });

      manager.expirationTime = expirationTime;
    }

    return manager;
  };

  _proto5.toJSON = function toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  };

  _proto5._assign = function _assign(stsTokenManager) {
    this.accessToken = stsTokenManager.accessToken;
    this.refreshToken = stsTokenManager.refreshToken;
    this.expirationTime = stsTokenManager.expirationTime;
  };

  _proto5._clone = function _clone() {
    return Object.assign(new StsTokenManager(), this.toJSON());
  };

  _proto5._performRefresh = function _performRefresh() {
    return debugFail('not implemented');
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(StsTokenManager, [{
    key: "isExpired",
    get: function get() {
      return !this.expirationTime || Date.now() > this.expirationTime - 30000
      /* TOKEN_REFRESH */
      ;
    }
  }]);

  return StsTokenManager;
}();
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


function assertStringOrUndefined(assertion, appName) {
  _assert(typeof assertion === 'string' || typeof assertion === 'undefined', "internal-error"
  /* INTERNAL_ERROR */
  , {
    appName: appName
  });
}

var UserImpl = /*#__PURE__*/function () {
  function UserImpl(_a) {
    var uid = _a.uid,
        auth = _a.auth,
        stsTokenManager = _a.stsTokenManager,
        opt = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__rest"])(_a, ["uid", "auth", "stsTokenManager"]); // For the user object, provider is always Firebase.


    this.providerId = "firebase"
    /* FIREBASE */
    ;
    this.proactiveRefresh = new ProactiveRefresh(this);
    this.reloadUserInfo = null;
    this.reloadListener = null;
    this.uid = uid;
    this.auth = auth;
    this.stsTokenManager = stsTokenManager;
    this.accessToken = stsTokenManager.accessToken;
    this.displayName = opt.displayName || null;
    this.email = opt.email || null;
    this.emailVerified = opt.emailVerified || false;
    this.phoneNumber = opt.phoneNumber || null;
    this.photoURL = opt.photoURL || null;
    this.isAnonymous = opt.isAnonymous || false;
    this.tenantId = opt.tenantId || null;
    this.providerData = opt.providerData ? [].concat(opt.providerData) : [];
    this.metadata = new UserMetadata(opt.createdAt || undefined, opt.lastLoginAt || undefined);
  }

  var _proto6 = UserImpl.prototype;

  _proto6.getIdToken = /*#__PURE__*/function () {
    var _getIdToken = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee5(forceRefresh) {
      var accessToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh));

            case 2:
              accessToken = _context5.sent;

              _assert(accessToken, this.auth, "internal-error"
              /* INTERNAL_ERROR */
              );

              if (!(this.accessToken !== accessToken)) {
                _context5.next = 9;
                break;
              }

              this.accessToken = accessToken;
              _context5.next = 8;
              return this.auth._persistUserIfCurrent(this);

            case 8:
              this.auth._notifyListenersIfCurrent(this);

            case 9:
              return _context5.abrupt("return", accessToken);

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function getIdToken(_x33) {
      return _getIdToken.apply(this, arguments);
    }

    return getIdToken;
  }();

  _proto6.getIdTokenResult = function getIdTokenResult(forceRefresh) {
    return _getIdTokenResult2(this, forceRefresh);
  };

  _proto6.reload = function reload() {
    return _reload2(this);
  };

  _proto6._assign = function _assign(user) {
    if (this === user) {
      return;
    }

    _assert(this.uid === user.uid, this.auth, "internal-error"
    /* INTERNAL_ERROR */
    );

    this.displayName = user.displayName;
    this.photoURL = user.photoURL;
    this.email = user.email;
    this.emailVerified = user.emailVerified;
    this.phoneNumber = user.phoneNumber;
    this.isAnonymous = user.isAnonymous;
    this.tenantId = user.tenantId;
    this.providerData = user.providerData.map(function (userInfo) {
      return Object.assign({}, userInfo);
    });

    this.metadata._copy(user.metadata);

    this.stsTokenManager._assign(user.stsTokenManager);
  };

  _proto6._clone = function _clone(auth) {
    return new UserImpl(Object.assign(Object.assign({}, this), {
      auth: auth,
      stsTokenManager: this.stsTokenManager._clone()
    }));
  };

  _proto6._onReload = function _onReload(callback) {
    // There should only ever be one listener, and that is a single instance of MultiFactorUser
    _assert(!this.reloadListener, this.auth, "internal-error"
    /* INTERNAL_ERROR */
    );

    this.reloadListener = callback;

    if (this.reloadUserInfo) {
      this._notifyReloadListener(this.reloadUserInfo);

      this.reloadUserInfo = null;
    }
  };

  _proto6._notifyReloadListener = function _notifyReloadListener(userInfo) {
    if (this.reloadListener) {
      this.reloadListener(userInfo);
    } else {
      // If no listener is subscribed yet, save the result so it's available when they do subscribe
      this.reloadUserInfo = userInfo;
    }
  };

  _proto6._startProactiveRefresh = function _startProactiveRefresh() {
    this.proactiveRefresh._start();
  };

  _proto6._stopProactiveRefresh = function _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  };

  _proto6._updateTokensIfNecessary = /*#__PURE__*/function () {
    var _updateTokensIfNecessary2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee6(response, reload) {
      var tokensRefreshed;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (reload === void 0) {
                reload = false;
              }

              tokensRefreshed = false;

              if (response.idToken && response.idToken !== this.stsTokenManager.accessToken) {
                this.stsTokenManager.updateFromServerResponse(response);
                tokensRefreshed = true;
              }

              if (!reload) {
                _context6.next = 6;
                break;
              }

              _context6.next = 6;
              return _reloadWithoutSaving(this);

            case 6:
              _context6.next = 8;
              return this.auth._persistUserIfCurrent(this);

            case 8:
              if (tokensRefreshed) {
                this.auth._notifyListenersIfCurrent(this);
              }

            case 9:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function _updateTokensIfNecessary(_x34, _x35) {
      return _updateTokensIfNecessary2.apply(this, arguments);
    }

    return _updateTokensIfNecessary;
  }();

  _proto6["delete"] = /*#__PURE__*/function () {
    var _delete2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee7() {
      var idToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.getIdToken();

            case 2:
              idToken = _context7.sent;
              _context7.next = 5;
              return _logoutIfInvalidated(this, deleteAccount(this.auth, {
                idToken: idToken
              }));

            case 5:
              this.stsTokenManager.clearRefreshToken(); // TODO: Determine if cancellable-promises are necessary to use in this class so that delete()
              //       cancels pending actions...

              return _context7.abrupt("return", this.auth.signOut());

            case 7:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function _delete() {
      return _delete2.apply(this, arguments);
    }

    return _delete;
  }();

  _proto6.toJSON = function toJSON() {
    return Object.assign(Object.assign({
      uid: this.uid,
      email: this.email || undefined,
      emailVerified: this.emailVerified,
      displayName: this.displayName || undefined,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || undefined,
      phoneNumber: this.phoneNumber || undefined,
      tenantId: this.tenantId || undefined,
      providerData: this.providerData.map(function (userInfo) {
        return Object.assign({}, userInfo);
      }),
      stsTokenManager: this.stsTokenManager.toJSON(),
      // Redirect event ID must be maintained in case there is a pending
      // redirect event.
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
    });
  };

  UserImpl._fromJSON = function _fromJSON(auth, object) {
    var _a, _b, _c, _d, _e, _f, _g, _h;

    var displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : undefined;
    var email = (_b = object.email) !== null && _b !== void 0 ? _b : undefined;
    var phoneNumber = (_c = object.phoneNumber) !== null && _c !== void 0 ? _c : undefined;
    var photoURL = (_d = object.photoURL) !== null && _d !== void 0 ? _d : undefined;
    var tenantId = (_e = object.tenantId) !== null && _e !== void 0 ? _e : undefined;

    var _redirectEventId = (_f = object._redirectEventId) !== null && _f !== void 0 ? _f : undefined;

    var createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : undefined;
    var lastLoginAt = (_h = object.lastLoginAt) !== null && _h !== void 0 ? _h : undefined;
    var uid = object.uid,
        emailVerified = object.emailVerified,
        isAnonymous = object.isAnonymous,
        providerData = object.providerData,
        plainObjectTokenManager = object.stsTokenManager;

    _assert(uid && plainObjectTokenManager, auth, "internal-error"
    /* INTERNAL_ERROR */
    );

    var stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);

    _assert(typeof uid === 'string', auth, "internal-error"
    /* INTERNAL_ERROR */
    );

    assertStringOrUndefined(displayName, auth.name);
    assertStringOrUndefined(email, auth.name);

    _assert(typeof emailVerified === 'boolean', auth, "internal-error"
    /* INTERNAL_ERROR */
    );

    _assert(typeof isAnonymous === 'boolean', auth, "internal-error"
    /* INTERNAL_ERROR */
    );

    assertStringOrUndefined(phoneNumber, auth.name);
    assertStringOrUndefined(photoURL, auth.name);
    assertStringOrUndefined(tenantId, auth.name);
    assertStringOrUndefined(_redirectEventId, auth.name);
    assertStringOrUndefined(createdAt, auth.name);
    assertStringOrUndefined(lastLoginAt, auth.name);
    var user = new UserImpl({
      uid: uid,
      auth: auth,
      email: email,
      emailVerified: emailVerified,
      displayName: displayName,
      isAnonymous: isAnonymous,
      photoURL: photoURL,
      phoneNumber: phoneNumber,
      tenantId: tenantId,
      stsTokenManager: stsTokenManager,
      createdAt: createdAt,
      lastLoginAt: lastLoginAt
    });

    if (providerData && Array.isArray(providerData)) {
      user.providerData = providerData.map(function (userInfo) {
        return Object.assign({}, userInfo);
      });
    }

    if (_redirectEventId) {
      user._redirectEventId = _redirectEventId;
    }

    return user;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  ;

  UserImpl._fromIdTokenResponse =
  /*#__PURE__*/
  function () {
    var _fromIdTokenResponse2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee8(auth, idTokenResponse, isAnonymous) {
      var stsTokenManager, user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (isAnonymous === void 0) {
                isAnonymous = false;
              }

              stsTokenManager = new StsTokenManager();
              stsTokenManager.updateFromServerResponse(idTokenResponse); // Initialize the Firebase Auth user.

              user = new UserImpl({
                uid: idTokenResponse.localId,
                auth: auth,
                stsTokenManager: stsTokenManager,
                isAnonymous: isAnonymous
              }); // Updates the user info and data and resolves with a user instance.

              _context8.next = 6;
              return _reloadWithoutSaving(user);

            case 6:
              return _context8.abrupt("return", user);

            case 7:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    function _fromIdTokenResponse(_x36, _x37, _x38) {
      return _fromIdTokenResponse2.apply(this, arguments);
    }

    return _fromIdTokenResponse;
  }();

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(UserImpl, [{
    key: "refreshToken",
    get: function get() {
      return this.stsTokenManager.refreshToken || '';
    }
  }]);

  return UserImpl;
}();
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


var InMemoryPersistence = /*#__PURE__*/function () {
  function InMemoryPersistence() {
    this.type = "NONE"
    /* NONE */
    ;
    this.storage = {};
  }

  var _proto7 = InMemoryPersistence.prototype;

  _proto7._isAvailable = /*#__PURE__*/function () {
    var _isAvailable2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee9() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", true);

            case 1:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    function _isAvailable() {
      return _isAvailable2.apply(this, arguments);
    }

    return _isAvailable;
  }();

  _proto7._set = /*#__PURE__*/function () {
    var _set2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee10(key, value) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              this.storage[key] = value;

            case 1:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function _set(_x39, _x40) {
      return _set2.apply(this, arguments);
    }

    return _set;
  }();

  _proto7._get = /*#__PURE__*/function () {
    var _get2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee11(key) {
      var value;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              value = this.storage[key];
              return _context11.abrupt("return", value === undefined ? null : value);

            case 2:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function _get(_x41) {
      return _get2.apply(this, arguments);
    }

    return _get;
  }();

  _proto7._remove = /*#__PURE__*/function () {
    var _remove2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee12(key) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              delete this.storage[key];

            case 1:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function _remove(_x42) {
      return _remove2.apply(this, arguments);
    }

    return _remove;
  }();

  _proto7._addListener = function _addListener(_key, _listener) {
    // Listeners are not supported for in-memory storage since it cannot be shared across windows/workers
    return;
  };

  _proto7._removeListener = function _removeListener(_key, _listener) {
    // Listeners are not supported for in-memory storage since it cannot be shared across windows/workers
    return;
  };

  return InMemoryPersistence;
}();

InMemoryPersistence.type = 'NONE';
/**
 * An implementation of {@link Persistence} of type 'NONE'.
 *
 * @public
 */

var inMemoryPersistence = InMemoryPersistence;
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

function _persistenceKeyName(key, apiKey, appName) {
  return "firebase"
  /* PERSISTENCE */
  + ":" + key + ":" + apiKey + ":" + appName;
}

var PersistenceUserManager = /*#__PURE__*/function () {
  function PersistenceUserManager(persistence, auth, userKey) {
    this.persistence = persistence;
    this.auth = auth;
    this.userKey = userKey;
    var _this$auth = this.auth,
        config = _this$auth.config,
        name = _this$auth.name;
    this.fullUserKey = _persistenceKeyName(this.userKey, config.apiKey, name);
    this.fullPersistenceKey = _persistenceKeyName("persistence"
    /* PERSISTENCE_USER */
    , config.apiKey, name);
    this.boundEventHandler = auth._onStorageEvent.bind(auth);

    this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }

  var _proto8 = PersistenceUserManager.prototype;

  _proto8.setCurrentUser = function setCurrentUser(user) {
    return this.persistence._set(this.fullUserKey, user.toJSON());
  };

  _proto8.getCurrentUser = /*#__PURE__*/function () {
    var _getCurrentUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee13() {
      var blob;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return this.persistence._get(this.fullUserKey);

            case 2:
              blob = _context13.sent;
              return _context13.abrupt("return", blob ? UserImpl._fromJSON(this.auth, blob) : null);

            case 4:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    function getCurrentUser() {
      return _getCurrentUser.apply(this, arguments);
    }

    return getCurrentUser;
  }();

  _proto8.removeCurrentUser = function removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  };

  _proto8.savePersistenceForRedirect = function savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  };

  _proto8.setPersistence = /*#__PURE__*/function () {
    var _setPersistence = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee14(newPersistence) {
      var currentUser;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              if (!(this.persistence === newPersistence)) {
                _context14.next = 2;
                break;
              }

              return _context14.abrupt("return");

            case 2:
              _context14.next = 4;
              return this.getCurrentUser();

            case 4:
              currentUser = _context14.sent;
              _context14.next = 7;
              return this.removeCurrentUser();

            case 7:
              this.persistence = newPersistence;

              if (!currentUser) {
                _context14.next = 10;
                break;
              }

              return _context14.abrupt("return", this.setCurrentUser(currentUser));

            case 10:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function setPersistence(_x43) {
      return _setPersistence.apply(this, arguments);
    }

    return setPersistence;
  }();

  _proto8["delete"] = function _delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  };

  PersistenceUserManager.create = /*#__PURE__*/function () {
    var _create = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee17(auth, persistenceHierarchy, userKey
    /* AUTH_USER */
    ) {
      var availablePersistences, selectedPersistence, key, userToMigrate, _iterator, _step, persistence, blob, user, migrationHierarchy;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              if (userKey === void 0) {
                userKey = "authUser";
              }

              if (persistenceHierarchy.length) {
                _context17.next = 3;
                break;
              }

              return _context17.abrupt("return", new PersistenceUserManager(_getInstance(inMemoryPersistence), auth, userKey));

            case 3:
              _context17.next = 5;
              return Promise.all(persistenceHierarchy.map( /*#__PURE__*/function () {
                var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee15(persistence) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee15$(_context15) {
                    while (1) {
                      switch (_context15.prev = _context15.next) {
                        case 0:
                          _context15.next = 2;
                          return persistence._isAvailable();

                        case 2:
                          if (!_context15.sent) {
                            _context15.next = 4;
                            break;
                          }

                          return _context15.abrupt("return", persistence);

                        case 4:
                          return _context15.abrupt("return", undefined);

                        case 5:
                        case "end":
                          return _context15.stop();
                      }
                    }
                  }, _callee15);
                }));

                return function (_x47) {
                  return _ref5.apply(this, arguments);
                };
              }()));

            case 5:
              availablePersistences = _context17.sent.filter(function (persistence) {
                return persistence;
              });
              // Fall back to the first persistence listed, or in memory if none available
              selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);
              key = _persistenceKeyName(userKey, auth.config.apiKey, auth.name); // Pull out the existing user, setting the chosen persistence to that
              // persistence if the user exists.

              userToMigrate = null; // Note, here we check for a user in _all_ persistences, not just the
              // ones deemed available. If we can migrate a user out of a broken
              // persistence, we will (but only if that persistence supports migration).

              _iterator = _createForOfIteratorHelperLoose(persistenceHierarchy);

            case 10:
              if ((_step = _iterator()).done) {
                _context17.next = 27;
                break;
              }

              persistence = _step.value;
              _context17.prev = 12;
              _context17.next = 15;
              return persistence._get(key);

            case 15:
              blob = _context17.sent;

              if (!blob) {
                _context17.next = 21;
                break;
              }

              user = UserImpl._fromJSON(auth, blob); // throws for unparsable blob (wrong format)

              if (persistence !== selectedPersistence) {
                userToMigrate = user;
              }

              selectedPersistence = persistence;
              return _context17.abrupt("break", 27);

            case 21:
              _context17.next = 25;
              break;

            case 23:
              _context17.prev = 23;
              _context17.t0 = _context17["catch"](12);

            case 25:
              _context17.next = 10;
              break;

            case 27:
              // If we find the user in a persistence that does support migration, use
              // that migration path (of only persistences that support migration)
              migrationHierarchy = availablePersistences.filter(function (p) {
                return p._shouldAllowMigration;
              }); // If the persistence does _not_ allow migration, just finish off here

              if (!(!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length)) {
                _context17.next = 30;
                break;
              }

              return _context17.abrupt("return", new PersistenceUserManager(selectedPersistence, auth, userKey));

            case 30:
              selectedPersistence = migrationHierarchy[0];

              if (!userToMigrate) {
                _context17.next = 34;
                break;
              }

              _context17.next = 34;
              return selectedPersistence._set(key, userToMigrate.toJSON());

            case 34:
              _context17.next = 36;
              return Promise.all(persistenceHierarchy.map( /*#__PURE__*/function () {
                var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee16(persistence) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee16$(_context16) {
                    while (1) {
                      switch (_context16.prev = _context16.next) {
                        case 0:
                          if (!(persistence !== selectedPersistence)) {
                            _context16.next = 8;
                            break;
                          }

                          _context16.prev = 1;
                          _context16.next = 4;
                          return persistence._remove(key);

                        case 4:
                          _context16.next = 8;
                          break;

                        case 6:
                          _context16.prev = 6;
                          _context16.t0 = _context16["catch"](1);

                        case 8:
                        case "end":
                          return _context16.stop();
                      }
                    }
                  }, _callee16, null, [[1, 6]]);
                }));

                return function (_x48) {
                  return _ref6.apply(this, arguments);
                };
              }()));

            case 36:
              return _context17.abrupt("return", new PersistenceUserManager(selectedPersistence, auth, userKey));

            case 37:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, null, [[12, 23]]);
    }));

    function create(_x44, _x45, _x46) {
      return _create.apply(this, arguments);
    }

    return create;
  }();

  return PersistenceUserManager;
}();
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
 * Determine the browser for the purposes of reporting usage to the API
 */


function _getBrowserName(userAgent) {
  var ua = userAgent.toLowerCase();

  if (ua.includes('opera/') || ua.includes('opr/') || ua.includes('opios/')) {
    return "Opera"
    /* OPERA */
    ;
  } else if (_isIEMobile(ua)) {
    // Windows phone IEMobile browser.
    return "IEMobile"
    /* IEMOBILE */
    ;
  } else if (ua.includes('msie') || ua.includes('trident/')) {
    return "IE"
    /* IE */
    ;
  } else if (ua.includes('edge/')) {
    return "Edge"
    /* EDGE */
    ;
  } else if (_isFirefox(ua)) {
    return "Firefox"
    /* FIREFOX */
    ;
  } else if (ua.includes('silk/')) {
    return "Silk"
    /* SILK */
    ;
  } else if (_isBlackBerry(ua)) {
    // Blackberry browser.
    return "Blackberry"
    /* BLACKBERRY */
    ;
  } else if (_isWebOS(ua)) {
    // WebOS default browser.
    return "Webos"
    /* WEBOS */
    ;
  } else if (_isSafari(ua)) {
    return "Safari"
    /* SAFARI */
    ;
  } else if ((ua.includes('chrome/') || _isChromeIOS(ua)) && !ua.includes('edge/')) {
    return "Chrome"
    /* CHROME */
    ;
  } else if (_isAndroid(ua)) {
    // Android stock browser.
    return "Android"
    /* ANDROID */
    ;
  } else {
    // Most modern browsers have name/version at end of user agent string.
    var re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
    var matches = userAgent.match(re);

    if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) {
      return matches[1];
    }
  }

  return "Other"
  /* OTHER */
  ;
}

function _isFirefox(ua) {
  if (ua === void 0) {
    ua = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getUA"])();
  }

  return /firefox\//i.test(ua);
}

function _isSafari(userAgent) {
  if (userAgent === void 0) {
    userAgent = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getUA"])();
  }

  var ua = userAgent.toLowerCase();
  return ua.includes('safari/') && !ua.includes('chrome/') && !ua.includes('crios/') && !ua.includes('android');
}

function _isChromeIOS(ua) {
  if (ua === void 0) {
    ua = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getUA"])();
  }

  return /crios\//i.test(ua);
}

function _isIEMobile(ua) {
  if (ua === void 0) {
    ua = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getUA"])();
  }

  return /iemobile/i.test(ua);
}

function _isAndroid(ua) {
  if (ua === void 0) {
    ua = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getUA"])();
  }

  return /android/i.test(ua);
}

function _isBlackBerry(ua) {
  if (ua === void 0) {
    ua = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getUA"])();
  }

  return /blackberry/i.test(ua);
}

function _isWebOS(ua) {
  if (ua === void 0) {
    ua = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getUA"])();
  }

  return /webos/i.test(ua);
}

function _isIOS(ua) {
  if (ua === void 0) {
    ua = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getUA"])();
  }

  return /iphone|ipad|ipod/i.test(ua);
}

function _isIOS7Or8(ua) {
  if (ua === void 0) {
    ua = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getUA"])();
  }

  return /(iPad|iPhone|iPod).*OS 7_\d/i.test(ua) || /(iPad|iPhone|iPod).*OS 8_\d/i.test(ua);
}

function _isIOSStandalone(ua) {
  if (ua === void 0) {
    ua = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getUA"])();
  }

  var _a;

  return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
}

function _isIE10() {
  return Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["isIE"])() && document.documentMode === 10;
}

function _isMobileBrowser(ua) {
  if (ua === void 0) {
    ua = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getUA"])();
  }

  // TODO: implement getBrowserName equivalent for OS.
  return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
}

function _isIframe() {
  try {
    // Check that the current window is not the top window.
    // If so, return true.
    return !!(window && window !== window.top);
  } catch (e) {
    return false;
  }
}
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

/*
 * Determine the SDK version string
 */


function _getClientVersion(clientPlatform, frameworks) {
  if (frameworks === void 0) {
    frameworks = [];
  }

  var reportedPlatform;

  switch (clientPlatform) {
    case "Browser"
    /* BROWSER */
    :
      // In a browser environment, report the browser name.
      reportedPlatform = _getBrowserName(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getUA"])());
      break;

    case "Worker"
    /* WORKER */
    :
      // Technically a worker runs from a browser but we need to differentiate a
      // worker from a browser.
      // For example: Chrome-Worker/JsCore/4.9.1/FirebaseCore-web.
      reportedPlatform = _getBrowserName(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getUA"])()) + "-" + clientPlatform;
      break;

    default:
      reportedPlatform = clientPlatform;
  }

  var reportedFrameworks = frameworks.length ? frameworks.join(',') : 'FirebaseCore-web';
  /* default value if no other framework is used */

  return reportedPlatform + "/" + "JsCore"
  /* CORE */
  + "/" + _firebase_app__WEBPACK_IMPORTED_MODULE_6__["SDK_VERSION"] + "/" + reportedFrameworks;
}
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


var AuthImpl = /*#__PURE__*/function () {
  function AuthImpl(app, config) {
    this.app = app;
    this.config = config;
    this.currentUser = null;
    this.emulatorConfig = null;
    this.operations = Promise.resolve();
    this.authStateSubscription = new Subscription(this);
    this.idTokenSubscription = new Subscription(this);
    this.redirectUser = null;
    this.isProactiveRefreshEnabled = false; // Any network calls will set this to true and prevent subsequent emulator
    // initialization

    this._canInitEmulator = true;
    this._isInitialized = false;
    this._deleted = false;
    this._initializationPromise = null;
    this._popupRedirectResolver = null;
    this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY; // Tracks the last notified UID for state change listeners to prevent
    // repeated calls to the callbacks. Undefined means it's never been
    // called, whereas null means it's been called with a signed out user

    this.lastNotifiedUid = undefined;
    this.languageCode = null;
    this.tenantId = null;
    this.settings = {
      appVerificationDisabledForTesting: false
    };
    this.frameworks = [];
    this.name = app.name;
    this.clientVersion = config.sdkClientVersion;
  }

  var _proto9 = AuthImpl.prototype;

  _proto9._initializeWithPersistence = function _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
    var _this3 = this;

    if (popupRedirectResolver) {
      this._popupRedirectResolver = _getInstance(popupRedirectResolver);
    } // Have to check for app deletion throughout initialization (after each
    // promise resolution)


    this._initializationPromise = this.queue( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee18() {
      var _a, _b;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              if (!_this3._deleted) {
                _context18.next = 2;
                break;
              }

              return _context18.abrupt("return");

            case 2:
              _context18.next = 4;
              return PersistenceUserManager.create(_this3, persistenceHierarchy);

            case 4:
              _this3.persistenceManager = _context18.sent;

              if (!_this3._deleted) {
                _context18.next = 7;
                break;
              }

              return _context18.abrupt("return");

            case 7:
              if (!((_a = _this3._popupRedirectResolver) === null || _a === void 0 ? void 0 : _a._shouldInitProactively)) {
                _context18.next = 15;
                break;
              }

              _context18.prev = 8;
              _context18.next = 11;
              return _this3._popupRedirectResolver._initialize(_this3);

            case 11:
              _context18.next = 15;
              break;

            case 13:
              _context18.prev = 13;
              _context18.t0 = _context18["catch"](8);

            case 15:
              _context18.next = 17;
              return _this3.initializeCurrentUser(popupRedirectResolver);

            case 17:
              _this3.lastNotifiedUid = ((_b = _this3.currentUser) === null || _b === void 0 ? void 0 : _b.uid) || null;

              if (!_this3._deleted) {
                _context18.next = 20;
                break;
              }

              return _context18.abrupt("return");

            case 20:
              _this3._isInitialized = true;

            case 21:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18, null, [[8, 13]]);
    })));
    return this._initializationPromise;
  }
  /**
   * If the persistence is changed in another window, the user manager will let us know
   */
  ;

  _proto9._onStorageEvent =
  /*#__PURE__*/
  function () {
    var _onStorageEvent2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee19() {
      var user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              if (!this._deleted) {
                _context19.next = 2;
                break;
              }

              return _context19.abrupt("return");

            case 2:
              _context19.next = 4;
              return this.assertedPersistence.getCurrentUser();

            case 4:
              user = _context19.sent;

              if (!(!this.currentUser && !user)) {
                _context19.next = 7;
                break;
              }

              return _context19.abrupt("return");

            case 7:
              if (!(this.currentUser && user && this.currentUser.uid === user.uid)) {
                _context19.next = 12;
                break;
              }

              // Data update, simply copy data changes.
              this._currentUser._assign(user); // If tokens changed from previous user tokens, this will trigger
              // notifyAuthListeners_.


              _context19.next = 11;
              return this.currentUser.getIdToken();

            case 11:
              return _context19.abrupt("return");

            case 12:
              _context19.next = 14;
              return this._updateCurrentUser(user);

            case 14:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19, this);
    }));

    function _onStorageEvent() {
      return _onStorageEvent2.apply(this, arguments);
    }

    return _onStorageEvent;
  }();

  _proto9.initializeCurrentUser = /*#__PURE__*/function () {
    var _initializeCurrentUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee20(popupRedirectResolver) {
      var _a, storedUser, redirectUserEventId, storedUserEventId, result;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              _context20.next = 2;
              return this.assertedPersistence.getCurrentUser();

            case 2:
              storedUser = _context20.sent;

              if (!(popupRedirectResolver && this.config.authDomain)) {
                _context20.next = 12;
                break;
              }

              _context20.next = 6;
              return this.getOrInitRedirectPersistenceManager();

            case 6:
              redirectUserEventId = (_a = this.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
              storedUserEventId = storedUser === null || storedUser === void 0 ? void 0 : storedUser._redirectEventId;
              _context20.next = 10;
              return this.tryRedirectSignIn(popupRedirectResolver);

            case 10:
              result = _context20.sent;

              // If the stored user (i.e. the old "currentUser") has a redirectId that
              // matches the redirect user, then we want to initially sign in with the
              // new user object from result.
              // TODO(samgho): More thoroughly test all of this
              if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && (result === null || result === void 0 ? void 0 : result.user)) {
                storedUser = result.user;
              }

            case 12:
              if (storedUser) {
                _context20.next = 14;
                break;
              }

              return _context20.abrupt("return", this.directlySetCurrentUser(null));

            case 14:
              if (storedUser._redirectEventId) {
                _context20.next = 16;
                break;
              }

              return _context20.abrupt("return", this.reloadAndSetCurrentUserOrClear(storedUser));

            case 16:
              _assert(this._popupRedirectResolver, this, "argument-error"
              /* ARGUMENT_ERROR */
              );

              _context20.next = 19;
              return this.getOrInitRedirectPersistenceManager();

            case 19:
              if (!(this.redirectUser && this.redirectUser._redirectEventId === storedUser._redirectEventId)) {
                _context20.next = 21;
                break;
              }

              return _context20.abrupt("return", this.directlySetCurrentUser(storedUser));

            case 21:
              return _context20.abrupt("return", this.reloadAndSetCurrentUserOrClear(storedUser));

            case 22:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20, this);
    }));

    function initializeCurrentUser(_x49) {
      return _initializeCurrentUser.apply(this, arguments);
    }

    return initializeCurrentUser;
  }();

  _proto9.tryRedirectSignIn = /*#__PURE__*/function () {
    var _tryRedirectSignIn = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee21(redirectResolver) {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              // The redirect user needs to be checked (and signed in if available)
              // during auth initialization. All of the normal sign in and link/reauth
              // flows call back into auth and push things onto the promise queue. We
              // need to await the result of the redirect sign in *inside the promise
              // queue*. This presents a problem: we run into deadlock. See:
              //    ┌> [Initialization] ─────┐
              //    ┌> [<other queue tasks>] │
              //    └─ [getRedirectResult] <─┘
              //    where [] are tasks on the queue and arrows denote awaits
              // Initialization will never complete because it's waiting on something
              // that's waiting for initialization to complete!
              //
              // Instead, this method calls getRedirectResult() (stored in
              // _completeRedirectFn) with an optional parameter that instructs all of
              // the underlying auth operations to skip anything that mutates auth state.
              result = null;
              _context21.prev = 1;
              _context21.next = 4;
              return this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);

            case 4:
              result = _context21.sent;
              _context21.next = 11;
              break;

            case 7:
              _context21.prev = 7;
              _context21.t0 = _context21["catch"](1);
              _context21.next = 11;
              return this._setRedirectUser(null);

            case 11:
              return _context21.abrupt("return", result);

            case 12:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21, this, [[1, 7]]);
    }));

    function tryRedirectSignIn(_x50) {
      return _tryRedirectSignIn.apply(this, arguments);
    }

    return tryRedirectSignIn;
  }();

  _proto9.reloadAndSetCurrentUserOrClear = /*#__PURE__*/function () {
    var _reloadAndSetCurrentUserOrClear = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee22(user) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              _context22.prev = 0;
              _context22.next = 3;
              return _reloadWithoutSaving(user);

            case 3:
              _context22.next = 9;
              break;

            case 5:
              _context22.prev = 5;
              _context22.t0 = _context22["catch"](0);

              if (!(_context22.t0.code !== "auth/" + "network-request-failed"
              /* NETWORK_REQUEST_FAILED */
              )) {
                _context22.next = 9;
                break;
              }

              return _context22.abrupt("return", this.directlySetCurrentUser(null));

            case 9:
              return _context22.abrupt("return", this.directlySetCurrentUser(user));

            case 10:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee22, this, [[0, 5]]);
    }));

    function reloadAndSetCurrentUserOrClear(_x51) {
      return _reloadAndSetCurrentUserOrClear.apply(this, arguments);
    }

    return reloadAndSetCurrentUserOrClear;
  }();

  _proto9.useDeviceLanguage = function useDeviceLanguage() {
    this.languageCode = _getUserLanguage();
  };

  _proto9._delete = /*#__PURE__*/function () {
    var _delete3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee23() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee23$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              this._deleted = true;

            case 1:
            case "end":
              return _context23.stop();
          }
        }
      }, _callee23, this);
    }));

    function _delete() {
      return _delete3.apply(this, arguments);
    }

    return _delete;
  }();

  _proto9.updateCurrentUser = /*#__PURE__*/function () {
    var _updateCurrentUser2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee24(userExtern) {
      var user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              // The public updateCurrentUser method needs to make a copy of the user,
              // and also check that the project matches
              user = userExtern ? Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(userExtern) : null;

              if (user) {
                _assert(user.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"
                /* INVALID_AUTH */
                );
              }

              return _context24.abrupt("return", this._updateCurrentUser(user && user._clone(this)));

            case 3:
            case "end":
              return _context24.stop();
          }
        }
      }, _callee24, this);
    }));

    function updateCurrentUser(_x52) {
      return _updateCurrentUser2.apply(this, arguments);
    }

    return updateCurrentUser;
  }();

  _proto9._updateCurrentUser = /*#__PURE__*/function () {
    var _updateCurrentUser3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee26(user) {
      var _this4 = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee26$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              if (!this._deleted) {
                _context26.next = 2;
                break;
              }

              return _context26.abrupt("return");

            case 2:
              if (user) {
                _assert(this.tenantId === user.tenantId, this, "tenant-id-mismatch"
                /* TENANT_ID_MISMATCH */
                );
              }

              return _context26.abrupt("return", this.queue( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee25() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee25$(_context25) {
                  while (1) {
                    switch (_context25.prev = _context25.next) {
                      case 0:
                        _context25.next = 2;
                        return _this4.directlySetCurrentUser(user);

                      case 2:
                        _this4.notifyAuthListeners();

                      case 3:
                      case "end":
                        return _context25.stop();
                    }
                  }
                }, _callee25);
              }))));

            case 4:
            case "end":
              return _context26.stop();
          }
        }
      }, _callee26, this);
    }));

    function _updateCurrentUser(_x53) {
      return _updateCurrentUser3.apply(this, arguments);
    }

    return _updateCurrentUser;
  }();

  _proto9.signOut = /*#__PURE__*/function () {
    var _signOut = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee27() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee27$(_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              if (!(this.redirectPersistenceManager || this._popupRedirectResolver)) {
                _context27.next = 3;
                break;
              }

              _context27.next = 3;
              return this._setRedirectUser(null);

            case 3:
              return _context27.abrupt("return", this._updateCurrentUser(null));

            case 4:
            case "end":
              return _context27.stop();
          }
        }
      }, _callee27, this);
    }));

    function signOut() {
      return _signOut.apply(this, arguments);
    }

    return signOut;
  }();

  _proto9.setPersistence = function setPersistence(persistence) {
    var _this5 = this;

    return this.queue( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee28() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee28$(_context28) {
        while (1) {
          switch (_context28.prev = _context28.next) {
            case 0:
              _context28.next = 2;
              return _this5.assertedPersistence.setPersistence(_getInstance(persistence));

            case 2:
            case "end":
              return _context28.stop();
          }
        }
      }, _callee28);
    })));
  };

  _proto9._getPersistence = function _getPersistence() {
    return this.assertedPersistence.persistence.type;
  };

  _proto9._updateErrorMap = function _updateErrorMap(errorMap) {
    this._errorFactory = new _firebase_util__WEBPACK_IMPORTED_MODULE_5__["ErrorFactory"]('auth', 'Firebase', errorMap());
  };

  _proto9.onAuthStateChanged = function onAuthStateChanged(nextOrObserver, error, completed) {
    return this.registerStateListener(this.authStateSubscription, nextOrObserver, error, completed);
  };

  _proto9.onIdTokenChanged = function onIdTokenChanged(nextOrObserver, error, completed) {
    return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error, completed);
  };

  _proto9.toJSON = function toJSON() {
    var _a;

    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
    };
  };

  _proto9._setRedirectUser = /*#__PURE__*/function () {
    var _setRedirectUser2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee29(user, popupRedirectResolver) {
      var redirectManager;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee29$(_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              _context29.next = 2;
              return this.getOrInitRedirectPersistenceManager(popupRedirectResolver);

            case 2:
              redirectManager = _context29.sent;
              return _context29.abrupt("return", user === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user));

            case 4:
            case "end":
              return _context29.stop();
          }
        }
      }, _callee29, this);
    }));

    function _setRedirectUser(_x54, _x55) {
      return _setRedirectUser2.apply(this, arguments);
    }

    return _setRedirectUser;
  }();

  _proto9.getOrInitRedirectPersistenceManager = /*#__PURE__*/function () {
    var _getOrInitRedirectPersistenceManager = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee30(popupRedirectResolver) {
      var resolver;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee30$(_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              if (this.redirectPersistenceManager) {
                _context30.next = 9;
                break;
              }

              resolver = popupRedirectResolver && _getInstance(popupRedirectResolver) || this._popupRedirectResolver;

              _assert(resolver, this, "argument-error"
              /* ARGUMENT_ERROR */
              );

              _context30.next = 5;
              return PersistenceUserManager.create(this, [_getInstance(resolver._redirectPersistence)], "redirectUser"
              /* REDIRECT_USER */
              );

            case 5:
              this.redirectPersistenceManager = _context30.sent;
              _context30.next = 8;
              return this.redirectPersistenceManager.getCurrentUser();

            case 8:
              this.redirectUser = _context30.sent;

            case 9:
              return _context30.abrupt("return", this.redirectPersistenceManager);

            case 10:
            case "end":
              return _context30.stop();
          }
        }
      }, _callee30, this);
    }));

    function getOrInitRedirectPersistenceManager(_x56) {
      return _getOrInitRedirectPersistenceManager.apply(this, arguments);
    }

    return getOrInitRedirectPersistenceManager;
  }();

  _proto9._redirectUserForId = /*#__PURE__*/function () {
    var _redirectUserForId2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee32(id) {
      var _a, _b;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee32$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              if (!this._isInitialized) {
                _context32.next = 3;
                break;
              }

              _context32.next = 3;
              return this.queue( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee31() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee31$(_context31) {
                  while (1) {
                    switch (_context31.prev = _context31.next) {
                      case 0:
                      case "end":
                        return _context31.stop();
                    }
                  }
                }, _callee31);
              })));

            case 3:
              if (!(((_a = this._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id)) {
                _context32.next = 5;
                break;
              }

              return _context32.abrupt("return", this._currentUser);

            case 5:
              if (!(((_b = this.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id)) {
                _context32.next = 7;
                break;
              }

              return _context32.abrupt("return", this.redirectUser);

            case 7:
              return _context32.abrupt("return", null);

            case 8:
            case "end":
              return _context32.stop();
          }
        }
      }, _callee32, this);
    }));

    function _redirectUserForId(_x57) {
      return _redirectUserForId2.apply(this, arguments);
    }

    return _redirectUserForId;
  }();

  _proto9._persistUserIfCurrent = /*#__PURE__*/function () {
    var _persistUserIfCurrent2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee34(user) {
      var _this6 = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee34$(_context34) {
        while (1) {
          switch (_context34.prev = _context34.next) {
            case 0:
              if (!(user === this.currentUser)) {
                _context34.next = 2;
                break;
              }

              return _context34.abrupt("return", this.queue( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee33() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee33$(_context33) {
                  while (1) {
                    switch (_context33.prev = _context33.next) {
                      case 0:
                        return _context33.abrupt("return", _this6.directlySetCurrentUser(user));

                      case 1:
                      case "end":
                        return _context33.stop();
                    }
                  }
                }, _callee33);
              }))));

            case 2:
            case "end":
              return _context34.stop();
          }
        }
      }, _callee34, this);
    }));

    function _persistUserIfCurrent(_x58) {
      return _persistUserIfCurrent2.apply(this, arguments);
    }

    return _persistUserIfCurrent;
  }()
  /** Notifies listeners only if the user is current */
  ;

  _proto9._notifyListenersIfCurrent = function _notifyListenersIfCurrent(user) {
    if (user === this.currentUser) {
      this.notifyAuthListeners();
    }
  };

  _proto9._key = function _key() {
    return this.config.authDomain + ":" + this.config.apiKey + ":" + this.name;
  };

  _proto9._startProactiveRefresh = function _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = true;

    if (this.currentUser) {
      this._currentUser._startProactiveRefresh();
    }
  };

  _proto9._stopProactiveRefresh = function _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = false;

    if (this.currentUser) {
      this._currentUser._stopProactiveRefresh();
    }
  }
  /** Returns the current user cast as the internal type */
  ;

  _proto9.notifyAuthListeners = function notifyAuthListeners() {
    var _a, _b;

    if (!this._isInitialized) {
      return;
    }

    this.idTokenSubscription.next(this.currentUser);
    var currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;

    if (this.lastNotifiedUid !== currentUid) {
      this.lastNotifiedUid = currentUid;
      this.authStateSubscription.next(this.currentUser);
    }
  };

  _proto9.registerStateListener = function registerStateListener(subscription, nextOrObserver, error, completed) {
    var _this7 = this;

    if (this._deleted) {
      return function () {};
    }

    var cb = typeof nextOrObserver === 'function' ? nextOrObserver : nextOrObserver.next.bind(nextOrObserver);
    var promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;

    _assert(promise, this, "internal-error"
    /* INTERNAL_ERROR */
    ); // The callback needs to be called asynchronously per the spec.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises


    promise.then(function () {
      return cb(_this7.currentUser);
    });

    if (typeof nextOrObserver === 'function') {
      return subscription.addObserver(nextOrObserver, error, completed);
    } else {
      return subscription.addObserver(nextOrObserver);
    }
  }
  /**
   * Unprotected (from race conditions) method to set the current user. This
   * should only be called from within a queued callback. This is necessary
   * because the queue shouldn't rely on another queued callback.
   */
  ;

  _proto9.directlySetCurrentUser =
  /*#__PURE__*/
  function () {
    var _directlySetCurrentUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee35(user) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee35$(_context35) {
        while (1) {
          switch (_context35.prev = _context35.next) {
            case 0:
              if (this.currentUser && this.currentUser !== user) {
                this._currentUser._stopProactiveRefresh();

                if (user && this.isProactiveRefreshEnabled) {
                  user._startProactiveRefresh();
                }
              }

              this.currentUser = user;

              if (!user) {
                _context35.next = 7;
                break;
              }

              _context35.next = 5;
              return this.assertedPersistence.setCurrentUser(user);

            case 5:
              _context35.next = 9;
              break;

            case 7:
              _context35.next = 9;
              return this.assertedPersistence.removeCurrentUser();

            case 9:
            case "end":
              return _context35.stop();
          }
        }
      }, _callee35, this);
    }));

    function directlySetCurrentUser(_x59) {
      return _directlySetCurrentUser.apply(this, arguments);
    }

    return directlySetCurrentUser;
  }();

  _proto9.queue = function queue(action) {
    // In case something errors, the callback still should be called in order
    // to keep the promise chain alive
    this.operations = this.operations.then(action, action);
    return this.operations;
  };

  _proto9._logFramework = function _logFramework(framework) {
    if (!framework || this.frameworks.includes(framework)) {
      return;
    }

    this.frameworks.push(framework); // Sort alphabetically so that "FirebaseCore-web,FirebaseUI-web" and
    // "FirebaseUI-web,FirebaseCore-web" aren't viewed as different.

    this.frameworks.sort();
    this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
  };

  _proto9._getFrameworks = function _getFrameworks() {
    return this.frameworks;
  };

  _proto9._getAdditionalHeaders = /*#__PURE__*/function () {
    var _getAdditionalHeaders2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee36() {
      var _headers;

      var headers;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee36$(_context36) {
        while (1) {
          switch (_context36.prev = _context36.next) {
            case 0:
              // Additional headers on every request
              headers = (_headers = {}, _headers["X-Client-Version"
              /* X_CLIENT_VERSION */
              ] = this.clientVersion, _headers);

              if (this.app.options.appId) {
                headers["X-Firebase-gmpid"
                /* X_FIREBASE_GMPID */
                ] = this.app.options.appId;
              }

              return _context36.abrupt("return", headers);

            case 3:
            case "end":
              return _context36.stop();
          }
        }
      }, _callee36, this);
    }));

    function _getAdditionalHeaders() {
      return _getAdditionalHeaders2.apply(this, arguments);
    }

    return _getAdditionalHeaders;
  }();

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AuthImpl, [{
    key: "_currentUser",
    get: function get() {
      return this.currentUser;
    }
  }, {
    key: "assertedPersistence",
    get: function get() {
      _assert(this.persistenceManager, this, "internal-error"
      /* INTERNAL_ERROR */
      );

      return this.persistenceManager;
    }
  }]);

  return AuthImpl;
}();
/**
 * Method to be used to cast down to our private implmentation of Auth.
 * It will also handle unwrapping from the compat type if necessary
 *
 * @param auth Auth object passed in from developer
 */


function _castAuth(auth) {
  return Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(auth);
}
/** Helper class to wrap subscriber logic */


var Subscription = /*#__PURE__*/function () {
  function Subscription(auth) {
    var _this8 = this;

    this.auth = auth;
    this.observer = null;
    this.addObserver = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["createSubscribe"])(function (observer) {
      return _this8.observer = observer;
    });
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Subscription, [{
    key: "next",
    get: function get() {
      _assert(this.observer, this.auth, "internal-error"
      /* INTERNAL_ERROR */
      );

      return this.observer.next.bind(this.observer);
    }
  }]);

  return Subscription;
}();
/**
 * Changes the {@link Auth} instance to communicate with the Firebase Auth Emulator, instead of production
 * Firebase Auth services.
 *
 * @remarks
 * This must be called synchronously immediately following the first call to
 * {@link initializeAuth}.  Do not use with production credentials as emulator
 * traffic is not encrypted.
 *
 *
 * @example
 * ```javascript
 * connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param url - The URL at which the emulator is running (eg, 'http://localhost:9099').
 * @param options - Optional. `options.disableWarnings` defaults to `false`. Set it to
 * `true` to disable the warning banner attached to the DOM.
 *
 * @public
 */


function connectAuthEmulator(auth, url, options) {
  var authInternal = _castAuth(auth);

  _assert(authInternal._canInitEmulator, authInternal, "emulator-config-failed"
  /* EMULATOR_CONFIG_FAILED */
  );

  _assert(/^https?:\/\//.test(url), authInternal, "invalid-emulator-scheme"
  /* INVALID_EMULATOR_SCHEME */
  );

  var disableWarnings = !!(options === null || options === void 0 ? void 0 : options.disableWarnings);
  var protocol = extractProtocol(url);

  var _extractHostAndPort = extractHostAndPort(url),
      host = _extractHostAndPort.host,
      port = _extractHostAndPort.port;

  var portStr = port === null ? '' : ":" + port; // Always replace path with "/" (even if input url had no path at all, or had a different one).

  authInternal.config.emulator = {
    url: protocol + "//" + host + portStr + "/"
  };
  authInternal.settings.appVerificationDisabledForTesting = true;
  authInternal.emulatorConfig = Object.freeze({
    host: host,
    port: port,
    protocol: protocol.replace(':', ''),
    options: Object.freeze({
      disableWarnings: disableWarnings
    })
  });

  if (!disableWarnings) {
    emitEmulatorWarning();
  }
}

function extractProtocol(url) {
  var protocolEnd = url.indexOf(':');
  return protocolEnd < 0 ? '' : url.substr(0, protocolEnd + 1);
}

function extractHostAndPort(url) {
  var protocol = extractProtocol(url);
  var authority = /(\/\/)?([^?#/]+)/.exec(url.substr(protocol.length)); // Between // and /, ? or #.

  if (!authority) {
    return {
      host: '',
      port: null
    };
  }

  var hostAndPort = authority[2].split('@').pop() || ''; // Strip out "username:password@".

  var bracketedIPv6 = /^(\[[^\]]+\])(:|$)/.exec(hostAndPort);

  if (bracketedIPv6) {
    var host = bracketedIPv6[1];
    return {
      host: host,
      port: parsePort(hostAndPort.substr(host.length + 1))
    };
  } else {
    var _hostAndPort$split = hostAndPort.split(':'),
        _host = _hostAndPort$split[0],
        port = _hostAndPort$split[1];

    return {
      host: _host,
      port: parsePort(port)
    };
  }
}

function parsePort(portStr) {
  if (!portStr) {
    return null;
  }

  var port = Number(portStr);

  if (isNaN(port)) {
    return null;
  }

  return port;
}

function emitEmulatorWarning() {
  function attachBanner() {
    var el = document.createElement('p');
    var sty = el.style;
    el.innerText = 'Running in emulator mode. Do not use with production credentials.';
    sty.position = 'fixed';
    sty.width = '100%';
    sty.backgroundColor = '#ffffff';
    sty.border = '.1em solid #000000';
    sty.color = '#b50000';
    sty.bottom = '0px';
    sty.left = '0px';
    sty.margin = '0px';
    sty.zIndex = '10000';
    sty.textAlign = 'center';
    el.classList.add('firebase-emulator-warning');
    document.body.appendChild(el);
  }

  if (typeof console !== 'undefined' && typeof console.info === 'function') {
    console.info('WARNING: You are using the Auth Emulator,' + ' which is intended for local testing only.  Do not use with' + ' production credentials.');
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', attachBanner);
    } else {
      attachBanner();
    }
  }
}
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
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */


var AuthCredential = /*#__PURE__*/function () {
  /** @internal */
  function AuthCredential(
  /**
   * The authentication provider ID for the credential.
   *
   * @remarks
   * For example, 'facebook.com', or 'google.com'.
   */
  providerId,
  /**
   * The authentication sign in method for the credential.
   *
   * @remarks
   * For example, {@link SignInMethod}.EMAIL_PASSWORD, or
   * {@link SignInMethod}.EMAIL_LINK. This corresponds to the sign-in method
   * identifier as returned in {@link fetchSignInMethodsForEmail}.
   */
  signInMethod) {
    this.providerId = providerId;
    this.signInMethod = signInMethod;
  }
  /**
   * Returns a JSON-serializable representation of this object.
   *
   * @returns a JSON-serializable representation of this object.
   */


  var _proto10 = AuthCredential.prototype;

  _proto10.toJSON = function toJSON() {
    return debugFail('not implemented');
  }
  /** @internal */
  ;

  _proto10._getIdTokenResponse = function _getIdTokenResponse(_auth) {
    return debugFail('not implemented');
  }
  /** @internal */
  ;

  _proto10._linkToIdToken = function _linkToIdToken(_auth, _idToken) {
    return debugFail('not implemented');
  }
  /** @internal */
  ;

  _proto10._getReauthenticationResolver = function _getReauthenticationResolver(_auth) {
    return debugFail('not implemented');
  };

  return AuthCredential;
}();
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


function resetPassword(_x60, _x61) {
  return _resetPassword.apply(this, arguments);
}

function _resetPassword() {
  _resetPassword = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee100(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee100$(_context100) {
      while (1) {
        switch (_context100.prev = _context100.next) {
          case 0:
            return _context100.abrupt("return", _performApiRequest(auth, "POST"
            /* POST */
            , "/v1/accounts:resetPassword"
            /* RESET_PASSWORD */
            , _addTidIfNecessary(auth, request)));

          case 1:
          case "end":
            return _context100.stop();
        }
      }
    }, _callee100);
  }));
  return _resetPassword.apply(this, arguments);
}

function updateEmailPassword(_x62, _x63) {
  return _updateEmailPassword.apply(this, arguments);
}

function _updateEmailPassword() {
  _updateEmailPassword = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee101(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee101$(_context101) {
      while (1) {
        switch (_context101.prev = _context101.next) {
          case 0:
            return _context101.abrupt("return", _performApiRequest(auth, "POST"
            /* POST */
            , "/v1/accounts:update"
            /* SET_ACCOUNT_INFO */
            , request));

          case 1:
          case "end":
            return _context101.stop();
        }
      }
    }, _callee101);
  }));
  return _updateEmailPassword.apply(this, arguments);
}

function applyActionCode$1(_x64, _x65) {
  return _applyActionCode$.apply(this, arguments);
}
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


function _applyActionCode$() {
  _applyActionCode$ = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee102(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee102$(_context102) {
      while (1) {
        switch (_context102.prev = _context102.next) {
          case 0:
            return _context102.abrupt("return", _performApiRequest(auth, "POST"
            /* POST */
            , "/v1/accounts:update"
            /* SET_ACCOUNT_INFO */
            , _addTidIfNecessary(auth, request)));

          case 1:
          case "end":
            return _context102.stop();
        }
      }
    }, _callee102);
  }));
  return _applyActionCode$.apply(this, arguments);
}

function signInWithPassword(_x66, _x67) {
  return _signInWithPassword.apply(this, arguments);
}

function _signInWithPassword() {
  _signInWithPassword = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee103(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee103$(_context103) {
      while (1) {
        switch (_context103.prev = _context103.next) {
          case 0:
            return _context103.abrupt("return", _performSignInRequest(auth, "POST"
            /* POST */
            , "/v1/accounts:signInWithPassword"
            /* SIGN_IN_WITH_PASSWORD */
            , _addTidIfNecessary(auth, request)));

          case 1:
          case "end":
            return _context103.stop();
        }
      }
    }, _callee103);
  }));
  return _signInWithPassword.apply(this, arguments);
}

function sendOobCode(_x68, _x69) {
  return _sendOobCode.apply(this, arguments);
}

function _sendOobCode() {
  _sendOobCode = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee104(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee104$(_context104) {
      while (1) {
        switch (_context104.prev = _context104.next) {
          case 0:
            return _context104.abrupt("return", _performApiRequest(auth, "POST"
            /* POST */
            , "/v1/accounts:sendOobCode"
            /* SEND_OOB_CODE */
            , _addTidIfNecessary(auth, request)));

          case 1:
          case "end":
            return _context104.stop();
        }
      }
    }, _callee104);
  }));
  return _sendOobCode.apply(this, arguments);
}

function sendEmailVerification$1(_x70, _x71) {
  return _sendEmailVerification$.apply(this, arguments);
}

function _sendEmailVerification$() {
  _sendEmailVerification$ = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee105(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee105$(_context105) {
      while (1) {
        switch (_context105.prev = _context105.next) {
          case 0:
            return _context105.abrupt("return", sendOobCode(auth, request));

          case 1:
          case "end":
            return _context105.stop();
        }
      }
    }, _callee105);
  }));
  return _sendEmailVerification$.apply(this, arguments);
}

function sendPasswordResetEmail$1(_x72, _x73) {
  return _sendPasswordResetEmail$.apply(this, arguments);
}

function _sendPasswordResetEmail$() {
  _sendPasswordResetEmail$ = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee106(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee106$(_context106) {
      while (1) {
        switch (_context106.prev = _context106.next) {
          case 0:
            return _context106.abrupt("return", sendOobCode(auth, request));

          case 1:
          case "end":
            return _context106.stop();
        }
      }
    }, _callee106);
  }));
  return _sendPasswordResetEmail$.apply(this, arguments);
}

function sendSignInLinkToEmail$1(_x74, _x75) {
  return _sendSignInLinkToEmail$.apply(this, arguments);
}

function _sendSignInLinkToEmail$() {
  _sendSignInLinkToEmail$ = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee107(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee107$(_context107) {
      while (1) {
        switch (_context107.prev = _context107.next) {
          case 0:
            return _context107.abrupt("return", sendOobCode(auth, request));

          case 1:
          case "end":
            return _context107.stop();
        }
      }
    }, _callee107);
  }));
  return _sendSignInLinkToEmail$.apply(this, arguments);
}

function verifyAndChangeEmail(_x76, _x77) {
  return _verifyAndChangeEmail.apply(this, arguments);
}
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


function _verifyAndChangeEmail() {
  _verifyAndChangeEmail = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee108(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee108$(_context108) {
      while (1) {
        switch (_context108.prev = _context108.next) {
          case 0:
            return _context108.abrupt("return", sendOobCode(auth, request));

          case 1:
          case "end":
            return _context108.stop();
        }
      }
    }, _callee108);
  }));
  return _verifyAndChangeEmail.apply(this, arguments);
}

function signInWithEmailLink$1(_x78, _x79) {
  return _signInWithEmailLink$.apply(this, arguments);
}

function _signInWithEmailLink$() {
  _signInWithEmailLink$ = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee109(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee109$(_context109) {
      while (1) {
        switch (_context109.prev = _context109.next) {
          case 0:
            return _context109.abrupt("return", _performSignInRequest(auth, "POST"
            /* POST */
            , "/v1/accounts:signInWithEmailLink"
            /* SIGN_IN_WITH_EMAIL_LINK */
            , _addTidIfNecessary(auth, request)));

          case 1:
          case "end":
            return _context109.stop();
        }
      }
    }, _callee109);
  }));
  return _signInWithEmailLink$.apply(this, arguments);
}

function signInWithEmailLinkForLinking(_x80, _x81) {
  return _signInWithEmailLinkForLinking.apply(this, arguments);
}
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
 * Interface that represents the credentials returned by {@link EmailAuthProvider} for
 * {@link ProviderId}.PASSWORD
 *
 * @remarks
 * Covers both {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @public
 */


function _signInWithEmailLinkForLinking() {
  _signInWithEmailLinkForLinking = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee110(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee110$(_context110) {
      while (1) {
        switch (_context110.prev = _context110.next) {
          case 0:
            return _context110.abrupt("return", _performSignInRequest(auth, "POST"
            /* POST */
            , "/v1/accounts:signInWithEmailLink"
            /* SIGN_IN_WITH_EMAIL_LINK */
            , _addTidIfNecessary(auth, request)));

          case 1:
          case "end":
            return _context110.stop();
        }
      }
    }, _callee110);
  }));
  return _signInWithEmailLinkForLinking.apply(this, arguments);
}

var EmailAuthCredential = /*#__PURE__*/function (_AuthCredential) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(EmailAuthCredential, _AuthCredential);

  /** @internal */
  function EmailAuthCredential(
  /** @internal */
  _email,
  /** @internal */
  _password, signInMethod,
  /** @internal */
  _tenantId) {
    var _this9;

    if (_tenantId === void 0) {
      _tenantId = null;
    }

    _this9 = _AuthCredential.call(this, "password"
    /* PASSWORD */
    , signInMethod) || this;
    _this9._email = _email;
    _this9._password = _password;
    _this9._tenantId = _tenantId;
    return _this9;
  }
  /** @internal */


  EmailAuthCredential._fromEmailAndPassword = function _fromEmailAndPassword(email, password) {
    return new EmailAuthCredential(email, password, "password"
    /* EMAIL_PASSWORD */
    );
  }
  /** @internal */
  ;

  EmailAuthCredential._fromEmailAndCode = function _fromEmailAndCode(email, oobCode, tenantId) {
    if (tenantId === void 0) {
      tenantId = null;
    }

    return new EmailAuthCredential(email, oobCode, "emailLink"
    /* EMAIL_LINK */
    , tenantId);
  }
  /** {@inheritdoc AuthCredential.toJSON} */
  ;

  var _proto11 = EmailAuthCredential.prototype;

  _proto11.toJSON = function toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
   *
   * @param json - Either `object` or the stringified representation of the object. When string is
   * provided, `JSON.parse` would be called first.
   *
   * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
   */
  ;

  EmailAuthCredential.fromJSON = function fromJSON(json) {
    var obj = typeof json === 'string' ? JSON.parse(json) : json;

    if ((obj === null || obj === void 0 ? void 0 : obj.email) && (obj === null || obj === void 0 ? void 0 : obj.password)) {
      if (obj.signInMethod === "password"
      /* EMAIL_PASSWORD */
      ) {
        return this._fromEmailAndPassword(obj.email, obj.password);
      } else if (obj.signInMethod === "emailLink"
      /* EMAIL_LINK */
      ) {
        return this._fromEmailAndCode(obj.email, obj.password, obj.tenantId);
      }
    }

    return null;
  }
  /** @internal */
  ;

  _proto11._getIdTokenResponse =
  /*#__PURE__*/
  function () {
    var _getIdTokenResponse2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee37(auth) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee37$(_context37) {
        while (1) {
          switch (_context37.prev = _context37.next) {
            case 0:
              _context37.t0 = this.signInMethod;
              _context37.next = _context37.t0 === "password"
              /* EMAIL_PASSWORD */
              ? 3 : _context37.t0 === "emailLink"
              /* EMAIL_LINK */
              ? 4 : 5;
              break;

            case 3:
              return _context37.abrupt("return", signInWithPassword(auth, {
                returnSecureToken: true,
                email: this._email,
                password: this._password
              }));

            case 4:
              return _context37.abrupt("return", signInWithEmailLink$1(auth, {
                email: this._email,
                oobCode: this._password
              }));

            case 5:
              _fail(auth, "internal-error"
              /* INTERNAL_ERROR */
              );

            case 6:
            case "end":
              return _context37.stop();
          }
        }
      }, _callee37, this);
    }));

    function _getIdTokenResponse(_x82) {
      return _getIdTokenResponse2.apply(this, arguments);
    }

    return _getIdTokenResponse;
  }()
  /** @internal */
  ;

  _proto11._linkToIdToken =
  /*#__PURE__*/
  function () {
    var _linkToIdToken2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee38(auth, idToken) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee38$(_context38) {
        while (1) {
          switch (_context38.prev = _context38.next) {
            case 0:
              _context38.t0 = this.signInMethod;
              _context38.next = _context38.t0 === "password"
              /* EMAIL_PASSWORD */
              ? 3 : _context38.t0 === "emailLink"
              /* EMAIL_LINK */
              ? 4 : 5;
              break;

            case 3:
              return _context38.abrupt("return", updateEmailPassword(auth, {
                idToken: idToken,
                returnSecureToken: true,
                email: this._email,
                password: this._password
              }));

            case 4:
              return _context38.abrupt("return", signInWithEmailLinkForLinking(auth, {
                idToken: idToken,
                email: this._email,
                oobCode: this._password
              }));

            case 5:
              _fail(auth, "internal-error"
              /* INTERNAL_ERROR */
              );

            case 6:
            case "end":
              return _context38.stop();
          }
        }
      }, _callee38, this);
    }));

    function _linkToIdToken(_x83, _x84) {
      return _linkToIdToken2.apply(this, arguments);
    }

    return _linkToIdToken;
  }()
  /** @internal */
  ;

  _proto11._getReauthenticationResolver = function _getReauthenticationResolver(auth) {
    return this._getIdTokenResponse(auth);
  };

  return EmailAuthCredential;
}(AuthCredential);
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


function signInWithIdp(_x85, _x86) {
  return _signInWithIdp.apply(this, arguments);
}
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


function _signInWithIdp() {
  _signInWithIdp = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee111(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee111$(_context111) {
      while (1) {
        switch (_context111.prev = _context111.next) {
          case 0:
            return _context111.abrupt("return", _performSignInRequest(auth, "POST"
            /* POST */
            , "/v1/accounts:signInWithIdp"
            /* SIGN_IN_WITH_IDP */
            , _addTidIfNecessary(auth, request)));

          case 1:
          case "end":
            return _context111.stop();
        }
      }
    }, _callee111);
  }));
  return _signInWithIdp.apply(this, arguments);
}

var IDP_REQUEST_URI$1 = 'http://localhost';
/**
 * Represents the OAuth credentials returned by an {@link OAuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */

var OAuthCredential = /*#__PURE__*/function (_AuthCredential2) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(OAuthCredential, _AuthCredential2);

  function OAuthCredential() {
    var _this10;

    _this10 = _AuthCredential2.apply(this, arguments) || this;
    _this10.pendingToken = null;
    return _this10;
  }
  /** @internal */


  OAuthCredential._fromParams = function _fromParams(params) {
    var cred = new OAuthCredential(params.providerId, params.signInMethod);

    if (params.idToken || params.accessToken) {
      // OAuth 2 and either ID token or access token.
      if (params.idToken) {
        cred.idToken = params.idToken;
      }

      if (params.accessToken) {
        cred.accessToken = params.accessToken;
      } // Add nonce if available and no pendingToken is present.


      if (params.nonce && !params.pendingToken) {
        cred.nonce = params.nonce;
      }

      if (params.pendingToken) {
        cred.pendingToken = params.pendingToken;
      }
    } else if (params.oauthToken && params.oauthTokenSecret) {
      // OAuth 1 and OAuth token with token secret
      cred.accessToken = params.oauthToken;
      cred.secret = params.oauthTokenSecret;
    } else {
      _fail("argument-error"
      /* ARGUMENT_ERROR */
      );
    }

    return cred;
  }
  /** {@inheritdoc AuthCredential.toJSON}  */
  ;

  var _proto12 = OAuthCredential.prototype;

  _proto12.toJSON = function toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an
   * {@link  AuthCredential}.
   *
   * @param json - Input can be either Object or the stringified representation of the object.
   * When string is provided, JSON.parse would be called first.
   *
   * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
   */
  ;

  OAuthCredential.fromJSON = function fromJSON(json) {
    var obj = typeof json === 'string' ? JSON.parse(json) : json;

    var providerId = obj.providerId,
        signInMethod = obj.signInMethod,
        rest = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__rest"])(obj, ["providerId", "signInMethod"]);

    if (!providerId || !signInMethod) {
      return null;
    }

    var cred = new OAuthCredential(providerId, signInMethod);
    cred.idToken = rest.idToken || undefined;
    cred.accessToken = rest.accessToken || undefined;
    cred.secret = rest.secret;
    cred.nonce = rest.nonce;
    cred.pendingToken = rest.pendingToken || null;
    return cred;
  }
  /** @internal */
  ;

  _proto12._getIdTokenResponse = function _getIdTokenResponse(auth) {
    var request = this.buildRequest();
    return signInWithIdp(auth, request);
  }
  /** @internal */
  ;

  _proto12._linkToIdToken = function _linkToIdToken(auth, idToken) {
    var request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth, request);
  }
  /** @internal */
  ;

  _proto12._getReauthenticationResolver = function _getReauthenticationResolver(auth) {
    var request = this.buildRequest();
    request.autoCreate = false;
    return signInWithIdp(auth, request);
  };

  _proto12.buildRequest = function buildRequest() {
    var request = {
      requestUri: IDP_REQUEST_URI$1,
      returnSecureToken: true
    };

    if (this.pendingToken) {
      request.pendingToken = this.pendingToken;
    } else {
      var postBody = {};

      if (this.idToken) {
        postBody['id_token'] = this.idToken;
      }

      if (this.accessToken) {
        postBody['access_token'] = this.accessToken;
      }

      if (this.secret) {
        postBody['oauth_token_secret'] = this.secret;
      }

      postBody['providerId'] = this.providerId;

      if (this.nonce && !this.pendingToken) {
        postBody['nonce'] = this.nonce;
      }

      request.postBody = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["querystring"])(postBody);
    }

    return request;
  };

  return OAuthCredential;
}(AuthCredential);
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


function sendPhoneVerificationCode(_x87, _x88) {
  return _sendPhoneVerificationCode.apply(this, arguments);
}

function _sendPhoneVerificationCode() {
  _sendPhoneVerificationCode = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee112(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee112$(_context112) {
      while (1) {
        switch (_context112.prev = _context112.next) {
          case 0:
            return _context112.abrupt("return", _performApiRequest(auth, "POST"
            /* POST */
            , "/v1/accounts:sendVerificationCode"
            /* SEND_VERIFICATION_CODE */
            , _addTidIfNecessary(auth, request)));

          case 1:
          case "end":
            return _context112.stop();
        }
      }
    }, _callee112);
  }));
  return _sendPhoneVerificationCode.apply(this, arguments);
}

function signInWithPhoneNumber$1(_x89, _x90) {
  return _signInWithPhoneNumber$.apply(this, arguments);
}

function _signInWithPhoneNumber$() {
  _signInWithPhoneNumber$ = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee113(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee113$(_context113) {
      while (1) {
        switch (_context113.prev = _context113.next) {
          case 0:
            return _context113.abrupt("return", _performSignInRequest(auth, "POST"
            /* POST */
            , "/v1/accounts:signInWithPhoneNumber"
            /* SIGN_IN_WITH_PHONE_NUMBER */
            , _addTidIfNecessary(auth, request)));

          case 1:
          case "end":
            return _context113.stop();
        }
      }
    }, _callee113);
  }));
  return _signInWithPhoneNumber$.apply(this, arguments);
}

function linkWithPhoneNumber$1(_x91, _x92) {
  return _linkWithPhoneNumber$.apply(this, arguments);
}

function _linkWithPhoneNumber$() {
  _linkWithPhoneNumber$ = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee114(auth, request) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee114$(_context114) {
      while (1) {
        switch (_context114.prev = _context114.next) {
          case 0:
            _context114.next = 2;
            return _performSignInRequest(auth, "POST"
            /* POST */
            , "/v1/accounts:signInWithPhoneNumber"
            /* SIGN_IN_WITH_PHONE_NUMBER */
            , _addTidIfNecessary(auth, request));

          case 2:
            response = _context114.sent;

            if (!response.temporaryProof) {
              _context114.next = 5;
              break;
            }

            throw _makeTaggedError(auth, "account-exists-with-different-credential"
            /* NEED_CONFIRMATION */
            , response);

          case 5:
            return _context114.abrupt("return", response);

          case 6:
          case "end":
            return _context114.stop();
        }
      }
    }, _callee114);
  }));
  return _linkWithPhoneNumber$.apply(this, arguments);
}

var VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_ = (_VERIFY_PHONE_NUMBER_ = {}, _VERIFY_PHONE_NUMBER_["USER_NOT_FOUND"
/* USER_NOT_FOUND */
] = "user-not-found", _VERIFY_PHONE_NUMBER_);

function verifyPhoneNumberForExisting(_x93, _x94) {
  return _verifyPhoneNumberForExisting.apply(this, arguments);
}
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
 * Represents the credentials returned by {@link PhoneAuthProvider}.
 *
 * @public
 */


function _verifyPhoneNumberForExisting() {
  _verifyPhoneNumberForExisting = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee115(auth, request) {
    var apiRequest;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee115$(_context115) {
      while (1) {
        switch (_context115.prev = _context115.next) {
          case 0:
            apiRequest = Object.assign(Object.assign({}, request), {
              operation: 'REAUTH'
            });
            return _context115.abrupt("return", _performSignInRequest(auth, "POST"
            /* POST */
            , "/v1/accounts:signInWithPhoneNumber"
            /* SIGN_IN_WITH_PHONE_NUMBER */
            , _addTidIfNecessary(auth, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_));

          case 2:
          case "end":
            return _context115.stop();
        }
      }
    }, _callee115);
  }));
  return _verifyPhoneNumberForExisting.apply(this, arguments);
}

var PhoneAuthCredential = /*#__PURE__*/function (_AuthCredential3) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(PhoneAuthCredential, _AuthCredential3);

  function PhoneAuthCredential(params) {
    var _this11;

    _this11 = _AuthCredential3.call(this, "phone"
    /* PHONE */
    , "phone"
    /* PHONE */
    ) || this;
    _this11.params = params;
    return _this11;
  }
  /** @internal */


  PhoneAuthCredential._fromVerification = function _fromVerification(verificationId, verificationCode) {
    return new PhoneAuthCredential({
      verificationId: verificationId,
      verificationCode: verificationCode
    });
  }
  /** @internal */
  ;

  PhoneAuthCredential._fromTokenResponse = function _fromTokenResponse(phoneNumber, temporaryProof) {
    return new PhoneAuthCredential({
      phoneNumber: phoneNumber,
      temporaryProof: temporaryProof
    });
  }
  /** @internal */
  ;

  var _proto13 = PhoneAuthCredential.prototype;

  _proto13._getIdTokenResponse = function _getIdTokenResponse(auth) {
    return signInWithPhoneNumber$1(auth, this._makeVerificationRequest());
  }
  /** @internal */
  ;

  _proto13._linkToIdToken = function _linkToIdToken(auth, idToken) {
    return linkWithPhoneNumber$1(auth, Object.assign({
      idToken: idToken
    }, this._makeVerificationRequest()));
  }
  /** @internal */
  ;

  _proto13._getReauthenticationResolver = function _getReauthenticationResolver(auth) {
    return verifyPhoneNumberForExisting(auth, this._makeVerificationRequest());
  }
  /** @internal */
  ;

  _proto13._makeVerificationRequest = function _makeVerificationRequest() {
    var _this$params = this.params,
        temporaryProof = _this$params.temporaryProof,
        phoneNumber = _this$params.phoneNumber,
        verificationId = _this$params.verificationId,
        verificationCode = _this$params.verificationCode;

    if (temporaryProof && phoneNumber) {
      return {
        temporaryProof: temporaryProof,
        phoneNumber: phoneNumber
      };
    }

    return {
      sessionInfo: verificationId,
      code: verificationCode
    };
  }
  /** {@inheritdoc AuthCredential.toJSON} */
  ;

  _proto13.toJSON = function toJSON() {
    var obj = {
      providerId: this.providerId
    };

    if (this.params.phoneNumber) {
      obj.phoneNumber = this.params.phoneNumber;
    }

    if (this.params.temporaryProof) {
      obj.temporaryProof = this.params.temporaryProof;
    }

    if (this.params.verificationCode) {
      obj.verificationCode = this.params.verificationCode;
    }

    if (this.params.verificationId) {
      obj.verificationId = this.params.verificationId;
    }

    return obj;
  }
  /** Generates a phone credential based on a plain object or a JSON string. */
  ;

  PhoneAuthCredential.fromJSON = function fromJSON(json) {
    if (typeof json === 'string') {
      json = JSON.parse(json);
    }

    var _json = json,
        verificationId = _json.verificationId,
        verificationCode = _json.verificationCode,
        phoneNumber = _json.phoneNumber,
        temporaryProof = _json.temporaryProof;

    if (!verificationCode && !verificationId && !phoneNumber && !temporaryProof) {
      return null;
    }

    return new PhoneAuthCredential({
      verificationId: verificationId,
      verificationCode: verificationCode,
      phoneNumber: phoneNumber,
      temporaryProof: temporaryProof
    });
  };

  return PhoneAuthCredential;
}(AuthCredential);
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
 * Maps the mode string in action code URL to Action Code Info operation.
 *
 * @param mode
 */


function parseMode(mode) {
  switch (mode) {
    case 'recoverEmail':
      return "RECOVER_EMAIL"
      /* RECOVER_EMAIL */
      ;

    case 'resetPassword':
      return "PASSWORD_RESET"
      /* PASSWORD_RESET */
      ;

    case 'signIn':
      return "EMAIL_SIGNIN"
      /* EMAIL_SIGNIN */
      ;

    case 'verifyEmail':
      return "VERIFY_EMAIL"
      /* VERIFY_EMAIL */
      ;

    case 'verifyAndChangeEmail':
      return "VERIFY_AND_CHANGE_EMAIL"
      /* VERIFY_AND_CHANGE_EMAIL */
      ;

    case 'revertSecondFactorAddition':
      return "REVERT_SECOND_FACTOR_ADDITION"
      /* REVERT_SECOND_FACTOR_ADDITION */
      ;

    default:
      return null;
  }
}
/**
 * Helper to parse FDL links
 *
 * @param url
 */


function parseDeepLink(url) {
  var link = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["querystringDecode"])(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["extractQuerystring"])(url))['link']; // Double link case (automatic redirect).

  var doubleDeepLink = link ? Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["querystringDecode"])(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["extractQuerystring"])(link))['deep_link_id'] : null; // iOS custom scheme links.

  var iOSDeepLink = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["querystringDecode"])(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["extractQuerystring"])(url))['deep_link_id'];
  var iOSDoubleDeepLink = iOSDeepLink ? Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["querystringDecode"])(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["extractQuerystring"])(iOSDeepLink))['link'] : null;
  return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
}
/**
 * A utility class to parse email action URLs such as password reset, email verification,
 * email link sign in, etc.
 *
 * @public
 */


var ActionCodeURL = /*#__PURE__*/function () {
  /**
   * @param actionLink - The link from which to extract the URL.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @internal
   */
  function ActionCodeURL(actionLink) {
    var _a, _b, _c, _d, _e, _f;

    var searchParams = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["querystringDecode"])(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["extractQuerystring"])(actionLink));
    var apiKey = (_a = searchParams["apiKey"
    /* API_KEY */
    ]) !== null && _a !== void 0 ? _a : null;
    var code = (_b = searchParams["oobCode"
    /* CODE */
    ]) !== null && _b !== void 0 ? _b : null;
    var operation = parseMode((_c = searchParams["mode"
    /* MODE */
    ]) !== null && _c !== void 0 ? _c : null); // Validate API key, code and mode.

    _assert(apiKey && code && operation, "argument-error"
    /* ARGUMENT_ERROR */
    );

    this.apiKey = apiKey;
    this.operation = operation;
    this.code = code;
    this.continueUrl = (_d = searchParams["continueUrl"
    /* CONTINUE_URL */
    ]) !== null && _d !== void 0 ? _d : null;
    this.languageCode = (_e = searchParams["languageCode"
    /* LANGUAGE_CODE */
    ]) !== null && _e !== void 0 ? _e : null;
    this.tenantId = (_f = searchParams["tenantId"
    /* TENANT_ID */
    ]) !== null && _f !== void 0 ? _f : null;
  }
  /**
   * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
   * otherwise returns null.
   *
   * @param link  - The email action link string.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @public
   */


  ActionCodeURL.parseLink = function parseLink(link) {
    var actionLink = parseDeepLink(link);

    try {
      return new ActionCodeURL(actionLink);
    } catch (_a) {
      return null;
    }
  };

  return ActionCodeURL;
}();
/**
 * Parses the email action link string and returns an {@link ActionCodeURL} if
 * the link is valid, otherwise returns null.
 *
 * @public
 */


function parseActionCodeURL(link) {
  return ActionCodeURL.parseLink(link);
}
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
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */


var EmailAuthProvider = /*#__PURE__*/function () {
  function EmailAuthProvider() {
    /**
     * Always set to {@link ProviderId}.PASSWORD, even for email link.
     */
    this.providerId = EmailAuthProvider.PROVIDER_ID;
  }
  /**
   * Initialize an {@link AuthCredential} using an email and password.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credential(email, password);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * const userCredential = await signInWithEmailAndPassword(auth, email, password);
   * ```
   *
   * @param email - Email address.
   * @param password - User account password.
   * @returns The auth provider credential.
   */


  EmailAuthProvider.credential = function credential(email, password) {
    return EmailAuthCredential._fromEmailAndPassword(email, password);
  }
  /**
   * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
   * email link operation.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * await sendSignInLinkToEmail(auth, email);
   * // Obtain emailLink from user.
   * const userCredential = await signInWithEmailLink(auth, email, emailLink);
   * ```
   *
   * @param auth - The {@link Auth} instance used to verify the link.
   * @param email - Email address.
   * @param emailLink - Sign-in email link.
   * @returns - The auth provider credential.
   */
  ;

  EmailAuthProvider.credentialWithLink = function credentialWithLink(email, emailLink) {
    var actionCodeUrl = ActionCodeURL.parseLink(emailLink);

    _assert(actionCodeUrl, "argument-error"
    /* ARGUMENT_ERROR */
    );

    return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
  };

  return EmailAuthProvider;
}();
/**
 * Always set to {@link ProviderId}.PASSWORD, even for email link.
 */


EmailAuthProvider.PROVIDER_ID = "password"
/* PASSWORD */
;
/**
 * Always set to {@link SignInMethod}.EMAIL_PASSWORD.
 */

EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password"
/* EMAIL_PASSWORD */
;
/**
 * Always set to {@link SignInMethod}.EMAIL_LINK.
 */

EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink"
/* EMAIL_LINK */
;
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
 * The base class for all Federated providers (OAuth (including OIDC), SAML).
 *
 * This class is not meant to be instantiated directly.
 *
 * @public
 */

var FederatedAuthProvider = /*#__PURE__*/function () {
  /**
   * Constructor for generic OAuth providers.
   *
   * @param providerId - Provider for which credentials should be generated.
   */
  function FederatedAuthProvider(providerId) {
    this.providerId = providerId;
    /** @internal */

    this.defaultLanguageCode = null;
    /** @internal */

    this.customParameters = {};
  }
  /**
   * Set the language gode.
   *
   * @param languageCode - language code
   */


  var _proto14 = FederatedAuthProvider.prototype;

  _proto14.setDefaultLanguage = function setDefaultLanguage(languageCode) {
    this.defaultLanguageCode = languageCode;
  }
  /**
   * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
   * operations.
   *
   * @remarks
   * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
   * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
   *
   * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
   */
  ;

  _proto14.setCustomParameters = function setCustomParameters(customOAuthParameters) {
    this.customParameters = customOAuthParameters;
    return this;
  }
  /**
   * Retrieve the current list of {@link CustomParameters}.
   */
  ;

  _proto14.getCustomParameters = function getCustomParameters() {
    return this.customParameters;
  };

  return FederatedAuthProvider;
}();
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
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */


var BaseOAuthProvider = /*#__PURE__*/function (_FederatedAuthProvide) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(BaseOAuthProvider, _FederatedAuthProvide);

  function BaseOAuthProvider() {
    var _this12;

    _this12 = _FederatedAuthProvide.apply(this, arguments) || this;
    /** @internal */

    _this12.scopes = [];
    return _this12;
  }
  /**
   * Add an OAuth scope to the credential.
   *
   * @param scope - Provider OAuth scope to add.
   */


  var _proto15 = BaseOAuthProvider.prototype;

  _proto15.addScope = function addScope(scope) {
    // If not already added, add scope to list.
    if (!this.scopes.includes(scope)) {
      this.scopes.push(scope);
    }

    return this;
  }
  /**
   * Retrieve the current list of OAuth scopes.
   */
  ;

  _proto15.getScopes = function getScopes() {
    return [].concat(this.scopes);
  };

  return BaseOAuthProvider;
}(FederatedAuthProvider);
/**
 * Provider for generating generic {@link OAuthCredential}.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new OAuthProvider('google.com');
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a OAuth Access Token for the provider.
 *   const credential = provider.credentialFromResult(auth, result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new OAuthProvider('google.com');
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a OAuth Access Token for the provider.
 * const credential = provider.credentialFromResult(auth, result);
 * const token = credential.accessToken;
 * ```
 * @public
 */


var OAuthProvider = /*#__PURE__*/function (_BaseOAuthProvider) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(OAuthProvider, _BaseOAuthProvider);

  function OAuthProvider() {
    return _BaseOAuthProvider.apply(this, arguments) || this;
  }

  /**
   * Creates an {@link OAuthCredential} from a JSON string or a plain object.
   * @param json - A plain object or a JSON string
   */
  OAuthProvider.credentialFromJSON = function credentialFromJSON(json) {
    var obj = typeof json === 'string' ? JSON.parse(json) : json;

    _assert('providerId' in obj && 'signInMethod' in obj, "argument-error"
    /* ARGUMENT_ERROR */
    );

    return OAuthCredential._fromParams(obj);
  }
  /**
   * Creates a {@link OAuthCredential} from a generic OAuth provider's access token or ID token.
   *
   * @remarks
   * The raw nonce is required when an ID token with a nonce field is provided. The SHA-256 hash of
   * the raw nonce must match the nonce field in the ID token.
   *
   * @example
   * ```javascript
   * // `googleUser` from the onsuccess Google Sign In callback.
   * // Initialize a generate OAuth provider with a `google.com` providerId.
   * const provider = new OAuthProvider('google.com');
   * const credential = provider.credential({
   *   idToken: googleUser.getAuthResponse().id_token,
   * });
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param params - Either the options object containing the ID token, access token and raw nonce
   * or the ID token string.
   */
  ;

  var _proto16 = OAuthProvider.prototype;

  _proto16.credential = function credential(params) {
    return this._credential(Object.assign(Object.assign({}, params), {
      nonce: params.rawNonce
    }));
  }
  /** An internal credential method that accepts more permissive options */
  ;

  _proto16._credential = function _credential(params) {
    _assert(params.idToken || params.accessToken, "argument-error"
    /* ARGUMENT_ERROR */
    ); // For OAuthCredential, sign in method is same as providerId.


    return OAuthCredential._fromParams(Object.assign(Object.assign({}, params), {
      providerId: this.providerId,
      signInMethod: this.providerId
    }));
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  ;

  OAuthProvider.credentialFromResult = function credentialFromResult(userCredential) {
    return OAuthProvider.oauthCredentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  ;

  OAuthProvider.credentialFromError = function credentialFromError(error) {
    return OAuthProvider.oauthCredentialFromTaggedObject(error.customData || {});
  };

  OAuthProvider.oauthCredentialFromTaggedObject = function oauthCredentialFromTaggedObject(_ref12) {
    var tokenResponse = _ref12._tokenResponse;

    if (!tokenResponse) {
      return null;
    }

    var oauthIdToken = tokenResponse.oauthIdToken,
        oauthAccessToken = tokenResponse.oauthAccessToken,
        oauthTokenSecret = tokenResponse.oauthTokenSecret,
        pendingToken = tokenResponse.pendingToken,
        nonce = tokenResponse.nonce,
        providerId = tokenResponse.providerId;

    if (!oauthAccessToken && !oauthTokenSecret && !oauthIdToken && !pendingToken) {
      return null;
    }

    if (!providerId) {
      return null;
    }

    try {
      return new OAuthProvider(providerId)._credential({
        idToken: oauthIdToken,
        accessToken: oauthAccessToken,
        nonce: nonce,
        pendingToken: pendingToken
      });
    } catch (e) {
      return null;
    }
  };

  return OAuthProvider;
}(BaseOAuthProvider);
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
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */


var FacebookAuthProvider = /*#__PURE__*/function (_BaseOAuthProvider2) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(FacebookAuthProvider, _BaseOAuthProvider2);

  function FacebookAuthProvider() {
    return _BaseOAuthProvider2.call(this, "facebook.com"
    /* FACEBOOK */
    ) || this;
  }
  /**
   * Creates a credential for Facebook.
   *
   * @example
   * ```javascript
   * // `event` from the Facebook auth.authResponseChange callback.
   * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param accessToken - Facebook access token.
   */


  FacebookAuthProvider.credential = function credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: FacebookAuthProvider.PROVIDER_ID,
      signInMethod: FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
      accessToken: accessToken
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  ;

  FacebookAuthProvider.credentialFromResult = function credentialFromResult(userCredential) {
    return FacebookAuthProvider.credentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  ;

  FacebookAuthProvider.credentialFromError = function credentialFromError(error) {
    return FacebookAuthProvider.credentialFromTaggedObject(error.customData || {});
  };

  FacebookAuthProvider.credentialFromTaggedObject = function credentialFromTaggedObject(_ref13) {
    var tokenResponse = _ref13._tokenResponse;

    if (!tokenResponse || !('oauthAccessToken' in tokenResponse)) {
      return null;
    }

    if (!tokenResponse.oauthAccessToken) {
      return null;
    }

    try {
      return FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  };

  return FacebookAuthProvider;
}(BaseOAuthProvider);
/** Always set to {@link SignInMethod}.FACEBOOK. */


FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com"
/* FACEBOOK */
;
/** Always set to {@link ProviderId}.FACEBOOK. */

FacebookAuthProvider.PROVIDER_ID = "facebook.com"
/* FACEBOOK */
;
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
 * Provider for generating an an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GoogleAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Google Access Token.
 *   const credential = GoogleAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GoogleAuthProvider();
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Google Access Token.
 * const credential = GoogleAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */

var GoogleAuthProvider = /*#__PURE__*/function (_BaseOAuthProvider3) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(GoogleAuthProvider, _BaseOAuthProvider3);

  function GoogleAuthProvider() {
    var _this13;

    _this13 = _BaseOAuthProvider3.call(this, "google.com"
    /* GOOGLE */
    ) || this;

    _this13.addScope('profile');

    return _this13;
  }
  /**
   * Creates a credential for Google. At least one of ID token and access token is required.
   *
   * @example
   * ```javascript
   * // \`googleUser\` from the onsuccess Google Sign In callback.
   * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param idToken - Google ID token.
   * @param accessToken - Google access token.
   */


  GoogleAuthProvider.credential = function credential(idToken, accessToken) {
    return OAuthCredential._fromParams({
      providerId: GoogleAuthProvider.PROVIDER_ID,
      signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
      idToken: idToken,
      accessToken: accessToken
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  ;

  GoogleAuthProvider.credentialFromResult = function credentialFromResult(userCredential) {
    return GoogleAuthProvider.credentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  ;

  GoogleAuthProvider.credentialFromError = function credentialFromError(error) {
    return GoogleAuthProvider.credentialFromTaggedObject(error.customData || {});
  };

  GoogleAuthProvider.credentialFromTaggedObject = function credentialFromTaggedObject(_ref14) {
    var tokenResponse = _ref14._tokenResponse;

    if (!tokenResponse) {
      return null;
    }

    var oauthIdToken = tokenResponse.oauthIdToken,
        oauthAccessToken = tokenResponse.oauthAccessToken;

    if (!oauthIdToken && !oauthAccessToken) {
      // This could be an oauth 1 credential or a phone credential
      return null;
    }

    try {
      return GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
    } catch (_a) {
      return null;
    }
  };

  return GoogleAuthProvider;
}(BaseOAuthProvider);
/** Always set to {@link SignInMethod}.GOOGLE. */


GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com"
/* GOOGLE */
;
/** Always set to {@link ProviderId}.GOOGLE. */

GoogleAuthProvider.PROVIDER_ID = "google.com"
/* GOOGLE */
;
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
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
 *
 * @remarks
 * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
 * the {@link signInWithPopup} handler:
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GithubAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('repo');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Github Access Token.
 *   const credential = GithubAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GithubAuthProvider();
 * provider.addScope('repo');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Github Access Token.
 * const credential = GithubAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 * @public
 */

var GithubAuthProvider = /*#__PURE__*/function (_BaseOAuthProvider4) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(GithubAuthProvider, _BaseOAuthProvider4);

  function GithubAuthProvider() {
    return _BaseOAuthProvider4.call(this, "github.com"
    /* GITHUB */
    ) || this;
  }
  /**
   * Creates a credential for Github.
   *
   * @param accessToken - Github access token.
   */


  GithubAuthProvider.credential = function credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: GithubAuthProvider.PROVIDER_ID,
      signInMethod: GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
      accessToken: accessToken
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  ;

  GithubAuthProvider.credentialFromResult = function credentialFromResult(userCredential) {
    return GithubAuthProvider.credentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  ;

  GithubAuthProvider.credentialFromError = function credentialFromError(error) {
    return GithubAuthProvider.credentialFromTaggedObject(error.customData || {});
  };

  GithubAuthProvider.credentialFromTaggedObject = function credentialFromTaggedObject(_ref15) {
    var tokenResponse = _ref15._tokenResponse;

    if (!tokenResponse || !('oauthAccessToken' in tokenResponse)) {
      return null;
    }

    if (!tokenResponse.oauthAccessToken) {
      return null;
    }

    try {
      return GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  };

  return GithubAuthProvider;
}(BaseOAuthProvider);
/** Always set to {@link SignInMethod}.GITHUB. */


GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com"
/* GITHUB */
;
/** Always set to {@link ProviderId}.GITHUB. */

GithubAuthProvider.PROVIDER_ID = "github.com"
/* GITHUB */
;
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

var IDP_REQUEST_URI = 'http://localhost';
/**
 * @public
 */

var SAMLAuthCredential = /*#__PURE__*/function (_AuthCredential4) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(SAMLAuthCredential, _AuthCredential4);

  /** @internal */
  function SAMLAuthCredential(providerId, pendingToken) {
    var _this14;

    _this14 = _AuthCredential4.call(this, providerId, providerId) || this;
    _this14.pendingToken = pendingToken;
    return _this14;
  }
  /** @internal */


  var _proto17 = SAMLAuthCredential.prototype;

  _proto17._getIdTokenResponse = function _getIdTokenResponse(auth) {
    var request = this.buildRequest();
    return signInWithIdp(auth, request);
  }
  /** @internal */
  ;

  _proto17._linkToIdToken = function _linkToIdToken(auth, idToken) {
    var request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth, request);
  }
  /** @internal */
  ;

  _proto17._getReauthenticationResolver = function _getReauthenticationResolver(auth) {
    var request = this.buildRequest();
    request.autoCreate = false;
    return signInWithIdp(auth, request);
  }
  /** {@inheritdoc AuthCredential.toJSON}  */
  ;

  _proto17.toJSON = function toJSON() {
    return {
      signInMethod: this.signInMethod,
      providerId: this.providerId,
      pendingToken: this.pendingToken
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an
   * {@link  AuthCredential}.
   *
   * @param json - Input can be either Object or the stringified representation of the object.
   * When string is provided, JSON.parse would be called first.
   *
   * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
   */
  ;

  SAMLAuthCredential.fromJSON = function fromJSON(json) {
    var obj = typeof json === 'string' ? JSON.parse(json) : json;
    var providerId = obj.providerId,
        signInMethod = obj.signInMethod,
        pendingToken = obj.pendingToken;

    if (!providerId || !signInMethod || !pendingToken || providerId !== signInMethod) {
      return null;
    }

    return new SAMLAuthCredential(providerId, pendingToken);
  }
  /**
   * Helper static method to avoid exposing the constructor to end users.
   *
   * @internal
   */
  ;

  SAMLAuthCredential._create = function _create(providerId, pendingToken) {
    return new SAMLAuthCredential(providerId, pendingToken);
  };

  _proto17.buildRequest = function buildRequest() {
    return {
      requestUri: IDP_REQUEST_URI,
      returnSecureToken: true,
      pendingToken: this.pendingToken
    };
  };

  return SAMLAuthCredential;
}(AuthCredential);
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


var SAML_PROVIDER_PREFIX = 'saml.';
/**
 * An {@link AuthProvider} for SAML.
 *
 * @public
 */

var SAMLAuthProvider = /*#__PURE__*/function (_FederatedAuthProvide2) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(SAMLAuthProvider, _FederatedAuthProvide2);

  /**
   * Constructor. The providerId must start with "saml."
   * @param providerId - SAML provider ID.
   */
  function SAMLAuthProvider(providerId) {
    _assert(providerId.startsWith(SAML_PROVIDER_PREFIX), "argument-error"
    /* ARGUMENT_ERROR */
    );

    return _FederatedAuthProvide2.call(this, providerId) || this;
  }
  /**
   * Generates an {@link AuthCredential} from a {@link UserCredential} after a
   * successful SAML flow completes.
   *
   * @remarks
   *
   * For example, to get an {@link AuthCredential}, you could write the
   * following code:
   *
   * ```js
   * const userCredential = await signInWithPopup(auth, samlProvider);
   * const credential = SAMLAuthProvider.credentialFromResult(userCredential);
   * ```
   *
   * @param userCredential - The user credential.
   */


  SAMLAuthProvider.credentialFromResult = function credentialFromResult(userCredential) {
    return SAMLAuthProvider.samlCredentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  ;

  SAMLAuthProvider.credentialFromError = function credentialFromError(error) {
    return SAMLAuthProvider.samlCredentialFromTaggedObject(error.customData || {});
  }
  /**
   * Creates an {@link AuthCredential} from a JSON string or a plain object.
   * @param json - A plain object or a JSON string
   */
  ;

  SAMLAuthProvider.credentialFromJSON = function credentialFromJSON(json) {
    var credential = SAMLAuthCredential.fromJSON(json);

    _assert(credential, "argument-error"
    /* ARGUMENT_ERROR */
    );

    return credential;
  };

  SAMLAuthProvider.samlCredentialFromTaggedObject = function samlCredentialFromTaggedObject(_ref16) {
    var tokenResponse = _ref16._tokenResponse;

    if (!tokenResponse) {
      return null;
    }

    var pendingToken = tokenResponse.pendingToken,
        providerId = tokenResponse.providerId;

    if (!pendingToken || !providerId) {
      return null;
    }

    try {
      return SAMLAuthCredential._create(providerId, pendingToken);
    } catch (e) {
      return null;
    }
  };

  return SAMLAuthProvider;
}(FederatedAuthProvider);
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
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */


var TwitterAuthProvider = /*#__PURE__*/function (_BaseOAuthProvider5) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterAuthProvider, _BaseOAuthProvider5);

  function TwitterAuthProvider() {
    return _BaseOAuthProvider5.call(this, "twitter.com"
    /* TWITTER */
    ) || this;
  }
  /**
   * Creates a credential for Twitter.
   *
   * @param token - Twitter access token.
   * @param secret - Twitter secret.
   */


  TwitterAuthProvider.credential = function credential(token, secret) {
    return OAuthCredential._fromParams({
      providerId: TwitterAuthProvider.PROVIDER_ID,
      signInMethod: TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
      oauthToken: token,
      oauthTokenSecret: secret
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  ;

  TwitterAuthProvider.credentialFromResult = function credentialFromResult(userCredential) {
    return TwitterAuthProvider.credentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  ;

  TwitterAuthProvider.credentialFromError = function credentialFromError(error) {
    return TwitterAuthProvider.credentialFromTaggedObject(error.customData || {});
  };

  TwitterAuthProvider.credentialFromTaggedObject = function credentialFromTaggedObject(_ref17) {
    var tokenResponse = _ref17._tokenResponse;

    if (!tokenResponse) {
      return null;
    }

    var oauthAccessToken = tokenResponse.oauthAccessToken,
        oauthTokenSecret = tokenResponse.oauthTokenSecret;

    if (!oauthAccessToken || !oauthTokenSecret) {
      return null;
    }

    try {
      return TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
    } catch (_a) {
      return null;
    }
  };

  return TwitterAuthProvider;
}(BaseOAuthProvider);
/** Always set to {@link SignInMethod}.TWITTER. */


TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com"
/* TWITTER */
;
/** Always set to {@link ProviderId}.TWITTER. */

TwitterAuthProvider.PROVIDER_ID = "twitter.com"
/* TWITTER */
;
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

function signUp(_x95, _x96) {
  return _signUp.apply(this, arguments);
}
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


function _signUp() {
  _signUp = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee116(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee116$(_context116) {
      while (1) {
        switch (_context116.prev = _context116.next) {
          case 0:
            return _context116.abrupt("return", _performSignInRequest(auth, "POST"
            /* POST */
            , "/v1/accounts:signUp"
            /* SIGN_UP */
            , _addTidIfNecessary(auth, request)));

          case 1:
          case "end":
            return _context116.stop();
        }
      }
    }, _callee116);
  }));
  return _signUp.apply(this, arguments);
}

var UserCredentialImpl = /*#__PURE__*/function () {
  function UserCredentialImpl(params) {
    this.user = params.user;
    this.providerId = params.providerId;
    this._tokenResponse = params._tokenResponse;
    this.operationType = params.operationType;
  }

  UserCredentialImpl._fromIdTokenResponse = /*#__PURE__*/function () {
    var _fromIdTokenResponse3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee39(auth, operationType, idTokenResponse, isAnonymous) {
      var user, providerId, userCred;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee39$(_context39) {
        while (1) {
          switch (_context39.prev = _context39.next) {
            case 0:
              if (isAnonymous === void 0) {
                isAnonymous = false;
              }

              _context39.next = 3;
              return UserImpl._fromIdTokenResponse(auth, idTokenResponse, isAnonymous);

            case 3:
              user = _context39.sent;
              providerId = providerIdForResponse(idTokenResponse);
              userCred = new UserCredentialImpl({
                user: user,
                providerId: providerId,
                _tokenResponse: idTokenResponse,
                operationType: operationType
              });
              return _context39.abrupt("return", userCred);

            case 7:
            case "end":
              return _context39.stop();
          }
        }
      }, _callee39);
    }));

    function _fromIdTokenResponse(_x97, _x98, _x99, _x100) {
      return _fromIdTokenResponse3.apply(this, arguments);
    }

    return _fromIdTokenResponse;
  }();

  UserCredentialImpl._forOperation = /*#__PURE__*/function () {
    var _forOperation2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee40(user, operationType, response) {
      var providerId;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee40$(_context40) {
        while (1) {
          switch (_context40.prev = _context40.next) {
            case 0:
              _context40.next = 2;
              return user._updateTokensIfNecessary(response,
              /* reload */
              true);

            case 2:
              providerId = providerIdForResponse(response);
              return _context40.abrupt("return", new UserCredentialImpl({
                user: user,
                providerId: providerId,
                _tokenResponse: response,
                operationType: operationType
              }));

            case 4:
            case "end":
              return _context40.stop();
          }
        }
      }, _callee40);
    }));

    function _forOperation(_x101, _x102, _x103) {
      return _forOperation2.apply(this, arguments);
    }

    return _forOperation;
  }();

  return UserCredentialImpl;
}();

function providerIdForResponse(response) {
  if (response.providerId) {
    return response.providerId;
  }

  if ('phoneNumber' in response) {
    return "phone"
    /* PHONE */
    ;
  }

  return null;
}
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
 * Asynchronously signs in as an anonymous user.
 *
 * @remarks
 * If there is already an anonymous user signed in, that user will be returned; otherwise, a
 * new anonymous user identity will be created and returned.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @public
 */


function signInAnonymously(_x104) {
  return _signInAnonymously.apply(this, arguments);
}
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


function _signInAnonymously() {
  _signInAnonymously = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee117(auth) {
    var _a, authInternal, response, userCredential;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee117$(_context117) {
      while (1) {
        switch (_context117.prev = _context117.next) {
          case 0:
            authInternal = _castAuth(auth);
            _context117.next = 3;
            return authInternal._initializationPromise;

          case 3:
            if (!((_a = authInternal.currentUser) === null || _a === void 0 ? void 0 : _a.isAnonymous)) {
              _context117.next = 5;
              break;
            }

            return _context117.abrupt("return", new UserCredentialImpl({
              user: authInternal.currentUser,
              providerId: null,
              operationType: "signIn"
              /* SIGN_IN */

            }));

          case 5:
            _context117.next = 7;
            return signUp(authInternal, {
              returnSecureToken: true
            });

          case 7:
            response = _context117.sent;
            _context117.next = 10;
            return UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn"
            /* SIGN_IN */
            , response, true);

          case 10:
            userCredential = _context117.sent;
            _context117.next = 13;
            return authInternal._updateCurrentUser(userCredential.user);

          case 13:
            return _context117.abrupt("return", userCredential);

          case 14:
          case "end":
            return _context117.stop();
        }
      }
    }, _callee117);
  }));
  return _signInAnonymously.apply(this, arguments);
}

var MultiFactorError = /*#__PURE__*/function (_FirebaseError) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(MultiFactorError, _FirebaseError);

  function MultiFactorError(auth, error, operationType, user) {
    var _this15;

    var _a;

    _this15 = _FirebaseError.call(this, error.code, error.message) || this;
    _this15.operationType = operationType;
    _this15.user = user; // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

    Object.setPrototypeOf(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this15), MultiFactorError.prototype);
    _this15.customData = {
      appName: auth.name,
      tenantId: (_a = auth.tenantId) !== null && _a !== void 0 ? _a : undefined,
      _serverResponse: error.customData._serverResponse,
      operationType: operationType
    };
    return _this15;
  }

  MultiFactorError._fromErrorAndOperation = function _fromErrorAndOperation(auth, error, operationType, user) {
    return new MultiFactorError(auth, error, operationType, user);
  };

  return MultiFactorError;
}(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["FirebaseError"]);

function _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user) {
  var idTokenProvider = operationType === "reauthenticate"
  /* REAUTHENTICATE */
  ? credential._getReauthenticationResolver(auth) : credential._getIdTokenResponse(auth);
  return idTokenProvider["catch"](function (error) {
    if (error.code === "auth/" + "multi-factor-auth-required"
    /* MFA_REQUIRED */
    ) {
      throw MultiFactorError._fromErrorAndOperation(auth, error, operationType, user);
    }

    throw error;
  });
}
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
 * Takes a set of UserInfo provider data and converts it to a set of names
 */


function providerDataAsNames(providerData) {
  return new Set(providerData.map(function (_ref18) {
    var providerId = _ref18.providerId;
    return providerId;
  }).filter(function (pid) {
    return !!pid;
  }));
}
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
 * Unlinks a provider from a user account.
 *
 * @param user - The user.
 * @param providerId - The provider to unlink.
 *
 * @public
 */


function unlink(_x105, _x106) {
  return _unlink.apply(this, arguments);
}

function _unlink() {
  _unlink = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee118(user, providerId) {
    var userInternal, _yield$deleteLinkedAc, providerUserInfo, providersLeft;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee118$(_context118) {
      while (1) {
        switch (_context118.prev = _context118.next) {
          case 0:
            userInternal = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user);
            _context118.next = 3;
            return _assertLinkedStatus(true, userInternal, providerId);

          case 3:
            _context118.t0 = deleteLinkedAccounts;
            _context118.t1 = userInternal.auth;
            _context118.next = 7;
            return userInternal.getIdToken();

          case 7:
            _context118.t2 = _context118.sent;
            _context118.t3 = [providerId];
            _context118.t4 = {
              idToken: _context118.t2,
              deleteProvider: _context118.t3
            };
            _context118.next = 12;
            return (0, _context118.t0)(_context118.t1, _context118.t4);

          case 12:
            _yield$deleteLinkedAc = _context118.sent;
            providerUserInfo = _yield$deleteLinkedAc.providerUserInfo;
            providersLeft = providerDataAsNames(providerUserInfo || []);
            userInternal.providerData = userInternal.providerData.filter(function (pd) {
              return providersLeft.has(pd.providerId);
            });

            if (!providersLeft.has("phone"
            /* PHONE */
            )) {
              userInternal.phoneNumber = null;
            }

            _context118.next = 19;
            return userInternal.auth._persistUserIfCurrent(userInternal);

          case 19:
            return _context118.abrupt("return", userInternal);

          case 20:
          case "end":
            return _context118.stop();
        }
      }
    }, _callee118);
  }));
  return _unlink.apply(this, arguments);
}

function _link$1(_x107, _x108, _x109) {
  return _link$.apply(this, arguments);
}

function _link$() {
  _link$ = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee119(user, credential, bypassAuthState) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee119$(_context119) {
      while (1) {
        switch (_context119.prev = _context119.next) {
          case 0:
            if (bypassAuthState === void 0) {
              bypassAuthState = false;
            }

            _context119.t0 = _logoutIfInvalidated;
            _context119.t1 = user;
            _context119.t2 = credential;
            _context119.t3 = user.auth;
            _context119.next = 7;
            return user.getIdToken();

          case 7:
            _context119.t4 = _context119.sent;
            _context119.t5 = _context119.t2._linkToIdToken.call(_context119.t2, _context119.t3, _context119.t4);
            _context119.t6 = bypassAuthState;
            _context119.next = 12;
            return (0, _context119.t0)(_context119.t1, _context119.t5, _context119.t6);

          case 12:
            response = _context119.sent;
            return _context119.abrupt("return", UserCredentialImpl._forOperation(user, "link"
            /* LINK */
            , response));

          case 14:
          case "end":
            return _context119.stop();
        }
      }
    }, _callee119);
  }));
  return _link$.apply(this, arguments);
}

function _assertLinkedStatus(_x110, _x111, _x112) {
  return _assertLinkedStatus2.apply(this, arguments);
}
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


function _assertLinkedStatus2() {
  _assertLinkedStatus2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee120(expected, user, provider) {
    var providerIds, code;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee120$(_context120) {
      while (1) {
        switch (_context120.prev = _context120.next) {
          case 0:
            _context120.next = 2;
            return _reloadWithoutSaving(user);

          case 2:
            providerIds = providerDataAsNames(user.providerData);
            code = expected === false ? "provider-already-linked"
            /* PROVIDER_ALREADY_LINKED */
            : "no-such-provider";

            _assert(providerIds.has(provider) === expected, user.auth, code);

          case 5:
          case "end":
            return _context120.stop();
        }
      }
    }, _callee120);
  }));
  return _assertLinkedStatus2.apply(this, arguments);
}

function _reauthenticate(_x113, _x114, _x115) {
  return _reauthenticate2.apply(this, arguments);
}
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


function _reauthenticate2() {
  _reauthenticate2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee121(user, credential, bypassAuthState) {
    var auth, operationType, response, parsed, localId;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee121$(_context121) {
      while (1) {
        switch (_context121.prev = _context121.next) {
          case 0:
            if (bypassAuthState === void 0) {
              bypassAuthState = false;
            }

            auth = user.auth;
            operationType = "reauthenticate";
            _context121.prev = 3;
            _context121.next = 6;
            return _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user), bypassAuthState);

          case 6:
            response = _context121.sent;

            _assert(response.idToken, auth, "internal-error"
            /* INTERNAL_ERROR */
            );

            parsed = _parseToken(response.idToken);

            _assert(parsed, auth, "internal-error"
            /* INTERNAL_ERROR */
            );

            localId = parsed.sub;

            _assert(user.uid === localId, auth, "user-mismatch"
            /* USER_MISMATCH */
            );

            return _context121.abrupt("return", UserCredentialImpl._forOperation(user, operationType, response));

          case 15:
            _context121.prev = 15;
            _context121.t0 = _context121["catch"](3);

            // Convert user deleted error into user mismatch
            if ((_context121.t0 === null || _context121.t0 === void 0 ? void 0 : _context121.t0.code) === "auth/" + "user-not-found"
            /* USER_DELETED */
            ) {
              _fail(auth, "user-mismatch"
              /* USER_MISMATCH */
              );
            }

            throw _context121.t0;

          case 19:
          case "end":
            return _context121.stop();
        }
      }
    }, _callee121, null, [[3, 15]]);
  }));
  return _reauthenticate2.apply(this, arguments);
}

function _signInWithCredential(_x116, _x117, _x118) {
  return _signInWithCredential2.apply(this, arguments);
}
/**
 * Asynchronously signs in with the given credentials.
 *
 * @remarks
 * An {@link AuthProvider} can be used to generate the credential.
 *
 * @param auth - The {@link Auth} instance.
 * @param credential - The auth credential.
 *
 * @public
 */


function _signInWithCredential2() {
  _signInWithCredential2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee122(auth, credential, bypassAuthState) {
    var operationType, response, userCredential;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee122$(_context122) {
      while (1) {
        switch (_context122.prev = _context122.next) {
          case 0:
            if (bypassAuthState === void 0) {
              bypassAuthState = false;
            }

            operationType = "signIn";
            _context122.next = 4;
            return _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential);

          case 4:
            response = _context122.sent;
            _context122.next = 7;
            return UserCredentialImpl._fromIdTokenResponse(auth, operationType, response);

          case 7:
            userCredential = _context122.sent;

            if (bypassAuthState) {
              _context122.next = 11;
              break;
            }

            _context122.next = 11;
            return auth._updateCurrentUser(userCredential.user);

          case 11:
            return _context122.abrupt("return", userCredential);

          case 12:
          case "end":
            return _context122.stop();
        }
      }
    }, _callee122);
  }));
  return _signInWithCredential2.apply(this, arguments);
}

function signInWithCredential(_x119, _x120) {
  return _signInWithCredential3.apply(this, arguments);
}
/**
 * Links the user account with the given credentials.
 *
 * @remarks
 * An {@link AuthProvider} can be used to generate the credential.
 *
 * @param user - The user.
 * @param credential - The auth credential.
 *
 * @public
 */


function _signInWithCredential3() {
  _signInWithCredential3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee123(auth, credential) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee123$(_context123) {
      while (1) {
        switch (_context123.prev = _context123.next) {
          case 0:
            return _context123.abrupt("return", _signInWithCredential(_castAuth(auth), credential));

          case 1:
          case "end":
            return _context123.stop();
        }
      }
    }, _callee123);
  }));
  return _signInWithCredential3.apply(this, arguments);
}

function linkWithCredential(_x121, _x122) {
  return _linkWithCredential.apply(this, arguments);
}
/**
 * Re-authenticates a user using a fresh credential.
 *
 * @remarks
 * Use before operations such as {@link updatePassword} that require tokens from recent sign-in
 * attempts. This method can be used to recover from a `CREDENTIAL_TOO_OLD_LOGIN_AGAIN` error.
 *
 * @param user - The user.
 * @param credential - The auth credential.
 *
 * @public
 */


function _linkWithCredential() {
  _linkWithCredential = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee124(user, credential) {
    var userInternal;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee124$(_context124) {
      while (1) {
        switch (_context124.prev = _context124.next) {
          case 0:
            userInternal = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user);
            _context124.next = 3;
            return _assertLinkedStatus(false, userInternal, credential.providerId);

          case 3:
            return _context124.abrupt("return", _link$1(userInternal, credential));

          case 4:
          case "end":
            return _context124.stop();
        }
      }
    }, _callee124);
  }));
  return _linkWithCredential.apply(this, arguments);
}

function reauthenticateWithCredential(_x123, _x124) {
  return _reauthenticateWithCredential.apply(this, arguments);
}
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


function _reauthenticateWithCredential() {
  _reauthenticateWithCredential = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee125(user, credential) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee125$(_context125) {
      while (1) {
        switch (_context125.prev = _context125.next) {
          case 0:
            return _context125.abrupt("return", _reauthenticate(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user), credential));

          case 1:
          case "end":
            return _context125.stop();
        }
      }
    }, _callee125);
  }));
  return _reauthenticateWithCredential.apply(this, arguments);
}

function signInWithCustomToken$1(_x125, _x126) {
  return _signInWithCustomToken$.apply(this, arguments);
}
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
 * Asynchronously signs in using a custom token.
 *
 * @remarks
 * Custom tokens are used to integrate Firebase Auth with existing auth systems, and must
 * be generated by an auth backend using the
 * {@link https://firebase.google.com/docs/reference/admin/node/admin.auth.Auth#createcustomtoken | createCustomToken}
 * method in the {@link https://firebase.google.com/docs/auth/admin | Admin SDK} .
 *
 * Fails with an error if the token is invalid, expired, or not accepted by the Firebase Auth service.
 *
 * @param auth - The {@link Auth} instance.
 * @param customToken - The custom token to sign in with.
 *
 * @public
 */


function _signInWithCustomToken$() {
  _signInWithCustomToken$ = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee126(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee126$(_context126) {
      while (1) {
        switch (_context126.prev = _context126.next) {
          case 0:
            return _context126.abrupt("return", _performSignInRequest(auth, "POST"
            /* POST */
            , "/v1/accounts:signInWithCustomToken"
            /* SIGN_IN_WITH_CUSTOM_TOKEN */
            , _addTidIfNecessary(auth, request)));

          case 1:
          case "end":
            return _context126.stop();
        }
      }
    }, _callee126);
  }));
  return _signInWithCustomToken$.apply(this, arguments);
}

function signInWithCustomToken(_x127, _x128) {
  return _signInWithCustomToken.apply(this, arguments);
}
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


function _signInWithCustomToken() {
  _signInWithCustomToken = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee127(auth, customToken) {
    var authInternal, response, cred;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee127$(_context127) {
      while (1) {
        switch (_context127.prev = _context127.next) {
          case 0:
            authInternal = _castAuth(auth);
            _context127.next = 3;
            return signInWithCustomToken$1(authInternal, {
              token: customToken,
              returnSecureToken: true
            });

          case 3:
            response = _context127.sent;
            _context127.next = 6;
            return UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn"
            /* SIGN_IN */
            , response);

          case 6:
            cred = _context127.sent;
            _context127.next = 9;
            return authInternal._updateCurrentUser(cred.user);

          case 9:
            return _context127.abrupt("return", cred);

          case 10:
          case "end":
            return _context127.stop();
        }
      }
    }, _callee127);
  }));
  return _signInWithCustomToken.apply(this, arguments);
}

var MultiFactorInfoImpl = /*#__PURE__*/function () {
  function MultiFactorInfoImpl(factorId, response) {
    this.factorId = factorId;
    this.uid = response.mfaEnrollmentId;
    this.enrollmentTime = new Date(response.enrolledAt).toUTCString();
    this.displayName = response.displayName;
  }

  MultiFactorInfoImpl._fromServerResponse = function _fromServerResponse(auth, enrollment) {
    if ('phoneInfo' in enrollment) {
      return PhoneMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
    }

    return _fail(auth, "internal-error"
    /* INTERNAL_ERROR */
    );
  };

  return MultiFactorInfoImpl;
}();

var PhoneMultiFactorInfoImpl = /*#__PURE__*/function (_MultiFactorInfoImpl) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(PhoneMultiFactorInfoImpl, _MultiFactorInfoImpl);

  function PhoneMultiFactorInfoImpl(response) {
    var _this16;

    _this16 = _MultiFactorInfoImpl.call(this, "phone"
    /* PHONE */
    , response) || this;
    _this16.phoneNumber = response.phoneInfo;
    return _this16;
  }

  PhoneMultiFactorInfoImpl._fromServerResponse = function _fromServerResponse(_auth, enrollment) {
    return new PhoneMultiFactorInfoImpl(enrollment);
  };

  return PhoneMultiFactorInfoImpl;
}(MultiFactorInfoImpl);
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


function _setActionCodeSettingsOnRequest(auth, request, actionCodeSettings) {
  var _a;

  _assert(((_a = actionCodeSettings.url) === null || _a === void 0 ? void 0 : _a.length) > 0, auth, "invalid-continue-uri"
  /* INVALID_CONTINUE_URI */
  );

  _assert(typeof actionCodeSettings.dynamicLinkDomain === 'undefined' || actionCodeSettings.dynamicLinkDomain.length > 0, auth, "invalid-dynamic-link-domain"
  /* INVALID_DYNAMIC_LINK_DOMAIN */
  );

  request.continueUrl = actionCodeSettings.url;
  request.dynamicLinkDomain = actionCodeSettings.dynamicLinkDomain;
  request.canHandleCodeInApp = actionCodeSettings.handleCodeInApp;

  if (actionCodeSettings.iOS) {
    _assert(actionCodeSettings.iOS.bundleId.length > 0, auth, "missing-ios-bundle-id"
    /* MISSING_IOS_BUNDLE_ID */
    );

    request.iOSBundleId = actionCodeSettings.iOS.bundleId;
  }

  if (actionCodeSettings.android) {
    _assert(actionCodeSettings.android.packageName.length > 0, auth, "missing-android-pkg-name"
    /* MISSING_ANDROID_PACKAGE_NAME */
    );

    request.androidInstallApp = actionCodeSettings.android.installApp;
    request.androidMinimumVersionCode = actionCodeSettings.android.minimumVersion;
    request.androidPackageName = actionCodeSettings.android.packageName;
  }
}
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
 * Sends a password reset email to the given email address.
 *
 * @remarks
 * To complete the password reset, call {@link confirmPasswordReset} with the code supplied in
 * the email sent to the user, along with the new password specified by the user.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await sendPasswordResetEmail(auth, 'user@example.com', actionCodeSettings);
 * // Obtain code from user.
 * await confirmPasswordReset('user@example.com', code);
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param actionCodeSettings - The {@link ActionCodeSettings}.
 *
 * @public
 */


function sendPasswordResetEmail(_x129, _x130, _x131) {
  return _sendPasswordResetEmail.apply(this, arguments);
}
/**
 * Completes the password reset process, given a confirmation code and new password.
 *
 * @param auth - The {@link Auth} instance.
 * @param oobCode - A confirmation code sent to the user.
 * @param newPassword - The new password.
 *
 * @public
 */


function _sendPasswordResetEmail() {
  _sendPasswordResetEmail = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee128(auth, email, actionCodeSettings) {
    var authModular, request;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee128$(_context128) {
      while (1) {
        switch (_context128.prev = _context128.next) {
          case 0:
            authModular = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(auth);
            request = {
              requestType: "PASSWORD_RESET"
              /* PASSWORD_RESET */
              ,
              email: email
            };

            if (actionCodeSettings) {
              _setActionCodeSettingsOnRequest(authModular, request, actionCodeSettings);
            }

            _context128.next = 5;
            return sendPasswordResetEmail$1(authModular, request);

          case 5:
          case "end":
            return _context128.stop();
        }
      }
    }, _callee128);
  }));
  return _sendPasswordResetEmail.apply(this, arguments);
}

function confirmPasswordReset(_x132, _x133, _x134) {
  return _confirmPasswordReset.apply(this, arguments);
}
/**
 * Applies a verification code sent to the user by email or other out-of-band mechanism.
 *
 * @param auth - The {@link Auth} instance.
 * @param oobCode - A verification code sent to the user.
 *
 * @public
 */


function _confirmPasswordReset() {
  _confirmPasswordReset = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee129(auth, oobCode, newPassword) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee129$(_context129) {
      while (1) {
        switch (_context129.prev = _context129.next) {
          case 0:
            _context129.next = 2;
            return resetPassword(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(auth), {
              oobCode: oobCode,
              newPassword: newPassword
            });

          case 2:
          case "end":
            return _context129.stop();
        }
      }
    }, _callee129);
  }));
  return _confirmPasswordReset.apply(this, arguments);
}

function applyActionCode(_x135, _x136) {
  return _applyActionCode.apply(this, arguments);
}
/**
 * Checks a verification code sent to the user by email or other out-of-band mechanism.
 *
 * @returns metadata about the code.
 *
 * @param auth - The {@link Auth} instance.
 * @param oobCode - A verification code sent to the user.
 *
 * @public
 */


function _applyActionCode() {
  _applyActionCode = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee130(auth, oobCode) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee130$(_context130) {
      while (1) {
        switch (_context130.prev = _context130.next) {
          case 0:
            _context130.next = 2;
            return applyActionCode$1(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(auth), {
              oobCode: oobCode
            });

          case 2:
          case "end":
            return _context130.stop();
        }
      }
    }, _callee130);
  }));
  return _applyActionCode.apply(this, arguments);
}

function checkActionCode(_x137, _x138) {
  return _checkActionCode.apply(this, arguments);
}
/**
 * Checks a password reset code sent to the user by email or other out-of-band mechanism.
 *
 * @returns the user's email address if valid.
 *
 * @param auth - The {@link Auth} instance.
 * @param code - A verification code sent to the user.
 *
 * @public
 */


function _checkActionCode() {
  _checkActionCode = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee131(auth, oobCode) {
    var authModular, response, operation, multiFactorInfo;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee131$(_context131) {
      while (1) {
        switch (_context131.prev = _context131.next) {
          case 0:
            authModular = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(auth);
            _context131.next = 3;
            return resetPassword(authModular, {
              oobCode: oobCode
            });

          case 3:
            response = _context131.sent;
            // Email could be empty only if the request type is EMAIL_SIGNIN or
            // VERIFY_AND_CHANGE_EMAIL.
            // New email should not be empty if the request type is
            // VERIFY_AND_CHANGE_EMAIL.
            // Multi-factor info could not be empty if the request type is
            // REVERT_SECOND_FACTOR_ADDITION.
            operation = response.requestType;

            _assert(operation, authModular, "internal-error"
            /* INTERNAL_ERROR */
            );

            _context131.t0 = operation;
            _context131.next = _context131.t0 === "EMAIL_SIGNIN"
            /* EMAIL_SIGNIN */
            ? 9 : _context131.t0 === "VERIFY_AND_CHANGE_EMAIL"
            /* VERIFY_AND_CHANGE_EMAIL */
            ? 10 : _context131.t0 === "REVERT_SECOND_FACTOR_ADDITION"
            /* REVERT_SECOND_FACTOR_ADDITION */
            ? 12 : 13;
            break;

          case 9:
            return _context131.abrupt("break", 14);

          case 10:
            _assert(response.newEmail, authModular, "internal-error"
            /* INTERNAL_ERROR */
            );

            return _context131.abrupt("break", 14);

          case 12:
            _assert(response.mfaInfo, authModular, "internal-error"
            /* INTERNAL_ERROR */
            );

          case 13:
            _assert(response.email, authModular, "internal-error"
            /* INTERNAL_ERROR */
            );

          case 14:
            // The multi-factor info for revert second factor addition
            multiFactorInfo = null;

            if (response.mfaInfo) {
              multiFactorInfo = MultiFactorInfoImpl._fromServerResponse(_castAuth(authModular), response.mfaInfo);
            }

            return _context131.abrupt("return", {
              data: {
                email: (response.requestType === "VERIFY_AND_CHANGE_EMAIL"
                /* VERIFY_AND_CHANGE_EMAIL */
                ? response.newEmail : response.email) || null,
                previousEmail: (response.requestType === "VERIFY_AND_CHANGE_EMAIL"
                /* VERIFY_AND_CHANGE_EMAIL */
                ? response.email : response.newEmail) || null,
                multiFactorInfo: multiFactorInfo
              },
              operation: operation
            });

          case 17:
          case "end":
            return _context131.stop();
        }
      }
    }, _callee131);
  }));
  return _checkActionCode.apply(this, arguments);
}

function verifyPasswordResetCode(_x139, _x140) {
  return _verifyPasswordResetCode.apply(this, arguments);
}
/**
 * Creates a new user account associated with the specified email address and password.
 *
 * @remarks
 * On successful creation of the user account, this user will also be signed in to your application.
 *
 * User account creation can fail if the account already exists or the password is invalid.
 *
 * Note: The email address acts as a unique identifier for the user and enables an email-based
 * password reset. This function will create a new user account and set the initial user password.
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param password - The user's chosen password.
 *
 * @public
 */


function _verifyPasswordResetCode() {
  _verifyPasswordResetCode = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee132(auth, code) {
    var _yield$checkActionCod, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee132$(_context132) {
      while (1) {
        switch (_context132.prev = _context132.next) {
          case 0:
            _context132.next = 2;
            return checkActionCode(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(auth), code);

          case 2:
            _yield$checkActionCod = _context132.sent;
            data = _yield$checkActionCod.data;
            return _context132.abrupt("return", data.email);

          case 5:
          case "end":
            return _context132.stop();
        }
      }
    }, _callee132);
  }));
  return _verifyPasswordResetCode.apply(this, arguments);
}

function createUserWithEmailAndPassword(_x141, _x142, _x143) {
  return _createUserWithEmailAndPassword.apply(this, arguments);
}
/**
 * Asynchronously signs in using an email and password.
 *
 * @remarks
 * Fails with an error if the email address and password do not match.
 *
 * Note: The user's password is NOT the password used to access the user's email account. The
 * email address serves as a unique identifier for the user, and the password is used to access
 * the user's account in your Firebase project. See also: {@link createUserWithEmailAndPassword}.
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The users email address.
 * @param password - The users password.
 *
 * @public
 */


function _createUserWithEmailAndPassword() {
  _createUserWithEmailAndPassword = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee133(auth, email, password) {
    var authInternal, response, userCredential;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee133$(_context133) {
      while (1) {
        switch (_context133.prev = _context133.next) {
          case 0:
            authInternal = _castAuth(auth);
            _context133.next = 3;
            return signUp(authInternal, {
              returnSecureToken: true,
              email: email,
              password: password
            });

          case 3:
            response = _context133.sent;
            _context133.next = 6;
            return UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn"
            /* SIGN_IN */
            , response);

          case 6:
            userCredential = _context133.sent;
            _context133.next = 9;
            return authInternal._updateCurrentUser(userCredential.user);

          case 9:
            return _context133.abrupt("return", userCredential);

          case 10:
          case "end":
            return _context133.stop();
        }
      }
    }, _callee133);
  }));
  return _createUserWithEmailAndPassword.apply(this, arguments);
}

function signInWithEmailAndPassword(auth, email, password) {
  return signInWithCredential(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(auth), EmailAuthProvider.credential(email, password));
}
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
 * Sends a sign-in email link to the user with the specified email.
 *
 * @remarks
 * The sign-in operation has to always be completed in the app unlike other out of band email
 * actions (password reset and email verifications). This is because, at the end of the flow,
 * the user is expected to be signed in and their Auth state persisted within the app.
 *
 * To complete sign in with the email link, call {@link signInWithEmailLink} with the email
 * address and the email link supplied in the email sent to the user.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await sendSignInLinkToEmail(auth, 'user@example.com', actionCodeSettings);
 * // Obtain emailLink from the user.
 * if(isSignInWithEmailLink(auth, emailLink)) {
 *   await signInWithEmailLink(auth, 'user@example.com', emailLink);
 * }
 * ```
 *
 * @param authInternal - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param actionCodeSettings - The {@link ActionCodeSettings}.
 *
 * @public
 */


function sendSignInLinkToEmail(_x144, _x145, _x146) {
  return _sendSignInLinkToEmail.apply(this, arguments);
}
/**
 * Checks if an incoming link is a sign-in with email link suitable for {@link signInWithEmailLink}.
 *
 * @param auth - The {@link Auth} instance.
 * @param emailLink - The link sent to the user's email address.
 *
 * @public
 */


function _sendSignInLinkToEmail() {
  _sendSignInLinkToEmail = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee134(auth, email, actionCodeSettings) {
    var authModular, request;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee134$(_context134) {
      while (1) {
        switch (_context134.prev = _context134.next) {
          case 0:
            authModular = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(auth);
            request = {
              requestType: "EMAIL_SIGNIN"
              /* EMAIL_SIGNIN */
              ,
              email: email
            };

            _assert(actionCodeSettings.handleCodeInApp, authModular, "argument-error"
            /* ARGUMENT_ERROR */
            );

            if (actionCodeSettings) {
              _setActionCodeSettingsOnRequest(authModular, request, actionCodeSettings);
            }

            _context134.next = 6;
            return sendSignInLinkToEmail$1(authModular, request);

          case 6:
          case "end":
            return _context134.stop();
        }
      }
    }, _callee134);
  }));
  return _sendSignInLinkToEmail.apply(this, arguments);
}

function isSignInWithEmailLink(auth, emailLink) {
  var actionCodeUrl = ActionCodeURL.parseLink(emailLink);
  return (actionCodeUrl === null || actionCodeUrl === void 0 ? void 0 : actionCodeUrl.operation) === "EMAIL_SIGNIN"
  /* EMAIL_SIGNIN */
  ;
}
/**
 * Asynchronously signs in using an email and sign-in email link.
 *
 * @remarks
 * If no link is passed, the link is inferred from the current URL.
 *
 * Fails with an error if the email address is invalid or OTP in email link expires.
 *
 * Note: Confirm the link is a sign-in email link before calling this method firebase.auth.Auth.isSignInWithEmailLink.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await sendSignInLinkToEmail(auth, 'user@example.com', actionCodeSettings);
 * // Obtain emailLink from the user.
 * if(isSignInWithEmailLink(auth, emailLink)) {
 *   await signInWithEmailLink(auth, 'user@example.com', emailLink);
 * }
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param emailLink - The link sent to the user's email address.
 *
 * @public
 */


function signInWithEmailLink(_x147, _x148, _x149) {
  return _signInWithEmailLink.apply(this, arguments);
}
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


function _signInWithEmailLink() {
  _signInWithEmailLink = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee135(auth, email, emailLink) {
    var authModular, credential;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee135$(_context135) {
      while (1) {
        switch (_context135.prev = _context135.next) {
          case 0:
            authModular = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(auth);
            credential = EmailAuthProvider.credentialWithLink(email, emailLink || _getCurrentUrl()); // Check if the tenant ID in the email link matches the tenant ID on Auth
            // instance.

            _assert(credential._tenantId === (authModular.tenantId || null), authModular, "tenant-id-mismatch"
            /* TENANT_ID_MISMATCH */
            );

            return _context135.abrupt("return", signInWithCredential(authModular, credential));

          case 4:
          case "end":
            return _context135.stop();
        }
      }
    }, _callee135);
  }));
  return _signInWithEmailLink.apply(this, arguments);
}

function createAuthUri(_x150, _x151) {
  return _createAuthUri.apply(this, arguments);
}
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
 * Gets the list of possible sign in methods for the given email address.
 *
 * @remarks
 * This is useful to differentiate methods of sign-in for the same provider, eg.
 * {@link EmailAuthProvider} which has 2 methods of sign-in,
 * {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 *
 * @public
 */


function _createAuthUri() {
  _createAuthUri = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee136(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee136$(_context136) {
      while (1) {
        switch (_context136.prev = _context136.next) {
          case 0:
            return _context136.abrupt("return", _performApiRequest(auth, "POST"
            /* POST */
            , "/v1/accounts:createAuthUri"
            /* CREATE_AUTH_URI */
            , _addTidIfNecessary(auth, request)));

          case 1:
          case "end":
            return _context136.stop();
        }
      }
    }, _callee136);
  }));
  return _createAuthUri.apply(this, arguments);
}

function fetchSignInMethodsForEmail(_x152, _x153) {
  return _fetchSignInMethodsForEmail.apply(this, arguments);
}
/**
 * Sends a verification email to a user.
 *
 * @remarks
 * The verification process is completed by calling {@link applyActionCode}.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await sendEmailVerification(user, actionCodeSettings);
 * // Obtain code from the user.
 * await applyActionCode(auth, code);
 * ```
 *
 * @param user - The user.
 * @param actionCodeSettings - The {@link ActionCodeSettings}.
 *
 * @public
 */


function _fetchSignInMethodsForEmail() {
  _fetchSignInMethodsForEmail = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee137(auth, email) {
    var continueUri, request, _yield$createAuthUri, signinMethods;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee137$(_context137) {
      while (1) {
        switch (_context137.prev = _context137.next) {
          case 0:
            // createAuthUri returns an error if continue URI is not http or https.
            // For environments like Cordova, Chrome extensions, native frameworks, file
            // systems, etc, use http://localhost as continue URL.
            continueUri = _isHttpOrHttps() ? _getCurrentUrl() : 'http://localhost';
            request = {
              identifier: email,
              continueUri: continueUri
            };
            _context137.next = 4;
            return createAuthUri(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(auth), request);

          case 4:
            _yield$createAuthUri = _context137.sent;
            signinMethods = _yield$createAuthUri.signinMethods;
            return _context137.abrupt("return", signinMethods || []);

          case 7:
          case "end":
            return _context137.stop();
        }
      }
    }, _callee137);
  }));
  return _fetchSignInMethodsForEmail.apply(this, arguments);
}

function sendEmailVerification(_x154, _x155) {
  return _sendEmailVerification.apply(this, arguments);
}
/**
 * Sends a verification email to a new email address.
 *
 * @remarks
 * The user's email will be updated to the new one after being verified.
 *
 * If you have a custom email action handler, you can complete the verification process by calling
 * {@link applyActionCode}.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await verifyBeforeUpdateEmail(user, 'newemail@example.com', actionCodeSettings);
 * // Obtain code from the user.
 * await applyActionCode(auth, code);
 * ```
 *
 * @param user - The user.
 * @param newEmail - The new email address to be verified before update.
 * @param actionCodeSettings - The {@link ActionCodeSettings}.
 *
 * @public
 */


function _sendEmailVerification() {
  _sendEmailVerification = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee138(user, actionCodeSettings) {
    var userInternal, idToken, request, _yield$sendEmailVerif, email;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee138$(_context138) {
      while (1) {
        switch (_context138.prev = _context138.next) {
          case 0:
            userInternal = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user);
            _context138.next = 3;
            return user.getIdToken();

          case 3:
            idToken = _context138.sent;
            request = {
              requestType: "VERIFY_EMAIL"
              /* VERIFY_EMAIL */
              ,
              idToken: idToken
            };

            if (actionCodeSettings) {
              _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
            }

            _context138.next = 8;
            return sendEmailVerification$1(userInternal.auth, request);

          case 8:
            _yield$sendEmailVerif = _context138.sent;
            email = _yield$sendEmailVerif.email;

            if (!(email !== user.email)) {
              _context138.next = 13;
              break;
            }

            _context138.next = 13;
            return user.reload();

          case 13:
          case "end":
            return _context138.stop();
        }
      }
    }, _callee138);
  }));
  return _sendEmailVerification.apply(this, arguments);
}

function verifyBeforeUpdateEmail(_x156, _x157, _x158) {
  return _verifyBeforeUpdateEmail.apply(this, arguments);
}
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


function _verifyBeforeUpdateEmail() {
  _verifyBeforeUpdateEmail = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee139(user, newEmail, actionCodeSettings) {
    var userInternal, idToken, request, _yield$verifyAndChang, email;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee139$(_context139) {
      while (1) {
        switch (_context139.prev = _context139.next) {
          case 0:
            userInternal = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user);
            _context139.next = 3;
            return user.getIdToken();

          case 3:
            idToken = _context139.sent;
            request = {
              requestType: "VERIFY_AND_CHANGE_EMAIL"
              /* VERIFY_AND_CHANGE_EMAIL */
              ,
              idToken: idToken,
              newEmail: newEmail
            };

            if (actionCodeSettings) {
              _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
            }

            _context139.next = 8;
            return verifyAndChangeEmail(userInternal.auth, request);

          case 8:
            _yield$verifyAndChang = _context139.sent;
            email = _yield$verifyAndChang.email;

            if (!(email !== user.email)) {
              _context139.next = 13;
              break;
            }

            _context139.next = 13;
            return user.reload();

          case 13:
          case "end":
            return _context139.stop();
        }
      }
    }, _callee139);
  }));
  return _verifyBeforeUpdateEmail.apply(this, arguments);
}

function updateProfile$1(_x159, _x160) {
  return _updateProfile$.apply(this, arguments);
}
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
 * Updates a user's profile data.
 *
 * @param user - The user.
 * @param profile - The profile's `displayName` and `photoURL` to update.
 *
 * @public
 */


function _updateProfile$() {
  _updateProfile$ = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee140(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee140$(_context140) {
      while (1) {
        switch (_context140.prev = _context140.next) {
          case 0:
            return _context140.abrupt("return", _performApiRequest(auth, "POST"
            /* POST */
            , "/v1/accounts:update"
            /* SET_ACCOUNT_INFO */
            , request));

          case 1:
          case "end":
            return _context140.stop();
        }
      }
    }, _callee140);
  }));
  return _updateProfile$.apply(this, arguments);
}

function updateProfile(_x161, _x162) {
  return _updateProfile.apply(this, arguments);
}
/**
 * Updates the user's email address.
 *
 * @remarks
 * An email will be sent to the original email address (if it was set) that allows to revoke the
 * email address change, in order to protect them from account hijacking.
 *
 * Important: this is a security sensitive operation that requires the user to have recently signed
 * in. If this requirement isn't met, ask the user to authenticate again and then call
 * {@link reauthenticateWithCredential}.
 *
 * @param user - The user.
 * @param newEmail - The new email address.
 *
 * @public
 */


function _updateProfile() {
  _updateProfile = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee141(user, _ref19) {
    var displayName, photoUrl, userInternal, idToken, profileRequest, response, passwordProvider;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee141$(_context141) {
      while (1) {
        switch (_context141.prev = _context141.next) {
          case 0:
            displayName = _ref19.displayName, photoUrl = _ref19.photoURL;

            if (!(displayName === undefined && photoUrl === undefined)) {
              _context141.next = 3;
              break;
            }

            return _context141.abrupt("return");

          case 3:
            userInternal = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user);
            _context141.next = 6;
            return userInternal.getIdToken();

          case 6:
            idToken = _context141.sent;
            profileRequest = {
              idToken: idToken,
              displayName: displayName,
              photoUrl: photoUrl,
              returnSecureToken: true
            };
            _context141.next = 10;
            return _logoutIfInvalidated(userInternal, updateProfile$1(userInternal.auth, profileRequest));

          case 10:
            response = _context141.sent;
            userInternal.displayName = response.displayName || null;
            userInternal.photoURL = response.photoUrl || null; // Update the password provider as well

            passwordProvider = userInternal.providerData.find(function (_ref38) {
              var providerId = _ref38.providerId;
              return providerId === "password";
            }
            /* PASSWORD */
            );

            if (passwordProvider) {
              passwordProvider.displayName = userInternal.displayName;
              passwordProvider.photoURL = userInternal.photoURL;
            }

            _context141.next = 17;
            return userInternal._updateTokensIfNecessary(response);

          case 17:
          case "end":
            return _context141.stop();
        }
      }
    }, _callee141);
  }));
  return _updateProfile.apply(this, arguments);
}

function updateEmail(user, newEmail) {
  return updateEmailOrPassword(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user), newEmail, null);
}
/**
 * Updates the user's password.
 *
 * @remarks
 * Important: this is a security sensitive operation that requires the user to have recently signed
 * in. If this requirement isn't met, ask the user to authenticate again and then call
 * {@link reauthenticateWithCredential}.
 *
 * @param user - The user.
 * @param newPassword - The new password.
 *
 * @public
 */


function updatePassword(user, newPassword) {
  return updateEmailOrPassword(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user), null, newPassword);
}

function updateEmailOrPassword(_x163, _x164, _x165) {
  return _updateEmailOrPassword.apply(this, arguments);
}
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
 * Parse the `AdditionalUserInfo` from the ID token response.
 *
 */


function _updateEmailOrPassword() {
  _updateEmailOrPassword = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee142(user, email, password) {
    var auth, idToken, request, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee142$(_context142) {
      while (1) {
        switch (_context142.prev = _context142.next) {
          case 0:
            auth = user.auth;
            _context142.next = 3;
            return user.getIdToken();

          case 3:
            idToken = _context142.sent;
            request = {
              idToken: idToken,
              returnSecureToken: true
            };

            if (email) {
              request.email = email;
            }

            if (password) {
              request.password = password;
            }

            _context142.next = 9;
            return _logoutIfInvalidated(user, updateEmailPassword(auth, request));

          case 9:
            response = _context142.sent;
            _context142.next = 12;
            return user._updateTokensIfNecessary(response,
            /* reload */
            true);

          case 12:
          case "end":
            return _context142.stop();
        }
      }
    }, _callee142);
  }));
  return _updateEmailOrPassword.apply(this, arguments);
}

function _fromIdTokenResponse(idTokenResponse) {
  var _a, _b;

  if (!idTokenResponse) {
    return null;
  }

  var providerId = idTokenResponse.providerId;
  var profile = idTokenResponse.rawUserInfo ? JSON.parse(idTokenResponse.rawUserInfo) : {};
  var isNewUser = idTokenResponse.isNewUser || idTokenResponse.kind === "identitytoolkit#SignupNewUserResponse"
  /* SignupNewUser */
  ;

  if (!providerId && (idTokenResponse === null || idTokenResponse === void 0 ? void 0 : idTokenResponse.idToken)) {
    var signInProvider = (_b = (_a = _parseToken(idTokenResponse.idToken)) === null || _a === void 0 ? void 0 : _a.firebase) === null || _b === void 0 ? void 0 : _b['sign_in_provider'];

    if (signInProvider) {
      var filteredProviderId = signInProvider !== "anonymous"
      /* ANONYMOUS */
      && signInProvider !== "custom"
      /* CUSTOM */
      ? signInProvider : null; // Uses generic class in accordance with the legacy SDK.

      return new GenericAdditionalUserInfo(isNewUser, filteredProviderId);
    }
  }

  if (!providerId) {
    return null;
  }

  switch (providerId) {
    case "facebook.com"
    /* FACEBOOK */
    :
      return new FacebookAdditionalUserInfo(isNewUser, profile);

    case "github.com"
    /* GITHUB */
    :
      return new GithubAdditionalUserInfo(isNewUser, profile);

    case "google.com"
    /* GOOGLE */
    :
      return new GoogleAdditionalUserInfo(isNewUser, profile);

    case "twitter.com"
    /* TWITTER */
    :
      return new TwitterAdditionalUserInfo(isNewUser, profile, idTokenResponse.screenName || null);

    case "custom"
    /* CUSTOM */
    :
    case "anonymous"
    /* ANONYMOUS */
    :
      return new GenericAdditionalUserInfo(isNewUser, null);

    default:
      return new GenericAdditionalUserInfo(isNewUser, providerId, profile);
  }
}

var GenericAdditionalUserInfo = function GenericAdditionalUserInfo(isNewUser, providerId, profile) {
  if (profile === void 0) {
    profile = {};
  }

  this.isNewUser = isNewUser;
  this.providerId = providerId;
  this.profile = profile;
};

var FederatedAdditionalUserInfoWithUsername = /*#__PURE__*/function (_GenericAdditionalUse) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(FederatedAdditionalUserInfoWithUsername, _GenericAdditionalUse);

  function FederatedAdditionalUserInfoWithUsername(isNewUser, providerId, profile, username) {
    var _this17;

    _this17 = _GenericAdditionalUse.call(this, isNewUser, providerId, profile) || this;
    _this17.username = username;
    return _this17;
  }

  return FederatedAdditionalUserInfoWithUsername;
}(GenericAdditionalUserInfo);

var FacebookAdditionalUserInfo = /*#__PURE__*/function (_GenericAdditionalUse2) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(FacebookAdditionalUserInfo, _GenericAdditionalUse2);

  function FacebookAdditionalUserInfo(isNewUser, profile) {
    return _GenericAdditionalUse2.call(this, isNewUser, "facebook.com"
    /* FACEBOOK */
    , profile) || this;
  }

  return FacebookAdditionalUserInfo;
}(GenericAdditionalUserInfo);

var GithubAdditionalUserInfo = /*#__PURE__*/function (_FederatedAdditionalU) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(GithubAdditionalUserInfo, _FederatedAdditionalU);

  function GithubAdditionalUserInfo(isNewUser, profile) {
    return _FederatedAdditionalU.call(this, isNewUser, "github.com"
    /* GITHUB */
    , profile, typeof (profile === null || profile === void 0 ? void 0 : profile.login) === 'string' ? profile === null || profile === void 0 ? void 0 : profile.login : null) || this;
  }

  return GithubAdditionalUserInfo;
}(FederatedAdditionalUserInfoWithUsername);

var GoogleAdditionalUserInfo = /*#__PURE__*/function (_GenericAdditionalUse3) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(GoogleAdditionalUserInfo, _GenericAdditionalUse3);

  function GoogleAdditionalUserInfo(isNewUser, profile) {
    return _GenericAdditionalUse3.call(this, isNewUser, "google.com"
    /* GOOGLE */
    , profile) || this;
  }

  return GoogleAdditionalUserInfo;
}(GenericAdditionalUserInfo);

var TwitterAdditionalUserInfo = /*#__PURE__*/function (_FederatedAdditionalU2) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterAdditionalUserInfo, _FederatedAdditionalU2);

  function TwitterAdditionalUserInfo(isNewUser, profile, screenName) {
    return _FederatedAdditionalU2.call(this, isNewUser, "twitter.com"
    /* TWITTER */
    , profile, screenName) || this;
  }

  return TwitterAdditionalUserInfo;
}(FederatedAdditionalUserInfoWithUsername);
/**
 * Extracts provider specific {@link AdditionalUserInfo} for the given credential.
 *
 * @param userCredential - The user credential.
 *
 * @public
 */


function getAdditionalUserInfo(userCredential) {
  var user = userCredential.user,
      _tokenResponse = userCredential._tokenResponse;

  if (user.isAnonymous && !_tokenResponse) {
    // Handle the special case where signInAnonymously() gets called twice.
    // No network call is made so there's nothing to actually fill this in
    return {
      providerId: null,
      isNewUser: false,
      profile: null
    };
  }

  return _fromIdTokenResponse(_tokenResponse);
}
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
// Non-optional auth methods.

/**
 * Changes the type of persistence on the {@link Auth} instance for the currently saved
 * `Auth` session and applies this type of persistence for future sign-in requests, including
 * sign-in with redirect requests.
 *
 * @remarks
 * This makes it easy for a user signing in to specify whether their session should be
 * remembered or not. It also makes it easier to never persist the `Auth` state for applications
 * that are shared by other users or have sensitive data.
 *
 * @example
 * ```javascript
 * setPersistence(auth, browserSessionPersistence);
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param persistence - The {@link Persistence} to use.
 * @returns A `Promise` that resolves once the persistence change has completed
 *
 * @public
 */


function setPersistence(auth, persistence) {
  return Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(auth).setPersistence(persistence);
}
/**
 * Adds an observer for changes to the signed-in user's ID token, which includes sign-in,
 * sign-out, and token refresh events.
 *
 * @param auth - The {@link Auth} instance.
 * @param nextOrObserver - callback triggered on change.
 * @param error - callback triggered on error.
 * @param completed - callback triggered when observer is removed.
 *
 * @public
 */


function onIdTokenChanged(auth, nextOrObserver, error, completed) {
  return Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(auth).onIdTokenChanged(nextOrObserver, error, completed);
}
/**
 * Adds an observer for changes to the user's sign-in state.
 *
 * @remarks
 * To keep the old behavior, see {@link onIdTokenChanged}.
 *
 * @param auth - The {@link Auth} instance.
 * @param nextOrObserver - callback triggered on change.
 * @param error - callback triggered on error.
 * @param completed - callback triggered when observer is removed.
 *
 * @public
 */


function onAuthStateChanged(auth, nextOrObserver, error, completed) {
  return Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(auth).onAuthStateChanged(nextOrObserver, error, completed);
}
/**
 * Sets the current language to the default device/browser preference.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @public
 */


function useDeviceLanguage(auth) {
  Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(auth).useDeviceLanguage();
}
/**
 * Asynchronously sets the provided user as {@link Auth.currentUser} on the
 * {@link Auth} instance.
 *
 * @remarks
 * A new instance copy of the user provided will be made and set as currentUser.
 *
 * This will trigger {@link onAuthStateChanged} and {@link onIdTokenChanged} listeners
 * like other sign in methods.
 *
 * The operation fails with an error if the user to be updated belongs to a different Firebase
 * project.
 *
 * @param auth - The {@link Auth} instance.
 * @param user - The new {@link User}.
 *
 * @public
 */


function updateCurrentUser(auth, user) {
  return Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(auth).updateCurrentUser(user);
}
/**
 * Signs out the current user.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @public
 */


function signOut(auth) {
  return Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(auth).signOut();
}
/**
 * Deletes and signs out the user.
 *
 * @remarks
 * Important: this is a security-sensitive operation that requires the user to have recently
 * signed in. If this requirement isn't met, ask the user to authenticate again and then call
 * {@link reauthenticateWithCredential}.
 *
 * @param user - The user.
 *
 * @public
 */


function deleteUser(_x166) {
  return _deleteUser.apply(this, arguments);
}

function _deleteUser() {
  _deleteUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee143(user) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee143$(_context143) {
      while (1) {
        switch (_context143.prev = _context143.next) {
          case 0:
            return _context143.abrupt("return", Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user)["delete"]());

          case 1:
          case "end":
            return _context143.stop();
        }
      }
    }, _callee143);
  }));
  return _deleteUser.apply(this, arguments);
}

var MultiFactorSessionImpl = /*#__PURE__*/function () {
  function MultiFactorSessionImpl(type, credential) {
    this.type = type;
    this.credential = credential;
  }

  MultiFactorSessionImpl._fromIdtoken = function _fromIdtoken(idToken) {
    return new MultiFactorSessionImpl("enroll"
    /* ENROLL */
    , idToken);
  };

  MultiFactorSessionImpl._fromMfaPendingCredential = function _fromMfaPendingCredential(mfaPendingCredential) {
    return new MultiFactorSessionImpl("signin"
    /* SIGN_IN */
    , mfaPendingCredential);
  };

  var _proto18 = MultiFactorSessionImpl.prototype;

  _proto18.toJSON = function toJSON() {
    var _multiFactorSession;

    var key = this.type === "enroll"
    /* ENROLL */
    ? 'idToken' : 'pendingCredential';
    return {
      multiFactorSession: (_multiFactorSession = {}, _multiFactorSession[key] = this.credential, _multiFactorSession)
    };
  };

  MultiFactorSessionImpl.fromJSON = function fromJSON(obj) {
    var _a, _b;

    if (obj === null || obj === void 0 ? void 0 : obj.multiFactorSession) {
      if ((_a = obj.multiFactorSession) === null || _a === void 0 ? void 0 : _a.pendingCredential) {
        return MultiFactorSessionImpl._fromMfaPendingCredential(obj.multiFactorSession.pendingCredential);
      } else if ((_b = obj.multiFactorSession) === null || _b === void 0 ? void 0 : _b.idToken) {
        return MultiFactorSessionImpl._fromIdtoken(obj.multiFactorSession.idToken);
      }
    }

    return null;
  };

  return MultiFactorSessionImpl;
}();
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


var MultiFactorResolverImpl = /*#__PURE__*/function () {
  function MultiFactorResolverImpl(session, hints, signInResolver) {
    this.session = session;
    this.hints = hints;
    this.signInResolver = signInResolver;
  }
  /** @internal */


  MultiFactorResolverImpl._fromError = function _fromError(authExtern, error) {
    var auth = _castAuth(authExtern);

    var serverResponse = error.customData._serverResponse;
    var hints = (serverResponse.mfaInfo || []).map(function (enrollment) {
      return MultiFactorInfoImpl._fromServerResponse(auth, enrollment);
    });

    _assert(serverResponse.mfaPendingCredential, auth, "internal-error"
    /* INTERNAL_ERROR */
    );

    var session = MultiFactorSessionImpl._fromMfaPendingCredential(serverResponse.mfaPendingCredential);

    return new MultiFactorResolverImpl(session, hints, /*#__PURE__*/function () {
      var _ref20 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee41(assertion) {
        var mfaResponse, idTokenResponse, userCredential;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                _context41.next = 2;
                return assertion._process(auth, session);

              case 2:
                mfaResponse = _context41.sent;
                // Clear out the unneeded fields from the old login response
                delete serverResponse.mfaInfo;
                delete serverResponse.mfaPendingCredential; // Use in the new token & refresh token in the old response

                idTokenResponse = Object.assign(Object.assign({}, serverResponse), {
                  idToken: mfaResponse.idToken,
                  refreshToken: mfaResponse.refreshToken
                }); // TODO: we should collapse this switch statement into UserCredentialImpl._forOperation and have it support the SIGN_IN case

                _context41.t0 = error.operationType;
                _context41.next = _context41.t0 === "signIn"
                /* SIGN_IN */
                ? 9 : _context41.t0 === "reauthenticate"
                /* REAUTHENTICATE */
                ? 15 : 17;
                break;

              case 9:
                _context41.next = 11;
                return UserCredentialImpl._fromIdTokenResponse(auth, error.operationType, idTokenResponse);

              case 11:
                userCredential = _context41.sent;
                _context41.next = 14;
                return auth._updateCurrentUser(userCredential.user);

              case 14:
                return _context41.abrupt("return", userCredential);

              case 15:
                _assert(error.user, auth, "internal-error"
                /* INTERNAL_ERROR */
                );

                return _context41.abrupt("return", UserCredentialImpl._forOperation(error.user, error.operationType, idTokenResponse));

              case 17:
                _fail(auth, "internal-error"
                /* INTERNAL_ERROR */
                );

              case 18:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41);
      }));

      return function (_x167) {
        return _ref20.apply(this, arguments);
      };
    }());
  };

  var _proto19 = MultiFactorResolverImpl.prototype;

  _proto19.resolveSignIn = /*#__PURE__*/function () {
    var _resolveSignIn = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee42(assertionExtern) {
      var assertion;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee42$(_context42) {
        while (1) {
          switch (_context42.prev = _context42.next) {
            case 0:
              assertion = assertionExtern;
              return _context42.abrupt("return", this.signInResolver(assertion));

            case 2:
            case "end":
              return _context42.stop();
          }
        }
      }, _callee42, this);
    }));

    function resolveSignIn(_x168) {
      return _resolveSignIn.apply(this, arguments);
    }

    return resolveSignIn;
  }();

  return MultiFactorResolverImpl;
}();
/**
 * Provides a {@link MultiFactorResolver} suitable for completion of a
 * multi-factor flow.
 *
 * @param auth - The {@link Auth} instance.
 * @param error - The {@link MultiFactorError} raised during a sign-in, or
 * reauthentication operation.
 *
 * @public
 */


function getMultiFactorResolver(auth, error) {
  var _a;

  var authModular = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(auth);
  var errorInternal = error;

  _assert(error.customData.operationType, authModular, "argument-error"
  /* ARGUMENT_ERROR */
  );

  _assert((_a = errorInternal.customData._serverResponse) === null || _a === void 0 ? void 0 : _a.mfaPendingCredential, authModular, "argument-error"
  /* ARGUMENT_ERROR */
  );

  return MultiFactorResolverImpl._fromError(authModular, errorInternal);
}
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


function startEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST"
  /* POST */
  , "/v2/accounts/mfaEnrollment:start"
  /* START_PHONE_MFA_ENROLLMENT */
  , _addTidIfNecessary(auth, request));
}

function finalizeEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST"
  /* POST */
  , "/v2/accounts/mfaEnrollment:finalize"
  /* FINALIZE_PHONE_MFA_ENROLLMENT */
  , _addTidIfNecessary(auth, request));
}

function withdrawMfa(auth, request) {
  return _performApiRequest(auth, "POST"
  /* POST */
  , "/v2/accounts/mfaEnrollment:withdraw"
  /* WITHDRAW_MFA */
  , _addTidIfNecessary(auth, request));
}

var MultiFactorUserImpl = /*#__PURE__*/function () {
  function MultiFactorUserImpl(user) {
    var _this18 = this;

    this.user = user;
    this.enrolledFactors = [];

    user._onReload(function (userInfo) {
      if (userInfo.mfaInfo) {
        _this18.enrolledFactors = userInfo.mfaInfo.map(function (enrollment) {
          return MultiFactorInfoImpl._fromServerResponse(user.auth, enrollment);
        });
      }
    });
  }

  MultiFactorUserImpl._fromUser = function _fromUser(user) {
    return new MultiFactorUserImpl(user);
  };

  var _proto20 = MultiFactorUserImpl.prototype;

  _proto20.getSession = /*#__PURE__*/function () {
    var _getSession = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee43() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee43$(_context43) {
        while (1) {
          switch (_context43.prev = _context43.next) {
            case 0:
              _context43.t0 = MultiFactorSessionImpl;
              _context43.next = 3;
              return this.user.getIdToken();

            case 3:
              _context43.t1 = _context43.sent;
              return _context43.abrupt("return", _context43.t0._fromIdtoken.call(_context43.t0, _context43.t1));

            case 5:
            case "end":
              return _context43.stop();
          }
        }
      }, _callee43, this);
    }));

    function getSession() {
      return _getSession.apply(this, arguments);
    }

    return getSession;
  }();

  _proto20.enroll = /*#__PURE__*/function () {
    var _enroll = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee44(assertionExtern, displayName) {
      var assertion, session, finalizeMfaResponse;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee44$(_context44) {
        while (1) {
          switch (_context44.prev = _context44.next) {
            case 0:
              assertion = assertionExtern;
              _context44.next = 3;
              return this.getSession();

            case 3:
              session = _context44.sent;
              _context44.next = 6;
              return _logoutIfInvalidated(this.user, assertion._process(this.user.auth, session, displayName));

            case 6:
              finalizeMfaResponse = _context44.sent;
              _context44.next = 9;
              return this.user._updateTokensIfNecessary(finalizeMfaResponse);

            case 9:
              return _context44.abrupt("return", this.user.reload());

            case 10:
            case "end":
              return _context44.stop();
          }
        }
      }, _callee44, this);
    }));

    function enroll(_x169, _x170) {
      return _enroll.apply(this, arguments);
    }

    return enroll;
  }();

  _proto20.unenroll = /*#__PURE__*/function () {
    var _unenroll = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee45(infoOrUid) {
      var mfaEnrollmentId, idToken, idTokenResponse;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee45$(_context45) {
        while (1) {
          switch (_context45.prev = _context45.next) {
            case 0:
              mfaEnrollmentId = typeof infoOrUid === 'string' ? infoOrUid : infoOrUid.uid;
              _context45.next = 3;
              return this.user.getIdToken();

            case 3:
              idToken = _context45.sent;
              _context45.next = 6;
              return _logoutIfInvalidated(this.user, withdrawMfa(this.user.auth, {
                idToken: idToken,
                mfaEnrollmentId: mfaEnrollmentId
              }));

            case 6:
              idTokenResponse = _context45.sent;
              // Remove the second factor from the user's list.
              this.enrolledFactors = this.enrolledFactors.filter(function (_ref21) {
                var uid = _ref21.uid;
                return uid !== mfaEnrollmentId;
              }); // Depending on whether the backend decided to revoke the user's session,
              // the tokenResponse may be empty. If the tokens were not updated (and they
              // are now invalid), reloading the user will discover this and invalidate
              // the user's state accordingly.

              _context45.next = 10;
              return this.user._updateTokensIfNecessary(idTokenResponse);

            case 10:
              _context45.prev = 10;
              _context45.next = 13;
              return this.user.reload();

            case 13:
              _context45.next = 19;
              break;

            case 15:
              _context45.prev = 15;
              _context45.t0 = _context45["catch"](10);

              if (!(_context45.t0.code !== "auth/" + "user-token-expired"
              /* TOKEN_EXPIRED */
              )) {
                _context45.next = 19;
                break;
              }

              throw _context45.t0;

            case 19:
            case "end":
              return _context45.stop();
          }
        }
      }, _callee45, this, [[10, 15]]);
    }));

    function unenroll(_x171) {
      return _unenroll.apply(this, arguments);
    }

    return unenroll;
  }();

  return MultiFactorUserImpl;
}();

var multiFactorUserCache = new WeakMap();
/**
 * The {@link MultiFactorUser} corresponding to the user.
 *
 * @remarks
 * This is used to access all multi-factor properties and operations related to the user.
 *
 * @param user - The user.
 *
 * @public
 */

function multiFactor(user) {
  var userModular = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user);

  if (!multiFactorUserCache.has(userModular)) {
    multiFactorUserCache.set(userModular, MultiFactorUserImpl._fromUser(userModular));
  }

  return multiFactorUserCache.get(userModular);
}

var STORAGE_AVAILABLE_KEY = '__sak';
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
// There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.

var BrowserPersistenceClass = /*#__PURE__*/function () {
  function BrowserPersistenceClass(storageRetriever, type) {
    this.storageRetriever = storageRetriever;
    this.type = type;
  }

  var _proto21 = BrowserPersistenceClass.prototype;

  _proto21._isAvailable = function _isAvailable() {
    try {
      if (!this.storage) {
        return Promise.resolve(false);
      }

      this.storage.setItem(STORAGE_AVAILABLE_KEY, '1');
      this.storage.removeItem(STORAGE_AVAILABLE_KEY);
      return Promise.resolve(true);
    } catch (_a) {
      return Promise.resolve(false);
    }
  };

  _proto21._set = function _set(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
    return Promise.resolve();
  };

  _proto21._get = function _get(key) {
    var json = this.storage.getItem(key);
    return Promise.resolve(json ? JSON.parse(json) : null);
  };

  _proto21._remove = function _remove(key) {
    this.storage.removeItem(key);
    return Promise.resolve();
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(BrowserPersistenceClass, [{
    key: "storage",
    get: function get() {
      return this.storageRetriever();
    }
  }]);

  return BrowserPersistenceClass;
}();
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


function _iframeCannotSyncWebStorage() {
  var ua = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getUA"])();
  return _isSafari(ua) || _isIOS(ua);
} // The polling period in case events are not supported


var _POLLING_INTERVAL_MS$1 = 1000; // The IE 10 localStorage cross tab synchronization delay in milliseconds

var IE10_LOCAL_STORAGE_SYNC_DELAY = 10;

var BrowserLocalPersistence = /*#__PURE__*/function (_BrowserPersistenceCl) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(BrowserLocalPersistence, _BrowserPersistenceCl);

  function BrowserLocalPersistence() {
    var _this19;

    _this19 = _BrowserPersistenceCl.call(this, function () {
      return window.localStorage;
    }, "LOCAL"
    /* LOCAL */
    ) || this;

    _this19.boundEventHandler = function (event, poll) {
      return _this19.onStorageEvent(event, poll);
    };

    _this19.listeners = {};
    _this19.localCache = {}; // setTimeout return value is platform specific
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    _this19.pollTimer = null; // Safari or iOS browser and embedded in an iframe.

    _this19.safariLocalStorageNotSynced = _iframeCannotSyncWebStorage() && _isIframe(); // Whether to use polling instead of depending on window events

    _this19.fallbackToPolling = _isMobileBrowser();
    _this19._shouldAllowMigration = true;
    return _this19;
  }

  var _proto22 = BrowserLocalPersistence.prototype;

  _proto22.forAllChangedKeys = function forAllChangedKeys(cb) {
    // Check all keys with listeners on them.
    for (var _i = 0, _Object$keys = Object.keys(this.listeners); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      // Get value from localStorage.
      var newValue = this.storage.getItem(key);
      var oldValue = this.localCache[key]; // If local map value does not match, trigger listener with storage event.
      // Differentiate this simulated event from the real storage event.

      if (newValue !== oldValue) {
        cb(key, oldValue, newValue);
      }
    }
  };

  _proto22.onStorageEvent = function onStorageEvent(event, poll) {
    var _this20 = this;

    if (poll === void 0) {
      poll = false;
    }

    // Key would be null in some situations, like when localStorage is cleared
    if (!event.key) {
      this.forAllChangedKeys(function (key, _oldValue, newValue) {
        _this20.notifyListeners(key, newValue);
      });
      return;
    }

    var key = event.key; // Check the mechanism how this event was detected.
    // The first event will dictate the mechanism to be used.

    if (poll) {
      // Environment detects storage changes via polling.
      // Remove storage event listener to prevent possible event duplication.
      this.detachListener();
    } else {
      // Environment detects storage changes via storage event listener.
      // Remove polling listener to prevent possible event duplication.
      this.stopPolling();
    } // Safari embedded iframe. Storage event will trigger with the delta
    // changes but no changes will be applied to the iframe localStorage.


    if (this.safariLocalStorageNotSynced) {
      // Get current iframe page value.
      var _storedValue = this.storage.getItem(key); // Value not synchronized, synchronize manually.


      if (event.newValue !== _storedValue) {
        if (event.newValue !== null) {
          // Value changed from current value.
          this.storage.setItem(key, event.newValue);
        } else {
          // Current value deleted.
          this.storage.removeItem(key);
        }
      } else if (this.localCache[key] === event.newValue && !poll) {
        // Already detected and processed, do not trigger listeners again.
        return;
      }
    }

    var triggerListeners = function triggerListeners() {
      // Keep local map up to date in case storage event is triggered before
      // poll.
      var storedValue = _this20.storage.getItem(key);

      if (!poll && _this20.localCache[key] === storedValue) {
        // Real storage event which has already been detected, do nothing.
        // This seems to trigger in some IE browsers for some reason.
        return;
      }

      _this20.notifyListeners(key, storedValue);
    };

    var storedValue = this.storage.getItem(key);

    if (_isIE10() && storedValue !== event.newValue && event.newValue !== event.oldValue) {
      // IE 10 has this weird bug where a storage event would trigger with the
      // correct key, oldValue and newValue but localStorage.getItem(key) does
      // not yield the updated value until a few milliseconds. This ensures
      // this recovers from that situation.
      setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
    } else {
      triggerListeners();
    }
  };

  _proto22.notifyListeners = function notifyListeners(key, value) {
    this.localCache[key] = value;
    var listeners = this.listeners[key];

    if (listeners) {
      for (var _i2 = 0, _Array$from = Array.from(listeners); _i2 < _Array$from.length; _i2++) {
        var listener = _Array$from[_i2];
        listener(value ? JSON.parse(value) : value);
      }
    }
  };

  _proto22.startPolling = function startPolling() {
    var _this21 = this;

    this.stopPolling();
    this.pollTimer = setInterval(function () {
      _this21.forAllChangedKeys(function (key, oldValue, newValue) {
        _this21.onStorageEvent(new StorageEvent('storage', {
          key: key,
          oldValue: oldValue,
          newValue: newValue
        }),
        /* poll */
        true);
      });
    }, _POLLING_INTERVAL_MS$1);
  };

  _proto22.stopPolling = function stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  };

  _proto22.attachListener = function attachListener() {
    window.addEventListener('storage', this.boundEventHandler);
  };

  _proto22.detachListener = function detachListener() {
    window.removeEventListener('storage', this.boundEventHandler);
  };

  _proto22._addListener = function _addListener(key, listener) {
    if (Object.keys(this.listeners).length === 0) {
      // Whether browser can detect storage event when it had already been pushed to the background.
      // This may happen in some mobile browsers. A localStorage change in the foreground window
      // will not be detected in the background window via the storage event.
      // This was detected in iOS 7.x mobile browsers
      if (this.fallbackToPolling) {
        this.startPolling();
      } else {
        this.attachListener();
      }
    }

    if (!this.listeners[key]) {
      this.listeners[key] = new Set(); // Populate the cache to avoid spuriously triggering on first poll.

      this.localCache[key] = this.storage.getItem(key);
    }

    this.listeners[key].add(listener);
  };

  _proto22._removeListener = function _removeListener(key, listener) {
    if (this.listeners[key]) {
      this.listeners[key]["delete"](listener);

      if (this.listeners[key].size === 0) {
        delete this.listeners[key];
      }
    }

    if (Object.keys(this.listeners).length === 0) {
      this.detachListener();
      this.stopPolling();
    }
  } // Update local cache on base operations:
  ;

  _proto22._set =
  /*#__PURE__*/
  function () {
    var _set3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee46(key, value) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee46$(_context46) {
        while (1) {
          switch (_context46.prev = _context46.next) {
            case 0:
              _context46.next = 2;
              return _BrowserPersistenceCl.prototype._set.call(this, key, value);

            case 2:
              this.localCache[key] = JSON.stringify(value);

            case 3:
            case "end":
              return _context46.stop();
          }
        }
      }, _callee46, this);
    }));

    function _set(_x172, _x173) {
      return _set3.apply(this, arguments);
    }

    return _set;
  }();

  _proto22._get = /*#__PURE__*/function () {
    var _get3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee47(key) {
      var value;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee47$(_context47) {
        while (1) {
          switch (_context47.prev = _context47.next) {
            case 0:
              _context47.next = 2;
              return _BrowserPersistenceCl.prototype._get.call(this, key);

            case 2:
              value = _context47.sent;
              this.localCache[key] = JSON.stringify(value);
              return _context47.abrupt("return", value);

            case 5:
            case "end":
              return _context47.stop();
          }
        }
      }, _callee47, this);
    }));

    function _get(_x174) {
      return _get3.apply(this, arguments);
    }

    return _get;
  }();

  _proto22._remove = /*#__PURE__*/function () {
    var _remove3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee48(key) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee48$(_context48) {
        while (1) {
          switch (_context48.prev = _context48.next) {
            case 0:
              _context48.next = 2;
              return _BrowserPersistenceCl.prototype._remove.call(this, key);

            case 2:
              delete this.localCache[key];

            case 3:
            case "end":
              return _context48.stop();
          }
        }
      }, _callee48, this);
    }));

    function _remove(_x175) {
      return _remove3.apply(this, arguments);
    }

    return _remove;
  }();

  return BrowserLocalPersistence;
}(BrowserPersistenceClass);

BrowserLocalPersistence.type = 'LOCAL';
/**
 * An implementation of {@link Persistence} of type `LOCAL` using `localStorage`
 * for the underlying storage.
 *
 * @public
 */

var browserLocalPersistence = BrowserLocalPersistence;
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

var BrowserSessionPersistence = /*#__PURE__*/function (_BrowserPersistenceCl2) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(BrowserSessionPersistence, _BrowserPersistenceCl2);

  function BrowserSessionPersistence() {
    return _BrowserPersistenceCl2.call(this, function () {
      return window.sessionStorage;
    }, "SESSION"
    /* SESSION */
    ) || this;
  }

  var _proto23 = BrowserSessionPersistence.prototype;

  _proto23._addListener = function _addListener(_key, _listener) {
    // Listeners are not supported for session storage since it cannot be shared across windows
    return;
  };

  _proto23._removeListener = function _removeListener(_key, _listener) {
    // Listeners are not supported for session storage since it cannot be shared across windows
    return;
  };

  return BrowserSessionPersistence;
}(BrowserPersistenceClass);

BrowserSessionPersistence.type = 'SESSION';
/**
 * An implementation of {@link Persistence} of `SESSION` using `sessionStorage`
 * for the underlying storage.
 *
 * @public
 */

var browserSessionPersistence = BrowserSessionPersistence;
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
 * Shim for Promise.allSettled, note the slightly different format of `fulfilled` vs `status`.
 *
 * @param promises - Array of promises to wait on.
 */

function _allSettled(promises) {
  return Promise.all(promises.map( /*#__PURE__*/function () {
    var _ref22 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee49(promise) {
      var value;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee49$(_context49) {
        while (1) {
          switch (_context49.prev = _context49.next) {
            case 0:
              _context49.prev = 0;
              _context49.next = 3;
              return promise;

            case 3:
              value = _context49.sent;
              return _context49.abrupt("return", {
                fulfilled: true,
                value: value
              });

            case 7:
              _context49.prev = 7;
              _context49.t0 = _context49["catch"](0);
              return _context49.abrupt("return", {
                fulfilled: false,
                reason: _context49.t0
              });

            case 10:
            case "end":
              return _context49.stop();
          }
        }
      }, _callee49, null, [[0, 7]]);
    }));

    return function (_x176) {
      return _ref22.apply(this, arguments);
    };
  }()));
}
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
 * Interface class for receiving messages.
 *
 */


var Receiver = /*#__PURE__*/function () {
  function Receiver(eventTarget) {
    this.eventTarget = eventTarget;
    this.handlersMap = {};
    this.boundEventHandler = this.handleEvent.bind(this);
  }
  /**
   * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
   *
   * @param eventTarget - An event target (such as window or self) through which the underlying
   * messages will be received.
   */


  Receiver._getInstance = function _getInstance(eventTarget) {
    // The results are stored in an array since objects can't be keys for other
    // objects. In addition, setting a unique property on an event target as a
    // hash map key may not be allowed due to CORS restrictions.
    var existingInstance = this.receivers.find(function (receiver) {
      return receiver.isListeningto(eventTarget);
    });

    if (existingInstance) {
      return existingInstance;
    }

    var newInstance = new Receiver(eventTarget);
    this.receivers.push(newInstance);
    return newInstance;
  };

  var _proto24 = Receiver.prototype;

  _proto24.isListeningto = function isListeningto(eventTarget) {
    return this.eventTarget === eventTarget;
  }
  /**
   * Fans out a MessageEvent to the appropriate listeners.
   *
   * @remarks
   * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
   * finished processing.
   *
   * @param event - The MessageEvent.
   *
   */
  ;

  _proto24.handleEvent =
  /*#__PURE__*/
  function () {
    var _handleEvent = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee51(event) {
      var messageEvent, _messageEvent$data, eventId, eventType, data, handlers, promises, response;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee51$(_context51) {
        while (1) {
          switch (_context51.prev = _context51.next) {
            case 0:
              messageEvent = event;
              _messageEvent$data = messageEvent.data, eventId = _messageEvent$data.eventId, eventType = _messageEvent$data.eventType, data = _messageEvent$data.data;
              handlers = this.handlersMap[eventType];

              if (handlers === null || handlers === void 0 ? void 0 : handlers.size) {
                _context51.next = 5;
                break;
              }

              return _context51.abrupt("return");

            case 5:
              messageEvent.ports[0].postMessage({
                status: "ack"
                /* ACK */
                ,
                eventId: eventId,
                eventType: eventType
              });
              promises = Array.from(handlers).map( /*#__PURE__*/function () {
                var _ref23 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee50(handler) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee50$(_context50) {
                    while (1) {
                      switch (_context50.prev = _context50.next) {
                        case 0:
                          return _context50.abrupt("return", handler(messageEvent.origin, data));

                        case 1:
                        case "end":
                          return _context50.stop();
                      }
                    }
                  }, _callee50);
                }));

                return function (_x178) {
                  return _ref23.apply(this, arguments);
                };
              }());
              _context51.next = 9;
              return _allSettled(promises);

            case 9:
              response = _context51.sent;
              messageEvent.ports[0].postMessage({
                status: "done"
                /* DONE */
                ,
                eventId: eventId,
                eventType: eventType,
                response: response
              });

            case 11:
            case "end":
              return _context51.stop();
          }
        }
      }, _callee51, this);
    }));

    function handleEvent(_x177) {
      return _handleEvent.apply(this, arguments);
    }

    return handleEvent;
  }()
  /**
   * Subscribe an event handler for a particular event.
   *
   * @param eventType - Event name to subscribe to.
   * @param eventHandler - The event handler which should receive the events.
   *
   */
  ;

  _proto24._subscribe = function _subscribe(eventType, eventHandler) {
    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.addEventListener('message', this.boundEventHandler);
    }

    if (!this.handlersMap[eventType]) {
      this.handlersMap[eventType] = new Set();
    }

    this.handlersMap[eventType].add(eventHandler);
  }
  /**
   * Unsubscribe an event handler from a particular event.
   *
   * @param eventType - Event name to unsubscribe from.
   * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
   *
   */
  ;

  _proto24._unsubscribe = function _unsubscribe(eventType, eventHandler) {
    if (this.handlersMap[eventType] && eventHandler) {
      this.handlersMap[eventType]["delete"](eventHandler);
    }

    if (!eventHandler || this.handlersMap[eventType].size === 0) {
      delete this.handlersMap[eventType];
    }

    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.removeEventListener('message', this.boundEventHandler);
    }
  };

  return Receiver;
}();

Receiver.receivers = [];
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

function _generateEventId(prefix, digits) {
  if (prefix === void 0) {
    prefix = '';
  }

  if (digits === void 0) {
    digits = 10;
  }

  var random = '';

  for (var i = 0; i < digits; i++) {
    random += Math.floor(Math.random() * 10);
  }

  return prefix + random;
}
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
 * Interface for sending messages and waiting for a completion response.
 *
 */


var Sender = /*#__PURE__*/function () {
  function Sender(target) {
    this.target = target;
    this.handlers = new Set();
  }
  /**
   * Unsubscribe the handler and remove it from our tracking Set.
   *
   * @param handler - The handler to unsubscribe.
   */


  var _proto25 = Sender.prototype;

  _proto25.removeMessageHandler = function removeMessageHandler(handler) {
    if (handler.messageChannel) {
      handler.messageChannel.port1.removeEventListener('message', handler.onMessage);
      handler.messageChannel.port1.close();
    }

    this.handlers["delete"](handler);
  }
  /**
   * Send a message to the Receiver located at {@link target}.
   *
   * @remarks
   * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
   * receiver has had a chance to fully process the event.
   *
   * @param eventType - Type of event to send.
   * @param data - The payload of the event.
   * @param timeout - Timeout for waiting on an ACK from the receiver.
   *
   * @returns An array of settled promises from all the handlers that were listening on the receiver.
   */
  ;

  _proto25._send =
  /*#__PURE__*/
  function () {
    var _send2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee52(eventType, data, timeout
    /* ACK */
    ) {
      var _this22 = this;

      var messageChannel, completionTimer, handler;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee52$(_context52) {
        while (1) {
          switch (_context52.prev = _context52.next) {
            case 0:
              if (timeout === void 0) {
                timeout = 50;
              }

              messageChannel = typeof MessageChannel !== 'undefined' ? new MessageChannel() : null;

              if (messageChannel) {
                _context52.next = 4;
                break;
              }

              throw new Error("connection_unavailable"
              /* CONNECTION_UNAVAILABLE */
              );

            case 4:
              return _context52.abrupt("return", new Promise(function (resolve, reject) {
                var eventId = _generateEventId('', 20);

                messageChannel.port1.start();
                var ackTimer = setTimeout(function () {
                  reject(new Error("unsupported_event"
                  /* UNSUPPORTED_EVENT */
                  ));
                }, timeout);
                handler = {
                  messageChannel: messageChannel,
                  onMessage: function onMessage(event) {
                    var messageEvent = event;

                    if (messageEvent.data.eventId !== eventId) {
                      return;
                    }

                    switch (messageEvent.data.status) {
                      case "ack"
                      /* ACK */
                      :
                        // The receiver should ACK first.
                        clearTimeout(ackTimer);
                        completionTimer = setTimeout(function () {
                          reject(new Error("timeout"
                          /* TIMEOUT */
                          ));
                        }, 3000
                        /* COMPLETION */
                        );
                        break;

                      case "done"
                      /* DONE */
                      :
                        // Once the receiver's handlers are finished we will get the results.
                        clearTimeout(completionTimer);
                        resolve(messageEvent.data.response);
                        break;

                      default:
                        clearTimeout(ackTimer);
                        clearTimeout(completionTimer);
                        reject(new Error("invalid_response"
                        /* INVALID_RESPONSE */
                        ));
                        break;
                    }
                  }
                };

                _this22.handlers.add(handler);

                messageChannel.port1.addEventListener('message', handler.onMessage);

                _this22.target.postMessage({
                  eventType: eventType,
                  eventId: eventId,
                  data: data
                }, [messageChannel.port2]);
              })["finally"](function () {
                if (handler) {
                  _this22.removeMessageHandler(handler);
                }
              }));

            case 5:
            case "end":
              return _context52.stop();
          }
        }
      }, _callee52);
    }));

    function _send(_x179, _x180, _x181) {
      return _send2.apply(this, arguments);
    }

    return _send;
  }();

  return Sender;
}();
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
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */


function _window() {
  return window;
}

function _setWindowLocation(url) {
  _window().location.href = url;
}
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


function _isWorker() {
  return typeof _window()['WorkerGlobalScope'] !== 'undefined' && typeof _window()['importScripts'] === 'function';
}

function _getActiveServiceWorker() {
  return _getActiveServiceWorker2.apply(this, arguments);
}

function _getActiveServiceWorker2() {
  _getActiveServiceWorker2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee144() {
    var registration;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee144$(_context144) {
      while (1) {
        switch (_context144.prev = _context144.next) {
          case 0:
            if (navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) {
              _context144.next = 2;
              break;
            }

            return _context144.abrupt("return", null);

          case 2:
            _context144.prev = 2;
            _context144.next = 5;
            return navigator.serviceWorker.ready;

          case 5:
            registration = _context144.sent;
            return _context144.abrupt("return", registration.active);

          case 9:
            _context144.prev = 9;
            _context144.t0 = _context144["catch"](2);
            return _context144.abrupt("return", null);

          case 12:
          case "end":
            return _context144.stop();
        }
      }
    }, _callee144, null, [[2, 9]]);
  }));
  return _getActiveServiceWorker2.apply(this, arguments);
}

function _getServiceWorkerController() {
  var _a;

  return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
}

function _getWorkerGlobalScope() {
  return _isWorker() ? self : null;
}
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


var DB_NAME = 'firebaseLocalStorageDb';
var DB_VERSION = 1;
var DB_OBJECTSTORE_NAME = 'firebaseLocalStorage';
var DB_DATA_KEYPATH = 'fbase_key';
/**
 * Promise wrapper for IDBRequest
 *
 * Unfortunately we can't cleanly extend Promise<T> since promises are not callable in ES6
 *
 */

var DBPromise = /*#__PURE__*/function () {
  function DBPromise(request) {
    this.request = request;
  }

  var _proto26 = DBPromise.prototype;

  _proto26.toPromise = function toPromise() {
    var _this23 = this;

    return new Promise(function (resolve, reject) {
      _this23.request.addEventListener('success', function () {
        resolve(_this23.request.result);
      });

      _this23.request.addEventListener('error', function () {
        reject(_this23.request.error);
      });
    });
  };

  return DBPromise;
}();

function getObjectStore(db, isReadWrite) {
  return db.transaction([DB_OBJECTSTORE_NAME], isReadWrite ? 'readwrite' : 'readonly').objectStore(DB_OBJECTSTORE_NAME);
}

function _deleteDatabase() {
  var request = indexedDB.deleteDatabase(DB_NAME);
  return new DBPromise(request).toPromise();
}

function _openDatabase() {
  var request = indexedDB.open(DB_NAME, DB_VERSION);
  return new Promise(function (resolve, reject) {
    request.addEventListener('error', function () {
      reject(request.error);
    });
    request.addEventListener('upgradeneeded', function () {
      var db = request.result;

      try {
        db.createObjectStore(DB_OBJECTSTORE_NAME, {
          keyPath: DB_DATA_KEYPATH
        });
      } catch (e) {
        reject(e);
      }
    });
    request.addEventListener('success', /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee53() {
      var db;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee53$(_context53) {
        while (1) {
          switch (_context53.prev = _context53.next) {
            case 0:
              db = request.result; // Strange bug that occurs in Firefox when multiple tabs are opened at the
              // same time. The only way to recover seems to be deleting the database
              // and re-initializing it.
              // https://github.com/firebase/firebase-js-sdk/issues/634

              if (db.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
                _context53.next = 12;
                break;
              }

              // Need to close the database or else you get a `blocked` event
              db.close();
              _context53.next = 5;
              return _deleteDatabase();

            case 5:
              _context53.t0 = resolve;
              _context53.next = 8;
              return _openDatabase();

            case 8:
              _context53.t1 = _context53.sent;
              (0, _context53.t0)(_context53.t1);
              _context53.next = 13;
              break;

            case 12:
              resolve(db);

            case 13:
            case "end":
              return _context53.stop();
          }
        }
      }, _callee53);
    })));
  });
}

function _putObject(_x182, _x183, _x184) {
  return _putObject2.apply(this, arguments);
}

function _putObject2() {
  _putObject2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee145(db, key, value) {
    var _getObjectStore$put;

    var request;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee145$(_context145) {
      while (1) {
        switch (_context145.prev = _context145.next) {
          case 0:
            request = getObjectStore(db, true).put((_getObjectStore$put = {}, _getObjectStore$put[DB_DATA_KEYPATH] = key, _getObjectStore$put.value = value, _getObjectStore$put));
            return _context145.abrupt("return", new DBPromise(request).toPromise());

          case 2:
          case "end":
            return _context145.stop();
        }
      }
    }, _callee145);
  }));
  return _putObject2.apply(this, arguments);
}

function getObject(_x185, _x186) {
  return _getObject.apply(this, arguments);
}

function _getObject() {
  _getObject = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee146(db, key) {
    var request, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee146$(_context146) {
      while (1) {
        switch (_context146.prev = _context146.next) {
          case 0:
            request = getObjectStore(db, false).get(key);
            _context146.next = 3;
            return new DBPromise(request).toPromise();

          case 3:
            data = _context146.sent;
            return _context146.abrupt("return", data === undefined ? null : data.value);

          case 5:
          case "end":
            return _context146.stop();
        }
      }
    }, _callee146);
  }));
  return _getObject.apply(this, arguments);
}

function _deleteObject(db, key) {
  var request = getObjectStore(db, true)["delete"](key);
  return new DBPromise(request).toPromise();
}

var _POLLING_INTERVAL_MS = 800;
var _TRANSACTION_RETRY_COUNT = 3;

var IndexedDBLocalPersistence = /*#__PURE__*/function () {
  function IndexedDBLocalPersistence() {
    this.type = "LOCAL"
    /* LOCAL */
    ;
    this._shouldAllowMigration = true;
    this.listeners = {};
    this.localCache = {}; // setTimeout return value is platform specific
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    this.pollTimer = null;
    this.pendingWrites = 0;
    this.receiver = null;
    this.sender = null;
    this.serviceWorkerReceiverAvailable = false;
    this.activeServiceWorker = null; // Fire & forget the service worker registration as it may never resolve

    this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(function () {}, function () {});
  }

  var _proto27 = IndexedDBLocalPersistence.prototype;

  _proto27._openDb = /*#__PURE__*/function () {
    var _openDb2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee54() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee54$(_context54) {
        while (1) {
          switch (_context54.prev = _context54.next) {
            case 0:
              if (!this.db) {
                _context54.next = 2;
                break;
              }

              return _context54.abrupt("return", this.db);

            case 2:
              _context54.next = 4;
              return _openDatabase();

            case 4:
              this.db = _context54.sent;
              return _context54.abrupt("return", this.db);

            case 6:
            case "end":
              return _context54.stop();
          }
        }
      }, _callee54, this);
    }));

    function _openDb() {
      return _openDb2.apply(this, arguments);
    }

    return _openDb;
  }();

  _proto27._withRetries = /*#__PURE__*/function () {
    var _withRetries2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee55(op) {
      var numAttempts, db;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee55$(_context55) {
        while (1) {
          switch (_context55.prev = _context55.next) {
            case 0:
              numAttempts = 0;

            case 1:
              if (false) {}

              _context55.prev = 2;
              _context55.next = 5;
              return this._openDb();

            case 5:
              db = _context55.sent;
              _context55.next = 8;
              return op(db);

            case 8:
              return _context55.abrupt("return", _context55.sent);

            case 11:
              _context55.prev = 11;
              _context55.t0 = _context55["catch"](2);

              if (!(numAttempts++ > _TRANSACTION_RETRY_COUNT)) {
                _context55.next = 15;
                break;
              }

              throw _context55.t0;

            case 15:
              if (this.db) {
                this.db.close();
                this.db = undefined;
              } // TODO: consider adding exponential backoff


            case 16:
              _context55.next = 1;
              break;

            case 18:
            case "end":
              return _context55.stop();
          }
        }
      }, _callee55, this, [[2, 11]]);
    }));

    function _withRetries(_x187) {
      return _withRetries2.apply(this, arguments);
    }

    return _withRetries;
  }()
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  ;

  _proto27.initializeServiceWorkerMessaging =
  /*#__PURE__*/
  function () {
    var _initializeServiceWorkerMessaging = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee56() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee56$(_context56) {
        while (1) {
          switch (_context56.prev = _context56.next) {
            case 0:
              return _context56.abrupt("return", _isWorker() ? this.initializeReceiver() : this.initializeSender());

            case 1:
            case "end":
              return _context56.stop();
          }
        }
      }, _callee56, this);
    }));

    function initializeServiceWorkerMessaging() {
      return _initializeServiceWorkerMessaging.apply(this, arguments);
    }

    return initializeServiceWorkerMessaging;
  }()
  /**
   * As the worker we should listen to events from the main window.
   */
  ;

  _proto27.initializeReceiver =
  /*#__PURE__*/
  function () {
    var _initializeReceiver = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee59() {
      var _this24 = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee59$(_context59) {
        while (1) {
          switch (_context59.prev = _context59.next) {
            case 0:
              this.receiver = Receiver._getInstance(_getWorkerGlobalScope()); // Refresh from persistence if we receive a KeyChanged message.

              this.receiver._subscribe("keyChanged"
              /* KEY_CHANGED */
              , /*#__PURE__*/function () {
                var _ref25 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee57(_origin, data) {
                  var keys;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee57$(_context57) {
                    while (1) {
                      switch (_context57.prev = _context57.next) {
                        case 0:
                          _context57.next = 2;
                          return _this24._poll();

                        case 2:
                          keys = _context57.sent;
                          return _context57.abrupt("return", {
                            keyProcessed: keys.includes(data.key)
                          });

                        case 4:
                        case "end":
                          return _context57.stop();
                      }
                    }
                  }, _callee57);
                }));

                return function (_x188, _x189) {
                  return _ref25.apply(this, arguments);
                };
              }()); // Let the sender know that we are listening so they give us more timeout.


              this.receiver._subscribe("ping"
              /* PING */
              , /*#__PURE__*/function () {
                var _ref26 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee58(_origin, _data) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee58$(_context58) {
                    while (1) {
                      switch (_context58.prev = _context58.next) {
                        case 0:
                          return _context58.abrupt("return", ["keyChanged"
                          /* KEY_CHANGED */
                          ]);

                        case 1:
                        case "end":
                          return _context58.stop();
                      }
                    }
                  }, _callee58);
                }));

                return function (_x190, _x191) {
                  return _ref26.apply(this, arguments);
                };
              }());

            case 3:
            case "end":
              return _context59.stop();
          }
        }
      }, _callee59, this);
    }));

    function initializeReceiver() {
      return _initializeReceiver.apply(this, arguments);
    }

    return initializeReceiver;
  }()
  /**
   * As the main window, we should let the worker know when keys change (set and remove).
   *
   * @remarks
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
   * may not resolve.
   */
  ;

  _proto27.initializeSender =
  /*#__PURE__*/
  function () {
    var _initializeSender = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee60() {
      var _a, _b, results;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee60$(_context60) {
        while (1) {
          switch (_context60.prev = _context60.next) {
            case 0:
              _context60.next = 2;
              return _getActiveServiceWorker();

            case 2:
              this.activeServiceWorker = _context60.sent;

              if (this.activeServiceWorker) {
                _context60.next = 5;
                break;
              }

              return _context60.abrupt("return");

            case 5:
              this.sender = new Sender(this.activeServiceWorker); // Ping the service worker to check what events they can handle.

              _context60.next = 8;
              return this.sender._send("ping"
              /* PING */
              , {}, 800
              /* LONG_ACK */
              );

            case 8:
              results = _context60.sent;

              if (results) {
                _context60.next = 11;
                break;
              }

              return _context60.abrupt("return");

            case 11:
              if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes("keyChanged"
              /* KEY_CHANGED */
              ))) {
                this.serviceWorkerReceiverAvailable = true;
              }

            case 12:
            case "end":
              return _context60.stop();
          }
        }
      }, _callee60, this);
    }));

    function initializeSender() {
      return _initializeSender.apply(this, arguments);
    }

    return initializeSender;
  }()
  /**
   * Let the worker know about a changed key, the exact key doesn't technically matter since the
   * worker will just trigger a full sync anyway.
   *
   * @remarks
   * For now, we only support one service worker per page.
   *
   * @param key - Storage key which changed.
   */
  ;

  _proto27.notifyServiceWorker =
  /*#__PURE__*/
  function () {
    var _notifyServiceWorker = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee61(key) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee61$(_context61) {
        while (1) {
          switch (_context61.prev = _context61.next) {
            case 0:
              if (!(!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker)) {
                _context61.next = 2;
                break;
              }

              return _context61.abrupt("return");

            case 2:
              _context61.prev = 2;
              _context61.next = 5;
              return this.sender._send("keyChanged"
              /* KEY_CHANGED */
              , {
                key: key
              }, // Use long timeout if receiver has previously responded to a ping from us.
              this.serviceWorkerReceiverAvailable ? 800
              /* LONG_ACK */
              : 50
              /* ACK */
              );

            case 5:
              _context61.next = 9;
              break;

            case 7:
              _context61.prev = 7;
              _context61.t0 = _context61["catch"](2);

            case 9:
            case "end":
              return _context61.stop();
          }
        }
      }, _callee61, this, [[2, 7]]);
    }));

    function notifyServiceWorker(_x192) {
      return _notifyServiceWorker.apply(this, arguments);
    }

    return notifyServiceWorker;
  }();

  _proto27._isAvailable = /*#__PURE__*/function () {
    var _isAvailable3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee62() {
      var db;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee62$(_context62) {
        while (1) {
          switch (_context62.prev = _context62.next) {
            case 0:
              _context62.prev = 0;

              if (indexedDB) {
                _context62.next = 3;
                break;
              }

              return _context62.abrupt("return", false);

            case 3:
              _context62.next = 5;
              return _openDatabase();

            case 5:
              db = _context62.sent;
              _context62.next = 8;
              return _putObject(db, STORAGE_AVAILABLE_KEY, '1');

            case 8:
              _context62.next = 10;
              return _deleteObject(db, STORAGE_AVAILABLE_KEY);

            case 10:
              return _context62.abrupt("return", true);

            case 13:
              _context62.prev = 13;
              _context62.t0 = _context62["catch"](0);

            case 15:
              return _context62.abrupt("return", false);

            case 16:
            case "end":
              return _context62.stop();
          }
        }
      }, _callee62, null, [[0, 13]]);
    }));

    function _isAvailable() {
      return _isAvailable3.apply(this, arguments);
    }

    return _isAvailable;
  }();

  _proto27._withPendingWrite = /*#__PURE__*/function () {
    var _withPendingWrite2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee63(write) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee63$(_context63) {
        while (1) {
          switch (_context63.prev = _context63.next) {
            case 0:
              this.pendingWrites++;
              _context63.prev = 1;
              _context63.next = 4;
              return write();

            case 4:
              _context63.prev = 4;
              this.pendingWrites--;
              return _context63.finish(4);

            case 7:
            case "end":
              return _context63.stop();
          }
        }
      }, _callee63, this, [[1,, 4, 7]]);
    }));

    function _withPendingWrite(_x193) {
      return _withPendingWrite2.apply(this, arguments);
    }

    return _withPendingWrite;
  }();

  _proto27._set = /*#__PURE__*/function () {
    var _set4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee65(key, value) {
      var _this25 = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee65$(_context65) {
        while (1) {
          switch (_context65.prev = _context65.next) {
            case 0:
              return _context65.abrupt("return", this._withPendingWrite( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee64() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee64$(_context64) {
                  while (1) {
                    switch (_context64.prev = _context64.next) {
                      case 0:
                        _context64.next = 2;
                        return _this25._withRetries(function (db) {
                          return _putObject(db, key, value);
                        });

                      case 2:
                        _this25.localCache[key] = value;
                        return _context64.abrupt("return", _this25.notifyServiceWorker(key));

                      case 4:
                      case "end":
                        return _context64.stop();
                    }
                  }
                }, _callee64);
              }))));

            case 1:
            case "end":
              return _context65.stop();
          }
        }
      }, _callee65, this);
    }));

    function _set(_x194, _x195) {
      return _set4.apply(this, arguments);
    }

    return _set;
  }();

  _proto27._get = /*#__PURE__*/function () {
    var _get4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee66(key) {
      var obj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee66$(_context66) {
        while (1) {
          switch (_context66.prev = _context66.next) {
            case 0:
              _context66.next = 2;
              return this._withRetries(function (db) {
                return getObject(db, key);
              });

            case 2:
              obj = _context66.sent;
              this.localCache[key] = obj;
              return _context66.abrupt("return", obj);

            case 5:
            case "end":
              return _context66.stop();
          }
        }
      }, _callee66, this);
    }));

    function _get(_x196) {
      return _get4.apply(this, arguments);
    }

    return _get;
  }();

  _proto27._remove = /*#__PURE__*/function () {
    var _remove4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee68(key) {
      var _this26 = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee68$(_context68) {
        while (1) {
          switch (_context68.prev = _context68.next) {
            case 0:
              return _context68.abrupt("return", this._withPendingWrite( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee67() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee67$(_context67) {
                  while (1) {
                    switch (_context67.prev = _context67.next) {
                      case 0:
                        _context67.next = 2;
                        return _this26._withRetries(function (db) {
                          return _deleteObject(db, key);
                        });

                      case 2:
                        delete _this26.localCache[key];
                        return _context67.abrupt("return", _this26.notifyServiceWorker(key));

                      case 4:
                      case "end":
                        return _context67.stop();
                    }
                  }
                }, _callee67);
              }))));

            case 1:
            case "end":
              return _context68.stop();
          }
        }
      }, _callee68, this);
    }));

    function _remove(_x197) {
      return _remove4.apply(this, arguments);
    }

    return _remove;
  }();

  _proto27._poll = /*#__PURE__*/function () {
    var _poll2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee69() {
      var result, keys, keysInResult, _iterator2, _step2, _step2$value, key, value, _i3, _Object$keys2, localKey;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee69$(_context69) {
        while (1) {
          switch (_context69.prev = _context69.next) {
            case 0:
              _context69.next = 2;
              return this._withRetries(function (db) {
                var getAllRequest = getObjectStore(db, false).getAll();
                return new DBPromise(getAllRequest).toPromise();
              });

            case 2:
              result = _context69.sent;

              if (result) {
                _context69.next = 5;
                break;
              }

              return _context69.abrupt("return", []);

            case 5:
              if (!(this.pendingWrites !== 0)) {
                _context69.next = 7;
                break;
              }

              return _context69.abrupt("return", []);

            case 7:
              keys = [];
              keysInResult = new Set();

              for (_iterator2 = _createForOfIteratorHelperLoose(result); !(_step2 = _iterator2()).done;) {
                _step2$value = _step2.value, key = _step2$value.fbase_key, value = _step2$value.value;
                keysInResult.add(key);

                if (JSON.stringify(this.localCache[key]) !== JSON.stringify(value)) {
                  this.notifyListeners(key, value);
                  keys.push(key);
                }
              }

              for (_i3 = 0, _Object$keys2 = Object.keys(this.localCache); _i3 < _Object$keys2.length; _i3++) {
                localKey = _Object$keys2[_i3];

                if (this.localCache[localKey] && !keysInResult.has(localKey)) {
                  // Deleted
                  this.notifyListeners(localKey, null);
                  keys.push(localKey);
                }
              }

              return _context69.abrupt("return", keys);

            case 12:
            case "end":
              return _context69.stop();
          }
        }
      }, _callee69, this);
    }));

    function _poll() {
      return _poll2.apply(this, arguments);
    }

    return _poll;
  }();

  _proto27.notifyListeners = function notifyListeners(key, newValue) {
    this.localCache[key] = newValue;
    var listeners = this.listeners[key];

    if (listeners) {
      for (var _i4 = 0, _Array$from2 = Array.from(listeners); _i4 < _Array$from2.length; _i4++) {
        var listener = _Array$from2[_i4];
        listener(newValue);
      }
    }
  };

  _proto27.startPolling = function startPolling() {
    var _this27 = this;

    this.stopPolling();
    this.pollTimer = setInterval( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee70() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee70$(_context70) {
        while (1) {
          switch (_context70.prev = _context70.next) {
            case 0:
              return _context70.abrupt("return", _this27._poll());

            case 1:
            case "end":
              return _context70.stop();
          }
        }
      }, _callee70);
    })), _POLLING_INTERVAL_MS);
  };

  _proto27.stopPolling = function stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  };

  _proto27._addListener = function _addListener(key, listener) {
    if (Object.keys(this.listeners).length === 0) {
      this.startPolling();
    }

    if (!this.listeners[key]) {
      this.listeners[key] = new Set(); // Populate the cache to avoid spuriously triggering on first poll.

      void this._get(key); // This can happen in the background async and we can return immediately.
    }

    this.listeners[key].add(listener);
  };

  _proto27._removeListener = function _removeListener(key, listener) {
    if (this.listeners[key]) {
      this.listeners[key]["delete"](listener);

      if (this.listeners[key].size === 0) {
        delete this.listeners[key];
      }
    }

    if (Object.keys(this.listeners).length === 0) {
      this.stopPolling();
    }
  };

  return IndexedDBLocalPersistence;
}();

IndexedDBLocalPersistence.type = 'LOCAL';
/**
 * An implementation of {@link Persistence} of type `LOCAL` using `indexedDB`
 * for the underlying storage.
 *
 * @public
 */

var indexedDBLocalPersistence = IndexedDBLocalPersistence;
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

function startSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST"
  /* POST */
  , "/v2/accounts/mfaSignIn:start"
  /* START_PHONE_MFA_SIGN_IN */
  , _addTidIfNecessary(auth, request));
}

function finalizeSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST"
  /* POST */
  , "/v2/accounts/mfaSignIn:finalize"
  /* FINALIZE_PHONE_MFA_SIGN_IN */
  , _addTidIfNecessary(auth, request));
}
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


function getRecaptchaParams(_x198) {
  return _getRecaptchaParams.apply(this, arguments);
}
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


function _getRecaptchaParams() {
  _getRecaptchaParams = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee147(auth) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee147$(_context147) {
      while (1) {
        switch (_context147.prev = _context147.next) {
          case 0:
            _context147.next = 2;
            return _performApiRequest(auth, "GET"
            /* GET */
            , "/v1/recaptchaParams"
            /* GET_RECAPTCHA_PARAM */
            );

          case 2:
            _context147.t0 = _context147.sent.recaptchaSiteKey;

            if (_context147.t0) {
              _context147.next = 5;
              break;
            }

            _context147.t0 = '';

          case 5:
            return _context147.abrupt("return", _context147.t0);

          case 6:
          case "end":
            return _context147.stop();
        }
      }
    }, _callee147);
  }));
  return _getRecaptchaParams.apply(this, arguments);
}

function getScriptParentElement() {
  var _a, _b;

  return (_b = (_a = document.getElementsByTagName('head')) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
}

function _loadJS(url) {
  // TODO: consider adding timeout support & cancellation
  return new Promise(function (resolve, reject) {
    var el = document.createElement('script');
    el.setAttribute('src', url);
    el.onload = resolve;

    el.onerror = function (e) {
      var error = _createError("internal-error"
      /* INTERNAL_ERROR */
      );

      error.customData = e;
      reject(error);
    };

    el.type = 'text/javascript';
    el.charset = 'UTF-8';
    getScriptParentElement().appendChild(el);
  });
}

function _generateCallbackName(prefix) {
  return "__" + prefix + Math.floor(Math.random() * 1000000);
}
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


var _SOLVE_TIME_MS = 500;
var _EXPIRATION_TIME_MS = 60000;
var _WIDGET_ID_START = 1000000000000;

var MockReCaptcha = /*#__PURE__*/function () {
  function MockReCaptcha(auth) {
    this.auth = auth;
    this.counter = _WIDGET_ID_START;
    this._widgets = new Map();
  }

  var _proto28 = MockReCaptcha.prototype;

  _proto28.render = function render(container, parameters) {
    var id = this.counter;

    this._widgets.set(id, new MockWidget(container, this.auth.name, parameters || {}));

    this.counter++;
    return id;
  };

  _proto28.reset = function reset(optWidgetId) {
    var _a;

    var id = optWidgetId || _WIDGET_ID_START;
    void ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a["delete"]());

    this._widgets["delete"](id);
  };

  _proto28.getResponse = function getResponse(optWidgetId) {
    var _a;

    var id = optWidgetId || _WIDGET_ID_START;
    return ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.getResponse()) || '';
  };

  _proto28.execute = /*#__PURE__*/function () {
    var _execute = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee71(optWidgetId) {
      var _a, id;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee71$(_context71) {
        while (1) {
          switch (_context71.prev = _context71.next) {
            case 0:
              id = optWidgetId || _WIDGET_ID_START;
              void ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.execute());
              return _context71.abrupt("return", '');

            case 3:
            case "end":
              return _context71.stop();
          }
        }
      }, _callee71, this);
    }));

    function execute(_x199) {
      return _execute.apply(this, arguments);
    }

    return execute;
  }();

  return MockReCaptcha;
}();

var MockWidget = /*#__PURE__*/function () {
  function MockWidget(containerOrId, appName, params) {
    var _this28 = this;

    this.params = params;
    this.timerId = null;
    this.deleted = false;
    this.responseToken = null;

    this.clickHandler = function () {
      _this28.execute();
    };

    var container = typeof containerOrId === 'string' ? document.getElementById(containerOrId) : containerOrId;

    _assert(container, "argument-error"
    /* ARGUMENT_ERROR */
    , {
      appName: appName
    });

    this.container = container;
    this.isVisible = this.params.size !== 'invisible';

    if (this.isVisible) {
      this.execute();
    } else {
      this.container.addEventListener('click', this.clickHandler);
    }
  }

  var _proto29 = MockWidget.prototype;

  _proto29.getResponse = function getResponse() {
    this.checkIfDeleted();
    return this.responseToken;
  };

  _proto29["delete"] = function _delete() {
    this.checkIfDeleted();
    this.deleted = true;

    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }

    this.container.removeEventListener('click', this.clickHandler);
  };

  _proto29.execute = function execute() {
    var _this29 = this;

    this.checkIfDeleted();

    if (this.timerId) {
      return;
    }

    this.timerId = window.setTimeout(function () {
      _this29.responseToken = generateRandomAlphaNumericString(50);
      var _this29$params = _this29.params,
          callback = _this29$params.callback,
          expiredCallback = _this29$params['expired-callback'];

      if (callback) {
        try {
          callback(_this29.responseToken);
        } catch (e) {}
      }

      _this29.timerId = window.setTimeout(function () {
        _this29.timerId = null;
        _this29.responseToken = null;

        if (expiredCallback) {
          try {
            expiredCallback();
          } catch (e) {}
        }

        if (_this29.isVisible) {
          _this29.execute();
        }
      }, _EXPIRATION_TIME_MS);
    }, _SOLVE_TIME_MS);
  };

  _proto29.checkIfDeleted = function checkIfDeleted() {
    if (this.deleted) {
      throw new Error('reCAPTCHA mock was already deleted!');
    }
  };

  return MockWidget;
}();

function generateRandomAlphaNumericString(len) {
  var chars = [];
  var allowedChars = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (var i = 0; i < len; i++) {
    chars.push(allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)));
  }

  return chars.join('');
}
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
// ReCaptcha will load using the same callback, so the callback function needs
// to be kept around


var _JSLOAD_CALLBACK = _generateCallbackName('rcb');

var NETWORK_TIMEOUT_DELAY = new Delay(30000, 60000);
var RECAPTCHA_BASE = 'https://www.google.com/recaptcha/api.js?';
/**
 * Loader for the GReCaptcha library. There should only ever be one of this.
 */

var ReCaptchaLoaderImpl = /*#__PURE__*/function () {
  function ReCaptchaLoaderImpl() {
    this.hostLanguage = '';
    this.counter = 0;
    this.librarySeparatelyLoaded = !!_window().grecaptcha;
  }

  var _proto30 = ReCaptchaLoaderImpl.prototype;

  _proto30.load = function load(auth, hl) {
    var _this30 = this;

    if (hl === void 0) {
      hl = '';
    }

    _assert(isHostLanguageValid(hl), auth, "argument-error"
    /* ARGUMENT_ERROR */
    );

    if (this.shouldResolveImmediately(hl)) {
      return Promise.resolve(_window().grecaptcha);
    }

    return new Promise(function (resolve, reject) {
      var networkTimeout = _window().setTimeout(function () {
        reject(_createError(auth, "network-request-failed"
        /* NETWORK_REQUEST_FAILED */
        ));
      }, NETWORK_TIMEOUT_DELAY.get());

      _window()[_JSLOAD_CALLBACK] = function () {
        _window().clearTimeout(networkTimeout);

        delete _window()[_JSLOAD_CALLBACK];

        var recaptcha = _window().grecaptcha;

        if (!recaptcha) {
          reject(_createError(auth, "internal-error"
          /* INTERNAL_ERROR */
          ));
          return;
        } // Wrap the greptcha render function so that we know if the developer has
        // called it separately


        var render = recaptcha.render;

        recaptcha.render = function (container, params) {
          var widgetId = render(container, params);
          _this30.counter++;
          return widgetId;
        };

        _this30.hostLanguage = hl;
        resolve(recaptcha);
      };

      var url = RECAPTCHA_BASE + "?" + Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["querystring"])({
        onload: _JSLOAD_CALLBACK,
        render: 'explicit',
        hl: hl
      });

      _loadJS(url)["catch"](function () {
        clearTimeout(networkTimeout);
        reject(_createError(auth, "internal-error"
        /* INTERNAL_ERROR */
        ));
      });
    });
  };

  _proto30.clearedOneInstance = function clearedOneInstance() {
    this.counter--;
  };

  _proto30.shouldResolveImmediately = function shouldResolveImmediately(hl) {
    // We can resolve immediately if:
    //   • grecaptcha is already defined AND (
    //     1. the requested language codes are the same OR
    //     2. there exists already a ReCaptcha on the page
    //     3. the library was already loaded by the app
    // In cases (2) and (3), we _can't_ reload as it would break the recaptchas
    // that are already in the page
    return !!_window().grecaptcha && (hl === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
  };

  return ReCaptchaLoaderImpl;
}();

function isHostLanguageValid(hl) {
  return hl.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(hl);
}

var MockReCaptchaLoaderImpl = /*#__PURE__*/function () {
  function MockReCaptchaLoaderImpl() {}

  var _proto31 = MockReCaptchaLoaderImpl.prototype;

  _proto31.load = /*#__PURE__*/function () {
    var _load = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee72(auth) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee72$(_context72) {
        while (1) {
          switch (_context72.prev = _context72.next) {
            case 0:
              return _context72.abrupt("return", new MockReCaptcha(auth));

            case 1:
            case "end":
              return _context72.stop();
          }
        }
      }, _callee72);
    }));

    function load(_x200) {
      return _load.apply(this, arguments);
    }

    return load;
  }();

  _proto31.clearedOneInstance = function clearedOneInstance() {};

  return MockReCaptchaLoaderImpl;
}();
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


var RECAPTCHA_VERIFIER_TYPE = 'recaptcha';
var DEFAULT_PARAMS = {
  theme: 'light',
  type: 'image'
};
/**
 * An {@link https://www.google.com/recaptcha/ | reCAPTCHA}-based application verifier.
 *
 * @public
 */

var RecaptchaVerifier = /*#__PURE__*/function () {
  /**
   *
   * @param containerOrId - The reCAPTCHA container parameter.
   *
   * @remarks
   * This has different meaning depending on whether the reCAPTCHA is hidden or visible. For a
   * visible reCAPTCHA the container must be empty. If a string is used, it has to correspond to
   * an element ID. The corresponding element must also must be in the DOM at the time of
   * initialization.
   *
   * @param parameters - The optional reCAPTCHA parameters.
   *
   * @remarks
   * Check the reCAPTCHA docs for a comprehensive list. All parameters are accepted except for
   * the sitekey. Firebase Auth backend provisions a reCAPTCHA for each project and will
   * configure this upon rendering. For an invisible reCAPTCHA, a size key must have the value
   * 'invisible'.
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   * @remarks
   * If none is provided, the default Firebase {@link Auth} instance is used. A Firebase {@link Auth} instance
   * must be initialized with an API key, otherwise an error will be thrown.
   */
  function RecaptchaVerifier(containerOrId, parameters, authExtern) {
    if (parameters === void 0) {
      parameters = Object.assign({}, DEFAULT_PARAMS);
    }

    this.parameters = parameters;
    /**
     * The application verifier type.
     *
     * @remarks
     * For a reCAPTCHA verifier, this is 'recaptcha'.
     */

    this.type = RECAPTCHA_VERIFIER_TYPE;
    this.destroyed = false;
    this.widgetId = null;
    this.tokenChangeListeners = new Set();
    this.renderPromise = null;
    this.recaptcha = null;
    this.auth = _castAuth(authExtern);
    this.isInvisible = this.parameters.size === 'invisible';

    _assert(typeof document !== 'undefined', this.auth, "operation-not-supported-in-this-environment"
    /* OPERATION_NOT_SUPPORTED */
    );

    var container = typeof containerOrId === 'string' ? document.getElementById(containerOrId) : containerOrId;

    _assert(container, this.auth, "argument-error"
    /* ARGUMENT_ERROR */
    );

    this.container = container;
    this.parameters.callback = this.makeTokenCallback(this.parameters.callback);
    this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new MockReCaptchaLoaderImpl() : new ReCaptchaLoaderImpl();
    this.validateStartingState(); // TODO: Figure out if sdk version is needed
  }
  /**
   * Waits for the user to solve the reCAPTCHA and resolves with the reCAPTCHA token.
   *
   * @returns A Promise for the reCAPTCHA token.
   */


  var _proto32 = RecaptchaVerifier.prototype;

  _proto32.verify =
  /*#__PURE__*/
  function () {
    var _verify = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee73() {
      var _this31 = this;

      var id, recaptcha, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee73$(_context73) {
        while (1) {
          switch (_context73.prev = _context73.next) {
            case 0:
              this.assertNotDestroyed();
              _context73.next = 3;
              return this.render();

            case 3:
              id = _context73.sent;
              recaptcha = this.getAssertedRecaptcha();
              response = recaptcha.getResponse(id);

              if (!response) {
                _context73.next = 8;
                break;
              }

              return _context73.abrupt("return", response);

            case 8:
              return _context73.abrupt("return", new Promise(function (resolve) {
                var tokenChange = function tokenChange(token) {
                  if (!token) {
                    return; // Ignore token expirations.
                  }

                  _this31.tokenChangeListeners["delete"](tokenChange);

                  resolve(token);
                };

                _this31.tokenChangeListeners.add(tokenChange);

                if (_this31.isInvisible) {
                  recaptcha.execute(id);
                }
              }));

            case 9:
            case "end":
              return _context73.stop();
          }
        }
      }, _callee73, this);
    }));

    function verify() {
      return _verify.apply(this, arguments);
    }

    return verify;
  }()
  /**
   * Renders the reCAPTCHA widget on the page.
   *
   * @returns A Promise that resolves with the reCAPTCHA widget ID.
   */
  ;

  _proto32.render = function render() {
    var _this32 = this;

    try {
      this.assertNotDestroyed();
    } catch (e) {
      // This method returns a promise. Since it's not async (we want to return the
      // _same_ promise if rendering is still occurring), the API surface should
      // reject with the error rather than just throw
      return Promise.reject(e);
    }

    if (this.renderPromise) {
      return this.renderPromise;
    }

    this.renderPromise = this.makeRenderPromise()["catch"](function (e) {
      _this32.renderPromise = null;
      throw e;
    });
    return this.renderPromise;
  }
  /** @internal */
  ;

  _proto32._reset = function _reset() {
    this.assertNotDestroyed();

    if (this.widgetId !== null) {
      this.getAssertedRecaptcha().reset(this.widgetId);
    }
  }
  /**
   * Clears the reCAPTCHA widget from the page and destroys the instance.
   */
  ;

  _proto32.clear = function clear() {
    var _this33 = this;

    this.assertNotDestroyed();
    this.destroyed = true;

    this._recaptchaLoader.clearedOneInstance();

    if (!this.isInvisible) {
      this.container.childNodes.forEach(function (node) {
        _this33.container.removeChild(node);
      });
    }
  };

  _proto32.validateStartingState = function validateStartingState() {
    _assert(!this.parameters.sitekey, this.auth, "argument-error"
    /* ARGUMENT_ERROR */
    );

    _assert(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"
    /* ARGUMENT_ERROR */
    );

    _assert(typeof document !== 'undefined', this.auth, "operation-not-supported-in-this-environment"
    /* OPERATION_NOT_SUPPORTED */
    );
  };

  _proto32.makeTokenCallback = function makeTokenCallback(existing) {
    var _this34 = this;

    return function (token) {
      _this34.tokenChangeListeners.forEach(function (listener) {
        return listener(token);
      });

      if (typeof existing === 'function') {
        existing(token);
      } else if (typeof existing === 'string') {
        var globalFunc = _window()[existing];

        if (typeof globalFunc === 'function') {
          globalFunc(token);
        }
      }
    };
  };

  _proto32.assertNotDestroyed = function assertNotDestroyed() {
    _assert(!this.destroyed, this.auth, "internal-error"
    /* INTERNAL_ERROR */
    );
  };

  _proto32.makeRenderPromise = /*#__PURE__*/function () {
    var _makeRenderPromise = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee74() {
      var container, guaranteedEmpty;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee74$(_context74) {
        while (1) {
          switch (_context74.prev = _context74.next) {
            case 0:
              _context74.next = 2;
              return this.init();

            case 2:
              if (!this.widgetId) {
                container = this.container;

                if (!this.isInvisible) {
                  guaranteedEmpty = document.createElement('div');
                  container.appendChild(guaranteedEmpty);
                  container = guaranteedEmpty;
                }

                this.widgetId = this.getAssertedRecaptcha().render(container, this.parameters);
              }

              return _context74.abrupt("return", this.widgetId);

            case 4:
            case "end":
              return _context74.stop();
          }
        }
      }, _callee74, this);
    }));

    function makeRenderPromise() {
      return _makeRenderPromise.apply(this, arguments);
    }

    return makeRenderPromise;
  }();

  _proto32.init = /*#__PURE__*/function () {
    var _init = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee75() {
      var siteKey;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee75$(_context75) {
        while (1) {
          switch (_context75.prev = _context75.next) {
            case 0:
              _assert(_isHttpOrHttps() && !_isWorker(), this.auth, "internal-error"
              /* INTERNAL_ERROR */
              );

              _context75.next = 3;
              return domReady();

            case 3:
              _context75.next = 5;
              return this._recaptchaLoader.load(this.auth, this.auth.languageCode || undefined);

            case 5:
              this.recaptcha = _context75.sent;
              _context75.next = 8;
              return getRecaptchaParams(this.auth);

            case 8:
              siteKey = _context75.sent;

              _assert(siteKey, this.auth, "internal-error"
              /* INTERNAL_ERROR */
              );

              this.parameters.sitekey = siteKey;

            case 11:
            case "end":
              return _context75.stop();
          }
        }
      }, _callee75, this);
    }));

    function init() {
      return _init.apply(this, arguments);
    }

    return init;
  }();

  _proto32.getAssertedRecaptcha = function getAssertedRecaptcha() {
    _assert(this.recaptcha, this.auth, "internal-error"
    /* INTERNAL_ERROR */
    );

    return this.recaptcha;
  };

  return RecaptchaVerifier;
}();

function domReady() {
  var resolver = null;
  return new Promise(function (resolve) {
    if (document.readyState === 'complete') {
      resolve();
      return;
    } // Document not ready, wait for load before resolving.
    // Save resolver, so we can remove listener in case it was externally
    // cancelled.


    resolver = function resolver() {
      return resolve();
    };

    window.addEventListener('load', resolver);
  })["catch"](function (e) {
    if (resolver) {
      window.removeEventListener('load', resolver);
    }

    throw e;
  });
}
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


var ConfirmationResultImpl = /*#__PURE__*/function () {
  function ConfirmationResultImpl(verificationId, onConfirmation) {
    this.verificationId = verificationId;
    this.onConfirmation = onConfirmation;
  }

  var _proto33 = ConfirmationResultImpl.prototype;

  _proto33.confirm = function confirm(verificationCode) {
    var authCredential = PhoneAuthCredential._fromVerification(this.verificationId, verificationCode);

    return this.onConfirmation(authCredential);
  };

  return ConfirmationResultImpl;
}();
/**
 * Asynchronously signs in using a phone number.
 *
 * @remarks
 * This method sends a code via SMS to the given
 * phone number, and returns a {@link ConfirmationResult}. After the user
 * provides the code sent to their phone, call {@link ConfirmationResult.confirm}
 * with the code to sign the user in.
 *
 * For abuse prevention, this method also requires a {@link ApplicationVerifier}.
 * This SDK includes a reCAPTCHA-based implementation, {@link RecaptchaVerifier}.
 * This function can work on other platforms that do not support the
 * {@link RecaptchaVerifier} (like React Native), but you need to use a
 * third-party {@link ApplicationVerifier} implementation.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
 * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
 * // Obtain a verificationCode from the user.
 * const credential = await confirmationResult.confirm(verificationCode);
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param phoneNumber - The user's phone number in E.164 format (e.g. +16505550101).
 * @param appVerifier - The {@link ApplicationVerifier}.
 *
 * @public
 */


function signInWithPhoneNumber(_x201, _x202, _x203) {
  return _signInWithPhoneNumber.apply(this, arguments);
}
/**
 * Links the user account with the given phone number.
 *
 * @param user - The user.
 * @param phoneNumber - The user's phone number in E.164 format (e.g. +16505550101).
 * @param appVerifier - The {@link ApplicationVerifier}.
 *
 * @public
 */


function _signInWithPhoneNumber() {
  _signInWithPhoneNumber = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee148(auth, phoneNumber, appVerifier) {
    var authInternal, verificationId;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee148$(_context148) {
      while (1) {
        switch (_context148.prev = _context148.next) {
          case 0:
            authInternal = _castAuth(auth);
            _context148.next = 3;
            return _verifyPhoneNumber(authInternal, phoneNumber, Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(appVerifier));

          case 3:
            verificationId = _context148.sent;
            return _context148.abrupt("return", new ConfirmationResultImpl(verificationId, function (cred) {
              return signInWithCredential(authInternal, cred);
            }));

          case 5:
          case "end":
            return _context148.stop();
        }
      }
    }, _callee148);
  }));
  return _signInWithPhoneNumber.apply(this, arguments);
}

function linkWithPhoneNumber(_x204, _x205, _x206) {
  return _linkWithPhoneNumber.apply(this, arguments);
}
/**
 * Re-authenticates a user using a fresh phone credential.
 *
 * @remarks Use before operations such as {@link updatePassword} that require tokens from recent sign-in attempts.
 *
 * @param user - The user.
 * @param phoneNumber - The user's phone number in E.164 format (e.g. +16505550101).
 * @param appVerifier - The {@link ApplicationVerifier}.
 *
 * @public
 */


function _linkWithPhoneNumber() {
  _linkWithPhoneNumber = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee149(user, phoneNumber, appVerifier) {
    var userInternal, verificationId;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee149$(_context149) {
      while (1) {
        switch (_context149.prev = _context149.next) {
          case 0:
            userInternal = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user);
            _context149.next = 3;
            return _assertLinkedStatus(false, userInternal, "phone"
            /* PHONE */
            );

          case 3:
            _context149.next = 5;
            return _verifyPhoneNumber(userInternal.auth, phoneNumber, Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(appVerifier));

          case 5:
            verificationId = _context149.sent;
            return _context149.abrupt("return", new ConfirmationResultImpl(verificationId, function (cred) {
              return linkWithCredential(userInternal, cred);
            }));

          case 7:
          case "end":
            return _context149.stop();
        }
      }
    }, _callee149);
  }));
  return _linkWithPhoneNumber.apply(this, arguments);
}

function reauthenticateWithPhoneNumber(_x207, _x208, _x209) {
  return _reauthenticateWithPhoneNumber.apply(this, arguments);
}
/**
 * Returns a verification ID to be used in conjunction with the SMS code that is sent.
 *
 */


function _reauthenticateWithPhoneNumber() {
  _reauthenticateWithPhoneNumber = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee150(user, phoneNumber, appVerifier) {
    var userInternal, verificationId;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee150$(_context150) {
      while (1) {
        switch (_context150.prev = _context150.next) {
          case 0:
            userInternal = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user);
            _context150.next = 3;
            return _verifyPhoneNumber(userInternal.auth, phoneNumber, Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(appVerifier));

          case 3:
            verificationId = _context150.sent;
            return _context150.abrupt("return", new ConfirmationResultImpl(verificationId, function (cred) {
              return reauthenticateWithCredential(userInternal, cred);
            }));

          case 5:
          case "end":
            return _context150.stop();
        }
      }
    }, _callee150);
  }));
  return _reauthenticateWithPhoneNumber.apply(this, arguments);
}

function _verifyPhoneNumber(_x210, _x211, _x212) {
  return _verifyPhoneNumber2.apply(this, arguments);
}
/**
 * Updates the user's phone number.
 *
 * @example
 * ```
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * await updatePhoneNumber(user, phoneCredential);
 * ```
 *
 * @param user - The user.
 * @param credential - A credential authenticating the new phone number.
 *
 * @public
 */


function _verifyPhoneNumber2() {
  _verifyPhoneNumber2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee151(auth, options, verifier) {
    var _a, recaptchaToken, phoneInfoOptions, session, response, mfaEnrollmentId, _response, _yield$sendPhoneVerif, sessionInfo;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee151$(_context151) {
      while (1) {
        switch (_context151.prev = _context151.next) {
          case 0:
            _context151.next = 2;
            return verifier.verify();

          case 2:
            recaptchaToken = _context151.sent;
            _context151.prev = 3;

            _assert(typeof recaptchaToken === 'string', auth, "argument-error"
            /* ARGUMENT_ERROR */
            );

            _assert(verifier.type === RECAPTCHA_VERIFIER_TYPE, auth, "argument-error"
            /* ARGUMENT_ERROR */
            );

            if (typeof options === 'string') {
              phoneInfoOptions = {
                phoneNumber: options
              };
            } else {
              phoneInfoOptions = options;
            }

            if (!('session' in phoneInfoOptions)) {
              _context151.next = 26;
              break;
            }

            session = phoneInfoOptions.session;

            if (!('phoneNumber' in phoneInfoOptions)) {
              _context151.next = 17;
              break;
            }

            _assert(session.type === "enroll"
            /* ENROLL */
            , auth, "internal-error"
            /* INTERNAL_ERROR */
            );

            _context151.next = 13;
            return startEnrollPhoneMfa(auth, {
              idToken: session.credential,
              phoneEnrollmentInfo: {
                phoneNumber: phoneInfoOptions.phoneNumber,
                recaptchaToken: recaptchaToken
              }
            });

          case 13:
            response = _context151.sent;
            return _context151.abrupt("return", response.phoneSessionInfo.sessionInfo);

          case 17:
            _assert(session.type === "signin"
            /* SIGN_IN */
            , auth, "internal-error"
            /* INTERNAL_ERROR */
            );

            mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;

            _assert(mfaEnrollmentId, auth, "missing-multi-factor-info"
            /* MISSING_MFA_INFO */
            );

            _context151.next = 22;
            return startSignInPhoneMfa(auth, {
              mfaPendingCredential: session.credential,
              mfaEnrollmentId: mfaEnrollmentId,
              phoneSignInInfo: {
                recaptchaToken: recaptchaToken
              }
            });

          case 22:
            _response = _context151.sent;
            return _context151.abrupt("return", _response.phoneResponseInfo.sessionInfo);

          case 24:
            _context151.next = 31;
            break;

          case 26:
            _context151.next = 28;
            return sendPhoneVerificationCode(auth, {
              phoneNumber: phoneInfoOptions.phoneNumber,
              recaptchaToken: recaptchaToken
            });

          case 28:
            _yield$sendPhoneVerif = _context151.sent;
            sessionInfo = _yield$sendPhoneVerif.sessionInfo;
            return _context151.abrupt("return", sessionInfo);

          case 31:
            _context151.prev = 31;

            verifier._reset();

            return _context151.finish(31);

          case 34:
          case "end":
            return _context151.stop();
        }
      }
    }, _callee151, null, [[3,, 31, 34]]);
  }));
  return _verifyPhoneNumber2.apply(this, arguments);
}

function updatePhoneNumber(_x213, _x214) {
  return _updatePhoneNumber.apply(this, arguments);
}
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
 * Provider for generating an {@link PhoneAuthCredential}.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * const userCredential = await signInWithCredential(auth, phoneCredential);
 * ```
 *
 * @public
 */


function _updatePhoneNumber() {
  _updatePhoneNumber = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee152(user, credential) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee152$(_context152) {
      while (1) {
        switch (_context152.prev = _context152.next) {
          case 0:
            _context152.next = 2;
            return _link$1(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user), credential);

          case 2:
          case "end":
            return _context152.stop();
        }
      }
    }, _callee152);
  }));
  return _updatePhoneNumber.apply(this, arguments);
}

var PhoneAuthProvider = /*#__PURE__*/function () {
  /**
   * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
   *
   */
  function PhoneAuthProvider(auth) {
    /** Always set to {@link ProviderId}.PHONE. */
    this.providerId = PhoneAuthProvider.PROVIDER_ID;
    this.auth = _castAuth(auth);
  }
  /**
   *
   * Starts a phone number authentication flow by sending a verification code to the given phone
   * number.
   *
   * @example
   * ```javascript
   * const provider = new PhoneAuthProvider(auth);
   * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
   * // Obtain verificationCode from the user.
   * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * An alternative flow is provided using the `signInWithPhoneNumber` method.
   * ```javascript
   * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
   * // Obtain verificationCode from the user.
   * const userCredential = confirmationResult.confirm(verificationCode);
   * ```
   *
   * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
   * E.164 format (e.g. +16505550101).
   * @param applicationVerifier - For abuse prevention, this method also requires a
   * {@link ApplicationVerifier}. This SDK includes a reCAPTCHA-based implementation,
   * {@link RecaptchaVerifier}.
   *
   * @returns A Promise for a verification ID that can be passed to
   * {@link PhoneAuthProvider.credential} to identify this flow..
   */


  var _proto34 = PhoneAuthProvider.prototype;

  _proto34.verifyPhoneNumber = function verifyPhoneNumber(phoneOptions, applicationVerifier) {
    return _verifyPhoneNumber(this.auth, phoneOptions, Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(applicationVerifier));
  }
  /**
   * Creates a phone auth credential, given the verification ID from
   * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
   * mobile device.
   *
   * @example
   * ```javascript
   * const provider = new PhoneAuthProvider(auth);
   * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
   * // Obtain verificationCode from the user.
   * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
   * const userCredential = signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * An alternative flow is provided using the `signInWithPhoneNumber` method.
   * ```javascript
   * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
   * // Obtain verificationCode from the user.
   * const userCredential = await confirmationResult.confirm(verificationCode);
   * ```
   *
   * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
   * @param verificationCode - The verification code sent to the user's mobile device.
   *
   * @returns The auth provider credential.
   */
  ;

  PhoneAuthProvider.credential = function credential(verificationId, verificationCode) {
    return PhoneAuthCredential._fromVerification(verificationId, verificationCode);
  }
  /**
   * Generates an {@link AuthCredential} from a {@link UserCredential}.
   * @param userCredential - The user credential.
   */
  ;

  PhoneAuthProvider.credentialFromResult = function credentialFromResult(userCredential) {
    var credential = userCredential;
    return PhoneAuthProvider.credentialFromTaggedObject(credential);
  }
  /**
   * Returns an {@link AuthCredential} when passed an error.
   *
   * @remarks
   *
   * This method works for errors like
   * `auth/account-exists-with-different-credentials`. This is useful for
   * recovering when attempting to set a user's phone number but the number
   * in question is already tied to another account. For example, the following
   * code tries to update the current user's phone number, and if that
   * fails, links the user with the account associated with that number:
   *
   * ```js
   * const provider = new PhoneAuthProvider(auth);
   * const verificationId = await provider.verifyPhoneNumber(number, verifier);
   * try {
   *   const code = ''; // Prompt the user for the verification code
   *   await updatePhoneNumber(
   *       auth.currentUser,
   *       PhoneAuthProvider.credential(verificationId, code));
   * } catch (e) {
   *   if (e.code === 'auth/account-exists-with-different-credential') {
   *     const cred = PhoneAuthProvider.credentialFromError(e);
   *     await linkWithCredential(auth.currentUser, cred);
   *   }
   * }
   *
   * // At this point, auth.currentUser.phoneNumber === number.
   * ```
   *
   * @param error - The error to generate a credential from.
   */
  ;

  PhoneAuthProvider.credentialFromError = function credentialFromError(error) {
    return PhoneAuthProvider.credentialFromTaggedObject(error.customData || {});
  };

  PhoneAuthProvider.credentialFromTaggedObject = function credentialFromTaggedObject(_ref30) {
    var tokenResponse = _ref30._tokenResponse;

    if (!tokenResponse) {
      return null;
    }

    var phoneNumber = tokenResponse.phoneNumber,
        temporaryProof = tokenResponse.temporaryProof;

    if (phoneNumber && temporaryProof) {
      return PhoneAuthCredential._fromTokenResponse(phoneNumber, temporaryProof);
    }

    return null;
  };

  return PhoneAuthProvider;
}();
/** Always set to {@link ProviderId}.PHONE. */


PhoneAuthProvider.PROVIDER_ID = "phone"
/* PHONE */
;
/** Always set to {@link SignInMethod}.PHONE. */

PhoneAuthProvider.PHONE_SIGN_IN_METHOD = "phone"
/* PHONE */
;
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
 * Chooses a popup/redirect resolver to use. This prefers the override (which
 * is directly passed in), and falls back to the property set on the auth
 * object. If neither are available, this function errors w/ an argument error.
 */

function _withDefaultResolver(auth, resolverOverride) {
  if (resolverOverride) {
    return _getInstance(resolverOverride);
  }

  _assert(auth._popupRedirectResolver, auth, "argument-error"
  /* ARGUMENT_ERROR */
  );

  return auth._popupRedirectResolver;
}
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


var IdpCredential = /*#__PURE__*/function (_AuthCredential5) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(IdpCredential, _AuthCredential5);

  function IdpCredential(params) {
    var _this35;

    _this35 = _AuthCredential5.call(this, "custom"
    /* CUSTOM */
    , "custom"
    /* CUSTOM */
    ) || this;
    _this35.params = params;
    return _this35;
  }

  var _proto35 = IdpCredential.prototype;

  _proto35._getIdTokenResponse = function _getIdTokenResponse(auth) {
    return signInWithIdp(auth, this._buildIdpRequest());
  };

  _proto35._linkToIdToken = function _linkToIdToken(auth, idToken) {
    return signInWithIdp(auth, this._buildIdpRequest(idToken));
  };

  _proto35._getReauthenticationResolver = function _getReauthenticationResolver(auth) {
    return signInWithIdp(auth, this._buildIdpRequest());
  };

  _proto35._buildIdpRequest = function _buildIdpRequest(idToken) {
    var request = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: true,
      returnIdpCredential: true
    };

    if (idToken) {
      request.idToken = idToken;
    }

    return request;
  };

  return IdpCredential;
}(AuthCredential);

function _signIn(params) {
  return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
}

function _reauth(params) {
  var auth = params.auth,
      user = params.user;

  _assert(user, auth, "internal-error"
  /* INTERNAL_ERROR */
  );

  return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
}

function _link(_x215) {
  return _link2.apply(this, arguments);
}
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
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */


function _link2() {
  _link2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee153(params) {
    var auth, user;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee153$(_context153) {
      while (1) {
        switch (_context153.prev = _context153.next) {
          case 0:
            auth = params.auth, user = params.user;

            _assert(user, auth, "internal-error"
            /* INTERNAL_ERROR */
            );

            return _context153.abrupt("return", _link$1(user, new IdpCredential(params), params.bypassAuthState));

          case 3:
          case "end":
            return _context153.stop();
        }
      }
    }, _callee153);
  }));
  return _link2.apply(this, arguments);
}

var AbstractPopupRedirectOperation = /*#__PURE__*/function () {
  function AbstractPopupRedirectOperation(auth, filter, resolver, user, bypassAuthState) {
    if (bypassAuthState === void 0) {
      bypassAuthState = false;
    }

    this.auth = auth;
    this.resolver = resolver;
    this.user = user;
    this.bypassAuthState = bypassAuthState;
    this.pendingPromise = null;
    this.eventManager = null;
    this.filter = Array.isArray(filter) ? filter : [filter];
  }

  var _proto36 = AbstractPopupRedirectOperation.prototype;

  _proto36.execute = function execute() {
    var _this36 = this;

    return new Promise( /*#__PURE__*/function () {
      var _ref31 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee76(resolve, reject) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee76$(_context76) {
          while (1) {
            switch (_context76.prev = _context76.next) {
              case 0:
                _this36.pendingPromise = {
                  resolve: resolve,
                  reject: reject
                };
                _context76.prev = 1;
                _context76.next = 4;
                return _this36.resolver._initialize(_this36.auth);

              case 4:
                _this36.eventManager = _context76.sent;
                _context76.next = 7;
                return _this36.onExecution();

              case 7:
                _this36.eventManager.registerConsumer(_this36);

                _context76.next = 13;
                break;

              case 10:
                _context76.prev = 10;
                _context76.t0 = _context76["catch"](1);

                _this36.reject(_context76.t0);

              case 13:
              case "end":
                return _context76.stop();
            }
          }
        }, _callee76, null, [[1, 10]]);
      }));

      return function (_x216, _x217) {
        return _ref31.apply(this, arguments);
      };
    }());
  };

  _proto36.onAuthEvent = /*#__PURE__*/function () {
    var _onAuthEvent = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee77(event) {
      var urlResponse, sessionId, postBody, tenantId, error, type, params;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee77$(_context77) {
        while (1) {
          switch (_context77.prev = _context77.next) {
            case 0:
              urlResponse = event.urlResponse, sessionId = event.sessionId, postBody = event.postBody, tenantId = event.tenantId, error = event.error, type = event.type;

              if (!error) {
                _context77.next = 4;
                break;
              }

              this.reject(error);
              return _context77.abrupt("return");

            case 4:
              params = {
                auth: this.auth,
                requestUri: urlResponse,
                sessionId: sessionId,
                tenantId: tenantId || undefined,
                postBody: postBody || undefined,
                user: this.user,
                bypassAuthState: this.bypassAuthState
              };
              _context77.prev = 5;
              _context77.t0 = this;
              _context77.next = 9;
              return this.getIdpTask(type)(params);

            case 9:
              _context77.t1 = _context77.sent;

              _context77.t0.resolve.call(_context77.t0, _context77.t1);

              _context77.next = 16;
              break;

            case 13:
              _context77.prev = 13;
              _context77.t2 = _context77["catch"](5);
              this.reject(_context77.t2);

            case 16:
            case "end":
              return _context77.stop();
          }
        }
      }, _callee77, this, [[5, 13]]);
    }));

    function onAuthEvent(_x218) {
      return _onAuthEvent.apply(this, arguments);
    }

    return onAuthEvent;
  }();

  _proto36.onError = function onError(error) {
    this.reject(error);
  };

  _proto36.getIdpTask = function getIdpTask(type) {
    switch (type) {
      case "signInViaPopup"
      /* SIGN_IN_VIA_POPUP */
      :
      case "signInViaRedirect"
      /* SIGN_IN_VIA_REDIRECT */
      :
        return _signIn;

      case "linkViaPopup"
      /* LINK_VIA_POPUP */
      :
      case "linkViaRedirect"
      /* LINK_VIA_REDIRECT */
      :
        return _link;

      case "reauthViaPopup"
      /* REAUTH_VIA_POPUP */
      :
      case "reauthViaRedirect"
      /* REAUTH_VIA_REDIRECT */
      :
        return _reauth;

      default:
        _fail(this.auth, "internal-error"
        /* INTERNAL_ERROR */
        );

    }
  };

  _proto36.resolve = function resolve(cred) {
    debugAssert(this.pendingPromise, 'Pending promise was never set');
    this.pendingPromise.resolve(cred);
    this.unregisterAndCleanUp();
  };

  _proto36.reject = function reject(error) {
    debugAssert(this.pendingPromise, 'Pending promise was never set');
    this.pendingPromise.reject(error);
    this.unregisterAndCleanUp();
  };

  _proto36.unregisterAndCleanUp = function unregisterAndCleanUp() {
    if (this.eventManager) {
      this.eventManager.unregisterConsumer(this);
    }

    this.pendingPromise = null;
    this.cleanUp();
  };

  return AbstractPopupRedirectOperation;
}();
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


var _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2000, 10000);
/**
 * Authenticates a Firebase client using a popup-based OAuth authentication flow.
 *
 * @remarks
 * If succeeds, returns the signed in user along with the provider's credential. If sign in was
 * unsuccessful, returns an error object containing additional information about the error.
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = provider.credentialFromResult(auth, result);
 * const token = credential.accessToken;
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 *
 * @public
 */


function signInWithPopup(_x219, _x220, _x221) {
  return _signInWithPopup.apply(this, arguments);
}
/**
 * Reauthenticates the current user with the specified {@link OAuthProvider} using a pop-up based
 * OAuth flow.
 *
 * @remarks
 * If the reauthentication is successful, the returned result will contain the user and the
 * provider's credential.
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 * // Reauthenticate using a popup.
 * await reauthenticateWithPopup(result.user, provider);
 * ```
 *
 * @param user - The user.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */


function _signInWithPopup() {
  _signInWithPopup = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee154(auth, provider, resolver) {
    var authInternal, resolverInternal, action;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee154$(_context154) {
      while (1) {
        switch (_context154.prev = _context154.next) {
          case 0:
            authInternal = _castAuth(auth);

            _assertInstanceOf(auth, provider, FederatedAuthProvider);

            resolverInternal = _withDefaultResolver(authInternal, resolver);
            action = new PopupOperation(authInternal, "signInViaPopup"
            /* SIGN_IN_VIA_POPUP */
            , provider, resolverInternal);
            return _context154.abrupt("return", action.executeNotNull());

          case 5:
          case "end":
            return _context154.stop();
        }
      }
    }, _callee154);
  }));
  return _signInWithPopup.apply(this, arguments);
}

function reauthenticateWithPopup(_x222, _x223, _x224) {
  return _reauthenticateWithPopup.apply(this, arguments);
}
/**
 * Links the authenticated provider to the user account using a pop-up based OAuth flow.
 *
 * @remarks
 * If the linking is successful, the returned result will contain the user and the provider's credential.
 *
 *
 * @example
 * ```javascript
 * // Sign in using some other provider.
 * const result = await signInWithEmailAndPassword(auth, email, password);
 * // Link using a popup.
 * const provider = new FacebookAuthProvider();
 * await linkWithPopup(result.user, provider);
 * ```
 *
 * @param user - The user.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */


function _reauthenticateWithPopup() {
  _reauthenticateWithPopup = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee155(user, provider, resolver) {
    var userInternal, resolverInternal, action;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee155$(_context155) {
      while (1) {
        switch (_context155.prev = _context155.next) {
          case 0:
            userInternal = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user);

            _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);

            resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
            action = new PopupOperation(userInternal.auth, "reauthViaPopup"
            /* REAUTH_VIA_POPUP */
            , provider, resolverInternal, userInternal);
            return _context155.abrupt("return", action.executeNotNull());

          case 5:
          case "end":
            return _context155.stop();
        }
      }
    }, _callee155);
  }));
  return _reauthenticateWithPopup.apply(this, arguments);
}

function linkWithPopup(_x225, _x226, _x227) {
  return _linkWithPopup.apply(this, arguments);
}
/**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 *
 */


function _linkWithPopup() {
  _linkWithPopup = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee156(user, provider, resolver) {
    var userInternal, resolverInternal, action;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee156$(_context156) {
      while (1) {
        switch (_context156.prev = _context156.next) {
          case 0:
            userInternal = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user);

            _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);

            resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
            action = new PopupOperation(userInternal.auth, "linkViaPopup"
            /* LINK_VIA_POPUP */
            , provider, resolverInternal, userInternal);
            return _context156.abrupt("return", action.executeNotNull());

          case 5:
          case "end":
            return _context156.stop();
        }
      }
    }, _callee156);
  }));
  return _linkWithPopup.apply(this, arguments);
}

var PopupOperation = /*#__PURE__*/function (_AbstractPopupRedirec) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(PopupOperation, _AbstractPopupRedirec);

  function PopupOperation(auth, filter, provider, resolver, user) {
    var _this37;

    _this37 = _AbstractPopupRedirec.call(this, auth, filter, resolver, user) || this;
    _this37.provider = provider;
    _this37.authWindow = null;
    _this37.pollId = null;

    if (PopupOperation.currentPopupAction) {
      PopupOperation.currentPopupAction.cancel();
    }

    PopupOperation.currentPopupAction = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this37);
    return _this37;
  }

  var _proto37 = PopupOperation.prototype;

  _proto37.executeNotNull = /*#__PURE__*/function () {
    var _executeNotNull = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee78() {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee78$(_context78) {
        while (1) {
          switch (_context78.prev = _context78.next) {
            case 0:
              _context78.next = 2;
              return this.execute();

            case 2:
              result = _context78.sent;

              _assert(result, this.auth, "internal-error"
              /* INTERNAL_ERROR */
              );

              return _context78.abrupt("return", result);

            case 5:
            case "end":
              return _context78.stop();
          }
        }
      }, _callee78, this);
    }));

    function executeNotNull() {
      return _executeNotNull.apply(this, arguments);
    }

    return executeNotNull;
  }();

  _proto37.onExecution = /*#__PURE__*/function () {
    var _onExecution = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee79() {
      var _this38 = this;

      var eventId;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee79$(_context79) {
        while (1) {
          switch (_context79.prev = _context79.next) {
            case 0:
              debugAssert(this.filter.length === 1, 'Popup operations only handle one event');
              eventId = _generateEventId();
              _context79.next = 4;
              return this.resolver._openPopup(this.auth, this.provider, this.filter[0], // There's always one, see constructor
              eventId);

            case 4:
              this.authWindow = _context79.sent;
              this.authWindow.associatedEvent = eventId; // Check for web storage support and origin validation _after_ the popup is
              // loaded. These operations are slow (~1 second or so) Rather than
              // waiting on them before opening the window, optimistically open the popup
              // and check for storage support at the same time. If storage support is
              // not available, this will cause the whole thing to reject properly. It
              // will also close the popup, but since the promise has already rejected,
              // the popup closed by user poll will reject into the void.

              this.resolver._originValidation(this.auth)["catch"](function (e) {
                _this38.reject(e);
              });

              this.resolver._isIframeWebStorageSupported(this.auth, function (isSupported) {
                if (!isSupported) {
                  _this38.reject(_createError(_this38.auth, "web-storage-unsupported"
                  /* WEB_STORAGE_UNSUPPORTED */
                  ));
                }
              }); // Handle user closure. Notice this does *not* use await


              this.pollUserCancellation();

            case 9:
            case "end":
              return _context79.stop();
          }
        }
      }, _callee79, this);
    }));

    function onExecution() {
      return _onExecution.apply(this, arguments);
    }

    return onExecution;
  }();

  _proto37.cancel = function cancel() {
    this.reject(_createError(this.auth, "cancelled-popup-request"
    /* EXPIRED_POPUP_REQUEST */
    ));
  };

  _proto37.cleanUp = function cleanUp() {
    if (this.authWindow) {
      this.authWindow.close();
    }

    if (this.pollId) {
      window.clearTimeout(this.pollId);
    }

    this.authWindow = null;
    this.pollId = null;
    PopupOperation.currentPopupAction = null;
  };

  _proto37.pollUserCancellation = function pollUserCancellation() {
    var _this39 = this;

    var poll = function poll() {
      var _a, _b;

      if ((_b = (_a = _this39.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
        // Make sure that there is sufficient time for whatever action to
        // complete. The window could have closed but the sign in network
        // call could still be in flight.
        _this39.pollId = window.setTimeout(function () {
          _this39.pollId = null;

          _this39.reject(_createError(_this39.auth, "popup-closed-by-user"
          /* POPUP_CLOSED_BY_USER */
          ));
        }, 2000
        /* AUTH_EVENT */
        );
        return;
      }

      _this39.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
    };

    poll();
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PopupOperation, [{
    key: "eventId",
    get: function get() {
      var _a;

      return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
    }
  }]);

  return PopupOperation;
}(AbstractPopupRedirectOperation); // Only one popup is ever shown at once. The lifecycle of the current popup
// can be managed / cancelled by the constructor.


PopupOperation.currentPopupAction = null;
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

var PENDING_REDIRECT_KEY = 'pendingRedirect'; // We only get one redirect outcome for any one auth, so just store it
// in here.

var redirectOutcomeMap = new Map();

var RedirectAction = /*#__PURE__*/function (_AbstractPopupRedirec2) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(RedirectAction, _AbstractPopupRedirec2);

  function RedirectAction(auth, resolver, bypassAuthState) {
    var _this40;

    if (bypassAuthState === void 0) {
      bypassAuthState = false;
    }

    _this40 = _AbstractPopupRedirec2.call(this, auth, ["signInViaRedirect"
    /* SIGN_IN_VIA_REDIRECT */
    , "linkViaRedirect"
    /* LINK_VIA_REDIRECT */
    , "reauthViaRedirect"
    /* REAUTH_VIA_REDIRECT */
    , "unknown"
    /* UNKNOWN */
    ], resolver, undefined, bypassAuthState) || this;
    _this40.eventId = null;
    return _this40;
  }
  /**
   * Override the execute function; if we already have a redirect result, then
   * just return it.
   */


  var _proto38 = RedirectAction.prototype;

  _proto38.execute =
  /*#__PURE__*/
  function () {
    var _execute2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee80() {
      var readyOutcome, hasPendingRedirect, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee80$(_context80) {
        while (1) {
          switch (_context80.prev = _context80.next) {
            case 0:
              readyOutcome = redirectOutcomeMap.get(this.auth._key());

              if (readyOutcome) {
                _context80.next = 21;
                break;
              }

              _context80.prev = 2;
              _context80.next = 5;
              return _getAndClearPendingRedirectStatus(this.resolver, this.auth);

            case 5:
              hasPendingRedirect = _context80.sent;

              if (!hasPendingRedirect) {
                _context80.next = 12;
                break;
              }

              _context80.next = 9;
              return _AbstractPopupRedirec2.prototype.execute.call(this);

            case 9:
              _context80.t0 = _context80.sent;
              _context80.next = 13;
              break;

            case 12:
              _context80.t0 = null;

            case 13:
              result = _context80.t0;

              readyOutcome = function readyOutcome() {
                return Promise.resolve(result);
              };

              _context80.next = 20;
              break;

            case 17:
              _context80.prev = 17;
              _context80.t1 = _context80["catch"](2);

              readyOutcome = function readyOutcome() {
                return Promise.reject(_context80.t1);
              };

            case 20:
              redirectOutcomeMap.set(this.auth._key(), readyOutcome);

            case 21:
              // If we're not bypassing auth state, the ready outcome should be set to
              // null.
              if (!this.bypassAuthState) {
                redirectOutcomeMap.set(this.auth._key(), function () {
                  return Promise.resolve(null);
                });
              }

              return _context80.abrupt("return", readyOutcome());

            case 23:
            case "end":
              return _context80.stop();
          }
        }
      }, _callee80, this, [[2, 17]]);
    }));

    function execute() {
      return _execute2.apply(this, arguments);
    }

    return execute;
  }();

  _proto38.onAuthEvent = /*#__PURE__*/function () {
    var _onAuthEvent2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee81(event) {
      var user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee81$(_context81) {
        while (1) {
          switch (_context81.prev = _context81.next) {
            case 0:
              if (!(event.type === "signInViaRedirect"
              /* SIGN_IN_VIA_REDIRECT */
              )) {
                _context81.next = 4;
                break;
              }

              return _context81.abrupt("return", _AbstractPopupRedirec2.prototype.onAuthEvent.call(this, event));

            case 4:
              if (!(event.type === "unknown"
              /* UNKNOWN */
              )) {
                _context81.next = 7;
                break;
              }

              // This is a sentinel value indicating there's no pending redirect
              this.resolve(null);
              return _context81.abrupt("return");

            case 7:
              if (!event.eventId) {
                _context81.next = 17;
                break;
              }

              _context81.next = 10;
              return this.auth._redirectUserForId(event.eventId);

            case 10:
              user = _context81.sent;

              if (!user) {
                _context81.next = 16;
                break;
              }

              this.user = user;
              return _context81.abrupt("return", _AbstractPopupRedirec2.prototype.onAuthEvent.call(this, event));

            case 16:
              this.resolve(null);

            case 17:
            case "end":
              return _context81.stop();
          }
        }
      }, _callee81, this);
    }));

    function onAuthEvent(_x228) {
      return _onAuthEvent2.apply(this, arguments);
    }

    return onAuthEvent;
  }();

  _proto38.onExecution = /*#__PURE__*/function () {
    var _onExecution2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee82() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee82$(_context82) {
        while (1) {
          switch (_context82.prev = _context82.next) {
            case 0:
            case "end":
              return _context82.stop();
          }
        }
      }, _callee82);
    }));

    function onExecution() {
      return _onExecution2.apply(this, arguments);
    }

    return onExecution;
  }();

  _proto38.cleanUp = function cleanUp() {};

  return RedirectAction;
}(AbstractPopupRedirectOperation);

function _getAndClearPendingRedirectStatus(_x229, _x230) {
  return _getAndClearPendingRedirectStatus2.apply(this, arguments);
}

function _getAndClearPendingRedirectStatus2() {
  _getAndClearPendingRedirectStatus2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee157(resolver, auth) {
    var key, persistence, hasPendingRedirect;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee157$(_context157) {
      while (1) {
        switch (_context157.prev = _context157.next) {
          case 0:
            key = pendingRedirectKey(auth);
            persistence = resolverPersistence(resolver);
            _context157.next = 4;
            return persistence._isAvailable();

          case 4:
            if (_context157.sent) {
              _context157.next = 6;
              break;
            }

            return _context157.abrupt("return", false);

          case 6:
            _context157.next = 8;
            return persistence._get(key);

          case 8:
            _context157.t0 = _context157.sent;
            hasPendingRedirect = _context157.t0 === 'true';
            _context157.next = 12;
            return persistence._remove(key);

          case 12:
            return _context157.abrupt("return", hasPendingRedirect);

          case 13:
          case "end":
            return _context157.stop();
        }
      }
    }, _callee157);
  }));
  return _getAndClearPendingRedirectStatus2.apply(this, arguments);
}

function _setPendingRedirectStatus(_x231, _x232) {
  return _setPendingRedirectStatus2.apply(this, arguments);
}

function _setPendingRedirectStatus2() {
  _setPendingRedirectStatus2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee158(resolver, auth) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee158$(_context158) {
      while (1) {
        switch (_context158.prev = _context158.next) {
          case 0:
            return _context158.abrupt("return", resolverPersistence(resolver)._set(pendingRedirectKey(auth), 'true'));

          case 1:
          case "end":
            return _context158.stop();
        }
      }
    }, _callee158);
  }));
  return _setPendingRedirectStatus2.apply(this, arguments);
}

function _clearRedirectOutcomes() {
  redirectOutcomeMap.clear();
}

function resolverPersistence(resolver) {
  return _getInstance(resolver._redirectPersistence);
}

function pendingRedirectKey(auth) {
  return _persistenceKeyName(PENDING_REDIRECT_KEY, auth.config.apiKey, auth.name);
}
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
 * Authenticates a Firebase client using a full-page redirect flow.
 *
 * @remarks
 * To handle the results and errors for this operation, refer to {@link getRedirectResult}.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // You can add additional scopes to the provider:
 * provider.addScope('user_birthday');
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = provider.credentialFromResult(auth, result);
 *   const token = credential.accessToken;
 * }
 * // As this API can be used for sign-in, linking and reauthentication,
 * // check the operationType to determine what triggered this redirect
 * // operation.
 * const operationType = result.operationType;
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */


function signInWithRedirect(auth, provider, resolver) {
  return _signInWithRedirect(auth, provider, resolver);
}

function _signInWithRedirect(_x233, _x234, _x235) {
  return _signInWithRedirect2.apply(this, arguments);
}
/**
 * Reauthenticates the current user with the specified {@link OAuthProvider} using a full-page redirect flow.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * const result = await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * // Link using a redirect.
 * await linkWithRedirect(result.user, provider);
 * // This will again trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * ```
 *
 * @param user - The user.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */


function _signInWithRedirect2() {
  _signInWithRedirect2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee159(auth, provider, resolver) {
    var authInternal, resolverInternal;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee159$(_context159) {
      while (1) {
        switch (_context159.prev = _context159.next) {
          case 0:
            authInternal = _castAuth(auth);

            _assertInstanceOf(auth, provider, FederatedAuthProvider);

            resolverInternal = _withDefaultResolver(authInternal, resolver);
            _context159.next = 5;
            return _setPendingRedirectStatus(resolverInternal, authInternal);

          case 5:
            return _context159.abrupt("return", resolverInternal._openRedirect(authInternal, provider, "signInViaRedirect"
            /* SIGN_IN_VIA_REDIRECT */
            ));

          case 6:
          case "end":
            return _context159.stop();
        }
      }
    }, _callee159);
  }));
  return _signInWithRedirect2.apply(this, arguments);
}

function reauthenticateWithRedirect(user, provider, resolver) {
  return _reauthenticateWithRedirect(user, provider, resolver);
}

function _reauthenticateWithRedirect(_x236, _x237, _x238) {
  return _reauthenticateWithRedirect2.apply(this, arguments);
}
/**
 * Links the {@link OAuthProvider} to the user account using a full-page redirect flow.
 *
 * @example
 * ```javascript
 * // Sign in using some other provider.
 * const result = await signInWithEmailAndPassword(auth, email, password);
 * // Link using a redirect.
 * const provider = new FacebookAuthProvider();
 * await linkWithRedirect(result.user, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * ```
 *
 * @param user - The user.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 *
 * @public
 */


function _reauthenticateWithRedirect2() {
  _reauthenticateWithRedirect2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee160(user, provider, resolver) {
    var userInternal, resolverInternal, eventId;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee160$(_context160) {
      while (1) {
        switch (_context160.prev = _context160.next) {
          case 0:
            userInternal = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user);

            _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider); // Allow the resolver to error before persisting the redirect user


            resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
            _context160.next = 5;
            return _setPendingRedirectStatus(resolverInternal, userInternal.auth);

          case 5:
            _context160.next = 7;
            return prepareUserForRedirect(userInternal);

          case 7:
            eventId = _context160.sent;
            return _context160.abrupt("return", resolverInternal._openRedirect(userInternal.auth, provider, "reauthViaRedirect"
            /* REAUTH_VIA_REDIRECT */
            , eventId));

          case 9:
          case "end":
            return _context160.stop();
        }
      }
    }, _callee160);
  }));
  return _reauthenticateWithRedirect2.apply(this, arguments);
}

function linkWithRedirect(user, provider, resolver) {
  return _linkWithRedirect(user, provider, resolver);
}

function _linkWithRedirect(_x239, _x240, _x241) {
  return _linkWithRedirect2.apply(this, arguments);
}
/**
 * Returns a {@link UserCredential} from the redirect-based sign-in flow.
 *
 * @remarks
 * If sign-in succeeded, returns the signed in user. If sign-in was unsuccessful, fails with an
 * error. If no redirect operation was called, returns a {@link UserCredential}
 * with a null `user`.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // You can add additional scopes to the provider:
 * provider.addScope('user_birthday');
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = provider.credentialFromResult(auth, result);
 *   const token = credential.accessToken;
 * }
 * // As this API can be used for sign-in, linking and reauthentication,
 * // check the operationType to determine what triggered this redirect
 * // operation.
 * const operationType = result.operationType;
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */


function _linkWithRedirect2() {
  _linkWithRedirect2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee161(user, provider, resolver) {
    var userInternal, resolverInternal, eventId;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee161$(_context161) {
      while (1) {
        switch (_context161.prev = _context161.next) {
          case 0:
            userInternal = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getModularInstance"])(user);

            _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider); // Allow the resolver to error before persisting the redirect user


            resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
            _context161.next = 5;
            return _assertLinkedStatus(false, userInternal, provider.providerId);

          case 5:
            _context161.next = 7;
            return _setPendingRedirectStatus(resolverInternal, userInternal.auth);

          case 7:
            _context161.next = 9;
            return prepareUserForRedirect(userInternal);

          case 9:
            eventId = _context161.sent;
            return _context161.abrupt("return", resolverInternal._openRedirect(userInternal.auth, provider, "linkViaRedirect"
            /* LINK_VIA_REDIRECT */
            , eventId));

          case 11:
          case "end":
            return _context161.stop();
        }
      }
    }, _callee161);
  }));
  return _linkWithRedirect2.apply(this, arguments);
}

function getRedirectResult(_x242, _x243) {
  return _getRedirectResult2.apply(this, arguments);
}

function _getRedirectResult2() {
  _getRedirectResult2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee162(auth, resolver) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee162$(_context162) {
      while (1) {
        switch (_context162.prev = _context162.next) {
          case 0:
            _context162.next = 2;
            return _castAuth(auth)._initializationPromise;

          case 2:
            return _context162.abrupt("return", _getRedirectResult(auth, resolver, false));

          case 3:
          case "end":
            return _context162.stop();
        }
      }
    }, _callee162);
  }));
  return _getRedirectResult2.apply(this, arguments);
}

function _getRedirectResult(_x244, _x245, _x246) {
  return _getRedirectResult3.apply(this, arguments);
}

function _getRedirectResult3() {
  _getRedirectResult3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee163(auth, resolverExtern, bypassAuthState) {
    var authInternal, resolver, action, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee163$(_context163) {
      while (1) {
        switch (_context163.prev = _context163.next) {
          case 0:
            if (bypassAuthState === void 0) {
              bypassAuthState = false;
            }

            authInternal = _castAuth(auth);
            resolver = _withDefaultResolver(authInternal, resolverExtern);
            action = new RedirectAction(authInternal, resolver, bypassAuthState);
            _context163.next = 6;
            return action.execute();

          case 6:
            result = _context163.sent;

            if (!(result && !bypassAuthState)) {
              _context163.next = 13;
              break;
            }

            delete result.user._redirectEventId;
            _context163.next = 11;
            return authInternal._persistUserIfCurrent(result.user);

          case 11:
            _context163.next = 13;
            return authInternal._setRedirectUser(null, resolverExtern);

          case 13:
            return _context163.abrupt("return", result);

          case 14:
          case "end":
            return _context163.stop();
        }
      }
    }, _callee163);
  }));
  return _getRedirectResult3.apply(this, arguments);
}

function prepareUserForRedirect(_x247) {
  return _prepareUserForRedirect.apply(this, arguments);
}
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
// The amount of time to store the UIDs of seen events; this is
// set to 10 min by default


function _prepareUserForRedirect() {
  _prepareUserForRedirect = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee164(user) {
    var eventId;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee164$(_context164) {
      while (1) {
        switch (_context164.prev = _context164.next) {
          case 0:
            eventId = _generateEventId(user.uid + ":::");
            user._redirectEventId = eventId;
            _context164.next = 4;
            return user.auth._setRedirectUser(user);

          case 4:
            _context164.next = 6;
            return user.auth._persistUserIfCurrent(user);

          case 6:
            return _context164.abrupt("return", eventId);

          case 7:
          case "end":
            return _context164.stop();
        }
      }
    }, _callee164);
  }));
  return _prepareUserForRedirect.apply(this, arguments);
}

var EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1000;

var AuthEventManager = /*#__PURE__*/function () {
  function AuthEventManager(auth) {
    this.auth = auth;
    this.cachedEventUids = new Set();
    this.consumers = new Set();
    this.queuedRedirectEvent = null;
    this.hasHandledPotentialRedirect = false;
    this.lastProcessedEventTime = Date.now();
  }

  var _proto39 = AuthEventManager.prototype;

  _proto39.registerConsumer = function registerConsumer(authEventConsumer) {
    this.consumers.add(authEventConsumer);

    if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
      this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
      this.saveEventToCache(this.queuedRedirectEvent);
      this.queuedRedirectEvent = null;
    }
  };

  _proto39.unregisterConsumer = function unregisterConsumer(authEventConsumer) {
    this.consumers["delete"](authEventConsumer);
  };

  _proto39.onEvent = function onEvent(event) {
    var _this41 = this;

    // Check if the event has already been handled
    if (this.hasEventBeenHandled(event)) {
      return false;
    }

    var handled = false;
    this.consumers.forEach(function (consumer) {
      if (_this41.isEventForConsumer(event, consumer)) {
        handled = true;

        _this41.sendToConsumer(event, consumer);

        _this41.saveEventToCache(event);
      }
    });

    if (this.hasHandledPotentialRedirect || !isRedirectEvent(event)) {
      // If we've already seen a redirect before, or this is a popup event,
      // bail now
      return handled;
    }

    this.hasHandledPotentialRedirect = true; // If the redirect wasn't handled, hang on to it

    if (!handled) {
      this.queuedRedirectEvent = event;
      handled = true;
    }

    return handled;
  };

  _proto39.sendToConsumer = function sendToConsumer(event, consumer) {
    var _a;

    if (event.error && !isNullRedirectEvent(event)) {
      var code = ((_a = event.error.code) === null || _a === void 0 ? void 0 : _a.split('auth/')[1]) || "internal-error"
      /* INTERNAL_ERROR */
      ;
      consumer.onError(_createError(this.auth, code));
    } else {
      consumer.onAuthEvent(event);
    }
  };

  _proto39.isEventForConsumer = function isEventForConsumer(event, consumer) {
    var eventIdMatches = consumer.eventId === null || !!event.eventId && event.eventId === consumer.eventId;
    return consumer.filter.includes(event.type) && eventIdMatches;
  };

  _proto39.hasEventBeenHandled = function hasEventBeenHandled(event) {
    if (Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS) {
      this.cachedEventUids.clear();
    }

    return this.cachedEventUids.has(eventUid(event));
  };

  _proto39.saveEventToCache = function saveEventToCache(event) {
    this.cachedEventUids.add(eventUid(event));
    this.lastProcessedEventTime = Date.now();
  };

  return AuthEventManager;
}();

function eventUid(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId].filter(function (v) {
    return v;
  }).join('-');
}

function isNullRedirectEvent(_ref32) {
  var type = _ref32.type,
      error = _ref32.error;
  return type === "unknown"
  /* UNKNOWN */
  && (error === null || error === void 0 ? void 0 : error.code) === "auth/" + "no-auth-event"
  /* NO_AUTH_EVENT */
  ;
}

function isRedirectEvent(event) {
  switch (event.type) {
    case "signInViaRedirect"
    /* SIGN_IN_VIA_REDIRECT */
    :
    case "linkViaRedirect"
    /* LINK_VIA_REDIRECT */
    :
    case "reauthViaRedirect"
    /* REAUTH_VIA_REDIRECT */
    :
      return true;

    case "unknown"
    /* UNKNOWN */
    :
      return isNullRedirectEvent(event);

    default:
      return false;
  }
}
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


function _getProjectConfig(_x248, _x249) {
  return _getProjectConfig2.apply(this, arguments);
}
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


function _getProjectConfig2() {
  _getProjectConfig2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee165(auth, request) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee165$(_context165) {
      while (1) {
        switch (_context165.prev = _context165.next) {
          case 0:
            if (request === void 0) {
              request = {};
            }

            return _context165.abrupt("return", _performApiRequest(auth, "GET"
            /* GET */
            , "/v1/projects"
            /* GET_PROJECT_CONFIG */
            , request));

          case 2:
          case "end":
            return _context165.stop();
        }
      }
    }, _callee165);
  }));
  return _getProjectConfig2.apply(this, arguments);
}

var IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
var HTTP_REGEX = /^https?/;

function _validateOrigin(_x250) {
  return _validateOrigin2.apply(this, arguments);
}

function _validateOrigin2() {
  _validateOrigin2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee166(auth) {
    var _yield$_getProjectCon, authorizedDomains, _iterator3, _step3, domain;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee166$(_context166) {
      while (1) {
        switch (_context166.prev = _context166.next) {
          case 0:
            if (!auth.config.emulator) {
              _context166.next = 2;
              break;
            }

            return _context166.abrupt("return");

          case 2:
            _context166.next = 4;
            return _getProjectConfig(auth);

          case 4:
            _yield$_getProjectCon = _context166.sent;
            authorizedDomains = _yield$_getProjectCon.authorizedDomains;
            _iterator3 = _createForOfIteratorHelperLoose(authorizedDomains);

          case 7:
            if ((_step3 = _iterator3()).done) {
              _context166.next = 18;
              break;
            }

            domain = _step3.value;
            _context166.prev = 9;

            if (!matchDomain(domain)) {
              _context166.next = 12;
              break;
            }

            return _context166.abrupt("return");

          case 12:
            _context166.next = 16;
            break;

          case 14:
            _context166.prev = 14;
            _context166.t0 = _context166["catch"](9);

          case 16:
            _context166.next = 7;
            break;

          case 18:
            // In the old SDK, this error also provides helpful messages.
            _fail(auth, "unauthorized-domain"
            /* INVALID_ORIGIN */
            );

          case 19:
          case "end":
            return _context166.stop();
        }
      }
    }, _callee166, null, [[9, 14]]);
  }));
  return _validateOrigin2.apply(this, arguments);
}

function matchDomain(expected) {
  var currentUrl = _getCurrentUrl();

  var _URL = new URL(currentUrl),
      protocol = _URL.protocol,
      hostname = _URL.hostname;

  if (expected.startsWith('chrome-extension://')) {
    var ceUrl = new URL(expected);

    if (ceUrl.hostname === '' && hostname === '') {
      // For some reason we're not parsing chrome URLs properly
      return protocol === 'chrome-extension:' && expected.replace('chrome-extension://', '') === currentUrl.replace('chrome-extension://', '');
    }

    return protocol === 'chrome-extension:' && ceUrl.hostname === hostname;
  }

  if (!HTTP_REGEX.test(protocol)) {
    return false;
  }

  if (IP_ADDRESS_REGEX.test(expected)) {
    // The domain has to be exactly equal to the pattern, as an IP domain will
    // only contain the IP, no extra character.
    return hostname === expected;
  } // Dots in pattern should be escaped.


  var escapedDomainPattern = expected.replace(/\./g, '\\.'); // Non ip address domains.
  // domain.com = *.domain.com OR domain.com

  var re = new RegExp('^(.+\\.' + escapedDomainPattern + '|' + escapedDomainPattern + ')$', 'i');
  return re.test(hostname);
}
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


var NETWORK_TIMEOUT = new Delay(30000, 60000);
/**
 * Reset unlaoded GApi modules. If gapi.load fails due to a network error,
 * it will stop working after a retrial. This is a hack to fix this issue.
 */

function resetUnloadedGapiModules() {
  // Clear last failed gapi.load state to force next gapi.load to first
  // load the failed gapi.iframes module.
  // Get gapix.beacon context.
  var beacon = _window().___jsl; // Get current hint.


  if (beacon === null || beacon === void 0 ? void 0 : beacon.H) {
    // Get gapi hint.
    for (var _i5 = 0, _Object$keys3 = Object.keys(beacon.H); _i5 < _Object$keys3.length; _i5++) {
      var hint = _Object$keys3[_i5];
      // Requested modules.
      beacon.H[hint].r = beacon.H[hint].r || []; // Loaded modules.

      beacon.H[hint].L = beacon.H[hint].L || []; // Set requested modules to a copy of the loaded modules.

      beacon.H[hint].r = [].concat(beacon.H[hint].L); // Clear pending callbacks.

      if (beacon.CP) {
        for (var i = 0; i < beacon.CP.length; i++) {
          // Remove all failed pending callbacks.
          beacon.CP[i] = null;
        }
      }
    }
  }
}

function loadGapi(auth) {
  return new Promise(function (resolve, reject) {
    var _a, _b, _c; // Function to run when gapi.load is ready.


    function loadGapiIframe() {
      // The developer may have tried to previously run gapi.load and failed.
      // Run this to fix that.
      resetUnloadedGapiModules();
      gapi.load('gapi.iframes', {
        callback: function callback() {
          resolve(gapi.iframes.getContext());
        },
        ontimeout: function ontimeout() {
          // The above reset may be sufficient, but having this reset after
          // failure ensures that if the developer calls gapi.load after the
          // connection is re-established and before another attempt to embed
          // the iframe, it would work and would not be broken because of our
          // failed attempt.
          // Timeout when gapi.iframes.Iframe not loaded.
          resetUnloadedGapiModules();
          reject(_createError(auth, "network-request-failed"
          /* NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: NETWORK_TIMEOUT.get()
      });
    }

    if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) {
      // If gapi.iframes.Iframe available, resolve.
      resolve(gapi.iframes.getContext());
    } else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) {
      // Gapi loader ready, load gapi.iframes.
      loadGapiIframe();
    } else {
      // Create a new iframe callback when this is called so as not to overwrite
      // any previous defined callback. This happens if this method is called
      // multiple times in parallel and could result in the later callback
      // overwriting the previous one. This would end up with a iframe
      // timeout.
      var cbName = _generateCallbackName('iframefcb'); // GApi loader not available, dynamically load platform.js.


      _window()[cbName] = function () {
        // GApi loader should be ready.
        if (!!gapi.load) {
          loadGapiIframe();
        } else {
          // Gapi loader failed, throw error.
          reject(_createError(auth, "network-request-failed"
          /* NETWORK_REQUEST_FAILED */
          ));
        }
      }; // Load GApi loader.


      return _loadJS("https://apis.google.com/js/api.js?onload=" + cbName)["catch"](function (e) {
        return reject(e);
      });
    }
  })["catch"](function (error) {
    // Reset cached promise to allow for retrial.
    cachedGApiLoader = null;
    throw error;
  });
}

var cachedGApiLoader = null;

function _loadGapi(auth) {
  cachedGApiLoader = cachedGApiLoader || loadGapi(auth);
  return cachedGApiLoader;
}
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


var PING_TIMEOUT = new Delay(5000, 15000);
var IFRAME_PATH = '__/auth/iframe';
var EMULATED_IFRAME_PATH = 'emulator/auth/iframe';
var IFRAME_ATTRIBUTES = {
  style: {
    position: 'absolute',
    top: '-100px',
    width: '1px',
    height: '1px'
  },
  'aria-hidden': 'true',
  tabindex: '-1'
}; // Map from apiHost to endpoint ID for passing into iframe. In current SDK, apiHost can be set to
// anything (not from a list of endpoints with IDs as in legacy), so this is the closest we can get.

var EID_FROM_APIHOST = new Map([["identitytoolkit.googleapis.com"
/* API_HOST */
, 'p'], ['staging-identitytoolkit.sandbox.googleapis.com', 's'], ['test-identitytoolkit.sandbox.googleapis.com', 't'] // test
]);

function getIframeUrl(auth) {
  var config = auth.config;

  _assert(config.authDomain, auth, "auth-domain-config-required"
  /* MISSING_AUTH_DOMAIN */
  );

  var url = config.emulator ? _emulatorUrl(config, EMULATED_IFRAME_PATH) : "https://" + auth.config.authDomain + "/" + IFRAME_PATH;
  var params = {
    apiKey: config.apiKey,
    appName: auth.name,
    v: _firebase_app__WEBPACK_IMPORTED_MODULE_6__["SDK_VERSION"]
  };
  var eid = EID_FROM_APIHOST.get(auth.config.apiHost);

  if (eid) {
    params.eid = eid;
  }

  var frameworks = auth._getFrameworks();

  if (frameworks.length) {
    params.fw = frameworks.join(',');
  }

  return url + "?" + Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["querystring"])(params).slice(1);
}

function _openIframe(_x251) {
  return _openIframe2.apply(this, arguments);
}
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


function _openIframe2() {
  _openIframe2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee168(auth) {
    var context, gapi;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee168$(_context168) {
      while (1) {
        switch (_context168.prev = _context168.next) {
          case 0:
            _context168.next = 2;
            return _loadGapi(auth);

          case 2:
            context = _context168.sent;
            gapi = _window().gapi;

            _assert(gapi, auth, "internal-error"
            /* INTERNAL_ERROR */
            );

            return _context168.abrupt("return", context.open({
              where: document.body,
              url: getIframeUrl(auth),
              messageHandlersFilter: gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
              attributes: IFRAME_ATTRIBUTES,
              dontclear: true
            }, function (iframe) {
              return new Promise( /*#__PURE__*/function () {
                var _ref39 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee167(resolve, reject) {
                  var networkError, networkErrorTimer, clearTimerAndResolve;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee167$(_context167) {
                    while (1) {
                      switch (_context167.prev = _context167.next) {
                        case 0:
                          clearTimerAndResolve = function _clearTimerAndResolve() {
                            _window().clearTimeout(networkErrorTimer);

                            resolve(iframe);
                          };

                          _context167.next = 3;
                          return iframe.restyle({
                            // Prevent iframe from closing on mouse out.
                            setHideOnLeave: false
                          });

                        case 3:
                          networkError = _createError(auth, "network-request-failed"
                          /* NETWORK_REQUEST_FAILED */
                          ); // Confirm iframe is correctly loaded.
                          // To fallback on failure, set a timeout.

                          // Confirm iframe is correctly loaded.
                          // To fallback on failure, set a timeout.
                          networkErrorTimer = _window().setTimeout(function () {
                            reject(networkError);
                          }, PING_TIMEOUT.get()); // Clear timer and resolve pending iframe ready promise.

                          // This returns an IThenable. However the reject part does not call
                          // when the iframe is not loaded.
                          iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, function () {
                            reject(networkError);
                          });

                        case 6:
                        case "end":
                          return _context167.stop();
                      }
                    }
                  }, _callee167);
                }));

                return function (_x262, _x263) {
                  return _ref39.apply(this, arguments);
                };
              }());
            }));

          case 6:
          case "end":
            return _context168.stop();
        }
      }
    }, _callee168);
  }));
  return _openIframe2.apply(this, arguments);
}

var BASE_POPUP_OPTIONS = {
  location: 'yes',
  resizable: 'yes',
  statusbar: 'yes',
  toolbar: 'no'
};
var DEFAULT_WIDTH = 500;
var DEFAULT_HEIGHT = 600;
var TARGET_BLANK = '_blank';
var FIREFOX_EMPTY_URL = 'http://localhost';

var AuthPopup = /*#__PURE__*/function () {
  function AuthPopup(window) {
    this.window = window;
    this.associatedEvent = null;
  }

  var _proto40 = AuthPopup.prototype;

  _proto40.close = function close() {
    if (this.window) {
      try {
        this.window.close();
      } catch (e) {}
    }
  };

  return AuthPopup;
}();

function _open(auth, url, name, width, height) {
  if (width === void 0) {
    width = DEFAULT_WIDTH;
  }

  if (height === void 0) {
    height = DEFAULT_HEIGHT;
  }

  var top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
  var left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
  var target = '';
  var options = Object.assign(Object.assign({}, BASE_POPUP_OPTIONS), {
    width: width.toString(),
    height: height.toString(),
    top: top,
    left: left
  }); // Chrome iOS 7 and 8 is returning an undefined popup win when target is
  // specified, even though the popup is not necessarily blocked.

  var ua = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["getUA"])().toLowerCase();

  if (name) {
    target = _isChromeIOS(ua) ? TARGET_BLANK : name;
  }

  if (_isFirefox(ua)) {
    // Firefox complains when invalid URLs are popped out. Hacky way to bypass.
    url = url || FIREFOX_EMPTY_URL; // Firefox disables by default scrolling on popup windows, which can create
    // issues when the user has many Google accounts, for instance.

    options.scrollbars = 'yes';
  }

  var optionsString = Object.entries(options).reduce(function (accum, _ref33) {
    var key = _ref33[0],
        value = _ref33[1];
    return "" + accum + key + "=" + value + ",";
  }, '');

  if (_isIOSStandalone(ua) && target !== '_self') {
    openAsNewWindowIOS(url || '', target);
    return new AuthPopup(null);
  } // about:blank getting sanitized causing browsers like IE/Edge to display
  // brief error message before redirecting to handler.


  var newWin = window.open(url || '', target, optionsString);

  _assert(newWin, auth, "popup-blocked"
  /* POPUP_BLOCKED */
  ); // Flaky on IE edge, encapsulate with a try and catch.


  try {
    newWin.focus();
  } catch (e) {}

  return new AuthPopup(newWin);
}

function openAsNewWindowIOS(url, target) {
  var el = document.createElement('a');
  el.href = url;
  el.target = target;
  var click = document.createEvent('MouseEvent');
  click.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
  el.dispatchEvent(click);
}
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
 * URL for Authentication widget which will initiate the OAuth handshake
 *
 * @internal
 */


var WIDGET_PATH = '__/auth/handler';
/**
 * URL for emulated environment
 *
 * @internal
 */

var EMULATOR_WIDGET_PATH = 'emulator/auth/handler';

function _getRedirectUrl(auth, provider, authType, redirectUrl, eventId, additionalParams) {
  _assert(auth.config.authDomain, auth, "auth-domain-config-required"
  /* MISSING_AUTH_DOMAIN */
  );

  _assert(auth.config.apiKey, auth, "invalid-api-key"
  /* INVALID_API_KEY */
  );

  var params = {
    apiKey: auth.config.apiKey,
    appName: auth.name,
    authType: authType,
    redirectUrl: redirectUrl,
    v: _firebase_app__WEBPACK_IMPORTED_MODULE_6__["SDK_VERSION"],
    eventId: eventId
  };

  if (provider instanceof FederatedAuthProvider) {
    provider.setDefaultLanguage(auth.languageCode);
    params.providerId = provider.providerId || '';

    if (!Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(provider.getCustomParameters())) {
      params.customParameters = JSON.stringify(provider.getCustomParameters());
    } // TODO set additionalParams from the provider as well?


    for (var _i6 = 0, _Object$entries = Object.entries(additionalParams || {}); _i6 < _Object$entries.length; _i6++) {
      var _Object$entries$_i = _Object$entries[_i6],
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
      params[key] = value;
    }
  }

  if (provider instanceof BaseOAuthProvider) {
    var scopes = provider.getScopes().filter(function (scope) {
      return scope !== '';
    });

    if (scopes.length > 0) {
      params.scopes = scopes.join(',');
    }
  }

  if (auth.tenantId) {
    params.tid = auth.tenantId;
  } // TODO: maybe set eid as endipointId
  // TODO: maybe set fw as Frameworks.join(",")


  var paramsDict = params;

  for (var _i7 = 0, _Object$keys4 = Object.keys(paramsDict); _i7 < _Object$keys4.length; _i7++) {
    var _key7 = _Object$keys4[_i7];

    if (paramsDict[_key7] === undefined) {
      delete paramsDict[_key7];
    }
  }

  return getHandlerBase(auth) + "?" + Object(_firebase_util__WEBPACK_IMPORTED_MODULE_5__["querystring"])(paramsDict).slice(1);
}

function getHandlerBase(_ref34) {
  var config = _ref34.config;

  if (!config.emulator) {
    return "https://" + config.authDomain + "/" + WIDGET_PATH;
  }

  return _emulatorUrl(config, EMULATOR_WIDGET_PATH);
}
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
 * The special web storage event
 *
 */


var WEB_STORAGE_SUPPORT_KEY = 'webStorageSupport';

var BrowserPopupRedirectResolver = /*#__PURE__*/function () {
  function BrowserPopupRedirectResolver() {
    this.eventManagers = {};
    this.iframes = {};
    this.originValidationPromises = {};
    this._redirectPersistence = browserSessionPersistence;
    this._completeRedirectFn = _getRedirectResult;
  } // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections


  var _proto41 = BrowserPopupRedirectResolver.prototype;

  _proto41._openPopup =
  /*#__PURE__*/
  function () {
    var _openPopup2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee83(auth, provider, authType, eventId) {
      var _a, url;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee83$(_context83) {
        while (1) {
          switch (_context83.prev = _context83.next) {
            case 0:
              debugAssert((_a = this.eventManagers[auth._key()]) === null || _a === void 0 ? void 0 : _a.manager, '_initialize() not called before _openPopup()');
              url = _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
              return _context83.abrupt("return", _open(auth, url, _generateEventId()));

            case 3:
            case "end":
              return _context83.stop();
          }
        }
      }, _callee83, this);
    }));

    function _openPopup(_x252, _x253, _x254, _x255) {
      return _openPopup2.apply(this, arguments);
    }

    return _openPopup;
  }();

  _proto41._openRedirect = /*#__PURE__*/function () {
    var _openRedirect2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee84(auth, provider, authType, eventId) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee84$(_context84) {
        while (1) {
          switch (_context84.prev = _context84.next) {
            case 0:
              _context84.next = 2;
              return this._originValidation(auth);

            case 2:
              _setWindowLocation(_getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId));

              return _context84.abrupt("return", new Promise(function () {}));

            case 4:
            case "end":
              return _context84.stop();
          }
        }
      }, _callee84, this);
    }));

    function _openRedirect(_x256, _x257, _x258, _x259) {
      return _openRedirect2.apply(this, arguments);
    }

    return _openRedirect;
  }();

  _proto41._initialize = function _initialize(auth) {
    var _this42 = this;

    var key = auth._key();

    if (this.eventManagers[key]) {
      var _this$eventManagers$k = this.eventManagers[key],
          manager = _this$eventManagers$k.manager,
          _promise = _this$eventManagers$k.promise;

      if (manager) {
        return Promise.resolve(manager);
      } else {
        debugAssert(_promise, 'If manager is not set, promise should be');
        return _promise;
      }
    }

    var promise = this.initAndGetManager(auth);
    this.eventManagers[key] = {
      promise: promise
    }; // If the promise is rejected, the key should be removed so that the
    // operation can be retried later.

    promise["catch"](function () {
      delete _this42.eventManagers[key];
    });
    return promise;
  };

  _proto41.initAndGetManager = /*#__PURE__*/function () {
    var _initAndGetManager = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee85(auth) {
      var iframe, manager;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee85$(_context85) {
        while (1) {
          switch (_context85.prev = _context85.next) {
            case 0:
              _context85.next = 2;
              return _openIframe(auth);

            case 2:
              iframe = _context85.sent;
              manager = new AuthEventManager(auth);
              iframe.register('authEvent', function (iframeEvent) {
                _assert(iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent, auth, "invalid-auth-event"
                /* INVALID_AUTH_EVENT */
                ); // TODO: Consider splitting redirect and popup events earlier on


                var handled = manager.onEvent(iframeEvent.authEvent);
                return {
                  status: handled ? "ACK"
                  /* ACK */
                  : "ERROR"
                  /* ERROR */

                };
              }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
              this.eventManagers[auth._key()] = {
                manager: manager
              };
              this.iframes[auth._key()] = iframe;
              return _context85.abrupt("return", manager);

            case 8:
            case "end":
              return _context85.stop();
          }
        }
      }, _callee85, this);
    }));

    function initAndGetManager(_x260) {
      return _initAndGetManager.apply(this, arguments);
    }

    return initAndGetManager;
  }();

  _proto41._isIframeWebStorageSupported = function _isIframeWebStorageSupported(auth, cb) {
    var iframe = this.iframes[auth._key()];

    iframe.send(WEB_STORAGE_SUPPORT_KEY, {
      type: WEB_STORAGE_SUPPORT_KEY
    }, function (result) {
      var _a;

      var isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];

      if (isSupported !== undefined) {
        cb(!!isSupported);
      }

      _fail(auth, "internal-error"
      /* INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  };

  _proto41._originValidation = function _originValidation(auth) {
    var key = auth._key();

    if (!this.originValidationPromises[key]) {
      this.originValidationPromises[key] = _validateOrigin(auth);
    }

    return this.originValidationPromises[key];
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(BrowserPopupRedirectResolver, [{
    key: "_shouldInitProactively",
    get: function get() {
      // Mobile browsers and Safari need to optimistically initialize
      return _isMobileBrowser() || _isSafari() || _isIOS();
    }
  }]);

  return BrowserPopupRedirectResolver;
}();
/**
 * An implementation of {@link PopupRedirectResolver} suitable for browser
 * based applications.
 *
 * @public
 */


var browserPopupRedirectResolver = BrowserPopupRedirectResolver;

var MultiFactorAssertionImpl = /*#__PURE__*/function () {
  function MultiFactorAssertionImpl(factorId) {
    this.factorId = factorId;
  }

  var _proto42 = MultiFactorAssertionImpl.prototype;

  _proto42._process = function _process(auth, session, displayName) {
    switch (session.type) {
      case "enroll"
      /* ENROLL */
      :
        return this._finalizeEnroll(auth, session.credential, displayName);

      case "signin"
      /* SIGN_IN */
      :
        return this._finalizeSignIn(auth, session.credential);

      default:
        return debugFail('unexpected MultiFactorSessionType');
    }
  };

  return MultiFactorAssertionImpl;
}();
/**
 * {@inheritdoc PhoneMultiFactorAssertion}
 *
 * @public
 */


var PhoneMultiFactorAssertionImpl = /*#__PURE__*/function (_MultiFactorAssertion) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(PhoneMultiFactorAssertionImpl, _MultiFactorAssertion);

  function PhoneMultiFactorAssertionImpl(credential) {
    var _this43;

    _this43 = _MultiFactorAssertion.call(this, "phone"
    /* PHONE */
    ) || this;
    _this43.credential = credential;
    return _this43;
  }
  /** @internal */


  PhoneMultiFactorAssertionImpl._fromCredential = function _fromCredential(credential) {
    return new PhoneMultiFactorAssertionImpl(credential);
  }
  /** @internal */
  ;

  var _proto43 = PhoneMultiFactorAssertionImpl.prototype;

  _proto43._finalizeEnroll = function _finalizeEnroll(auth, idToken, displayName) {
    return finalizeEnrollPhoneMfa(auth, {
      idToken: idToken,
      displayName: displayName,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
  /** @internal */
  ;

  _proto43._finalizeSignIn = function _finalizeSignIn(auth, mfaPendingCredential) {
    return finalizeSignInPhoneMfa(auth, {
      mfaPendingCredential: mfaPendingCredential,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  };

  return PhoneMultiFactorAssertionImpl;
}(MultiFactorAssertionImpl);
/**
 * Provider for generating a {@link PhoneMultiFactorAssertion}.
 *
 * @public
 */


var PhoneMultiFactorGenerator = /*#__PURE__*/function () {
  function PhoneMultiFactorGenerator() {}
  /**
   * Provides a {@link PhoneMultiFactorAssertion} to confirm ownership of the phone second factor.
   *
   * @param phoneAuthCredential - A credential provided by {@link PhoneAuthProvider.credential}.
   * @returns A {@link PhoneMultiFactorAssertion} which can be used with
   * {@link MultiFactorResolver.resolveSignIn}
   */


  PhoneMultiFactorGenerator.assertion = function assertion(credential) {
    return PhoneMultiFactorAssertionImpl._fromCredential(credential);
  };

  return PhoneMultiFactorGenerator;
}();
/**
 * The identifier of the phone second factor: `phone`.
 */


PhoneMultiFactorGenerator.FACTOR_ID = 'phone';
var name = "@firebase/auth";
var version = "0.19.8";
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

var AuthInterop = /*#__PURE__*/function () {
  function AuthInterop(auth) {
    this.auth = auth;
    this.internalListeners = new Map();
  }

  var _proto44 = AuthInterop.prototype;

  _proto44.getUid = function getUid() {
    var _a;

    this.assertAuthConfigured();
    return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
  };

  _proto44.getToken = /*#__PURE__*/function () {
    var _getToken2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee86(forceRefresh) {
      var accessToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee86$(_context86) {
        while (1) {
          switch (_context86.prev = _context86.next) {
            case 0:
              this.assertAuthConfigured();
              _context86.next = 3;
              return this.auth._initializationPromise;

            case 3:
              if (this.auth.currentUser) {
                _context86.next = 5;
                break;
              }

              return _context86.abrupt("return", null);

            case 5:
              _context86.next = 7;
              return this.auth.currentUser.getIdToken(forceRefresh);

            case 7:
              accessToken = _context86.sent;
              return _context86.abrupt("return", {
                accessToken: accessToken
              });

            case 9:
            case "end":
              return _context86.stop();
          }
        }
      }, _callee86, this);
    }));

    function getToken(_x261) {
      return _getToken2.apply(this, arguments);
    }

    return getToken;
  }();

  _proto44.addAuthTokenListener = function addAuthTokenListener(listener) {
    this.assertAuthConfigured();

    if (this.internalListeners.has(listener)) {
      return;
    }

    var unsubscribe = this.auth.onIdTokenChanged(function (user) {
      var _a;

      listener(((_a = user) === null || _a === void 0 ? void 0 : _a.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(listener, unsubscribe);
    this.updateProactiveRefresh();
  };

  _proto44.removeAuthTokenListener = function removeAuthTokenListener(listener) {
    this.assertAuthConfigured();
    var unsubscribe = this.internalListeners.get(listener);

    if (!unsubscribe) {
      return;
    }

    this.internalListeners["delete"](listener);
    unsubscribe();
    this.updateProactiveRefresh();
  };

  _proto44.assertAuthConfigured = function assertAuthConfigured() {
    _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth"
    /* DEPENDENT_SDK_INIT_BEFORE_AUTH */
    );
  };

  _proto44.updateProactiveRefresh = function updateProactiveRefresh() {
    if (this.internalListeners.size > 0) {
      this.auth._startProactiveRefresh();
    } else {
      this.auth._stopProactiveRefresh();
    }
  };

  return AuthInterop;
}();
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


function getVersionForPlatform(clientPlatform) {
  switch (clientPlatform) {
    case "Node"
    /* NODE */
    :
      return 'node';

    case "ReactNative"
    /* REACT_NATIVE */
    :
      return 'rn';

    case "Worker"
    /* WORKER */
    :
      return 'webworker';

    case "Cordova"
    /* CORDOVA */
    :
      return 'cordova';

    default:
      return undefined;
  }
}
/** @internal */


function registerAuth(clientPlatform) {
  Object(_firebase_app__WEBPACK_IMPORTED_MODULE_6__["_registerComponent"])(new _firebase_component__WEBPACK_IMPORTED_MODULE_9__["Component"]("auth"
  /* AUTH */
  , function (container, _ref35) {
    var deps = _ref35.options;
    var app = container.getProvider('app').getImmediate();
    var _app$options = app.options,
        apiKey = _app$options.apiKey,
        authDomain = _app$options.authDomain;
    return function (app) {
      _assert(apiKey && !apiKey.includes(':'), "invalid-api-key"
      /* INVALID_API_KEY */
      , {
        appName: app.name
      }); // Auth domain is optional if IdP sign in isn't being used


      _assert(!(authDomain === null || authDomain === void 0 ? void 0 : authDomain.includes(':')), "argument-error"
      /* ARGUMENT_ERROR */
      , {
        appName: app.name
      });

      var config = {
        apiKey: apiKey,
        authDomain: authDomain,
        clientPlatform: clientPlatform,
        apiHost: "identitytoolkit.googleapis.com"
        /* API_HOST */
        ,
        tokenApiHost: "securetoken.googleapis.com"
        /* TOKEN_API_HOST */
        ,
        apiScheme: "https"
        /* API_SCHEME */
        ,
        sdkClientVersion: _getClientVersion(clientPlatform)
      };
      var authInstance = new AuthImpl(app, config);

      _initializeAuthInstance(authInstance, deps);

      return authInstance;
    }(app);
  }, "PUBLIC"
  /* PUBLIC */
  )
  /**
   * Auth can only be initialized by explicitly calling getAuth() or initializeAuth()
   * For why we do this, See go/firebase-next-auth-init
   */
  .setInstantiationMode("EXPLICIT"
  /* EXPLICIT */
  )
  /**
   * Because all firebase products that depend on auth depend on auth-internal directly,
   * we need to initialize auth-internal after auth is initialized to make it available to other firebase products.
   */
  .setInstanceCreatedCallback(function (container, _instanceIdentifier, _instance) {
    var authInternalProvider = container.getProvider("auth-internal"
    /* AUTH_INTERNAL */
    );
    authInternalProvider.initialize();
  }));

  Object(_firebase_app__WEBPACK_IMPORTED_MODULE_6__["_registerComponent"])(new _firebase_component__WEBPACK_IMPORTED_MODULE_9__["Component"]("auth-internal"
  /* AUTH_INTERNAL */
  , function (container) {
    var auth = _castAuth(container.getProvider("auth"
    /* AUTH */
    ).getImmediate());

    return function (auth) {
      return new AuthInterop(auth);
    }(auth);
  }, "PRIVATE"
  /* PRIVATE */
  ).setInstantiationMode("EXPLICIT"
  /* EXPLICIT */
  ));

  Object(_firebase_app__WEBPACK_IMPORTED_MODULE_6__["registerVersion"])(name, version, getVersionForPlatform(clientPlatform)); // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation

  Object(_firebase_app__WEBPACK_IMPORTED_MODULE_6__["registerVersion"])(name, version, 'esm2017');
}
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
 * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 *
 * @param app - The Firebase App.
 *
 * @public
 */


function getAuth(app) {
  if (app === void 0) {
    app = Object(_firebase_app__WEBPACK_IMPORTED_MODULE_6__["getApp"])();
  }

  var provider = Object(_firebase_app__WEBPACK_IMPORTED_MODULE_6__["_getProvider"])(app, 'auth');

  if (provider.isInitialized()) {
    return provider.getImmediate();
  }

  return initializeAuth(app, {
    popupRedirectResolver: browserPopupRedirectResolver,
    persistence: [indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence]
  });
}

registerAuth("Browser"
/* BROWSER */
);


/***/ }),

/***/ "./node_modules/@firebase/auth/dist/esm2017/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@firebase/auth/dist/esm2017/index.js ***!
  \***********************************************************/
/*! exports provided: ActionCodeOperation, ActionCodeURL, AuthCredential, AuthErrorCodes, EmailAuthCredential, EmailAuthProvider, FacebookAuthProvider, FactorId, GithubAuthProvider, GoogleAuthProvider, OAuthCredential, OAuthProvider, OperationType, PhoneAuthCredential, PhoneAuthProvider, PhoneMultiFactorGenerator, ProviderId, RecaptchaVerifier, SAMLAuthProvider, SignInMethod, TwitterAuthProvider, applyActionCode, browserLocalPersistence, browserPopupRedirectResolver, browserSessionPersistence, checkActionCode, confirmPasswordReset, connectAuthEmulator, createUserWithEmailAndPassword, debugErrorMap, deleteUser, fetchSignInMethodsForEmail, getAdditionalUserInfo, getAuth, getIdToken, getIdTokenResult, getMultiFactorResolver, getRedirectResult, inMemoryPersistence, indexedDBLocalPersistence, initializeAuth, isSignInWithEmailLink, linkWithCredential, linkWithPhoneNumber, linkWithPopup, linkWithRedirect, multiFactor, onAuthStateChanged, onIdTokenChanged, parseActionCodeURL, prodErrorMap, reauthenticateWithCredential, reauthenticateWithPhoneNumber, reauthenticateWithPopup, reauthenticateWithRedirect, reload, sendEmailVerification, sendPasswordResetEmail, sendSignInLinkToEmail, setPersistence, signInAnonymously, signInWithCredential, signInWithCustomToken, signInWithEmailAndPassword, signInWithEmailLink, signInWithPhoneNumber, signInWithPopup, signInWithRedirect, signOut, unlink, updateCurrentUser, updateEmail, updatePassword, updatePhoneNumber, updateProfile, useDeviceLanguage, verifyBeforeUpdateEmail, verifyPasswordResetCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-342f2197.js */ "./node_modules/@firebase/auth/dist/esm2017/index-342f2197.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionCodeOperation", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["A"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionCodeURL", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["ac"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthCredential", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["G"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthErrorCodes", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailAuthCredential", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["H"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailAuthProvider", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookAuthProvider", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["M"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FactorId", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["F"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GithubAuthProvider", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["Q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleAuthProvider", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["N"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OAuthCredential", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["I"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OAuthProvider", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["T"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OperationType", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["O"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneAuthCredential", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["J"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneAuthProvider", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["P"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneMultiFactorGenerator", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProviderId", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecaptchaVerifier", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["R"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAMLAuthProvider", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["U"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignInMethod", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["S"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TwitterAuthProvider", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["V"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyActionCode", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["a1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "browserLocalPersistence", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "browserPopupRedirectResolver", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "browserSessionPersistence", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkActionCode", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["a2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "confirmPasswordReset", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["a0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectAuthEmulator", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["E"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUserWithEmailAndPassword", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["a4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debugErrorMap", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSignInMethodsForEmail", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["a9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAdditionalUserInfo", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["ak"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIdToken", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["ah"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIdTokenResult", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["ai"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMultiFactorResolver", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["am"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRedirectResult", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inMemoryPersistence", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["K"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexedDBLocalPersistence", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeAuth", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["D"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSignInWithEmailLink", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["a7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkWithCredential", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["Y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkWithPhoneNumber", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkWithPopup", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkWithRedirect", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multiFactor", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["an"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAuthStateChanged", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onIdTokenChanged", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseActionCodeURL", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["ad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prodErrorMap", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["B"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reauthenticateWithCredential", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["Z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reauthenticateWithPhoneNumber", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reauthenticateWithPopup", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reauthenticateWithRedirect", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reload", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["al"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendEmailVerification", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["aa"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendPasswordResetEmail", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["$"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendSignInLinkToEmail", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["a6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPersistence", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInAnonymously", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["W"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithCredential", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["X"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithCustomToken", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["_"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithEmailAndPassword", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["a5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithEmailLink", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["a8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithPhoneNumber", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithPopup", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithRedirect", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signOut", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["x"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unlink", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["aj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateCurrentUser", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["w"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateEmail", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["af"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updatePassword", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["ag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updatePhoneNumber", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateProfile", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["ae"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeviceLanguage", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["v"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "verifyBeforeUpdateEmail", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["ab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "verifyPasswordResetCode", function() { return _index_342f2197_js__WEBPACK_IMPORTED_MODULE_0__["a3"]; });

/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/esm/index.esm2017.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/esm/index.esm2017.js");







/***/ }),

/***/ "./node_modules/@firebase/component/dist/esm/index.esm2017.js":
/*!********************************************************************!*\
  !*** ./node_modules/@firebase/component/dist/esm/index.esm2017.js ***!
  \********************************************************************/
/*! exports provided: Component, ComponentContainer, Provider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentContainer", function() { return ComponentContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");



function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */

var Component = /*#__PURE__*/function () {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  function Component(name, instanceFactory, type) {
    this.name = name;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    /**
     * Properties to be added to the service namespace
     */

    this.serviceProps = {};
    this.instantiationMode = "LAZY"
    /* LAZY */
    ;
    this.onInstanceCreated = null;
  }

  var _proto = Component.prototype;

  _proto.setInstantiationMode = function setInstantiationMode(mode) {
    this.instantiationMode = mode;
    return this;
  };

  _proto.setMultipleInstances = function setMultipleInstances(multipleInstances) {
    this.multipleInstances = multipleInstances;
    return this;
  };

  _proto.setServiceProps = function setServiceProps(props) {
    this.serviceProps = props;
    return this;
  };

  _proto.setInstanceCreatedCallback = function setInstanceCreatedCallback(callback) {
    this.onInstanceCreated = callback;
    return this;
  };

  return Component;
}();
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


var DEFAULT_ENTRY_NAME = '[DEFAULT]';
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
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */

var Provider = /*#__PURE__*/function () {
  function Provider(name, container) {
    this.name = name;
    this.container = container;
    this.component = null;
    this.instances = new Map();
    this.instancesDeferred = new Map();
    this.instancesOptions = new Map();
    this.onInitCallbacks = new Map();
  }
  /**
   * @param identifier A provider can provide mulitple instances of a service
   * if this.component.multipleInstances is true.
   */


  var _proto2 = Provider.prototype;

  _proto2.get = function get(identifier) {
    // if multipleInstances is not supported, use the default name
    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);

    if (!this.instancesDeferred.has(normalizedIdentifier)) {
      var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["Deferred"]();
      this.instancesDeferred.set(normalizedIdentifier, deferred);

      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        // initialize the service if it can be auto-initialized
        try {
          var instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });

          if (instance) {
            deferred.resolve(instance);
          }
        } catch (e) {// when the instance factory throws an exception during get(), it should not cause
          // a fatal error. We just return the unresolved promise in this case.
        }
      }
    }

    return this.instancesDeferred.get(normalizedIdentifier).promise;
  };

  _proto2.getImmediate = function getImmediate(options) {
    var _a; // if multipleInstances is not supported, use the default name


    var normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
    var optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;

    if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
      try {
        return this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });
      } catch (e) {
        if (optional) {
          return null;
        } else {
          throw e;
        }
      }
    } else {
      // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
      if (optional) {
        return null;
      } else {
        throw Error("Service " + this.name + " is not available");
      }
    }
  };

  _proto2.getComponent = function getComponent() {
    return this.component;
  };

  _proto2.setComponent = function setComponent(component) {
    if (component.name !== this.name) {
      throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
    }

    if (this.component) {
      throw Error("Component for " + this.name + " has already been provided");
    }

    this.component = component; // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)

    if (!this.shouldAutoInitialize()) {
      return;
    } // if the service is eager, initialize the default instance


    if (isComponentEager(component)) {
      try {
        this.getOrInitializeService({
          instanceIdentifier: DEFAULT_ENTRY_NAME
        });
      } catch (e) {// when the instance factory for an eager Component throws an exception during the eager
        // initialization, it should not cause a fatal error.
        // TODO: Investigate if we need to make it configurable, because some component may want to cause
        // a fatal error in this case?
      }
    } // Create service instances for the pending promises and resolve them
    // NOTE: if this.multipleInstances is false, only the default instance will be created
    // and all promises with resolve with it regardless of the identifier.


    for (var _iterator = _createForOfIteratorHelperLoose(this.instancesDeferred.entries()), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          instanceIdentifier = _step$value[0],
          instanceDeferred = _step$value[1];
      var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);

      try {
        // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
        var instance = this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });
        instanceDeferred.resolve(instance);
      } catch (e) {// when the instance factory throws an exception, it should not cause
        // a fatal error. We just leave the promise unresolved.
      }
    }
  };

  _proto2.clearInstance = function clearInstance(identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME;
    }

    this.instancesDeferred["delete"](identifier);
    this.instancesOptions["delete"](identifier);
    this.instances["delete"](identifier);
  } // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  ;

  _proto2["delete"] =
  /*#__PURE__*/
  function () {
    var _delete2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var services;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              services = Array.from(this.instances.values());
              _context.next = 3;
              return Promise.all([].concat(services.filter(function (service) {
                return 'INTERNAL' in service;
              }) // legacy services
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .map(function (service) {
                return service.INTERNAL["delete"]();
              }), services.filter(function (service) {
                return '_delete' in service;
              }) // modularized services
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .map(function (service) {
                return service._delete();
              })));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function _delete() {
      return _delete2.apply(this, arguments);
    }

    return _delete;
  }();

  _proto2.isComponentSet = function isComponentSet() {
    return this.component != null;
  };

  _proto2.isInitialized = function isInitialized(identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME;
    }

    return this.instances.has(identifier);
  };

  _proto2.getOptions = function getOptions(identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME;
    }

    return this.instancesOptions.get(identifier) || {};
  };

  _proto2.initialize = function initialize(opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _opts = opts,
        _opts$options = _opts.options,
        options = _opts$options === void 0 ? {} : _opts$options;
    var normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);

    if (this.isInitialized(normalizedIdentifier)) {
      throw Error(this.name + "(" + normalizedIdentifier + ") has already been initialized");
    }

    if (!this.isComponentSet()) {
      throw Error("Component " + this.name + " has not been registered yet");
    }

    var instance = this.getOrInitializeService({
      instanceIdentifier: normalizedIdentifier,
      options: options
    }); // resolve any pending promise waiting for the service instance

    for (var _iterator2 = _createForOfIteratorHelperLoose(this.instancesDeferred.entries()), _step2; !(_step2 = _iterator2()).done;) {
      var _step2$value = _step2.value,
          instanceIdentifier = _step2$value[0],
          instanceDeferred = _step2$value[1];
      var normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);

      if (normalizedIdentifier === normalizedDeferredIdentifier) {
        instanceDeferred.resolve(instance);
      }
    }

    return instance;
  }
  /**
   *
   * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
   * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
   *
   * @param identifier An optional instance identifier
   * @returns a function to unregister the callback
   */
  ;

  _proto2.onInit = function onInit(callback, identifier) {
    var _a;

    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    var existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
    existingCallbacks.add(callback);
    this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
    var existingInstance = this.instances.get(normalizedIdentifier);

    if (existingInstance) {
      callback(existingInstance, normalizedIdentifier);
    }

    return function () {
      existingCallbacks["delete"](callback);
    };
  }
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */
  ;

  _proto2.invokeOnInitCallbacks = function invokeOnInitCallbacks(instance, identifier) {
    var callbacks = this.onInitCallbacks.get(identifier);

    if (!callbacks) {
      return;
    }

    for (var _iterator3 = _createForOfIteratorHelperLoose(callbacks), _step3; !(_step3 = _iterator3()).done;) {
      var callback = _step3.value;

      try {
        callback(instance, identifier);
      } catch (_a) {// ignore errors in the onInit callback
      }
    }
  };

  _proto2.getOrInitializeService = function getOrInitializeService(_ref) {
    var instanceIdentifier = _ref.instanceIdentifier,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? {} : _ref$options;
    var instance = this.instances.get(instanceIdentifier);

    if (!instance && this.component) {
      instance = this.component.instanceFactory(this.container, {
        instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
        options: options
      });
      this.instances.set(instanceIdentifier, instance);
      this.instancesOptions.set(instanceIdentifier, options);
      /**
       * Invoke onInit listeners.
       * Note this.component.onInstanceCreated is different, which is used by the component creator,
       * while onInit listeners are registered by consumers of the provider.
       */

      this.invokeOnInitCallbacks(instance, instanceIdentifier);
      /**
       * Order is important
       * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
       * makes `isInitialized()` return true.
       */

      if (this.component.onInstanceCreated) {
        try {
          this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
        } catch (_a) {// ignore errors in the onInstanceCreatedCallback
        }
      }
    }

    return instance || null;
  };

  _proto2.normalizeInstanceIdentifier = function normalizeInstanceIdentifier(identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME;
    }

    if (this.component) {
      return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
    } else {
      return identifier; // assume multiple instances are supported before the component is provided.
    }
  };

  _proto2.shouldAutoInitialize = function shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT"
    /* EXPLICIT */
    ;
  };

  return Provider;
}(); // undefined should be passed to the service factory for the default instance


function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}

function isComponentEager(component) {
  return component.instantiationMode === "EAGER"
  /* EAGER */
  ;
}
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
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */


var ComponentContainer = /*#__PURE__*/function () {
  function ComponentContainer(name) {
    this.name = name;
    this.providers = new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */


  var _proto3 = ComponentContainer.prototype;

  _proto3.addComponent = function addComponent(component) {
    var provider = this.getProvider(component.name);

    if (provider.isComponentSet()) {
      throw new Error("Component " + component.name + " has already been registered with " + this.name);
    }

    provider.setComponent(component);
  };

  _proto3.addOrOverwriteComponent = function addOrOverwriteComponent(component) {
    var provider = this.getProvider(component.name);

    if (provider.isComponentSet()) {
      // delete the existing provider from the container, so we can register the new component
      this.providers["delete"](component.name);
    }

    this.addComponent(component);
  }
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */
  ;

  _proto3.getProvider = function getProvider(name) {
    if (this.providers.has(name)) {
      return this.providers.get(name);
    } // create a Provider for a service that hasn't registered with Firebase


    var provider = new Provider(name, this);
    this.providers.set(name, provider);
    return provider;
  };

  _proto3.getProviders = function getProviders() {
    return Array.from(this.providers.values());
  };

  return ComponentContainer;
}();



/***/ }),

/***/ "./node_modules/@firebase/logger/dist/esm/index.esm2017.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@firebase/logger/dist/esm/index.esm2017.js ***!
  \*****************************************************************/
/*! exports provided: LogLevel, Logger, setLogLevel, setUserLogHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogLevel", function() { return setLogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserLogHandler", function() { return setUserLogHandler; });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


var _ConsoleMethod;

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
 * A container for all of the Logger instances
 */
var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */

var LogLevel;

(function (LogLevel) {
  LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
  LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
  LogLevel[LogLevel["INFO"] = 2] = "INFO";
  LogLevel[LogLevel["WARN"] = 3] = "WARN";
  LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
  LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));

var levelStringToEnum = {
  'debug': LogLevel.DEBUG,
  'verbose': LogLevel.VERBOSE,
  'info': LogLevel.INFO,
  'warn': LogLevel.WARN,
  'error': LogLevel.ERROR,
  'silent': LogLevel.SILENT
};
/**
 * The default log level
 */

var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */

var ConsoleMethod = (_ConsoleMethod = {}, _ConsoleMethod[LogLevel.DEBUG] = 'log', _ConsoleMethod[LogLevel.VERBOSE] = 'log', _ConsoleMethod[LogLevel.INFO] = 'info', _ConsoleMethod[LogLevel.WARN] = 'warn', _ConsoleMethod[LogLevel.ERROR] = 'error', _ConsoleMethod);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */

var defaultLogHandler = function defaultLogHandler(instance, logType) {
  if (logType < instance.logLevel) {
    return;
  }

  var now = new Date().toISOString();
  var method = ConsoleMethod[logType];

  if (method) {
    var _console;

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    (_console = console)[method].apply(_console, ["[" + now + "]  " + instance.name + ":"].concat(args));
  } else {
    throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
  }
};

var Logger = /*#__PURE__*/function () {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  function Logger(name) {
    this.name = name;
    /**
     * The log level of the given Logger instance.
     */

    this._logLevel = defaultLogLevel;
    /**
     * The main (internal) log handler for the Logger instance.
     * Can be set to a new function in internal package code but not by user.
     */

    this._logHandler = defaultLogHandler;
    /**
     * The optional, additional, user-defined log handler for the Logger instance.
     */

    this._userLogHandler = null;
    /**
     * Capture the current instance for later use
     */

    instances.push(this);
  }

  var _proto = Logger.prototype;

  // Workaround for setter/getter having to be the same type.
  _proto.setLogLevel = function setLogLevel(val) {
    this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
  };

  /**
   * The functions below are all based on the `console` interface
   */
  _proto.debug = function debug() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.DEBUG].concat(args));

    this._logHandler.apply(this, [this, LogLevel.DEBUG].concat(args));
  };

  _proto.log = function log() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.VERBOSE].concat(args));

    this._logHandler.apply(this, [this, LogLevel.VERBOSE].concat(args));
  };

  _proto.info = function info() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.INFO].concat(args));

    this._logHandler.apply(this, [this, LogLevel.INFO].concat(args));
  };

  _proto.warn = function warn() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.WARN].concat(args));

    this._logHandler.apply(this, [this, LogLevel.WARN].concat(args));
  };

  _proto.error = function error() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.ERROR].concat(args));

    this._logHandler.apply(this, [this, LogLevel.ERROR].concat(args));
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(Logger, [{
    key: "logLevel",
    get: function get() {
      return this._logLevel;
    },
    set: function set(val) {
      if (!(val in LogLevel)) {
        throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
      }

      this._logLevel = val;
    }
  }, {
    key: "logHandler",
    get: function get() {
      return this._logHandler;
    },
    set: function set(val) {
      if (typeof val !== 'function') {
        throw new TypeError('Value assigned to `logHandler` must be a function');
      }

      this._logHandler = val;
    }
  }, {
    key: "userLogHandler",
    get: function get() {
      return this._userLogHandler;
    },
    set: function set(val) {
      this._userLogHandler = val;
    }
  }]);

  return Logger;
}();

function setLogLevel(level) {
  instances.forEach(function (inst) {
    inst.setLogLevel(level);
  });
}

function setUserLogHandler(logCallback, options) {
  var _loop = function _loop() {
    var instance = _step.value;
    var customLogLevel = null;

    if (options && options.level) {
      customLogLevel = levelStringToEnum[options.level];
    }

    if (logCallback === null) {
      instance.userLogHandler = null;
    } else {
      instance.userLogHandler = function (instance, level) {
        for (var _len7 = arguments.length, args = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
          args[_key7 - 2] = arguments[_key7];
        }

        var message = args.map(function (arg) {
          if (arg == null) {
            return null;
          } else if (typeof arg === 'string') {
            return arg;
          } else if (typeof arg === 'number' || typeof arg === 'boolean') {
            return arg.toString();
          } else if (arg instanceof Error) {
            return arg.message;
          } else {
            try {
              return JSON.stringify(arg);
            } catch (ignored) {
              return null;
            }
          }
        }).filter(function (arg) {
          return arg;
        }).join(' ');

        if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
          logCallback({
            level: LogLevel[level].toLowerCase(),
            message: message,
            args: args,
            type: instance.name
          });
        }
      };
    }
  };

  for (var _iterator = _createForOfIteratorHelperLoose(instances), _step; !(_step = _iterator()).done;) {
    _loop();
  }
}



/***/ }),

/***/ "./node_modules/@firebase/util/dist/index.esm2017.js":
/*!***********************************************************!*\
  !*** ./node_modules/@firebase/util/dist/index.esm2017.js ***!
  \***********************************************************/
/*! exports provided: CONSTANTS, Deferred, ErrorFactory, FirebaseError, MAX_VALUE_MILLIS, RANDOM_FACTOR, Sha1, areCookiesEnabled, assert, assertionError, async, base64, base64Decode, base64Encode, base64urlEncodeWithoutPadding, calculateBackoffMillis, contains, createMockUserToken, createSubscribe, decode, deepCopy, deepEqual, deepExtend, errorPrefix, extractQuerystring, getGlobal, getModularInstance, getUA, isAdmin, isBrowser, isBrowserExtension, isElectron, isEmpty, isIE, isIndexedDBAvailable, isMobileCordova, isNode, isNodeSdk, isReactNative, isSafari, isUWP, isValidFormat, isValidTimestamp, issuedAtTime, jsonEval, map, ordinal, querystring, querystringDecode, safeGet, stringLength, stringToByteArray, stringify, validateArgCount, validateCallback, validateContextObject, validateIndexedDBOpenable, validateNamespace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANTS", function() { return CONSTANTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deferred", function() { return Deferred; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorFactory", function() { return ErrorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseError", function() { return FirebaseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_VALUE_MILLIS", function() { return MAX_VALUE_MILLIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANDOM_FACTOR", function() { return RANDOM_FACTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sha1", function() { return Sha1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areCookiesEnabled", function() { return areCookiesEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertionError", function() { return assertionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "async", function() { return async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64", function() { return base64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64Decode", function() { return base64Decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64Encode", function() { return base64Encode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64urlEncodeWithoutPadding", function() { return base64urlEncodeWithoutPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBackoffMillis", function() { return calculateBackoffMillis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMockUserToken", function() { return createMockUserToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSubscribe", function() { return createSubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return deepCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepEqual", function() { return deepEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepExtend", function() { return deepExtend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorPrefix", function() { return errorPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractQuerystring", function() { return extractQuerystring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobal", function() { return getGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModularInstance", function() { return getModularInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUA", function() { return getUA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdmin", function() { return isAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowserExtension", function() { return isBrowserExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElectron", function() { return isElectron; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return isIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIndexedDBAvailable", function() { return isIndexedDBAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobileCordova", function() { return isMobileCordova; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return isNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeSdk", function() { return isNodeSdk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReactNative", function() { return isReactNative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSafari", function() { return isSafari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUWP", function() { return isUWP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidFormat", function() { return isValidFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidTimestamp", function() { return isValidTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "issuedAtTime", function() { return issuedAtTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonEval", function() { return jsonEval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinal", function() { return ordinal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querystring", function() { return querystring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querystringDecode", function() { return querystringDecode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeGet", function() { return safeGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringLength", function() { return stringLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToByteArray", function() { return stringToByteArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateArgCount", function() { return validateArgCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateCallback", function() { return validateCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateContextObject", function() { return validateContextObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateIndexedDBOpenable", function() { return validateIndexedDBOpenable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateNamespace", function() { return validateNamespace; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");




function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
  /**
   * @define {boolean} Whether this is the client Node.js SDK.
   */
  NODE_CLIENT: false,

  /**
   * @define {boolean} Whether this is the Admin Node.js SDK.
   */
  NODE_ADMIN: false,

  /**
   * Firebase SDK Version
   */
  SDK_VERSION: '${JSCORE_VERSION}'
};
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
 * Throws an error if the provided assertion is falsy
 */

var assert = function assert(assertion, message) {
  if (!assertion) {
    throw assertionError(message);
  }
};
/**
 * Returns an Error object suitable for throwing.
 */


var assertionError = function assertionError(message) {
  return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
};
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


var stringToByteArray$1 = function stringToByteArray$1(str) {
  // TODO(user): Use native implementations if/when available
  var out = [];
  var p = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);

    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
      // Surrogate Pair
      c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }

  return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */


var byteArrayToString = function byteArrayToString(bytes) {
  // TODO(user): Use native implementations if/when available
  var out = [];
  var pos = 0,
      c = 0;

  while (pos < bytes.length) {
    var c1 = bytes[pos++];

    if (c1 < 128) {
      out[c++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) {
      var c2 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
    } else if (c1 > 239 && c1 < 365) {
      // Surrogate Pair
      var _c = bytes[pos++];
      var c3 = bytes[pos++];
      var c4 = bytes[pos++];
      var u = ((c1 & 7) << 18 | (_c & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
      out[c++] = String.fromCharCode(0xd800 + (u >> 10));
      out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
    } else {
      var _c2 = bytes[pos++];
      var _c3 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 15) << 12 | (_c2 & 63) << 6 | _c3 & 63);
    }
  }

  return out.join('');
}; // We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()


var base64 = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,

  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,

  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,

  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,

  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',

  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + '+/=';
  },

  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + '-_.';
  },

  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob === 'function',

  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray: function encodeByteArray(input, webSafe) {
    if (!Array.isArray(input)) {
      throw Error('encodeByteArray takes an array as a parameter');
    }

    this.init_();
    var byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
    var output = [];

    for (var i = 0; i < input.length; i += 3) {
      var byte1 = input[i];
      var haveByte2 = i + 1 < input.length;
      var byte2 = haveByte2 ? input[i + 1] : 0;
      var haveByte3 = i + 2 < input.length;
      var byte3 = haveByte3 ? input[i + 2] : 0;
      var outByte1 = byte1 >> 2;
      var outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
      var outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
      var outByte4 = byte3 & 0x3f;

      if (!haveByte3) {
        outByte4 = 64;

        if (!haveByte2) {
          outByte3 = 64;
        }
      }

      output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
    }

    return output.join('');
  },

  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString: function encodeString(input, webSafe) {
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return btoa(input);
    }

    return this.encodeByteArray(stringToByteArray$1(input), webSafe);
  },

  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString: function decodeString(input, webSafe) {
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return atob(input);
    }

    return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
  },

  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray: function decodeStringToByteArray(input, webSafe) {
    this.init_();
    var charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
    var output = [];

    for (var i = 0; i < input.length;) {
      var byte1 = charToByteMap[input.charAt(i++)];
      var haveByte2 = i < input.length;
      var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
      ++i;
      var haveByte3 = i < input.length;
      var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      var haveByte4 = i < input.length;
      var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
      ++i;

      if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
        throw Error();
      }

      var outByte1 = byte1 << 2 | byte2 >> 4;
      output.push(outByte1);

      if (byte3 !== 64) {
        var outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
        output.push(outByte2);

        if (byte4 !== 64) {
          var outByte3 = byte3 << 6 & 0xc0 | byte4;
          output.push(outByte3);
        }
      }
    }

    return output;
  },

  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_: function init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {};
      this.charToByteMap_ = {};
      this.byteToCharMapWebSafe_ = {};
      this.charToByteMapWebSafe_ = {}; // We want quick mappings back and forth, so we precompute two maps.

      for (var i = 0; i < this.ENCODED_VALS.length; i++) {
        this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
        this.charToByteMap_[this.byteToCharMap_[i]] = i;
        this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i; // Be forgiving when decoding and correctly decode both encodings.

        if (i >= this.ENCODED_VALS_BASE.length) {
          this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
          this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
        }
      }
    }
  }
};
/**
 * URL-safe base64 encoding
 */

var base64Encode = function base64Encode(str) {
  var utf8Bytes = stringToByteArray$1(str);
  return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */


var base64urlEncodeWithoutPadding = function base64urlEncodeWithoutPadding(str) {
  // Use base64url encoding and remove padding in the end (dot characters).
  return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */


var base64Decode = function base64Decode(str) {
  try {
    return base64.decodeString(str, true);
  } catch (e) {
    console.error('base64Decode failed: ', e);
  }

  return null;
};
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
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */


function deepCopy(value) {
  return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */


function deepExtend(target, source) {
  if (!(source instanceof Object)) {
    return source;
  }

  switch (source.constructor) {
    case Date:
      // Treat Dates like scalars; if the target date object had any child
      // properties - they will be lost!
      var dateValue = source;
      return new Date(dateValue.getTime());

    case Object:
      if (target === undefined) {
        target = {};
      }

      break;

    case Array:
      // Always copy the array source and overwrite the target.
      target = [];
      break;

    default:
      // Not a plain Object - treat it as a scalar.
      return source;
  }

  for (var prop in source) {
    // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
    if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
      continue;
    }

    target[prop] = deepExtend(target[prop], source[prop]);
  }

  return target;
}

function isValidKey(key) {
  return key !== '__proto__';
}
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


var Deferred = /*#__PURE__*/function () {
  function Deferred() {
    var _this = this;

    this.reject = function () {};

    this.resolve = function () {};

    this.promise = new Promise(function (resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */


  var _proto = Deferred.prototype;

  _proto.wrapCallback = function wrapCallback(callback) {
    var _this2 = this;

    return function (error, value) {
      if (error) {
        _this2.reject(error);
      } else {
        _this2.resolve(value);
      }

      if (typeof callback === 'function') {
        // Attaching noop handler just in case developer wasn't expecting
        // promises
        _this2.promise["catch"](function () {}); // Some of our callbacks don't expect a value and our own tests
        // assert that the parameter length is 1


        if (callback.length === 1) {
          callback(error);
        } else {
          callback(error, value);
        }
      }
    };
  };

  return Deferred;
}();
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


function createMockUserToken(token, projectId) {
  if (token.uid) {
    throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
  } // Unsecured JWTs use "none" as the algorithm.


  var header = {
    alg: 'none',
    type: 'JWT'
  };
  var project = projectId || 'demo-project';
  var iat = token.iat || 0;
  var sub = token.sub || token.user_id;

  if (!sub) {
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  }

  var payload = Object.assign({
    // Set all required fields to decent defaults
    iss: "https://securetoken.google.com/" + project,
    aud: project,
    iat: iat,
    exp: iat + 3600,
    auth_time: iat,
    sub: sub,
    user_id: sub,
    firebase: {
      sign_in_provider: 'custom',
      identities: {}
    }
  }, token); // Unsecured JWTs use the empty string as a signature.

  var signature = '';
  return [base64urlEncodeWithoutPadding(JSON.stringify(header)), base64urlEncodeWithoutPadding(JSON.stringify(payload)), signature].join('.');
}
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
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */


function getUA() {
  if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') {
    return navigator['userAgent'];
  } else {
    return '';
  }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */


function isMobileCordova() {
  return typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/


function isNode() {
  try {
    return Object.prototype.toString.call(global.process) === '[object process]';
  } catch (e) {
    return false;
  }
}
/**
 * Detect Browser Environment
 */


function isBrowser() {
  return typeof self === 'object' && self.self === self;
}

function isBrowserExtension() {
  var runtime = typeof chrome === 'object' ? chrome.runtime : typeof browser === 'object' ? browser.runtime : undefined;
  return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */


function isReactNative() {
  return typeof navigator === 'object' && navigator['product'] === 'ReactNative';
}
/** Detects Electron apps. */


function isElectron() {
  return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */


function isIE() {
  var ua = getUA();
  return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */


function isUWP() {
  return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */


function isNodeSdk() {
  return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */


function isSafari() {
  return !isNode() && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */


function isIndexedDBAvailable() {
  return typeof indexedDB === 'object';
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */


function validateIndexedDBOpenable() {
  return new Promise(function (resolve, reject) {
    try {
      var preExist = true;
      var DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
      var request = self.indexedDB.open(DB_CHECK_NAME);

      request.onsuccess = function () {
        request.result.close(); // delete database only when it doesn't pre-exist

        if (!preExist) {
          self.indexedDB.deleteDatabase(DB_CHECK_NAME);
        }

        resolve(true);
      };

      request.onupgradeneeded = function () {
        preExist = false;
      };

      request.onerror = function () {
        var _a;

        reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
      };
    } catch (error) {
      reject(error);
    }
  });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */


function areCookiesEnabled() {
  if (typeof navigator === 'undefined' || !navigator.cookieEnabled) {
    return false;
  }

  return true;
}
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 */


function getGlobal() {
  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  throw new Error('Unable to locate global object.');
}
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
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // Typescript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if (e.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */


var ERROR_NAME = 'FirebaseError'; // Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types

var FirebaseError = /*#__PURE__*/function (_Error) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(FirebaseError, _Error);

  function FirebaseError(
  /** The error code for this error. */
  code, message,
  /** Custom data for this error. */
  customData) {
    var _this3;

    _this3 = _Error.call(this, message) || this;
    _this3.code = code;
    _this3.customData = customData;
    /** The custom name for all FirebaseErrors. */

    _this3.name = ERROR_NAME; // Fix For ES5
    // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

    Object.setPrototypeOf(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3), FirebaseError.prototype); // Maintains proper stack trace for where our error was thrown.
    // Only available on V8.

    if (Error.captureStackTrace) {
      Error.captureStackTrace(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3), ErrorFactory.prototype.create);
    }

    return _this3;
  }

  return FirebaseError;
}( /*#__PURE__*/Object(_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(Error));

var ErrorFactory = /*#__PURE__*/function () {
  function ErrorFactory(service, serviceName, errors) {
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }

  var _proto2 = ErrorFactory.prototype;

  _proto2.create = function create(code) {
    var customData = (arguments.length <= 1 ? undefined : arguments[1]) || {};
    var fullCode = this.service + "/" + code;
    var template = this.errors[code];
    var message = template ? replaceTemplate(template, customData) : 'Error'; // Service Name: Error message (service/code).

    var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
    var error = new FirebaseError(fullCode, fullMessage, customData);
    return error;
  };

  return ErrorFactory;
}();

function replaceTemplate(template, data) {
  return template.replace(PATTERN, function (_, key) {
    var value = data[key];
    return value != null ? String(value) : "<" + key + "?>";
  });
}

var PATTERN = /\{\$([^}]+)}/g;
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
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */

function jsonEval(str) {
  return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */


function stringify(data) {
  return JSON.stringify(data);
}
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
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


var decode = function decode(token) {
  var header = {},
      claims = {},
      data = {},
      signature = '';

  try {
    var parts = token.split('.');
    header = jsonEval(base64Decode(parts[0]) || '');
    claims = jsonEval(base64Decode(parts[1]) || '');
    signature = parts[2];
    data = claims['d'] || {};
    delete claims['d'];
  } catch (e) {}

  return {
    header: header,
    claims: claims,
    data: data,
    signature: signature
  };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


var isValidTimestamp = function isValidTimestamp(token) {
  var claims = decode(token).claims;
  var now = Math.floor(new Date().getTime() / 1000);
  var validSince = 0,
      validUntil = 0;

  if (typeof claims === 'object') {
    if (claims.hasOwnProperty('nbf')) {
      validSince = claims['nbf'];
    } else if (claims.hasOwnProperty('iat')) {
      validSince = claims['iat'];
    }

    if (claims.hasOwnProperty('exp')) {
      validUntil = claims['exp'];
    } else {
      // token will expire after 24h by default
      validUntil = validSince + 86400;
    }
  }

  return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


var issuedAtTime = function issuedAtTime(token) {
  var claims = decode(token).claims;

  if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
    return claims['iat'];
  }

  return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


var isValidFormat = function isValidFormat(token) {
  var decoded = decode(token),
      claims = decoded.claims;
  return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


var isAdmin = function isAdmin(token) {
  var claims = decode(token).claims;
  return typeof claims === 'object' && claims['admin'] === true;
};
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


function contains(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function safeGet(obj, key) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    return obj[key];
  } else {
    return undefined;
  }
}

function isEmpty(obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
}

function map(obj, fn, contextObj) {
  var res = {};

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res[key] = fn.call(contextObj, obj[key], key, obj);
    }
  }

  return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */


function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);

  for (var _i = 0, _aKeys = aKeys; _i < _aKeys.length; _i++) {
    var k = _aKeys[_i];

    if (!bKeys.includes(k)) {
      return false;
    }

    var aProp = a[k];
    var bProp = b[k];

    if (isObject(aProp) && isObject(bProp)) {
      if (!deepEqual(aProp, bProp)) {
        return false;
      }
    } else if (aProp !== bProp) {
      return false;
    }
  }

  for (var _i2 = 0, _bKeys = bKeys; _i2 < _bKeys.length; _i2++) {
    var _k = _bKeys[_i2];

    if (!aKeys.includes(_k)) {
      return false;
    }
  }

  return true;
}

function isObject(thing) {
  return thing !== null && typeof thing === 'object';
}
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
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */


function querystring(querystringParams) {
  var params = [];

  var _loop = function _loop() {
    var _Object$entries$_i = _Object$entries[_i3],
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (Array.isArray(value)) {
      value.forEach(function (arrayVal) {
        params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
      });
    } else {
      params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
  };

  for (var _i3 = 0, _Object$entries = Object.entries(querystringParams); _i3 < _Object$entries.length; _i3++) {
    _loop();
  }

  return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */


function querystringDecode(querystring) {
  var obj = {};
  var tokens = querystring.replace(/^\?/, '').split('&');
  tokens.forEach(function (token) {
    if (token) {
      var _token$split = token.split('='),
          key = _token$split[0],
          value = _token$split[1];

      obj[decodeURIComponent(key)] = decodeURIComponent(value);
    }
  });
  return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */


function extractQuerystring(url) {
  var queryStart = url.indexOf('?');

  if (!queryStart) {
    return '';
  }

  var fragmentStart = url.indexOf('#', queryStart);
  return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}
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
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */

/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */


var Sha1 = /*#__PURE__*/function () {
  function Sha1() {
    /**
     * Holds the previous values of accumulated variables a-e in the compress_
     * function.
     * @private
     */
    this.chain_ = [];
    /**
     * A buffer holding the partially computed hash result.
     * @private
     */

    this.buf_ = [];
    /**
     * An array of 80 bytes, each a part of the message to be hashed.  Referred to
     * as the message schedule in the docs.
     * @private
     */

    this.W_ = [];
    /**
     * Contains data needed to pad messages less than 64 bytes.
     * @private
     */

    this.pad_ = [];
    /**
     * @private {number}
     */

    this.inbuf_ = 0;
    /**
     * @private {number}
     */

    this.total_ = 0;
    this.blockSize = 512 / 8;
    this.pad_[0] = 128;

    for (var i = 1; i < this.blockSize; ++i) {
      this.pad_[i] = 0;
    }

    this.reset();
  }

  var _proto3 = Sha1.prototype;

  _proto3.reset = function reset() {
    this.chain_[0] = 0x67452301;
    this.chain_[1] = 0xefcdab89;
    this.chain_[2] = 0x98badcfe;
    this.chain_[3] = 0x10325476;
    this.chain_[4] = 0xc3d2e1f0;
    this.inbuf_ = 0;
    this.total_ = 0;
  }
  /**
   * Internal compress helper function.
   * @param buf Block to compress.
   * @param offset Offset of the block in the buffer.
   * @private
   */
  ;

  _proto3.compress_ = function compress_(buf, offset) {
    if (!offset) {
      offset = 0;
    }

    var W = this.W_; // get 16 big endian words

    if (typeof buf === 'string') {
      for (var i = 0; i < 16; i++) {
        // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
        // have a bug that turns the post-increment ++ operator into pre-increment
        // during JIT compilation.  We have code that depends heavily on SHA-1 for
        // correctness and which is affected by this bug, so I've removed all uses
        // of post-increment ++ in which the result value is used.  We can revert
        // this change once the Safari bug
        // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
        // most clients have been updated.
        W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
        offset += 4;
      }
    } else {
      for (var _i4 = 0; _i4 < 16; _i4++) {
        W[_i4] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
        offset += 4;
      }
    } // expand to 80 words


    for (var _i5 = 16; _i5 < 80; _i5++) {
      var t = W[_i5 - 3] ^ W[_i5 - 8] ^ W[_i5 - 14] ^ W[_i5 - 16];
      W[_i5] = (t << 1 | t >>> 31) & 0xffffffff;
    }

    var a = this.chain_[0];
    var b = this.chain_[1];
    var c = this.chain_[2];
    var d = this.chain_[3];
    var e = this.chain_[4];
    var f, k; // TODO(user): Try to unroll this loop to speed up the computation.

    for (var _i6 = 0; _i6 < 80; _i6++) {
      if (_i6 < 40) {
        if (_i6 < 20) {
          f = d ^ b & (c ^ d);
          k = 0x5a827999;
        } else {
          f = b ^ c ^ d;
          k = 0x6ed9eba1;
        }
      } else {
        if (_i6 < 60) {
          f = b & c | d & (b | c);
          k = 0x8f1bbcdc;
        } else {
          f = b ^ c ^ d;
          k = 0xca62c1d6;
        }
      }

      var _t = (a << 5 | a >>> 27) + f + e + k + W[_i6] & 0xffffffff;

      e = d;
      d = c;
      c = (b << 30 | b >>> 2) & 0xffffffff;
      b = a;
      a = _t;
    }

    this.chain_[0] = this.chain_[0] + a & 0xffffffff;
    this.chain_[1] = this.chain_[1] + b & 0xffffffff;
    this.chain_[2] = this.chain_[2] + c & 0xffffffff;
    this.chain_[3] = this.chain_[3] + d & 0xffffffff;
    this.chain_[4] = this.chain_[4] + e & 0xffffffff;
  };

  _proto3.update = function update(bytes, length) {
    // TODO(johnlenz): tighten the function signature and remove this check
    if (bytes == null) {
      return;
    }

    if (length === undefined) {
      length = bytes.length;
    }

    var lengthMinusBlock = length - this.blockSize;
    var n = 0; // Using local instead of member variables gives ~5% speedup on Firefox 16.

    var buf = this.buf_;
    var inbuf = this.inbuf_; // The outer while loop should execute at most twice.

    while (n < length) {
      // When we have no data in the block to top up, we can directly process the
      // input buffer (assuming it contains sufficient data). This gives ~25%
      // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
      // the data is provided in large chunks (or in multiples of 64 bytes).
      if (inbuf === 0) {
        while (n <= lengthMinusBlock) {
          this.compress_(bytes, n);
          n += this.blockSize;
        }
      }

      if (typeof bytes === 'string') {
        while (n < length) {
          buf[inbuf] = bytes.charCodeAt(n);
          ++inbuf;
          ++n;

          if (inbuf === this.blockSize) {
            this.compress_(buf);
            inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

            break;
          }
        }
      } else {
        while (n < length) {
          buf[inbuf] = bytes[n];
          ++inbuf;
          ++n;

          if (inbuf === this.blockSize) {
            this.compress_(buf);
            inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

            break;
          }
        }
      }
    }

    this.inbuf_ = inbuf;
    this.total_ += length;
  }
  /** @override */
  ;

  _proto3.digest = function digest() {
    var digest = [];
    var totalBits = this.total_ * 8; // Add pad 0x80 0x00*.

    if (this.inbuf_ < 56) {
      this.update(this.pad_, 56 - this.inbuf_);
    } else {
      this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
    } // Add # bits.


    for (var i = this.blockSize - 1; i >= 56; i--) {
      this.buf_[i] = totalBits & 255;
      totalBits /= 256; // Don't use bit-shifting here!
    }

    this.compress_(this.buf_);
    var n = 0;

    for (var _i7 = 0; _i7 < 5; _i7++) {
      for (var j = 24; j >= 0; j -= 8) {
        digest[n] = this.chain_[_i7] >> j & 255;
        ++n;
      }
    }

    return digest;
  };

  return Sha1;
}();
/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */


function createSubscribe(executor, onNoObservers) {
  var proxy = new ObserverProxy(executor, onNoObservers);
  return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */


var ObserverProxy = /*#__PURE__*/function () {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  function ObserverProxy(executor, onNoObservers) {
    var _this4 = this;

    this.observers = [];
    this.unsubscribes = [];
    this.observerCount = 0; // Micro-task scheduling by calling task.then().

    this.task = Promise.resolve();
    this.finalized = false;
    this.onNoObservers = onNoObservers; // Call the executor asynchronously so subscribers that are called
    // synchronously after the creation of the subscribe function
    // can still receive the very first value generated in the executor.

    this.task.then(function () {
      executor(_this4);
    })["catch"](function (e) {
      _this4.error(e);
    });
  }

  var _proto4 = ObserverProxy.prototype;

  _proto4.next = function next(value) {
    this.forEachObserver(function (observer) {
      observer.next(value);
    });
  };

  _proto4.error = function error(_error) {
    this.forEachObserver(function (observer) {
      observer.error(_error);
    });
    this.close(_error);
  };

  _proto4.complete = function complete() {
    this.forEachObserver(function (observer) {
      observer.complete();
    });
    this.close();
  }
  /**
   * Subscribe function that can be used to add an Observer to the fan-out list.
   *
   * - We require that no event is sent to a subscriber sychronously to their
   *   call to subscribe().
   */
  ;

  _proto4.subscribe = function subscribe(nextOrObserver, error, complete) {
    var _this5 = this;

    var observer;

    if (nextOrObserver === undefined && error === undefined && complete === undefined) {
      throw new Error('Missing Observer.');
    } // Assemble an Observer object when passed as callback functions.


    if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
      observer = nextOrObserver;
    } else {
      observer = {
        next: nextOrObserver,
        error: error,
        complete: complete
      };
    }

    if (observer.next === undefined) {
      observer.next = noop;
    }

    if (observer.error === undefined) {
      observer.error = noop;
    }

    if (observer.complete === undefined) {
      observer.complete = noop;
    }

    var unsub = this.unsubscribeOne.bind(this, this.observers.length); // Attempt to subscribe to a terminated Observable - we
    // just respond to the Observer with the final error or complete
    // event.

    if (this.finalized) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.task.then(function () {
        try {
          if (_this5.finalError) {
            observer.error(_this5.finalError);
          } else {
            observer.complete();
          }
        } catch (e) {// nothing
        }

        return;
      });
    }

    this.observers.push(observer);
    return unsub;
  } // Unsubscribe is synchronous - we guarantee that no events are sent to
  // any unsubscribed Observer.
  ;

  _proto4.unsubscribeOne = function unsubscribeOne(i) {
    if (this.observers === undefined || this.observers[i] === undefined) {
      return;
    }

    delete this.observers[i];
    this.observerCount -= 1;

    if (this.observerCount === 0 && this.onNoObservers !== undefined) {
      this.onNoObservers(this);
    }
  };

  _proto4.forEachObserver = function forEachObserver(fn) {
    if (this.finalized) {
      // Already closed by previous event....just eat the additional values.
      return;
    } // Since sendOne calls asynchronously - there is no chance that
    // this.observers will become undefined.


    for (var i = 0; i < this.observers.length; i++) {
      this.sendOne(i, fn);
    }
  } // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.
  ;

  _proto4.sendOne = function sendOne(i, fn) {
    var _this6 = this;

    // Execute the callback asynchronously
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.task.then(function () {
      if (_this6.observers !== undefined && _this6.observers[i] !== undefined) {
        try {
          fn(_this6.observers[i]);
        } catch (e) {
          // Ignore exceptions raised in Observers or missing methods of an
          // Observer.
          // Log error to console. b/31404806
          if (typeof console !== 'undefined' && console.error) {
            console.error(e);
          }
        }
      }
    });
  };

  _proto4.close = function close(err) {
    var _this7 = this;

    if (this.finalized) {
      return;
    }

    this.finalized = true;

    if (err !== undefined) {
      this.finalError = err;
    } // Proxy is no longer needed - garbage collect references
    // eslint-disable-next-line @typescript-eslint/no-floating-promises


    this.task.then(function () {
      _this7.observers = undefined;
      _this7.onNoObservers = undefined;
    });
  };

  return ObserverProxy;
}();
/** Turn synchronous function into one called asynchronously. */
// eslint-disable-next-line @typescript-eslint/ban-types


function async(fn, onError) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    Promise.resolve(true).then(function () {
      fn.apply(void 0, args);
    })["catch"](function (error) {
      if (onError) {
        onError(error);
      }
    });
  };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */


function implementsAnyMethods(obj, methods) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  for (var _iterator = _createForOfIteratorHelperLoose(methods), _step; !(_step = _iterator()).done;) {
    var method = _step.value;

    if (method in obj && typeof obj[method] === 'function') {
      return true;
    }
  }

  return false;
}

function noop() {// do nothing
}
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
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */


var validateArgCount = function validateArgCount(fnName, minCount, maxCount, argCount) {
  var argError;

  if (argCount < minCount) {
    argError = 'at least ' + minCount;
  } else if (argCount > maxCount) {
    argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
  }

  if (argError) {
    var error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
    throw new Error(error);
  }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */


function errorPrefix(fnName, argName) {
  return fnName + " failed: " + argName + " argument ";
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */


function validateNamespace(fnName, namespace, optional) {
  if (optional && !namespace) {
    return;
  }

  if (typeof namespace !== 'string') {
    //TODO: I should do more validation here. We only allow certain chars in namespaces.
    throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
  }
}

function validateCallback(fnName, argumentName, // eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
  if (optional && !callback) {
    return;
  }

  if (typeof callback !== 'function') {
    throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
  }
}

function validateContextObject(fnName, argumentName, context, optional) {
  if (optional && !context) {
    return;
  }

  if (typeof context !== 'object' || context === null) {
    throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
  }
}
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
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3

/**
 * @param {string} str
 * @return {Array}
 */


var stringToByteArray = function stringToByteArray(str) {
  var out = [];
  var p = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i); // Is this the lead surrogate in a surrogate pair?

    if (c >= 0xd800 && c <= 0xdbff) {
      var high = c - 0xd800; // the high 10 bits.

      i++;
      assert(i < str.length, 'Surrogate pair missing trail surrogate.');
      var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.

      c = 0x10000 + (high << 10) + low;
    }

    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if (c < 65536) {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }

  return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */


var stringLength = function stringLength(str) {
  var p = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);

    if (c < 128) {
      p++;
    } else if (c < 2048) {
      p += 2;
    } else if (c >= 0xd800 && c <= 0xdbff) {
      // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
      p += 4;
      i++; // skip trail surrogate.
    } else {
      p += 3;
    }
  }

  return p;
};
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
 * The amount of milliseconds to exponentially increase.
 */


var DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */

var DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */

var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.

/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */

var RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */

function calculateBackoffMillis(backoffCount, intervalMillis, backoffFactor) {
  if (intervalMillis === void 0) {
    intervalMillis = DEFAULT_INTERVAL_MILLIS;
  }

  if (backoffFactor === void 0) {
    backoffFactor = DEFAULT_BACKOFF_FACTOR;
  }

  // Calculates an exponentially increasing value.
  // Deviation: calculates value from count and a constant interval, so we only need to save value
  // and count to restore state.
  var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount); // A random "fuzz" to avoid waves of retries.
  // Deviation: randomFactor is required.

  var randomWait = Math.round( // A fraction of the backoff value to add/subtract.
  // Deviation: changes multiplication order to improve readability.
  RANDOM_FACTOR * currBaseValue * ( // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
  // if we add or subtract.
  Math.random() - 0.5) * 2); // Limits backoff to max to avoid effectively permanent backoff.

  return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}
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
 * Provide English ordinal letters after a number
 */


function ordinal(i) {
  if (!Number.isFinite(i)) {
    return "" + i;
  }

  return i + indicator(i);
}

function indicator(i) {
  i = Math.abs(i);
  var cent = i % 100;

  if (cent >= 10 && cent <= 20) {
    return 'th';
  }

  var dec = i % 10;

  if (dec === 1) {
    return 'st';
  }

  if (dec === 2) {
    return 'nd';
  }

  if (dec === 3) {
    return 'rd';
  }

  return 'th';
}
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


function getModularInstance(service) {
  if (service && service._delegate) {
    return service._delegate;
  } else {
    return service;
  }
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/firebase/app/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.esm.js ***!
  \*****************************************************/
/*! exports provided: FirebaseError, SDK_VERSION, _DEFAULT_ENTRY_NAME, _addComponent, _addOrOverwriteComponent, _apps, _clearComponents, _components, _getProvider, _registerComponent, _removeServiceInstance, deleteApp, getApp, getApps, initializeApp, onLog, registerVersion, setLogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/esm/index.esm2017.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirebaseError", function() { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["FirebaseError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["SDK_VERSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_DEFAULT_ENTRY_NAME", function() { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["_DEFAULT_ENTRY_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_addComponent", function() { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["_addComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_addOrOverwriteComponent", function() { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["_addOrOverwriteComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_apps", function() { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["_apps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_clearComponents", function() { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["_clearComponents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_components", function() { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["_components"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_getProvider", function() { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["_getProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_registerComponent", function() { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["_registerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_removeServiceInstance", function() { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["_removeServiceInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteApp", function() { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["deleteApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApp", function() { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["getApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApps", function() { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["getApps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLog", function() { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["onLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerVersion", function() { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["registerVersion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLogLevel", function() { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["setLogLevel"]; });



var name = "firebase";
var version = "9.6.6";
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

Object(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["registerVersion"])(name, version, 'app');

/***/ }),

/***/ "./node_modules/firebase/auth/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
  \******************************************************/
/*! exports provided: ActionCodeOperation, ActionCodeURL, AuthCredential, AuthErrorCodes, EmailAuthCredential, EmailAuthProvider, FacebookAuthProvider, FactorId, GithubAuthProvider, GoogleAuthProvider, OAuthCredential, OAuthProvider, OperationType, PhoneAuthCredential, PhoneAuthProvider, PhoneMultiFactorGenerator, ProviderId, RecaptchaVerifier, SAMLAuthProvider, SignInMethod, TwitterAuthProvider, applyActionCode, browserLocalPersistence, browserPopupRedirectResolver, browserSessionPersistence, checkActionCode, confirmPasswordReset, connectAuthEmulator, createUserWithEmailAndPassword, debugErrorMap, deleteUser, fetchSignInMethodsForEmail, getAdditionalUserInfo, getAuth, getIdToken, getIdTokenResult, getMultiFactorResolver, getRedirectResult, inMemoryPersistence, indexedDBLocalPersistence, initializeAuth, isSignInWithEmailLink, linkWithCredential, linkWithPhoneNumber, linkWithPopup, linkWithRedirect, multiFactor, onAuthStateChanged, onIdTokenChanged, parseActionCodeURL, prodErrorMap, reauthenticateWithCredential, reauthenticateWithPhoneNumber, reauthenticateWithPopup, reauthenticateWithRedirect, reload, sendEmailVerification, sendPasswordResetEmail, sendSignInLinkToEmail, setPersistence, signInAnonymously, signInWithCredential, signInWithCustomToken, signInWithEmailAndPassword, signInWithEmailLink, signInWithPhoneNumber, signInWithPopup, signInWithRedirect, signOut, unlink, updateCurrentUser, updateEmail, updatePassword, updatePhoneNumber, updateProfile, useDeviceLanguage, verifyBeforeUpdateEmail, verifyPasswordResetCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/auth */ "./node_modules/@firebase/auth/dist/esm2017/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionCodeOperation", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["ActionCodeOperation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionCodeURL", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["ActionCodeURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthCredential", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["AuthCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthErrorCodes", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["AuthErrorCodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailAuthCredential", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["EmailAuthCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailAuthProvider", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["EmailAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookAuthProvider", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["FacebookAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FactorId", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["FactorId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GithubAuthProvider", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["GithubAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleAuthProvider", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["GoogleAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OAuthCredential", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["OAuthCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OAuthProvider", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["OAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OperationType", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["OperationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneAuthCredential", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["PhoneAuthCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneAuthProvider", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["PhoneAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneMultiFactorGenerator", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["PhoneMultiFactorGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProviderId", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["ProviderId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecaptchaVerifier", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["RecaptchaVerifier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAMLAuthProvider", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["SAMLAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignInMethod", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["SignInMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TwitterAuthProvider", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["TwitterAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyActionCode", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["applyActionCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "browserLocalPersistence", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["browserLocalPersistence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "browserPopupRedirectResolver", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["browserPopupRedirectResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "browserSessionPersistence", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["browserSessionPersistence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkActionCode", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["checkActionCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "confirmPasswordReset", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["confirmPasswordReset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectAuthEmulator", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["connectAuthEmulator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUserWithEmailAndPassword", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["createUserWithEmailAndPassword"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debugErrorMap", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["debugErrorMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["deleteUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSignInMethodsForEmail", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["fetchSignInMethodsForEmail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAdditionalUserInfo", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["getAdditionalUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["getAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIdToken", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["getIdToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIdTokenResult", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["getIdTokenResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMultiFactorResolver", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["getMultiFactorResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRedirectResult", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["getRedirectResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inMemoryPersistence", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["inMemoryPersistence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexedDBLocalPersistence", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["indexedDBLocalPersistence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeAuth", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["initializeAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSignInWithEmailLink", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["isSignInWithEmailLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkWithCredential", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["linkWithCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkWithPhoneNumber", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["linkWithPhoneNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkWithPopup", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["linkWithPopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkWithRedirect", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["linkWithRedirect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multiFactor", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["multiFactor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAuthStateChanged", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["onAuthStateChanged"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onIdTokenChanged", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["onIdTokenChanged"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseActionCodeURL", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["parseActionCodeURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prodErrorMap", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["prodErrorMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reauthenticateWithCredential", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["reauthenticateWithCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reauthenticateWithPhoneNumber", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["reauthenticateWithPhoneNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reauthenticateWithPopup", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["reauthenticateWithPopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reauthenticateWithRedirect", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["reauthenticateWithRedirect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reload", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["reload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendEmailVerification", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["sendEmailVerification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendPasswordResetEmail", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["sendPasswordResetEmail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendSignInLinkToEmail", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["sendSignInLinkToEmail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPersistence", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["setPersistence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInAnonymously", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["signInAnonymously"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithCredential", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["signInWithCredential"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithCustomToken", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["signInWithCustomToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithEmailAndPassword", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["signInWithEmailAndPassword"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithEmailLink", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["signInWithEmailLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithPhoneNumber", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["signInWithPhoneNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithPopup", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["signInWithPopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithRedirect", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["signInWithRedirect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signOut", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["signOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unlink", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["unlink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateCurrentUser", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["updateCurrentUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateEmail", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["updateEmail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updatePassword", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["updatePassword"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updatePhoneNumber", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["updatePhoneNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateProfile", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["updateProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeviceLanguage", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["useDeviceLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "verifyBeforeUpdateEmail", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["verifyBeforeUpdateEmail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "verifyPasswordResetCode", function() { return _firebase_auth__WEBPACK_IMPORTED_MODULE_0__["verifyPasswordResetCode"]; });



/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return _assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};


function __rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};
function __exportStar(m, o) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
/** @deprecated */

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}
/** @deprecated */

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}
;

var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/forum/components/firebaseAuth.js":
/*!**********************************************!*\
  !*** ./src/forum/components/firebaseAuth.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return firebaseAuth; });
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/SignUpModal */ "flarum/components/SignUpModal");
/* harmony import */ var flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__);





function submitData(body) {
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.request({
    url: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute("baseUrl") + "/firebase",
    method: "POST",
    body: body
  }).then(function (payload) {
    if (payload.loggedIn) {
      window.location.reload();
    } else {
      flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.modal.show(flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default.a, payload);
    }
  });
}

function firebaseAuth(name) {
  var firebaseConfig = {
    apiKey: "AIzaSyARHFIvxuMpRVvQuf2cvrI8vb5EJXD21TA",
    authDomain: "flarum-a69af.firebaseapp.com",
    databaseURL: "https://flarum-a69af-default-rtdb.firebaseio.com",
    projectId: "flarum-a69af",
    storageBucket: "flarum-a69af.appspot.com",
    messagingSenderId: "286405272646",
    appId: "1:286405272646:web:72ccb72cd97f58a73d5647",
    measurementId: "G-LR4PT01KTS"
  }; // Initialize Firebase

  var App = Object(firebase_app__WEBPACK_IMPORTED_MODULE_1__["initializeApp"])(firebaseConfig);
  var auth = Object(firebase_auth__WEBPACK_IMPORTED_MODULE_2__["getAuth"])();

  switch (name) {
    case "google":
      var provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__["GoogleAuthProvider"](App);
      break;

    case "facebook":
      var provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__["FacebookAuthProvider"](App);
      break;

    case "github":
      var provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__["GithubAuthProvider"](App);
      break;

    case "twitter":
      var provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__["TwitterAuthProvider"](App);
      break;

    default:
      flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.alerts.show({
        type: ""
      }, "This Login Method currently Disable");
      var provider = null;
      break;
  }

  if (provider) {
    Object(firebase_auth__WEBPACK_IMPORTED_MODULE_2__["signInWithPopup"])(auth, provider).then(function (result) {
      var body = result.user.providerData;
      submitData(body);
    })["catch"](function (error) {
      console.log(error);

      if (error.message == "Firebase: Error (auth/operation-not-allowed).") {
        flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.alerts.show({
          type: "error"
        }, "This method is not allowed.");
      } else if (error.message == "Firebase: Error (auth/account-exists-with-different-credential).") {
        var email = error.customData.email;
        Object(firebase_auth__WEBPACK_IMPORTED_MODULE_2__["fetchSignInMethodsForEmail"])(auth, email).then(function (methods) {
          var providerNew = methods[0];
          var newProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__["GoogleAuthProvider"](App);
          Object(firebase_auth__WEBPACK_IMPORTED_MODULE_2__["signInWithPopup"])(auth, newProvider).then(function (result) {
            var user = result.user;
            var cred = firebase_auth__WEBPACK_IMPORTED_MODULE_2__["FacebookAuthProvider"].credential(credential.oauthAccessToken);
            Object(firebase_auth__WEBPACK_IMPORTED_MODULE_2__["linkWithCredential"])(user, cred).then(function (result) {
              var body = result.user.providerData;
              submitData(body);
            })["catch"](function (error) {
              console.log("Account linking error", error);
            });
          });
        });
      } else {}
    });
  }
}

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_firebaseAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/firebaseAuth */ "./src/forum/components/firebaseAuth.js");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_LogInButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/LogInButtons */ "flarum/forum/components/LogInButtons");
/* harmony import */ var flarum_forum_components_LogInButtons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_LogInButtons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_LogInButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/LogInButton */ "flarum/forum/components/LogInButton");
/* harmony import */ var flarum_forum_components_LogInButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_LogInButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/forum/components/SignUpModal */ "flarum/forum/components/SignUpModal");
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_8__);









flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add("adarsh/firebase", function () {
  var onlyIcons = !!Number(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.data["fof-firebase.only_icons"]);
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_forum_components_LogInButtons__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, "items", function (items) {
    var buttons = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute("fof-firebase").filter(Boolean); // console.log(app.forum.attribute('fof-firebase'));

    var googleButton = buttons.splice(buttons.indexOf(buttons.find(function (b) {
      return b.name === "google";
    })), 1);
    buttons.concat(googleButton).forEach(function (_ref) {
      var name = _ref.name,
          icon = _ref.icon;
      var className = "Button FoFLogInButton LogInButton--" + name; // Google branding does not allow inline icon, so we'll keep the full button

      if (onlyIcons && name !== "google") {
        className += " Button--icon";
      }

      items.add(name, m("div", {
        className: "LogInButtonContainer LogInButtonContainer--" + name
      }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: "Button FoFLogInButton LogInButton LogInButton--" + name,
        icon: icon,
        onclick: function onclick() {
          return Object(_components_firebaseAuth__WEBPACK_IMPORTED_MODULE_1__["default"])(name);
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans("fof-firebase.forum.log_in.with_" + name + "_button", {
        provider: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans("fof-firebase.forum.providers." + name)
      }))));
    });
  });

  if (onlyIcons) {
    // override(Button.prototype, "view", function (orig, vnode) {
    //   const child = orig(vnode);
    //   return <Tooltip text={extractText(child.children[1])}>{child}</Tooltip>;
    // });
    Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_forum_components_LogInButtons__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, "view", function (vdom) {
      vdom.attrs.className += " FoFLogInButtons--icons";
    });
  }

  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_7___default.a.prototype, "fields", function (items) {
    // If a suggested username was not provided by the firebase service, display some help text to the user.
    if (!!this.attrs.token && !!!this.attrs.username) {
      items.add("username-help", m("div", null, m("p", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans("fof-firebase.forum.signup.username_help"))), 35);
    }

    return items;
  });
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/SignUpModal":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/SignUpModal']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SignUpModal'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/LogInButton":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/LogInButton']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/LogInButton'];

/***/ }),

/***/ "flarum/forum/components/LogInButtons":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/LogInButtons']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/LogInButtons'];

/***/ }),

/***/ "flarum/forum/components/SignUpModal":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SignUpModal']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/SignUpModal'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map