
import React,{useState,createContext} from "react"



export const ChartContext= React.createContext()



const ChartWrapper = ({children}) => {

  const [chartData,setChartData] = useState(JSON.parse(localStorage.getItem("chart-data")))
  return (
   <ChartContext.Provider value={{chartData,setChartData}} >
       {children}
   </ChartContext.Provider>
  )
}

export default ChartWrapper