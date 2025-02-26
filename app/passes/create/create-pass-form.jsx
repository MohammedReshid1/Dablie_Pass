"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

export default function CreatePassForm() {
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
    // Simulate loading data if in edit mode
    if (editId) {
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    } else {
      setIsLoading(false)
    }
  }, [editId])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-900"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex gap-8">
        {/* Left panel */}
        <div className="flex-1">
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold">{editId ? "Edit Pass" : "Create Pass"}</h1>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                {editId ? "Modify your existing pass" : "Create a new pass for your users"}
              </p>
            </div>

            {/* Pass Name */}
            <Card>
              <CardHeader>
                <CardTitle>Pass Name</CardTitle>
              </CardHeader>
              <CardContent>
                <Input placeholder="e.g. Dablie Tech Club Pass" />
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-4">
              <Button variant="outline" className="cursor-pointer" onClick={() => router.back()}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div className="space-x-2">
                <Button variant="outline" className="cursor-pointer">Save as Draft</Button>
                <Button className="bg-zinc-900 hover:bg-zinc-800 cursor-pointer">
                  {editId ? "Update" : "Create"}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="w-[400px] flex-shrink-0">
          <div className="sticky top-8">
            <Card>
              <CardHeader>
                <CardTitle>Pass Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-[3/2] bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-zinc-500">Pass preview will appear here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 