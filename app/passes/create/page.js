"use client"

import { Suspense } from "react"
import CreatePassForm from "./create-pass-form"

export default function CreatePassPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto py-8">
        <div className="animate-pulse space-y-8">
          <div className="h-8 w-48 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
          <div className="h-[200px] bg-zinc-200 dark:bg-zinc-800 rounded"></div>
        </div>
      </div>
    }>
      <CreatePassForm />
    </Suspense>
  )
} 