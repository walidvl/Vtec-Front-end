"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/car/new-car",{

/***/ "./src/components/New-car-characteristics/new-car-characteristics.jsx":
/*!****************************************************************************!*\
  !*** ./src/components/New-car-characteristics/new-car-characteristics.jsx ***!
  \****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_khairallahmohammed_Documents_laravel_Vtec_Front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_khairallahmohammed_Documents_laravel_Vtec_Front_end_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_khairallahmohammed_Documents_laravel_Vtec_Front_end_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_khairallahmohammed_Documents_laravel_Vtec_Front_end_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_khairallahmohammed_Documents_laravel_Vtec_Front_end_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/khairallahmohammed/Documents/laravel/Vtec-Front-end/src/components/New-car-characteristics/new-car-characteristics.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar NewCarCharacteristics = function NewCarCharacteristics() {\n  _s();\n\n  var handleAddCharacteristic = function handleAddCharacteristic(state, action) {\n    console.log(state, action);\n    return [].concat((0,_Users_khairallahmohammed_Documents_laravel_Vtec_Front_end_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state), [action]);\n  };\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      characteristics = _useState[0],\n      setCharacteristics = _useState[1];\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(handleAddCharacteristic, []),\n      addCharacteristic = _useReducer[0],\n      setAddCharacteristic = _useReducer[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = (0,_Users_khairallahmohammed_Documents_laravel_Vtec_Front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_khairallahmohammed_Documents_laravel_Vtec_Front_end_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n        var response;\n        return _Users_khairallahmohammed_Documents_laravel_Vtec_Front_end_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"http://127.0.0.1:8000/api/vehicles-characteristics\");\n\n              case 3:\n                response = _context.sent;\n                console.log(\"Vehicle Data: \", response.data);\n                setCharacteristics(response.data.characteristics);\n                _context.next = 11;\n                break;\n\n              case 8:\n                _context.prev = 8;\n                _context.t0 = _context[\"catch\"](0);\n                console.error(\"Error fetching vehicle data\", _context.t0);\n\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 8]]);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []); // Function to handle the sanitization of the image names\n\n  var sanitizeImageName = function sanitizeImageName(name) {\n    switch (name) {\n      case \"Dtc OFF\":\n        return \"dtc-removal\";\n\n      case \"Cold Start Noise\":\n        return \"cold-start-noise\";\n\n      case \"Hardcut Popcorn Limiter (Diesel Only)\":\n        return \"pop-bang-crackle-map\";\n\n      case \"Gpf/Opf OFF\":\n        return \"gpf_removal\";\n\n      case \"Dpf/Fap OFF\":\n        return \"dpf-off\";\n\n      case \"Readiness Calibration\":\n        return \"readiness_calibration\";\n\n      case \"Bmw Sports Display\":\n        return \"bmw\";\n\n      case \"Adblue/Src OFF\":\n        return \"adblue\";\n\n      case \"Maf OFF\":\n        return \"maf_removal\";\n\n      case \"Speed Limit OFF\":\n        return \"bune\";\n\n      case \"TQ Monitoring Off\":\n        return \"detac\";\n\n      case \"Pop&Bang\":\n        return \"pop-bang-crackle-map\";\n\n      case \"Start/Stop Disable\":\n        return \"start-stop-off\";\n\n      case \"Tva Off\":\n        return \"anti-lag\";\n\n      case \"Immo OFF\":\n        return \"immo-off\";\n\n      case \"Sap Delete\":\n        return \"sap_removal\";\n\n      case \"Evap Removal\":\n        return \"evap_removal\";\n\n      case \"Swirl Flaps\":\n        return \"flaps\";\n\n      case \"Exhaust Flap Removal\":\n        return \"flaps\";\n\n      case \"O2/Lamba OFF\":\n        return \"lambda-o2-off\";\n\n      case \"Hot Start\":\n        return \"launch_control\";\n\n      case \"Egr OFF\":\n        return \"egr\";\n\n      default:\n        // For any other name, replace spaces with underscores (if needed)\n        return name.replace(/[^a-zA-Z0-9]/g, \"_\");\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"section\", {\n    className: \"sub-bg \",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h3\", {\n          children: \"Zus\\xE4tzliche Optionen\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"row mt-30 line-height-35\",\n        children: characteristics && characteristics.length > 0 ? characteristics.map(function (option) {\n          var sanitizedImageName = sanitizeImageName(option.characteristic_name); // Get sanitized image name\n\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"col-lg-3 col-md-4 col-4 mb-3 mr-5 p-1 d-flex align-items-center butn curve bg-black\",\n            style: {\n              backgroundColor: \"#2b2d42\",\n              color: \"white\"\n            },\n            onClick: function onClick() {\n              return setAddCharacteristic(option.characteristic_id);\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n              className: \"\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n                src: \"/img/caroptions/\".concat(sanitizedImageName, \".png\"),\n                alt: option.characteristic_name,\n                className: \"img-fluid\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 103,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 101,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n              className: \"ml-3\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n                children: option.characteristic_name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 110,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 109,\n              columnNumber: 19\n            }, _this)]\n          }, option.characteristic_id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 17\n          }, _this);\n        }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n          children: \"No additional options available\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(NewCarCharacteristics, \"rLGt3cRrs/I99MgMEUT37U8RxPM=\");\n\n_c = NewCarCharacteristics;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewCarCharacteristics);\n\nvar _c;\n\n$RefreshReg$(_c, \"NewCarCharacteristics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OZXctY2FyLWNoYXJhY3RlcmlzdGljcy9uZXctY2FyLWNoYXJhY3RlcmlzdGljcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxJQUFNSyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFBQTs7QUFFbEMsTUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDakRDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaLEVBQW1CQyxNQUFuQjtBQUNBLHFMQUFXRCxLQUFYLElBQWtCQyxNQUFsQjtBQUVELEdBSkQ7O0FBTUUsa0JBQThDTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFBQSxNQUFPUSxlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFDQSxvQkFBa0RYLGlEQUFVLENBQUNLLHVCQUFELEVBQTBCLEVBQTFCLENBQTVEO0FBQUEsTUFBT08saUJBQVA7QUFBQSxNQUEwQkMsb0JBQTFCOztBQUVBWixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWixRQUFNYSxTQUFTO0FBQUEsNFVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVTWCxnREFBQSxDQUFVLG9EQUFWLENBRlQ7O0FBQUE7QUFFUmEsZ0JBQUFBLFFBRlE7QUFHZFIsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCTyxRQUFRLENBQUNDLElBQXZDO0FBQ0FOLGdCQUFBQSxrQkFBa0IsQ0FBQ0ssUUFBUSxDQUFDQyxJQUFULENBQWNQLGVBQWYsQ0FBbEI7QUFKYztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1kRixnQkFBQUEsT0FBTyxDQUFDVSxLQUFSLENBQWMsNkJBQWQ7O0FBTmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVEosU0FBUztB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O0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBcUJELFNBeEJELENBREQsZ0JBMkJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3Q0QsQ0F0SEQ7O0dBQU16Qjs7S0FBQUE7QUF3SE4sK0RBQWVBLHFCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05ldy1jYXItY2hhcmFjdGVyaXN0aWNzL25ldy1jYXItY2hhcmFjdGVyaXN0aWNzLmpzeD81YWYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IE5ld0NhckNoYXJhY3RlcmlzdGljcyA9ICgpID0+IHtcblxuICBjb25zdCBoYW5kbGVBZGRDaGFyYWN0ZXJpc3RpYyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc29sZS5sb2coc3RhdGUsIGFjdGlvbilcbiAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb25dXG4gICAgXG4gIH1cblxuICAgIGNvbnN0IFtjaGFyYWN0ZXJpc3RpY3MsIHNldENoYXJhY3RlcmlzdGljc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2FkZENoYXJhY3RlcmlzdGljLCBzZXRBZGRDaGFyYWN0ZXJpc3RpY10gPSB1c2VSZWR1Y2VyKGhhbmRsZUFkZENoYXJhY3RlcmlzdGljLCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3ZlaGljbGVzLWNoYXJhY3RlcmlzdGljc1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVmVoaWNsZSBEYXRhOiBcIiwgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICBzZXRDaGFyYWN0ZXJpc3RpY3MocmVzcG9uc2UuZGF0YS5jaGFyYWN0ZXJpc3RpY3MpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdmVoaWNsZSBkYXRhXCIsIGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgICB9LCBbXSk7XG5cbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBzYW5pdGl6YXRpb24gb2YgdGhlIGltYWdlIG5hbWVzXG4gIGNvbnN0IHNhbml0aXplSW1hZ2VOYW1lID0gKG5hbWUpID0+IHtcbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgY2FzZSBcIkR0YyBPRkZcIjpcbiAgICAgICAgICByZXR1cm4gXCJkdGMtcmVtb3ZhbFwiO1xuICAgICAgICBjYXNlIFwiQ29sZCBTdGFydCBOb2lzZVwiOlxuICAgICAgICAgIHJldHVybiBcImNvbGQtc3RhcnQtbm9pc2VcIjtcbiAgICAgICAgY2FzZSBcIkhhcmRjdXQgUG9wY29ybiBMaW1pdGVyIChEaWVzZWwgT25seSlcIjpcbiAgICAgICAgICByZXR1cm4gXCJwb3AtYmFuZy1jcmFja2xlLW1hcFwiO1xuICAgICAgICBjYXNlIFwiR3BmL09wZiBPRkZcIjpcbiAgICAgICAgICByZXR1cm4gXCJncGZfcmVtb3ZhbFwiO1xuICAgICAgICBjYXNlIFwiRHBmL0ZhcCBPRkZcIjpcbiAgICAgICAgICByZXR1cm4gXCJkcGYtb2ZmXCI7XG4gICAgICAgIGNhc2UgXCJSZWFkaW5lc3MgQ2FsaWJyYXRpb25cIjpcbiAgICAgICAgICByZXR1cm4gXCJyZWFkaW5lc3NfY2FsaWJyYXRpb25cIjtcbiAgICAgICAgY2FzZSBcIkJtdyBTcG9ydHMgRGlzcGxheVwiOlxuICAgICAgICAgIHJldHVybiBcImJtd1wiO1xuICAgICAgICBjYXNlIFwiQWRibHVlL1NyYyBPRkZcIjpcbiAgICAgICAgICByZXR1cm4gXCJhZGJsdWVcIjtcbiAgICAgICAgY2FzZSBcIk1hZiBPRkZcIjpcbiAgICAgICAgICByZXR1cm4gXCJtYWZfcmVtb3ZhbFwiO1xuICAgICAgICBjYXNlIFwiU3BlZWQgTGltaXQgT0ZGXCI6XG4gICAgICAgICAgcmV0dXJuIFwiYnVuZVwiO1xuICAgICAgICBjYXNlIFwiVFEgTW9uaXRvcmluZyBPZmZcIjpcbiAgICAgICAgICByZXR1cm4gXCJkZXRhY1wiO1xuICAgICAgICBjYXNlIFwiUG9wJkJhbmdcIjpcbiAgICAgICAgICByZXR1cm4gXCJwb3AtYmFuZy1jcmFja2xlLW1hcFwiO1xuICAgICAgICBjYXNlIFwiU3RhcnQvU3RvcCBEaXNhYmxlXCI6XG4gICAgICAgICAgcmV0dXJuIFwic3RhcnQtc3RvcC1vZmZcIjtcbiAgICAgICAgY2FzZSBcIlR2YSBPZmZcIjpcbiAgICAgICAgICByZXR1cm4gXCJhbnRpLWxhZ1wiO1xuICAgICAgICBjYXNlIFwiSW1tbyBPRkZcIjpcbiAgICAgICAgICByZXR1cm4gXCJpbW1vLW9mZlwiO1xuICAgICAgICBjYXNlIFwiU2FwIERlbGV0ZVwiOlxuICAgICAgICAgIHJldHVybiBcInNhcF9yZW1vdmFsXCI7XG4gICAgICAgIGNhc2UgXCJFdmFwIFJlbW92YWxcIjpcbiAgICAgICAgICByZXR1cm4gXCJldmFwX3JlbW92YWxcIjtcbiAgICAgICAgY2FzZSBcIlN3aXJsIEZsYXBzXCI6XG4gICAgICAgICAgcmV0dXJuIFwiZmxhcHNcIjtcbiAgICAgICAgY2FzZSBcIkV4aGF1c3QgRmxhcCBSZW1vdmFsXCI6XG4gICAgICAgICAgcmV0dXJuIFwiZmxhcHNcIjtcbiAgICAgICAgY2FzZSBcIk8yL0xhbWJhIE9GRlwiOlxuICAgICAgICAgIHJldHVybiBcImxhbWJkYS1vMi1vZmZcIjtcbiAgICAgICAgY2FzZSBcIkhvdCBTdGFydFwiOlxuICAgICAgICAgIHJldHVybiBcImxhdW5jaF9jb250cm9sXCI7XG4gICAgICAgIGNhc2UgXCJFZ3IgT0ZGXCI6XG4gICAgICAgICAgcmV0dXJuIFwiZWdyXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIEZvciBhbnkgb3RoZXIgbmFtZSwgcmVwbGFjZSBzcGFjZXMgd2l0aCB1bmRlcnNjb3JlcyAoaWYgbmVlZGVkKVxuICAgICAgICByZXR1cm4gbmFtZS5yZXBsYWNlKC9bXmEtekEtWjAtOV0vZywgXCJfXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInN1Yi1iZyBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGgzPlp1cyYjMjI4O3R6bGljaGUgT3B0aW9uZW48L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMzAgbGluZS1oZWlnaHQtMzVcIj5cbiAgICAgICAgICB7Y2hhcmFjdGVyaXN0aWNzICYmIGNoYXJhY3RlcmlzdGljcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgY2hhcmFjdGVyaXN0aWNzLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHNhbml0aXplZEltYWdlTmFtZSA9IHNhbml0aXplSW1hZ2VOYW1lKG9wdGlvbi5jaGFyYWN0ZXJpc3RpY19uYW1lKTsgLy8gR2V0IHNhbml0aXplZCBpbWFnZSBuYW1lXG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbi5jaGFyYWN0ZXJpc3RpY19pZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbC1sZy0zIGNvbC1tZC00IGNvbC00IG1iLTMgbXItNSBwLTEgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBidXRuIGN1cnZlIGJnLWJsYWNrYH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMmIyZDQyXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFkZENoYXJhY3RlcmlzdGljKG9wdGlvbi5jaGFyYWN0ZXJpc3RpY19pZCl9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICB7LyogRHluYW1pY2FsbHkgc2V0IHRoZSBpbWFnZSBzb3VyY2UgYmFzZWQgb24gdGhlIHNhbml0aXplZCBjaGFyYWN0ZXJpc3RpYyBuYW1lICovfVxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2Nhcm9wdGlvbnMvJHtzYW5pdGl6ZWRJbWFnZU5hbWV9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtvcHRpb24uY2hhcmFjdGVyaXN0aWNfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e29wdGlvbi5jaGFyYWN0ZXJpc3RpY19uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHA+Tm8gYWRkaXRpb25hbCBvcHRpb25zIGF2YWlsYWJsZTwvcD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0NhckNoYXJhY3RlcmlzdGljcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZHVjZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTmV3Q2FyQ2hhcmFjdGVyaXN0aWNzIiwiaGFuZGxlQWRkQ2hhcmFjdGVyaXN0aWMiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjaGFyYWN0ZXJpc3RpY3MiLCJzZXRDaGFyYWN0ZXJpc3RpY3MiLCJhZGRDaGFyYWN0ZXJpc3RpYyIsInNldEFkZENoYXJhY3RlcmlzdGljIiwiZmV0Y2hEYXRhIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJzYW5pdGl6ZUltYWdlTmFtZSIsIm5hbWUiLCJyZXBsYWNlIiwibGVuZ3RoIiwibWFwIiwib3B0aW9uIiwic2FuaXRpemVkSW1hZ2VOYW1lIiwiY2hhcmFjdGVyaXN0aWNfbmFtZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiY2hhcmFjdGVyaXN0aWNfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/New-car-characteristics/new-car-characteristics.jsx\n");

/***/ })

});