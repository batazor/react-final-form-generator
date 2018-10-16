import React from 'react'
import Button from '@material-ui/core/Button'

export default ({
  input, // eslint-disable-line
  ...rest
}) => (
  <Button type="submit" disabled={rest.disabled}>
    { input.name }
  </Button>
)
