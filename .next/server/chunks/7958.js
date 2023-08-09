"use strict";
exports.id = 7958;
exports.ids = [7958];
exports.modules = {

/***/ 90724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40730);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);




const { TextArea  } = antd__WEBPACK_IMPORTED_MODULE_3__.Input;
const CommentForm = ({ comment , setComment , loading , handleSubmit  })=>{
    const { 0: auth , 1: setAuthContext  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_2__/* .AuthContext */ .V);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextArea, {
                placeholder: "Leave a comment ...",
                value: comment,
                rows: "4",
                onChange: (e)=>setComment(e.target.value),
                disabled: auth?.user === null && auth?.token === "",
                maxLength: 200
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
                disabled: comment === "",
                loading: loading,
                style: {
                    marginTop: "4px"
                },
                onClick: handleSubmit,
                type: "primary",
                children: "Leave Comment"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentForm);


/***/ }),

/***/ 7958:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40730);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86201);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90724);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_9__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











var localizedFormat = __webpack_require__(67424);
dayjs__WEBPACK_IMPORTED_MODULE_8___default().extend(localizedFormat);
function UserComments() {
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_7__/* .AuthContext */ .V);
    const { 0: keyword , 1: setKeyword  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const { 0: total , 1: setTotal  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: comments , 1: setComments  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    //update
    const { 0: selectedComments , 1: setSelectedComments  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});
    const { 0: content , 1: setContent  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (auth?.token) {
            fetchComments();
            getTotal();
        }
    }, [
        auth?.token
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (page === 1) return;
        if (auth?.token) fetchComments();
    }, [
        page
    ]);
    const fetchComments = async ()=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`/user-comments`);
            console.log("__comments__", data);
            setComments(data);
        } catch (err) {
            console.log(err);
        }
    };
    const getTotal = async ()=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().get("/comment-count");
            setTotal(data);
        } catch (err) {
            console.log(err);
        }
    };
    const handleDelete = async (comment)=>{
        try {
            const answer = window.confirm("Are you sure you want to delete?");
            if (!answer) return;
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default()["delete"](`/comment/${comment._id}`);
            if (data?.ok) {
                setComments(comments.filter((c)=>c._id !== comment._id));
                setTotal(total - 1);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_9__.toast.success("Comment deleted successfully");
            }
        } catch (err) {
            console.log(err);
        }
    };
    const filterComment = comments.filter((comment)=>comment.content.toLowerCase().includes(keyword));
    const handleSubmit = async ()=>{
        try {
            setLoading(true);
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().put(`/comment/${selectedComments._id}`, {
                content
            });
            let arr = comments;
            const index = arr.findIndex((c)=>c._id === selectedComments._id);
            arr[index].content = data.content;
            setComments(arr);
            setVisible(false);
            setLoading(false);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_9__.toast.success("Comment updated");
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    span: 24,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            marginTop: "50px"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                children: [
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: {
                                            color: "blue",
                                            fontSize: "1rem"
                                        },
                                        children: comments?.length
                                    }),
                                    " comments."
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                placeholder: "Search",
                                type: "search",
                                value: keyword,
                                onChange: (e)=>setKeyword(e.target.value.toLowerCase())
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
                                itemLayout: "horizontal",
                                dataSource: filterComment,
                                renderItem: (item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
                                        actions: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: `/post/${item?.postId?.slug}#${item._id}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: "view"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                onClick: ()=>{
                                                    setSelectedComments(item);
                                                    setVisible(true);
                                                    setContent(item.content);
                                                },
                                                children: "edit"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                onClick: ()=>handleDelete(item),
                                                children: "delete"
                                            })
                                        ],
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List.Item.Meta, {
                                            description: `On ${item?.postId?.title} | ${item.postedBy?.name} | ${dayjs__WEBPACK_IMPORTED_MODULE_8___default()(item.createdAt).format("L LT")} `,
                                            title: item.content
                                        })
                                    })
                            })
                        ]
                    })
                })
            }),
            page * 6 < total && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        loading: loading,
                        style: {
                            textAlign: "center"
                        },
                        type: "primary",
                        onClick: ()=>setPage(page + 1),
                        children: "Show more"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    span: 24,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Modal, {
                        title: "Update comment",
                        open: visible,
                        onOk: ()=>setVisible(falase),
                        onCancel: ()=>setVisible(false),
                        footer: null,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            handleSubmit: handleSubmit,
                            comment: content,
                            setComment: setContent,
                            loading: loading
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserComments);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;