import { supabase } from "@/lib/supabase";
import styles from "./slug.module.css";
import EditableField from "@/components/Editabletext/EditableField";

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
        <EditableField id={data.id} field="marka" defaultValue={data.marka} />{" "}
        <span>
          <EditableField id={data.id} field="model" defaultValue={data.model} />
        </span>
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
          <span className={styles.price}>
            <EditableField id={data.id} field="cena" defaultValue={data.cena} /> PLN
          </span>
        </li>

        <li>
          <strong>Rok:</strong>{" "}
          <EditableField
            id={data.id}
            field="rokprodukcji"
            defaultValue={data.rokprodukcji}
          />
        </li>

        <li>
          <strong>Moc:</strong>{" "}
          <EditableField id={data.id} field="moc" defaultValue={data.moc} /> KM
        </li>

        <li>
          <strong>Przebieg:</strong>{" "}
          <EditableField
            id={data.id}
            field="przebieg"
            defaultValue={data.przebieg}
          />{" "}
          km
        </li>

        <li>
          <strong>Paliwo:</strong>{" "}
          <EditableField
            id={data.id}
            field="rodzajpaliwa"
            defaultValue={data.rodzajpaliwa}
          />
        </li>

        <li>
          <strong>Skrzynia:</strong>{" "}
          <EditableField
            id={data.id}
            field="skrzynia"
            defaultValue={data.skrzynia}
          />
        </li>

        <li>
          <strong>Nadwozie:</strong>{" "}
          <EditableField
            id={data.id}
            field="nadwozie"
            defaultValue={data.nadwozie}
          />
        </li>

        <li>
          <strong>Kolor:</strong>{" "}
          <EditableField id={data.id} field="kolor" defaultValue={data.kolor} />
        </li>

        <li>
          <strong>Opublikowano:</strong>{" "}
          {new Date(data.created_at).toLocaleDateString("pl-PL")}
        </li>
      </ul>

      <div className={styles.descriptionSection}>
        <h3 className={styles.descriptionTitle}>Opis pojazdu:</h3>

        <p className={styles.descriptionText}>
          <EditableField
            id={data.id}
            field="content"
            defaultValue={data.content}
          />
        </p>
      </div>
    </div>
  );
}
