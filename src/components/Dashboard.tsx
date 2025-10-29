import { useEffect, useState } from "react"
import axios from "axios"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface User {
  id: number
  username: string
  email: string
  provider: string
  isActive: boolean
  isVerified: boolean
  createdAt: string
}

function Dashboard() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const token = localStorage.getItem("token")

        const res = await axios.get<User[]>("http://localhost:3000/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        setUsers(res.data)
      } catch (error) {
        console.error("❌ Fetch users failed:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) {
    return <p className="text-center mt-10 text-muted-foreground">Loading users...</p>
  }

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-5 text-center">User Dashboard</h2>

      <Card className="rounded-3xl shadow-sm border border-border divide-y">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-5 hover:bg-muted/40 transition-colors"
          >
            {}
            <div>
              <p className="font-medium leading-none">{user.username}</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>

            {}
            <div className="flex flex-col items-center flex-1">
              <p className="text-sm font-medium">{user.provider}</p>
              <p
                className={`text-xs mt-1 ${
                  user.isActive ? "text-green-600" : "text-red-500"
                }`}
              >
                {user.isActive ? "Active" : "Inactive"}
              </p>
            </div>

            {}
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              View <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </Card>
    </div>
  )
}

export default Dashboard
