"use strict";
(self["webpackChunktodo_pro_max"] = self["webpackChunktodo_pro_max"] || []).push([["src_containers_TodoContainer_EditTodoItem_index_tsx"],{

/***/ "./src/components/Button/Button.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Button/Button.module.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"Button":"YQQaOJBKdGdM4OoiepiR","Primary":"QKm_WepUERm0_eAETOWw","Secondary":"PX53MTq4P9qz3NT1HboK","Disabled":"zwDsUKdCwL5W5WVXSu29","Transparent":"WfJHGlIHxds_xMOyX3aR"});

/***/ }),

/***/ "./src/components/CanvasField/CanvasField.module.scss":
/*!************************************************************!*\
  !*** ./src/components/CanvasField/CanvasField.module.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"CanvasField":"RkBZq6VfgC29SD2xD8uy"});

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

/***/ "./src/components/TextArea/TextArea.module.scss":
/*!******************************************************!*\
  !*** ./src/components/TextArea/TextArea.module.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"TextArea":"aq3iqEEEGkcP_8YWL8sg"});

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

/***/ "./src/hoc/withSideDrawer/withSideDrawer.module.scss":
/*!***********************************************************!*\
  !*** ./src/hoc/withSideDrawer/withSideDrawer.module.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"WithSideDrawer":"k_vfs5gBf7YoOP66lWXh"});

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

/***/ "./src/components/CanvasField/CanvasField.tsx":
/*!****************************************************!*\
  !*** ./src/components/CanvasField/CanvasField.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasField": function() { return /* binding */ CanvasField; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ "./src/components/TextArea/TextArea.tsx":
/*!**********************************************!*\
  !*** ./src/components/TextArea/TextArea.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextArea": function() { return /* binding */ TextArea; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ "./src/containers/TodoContainer/EditTodoItem/EditTodoItem.tsx":
/*!********************************************************************!*\
  !*** ./src/containers/TodoContainer/EditTodoItem/EditTodoItem.tsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTodoItem": function() { return /* binding */ EditTodoItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _components_TextField_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/TextField/TextField */ "./src/components/TextField/TextField.tsx");
/* harmony import */ var _components_TextArea_TextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/TextArea/TextArea */ "./src/components/TextArea/TextArea.tsx");
/* harmony import */ var _components_CheckBox_CheckBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/CheckBox/CheckBox */ "./src/components/CheckBox/CheckBox.tsx");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Button/Button */ "./src/components/Button/Button.tsx");
/* harmony import */ var _components_CanvasField_CanvasField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/CanvasField/CanvasField */ "./src/components/CanvasField/CanvasField.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dependencies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../dependencies */ "./src/dependencies.ts");
/* harmony import */ var _hoc_withDependencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hoc/withDependencies */ "./src/hoc/withDependencies.tsx");
/* harmony import */ var _hoc_withSideDrawer_withSideDrawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/withSideDrawer/withSideDrawer */ "./src/hoc/withSideDrawer/withSideDrawer.tsx");
/* harmony import */ var _EditTodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditTodoItem */ "./src/containers/TodoContainer/EditTodoItem/EditTodoItem.tsx");




/* harmony default export */ __webpack_exports__["default"] = ((0,_hoc_withSideDrawer_withSideDrawer__WEBPACK_IMPORTED_MODULE_2__.withSideDrawer)((0,_hoc_withDependencies__WEBPACK_IMPORTED_MODULE_1__.withDependency)(_EditTodoItem__WEBPACK_IMPORTED_MODULE_3__.EditTodoItem, {
    todoService: _dependencies__WEBPACK_IMPORTED_MODULE_0__.dependencies.TodoService,
})));


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

/***/ "./src/hoc/withSideDrawer/withSideDrawer.tsx":
/*!***************************************************!*\
  !*** ./src/hoc/withSideDrawer/withSideDrawer.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withSideDrawer": function() { return /* binding */ withSideDrawer; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbnRhaW5lcnNfVG9kb0NvbnRhaW5lcl9FZGl0VG9kb0l0ZW1faW5kZXhfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBLCtEQUFlLENBQUMsMktBQTJLOzs7Ozs7Ozs7OztBQ0QzTDtBQUNBLCtEQUFlLENBQUMscUNBQXFDOzs7Ozs7Ozs7OztBQ0RyRDtBQUNBLCtEQUFlLENBQUMsa0NBQWtDOzs7Ozs7Ozs7OztBQ0RsRDtBQUNBLCtEQUFlLENBQUMsa0NBQWtDOzs7Ozs7Ozs7OztBQ0RsRDtBQUNBLCtEQUFlLENBQUMsbUNBQW1DOzs7Ozs7Ozs7OztBQ0RuRDtBQUNBLCtEQUFlLENBQUMsd0NBQXdDOzs7Ozs7Ozs7Ozs7OztBQ0R4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsV0FBVztBQUM1QyxvR0FBb0c7QUFDcEcsa0NBQWtDLFFBQVEsNklBQTZJO0FBQ3ZMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTLDZCQUE2Qix5QkFBeUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUyw2QkFBNkIseUJBQXlCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVMsNkJBQTZCLHlCQUF5QjtBQUMvRDtBQUNBO0FBQ0EsQ0FBQztBQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDdkIsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnRDtBQUNuQjtBQUNjO0FBQ3BDLGFBQWEsMkNBQUk7QUFDeEI7QUFDQSxzQkFBc0Isa0VBQWM7QUFDcEM7QUFDQSx3QkFBd0IsbUVBQWU7QUFDdkM7QUFDQSx3QkFBd0IscUVBQWlC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REFBVyxHQUFHLGtDQUFrQztBQUN0RSxzQkFBc0IsK0RBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Qm5DLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0Q7QUFDSjtBQUNyQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdEQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsOEJBQThCLFFBQVEsc0RBQUksdUJBQXVCO0FBQ2pFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkEsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnRDtBQUNIO0FBQ007QUFDNUMsNENBQTRDO0FBQ25ELG1CQUFtQix5REFBVztBQUM5QixvQ0FBb0Msc0RBQUksbUJBQW1CLFdBQVcsa0ZBQXNCLEVBQUUsSUFBSSxVQUFVLHNEQUFJLHVCQUF1QixXQUFXO0FBQ2xKOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxZQUFZO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBWTtBQUN4RDtBQUNBO0FBQ0EsQ0FBQztBQUNzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24ubW9kdWxlLnNjc3M/YjlmMSIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29tcG9uZW50cy9DYW52YXNGaWVsZC9DYW52YXNGaWVsZC5tb2R1bGUuc2Nzcz8yMDYxIiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb21wb25lbnRzL0NoZWNrQm94L0NoZWNrQm94Lm1vZHVsZS5zY3NzPzdmNDEiLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbXBvbmVudHMvVGV4dEFyZWEvVGV4dEFyZWEubW9kdWxlLnNjc3M/MGY4NyIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29tcG9uZW50cy9UZXh0RmllbGQvVGV4dEZpZWxkLm1vZHVsZS5zY3NzPzZhYTciLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2hvYy93aXRoU2lkZURyYXdlci93aXRoU2lkZURyYXdlci5tb2R1bGUuc2Nzcz80YjY2Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9hZGFwdGVycy9IdHRwQWRhcHRlci50cyIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29tcG9uZW50cy9DYW52YXNGaWVsZC9DYW52YXNGaWVsZC50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2NvbXBvbmVudHMvQ2hlY2tCb3gvQ2hlY2tCb3gudHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb21wb25lbnRzL1RleHRBcmVhL1RleHRBcmVhLnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29tcG9uZW50cy9UZXh0RmllbGQvVGV4dEZpZWxkLnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvY29udGFpbmVycy9Ub2RvQ29udGFpbmVyL0VkaXRUb2RvSXRlbS9FZGl0VG9kb0l0ZW0udHN4Iiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIvRWRpdFRvZG9JdGVtL2luZGV4LnRzeCIsIndlYnBhY2s6Ly90b2RvLXByby1tYXgvLi9zcmMvZGVwZW5kZW5jaWVzLnRzIiwid2VicGFjazovL3RvZG8tcHJvLW1heC8uL3NyYy9ob2Mvd2l0aERlcGVuZGVuY2llcy50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL2hvYy93aXRoU2lkZURyYXdlci93aXRoU2lkZURyYXdlci50c3giLCJ3ZWJwYWNrOi8vdG9kby1wcm8tbWF4Ly4vc3JjL3NlcnZpY2VzL1RvZG8uc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkJ1dHRvblwiOlwiWVFRYU9KQktkR2RNNE9vaWVwaVJcIixcIlByaW1hcnlcIjpcIlFLbV9XZXBVRVJtMF9lQUVUT1d3XCIsXCJTZWNvbmRhcnlcIjpcIlBYNTNNVHE0UDlxejNOVDFIYm9LXCIsXCJEaXNhYmxlZFwiOlwiendEc1VLZEN3TDVXNVdWWFN1MjlcIixcIlRyYW5zcGFyZW50XCI6XCJXZkpIR2xJSHhkc194TU95WDNhUlwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkNhbnZhc0ZpZWxkXCI6XCJSa0JacTZWZmdDMjlTRDJ4RDh1eVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkNoZWNrQm94XCI6XCJXWkFyOWdJelBiMXVZeUVDM3FEUVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIlRleHRBcmVhXCI6XCJhcTNpcUVFRUdrY1BfOFlXTDhzZ1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIlRleHRGaWVsZFwiOlwiREIySTNZMHdPcVByanpCbFZTc2pcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJXaXRoU2lkZURyYXdlclwiOlwia192ZnM1Z0JmN1lvT1A2NmxXWGhcIn07IiwidmFyIEh0dHBBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEh0dHBBZGFwdGVyKF9hKSB7XG4gICAgICAgIHZhciBiYXNlVXJsID0gX2EuYmFzZVVybDtcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybDtcbiAgICB9XG4gICAgSHR0cEFkYXB0ZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh1cmwsIHBhcmFtcykge1xuICAgICAgICBpZiAocGFyYW1zID09PSB2b2lkIDApIHsgcGFyYW1zID0geyBxdWVyeToge30gfTsgfVxuICAgICAgICB2YXIgcXVlcnkgPSBPYmplY3Qua2V5cygocGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLnF1ZXJ5KSB8fCB7fSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGtleSkgeyB2YXIgX2E7IHJldHVybiBcIlwiLmNvbmNhdChrZXksIFwiPVwiKS5jb25jYXQoKF9hID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwYXJhbXMucXVlcnksIGtleSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS52YWx1ZSk7IH0pXG4gICAgICAgICAgICAuam9pbihcIiZcIik7XG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLmJhc2VVcmwgKyB1cmwgKyBcIj9cIiArIHF1ZXJ5KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBIdHRwQWRhcHRlci5wcm90b3R5cGUucG9zdCA9IGZ1bmN0aW9uICh1cmwsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuYmFzZVVybCArIHVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSk7XG4gICAgfTtcbiAgICBIdHRwQWRhcHRlci5wcm90b3R5cGUucGF0Y2ggPSBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLmJhc2VVcmwgKyB1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KTtcbiAgICB9O1xuICAgIEh0dHBBZGFwdGVyLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLmJhc2VVcmwgKyB1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gSHR0cEFkYXB0ZXI7XG59KCkpO1xuZXhwb3J0IHsgSHR0cEFkYXB0ZXIgfTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQnV0dG9uLm1vZHVsZS5zY3NzXCI7XG5leHBvcnQgdmFyIEJ1dHRvbiA9IG1lbW8oZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIHByaW1hcnkgPSBfYS5wcmltYXJ5LCBzZWNvbmRhcnkgPSBfYS5zZWNvbmRhcnksIGRpc2FibGUgPSBfYS5kaXNhYmxlLCB0cmFuc3BhcmVudCA9IF9hLnRyYW5zcGFyZW50LCBvbkNsaWNrID0gX2Eub25DbGljaywgdHlwZSA9IF9hLnR5cGUsIF9iID0gX2EuY2xhc3NOYW1lLCBjbGFzc05hbWUgPSBfYiA9PT0gdm9pZCAwID8gXCJcIiA6IF9iO1xuICAgIHZhciBjbGFzc05hbWVzID0gW2NsYXNzZXMuQnV0dG9uLCBjbGFzc05hbWVdO1xuICAgIGlmIChwcmltYXJ5KVxuICAgICAgICBjbGFzc05hbWVzLnB1c2goY2xhc3Nlcy5QcmltYXJ5KTtcbiAgICBpZiAoc2Vjb25kYXJ5KVxuICAgICAgICBjbGFzc05hbWVzLnB1c2goY2xhc3Nlcy5TZWNvbmRhcnkpO1xuICAgIGlmIChkaXNhYmxlKVxuICAgICAgICBjbGFzc05hbWVzLnB1c2goY2xhc3Nlcy5EaXNhYmxlKTtcbiAgICBpZiAodHJhbnNwYXJlbnQpXG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChjbGFzc2VzLlRyYW5zcGFyZW50KTtcbiAgICByZXR1cm4gKF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyB0eXBlOiB0eXBlLCBvbkNsaWNrOiBvbkNsaWNrLCBjbGFzc05hbWU6IGNsYXNzTmFtZXMuam9pbihcIiBcIikgfSwgeyBjaGlsZHJlbjogY2hpbGRyZW4gfSkpKTtcbn0pO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IG1lbW8sIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQ2FudmFzRmllbGQubW9kdWxlLnNjc3NcIjtcbmV4cG9ydCB2YXIgQ2FudmFzRmllbGQgPSBtZW1vKGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBfYjtcbiAgICB2YXIgbGFiZWwgPSBfYS5sYWJlbCwgdmFsdWUgPSBfYS52YWx1ZSwgb25JbnB1dCA9IF9hLm9uSW5wdXQ7XG4gICAgdmFyIGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShmYWxzZSksIGlzRHJhd2luZyA9IF9jWzBdLCBzZXRJc0RyYXdpbmcgPSBfY1sxXTtcbiAgICB2YXIgX2QgPSB1c2VTdGF0ZSh7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgfSksIHByZXZDb3JkaW5hdGVzID0gX2RbMF0sIHNldFByZXZDb3JkaW5hdGVzID0gX2RbMV07XG4gICAgdmFyIGNhbnZhc0NvbnRleHQgPSAoX2IgPSBjYW52YXNSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBpbWFnZV8xID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWFnZV8xLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYW52YXNDb250ZXh0ID09PSBudWxsIHx8IGNhbnZhc0NvbnRleHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhbnZhc0NvbnRleHQuZHJhd0ltYWdlKGltYWdlXzEsIDAsIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGltYWdlXzEuc3JjID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LCBbdmFsdWUsIGNhbnZhc0NvbnRleHRdKTtcbiAgICB2YXIgc3RhcnREcmF3aW5nID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICghKGlzRHJhd2luZyAmJiBjYW52YXNDb250ZXh0ICYmIGNhbnZhc1JlZi5jdXJyZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYW52YXNFbCA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICB2YXIgX2EgPSBjYW52YXNFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgb2Zmc2V0WCA9IF9hLngsIG9mZnNldFkgPSBfYS55O1xuICAgICAgICAvLyBnZXQgY2FudmFzIHNjYWxlXG4gICAgICAgIHZhciBzY2FsZVggPSBjYW52YXNFbC53aWR0aCAvIGNhbnZhc0VsLmNsaWVudFdpZHRoO1xuICAgICAgICB2YXIgc2NhbGVZID0gY2FudmFzRWwuaGVpZ2h0IC8gY2FudmFzRWwuY2xpZW50SGVpZ2h0O1xuICAgICAgICB2YXIgdXBkYXRlZENvcmRpbmF0ZXMgPSB7XG4gICAgICAgICAgICB4OiAoZXZlbnQuY2xpZW50WCAtIG9mZnNldFgpICogc2NhbGVYLFxuICAgICAgICAgICAgeTogKGV2ZW50LmNsaWVudFkgLSBvZmZzZXRZKSAqIHNjYWxlWSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHByZXZDb3JkaW5hdGVzLnggPT09IDAgJiYgcHJldkNvcmRpbmF0ZXMueSA9PT0gMCkge1xuICAgICAgICAgICAgc2V0UHJldkNvcmRpbmF0ZXModXBkYXRlZENvcmRpbmF0ZXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgIGNhbnZhc0NvbnRleHQubGluZVdpZHRoID0gODtcbiAgICAgICAgY2FudmFzQ29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgY2FudmFzQ29udGV4dC5tb3ZlVG8ocHJldkNvcmRpbmF0ZXMueCwgcHJldkNvcmRpbmF0ZXMueSk7XG4gICAgICAgIGNhbnZhc0NvbnRleHQubGluZVRvKHVwZGF0ZWRDb3JkaW5hdGVzLngsIHVwZGF0ZWRDb3JkaW5hdGVzLnkpO1xuICAgICAgICBzZXRQcmV2Q29yZGluYXRlcyh1cGRhdGVkQ29yZGluYXRlcyk7XG4gICAgfTtcbiAgICB2YXIgZW5hYmxlRHJhd2luZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldElzRHJhd2luZyh0cnVlKTsgfTtcbiAgICB2YXIgZW5kRHJhd2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzZXRQcmV2Q29yZGluYXRlcyh7IHg6IDAsIHk6IDAgfSk7XG4gICAgICAgIHNldElzRHJhd2luZyhmYWxzZSk7XG4gICAgICAgIG9uSW5wdXQoKChfYSA9IGNhbnZhc1JlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9EYXRhVVJMKCkpIHx8IFwiXCIpO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtsYWJlbCA/IF9qc3goXCJsYWJlbFwiLCBfX2Fzc2lnbih7IGh0bWxGb3I6IGxhYmVsIH0sIHsgY2hpbGRyZW46IGxhYmVsIH0pKSA6IG51bGwsIF9qc3goXCJjYW52YXNcIiwgeyB3aWR0aDogXCIxMDI4XCIsIGhlaWdodDogXCI3NjhcIiwgcmVmOiBjYW52YXNSZWYsIG9uTW91c2VEb3duOiBlbmFibGVEcmF3aW5nLCBvbk1vdXNlTW92ZTogc3RhcnREcmF3aW5nLCBvbk1vdXNlVXA6IGVuZERyYXdpbmcsIG9uTW91c2VMZWF2ZTogZW5kRHJhd2luZywgY2xhc3NOYW1lOiBjbGFzc2VzLkNhbnZhc0ZpZWxkIH0pXSB9KSk7XG59KTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQ2hlY2tCb3gubW9kdWxlLnNjc3NcIjtcbmV4cG9ydCB2YXIgQ2hlY2tCb3ggPSBtZW1vKGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB2YWx1ZSA9IF9hLnZhbHVlLCBuYW1lID0gX2EubmFtZSwgbGFiZWwgPSBfYS5sYWJlbCwgbGFiZWxOYW1lID0gX2EubGFiZWxOYW1lLCBvbklucHV0ID0gX2Eub25JbnB1dDtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc2VzLkNoZWNrQm94IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaW5wdXRcIiwgeyB0eXBlOiBcImNoZWNrYm94XCIsIG5hbWU6IG5hbWUsIGlkOiBuYW1lLCBjaGVja2VkOiB2YWx1ZSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gb25JbnB1dCAmJiBvbklucHV0KGV2ZW50LnRhcmdldC5jaGVja2VkKTsgfSB9KSwgbGFiZWwgPyAoX2pzeChcImxhYmVsXCIsIF9fYXNzaWduKHsgaHRtbEZvcjogbmFtZSwgY2xhc3NOYW1lOiBcIm1sLTJcIiB9LCB7IGNoaWxkcmVuOiBsYWJlbE5hbWUgfSkpKSA6IG51bGxdIH0pKSk7XG59KTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9UZXh0QXJlYS5tb2R1bGUuc2Nzc1wiO1xuZXhwb3J0IHZhciBUZXh0QXJlYSA9IG1lbW8oZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHZhbHVlID0gX2EudmFsdWUsIGxhYmVsID0gX2EubGFiZWwsIG5hbWUgPSBfYS5uYW1lLCBwbGFjZWhvbGRlciA9IF9hLnBsYWNlaG9sZGVyLCBvbklucHV0ID0gX2Eub25JbnB1dDtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW2xhYmVsID8gX2pzeChcImxhYmVsXCIsIF9fYXNzaWduKHsgaHRtbEZvcjogbmFtZSB9LCB7IGNoaWxkcmVuOiBsYWJlbCB9KSkgOiBudWxsLCBfanN4KFwidGV4dGFyZWFcIiwgeyBjbGFzc05hbWU6IGNsYXNzZXMuVGV4dEFyZWEsIG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSwgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLCBvbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgb25JbnB1dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSB9KV0gfSkpO1xufSk7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiwgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vVGV4dEZpZWxkLm1vZHVsZS5zY3NzXCI7XG5leHBvcnQgdmFyIFRleHRGaWVsZCA9IG1lbW8oZm9yd2FyZFJlZihmdW5jdGlvbiAoX2EsIHJlZikge1xuICAgIHZhciBvbklucHV0ID0gX2Eub25JbnB1dCwgdmFsdWUgPSBfYS52YWx1ZSwgbGFiZWwgPSBfYS5sYWJlbCwgbmFtZSA9IF9hLm5hbWUsIGxhYmVsTmFtZSA9IF9hLmxhYmVsTmFtZTtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW2xhYmVsID8gX2pzeChcImxhYmVsXCIsIF9fYXNzaWduKHsgaHRtbEZvcjogbmFtZSB9LCB7IGNoaWxkcmVuOiBsYWJlbE5hbWUgfSkpIDogbnVsbCwgX2pzeChcImlucHV0XCIsIHsgcmVmOiByZWYsIHR5cGU6IFwidGV4dFwiLCBpZDogbmFtZSwgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlLCBvbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBvbklucHV0KGV2ZW50LnRhcmdldC52YWx1ZSk7IH0sIGNsYXNzTmFtZTogY2xhc3Nlcy5UZXh0RmllbGQgfSldIH0pKTtcbn0pKTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvVGV4dEZpZWxkL1RleHRGaWVsZFwiO1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9UZXh0QXJlYS9UZXh0QXJlYVwiO1xuaW1wb3J0IHsgQ2hlY2tCb3ggfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9DaGVja0JveC9DaGVja0JveFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvblwiO1xuaW1wb3J0IHsgQ2FudmFzRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9DYW52YXNGaWVsZC9DYW52YXNGaWVsZFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUFwcFN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL2hvYy91c2VBcHBTdGF0ZVwiO1xuZXhwb3J0IHZhciBFZGl0VG9kb0l0ZW0gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdG9kb1NlcnZpY2UgPSBfYS50b2RvU2VydmljZTtcbiAgICB2YXIgX2IgPSB1c2VBcHBTdGF0ZSgpLCBhcHBTdGF0ZSA9IF9iLmFwcFN0YXRlLCBzZXRBcHBTdGF0ZSA9IF9iLnNldEFwcFN0YXRlO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKHtcbiAgICAgICAgdGFzazogXCJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIGhhbmROb3RlczogXCJcIixcbiAgICAgICAgaXNEb25lOiBmYWxzZSxcbiAgICB9KSwgdG9kbyA9IF9jWzBdLCBzZXRUb2RvID0gX2NbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdG9kb1NlcnZpY2UuZ2V0VG9kbyhhcHBTdGF0ZS5lZGl0VG9kb0lkKS50aGVuKGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgICAgICAgICBzZXRUb2RvKHRvZG8pO1xuICAgICAgICB9KTtcbiAgICB9LCBbYXBwU3RhdGUuZWRpdFRvZG9JZCwgdG9kb1NlcnZpY2VdKTtcbiAgICB2YXIgc2F2ZUJ1dHRvbkNsaWNrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRvZG9TZXJ2aWNlLnVwZGF0ZVRvZG8oYXBwU3RhdGUuZWRpdFRvZG9JZCwgdG9kbykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRBcHBTdGF0ZShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYXBwU3RhdGUpLCB7IGlzRHJhd2VyT3BlbjogZmFsc2UgfSkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHZhciBjYW5jZWxCdXR0b25DbGlja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc2V0QXBwU3RhdGUoX19hc3NpZ24oX19hc3NpZ24oe30sIGFwcFN0YXRlKSwgeyBpc0RyYXdlck9wZW46IGZhbHNlIH0pKTtcbiAgICB9O1xuICAgIHZhciBvbkZvcm1DaGFuZ2VkID0gZnVuY3Rpb24gKHVwZGF0ZWRTdGF0ZSkge1xuICAgICAgICBzZXRUb2RvKGZ1bmN0aW9uIChjdXJyZW50U3RhdGUpIHsgcmV0dXJuIChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY3VycmVudFN0YXRlKSwgdXBkYXRlZFN0YXRlKSk7IH0pO1xuICAgIH07XG4gICAgdmFyIG9uVGFza0NoYW5nZWQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIG9uRm9ybUNoYW5nZWQoeyB0YXNrOiB2YWx1ZSB9KTsgfSwgW10pO1xuICAgIHZhciBvbkRvbmVDaGFuZ2VkID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBvbkZvcm1DaGFuZ2VkKHsgaXNEb25lOiB2YWx1ZSB9KTsgfSwgW10pO1xuICAgIHZhciBvbkRlc2NyaXB0aW9uQ2hhbmdlZCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gb25Gb3JtQ2hhbmdlZCh7IGRlc2NyaXB0aW9uOiB2YWx1ZSB9KTsgfSwgW10pO1xuICAgIHZhciBvbkhhbmROb3RlQ2hhbmdlZCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gb25Gb3JtQ2hhbmdlZCh7IGhhbmROb3RlczogdmFsdWUgfSk7IH0sIFtdKTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4KFwiaDJcIiwgeyBjaGlsZHJlbjogXCJFZGl0IFRvZG9cIiB9KSwgX2pzeChUZXh0RmllbGQsIHsgb25JbnB1dDogb25UYXNrQ2hhbmdlZCwgdmFsdWU6IHRvZG8udGFzaywgbGFiZWw6IHRydWUsIGxhYmVsTmFtZTogXCJUYXNrXCIsIG5hbWU6IFwidGFza1wiIH0pLCBfanN4KENoZWNrQm94LCB7IHZhbHVlOiB0b2RvLmlzRG9uZSwgbGFiZWw6IHRydWUsIGxhYmVsTmFtZTogXCJJcyBEb25lXCIsIG9uSW5wdXQ6IG9uRG9uZUNoYW5nZWQgfSksIF9qc3goVGV4dEFyZWEsIHsgdmFsdWU6IHRvZG8uZGVzY3JpcHRpb24sIG5hbWU6IFwiZGVzY3JpcHRpb25cIiwgbGFiZWw6IFwiRGVzY3JpcHRpb25cIiwgb25JbnB1dDogb25EZXNjcmlwdGlvbkNoYW5nZWQgfSksIF9qc3goQ2FudmFzRmllbGQsIHsgbGFiZWw6IFwiSGFuZCBOb3Rlc1wiLCB2YWx1ZTogdG9kby5oYW5kTm90ZXMsIG9uSW5wdXQ6IG9uSGFuZE5vdGVDaGFuZ2VkIH0pLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmbGV4IG10LTJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChCdXR0b24sIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZsZXgtZ3Jvdy0xIG1yLTJcIiwgcHJpbWFyeTogdHJ1ZSwgb25DbGljazogc2F2ZUJ1dHRvbkNsaWNrZWQgfSwgeyBjaGlsZHJlbjogXCJTYXZlXCIgfSkpLCBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZmxleC1ncm93LTFcIiwgc2Vjb25kYXJ5OiB0cnVlLCBvbkNsaWNrOiBjYW5jZWxCdXR0b25DbGlja2VkIH0sIHsgY2hpbGRyZW46IFwiQ2FuY2VsXCIgfSkpXSB9KSldIH0pKTtcbn07XG4iLCJpbXBvcnQgeyBkZXBlbmRlbmNpZXMgfSBmcm9tIFwiLi4vLi4vLi4vZGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQgeyB3aXRoRGVwZW5kZW5jeSB9IGZyb20gXCIuLi8uLi8uLi9ob2Mvd2l0aERlcGVuZGVuY2llc1wiO1xuaW1wb3J0IHsgd2l0aFNpZGVEcmF3ZXIgfSBmcm9tIFwiLi4vLi4vLi4vaG9jL3dpdGhTaWRlRHJhd2VyL3dpdGhTaWRlRHJhd2VyXCI7XG5pbXBvcnQgeyBFZGl0VG9kb0l0ZW0gfSBmcm9tIFwiLi9FZGl0VG9kb0l0ZW1cIjtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTaWRlRHJhd2VyKHdpdGhEZXBlbmRlbmN5KEVkaXRUb2RvSXRlbSwge1xuICAgIHRvZG9TZXJ2aWNlOiBkZXBlbmRlbmNpZXMuVG9kb1NlcnZpY2UsXG59KSk7XG4iLCJpbXBvcnQgeyBIdHRwQWRhcHRlciB9IGZyb20gXCIuL2FkYXB0ZXJzL0h0dHBBZGFwdGVyXCI7XG5pbXBvcnQgeyBUb2RvU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL1RvZG8uc2VydmljZVwiO1xudmFyIERlcGVuZGVuY3lDb250YWluZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVwZW5kZW5jeUNvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5fZGVwZW5kZW5jeSA9IHt9O1xuICAgIH1cbiAgICBEZXBlbmRlbmN5Q29udGFpbmVyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoa2V5LCBkZXBlbmRlbmN5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLl9kZXBlbmRlbmN5LCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiBkZXBlbmRlbmN5LFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERlcGVuZGVuY3lDb250YWluZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKF9hID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLl9kZXBlbmRlbmN5LCBrZXkpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWU7XG4gICAgfTtcbiAgICByZXR1cm4gRGVwZW5kZW5jeUNvbnRhaW5lcjtcbn0oKSk7XG52YXIgaHR0cEFkYXB0ZXIgPSBuZXcgSHR0cEFkYXB0ZXIoeyBiYXNlVXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiIH0pO1xudmFyIHRvZG9TZXJ2aWNlID0gbmV3IFRvZG9TZXJ2aWNlKGh0dHBBZGFwdGVyKTtcbnZhciBkZXBlbmRlbmNpZXMgPSB7XG4gICAgVG9kb1NlcnZpY2U6IFN5bWJvbChcIlRvZG9TZXJ2aWNlXCIpLFxufTtcbnZhciBjb250YWluZXIgPSBuZXcgRGVwZW5kZW5jeUNvbnRhaW5lcigpO1xuY29udGFpbmVyLmFkZChkZXBlbmRlbmNpZXMuVG9kb1NlcnZpY2UsIHRvZG9TZXJ2aWNlKTtcbmV4cG9ydCB7IGRlcGVuZGVuY2llcywgY29udGFpbmVyIH07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCIuLi9kZXBlbmRlbmNpZXNcIjtcbmV4cG9ydCB2YXIgd2l0aERlcGVuZGVuY3kgPSBmdW5jdGlvbiAoQ29tcG9uZW50LCBkZXBlbmRlbmNpZXMpIHtcbiAgICB2YXIgcmVzb2x2ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhkZXBlbmRlbmNpZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3BOYW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIGRlcGVuZGVuY3lLZXkgPSAoX2EgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlcGVuZGVuY2llcywgcHJvcE5hbWUpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWU7XG4gICAgICAgIHZhciBkZXBlbmRlbmN5ID0gY29udGFpbmVyLmdldChkZXBlbmRlbmN5S2V5KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc29sdmVkRGVwZW5kZW5jaWVzLCBwcm9wTmFtZSwge1xuICAgICAgICAgICAgdmFsdWU6IGRlcGVuZGVuY3ksXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoX2pzeChDb21wb25lbnQsIF9fYXNzaWduKHt9LCBwcm9wcywgcmVzb2x2ZWREZXBlbmRlbmNpZXMpKSk7IH07XG59O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VBcHBTdGF0ZSB9IGZyb20gXCIuLi91c2VBcHBTdGF0ZVwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vd2l0aFNpZGVEcmF3ZXIubW9kdWxlLnNjc3NcIjtcbmV4cG9ydCB2YXIgd2l0aFNpZGVEcmF3ZXIgPSBmdW5jdGlvbiAoQ29tcG9uZW50KSB7IHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgYXBwU3RhdGUgPSB1c2VBcHBTdGF0ZSgpLmFwcFN0YXRlO1xuICAgIHJldHVybiBhcHBTdGF0ZS5pc0RyYXdlck9wZW4gPyAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY2xhc3Nlcy5XaXRoU2lkZURyYXdlciB9LCB7IGNoaWxkcmVuOiBfanN4KENvbXBvbmVudCwgX19hc3NpZ24oe30sIHByb3BzKSkgfSkpKSA6IG51bGw7XG59OyB9O1xuIiwidmFyIFRvZG9TZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRvZG9TZXJ2aWNlKGh0dHBBZGFwdGVyKSB7XG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHBBZGFwdGVyO1xuICAgIH1cbiAgICBUb2RvU2VydmljZS5wcm90b3R5cGUuZ2V0VG9kbyA9IGZ1bmN0aW9uICh0b2RvSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCIvdG9kb3MvXCIgKyB0b2RvSWQpO1xuICAgIH07XG4gICAgVG9kb1NlcnZpY2UucHJvdG90eXBlLmdldEFsbFRvZG9zID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcIi90b2Rvc1wiLCBwYXJhbXMpO1xuICAgIH07XG4gICAgVG9kb1NlcnZpY2UucHJvdG90eXBlLmFkZFRvZG8gPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXCIvdG9kb3NcIiwgeyB0b2RvOiB0YXNrIH0pO1xuICAgIH07XG4gICAgVG9kb1NlcnZpY2UucHJvdG90eXBlLnVwZGF0ZVRvZG8gPSBmdW5jdGlvbiAodG9kb0lkLCB0YXNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goXCIvdG9kb3MvXCIgKyB0b2RvSWQsIHRhc2spO1xuICAgIH07XG4gICAgVG9kb1NlcnZpY2UucHJvdG90eXBlLmRlbGV0ZVRvZG8gPSBmdW5jdGlvbiAodG9kb0lkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFwiL3RvZG9zXCIsIHsgaWQ6IHRvZG9JZCB9KTtcbiAgICB9O1xuICAgIHJldHVybiBUb2RvU2VydmljZTtcbn0oKSk7XG5leHBvcnQgeyBUb2RvU2VydmljZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9