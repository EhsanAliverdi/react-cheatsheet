import { useMemo, useState } from "react";
import { AppLayout } from "./components/AppLayout";
import { CheatCard } from "./components/CheatCard";
import { CheatModal } from "./components/CheatModal";
import { GlobalSearch } from "./components/GlobalSearch";
import { SidebarSectionNav } from "./components/SidebarSectionNav";
import type { CheatExample, CheatItem } from "./core/cheatsheet-types";
import { allSections } from "./data/sections";

function App() {
  const [selectedSectionId, setSelectedSectionId] = useState<string>(
    allSections[0]?.id ?? ""
  );
  const [selectedItem, setSelectedItem] = useState<CheatItem | null>(null);
  const [selectedExample, setSelectedExample] = useState<CheatExample | null>(
    null
  );

  const selectedSection = useMemo(
    () => allSections.find((s) => s.id === selectedSectionId) ?? allSections[0],
    [selectedSectionId]
  );

  const items = selectedSection?.items ?? [];

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
          sections={allSections}
          onNavigateToItem={(sectionId, item) => {
            setSelectedSectionId(sectionId);
            setSelectedItem(item);
            setSelectedExample(item.examples[0] ?? null);
          }}
        />
      }
    >
      {/* main layout: column on mobile, row on large screens */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <SidebarSectionNav
          sections={allSections}
          selectedSectionId={selectedSection.id}
          onSelectSection={setSelectedSectionId}
        />

        <div className="flex-1">
          <section className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                {selectedSection.name}
              </h2>
              <p className="text-xs text-slate-600 sm:text-sm">
                {selectedSection.description ??
                  "Choose a section to explore related React concepts."}
              </p>
            </div>

            {/* stats pills – wrap on small screens */}
            <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs sm:justify-end">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-600">
                Entries in this section: {items.length}
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-500">
                Total sections: {allSections.length}
              </span>
            </div>
          </section>

          {/* responsive cards grid */}
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
                No entries in this section yet. We’ll fill this soon.
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
