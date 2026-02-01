"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import styles from "./new.module.css";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export default function NewPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      let uploadedImageUrl = "";

      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}-${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('car-images') 
          .upload(filePath, file);

        if (uploadError) throw new Error("Błąd przesyłania zdjęcia: " + uploadError.message);

        const { data: { publicUrl } } = supabase.storage
          .from('car-images')
          .getPublicUrl(filePath);
          
        uploadedImageUrl = publicUrl;
      }

      const payload = {
        ...data,
        moc: Number(data.moc),
        rokprodukcji: Number(data.rokprodukcji),
        cena: Number(data.cena),
        pojemnoscskokowa: Number(data.pojemnoscskokowa),
        przebieg: Number(data.przebieg),
        imageUrl: uploadedImageUrl,
      };

      const res = await fetch("/api/pages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Samochód dodany pomyślnie!");
        router.push("/admin");
      } else {
        alert("Błąd: " + (result.error || "Nieznany błąd"));
      }
    } catch (err: any) {
      alert("Wystąpił błąd: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <h1>Dodaj nowy pojazd</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <input name="marka" placeholder="Marka" required />
          <input name="slug" placeholder="Slug (unikalny)" required />
          <input name="moc" type="number" placeholder="Moc (KM)" required />
          <input name="rokprodukcji" type="number" placeholder="Rok produkcji" required />
          <input name="cena" type="number" placeholder="Cena (PLN)" required />
          <input name="nadwozie" placeholder="Nadwozie" />
          <input name="rodzajpaliwa" placeholder="Paliwo" />
          <input name="stan" placeholder="Stan" />
          <input name="kolor" placeholder="Kolor" />
          <input name="przebieg" type="number" placeholder="Przebieg" />
          <input name="skrzynia" placeholder="Skrzynia" />
          <input name="pojemnoscskokowa" type="number" placeholder="Pojemność" />
          <div className={styles.fileInput}>
            <label>Zdjęcie pojazdu:</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={(e) => setFile(e.target.files?.[0] || null)} 
              className={styles.file}
            />
          </div>
        </div>
        
        <textarea name="content" placeholder="Opis..." rows={6} required />
        
        <button type="submit" disabled={loading}>
          {loading ? "Wysyłanie..." : "Zapisz w bazie danych"}
        </button>
      </form>
    </div>
  );
}