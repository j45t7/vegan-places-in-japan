import React from 'react'

const FormInput = ({ label, aria, helperText = '', refer, name, icon }) => {
  return (
    <div className='mb-6'>
      <label
        htmlFor='placeName'
        className=' inline-block mb-2 text-green-700 text-lg'
      >
        <span className='px-2'>{icon}</span>
        {label}
      </label>
      <input
        type='text'
        ref={refer}
        name={name}
        className='input'
        aria-describedby={aria}
      />
      <small className='block mt-1 text-sm text-gray-600'>{helperText}</small>
    </div>
  )
}

export default FormInput
