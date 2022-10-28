import { Box, Typography ,Stack,Paper} from '@mui/material'
import React,{useContext} from 'react'
import { ChartContext } from '../context/ChartContext'

const Stats = () => {
    const {stats} =useContext(ChartContext)
  return (
        <Box sx={{mb:4,px:{xs:2,md:4}}}>
            <Typography variant="h5" sx={{fontSize:{xs:'18px'}}}>Stats(Last 24 hrs)</Typography>
            <Stack direction="row" sx={{gap:"40px",mt:4,mx:2,justifyContent:{md:"flex-start"},flexDirection:{xs:"column",sm:"column",md:"row" }}}>

              { 
                stats && stats?.map(item =>(
                 <Paper elevation={4} key={item[0]} sx={{mx:{xs:4,md:0},pl:{xs:4,md:2}, p:2,backgroundColor:"#ededed" ,width:{sm:"160px"}}}>
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