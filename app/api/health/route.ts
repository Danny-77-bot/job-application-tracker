import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/db";


export async function GET() {
  try {
    // Trigger the connection
    await connectDB();
    const states = ["Disconnected", "Connected", "Connecting", "Disconnecting"];
    const statusIndex = mongoose.connection.readyState;

    if (statusIndex === 1) {
      return NextResponse.json(
        { status: "success", message: states[statusIndex] },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { status: "error", message: states[statusIndex] },
      { status: 500 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { status: "error", error: error.message },
      { status: 500 }
    );
  }
}