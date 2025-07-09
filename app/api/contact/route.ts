import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const messages = await prisma.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch contacts." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    console.error("Error submitting contact:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}




export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required." }, { status: 400 });
    }

    await prisma.contact.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting contact:", error);
    return NextResponse.json({ error: "Failed to delete contact." }, { status: 500 });
  }
}