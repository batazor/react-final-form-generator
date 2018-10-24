import React from 'react'
import Switch from '@material-ui/core/Switch'
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

    <Switch
      {...rest}
      name={name}
      error={meta.error && meta.touched}
      inputProps={restInput}
      onChange={onChange}
      value={value}
      checked={!!checked}
    />
  </FormControl>
)
