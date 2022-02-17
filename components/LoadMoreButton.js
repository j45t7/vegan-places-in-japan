import React from 'react'

export const LoadMoreButton = ({ loadMore }) => {
  return (
    <div className='text-center pt-12'>
      <button
        className='
        btn
        btn-text
        btn-animation
        btn-green
        md:border-2
        '
        onClick={loadMore}
      >
        Load More
      </button>
    </div>
  )
}
