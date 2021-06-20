(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin"],{

/***/ "./assets/css/tail.css":
/*!*****************************!*\
  !*** ./assets/css/tail.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src??postcss!./tail.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./assets/css/tail.css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"6300bbad\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./assets/css/tail.css?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// import 'tablesaw/dist/tablesaw.css'\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App'\n});\n\n//# sourceURL=webpack:///./src/admin/App.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tablePreview.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/tablePreview.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: ['cellItems', 'tableTitle'],\n\n  mounted() {},\n\n  computed: {\n    headCells() {\n      return this.cellItems.filter((e, i) => i == 0);\n    },\n\n    nonHeaderCells() {\n      return this.cellItems.filter((e, i) => i !== 0);\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/admin/components/tablePreview.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Home.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/Home.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xlsx */ \"./node_modules/xlsx/xlsx.js\");\n/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_tablePreview_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/tablePreview.vue */ \"./src/admin/components/tablePreview.vue\");\n/* harmony import */ var canvas_datagrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! canvas-datagrid */ \"./node_modules/canvas-datagrid/dist/canvas-datagrid.module.js\");\n/* harmony import */ var tablesaw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tablesaw */ \"./node_modules/tablesaw/dist/tablesaw.js\");\n/* harmony import */ var tablesaw__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tablesaw__WEBPACK_IMPORTED_MODULE_3__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nconst make_cols = refstr => Array(xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.decode_range(refstr).e.c + 1).fill(0).map((x, i) => ({\n  name: xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.encode_col(i),\n  key: i\n}));\n\nconst _SheetJSFT = [\"xlsx\", \"xlsb\", \"xlsm\", \"xls\", \"xml\", \"csv\", \"txt\", \"ods\", \"fods\", \"uos\", \"sylk\", \"dif\", \"dbf\", \"prn\", \"qpw\", \"123\", \"wb*\", \"wq*\", \"html\", \"htm\"].map(function (x) {\n  return \".\" + x;\n}).join(\",\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      grid: {\n        data: []\n      },\n      SheetJSFT: _SheetJSFT,\n      tabNavigation: 0,\n      tabActiveClass: 'border-l border-t border-r rounded-t text-blue-700 active',\n      tabInactiveClass: 'text-blue-500 hover:text-blue-800',\n      tableTitle: ''\n    };\n  },\n\n  methods: {\n    _suppress(evt) {\n      evt.stopPropagation();\n      evt.preventDefault();\n    },\n\n    _drop(evt) {\n      evt.stopPropagation();\n      evt.preventDefault();\n      const files = evt.dataTransfer.files;\n      if (files && files[0]) this._file(files[0]);\n    },\n\n    _change(evt) {\n      const files = evt.target.files;\n      if (files && files[0]) this._file(files[0]);\n    },\n\n    _export(evt) {\n      /* convert state to workbook */\n      const ws = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.aoa_to_sheet(this.data);\n      const wb = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.book_new();\n      xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.book_append_sheet(wb, ws, \"SheetJS\");\n      /* generate file and send to client */\n\n      xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.writeFile(wb, \"sheetjs.xlsx\");\n    },\n\n    to_json(workbook) {\n      if (workbook.SSF) xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.SSF.load_table(workbook.SSF);\n      var result = {};\n      workbook.SheetNames.forEach(function (sheetName) {\n        var roa = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.sheet_to_json(workbook.Sheets[sheetName], {\n          raw: false,\n          header: 1\n        });\n        if (roa.length > 0) result[sheetName] = roa;\n      });\n      return result;\n    },\n\n    _file(file) {\n      /* Boilerplate to set up FileReader */\n      const reader = new FileReader();\n\n      reader.onload = e => {\n        /* Parse data */\n        const bstr = e.target.result;\n        const wb = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.read(bstr, {\n          type: 'binary'\n        });\n        /* Get first worksheet */\n\n        const wsname = wb.SheetNames[0];\n        var json = this.to_json(wb)[wsname];\n        const ws = wb.Sheets[wsname];\n        /* Convert array of arrays */\n\n        const data = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.sheet_to_json(ws, {\n          raw: true,\n          cellDates: false\n        });\n        /* Update state */\n\n        this.grid = {\n          data: json\n        };\n        this.cols = make_cols(ws['!ref']);\n      };\n\n      reader.readAsBinaryString(file);\n    },\n\n    handleTabSwitch(event) {\n      let selectedTabIndex = parseInt(event.target.getAttribute('data-tab-index')); // this.$refs.grid\n\n      debugger;\n\n      if (typeof this.$refs.grid !== 'undefined') {\n        try {\n          this.$refs.grid.endEdit();\n        } catch (error) {// no need to handle\n        }\n      }\n\n      debugger;\n      this.tabNavigation = selectedTabIndex;\n\n      if (selectedTabIndex == 1) {\n        debugger;\n        setTimeout(() => {\n          let tablePreview = document.getElementById('table-preview');\n          Tablesaw.init(tablePreview);\n        }, 3000);\n      }\n\n      ;\n    },\n\n    handleGridEvent(e, v, i, c) {\n      debugger;\n      this.$refs.grid.setActiveCell(null);\n    },\n\n    handleRightClick(e, i, v, c) {\n      debugger;\n      e.items.push({\n        title: 'Delete this row',\n        click: function (w, q) {\n          this.deleteRow(e.cell.boundRowIndex);\n          console.log(e.cell.value, e.cell.data);\n        }\n      }, {\n        title: 'Add row',\n        click: function () {\n          // debugger;\n          // this.addRow([]);\n          this.insertRow([], e.cell.boundRowIndex);\n        }\n      });\n    }\n\n  },\n  computed: {\n    canvasHeight() {\n      return window.innerHeight - 200 + 'px';\n    },\n\n    canvasWidth() {\n      return window.innerWidth - 300 + 'px';\n    }\n\n  },\n  components: {\n    tablePreview: _components_tablePreview_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n\n  mounted() {// Tablesaw.init();\n  }\n\n});\n\n//# sourceURL=webpack:///./src/admin/pages/Home.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Settings.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/Settings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Settings',\n\n  data() {\n    return {};\n  }\n\n});\n\n//# sourceURL=webpack:///./src/admin/pages/Settings.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./assets/css/tail.css":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./assets/css/tail.css ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/css/tail.css?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/App.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/App.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/admin/App.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Home.vue?vue&type=style&index=0&id=9e5983fa&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/Home.vue?vue&type=style&index=0&id=9e5983fa&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/admin/pages/Home.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/App.vue?vue&type=template&id=3a030f38&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/App.vue?vue&type=template&id=3a030f38& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      staticClass:\n        \"border mx-auto rounded p-6 tab-component bg-gray-100 w-full\",\n      attrs: { id: \"vue-backend-app\" }\n    },\n    [_vm._m(0), _vm._v(\" \"), _c(\"router-view\")],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"relative flex items-center justify-between\" },\n      [\n        _c(\n          \"div\",\n          {\n            staticClass:\n              \"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start\"\n          },\n          [\n            _c(\n              \"h1\",\n              { staticClass: \"capitalize font-medium text-3xl font-sans\" },\n              [_vm._v(\"WP Spreadsheet & Table Builder\")]\n            )\n          ]\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"button\",\n          { staticClass: \"bg-blue-500 hover:bg-blue-800 text-white py-2 px-4\" },\n          [_vm._v(\"Save\")]\n        )\n      ]\n    )\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tablePreview.vue?vue&type=template&id=71719d2a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/tablePreview.vue?vue&type=template&id=71719d2a& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"table-preview\" }, [\n    _c(\n      \"div\",\n      {\n        staticClass:\n          \"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\n      },\n      [\n        _c(\"div\", { staticClass: \"block w-full overflow-x-auto\" }, [\n          _vm.tableTitle.length\n            ? _c(\"div\", { staticClass: \"rounded-t mb-0 px-4 py-3 border-0\" }, [\n                _c(\n                  \"div\",\n                  {\n                    staticClass:\n                      \"relative w-full px-4 max-w-full flex-grow flex-1\"\n                  },\n                  [\n                    _c(\n                      \"h3\",\n                      {\n                        staticClass: \"font-semibold text-base text-blueGray-700\"\n                      },\n                      [_vm._v(_vm._s(_vm.tableTitle))]\n                    ),\n                    _vm._v(\" \"),\n                    _c(\n                      \"div\",\n                      _vm._b(\n                        {},\n                        \"div\",\n                        { \"other-attr\": _vm.cellItems[0] },\n                        false\n                      )\n                    )\n                  ]\n                )\n              ])\n            : _vm._e(),\n          _vm._v(\" \"),\n          _c(\"table\", { staticClass: \"min-w-full leading-normal\" }, [\n            _c(\"thead\", [\n              _c(\n                \"tr\",\n                _vm._l(_vm.headCells[0], function(cell, key1) {\n                  return _c(\n                    \"th\",\n                    {\n                      key: key1,\n                      staticClass:\n                        \"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider\"\n                    },\n                    [_vm._v(_vm._s(cell))]\n                  )\n                }),\n                0\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\n              \"tbody\",\n              _vm._l(_vm.nonHeaderCells, function(row, key) {\n                return _c(\n                  \"tr\",\n                  { key: key },\n                  _vm._l(row, function(cell, key1) {\n                    return _c(\n                      \"td\",\n                      {\n                        key: key1,\n                        staticClass:\n                          \"px-5 py-3 border-b border-gray-200 bg-white text-sm\"\n                      },\n                      [\n                        _c(\n                          \"p\",\n                          { staticClass: \"text-gray-900 whitespace-no-wrap\" },\n                          [\n                            _vm._v(\n                              \"\\n                      \" +\n                                _vm._s(cell) +\n                                \"\\n                    \"\n                            )\n                          ]\n                        )\n                      ]\n                    )\n                  }),\n                  0\n                )\n              }),\n              0\n            )\n          ])\n        ])\n      ]\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/tablePreview.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Home.vue?vue&type=template&id=9e5983fa&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/Home.vue?vue&type=template&id=9e5983fa&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      on: { drop: _vm._drop, dragenter: _vm._suppress, dragover: _vm._suppress }\n    },\n    [\n      _c(\"form\", [\n        _c(\"div\", { staticClass: \"mb-4\" }, [\n          _c(\n            \"label\",\n            { staticClass: \"block uppercase tracking-wide text-xs font-bold\" },\n            [_vm._v(\"Name\")]\n          ),\n          _vm._v(\" \"),\n          _c(\"input\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.tableTitle,\n                expression: \"tableTitle\"\n              }\n            ],\n            staticClass:\n              \"block w-full focus:outline-0 bg-white py-3 px-6 mb-2 sm:mb-0\",\n            attrs: {\n              type: \"text\",\n              name: \"name\",\n              placeholder: \"Enter the Table Name\",\n              required: \"\"\n            },\n            domProps: { value: _vm.tableTitle },\n            on: {\n              input: function($event) {\n                if ($event.target.composing) {\n                  return\n                }\n                _vm.tableTitle = $event.target.value\n              }\n            }\n          })\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"mb-4\" }, [\n          _c(\n            \"label\",\n            { staticClass: \"block uppercase tracking-wide text-xs font-bold\" },\n            [_vm._v(\"Upload a Spreadsheet\")]\n          ),\n          _vm._v(\" \"),\n          _c(\"input\", {\n            staticClass: \"w-full shadow-inner p-4 border-0\",\n            attrs: { type: \"file\", id: \"file\", accept: _vm.SheetJSFT },\n            on: { change: _vm._change }\n          })\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", { staticClass: \"flex main-nav border-b tab-buttons\" }, [\n        _c(\"li\", { staticClass: \"mr-1\" }, [\n          _c(\n            \"button\",\n            {\n              staticClass:\n                \"tab-item bg-white inline-block py-2 px-4 font-semibold\",\n              class: [\n                _vm.tabNavigation == 0\n                  ? _vm.tabActiveClass\n                  : _vm.tabInactiveClass\n              ],\n              attrs: { \"data-tab-index\": \"0\" },\n              on: { click: _vm.handleTabSwitch }\n            },\n            [_vm._v(\"Excel Sheet\")]\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", { staticClass: \"mr-1\" }, [\n          _c(\n            \"button\",\n            {\n              staticClass:\n                \"tab-item bg-white inline-block py-2 px-4 font-semibold\",\n              class: [\n                _vm.tabNavigation == 1\n                  ? _vm.tabActiveClass\n                  : _vm.tabInactiveClass\n              ],\n              attrs: { \"data-tab-index\": \"1\" },\n              on: { click: _vm.handleTabSwitch }\n            },\n            [_vm._v(\"Table\")]\n          )\n        ])\n      ]),\n      _vm._v(\" \"),\n      _vm.tabNavigation == 0\n        ? _c(\"div\", [\n            _c(\n              \"div\",\n              { staticClass: \"px-5 py-3 w-full h-full\" },\n              [\n                _vm.grid.data.length\n                  ? _c(\"canvas-datagrid\", {\n                      ref: \"grid\",\n                      style: {\n                        width: _vm.canvasWidth,\n                        height: _vm.canvasHeight\n                      },\n                      domProps: { data: _vm.grid.data },\n                      on: {\n                        contextmenu: _vm.handleRightClick,\n                        sortcolumn: _vm.handleGridEvent\n                      }\n                    })\n                  : _vm._e()\n              ],\n              1\n            )\n          ])\n        : _vm._e(),\n      _vm._v(\" \"),\n      _vm.tabNavigation == 1\n        ? _c(\"div\", [\n            _c(\n              \"div\",\n              { staticClass: \"px-5 py-3\" },\n              [\n                _vm.grid.data.length\n                  ? _c(\"table-preview\", {\n                      attrs: {\n                        cellItems: _vm.grid.data,\n                        tableTitle: _vm.tableTitle\n                      }\n                    })\n                  : _vm._e()\n              ],\n              1\n            )\n          ])\n        : _vm._e()\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/pages/Home.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Settings.vue?vue&type=template&id=e4dc4572&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/Settings.vue?vue&type=template&id=e4dc4572&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"app-settings\" }, [\n    _vm._v(\"\\n  The Settings Page\\n\")\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/pages/Settings.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??postcss!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/App.vue?vue&type=style&index=0&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"4b89b8d8\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/admin/App.vue?./node_modules/vue-style-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Home.vue?vue&type=style&index=0&id=9e5983fa&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/Home.vue?vue&type=style&index=0&id=9e5983fa&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=9e5983fa&scoped=true&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Home.vue?vue&type=style&index=0&id=9e5983fa&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"30c88719\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/admin/pages/Home.vue?./node_modules/vue-style-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/admin/App.vue":
/*!***************************!*\
  !*** ./src/admin/App.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_3a030f38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3a030f38& */ \"./src/admin/App.vue?vue&type=template&id=3a030f38&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./src/admin/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./src/admin/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_3a030f38___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_3a030f38___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/App.vue?");

/***/ }),

/***/ "./src/admin/App.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./src/admin/App.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/App.vue?");

/***/ }),

/***/ "./src/admin/App.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************!*\
  !*** ./src/admin/App.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??postcss!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/admin/App.vue?");

/***/ }),

/***/ "./src/admin/App.vue?vue&type=template&id=3a030f38&":
/*!**********************************************************!*\
  !*** ./src/admin/App.vue?vue&type=template&id=3a030f38& ***!
  \**********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3a030f38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=3a030f38& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/App.vue?vue&type=template&id=3a030f38&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3a030f38___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3a030f38___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/App.vue?");

/***/ }),

/***/ "./src/admin/components/tablePreview.vue":
/*!***********************************************!*\
  !*** ./src/admin/components/tablePreview.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tablePreview_vue_vue_type_template_id_71719d2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tablePreview.vue?vue&type=template&id=71719d2a& */ \"./src/admin/components/tablePreview.vue?vue&type=template&id=71719d2a&\");\n/* harmony import */ var _tablePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tablePreview.vue?vue&type=script&lang=js& */ \"./src/admin/components/tablePreview.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _tablePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _tablePreview_vue_vue_type_template_id_71719d2a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _tablePreview_vue_vue_type_template_id_71719d2a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/tablePreview.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/tablePreview.vue?");

/***/ }),

/***/ "./src/admin/components/tablePreview.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/admin/components/tablePreview.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./tablePreview.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tablePreview.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/tablePreview.vue?");

/***/ }),

/***/ "./src/admin/components/tablePreview.vue?vue&type=template&id=71719d2a&":
/*!******************************************************************************!*\
  !*** ./src/admin/components/tablePreview.vue?vue&type=template&id=71719d2a& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePreview_vue_vue_type_template_id_71719d2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tablePreview.vue?vue&type=template&id=71719d2a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tablePreview.vue?vue&type=template&id=71719d2a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePreview_vue_vue_type_template_id_71719d2a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePreview_vue_vue_type_template_id_71719d2a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/tablePreview.vue?");

/***/ }),

/***/ "./src/admin/main.js":
/*!***************************!*\
  !*** ./src/admin/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/admin/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/admin/router/index.js\");\n/* harmony import */ var _utils_admin_menu_fix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/admin-menu-fix */ \"./src/admin/utils/admin-menu-fix.js\");\n/* harmony import */ var _assets_css_tail_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/css/tail.css */ \"./assets/css/tail.css\");\n/* harmony import */ var _assets_css_tail_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_css_tail_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n // import XLSX from 'xlsx';\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.ignoredElements = ['canvas-datagrid'];\n\n/* eslint-disable no-new */\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  el: '#vue-admin-app',\n  router: _router__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n}); // fix the admin menu for the slug \"vue-app\"\n\nObject(_utils_admin_menu_fix__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('vue-app');\n\n//# sourceURL=webpack:///./src/admin/main.js?");

/***/ }),

/***/ "./src/admin/pages/Home.vue":
/*!**********************************!*\
  !*** ./src/admin/pages/Home.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_vue_vue_type_template_id_9e5983fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=9e5983fa&scoped=true& */ \"./src/admin/pages/Home.vue?vue&type=template&id=9e5983fa&scoped=true&\");\n/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ \"./src/admin/pages/Home.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_9e5983fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=9e5983fa&scoped=true&lang=css& */ \"./src/admin/pages/Home.vue?vue&type=style&index=0&id=9e5983fa&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Home_vue_vue_type_template_id_9e5983fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Home_vue_vue_type_template_id_9e5983fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"9e5983fa\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/pages/Home.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/pages/Home.vue?");

/***/ }),

/***/ "./src/admin/pages/Home.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/admin/pages/Home.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Home.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/pages/Home.vue?");

/***/ }),

/***/ "./src/admin/pages/Home.vue?vue&type=style&index=0&id=9e5983fa&scoped=true&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./src/admin/pages/Home.vue?vue&type=style&index=0&id=9e5983fa&scoped=true&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_9e5983fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=9e5983fa&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Home.vue?vue&type=style&index=0&id=9e5983fa&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_9e5983fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_9e5983fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_9e5983fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_9e5983fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/admin/pages/Home.vue?");

/***/ }),

/***/ "./src/admin/pages/Home.vue?vue&type=template&id=9e5983fa&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./src/admin/pages/Home.vue?vue&type=template&id=9e5983fa&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_9e5983fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=9e5983fa&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Home.vue?vue&type=template&id=9e5983fa&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_9e5983fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_9e5983fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/pages/Home.vue?");

/***/ }),

/***/ "./src/admin/pages/Settings.vue":
/*!**************************************!*\
  !*** ./src/admin/pages/Settings.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Settings_vue_vue_type_template_id_e4dc4572_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=e4dc4572&scoped=true& */ \"./src/admin/pages/Settings.vue?vue&type=template&id=e4dc4572&scoped=true&\");\n/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ \"./src/admin/pages/Settings.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Settings_vue_vue_type_template_id_e4dc4572_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Settings_vue_vue_type_template_id_e4dc4572_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"e4dc4572\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/pages/Settings.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/pages/Settings.vue?");

/***/ }),

/***/ "./src/admin/pages/Settings.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/admin/pages/Settings.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Settings.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/pages/Settings.vue?");

/***/ }),

/***/ "./src/admin/pages/Settings.vue?vue&type=template&id=e4dc4572&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./src/admin/pages/Settings.vue?vue&type=template&id=e4dc4572&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_e4dc4572_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=e4dc4572&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Settings.vue?vue&type=template&id=e4dc4572&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_e4dc4572_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_e4dc4572_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/pages/Settings.vue?");

/***/ }),

/***/ "./src/admin/router/index.js":
/*!***********************************!*\
  !*** ./src/admin/router/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var admin_pages_Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! admin/pages/Home.vue */ \"./src/admin/pages/Home.vue\");\n/* harmony import */ var admin_pages_Settings_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! admin/pages/Settings.vue */ \"./src/admin/pages/Settings.vue\");\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  routes: [{\n    path: '/',\n    name: 'Home',\n    component: admin_pages_Home_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }, {\n    path: '/settings',\n    name: 'Settings',\n    component: admin_pages_Settings_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }]\n}));\n\n//# sourceURL=webpack:///./src/admin/router/index.js?");

/***/ }),

/***/ "./src/admin/utils/admin-menu-fix.js":
/*!*******************************************!*\
  !*** ./src/admin/utils/admin-menu-fix.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * As we are using hash based navigation, hack fix\n * to highlight the current selected menu\n *\n * Requires jQuery\n */\nfunction menuFix(slug) {\n  var $ = jQuery;\n  let menuRoot = $('#toplevel_page_' + slug);\n  let currentUrl = window.location.href;\n  let currentPath = currentUrl.substr(currentUrl.indexOf('admin.php'));\n  menuRoot.on('click', 'a', function () {\n    var self = $(this);\n    $('ul.wp-submenu li', menuRoot).removeClass('current');\n\n    if (self.hasClass('wp-has-submenu')) {\n      $('li.wp-first-item', menuRoot).addClass('current');\n    } else {\n      self.parents('li').addClass('current');\n    }\n  });\n  $('ul.wp-submenu a', menuRoot).each(function (index, el) {\n    if ($(el).attr('href') === currentPath) {\n      $(el).parent().addClass('current');\n      return;\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menuFix);\n\n//# sourceURL=webpack:///./src/admin/utils/admin-menu-fix.js?");

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ }),

/***/ 2:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///stream_(ignored)?");

/***/ })

},[["./src/admin/main.js","runtime","vendors"]]]);