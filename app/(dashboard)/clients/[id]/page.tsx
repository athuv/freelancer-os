'use client';

import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useParams } from 'next/navigation';

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
import DeleteClientButton from '@/app/components/clients/delete-client-button';
import { Id } from '@/convex/_generated/dataModel';

export default function ClientDetailPage() {
  const params = useParams();
  const id = params.id as Id<'clients'>;

  const client = useQuery(api.clients.getClientById, {
    id,
  });

  if (client === undefined) {
    return <p>Loading...</p>;
  }

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
                <Link href={`/clients/${id}/edit`}>Edit Client</Link>
              </Button>

              <DeleteClientButton clientId={client._id} />
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
