"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405,6205,8948];
exports.modules = {

/***/ 54624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41070);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_3__);




const Footer = ()=>{
    const Mailto = ({ email , subject ="" , body ="" , children  })=>{
        let params = subject || body ? "?" : "";
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: `mailto:${email}${params}`,
            children: children
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "text-white mp-20",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "overflow-x-hidden -mb-0.5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        preserveAspectRatio: "none",
                        viewBox: "0 0 1200 120",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: {
                            fill: "#1d4ed8",
                            width: "100%",
                            height: 120,
                            transform: "rotate(180deg)"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "developer",
                                src: "/images/developer.jpg"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "obj",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            fontSize: "12px",
                                            color: "#fff"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            color: "cyan",
                                            fontFamily: "monospace"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_typed__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            strings: [
                                                "\uD83D\uDD90️ HI THERE. \uD83D\uDE0EI'm Ephraim Momoh Jr, A Software Developer based in Monrovia, Liberia with decades of experiences working with modern techologies",
                                                " I strongly believed diverse pespective challenge conventional thinking and enhance problems-solving capabilities. ",
                                                "Would you mind us working togther? \uD83D\uDC47Contact me immediately, I wiil be more than willing to listen and hear you perspectives.", 
                                            ],
                                            typeSpeed: 150,
                                            backSpeed: 1,
                                            loop: true
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-[#1d4ed8] ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container px-5 py-20 mx-auto ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full flex flex-wrap gap-10 justify-between -mb-10 -px-4"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "container px-5 mx-auto text-white mt-2 ",
                                children: "CONTACT ME"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "container mx-auto px-5 pt-6 pb-8 flex flex-wrap items-center justify-between ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full md:w-2/4 lg:w-1/3 h-16 flex items-center justify-center md:justify-start "
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://twitter.com/momoh_ephraim?t=agtzTjSCx7B-KDxjQIjsTQ&s=09",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "ml-3 text-white text-xl hover:scale-125 ease-in-out duration-300",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaTwitter, {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://www.linkedin.com/in/ephraim-momoh-jr-629b02267",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "ml-3 text-white text-xl hover:scale-125 ease-in-out duration-300",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaLinkedinIn, {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "ml-3 text-white text-xl hover:scale-125 ease-in-out duration-300",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Mailto, {
                                                    email: "ephraimmomoh54@gmail.com",
                                                    subject: "Hello & Welcome",
                                                    body: "Do you have any Questions for Me ?",
                                                    children: "✉️"
                                                })
                                            }),
                                            "\uD83D\uDCDE+231-888-21-45-21"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-[#001a36]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "text-gray-300 text-sm text-center sm:text-left",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            style: {
                                                fontSize: "8px"
                                            },
                                            children: [
                                                "Copyright: ",
                                                new Date().getFullYear(),
                                                " \xa9 All right reserve"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://",
                                            className: "text-[#1199e7] ml-1",
                                            target: "_blank",
                                            rel: "noopener noreferrer"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    style: {
                                        fontSize: "10px"
                                    },
                                    className: "sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-300 text-sm",
                                    children: "Developed by Ephraim Momoh Jr"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 83897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41070);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_3__);




const FullWidthImage = ({ title ="TUtorial Camp" , subtitle ="Learning new skills  keep you ahead" , fullWidthImage ="/images/laptop-computer.jpg"  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "FullWidthImage",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: fullWidthImage,
                    alt: "Tutorial ",
                    style: {
                        width: "130%",
                        overflow: "auto",
                        height: "500px",
                        objectFit: "cover"
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    textAlign: "center",
                    color: "#fff",
                    marginTop: "-340px",
                    fontSize: "55px",
                    textShadow: "2px 2px 4px #000000"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        style: {
                            color: "#fff"
                        },
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        style: {
                            fontSize: "18px",
                            marginTop: "50px",
                            color: "#fff"
                        },
                        children: subtitle
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "coding",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_typed__WEBPACK_IMPORTED_MODULE_3___default()), {
                    strings: [
                        "Let's Help You Code your First Computer Program.",
                        "function myFunction(){ }",
                        "let greeting = 'Greeting \uD83D\uDC4B From Ephraim';",
                        " console.log(greeting)}",
                        "OutPut:",
                        "Greeting \uD83D\uDC4B From Ephraim \uD83C\uDF67\uD83C\uDF55", 
                    ],
                    typeSpeed: 150,
                    backSpeed: 1,
                    loop: true
                })
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullWidthImage);
function myFunction() {
    let greeting = "Hello World";
    console.log(greeting);
}
myFunction();


/***/ }),

/***/ 66426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ParallaxImage = ({ url ="/images/winter.jpg" , children , paddingTop ="100px" , paddingBottom ="75px"  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            backgroundImage: `url(${url})`,
            backgroundAttachment: "fixed",
            paddingTop: paddingTop,
            paddingBottom: paddingBottom,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "#ddd",
            display: "block",
            backgroundPosition: "center center"
        },
        children: children
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParallaxImage);


/***/ }),

/***/ 53678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40730);
/* harmony import */ var _components_pages_FullWidthImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83897);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useNumbers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47535);
/* harmony import */ var _components_posts_RenderProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15430);
/* harmony import */ var _hooks_useLatestPosts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57577);
/* harmony import */ var _hooks_useCategory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3751);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ParallaxImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66426);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _hooks_useHome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(97632);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(99847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(92750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _MainFooter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(54624);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useHome__WEBPACK_IMPORTED_MODULE_14__]);
_hooks_useHome__WEBPACK_IMPORTED_MODULE_14__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



















var relativeTime = __webpack_require__(14195);
dayjs__WEBPACK_IMPORTED_MODULE_17___default().extend(relativeTime);


function Home() {
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_1__/* .AuthContext */ .V);
    const { user  } = auth;
    const { numbers  } = (0,_hooks_useNumbers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { latestposts  } = (0,_hooks_useLatestPosts__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { categories , loading  } = (0,_hooks_useCategory__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { title , subtitle , fullWidthImage , setTitle , setSubTitle , setFullWidthImage  } = (0,_hooks_useHome__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                marginTop: "40px"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                            children: "Learn & Build Stuff with Ephraim"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "description",
                            content: "Course that you find interest in"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        marginButtom: 60
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_FullWidthImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    title: title,
                    subtitle: subtitle,
                    fullWidthImage: fullWidthImage?.url
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_9__.Row, {
                    style: {
                        marginTop: 40
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_9__.Row, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_9__.Col, {
                        xs: 24,
                        xl: 24,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "recent-collection",
                            style: {
                                textAlign: "center",
                                display: "flex",
                                flexWrap: "wrap"
                            },
                            children: latestposts?.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "recent-post",
                                    style: {
                                        display: "flex",
                                        color: "blue"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        href: `/post/${post?.slug}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "recent-post-collection",
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                border: "2px solid #fff",
                                                width: "470px",
                                                height: "200px",
                                                margin: "10px",
                                                backgroundColor: "#fff",
                                                boxShadow: "2px 0px 5px 2px rgba(208, 208, 230, 0.6)",
                                                justifyContent: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    style: {
                                                        width: "290px",
                                                        height: "300px",
                                                        borderRadius: "5%"
                                                    },
                                                    src: post?.featuredImage?.url || "/images/learn1.png",
                                                    alt: post?.title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "recent-post-title",
                                                        style: {
                                                            color: "blue",
                                                            marginBottom: "2%"
                                                        },
                                                        children: post?.title
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "content-flex-box",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__.HistoryOutlined, {
                                                            style: {
                                                                color: "green",
                                                                marginLeft: "20px"
                                                            }
                                                        }),
                                                        "Posted:",
                                                        dayjs__WEBPACK_IMPORTED_MODULE_17___default()(post?.createdAt).format("MMMM D, YYYY h:mm A"),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__.UserOutlined, {
                                                            style: {
                                                                color: "green",
                                                                marginLeft: "20px"
                                                            }
                                                        }),
                                                        post?.postedBy?.name
                                                    ]
                                                })
                                            ]
                                        })
                                    }, post?._id)
                                }))
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_9__.Row, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_9__.Col, {
                        span: 24,
                        style: {
                            textAlign: "center",
                            marginTop: "80px",
                            marginButtom: "80px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                style: {
                                    textAlign: "center",
                                    color: "blue",
                                    fontSize: "24px"
                                },
                                children: " filters by Categories"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_9__.Divider, {}),
                            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SyncOutlined, {
                                spin: true,
                                style: {
                                    display: "block",
                                    textAlign: "center",
                                    fontSize: "70px",
                                    color: "blue"
                                }
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    textAlign: "center"
                                },
                                children: categories?.map((c)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        href: `/category/${c?.slug}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_9__.Button, {
                                                style: {
                                                    margin: 2
                                                },
                                                type: "primary",
                                                children: c?.name
                                            })
                                        })
                                    }, c?._id))
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MainFooter__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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

/***/ 14195:
/***/ ((module) => {

module.exports = require("dayjs/plugin/relativeTime");

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

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 74937:
/***/ ((module) => {

module.exports = require("react-count-to");

/***/ }),

/***/ 99847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 16290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 92750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,730,5330,1982,3456,1974,7632,7926,706], () => (__webpack_exec__(53678)));
module.exports = __webpack_exports__;

})();