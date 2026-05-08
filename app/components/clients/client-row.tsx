import Link from 'next/link';
import { Client } from '@/types/client';
import { rowStyles } from '@/lib/ui/row-styles';

export default function ClientRow({ client }: { client: Client }) {
  return (
    <Link href={`/clients/${client.id}`}>
      <div className={rowStyles}>
        <div>
          <p className="font-medium">{client.name}</p>
          <p className="text-muted-foreground text-sm">{client.company}</p>
        </div>

        <p className="text-muted-foreground text-sm">
          {client.projectsCount} projects
        </p>
      </div>
    </Link>
  );
}
