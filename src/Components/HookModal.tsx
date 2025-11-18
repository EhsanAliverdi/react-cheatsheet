// src/components/HookModal.tsx
import type { HookItem, HookExample } from "../data/hooks-react-basic";

type HookModalProps = {
  hook: HookItem | null;
  example: HookExample | null;
  onClose: () => void;
};

export function HookModal({ hook, example, onClose }: HookModalProps) {
  if (!hook || !example) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/70 px-4">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
              {hook.name}
            </p>
            <h2 className="text-sm font-semibold text-slate-100">
              {example.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 hover:bg-slate-800"
          >
            Close
          </button>
        </div>

        <div className="space-y-4 overflow-auto px-5 py-4">
          {example.description && (
            <p className="text-sm text-slate-300">{example.description}</p>
          )}
          <pre className="relative max-h-[60vh] overflow-auto rounded-xl bg-slate-950/90 p-4 text-xs leading-relaxed text-slate-100">
            <code>{example.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
