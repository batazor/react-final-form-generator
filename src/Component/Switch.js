import React from 'react'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const SwitchField = React.memo(({
  input: {
    checked, value, name, onChange, ...restInput
  },
  meta,
  ...rest
}) => (
  <FormControl style={{ width: '100%' }}>
    <FormControlLabel
      control={(
        <Switch
          {...rest}
          name={name}
          error={meta.error && meta.touched}
          inputProps={restInput}
          onChange={onChange}
          value={value}
          checked={!!checked}
        />
      )}
      label={rest.label}
    />
  </FormControl>
))

SwitchField.defaultProps = {
  meta: null,
  label: null,
}

SwitchField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object,
  label: PropTypes.string,
}

export default SwitchField
