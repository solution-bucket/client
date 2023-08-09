"use strict";
exports.id = 1974;
exports.ids = [1974];
exports.modules = {

/***/ 1974:
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
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40730);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4657);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_7__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const { Dragger  } = antd__WEBPACK_IMPORTED_MODULE_2__.Upload;
const MediaLibrary = ({ page ="admin"  })=>{
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_3__/* .AuthContext */ .V);
    const { 0: media , 1: setMedia  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_media__WEBPACK_IMPORTED_MODULE_5__/* .MediaContext */ .Y);
    const { 0: showPreview , 1: setShowPreview  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchMedia = async ()=>{
            try {
                const { data  } = await axios__WEBPACK_IMPORTED_MODULE_6___default().get("/media");
                setMedia((prev)=>({
                        ...prev,
                        images: data
                    }));
            } catch (err) {
                console.log(err);
            }
        };
        fetchMedia();
    }, []);
    const props = {
        name: "file",
        multiple: true,
        action: `${"http://localhost:8000/api"}/upload-image-file`,
        headers: {
            authorization: `Bearer ${auth.token}`
        },
        onChange (info) {
            if (info.file.status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === "done") {
                antd__WEBPACK_IMPORTED_MODULE_2__.message.success(`${info.file.name} file uploaded successfully`);
                setMedia({
                    images: [
                        ...media.images,
                        info.file.response
                    ],
                    selected: info.file.response,
                    showMediaModal: false
                });
                console.log("INFO FILE ON DRAG & DROP ", info.file);
            } else if (info.file.status === "error") {
                antd__WEBPACK_IMPORTED_MODULE_2__.message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop (e) {
            console.log("Dropped files", e.dataTransfer.files);
        }
    };
    const handleImageDelete = async (imageId)=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_6___default()["delete"](`/media/${imageId}`);
            if (data?.ok) {
                setMedia({
                    ...media,
                    images: media.images.filter((image)=>image._id !== imageId),
                    selected: null
                });
            }
            react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.error("Image is deleted successfully");
        } catch (err) {
            console.log(err);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Dragger, {
                ...props,
                accept: "image/*",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "ant-upload-drag-icon",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.InboxOutlined, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "ant-upload-text",
                        children: "Click or drag file to this area to  uplaod"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    textAlign: "center",
                    overflow: "auto"
                },
                children: media?.images?.map((image)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Badge, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                preview: showPreview,
                                src: image.url,
                                onClick: ()=>setMedia({
                                        ...media,
                                        selected: image
                                    }),
                                style: {
                                    paddingTop: 5,
                                    paddingRight: 10,
                                    height: "100px",
                                    width: "100px",
                                    objectFit: "cover",
                                    cursor: "pointer"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            page === "author" && image?.postedBy?._id == auth?.user?._id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CloseCircleOutlined, {
                                onClick: ()=>handleImageDelete(image._id),
                                style: {
                                    marginTop: "5",
                                    color: "#f5222d",
                                    cursor: "pointer"
                                }
                            }) : page === "admin" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CloseCircleOutlined, {
                                onClick: ()=>handleImageDelete(image._id),
                                style: {
                                    marginTop: "5",
                                    color: "#f5222d",
                                    cursor: "pointer"
                                }
                            }) : ""
                        ]
                    }))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaLibrary);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;