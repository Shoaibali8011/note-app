import { useState } from 'react'
import './App.css'
import axios from "axios"
import { useEffect } from 'react'

function App() {
  const [flights, setFlights] = useState({})
  useEffect(()=>{
    const flightsData=async()=>{
      const res=await axios.get("http://localhost:3000/api/flights")
       try {
        
        setFlights(res.data);
       }catch(error){
         console.log("The data is noting show",error);
         
       }
      }
      flightsData()
    

  },[])

  return (
   <div>
<h1>All flights Data is show</h1>

<ul>
{ Object.entries(flights).map(([key,flight])=>(
    <li key={key}>
      <strong>{key}</strong>:{flight.name }-from{flight.from} To{flight.to  }
    </li>
) )
}

</ul>
   </div>
  )
}

export default App
