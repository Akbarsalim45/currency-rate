import fetch from 'node-fetch'


var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: {"apikey":"UZAfKz2fV76C2FR0xKc1KhIl8fBZoc7B"}
};
let prefetchData 

let interaval = setInterval(async ()=>{
  const response =await fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=usd%2Ccad%2Cgbp%2Caed%2Ceur&base=inr", requestOptions)
    prefetchData = await response.json()
},60000);

export const getRates = async (req,res) => {
    const response = !prefetchData &&  await fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=usd%2Ccad%2Cgbp%2Caed%2Ceur&base=inr", requestOptions)
    const data = !prefetchData  && await response?.json()
        res.status(200).json(prefetchData? prefetchData: data)
}

export const getSymbols = async(req,res) => {
  const response =await fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
  const data = await response.json()
      res.status(200).json(data)
}

export const getStats = async(req,res) => {
  const date= new Date()
  const today =new Date().toISOString().split('T')[0]
  const dayAgo = new Date(date.setDate(date.getDate() - 1)).toISOString().split('T')[0]
  const response =await fetch(`https://api.apilayer.com/exchangerates_data/fluctuation?start_date=${today}&end_date=${dayAgo}&symbols=usd%2Ccad%2Cgbp&base=inr`, requestOptions)
  const data = await response.json()
      res.status(200).json(data)
}