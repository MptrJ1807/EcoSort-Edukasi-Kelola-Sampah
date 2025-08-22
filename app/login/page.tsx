"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Recycle, ArrowLeft, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    if (!username || !password) {
      setError("Username dan password harus diisi")
      setIsLoading(false)
      return
    }

    try {
      const success = await login(username, password)
      if (success) {
        router.push("/dashboard")
      } else {
        setError("Username atau password salah")
      }
    } catch (err) {
      setError("Terjadi kesalahan saat login")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Recycle className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-green-800">EcoSort</h1>
          </div>
          <p className="text-gray-600">Login untuk Pekerja</p>
        </div>

        {/* Login Form */}
        <Card>
          <CardHeader>
            <CardTitle>Masuk ke Sistem</CardTitle>
            <CardDescription>Masukkan kredensial Anda untuk mengakses dashboard pekerja</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Masukkan username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
                {isLoading ? "Memproses..." : "Masuk"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Demo Credentials */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-sm">Demo Credentials</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm">
              <p className="font-medium text-green-800">Pekerja Pengepul:</p>
              <p className="text-gray-600">Username: pengepul1 | Password: password123</p>
              <p className="text-gray-600">Username: pengepul2 | Password: password123</p>
            </div>
            <div className="text-sm">
              <p className="font-medium text-blue-800">Petugas TPS:</p>
              <p className="text-gray-600">Username: tps1 | Password: password123</p>
              <p className="text-gray-600">Username: tps2 | Password: password123</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
