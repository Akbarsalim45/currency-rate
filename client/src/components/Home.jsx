import React,{useState} from 'react'
import Chart from './Chart'
import Stats from './Stats'
import UserInputs from './UserInputs'
import { Box,Stack } from '@mui/material';
import CurrencyList from './CurrencyList';

const Home = () => {

  return (
    <Box sx={{px:4,height:"100vh"}}>
        <Stack direction="row"  >
            <Stack sx={{flex:2}}>
                <UserInputs />
                <CurrencyList /> 
            </Stack>
            <Stack sx={{flex:5}}>
                <Chart />
                <Stats />
            </Stack>

        </Stack>
    </Box>
  )
}

export default Home