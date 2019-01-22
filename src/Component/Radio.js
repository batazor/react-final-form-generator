import React from 'react'
import PropTypes from 'prop-types'
import Radio from '@material-ui/core/Radio'

const RadioField = React.memo(({
  input: {
    checked, value, name, onChange, ...restInput
  },
  // meta,
  // ...rest
}) => (
  <Radio
    {...rest}
    name={name}
    InputProps={restInput}
    onChange={onChange}
    checked={!!checked}
    value={value}
  />
))

RadioField.defaultProps = {
  // meta: null,
}

RadioField.propTypes = {
  input: PropTypes.object.isRequired,
  // meta: PropTypes.object,
}

export default RadioField
