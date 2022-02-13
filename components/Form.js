import React from 'react'
import FormInput from './FormInput'
const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='block p-6 max-w-screen-lg h-full'>
      <form onSubmit={handleSubmit}>
        <FormInput label='Location name' aria='location' />
        <FormInput
          label='Location address'
          aria='address'
          helperText='Tell us the full address of the location.'
        />
        {/* select for the city */}
        <FormInput label='City' aria='city' />
        <FormInput label='Google map link' aria='google map link' />
        <FormInput
          label='Your comment'
          aria='comment'
          helperText='Tell us what do you think about this place!'
        />
        <FormInput
          label='Image link'
          aria='image'
          helperText='The best representation of the place!'
        />
        <button
          type='submit'
          className='
            btn
            text-xs
            text-peach
            border-peach
            md:border-2
            hover:bg-peach hover:text-white
            transition
            ease-out
            duration-500
            '
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
