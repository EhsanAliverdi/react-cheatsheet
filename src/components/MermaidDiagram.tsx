// src/components/MermaidDiagram.tsx
import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  themeVariables: {
    primaryColor: "#e0f2fe",      // sky-100
    primaryTextColor: "#0f172a",  // slate-900
    primaryBorderColor: "#bae6fd",// sky-200
    lineColor: "#94a3b8",         // slate-400
    secondaryColor: "#f1f5f9",    // slate-100
    tertiaryColor: "#f8fafc",     // slate-50
    background: "#ffffff",
    nodeBorder: "#bae6fd",
    clusterBkg: "#f0f9ff",
    edgeLabelBackground: "#f0f9ff",
    fontFamily: "ui-sans-serif, system-ui, sans-serif",
    fontSize: "13px",
  },
  flowchart: { htmlLabels: true, curve: "basis" },
  securityLevel: "strict",
});

let _idCounter = 0;

type Props = { code: string };

export function MermaidDiagram({ code }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const idRef = useRef(`mermaid-${++_idCounter}`);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      if (!containerRef.current) return;
      try {
        const { svg } = await mermaid.render(idRef.current, code.trim());
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Diagram render failed");
        }
      }
    }

    render();
    return () => { cancelled = true; };
  }, [code]);

  if (error) {
    return (
      <div className="my-3 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-xs text-rose-700">
        <p className="font-medium">Diagram error</p>
        <pre className="mt-1 whitespace-pre-wrap font-mono">{error}</pre>
      </div>
    );
  }

  return (
    <div className="my-3 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div ref={containerRef} className="flex justify-center [&>svg]:max-w-full" />
    </div>
  );
}
