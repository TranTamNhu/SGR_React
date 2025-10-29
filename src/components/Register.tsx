import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast,Toaster } from "sonner"
import { useState } from 'react'

import axios from 'axios'

function Register(props){

    const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [showTest, setShowTest] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      console.log(name, email, password)
    //   const data = { name, email, password }
      const response = await axios.post('http://localhost:3000/auth/register', {
  username: name,
  email,
  password,
})

      console.log(response)
      toast.success("Account created successfully!")
    } catch (error) {
      console.error(error)
      //  toast.error(error?.response?.data?.message || "Failed to create account.")
    }
  }

  function handleGoToLogin(){
    props.gotoLogin()

  }
  
    return <div> <Toaster/>
      {/* <Button onClick={()=> setShowTest(!showTest)}>ShowTest</Button>
      {showTest && <Test/>} */}
      <div  className="w-[400px] border rounded-md p-4">
        <h1 className="text-2xl font-bold text-center">Create Account</h1>
        <p>Please fill out the form below to create an account</p>

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <Label htmlFor="name">Name</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
              type="text"
              id="name"
            />
          </div>

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
            <Button type="submit" onClick={handleSubmit}>Create Account</Button>
          </div>
          <div>
            <span> Bạn đã có tài khoản</span>
            <span onClick={handleGoToLogin}>Login</span>
          </div>
        </form>
      </div>
       <Toaster position="top-right" richColors /></div>
}
export default Register