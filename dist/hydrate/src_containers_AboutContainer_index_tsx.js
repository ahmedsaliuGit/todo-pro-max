"use strict";
(self["webpackChunktodo_pro_max"] = self["webpackChunktodo_pro_max"] || []).push([["src_containers_AboutContainer_index_tsx"],{

/***/ "./src/containers/AboutContainer/AboutContainer.tsx":
/*!**********************************************************!*\
  !*** ./src/containers/AboutContainer/AboutContainer.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutContainer": function() { return /* binding */ AboutContainer; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutContainer */ "./src/containers/AboutContainer/AboutContainer.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_AboutContainer__WEBPACK_IMPORTED_MODULE_0__.AboutContainer);


/***/ }),

/***/ "./src/containers/AboutContainer/about.md":
/*!************************************************!*\
  !*** ./src/containers/AboutContainer/about.md ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b86c415131dd967712d9.md";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbnRhaW5lcnNfQWJvdXRDb250YWluZXJfaW5kZXhfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNKO0FBQ1Q7QUFDUTtBQUNwQztBQUNQLGFBQWEsK0NBQVE7QUFDckIsSUFBSSxnREFBUztBQUNiLGNBQWMsc0NBQVM7QUFDdkIsd0NBQXdDLHlCQUF5QjtBQUNqRSx1Q0FBdUMsNkJBQTZCO0FBQ3BFLEtBQUs7QUFDTCxXQUFXLHNEQUFJLENBQUMseURBQWEsSUFBSSxtQkFBbUI7QUFDcEQ7Ozs7Ozs7Ozs7Ozs7QUNaa0Q7QUFDbEQsK0RBQWUsMkRBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb250YWluZXJzL0Fib3V0Q29udGFpbmVyL0Fib3V0Q29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29udGFpbmVycy9BYm91dENvbnRhaW5lci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBYm91dFRleHQgZnJvbSBcIi4vYWJvdXQubWRcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuZXhwb3J0IHZhciBBYm91dENvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShcIlwiKSwgY29udGVudCA9IF9hWzBdLCBzZXRDb250ZW50ID0gX2FbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmV0Y2goQWJvdXRUZXh0KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS50ZXh0KCk7IH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoY29udGVudCkgeyByZXR1cm4gc2V0Q29udGVudChjb250ZW50KTsgfSk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBfanN4KFJlYWN0TWFya2Rvd24sIHsgY2hpbGRyZW46IGNvbnRlbnQgfSk7XG59O1xuIiwiaW1wb3J0IHsgQWJvdXRDb250YWluZXIgfSBmcm9tIFwiLi9BYm91dENvbnRhaW5lclwiO1xuZXhwb3J0IGRlZmF1bHQgQWJvdXRDb250YWluZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=