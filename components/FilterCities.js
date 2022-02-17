const FilterCities = ({ cities, filterCities }) => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-2xl md:text-3xl font-bold p-5 uppercase'>
        🏢 Search by Cities
      </h1>
      <div className='block md:hidden px-4 pb-6 '>
        <select
          className='
          w-full
          px-3
          py-3
          text-base
          font-normal
          uppercase
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-peach
          focus:outline-none'
          name='selectCity'
          aria-describedby='city'
          onChange={(e) => filterCities(e.target.value)}
        >
          {cities.map((city) => {
            return (
              <option key={city} value={city}>
                {city}
              </option>
            )
          })}
        </select>
      </div>

      <div className='hidden md:block p-3'>
        {cities.map((city) => {
          return (
            <button
              className='btn
              text-xs
              text-peach
              border-peach
              md:border-2
              hover:bg-peach hover:text-white focus:bg-peach focus:text-white
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
