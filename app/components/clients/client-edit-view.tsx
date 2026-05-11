'use client';

import { useParams } from 'next/navigation';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

import ClientForm from './client-form';
import { Id } from '@/convex/_generated/dataModel';

export default function ClientEditView() {
  const params = useParams();
  const id = params.id as Id<'clients'>;

  const client = useQuery(api.clients.getClientById, { id });

  if (client === undefined) {
    return <p>Loading...</p>;
  }

  if (!client) {
    return <p>Client not found</p>;
  }

  return <ClientForm mode="edit" client={client} />;
}
