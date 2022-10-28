import React, { useEffect ,useState} from 'react'
import { Box, ListItemButton, ListItemText, Typography } from '@mui/material'
import {Axios} from '../axios/axios'




const CurrencyList = () => {
  const [curList,setCurList] = useState(JSON.parse(localStorage?.getItem('curr-symbols'))? Object.entries(JSON.parse(localStorage?.getItem('curr-symbols'))?.symbols):{})
  useEffect(()=>{
    Axios.get('/getSymbols').then(function (response) {
        setCurList(Object.entries(response.data.symbols))
        localStorage.setItem("curr-symbols",JSON.stringify(response.data))
      }).catch(function (error) {
        console.error(error);
      });
  },[])
  return (
    <Box sx={{height:"100vh",overflowY:"scroll"}}>
      { Object.keys(curList)?.length ?curList?.map( item =><ListItemButton key ={item[0]} component="" href="#simple-list" sx={{borderBottom:"0.5px solid gray "}}>
           <ListItemText >{`${item[0]} - ${item[1]}`}</ListItemText>
         </ListItemButton>):""
      }


    </Box>
  )
}

export default CurrencyList