"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Settings,
  Bell,
  FileText,
  LogOut,
  Menu,
  Sparkles,
  Users
} from "lucide-react"
import { useState } from "react"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Passes", href: "/passes", icon: FileText },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Showcase", href: "/showcase", icon: Sparkles },
  { name: "Settings", href: "/settings", icon: Settings },
]

const communityLink = {
  name: "Community",
  href: "https://t.me/dablietech",
  icon: Users,
  external: true
}

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "relative flex flex-col bg-white dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-700 transition-all duration-300",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 bg-zinc-200 dark:bg-zinc-700 rounded-full p-1.5 hover:bg-zinc-300 dark:hover:bg-zinc-600"
      >
        <Menu className="h-4 w-4" />
      </button>

      {/* Logo */}
      <div className={cn(
        "flex items-center border-b border-zinc-200 dark:border-zinc-700 px-4",
        isCollapsed ? "h-16" : "h-32"
      )}>
        <Link href="/" className="flex items-center w-full">
          <img
            src="/dablie-pass.png"
            alt="Dablie Pass"
            className={cn(
              "transition-all duration-300",
              isCollapsed ? "h-8 w-8" : "h-24 w-full object-contain"
            )}
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-zinc-900 text-white dark:bg-zinc-700"
                  : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              )}
            >
              <item.icon className={cn("h-5 w-5 flex-shrink-0", 
                isActive ? "text-white" : "text-zinc-500 dark:text-zinc-400"
              )} />
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          )
        })}

        {/* Community Link */}
        <a
          href={communityLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm transition-colors",
            "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          )}
        >
          <communityLink.icon className="h-5 w-5 flex-shrink-0 text-zinc-500 dark:text-zinc-400" />
          {!isCollapsed && <span>{communityLink.name}</span>}
        </a>
      </nav>

      {/* Footer */}
      <div className="border-t border-zinc-200 dark:border-zinc-700 p-2">
        <button
          className={cn(
            "flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          )}
        >
          <LogOut className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  )
} 