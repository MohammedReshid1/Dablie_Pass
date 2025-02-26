"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import {
  Upload,
  Plus,
  X,
  Edit,
  Image as ImageIcon,
  ArrowLeft,
  ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function CreatePassPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const editId = searchParams.get('edit')
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("front")
  const [selectedWallet, setSelectedWallet] = useState("apple") // or "google"
  const [frontFeatures, setFrontFeatures] = useState({
    passName: "",
    logo: null,
    coverImage: null,
    backgroundColor: "#ffffff",
    textColor: "#000000",
    qrCode: { url: "", displayText: "" }
  })
  const [backFeatures, setBackFeatures] = useState({
    featured: [],
    connect: [],
    deals: []
  })
  const [notificationIcon, setNotificationIcon] = useState(null)

  useEffect(() => {
    if (editId) {
      // Fetch pass data here
      // For now, we'll just simulate loading
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    } else {
      setIsLoading(false)
    }
  }, [editId])

  const handleImageUpload = (type, file) => {
    // Handle image upload logic here
    console.log(`Uploading ${type}:`, file)
  }

  const addBackItem = (section) => {
    setBackFeatures(prev => ({
      ...prev,
      [section]: [...prev[section], { displayText: "", link: "" }]
    }))
  }

  const removeBackItem = (section, index) => {
    setBackFeatures(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }))
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-900"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          {editId ? "Edit Pass" : "Create Pass"}
        </h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Button variant="outline">Save as Draft</Button>
          <Button className="bg-zinc-900 hover:bg-zinc-800">
            {editId ? "Save Changes" : "Create Pass"}
          </Button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Left panel - Form */}
        <div className="flex-1">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
              <TabsTrigger value="front">Front of Pass</TabsTrigger>
              <TabsTrigger value="back">Back of Pass</TabsTrigger>
            </TabsList>

            <TabsContent value="front" className="space-y-8">
              {/* Pass Name Section */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-2">Pass Name</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                  Displayed on the front of the pass
                </p>
                <Input placeholder="Enter pass name" />
              </Card>

              {/* Pass Design Section */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6">Pass Design</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                  Customize the design of your pass
                </p>

                <div className="space-y-8">
                  {/* Logo Upload */}
                  <div>
                    <h3 className="font-medium mb-2">Logo</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      Displayed on the front of the pass
                      <br />
                      PNG, JPG (recommended 150x150px or 480x150px)
                    </p>
                    <div className="flex items-center gap-4">
                      {frontFeatures.logo ? (
                        <div className="relative w-[150px] h-[150px] bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden">
                          <img
                            src={URL.createObjectURL(frontFeatures.logo)}
                            alt="Logo preview"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-[150px] h-[150px] bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
                          <ImageIcon className="h-8 w-8 text-zinc-400" />
                        </div>
                      )}
                      <div className="flex gap-2">
                        <Button variant="outline" onClick={() => document.getElementById('logo-upload').click()}>
                          <Upload className="h-4 w-4 mr-2" />
                          Upload
                        </Button>
                        <Button variant="ghost">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      </div>
                      <input
                        type="file"
                        id="logo-upload"
                        className="hidden"
                        accept="image/png,image/jpeg"
                        onChange={(e) => handleImageUpload('logo', e.target.files[0])}
                      />
                    </div>
                  </div>

                  {/* Cover Image Upload */}
                  <div>
                    <h3 className="font-medium mb-2">Cover Image</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      Displayed on the front of the pass
                      <br />
                      PNG, JPG (recommended 960x369px)
                    </p>
                    <div className="flex items-center gap-4">
                      {frontFeatures.coverImage ? (
                        <div className="relative w-[320px] h-[123px] bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden">
                          <img
                            src={URL.createObjectURL(frontFeatures.coverImage)}
                            alt="Cover preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-[320px] h-[123px] bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
                          <ImageIcon className="h-8 w-8 text-zinc-400" />
                        </div>
                      )}
                      <div className="flex gap-2">
                        <Button variant="outline" onClick={() => document.getElementById('cover-upload').click()}>
                          <Upload className="h-4 w-4 mr-2" />
                          Upload
                        </Button>
                        <Button variant="ghost">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      </div>
                      <input
                        type="file"
                        id="cover-upload"
                        className="hidden"
                        accept="image/png,image/jpeg"
                        onChange={(e) => handleImageUpload('cover', e.target.files[0])}
                      />
                    </div>
                  </div>

                  {/* Color Pickers */}
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-medium mb-2">Background Color</h3>
                      <div className="flex items-center gap-4">
                        <input
                          type="color"
                          value={frontFeatures.backgroundColor}
                          onChange={(e) => setFrontFeatures(prev => ({
                            ...prev,
                            backgroundColor: e.target.value
                          }))}
                          className="w-10 h-10 rounded cursor-pointer"
                        />
                        <Input
                          value={frontFeatures.backgroundColor}
                          onChange={(e) => setFrontFeatures(prev => ({
                            ...prev,
                            backgroundColor: e.target.value
                          }))}
                          className="w-32"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Text Color</h3>
                      <div className="flex items-center gap-4">
                        <input
                          type="color"
                          value={frontFeatures.textColor}
                          onChange={(e) => setFrontFeatures(prev => ({
                            ...prev,
                            textColor: e.target.value
                          }))}
                          className="w-10 h-10 rounded cursor-pointer"
                        />
                        <Input
                          value={frontFeatures.textColor}
                          onChange={(e) => setFrontFeatures(prev => ({
                            ...prev,
                            textColor: e.target.value
                          }))}
                          className="w-32"
                        />
                      </div>
                    </div>
                  </div>

                  {/* QR Code Section */}
                  <div>
                    <h3 className="font-medium mb-2">
                      QR Code
                      <span className="text-sm text-zinc-500 dark:text-zinc-400 ml-2">
                        (Optional)
                      </span>
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                      Enter a URL in the data field to generate a QR Code
                    </p>
                    <div className="space-y-4">
                      <div>
                        <Label>URL</Label>
                        <Input
                          value={frontFeatures.qrCode.url}
                          onChange={(e) => setFrontFeatures(prev => ({
                            ...prev,
                            qrCode: { ...prev.qrCode, url: e.target.value }
                          }))}
                          placeholder="https://"
                        />
                      </div>
                      <div>
                        <Label>Display Text</Label>
                        <Input
                          value={frontFeatures.qrCode.displayText}
                          onChange={(e) => setFrontFeatures(prev => ({
                            ...prev,
                            qrCode: { ...prev.qrCode, displayText: e.target.value }
                          }))}
                          placeholder="Enter display text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Notification Design Section */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-2">Notification Design</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                  Customize the notification users will receive
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Notification Title</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      Displayed above the push message
                    </p>
                    <Input placeholder="Enter notification title" />
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Icon</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      Displayed when a user receives a push notification
                      <br />
                      PNG, JPG (recommended 150x150px)
                    </p>
                    <div className="flex items-center gap-4">
                      {notificationIcon ? (
                        <div className="relative w-[150px] h-[150px] bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden">
                          <img
                            src={URL.createObjectURL(notificationIcon)}
                            alt="Icon preview"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-[150px] h-[150px] bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
                          <ImageIcon className="h-8 w-8 text-zinc-400" />
                        </div>
                      )}
                      <div className="flex gap-2">
                        <Button variant="outline" onClick={() => document.getElementById('icon-upload').click()}>
                          <Upload className="h-4 w-4 mr-2" />
                          Upload
                        </Button>
                        <Button variant="ghost">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      </div>
                      <input
                        type="file"
                        id="icon-upload"
                        className="hidden"
                        accept="image/png,image/jpeg"
                        onChange={(e) => handleImageUpload('icon', e.target.files[0])}
                      />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Continue to Back button */}
              <div className="sticky bottom-4 flex justify-end pt-4 border-t border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
                <Button
                  onClick={() => setActiveTab("back")}
                  className="bg-zinc-900 hover:bg-zinc-800"
                >
                  Continue to Back
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="back">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Add content to the pass</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                  Optional (Add up to 3)
                </p>

                {/* Featured Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Featured</h3>
                    {backFeatures.featured.length < 3 && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => addBackItem('featured')}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div className="space-y-4">
                    {backFeatures.featured.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-1 space-y-4">
                          <Input
                            placeholder="Display text"
                            value={item.displayText}
                            onChange={(e) => {
                              const newFeatured = [...backFeatures.featured]
                              newFeatured[index].displayText = e.target.value
                              setBackFeatures(prev => ({ ...prev, featured: newFeatured }))
                            }}
                          />
                          <Input
                            placeholder="Link"
                            value={item.link}
                            onChange={(e) => {
                              const newFeatured = [...backFeatures.featured]
                              newFeatured[index].link = e.target.value
                              setBackFeatures(prev => ({ ...prev, featured: newFeatured }))
                            }}
                          />
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeBackItem('featured', index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connect Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Connect</h3>
                    {backFeatures.connect.length < 3 && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => addBackItem('connect')}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div className="space-y-4">
                    {backFeatures.connect.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-1 space-y-4">
                          <Input
                            placeholder="Display text"
                            value={item.displayText}
                            onChange={(e) => {
                              const newConnect = [...backFeatures.connect]
                              newConnect[index].displayText = e.target.value
                              setBackFeatures(prev => ({ ...prev, connect: newConnect }))
                            }}
                          />
                          <Input
                            placeholder="Link"
                            value={item.link}
                            onChange={(e) => {
                              const newConnect = [...backFeatures.connect]
                              newConnect[index].link = e.target.value
                              setBackFeatures(prev => ({ ...prev, connect: newConnect }))
                            }}
                          />
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeBackItem('connect', index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deals Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Deals From our Partners</h3>
                    {backFeatures.deals.length < 3 && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => addBackItem('deals')}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div className="space-y-4">
                    {backFeatures.deals.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-1 space-y-4">
                          <Input
                            placeholder="Display text"
                            value={item.displayText}
                            onChange={(e) => {
                              const newDeals = [...backFeatures.deals]
                              newDeals[index].displayText = e.target.value
                              setBackFeatures(prev => ({ ...prev, deals: newDeals }))
                            }}
                          />
                          <Input
                            placeholder="Link"
                            value={item.link}
                            onChange={(e) => {
                              const newDeals = [...backFeatures.deals]
                              newDeals[index].link = e.target.value
                              setBackFeatures(prev => ({ ...prev, deals: newDeals }))
                            }}
                          />
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeBackItem('deals', index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right panel - Preview */}
        <div className="w-[400px] flex-shrink-0">
          <div className="sticky top-24">
            <Card className="p-6 space-y-6">
              <h2 className="text-xl font-semibold">Your Pass</h2>
              
              {/* Wallet selector */}
              <div className="flex gap-2 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                <button
                  onClick={() => setSelectedWallet("apple")}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-colors",
                    selectedWallet === "apple"
                      ? "bg-white dark:bg-zinc-900 shadow-sm"
                      : "hover:bg-white/50 dark:hover:bg-zinc-700/50"
                  )}
                >
                  <img
                    src="/apple-wallet.png"
                    alt="Apple Wallet"
                    className="h-5 w-5"
                  />
                  <span>Apple</span>
                </button>
                <button
                  onClick={() => setSelectedWallet("google")}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-colors",
                    selectedWallet === "google"
                      ? "bg-white dark:bg-zinc-900 shadow-sm"
                      : "hover:bg-white/50 dark:hover:bg-zinc-700/50"
                  )}
                >
                  <img
                    src="/google-wallet.png"
                    alt="Google Wallet"
                    className="h-5 w-5"
                  />
                  <span>Google</span>
                </button>
              </div>

              {/* Pass preview */}
              <div
                className="aspect-[1.586/1] rounded-xl overflow-hidden"
                style={{
                  backgroundColor: frontFeatures.backgroundColor,
                  color: frontFeatures.textColor
                }}
              >
                {/* Logo */}
                {frontFeatures.logo && (
                  <div className="p-4">
                    <img
                      src={URL.createObjectURL(frontFeatures.logo)}
                      alt="Logo"
                      className="h-12 object-contain"
                    />
                  </div>
                )}

                {/* Cover image */}
                {frontFeatures.coverImage && (
                  <div className="aspect-[960/369] w-full overflow-hidden">
                    <img
                      src={URL.createObjectURL(frontFeatures.coverImage)}
                      alt="Cover"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Pass name */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    {frontFeatures.passName || "Your Pass Name"}
                  </h3>
                </div>

                {/* QR Code placeholder */}
                {frontFeatures.qrCode.url && (
                  <div className="p-4 flex flex-col items-center">
                    <div className="w-32 h-32 bg-white rounded-lg"></div>
                    <p className="mt-2 text-sm">
                      {frontFeatures.qrCode.displayText}
                    </p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 