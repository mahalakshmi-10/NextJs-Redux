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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _states_announcement_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../states/announcement/action */ \"./states/announcement/action.tsx\");\n\nvar _jsxFileName = \"/home/trioangle/Documents/Nextjs-Redux/pages/index.tsx\";\n\n\n\n\n\nclass IndexPage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  render() {\n    const {\n      announcementMessage,\n      updateAnnouncement\n    } = this.props;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [\"Announcement: \", announcementMessage, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: () => updateAnnouncement('We are closed today!'),\n        children: \"Close!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\nconst mapStateToProps = state => ({\n  announcementMessage: state.message\n}); // dispatch(sidebarVisibleAction())\n\n\nconst mapDispatchToProps = dispatch => ({\n  updateAnnouncement: Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"bindActionCreators\"])(_states_announcement_action__WEBPACK_IMPORTED_MODULE_4__[\"updateAnnouncement\"], dispatch)\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(IndexPage));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJJbmRleFBhZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsImFubm91bmNlbWVudE1lc3NhZ2UiLCJ1cGRhdGVBbm5vdW5jZW1lbnQiLCJwcm9wcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWVzc2FnZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsTUFBTUEsU0FBTixTQUF3QkMsNENBQUssQ0FBQ0MsU0FBOUIsQ0FBd0Q7QUFDdERDLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUMseUJBQUY7QUFBdUJDO0FBQXZCLFFBQThDLEtBQUtDLEtBQXpEO0FBQ0Esd0JBQ0U7QUFBQSxtQ0FDaUJGLG1CQURqQixlQUVFO0FBQVEsZUFBTyxFQUFFLE1BQU9DLGtCQUFrQixDQUFDLHNCQUFELENBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFNRDs7QUFUcUQ7O0FBWXhELE1BQU1FLGVBQWUsR0FBSUMsS0FBRCxLQUFZO0FBQ2xDSixxQkFBbUIsRUFBRUksS0FBSyxDQUFDQztBQURPLENBQVosQ0FBeEIsQyxDQUdBOzs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBSUMsUUFBRCxLQUFlO0FBQ3hDTixvQkFBa0IsRUFBRU8sZ0VBQWtCLENBQUNQLDhFQUFELEVBQXFCTSxRQUFyQjtBQURFLENBQWYsQ0FBM0I7O0FBSWVFLDBIQUFPLENBQUNOLGVBQUQsRUFBa0JHLGtCQUFsQixDQUFQLENBQTZDVixTQUE3QyxDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyB1cGRhdGVBbm5vdW5jZW1lbnQgfSBmcm9tICcuLi9zdGF0ZXMvYW5ub3VuY2VtZW50L2FjdGlvbidcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGFubm91bmNlbWVudE1lc3NhZ2U6IHN0cmluZ1xuICB1cGRhdGVBbm5vdW5jZW1lbnQ6IGFueVxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHt9XG5cbmNsYXNzIEluZGV4UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhbm5vdW5jZW1lbnRNZXNzYWdlLCB1cGRhdGVBbm5vdW5jZW1lbnQgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgQW5ub3VuY2VtZW50OiB7YW5ub3VuY2VtZW50TWVzc2FnZX1cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiAgdXBkYXRlQW5ub3VuY2VtZW50KCdXZSBhcmUgY2xvc2VkIHRvZGF5IScpfT5DbG9zZSE8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGFubm91bmNlbWVudE1lc3NhZ2U6IHN0YXRlLm1lc3NhZ2UsXG59KVxuLy8gZGlzcGF0Y2goc2lkZWJhclZpc2libGVBY3Rpb24oKSlcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgdXBkYXRlQW5ub3VuY2VtZW50OiBiaW5kQWN0aW9uQ3JlYXRvcnModXBkYXRlQW5ub3VuY2VtZW50LCBkaXNwYXRjaClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEluZGV4UGFnZSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./states/announcement/action.tsx":
/*!****************************************!*\
  !*** ./states/announcement/action.tsx ***!
  \****************************************/
/*! exports provided: UPDATE_ANNOUNCEMENT, updateAnnouncement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_ANNOUNCEMENT\", function() { return UPDATE_ANNOUNCEMENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateAnnouncement\", function() { return updateAnnouncement; });\nconst UPDATE_ANNOUNCEMENT = '[Announcement] update'; // Action Creators\n\nfunction updateAnnouncement(message) {\n  return {\n    type: UPDATE_ANNOUNCEMENT,\n    message\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGF0ZXMvYW5ub3VuY2VtZW50L2FjdGlvbi50c3g/YTM5MSJdLCJuYW1lcyI6WyJVUERBVEVfQU5OT1VOQ0VNRU5UIiwidXBkYXRlQW5ub3VuY2VtZW50IiwibWVzc2FnZSIsInR5cGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLG1CQUFtQixHQUFHLHVCQUE1QixDLENBRVA7O0FBQ08sU0FBU0Msa0JBQVQsQ0FBNEJDLE9BQTVCLEVBQTZDO0FBQ2xELFNBQU87QUFDSEMsUUFBSSxFQUFFSCxtQkFESDtBQUVIRTtBQUZHLEdBQVA7QUFJRCIsImZpbGUiOiIuL3N0YXRlcy9hbm5vdW5jZW1lbnQvYWN0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBVUERBVEVfQU5OT1VOQ0VNRU5UID0gJ1tBbm5vdW5jZW1lbnRdIHVwZGF0ZSdcblxuLy8gQWN0aW9uIENyZWF0b3JzXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQW5ub3VuY2VtZW50KG1lc3NhZ2U6IHN0cmluZykge1xuICByZXR1cm4ge1xuICAgICAgdHlwZTogVVBEQVRFX0FOTk9VTkNFTUVOVCxcbiAgICAgIG1lc3NhZ2VcbiAgfTtcbn1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./states/announcement/action.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ })

/******/ });