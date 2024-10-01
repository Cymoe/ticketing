"use client"

import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface DeleteBlockProps {
  id: string;
}

function DeleteBlock({ id }: DeleteBlockProps) {
  return (
    <Button 
      variant="ghost" 
      size="icon"
      className="text-red-500 hover:text-red-600"
      onClick={() => {
        console.log('delete', id)
        // Implement delete functionality here
      }}
    >
      <X className="h-4 w-4" />
    </Button>
  )
}

export default DeleteBlock