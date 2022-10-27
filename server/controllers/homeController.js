import fetch from 'node-fetch'


var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: {"apikey":"FxM99I6nOWVanOMrwaLQp9OXBdQXNAyT"}
};

export const getRates = async (req,res) => {
    console.log(process.env.API_KEY)
    const response =await fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=usd%2Ccad%2Cgbp%2Caed%2Ceur&base=inr", requestOptions)
    const data = await response.json()
    console.log(data)   
        res.status(200).json(data)
}

export const getSymbols = async(req,res) => {
  const response =await fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
  const data = await response.json()
  console.log(data)   
      res.status(200).json(data)
}

export const getStats = async(req,res) => {
  const date= new Date()
  const today =new Date().toISOString().split('T')[0]
  const dayAgo = new Date(date.setDate(date.getDate() - 1)).toISOString().split('T')[0]
  console.log(dayAgo)
  const response =await fetch(`https://api.apilayer.com/exchangerates_data/fluctuation?start_date=${today}&end_date=${dayAgo}&symbols=usd%2Ccad%2Cgbp&base=inr`, requestOptions)
  const data = await response.json()
  console.log(data)   
      res.status(200).json(data)
}