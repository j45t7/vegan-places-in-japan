import React from 'react'
import { Form, Layout } from '../components'
export default function AddNewPlace() {
  return (
    <Layout>
      <div className='container mx-auto'>
        <div className='lg:px-20'>
          <h1 className='text-3xl font-bold p-5 uppercase'>
            <span role='img' aria-label='salad' className='pr-2'>
              🌱
            </span>
            Add New Place
          </h1>
          <p className='px-5 text-gray-500'>
            The submitted location will be added after few days.
          </p>
          <Form />
        </div>
      </div>
    </Layout>
  )
}
