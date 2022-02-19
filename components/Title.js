import React from 'react'

const Title = ({ title, icon, aria }) => {
  return (
    <h1 className='text-2xl md:text-3xl font-bold p-5 uppercase'>
      <span role='img' aria-label={aria} className='pr-2'>
        {icon}
      </span>
      {title}
    </h1>
  )
}

export default Title
