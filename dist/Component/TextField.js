"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TextField = require("@material-ui/core/TextField");

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var _ref$input = _ref.input,
      name = _ref$input.name,
      onChange = _ref$input.onChange,
      value = _ref$input.value,
      restInput = _objectWithoutProperties(_ref$input, ["name", "onChange", "value"]),
      meta = _ref.meta,
      rest = _objectWithoutProperties(_ref, ["input", "meta"]);

  return _react2.default.createElement(_TextField2.default, _extends({}, rest, {
    name: name,
    helperText: meta.touched ? meta.error : undefined,
    error: meta.error && meta.touched,
    inputProps: restInput,
    onChange: onChange,
    value: value
  }));
};