// src/components/CheatCard.tsx
import type { CheatItem } from "../core/cheatsheet-types";

type CheatCardProps = {
  item: CheatItem;
  onViewExample: () => void;
};

const levelLabel: Record<CheatItem["level"], string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced"
};

export function CheatCard({ item, onViewExample }: CheatCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md">
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

      <div className="mt-auto flex items-center justify-between pt-2">
        <div className="flex flex-wrap gap-1">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-50 px-2 py-0.5 text-[0.6rem] uppercase tracking-wide text-slate-500 border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {item.examples.length > 0 && (
          <button
            onClick={onViewExample}
            className="text-[0.7rem] font-medium text-sky-700 underline-offset-4 hover:underline"
          >
            View example
          </button>
        )}
      </div>
    </article>
  );
}
