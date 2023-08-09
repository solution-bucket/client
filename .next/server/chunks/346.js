"use strict";
exports.id = 346;
exports.ids = [346];
exports.modules = {

/***/ 80346:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21364);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_functions_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7386);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86201);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25030);
/* harmony import */ var _media_Library__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1472);
/* harmony import */ var _context_media__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4657);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_6__, _media_Library__WEBPACK_IMPORTED_MODULE_10__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_6__, _media_Library__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// import Editor from "rich-markdown-editor";





const { TabPane  } = antd__WEBPACK_IMPORTED_MODULE_2__.Tabs;
const { Option  } = antd__WEBPACK_IMPORTED_MODULE_2__.Select;








//import ReactQuill  from ('react-quill');?
const ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_12___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\posts\\NewPostComponent.js -> " + "react-quill"
        ]
    },
    ssr: false
});
const children = [];
for(let i = 9.99; i <= 50000.99; i++){
    children.push(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Option, {
        children: [
            "$",
            i.toFixed(2)
        ]
    }, i.toFixed(2)));
}
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
function NewPostComponent({ page ="admin"  }) {
    const savedTitle = ()=>{
        if (false) {}
    };
    const saveContact = ()=>{
        if (false) {}
    };
    const savedContent = ()=>{
        if (false) {}
    };
    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_3__/* .ThemeContext */ .N);
    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(savedTitle());
    const { 0: contact , 1: setContact  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(saveContact());
    const { 0: content , 1: setContent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: categories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: loadedCategories , 1: setLoadedCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: currency , 1: setCurrency  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: media , 1: setMedia  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_media__WEBPACK_IMPORTED_MODULE_11__/* .MediaContext */ .Y);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadCategories();
    }, []);
    const loadCategories = async ()=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_4___default().get("/categories");
            setLoadedCategories(data);
        } catch (err) {
            console.log(err);
        }
    };
    const handlePublish = async ()=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("/create-post", {
                title,
                content,
                contact,
                categories,
                featuredImage: media?.selected?._id
            });
            if (data?.error) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_6__["default"].error(data?.error);
            } else {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_6__["default"].success("Post created Successfully");
                localStorage.removeItem("post-title");
                localStorage.removeItem("post-content");
                setMedia({
                    ...media,
                    selected: null
                });
                router.push(`/${page}/posts`);
            }
        } catch (err) {
            console.log(err);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            marginTop: "40px"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        ls: 1,
                        span: 16,
                        offset: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                style: {
                                    marginTop: "50px"
                                },
                                children: "Post New Tutorial."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                placeholder: "Give your Post / Tutorial a Name",
                                size: "large",
                                value: title,
                                onChange: (e)=>{
                                    setTitle(e.target.value);
                                    localStorage.setItem("post-title", JSON.stringify(e.target.value));
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "editor-scroll",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "editorScreen",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReactQuill, {
                                        value: content,
                                        modules: modules,
                                        theme: "snow",
                                        onChange: (v)=>{
                                            setContent(v);
                                            localStorage.setItem("post-content", JSON.stringify(v));
                                        },
                                        placeholder: "Tutorial description goes here..."
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        span: 18,
                        offset: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginTop: "50px"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            style: {
                                                margin: "10px 7px 10px 0px",
                                                width: "50%"
                                            },
                                            onClick: ()=>setMedia({
                                                    ...media,
                                                    showUploadModal: true
                                                }),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.UploadOutlined, {}),
                                                "Upload Image"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            style: {
                                                margin: "10px 5px 10px 0px",
                                                width: "50%"
                                            },
                                            onClick: ()=>setMedia({
                                                    ...media,
                                                    showMediaModal: true
                                                }),
                                            children: "Featured Images"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                style: {
                                    marginTop: "10px"
                                },
                                children: "Categories"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                mode: "multiple",
                                placeholder: "Select categories",
                                allowClear: true,
                                style: {
                                    width: "100%"
                                },
                                onChange: (v)=>setCategories(v),
                                children: loadedCategories.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Option, {
                                        children: item.name
                                    }, item.name))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                        placeholder: "WhatApp Number",
                                        value: contact,
                                        onChange: (e)=>{
                                            setContact(e.target.value);
                                            localStorage.setItem("contact", JSON.stringify(e.target.value));
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            media?.selected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginTop: "10px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                    width: "100%",
                                    src: media?.selected?.url
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                style: {
                                    margin: "10px 0px 10px 0px"
                                },
                                type: "dashed",
                                onClick: ()=>setVisible(true),
                                children: "Preview"
                            }),
                            "  ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                type: "primary",
                                style: {
                                    margin: "10px 0px 10px 0px"
                                },
                                onClick: handlePublish,
                                children: "Publish"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                        title: "Media",
                        visible: media.showUploadModal,
                        onOk: ()=>setMedia({
                                ...media,
                                showUploadModal: false
                            }),
                        onCancel: ()=>setMedia({
                                ...media,
                                showUploadModal: false
                            }),
                        width: 720,
                        bodyStyle: {
                            height: 400
                        },
                        footer: null,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_media__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                        title: "Media",
                        visible: media.showMediaModal,
                        onOk: ()=>setMedia({
                                ...media,
                                showMediaModal: false
                            }),
                        onCancel: ()=>setMedia({
                                ...media,
                                showMediaModal: false
                            }),
                        width: 720,
                        bodyStyle: {
                            height: 720
                        },
                        footer: null,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_media_Library__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                title: "Preview",
                centered: true,
                open: visible,
                onOk: ()=>setVisible(false),
                onCancel: ()=>setVisible(false),
                footer: null,
                width: 720,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReactQuill, {
                        modules: modules,
                        theme: "snow",
                        placeholder: "Items description goes here...",
                        style: {
                            width: "100%"
                        }
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewPostComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;