import React from 'react'
import Button from '@material-ui/core/Button'

export default React.memo(({
  input, // eslint-disable-line
  ...rest
}) => (
  <Button {...rest} type="submit">
    { rest.label }
  </Button>
))
