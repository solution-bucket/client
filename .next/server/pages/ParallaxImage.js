"use strict";
(() => {
var exports = {};
exports.id = 6205;
exports.ids = [6205];
exports.modules = {

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
var __webpack_exports__ = (__webpack_exec__(66426));
module.exports = __webpack_exports__;

})();