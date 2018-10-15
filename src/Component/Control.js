import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Checkbox from './Checkbox'
import Radio from './Radio'
import TextField from './Radio'

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
      Custom: opt => (
        <Field {...opt} />
      ),
    }
  }

  render() {
    const { data, onChange } = this.props

    return this.control[fields.type]({ ...data })

    return fields.map(item => (
      this.control[item.type]({ ...item })
    ))
  }
}

Control.defaultProps = {
  fields: {},
}

Control.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.type.isRequired,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.any,
  })),
}

export default Control
