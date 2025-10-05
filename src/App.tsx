import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import axios from 'axios'


export function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      console.log(name, email, password)
      const data = { name, email, password }
      const response = await axios.post(
        'http://localhost:3000/auth/register',
       {
  "email": "trantamnhu765+1235@gmail.com",
  "username": "tamnhu",
  "password": "123456"
}
      )
      console.log(response)
      toast.success("Account created successfully!")
    } catch (error) {
      console.error(error)
      //  toast.error(error?.response?.data?.message || "Failed to create account.")
    }
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="w-[400px] border rounded-md p-4">
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
        </form>
      </div>
    </div>
  )
}
