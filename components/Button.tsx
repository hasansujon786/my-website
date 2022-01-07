import React from 'react'

const colorSchemes = {
  default: 'text-indigo-600 bg-indigo-200 active:bg-indigo-300 shadow-indigo-200/30 hover:shadow-indigo-200/60',
  primary: 'text-white bg-indigo-600 active:bg-indigo-700 shadow-indigo-200/30 hover:shadow-indigo-600/30',
}

const Button = ({ leftIcon, rightIcon, children, className, href = '#', colorScheme = 'default', ...props }) => {
  return (
    <a
      className={[
        'px-8 py-3 rounded-lg inline-block',
        'shadow-md hover:shadow-lg ease-linear transition-all duration-150',
        colorSchemes[colorScheme],
        className,
      ].join(' ')}
      type='button'
      href={href}
      {...props}
    >
      <span className='flex items-center space-x-2 font-roboto-mono text-base font-medium uppercase'>
        {leftIcon && <span>{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span>{rightIcon}</span>}
      </span>
    </a>
  )
}

export default Button
