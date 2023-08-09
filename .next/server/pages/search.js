"use strict";
(() => {
var exports = {};
exports.id = 9603;
exports.ids = [9603,8948];
exports.modules = {

/***/ 99505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1982);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40730);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_10__]);
([_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











//var relativeTime = require('dayjs/plugin/relativeTime');
var localizedFormat = __webpack_require__(67424);
dayjs__WEBPACK_IMPORTED_MODULE_9___default().extend(localizedFormat);
function Search() {
    const { 0: allCourses , 1: setAllCourses  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_8__/* .AuthContext */ .V);
    const { 0: keyword , 1: setKeyword  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(1);
    const { 0: total , 1: setTotal  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: courses , 1: setCourses  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        fetchCourses();
        getTotal();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (page === 1) return;
        loadMore();
        fetchCourses();
    }, [
        page
    ]);
    const fetchCourses = async ()=>{
        try {
            setLoading(true);
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(`/allcourses/${page}`);
            setCourses(data);
            setAllCourses([
                ...allCourses,
                ...data
            ]);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };
    const getTotal = async ()=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_6___default().get("/courses-count");
            setTotal(data);
            console.log("Total numbers of course is:", data);
        } catch (err) {
            console.log(err);
        }
    };
    const loadMore = async ()=>{
        try {
            setLoading(true);
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(`/courses/${page}`);
            setAllCourses([
                ...allCourses,
                ...data
            ]);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };
    const filterCourses = courses.filter((course)=>course.name.toLowerCase().includes(keyword));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            width: "80%",
            margin: " auto 60px"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                    span: 24,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            marginTop: "60px"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        style: {
                                            color: "blue",
                                            fontSize: "1rem"
                                        },
                                        children: [
                                            "  ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Badge, {
                                                count: total,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                                    shape: "square",
                                                    size: "large"
                                                })
                                            }),
                                            " "
                                        ]
                                    }),
                                    " courses are available for now"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                placeholder: "Search for course... eg: HTML for Beginers",
                                type: "search",
                                value: keyword,
                                onChange: (e)=>setKeyword(e.target.value.toLowerCase())
                            }),
                            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.SyncOutlined, {
                                spin: true,
                                style: {
                                    display: "block",
                                    textAlign: "center",
                                    fontSize: "70px",
                                    color: "blue"
                                }
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.List, {
                                itemLayout: "horizontal",
                                dataSource: filterCourses,
                                renderItem: (item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
                                        actions: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: `/course/${item?.slug}#${item._id}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: "Read more... "
                                                })
                                            }), 
                                        ],
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.List.Item.Meta, {
                                            description: `👨‍👦‍👦${item.instructor?.name} | 🕔${dayjs__WEBPACK_IMPORTED_MODULE_9___default()(item.createdAt).format("L LT")} `,
                                            title: item.name
                                        })
                                    })
                            })
                        ]
                    })
                })
            }),
            page * 6 < total && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        loading: loading,
                        style: {
                            textAlign: "center"
                        },
                        type: "primary",
                        onClick: ()=>setPage(page + 1),
                        children: "Show more"
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

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

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 67424:
/***/ ((module) => {

module.exports = require("dayjs/plugin/localizedFormat");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,730,5330,1982], () => (__webpack_exec__(99505)));
module.exports = __webpack_exports__;

})();