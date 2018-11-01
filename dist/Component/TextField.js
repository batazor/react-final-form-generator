"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = _react.default.memo(function (_ref) {
  var _ref$input = _ref.input,
      checked = _ref$input.checked,
      value = _ref$input.value,
      name = _ref$input.name,
      onChange = _ref$input.onChange,
      restInput = _objectWithoutProperties(_ref$input, ["checked", "value", "name", "onChange"]),
      meta = _ref.meta,
      rest = _objectWithoutProperties(_ref, ["input", "meta"]);

  return _react.default.createElement(_TextField.default, _extends({}, rest, {
    name: name,
    helperText: meta.touched ? meta.error : undefined,
    error: meta.error && meta.touched,
    inputProps: restInput,
    onChange: onChange,
    type: rest.typeInput || 'text',
    value: value
  }));
});

exports.default = _default;