import { useParams } from 'react-router-dom';
import map from '../assets/Map.png';

const Action = () => {
  const { action } = useParams();
  console.log(action);
  return (
    <div>
      {action === 'request' && (
        <div className='font-bold flex flex-col'>
            <div className="mb-4 text-5xl text-left">
            Let&apos;s <span className='text-blue'>request</span> from{' '}
            <span className='text-blue'>@joannahe</span> from{' '}
            <span className='text-blue'>sharing the Uber ride with me</span>
          </div>
          <img src={map} />
          <div className="mt-4 text-left text-3xl">
            saved in <span className='text-purple'>#2023_roadtrip</span>
          </div>
        </div>
      )}
      {action === 'pay' && <div className='font-bold text-left flex flex-col'>
          <div className="mb-4 text-5xl text-left">
            Let&apos;s <span className='text-pink'>pay</span> to{' '}
            <span className='text-pink'>@joannahe</span> for{' '}
            <span className='text-pink'>sharing the Uber ride with me</span>
          </div>
          <img src={map}/>
          <div className="mt-4 text-left text-3xl">
            saved in <span className='text-purple'>#2023_roadtrip</span>
          </div>
        </div>}
    </div>
  );
};

export default Action;
