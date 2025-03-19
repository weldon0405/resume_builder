"use client"

import { useState } from "react"
import { Award, Edit, Plus, Search, Tag, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CollapsibleSection } from "@/components/collapsible-section"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Sample achievements data
const sampleAchievements = [
  {
    id: 1,
    title: "Increased team productivity by 30%",
    description:
      "Implemented new project management system that streamlined workflows and improved team collaboration.",
    tags: ["Leadership", "Project Management", "Productivity"],
  },
  {
    id: 2,
    title: "Reduced customer support response time by 50%",
    description: "Developed and implemented a new ticketing system with automated routing and prioritization.",
    tags: ["Customer Service", "Automation", "Process Improvement"],
  },
  {
    id: 3,
    title: "Led cross-functional team of 8 engineers",
    description:
      "Coordinated development efforts across frontend, backend, and QA teams to deliver product features on time.",
    tags: ["Leadership", "Team Management", "Engineering"],
  },
]

export function AchievementsLibrary() {
  const [achievements, setAchievements] = useState(sampleAchievements)
  const [searchTerm, setSearchTerm] = useState("")
  const [newAchievement, setNewAchievement] = useState({
    title: "",
    description: "",
    tags: "",
  })

  const filteredAchievements = achievements.filter(
    (achievement) =>
      achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const handleAddAchievement = () => {
    const tags = newAchievement.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "")

    setAchievements([
      ...achievements,
      {
        id: achievements.length + 1,
        title: newAchievement.title,
        description: newAchievement.description,
        tags,
      },
    ])

    setNewAchievement({
      title: "",
      description: "",
      tags: "",
    })
  }

  const handleDeleteAchievement = (id: number) => {
    setAchievements(achievements.filter((achievement) => achievement.id !== id))
  }

  return (
    <CollapsibleSection title="Achievements Library" icon={<Award className="h-6 w-6" />} id="achievements">
      <div className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Search achievements..."
              className="border-gray-300 pl-8 focus-visible:ring-teal-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-teal-600 text-white hover:bg-teal-700 w-full sm:w-auto">
                <Plus className="mr-2 h-4 w-4" /> Add Achievement
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Achievement</DialogTitle>
                <DialogDescription>Add a new professional achievement to your library.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Increased sales by 20%"
                    value={newAchievement.title}
                    onChange={(e) =>
                      setNewAchievement({
                        ...newAchievement,
                        title: e.target.value,
                      })
                    }
                    className="border-gray-300 focus-visible:ring-teal-500"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your achievement in detail..."
                    value={newAchievement.description}
                    onChange={(e) =>
                      setNewAchievement({
                        ...newAchievement,
                        description: e.target.value,
                      })
                    }
                    className="border-gray-300 focus-visible:ring-teal-500"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tags">Tags (comma separated)</Label>
                  <Input
                    id="tags"
                    placeholder="e.g., Leadership, Sales, Marketing"
                    value={newAchievement.tags}
                    onChange={(e) =>
                      setNewAchievement({
                        ...newAchievement,
                        tags: e.target.value,
                      })
                    }
                    className="border-gray-300 focus-visible:ring-teal-500"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  onClick={handleAddAchievement}
                  className="bg-teal-600 text-white hover:bg-teal-700"
                >
                  Add Achievement
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="rounded-md border border-gray-200">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="w-[300px]">Achievement</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead className="w-[100px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAchievements.length > 0 ? (
                filteredAchievements.map((achievement) => (
                  <TableRow key={achievement.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium text-teal-900">{achievement.title}</TableCell>
                    <TableCell>{achievement.description}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {achievement.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">
                            <Tag className="mr-1 h-3 w-3" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label="Edit achievement"
                          className="text-gray-500 hover:bg-teal-50 hover:text-teal-700"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label="Delete achievement"
                          onClick={() => handleDeleteAchievement(achievement.id)}
                          className="text-gray-500 hover:bg-red-50 hover:text-red-700"
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="h-24 text-center text-gray-500">
                    No achievements found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </CollapsibleSection>
  )
}

