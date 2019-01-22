import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const CheckboxField = React.memo(({
  input: {
    checked, value, name, onChange, ...restInput
  },
  meta,
  ...rest
}) => (
  <FormControl style={{ width: '100%' }}>
    <FormControlLabel
      control={(
        <Checkbox
          {...rest}
          name={name}
          error={meta.error && meta.touched}
          inputProps={restInput}
          onChange={onChange}
          value={value}
          checked={!!checked}
          fullWidth={rest.fullWidth}
        />
      )}
      label={rest.label}
    />
  </FormControl>
))

CheckboxField.defaultProps = {
  meta: null,
  label: null,
}

CheckboxField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object,
  label: PropTypes.string,
}

export default CheckboxField
