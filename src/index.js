import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import { Form, Field } from 'react-final-form'
import Control from './Component/Control'

const styles = theme => ({
  Form: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
  },
  Input: {
    margin: `${theme.spacing.unit}px 0`,
  },
})

class FormGenerator extends Component {
  static propTypes = {
    formId: PropTypes.string,
    // className: PropTypes.string,
    // style: PropTypes.object,
    fields: PropTypes.array.isRequired,
    // pristine: PropTypes.bool.isRequired,
    // submitting: PropTypes.bool.isRequired,
    // valid: PropTypes.bool.isRequired,
    // classes: PropTypes.object.isRequired,

    // I18N: PropTypes.object.isRequired,
    // currentLocale: PropTypes.string.isRequired,

    handleSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func,
  }

  render() {
    <Form
      onSubmit={this.props.onSubmit}
      initialValues={this.props.initialValues}
      render={({ handleSubmit }) => (
        <form id={formId} onSubmit={handleSubmit}>
          <Control
            fields={this.props.fields}
          />
        </form>
      )}
    />
  }
}

export default FormGenerator
