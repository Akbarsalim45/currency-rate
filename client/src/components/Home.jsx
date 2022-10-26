import React from 'react'
import Chart from './Chart'
import Stats from './Stats'
import UserInputs from './UserInputs'
import { Box,Stack } from '@mui/material';
const Home = () => {
  return (
    <Box >
        <Stack direction="row"  >

            <Stack sx={{flex:2}}>
                <UserInputs />
                <Stats /> 
            </Stack>
            <Stack sx={{flex:5}}>
                <Chart />
            </Stack>

        </Stack>
    </Box>
  )
}

export default Home