import { type ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  children,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 sm:p-8 ${className}`}
    >
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
