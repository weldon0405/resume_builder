"use client"

import * as React from "react"
import {
  AudioWaveform,
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Bot,
  Command,
  FileText,
  Frame,
  GalleryVerticalEnd,
  Home,
  Map,
  PieChart,
  Rocket,
  Settings,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { JobSwitcher } from "@/components/job-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"


// ----------------------------------------------------------------------------
// MOCK DATA - REMOVE ONCE API IS IN PLACE
// ----------------------------------------------------------------------------
import { data } from "@/public/mock-data"
// ----------------------------------------------------------------------------
// MOCK DATA - REMOVE ONCE API IS IN PLACE
// ----------------------------------------------------------------------------



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <JobSwitcher jobs={data.jobs} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
