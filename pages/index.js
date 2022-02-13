import Head from 'next/head'
import { useState } from 'react'
import { Map, PlacesInfoList, FilterCities, Layout } from '../components'
import { getPlaces } from '../services/index'

export default function Home({ places }) {
  const [filteredCities, setFilteredCities] = useState(places)
  const allCities = ['all', ...new Set(places.map((place) => place.city))]
  console.log(places)
  console.log(allCities)

  const filterCities = (city) => {
    if (city === 'all') {
      setFilteredCities(places)
      return
    }
    const newCity = places.filter((place) => place.city === city)
    setFilteredCities(newCity)
  }

  return (
    <div>
      <Head>
        <title>Vegan Places in Japan</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Header /> */}
      <Layout>
        <FilterCities cities={allCities} filterCities={filterCities} />
        <PlacesInfoList places={filteredCities} />
        <div className='container mx-auto px-2 pb-12'>
          <Map places={places} />
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const places = (await getPlaces()) || []
  return {
    props: { places },
  }
}