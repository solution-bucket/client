"use strict";
exports.id = 706;
exports.ids = [706];
exports.modules = {

/***/ 3751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const useCategory = ()=>{
    const { 0: categories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        getCategories();
    }, []);
    const getCategories = async ()=>{
        try {
            setLoading(true);
            console.log(loading);
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("/categories");
            setCategories(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };
    return {
        categories
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCategory);


/***/ }),

/***/ 57577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const useLatestPosts = ()=>{
    const { 0: latestposts , 1: setPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        getPosts();
    }, []);
    const getPosts = async ()=>{
        try {
            setLoading(true);
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("/posts/1");
            setPosts(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };
    return {
        latestposts
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLatestPosts);


/***/ })

};
;