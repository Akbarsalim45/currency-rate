
import React,{useState,createContext} from "react"



export const ChartContext= React.createContext()



const ChartWrapper = ({children}) => {

  const [chartData,setChartData] = useState(localStorage.getItem("chart-data") ? JSON.parse(localStorage.getItem("chart-data")):null)
  const [stats,setStats] = useState(localStorage.getItem("stats") ? Object.entries(JSON.parse(localStorage.getItem("stats"))?.rates):null)
  return (
   <ChartContext.Provider value={{chartData,setChartData,stats,setStats}} >
       {children}
   </ChartContext.Provider>
  )
}

export default ChartWrapper