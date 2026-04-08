// src/components/CheatModal.tsx
import React from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { CheatExample, CheatItem } from "../core/cheatsheet-types";

type CheatModalProps = {
  item: CheatItem | null;
  example: CheatExample | null;
  onClose: () => void;
};

/** Languages that can run inside the react-live sandbox */
const LIVE_LANGUAGES = new Set(["tsx", "jsx", "javascript", "js"]);

function isLiveCode(example: CheatExample): boolean {
  return !example.language || LIVE_LANGUAGES.has(example.language);
}

export function CheatModal({ item, example, onClose }: CheatModalProps) {
  if (!item || !example) return null;

  const live = isLiveCode(example);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/40 px-2 sm:px-4">
      <div className="relative max-h-[100vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:max-h-[90vh]">

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
          <div className="flex items-center gap-2">
            {example.language && (
              <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[0.65rem] font-mono text-slate-500">
                {example.language}
              </span>
            )}
            {!live && (
              <span className="rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-[0.65rem] text-slate-500">
                Static
              </span>
            )}
            {live && (
              <span className="rounded-full border border-sky-200 bg-sky-50 px-2 py-0.5 text-[0.65rem] text-sky-600">
                Live
              </span>
            )}
            <button
              onClick={onClose}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 hover:bg-slate-50"
            >
              Close
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-4 overflow-auto px-5 py-4">
          {example.description && (
            <p className="text-sm text-slate-700">{example.description}</p>
          )}

          {live ? (
            /*  react-live interactive editor  */
            <div className="rounded-xl border border-slate-200 bg-slate-50/60">
              <LiveProvider
                code={example.code.trim()}
                noInline={true}
                scope={{ React }}
              >
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

                <LiveError className="px-4 py-2 text-xs bg-red-700 text-white" />
              </LiveProvider>
            </div>
          ) : (
            /*  static syntax-highlighted block  */
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <div className="flex items-center justify-between bg-slate-900 px-4 py-2">
                <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-slate-400">
                  {example.language ?? "code"}
                </span>
                <span className="rounded-full border border-slate-600 bg-slate-800 px-2 py-0.5 text-[0.65rem] text-slate-400">
                  Read only
                </span>
              </div>
              <SyntaxHighlighter
                language={example.language ?? "text"}
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  borderRadius: 0,
                  fontSize: "0.75rem",
                  maxHeight: "60vh",
                  overflowY: "auto",
                  padding: "1rem",
                }}
                showLineNumbers
                wrapLongLines={false}
              >
                {example.code.trim()}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}