type TicketStatus = 'Open' | 'In Progress' | 'Closed' // Add all possible statuses

const StatusDisplay = ({ status }: { status: TicketStatus }) => {
    const getColor = (status: TicketStatus) => {
        switch(status) {
            case 'Open': return 'bg-red-500'
            case 'In Progress': return 'bg-yellow-500'
            case 'Closed': return 'bg-green-500'
            default: return 'bg-gray-500'
        }
    }

    return (
        <span className={`inline-block px-2 py-1 text-xs font-semibold text-white rounded-full align-bottom ${getColor(status)}`}>
            {status}
        </span>
    )
}

export default StatusDisplay;