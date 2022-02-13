import React from 'react'
import { InfoWindow } from '@react-google-maps/api'
// import '../../styles/globals.css'
import Image from 'next/image'

const LocationInfo = ({ position, onCloseClick, info }) => {
  console.log(info)
  return (
    <InfoWindow
      className='auto'
      position={position}
      onCloseClick={onCloseClick}
    >
      <div className='w-64 h-56'>
        <Image
          src={info.photo.url}
          unoptimized
          alt={info.name}
          width='260px'
          height='128px'
          className='object-cover'
        />
        <ul className='p-2'>
          <li className='text-sm font-bold uppercase'>{info.name}</li>
          <li className='text-xs text-gray-500 italic'>{info.address}</li>
        </ul>
      </div>
    </InfoWindow>
  )
}

export default LocationInfo
