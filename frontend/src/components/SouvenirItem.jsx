import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

const SouvenirItem = ({ imageUrl, gemName, unlockedDate }) => {
  return (
    <button className='flex flex-col gap-2 text-bold text-black bg-button px-2 py-3 text-base justify-center items-center font-semibold rounded-md'>
      <Avatar.Root className='bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle'>
        <Avatar.Image
          className='h-full w-full rounded-[inherit] object-cover'
          src={imageUrl}
          alt={gemName}
        />
        <Avatar.Fallback
          className='text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium'
          delayMs={600}
        >
          {gemName.charAt(0)}
        </Avatar.Fallback>
      </Avatar.Root>
      <p className='hover:text-pink'>{gemName}</p>{' '}
      <div className='badge badge-primary'>unlocked {unlockedDate}</div>{' '}
    </button>
  );
};

export default SouvenirItem;
