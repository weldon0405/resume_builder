"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CollapsibleSectionProps {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
  id?: string
  className?: string
}

export function CollapsibleSection({
  title,
  icon,
  children,
  defaultOpen = true,
  id,
  className
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <Card
      id={id}
      className={cn(
        "w-full overflow-hidden border border-slate-200 shadow-sm",
        className
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-blue-600 to-blue-500 p-4 text-white">
        <CardTitle className="flex items-center gap-2 text-xl font-medium">
          {icon}
          {title}
        </CardTitle>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Collapse section" : "Expand section"}
          className="text-white hover:bg-blue-700/50"
        >
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </Button>
      </CardHeader>
      {isOpen && <CardContent className="p-4 pt-4 bg-white">{children}</CardContent>}
    </Card>
  )
}

