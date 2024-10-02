import { Suspense } from 'react'
import TicketForm from "@/app/dashboard/tickets/TicketForm"
import { Ticket } from '@/app/(models)/Ticket'
import { dbConnect } from '@/app/(models)/Ticket'
import { Types } from 'mongoose';

async function getTicket(id: string) {
  await dbConnect()
  
  // Check if the id is a valid ObjectId
  if (!Types.ObjectId.isValid(id)) {
    return null; // Return null if the id is not valid
  }
  
  const ticket = await Ticket.findById(id)
  return ticket ? JSON.parse(JSON.stringify(ticket)) : null
}

export default async function TicketPage({ params }: { params: { id: string } }) {
  const ticket = await getTicket(params.id)
  
  if (!ticket) {
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-5">Ticket Not Found</h1>
        <p>The requested ticket does not exist or the ID is invalid.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Edit Ticket</h1>
      <div className="max-w-2xl">
        <Suspense fallback={<div>Loading...</div>}>
          <TicketForm ticket={ticket} />
        </Suspense>
      </div>
    </div>
  )
}


