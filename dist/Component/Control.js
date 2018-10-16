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

var _reactFinalForm = require('react-final-form');

var _Checkbox2 = require('./Checkbox');

var _Checkbox3 = _interopRequireDefault(_Checkbox2);

var _Radio2 = require('./Radio');

var _Radio3 = _interopRequireDefault(_Radio2);

var _TextField2 = require('./TextField');

var _TextField3 = _interopRequireDefault(_TextField2);

var _Select2 = require('./Select');

var _Select3 = _interopRequireDefault(_Select2);

var _Button2 = require('./Button');

var _Button3 = _interopRequireDefault(_Button2);

var _Recaptcha2 = require('./Recaptcha');

var _Recaptcha3 = _interopRequireDefault(_Recaptcha2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Control = function (_Component) {
  _inherits(Control, _Component);

  function Control(props) {
    _classCallCheck(this, Control);

    var _this = _possibleConstructorReturn(this, (Control.__proto__ || Object.getPrototypeOf(Control)).call(this, props));

    _this.control = {
      Checkbox: function Checkbox(opt) {
        return _react2.default.createElement(_reactFinalForm.Field, _extends({
          component: _Checkbox3.default,
          fullWidth: true
        }, opt));
      },
      Radio: function Radio(opt) {
        return _react2.default.createElement(_reactFinalForm.Field, _extends({
          component: _Radio3.default,
          fullWidth: true
        }, opt));
      },
      TextField: function TextField(opt) {
        return _react2.default.createElement(_reactFinalForm.Field, _extends({
          component: _TextField3.default,
          fullWidth: true,
          type: opt.typeInput || 'text'
        }, opt));
      },
      Select: function Select(opt) {
        return _react2.default.createElement(_reactFinalForm.Field, _extends({
          component: _Select3.default,
          fullWidth: true
        }, opt));
      },
      Button: function Button(opt) {
        return _react2.default.createElement(_reactFinalForm.Field, _extends({
          component: _Button3.default,
          fullWidth: true
        }, opt));
      },
      Recaptcha: function Recaptcha(opt) {
        return _react2.default.createElement(_reactFinalForm.Field, _extends({
          component: _Recaptcha3.default,
          fullWidth: true
        }, opt));
      },
      Custom: function Custom(opt) {
        return _react2.default.createElement(_reactFinalForm.Field, _extends({
          fullWidth: true
        }, opt));
      }
    };
    return _this;
  }

  _createClass(Control, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var fields = this.props.fields;


      return fields.map(function (field) {
        var isFunction = typeof _this2.control[field.type] === 'function';

        if (isFunction) {
          return _this2.control[field.type](_extends({}, field));
        }

        console.error('Not found type:', field.type);
        return null;
      });
    }
  }]);

  return Control;
}(_react.Component);

Control.defaultProps = {
  fields: {}
};

Control.propTypes = {
  fields: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    type: _propTypes2.default.string.isRequired,
    placeholder: _propTypes2.default.string,
    defaultValue: _propTypes2.default.any
  }))
};

exports.default = Control;