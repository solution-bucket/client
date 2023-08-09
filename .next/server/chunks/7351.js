"use strict";
exports.id = 7351;
exports.ids = [7351];
exports.modules = {

/***/ 77351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);




// import ReactQuill  from ('react-quill');
const ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\course\\CourseCreateForm.js -> " + "react-quill"
        ]
    },
    ssr: false
});
const { Option  } = antd__WEBPACK_IMPORTED_MODULE_2__.Select;
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
const CourseCreateForm = ({ setDescription , description , handleSubmit , handleChange , values , setValues ,  })=>{
    const children = [];
    for(let i = 9.99; i <= 100.99; i++){
        children.push(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Option, {
            children: [
                "$",
                i.toFixed(2)
            ]
        }, i.toFixed(2)));
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: values && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "name",
                        className: "form-control",
                        placeholder: "Enter Course Name",
                        value: values.name,
                        onChange: handleChange
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReactQuill, {
                        value: description,
                        modules: modules,
                        theme: "snow",
                        onChange: (v)=>{
                            setDescription(v);
                            localStorage.setItem("description", JSON.stringify(v));
                        },
                        placeholder: "Tutorial description goes here..."
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                    style: {
                                        width: "100%"
                                    },
                                    size: "large",
                                    value: values.paid,
                                    onChange: (v)=>setValues({
                                            ...values,
                                            paid: v,
                                            price: 0
                                        }),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Option, {
                                            value: true,
                                            children: "Paid"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Option, {
                                            value: false,
                                            children: "Free"
                                        })
                                    ]
                                }),
                                values.paid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                        defaultValue: "$9.99",
                                        style: {
                                            widht: "100%"
                                        },
                                        onChange: (v)=>setValues({
                                                ...values,
                                                price: v
                                            }),
                                        tokenSeparators: [
                                            , 
                                        ],
                                        size: "large",
                                        children: children
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "category",
                        className: "form-control",
                        placeholder: "Category",
                        value: values.category,
                        onChange: handleChange
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            onClick: handleSubmit,
                            disabled: values.loading || values.uploading,
                            className: "btn btn-primary",
                            loading: values.loading,
                            type: "primary",
                            size: "large",
                            shape: "round",
                            children: values.loading ? "Saving..." : "Save & Continue"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseCreateForm);


/***/ })

};
;