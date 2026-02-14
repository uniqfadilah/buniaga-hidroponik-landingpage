import { type ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "white" | "gray" | "primary-soft";
}

export default function Section({
  id,
  children,
  className = "",
  background = "white",
}: SectionProps) {
  const bgClass =
    background === "gray"
      ? "bg-gray-50"
      : background === "primary-soft"
        ? "bg-[var(--primary-soft)]"
        : "bg-white";

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${bgClass} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
