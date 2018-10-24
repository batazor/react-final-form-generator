import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export default React.memo(({
  input: {
    checked, value, name, onChange, ...restInput
  },
  meta,
  ...rest
}) => (
  <FormControl style={{ width: '100%' }}>
    <FormControlLabel
      control={
        <Checkbox
          {...rest}
          name={name}
          error={meta.error && meta.touched}
          inputProps={restInput}
          onChange={onChange}
          value={value}
          checked={!!checked}
        />
      }
      label={rest.label}
    />
  </FormControl>
))
