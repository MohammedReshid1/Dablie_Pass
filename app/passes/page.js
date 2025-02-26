"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Eye, MoreVertical } from "lucide-react"
import Link from "next/link"

const passes = [
  {
    id: 1,
    name: "Dablie Pass",
    status: "active",
    subscribers: "124",
    lastUpdated: "2024-03-15"
  },
  {
    id: 2,
    name: "Dablie Tech Club",
    status: "active",
    subscribers: "89",
    lastUpdated: "2024-03-14"
  }
]

export default function PassesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Passes</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">
            Manage your digital passes
          </p>
        </div>
        <Link href="/passes/create">
          <Button className="bg-zinc-900 hover:bg-zinc-800">
            <Plus className="h-4 w-4 mr-2" />
            Create Pass
          </Button>
        </Link>
      </div>

      {/* Passes List */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-medium">Pass Name</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Subscribers</th>
                <th className="text-left p-4 font-medium">Last Updated</th>
                <th className="w-[100px]"></th>
              </tr>
            </thead>
            <tbody>
              {passes.map((pass) => (
                <tr key={pass.id} className="border-b last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                  <td className="p-4 font-medium">{pass.name}</td>
                  <td className="p-4">
                    <Badge variant="outline" className={pass.status === "active" ? "text-green-600" : ""}>
                      {pass.status}
                    </Badge>
                  </td>
                  <td className="p-4">{pass.subscribers}</td>
                  <td className="p-4 text-zinc-500">{pass.lastUpdated}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/passes/${pass.id}`}>
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`/passes/create?edit=${pass.id}`}>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

