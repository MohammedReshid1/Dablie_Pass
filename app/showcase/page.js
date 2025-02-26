"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Share2, Eye } from "lucide-react"

const showcasePasses = [
  {
    id: 1,
    name: "Dablie Tech Club",
    creator: "Mohammed Reshid",
    image: "/showcase/dablie-tech.png",
    likes: 245,
    views: "1.2k",
    tags: ["Tech", "Community", "Education"]
  },
  {
    id: 2,
    name: "Unblocked Brands",
    creator: "Unblocked Team",
    image: "/showcase/unblocked.png",
    likes: 189,
    views: "985",
    tags: ["Business", "Marketing"]
  },
  // Add more showcase passes here
]

export default function ShowcasePage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Showcase</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-2">
          Discover amazing passes created by our community
        </p>
      </div>

      {/* Featured Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {showcasePasses.map((pass) => (
          <Card key={pass.id} className="overflow-hidden group">
            {/* Pass Image */}
            <div className="aspect-[2/1] relative overflow-hidden">
              <img
                src={pass.image}
                alt={pass.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="outline" className="text-white border-white">
                  <Eye className="h-4 w-4 mr-2" />
                  View Pass
                </Button>
              </div>
            </div>

            {/* Pass Info */}
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{pass.name}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    by {pass.creator}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                <span>{pass.likes} likes</span>
                <span>{pass.views} views</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {pass.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 