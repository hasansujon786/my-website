import React from 'react'

const Footer = () => {
  return (
    <footer id='contact' className='bg-gray-800 flex items-center justify-center h-20'>
      <div className='max-w-5xl flex justify-between w-full'>
        <div className='flex items-baseline space-x-1'>
          <a href='#' className='text-xs text-gray-400 hover:underline hover:text-white'>
            Hasan Mahmud | RN & Full-stack Dev
          </a>
        </div>
        <nav className='flex space-x-4'>
          <a
            className='text-xs text-gray-400 hover:underline hover:text-white'
            href='https://github.com/hasansujon786'
            target='_blank'
          >
            Github
          </a>
          <a
            className='text-xs text-gray-400 hover:underline hover:text-white'
            href='https://www.linkedin.com/in/hasan-sujon-211b698b/'
            target='_blank'
          >
            Linked
          </a>
          <a
            className='text-xs text-gray-400 hover:underline hover:text-white'
            href='https://twitter.com/hasansujon786'
            target='_blank'
          >
            Twitter
          </a>
          {/* <a href="#" target='_blank' className='block text-xs text-gray-400 hover:underline'>Privacy</a> */}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
