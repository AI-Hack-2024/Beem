import React from 'react';
import sparkleImage from '../assets/sparkle.png';
import SuggestionItem from './SuggestionItem';

const MagicSuggestions = () => {
  const dummyData = [
    {
      id: 1,
      imageUrl:
        'https://cdn.broadsheet.com.au/cache/06/8f/068f34892f2ca0958a7cfb990e1cd518.jpg',
      title: 'Cargo Bar',
      price: '40',
      rating: '4.5',
      statValue: '97.1',
    },
    {
      id: 2,
      imageUrl: 'https://media.timeout.com/images/106076376/750/422/image.jpg',
      title: 'Caterpillar Bar',
      price: '50',
      rating: '2.7',
      statValue: '95.5',
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
              rating={item.rating}
              matchRate={item.statValue}
            />
          ))}
          <button className='btn btn-primary px-32'>Select</button>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default MagicSuggestions;
