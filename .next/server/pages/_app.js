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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./store.tsx\");\n\nvar _jsxFileName = \"/home/trioangle/Documents/Nextjs-Redux/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// import App, {Container} from 'next/app'\n// import React from 'react'\n// export default class MyApp extends App {\n//   static async getInitialProps ({ Component, ctx }) {\n//     let pageProps = {}\n//     if (Component.getInitialProps) {\n//       pageProps = await Component.getInitialProps(ctx)\n//     }\n//     return {pageProps}\n//   }\n//   render () {\n//     const {Component, pageProps} = this.props\n//     return <Container>\n//       <Component {...pageProps} />\n//     </Container>\n//   }\n// }\n// import React from 'react'\n// import { Provider } from 'react-redux'\n// import App, { Container } from 'next/app'\n// import withRedux from 'next-redux-wrapper'\n// import { initStore } from '../store'\n// export default withRedux(initStore)(class MyApp extends App {\n//   static async getInitialProps ({Component, ctx}) {\n//     return {\n//       pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})\n//     }\n//   }\n//   render () {\n//     const {Component, pageProps, store} :any = this.props\n//     return <Container>\n//       <Provider store={store}>\n//         <Component {...pageProps} />\n//       </Provider>\n//     </Container>\n//   }\n// })\n\n\n\nconst WrappedApp = ({\n  Component,\n  pageProps\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 55,\n  columnNumber: 5\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store__WEBPACK_IMPORTED_MODULE_2__[\"wrapper\"].withRedux(WrappedApp));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIldyYXBwZWRBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7O0FBRUEsTUFBTUEsVUFBd0IsR0FBRyxDQUFDO0FBQUNDLFdBQUQ7QUFBWUM7QUFBWixDQUFELGtCQUU3QixxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjs7QUFLZUMsNkdBQU8sQ0FBQ0MsU0FBUixDQUFrQkosVUFBbEIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEFwcCwge0NvbnRhaW5lcn0gZnJvbSAnbmV4dC9hcHAnXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbi8vICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyBDb21wb25lbnQsIGN0eCB9KSB7XG4vLyAgICAgbGV0IHBhZ2VQcm9wcyA9IHt9XG5cbi8vICAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuLy8gICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHtwYWdlUHJvcHN9XG4vLyAgIH1cblxuLy8gICByZW5kZXIgKCkge1xuLy8gICAgIGNvbnN0IHtDb21wb25lbnQsIHBhZ2VQcm9wc30gPSB0aGlzLnByb3BzXG4vLyAgICAgcmV0dXJuIDxDb250YWluZXI+XG4vLyAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4vLyAgICAgPC9Db250YWluZXI+XG4vLyAgIH1cbi8vIH1cblxuXG5cbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG4vLyBpbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJ1xuLy8gaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG4vLyBpbXBvcnQgeyBpbml0U3RvcmUgfSBmcm9tICcuLi9zdG9yZSdcblxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSkoY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuLy8gICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7Q29tcG9uZW50LCBjdHh9KSB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHBhZ2VQcm9wczogKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCkgOiB7fSlcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICByZW5kZXIgKCkge1xuLy8gICAgIGNvbnN0IHtDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmV9IDphbnkgPSB0aGlzLnByb3BzXG4vLyAgICAgcmV0dXJuIDxDb250YWluZXI+XG4vLyAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbi8vICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuLy8gICAgICAgPC9Qcm92aWRlcj5cbi8vICAgICA8L0NvbnRhaW5lcj5cbi8vICAgfVxuLy8gfSlcblxuXG5pbXBvcnQgUmVhY3QsIHtGQ30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtBcHBQcm9wc30gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHt3cmFwcGVyfSBmcm9tICcuLi9zdG9yZSc7XG5cbmNvbnN0IFdyYXBwZWRBcHA6IEZDPEFwcFByb3BzPiA9ICh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSA9PiAoXG4gIFxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KFdyYXBwZWRBcHApO1xuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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

/***/ "./states/announcement/reducer.tsx":
/*!*****************************************!*\
  !*** ./states/announcement/reducer.tsx ***!
  \*****************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return reducer; });\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ \"./states/announcement/action.tsx\");\n\nconst initialState = {\n  message: 'No announcement...'\n};\nconst reducer = (state = initialState, action) => {\n  console.log('action :>> ', action);\n\n  switch (action.type) {\n    case _action__WEBPACK_IMPORTED_MODULE_0__[\"UPDATE_ANNOUNCEMENT\"]:\n      return Object.assign({}, state, {\n        message: action.message\n      });\n\n    default:\n      return state;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGF0ZXMvYW5ub3VuY2VtZW50L3JlZHVjZXIudHN4P2FiMjQiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWVzc2FnZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiYW5ub3VuY2VtZW50QWN0aW9ucyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFlBQTJCLEdBQUc7QUFDekNDLFNBQU8sRUFBRTtBQURnQyxDQUFwQztBQUlBLE1BQU1DLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEdBQUdILFlBQVQsRUFBdUJJLE1BQXZCLEtBQWtDO0FBQ3ZEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCRixNQUEzQjs7QUFDQSxVQUFRQSxNQUFNLENBQUNHLElBQWY7QUFDRSxTQUFLQywyREFBTDtBQUNFLGFBQU9DLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JQLEtBQWxCLEVBQXlCO0FBQUVGLGVBQU8sRUFBRUcsTUFBTSxDQUFDSDtBQUFsQixPQUF6QixDQUFQOztBQUNGO0FBQVMsYUFBT0UsS0FBUDtBQUhYO0FBS0QsQ0FQTSIsImZpbGUiOiIuL3N0YXRlcy9hbm5vdW5jZW1lbnQvcmVkdWNlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IElBbm5vdW5jZW1lbnQgfSBmcm9tICcuL3N0YXRlJ1xuaW1wb3J0ICogYXMgYW5ub3VuY2VtZW50QWN0aW9ucyBmcm9tICcuL2FjdGlvbidcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogSUFubm91bmNlbWVudCA9IHtcbiAgbWVzc2FnZTogJ05vIGFubm91bmNlbWVudC4uLidcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zb2xlLmxvZygnYWN0aW9uIDo+PiAnLCBhY3Rpb24pO1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhbm5vdW5jZW1lbnRBY3Rpb25zLlVQREFURV9BTk5PVU5DRU1FTlQ6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgbWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UgfSlcbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./states/announcement/reducer.tsx\n");

/***/ }),

/***/ "./store.tsx":
/*!*******************!*\
  !*** ./store.tsx ***!
  \*******************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapper\", function() { return wrapper; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _states_announcement_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states/announcement/reducer */ \"./states/announcement/reducer.tsx\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n// export const initalStore = (initialState) => {\n//   return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))\n// }\n// create a makeStore function\nconst makeStore = context => Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_states_announcement_reducer__WEBPACK_IMPORTED_MODULE_3__[\"reducer\"], _states_announcement_reducer__WEBPACK_IMPORTED_MODULE_3__[\"initialState\"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a))); // let store = createStore(quotes, initialState, applyMiddleware(httpMiddleware));\n// export an assembled wrapper    \n\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__[\"createWrapper\"])(makeStore, {\n  debug: true\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS50c3g/NmNjNSJdLCJuYW1lcyI6WyJtYWtlU3RvcmUiLCJjb250ZXh0IiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2FyZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQVFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0EsTUFBTUEsU0FBYyxHQUFJQyxPQUFELElBQXNCQyx5REFBVyxDQUFDQyxvRUFBRCxFQUFVQyx5RUFBVixFQUNyREMsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUNDLGtEQUFELENBQWhCLENBRGtDLENBQXhELEMsQ0FJQTtBQUdBOzs7QUFDTyxNQUFNQyxPQUFPLEdBQUdDLHdFQUFhLENBQVFULFNBQVIsRUFBbUI7QUFBQ1UsT0FBSyxFQUFFO0FBQVIsQ0FBbkIsQ0FBN0IiLCJmaWxlIjoiLi9zdG9yZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCB7IHJlZHVjZXIsaW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvYW5ub3VuY2VtZW50L3JlZHVjZXInO1xuXG5pbXBvcnQge2NyZWF0ZVdyYXBwZXIsIENvbnRleHR9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICBtZXNzYWdlOiAnTm8gYW5ub3VuY2VtZW50Li4uJ1xufVxuXG5cblxuLy8gZXhwb3J0IGNvbnN0IGluaXRhbFN0b3JlID0gKGluaXRpYWxTdGF0ZSkgPT4ge1xuLy8gICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKSlcbi8vIH1cblxuXG5cblxuICBcbi8vIGNyZWF0ZSBhIG1ha2VTdG9yZSBmdW5jdGlvblxuY29uc3QgbWFrZVN0b3JlOiBhbnkgPSAoY29udGV4dDogQ29udGV4dCkgPT4gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLFxuICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSkpOyBcblxuXG4vLyBsZXQgc3RvcmUgPSBjcmVhdGVTdG9yZShxdW90ZXMsIGluaXRpYWxTdGF0ZSwgYXBwbHlNaWRkbGV3YXJlKGh0dHBNaWRkbGV3YXJlKSk7XG5cblxuLy8gZXhwb3J0IGFuIGFzc2VtYmxlZCB3cmFwcGVyICAgIFxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyPFN0YXRlPihtYWtlU3RvcmUsIHtkZWJ1ZzogdHJ1ZX0pOyAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store.tsx\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ })

/******/ });