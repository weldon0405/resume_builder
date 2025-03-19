"use client"

import { Award, Briefcase, FileText, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            asChild
            tooltip="Achievements"
            className="hover:bg-teal-100 data-[active=true]:bg-teal-200 data-[active=true]:text-teal-900"
          >
            <a href="#achievements">
              <Award className="text-teal-600" />
              <span>Achievements</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            asChild
            tooltip="Job Analysis"
            className="hover:bg-teal-100 data-[active=true]:bg-teal-200 data-[active=true]:text-teal-900"
          >
            <a href="#job-analysis">
              <Briefcase className="text-teal-600" />
              <span>Job Analysis</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            asChild
            tooltip="Resume Snippets"
            className="hover:bg-teal-100 data-[active=true]:bg-teal-200 data-[active=true]:text-teal-900"
          >
            <a href="#snippets">
              <FileText className="text-teal-600" />
              <span>Resume Snippets</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
