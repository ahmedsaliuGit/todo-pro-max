"use strict";
exports.id = "src_containers_TodoContainer_EditTodoItem_index_tsx";
exports.ids = ["src_containers_TodoContainer_EditTodoItem_index_tsx"];
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

/***/ "./src/components/CanvasField/CanvasField.module.scss":
/*!************************************************************!*\
  !*** ./src/components/CanvasField/CanvasField.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"CanvasField":"RkBZq6VfgC29SD2xD8uy"});

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

/***/ "./src/components/TextArea/TextArea.module.scss":
/*!******************************************************!*\
  !*** ./src/components/TextArea/TextArea.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"TextArea":"aq3iqEEEGkcP_8YWL8sg"});

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

/***/ "./src/hoc/withSideDrawer/withSideDrawer.module.scss":
/*!***********************************************************!*\
  !*** ./src/hoc/withSideDrawer/withSideDrawer.module.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"WithSideDrawer":"k_vfs5gBf7YoOP66lWXh"});

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

/***/ "./src/components/CanvasField/CanvasField.tsx":
/*!****************************************************!*\
  !*** ./src/components/CanvasField/CanvasField.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasField": () => (/* binding */ CanvasField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CanvasField_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CanvasField.module.scss */ "./src/components/CanvasField/CanvasField.module.scss");
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



var CanvasField = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_a) {
    var _b;
    var label = _a.label, value = _a.value, onInput = _a.onInput;
    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isDrawing = _c[0], setIsDrawing = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        x: 0,
        y: 0,
    }), prevCordinates = _d[0], setPrevCordinates = _d[1];
    var canvasContext = (_b = canvasRef.current) === null || _b === void 0 ? void 0 : _b.getContext("2d");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (value) {
            var image_1 = new Image();
            image_1.onload = function () {
                canvasContext === null || canvasContext === void 0 ? void 0 : canvasContext.drawImage(image_1, 0, 0);
            };
            image_1.src = value;
        }
    }, [value, canvasContext]);
    var startDrawing = function (event) {
        if (!(isDrawing && canvasContext && canvasRef.current)) {
            return;
        }
        var canvasEl = canvasRef.current;
        var _a = canvasEl.getBoundingClientRect(), offsetX = _a.x, offsetY = _a.y;
        // get canvas scale
        var scaleX = canvasEl.width / canvasEl.clientWidth;
        var scaleY = canvasEl.height / canvasEl.clientHeight;
        var updatedCordinates = {
            x: (event.clientX - offsetX) * scaleX,
            y: (event.clientY - offsetY) * scaleY,
        };
        if (prevCordinates.x === 0 && prevCordinates.y === 0) {
            setPrevCordinates(updatedCordinates);
            return;
        }
        canvasContext.fillStyle = "blue";
        canvasContext.lineWidth = 8;
        canvasContext.stroke();
        canvasContext.moveTo(prevCordinates.x, prevCordinates.y);
        canvasContext.lineTo(updatedCordinates.x, updatedCordinates.y);
        setPrevCordinates(updatedCordinates);
    };
    var enableDrawing = function () { return setIsDrawing(true); };
    var endDrawing = function () {
        var _a;
        setPrevCordinates({ x: 0, y: 0 });
        setIsDrawing(false);
        onInput(((_a = canvasRef.current) === null || _a === void 0 ? void 0 : _a.toDataURL()) || "");
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [label ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", __assign({ htmlFor: label }, { children: label })) : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("canvas", { width: "1028", height: "768", ref: canvasRef, onMouseDown: enableDrawing, onMouseMove: startDrawing, onMouseUp: endDrawing, onMouseLeave: endDrawing, className: _CanvasField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].CanvasField })] }));
});


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

/***/ "./src/components/TextArea/TextArea.tsx":
/*!**********************************************!*\
  !*** ./src/components/TextArea/TextArea.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextArea": () => (/* binding */ TextArea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TextArea_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextArea.module.scss */ "./src/components/TextArea/TextArea.module.scss");
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



var TextArea = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_a) {
    var value = _a.value, label = _a.label, name = _a.name, placeholder = _a.placeholder, onInput = _a.onInput;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [label ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", __assign({ htmlFor: name }, { children: label })) : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea", { className: _TextArea_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].TextArea, name: name, value: value, placeholder: placeholder, onChange: function (event) {
                    var value = event.target.value;
                    onInput(value);
                } })] }));
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

/***/ "./src/containers/TodoContainer/EditTodoItem/EditTodoItem.tsx":
/*!********************************************************************!*\
  !*** ./src/containers/TodoContainer/EditTodoItem/EditTodoItem.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTodoItem": () => (/* binding */ EditTodoItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _components_TextField_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/TextField/TextField */ "./src/components/TextField/TextField.tsx");
/* harmony import */ var _components_TextArea_TextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/TextArea/TextArea */ "./src/components/TextArea/TextArea.tsx");
/* harmony import */ var _components_CheckBox_CheckBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/CheckBox/CheckBox */ "./src/components/CheckBox/CheckBox.tsx");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Button/Button */ "./src/components/Button/Button.tsx");
/* harmony import */ var _components_CanvasField_CanvasField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/CanvasField/CanvasField */ "./src/components/CanvasField/CanvasField.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hoc_useAppState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hoc/useAppState */ "./src/hoc/useAppState.tsx");
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








var EditTodoItem = function (_a) {
    var todoService = _a.todoService;
    var _b = (0,_hoc_useAppState__WEBPACK_IMPORTED_MODULE_7__.useAppState)(), appState = _b.appState, setAppState = _b.setAppState;
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
        task: "",
        description: "",
        handNotes: "",
        isDone: false,
    }), todo = _c[0], setTodo = _c[1];
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
        todoService.getTodo(appState.editTodoId).then(function (todo) {
            setTodo(todo);
        });
    }, [appState.editTodoId, todoService]);
    var saveButtonClicked = function () {
        todoService.updateTodo(appState.editTodoId, todo).then(function () {
            setAppState(__assign(__assign({}, appState), { isDrawerOpen: false }));
        });
    };
    var cancelButtonClicked = function () {
        return setAppState(__assign(__assign({}, appState), { isDrawerOpen: false }));
    };
    var onFormChanged = function (updatedState) {
        setTodo(function (currentState) { return (__assign(__assign({}, currentState), updatedState)); });
    };
    var onTaskChanged = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function (value) { return onFormChanged({ task: value }); }, []);
    var onDoneChanged = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function (value) { return onFormChanged({ isDone: value }); }, []);
    var onDescriptionChanged = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function (value) { return onFormChanged({ description: value }); }, []);
    var onHandNoteChanged = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function (value) { return onFormChanged({ handNotes: value }); }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { children: "Edit Todo" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_TextField_TextField__WEBPACK_IMPORTED_MODULE_1__.TextField, { onInput: onTaskChanged, value: todo.task, label: true, labelName: "Task", name: "task" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CheckBox_CheckBox__WEBPACK_IMPORTED_MODULE_3__.CheckBox, { value: todo.isDone, label: true, labelName: "Is Done", onInput: onDoneChanged }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_TextArea_TextArea__WEBPACK_IMPORTED_MODULE_2__.TextArea, { value: todo.description, name: "description", label: "Description", onInput: onDescriptionChanged }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CanvasField_CanvasField__WEBPACK_IMPORTED_MODULE_5__.CanvasField, { label: "Hand Notes", value: todo.handNotes, onInput: onHandNoteChanged }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "flex mt-2" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, __assign({ className: "flex-grow-1 mr-2", primary: true, onClick: saveButtonClicked }, { children: "Save" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, __assign({ className: "flex-grow-1", secondary: true, onClick: cancelButtonClicked }, { children: "Cancel" }))] }))] }));
};


/***/ }),

/***/ "./src/containers/TodoContainer/EditTodoItem/index.tsx":
/*!*************************************************************!*\
  !*** ./src/containers/TodoContainer/EditTodoItem/index.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dependencies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../dependencies */ "./src/dependencies.ts");
/* harmony import */ var _hoc_withDependencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hoc/withDependencies */ "./src/hoc/withDependencies.tsx");
/* harmony import */ var _hoc_withSideDrawer_withSideDrawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/withSideDrawer/withSideDrawer */ "./src/hoc/withSideDrawer/withSideDrawer.tsx");
/* harmony import */ var _EditTodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditTodoItem */ "./src/containers/TodoContainer/EditTodoItem/EditTodoItem.tsx");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_hoc_withSideDrawer_withSideDrawer__WEBPACK_IMPORTED_MODULE_2__.withSideDrawer)((0,_hoc_withDependencies__WEBPACK_IMPORTED_MODULE_1__.withDependency)(_EditTodoItem__WEBPACK_IMPORTED_MODULE_3__.EditTodoItem, {
    todoService: _dependencies__WEBPACK_IMPORTED_MODULE_0__.dependencies.TodoService,
})));


/***/ }),

/***/ "./src/hoc/withSideDrawer/withSideDrawer.tsx":
/*!***************************************************!*\
  !*** ./src/hoc/withSideDrawer/withSideDrawer.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withSideDrawer": () => (/* binding */ withSideDrawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _useAppState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useAppState */ "./src/hoc/useAppState.tsx");
/* harmony import */ var _withSideDrawer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withSideDrawer.module.scss */ "./src/hoc/withSideDrawer/withSideDrawer.module.scss");
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



var withSideDrawer = function (Component) { return function (props) {
    var appState = (0,_useAppState__WEBPACK_IMPORTED_MODULE_1__.useAppState)().appState;
    return appState.isDrawerOpen ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: _withSideDrawer_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].WithSideDrawer }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, __assign({}, props)) }))) : null;
}; };


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbnRhaW5lcnNfVG9kb0NvbnRhaW5lcl9FZGl0VG9kb0l0ZW1faW5kZXhfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsaUVBQWUsQ0FBQywyS0FBMks7Ozs7Ozs7Ozs7Ozs7O0FDRDNMO0FBQ0EsaUVBQWUsQ0FBQyxxQ0FBcUM7Ozs7Ozs7Ozs7Ozs7O0FDRHJEO0FBQ0EsaUVBQWUsQ0FBQyxrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7O0FDRGxEO0FBQ0EsaUVBQWUsQ0FBQyxrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7O0FDRGxEO0FBQ0EsaUVBQWUsQ0FBQyxtQ0FBbUM7Ozs7Ozs7Ozs7Ozs7O0FDRG5EO0FBQ0EsaUVBQWUsQ0FBQyx3Q0FBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0R4RCxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dEO0FBQ25CO0FBQ2M7QUFDcEMsYUFBYSwyQ0FBSTtBQUN4QjtBQUNBLHNCQUFzQixrRUFBYztBQUNwQztBQUNBLHdCQUF3QixtRUFBZTtBQUN2QztBQUNBLHdCQUF3QixxRUFBaUI7QUFDekM7QUFDQSx3QkFBd0IsbUVBQWU7QUFDdkM7QUFDQSx3QkFBd0IsdUVBQW1CO0FBQzNDLFlBQVksc0RBQUksc0JBQXNCLCtEQUErRCxJQUFJLG9CQUFvQjtBQUM3SCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJELGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0Y7QUFDNUI7QUFDVjtBQUN6QyxrQkFBa0IsMkNBQUk7QUFDN0I7QUFDQTtBQUNBLG9CQUFvQiw2Q0FBTTtBQUMxQixhQUFhLCtDQUFRO0FBQ3JCLGFBQWEsK0NBQVE7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNB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WSx1REFBSyxVQUFVLFdBQVcsc0RBQUksU0FBUyx1QkFBdUIsR0FBRyxzREFBSSxDQUFDLHNFQUFTLElBQUksd0ZBQXdGLEdBQUcsc0RBQUksQ0FBQyxtRUFBUSxJQUFJLCtFQUErRSxHQUFHLHNEQUFJLENBQUMsbUVBQVEsSUFBSSxtR0FBbUcsR0FBRyxzREFBSSxDQUFDLDRFQUFXLElBQUksd0VBQXdFLEdBQUcsdURBQUssbUJBQW1CLHdCQUF3QixJQUFJLFdBQVcsc0RBQUksQ0FBQyw2REFBTSxhQUFhLDBFQUEwRSxJQUFJLGtCQUFrQixJQUFJLHNEQUFJLENBQUMsNkRBQU0sYUFBYSx5RUFBeUUsSUFBSSxvQkFBb0IsS0FBSyxLQUFLO0FBQ2p6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEcUQ7QUFDVTtBQUNhO0FBQzlCO0FBQzlDLGlFQUFlLGtGQUFjLENBQUMscUVBQWMsQ0FBQyx1REFBWTtBQUN6RCxpQkFBaUIsbUVBQXdCO0FBQ3pDLENBQUMsRUFBRSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOSixnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dEO0FBQ0g7QUFDTTtBQUM1Qyw0Q0FBNEM7QUFDbkQsbUJBQW1CLHlEQUFXO0FBQzlCLG9DQUFvQyxzREFBSSxtQkFBbUIsV0FBVyxrRkFBc0IsRUFBRSxJQUFJLFVBQVUsc0RBQUksdUJBQXVCLFdBQVc7QUFDbEoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLm1vZHVsZS5zY3NzP2I5ZjEiLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbXBvbmVudHMvQ2FudmFzRmllbGQvQ2FudmFzRmllbGQubW9kdWxlLnNjc3M/MjA2MSIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29tcG9uZW50cy9DaGVja0JveC9DaGVja0JveC5tb2R1bGUuc2Nzcz83ZjQxIiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb21wb25lbnRzL1RleHRBcmVhL1RleHRBcmVhLm1vZHVsZS5zY3NzPzBmODciLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbXBvbmVudHMvVGV4dEZpZWxkL1RleHRGaWVsZC5tb2R1bGUuc2Nzcz82YWE3Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9ob2Mvd2l0aFNpZGVEcmF3ZXIvd2l0aFNpZGVEcmF3ZXIubW9kdWxlLnNjc3M/NGI2NiIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29tcG9uZW50cy9DYW52YXNGaWVsZC9DYW52YXNGaWVsZC50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbXBvbmVudHMvQ2hlY2tCb3gvQ2hlY2tCb3gudHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb21wb25lbnRzL1RleHRBcmVhL1RleHRBcmVhLnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29tcG9uZW50cy9UZXh0RmllbGQvVGV4dEZpZWxkLnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29udGFpbmVycy9Ub2RvQ29udGFpbmVyL0VkaXRUb2RvSXRlbS9FZGl0VG9kb0l0ZW0udHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIvRWRpdFRvZG9JdGVtL2luZGV4LnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvaG9jL3dpdGhTaWRlRHJhd2VyL3dpdGhTaWRlRHJhd2VyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkJ1dHRvblwiOlwiWVFRYU9KQktkR2RNNE9vaWVwaVJcIixcIlByaW1hcnlcIjpcIlFLbV9XZXBVRVJtMF9lQUVUT1d3XCIsXCJTZWNvbmRhcnlcIjpcIlBYNTNNVHE0UDlxejNOVDFIYm9LXCIsXCJEaXNhYmxlZFwiOlwiendEc1VLZEN3TDVXNVdWWFN1MjlcIixcIlRyYW5zcGFyZW50XCI6XCJXZkpIR2xJSHhkc194TU95WDNhUlwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkNhbnZhc0ZpZWxkXCI6XCJSa0JacTZWZmdDMjlTRDJ4RDh1eVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkNoZWNrQm94XCI6XCJXWkFyOWdJelBiMXVZeUVDM3FEUVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIlRleHRBcmVhXCI6XCJhcTNpcUVFRUdrY1BfOFlXTDhzZ1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIlRleHRGaWVsZFwiOlwiREIySTNZMHdPcVByanpCbFZTc2pcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJXaXRoU2lkZURyYXdlclwiOlwia192ZnM1Z0JmN1lvT1A2NmxXWGhcIn07IiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9CdXR0b24ubW9kdWxlLnNjc3NcIjtcbmV4cG9ydCB2YXIgQnV0dG9uID0gbWVtbyhmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgcHJpbWFyeSA9IF9hLnByaW1hcnksIHNlY29uZGFyeSA9IF9hLnNlY29uZGFyeSwgZGlzYWJsZSA9IF9hLmRpc2FibGUsIHRyYW5zcGFyZW50ID0gX2EudHJhbnNwYXJlbnQsIG9uQ2xpY2sgPSBfYS5vbkNsaWNrLCB0eXBlID0gX2EudHlwZSwgX2IgPSBfYS5jbGFzc05hbWUsIGNsYXNzTmFtZSA9IF9iID09PSB2b2lkIDAgPyBcIlwiIDogX2I7XG4gICAgdmFyIGNsYXNzTmFtZXMgPSBbY2xhc3Nlcy5CdXR0b24sIGNsYXNzTmFtZV07XG4gICAgaWYgKHByaW1hcnkpXG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChjbGFzc2VzLlByaW1hcnkpO1xuICAgIGlmIChzZWNvbmRhcnkpXG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChjbGFzc2VzLlNlY29uZGFyeSk7XG4gICAgaWYgKGRpc2FibGUpXG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChjbGFzc2VzLkRpc2FibGUpO1xuICAgIGlmICh0cmFuc3BhcmVudClcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzZXMuVHJhbnNwYXJlbnQpO1xuICAgIHJldHVybiAoX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IHR5cGU6IHR5cGUsIG9uQ2xpY2s6IG9uQ2xpY2ssIGNsYXNzTmFtZTogY2xhc3NOYW1lcy5qb2luKFwiIFwiKSB9LCB7IGNoaWxkcmVuOiBjaGlsZHJlbiB9KSkpO1xufSk7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgbWVtbywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9DYW52YXNGaWVsZC5tb2R1bGUuc2Nzc1wiO1xuZXhwb3J0IHZhciBDYW52YXNGaWVsZCA9IG1lbW8oZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIF9iO1xuICAgIHZhciBsYWJlbCA9IF9hLmxhYmVsLCB2YWx1ZSA9IF9hLnZhbHVlLCBvbklucHV0ID0gX2Eub25JbnB1dDtcbiAgICB2YXIgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKGZhbHNlKSwgaXNEcmF3aW5nID0gX2NbMF0sIHNldElzRHJhd2luZyA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICB9KSwgcHJldkNvcmRpbmF0ZXMgPSBfZFswXSwgc2V0UHJldkNvcmRpbmF0ZXMgPSBfZFsxXTtcbiAgICB2YXIgY2FudmFzQ29udGV4dCA9IChfYiA9IGNhbnZhc1JlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGltYWdlXzEgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltYWdlXzEub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNhbnZhc0NvbnRleHQgPT09IG51bGwgfHwgY2FudmFzQ29udGV4dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FudmFzQ29udGV4dC5kcmF3SW1hZ2UoaW1hZ2VfMSwgMCwgMCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW1hZ2VfMS5zcmMgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sIFt2YWx1ZSwgY2FudmFzQ29udGV4dF0pO1xuICAgIHZhciBzdGFydERyYXdpbmcgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCEoaXNEcmF3aW5nICYmIGNhbnZhc0NvbnRleHQgJiYgY2FudmFzUmVmLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbnZhc0VsID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIHZhciBfYSA9IGNhbnZhc0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBvZmZzZXRYID0gX2EueCwgb2Zmc2V0WSA9IF9hLnk7XG4gICAgICAgIC8vIGdldCBjYW52YXMgc2NhbGVcbiAgICAgICAgdmFyIHNjYWxlWCA9IGNhbnZhc0VsLndpZHRoIC8gY2FudmFzRWwuY2xpZW50V2lkdGg7XG4gICAgICAgIHZhciBzY2FsZVkgPSBjYW52YXNFbC5oZWlnaHQgLyBjYW52YXNFbC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHZhciB1cGRhdGVkQ29yZGluYXRlcyA9IHtcbiAgICAgICAgICAgIHg6IChldmVudC5jbGllbnRYIC0gb2Zmc2V0WCkgKiBzY2FsZVgsXG4gICAgICAgICAgICB5OiAoZXZlbnQuY2xpZW50WSAtIG9mZnNldFkpICogc2NhbGVZLFxuICAgICAgICB9O1xuICAgICAgICBpZiAocHJldkNvcmRpbmF0ZXMueCA9PT0gMCAmJiBwcmV2Q29yZGluYXRlcy55ID09PSAwKSB7XG4gICAgICAgICAgICBzZXRQcmV2Q29yZGluYXRlcyh1cGRhdGVkQ29yZGluYXRlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzQ29udGV4dC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAgICAgY2FudmFzQ29udGV4dC5saW5lV2lkdGggPSA4O1xuICAgICAgICBjYW52YXNDb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICBjYW52YXNDb250ZXh0Lm1vdmVUbyhwcmV2Q29yZGluYXRlcy54LCBwcmV2Q29yZGluYXRlcy55KTtcbiAgICAgICAgY2FudmFzQ29udGV4dC5saW5lVG8odXBkYXRlZENvcmRpbmF0ZXMueCwgdXBkYXRlZENvcmRpbmF0ZXMueSk7XG4gICAgICAgIHNldFByZXZDb3JkaW5hdGVzKHVwZGF0ZWRDb3JkaW5hdGVzKTtcbiAgICB9O1xuICAgIHZhciBlbmFibGVEcmF3aW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0SXNEcmF3aW5nKHRydWUpOyB9O1xuICAgIHZhciBlbmREcmF3aW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHNldFByZXZDb3JkaW5hdGVzKHsgeDogMCwgeTogMCB9KTtcbiAgICAgICAgc2V0SXNEcmF3aW5nKGZhbHNlKTtcbiAgICAgICAgb25JbnB1dCgoKF9hID0gY2FudmFzUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b0RhdGFVUkwoKSkgfHwgXCJcIik7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW2xhYmVsID8gX2pzeChcImxhYmVsXCIsIF9fYXNzaWduKHsgaHRtbEZvcjogbGFiZWwgfSwgeyBjaGlsZHJlbjogbGFiZWwgfSkpIDogbnVsbCwgX2pzeChcImNhbnZhc1wiLCB7IHdpZHRoOiBcIjEwMjhcIiwgaGVpZ2h0OiBcIjc2OFwiLCByZWY6IGNhbnZhc1JlZiwgb25Nb3VzZURvd246IGVuYWJsZURyYXdpbmcsIG9uTW91c2VNb3ZlOiBzdGFydERyYXdpbmcsIG9uTW91c2VVcDogZW5kRHJhd2luZywgb25Nb3VzZUxlYXZlOiBlbmREcmF3aW5nLCBjbGFzc05hbWU6IGNsYXNzZXMuQ2FudmFzRmllbGQgfSldIH0pKTtcbn0pO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9DaGVja0JveC5tb2R1bGUuc2Nzc1wiO1xuZXhwb3J0IHZhciBDaGVja0JveCA9IG1lbW8oZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHZhbHVlID0gX2EudmFsdWUsIG5hbWUgPSBfYS5uYW1lLCBsYWJlbCA9IF9hLmxhYmVsLCBsYWJlbE5hbWUgPSBfYS5sYWJlbE5hbWUsIG9uSW5wdXQgPSBfYS5vbklucHV0O1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzZXMuQ2hlY2tCb3ggfSwgeyBjaGlsZHJlbjogW19qc3goXCJpbnB1dFwiLCB7IHR5cGU6IFwiY2hlY2tib3hcIiwgbmFtZTogbmFtZSwgaWQ6IG5hbWUsIGNoZWNrZWQ6IHZhbHVlLCBvbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBvbklucHV0ICYmIG9uSW5wdXQoZXZlbnQudGFyZ2V0LmNoZWNrZWQpOyB9IH0pLCBsYWJlbCA/IChfanN4KFwibGFiZWxcIiwgX19hc3NpZ24oeyBodG1sRm9yOiBuYW1lLCBjbGFzc05hbWU6IFwibWwtMlwiIH0sIHsgY2hpbGRyZW46IGxhYmVsTmFtZSB9KSkpIDogbnVsbF0gfSkpKTtcbn0pO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1RleHRBcmVhLm1vZHVsZS5zY3NzXCI7XG5leHBvcnQgdmFyIFRleHRBcmVhID0gbWVtbyhmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdmFsdWUgPSBfYS52YWx1ZSwgbGFiZWwgPSBfYS5sYWJlbCwgbmFtZSA9IF9hLm5hbWUsIHBsYWNlaG9sZGVyID0gX2EucGxhY2Vob2xkZXIsIG9uSW5wdXQgPSBfYS5vbklucHV0O1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbbGFiZWwgPyBfanN4KFwibGFiZWxcIiwgX19hc3NpZ24oeyBodG1sRm9yOiBuYW1lIH0sIHsgY2hpbGRyZW46IGxhYmVsIH0pKSA6IG51bGwsIF9qc3goXCJ0ZXh0YXJlYVwiLCB7IGNsYXNzTmFtZTogY2xhc3Nlcy5UZXh0QXJlYSwgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlLCBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBvbklucHV0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IH0pXSB9KSk7XG59KTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBmb3J3YXJkUmVmLCBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9UZXh0RmllbGQubW9kdWxlLnNjc3NcIjtcbmV4cG9ydCB2YXIgVGV4dEZpZWxkID0gbWVtbyhmb3J3YXJkUmVmKGZ1bmN0aW9uIChfYSwgcmVmKSB7XG4gICAgdmFyIG9uSW5wdXQgPSBfYS5vbklucHV0LCB2YWx1ZSA9IF9hLnZhbHVlLCBsYWJlbCA9IF9hLmxhYmVsLCBuYW1lID0gX2EubmFtZSwgbGFiZWxOYW1lID0gX2EubGFiZWxOYW1lO1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbbGFiZWwgPyBfanN4KFwibGFiZWxcIiwgX19hc3NpZ24oeyBodG1sRm9yOiBuYW1lIH0sIHsgY2hpbGRyZW46IGxhYmVsTmFtZSB9KSkgOiBudWxsLCBfanN4KFwiaW5wdXRcIiwgeyByZWY6IHJlZiwgdHlwZTogXCJ0ZXh0XCIsIGlkOiBuYW1lLCBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIG9uSW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKTsgfSwgY2xhc3NOYW1lOiBjbGFzc2VzLlRleHRGaWVsZCB9KV0gfSkpO1xufSkpO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9UZXh0RmllbGQvVGV4dEZpZWxkXCI7XG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1RleHRBcmVhL1RleHRBcmVhXCI7XG5pbXBvcnQgeyBDaGVja0JveCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0NoZWNrQm94L0NoZWNrQm94XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uXCI7XG5pbXBvcnQgeyBDYW52YXNGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0NhbnZhc0ZpZWxkL0NhbnZhc0ZpZWxkXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vaG9jL3VzZUFwcFN0YXRlXCI7XG5leHBvcnQgdmFyIEVkaXRUb2RvSXRlbSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB0b2RvU2VydmljZSA9IF9hLnRvZG9TZXJ2aWNlO1xuICAgIHZhciBfYiA9IHVzZUFwcFN0YXRlKCksIGFwcFN0YXRlID0gX2IuYXBwU3RhdGUsIHNldEFwcFN0YXRlID0gX2Iuc2V0QXBwU3RhdGU7XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoe1xuICAgICAgICB0YXNrOiBcIlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgaGFuZE5vdGVzOiBcIlwiLFxuICAgICAgICBpc0RvbmU6IGZhbHNlLFxuICAgIH0pLCB0b2RvID0gX2NbMF0sIHNldFRvZG8gPSBfY1sxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB0b2RvU2VydmljZS5nZXRUb2RvKGFwcFN0YXRlLmVkaXRUb2RvSWQpLnRoZW4oZnVuY3Rpb24gKHRvZG8pIHtcbiAgICAgICAgICAgIHNldFRvZG8odG9kbyk7XG4gICAgICAgIH0pO1xuICAgIH0sIFthcHBTdGF0ZS5lZGl0VG9kb0lkLCB0b2RvU2VydmljZV0pO1xuICAgIHZhciBzYXZlQnV0dG9uQ2xpY2tlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdG9kb1NlcnZpY2UudXBkYXRlVG9kbyhhcHBTdGF0ZS5lZGl0VG9kb0lkLCB0b2RvKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldEFwcFN0YXRlKF9fYXNzaWduKF9fYXNzaWduKHt9LCBhcHBTdGF0ZSksIHsgaXNEcmF3ZXJPcGVuOiBmYWxzZSB9KSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdmFyIGNhbmNlbEJ1dHRvbkNsaWNrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzZXRBcHBTdGF0ZShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYXBwU3RhdGUpLCB7IGlzRHJhd2VyT3BlbjogZmFsc2UgfSkpO1xuICAgIH07XG4gICAgdmFyIG9uRm9ybUNoYW5nZWQgPSBmdW5jdGlvbiAodXBkYXRlZFN0YXRlKSB7XG4gICAgICAgIHNldFRvZG8oZnVuY3Rpb24gKGN1cnJlbnRTdGF0ZSkgeyByZXR1cm4gKF9fYXNzaWduKF9fYXNzaWduKHt9LCBjdXJyZW50U3RhdGUpLCB1cGRhdGVkU3RhdGUpKTsgfSk7XG4gICAgfTtcbiAgICB2YXIgb25UYXNrQ2hhbmdlZCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gb25Gb3JtQ2hhbmdlZCh7IHRhc2s6IHZhbHVlIH0pOyB9LCBbXSk7XG4gICAgdmFyIG9uRG9uZUNoYW5nZWQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIG9uRm9ybUNoYW5nZWQoeyBpc0RvbmU6IHZhbHVlIH0pOyB9LCBbXSk7XG4gICAgdmFyIG9uRGVzY3JpcHRpb25DaGFuZ2VkID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBvbkZvcm1DaGFuZ2VkKHsgZGVzY3JpcHRpb246IHZhbHVlIH0pOyB9LCBbXSk7XG4gICAgdmFyIG9uSGFuZE5vdGVDaGFuZ2VkID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBvbkZvcm1DaGFuZ2VkKHsgaGFuZE5vdGVzOiB2YWx1ZSB9KTsgfSwgW10pO1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3goXCJoMlwiLCB7IGNoaWxkcmVuOiBcIkVkaXQgVG9kb1wiIH0pLCBfanN4KFRleHRGaWVsZCwgeyBvbklucHV0OiBvblRhc2tDaGFuZ2VkLCB2YWx1ZTogdG9kby50YXNrLCBsYWJlbDogdHJ1ZSwgbGFiZWxOYW1lOiBcIlRhc2tcIiwgbmFtZTogXCJ0YXNrXCIgfSksIF9qc3goQ2hlY2tCb3gsIHsgdmFsdWU6IHRvZG8uaXNEb25lLCBsYWJlbDogdHJ1ZSwgbGFiZWxOYW1lOiBcIklzIERvbmVcIiwgb25JbnB1dDogb25Eb25lQ2hhbmdlZCB9KSwgX2pzeChUZXh0QXJlYSwgeyB2YWx1ZTogdG9kby5kZXNjcmlwdGlvbiwgbmFtZTogXCJkZXNjcmlwdGlvblwiLCBsYWJlbDogXCJEZXNjcmlwdGlvblwiLCBvbklucHV0OiBvbkRlc2NyaXB0aW9uQ2hhbmdlZCB9KSwgX2pzeChDYW52YXNGaWVsZCwgeyBsYWJlbDogXCJIYW5kIE5vdGVzXCIsIHZhbHVlOiB0b2RvLmhhbmROb3Rlcywgb25JbnB1dDogb25IYW5kTm90ZUNoYW5nZWQgfSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZsZXggbXQtMlwiIH0sIHsgY2hpbGRyZW46IFtfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZmxleC1ncm93LTEgbXItMlwiLCBwcmltYXJ5OiB0cnVlLCBvbkNsaWNrOiBzYXZlQnV0dG9uQ2xpY2tlZCB9LCB7IGNoaWxkcmVuOiBcIlNhdmVcIiB9KSksIF9qc3goQnV0dG9uLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmbGV4LWdyb3ctMVwiLCBzZWNvbmRhcnk6IHRydWUsIG9uQ2xpY2s6IGNhbmNlbEJ1dHRvbkNsaWNrZWQgfSwgeyBjaGlsZHJlbjogXCJDYW5jZWxcIiB9KSldIH0pKV0gfSkpO1xufTtcbiIsImltcG9ydCB7IGRlcGVuZGVuY2llcyB9IGZyb20gXCIuLi8uLi8uLi9kZXBlbmRlbmNpZXNcIjtcbmltcG9ydCB7IHdpdGhEZXBlbmRlbmN5IH0gZnJvbSBcIi4uLy4uLy4uL2hvYy93aXRoRGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQgeyB3aXRoU2lkZURyYXdlciB9IGZyb20gXCIuLi8uLi8uLi9ob2Mvd2l0aFNpZGVEcmF3ZXIvd2l0aFNpZGVEcmF3ZXJcIjtcbmltcG9ydCB7IEVkaXRUb2RvSXRlbSB9IGZyb20gXCIuL0VkaXRUb2RvSXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFNpZGVEcmF3ZXIod2l0aERlcGVuZGVuY3koRWRpdFRvZG9JdGVtLCB7XG4gICAgdG9kb1NlcnZpY2U6IGRlcGVuZGVuY2llcy5Ub2RvU2VydmljZSxcbn0pKTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUgfSBmcm9tIFwiLi4vdXNlQXBwU3RhdGVcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3dpdGhTaWRlRHJhd2VyLm1vZHVsZS5zY3NzXCI7XG5leHBvcnQgdmFyIHdpdGhTaWRlRHJhd2VyID0gZnVuY3Rpb24gKENvbXBvbmVudCkgeyByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGFwcFN0YXRlID0gdXNlQXBwU3RhdGUoKS5hcHBTdGF0ZTtcbiAgICByZXR1cm4gYXBwU3RhdGUuaXNEcmF3ZXJPcGVuID8gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzZXMuV2l0aFNpZGVEcmF3ZXIgfSwgeyBjaGlsZHJlbjogX2pzeChDb21wb25lbnQsIF9fYXNzaWduKHt9LCBwcm9wcykpIH0pKSkgOiBudWxsO1xufTsgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==