import React from 'react'

const NavBar = () => {
  return (
    <header className=''>
      <div className='flex justify-between items-center container pt-4 h-16'>
        <a href='#' className='text-xl font-bold text-black'>
          Ha.
        </a>
        <nav className='space-x-8'>
          <a href='#' className='font-medium text-gray-500 hover:text-gray-900'>
            Work
          </a>
          <a href='#' className='font-medium text-gray-500 hover:text-gray-900'>
            Stack
          </a>
          <a href='#' className='font-medium text-gray-500 hover:text-gray-900'>
            Github
          </a>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
