"use strict";
exports.id = "src_containers_StatsContainer_index_tsx";
exports.ids = ["src_containers_StatsContainer_index_tsx"];
exports.modules = {

/***/ "./src/containers/StatsContainer/StatsContainer.module.scss":
/*!******************************************************************!*\
  !*** ./src/containers/StatsContainer/StatsContainer.module.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"StatsBoardContainer":"c_P8Lfs8ymTpKOjI7yR4","Title":"kOBmsFb8V06Yau9x_6wd","StatsBoard":"s1hDgEAlsben1xz2lnQe","BoardTitle":"N2oKcaZVRXqnBIBF9O9V"});

/***/ }),

/***/ "./src/adapters/HttpAdapter.ts":
/*!*************************************!*\
  !*** ./src/adapters/HttpAdapter.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpAdapter": () => (/* binding */ HttpAdapter)
/* harmony export */ });
var HttpAdapter = /** @class */ (function () {
    function HttpAdapter(_a) {
        var baseUrl = _a.baseUrl;
        this.baseUrl = baseUrl;
    }
    HttpAdapter.prototype.get = function (url, params) {
        if (params === void 0) { params = { query: {} }; }
        var query = Object.keys((params === null || params === void 0 ? void 0 : params.query) || {})
            .map(function (key) { var _a; return "".concat(key, "=").concat((_a = Object.getOwnPropertyDescriptor(params.query, key)) === null || _a === void 0 ? void 0 : _a.value); })
            .join("&");
        return fetch(this.baseUrl + url + "?" + query).then(function (response) {
            return response.json();
        });
    };
    HttpAdapter.prototype.post = function (url, data) {
        return fetch(this.baseUrl + url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(function (response) { return response.json(); });
    };
    HttpAdapter.prototype.patch = function (url, data) {
        return fetch(this.baseUrl + url, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(function (response) { return response.json(); });
    };
    HttpAdapter.prototype.delete = function (url, data) {
        return fetch(this.baseUrl + url, {
            method: "DELETE",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(function (response) { return response.json(); });
    };
    return HttpAdapter;
}());



/***/ }),

/***/ "./src/containers/StatsContainer/StatsContainer.tsx":
/*!**********************************************************!*\
  !*** ./src/containers/StatsContainer/StatsContainer.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsContainer": () => (/* binding */ StatsContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StatsContainer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatsContainer.module.scss */ "./src/containers/StatsContainer/StatsContainer.module.scss");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var StatsContainer = function (_a) {
    var todoService = _a.todoService;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), todos = _b[0], setTodos = _b[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        todoService.getAllTodos().then(function (todos) {
            setTodos(todos);
        });
    }, []);
    var doneTodos = todos.filter(function (_a) {
        var isDone = _a.isDone;
        return isDone;
    });
    var notDoneTodos = todos.filter(function (_a) {
        var isDone = _a.isDone;
        return !isDone;
    });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", __assign({ className: _StatsContainer_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Title }, { children: "Stats" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: _StatsContainer_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].StatsBoardContainer }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: _StatsContainer_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].StatsBoard }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", __assign({ className: _StatsContainer_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].StatsTitle }, { children: ["Done Todo (", doneTodos.length, ")"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { children: doneTodos.map(function (todo) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: todo.task }, todo.id)); }) })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: _StatsContainer_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].StatsBoard }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", __assign({ className: _StatsContainer_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].StatsTitle }, { children: ["Not Done (", notDoneTodos.length, ")"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { children: notDoneTodos.map(function (todo) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: todo.task }, todo.id)); }) })] }))] }))] }));
};


/***/ }),

/***/ "./src/containers/StatsContainer/index.tsx":
/*!*************************************************!*\
  !*** ./src/containers/StatsContainer/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dependencies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dependencies */ "./src/dependencies.ts");
/* harmony import */ var _hoc_withDependencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hoc/withDependencies */ "./src/hoc/withDependencies.tsx");
/* harmony import */ var _StatsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatsContainer */ "./src/containers/StatsContainer/StatsContainer.tsx");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_hoc_withDependencies__WEBPACK_IMPORTED_MODULE_1__.withDependency)(_StatsContainer__WEBPACK_IMPORTED_MODULE_2__.StatsContainer, {
    todoService: _dependencies__WEBPACK_IMPORTED_MODULE_0__.dependencies.TodoService,
}));


/***/ }),

/***/ "./src/dependencies.ts":
/*!*****************************!*\
  !*** ./src/dependencies.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "dependencies": () => (/* binding */ dependencies)
/* harmony export */ });
/* harmony import */ var _adapters_HttpAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapters/HttpAdapter */ "./src/adapters/HttpAdapter.ts");
/* harmony import */ var _services_Todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/Todo.service */ "./src/services/Todo.service.ts");


var DependencyContainer = /** @class */ (function () {
    function DependencyContainer() {
        this._dependency = {};
    }
    DependencyContainer.prototype.add = function (key, dependency) {
        Object.defineProperty(this._dependency, key, {
            value: dependency,
        });
    };
    DependencyContainer.prototype.get = function (key) {
        var _a;
        return (_a = Object.getOwnPropertyDescriptor(this._dependency, key)) === null || _a === void 0 ? void 0 : _a.value;
    };
    return DependencyContainer;
}());
var httpAdapter = new _adapters_HttpAdapter__WEBPACK_IMPORTED_MODULE_0__.HttpAdapter({ baseUrl: "http://localhost:3001" });
var todoService = new _services_Todo_service__WEBPACK_IMPORTED_MODULE_1__.TodoService(httpAdapter);
var dependencies = {
    TodoService: Symbol("TodoService"),
};
var container = new DependencyContainer();
container.add(dependencies.TodoService, todoService);



/***/ }),

/***/ "./src/hoc/withDependencies.tsx":
/*!**************************************!*\
  !*** ./src/hoc/withDependencies.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withDependency": () => (/* binding */ withDependency)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _dependencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dependencies */ "./src/dependencies.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var withDependency = function (Component, dependencies) {
    var resolvedDependencies = {};
    Object.keys(dependencies).forEach(function (propName) {
        var _a;
        var dependencyKey = (_a = Object.getOwnPropertyDescriptor(dependencies, propName)) === null || _a === void 0 ? void 0 : _a.value;
        var dependency = _dependencies__WEBPACK_IMPORTED_MODULE_1__.container.get(dependencyKey);
        Object.defineProperty(resolvedDependencies, propName, {
            value: dependency,
            enumerable: true,
        });
    });
    return function (props) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, __assign({}, props, resolvedDependencies))); };
};


/***/ }),

/***/ "./src/services/Todo.service.ts":
/*!**************************************!*\
  !*** ./src/services/Todo.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoService": () => (/* binding */ TodoService)
/* harmony export */ });
var TodoService = /** @class */ (function () {
    function TodoService(httpAdapter) {
        this.http = httpAdapter;
    }
    TodoService.prototype.getTodo = function (todoId) {
        return this.http.get("/todos/" + todoId);
    };
    TodoService.prototype.getAllTodos = function (params) {
        return this.http.get("/todos", params);
    };
    TodoService.prototype.addTodo = function (task) {
        return this.http.post("/todos", { todo: task });
    };
    TodoService.prototype.updateTodo = function (todoId, task) {
        return this.http.patch("/todos/" + todoId, task);
    };
    TodoService.prototype.deleteTodo = function (todoId) {
        return this.http.delete("/todos", { id: todoId });
    };
    return TodoService;
}());



/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbnRhaW5lcnNfU3RhdHNDb250YWluZXJfaW5kZXhfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsaUVBQWUsQ0FBQyxvSkFBb0o7Ozs7Ozs7Ozs7Ozs7O0FDRHBLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDLG9HQUFvRztBQUNwRyxrQ0FBa0MsUUFBUSw2SUFBNkk7QUFDdkw7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVMsNkJBQTZCLHlCQUF5QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTLDZCQUE2Qix5QkFBeUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUyw2QkFBNkIseUJBQXlCO0FBQy9EO0FBQ0E7QUFDQSxDQUFDO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0N2QixnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEO0FBQ25CO0FBQ087QUFDNUM7QUFDUDtBQUNBLGFBQWEsK0NBQVE7QUFDckIsSUFBSSxnREFBUztBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWSx1REFBSyxVQUFVLFdBQVcsc0RBQUksa0JBQWtCLFdBQVcseUVBQWEsRUFBRSxJQUFJLG1CQUFtQixJQUFJLHVEQUFLLG1CQUFtQixXQUFXLHVGQUEyQixFQUFFLElBQUksV0FBVyx1REFBSyxtQkFBbUIsV0FBVyw4RUFBa0IsRUFBRSxJQUFJLFdBQVcsdURBQUssa0JBQWtCLFdBQVcsOEVBQWtCLEVBQUUsSUFBSSxrREFBa0QsSUFBSSxzREFBSSxTQUFTLDBDQUEwQyxRQUFRLHNEQUFJLFNBQVMscUJBQXFCLGNBQWMsR0FBRyxJQUFJLElBQUksdURBQUssbUJBQW1CLFdBQVcsOEVBQWtCLEVBQUUsSUFBSSxXQUFXLHVEQUFLLGtCQUFrQixXQUFXLDhFQUFrQixFQUFFLElBQUksb0RBQW9ELElBQUksc0RBQUksU0FBUyw2Q0FBNkMsUUFBUSxzREFBSSxTQUFTLHFCQUFxQixjQUFjLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDM3lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQmtEO0FBQ1U7QUFDVjtBQUNsRCxpRUFBZSxxRUFBYyxDQUFDLDJEQUFjO0FBQzVDLGlCQUFpQixtRUFBd0I7QUFDekMsQ0FBQyxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xrRDtBQUNDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxzQkFBc0IsOERBQVcsR0FBRyxrQ0FBa0M7QUFDdEUsc0JBQXNCLCtEQUFXO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJuQyxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dEO0FBQ0o7QUFDckM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3REFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLDhCQUE4QixRQUFRLHNEQUFJLHVCQUF1QjtBQUNqRTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsWUFBWTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFlBQVk7QUFDeEQ7QUFDQTtBQUNBLENBQUM7QUFDc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29udGFpbmVycy9TdGF0c0NvbnRhaW5lci9TdGF0c0NvbnRhaW5lci5tb2R1bGUuc2Nzcz8xZGU5Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9hZGFwdGVycy9IdHRwQWRhcHRlci50cyIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29udGFpbmVycy9TdGF0c0NvbnRhaW5lci9TdGF0c0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbnRhaW5lcnMvU3RhdHNDb250YWluZXIvaW5kZXgudHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9kZXBlbmRlbmNpZXMudHMiLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2hvYy93aXRoRGVwZW5kZW5jaWVzLnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvc2VydmljZXMvVG9kby5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiU3RhdHNCb2FyZENvbnRhaW5lclwiOlwiY19QOExmczh5bVRwS09qSTd5UjRcIixcIlRpdGxlXCI6XCJrT0Jtc0ZiOFYwNllhdTl4XzZ3ZFwiLFwiU3RhdHNCb2FyZFwiOlwiczFoRGdFQWxzYmVuMXh6MmxuUWVcIixcIkJvYXJkVGl0bGVcIjpcIk4yb0tjYVpWUlhxbkJJQkY5TzlWXCJ9OyIsInZhciBIdHRwQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIdHRwQWRhcHRlcihfYSkge1xuICAgICAgICB2YXIgYmFzZVVybCA9IF9hLmJhc2VVcmw7XG4gICAgICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw7XG4gICAgfVxuICAgIEh0dHBBZGFwdGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAodXJsLCBwYXJhbXMpIHtcbiAgICAgICAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSB7IHBhcmFtcyA9IHsgcXVlcnk6IHt9IH07IH1cbiAgICAgICAgdmFyIHF1ZXJ5ID0gT2JqZWN0LmtleXMoKHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5xdWVyeSkgfHwge30pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHsgdmFyIF9hOyByZXR1cm4gXCJcIi5jb25jYXQoa2V5LCBcIj1cIikuY29uY2F0KChfYSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocGFyYW1zLnF1ZXJ5LCBrZXkpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWUpOyB9KVxuICAgICAgICAgICAgLmpvaW4oXCImXCIpO1xuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5iYXNlVXJsICsgdXJsICsgXCI/XCIgKyBxdWVyeSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSHR0cEFkYXB0ZXIucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLmJhc2VVcmwgKyB1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pO1xuICAgIH07XG4gICAgSHR0cEFkYXB0ZXIucHJvdG90eXBlLnBhdGNoID0gZnVuY3Rpb24gKHVybCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5iYXNlVXJsICsgdXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSk7XG4gICAgfTtcbiAgICBIdHRwQWRhcHRlci5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHVybCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5iYXNlVXJsICsgdXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEh0dHBBZGFwdGVyO1xufSgpKTtcbmV4cG9ydCB7IEh0dHBBZGFwdGVyIH07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1N0YXRzQ29udGFpbmVyLm1vZHVsZS5zY3NzXCI7XG5leHBvcnQgdmFyIFN0YXRzQ29udGFpbmVyID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHRvZG9TZXJ2aWNlID0gX2EudG9kb1NlcnZpY2U7XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoW10pLCB0b2RvcyA9IF9iWzBdLCBzZXRUb2RvcyA9IF9iWzFdO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRvZG9TZXJ2aWNlLmdldEFsbFRvZG9zKCkudGhlbihmdW5jdGlvbiAodG9kb3MpIHtcbiAgICAgICAgICAgIHNldFRvZG9zKHRvZG9zKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgIHZhciBkb25lVG9kb3MgPSB0b2Rvcy5maWx0ZXIoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBpc0RvbmUgPSBfYS5pc0RvbmU7XG4gICAgICAgIHJldHVybiBpc0RvbmU7XG4gICAgfSk7XG4gICAgdmFyIG5vdERvbmVUb2RvcyA9IHRvZG9zLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGlzRG9uZSA9IF9hLmlzRG9uZTtcbiAgICAgICAgcmV0dXJuICFpc0RvbmU7XG4gICAgfSk7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChcImgyXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc2VzLlRpdGxlIH0sIHsgY2hpbGRyZW46IFwiU3RhdHNcIiB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc2VzLlN0YXRzQm9hcmRDb250YWluZXIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc2VzLlN0YXRzQm9hcmQgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiaDNcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzZXMuU3RhdHNUaXRsZSB9LCB7IGNoaWxkcmVuOiBbXCJEb25lIFRvZG8gKFwiLCBkb25lVG9kb3MubGVuZ3RoLCBcIilcIl0gfSkpLCBfanN4KFwidWxcIiwgeyBjaGlsZHJlbjogZG9uZVRvZG9zLm1hcChmdW5jdGlvbiAodG9kbykgeyByZXR1cm4gKF9qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiB0b2RvLnRhc2sgfSwgdG9kby5pZCkpOyB9KSB9KV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3Nlcy5TdGF0c0JvYXJkIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImgzXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc2VzLlN0YXRzVGl0bGUgfSwgeyBjaGlsZHJlbjogW1wiTm90IERvbmUgKFwiLCBub3REb25lVG9kb3MubGVuZ3RoLCBcIilcIl0gfSkpLCBfanN4KFwidWxcIiwgeyBjaGlsZHJlbjogbm90RG9uZVRvZG9zLm1hcChmdW5jdGlvbiAodG9kbykgeyByZXR1cm4gKF9qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiB0b2RvLnRhc2sgfSwgdG9kby5pZCkpOyB9KSB9KV0gfSkpXSB9KSldIH0pKTtcbn07XG4iLCJpbXBvcnQgeyBkZXBlbmRlbmNpZXMgfSBmcm9tIFwiLi4vLi4vZGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQgeyB3aXRoRGVwZW5kZW5jeSB9IGZyb20gXCIuLi8uLi9ob2Mvd2l0aERlcGVuZGVuY2llc1wiO1xuaW1wb3J0IHsgU3RhdHNDb250YWluZXIgfSBmcm9tIFwiLi9TdGF0c0NvbnRhaW5lclwiO1xuZXhwb3J0IGRlZmF1bHQgd2l0aERlcGVuZGVuY3koU3RhdHNDb250YWluZXIsIHtcbiAgICB0b2RvU2VydmljZTogZGVwZW5kZW5jaWVzLlRvZG9TZXJ2aWNlLFxufSk7XG4iLCJpbXBvcnQgeyBIdHRwQWRhcHRlciB9IGZyb20gXCIuL2FkYXB0ZXJzL0h0dHBBZGFwdGVyXCI7XG5pbXBvcnQgeyBUb2RvU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL1RvZG8uc2VydmljZVwiO1xudmFyIERlcGVuZGVuY3lDb250YWluZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVwZW5kZW5jeUNvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5fZGVwZW5kZW5jeSA9IHt9O1xuICAgIH1cbiAgICBEZXBlbmRlbmN5Q29udGFpbmVyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoa2V5LCBkZXBlbmRlbmN5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLl9kZXBlbmRlbmN5LCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiBkZXBlbmRlbmN5LFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERlcGVuZGVuY3lDb250YWluZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKF9hID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLl9kZXBlbmRlbmN5LCBrZXkpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWU7XG4gICAgfTtcbiAgICByZXR1cm4gRGVwZW5kZW5jeUNvbnRhaW5lcjtcbn0oKSk7XG52YXIgaHR0cEFkYXB0ZXIgPSBuZXcgSHR0cEFkYXB0ZXIoeyBiYXNlVXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiIH0pO1xudmFyIHRvZG9TZXJ2aWNlID0gbmV3IFRvZG9TZXJ2aWNlKGh0dHBBZGFwdGVyKTtcbnZhciBkZXBlbmRlbmNpZXMgPSB7XG4gICAgVG9kb1NlcnZpY2U6IFN5bWJvbChcIlRvZG9TZXJ2aWNlXCIpLFxufTtcbnZhciBjb250YWluZXIgPSBuZXcgRGVwZW5kZW5jeUNvbnRhaW5lcigpO1xuY29udGFpbmVyLmFkZChkZXBlbmRlbmNpZXMuVG9kb1NlcnZpY2UsIHRvZG9TZXJ2aWNlKTtcbmV4cG9ydCB7IGRlcGVuZGVuY2llcywgY29udGFpbmVyIH07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCIuLi9kZXBlbmRlbmNpZXNcIjtcbmV4cG9ydCB2YXIgd2l0aERlcGVuZGVuY3kgPSBmdW5jdGlvbiAoQ29tcG9uZW50LCBkZXBlbmRlbmNpZXMpIHtcbiAgICB2YXIgcmVzb2x2ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhkZXBlbmRlbmNpZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3BOYW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIGRlcGVuZGVuY3lLZXkgPSAoX2EgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlcGVuZGVuY2llcywgcHJvcE5hbWUpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWU7XG4gICAgICAgIHZhciBkZXBlbmRlbmN5ID0gY29udGFpbmVyLmdldChkZXBlbmRlbmN5S2V5KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc29sdmVkRGVwZW5kZW5jaWVzLCBwcm9wTmFtZSwge1xuICAgICAgICAgICAgdmFsdWU6IGRlcGVuZGVuY3ksXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoX2pzeChDb21wb25lbnQsIF9fYXNzaWduKHt9LCBwcm9wcywgcmVzb2x2ZWREZXBlbmRlbmNpZXMpKSk7IH07XG59O1xuIiwidmFyIFRvZG9TZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRvZG9TZXJ2aWNlKGh0dHBBZGFwdGVyKSB7XG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHBBZGFwdGVyO1xuICAgIH1cbiAgICBUb2RvU2VydmljZS5wcm90b3R5cGUuZ2V0VG9kbyA9IGZ1bmN0aW9uICh0b2RvSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCIvdG9kb3MvXCIgKyB0b2RvSWQpO1xuICAgIH07XG4gICAgVG9kb1NlcnZpY2UucHJvdG90eXBlLmdldEFsbFRvZG9zID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcIi90b2Rvc1wiLCBwYXJhbXMpO1xuICAgIH07XG4gICAgVG9kb1NlcnZpY2UucHJvdG90eXBlLmFkZFRvZG8gPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXCIvdG9kb3NcIiwgeyB0b2RvOiB0YXNrIH0pO1xuICAgIH07XG4gICAgVG9kb1NlcnZpY2UucHJvdG90eXBlLnVwZGF0ZVRvZG8gPSBmdW5jdGlvbiAodG9kb0lkLCB0YXNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goXCIvdG9kb3MvXCIgKyB0b2RvSWQsIHRhc2spO1xuICAgIH07XG4gICAgVG9kb1NlcnZpY2UucHJvdG90eXBlLmRlbGV0ZVRvZG8gPSBmdW5jdGlvbiAodG9kb0lkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFwiL3RvZG9zXCIsIHsgaWQ6IHRvZG9JZCB9KTtcbiAgICB9O1xuICAgIHJldHVybiBUb2RvU2VydmljZTtcbn0oKSk7XG5leHBvcnQgeyBUb2RvU2VydmljZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9