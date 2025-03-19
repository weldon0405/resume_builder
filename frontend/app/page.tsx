import { DashboardLayout } from "@/components/dashboard-layout"
import { AchievementsLibrary } from "@/components/achievements-library"
import { JobDescriptionAnalysis } from "@/components/job-description-analysis"
import { SuggestedSnippets } from "@/components/suggested-snippets"

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 p-6">
        <AchievementsLibrary />
        <JobDescriptionAnalysis />
        <SuggestedSnippets />
      </div>
    </DashboardLayout>
  )
}

