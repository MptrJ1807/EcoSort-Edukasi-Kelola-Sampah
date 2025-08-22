"use client"

import type React from "react"
import { ProtectedRoute } from "@/components/protected-route"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Recycle, ArrowLeft, Plus, Edit, Trash2, Search, Filter } from "lucide-react"
import Link from "next/link"

interface WasteData {
  id: string
  type: "Organik" | "Plastik" | "Kertas" | "B3"
  weight: number
  location: string
  date: string
  status: "Terkumpul" | "Diproses" | "Selesai"
  officer: string
  notes: string
}

const wasteTypeColors = {
  Organik: "bg-green-100 text-green-800",
  Plastik: "bg-blue-100 text-blue-800",
  Kertas: "bg-yellow-100 text-yellow-800",
  B3: "bg-red-100 text-red-800",
}

const statusColors = {
  Terkumpul: "bg-orange-100 text-orange-800",
  Diproses: "bg-blue-100 text-blue-800",
  Selesai: "bg-green-100 text-green-800",
}

function DataSampahContent() {
  const [wasteData, setWasteData] = useState<WasteData[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<WasteData | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState<string>("all")
  const [filterStatus, setFilterStatus] = useState<string>("all")

  // Form state
  const [formData, setFormData] = useState({
    type: "" as WasteData["type"],
    weight: "",
    location: "",
    date: "",
    status: "" as WasteData["status"],
    officer: "",
    notes: "",
  })

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("wasteData")
    if (savedData) {
      setWasteData(JSON.parse(savedData))
    } else {
      // Initialize with sample data
      const sampleData: WasteData[] = [
        {
          id: "1",
          type: "Organik",
          weight: 15.5,
          location: "TPS Cibingbin Utara",
          date: "2024-01-15",
          status: "Terkumpul",
          officer: "Budi Santoso",
          notes: "Sampah organik dari pasar tradisional",
        },
        {
          id: "2",
          type: "Plastik",
          weight: 8.2,
          location: "TPS Cibingbin Selatan",
          date: "2024-01-15",
          status: "Diproses",
          officer: "Siti Aminah",
          notes: "Botol plastik dan kemasan makanan",
        },
        {
          id: "3",
          type: "Kertas",
          weight: 12.0,
          location: "TPS Cibingbin Tengah",
          date: "2024-01-14",
          status: "Selesai",
          officer: "Ahmad Wijaya",
          notes: "Kardus dan kertas bekas dari toko",
        },
      ]
      setWasteData(sampleData)
      localStorage.setItem("wasteData", JSON.stringify(sampleData))
    }
  }, [])

  // Save data to localStorage whenever wasteData changes
  useEffect(() => {
    localStorage.setItem("wasteData", JSON.stringify(wasteData))
  }, [wasteData])

  const resetForm = () => {
    setFormData({
      type: "" as WasteData["type"],
      weight: "",
      location: "",
      date: "",
      status: "" as WasteData["status"],
      officer: "",
      notes: "",
    })
    setEditingItem(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !formData.type ||
      !formData.weight ||
      !formData.location ||
      !formData.date ||
      !formData.status ||
      !formData.officer
    ) {
      alert("Mohon lengkapi semua field yang wajib diisi")
      return
    }

    const newItem: WasteData = {
      id: editingItem ? editingItem.id : Date.now().toString(),
      type: formData.type,
      weight: Number.parseFloat(formData.weight),
      location: formData.location,
      date: formData.date,
      status: formData.status,
      officer: formData.officer,
      notes: formData.notes,
    }

    if (editingItem) {
      setWasteData(wasteData.map((item) => (item.id === editingItem.id ? newItem : item)))
    } else {
      setWasteData([...wasteData, newItem])
    }

    resetForm()
    setIsDialogOpen(false)
  }

  const handleEdit = (item: WasteData) => {
    setEditingItem(item)
    setFormData({
      type: item.type,
      weight: item.weight.toString(),
      location: item.location,
      date: item.date,
      status: item.status,
      officer: item.officer,
      notes: item.notes,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      setWasteData(wasteData.filter((item) => item.id !== id))
    }
  }

  // Filter and search logic
  const filteredData = wasteData.filter((item) => {
    const matchesSearch =
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.officer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.notes.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType = filterType === "all" || item.type === filterType
    const matchesStatus = filterStatus === "all" || item.status === filterStatus

    return matchesSearch && matchesType && matchesStatus
  })

  // Calculate statistics
  const totalWeight = wasteData.reduce((sum, item) => sum + item.weight, 0)
  const totalItems = wasteData.length
  const statusCounts = wasteData.reduce(
    (acc, item) => {
      acc[item.status] = (acc[item.status] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Recycle className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-green-800">EcoSort</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Sampah Terkumpul</h1>
          <p className="text-gray-600">Kelola dan pantau data sampah yang terkumpul di tempat pengumpulan sampah</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Sampah</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{totalItems}</div>
              <p className="text-xs text-gray-500">Data tercatat</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Berat</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{totalWeight.toFixed(1)} kg</div>
              <p className="text-xs text-gray-500">Sampah terkumpul</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Sedang Diproses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{statusCounts.Diproses || 0}</div>
              <p className="text-xs text-gray-500">Data dalam proses</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Selesai</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{statusCounts.Selesai || 0}</div>
              <p className="text-xs text-gray-500">Data selesai</p>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Cari berdasarkan lokasi, petugas, atau catatan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-40">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Jenis" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Jenis</SelectItem>
                <SelectItem value="Organik">Organik</SelectItem>
                <SelectItem value="Plastik">Plastik</SelectItem>
                <SelectItem value="Kertas">Kertas</SelectItem>
                <SelectItem value="B3">B3</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Status</SelectItem>
                <SelectItem value="Terkumpul">Terkumpul</SelectItem>
                <SelectItem value="Diproses">Diproses</SelectItem>
                <SelectItem value="Selesai">Selesai</SelectItem>
              </SelectContent>
            </Select>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={resetForm} className="bg-green-600 hover:bg-green-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Tambah Data
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>{editingItem ? "Edit Data Sampah" : "Tambah Data Sampah"}</DialogTitle>
                  <DialogDescription>
                    {editingItem ? "Ubah informasi data sampah" : "Masukkan informasi data sampah baru"}
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="type">Jenis Sampah *</Label>
                    <Select
                      value={formData.type}
                      onValueChange={(value) => setFormData({ ...formData, type: value as WasteData["type"] })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih jenis sampah" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Organik">Organik</SelectItem>
                        <SelectItem value="Plastik">Plastik</SelectItem>
                        <SelectItem value="Kertas">Kertas</SelectItem>
                        <SelectItem value="B3">B3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="weight">Berat (kg) *</Label>
                    <Input
                      id="weight"
                      type="number"
                      step="0.1"
                      placeholder="0.0"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Lokasi Pengumpulan *</Label>
                    <Input
                      id="location"
                      placeholder="Contoh: TPS Cibingbin Utara"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="date">Tanggal Pengumpulan *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="status">Status *</Label>
                    <Select
                      value={formData.status}
                      onValueChange={(value) => setFormData({ ...formData, status: value as WasteData["status"] })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Terkumpul">Terkumpul</SelectItem>
                        <SelectItem value="Diproses">Diproses</SelectItem>
                        <SelectItem value="Selesai">Selesai</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="officer">Petugas *</Label>
                    <Input
                      id="officer"
                      placeholder="Nama petugas yang mencatat"
                      value={formData.officer}
                      onChange={(e) => setFormData({ ...formData, officer: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="notes">Catatan</Label>
                    <Textarea
                      id="notes"
                      placeholder="Catatan tambahan (opsional)"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
                      {editingItem ? "Update" : "Simpan"}
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Batal
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Data Table */}
        <Card>
          <CardHeader>
            <CardTitle>Daftar Data Sampah</CardTitle>
            <CardDescription>
              Menampilkan {filteredData.length} dari {totalItems} data sampah
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Jenis</TableHead>
                    <TableHead>Berat (kg)</TableHead>
                    <TableHead>Lokasi</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Petugas</TableHead>
                    <TableHead>Catatan</TableHead>
                    <TableHead>Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8 text-gray-500">
                        {wasteData.length === 0 ? "Belum ada data sampah" : "Tidak ada data yang sesuai dengan filter"}
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Badge className={wasteTypeColors[item.type]}>{item.type}</Badge>
                        </TableCell>
                        <TableCell className="font-medium">{item.weight.toFixed(1)}</TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell>{new Date(item.date).toLocaleDateString("id-ID")}</TableCell>
                        <TableCell>
                          <Badge className={statusColors[item.status]}>{item.status}</Badge>
                        </TableCell>
                        <TableCell>{item.officer}</TableCell>
                        <TableCell className="max-w-xs truncate">{item.notes || "-"}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => handleEdit(item)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleDelete(item.id)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function DataSampahPage() {
  return (
    <ProtectedRoute>
      <DataSampahContent />
    </ProtectedRoute>
  )
}
