import { useState, Children, isValidElement } from "react";
import type { ReactNode } from "react";

interface TabProps {
  label: string;
  children: ReactNode;
}

// Tab is a marker component; Tabs reads its props directly
export function Tab({ children }: TabProps) {
  return <>{children}</>;
}

interface TabsProps {
  children: ReactNode;
}

export function Tabs({ children }: TabsProps) {
  const tabs = Children.toArray(children).filter(
    (child): child is React.ReactElement<TabProps> =>
      isValidElement(child) &&
      typeof (child.props as TabProps).label === "string"
  );

  const [active, setActive] = useState(0);

  if (tabs.length === 0) return null;

  return (
    <div className="my-8 overflow-hidden rounded-lg border border-skin-line">
      {/* Tab bar */}
      <div
        className="flex border-b border-skin-line"
        style={{ background: "rgb(var(--color-card-muted))" }}
        role="tablist"
      >
        {tabs.map((tab, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={[
              "px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none",
              i === active
                ? "border-b-2 text-skin-accent"
                : "opacity-60 hover:opacity-90",
            ].join(" ")}
            style={
              i === active
                ? { borderColor: "rgb(var(--color-accent))" }
                : undefined
            }
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      {/* Tab content */}
      <div
        className="p-6"
        style={{ background: "rgb(var(--color-card))" }}
        role="tabpanel"
      >
        {tabs[active].props.children}
      </div>
    </div>
  );
}
