import { Reveal } from "@/components/reveal/reveal";
import styles from "./page.module.css";

export default function polityka() {
  return (
    <>
      <section className={styles.polityka}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.containerBox}>
              <h1>1. Informacje ogólne</h1>
              <p>
                Niniejsza Polityka Prywatności określa zasady przetwarzania i
                ochrony danych osobowych użytkowników korzystających z serwisu
                MotoKomis. Administratorem danych jest Ksawery Bieda, kontakt:
                veroweb001@gmail.com.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.containerBox}>
              <h1>2. Jakie dane przetwarzam?</h1>
              <p>
                W ramach korzystania z formularza kontaktowego, dobrowolnie
                podajesz swój adres e-mail oraz treść wiadomości. Dane te są
                niezbędne, abym mógł odpowiedzieć na Twoje zapytanie.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.containerBox}>
              <h1>3. Cel i podstawa przetwarzania</h1>
              <ul>
                <li>
                  <h2>Cel:</h2>
                  <p>Obsługa zapytania ofertowego i komunikacja z klientem.</p>
                </li>
                <li>
                  <h2>Podstawa:</h2>
                  <p>
                    Twoja zgoda wyrażona poprzez wysłanie wiadomości (art. 6
                    ust. 1 lit. a RODO).
                  </p>
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.containerBox}>
              <h1>4. Odbiorcy danych (Technologia)</h1>
              <p>
                Aby moja strona działała szybko i stabilnie, korzystam z usług
                zewnętrznych dostawców:
              </p>

              <ul>
                <li>
                  <h2>Vercel Inc.:</h2>
                  <p>Hosting strony internetowej.</p>
                </li>
                <li>
                  <h2>Resend:</h2>
                  <p>
                    Usługa przesyłania wiadomości e-mail z formularza. Twoje
                    dane są przesyłane bezpiecznym połączeniem szyfrowanym
                    (SSL).
                  </p>
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.containerBox}>
              <h1>5. Twoje prawa</h1>
              <p>
                Masz prawo do wglądu w swoje dane, ich poprawiania, żądania
                usunięcia lub ograniczenia przetwarzania. W tym celu napisz do
                mnie na adres: veroweb001@gmail.com.
              </p>
            </div>
            <div className={styles.containerBox}>
              <h1>6. Cookies</h1>
              <p>
                Strona może korzystać z plików cookies w celu zapewnienia
                poprawnego działania (np. sesje).
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
