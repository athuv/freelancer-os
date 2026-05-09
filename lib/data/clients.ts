import { clients } from '@/data/mock-clients';
import type { Client } from '@/types/client';

export async function getClients() {
  return clients;
}

export async function getClientById(id: string) {
  return clients.find((c) => c.id === id);
}

export async function createClient(data: {
  name: string;
  email: string;
  company?: string;
}) {
  await new Promise((res) => setTimeout(res, 300));

  const newClient: Client = {
    id: crypto.randomUUID(),
    name: data.name,
    email: data.email,
    company: data.company,
  };

  clients.unshift(newClient);

  return newClient;
}

export async function updateClient(
  id: string,
  data: {
    name: string;
    email: string;
    company?: string;
  },
) {
  await new Promise((res) => setTimeout(res, 300));

  const client = clients.find((c) => c.id === id);

  if (!client) return null;

  client.name = data.name;
  client.email = data.email;
  client.company = data.company;

  return client;
}

export async function deleteClient(id: string) {
  await new Promise((res) => setTimeout(res, 300));

  const index = clients.findIndex((c) => c.id === id);

  if (index === -1) return null;

  const [deleted] = clients.splice(index, 1);

  return deleted;
}
