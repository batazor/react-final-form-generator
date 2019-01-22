import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

const Text = React.memo(({
  input: {
    checked, value, name, onChange, ...restInput
  },
  meta,
  ...rest
}) => (
  <TextField
    {...rest}
    name={name}
    helperText={meta.touched ? meta.error : undefined}
    error={meta.error && meta.touched}
    inputProps={restInput}
    onChange={onChange}
    type={rest.typeInput || 'text'}
    value={value}
  />
))

Text.defaultProps = {
  meta: null,
}

Text.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object,
}

export default Text
