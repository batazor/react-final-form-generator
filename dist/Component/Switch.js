'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Switch = require('@material-ui/core/Switch');

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var _ref$input = _ref.input,
      checked = _ref$input.checked,
      value = _ref$input.value,
      name = _ref$input.name,
      onChange = _ref$input.onChange,
      restInput = _objectWithoutProperties(_ref$input, ['checked', 'value', 'name', 'onChange']),
      meta = _ref.meta,
      rest = _objectWithoutProperties(_ref, ['input', 'meta']);

  return _react2.default.createElement(_Switch2.default, _extends({}, rest, {
    name: name,
    InputProps: restInput,
    onChange: onChange,
    checked: !!checked
  }));
};