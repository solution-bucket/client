"use strict";
(() => {
var exports = {};
exports.id = 2650;
exports.ids = [2650,8948];
exports.modules = {

/***/ 32526:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_SubscriberLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76197);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86201);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40730);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41070);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_SubscriberLayout__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_6__]);
([_components_layout_SubscriberLayout__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(null, {
    loadableGenerated: {
        modules: [
            "subscriber\\course\\[slug].js -> " + "react-quill"
        ]
    },
    ssr: false
});




const { Item  } = antd__WEBPACK_IMPORTED_MODULE_8__.Menu;


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
const SingleCourse = ()=>{
    const { 0: showContent , 1: setShowContent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: clicked , 1: setClicked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
    const { 0: collapsed , 1: setCollapsed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: course , 1: setCourse  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        lessons: []
    });
    const { 0: isCopy , 1: setIsCopy  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // force state update
    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_7__/* .AuthContext */ .V);
    // router
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { slug  } = router.query;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (slug) loadCourse();
    }, [
        slug
    ]);
    const handleClose = ()=>{
        setClicked(-1);
    };
    const loadCourse = async ()=>{
        try {
            setLoading(true);
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`/user/course/${slug}`);
            setCourse(data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };
    const copyCode = ()=>{
        navigator.clipboard.writeText(course.lessons[clicked].content);
        setIsCopy(true);
        react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.success(`code was copied, paste it in your IDE and experiment with it`);
        setTimeout(()=>{
            if (navigator.clipboard.writeText(course.lessons[clicked].content)) setIsCopy(false);
        }, 1000);
    };
    // const handleFunc = (index)=>{
    //   setClicked(index)
    //   if(clicked.index !== -1) setShowContent(!showContent)
    // }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_SubscriberLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                marginTop: "15%"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lessonsContents",
                    children: clicked !== -1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "lessons",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "codeEditorHeading",
                                    style: {
                                        display: "flex",
                                        flexDirection: "space-between"
                                    },
                                    children: [
                                        course.lessons[clicked].title.substring(0, 30),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_8__.Button, {
                                            className: "btn-primary",
                                            onClick: ()=>{
                                                copyCode();
                                            },
                                            children: isCopy ? "code copied" : "click to copy code"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "codeEditor",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "closeBtn",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_8__.Tooltip, {
                                            title: "Close the board",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.CloseOutlined, {
                                                onClick: handleClose
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            color: "#fff"
                                        },
                                        dangerouslySetInnerHTML: {
                                            __html: course.lessons[clicked].content
                                        }
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                color: "blue",
                                backgroundColor: "#fff",
                                padding: "2px",
                                width: "300px",
                                borderRadius: "5px",
                                fontSize: "1rem"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_typed__WEBPACK_IMPORTED_MODULE_10___default()), {
                                strings: [
                                    `${auth?.user?.name} Please click on the lessons below to start learning`
                                ],
                                typeSpeed: 150,
                                backSpeed: 10,
                                loop: true
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_8__.Button, {
                            onClick: ()=>setCollapsed(!collapsed),
                            className: "text-primary mt-1 btn-block mb-2",
                            children: [
                                /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(collapsed ? _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.MenuUnfoldOutlined : _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.MenuFoldOutlined),
                                " ",
                                !collapsed && "Lessons"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_8__.Menu, {
                            defaultSelectedKeys: [
                                clicked
                            ],
                            inlineCollapsed: collapsed,
                            children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.SyncOutlined, {
                                spin: true,
                                style: {
                                    margin: "auto 42%",
                                    textAlign: "center",
                                    fontSize: "70px",
                                    color: "blue"
                                }
                            }) : course && course.lessons.map((lesson, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                                    onClick: ()=>setClicked(index) && setShowContent(ture),
                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_8__.Avatar, {
                                        onClick: ()=>setShowContent(true),
                                        children: index + 1
                                    }),
                                    children: lesson.title.substring(0, 30)
                                }, index))
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleCourse);

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

/***/ 41070:
/***/ ((module) => {

module.exports = require("react-typed");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5152,730,5330,6197], () => (__webpack_exec__(32526)));
module.exports = __webpack_exports__;

})();