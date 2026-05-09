import Link from 'next/link';

import { Button } from '@/app/components/shadcn/button';
import { Input } from '@/app/components/shadcn/input';
import { Label } from '@/app/components/shadcn/label';
import { Textarea } from '@/app/components/shadcn/textarea';

export default function ProjectForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Project Name</Label>

        <Input id="name" placeholder="Enter project name" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="client">Client</Label>

        <Input id="client" placeholder="Enter client name" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>

        <Textarea id="description" placeholder="Describe the project..." />
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit">Save Project</Button>

        <Button type="button" variant="outline" asChild>
          <Link href="/projects">Cancel</Link>
        </Button>
      </div>
    </form>
  );
}
