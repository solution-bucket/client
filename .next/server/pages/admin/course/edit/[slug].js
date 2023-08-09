"use strict";
(() => {
var exports = {};
exports.id = 321;
exports.ids = [321,8948];
exports.modules = {

/***/ 12659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);



const UpdateLessonForm = ({ current , setCurrent , handleUpdateLesson , uploading , uploadVideoButtonText , handleVideo , progress ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container pt-3",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: handleUpdateLesson,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    className: "form-control square",
                    onChange: (e)=>setCurrent({
                            ...current,
                            title: e.target.value
                        }),
                    value: current.title,
                    autoFocus: true,
                    required: true
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                    className: "form-control mt-3",
                    cols: "7",
                    rows: "7",
                    onChange: (e)=>setCurrent({
                            ...current,
                            content: e.target.value
                        }),
                    value: current.content
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        !uploading && current.video && current.video.Location && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "pt-2 d-flex justify-content-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReactPlayer, {
                                url: current.video.Location,
                                width: "410px",
                                height: "240px",
                                controls: true
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "btn btn-dark btn-block text-left mt-3",
                            children: [
                                uploadVideoButtonText,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    onChange: handleVideo,
                                    type: "file",
                                    accept: "video/*",
                                    hidden: true
                                })
                            ]
                        })
                    ]
                }),
                progress > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Progress, {
                    className: "d-flex justify-content-center pt-2",
                    percent: progress,
                    steps: 10
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-flex justify-content-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "pt-3 badge",
                            children: "Preview"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Switch, {
                            className: "float-right mt-2",
                            disabled: uploading,
                            checked: current.free_preview,
                            name: "fee_preview",
                            onChange: (v)=>setCurrent({
                                    ...current,
                                    free_preview: v
                                })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    onClick: handleUpdateLesson,
                    className: "col mt-3",
                    size: "large",
                    type: "primary",
                    loading: uploading,
                    shape: "round",
                    children: "Save"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateLessonForm);


/***/ }),

/***/ 20124:
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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_course_UpdateLessonForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12659);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__]);
([_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const { Item  } = antd__WEBPACK_IMPORTED_MODULE_7__.List;
const savedContent = ()=>{
    if (false) {}
};
const savedWhatToexpect = ()=>{
    if (false) {}
};
const CourseEdit = ()=>{
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
    const { 0: preview , 1: setPreview  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: uploadButtonText , 1: setUploadButtonText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Upload Image");
    // state for lessons update
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: current , 1: setCurrent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: progress , 1: setProgress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: uploading , 1: setUploading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // router
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { slug  } = router.query;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadCourse();
    }, [
        slug
    ]);
    const loadCourse = async ()=>{
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`/course/${slug}`);
        console.log(data);
        if (data) setValues(data);
        if (data && data.image) setImage(data.image);
    };
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
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().put(`/course/${slug}`, {
                ...values,
                description
            });
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast)("Course updated!");
            router.push("/admin/course/create");
        } catch (err) {
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast)(err.response.data);
        }
    };
    const handleDrag = (e, index)=>{
        // console.log("ON DRAG => ", index);
        e.dataTransfer.setData("itemIndex", index);
    };
    const handleDrop = async (e, index)=>{
        // console.log("ON DROP => ", index);
        const movingItemIndex = e.dataTransfer.getData("itemIndex");
        const targetItemIndex = index;
        let allLessons = values.lessons;
        let movingItem = allLessons[movingItemIndex]; // clicked/dragged item to re-order
        allLessons.splice(movingItemIndex, 1); // remove 1 item from the given index
        allLessons.splice(targetItemIndex, 0, movingItem); // push item after target item index
        setValues({
            ...values,
            lessons: [
                ...allLessons
            ]
        });
        // save the new lessons order in db
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().put(`/course/${slug}`, {
            ...values
        });
        // console.log("LESSONS REARRANGED RES => ", data);
        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast)("Lessons has been rearranged successfully");
    };
    const handleDelete = async (index)=>{
        const answer = window.confirm("Are you sure you want to delete?");
        if (!answer) return;
        let allLessons = values.lessons;
        const removed = allLessons.splice(index, 1);
        // console.log("removed", removed[0]._id);
        setValues({
            ...values,
            lessons: allLessons
        });
        // send request to server
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().put(`/course/${slug}/${removed[0]._id}`);
        console.log("LESSON DELETED =>", data);
    };
    /**
   * lesson update functions
   */ const handleUpdateLesson = async (e)=>{
        // console.log("handle update lesson");
        e.preventDefault();
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().put(`/course/lesson/${slug}/${current._id}`, current);
        setVisible(false);
        // update ui
        if (data.ok) {
            let arr = values.lessons;
            const index = arr.findIndex((el)=>el._id === current._id);
            arr[index] = current;
            setValues({
                ...values,
                lessons: arr
            });
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast)("Lesson updated");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                marginTop: "120px"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    className: "jumbotron text-center text-primary square createCourse",
                    children: "Update Course"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "pt-3 pb-3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_course_CourseCreateForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        handleSubmit: handleSubmit,
                        handleChange: handleChange,
                        values: values,
                        setValues: setValues,
                        preview: preview,
                        uploadButtonText: uploadButtonText,
                        editPage: true,
                        description: description,
                        setDescription: setDescription
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row pb-5",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col lesson-list",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                children: [
                                    values && values.lessons && values.lessons.length,
                                    " Lessons"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_7__.List, {
                                onDragOver: (e)=>e.preventDefault(),
                                itemLayout: "horizontal",
                                dataSource: values && values.lessons,
                                renderItem: (item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Item, {
                                        draggable: true,
                                        onDragStart: (e)=>handleDrag(e, index),
                                        onDrop: (e)=>handleDrop(e, index),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item.Meta, {
                                                onClick: ()=>{
                                                    setVisible(true);
                                                    setCurrent(item);
                                                },
                                                avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_7__.Avatar, {
                                                    children: index + 1
                                                }),
                                                title: item.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.DeleteOutlined, {
                                                onClick: ()=>handleDelete(index),
                                                className: "text-danger float-right"
                                            })
                                        ]
                                    })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_7__.Modal, {
                    title: "Update lesson",
                    centered: true,
                    visible: visible,
                    onCancel: ()=>setVisible(false),
                    footer: null,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_course_UpdateLessonForm__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        current: current,
                        setCurrent: setCurrent,
                        handleUpdateLesson: handleUpdateLesson,
                        progress: progress,
                        uploading: uploading
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseEdit);

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5152,730,5330,1982,7351], () => (__webpack_exec__(20124)));
module.exports = __webpack_exports__;

})();