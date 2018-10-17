# react-final-form-generator

Generating form over react-final-form

### Usage

```js
import Form from 'react-final-form-generator'

// Fields
const fields = [
  {
    name: 'email',
    label: 'Email',
    type: 'TextField',
  },
  {
    name: 'submit',
    label: 'Submit',
    type: 'Button',
    condition: {
      when: 'email',
      is: 'test',
      action: '==',
    },
  },
]
// ...code

func renderForm() {
  return (
    <Form
      fields={fields}
      onSubmit={onSubmit}
    />
  )
}
```
