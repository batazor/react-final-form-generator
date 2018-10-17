'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFinalForm = require('react-final-form');

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
      return value == is; // eslint-disable-line
    case '!=':
      return value != is; // eslint-disable-line
    default:
      return true;
  }
}

// eslint-disable-next-line
var Condition = function Condition(_ref2) {
  var when = _ref2.when,
      is = _ref2.is,
      action = _ref2.action,
      children = _ref2.children;

  if (when && is) {
    return _react2.default.createElement(
      _reactFinalForm.Field,
      { name: when, subscription: { value: true } },
      function (_ref3) {
        var value = _ref3.input.value;
        return filter({ value: value, action: action, is: is }) ? children : null;
      }
    );
  }

  return children;
};

Condition.propTypes = {
  when: _propTypes2.default.string.isRequired,
  is: _propTypes2.default.bool.isRequired,
  children: _propTypes2.default.string.isRequired
};

exports.default = Condition;