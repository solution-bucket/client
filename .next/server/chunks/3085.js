"use strict";
exports.id = 3085;
exports.ids = [3085];
exports.modules = {

/***/ 25030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UploadFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63456);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



const { TabPane  } = antd__WEBPACK_IMPORTED_MODULE_2__.Tabs.TabPane;
//const TabPane = Tabs.TabPane
const UploadMedia = ()=>{
    function callback(key) {
        console.log(key);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
        defaultActiveKey: "0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPane, {
            tab: "Upload File",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UploadFile__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        }, "1")
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadMedia);


/***/ }),

/***/ 3085:
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86201);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40730);
/* harmony import */ var _context_media__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4657);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25030);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









// import MediaLibrary from '../../../components/media'
const ProfileUpdate = ({ page ="admin"  })=>{
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_6__/* .AuthContext */ .V);
    const { 0: media , 1: setMedia  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_media__WEBPACK_IMPORTED_MODULE_7__/* .MediaContext */ .Y);
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); //
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); //
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); //
    const { 0: role , 1: setRole  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: website , 1: setWebsite  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: image , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: id , 1: setId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    // const {id} = router.query;
    //useEffect
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const currentUser = async ()=>{
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`/user/${router?.query?.id}`);
            setName(data.name);
            setEmail(data.email);
            setWebsite(data.website);
            setImage(data.image);
            setRole(data.role);
            setId(data._id);
        //       console.log("CURRENT USER =>", data);
        };
        if (auth?.token) currentUser();
    }, [
        auth,
        router?.query?.id
    ]);
    //funciton
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_3___default().put(`/update-user-by-${page}`, {
                id,
                name,
                email,
                password,
                website,
                role,
                image: media?.selected?._id ? media.selected?._id : image?._id ? image?._id : undefined
            });
            if (data?.error) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.toast.error(data.error);
            } else {
                //update  context and local storage
                if (auth?.user?._id === data._id) {
                    setAuth({
                        ...auth,
                        user: data
                    });
                    // localStorage.setItem("auth", JSON.stringify(data));
                    let fromLocalStorage = JSON.parse(localStorage.getItem("auth"));
                    fromLocalStorage.user = data;
                    localStorage.setItem("auth", JSON.stringify(fromLocalStorage));
                }
                react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.toast.success("Updated user successfully");
            }
        } catch (err) {
            console.log(err);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.toast.error("User update failed. Try again");
            setLoading(false);
        }
    };
    //show form
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
            span: 27,
            offset: 1,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        marginTop: "70px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: " Update Profile "
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                display: "flex"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                            style: {
                                margin: "20px 0px 10px 0px"
                            },
                            size: "large",
                            placeholder: "Full name",
                            value: name,
                            onChange: (e)=>setName(e.target.value)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                            style: {
                                margin: "20px 0px 10px 0px"
                            },
                            size: "large",
                            placeholder: "Email",
                            value: email,
                            onChange: (e)=>setEmail(e.target.value)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                            style: {
                                margin: "10px 0px 10px 0px"
                            },
                            size: "large",
                            placeholder: "www.something.com",
                            value: website,
                            onChange: (e)=>setWebsite(e.target.value)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                display: "flex"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input.Password, {
                                size: "large",
                                placeholder: "Password",
                                value: password,
                                onChange: (e)=>setPassword(e.target.value)
                            })
                        }),
                        page === "admin" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
                            value: role,
                            style: {
                                margin: "10px 0px 10px 0px",
                                width: "100%"
                            },
                            onChange: (e)=>setRole(e),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select.Option, {
                                    value: "Subscriber",
                                    children: "Subscriber"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select.Option, {
                                    value: "Author",
                                    children: "Author"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select.Option, {
                                    value: "Admin",
                                    children: "Admin"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    style: {
                        margin: "10px 0px 10px 0px"
                    },
                    onClick: handleSubmit,
                    type: "default",
                    loading: loading,
                    block: true,
                    htmlType: "submit",
                    children: "Submit"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileUpdate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;