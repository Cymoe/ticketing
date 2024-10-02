import Link from 'next/link'
import DeleteBlock from './delete-block'
import PriorityDisplay from './priority-display'
import StatusDisplay from './status-display'

const formatTimestamp = (timestamp: string | null) => { 
    const options: Intl.DateTimeFormatOptions = 
    { year: 'numeric', 
      month: '2-digit', 
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };

    if (!timestamp) return 'N/A';

    const date = new Date(timestamp);
    return date.toLocaleString('en-US', options);
}


// Update the Ticket interface
interface Ticket {
    _id: string;
    title: string;
    description: string;
    category: string;
    priority: string | number;
    status: 'Open' | 'In Progress' | 'Closed';
    createdAt: string | null;
    progress?: number;
}



const TicketCard = ({ ticket }: { ticket: Ticket }) => {
    console.log("Rendering ticket:", ticket);
    return (
        <div className="flex flex-col bg-card hover:bg-accent transition-colors rounded-md shadow-sm p-3 h-full">
            <div className="flex justify-between items-start mb-3">
                <PriorityDisplay priority={ticket.priority.toString()} />
                <DeleteBlock id={ticket._id} />
            </div>
            <Link href={`/dashboard/tickets/${ticket._id}`} className="flex-grow">
                <h4 className="text-lg font-semibold mb-1">{ticket.title}</h4>
                <hr className="h-px border-0 bg-gray-200 mb-2" />
                <p className="text-sm text-gray-600 mb-2 line-clamp-3">{ticket.description}</p>
                <p className="text-xs text-gray-500 mb-2">Category: {ticket.category}</p>
            </Link>
            <div className="mt-auto">
                <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-gray-500">
                        {ticket.createdAt ? formatTimestamp(ticket.createdAt) : 'N/A'}
                    </p>
                    <StatusDisplay status={ticket.status} />
                </div>
            </div>
        </div>
    )
}

export default TicketCard