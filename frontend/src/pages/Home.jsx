import React, { useContext } from 'react'
import { userDataContext } from '../context/userContext'

function Home() {
  const { userData } = useContext(userDataContext)
  console.log('userData in Home:', userData);
  
  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#02023d] flex justify-center items-center flex-col '>
      <div className='w-[300px] h-[400px] flex justify-center items-center overflow-hidden rounded-4xl'>
        <img src={userData?.assistantImage} alt='' className='h-full object-cover'/>
      </div>
    </div>

  )
}

export default Home
