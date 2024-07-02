import React from 'react';
import { cn } from '../lib/utils';
import sparkleImage from '../assets/sparkle.png';

const MagicSuggestionsButton = () => {
  return (
    <button className='btn btn-circle absolute top-60 right-0 z-40'>
      <img src={sparkleImage} alt='Sparkle' className='h-9 w-9' />
    </button>
  );
};

export default MagicSuggestionsButton;
