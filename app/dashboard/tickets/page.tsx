import { Suspense } from 'react'
import TicketCard from "./ticket-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { PlusCircle } from "lucide-react"
import dbConnect from '@/lib/dbConnect'
import React from 'react';
import { Ticket } from '@/app/(models)/Ticket' // Import the Ticket model, not the type

export const revalidate = 0

async function getTickets() {
  await dbConnect()
  const tickets = await Ticket.find({}).sort({ createdAt: -1 })
  console.log("Fetched tickets:", tickets);
  return tickets.map(ticket => {
    const plainTicket = ticket.toObject()
    return {
      ...plainTicket,
      _id: plainTicket._id.toString(),
      createdAt: plainTicket.createdAt ? plainTicket.createdAt.toISOString() : null,
    }
  })
}

// Update the Ticket type to include createdAt
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

const categories = ['Hardware Problem', 'Software Problem', 'Network Problem'];


export default async function TicketsPage() {
  const tickets = await getTickets() as unknown as Ticket[]

  // Group tickets by category
  const ticketsByCategory = categories.reduce<Record<string, Ticket[]>>((acc, category) => {
    acc[category] = tickets.filter((ticket: Ticket) => ticket.category === category);
    return acc;
  }, {});

  return (
    <div className="p-5">
      <div className="mb-4 flex justify-between items-center">
        <Button asChild>
          <Link href="/dashboard/tickets/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Ticket
          </Link>
        </Button>
      </div>
      <Tabs defaultValue={categories[0]} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {categories.map(category => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map(category => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <Suspense fallback={<div>Loading tickets...</div>}>
                {ticketsByCategory[category].map((ticket: Ticket) => (
                  <TicketCard 
                    key={ticket._id} 
                    ticket={{
                      ...ticket,
                      priority: Number(ticket.priority),
                      createdAt: ticket.createdAt ? new Date(ticket.createdAt).toISOString() : null,
                      status: ticket.status as 'Open' | 'In Progress' | 'Closed',
                      progress: ticket.progress || 0
                    }}
                  />
                ))}
              </Suspense>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  // ...
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleDelete = async (id: string) => {
  // ...
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // ...
};
