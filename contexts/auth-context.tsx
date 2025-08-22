"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  username: string
  name: string
  role: "pengepul" | "tps"
  isActive: boolean
}

interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Sample users data (in real app, this would come from database)
const SAMPLE_USERS: (User & { password: string })[] = [
  {
    id: "1",
    username: "pengepul1",
    password: "password123",
    name: "Budi Santoso",
    role: "pengepul",
    isActive: true,
  },
  {
    id: "2",
    username: "pengepul2",
    password: "password123",
    name: "Siti Aminah",
    role: "pengepul",
    isActive: true,
  },
  {
    id: "3",
    username: "tps1",
    password: "password123",
    name: "Ahmad Wijaya",
    role: "tps",
    isActive: true,
  },
  {
    id: "4",
    username: "tps2",
    password: "password123",
    name: "Dewi Sartika",
    role: "tps",
    isActive: true,
  },
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on app start
    const savedUser = localStorage.getItem("currentUser")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (username: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const foundUser = SAMPLE_USERS.find((u) => u.username === username && u.password === password && u.isActive)

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword)
      localStorage.setItem("currentUser", JSON.stringify(userWithoutPassword))
      return true
    }

    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("currentUser")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
