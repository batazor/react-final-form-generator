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
          {...opt}
        />
      ),
      Radio: opt => (
        <Field
          component={Radio}
          {...opt}
        />
      ),
      TextField: opt => (
        <Field
          component={TextField}
          {...opt}
        />
      ),
      Select: opt => (
        <Field
          component={Select}
          {...opt}
        />
      ),
      Custom: opt => (
        <Field {...opt} />
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
