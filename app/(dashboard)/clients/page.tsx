import { clients } from '@/data/mock-clients';
import ClientRow from '@/app/components/clients/client-row';
import EmptyState from '@/app/components/shared/empty-state';
import { Users } from 'lucide-react';
import PageContainer from '@/app/components/layout/page-container';

export default function ClientsPage() {
  return (
    <PageContainer>
      <h1 className="text-2xl font-semibold tracking-tight">Clients</h1>

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
