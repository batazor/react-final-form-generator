# react-final-form-generator

Generating form over react-final-form

#### Feature

+ generation form use JSON
+ condition

### Usage

```js
import Form, { Control } from 'react-final-form-generator'

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

function renderForm() {
  return (
    <Form
      fields={fields}
      onSubmit={onSubmit}
    >
      <Control fields={fieldsOne} />
      <Control fields={fieldsTwo} />
    </Form>
  )
}
```

### TODO

- [] validation
