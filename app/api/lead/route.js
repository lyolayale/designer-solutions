import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request) {
  console.log("--- 1. API HIT! Form was submitted. ---");

  try {
    // 1. Check environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    // ADD THIS LINE:
    console.log("THE ACTUAL URL IS:", supabaseUrl);

    console.log("Supabase URL exists:", !!supabaseUrl);
    console.log("Supabase Key exists:", !!supabaseKey);

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing Supabase URL or Key in .env.local file!");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // 2. Get the form data
    console.log("--- 2. Parsing Form Data ---");
    const body = await request.json();
    const {
      name,
      email,
      phone,
      move_date,
      orgin_address,
      destination_address,
      property_type,
      num_bedrooms,
      details,
    } = body;
    console.log("Data received:", {
      name,
      email,
      phone,
      move_date,
      orgin_address,
      destination_address,
      property_type,
      num_bedrooms,
      details,
    });

    // 3. Try saving to Supabase
    console.log("--- 3. Sending to Supabase ---");
    const { data, error } = await supabase
      .from("leads")
      .insert([{ name, email, phone, move_date, details }]);
    // I REMOVED .selec() FROM THIS LINE

    if (error) {
      console.error("SUPABASE ERROR:", error); // This will print the exact database error
      throw error;
    }
    console.log("Supabase save successful!");

    // 4. Try triggering n8n
    console.log("--- 4. Triggering n8n ---");
    const n8nUrl = process.env.N8N_WEBHOOK_URL;

    // We wrap n8n in its own try/catch so if n8n fails, it doesn't crash the whole thing
    try {
      await fetch(n8nUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          move_date,
          details,
          orgin_address,
          destination_address,
          property_type,
          num_bedrooms,
        }),
      });
      console.log("n8n triggered successfully!");
    } catch (n8nError) {
      console.error(
        "n8n failed, but we saved the lead to Supabase anyway.",
        n8nError.message,
      );
    }

    console.log("--- 5. SUCCESS! Returning to frontend. ---");
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("--- API CRASHED ---");
    console.error("Error message:", error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
