import React from 'react'

const FilterCities = ({ cities, filterCities }) => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold p-5 uppercase'>🏢 Search by Cities</h1>
      <div className='p-3'>
        {cities.map((city) => {
          return (
            <button
              className='btn
              text-xs
              text-peach
              border-peach
              md:border-2
              hover:bg-peach hover:text-white
              transition
              ease-out
              duration-500
              m-3'
              key={city}
              onClick={() => filterCities(city)}
            >
              {city}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default FilterCities
