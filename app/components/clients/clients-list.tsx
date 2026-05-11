'use client';

import ClientRow from '@/app/components/clients/client-row';
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';

export default function ClientsList() {
  const clients = useQuery(api.clients.getClients);

  if (!clients) {
    return <p>Loading...</p>;
  }

  if (clients.length === 0) {
    return <p className="text-muted-foreground text-sm">No clients found.</p>;
  }

  return (
    <div className="flex flex-col gap-2">
      {clients.map((client) => (
        <ClientRow key={client._id} client={client} />
      ))}
    </div>
  );
}
