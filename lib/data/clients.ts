import { clients } from '@/data/mock-clients';

export async function getClients() {
  return clients;
}

export async function getClientById(id: string) {
  return clients.find((c) => c.id === id);
}
