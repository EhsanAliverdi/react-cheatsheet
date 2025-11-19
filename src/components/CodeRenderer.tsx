import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

type CodeRendererProps = {
  code: string;
};

export function CodeRenderer({ code }: CodeRendererProps) {
  return (
    <LiveProvider code={code} noInline>
      <div className="border rounded-md overflow-hidden my-4">
        {/* Preview */}
        <div className="p-4 bg-white border-b">
          <LivePreview />
        </div>

        {/* Editor */}
        <LiveEditor
          className="p-3 text-sm font-mono bg-[#1e1e1e] text-white"
          style={{ overflowX: "auto", fontSize: "0.9rem" }}
        />

        {/* Errors */}
        <LiveError className="p-2 bg-red-700 text-white text-sm" />
      </div>
    </LiveProvider>
  );
}
