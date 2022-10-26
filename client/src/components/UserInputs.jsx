import React from 'react'
import { Box,Stack,TextField,Button } from '@mui/material';

const UserInputs = () => {
  return (
    <Box sx={{px:2,py:2}}>
        <Stack spacing={2}>
            <TextField id="username" label="Username" />
            <TextField id="email" type="email" label="Email" />
            <Button variant="contained">Submit</Button>

        </Stack>

    </Box>
  )
}

export default UserInputs