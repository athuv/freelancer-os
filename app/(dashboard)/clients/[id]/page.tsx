import { notFound } from 'next/navigation';
import Link from 'next/link';

import PageContainer from '@/app/components/layout/page-container';
import PageHeader from '@/app/components/layout/page-header';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/shadcn/card';

import { Button } from '@/app/components/shadcn/button';

import { getClientById } from '@/lib/data/clients';

import DeleteClientButton from '@/app/components/clients/delete-client-button';

export default async function ClientDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const client = await getClientById(id);

  if (!client) {
    notFound();
  }

  return (
    <PageContainer>
      <div className="space-y-6">
        <PageHeader
          title={client.name}
          description="Client details and contact information."
          action={
            <div className="flex items-center gap-3">
              <Button variant="outline" asChild>
                <Link href={`/clients/${client.id}/edit`}>Edit Client</Link>
              </Button>

              <DeleteClientButton clientId={client.id} />
            </div>
          }
        />

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Client Information</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div>
              <p className="text-muted-foreground text-sm">Name</p>

              <p className="font-medium">{client.name}</p>
            </div>

            <div>
              <p className="text-muted-foreground text-sm">Email</p>

              <p className="font-medium">{client.email}</p>
            </div>

            {client.company && (
              <div>
                <p className="text-muted-foreground text-sm">Company</p>

                <p className="font-medium">{client.company}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
