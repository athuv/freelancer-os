import ClientRow from '@/app/components/clients/client-row';
import EmptyState from '@/app/components/shared/empty-state';
import { Users } from 'lucide-react';
import PageContainer from '@/app/components/layout/page-container';
import { getClients } from '@/lib/data/clients';
import PageHeader from '@/app/components/layout/page-header';

export default async function ClientsPage() {
  const clients = await getClients();
  return (
    <PageContainer>
      <PageHeader
        title="Clients"
        description="View and manage your client relationships."
      />

      <div className="flex flex-col gap-3">
        {clients.length === 0 ? (
          <EmptyState
            icon={<Users className="size-10" />}
            title="No clients yet"
            description="Add your first client to start managing relationships."
          />
        ) : (
          clients.map((client) => <ClientRow key={client.id} client={client} />)
        )}
      </div>
    </PageContainer>
  );
}
