(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin"],{

/***/ "./assets/css/tail.css":
/*!*****************************!*\
  !*** ./assets/css/tail.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-1!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src??postcss!./tail.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./assets/css/tail.css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"22a83a8e\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./assets/css/tail.css?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// import 'tablesaw/dist/tablesaw.css'\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  methods: {\n    handleSave() {\n      let data = {\n        title: this.$store.state.tableTitle,\n        cells: this.$store.state.grid.data\n      };\n      debugger;\n      jQuery.ajax({\n        type: 'POST',\n        url: ajaxurl + '?action=create_new_table_entry',\n        dataType: 'json',\n        data: JSON.stringify(data),\n        success: responseData => {\n          this.$router.push({\n            name: \"Edit Existing\",\n            query: {\n              table_id: responseData.ok\n            }\n          });\n        }\n      });\n    },\n\n    handleUpdate() {\n      let data = {\n        title: this.$store.state.tableTitle,\n        cells: this.$store.state.grid.data\n      };\n      jQuery.ajax({\n        type: 'POST',\n        url: ajaxurl + `?action=sprdsh_update_table_cells&id=${this.$store.state.editingTableId}`,\n        dataType: 'json',\n        data: JSON.stringify(data),\n        success: () => {}\n      });\n    }\n\n  },\n  computed: {\n    pageTitle: function () {\n      return this.$store.state.pageTitle;\n    }\n  },\n\n  mounted() {\n    debugger;\n  }\n\n});\n\n//# sourceURL=webpack:///./src/admin/App.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tableEditor.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/tableEditor.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_components_tableElement_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/components/tableElement.vue */ \"./src/common/components/tableElement.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      tabNavigation: 0,\n      tabActiveClass: 'border-l border-t border-r rounded-t text-blue-700 active',\n      tabInactiveClass: 'text-blue-500 hover:text-blue-800'\n    };\n  },\n\n  computed: {\n    canvasHeight() {\n      return window.innerHeight - 200 + 'px';\n    },\n\n    canvasWidth() {\n      return window.innerWidth - 300 + 'px';\n    },\n\n    grid: {\n      get: function () {\n        return this.$store.state.grid;\n      },\n      // setter\n      set: function (newGrid) {\n        debugger;\n        return this.$store.commit('updateGrid', newGrid);\n      }\n    },\n    tableTitle: {\n      get: function () {\n        return this.$store.state.tableTitle;\n      }\n    }\n  },\n  methods: {\n    handleTabSwitch(event) {\n      let selectedTabIndex = parseInt(event.target.getAttribute('data-tab-index'));\n\n      if (typeof this.$refs.grid !== 'undefined') {\n        try {\n          this.$refs.grid.endEdit();\n        } catch (error) {// no need to handle\n        }\n      }\n\n      this.tabNavigation = selectedTabIndex;\n\n      if (selectedTabIndex == 1) {\n        setTimeout(() => {\n          let tablePreview = document.getElementById('table-preview');\n          Tablesaw.init(tablePreview);\n        }, 3000);\n      }\n\n      ;\n    },\n\n    adjustGridSize() {\n      this.$refs.grid.style.height = window.innerHeight - 300 + 'px';\n      this.$refs.grid.style.width = '100%';\n    },\n\n    handleGridEvent(e, v, i, c) {\n      this.$refs.grid.setActiveCell(null);\n    },\n\n    handleRightClick(e, i, v, c) {\n      // e.items.map((e,i) => e.title == 'Add/Remove columns' ? i : '').filter(ee => ee).forEach(eee => delete e.items[eee])\n      let {\n        $store: store\n      } = this;\n\n      let manipulateStore = evt => {\n        store;\n        debugger;\n      };\n\n      for (let index = 0; index < e.items.length; index++) {\n        // const element = array[index];\n        delete e.items[index];\n      }\n\n      e.items.push({\n        title: 'Delete this row',\n        click: function (w, q) {\n          this.deleteRow(e.cell.boundRowIndex);\n          console.log(e.cell.value, e.cell.data);\n        }\n      }, {\n        title: 'Add row',\n        click: function () {\n          this.insertRow([], e.cell.boundRowIndex);\n        }\n      }, {\n        title: 'Add column',\n        click: () => {\n          debugger;\n          let newCells = store.state.grid.data.map(ee => [...ee.slice(0, e.cell.boundColumnIndex), '', ...ee.slice(e.cell.boundColumnIndex)]);\n          store.commit('updateGrid', {\n            data: newCells\n          });\n        }\n      });\n    }\n\n  },\n  components: {\n    tableElement: _common_components_tableElement_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n\n  mounted() {\n    setTimeout(() => {}, 3000);\n  }\n\n});\n\n//# sourceURL=webpack:///./src/admin/components/tableEditor.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/AddFromScratch.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/AddFromScratch.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_tableEditor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/tableEditor.vue */ \"./src/admin/components/tableEditor.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nconst defautlSheetData = ({\n  title,\n  col,\n  row\n}) => {\n  let colsArray = new Array();\n  let rowsArray = new Array();\n\n  for (let index = 0; index < parseInt(col); index++) {\n    colsArray.push(\"\");\n  }\n\n  for (let index = 0; index < parseInt(row); index++) {\n    rowsArray[index] = colsArray;\n  }\n\n  return {\n    \"id\": null,\n    \"grid\": {\n      \"data\": JSON.parse(JSON.stringify(rowsArray))\n    },\n    \"title\": title\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'AddFromScratch',\n\n  data() {\n    return {\n      loaded: false\n    };\n  },\n\n  components: {\n    tableEditor: _components_tableEditor_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  computed: {\n    grid: {\n      get: function () {\n        return this.$store.state.grid;\n      }\n    },\n    tableTitle: {\n      get: function () {\n        return this.$store.state.tableTitle;\n      },\n      set: function (newString) {\n        return this.$store.state.tableTitle = newString;\n      }\n    }\n  },\n\n  mounted() {\n    debugger;\n    this.$store.commit('updateGrid', defautlSheetData(this.$route.query).grid);\n    this.$store.commit('setTitle', defautlSheetData(this.$route.query).title);\n  }\n\n});\n\n//# sourceURL=webpack:///./src/admin/pages/AddFromScratch.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xlsx */ \"./node_modules/xlsx/xlsx.js\");\n/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var canvas_datagrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! canvas-datagrid */ \"./node_modules/canvas-datagrid/dist/canvas-datagrid.module.js\");\n/* harmony import */ var tablesaw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tablesaw */ \"./node_modules/tablesaw/dist/tablesaw.js\");\n/* harmony import */ var tablesaw__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tablesaw__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_tableEditor_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/tableEditor.vue */ \"./src/admin/components/tableEditor.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nconst make_cols = refstr => Array(xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.decode_range(refstr).e.c + 1).fill(0).map((x, i) => ({\n  name: xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.encode_col(i),\n  key: i\n}));\n\nconst _SheetJSFT = [\"xlsx\", \"xlsb\", \"xlsm\", \"xls\", \"xml\", \"csv\", \"txt\", \"ods\", \"fods\", \"uos\", \"sylk\", \"dif\", \"dbf\", \"prn\", \"qpw\", \"123\", \"wb*\", \"wq*\", \"html\", \"htm\"].map(function (x) {\n  return \".\" + x;\n}).join(\",\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      SheetJSFT: _SheetJSFT\n    };\n  },\n\n  methods: {\n    _suppress(evt) {\n      evt.stopPropagation();\n      evt.preventDefault();\n    },\n\n    _drop(evt) {\n      evt.stopPropagation();\n      evt.preventDefault();\n      const files = evt.dataTransfer.files;\n      if (files && files[0]) this._file(files[0]);\n    },\n\n    _change(evt) {\n      const files = evt.target.files;\n      if (files && files[0]) this._file(files[0]);\n    },\n\n    _export(evt) {\n      /* convert state to workbook */\n      const ws = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.aoa_to_sheet(this.data);\n      const wb = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.book_new();\n      xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.book_append_sheet(wb, ws, \"SheetJS\");\n      /* generate file and send to client */\n\n      xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.writeFile(wb, \"sheetjs.xlsx\");\n    },\n\n    to_json(workbook) {\n      if (workbook.SSF) xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.SSF.load_table(workbook.SSF);\n      var result = {};\n      workbook.SheetNames.forEach(function (sheetName) {\n        var roa = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.sheet_to_json(workbook.Sheets[sheetName], {\n          raw: false,\n          header: 1\n        });\n        if (roa.length > 0) result[sheetName] = roa;\n      });\n      return result;\n    },\n\n    _file(file) {\n      /* Boilerplate to set up FileReader */\n      const reader = new FileReader();\n\n      reader.onload = e => {\n        /* Parse data */\n        const bstr = e.target.result;\n        const wb = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.read(bstr, {\n          type: 'binary'\n        });\n        /* Get first worksheet */\n\n        const wsname = wb.SheetNames[0];\n        var json = this.to_json(wb)[wsname];\n        const ws = wb.Sheets[wsname];\n        /* Convert array of arrays */\n\n        const data = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.sheet_to_json(ws, {\n          raw: true,\n          cellDates: false\n        });\n        /* Update state */\n        // this.grid = {data: json};\n\n        this.$store.state.grid = {\n          data: json\n        };\n        this.cols = make_cols(ws['!ref']);\n      };\n\n      reader.readAsBinaryString(file);\n    }\n\n  },\n  computed: {\n    tableTitle: {\n      get: function () {\n        return this.$store.state.tableTitle;\n      },\n      set: function (newString) {\n        return this.$store.state.tableTitle = newString;\n      }\n    }\n  },\n  components: {\n    tableEditor: _components_tableEditor_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n\n  mounted() {\n    // Tablesaw.init();\n    this.$store.commit('setPageTitle', \"Editing Table\");\n  }\n\n});\n\n//# sourceURL=webpack:///./src/admin/pages/CreateFromSpreadsheet.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/Edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_tableEditor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/tableEditor.vue */ \"./src/admin/components/tableEditor.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Edit\",\n\n  data() {\n    return {};\n  },\n\n  methods: {\n    sampleFunc: () => {},\n\n    handleEditBtn(tableId) {\n      jQuery.ajax({\n        type: \"GET\",\n        url: ajaxurl + `?action=sprdsh_get_table_cells&id=${tableId}`,\n        vm: this,\n\n        success(data) {\n          let {\n            vm\n          } = this;\n          debugger;\n          vm.$store.commit(\"updateGrid\", data.grid);\n          vm.$store.commit(\"setTitle\", data.title);\n          vm.$store.commit(\"setEditingTableId\", data.id);\n          vm.$router.push({\n            name: \"Edit Existing\",\n            query: {\n              table_id: data.id\n            }\n          });\n        }\n\n      });\n    }\n\n  },\n  computed: {\n    toEditTable: vm => {\n      return vm.$route.query.table_id ? vm.$route.query.table_id : null;\n    },\n    avaiableTables: vm => {\n      return vm.$store.state.tableList;\n    },\n    tableTitle: {\n      get: function () {\n        return this.$store.state.tableTitle;\n      },\n      set: function (newString) {\n        return this.$store.state.tableTitle = newString;\n      }\n    }\n  },\n  components: {\n    tableEditor: _components_tableEditor_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n\n  mounted() {\n    if (this.toEditTable) {\n      let doProcess = initialGridData => {\n        this.$store.commit(\"updateGrid\", initialGridData);\n      };\n\n      jQuery.ajax({\n        type: \"GET\",\n        vm: this,\n        url: ajaxurl + `?action=sprdsh_get_table_cells&id=${this.toEditTable}`,\n\n        success(data) {\n          let {\n            vm\n          } = this;\n          vm.$store.commit(\"updateGrid\", data.grid);\n          vm.$store.commit(\"setTitle\", data.title);\n          vm.$store.commit(\"setEditingTableId\", data.id);\n        }\n\n      });\n      this.$store.commit(\"setPageTitle\", \"Editing Table\");\n    }\n\n    if (!this.toEditTable) {\n      let updateListTables = data => {\n        this.$store.commit(\"availableTables\", data);\n      };\n\n      jQuery.ajax({\n        type: \"GET\",\n        url: ajaxurl + \"?action=sprdsh_list_tables\",\n        success: updateListTables\n      });\n    }\n  }\n\n});\n\n//# sourceURL=webpack:///./src/admin/pages/Edit.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Home.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/Home.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      defineCells: false,\n      rows: 3,\n      columns: 3,\n      title: \"\"\n    };\n  },\n\n  methods: {\n    setDefineCells() {\n      debugger;\n      this.defineCells = !this.defineCells;\n    },\n\n    createTable() {\n      this.$router.push({\n        name: \"Add From Scratch\",\n        query: {\n          title: this.title,\n          col: this.columns,\n          row: this.rows\n        }\n      });\n    },\n\n    navigateToUpload() {\n      this.$router.push({\n        name: \"New table from excel file\"\n      });\n    }\n\n  },\n  computed: {\n    requiredFields() {\n      return this.rows && this.columns && this.title.length ? true : false;\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/admin/pages/Home.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/common/components/tableElement.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/common/components/tableElement.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    'cellItems': {\n      dafault: [],\n      type: Array\n    },\n    'tableTitle': {\n      default: \"my tite\",\n      type: String\n    }\n  },\n\n  mounted() {},\n\n  computed: {\n    headCells() {\n      return this.cellItems.filter((e, i) => i == 0);\n    },\n\n    nonHeaderCells() {\n      debugger;\n      return this.cellItems.filter((e, i) => i !== 0);\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/common/components/tableElement.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./assets/css/tail.css":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-1!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./assets/css/tail.css ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/css/tail.css?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-1!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/App.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/App.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/admin/App.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/admin/pages/CreateFromSpreadsheet.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/App.vue?vue&type=template&id=3a030f38&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/App.vue?vue&type=template&id=3a030f38& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      staticClass:\n        \"border mx-auto my-auto rounded p-6 tab-component bg-gray-100 w-full\",\n      attrs: { id: \"vue-backend-app\" }\n    },\n    [\n      _c(\"div\", { staticClass: \"relative flex items-center justify-between\" }, [\n        _c(\n          \"div\",\n          {\n            staticClass:\n              \"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start\"\n          },\n          [\n            _c(\n              \"h1\",\n              { staticClass: \"capitalize font-medium text-3xl font-sans\" },\n              [_vm._v(_vm._s(_vm.pageTitle))]\n            )\n          ]\n        ),\n        _vm._v(\" \"),\n        ![\"/settings\", \"/edit\", \"/\"].some(function(e) {\n          return e == _vm.$route.path\n        })\n          ? _c(\n              \"button\",\n              {\n                staticClass:\n                  \"bg-blue-500 hover:bg-blue-800 text-white py-2 px-4\",\n                on: { click: _vm.handleSave }\n              },\n              [_vm._v(\"Save\")]\n            )\n          : _vm._e(),\n        _vm._v(\" \"),\n        _vm.$route.path == \"/edit\" && _vm.$route.query.table_id\n          ? _c(\n              \"button\",\n              {\n                staticClass:\n                  \"bg-blue-500 hover:bg-blue-800 text-white py-2 px-4\",\n                on: { click: _vm.handleUpdate }\n              },\n              [_vm._v(\"Update\")]\n            )\n          : _vm._e()\n      ]),\n      _vm._v(\" \"),\n      _c(\"router-view\")\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tableEditor.vue?vue&type=template&id=4a48ad0a&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/tableEditor.vue?vue&type=template&id=4a48ad0a& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"ul\", { staticClass: \"flex main-nav border-b tab-buttons\" }, [\n      _c(\"li\", { staticClass: \"mr-1\" }, [\n        _c(\n          \"button\",\n          {\n            staticClass:\n              \"tab-item bg-white inline-block py-2 px-4 font-semibold\",\n            class: [\n              _vm.tabNavigation == 0 ? _vm.tabActiveClass : _vm.tabInactiveClass\n            ],\n            attrs: { \"data-tab-index\": \"0\" },\n            on: { click: _vm.handleTabSwitch }\n          },\n          [_vm._v(\"Excel Sheet\")]\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"li\", { staticClass: \"mr-1\" }, [\n        _c(\n          \"button\",\n          {\n            staticClass:\n              \"tab-item bg-white inline-block py-2 px-4 font-semibold\",\n            class: [\n              _vm.tabNavigation == 1 ? _vm.tabActiveClass : _vm.tabInactiveClass\n            ],\n            attrs: { \"data-tab-index\": \"1\" },\n            on: { click: _vm.handleTabSwitch }\n          },\n          [_vm._v(\"Table\")]\n        )\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm.tabNavigation == 0\n      ? _c(\"div\", [\n          _c(\n            \"div\",\n            { staticClass: \"px-5 py-3 w-full h-full\" },\n            [\n              _vm.grid.data.length\n                ? _c(\"canvas-datagrid\", {\n                    ref: \"grid\",\n                    style: { width: _vm.canvasWidth, height: _vm.canvasHeight },\n                    domProps: { data: _vm.grid.data },\n                    on: {\n                      contextmenu: _vm.handleRightClick,\n                      sortcolumn: _vm.handleGridEvent\n                    }\n                  })\n                : _vm._e()\n            ],\n            1\n          )\n        ])\n      : _vm._e(),\n    _vm._v(\" \"),\n    _vm.tabNavigation == 1\n      ? _c(\"div\", [\n          _c(\n            \"div\",\n            { staticClass: \"px-5 py-3\" },\n            [\n              _vm.grid.data.length\n                ? _c(\"table-element\", {\n                    attrs: {\n                      cellItems: _vm.grid.data,\n                      tableTitle: _vm.tableTitle\n                    }\n                  })\n                : _vm._e()\n            ],\n            1\n          )\n        ])\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/tableEditor.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/AddFromScratch.vue?vue&type=template&id=73f1ba9a&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/AddFromScratch.vue?vue&type=template&id=73f1ba9a& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"div\", { staticClass: \"mb-4\" }, [\n        _c(\n          \"label\",\n          { staticClass: \"block uppercase tracking-wide text-xs font-bold\" },\n          [_vm._v(\"Name\")]\n        ),\n        _vm._v(\" \"),\n        _c(\"input\", {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.tableTitle,\n              expression: \"tableTitle\"\n            }\n          ],\n          staticClass:\n            \"block w-full focus:outline-0 bg-white py-3 px-6 mb-2 sm:mb-0\",\n          attrs: {\n            type: \"text\",\n            name: \"name\",\n            placeholder: \"Enter the Table Name\",\n            required: \"\"\n          },\n          domProps: { value: _vm.tableTitle },\n          on: {\n            input: function($event) {\n              if ($event.target.composing) {\n                return\n              }\n              _vm.tableTitle = $event.target.value\n            }\n          }\n        })\n      ]),\n      _vm._v(\" \"),\n      _vm.grid.data.length ? _c(\"table-editor\") : _vm._e()\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/pages/AddFromScratch.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=template&id=05806f9c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=template&id=05806f9c& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      on: { drop: _vm._drop, dragenter: _vm._suppress, dragover: _vm._suppress }\n    },\n    [\n      _c(\"form\", [\n        _c(\"div\", { staticClass: \"mb-4\" }, [\n          _c(\n            \"label\",\n            { staticClass: \"block uppercase tracking-wide text-xs font-bold\" },\n            [_vm._v(\"Name\")]\n          ),\n          _vm._v(\" \"),\n          _c(\"input\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.tableTitle,\n                expression: \"tableTitle\"\n              }\n            ],\n            staticClass:\n              \"block w-full focus:outline-0 bg-white py-3 px-6 mb-2 sm:mb-0\",\n            attrs: {\n              type: \"text\",\n              name: \"name\",\n              placeholder: \"Enter the Table Name\",\n              required: \"\"\n            },\n            domProps: { value: _vm.tableTitle },\n            on: {\n              input: function($event) {\n                if ($event.target.composing) {\n                  return\n                }\n                _vm.tableTitle = $event.target.value\n              }\n            }\n          })\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"mb-4\" }, [\n          _c(\n            \"label\",\n            { staticClass: \"block uppercase tracking-wide text-xs font-bold\" },\n            [_vm._v(\"Upload a Spreadsheet\")]\n          ),\n          _vm._v(\" \"),\n          _c(\"input\", {\n            staticClass: \"w-full shadow-inner p-4 border-0\",\n            attrs: { type: \"file\", id: \"file\", accept: _vm.SheetJSFT },\n            on: { change: _vm._change }\n          })\n        ])\n      ]),\n      _vm._v(\" \"),\n      _vm.$store.state.grid.data.length ? _c(\"table-editor\") : _vm._e()\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/pages/CreateFromSpreadsheet.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Edit.vue?vue&type=template&id=2d4b29ae&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/Edit.vue?vue&type=template&id=2d4b29ae& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _vm.toEditTable\n        ? _c(\"div\", { staticClass: \"mb-4\" }, [\n            _c(\n              \"label\",\n              {\n                staticClass: \"block uppercase tracking-wide text-xs font-bold\"\n              },\n              [_vm._v(\"Name\")]\n            ),\n            _vm._v(\" \"),\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.tableTitle,\n                  expression: \"tableTitle\"\n                }\n              ],\n              staticClass:\n                \"block w-full focus:outline-0 bg-white py-3 px-6 mb-2 sm:mb-0\",\n              attrs: {\n                type: \"text\",\n                name: \"name\",\n                placeholder: \"Enter the Table Name\",\n                required: \"\"\n              },\n              domProps: { value: _vm.tableTitle },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.tableTitle = $event.target.value\n                }\n              }\n            })\n          ])\n        : _vm._e(),\n      _vm._v(\" \"),\n      !_vm.avaiableTables.length && !_vm.toEditTable\n        ? _c(\"div\", { staticClass: \"flex justify-center items-center\" }, [\n            _c(\"div\", {\n              staticClass:\n                \"animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900\"\n            })\n          ])\n        : _vm._e(),\n      _vm._v(\" \"),\n      _vm.toEditTable ? _c(\"table-editor\") : _vm._e(),\n      _vm._v(\" \"),\n      !_vm.toEditTable\n        ? _c(\n            \"div\",\n            {\n              staticClass:\n                \"\\n      container container\\n      m-auto\\n      flex flex-wrap flex-col\\n      md:flex-row\\n      items-center\\n      justify-start\\n    \"\n            },\n            _vm._l(_vm.avaiableTables, function(tableName, key) {\n              return _c(\n                \"div\",\n                { key: key, staticClass: \"w-full md:w-1/3 p-3\" },\n                [\n                  _c(\n                    \"div\",\n                    {\n                      staticClass:\n                        \"\\n          flex flex-col\\n          lg:flex-row\\n          rounded\\n          overflow-hidden\\n          h-auto\\n          lg:h-32\\n          border\\n          shadow shadow-lg\\n        \"\n                    },\n                    [\n                      _c(\n                        \"div\",\n                        {\n                          staticClass:\n                            \"\\n            bg-grey\\n            rounded-b\\n            lg:rounded-b-none lg:rounded-r\\n            p-4\\n            flex flex-col\\n            justify-between\\n            leading-normal\\n            flex-grow-default\\n          \"\n                        },\n                        [\n                          _c(\n                            \"div\",\n                            {\n                              staticClass:\n                                \"text-black font-bold text-xl mb-2 leading-tight\"\n                            },\n                            [\n                              _vm._v(\n                                \"\\n            \" +\n                                  _vm._s(tableName.post_title) +\n                                  \"\\n          \"\n                              )\n                            ]\n                          ),\n                          _vm._v(\" \"),\n                          _c(\n                            \"ul\",\n                            {\n                              staticClass: \"flex main-nav border-b tab-buttons\"\n                            },\n                            [\n                              _c(\"li\", { staticClass: \"mr-1\" }, [\n                                _c(\n                                  \"button\",\n                                  {\n                                    staticClass:\n                                      \"\\n                  tab-item\\n                  bg-white\\n                  inline-block\\n                  py-2\\n                  px-4\\n                  font-semibold\\n                  border-l border-t border-r\\n                  rounded-t\\n                  text-blue-700\\n                  active\\n                \",\n                                    on: {\n                                      click: function($event) {\n                                        return _vm.handleEditBtn(tableName.ID)\n                                      }\n                                    }\n                                  },\n                                  [\n                                    _vm._v(\n                                      \"\\n                Edit\\n              \"\n                                    )\n                                  ]\n                                )\n                              ]),\n                              _vm._v(\" \"),\n                              _vm._m(0, true)\n                            ]\n                          )\n                        ]\n                      )\n                    ]\n                  )\n                ]\n              )\n            }),\n            0\n          )\n        : _vm._e()\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"li\", { staticClass: \"mr-1\" }, [\n      _c(\n        \"button\",\n        {\n          staticClass:\n            \"\\n                  tab-item\\n                  bg-white\\n                  inline-block\\n                  py-2\\n                  px-4\\n                  font-semibold\\n                  border-l border-t border-r\\n                  rounded-t\\n                  text-red-700\\n                  active\\n                \"\n        },\n        [_vm._v(\"\\n                Delete\\n              \")]\n      )\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/pages/Edit.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Home.vue?vue&type=template&id=9e5983fa&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/Home.vue?vue&type=template&id=9e5983fa& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"flex flex-wrap justify-center\" }, [\n    !_vm.defineCells\n      ? _c(\"div\", [\n          _c(\n            \"button\",\n            {\n              staticClass:\n                \"text-purple-500 bg-transparent border-2 border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n              attrs: { type: \"button\" },\n              on: { click: _vm.setDefineCells }\n            },\n            [\n              _vm._v(\n                \"\\n                      Create New Table\\n                    \"\n              )\n            ]\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"button\",\n            {\n              staticClass:\n                \"text-purple-500 bg-transparent border-2 border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n              attrs: { type: \"button\" },\n              on: { click: _vm.navigateToUpload }\n            },\n            [\n              _vm._v(\n                \"\\n                      Upload SpreadSheet\\n                    \"\n              )\n            ]\n          )\n        ])\n      : _vm._e(),\n    _vm._v(\" \"),\n    _vm.defineCells\n      ? _c(\"div\", [\n          _c(\"div\", [\n            _c(\"div\", { staticClass: \"py-3\" }, [\n              _c(\n                \"label\",\n                {\n                  staticClass: \"font-semibold text-sm text-gray-600 pr-1 block\",\n                  attrs: { for: \"title\" }\n                },\n                [_vm._v(\"Table Title\")]\n              ),\n              _vm._v(\" \"),\n              _c(\"input\", {\n                directives: [\n                  {\n                    name: \"model\",\n                    rawName: \"v-model\",\n                    value: _vm.title,\n                    expression: \"title\"\n                  }\n                ],\n                staticClass:\n                  \"px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full\",\n                attrs: {\n                  type: \"text\",\n                  id: \"title\",\n                  placeholder: \"Table Title\"\n                },\n                domProps: { value: _vm.title },\n                on: {\n                  input: function($event) {\n                    if ($event.target.composing) {\n                      return\n                    }\n                    _vm.title = $event.target.value\n                  }\n                }\n              })\n            ]),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"flex\" }, [\n              _c(\"div\", { staticClass: \"flex-col\" }, [\n                _c(\n                  \"label\",\n                  {\n                    staticClass:\n                      \"font-semibold text-sm text-gray-600 pr-1 block\",\n                    attrs: { for: \"columns\" }\n                  },\n                  [_vm._v(\"Columns\")]\n                ),\n                _vm._v(\" \"),\n                _c(\"input\", {\n                  directives: [\n                    {\n                      name: \"model\",\n                      rawName: \"v-model\",\n                      value: _vm.columns,\n                      expression: \"columns\"\n                    }\n                  ],\n                  staticClass:\n                    \"px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring\",\n                  attrs: {\n                    type: \"number\",\n                    id: \"columns\",\n                    placeholder: \"Columns\"\n                  },\n                  domProps: { value: _vm.columns },\n                  on: {\n                    input: function($event) {\n                      if ($event.target.composing) {\n                        return\n                      }\n                      _vm.columns = $event.target.value\n                    }\n                  }\n                })\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"flex-col\" }, [\n                _c(\n                  \"label\",\n                  {\n                    staticClass:\n                      \"font-semibold text-sm text-gray-600 pr-1 block\",\n                    attrs: { for: \"rows\" }\n                  },\n                  [_vm._v(\"Rows\")]\n                ),\n                _vm._v(\" \"),\n                _c(\"input\", {\n                  directives: [\n                    {\n                      name: \"model\",\n                      rawName: \"v-model\",\n                      value: _vm.rows,\n                      expression: \"rows\"\n                    }\n                  ],\n                  staticClass:\n                    \"px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring\",\n                  attrs: { type: \"number\", id: \"rows\", placeholder: \"Rows\" },\n                  domProps: { value: _vm.rows },\n                  on: {\n                    input: function($event) {\n                      if ($event.target.composing) {\n                        return\n                      }\n                      _vm.rows = $event.target.value\n                    }\n                  }\n                })\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"text-center py-3\" }, [\n            _vm.requiredFields\n              ? _c(\n                  \"button\",\n                  {\n                    staticClass:\n                      \"text-purple-500 bg-transparent border-2 border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                    attrs: { type: \"button\" },\n                    on: { click: _vm.createTable }\n                  },\n                  [_vm._v(\"\\n            Create\\n            \")]\n                )\n              : _vm._e()\n          ])\n        ])\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/pages/Home.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/common/components/tableElement.vue?vue&type=template&id=5917d61c&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/common/components/tableElement.vue?vue&type=template&id=5917d61c& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"table-preview\" }, [\n    _c(\n      \"div\",\n      {\n        staticClass:\n          \"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\n      },\n      [\n        _c(\"div\", { staticClass: \"block w-full overflow-x-auto\" }, [\n          _vm.tableTitle.length\n            ? _c(\"div\", { staticClass: \"rounded-t mb-0 px-4 py-3 border-0\" }, [\n                _c(\n                  \"div\",\n                  {\n                    staticClass:\n                      \"relative w-full px-4 max-w-full flex-grow flex-1\"\n                  },\n                  [\n                    _c(\n                      \"h3\",\n                      {\n                        staticClass: \"font-semibold text-base text-blueGray-700\"\n                      },\n                      [_vm._v(_vm._s(_vm.tableTitle))]\n                    ),\n                    _vm._v(\" \"),\n                    _c(\n                      \"div\",\n                      _vm._b(\n                        {},\n                        \"div\",\n                        { \"other-attr\": _vm.cellItems[0] },\n                        false\n                      )\n                    )\n                  ]\n                )\n              ])\n            : _vm._e(),\n          _vm._v(\" \"),\n          _c(\"table\", { staticClass: \"min-w-full leading-normal\" }, [\n            _c(\"thead\", [\n              _c(\n                \"tr\",\n                _vm._l(_vm.headCells[0], function(cell, key1) {\n                  return _c(\n                    \"th\",\n                    {\n                      key: key1,\n                      staticClass:\n                        \"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider\"\n                    },\n                    [_vm._v(_vm._s(cell))]\n                  )\n                }),\n                0\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\n              \"tbody\",\n              _vm._l(_vm.nonHeaderCells, function(row, key) {\n                return _c(\n                  \"tr\",\n                  { key: key },\n                  _vm._l(row, function(cell, key1) {\n                    return _c(\n                      \"td\",\n                      {\n                        key: key1,\n                        staticClass:\n                          \"px-5 py-3 border-b border-gray-200 bg-white text-sm\"\n                      },\n                      [\n                        _c(\n                          \"p\",\n                          { staticClass: \"text-gray-900 whitespace-no-wrap\" },\n                          [\n                            _vm._v(\n                              \"\\n                      \" +\n                                _vm._s(cell) +\n                                \"\\n                    \"\n                            )\n                          ]\n                        )\n                      ]\n                    )\n                  }),\n                  0\n                )\n              }),\n              0\n            )\n          ])\n        ])\n      ]\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/common/components/tableElement.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-1!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??postcss!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/App.vue?vue&type=style&index=0&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"7645cb35\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/admin/App.vue?./node_modules/vue-style-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-1!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/vue-loader/lib??vue-loader-options!./CreateFromSpreadsheet.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=style&index=0&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"d3b8ca7a\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/admin/pages/CreateFromSpreadsheet.vue?./node_modules/vue-style-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/vue-loader/lib??vue-loader-options");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_4_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-1!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??postcss!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_4_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_4_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_4_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_4_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/admin/App.vue?");

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

/***/ "./src/admin/components/tableEditor.vue":
/*!**********************************************!*\
  !*** ./src/admin/components/tableEditor.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tableEditor_vue_vue_type_template_id_4a48ad0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableEditor.vue?vue&type=template&id=4a48ad0a& */ \"./src/admin/components/tableEditor.vue?vue&type=template&id=4a48ad0a&\");\n/* harmony import */ var _tableEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableEditor.vue?vue&type=script&lang=js& */ \"./src/admin/components/tableEditor.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _tableEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _tableEditor_vue_vue_type_template_id_4a48ad0a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _tableEditor_vue_vue_type_template_id_4a48ad0a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/tableEditor.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/tableEditor.vue?");

/***/ }),

/***/ "./src/admin/components/tableEditor.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/admin/components/tableEditor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tableEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./tableEditor.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tableEditor.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tableEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/tableEditor.vue?");

/***/ }),

/***/ "./src/admin/components/tableEditor.vue?vue&type=template&id=4a48ad0a&":
/*!*****************************************************************************!*\
  !*** ./src/admin/components/tableEditor.vue?vue&type=template&id=4a48ad0a& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableEditor_vue_vue_type_template_id_4a48ad0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tableEditor.vue?vue&type=template&id=4a48ad0a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tableEditor.vue?vue&type=template&id=4a48ad0a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableEditor_vue_vue_type_template_id_4a48ad0a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableEditor_vue_vue_type_template_id_4a48ad0a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/tableEditor.vue?");

/***/ }),

/***/ "./src/admin/main.js":
/*!***************************!*\
  !*** ./src/admin/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/admin/App.vue\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ \"./src/admin/store.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ \"./src/admin/router/index.js\");\n/* harmony import */ var _utils_admin_menu_fix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/admin-menu-fix */ \"./src/admin/utils/admin-menu-fix.js\");\n/* harmony import */ var _assets_css_tail_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/css/tail.css */ \"./assets/css/tail.css\");\n/* harmony import */ var _assets_css_tail_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_css_tail_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n // import Vuex from 'vuex'\n// Vue.use(Vuex);\n// import XLSX from 'xlsx';\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.ignoredElements = ['canvas-datagrid'];\n\n/* eslint-disable no-new */\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  router: _router__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n  store: _store__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}).$mount('#vue-admin-app'); // fix the admin menu for the slug \"vue-app\"\n\nObject(_utils_admin_menu_fix__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('vue-app');\n\n//# sourceURL=webpack:///./src/admin/main.js?");

/***/ }),

/***/ "./src/admin/pages/AddFromScratch.vue":
/*!********************************************!*\
  !*** ./src/admin/pages/AddFromScratch.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AddFromScratch_vue_vue_type_template_id_73f1ba9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddFromScratch.vue?vue&type=template&id=73f1ba9a& */ \"./src/admin/pages/AddFromScratch.vue?vue&type=template&id=73f1ba9a&\");\n/* harmony import */ var _AddFromScratch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddFromScratch.vue?vue&type=script&lang=js& */ \"./src/admin/pages/AddFromScratch.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _AddFromScratch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _AddFromScratch_vue_vue_type_template_id_73f1ba9a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _AddFromScratch_vue_vue_type_template_id_73f1ba9a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/pages/AddFromScratch.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/pages/AddFromScratch.vue?");

/***/ }),

/***/ "./src/admin/pages/AddFromScratch.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/admin/pages/AddFromScratch.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFromScratch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./AddFromScratch.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/AddFromScratch.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFromScratch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/pages/AddFromScratch.vue?");

/***/ }),

/***/ "./src/admin/pages/AddFromScratch.vue?vue&type=template&id=73f1ba9a&":
/*!***************************************************************************!*\
  !*** ./src/admin/pages/AddFromScratch.vue?vue&type=template&id=73f1ba9a& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFromScratch_vue_vue_type_template_id_73f1ba9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AddFromScratch.vue?vue&type=template&id=73f1ba9a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/AddFromScratch.vue?vue&type=template&id=73f1ba9a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFromScratch_vue_vue_type_template_id_73f1ba9a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFromScratch_vue_vue_type_template_id_73f1ba9a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/pages/AddFromScratch.vue?");

/***/ }),

/***/ "./src/admin/pages/CreateFromSpreadsheet.vue":
/*!***************************************************!*\
  !*** ./src/admin/pages/CreateFromSpreadsheet.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CreateFromSpreadsheet_vue_vue_type_template_id_05806f9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateFromSpreadsheet.vue?vue&type=template&id=05806f9c& */ \"./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=template&id=05806f9c&\");\n/* harmony import */ var _CreateFromSpreadsheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateFromSpreadsheet.vue?vue&type=script&lang=js& */ \"./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _CreateFromSpreadsheet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateFromSpreadsheet.vue?vue&type=style&index=0&lang=css& */ \"./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _CreateFromSpreadsheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _CreateFromSpreadsheet_vue_vue_type_template_id_05806f9c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _CreateFromSpreadsheet_vue_vue_type_template_id_05806f9c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/pages/CreateFromSpreadsheet.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/pages/CreateFromSpreadsheet.vue?");

/***/ }),

/***/ "./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateFromSpreadsheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./CreateFromSpreadsheet.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateFromSpreadsheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/pages/CreateFromSpreadsheet.vue?");

/***/ }),

/***/ "./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_4_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateFromSpreadsheet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--4-1!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/vue-loader/lib??vue-loader-options!./CreateFromSpreadsheet.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_4_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateFromSpreadsheet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_4_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateFromSpreadsheet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_4_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateFromSpreadsheet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_4_1_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateFromSpreadsheet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/admin/pages/CreateFromSpreadsheet.vue?");

/***/ }),

/***/ "./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=template&id=05806f9c&":
/*!**********************************************************************************!*\
  !*** ./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=template&id=05806f9c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateFromSpreadsheet_vue_vue_type_template_id_05806f9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CreateFromSpreadsheet.vue?vue&type=template&id=05806f9c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/CreateFromSpreadsheet.vue?vue&type=template&id=05806f9c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateFromSpreadsheet_vue_vue_type_template_id_05806f9c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateFromSpreadsheet_vue_vue_type_template_id_05806f9c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/pages/CreateFromSpreadsheet.vue?");

/***/ }),

/***/ "./src/admin/pages/Edit.vue":
/*!**********************************!*\
  !*** ./src/admin/pages/Edit.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Edit_vue_vue_type_template_id_2d4b29ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=2d4b29ae& */ \"./src/admin/pages/Edit.vue?vue&type=template&id=2d4b29ae&\");\n/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ \"./src/admin/pages/Edit.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Edit_vue_vue_type_template_id_2d4b29ae___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Edit_vue_vue_type_template_id_2d4b29ae___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/pages/Edit.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/pages/Edit.vue?");

/***/ }),

/***/ "./src/admin/pages/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/admin/pages/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Edit.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/pages/Edit.vue?");

/***/ }),

/***/ "./src/admin/pages/Edit.vue?vue&type=template&id=2d4b29ae&":
/*!*****************************************************************!*\
  !*** ./src/admin/pages/Edit.vue?vue&type=template&id=2d4b29ae& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2d4b29ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=2d4b29ae& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Edit.vue?vue&type=template&id=2d4b29ae&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2d4b29ae___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2d4b29ae___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/pages/Edit.vue?");

/***/ }),

/***/ "./src/admin/pages/Home.vue":
/*!**********************************!*\
  !*** ./src/admin/pages/Home.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_vue_vue_type_template_id_9e5983fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=9e5983fa& */ \"./src/admin/pages/Home.vue?vue&type=template&id=9e5983fa&\");\n/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ \"./src/admin/pages/Home.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Home_vue_vue_type_template_id_9e5983fa___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Home_vue_vue_type_template_id_9e5983fa___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/pages/Home.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/pages/Home.vue?");

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

/***/ "./src/admin/pages/Home.vue?vue&type=template&id=9e5983fa&":
/*!*****************************************************************!*\
  !*** ./src/admin/pages/Home.vue?vue&type=template&id=9e5983fa& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_9e5983fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=9e5983fa& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Home.vue?vue&type=template&id=9e5983fa&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_9e5983fa___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_9e5983fa___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/pages/Home.vue?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var admin_pages_CreateFromSpreadsheet_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! admin/pages/CreateFromSpreadsheet.vue */ \"./src/admin/pages/CreateFromSpreadsheet.vue\");\n/* harmony import */ var admin_pages_Settings_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! admin/pages/Settings.vue */ \"./src/admin/pages/Settings.vue\");\n/* harmony import */ var admin_pages_Edit_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! admin/pages/Edit.vue */ \"./src/admin/pages/Edit.vue\");\n/* harmony import */ var admin_pages_AddFromScratch_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! admin/pages/AddFromScratch.vue */ \"./src/admin/pages/AddFromScratch.vue\");\n/* harmony import */ var admin_pages_Home_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! admin/pages/Home.vue */ \"./src/admin/pages/Home.vue\");\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconst router = new vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  routes: [{\n    path: '/create-from-excel',\n    name: 'New table from excel file',\n    component: admin_pages_CreateFromSpreadsheet_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }, {\n    path: '/settings',\n    name: 'Settings',\n    component: admin_pages_Settings_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, {\n    path: '/edit',\n    name: 'Edit Existing',\n    component: admin_pages_Edit_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }, {\n    path: '/create-from-scratch',\n    name: 'Add From Scratch',\n    component: admin_pages_AddFromScratch_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }, {\n    path: '/',\n    name: 'Create A new Table',\n    component: admin_pages_Home_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }]\n});\nrouter.beforeEach((to, from, next) => {\n  debugger; // router.app.$store.commit('SET_ROUTE', to);\n\n  if ((from.path == \"/edit\" || from.path == \"/\") && to.path == \"/create-from-excel\") {\n    router.app.$store.commit('setEditingTableId', null);\n    router.app.$store.commit('updateGrid', {\n      data: []\n    });\n    router.app.$store.commit('setTitle', null);\n  }\n\n  if (from.query.table_id) {\n    let updateListTables = data => {\n      router.app.$store.commit('availableTables', data);\n    };\n\n    jQuery.ajax({\n      type: \"GET\",\n      url: ajaxurl + '?action=sprdsh_list_tables',\n      success: updateListTables\n    });\n  }\n\n  router.app.$store.commit('setPageTitle', to.name);\n  next();\n});\nrouter.afterEach((to, from) => {\n  debugger;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/admin/router/index.js?");

/***/ }),

/***/ "./src/admin/store.js":
/*!****************************!*\
  !*** ./src/admin/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconst store = new vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Store({\n  state: {\n    grid: {\n      data: []\n    },\n    editingTableId: null,\n    tableTitle: '',\n    tableList: [],\n    pageTitle: \"WP Spreadsheet & Table Builder\"\n  },\n  mutations: {\n    updateGrid(state, newData) {\n      state.grid = newData;\n    },\n\n    setTitle(state, title) {\n      state.tableTitle = title;\n    },\n\n    setEditingTableId(state, tableId) {\n      state.editingTableId = tableId;\n    },\n\n    availableTables(state, data) {\n      state.tableList = data;\n    },\n\n    setPageTitle(state, data) {\n      state.pageTitle = data;\n    }\n\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./src/admin/store.js?");

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

/***/ "./src/common/components/tableElement.vue":
/*!************************************************!*\
  !*** ./src/common/components/tableElement.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tableElement_vue_vue_type_template_id_5917d61c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableElement.vue?vue&type=template&id=5917d61c& */ \"./src/common/components/tableElement.vue?vue&type=template&id=5917d61c&\");\n/* harmony import */ var _tableElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableElement.vue?vue&type=script&lang=js& */ \"./src/common/components/tableElement.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _tableElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _tableElement_vue_vue_type_template_id_5917d61c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _tableElement_vue_vue_type_template_id_5917d61c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/common/components/tableElement.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/common/components/tableElement.vue?");

/***/ }),

/***/ "./src/common/components/tableElement.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/common/components/tableElement.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tableElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./tableElement.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/common/components/tableElement.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tableElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/common/components/tableElement.vue?");

/***/ }),

/***/ "./src/common/components/tableElement.vue?vue&type=template&id=5917d61c&":
/*!*******************************************************************************!*\
  !*** ./src/common/components/tableElement.vue?vue&type=template&id=5917d61c& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableElement_vue_vue_type_template_id_5917d61c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tableElement.vue?vue&type=template&id=5917d61c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/common/components/tableElement.vue?vue&type=template&id=5917d61c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableElement_vue_vue_type_template_id_5917d61c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableElement_vue_vue_type_template_id_5917d61c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/common/components/tableElement.vue?");

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