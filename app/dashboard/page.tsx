"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Recycle, LogOut, BarChart3, Users, Truck, Building } from "lucide-react"
import Link from "next/link"

function DashboardContent() {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Recycle className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-green-800">EcoSort</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <Badge variant={user?.role === "pengepul" ? "default" : "secondary"}>
                  {user?.role === "pengepul" ? "Pekerja Pengepul" : "Petugas TPS"}
                </Badge>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Keluar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Selamat Datang, {user?.name}!</h1>
          <p className="text-gray-600">
            Dashboard untuk {user?.role === "pengepul" ? "pekerja pengepul sampah" : "petugas TPS"}
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-green-800">Data Sampah</CardTitle>
              <CardDescription>Kelola dan pantau data sampah yang terkumpul</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/data-sampah">
                <Button className="w-full bg-green-600 hover:bg-green-700">Buka Data Sampah</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-blue-800">Panduan Pemilahan</CardTitle>
              <CardDescription>Pelajari cara memilah sampah dengan benar</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/panduan">
                <Button variant="outline" className="w-full bg-transparent">
                  Lihat Panduan
                </Button>
              </Link>
            </CardContent>
          </Card>

          {user?.role === "pengepul" && (
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-orange-800">Rute Pengepulan</CardTitle>
                <CardDescription>Kelola rute dan jadwal pengepulan sampah</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent" disabled>
                  Segera Hadir
                </Button>
              </CardContent>
            </Card>
          )}

          {user?.role === "tps" && (
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Manajemen TPS</CardTitle>
                <CardDescription>Kelola operasional tempat pengumpulan sampah</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent" disabled>
                  Segera Hadir
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Role-specific Information */}
        <Card>
          <CardHeader>
            <CardTitle>Informasi {user?.role === "pengepul" ? "Pekerja Pengepul" : "Petugas TPS"}</CardTitle>
          </CardHeader>
          <CardContent>
            {user?.role === "pengepul" ? (
              <div className="space-y-4">
                <p className="text-gray-600">Sebagai pekerja pengepul sampah, Anda bertanggung jawab untuk:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Mengumpulkan sampah dari berbagai lokasi</li>
                  <li>Mencatat data sampah yang terkumpul</li>
                  <li>Memastikan pemilahan sampah sesuai kategori</li>
                  <li>Mengangkut sampah ke tempat pengumpulan sampah (TPS)</li>
                </ul>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-600">Sebagai petugas TPS, Anda bertanggung jawab untuk:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Mengelola operasional tempat pengumpulan sampah</li>
                  <li>Memverifikasi data sampah yang masuk</li>
                  <li>Mengawasi proses pemilahan dan pengolahan</li>
                  <li>Membuat laporan harian dan bulanan</li>
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}
