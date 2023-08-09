"use strict";
(() => {
var exports = {};
exports.id = 5953;
exports.ids = [5953];
exports.modules = {

/***/ 34530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SeedMessage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(87066);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(45725);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./context/auth.js
var context_auth = __webpack_require__(40730);
;// CONCATENATED MODULE: ./pages/post/SeedMessage.js




const { TextArea  } = external_antd_.Input;


const saveContact = ()=>{
    if (false) {}
};
const textFieldInputLabelStyle = {
    fontSize: "0.9em",
    alignSelf: "center",
    justifySelf: "center"
};
const textFieldStyle = {
    width: "230px"
};
const SendMessages = ({ contact  })=>{
    const { 0: auth , 1: setAuthContext  } = (0,external_react_.useContext)(context_auth/* AuthContext */.V);
    const CHARACTER_LIMIT = 100;
    const { 0: numberEmptyError , 1: setNumberEmptyError  } = (0,external_react_.useState)(false);
    const { 0: messageEmptyError , 1: setMessageEmptyError  } = (0,external_react_.useState)(false);
    const { 0: formData , 1: setFormData  } = (0,external_react_.useState)({
        mobileNumber: "0888214521",
        message: ""
    });
    const { mobileNumber , message  } = formData;
    const onChange = (e)=>{
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const onSubmit = (e)=>{
        e.preventDefault();
        if (mobileNumber.length < 1) {
            setNumberEmptyError(true);
            setTimeout(()=>setNumberEmptyError(false), 3000);
        } else if (message.length < 1) {
            setMessageEmptyError(true);
            setTimeout(()=>setMessageEmptyError(false), 3000);
        } else {
            // Regex expression to remove all characters which are NOT alphanumeric
            contact = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");
            // Appending the phone number to the URL
            let url = `https://web.whatsapp.com/send?phone=${contact}`;
            // Appending the message to the URL by encoding it
            url += `&text=${encodeURI(message)}&app_absent=0`;
            // Open our newly created URL in a new tab to send the message
            window.open(url);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "communication",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "whatsapp-card app",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "title flex_middle",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                marginRight: "0.5em"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.WhatsAppOutlined, {
                                style: {
                                    color: "green",
                                    fontSize: "50px"
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Send Message"
                        })
                    ]
                }),
                numberEmptyError && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "errors",
                    children: "Mobile number cannot be empty!"
                }),
                messageEmptyError && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "errors",
                    children: "Message cannot be empty!"
                }),
                !numberEmptyError && !messageEmptyError && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "errors-null",
                    children: "."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "search_contact app",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                        error: numberEmptyError,
                        label: "Mobile Number",
                        placeholder: "Mobile Number",
                        name: "mobileNumber",
                        value: mobileNumber,
                        onChange: onChange,
                        size: "small",
                        disabled: auth?.user === null && auth?.token === "",
                        style: {
                            margin: "1em 0em"
                        },
                        inputProps: {
                            style: textFieldStyle
                        },
                        InputLabelProps: {
                            style: textFieldInputLabelStyle
                        },
                        required: true
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "message app",
                    style: {
                        marginTop: "1.5em"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(TextArea, {
                            disabled: auth?.user === null && auth?.token === "",
                            rows: 5,
                            cols: 4,
                            multiline: true,
                            maxRows: 4,
                            label: "Message",
                            placeholder: "HI! can i get more info about ...",
                            size: "small",
                            InputLabelProps: {
                                style: textFieldInputLabelStyle
                            },
                            inputProps: {
                                style: {
                                    width: "230px",
                                    height: "90px"
                                },
                                maxLength: CHARACTER_LIMIT
                            },
                            FormHelperTextProps: {
                                style: {
                                    margin: 0,
                                    padding: "0 0 0 5px",
                                    fontSize: 10
                                }
                            },
                            name: "message",
                            value: message,
                            onChange: onChange,
                            required: true,
                            error: message.length > CHARACTER_LIMIT - 1 || messageEmptyError
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: !(message.length > CHARACTER_LIMIT - 1) ? `${message.length}/${CHARACTER_LIMIT}` : "Max length exceeded"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        marginTop: "1.5em"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                        style: {
                            height: "40px",
                            borderRadius: "5px",
                            color: "#FFF",
                            width: "150px",
                            backgroundColor: "green",
                            padding: "10px"
                        },
                        onClick: onSubmit,
                        variant: "outlined",
                        color: "success",
                        size: "small",
                        disabled: message === "",
                        children: "Send"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const SeedMessage = (SendMessages);


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

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730], () => (__webpack_exec__(34530)));
module.exports = __webpack_exports__;

})();