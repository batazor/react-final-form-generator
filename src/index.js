import _ from 'lodash'
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'
import Typography from '@material-ui/core/Typography'
import Control from './Component/Control'

function FormGenerator(props) {
  return (
    <Form
      onSubmit={props.onSubmit}
      initialValues={props.initialValues}
      render={({ handleSubmit, submitError }) => (
        <Fragment>
          <form
            id={props.id}
            className={props.className}
            onSubmit={handleSubmit}
            onChange={props.onChange}
            subscription={{ values: true }}
          >
            <Control
              fields={props.fields}
            />
          </form>
          <div>
            {
              _.get(submitError, '_error', []).forEach(error => (
                <Typography variant="subtitle1" gutterBottom>
                  We have probelem: {error}
                </Typography>
              ))
            }

            <ul>
              {
                submitError && submitError._error.length > 0 && (
                  <Typography variant="subtitle1" gutterBottom>
                    We have probelem: {submitError._error.length}
                  </Typography>
                )
              }
              {
                _.get(submitError, '_error', []).map((issue, index) => <FormHelperText error key={index}>{issue}</FormHelperText>) // eslint-disable-line
              }
            </ul>
          </div>
        </Fragment>
      )}
    />
  )
}

FormGenerator.defaultProps = {
  className: undefined,
  initialValues: {},

  onChange: () => {},
}

FormGenerator.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  initialValues: PropTypes.object,
  // style: PropTypes.object,
  fields: PropTypes.array.isRequired,
  // pristine: PropTypes.bool.isRequired,
  // submitting: PropTypes.bool.isRequired,
  // valid: PropTypes.bool.isRequired,
  // classes: PropTypes.object.isRequired,

  // I18N: PropTypes.object.isRequired,
  // currentLocale: PropTypes.string.isRequired,

  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func,
}

export default FormGenerator
