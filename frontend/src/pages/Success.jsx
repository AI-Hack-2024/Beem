import { useNavigate, useParams } from 'react-router-dom';

const Success = () => {
  const { action } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='text-bold text-4xl font-bold'>
        You have {action === 'request' ? 'requested' : 'paid'}
        <span className='text-purple'> $10.00</span>{' '}
        {action === 'request' ? 'from' : 'to'}{' '}
        <span className='text-purple'> @wanning </span>for{' '}
        <span className='text-purple'>sharing the Uber ride with me</span>
      </h1>
      <button
        className='text-pink mt-80 font-medium'
        onClick={() => navigate('/')}
      >
        Done
      </button>
    </div>
  );
};

export default Success;
