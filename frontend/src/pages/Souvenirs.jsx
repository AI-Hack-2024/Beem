import * as Avatar from '@radix-ui/react-avatar';
import gem1 from '../assets/1.png';
import gem2 from '../assets/2.png';
import gem3 from '../assets/3.png';
import gem4 from '../assets/4.png';
import gem6 from '../assets/6.png';
import gem7 from '../assets/7.png';
import SouvenirItem from '../components/SouvenirItem';

const Souvenirs = () => {
  return (
    <div className='flex flex-col p-4 align-center justify-center text-left'>
      <h1 className="mb-4 font-bold text-center">Souvenirs</h1>
      <p>Visit more places and perform transactions to gain more souvenirs.</p>
      <p className='mb-10'>Souvenirs are randomly dropped.</p>
      <div className='grid grid-rows-3 grid-cols-2 gap-3 text-center'>
        <SouvenirItem
          imageUrl={gem1}
          gemName='Sydney Harbour Sapphire'
          unlockedDate='13/06/2024'
        />
        <SouvenirItem
          imageUrl={gem2}
          gemName='Coogee Beach Red Emerald'
          unlockedDate='13/06/2024'
        />
        <SouvenirItem
          imageUrl={gem3}
          gemName='Edition Roaster Yellow Diamond'
          unlockedDate='13/06/2024'
        />
        <SouvenirItem
          imageUrl={gem4}
          gemName='IGA Tamworth Blue Topaz'
          unlockedDate='13/06/2024'
        />

        <SouvenirItem
          imageUrl={gem6}
          gemName='Chat Thai Green Garnet'
          unlockedDate='13/06/2024'
        />
        <SouvenirItem
          imageUrl={gem7}
          gemName='Bondi Beach Red Tourmaline'
          unlockedDate='13/06/2024'
        />
      </div>
    </div>
  );
};

export default Souvenirs;
