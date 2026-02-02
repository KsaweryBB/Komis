import Counter from "@/components/animation/Counter";
import styles from "./onas.module.css";
import { ShieldCheck, Users, Trophy, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Pasja do dwóch kółek od <span>15 lat</span>
          </h1>
          <p>
            Poznaj historię Moto Komisu, gdzie jakość spotyka się z miłością do
            motoryzacji.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.textSection}>
            <h2>Kim jesteśmy?</h2>
            <p>
              Nasz komis powstał z pasji, którą pielęgnujemy od lat. Nie
              jesteśmy tylko sprzedawcami – sami jesteśmy motocyklistami,
              dlatego rozumiemy potrzeby naszych klientów. Każda maszyna w
              naszej ofercie jest przez nas sprawdzana, jakbyśmy przygotowywali
              ją dla siebie.
            </p>
            <p>
              Specjalizujemy się w sprzedaży motocykli używanych oraz nowych,
              dbając o to, aby każda transakcja była przejrzysta i bezpieczna.
              Dzięki naszemu doświadczeniu, unikasz błędów przy zakupie i
              cieszysz się jazdą od pierwszego dnia.
            </p>
          </div>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <Users color="#22c55e" size={32} />
              <h3>
                <Counter value={2500}></Counter>
              </h3>

              <p>Zadowolonych klientów</p>
            </div>
            <div className={styles.statCard}>
              <Trophy color="#22c55e" size={32} />
              <h3>
                <Counter value={15}></Counter> lat
              </h3>
              <p>Doświadczenia w branży</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
