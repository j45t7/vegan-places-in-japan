import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='h-36 bg-peach relative bottom-0 w-full'>
      <h1 className='text-white p-5 text-center'>
        Made with{' '}
        <Image
          width='20'
          height='20'
          src='/pixel-heart.png'
          alt='pixel-heart'
          className='heart'
        />{' '}
        by{' '}
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
