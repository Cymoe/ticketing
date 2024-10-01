import { dbConnect, Ticket } from '../../(models)/Ticket';
import { NextResponse } from "next/server";
import mongoose from 'mongoose'; // Add this import

export async function POST(request) {
    try {
        console.log('Attempting to connect to database...');
        await dbConnect();
        console.log('Database connection successful');

        const body = await request.json()
        console.log("Received body:", body);

        const { title, description, category, priority, status } = body
        if (!title || !description || !category || !priority || !status) {
            console.log("Missing required fields:", { title, description, category, priority, status });
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        console.log('Attempting to create ticket...');
        const ticket = new Ticket({ title, description, category, priority, status });
        await ticket.save();
        console.log("Created ticket:", ticket);

        return NextResponse.json({ ticket, message: "Ticket created successfully" }, { status: 201 })
    } catch (error) {
        console.error("Error creating ticket:", error);
        if (error instanceof mongoose.Error.ServerSelectionError) {
            return NextResponse.json({ error: "Unable to connect to the database. Please try again later." }, { status: 503 })
        }
        return NextResponse.json({ error: "An error occurred while creating the ticket." }, { status: 500 })
    }
}

export async function GET() {
    try {
        await dbConnect();
        const tickets = await Ticket.find({}).sort({ createdAt: -1 });
        return NextResponse.json(tickets);
    } catch (error) {
        console.error("Error fetching tickets:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        await dbConnect();
        const body = await request.json();
        const { id } = body;
        if (!id) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const ticket = await Ticket.findByIdAndDelete(id);
        if (!ticket) {
            return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
        }

        return NextResponse.json({ ticket, message: "Ticket deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting ticket:", error);

        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        await dbConnect();
        const body = await request.json();
        const { id, title, description, category, priority, status } = body;
        if (!id || !title || !description || !category || !priority || !status) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const ticket = await Ticket.findByIdAndUpdate(id, { title, description, category, priority, status });
        if (!ticket) {
            return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
        }

        return NextResponse.json({ ticket, message: "Ticket updated successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error updating ticket:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}           
