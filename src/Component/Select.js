import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

export default ({
  input: {
    checked, value, name, onChange, ...restInput
  },
  meta,
  ...rest
}) => (
  <Select
    {...rest}
    name={name}
    error={meta.error && meta.touched}
    inputProps={restInput}
    onChange={onChange}
    value={value}
    checked={!!checked}
  >
    {
      rest.option.map(item => (
        <MenuItem value={item.value}>
          {item.label}
        </MenuItem>
      ))
    }
  </Select>
)
