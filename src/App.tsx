// src/App.tsx
import { useState } from "react";
import { Layout } from "./components/Layout";
import { HookCard } from "./components/HookCard";
import { HookModal } from "./components/HookModal";
import {
  reactHooksBasics,
  type HookItem,
  type HookExample
} from "./data/hooks-react-basic";

function App() {
  const [selectedHook, setSelectedHook] = useState<HookItem | null>(null);
  const [selectedExample, setSelectedExample] = useState<HookExample | null>(
    null
  );

  const openFirstExample = (hook: HookItem) => {
    setSelectedHook(hook);
    setSelectedExample(hook.examples[0] ?? null);
  };

  const closeModal = () => {
    setSelectedHook(null);
    setSelectedExample(null);
  };

  return (
    <Layout>
      <section className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-50">
            Core React Hooks
          </h2>
          <p className="text-sm text-slate-400">
            Based on your React Hooks PDF – tidy, searchable, and copy-paste
            ready.
          </p>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="rounded-full border border-slate-700 px-3 py-1 text-slate-300">
            Hooks: {reactHooksBasics.length}
          </span>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reactHooksBasics.map((hook) => (
          <HookCard
            key={hook.id}
            hook={hook}
            onViewExample={() => openFirstExample(hook)}
          />
        ))}
      </section>

      <HookModal
        hook={selectedHook}
        example={selectedExample}
        onClose={closeModal}
      />
    </Layout>
  );
}

export default App;
