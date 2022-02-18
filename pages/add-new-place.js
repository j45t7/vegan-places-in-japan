import React from 'react'
import Head from 'next/head'
import { Form, Layout } from '../components'
export default function AddNewPlace() {
  return (
    <div>
      <Head>
        <title>Vegan Places in Japan</title>
        <meta
          name='description'
          content='Find the vegan options around Japan!'
        />
        <meta
          name='keywords'
          content='vegan restaurants, vegetarian restaurants, healthy, health food stores, vegan, vegan-friendly, dining, options, guide, vegetarian, restaurant directory, organic, raw food, vegetarian food, foods, cookbooks, vegetarianism, veganism, travel, recipes, nutrition, vegan places'
        />
        <meta property='og:title' content='Vegan Places in Japan' />
        <meta property='og:description' content='Vegan options around Japan!' />
        <meta
          property='og:url'
          content='https://veganplacesinjapan.vercel.app/add-new-place'
        />
        <meta property='og:type' content='website' />
        <link rel='icon' href='/leaf.svg' />
      </Head>

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
    </div>
  )
}
