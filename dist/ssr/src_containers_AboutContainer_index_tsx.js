"use strict";
exports.id = "src_containers_AboutContainer_index_tsx";
exports.ids = ["src_containers_AboutContainer_index_tsx"];
exports.modules = {

/***/ "./src/containers/AboutContainer/AboutContainer.tsx":
/*!**********************************************************!*\
  !*** ./src/containers/AboutContainer/AboutContainer.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutContainer": () => (/* binding */ AboutContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _about_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.md */ "./src/containers/AboutContainer/about.md");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");




var AboutContainer = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), content = _a[0], setContent = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        fetch(_about_md__WEBPACK_IMPORTED_MODULE_2__)
            .then(function (response) { return response.text(); })
            .then(function (content) { return setContent(content); });
    }, []);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_markdown__WEBPACK_IMPORTED_MODULE_3__.ReactMarkdown, { children: content });
};


/***/ }),

/***/ "./src/containers/AboutContainer/index.tsx":
/*!*************************************************!*\
  !*** ./src/containers/AboutContainer/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AboutContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutContainer */ "./src/containers/AboutContainer/AboutContainer.tsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AboutContainer__WEBPACK_IMPORTED_MODULE_0__.AboutContainer);


/***/ }),

/***/ "./src/containers/AboutContainer/about.md":
/*!************************************************!*\
  !*** ./src/containers/AboutContainer/about.md ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b86c415131dd967712d9.md";

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbnRhaW5lcnNfQWJvdXRDb250YWluZXJfaW5kZXhfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ0o7QUFDVDtBQUNRO0FBQ3BDO0FBQ1AsYUFBYSwrQ0FBUTtBQUNyQixJQUFJLGdEQUFTO0FBQ2IsY0FBYyxzQ0FBUztBQUN2Qix3Q0FBd0MseUJBQXlCO0FBQ2pFLHVDQUF1Qyw2QkFBNkI7QUFDcEUsS0FBSztBQUNMLFdBQVcsc0RBQUksQ0FBQyx5REFBYSxJQUFJLG1CQUFtQjtBQUNwRDs7Ozs7Ozs7Ozs7Ozs7OztBQ1prRDtBQUNsRCxpRUFBZSwyREFBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbnRhaW5lcnMvQWJvdXRDb250YWluZXIvQWJvdXRDb250YWluZXIudHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb250YWluZXJzL0Fib3V0Q29udGFpbmVyL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFib3V0VGV4dCBmcm9tIFwiLi9hYm91dC5tZFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5leHBvcnQgdmFyIEFib3V0Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKFwiXCIpLCBjb250ZW50ID0gX2FbMF0sIHNldENvbnRlbnQgPSBfYVsxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBmZXRjaChBYm91dFRleHQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTsgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChjb250ZW50KSB7IHJldHVybiBzZXRDb250ZW50KGNvbnRlbnQpOyB9KTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIF9qc3goUmVhY3RNYXJrZG93biwgeyBjaGlsZHJlbjogY29udGVudCB9KTtcbn07XG4iLCJpbXBvcnQgeyBBYm91dENvbnRhaW5lciB9IGZyb20gXCIuL0Fib3V0Q29udGFpbmVyXCI7XG5leHBvcnQgZGVmYXVsdCBBYm91dENvbnRhaW5lcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==