import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import Checkbox from './Checkbox'
import Radio from './Radio'
import TextField from './TextField'
import Select from './Select'
import Switch from './Switch'
import Button from './Button'
import Recaptcha from './Recaptcha'
import Condition from './Condition'
import Color from './Color'

class Control extends Component {
  constructor(props) {
    super(props)

    this.control = {
      Switch: opt => (
        <Condition {...opt.condition}>
          <Field
            component={Switch}
            fullWidth
            {...opt}
          />
        </Condition>
      ),
      Checkbox: opt => (
        <Condition {...opt.condition}>
          <Field
            component={Checkbox}
            fullWidth
            {...opt}
          />
        </Condition>
      ),
      Color: opt => (
        <Condition {...opt.condition}>
          <Field
            component={Color}
            fullWidth
            {...opt}
          />
        </Condition>
      ),
      Radio: opt => (
        <Condition {...opt.condition}>
          <Field
            component={Radio}
            fullWidth
            {...opt}
          />
        </Condition>
      ),
      TextField: opt => (
        <Condition {...opt.condition}>
          <Field
            component={TextField}
            fullWidth
            {...opt}
          />
        </Condition>
      ),
      Select: opt => (
        <Condition {...opt.condition}>
          <Field
            component={Select}
            fullWidth
            {...opt}
          />
        </Condition>
      ),
      Button: opt => (
        <Condition {...opt.condition}>
          <Field
            component={Button}
            fullWidth
            values={opt.values}
            {...opt}
          />
        </Condition>
      ),
      Recaptcha: opt => (
        <Condition {...opt.condition}>
          <Field
            component={Recaptcha}
            fullWidth
            {...opt}
          />
        </Condition>
      ),
      Custom: opt => (
        <Condition {...opt.condition}>
          <Field
            fullWidth
            {...opt}
          />
        </Condition>
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
