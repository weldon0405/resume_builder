"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CollapsibleSectionProps {
    title: string
    icon: React.ReactNode
    children: React.ReactNode
    defaultOpen?: boolean
    id?: string
}

export function CollapsibleSection({ title, icon, children, defaultOpen = true, id }: CollapsibleSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    return (
        <Card id={id} className="w-full overflow-hidden border border-gray-200 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-teal-600 to-teal-500 p-4 text-white">
                <CardTitle className="flex items-center gap-2 text-xl font-medium">
                    {icon}
                    {title}
                </CardTitle>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Collapse section" : "Expand section"}
                    className="text-white hover:bg-teal-700/50"
                >
                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                </Button>
            </CardHeader>
            {isOpen && <CardContent className="p-4 pt-4">{children}</CardContent>}
        </Card>
    )
}
