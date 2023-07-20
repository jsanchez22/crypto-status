import { useState , useEffect } from 'react'
import './index.css'
import axios from 'axios'
import TableCoins from './components/TableCoins'

function App() {
  const [coins, setCoins] = useState([])

  const getData = async () => {
  const res =await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
  setCoins(res.data)
  }

  useEffect(() => {
      getData()
      }, [])
  
  return (
    <><h1 className="text-5xl text-center text-blue-800 font-bold underline">
      CRYPTO STATUS
   </h1>
  <TableCoins coins={coins}/>
    </>
  )
}

export default App
