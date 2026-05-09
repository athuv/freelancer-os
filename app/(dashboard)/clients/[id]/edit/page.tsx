import { notFound } from 'next/navigation';

import PageContainer from '@/app/components/layout/page-container';
import PageHeader from '@/app/components/layout/page-header';

import ClientForm from '@/app/components/clients/client-form';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/shadcn/card';

import { getClientById } from '@/lib/data/clients';

export default async function EditClientPage({
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
          title="Edit Client"
          description="Update client information."
        />

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Client Details</CardTitle>

            <CardDescription>Modify the information below.</CardDescription>
          </CardHeader>

          <CardContent>
            <ClientForm mode="edit" client={client} />
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
