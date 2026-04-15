import StatCard from '@/app/components/StatCard';

const StatsCards = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard title="Total Clients" value="12" />
      <StatCard title="Active Projects" value="5" />
      <StatCard title="Revenue" value="$8,240" />
      <StatCard title="Outstanding" value="$1,200" />
    </div>
  );
};

export default StatsCards;
