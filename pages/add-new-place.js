import React from 'react'
import Head from 'next/head'
import { Form, Layout, Title } from '../components'
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
        <meta
          property='og:description'
          content='There are not many vegan or vegetarian food restaurants in Japan. Vegan Places in Japan is a guide to vegan options around Japan! Share you favorites spots!'
        />
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
            <Title title='Add New Place' icon='🌱' aria='sprout' />
            <p className='text-sm px-6 text-gray-500'>
              The submitted location will be added after few days.
            </p>
            <Form />
          </div>
        </div>
      </Layout>
    </div>
  )
}
