import { Box, Typography ,Stack} from '@mui/material'
import React from 'react'

const Stats = () => {
  return (
        <Box sx={{px:4}}>
            <Typography variant="h4">Stats</Typography>
            <Stack direction="row" sx={{gap:"20px",mt:4}}>
                <Stack direction="row">
                    <Typography variance='h6' >rate </Typography>
                    <Typography variance='h6' >82555 </Typography>
                </Stack>
                <Stack direction="row">
                    <Typography variance='h6' >rate </Typography>
                    <Typography variance='h6' >82555 </Typography>
                </Stack>

            </Stack>
            <Stack direction='row'sx={{gap:"20px"}}>
                <Stack direction="row">
                    <Typography variance='h6' >rate </Typography>
                    <Typography variance='h6' >82555 </Typography>
                </Stack>
                <Stack direction="row">
                    <Typography variance='h6' >rate </Typography>
                    <Typography variance='h6' >82555 </Typography>
                </Stack>
            </Stack>
        </Box>
  )
}

export default Stats