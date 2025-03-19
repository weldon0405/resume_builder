"use client"

import { Award, Briefcase, FileText, Home, Settings } from "lucide-react"
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

export function Sidebar() {
  return (
    <SidebarComponent className="bg-teal-50 text-teal-900">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-teal-700">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Dashboard"
                  className="hover:bg-teal-100 data-[active=true]:bg-teal-200 data-[active=true]:text-teal-900"
                >
                  <a href="#">
                    <Home className="text-teal-600" />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
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
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-teal-700">Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Settings"
                  className="hover:bg-teal-100 data-[active=true]:bg-teal-200 data-[active=true]:text-teal-900"
                >
                  <a href="#settings">
                    <Settings className="text-teal-600" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </SidebarComponent>
  )
}

