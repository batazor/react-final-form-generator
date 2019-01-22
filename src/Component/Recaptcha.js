import React from 'react'
import PropTypes from 'prop-types'
import Recaptcha from 'react-google-recaptcha'

const RecaptchaField = React.memo(({
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

RecaptchaField.defaultProps = {
  meta: null,
}

RecaptchaField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object,
}

export default RecaptchaField
