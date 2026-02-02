import styles from "./home.module.css";
import { Reveal } from "../components/reveal/reveal";
import Link from "next/link";
import Image from "next/image";
import carImage from "../public/images/motorcycle-racer-2788196_640.webp";
import LatestOffers from "@/components/cards/homecards/homecards";
import Counter from "@/components/animation/Counter";
import { ArrowDown } from "lucide-react";
import MotoStats from "@/components/animation/Motostats/MotoStats";

export default async function CarDealerPage() {
  let pages = [];

  try {
    const res = await fetch("http://localhost:3000/api/pages", {
      cache: "no-store",
    });

    if (res.ok) {
      pages = await res.json();
    }
  } catch (error) {
    console.error("Błąd pobierania:", error);
  }
  const lastSix = Array.isArray(pages)
    ? [...pages].sort((a: any, b: any) => b.id - a.id).slice(0, 6)
    : [];

  return (
    <main className={styles.main}>
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
      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <h2>
              <Counter value={150} />
            </h2>
            <p>Motocykli w ofercie</p>
          </div>
          <div className={styles.statItem}>
            <h2>
              <Counter value={12}></Counter> lat
            </h2>
            <p>Doświadczenia</p>
          </div>
          <div className={styles.statItem}>
            <h2>
              <Counter value={2500}></Counter>
            </h2>
            <p>Zadowolonych klientów</p>
          </div>
        </div>
      </section>
      <section className={styles.offers}>
        <Reveal>
          <div className={styles.sectionHeader}>
            <div className={styles.headerStyl}>
              <h2>Ostatnie wpisy</h2>
            </div>
            <div className={styles.lastestOffert}>
              <LatestOffers></LatestOffers>
            </div>
          </div>
        </Reveal>
      </section>
      <section className={styles.trust}>
        <Reveal>
          <div className={styles.trustContent}>
            <div className={styles.headerStyl}>
              <h2>Dlaczego my?</h2>
            </div>
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

      <Reveal>
        <section className={styles.howBuy}>
          <div className={styles.headerStyl}>
            <h2>Jak u nas kupic?</h2>
          </div>

          <div className={styles.buyContainer}>
            <h2>Rezerwacja:</h2>
            <p>Wybierz maszynę i umów się na oględziny.</p>
          </div>
          <ArrowDown className={styles.arrowIcon} />
          <div className={styles.buyContainer}>
            <h2>Jazda próbna:</h2>
            <p>Sprawdź, jak motocykl prowadzi się w trasie.</p>
          </div>
          <ArrowDown className={styles.arrowIcon} />
          <div className={styles.buyContainer}>
            <h2>Formalności:</h2>
            <p>My przygotujemy fakturę i dokumenty do rejestracji.</p>
          </div>
          <ArrowDown className={styles.arrowIcon} />
          <div className={styles.buyContainer}>
            <h2>Dostawa:</h2>
            <p>Odbierz motocykl osobiście lub zamów transport pod dom.</p>
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section className={styles.MotoStats}>
          <div className={styles.headerStyl}>
            <h2>Liczniki</h2>
          </div>
          <MotoStats></MotoStats>
        </section>
      </Reveal>
    </main>
  );
}
