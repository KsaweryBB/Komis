import styles from "./onas.module.css";
import { ShieldCheck, Users, Trophy, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Pasja do dwóch kółek od <span>15 lat</span></h1>
          <p>Poznaj historię Moto Komisu, gdzie jakość spotyka się z miłością do motoryzacji.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.textSection}>
            <h2>Kim jesteśmy?</h2>
            <p>
              Nasz komis powstał z pasji, którą pielęgnujemy od lat. Nie jesteśmy tylko sprzedawcami – sami jesteśmy motocyklistami, 
              dlatego rozumiemy potrzeby naszych klientów. Każda maszyna w naszej ofercie jest przez nas sprawdzana, 
              jakbyśmy przygotowywali ją dla siebie.
            </p>
            <p>
              Specjalizujemy się w sprzedaży motocykli używanych oraz nowych, dbając o to, aby każda transakcja była 
              przejrzysta i bezpieczna. Dzięki naszemu doświadczeniu, unikasz błędów przy zakupie i cieszysz się jazdą od pierwszego dnia.
            </p>
          </div>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <Users color="#22c55e" size={32} />
              <h3>2500+</h3>
              <p>Zadowolonych klientów</p>
            </div>
            <div className={styles.statCard}>
              <Trophy color="#22c55e" size={32} />
              <h3>15 lat</h3>
              <p>Doświadczenia w branży</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className={styles.values}>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <ShieldCheck color="#22c55e" size={40} />
            <h3>Gwarancja jakości</h3>
            <p>Każdy pojazd w naszej bazie przechodzi rygorystyczną kontrolę techniczną.</p>
          </div>
          <div className={styles.valueItem}>
            <MapPin color="#22c55e" size={40} />
            <h3>Lokalizacja</h3>
            <p>Znajdziesz nas w samym sercu regionu, z łatwym dojazdem i parkingiem dla klientów.</p>
          </div>
        </div>
      </section>
    </div>
  );
}