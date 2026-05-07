import { ReactNode } from 'react';

type EmptyStateProps = {
  icon?: ReactNode;
  title: string;
  description?: string;
};

export default function EmptyState({
  icon,
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed px-6 py-12 text-center">
      {icon && <div className="text-muted-foreground mb-4">{icon}</div>}

      <h3 className="text-lg font-semibold">{title}</h3>

      {description && (
        <p className="text-muted-foreground mt-2 max-w-sm text-sm">
          {description}
        </p>
      )}
    </div>
  );
}
