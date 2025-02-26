"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Bell, Link2, Eye, Plus } from "lucide-react"
import { cn } from "../lib/utils"
import Link from "next/link"

const stats = [
  {
    title: "Active Passes",
    value: "6",
    icon: FileText,
    trend: "+2 this month",
    trendUp: true
  },
  {
    title: "Total Notifications",
    value: "13",
    icon: Bell,
    trend: "+5 this week",
    trendUp: true
  },
  {
    title: "Link Clicks",
    value: "0",
    icon: Link2,
    trend: "No clicks yet",
    trendUp: null
  }
]

const notifications = [
  {
    passName: "Dablie Pass",
    notificationName: "Its Friday!",
    notificationsSent: "4",
    linkClicks: "0",
    date: "2024-03-15"
  },
  {
    passName: "Dablie Tech Club",
    notificationName: "Premium Membership",
    notificationsSent: "2",
    linkClicks: "0",
    date: "2024-03-14"
  },
  {
    passName: "Dablie Pass",
    notificationName: "Hello Again !",
    notificationsSent: "4",
    linkClicks: "0",
    date: "2024-03-13"
  }
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">
            Welcome back to your workspace
          </p>
        </div>
        <Link href="/passes/create">
          <Button className="bg-zinc-900 hover:bg-zinc-800">
            <Plus className="h-4 w-4 mr-2" />
            New Pass
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="relative overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-800 rounded-full p-3">
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4">
                <span className={cn(
                  "text-sm",
                  stat.trendUp === true ? "text-green-600" :
                  stat.trendUp === false ? "text-red-600" :
                  "text-zinc-500 dark:text-zinc-400"
                )}>
                  {stat.trend}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Notifications */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Recent Notifications</h2>
          <Button variant="outline">View All</Button>
        </div>
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium">Pass</th>
                  <th className="text-left p-4 font-medium">Notification</th>
                  <th className="text-left p-4 font-medium">Sent</th>
                  <th className="text-left p-4 font-medium">Clicks</th>
                  <th className="text-left p-4 font-medium">Date</th>
                  <th className="w-[48px]"></th>
                </tr>
              </thead>
              <tbody>
                {notifications.map((notification, index) => (
                  <tr key={index} className="border-b last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                    <td className="p-4">
                      <Badge variant="outline" className="font-normal">
                        {notification.passName}
                      </Badge>
                    </td>
                    <td className="p-4">{notification.notificationName}</td>
                    <td className="p-4">{notification.notificationsSent}</td>
                    <td className="p-4">{notification.linkClicks}</td>
                    <td className="p-4 text-zinc-500">{notification.date}</td>
                    <td className="p-4">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <FileText className="h-4 w-4 mr-2" />
              Create New Pass
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Bell className="h-4 w-4 mr-2" />
              Send Notification
            </Button>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Getting Started</h3>
          <p className="text-zinc-500 dark:text-zinc-400 mb-4">
            New to Dablie Pass? Here's how to get started:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
            <li>Create your first pass</li>
            <li>Customize your pass settings</li>
            <li>Send your first notification</li>
          </ol>
        </Card>
      </div>
    </div>
  )
} 