import sparkleImage from '../assets/sparkle.png';
import SuggestionItem from './SuggestionItem';
import { useEffect, useState } from 'react';
import { Spinner } from '@radix-ui/themes';
import { dummyData, randomiseSuggestions } from '../lib/suggestions';

const MagicSuggestions = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let timer;
    if (isModalOpen) {
      setIsLoaded(false);
      timer = setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isModalOpen]);


  return (
    <>
      <button
        className='btn btn-circle absolute top-60 right-0 z-40'
        onClick={() => {
          document.getElementById('my_modal_2').showModal();
          setIsModalOpen(true);
        }}
      >
        <img src={sparkleImage} alt='Sparkle' className='h-9 w-9' />
      </button>

      <dialog id='my_modal_2' className='modal'>
        <div className='modal-box flex flex-col justify-center'>
          <h3 className='font-bold text-lg'>Magic Suggestions</h3>
          <p className='py-4'>
            Based on this group&apos;s past activities, these are some
            activities you might like to consider adding to the map
          </p>
          {isLoaded ? (
            randomiseSuggestions(dummyData).map((item) => (
              <SuggestionItem
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                rating={item.rating}
                matchRate={item.statValue}
              />
            ))
          ) : (
            <div className='flex justify-center mb-6'>
              <Spinner size='3' />
            </div>
          )}
          <button
            className='btn btn-primary px-32'
            onClick={() => document.getElementById('my_modal_2').close()}
          >
            Select
          </button>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default MagicSuggestions;
