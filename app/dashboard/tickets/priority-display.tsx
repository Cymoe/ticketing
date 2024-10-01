import { AlertTriangle } from 'lucide-react'

const PriorityDisplay = ({ priority }: { priority: string | number }) => {
    const getProperties = (priority: string | number) => {
        switch(String(priority)) {
            case '1':
                return { color: 'text-green-500', count: 1 }
            case '2':
                return { color: 'text-yellow-500', count: 2 }
            case '3':
                return { color: 'text-red-500', count: 3 }
            default:
                return { color: 'text-gray-500', count: 1 }
        }
    }

    const { color, count } = getProperties(priority)

    return (
        <div className="flex items-center gap-1">
            {[...Array(count)].map((_, index) => (
                <AlertTriangle key={index} className={`h-4 w-4 ${color}`} />
            ))}
        </div>
    )
}

export default PriorityDisplay