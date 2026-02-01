import styles from "./home.module.css";
import { Reveal } from "../components/reveal/reveal";
import Link from "next/link";
import Image from "next/image";
import carImage from "../public/images/motorcycle-racer-2788196_640.webp";
import LatestOffers from "@/components/cards/homecards/homecards";

export default async function CarDealerPage() {
  let pages = [];

  try {
    // Pobieranie danych z Twojego API
    const res = await fetch("http://localhost:3000/api/pages", {
      cache: "no-store",
    });

    if (res.ok) {
      pages = await res.json();
    }
  } catch (error) {
    console.error("Błąd pobierania:", error);
  }

  // Naprawa błędu sortowania: sprawdzamy czy pages to tablica
  // Definiujemy lastSix TUTAJ, aby uniknąć ReferenceError
  const lastSix = Array.isArray(pages)
    ? [...pages].sort((a: any, b: any) => b.id - a.id).slice(0, 6)
    : [];

  return (
    <main className={styles.main}>
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            Twoja droga do <span>lepszego jutra</span> zaczyna się tutaj
          </h1>

          <p>
            Oferujemy starannie wyselekcjonowane samochody używane z pełną
            historią serwisową. Sprawdź naszą ofertę i odjedź nowym autem
            jeszcze dziś.
          </p>
        </div>
        <div className={styles.heroImage}>
          <Image src={carImage} alt="Luksusowy samochód w ofercie" priority />
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <h2>150+</h2>
            <p>Motocykli w ofercie</p>
          </div>
          <div className={styles.statItem}>
            <h2>12 lat</h2>
            <p>Doświadczenia</p>
          </div>
          <div className={styles.statItem}>
            <h2>2500+</h2>
            <p>Zadowolonych klientów</p>
          </div>
        </div>
      </section>

      {/* 3. LATEST OFFERS */}
      <section className={styles.offers}>
        <Reveal>
          <div className={styles.sectionHeader}>
            <h2>Ostatnie wpisy</h2>
            <div className={styles.lastestOffert}>
              <LatestOffers></LatestOffers>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. TRUST SECTION */}
      <section className={styles.trust}>
        <Reveal>
          <div className={styles.trustContent}>
            <h2>Dlaczego my?</h2>
            <ul className={styles.trustList}>
              <li>
                ✅ <strong>Gwarancja przebiegu</strong> – wpisujemy go na
                fakturę.
              </li>
              <li>
                ✅ <strong>Sprawdzone pochodzenie</strong> – tylko polskie
                salony i pewny import.
              </li>
              <li>
                ✅ <strong>Wsparcie po zakupie</strong> – serwis i ubezpieczenia
                w pakiecie.
              </li>
            </ul>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
