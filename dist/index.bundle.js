"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Rubik&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Rubik', sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  max-height: 100%;\\r\\n  background-color: aliceblue;\\r\\n  padding: 50px 10%;\\r\\n}\\r\\n\\r\\n.to-do-container {\\r\\n  min-width: 400px;\\r\\n  overflow: hidden;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: white;\\r\\n  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.2);\\r\\n  margin: auto;\\r\\n  border-radius: 2px;\\r\\n}\\r\\n\\r\\n.to-do-header {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 1px solid grey;\\r\\n  padding: 3%;\\r\\n}\\r\\n\\r\\n.to-do-header a {\\r\\n  text-decoration: none;\\r\\n  color: inherit;\\r\\n}\\r\\n\\r\\n.to-do-new-item {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  padding: 3%;\\r\\n  border-bottom: 1px solid #e5e5e5;\\r\\n}\\r\\n\\r\\n.to-do-new-item input {\\r\\n  width: 85%;\\r\\n  border: none;\\r\\n  font-size: inherit;\\r\\n  font-style: italic;\\r\\n  color: green;\\r\\n}\\r\\n\\r\\n.to-do-new-item input:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.to-do-list {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.to-do-list-item {\\r\\n  display: flex;\\r\\n  padding: 3%;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  gap: 10px;\\r\\n  border-bottom: 1px solid #e5e5e5;\\r\\n}\\r\\n\\r\\n.to-do-list-item p {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.to-do-list-item:hover {\\r\\n  background-color: #e5e5e5;\\r\\n}\\r\\n\\r\\n.input-text {\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  text-align: left;\\r\\n  outline: none;\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n  font-size: inherit;\\r\\n}\\r\\n\\r\\ninput[type='checkbox']:checked + .input-text {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.to-do-clear-completed {\\r\\n  padding: 3%;\\r\\n  text-align: center;\\r\\n  cursor: pointer;\\r\\n  background-color: #e5e5e5;\\r\\n}\\r\\n\\r\\n.closure-button {\\r\\n  cursor: pointer;\\r\\n  filter: invert(0%);\\r\\n  width: 20px;\\r\\n}\\r\\n\\r\\n.closure-button:hover {\\r\\n  filter: invert(100%);\\r\\n}\\r\\n\\r\\n.select-all {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.select-all:hover {\\r\\n  filter: invert(50%);\\r\\n}\\r\\n\\r\\n.add-task {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.add-task:hover {\\r\\n  filter: invert(50%);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_createItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createItems.js */ \"./src/modules/createItems.js\");\n/* harmony import */ var _modules_insertNewItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/insertNewItem.js */ \"./src/modules/insertNewItem.js\");\n/* harmony import */ var _modules_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/setLocalStorage.js */ \"./src/modules/setLocalStorage.js\");\n/* harmony import */ var _modules_clearSelected_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/clearSelected.js */ \"./src/modules/clearSelected.js\");\n/* harmony import */ var _modules_deleteAll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/deleteAll.js */ \"./src/modules/deleteAll.js\");\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_variables_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/variables.js */ \"./src/modules/variables.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.cleanList)();\r\n\r\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.clearAll.addEventListener('click', () => {\r\n  (0,_modules_clearSelected_js__WEBPACK_IMPORTED_MODULE_4__.clearSelected)();\r\n  (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_6__.render)();\r\n  (0,_modules_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.setLocalStorage)();\r\n});\r\n\r\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.selectAll.addEventListener('click', () => {\r\n  (0,_modules_deleteAll_js__WEBPACK_IMPORTED_MODULE_5__.deleteAll)();\r\n  (0,_modules_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.setLocalStorage)();\r\n  (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_6__.render)();\r\n});\r\n\r\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.addTask.addEventListener('click', () => {\r\n  if (_modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.newItem.value === '') {\r\n    alert('Blank input'); // eslint-disable-line no-alert\r\n  } else {\r\n    const { value } = _modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.newItem;\r\n    (0,_modules_insertNewItem_js__WEBPACK_IMPORTED_MODULE_2__.insertNewItem)(value);\r\n    _modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.newItem.value = '';\r\n    (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_6__.render)();\r\n    (0,_modules_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.setLocalStorage)();\r\n  }\r\n});\r\n\r\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.newItem.addEventListener('keypress', (event) => {\r\n  const tecla = event.key;\r\n  const text = event.target.value;\r\n  if (tecla === 'Enter') {\r\n    (0,_modules_insertNewItem_js__WEBPACK_IMPORTED_MODULE_2__.insertNewItem)(text);\r\n    _modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.newItem.value = '';\r\n  }\r\n  (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_6__.render)();\r\n  (0,_modules_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.setLocalStorage)();\r\n});\r\n\r\nwindow.addEventListener('load', () => { // LOCAL STORAGE\r\n  if (localStorage.getItem('listItem')) {\r\n    _modules_variables_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].dataStructure.push(...JSON.parse(localStorage.getItem('listItem')));\r\n  }\r\n  for (let i = 0; i < _modules_variables_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].dataStructure.length; i += 1) {\r\n    const newObj = _modules_variables_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].dataStructure[i];\r\n    _modules_createItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].creatingNewItem(newObj.description, newObj.completed, i);\r\n  }\r\n});\r\n\r\n(0,_modules_render_js__WEBPACK_IMPORTED_MODULE_6__.render)();\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/checkedItem.js":
/*!************************************!*\
  !*** ./src/modules/checkedItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkedItem\": () => (/* binding */ checkedItem)\n/* harmony export */ });\n/* harmony import */ var _setLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setLocalStorage.js */ \"./src/modules/setLocalStorage.js\");\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n/* eslint-disable import/prefer-default-export */\r\n\r\n\r\n\r\nconst checkedItem = (labelItem, inputCheckbox, index) => {\r\n  if (inputCheckbox.checked) {\r\n    labelItem.style.backgroundColor = 'rgb(190, 255, 199)';\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dataStructure[index].completed = true;\r\n    (0,_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();\r\n  } else {\r\n    labelItem.style.backgroundColor = 'rgb(229, 229, 229)';\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dataStructure[index].completed = false;\r\n    (0,_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/checkedItem.js?");

/***/ }),

/***/ "./src/modules/clearSelected.js":
/*!**************************************!*\
  !*** ./src/modules/clearSelected.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearSelected\": () => (/* binding */ clearSelected)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n/* eslint-disable import/prefer-default-export */\r\n\r\n\r\nconst clearSelected = () => {\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure.filter((item) => !item.completed);\r\n};\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/clearSelected.js?");

/***/ }),

/***/ "./src/modules/closeButton.js":
/*!************************************!*\
  !*** ./src/modules/closeButton.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeButton\": () => (/* binding */ closeButton)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n/* eslint-disable import/prefer-default-export */\r\n\r\n\r\nconst closeButton = (index) => {\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure.splice(index, 1);\r\n  for (let i = 0; i < _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure.length; i += 1) {\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure[i].index = i;\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/closeButton.js?");

/***/ }),

/***/ "./src/modules/createItems.js":
/*!************************************!*\
  !*** ./src/modules/createItems.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dynamic)\n/* harmony export */ });\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setLocalStorage.js */ \"./src/modules/setLocalStorage.js\");\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n/* harmony import */ var _editInput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editInput.js */ \"./src/modules/editInput.js\");\n/* harmony import */ var _checkedItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkedItem.js */ \"./src/modules/checkedItem.js\");\n/* harmony import */ var _closeButton_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./closeButton.js */ \"./src/modules/closeButton.js\");\n/* harmony import */ var _icons_Trash_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/Trash.svg */ \"./src/modules/icons/Trash.svg\");\n/* eslint-disable import/prefer-default-export */\r\n/* eslint-disable import/no-cycle */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Dynamic {\r\n  static creatingNewItem = (text, completed, index) => {\r\n    const labelItem = document.createElement('label');\r\n    labelItem.classList.add('to-do-list-item');\r\n    labelItem.id = index;\r\n    if (completed) {\r\n      labelItem.style.backgroundColor = 'rgb(190, 255, 199)';\r\n    }\r\n    const inputCheckbox = document.createElement('input');\r\n    inputCheckbox.setAttribute('type', 'checkbox');\r\n    inputCheckbox.checked = completed;\r\n    const textItem = document.createElement('input');\r\n    textItem.setAttribute('class', 'input-text');\r\n    textItem.value = text;\r\n    textItem.id = `id_${index}`;\r\n    const inputClosure = document.createElement('img');\r\n    inputClosure.setAttribute('class', 'closure-button');\r\n    inputClosure.setAttribute('src', _icons_Trash_svg__WEBPACK_IMPORTED_MODULE_6__);\r\n\r\n    // appendingChild\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_2__.toDoList.appendChild(labelItem);\r\n    labelItem.appendChild(inputCheckbox);\r\n    labelItem.appendChild(textItem);\r\n    labelItem.appendChild(inputClosure);\r\n\r\n    // inputClosureButton\r\n    inputClosure.addEventListener('click', () => {\r\n      (0,_closeButton_js__WEBPACK_IMPORTED_MODULE_5__.closeButton)(index);\r\n      (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)();\r\n      (0,_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)();\r\n    });\r\n\r\n    // Strikethrough lines in texts\r\n    labelItem.addEventListener('click', () => {\r\n      (0,_checkedItem_js__WEBPACK_IMPORTED_MODULE_4__.checkedItem)(labelItem, inputCheckbox, index);\r\n    });\r\n\r\n    // Editing input of list item\r\n    window.addEventListener('input', (e) => {\r\n      if (e.target.classList.contains('input-text')) {\r\n        const inputText = e.target;\r\n        const inputId = Number(inputText.id.split('_')[1]);\r\n        (0,_editInput_js__WEBPACK_IMPORTED_MODULE_3__.editInput)(inputText, inputId);\r\n        (0,_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)();\r\n      }\r\n    });\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/createItems.js?");

/***/ }),

/***/ "./src/modules/deleteAll.js":
/*!**********************************!*\
  !*** ./src/modules/deleteAll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteAll\": () => (/* binding */ deleteAll)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n/* eslint-disable import/prefer-default-export */\n\n\nconst deleteAll = () => {\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure = [];\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/deleteAll.js?");

/***/ }),

/***/ "./src/modules/editInput.js":
/*!**********************************!*\
  !*** ./src/modules/editInput.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editInput\": () => (/* binding */ editInput)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n/* eslint-disable import/prefer-default-export */\r\n\r\n\r\nconst editInput = (text, id) => {\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure[id].description = text.value;\r\n};\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/editInput.js?");

/***/ }),

/***/ "./src/modules/insertNewItem.js":
/*!**************************************!*\
  !*** ./src/modules/insertNewItem.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"insertNewItem\": () => (/* binding */ insertNewItem)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n/* eslint-disable import/prefer-default-export */\n\n\nconst insertNewItem = (text) => {\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure.push(\n    {\n      description: text,\n      completed: false,\n      index: _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure.length,\n    },\n  );\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/insertNewItem.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n/* harmony import */ var _createItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createItems.js */ \"./src/modules/createItems.js\");\n/* eslint-disable import/prefer-default-export */\r\n/* eslint-disable import/no-cycle */\r\n\r\n\r\n\r\nconst render = () => {\r\n  (0,_variables_js__WEBPACK_IMPORTED_MODULE_0__.cleanList)();\r\n  const { dataStructure } = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n  for (let i = 0; i < dataStructure.length; i += 1) {\r\n    _createItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].creatingNewItem(dataStructure[i].description, dataStructure[i].completed, i);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/setLocalStorage.js":
/*!****************************************!*\
  !*** ./src/modules/setLocalStorage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setLocalStorage\": () => (/* binding */ setLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n/* eslint-disable import/prefer-default-export */\n\n\nconst setLocalStorage = () => {\n  localStorage.setItem('listItem', JSON.stringify(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure));\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/setLocalStorage.js?");

/***/ }),

/***/ "./src/modules/variables.js":
/*!**********************************!*\
  !*** ./src/modules/variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"cleanList\": () => (/* binding */ cleanList),\n/* harmony export */   \"clearAll\": () => (/* binding */ clearAll),\n/* harmony export */   \"default\": () => (/* binding */ DataClass),\n/* harmony export */   \"newItem\": () => (/* binding */ newItem),\n/* harmony export */   \"selectAll\": () => (/* binding */ selectAll),\n/* harmony export */   \"toDoList\": () => (/* binding */ toDoList)\n/* harmony export */ });\nconst cleanList = () => {\r\n  const toDoList = document.querySelector('.to-do-list');\r\n  while (toDoList.firstChild) {\r\n    toDoList.removeChild(toDoList.lastChild);\r\n  }\r\n};\r\n\r\nconst clearAll = document.querySelector('.to-do-clear-completed');\r\nconst selectAll = document.querySelector('.select-all');\r\nconst addTask = document.querySelector('.add-task');\r\nconst newItem = document.getElementById('newItem');\r\nconst toDoList = document.querySelector('.to-do-list');\r\nclass DataClass {\r\n      static dataStructure = []\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/variables.js?");

/***/ }),

/***/ "./src/modules/icons/Trash.svg":
/*!*************************************!*\
  !*** ./src/modules/icons/Trash.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"14eeb2832bb59ec35b37.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/modules/icons/Trash.svg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);