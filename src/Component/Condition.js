import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'

function filter({ value, action, is }) {
  switch (action) {
    case '>':
      return value > is
    case '>=':
      return value >= is
    case '<':
      return value < is
    case '<=':
      return value <= is
    case '==':
      return value === is
    case '!=':
      return value !== is
    default:
      return true
  }
}

// eslint-disable-next-line
const Condition = React.memo(({ when, is, action, children }) => {
  if (when && is) {
    return (
      <Field name={when} subscription={{ value: true }}>
        {({ input: { value } }) => filter({ value, action, is }) ? children : null}
      </Field>
    )
  }

  return children
})

Condition.propTypes = {
  when: PropTypes.string.isRequired,
  is: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
}

export default Condition
