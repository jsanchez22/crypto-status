import React from 'react'

export default function TableCoins({coins}) {
    console.log(coins)

  return (
    <div className="flex flex-col m-3">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium bg-neutral-800 text-neutral-50 ">
              <tr className='bg-neutral-800 font-ligth'><th scope="col" class="px-6 py-4">coins</th></tr>
              </thead>
    <tbody >
        {coins.map((coin) => ( <tr key={coin.id} 
        className='border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700
        hover:bg-red-500'>
            <td className='whitespace-nowrap px-6 py-4 '>{coin.name}</td>
            </tr>)
        )}        
      </tbody>
        </table>
      </div>
    </div>
  </div>
</div> )
}
