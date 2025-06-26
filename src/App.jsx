import axios from "./util/axios.customize"
import { useEffect } from "react"


//import { useState } from 'react'
function App() {

  useEffect(()=> {
    const fetchHelloworld = async() => {
      const res = await axios.get(`/v1/api`);
      console.log("res is result", res);
    }

    fetchHelloworld()
  },[])

  return (
    <>
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
