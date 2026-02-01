import { supabase } from "@/lib/supabase";

interface PageProps {
  // Nazwa folderu to [slug], więc parametr wciąż nazywa się slug, 
  // ale teraz będzie zawierał UUID (np. 6a21522d...)
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const carId = resolvedParams.slug; // To jest teraz Twoje UUID

  // Szukamy bezpośrednio po kolumnie 'id'
  const { data, error } = await supabase
    .from("pages")
    .select("*")
    .eq("id", carId) 
    .maybeSingle(); 



  if (!data) {
    return (
      <h1 style={{ padding: 120, textAlign: "center" }}>
        Nie znaleziono pojazdu o ID: {carId}
      </h1>
    );
  }

  return (
    <div style={{ padding: "120px 40px 40px", maxWidth: 800, margin: "0 auto" }}>
      {/* WYŚWIETLANIE ZDJĘCIA */}
      {data.imageUrl ? (
        <div style={{ marginBottom: 20, position: "relative", height: "450px", width: "100%" }}>
          <img 
            src={data.imageUrl} 
            alt={data.marka} 
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "15px" }} 
          />
        </div>
      ) : (
        <div style={{ marginBottom: 20, padding: "80px 40px", background: "#f5f5f5", textAlign: "center", borderRadius: "15px" }}>
          Brak zdjęcia
        </div>
      )}

      <h1>{data.marka}</h1>

      <ul style={{ 
        listStyle: "none", padding: "20px", display: "grid", 
        gridTemplateColumns: "1fr 1fr", gap: "15px", 
        background: "#fff", borderRadius: "12px", border: "1px solid #eee" 
      }}>
        <li><strong>Cena:</strong> {data.cena} PLN</li>
        <li><strong>Rok:</strong> {data.rokprodukcji}</li>
        <li><strong>Moc:</strong> {data.moc} KM</li>
        <li><strong>Przebieg:</strong> {data.przebieg} km</li>
        <li><strong>Paliwo:</strong> {data.rodzajpaliwa}</li>
        <li><strong>Skrzynia:</strong> {data.skrzynia}</li>
      </ul>

      <div style={{ marginTop: 30, borderTop: "1px solid #eee", paddingTop: 20 }}>
        <h3>Opis pojazdu:</h3>
        <p style={{ lineHeight: "1.8", whiteSpace: "pre-wrap" }}>{data.content}</p>
      </div>
    </div>
  );
}