import type { ReactNode } from "react";
import type { Period } from "@/content";

type LedgerRowProps = { heading: ReactNode; period: Period; children?: ReactNode };

function PeriodLabel({ start, end }: Period) {
  if (end === undefined || end === start) {
    return <time dateTime={String(start)}>{start}</time>;
  }
  return (
    <>
      <time dateTime={String(start)}>{start}</time>–
      {end === "Present" ? end : <time dateTime={String(end)}>{end}</time>}
    </>
  );
}

export function LedgerRow({ heading, period, children }: LedgerRowProps) {
  return (
    <li>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="font-medium text-heading">{heading}</h3>
        <span className="shrink-0 font-mono text-xs sm:text-right">
          <PeriodLabel {...period} />
        </span>
      </div>
      {children}
    </li>
  );
}
