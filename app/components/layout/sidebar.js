"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Bell, HelpCircle, LayoutGrid, LogOut, Settings, Users } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const pathname = usePathname()

  const navigation = [
    {
      name: "Home",
      href: "/",
      icon: LayoutGrid,
      current: pathname === "/",
    },
    {
      name: "Passes",
      href: "/passes",
      icon: LayoutGrid,
      current: pathname === "/passes",
    },
    {
      name: "Push Notifications",
      href: "/notifications",
      icon: Bell,
      current: pathname === "/notifications",
    },
    {
      name: "Showcase",
      href: "/showcase",
      icon: Users,
      current: pathname === "/showcase",
    },
  ]

  return (
    <Sidebar className="w-72 border-r bg-sidebar text-sidebar-foreground">
      <SidebarHeader className="h-20 border-b px-4 pb-5 pt-7">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <Image
              src="/dablie-pass-transparent.png"
              alt="Logo"
              width={96}
              height={40}
              className="h-10 w-auto"
            />
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent className="flex-1">
        <SidebarMenu>
          {navigation.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                isActive={item.current}
                className={cn(
                  "group flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium",
                  item.current
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <Link href={item.href} className="flex items-center gap-3 w-full">
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {item.name}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="group flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <a 
                href="https://t.me/dablietech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full"
              >
                <Users className="h-5 w-5 flex-shrink-0" />
                Community
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="mb-4 rounded-lg bg-white/5 p-4">
          <p className="font-semibold">Legacy Plan</p>
          <p className="text-sm text-sidebar-foreground/70">
            Enjoy free access to all features.
          </p>
        </div>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="group flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <Link href="/help">
                <HelpCircle className="h-5 w-5 flex-shrink-0" />
                Help Center
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="group flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <Link href="/settings">
                <Settings className="h-5 w-5 flex-shrink-0" />
                Settings
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

