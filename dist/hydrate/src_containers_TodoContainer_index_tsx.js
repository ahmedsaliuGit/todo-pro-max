"use strict";
(self["webpackChunktodo_pro_max"] = self["webpackChunktodo_pro_max"] || []).push([["src_containers_TodoContainer_index_tsx"],{

/***/ "./src/components/Button/Button.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Button/Button.module.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"Button":"YQQaOJBKdGdM4OoiepiR","Primary":"QKm_WepUERm0_eAETOWw","Secondary":"PX53MTq4P9qz3NT1HboK","Disabled":"zwDsUKdCwL5W5WVXSu29","Transparent":"WfJHGlIHxds_xMOyX3aR"});

/***/ }),

/***/ "./src/components/ButtonSelect/ButtonSelect.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/ButtonSelect/ButtonSelect.module.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"ButtonSelectWrapper":"qkbK0DJUuJ_MPR8YPaC9","ButtonSelectOption":"NbRnX1bDm90fr_h_lWcC","Selected":"odXJmnSWLLSfsfZjS7Rs"});

/***/ }),

/***/ "./src/components/CheckBox/CheckBox.module.scss":
/*!******************************************************!*\
  !*** ./src/components/CheckBox/CheckBox.module.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"CheckBox":"WZAr9gIzPb1uYyEC3qDQ"});

/***/ }),

/***/ "./src/components/TextField/TextField.module.scss":
/*!********************************************************!*\
  !*** ./src/components/TextField/TextField.module.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"TextField":"DB2I3Y0wOqPrjzBlVSsj"});

/***/ }),

/***/ "./src/containers/TodoContainer/TodoItem/TodoItem.module.scss":
/*!********************************************************************!*\
  !*** ./src/containers/TodoContainer/TodoItem/TodoItem.module.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"TodoItem":"PCviEZOpnxAWCW04QD69","TodoIsDone":"nZMlS4m18CJldYt3w0Gn"});

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

/***/ "./src/components/Button/Button.tsx":
/*!******************************************!*\
  !*** ./src/components/Button/Button.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.module.scss */ "./src/components/Button/Button.module.scss");
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



var Button = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_a) {
    var children = _a.children, primary = _a.primary, secondary = _a.secondary, disable = _a.disable, transparent = _a.transparent, onClick = _a.onClick, type = _a.type, _b = _a.className, className = _b === void 0 ? "" : _b;
    var classNames = [_Button_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Button, className];
    if (primary)
        classNames.push(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Primary);
    if (secondary)
        classNames.push(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Secondary);
    if (disable)
        classNames.push(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Disable);
    if (transparent)
        classNames.push(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Transparent);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ type: type, onClick: onClick, className: classNames.join(" ") }, { children: children })));
});


/***/ }),

/***/ "./src/components/ButtonSelect/ButtonSelect.tsx":
/*!******************************************************!*\
  !*** ./src/components/ButtonSelect/ButtonSelect.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonSelect": function() { return /* binding */ ButtonSelect; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Button/Button.tsx");
/* harmony import */ var _ButtonSelect_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonSelect.module.scss */ "./src/components/ButtonSelect/ButtonSelect.module.scss");
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



var ButtonSelect = function (_a) {
    var value = _a.value, options = _a.options, onInput = _a.onInput;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: _ButtonSelect_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].ButtonSelectWrapper }, { children: options.map(function (option) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_1__.Button, __assign({ className: "".concat(_ButtonSelect_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].ButtonSelectOption, " ").concat(option.value === value && _ButtonSelect_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Selected), onClick: function () { return onInput(option.value); } }, { children: option.label }), option.value)); }) })));
};


/***/ }),

/***/ "./src/components/CheckBox/CheckBox.tsx":
/*!**********************************************!*\
  !*** ./src/components/CheckBox/CheckBox.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckBox": function() { return /* binding */ CheckBox; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CheckBox_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckBox.module.scss */ "./src/components/CheckBox/CheckBox.module.scss");
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



var CheckBox = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_a) {
    var value = _a.value, name = _a.name, label = _a.label, labelName = _a.labelName, onInput = _a.onInput;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: _CheckBox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CheckBox }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", name: name, id: name, checked: value, onChange: function (event) { return onInput && onInput(event.target.checked); } }), label ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", __assign({ htmlFor: name, className: "ml-2" }, { children: labelName }))) : null] })));
});


/***/ }),

/***/ "./src/components/TextField/TextField.tsx":
/*!************************************************!*\
  !*** ./src/components/TextField/TextField.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextField": function() { return /* binding */ TextField; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TextField_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextField.module.scss */ "./src/components/TextField/TextField.module.scss");
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



var TextField = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (_a, ref) {
    var onInput = _a.onInput, value = _a.value, label = _a.label, name = _a.name, labelName = _a.labelName;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [label ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", __assign({ htmlFor: name }, { children: labelName })) : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { ref: ref, type: "text", id: name, name: name, value: value, onChange: function (event) { return onInput(event.target.value); }, className: _TextField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].TextField })] }));
}));


/***/ }),

/***/ "./src/containers/TodoContainer/AddTodoItem/AddTodoItem.tsx":
/*!******************************************************************!*\
  !*** ./src/containers/TodoContainer/AddTodoItem/AddTodoItem.tsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTodoItem": function() { return /* binding */ AddTodoItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Button/Button */ "./src/components/Button/Button.tsx");
/* harmony import */ var _components_TextField_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/TextField/TextField */ "./src/components/TextField/TextField.tsx");
/* harmony import */ var _customHooks_useAutoFocus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../customHooks/useAutoFocus */ "./src/customHooks/useAutoFocus.tsx");
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





var AddTodoItem = function (_a) {
    var onAddClick = _a.onAddClick;
    var textFieldFocus = (0,_customHooks_useAutoFocus__WEBPACK_IMPORTED_MODULE_4__.useAutoFocus)();
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), task = _b[0], setTask = _b[1];
    var onTaskFieldChange = function (value) {
        setTask(value);
    };
    var handleAddSubmited = function (event) {
        var _a;
        event.preventDefault();
        onAddClick(task);
        setTask("");
        (_a = textFieldFocus.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({ className: "flex", onSubmit: handleAddSubmited }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "flex-grow-1 mr-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_TextField_TextField__WEBPACK_IMPORTED_MODULE_3__.TextField, { value: task, onInput: onTaskFieldChange, ref: textFieldFocus }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, __assign({ type: "submit", primary: true }, { children: "Add" })) })] })));
};


/***/ }),

/***/ "./src/containers/TodoContainer/TodoContainer.tsx":
/*!********************************************************!*\
  !*** ./src/containers/TodoContainer/TodoContainer.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoContainer": function() { return /* binding */ TodoContainer; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TodoItem_TodoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoItem/TodoItem */ "./src/containers/TodoContainer/TodoItem/TodoItem.tsx");
/* harmony import */ var _AddTodoItem_AddTodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddTodoItem/AddTodoItem */ "./src/containers/TodoContainer/AddTodoItem/AddTodoItem.tsx");
/* harmony import */ var _components_ButtonSelect_ButtonSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ButtonSelect/ButtonSelect */ "./src/components/ButtonSelect/ButtonSelect.tsx");
/* harmony import */ var _hoc_useAppState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hoc/useAppState */ "./src/hoc/useAppState.tsx");
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






var TodoContainer = function (_a) {
    var todoService = _a.todoService;
    var _b = (0,_hoc_useAppState__WEBPACK_IMPORTED_MODULE_5__.useAppState)(), appState = _b.appState, setAppState = _b.setAppState;
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), todos = _c[0], setTodos = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("all"), todoFilter = _d[0], setTodoFilter = _d[1];
    var fetchTodos = function () {
        return todoService.getAllTodos().then(function (data) { return setTodos(data); });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (appState.editTodoId === -1) {
            fetchTodos();
        }
        fetchTodos();
    }, [appState.editTodoId]);
    var addToTodos = function (task) {
        todoService.addTodo(task).then(function () { return fetchTodos(); });
    };
    var editTodo = function (todoId) {
        setAppState({ editTodoId: todoId, isDrawerOpen: true });
    };
    var handleDoneChecked = function (todoId, isDone) {
        todoService.updateTodo(todoId, { isDone: isDone }).then(function () { return fetchTodos(); });
    };
    var deleteTodo = function (todoId) {
        todoService.deleteTodo(todoId).then(function () { return fetchTodos(); });
    };
    var buttonSelectOptions = [
        { label: "All", value: "all" },
        { label: "Done", value: "true" },
        { label: "Not Done", value: "false" },
    ];
    var handleTodoFilterChange = function (value) {
        setTodoFilter(value);
        todoService
            .getAllTodos({ query: { isDone: value } })
            .then(function (data) { return setTodos(data); });
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AddTodoItem_AddTodoItem__WEBPACK_IMPORTED_MODULE_3__.AddTodoItem, { onAddClick: addToTodos }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "mt-3" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ButtonSelect_ButtonSelect__WEBPACK_IMPORTED_MODULE_4__.ButtonSelect, { options: buttonSelectOptions, onInput: handleTodoFilterChange, value: todoFilter }) })), todos.map(function (todo, index) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TodoItem_TodoItem__WEBPACK_IMPORTED_MODULE_2__["default"], { todo: todo, onEditTodo: editTodo, onDoneChecked: handleDoneChecked, onDeleteTodo: deleteTodo }, index)); })] }));
};


/***/ }),

/***/ "./src/containers/TodoContainer/TodoItem/TodoItem.tsx":
/*!************************************************************!*\
  !*** ./src/containers/TodoContainer/TodoItem/TodoItem.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Button/Button */ "./src/components/Button/Button.tsx");
/* harmony import */ var _components_CheckBox_CheckBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/CheckBox/CheckBox */ "./src/components/CheckBox/CheckBox.tsx");
/* harmony import */ var _TodoItem_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoItem.module.scss */ "./src/containers/TodoContainer/TodoItem/TodoItem.module.scss");
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




var TodoItem = function (_a) {
    var todo = _a.todo, onDeleteTodo = _a.onDeleteTodo, onEditTodo = _a.onEditTodo, onDoneChecked = _a.onDoneChecked;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: _TodoItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].TodoItem + " flex" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CheckBox_CheckBox__WEBPACK_IMPORTED_MODULE_2__.CheckBox, { value: todo.isDone, onInput: function (value) { return onDoneChecked(todo.id, value); } }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "mr-auto ml-2 ".concat(todo.isDone && _TodoItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].TodoIsDone) }, { children: todo.task })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__.Button, __assign({ onClick: function () { return onEditTodo(todo.id); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-pencil" }) })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "ml-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__.Button, __assign({ onClick: function () {
                        onDeleteTodo(todo.id);
                    } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-trash" }) })) }))] })));
};
/* harmony default export */ __webpack_exports__["default"] = (TodoItem);


/***/ }),

/***/ "./src/containers/TodoContainer/index.tsx":
/*!************************************************!*\
  !*** ./src/containers/TodoContainer/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dependencies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dependencies */ "./src/dependencies.ts");
/* harmony import */ var _hoc_withDependencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hoc/withDependencies */ "./src/hoc/withDependencies.tsx");
/* harmony import */ var _TodoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoContainer */ "./src/containers/TodoContainer/TodoContainer.tsx");



/* harmony default export */ __webpack_exports__["default"] = ((0,_hoc_withDependencies__WEBPACK_IMPORTED_MODULE_1__.withDependency)(_TodoContainer__WEBPACK_IMPORTED_MODULE_2__.TodoContainer, {
    todoService: _dependencies__WEBPACK_IMPORTED_MODULE_0__.dependencies.TodoService,
}));


/***/ }),

/***/ "./src/customHooks/useAutoFocus.tsx":
/*!******************************************!*\
  !*** ./src/customHooks/useAutoFocus.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAutoFocus": function() { return /* binding */ useAutoFocus; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useAutoFocus = function () {
    var elementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var _a;
        (_a = elementRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [elementRef]);
    return elementRef;
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbnRhaW5lcnNfVG9kb0NvbnRhaW5lcl9pbmRleF90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0EsK0RBQWUsQ0FBQywyS0FBMks7Ozs7Ozs7Ozs7O0FDRDNMO0FBQ0EsK0RBQWUsQ0FBQywySEFBMkg7Ozs7Ozs7Ozs7O0FDRDNJO0FBQ0EsK0RBQWUsQ0FBQyxrQ0FBa0M7Ozs7Ozs7Ozs7O0FDRGxEO0FBQ0EsK0RBQWUsQ0FBQyxtQ0FBbUM7Ozs7Ozs7Ozs7O0FDRG5EO0FBQ0EsK0RBQWUsQ0FBQyxzRUFBc0U7Ozs7Ozs7Ozs7Ozs7O0FDRHRGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDLG9HQUFvRztBQUNwRyxrQ0FBa0MsUUFBUSw2SUFBNkk7QUFDdkw7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVMsNkJBQTZCLHlCQUF5QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTLDZCQUE2Qix5QkFBeUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUyw2QkFBNkIseUJBQXlCO0FBQy9EO0FBQ0E7QUFDQSxDQUFDO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0N2QixnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dEO0FBQ25CO0FBQ2M7QUFDcEMsYUFBYSwyQ0FBSTtBQUN4QjtBQUNBLHNCQUFzQixrRUFBYztBQUNwQztBQUNBLHdCQUF3QixtRUFBZTtBQUN2QztBQUNBLHdCQUF3QixxRUFBaUI7QUFDekM7QUFDQSx3QkFBd0IsbUVBQWU7QUFDdkM7QUFDQSx3QkFBd0IsdUVBQW1CO0FB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Q0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0x1QztBQUNuQztBQUNQLHFCQUFxQiw2Q0FBTTtBQUMzQixJQUFJLGdEQUFTO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNScUQ7QUFDQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsc0JBQXNCLDhEQUFXLEdBQUcsa0NBQWtDO0FBQ3RFLHNCQUFzQiwrREFBVztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21DOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCbkMsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnRDtBQUNKO0FBQ3JDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0RBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCw4QkFBOEIsUUFBUSxzREFBSSx1QkFBdUI7QUFDakU7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxZQUFZO0FBQ3hEO0FBQ0E7QUFDQSxDQUFDO0FBQ3NCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5tb2R1bGUuc2Nzcz9iOWYxIiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb21wb25lbnRzL0J1dHRvblNlbGVjdC9CdXR0b25TZWxlY3QubW9kdWxlLnNjc3M/NzE2YSIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29tcG9uZW50cy9DaGVja0JveC9DaGVja0JveC5tb2R1bGUuc2Nzcz83ZjQxIiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb21wb25lbnRzL1RleHRGaWVsZC9UZXh0RmllbGQubW9kdWxlLnNjc3M/NmFhNyIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29udGFpbmVycy9Ub2RvQ29udGFpbmVyL1RvZG9JdGVtL1RvZG9JdGVtLm1vZHVsZS5zY3NzPzFkMTQiLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2FkYXB0ZXJzL0h0dHBBZGFwdGVyLnRzIiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24udHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb21wb25lbnRzL0J1dHRvblNlbGVjdC9CdXR0b25TZWxlY3QudHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb21wb25lbnRzL0NoZWNrQm94L0NoZWNrQm94LnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29tcG9uZW50cy9UZXh0RmllbGQvVGV4dEZpZWxkLnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29udGFpbmVycy9Ub2RvQ29udGFpbmVyL0FkZFRvZG9JdGVtL0FkZFRvZG9JdGVtLnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29udGFpbmVycy9Ub2RvQ29udGFpbmVyL1RvZG9Db250YWluZXIudHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIvVG9kb0l0ZW0vVG9kb0l0ZW0udHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIvaW5kZXgudHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jdXN0b21Ib29rcy91c2VBdXRvRm9jdXMudHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9kZXBlbmRlbmNpZXMudHMiLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2hvYy93aXRoRGVwZW5kZW5jaWVzLnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvc2VydmljZXMvVG9kby5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiQnV0dG9uXCI6XCJZUVFhT0pCS2RHZE00T29pZXBpUlwiLFwiUHJpbWFyeVwiOlwiUUttX1dlcFVFUm0wX2VBRVRPV3dcIixcIlNlY29uZGFyeVwiOlwiUFg1M01UcTRQOXF6M05UMUhib0tcIixcIkRpc2FibGVkXCI6XCJ6d0RzVUtkQ3dMNVc1V1ZYU3UyOVwiLFwiVHJhbnNwYXJlbnRcIjpcIldmSkhHbElIeGRzX3hNT3lYM2FSXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiQnV0dG9uU2VsZWN0V3JhcHBlclwiOlwicWtiSzBESlV1Sl9NUFI4WVBhQzlcIixcIkJ1dHRvblNlbGVjdE9wdGlvblwiOlwiTmJSblgxYkRtOTBmcl9oX2xXY0NcIixcIlNlbGVjdGVkXCI6XCJvZFhKbW5TV0xMU2ZzZlpqUzdSc1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkNoZWNrQm94XCI6XCJXWkFyOWdJelBiMXVZeUVDM3FEUVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIlRleHRGaWVsZFwiOlwiREIySTNZMHdPcVByanpCbFZTc2pcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJUb2RvSXRlbVwiOlwiUEN2aUVaT3BueEFXQ1cwNFFENjlcIixcIlRvZG9Jc0RvbmVcIjpcIm5aTWxTNG0xOENKbGRZdDN3MEduXCJ9OyIsInZhciBIdHRwQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIdHRwQWRhcHRlcihfYSkge1xuICAgICAgICB2YXIgYmFzZVVybCA9IF9hLmJhc2VVcmw7XG4gICAgICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw7XG4gICAgfVxuICAgIEh0dHBBZGFwdGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAodXJsLCBwYXJhbXMpIHtcbiAgICAgICAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSB7IHBhcmFtcyA9IHsgcXVlcnk6IHt9IH07IH1cbiAgICAgICAgdmFyIHF1ZXJ5ID0gT2JqZWN0LmtleXMoKHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5xdWVyeSkgfHwge30pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHsgdmFyIF9hOyByZXR1cm4gXCJcIi5jb25jYXQoa2V5LCBcIj1cIikuY29uY2F0KChfYSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocGFyYW1zLnF1ZXJ5LCBrZXkpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWUpOyB9KVxuICAgICAgICAgICAgLmpvaW4oXCImXCIpO1xuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5iYXNlVXJsICsgdXJsICsgXCI/XCIgKyBxdWVyeSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSHR0cEFkYXB0ZXIucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLmJhc2VVcmwgKyB1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pO1xuICAgIH07XG4gICAgSHR0cEFkYXB0ZXIucHJvdG90eXBlLnBhdGNoID0gZnVuY3Rpb24gKHVybCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5iYXNlVXJsICsgdXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSk7XG4gICAgfTtcbiAgICBIdHRwQWRhcHRlci5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHVybCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5iYXNlVXJsICsgdXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEh0dHBBZGFwdGVyO1xufSgpKTtcbmV4cG9ydCB7IEh0dHBBZGFwdGVyIH07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0J1dHRvbi5tb2R1bGUuc2Nzc1wiO1xuZXhwb3J0IHZhciBCdXR0b24gPSBtZW1vKGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCBwcmltYXJ5ID0gX2EucHJpbWFyeSwgc2Vjb25kYXJ5ID0gX2Euc2Vjb25kYXJ5LCBkaXNhYmxlID0gX2EuZGlzYWJsZSwgdHJhbnNwYXJlbnQgPSBfYS50cmFuc3BhcmVudCwgb25DbGljayA9IF9hLm9uQ2xpY2ssIHR5cGUgPSBfYS50eXBlLCBfYiA9IF9hLmNsYXNzTmFtZSwgY2xhc3NOYW1lID0gX2IgPT09IHZvaWQgMCA/IFwiXCIgOiBfYjtcbiAgICB2YXIgY2xhc3NOYW1lcyA9IFtjbGFzc2VzLkJ1dHRvbiwgY2xhc3NOYW1lXTtcbiAgICBpZiAocHJpbWFyeSlcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzZXMuUHJpbWFyeSk7XG4gICAgaWYgKHNlY29uZGFyeSlcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzZXMuU2Vjb25kYXJ5KTtcbiAgICBpZiAoZGlzYWJsZSlcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzZXMuRGlzYWJsZSk7XG4gICAgaWYgKHRyYW5zcGFyZW50KVxuICAgICAgICBjbGFzc05hbWVzLnB1c2goY2xhc3Nlcy5UcmFuc3BhcmVudCk7XG4gICAgcmV0dXJuIChfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgdHlwZTogdHlwZSwgb25DbGljazogb25DbGljaywgY2xhc3NOYW1lOiBjbGFzc05hbWVzLmpvaW4oXCIgXCIpIH0sIHsgY2hpbGRyZW46IGNoaWxkcmVuIH0pKSk7XG59KTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL0J1dHRvbi9CdXR0b25cIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0J1dHRvblNlbGVjdC5tb2R1bGUuc2Nzc1wiO1xuZXhwb3J0IHZhciBCdXR0b25TZWxlY3QgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdmFsdWUgPSBfYS52YWx1ZSwgb3B0aW9ucyA9IF9hLm9wdGlvbnMsIG9uSW5wdXQgPSBfYS5vbklucHV0O1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3Nlcy5CdXR0b25TZWxlY3RXcmFwcGVyIH0sIHsgY2hpbGRyZW46IG9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24pIHsgcmV0dXJuIChfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNsYXNzZXMuQnV0dG9uU2VsZWN0T3B0aW9uLCBcIiBcIikuY29uY2F0KG9wdGlvbi52YWx1ZSA9PT0gdmFsdWUgJiYgY2xhc3Nlcy5TZWxlY3RlZCksIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9uSW5wdXQob3B0aW9uLnZhbHVlKTsgfSB9LCB7IGNoaWxkcmVuOiBvcHRpb24ubGFiZWwgfSksIG9wdGlvbi52YWx1ZSkpOyB9KSB9KSkpO1xufTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQ2hlY2tCb3gubW9kdWxlLnNjc3NcIjtcbmV4cG9ydCB2YXIgQ2hlY2tCb3ggPSBtZW1vKGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB2YWx1ZSA9IF9hLnZhbHVlLCBuYW1lID0gX2EubmFtZSwgbGFiZWwgPSBfYS5sYWJlbCwgbGFiZWxOYW1lID0gX2EubGFiZWxOYW1lLCBvbklucHV0ID0gX2Eub25JbnB1dDtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc2VzLkNoZWNrQm94IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaW5wdXRcIiwgeyB0eXBlOiBcImNoZWNrYm94XCIsIG5hbWU6IG5hbWUsIGlkOiBuYW1lLCBjaGVja2VkOiB2YWx1ZSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gb25JbnB1dCAmJiBvbklucHV0KGV2ZW50LnRhcmdldC5jaGVja2VkKTsgfSB9KSwgbGFiZWwgPyAoX2pzeChcImxhYmVsXCIsIF9fYXNzaWduKHsgaHRtbEZvcjogbmFtZSwgY2xhc3NOYW1lOiBcIm1sLTJcIiB9LCB7IGNoaWxkcmVuOiBsYWJlbE5hbWUgfSkpKSA6IG51bGxdIH0pKSk7XG59KTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBmb3J3YXJkUmVmLCBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9UZXh0RmllbGQubW9kdWxlLnNjc3NcIjtcbmV4cG9ydCB2YXIgVGV4dEZpZWxkID0gbWVtbyhmb3J3YXJkUmVmKGZ1bmN0aW9uIChfYSwgcmVmKSB7XG4gICAgdmFyIG9uSW5wdXQgPSBfYS5vbklucHV0LCB2YWx1ZSA9IF9hLnZhbHVlLCBsYWJlbCA9IF9hLmxhYmVsLCBuYW1lID0gX2EubmFtZSwgbGFiZWxOYW1lID0gX2EubGFiZWxOYW1lO1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbbGFiZWwgPyBfanN4KFwibGFiZWxcIiwgX19hc3NpZ24oeyBodG1sRm9yOiBuYW1lIH0sIHsgY2hpbGRyZW46IGxhYmVsTmFtZSB9KSkgOiBudWxsLCBfanN4KFwiaW5wdXRcIiwgeyByZWY6IHJlZiwgdHlwZTogXCJ0ZXh0XCIsIGlkOiBuYW1lLCBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIG9uSW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKTsgfSwgY2xhc3NOYW1lOiBjbGFzc2VzLlRleHRGaWVsZCB9KV0gfSkpO1xufSkpO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvblwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvVGV4dEZpZWxkL1RleHRGaWVsZFwiO1xuaW1wb3J0IHsgdXNlQXV0b0ZvY3VzIH0gZnJvbSBcIi4uLy4uLy4uL2N1c3RvbUhvb2tzL3VzZUF1dG9Gb2N1c1wiO1xuZXhwb3J0IHZhciBBZGRUb2RvSXRlbSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBvbkFkZENsaWNrID0gX2Eub25BZGRDbGljaztcbiAgICB2YXIgdGV4dEZpZWxkRm9jdXMgPSB1c2VBdXRvRm9jdXMoKTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShcIlwiKSwgdGFzayA9IF9iWzBdLCBzZXRUYXNrID0gX2JbMV07XG4gICAgdmFyIG9uVGFza0ZpZWxkQ2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHNldFRhc2sodmFsdWUpO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZUFkZFN1Ym1pdGVkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgb25BZGRDbGljayh0YXNrKTtcbiAgICAgICAgc2V0VGFzayhcIlwiKTtcbiAgICAgICAgKF9hID0gdGV4dEZpZWxkRm9jdXMuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZm9ybVwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmbGV4XCIsIG9uU3VibWl0OiBoYW5kbGVBZGRTdWJtaXRlZCB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmbGV4LWdyb3ctMSBtci0yXCIgfSwgeyBjaGlsZHJlbjogX2pzeChUZXh0RmllbGQsIHsgdmFsdWU6IHRhc2ssIG9uSW5wdXQ6IG9uVGFza0ZpZWxkQ2hhbmdlLCByZWY6IHRleHRGaWVsZEZvY3VzIH0pIH0pKSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyB0eXBlOiBcInN1Ym1pdFwiLCBwcmltYXJ5OiB0cnVlIH0sIHsgY2hpbGRyZW46IFwiQWRkXCIgfSkpIH0pXSB9KSkpO1xufTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSBcIi4vVG9kb0l0ZW0vVG9kb0l0ZW1cIjtcbmltcG9ydCB7IEFkZFRvZG9JdGVtIH0gZnJvbSBcIi4vQWRkVG9kb0l0ZW0vQWRkVG9kb0l0ZW1cIjtcbmltcG9ydCB7IEJ1dHRvblNlbGVjdCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J1dHRvblNlbGVjdC9CdXR0b25TZWxlY3RcIjtcbmltcG9ydCB7IHVzZUFwcFN0YXRlIH0gZnJvbSBcIi4uLy4uL2hvYy91c2VBcHBTdGF0ZVwiO1xuZXhwb3J0IHZhciBUb2RvQ29udGFpbmVyID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHRvZG9TZXJ2aWNlID0gX2EudG9kb1NlcnZpY2U7XG4gICAgdmFyIF9iID0gdXNlQXBwU3RhdGUoKSwgYXBwU3RhdGUgPSBfYi5hcHBTdGF0ZSwgc2V0QXBwU3RhdGUgPSBfYi5zZXRBcHBTdGF0ZTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShbXSksIHRvZG9zID0gX2NbMF0sIHNldFRvZG9zID0gX2NbMV07XG4gICAgdmFyIF9kID0gdXNlU3RhdGUoXCJhbGxcIiksIHRvZG9GaWx0ZXIgPSBfZFswXSwgc2V0VG9kb0ZpbHRlciA9IF9kWzFdO1xuICAgIHZhciBmZXRjaFRvZG9zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdG9kb1NlcnZpY2UuZ2V0QWxsVG9kb3MoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBzZXRUb2RvcyhkYXRhKTsgfSk7XG4gICAgfTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYXBwU3RhdGUuZWRpdFRvZG9JZCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGZldGNoVG9kb3MoKTtcbiAgICAgICAgfVxuICAgICAgICBmZXRjaFRvZG9zKCk7XG4gICAgfSwgW2FwcFN0YXRlLmVkaXRUb2RvSWRdKTtcbiAgICB2YXIgYWRkVG9Ub2RvcyA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgIHRvZG9TZXJ2aWNlLmFkZFRvZG8odGFzaykudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBmZXRjaFRvZG9zKCk7IH0pO1xuICAgIH07XG4gICAgdmFyIGVkaXRUb2RvID0gZnVuY3Rpb24gKHRvZG9JZCkge1xuICAgICAgICBzZXRBcHBTdGF0ZSh7IGVkaXRUb2RvSWQ6IHRvZG9JZCwgaXNEcmF3ZXJPcGVuOiB0cnVlIH0pO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZURvbmVDaGVja2VkID0gZnVuY3Rpb24gKHRvZG9JZCwgaXNEb25lKSB7XG4gICAgICAgIHRvZG9TZXJ2aWNlLnVwZGF0ZVRvZG8odG9kb0lkLCB7IGlzRG9uZTogaXNEb25lIH0pLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gZmV0Y2hUb2RvcygpOyB9KTtcbiAgICB9O1xuICAgIHZhciBkZWxldGVUb2RvID0gZnVuY3Rpb24gKHRvZG9JZCkge1xuICAgICAgICB0b2RvU2VydmljZS5kZWxldGVUb2RvKHRvZG9JZCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBmZXRjaFRvZG9zKCk7IH0pO1xuICAgIH07XG4gICAgdmFyIGJ1dHRvblNlbGVjdE9wdGlvbnMgPSBbXG4gICAgICAgIHsgbGFiZWw6IFwiQWxsXCIsIHZhbHVlOiBcImFsbFwiIH0sXG4gICAgICAgIHsgbGFiZWw6IFwiRG9uZVwiLCB2YWx1ZTogXCJ0cnVlXCIgfSxcbiAgICAgICAgeyBsYWJlbDogXCJOb3QgRG9uZVwiLCB2YWx1ZTogXCJmYWxzZVwiIH0sXG4gICAgXTtcbiAgICB2YXIgaGFuZGxlVG9kb0ZpbHRlckNoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBzZXRUb2RvRmlsdGVyKHZhbHVlKTtcbiAgICAgICAgdG9kb1NlcnZpY2VcbiAgICAgICAgICAgIC5nZXRBbGxUb2Rvcyh7IHF1ZXJ5OiB7IGlzRG9uZTogdmFsdWUgfSB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIHNldFRvZG9zKGRhdGEpOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChBZGRUb2RvSXRlbSwgeyBvbkFkZENsaWNrOiBhZGRUb1RvZG9zIH0pLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm10LTNcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvblNlbGVjdCwgeyBvcHRpb25zOiBidXR0b25TZWxlY3RPcHRpb25zLCBvbklucHV0OiBoYW5kbGVUb2RvRmlsdGVyQ2hhbmdlLCB2YWx1ZTogdG9kb0ZpbHRlciB9KSB9KSksIHRvZG9zLm1hcChmdW5jdGlvbiAodG9kbywgaW5kZXgpIHsgcmV0dXJuIChfanN4KFRvZG9JdGVtLCB7IHRvZG86IHRvZG8sIG9uRWRpdFRvZG86IGVkaXRUb2RvLCBvbkRvbmVDaGVja2VkOiBoYW5kbGVEb25lQ2hlY2tlZCwgb25EZWxldGVUb2RvOiBkZWxldGVUb2RvIH0sIGluZGV4KSk7IH0pXSB9KSk7XG59O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uXCI7XG5pbXBvcnQgeyBDaGVja0JveCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0NoZWNrQm94L0NoZWNrQm94XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Ub2RvSXRlbS5tb2R1bGUuc2Nzc1wiO1xudmFyIFRvZG9JdGVtID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHRvZG8gPSBfYS50b2RvLCBvbkRlbGV0ZVRvZG8gPSBfYS5vbkRlbGV0ZVRvZG8sIG9uRWRpdFRvZG8gPSBfYS5vbkVkaXRUb2RvLCBvbkRvbmVDaGVja2VkID0gX2Eub25Eb25lQ2hlY2tlZDtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc2VzLlRvZG9JdGVtICsgXCIgZmxleFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IF9qc3goQ2hlY2tCb3gsIHsgdmFsdWU6IHRvZG8uaXNEb25lLCBvbklucHV0OiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIG9uRG9uZUNoZWNrZWQodG9kby5pZCwgdmFsdWUpOyB9IH0pIH0pLCBfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJtci1hdXRvIG1sLTIgXCIuY29uY2F0KHRvZG8uaXNEb25lICYmIGNsYXNzZXMuVG9kb0lzRG9uZSkgfSwgeyBjaGlsZHJlbjogdG9kby50YXNrIH0pKSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBvbkVkaXRUb2RvKHRvZG8uaWQpOyB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXBlbmNpbFwiIH0pIH0pKSB9KSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJtbC0yXCIgfSwgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGVUb2RvKHRvZG8uaWQpO1xuICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXRyYXNoXCIgfSkgfSkpIH0pKV0gfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBUb2RvSXRlbTtcbiIsImltcG9ydCB7IGRlcGVuZGVuY2llcyB9IGZyb20gXCIuLi8uLi9kZXBlbmRlbmNpZXNcIjtcbmltcG9ydCB7IHdpdGhEZXBlbmRlbmN5IH0gZnJvbSBcIi4uLy4uL2hvYy93aXRoRGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQgeyBUb2RvQ29udGFpbmVyIH0gZnJvbSBcIi4vVG9kb0NvbnRhaW5lclwiO1xuZXhwb3J0IGRlZmF1bHQgd2l0aERlcGVuZGVuY3koVG9kb0NvbnRhaW5lciwge1xuICAgIHRvZG9TZXJ2aWNlOiBkZXBlbmRlbmNpZXMuVG9kb1NlcnZpY2UsXG59KTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgdmFyIHVzZUF1dG9Gb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxlbWVudFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IGVsZW1lbnRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gICAgfSwgW2VsZW1lbnRSZWZdKTtcbiAgICByZXR1cm4gZWxlbWVudFJlZjtcbn07XG4iLCJpbXBvcnQgeyBIdHRwQWRhcHRlciB9IGZyb20gXCIuL2FkYXB0ZXJzL0h0dHBBZGFwdGVyXCI7XG5pbXBvcnQgeyBUb2RvU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL1RvZG8uc2VydmljZVwiO1xudmFyIERlcGVuZGVuY3lDb250YWluZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVwZW5kZW5jeUNvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5fZGVwZW5kZW5jeSA9IHt9O1xuICAgIH1cbiAgICBEZXBlbmRlbmN5Q29udGFpbmVyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoa2V5LCBkZXBlbmRlbmN5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLl9kZXBlbmRlbmN5LCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiBkZXBlbmRlbmN5LFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERlcGVuZGVuY3lDb250YWluZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKF9hID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLl9kZXBlbmRlbmN5LCBrZXkpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWU7XG4gICAgfTtcbiAgICByZXR1cm4gRGVwZW5kZW5jeUNvbnRhaW5lcjtcbn0oKSk7XG52YXIgaHR0cEFkYXB0ZXIgPSBuZXcgSHR0cEFkYXB0ZXIoeyBiYXNlVXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiIH0pO1xudmFyIHRvZG9TZXJ2aWNlID0gbmV3IFRvZG9TZXJ2aWNlKGh0dHBBZGFwdGVyKTtcbnZhciBkZXBlbmRlbmNpZXMgPSB7XG4gICAgVG9kb1NlcnZpY2U6IFN5bWJvbChcIlRvZG9TZXJ2aWNlXCIpLFxufTtcbnZhciBjb250YWluZXIgPSBuZXcgRGVwZW5kZW5jeUNvbnRhaW5lcigpO1xuY29udGFpbmVyLmFkZChkZXBlbmRlbmNpZXMuVG9kb1NlcnZpY2UsIHRvZG9TZXJ2aWNlKTtcbmV4cG9ydCB7IGRlcGVuZGVuY2llcywgY29udGFpbmVyIH07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCIuLi9kZXBlbmRlbmNpZXNcIjtcbmV4cG9ydCB2YXIgd2l0aERlcGVuZGVuY3kgPSBmdW5jdGlvbiAoQ29tcG9uZW50LCBkZXBlbmRlbmNpZXMpIHtcbiAgICB2YXIgcmVzb2x2ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhkZXBlbmRlbmNpZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3BOYW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIGRlcGVuZGVuY3lLZXkgPSAoX2EgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlcGVuZGVuY2llcywgcHJvcE5hbWUpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWU7XG4gICAgICAgIHZhciBkZXBlbmRlbmN5ID0gY29udGFpbmVyLmdldChkZXBlbmRlbmN5S2V5KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc29sdmVkRGVwZW5kZW5jaWVzLCBwcm9wTmFtZSwge1xuICAgICAgICAgICAgdmFsdWU6IGRlcGVuZGVuY3ksXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoX2pzeChDb21wb25lbnQsIF9fYXNzaWduKHt9LCBwcm9wcywgcmVzb2x2ZWREZXBlbmRlbmNpZXMpKSk7IH07XG59O1xuIiwidmFyIFRvZG9TZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRvZG9TZXJ2aWNlKGh0dHBBZGFwdGVyKSB7XG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHBBZGFwdGVyO1xuICAgIH1cbiAgICBUb2RvU2VydmljZS5wcm90b3R5cGUuZ2V0VG9kbyA9IGZ1bmN0aW9uICh0b2RvSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCIvdG9kb3MvXCIgKyB0b2RvSWQpO1xuICAgIH07XG4gICAgVG9kb1NlcnZpY2UucHJvdG90eXBlLmdldEFsbFRvZG9zID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcIi90b2Rvc1wiLCBwYXJhbXMpO1xuICAgIH07XG4gICAgVG9kb1NlcnZpY2UucHJvdG90eXBlLmFkZFRvZG8gPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXCIvdG9kb3NcIiwgeyB0b2RvOiB0YXNrIH0pO1xuICAgIH07XG4gICAgVG9kb1NlcnZpY2UucHJvdG90eXBlLnVwZGF0ZVRvZG8gPSBmdW5jdGlvbiAodG9kb0lkLCB0YXNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goXCIvdG9kb3MvXCIgKyB0b2RvSWQsIHRhc2spO1xuICAgIH07XG4gICAgVG9kb1NlcnZpY2UucHJvdG90eXBlLmRlbGV0ZVRvZG8gPSBmdW5jdGlvbiAodG9kb0lkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFwiL3RvZG9zXCIsIHsgaWQ6IHRvZG9JZCB9KTtcbiAgICB9O1xuICAgIHJldHVybiBUb2RvU2VydmljZTtcbn0oKSk7XG5leHBvcnQgeyBUb2RvU2VydmljZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9