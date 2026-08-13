export type Stay22MapProps = {
  /** Stay22 affiliate id, e.g. process.env.NEXT_PUBLIC_STAY22_AID */
  aid: string;
  address?: string;
  lat?: number;
  lng?: number;
  checkin?: string;
  checkout?: string;
  /** 'accommodation' (default) or 'experience' -> maps to Stay22's invmode param */
  mode?: "accommodation" | "experience";
  /** Free-form campaign tag for attribution, typically the page slug. */
  campaign?: string;
  lang: "fr" | "en";
  /** Reserved iframe height in px. Fixed so the layout never shifts (no CLS). */
  height?: number;
  className?: string;
};

const INVMODE: Record<NonNullable<Stay22MapProps["mode"]>, string> = {
  accommodation: "hotel",
  experience: "experience",
};

function buildStay22Src({
  aid,
  address,
  lat,
  lng,
  checkin,
  checkout,
  mode = "accommodation",
  campaign,
  lang,
}: Stay22MapProps): string {
  const params = new URLSearchParams();
  params.set("aid", aid);
  params.set("currency", "EUR");
  params.set("lang", lang);
  params.set("invmode", INVMODE[mode]);
  params.set("hidebrandlogo", "true");
  params.set("hidefooter", "true");

  if (address) params.set("address", address);
  if (typeof lat === "number") params.set("lat", String(lat));
  if (typeof lng === "number") params.set("lng", String(lng));
  if (checkin) params.set("checkin", checkin);
  if (checkout) params.set("checkout", checkout);
  if (campaign) params.set("campaign", campaign);

  return `https://www.stay22.com/embed/gm?${params.toString()}`;
}

/**
 * Reusable Stay22 hotel-map embed. Height is reserved via inline CSS so the
 * iframe never causes layout shift while it lazy-loads.
 */
export function Stay22Map(props: Stay22MapProps) {
  const { height = 460, className } = props;
  const src = buildStay22Src(props);
  const title =
    props.lang === "fr"
      ? `Hebergements pres de ${props.address ?? "cette destination"}`
      : `Stays near ${props.address ?? "this destination"}`;

  return (
    <div
      className={`w-full overflow-hidden rounded-2xl border border-line bg-surface ${className ?? ""}`}
      style={{ height }}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        style={{ width: "100%", height: "100%", border: 0, display: "block" }}
      />
    </div>
  );
}

export default Stay22Map;
