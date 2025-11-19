// src/components/CheatModal.tsx
import React from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import type { CheatExample, CheatItem } from "../core/cheatsheet-types";

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
        {/* Header */}
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

        {/* Body */}
        <div className="space-y-4 overflow-auto px-5 py-4">
          {example.description && (
            <p className="text-sm text-slate-700">{example.description}</p>
          )}

          <div className="rounded-xl border border-slate-200 bg-slate-50/60">
            <LiveProvider
              code={example.code.trim()}
              noInline={true}
              scope={{ React }}
            >
              {/* Top: preview + editor side by side on md+ */}
              <div className="grid gap-0 border-b border-slate-200 md:grid-cols-2">
                {/* Preview */}
                <div className="bg-white p-4">
                  <div className="mb-2 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-slate-500">
                    Live preview
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-900">
                    <LivePreview />
                  </div>
                </div>

                {/* Editor */}
                <div className="bg-slate-950 p-4">
                  <div className="mb-2 flex items-center justify-between text-[0.7rem] text-slate-300">
                    <span className="font-medium uppercase tracking-[0.16em]">
                      TypeScript / JSX
                    </span>
                    <span className="rounded-full border border-slate-600 bg-slate-900 px-2 py-0.5 text-[0.65rem]">
                      Editable
                    </span>
                  </div>
                  <div className="rounded-lg border border-slate-800 bg-slate-950">
                    <LiveEditor
                      className="text-xs font-mono"
                      style={{
                        fontSize: "0.75rem",
                        maxHeight: "50vh",
                        overflow: "auto",
                        padding: "0.75rem",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Errors */}
              <LiveError className="px-4 py-2 text-xs bg-red-700 text-white" />
            </LiveProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
