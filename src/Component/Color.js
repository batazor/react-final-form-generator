/**
* @author: Login Victor <batazor>
* @project: Rightech Analytics=
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TwitterPicker } from 'react-color'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'

class Color extends Component {
  constructor(props) {
    super()

    this.state = {
      color: props.input.value,
      show: false,
    }

    this.onChangeComplete = this.onChangeComplete.bind(this)
    this.onChangeFocus = this.onChangeFocus.bind(this)
  }

  onChangeComplete(color) {
    this.setState({ color: color.hex, show: false })

    // For update value redux-form field
    this.textInput.focus()
    this.textInput.blur()

    this.setState({ color: color.hex, show: false })
  }

  onChangeFocus(show = false) { this.setState({ show }) }

  render() {
    const { input, label } = this.props
    const isCheckType = typeof this.state.color === 'string' || typeof this.state.color === 'number'
    const value = isCheckType ? this.state.color : undefined

    return (
      <FormControl
        fullWidth
        onFocus={() => this.onChangeFocus(true)}
      >
        <TextField
          {...input}
          inputRef={event => { this.textInput = event }}
          label={label || input.name}
          value={value}
          onChange={this.onChangeValue}
        />
        {
          this.state.show ? (
            <TwitterPicker
              key="label"
              color={this.state.color}
              ref={event => { this.colorInput = event }}
              onChangeComplete={this.onChangeComplete}
            />
          ) : null
        }
      </FormControl>
    )
  }
}

Color.defaultProps = {
  input: undefined,
  label: undefined,
}

Color.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
}

export default Color
