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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbnRhaW5lcnNfVG9kb0NvbnRhaW5lcl9pbmRleF90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0EsK0RBQWUsQ0FBQywyS0FBMks7Ozs7Ozs7Ozs7O0FDRDNMO0FBQ0EsK0RBQWUsQ0FBQywySEFBMkg7Ozs7Ozs7Ozs7O0FDRDNJO0FBQ0EsK0RBQWUsQ0FBQyxrQ0FBa0M7Ozs7Ozs7Ozs7O0FDRGxEO0FBQ0EsK0RBQWUsQ0FBQyxtQ0FBbUM7Ozs7Ozs7Ozs7O0FDRG5EO0FBQ0EsK0RBQWUsQ0FBQyxzRUFBc0U7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0R0RixnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dEO0FBQ25CO0FBQ2M7QUFDcEMsYUFBYSwyQ0FBSTtBQUN4QjtBQUNBLHNCQUFzQixrRUFBYztBQUNwQztBQUNBLHdCQUF3QixtRUFBZTtBQUN2QztBQUNBLHdCQUF3QixxRUFBaUI7QUFDekM7QUFDQSx3QkFBd0IsbUVBQWU7QUFDdkM7QUFDQSx3QkFBd0IsdUVBQW1CO0FBQzNDLFlBQVksc0RBQUksc0JBQXNCLCtEQUErRCxJQUFJLG9CQUFvQjtBQUM3SCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkQsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnRDtBQUNOO0FBQ087QUFDMUM7QUFDUDtBQUNBLFlBQVksc0RBQUksbUJBQW1CLFdBQVcscUZBQTJCLEVBQUUsSUFBSSwwQ0FBMEMsUUFBUSxzREFBSSxDQUFDLGtEQUFNLGFBQWEscUJBQXFCLG9GQUEwQix3Q0FBd0MsMEVBQWdCLDBCQUEwQixpQ0FBaUMsSUFBSSx3QkFBd0Isb0JBQW9CLEdBQUc7QUFDOVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEs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O0FBQ0E7QUFDQTtBQUNBO0FBQytEO0FBQ0o7QUFDTTtBQUNwQjtBQUM3QztBQUNBO0FBQ0EsWUFBWSx1REFBSyxtQkFBbUIsV0FBVyxzRUFBZ0IsWUFBWSxJQUFJLFdBQVcsc0RBQUksVUFBVSxVQUFVLHNEQUFJLENBQUMsbUVBQVEsSUFBSSxnREFBZ0QseUNBQXlDLEdBQUcsR0FBRyxzREFBSSxpQkFBaUIsaURBQWlELHdFQUFrQixHQUFHLElBQUkscUJBQXFCLElBQUksc0RBQUksVUFBVSxVQUFVLHNEQUFJLENBQUMsNkRBQU0sYUFBYSx1QkFBdUIsK0JBQStCLElBQUksVUFBVSxzREFBSSxRQUFRLDJCQUEyQixHQUFHLElBQUksR0FBRyxzREFBSSxtQkFBbUIsbUJBQW1CLElBQUksVUFBVSxzREFBSSxDQUFDLDZEQUFNLGFBQWE7QUFDL2tCO0FBQ0EsdUJBQXVCLElBQUksVUFBVSxzREFBSSxRQUFRLDBCQUEwQixHQUFHLElBQUksS0FBSztBQUN2RjtBQUNBLCtEQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckIwQjtBQUNVO0FBQ1o7QUFDaEQsK0RBQWUscUVBQWMsQ0FBQyx5REFBYTtBQUMzQyxpQkFBaUIsbUVBQXdCO0FBQ3pDLENBQUMsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0x1QztBQUNuQztBQUNQLHFCQUFxQiw2Q0FBTTtBQUMzQixJQUFJLGdEQUFTO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5tb2R1bGUuc2Nzcz9iOWYxIiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb21wb25lbnRzL0J1dHRvblNlbGVjdC9CdXR0b25TZWxlY3QubW9kdWxlLnNjc3M/NzE2YSIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29tcG9uZW50cy9DaGVja0JveC9DaGVja0JveC5tb2R1bGUuc2Nzcz83ZjQxIiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb21wb25lbnRzL1RleHRGaWVsZC9UZXh0RmllbGQubW9kdWxlLnNjc3M/NmFhNyIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29udGFpbmVycy9Ub2RvQ29udGFpbmVyL1RvZG9JdGVtL1RvZG9JdGVtLm1vZHVsZS5zY3NzPzFkMTQiLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbXBvbmVudHMvQnV0dG9uU2VsZWN0L0J1dHRvblNlbGVjdC50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbXBvbmVudHMvQ2hlY2tCb3gvQ2hlY2tCb3gudHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb21wb25lbnRzL1RleHRGaWVsZC9UZXh0RmllbGQudHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIvQWRkVG9kb0l0ZW0vQWRkVG9kb0l0ZW0udHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIvVG9kb0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbnRhaW5lcnMvVG9kb0NvbnRhaW5lci9Ub2RvSXRlbS9Ub2RvSXRlbS50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbnRhaW5lcnMvVG9kb0NvbnRhaW5lci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2N1c3RvbUhvb2tzL3VzZUF1dG9Gb2N1cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJCdXR0b25cIjpcIllRUWFPSkJLZEdkTTRPb2llcGlSXCIsXCJQcmltYXJ5XCI6XCJRS21fV2VwVUVSbTBfZUFFVE9Xd1wiLFwiU2Vjb25kYXJ5XCI6XCJQWDUzTVRxNFA5cXozTlQxSGJvS1wiLFwiRGlzYWJsZWRcIjpcInp3RHNVS2RDd0w1VzVXVlhTdTI5XCIsXCJUcmFuc3BhcmVudFwiOlwiV2ZKSEdsSUh4ZHNfeE1PeVgzYVJcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJCdXR0b25TZWxlY3RXcmFwcGVyXCI6XCJxa2JLMERKVXVKX01QUjhZUGFDOVwiLFwiQnV0dG9uU2VsZWN0T3B0aW9uXCI6XCJOYlJuWDFiRG05MGZyX2hfbFdjQ1wiLFwiU2VsZWN0ZWRcIjpcIm9kWEptblNXTExTZnNmWmpTN1JzXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiQ2hlY2tCb3hcIjpcIldaQXI5Z0l6UGIxdVl5RUMzcURRXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiVGV4dEZpZWxkXCI6XCJEQjJJM1kwd09xUHJqekJsVlNzalwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIlRvZG9JdGVtXCI6XCJQQ3ZpRVpPcG54QVdDVzA0UUQ2OVwiLFwiVG9kb0lzRG9uZVwiOlwiblpNbFM0bTE4Q0psZFl0M3cwR25cIn07IiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9CdXR0b24ubW9kdWxlLnNjc3NcIjtcbmV4cG9ydCB2YXIgQnV0dG9uID0gbWVtbyhmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgcHJpbWFyeSA9IF9hLnByaW1hcnksIHNlY29uZGFyeSA9IF9hLnNlY29uZGFyeSwgZGlzYWJsZSA9IF9hLmRpc2FibGUsIHRyYW5zcGFyZW50ID0gX2EudHJhbnNwYXJlbnQsIG9uQ2xpY2sgPSBfYS5vbkNsaWNrLCB0eXBlID0gX2EudHlwZSwgX2IgPSBfYS5jbGFzc05hbWUsIGNsYXNzTmFtZSA9IF9iID09PSB2b2lkIDAgPyBcIlwiIDogX2I7XG4gICAgdmFyIGNsYXNzTmFtZXMgPSBbY2xhc3Nlcy5CdXR0b24sIGNsYXNzTmFtZV07XG4gICAgaWYgKHByaW1hcnkpXG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChjbGFzc2VzLlByaW1hcnkpO1xuICAgIGlmIChzZWNvbmRhcnkpXG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChjbGFzc2VzLlNlY29uZGFyeSk7XG4gICAgaWYgKGRpc2FibGUpXG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChjbGFzc2VzLkRpc2FibGUpO1xuICAgIGlmICh0cmFuc3BhcmVudClcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzZXMuVHJhbnNwYXJlbnQpO1xuICAgIHJldHVybiAoX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IHR5cGU6IHR5cGUsIG9uQ2xpY2s6IG9uQ2xpY2ssIGNsYXNzTmFtZTogY2xhc3NOYW1lcy5qb2luKFwiIFwiKSB9LCB7IGNoaWxkcmVuOiBjaGlsZHJlbiB9KSkpO1xufSk7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9CdXR0b24vQnV0dG9uXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9CdXR0b25TZWxlY3QubW9kdWxlLnNjc3NcIjtcbmV4cG9ydCB2YXIgQnV0dG9uU2VsZWN0ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHZhbHVlID0gX2EudmFsdWUsIG9wdGlvbnMgPSBfYS5vcHRpb25zLCBvbklucHV0ID0gX2Eub25JbnB1dDtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzZXMuQnV0dG9uU2VsZWN0V3JhcHBlciB9LCB7IGNoaWxkcmVuOiBvcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uKSB7IHJldHVybiAoX2pzeChCdXR0b24sIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjbGFzc2VzLkJ1dHRvblNlbGVjdE9wdGlvbiwgXCIgXCIpLmNvbmNhdChvcHRpb24udmFsdWUgPT09IHZhbHVlICYmIGNsYXNzZXMuU2VsZWN0ZWQpLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBvbklucHV0KG9wdGlvbi52YWx1ZSk7IH0gfSwgeyBjaGlsZHJlbjogb3B0aW9uLmxhYmVsIH0pLCBvcHRpb24udmFsdWUpKTsgfSkgfSkpKTtcbn07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0NoZWNrQm94Lm1vZHVsZS5zY3NzXCI7XG5leHBvcnQgdmFyIENoZWNrQm94ID0gbWVtbyhmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdmFsdWUgPSBfYS52YWx1ZSwgbmFtZSA9IF9hLm5hbWUsIGxhYmVsID0gX2EubGFiZWwsIGxhYmVsTmFtZSA9IF9hLmxhYmVsTmFtZSwgb25JbnB1dCA9IF9hLm9uSW5wdXQ7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3Nlcy5DaGVja0JveCB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlucHV0XCIsIHsgdHlwZTogXCJjaGVja2JveFwiLCBuYW1lOiBuYW1lLCBpZDogbmFtZSwgY2hlY2tlZDogdmFsdWUsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIG9uSW5wdXQgJiYgb25JbnB1dChldmVudC50YXJnZXQuY2hlY2tlZCk7IH0gfSksIGxhYmVsID8gKF9qc3goXCJsYWJlbFwiLCBfX2Fzc2lnbih7IGh0bWxGb3I6IG5hbWUsIGNsYXNzTmFtZTogXCJtbC0yXCIgfSwgeyBjaGlsZHJlbjogbGFiZWxOYW1lIH0pKSkgOiBudWxsXSB9KSkpO1xufSk7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiwgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vVGV4dEZpZWxkLm1vZHVsZS5zY3NzXCI7XG5leHBvcnQgdmFyIFRleHRGaWVsZCA9IG1lbW8oZm9yd2FyZFJlZihmdW5jdGlvbiAoX2EsIHJlZikge1xuICAgIHZhciBvbklucHV0ID0gX2Eub25JbnB1dCwgdmFsdWUgPSBfYS52YWx1ZSwgbGFiZWwgPSBfYS5sYWJlbCwgbmFtZSA9IF9hLm5hbWUsIGxhYmVsTmFtZSA9IF9hLmxhYmVsTmFtZTtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW2xhYmVsID8gX2pzeChcImxhYmVsXCIsIF9fYXNzaWduKHsgaHRtbEZvcjogbmFtZSB9LCB7IGNoaWxkcmVuOiBsYWJlbE5hbWUgfSkpIDogbnVsbCwgX2pzeChcImlucHV0XCIsIHsgcmVmOiByZWYsIHR5cGU6IFwidGV4dFwiLCBpZDogbmFtZSwgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlLCBvbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBvbklucHV0KGV2ZW50LnRhcmdldC52YWx1ZSk7IH0sIGNsYXNzTmFtZTogY2xhc3Nlcy5UZXh0RmllbGQgfSldIH0pKTtcbn0pKTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25cIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1RleHRGaWVsZC9UZXh0RmllbGRcIjtcbmltcG9ydCB7IHVzZUF1dG9Gb2N1cyB9IGZyb20gXCIuLi8uLi8uLi9jdXN0b21Ib29rcy91c2VBdXRvRm9jdXNcIjtcbmV4cG9ydCB2YXIgQWRkVG9kb0l0ZW0gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgb25BZGRDbGljayA9IF9hLm9uQWRkQ2xpY2s7XG4gICAgdmFyIHRleHRGaWVsZEZvY3VzID0gdXNlQXV0b0ZvY3VzKCk7XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoXCJcIiksIHRhc2sgPSBfYlswXSwgc2V0VGFzayA9IF9iWzFdO1xuICAgIHZhciBvblRhc2tGaWVsZENoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBzZXRUYXNrKHZhbHVlKTtcbiAgICB9O1xuICAgIHZhciBoYW5kbGVBZGRTdWJtaXRlZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG9uQWRkQ2xpY2sodGFzayk7XG4gICAgICAgIHNldFRhc2soXCJcIik7XG4gICAgICAgIChfYSA9IHRleHRGaWVsZEZvY3VzLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb2N1cygpO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhcImZvcm1cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZmxleFwiLCBvblN1Ym1pdDogaGFuZGxlQWRkU3VibWl0ZWQgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZmxleC1ncm93LTEgbXItMlwiIH0sIHsgY2hpbGRyZW46IF9qc3goVGV4dEZpZWxkLCB7IHZhbHVlOiB0YXNrLCBvbklucHV0OiBvblRhc2tGaWVsZENoYW5nZSwgcmVmOiB0ZXh0RmllbGRGb2N1cyB9KSB9KSksIF9qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIF9fYXNzaWduKHsgdHlwZTogXCJzdWJtaXRcIiwgcHJpbWFyeTogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBcIkFkZFwiIH0pKSB9KV0gfSkpKTtcbn07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRvZG9JdGVtIGZyb20gXCIuL1RvZG9JdGVtL1RvZG9JdGVtXCI7XG5pbXBvcnQgeyBBZGRUb2RvSXRlbSB9IGZyb20gXCIuL0FkZFRvZG9JdGVtL0FkZFRvZG9JdGVtXCI7XG5pbXBvcnQgeyBCdXR0b25TZWxlY3QgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25TZWxlY3QvQnV0dG9uU2VsZWN0XCI7XG5pbXBvcnQgeyB1c2VBcHBTdGF0ZSB9IGZyb20gXCIuLi8uLi9ob2MvdXNlQXBwU3RhdGVcIjtcbmV4cG9ydCB2YXIgVG9kb0NvbnRhaW5lciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB0b2RvU2VydmljZSA9IF9hLnRvZG9TZXJ2aWNlO1xuICAgIHZhciBfYiA9IHVzZUFwcFN0YXRlKCksIGFwcFN0YXRlID0gX2IuYXBwU3RhdGUsIHNldEFwcFN0YXRlID0gX2Iuc2V0QXBwU3RhdGU7XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoW10pLCB0b2RvcyA9IF9jWzBdLCBzZXRUb2RvcyA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKFwiYWxsXCIpLCB0b2RvRmlsdGVyID0gX2RbMF0sIHNldFRvZG9GaWx0ZXIgPSBfZFsxXTtcbiAgICB2YXIgZmV0Y2hUb2RvcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRvZG9TZXJ2aWNlLmdldEFsbFRvZG9zKCkudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gc2V0VG9kb3MoZGF0YSk7IH0pO1xuICAgIH07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGFwcFN0YXRlLmVkaXRUb2RvSWQgPT09IC0xKSB7XG4gICAgICAgICAgICBmZXRjaFRvZG9zKCk7XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hUb2RvcygpO1xuICAgIH0sIFthcHBTdGF0ZS5lZGl0VG9kb0lkXSk7XG4gICAgdmFyIGFkZFRvVG9kb3MgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICB0b2RvU2VydmljZS5hZGRUb2RvKHRhc2spLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gZmV0Y2hUb2RvcygpOyB9KTtcbiAgICB9O1xuICAgIHZhciBlZGl0VG9kbyA9IGZ1bmN0aW9uICh0b2RvSWQpIHtcbiAgICAgICAgc2V0QXBwU3RhdGUoeyBlZGl0VG9kb0lkOiB0b2RvSWQsIGlzRHJhd2VyT3BlbjogdHJ1ZSB9KTtcbiAgICB9O1xuICAgIHZhciBoYW5kbGVEb25lQ2hlY2tlZCA9IGZ1bmN0aW9uICh0b2RvSWQsIGlzRG9uZSkge1xuICAgICAgICB0b2RvU2VydmljZS51cGRhdGVUb2RvKHRvZG9JZCwgeyBpc0RvbmU6IGlzRG9uZSB9KS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZldGNoVG9kb3MoKTsgfSk7XG4gICAgfTtcbiAgICB2YXIgZGVsZXRlVG9kbyA9IGZ1bmN0aW9uICh0b2RvSWQpIHtcbiAgICAgICAgdG9kb1NlcnZpY2UuZGVsZXRlVG9kbyh0b2RvSWQpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gZmV0Y2hUb2RvcygpOyB9KTtcbiAgICB9O1xuICAgIHZhciBidXR0b25TZWxlY3RPcHRpb25zID0gW1xuICAgICAgICB7IGxhYmVsOiBcIkFsbFwiLCB2YWx1ZTogXCJhbGxcIiB9LFxuICAgICAgICB7IGxhYmVsOiBcIkRvbmVcIiwgdmFsdWU6IFwidHJ1ZVwiIH0sXG4gICAgICAgIHsgbGFiZWw6IFwiTm90IERvbmVcIiwgdmFsdWU6IFwiZmFsc2VcIiB9LFxuICAgIF07XG4gICAgdmFyIGhhbmRsZVRvZG9GaWx0ZXJDaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgc2V0VG9kb0ZpbHRlcih2YWx1ZSk7XG4gICAgICAgIHRvZG9TZXJ2aWNlXG4gICAgICAgICAgICAuZ2V0QWxsVG9kb3MoeyBxdWVyeTogeyBpc0RvbmU6IHZhbHVlIH0gfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBzZXRUb2RvcyhkYXRhKTsgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goQWRkVG9kb0l0ZW0sIHsgb25BZGRDbGljazogYWRkVG9Ub2RvcyB9KSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJtdC0zXCIgfSwgeyBjaGlsZHJlbjogX2pzeChCdXR0b25TZWxlY3QsIHsgb3B0aW9uczogYnV0dG9uU2VsZWN0T3B0aW9ucywgb25JbnB1dDogaGFuZGxlVG9kb0ZpbHRlckNoYW5nZSwgdmFsdWU6IHRvZG9GaWx0ZXIgfSkgfSkpLCB0b2Rvcy5tYXAoZnVuY3Rpb24gKHRvZG8sIGluZGV4KSB7IHJldHVybiAoX2pzeChUb2RvSXRlbSwgeyB0b2RvOiB0b2RvLCBvbkVkaXRUb2RvOiBlZGl0VG9kbywgb25Eb25lQ2hlY2tlZDogaGFuZGxlRG9uZUNoZWNrZWQsIG9uRGVsZXRlVG9kbzogZGVsZXRlVG9kbyB9LCBpbmRleCkpOyB9KV0gfSkpO1xufTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvblwiO1xuaW1wb3J0IHsgQ2hlY2tCb3ggfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9DaGVja0JveC9DaGVja0JveFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vVG9kb0l0ZW0ubW9kdWxlLnNjc3NcIjtcbnZhciBUb2RvSXRlbSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB0b2RvID0gX2EudG9kbywgb25EZWxldGVUb2RvID0gX2Eub25EZWxldGVUb2RvLCBvbkVkaXRUb2RvID0gX2Eub25FZGl0VG9kbywgb25Eb25lQ2hlY2tlZCA9IF9hLm9uRG9uZUNoZWNrZWQ7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3Nlcy5Ub2RvSXRlbSArIFwiIGZsZXhcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KENoZWNrQm94LCB7IHZhbHVlOiB0b2RvLmlzRG9uZSwgb25JbnB1dDogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBvbkRvbmVDaGVja2VkKHRvZG8uaWQsIHZhbHVlKTsgfSB9KSB9KSwgX2pzeChcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibXItYXV0byBtbC0yIFwiLmNvbmNhdCh0b2RvLmlzRG9uZSAmJiBjbGFzc2VzLlRvZG9Jc0RvbmUpIH0sIHsgY2hpbGRyZW46IHRvZG8udGFzayB9KSksIF9qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gb25FZGl0VG9kbyh0b2RvLmlkKTsgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1wZW5jaWxcIiB9KSB9KSkgfSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibWwtMlwiIH0sIHsgY2hpbGRyZW46IF9qc3goQnV0dG9uLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlVG9kbyh0b2RvLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS10cmFzaFwiIH0pIH0pKSB9KSldIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVG9kb0l0ZW07XG4iLCJpbXBvcnQgeyBkZXBlbmRlbmNpZXMgfSBmcm9tIFwiLi4vLi4vZGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQgeyB3aXRoRGVwZW5kZW5jeSB9IGZyb20gXCIuLi8uLi9ob2Mvd2l0aERlcGVuZGVuY2llc1wiO1xuaW1wb3J0IHsgVG9kb0NvbnRhaW5lciB9IGZyb20gXCIuL1RvZG9Db250YWluZXJcIjtcbmV4cG9ydCBkZWZhdWx0IHdpdGhEZXBlbmRlbmN5KFRvZG9Db250YWluZXIsIHtcbiAgICB0b2RvU2VydmljZTogZGVwZW5kZW5jaWVzLlRvZG9TZXJ2aWNlLFxufSk7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHZhciB1c2VBdXRvRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsZW1lbnRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSBlbGVtZW50UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb2N1cygpO1xuICAgIH0sIFtlbGVtZW50UmVmXSk7XG4gICAgcmV0dXJuIGVsZW1lbnRSZWY7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9