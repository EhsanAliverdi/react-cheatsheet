// src/components/CheatCard.tsx
import type { CheatItem } from "../core/cheatsheet-types";

type CheatCardProps = {
  item: CheatItem;
  onViewExample: () => void;
  onReadMore: () => void;
};

const levelLabel: Record<CheatItem["level"], string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export function CheatCard({ item, onViewExample, onReadMore }: CheatCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md">
      {" "}
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          {item.label && (
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-sky-600">
              {item.label}
            </p>
          )}
          <h2 className="text-base font-semibold text-slate-900">
            {item.name}
          </h2>
        </div>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[0.65rem] text-slate-600">
          {levelLabel[item.level]}
        </span>
      </div>
      <p className="mb-3 text-xs text-slate-700">{item.summary}</p>
      <ul className="mb-4 space-y-1 text-[0.7rem] text-slate-600">
        {item.keyPoints.map((point) => (
          <li key={point} className="flex gap-1.5">
            <span className="mt-[3px] h-[5px] w-[5px] rounded-full bg-sky-400/80" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-col gap-2 pt-3">
        {/* Row 1 — tags */}
        <div className="flex flex-wrap gap-1">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[0.6rem] uppercase tracking-wide text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Row 2 — action buttons */}
        {(item.details || item.examples.length > 0) && (
          <div className="flex items-center gap-2 border-t border-slate-100 pt-2">
            {item.details && (
              <button
                onClick={onReadMore}
                className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-[0.7rem] font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900"
              >
                <svg className="h-3 w-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM8 5v3m0 3h.01" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Read more
              </button>
            )}
            {item.examples.length > 0 && (
              <button
                onClick={onViewExample}
                className="flex items-center gap-1 rounded-lg border border-sky-200 bg-sky-50 px-3 py-1 text-[0.7rem] font-medium text-sky-700 transition hover:border-sky-300 hover:bg-sky-100 hover:text-sky-900"
              >
                <svg className="h-3 w-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 3.5l6 4.5-6 4.5V3.5z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                View example
              </button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
