import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Form, { Control } from '../index'

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
    typeInput: 'password',
  },
  {
    name: 'retryPassword',
    label: 'Retry password',
    type: 'TextField',
    typeInput: 'password',
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
  // {
  //   name: 'recaptcha',
  //   label: 'Recaptcha',
  //   type: 'Recaptcha',
  // },
  {
    name: 'success',
    label: 'success',
    type: 'Switch',
  },
  {
    name: 'success',
    label: 'success',
    type: 'Checkbox',
  },
  // {
  //   name: 'submit',
  //   label: 'Submit',
  //   type: 'Button',
  //   condition: {
  //     when: 'email',
  //     is: 'test',
  //     action: '==',
  //   },
  // },
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
      onChange={action('onChange')}
    />
  ))
  .add('Wizard', () => (
    <Form
      id="form"
      // fields={complex}

      onSubmit={action('onSubmit')}
      onChange={action('onChange')}
    >
      <Control fields={simple} />
      <Control fields={simple} />
      <Control fields={simple} />
    </Form>
  ))
