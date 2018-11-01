"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFinalForm = require("react-final-form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function filter(_ref) {
  var value = _ref.value,
      action = _ref.action,
      is = _ref.is;

  switch (action) {
    case '>':
      return value > is;

    case '>=':
      return value >= is;

    case '<':
      return value < is;

    case '<=':
      return value <= is;

    case '==':
      return value === is;

    case '!=':
      return value !== is;

    default:
      return true;
  }
} // eslint-disable-next-line


var Condition = _react.default.memo(function (_ref2) {
  var when = _ref2.when,
      is = _ref2.is,
      action = _ref2.action,
      children = _ref2.children;

  if (when && is) {
    return _react.default.createElement(_reactFinalForm.Field, {
      name: when,
      subscription: {
        value: true
      }
    }, function (_ref3) {
      var value = _ref3.input.value;
      return filter({
        value: value,
        action: action,
        is: is
      }) ? children : null;
    });
  }

  return children;
});

Condition.propTypes = {
  when: _propTypes.default.string.isRequired,
  is: _propTypes.default.bool.isRequired,
  children: _propTypes.default.string.isRequired
};
var _default = Condition;
exports.default = _default;