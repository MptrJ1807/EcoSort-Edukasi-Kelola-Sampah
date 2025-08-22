"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Recycle, Leaf, Users, BarChart3, BookOpen, Trash2, Menu, X } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-gray-600 hover:text-green-600 transition-colors">
                Fitur
              </Link>
              <Link href="#guide" className="text-gray-600 hover:text-green-600 transition-colors">
                Panduan
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-green-600 transition-colors">
                Tentang
              </Link>
              <Link href="/kontak" className="text-gray-600 hover:text-green-600 transition-colors">
                Kontak
              </Link>
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Login Pekerja
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-600 hover:text-green-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <Link
                  href="#features"
                  className="text-gray-600 hover:text-green-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Fitur
                </Link>
                <Link
                  href="#guide"
                  className="text-gray-600 hover:text-green-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Panduan
                </Link>
                <Link
                  href="#about"
                  className="text-gray-600 hover:text-green-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tentang
                </Link>
                <Link
                  href="/kontak"
                  className="text-gray-600 hover:text-green-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kontak
                </Link>
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full justify-center bg-transparent">
                    Login Pekerja
                  </Button>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
            Desa Cibingbin • Sistem Informasi Sampah
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Kelola Sampah dengan
            <span className="text-green-600 block">Cerdas & Berkelanjutan</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Platform edukasi dan pengelolaan sampah yang membantu meningkatkan kesadaran lingkungan dan efisiensi
            pemilahan sampah di Desa Cibingbin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/panduan">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <BookOpen className="w-5 h-5 mr-2" />
                Pelajari Pemilahan
              </Button>
            </Link>
            <Link href="/data-sampah">
              <Button size="lg" variant="outline">
                <BarChart3 className="w-5 h-5 mr-2" />
                Lihat Data Sampah
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fitur Unggulan EcoSort</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Solusi lengkap untuk edukasi, pemilahan, dan pengelolaan sampah yang efektif
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Panduan Pemilahan</CardTitle>
                <CardDescription>
                  Pelajari cara memilah sampah dengan benar disertai contoh gambar dan penjelasan lengkap
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Data Sampah</CardTitle>
                <CardDescription>
                  Kelola dan pantau data sampah yang terkumpul di tempat pengumpulan sampah
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Akses Pekerja</CardTitle>
                <CardDescription>Dashboard khusus untuk pekerja pengepul sampah dan petugas TPS</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Guide Preview */}
      <section id="guide" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Jenis-Jenis Sampah</h2>
            <p className="text-gray-600">Kenali berbagai jenis sampah dan cara memilahnya dengan benar</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Organik</CardTitle>
                <CardDescription>Sisa makanan, daun, kulit buah</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Plastik</CardTitle>
                <CardDescription>Botol, kantong, kemasan plastik</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-yellow-600 rounded"></div>
                </div>
                <CardTitle className="text-yellow-800">Kertas</CardTitle>
                <CardDescription>Koran, kardus, kertas bekas</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-red-800">B3</CardTitle>
                <CardDescription>Baterai, lampu, obat kadaluarsa</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/panduan">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Lihat Panduan Lengkap
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang EcoSort</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            EcoSort adalah sistem informasi edukasi dan pemilahan sampah yang dikembangkan khusus untuk Desa Cibingbin.
            Platform ini bertujuan meningkatkan kesadaran lingkungan masyarakat dan mengoptimalkan efisiensi pengelolaan
            sampah berkelanjutan melalui teknologi web yang modern dan mudah digunakan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2">
              Ramah Lingkungan
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Mudah Digunakan
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Berkelanjutan
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Responsif
            </Badge>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Recycle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">EcoSort</h3>
              </div>
              <p className="text-gray-400">
                Sistem informasi sampah untuk Desa Cibingbin yang berkelanjutan dan ramah lingkungan.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Fitur</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/panduan" className="hover:text-green-400 transition-colors">
                    Panduan Pemilahan
                  </Link>
                </li>
                <li>
                  <Link href="/data-sampah" className="hover:text-green-400 transition-colors">
                    Data Sampah
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-green-400 transition-colors">
                    Dashboard Pekerja
                  </Link>
                </li>
                <li>
                  <Link href="/panduan" className="hover:text-green-400 transition-colors">
                    Edukasi Lingkungan
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Desa Cibingbin</li>
                <li>(0232) 123-4567</li>
                <li>sampah@cibingbin.desa.id</li>
                <li>
                  <Link href="/kontak" className="hover:text-green-400 transition-colors">
                    Hubungi Kami
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; Copyright Desa Cibingbin, Kecamatan Cibingbin, Kabupaten Kuningan, 2025 EcoSort. Dikembangkan Oleh Mahasiswa Informatika - Universitas Muhammadiyah Cirebon untuk Desa Cibingbin. Semua hak Cipta dilindungi</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
