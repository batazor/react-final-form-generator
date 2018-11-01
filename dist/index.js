"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Control", {
  enumerable: true,
  get: function get() {
    return _Control2.default;
  }
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFinalForm = require("react-final-form");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Control2 = _interopRequireDefault(require("./Component/Control"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormGenerator = _react.default.memo(function (props) {
  return _react.default.createElement(_reactFinalForm.Form, {
    onSubmit: props.onSubmit,
    initialValues: props.initialValues,
    render: function render(_ref) {
      var handleSubmit = _ref.handleSubmit,
          submitError = _ref.submitError,
          values = _ref.values;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("form", {
        id: props.id,
        className: props.className,
        onSubmit: handleSubmit,
        onChange: props.onChange,
        subscription: {
          values: true
        }
      }, _react.default.createElement(_Control2.default, {
        fields: props.fields || [],
        values: values
      }), props.children), _react.default.createElement("div", null, _lodash.default.get(submitError, '_error', []).forEach(function (error) {
        return _react.default.createElement(_Typography.default, {
          variant: "subtitle1",
          gutterBottom: true
        }, "We have probelem: ", error);
      }), _react.default.createElement("ul", null, submitError && submitError._error.length > 0 && _react.default.createElement(_Typography.default, {
        variant: "subtitle1",
        gutterBottom: true
      }, "We have probelem: ", submitError._error.length), _lodash.default.get(submitError, '_error', []).map(function (issue, index) {
        return _react.default.createElement(FormHelperText, {
          error: true,
          key: index
        }, issue);
      }) // eslint-disable-line
      )));
    }
  });
});

FormGenerator.defaultProps = {
  className: undefined,
  initialValues: {},
  onChange: function onChange() {}
};
FormGenerator.propTypes = {
  id: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  initialValues: _propTypes.default.object,
  // style: PropTypes.object,
  fields: _propTypes.default.array.isRequired,
  // pristine: PropTypes.bool.isRequired,
  // submitting: PropTypes.bool.isRequired,
  // valid: PropTypes.bool.isRequired,
  // classes: PropTypes.object.isRequired,
  // I18N: PropTypes.object.isRequired,
  // currentLocale: PropTypes.string.isRequired,
  onSubmit: _propTypes.default.func.isRequired,
  onChange: _propTypes.default.func
};
var _default = FormGenerator;
exports.default = _default;