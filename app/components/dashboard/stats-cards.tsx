import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/shadcn/card';

import { getDashboardStats } from '@/lib/data/dashboard';

export default async function StatsCards() {
  const stats = await getDashboardStats();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Projects</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-semibold">
          {stats.totalProjects}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Completed</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-semibold">
          {stats.completedProjects}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>In Progress</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-semibold">
          {stats.inProgressProjects}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Clients</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-semibold">
          {stats.totalClients}
        </CardContent>
      </Card>
    </div>
  );
}
