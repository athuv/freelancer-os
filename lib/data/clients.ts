import { clients } from '@/data/mock-clients';

export function getClients() {
  return clients;
}

export function getClientById(id: string) {
  return clients.find((c) => c.id === id);
}
