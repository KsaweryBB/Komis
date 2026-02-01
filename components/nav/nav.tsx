"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./nav.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Referencja do całego menu lewego

  // 1. Zamykanie po kliknięciu poza menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // 2. Funkcja zamykająca menu po kliknięciu w link
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.NavContainer}>
      {/* 1. LEWA SEKCJA (Menu i Hamburger) */}
      <div className={styles.LeftSection} ref={menuRef}>
        <div className={styles.Hamburger} onClick={() => setIsOpen(!isOpen)}>
          <div className={isOpen ? styles.barActive : ""}></div>
          <div className={isOpen ? styles.barActive : ""}></div>
          <div className={isOpen ? styles.barActive : ""}></div>
        </div>

        <ul className={`${styles.NavSlideMen} ${isOpen ? styles.active : ""}`}>
          <li className={styles.desktopOnly}>
            <p className={styles.navLabel}>Oferta</p>
            <ul className={styles.Dropdown}>
              <li><Link href="/oferta/uzywane" onClick={closeMenu}>Używane</Link></li>
              <li><Link href="/oferta/nowe" onClick={closeMenu}>Nowe</Link></li>
            </ul>
          </li>

          {/* Linki mobilne zamykające menu */}
          <li className={styles.mobileOnly}>
            <Link href="/oferta/uzywane" onClick={closeMenu}>Używane</Link>
          </li>
          <li className={styles.mobileOnly}>
            <Link href="/oferta/nowe" onClick={closeMenu}>Nowe</Link>
          </li>

          <li><Link href="/onas" onClick={closeMenu}>O nas</Link></li>
          <li className={`${styles.contactbutton} ${styles.navContact}`}>
            <Link href="/kontakt" onClick={closeMenu}>Kontakt</Link>
          </li>
        </ul>
      </div>

      {/* 2. ŚRODKOWA SEKCJA */}
      <div className={styles.Imagine}>
        <Link href="/" onClick={closeMenu}>Moto <span>Komis</span></Link>
      </div>

      {/* 3. PRAWA SEKCJA */}
      <div className={styles.Buttons}>
        <Link href="/admin/login" className={styles.signIn} onClick={closeMenu}>Zaloguj się</Link>
      </div>
    </nav>
  );
}