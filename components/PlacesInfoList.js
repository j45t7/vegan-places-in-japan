import React, { useState, useEffect } from 'react'
import PlaceInfoCard from './PlaceInfoCard'
import { LoadMoreButton } from './LoadMoreButton'
const PlacesInfoList = ({ places, loadedLocations, loadMoreLocations }) => {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    setLocations(places)
  }, [places])

  const list = locations
    .slice(0, loadedLocations)
    .map((place) => <PlaceInfoCard key={place.id} place={place} />)

  return (
    <div className='container mx-auto px-5 overflow-x-hidden pb-20'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>{list}</div>
      {loadedLocations < locations.length ? (
        <LoadMoreButton loadMore={loadMoreLocations} />
      ) : null}
    </div>
  )
}

export default PlacesInfoList
