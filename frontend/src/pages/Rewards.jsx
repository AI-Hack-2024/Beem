import { Locate, MapPin } from 'lucide-react';
import { Badge, DropdownMenu, Button } from '@radix-ui/themes';

const Rewards = () => {
  return (
    <div className='flex flex-col p-4 align-center justify-center'>
      <div className='text-left'>
        <div className='flex flex-row justify-between'>
          <h2 className='text-md font-semibold'>Popular nearby</h2>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant='soft'>
                Sydney 2000
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>
                <MapPin /> Search for suburb
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Locate />
                Use my live location
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
        <div className='flex flex-row gap-2 mt-5'>
          {Array(4)
            .fill()
            .map((_, index) => (
              <button key={index} className='flex flex-col rounded-md py-4 px-6 bg-button hover:text-pink'>
                <Badge color='gray'>View by map</Badge>
                <p className='text-left font-medium text-sm'>Ecco Instore</p>
                <p className='text-left font-thin text-sm'>0.1km away</p>
              </button>
            ))}
        </div>
      </div>
      <div className='text-left mt-10'>
        <h2 className='text-md font-semibold'>Explore online offers</h2>
        <div className='grid grid-cols-2 gap-4 mt-3'>
          {Array(6)
            .fill()
            .map((_, index) => (
              <button
                key={index}
                className='flex flex-col hover:text-pink gap-2 text-bold text-black bg-button px-2 py-3 text-base justify-center items-center font-semibold rounded-md'
              >
                <Badge color='gray'>
                  2% cashback on all purchases
                </Badge>
                <p className='text-left font-medium text-sm'>1001 Optometry</p>
                <p className='text-left font-thin text-sm'>Online</p>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;
