"use strict";
(() => {
var exports = {};
exports.id = 5982;
exports.ids = [5982];
exports.modules = {

/***/ 34541:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_course_slug___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49627);
/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21364);
/* harmony import */ var react_share_social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49055);
/* harmony import */ var react_share_social__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_share_social__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_course_slug___WEBPACK_IMPORTED_MODULE_1__]);
_pages_course_slug___WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const SingleCourseJumbotron = ({ course , showModal , setShowModal , preview , setPreview , loading , user , handleFreeEnrollment , enrolled , setEnrolled ,  })=>{
    // destructure
    const { name , description , instructor , updatedAt , lessons , image , price , paid , category ,  } = course;
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // visibility state
    const { 0: share , 1: setShare  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // visibility state
    const { 0: whatYouWillLearn , 1: setWhatYouWillLearn  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // visibility state
    const { 0: showMore , 1: setShowMore  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_2__/* .ThemeContext */ .N);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "rowContent",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "courseImage",
                            src: "/images/learn.png"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {
                            onClick: ()=>setShare(true),
                            className: "textCenter",
                            type: "secondary",
                            shape: "round",
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.ShareAltOutlined, {}),
                            size: "large",
                            children: "Share"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        marginRight: "88%"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {
                        onClick: ()=>setVisible(true),
                        className: "textCenter",
                        type: "warning",
                        shape: "round",
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.UploadOutlined, {}),
                        size: "large",
                        children: "Read the course description before enrolling"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                            count: category,
                            style: {
                                backgroundColor: "#03a9f4"
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.UserOutlined, {}),
                                instructor.name
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "Last udpated ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.CalendarOutlined, {}),
                                new Date(updatedAt).toLocaleDateString(),
                                "  ",
                                loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.LoadingOutlined, {})
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                    type: "danger",
                                    shape: "round",
                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.SafetyOutlined, {}),
                                    size: "large",
                                    disabled: loading,
                                    onClick: handleFreeEnrollment,
                                    children: user ? enrolled.status ? "Go to course" : "Enroll" : "Login to enroll"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jumbotron-content singlecourse-content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-around",
                                        flexWrap: "wrap"
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flexCourses",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__.Modal, {
                                                width: 750,
                                                title: "Read the course description before enrolling.",
                                                centered: true,
                                                open: visible,
                                                onCancel: ()=>setVisible(false),
                                                footer: null,
                                                style: {
                                                    height: "800px",
                                                    overflow: "auto",
                                                    color: "brown",
                                                    backgroundColor: "#fff"
                                                },
                                                children: [
                                                    showMore ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "courseBG",
                                                        dark: theme === "light" ? false : true,
                                                        dangerouslySetInnerHTML: {
                                                            __html: description && description
                                                        }
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "courseBG",
                                                            dark: theme === "light" ? false : true,
                                                            dangerouslySetInnerHTML: {
                                                                __html: description && description.substring(0, 520)
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                        style: {
                                                            backgroundColor: "red",
                                                            padding: "8px",
                                                            textAlign: "center",
                                                            alignItems: "center",
                                                            borderRadius: "20px",
                                                            color: "#fff"
                                                        },
                                                        onClick: ()=>setShowMore(!showMore),
                                                        children: showMore ? "show less" : "show more"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "setWhatYouWillLearn",
                                            style: {
                                                marginRight: "80%",
                                                marginTop: "-30px"
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Modal, {
                                            width: 750,
                                            title: "Share it friends / family members.",
                                            centered: true,
                                            visible: share,
                                            onCancel: ()=>setShare(false),
                                            footer: null,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share_social__WEBPACK_IMPORTED_MODULE_3__.ShareSocial, {
                                                style: {
                                                    marginTop: "30px"
                                                },
                                                url:  false && 0,
                                                socialTypes: [
                                                    "facebook",
                                                    "twitter",
                                                    "reddit",
                                                    "linkedin",
                                                    "email"
                                                ],
                                                onSocialButtonClicked: (data)=>console.log(data)
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleCourseJumbotron);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63902:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);


const { Item  } = antd__WEBPACK_IMPORTED_MODULE_1__.List;
const SingleCourseLessons = ({ lessons , setPreview , showModal , setShowModal ,  })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "container",
        children: /*#__PURE__*/ _jsx("div", {
            className: "row",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "col lesson-list",
                children: [
                    lessons && /*#__PURE__*/ _jsxs("span", {
                        children: [
                            lessons.length,
                            " Lessons"
                        ]
                    }),
                    /*#__PURE__*/ _jsx("hr", {}),
                    /*#__PURE__*/ _jsx(List, {
                        itemLayout: "horizontal",
                        dataSource: lessons,
                        renderItem: (item, index)=>/*#__PURE__*/ _jsxs(Item, {
                                children: [
                                    /*#__PURE__*/ _jsx(Item.Meta, {
                                        avatar: /*#__PURE__*/ _jsx(Avatar, {
                                            children: index + 1
                                        }),
                                        title: item.title
                                    }),
                                    item.video && item.video !== null && item.free_preview && /*#__PURE__*/ _jsx("span", {
                                        className: "text-primary pointer",
                                        onClick: ()=>{
                                            setPreview(item.video.Location);
                                            setShowModal(!showModal);
                                        },
                                        children: "Preview"
                                    })
                                ]
                            })
                    })
                ]
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (SingleCourseLessons)));


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



/***/ }),

/***/ 49627:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_cards_SingleCourseJumbotron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34541);
/* harmony import */ var _components_cards_SingleCourseLessons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63902);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40730);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86201);
/* harmony import */ var react_share_social__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49055);
/* harmony import */ var react_share_social__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_share_social__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21364);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_cards_SingleCourseJumbotron__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__]);
([_components_cards_SingleCourseJumbotron__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const SingleCourse = ({ course  })=>{
    // state 
    const { 0: showModal , 1: setShowModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: preview , 1: setPreview  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: enrolled , 1: setEnrolled  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    // context
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_6__/* .AuthContext */ .V);
    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_10__/* .ThemeContext */ .N);
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showMore , 1: setShowMore  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (auth?.user && course) checkEnrollment();
    }, [
        auth?.user,
        course
    ]);
    const checkEnrollment = async ()=>{
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`/check-enrollment/${course._id}`);
        console.log("CHECK ENROLLMENT", data);
        setEnrolled(data);
    };
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { slug  } = router.query;
    const handleFreeEnrollment = async (e)=>{
        // console.log("handle free enrollment");
        e.preventDefault();
        try {
            // check if user is logged in
            if (!auth?.user) router.push("/signin");
            // check if already enrolled
            if (enrolled.status) return router.push(`/subscriber/course/${enrolled.course.slug}`);
            setLoading(true);
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`/free-enrollment/${course._id}`);
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast)(data.message);
            setLoading(false);
            router.push(`/subscriber/course/${data.course.slug}`);
        } catch (err) {
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast)("Enrollment failed. Try again.");
            console.log(err);
            setLoading(false);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cards_SingleCourseJumbotron__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            course: course,
            showModal: showModal,
            setShowModal: setShowModal,
            preview: preview,
            setPreview: setPreview,
            user: auth?.user,
            loading: loading,
            handleFreeEnrollment: handleFreeEnrollment,
            enrolled: enrolled,
            setEnrolled: setEnrolled
        })
    });
};
async function getServerSideProps({ query  }) {
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${process.env.API}/course/${query.slug}`);
    return {
        props: {
            course: data
        }
    };
}
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

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 99847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 49055:
/***/ ((module) => {

module.exports = require("react-share-social");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730], () => (__webpack_exec__(49627)));
module.exports = __webpack_exports__;

})();