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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderer_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer/renderer */ \"./src/renderer/renderer.js\");\n\n\nconst loadPage = async (page) => {\n  const response = await fetch(page);\n\n  if (response.status !== 200) {\n    console.log(`Looks like there was a problem. Status Code: ${response.status}`);\n  } else {\n    const data = await response.json();\n    Object(_renderer_renderer__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(data, document.getElementById('contentPane'));\n  }\n};\n\nloadPage('page.json');\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/renderer/page-response-parser.js":
/*!**********************************************!*\
  !*** ./src/renderer/page-response-parser.js ***!
  \**********************************************/
/*! exports provided: getRenderer, processChildren, parsePage, createModelObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRenderer\", function() { return getRenderer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"processChildren\", function() { return processChildren; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parsePage\", function() { return parsePage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createModelObject\", function() { return createModelObject; });\n/* harmony import */ var _widgets_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../widgets/button */ \"./src/widgets/button.js\");\n/* harmony import */ var _widgets_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widgets/form */ \"./src/widgets/form.js\");\n/* harmony import */ var _widgets_hbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/hbox */ \"./src/widgets/hbox.js\");\n/* harmony import */ var _widgets_text_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/text-input */ \"./src/widgets/text-input.js\");\n/* harmony import */ var _widgets_unimplemented_widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/unimplemented_widget */ \"./src/widgets/unimplemented_widget.js\");\n\n\n\n\n\n\nlet widgetFactories;\n\nconst getRenderer = (widgetJson, pageModel) => {\n  if (widgetFactories.hasOwnProperty(widgetJson.widget_name)) {\n    return widgetFactories[widgetJson.widget_name](widgetJson, pageModel);\n  }\n\n  return Object(_widgets_unimplemented_widget__WEBPACK_IMPORTED_MODULE_4__[\"unimplementedWidgetFactory\"])(widgetJson, pageModel);\n};\n\nconst processChildren = (page, pageModel) => {\n  const children = [];\n  Object.keys(page).forEach((key) => {\n    const obj = page[key];\n    if (typeof obj === 'object') {\n      if (Array.isArray(obj)) {\n        for (const i in obj) {\n          children.push(getRenderer(obj[i], pageModel));\n        }\n      } else {\n        children.push(getRenderer(obj, pageModel));\n      }\n    }\n  });\n\n  return children;\n};\n\nconst parsePage = (json, pageModel) => {\n  if (!widgetFactories) {\n    widgetFactories = {\n      form: _widgets_form__WEBPACK_IMPORTED_MODULE_1__[\"formFactory\"],\n      text_input: _widgets_text_input__WEBPACK_IMPORTED_MODULE_3__[\"textInputFactory\"],\n      hbox: _widgets_hbox__WEBPACK_IMPORTED_MODULE_2__[\"hboxFactory\"],\n      button: _widgets_button__WEBPACK_IMPORTED_MODULE_0__[\"buttonFactory\"],\n    };\n  }\n\n  return processChildren(json[0].page, pageModel);\n};\n\n\nconst createModelObject = (widgetJson, pageModel) => {\n  if (widgetJson.hasOwnProperty('id')) {\n    pageModel[widgetJson.id] = widgetJson;\n  }\n\n  return widgetJson;\n};\n\n\n//# sourceURL=webpack:///./src/renderer/page-response-parser.js?");

/***/ }),

/***/ "./src/renderer/renderer.js":
/*!**********************************!*\
  !*** ./src/renderer/renderer.js ***!
  \**********************************/
/*! exports provided: removeAllChildren, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeAllChildren\", function() { return removeAllChildren; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _page_response_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-response-parser */ \"./src/renderer/page-response-parser.js\");\n\r\n\r\nconst removeAllChildren = (element) => {\r\n  while (element.hasChildNodes()) {\r\n    element.removeChild(element.firstChild);\r\n  }\r\n};\r\n\r\nconst render = (json, contentPane) => {\r\n  removeAllChildren(contentPane);\r\n\r\n  const $json = [json];\r\n  const model = {};\r\n  const views = Object(_page_response_parser__WEBPACK_IMPORTED_MODULE_0__[\"parsePage\"])($json, model);\r\n\r\n  for (const view in views) {\r\n    contentPane.appendChild(views[view]);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/renderer/renderer.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: submitForm, generateRow, generateWidgetColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitForm\", function() { return submitForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateRow\", function() { return generateRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateWidgetColumn\", function() { return generateWidgetColumn; });\nconst submitForm = async (uri, postData) => {\n  try {\n    const response = await fetch(uri, {\n      method: 'post',\n      body: JSON.stringify(postData),\n    });\n    const responseText = await response.text();\n\n    alert(responseText);\n  } catch (e) {\n    alert(e);\n  }\n};\n\nconst generateRow = (widgetLabel) => {\n  if (widgetLabel == null) return null;\n\n  const tr = document.createElement('tr');\n  const labelCell = document.createElement('td');\n  const span = document.createElement('span');\n  const label = widgetLabel;\n  span.textContent = label;\n  span.style.float = 'right';\n\n  labelCell.appendChild(span);\n  tr.appendChild(labelCell);\n\n  return tr;\n};\n\nconst generateWidgetColumn = (widget) => {\n  if (widget == null) return null;\n\n  const widgetColumn = document.createElement('td');\n  widgetColumn.appendChild(widget);\n\n  return widgetColumn;\n};\n\n\n//# sourceURL=webpack:///./src/utils/utils.js?");

/***/ }),

/***/ "./src/widgets/button.js":
/*!*******************************!*\
  !*** ./src/widgets/button.js ***!
  \*******************************/
/*! exports provided: buttonFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttonFactory\", function() { return buttonFactory; });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n\n\nconst buttonFactory = (widgetJson, model) => {\n  const button = document.createElement('button');\n  const uri = widgetJson.action;\n  button.textContent = widgetJson.label;\n\n  button.addEventListener('click', () => {\n    const postData = {};\n    //let validation = false;\n    let unfilledArray = [];\n\n\n    for (const item in model) {\n      if (model[item].required == true && model[item].value === '') {\n        unfilledArray.push(model[item].id);\n      }\n      postData[item] = model[item].value;\n    }\n\n    console.log(unfilledArray.length);\n\n    if (unfilledArray.length > 0) {\n\n      const form = document.createElement('table');\n      const tableRow = _utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"generateRow\"]('The validation errors:\\n');\n      unfilledArray.forEach(function(element) {\n      const anchor = document.createElement('a');\n      anchor.href = `javascript:document.getElementById('${element}').focus()`;\n      anchor.innerText = `| The ${element} field is required. | `;\n      const widgetColumn = _utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"generateWidgetColumn\"](anchor);\n      tableRow.appendChild(widgetColumn);\n      const x = document.getElementById('contentPane').appendChild(tableRow)\n    });\n\n    } else {\n      _utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"submitForm\"](uri, postData);\n    }\n\n  });\n\n  return button;\n};\n\n\n//# sourceURL=webpack:///./src/widgets/button.js?");

/***/ }),

/***/ "./src/widgets/form.js":
/*!*****************************!*\
  !*** ./src/widgets/form.js ***!
  \*****************************/
/*! exports provided: formFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formFactory\", function() { return formFactory; });\n/* harmony import */ var _renderer_page_response_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer/page-response-parser */ \"./src/renderer/page-response-parser.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n\r\n\r\n\r\nconst formFactory = (widgetJson, model) => {\r\n  const children = Object(_renderer_page_response_parser__WEBPACK_IMPORTED_MODULE_0__[\"processChildren\"])(widgetJson, model);\r\n  const form = document.createElement('table');\r\n\r\n  for (const child in children) {\r\n    const tableRow = _utils_utils__WEBPACK_IMPORTED_MODULE_1__[\"generateRow\"](widgetJson.children[child].label);\r\n    console.log('----> ',children);\r\n    const widgetColumn = _utils_utils__WEBPACK_IMPORTED_MODULE_1__[\"generateWidgetColumn\"](children[child]);\r\n\r\n    tableRow.appendChild(widgetColumn);\r\n    form.appendChild(tableRow);\r\n  }\r\n\r\n  return form;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/widgets/form.js?");

/***/ }),

/***/ "./src/widgets/hbox.js":
/*!*****************************!*\
  !*** ./src/widgets/hbox.js ***!
  \*****************************/
/*! exports provided: hboxFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hboxFactory\", function() { return hboxFactory; });\n/* harmony import */ var _renderer_page_response_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer/page-response-parser */ \"./src/renderer/page-response-parser.js\");\n\r\n\r\nconst hboxFactory = (widgetJson, model) => {\r\n  const hbox = document.createElement('div');\r\n  const children = Object(_renderer_page_response_parser__WEBPACK_IMPORTED_MODULE_0__[\"processChildren\"])(widgetJson, model);\r\n  for (const child in children) {\r\n    hbox.appendChild(children[child]);\r\n  }\r\n  return hbox;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/widgets/hbox.js?");

/***/ }),

/***/ "./src/widgets/text-input.js":
/*!***********************************!*\
  !*** ./src/widgets/text-input.js ***!
  \***********************************/
/*! exports provided: textInputFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"textInputFactory\", function() { return textInputFactory; });\n/* harmony import */ var _renderer_page_response_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer/page-response-parser */ \"./src/renderer/page-response-parser.js\");\n\r\n\r\nconst textInputFactory = (widgetJson, model) => {\r\n  const data = Object(_renderer_page_response_parser__WEBPACK_IMPORTED_MODULE_0__[\"createModelObject\"])(widgetJson, model);\r\n  const div = document.createElement('div');\r\n  const input = document.createElement('input');\r\n\r\n  if (data.value != null) {\r\n    input.value = data.value;\r\n      input.id = data.id;\r\n  }\r\n  console.log('data',data);\r\n  input.type = 'text';\r\n  input.setAttribute(\"required\",\"required\");\r\n\r\n  div.appendChild(input);\r\n  input.addEventListener('input', () => {\r\n    data.value = input.value;\r\n  });\r\n\r\n  return div;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/widgets/text-input.js?");

/***/ }),

/***/ "./src/widgets/unimplemented_widget.js":
/*!*********************************************!*\
  !*** ./src/widgets/unimplemented_widget.js ***!
  \*********************************************/
/*! exports provided: unimplementedWidgetFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unimplementedWidgetFactory\", function() { return unimplementedWidgetFactory; });\nconst unimplementedWidgetFactory = (widgetJson) => {\n  // const widget = document.createElement('p');\n  const widget = document.createElement('select');\n\n  //widget.options = widgetJson.items;\n  // widget.textContent = `${JSON.stringify(widgetJson)} widget has not been implementedw`;\n  // widget.style.color = 'red';\n  // widget.style.fontStyle = 'italic';\n  const items = widgetJson.items;\n  for (let i = 0; i < items.length; i++) {\n    let option = document.createElement('option');\n    option.value = items[i].value;\n    option.text = items[i].value;\n    widget.appendChild(option);\n  }\n\n  return widget;\n};\n\n\n//# sourceURL=webpack:///./src/widgets/unimplemented_widget.js?");

/***/ })

/******/ });