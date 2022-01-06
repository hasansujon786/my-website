// import Link from 'next/link'
// import Layout from '../components/Layout'

// const IndexPage = () => (
//   <Layout title="Home | Next.js + TypeScript Example">
//     <h1>Hello Next.js 👋</h1>
//     <p>
//       <Link href="/about">
//         <a>About</a>
//       </Link>
//     </p>
//   </Layout>
// )

// export default IndexPage

import Head from 'next/head'
import SocialLinks from '../components/SocialLinks'
import Project from '../components/Project'
import Button from '../components/Button'

export default function IndexPage() {
  return (
    <div className='bg-white'>
      <Head>
        <title>Hasan Mahmud | RN & Full-stack Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col bg-gray-100 min-h-screen'>
        <header className=''>
          <div className='flex justify-between items-center max-w-5xl mx-auto mt-4 h-16'>
            <a href="#" className='text-xl font-bold text-black'>Ha.</a>
            <nav className='space-x-6'>
              <a href="#work" className='link link--elara text-sm text-gray-500 hover:text-accent '>
                <span>Work</span>
              </a>
              <a href="#stack" className='link link--elara text-sm text-gray-500 hover:text-accent '>
                <span>Stack</span>
              </a>
              {/* <a href="#contact" className='link link--elara text-sm text-gray-500 hover:text-accent '> */}
              {/*   <span>Contact</span> */}
              {/* </a> */}
            </nav>
          </div>
        </header>

        <section className='flex-1 mt-16 flex justify-between w-full max-w-6xl mx-auto'>
          <div className='bg-indigo-000 flex-1'>
            <div className='flex' >
              {/* SocialLinks */}
              <div className='flex flex-col items-start justify-end'>
                <div>
                  <SocialLinks />
                </div>
              </div>
              {/* intro */}
              <div className='ml-6'>
                <h2 className='font-roboto-mono text-accent'>Hi, I'm Hasan <span className='text-lg'>👋</span></h2>
                <h1 className='text-[40px] leading-tight font-medium font-roboto-mono text-gray-800'>
                  React Native & <br /> Full-stack Developer
                </h1>
                <p className='mt-2 max-w-lg text-gray-600 text-lg'>
                  I build beautiful, cross platform mobile apss & web sites with the fastest technology out
                  there, that get you <br /> real result. <span className='text-lg'>🚀</span>
                </p>
                <p className='mt-2 max-w-lg text-gray-600 text-lg'>
                  With over two years experience conceptualizing and crafting digital products.
                  Specialized with Pixel Perfect Design & Web animation. <span className='text-lg'>✨️</span>
                </p>
                <div className='mt-8 space-x-4 flex' >
                  <Button
                    colorScheme='bg-accent text-white'
                    href='mailto:hsasansujon786@gmail.com'
                    leftIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>}
                  >
                    Contact me
                  </Button>
                  <Button
                    leftIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>}
                  >
                    Download CV
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* image */}
          <div className='mr-8'>
            <div className='bg-gray-300 w-72 h-72 rounded-full'></div>
          </div>
        </section>
        <div className="flex items-center justify-center w-full h-8 bg-white border-t"></div>
      </main>


      <section id='work' className='flex space-y-16 pt-16 pb-24 flex-col items-center min-h-screen'>
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </section>


      <section>
        {/* contact */}
        <div className='px-4 pt-24 pb-20 text-center text-white bg-accent'>
          <p style={{ lineHeight: 1.1 }} className='max-w-4xl text-gray-200 mx-auto text-6xl font-bold uppercase font-roboto-mono'>
            Let's w🚀rk
            <br />
            t_g_th_r
          </p>
          <div className='inline-block mt-8'>
            <a href='mailto:hsasansujon786@gmail.com' className='inline-block text-xl underline px-5 py-2 text-white'>hsasansujon@gmail.com</a>
          </div>
        </div>
      </section>

      <footer id='contact' className='bg-gray-800 flex items-center justify-center h-20'>
        <div className='max-w-5xl flex justify-between w-full'>
          <div className='flex items-baseline space-x-1'>
            <a href="#" className='text-xs text-gray-400 hover:underline hover:text-white'>Hasan Mahmud | RN & Full-stack Dev</a>
          </div>
          <nav className='flex space-x-4'>
            <a className='text-xs text-gray-400 hover:underline hover:text-white' href='https://github.com/hasansujon786' target='_blank' >Github</a>
            <a className='text-xs text-gray-400 hover:underline hover:text-white' href='https://www.linkedin.com/in/hasan-sujon-211b698b/' target='_blank'>Linked</a>
            <a className='text-xs text-gray-400 hover:underline hover:text-white' href='https://twitter.com/hasansujon786' target='_blank'>Twitter</a>
            {/* <a href="#" target='_blank' className='block text-xs text-gray-400 hover:underline'>Privacy</a> */}
          </nav>
        </div>
      </footer>
    </div>
  )
}
