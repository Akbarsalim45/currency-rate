import React, { useEffect ,useState} from 'react'
import { Box, ListItemButton, ListItemText, Typography } from '@mui/material'
import axios from 'axios'


let options = {
  method: 'GET',
  url:"https://api.apilayer.com/exchangerates_data/symbols",
  redirect: 'follow',
  headers: {
    "apikey": "FxM99I6nOWVanOMrwaLQp9OXBdQXNAyT"
  }
};


const CurrencyList = () => {
  const [curList,setCurList] = useState(Object.entries(JSON.parse(localStorage.getItem('curr-symbols'))?.symbols))
  console.log(curList)
  useEffect(()=>{
    // axios.request(options).then(function (response) {
    //   console.log(response.data)
    //     setCurList(response.data)
    //     localStorage.setItem("curr-symbols",JSON.stringify(response.data))
    //   }).catch(function (error) {
    //     console.error(error);
    //   });
  },[])
  return (
    <Box sx={{height:"100vh",overflowY:"scroll"}}>
      <Typography variant='h6' >Currency Names List</Typography>
      {  curList?.map( item =><ListItemButton component="ul" href="#simple-list">
        {console.log(item)}
           <ListItemText >{`${item[0]} - ${item[1]}`}</ListItemText>)
         </ListItemButton>)
      }


    </Box>
  )
}

export default CurrencyList