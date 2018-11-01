"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactColor = require("react-color");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Color =
/*#__PURE__*/
function (_Component) {
  _inherits(Color, _Component);

  function Color(props) {
    var _this;

    _classCallCheck(this, Color);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Color).call(this));
    _this.state = {
      color: props.input.value,
      show: false
    };
    _this.onChangeComplete = _this.onChangeComplete.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangeFocus = _this.onChangeFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Color, [{
    key: "onChangeComplete",
    value: function onChangeComplete(color) {
      this.setState({
        color: color.hex,
        show: false
      }); // For update value redux-form field

      this.textInput.focus();
      this.textInput.blur();
      this.setState({
        color: color.hex,
        show: false
      });
    }
  }, {
    key: "onChangeFocus",
    value: function onChangeFocus() {
      var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.setState({
        show: show
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          input = _this$props.input,
          label = _this$props.label;
      var isCheckType = typeof this.state.color === 'string' || typeof this.state.color === 'number';
      var value = isCheckType ? this.state.color : undefined;
      return _react.default.createElement(_FormControl.default, {
        fullWidth: true,
        onFocus: function onFocus() {
          return _this2.onChangeFocus(true);
        }
      }, _react.default.createElement(_TextField.default, _extends({}, input, {
        inputRef: function inputRef(event) {
          _this2.textInput = event;
        },
        label: label || input.name,
        value: value,
        onChange: this.onChangeValue
      })), this.state.show ? _react.default.createElement(_reactColor.TwitterPicker, {
        key: "label",
        color: this.state.color,
        ref: function ref(event) {
          _this2.colorInput = event;
        },
        onChangeComplete: this.onChangeComplete
      }) : null);
    }
  }]);

  return Color;
}(_react.Component);

Color.defaultProps = {
  input: undefined,
  label: undefined
};
Color.propTypes = {
  input: _propTypes.default.object,
  label: _propTypes.default.string
};
var _default = Color;
exports.default = _default;