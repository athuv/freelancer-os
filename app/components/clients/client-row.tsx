import Link from 'next/link';
import { Client } from '@/types/client';

export default function ClientRow({ client }: { client: Client }) {
  return (
    <Link href={`/clients/${client.id}`}>
      <div className="hover:bg-muted/50 flex flex-col gap-3 rounded-xl border px-4 py-3 transition sm:flex-row sm:items-center sm:justify-between">
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
