// TODO: widget de reservation voiture TravelPayouts a integrer ici.
// L'utilisateur ajoutera manuellement le vrai widget d'affiliation (script/iframe TravelPayouts)
// dans ce composant. En attendant, un placeholder visuel evite un rendu casse sur la page.
export function CarRentalWidgetPlaceholder({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-line bg-paper-2 p-8 text-center">
      <span aria-hidden className="text-3xl text-granite">
        🚗
      </span>
      <p className="font-display text-lg text-ink">{title}</p>
      <p className="text-sm text-ink-soft">{text}</p>
    </div>
  );
}

export default CarRentalWidgetPlaceholder;
