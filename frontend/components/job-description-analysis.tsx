"use client"

import { useState } from "react"
import { Briefcase, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CollapsibleSection } from "@/components/collapsible-section"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function JobDescriptionAnalysis() {
    const [jobDescription, setJobDescription] = useState("")
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [analysisComplete, setAnalysisComplete] = useState(false)

    // Sample analysis results
    const keySkills = [
        { name: "React", match: 90 },
        { name: "TypeScript", match: 85 },
        { name: "Node.js", match: 70 },
        { name: "UI/UX Design", match: 60 },
        { name: "Project Management", match: 80 },
    ]

    const handleAnalyze = () => {
        if (!jobDescription.trim()) return

        setIsAnalyzing(true)
        // Simulate analysis delay
        setTimeout(() => {
            setIsAnalyzing(false)
            setAnalysisComplete(true)
        }, 1500)
    }

    const handleUpload = () => {
        // This would be implemented with a file input in a real application
        alert("File upload functionality would be implemented here")
    }

    return (
        <CollapsibleSection title="Job Description Analysis" icon={<Briefcase className="h-6 w-6" />} id="job-analysis">
            <div className="space-y-4">
                <Tabs defaultValue="paste" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                        <TabsTrigger
                            value="paste"
                            className="data-[state=active]:bg-white data-[state=active]:text-teal-700 data-[state=active]:shadow-none"
                        >
                            Paste Job Description
                        </TabsTrigger>
                        <TabsTrigger
                            value="upload"
                            className="data-[state=active]:bg-white data-[state=active]:text-teal-700 data-[state=active]:shadow-none"
                        >
                            Upload File
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="paste" className="space-y-4 pt-4">
                        <Textarea
                            placeholder="Paste job description here..."
                            className="min-h-[200px] border-gray-300 focus-visible:ring-teal-500"
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                        />
                        <Button
                            onClick={handleAnalyze}
                            disabled={isAnalyzing || !jobDescription.trim()}
                            className="w-full bg-teal-600 text-white hover:bg-teal-700 sm:w-auto"
                        >
                            {isAnalyzing ? "Analyzing..." : "Analyze Job Description"}
                        </Button>
                    </TabsContent>
                    <TabsContent value="upload" className="space-y-4 pt-4">
                        <Card className="border-dashed border-gray-300">
                            <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                                <div className="rounded-full bg-teal-50 p-6">
                                    <Upload className="h-10 w-10 text-teal-600" />
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-500">Upload a job description file (PDF, DOCX, or TXT)</p>
                                </div>
                                <Button onClick={handleUpload} className="bg-teal-600 text-white hover:bg-teal-700">
                                    Upload File
                                </Button>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                {isAnalyzing && (
                    <div className="space-y-2">
                        <p className="text-sm text-gray-500">Analyzing job description...</p>
                        <Progress value={45} className="h-2 w-full bg-gray-100" />
                    </div>
                )}

                {analysisComplete && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="mb-2 text-lg font-medium text-teal-900">Key Skills Required</h3>
                            <div className="space-y-3">
                                {keySkills.map((skill) => (
                                    <div key={skill.name} className="space-y-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium">{skill.name}</span>
                                            <span className="text-sm text-gray-500">{skill.match}% match</span>
                                        </div>
                                        <Progress value={skill.match} className="h-2 w-full bg-gray-100" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-2 text-lg font-medium text-teal-900">Recommended Achievements</h3>
                            <div className="space-y-2">
                                <div className="rounded-md border border-gray-200 bg-white p-3 shadow-sm">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h4 className="font-medium text-teal-900">Increased team productivity by 30%</h4>
                                            <p className="text-sm text-gray-600">
                                                Implemented new project management system that streamlined workflows and improved team
                                                collaboration.
                                            </p>
                                        </div>
                                        <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">85% match</Badge>
                                    </div>
                                </div>
                                <div className="rounded-md border border-gray-200 bg-white p-3 shadow-sm">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h4 className="font-medium text-teal-900">Led cross-functional team of 8 engineers</h4>
                                            <p className="text-sm text-gray-600">
                                                Coordinated development efforts across frontend, backend, and QA teams to deliver product
                                                features on time.
                                            </p>
                                        </div>
                                        <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">78% match</Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </CollapsibleSection>
    )
}

