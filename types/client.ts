import { Id } from '@/convex/_generated/dataModel';

export type Client = {
  _id: Id<'clients'>;
  name: string;
  email?: string;
  company?: string;
};
