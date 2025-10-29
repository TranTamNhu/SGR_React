import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast,Toaster } from "sonner"
import { useState } from 'react'

import axios from 'axios'

function Login(props){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [showTest, setShowTest] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {

    //   const data = { name, email, password }
      const response = await axios.post('http://localhost:3000/auth/login', {
  email,
  password,
})

      console.log(response)
      localStorage.setItem('token',response.data.data.accessToken)
      props.toDashBoard()
      toast.success("Login successfully!")
    } catch (error) {
      console.error(error)
      //  toast.error(error?.response?.data?.message || "Failed to create account.")
    }
  }
  function handleGotoRegister(){
    props.goto()        
  }

  
    return <div> <Toaster/>
      {/* <Button onClick={()=> setShowTest(!showTest)}>ShowTest</Button>
      {showTest && <Test/>} */}
      <div  className="w-[400px] border rounded-md p-4">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <p>Please fill out the form below to login</p>

        <form onSubmit={handleSubmit}>

          <div className="mt-4">
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              type="email"
              id="email"
            />
          </div>

          <div className="mt-4">
            <Label htmlFor="password">Password</Label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              type="password"
              id="password"
            />
          </div>

          <div className="mt-4">
            <Button type="submit" onClick={handleSubmit}>Login</Button>  
          </div>
        </form>
        <div>
            <span>Hong co account</span>
            <br></br>
            <Button onClick={handleGotoRegister}> sign up now!</Button>
        </div>
      </div>
       <Toaster position="top-right" richColors /></div>
}
export default Login