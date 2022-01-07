import Head from 'next/head'
import Project from '../components/Project'
import Button from '../components/Button'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import CTA from '../components/CTA'
import { Download, Mail } from '../components/Icons'

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Hasan Mahmud | RN & Full-stack Dev</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-gray-100'>
        <NavBar />
        <section className='flex-1 mt-12 flex justify-between container'>
          <div>
            <h2 className='text-indigo-900'>
              <span className='text-xl'>👋</span>{' '}
              <span className='font-roboto-mono font-medium text-xl'>I'm Hasan Mahmud</span>
            </h2>
            <h1 className='text-6xl mt-1 font-bold tracking-wide text-gray-900'>
              React Native & <br /> <span className='text-indigo-700'>Full-stack Developer</span>
            </h1>
            <p className='mt-3 text-xl text-gray-500 max-w-xl'>
              I build beautiful, cross platform mobile apss & web sites with the fastest technology out there, that get
              you <br /> real result. <span className='text-lg'>🚀</span>
            </p>

            <p className='mt-3 text-xl text-gray-500 max-w-xl'>
              With over two years experience conceptualizing and crafting digital products. Specialized with Pixel
              Perfect Design & Web animation. <span className='text-lg'>✨️</span>
            </p>
            <div className='mt-8 space-x-4 flex'>
              {/* href='mailto:hsasansujon786@gmail.com' */}
              <Button colorScheme='primary' leftIcon={Mail}>
                Contact me
              </Button>
              <Button leftIcon={Download}>Download CV</Button>
            </div>
          </div>

          {/* image */}
          <div className='mr-3'>
            <div className='bg-gray-300 w-72 h-72 rounded-full'></div>
          </div>
        </section>
        <div className='h-28 border-b'></div>
      </main>

      <section id='work' className='space-y-16 pt-16 pb-24 flex flex-col items-center'>
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </section>

      <CTA />

      <Footer />
    </div>
  )
}
