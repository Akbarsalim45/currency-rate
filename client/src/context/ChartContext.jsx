
import React,{useState,createContext} from "react"



export const ChartContext= React.createContext()



const ChartWrapper = ({children}) => {

  const [chartData,setChartData] = useState(JSON.parse(localStorage.getItem("chart-data")))
  const [stats,setStats] = useState(Object.entries(JSON.parse(localStorage.getItem("stats"))?.rates))
  return (
   <ChartContext.Provider value={{chartData,setChartData,stats,setStats}} >
       {children}
   </ChartContext.Provider>
  )
}

export default ChartWrapper