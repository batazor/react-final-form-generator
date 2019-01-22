import React from 'react'
import PropTypes from 'prop-types'
import Condition from './Condition'

const IsCondition = props => props.condition ? (
  <Condition {...props.condition}>
    {props.children}
  </Condition>
) : props.children

IsCondition.defaultProps = {
  condition: null,
  children: null,
}

IsCondition.propTypes = {
  condition: PropTypes.any,
  children: PropTypes.node,
}

export default IsCondition
