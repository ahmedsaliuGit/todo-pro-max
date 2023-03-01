"use strict";
(self["webpackChunktodo_pro_max"] = self["webpackChunktodo_pro_max"] || []).push([["src_containers_StatsContainer_index_tsx"],{

/***/ "./src/containers/StatsContainer/StatsContainer.module.scss":
/*!******************************************************************!*\
  !*** ./src/containers/StatsContainer/StatsContainer.module.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"StatsBoardContainer":"c_P8Lfs8ymTpKOjI7yR4","Title":"kOBmsFb8V06Yau9x_6wd","StatsBoard":"s1hDgEAlsben1xz2lnQe","BoardTitle":"N2oKcaZVRXqnBIBF9O9V"});

/***/ }),

/***/ "./src/adapters/HttpAdapter.ts":
/*!*************************************!*\
  !*** ./src/adapters/HttpAdapter.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpAdapter": function() { return /* binding */ HttpAdapter; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsContainer": function() { return /* binding */ StatsContainer; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dependencies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dependencies */ "./src/dependencies.ts");
/* harmony import */ var _hoc_withDependencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hoc/withDependencies */ "./src/hoc/withDependencies.tsx");
/* harmony import */ var _StatsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatsContainer */ "./src/containers/StatsContainer/StatsContainer.tsx");



/* harmony default export */ __webpack_exports__["default"] = ((0,_hoc_withDependencies__WEBPACK_IMPORTED_MODULE_1__.withDependency)(_StatsContainer__WEBPACK_IMPORTED_MODULE_2__.StatsContainer, {
    todoService: _dependencies__WEBPACK_IMPORTED_MODULE_0__.dependencies.TodoService,
}));


/***/ }),

/***/ "./src/dependencies.ts":
/*!*****************************!*\
  !*** ./src/dependencies.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "container": function() { return /* binding */ container; },
/* harmony export */   "dependencies": function() { return /* binding */ dependencies; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withDependency": function() { return /* binding */ withDependency; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoService": function() { return /* binding */ TodoService; }
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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbnRhaW5lcnNfU3RhdHNDb250YWluZXJfaW5kZXhfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBLCtEQUFlLENBQUMsb0pBQW9KOzs7Ozs7Ozs7Ozs7OztBQ0RwSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsV0FBVztBQUM1QyxvR0FBb0c7QUFDcEcsa0NBQWtDLFFBQVEsNklBQTZJO0FBQ3ZMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTLDZCQUE2Qix5QkFBeUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUyw2QkFBNkIseUJBQXlCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVMsNkJBQTZCLHlCQUF5QjtBQUMvRDtBQUNBO0FBQ0EsQ0FBQztBQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDdkIsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDtBQUNuQjtBQUNPO0FBQzVDO0FBQ1A7QUFDQSxhQUFhLCtDQUFRO0FBQ3JCLElBQUksZ0RBQVM7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVksdURBQUssVUFBVSxXQUFXLHNEQUFJLGtCQUFrQixXQUFXLHlFQUFhLEVBQUUsSUFBSSxtQkFBbUIsSUFBSSx1REFBSyxtQkFBbUIsV0FBVyx1RkFBMkIsRUFBRSxJQUFJLFdBQVcsdURBQUssbUJBQW1CLFdBQVcsOEVBQWtCLEVBQUUsSUFBSSxXQUFXLHVEQUFLLGtCQUFrQixXQUFXLDhFQUFrQixFQUFFLElBQUksa0RBQWtELElBQUksc0RBQUksU0FBUywwQ0FBMEMsUUFBUSxzREFBSSxTQUFTLHFCQUFxQixjQUFjLEdBQUcsSUFBSSxJQUFJLHVEQUFLLG1CQUFtQixXQUFXLDhFQUFrQixFQUFFLElBQUksV0FBVyx1REFBSyxrQkFBa0IsV0FBVyw4RUFBa0IsRUFBRSxJQUFJLG9EQUFvRCxJQUFJLHNEQUFJLFNBQVMsNkNBQTZDLFFBQVEsc0RBQUksU0FBUyxxQkFBcUIsY0FBYyxHQUFHLElBQUksS0FBSyxLQUFLO0FBQzN5Qjs7Ozs7Ozs7Ozs7Ozs7O0FDL0JrRDtBQUNVO0FBQ1Y7QUFDbEQsK0RBQWUscUVBQWMsQ0FBQywyREFBYztBQUM1QyxpQkFBaUIsbUVBQXdCO0FBQ3pDLENBQUMsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMa0Q7QUFDQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsc0JBQXNCLDhEQUFXLEdBQUcsa0NBQWtDO0FBQ3RFLHNCQUFzQiwrREFBVztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21DOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCbkMsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnRDtBQUNKO0FBQ3JDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0RBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCw4QkFBOEIsUUFBUSxzREFBSSx1QkFBdUI7QUFDakU7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxZQUFZO0FBQ3hEO0FBQ0E7QUFDQSxDQUFDO0FBQ3NCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbnRhaW5lcnMvU3RhdHNDb250YWluZXIvU3RhdHNDb250YWluZXIubW9kdWxlLnNjc3M/MWRlOSIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvYWRhcHRlcnMvSHR0cEFkYXB0ZXIudHMiLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbnRhaW5lcnMvU3RhdHNDb250YWluZXIvU3RhdHNDb250YWluZXIudHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb250YWluZXJzL1N0YXRzQ29udGFpbmVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvZGVwZW5kZW5jaWVzLnRzIiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9ob2Mvd2l0aERlcGVuZGVuY2llcy50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL3NlcnZpY2VzL1RvZG8uc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIlN0YXRzQm9hcmRDb250YWluZXJcIjpcImNfUDhMZnM4eW1UcEtPakk3eVI0XCIsXCJUaXRsZVwiOlwia09CbXNGYjhWMDZZYXU5eF82d2RcIixcIlN0YXRzQm9hcmRcIjpcInMxaERnRUFsc2JlbjF4ejJsblFlXCIsXCJCb2FyZFRpdGxlXCI6XCJOMm9LY2FaVlJYcW5CSUJGOU85VlwifTsiLCJ2YXIgSHR0cEFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSHR0cEFkYXB0ZXIoX2EpIHtcbiAgICAgICAgdmFyIGJhc2VVcmwgPSBfYS5iYXNlVXJsO1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsO1xuICAgIH1cbiAgICBIdHRwQWRhcHRlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHVybCwgcGFyYW1zKSB7XG4gICAgICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkgeyBwYXJhbXMgPSB7IHF1ZXJ5OiB7fSB9OyB9XG4gICAgICAgIHZhciBxdWVyeSA9IE9iamVjdC5rZXlzKChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMucXVlcnkpIHx8IHt9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoa2V5KSB7IHZhciBfYTsgcmV0dXJuIFwiXCIuY29uY2F0KGtleSwgXCI9XCIpLmNvbmNhdCgoX2EgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHBhcmFtcy5xdWVyeSwga2V5KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhbHVlKTsgfSlcbiAgICAgICAgICAgIC5qb2luKFwiJlwiKTtcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuYmFzZVVybCArIHVybCArIFwiP1wiICsgcXVlcnkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEh0dHBBZGFwdGVyLnByb3RvdHlwZS5wb3N0ID0gZnVuY3Rpb24gKHVybCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5iYXNlVXJsICsgdXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KTtcbiAgICB9O1xuICAgIEh0dHBBZGFwdGVyLnByb3RvdHlwZS5wYXRjaCA9IGZ1bmN0aW9uICh1cmwsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuYmFzZVVybCArIHVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pO1xuICAgIH07XG4gICAgSHR0cEFkYXB0ZXIucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICh1cmwsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuYmFzZVVybCArIHVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBIdHRwQWRhcHRlcjtcbn0oKSk7XG5leHBvcnQgeyBIdHRwQWRhcHRlciB9O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9TdGF0c0NvbnRhaW5lci5tb2R1bGUuc2Nzc1wiO1xuZXhwb3J0IHZhciBTdGF0c0NvbnRhaW5lciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB0b2RvU2VydmljZSA9IF9hLnRvZG9TZXJ2aWNlO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKFtdKSwgdG9kb3MgPSBfYlswXSwgc2V0VG9kb3MgPSBfYlsxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB0b2RvU2VydmljZS5nZXRBbGxUb2RvcygpLnRoZW4oZnVuY3Rpb24gKHRvZG9zKSB7XG4gICAgICAgICAgICBzZXRUb2Rvcyh0b2Rvcyk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcbiAgICB2YXIgZG9uZVRvZG9zID0gdG9kb3MuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgaXNEb25lID0gX2EuaXNEb25lO1xuICAgICAgICByZXR1cm4gaXNEb25lO1xuICAgIH0pO1xuICAgIHZhciBub3REb25lVG9kb3MgPSB0b2Rvcy5maWx0ZXIoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBpc0RvbmUgPSBfYS5pc0RvbmU7XG4gICAgICAgIHJldHVybiAhaXNEb25lO1xuICAgIH0pO1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3goXCJoMlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3Nlcy5UaXRsZSB9LCB7IGNoaWxkcmVuOiBcIlN0YXRzXCIgfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3Nlcy5TdGF0c0JvYXJkQ29udGFpbmVyIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3Nlcy5TdGF0c0JvYXJkIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImgzXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc2VzLlN0YXRzVGl0bGUgfSwgeyBjaGlsZHJlbjogW1wiRG9uZSBUb2RvIChcIiwgZG9uZVRvZG9zLmxlbmd0aCwgXCIpXCJdIH0pKSwgX2pzeChcInVsXCIsIHsgY2hpbGRyZW46IGRvbmVUb2Rvcy5tYXAoZnVuY3Rpb24gKHRvZG8pIHsgcmV0dXJuIChfanN4KFwibGlcIiwgeyBjaGlsZHJlbjogdG9kby50YXNrIH0sIHRvZG8uaWQpKTsgfSkgfSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzZXMuU3RhdHNCb2FyZCB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3Nlcy5TdGF0c1RpdGxlIH0sIHsgY2hpbGRyZW46IFtcIk5vdCBEb25lIChcIiwgbm90RG9uZVRvZG9zLmxlbmd0aCwgXCIpXCJdIH0pKSwgX2pzeChcInVsXCIsIHsgY2hpbGRyZW46IG5vdERvbmVUb2Rvcy5tYXAoZnVuY3Rpb24gKHRvZG8pIHsgcmV0dXJuIChfanN4KFwibGlcIiwgeyBjaGlsZHJlbjogdG9kby50YXNrIH0sIHRvZG8uaWQpKTsgfSkgfSldIH0pKV0gfSkpXSB9KSk7XG59O1xuIiwiaW1wb3J0IHsgZGVwZW5kZW5jaWVzIH0gZnJvbSBcIi4uLy4uL2RlcGVuZGVuY2llc1wiO1xuaW1wb3J0IHsgd2l0aERlcGVuZGVuY3kgfSBmcm9tIFwiLi4vLi4vaG9jL3dpdGhEZXBlbmRlbmNpZXNcIjtcbmltcG9ydCB7IFN0YXRzQ29udGFpbmVyIH0gZnJvbSBcIi4vU3RhdHNDb250YWluZXJcIjtcbmV4cG9ydCBkZWZhdWx0IHdpdGhEZXBlbmRlbmN5KFN0YXRzQ29udGFpbmVyLCB7XG4gICAgdG9kb1NlcnZpY2U6IGRlcGVuZGVuY2llcy5Ub2RvU2VydmljZSxcbn0pO1xuIiwiaW1wb3J0IHsgSHR0cEFkYXB0ZXIgfSBmcm9tIFwiLi9hZGFwdGVycy9IdHRwQWRhcHRlclwiO1xuaW1wb3J0IHsgVG9kb1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9Ub2RvLnNlcnZpY2VcIjtcbnZhciBEZXBlbmRlbmN5Q29udGFpbmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlcGVuZGVuY3lDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuX2RlcGVuZGVuY3kgPSB7fTtcbiAgICB9XG4gICAgRGVwZW5kZW5jeUNvbnRhaW5lci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGtleSwgZGVwZW5kZW5jeSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5fZGVwZW5kZW5jeSwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogZGVwZW5kZW5jeSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEZXBlbmRlbmN5Q29udGFpbmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcy5fZGVwZW5kZW5jeSwga2V5KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhbHVlO1xuICAgIH07XG4gICAgcmV0dXJuIERlcGVuZGVuY3lDb250YWluZXI7XG59KCkpO1xudmFyIGh0dHBBZGFwdGVyID0gbmV3IEh0dHBBZGFwdGVyKHsgYmFzZVVybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIiB9KTtcbnZhciB0b2RvU2VydmljZSA9IG5ldyBUb2RvU2VydmljZShodHRwQWRhcHRlcik7XG52YXIgZGVwZW5kZW5jaWVzID0ge1xuICAgIFRvZG9TZXJ2aWNlOiBTeW1ib2woXCJUb2RvU2VydmljZVwiKSxcbn07XG52YXIgY29udGFpbmVyID0gbmV3IERlcGVuZGVuY3lDb250YWluZXIoKTtcbmNvbnRhaW5lci5hZGQoZGVwZW5kZW5jaWVzLlRvZG9TZXJ2aWNlLCB0b2RvU2VydmljZSk7XG5leHBvcnQgeyBkZXBlbmRlbmNpZXMsIGNvbnRhaW5lciB9O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiLi4vZGVwZW5kZW5jaWVzXCI7XG5leHBvcnQgdmFyIHdpdGhEZXBlbmRlbmN5ID0gZnVuY3Rpb24gKENvbXBvbmVudCwgZGVwZW5kZW5jaWVzKSB7XG4gICAgdmFyIHJlc29sdmVkRGVwZW5kZW5jaWVzID0ge307XG4gICAgT2JqZWN0LmtleXMoZGVwZW5kZW5jaWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wTmFtZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBkZXBlbmRlbmN5S2V5ID0gKF9hID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZXBlbmRlbmNpZXMsIHByb3BOYW1lKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhbHVlO1xuICAgICAgICB2YXIgZGVwZW5kZW5jeSA9IGNvbnRhaW5lci5nZXQoZGVwZW5kZW5jeUtleSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNvbHZlZERlcGVuZGVuY2llcywgcHJvcE5hbWUsIHtcbiAgICAgICAgICAgIHZhbHVlOiBkZXBlbmRlbmN5LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKF9qc3goQ29tcG9uZW50LCBfX2Fzc2lnbih7fSwgcHJvcHMsIHJlc29sdmVkRGVwZW5kZW5jaWVzKSkpOyB9O1xufTtcbiIsInZhciBUb2RvU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUb2RvU2VydmljZShodHRwQWRhcHRlcikge1xuICAgICAgICB0aGlzLmh0dHAgPSBodHRwQWRhcHRlcjtcbiAgICB9XG4gICAgVG9kb1NlcnZpY2UucHJvdG90eXBlLmdldFRvZG8gPSBmdW5jdGlvbiAodG9kb0lkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiL3RvZG9zL1wiICsgdG9kb0lkKTtcbiAgICB9O1xuICAgIFRvZG9TZXJ2aWNlLnByb3RvdHlwZS5nZXRBbGxUb2RvcyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCIvdG9kb3NcIiwgcGFyYW1zKTtcbiAgICB9O1xuICAgIFRvZG9TZXJ2aWNlLnByb3RvdHlwZS5hZGRUb2RvID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFwiL3RvZG9zXCIsIHsgdG9kbzogdGFzayB9KTtcbiAgICB9O1xuICAgIFRvZG9TZXJ2aWNlLnByb3RvdHlwZS51cGRhdGVUb2RvID0gZnVuY3Rpb24gKHRvZG9JZCwgdGFzaykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKFwiL3RvZG9zL1wiICsgdG9kb0lkLCB0YXNrKTtcbiAgICB9O1xuICAgIFRvZG9TZXJ2aWNlLnByb3RvdHlwZS5kZWxldGVUb2RvID0gZnVuY3Rpb24gKHRvZG9JZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShcIi90b2Rvc1wiLCB7IGlkOiB0b2RvSWQgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gVG9kb1NlcnZpY2U7XG59KCkpO1xuZXhwb3J0IHsgVG9kb1NlcnZpY2UgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==