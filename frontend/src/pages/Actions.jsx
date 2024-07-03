import { useNavigate, useParams } from 'react-router-dom';
import map from '../assets/Map.png';
import { SwipeableButton } from 'react-swipeable-button';

const Action = () => {
  const { action } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col p-4 align-center justify-center">
      {action === 'request' && (
        <div className='font-bold flex flex-col'>
            <div className="mb-6 text-6xl text-left">
            Let&apos;s <span className='text-blue'>request $10.00</span> from{' '}
            <span className='text-blue'>@wanning</span> from{' '}
            <span className='text-blue'>sharing the Uber ride with me</span>
          </div>
          <img src={map} className="h-60 w-80"/>
          <div className="mt-4 mb-4 text-left text-4xl">
            saved in <span className='text-purple'>#2023_roadtrip</span>
          </div>
        </div>
      )}
      {action === 'pay' && <div className='font-bold text-left flex flex-col'>
          <div className="mb-10 text-6xl text-left">
            Let&apos;s <span className='text-pink'>pay $10.00</span> to{' '}
            <span className='text-pink'>@wanning</span> for{' '}
            <span className='text-pink'>sharing the Uber ride with me</span>
          </div>
          <img src={map} className="h-60 w-80"/>
          <div className="mt-4 mb-4 text-left text-4xl">
            saved in <span className='text-purple'>#2023_roadtrip</span>
          </div>
        </div>}
        <div className="mt-4 w-full max-w-md mx-auto">
        <SwipeableButton 
          text='slide to request'
          color='#0F68F6'
          text_unlocked="yeee"
          onSuccess={() => navigate(`/success/${action}`)}
        />
      </div>
    </div>
  );
};

export default Action;
