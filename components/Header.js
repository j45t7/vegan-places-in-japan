import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const addNewPlace = router.pathname === '/add-new-place' ? false : true
  const handleClick = () => {
    router.push('/')
  }
  return (
    <header className='py-5 h-28 bg-white items-center container mx-auto grid grid-cols-2 content-around'>
      <h1
        onClick={handleClick}
        className='text-lg lg:text-5xl text-green-600 pl-3 font-bold uppercase font-name cursor-pointer whitespace-nowrap'
      >
        <span role='img' aria-label='salad' className='pr-2'>
          🥗
        </span>
        Vegan Places
      </h1>
      <div className='text-right p-5'>
        {addNewPlace && (
          <Link href='/add-new-place' passHref>
            <button className='btn btn-header'>Add New Place</button>
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
