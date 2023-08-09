"use strict";
exports.id = 4082;
exports.ids = [4082];
exports.modules = {

/***/ 64082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Clock extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super(props);
        //This declared the state of time at the very beginning
        this.state = {
            time: new Date().toLocaleTimeString()
        };
    }
    //This happens when the component mount and the setInterval function get called with a call back function updateClock()
    componentDidMount() {
        this.intervalID = setInterval(()=>this.updateClock(), 1000);
    }
    //This section clears setInterval by calling intervalID so as to optimise memory
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    //This function set the state of the time to a new time
    updateClock() {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "Time",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    " ",
                    this.state.time
                ]
            })
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clock);


/***/ })

};
;