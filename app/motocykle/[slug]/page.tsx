import { supabase } from "@/lib/supabase";
import styles from "./slug.module.css";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug: carId } = await params;

  const { data, error } = await supabase
    .from("pages")
    .select("*")
    .eq("id", carId)
    .maybeSingle();

  if (error || !data) {
    return (
      <h1 className={styles.notFound}>Nie znaleziono pojazdu o ID: {carId}</h1>
    );
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        {data.marka} <span>{data.model}</span>
      </h1>
      <div className={styles.imageContainer}>
        {data.imageUrl ? (
          <img
            src={data.imageUrl}
            alt={data.marka}
            className={styles.mainImage}
          />
        ) : (
          <div className={styles.noImage}>Brak zdjęcia</div>
        )}
      </div>

      <ul className={styles.specList}>
        <li>
          <strong>Cena:</strong>{" "}
          <span className={styles.price}>{data.cena} PLN</span>
        </li>
        <li>
          <strong>Rok:</strong> {data.rokprodukcji}
        </li>
        <li>
          <strong>Moc:</strong> {data.moc} KM
        </li>
        <li>
          <strong>Przebieg:</strong> {data.przebieg} km
        </li>
        <li>
          <strong>Paliwo:</strong> {data.rodzajpaliwa}
        </li>
        <li>
          <strong>Skrzynia:</strong> {data.skrzynia}
        </li>
        <li>
          <strong>Nadwozie: </strong>
          {data.nadwozie}
        </li>
        <li>
          <strong>Kolor: </strong>
          {data.kolor}
        </li>
        <li>
          <strong>Opublikowano: </strong>
          {new Date(data.created_at).toLocaleDateString("pl-PL")}
        </li>
      </ul>

      <div className={styles.descriptionSection}>
        <h3 className={styles.descriptionTitle}>Opis pojazdu:</h3>
        <p className={styles.descriptionText}>{data.content}</p>
      </div>
    </div>
  );
}
