import React from 'react'

function ColorCoin(percentage){
    if (percentage<0){
        return "text-red-500"
    }
    else{
        return "text-green-500"
    }
    
}
export default function CoinRow({coin,index}) {
    const priceChangePercentage = coin.price_change_percentage_24h.toFixed(2);

  return (
    <tr  className='border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700
        hover:bg-neutral-500'>
            <td className='whitespace-nowrap px-6 py-4 content-center'>{index} </td>
            <td className='flex items-center  px-6 py-4 '>
            <img className="h-5 mr-2" src={coin.image}></img>{coin.name}
            </td>
            <td className='whitespace-nowrap px-6 py-4 '>{coin.current_price}</td>
            <td className={`whitespace-nowrap px-6 py-4 
            ${ColorCoin(priceChangePercentage)}`}>{priceChangePercentage} %</td>
            <td className='whitespace-nowrap px-6 py-4 '>{coin.total_volume}</td>
            </tr>
  )
}


