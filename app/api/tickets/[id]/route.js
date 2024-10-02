import { Ticket } from "@/app/(models)/Ticket";
import { dbConnect } from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { id } = params;
    await dbConnect();
    const ticket = await Ticket.findById(id);
    if (!ticket) {
        return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
    }
    return NextResponse.json(ticket);
}

export async function DELETE(req, { params }) {
    const { id } = params;
    await dbConnect();
    const deletedTicket = await Ticket.findByIdAndDelete(id);
    if (!deletedTicket) {
        return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Ticket deleted successfully" });
}

export async function PUT(req, { params }) {
    console.log("PUT request received for ticket ID:", params.id);
    try {
        const { id } = params;
        const data = await req.json();
        console.log("Received data:", data);

        await dbConnect();
        console.log("Database connected");

        const updatedTicket = await Ticket.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        console.log("Updated ticket:", updatedTicket);

        if (!updatedTicket) {
            console.log("Ticket not found");
            return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
        }
        return NextResponse.json(updatedTicket);
    } catch (error) {
        console.error("Error updating ticket:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PATCH(request, { params }) {
    const { id } = params;
    const body = await request.json();
    await dbConnect();
    const updatedTicket = await Ticket.findByIdAndUpdate(id, body, { new: true });
    if (!updatedTicket) {
        return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Ticket updated successfully", ticket: updatedTicket });
}




