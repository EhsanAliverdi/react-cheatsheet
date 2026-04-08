// src/components/DetailsModal.tsx
import type { CheatItem } from "../core/cheatsheet-types";

type DetailsModalProps = {
  item: CheatItem | null;
  onClose: () => void;
};

const levelBadge: Record<CheatItem["level"], { label: string; classes: string }> = {
  beginner:     { label: "Beginner",     classes: "border-emerald-200 bg-emerald-50 text-emerald-700" },
  intermediate: { label: "Intermediate", classes: "border-amber-200 bg-amber-50 text-amber-700" },
  advanced:     { label: "Advanced",     classes: "border-rose-200 bg-rose-50 text-rose-700" },
};

/**
 * Renders the item.details string.
 * Lines that start with "##" become section headings.
 * Lines that start with "- " become bullet points.
 * Blank lines produce spacing.
 * Everything else is a paragraph.
 */
function renderDetails(text: string) {
  const lines = text.split("\n");
  const nodes: React.ReactNode[] = [];
  let bulletBuffer: string[] = [];
  let key = 0;

  const flushBullets = () => {
    if (bulletBuffer.length === 0) return;
    nodes.push(
      <ul key={key++} className="mb-3 space-y-1.5 pl-1">
        {bulletBuffer.map((b, i) => (
          <li key={i} className="flex gap-2 text-sm text-slate-700">
            <span className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-sky-400/80" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    );
    bulletBuffer = [];
  };

  for (const raw of lines) {
    const line = raw.trimEnd();

    if (line.startsWith("## ")) {
      flushBullets();
      nodes.push(
        <h3 key={key++} className="mb-2 mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 first:mt-0">
          {line.slice(3)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      bulletBuffer.push(line.slice(2));
    } else if (line.trim() === "") {
      flushBullets();
    } else {
      flushBullets();
      nodes.push(
        <p key={key++} className="mb-3 text-sm leading-relaxed text-slate-700">
          {line}
        </p>
      );
    }
  }

  flushBullets();
  return nodes;
}

export function DetailsModal({ item, onClose }: DetailsModalProps) {
  if (!item) return null;

  const badge = levelBadge[item.level];

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/40 px-2 sm:px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative max-h-[100vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:max-h-[85vh]">

        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-3">
          <div>
            {item.label && (
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-sky-600">
                {item.label}
              </p>
            )}
            <h2 className="text-sm font-semibold text-slate-900">{item.name}</h2>
            <p className="mt-0.5 text-xs text-slate-500">{item.summary}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className={`rounded-full border px-2 py-0.5 text-[0.65rem] font-medium ${badge.classes}`}>
              {badge.label}
            </span>
            <button
              onClick={onClose}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 hover:bg-slate-50"
            >
              Close
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="overflow-auto px-5 py-5">
          {item.details ? (
            <div>{renderDetails(item.details)}</div>
          ) : (
            <p className="text-sm text-slate-400 italic">No detailed explanation available yet.</p>
          )}

          {/* Tags footer */}
          {item.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[0.6rem] uppercase tracking-wide text-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
