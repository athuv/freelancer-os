import type { Client } from '@/types/client';

export type ClientFormProps = {
  mode?: 'create' | 'edit';
  client?: Client;
};
