import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  let bgColor = 'border-blue-500 bg-blue-500'
  let borderRadius = undefined
  let textColor = 'text-white'

  if (rounded) borderRadius = 'rounded-full'
  if (outline) {
    bgColor = 'bg-white'
    primary && (textColor = 'text-blue-500')
    secondary && (textColor = 'text-gray-900')
    success && (textColor = 'text-green-500')
    warning && (textColor = 'text-yellow-400')
    danger && (textColor = 'text-red-500')
  } else if (secondary) bgColor = 'border-gray-900 bg-gray-900'
  else if (success) bgColor = 'border-green-600 bg-green-500'
  else if (warning) bgColor = 'border-yellow-400 bg-yellow-400'
  else if (danger) bgColor = 'border-red-500 bg-red-500'

  return (
    <button
      className={`${rest.className} flex items-center gap-2 px-6 py-3 border ${borderRadius} ${bgColor} ${textColor} hover:shadow-md`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button

Button.propTypes = {
  checkPropsValidation: ({ primary, secondary, success, warning, danger }) => {
    const number =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger)

    if (number > 1) {
      return Error('chose one prop beteewn')
    }
  },
  children: PropTypes.node,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool
}
