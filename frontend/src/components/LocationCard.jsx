import React from 'react';

const LocationCard = () => {
  return (
    <div className='card bg-base-100 w-96 shadow-xl z-40 fixed bottom-16'>
      <div className='flex'>
        <figure className='px-2 pt-2'>
          <img
            src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
            alt='Shoes'
            className='rounded-xl'
          />
        </figure>
        <figure className='px-2 pt-2'>
          <img
            src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
            alt='Shoes'
            className='rounded-xl'
          />
        </figure>
      </div>
      <div className=''>
        <div className='flex justify-between py-2'>
          <h2 className='card-title'>Location Name</h2>
          <button className='btn btn-primary btn-sm'>View in AR</button>
        </div>
        <p className='text-left'>
          captured with @joannahe, @wannning at location XYZ on 19:00 2021-09-01
        </p>
      </div>
      <div class='bg-primary text-primary-content rounded p-2'>
        <h2 class='card-title'>Thanks for the fun time</h2>
        <p className='text-left'>@joannahe</p>
      </div>
    </div>
  );
};

export default LocationCard;
