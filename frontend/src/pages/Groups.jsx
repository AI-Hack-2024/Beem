import { Card, Box, Text } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';

const Groups = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col'>
      <h1 className="mb-4 font-bold">Groups</h1>
      <div className='flex flex-col'>
        <Card className="mb-4" onClick={() => navigate('/group/unilectives/nails')}>
          <div className="flex flex-col justify-center items-center py-10 text-center">
            <p className="text-6xl mb-2">💅</p>
            <Box>
              <Text as='div' size='2' weight='bold'>
                unilectives
              </Text>
              <Text as='div' size='2' color='gray'>
                Last activity: 27 August 2023
              </Text>
            </Box>
          </div>
        </Card>
        <Card className="mb-4" onClick={() => navigate('/group/IT/laptop')}>
          <div className="flex flex-col justify-center items-center py-10 text-center">
            <p className="text-6xl mb-2">💻</p>
            <Box>
              <Text as='div' size='2' weight='bold'>
                IT
              </Text>
              <Text as='div' size='2' color='gray'>
                Last activity: 30 June 2023
              </Text>
            </Box>
          </div>
        </Card>
        <Card className="mb-4" onClick={() => navigate('/group/ai/sunglasses')}>
          <div className="flex flex-col justify-center items-center py-10 text-center">
            <p className="text-6xl mb-2">🕶️</p>
            <Box>
              <Text as='div' size='2' weight='bold'>
                ai
              </Text>
              <Text as='div' size='2' color='gray'>
                Last activity: 18 November 2022
              </Text>
            </Box>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Groups;
