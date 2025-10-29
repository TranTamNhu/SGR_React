
import { useEffect, useState } from "react"  
import Register from "./components/Register"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
export function App() {

  const[ShowRegister,setShowRegister]= useState(false)
  const[ShowLogin,setShowLogin]= useState(true)  
  const[ShowDashboard,setShowDashboard]= useState(false)
  const[loading,setLoading]= useState(false)  
  function goToRegister(){
    setShowDashboard(false)
    setShowLogin(false)
    setShowRegister(true) 
  }
  function goToLogin(){
    setShowDashboard(false)
    setShowLogin(true)
    setShowRegister(false) 
  }
  function goToDashboard(){
    setShowDashboard(true)
    setShowLogin(false)
    setShowRegister(false) 
  }

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      goToDashboard()
    }
    setLoading(false)
   }
  ,[])
  if(loading)  return null

  return (
    <div  className="flex justify-center items-center h-screen w-screen">
     {ShowRegister && <Register gotoLogin={goToLogin}/>}
      {ShowLogin && <Login toDashBoard={goToDashboard} goto={goToRegister}/>}
      {ShowDashboard && <Dashboard/>}
    </div>
  )
}
