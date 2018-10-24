import React from 'react'
import Radio from '@material-ui/core/Radio'

export default React.memo(({
  input: {
    checked, value, name, onChange, ...restInput
  },
  meta,
  ...rest
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
