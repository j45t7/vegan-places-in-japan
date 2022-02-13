import React, { useRef, useState, useEffect } from 'react'
import FormInput from './FormInput'
import SelectInput from './SelectInput'
import { submitPlace } from '../services/index'
import { useRouter } from 'next/router'
import { getMealTypes } from '../services/index'
import { getCities } from '../services/index'

const Form = () => {
  const [mealTypes, setMealTypes] = useState([])
  const [cities, setCities] = useState([])
  useEffect(() => {
    getMealTypes().then((mealType) => setMealTypes(mealType))
  }, [])
  useEffect(() => {
    getCities().then((city) => setCities(city))
  }, [])

  const router = useRouter()
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [error, setError] = useState(false)

  const nameElement = useRef()
  const addressElement = useRef()
  const cityElement = useRef()
  const googleUrlElement = useRef()
  const photoUrlElement = useRef()
  const mealTypeElement = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(false)

    const { value: name } = nameElement.current
    const { value: address } = addressElement.current
    const { value: city } = cityElement.current
    const { value: googleUrl } = googleUrlElement.current
    const { value: photoUrl } = photoUrlElement.current
    const { value: mealType } = mealTypeElement.current

    if (!name || !address || !city || !googleUrl || !photoUrl || !mealType) {
      setError(true)
      return
    }

    const placeObj = {
      name,
      address,
      city,
      googleUrl,
      photoUrl,
      mealType,
    }

    submitPlace(placeObj).then((res) => {
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 5000)

      router.push('/')
    })
  }
  return (
    <div className='block p-6 h-full'>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='name'
          refer={nameElement}
          label='Location name'
          aria='location'
        />
        <FormInput
          name='address'
          refer={addressElement}
          label='Location address'
          aria='address'
          helperText='Tell us the full address of the location.'
        />
        <SelectInput
          name='selectType'
          label='Select Meal Type'
          refer={mealTypeElement}
          aria='meal type'
          options={mealTypes}
        />
        <SelectInput
          name='city'
          refer={cityElement}
          label='City'
          aria='city'
          options={cities}
        />
        <FormInput
          name='googleUrl'
          refer={googleUrlElement}
          label='Google map link'
          aria='google map link'
        />
        <FormInput
          name='photoUrl'
          refer={photoUrlElement}
          label='Image link'
          aria='image'
          helperText='The best representation of the place!'
        />
        {error && (
          <p className='text-base text-red-500'>All fields are required</p>
        )}
        <div className='mt-8 flex justify-between'>
          <button
            type='submit'
            className='
            btn
            text-base
            bg-peach
            text-white
            border-2
            border-peach
            hover:bg-white
            hover:text-peach
            transition
            ease-out
            duration-500
            '
          >
            Submit
          </button>
          {showSuccessMessage && (
            <span className='text-xl justify-end font-semibold mt-3 text-green-700'>
              Place submitted for review!
            </span>
          )}
        </div>
      </form>
    </div>
  )
}

export default Form
