import { clients } from '@/data/mock-clients';

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Clients</h1>

      <div className="space-y-3">
        {clients.map((client) => (
          <div
            key={client.id}
            className="hover:bg-muted/50 flex items-center justify-between rounded-xl border px-4 py-3 transition"
          >
            <div>
              <p className="font-medium">{client.name}</p>
              <p className="text-muted-foreground text-sm">{client.company}</p>
            </div>

            <p className="text-muted-foreground text-sm">
              {client.projectsCount} projects
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
