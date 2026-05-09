import PageContainer from '@/app/components/layout/page-container';
import PageHeader from '@/app/components/layout/page-header';

import ClientForm from '@/app/components/clients/client-form';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/shadcn/card';

export default function NewClientPage() {
  return (
    <PageContainer>
      <div className="space-y-6">
        <PageHeader
          title="Create Client"
          description="Add a new client to your directory."
        />

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Client Details</CardTitle>

            <CardDescription>
              Fill in the information below to create a client.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <ClientForm />
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
