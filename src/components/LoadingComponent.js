import React from 'react';

export const Loading = () => {
  return(
    <div className='container spin'>
      <div className='col-12 mt-4'>
        <span className='fa fa-spinner fa-pulse fa-3x fa-fw text-primary fa-lg'></span> 
        <p>Loading . . .</p>
      </div>
      </div>
  )
}