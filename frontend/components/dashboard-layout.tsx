"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

