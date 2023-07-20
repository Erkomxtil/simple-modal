"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
    active,
    setActive,
    text
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modalWrapper ".concat(active ? "active" : "", " ")
  }, /*#__PURE__*/_react.default.createElement("p", null, text, /*#__PURE__*/_react.default.createElement("span", {
    onClick: () => setActive("")
  }, "X")));
};
var _default = Modal;
exports.default = _default;