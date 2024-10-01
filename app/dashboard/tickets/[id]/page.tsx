import TicketForm from "@/app/dashboard/tickets/TicketForm"

async function getTicket(id: string) {
  try {
    const res = await fetch(`/api/tickets/${id}`)
    if (!res.ok) {
      if (res.status === 404) {
        return null
      }
      throw new Error('Failed to fetch ticket')
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching ticket:', error)
    return null
  }
}

export default async function TicketPage({ params }: { params: { id: string } }) {
  const ticket = await getTicket(params.id)
  
  if (!ticket) {
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-5">Ticket Not Found</h1>
        <p>The requested ticket does not exist.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Edit Ticket</h1>
      <div className="max-w-2xl">
        <TicketForm ticket={ticket} />
      </div>
    </div>
  )
}


