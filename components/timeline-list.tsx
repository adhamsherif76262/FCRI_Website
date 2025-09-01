import { CheckCircle, Clock, AlertCircle } from "lucide-react"

interface TimelineItem {
  id: string
  title: string
  description: string
  timestamp: string
  status: "completed" | "in-progress" | "upcoming"
  user?: string
}

interface TimelineListProps {
  items: TimelineItem[]
}

export default function TimelineList({ items = [] }: TimelineListProps) {
  const defaultItems: TimelineItem[] = [
    {
      id: "1",
      title: "Project Kickoff",
      description: "Initial project meeting with stakeholders",
      timestamp: "2024-01-10 09:00",
      status: "completed",
      user: "John Doe",
    },
    {
      id: "2",
      title: "Requirements Gathering",
      description: "Collect and document project requirements",
      timestamp: "2024-01-12 14:30",
      status: "completed",
      user: "Jane Smith",
    },
    {
      id: "3",
      title: "Design Phase",
      description: "Create wireframes and mockups",
      timestamp: "2024-01-15 10:00",
      status: "in-progress",
      user: "Mike Johnson",
    },
    {
      id: "4",
      title: "Development Sprint 1",
      description: "Begin core feature development",
      timestamp: "2024-01-20 09:00",
      status: "upcoming",
    },
  ]

  const displayItems = items.length > 0 ? items : defaultItems

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-blue-500" />
      case "upcoming":
        return <AlertCircle className="h-5 w-5 text-gray-400" />
      default:
        return <AlertCircle className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-500"
      case "in-progress":
        return "border-blue-500"
      case "upcoming":
        return "border-gray-300"
      default:
        return "border-gray-300"
    }
  }

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

      <div className="space-y-6">
        {displayItems.map((item) => (
          <div key={item.id} className="relative flex items-start space-x-4">
            {/* Timeline dot */}
            <div
              className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 bg-white ${getStatusColor(item.status)}`}
            >
              {getStatusIcon(item.status)}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pb-6">
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                    {item.user && <p className="text-sm text-gray-500 mt-2">Assigned to: {item.user}</p>}
                  </div>
                  <time className="text-sm text-gray-500 whitespace-nowrap ml-4">{item.timestamp}</time>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
