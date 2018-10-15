import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

export default ({
  input: {
    checked, value, name, onChange, ...restInput
  },
  meta,
  ...rest
}) => (
  <FormControl style={{ width: '100%' }}>
    <InputLabel htmlFor="controlled-open-select">
      {rest.label}
    </InputLabel>

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
  </FormControl>
)
