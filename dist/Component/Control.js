"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFinalForm = require("react-final-form");

var _Checkbox2 = _interopRequireDefault(require("./Checkbox"));

var _Radio2 = _interopRequireDefault(require("./Radio"));

var _TextField2 = _interopRequireDefault(require("./TextField"));

var _Select2 = _interopRequireDefault(require("./Select"));

var _Switch2 = _interopRequireDefault(require("./Switch"));

var _Button2 = _interopRequireDefault(require("./Button"));

var _Recaptcha2 = _interopRequireDefault(require("./Recaptcha"));

var _Condition = _interopRequireDefault(require("./Condition"));

var _Color2 = _interopRequireDefault(require("./Color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Control =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Control, _PureComponent);

  function Control(props) {
    var _this;

    _classCallCheck(this, Control);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Control).call(this, props));
    _this.control = {
      Switch: function Switch(opt) {
        return _react.default.createElement(_Condition.default, opt.condition, _react.default.createElement(_reactFinalForm.Field, _extends({}, opt, {
          component: _Switch2.default,
          fullWidth: true,
          type: "checkbox"
        })));
      },
      Checkbox: function Checkbox(opt) {
        return _react.default.createElement(_Condition.default, opt.condition, _react.default.createElement(_reactFinalForm.Field, _extends({}, opt, {
          component: _Checkbox2.default,
          fullWidth: true,
          type: "checkbox"
        })));
      },
      Color: function Color(opt) {
        return _react.default.createElement(_Condition.default, opt.condition, _react.default.createElement(_reactFinalForm.Field, _extends({}, opt, {
          component: _Color2.default,
          fullWidth: true
        })));
      },
      Radio: function Radio(opt) {
        return _react.default.createElement(_Condition.default, opt.condition, _react.default.createElement(_reactFinalForm.Field, _extends({
          component: _Radio2.default,
          fullWidth: true
        }, opt)));
      },
      TextField: function TextField(opt) {
        return _react.default.createElement(_Condition.default, opt.condition, _react.default.createElement(_reactFinalForm.Field, _extends({
          component: _TextField2.default,
          fullWidth: true
        }, opt)));
      },
      Select: function Select(opt) {
        return _react.default.createElement(_Condition.default, opt.condition, _react.default.createElement(_reactFinalForm.Field, _extends({
          component: _Select2.default,
          fullWidth: true
        }, opt)));
      },
      Button: function Button(opt) {
        return _react.default.createElement(_Condition.default, opt.condition, _react.default.createElement(_reactFinalForm.Field, _extends({
          component: _Button2.default,
          fullWidth: true,
          values: opt.values
        }, opt)));
      },
      Recaptcha: function Recaptcha(opt) {
        return _react.default.createElement(_Condition.default, opt.condition, _react.default.createElement(_reactFinalForm.Field, _extends({
          component: _Recaptcha2.default,
          fullWidth: true
        }, opt)));
      },
      Custom: function Custom(opt) {
        return _react.default.createElement(_Condition.default, opt.condition, _react.default.createElement(_reactFinalForm.Field, _extends({
          fullWidth: true
        }, opt)));
      }
    };
    return _this;
  }

  _createClass(Control, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var fields = this.props.fields;
      return fields.map(function (field) {
        var isFunction = typeof _this2.control[field.type] === 'function';

        if (isFunction) {
          return _this2.control[field.type](_objectSpread({}, field));
        }

        console.error('Not found type:', field.type);
        return null;
      });
    }
  }]);

  return Control;
}(_react.PureComponent);

Control.defaultProps = {
  fields: {}
};
Control.propTypes = {
  fields: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string.isRequired,
    type: _propTypes.default.string.isRequired,
    placeholder: _propTypes.default.string,
    defaultValue: _propTypes.default.any
  }))
};
var _default = Control;
exports.default = _default;