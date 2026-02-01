import { supabase } from "@/lib/supabase";
import Link from "next/link";
import styles from "../oferta.module.css";

export default async function OfertaNowePage() {
  // Pobieramy dane filtrując po kolumnie 'stan'
  // Zakładamy, że w bazie w kolumnie 'stan' wpisujesz tekst "nowe"
  const { data: pojazdy, error } = await supabase
    .from("pages")
    .select("*")
    .eq("stan", "Używany"); // Filtrowanie: tylko rekordy gdzie stan == 'nowe'

  if (error) {
    console.error("Błąd pobierania ofert:", error.message);
    return <div style={{ padding: 120, textAlign: "center" }}>Błąd ładowania danych.</div>;
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.hero}>
        <h1>Nowe <span>Pojazdy</span></h1>
        <p>Zobacz najnowsze modele prosto z salonu</p>
      </header>

      <section className={styles.container}>
        {pojazdy && pojazdy.length > 0 ? (
          <div className={styles.grid}>
            {pojazdy.map((auto) => (
              <Link key={auto.id} href={`../motocykle/${auto.id}`} className={styles.card}>
                <div className={styles.imageBox}>
                  {auto.imageUrl ? (
                    <img src={auto.imageUrl} alt={auto.marka} />
                  ) : (
                    <div className={styles.noImage}>Brak zdjęcia</div>
                  )}
                  <div className={styles.badge}>Używany</div>
                </div>

                <div className={styles.content}>
                  <div className={styles.mainInfo}>
                    <h3>{auto.marka}</h3>
                    <span className={styles.price}>{auto.cena} PLN</span>
                  </div>
                  
                  <div className={styles.specs}>
                    <span>{auto.rokprodukcji}</span>
                    <span className={styles.divider}>|</span>
                    <span>{auto.moc} KM</span>
                    <span className={styles.divider}>|</span>
                    <span>{auto.rodzajpaliwa}</span>
                  </div>

                  <button className={styles.btn}>Szczegóły oferty</button>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>Obecnie brak nowych pojazdów w ofercie.</div>
        )}
      </section>
    </div>
  );
}