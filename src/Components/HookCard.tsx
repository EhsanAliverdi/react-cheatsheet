// src/components/HookCard.tsx
import type { HookItem } from "../data/hooks-react-basic";

type HookCardProps = {
  hook: HookItem;
  onViewExample: () => void;
};

const levelLabel: Record<HookItem["level"], string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced"
};

export function HookCard({ hook, onViewExample }: HookCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm shadow-slate-950/50 transition hover:-translate-y-1 hover:border-emerald-500 hover:bg-slate-900 hover:shadow-emerald-500/20">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-emerald-400">
            {hook.label}
          </p>
          <h2 className="text-base font-semibold text-slate-50">
            {hook.name}
          </h2>
        </div>
        <span className="rounded-full border border-slate-700 px-2 py-0.5 text-[0.65rem] text-slate-300">
          {levelLabel[hook.level]}
        </span>
      </div>

      <p className="mb-3 text-xs text-slate-300">{hook.summary}</p>

      <ul className="mb-4 space-y-1 text-[0.7rem] text-slate-400">
        {hook.keyPoints.map((point) => (
          <li key={point} className="flex gap-1.5">
            <span className="mt-[3px] h-[5px] w-[5px] rounded-full bg-emerald-500/70" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between pt-2">
        <div className="flex flex-wrap gap-1">
          {hook.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800 px-2 py-0.5 text-[0.6rem] uppercase tracking-wide text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={onViewExample}
          className="text-[0.7rem] font-medium text-emerald-400 underline-offset-4 hover:underline"
        >
          View example
        </button>
      </div>
    </article>
  );
}
