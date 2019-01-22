import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import Checkbox from './Checkbox'
import Radio from './Radio'
import TextField from './TextField'
import Select from './Select'
import Switch from './Switch'
import Button from './Button'
import Recaptcha from './Recaptcha'
import IsCondition from './IsCondition'
import Color from './Color'

class Control extends PureComponent {
  constructor(props) {
    super(props)

    this.control = {
      Switch: ({ condition, ...opt }) => (
        <IsCondition condition={condition}>
          <Field
            {...opt}
            component={Switch}
            fullWidth
            type="checkbox"
          />
        </IsCondition>
      ),
      Checkbox: ({ condition, ...opt }) => (
        <IsCondition condition={condition}>
          <Field
            {...opt}
            component={Checkbox}
            fullWidth
            type="checkbox"
          />
        </IsCondition>
      ),
      Color: ({ condition, ...opt }) => (
        <IsCondition condition={condition}>
          <Field
            {...opt}
            component={Color}
            fullWidth
          />
        </IsCondition>
      ),
      Radio: ({ condition, ...opt }) => (
        <IsCondition condition={condition}>
          <Field
            component={Radio}
            fullWidth
            {...opt}
          />
        </IsCondition>
      ),
      TextField: ({ condition, ...opt }) => (
        <IsCondition condition={condition}>
          <Field
            component={TextField}
            fullWidth
            {...opt}
          />
        </IsCondition>
      ),
      Select: ({ condition, ...opt }) => (
        <IsCondition condition={condition}>
          <Field
            component={Select}
            fullWidth
            {...opt}
          />
        </IsCondition>
      ),
      Button: ({ condition, ...opt }) => (
        <IsCondition condition={condition}>
          <Field
            component={Button}
            fullWidth
            values={opt.values}
            {...opt}
          />
        </IsCondition>
      ),
      Recaptcha: ({ condition, ...opt }) => (
        <IsCondition condition={condition}>
          <Field
            component={Recaptcha}
            fullWidth
            {...opt}
          />
        </IsCondition>
      ),
      Custom: ({ condition, ...opt }) => (
        <IsCondition condition={condition}>
          <Field
            fullWidth
            {...opt}
          />
        </IsCondition>
      ),
    }
  }

  render() {
    const { fields } = this.props

    return fields.map(field => {
      const isFunction = typeof this.control[field.type] === 'function'

      if (isFunction) {
        return React.createElement(this.control[field.type], field)
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
