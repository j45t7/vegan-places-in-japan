import React from 'react'
import { InfoWindow } from '@react-google-maps/api'
import Image from 'next/image'

const LocationInfo = ({ position, onCloseClick, info }) => {
  return (
    <InfoWindow
      className='auto'
      position={position}
      onCloseClick={onCloseClick}
    >
      <div className='w-52 md:w-56 h-54'>
        <Image
          src={info.photo.url}
          unoptimized
          alt={info.name}
          width='260px'
          height='125px'
          className='object-cover'
        />
        <ul className='p-2'>
          <li className='text-small md:text-sm font-bold uppercase'>
            {info.name}
          </li>
          <li className='text-small text-gray-500 italic'>{info.address}</li>
        </ul>
      </div>
    </InfoWindow>
  )
}

export default LocationInfo
