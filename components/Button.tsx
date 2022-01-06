import React from 'react'

const Button = ({ leftIcon, rightIcon, children, href = '#', className, colorScheme = 'bg-white text-gray-800', ...props }) => {
  return (
    <a className={[colorScheme, 'inline-block text-sm shadow active:translate-y-1 transition-all px-5 py-2 font-roboto-mono rounded-lg', className].join(' ')}
      href={href}
      {...props}
    >
      <span className='flex items-center space-x-2'>
        {leftIcon && <span>{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span>{rightIcon}</span>}
      </span>
    </a>
  )
}

export default Button
