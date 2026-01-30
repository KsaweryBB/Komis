import Link from "next/link";
import styles from "./nav.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={styles.NavContainer}>
        <div className={styles.MenuButtons}>
          <ul className={styles.NavSlideMen}>
            <li>
              <Link href="">Products</Link>
              <ul>
                <li>
                  <Link href="">Option 1</Link>
                </li>
                <li>
                  <Link href="">Option 2</Link>
                </li>
                <li>
                  <Link href="">Option 3</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="">Customers</Link>
            </li>
            <li>
              <Link href="">Careers</Link>
            </li>
          </ul>
        </div>
        <div className={styles.Imagine}>
          <img src="" alt="" />
        </div>
        <div className={styles.Buttons}>
          <p className={styles.signIn}>Zaloguj się</p>
          <p className={styles.register}>Zarejestruj się</p>
        </div>
      </nav>
    </>
  );
}
