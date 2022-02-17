const FilterCities = ({ cities, filterCities }) => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-2xl md:text-3xl font-bold p-5 uppercase'>
        🏢 Search by Cities
      </h1>
      <div className='block md:hidden px-4 pb-6 '>
        <select
          className='input uppercase'
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
              btn-peach-border
              btn-animation'
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
