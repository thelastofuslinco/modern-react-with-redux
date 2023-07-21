interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  primary?: boolean
  secondary?: boolean
  success?: boolean
  warning?: boolean
  danger?: boolean
  outline?: boolean
  rounded?: boolean
}

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
}: Props) => {
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
      className={`${rest.className} flex items-center gap-2 px-4 py-3 border ${borderRadius} ${bgColor} ${textColor} hover:shadow-md`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
