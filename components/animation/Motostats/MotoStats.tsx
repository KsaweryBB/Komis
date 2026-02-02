"use client";
import Counter from "../Counter"; 
import styles from "./MotoStats.module.css";

const getTimeToSeason = () => {
  const today = new Date();
  const seasonStart = new Date(today.getFullYear(), 2, 21);

  if (today > seasonStart) {
    seasonStart.setFullYear(today.getFullYear() + 1);
  }

  const diff = seasonStart.getTime() - today.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return { days, hours, minutes };
};

export default function MotoStats() {
  const { days, hours, minutes } = getTimeToSeason();
  const daysWithoutCrash = 124;

  return (
<section className={styles.statsContainer}>
  <div className={styles.statBox}>
    <h3 className={styles.mainLabel}>Bezpieczna jazda</h3>
    <div className={styles.countdownWrapper}>
      <div className={styles.timeSegment}>
        <div className={`${styles.number} ${styles.safetyColor}`}>
          <Counter value={daysWithoutCrash} />
        </div>
        <span className={styles.label}>dni bez gleby</span>
      </div>
    </div>
  </div>

  <div className={styles.statBox}>
    <h3 className={styles.mainLabel}>Odliczanie do sezonu</h3>
    <div className={styles.countdownWrapper}>
      <div className={styles.timeSegment}>
        <div className={styles.number}><Counter value={days} /></div>
        <span className={styles.label}>dni</span>
      </div>
      <div className={styles.separator}>:</div>
      <div className={styles.timeSegment}>
        <div className={styles.number}><Counter value={hours} /></div>
        <span className={styles.label}>godz</span>
      </div>
      <div className={styles.separator}>:</div>
      <div className={styles.timeSegment}>
        <div className={styles.number}><Counter value={minutes} /></div>
        <span className={styles.label}>min</span>
      </div>
    </div>
  </div>
</section>
  );
}
