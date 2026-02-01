"use client";
import styles from "./lofin.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      document.cookie =
        "admin_session=true; path=/; max-age=3600; SameSite=Strict";
      localStorage.setItem("admin", "true");
      router.push("/admin/new");
    } else {
      alert("Złe hasło!");
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Logowanie administratora</h1>

      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="password"
          placeholder="Hasło admina"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />

        <button type="submit" className={styles.button}>
          Zaloguj
        </button>
      </form>
    </div>
  );
}
