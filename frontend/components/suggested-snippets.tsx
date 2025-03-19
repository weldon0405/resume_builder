"use client"

import { useState } from "react"
import { Copy, FileText, Plus, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CollapsibleSection } from "@/components/collapsible-section"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"

export function SuggestedSnippets() {
  const [activeTab, setActiveTab] = useState("professional")
  const [editingSnippet, setEditingSnippet] = useState("")

  // Sample snippets
  const professionalSnippets = [
    {
      id: 1,
      content:
        "Led cross-functional team of 8 engineers to deliver a new product feature that increased user engagement by 25%. Coordinated development efforts across frontend, backend, and QA teams to ensure on-time delivery and high-quality implementation.",
    },
    {
      id: 2,
      content:
        "Implemented new project management system that streamlined workflows and improved team collaboration, resulting in a 30% increase in team productivity and reducing project delivery times by an average of 2 weeks.",
    },
  ]

  const technicalSnippets = [
    {
      id: 3,
      content:
        "Developed and implemented a React-based frontend architecture that improved application performance by 40% and reduced bundle size by 25%. Utilized TypeScript for type safety and implemented comprehensive unit testing with Jest, achieving 90% code coverage.",
    },
    {
      id: 4,
      content:
        "Designed and built RESTful APIs using Node.js and Express, serving over 1 million requests per day with 99.9% uptime. Implemented caching strategies and query optimizations that reduced database load by 35% and improved response times by 60%.",
    },
  ]

  const handleCopySnippet = (content: string) => {
    navigator.clipboard.writeText(content)
    toast("Copied to clipboard", {
      description: "The snippet has been copied to your clipboard.",
    })
  }

  const handleEditSnippet = (content: string) => {
    setEditingSnippet(content)
  }

  const getSnippets = () => {
    return activeTab === "professional" ? professionalSnippets : technicalSnippets
  }

  return (
    <CollapsibleSection
      title="Suggested Resume Snippets"
      icon={<FileText className="h-5 w-5" />}
      id="snippets"
    >
      <div className="space-y-6">
        <Tabs defaultValue="professional" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-slate-100 p-1 rounded-md">
            <TabsTrigger
              value="professional"
              className="rounded-md py-2 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all"
            >
              Professional
            </TabsTrigger>
            <TabsTrigger
              value="technical"
              className="rounded-md py-2 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all"
            >
              Technical
            </TabsTrigger>
          </TabsList>

          <TabsContent value="professional" className="space-y-4 pt-4">
            {professionalSnippets.map((snippet) => (
              <SnippetCard
                key={snippet.id}
                content={snippet.content}
                onCopy={handleCopySnippet}
                onEdit={handleEditSnippet}
              />
            ))}
          </TabsContent>

          <TabsContent value="technical" className="space-y-4 pt-4">
            {technicalSnippets.map((snippet) => (
              <SnippetCard
                key={snippet.id}
                content={snippet.content}
                onCopy={handleCopySnippet}
                onEdit={handleEditSnippet}
              />
            ))}
          </TabsContent>
        </Tabs>

        <div className="space-y-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
          <h3 className="text-lg font-medium text-slate-800">Draft Your Snippet</h3>
          <Textarea
            placeholder="Edit or write your own snippet here..."
            className="min-h-[150px] border-slate-200 bg-white focus-visible:ring-blue-500 text-slate-700"
            value={editingSnippet}
            onChange={(e) => setEditingSnippet(e.target.value)}
          />
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setEditingSnippet("")}
              className="border-slate-200 hover:bg-slate-50 hover:text-slate-700 font-medium"
            >
              Clear
            </Button>
            <Button
              onClick={() => handleCopySnippet(editingSnippet)}
              disabled={!editingSnippet.trim()}
              className="bg-blue-600 text-white hover:bg-blue-700 font-medium transition-colors"
            >
              <Copy className="mr-2 h-4 w-4" /> Copy to Clipboard
            </Button>
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <Button
            variant="outline"
            className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-medium"
          >
            <Plus className="mr-2 h-4 w-4" /> Create New Snippet
          </Button>
        </div>
      </div>
    </CollapsibleSection>
  )
}

interface SnippetCardProps {
  content: string
  onCopy: (content: string) => void
  onEdit: (content: string) => void
}

function SnippetCard({ content, onCopy, onEdit }: SnippetCardProps) {
  return (
    <Card className="border-slate-200 rounded-lg shadow-sm hover:shadow transition-shadow">
      <CardContent className="p-4">
        <p className="text-sm text-slate-700 leading-relaxed">{content}</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 border-t border-slate-100 bg-slate-50 p-2 rounded-b-lg">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(content)}
          className="h-8 border-slate-200 text-xs text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
          aria-label="Edit snippet"
        >
          <Edit className="mr-2 h-3 w-3" /> Edit
        </Button>
        <Button
          size="sm"
          onClick={() => onCopy(content)}
          className="h-8 bg-blue-600 text-xs text-white hover:bg-blue-700 transition-colors"
          aria-label="Copy snippet"
        >
          <Copy className="mr-2 h-3 w-3" /> Copy
        </Button>
      </CardFooter>
    </Card>
  )
}

