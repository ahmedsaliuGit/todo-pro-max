"use strict";
exports.id = "src_containers_TodoContainer_index_tsx";
exports.ids = ["src_containers_TodoContainer_index_tsx"];
exports.modules = {

/***/ "./src/components/Button/Button.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Button/Button.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"Button":"YQQaOJBKdGdM4OoiepiR","Primary":"QKm_WepUERm0_eAETOWw","Secondary":"PX53MTq4P9qz3NT1HboK","Disabled":"zwDsUKdCwL5W5WVXSu29","Transparent":"WfJHGlIHxds_xMOyX3aR"});

/***/ }),

/***/ "./src/components/ButtonSelect/ButtonSelect.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/ButtonSelect/ButtonSelect.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ButtonSelectWrapper":"qkbK0DJUuJ_MPR8YPaC9","ButtonSelectOption":"NbRnX1bDm90fr_h_lWcC","Selected":"odXJmnSWLLSfsfZjS7Rs"});

/***/ }),

/***/ "./src/components/CheckBox/CheckBox.module.scss":
/*!******************************************************!*\
  !*** ./src/components/CheckBox/CheckBox.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"CheckBox":"WZAr9gIzPb1uYyEC3qDQ"});

/***/ }),

/***/ "./src/components/TextField/TextField.module.scss":
/*!********************************************************!*\
  !*** ./src/components/TextField/TextField.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"TextField":"DB2I3Y0wOqPrjzBlVSsj"});

/***/ }),

/***/ "./src/containers/TodoContainer/TodoItem/TodoItem.module.scss":
/*!********************************************************************!*\
  !*** ./src/containers/TodoContainer/TodoItem/TodoItem.module.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"TodoItem":"PCviEZOpnxAWCW04QD69","TodoIsDone":"nZMlS4m18CJldYt3w0Gn"});

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

/***/ "./src/components/Button/Button.tsx":
/*!******************************************!*\
  !*** ./src/components/Button/Button.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonSelect": () => (/* binding */ ButtonSelect)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckBox": () => (/* binding */ CheckBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextField": () => (/* binding */ TextField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTodoItem": () => (/* binding */ AddTodoItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoContainer": () => (/* binding */ TodoContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoItem);


/***/ }),

/***/ "./src/containers/TodoContainer/index.tsx":
/*!************************************************!*\
  !*** ./src/containers/TodoContainer/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dependencies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dependencies */ "./src/dependencies.ts");
/* harmony import */ var _hoc_withDependencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hoc/withDependencies */ "./src/hoc/withDependencies.tsx");
/* harmony import */ var _TodoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoContainer */ "./src/containers/TodoContainer/TodoContainer.tsx");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_hoc_withDependencies__WEBPACK_IMPORTED_MODULE_1__.withDependency)(_TodoContainer__WEBPACK_IMPORTED_MODULE_2__.TodoContainer, {
    todoService: _dependencies__WEBPACK_IMPORTED_MODULE_0__.dependencies.TodoService,
}));


/***/ }),

/***/ "./src/customHooks/useAutoFocus.tsx":
/*!******************************************!*\
  !*** ./src/customHooks/useAutoFocus.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAutoFocus": () => (/* binding */ useAutoFocus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbnRhaW5lcnNfVG9kb0NvbnRhaW5lcl9pbmRleF90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxpRUFBZSxDQUFDLDJLQUEySzs7Ozs7Ozs7Ozs7Ozs7QUNEM0w7QUFDQSxpRUFBZSxDQUFDLDJIQUEySDs7Ozs7Ozs7Ozs7Ozs7QUNEM0k7QUFDQSxpRUFBZSxDQUFDLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7QUNEbEQ7QUFDQSxpRUFBZSxDQUFDLG1DQUFtQzs7Ozs7Ozs7Ozs7Ozs7QUNEbkQ7QUFDQSxpRUFBZSxDQUFDLHNFQUFzRTs7Ozs7Ozs7Ozs7Ozs7QUNEdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFdBQVc7QUFDNUMsb0dBQW9HO0FBQ3BHLGtDQUFrQyxRQUFRLDZJQUE2STtBQUN2TDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUyw2QkFBNkIseUJBQXlCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVMsNkJBQTZCLHlCQUF5QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTLDZCQUE2Qix5QkFBeUI7QUFDL0Q7QUFDQTtBQUNBLENBQUM7QUFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ3ZCLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0Q7QUFDbkI7QUFDYztBQUNwQyxhQUFhLDJDQUFJO0FBQ3hCO0FBQ0Esc0JBQXNCLGtFQUFjO0FBQ3BDO0FBQ0Esd0JBQXdCLG1FQUFlO0FBQ3ZDO0FBQ0Esd0JBQXdCLHFFQUFpQjtBQUN6QztBQUNBLHdCQUF3QixtRUFBZTtBQUN2QztBQUNB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QUFpQixtRUFBd0I7QUFDekMsQ0FBQyxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHVDO0FBQ25DO0FBQ1AscUJBQXFCLDZDQUFNO0FBQzNCLElBQUksZ0RBQVM7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JxRDtBQUNDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxzQkFBc0IsOERBQVcsR0FBRyxrQ0FBa0M7QUFDdEUsc0JBQXNCLCtEQUFXO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJuQyxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dEO0FBQ0o7QUFDckM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3REFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLDhCQUE4QixRQUFRLHNEQUFJLHVCQUF1QjtBQUNqRTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsWUFBWTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFlBQVk7QUFDeEQ7QUFDQTtBQUNBLENBQUM7QUFDc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLm1vZHVsZS5zY3NzP2I5ZjEiLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbXBvbmVudHMvQnV0dG9uU2VsZWN0L0J1dHRvblNlbGVjdC5tb2R1bGUuc2Nzcz83MTZhIiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb21wb25lbnRzL0NoZWNrQm94L0NoZWNrQm94Lm1vZHVsZS5zY3NzPzdmNDEiLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbXBvbmVudHMvVGV4dEZpZWxkL1RleHRGaWVsZC5tb2R1bGUuc2Nzcz82YWE3Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIvVG9kb0l0ZW0vVG9kb0l0ZW0ubW9kdWxlLnNjc3M/MWQxNCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvYWRhcHRlcnMvSHR0cEFkYXB0ZXIudHMiLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbXBvbmVudHMvQnV0dG9uU2VsZWN0L0J1dHRvblNlbGVjdC50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbXBvbmVudHMvQ2hlY2tCb3gvQ2hlY2tCb3gudHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb21wb25lbnRzL1RleHRGaWVsZC9UZXh0RmllbGQudHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIvQWRkVG9kb0l0ZW0vQWRkVG9kb0l0ZW0udHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIvVG9kb0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbnRhaW5lcnMvVG9kb0NvbnRhaW5lci9Ub2RvSXRlbS9Ub2RvSXRlbS50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbnRhaW5lcnMvVG9kb0NvbnRhaW5lci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2N1c3RvbUhvb2tzL3VzZUF1dG9Gb2N1cy50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2RlcGVuZGVuY2llcy50cyIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvaG9jL3dpdGhEZXBlbmRlbmNpZXMudHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9zZXJ2aWNlcy9Ub2RvLnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJCdXR0b25cIjpcIllRUWFPSkJLZEdkTTRPb2llcGlSXCIsXCJQcmltYXJ5XCI6XCJRS21fV2VwVUVSbTBfZUFFVE9Xd1wiLFwiU2Vjb25kYXJ5XCI6XCJQWDUzTVRxNFA5cXozTlQxSGJvS1wiLFwiRGlzYWJsZWRcIjpcInp3RHNVS2RDd0w1VzVXVlhTdTI5XCIsXCJUcmFuc3BhcmVudFwiOlwiV2ZKSEdsSUh4ZHNfeE1PeVgzYVJcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJCdXR0b25TZWxlY3RXcmFwcGVyXCI6XCJxa2JLMERKVXVKX01QUjhZUGFDOVwiLFwiQnV0dG9uU2VsZWN0T3B0aW9uXCI6XCJOYlJuWDFiRG05MGZyX2hfbFdjQ1wiLFwiU2VsZWN0ZWRcIjpcIm9kWEptblNXTExTZnNmWmpTN1JzXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiQ2hlY2tCb3hcIjpcIldaQXI5Z0l6UGIxdVl5RUMzcURRXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiVGV4dEZpZWxkXCI6XCJEQjJJM1kwd09xUHJqekJsVlNzalwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIlRvZG9JdGVtXCI6XCJQQ3ZpRVpPcG54QVdDVzA0UUQ2OVwiLFwiVG9kb0lzRG9uZVwiOlwiblpNbFM0bTE4Q0psZFl0M3cwR25cIn07IiwidmFyIEh0dHBBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEh0dHBBZGFwdGVyKF9hKSB7XG4gICAgICAgIHZhciBiYXNlVXJsID0gX2EuYmFzZVVybDtcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybDtcbiAgICB9XG4gICAgSHR0cEFkYXB0ZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh1cmwsIHBhcmFtcykge1xuICAgICAgICBpZiAocGFyYW1zID09PSB2b2lkIDApIHsgcGFyYW1zID0geyBxdWVyeToge30gfTsgfVxuICAgICAgICB2YXIgcXVlcnkgPSBPYmplY3Qua2V5cygocGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLnF1ZXJ5KSB8fCB7fSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGtleSkgeyB2YXIgX2E7IHJldHVybiBcIlwiLmNvbmNhdChrZXksIFwiPVwiKS5jb25jYXQoKF9hID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwYXJhbXMucXVlcnksIGtleSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS52YWx1ZSk7IH0pXG4gICAgICAgICAgICAuam9pbihcIiZcIik7XG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLmJhc2VVcmwgKyB1cmwgKyBcIj9cIiArIHF1ZXJ5KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBIdHRwQWRhcHRlci5wcm90b3R5cGUucG9zdCA9IGZ1bmN0aW9uICh1cmwsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuYmFzZVVybCArIHVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSk7XG4gICAgfTtcbiAgICBIdHRwQWRhcHRlci5wcm90b3R5cGUucGF0Y2ggPSBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLmJhc2VVcmwgKyB1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KTtcbiAgICB9O1xuICAgIEh0dHBBZGFwdGVyLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLmJhc2VVcmwgKyB1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gSHR0cEFkYXB0ZXI7XG59KCkpO1xuZXhwb3J0IHsgSHR0cEFkYXB0ZXIgfTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQnV0dG9uLm1vZHVsZS5zY3NzXCI7XG5leHBvcnQgdmFyIEJ1dHRvbiA9IG1lbW8oZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIHByaW1hcnkgPSBfYS5wcmltYXJ5LCBzZWNvbmRhcnkgPSBfYS5zZWNvbmRhcnksIGRpc2FibGUgPSBfYS5kaXNhYmxlLCB0cmFuc3BhcmVudCA9IF9hLnRyYW5zcGFyZW50LCBvbkNsaWNrID0gX2Eub25DbGljaywgdHlwZSA9IF9hLnR5cGUsIF9iID0gX2EuY2xhc3NOYW1lLCBjbGFzc05hbWUgPSBfYiA9PT0gdm9pZCAwID8gXCJcIiA6IF9iO1xuICAgIHZhciBjbGFzc05hbWVzID0gW2NsYXNzZXMuQnV0dG9uLCBjbGFzc05hbWVdO1xuICAgIGlmIChwcmltYXJ5KVxuICAgICAgICBjbGFzc05hbWVzLnB1c2goY2xhc3Nlcy5QcmltYXJ5KTtcbiAgICBpZiAoc2Vjb25kYXJ5KVxuICAgICAgICBjbGFzc05hbWVzLnB1c2goY2xhc3Nlcy5TZWNvbmRhcnkpO1xuICAgIGlmIChkaXNhYmxlKVxuICAgICAgICBjbGFzc05hbWVzLnB1c2goY2xhc3Nlcy5EaXNhYmxlKTtcbiAgICBpZiAodHJhbnNwYXJlbnQpXG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChjbGFzc2VzLlRyYW5zcGFyZW50KTtcbiAgICByZXR1cm4gKF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyB0eXBlOiB0eXBlLCBvbkNsaWNrOiBvbkNsaWNrLCBjbGFzc05hbWU6IGNsYXNzTmFtZXMuam9pbihcIiBcIikgfSwgeyBjaGlsZHJlbjogY2hpbGRyZW4gfSkpKTtcbn0pO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vQnV0dG9uL0J1dHRvblwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQnV0dG9uU2VsZWN0Lm1vZHVsZS5zY3NzXCI7XG5leHBvcnQgdmFyIEJ1dHRvblNlbGVjdCA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB2YWx1ZSA9IF9hLnZhbHVlLCBvcHRpb25zID0gX2Eub3B0aW9ucywgb25JbnB1dCA9IF9hLm9uSW5wdXQ7XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc2VzLkJ1dHRvblNlbGVjdFdyYXBwZXIgfSwgeyBjaGlsZHJlbjogb3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbikgeyByZXR1cm4gKF9qc3goQnV0dG9uLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY2xhc3Nlcy5CdXR0b25TZWxlY3RPcHRpb24sIFwiIFwiKS5jb25jYXQob3B0aW9uLnZhbHVlID09PSB2YWx1ZSAmJiBjbGFzc2VzLlNlbGVjdGVkKSwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gb25JbnB1dChvcHRpb24udmFsdWUpOyB9IH0sIHsgY2hpbGRyZW46IG9wdGlvbi5sYWJlbCB9KSwgb3B0aW9uLnZhbHVlKSk7IH0pIH0pKSk7XG59O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9DaGVja0JveC5tb2R1bGUuc2Nzc1wiO1xuZXhwb3J0IHZhciBDaGVja0JveCA9IG1lbW8oZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHZhbHVlID0gX2EudmFsdWUsIG5hbWUgPSBfYS5uYW1lLCBsYWJlbCA9IF9hLmxhYmVsLCBsYWJlbE5hbWUgPSBfYS5sYWJlbE5hbWUsIG9uSW5wdXQgPSBfYS5vbklucHV0O1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzZXMuQ2hlY2tCb3ggfSwgeyBjaGlsZHJlbjogW19qc3goXCJpbnB1dFwiLCB7IHR5cGU6IFwiY2hlY2tib3hcIiwgbmFtZTogbmFtZSwgaWQ6IG5hbWUsIGNoZWNrZWQ6IHZhbHVlLCBvbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBvbklucHV0ICYmIG9uSW5wdXQoZXZlbnQudGFyZ2V0LmNoZWNrZWQpOyB9IH0pLCBsYWJlbCA/IChfanN4KFwibGFiZWxcIiwgX19hc3NpZ24oeyBodG1sRm9yOiBuYW1lLCBjbGFzc05hbWU6IFwibWwtMlwiIH0sIHsgY2hpbGRyZW46IGxhYmVsTmFtZSB9KSkpIDogbnVsbF0gfSkpKTtcbn0pO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGZvcndhcmRSZWYsIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1RleHRGaWVsZC5tb2R1bGUuc2Nzc1wiO1xuZXhwb3J0IHZhciBUZXh0RmllbGQgPSBtZW1vKGZvcndhcmRSZWYoZnVuY3Rpb24gKF9hLCByZWYpIHtcbiAgICB2YXIgb25JbnB1dCA9IF9hLm9uSW5wdXQsIHZhbHVlID0gX2EudmFsdWUsIGxhYmVsID0gX2EubGFiZWwsIG5hbWUgPSBfYS5uYW1lLCBsYWJlbE5hbWUgPSBfYS5sYWJlbE5hbWU7XG4gICAgcmV0dXJuIChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtsYWJlbCA/IF9qc3goXCJsYWJlbFwiLCBfX2Fzc2lnbih7IGh0bWxGb3I6IG5hbWUgfSwgeyBjaGlsZHJlbjogbGFiZWxOYW1lIH0pKSA6IG51bGwsIF9qc3goXCJpbnB1dFwiLCB7IHJlZjogcmVmLCB0eXBlOiBcInRleHRcIiwgaWQ6IG5hbWUsIG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gb25JbnB1dChldmVudC50YXJnZXQudmFsdWUpOyB9LCBjbGFzc05hbWU6IGNsYXNzZXMuVGV4dEZpZWxkIH0pXSB9KSk7XG59KSk7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9UZXh0RmllbGQvVGV4dEZpZWxkXCI7XG5pbXBvcnQgeyB1c2VBdXRvRm9jdXMgfSBmcm9tIFwiLi4vLi4vLi4vY3VzdG9tSG9va3MvdXNlQXV0b0ZvY3VzXCI7XG5leHBvcnQgdmFyIEFkZFRvZG9JdGVtID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIG9uQWRkQ2xpY2sgPSBfYS5vbkFkZENsaWNrO1xuICAgIHZhciB0ZXh0RmllbGRGb2N1cyA9IHVzZUF1dG9Gb2N1cygpO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKFwiXCIpLCB0YXNrID0gX2JbMF0sIHNldFRhc2sgPSBfYlsxXTtcbiAgICB2YXIgb25UYXNrRmllbGRDaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgc2V0VGFzayh2YWx1ZSk7XG4gICAgfTtcbiAgICB2YXIgaGFuZGxlQWRkU3VibWl0ZWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvbkFkZENsaWNrKHRhc2spO1xuICAgICAgICBzZXRUYXNrKFwiXCIpO1xuICAgICAgICAoX2EgPSB0ZXh0RmllbGRGb2N1cy5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9jdXMoKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoXCJmb3JtXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZsZXhcIiwgb25TdWJtaXQ6IGhhbmRsZUFkZFN1Ym1pdGVkIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZsZXgtZ3Jvdy0xIG1yLTJcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFRleHRGaWVsZCwgeyB2YWx1ZTogdGFzaywgb25JbnB1dDogb25UYXNrRmllbGRDaGFuZ2UsIHJlZjogdGV4dEZpZWxkRm9jdXMgfSkgfSkpLCBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IF9qc3goQnV0dG9uLCBfX2Fzc2lnbih7IHR5cGU6IFwic3VibWl0XCIsIHByaW1hcnk6IHRydWUgfSwgeyBjaGlsZHJlbjogXCJBZGRcIiB9KSkgfSldIH0pKSk7XG59O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUb2RvSXRlbSBmcm9tIFwiLi9Ub2RvSXRlbS9Ub2RvSXRlbVwiO1xuaW1wb3J0IHsgQWRkVG9kb0l0ZW0gfSBmcm9tIFwiLi9BZGRUb2RvSXRlbS9BZGRUb2RvSXRlbVwiO1xuaW1wb3J0IHsgQnV0dG9uU2VsZWN0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uU2VsZWN0L0J1dHRvblNlbGVjdFwiO1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUgfSBmcm9tIFwiLi4vLi4vaG9jL3VzZUFwcFN0YXRlXCI7XG5leHBvcnQgdmFyIFRvZG9Db250YWluZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdG9kb1NlcnZpY2UgPSBfYS50b2RvU2VydmljZTtcbiAgICB2YXIgX2IgPSB1c2VBcHBTdGF0ZSgpLCBhcHBTdGF0ZSA9IF9iLmFwcFN0YXRlLCBzZXRBcHBTdGF0ZSA9IF9iLnNldEFwcFN0YXRlO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKFtdKSwgdG9kb3MgPSBfY1swXSwgc2V0VG9kb3MgPSBfY1sxXTtcbiAgICB2YXIgX2QgPSB1c2VTdGF0ZShcImFsbFwiKSwgdG9kb0ZpbHRlciA9IF9kWzBdLCBzZXRUb2RvRmlsdGVyID0gX2RbMV07XG4gICAgdmFyIGZldGNoVG9kb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0b2RvU2VydmljZS5nZXRBbGxUb2RvcygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIHNldFRvZG9zKGRhdGEpOyB9KTtcbiAgICB9O1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChhcHBTdGF0ZS5lZGl0VG9kb0lkID09PSAtMSkge1xuICAgICAgICAgICAgZmV0Y2hUb2RvcygpO1xuICAgICAgICB9XG4gICAgICAgIGZldGNoVG9kb3MoKTtcbiAgICB9LCBbYXBwU3RhdGUuZWRpdFRvZG9JZF0pO1xuICAgIHZhciBhZGRUb1RvZG9zID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgdG9kb1NlcnZpY2UuYWRkVG9kbyh0YXNrKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZldGNoVG9kb3MoKTsgfSk7XG4gICAgfTtcbiAgICB2YXIgZWRpdFRvZG8gPSBmdW5jdGlvbiAodG9kb0lkKSB7XG4gICAgICAgIHNldEFwcFN0YXRlKHsgZWRpdFRvZG9JZDogdG9kb0lkLCBpc0RyYXdlck9wZW46IHRydWUgfSk7XG4gICAgfTtcbiAgICB2YXIgaGFuZGxlRG9uZUNoZWNrZWQgPSBmdW5jdGlvbiAodG9kb0lkLCBpc0RvbmUpIHtcbiAgICAgICAgdG9kb1NlcnZpY2UudXBkYXRlVG9kbyh0b2RvSWQsIHsgaXNEb25lOiBpc0RvbmUgfSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBmZXRjaFRvZG9zKCk7IH0pO1xuICAgIH07XG4gICAgdmFyIGRlbGV0ZVRvZG8gPSBmdW5jdGlvbiAodG9kb0lkKSB7XG4gICAgICAgIHRvZG9TZXJ2aWNlLmRlbGV0ZVRvZG8odG9kb0lkKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZldGNoVG9kb3MoKTsgfSk7XG4gICAgfTtcbiAgICB2YXIgYnV0dG9uU2VsZWN0T3B0aW9ucyA9IFtcbiAgICAgICAgeyBsYWJlbDogXCJBbGxcIiwgdmFsdWU6IFwiYWxsXCIgfSxcbiAgICAgICAgeyBsYWJlbDogXCJEb25lXCIsIHZhbHVlOiBcInRydWVcIiB9LFxuICAgICAgICB7IGxhYmVsOiBcIk5vdCBEb25lXCIsIHZhbHVlOiBcImZhbHNlXCIgfSxcbiAgICBdO1xuICAgIHZhciBoYW5kbGVUb2RvRmlsdGVyQ2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHNldFRvZG9GaWx0ZXIodmFsdWUpO1xuICAgICAgICB0b2RvU2VydmljZVxuICAgICAgICAgICAgLmdldEFsbFRvZG9zKHsgcXVlcnk6IHsgaXNEb25lOiB2YWx1ZSB9IH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gc2V0VG9kb3MoZGF0YSk7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KEFkZFRvZG9JdGVtLCB7IG9uQWRkQ2xpY2s6IGFkZFRvVG9kb3MgfSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibXQtM1wiIH0sIHsgY2hpbGRyZW46IF9qc3goQnV0dG9uU2VsZWN0LCB7IG9wdGlvbnM6IGJ1dHRvblNlbGVjdE9wdGlvbnMsIG9uSW5wdXQ6IGhhbmRsZVRvZG9GaWx0ZXJDaGFuZ2UsIHZhbHVlOiB0b2RvRmlsdGVyIH0pIH0pKSwgdG9kb3MubWFwKGZ1bmN0aW9uICh0b2RvLCBpbmRleCkgeyByZXR1cm4gKF9qc3goVG9kb0l0ZW0sIHsgdG9kbzogdG9kbywgb25FZGl0VG9kbzogZWRpdFRvZG8sIG9uRG9uZUNoZWNrZWQ6IGhhbmRsZURvbmVDaGVja2VkLCBvbkRlbGV0ZVRvZG86IGRlbGV0ZVRvZG8gfSwgaW5kZXgpKTsgfSldIH0pKTtcbn07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25cIjtcbmltcG9ydCB7IENoZWNrQm94IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQ2hlY2tCb3gvQ2hlY2tCb3hcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1RvZG9JdGVtLm1vZHVsZS5zY3NzXCI7XG52YXIgVG9kb0l0ZW0gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdG9kbyA9IF9hLnRvZG8sIG9uRGVsZXRlVG9kbyA9IF9hLm9uRGVsZXRlVG9kbywgb25FZGl0VG9kbyA9IF9hLm9uRWRpdFRvZG8sIG9uRG9uZUNoZWNrZWQgPSBfYS5vbkRvbmVDaGVja2VkO1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzZXMuVG9kb0l0ZW0gKyBcIiBmbGV4XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogX2pzeChDaGVja0JveCwgeyB2YWx1ZTogdG9kby5pc0RvbmUsIG9uSW5wdXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gb25Eb25lQ2hlY2tlZCh0b2RvLmlkLCB2YWx1ZSk7IH0gfSkgfSksIF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1yLWF1dG8gbWwtMiBcIi5jb25jYXQodG9kby5pc0RvbmUgJiYgY2xhc3Nlcy5Ub2RvSXNEb25lKSB9LCB7IGNoaWxkcmVuOiB0b2RvLnRhc2sgfSkpLCBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IF9qc3goQnV0dG9uLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9uRWRpdFRvZG8odG9kby5pZCk7IH0gfSwgeyBjaGlsZHJlbjogX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtcGVuY2lsXCIgfSkgfSkpIH0pLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1sLTJcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZVRvZG8odG9kby5pZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtdHJhc2hcIiB9KSB9KSkgfSkpXSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFRvZG9JdGVtO1xuIiwiaW1wb3J0IHsgZGVwZW5kZW5jaWVzIH0gZnJvbSBcIi4uLy4uL2RlcGVuZGVuY2llc1wiO1xuaW1wb3J0IHsgd2l0aERlcGVuZGVuY3kgfSBmcm9tIFwiLi4vLi4vaG9jL3dpdGhEZXBlbmRlbmNpZXNcIjtcbmltcG9ydCB7IFRvZG9Db250YWluZXIgfSBmcm9tIFwiLi9Ub2RvQ29udGFpbmVyXCI7XG5leHBvcnQgZGVmYXVsdCB3aXRoRGVwZW5kZW5jeShUb2RvQ29udGFpbmVyLCB7XG4gICAgdG9kb1NlcnZpY2U6IGRlcGVuZGVuY2llcy5Ub2RvU2VydmljZSxcbn0pO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB2YXIgdXNlQXV0b0ZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbGVtZW50UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gZWxlbWVudFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9jdXMoKTtcbiAgICB9LCBbZWxlbWVudFJlZl0pO1xuICAgIHJldHVybiBlbGVtZW50UmVmO1xufTtcbiIsImltcG9ydCB7IEh0dHBBZGFwdGVyIH0gZnJvbSBcIi4vYWRhcHRlcnMvSHR0cEFkYXB0ZXJcIjtcbmltcG9ydCB7IFRvZG9TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvVG9kby5zZXJ2aWNlXCI7XG52YXIgRGVwZW5kZW5jeUNvbnRhaW5lciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZXBlbmRlbmN5Q29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLl9kZXBlbmRlbmN5ID0ge307XG4gICAgfVxuICAgIERlcGVuZGVuY3lDb250YWluZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChrZXksIGRlcGVuZGVuY3kpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuX2RlcGVuZGVuY3ksIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IGRlcGVuZGVuY3ksXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRGVwZW5kZW5jeUNvbnRhaW5lci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoX2EgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMuX2RlcGVuZGVuY3ksIGtleSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS52YWx1ZTtcbiAgICB9O1xuICAgIHJldHVybiBEZXBlbmRlbmN5Q29udGFpbmVyO1xufSgpKTtcbnZhciBodHRwQWRhcHRlciA9IG5ldyBIdHRwQWRhcHRlcih7IGJhc2VVcmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCIgfSk7XG52YXIgdG9kb1NlcnZpY2UgPSBuZXcgVG9kb1NlcnZpY2UoaHR0cEFkYXB0ZXIpO1xudmFyIGRlcGVuZGVuY2llcyA9IHtcbiAgICBUb2RvU2VydmljZTogU3ltYm9sKFwiVG9kb1NlcnZpY2VcIiksXG59O1xudmFyIGNvbnRhaW5lciA9IG5ldyBEZXBlbmRlbmN5Q29udGFpbmVyKCk7XG5jb250YWluZXIuYWRkKGRlcGVuZGVuY2llcy5Ub2RvU2VydmljZSwgdG9kb1NlcnZpY2UpO1xuZXhwb3J0IHsgZGVwZW5kZW5jaWVzLCBjb250YWluZXIgfTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIi4uL2RlcGVuZGVuY2llc1wiO1xuZXhwb3J0IHZhciB3aXRoRGVwZW5kZW5jeSA9IGZ1bmN0aW9uIChDb21wb25lbnQsIGRlcGVuZGVuY2llcykge1xuICAgIHZhciByZXNvbHZlZERlcGVuZGVuY2llcyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGRlcGVuZGVuY2llcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgZGVwZW5kZW5jeUtleSA9IChfYSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVwZW5kZW5jaWVzLCBwcm9wTmFtZSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS52YWx1ZTtcbiAgICAgICAgdmFyIGRlcGVuZGVuY3kgPSBjb250YWluZXIuZ2V0KGRlcGVuZGVuY3lLZXkpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzb2x2ZWREZXBlbmRlbmNpZXMsIHByb3BOYW1lLCB7XG4gICAgICAgICAgICB2YWx1ZTogZGVwZW5kZW5jeSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIChfanN4KENvbXBvbmVudCwgX19hc3NpZ24oe30sIHByb3BzLCByZXNvbHZlZERlcGVuZGVuY2llcykpKTsgfTtcbn07XG4iLCJ2YXIgVG9kb1NlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVG9kb1NlcnZpY2UoaHR0cEFkYXB0ZXIpIHtcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cEFkYXB0ZXI7XG4gICAgfVxuICAgIFRvZG9TZXJ2aWNlLnByb3RvdHlwZS5nZXRUb2RvID0gZnVuY3Rpb24gKHRvZG9JZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcIi90b2Rvcy9cIiArIHRvZG9JZCk7XG4gICAgfTtcbiAgICBUb2RvU2VydmljZS5wcm90b3R5cGUuZ2V0QWxsVG9kb3MgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiL3RvZG9zXCIsIHBhcmFtcyk7XG4gICAgfTtcbiAgICBUb2RvU2VydmljZS5wcm90b3R5cGUuYWRkVG9kbyA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcIi90b2Rvc1wiLCB7IHRvZG86IHRhc2sgfSk7XG4gICAgfTtcbiAgICBUb2RvU2VydmljZS5wcm90b3R5cGUudXBkYXRlVG9kbyA9IGZ1bmN0aW9uICh0b2RvSWQsIHRhc2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChcIi90b2Rvcy9cIiArIHRvZG9JZCwgdGFzayk7XG4gICAgfTtcbiAgICBUb2RvU2VydmljZS5wcm90b3R5cGUuZGVsZXRlVG9kbyA9IGZ1bmN0aW9uICh0b2RvSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoXCIvdG9kb3NcIiwgeyBpZDogdG9kb0lkIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFRvZG9TZXJ2aWNlO1xufSgpKTtcbmV4cG9ydCB7IFRvZG9TZXJ2aWNlIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=