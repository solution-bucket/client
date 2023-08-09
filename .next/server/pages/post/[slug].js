(() => {
var exports = {};
exports.id = 6515;
exports.ids = [6515];
exports.modules = {

/***/ 47016:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-swc-loader.js):\nError: \n  x the name `Button` is defined multiple times\n    ,-[3:1]\n  3 | import {Row, Col, Card,Avatar, Typography, Divider, Button} from 'antd';\n    :                                                     ^^^|^^\n    :                                                        `-- previous definition of `Button` here\n  4 | import Head from 'next/head';\n  5 | import {CloseOutlined } from '@ant-design/icons';\n  6 | import { ThemeContext } from '../../context/theme';\n  7 | import dayjs from 'dayjs';\n  8 | import Link from 'next/link';\n  9 | import {toast} from 'react-hot-toast';\n 10 | import { List, Modal,Button}  from 'antd';\n    :                      ^^^|^^\n    :                         `-- `Button` redefined here\n    `----\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(47016));
module.exports = __webpack_exports__;

})();