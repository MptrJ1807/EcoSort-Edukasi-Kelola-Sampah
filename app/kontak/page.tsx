"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, Recycle, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    telepon: "",
    email: "",
    pesan: "",
  })
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    alert("Pesan Anda telah dikirim! Tim kami akan segera menghubungi Anda.")
    setFormData({ nama: "", alamat: "", telepon: "", email: "", pesan: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const faqData = [
    {
      question: "Bagaimana cara meminta pengangkutan sampah rumah?",
      answer:
        "Anda dapat menghubungi kami melalui form di halaman ini atau langsung menelepon ke nomor yang tersedia. Tim pengangkut akan datang sesuai jadwal yang telah ditentukan.",
    },
    {
      question: "Apa saja jenis sampah yang dapat diangkut?",
      answer:
        "Kami mengangkut semua jenis sampah rumah tangga termasuk sampah organik, plastik, kertas, dan sampah B3. Pastikan sampah sudah dipilah sesuai kategori.",
    },
    {
      question: "Berapa biaya pengangkutan sampah?",
      answer:
        "Biaya pengangkutan bervariasi tergantung volume dan jenis sampah. Untuk informasi tarif lengkap, silakan hubungi tim kami.",
    },
    {
      question: "Kapan jadwal pengangkutan sampah?",
      answer:
        "Pengangkutan sampah dilakukan setiap hari Senin, Rabu, dan Jumat mulai pukul 07.00-15.00. Untuk jadwal khusus dapat diatur sesuai kebutuhan.",
    },
    {
      question: "Bagaimana cara memilah sampah dengan benar?",
      answer:
        "Silakan kunjungi halaman Panduan Pemilahan untuk mempelajari cara memilah sampah organik, plastik, kertas, dan B3 dengan benar beserta contoh-contohnya.",
    },
    {
      question: "Apa yang harus dilakukan jika sampah tidak diangkut?",
      answer:
        "Jika sampah tidak diangkut sesuai jadwal, segera hubungi kami melalui telepon atau form kontak. Kami akan menindaklanjuti dan mengatur pengangkutan ulang.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Recycle className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-green-800">EcoSort</h1>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
                Beranda
              </Link>
              <Link href="/panduan" className="text-gray-600 hover:text-green-600 transition-colors">
                Panduan
              </Link>
              <Link href="/kontak" className="text-green-600 font-medium">
                Kontak
              </Link>
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Login Pekerja
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Hubungi Kami</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Butuh Bantuan Pengangkutan
            <span className="text-green-600 block">Sampah?</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Tim kami siap membantu Anda dalam pengelolaan dan pengangkutan sampah rumah tangga dengan layanan yang cepat
            dan terpercaya
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Alamat</CardTitle>
                <CardDescription>
                  Kantor Desa Cibingbin
                  <br />
                  Jl. Raya Cibingbin No. 123
                  <br />
                  Cibingbin, Kuningan
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Telepon</CardTitle>
                <CardDescription>
                  (+62)852-1014-7393
                  <br />
                  0812-3456-7890
                  <br />
                  WhatsApp tersedia
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-purple-200">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Email</CardTitle>
                <CardDescription>
                  sampah@cibingbin.desa.id
                  <br />
                  info@ecosort-cibingbin.id
                  <br />
                  Respon dalam 24 jam
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-orange-200">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-orange-800">Jam Operasional</CardTitle>
                <CardDescription>
                  Senin - Jumat
                  <br />
                  07.00 - 15.00 WIB
                  <br />
                  Sabtu: 07.00 - 12.00
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kirim Pesan</h2>
            <p className="text-gray-600">Isi form di bawah ini untuk meminta pengangkutan sampah atau konsultasi</p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-green-800">Form Permintaan Pengangkutan Sampah</CardTitle>
              <CardDescription>Mohon isi data dengan lengkap agar tim kami dapat menghubungi Anda</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                    <Input
                      name="nama"
                      value={formData.nama}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon *</label>
                    <Input
                      name="telepon"
                      value={formData.telepon}
                      onChange={handleInputChange}
                      placeholder="08xx-xxxx-xxxx"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Alamat Lengkap *</label>
                  <Input
                    name="alamat"
                    value={formData.alamat}
                    onChange={handleInputChange}
                    placeholder="Jl. Nama Jalan, RT/RW, Desa/Kelurahan"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email (Opsional)</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan / Keterangan *</label>
                  <Textarea
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleInputChange}
                    placeholder="Jelaskan jenis dan perkiraan volume sampah yang akan diangkut, atau pertanyaan lainnya..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  <Send className="w-4 h-4 mr-2" />
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pertanyaan yang Sering Diajukan</h2>
            <p className="text-gray-600">
              Temukan jawaban untuk pertanyaan umum seputar pengelolaan dan pengangkutan sampah
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-800">{faq.question}</CardTitle>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </CardHeader>
                {expandedFaq === index && (
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Tidak menemukan jawaban yang Anda cari?</p>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent">
              Hubungi Kami Langsung
            </Button>
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
              <p className="text-gray-400">
                Desa Cibingbin
                <br />
                (0232) 123-4567
                <br />
                sampah@cibingbin.desa.id
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EcoSort. Dikembangkan untuk Desa Cibingbin.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
