// src/components/SearchBar.tsx
import type { ChangeEvent } from "react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = () => onChange("");

  return (
    <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder="Search in this section (name, summary, tags...)"
        className="flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
      />
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="text-[11px] font-medium uppercase tracking-wide text-slate-500 hover:text-slate-800"
        >
          Clear
        </button>
      )}
    </div>
  );
}
