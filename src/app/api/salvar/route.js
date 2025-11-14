
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export async function POST(req) {
  const data = await req.json();
  const { error } = await supabase.from("respostas").insert(data);
  return NextResponse.json({ success: !error, error });
}
