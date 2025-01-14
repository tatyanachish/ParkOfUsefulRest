import { useEffect, useState } from 'react'
import './Loader.css'
import LoaderPage from './LoaderPage'

function App() {
const [stateLoader,setStateLoader] = useState(true)
useEffect(()=>{
  const timer = setTimeout(()=>setStateLoader(false),3000)
  return()=>clearTimeout(timer)
}, [])

  return (
    
      <div>
        {stateLoader && <LoaderPage/>}        
      </div>
      
  )
}

export default App
