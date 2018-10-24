'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactColor = require('react-color');

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @author: Login Victor <batazor>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @project: Rightech Analytics=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Color = function (_Component) {
  _inherits(Color, _Component);

  function Color(props) {
    _classCallCheck(this, Color);

    var _this = _possibleConstructorReturn(this, (Color.__proto__ || Object.getPrototypeOf(Color)).call(this));

    _this.state = {
      color: props.input.value,
      show: false
    };

    _this.onChangeComplete = _this.onChangeComplete.bind(_this);
    _this.onChangeFocus = _this.onChangeFocus.bind(_this);
    return _this;
  }

  _createClass(Color, [{
    key: 'onChangeComplete',
    value: function onChangeComplete(color) {
      this.setState({ color: color.hex, show: false });

      // For update value redux-form field
      this.textInput.focus();
      this.textInput.blur();

      this.setState({ color: color.hex, show: false });
    }
  }, {
    key: 'onChangeFocus',
    value: function onChangeFocus() {
      var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.setState({ show: show });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          input = _props.input,
          label = _props.label;

      var isCheckType = typeof this.state.color === 'string' || typeof this.state.color === 'number';
      var value = isCheckType ? this.state.color : undefined;

      return _react2.default.createElement(
        _FormControl2.default,
        {
          fullWidth: true,
          onFocus: function onFocus() {
            return _this2.onChangeFocus(true);
          }
        },
        _react2.default.createElement(_TextField2.default, _extends({}, input, {
          inputRef: function inputRef(event) {
            _this2.textInput = event;
          },
          label: label || input.name,
          value: value,
          onChange: this.onChangeValue
        })),
        this.state.show ? _react2.default.createElement(_reactColor.TwitterPicker, {
          key: 'label',
          color: this.state.color,
          ref: function ref(event) {
            _this2.colorInput = event;
          },
          onChangeComplete: this.onChangeComplete
        }) : null
      );
    }
  }]);

  return Color;
}(_react.Component);

Color.defaultProps = {
  input: undefined,
  label: undefined
};

Color.propTypes = {
  input: _propTypes2.default.object,
  label: _propTypes2.default.string
};

exports.default = Color;