import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"

export function NotificationDialog({ notification, open, onOpenChange }) {
  if (!notification) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Notification Name: {notification.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">{notification.totalSent}</div>
                <p className="text-sm text-zinc-500">Total Notifications Sent</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">{notification.totalClicks}</div>
                <p className="text-sm text-zinc-500">Total Clicks</p>
              </CardContent>
            </Card>
          </div>

          {/* Click Tracking */}
          <Card>
            <CardHeader>
              <CardTitle>Click Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">URL</span>
                  <span className="text-sm font-medium">Total Clicks</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t">
                  <span className="text-sm text-zinc-500">{notification.url}</span>
                  <span className="text-sm">{notification.totalClicks}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Details */}
          <Card>
            <CardHeader>
              <CardTitle>Notification Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm font-medium mb-1">Published Date</div>
                <div className="text-sm text-zinc-500">
                  {formatDate(notification.publishedDate)}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-1">Message</div>
                <div className="text-sm text-zinc-500">
                  {notification.message}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
} 