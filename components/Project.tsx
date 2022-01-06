import React from 'react'

const Project = () => {
  return (
    <div className='flex bg-white shadow-xl rounded-xl border overflow-hidden border-gray-200 w-full h-96 max-w-5xl'>
      <div className='bg-gray-100 flex-1'>
      </div>
      <div
        className="p-6 flex flex-col justify-between text-left w-5/12"
      >
        <div>
          <h3 className="text-2xl font-roboto-mono font-medium text-gray-800">Examples &rarr;</h3>
          <p className="mt-3 text-base">
            Discover and deploy boilerplate example Next.js projects.
          </p>
        </div>

        <div className='flex mt-4 space-x-4 '>
          <a href="#" className='link link--elara font-roboto-mono text-sm text-accent'>
            <span>Github</span>
          </a>
          <span className='text-accent'>|</span>
          <a href="#" className='link link--elara font-roboto-mono text-sm text-accent'>
            <span>Website</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
