"use strict";
(() => {
var exports = {};
exports.id = 8026;
exports.ids = [8026,8948];
exports.modules = {

/***/ 18107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dashboard),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(52167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(45725);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(87066);
;// CONCATENATED MODULE: ./components/cards/CourseCard.js





const { Meta  } = external_antd_.Card;
const CourseCard = ({ course  })=>{
    const { name , instructor , price , slug , paid , category  } = course;
    return /*#__PURE__*/ _jsx("div", {
        className: "course",
        children: /*#__PURE__*/ _jsx(Link, {
            href: `/course/${slug}`,
            children: /*#__PURE__*/ _jsxs("a", {
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        children: /*#__PURE__*/ _jsx("img", {
                            src: "/images/learn.png",
                            style: {
                                height: "219px",
                                objectFit: "cover"
                            }
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "course_content",
                        children: [
                            /*#__PURE__*/ _jsx("h2", {
                                children: name
                            }),
                            /*#__PURE__*/ _jsxs("p", {
                                children: [
                                    " ",
                                    /*#__PURE__*/ _jsx(UserOutlined, {}),
                                    " ",
                                    " ",
                                    " ",
                                    instructor.name
                                ]
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                count: category,
                                style: {
                                    backgroundColor: "#03a9f4"
                                }
                            }),
                            /*#__PURE__*/ _jsx("h4", {
                                className: "free",
                                style: {
                                    color: "blue",
                                    fontWeight: "bold"
                                },
                                children: paid ? currencyFormatter({
                                    amount: price,
                                    currency: "usd"
                                }) : "Free"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const cards_CourseCard = ((/* unused pure expression or super */ null && (CourseCard)));

// EXTERNAL MODULE: ./clock.js
var clock = __webpack_require__(64082);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./pages/dashboard.js






const { Meta: dashboard_Meta  } = external_antd_.Card;

const Dashboard = ({ courses  })=>{
    //state
    const { 0: allCourses , 1: setAllCourses  } = (0,external_react_.useState)(courses);
    const { 0: total , 1: setTotal  } = (0,external_react_.useState)(0);
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(1);
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: keyword , 1: setKeyword  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        getTotal();
    }, []);
    const getTotal = async ()=>{
        try {
            const { data  } = await external_axios_default().get("/courses-count");
            setTotal(data);
        } catch (err) {
            console.log(err);
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (page === 1) return;
        loadMore();
    }, [
        page
    ]);
    const loadMore = async ()=>{
        try {
            setLoading(true);
            const { data  } = await external_axios_default().get(`/courses/${page}`);
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
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            marginTop: "50px"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                    className: "course_heading",
                    children: [
                        "Students Educational Platform",
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Row, {
                            children: allCourses.map((course)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                                    xs: 24,
                                    xl: 8,
                                    style: {
                                        marginTop: "5px",
                                        marginBottom: "5px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/course/${course.slug}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "cardComponent",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Card, {
                                                hoverable: true,
                                                cover: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Avatar, {
                                                    shape: "square",
                                                    style: {
                                                        height: "200px",
                                                        width: "680px",
                                                        backgroundColor: "blueviolet"
                                                    },
                                                    src: "/images/learn.png",
                                                    alt: course.name
                                                }),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(dashboard_Meta, {
                                                    title: course.name
                                                })
                                            })
                                        })
                                    })
                                }))
                        }),
                        allCourses?.length < total && /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Row, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                                span: 24,
                                style: {
                                    textAlign: "center",
                                    padding: "10px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                    size: "large",
                                    type: "primary",
                                    loading: loading,
                                    onClick: ()=>setPage(page + 1),
                                    children: "Load More Courses"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
async function getServerSideProps() {
    const { data  } = await external_axios_default().get(`${process.env.API}/courses/1`);
    return {
        props: {
            courses: data
        }
    };
}
/* harmony default export */ const dashboard = (Dashboard);


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

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,4082], () => (__webpack_exec__(18107)));
module.exports = __webpack_exports__;

})();