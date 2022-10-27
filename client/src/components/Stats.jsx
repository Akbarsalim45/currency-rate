import { Box, Typography ,Stack,Paper} from '@mui/material'
import React,{useContext} from 'react'
import { ChartContext } from '../context/ChartContext'

const Stats = () => {
    const {stats} =useContext(ChartContext)
  return (
        <Box sx={{px:4}}>
            <Typography variant="h5">Stats(Last 24 hrs)</Typography>
            <Stack direction="row" sx={{gap:"20px",mt:4,mx:2,justifyContent:'space-between'}}>

              { 
                stats && stats?.map(item =>(
                 <Paper elevation={4} key={item[0]} sx={{p:2,backgroundColor:"#ededed"}}>
                    <Typography variance='h5'sx={{fontSize:"22px"}} >{`INR-${item[0]}`} </Typography>
                    <Typography variance='h6' >{`Start rate - ${(1/item[1]?.start_rate).toFixed(2)}`}</Typography>
                    <Typography variance='h6' >{`End rate - ${(1/item[1]?.end_rate).toFixed(2)}`} </Typography>
                    <Typography variance='h6' >{`Change - ${(1/item[1]?.end_rate - 1/item[1]?.start_rate).toFixed(2)}`} </Typography>
                    <Typography variance='h6' >{`Change(%) - ${(item[1]?.change_pct).toFixed(2)}%`} </Typography>
                 </Paper >
                  )
                )
                }

            </Stack>
        </Box>
  )
}

export default Stats