import React from 'react'
import '../App.css'

const Banner = () => {
  return (
    <main className=' bg-container  text-white space-y-3 p-10 flex flex-col justify-center items-center w-full' >
        <h4 className=' text-2xl font-bold'>Title</h4>
        <p>Loren ipsum sit ametm consectetur let, Macenasarisus mi, egestast
        er, non mi</p>
        <button className='bg-white text-black hover:bg-red-500 hover:text-white border-none h-10 flex  justify-center items-center rounded-md outline-none cursor-pointer p-3'>Readmore</button>
    </main>

  )
}

export default Banner