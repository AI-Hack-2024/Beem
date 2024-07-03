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
    document.getElementById('upload_modal').showModal();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the file upload
      console.log('File uploaded:', file);
      setIsModalOpen(false); // Close the modal after file upload
      document.getElementById('upload_modal').close();
    }
  };

  return (
    <div className="flex flex-col p-4 align-center justify-center">
      <dialog id='my_modal_3' className="modal">
        <div className="modal-box flex flex-col justify-center">
          <h3 className="font-bold text-lg">Upload Image</h3>
          <p className="py-4">Please select an image to upload.</p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="mb-4"
          />
          <button
            className="btn btn-primary px-32"
            onClick={() => {
              setIsModalOpen(false);
              document.getElementById('upload_modal').close();
            }}
          >
            Cancel
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="py-4"></div>
      {action === 'request' && (
        <>
        <div className="top-0 absolute py-2 flex flex-row right-4">
          <img src={camera} onClick={handleCameraClick} style={{ cursor: 'pointer' }} />
          <img src={sticker} />
        </div>
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
        </>
      )}
      {action === 'pay' && (
        <>
        <div className="top-0 absolute py-2 flex flex-row right-4">
          <img src={camera} onClick={handleCameraClick} style={{ cursor: 'pointer' }} />
          <img src={sticker} />
        </div>
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
        </>
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
