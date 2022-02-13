import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const addNewPlace = router.pathname === '/add-new-place' ? false : true

  return (
    <header className='py-5 h-28 bg-white items-center container mx-auto grid grid-cols-2 content-around'>
      <h1 className='text-base lg:text-5xl text-green-600 pl-3 font-bold uppercase font-name'>
        <span role='img' aria-label='salad' className='pr-2'>
          🥗
        </span>
        Vegan Places
      </h1>
      <div className='text-right p-5'>
        {addNewPlace && (
          <Link href='/add-new-place'>
            <button
              className='
              max-w-48
              lg:px-5
              btn
              bg-peach
              text-white
              text-xs
              lg:text-lg
              hover:shadow-inner
              transform
              hover:scale-125
              transition
              ease-out
              duration-300'
            >
              Add New Place
            </button>
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
