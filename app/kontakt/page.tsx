"use client";
import styles from "./page.module.css";
import { Reveal } from "../../components/reveal/reveal";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <Reveal>
        <section className={styles.hero}>
          <h1>
            Napisz <span>do nas</span>
          </h1>
          <p>Szukasz nowego motocykla?</p>
          <p className={styles.lean}>
            Formularz tylko poglądowy, żadna wiadomość nie zostanie wysłana.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Twój Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="jan@kowalski.pl"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Wiadomość</label>
            <textarea
              name="message"
              required
              placeholder="W czym mogę Ci pomóc?"
              rows={5}
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            Wyślij
          </button>
          <div className={styles.privacy}>
            <p>
              Klikając "Wyślij", zgadzasz się na przetwarzanie Twoich danych w
              celu odpowiedzi na zapytanie. Szegóły znajdziesz w{" "}
              <Link className={styles.privacyLink} href="/polityka ">
                Polityce Prywatności
              </Link>
              .
            </p>
          </div>
        </form>
      </Reveal>
    </main>
  );
}
