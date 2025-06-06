import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const userDataContext =createContext()

function UserContext({children}) {
    const serverUrl="http://localhost:3000"
    const[userData,setUserData]=useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [frontendImage, setFrontendImage]=useState(null)
    const [backendImage, setBackendImage] =useState(null)
    const[selectedImage, setSelectedImage]=useState(null)
    const handleCurrentUser=async()=>{
      try {
        const result =await axios.get(`${serverUrl}/api/user/current`,{withCredentials:true})
        setUserData(result.data)
        console.log(result.data);
         setLoading(false)
        
      } catch (error) {
        console.log(error);
        setError(error)
         setLoading(false)
        
      }
    }
    useEffect(() => {
      handleCurrentUser()
    },[])

    const value={
      serverUrl,
      userData,  
      setUserData,
       loading,
      error,
      backendImage, setBackendImage,frontendImage, setFrontendImage,selectedImage, setSelectedImage

    }
  return (
   
        <userDataContext.Provider value={value}>
     {children}
     </userDataContext.Provider>
    
    
  )
}

export default UserContext