import React from 'react'

const FormInput = ({ label, aria, refer, name, options, icon }) => {
  return (
    <div className='mb-6'>
      <label className=' inline-block mb-2 text-green-700 text-lg'>
        <span className='px-2'>{icon}</span>
        {label}
      </label>
      <select
        type='text'
        ref={refer}
        name={name}
        className='input uppercase'
        aria-describedby={aria}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FormInput
