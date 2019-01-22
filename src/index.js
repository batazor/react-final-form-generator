import _ from 'lodash'
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'
import Typography from '@material-ui/core/Typography'
import FormHelperText from '@material-ui/core/FormHelperText'
import Control from './Component/Control'

const FormGenerator = React.memo(props => (
  <Form
    onSubmit={props.onSubmit}
    initialValues={props.initialValues}
    render={({ handleSubmit, submitError, values }) => (
      <Fragment>
        <form
          id={props.id}
          className={props.className}
          onSubmit={handleSubmit}
          onChange={props.onChange}
          subscription={{ values: true }}
        >
          <Control
            fields={props.fields || []}
            values={values}
          />
          {props.children}
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
              _.get(submitError, '_error', []).map(issue => (
                <FormHelperText error key={issue}>
                  {issue}
                </FormHelperText>
              ))
            }
          </ul>
        </div>
      </Fragment>
    )}
  />
))

FormGenerator.defaultProps = {
  children: null,
  className: undefined,
  initialValues: {},
  fields: [],

  onChange: () => {},
}

FormGenerator.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.array,
  className: PropTypes.string,
  initialValues: PropTypes.object,
  // style: PropTypes.object,
  fields: PropTypes.array,
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
export Control from './Component/Control'
