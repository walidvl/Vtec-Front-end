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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_khairallahmohammed_Documents_laravel_Vtec_Front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_khairallahmohammed_Documents_laravel_Vtec_Front_end_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_khairallahmohammed_Documents_laravel_Vtec_Front_end_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_khairallahmohammed_Documents_laravel_Vtec_Front_end_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/khairallahmohammed/Documents/laravel/Vtec-Front-end/src/components/New-car-characteristics/new-car-characteristics.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar NewCarCharacteristics = function NewCarCharacteristics() {\n  _s();\n\n  var handleAddCharacteristi = function handleAddCharacteristi(state, action) {};\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(function () {}, []),\n      characteristics = _useReducer[0],\n      setCharacteristics = _useReducer[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = (0,_Users_khairallahmohammed_Documents_laravel_Vtec_Front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_khairallahmohammed_Documents_laravel_Vtec_Front_end_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var response;\n        return _Users_khairallahmohammed_Documents_laravel_Vtec_Front_end_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"http://127.0.0.1:8000/api/vehicles-characteristics\");\n\n              case 3:\n                response = _context.sent;\n                console.log(\"Vehicle Data: \", response.data);\n                setCharacteristics(response.data.characteristics);\n                _context.next = 11;\n                break;\n\n              case 8:\n                _context.prev = 8;\n                _context.t0 = _context[\"catch\"](0);\n                console.error(\"Error fetching vehicle data\", _context.t0);\n\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 8]]);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []); // Function to handle the sanitization of the image names\n\n  var sanitizeImageName = function sanitizeImageName(name) {\n    switch (name) {\n      case \"Dtc OFF\":\n        return \"dtc-removal\";\n\n      case \"Cold Start Noise\":\n        return \"cold-start-noise\";\n\n      case \"Hardcut Popcorn Limiter (Diesel Only)\":\n        return \"pop-bang-crackle-map\";\n\n      case \"Gpf/Opf OFF\":\n        return \"gpf_removal\";\n\n      case \"Dpf/Fap OFF\":\n        return \"dpf-off\";\n\n      case \"Readiness Calibration\":\n        return \"readiness_calibration\";\n\n      case \"Bmw Sports Display\":\n        return \"bmw\";\n\n      case \"Adblue/Src OFF\":\n        return \"adblue\";\n\n      case \"Maf OFF\":\n        return \"maf_removal\";\n\n      case \"Speed Limit OFF\":\n        return \"bune\";\n\n      case \"TQ Monitoring Off\":\n        return \"detac\";\n\n      case \"Pop&Bang\":\n        return \"pop-bang-crackle-map\";\n\n      case \"Start/Stop Disable\":\n        return \"start-stop-off\";\n\n      case \"Tva Off\":\n        return \"anti-lag\";\n\n      case \"Immo OFF\":\n        return \"immo-off\";\n\n      case \"Sap Delete\":\n        return \"sap_removal\";\n\n      case \"Evap Removal\":\n        return \"evap_removal\";\n\n      case \"Swirl Flaps\":\n        return \"flaps\";\n\n      case \"Exhaust Flap Removal\":\n        return \"flaps\";\n\n      case \"O2/Lamba OFF\":\n        return \"lambda-o2-off\";\n\n      case \"Hot Start\":\n        return \"launch_control\";\n\n      case \"Egr OFF\":\n        return \"egr\";\n\n      default:\n        // For any other name, replace spaces with underscores (if needed)\n        return name.replace(/[^a-zA-Z0-9]/g, \"_\");\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"section\", {\n    className: \"sub-bg \",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h3\", {\n          children: \"Zus\\xE4tzliche Optionen\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"row mt-30 line-height-35\",\n        children: characteristics && characteristics.length > 0 ? characteristics.map(function (option) {\n          var sanitizedImageName = sanitizeImageName(option.characteristic_name); // Get sanitized image name\n\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"col-lg-3 col-md-4 col-4 mb-3 mr-5 p-1 d-flex align-items-center butn curve\",\n            style: {\n              backgroundColor: \"#2b2d42\",\n              color: \"white\"\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n              className: \"\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n                src: \"/img/caroptions/\".concat(sanitizedImageName, \".png\"),\n                alt: option.characteristic_name,\n                className: \"img-fluid\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 102,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n              className: \"ml-3\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n                children: option.characteristic_name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 109,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 108,\n              columnNumber: 19\n            }, _this)]\n          }, option.characteristic_id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 17\n          }, _this);\n        }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n          children: \"No additional options available\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(NewCarCharacteristics, \"A6WfKZON7UCu3Z5fpLdJ7ZjrOEo=\");\n\n_c = NewCarCharacteristics;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewCarCharacteristics);\n\nvar _c;\n\n$RefreshReg$(_c, \"NewCarCharacteristics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OZXctY2FyLWNoYXJhY3RlcmlzdGljcy9uZXctY2FyLWNoYXJhY3RlcmlzdGljcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUkscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQUE7O0FBRWxDLE1BQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CLENBSWpELENBSkQ7O0FBTUUsb0JBQThDTixpREFBVSxDQUFDLFlBQU0sQ0FFOUQsQ0FGdUQsRUFFckQsRUFGcUQsQ0FBeEQ7QUFBQSxNQUFPTyxlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFJQVAsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTVEsU0FBUztBQUFBLDRVQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFU1AsZ0RBQUEsQ0FBVSxvREFBVixDQUZUOztBQUFBO0FBRVJTLGdCQUFBQSxRQUZRO0FBR2RDLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkYsUUFBUSxDQUFDRyxJQUF2QztBQUNBTixnQkFBQUEsa0JBQWtCLENBQUNHLFFBQVEsQ0FBQ0csSUFBVCxDQUFjUCxlQUFmLENBQWxCO0FBSmM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFNZEssZ0JBQUFBLE9BQU8sQ0FBQ0csS0FBUixDQUFjLDZCQUFkOztBQU5jO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVROLFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUFVQUEsSUFBQUEsU0FBUztBQUNWLEdBWk0sRUFZSixFQVpJLENBQVQsQ0FaZ0MsQ0EwQmxDOztBQUNBLE1BQU1PLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2xDLFlBQVFBLElBQVI7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ZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OZXctY2FyLWNoYXJhY3RlcmlzdGljcy9uZXctY2FyLWNoYXJhY3RlcmlzdGljcy5qc3g/NWFmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IE5ld0NhckNoYXJhY3RlcmlzdGljcyA9ICgpID0+IHtcblxuICBjb25zdCBoYW5kbGVBZGRDaGFyYWN0ZXJpc3RpID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgXG5cbiAgICBcbiAgfVxuXG4gICAgY29uc3QgW2NoYXJhY3RlcmlzdGljcywgc2V0Q2hhcmFjdGVyaXN0aWNzXSA9IHVzZVJlZHVjZXIoKCkgPT4ge1xuXG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdmVoaWNsZXMtY2hhcmFjdGVyaXN0aWNzXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJWZWhpY2xlIERhdGE6IFwiLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIHNldENoYXJhY3RlcmlzdGljcyhyZXNwb25zZS5kYXRhLmNoYXJhY3RlcmlzdGljcyk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB2ZWhpY2xlIGRhdGFcIiwgZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICAgIH0sIFtdKTtcblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgdGhlIHNhbml0aXphdGlvbiBvZiB0aGUgaW1hZ2UgbmFtZXNcbiAgY29uc3Qgc2FuaXRpemVJbWFnZU5hbWUgPSAobmFtZSkgPT4ge1xuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICBjYXNlIFwiRHRjIE9GRlwiOlxuICAgICAgICAgIHJldHVybiBcImR0Yy1yZW1vdmFsXCI7XG4gICAgICAgIGNhc2UgXCJDb2xkIFN0YXJ0IE5vaXNlXCI6XG4gICAgICAgICAgcmV0dXJuIFwiY29sZC1zdGFydC1ub2lzZVwiO1xuICAgICAgICBjYXNlIFwiSGFyZGN1dCBQb3Bjb3JuIExpbWl0ZXIgKERpZXNlbCBPbmx5KVwiOlxuICAgICAgICAgIHJldHVybiBcInBvcC1iYW5nLWNyYWNrbGUtbWFwXCI7XG4gICAgICAgIGNhc2UgXCJHcGYvT3BmIE9GRlwiOlxuICAgICAgICAgIHJldHVybiBcImdwZl9yZW1vdmFsXCI7XG4gICAgICAgIGNhc2UgXCJEcGYvRmFwIE9GRlwiOlxuICAgICAgICAgIHJldHVybiBcImRwZi1vZmZcIjtcbiAgICAgICAgY2FzZSBcIlJlYWRpbmVzcyBDYWxpYnJhdGlvblwiOlxuICAgICAgICAgIHJldHVybiBcInJlYWRpbmVzc19jYWxpYnJhdGlvblwiO1xuICAgICAgICBjYXNlIFwiQm13IFNwb3J0cyBEaXNwbGF5XCI6XG4gICAgICAgICAgcmV0dXJuIFwiYm13XCI7XG4gICAgICAgIGNhc2UgXCJBZGJsdWUvU3JjIE9GRlwiOlxuICAgICAgICAgIHJldHVybiBcImFkYmx1ZVwiO1xuICAgICAgICBjYXNlIFwiTWFmIE9GRlwiOlxuICAgICAgICAgIHJldHVybiBcIm1hZl9yZW1vdmFsXCI7XG4gICAgICAgIGNhc2UgXCJTcGVlZCBMaW1pdCBPRkZcIjpcbiAgICAgICAgICByZXR1cm4gXCJidW5lXCI7XG4gICAgICAgIGNhc2UgXCJUUSBNb25pdG9yaW5nIE9mZlwiOlxuICAgICAgICAgIHJldHVybiBcImRldGFjXCI7XG4gICAgICAgIGNhc2UgXCJQb3AmQmFuZ1wiOlxuICAgICAgICAgIHJldHVybiBcInBvcC1iYW5nLWNyYWNrbGUtbWFwXCI7XG4gICAgICAgIGNhc2UgXCJTdGFydC9TdG9wIERpc2FibGVcIjpcbiAgICAgICAgICByZXR1cm4gXCJzdGFydC1zdG9wLW9mZlwiO1xuICAgICAgICBjYXNlIFwiVHZhIE9mZlwiOlxuICAgICAgICAgIHJldHVybiBcImFudGktbGFnXCI7XG4gICAgICAgIGNhc2UgXCJJbW1vIE9GRlwiOlxuICAgICAgICAgIHJldHVybiBcImltbW8tb2ZmXCI7XG4gICAgICAgIGNhc2UgXCJTYXAgRGVsZXRlXCI6XG4gICAgICAgICAgcmV0dXJuIFwic2FwX3JlbW92YWxcIjtcbiAgICAgICAgY2FzZSBcIkV2YXAgUmVtb3ZhbFwiOlxuICAgICAgICAgIHJldHVybiBcImV2YXBfcmVtb3ZhbFwiO1xuICAgICAgICBjYXNlIFwiU3dpcmwgRmxhcHNcIjpcbiAgICAgICAgICByZXR1cm4gXCJmbGFwc1wiO1xuICAgICAgICBjYXNlIFwiRXhoYXVzdCBGbGFwIFJlbW92YWxcIjpcbiAgICAgICAgICByZXR1cm4gXCJmbGFwc1wiO1xuICAgICAgICBjYXNlIFwiTzIvTGFtYmEgT0ZGXCI6XG4gICAgICAgICAgcmV0dXJuIFwibGFtYmRhLW8yLW9mZlwiO1xuICAgICAgICBjYXNlIFwiSG90IFN0YXJ0XCI6XG4gICAgICAgICAgcmV0dXJuIFwibGF1bmNoX2NvbnRyb2xcIjtcbiAgICAgICAgY2FzZSBcIkVnciBPRkZcIjpcbiAgICAgICAgICByZXR1cm4gXCJlZ3JcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gRm9yIGFueSBvdGhlciBuYW1lLCByZXBsYWNlIHNwYWNlcyB3aXRoIHVuZGVyc2NvcmVzIChpZiBuZWVkZWQpXG4gICAgICAgIHJldHVybiBuYW1lLnJlcGxhY2UoL1teYS16QS1aMC05XS9nLCBcIl9cIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic3ViLWJnIFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8aDM+WnVzJiMyMjg7dHpsaWNoZSBPcHRpb25lbjwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zMCBsaW5lLWhlaWdodC0zNVwiPlxuICAgICAgICAgIHtjaGFyYWN0ZXJpc3RpY3MgJiYgY2hhcmFjdGVyaXN0aWNzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICBjaGFyYWN0ZXJpc3RpY3MubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc2FuaXRpemVkSW1hZ2VOYW1lID0gc2FuaXRpemVJbWFnZU5hbWUob3B0aW9uLmNoYXJhY3RlcmlzdGljX25hbWUpOyAvLyBHZXQgc2FuaXRpemVkIGltYWdlIG5hbWVcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9uLmNoYXJhY3RlcmlzdGljX2lkfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTQgY29sLTQgbWItMyBtci01IHAtMSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJ1dG4gY3VydmVcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMyYjJkNDJcIiwgY29sb3I6IFwid2hpdGVcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBEeW5hbWljYWxseSBzZXQgdGhlIGltYWdlIHNvdXJjZSBiYXNlZCBvbiB0aGUgc2FuaXRpemVkIGNoYXJhY3RlcmlzdGljIG5hbWUgKi99XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY2Fyb3B0aW9ucy8ke3Nhbml0aXplZEltYWdlTmFtZX0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e29wdGlvbi5jaGFyYWN0ZXJpc3RpY19uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57b3B0aW9uLmNoYXJhY3RlcmlzdGljX25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8cD5ObyBhZGRpdGlvbmFsIG9wdGlvbnMgYXZhaWxhYmxlPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3Q2FyQ2hhcmFjdGVyaXN0aWNzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVkdWNlciIsInVzZUVmZmVjdCIsImF4aW9zIiwiTmV3Q2FyQ2hhcmFjdGVyaXN0aWNzIiwiaGFuZGxlQWRkQ2hhcmFjdGVyaXN0aSIsInN0YXRlIiwiYWN0aW9uIiwiY2hhcmFjdGVyaXN0aWNzIiwic2V0Q2hhcmFjdGVyaXN0aWNzIiwiZmV0Y2hEYXRhIiwiZ2V0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwic2FuaXRpemVJbWFnZU5hbWUiLCJuYW1lIiwicmVwbGFjZSIsImxlbmd0aCIsIm1hcCIsIm9wdGlvbiIsInNhbml0aXplZEltYWdlTmFtZSIsImNoYXJhY3RlcmlzdGljX25hbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImNoYXJhY3RlcmlzdGljX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/New-car-characteristics/new-car-characteristics.jsx\n");

/***/ })

});