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
    <>
    <h1 className="flex justify-center mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl "><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">Cripto Status</span>
    </h1>
  <TableCoins coins={coins}/>
    </>
  )
}

export default App
