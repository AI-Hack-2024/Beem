import React from 'react';
import sparkleImage from '../assets/sparkle.png';
import SuggestionItem from './SuggestionItem';

const MagicSuggestions = () => {
  const dummyData = [
    {
      id: 1,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png?20220519031949',
      title: 'Suggested Activity 1',
      price: '$40/person',
      statValue: '97.1%',
    },
    {
      id: 2,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png?20220519031949',
      title: 'Suggested Activity 2',
      price: '$50/person',
      statValue: '95.5%',
    },
  ];
  return (
    <>
      <button
        className='btn btn-circle absolute top-60 right-0 z-40'
        onClick={() => document.getElementById('my_modal_2').showModal()}
      >
        <img src={sparkleImage} alt='Sparkle' className='h-9 w-9' />
      </button>

      <dialog id='my_modal_2' className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>Magic Suggestions</h3>
          <p className='py-4'>
            Based on this group's past activities, these are some activities you
            might like to consider adding to the map
          </p>
          {dummyData.map((item) => (
            <SuggestionItem
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              price={item.price}
              statValue={item.statValue}
            />
          ))}
          <button className='btn btn-primary px-40'>Select</button>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default MagicSuggestions;
