(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jsEasyToHtml"] = factory();
	else
		root["jsEasyToHtml"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/js-easy-to-html.js":
/*!********************************!*\
  !*** ./lib/js-easy-to-html.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (p) {\n  if (p.tag instanceof Function) {\n    p = p.tag.apply(this, [p]);\n  }\n\n  var element = document.createElement(p.tagName || p.tag || 'div');\n  Object.keys(p).map(function (g) {\n    if (['tag', 'tagName', 'innerHTML', 'childNodes', 'style', 'setAttribute'].indexOf(g) === -1) {\n      element[g.toLowerCase()] = p[g];\n    }\n\n    if (g === 'innerHTML') {\n      element.appendChild(document.createTextNode(p[g]));\n    }\n\n    if (g === 'childNodes' && p.childNodes !== false) {\n      if (!p.childNodes instanceof Array) {\n        p.childNodes = [p.childNodes];\n      }\n\n      p.childNodes.map(function (n) {\n        if (n === true || n === false) {\n          return;\n        }\n\n        if (window['jQuery'] && n instanceof window['jQuery']) {\n          return element.appendChild(n.get(0));\n        }\n\n        if (n instanceof Element) {\n          return element.appendChild(n);\n        }\n\n        if (n instanceof Array) {\n          return element.appendChild(this({\n            'childNodes': n\n          }));\n        }\n\n        element.appendChild(this(n));\n      });\n    }\n\n    if (g === 'setAttribute') {\n      Object.keys(p.setAttribute).map(function (a) {\n        element.setAttribute(a, p.setAttribute[a]);\n      });\n    }\n\n    if (g === 'style') {\n      Object.keys(p.style).map(function (s) {\n        element.style[s] = p.style[s];\n      });\n    }\n  });\n  return element;\n};\n\n//# sourceURL=webpack://jsEasyToHtml/./lib/js-easy-to-html.js?");

/***/ }),

/***/ 0:
/*!**************************************!*\
  !*** multi ./lib/js-easy-to-html.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib/js-easy-to-html.js */\"./lib/js-easy-to-html.js\");\n\n\n//# sourceURL=webpack://jsEasyToHtml/multi_./lib/js-easy-to-html.js?");

/***/ })

/******/ });
});