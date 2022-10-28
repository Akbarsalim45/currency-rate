import React,{useState,useEffect,useContext} from 'react'
import { Box,Stack,TextField,Button,Typography } from '@mui/material';
import {validEmail} from '../utils'
import { Axios } from '../axios/axios';
import {ChartContext} from '../context/ChartContext'
import { format } from 'timeago.js';


const UserInputs = () => {

    const [inputs,setInputs] = useState({username:"",email:"",})
    const [error,setError]=useState({})
    const [lastClick,setLastClick]=useState("")
    const [timeDifference,setTimeDifference]=useState("")
    const {chartData,setChartData,stats,setStats} = useContext(ChartContext)
    useEffect(()=>{
      if(inputs.username?.length){
        setError({...error,username:false})
      }
      if(inputs.email?.length){
        setError({...error,email:false,validEmail:false})
      }
    },[inputs])

    const handleChange = (e) => {
      const {name,value} = e.target
        setInputs({...inputs,[name]:value})
    }
    const handleSubmit = (e) => {
      if(!inputs?.username){
          setError({...error,username:true})
          return
      }else if(!inputs?.email){
          setError({...error,email: true})
          return
      }else if (validEmail(inputs?.email)){
        setError({...error,validEmail:true})
        return
    }
      Axios.get('/getRates').then(function (response) {
        setChartData(response.data)
        localStorage.setItem("chart-data",JSON.stringify(response.data))
      }).catch(function (error) {
        console.error(error);
      });

      Axios.get('/getStats').then(function (response) {
        setStats(Object.entries(response?.data?.rates))
        localStorage.setItem("stats",JSON.stringify(response.data))
      }).catch(function (error) {
        console.error(error);
      });
      setLastClick(new Date())
      setTimeDifference(format(new Date()))
      setInputs({username:"",email:""})
    }
    useEffect(() => {
      
      if(lastClick){
        let interavl = setInterval(() => {
          setTimeDifference(format(lastClick))
        }, 5000);
        
        return () => {
          clearInterval(interavl)
        }
      }
      }, [lastClick])
    

  return (
    <Box sx={{px:2,py:2}}>
        <Typography variant='h6'>Enter Details to fetch data</Typography>
        <Stack spacing={2} sx={{mt:2}}>
            <TextField 
              id="username" 
              name="username" 
              label="Username" 
              error ={error?.username ?true:null } 
              helperText={error?.username && "username is required"} 
              onChange={handleChange} 
              value={inputs?.username}
            />
            <TextField 
              id="email" 
              type="email" 
              name="email"
              label="Email" 
              error ={error?.email || error?.validEmail ?true:null } 
              helperText={error?.email ? "email is required" :error?.validEmail ? "invalid email format" :null}
              onChange={handleChange} 
              value={inputs?.email}
            />
            <Button variant="contained" onClick={handleSubmit} >Submit</Button>

        </Stack>
        {timeDifference &&<Typography sx={{mt:{xs:2,sm:0,lg:4},color:'red',ml:{sm:0,lg:10}}} variant='h6'>{`Last updated - ${timeDifference} `}</Typography>}
    </Box>
  )
}

export default UserInputs