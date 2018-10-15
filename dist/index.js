'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactFinalForm = require('react-final-form');

var _Control = require('./Component/Control');

var _Control2 = _interopRequireDefault(_Control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    Form: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      flex: 1
    },
    Input: {
      margin: theme.spacing.unit + 'px 0'
    }
  };
};

var FormGenerator = (_temp = _class = function (_Component) {
  _inherits(FormGenerator, _Component);

  function FormGenerator() {
    _classCallCheck(this, FormGenerator);

    return _possibleConstructorReturn(this, (FormGenerator.__proto__ || Object.getPrototypeOf(FormGenerator)).apply(this, arguments));
  }

  _createClass(FormGenerator, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      _react2.default.createElement(_reactFinalForm.Form, {
        onSubmit: this.props.onSubmit,
        initialValues: this.props.initialValues,
        render: function render(_ref) {
          var handleSubmit = _ref.handleSubmit;
          return _react2.default.createElement(
            'form',
            { id: formId, onSubmit: handleSubmit },
            _react2.default.createElement(_Control2.default, {
              fields: _this2.props.fields
            })
          );
        }
      });
    }
  }]);

  return FormGenerator;
}(_react.Component), _class.propTypes = {
  formId: _propTypes2.default.string,
  // className: PropTypes.string,
  // style: PropTypes.object,
  fields: _propTypes2.default.array.isRequired,
  // pristine: PropTypes.bool.isRequired,
  // submitting: PropTypes.bool.isRequired,
  // valid: PropTypes.bool.isRequired,
  // classes: PropTypes.object.isRequired,

  // I18N: PropTypes.object.isRequired,
  // currentLocale: PropTypes.string.isRequired,

  handleSubmit: _propTypes2.default.func.isRequired,
  onChange: _propTypes2.default.func
}, _temp);
exports.default = FormGenerator;