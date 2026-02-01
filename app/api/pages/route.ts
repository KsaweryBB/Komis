import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("pages")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const carData = {
      marka: body.marka,
      moc: body.moc ? parseFloat(body.moc) : null,
      rokprodukcji: body.rokprodukcji ? parseInt(body.rokprodukcji) : null,
      cena: body.cena ? parseFloat(body.cena) : null,
      nadwozie: body.nadwozie,
      rodzajpaliwa: body.rodzajpaliwa,
      stan: body.stan,
      uszkodzenia: body.uszkodzenia,
      pojemnoscskokowa: body.pojemnoscskokowa
        ? parseInt(body.pojemnoscskokowa)
        : null,
      kolor: body.kolor,
      przebieg: body.przebieg ? parseInt(body.przebieg) : null,
      skrzynia: body.skrzynia,
      content: body.content,
      slug: body.slug || `auto-${Date.now()}`,
      imageUrl: body.imageUrl || null,
    };

    const { data, error } = await supabase
      .from("pages")
      .insert([carData])
      .select();

    if (error) {
      console.error("Supabase Error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 });
  }
}
