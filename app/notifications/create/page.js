"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Bell } from "lucide-react"
import { cn } from "@/lib/utils"

export default function CreateNotificationPage() {
  const router = useRouter()
  const [selectedPass, setSelectedPass] = useState("")
  const [sendTime, setSendTime] = useState("immediately")
  const [notification, setNotification] = useState({
    name: "",
    message: "",
    scheduledTime: null
  })

  // Example passes - replace with actual data
  const passes = [
    { id: 1, name: "Dablie Tech Club Pass" },
    { id: 2, name: "Unblocked Brands Pass" },
  ]

  return (
    <div className="container mx-auto py-8">
      <div className="flex gap-8">
        {/* Left panel - Form */}
        <div className="flex-1">
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold">Create Notification</h1>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                Send a notification to your pass holders
              </p>
            </div>

            {/* Pass Selection */}
            <Card>
              <CardContent className="pt-6">
                <Select
                  value={selectedPass}
                  onValueChange={setSelectedPass}
                >
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder="Select a pass to create a notification" />
                  </SelectTrigger>
                  <SelectContent>
                    {passes.map((pass) => (
                      <SelectItem key={pass.id} value={pass.id.toString()} className="cursor-pointer">
                        {pass.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Notification Name */}
            <Card>
              <CardHeader>
                <CardTitle>Notification Name</CardTitle>
                <p className="text-sm text-zinc-500">
                  Will not be visible. For organizational purposes.
                </p>
              </CardHeader>
              <CardContent>
                <Input
                  value={notification.name}
                  onChange={(e) => setNotification(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. December Holiday Special"
                />
              </CardContent>
            </Card>

            {/* Notification Message */}
            <Card>
              <CardHeader>
                <CardTitle>What do you want your notification to say?</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={notification.message}
                  onChange={(e) => setNotification(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="e.g. Get an Exclusive Discount Now! Limited time offer for our valued members."
                  className="min-h-[100px]"
                />
              </CardContent>
            </Card>

            {/* Send Time */}
            <Card>
              <CardHeader>
                <CardTitle>Send Time</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup
                  value={sendTime}
                  onValueChange={setSendTime}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <RadioGroupItem value="immediately" id="immediately" className="cursor-pointer" />
                    <Label htmlFor="immediately" className="cursor-pointer">Send Immediately</Label>
                  </div>
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <RadioGroupItem value="schedule" id="schedule" className="cursor-pointer" />
                    <Label htmlFor="schedule" className="cursor-pointer">Schedule for Later</Label>
                  </div>
                </RadioGroup>

                {sendTime === "schedule" && (
                  <div className="space-y-4 pt-4">
                    <div>
                      <Label>Schedule Date and Time</Label>
                      <p className="text-sm text-zinc-500 mb-2">
                        Select when you want this notification to be sent
                      </p>
                      <Input
                        type="datetime-local"
                        value={notification.scheduledTime || ""}
                        onChange={(e) => setNotification(prev => ({
                          ...prev,
                          scheduledTime: e.target.value
                        }))}
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-4">
              <Button variant="outline" onClick={() => router.back()} className="cursor-pointer">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div className="space-x-2">
                <Button variant="outline" className="cursor-pointer">Save as Draft</Button>
                <Button className="bg-zinc-900 hover:bg-zinc-800 cursor-pointer">
                  {sendTime === "immediately" ? "Send Now" : "Schedule"}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel - Preview */}
        <div className="w-[400px] flex-shrink-0">
          <div className="sticky top-8">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-zinc-900 p-2">
                      <Bell className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">
                        {selectedPass ? passes.find(p => p.id.toString() === selectedPass)?.name : "Select a pass"}
                      </div>
                      <div className="text-sm text-zinc-500 mt-1">
                        {notification.message || "Your notification message will appear here"}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 