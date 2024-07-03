import { useNavigate } from 'react-router-dom';
import MasonryLayout from '../components/MasonryLayout';
import { Gift, Map, ScanLine } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='relative min-h-screen p-4'>
      <div className='absolute top-0 right-0'>
        <button className='flex flex-row gap-2 bg-button px-2 py-3 text-base font-semibold hover:text-pink rounded-md'>
          <ScanLine />
          Scan
        </button>
      </div>
      <button className='bg-white text-xl font-semibold mt-10 hover:text-pink'>
        ⚡ Setup payments method
      </button>
      <h1 className='my-40 text-4xl text-black font-bold'>
        Let&apos;s Beem It
      </h1>
      <div className='grid grid-rows-3 grid-cols-2 gap-3 mt-10 text-center'>
        <button className='flex flex-row gap-2 text-bold text-black bg-button px-2 py-3 text-base justify-center items-center font-semibold hover:text-pink rounded-md' onClick={() => navigate("/maps")}>
          <Map />
          <p>maps</p>
        </button>
        <button className='flex flex-row gap-2 text-bold text-black bg-button px-2 py-3 text-base justify-center items-center font-semibold hover:text-pink rounded-md' onClick={() => navigate("/rewards")}>
          <Gift />
          <p>rewards</p>
        </button>
        <button className='flex flex-row gap-2 text-bold text-black bg-button px-2 py-3 text-base justify-center items-center font-semibold hover:text-pink rounded-md'>
          pay
        </button>
        <button className='flex flex-row gap-2 text-bold text-black bg-button px-2 py-3 text-base justify-center items-center font-semibold hover:text-pink rounded-md'>
          transfer
        </button>
        <button className='flex flex-row gap-2 text-bold text-black bg-button px-2 py-3 text-base justify-center items-center font-semibold hover:text-pink rounded-md'>
          request
        </button>
        <button className='flex flex-row gap-2 text-bold text-black bg-button px-2 py-3 text-base justify-center items-center font-semibold hover:text-pink rounded-md'>
          split
        </button>
      </div>
      <MasonryLayout />
    </div>
  );
};

export default Home;
