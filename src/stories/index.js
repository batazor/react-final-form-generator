import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Form from '../index'

const simple = [
  {
    name: 'email',
    label: 'Email',
    type: 'TextField',
  },
]

const complex = [
  {
    name: 'email',
    label: 'Email',
    type: 'TextField',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'TextField',
  },
  {
    name: 'retryPassword',
    label: 'Retry password',
    type: 'TextField',
  },
  {
    name: 'language',
    label: 'Language',
    type: 'Select',
    option: [
      {
        value: 'ru_RU',
        label: 'Russia',
      },
      {
        value: 'en_GB',
        label: 'English',
      },
    ],
  },
  {
    name: 'submit',
    label: 'Submit',
    type: 'Button',
  },
]

storiesOf('Form', module)
  .add('Simple', () => (
    <Form
      id="form"
      fields={simple}

      onSubmit={action('onSubmit')}
    />
  ))
  .add('Complex', () => (
    <Form
      id="form"
      fields={complex}

      onSubmit={action('onSubmit')}
    />
  ))
