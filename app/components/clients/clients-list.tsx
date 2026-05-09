import Link from 'next/link';
import { getClients } from '@/lib/data/clients';
import ClientRow from '@/app/components/clients/client-row';

export default async function ClientsList() {
  const clients = await getClients();

  if (clients.length === 0) {
    return <p className="text-muted-foreground text-sm">No clients found.</p>;
  }

  return (
    <div className="flex flex-col gap-2">
      {clients.map((client) => (
        <ClientRow key={client.id} client={client} />
      ))}
    </div>
  );
}
