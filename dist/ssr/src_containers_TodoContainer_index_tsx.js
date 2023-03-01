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


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbnRhaW5lcnNfVG9kb0NvbnRhaW5lcl9pbmRleF90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxpRUFBZSxDQUFDLDJLQUEySzs7Ozs7Ozs7Ozs7Ozs7QUNEM0w7QUFDQSxpRUFBZSxDQUFDLDJIQUEySDs7Ozs7Ozs7Ozs7Ozs7QUNEM0k7QUFDQSxpRUFBZSxDQUFDLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7QUNEbEQ7QUFDQSxpRUFBZSxDQUFDLG1DQUFtQzs7Ozs7Ozs7Ozs7Ozs7QUNEbkQ7QUFDQSxpRUFBZSxDQUFDLHNFQUFzRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRHRGLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0Q7QUFDbkI7QUFDYztBQUNwQyxhQUFhLDJDQUFJO0FBQ3hCO0FBQ0Esc0JBQXNCLGtFQUFjO0FBQ3BDO0FBQ0Esd0JBQXdCLG1FQUFlO0FBQ3ZDO0FBQ0Esd0JBQXdCLHFFQUFpQjtBQUN6QztBQUNBLHdCQUF3QixtRUFBZTtBQUN2QztBQUNBLHdCQUF3Qix1RUFBbUI7QUFDM0MsWUFBWSxzREFBSSxzQkFBc0IsK0RBQStELElBQUksb0JBQW9CO0FBQzdILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCRCxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dEO0FBQ047QUFDTztBQUMxQztBQUNQO0FBQ0EsWUFBWSxzREFBSSxtQkFBbUIsV0FBVyxxRkFBMkIsRUFBRSxJQUFJLDBDQUEwQyxRQUFRLHNEQUFJLENBQUMsa0RBQU0sYUFBYSxxQkFBcUIsb0ZBQTBCLHdDQUF3QywwRUFBZ0IsMEJBQTBCLGlDQUFpQyxJQUFJLHdCQUF3QixvQkFBb0IsR0FBRztBQUM5Vzs7Ozs7Ozs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7QUFDSjtBQUNNO0FBQ3BCO0FBQzdDO0FBQ0E7QUFDQSxZQUFZLHVEQUFLLG1CQUFtQixXQUFXLHNFQUFnQixZQUFZLElBQUksV0FBVyxzREFBSSxVQUFVLFVBQVUsc0RBQUksQ0FBQyxtRUFBUSxJQUFJLGdEQUFnRCx5Q0FBeUMsR0FBRyxHQUFHLHNEQUFJLGlCQUFpQixpREFBaUQsd0VBQWtCLEdBQUcsSUFBSSxxQkFBcUIsSUFBSSxzREFBSSxVQUFVLFVBQVUsc0RBQUksQ0FBQyw2REFBTSxhQUFhLHVCQUF1QiwrQkFBK0IsSUFBSSxVQUFVLHNEQUFJLFFBQVEsMkJBQTJCLEdBQUcsSUFBSSxHQUFHLHNEQUFJLG1CQUFtQixtQkFBbUIsSUFBSSxVQUFVLHNEQUFJLENBQUMsNkRBQU0sYUFBYTtBQUMva0I7QUFDQSx1QkFBdUIsSUFBSSxVQUFVLHNEQUFJLFFBQVEsMEJBQTBCLEdBQUcsSUFBSSxLQUFLO0FBQ3ZGO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQjBCO0FBQ1U7QUFDWjtBQUNoRCxpRUFBZSxxRUFBYyxDQUFDLHlEQUFhO0FBQzNDLGlCQUFpQixtRUFBd0I7QUFDekMsQ0FBQyxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHVDO0FBQ25DO0FBQ1AscUJBQXFCLDZDQUFNO0FBQzNCLElBQUksZ0RBQVM7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLm1vZHVsZS5zY3NzP2I5ZjEiLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbXBvbmVudHMvQnV0dG9uU2VsZWN0L0J1dHRvblNlbGVjdC5tb2R1bGUuc2Nzcz83MTZhIiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb21wb25lbnRzL0NoZWNrQm94L0NoZWNrQm94Lm1vZHVsZS5zY3NzPzdmNDEiLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbXBvbmVudHMvVGV4dEZpZWxkL1RleHRGaWVsZC5tb2R1bGUuc2Nzcz82YWE3Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIvVG9kb0l0ZW0vVG9kb0l0ZW0ubW9kdWxlLnNjc3M/MWQxNCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29tcG9uZW50cy9CdXR0b25TZWxlY3QvQnV0dG9uU2VsZWN0LnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29tcG9uZW50cy9DaGVja0JveC9DaGVja0JveC50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbXBvbmVudHMvVGV4dEZpZWxkL1RleHRGaWVsZC50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbnRhaW5lcnMvVG9kb0NvbnRhaW5lci9BZGRUb2RvSXRlbS9BZGRUb2RvSXRlbS50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbnRhaW5lcnMvVG9kb0NvbnRhaW5lci9Ub2RvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29udGFpbmVycy9Ub2RvQ29udGFpbmVyL1RvZG9JdGVtL1RvZG9JdGVtLnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29udGFpbmVycy9Ub2RvQ29udGFpbmVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY3VzdG9tSG9va3MvdXNlQXV0b0ZvY3VzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkJ1dHRvblwiOlwiWVFRYU9KQktkR2RNNE9vaWVwaVJcIixcIlByaW1hcnlcIjpcIlFLbV9XZXBVRVJtMF9lQUVUT1d3XCIsXCJTZWNvbmRhcnlcIjpcIlBYNTNNVHE0UDlxejNOVDFIYm9LXCIsXCJEaXNhYmxlZFwiOlwiendEc1VLZEN3TDVXNVdWWFN1MjlcIixcIlRyYW5zcGFyZW50XCI6XCJXZkpIR2xJSHhkc194TU95WDNhUlwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkJ1dHRvblNlbGVjdFdyYXBwZXJcIjpcInFrYkswREpVdUpfTVBSOFlQYUM5XCIsXCJCdXR0b25TZWxlY3RPcHRpb25cIjpcIk5iUm5YMWJEbTkwZnJfaF9sV2NDXCIsXCJTZWxlY3RlZFwiOlwib2RYSm1uU1dMTFNmc2ZaalM3UnNcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJDaGVja0JveFwiOlwiV1pBcjlnSXpQYjF1WXlFQzNxRFFcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJUZXh0RmllbGRcIjpcIkRCMkkzWTB3T3FQcmp6QmxWU3NqXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiVG9kb0l0ZW1cIjpcIlBDdmlFWk9wbnhBV0NXMDRRRDY5XCIsXCJUb2RvSXNEb25lXCI6XCJuWk1sUzRtMThDSmxkWXQzdzBHblwifTsiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0J1dHRvbi5tb2R1bGUuc2Nzc1wiO1xuZXhwb3J0IHZhciBCdXR0b24gPSBtZW1vKGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCBwcmltYXJ5ID0gX2EucHJpbWFyeSwgc2Vjb25kYXJ5ID0gX2Euc2Vjb25kYXJ5LCBkaXNhYmxlID0gX2EuZGlzYWJsZSwgdHJhbnNwYXJlbnQgPSBfYS50cmFuc3BhcmVudCwgb25DbGljayA9IF9hLm9uQ2xpY2ssIHR5cGUgPSBfYS50eXBlLCBfYiA9IF9hLmNsYXNzTmFtZSwgY2xhc3NOYW1lID0gX2IgPT09IHZvaWQgMCA/IFwiXCIgOiBfYjtcbiAgICB2YXIgY2xhc3NOYW1lcyA9IFtjbGFzc2VzLkJ1dHRvbiwgY2xhc3NOYW1lXTtcbiAgICBpZiAocHJpbWFyeSlcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzZXMuUHJpbWFyeSk7XG4gICAgaWYgKHNlY29uZGFyeSlcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzZXMuU2Vjb25kYXJ5KTtcbiAgICBpZiAoZGlzYWJsZSlcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzZXMuRGlzYWJsZSk7XG4gICAgaWYgKHRyYW5zcGFyZW50KVxuICAgICAgICBjbGFzc05hbWVzLnB1c2goY2xhc3Nlcy5UcmFuc3BhcmVudCk7XG4gICAgcmV0dXJuIChfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgdHlwZTogdHlwZSwgb25DbGljazogb25DbGljaywgY2xhc3NOYW1lOiBjbGFzc05hbWVzLmpvaW4oXCIgXCIpIH0sIHsgY2hpbGRyZW46IGNoaWxkcmVuIH0pKSk7XG59KTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL0J1dHRvbi9CdXR0b25cIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0J1dHRvblNlbGVjdC5tb2R1bGUuc2Nzc1wiO1xuZXhwb3J0IHZhciBCdXR0b25TZWxlY3QgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdmFsdWUgPSBfYS52YWx1ZSwgb3B0aW9ucyA9IF9hLm9wdGlvbnMsIG9uSW5wdXQgPSBfYS5vbklucHV0O1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3Nlcy5CdXR0b25TZWxlY3RXcmFwcGVyIH0sIHsgY2hpbGRyZW46IG9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24pIHsgcmV0dXJuIChfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNsYXNzZXMuQnV0dG9uU2VsZWN0T3B0aW9uLCBcIiBcIikuY29uY2F0KG9wdGlvbi52YWx1ZSA9PT0gdmFsdWUgJiYgY2xhc3Nlcy5TZWxlY3RlZCksIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9uSW5wdXQob3B0aW9uLnZhbHVlKTsgfSB9LCB7IGNoaWxkcmVuOiBvcHRpb24ubGFiZWwgfSksIG9wdGlvbi52YWx1ZSkpOyB9KSB9KSkpO1xufTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQ2hlY2tCb3gubW9kdWxlLnNjc3NcIjtcbmV4cG9ydCB2YXIgQ2hlY2tCb3ggPSBtZW1vKGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB2YWx1ZSA9IF9hLnZhbHVlLCBuYW1lID0gX2EubmFtZSwgbGFiZWwgPSBfYS5sYWJlbCwgbGFiZWxOYW1lID0gX2EubGFiZWxOYW1lLCBvbklucHV0ID0gX2Eub25JbnB1dDtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc2VzLkNoZWNrQm94IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaW5wdXRcIiwgeyB0eXBlOiBcImNoZWNrYm94XCIsIG5hbWU6IG5hbWUsIGlkOiBuYW1lLCBjaGVja2VkOiB2YWx1ZSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gb25JbnB1dCAmJiBvbklucHV0KGV2ZW50LnRhcmdldC5jaGVja2VkKTsgfSB9KSwgbGFiZWwgPyAoX2pzeChcImxhYmVsXCIsIF9fYXNzaWduKHsgaHRtbEZvcjogbmFtZSwgY2xhc3NOYW1lOiBcIm1sLTJcIiB9LCB7IGNoaWxkcmVuOiBsYWJlbE5hbWUgfSkpKSA6IG51bGxdIH0pKSk7XG59KTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBmb3J3YXJkUmVmLCBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9UZXh0RmllbGQubW9kdWxlLnNjc3NcIjtcbmV4cG9ydCB2YXIgVGV4dEZpZWxkID0gbWVtbyhmb3J3YXJkUmVmKGZ1bmN0aW9uIChfYSwgcmVmKSB7XG4gICAgdmFyIG9uSW5wdXQgPSBfYS5vbklucHV0LCB2YWx1ZSA9IF9hLnZhbHVlLCBsYWJlbCA9IF9hLmxhYmVsLCBuYW1lID0gX2EubmFtZSwgbGFiZWxOYW1lID0gX2EubGFiZWxOYW1lO1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbbGFiZWwgPyBfanN4KFwibGFiZWxcIiwgX19hc3NpZ24oeyBodG1sRm9yOiBuYW1lIH0sIHsgY2hpbGRyZW46IGxhYmVsTmFtZSB9KSkgOiBudWxsLCBfanN4KFwiaW5wdXRcIiwgeyByZWY6IHJlZiwgdHlwZTogXCJ0ZXh0XCIsIGlkOiBuYW1lLCBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIG9uSW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKTsgfSwgY2xhc3NOYW1lOiBjbGFzc2VzLlRleHRGaWVsZCB9KV0gfSkpO1xufSkpO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvblwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvVGV4dEZpZWxkL1RleHRGaWVsZFwiO1xuaW1wb3J0IHsgdXNlQXV0b0ZvY3VzIH0gZnJvbSBcIi4uLy4uLy4uL2N1c3RvbUhvb2tzL3VzZUF1dG9Gb2N1c1wiO1xuZXhwb3J0IHZhciBBZGRUb2RvSXRlbSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBvbkFkZENsaWNrID0gX2Eub25BZGRDbGljaztcbiAgICB2YXIgdGV4dEZpZWxkRm9jdXMgPSB1c2VBdXRvRm9jdXMoKTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShcIlwiKSwgdGFzayA9IF9iWzBdLCBzZXRUYXNrID0gX2JbMV07XG4gICAgdmFyIG9uVGFza0ZpZWxkQ2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHNldFRhc2sodmFsdWUpO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZUFkZFN1Ym1pdGVkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgb25BZGRDbGljayh0YXNrKTtcbiAgICAgICAgc2V0VGFzayhcIlwiKTtcbiAgICAgICAgKF9hID0gdGV4dEZpZWxkRm9jdXMuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZm9ybVwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmbGV4XCIsIG9uU3VibWl0OiBoYW5kbGVBZGRTdWJtaXRlZCB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmbGV4LWdyb3ctMSBtci0yXCIgfSwgeyBjaGlsZHJlbjogX2pzeChUZXh0RmllbGQsIHsgdmFsdWU6IHRhc2ssIG9uSW5wdXQ6IG9uVGFza0ZpZWxkQ2hhbmdlLCByZWY6IHRleHRGaWVsZEZvY3VzIH0pIH0pKSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyB0eXBlOiBcInN1Ym1pdFwiLCBwcmltYXJ5OiB0cnVlIH0sIHsgY2hpbGRyZW46IFwiQWRkXCIgfSkpIH0pXSB9KSkpO1xufTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSBcIi4vVG9kb0l0ZW0vVG9kb0l0ZW1cIjtcbmltcG9ydCB7IEFkZFRvZG9JdGVtIH0gZnJvbSBcIi4vQWRkVG9kb0l0ZW0vQWRkVG9kb0l0ZW1cIjtcbmltcG9ydCB7IEJ1dHRvblNlbGVjdCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J1dHRvblNlbGVjdC9CdXR0b25TZWxlY3RcIjtcbmltcG9ydCB7IHVzZUFwcFN0YXRlIH0gZnJvbSBcIi4uLy4uL2hvYy91c2VBcHBTdGF0ZVwiO1xuZXhwb3J0IHZhciBUb2RvQ29udGFpbmVyID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHRvZG9TZXJ2aWNlID0gX2EudG9kb1NlcnZpY2U7XG4gICAgdmFyIF9iID0gdXNlQXBwU3RhdGUoKSwgYXBwU3RhdGUgPSBfYi5hcHBTdGF0ZSwgc2V0QXBwU3RhdGUgPSBfYi5zZXRBcHBTdGF0ZTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShbXSksIHRvZG9zID0gX2NbMF0sIHNldFRvZG9zID0gX2NbMV07XG4gICAgdmFyIF9kID0gdXNlU3RhdGUoXCJhbGxcIiksIHRvZG9GaWx0ZXIgPSBfZFswXSwgc2V0VG9kb0ZpbHRlciA9IF9kWzFdO1xuICAgIHZhciBmZXRjaFRvZG9zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdG9kb1NlcnZpY2UuZ2V0QWxsVG9kb3MoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBzZXRUb2RvcyhkYXRhKTsgfSk7XG4gICAgfTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYXBwU3RhdGUuZWRpdFRvZG9JZCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGZldGNoVG9kb3MoKTtcbiAgICAgICAgfVxuICAgICAgICBmZXRjaFRvZG9zKCk7XG4gICAgfSwgW2FwcFN0YXRlLmVkaXRUb2RvSWRdKTtcbiAgICB2YXIgYWRkVG9Ub2RvcyA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgIHRvZG9TZXJ2aWNlLmFkZFRvZG8odGFzaykudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBmZXRjaFRvZG9zKCk7IH0pO1xuICAgIH07XG4gICAgdmFyIGVkaXRUb2RvID0gZnVuY3Rpb24gKHRvZG9JZCkge1xuICAgICAgICBzZXRBcHBTdGF0ZSh7IGVkaXRUb2RvSWQ6IHRvZG9JZCwgaXNEcmF3ZXJPcGVuOiB0cnVlIH0pO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZURvbmVDaGVja2VkID0gZnVuY3Rpb24gKHRvZG9JZCwgaXNEb25lKSB7XG4gICAgICAgIHRvZG9TZXJ2aWNlLnVwZGF0ZVRvZG8odG9kb0lkLCB7IGlzRG9uZTogaXNEb25lIH0pLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gZmV0Y2hUb2RvcygpOyB9KTtcbiAgICB9O1xuICAgIHZhciBkZWxldGVUb2RvID0gZnVuY3Rpb24gKHRvZG9JZCkge1xuICAgICAgICB0b2RvU2VydmljZS5kZWxldGVUb2RvKHRvZG9JZCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBmZXRjaFRvZG9zKCk7IH0pO1xuICAgIH07XG4gICAgdmFyIGJ1dHRvblNlbGVjdE9wdGlvbnMgPSBbXG4gICAgICAgIHsgbGFiZWw6IFwiQWxsXCIsIHZhbHVlOiBcImFsbFwiIH0sXG4gICAgICAgIHsgbGFiZWw6IFwiRG9uZVwiLCB2YWx1ZTogXCJ0cnVlXCIgfSxcbiAgICAgICAgeyBsYWJlbDogXCJOb3QgRG9uZVwiLCB2YWx1ZTogXCJmYWxzZVwiIH0sXG4gICAgXTtcbiAgICB2YXIgaGFuZGxlVG9kb0ZpbHRlckNoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBzZXRUb2RvRmlsdGVyKHZhbHVlKTtcbiAgICAgICAgdG9kb1NlcnZpY2VcbiAgICAgICAgICAgIC5nZXRBbGxUb2Rvcyh7IHF1ZXJ5OiB7IGlzRG9uZTogdmFsdWUgfSB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIHNldFRvZG9zKGRhdGEpOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChBZGRUb2RvSXRlbSwgeyBvbkFkZENsaWNrOiBhZGRUb1RvZG9zIH0pLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm10LTNcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvblNlbGVjdCwgeyBvcHRpb25zOiBidXR0b25TZWxlY3RPcHRpb25zLCBvbklucHV0OiBoYW5kbGVUb2RvRmlsdGVyQ2hhbmdlLCB2YWx1ZTogdG9kb0ZpbHRlciB9KSB9KSksIHRvZG9zLm1hcChmdW5jdGlvbiAodG9kbywgaW5kZXgpIHsgcmV0dXJuIChfanN4KFRvZG9JdGVtLCB7IHRvZG86IHRvZG8sIG9uRWRpdFRvZG86IGVkaXRUb2RvLCBvbkRvbmVDaGVja2VkOiBoYW5kbGVEb25lQ2hlY2tlZCwgb25EZWxldGVUb2RvOiBkZWxldGVUb2RvIH0sIGluZGV4KSk7IH0pXSB9KSk7XG59O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uXCI7XG5pbXBvcnQgeyBDaGVja0JveCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0NoZWNrQm94L0NoZWNrQm94XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Ub2RvSXRlbS5tb2R1bGUuc2Nzc1wiO1xudmFyIFRvZG9JdGVtID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHRvZG8gPSBfYS50b2RvLCBvbkRlbGV0ZVRvZG8gPSBfYS5vbkRlbGV0ZVRvZG8sIG9uRWRpdFRvZG8gPSBfYS5vbkVkaXRUb2RvLCBvbkRvbmVDaGVja2VkID0gX2Eub25Eb25lQ2hlY2tlZDtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc2VzLlRvZG9JdGVtICsgXCIgZmxleFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IF9qc3goQ2hlY2tCb3gsIHsgdmFsdWU6IHRvZG8uaXNEb25lLCBvbklucHV0OiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIG9uRG9uZUNoZWNrZWQodG9kby5pZCwgdmFsdWUpOyB9IH0pIH0pLCBfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJtci1hdXRvIG1sLTIgXCIuY29uY2F0KHRvZG8uaXNEb25lICYmIGNsYXNzZXMuVG9kb0lzRG9uZSkgfSwgeyBjaGlsZHJlbjogdG9kby50YXNrIH0pKSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBvbkVkaXRUb2RvKHRvZG8uaWQpOyB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXBlbmNpbFwiIH0pIH0pKSB9KSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJtbC0yXCIgfSwgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGVUb2RvKHRvZG8uaWQpO1xuICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXRyYXNoXCIgfSkgfSkpIH0pKV0gfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBUb2RvSXRlbTtcbiIsImltcG9ydCB7IGRlcGVuZGVuY2llcyB9IGZyb20gXCIuLi8uLi9kZXBlbmRlbmNpZXNcIjtcbmltcG9ydCB7IHdpdGhEZXBlbmRlbmN5IH0gZnJvbSBcIi4uLy4uL2hvYy93aXRoRGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQgeyBUb2RvQ29udGFpbmVyIH0gZnJvbSBcIi4vVG9kb0NvbnRhaW5lclwiO1xuZXhwb3J0IGRlZmF1bHQgd2l0aERlcGVuZGVuY3koVG9kb0NvbnRhaW5lciwge1xuICAgIHRvZG9TZXJ2aWNlOiBkZXBlbmRlbmNpZXMuVG9kb1NlcnZpY2UsXG59KTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgdmFyIHVzZUF1dG9Gb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxlbWVudFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IGVsZW1lbnRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gICAgfSwgW2VsZW1lbnRSZWZdKTtcbiAgICByZXR1cm4gZWxlbWVudFJlZjtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=