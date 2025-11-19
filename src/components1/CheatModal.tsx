// src/components/CheatModal.tsx
import type { CheatItem, CheatExample } from "../core/cheatsheet-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

type CheatModalProps = {
  item: CheatItem | null;
  example: CheatExample | null;
  onClose: () => void;
};

export function CheatModal({ item, example, onClose }: CheatModalProps) {
  if (!item || !example) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/40 px-4">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3 bg-slate-50">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-sky-600">
              {item.name}
            </p>
            <h2 className="text-sm font-semibold text-slate-900">
              {example.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 hover:bg-slate-50"
          >
            Close
          </button>
        </div>

        <div className="space-y-4 overflow-auto px-5 py-4">
          {example.description && (
            <p className="text-sm text-slate-700">{example.description}</p>
          )}

          <div className="rounded-xl border border-slate-200 bg-slate-50/60">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2 text-[0.7rem] text-slate-500">
              <span>TypeScript / JSX</span>
              <span className="rounded-full bg-white px-2 py-0.5 text-xs border border-slate-200">
                VS style
              </span>
            </div>
            <SyntaxHighlighter
              language="tsx"
              style={vs}
              customStyle={{
                margin: 0,
                borderRadius: "0 0 0.75rem 0.75rem",
                fontSize: "0.75rem",
                maxHeight: "60vh"
              }}
              wrapLongLines
              showLineNumbers
            >
              {example.code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}
