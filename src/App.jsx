import { useState } from 'react'
import bg from './images/5806719.jpg'
import lalaine from './images/lalaine.png'

function App() {

  return (
    <div className="relative flex justify-center w-sreen h-screen max-h-screen scroll-smooth bg-cover" style={{backgroundImage:`url(${bg})`}}>
      <div className='absolute w-full mt-20 md:w-1/2  flex flex-col justify-center animate-pulse '>
        <p className="text-9xl text-center font-bold text-indigo-200 drop-shadow-lg ">THANK YOU</p>
        <p className='font-semibold text-indigo-100 text-right px-3'>From Bentacos Team</p>
      </div>
      <div className="w-full flex justify-center items-end h-full animate-bounce bottom-0">
        <img src={lalaine} className="w-96 h-96 drop-shadow-xl" />
      </div>
    </div>
  )
}

export default App
