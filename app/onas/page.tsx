export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
import Counter from "@/components/animation/Counter";
import styles from "./onas.module.css";
import { ShieldCheck, Users, Trophy, MapPin } from "lucide-react";
import EditableField from "@/components/Editabletext/EditableField";
import { getText } from "@/lib/supabase";

export default async function AboutPage() {
  const heroTitle = await getText("onas_hero_title");
  const heroSubtitle = await getText("onas_hero_subtitle");

  const kimTitle = await getText("onas_kim_jestesmy_title");
  const kimP1 = await getText("onas_kim_jestesmy_p1");
  const kimP2 = await getText("onas_kim_jestesmy_p2");

  const statKlienci = await getText("onas_stat_klienci");
  const statDoswiadczenie = await getText("onas_stat_doswiadczenie");

  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            <EditableField
              id={0}
              field="onas_hero_title"
              defaultValue={heroTitle}
            />
          </h1>

          <p>
            <EditableField
              id={0}
              field="onas_hero_subtitle"
              defaultValue={heroSubtitle}
            />
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.textSection}>
            <h2>
              <EditableField
                id={0}
                field="onas_kim_jestesmy_title"
                defaultValue={kimTitle}
              />
            </h2>

            <p>
              <EditableField
                id={0}
                field="onas_kim_jestesmy_p1"
                defaultValue={kimP1}
              />
            </p>

            <p>
              <EditableField
                id={0}
                field="onas_kim_jestesmy_p2"
                defaultValue={kimP2}
              />
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <Users color="#22c55e" size={32} />
              <h3>
                <Counter value={2500}></Counter>
              </h3>

              <p>
                <EditableField
                  id={0}
                  field="onas_stat_klienci"
                  defaultValue={statKlienci}
                />
              </p>
            </div>

            <div className={styles.statCard}>
              <Trophy color="#22c55e" size={32} />
              <h3>
                <Counter value={15}></Counter> lat
              </h3>

              <p>
                <EditableField
                  id={0}
                  field="onas_stat_doswiadczenie"
                  defaultValue={statDoswiadczenie}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
