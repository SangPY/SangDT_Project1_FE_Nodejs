import axios from "./util/axios.customize"
import { useEffect } from "react"
import Header from "./components/layout/header"
import { Outlet } from "react-router-dom"

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
     <Header/>
     <Outlet/>
    </>
  )
}

export default App
