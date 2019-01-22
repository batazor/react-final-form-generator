import React from 'react'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

const SelectField = React.memo(({
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
        (rest.option || []).map(item => (
          <MenuItem value={item.value} key={item.label}>
            {item.label}
          </MenuItem>
        ))
      }
    </Select>
  </FormControl>
))

SelectField.defaultProps = {
  meta: null,
  label: null,
}

SelectField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object,
  label: PropTypes.string,
}

export default SelectField
