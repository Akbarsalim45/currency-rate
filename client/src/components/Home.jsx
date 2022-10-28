import React,{useState,useContext} from 'react'
import Chart from './Chart'
import Stats from './Stats'
import UserInputs from './UserInputs'
import { Box,Stack, Typography } from '@mui/material';
import CurrencyList from './CurrencyList';

import useMediaQuery from '@mui/material/useMediaQuery';
import { ChartContext } from '../context/ChartContext';
import { positions } from '@mui/system';

const Home = () => {
   const mobile = useMediaQuery('(max-width:600px)')
  const {chartData,setChartData} = useContext(ChartContext)



  return (
    <Box sx={{px:{xs:0,sm:1,md:2},height:"100vh",overflow:{lg:"hidden"},width:{xs:"100%"}}}>
        <Stack sx={{flexDirection:{ xs:"column",sm:"row"}}}  >
            <Stack sx={{flex:2}}>
                <UserInputs />
               { !mobile &&  <Typography variant='h6' >Currency Names List</Typography>}
               {!mobile && <CurrencyList /> }
            </Stack>
            <Stack sx={{flex:5,position:"relative"}}>
                <Stack sx={{opacity:!chartData ? 0.4 :1}}>
                  <Chart />
                  <Stats />
                </Stack>
              {!chartData &&<Typography variance="h3" sx={{position:'absolute',top:{xs: "100px",sm:"20  0px",md:'270px',lg:"450px"}, left:{xs:"70px",sm:"140px",md:'150px',lg:"450px"}, fontSize:{xs:'18px',md:"26px"}}}>Submit Details to view Chart</Typography>}
            </Stack> 
        </Stack>
    </Box>
  )
}

export default Home