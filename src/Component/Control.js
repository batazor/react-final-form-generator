import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import Checkbox from './Checkbox'
import Radio from './Radio'
import TextField from './TextField'
import Select from './Select'
import Button from './Button'
import Recaptcha from './Recaptcha'

class Control extends Component {
  constructor(props) {
    super(props)

    this.control = {
      Checkbox: opt => (
        <Field
          component={Checkbox}
          fullWidth
          {...opt}
        />
      ),
      Radio: opt => (
        <Field
          component={Radio}
          fullWidth
          {...opt}
        />
      ),
      TextField: opt => (
        <Field
          component={TextField}
          fullWidth
          type={opt.typeInput || 'text'}
          {...opt}
        />
      ),
      Select: opt => (
        <Field
          component={Select}
          fullWidth
          {...opt}
        />
      ),
      Button: opt => (
        <Field
          component={Button}
          fullWidth
          {...opt}
        />
      ),
      Recaptcha: opt => (
        <Field
          component={Recaptcha}
          fullWidth
          {...opt}
        />
      ),
      Custom: opt => (
        <Field
          fullWidth
          {...opt}
        />
      ),
    }
  }

  render() {
    const { fields } = this.props

    return fields.map(field => {
      const isFunction = typeof this.control[field.type] === 'function'

      if (isFunction) {
        return this.control[field.type]({ ...field })
      }

      console.error('Not found type:', field.type)
      return null
    })
  }
}

Control.defaultProps = {
  fields: {},
}

Control.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.any,
  })),
}

export default Control
