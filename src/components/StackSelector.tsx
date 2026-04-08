// src/components/StackSelector.tsx
import type { CheatStack } from "../core/cheatsheet-types";

type StackSelectorProps = {
  stacks: CheatStack[];
  selectedStackId: string;
  onSelectStack: (id: string) => void;
};

// All classes are static strings so Tailwind can detect them at build time.
const STACK_STYLES: Record<
  string,
  { active: string; inactive: string; dot: string }
> = {
  react: {
    active:   "border-sky-300 bg-sky-50 text-sky-700",
    inactive: "border-slate-200 bg-white text-slate-600 hover:border-sky-200 hover:bg-sky-50/50",
    dot:      "bg-sky-400",
  },
  javascript: {
    active:   "border-amber-300 bg-amber-50 text-amber-700",
    inactive: "border-slate-200 bg-white text-slate-600 hover:border-amber-200 hover:bg-amber-50/50",
    dot:      "bg-amber-400",
  },
  java: {
    active:   "border-orange-300 bg-orange-50 text-orange-700",
    inactive: "border-slate-200 bg-white text-slate-600 hover:border-orange-200 hover:bg-orange-50/50",
    dot:      "bg-orange-400",
  },
  typescript: {
    active:   "border-blue-300 bg-blue-50 text-blue-700",
    inactive: "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50/50",
    dot:      "bg-blue-400",
  },
  python: {
    active:   "border-emerald-300 bg-emerald-50 text-emerald-700",
    inactive: "border-slate-200 bg-white text-slate-600 hover:border-emerald-200 hover:bg-emerald-50/50",
    dot:      "bg-emerald-400",
  },
  node: {
    active:   "border-teal-300 bg-teal-50 text-teal-700",
    inactive: "border-slate-200 bg-white text-slate-600 hover:border-teal-200 hover:bg-teal-50/50",
    dot:      "bg-teal-400",
  },
};

const DEFAULT_STYLE = {
  active:   "border-violet-300 bg-violet-50 text-violet-700",
  inactive: "border-slate-200 bg-white text-slate-600 hover:border-violet-200 hover:bg-violet-50/50",
  dot:      "bg-violet-400",
};

export function StackSelector({
  stacks,
  selectedStackId,
  onSelectStack,
}: StackSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {stacks.map((stack) => {
        const isActive = stack.id === selectedStackId;
        const styles = STACK_STYLES[stack.id] ?? DEFAULT_STYLE;
        const totalItems = stack.sections.reduce(
          (sum, s) => sum + s.items.length,
          0
        );

        return (
          <button
            key={stack.id}
            type="button"
            onClick={() => onSelectStack(stack.id)}
            className={[
              "flex items-center gap-2 rounded-xl border px-4 py-1.5 text-xs font-medium transition",
              isActive ? styles.active : styles.inactive,
            ].join(" ")}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
            <span>{stack.name}</span>
            <span
              className={[
                "rounded-full px-1.5 py-0.5 text-[0.6rem]",
                isActive ? "bg-white/70" : "bg-slate-100",
              ].join(" ")}
            >
              {totalItems}
            </span>
          </button>
        );
      })}
    </div>
  );
}
