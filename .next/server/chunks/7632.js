"use strict";
exports.id = 7632;
exports.ids = [7632];
exports.modules = {

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

/***/ 97632:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_media_MediaLibrary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1974);
/* harmony import */ var _components_media_UploadFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63456);
/* harmony import */ var _context_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4657);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86201);
/* harmony import */ var _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1982);
/* harmony import */ var _components_media_Library__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1472);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_media_MediaLibrary__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_6__, _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_7__, _components_media_Library__WEBPACK_IMPORTED_MODULE_8__]);
([_components_media_MediaLibrary__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_6__, _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_7__, _components_media_Library__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const useHome = ()=>{
    //state
    const { 0: media , 1: setMedia  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_media__WEBPACK_IMPORTED_MODULE_4__/* .MediaContext */ .Y);
    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const { 0: subtitle , 1: setSubTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: fullWidthImage , 1: setFullWidthImage  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        loadHomePage();
    }, []);
    const loadHomePage = async ()=>{
        try {
            setLoading(true);
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().get("/page/home");
            //           console.log(data);
            setTitle(data?.title);
            setSubTitle(data?.subtitle);
            setFullWidthImage(data?.fullWidthImage);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };
    const handleSave = async ()=>{
        try {
            setLoading(true);
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().post("/page", {
                page: "home",
                title,
                subtitle,
                fullWidthImage: media?.selected?._id
            });
            setLoading(false);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.success("you have successfully updated your site");
            console.log(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error("Updating error");
        }
    };
    return {
        title,
        subtitle,
        fullWidthImage,
        setTitle,
        setSubTitle,
        setFullWidthImage
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHome);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;