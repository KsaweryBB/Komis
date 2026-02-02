import Link from "next/link";
import { supabase } from "@/lib/supabase"; // Importuj swój skonfigurowany klient
import styles from "./homecards.module.css";

export default async function LatestOffers() {
  // 1. Pobieranie danych bezpośrednio z Supabase
  const { data: pages, error } = await supabase
    .from("pages")
    .select("*")
    .order("created_at", { ascending: false }) // Sortowanie bezpośrednio w bazie
    .limit(6);

  if (error) {
    console.error("Błąd pobierania ofert z Supabase:", error.message);
    return <p className={styles.empty}>Błąd ładowania ofert.</p>;
  }

  return (
    <ul className={styles.carList}>
      {pages && pages.length > 0 ? (
        pages.map((p: any) => (
          <li key={p.id} className={styles.carItem}>
            <div className={styles.imageWrapper}>
              {p.imageUrl ? (
                <img
                  src={p.imageUrl}
                  alt={`${p.marka} zdjęcie`}
                  className={styles.carThumbnail}
                />
              ) : (
                <div className={styles.noImage}>Brak zdjęcia</div>
              )}
            </div>

            <div className={styles.carDetails}>
              <span className={styles.carTitle}>{p.marka}</span>
              <div className={styles.carSubDetails}>
                <span>{p.rokprodukcji} r.</span>
                <span className={styles.carPrice}>{p.cena} PLN</span>
              </div>
              <Link href={`/motocykle/${p.id}`} className={styles.carLink}>
                Szczegóły oferty
              </Link>
            </div>
          </li>
        ))
      ) : (
        <p className={styles.empty}>Brak dostępnych ofert.</p>
      )}
    </ul>
  );
}
