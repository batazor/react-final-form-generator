import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

Condition.propTypes = {
  when: PropTypes.string.isRequired,
  is: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
}

export default Condition
