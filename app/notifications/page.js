"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { NotificationDialog } from "../../components/notifications/notification-dialog"

// Example notifications - replace with actual data
const notifications = [
  {
    id: 1,
    name: "Holiday Special",
    message: "Get 20% off on all passes!",
    totalSent: 1234,
    totalClicks: 567,
    url: "https://example.com/special",
    publishedDate: "2024-03-20T10:00:00Z"
  },
  {
    id: 2,
    name: "New Feature Alert",
    message: "Check out our latest features!",
    totalSent: 987,
    totalClicks: 432,
    url: "https://example.com/features",
    publishedDate: "2024-03-19T15:30:00Z"
  }
]

export default function NotificationsPage() {
  const router = useRouter()
  const [selectedNotification, setSelectedNotification] = useState(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">
            Manage and track your notifications
          </p>
        </div>
        <Button
          onClick={() => router.push("/notifications/create")}
          className="bg-zinc-900 hover:bg-zinc-800 cursor-pointer"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Notification
        </Button>
      </div>

      {/* Notifications List */}
      <div className="grid gap-4">
        {notifications.map((notification) => (
          <Card
            key={notification.id}
            className="p-6 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer"
            onClick={() => {
              setSelectedNotification(notification)
              setDialogOpen(true)
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{notification.name}</h3>
                <p className="text-sm text-zinc-500 mt-1">{notification.message}</p>
              </div>
              <div className="text-sm text-zinc-500">
                <div>Sent: {notification.totalSent}</div>
                <div>Clicks: {notification.totalClicks}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Notification Dialog */}
      <NotificationDialog
        notification={selectedNotification}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  )
}

