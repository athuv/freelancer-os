import StatCard from '@/app/components/StatCard';
import { Users, FolderKanban, DollarSign, AlertCircle } from 'lucide-react';

const StatsCards = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard title="Total Clients" value="12" icon={<Users size={16} />} />
      <StatCard
        title="Active Projects"
        value="5"
        icon={<FolderKanban size={16} />}
      />
      <StatCard
        title="Revenue"
        value="$8,240"
        icon={<DollarSign size={16} />}
      />
      <StatCard
        title="Outstanding"
        value="$1,200"
        icon={<AlertCircle size={16} />}
      />
    </div>
  );
};

export default StatsCards;
