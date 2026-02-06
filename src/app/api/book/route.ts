
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAIL = process.env.OWNER_EMAIL || "robingautam@gmail.com"; // Fallback if env var missing

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, address, date, time, items, location } = body;

        // 1. Insert into Supabase
        const { data, error: dbError } = await supabase
            .from("bookings")
            .insert([
                {
                    name,
                    phone,
                    address,
                    date,
                    time,
                    items,
                    location_lat: location?.lat || null,
                    location_lng: location?.lng || null,
                },
            ])
            .select();

        if (dbError) {
            console.error("Supabase Error:", dbError);
            return NextResponse.json(
                { error: "Failed to save booking" },
                { status: 500 }
            );
        }

        // 2. Send Email Notification
        try {
            const mapsLink = location?.lat
                ? `https://www.google.com/maps?q=${location.lat},${location.lng}`
                : "Location not shared";

            await resend.emails.send({
                from: "Comex Orders <onboarding@resend.dev>", // Default Resend test domain
                to: OWNER_EMAIL,
                subject: `New Order: ${name} (${date})`,
                html: `
          <h1>New Dry Cleaning Order</h1>
          <p><strong>Customer:</strong> ${name}</p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Location:</strong> <a href="${mapsLink}">View on Maps</a></p>
          <hr />
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time Slot:</strong> ${time}</p>
          <p><strong>Items:</strong></p>
          <pre>${items}</pre>
        `,
            });
        } catch (emailError) {
            console.error("Resend Error:", emailError);
            // We don't fail the request if email fails, as the DB insert succeeded
        }

        return NextResponse.json({ success: true, filteredData: data });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
