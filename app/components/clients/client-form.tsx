'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/app/components/shadcn/button';
import { Input } from '@/app/components/shadcn/input';
import { Label } from '@/app/components/shadcn/label';

import { createClient, updateClient } from '@/lib/data/clients';
import { clientSchema } from '@/lib/validation/client-schema';

import type { ClientFormProps } from '@/types/client-form';

export default function ClientForm({
  mode = 'create',
  client,
}: ClientFormProps) {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState(client?.name ?? '');
  const [email, setEmail] = useState(client?.email ?? '');
  const [company, setCompany] = useState(client?.company ?? '');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSubmitting(true);

    const result = clientSchema.safeParse({
      name,
      email,
      company,
    });

    if (!result.success) {
      setIsSubmitting(false);
      return;
    }

    try {
      if (mode === 'edit' && client) {
        await updateClient(client.id, result.data);

        router.push(`/clients/${client.id}`);
      } else {
        await createClient(result.data);

        router.push('/clients');
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>

        <Input
          id="name"
          placeholder="Enter client name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>

        <Input
          id="email"
          type="email"
          placeholder="Enter client email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>

        <Input
          id="company"
          placeholder="Enter company name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? mode === 'edit'
              ? 'Saving...'
              : 'Creating...'
            : mode === 'edit'
              ? 'Save Changes'
              : 'Create Client'}
        </Button>

        <Button type="button" variant="outline" asChild>
          <Link href="/clients">Cancel</Link>
        </Button>
      </div>
    </form>
  );
}
