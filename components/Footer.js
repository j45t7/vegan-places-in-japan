import React from 'react'

const Footer = () => {
  return (
    <footer className='h-36 bg-peach relative bottom-0 w-full text-white p-5 text-center'>
      <p>All your comments and suggestions are welcome!</p>
      <a href='mailto:veganplacesinjapan@gmail.com'>Vegan Places in Japan 💌</a>
      <h1 className='py-6'>
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
