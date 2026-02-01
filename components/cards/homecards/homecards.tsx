import Link from "next/link";
import styles from "./homecards.module.css"; // Pamiętaj o stworzeniu pliku CSS

export default async function LatestOffers() {
  let pages = [];

  try {
    // Pobieramy dane z Twojego API
    const res = await fetch("http://localhost:3000/api/pages", {
      cache: "no-store",
    });

    if (res.ok) {
      pages = await res.json();
    }
  } catch (error) {
    console.error("Błąd pobierania ofert:", error);
  }

  // Definiujemy lastSix TUTAJ, aby uniknąć błędu ReferenceError
  const lastSix = Array.isArray(pages) 
    ? [...pages].sort((a: any, b: any) => b.id - a.id).slice(0, 6) 
    : [];

  return (
    <ul className={styles.carList}>
      {lastSix.length > 0 ? (
        lastSix.map((p: any) => (
          <li key={p.id} className={styles.carItem}>
            <Link href={`/motocykle/${p.id}`} className={styles.carLink}>
              {/* Kontener na zdjęcie */}
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

              {/* Dane samochodu */}
              <div className={styles.carDetails}>
                <span className={styles.carTitle}>{p.marka}</span>
                <div className={styles.carSubDetails}>
                   <span>{p.rokprodukcji} r.</span>
                   <span className={styles.carPrice}>{p.cena} PLN</span>
                </div>
              </div>
            </Link>
          </li>
        ))
      ) : (
        <p className={styles.empty}>Brak dostępnych ofert.</p>
      )}
    </ul>
  );
}