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

// This is sample data.
export const data = {
    user: {
        name: "Weldon",
        email: "weldon@cajundata.com",
        avatar: "/avatars/shadcn.jpg",
    },
    jobs: [
        {
            name: "Acme Rocket Inc",
            logo: Rocket,
            position: "Rocket Scientist",
        },
        {
            name: "Acme Biopharma Corp.",
            logo: Brain,
            position: "Chemical Engineer",
        },
        {
            name: "Evil Robot Corp.",
            logo: Bot,
            position: "Mad Genius",
        },
    ],
    navMain: [
        {
            title: "Playground",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "History",
                    url: "#",
                },
                {
                    title: "Starred",
                    url: "#",
                },
                {
                    title: "Settings",
                    url: "#",
                },
            ],
        },
        {
            title: "Models",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                },
                {
                    title: "Explorer",
                    url: "#",
                },
                {
                    title: "Quantum",
                    url: "#",
                },
            ],
        },
        {
            title: "Documentation",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "Introduction",
                    url: "#",
                },
                {
                    title: "Get Started",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
    ],
    projects: [
        {
            name: "Acme Rocket Inc",
            url: "#",
            icon: Rocket,
        },
        {
            name: "Acme Biopharma Corp.",
            url: "#",
            icon: Brain,
        },
        {
            name: "Evil Robot Corp.",
            url: "#",
            icon: Bot,
        },
    ],
    sampleAchievements: [
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
    ],
}