import type { PhotoCredit as Credit } from "@/data/photos";
import { useTr } from "@/i18n/locale";

export function PhotoCredit({ credit }: { credit: Credit }) {
  const tr = useTr();
  return (
    <p className="mt-2 text-xs leading-snug">
      {tr("Photo")}: {credit.title}.{" "}
      {credit.authorUrl ? (
        <a href={credit.authorUrl} className="underline" target="_blank" rel="noopener noreferrer">
          {credit.author}
        </a>
      ) : (
        credit.author
      )}
      .{" "}
      {credit.licenseUrl ? (
        <a href={credit.licenseUrl} className="underline" target="_blank" rel="noopener noreferrer">
          {credit.license}
        </a>
      ) : (
        credit.license
      )}
      .{" "}
      <a href={credit.sourceUrl} className="underline" target="_blank" rel="noopener noreferrer">
        Wikimedia Commons
      </a>
      . {tr(credit.note ?? "Shown here in a smaller copy.")}
    </p>
  );
}
