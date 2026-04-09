import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
  height?: string;
  noPadding?: boolean;
}

export default function Demo({
  children,
  title,
  height = "auto",
  noPadding = false,
}: Props) {
  return (
    <div
      className="my-8 overflow-hidden rounded-lg border border-skin-line"
      style={{ background: "rgb(var(--color-card))" }}
    >
      {title && (
        <div
          className="border-b border-skin-line px-4 py-2 text-sm font-medium opacity-70"
          style={{ background: "rgb(var(--color-card-muted))" }}
        >
          {title}
        </div>
      )}
      <div
        className={noPadding ? "" : "p-6"}
        style={{ minHeight: height !== "auto" ? height : undefined }}
      >
        {children}
      </div>
    </div>
  );
}
