'use client';

import ClientRow from '@/app/components/clients/client-row';
import ClientRowSkeleton from '@/app/components/shared/skeletons/client-row-skeleton';
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';

export default function ClientsList() {
  const clients = useQuery(api.clients.getClients);

  if (clients === undefined) {
    return (
      <div className="space-y-3">
        <ClientRowSkeleton />
      </div>
    );
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
