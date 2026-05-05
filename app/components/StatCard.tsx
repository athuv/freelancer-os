import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/shadcn/card';

type StatCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
};

const StatCard = ({ title, value, icon }: StatCardProps) => {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-muted-foreground text-sm font-medium">
          {title}
        </CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>

      <CardContent>
        <div className="text-2xl font-semibold tracking-tight">{value}</div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
