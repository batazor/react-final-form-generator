import React from 'react'
import Recaptcha from 'react-google-recaptcha'

export default React.memo(({
  input: {
    checked, value, name, onChange, ...restInput
  },
  meta,
  ...rest
}) => (
  <Recaptcha
    {...rest}
    InputProps={restInput}
    onChange={onChange}
  />
))
