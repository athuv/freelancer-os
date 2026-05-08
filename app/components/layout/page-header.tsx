import { ReactNode } from 'react';

type PageHeaderProps = {
  title: string;
  description?: string;
  action?: ReactNode;
};

export default function PageHeader({
  title,
  description,
  action,
}: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>

        {description ? (
          <p className="text-muted-foreground text-sm">{description}</p>
        ) : null}
      </div>

      {action}
    </div>
  );
}
