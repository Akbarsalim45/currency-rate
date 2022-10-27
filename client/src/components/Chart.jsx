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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const labels = ['USD','CAD','GBP','AED','EUR'];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'INR ',
    },
  },
};
 

const Chart = () => {

  const {chartData,setChartData} = useContext(ChartContext)

  const {USD,CAD,GBP,AED,EUR} = chartData?.rates
  const data = {
    labels,
    datasets: [
      {
        label: 'INR',
        data: [1/USD, 1/CAD, 1/GBP, 1/AED, 1/EUR],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      
    ],
  };
  return (
    <Box sx={{mt:4,p:2}}>
      <Typography variant='h3'>INR Rate Chart</Typography>
      <Bar options={options} data={data} />
    </Box>
  )
}

export default Chart