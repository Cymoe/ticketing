import TicketForm from "@/app/dashboard/tickets/TicketForm"

export default function NewTicketPage() {
  return (
    <div className="container mx-auto py-5">
      <h1 className="text-2xl font-bold mb-5">Create New Ticket</h1>
      <div className="max-w-2xl">
        <TicketForm />
      </div>
    </div>
  )
}
