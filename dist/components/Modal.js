"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(_ref) {
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
}