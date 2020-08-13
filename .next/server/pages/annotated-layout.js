module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/annotated-layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class AnnotatedLayout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      startRange: "0",
      endRange: "1",
      enabled: false
    });

    _defineProperty(this, "handleSubmit", () => {
      this.setState({
        startRange: this.state.startRange,
        endRange: this.state.endRange
      });
      const startRangeInt = this.state.startRange;
      const endRangeInt = this.state.endRange;
      store_js__WEBPACK_IMPORTED_MODULE_2___default.a.set('startRangeInt', startRangeInt);
      store_js__WEBPACK_IMPORTED_MODULE_2___default.a.set('endRangeInt', endRangeInt);
      console.log('start range', startRangeInt);
      console.log('end range', endRangeInt);
    });

    _defineProperty(this, "handleChange", field => {
      return value => this.setState({
        [field]: value
      });
    });
  }

  render() {
    const {
      startRange,
      endRange,
      enabled
    } = this.state;
    const contentStatus = enabled ? 'Disable' : 'Enable';
    const textStatus = enabled ? 'enabled' : 'disabled';
    const startRangeInt = this.state.startRange;
    const endRangeInt = this.state.endRange;
    store_js__WEBPACK_IMPORTED_MODULE_2___default.a.set('startRangeInt', startRangeInt);
    store_js__WEBPACK_IMPORTED_MODULE_2___default.a.set('endRangeInt', endRangeInt);
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
      title: "Range of Orders",
      description: "Select range of orders to convert notes into word doc form"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: this.handleSubmit
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: startRange,
      onChange: this.handleChange('startRange'),
      label: "Starting Order (If 0 is given => ie: Starting Order: 0, Orders to search and make: 1 => will make orders 0,1. Otherwise, Starting Order: 1, Orders to search and make: 3 => will make orders 2,3,4)",
      type: "startRange"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: endRange,
      onChange: this.handleChange('endRange'),
      label: "Orders to search and make",
      type: "endRange"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      distribution: "trailing"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true,
      submit: true
    }, "Enter"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AnnotatedLayout);

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("store-js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYW5ub3RhdGVkLWxheW91dC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiIl0sIm5hbWVzIjpbIkFubm90YXRlZExheW91dCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwic3RhcnRSYW5nZSIsImVuZFJhbmdlIiwiZW5hYmxlZCIsInNldFN0YXRlIiwic3RhdGUiLCJzdGFydFJhbmdlSW50IiwiZW5kUmFuZ2VJbnQiLCJzdG9yZSIsInNldCIsImNvbnNvbGUiLCJsb2ciLCJmaWVsZCIsInZhbHVlIiwicmVuZGVyIiwiY29udGVudFN0YXR1cyIsInRleHRTdGF0dXMiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZE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IiwiZmlsZSI6InBhZ2VzL2Fubm90YXRlZC1sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2Fubm90YXRlZC1sYXlvdXQuanNcIik7XG4iLCJpbXBvcnQge1xyXG4gICAgQnV0dG9uLFxyXG4gICAgQ2FyZCxcclxuICAgIEZvcm0sXHJcbiAgICBGb3JtTGF5b3V0LFxyXG4gICAgTGF5b3V0LFxyXG4gICAgUGFnZSxcclxuICAgIFNldHRpbmdUb2dnbGUsXHJcbiAgICBTdGFjayxcclxuICAgIFRleHRGaWVsZCxcclxuICAgIFRleHRTdHlsZSxcclxuICB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG4gIGltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcblxyXG4gIFxyXG4gIGNsYXNzIEFubm90YXRlZExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgc3RhcnRSYW5nZTogXCIwXCIsXHJcbiAgICAgIGVuZFJhbmdlOiBcIjFcIixcclxuICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7IHN0YXJ0UmFuZ2UsIGVuZFJhbmdlLCBlbmFibGVkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICBjb25zdCBjb250ZW50U3RhdHVzID0gZW5hYmxlZCA/ICdEaXNhYmxlJyA6ICdFbmFibGUnO1xyXG4gICAgICBjb25zdCB0ZXh0U3RhdHVzID0gZW5hYmxlZCA/ICdlbmFibGVkJyA6ICdkaXNhYmxlZCc7XHJcblxyXG4gICAgICBjb25zdCBzdGFydFJhbmdlSW50ID0gdGhpcy5zdGF0ZS5zdGFydFJhbmdlXHJcbiAgICAgIGNvbnN0IGVuZFJhbmdlSW50ID0gdGhpcy5zdGF0ZS5lbmRSYW5nZVxyXG4gICAgICBzdG9yZS5zZXQoJ3N0YXJ0UmFuZ2VJbnQnLCBzdGFydFJhbmdlSW50KVxyXG4gICAgICBzdG9yZS5zZXQoJ2VuZFJhbmdlSW50JywgZW5kUmFuZ2VJbnQpXHJcbiAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBhZ2U+XHJcbiAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgICB0aXRsZT1cIlJhbmdlIG9mIE9yZGVyc1wiXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJTZWxlY3QgcmFuZ2Ugb2Ygb3JkZXJzIHRvIGNvbnZlcnQgbm90ZXMgaW50byB3b3JkIGRvYyBmb3JtXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGFydFJhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdzdGFydFJhbmdlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXJ0aW5nIE9yZGVyIChJZiAwIGlzIGdpdmVuID0+IGllOiBTdGFydGluZyBPcmRlcjogMCwgT3JkZXJzIHRvIHNlYXJjaCBhbmQgbWFrZTogMSA9PiB3aWxsIG1ha2Ugb3JkZXJzIDAsMS4gT3RoZXJ3aXNlLCBTdGFydGluZyBPcmRlcjogMSwgT3JkZXJzIHRvIHNlYXJjaCBhbmQgbWFrZTogMyA9PiB3aWxsIG1ha2Ugb3JkZXJzIDIsMyw0KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3RhcnRSYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW5kUmFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2VuZFJhbmdlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9yZGVycyB0byBzZWFyY2ggYW5kIG1ha2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVuZFJhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249XCJ0cmFpbGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IHN1Ym1pdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRW50ZXJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHN0YXJ0UmFuZ2U6IHRoaXMuc3RhdGUuc3RhcnRSYW5nZSxcclxuICAgICAgICBlbmRSYW5nZTogdGhpcy5zdGF0ZS5lbmRSYW5nZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHN0YXJ0UmFuZ2VJbnQgPSB0aGlzLnN0YXRlLnN0YXJ0UmFuZ2VcclxuICAgICAgY29uc3QgZW5kUmFuZ2VJbnQgPSB0aGlzLnN0YXRlLmVuZFJhbmdlXHJcbiAgICAgIHN0b3JlLnNldCgnc3RhcnRSYW5nZUludCcsIHN0YXJ0UmFuZ2VJbnQpXHJcbiAgICAgIHN0b3JlLnNldCgnZW5kUmFuZ2VJbnQnLCBlbmRSYW5nZUludClcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdzdGFydCByYW5nZScsIHN0YXJ0UmFuZ2VJbnQpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdlbmQgcmFuZ2UnLCBlbmRSYW5nZUludClcclxuICAgIH07XHJcbiAgXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZmllbGQpID0+IHtcclxuICAgICAgcmV0dXJuICh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xyXG4gICAgfTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgQW5ub3RhdGVkTGF5b3V0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RvcmUtanNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==