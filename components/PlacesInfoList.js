import React from 'react'

const PlacesInfoList = ({ places }) => {
  const list = places.map((place) => (
    <div className='card hover:shadow-lg' key={place.id}>
      <a href={place.googleUrl} target='_blank' rel='noreferrer'>
        <img
          src={place.photo.url}
          alt={place.name}
          className='w-full h-32 sm:h-48 object-cover'
        />
      </a>
      <div className='m-4'>
        <span className='font-bold'>{place.name}</span>
        <span className='block text-gray-500 text-sm'>{place.address}</span>
      </div>
      <div
        className={`${
          place.mealType.name === 'Vegan'
            ? 'bg-green-700'
            : place.mealType.name === 'Veg-Options'
            ? 'bg-orange-700'
            : 'bg-purple-700'
        } badge`}
      >
        <span>{place.mealType.name}</span>
      </div>
    </div>
  ))

  return (
    <div className='container mx-auto px-5 overflow-x-hidden pb-20'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>{list}</div>
    </div>
  )
}

export default PlacesInfoList
