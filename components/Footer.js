import React from 'react'

const Footer = () => {
  return (
    <footer className='h-52 bg-peach w-full text-white py-8 text-center'>
      <p className='pb-4'>All your comments and suggestions are welcome!</p>
      <a href='mailto:veganplacesinjapan@gmail.com'>Vegan Places in Japan 💌</a>
      <h1 className='py-10'>
        Made with ❤️ by{' '}
        <a
          className='cursor-pointer'
          target='_blank'
          rel='noreferrer'
          href='https://github.com/j45t7'
        >
          j45t7
        </a>
      </h1>
    </footer>
  )
}

export default Footer
