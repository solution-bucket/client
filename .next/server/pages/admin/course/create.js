"use strict";
(() => {
var exports = {};
exports.id = 1436;
exports.ids = [1436,8948];
exports.modules = {

/***/ 73081:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1982);
/* harmony import */ var _components_course_CourseCreateForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77351);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86201);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__]);
([_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const modules = {
    toolbar: [
        [
            {
                font: []
            }
        ],
        [
            {
                header: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    false
                ]
            }
        ],
        [
            "bold",
            "italic",
            "underline",
            "strike"
        ],
        [
            {
                color: []
            },
            {
                background: []
            }
        ],
        [
            {
                script: "sub"
            },
            {
                script: "super"
            }
        ],
        [
            "blockquote",
            "code-block"
        ],
        [
            {
                list: "ordered"
            },
            {
                list: "bullet"
            }
        ],
        [
            {
                indent: "-1"
            },
            {
                indent: "+1"
            },
            {
                align: []
            }
        ],
        [
            "link",
            "image",
            "video"
        ],
        [
            "clean"
        ], 
    ]
};
const savedContent = ()=>{
    if (false) {}
};
const savedWhatToexpect = ()=>{
    if (false) {}
};
const CourseCreate = ()=>{
    // state
    const { 0: values , 1: setValues  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        price: "9.99",
        uploading: false,
        paid: true,
        category: "",
        loading: false
    });
    const { 0: description , 1: setDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(savedContent());
    const { 0: whatToexpect , 1: setWhatToexpect  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(savedWhatToexpect());
    const { 0: image , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: uploadButtonText , 1: setUploadButtonText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Upload Image");
    // router
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const handleChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            // console.log(values);
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().post("/course", {
                description,
                ...values
            });
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast)("Great! Now you can start adding lessons");
            router.push("/admin/course/courses");
        } catch (err) {
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast)(err.response.data);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "createCourse",
                children: "Create Course"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    margin: "2%"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_course_CourseCreateForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    handleSubmit: handleSubmit,
                    handleChange: handleChange,
                    values: values,
                    setValues: setValues,
                    uploadButtonText: uploadButtonText,
                    setDescription: setDescription,
                    description: description
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseCreate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 45725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 52167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 59997:
/***/ ((module) => {

module.exports = import("@react-hook/window-size");;

/***/ }),

/***/ 86201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5152,730,5330,1982,7351], () => (__webpack_exec__(73081)));
module.exports = __webpack_exports__;

})();