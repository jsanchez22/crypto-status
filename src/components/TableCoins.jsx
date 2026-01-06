import React from 'react'
import CoinRow from './CoinRow'

const titles = ["#","Coin","Price","Price change","24h volume"]
export default function TableCoins({coins}) {
    
  return (
    <div className="flex flex-col m-3">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium bg-neutral-800 text-neutral-50 ">
              <tr className='bg-neutral-800 font-ligth'>{
                titles.map( (title,index) => (
                  <td scope="col" key={index} className=" px-6 py-2">{title}</td>
                ))}</tr>
              </thead>
    <tbody >
        {coins.map((coin,index) => ( 
          <CoinRow coin={coin} key={index} index={index+1}/>
          )
        )}        
      </tbody>
        </table>
      </div>
    </div>
  </div>
</div> )
}
