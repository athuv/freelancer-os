import { Client } from '@/types/client';

export default function ClientRow({ client }: { client: Client }) {
  return (
    <div className="hover:bg-muted/50 flex items-center justify-between rounded-xl border px-4 py-3 transition">
      <div>
        <p className="font-medium">{client.name}</p>
        <p className="text-muted-foreground text-sm">{client.company}</p>
      </div>

      <p className="text-muted-foreground text-sm">
        {client.projectsCount} projects
      </p>
    </div>
  );
}
