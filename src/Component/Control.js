import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import Checkbox from './Checkbox'
import Radio from './Radio'
import TextField from './TextField'
import Select from './Select'

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

    return fields.map(field => (
      this.control[field.type]({ ...field })
    ))
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
