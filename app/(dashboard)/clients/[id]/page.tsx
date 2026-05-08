import Link from 'next/link';
import { projects } from '@/data/mock-projects';
import PageContainer from '@/app/components/layout/page-container';
import { getClientById } from '@/lib/data/clients';
import { assertExists } from '@/lib/utils/handle-not-found';
import EmptyState from '@/app/components/shared/empty-state';
import { Folder } from 'lucide-react';

export default async function ClientDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const client = await getClientById(id);

  assertExists(client);

  const clientProjects = projects.filter((p) => p.client === client.name);

  return (
    <PageContainer>
      <div>
        <h1 className="text-2xl font-semibold">{client.name}</h1>

        <p className="text-muted-foreground text-sm">{client.company}</p>
      </div>

      <div className="rounded-2xl border p-4">
        <p className="text-sm">
          <span className="text-muted-foreground">Email:</span>
          {client.email ?? 'Not provided'}
        </p>

        <p className="mt-2 text-sm">
          <span className="text-muted-foreground">Projects:</span>
          {client.projectsCount}
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Projects</h2>

        {clientProjects.length === 0 ? (
          <EmptyState
            icon={<Folder className="size-10" />}
            title="No projects yet"
            description="Once you create or assign projects to this client, they will show up here."
          />
        ) : (
          clientProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="hover:bg-muted/50 flex items-center justify-between rounded-xl border px-4 py-3 transition"
            >
              <div>
                <p className="font-medium">{project.name}</p>

                <p className="text-muted-foreground text-sm">
                  {project.status}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </PageContainer>
  );
}
