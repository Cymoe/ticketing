import mongoose, { Schema } from 'mongoose';

// Define TicketType interface
interface TicketType {
  // Define your ticket properties here
  title: string;
  description: string;
  category: string;
  priority: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

// Replace 'var' with 'const' and use TicketType
const ticketSchema = new Schema<TicketType>({
  // ... schema definition ...
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  priority: { type: String, required: true },
  status: { type: String, required: true },
}, { timestamps: true });

// Export the dbConnect function
export async function dbConnect() {
  // ... your dbConnect logic ...
}

// Export the Ticket model
export const Ticket = mongoose.models.Ticket || mongoose.model<TicketType>('Ticket', ticketSchema);

// Remove the default export