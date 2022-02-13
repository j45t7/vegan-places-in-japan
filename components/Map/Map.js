import { useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import LocationMarker from '../LocationMarker'
import mapStyles from './mapStyles'
import LocationInfo from '../LocationInfo'

const Map = ({ places, center, zoom, mapContainerStyle, options }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  })

  const [selected, setSelected] = useState(null)

  const handleSelectedMarker = (marker) => {
    setSelected(marker)
  }
  if (loadError) return 'Error loading map'
  if (!isLoaded) return 'Loading map'
  const BASE_URL = 'https://www.svgrepo.com/show/34525/'
  const markers = places.map((marker) => (
    <LocationMarker
      key={marker.id}
      id={marker.id}
      position={{
        lat: marker.location.latitude,
        lng: marker.location.longitude,
      }}
      icon={{
        url: BASE_URL + 'leaf.svg',
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(15, 15),
        scaledSize: new window.google.maps.Size(30, 30),
      }}
      onClick={() => handleSelectedMarker(marker)}
    />
  ))

  return (
    <div className='map'>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        options={options}
      >
        {markers}
        {selected ? (
          <LocationInfo
            position={{
              lat: selected.location.latitude,
              lng: selected.location.longitude,
            }}
            info={selected}
            onCloseClick={() => setSelected(null)}
          />
        ) : null}
      </GoogleMap>
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 34.6873,
    lng: 135.526,
  },
  mapContainerStyle: {
    height: '50vh',
    width: '100%',
  },
  options: {
    styles: mapStyles,
    disableDefaultUI: true,
  },
  zoom: 14,
}

export default Map
