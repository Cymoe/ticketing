"use client"

import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface DeleteBlockProps {
  id: string;
}

function DeleteBlock({ id }: DeleteBlockProps) {
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  const deleteTicket = async () => {
    setIsDeleting(true)
    try {
      const response = await fetch(`/api/tickets/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Failed to delete ticket')
      }
      router.refresh()
    } catch (error) {
      console.error('Error deleting ticket:', error)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <Button 
      variant="ghost" 
      size="icon"
      className="text-red-500 hover:text-red-600"
      onClick={deleteTicket}
      disabled={isDeleting}
    >
      <X className="h-4 w-4" />
    </Button>
  )
}

export default DeleteBlock