import "./globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { Sidebar } from "./components/layout/sidebar.jsx"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("h-full bg-zinc-50 dark:bg-zinc-900", inter.className)}>
        <div className="flex h-full">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
} 