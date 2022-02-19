import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Map, PlacesInfoList, FilterCities, Layout } from '../components'
import { getPlaces } from '../services/index'

const INITIAL_NUMBER_OF_LOADED_PLACES = 3

export default function Home({ places }) {
  const [filteredCities, setFilteredCities] = useState(places)
  const [loadedLocations, setLoadedLocations] = useState(
    INITIAL_NUMBER_OF_LOADED_PLACES
  )

  const loadMoreLocations = () => {
    setLoadedLocations(
      (prevValue) => prevValue + INITIAL_NUMBER_OF_LOADED_PLACES
    )
  }

  const allCities = ['all', ...new Set(places.map((place) => place.city.name))]

  const filterCities = (city) => {
    if (city === 'all') {
      setFilteredCities(places)
      return
    }
    const newCity = places.filter((place) => place.city.name === city)
    setFilteredCities(newCity)
    setLoadedLocations(INITIAL_NUMBER_OF_LOADED_PLACES)
  }

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
          content='https://veganplacesinjapan.vercel.app/'
        />
        <meta property='og:type' content='website' />
        <link rel='icon' href='/leaf.svg' />
      </Head>
      <Layout>
        <FilterCities cities={allCities} filterCities={filterCities} />
        <PlacesInfoList
          places={filteredCities}
          loadedLocations={loadedLocations}
          loadMoreLocations={loadMoreLocations}
        />
        <Map places={places} />
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
