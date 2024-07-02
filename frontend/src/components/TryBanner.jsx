import React from 'react';
import sparkleImage from '../assets/sparkle.png';

const TryBanner = () => {
  // TODO: Move this to the correct position according to the figma
  return (
    <div className='skeleton inline-flex items-center p-2'>
      <img src={sparkleImage} alt='Sparkle' className='h-5 w-5 mr-1' />
      <p className='ml-1'>Try Magic Suggestions</p>
    </div>
  );
};

export default TryBanner;
