"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { cn } from "../../lib/utils"
import {
  User,
  Building2,
  CreditCard,
  Bell,
  Lock,
  Mail,
  Globe,
  ChevronRight
} from "lucide-react"

const tabs = [
  { id: "account", label: "Account", icon: User },
  { id: "workspace", label: "Workspace", icon: Building2 },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "billing", label: "Billing", icon: CreditCard }
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account")
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [marketingEmails, setMarketingEmails] = useState(false)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-2">
          Manage your account and workspace preferences
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <nav className="lg:w-64 flex-shrink-0">
          <Card>
            <div className="p-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center w-full space-x-3 rounded-lg px-3 py-2 text-sm transition-colors
                    ${activeTab === tab.id
                      ? "bg-zinc-900 text-white dark:bg-zinc-700"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }
                  `}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </button>
              ))}
            </div>
          </Card>
        </nav>

        {/* Content Area */}
        <div className="flex-1 space-y-6">
          {/* Account Settings */}
          {activeTab === "account" && (
            <>
              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-6 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Personal Information
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Full Name
                      </label>
                      <Input defaultValue="Mohammed Reshid" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input defaultValue="mohammedabdulwasi123@gmail.com" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Bio
                    </label>
                    <Textarea
                      placeholder="Write a short bio..."
                      className="h-24"
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-6 flex items-center">
                  <Lock className="h-5 w-5 mr-2" />
                  Password & Security
                </h2>
                <Button>Change Password</Button>
              </Card>
            </>
          )}

          {/* Workspace Settings */}
          {activeTab === "workspace" && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6 flex items-center">
                <Building2 className="h-5 w-5 mr-2" />
                Workspace Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Workspace Name
                  </label>
                  <Input defaultValue="Mohammed Reshid's Passes" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Website
                  </label>
                  <div className="flex space-x-2">
                    <div className="bg-zinc-100 dark:bg-zinc-800 rounded px-3 py-2 text-sm">
                      <Globe className="h-4 w-4 inline mr-2" />
                      https://
                    </div>
                    <Input placeholder="your-website.com" />
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Notification Settings */}
          {activeTab === "notifications" && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6 flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notification Preferences
              </h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Receive notifications about your passes via email
                    </p>
                  </div>
                  <Switch
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Marketing Emails</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Receive updates about new features and promotions
                    </p>
                  </div>
                  <Switch
                    checked={marketingEmails}
                    onCheckedChange={setMarketingEmails}
                  />
                </div>
              </div>
            </Card>
          )}

          {/* Billing Settings */}
          {activeTab === "billing" && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6 flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Subscription Plan
              </h2>
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 mb-6">
                <p className="font-medium">Current Plan: Legacy</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  You have free access to all features during our beta period
                </p>
              </div>
              <Button className="bg-zinc-900 hover:bg-zinc-800">
                Manage Subscription
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
} 