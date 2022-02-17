import React from 'react'

const FormInput = ({ label, aria, helperText = '', refer, name }) => {
  return (
    <div className='mb-6'>
      <label
        htmlFor='placeName'
        className=' inline-block mb-2 text-green-700 text-lg'
      >
        {label}
      </label>
      <input
        type='text'
        ref={refer}
        name={name}
        className='
          block
          w-full
          px-3
          py-3
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-peach
          focus:outline-none'
        aria-describedby={aria}
      />
      <small className='block mt-1 text-sm text-gray-600'>{helperText}</small>
    </div>
  )
}

export default FormInput
