import React from 'react'

const PlaceInfoCard = ({ place }) => {
  return (
    <div className='card hover:shadow-lg'>
      <a href={place.googleUrl} target='_blank' rel='noreferrer'>
        <img
          loading='lazy'
          src={place.photo.url}
          alt={place.name}
          className='w-full h-32 sm:h-48 object-cover cursor-pointer'
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
  )
}

export default PlaceInfoCard
