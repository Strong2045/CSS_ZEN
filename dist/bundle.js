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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const inp = document.getElementsByClassName(\"selector\")[0];\nconst but_find = document.getElementsByClassName(\"selector-find\")[0];\nconst but_next = document.getElementsByClassName(\"selector-next\")[0];\nconst but_prev = document.getElementsByClassName(\"selector-prev\")[0];\nconst tops = document.getElementsByClassName(\"nav-top\")[0];\nconst bottom = document.getElementsByClassName(\"nav-bottom\")[0];\nconst left = document.getElementsByClassName(\"nav-left\")[0];\nconst right = document.getElementsByClassName(\"nav-right\")[0];\nlet search_sel = \"\";\nlet parent_sel = \"\";\nconst sel = \"\";\nlet timer = 0;\n\nconst style = document.createElement(\"style\");\nstyle.type = \"text/css\";\nstyle.innerHTML =\n  \".select {outline: solid red 5px;background-color: lightblue;}\";\ndocument.getElementsByTagName(\"head\")[0].appendChild(style);\n\nfunction clears(param) {\n  const res = param.slice(1, param.length);\n  if (res.trim() !== undefined && res.trim() !== \"\") {\n    const arr = document.querySelectorAll(param);\n    if (parent_sel !== \"\") parent_sel.classList.remove(\"select\");\n    for (let i = 0; i < arr.length; i++) {\n      arr[i].classList.remove(\"select\");\n    }\n  }\n}\n\nfunction button_off() {\n  but_next.disabled = true;\n  but_prev.disabled = true;\n}\n\nfunction button_on() {\n  tops.disabled = false;\n  bottom.disabled = false;\n  left.disabled = false;\n  right.disabled = false;\n}\n\nbut_find.onclick = function () {\n  timer = 0;\n  const text = inp.value.trim();\n  if (text !== undefined && text !== \"\") {\n    const arr = document.querySelectorAll(text);\n    if (arr.length > 1) {\n      but_next.disabled = false;\n      but_prev.disabled = false;\n    }\n    clears(search_sel);\n    search_sel = text;\n    clears(search_sel);\n    button_on();\n    arr[timer].classList.add(\"select\");\n  }\n};\nbut_next.onclick = function () {\n  const arr = document.querySelectorAll(search_sel);\n  if (arr.length > 1 && timer < arr.length - 1) {\n    timer++;\n    if (search_sel !== \"\") {\n      clears(search_sel);\n      sel === arr[timer];\n      try {\n        arr[timer].classList.add(\"select\");\n      } catch {}\n    }\n  }\n};\nbut_prev.onclick = function () {\n  const arr = document.querySelectorAll(search_sel);\n  if (arr.length > 1 && timer > 0) {\n    timer--;\n    if (search_sel !== \"\") {\n      clears(search_sel);\n      sel = arr[timer];\n      arr[timer].classList.add(\"select\");\n    }\n  }\n};\n\ntops.onclick = function () {\n  const elem = sel.parentNode;\n  if (elem === null) return 0;\n  clears(search_sel);\n  elem.classList.add(\"select\");\n  parent_sel = elem;\n  button_off();\n};\n\nbottom.onclick = function () {\n  const elem = sel.firstElementChild;\n  if (elem === null) return 0;\n  clears(search_sel);\n  elem.classList.add(\"select\");\n  parent_sel = elem;\n  button_off();\n};\n\nleft.onclick = function () {\n  const elem = document.querySelector(search_sel).previousElementSibling;\n  if (elem === null) return 0;\n  clears(search_sel);\n  elem.classList.add(\"select\");\n  parent_sel = elem;\n  button_off();\n};\n\nright.onclick = function () {\n  const elem = document.querySelector(search_sel).nextElementSibling;\n  if (elem === null) return 0;\n  clears(search_sel);\n  elem.classList.add(\"select\");\n  parent_sel = elem;\n  button_off();\n};\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });