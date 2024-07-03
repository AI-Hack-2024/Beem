import React from 'react';
import { Rating } from '@smastrom/react-rating';

const SuggestionItem = ({ imageUrl, title, price, rating, matchRate }) => {
  return (
    <div className='card card-side bg-base-100 shadow-xl flex items-center justify-between p-4 hover:bg-slate-300'>
      <figure className="min-w-50">
        <img src={imageUrl} className="w-40 object-cover" alt='Placeholder' />
      </figure>
      <div className='card-body flex-1 ml-4'>
        <h3 className='card-title text-base'>{title}</h3>
        <div className='flex items-center justify-center'>
          <p className='text-base'>${price}/person</p>
          <Rating
            className='ml-2'
            style={{ maxWidth: 180 }}
            value={rating}
            readOnly
          />
        </div>
      </div>
      <div className='tooltip' data-tip='suggestion match rate'>
        <div className='stat-value text-primary'>{matchRate}%</div>
      </div>
    </div>
  );
};

export default SuggestionItem;
