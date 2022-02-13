import React from 'react'
import { Marker } from '@react-google-maps/api'
const LocationMarker = ({ icon, position, onClick }) => {
  return (
    <div className='location-marker'>
      <Marker icon={icon} position={position} onClick={onClick} />
    </div>
  )
}

export default LocationMarker
