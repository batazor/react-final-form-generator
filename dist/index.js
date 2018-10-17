'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFinalForm = require('react-final-form');

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Control = require('./Component/Control');

var _Control2 = _interopRequireDefault(_Control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormGenerator(props) {
  return _react2.default.createElement(_reactFinalForm.Form, {
    onSubmit: props.onSubmit,
    initialValues: props.initialValues,
    render: function render(_ref) {
      var handleSubmit = _ref.handleSubmit,
          submitError = _ref.submitError,
          values = _ref.values;
      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'form',
          {
            id: props.id,
            className: props.className,
            onSubmit: handleSubmit,
            onChange: props.onChange,
            subscription: { values: true }
          },
          _react2.default.createElement(_Control2.default, {
            fields: props.fields,
            values: values
          })
        ),
        _react2.default.createElement(
          'div',
          null,
          _lodash2.default.get(submitError, '_error', []).forEach(function (error) {
            return _react2.default.createElement(
              _Typography2.default,
              { variant: 'subtitle1', gutterBottom: true },
              'We have probelem: ',
              error
            );
          }),
          _react2.default.createElement(
            'ul',
            null,
            submitError && submitError._error.length > 0 && _react2.default.createElement(
              _Typography2.default,
              { variant: 'subtitle1', gutterBottom: true },
              'We have probelem: ',
              submitError._error.length
            ),
            _lodash2.default.get(submitError, '_error', []).map(function (issue, index) {
              return _react2.default.createElement(
                FormHelperText,
                { error: true, key: index },
                issue
              );
            }) // eslint-disable-line

          )
        )
      );
    }
  });
}

FormGenerator.defaultProps = {
  className: undefined,
  initialValues: {},

  onChange: function onChange() {}
};

FormGenerator.propTypes = {
  id: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string,
  initialValues: _propTypes2.default.object,
  // style: PropTypes.object,
  fields: _propTypes2.default.array.isRequired,
  // pristine: PropTypes.bool.isRequired,
  // submitting: PropTypes.bool.isRequired,
  // valid: PropTypes.bool.isRequired,
  // classes: PropTypes.object.isRequired,

  // I18N: PropTypes.object.isRequired,
  // currentLocale: PropTypes.string.isRequired,

  onSubmit: _propTypes2.default.func.isRequired,
  onChange: _propTypes2.default.func
};

exports.default = FormGenerator;