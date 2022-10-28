import React,{useContext} from 'react'
import { Box, Typography } from '@mui/material'

import {ChartContext} from '../context/ChartContext'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import useMediaQuery from '@mui/material/useMediaQuery';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'INR vs AED,CAD,EUR,USD,GBP ',
    },
  },
};


const Chart = () => {
  
  const {chartData,setChartData} = useContext(ChartContext)
  const isLaptop = useMediaQuery('(min-width:900px)')
  const isBigScreen = useMediaQuery('(min-width:120px)')
  
  const labels = chartData && Object.entries(chartData?.rates).sort((a,b) => b[1] - a[1]).map(item => item[0])

  const chartDataSet = chartData && Object.entries(chartData?.rates).sort((a,b) => b[1] - a[1]).map(item => (1/item[1]).toFixed(4))
  const data = {
    labels,
    datasets: [
      {
        label: 'INR',
        data: chartDataSet,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      
    ],
  };
  return (
    <Box sx={{mt:{sm:4},p:2}}>
      <Typography variant={'h3'} sx={{fontSize:{ xs:"18px"}}}>INR Rate Chart</Typography>
      <Bar options={options} data={data} />
    </Box>
  )
}

export default Chart