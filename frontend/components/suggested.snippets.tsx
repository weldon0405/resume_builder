"use client"

import { useState } from "react"
import { Copy, FileText, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CollapsibleSection } from "@/components/collapsible-section"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toaster } from "@/components/ui/sonner"
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
        toast("The snippet has been copied to your clipboard.")
    }

    const handleEditSnippet = (content: string) => {
        setEditingSnippet(content)
    }

    const getSnippets = () => {
        return activeTab === "professional" ? professionalSnippets : technicalSnippets
    }

    return (
        <CollapsibleSection title="Suggested Resume Snippets" icon={<FileText className="h-6 w-6" />} id="snippets">
            <div className="space-y-4">
                <Tabs defaultValue="professional" onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                        <TabsTrigger
                            value="professional"
                            className="data-[state=active]:bg-white data-[state=active]:text-teal-700 data-[state=active]:shadow-none"
                        >
                            Professional
                        </TabsTrigger>
                        <TabsTrigger
                            value="technical"
                            className="data-[state=active]:bg-white data-[state=active]:text-teal-700 data-[state=active]:shadow-none"
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

                <div className="space-y-2">
                    <h3 className="text-lg font-medium text-teal-900">Draft Your Snippet</h3>
                    <Textarea
                        placeholder="Edit or write your own snippet here..."
                        className="min-h-[150px] border-gray-300 focus-visible:ring-teal-500"
                        value={editingSnippet}
                        onChange={(e) => setEditingSnippet(e.target.value)}
                    />
                    <div className="flex justify-end gap-2">
                        <Button
                            variant="outline"
                            onClick={() => setEditingSnippet("")}
                            className="border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                        >
                            Clear
                        </Button>
                        <Toaster />
                        <Button
                            onClick={() => handleCopySnippet(editingSnippet)}
                            disabled={!editingSnippet.trim()}
                            className="bg-teal-600 text-white hover:bg-teal-700"
                        >
                            <Copy className="mr-2 h-4 w-4" /> Copy to Clipboard
                        </Button>
                    </div>
                </div>

                <div className="flex justify-center pt-4">
                    <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50 hover:text-teal-800">
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
        <Card className="border-gray-200 shadow-sm">
            <CardContent className="p-4">
                <p className="text-sm text-gray-700">{content}</p>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 border-t border-gray-100 bg-gray-50 p-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit(content)}
                    className="h-8 border-gray-200 text-xs text-gray-700 hover:bg-teal-50 hover:text-teal-700"
                >
                    Edit
                </Button>
                <Button
                    size="sm"
                    onClick={() => onCopy(content)}
                    className="h-8 bg-teal-600 text-xs text-white hover:bg-teal-700"
                >
                    <Copy className="mr-2 h-3 w-3" /> Copy
                </Button>
            </CardFooter>
        </Card>
    )
}

