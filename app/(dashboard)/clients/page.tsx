import PageContainer from '@/app/components/layout/page-container';
import PageHeader from '@/app/components/layout/page-header';
import ClientsList from '@/app/components/clients/clients-list';
import { Button } from '@/app/components/shadcn/button';
import Link from 'next/link';

export default function ClientsPage() {
  return (
    <PageContainer>
      <div className="space-y-6">
        <PageHeader
          title="Clients"
          description="Manage your client directory."
          action={
            <Button asChild>
              <Link href="/clients/new">New Client</Link>
            </Button>
          }
        />

        <ClientsList />
      </div>
    </PageContainer>
  );
}
