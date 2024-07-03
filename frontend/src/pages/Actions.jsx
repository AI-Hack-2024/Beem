import { useNavigate, useParams } from 'react-router-dom';
import { useRef, useState } from 'react';
import map from '../assets/Map.png';
import camera from '../assets/image 13.png';
import sticker from '../assets/Rectangle 12.png';
import { SwipeableButton } from 'react-swipeable-button';

const Action = () => {
  const { action } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCameraClick = () => {
    setIsModalOpen(true);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the file upload
      console.log('File uploaded:', file);
      setIsModalOpen(false); // Close the modal after file upload
    }
  };

  return (
    <div className="flex flex-col p-4 align-center justify-center">
      <div className="top-0 absolute py-2 flex flex-row right-4">
        <img src={camera} onClick={handleCameraClick} style={{ cursor: 'pointer' }} />
        <img src={sticker} />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Upload Image</h2>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <div className="py-4"></div>
      {action === 'request' && (
        <div className='font-bold flex flex-col'>
          <div className="mb-6 text-6xl text-left">
            Let&apos;s <span className='text-blue'>request $10.00</span> from{' '}
            <span className='text-blue'>@wanning</span> from{' '}
            <span className='text-blue'>sharing the Uber ride with me</span>
          </div>
          <img src={map} className="h-60 w-80" />
          <div className="mt-4 mb-4 text-left text-4xl">
            saved in <span className='text-purple'>#2023_roadtrip</span>
          </div>
        </div>
      )}
      {action === 'pay' && (
        <div className='font-bold text-left flex flex-col'>
          <div className="mb-10 text-6xl text-left">
            Let&apos;s <span className='text-pink'>pay $10.00</span> to{' '}
            <span className='text-pink'>@wanning</span> for{' '}
            <span className='text-pink'>sharing the Uber ride with me</span>
          </div>
          <img src={map} className="h-60 w-80" />
          <div className="mt-4 mb-4 text-left text-4xl">
            saved in <span className='text-purple'>#2023_roadtrip</span>
          </div>
        </div>
      )}
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
