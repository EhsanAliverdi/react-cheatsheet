import { useMemo, useState } from "react";
import { AppLayout } from "./components/AppLayout";
import { CheatCard } from "./components/CheatCard";
import { CheatModal } from "./components/CheatModal";
import { GlobalSearch } from "./components/GlobalSearch";
import { SidebarSectionNav } from "./components/SidebarSectionNav";
import { StackSelector } from "./components/StackSelector";
import type { CheatExample, CheatItem } from "./core/cheatsheet-types";
import { allStacks } from "./data/stacks";

function App() {
  const [selectedStackId, setSelectedStackId] = useState<string>(
    allStacks[0]?.id ?? ""
  );
  const [selectedSectionId, setSelectedSectionId] = useState<string>(
    allStacks[0]?.sections[0]?.id ?? ""
  );
  const [selectedItem, setSelectedItem] = useState<CheatItem | null>(null);
  const [selectedExample, setSelectedExample] = useState<CheatExample | null>(
    null
  );

  const selectedStack = useMemo(
    () => allStacks.find((s) => s.id === selectedStackId) ?? allStacks[0],
    [selectedStackId]
  );

  const selectedSection = useMemo(
    () =>
      selectedStack?.sections.find((s) => s.id === selectedSectionId) ??
      selectedStack?.sections[0],
    [selectedStack, selectedSectionId]
  );

  const items = selectedSection?.items ?? [];

  const handleSelectStack = (stackId: string) => {
    const stack = allStacks.find((s) => s.id === stackId);
    setSelectedStackId(stackId);
    setSelectedSectionId(stack?.sections[0]?.id ?? "");
    setSelectedItem(null);
    setSelectedExample(null);
  };

  const openFirstExample = (item: CheatItem) => {
    setSelectedItem(item);
    setSelectedExample(item.examples[0] ?? null);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setSelectedExample(null);
  };

  return (
    <AppLayout
      headerSearch={
        <GlobalSearch
          stacks={allStacks}
          onNavigateToItem={(stackId, sectionId, item) => {
            handleSelectStack(stackId);
            setSelectedSectionId(sectionId);
            setSelectedItem(item);
            setSelectedExample(item.examples[0] ?? null);
          }}
        />
      }
    >
      {/* Stack selector */}
      <div className="mb-5 border-b border-slate-200 pb-4">
        <StackSelector
          stacks={allStacks}
          selectedStackId={selectedStack.id}
          onSelectStack={handleSelectStack}
        />
      </div>

      {/* main layout: column on mobile, row on large screens */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <SidebarSectionNav
          sections={selectedStack.sections}
          selectedSectionId={selectedSection?.id ?? ""}
          onSelectSection={(id) => {
            setSelectedSectionId(id);
            setSelectedItem(null);
            setSelectedExample(null);
          }}
        />

        <div className="flex-1">
          <section className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.16em] text-slate-400">
                {selectedStack.name}
              </p>
              <h2 className="text-base font-semibold text-slate-900">
                {selectedSection?.name}
              </h2>
              <p className="text-xs text-slate-600 sm:text-sm">
                {selectedSection?.description ??
                  "Choose a section to explore concepts."}
              </p>
            </div>

            {/* stats pills */}
            <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs sm:justify-end">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-600">
                Entries: {items.length}
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-500">
                Sections: {selectedStack.sections.length}
              </span>
            </div>
          </section>

          {/* cards grid */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <CheatCard
                key={item.id}
                item={item}
                onViewExample={() => openFirstExample(item)}
              />
            ))}

            {items.length === 0 && (
              <p className="text-sm text-slate-500">
                No entries in this section yet.
              </p>
            )}
          </section>
        </div>
      </div>

      <CheatModal
        item={selectedItem}
        example={selectedExample}
        onClose={closeModal}
      />
    </AppLayout>
  );
}

export default App;