import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Recycle, ArrowLeft, Leaf, AlertTriangle, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const organicWastes = [
  {
    name: "Sisa Makanan",
    description: "Nasi, sayuran, buah-buahan yang sudah tidak layak konsumsi",
    examples: ["Nasi basi", "Sayur layu", "Kulit pisang", "Ampas teh", "Cangkang telur"],
    tips: "Dapat dijadikan kompos untuk pupuk tanaman",
    image: "/organic-food-scraps.png",
  },
  {
    name: "Daun dan Ranting",
    description: "Limbah dari taman dan kebun yang mudah terurai",
    examples: ["Daun kering", "Ranting kecil", "Rumput", "Bunga layu", "Kulit kayu"],
    tips: "Potong kecil-kecil agar lebih cepat terurai",
    image: "/dried-leaves-garden-waste.png",
  },
  {
    name: "Limbah Dapur",
    description: "Sisa-sisa dari aktivitas memasak sehari-hari",
    examples: ["Kulit bawang", "Batang sayuran", "Ampas kelapa", "Kulit kentang", "Sisa bumbu"],
    tips: "Hindari mencampur dengan minyak berlebihan",
    image: "/kitchen-scraps-vegetable-peels.png",
  },
]

const plasticWastes = [
  {
    name: "Botol Plastik",
    description: "Kemasan minuman dan produk cair lainnya",
    examples: ["Botol air mineral", "Botol sirup", "Botol shampo", "Botol deterjen", "Botol minyak goreng"],
    tips: "Bersihkan dari sisa isi, lepas label jika memungkinkan",
    image: "/placeholder-1ab7x.png",
  },
  {
    name: "Kantong Plastik",
    description: "Pembungkus dan tas belanja dari bahan plastik",
    examples: ["Kantong belanja", "Plastik kemasan", "Kantong kresek", "Plastik wrap", "Kantong roti"],
    tips: "Kumpulkan dalam satu wadah, hindari yang terlalu kotor",
    image: "/plastic-shopping-bags.png",
  },
  {
    name: "Kemasan Makanan",
    description: "Wadah dan pembungkus makanan dari plastik",
    examples: ["Cup yogurt", "Wadah margarin", "Kemasan mie instan", "Botol saus", "Kemasan snack"],
    tips: "Cuci bersih sebelum dibuang ke tempat sampah plastik",
    image: "/plastic-food-containers.png",
  },
]

const paperWastes = [
  {
    name: "Kertas Bekas",
    description: "Dokumen dan kertas yang sudah tidak terpakai",
    examples: ["Koran bekas", "Majalah lama", "Kertas fotokopi", "Buku rusak", "Kertas gambar"],
    tips: "Pastikan kertas dalam kondisi kering dan bersih",
    image: "/paper-waste.png",
  },
  {
    name: "Kardus dan Karton",
    description: "Kemasan dari bahan karton dan kardus",
    examples: ["Kotak sepatu", "Kardus elektronik", "Kemasan makanan", "Kotak obat", "Tube tissue"],
    tips: "Lipat atau potong agar menghemat ruang penyimpanan",
    image: "/cardboard-packaging-waste.png",
  },
  {
    name: "Kertas Kemasan",
    description: "Pembungkus dan kemasan dari bahan kertas",
    examples: ["Paper bag", "Kemasan roti", "Kertas kado", "Amplop bekas", "Kertas coklat"],
    tips: "Lepaskan pita atau lem yang menempel",
    image: "/placeholder-2p5ym.png",
  },
]

const hazardousWastes = [
  {
    name: "Baterai Bekas",
    description: "Sumber energi portabel yang mengandung bahan kimia berbahaya",
    examples: ["Baterai AA/AAA", "Baterai jam", "Baterai remote", "Baterai mainan", "Aki kecil"],
    tips: "JANGAN dibuang sembarangan, kumpulkan di tempat khusus",
    image: "/placeholder-4bg69.png",
  },
  {
    name: "Lampu Bekas",
    description: "Alat penerangan yang mengandung merkuri dan bahan berbahaya",
    examples: ["Lampu neon", "Lampu hemat energi", "Lampu LED rusak", "Lampu TL", "Bohlam pecah"],
    tips: "Bungkus dengan hati-hati, hindari pecah",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Obat Kadaluarsa",
    description: "Produk farmasi yang sudah melewati tanggal kedaluarsa",
    examples: ["Tablet kadaluarsa", "Sirup obat", "Salep bekas", "Vitamin expired", "Obat cair"],
    tips: "Kembalikan ke apotek atau fasilitas kesehatan terdekat",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function PanduanPage() {
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

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Panduan Lengkap</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Panduan Pemilahan Sampah</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pelajari cara memilah sampah dengan benar untuk mendukung lingkungan yang lebih bersih dan berkelanjutan
          </p>
        </div>

        {/* Tabs for Different Waste Types */}
        <Tabs defaultValue="organik" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="organik" className="flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              Organik
            </TabsTrigger>
            <TabsTrigger value="plastik" className="flex items-center gap-2">
              <Recycle className="w-4 h-4" />
              Plastik
            </TabsTrigger>
            <TabsTrigger value="kertas" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Kertas
            </TabsTrigger>
            <TabsTrigger value="b3" className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              B3
            </TabsTrigger>
          </TabsList>

          {/* Organic Waste */}
          <TabsContent value="organik">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-green-800 mb-2">Sampah Organik</h2>
              <p className="text-gray-600">
                Sampah yang berasal dari makhluk hidup dan dapat terurai secara alami oleh mikroorganisme
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {organicWastes.map((waste, index) => (
                <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image src={waste.image || "/placeholder.svg"} alt={waste.name} fill className="object-cover" />
                    </div>
                    <CardTitle className="text-green-800">{waste.name}</CardTitle>
                    <CardDescription>{waste.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-2">Contoh:</h4>
                        <div className="flex flex-wrap gap-1">
                          {waste.examples.map((example, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm text-green-700">
                          <strong>Tips:</strong> {waste.tips}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Plastic Waste */}
          <TabsContent value="plastik">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-2">Sampah Plastik</h2>
              <p className="text-gray-600">Sampah dari bahan sintetis yang dapat didaur ulang menjadi produk baru</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plasticWastes.map((waste, index) => (
                <Card key={index} className="border-blue-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image src={waste.image || "/placeholder.svg"} alt={waste.name} fill className="object-cover" />
                    </div>
                    <CardTitle className="text-blue-800">{waste.name}</CardTitle>
                    <CardDescription>{waste.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-2">Contoh:</h4>
                        <div className="flex flex-wrap gap-1">
                          {waste.examples.map((example, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-700">
                          <strong>Tips:</strong> {waste.tips}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Paper Waste */}
          <TabsContent value="kertas">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-yellow-800 mb-2">Sampah Kertas</h2>
              <p className="text-gray-600">Sampah dari bahan serat yang dapat didaur ulang menjadi kertas baru</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paperWastes.map((waste, index) => (
                <Card key={index} className="border-yellow-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image src={waste.image || "/placeholder.svg"} alt={waste.name} fill className="object-cover" />
                    </div>
                    <CardTitle className="text-yellow-800">{waste.name}</CardTitle>
                    <CardDescription>{waste.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-2">Contoh:</h4>
                        <div className="flex flex-wrap gap-1">
                          {waste.examples.map((example, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <p className="text-sm text-yellow-700">
                          <strong>Tips:</strong> {waste.tips}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Hazardous Waste */}
          <TabsContent value="b3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-red-800 mb-2">Sampah B3 (Bahan Berbahaya & Beracun)</h2>
              <p className="text-gray-600">
                Sampah yang mengandung bahan kimia berbahaya dan memerlukan penanganan khusus
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hazardousWastes.map((waste, index) => (
                <Card key={index} className="border-red-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image src={waste.image || "/placeholder.svg"} alt={waste.name} fill className="object-cover" />
                    </div>
                    <CardTitle className="text-red-800">{waste.name}</CardTitle>
                    <CardDescription>{waste.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-2">Contoh:</h4>
                        <div className="flex flex-wrap gap-1">
                          {waste.examples.map((example, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                        <p className="text-sm text-red-700">
                          <strong>⚠️ Penting:</strong> {waste.tips}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* General Tips Section */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips Umum Pemilahan Sampah</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-800">Yang Harus Dilakukan:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  Bersihkan wadah sebelum dibuang
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  Pisahkan berdasarkan jenis material
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  Gunakan tempat sampah yang berbeda
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  Kompres atau lipat untuk menghemat ruang
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-red-800">Yang Harus Dihindari:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  Mencampur sampah basah dan kering
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  Membuang B3 ke tempat sampah biasa
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  Mengabaikan label dan petunjuk
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  Membuang sampah sembarangan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
