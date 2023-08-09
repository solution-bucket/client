"use strict";
exports.id = 6780;
exports.ids = [6780];
exports.modules = {

/***/ 7386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export uploadImage */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61398);
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_file_resizer__WEBPACK_IMPORTED_MODULE_1__);


const resizeFile = (file)=>{
    return new Promise((resolve)=>{
        Resizer.imageFileResizer(file, 720, 400, "JPEG", 100, 0, (url)=>{
            resolve(url);
        }, "base64");
    });
};
const uploadImage = async (file)=>{
    console.log(file);
    try {
        const image = await resizeFile(file);
        //console.log("IMAGE BASE64: ==>", image);
        const { data  } = await axios.post("/upload-image", {
            image
        });
        console.log("Upload file response", data);
        return data;
    } catch (err) {
        console.log(err);
    }
};


/***/ }),

/***/ 1472:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MediaLibrary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1974);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MediaLibrary__WEBPACK_IMPORTED_MODULE_1__]);
_MediaLibrary__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const { TabPane  } = antd__WEBPACK_IMPORTED_MODULE_2__.Tabs.TabPane;
//const TabPane = Tabs.TabPane
const Library = ()=>{
    function callback(key) {
        console.log(key);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
        defaultActiveKey: "0",
        style: {
            display: "flex",
            justifyContent: "space-between"
        },
        onChange: callback,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPane, {
            tab: "Media Library",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MediaLibrary__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        }, "2")
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Library);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UploadFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63456);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



const { TabPane  } = antd__WEBPACK_IMPORTED_MODULE_2__.Tabs.TabPane;
//const TabPane = Tabs.TabPane
const UploadMedia = ()=>{
    function callback(key) {
        console.log(key);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
        defaultActiveKey: "0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPane, {
            tab: "Upload File",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UploadFile__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        }, "1")
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadMedia);


/***/ }),

/***/ 21364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ ThemeContext),
/* harmony export */   "f": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const ThemeProvider = ({ children  })=>{
    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("light");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (localStorage.getItem("theme")) {
            setTheme(localStorage.getItem("theme"));
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: [
            theme,
            setTheme
        ],
        children: children
    });
};



/***/ })

};
;