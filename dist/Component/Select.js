'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select = require('@material-ui/core/Select');

var _Select2 = _interopRequireDefault(_Select);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _InputLabel = require('@material-ui/core/InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

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

  return _react2.default.createElement(
    _FormControl2.default,
    { style: { width: '100%' } },
    _react2.default.createElement(
      _InputLabel2.default,
      { htmlFor: 'controlled-open-select' },
      rest.label
    ),
    _react2.default.createElement(
      _Select2.default,
      _extends({}, rest, {
        name: name,
        error: meta.error && meta.touched,
        inputProps: restInput,
        onChange: onChange,
        value: value,
        checked: !!checked
      }),
      (rest.option || []).map(function (item) {
        return _react2.default.createElement(
          _MenuItem2.default,
          { value: item.value },
          item.label
        );
      })
    )
  );
};