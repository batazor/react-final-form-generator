import React from 'react'
import TextField from '@material-ui/core/TextField'

export default React.memo(({
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
