'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var simple = [{
  name: 'email',
  label: 'Email',
  type: 'TextField'
}];

var complex = [{
  name: 'email',
  label: 'Email',
  type: 'TextField'
}, {
  name: 'password',
  label: 'Password',
  type: 'TextField'
}, {
  name: 'retryPassword',
  label: 'Retry password',
  type: 'TextField'
}, {
  name: 'language',
  label: 'Language',
  type: 'Select',
  option: [{
    value: 'ru_RU',
    label: 'Russia'
  }, {
    value: 'en_GB',
    label: 'English'
  }]
}];

(0, _react3.storiesOf)('Form', module).add('Simple', function () {
  return _react2.default.createElement(_index2.default, {
    id: 'form',
    fields: simple,

    onSubmit: (0, _addonActions.action)('onSubmit')
  });
}).add('Complex', function () {
  return _react2.default.createElement(_index2.default, {
    id: 'form',
    fields: complex,

    onSubmit: (0, _addonActions.action)('onSubmit')
  });
});