import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className={styles.footerContainer}>
          <div className={styles.name}>
            <h1>
              Auto<span>Komis</span>
            </h1>
            <p>
              Działamy od 20 lat i ciągle się rozwijamy aby nasi klięci byli
              coraz bardziej zadowoleni
            </p>
          </div>
          <div className={styles.footerLinks}>
            <h2>Linki</h2>
            <ul>
              <li>
                <Link href=""></Link>
              </li>
              <li>
                <Link href=""></Link>
              </li>
              <li>
                <Link href=""></Link>
              </li>
              <li>
                <Link href=""></Link>
              </li>
              <li>
                <Link href=""></Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerMedia}>
            <ul>
                <li><a href="">Tiktok</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Otomoto</a></li>
                <li><a href="">Olx</a></li>
                <li><a href="">Messenger</a></li>
            </ul>
          </div>
          <div className={styles.footerContact}>
            <ul>
                <li>Telefon:<a href="">0000000</a></li>
                <li>Email:<a href="">example@com.pl</a></li>
                <li>Adres:<a href="">Słoneczna 51</a></li>

            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
