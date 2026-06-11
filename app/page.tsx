import styles from "./home.module.css";
import { Reveal } from "../components/reveal/reveal";
import Link from "next/link";
import Image from "next/image";
import carImage from "../public/images/motorcycle-racer-2788196_640.webp";
import LatestOffers from "@/components/cards/homecards/homecards";
import Counter from "@/components/animation/Counter";
import { ArrowDown } from "lucide-react";
import MotoStats from "@/components/animation/Motostats/MotoStats";
import EditableText from "@/components/Editabletext/EditableText";
import { getText } from "@/lib/supabase";

export const metadata = {
  title: "MotoKomis",
  description: "Zaufany sklep motocyklowy",
};

export default async function CarDealerPage() {
  // Pobieramy teksty z Supabase
  const heroTitle = await getText("hero_title");
  const heroSubtitle = await getText("hero_subtitle");
  const statsMoto = await getText("stats_moto");
  const statsYears = await getText("stats_years");
  const statsClients = await getText("stats_clients");
  const lastPosts = await getText("last_posts");
  const whyUs = await getText("why_us");
  const howBuy = await getText("how_buy");

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            <EditableText id="hero_title" defaultText={heroTitle} />
          </h1>

          <p>
            <EditableText id="hero_subtitle" defaultText={heroSubtitle} />
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
            <p>
              <EditableText id="stats_moto" defaultText={statsMoto} />
            </p>
          </div>

          <div className={styles.statItem}>
            <h2>
              <Counter value={12} /> lat
            </h2>
            <p>
              <EditableText id="stats_years" defaultText={statsYears} />
            </p>
          </div>

          <div className={styles.statItem}>
            <h2>
              <Counter value={2500} />
            </h2>
            <p>
              <EditableText id="stats_clients" defaultText={statsClients} />
            </p>
          </div>
        </div>
      </section>

      <section className={styles.offers}>
        <Reveal>
          <div className={styles.sectionHeader}>
            <div className={styles.headerStyl}>
              <h2>
                <EditableText id="last_posts" defaultText={lastPosts} />
              </h2>
            </div>

            <div className={styles.lastestOffert}>
              <LatestOffers />
            </div>
          </div>
        </Reveal>
      </section>

      <section className={styles.trust}>
        <Reveal>
          <div className={styles.trustContent}>
            <div className={styles.headerStyl}>
              <h2>
                <EditableText id="why_us" defaultText={whyUs} />
              </h2>
            </div>

            <ul className={styles.trustList}>
              <li>✅ <strong>Gwarancja przebiegu</strong> – wpisujemy go na fakturę.</li>
              <li>✅ <strong>Sprawdzone pochodzenie</strong> – tylko polskie salony i pewny import.</li>
              <li>✅ <strong>Wsparcie po zakupie</strong> – serwis i ubezpieczenia w pakiecie.</li>
            </ul>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className={styles.howBuy}>
          <div className={styles.headerStyl}>
            <h2>
              <EditableText id="how_buy" defaultText={howBuy} />
            </h2>
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
          <MotoStats />
        </section>
      </Reveal>
    </main>
  );
}
