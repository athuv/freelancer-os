import Link from 'next/link';
import type { Client } from '@/types/client';
import DeleteClientButton from '@/app/components/clients/delete-client-button';
import { Button } from '@/app/components/shadcn/button';

type Props = {
  client: Client;
};

export default function ClientRow({ client }: Props) {
  return (
    <div className="hover:bg-muted/50 flex items-center justify-between rounded-xl border px-4 py-3 transition">
      <div className="space-y-0.5">
        <Link
          href={`/clients/${client._id}`}
          className="font-medium hover:underline"
        >
          {client.name}
        </Link>

        <p className="text-muted-foreground text-sm">{client.email}</p>
      </div>

      <div className="flex items-center gap-3">
        {client.company && (
          <span className="text-muted-foreground hidden text-sm sm:block">
            {client.company}
          </span>
        )}

        <Button variant="outline" size="sm" asChild>
          <Link href={`/clients/${client._id}/edit`}>Edit</Link>
        </Button>

        <DeleteClientButton clientId={client._id} />
      </div>
    </div>
  );
}
