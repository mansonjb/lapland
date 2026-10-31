/** Injecte un bloc JSON-LD (schema.org) rendu cote serveur, visible des crawlers sans JS. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // Le JSON est genere par nos soins ; on echappe "<" pour eviter toute fermeture de balise.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
