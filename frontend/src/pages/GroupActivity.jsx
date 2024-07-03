import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Card, Text, Flex } from '@radix-ui/themes';
import Map from './Map';

const GroupActivity = () => {
  const { name, emoji } = useParams();
  const [filter, setFilter] = useState('balances');

  const parseEmoji = (emoji) => {
    if (emoji === 'sunglasses') {
      return '🕶️';
    } else if (emoji === 'laptop') {
      return '💻';
    } else if (emoji === 'nails') {
      return '💅';
    }
  };

  return (
    <div>
      <h1 className='text-md font-semibold mb-3'>{name}</h1>
      <p className='text-6xl mb-2'>{parseEmoji(emoji)}</p>
      <div className='flex flex-row gap-10 justify-center items-center mt-10'>
        <p
          className={`font-medium ${filter === 'balances' ? 'underline' : ''}`}
          onClick={() => setFilter('balances')}
        >
          Balances
        </p>
        <p
          className={`font-medium ${filter === 'expenses' ? 'underline' : ''}`}
          onClick={() => setFilter('expenses')}
        >
          Expenses
        </p>
        <p
          className={`font-medium ${filter === 'activity' ? 'underline' : ''}`}
          onClick={() => setFilter('activity')}
        >
          Activity
        </p>
        <p
          className={`font-medium ${filter === 'memories' ? 'underline' : ''}`}
          onClick={() => setFilter('memories')}
        >
          Memories
        </p>
      </div>
      <div className='mt-6'>
        {filter === 'balances' && (
          <div className='flex flex-col'>
            <Card className='mb-4'>
              <div className='flex flex-col justify-center items-center py-2 text-center'>
                <Flex className='w-full' justify='between'>
                  <Text>You are square</Text>
                  <Text>$0.00</Text>
                </Flex>
              </div>
            </Card>
            <Card className='mb-4'>
              <div className='flex flex-col justify-center items-center py-2 text-center'>
                <Flex className='w-full' justify='between'>
                  <Text>@wanning is square</Text>
                  <Text>$0.00</Text>
                </Flex>
              </div>
            </Card>
          </div>
        )}
        {filter === 'memories' && (
          <div className='flex flex-col'>
            {/* <p className='font-bold text-sm text-left'>9 May 2023</p>
            <Card className='mt-4'>
              <div className='flex flex-col justify-center items-center py-2 text-center'>
                <Flex className='w-full' justify='between'>
                  <Text>Brunch with @joannahe @wanning at Speedos Bondi</Text>
                </Flex>
              </div>
            </Card>
            <Card className='mt-4'>
              <div className='flex flex-col justify-center items-center py-2 text-center'>
                <Flex className='w-full' justify='between'>
                  <Text>Dessert with @joannahe @wanning at Anita Gelato</Text>
                </Flex>
              </div>
            </Card> */}
            <Map />
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupActivity;
