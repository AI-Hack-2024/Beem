import { useNavigate } from 'react-router-dom';
import MasonryLayout from '../components/MasonryLayout';
import { Gift, Map, ScanLine } from 'lucide-react';
import { useState } from 'react';
import { AlertDialog, Flex, Card, Box, Text, Heading } from '@radix-ui/themes';
import SuggestionItem from '../components/SuggestionItem';

const Home = () => {
  const [isMergeMap, setIsMergeMap] = useState(false);
  const navigate = useNavigate();
  const dummyData = [
    {
      id: 1,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png?20220519031949',
      title: 'Activity 1',
      price: '40',
      rating: '4.5',
      statValue: '97.1',
    },
    {
      id: 2,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png?20220519031949',
      title: 'Activity 2',
      price: '50',
      rating: '2.7',
      statValue: '95.5',
    },
  ];

  return (
    <div className='relative min-h-screen p-4'>
      <div className='absolute top-0 right-0'>
        <button className='flex flex-row gap-2 bg-button px-5 py-3 text-base font-semibold hover:text-pink rounded-md'>
          <ScanLine />
          Scan
        </button>
      </div>
      <button className='bg-white text-xl font-semibold mt-14 hover:text-pink px-5 py-3 rounded-md'>
        ⚡ Setup payments method
      </button>
      <h1 className='my-20 text-4xl text-black font-bold'>
        Let&apos;s Beem It
      </h1>
      {isMergeMap && (
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Card className='mb-4'>
              <div className='flex flex-col justify-center items-center py-5 text-center'>
                <Box>
                  <Heading as='h2' weight='medium'>
                    Merge maps
                  </Heading>
                  <Text as='div' size='2'>
                    I want to merge maps with <span style={{ color: '#6C63FF', fontWeight: 'bold' }}>@joannahe</span> and <span style={{ color: '#6C63FF', fontWeight: 'bold' }}>@wanning</span>.
                  </Text>
                  <button className='bg-purple py-2 px-4 rounded-md mt-3 text-sm font-medium text-white'>
                    Begin merging
                  </button>
                </Box>
              </div>
            </Card>
          </AlertDialog.Trigger>
          <AlertDialog.Content maxWidth='450px'>
            <AlertDialog.Title>Merge maps</AlertDialog.Title>
            <AlertDialog.Description size='2'>
              Based on <span style={{ color: '#6C63FF', fontWeight: 'bold' }}>@joannahe</span> and <span style={{ color: '#6C63FF', fontWeight: 'bold' }}>@wanning</span>’s past activities, these are some
              activities you might like to consider adding to the map
              <div className="space-y-2">
              {dummyData.map((item) => (
                <div key={item.id} className="flex flex-row gap-2 rounded-2xl">
                  <SuggestionItem
                    key={item.id}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    matchRate={item.statValue}
                  />
                </div>
              ))}
              </div>
            </AlertDialog.Description>
            <Flex gap='3' mt='4' justify='end'>
              <AlertDialog.Cancel>
                <button
                  className='bg-slate-400 py-2 px-4 rounded-md mt-3 text-sm font-medium text-black'
                  onClick={() => setIsMergeMap(false)}
                >
                  Cancel
                </button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <button
                  className='bg-purple py-2 px-4 rounded-md mt-3 text-sm font-medium text-white'
                  onClick={() => {
                    setIsMergeMap(false);
                    navigate("/map");
                  }}
                >
                  Select
                </button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      )}
      <div className='grid grid-rows-3 grid-cols-2 gap-3 mt-3 text-center'>
        <button
          className='flex flex-row gap-2 text-bold text-black bg-button px-2 py-3 text-base justify-center items-center font-semibold hover:text-pink rounded-md'
          onClick={() => setIsMergeMap(true)}
        >
          <Map />
          <p>maps</p>
        </button>
        <button
          className='flex flex-row gap-2 text-bold text-black bg-button px-2 py-3 text-base justify-center items-center font-semibold hover:text-pink rounded-md'
          onClick={() => navigate('/rewards')}
        >
          <Gift />
          <p>rewards</p>
        </button>
        <button className='flex flex-row gap-2 text-bold text-black bg-button px-2 py-3 text-base justify-center items-center font-semibold hover:text-pink rounded-md' onClick={() => navigate("/action/pay")}>
          pay
        </button>
        <button className='flex flex-row gap-2 text-bold text-black bg-button px-2 py-3 text-base justify-center items-center font-semibold hover:text-pink rounded-md' onClick={() => navigate("/action/transfer")}>
          transfer
        </button>
        <button className='flex flex-row gap-2 text-bold text-black bg-button px-2 py-3 text-base justify-center items-center font-semibold hover:text-pink rounded-md' onClick={() => navigate("/action/request")}>
          request
        </button>
        <button className='flex flex-row gap-2 text-bold text-black bg-button px-2 py-3 text-base justify-center items-center font-semibold hover:text-pink rounded-md' onClick={() => navigate("/action/split")}>
          split
        </button>
      </div>
      <MasonryLayout />
    </div>
  );
};

export default Home;
